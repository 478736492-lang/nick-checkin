/* R69：学习打卡站 Service Worker —— 完全离线支持
 * 目标：把整个单文件应用（index.html，约 14MB，图片已内联）缓存到设备本地，
 *       之后断网 / 无网络也能正常打开使用，数据仍存 localStorage。
 * 策略：
 *   - 同源 GET 请求：缓存优先（cache-first）+ 后台更新（stale-while-revalidate）
 *   - 导航请求离线且无缓存时：回退到已缓存的 index.html
 *   - 跨域请求（如 CloudBase SDK imgcache.qq.com）：不拦截，直接走网络
 */
var CACHE_NAME = 'zoo-checkin-v1';
var PRECACHE = ['./', './index.html'];
/* R70：构建指纹。部署脚本会把 101fd89e82c7 替换为当期 index.html 的 sha256 前 12 位。
 * 作用：只在站点内容真的变化时，sw.js 本身才变化，从而触发浏览器 SW 更新流程
 * （install → 重新预缓存新 index.html → installed → 页面自动重载到新版）。 */
var BUILD = '101fd89e82c7';

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

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  // 跨域资源（CloudBase SDK / 第三方 CDN）不拦截，直接走网络
  if (url.origin !== self.location.origin) return;

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
        // 完全离线且无缓存：导航请求回退到首页
        if (req.mode === 'navigate') return caches.match('./index.html');
        return new Response('离线且无缓存', { status: 503, statusText: 'offline' });
      });
    })
  );
});
