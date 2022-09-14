import{a3 as C,U as $,E as M}from"./paths-8e1e5da9.js";function P(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function w(t){const e=t-1;return e*e*e+1}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function S(t,e){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(s[n[o]]=t[n[o]]);return s}function q(t,{delay:e=0,duration:s=400,easing:n=C}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:s,easing:n,css:y=>`opacity: ${y*o}`}}function B(t,{delay:e=0,duration:s=400,easing:n=w,start:o=0,opacity:y=0}={}){const l=getComputedStyle(t),r=+l.opacity,a=l.transform==="none"?"":l.transform,d=1-o,i=r*(1-y);return{delay:e,duration:s,easing:n,css:(c,u)=>`
			transform: ${a} scale(${1-d*u});
			opacity: ${r-i*u}
		`}}function E(t){var{fallback:e}=t,s=S(t,["fallback"]);const n=new Map,o=new Map;function y(r,a,d){const{delay:i=0,duration:c=f=>Math.sqrt(f)*30,easing:u=w}=$($({},s),d),p=a.getBoundingClientRect(),g=r.left-p.left,h=r.top-p.top,k=r.width/p.width,m=r.height/p.height,x=Math.sqrt(g*g+h*h),b=getComputedStyle(a),_=b.transform==="none"?"":b.transform,v=+b.opacity;return{delay:i,duration:M(c)?c(x):c,easing:u,css:(f,O)=>`
				opacity: ${f*v};
				transform-origin: top left;
				transform: ${_} translate(${O*g}px,${O*h}px) scale(${f+(1-f)*k}, ${f+(1-f)*m});
			`}}function l(r,a,d){return(i,c)=>(r.set(c.key,{rect:i.getBoundingClientRect()}),()=>{if(a.has(c.key)){const{rect:u}=a.get(c.key);return a.delete(c.key),y(u,i,c)}return r.delete(c.key),e&&e(i,c,d)})}return[l(o,n,!1),l(n,o,!0)]}export{P as a,E as c,q as f,B as s};
