"""Supervise local asset production and publish its local report when complete."""
import json,time,hashlib,shutil,wave,subprocess,sys
from pathlib import Path
root=Path(__file__).resolve().parents[1];report=root/'reports/audio/production';p=report/'progress.json'
start=time.monotonic()
while time.monotonic()-start<7200:
 if p.exists():
  x=json.loads(p.read_text())
  (report/'status.md').write_text(f"# Production vocale Tempo\n\nÉtat : {x['status']}\n\n{x['completed']} / {x['total']} fichiers vérifiés.\n\nCoût calculé selon usage API au tarif standard : {x['cost_standard_usd']:.6f} USD. Facture Google non vérifiée.\n\nF1 et M2 plus grave ; textes français de France. Écoute humaine et intégration restent à réaliser.\n")
  if x['completed']==x['total']:break
  if time.time()-p.stat().st_mtime>900:
   (report/'status.md').write_text((report/'status.md').read_text()+'\nLa progression est inchangée depuis quinze minutes. Inspecter la session de génération et errors.jsonl avant reprise.\n');raise SystemExit('Progression interrompue ; fichiers conservés.')
 time.sleep(5)
else:raise SystemExit('Fin de la surveillance après deux heures ; fichiers conservés.')
cat=json.loads((root/'reports/audio/catalogue-production-v2.json').read_text());voices=json.loads((root/'reports/audio/voices/selection.json').read_text())['voices'];entries=[]
public=root/'public/assets/audio/v1';public.mkdir(parents=True,exist_ok=True)
for v in voices:
 dest=public/v['id'];dest.mkdir(exist_ok=True)
 for c in cat['clips']:
  master=root/'artifacts/audio/production-v1'/v['id']/(c['id']+'.wav');m=json.loads(master.with_suffix('.json').read_text())
  with wave.open(str(master)) as w:assert w.getnframes()>0 and w.getnchannels()==1 and w.getsampwidth()==2
  assert hashlib.sha256(master.read_bytes()).hexdigest()==m['checksum']
  shutil.copy2(master,dest/master.name)
  entries.append({'voice':v['id'],'id':c['id'],'text':c['text'],'url':'/assets/audio/v1/'+v['id']+'/'+master.name,'duration':m['duration_seconds'],'checksum':m['checksum'],'status':'generated_listening_pending','cost_standard_usd':m['cost_standard_usd']})
assert len(entries)==478
manifest={'version':1,'status':'generated_listening_pending','format':'wav','normalization':'not_applied','voices':voices,'entries':entries}
(public/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n');(report/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
cost=sum(e['cost_standard_usd'] for e in entries);duration=sum(e['duration'] for e in entries);size=sum(f.stat().st_size for f in public.glob('*/*.wav'))
(report/'cost-report.md').write_text(f"# Production vocale - bilan\n\n478 fichiers WAV, 239 textes dans les deux voix retenues. {duration/60:.2f} minutes d’audio et {size/1e6:.2f} Mo.\n\nCoût calculé à partir des usages API : {cost:.6f} USD pour ce lot, y compris les 22 clips réutilisés. Tarif standard Gemini 3.8 Flash TTS consulté le 12 octobre 2026 : 0,50 USD/million de tokens texte, 9 USD/million de tokens audio. Facture non vérifiée, taxes et création des identités exclues. Les appels rejetés sans usage ne sont pas chiffrés. [Tarifs Google](https://ai.google.dev/gemini-api/docs/pricing).\n\nLes maîtres, usages et checksums sont conservés dans artifacts/audio/production-v1/. Copie WAV locale de diffusion dans public/assets/audio/v1/. Pas de normalisation ni de compression appliquée. Couverture, lisibilité et checksums vérifiés ; texte réellement prononcé, accent, timbre et raccords attendent l’écoute humaine. Aucun lecteur de l’application modifié.\n")
rows=''
for v in voices:
 rows+='<h2>'+v['display_name']+'</h2>'
 for c in cat['clips']:rows+='<p>'+c['text']+'</p><audio controls preload="none" src="../../../public/assets/audio/v1/'+v['id']+'/'+c['id']+'.wav"></audio>'
(report/'index.html').write_text('<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Tempo - Bibliothèque audio</title><style>body{font:18px system-ui;max-width:800px;margin:30px auto;padding:20px}audio{width:100%}</style><h1>Bibliothèque audio Tempo</h1><p>Fichiers générés, écoute humaine en attente.</p>'+rows+'</html>')
with (root/'memory/audio.md').open('a') as f:f.write(f'\n## Production terminée par le processus local\n\n- 478 WAV pour 239 textes dans F1 et M2-deep-v2 ; couverture, lisibilité et checksums vérifiés. Coût usage standard du lot : {cost:.6f} USD, facture non vérifiée.\n- Maîtres et usages dans artifacts/audio/production-v1/, copies locales dans public/assets/audio/v1/, bilan et écoute dans reports/audio/production/. Normalisation, compression, écoute humaine et intégration restent à réaliser.\n')
subprocess.run([sys.executable,str(root/'scripts/export-available-coach-audio.py')],check=True)
print('478 fichiers vérifiés ; coût calculé '+str(cost)+' USD.',flush=True)
