const CACHE_NAME = 'mbti-tips-v2';
const urlsToCache = [
    './',
    './index.html',
    './css/style.css',
    './js/app.js',
    './js/data.js',
    './manifest.json',
    './icon-192.svg',
    './icon-512.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).then(r => {
            const c = r.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, c));
            return r;
        }).catch(() => caches.match(e.request))
    );
});
