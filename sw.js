const cacheName = 'skoda_zasedacky_cache';

const staticAssets = [
    './',
    './src/js/app.js',
    './src/js/initCamera.js',
    './src/style/styles.css',

    './node_modules/qr-scanner/qr-scanner.min.js',
    './node_modules/qr-scanner/qr-scanner-worker.min.js',

    './img/'
];

self.addEventListener('install', async function () {
    const cache = await caches.open(cacheName);
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);

    if(url.pathname == 'api/roomData' || url.pathname == "api/roomSchedule"){
        JSON.parse(request.body).id;
    }

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(request));
    } else {
        event.respondWith(networkFirst(request));
    }
});

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request);
}

async function networkFirst(request) {
    const dynamicCache = await caches.open(cacheName + '-dynamic');
    try {
        const networkResponse = await fetch(request);
        dynamicCache.put(request, networkResponse.clone());
        return networkResponse;
    } catch (err) {
        const cachedResponse = await dynamicCache.match(request);
        return cachedResponse || await caches.match('./monkResponse.json');
    }
}  