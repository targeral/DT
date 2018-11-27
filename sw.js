console.log('hello from sw.js version1');

const CACHENAME = 'cache-content';
const CACHE_FILE_LIST = [
    './vendors~app.0cc48.js',
    './app.3cc6a.js',
    './service-worker.js',
    './app.d95d7.css',

    './index.html',

    '/'
]; // 这部分可以自动化处理


// cache逻辑
const cacheFileList = () => {
    return caches.open(CACHENAME).then(cache => {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(CACHE_FILE_LIST);
    });
}

// sw生命周期
const swInstall = (e) => {
    console.log('[SerivceWorker] Install');
    self.skipWaiting();
    e.waitUntil(
        cacheFileList()
    );
};

const swFetch = (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(function (response) {
                // Cache hit - return response
                console.log(e.request, response)
                if (response) {
                    return response;
                }
                if (e.request.url.indexOf('chrome-extension://') > -1) {
                    // fetch(e.request).then(v => console.log(v)).catch(err => console.log('err', err))
                    return;
                }
                return fetch(e.request).catch(e => console.log('sdfasd', e));
            })
    )
    console.log('e', e)
};

self.addEventListener('install', swInstall);

self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', swFetch);