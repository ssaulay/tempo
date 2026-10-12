import {readdirSync,writeFileSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const files=readdirSync('dist/assets').filter(f=>/\.(js|css)$/.test(f)).map(f=>'/assets/'+f);
const version=createHash('sha256').update(files.join(',')).digest('hex').slice(0,12);
writeFileSync('dist/precache.json',JSON.stringify(['/','/manifest.webmanifest','/icon.svg','/assets/manifest.json','/precache.json',...files]));
const worker=readFileSync('dist/sw.js','utf8').replace("tempo-shell-v1'",`tempo-shell-v1-${version}'`);
writeFileSync('dist/sw.js',worker);
console.log(`Coque hors ligne : ${files.length} fichiers JS/CSS, version ${version}.`);
