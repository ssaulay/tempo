"""Derive only the ten new kit sheets, preserve all existing assets."""
from pathlib import Path
import json
from PIL import Image,ImageOps,ImageDraw
import numpy as np
from asset_framing import foreground
ROOT=Path(__file__).resolve().parents[1]
es=[e for e in json.loads((ROOT/'catalog/equipment-variants.json').read_text())['variants'] if e['id'] not in ['EX19','EX26']]+json.loads((ROOT/'catalog/kit-exercises.json').read_text())['exercises']
contact=Image.new('RGB',(900,len(es)*200),'white');draw=ImageDraw.Draw(contact)
for index,e in enumerate(es):
 source=Image.open(ROOT/f'assets/sources/kit-expansion/{e["id"]}.png').convert('RGB');w,h=source.size
 panels=[source.crop((left,0,left+w//2,h)) for left in [0,w//2]];box=(0,0,w//2,h)
 if e['bandMount']=='under_feet':
  bounds=[]
  for panel in panels:
   ys,xs=np.nonzero(foreground(panel));bounds.append((int(xs.min()),int(ys.min()),int(xs.max()+1),int(ys.max()+1)))
  pad=max(25,int(w//2*.06));box=(max(0,min(b[0] for b in bounds)-pad),max(0,min(b[1] for b in bounds)-pad),min(w//2,max(b[2] for b in bounds)+pad),min(h,max(b[3] for b in bounds)+pad))
 frames=[ImageOps.pad(panel.crop(box),(1200,900),method=Image.Resampling.LANCZOS,color=source.getpixel((0,0))) for panel in panels]
 out=ROOT/f'public/assets/exercises/v{e["version"]}/{e["id"]}';out.mkdir(parents=True,exist_ok=True)
 for i,f in enumerate([*frames,frames[0]],1):f.save(out/f'step-0{i}.webp','WEBP',quality=86)
 small=[f.resize((600,450),Image.Resampling.LANCZOS) for f in frames];small[0].save(out/'demo.gif',save_all=True,append_images=small[1:],duration=1200,loop=0,optimize=True)
 frames[1].resize((400,300),Image.Resampling.LANCZOS).save(out/'thumb.webp','WEBP',quality=82)
 draw.text((5,index*200+3),e['id']+' v'+str(e['version']),fill='black')
 for j,f in enumerate(frames):contact.paste(f.resize((267,200)),(70+j*360,index*200))
contact.save(ROOT/'reports/kit-expansion/contact.jpg',quality=85)
print('10 nouveaux lots dérivés, médias existants conservés.')
