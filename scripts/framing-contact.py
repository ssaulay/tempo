from pathlib import Path
from PIL import Image,ImageDraw
import json
r=json.load(open('reports/framing/audit.json'))
for page in range(6):
 records=r['records'][page*10:(page+1)*10];canvas=Image.new('RGB',(750,len(records)*215),'white');d=ImageDraw.Draw(canvas)
 for row,record in enumerate(records):
  name=record['exercise'];top=record['angle']=='top';d.text((8,row*215+4),name+(' TOP' if top else '')+' - '+record['referenceKind'],fill='black')
  for i in range(3):
   p=Path('public/assets/exercises/v1')/name/f'{"top-" if top else ""}step-0{i+1}.webp';im=Image.open(p);im.thumbnail((248,186));canvas.paste(im,(i*250,row*215+24))
 canvas.save(f'reports/framing/contact-{page+1}.jpg',quality=90)
print(r['sheets'],r['poses'])
