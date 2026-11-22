(function(){var A=window.AH,P=document.body.dataset.p||'home',$=function(s,e){return(e||document).querySelector(s)};
window.U={wa:function(t){return'https://wa.me/'+A.wa+'?text='+encodeURIComponent(t)},usd:function(n){return'USD '+Math.round(n).toLocaleString('es-AR')},q:function(k){return new URLSearchParams(location.search).get(k)},m:function(id){return A.modelos.filter(function(m){return m.id===id||m.k===id})[0]},from:function(m){return m.m2*A.lineas[0].usd}};
/* ===== dibujo del módulo (SVG): hero, configurador, fichas y proceso ===== */
window.houseSVG=function(o){if(o.k&&!o.sc&&!o.bp)return'<svg class="hs" viewBox="10 60 580 215" role="img" aria-label="'+(o.label||'Dibujo del módulo')+'">'+duskArt(10,580,'b'+(window._hs=(window._hs||0)+1),276)+modelArt(o.k,o.W||MW[o.k],'f'+window._hs,0,o.cfg?{pergola:!!o.pergola,deck:!!o.deck,clean:1}:0)+'</svg>';var n=o.id||(window._hs=(window._hs||0)+1),W=o.W||MW[o.k]||290,x=300-W/2,y=250,t=164,i=0,
p=function(min,c,max){i++;return'<g class="p'+(o.sc?'':' on')+'" data-min="'+min+'"'+(max?' data-max="'+max+'"':'')+' style="--d:'+(i*.16).toFixed(2)+'s">'+c+'</g>'},
s='<svg class="hs'+(o.anim?' a':'')+(o.sc?' sc':'')+(o.bp?' bpv':'')+'" viewBox="30 72 540 192" role="img" aria-label="'+(o.label||'Dibujo del módulo')+'"><defs><pattern id="rb'+n+'" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="#1d1d1d"/><rect x="6" width="3" height="10" fill="#2f2f2f"/></pattern><pattern id="wd'+n+'" width="7" height="10" patternUnits="userSpaceOnUse"><rect width="7" height="10" fill="#9a6633"/><rect x="5" width="2" height="10" fill="#6e4723"/></pattern><linearGradient id="gl'+n+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe3a3"/><stop offset="1" stop-color="#f2a01e"/></linearGradient><linearGradient id="gk'+n+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--gk1,#1d2535)"/><stop offset="1" style="stop-color:var(--gk2,#0f141d)"/></linearGradient></defs>';
s+=o.hero?'':p(0,'<ellipse cx="300" cy="254" rx="'+(W/2+90)+'" ry="7" fill="rgba(0,0,0,.55)"/><line x1="0" x2="600" y1="250" y2="250" stroke="rgba(245,242,236,.22)" stroke-width="1.5"/>');
if(o.bp||o.sc)s+=p(1,'<rect x="'+x+'" y="'+t+'" width="'+W+'" height="86" fill="rgba(242,160,30,.06)" stroke="#F2A01E" stroke-width="1.5" stroke-dasharray="6 5"/><line x1="'+x+'" x2="'+(x+W)+'" y1="'+(t-22)+'" y2="'+(t-22)+'" stroke="#F2A01E"/><line x1="'+x+'" x2="'+x+'" y1="'+(t-28)+'" y2="'+(t-16)+'" stroke="#F2A01E"/><line x1="'+(x+W)+'" x2="'+(x+W)+'" y1="'+(t-28)+'" y2="'+(t-16)+'" stroke="#F2A01E"/><text x="300" y="'+(t-30)+'" text-anchor="middle" fill="#F2A01E" font-size="13" font-family="Poppins,sans-serif">'+o.m2+' m²</text>',o.sc?3:0);
if(o.bp)return s+'</svg>';
if(o.deck)s+=p(5,'<rect x="'+(x+W*.06)+'" y="'+(y-6)+'" width="'+(W*.94+60)+'" height="8" fill="#7a5530"/><path d="M'+(x+W*.06)+' '+(y-2)+'H'+(x+W+60)+'" stroke="#4d3419" stroke-width="1.5"/>');
s+=p(3,'<rect x="'+x+'" y="'+t+'" width="'+W+'" height="86" fill="url(#rb'+n+')" stroke="rgba(245,242,236,.4)" stroke-width="1.5"/>'+(o.wood?'<rect x="'+(x+W*.3-6)+'" y="'+t+'" width="'+(W*.4+12)+'" height="86" fill="url(#wd'+n+')"/><rect x="'+(x+W*.88)+'" y="'+t+'" width="'+(W*.12)+'" height="86" fill="url(#wd'+n+')"/>':'')+'<rect x="'+(x-3)+'" y="'+(t-5)+'" width="'+(W+6)+'" height="6" fill="#0d0d0d" stroke="rgba(245,242,236,.3)"/>');
var gx=x+W*.34,gw=W*.36;
var wn=function(f){return'<rect x="'+gx+'" y="'+(t+16)+'" width="'+gw+'" height="58" fill="'+f+'" stroke="#0b0b0b" stroke-width="3"/><line x1="'+(gx+gw/2)+'" x2="'+(gx+gw/2)+'" y1="'+(t+16)+'" y2="'+(t+74)+'" stroke="#0b0b0b" stroke-width="3"/><rect x="'+(x+W*.08)+'" y="'+(t+10)+'" width="24" height="64" fill="'+f+'" stroke="#0b0b0b" stroke-width="3"/><rect x="'+(x+W*.8)+'" y="'+(t+24)+'" width="'+Math.max(16,W*.07)+'" height="36" fill="'+f+'" stroke="#0b0b0b" stroke-width="3"/>'};
s+=p(4,'<g class="wb">'+wn('url(#gk'+n+')')+'<path d="M'+(gx+gw*.5)+' '+(t+16)+'H'+(gx+gw*.78)+'L'+(gx+gw*.42)+' '+(t+74)+'H'+(gx+gw*.14)+'Z" fill="rgba(255,255,255,.08)"/></g><g class="gl">'+wn('url(#gl'+n+')')+'</g><g class="lm"><circle cx="'+(x+W*.27)+'" cy="'+(t+10)+'" r="2.6" fill="#ffe9a8"/><circle cx="'+(x+W*.77)+'" cy="'+(t+10)+'" r="2.6" fill="#ffe9a8"/></g><g class="lh"><circle cx="'+(x+W*.27)+'" cy="'+(t+10)+'" r="14" fill="rgba(242,160,30,.16)"/><circle cx="'+(x+W*.77)+'" cy="'+(t+10)+'" r="14" fill="rgba(242,160,30,.16)"/></g>');
if(o.terra)s+=p(5,'<rect x="'+(x+6)+'" y="'+(t-34)+'" width="'+(W-12)+'" height="30" fill="none" stroke="rgba(245,242,236,.55)" stroke-width="1.5"/><path d="M'+(x+6)+' '+(t-20)+'H'+(x+W-6)+'" stroke="rgba(245,242,236,.35)"/><path d="M'+(x-4)+' '+y+'L'+(x-38)+' '+(y)+'L'+(x+4)+' '+(t-4)+'" fill="none" stroke="#c9843a" stroke-width="2"/><rect x="'+(x+W*.3)+'" y="'+(t-78)+'" width="'+(W*.4)+'" height="5" fill="#111" stroke="rgba(245,242,236,.3)"/><path d="M'+(x+W*.3+4)+' '+(t-73)+'V'+(t-4)+'M'+(x+W*.7-4)+' '+(t-73)+'V'+(t-4)+'" stroke="#111" stroke-width="3"/>');
if(o.pergola){var pw=Math.min(200,W*.66),px=x+W*.04;s+=p(6,'<rect x="'+(px-6)+'" y="'+(t-20)+'" width="'+(pw+12)+'" height="7" fill="#0d0d0d" stroke="rgba(245,242,236,.35)"/>'+[0,1,2,3,4,5,6,7].map(function(k){return'<path d="M'+(px+k*pw/7)+' '+(t-19)+'v5" stroke="#c9843a"/>'}).join('')+'<rect x="'+(px-1.5)+'" y="'+(t-14)+'" width="3.5" height="'+(y-t+8)+'" fill="#0d0d0d" stroke="rgba(245,242,236,.25)"/><rect x="'+(px+pw-1.5)+'" y="'+(t-14)+'" width="3.5" height="'+(y-t+8)+'" fill="#0d0d0d" stroke="rgba(245,242,236,.25)"/>')}
return s+'</svg>'};
/* bosque nocturno fijo (hero, recorrido de modelos y proceso): lomas, pinares en capas, neblina, suelo y pasto */
window.forestDefs=function(q,P){q=q||'';P=P||{};var G=P.g||['#1b1e27','#13151c','#0d0d10','#0a0908'];return'<defs><linearGradient id="hhz'+q+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+(P.hz||'#8fa3d0')+'" stop-opacity="0"/><stop offset="1" stop-color="'+(P.hz||'#8fa3d0')+'" stop-opacity="'+(P.hzo||.1)+'"/></linearGradient><linearGradient id="hgd'+q+'" gradientUnits="userSpaceOnUse" x1="0" y1="236" x2="0" y2="330"><stop offset="0" stop-color="'+G[0]+'"/><stop offset=".25" stop-color="'+G[1]+'"/><stop offset=".6" stop-color="'+G[2]+'"/><stop offset="1" stop-color="'+G[3]+'"/></linearGradient></defs>'};
window.forestArt=function(x0,vw,cx,q,noEdge,P){q=q||'';P=P||{};cx=cx==null?300:cx;var gT=238,x1=x0+vw,sd=11,rnd=function(){sd=sd*16807%2147483647;return sd/2147483647},
pine=function(x,b,ph,pw){var f=function(a,c){return(x+a*pw).toFixed(1)+' '+(b-c*ph).toFixed(1)};return'M'+f(0,1)+'L'+f(.16,.66)+'L'+f(.08,.66)+'L'+f(.28,.38)+'L'+f(.15,.38)+'L'+f(.42,.12)+'L'+f(.05,.12)+'L'+f(.05,0)+'L'+f(-.05,0)+'L'+f(-.05,.12)+'L'+f(-.42,.12)+'L'+f(-.15,.38)+'L'+f(-.28,.38)+'L'+f(-.08,.66)+'L'+f(-.16,.66)+'Z'},
hills=function(base,amp,ph){var d='M'+(x0-20)+' '+(gT+2),x;for(x=x0-20;x<=x1+20;x+=14)d+='L'+x.toFixed(1)+' '+(gT-base-amp*(.55+.3*Math.sin(x/150+ph)+.15*Math.sin(x/55+ph*2.3))).toFixed(1);return d+'L'+(x1+20)+' '+(gT+2)+'Z'},
row=function(gap,h0,h1,wr,b,mid){var d='',x=x0-12-rnd()*gap,ph;while(x<x1+30){ph=(h0+rnd()*(h1-h0))*(Math.abs((x-cx)/vw)<.2?mid:1);d+=pine(x,b,ph,ph*wr);x+=gap*(.7+rnd()*.7)}return d},
edge=function(){var d='',a=[[.03,150],[.09,112],[.93,126],[.985,160]],j;for(j=0;j<4;j++)d+=pine(x0+vw*a[j][0],gT+14,a[j][1],a[j][1]*.4);return d},
blades=function(){var d='',x,bh;for(x=x0-8;x<x1+8;x+=2.4+rnd()*3){bh=(4+rnd()*9)*(Math.abs((x-cx)/vw)<.3?.4:1);d+='M'+x.toFixed(1)+' 268L'+(x+1+rnd()*2.2).toFixed(1)+' '+(268-bh).toFixed(1)+'L'+(x+3.4).toFixed(1)+' 268Z'}return d};
return'<path d="'+hills(26,16,1.3)+'" fill="'+(P.h||'#232838')+'"/><path d="'+row(13,16,30,.42,gT-2,1)+'" fill="'+(P.r1||'#1c2130')+'"/><path d="'+row(19,26,46,.4,gT+2,1)+'" fill="'+(P.r2||'#151927')+'"/><rect x="'+(x0-20)+'" y="'+(gT-36)+'" width="'+(vw+40)+'" height="44" fill="url(#hhz'+q+')"/><path d="'+row(30,40,70,.4,gT+6,.6)+'" fill="'+(P.r3||'#0f121b')+'"/><path d="'+row(46,52,92,.38,gT+10,.5)+'" fill="'+(P.r4||'#0a0c12')+'"/>'+(noEdge?'':'<path d="'+edge()+'" fill="#05060a"/>')+'<rect x="'+(x0-20)+'" y="'+gT+'" width="'+(vw+40)+'" height="440" fill="url(#hgd'+q+')"/><path d="'+blades()+'" fill="'+(P.b||'#06070a')+'"/>'};
/* ===== dibujos de cada modelo, medidos sobre su foto real (elevación frontal, luz de atardecer) =====
   modelArt(k, W, id, veg): k = clave del modelo (c15, c30, c30t, c36, c45, c60, c90), W = ancho de la fachada en unidades del SVG,
   id = sufijo único para los gradientes, veg = 0 sin vegetación · 1 pasto y arbustos · 2 con pampa (hero).
   Todas las posiciones de aberturas, luces y paneles son fracciones de W tomadas de la foto de cada modelo.
   El suelo está en y=250 y la fachada queda centrada en x=300. */
window.MW={c15:190,c30:290,c30t:290,c36:320,c45:350,c60:370,c90:430};
window.MEXT={c15:[-.14,1.36],c30:[-.12,1.02],c30t:[-.22,1.15],c36:[-.12,1.12],c45:[-.06,1.02],c60:[-.07,1.15],c90:[-.14,1.17]};
window.modelArt=function(k,W,id,veg,ex){var gd=!ex||ex.deck,gp=!ex||ex.pergola,cl=!!(ex&&ex.clean);
var EXT=MEXT,
DM={c15:15,c30:23,c30t:13,c36:30,c45:17,c60:17,c90:28},
E=EXT[k]||[0,1],dm=DM[k]||15,
x=300-W/2,y=250,t=164,u=id,
n=function(v){return Math.round(v*10)/10},
r=function(a,b,w,h,f,e){return'<rect x="'+n(a)+'" y="'+n(b)+'" width="'+n(w)+'" height="'+n(h)+'" fill="'+f+'"'+(e||'')+'/>'},
pa=function(d,f,e){return'<path d="'+d+'" fill="'+f+'"'+(e||'')+'/>'},
ln=function(a,b,c,d,s,w){return'<path d="M'+n(a)+' '+n(b)+'L'+n(c)+' '+n(d)+'" fill="none" stroke="'+s+'" stroke-width="'+(w||1)+'"/>'},
el=function(cx,cy,rx,ry,f,e){return'<ellipse cx="'+n(cx)+'" cy="'+n(cy)+'" rx="'+n(rx)+'" ry="'+n(ry)+'" fill="'+f+'"'+(e||'')+'/>'},
sd=0,rn=function(){sd=(sd*16807)%2147483647;return sd/2147483647},
RF='url(#rf'+u+')',
defs='<defs>'+
'<pattern id="cb'+u+'" width="8" height="10" patternUnits="userSpaceOnUse"><rect width="8" height="10" fill="#19191b"/><rect x="5" width="2" height="10" fill="#26262a"/><rect width="1" height="10" fill="#0c0c0d"/></pattern>'+
'<pattern id="cg'+u+'" width="13" height="10" patternUnits="userSpaceOnUse"><rect width="13" height="10" fill="#64696c"/><rect x="7" width="4" height="10" fill="#767b7e"/><rect width="1.6" height="10" fill="#4a4e51"/></pattern>'+
'<pattern id="cw'+u+'" width="9" height="10" patternUnits="userSpaceOnUse"><rect width="9" height="10" fill="#87593a"/><rect x="3" width="1.2" height="10" fill="#976743"/><rect width="1.4" height="10" fill="#45301d"/></pattern>'+
'<pattern id="wp'+u+'" width="6" height="10" patternUnits="userSpaceOnUse"><rect width="6" height="10" fill="#8f6039"/><rect x="4" width="1.4" height="10" fill="#5a3b22"/></pattern>'+
'<pattern id="dk'+u+'" width="10" height="5" patternUnits="userSpaceOnUse"><rect width="10" height="5" fill="#775434"/><rect y="4" width="10" height="1" fill="#3e2a19"/></pattern>'+
'<pattern id="rp'+u+'" width="6" height="10" patternUnits="userSpaceOnUse"><rect width="6" height="10" fill="#121214"/><rect x="3" width="2" height="10" fill="#222226"/></pattern>'+
'<linearGradient id="gi'+u+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3c088"/><stop offset=".5" stop-color="#c99250"/><stop offset="1" stop-color="#85531f"/></linearGradient>'+
'<linearGradient id="gk'+u+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--gk1,#43304f)"/><stop offset="1" style="stop-color:var(--gk2,#140f18)"/></linearGradient>'+
'<linearGradient id="rf'+u+'" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8fa3d0" stop-opacity=".14"/><stop offset=".45" stop-color="#8fa3d0" stop-opacity=".02"/><stop offset="1" stop-color="#05060c" stop-opacity=".42"/></linearGradient>'+
'<linearGradient id="lc'+u+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0c27c" stop-opacity=".38"/><stop offset="1" stop-color="#f0c27c" stop-opacity="0"/></linearGradient>'+
'<linearGradient id="up'+u+'" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#f0c27c" stop-opacity=".42"/><stop offset="1" stop-color="#f0c27c" stop-opacity="0"/></linearGradient>'+
'<radialGradient id="pl'+u+'"><stop offset="0" stop-color="#f0a850" stop-opacity=".36"/><stop offset="1" stop-color="#f0a850" stop-opacity="0"/></radialGradient>'+
'<radialGradient id="sh'+u+'"><stop offset="0" stop-color="#000" stop-opacity=".65"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>'+
'<linearGradient id="ao'+u+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".16"/><stop offset=".14" stop-color="#000" stop-opacity="0"/><stop offset=".72" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".34"/></linearGradient>'+
'<linearGradient id="es'+u+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".4"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>'+
'</defs>',
/* vidrio: capa oscura con reflejo del cielo + capa cálida que se "prende" (.gl) · m = parantes verticales, hz = travesaños horizontales, pd = colgantes (fracciones) */
glass=function(a,b,w,h,m,hz,pd){var s='<g class="wb">'+r(a,b,w,h,'url(#gk'+u+')',' stroke="#070707" stroke-width="3"')+'</g><g class="gl">'+r(a+1.5,b+1.5,w-3,h-3,'url(#gi'+u+')')+r(a+1.5,b+h*.8,w-3,h*.2-1.5,'rgba(70,32,10,.5)');
 (pd||[]).forEach(function(p){var cx=a+w*p;s+=ln(cx,b+1.5,cx,b+h*.2,'#2a180b',1)+pa('M'+n(cx-4.5)+' '+n(b+h*.2+5)+'Q'+n(cx)+' '+n(b+h*.2-3)+' '+n(cx+4.5)+' '+n(b+h*.2+5)+'Z','#2b190c')});
 s+=pa('M'+n(a+w*.58)+' '+n(b+2)+'H'+n(a+w*.86)+'L'+n(a+w*.4)+' '+n(b+h-2)+'H'+n(a+w*.12)+'Z','rgba(255,255,255,.04)')+'</g>';
 s+=r(a+1.5,b+1.5,w-3,4,'rgba(0,0,0,.38)')+r(a-1.5,b+h,w+3,2,'#0b0b0c')+r(a-1.5,b+h,w+3,.7,'rgba(255,255,255,.08)');
 (m||[]).forEach(function(p){s+=ln(a+w*p,b,a+w*p,b+h,'#070707',2.6)+(w>14?r(a+w*p+2.2,b+h*.46,1.4,9,'rgba(205,195,175,.5)'):'')});
 (hz||[]).forEach(function(p){s+=ln(a,b+h*p,a+w,b+h*p,'#070707',2.2)});
 return s},
sconce=function(cx,cy){return'<g class="lm">'+r(cx-2.2,cy,4.4,7,'#0a0a0a')+r(cx-1.4,cy+6,2.8,1.8,'#e8cf98')+'</g><g class="lh">'+pa('M'+(cx-2)+' '+(cy+8)+'L'+(cx-11)+' '+(cy+36)+'H'+(cx+11)+'L'+(cx+2)+' '+(cy+8)+'Z','url(#lc'+u+')')+pa('M'+(cx-2)+' '+cy+'L'+(cx-9)+' '+(cy-20)+'H'+(cx+9)+'L'+(cx+2)+' '+cy+'Z','url(#up'+u+')')+'<circle cx="'+cx+'" cy="'+(cy+8)+'" r="8" fill="rgba(255,190,90,.1)"/></g>'},
pool=function(cx,w,yy){return'<g class="lh">'+el(cx,yy||y+11,w,10,'url(#pl'+u+')')+'</g>'},
body=function(a,b,w,h,f){return r(a,b,w,h,f)+r(a,b,w,h,RF)+r(a,b,w,h,'url(#ao'+u+')')+r(a,b,w,8,'url(#es'+u+')')+r(a,b,1.4,h,'rgba(165,185,235,.16)')},
capR=function(a,b,c,hh){return r(a-3,t-(hh||5),b-a+6,(hh||5)+1,c||'#0b0b0c')+r(a-3,t-(hh||5),b-a+6,1.2,'rgba(165,185,235,.2)')},
wood=function(a,b,w,h,glow){return r(a,b,w,h,'url(#wp'+u+')')+r(a,b,w,h,RF)+r(a,b,w,h,'url(#ao'+u+')')+(glow?'<g class="lh">'+r(a,b+h-16,w,16,'url(#up'+u+')')+'</g>':'')},
door=function(a,b,w,h){return r(a,b,w,h,'#101012',' stroke="#050505" stroke-width="2.4"')+r(a,b,w,h,RF)+r(a+w*.78,b+h*.5,1.6,9,'rgba(205,195,175,.45)')},
shadow=el(300+W*.08,y+2,W/2+34,7,'url(#sh'+u+')')+r(x-8,y-1,W+22,5,'rgba(0,0,0,.35)',' opacity=".7"'),
deck=function(a,b,dp){if(!gd)return'';var a1=a-10,b1=b+14,fy=y+dp,d='M'+n(a)+' '+y+'H'+n(b)+'L'+n(b1)+' '+fy+'H'+n(a1)+'Z';
 return el((a+b)/2,fy+6,(b-a)/2+36,8,'url(#sh'+u+')')+pa(d,'url(#dk'+u+')')+pa(d,RF)+r(a1,fy,b1-a1,5,'#573822')+r(a1,fy,b1-a1,1,'rgba(165,185,235,.16)')+r(a1+3,fy+5,b1-a1-6,3,'rgba(0,0,0,.45)')},
sofa=function(a,b,w,c,fo){if(cl||(!gd&&!fo))return'';return r(a,b-14,w,9,c,' rx="2"')+r(a+1,b-8,w-2,7,c,' rx="1.5"')+r(a-2,b-9,5,9,c,' rx="2"')+r(a+w-3,b-9,5,9,c,' rx="2"')+r(a-2,b-14,w+4,16,RF,' rx="2"')+r(a,b-1,w,2.5,'#0b0b0b',' opacity=".55"')},
pot=function(cx,b,h,c){if(cl)return'';return r(cx-5,b-9,10,9,c||'#b9a68a',' rx="1.5"')+el(cx,b-h*.55-8,h*.3+3,h*.55,'#25301d')+el(cx-2,b-h*.6-9,h*.17+2,h*.4,'#34432a')},
flame=function(cx,b){return'<g class="lh">'+el(cx,b-6,22,14,'url(#pl'+u+')')+'</g>'+pa('M'+(cx-5)+' '+b+'Q'+(cx-6)+' '+(b-7)+' '+cx+' '+(b-15)+'Q'+(cx+6)+' '+(b-7)+' '+(cx+5)+' '+b+'Z','#ff8f2e')+pa('M'+(cx-2.6)+' '+b+'Q'+(cx-3)+' '+(b-5)+' '+cx+' '+(b-10)+'Q'+(cx+3)+' '+(b-5)+' '+(cx+2.6)+' '+b+'Z','#ffe08a')},
posts=function(xs,top,bot,w,fo){if(!gp&&!fo)return'';return xs.map(function(px){return r(px-(w||3.6)/2,top,w||3.6,bot-top,'#0a0a0a')+r(px-(w||3.6)/2,top,1,bot-top,'rgba(165,185,235,.22)')}).join('')},
slats=function(a,b,yt,hh,c){if(!gp)return'';var i,s=r(a,yt,b-a,hh,c)+r(a,yt,b-a,1.2,'rgba(165,185,235,.2)');for(i=a+5;i<b;i+=6)s+=ln(i,yt,i,yt+hh,'rgba(40,18,6,.6)',1);return s+r(a,yt+hh-1.4,b-a,1.6,'rgba(0,0,0,.4)')},
/* vegetación */
blade=function(bx,by,h,c){var lean=(rn()-.5)*h*.7;return'<path d="M'+n(bx)+' '+n(by)+'Q'+n(bx+lean*.2)+' '+n(by-h*.6)+' '+n(bx+lean)+' '+n(by-h)+'" fill="none" stroke="'+c+'" stroke-width="'+n(1+rn()*.8)+'" stroke-linecap="round"/>'},
tuft=function(cx,by,h,plume){var s='',i,cs=['#26301d','#38452a','#4b5a33','#1d2616'];for(i=0;i<11;i++)s+=blade(cx+(rn()-.5)*h*.6,by,h*(.5+rn()*.6),cs[i%4]);
 if(plume)for(i=0;i<4;i++){var px=cx+(rn()-.5)*h*.9,ph=h*(1.1+rn()*.5),pl=px+(rn()-.5)*h*.5;s+='<path d="M'+n(px)+' '+n(by)+'Q'+n(px)+' '+n(by-ph*.6)+' '+n(pl)+' '+n(by-ph)+'" fill="none" stroke="#6b6a4a" stroke-width="1"/>'+'<ellipse cx="'+n(pl)+'" cy="'+n(by-ph-5)+'" rx="3.2" ry="9" fill="#b9a98a" opacity=".9" transform="rotate('+n((pl-px)*2)+' '+n(pl)+' '+n(by-ph)+')"/>'}
 return s},
shrub=function(cx,by,w,h){return el(cx,by-h*.35,w,h*.55,'#151d12')+el(cx+w*.25,by-h*.62,w*.7,h*.5,'#1d2817')+el(cx-w*.2,by-h*.78,w*.5,h*.34,'#2a3a20')},
back='',front='',m,xl=x+E[0]*W,xr=x+E[1]*W;
sd=k.length*131+k.charCodeAt(k.length-1)*7919+1;
if(veg){back=shrub(xl-8,y+1,24,22)+shrub(xr+8,y+1,26,24);
 front=tuft(xl-26,y+12,22,veg>1)+tuft(xl-6,y+dm+2,13,0)+tuft(xr+26,y+13,24,veg>1)+tuft(xr+6,y+dm+3,14,0);
 for(m=0;m<5;m++)front+=tuft(xl+(xr-xl)*(.1+m*.2)+rn()*20,y+dm+5,7+rn()*4,0)}
var A={
/* C15 · 3 tramos: testero con ventana vertical, muro de tablas con 1 aplique, vidriado de 4 paños, muro de tablas con 1 aplique. Pérgola con listones de madera */
c15:function(){var e=W*.12,gx=x+W*.27,gw=W*.54,dp=15,yt=t-16,px=[x+W*.27,x+W*1.15];
 return body(x,t,W,86,'url(#cb'+u+')')+r(x-e,t,e,86,'#121214')+r(x-e,t,e,86,RF)+r(x-e,t,e,86,'url(#ao'+u+')')+capR(x-e,x+W)+
 glass(x-e*.62,t+14,6.5,58,[])+glass(gx,t+8,gw,72,[.265,.42,.7])+sconce(x+W*.082,t+10)+sconce(x+W*.912,t+20)+
 deck(x-W*.1,x+W*1.3,dp)+pool(x+W*.54,gw*.8)+sofa(x+W*.05,y+12,44,'#8d8d91')+sofa(x+W*1.02,y+11,32,'#7f7f84')+
 slats(x-W*.04,x+W*1.2,yt,13,'#9b5a2e')+(gp?r(x-W*.04-2,t-3,W*1.24+4,5,'#0a0a0a'):'')+posts(px,t-3,y+dp)},
/* C30 · testero con ventana angosta · 2 puertas vidriadas (2 hojas × 2 paños) · muro con 1 aplique · ventanal corredizo de 2 paños con 2 colgantes · puerta en el testero derecho · pérgola sobre deck escalonado */
c30:function(){var dp=14,yt=t-14;
 return body(x,t,W,86,'url(#cb'+u+')')+capR(x,x+W)+
 glass(x+W*.022,t+14,W*.027,66,[])+glass(x+W*.37,t+6,W*.128,76,[.5],[.5])+sconce(x+W*.53,t+34)+glass(x+W*.568,t+5,W*.206,78,[.48],[],[.6,.72])+r(x+W*.972,t+14,W*.015,62,'#070707')+
 deck(x-W*.1,x+W*.5,dp+9)+deck(x-W*.01,x+W*.86,dp)+pool(x+W*.66,W*.3)+sofa(x+W*.08,y+11,42,'#c9c5bb')+
 posts([x+W*.11,x+W*.61],t-2,y+dp)+slats(x+W*.09,x+W*.8,yt,12,'#8a5a38')+(gp?r(x+W*.09-2,t-2,W*.71+4,4,'#0a0a0a'):'')},
/* C30 Terra · 2 niveles: puerta vidriada · panel de madera · ventanal de 2 paños · panel de madera · puerta vidriada · terraza con baranda, pérgola de lamas y escalera lateral */
c30t:function(){var dp=13,s,i,fl=t-7,ty=t-87,hy=t-31,sx=x-W*.17,bx=x-W*.05,n0=11;
 s=body(x,t,W,86,'url(#cb'+u+')')+wood(x-W*.05,t,W*.05,86)+
 glass(x+W*.094,t+17,W*.08,60,[])+wood(x+W*.33,t,W*.064,66,1)+glass(x+W*.446,t+16,W*.197,54,[.5],[],[.3,.7])+wood(x+W*.754,t,W*.054,64,1)+glass(x+W*.85,t+16,W*.05,45,[]);
 s+=r(x-W*.2,fl,W*1.18,8,'#0b0b0c')+r(x-W*.2,fl,W*1.18,1.2,'rgba(165,185,235,.2)');
 s+=r(x-W*.2,hy,W*1.18,2.4,'#0a0a0a')+r(x-W*.2,hy+8,W*1.18,1.1,'#0a0a0a')+r(x-W*.2,hy+16,W*1.18,1.1,'#0a0a0a');
 for(i=x-W*.2;i<=x+W*.98;i+=W*.06)s+=r(i,hy,1.2,fl-hy,'#0a0a0a');
 s+=sofa(x+W*.2,fl,W*.3,'#8f8c87',1)+(cl?'':'<circle cx="'+n(x+W*.33)+'" cy="'+n(fl-29)+'" r="3.4" fill="#2a1c14"/><rect x="'+n(x+W*.33-4)+'" y="'+n(fl-25)+'" width="8" height="11" rx="3" fill="#a3524a"/><circle cx="'+n(x+W*.4)+'" cy="'+n(fl-29)+'" r="3.4" fill="#241a14"/><rect x="'+n(x+W*.4-4)+'" y="'+n(fl-25)+'" width="8" height="11" rx="3" fill="#4d6a72"/>')+
 pot(x+W*.07,fl,32,'#7d6f5c')+pot(x+W*.65,fl,28,'#7d6f5c')+pot(x+W*.76,fl,30,'#7d6f5c');
 if(gp){s+=r(x-W*.07,ty,W*.77,5,'#0a0a0a')+r(x-W*.07,ty+5,W*.77,5,'#1c1c1f');for(i=x-W*.06;i<x+W*.69;i+=4)s+=ln(i,ty+5,i,ty+10,'#08080a',1);
 s+=posts([x-W*.06,x+W*.58],ty,fl,2.4)+posts([x+W*.007,x+W*.69],ty,fl,3.6)}
 var tl=x-W*.19,sw=25,ld=17,top=fl+7,H=y-top,N=12,q2;s+=r(tl-6,fl-1,sw+12,3,'#8a5a36')+r(tl-6,fl-1,sw+12,.9,'rgba(255,225,170,.35)');for(i=1;i<=N;i++){q2=i/(N+1);s+=r(tl+ld*q2,top+H*q2,sw,2.6,'#8f5f38')+r(tl+ld*q2,top+H*q2,sw,.8,'rgba(255,225,170,.4)')+r(tl+ld*q2,top+H*q2+2.6,sw,1.6,'rgba(0,0,0,.45)')}s+=ln(tl,top,tl+ld,y,'#0a0a0a',2.6)+ln(tl+sw,top,tl+sw+ld,y,'#0a0a0a',2.6)+r(tl-5,top,2.6,y-top,'#0a0a0a')+r(tl-5,top,.8,y-top,'rgba(165,185,235,.25)')+ln(tl-1,fl-25,tl+ld-1,y-25,'#0a0a0a',1.6)+ln(tl-1,fl-12,tl+ld-1,y-12,'#0a0a0a',.9)+ln(tl+sw+1,fl-25,tl+sw+ld+1,y-25,'#0a0a0a',1.4);for(i=0;i<=N;i+=2){q2=i/(N+1);s+=ln(tl+ld*q2-1,top+H*q2,tl+ld*q2-1,fl-25+(y-fl)*q2,'#0a0a0a',1)}s+=el(tl+ld+sw/2,y+2,22,3,'rgba(0,0,0,.4)')+(cl?'':'<g class="lh">'+el(tl+sw+ld+8,y-5,11,9,'url(#pl'+u+')')+'</g>'+r(tl+sw+ld+6,y-9,4,8,'#f6dca2')+r(tl+sw+ld+5.5,y-10,5,1.4,'#17171a'));
 return s+deck(x+W*.3,x+W*1.12,dp)+pool(x+W*.54,W*.28)},
/* C36 · testero izq. con puerta ciega y aplique · pórtico negro con luces en guirnalda · panel de madera · ventanal de 2 paños · muro con aplique · ventanal de 2 paños con 2 colgantes · panel de madera con aplique · testero der. con ventana de 2 paños */
c36:function(){var s,i,j,yt=t-9,px=[x+W*.205,x+W*.833];
 s=body(x,t,W,86,'url(#cb'+u+')')+capR(x,x+W)+
 door(x+W*.022,t+15,W*.061,70)+sconce(x+W*.138,t+28)+
 wood(x+W*.213,t+4,W*.115,82)+glass(x+W*.332,t+15,W*.154,70,[.5])+sconce(x+W*.53,t+27)+glass(x+W*.573,t+15,W*.15,70,[.49],[],[.14,.4])+wood(x+W*.73,t+4,W*.13,82)+sconce(x+W*.8,t+27)+glass(x+W*.905,t+15,W*.055,62,[],[.59]);
 s+=deck(x-W*.1,x+W*1.1,30)+deck(x+W*.166,x+W*.885,20)+pool(x+W*.5,W*.3)+
 slats(x+W*.2,x+W*.84,t-4,12,'#7a4a28')+(gp?r(x+W*.2-3,yt-1,W*.64+6,5,'#0a0a0a'):'')+posts(px,yt,y+20,4.3)+'<g class="lm">';
 for(j=0;gp&&j<3;j++)for(i=x+W*.215;i<x+W*.83;i+=5.4)s+='<circle cx="'+n(i+(j%2)*2.7)+'" cy="'+n(t-1+j*4.2)+'" r="1.4" fill="#e8c98c"/>';
 return s+'</g>'+(gp?'<g class="lh">'+r(x+W*.21,t+8,W*.62,26,'url(#lc'+u+')')+'</g>':'')},
/* C45 · módulo izq. con galería (techo bajo, 2 postes): ventana de 2 paños (el derecho con travesaño) · panel de madera con tira LED · muro · módulo der.: puerta de madera + ventana de 2 paños · techos de chapa */
c45:function(){var dp=17,s,i,yb=t+2;
 s=body(x+W*.0,t-8,W*.62,94,'url(#cb'+u+')')+body(x+W*.62,t+2,W*.38,84,'url(#cb'+u+')')+
 r(x-W*.01,t-22,W*.64,12,'url(#rp'+u+')')+r(x-W*.01,t-22,W*.64,1.2,'rgba(165,185,235,.2)')+r(x+W*.61,t-4,W*.39+3,7,'url(#rp'+u+')')+r(x+W*.61,t-4,W*.39+3,1.2,'rgba(165,185,235,.2)')+
 glass(x+W*.128,t+14,W*.107,62,[])+glass(x+W*.239,t+14,W*.111,62,[],[.45])+wood(x+W*.355,t+14,W*.145,72,1)+
 '<rect x="'+n(x+W*.7)+'" y="'+n(t+16)+'" width="'+n(W*.125)+'" height="'+n(70)+'" fill="url(#wp'+u+')" stroke="#0a0a0a" stroke-width="2.6"/>'+r(x+W*.7,t+16,W*.125,70,RF)+ln(x+W*.805,t+50,x+W*.805,t+62,'#c9b98f',1.6)+glass(x+W*.828,t+18,W*.04,66,[],[.55])+
 deck(x-W*.06,x+W*.62,dp)+pool(x+W*.3,W*.3)+sofa(x+W*.1,y+13,40,'#9fa6ab')+
 (gp?r(x-W*.01,t+3,W*.66,6,'url(#rp'+u+')')+r(x-W*.01,t+3,W*.66,1.2,'rgba(165,185,235,.2)'):'')+posts([x,x+W*.526],t+9,y+dp,3.6)+'<g class="lm">'+r(x+W*.355,y-7,W*.25,2.2,'rgba(240,200,130,.55)')+'</g>';
 return s},
/* C60 · 1 contenedor gris: puerta vidriada (2 paños) · aplique · ventanal de 2 paños · aplique · puerta vidriada angosta (2 paños) */
c60:function(){var dp=17,i,s;
 s=body(x,t,W,86,'url(#cg'+u+')')+r(x-3,t-5,W+6,6,'#43474a')+r(x-3,t-5,W+6,1.2,'rgba(165,185,235,.22)')+r(x,t,W*.02,86,'rgba(40,42,44,.5)')+r(x+W*.98,t,W*.02,86,'rgba(40,42,44,.5)')+
 glass(x+W*.082,t+17,W*.118,66,[],[.5])+sconce(x+W*.448,t+28)+glass(x+W*.465,t+17,W*.217,66,[.5])+sconce(x+W*.71,t+30)+glass(x+W*.86,t+17,W*.068,66,[],[.5])+
 deck(x-W*.05,x+W*1.1,dp)+pool(x+W*.57,W*.2)+pot(x+W*.04,y+8,22,'#a1633a')+pot(x+W*.075,y+8,18,'#b89a73')+pot(x+W*.78,y+8,22,'#4a4a4c');
 return s},
/* C90 · fachada larga de listones de madera: ventana angosta · ventana de 3 paños · aplique · puerta · aplique · ventanal de 3 paños · esquina negra · cubierta plana con cargadero oscuro */
c90:function(){var dp=28,s;
 s=body(x,t,W,86,'url(#cw'+u+')')+r(x-3,t-9,W+6,10,'#0e0e10')+r(x-3,t-9,W+6,1.2,'rgba(165,185,235,.22)')+r(x,y-5,W,5,'#101012')+r(x+W*.97,t,W*.03,86,'#0c0c0d')+r(x,t,W*.012,86,'#0c0c0d')+
 glass(x+W*.047,t+14,W*.046,68,[])+glass(x+W*.175,t+14,W*.135,68,[.33,.66])+sconce(x+W*.417,t+30)+glass(x+W*.443,t+14,W*.077,68,[])+sconce(x+W*.53,t+32)+glass(x+W*.635,t+14,W*.195,70,[.33,.66]);
 s+=deck(x-W*.12,x+W*.18,dp)+deck(x-W*.05,x+W*1.15,20)+pool(x+W*.73,W*.2)+pool(x+W*.15,W*.12);
 return s}};
return'<g transform="translate('+n((.5-(E[0]+E[1])/2)*W)+' 0)">'+defs+shadow+back+A[k]()+front+'</g>'};
/* ===== fondo "atardecer serrano": cielo degradado, sol, sierras con neblina, árboles y pasto (carrusel y configurador) ===== */
window.duskArt=function(x0,vw,q,H){var x1=x0+vw,gT=238,sd=9,rn=function(){sd=sd*16807%2147483647;return sd/2147483647},n=function(v){return Math.round(v*10)/10},i,x,s,
st=function(o,c,a){return'<stop offset="'+o+'" stop-color="'+c+'"'+(a==null?'':' stop-opacity="'+a+'"')+'/>'},
ridge=function(b,a,ph,f1,f2,f){var d='M'+(x0-10)+' '+(gT+6);for(x=x0-10;x<=x1+10;x+=9)d+='L'+n(x)+' '+n(gT-b-a*(.5+.32*Math.sin(x/f1+ph)+.18*Math.sin(x/f2+ph*2.1)));return'<path d="'+d+'L'+(x1+10)+' '+(gT+6)+'Z" fill="'+f+'"/>'},
tree=function(cx,h,c1,c2){var b=gT+4,r=h*.34;return'<rect x="'+n(cx-1.3)+'" y="'+n(b-h*.5)+'" width="2.6" height="'+n(h*.5)+'" fill="'+c1+'"/><ellipse cx="'+n(cx)+'" cy="'+n(b-h*.66)+'" rx="'+n(r*1.15)+'" ry="'+n(r)+'" fill="'+c1+'"/><ellipse cx="'+n(cx-r*.45)+'" cy="'+n(b-h*.8)+'" rx="'+n(r*.7)+'" ry="'+n(r*.6)+'" fill="'+c2+'"/>'},
sx=x0+vw*.14;
s='<defs><linearGradient id="dsk'+q+'" gradientUnits="userSpaceOnUse" x1="0" y1="60" x2="0" y2="'+gT+'">'+st(0,'#171d40')+st(.32,'#3a3669')+st(.55,'#8a5273')+st(.76,'#e0825c')+st(.92,'#ffbf78')+st(1,'#ffe1aa')+'</linearGradient>'+
'<radialGradient id="dsn'+q+'">'+st(0,'#fff0c4',.95)+st(.3,'#ffc274',.5)+st(1,'#ff9a5a',0)+'</radialGradient>'+
'<linearGradient id="dhz'+q+'" gradientUnits="userSpaceOnUse" x1="0" y1="'+(gT-90)+'" x2="0" y2="'+(gT+4)+'">'+st(0,'#ffb46a',0)+st(1,'#ffc47e',.62)+'</linearGradient>'+
'<linearGradient id="dgr'+q+'" gradientUnits="userSpaceOnUse" x1="0" y1="'+gT+'" x2="0" y2="'+H+'">'+st(0,'#566330')+st(.2,'#3b4a22')+st(.65,'#222f15')+st(1,'#121a0c')+'</linearGradient>'+
'<linearGradient id="drm'+q+'" x1="0" y1="0" x2="0" y2="1">'+st(0,'#ffcf86',.55)+st(1,'#ffcf86',0)+'</linearGradient></defs>';
s+='<rect x="'+(x0-10)+'" y="40" width="'+(vw+20)+'" height="'+(gT-38)+'" fill="url(#dsk'+q+')"/>';
for(i=0;i<vw/9;i++)s+='<circle cx="'+n(x0+rn()*vw)+'" cy="'+n(62+rn()*58)+'" r="'+n(.4+rn()*.7)+'" fill="#fff" opacity="'+n(.25+rn()*.5)+'"/>';
s+='<circle cx="'+n(sx)+'" cy="'+(gT-18)+'" r="150" fill="url(#dsn'+q+')"/><circle cx="'+n(sx)+'" cy="'+(gT-24)+'" r="15" fill="#fff4d2"/>';
for(i=0;i<vw/120+2;i++){var cx=x0+rn()*vw,cy=104+rn()*62,rx=60+rn()*110;s+='<ellipse cx="'+n(cx)+'" cy="'+n(cy)+'" rx="'+n(rx)+'" ry="'+n(4+rn()*6)+'" fill="#ffae86" opacity=".2"/><ellipse cx="'+n(cx+rx*.2)+'" cy="'+n(cy+7)+'" rx="'+n(rx*.7)+'" ry="3.2" fill="#c8a0dc" opacity=".16"/>'}
s+=ridge(46,50,1.1,170,61,'#8c6a93')+'<rect x="'+(x0-10)+'" y="'+(gT-90)+'" width="'+(vw+20)+'" height="96" fill="url(#dhz'+q+')"/>'+ridge(22,34,3.4,120,47,'#5e4a7a')+ridge(8,16,5.7,90,33,'#3c3b5a');
for(x=x0-20;x<x1+30;x+=34+rn()*50)s+=tree(x,16+rn()*16,'#2c3148','#4c4d68');
for(x=x0+rn()*80;x<x1+30;x+=95+rn()*150)s+=tree(x,34+rn()*26,'#1d2a28','#3a5139');
s+='<rect x="'+(x0-10)+'" y="'+gT+'" width="'+(vw+20)+'" height="'+(H-gT+4)+'" fill="url(#dgr'+q+')"/><rect x="'+(x0-10)+'" y="'+gT+'" width="'+(vw+20)+'" height="16" fill="url(#drm'+q+')"/>';
var b1='',b2='',by,bh,bx;for(i=0;i<vw/3.2;i++){bx=x0+rn()*vw;by=gT+8+rn()*(H-gT-8);bh=3+rn()*(4+(by-gT)*.11);var bd='M'+n(bx)+' '+n(by)+'l'+n((rn()-.5)*3)+' -'+n(bh);if(i%3)b1+=bd;else b2+=bd}
s+='<path d="'+b1+'" stroke="#6f7f3a" stroke-width="1" stroke-linecap="round" fill="none" opacity=".75"/><path d="'+b2+'" stroke="#a9a25a" stroke-width="1" stroke-linecap="round" fill="none" opacity=".6"/>';
for(x=x0+40+rn()*60;x<x1-10;x+=130+rn()*160){var ph=18+rn()*10,py=H-14-rn()*24;for(i=0;i<3;i++){var px=x+(i-1)*7+rn()*4,pt=py-ph*(.8+rn()*.5),pl=px+(rn()-.5)*9;s+='<path d="M'+n(px)+' '+n(py)+'Q'+n(px)+' '+n(py-ph*.6)+' '+n(pl)+' '+n(pt)+'" stroke="#8a8450" stroke-width="1" fill="none"/><ellipse cx="'+n(pl)+'" cy="'+n(pt-4)+'" rx="2.6" ry="8" fill="#efdcae" opacity=".9" transform="rotate('+n((pl-px)*3)+' '+n(pl)+' '+n(pt)+')"/>'}}
return s};
/* ===== pulido de las casitas: vidrio más cálido + los elementos de cada foto (fogón, reposeras, sillas, parrilla, balizas) ===== */
(function(){var o0=window.modelArt,f=function(v){return Math.round(v*10)/10},
R=function(a,b,w,h,c,e){return'<rect x="'+f(a)+'" y="'+f(b)+'" width="'+f(w)+'" height="'+f(h)+'" fill="'+c+'"'+(e||'')+'/>'},
E=function(a,b,rx,ry,c){return'<ellipse cx="'+f(a)+'" cy="'+f(b)+'" rx="'+f(rx)+'" ry="'+f(ry)+'" fill="'+c+'"/>'},
P=function(d,c){return'<path d="'+d+'" fill="'+c+'"/>'},
bol=function(cx,b,u){return R(cx-1.3,b-13,2.6,13,'#17171a')+R(cx-2.8,b-17,5.6,4.5,'#f6dca2')+'<g class="lh">'+E(cx,b-14,12,11,'url(#pl'+u+')')+'</g>'},
plt=function(cx,b){return R(cx-6,b-10,12,10,'#2a2a2d',' rx="1.5"')+E(cx,b-14,9,7,'#1d2817')+E(cx+3,b-18,6,5.5,'#2f4423')+E(cx-4,b-17,5,5,'#3c5a2b')},
lg=function(cx,b,w,c){return R(cx-w/2,b-10,w,6,c,' rx="2.4"')+R(cx-w/2+1,b-17,w-2,8,c,' rx="2.4"')+R(cx-w/2,b-10,w,1.2,'rgba(255,255,255,.28)')+R(cx-w/2+2,b-4,2,4,'#222')+R(cx+w/2-4,b-4,2,4,'#222')},
adi=function(cx,b){return P('M'+(cx-7)+' '+(b-8)+'L'+(cx-6)+' '+(b-22)+'H'+(cx+6)+'L'+(cx+7)+' '+(b-8)+'Z','#d3a96f')+R(cx-9,b-13,18,2.2,'#b88a52')+R(cx-8,b-9,16,3,'#a67845')+R(cx-7,b-6,2,6,'#8a6236')+R(cx+5,b-6,2,6,'#8a6236')+R(cx-3,b-21,.9,12,'rgba(60,35,10,.45)')+R(cx+2,b-21,.9,12,'rgba(60,35,10,.45)')},
fire=function(cx,b,w,u,fl){return'<g class="lh">'+E(cx,b-7,w*2.3,w*1.1,'url(#pl'+u+')')+'</g>'+E(cx,b,w,w*.3,'#5c3320')+E(cx,b-.8,w*.82,w*.22,'#170d08')+(fl?P('M'+(cx-5)+' '+(b-.5)+'Q'+(cx-7)+' '+(b-8)+' '+cx+' '+(b-17)+'Q'+(cx+7)+' '+(b-8)+' '+(cx+5)+' '+(b-.5)+'Z','#ff8f2e')+P('M'+(cx-2.6)+' '+(b-.5)+'Q'+(cx-3)+' '+(b-5)+' '+cx+' '+(b-11)+'Q'+(cx+3)+' '+(b-5)+' '+(cx+2.6)+' '+(b-.5)+'Z','#ffe08a'):'')},
logs=function(cx,b){return R(cx-9,b-5,18,5,'#6b4a2c',' rx="1.5"')+R(cx-7,b-10,14,5,'#7b5733',' rx="1.5"')+E(cx-9,b-2.5,1.8,2.5,'#c89c62')+E(cx-7,b-7.5,1.8,2.5,'#d2a66d')},
bbq=function(cx,b){return R(cx-13,b-19,26,3,'#111')+R(cx-12,b-16,2,16,'#111')+R(cx+10,b-16,2,16,'#111')+P('M'+(cx-13)+' '+(b-19)+'Q'+cx+' '+(b-32)+' '+(cx+13)+' '+(b-19)+'Z','#1b1b1d')+'<g class="lm">'+R(cx-9,b-18,18,2,'#ff8f2e')+'</g>'+R(cx-9,b-8,18,4,'#6b4a2c')},
isl=function(cx,b){return R(cx-31,b-22,62,22,'#b8b2a6')+R(cx-24,b-19,22,17,'#8a5a38')+R(cx+4,b-19,22,17,'#8a5a38')+R(cx-33,b-25,66,3.4,'#2a2a2c')+R(cx-27,b-35,24,10,'#bcc0c4')+R(cx-27,b-35,24,1.4,'rgba(255,255,255,.4)')+'<g class="lm">'+R(cx-22,b-30,14,2,'#ffb35a')+'</g>'},
pam=function(cx,b,h){var s='',i;for(i=0;i<3;i++){var px=cx+(i-1)*6,pl=px+(i-1)*5;s+='<path d="M'+f(px)+' '+b+'Q'+f(px)+' '+f(b-h*.6)+' '+f(pl)+' '+f(b-h)+'" stroke="#8a8450" stroke-width="1" fill="none"/><ellipse cx="'+f(pl)+'" cy="'+f(b-h-4)+'" rx="2.8" ry="8.5" fill="#efdcae" opacity=".92" transform="rotate('+f((pl-px)*3)+' '+f(pl)+' '+f(b-h)+')"/>'}return s},
y=250,PR={
c15:function(x,W,u){return lg(x+W*.9,y+12,28,'#7c7d85')+plt(x+W*1.27,y+9)+bol(x-W*.1,y+21,u)},
c30:function(x,W,u){return plt(x+W*.9,y+10)+bol(x+W*1.0,y+22,u)+bol(x-W*.1,y+29,u)+pam(x-W*.14,y+30,24)},
c30t:function(x,W,u){return bol(x+W*1.04,y+17,u)+bol(x+W*.28,y+22,u)+pam(x-W*.3,y+26,24)},
c36:function(x,W,u){return bbq(x-W*.08,y+28)+lg(x+W*.94,y+17,26,'#ebe6da')+lg(x+W*1.04,y+24,28,'#ebe6da')+pam(x+W*1.12,y+30,22)},
c45:function(x,W,u){return bol(x+W*.62,y+32,u)+bol(x+W*.88,y+27,u)+bol(x+W*1.0,y+21,u)+pam(x+W*.74,y+25,26)+pam(x-W*.08,y+24,22)},
c60:function(x,W,u){return pam(x-W*.05,y+30,24)+adi(x+W*.3,y+33)+fire(x+W*.5,y+33,15,u,0)+logs(x+W*.66,y+33)+plt(x+W*1.08,y+12)},
c90:function(x,W,u){return bol(x-W*.07,y+30,u)+adi(x+W*.54,y+27)+fire(x+W*.7,y+30,14,u,1)+adi(x+W*.86,y+27)+isl(x+W*1.06,y+20)}};
window.modelArt=function(k,W,id,veg,ex){var s=o0(k,W,id,veg,ex);s=s.split('#e3c088').join('#ffdba3').split('#c99250').join('#eaa45c').split('#85531f').join('#8f4c1f');
if(ex&&ex.clean)return s;return s.slice(0,-4)+(PR[k]?PR[k](300-W/2,W,id):'')+'</g>'}})();
/* proceso en vivo: la misma casa (C36) recorre las 6 etapas: terreno → plano → estructura → fábrica → obra en sitio → entrega */
window.GOLD={h:'#eec062',r1:'#e3ad4b',r2:'#d49c3c',r3:'#be8731',r4:'#a47220',b:'#7a5016',hz:'#fff1c9',hzo:.5,g:['#bd8827','#a8751b','#915f15','#7b4f10']};
window.procArt=function(){var W=MW.c36,x=300-W/2,y=250,t=164,INK='#3a2606',BL='#24447f',ST='#2b2f3a',OR='#d98a0b',
n=function(v){return Math.round(v*10)/10},
r=function(a,b,w,h,e){return'<rect x="'+n(a)+'" y="'+n(b)+'" width="'+n(w)+'" height="'+n(h)+'" '+e+'/>'},
ln=function(a,b,c,d,e){return'<path d="M'+n(a)+' '+n(b)+'L'+n(c)+' '+n(d)+'" fill="none" '+e+'/>'},
G=function(a,b,c){return'<g class="p" data-min="'+a+'" data-max="'+(b+1)+'">'+c+'</g>'},
chip=function(cx,cy,txt,cls){var w=txt.length*7.4+24;return'<g class="chip'+(cls?' '+cls:'')+'"><rect x="'+n(cx-w/2)+'" y="'+(cy-12)+'" width="'+n(w)+'" height="24" rx="12" fill="#fff8e6" stroke="'+INK+'" stroke-opacity=".35"/><text x="'+cx+'" y="'+(cy+4.5)+'" text-anchor="middle" fill="'+INK+'">'+txt+'</text></g>'},
stakes=ln(96,262,504,262,'stroke="#fff4d6" stroke-width="1.8" stroke-dasharray="6 5"')+[96,x,x+W,504].map(function(px){return r(px-1.2,246,2.6,17,'fill="'+INK+'"')+r(px-4,243,8,5,'fill="#fff4d6" stroke="'+INK+'" stroke-width=".8"')}).join(''),
/* 1 · descubrimiento: terreno vacío, medidas y ubicación */
survey=ln(96,280,504,280,'stroke="#fff4d6" stroke-width="1.4"')+ln(96,274,96,286,'stroke="#fff4d6" stroke-width="1.4"')+ln(504,274,504,286,'stroke="#fff4d6" stroke-width="1.4"')+chip(300,280,'Medidas y accesos')+
'<ellipse class="pulse" cx="300" cy="246" rx="20" ry="5" fill="none" stroke="'+OR+'" stroke-width="1.6"/><path d="M300 246c-16-18-22-30-22-42a22 22 0 0 1 44 0c0 12-6 24-22 42z" fill="'+OR+'" stroke="'+INK+'" stroke-width="1.4"/><circle cx="300" cy="204" r="8" fill="#fff8e6"/>'+chip(300,150,'Tu terreno'),
/* 2 · anteproyecto: el módulo aparece dibujado en plano */
bp='fill="rgba(36,68,127,.07)" stroke="'+BL+'" stroke-width="1.4"',bd='fill="none" stroke="'+BL+'" stroke-width="1.2" stroke-dasharray="4 3"',
plan=r(x,t,W,86,bp)+r(x-3,t-5,W+6,5,bp)+[[.022,.061,15,70],[.332,.154,15,70],[.573,.15,15,70],[.905,.055,15,62]].map(function(a){return r(x+W*a[0],t+a[2],W*a[1],a[3],bp)}).join('')+r(x+W*.213,t+4,W*.115,82,bd)+r(x+W*.73,t+4,W*.13,82,bd)+r(x+W*.2,t-9,W*.64,5,bp)+ln(x+W*.205,t-4,x+W*.205,y+20,bd)+ln(x+W*.833,t-4,x+W*.833,y+20,bd)+
ln(x,t-32,x+W,t-32,'stroke="'+BL+'" stroke-width="1.2"')+ln(x,t-38,x,t-26,'stroke="'+BL+'"')+ln(x+W,t-38,x+W,t-26,'stroke="'+BL+'"')+chip(300,t-32,'Plano · 36 m²'),
/* 3 · técnica: estructura de acero, aislación e instalaciones */
frame='',i,
cx3=function(c){var s='';for(i=0;i<=8;i++)s+=ln(x+W*i/8,t,x+W*i/8,y-3,'stroke="'+c+'" stroke-width="1.8"');return s+ln(x,t,x+W,t,'stroke="'+c+'" stroke-width="3.4"')+ln(x,y-3,x+W,y-3,'stroke="'+c+'" stroke-width="3.4"')+ln(x+W*3/8,t,x+W*4/8,y-3,'stroke="'+c+'" stroke-width="1.6"')+ln(x+W*4/8,t,x+W*5/8,y-3,'stroke="'+c+'" stroke-width="1.6"')+ln(x,t,x+W/8,y-3,'stroke="'+c+'" stroke-width="1.6"')+ln(x+W*7/8,t,x+W,y-3,'stroke="'+c+'" stroke-width="1.6"')},
nodes=[0,1,2,3,4,5,6,7,8].map(function(k){return r(x+W*k/8-3,t-3,6,6,'fill="'+OR+'"')+r(x+W*k/8-3,y-6,6,6,'fill="'+OR+'"')}).join(''),
tech=cx3(ST)+nodes+ln(x,t+42,x+W,t+42,'stroke="'+OR+'" stroke-width="2" stroke-dasharray="7 4"')+[[.125,'Estructura'],[.5,'Aislación'],[.875,'Instalaciones']].map(function(a){return ln(x+W*a[0],t-6,x+W*a[0],124,'stroke="'+INK+'" stroke-opacity=".5" stroke-dasharray="3 3"')+chip(x+W*a[0],112,a[1])}).join(''),
/* 4 · fábrica: el módulo se arma bajo techo, con puente grúa */
shed='<path d="M52 132L300 80L548 132Z" fill="#6a4d26" stroke="'+INK+'" stroke-width="1.4" stroke-linejoin="round"/>'+r(66,128,468,122,'fill="url(#pfl)"')+'<text class="sign" x="300" y="118" text-anchor="middle">FÁBRICA</text>'+ln(76,142,524,142,'stroke="#b9bdc8" stroke-width="3"')+cx3('#e9c27a'),
tro='<g class="tro">'+r(x-15,136,30,12,'fill="#e0a43a" stroke="'+INK+'" stroke-width=".8"')+ln(x,148,x,160,'stroke="#b9bdc8" stroke-width="1.4"')+r(x-4,158,8,6,'fill="#e0a43a"')+'</g>',
phases='<g class="ph ph1">'+chip(140,277,'1 · Estructura')+'</g><g class="ph ph2">'+chip(300,277,'2 · Instalaciones')+'</g><g class="ph ph3">'+chip(462,277,'3 · Terminaciones')+'</g>',
/* 5 · obra en sitio: platea, conexiones y grúa; 6 · montaje */
slab=r(x-W*.1,248,W*1.2,7,'fill="#a39a88" stroke="#5b5446" stroke-width=".8"')+[0,1,2,3,4,5].map(function(j){return r(x-W*.08+j*W*.2,255,5,13,'fill="#5b5040"')}).join('')+'',
crane=r(512,100,7,152,'fill="'+ST+'"')+r(182,96,368,7,'fill="'+ST+'"')+r(498,90,30,12,'fill="#e0a43a" stroke="'+ST+'"')+ln(515,90,330,96,'stroke="'+ST+'" stroke-width="1"')+[0,1,2,3,4,5].map(function(j){return ln(512,110+j*24,519,134+j*24,'stroke="'+ST+'" stroke-width="1"')}).join(''),
conn=ln(x+W*.18,232,x+W*.18,248,'stroke="#2f6fb3" stroke-width="3.2"')+ln(x+W*.82,232,x+W*.82,248,'stroke="'+OR+'" stroke-width="3.2"')+chip(x+W*.18,216,'Agua')+chip(300,216,'Platea')+chip(x+W*.82,216,'Luz')+ln(300,228,300,246,'stroke="'+INK+'" stroke-opacity=".5" stroke-dasharray="3 3"')+chip(300,72,'Accesos y grúa')+ln(300,103,300,126,'stroke="#555" stroke-width="1.2"')+r(296,126,8,8,'fill="'+OR+'"'),
hang='<g clip-path="url(#pcl6)"><g class="drop">'+ln(300,30,300,132,'stroke="#555" stroke-width="1.2"')+'</g></g><g class="drop">'+r(296,130,8,8,'fill="'+OR+'"')+ln(300,138,x+W*.22,t-8,'stroke="#555" stroke-width="1"')+ln(300,138,x+W*.78,t-8,'stroke="#555" stroke-width="1"')+modelArt('c36',W,'pf6',0)+'</g>',
sun='<circle cx="74" cy="112" r="30" fill="rgba(255,247,222,.5)"/><circle cx="74" cy="112" r="13" fill="#fffaf0"/>';
return'<svg class="hs sc" viewBox="40 58 520 240" role="img" aria-label="La misma casa recorre las seis etapas: terreno, plano, estructura, fábrica, obra en sitio y entrega"><defs><linearGradient id="psk" gradientUnits="userSpaceOnUse" x1="0" y1="58" x2="0" y2="250"><stop offset="0" stop-color="#fff4d6"/><stop offset=".55" stop-color="#f9da8c"/><stop offset="1" stop-color="#efb64d"/></linearGradient><linearGradient id="pfl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b4d25"/><stop offset="1" stop-color="#2a1d0c"/></linearGradient><clipPath id="pcl4"><rect class="rev" x="'+(x-8)+'" y="90" width="'+(W+16)+'" height="170"/></clipPath><clipPath id="pcl6"><rect x="0" y="103" width="600" height="300"/></clipPath></defs>'+forestDefs('p',GOLD)+
'<rect x="0" y="0" width="600" height="400" fill="url(#psk)"/>'+sun+'<g class="bgf">'+forestArt(20,560,300,'p',1,GOLD)+'</g>'+
G(1,3,stakes)+G(5,6,stakes)+G(1,1,survey)+G(2,2,plan)+G(3,3,tech)+
G(4,4,shed+'<g clip-path="url(#pcl4)">'+modelArt('c36',W,'pf4',0,{pergola:false,deck:false,clean:1})+'</g>'+tro+phases)+
G(5,6,slab+crane)+G(5,5,conn)+G(6,6,hang+chip(130,160,'Entrega lista ✓'))+'</svg>'};
window.setStage=function(svg,s){svg.classList.toggle('lit',s>=6);for(var i=1;i<=6;i++)svg.classList.toggle('s'+i,i===s);svg.querySelectorAll('.p').forEach(function(g){g.classList.toggle('on',s>=+g.dataset.min&&s<+g.dataset.max)})};
/* header + footer compartidos */
$('#hd').outerHTML='<header class="top"><div class="wrap"><a class="brand" href="index.html" aria-label="Amby House">Amby<b>House</b></a><button class="burger" aria-expanded="false" aria-controls="menu" aria-label="Abrir menú"><i></i><i></i></button><nav id="menu" aria-label="Principal"><a href="index.html#modelos">Modelos</a><a href="proyectos.html">Proyectos</a><a href="proceso.html">Proceso</a><a href="index.html#herramientas">Herramientas</a><a href="index.html#amby">Amby</a><a href="index.html#contacto">Contacto</a><a class="btn s" href="configurador.html">Configurá tu proyecto</a></nav></div></header>';
$('#ft').outerHTML='<footer><div class="wrap ftg"><div class="fb"><a class="brand" href="index.html">Amby<b>House</b></a><p>Construcción modular en contenedores, para quienes valoran el tiempo.</p><a class="btn s" data-ev="footer-configurar" href="configurador.html">Configurá tu proyecto</a></div><div class="fc"><span>Explorá</span><a href="index.html#modelos">Modelos</a><a href="proyectos.html">Proyectos</a><a href="proceso.html">Proceso</a><a href="index.html#contacto">Contacto</a></div><div class="fc"><span>Herramientas</span><a href="configurador.html">Configurador</a><a href="comparar.html">Comparador</a><a href="calculadora.html">Calculadora</a></div><div class="fc ct"><span>Contacto</span><a href="tel:+5493518096768">+54 9 351 809-6768</a><a href="mailto:'+A.mail+'">'+A.mail+'</a><a href="https://www.instagram.com/ambyhouse.arg" target="_blank" rel="noopener">Instagram</a><p>Córdoba Capital, Argentina</p></div><div class="f-bot"><p>© 2026 Amby House. Todos los derechos reservados.</p><a href="#">Volver arriba ↑</a></div></div></footer><a class="wa" data-ev="whatsapp" href="'+U.wa('Hola AmbyHouse, quiero consultar por un modelo')+'" target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>';
var b=$('.burger'),n=$('#menu'),setM=function(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú')};b.onclick=function(){setM(!n.classList.contains('open'))};n.onclick=function(e){if(e.target.closest('a'))setM(false)};addEventListener('click',function(e){if(n.classList.contains('open')&&!n.contains(e.target)&&!b.contains(e.target))setM(false)});addEventListener('keydown',function(e){if(e.key==='Escape')setM(false)});matchMedia('(min-width:1061px)').addEventListener('change',function(e){if(e.matches)setM(false)});
var pr=document.createElement('div');pr.className='prog';document.body.prepend(pr);var t=$('.top');addEventListener('scroll',function(){t.classList.toggle('sc',scrollY>20);pr.style.transform='scaleX('+Math.min(1,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight))+')'},{passive:true});
window.reveal=function(){var r=document.querySelectorAll('.rv:not(.in)');if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});r.forEach(function(x){io.observe(x)})}else r.forEach(function(x){x.classList.add('in')})};
/* escena del proceso: la casa se arma mientras avanzás; encabezado, qué estás viendo y barra de etapas clickeable */
window.scene=function(root){var st=$('.stage',root),ls=$('.sl',root),E=A.etapas,
SH=['Descubrir','Diseño','Técnica','Fábrica','Obra','Entrega'],
CAP=['Terreno vacío: medimos, relevamos accesos y definimos el uso del módulo.','El módulo aparece en plano: distribución, aberturas y terminaciones.','Estructura de acero, aislación e instalaciones: todo queda documentado.','En fábrica el módulo se construye completo, mientras tu terreno se prepara.','En tu terreno: platea y conexiones de agua y luz listas, con acceso para la grúa.','Montaje, nivelación y conexiones: el módulo llega terminado y se enciende.'];
st.innerHTML='<div class="sh"><span class="sk"></span><strong class="sti"></strong></div>'+procArt()+'<p class="sw" aria-live="polite"></p><ol class="sd">'+SH.map(function(s,i){return'<li><button type="button" data-k="'+(i+1)+'" aria-label="Ir a la etapa '+(i+1)+': '+E[i][0]+'"><i>'+(i+1)+'</i><span>'+s+'</span></button></li>'}).join('')+'</ol>';
var sv=$('svg',st),sd=$('.sd',st);
ls.innerHTML=E.map(function(e,i){return'<li data-i="'+(i+1)+'"><b>0'+(i+1)+'</b><div><h3>'+e[0]+'</h3><p>'+e[2]+'</p></div></li>'}).join('');
var go=function(k){[].forEach.call(ls.children,function(l){l.classList.toggle('on',+l.dataset.i===k);l.classList.toggle('done',+l.dataset.i<k)});setStage(sv,k);
[].forEach.call(sd.querySelectorAll('button'),function(b,j){b.classList.toggle('on',j+1===k);b.classList.toggle('done',j+1<k);if(j+1===k)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')});
sd.style.setProperty('--pg',(k-1)/5);$('.sk',st).textContent='Etapa '+k+' de 6';$('.sti',st).textContent=E[k-1][0];$('.sw',st).textContent=CAP[k-1]};go(1);
sd.addEventListener('click',function(e){var b=e.target.closest('button');if(b)ls.children[+b.dataset.k-1].scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'center'})});
if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)go(+e.target.dataset.i)})},{rootMargin:'-42% 0px -42% 0px'});[].forEach.call(ls.children,function(l){io.observe(l)})}else go(6)};
/* hero: fotos de los modelos a pantalla completa, con fundido de una a otra */
var hs=$('#hsv');if(hs){var hero=$('#inicio'),bg=$('#hbg'),pc=$('#hp'),pw=$('#hw'),hc=$('#hc'),cur=0,vis=true,pz=false,RM=matchMedia('(prefers-reduced-motion:reduce)').matches,
HM=matchMedia('(max-width:700px)'),hsrc=function(im,key){var f=function(){var u='img/hero/'+key+(HM.matches?'-mobile':'-pc')+'.webp',t=new Image();t.onload=function(){im.src=u};t.onerror=function(){im.src='img/'+key+'.webp'};t.src=u};f();HM.addEventListener('change',f)},
pic=function(k){var m=A.modelos[k],el=bg.querySelector('[data-k="'+k+'"]');if(el)return el;el=document.createElement('picture');el.className='hp';el.dataset.k=k;el.innerHTML='<img src="img/'+m.k+'.webp" alt="Módulo '+m.id+' de '+m.m2+' m² con '+m.ex+'" width="800" height="622" decoding="async">';bg.insertBefore(el,bg.querySelector('.hshade'));hsrc(el.firstChild,m.k);return el},
show=function(k){var el=pic(k),im=el.firstChild,go=function(){if(cur!==k)return;[].forEach.call(bg.querySelectorAll('.hp'),function(e){e.classList.toggle('on',e===el)})};if(im.complete)go();else im.addEventListener('load',go,{once:true})},
draw=function(k,first){var N=A.modelos.length;k=(k+N)%N;cur=k;var m=A.modelos[k];show(k);if(!first){pic((k+1)%N);pic((k+N-1)%N)}$('#hn').textContent=m.id;$('#hm').innerHTML=m.m2+' m² · '+m.ex+' · Desde <b>'+U.usd(U.from(m))+'</b> <span>+ IVA</span>';$('#hl').href='modelo-'+m.k+'.html';
[].forEach.call(pc.children,function(x,j){x.setAttribute('aria-pressed',j===k);if(j===k){var i=x.lastChild;i.style.animation='none';void i.offsetWidth;i.style.animation=''}});var el=pc.children[k];pc.scrollTo({left:Math.max(0,el.offsetLeft-(pc.clientWidth-el.offsetWidth)/2),behavior:first?'auto':'smooth'})};
hsrc(bg.querySelector('.hp img'),A.modelos[0].k);
pc.innerHTML=A.modelos.map(function(m,k){return'<button type="button" data-k="'+k+'"><b>'+m.id+'</b><small>'+m.m2+' m²</small><i></i></button>'}).join('');
pc.onclick=function(e){var x=e.target.closest('button');if(x)draw(+x.dataset.k)};
pc.addEventListener('animationend',function(e){if(e.target.tagName==='I')draw(cur+1)});
var hold=function(o){pc.classList.toggle('ps',o||pz)},off=function(){pc.classList.toggle('off',document.hidden||!vis)};
/* pausa manual (accesibilidad: el contenido que cambia solo debe poder detenerse) */
var pb=document.createElement('button');pb.type='button';pb.className='hpz';pb.setAttribute('aria-label','Pausar la rotación de modelos');pb.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path class="pp" d="M6 4h4v16H6zM14 4h4v16h-4z"/><path class="pl" d="M7 4l13 8-13 8z"/></svg>';
pb.onclick=function(){pz=!pz;pb.classList.toggle('is',pz);pb.setAttribute('aria-label',pz?'Reanudar la rotación de modelos':'Pausar la rotación de modelos');hold(0)};var row=document.createElement('div');row.className='hrow';pw.parentNode.insertBefore(row,pw);row.appendChild(pb);row.appendChild(pw);
hc.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')hold(1)});hc.addEventListener('pointerleave',function(e){if(e.pointerType==='mouse')hold(0)});
hc.addEventListener('touchstart',function(){hold(1)},{passive:true});['touchend','touchcancel'].forEach(function(n){hc.addEventListener(n,function(){hold(0)})});
hc.addEventListener('focusin',function(e){if(e.target.matches(':focus-visible'))hold(1)});hc.addEventListener('focusout',function(){hold(0)});
var sx=0,sy=0;hs.addEventListener('pointerdown',function(e){sx=e.clientX;sy=e.clientY});hs.addEventListener('pointerup',function(e){var dx=e.clientX-sx,dy=e.clientY-sy;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.4)draw(cur+(dx<0?1:-1))});
var upd=function(){var x=pc.scrollWidth-pc.clientWidth;pw.classList.toggle('l',pc.scrollLeft>3);pw.classList.toggle('r',pc.scrollLeft<x-3)};pc.addEventListener('scroll',upd,{passive:true});
addEventListener('resize',upd);document.addEventListener('visibilitychange',off);
if('IntersectionObserver'in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting;off()},{threshold:.35}).observe(hero);
draw(cur,1);upd();setTimeout(function(){pic(1)},1600);
window.heroGo=function(){if(!RM)pc.classList.add('on')}}
/* tarjetas de modelos (inicio) */
/* recorrido de modelos: los 7 módulos a la misma escala sobre el mismo bosque; al tocar uno se ve su detalle */
(function(){var root=$('#rec'),dp=$('#rdp');if(!root||!dp)return;
var sc=root.querySelector('.rec-sc'),bl=root.querySelector('.rec-b.l'),br=root.querySelector('.rec-b.r'),M=A.modelos,gap=110,x=80,pos=[],ex=[],tot,sel=-1,q=7,rn=function(){q=q*16807%2147483647;return q/2147483647},st='',h='',
S=function(){return innerWidth<700?.72:.95},RMo=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* fondo dorado: cielo de atardecer claro + lomas y pinos en tonos cálidos; los módulos (oscuros) quedan bien recortados */
var PG=window.GOLD,
build=function(){var hw=(sc.clientWidth||innerWidth)/2/S();pos=[];ex=[];q=7;h='';
M.forEach(function(m){var E=MEXT[m.k];ex.push((E[1]-E[0])*MW[m.k])});
x=Math.max(80,hw-ex[0]/2);M.forEach(function(m,i){pos.push(x+ex[i]/2);x+=ex[i]+gap});tot=x-gap+Math.max(80,hw-ex[ex.length-1]/2);
M.forEach(function(m,i){h+='<g class="rm" data-i="'+i+'" tabindex="0" role="button" aria-label="'+m.id+', '+m.m2+' metros cuadrados"><ellipse class="rsp" cx="'+pos[i]+'" cy="254" rx="'+(ex[i]/2+10)+'" ry="13" fill="url(#rsp)"/><g transform="translate('+(pos[i]-300).toFixed(1)+' 0)">'+modelArt(m.k,MW[m.k],'r'+i,0)+'</g><text class="rl" x="'+pos[i]+'" y="296" text-anchor="middle">'+m.id+'</text><text class="rs" x="'+pos[i]+'" y="311" text-anchor="middle">'+m.m2+' m²</text></g>'});
sc.innerHTML='<svg id="rsv" viewBox="0 60 '+tot+' 265" width="'+tot*S()+'" height="'+265*S()+'" role="group" aria-label="Los siete módulos a la misma escala"><defs><linearGradient id="rsk" gradientUnits="userSpaceOnUse" x1="0" y1="60" x2="0" y2="250"><stop offset="0" stop-color="#fff4d6"/><stop offset=".55" stop-color="#f9da8c"/><stop offset="1" stop-color="#efb64d"/></linearGradient><radialGradient id="rsp"><stop offset="0" stop-color="#fffaf0" stop-opacity=".75"/><stop offset="1" stop-color="#fffaf0" stop-opacity="0"/></radialGradient></defs>'+duskArt(0,tot,'r',400)+h+'</svg>'};
build();
var upd=function(){bl.hidden=sc.scrollLeft<20;br.hidden=sc.scrollLeft>sc.scrollWidth-sc.clientWidth-20},
go=function(i,fly){if(i<0||i>=M.length)return;var m=M[i];if(i!==sel){sel=i;[].forEach.call(sc.querySelectorAll('.rm'),function(g){g.classList.toggle('on',+g.dataset.i===i)});
 dp.innerHTML='<div class="rdp-i"><a class="rdp-im" href="modelo-'+m.k+'.html" aria-label="Ver ficha del '+m.id+'"><img src="img/'+m.k+'.webp" alt="Modelo '+m.id+' de '+m.m2+' m²" width="800" height="640">'+(m.top?'<span class="tag">Más vendido</span>':'')+'</a><div class="rdp-t"><h3>'+m.id+' <small>'+m.m2+' m² + '+m.ex+'</small></h3><p class="lead">'+m.t+'</p><ul>'+m.l.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul><p class="from">Desde '+U.usd(U.from(m))+' <small>+ IVA</small></p><div class="acts"><a class="btn s" href="configurador.html?m='+m.k+'">Configurar</a><a class="btn s g" href="modelo-'+m.k+'.html">Ver ficha</a></div></div></div>'}
 if(fly)sc.scrollTo({left:Math.max(0,pos[i]*S()-sc.clientWidth/2),behavior:RMo||fly===2?'auto':'smooth'})},
drag=0,x0=0,l0=0,moved=0;
sc.addEventListener('click',function(e){if(moved)return;var g=e.target.closest('.rm');if(g)go(+g.dataset.i,1)});
sc.addEventListener('keydown',function(e){var g=e.target.closest&&e.target.closest('.rm');if(g&&(e.key==='Enter'||e.key===' ')){e.preventDefault();go(+g.dataset.i,1)}else if(e.key==='ArrowRight'){go(Math.min(M.length-1,sel+1),1)}else if(e.key==='ArrowLeft'){go(Math.max(0,sel-1),1)}});
sc.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;drag=1;moved=0;x0=e.clientX;l0=sc.scrollLeft});
addEventListener('pointermove',function(e){if(!drag)return;var d=e.clientX-x0;if(Math.abs(d)>5)moved=1;sc.scrollLeft=l0-d});
addEventListener('pointerup',function(){drag=0;setTimeout(function(){moved=0},0)});
sc.addEventListener('scroll',upd,{passive:true});
bl.addEventListener('click',function(){go(Math.max(0,sel-1),1)});br.addEventListener('click',function(){go(Math.min(M.length-1,sel+1),1)});
var lw=sc.clientWidth,rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){if(sc.clientWidth===lw)return;lw=sc.clientWidth;var s=Math.max(0,sel);build();sel=-1;go(s,2);upd()},120)});
go(0,2);upd()})();
/* contadores */
document.querySelectorAll('.stats strong').forEach(function(e){var raw=e.textContent,v=parseFloat(raw.replace(/\./g,'').replace(',','.')),suf=raw.replace(/[0-9.,]/g,'');if(!v||!('IntersectionObserver'in window)||matchMedia('(prefers-reduced-motion:reduce)').matches)return;var io=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;io.disconnect();var t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1400),e2=1-Math.pow(1-k,3);e.textContent=Math.round(v*e2).toLocaleString('es-AR')+suf;if(k<1)requestAnimationFrame(f)})(t0)},{threshold:.6});io.observe(e)});
var cf=$('#cf');if(cf){$('#cm').innerHTML='<option value="">Todavía no lo sé</option>'+A.modelos.map(function(x){return'<option>'+x.id+' · '+x.m2+' m²</option>'}).join('');
cf.onsubmit=function(e){e.preventDefault();var n=cf.nombre.value.trim(),w=cf.wa.value.replace(/\D/g,'');if(!n||w.length<8){$('#ce').textContent='Completá tu nombre y un WhatsApp válido.';return}$('#ce').textContent='';window.open(U.wa('Hola AmbyHouse, soy '+n+' ('+cf.wa.value+').'+(cf.modelo.value?' Me interesa el modelo '+cf.modelo.value+'.':'')+(cf.msg.value.trim()?' '+cf.msg.value.trim():' Quiero recibir una cotización.')),'_blank','noopener')};$('#cmail').onclick=function(){var n=cf.nombre.value.trim(),w=cf.wa.value.replace(/\D/g,'');if(!n||w.length<8){$('#ce').textContent='Completá tu nombre y un WhatsApp válido.';return}$('#ce').textContent='';location.href='mailto:'+A.mail+'?subject='+encodeURIComponent('Consulta web'+(cf.modelo.value?' · '+cf.modelo.value:''))+'&body='+encodeURIComponent('Nombre: '+n+'\nWhatsApp: '+cf.wa.value+(cf.msg.value.trim()?'\n\n'+cf.msg.value.trim():''))}}
var sc=$('#scn');if(sc)scene(sc);
/* intro: el hero es la intro. El script del <head> de index.html pone html.i1p solo en la primera visita de la sesión (y no para bots ni con "reducir movimiento") */
var de=document.documentElement;if(P==='home'&&de.classList.contains('i1p')){requestAnimationFrame(function(){de.classList.add('go')});setTimeout(function(){if(window.heroGo)heroGo()},1000);setTimeout(function(){de.classList.remove('i1p','go')},3300)}
if(!de.classList.contains('i1p')&&window.heroGo)heroGo();
document.addEventListener('click',function(e){var a=e.target.closest('[data-ev]');if(a)(window.dataLayer=window.dataLayer||[]).push({event:'ah_click',ah:a.dataset.ev})});
reveal()})();

