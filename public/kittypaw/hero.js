// Independent implementation based on Jiro's public KittyPaw preview; no original source code.
export function mountKittyPawHero(root, options = {}) {
  const base = new URL('./media/', import.meta.url);
  const media = name => new URL(name, base).href;
  const c = {
    brand: 'KittyPaw', logo: media('logo.svg'), video: media('hero.mp4'), poster: media('poster.jpg'),
    titleLines: ['Everything', 'Your', 'Cats Love'],
    description: 'Playful Pet Care offers trusted wellness, grooming, and vet-backed health programs so your furry life.',
    ctaLabel: 'Explore Products', ctaHref: '#products', cursorText: 'CLICK TO PLAY • CLICK TO PLAY • ',
    menuLabel: 'Menu', previewSeconds: 5, count: '648+', trustText: 'People & Pets love shopping here',
    avatars: [1,2,3].map(i => media(`avatar-${i}.png`)),
    links: [{label:'Home',href:'#home'},{label:'Premium Products',href:'#products'},{label:'Cat Grooming',href:'#grooming'},{label:'Wellness & Health',href:'#wellness'},{label:'Vet Programs',href:'#vets'},{label:'Contact Us',href:'#contact'}],
    ...options
  };
  if (!root || root.childNodes.length) throw new Error('Provide an empty mount element.');
  const cleanups = [];
  const el = (tag, cls, text) => { const e=document.createElement(tag); if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e; };
  const on = (e, type, fn, opts) => {e.addEventListener(type,fn,opts);cleanups.push(()=>e.removeEventListener(type,fn,opts));};
  const url = value => { const u = new URL(value, document.baseURI); if(!['http:','https:','blob:'].includes(u.protocol))throw new Error('Unsupported URL protocol');return u.href; };
  const image=(src,alt,cls)=>{const e=el('img',cls);e.src=url(src);e.alt=alt;return e;};
  const section=el('section','kp-hero'); section.setAttribute('aria-label',c.brand);root.append(section);
  section.style.backgroundImage=`url("${url(c.poster).replaceAll('"','%22')}")`;
  const video=el('video','kp-video');video.src=url(c.video);video.poster=url(c.poster);video.muted=true;video.playsInline=true;video.preload='metadata';video.setAttribute('aria-hidden','true');section.append(video);
  section.append(el('div','kp-shade'));
  const header=el('header','kp-header');section.append(header);
  const brand=el('a','kp-brand');brand.href=url(c.links[0]?.href || '#home');brand.setAttribute('aria-label',c.brand);
  brand.append(c.logo?image(c.logo,c.brand):document.createTextNode(c.brand));header.append(brand);
  const menuWrap=el('div','kp-menu-wrap');header.append(menuWrap);
  const toggle=el('button','kp-toggle',`☰  ${c.menuLabel}`);toggle.type='button';toggle.setAttribute('aria-expanded','false');menuWrap.append(toggle);
  const nav=el('nav','kp-nav');nav.setAttribute('aria-label','Main navigation');nav.hidden=true;menuWrap.append(nav);
  for(const link of c.links){const a=el('a','',link.label);a.href=url(link.href);nav.append(a);}
  const setMenu=(open,focus=false)=>{nav.hidden=!open;toggle.setAttribute('aria-expanded',String(open));if(focus)(open?nav.querySelector('a'):toggle)?.focus();};
  on(toggle,'click',()=>setMenu(nav.hidden));on(toggle,'keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();setMenu(true,true);}});
  on(document,'pointerdown',e=>{if(!menuWrap.contains(e.target))setMenu(false);});
  on(document,'keydown',e=>{if(e.key==='Escape'&&!nav.hidden)setMenu(false,true);});
  on(nav,'click',e=>{if(e.target.closest('a'))setMenu(false);});
  on(menuWrap,'focusout',e=>{if(!menuWrap.contains(e.relatedTarget))setMenu(false);});
  const content=el('div','kp-content');const h=el('h1');c.titleLines.forEach(line=>h.append(el('span','',line)));content.append(h,el('p','',c.description));section.append(content);
  const footer=el('div','kp-footer');const cta=el('a','kp-cta',c.ctaLabel);cta.href=url(c.ctaHref);cta.append(image(media('arrow.svg'),'','kp-arrow'));footer.append(cta);
  const trust=el('div','kp-trust');const avatars=el('div','kp-avatars');c.avatars.forEach(src=>avatars.append(image(src,'','')));const proof=el('div');proof.append(el('strong','',c.count),el('p','',c.trustText));trust.append(avatars,proof);footer.append(trust);section.append(footer);
  const play=el('button','kp-play','Play full background video');play.type='button';section.append(play);
  const cursor=el('div','kp-cursor');cursor.setAttribute('aria-hidden','true');
  const ns='http://www.w3.org/2000/svg';const svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 120 120');
  const id=`kp-ring-${Math.random().toString(36).slice(2)}`;const defs=document.createElementNS(ns,'defs');const path=document.createElementNS(ns,'path');path.id=id;path.setAttribute('d','M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0');defs.append(path);const text=document.createElementNS(ns,'text');const tp=document.createElementNS(ns,'textPath');tp.setAttribute('href',`#${id}`);tp.textContent=c.cursorText;text.append(tp);svg.append(defs,text);cursor.append(svg);section.append(cursor);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');const fine=matchMedia('(hover: hover) and (pointer: fine)');let full=false,raf=0,point={x:0,y:0};
  const start=()=>video.play().catch(()=>{section.dataset.video='paused';});
  const playFull=()=>{full=true;section.dataset.playing='true';play.textContent='Restart background preview';start();};
  on(play,'click',()=>{if(full){full=false;video.currentTime=0;delete section.dataset.playing;play.textContent='Play full background video';if(reduced.matches)video.pause();else start();}else playFull();});
  on(section,'click',e=>{if(!e.target.closest('a,button,nav'))playFull();});
  on(video,'timeupdate',()=>{const limit=Math.min(Math.max(.1,Number(c.previewSeconds)||5),video.duration||Infinity);if(!full&&video.currentTime>=limit)video.currentTime=0;});
  on(video,'ended',()=>{full=false;delete section.dataset.playing;play.textContent='Play full background video';video.currentTime=0;if(!reduced.matches)start();});
  on(video,'error',()=>{section.dataset.video='error';play.hidden=true;});
  on(section,'pointermove',e=>{if(!fine.matches||reduced.matches)return;const r=section.getBoundingClientRect();point={x:e.clientX-r.left,y:e.clientY-r.top};cursor.hidden=!!e.target.closest('a,button,nav');if(!raf)raf=requestAnimationFrame(()=>{cursor.style.transform=`translate3d(${point.x}px,${point.y}px,0)`;raf=0;});});
  on(section,'pointerleave',()=>{cursor.hidden=true;});cursor.hidden=true;
  on(reduced,'change',()=>{cursor.hidden=true;if(reduced.matches)video.pause();else start();});
  on(document,'visibilitychange',()=>{if(document.hidden)video.pause();else if(!reduced.matches||full)start();});
  if(!reduced.matches)start();
  return () => {cleanups.forEach(f=>f());cancelAnimationFrame(raf);video.pause();video.removeAttribute('src');video.load();section.remove();};
}
