"""Regression checks for clean extraction and stable reference geometry."""
import unittest
from pathlib import Path
import numpy as np
from PIL import Image
from asset_framing import panel_bounds,register,foreground
ROOT=Path(__file__).resolve().parents[1]
class FramingTest(unittest.TestCase):
 def test_unequal_panels_do_not_leak_neighbouring_poses(self):
  sheet=Image.new('RGB',(200,360),'#F6F4EF')
  for box in [(60,10,140,120),(60,145,140,215),(60,240,140,350)]:sheet.paste('#14253b',box)
  bounds,_=panel_bounds(sheet)
  self.assertEqual(len(bounds),3)
  self.assertLess(bounds[0][1],145);self.assertGreater(bounds[1][0],120);self.assertLess(bounds[1][1],240)
 def test_all_sources_have_three_isolated_scenes_with_safe_margins(self):
  for path in sorted((ROOT/'assets/sources').glob('EX*.png')):
   with self.subTest(source=path.name):
    frames,record=register(Image.open(path).convert('RGB'),path.stem[:4],'-top' in path.stem)
    self.assertEqual(len(frames),3)
    for frame in frames:
     self.assertEqual(frame.size,(1200,900))
     ys,xs=np.nonzero(foreground(frame));self.assertGreater(len(xs),3000)
     self.assertGreaterEqual(xs.min(),40);self.assertGreaterEqual(ys.min(),40)
     self.assertLess(xs.max(),1160);self.assertLess(ys.max(),860)
 def test_reference_objects_do_not_cause_zoom_jumps(self):
  for ex in ['EX11','EX14','EX16','EX29']:
   with self.subTest(ex=ex):
    frames,r=register(Image.open(ROOT/f'assets/sources/{ex}.png').convert('RGB'),ex)
    scales=[x['scale'] for x in r['registration']]
    self.assertLess(max(scales)/min(scales),1.15)
 def test_dead_bug_mat_bottom_is_stable_in_pixels(self):
  frames,_=register(Image.open(ROOT/'assets/sources/EX29.png').convert('RGB'),'EX29')
  bottoms=[]
  for frame in frames:
   a=np.asarray(frame,dtype=np.int16);lo=a.min(2);hi=a.max(2)
   mask=(hi-lo<20)&(lo<180)&(lo>70)
   mask[:450]=False
   ys,xs=np.nonzero(mask);bottoms.append(int(ys.max()))
  self.assertLessEqual(max(bottoms)-min(bottoms),3)
if __name__=='__main__':unittest.main()
