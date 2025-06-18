const CACHE_NAME = 'maine-pest-pros-v1';
const urlsToCache = [
  '/',
  '/src/index.css',
  '/images/maine-pest-pros-hero.webp',
  '/images/maine-pest-pros-logo.png',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});