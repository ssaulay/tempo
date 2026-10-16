"""Resumable production of approved Tempo voice assets; no app changes."""
import base64,json,os,urllib.request,urllib.error,wave,io,time,re,shutil,hashlib,argparse,subprocess,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
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


args=argparse.ArgumentParser();args.add_argument('--dry-run',action='store_true');args.add_argument('--voice',choices=['F1','M2-deep-v2']);args=args.parse_args()
cat=json.loads((ROOT/'reports/audio/catalogue-production-v4.json').read_text())
all_voices=json.loads((ROOT/'reports/audio/voices/selection.json').read_text())['voices']
voices=sorted(all_voices,key=lambda v:v['id']!='M2-deep-v2')
if args.voice:voices=[v for v in voices if v['id']==args.voice]
out=ROOT/'artifacts/audio/production-v1';out.mkdir(parents=True,exist_ok=True)
report=ROOT/'reports/audio/production';report.mkdir(parents=True,exist_ok=True)
def publish():
 subprocess.run([sys.executable,str(ROOT/'scripts/export-available-coach-audio.py')],check=True)
def snapshot(status='generating'):
 saved=[]
 for v in all_voices:
  for c in cat['clips']:
   f=out/v['id']/(c['id']+'.json')
   if f.exists() and f.with_suffix('.wav').exists():
    m=json.loads(f.read_text())
    if m['clip']['text']==c['text']:saved.append(m)
 x={'status':status,'completed':len(saved),'total':cat['audioFileCount'],'male_completed':sum(m['voice']=='M2-deep-v2' for m in saved),'male_total':len(cat['clips']),'cost_standard_usd':sum(m.get('cost_standard_usd',0) for m in saved),'seconds':sum(m.get('duration_seconds',0) for m in saved)}
 (report/'progress.json').write_text(json.dumps(x,indent=2)+'\n')
 (report/'status.md').write_text('# Production vocale Tempo\n\nÉtat : '+status+'\n\nM2 plus grave : '+str(x['male_completed'])+'/'+str(x['male_total'])+' fichiers.\n\nTotal : '+str(x['completed'])+'/'+str(x['total'])+' fichiers.\n\nCoût calculé : '+str(round(x['cost_standard_usd'],6))+' USD ; facture non vérifiée.\n')
 return x
key=os.environ.get('GEMINI_API_KEY')
if not args.dry_run and not key:
 env=Path('/Users/simon.saulay/Documents/ChatGPT/histoplaymo/.env')
 if env.stat().st_mode & 0o077:raise SystemExit('Permissions 600 requises.')
 for line in env.read_text().splitlines():
  if line.strip().startswith('GEMINI_API_KEY='):key=line.split('=',1)[1].strip().strip('"\'')
 if not key:raise SystemExit('Clé absente')
last_start=0
entries=[]
for v in voices:
 folder=out/v['id'];folder.mkdir(exist_ok=True)
 for c in cat['clips']:
  f=folder/(c['id']+'.json');wav=folder/(c['id']+'.wav')
  if not (f.exists() and wav.exists()):
   for source in ['pilot-v2','pilot']:
    old=ROOT/'reports/audio'/source/v['id']/(c['id']+'.json');oldwav=old.with_suffix('.wav')
    if old.exists() and oldwav.exists():
     m=json.loads(old.read_text())
     if m['clip']['text']==c['text'] and m['voice_id']==v['voice_id']:
      shutil.copy2(old,f);shutil.copy2(oldwav,wav);break
  if args.dry_run:continue
  if f.exists() and wav.exists():
   meta=json.loads(f.read_text())
   if meta['clip']['text']!=c['text'] or meta['voice_id']!=v['voice_id']:raise RuntimeError('Métadonnées incompatibles: '+str(f))
  else:
   payload={'model':v['model'],'input':[{'type':'user_input','content':[{'type':'text','text':c['text'],'annotations':[{'type':'speech_metadata','style':v['style']}]}]}],'response_format':{'type':'audio'},'generation_config':{'speech_config':[{'voice':v['voice_id']}]}}
   for attempt in range(5):
    delay=max(0,6.5-(time.monotonic()-last_start));time.sleep(delay);last_start=time.monotonic()
    req=urllib.request.Request('https://generativelanguage.googleapis.com/v1beta/interactions',data=json.dumps(payload).encode(),headers={'Content-Type':'application/json','x-goog-api-key':key},method='POST')
    try:
     with urllib.request.urlopen(req,timeout=150) as resp:response=json.load(resp)
     break
    except urllib.error.HTTPError as e:
     details=e.read(2500).decode().replace(key,'[SECRET]')
     with (report/'errors.jsonl').open('a') as log:log.write(json.dumps({'voice':v['id'],'clip':c['id'],'code':e.code,'details':details})+'\n')
     if e.code==429 and ('per day' in details or re.search(r'retry in \d+h',details)):
      snapshot('blocked_gemini_daily_quota');publish();print('Quota quotidien Gemini atteint ; progression et fichiers conservés.',flush=True);raise SystemExit(2)
     if e.code not in [429,500,502,503,504] or attempt==4:raise RuntimeError('Gemini '+str(e.code)+': '+details) from None
     wait=re.search(r'retry in (\d+)s',details);delay=int(wait.group(1))+2 if wait else min(55,10*(attempt+1))
     print('Quota/réseau : reprise dans '+str(delay)+' s',flush=True);time.sleep(delay)
   raw=audio(response)
   wav.with_suffix('.wav.tmp').write_bytes(raw);wav.with_suffix('.wav.tmp').replace(wav)
   meta={'voice':v['id'],'voice_id':v['voice_id'],'model':v['model'],'style':v['style'],'clip':c,'usage':response.get('usage') or response.get('interaction',{}).get('usage'),'status':'generated_listening_pending'}
  with wave.open(str(wav)) as w:
   assert w.getnframes()>0 and w.getnchannels()==1 and w.getsampwidth()==2
   meta['duration_seconds']=w.getnframes()/w.getframerate();meta['sample_rate']=w.getframerate()
  meta['checksum']=hashlib.sha256(wav.read_bytes()).hexdigest()
  u=meta['usage'];assert u
  meta['cost_standard_usd']=u['total_input_tokens']*.5/1e6+sum(x['tokens'] for x in u['output_tokens_by_modality'] if x['modality']=='audio')*9/1e6
  f.write_text(json.dumps(meta,ensure_ascii=False,indent=2)+'\n');entries.append(meta)
  progress=snapshot()
  if len(entries)%10==0:
   publish();print(str(progress['male_completed'])+'/'+str(progress['male_total'])+' clips masculins prêts',flush=True)
  if progress['cost_standard_usd']>5:raise RuntimeError('Plafond logiciel 5 USD atteint')
if args.dry_run:
 ready=sum(1 for v in voices for c in cat['clips'] if (out/v['id']/(c['id']+'.wav')).exists())
 print(str(cat['audioFileCount'])+' fichiers prévus ; '+str(ready)+' réutilisables. Aucun appel API.');raise SystemExit(0)
(report/'manifest.json').write_text(json.dumps({'status':'generated_listening_pending','entries':entries},ensure_ascii=False,indent=2)+'\n')
publish();snapshot('selected_voice_generated_listening_pending' if args.voice else 'generated_listening_pending')
print('Production sélectionnée : '+str(len(entries))+' WAV vérifiés.',flush=True)
