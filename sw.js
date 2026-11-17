const N='rah-v2';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(N).then(c=>c.addAll(['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'])))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==N).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(N).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request))));
