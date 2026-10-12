import {cpSync,existsSync,mkdirSync} from 'node:fs';
if(!existsSync('dist/index.html')){
  console.error('Construisez Tempo avec npm run build avant de lancer la prévisualisation.');
  process.exit(1);
}
mkdirSync('dist/assets',{recursive:true});
cpSync('public/assets','dist/assets',{recursive:true});
