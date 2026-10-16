import {readFileSync,existsSync,statSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const catalogue=JSON.parse(readFileSync('catalog/exercises.json','utf8'));
const variants=JSON.parse(readFileSync('catalog/equipment-variants.json','utf8')).variants;
const extensions=JSON.parse(readFileSync('catalog/extensions.json','utf8')).exercises;
const kit=JSON.parse(readFileSync('catalog/kit-exercises.json','utf8')).exercises;
const allExercises=[...catalogue.exercises,...variants,...kit];
const manifest=JSON.parse(readFileSync('assets/manifest.json','utf8'));
function realReview(r){return !!r&&typeof r.name==='string'&&r.name.trim()&&typeof r.date==='string'&&Number.isFinite(Date.parse(r.date))&&Number.isInteger(r.version)&&typeof r.comment==='string';}
const release=process.argv.includes('--release');const errors=[],pending=[];
const names=['step-01.webp','step-02.webp','step-03.webp','demo.gif','thumb.webp','muscles.svg'];
if(catalogue.exercises.length!==48)errors.push('Le catalogue doit conserver les 48 exercices.');
for(const e of allExercises){
 const entry=manifest.entries.find(x=>x.exerciseId===e.id&&x.version===e.version);
 if(!entry||entry.files.length!==6||names.some(n=>!entry.files.some(f=>f.path.endsWith('/'+n))))errors.push(e.id+' : lot contractuel incomplet dans le manifeste.');
 if(e.steps.length!==3||e.steps.some(s=>!s.alt||!s.description||!s.breathing||!s.postureCues.length)||e.errors.length<2)errors.push(e.id+' : fiche éditoriale incomplète.');
 const roles=Object.values(e.muscles).flat();if(new Set(roles).size!==roles.length)errors.push(e.id+' : un muscle a plusieurs rôles.');
 if(JSON.stringify(e.muscles)!==JSON.stringify(entry?.muscles))errors.push(e.id+' : carte incohérente avec la fiche.');
 const published=e.contentStatus==='published'||e.assetStatus==='published';
 if(published&&(!realReview(entry.review.technical)||!realReview(entry.review.visual)||!realReview(e.review.technical)||!realReview(e.review.visual)))errors.push(e.id+' : publication sans revue réelle.');
 for(const f of [...(entry?.files||[]),...(entry?.extras||[])]){
  const file='public'+f.path;
  if(!existsSync(file)){pending.push(f.path);if(published)errors.push(file+' : asset publié absent.');continue;}
  const checksum=createHash('sha256').update(readFileSync(file)).digest('hex');if(checksum!==f.checksum||statSync(file).size!==f.bytes)errors.push(file+' : checksum ou poids erroné.');
  if(!f.alt||!f.width||!f.height)errors.push(file+' : métadonnées manquantes.');
  const limit=f.path.endsWith('demo.gif')?800*1024:f.path.endsWith('thumb.webp')?40*1024:f.path.endsWith('.webp')?180*1024:Infinity;
  if(f.bytes>limit&&!f.path.includes('reference-character'))errors.push(file+' : poids excessif.');
 }
 if(release&&!published)errors.push(e.id+' : contenu non publié, revue requise.');
}
for(const e of extensions){
 if(e.review.technical!==null||e.review.visual!==null||e.steps.length!==3)errors.push(e.id+' : statut du prototype incohérent.');
 const entry=manifest.entries.find(x=>x.exerciseId===e.id&&x.version===e.version);
 if(e.assetStatus==='generated'){
  if(!entry||entry.files.length!==6||JSON.stringify(entry.muscles)!==JSON.stringify(e.muscles))errors.push(e.id+' : lot incomplet ou carte incohérente.');
  for(const f of entry?.files||[]){const file='public'+f.path;if(!existsSync(file)){errors.push(file+' : média absent.');continue;}if(createHash('sha256').update(readFileSync(file)).digest('hex')!==f.checksum||statSync(file).size!==f.bytes)errors.push(file+' : empreinte ou poids erroné.');const limit=f.path.endsWith('demo.gif')?800*1024:f.path.endsWith('thumb.webp')?40*1024:f.path.endsWith('.webp')?180*1024:Infinity;if(f.bytes>limit)errors.push(file+' : poids excessif.');}
 }else if(!e.textOnlyPrototype||e.assetStatus!=='pending')errors.push(e.id+' : médias du prototype incohérents.');
 if(release)errors.push(e.id+' : revue humaine en attente.');
}
if(manifest.totalBytes>manifest.targetPackBytes)errors.push('Pack supérieur à 80 Mo.');
const report={date:new Date().toISOString(),mode:release?'release':'prototype',exercises:48+extensions.length+kit.length,catalogEntries:allExercises.length+extensions.length,historicalExercises:48,textOnlyExtensions:extensions.filter(e=>e.textOnlyPrototype).length,illustratedExtensions:extensions.filter(e=>e.assetStatus==='generated').length,extensionMediaPending:extensions.filter(e=>e.assetStatus!=='generated').map(e=>e.id),equipmentVariants:variants.length,coreExpected:manifest.expectedCoreFiles,corePresent:manifest.entries.flatMap(e=>e.files).filter(f=>f.checksum).length+manifest.shared.filter(f=>f.checksum).length,extrasPresent:manifest.entries.flatMap(e=>e.extras).filter(f=>f.checksum).length,packBytes:manifest.totalBytes,missing:pending.length,pending,errors,humanReviews:catalogue.exercises.filter(e=>realReview(e.review.technical)).length};
writeFileSync('reports/asset-audit.json',JSON.stringify(report,null,2));
console.log(`${report.corePresent}/${report.coreExpected} fichiers principaux, ${report.extrasPresent} complémentaires, ${pending.length} absents, ${(manifest.totalBytes/1024/1024).toFixed(2)} Mo. Revue humaine : en attente.`);
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log('Intégrité du prototype vérifiée ; publication bloquée par les revues et la production restante.');
