"""Derive EX75-77 only, without touching older kit images."""
from pathlib import Path
import json
from PIL import Image,ImageOps,ImageDraw
ROOT=Path(__file__).resolve().parents[1]
es=[e for e in json.loads((ROOT/'catalog/kit-exercises.json').read_text())['exercises'] if e['id'] in ['EX75','EX76','EX77']]
contact=Image.new('RGB',(900,len(es)*200),'white');draw=ImageDraw.Draw(contact)
for index,e in enumerate(es):
 source=Image.open(ROOT/f'assets/sources/kit-expansion/{e["id"]}.png').convert('RGB');w,h=source.size
 frames=[ImageOps.pad(source.crop((left,0,left+w//2,h)),(1200,900),method=Image.Resampling.LANCZOS,color=source.getpixel((0,0))) for left in [0,w//2]]
 out=ROOT/f'public/assets/exercises/v1/{e["id"]}';out.mkdir(parents=True,exist_ok=True)
 for i,f in enumerate([*frames,frames[0]],1):f.save(out/f'step-0{i}.webp','WEBP',quality=86)
 small=[f.resize((600,450),Image.Resampling.LANCZOS) for f in frames];small[0].save(out/'demo.gif',save_all=True,append_images=small[1:],duration=1200,loop=0,optimize=True)
 frames[1].resize((400,300),Image.Resampling.LANCZOS).save(out/'thumb.webp','WEBP',quality=82)
 draw.text((5,index*200+3),e['id'],fill='black')
 for j,f in enumerate(frames):contact.paste(f.resize((267,200)),(70+j*360,index*200))
contact.save(ROOT/'reports/kit-pectorals/contact.jpg',quality=85)
