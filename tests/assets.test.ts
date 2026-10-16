import {afterEach,it,expect,vi} from 'vitest';
import {prepareAssets} from '../src/assets';
import {blankProgram,createBlock} from '../src/composer';
import {defaultProfile,defaultEquipment,exercises} from '../src/catalog';
afterEach(()=>vi.unstubAllGlobals());
it('prépare une séance en HTTP sans annoncer un cache hors ligne',async()=>{
 vi.stubGlobal('window',{});
 vi.stubGlobal('fetch',async()=>new Response('image',{headers:{'content-type':'image/webp'}}));
 const p=blankProgram();p.blocks=[createBlock(exercises[0],defaultProfile,defaultEquipment)];
 await expect(prepareAssets(p)).resolves.toMatchObject({offlineReady:false});
});
it('refuse le démarrage si un média est absent en HTTP',async()=>{
 vi.stubGlobal('window',{});vi.stubGlobal('fetch',async()=>new Response('',{status:404}));
 const p=blankProgram();p.blocks=[createBlock(exercises[0],defaultProfile,defaultEquipment)];
 await expect(prepareAssets(p)).rejects.toThrow('Asset indisponible');
});
