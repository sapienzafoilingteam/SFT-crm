/* Bump the version whenever the public offline page changes. Never cache CRM or API responses. */
const CACHE = 'sft-public-offline-v1';
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(['/offline.html', '/pwa/offline.js'])));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('sft-public-offline-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('message', event => {
  if (event.data?.type === 'ACTIVATE_UPDATE') self.skipWaiting();
});
self.addEventListener('fetch', event => {
  if (event.request.method === 'GET' && new URL(event.request.url).origin === self.location.origin && new URL(event.request.url).pathname === '/pwa/offline.js') { event.respondWith(caches.match('/pwa/offline.js').then(response => response || fetch(event.request))); return; }
  if (event.request.method !== 'GET' || event.request.mode !== 'navigate' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).catch(async () => (await caches.match('/offline.html')) || Response.error()));
});
