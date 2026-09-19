/* R69：学习打卡站 Service Worker —— 完全离线支持
 * 目标：把整个单文件应用（index.html，约 16MB，图片已内联）缓存到设备本地，
 *       之后断网 / 无网络也能正常打开使用，数据仍存 localStorage。
 * 策略：
 *   - 导航请求（打开页面）：R78 改为「网络优先 + 条件校验」
 *   - 其它同源 GET 资源：缓存优先（cache-first）+ 后台更新（stale-while-revalidate）
 *   - 跨域请求（如 CloudBase SDK imgcache.qq.com）：不拦截，直接走网络
 *
 * R78 重要修复（iPad 上看到旧版本的问题）：
 *   旧实现对所有请求都用 cache-first —— 命中缓存就直接返回旧 index.html，
 *   只靠后台静默拉取新版写缓存，必须「再打开一次」才生效。
 *   而 iPad Safari 的标签页常驻后台不会重新加载，于是长期停在旧版本。
 *   现在导航请求先向服务器发条件请求（If-None-Match / ETag）：
 *     · 内容未变 → 服务器返回 304，几乎零流量、秒开；
 *     · 内容已变 → 拉取新 index.html 写入缓存并立即呈现；
 *     · 完全离线 / 超时 → 回退本地缓存，照常使用。
 *
 * R119.1 重要修复（iPad 上「加载很慢 / 打不开」的问题）：
 *   现象：弱网（尤其国内直连 GitHub Pages）下打开会白等很久，最后只看到一行
 *         纯文本报错页；且同一个网址 WiFi 下比手机热点更慢。
 *   根因（三层叠在一起）：
 *     ① install 里的 addAll(PRECACHE) 必须等整份 11MB+ 下完（或失败）才进 installed，
 *        弱网下会长时间拖住 SW 激活，并与首屏抢本来就很窄的带宽；
 *     ② 缓存一旦为空，导航超时后 cachedShell() 直接返回 503 纯文本 → 白屏；
 *        而缓存之所以为空，正是 ① 里那次预缓存失败了（原来只 console.warn 就放过），
 *        于是形成「缓存永远为空 → 每次打开都白等 + 白屏」的死循环；
 *     ③ NAV_TIMEOUT 6 秒，对有缓存的正常场景也偏长。
 *   修复（本次改动）：
 *     · NAV_TIMEOUT 6000 → 2500：有缓存时最多等 2.5 秒就秒开；
 *     · 导航前先探一次缓存：无缓存可回退时不再白等超时，直接把结果交给浏览器原生加载
 *       （用户看到的是正常加载进度，而不是报错页），并且加载成功即写入缓存，
 *       从此不会再出现「缓存永远空着」；
 *     · 预缓存加 PRECACHE_TIMEOUT 超时保护，到点先激活，不再阻塞；
 *     · 完全离线且确实无缓存时，给一个可读的提示页（带「重试」按钮），不再返回 503 纯文本。
 */
var CACHE_NAME = 'zoo-checkin-v1';
var PRECACHE = ['./', './index.html'];
var NAV_TIMEOUT = 2500;      // R119.1：有缓存时的快速回退窗口（原 6000ms 偏长）
var HARD_TIMEOUT = 30000;    // R119.1：无缓存且网络长时间无响应时的兜底，避免无限转圈
var PRECACHE_TIMEOUT = 25000; // R119.1：预缓存最多占用这么久，超时就先激活 SW
/* R70：构建指纹。部署脚本会把 a715575704a1 替换为当期 index.html 的 sha256 前 12 位。
 * 作用：只在站点内容真的变化时，sw.js 本身才变化，从而触发浏览器 SW 更新流程
 * （install → 重新预缓存新 index.html → installed → 页面自动重载到新版）。 */
var BUILD = 'a715575704a1';
/* R93：版本号与版本更新时间。部署脚本会把 R124 替换为当期轮次号（如 R93）、
 * 2026-09-19 15:05 替换为本次部署时间（北京时间，格式 YYYY-MM-DD HH:mm）。
 * 用途：「设置中心 → 版本与更新」显示「当前版本 + 更新时间」，点「检查更新」后即为最新读数。 */
var APP_VERSION = 'R124';
var BUILD_TIME = '2026-09-19 15:05';

