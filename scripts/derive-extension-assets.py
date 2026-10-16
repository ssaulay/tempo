"""Derive generated illustration sheets, never regenerate historical media."""
from pathlib import Path
import json
import numpy as np
from asset_framing import foreground
from PIL import Image,ImageOps,ImageDraw
ROOT=Path(__file__).resolve().parents[1]
es=json.loads((ROOT/'catalog/extensions.json').read_text())['exercises']
contact=Image.new('RGB',(840,21*180),'white');draw=ImageDraw.Draw(contact)
for index,e in enumerate(es):
 source=Image.open(ROOT/f'assets/sources/extensions-v1/{e["id"]}.png').convert('RGB');w,h=source.size;frames=[];panels=[]
 for left in [0,w//2]:
  panel=source.crop((left,0,left+w//2,h));panels.append(panel)
 bounds=[]
 for panel in panels:
  ys,xs=np.nonzero(foreground(panel));bounds.append((int(xs.min()),int(ys.min()),int(xs.max()+1),int(ys.max()+1)))
 # Same crop and scale for BOTH poses: avoid zoom pumping and remove excess studio space.
 pad=max(25,int((w//2)*.06));box=(max(0,min(b[0] for b in bounds)-pad),max(0,min(b[1] for b in bounds)-pad),min(w//2,max(b[2] for b in bounds)+pad),min(h,max(b[3] for b in bounds)+pad))
 for panel in panels:frames.append(ImageOps.pad(panel.crop(box),(1200,900),method=Image.Resampling.LANCZOS,color=source.getpixel((0,0))))
 out=ROOT/f'public/assets/exercises/v{e["version"]}/{e["id"]}';out.mkdir(parents=True,exist_ok=True)
 for i,f in enumerate([*frames,frames[0]],1):f.save(out/f'step-0{i}.webp','WEBP',quality=86)
 small=[f.resize((600,450),Image.Resampling.LANCZOS) for f in frames]
 if e['mode']=='timed':small[1].save(out/'demo.gif')
 else:small[0].save(out/'demo.gif',save_all=True,append_images=small[1:],duration=1200,loop=0,optimize=True)
 frames[1].resize((400,300),Image.Resampling.LANCZOS).save(out/'thumb.webp','WEBP',quality=82)
 draw.text((5,index*180+3),e['id'],fill='black')
 for j,f in enumerate(frames):contact.paste(f.resize((240,180)),(60+j*320,index*180))
contact.save(ROOT/'reports/extension-illustrations/contact.jpg',quality=85)
print('21 sheets derived into 105 raster assets. Holds remain static.')
