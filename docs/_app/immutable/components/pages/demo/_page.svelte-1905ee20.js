import{S as C,i as H,s as O,k as b,q as E,a as P,l as y,m as k,r as D,h as g,c as T,n as h,b as z,I as u,O as q,B as M,a0 as B,D as G,o as J,P as N,M as A,a6 as V,a7 as W}from"../../../chunks/paths-8e1e5da9.js";import{g as F}from"../../../chunks/navigation-0a738735.js";function j(n,e,l){const s=n.slice();return s[7]=e[l],s[9]=l,s}function x(n){let e,l;return{c(){e=b("img"),this.h()},l(s){e=y(s,"IMG",{style:!0,src:!0,alt:!0,class:!0}),this.h()},h(){h(e,"style",n[2]),N(e.src,l=A+n[7].src)||h(e,"src",l),h(e,"alt",n[7].alt),h(e,"class","svelte-xf95d2"),V(e,"shown",n[0]==n[9])},m(s,i){z(s,e,i),n[6](e)},p(s,i){i&4&&h(e,"style",s[2]),i&1&&V(e,"shown",s[0]==s[9])},d(s){s&&g(e),n[6](null)}}}function K(n){let e,l,s,i,f,c,m,_,p,v,d=n[3],o=[];for(let a=0;a<d.length;a+=1)o[a]=x(j(n,d,a));return{c(){e=b("section"),l=b("div"),s=b("div"),i=E("\xA0"),f=P(),c=b("div"),m=E("\xA0"),_=E(`
	>
	`);for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=y(a,"SECTION",{class:!0});var r=k(e);l=y(r,"DIV",{class:!0});var t=k(l);s=y(t,"DIV",{class:!0});var w=k(s);i=D(w,"\xA0"),w.forEach(g),f=T(t),c=y(t,"DIV",{class:!0});var S=k(c);m=D(S,"\xA0"),S.forEach(g),t.forEach(g),_=D(r,`
	>
	`);for(let I=0;I<o.length;I+=1)o[I].l(r);r.forEach(g),this.h()},h(){h(s,"class","svelte-xf95d2"),h(c,"class","svelte-xf95d2"),h(l,"class","background svelte-xf95d2"),h(e,"class","svelte-xf95d2")},m(a,r){z(a,e,r),u(e,l),u(l,s),u(s,i),u(l,f),u(l,c),u(c,m),u(e,_);for(let t=0;t<o.length;t+=1)o[t].m(e,null);p||(v=[q(window,"resize",n[5]),q(e,"click",n[4])],p=!0)},p(a,[r]){if(r&15){d=a[3];let t;for(t=0;t<d.length;t+=1){const w=j(a,d,t);o[t]?o[t].p(w,r):(o[t]=x(w),o[t].c(),o[t].m(e,null))}for(;t<o.length;t+=1)o[t].d(1);o.length=d.length}},i:M,o:M,d(a){a&&g(e),B(o,a),p=!1,G(v)}}}function L(n,e,l){const s=[{src:"/showcase/01-1.jpg",alt:"Share and connect with each other"},{src:"/showcase/01-2.jpg",alt:"Welcome to HAJA"}];let i=0,f,c="";const m=()=>{i==s.length-1&&F(`${A}/login`),l(0,i++,i)},_=()=>{l(2,c=`width: ${f.offsetHeight*6/9}px;`)};J(()=>{_(),setTimeout(_,500)});function p(v){W[v?"unshift":"push"](()=>{f=v,l(1,f)})}return[i,f,c,s,m,_,p]}class U extends C{constructor(e){super(),H(this,e,L,K,O,{})}}export{U as default};
