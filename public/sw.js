const SHELL='tempo-shell-v1';const MEDIA='tempo-media-v1';
self.addEventListener('install',event=>event.waitUntil((async()=>{const files=await (await fetch('/precache.json',{cache:'reload'})).json();const cache=await caches.open(SHELL);await cache.addAll(files);})()));
// No skipWaiting: activation is requested by the UI only with no active session.
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
// Same-origin static files do not vary by Origin. Vite adds Vary: Origin, while
// precache requests omit Origin and module requests include it.
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith((async()=>{const shell=await caches.open(SHELL);const media=await caches.open(MEDIA);const cached=await shell.match(event.request,{ignoreVary:true})||await media.match(event.request,{ignoreVary:true});if(cached)return cached;try{const response=await fetch(event.request);if(response.ok){const cache=await caches.open(new URL(event.request.url).pathname.startsWith('/assets/exercises')?MEDIA:SHELL);await cache.put(event.request,response.clone());}return response;}catch{if(event.request.mode==='navigate')return (await shell.match('/'))||Response.error();return Response.error();}})());});
