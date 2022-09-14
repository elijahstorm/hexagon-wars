import{S as u,i as y,s as S,k as b,l as z,m as v,h as r,n as f,ad as d,b as j,B as _}from"./paths-8e1e5da9.js";function k(n){let t,l;return{c(){t=b("div"),this.h()},l(i){t=z(i,"DIV",{class:!0,style:!0}),v(t).forEach(r),this.h()},h(){f(t,"class",l=d(n[0])+" svelte-1qtja1k"),f(t,"style",n[1])},m(i,s){j(i,t,s)},p(i,[s]){s&1&&l!==(l=d(i[0])+" svelte-1qtja1k")&&f(t,"class",l)},i:_,o:_,d(i){i&&r(t)}}}function q(n,t,l){let{loadingStyle:i="circle"}=t,{size:s=3}=t,{left:a=0}=t,{top:o=0}=t,{right:m=0}=t,{bototm:c=0}=t,h=i=="dots"?"10px":`${s-.9}rem`;const g=`
		width: ${h};
		height: ${h};
		left: ${a}rem;
		top: ${o}rem;
		right: ${m}rem;
		bototm: ${c}rem;
	`;return n.$$set=e=>{"loadingStyle"in e&&l(0,i=e.loadingStyle),"size"in e&&l(2,s=e.size),"left"in e&&l(3,a=e.left),"top"in e&&l(4,o=e.top),"right"in e&&l(5,m=e.right),"bototm"in e&&l(6,c=e.bototm)},[i,g,s,a,o,m,c]}class x extends u{constructor(t){super(),y(this,t,q,k,S,{loadingStyle:0,size:2,left:3,top:4,right:5,bototm:6})}}export{x as L};
