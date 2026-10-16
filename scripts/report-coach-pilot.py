import json,wave,re,html
from pathlib import Path
root=Path(__file__).resolve().parents[1];out=root/'reports/audio/pilot'
spec=json.loads((out/'pilot-spec.json').read_text());cat=json.loads((root/'reports/audio/catalogue-production-v1.json').read_text());rows=[]
for v in spec['voices']:
 for c in spec['clips']:
  m=json.loads((out/v['id']/(c['id']+'.json')).read_text());u=m['usage'];assert u
  inp=u['total_input_tokens'];audio=sum(t['tokens'] for t in u['output_tokens_by_modality'] if t['modality']=='audio')
  m['cost_standard_usd']=inp*.5/1e6+audio*9/1e6;rows.append(m)
 def concat(name,ids):
  data=[];params=None
  for i in ids:
   with wave.open(str(out/v['id']/(i+'.wav'))) as w:
    if params is None:params=w.getparams()
    assert (w.getnchannels(),w.getsampwidth(),w.getframerate())==(params.nchannels,params.sampwidth,params.framerate)
    data.append(w.readframes(w.getnframes()))
  with wave.open(str(out/v['id']/(name+'.wav')),'wb') as w:w.setparams(params);w.writeframes(b''.join(data))
 concat('comparison.prepare-composed',['EX03.name','comparison.prepare'])
 concat('comparison.work-composed',['EX29.name','set.2.3','reps.12','common.per_side'])
 concat('comparison.rest-composed',['rest.30','common.next','EX29.name','set.2.3'])
# Extrapolation par famille, avec repli à la moyenne de tous les clips catalogue.
base=[r for r in rows if r['clip']['family']!='comparison'];pred=0;seconds=0;request_seconds=0
for v in spec['voices']:
 samples=[r for r in base if r['voice']==v['id']]
 for c in cat['clips']:
  family=[r for r in samples if r['clip']['family']==c['family']] or samples
  pred+=sum(r['cost_standard_usd'] for r in family)/len(family)
  seconds+=sum(r['duration_seconds'] for r in family)/len(family)
  request_seconds+=sum(r['request_seconds'] for r in family)/len(family)
cost=sum(r['cost_standard_usd'] for r in rows)
report={'status':'technical_checks_passed_listening_pending','pricing_date':'2026-10-12','source':'https://ai.google.dev/gemini-api/docs/pricing','rate_input_per_million_usd':.5,'rate_audio_per_million_usd':9,'pilot_requests':len(rows),'pilot_generated_seconds':sum(r['duration_seconds'] for r in rows),'pilot_cost_usage_based_usd':cost,'invoice_verified':False,'full_catalog_files':440,'full_catalog_estimate_usd':pred,'with_30_percent_regeneration_usd':pred*1.3,'estimated_audio_minutes':seconds/60,'estimated_sequential_generation_minutes':(request_seconds+7*440)/60,'method':'Moyenne par voix et famille ; familles absentes remplacées par moyenne des clips catalogue de cette voix. Extrapolation indicative, non devis garanti.','exclusions':['Création des identités déjà effectuée','Taxes et éventuels frais du compte','Écoute humaine et intégration'],'clips':rows}
(out/'cost-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
text=f'''# Pilote vocal - coût et extrapolation

24 extraits générés, 12 par voix ; fichiers WAV vérifiés. Les montages comparatifs sont locaux et sans nouvel appel Gemini.

- Durée générée : {report['pilot_generated_seconds']:.2f} secondes.
- Coût calculé à partir de l’usage API : {cost:.6f} USD, hors taxes. Ce montant est calculé au tarif standard, pas confirmé par une facture Google.
- Projection de 440 fichiers : {pred:.3f} USD ; avec 30 % de reprises : {pred*1.3:.3f} USD.
- Audio projeté : {seconds/60:.1f} minutes pour les deux voix.
- Temps API séquentiel projeté avec sept secondes entre appels : {(request_seconds+7*440)/60:.1f} minutes, hors écoute, corrections et intégration. Les quotas peuvent l’allonger.

Méthode : moyennes mesurées par voix et famille, repli sur la moyenne de la voix pour les familles absentes. Petit échantillon : quantités longues et noms complexes peuvent varier. Les dix clips catalogue du pilote par voix peuvent être réutilisés après validation.

Tarif Gemini 3.8 Flash TTS standard consulté le 12 octobre 2026 : 0,50 USD/million de tokens texte et 9 USD/million de tokens audio, jusqu’au 31 décembre 2026. [Google](https://ai.google.dev/gemini-api/docs/pricing).

Les usages bruts et coûts de chaque requête figurent dans cost-report.json. Une requête 429 a été rejetée sans usage fourni ; son éventuel coût ne peut pas être confirmé par ce rapport. Aucune nouvelle identité créée. Aucun contrôle de facture ni d’écoute humaine réalisé ; accents, mots exacts et qualité des raccords restent à écouter.
'''
(out/'cost-report.md').write_text(text)
body=''
for v in spec['voices']:
 body+='<h2>'+html.escape(v['display_name'])+'</h2>'
 for title,file in [('Préparation complète','EX03.prepare'),('Même préparation en deux segments','comparison.prepare-composed'),('Série complète','comparison.full'),('Même série en segments','comparison.work-composed'),('Repos et suite en segments','comparison.rest-composed')]:
  body+='<article><h3>'+title+'</h3><audio controls preload="metadata" src="'+v['id']+'/'+file+'.wav"></audio></article>'
 body+='<details><summary>Tous les extraits</summary>'
 for c in spec['clips']:body+='<p>'+html.escape(c['text'])+'</p><audio controls preload="metadata" src="'+v['id']+'/'+c['id']+'.wav"></audio>'
 body+='</details>'
(out/'index.html').write_text('<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Tempo - Pilote vocal</title><style>body{font:18px system-ui;max-width:850px;margin:30px auto;padding:20px;background:#f7f6f4;color:#17243b}article{background:white;padding:16px;border-radius:16px;margin:12px 0}audio{width:100%}</style><h1>Pilote vocal Tempo</h1><p>Compare les phrases complètes et les segments. Les montages conservent les pauses originales, sans traitement ni nouvel appel Gemini.</p>'+body+'</html>')
print(json.dumps({k:report[k] for k in ['pilot_cost_usage_based_usd','full_catalog_estimate_usd','with_30_percent_regeneration_usd','estimated_audio_minutes','estimated_sequential_generation_minutes']},indent=2))
