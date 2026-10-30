'use client';
// Lógica de la página (carrusel de panorámicas, menú, calcos, provincias, modo edición).
// Los datos que ve el público están en SITIO. Para cambiarlos: abrí /#editar, hacé los cambios,
// tocá "Copiar datos" y pegá el resultado en SITIO.
import { useEffect } from 'react';

export default function Site() {
  useEffect(() => {
    if (window.__lpssInit) return;
    window.__lpssInit = true;
    initSite();
  }, []);
  return null;
}

function initSite() {
const $=id=>document.getElementById(id);
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
if(location.hash==='#editar'){store.set('lpss_edit',1);history.replaceState(null,'',location.pathname+location.search)}
const EDIT=!!store.get('lpss_edit',0);document.body.classList.toggle('edit',EDIT);
// ===== DATOS DEL SITIO (lo que ve el público). Para cambiarlos: modo edición (#editar) y "Copiar datos". =====
const SITIO={
 paises:[['/images/flags/ar.png','Argentina'],['/images/flags/cl.png','Chile'],['/images/flags/br.png','Brasil'],['/images/flags/py.png','Paraguay']],
 provincias:['Córdoba'],
 calcos:[['Somos Australes','','🇦🇷','#1e5a8a','','/images/calcos/somos-australes.webp'],['Creciendo en el camino','','🌴','#2e7d4f','','/images/calcos/creciendo-en-el-camino.webp'],['Abby por América','','🚐','#e86aa0','','/images/calcos/abby-por-america.webp'],['Proyecto Alaska','Pablito viajero','🏍️','#1d4a3d','','/images/calcos/proyecto-alaska.webp'],['Zapparancho','','🏕️','#8a5a2b','','/images/calcos/zapparancho.webp']]
};
const D=EDIT?store.get('lpss_draft',JSON.parse(JSON.stringify(SITIO))):SITIO;
const save=()=>{if(EDIT)store.set('lpss_draft',D)};
$('yr').textContent=new Date().getFullYear();
addEventListener('scroll',()=>$('hd').classList.toggle('on',scrollY>10),{passive:true});
// menú del celular
const nav=$('nav'),bg=$('burger');
bg.onclick=()=>{const o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.textContent=o?'✕':'☰'};
nav.onclick=e=>{if(e.target.tagName==='A'){nav.classList.remove('open');bg.setAttribute('aria-expanded','false');bg.textContent='☰'}};
// países
function drawFlags(){const r=$('flags');r.innerHTML='';
 D.paises.forEach(([e,n],i)=>{const b=document.createElement('button');b.className='flag';b.innerHTML='<span>'+(/^(\/?images\/|data:image)/.test(e)?'<img src="'+esc(e)+'" alt="">':esc(e))+'</span>'+esc(n);
  if(EDIT){b.title='Tocá dos veces para quitar';b.ondblclick=()=>{D.paises.splice(i,1);save();drawFlags()}}else b.style.cursor='default';r.appendChild(b)});
 const a=document.createElement('button');a.className='flag add';a.innerHTML='<span>+</span>Y más por venir';
 if(EDIT)a.onclick=()=>{$('cf').classList.toggle('open');$('ce').focus()};else a.style.cursor='default';
 r.appendChild(a);const t=document.createElement('div');t.className='tag';t.textContent='Cada kilómetro deja una historia.';r.appendChild(t)}
// provincias
const P=['Buenos Aires','CABA','Catamarca','Chaco','Chubut','Córdoba','Corrientes','Entre Ríos','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones','Neuquén','Río Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fe','Santiago del Estero','Tierra del Fuego','Tucumán'];
function drawProv(){const c=$('prov');c.innerHTML='';
 P.forEach(p=>{const on=D.provincias.includes(p),b=document.createElement('button');b.className='chip'+(on?' on':'');b.textContent=p;
  if(EDIT){b.setAttribute('aria-pressed',on);b.onclick=()=>{D.provincias=on?D.provincias.filter(x=>x!==p):[...D.provincias,p];save();drawProv()}}else{b.style.pointerEvents='none';b.tabIndex=-1}
  c.appendChild(b)});
 $('cnt').textContent=D.provincias.length+' de '+P.length;$('pg').style.width=D.provincias.length/P.length*100+'%'}
// calcos
const COL=['#1e5a8a','#c0392b','#2e7d4f','#7b3fa0','#e07b00'];let col=COL[0],ei=-1;
function norm(u){u=(u||'').trim();if(!u)return'';if(!/^https?:\/\//i.test(u))u='https://'+u.replace(/^\/+/,'');try{const x=new URL(u);return/^https?:$/.test(x.protocol)?x.href:''}catch(e){return''}}
function mk(s,i,full,fresh){const w=document.createElement('div');w.className='w';
 const d=document.createElement(s[4]?'a':'div');d.className='s'+(fresh?' new':'');
 if(s[4]){d.href=s[4];d.target='_blank';d.rel='noopener noreferrer'}
 d.style.setProperty('--r',((i*37%13)-6)+'deg');
 if(s[5]){d.classList.add('im');d.innerHTML='<img src="'+esc(s[5])+'" alt="'+esc(s[0])+'">'}
 else{d.style.background=s[3];d.innerHTML='<b>'+esc(s[2])+'</b>'+esc(s[0])+(s[1]?'<em>'+esc(s[1])+'</em>':'')}
 w.appendChild(d);
 if(full&&EDIT){const l=document.createElement('button');l.className='x l';l.textContent='🔗';l.title='Poner o cambiar vínculo';l.setAttribute('aria-label','Vínculo de '+s[0]);l.onclick=()=>editLink(i);
  const x=document.createElement('button');x.className='x';x.textContent='×';x.setAttribute('aria-label','Quitar '+s[0]);x.onclick=()=>{D.calcos.splice(i,1);save();drawAll()};w.append(l,x)}
 return w}
function drawAll(fresh){const a=$('stk'),b=$('stk2'),L=D.calcos;a.innerHTML='';b.innerHTML='';
 for(let i=L.length-1;i>=0;i--){if(i>=L.length-6)a.appendChild(mk(L[i],i,false,fresh&&i===L.length-1));b.appendChild(mk(L[i],i,true))}
 $('all').textContent='Ver todos los calcos ('+L.length+')';
 $('n2').textContent=L.length+' calcos.'+(EDIT?' Tocá 🔗 para poner o cambiar el vínculo; tocá el calco para abrirlo.':' Tocá un calco para conocer su viaje.')}
function editLink(i){ei=i;$('lt').textContent='Vínculo de '+D.calcos[i][0];$('lu').value=D.calcos[i][4]||'';$('lf').classList.add('open');$('lu').focus()}
$('lf').onsubmit=e=>{e.preventDefault();if(ei<0)return;D.calcos[ei][4]=norm($('lu').value);save();drawAll();$('lf').classList.remove('open')};
$('lx').onclick=()=>$('lf').classList.remove('open');
$('sw').innerHTML='';COL.forEach((c,i)=>{const b=document.createElement('button');b.type='button';b.style.background=c;b.className=i?'':'on';b.setAttribute('aria-label','Color '+(i+1));b.onclick=()=>{col=c;[...$('sw').children].forEach(x=>x.classList.toggle('on',x===b))};$('sw').appendChild(b)});
$('open').onclick=()=>{$('f').classList.toggle('open');$('fn').focus()};
$('f').onsubmit=e=>{e.preventDefault();D.calcos.push([$('fn').value.trim(),$('fh').value.trim(),$('fe').value.trim()||'⭐',col,norm($('fl').value),$('fi').value.trim()]);save();drawAll(true);e.target.reset();$('f').classList.remove('open')};
const FLAGS=[['/images/flags/ar.png','Argentina'],['/images/flags/bo.png','Bolivia'],['/images/flags/br.png','Brasil'],['/images/flags/ca.png','Canadá'],['/images/flags/cl.png','Chile'],['/images/flags/co.png','Colombia'],['/images/flags/ec.png','Ecuador'],['/images/flags/us.png','Estados Unidos'],['/images/flags/mx.png','México'],['/images/flags/py.png','Paraguay'],['/images/flags/pe.png','Perú'],['/images/flags/uy.png','Uruguay'],['/images/flags/ve.png','Venezuela']];
$('cs').innerHTML+=FLAGS.map(f=>'<option value="'+f[0]+'">'+f[1]+'</option>').join('');
$('cf').onsubmit=e=>{e.preventDefault();const v=$('cs').value,n=$('cn').value.trim();if(v)D.paises.push([v,FLAGS.find(f=>f[0]===v)[1]]);else if(n)D.paises.push([$('ce').value.trim()||'🌎',n]);else return;save();drawFlags();e.target.reset();$('cf').classList.remove('open')};
// barra de edición
$('cp').onclick=()=>{const t=JSON.stringify(D,null,1),x=$('exp');x.value=t;x.classList.add('on');x.select();try{navigator.clipboard.writeText(t)}catch(e){}};
$('rs').onclick=()=>{store.del('lpss_draft');location.reload()};
$('ex').onclick=()=>{store.del('lpss_edit');location.reload()};
drawFlags();drawProv();drawAll();
// aparición suave
try{const r=$('red');if('IntersectionObserver' in window){new IntersectionObserver((a,o)=>a.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');o.disconnect()}}),{threshold:.3}).observe(r)}else r.classList.add('in')}catch(e){$('red').classList.add('in')}
// fondo de la portada: cada panorámica se recorre completa, de derecha a izquierda, y se mezcla con la siguiente (la más nueva primero)
(function(){const P=document.querySelector('.pan'),L=[...P.querySelectorAll('img')];
 const FADE=3,SPEED=9; // segundos de mezcla y píxeles por segundo
 let cur=-1;
 function show(i){const im=L[i],h=P.clientHeight,vw=P.clientWidth,w=(im.naturalWidth||h*3)*h/(im.naturalHeight||h);
  const dist=Math.max(0,w-vw),dur=Math.max(20,dist/SPEED);
  im.style.setProperty('--f','0px');im.style.setProperty('--t',-dist+'px');im.style.setProperty('--d',dur+'s');
  im.style.animation='none';void im.offsetWidth;im.style.animation='panx var(--d) linear forwards';
  L.forEach((x,j)=>x.classList.toggle('on',j===i));cur=i;
  if(L.length>1)setTimeout(()=>show((cur+1)%L.length),Math.max(5,dur-FADE)*1000)}
 const go=()=>show(0);
 if(L[0].complete)go();else L[0].addEventListener('load',go,{once:true});
})();
// páginas: inicio y todos los calcos (#calcos)
function route(){const on=location.hash==='#calcos';$('home').hidden=on;$('pg2').hidden=!on;if(on)scrollTo(0,0);else if(location.hash){try{const t=document.querySelector(location.hash);t&&t.scrollIntoView()}catch(e){}}}
addEventListener('hashchange',route);route();
}
