/* const staticCacheName = 's-app-v1'

const assetUrls = [
    'index.html',
    'app.js',
    'styles.css'
]

self.addEventListener('install', (event) => {
    //console.log('[SW]: install')
    //event.waitUntil(
      //  caches.open(staticCacheName).then(cache => cache.addAll(assetUrls))
    //)
    const cache = await caches.open(staticCacheName)
    await cache.addAll(assetUrls)

})

self.addEventListener('activate', (event) => {
    console.log('[SW]: activate')
})
self.addEventListener('fetch', (event) => {
    console.log('Fetch', event.url)

    event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
} */
 
const staticCacheName = 's-app-v1'

const assetUrls = [
    'index.html',
    'app.js',
    'CSS/main.css'
]

self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName)
    await cache.addAll(assetUrls)
})

self.addEventListener('activate', event => {
    console.log('[SW]: activate')
})

self.addEventListener('fetch', event => {
    console.log('Fetch', event.request.url)
    event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}

/* self.addEventListener('install', (event) => {
    console.log('[SW]: install')
}) 

self.addEventListener('activate', (event) => {
    console.log('[SW]: activate')
}) */
