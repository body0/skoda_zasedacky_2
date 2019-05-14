const cacheName = 'skoda_zasedacky_cache';

const staticAssets = [
  './',
  './app.js',
  './styles.css',
  './fallback.json',
  './images/fetch-dog.jpg'
];

self.addEventListener('install', async function () {
  const cache = await caches.open(cacheName);
  cache.addAll(staticAssets);
});