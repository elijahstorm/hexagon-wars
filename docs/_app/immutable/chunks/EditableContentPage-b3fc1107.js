import{S as re,i as se,s as oe,k as H,q as te,a as M,v as P,l as z,m as X,r as ne,h as b,c as j,w as A,n as F,a6 as Ce,b as v,I as $,x as U,O as Se,u as me,g as pe,t as p,d as _e,f as _,y as I,D as et,a7 as tt,B as m,G as Y,J,K as Q,L as Z,Q as ae,e as q,H as nt,R as Be}from"./paths-8e1e5da9.js";import{P as rt}from"./ProtectedPage-7e6e184c.js";import{L as De}from"./Loader-9d4b2fab.js";import{p as st,i as ot,f as it}from"./auth-176b2987.js";import{c as ue,a as lt,g as at,_ as ut,C as ct,r as Ee,S as ft,F as dt}from"./session-a18d45eb.js";import{I as ge}from"./Icon-16b3e5ee.js";import{F as ht}from"./Casing-f11dea70.js";import{T as mt}from"./TodoContent-da4f2f40.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="firebasestorage.googleapis.com",Fe="storageBucket",pt=2*60*1e3,_t=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w extends dt{constructor(e,r){super(ce(e),`Firebase Storage: ${r} (${ce(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,w.prototype)}_codeEquals(e){return ce(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ce(t){return"storage/"+t}function be(){const t="An unknown error occurred, please check the error payload for server response.";return new w("unknown",t)}function gt(t){return new w("object-not-found","Object '"+t+"' does not exist.")}function bt(t){return new w("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kt(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new w("unauthenticated",t)}function wt(){return new w("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Tt(t){return new w("unauthorized","User does not have permission to access '"+t+"'.")}function yt(){return new w("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Rt(){return new w("canceled","User canceled the upload/download.")}function Ct(t){return new w("invalid-url","Invalid URL '"+t+"'.")}function St(t){return new w("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Et(){return new w("no-default-bucket","No default bucket found. Did you set the '"+Fe+"' property when initializing the app?")}function vt(){return new w("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Pt(){return new w("no-download-url","The given file does not have any download URLs.")}function de(t){return new w("invalid-argument",t)}function Ne(){return new w("app-deleted","The Firebase app was deleted.")}function At(t){return new w("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ee(t,e){return new w("invalid-format","String does not match format '"+t+"': "+e)}function x(t){throw new w("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,r){this.bucket=e,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,r){let n;try{n=O.makeFromUrl(e,r)}catch{return new O(e,"")}if(n.path==="")return n;throw St(e)}static makeFromUrl(e,r){let n=null;const s="([A-Za-z0-9.\\-_]+)";function o(f){f.path.charAt(f.path.length-1)==="/"&&(f.path_=f.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+s+i,"i"),l={bucket:1,path:3};function u(f){f.path_=decodeURIComponent(f.path)}const c="v[A-Za-z0-9_]+",d=r.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${c}/b/${s}/o${y}`,"i"),C={bucket:1,path:3},B=r===Le?"(?:storage.googleapis.com|storage.cloud.google.com)":r,R="([^?#]*)",h=new RegExp(`^https?://${B}/${s}/${R}`,"i"),S=[{regex:a,indices:l,postModify:o},{regex:g,indices:C,postModify:u},{regex:h,indices:{bucket:1,path:2},postModify:u}];for(let f=0;f<S.length;f++){const k=S[f],D=k.regex.exec(e);if(D){const L=D[k.indices.bucket];let V=D[k.indices.path];V||(V=""),n=new O(L,V),k.postModify(n);break}}if(n==null)throw Ct(e);return n}}class Ut{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e,r){let n=1,s=null,o=null,i=!1,a=0;function l(){return a===2}let u=!1;function c(...R){u||(u=!0,e.apply(null,R))}function d(R){s=setTimeout(()=>{s=null,t(g,l())},R)}function y(){o&&clearTimeout(o)}function g(R,...h){if(u){y();return}if(R){y(),c.call(null,R,...h);return}if(l()||i){y(),c.call(null,R,...h);return}n<64&&(n*=2);let S;a===1?(a=2,S=0):S=(n+Math.random())*1e3,d(S)}let C=!1;function B(R){C||(C=!0,y(),!u&&(s!==null?(R||(a=2),clearTimeout(s),d(0)):R||(a=1)))}return d(0),o=setTimeout(()=>{i=!0,B(!0)},r),B}function $t(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t!==void 0}function Bt(t){return typeof t=="object"&&!Array.isArray(t)}function ke(t){return typeof t=="string"||t instanceof String}function ve(t){return we()&&t instanceof Blob}function we(){return typeof Blob<"u"}function Pe(t,e,r,n){if(n<e)throw de(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>r)throw de(`Invalid value for '${t}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,e,r){let n=e;return r==null&&(n=`https://${e}`),`${r}://${n}/v0${t}`}function Me(t){const e=encodeURIComponent;let r="?";for(const n in t)if(t.hasOwnProperty(n)){const s=e(n)+"="+e(t[n]);r=r+s+"&"}return r=r.slice(0,-1),r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(G||(G={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,r,n,s,o,i,a,l,u,c,d){this.url_=e,this.method_=r,this.headers_=n,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,g)=>{this.resolve_=y,this.reject_=g,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new ie(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===G.NO_ERROR,l=o.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=o.getErrorCode()===G.ABORT;n(!1,new ie(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;n(!0,new ie(u,o))})},r=(n,s)=>{const o=this.resolve_,i=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Ot(l)?o(l):o()}catch(l){i(l)}else if(a!==null){const l=be();l.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,l)):i(l)}else if(s.canceled){const l=this.appDelete_?Ne():Rt();i(l)}else{const l=yt();i(l)}};this.canceled_?r(!1,new ie(!1,null,!0)):this.backoffId_=It(e,r,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$t(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const r=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,o=this.additionalRetryCodes_.indexOf(e)!==-1;return r||s||o}}class ie{constructor(e,r,n){this.wasSuccessCode=e,this.connection=r,this.canceled=!!n}}function Lt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ft(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Nt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Mt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jt(t,e,r,n,s,o){const i=Me(t.urlParams),a=t.url+i,l=Object.assign({},t.headers);return Nt(l,e),Lt(l,r),Ft(l,o),Mt(l,n),new Dt(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ht(...t){const e=qt();if(e!==void 0){const r=new e;for(let n=0;n<t.length;n++)r.append(t[n]);return r.getBlob()}else{if(we())return new Blob(t);throw new w("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function zt(t,e,r){return t.webkitSlice?t.webkitSlice(e,r):t.mozSlice?t.mozSlice(e,r):t.slice?t.slice(e,r):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fe{constructor(e,r){this.data=e,this.contentType=r||null}}function Xt(t,e){switch(t){case N.RAW:return new fe(je(e));case N.BASE64:case N.BASE64URL:return new fe(qe(t,e));case N.DATA_URL:return new fe(Kt(e),Vt(e))}throw be()}function je(t){const e=[];for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(r<t.length-1&&(t.charCodeAt(r+1)&64512)===56320))e.push(239,191,189);else{const o=n,i=t.charCodeAt(++r);n=65536|(o&1023)<<10|i&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function Gt(t){let e;try{e=decodeURIComponent(t)}catch{throw ee(N.DATA_URL,"Malformed data URL.")}return je(e)}function qe(t,e){switch(t){case N.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw ee(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case N.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw ee(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=Wt(e)}catch{throw ee(t,"Invalid character found")}const n=new Uint8Array(r.length);for(let s=0;s<r.length;s++)n[s]=r.charCodeAt(s);return n}class He{constructor(e){this.base64=!1,this.contentType=null;const r=e.match(/^data:([^,]+)?,/);if(r===null)throw ee(N.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=r[1]||null;n!=null&&(this.base64=Yt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function Kt(t){const e=new He(t);return e.base64?qe(N.BASE64,e.rest):Gt(e.rest)}function Vt(t){return new He(t).contentType}function Yt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,r){let n=0,s="";ve(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(r?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(r?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,r){if(ve(this.data_)){const n=this.data_,s=zt(n,e,r);return s===null?null:new W(s)}else{const n=new Uint8Array(this.data_.buffer,e,r-e);return new W(n,!0)}}static getBlob(...e){if(we()){const r=e.map(n=>n instanceof W?n.data_:n);return new W(Ht.apply(null,r))}else{const r=e.map(i=>ke(i)?Xt(N.RAW,i).data:i.data_);let n=0;r.forEach(i=>{n+=i.byteLength});const s=new Uint8Array(n);let o=0;return r.forEach(i=>{for(let a=0;a<i.length;a++)s[o++]=i[a]}),new W(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){let e;try{e=JSON.parse(t)}catch{return null}return Bt(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Qt(t,e){const r=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?r:t+"/"+r}function We(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){return e}class E{constructor(e,r,n,s){this.server=e,this.local=r||e,this.writable=!!n,this.xform=s||Zt}}let le=null;function xt(t){return!ke(t)||t.length<2?t:We(t)}function Xe(){if(le)return le;const t=[];t.push(new E("bucket")),t.push(new E("generation")),t.push(new E("metageneration")),t.push(new E("name","fullPath",!0));function e(o,i){return xt(i)}const r=new E("name");r.xform=e,t.push(r);function n(o,i){return i!==void 0?Number(i):i}const s=new E("size");return s.xform=n,t.push(s),t.push(new E("timeCreated")),t.push(new E("updated")),t.push(new E("md5Hash",null,!0)),t.push(new E("cacheControl",null,!0)),t.push(new E("contentDisposition",null,!0)),t.push(new E("contentEncoding",null,!0)),t.push(new E("contentLanguage",null,!0)),t.push(new E("contentType",null,!0)),t.push(new E("metadata","customMetadata",!0)),le=t,le}function en(t,e){function r(){const n=t.bucket,s=t.fullPath,o=new O(n,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:r})}function tn(t,e,r){const n={};n.type="file";const s=r.length;for(let o=0;o<s;o++){const i=r[o];n[i.local]=i.xform(n,e[i.server])}return en(n,t),n}function Ge(t,e,r){const n=ze(e);return n===null?null:tn(t,n,r)}function nn(t,e,r,n){const s=ze(e);if(s===null||!ke(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(u=>{const c=t.bucket,d=t.fullPath,y="/b/"+i(c)+"/o/"+i(d),g=Te(y,r,n),C=Me({alt:"media",token:u});return g+C})[0]}function rn(t,e){const r={},n=e.length;for(let s=0;s<n;s++){const o=e[s];o.writable&&(r[o.server]=t[o.local])}return JSON.stringify(r)}class Ke{constructor(e,r,n,s){this.url=e,this.method=r,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){if(!t)throw be()}function sn(t,e){function r(n,s){const o=Ge(t,s,e);return Ve(o!==null),o}return r}function on(t,e){function r(n,s){const o=Ge(t,s,e);return Ve(o!==null),nn(o,s,t.host,t._protocol)}return r}function Ye(t){function e(r,n){let s;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?s=wt():s=kt():r.getStatus()===402?s=bt(t.bucket):r.getStatus()===403?s=Tt(t.path):s=n,s.serverResponse=n.serverResponse,s}return e}function ln(t){const e=Ye(t);function r(n,s){let o=e(n,s);return n.getStatus()===404&&(o=gt(t.path)),o.serverResponse=s.serverResponse,o}return r}function an(t,e,r){const n=e.fullServerUrl(),s=Te(n,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new Ke(s,o,on(t,r),i);return a.errorHandler=ln(e),a}function un(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function cn(t,e,r){const n=Object.assign({},r);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=un(null,e)),n}function fn(t,e,r,n,s){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let f=0;f<2;f++)S=S+Math.random().toString().slice(2);return S}const l=a();i["Content-Type"]="multipart/related; boundary="+l;const u=cn(e,n,s),c=rn(u,r),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,y=`\r
--`+l+"--",g=W.getBlob(d,n,y);if(g===null)throw vt();const C={name:u.fullPath},B=Te(o,t.host,t._protocol),R="POST",h=t.maxUploadRetryTime,T=new Ke(B,R,sn(t,r),h);return T.urlParams=C,T.headers=i,T.body=g.uploadData(),T.errorHandler=Ye(e),T}class dn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=G.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=G.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=G.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,r,n,s){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class hn extends dn{initXhr(){this.xhr_.responseType="text"}}function Je(){return new hn}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,r){this._service=e,r instanceof O?this._location=r:this._location=O.makeFromUrl(r,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,r){return new K(e,r)}get root(){const e=new O(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return We(this._location.path)}get storage(){return this._service}get parent(){const e=Jt(this._location.path);if(e===null)return null;const r=new O(this._location.bucket,e);return new K(this._service,r)}_throwIfRoot(e){if(this._location.path==="")throw At(e)}}function mn(t,e,r){t._throwIfRoot("uploadBytes");const n=fn(t.storage,t._location,Xe(),new W(e,!0),r);return t.storage.makeRequestWithTokens(n,Je).then(s=>({metadata:s,ref:t}))}function pn(t){t._throwIfRoot("getDownloadURL");const e=an(t.storage,t._location,Xe());return t.storage.makeRequestWithTokens(e,Je).then(r=>{if(r===null)throw Pt();return r})}function _n(t,e){const r=Qt(t._location.path,e),n=new O(t._location.bucket,r);return new K(t.storage,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){return/^[A-Za-z]+:\/\//.test(t)}function bn(t,e){return new K(t,e)}function Qe(t,e){if(t instanceof ye){const r=t;if(r._bucket==null)throw Et();const n=new K(r,r._bucket);return e!=null?Qe(n,e):n}else return e!==void 0?_n(t,e):t}function kn(t,e){if(e&&gn(e)){if(t instanceof ye)return bn(t,e);throw de("To use ref(service, url), the first argument must be a Storage instance.")}else return Qe(t,e)}function Ae(t,e){const r=e==null?void 0:e[Fe];return r==null?null:O.makeFromBucketSpec(r,t)}class ye{constructor(e,r,n,s,o){this.app=e,this._authProvider=r,this._appCheckProvider=n,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Le,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pt,this._maxUploadRetryTime=_t,this._requests=new Set,s!=null?this._bucket=O.makeFromBucketSpec(s,this._host):this._bucket=Ae(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=O.makeFromBucketSpec(this._url,e):this._bucket=Ae(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pe("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pe("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const r=await e.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new K(this,e)}_makeRequest(e,r,n,s){if(this._deleted)return new Ut(Ne());{const o=jt(e,this._appId,n,s,r,this._firebaseVersion);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,r){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,r,n,s).getPromise()}}const Ue="@firebase/storage",Ie="0.9.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="storage";function wn(t,e,r){return t=ue(t),mn(t,e,r)}function Tn(t){return t=ue(t),pn(t)}function yn(t,e){return t=ue(t),kn(t,e)}function Rn(t=at(),e){return t=ue(t),lt(t,Ze).getImmediate({identifier:e})}function Cn(t,{instanceIdentifier:e}){const r=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ye(r,n,s,e,ft)}function Sn(){ut(new ct(Ze,Cn,"PUBLIC").setMultipleInstances(!0)),Ee(Ue,Ie,""),Ee(Ue,Ie,"esm2017")}Sn();const En=Rn(),vn=t=>e=>t(En,e),Pn=(t,e)=>r=>t(r,e),An=({blob:t,source:e=null,type:r=null,isTeam:n=!1})=>st(ot({source:e,type:r,isTeam:n}),vn(yn),Pn(wn,t)),Un=async t=>Tn(await(await An(t)).ref);function In(t){let e,r;return e=new ge({props:{icon:"ic:round-cloud-done",width:Re,color:"var(--primary)"}}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p:m,i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){p(e.$$.fragment,n),r=!1},d(n){I(e,n)}}}function $n(t){let e,r,n,s,o;return e=new ge({props:{icon:"akar-icons:triangle-alert-fill",width:Re,color:"var(--error)"}}),{c(){P(e.$$.fragment),r=M(),n=H("p"),s=te(t[3]),this.h()},l(i){A(e.$$.fragment,i),r=j(i),n=z(i,"P",{class:!0});var a=X(n);s=ne(a,t[3]),a.forEach(b),this.h()},h(){F(n,"class","error svelte-1ot7pra")},m(i,a){U(e,i,a),v(i,r,a),v(i,n,a),$(n,s),o=!0},p(i,a){(!o||a&8)&&me(s,i[3])},i(i){o||(_(e.$$.fragment,i),o=!0)},o(i){p(e.$$.fragment,i),o=!1},d(i){I(e,i),i&&b(r),i&&b(n)}}}function On(t){let e,r;return e=new De({props:{loadingStyle:"bar"}}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p:m,i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){p(e.$$.fragment,n),r=!1},d(n){I(e,n)}}}function Bn(t){let e,r;return e=new ge({props:{icon:Fn,width:Re}}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p:m,i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){p(e.$$.fragment,n),r=!1},d(n){I(e,n)}}}function Dn(t){let e,r,n,s,o,i,a,l,u,c,d,y,g,C,B,R;a=new ht({props:{src:t[0],alt:t[1],fallback:xe}});const h=[Bn,On,$n,In],T=[];function S(f,k){return f[4]=="ready"?0:f[4]=="uploading"?1:f[4]=="failed"?2:f[4]=="finished"?3:-1}return~(c=S(t))&&(d=T[c]=h[c](t)),{c(){e=H("section"),r=H("h1"),n=te("Change "),s=te(t[1]),o=M(),i=H("div"),P(a.$$.fragment),l=M(),u=H("div"),d&&d.c(),y=M(),g=H("input"),this.h()},l(f){e=z(f,"SECTION",{class:!0});var k=X(e);r=z(k,"H1",{class:!0});var D=X(r);n=ne(D,"Change "),s=ne(D,t[1]),D.forEach(b),o=j(k),i=z(k,"DIV",{class:!0});var L=X(i);A(a.$$.fragment,L),l=j(L),u=z(L,"DIV",{class:!0});var V=X(u);d&&d.l(V),V.forEach(b),L.forEach(b),y=j(k),g=z(k,"INPUT",{type:!0,accept:!0,class:!0}),k.forEach(b),this.h()},h(){F(r,"class","svelte-1ot7pra"),F(u,"class","upload svelte-1ot7pra"),Ce(u,"status",t[4]!="ready"),F(i,"class","image-uploader-container svelte-1ot7pra"),F(g,"type","file"),F(g,"accept",Ln),F(g,"class","svelte-1ot7pra"),F(e,"class","svelte-1ot7pra")},m(f,k){v(f,e,k),$(e,r),$(r,n),$(r,s),$(e,o),$(e,i),U(a,i,null),$(i,l),$(i,u),~c&&T[c].m(u,null),$(e,y),$(e,g),t[13](g),C=!0,B||(R=[Se(i,"click",t[6]),Se(g,"change",t[5])],B=!0)},p(f,[k]){(!C||k&2)&&me(s,f[1]);const D={};k&1&&(D.src=f[0]),k&2&&(D.alt=f[1]),a.$set(D);let L=c;c=S(f),c===L?~c&&T[c].p(f,k):(d&&(pe(),p(T[L],1,1,()=>{T[L]=null}),_e()),~c?(d=T[c],d?d.p(f,k):(d=T[c]=h[c](f),d.c()),_(d,1),d.m(u,null)):d=null),(!C||k&16)&&Ce(u,"status",f[4]!="ready")},i(f){C||(_(a.$$.fragment,f),_(d),C=!0)},o(f){p(a.$$.fragment,f),p(d),C=!1},d(f){f&&b(e),I(a),~c&&T[c].d(),t[13](null),B=!1,et(R)}}}const xe="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",Ln=".jpg, .jpeg, .png, .svg",Fn="akar-icons:cloud-upload",Re="3rem";function Nn(t,e,r){let{id:n}=e,{source:s=null}=e,{type:o=null}=e,{isTeam:i}=e,{src:a=xe}=e,{alt:l}=e,{dest:u="picture"}=e,{oncomplete:c=()=>{}}=e,d,y=null,g="ready";const C=async h=>{const T=h.target.files[0],S=new FileReader;S.readAsDataURL(T),S.onload=f=>{r(0,a=f.target.result)},r(4,g="uploading");try{const f=(await Un({type:o,source:s,isTeam:i,id:`${n}/${T.name}`,blob:T})).replace("https://firebasestorage.googleapis.com/v0/b/hexagon-wars.appx","");await it({type:o,id:n,source:s,isTeam:i,content:{[u]:f},timestamp:"updatedOn"}),r(4,g="finished"),c()}catch(f){r(4,g="failed"),r(3,y=f)}},B=()=>{d.click()};function R(h){tt[h?"unshift":"push"](()=>{d=h,r(2,d)})}return t.$$set=h=>{"id"in h&&r(7,n=h.id),"source"in h&&r(8,s=h.source),"type"in h&&r(9,o=h.type),"isTeam"in h&&r(10,i=h.isTeam),"src"in h&&r(0,a=h.src),"alt"in h&&r(1,l=h.alt),"dest"in h&&r(11,u=h.dest),"oncomplete"in h&&r(12,c=h.oncomplete)},[a,l,d,y,g,C,B,n,s,o,i,u,c,R]}class he extends re{constructor(e){super(),se(this,e,Nn,Dn,oe,{id:7,source:8,type:9,isTeam:10,src:0,alt:1,dest:11,oncomplete:12})}}function Mn(t){let e,r,n;const s=t[4].default,o=Y(s,t,t[3],null);return r=new he({props:{src:t[0].picture,alt:"background",id:t[2],source:jn,isTeam:t[1]}}),{c(){o&&o.c(),e=M(),P(r.$$.fragment)},l(i){o&&o.l(i),e=j(i),A(r.$$.fragment,i)},m(i,a){o&&o.m(i,a),v(i,e,a),U(r,i,a),n=!0},p(i,[a]){o&&o.p&&(!n||a&8)&&J(o,s,i,i[3],n?Z(s,i[3],a,null):Q(i[3]),null);const l={};a&1&&(l.src=i[0].picture),a&2&&(l.isTeam=i[1]),r.$set(l)},i(i){n||(_(o,i),_(r.$$.fragment,i),n=!0)},o(i){p(o,i),p(r.$$.fragment,i),n=!1},d(i){o&&o.d(i),i&&b(e),I(r,i)}}}const jn=null;function qn(t,e,r){let{$$slots:n={},$$scope:s}=e,{team:o}=e,{isTeam:i}=e;const{id:a}=o;return t.$$set=l=>{"team"in l&&r(0,o=l.team),"isTeam"in l&&r(1,i=l.isTeam),"$$scope"in l&&r(3,s=l.$$scope)},[o,i,a,s,n]}class Hn extends re{constructor(e){super(),se(this,e,qn,Mn,oe,{team:0,isTeam:1})}}function zn(t){let e,r,n;const s=t[4].default,o=Y(s,t,t[3],null);return r=new mt({props:{todo:t[0],source:t[1],isTeam:t[2]}}),{c(){o&&o.c(),e=M(),P(r.$$.fragment)},l(i){o&&o.l(i),e=j(i),A(r.$$.fragment,i)},m(i,a){o&&o.m(i,a),v(i,e,a),U(r,i,a),n=!0},p(i,[a]){o&&o.p&&(!n||a&8)&&J(o,s,i,i[3],n?Z(s,i[3],a,null):Q(i[3]),null);const l={};a&1&&(l.todo=i[0]),a&2&&(l.source=i[1]),a&4&&(l.isTeam=i[2]),r.$set(l)},i(i){n||(_(o,i),_(r.$$.fragment,i),n=!0)},o(i){p(o,i),p(r.$$.fragment,i),n=!1},d(i){o&&o.d(i),i&&b(e),I(r,i)}}}function Wn(t,e,r){let{$$slots:n={},$$scope:s}=e,{todo:o}=e,{source:i=null}=e,{isTeam:a}=e;return t.$$set=l=>{"todo"in l&&r(0,o=l.todo),"source"in l&&r(1,i=l.source),"isTeam"in l&&r(2,a=l.isTeam),"$$scope"in l&&r(3,s=l.$$scope)},[o,i,a,s,n]}class Xn extends re{constructor(e){super(),se(this,e,Wn,zn,oe,{todo:0,source:1,isTeam:2})}}function Gn(t){let e,r,n,s,o;const i=t[4].default,a=Y(i,t,t[3],null);return r=new he({props:{src:t[0].picture,alt:"profile",id:t[2],source:$e,isTeam:t[1]}}),s=new he({props:{src:t[0].background,dest:"background",alt:"background",id:t[2],source:$e,isTeam:t[1]}}),{c(){a&&a.c(),e=M(),P(r.$$.fragment),n=M(),P(s.$$.fragment)},l(l){a&&a.l(l),e=j(l),A(r.$$.fragment,l),n=j(l),A(s.$$.fragment,l)},m(l,u){a&&a.m(l,u),v(l,e,u),U(r,l,u),v(l,n,u),U(s,l,u),o=!0},p(l,[u]){a&&a.p&&(!o||u&8)&&J(a,i,l,l[3],o?Z(i,l[3],u,null):Q(l[3]),null);const c={};u&1&&(c.src=l[0].picture),u&2&&(c.isTeam=l[1]),r.$set(c);const d={};u&1&&(d.src=l[0].background),u&2&&(d.isTeam=l[1]),s.$set(d)},i(l){o||(_(a,l),_(r.$$.fragment,l),_(s.$$.fragment,l),o=!0)},o(l){p(a,l),p(r.$$.fragment,l),p(s.$$.fragment,l),o=!1},d(l){a&&a.d(l),l&&b(e),I(r,l),l&&b(n),I(s,l)}}}const $e=null;function Kn(t,e,r){let{$$slots:n={},$$scope:s}=e,{user:o}=e,{isTeam:i}=e;const{id:a}=o;return t.$$set=l=>{"user"in l&&r(0,o=l.user),"isTeam"in l&&r(1,i=l.isTeam),"$$scope"in l&&r(3,s=l.$$scope)},[o,i,a,s,n]}class Vn extends re{constructor(e){super(),se(this,e,Kn,Gn,oe,{user:0,isTeam:1})}}function Yn(t){return{c:m,l:m,m,p:m,d:m}}function Jn(t){let e,r=t[3]&&Oe(t);return{c(){r&&r.c(),e=q()},l(n){r&&r.l(n),e=q()},m(n,s){r&&r.m(n,s),v(n,e,s)},p(n,s){n[3]?r||(r=Oe(n),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(n){r&&r.d(n),n&&b(e)}}}function Oe(t){return document.title="Edit | "+t[3].title+" | Haja: Do Together",{c:m,l:m,m,d:m}}function Qn(t){return{c:m,l:m,m,p:m,d:m}}function Zn(t){var a;let e,r=((a=t[0])!=null?a:"Sorry, we can't find what you're looking for \u{1F50E}")+"",n,s,o,i;return{c(){e=H("p"),n=te(r),s=M(),o=H("p"),i=te("You may need to login to view this content"),this.h()},l(l){e=z(l,"P",{class:!0});var u=X(e);n=ne(u,r),u.forEach(b),s=j(l),o=z(l,"P",{class:!0});var c=X(o);i=ne(c,"You may need to login to view this content"),c.forEach(b),this.h()},h(){F(e,"class","svelte-w4ck9r"),F(o,"class","svelte-w4ck9r")},m(l,u){v(l,e,u),$(e,n),v(l,s,u),v(l,o,u),$(o,i)},p(l,u){var c;u&1&&r!==(r=((c=l[0])!=null?c:"Sorry, we can't find what you're looking for \u{1F50E}")+"")&&me(n,r)},i:m,o:m,d(l){l&&b(e),l&&b(s),l&&b(o)}}}function xn(t){let e,r,n,s={ctx:t,current:null,token:null,hasCatch:!1,pending:ar,then:tr,catch:er,value:3,blocks:[,,,]};return ae(r=t[3],s),{c(){e=q(),s.block.c()},l(o){e=q(),s.block.l(o)},m(o,i){v(o,e,i),s.block.m(o,s.anchor=i),s.mount=()=>e.parentNode,s.anchor=e,n=!0},p(o,i){t=o,s.ctx=t,i&8&&r!==(r=t[3])&&ae(r,s)||Be(s,t,i)},i(o){n||(_(s.block),n=!0)},o(o){for(let i=0;i<3;i+=1){const a=s.blocks[i];p(a)}n=!1},d(o){o&&b(e),s.block.d(o),s.token=null,s=null}}}function er(t){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function tr(t){let e,r,n,s;const o=[sr,rr,nr],i=[];function a(l,u){return l[3].contentType=="team"?0:l[3].contentType=="user"?1:l[3].contentType=="todo"?2:-1}return~(e=a(t))&&(r=i[e]=o[e](t)),{c(){r&&r.c(),n=q()},l(l){r&&r.l(l),n=q()},m(l,u){~e&&i[e].m(l,u),v(l,n,u),s=!0},p(l,u){let c=e;e=a(l),e===c?~e&&i[e].p(l,u):(r&&(pe(),p(i[c],1,1,()=>{i[c]=null}),_e()),~e?(r=i[e],r?r.p(l,u):(r=i[e]=o[e](l),r.c()),_(r,1),r.m(n.parentNode,n)):r=null)},i(l){s||(_(r),s=!0)},o(l){p(r),s=!1},d(l){~e&&i[e].d(l),l&&b(n)}}}function nr(t){let e,r;return e=new Xn({props:{todo:t[3],source:t[1],isTeam:t[2],$$slots:{default:[or]},$$scope:{ctx:t}}}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p(n,s){const o={};s&8&&(o.todo=n[3]),s&2&&(o.source=n[1]),s&4&&(o.isTeam=n[2]),s&32&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){p(e.$$.fragment,n),r=!1},d(n){I(e,n)}}}function rr(t){let e,r;return e=new Vn({props:{user:t[3],isTeam:t[2],$$slots:{default:[ir]},$$scope:{ctx:t}}}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p(n,s){const o={};s&8&&(o.user=n[3]),s&4&&(o.isTeam=n[2]),s&32&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){p(e.$$.fragment,n),r=!1},d(n){I(e,n)}}}function sr(t){let e,r;return e=new Hn({props:{team:t[3],isTeam:t[2],$$slots:{default:[lr]},$$scope:{ctx:t}}}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p(n,s){const o={};s&8&&(o.team=n[3]),s&4&&(o.isTeam=n[2]),s&32&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){p(e.$$.fragment,n),r=!1},d(n){I(e,n)}}}function or(t){let e;const r=t[4].default,n=Y(r,t,t[5],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),e=!0},p(s,o){n&&n.p&&(!e||o&32)&&J(n,r,s,s[5],e?Z(r,s[5],o,null):Q(s[5]),null)},i(s){e||(_(n,s),e=!0)},o(s){p(n,s),e=!1},d(s){n&&n.d(s)}}}function ir(t){let e;const r=t[4].default,n=Y(r,t,t[5],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),e=!0},p(s,o){n&&n.p&&(!e||o&32)&&J(n,r,s,s[5],e?Z(r,s[5],o,null):Q(s[5]),null)},i(s){e||(_(n,s),e=!0)},o(s){p(n,s),e=!1},d(s){n&&n.d(s)}}}function lr(t){let e;const r=t[4].default,n=Y(r,t,t[5],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),e=!0},p(s,o){n&&n.p&&(!e||o&32)&&J(n,r,s,s[5],e?Z(r,s[5],o,null):Q(s[5]),null)},i(s){e||(_(n,s),e=!0)},o(s){p(n,s),e=!1},d(s){n&&n.d(s)}}}function ar(t){let e,r;return e=new De({}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p:m,i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){p(e.$$.fragment,n),r=!1},d(n){I(e,n)}}}function ur(t){let e,r,n,s;const o=[xn,Zn],i=[];function a(l,u){return l[3]?0:1}return e=a(t),r=i[e]=o[e](t),{c(){r.c(),n=q()},l(l){r.l(l),n=q()},m(l,u){i[e].m(l,u),v(l,n,u),s=!0},p(l,u){let c=e;e=a(l),e===c?i[e].p(l,u):(pe(),p(i[c],1,1,()=>{i[c]=null}),_e(),r=i[e],r?r.p(l,u):(r=i[e]=o[e](l),r.c()),_(r,1),r.m(n.parentNode,n))},i(l){s||(_(r),s=!0)},o(l){p(r),s=!1},d(l){i[e].d(l),l&&b(n)}}}function cr(t){let e,r,n,s,o,i={ctx:t,current:null,token:null,hasCatch:!1,pending:Qn,then:Jn,catch:Yn,value:3};return ae(r=t[3],i),s=new rt({props:{$$slots:{default:[ur]},$$scope:{ctx:t}}}),{c(){e=q(),i.block.c(),n=M(),P(s.$$.fragment)},l(a){const l=nt('[data-svelte="svelte-a2tm1i"]',document.head);e=q(),i.block.l(l),l.forEach(b),n=j(a),A(s.$$.fragment,a)},m(a,l){$(document.head,e),i.block.m(document.head,i.anchor=null),i.mount=()=>e.parentNode,i.anchor=e,v(a,n,l),U(s,a,l),o=!0},p(a,[l]){t=a,i.ctx=t,l&8&&r!==(r=t[3])&&ae(r,i)||Be(i,t,l);const u={};l&47&&(u.$$scope={dirty:l,ctx:t}),s.$set(u)},i(a){o||(_(s.$$.fragment,a),o=!0)},o(a){p(s.$$.fragment,a),o=!1},d(a){b(e),i.block.d(),i.token=null,i=null,a&&b(n),I(s,a)}}}function fr(t,e,r){let{$$slots:n={},$$scope:s}=e,{content:o}=e,{errors:i}=e,{source:a=null}=e,{isTeam:l}=e;return t.$$set=u=>{"content"in u&&r(3,o=u.content),"errors"in u&&r(0,i=u.errors),"source"in u&&r(1,a=u.source),"isTeam"in u&&r(2,l=u.isTeam),"$$scope"in u&&r(5,s=u.$$scope)},[i,a,l,o,n,s]}class wr extends re{constructor(e){super(),se(this,e,fr,cr,oe,{content:3,errors:0,source:1,isTeam:2})}}export{wr as E};
