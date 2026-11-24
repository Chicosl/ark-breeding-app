"""Gera a pasta www/ do APK a partir de app/index.html:
 - tira o <script> embutido para www/app.js (permite CSP com script-src 'self')
 - acrescenta a Content-Security-Policy
 - copia as fontes locais
Uso: python3 -I scripts/apk_www.py app/index.html <pasta www>"""
import sys, os, shutil, re
src, out = sys.argv[1], sys.argv[2]
html = open(src, encoding='utf8').read()
blocks = re.findall(r'<script>(.*?)</script>', html, flags=re.S)
assert len(blocks) == 1, "esperava exatamente 1 <script> embutido"
js = blocks[0]
html = html.replace('<script>' + js + '</script>', '<script src="app.js"></script>')
csp = ("default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; "
       "img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; media-src 'self' blob:; "
       "object-src 'none'; base-uri 'none'; form-action 'none'")
meta = '<meta http-equiv="Content-Security-Policy" content="' + csp + '">'
assert '<meta charset="utf-8">' in html
html = html.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n' + meta, 1)
assert 'fonts.googleapis' not in html and 'fonts.gstatic' not in html
assert not re.search(r'\son[a-z]+\s*=\s*"', html.split('<script')[0]), "handler inline no HTML"
os.makedirs(out, exist_ok=True)
open(os.path.join(out, 'index.html'), 'w', encoding='utf8').write(html)
open(os.path.join(out, 'app.js'), 'w', encoding='utf8').write(js)
fd = os.path.join(out, 'fonts'); os.makedirs(fd, exist_ok=True)
for f in os.listdir(os.path.join(os.path.dirname(src), 'fonts')):
    shutil.copy(os.path.join(os.path.dirname(src), 'fonts', f), fd)
print("www gerado:", len(html), "bytes de HTML,", len(js), "bytes de JS")
