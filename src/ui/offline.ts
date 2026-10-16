import {manifest} from '../catalog';
import recordings from '../audio/recordings.json';
import tubeRecordings from '../audio/tube-recordings.json';
export interface OfflineStatus {application:boolean;visuals:number;visualTotal:number;audio:number;audioTotal:number;}
export async function inspectOffline():Promise<OfflineStatus>{
 const visualPaths=manifest.entries.flatMap(e=>[...e.files,...e.extras]).filter(f=>f.checksum).map(f=>f.path);
 const audioPaths=[...recordings.entries,...tubeRecordings.entries].map(e=>e.url);
 const result:OfflineStatus={application:false,visuals:0,visualTotal:visualPaths.length,audio:0,audioTotal:audioPaths.length};
 if(!('caches'in window))return result;
 const names=await caches.keys(),mediaName='tempo-media-'+manifest.mediaRevision;
 const media=names.includes(mediaName)?await caches.open(mediaName):null;
 if(media)result.visuals=(await Promise.all(visualPaths.map(async path=>!!await media.match(path,{ignoreVary:true})))).filter(Boolean).length;
 const currentAssets=[...document.querySelectorAll<HTMLScriptElement>('script[type=module][src]')].map(e=>new URL(e.src).pathname);
 for(const name of names.filter(n=>n.startsWith('tempo-shell-v1-'))){
  const cache=await caches.open(name),response=await cache.match('/precache.json');
  if(!response)continue;
  const paths:unknown=await response.json();
  if(!Array.isArray(paths)||!currentAssets.length||!currentAssets.every(p=>paths.includes(p)))continue;
  result.application=!!navigator.serviceWorker?.controller&&(await Promise.all(paths.map(async path=>typeof path==='string'&&!!await cache.match(path,{ignoreVary:true})))).every(Boolean);
  result.audio=(await Promise.all(audioPaths.map(async path=>!!await cache.match(path,{ignoreVary:true})))).filter(Boolean).length;
  break;
 }
 return result;
}
