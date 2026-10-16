import {it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
it('retrouve les modules en cache malgré Vary: Origin du serveur local',async()=>{
 const handlers={};
 const request=new Request('http://tempo.local/assets/index.js',{headers:{Origin:'http://tempo.local'}});
 const body=new Response('cached module',{headers:{Vary:'Origin'}});
 // Model Cache API Vary matching: precache request had no Origin.
 const cache={match:async(req,options)=>options?.ignoreVary?body.clone():undefined};
 runInNewContext(readFileSync('public/sw.js','utf8'),{self:{location:{origin:'http://tempo.local'},addEventListener:(name,fn)=>handlers[name]=fn},caches:{open:async()=>cache},URL,Response,fetch:async()=>{throw Error('offline')}});
 let response;handlers.fetch({request,respondWith:(p)=>response=p});
 expect(await(await response).text()).toBe('cached module');
});
