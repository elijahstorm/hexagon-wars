import{S as f,i as u,s as m,a7 as _,aa as l,v as d,w as g,x as p,ab as b,f as h,t as C,y as k}from"../../../../chunks/paths-8e1e5da9.js";import{C as w}from"../../../../chunks/ContentContainer-cc97c7ad.js";function y(o){let t,r,a;function c(n){o[3](n)}let s={errors:o[0],isTeam:!0};return o[1]!==void 0&&(s.content=o[1]),t=new w({props:s}),_.push(()=>l(t,"content",c)),{c(){d(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,e){p(t,n,e),a=!0},p(n,[e]){const i={};e&1&&(i.errors=n[0]),!r&&e&2&&(r=!0,i.content=n[1],b(()=>r=!1)),t.$set(i)},i(n){a||(h(t.$$.fragment,n),a=!0)},o(n){C(t.$$.fragment,n),a=!1},d(n){k(t,n)}}}function S(o,t,r){let{data:a}=t,{errors:c}=t,{team:s}=a;function n(e){s=e,r(1,s),r(2,a)}return o.$$set=e=>{"data"in e&&r(2,a=e.data),"errors"in e&&r(0,c=e.errors)},o.$$.update=()=>{o.$$.dirty&4&&r(1,{team:s}=a,s)},[c,s,a,n]}class T extends f{constructor(t){super(),u(this,t,S,y,m,{data:2,errors:0})}}export{T as default};
