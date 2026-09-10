/* R69：学习打卡站 Service Worker —— 完全离线支持
 * 目标：把整个单文件应用（index.html，约 14MB，图片已内联）缓存到设备本地，
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
 */
var CACHE_NAME = 'zoo-checkin-v1';
var PRECACHE = ['./', './index.html'];
var NAV_TIMEOUT = 6000; // 弱网保护：6 秒拿不到网络响应就用缓存，避免白屏
/* R70：构建指纹。部署脚本会把 08d1e856c173 替换为当期 index.html 的 sha256 前 12 位。
 * 作用：只在站点内容真的变化时，sw.js 本身才变化，从而触发浏览器 SW 更新流程
 * （install → 重新预缓存新 index.html → installed → 页面自动重载到新版）。 */
var BUILD = '08d1e856c173';

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (c) {
      return c.addAll(PRECACHE);
    }).catch(function (err) {
      console.warn('[SW] 预缓存失败：', err);
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

// 离线兜底：优先已缓存的 index.html，其次 './'，都没有则返回 503
function cachedShell() {
  return caches.match('./index.html').then(function (h) {
    if (h) return h;
    return caches.match('./').then(function (h2) {
      return h2 || new Response('离线且无缓存', { status: 503, statusText: 'offline' });
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
  if (req.mode === 'navigate') {
    e.respondWith(new Promise(function (resolve) {
      var settled = false;
      var timer = setTimeout(function () {
        if (settled) return;
        settled = true;
        resolve(cachedShell());
      }, NAV_TIMEOUT);
      // cache:'no-cache' → 让浏览器带上 ETag 做条件请求，未变更时服务器回 304，几乎不耗流量
      fetch(req, { cache: 'no-cache' }).then(function (res) {
        if (settled) { return; }
        settled = true;
        clearTimeout(timer);
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function (c) { c.put(req, copy); }).catch(function () {});
        }
        resolve(res);
      }).catch(function () {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
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
        return new Response('离线且无缓存', { status: 503, statusText: 'offline' });
      });
    })
  );
});