/* ===== Código de cada página (configurador, proyectos, fichas, proceso, comparador, calculadora) ===== */
(function(){var A=window.AH,P=document.body.dataset.p,$=function(s,e){return(e||document).querySelector(s)},U=window.U;
/* ===== CONFIGURADOR: dibujo en vivo, sin scroll forzado ===== */
if(P==='cfg'){var S={m:U.m(U.q('m')),l:'premium',x:{},s:0,f:{},done:''},st=['Modelo','Línea','Extras','Cotización'],L=function(){return A.lineas.filter(function(l){return l.id===S.l})[0]},
sub=function(){return S.m?S.m.m2*L().usd:0},ext=function(){return A.extras.filter(function(e){return S.x[e.id]})},tot=function(){return sub()+ext().reduce(function(a,e){return a+e.usd},0)},
ck='<i class="ck" aria-hidden="true">✓</i>',iv=String(A.iva).replace('.',','),
msg=function(){var f=S.f;return'Hola AmbyHouse, quiero cotizar: '+S.m.id+' ('+S.m.m2+' m²), '+L().n+(ext().length?', extras: '+ext().map(function(e){return e.n}).join(' y '):'')+'. Total estimado '+U.usd(tot())+' + IVA.\nNombre: '+f.nombre.trim()+'\nWhatsApp: '+f.wa+(f.uso?'\nUso: '+f.uso:'')+(f.plazo?'\nPlazo: '+f.plazo:'')+(f.com&&f.com.trim()?'\nComentario: '+f.com.trim():'')},
pv=function(){var m=S.m;return houseSVG(m?{k:m.k,cfg:1,m2:m.m2,pergola:S.x.pergola,deck:S.x.deck,label:'Dibujo de tu '+m.id}:{m2:30,bp:1,label:'Elegí un modelo para ver el dibujo'})},
go=function(k){var f=S.f,w=(f.wa||'').replace(/\D/g,''),n=(f.nombre||'').trim(),fm=$('#fm');if(!n||w.length<8){$('#err').textContent='Completá tu nombre y un WhatsApp válido.';(!n?fm.nombre:fm.wa).focus();return}$('#err').textContent='';
(window.dataLayer=window.dataLayer||[]).push({event:'ah_lead',ah:'configurador',modelo:S.m.id});
if(k==='mail'){location.href='mailto:'+A.mail+'?subject='+encodeURIComponent('Cotización '+S.m.id)+'&body='+encodeURIComponent(msg());return}
S.done=U.wa(msg());window.open(S.done,'_blank','noopener');draw()};
var draw=function(){var h='';
$('#stp').innerHTML=st.map(function(s,i){return'<li class="'+(i===S.s?'on':i<S.s?'done':'')+'"><button type="button" data-s="'+i+'"'+(i>0&&!S.m?' disabled':'')+'><b>'+(i+1)+'</b><span>'+s+'</span></button></li>'}).join('');
if(S.s===0)h='<h2>Elegí un modelo</h2><div class="opts sm">'+A.modelos.map(function(m){var b=m.b.split(' ')[0];return'<button type="button" class="opt" data-m="'+m.k+'" aria-pressed="'+(S.m===m)+'">'+ck+'<strong>'+m.id+'</strong><span>'+m.m2+' m² · '+(m.dm==='—'?'sin dormitorio':m.dm+' dorm.')+' · '+b+(b.indexOf('–')>-1||b!=='1'?' baños':' baño')+'</span><small>'+m.uso+'</small><em>Desde '+U.usd(U.from(m))+'</em></button>'}).join('')+'</div>';
if(S.s===1)h='<h2>Elegí la línea</h2><div class="opts two">'+A.lineas.map(function(l){var d=S.m.m2*(l.usd-A.lineas[0].usd);return'<button type="button" class="opt ln" data-l="'+l.id+'" aria-pressed="'+(S.l===l.id)+'">'+ck+'<strong>'+l.n+'</strong><span>'+l.d+'</span><em>'+U.usd(S.m.m2*l.usd)+' <small>+ IVA'+(d>0?' · '+U.usd(d)+' más que Premium':'')+'</small></em></button>'}).join('')+'</div>';
if(S.s===2)h='<h2>Sumá extras</h2><div class="opts two">'+A.extras.map(function(e){return'<button type="button" class="opt ln" data-x="'+e.id+'" aria-pressed="'+!!S.x[e.id]+'">'+ck+'<strong>'+e.n+'</strong><span>'+e.d+'</span><em>+ '+U.usd(e.usd)+'</em></button>'}).join('')+'</div><p class="m2 nt">Son opcionales: si no necesitás ninguno, seguí a tu cotización.</p>';
if(S.s===3&&S.done)h='<h2>¡Listo! Tu consulta está en camino</h2><p class="lead">Abrimos WhatsApp con tu configuración. Si no se abrió, tocá el botón.</p><div class="acts"><a class="btn" href="'+S.done+'" target="_blank" rel="noopener">Abrir WhatsApp</a><a class="btn g" href="proyectos.html">Ver proyectos</a></div>';
else if(S.s===3)h='<h2>Tu cotización</h2><div class="sum"><div><span>'+S.m.id+' · '+S.m.m2+' m² · '+L().n+'</span><b>'+U.usd(sub())+'</b></div>'+ext().map(function(e){return'<div><span>'+e.n+'</span><b>+ '+U.usd(e.usd)+'</b></div>'}).join('')+'<div class="tt"><span>Total estimado <small>+ IVA '+iv+'%</small></span><b>'+U.usd(tot())+'</b></div></div><p class="m2 nt">Valores de referencia: la cotización oficial se confirma según medidas, terminaciones y terreno.</p>'+
'<h3 class="fh">¿A dónde te respondemos?</h3><form id="fm" novalidate><div class="ff2"><label>Tu nombre *<input name="nombre" autocomplete="name" required></label><label>WhatsApp *<input name="wa" type="tel" autocomplete="tel" inputmode="tel" required></label></div>'+
'<details class="more"><summary>Sumar detalles (opcional)</summary><div class="ff2"><label>Uso del módulo<select name="uso"><option value="">Seleccionar…</option><option>Vivienda</option><option>Quincho</option><option>Oficina</option><option>Renta turística</option><option>Otro</option></select></label><label>Plazo de compra<select name="plazo"><option value="">Seleccionar…</option><option>Inmediato (menos de 1 mes)</option><option>1-3 meses</option><option>3-6 meses</option><option>Solo evaluando</option></select></label></div><label>Comentario<textarea name="com" rows="3" placeholder="Contanos sobre tu terreno o tu idea"></textarea></label></details>'+
'<p class="err" id="err" role="alert"></p><p class="alt2">Te respondemos por WhatsApp. ¿Preferís mail? <button type="button" class="lnk" id="gm">Enviar por mail</button></p><button type="submit" hidden></button></form>';
$('#panel').innerHTML=h;var fm=$('#fm');if(fm){['nombre','wa','uso','plazo','com'].forEach(function(k){if(S.f[k])fm[k].value=S.f[k]});if(S.f.uso||S.f.plazo||S.f.com)$('.more').open=true}
$('#back').hidden=S.s===0;$('#next').hidden=!!S.done;$('#next').disabled=!S.m;$('#next').textContent=['Continuar','Continuar','Ver mi cotización','Enviar por WhatsApp'][S.s];
var k=(S.m?S.m.k:'')+S.l+!!S.x.pergola+!!S.x.deck;if($('#pvw').dataset.k!==k){$('#pvw').innerHTML=pv();$('#pvw').dataset.k=k}
$('#pvl').textContent=S.m?S.m.id+' · '+L().n.replace('Línea ','')+(ext().length?' + '+ext().map(function(e){return e.n.toLowerCase()}).join(' y '):''):'Elegí un modelo para empezar';
$('#pvd').innerHTML=S.m?'<dt>Modelo</dt><dd>'+S.m.id+' · '+S.m.m2+' m²</dd><dt>Línea</dt><dd>'+L().n.replace('Línea ','')+'</dd><dt>Extras</dt><dd>'+(ext().map(function(e){return e.n}).join(', ')||'Ninguno')+'</dd>':'';
$('#bt').textContent=S.m?U.usd(tot()):'—';$('#iva').textContent=S.m?'+ IVA '+iv+'%':'Sin modelo'};
$('#stp').onclick=function(e){var b=e.target.closest('button');if(b&&!b.disabled){S.s=+b.dataset.s;S.done='';draw()}};
$('#panel').onclick=function(e){if(e.target.id==='gm'){go('mail');return}var b=e.target.closest('.opt');if(!b)return;if(b.dataset.m)S.m=U.m(b.dataset.m);if(b.dataset.l)S.l=b.dataset.l;if(b.dataset.x)S.x[b.dataset.x]=!S.x[b.dataset.x];draw()};
$('#panel').addEventListener('input',function(e){if(e.target.name)S.f[e.target.name]=e.target.value});
$('#panel').addEventListener('submit',function(e){e.preventDefault();go('wa')});
$('#next').onclick=function(){if(S.s===3)go('wa');else if(S.m){S.s++;draw()}};$('#back').onclick=function(){if(S.done)S.done='';else S.s--;draw()};
if(S.m)S.s=1;draw()}
/* ===== PROYECTOS ===== */
if(P==='proj'){var size=function(m){return m<=30?'S':m<=55?'M':'L'},M=function(id){return U.m(id)},R=A.proyectos,sel=function(id){return $(id).value};
var draw=function(){var t=sel('#ft1'),z=sel('#fz'),l=sel('#fl'),q=$('#fq').value.toLowerCase().trim(),r=R.filter(function(p){var m=M(p.m);return(!t||p.tipo===t)&&(!z||size(m.m2)===z)&&(!l||p.l===l)&&(!q||(p.n+' '+p.loc+' '+p.tags.join(' ')+' '+p.m).toLowerCase().indexOf(q)>-1)});
$('#cnt').textContent=r.length+(r.length===1?' proyecto':' proyectos');
$('#pg').innerHTML=r.length?r.map(function(p){var m=M(p.m);return'<article class="mod"><button type="button" class="im" data-p="'+p.id+'" aria-label="Abrir '+p.n+'"><img loading="lazy" src="img/'+m.k+'.webp" alt="'+p.n+'" width="800" height="640"><span class="tag">'+p.tipo+'</span></button><div class="t"><h3>'+p.n+'</h3><p class="m2">'+p.loc+'</p><p class="m2"><strong>'+m.m2+'</strong> m² · '+p.m+' · '+p.l+'</p></div></article>'}).join(''):'<p class="empty">No encontramos proyectos con esos filtros. Probá limpiar o cambiar la búsqueda.</p>'};
['#ft1','#fz','#fl'].forEach(function(s){$(s).onchange=draw});$('#fq').oninput=draw;$('#clr').onclick=function(){['#ft1','#fz','#fl'].forEach(function(s){$(s).value=''});$('#fq').value='';draw()};
$('#pg').onclick=function(e){var b=e.target.closest('button[data-p]');if(!b)return;var p=R.filter(function(x){return x.id==+b.dataset.p})[0],m=M(p.m);
$('#pd').innerHTML='<img src="img/'+m.k+'.webp" alt="'+p.n+'" width="800" height="640"><div class="t"><h3>'+p.n+'</h3><dl class="spec"><dt>Ubicación</dt><dd>'+p.loc+'</dd><dt>Tipo</dt><dd>'+p.tipo+'</dd><dt>Modelo</dt><dd>'+p.m+' · '+m.m2+' m² ('+size(m.m2)+')</dd><dt>Línea</dt><dd>'+p.l+'</dd><dt>Tags</dt><dd>'+p.tags.join(', ')+'</dd></dl><a class="btn" href="configurador.html?m='+m.k+'">Quiero cotizar uno así</a></div>';$('#dlg').showModal()};
$('#x').onclick=function(){$('#dlg').close()};draw()}
/* ===== FICHA DE MODELO (una página por modelo) ===== */
if(P==='mod'){var m=U.m(document.body.dataset.m),ix=A.modelos.indexOf(m),pv=A.modelos[(ix+A.modelos.length-1)%A.modelos.length],nx=A.modelos[(ix+1)%A.modelos.length],im=['img/'+m.k+'.webp','img/'+m.k+'-p.webp'];
$('#md').innerHTML='<p class="crumb"><a href="index.html#modelos">Modelos</a> / '+m.id+'</p><div class="md"><div><div class="main" id="main"><img id="big" src="'+im[0]+'" alt="Modelo '+m.id+'" width="800" height="640"></div><div class="thumbs">'+im.map(function(s,j){return'<button type="button" data-i="'+j+'" aria-label="Ver imagen '+(j+1)+'"><img src="'+s+'" alt="" width="200" height="160"></button>'}).join('')+'</div></div><div><p class="eye">'+(m.top?'Más vendido · ':'')+'Llave en mano</p><h1>'+m.id+'</h1><p class="lead">'+m.t+'</p><ul class="pills">'+m.l.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul><p class="from">Desde '+U.usd(U.from(m))+' <small>+ IVA · Línea Premium</small></p><div class="acts"><a class="btn" href="configurador.html?m='+m.k+'">Cotizar este módulo</a><a class="btn g" href="'+U.wa('Hola AmbyHouse, quiero la ficha técnica del modelo '+m.id)+'" target="_blank" rel="noopener">Pedir ficha en PDF</a></div><p class="tl"><a href="comparar.html?m='+m.k+'">Comparar con otros modelos</a><a href="calculadora.html?m='+m.k+'">Calcular rentabilidad</a></p></div></div>'+
(function(){var cap=function(x){return x.charAt(0).toUpperCase()+x.slice(1)},dm=String(m.dm),bs=String(m.b).split(' '),
st=function(n,u,l){return'<div class="st"><b>'+n+(u?'<small>'+u+'</small>':'')+'</b><span>'+l+'</span></div>'},
ex=m.ex.split(' + ').map(cap),ul=function(a){return'<ul class="ck">'+a.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul>'},iva=String(A.iva).replace('.',',');
return'<h2 class="rv">Ficha técnica</h2><div class="fs rv">'+st(m.m2,'m²','Superficie')+(dm==='—'?st('Integrado','','Estar, cocina y baño'):st(dm,'',dm==='1'?'Dormitorio':'Dormitorios'))+st(bs[0],bs.slice(1).join(' '),bs[0]==='1'?'Baño':'Baños')+st('60','días','Entrega llave en mano')+'</div>'+
'<div class="fx rv"><div class="fd"><h3>Ambientes</h3>'+ul(m.l)+'<h3>Exteriores incluidos</h3>'+ul(ex)+'<h3>Ideal para</h3><p class="ua">'+m.uso+'</p></div><figure class="vista">'+houseSVG({k:m.k,m2:m.m2,terra:m.k==='c30t',wood:m.k==='c30t'||m.k==='c90',pergola:m.k!=='c30t',deck:1,label:'Esquema del '+m.id})+'<figcaption><span><b>Vista ilustrativa</b> · '+m.id+' · '+m.m2+' m²</span><span>Plano oficial próximamente</span></figcaption></figure></div>'+
'<h2 class="rv">Líneas de terminación</h2><div class="lns rv">'+A.lineas.map(function(l,i){return'<div class="lc'+(i?' dx':'')+'"><span>'+l.n+'</span><strong>'+U.usd(m.m2*l.usd)+' <small>+ IVA</small></strong><p>'+l.d+'</p><p class="pm">'+U.usd(l.usd)+' por m²'+(i?' · '+U.usd(m.m2*(l.usd-A.lineas[0].usd))+' más que Premium':'')+'</p></div>'}).join('')+'</div><p class="note rv">Valores de referencia para el '+m.id+', más IVA '+iva+'%. Las medidas, terminaciones y valores se confirman en la cotización.</p>'+
'<div class="cta2 rv"><div><strong>¿Te interesa el '+m.id+'?</strong><span>Configuralo y te respondemos por WhatsApp con una cotización sin compromiso.</span></div><div class="acts"><a class="btn" href="configurador.html?m='+m.k+'">Cotizar este módulo</a><a class="btn g" href="'+U.wa('Hola AmbyHouse, quiero consultar por el modelo '+m.id)+'" target="_blank" rel="noopener">Hablar por WhatsApp</a></div></div>'}())+
'<div class="pn rv"><a href="modelo-'+pv.k+'.html">← '+pv.id+'</a><a href="modelo-'+nx.k+'.html">'+nx.id+' →</a></div>';
$('#md').onclick=function(e){var b=e.target.closest('[data-i]');if(b){$('#big').src=im[+b.dataset.i];return}if(e.target.closest('#main')){$('#lb').innerHTML='<img src="'+$('#big').src+'" alt="Vista ampliada"><button type="button" class="x" aria-label="Cerrar">✕</button>';$('#lb').showModal()}};
$('#lb').onclick=function(){$('#lb').close()}}
/* ===== COMPARADOR ===== */
if(P==='cmp'){var sl=(U.q('m')||'c30,c45,c90').split(',').map(function(x){return U.m(x)}).filter(Boolean).slice(0,3);if(!sl.length)sl=[A.modelos[1]];
var R=[['Superficie',function(m){return m.m2+' m²'}],['Incluye',function(m){return m.ex}],['Dormitorios',function(m){return m.dm}],['Baños',function(m){return m.b}],['Uso sugerido',function(m){return m.uso}],['Desde (Premium)',function(m){return U.usd(m.m2*A.lineas[0].usd)},1],['Desde (Deluxe)',function(m){return U.usd(m.m2*A.lineas[1].usd)},1],['Entrega',function(){return '60 días'}]];
var draw=function(){$('#cc').innerHTML=A.modelos.map(function(m){return'<button type="button" class="chip" data-k="'+m.k+'" aria-pressed="'+(sl.indexOf(m)>-1)+'">'+m.id+'</button>'}).join('');
$('#ct').innerHTML='<table class="cmpt"><thead><tr><th scope="col"></th>'+sl.map(function(m){return'<th scope="col">'+houseSVG({k:m.k,m2:m.m2,terra:m.k==='c30t',wood:m.k==='c30t'||m.k==='c90',pergola:m.k!=='c30t',deck:1,label:'Dibujo del '+m.id})+'<strong>'+m.id+'</strong><small>'+m.m2+' m²</small></th>'}).join('')+'</tr></thead><tbody>'+R.map(function(r){return'<tr><th scope="row">'+r[0]+'</th>'+sl.map(function(m){return'<td'+(r[2]?' class="hi"':'')+'>'+r[1](m)+'</td>'}).join('')+'</tr>'}).join('')+'<tr><th scope="row"></th>'+sl.map(function(m){return'<td><a class="btn s" href="configurador.html?m='+m.k+'">Configurar</a><a class="btn s g" href="modelo-'+m.k+'.html">Ficha</a></td>'}).join('')+'</tr></tbody></table>'};
$('#cc').onclick=function(e){var b=e.target.closest('.chip');if(!b)return;var m=U.m(b.dataset.k),i=sl.indexOf(m);if(i>-1){if(sl.length>1)sl.splice(i,1)}else{sl.push(m);if(sl.length>3)sl.shift()}draw()};draw()}
/* ===== CALCULADORA ===== */
if(P==='calc'){var RT=A.renta,g=function(i){return $('#'+i)},m0=U.m(U.q('m'))||A.modelos[1];
g('im').innerHTML=A.modelos.map(function(m){return'<option value="'+m.k+'">'+m.id+' · '+m.m2+' m²</option>'}).join('');g('il').innerHTML=A.lineas.map(function(l){return'<option value="'+l.id+'">'+l.n+'</option>'}).join('');
g('im').value=m0.k;g('io').value=RT.obra;g('it').value=RT.noche[m0.k];g('ioc').value=RT.ocup;g('ik').value=RT.costos;
var calc=function(){var m=U.m(g('im').value),l=A.lineas.filter(function(x){return x.id===g('il').value})[0],n=Math.max(1,Math.min(30,+g('ic').value||1)),mod=m.m2*l.usd+(g('ip').checked?A.extras[0].usd:0)+(g('id').checked?A.extras[1].usd:0),iva=g('iv').checked?A.iva/100:0,obra=Math.max(0,+g('io').value||0),
inv=mod*n*(1+iva)+obra*n,br=365*(+g('ioc').value/100)*(+g('it').value||0)*n,net=br*(1-g('ik').value/100),rec=net>0?inv/net:0;
g('oo').textContent=g('ioc').value+'%';g('ok').textContent=g('ik').value+'%';
g('kp').innerHTML='<div><small>Inversión</small><strong>'+U.usd(inv)+'</strong></div><div><small>Neto anual</small><strong>'+U.usd(net)+'</strong></div><div><small>Recupero</small><strong>'+(net>0?rec.toFixed(1).replace('.',',')+' años':'—')+'</strong></div>';
g('bd').innerHTML='<dt>Módulos ('+n+' × '+m.id+')</dt><dd>'+U.usd(mod*n)+'</dd><dt>IVA</dt><dd>'+U.usd(mod*n*iva)+'</dd><dt>Obra civil</dt><dd>'+U.usd(obra*n)+'</dd><dt>Ingreso bruto anual</dt><dd>'+U.usd(br)+'</dd><dt>Retorno anual sobre inversión</dt><dd>'+(inv?(net/inv*100).toFixed(1).replace('.',','):'0')+'%</dd>';
var Y=8,v=[],i,mx=0,mn=-inv;for(i=0;i<=Y;i++){v.push(net*i-inv);mx=Math.max(mx,v[i])}var top=Math.max(mx,inv*.2),rg=top-mn||1,y=function(a){return 10+(top-a)/rg*190},s='<svg viewBox="0 0 600 240" role="img" aria-label="Flujo acumulado a 8 años">';
v.forEach(function(a,j){var x=20+j*64,y0=y(0),y1=y(a);s+='<rect x="'+x+'" y="'+Math.min(y0,y1)+'" width="44" height="'+Math.max(2,Math.abs(y1-y0))+'" rx="3" fill="'+(a>=0?'#F2A01E':'rgba(245,242,236,.25)')+'"/><text x="'+(x+22)+'" y="228" text-anchor="middle" fill="rgba(245,242,236,.6)" font-size="12" font-family="Poppins,sans-serif">'+(j?'Año '+j:'Hoy')+'</text>'});
s+='<line x1="0" x2="600" y1="'+y(0)+'" y2="'+y(0)+'" stroke="rgba(245,242,236,.5)"/></svg>';g('ch').innerHTML=s;
g('cw').href=U.wa('Hola AmbyHouse, simulé una inversión: '+n+' × '+m.id+' ('+l.n+'). Inversión '+U.usd(inv)+', neto anual '+U.usd(net)+', recupero '+(net>0?rec.toFixed(1)+' años':'sin recupero')+' (tarifa USD '+g('it').value+'/noche, ocupación '+g('ioc').value+'%). Quiero un análisis a medida.')};
g('im').onchange=function(){g('it').value=RT.noche[g('im').value];calc()};['il','ic','io','it','ip','id','iv','ioc','ik'].forEach(function(i){g(i).oninput=calc;g(i).onchange=calc});calc()}
/* ===== PROCESO ===== */
if(P==='proc'){$('#et').innerHTML=A.etapas.map(function(e,i){return'<article class="rv"><span class="n">0'+(i+1)+'</span><p class="eye">'+e[0]+'</p><h3>'+e[1]+'</h3><p>'+e[2]+'</p><ul>'+e[3].map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul></article>'}).join('');
$('#nc').innerHTML=A.nec.map(function(n){return'<article class="rv"><h3>'+n[0]+'</h3><ul>'+n[1].map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul></article>'}).join('');
$('#fq').innerHTML=A.faq.map(function(f){return'<details class="rv"><summary>'+f[0]+'</summary><p>'+f[1]+'</p></details>'}).join('')}
window.reveal()})();

/* ícono oficial de WhatsApp dentro de los botones que llevan a WhatsApp */
(function(){var I='<svg class="wi" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
var run=function(){document.querySelectorAll('a.btn[href*="wa.me"],button.btn[type=submit]').forEach(function(b){if(!b.querySelector('.wi')&&/whatsapp|cotizaci|ficha|an[aá]lisis|asesor|consult/i.test(b.textContent+b.getAttribute('href'))&&(b.tagName==='A'||/whatsapp/i.test(b.textContent)))b.insertAdjacentHTML('afterbegin',I)})};
run();new MutationObserver(run).observe(document.body,{childList:true,subtree:true})})();
