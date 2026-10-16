"""Generate only the authorized two-voice pilot, reusing selected identities."""
import base64,json,os,urllib.request,urllib.error,wave,io,time
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
out=ROOT/'reports/audio/pilot-v2';out.mkdir(parents=True,exist_ok=True)
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

selection=json.loads((ROOT/'reports/audio/voices/selection.json').read_text())
catalog=json.loads((ROOT/'reports/audio/catalogue-production-v1.json').read_text())
clips=[{'id':'reps.12.per_side','text':'Douze répétitions par côté.','family':'repetitions_per_side'}]
(out/'pilot-spec.json').write_text(json.dumps({'clips':clips,'voices':selection['voices']},ensure_ascii=False,indent=2)+'\n')
for v in selection['voices']:
 folder=out/v['id'];folder.mkdir(exist_ok=True)
 for c in clips:
  f=folder/(c['id']+'.json');wav=folder/(c['id']+'.wav')
  if wav.exists() and f.exists():continue
  start=time.monotonic()
  response=post('/interactions',{'model':v['model'],'input':[{'type':'user_input','content':[{'type':'text','text':c['text'],'annotations':[{'type':'speech_metadata','style':v['style']}]}]}],'response_format':{'type':'audio'},'generation_config':{'speech_config':[{'voice':v['voice_id']}]}})
  raw=audio(response)
  with wave.open(io.BytesIO(raw),'rb') as w:
   assert w.getnframes()>0 and w.getnchannels()==1 and w.getsampwidth()==2
   duration=w.getnframes()/w.getframerate()
  wav.write_bytes(raw)
  usage=response.get('usage') or response.get('usage_metadata') or response.get('interaction',{}).get('usage')
  meta={'voice':v['id'],'voice_id':v['voice_id'],'model':v['model'],'clip':c,'duration_seconds':duration,'request_seconds':time.monotonic()-start,'usage':usage,'status':'generated_listening_pending'}
  f.write_text(json.dumps(meta,ensure_ascii=False,indent=2)+'\n')
  print(v['id']+' '+c['id']+' : '+str(round(duration,2))+' s',flush=True)
  time.sleep(7)
print('Pilote terminé.',flush=True)