self.addEventListener('install', function (e) {
  self.skipWaiting();
  // R119.1：预缓存加超时保护（Promise.race）。原实现必须等 addAll 整份下完或失败，
  // 弱网下会让 SW 迟迟进不了 installed，页面也就迟迟拿不到缓存。
  // 现在最多占 PRECACHE_TIMEOUT：到点先激活，缓存由「导航成功后自动写入」补齐。
  e.waitUntil(
    Promise.race([
      caches.open(CACHE_NAME).then(function (c) {
        return c.addAll(PRECACHE);
      }),
      new Promise(function (r) { setTimeout(r, PRECACHE_TIMEOUT); })
    ]).catch(function (err) {
      console.warn('[SW] 预缓存未完成（不影响使用，页面加载成功后会自动写入缓存）：', err);
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.map(function (n) {
        return n === CACHE_NAME ? null : caches.delete(n);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

// 页面发来 SKIP_WAITING 时立即接管（配合「立即更新」按钮）
self.addEventListener('message', function (e) {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// R119.1：完全离线且确实无缓存时的友好提示页（替代原先的 503 纯文本白屏）。
// 用户至少能看懂发生了什么、该怎么做，而不是对着空白页怀疑「网站坏了」。
function offlinePage() {
  return new Response(
    '<!doctype html><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>学习打卡站 · 首次加载需联网</title>' +
    '<body style="margin:0;font:16px/1.7 -apple-system,system-ui,sans-serif;' +
    'color:rgb(30,58,138);background:rgb(234,243,255);height:100vh;display:flex;' +
    'flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center">' +
    '<div style="font-size:22px;font-weight:700;margin-bottom:10px">学习打卡站</div>' +
    '<p style="margin:0 0 8px">首次打开需要联网下载一次，之后就能离线秒开。</p>' +
    '<p style="margin:0 0 20px;font-size:14px;color:rgb(47,111,199)">' +
    '当前网络不可用。建议先连手机热点完成首次加载。</p>' +
    '<button id="swRetry" onclick="location.reload()" style="font-size:16px;font-weight:700;' +
    'color:rgb(255,255,255);background:rgb(30,58,138);border:none;border-radius:999px;' +
    'padding:12px 28px">重试</button></body>',
    { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}

// 离线兜底：优先已缓存的 index.html，其次 './'。
// R119.1：两者都没有时不再返回 503 纯文本（iPad 上就表现为「打不开」），
//         改为直连网络拉一次（浏览器原生加载、成功后写入缓存），确实失败才给提示页。
function cachedShell() {
  return caches.match('./index.html').then(function (h) {
    if (h) return h;
    return caches.match('./').then(function (h2) {
      if (h2) return h2;
      return fetch('./index.html', { cache: 'no-cache' }).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function (c) { c.put('./index.html', copy); }).catch(function () {});
          return res;
        }
        return offlinePage();
      }).catch(function () { return offlinePage(); });
    });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  // 跨域资源（CloudBase SDK / 第三方 CDN）不拦截，直接走网络
  if (url.origin !== self.location.origin) return;

  // ---- R78：导航请求 —— 网络优先，保证打开即是最新版本 ----
  // R119.1：按「是否已有缓存」分流，避免无缓存时白等超时再把页面打成报错页 ——
  //   · 有缓存  → NAV_TIMEOUT(2.5s) 内拿到网络响应就用新版，否则立刻秒开缓存；
  //   · 无缓存  → 不启动快速回退（回退也没东西可给），交给浏览器原生加载，有进度条；
  //   · 网络失败 → 回退缓存；确实无缓存则 cachedShell 内部直连网络 / 给提示页；
  //   · 硬兜底  → 无缓存且网络长时间无响应时，HARD_TIMEOUT 后给提示页，不无限转圈。
  if (req.mode === 'navigate') {
    e.respondWith(new Promise(function (resolve) {
      var settled = false;
      var timer = null;
      var hardTimer = null;
      var hasShell = false;
      function clearTimers() { clearTimeout(timer); clearTimeout(hardTimer); }
      // 先探一次缓存：无缓存时任何「等超时」都是纯浪费用户时间
      caches.match('./index.html').then(function (h) { hasShell = !!h; }).catch(function () {});
      timer = setTimeout(function () {
        if (settled || !hasShell) return;
        settled = true;
        clearTimers();
        resolve(cachedShell());
      }, NAV_TIMEOUT);
      hardTimer = setTimeout(function () {
        if (settled) return;
        settled = true;
        clearTimers();
        resolve(cachedShell());
      }, HARD_TIMEOUT);
      // cache:'no-cache' → 让浏览器带上 ETag 做条件请求，未变更时服务器回 304，几乎不耗流量
      fetch(req, { cache: 'no-cache' }).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function (c) { c.put(req, copy); }).catch(function () {});
        }
        if (settled) { return; }
        settled = true;
        clearTimers();
        resolve(res);
      }).catch(function () {
        if (settled) return;
        settled = true;
        clearTimers();
        resolve(cachedShell());
      });
    }));
    return;
  }

  // ---- 其它同源资源：缓存优先 + 后台更新 ----
  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) {
        // 命中缓存：立即返回，同时后台静默更新，下次打开即为新版
        fetch(req).then(function (res) {
          if (res && res.ok) {
            var copy = res.clone();
            caches.open(CACHE_NAME).then(function (c) { c.put(req, copy); });
          }
        }).catch(function () { /* 离线时静默忽略 */ });
        return hit;
      }
      // 未命中：走网络并写入缓存
      return fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        // R119.1：同源子资源（sw.js / 图标等）取不到时的中性兜底，
        // 不再复用那句会让人误解成「整站坏掉」的旧离线文案。
        return new Response('offline', { status: 503, statusText: 'offline' });
      });
    })
  );
});
