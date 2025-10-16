// Cache name and assets
const CACHE_NAME = 'simple-pwa-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/style.css'
];

// Install event - cache assets
self.addEventListener('install', event => {
  console.log('📦 Installing service worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Fetch event - serve cached files
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  console.log('🧹 Activating new service worker...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});
