"""Render the Open Graph images, public/assets/og-{he,en}.jpg.

They mirror the hero: the headline from lib/i18n.ts over the faint grid, with
the three fanned iPhones built from the site's own iPhone CSS. Rendered in
headless Chrome rather than next/og because Satori doesn't lay out Hebrew
right-to-left. Re-run after changing the headline or the screenshots:

    python3 scripts/og-image.py

Needs Python 3 with Pillow and Google Chrome (set CHROME to its path if it
isn't in the default macOS location). Fonts load from Google Fonts.
"""
import os, re, subprocess, tempfile
from PIL import Image

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
css=open(f'{SITE}/app/globals.css').read()
iphone=css[css.index('/* ---------- iPhone, Space Black'):css.index('.iphone-screens {')]
glyph=re.search(r'<path d="([^"]+)"', open(f'{SITE}/components/icons.tsx').read()).group(1)
i18n=open(f'{SITE}/lib/i18n.ts').read()
def strings(block):
    a=i18n.index(block); b=i18n.index('\n};',a)
    return dict(re.findall(r'^  (\w+): "((?:[^"\\]|\\.)*)",?$', i18n[a:b], re.M))
T={'en':strings('const en'),'he':strings('const he: Dict')}
CHROME = os.environ.get('CHROME', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
TMP = tempfile.mkdtemp()

def phone(lang, shot):
    return f'''<div class="iphone"><span class="iphone-btn action"></span><span class="iphone-btn vol-up"></span><span class="iphone-btn vol-down"></span><span class="iphone-btn power"></span><span class="iphone-btn camera"></span><div class="iphone-frame"><div class="iphone-bezel"><img class="iphone-screen" src="file://{SITE}/public/assets/screens/{shot}-{lang}.webp"></div></div></div>'''

for lang in ['he','en']:
    t=T[lang]
    html=f'''<!doctype html><html lang="{lang}" dir="{'rtl' if lang=='he' else 'ltr'}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=block" rel="stylesheet">
<style>
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
html, body {{ width: 1200px; height: 630px; overflow: hidden; }}
body {{ background: #09090b; color: #fafafa; font-family: "Google Sans", system-ui, sans-serif; -webkit-font-smoothing: antialiased; position: relative; }}
.grid {{ position: absolute; inset: 0;
  background-image: linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px);
  background-size: 56px 56px; background-position: center top;
  mask-image: radial-gradient(ellipse 70% 75% at 50% 30%, #000 30%, transparent 78%); }}
.glow {{ position: absolute; left: 50%; top: 300px; width: 900px; height: 520px; translate: -50% 0;
  background: radial-gradient(closest-side, color-mix(in srgb, #6e93ff 24%, transparent), transparent); filter: blur(20px); }}
.brand {{ position: absolute; top: 40px; left: 0; right: 0; display: flex; justify-content: center; align-items: center; gap: 10px; font-weight: 600; font-size: 22px; color: #e4e4e7; }}
.brand svg {{ width: 18px; height: 23px; fill: currentColor; }}
h1 {{ position: absolute; top: 96px; left: 60px; right: 60px; text-align: center; font-size: 58px; line-height: 1.08; letter-spacing: -0.035em; font-weight: 500; }}
h1 span, h1 strong {{ display: block; }}
h1 strong {{ font-weight: 700; }}
.phones {{ position: absolute; top: 282px; left: 0; right: 0; height: 700px; }}
.p {{ position: absolute; left: 50%; top: 0; }}
.p.mid {{ translate: -50% 0; z-index: 2; }}
.p.mid .iphone {{ width: 290px; }}
.p.side {{ top: 56px; z-index: 1; }}
.p.side .iphone {{ width: 254px; }}
.p.s {{ translate: calc(-50% - 268px) 0; rotate: -7deg; }}
.p.e {{ translate: calc(-50% + 268px) 0; rotate: 7deg; }}
{iphone}
</style></head><body>
<div class="grid"></div><div class="glow"></div>
<div class="brand"><svg viewBox="0 0 676 854"><path d="{glyph}"/></svg><span>{t['brand']}</span></div>
<h1><span>{t['h1a']}</span><strong>{t['h1b']}</strong></h1>
<div class="phones">
  <div class="p side s">{phone(lang,'home')}</div>
  <div class="p mid">{phone(lang,'plan')}</div>
  <div class="p side e">{phone(lang,'realtime')}</div>
</div>
</body></html>'''
    page = os.path.join(TMP, f'og-{lang}.html'); raw = os.path.join(TMP, f'raw-{lang}.png')
    open(page,'w').write(html)
    subprocess.run([CHROME,'--headless=new','--disable-gpu','--hide-scrollbars','--allow-file-access-from-files',
        '--force-device-scale-factor=2','--window-size=1200,630','--virtual-time-budget=8000',
        f'--screenshot={raw}', f'file://{page}'],
        check=True, capture_output=True)
    # Rendered at 2x for crisp text, then scaled to the 1200x630 OG size.
    out = os.path.join(SITE, 'public', 'assets', f'og-{lang}.jpg')
    Image.open(raw).convert('RGB').resize((1200,630), Image.LANCZOS).save(out, quality=88, optimize=True, progressive=True)
    print('wrote', os.path.relpath(out, SITE))
