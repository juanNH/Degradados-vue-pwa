const CACHE_NAME = "v1_cache_contador_app_vue"
const urlsToCache = [
    "./",
    "./img/icon16.png",
    "./img/icon32.png",
    "./img/icon64.png",
    "./img/icon128.png",
    "./img/icon256.png",
    "./img/icon512.png",
    "./img/icon1024.png",
    "./js/js.js",
    "./js/mountApp.js",
    "https://unpkg.com/vue@next",
    "./css.css",
    "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
];

self.addEventListener('install',e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(
            cache => cache.addAll(urlsToCache).then(
                () => self.skipWaiting()
            ).catch(
                err => console.log(err)
            )
        )
    )
})

self.addEventListener("activate", e =>{
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys().then(
            cacheNames => {
                return Promise.all(
                    cacheNames.map(
                        cacheName => {
                            if(cacheWhitelist.indexOf(cacheName) === -1){
                                return caches.delete(cacheName)
                            }
                        }
                    )
                )
            }
        )
        .then(
            () => self.clients.claim()
        )
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then(
            (res) => {
                if(res){
                    return res;
                }    
                return fetch(e.request);
            })
    );
});