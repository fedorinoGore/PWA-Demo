const CACHE_NAME = "version-1"

const urlsToCache = [ 'index.html', 'offline.html' ]

const self = this;

const showOffline = () => caches.match('offline.html')

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.info('📦 Opened cache')
                return cache.addAll(urlsToCache)
            })
    )
})
// Listen for request
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(
                () => fetch(event.request).catch(showOffline)
            )
    )
})
// Activate Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = []
    cacheWhitelist.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            cacheNames.map(cacheName => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})
