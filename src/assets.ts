import {asset,manifest,hasAssets} from './catalog';
import type {Program} from './types';
export async function prepareAssets(program:Program){
 const paths=[...new Set(program.blocks.filter(b=>!b.exercise.textOnlyPrototype||hasAssets(b.exercise)).flatMap(b=>['step-01.webp','step-02.webp','step-03.webp','demo.gif','thumb.webp','muscles.svg',...(b.exercise.extraAngles.includes('top')?['top-step-01.webp','top-step-02.webp','top-step-03.webp']:[])].map(f=>asset(b.exercise,f))))];
 const offlineReady='caches' in window;
 if(offlineReady)await download(paths);
 else for(const path of paths){const response=await fetch(path);if(!response.ok||!response.headers.get('content-type')?.startsWith('image/'))throw Error('Asset indisponible : '+path);await response.blob();}
 return {count:paths.length,offlineReady};
}
async function download(paths:string[],progress?:(n:number,total:number)=>void){const cache=await caches.open('tempo-media-'+manifest.mediaRevision);let n=0;for(const path of paths){let response=await cache.match(path);if(!response){response=await fetch(path);if(!response.ok||!response.headers.get('content-type')?.startsWith('image/'))throw Error('Asset indisponible : '+path);await cache.put(path,response);}n++;progress?.(n,paths.length);}}
export async function downloadAvailable(progress?:(n:number,total:number)=>void){if(!('caches' in window))throw Error('Le hors ligne nécessite une adresse HTTPS sur ce téléphone.');const paths=manifest.entries.flatMap(e=>[...e.files,...e.extras]).filter(f=>f.checksum).map(f=>f.path);await download(paths,progress);return paths.length;}
export async function registerWorker(){if(import.meta.env.PROD&&'serviceWorker'in navigator){return navigator.serviceWorker.register('/sw.js');}return null;}
