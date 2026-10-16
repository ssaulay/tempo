"""Derive the two tube variants without editing historical v1 assets."""
from pathlib import Path
import json,hashlib,shutil
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1]
variants=[e for e in json.loads((ROOT/'catalog/equipment-variants.json').read_text())['variants'] if e['id'] in ['EX19','EX26']]
manifest=json.loads((ROOT/'assets/manifest.json').read_text())
for e in variants:
 out=ROOT/f'public/assets/exercises/v{e["version"]}/{e["id"]}';out.mkdir(parents=True,exist_ok=True)
 source=Image.open(ROOT/f'assets/sources/tubes-v2/{e["id"]}.png').convert('RGB');w,h=source.size
 frames=[]
 for left in [0,w//2]:
  panel=source.crop((left,0,left+w//2,h));frame=ImageOps.pad(panel,(1200,900),method=Image.Resampling.LANCZOS,color=source.getpixel((0,0)));frames.append(frame)
 for i,f in enumerate([*frames,frames[0]],1):f.save(out/f'step-0{i}.webp','WEBP',quality=86)
 small=[f.resize((600,450),Image.Resampling.LANCZOS) for f in frames]
 small[0].save(out/'demo.gif',save_all=True,append_images=small[1:],duration=1000,loop=0,optimize=True)
 frames[1].resize((400,300),Image.Resampling.LANCZOS).save(out/'thumb.webp','WEBP',quality=82)
 shutil.copyfile(ROOT/f'public/assets/exercises/v1/{e["id"]}/muscles.svg',out/'muscles.svg')
 files=[]
 for name,alt in [(s['asset'],s['alt']) for s in e['steps']]+[('demo.gif',e['name']+', boucle des deux positions provisoires.'),('thumb.webp',e['name']+', position représentative.'),('muscles.svg','Carte musculaire indicative, revue anatomique en attente.')]:
  path=out/name;raw=path.read_bytes();size=(420,320) if name.endswith('.svg') else Image.open(path).size
  files.append({'path':'/'+str(path.relative_to(ROOT/'public')),'alt':alt,'status':'generated','width':size[0],'height':size[1],'bytes':len(raw),'checksum':hashlib.sha256(raw).hexdigest(),'review':{'visual':None,'technical':None}})
 entry={'exerciseId':e['id'],'version':e['version'],'mapKind':e['mapKind'],'muscles':e['muscles'],'status':'generated','review':{'visual':None,'technical':None},'files':files,'extras':[]}
 manifest['entries']=[x for x in manifest['entries'] if not(x['exerciseId']==e['id'] and x['version']==e['version'])]+[entry]
manifest['mediaRevision']=hashlib.sha256(','.join(f.get('checksum') or '' for e in manifest['entries'] for f in e['files']+e['extras']).encode()).hexdigest()[:16]
manifest['totalBytes']=sum(f.get('bytes') or 0 for e in manifest['entries'] for f in e['files']+e['extras'])+sum(f.get('bytes') or 0 for f in manifest['shared'])
manifest['expectedCoreFiles']=len(manifest['entries'])*6+len(manifest['shared'])
(ROOT/'assets/manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n');(ROOT/'public/assets/manifest.json').write_text(json.dumps(manifest,ensure_ascii=False)+'\n')
print('Deux variantes dérivées, 12 fichiers ajoutés ; v1 conservée.')
