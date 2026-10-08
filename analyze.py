import os
import re

files = [
  'e:/Portfolio2.0/src/assets/JavaScript.svg',
  'e:/Portfolio2.0/src/assets/Typescript.svg',
  'e:/Portfolio2.0/src/assets/HTML.svg',
  'e:/Portfolio2.0/src/assets/CSS.svg',
  'e:/Portfolio2.0/src/assets/figma.svg',
  'e:/Portfolio2.0/src/assets/Illustrator.svg',
  'e:/Portfolio2.0/src/assets/Photoshop.svg',
  'e:/Portfolio2.0/src/assets/Adobe_XD.svg',
  'e:/Portfolio2.0/src/assets/Adobe_InDesign.svg',
  'e:/Portfolio2.0/src/assets/Jupyter.svg',
  'e:/Portfolio2.0/src/assets/cursor.svg'
]

for f in files:
    if os.path.exists(f):
        data = open(f).read()
        print(f"--- {os.path.basename(f)} ---")
        styles = re.findall(r'<style[^>]*>(.*?)</style>', data, re.IGNORECASE | re.DOTALL)
        for s in styles:
            print("STYLE:", s.strip())
        fills = re.findall(r'fill=["\']([^"\']*)["\']', data, re.IGNORECASE)
        print("FILLS:", list(set(fills)))
