import{S as u,i as m,s as _,a7 as g,aa as l,v as p,w as d,x as b,ab as h,f as C,t as T,y as k}from"../../../../../chunks/paths-8e1e5da9.js";import{C as w}from"../../../../../chunks/ContentContainer-cc97c7ad.js";function S(r){let t,e,o;function f(n){r[5](n)}let s={errors:r[0],source:r[2],isTeam:r[3]};return r[1]!==void 0&&(s.content=r[1]),t=new w({props:s}),g.push(()=>l(t,"content",f)),{c(){p(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,a){b(t,n,a),o=!0},p(n,[a]){const c={};a&1&&(c.errors=n[0]),a&4&&(c.source=n[2]),a&8&&(c.isTeam=n[3]),!e&&a&2&&(e=!0,c.content=n[1],h(()=>e=!1)),t.$set(c)},i(n){o||(C(t.$$.fragment,n),o=!0)},o(n){T(t.$$.fragment,n),o=!1},d(n){k(t,n)}}}function q(r,t,e){let{data:o}=t,{errors:f}=t,{todo:s,source:n,isTeam:a}=o;function c(i){s=i,e(1,s),e(4,o)}return r.$$set=i=>{"data"in i&&e(4,o=i.data),"errors"in i&&e(0,f=i.errors)},r.$$.update=()=>{r.$$.dirty&16&&e(1,{todo:s,source:n,isTeam:a}=o,s,(e(2,n),e(4,o)),(e(3,a),e(4,o)))},[f,s,n,a,o,c]}class y extends u{constructor(t){super(),m(this,t,q,S,_,{data:4,errors:0})}}export{y as default};