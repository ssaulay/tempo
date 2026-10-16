"""Create/resume the four authorized Tempo voice auditions. No secret in outputs."""
import base64,json,os,time,urllib.request,urllib.error,wave,io
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
brief=json.loads((ROOT/'reports/audio/brief-voix.json').read_text())
source=json.loads((ROOT/'reports/audio/voices/M2.json').read_text())
profile={k:source[k] for k in ['gender','identity_prompt']}
profile.update(id='M2-deep-v2',display_name='Coach masculin complice - plus grave')
profile['identity_prompt']=profile['identity_prompt'].replace('Timbre masculin médium légèrement grave, souple et chaleureux','Timbre masculin naturellement grave, plein et chaleureux, avec une résonance de poitrine douce et une hauteur un peu plus basse. Conserver la jeunesse adulte, la souplesse et le sourire dans la voix')
brief['profiles']=[profile]
out=ROOT/'reports/audio/voices';out.mkdir(parents=True,exist_ok=True)
key=os.environ.get('GEMINI_API_KEY')
if not key:
 env=Path('/Users/simon.saulay/Documents/ChatGPT/histoplaymo/.env')
 if env.stat().st_mode & 0o077:raise SystemExit('Le fichier de clé doit avoir les permissions 600.')
 for line in env.read_text().splitlines():
  if line.strip().startswith('GEMINI_API_KEY='):key=line.split('=',1)[1].strip().strip('\"\'')
if not key:raise SystemExit('Clé absente.')
def post(path,payload):
 req=urllib.request.Request('https://generativelanguage.googleapis.com/v1beta'+path,data=json.dumps(payload).encode(),headers={'Content-Type':'application/json','x-goog-api-key':key},method='POST')
 try:
  with urllib.request.urlopen(req,timeout=150) as r:return json.load(r)
 except urllib.error.HTTPError as e:raise RuntimeError('HTTP '+str(e.code)+': '+e.read(2500).decode().replace(key,'[SECRET]')) from None
def audio(res):
 res=res.get('interaction',res)
 a=res.get('output_audio') or res.get('outputAudio')
 if not a:
  blocks=[b for s in res.get('steps',[]) for b in s.get('content',[]) if b.get('type')=='audio' and b.get('data')]
  a=blocks[-1] if blocks else None
 if not a:raise ValueError('Réponse sans audio')
 raw=base64.b64decode(a['data'],validate=True)
 if raw[:4]!=b'RIFF':
  buf=io.BytesIO()
  with wave.open(buf,'wb') as w:w.setnchannels(1);w.setsampwidth(2);w.setframerate(24000);w.writeframes(raw)
  raw=buf.getvalue()
 return raw
for p in brief['profiles']:
 f=out/(p['id']+'.json');wav=out/(p['id']+'.wav')
 if f.exists():meta=json.loads(f.read_text())
 else:
  res=post('/voices',{'store':True,'voice':{'model':brief['model'],'type':'prompted','display_name':'Tempo - '+p['display_name'],'gender':p['gender'],'language_code':'fr-FR','prompted':{'input':p['identity_prompt']}}})
  v=res.get('voice',res)
  if not v.get('id'):raise ValueError('Création sans identifiant')
  meta={**p,'voice_id':v['id'],'model':brief['model'],'style':brief['style'],'phrase':brief['screening_phrase'],'status':'generated_awaiting_listening','creation_usage':res.get('usage',res.get('usage_metadata'))}
  f.write_text(json.dumps(meta,ensure_ascii=False,indent=2)+'\n')
  preview=v.get('sample_audio') or v.get('sampleAudio')
  if preview and preview.get('data'):(out/(p['id']+'-identity.wav')).write_bytes(base64.b64decode(preview['data']))
  print(p['id']+' identité créée',flush=True)
 if not wav.exists():
  res=post('/interactions',{'model':brief['model'],'input':[{'type':'user_input','content':[{'type':'text','text':brief['screening_phrase'],'annotations':[{'type':'speech_metadata','style':brief['style']}]}]}],'response_format':{'type':'audio'},'generation_config':{'speech_config':[{'voice':meta['voice_id']}]}})
  wav.write_bytes(audio(res));meta['synthesis_usage']=res.get('usage',res.get('usage_metadata'))
 with wave.open(str(wav),'rb') as w:meta['duration_seconds']=w.getnframes()/w.getframerate();meta['sample_rate']=w.getframerate()
 f.write_text(json.dumps(meta,ensure_ascii=False,indent=2)+'\n')
 print(p['id']+' extrait prêt : '+str(round(meta['duration_seconds'],2))+' s',flush=True)
print('Variante M2 prête pour écoute.',flush=True)
