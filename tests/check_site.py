#!/usr/bin/env python3
"""Dependency-free post-build checks for the generated Hugo site."""
import sys
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.h1=0; self.main=0; self.lang=''; self.ids=set(); self.links=[]; self.missing_alt=0; self.anchors=[]; self.scripts=[]; self.forms=[]; self.controls={}; self.label_ids=set(); self.text=[]
    def handle_data(self,data):
        self.text.append(data)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='form': self.forms.append(a)
        if tag in ['input','textarea','button'] and 'name' in a: self.controls[a['name']]={'tag':tag,**a}
        if tag=='label' and 'for' in a: self.label_ids.add(a['for'])
        if tag=='a': self.anchors.append(a)
        if tag=='script': self.scripts.append(a.get('src',''))
        if tag=='h1': self.h1+=1
        if tag=='main': self.main+=1
        if tag=='html': self.lang=a.get('lang','')
        if 'id' in a: self.ids.add(a['id'])
        if tag=='img' and 'alt' not in a: self.missing_alt+=1
        for key in ['href','src']:
            if key in a: self.links.append(a[key])

def check(root):
    pages={}
    for f in root.rglob('*.html'):
        if 'files' in f.relative_to(root).parts: continue # Existing standalone apps are out of redesign scope.
        p=Page();p.feed(f.read_text()); pages[f]=p
    errors=[]; links=0; fragment_warnings=[]
    for f,p in pages.items():
        rel=str(f.relative_to(root))
        if rel=='en/index.html':continue # Hugo default-language redirect alias.
        if p.h1!=1:errors.append(f'{rel}: expected one h1, got {p.h1}')
        if p.main!=1:errors.append(f'{rel}: expected one main, got {p.main}')
        if p.lang not in ['en','nl']:errors.append(f'{rel}: unexpected language {p.lang!r}')
        expected_contact='/nl/contact/' if p.lang=='nl' else '/contact/'
        if not any(a.get('href')==expected_contact and 'footer-contact' in a.get('class','').split() for a in p.anchors):errors.append(f'{rel}: missing language-correct footer contact link')
        if p.missing_alt:errors.append(f'{rel}: {p.missing_alt} images missing alt')
        for anchor in p.anchors:
            href=anchor.get('href','');u=urlsplit(href)
            internal=(not u.scheme and not u.netloc) or u.scheme=='mailto' or u.hostname=='jo-qu.com'
            if internal and anchor.get('target')=='_blank':errors.append(f'{rel}: internal/mail link opens new tab: {href}')
            if anchor.get('target')=='_blank' and not {'noopener','noreferrer'}.issubset(set(anchor.get('rel','').split())):errors.append(f'{rel}: missing safe external link rel: {href}')
        if any('theme.' in src or 'theme.js' in src for src in p.scripts):errors.append(f'{rel}: legacy theme JavaScript loaded by new shell')
        if rel in ['about/index.html','nl/about/index.html']:
            expected='/nl/contact/' if p.lang=='nl' else '/contact/'
            if 'about-intro' not in p.ids:errors.append(f'{rel}: intended approach-page layout not selected')
            if not any(a.get('href')==expected and 'button' in a.get('class','').split() for a in p.anchors):errors.append(f'{rel}: missing language-correct approach-page CTA')
        if rel in ['contact/index.html','nl/contact/index.html']:
            if len(p.forms)!=1 or p.forms[0].get('action')!='https://formspree.io/f/mzzjknzr' or p.forms[0].get('method','').upper()!='POST':errors.append(f'{rel}: original Formspree action/method not retained')
            if set(p.controls)!= {'name','email','message','_gotcha'}:errors.append(f'{rel}: form field contract changed')
            for field,tag,typ in [('name','input','text'),('email','input','email'),('message','textarea',None)]:
                control=p.controls.get(field,{})
                if control.get('tag')!=tag or (typ and control.get('type')!=typ) or 'required' not in control:errors.append(f'{rel}: invalid required field {field}')
                if control.get('id') not in p.label_ids:errors.append(f'{rel}: missing explicit label for {field}')
            if p.controls.get('message',{}).get('rows')!='6':errors.append(f'{rel}: original message rows changed')
            honey=p.controls.get('_gotcha',{})
            if honey.get('type')!='text' or honey.get('aria-hidden')!='true' or 'hidden-field' not in honey.get('class','').split() or 'required' in honey:errors.append(f'{rel}: original honeypot contract changed')
        if p.lang=='nl':
            text=' '.join(' '.join(p.text).split())
            for forbidden in ['Bestaande software verbeteren','Verbind je tools en verminder het repetitieve werk ertussen']:
                if forbidden in text:errors.append(f'{rel}: superseded Dutch copy remains: {forbidden}')
            if rel in ['nl/index.html','nl/services/index.html']:
                for exact in ['Bestaande websoftware verbeteren','Laat je systemen samenwerken en beperk terugkerend handmatig werk.']:
                    if exact not in text:errors.append(f'{rel}: missing exact agreed copy: {exact}')
        for href in p.links:
            u=urlsplit(href)
            if u.scheme or u.netloc:continue
            if not u.path: target=f
            elif u.path.startswith('/'):target=root/unquote(u.path.lstrip('/'))
            else:target=f.parent/unquote(u.path)
            if target.is_dir():target=target/'index.html'
            if not target.exists():errors.append(f'{rel}: missing local target {href}')
            elif u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:
                errors.append(f'{rel}: missing fragment {href}')
            links+=1
    print(f'Checked {len(pages)} generated Hugo HTML files and {links} local references; {len(errors)} errors.')
    for e in errors:print('FAIL:',e)
    return bool(errors)
if __name__=='__main__':
    if len(sys.argv)!=2:raise SystemExit('Usage: python3 tests/check_site.py jo-qu.com/public')
    raise SystemExit(check(Path(sys.argv[1]).resolve()))
