import{r as is,i as Ka,_ as Ga,C as za,F as Ha,g as Qa,a as Wa,L as mt,S as Ya,b as Xa,c as Be,d as Ja,e as Za,f as eu,h as tu,j as nu,k as su,l as iu,o as ru,s as Cr,m as ou,n as au,p as uu,q as kr,G as hu,t as cu,u as lu}from"./session-a18d45eb.js";var du="firebase",fu="9.9.4";/**
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
 */is(du,fu,"app");const pu={apiKey:"AIzaSyBqz31KzWHkLbIT6miiuT0BbRqv7qgOS5s",authDomain:"hexagon-wars.firebaseapp.com",databaseURL:"https://hexagon-wars-default-rtdb.firebaseio.com",projectId:"hexagon-wars",storageBucket:"hexagon-wars.appspot.com",messagingSenderId:"646679875193",appId:"1:646679875193:web:59067c22897d877a2b0ea8",measurementId:"G-SQP0F3EQTN"},mu=Ka(pu),gu=t=>{var n;return(n={"auth/wrong-password":"The password is invalid or the user does not have a password.","auth/claims-too-large":"The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.","auth/email-already-exists":"The provided email is already in use by an existing user. Each user must have a unique email.","auth/id-token-expired":"The provided Firebase ID token is expired.","auth/id-token-revoked":"The Firebase ID token has been revoked.","auth/insufficient-permission":"The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.","auth/invalid-argument":"An invalid argument was provided to an Authentication method. The error message should contain additional information.","auth/invalid-claims":"The custom claim attributes provided to setCustomUserClaims() are invalid.","auth/invalid-creation-time":"The creation time must be a valid UTC date string.","auth/invalid-disabled-field":"The provided value for the disabled user property is invalid. It must be a boolean.","auth/invalid-display-name":"The provided value for the displayName user property is invalid. It must be a non-empty string.","auth/invalid-email-verified":"The provided value for the emailVerified user property is invalid. It must be a boolean.","auth/invalid-hash-algorithm":"The hash algorithm must match one of the strings in the list of supported algorithms.","auth/invalid-hash-block-size":"The hash block size must be a valid number.","auth/invalid-hash-derived-key-length":"The hash derived key length must be a valid number.","auth/invalid-hash-key":"The hash key must a valid byte buffer.","auth/invalid-hash-memory-cost":"The hash memory cost must be a valid number.","auth/invalid-hash-parallelization":"The hash parallelization must be a valid number.","auth/invalid-hash-rounds":"The hash rounds must be a valid number.","auth/invalid-hash-salt-separator":"The hashing algorithm salt separator field must be a valid byte buffer.","auth/invalid-id-token":"The provided ID token is not a valid Firebase ID token.","auth/invalid-last-sign-in-time":"The last sign-in time must be a valid UTC date string.","auth/invalid-page-token":"The provided next page token in listUsers() is invalid. It must be a valid non-empty string.","auth/invalid-password":"The provided value for the password user property is invalid. It must be a string with at least six characters.","auth/invalid-password-hash":"The password hash must be a valid byte buffer.","auth/invalid-password-salt":"The password salt must be a valid byte buffer","auth/invalid-photo-url":"The provided value for the photoURL user property is invalid. It must be a string URL.","auth/invalid-provider-data":"The providerData must be a valid array of UserInfo objects.","auth/invalid-oauth-responsetype":"Only exactly one OAuth responseType should be set to true.","auth/invalid-session-cookie-duration":"The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.","auth/invalid-uid":"The provided uid must be a non-empty string with at most 128 characters.","auth/invalid-user-import":"The user record to import is invalid.","auth/maximum-user-count-exceeded":"The maximum allowed number of users to import has been exceeded.","auth/missing-hash-algorithm":"Importing users with password hashes requires that the hashing algorithm and its parameters be provided.","auth/missing-uid":"A uid identifier is required for the current operation.","auth/missing-oauth-client-secret":"The OAuth configuration client secret is required to enable OIDC code flow.","auth/phone-number-already-exists":"The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.","auth/project-not-found":"No Firebase project was found for the credential used to initialize the Admin SDKs. Refer to Set up a Firebase project for documentation on how to generate a credential for your project and use it to authenticate the Admin SDKs.","auth/reserved-claims":"One or more custom user claims provided to setCustomUserClaims() are reserved. For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should not be used as keys for custom claims.","auth/session-cookie-expired":"The provided Firebase session cookie is expired.","auth/session-cookie-revoked":"The Firebase session cookie has been revoked.","auth/uid-already-exists":"The provided uid is already in use by an existing user. Each user must have a unique uid.","auth/admin-restricted-operation":"This operation is restricted to administrators only.","auth/app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","auth/app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","auth/captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","auth/code-expired":"The SMS code has expired. Please re-send the verification code to try again.","auth/cordova-not-ready":"Cordova framework is not ready.","auth/cors-unsupported":"This browser is not supported.","auth/credential-already-in-use":"This credential is already associated with a different user account.","auth/custom-token-mismatch":"The custom token corresponds to a different audience.","auth/requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","auth/dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","auth/dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","auth/email-change-needs-verification":"Multi-factor users must always have a verified email.","auth/email-already-in-use":"The email address is already in use by another account.","auth/emulator-config-failed":"Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling 'connectAuthEmulator()' sooner.","auth/expired-action-code":"The action code has expired.","auth/cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","auth/internal-error":"An internal AuthError has occurred.","auth/invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","auth/invalid-app-id":"The mobile app identifier is not registed for the current project.","auth/invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","auth/invalid-auth-event":"An internal AuthError has occurred.","auth/invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","auth/invalid-continue-uri":"The continue URL provided in the request is invalid.","auth/invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","auth/invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","auth/invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","auth/invalid-email":"The email address is badly formatted.","auth/invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","auth/invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","auth/invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","auth/invalid-credential":"The supplied auth credential is malformed or has expired.","auth/invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","auth/invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","auth/invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","auth/invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","auth/unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","auth/invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","auth/invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","auth/invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","auth/invalid-provider-id":"The specified provider ID is invalid.","auth/invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","auth/invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","auth/invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","auth/invalid-tenant-id":"The Auth instance's tenant ID is invalid.","auth/missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth/auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","auth/missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","auth/missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","auth/missing-continue-uri":"A continue URL must be provided in the request.","auth/missing-iframe-start":"An internal AuthError has occurred.","auth/missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","auth/missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","auth/missing-multi-factor-info":"No second factor identifier is provided.","auth/missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","auth/missing-phone-number":"To send verification codes, provide a phone number for the recipient.","auth/missing-verification-id":"The phone auth credential was created with an empty verification ID.","auth/app-deleted":"This instance of FirebaseApp has been deleted.","auth/multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","auth/multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","auth/account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","auth/network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","auth/no-auth-event":"An internal AuthError has occurred.","auth/no-such-provider":"User was not linked to an account with the given provider.","auth/null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","auth/operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","auth/operation-not-supported-in-this-environment":"This operation is not supported in the environment this application is running on. 'location.protocol' must be http, https or chrome-extension and web storage must be enabled.","auth/popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","auth/popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","auth/provider-already-linked":"User can only be linked to one identity for the given provider.","auth/quota-exceeded":"The project's quota for this operation has been exceeded.","auth/redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","auth/redirect-operation-pending":"A redirect sign-in operation is already pending.","auth/rejected-credential":"The request contains malformed or mismatching credentials.","auth/second-factor-already-in-use":"The second factor is already enrolled on this account.","auth/maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","auth/tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID","auth/timeout":"The operation has timed out.","auth/user-token-expired":"The user's credential is no longer valid. The user must sign in again.","auth/too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","auth/unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","auth/unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","auth/unsupported-persistence-type":"The current environment does not support the specified persistence type.","auth/unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","auth/unverified-email":"The operation requires a verified email.","auth/user-cancelled":"The user did not grant your application the permissions it requested.","auth/user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","auth/user-disabled":"The user account has been disabled by an administrator.","auth/user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","auth/weak-password":"The password must be 6 characters long or more.","auth/web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","auth/already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",cancelled:"The operation was cancelled (typically by the caller).",unknown:"Unknown error or an error from a different error domain.","invalid-argument":"Client specified an invalid argument. Note that this differs from 'failed-precondition'. 'invalid-argument' indicates arguments that are problematic regardless of the state of the system (e.g. an invalid field name).","deadline-exceeded":"Deadline expired before operation could complete. For operations that change the state of the system, this error may be returned even if the operation has completed successfully. For example, a successful response from a server could have been delayed long enough for the deadline to expire.","not-found":"Some requested document was not found.","already-exists":"Some document that we attempted to create already exists.","permission-denied":"The caller does not have permission to execute the specified operation.","resource-exhausted":"Some resource has been exhausted, perhaps a per-user quota, or perhaps the entire file system is out of space.","failed-precondition":"Operation was rejected because the system is not in a state required for the operation's execution.",aborted:"The operation was aborted, typically due to a concurrency issue like transaction aborts, etc.","out-of-range":"Operation was attempted past the valid range.",unimplemented:"Operation is not implemented or not supported/enabled.",internal:"Internal errors. Means some invariants expected by underlying system has been broken. If you see one of these errors, something is very broken.",unavailable:"The service is currently unavailable. This is most likely a transient condition and may be corrected by retrying with a backoff.","data-loss":"Unrecoverable data loss or corruption.",unauthenticated:"The request does not have valid authentication credentials for the operation."}[t])!=null?n:"unknown error"};var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,Cs=Cs||{},E=yu||self;function on(){}function rs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Nt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vu(t){return Object.prototype.hasOwnProperty.call(t,zn)&&t[zn]||(t[zn]=++wu)}var zn="closure_uid_"+(1e9*Math.random()>>>0),wu=0;function Tu(t,e,n){return t.call.apply(t.bind,arguments)}function Eu(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function K(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?K=Tu:K=Eu,K.apply(null,arguments)}function Qt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function H(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ee(){this.s=this.s,this.o=this.o}var Iu=0;Ee.prototype.s=!1;Ee.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Iu!=0)&&vu(this)};Ee.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Nr=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function Au(t){e:{var e=ph;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Ri(t){return Array.prototype.concat.apply([],arguments)}function ks(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function an(t){return/^[\s\xa0]*$/.test(t)}var _i=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function X(t,e){return t.indexOf(e)!=-1}function Hn(t,e){return t<e?-1:t>e?1:0}var J;e:{var Li=E.navigator;if(Li){var Oi=Li.userAgent;if(Oi){J=Oi;break e}}J=""}function Ds(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function xr(t){const e={};for(const n in t)e[n]=t[n];return e}var Mi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rr(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Mi.length;r++)n=Mi[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ns(t){return Ns[" "](t),t}Ns[" "]=on;function bu(t){var e=ku;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Su=X(J,"Opera"),$e=X(J,"Trident")||X(J,"MSIE"),_r=X(J,"Edge"),os=_r||$e,Lr=X(J,"Gecko")&&!(X(J.toLowerCase(),"webkit")&&!X(J,"Edge"))&&!(X(J,"Trident")||X(J,"MSIE"))&&!X(J,"Edge"),Cu=X(J.toLowerCase(),"webkit")&&!X(J,"Edge");function Or(){var t=E.document;return t?t.documentMode:void 0}var un;e:{var Qn="",Wn=function(){var t=J;if(Lr)return/rv:([^\);]+)(\)|;)/.exec(t);if(_r)return/Edge\/([\d\.]+)/.exec(t);if($e)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Cu)return/WebKit\/(\S+)/.exec(t);if(Su)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wn&&(Qn=Wn?Wn[1]:""),$e){var Yn=Or();if(Yn!=null&&Yn>parseFloat(Qn)){un=String(Yn);break e}}un=Qn}var ku={};function Du(){return bu(function(){let t=0;const e=_i(String(un)).split("."),n=_i("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Hn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Hn(i[2].length==0,r[2].length==0)||Hn(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var as;if(E.document&&$e){var Fi=Or();as=Fi||parseInt(un,10)||void 0}else as=void 0;var Nu=as,xu=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{E.addEventListener("test",on,e),E.removeEventListener("test",on,e)}catch{}return t}();function Y(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};function gt(t,e){if(Y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Lr){e:{try{Ns(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ru[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gt.Z.h.call(this)}}H(gt,Y);var Ru={2:"touch",3:"pen",4:"mouse"};gt.prototype.h=function(){gt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xt="closure_listenable_"+(1e6*Math.random()|0),_u=0;function Lu(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++_u,this.ca=this.fa=!1}function In(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function An(t){this.src=t,this.g={},this.h=0}An.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=hs(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Lu(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function us(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Dr(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(In(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hs(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var xs="closure_lm_"+(1e6*Math.random()|0),Xn={};function Mr(t,e,n,s,i){if(s&&s.once)return Pr(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Mr(t,e[r],n,s,i);return null}return n=Ls(n),t&&t[xt]?t.N(e,n,Nt(s)?!!s.capture:!!s,i):Fr(t,e,n,!1,s,i)}function Fr(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Nt(i)?!!i.capture:!!i,a=_s(t);if(a||(t[xs]=a=new An(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Ou(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)xu||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ur(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ou(){function t(n){return e.call(t.src,t.listener,n)}var e=Mu;return t}function Pr(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Pr(t,e[r],n,s,i);return null}return n=Ls(n),t&&t[xt]?t.O(e,n,Nt(s)?!!s.capture:!!s,i):Fr(t,e,n,!0,s,i)}function Vr(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Vr(t,e[r],n,s,i);else s=Nt(s)?!!s.capture:!!s,n=Ls(n),t&&t[xt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=hs(r,n,s,i),-1<n&&(In(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=_s(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hs(e,n,s,i)),(n=-1<t?e[t]:null)&&Rs(n))}function Rs(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[xt])us(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ur(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=_s(e))?(us(n,t),n.h==0&&(n.src=null,e[xs]=null)):In(t)}}}function Ur(t){return t in Xn?Xn[t]:Xn[t]="on"+t}function Mu(t,e){if(t.ca)t=!0;else{e=new gt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Rs(t),t=n.call(s,e)}return t}function _s(t){return t=t[xs],t instanceof An?t:null}var Jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ls(t){return typeof t=="function"?t:(t[Jn]||(t[Jn]=function(e){return t.handleEvent(e)}),t[Jn])}function B(){Ee.call(this),this.i=new An(this),this.P=this,this.I=null}H(B,Ee);B.prototype[xt]=!0;B.prototype.removeEventListener=function(t,e,n,s){Vr(this,t,e,n,s)};function G(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Y(e,t);else if(e instanceof Y)e.target=e.target||t;else{var i=e;e=new Y(s,t),Rr(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Wt(o,s,!0,e)&&i}if(o=e.g=t,i=Wt(o,s,!0,e)&&i,i=Wt(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Wt(o,s,!1,e)&&i}B.prototype.M=function(){if(B.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)In(n[s]);delete t.g[e],t.h--}}this.I=null};B.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};B.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Wt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&us(t.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Os=E.JSON.stringify;function Fu(){var t=Br;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pu{constructor(){this.h=this.g=null}add(e,n){const s=qr.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var qr=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Vu,t=>t.reset());class Vu{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Uu(t){E.setTimeout(()=>{throw t},0)}function Ms(t,e){cs||qu(),ls||(cs(),ls=!0),Br.add(t,e)}var cs;function qu(){var t=E.Promise.resolve(void 0);cs=function(){t.then(Bu)}}var ls=!1,Br=new Pu;function Bu(){for(var t;t=Fu();){try{t.h.call(t.g)}catch(n){Uu(n)}var e=qr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ls=!1}function bn(t,e){B.call(this),this.h=t||1,this.g=e||E,this.j=K(this.kb,this),this.l=Date.now()}H(bn,B);g=bn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),G(this,"tick"),this.da&&(Fs(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fs(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}g.M=function(){bn.Z.M.call(this),Fs(this),delete this.g};function Ps(t,e,n){if(typeof t=="function")n&&(t=K(t,n));else if(t&&typeof t.handleEvent=="function")t=K(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:E.setTimeout(t,e||0)}function $r(t){t.g=Ps(()=>{t.g=null,t.i&&(t.i=!1,$r(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $u extends Ee{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$r(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(t){Ee.call(this),this.h=t,this.g={}}H(yt,Ee);var Pi=[];function jr(t,e,n,s){Array.isArray(n)||(n&&(Pi[0]=n.toString()),n=Pi);for(var i=0;i<n.length;i++){var r=Mr(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Kr(t){Ds(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rs(e)},t),t.g={}}yt.prototype.M=function(){yt.Z.M.call(this),Kr(this)};yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sn(){this.g=!0}Sn.prototype.Aa=function(){this.g=!1};function ju(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Ku(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Fe(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zu(t,n)+(s?" "+s:"")})}function Gu(t,e){t.info(function(){return"TIMEOUT: "+e})}Sn.prototype.info=function(){};function zu(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Os(n)}catch{return e}}var Re={},Vi=null;function Cn(){return Vi=Vi||new B}Re.Ma="serverreachability";function Gr(t){Y.call(this,Re.Ma,t)}H(Gr,Y);function vt(t){const e=Cn();G(e,new Gr(e))}Re.STAT_EVENT="statevent";function zr(t,e){Y.call(this,Re.STAT_EVENT,t),this.stat=e}H(zr,Y);function Z(t){const e=Cn();G(e,new zr(e,t))}Re.Na="timingevent";function Hr(t,e){Y.call(this,Re.Na,t),this.size=e}H(Hr,Y);function Rt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},e)}var kn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Qr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Vs(){}Vs.prototype.h=null;function Ui(t){return t.h||(t.h=t.i())}function Wr(){}var _t={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Us(){Y.call(this,"d")}H(Us,Y);function qs(){Y.call(this,"c")}H(qs,Y);var ds;function Dn(){}H(Dn,Vs);Dn.prototype.g=function(){return new XMLHttpRequest};Dn.prototype.i=function(){return{}};ds=new Dn;function Lt(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new yt(this),this.P=Hu,t=os?125:void 0,this.W=new bn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Yr}function Yr(){this.i=null,this.g="",this.h=!1}var Hu=45e3,fs={},hn={};g=Lt.prototype;g.setTimeout=function(t){this.P=t};function ps(t,e,n){t.K=1,t.v=xn(le(e)),t.s=n,t.U=!0,Xr(t,null)}function Xr(t,e){t.F=Date.now(),Ot(t),t.A=le(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),io(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Yr,t.g=So(t.l,n?e:null,!t.s),0<t.O&&(t.L=new $u(K(t.Ia,t,t.g),t.O)),jr(t.V,t.g,"readystatechange",t.gb),e=t.H?xr(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),vt(),ju(t.j,t.u,t.A,t.m,t.X,t.s)}g.gb=function(t){t=t.target;const e=this.L;e&&ue(t)==3?e.l():this.Ia(t)};g.Ia=function(t){try{if(t==this.g)e:{const c=ue(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>c)&&(c!=3||os||this.g&&(this.h.h||this.g.ga()||ji(this.g)))){this.I||c!=4||e==7||(e==8||0>=l?vt(3):vt(2)),Nn(this);var n=this.g.ba();this.N=n;t:if(Jr(this)){var s=ji(this.g);t="";var i=s.length,r=ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ae(this),ct(this);var o="";break t}this.h.i=new E.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Ku(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!an(a)){var h=a;break t}}h=null}if(n=h)Fe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ms(this,n);else{this.i=!1,this.o=3,Z(12),Ae(this),ct(this);break e}}this.U?(Zr(this,c,o),os&&this.i&&c==3&&(jr(this.V,this.W,"tick",this.fb),this.W.start())):(Fe(this.j,this.m,o,null),ms(this,o)),c==4&&Ae(this),this.i&&!this.I&&(c==4?Eo(this.l,this):(this.i=!1,Ot(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),Ae(this),ct(this)}}}catch{}finally{}};function Jr(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Zr(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Qu(t,n),i==hn){e==4&&(t.o=4,Z(14),s=!1),Fe(t.j,t.m,null,"[Incomplete Response]");break}else if(i==fs){t.o=4,Z(15),Fe(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Fe(t.j,t.m,i,null),ms(t,i);Jr(t)&&i!=hn&&i!=fs&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Z(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ws(e),e.L=!0,Z(11))):(Fe(t.j,t.m,n,"[Invalid Chunked Response]"),Ae(t),ct(t))}g.fb=function(){if(this.g){var t=ue(this.g),e=this.g.ga();this.C<e.length&&(Nn(this),Zr(this,t,e),this.i&&t!=4&&Ot(this))}};function Qu(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?hn:(n=Number(e.substring(n,s)),isNaN(n)?fs:(s+=1,s+n>e.length?hn:(e=e.substr(s,n),t.C=s+n,e)))}g.cancel=function(){this.I=!0,Ae(this)};function Ot(t){t.Y=Date.now()+t.P,eo(t,t.P)}function eo(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Rt(K(t.eb,t),e)}function Nn(t){t.B&&(E.clearTimeout(t.B),t.B=null)}g.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Gu(this.j,this.A),this.K!=2&&(vt(),Z(17)),Ae(this),this.o=2,ct(this)):eo(this,this.Y-t)};function ct(t){t.l.G==0||t.I||Eo(t.l,t)}function Ae(t){Nn(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Fs(t.W),Kr(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ms(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||gs(n.i,t))){if(n.I=t.N,!t.J&&gs(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)fn(n),Ln(n);else break e;Qs(n),Z(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Rt(K(n.ab,n),6e3));if(1>=ao(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else be(n,11)}else if((t.J||n.g==t)&&fn(n),!an(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const c=h[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const l=h[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const p=h[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.i;!r.g&&(X(v,"spdy")||X(v,"quic")||X(v,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(js(r,r.h),r.h=null))}if(s.D){const D=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.sa=D,_(s.F,s.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=bo(s,s.H?s.la:null,s.W),o.J){uo(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(Nn(a),Ot(a)),s.g=o}else wo(s);0<n.l.length&&On(n)}else h[0]!="stop"&&h[0]!="close"||be(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?be(n,7):Hs(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}vt(4)}catch{}}function Wu(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(rs(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Bs(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(rs(t)||typeof t=="string")Nr(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(rs(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Wu(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function We(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof We)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}g=We.prototype;g.R=function(){$s(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};g.T=function(){return $s(this),this.g.concat()};function $s(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];ke(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],ke(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}g.get=function(t,e){return ke(this.h,t)?this.h[t]:e};g.set=function(t,e){ke(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};g.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function ke(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var to=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Yu(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function De(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof De){this.g=e!==void 0?e:t.g,cn(this,t.j),this.s=t.s,ln(this,t.i),dn(this,t.m),this.l=t.l,e=t.h;var n=new wt;n.i=e.i,e.g&&(n.g=new We(e.g),n.h=e.h),qi(this,n),this.o=t.o}else t&&(n=String(t).match(to))?(this.g=!!e,cn(this,n[1]||"",!0),this.s=lt(n[2]||""),ln(this,n[3]||"",!0),dn(this,n[4]),this.l=lt(n[5]||"",!0),qi(this,n[6]||"",!0),this.o=lt(n[7]||"")):(this.g=!!e,this.h=new wt(null,this.g))}De.prototype.toString=function(){var t=[],e=this.j;e&&t.push(at(e,Bi,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(at(e,Bi,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(at(n,n.charAt(0)=="/"?th:eh,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",at(n,sh)),t.join("")};function le(t){return new De(t)}function cn(t,e,n){t.j=n?lt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ln(t,e,n){t.i=n?lt(e,!0):e}function dn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qi(t,e,n){e instanceof wt?(t.h=e,ih(t.h,t.g)):(n||(e=at(e,nh)),t.h=new wt(e,t.g))}function _(t,e,n){t.h.set(e,n)}function xn(t){return _(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xu(t){return t instanceof De?le(t):new De(t,void 0)}function Ju(t,e,n,s){var i=new De(null,void 0);return t&&cn(i,t),e&&ln(i,e),n&&dn(i,n),s&&(i.l=s),i}function lt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function at(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Zu),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zu(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Bi=/[#\/\?@]/g,eh=/[#\?:]/g,th=/[#\?]/g,nh=/[#\?@]/g,sh=/#/g;function wt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ie(t){t.g||(t.g=new We,t.h=0,t.i&&Yu(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}g=wt.prototype;g.add=function(t,e){Ie(this),this.i=null,t=Ye(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function no(t,e){Ie(t),e=Ye(t,e),ke(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ke(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&$s(t)))}function so(t,e){return Ie(t),e=Ye(t,e),ke(t.g.h,e)}g.forEach=function(t,e){Ie(this),this.g.forEach(function(n,s){Nr(n,function(i){t.call(e,i,s,this)},this)},this)};g.T=function(){Ie(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};g.R=function(t){Ie(this);var e=[];if(typeof t=="string")so(this,t)&&(e=Ri(e,this.g.get(Ye(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Ri(e,t[n])}return e};g.set=function(t,e){return Ie(this),this.i=null,t=Ye(this,t),so(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};g.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function io(t,e,n){no(t,e),0<n.length&&(t.i=null,t.g.set(Ye(t,e),ks(n)),t.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Ye(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ih(t,e){e&&!t.j&&(Ie(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(no(this,s),io(this,i,n))},t)),t.j=e}var rh=class{constructor(t,e){this.h=t,this.g=e}};function ro(t){this.l=t||oh,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oh=10;function oo(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ao(t){return t.h?1:t.g?t.g.size:0}function gs(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function js(t,e){t.g?t.g.add(e):t.h=e}function uo(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ro.prototype.cancel=function(){if(this.i=ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ho(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ks(t.i)}function Ks(){}Ks.prototype.stringify=function(t){return E.JSON.stringify(t,void 0)};Ks.prototype.parse=function(t){return E.JSON.parse(t,void 0)};function ah(){this.g=new Ks}function uh(t,e,n){const s=n||"";try{Bs(t,function(i,r){let o=i;Nt(i)&&(o=Os(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function hh(t,e){const n=new Sn;if(E.Image){const s=new Image;s.onload=Qt(Yt,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Qt(Yt,n,s,"TestLoadImage: error",!1,e),s.onabort=Qt(Yt,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qt(Yt,n,s,"TestLoadImage: timeout",!1,e),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Yt(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Mt(t){this.l=t.$b||null,this.j=t.ib||!1}H(Mt,Vs);Mt.prototype.g=function(){return new Rn(this.l,this.j)};Mt.prototype.i=function(t){return function(){return t}}({});function Rn(t,e){B.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Gs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(Rn,B);var Gs=0;g=Rn.prototype;g.open=function(t,e){if(this.readyState!=Gs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Tt(this)};g.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||E).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ft(this)),this.readyState=Gs};g.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Tt(this)),this.g&&(this.readyState=3,Tt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;co(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function co(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}g.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ft(this):Tt(this),this.readyState==3&&co(this)}};g.Ua=function(t){this.g&&(this.response=this.responseText=t,Ft(this))};g.Ta=function(t){this.g&&(this.response=t,Ft(this))};g.ha=function(){this.g&&Ft(this)};function Ft(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Tt(t)}g.setRequestHeader=function(t,e){this.v.append(t,e)};g.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Tt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ch=E.JSON.parse;function F(t){B.call(this),this.headers=new We,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lo,this.K=this.L=!1}H(F,B);var lo="",lh=/^https?$/i,dh=["POST","PUT"];g=F.prototype;g.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ds.g(),this.C=this.u?Ui(this.u):Ui(ds),this.g.onreadystatechange=K(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){$i(this,r);return}t=n||"";const i=new We(this.headers);s&&Bs(s,function(r,o){i.set(o,r)}),s=Au(i.T()),n=E.FormData&&t instanceof E.FormData,!(0<=Dr(dh,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{mo(this),0<this.B&&((this.K=fh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=K(this.pa,this)):this.A=Ps(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){$i(this,r)}};function fh(t){return $e&&Du()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function ph(t){return t.toLowerCase()=="content-type"}g.pa=function(){typeof Cs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,G(this,"timeout"),this.abort(8))};function $i(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fo(t),_n(t)}function fo(t){t.D||(t.D=!0,G(t,"complete"),G(t,"error"))}g.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,G(this,"complete"),G(this,"abort"),_n(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_n(this,!0)),F.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?po(this):this.cb())};g.cb=function(){po(this)};function po(t){if(t.h&&typeof Cs<"u"&&(!t.C[1]||ue(t)!=4||t.ba()!=2)){if(t.v&&ue(t)==4)Ps(t.Fa,0,t);else if(G(t,"readystatechange"),ue(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(to)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!lh.test(i?i.toLowerCase():"")}n=s}if(n)G(t,"complete"),G(t,"success");else{t.m=6;try{var o=2<ue(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",fo(t)}}finally{_n(t)}}}}function _n(t,e){if(t.g){mo(t);const n=t.g,s=t.C[0]?on:null;t.g=null,t.C=null,e||G(t,"ready");try{n.onreadystatechange=s}catch{}}}function mo(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(E.clearTimeout(t.A),t.A=null)}function ue(t){return t.g?t.g.readyState:0}g.ba=function(){try{return 2<ue(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ch(e)}};function ji(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lo:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function mh(t){let e="";return Ds(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function zs(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=mh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_(t,e,n))}function ot(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function go(t){this.za=0,this.l=[],this.h=new Sn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ot("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ot("baseRetryDelayMs",5e3,t),this.$a=ot("retryDelaySeedMs",1e4,t),this.Ya=ot("forwardChannelMaxRetries",2,t),this.ra=ot("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ro(t&&t.concurrentRequestLimit),this.Ca=new ah,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}g=go.prototype;g.ma=8;g.G=1;function Hs(t){if(yo(t),t.G==3){var e=t.V++,n=le(t.F);_(n,"SID",t.J),_(n,"RID",e),_(n,"TYPE","terminate"),Pt(t,n),e=new Lt(t,t.h,e,void 0),e.K=2,e.v=xn(le(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(e.v.toString(),"")),!n&&E.Image&&(new Image().src=e.v,n=!0),n||(e.g=So(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ot(e)}Ao(t)}g.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ln(t){t.g&&(Ws(t),t.g.cancel(),t.g=null)}function yo(t){Ln(t),t.u&&(E.clearTimeout(t.u),t.u=null),fn(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&E.clearTimeout(t.m),t.m=null)}function Zn(t,e){t.l.push(new rh(t.Za++,e)),t.G==3&&On(t)}function On(t){oo(t.i)||t.m||(t.m=!0,Ms(t.Ha,t),t.C=0)}function gh(t,e){return ao(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Rt(K(t.Ha,t,e),Io(t,t.C)),t.C++,!0)}g.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Lt(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=xr(r),Rr(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vo(this,i,e),n=le(this.F),_(n,"RID",t),_(n,"CVER",22),this.D&&_(n,"X-HTTP-Session-Id",this.D),Pt(this,n),this.o&&r&&zs(n,this.o,r),js(this.i,i),this.Ra&&_(n,"TYPE","init"),this.ja?(_(n,"$req",e),_(n,"SID","null"),i.$=!0,ps(i,n,null)):ps(i,n,e),this.G=2}}else this.G==3&&(t?Ki(this,t):this.l.length==0||oo(this.i)||Ki(this))};function Ki(t,e){var n;e?n=e.m:n=t.V++;const s=le(t.F);_(s,"SID",t.J),_(s,"RID",n),_(s,"AID",t.U),Pt(t,s),t.o&&t.s&&zs(s,t.o,t.s),n=new Lt(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=vo(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),js(t.i,n),ps(n,s,e)}function Pt(t,e){t.j&&Bs({},function(n,s){_(e,s,n)})}function vo(t,e,n){n=Math.min(t.l.length,n);var s=t.j?K(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let h=i[u].h;const c=i[u].g;if(h-=r,0>h)r=Math.max(0,i[u].h-100),a=!1;else try{uh(c,o,"req"+h+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function wo(t){t.g||t.u||(t.Y=1,Ms(t.Ga,t),t.A=0)}function Qs(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Rt(K(t.Ga,t),Io(t,t.A)),t.A++,!0)}g.Ga=function(){if(this.u=null,To(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Rt(K(this.bb,this),t)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Z(10),Ln(this),To(this))};function Ws(t){t.B!=null&&(E.clearTimeout(t.B),t.B=null)}function To(t){t.g=new Lt(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=le(t.oa);_(e,"RID","rpc"),_(e,"SID",t.J),_(e,"CI",t.N?"0":"1"),_(e,"AID",t.U),Pt(t,e),_(e,"TYPE","xmlhttp"),t.o&&t.s&&zs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=xn(le(e)),n.s=null,n.U=!0,Xr(n,t)}g.ab=function(){this.v!=null&&(this.v=null,Ln(this),Qs(this),Z(19))};function fn(t){t.v!=null&&(E.clearTimeout(t.v),t.v=null)}function Eo(t,e){var n=null;if(t.g==e){fn(t),Ws(t),t.g=null;var s=2}else if(gs(t.i,e))n=e.D,uo(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Cn(),G(s,new Hr(s,n)),On(t)}else wo(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&gh(t,e)||s==2&&Qs(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:be(t,5);break;case 4:be(t,10);break;case 3:be(t,6);break;default:be(t,2)}}}function Io(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function be(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=K(t.jb,t);n||(n=new De("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||cn(n,"https"),xn(n)),hh(n.toString(),s)}else Z(2);t.G=0,t.j&&t.j.va(e),Ao(t),yo(t)}g.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Z(2)):(this.h.info("Failed to ping google.com"),Z(1))};function Ao(t){t.G=0,t.I=-1,t.j&&((ho(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,ks(t.l),t.l.length=0),t.j.ua())}function bo(t,e,n){let s=Xu(n);if(s.i!="")e&&ln(s,e+"."+s.i),dn(s,s.m);else{const i=E.location;s=Ju(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Ds(t.aa,function(i,r){_(s,r,i)}),e=t.D,n=t.sa,e&&n&&_(s,e,n),_(s,"VER",t.ma),Pt(t,s),s}function So(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new F(new Mt({ib:!0})):new F(t.qa),e.L=t.H,e}function Co(){}g=Co.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function pn(){if($e&&!(10<=Number(Nu)))throw Error("Environmental error: no available transport.")}pn.prototype.g=function(t,e){return new se(t,e)};function se(t,e){B.call(this),this.g=new go(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!an(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!an(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xe(this)}H(se,B);se.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ms(K(t.hb,t,e))),Z(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=bo(t,null,t.W),On(t)};se.prototype.close=function(){Hs(this.g)};se.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Zn(this.g,e)}else this.v?(e={},e.__data__=Os(t),Zn(this.g,e)):Zn(this.g,t)};se.prototype.M=function(){this.g.j=null,delete this.j,Hs(this.g),delete this.g,se.Z.M.call(this)};function ko(t){Us.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}H(ko,Us);function Do(){qs.call(this),this.status=1}H(Do,qs);function Xe(t){this.g=t}H(Xe,Co);Xe.prototype.xa=function(){G(this.g,"a")};Xe.prototype.wa=function(t){G(this.g,new ko(t))};Xe.prototype.va=function(t){G(this.g,new Do)};Xe.prototype.ua=function(){G(this.g,"b")};pn.prototype.createWebChannel=pn.prototype.g;se.prototype.send=se.prototype.u;se.prototype.open=se.prototype.m;se.prototype.close=se.prototype.close;kn.NO_ERROR=0;kn.TIMEOUT=8;kn.HTTP_ERROR=6;Qr.COMPLETE="complete";Wr.EventType=_t;_t.OPEN="a";_t.CLOSE="b";_t.ERROR="c";_t.MESSAGE="d";B.prototype.listen=B.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.La;F.prototype.getLastErrorCode=F.prototype.Da;F.prototype.getStatus=F.prototype.ba;F.prototype.getResponseJson=F.prototype.Qa;F.prototype.getResponseText=F.prototype.ga;F.prototype.send=F.prototype.ea;var yh=function(){return new pn},vh=function(){return Cn()},es=kn,wh=Qr,Th=Re,Gi={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Eh=Mt,Xt=Wr,Ih=F;const zi="@firebase/firestore";/**
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
 */class te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
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
 */let Je="9.9.4";/**
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
 */const Ne=new Xa("@firebase/firestore");function Hi(){return Ne.logLevel}function w(t,...e){if(Ne.logLevel<=mt.DEBUG){const n=e.map(Ys);Ne.debug(`Firestore (${Je}): ${t}`,...n)}}function de(t,...e){if(Ne.logLevel<=mt.ERROR){const n=e.map(Ys);Ne.error(`Firestore (${Je}): ${t}`,...n)}}function Qi(t,...e){if(Ne.logLevel<=mt.WARN){const n=e.map(Ys);Ne.warn(`Firestore (${Je}): ${t}`,...n)}}function Ys(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function I(t="Unexpected state"){const e=`FIRESTORE (${Je}) INTERNAL ASSERTION FAILED: `+t;throw de(e),new Error(e)}function x(t,e){t||I()}function A(t,e){return t}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Ha{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class he{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ah{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(te.UNAUTHENTICATED))}shutdown(){}}class Sh{constructor(e){this.t=e,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new he;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new he,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new he)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(x(typeof s.accessToken=="string"),new Ah(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return x(e===null||typeof e=="string"),new te(e)}}class Ch{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=te.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(x(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class kh{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Ch(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nh{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(x(typeof n.token=="string"),this.A=n.token,new Dh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function xh(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class No{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=xh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function N(t,e){return t<e?-1:t>e?1:0}function je(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class P{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return P.fromMillis(Date.now())}static fromDate(e){return P.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new P(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new P(0,0))}static max(){return new b(new P(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Et{constructor(e,n,s){n===void 0?n=0:n>e.length&&I(),s===void 0?s=e.length-n:s>e.length-n&&I(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Et.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Et?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class R extends Et{construct(e,n,s){return new R(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new y(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new R(n)}static emptyPath(){return new R([])}}const Rh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Et{construct(e,n,s){return new W(e,n,s)}static isValidIdentifier(e){return Rh.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(d.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new y(d.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new W(n)}static emptyPath(){return new W([])}}/**
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
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(R.fromString(e))}static fromName(e){return new T(R.fromString(e).popFirst(5))}static empty(){return new T(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&R.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return R.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new R(e.slice()))}}function _h(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=b.fromTimestamp(s===1e9?new P(n+1,0):new P(n,s));return new ye(i,T.empty(),e)}function Lh(t){return new ye(t.readTime,t.key,-1)}class ye{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ye(b.min(),T.empty(),-1)}static max(){return new ye(b.max(),T.empty(),-1)}}function Oh(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=T.comparator(t.documentKey,e.documentKey),n!==0?n:N(t.largestBatchId,e.largestBatchId))}/**
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
 */const Mh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Vt(t){if(t.code!==d.FAILED_PRECONDITION||t.message!==Mh)throw t;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):f.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):f.reject(n)}static resolve(e){return new f((n,s)=>{n(e)})}static reject(e){return new f((n,s)=>{s(e)})}static waitFor(e){return new f((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(e){let n=f.resolve(!1);for(const s of e)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new f((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const h=u;n(e[h]).next(c=>{o[h]=c,++a,a===r&&s(o)},c=>i(c))}})}static doWhile(e,n){return new f((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ut(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Xs{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Wi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ze(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Xs.at=-1;class U{constructor(e,n){this.comparator=e,this.root=n||$.EMPTY}insert(e,n){return new U(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$.BLACK,null,null))}remove(e){return new U(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jt(this.root,e,this.comparator,!0)}}class Jt{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ${constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:$.RED,this.left=i!=null?i:$.EMPTY,this.right=r!=null?r:$.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new $(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}$.EMPTY=null,$.RED=!0,$.BLACK=!1;$.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,e,n,s,i){return this}insert(t,e,n){return new $(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class V{constructor(e){this.comparator=e,this.data=new U(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yi(this.data.getIterator())}getIteratorFrom(e){return new Yi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof V)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new V(this.comparator);return n.data=e,n}}class Yi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class oe{constructor(e){this.fields=e,e.sort(W.comparator)}static empty(){return new oe([])}unionWith(e){let n=new V(W.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new oe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return je(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class z{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new z(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new z(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}z.EMPTY_BYTE_STRING=new z("");const Ph=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ve(t){if(x(!!t),typeof t=="string"){let e=0;const n=Ph.exec(t);if(x(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:M(t.seconds),nanos:M(t.nanos)}}function M(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ke(t){return typeof t=="string"?z.fromBase64String(t):z.fromUint8Array(t)}/**
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
 */function Ro(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _o(t){const e=t.mapValue.fields.__previous_value__;return Ro(e)?_o(e):e}function It(t){const e=ve(t.mapValue.fields.__local_write_time__.timestampValue);return new P(e.seconds,e.nanos)}/**
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
 */class Vh{constructor(e,n,s,i,r,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class At{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new At("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof At&&e.projectId===this.projectId&&e.database===this.database}}function Mn(t){return t==null}function mn(t){return t===0&&1/t==-1/0}function Uh(t){return typeof t=="number"&&Number.isInteger(t)&&!mn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Zt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xe(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ro(t)?4:qh(t)?9007199254740991:10:I()}function ae(t,e){if(t===e)return!0;const n=xe(t);if(n!==xe(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return It(t).isEqual(It(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ve(s.timestampValue),o=ve(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ke(s.bytesValue).isEqual(Ke(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return M(s.geoPointValue.latitude)===M(i.geoPointValue.latitude)&&M(s.geoPointValue.longitude)===M(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return M(s.integerValue)===M(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=M(s.doubleValue),o=M(i.doubleValue);return r===o?mn(r)===mn(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return je(t.arrayValue.values||[],e.arrayValue.values||[],ae);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Wi(r)!==Wi(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ae(r[a],o[a])))return!1;return!0}(t,e);default:return I()}}function bt(t,e){return(t.values||[]).find(n=>ae(n,e))!==void 0}function Ge(t,e){if(t===e)return 0;const n=xe(t),s=xe(e);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=M(i.integerValue||i.doubleValue),a=M(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xi(t.timestampValue,e.timestampValue);case 4:return Xi(It(t),It(e));case 5:return N(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Ke(i),a=Ke(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const h=N(o[u],a[u]);if(h!==0)return h}return N(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=N(M(i.latitude),M(r.latitude));return o!==0?o:N(M(i.longitude),M(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const h=Ge(o[u],a[u]);if(h)return h}return N(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Zt.mapValue&&r===Zt.mapValue)return 0;if(i===Zt.mapValue)return 1;if(r===Zt.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let c=0;c<a.length&&c<h.length;++c){const l=N(a[c],h[c]);if(l!==0)return l;const p=Ge(o[a[c]],u[h[c]]);if(p!==0)return p}return N(a.length,h.length)}(t.mapValue,e.mapValue);default:throw I()}}function Xi(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return N(t,e);const n=ve(t),s=ve(e),i=N(n.seconds,s.seconds);return i!==0?i:N(n.nanos,s.nanos)}function Ve(t){return ys(t)}function ys(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=ve(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ke(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,T.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ys(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ys(s.fields[a])}`;return r+"}"}(t.mapValue):I();var e,n}function Ji(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vs(t){return!!t&&"integerValue"in t}function Js(t){return!!t&&"arrayValue"in t}function Zi(t){return!!t&&"nullValue"in t}function er(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tn(t){return!!t&&"mapValue"in t}function dt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ze(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=dt(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qh(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ie{constructor(e){this.value=e}static empty(){return new ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!tn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dt(n)}setAll(e){let n=W.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=dt(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());tn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ae(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];tn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ze(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new ie(dt(this.value))}}function Lo(t){const e=[];return Ze(t.fields,(n,s)=>{const i=new W([n]);if(tn(s)){const r=Lo(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new oe(e)}/**
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
 */class j{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new j(e,0,b.min(),b.min(),ie.empty(),0)}static newFoundDocument(e,n,s){return new j(e,1,n,b.min(),s,0)}static newNoDocument(e,n){return new j(e,2,n,b.min(),ie.empty(),0)}static newUnknownDocument(e,n){return new j(e,3,n,b.min(),ie.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof j&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new j(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bh{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function tr(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Bh(t,e,n,s,i,r,o)}function Zs(t){const e=A(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Ve(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Mn(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ve(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ve(s)).join(",")),e.ht=n}return e.ht}function $h(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ve(s.value)}`;var s}).join(", ")}]`),Mn(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ve(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ve(n)).join(",")),`Target(${e})`}function ei(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Yh(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ae(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sr(t.startAt,e.startAt)&&sr(t.endAt,e.endAt)}function ws(t){return T.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ee extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new jh(e,n,s):n==="array-contains"?new zh(e,s):n==="in"?new Hh(e,s):n==="not-in"?new Qh(e,s):n==="array-contains-any"?new Wh(e,s):new ee(e,n,s)}static lt(e,n,s){return n==="in"?new Kh(e,s):new Gh(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ge(n,this.value)):n!==null&&xe(this.value)===xe(n)&&this.ft(Ge(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return I()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class jh extends ee{constructor(e,n,s){super(e,n,s),this.key=T.fromName(s.referenceValue)}matches(e){const n=T.comparator(e.key,this.key);return this.ft(n)}}class Kh extends ee{constructor(e,n){super(e,"in",n),this.keys=Oo("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Gh extends ee{constructor(e,n){super(e,"not-in",n),this.keys=Oo("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Oo(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class zh extends ee{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Js(n)&&bt(n.arrayValue,this.value)}}class Hh extends ee{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bt(this.value.arrayValue,n)}}class Qh extends ee{constructor(e,n){super(e,"not-in",n)}matches(e){if(bt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bt(this.value.arrayValue,n)}}class Wh extends ee{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Js(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>bt(this.value.arrayValue,s))}}class gn{constructor(e,n){this.position=e,this.inclusive=n}}class Ue{constructor(e,n="asc"){this.field=e,this.dir=n}}function Yh(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function nr(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=Ge(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function sr(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ae(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class et{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function Xh(t,e,n,s,i,r,o,a){return new et(t,e,n,s,i,r,o,a)}function ti(t){return new et(t)}function ir(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ni(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function si(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Mo(t){return t.collectionGroup!==null}function St(t){const e=A(t);if(e._t===null){e._t=[];const n=si(e),s=ni(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Ue(n)),e._t.push(new Ue(W.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ue(W.keyField(),r))}}}return e._t}function fe(t){const e=A(t);if(!e.wt)if(e.limitType==="F")e.wt=tr(e.path,e.collectionGroup,St(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of St(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ue(r.field,o))}const s=e.endAt?new gn(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new gn(e.startAt.position,e.startAt.inclusive):null;e.wt=tr(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function yn(t,e,n){return new et(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fn(t,e){return ei(fe(t),fe(e))&&t.limitType===e.limitType}function Fo(t){return`${Zs(fe(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${$h(fe(t))}; limitType=${t.limitType})`}function ii(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):T.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=nr(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,St(n),s)||n.endAt&&!function(i,r,o){const a=nr(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,St(n),s))}(t,e)}function Jh(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Po(t){return(e,n)=>{let s=!1;for(const i of St(t)){const r=Zh(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Zh(t,e,n){const s=t.field.isKeyField()?T.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Ge(a,u):I()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function Vo(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mn(e)?"-0":e}}function Uo(t){return{integerValue:""+t}}function ec(t,e){return Uh(e)?Uo(e):Vo(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Pn{constructor(){this._=void 0}}function tc(t,e,n){return t instanceof Ct?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof kt?Bo(t,e):t instanceof Dt?$o(t,e):function(s,i){const r=qo(s,i),o=rr(r)+rr(s.yt);return vs(r)&&vs(s.yt)?Uo(o):Vo(s.It,o)}(t,e)}function nc(t,e,n){return t instanceof kt?Bo(t,e):t instanceof Dt?$o(t,e):n}function qo(t,e){return t instanceof vn?vs(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ct extends Pn{}class kt extends Pn{constructor(e){super(),this.elements=e}}function Bo(t,e){const n=jo(e);for(const s of t.elements)n.some(i=>ae(i,s))||n.push(s);return{arrayValue:{values:n}}}class Dt extends Pn{constructor(e){super(),this.elements=e}}function $o(t,e){let n=jo(e);for(const s of t.elements)n=n.filter(i=>!ae(i,s));return{arrayValue:{values:n}}}class vn extends Pn{constructor(e,n){super(),this.It=e,this.yt=n}}function rr(t){return M(t.integerValue||t.doubleValue)}function jo(t){return Js(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class sc{constructor(e,n){this.field=e,this.transform=n}}function ic(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof kt&&s instanceof kt||n instanceof Dt&&s instanceof Dt?je(n.elements,s.elements,ae):n instanceof vn&&s instanceof vn?ae(n.yt,s.yt):n instanceof Ct&&s instanceof Ct}(t.transform,e.transform)}class rc{constructor(e,n){this.version=e,this.transformResults=n}}class re{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new re}static exists(e){return new re(void 0,e)}static updateTime(e){return new re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vn{}function Ko(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ri(t.key,re.none()):new qt(t.key,t.data,re.none());{const n=t.data,s=ie.empty();let i=new V(W.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new _e(t.key,s,new oe(i.toArray()),re.none())}}function oc(t,e,n){t instanceof qt?function(s,i,r){const o=s.value.clone(),a=ar(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _e?function(s,i,r){if(!nn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ar(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Go(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ft(t,e,n,s){return t instanceof qt?function(i,r,o,a){if(!nn(i.precondition,r))return o;const u=i.value.clone(),h=ur(i.fieldTransforms,a,r);return u.setAll(h),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof _e?function(i,r,o,a){if(!nn(i.precondition,r))return o;const u=ur(i.fieldTransforms,a,r),h=r.data;return h.setAll(Go(i)),h.setAll(u),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,s):function(i,r,o){return nn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function ac(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=qo(s.transform,i||null);r!=null&&(n===null&&(n=ie.empty()),n.set(s.field,r))}return n||null}function or(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&je(n,s,(i,r)=>ic(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qt extends Vn{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _e extends Vn{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Go(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ar(t,e,n){const s=new Map;x(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,nc(o,a,n[i]))}return s}function ur(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,tc(r,o,e))}return s}class ri extends Vn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uc extends Vn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hc{constructor(e){this.count=e}}/**
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
 */var O,k;function cc(t){switch(t){default:return I();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function zo(t){if(t===void 0)return de("GRPC error has no .code"),d.UNKNOWN;switch(t){case O.OK:return d.OK;case O.CANCELLED:return d.CANCELLED;case O.UNKNOWN:return d.UNKNOWN;case O.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case O.INTERNAL:return d.INTERNAL;case O.UNAVAILABLE:return d.UNAVAILABLE;case O.UNAUTHENTICATED:return d.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case O.NOT_FOUND:return d.NOT_FOUND;case O.ALREADY_EXISTS:return d.ALREADY_EXISTS;case O.PERMISSION_DENIED:return d.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case O.ABORTED:return d.ABORTED;case O.OUT_OF_RANGE:return d.OUT_OF_RANGE;case O.UNIMPLEMENTED:return d.UNIMPLEMENTED;case O.DATA_LOSS:return d.DATA_LOSS;default:return I()}}(k=O||(O={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class tt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ze(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return xo(this.inner)}size(){return this.innerSize}}/**
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
 */const lc=new U(T.comparator);function pe(){return lc}const Ho=new U(T.comparator);function ut(...t){let e=Ho;for(const n of t)e=e.insert(n.key,n);return e}function Qo(t){let e=Ho;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Se(){return pt()}function Wo(){return pt()}function pt(){return new tt(t=>t.toString(),(t,e)=>t.isEqual(e))}const dc=new U(T.comparator),fc=new V(T.comparator);function S(...t){let e=fc;for(const n of t)e=e.add(n);return e}const pc=new V(N);function Yo(){return pc}/**
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
 */class Un{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Bt.createSynthesizedTargetChangeForCurrentChange(e,n)),new Un(b.min(),s,Yo(),pe(),S())}}class Bt{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Bt(z.EMPTY_BYTE_STRING,n,S(),S(),S())}}/**
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
 */class sn{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class Xo{constructor(e,n){this.targetId=e,this.At=n}}class Jo{constructor(e,n,s=z.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class hr{constructor(){this.Rt=0,this.bt=lr(),this.Pt=z.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=S(),n=S(),s=S();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Bt(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=lr()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class mc{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=pe(),this.qt=cr(),this.Kt=new V(N)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:I()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(ws(r))if(s===0){const o=new T(r.path);this.jt(n,o,j.newNoDocument(o,b.min()))}else x(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&ws(a.target)){const u=new T(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,j.newNoDocument(u,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=S();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.Xt(u);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new Un(e,n,this.Kt,this.Ut,s);return this.Ut=pe(),this.qt=cr(),this.Kt=new V(N),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new hr,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new V(N),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||w("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new hr),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function cr(){return new U(T.comparator)}function lr(){return new U(T.comparator)}/**
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
 */const gc=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yc=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class vc{constructor(e,n){this.databaseId=e,this.gt=n}}function wn(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zo(t,e){return t.gt?e.toBase64():e.toUint8Array()}function wc(t,e){return wn(t,e.toTimestamp())}function ce(t){return x(!!t),b.fromTimestamp(function(e){const n=ve(e);return new P(n.seconds,n.nanos)}(t))}function oi(t,e){return function(n){return new R(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ea(t){const e=R.fromString(t);return x(sa(e)),e}function Es(t,e){return oi(t.databaseId,e.path)}function ts(t,e){const n=ea(e);if(n.get(1)!==t.databaseId.projectId)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new T(ta(n))}function Is(t,e){return oi(t.databaseId,e)}function Tc(t){const e=ea(t);return e.length===4?R.emptyPath():ta(e)}function As(t){return new R(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ta(t){return x(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dr(t,e,n){return{name:Es(t,e),fields:n.value.mapValue.fields}}function Ec(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.gt?(x(h===void 0||typeof h=="string"),z.fromBase64String(h||"")):(x(h===void 0||h instanceof Uint8Array),z.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?d.UNKNOWN:zo(u.code);return new y(h,u.message||"")}(o);n=new Jo(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ts(t,s.document.name),r=ce(s.document.updateTime),o=new ie({mapValue:{fields:s.document.fields}}),a=j.newFoundDocument(i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new sn(u,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ts(t,s.document),r=s.readTime?ce(s.readTime):b.min(),o=j.newNoDocument(i,r),a=s.removedTargetIds||[];n=new sn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ts(t,s.document),r=s.removedTargetIds||[];n=new sn([],r,i,null)}else{if(!("filter"in e))return I();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new hc(i),o=s.targetId;n=new Xo(o,r)}}return n}function Ic(t,e){let n;if(e instanceof qt)n={update:dr(t,e.key,e.value)};else if(e instanceof ri)n={delete:Es(t,e.key)};else if(e instanceof _e)n={update:dr(t,e.key,e.data),updateMask:_c(e.fieldMask)};else{if(!(e instanceof uc))return I();n={verify:Es(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ct)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof kt)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Dt)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof vn)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw I()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wc(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(t,e.precondition)),n}function Ac(t,e){return t&&t.length>0?(x(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?ce(s.updateTime):ce(i);return r.isEqual(b.min())&&(r=ce(i)),new rc(r,s.transformResults||[])}(n,e))):[]}function bc(t,e){return{documents:[Is(t,e.path)]}}function Sc(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Is(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Is(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length===0)return;const h=u.map(c=>function(l){if(l.op==="=="){if(er(l.value))return{unaryFilter:{field:Me(l.field),op:"IS_NAN"}};if(Zi(l.value))return{unaryFilter:{field:Me(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(er(l.value))return{unaryFilter:{field:Me(l.field),op:"IS_NOT_NAN"}};if(Zi(l.value))return{unaryFilter:{field:Me(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Me(l.field),op:Nc(l.op),value:l.value}}}(c));return h.length===1?h[0]:{compositeFilter:{op:"AND",filters:h}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(h=>function(c){return{field:Me(c.field),direction:Dc(c.dir)}}(h))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,h){return u.gt||Mn(h)?h:{value:h}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function Cc(t){let e=Tc(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){x(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let r=[];n.where&&(r=na(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(l){return new Ue(Pe(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(c)));let a=null;n.limit&&(a=function(c){let l;return l=typeof c=="object"?c.value:c,Mn(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(c){const l=!!c.before,p=c.values||[];return new gn(p,l)}(n.startAt));let h=null;return n.endAt&&(h=function(c){const l=!c.before,p=c.values||[];return new gn(p,l)}(n.endAt)),Xh(e,i,o,r,a,"F",u,h)}function kc(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function na(t){return t?t.unaryFilter!==void 0?[Rc(t)]:t.fieldFilter!==void 0?[xc(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>na(e)).reduce((e,n)=>e.concat(n)):I():[]}function Dc(t){return gc[t]}function Nc(t){return yc[t]}function Me(t){return{fieldPath:t.canonicalString()}}function Pe(t){return W.fromServerFormat(t.fieldPath)}function xc(t){return ee.create(Pe(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value)}function Rc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Pe(t.unaryFilter.field);return ee.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Pe(t.unaryFilter.field);return ee.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pe(t.unaryFilter.field);return ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Pe(t.unaryFilter.field);return ee.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function _c(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sa(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Lc{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&oc(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ft(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ft(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Wo();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=Ko(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(b.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),S())}isEqual(e){return this.batchId===e.batchId&&je(this.mutations,e.mutations,(n,s)=>or(n,s))&&je(this.baseMutations,e.baseMutations,(n,s)=>or(n,s))}}class ai{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){x(e.mutations.length===s.length);let i=dc;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ai(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Oc{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ce{constructor(e,n,s,i,r=b.min(),o=b.min(),a=z.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ce(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ce(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Mc{constructor(e){this.re=e}}function Fc(t){const e=Cc({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yn(e,e.limit,"L"):e}/**
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
 */class Pc{constructor(){this.Ye=new Vc}addToCollectionParentIndex(e,n){return this.Ye.add(n),f.resolve()}getCollectionParents(e,n){return f.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return f.resolve()}deleteFieldIndex(e,n){return f.resolve()}getDocumentsMatchingTarget(e,n){return f.resolve(null)}getIndexType(e,n){return f.resolve(0)}getFieldIndexes(e,n){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,n){return f.resolve(ye.min())}getMinOffsetFromCollectionGroup(e,n){return f.resolve(ye.min())}updateCollectionGroup(e,n,s){return f.resolve()}updateIndexEntries(e,n){return f.resolve()}}class Vc{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new V(R.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new V(R.comparator)).toArray()}}/**
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
 */class ze{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ze(0)}static vn(){return new ze(-1)}}/**
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
 */class Uc{constructor(){this.changes=new tt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,j.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class qc{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Bc{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&ft(s.mutation,i,oe.empty(),P.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,S()).next(()=>s))}getLocalViewOfDocuments(e,n,s=S()){const i=Se();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ut();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Se();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,S()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=pe();const o=pt(),a=pt();return n.forEach((u,h)=>{const c=s.get(h.key);i.has(h.key)&&(c===void 0||c.mutation instanceof _e)?r=r.insert(h.key,h):c!==void 0&&(o.set(h.key,c.mutation.getFieldMask()),ft(c.mutation,h,c.mutation.getFieldMask(),P.now()))}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((h,c)=>o.set(h,c)),n.forEach((h,c)=>{var l;return a.set(h,new qc(c,(l=o.get(h))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(e,n){const s=pt();let i=new U((o,a)=>o-a),r=S();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let c=s.get(u)||oe.empty();c=a.applyToLocalView(h,c),s.set(u,c);const l=(i.get(a.batchId)||S()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,c=u.value,l=Wo();c.forEach(p=>{if(!r.has(p)){const m=Ko(n.get(p),s.get(p));m!==null&&l.set(p,m),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return T.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Mo(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):f.resolve(Se());let a=-1,u=r;return o.next(h=>f.forEach(h,(c,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(c)?f.resolve():this.getBaseDocument(e,c,l).next(p=>{u=u.insert(c,p)}))).next(()=>this.populateOverlays(e,h,r)).next(()=>this.computeViews(e,u,h,S())).next(c=>({batchId:a,changes:Qo(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new T(n)).next(s=>{let i=ut();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ut();return this.indexManager.getCollectionParents(e,i).next(o=>f.forEach(o,a=>{const u=function(h,c){return new et(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(h=>{h.forEach((c,l)=>{r=r.insert(c,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,u)=>{const h=u.getKey();i.get(h)===null&&(i=i.insert(h,j.newInvalidDocument(h)))});let o=ut();return i.forEach((a,u)=>{const h=r.get(a);h!==void 0&&ft(h.mutation,u,oe.empty(),P.now()),ii(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):f.resolve(j.newInvalidDocument(n))}}/**
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
 */class $c{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return f.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ce(s.createTime)}),f.resolve()}getNamedQuery(e,n){return f.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Fc(s.bundledQuery),readTime:ce(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class jc{constructor(){this.overlays=new U(T.comparator),this.es=new Map}getOverlay(e,n){return f.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Se();return f.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),f.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),f.resolve()}getOverlaysForCollection(e,n,s){const i=Se(),r=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return f.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new U((h,c)=>h-c);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let c=r.get(h.largestBatchId);c===null&&(c=Se(),r=r.insert(h.largestBatchId,c)),c.set(h.getKey(),h)}}const a=Se(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,c)=>a.set(h,c)),!(a.size()>=i)););return f.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Oc(n,s));let r=this.es.get(n);r===void 0&&(r=S(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class ui{constructor(){this.ns=new V(q.ss),this.rs=new V(q.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new q(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new q(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new T(new R([])),s=new q(n,e),i=new q(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new T(new R([])),s=new q(n,e),i=new q(n,e+1);let r=S();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new q(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class q{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return T.comparator(e.key,n.key)||N(e._s,n._s)}static os(e,n){return N(e._s,n._s)||T.comparator(e.key,n.key)}}/**
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
 */class Kc{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new V(q.ss)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Lc(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new q(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,n){return f.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return f.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new q(n,0),i=new q(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new V(N);return n.forEach(i=>{const r=new q(i,0),o=new q(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),f.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;T.isDocumentKey(r)||(r=r.child(""));const o=new q(new T(r),0);let a=new V(N);return this.gs.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(u._s)),!0)},o),f.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){x(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return f.forEach(n.mutations,i=>{const r=new q(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new q(n,0),i=this.gs.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Gc{constructor(e){this.Es=e,this.docs=new U(T.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():j.newInvalidDocument(n))}getEntries(e,n){let s=pe();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():j.newInvalidDocument(i))}),f.resolve(s)}getAllFromCollection(e,n,s){let i=pe();const r=new T(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Oh(Lh(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,n,s,i){I()}As(e,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new zc(this)}getSize(e){return f.resolve(this.size)}}class zc extends Uc{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),f.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class Hc{constructor(e){this.persistence=e,this.Rs=new tt(n=>Zs(n),ei),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ui,this.targetCount=0,this.vs=ze.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),f.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ze(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,f.resolve()}updateTargetData(e,n){return this.Dn(n),f.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return f.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),f.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),f.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return f.resolve(s)}containsKey(e,n){return f.resolve(this.Ps.containsKey(n))}}/**
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
 */class Qc{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Xs(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Hc(this),this.indexManager=new Pc,this.remoteDocumentCache=function(s){return new Gc(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Mc(n),this.Ns=new $c(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jc,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Kc(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){w("MemoryPersistence","Starting transaction:",e);const i=new Wc(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Ms(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return f.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Wc extends Fh{constructor(e){super(),this.currentSequenceNumber=e}}class hi{constructor(e){this.persistence=e,this.Fs=new ui,this.$s=null}static Bs(e){return new hi(e)}get Ls(){if(this.$s)return this.$s;throw I()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),f.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),f.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),f.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ls,s=>{const i=T.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,b.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return f.or([()=>f.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class ci{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=S(),i=S();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ci(e,n.fromCache,s,i)}}/**
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
 */class Yc{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Mi(e,n,i,s)).next(r=>r||this.Oi(e,n))}ki(e,n){if(ir(n))return f.resolve(null);let s=fe(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yn(n,null,"F"),s=fe(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=S(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const h=this.Fi(n,a);return this.$i(n,h,o,u.readTime)?this.ki(e,yn(n,null,"F")):this.Bi(e,h,n,u)}))})))}Mi(e,n,s,i){return ir(n)||i.isEqual(b.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Oi(e,n):(Hi()<=mt.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ts(n)),this.Bi(e,o,n,_h(i,-1)))})}Fi(e,n){let s=new V(Po(e));return n.forEach((i,r)=>{ii(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return Hi()<=mt.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.Ni.getDocumentsMatchingQuery(e,n,ye.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Xc{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new U(N),this.qi=new tt(r=>Zs(r),ei),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bc(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function Jc(t,e,n,s){return new Xc(t,e,n,s)}async function ia(t,e){const n=A(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=S();for(const h of i){o.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}for(const h of r){a.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(h=>({ji:h,removedBatchIds:o,addedBatchIds:a}))})})}function Zc(t,e){const n=A(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,h){const c=u.batch,l=c.keys();let p=f.resolve();return l.forEach(m=>{p=p.next(()=>h.getEntry(a,m)).next(v=>{const D=u.docVersions.get(m);x(D!==null),v.version.compareTo(D)<0&&(c.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),h.addEntry(v)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=S();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function ra(t){const e=A(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function el(t,e){const n=A(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,l)=>{const p=i.get(l);if(!p)return;a.push(n.Cs.removeMatchingKeys(r,c.removedDocuments,l).next(()=>n.Cs.addMatchingKeys(r,c.addedDocuments,l)));let m=p.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(l)?m=m.withResumeToken(z.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,s)),i=i.insert(l,m),function(v,D,C){return v.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(p,m,c)&&a.push(n.Cs.updateTargetData(r,m))});let u=pe(),h=S();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(tl(r,o,e.documentUpdates).next(c=>{u=c.Wi,h=c.zi})),!s.isEqual(b.min())){const c=n.Cs.getLastRemoteSnapshotVersion(r).next(l=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(n.Ui=i,r))}function tl(t,e,n){let s=S(),i=S();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=pe();return n.forEach((a,u)=>{const h=r.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(b.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function nl(t,e){const n=A(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function sl(t,e){const n=A(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,f.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Ce(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function bs(t,e,n){const s=A(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ut(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function fr(t,e,n){const s=A(t);let i=b.min(),r=S();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,h){const c=A(a),l=c.qi.get(h);return l!==void 0?f.resolve(c.Ui.get(l)):c.Cs.getTargetData(u,h)}(s,o,fe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:b.min(),n?r:S())).next(a=>(il(s,Jh(e),a),{documents:a,Hi:r})))}function il(t,e,n){let s=b.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class pr{constructor(){this.activeTargetIds=Yo()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rl{constructor(){this.Lr=new pr,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new pr,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ol{qr(e){}shutdown(){}}/**
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
 */class mr{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const al={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class ul{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class hl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,i,r){const o=this.ao(e,n);w("RestConnection","Sending: ",o,s);const a={};return this.ho(a,i,r),this.lo(e,o,a,s).then(u=>(w("RestConnection","Received: ",u),u),u=>{throw Qi("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",s),u})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Je,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=al[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){return new Promise((r,o)=>{const a=new Ih;a.listenOnce(wh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case es.NO_ERROR:const h=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(h)),r(h);break;case es.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new y(d.DEADLINE_EXCEEDED,"Request time out"));break;case es.HTTP_ERROR:const c=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(v)>=0?v:d.UNKNOWN}(l.status);o(new y(p,l.message))}else o(new y(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(d.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}_o(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=yh(),o=vh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Eh({})),this.ho(a.initMessageHeaders,n,s),Ja()||Za()||eu()||tu()||nu()||su()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");w("Connection","Creating WebChannel: "+u,a);const h=r.createWebChannel(u,a);let c=!1,l=!1;const p=new ul({Hr:v=>{l?w("Connection","Not sending because WebChannel is closed:",v):(c||(w("Connection","Opening WebChannel transport."),h.open(),c=!0),w("Connection","WebChannel sending:",v),h.send(v))},Jr:()=>h.close()}),m=(v,D,C)=>{v.listen(D,L=>{try{C(L)}catch(Q){setTimeout(()=>{throw Q},0)}})};return m(h,Xt.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),m(h,Xt.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),p.io())}),m(h,Xt.EventType.ERROR,v=>{l||(l=!0,Qi("Connection","WebChannel transport errored:",v),p.io(new y(d.UNAVAILABLE,"The operation could not be completed")))}),m(h,Xt.EventType.MESSAGE,v=>{var D;if(!l){const C=v.data[0];x(!!C);const L=C,Q=L.error||((D=L[0])===null||D===void 0?void 0:D.error);if(Q){w("Connection","WebChannel received error:",Q);const it=Q.status;let rt=function(ja){const xi=O[ja];if(xi!==void 0)return zo(xi)}(it),Ni=Q.message;rt===void 0&&(rt=d.INTERNAL,Ni="Unknown error status: "+it+" with message "+Q.message),l=!0,p.io(new y(rt,Ni)),h.close()}else w("Connection","WebChannel received:",C),p.ro(C)}}),m(o,Th.STAT_EVENT,v=>{v.stat===Gi.PROXY?w("Connection","Detected buffering proxy"):v.stat===Gi.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function ns(){return typeof document<"u"?document:null}/**
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
 */function qn(t){return new vc(t,!0)}class oa{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class aa{constructor(e,n,s,i,r,o,a,u){this.Hs=e,this.Po=s,this.vo=i,this.Vo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new oa(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(de(n.toString()),de("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new y(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cl extends aa{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=Ec(this.It,e),s=function(i){if(!("targetChange"in i))return b.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?b.min():r.readTime?ce(r.readTime):b.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=As(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=ws(a)?{documents:bc(i,a)}:{query:Sc(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Zo(i,r.resumeToken):r.snapshotVersion.compareTo(b.min())>0&&(o.readTime=wn(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=kc(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=As(this.It),n.removeTarget=e,this.Bo(n)}}class ll extends aa{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(x(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Ac(e.writeResults,e.commitTime),s=ce(e.commitTime);return this.listener.Zo(s,n)}return x(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=As(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Ic(this.It,s))};this.Bo(n)}}/**
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
 */class dl extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=i,this.nu=!1}su(){if(this.nu)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Vo.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(d.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.Vo.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(d.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class fl{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(de(n),this.ou=!1):w("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class pl{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Le(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=A(a);u._u.add(4),await $t(u),u.gu.set("Unknown"),u._u.delete(4),await Bn(u)}(this))})}),this.gu=new fl(s,i)}}async function Bn(t){if(Le(t))for(const e of t.wu)await e(!0)}async function $t(t){for(const e of t.wu)await e(!1)}function ua(t,e){const n=A(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),fi(n)?di(n):nt(n).ko()&&li(n,e))}function ha(t,e){const n=A(t),s=nt(n);n.du.delete(e),s.ko()&&ca(n,e),n.du.size===0&&(s.ko()?s.Fo():Le(n)&&n.gu.set("Unknown"))}function li(t,e){t.yu.Ot(e.targetId),nt(t).zo(e)}function ca(t,e){t.yu.Ot(e),nt(t).Ho(e)}function di(t){t.yu=new mc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),nt(t).start(),t.gu.uu()}function fi(t){return Le(t)&&!nt(t).No()&&t.du.size>0}function Le(t){return A(t)._u.size===0}function la(t){t.yu=void 0}async function ml(t){t.du.forEach((e,n)=>{li(t,e)})}async function gl(t,e){la(t),fi(t)?(t.gu.hu(e),di(t)):t.gu.set("Unknown")}async function yl(t,e,n){if(t.gu.set("Online"),e instanceof Jo&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Tn(t,s)}else if(e instanceof sn?t.yu.Gt(e):e instanceof Xo?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(b.min()))try{const s=await ra(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.te(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.du.get(u);h&&i.du.set(u,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(z.EMPTY_BYTE_STRING,u.snapshotVersion)),ca(i,a);const h=new Ce(u.target,a,1,u.sequenceNumber);li(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Tn(t,s)}}async function Tn(t,e,n){if(!Ut(e))throw e;t._u.add(1),await $t(t),t.gu.set("Offline"),n||(n=()=>ra(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Bn(t)})}function da(t,e){return e().catch(n=>Tn(t,n,e))}async function $n(t){const e=A(t),n=we(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;vl(e);)try{const i=await nl(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,wl(e,i)}catch(i){await Tn(e,i)}fa(e)&&pa(e)}function vl(t){return Le(t)&&t.fu.length<10}function wl(t,e){t.fu.push(e);const n=we(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function fa(t){return Le(t)&&!we(t).No()&&t.fu.length>0}function pa(t){we(t).start()}async function Tl(t){we(t).eu()}async function El(t){const e=we(t);for(const n of t.fu)e.Xo(n.mutations)}async function Il(t,e,n){const s=t.fu.shift(),i=ai.from(s,e,n);await da(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $n(t)}async function Al(t,e){e&&we(t).Yo&&await async function(n,s){if(i=s.code,cc(i)&&i!==d.ABORTED){const r=n.fu.shift();we(n).Oo(),await da(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await $n(n)}var i}(t,e),fa(t)&&pa(t)}async function gr(t,e){const n=A(t);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=Le(n);n._u.add(3),await $t(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Bn(n)}async function bl(t,e){const n=A(t);e?(n._u.delete(2),await Bn(n)):e||(n._u.add(2),await $t(n),n.gu.set("Unknown"))}function nt(t){return t.pu||(t.pu=function(e,n,s){const i=A(e);return i.su(),new cl(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:ml.bind(null,t),Zr:gl.bind(null,t),Wo:yl.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),fi(t)?di(t):t.gu.set("Unknown")):(await t.pu.stop(),la(t))})),t.pu}function we(t){return t.Iu||(t.Iu=function(e,n,s){const i=A(e);return i.su(),new ll(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Tl.bind(null,t),Zr:Al.bind(null,t),tu:El.bind(null,t),Zo:Il.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await $n(t)):(await t.Iu.stop(),t.fu.length>0&&(w("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class pi{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new he,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new pi(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(d.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mi(t,e){if(de("AsyncQueue",`${e}: ${t}`),Ut(t))return new y(d.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class qe{constructor(e){this.comparator=e?(n,s)=>e(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=ut(),this.sortedSet=new U(this.comparator)}static emptySet(e){return new qe(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new qe;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class yr{constructor(){this.Tu=new U(T.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):I():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class He{constructor(e,n,s,i,r,o,a,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new He(e,n,qe.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Sl{constructor(){this.Au=void 0,this.listeners=[]}}class Cl{constructor(){this.queries=new tt(e=>Fo(e),Fn),this.onlineState="Unknown",this.Ru=new Set}}async function ma(t,e){const n=A(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Sl),i)try{r.Au=await n.onListen(s)}catch(o){const a=mi(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&gi(n)}async function ga(t,e){const n=A(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function kl(t,e){const n=A(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&gi(n)}function Dl(t,e,n){const s=A(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function gi(t){t.Ru.forEach(e=>{e.next()})}class ya{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new He(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=He.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
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
 */class va{constructor(e){this.key=e}}class wa{constructor(e){this.key=e}}class Nl{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=S(),this.mutatedKeys=S(),this.Ku=Po(e),this.Gu=new qe(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new yr,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,l)=>{const p=i.get(c),m=ii(this.query,l)?l:null,v=!!p&&this.mutatedKeys.has(p.key),D=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;p&&m?p.data.isEqual(m.data)?v!==D&&(s.track({type:3,doc:m}),C=!0):this.zu(p,m)||(s.track({type:2,doc:m}),C=!0,(u&&this.Ku(m,u)>0||h&&this.Ku(m,h)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),C=!0):p&&!m&&(s.track({type:1,doc:p}),C=!0,(u||h)&&(a=!0)),C&&(m?(o=o.add(m),r=D?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{Gu:o,Wu:s,$i:a,mutatedKeys:r}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.Wu.Eu();r.sort((h,c)=>function(l,p){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(p)}(h.type,c.type)||this.Ku(h.doc,c.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,r.length!==0||u?{snapshot:new He(this.query,e.Gu,i,r,e.mutatedKeys,a===0,u,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new yr,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=S(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new wa(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new va(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=S();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return He.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class xl{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Rl{constructor(e){this.key=e,this.ec=!1}}class _l{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new tt(a=>Fo(a),Fn),this.ic=new Map,this.rc=new Set,this.oc=new U(T.comparator),this.uc=new Map,this.cc=new ui,this.ac={},this.hc=new Map,this.lc=ze.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Ll(t,e){const n=jl(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await sl(n.localStore,fe(e));n.isPrimaryClient&&ua(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ol(n,e,s,a==="current")}return i}async function Ol(t,e,n,s){t.dc=(c,l,p)=>async function(m,v,D,C){let L=v.view.ju(D);L.$i&&(L=await fr(m.localStore,v.query,!1).then(({documents:rt})=>v.view.ju(rt,L)));const Q=C&&C.targetChanges.get(v.targetId),it=v.view.applyChanges(L,m.isPrimaryClient,Q);return wr(m,v.targetId,it.Yu),it.snapshot}(t,c,l,p);const i=await fr(t.localStore,e,!0),r=new Nl(e,i.Hi),o=r.ju(i.documents),a=Bt.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),u=r.applyChanges(o,t.isPrimaryClient,a);wr(t,n,u.Yu);const h=new xl(e,n,r);return t.sc.set(e,h),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function Ml(t,e){const n=A(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Fn(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await bs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ha(n.remoteStore,s.targetId),Ss(n,s.targetId)}).catch(Vt)):(Ss(n,s.targetId),await bs(n.localStore,s.targetId,!0))}async function Fl(t,e,n){const s=Kl(t);try{const i=await function(r,o){const a=A(r),u=P.now(),h=o.reduce((p,m)=>p.add(m.key),S());let c,l;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=pe(),v=S();return a.Gi.getEntries(p,h).next(D=>{m=D,m.forEach((C,L)=>{L.isValidDocument()||(v=v.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,m)).next(D=>{c=D;const C=[];for(const L of o){const Q=ac(L,c.get(L.key).overlayedDocument);Q!=null&&C.push(new _e(L.key,Q,Lo(Q.value.mapValue),re.exists(!0)))}return a.mutationQueue.addMutationBatch(p,u,C,o)}).next(D=>{l=D;const C=D.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(p,D.batchId,C)})}).then(()=>({batchId:l.batchId,changes:Qo(c)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.ac[r.currentUser.toKey()];u||(u=new U(N)),u=u.insert(o,a),r.ac[r.currentUser.toKey()]=u}(s,i.batchId,n),await jt(s,i.changes),await $n(s.remoteStore)}catch(i){const r=mi(i,"Failed to persist write");n.reject(r)}}async function Ta(t,e){const n=A(t);try{const s=await el(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(x(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?x(o.ec):i.removedDocuments.size>0&&(x(o.ec),o.ec=!1))}),await jt(n,s,e)}catch(s){await Vt(s)}}function vr(t,e,n){const s=A(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=A(r);a.onlineState=o;let u=!1;a.queries.forEach((h,c)=>{for(const l of c.listeners)l.bu(o)&&(u=!0)}),u&&gi(a)}(s.eventManager,e),i.length&&s.nc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Pl(t,e,n){const s=A(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new U(T.comparator);o=o.insert(r,j.newNoDocument(r,b.min()));const a=S().add(r),u=new Un(b.min(),new Map,new V(N),o,a);await Ta(s,u),s.oc=s.oc.remove(r),s.uc.delete(e),yi(s)}else await bs(s.localStore,e,!1).then(()=>Ss(s,e,n)).catch(Vt)}async function Vl(t,e){const n=A(t),s=e.batch.batchId;try{const i=await Zc(n.localStore,e);Ia(n,s,null),Ea(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await jt(n,i)}catch(i){await Vt(i)}}async function Ul(t,e,n){const s=A(t);try{const i=await function(r,o){const a=A(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(x(c!==null),h=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,h,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>a.localDocuments.getDocuments(u,h))})}(s.localStore,e);Ia(s,e,n),Ea(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await jt(s,i)}catch(i){await Vt(i)}}function Ea(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Ia(t,e,n){const s=A(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function Ss(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||Aa(t,s)})}function Aa(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(ha(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),yi(t))}function wr(t,e,n){for(const s of n)s instanceof va?(t.cc.addReference(s.key,e),ql(t,s)):s instanceof wa?(w("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Aa(t,s.key)):I()}function ql(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(w("SyncEngine","New document in limbo: "+n),t.rc.add(s),yi(t))}function yi(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new T(R.fromString(e)),s=t.lc.next();t.uc.set(s,new Rl(n)),t.oc=t.oc.insert(n,s),ua(t.remoteStore,new Ce(fe(ti(n.path)),s,2,Xs.at))}}async function jt(t,e,n){const s=A(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,u)=>{o.push(s.dc(u,e,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,h.fromCache?"not-current":"current"),i.push(h);const c=ci.Ci(u.targetId,h);r.push(c)}}))}),await Promise.all(o),s.nc.Wo(i),await async function(a,u){const h=A(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>f.forEach(u,l=>f.forEach(l.Si,p=>h.persistence.referenceDelegate.addReference(c,l.targetId,p)).next(()=>f.forEach(l.Di,p=>h.persistence.referenceDelegate.removeReference(c,l.targetId,p)))))}catch(c){if(!Ut(c))throw c;w("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const l=c.targetId;if(!c.fromCache){const p=h.Ui.get(l),m=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(m);h.Ui=h.Ui.insert(l,v)}}}(s.localStore,r))}async function Bl(t,e){const n=A(t);if(!n.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const s=await ia(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new y(d.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await jt(n,s.ji)}}function $l(t,e){const n=A(t),s=n.uc.get(e);if(s&&s.ec)return S().add(s.key);{let i=S();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function jl(t){const e=A(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ta.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$l.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pl.bind(null,e),e.nc.Wo=kl.bind(null,e.eventManager),e.nc._c=Dl.bind(null,e.eventManager),e}function Kl(t){const e=A(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ul.bind(null,e),e}class Gl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=qn(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return Jc(this.persistence,new Yc,e.initialUser,this.It)}gc(e){return new Qc(hi.Bs,this.It)}mc(e){return new rl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bl.bind(null,this.syncEngine),await bl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Cl}createDatastore(e){const n=qn(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new hl(i));var i;return function(r,o,a,u){return new dl(r,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>vr(this.syncEngine,a,0),o=mr.C()?new mr:new ol,new pl(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,u,h){const c=new _l(s,i,r,o,a,u);return h&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=A(e);w("RemoteStore","RemoteStore shutting down."),n._u.add(5),await $t(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class ba{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):de("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Hl{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=te.UNAUTHENTICATED,this.clientId=No.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new he;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=mi(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ql(t,e){t.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await ia(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Wl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Yl(t);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>gr(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>gr(e.remoteStore,r)),t.onlineComponents=e}async function Yl(t){return t.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await Ql(t,new Gl)),t.offlineComponents}async function Sa(t){return t.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await Wl(t,new zl)),t.onlineComponents}function Xl(t){return Sa(t).then(e=>e.syncEngine)}async function Ca(t){const e=await Sa(t),n=e.eventManager;return n.onListen=Ll.bind(null,e.syncEngine),n.onUnlisten=Ml.bind(null,e.syncEngine),n}function Jl(t,e,n={}){const s=new he;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new ba({next:l=>{r.enqueueAndForget(()=>ga(i,c));const p=l.docs.has(o);!p&&l.fromCache?u.reject(new y(d.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&l.fromCache&&a&&a.source==="server"?u.reject(new y(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(l)},error:l=>u.reject(l)}),c=new ya(ti(o.path),h,{includeMetadataChanges:!0,Nu:!0});return ma(i,c)}(await Ca(t),t.asyncQueue,e,n,s)),s.promise}function Zl(t,e,n={}){const s=new he;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new ba({next:l=>{r.enqueueAndForget(()=>ga(i,c)),l.fromCache&&a.source==="server"?u.reject(new y(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),c=new ya(o,h,{includeMetadataChanges:!0,Nu:!0});return ma(i,c)}(await Ca(t),t.asyncQueue,e,n,s)),s.promise}const Tr=new Map;/**
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
 */function ka(t,e,n){if(!n)throw new y(d.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ed(t,e,n,s){if(e===!0&&s===!0)throw new y(d.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Er(t){if(!T.isDocumentKey(t))throw new y(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ir(t){if(T.isDocumentKey(t))throw new y(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jn(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":I()}function Te(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new y(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jn(t);throw new y(d.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function td(t,e){if(e<=0)throw new y(d.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Ar{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new y(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ed("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class vi{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ar({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ar(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new bh;switch(n.type){case"gapi":const s=n.client;return new kh(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new y(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tr.get(e);n&&(w("ComponentProvider","Removing Datastore"),Tr.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ne{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ge(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ne(this.firestore,e,this._key)}}class Oe{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Oe(this.firestore,e,this._query)}}class ge extends Oe{constructor(e,n,s){super(e,n,ti(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ne(this.firestore,null,new T(e))}withConverter(e){return new ge(this.firestore,e,this._path)}}function Da(t,e,...n){if(t=Be(t),ka("collection","path",e),t instanceof vi){const s=R.fromString(e,...n);return Ir(s),new ge(t,null,s)}{if(!(t instanceof ne||t instanceof ge))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(R.fromString(e,...n));return Ir(s),new ge(t.firestore,null,s)}}function Kn(t,e,...n){if(t=Be(t),arguments.length===1&&(e=No.R()),ka("doc","path",e),t instanceof vi){const s=R.fromString(e,...n);return Er(s),new ne(t,null,new T(s))}{if(!(t instanceof ne||t instanceof ge))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(R.fromString(e,...n));return Er(s),new ne(t.firestore,t instanceof ge?t.converter:null,new T(s))}}/**
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
 */class nd{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new oa(this,"async_queue_retry"),this.jc=()=>{const n=ns();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=ns();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=ns();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new he;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Ut(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw de("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=pi.createAndSchedule(this,e,n,s,r=>this.Jc(r));return this.Uc.push(i),i}Wc(){this.qc&&I()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class st extends vi{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new nd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Na(this),this._firestoreClient.terminate()}}function sd(t,e){const n=typeof t=="object"?t:Qa(),s=typeof t=="string"?t:e||"(default)";return Wa(n,"firestore").getImmediate({identifier:s})}function wi(t){return t._firestoreClient||Na(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Na(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Vh(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Hl(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class Ti{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new y(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qe(z.fromBase64String(e))}catch(n){throw new y(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qe(z.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ei{constructor(e){this._methodName=e}}/**
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
 */class Ii{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new y(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new y(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
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
 */const id=/^__.*__$/;class rd{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new _e(e,this.data,this.fieldMask,n,this.fieldTransforms):new qt(e,this.data,n,this.fieldTransforms)}}function xa(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Ai{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ea(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Ai(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:s,ra:!1});return i.oa(e),i}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:s,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return En(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(xa(this.na)&&id.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class od{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||qn(e)}fa(e,n,s,i=!1){return new Ai({na:e,methodName:n,la:s,path:W.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function bi(t){const e=t._freezeSettings(),n=qn(t._databaseId);return new od(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ra(t,e,n,s,i,r={}){const o=t.fa(r.merge||r.mergeFields?2:0,e,n,i);Oa("Data must be an object, but it was:",o,s);const a=_a(s,o);let u,h;if(r.merge)u=new oe(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const l of r.mergeFields){const p=ud(e,l,n);if(!o.contains(p))throw new y(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);cd(c,p)||c.push(p)}u=new oe(c),h=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,h=o.fieldTransforms;return new rd(new ie(a),u,h)}class Si extends Ei{_toFieldTransform(e){return new sc(e.path,new Ct)}isEqual(e){return e instanceof Si}}function ad(t,e,n,s=!1){return Ci(n,t.fa(s?4:3,e))}function Ci(t,e){if(La(t=Be(t)))return Oa("Unsupported field value:",e,t),_a(t,e);if(t instanceof Ei)return function(n,s){if(!xa(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ci(o,s.ca(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ec(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=P.fromDate(n);return{timestampValue:wn(s.It,i)}}if(n instanceof P){const i=new P(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wn(s.It,i)}}if(n instanceof Ii)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qe)return{bytesValue:Zo(s.It,n._byteString)};if(n instanceof ne){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.aa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:oi(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${jn(n)}`)}(t,e)}function _a(t,e){const n={};return xo(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ze(t,(s,i)=>{const r=Ci(i,e.ia(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function La(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof P||t instanceof Ii||t instanceof Qe||t instanceof ne||t instanceof Ei)}function Oa(t,e,n){if(!La(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=jn(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function ud(t,e,n){if((e=Be(e))instanceof Ti)return e._internalPath;if(typeof e=="string")return Ma(t,e);throw En("Field path arguments must be of type string or ",t,!1,void 0,n)}const hd=new RegExp("[~\\*/\\[\\]]");function Ma(t,e,n){if(e.search(hd)>=0)throw En(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ti(...e.split("."))._internalPath}catch{throw En(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function En(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new y(d.INVALID_ARGUMENT,a+t+u)}function cd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Fa{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ld(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gn("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ld extends Fa{data(){return super.data()}}function Gn(t,e){return typeof e=="string"?Ma(t,e):e instanceof Ti?e._internalPath:e._delegate._internalPath}/**
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
 */class ht{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pa extends Fa{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Gn("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class rn extends Pa{data(e={}){return super.data(e)}}class dd{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ht(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new rn(this._firestore,this._userDataWriter,s.key,s,new ht(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new rn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ht(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new rn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ht(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:fd(o.type),doc:a,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fd(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function pd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new y(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ki{}function md(t,...e){for(const n of e)t=n._apply(t);return t}class gd extends ki{constructor(e,n,s){super(),this.wa=e,this.ma=n,this.ga=s,this.type="where"}_apply(e){const n=bi(e.firestore),s=function(i,r,o,a,u,h,c){let l;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new y(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Sr(c,h);const m=[];for(const v of c)m.push(br(a,i,v));l={arrayValue:{values:m}}}else l=br(a,i,c)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Sr(c,h),l=ad(o,r,c,h==="in"||h==="not-in");const p=ee.create(u,h,l);return function(m,v){if(v.dt()){const C=si(m);if(C!==null&&!C.isEqual(v.field))throw new y(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${C.toString()}' and '${v.field.toString()}'`);const L=ni(m);L!==null&&Va(m,v.field,L)}const D=function(C,L){for(const Q of C.filters)if(L.indexOf(Q.op)>=0)return Q.op;return null}(m,function(C){switch(C){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(D!==null)throw D===v.op?new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${D.toString()}' filters.`)}(i,p),p}(e._query,"where",n,e.firestore._databaseId,this.wa,this.ma,this.ga);return new Oe(e.firestore,e.converter,function(i,r){const o=i.filters.concat([r]);return new et(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,s))}}function yd(t,e,n){const s=e,i=Gn("where",t);return new gd(i,s,n)}class vd extends ki{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new y(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ue(i,r);return function(a,u){if(ni(a)===null){const h=si(a);h!==null&&Va(a,h,u.field)}}(s,o),o}(e._query,this.wa,this.ya);return new Oe(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new et(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function wd(t,e="asc"){const n=e,s=Gn("orderBy",t);return new vd(s,n)}class Td extends ki{constructor(e,n,s){super(),this.type=e,this.pa=n,this.Ia=s}_apply(e){return new Oe(e.firestore,e.converter,yn(e._query,this.pa,this.Ia))}}function Ed(t){return td("limit",t),new Td("limit",t,"F")}function br(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new y(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mo(e)&&n.indexOf("/")!==-1)throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(R.fromString(n));if(!T.isDocumentKey(s))throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ji(t,new T(s))}if(n instanceof ne)return Ji(t,n._key);throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jn(n)}.`)}function Sr(t,e){if(!Array.isArray(t)||t.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new y(d.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Va(t,e,n){if(!n.isEqual(e))throw new y(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class Id{convertValue(e,n="none"){switch(xe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return M(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ke(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw I()}}convertObject(e,n){const s={};return Ze(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Ii(M(e.latitude),M(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=_o(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(It(e));default:return null}}convertTimestamp(e){const n=ve(e);return new P(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=R.fromString(e);x(sa(s));const i=new At(s.get(1),s.get(3)),r=new T(s.popFirst(5));return i.isEqual(n)||de(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Ua(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 *//**
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
 */function Ad(t){t=Te(t,ne);const e=Te(t.firestore,st);return Jl(wi(e),t._key).then(n=>Dd(e,t,n))}class qa extends Id{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qe(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ne(this.firestore,null,n)}}function bd(t){t=Te(t,Oe);const e=Te(t.firestore,st),n=wi(e),s=new qa(e);return pd(t._query),Zl(n,t._query).then(i=>new dd(e,s,t,i))}function Sd(t,e,n){t=Te(t,ne);const s=Te(t.firestore,st),i=Ua(t.converter,e,n);return Di(s,[Ra(bi(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,re.none())])}function Cd(t){return Di(Te(t.firestore,st),[new ri(t._key,re.none())])}function kd(t,e){const n=Te(t.firestore,st),s=Kn(t),i=Ua(t.converter,e);return Di(n,[Ra(bi(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,re.exists(!1))]).then(()=>s)}function Di(t,e){return function(n,s){const i=new he;return n.asyncQueue.enqueueAndForget(async()=>Fl(await Xl(n),s,i)),i.promise}(wi(t),e)}function Dd(t,e,n){const s=n.docs.get(e._key),i=new qa(t);return new Pa(t,i,e._key,s,new ht(n.hasPendingWrites,n.fromCache),e.converter)}function Nd(){return new Si("serverTimestamp")}(function(t,e=!0){(function(n){Je=n})(Ya),Ga(new za("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new st(new Sh(n.getProvider("auth-internal")),new Nh(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new At(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),is(zi,"3.4.15",t),is(zi,"3.4.15","esm2017")})();const Kt=(...t)=>t.reduce((e,n)=>n(e),null),xd=sd(mu),Gt=({source:t=null,isTeam:e=!1,type:n=null,id:s=null})=>{let i=e?"teams":"users";return t!=null&&n!=null&&(i+=`/${t}/${n}`),s!=null&&(i+=`/${s}`),()=>i},zt=t=>e=>t(xd,e),Ba=(t,e)=>n=>(delete t.id,delete t.contentType,t[e]=Nd(),{location:n,content:t}),$a=(t,e=null)=>n=>t(n.location,n.content,e),Ld=({source:t=null,isTeam:e=!1,type:n=null,id:s})=>Kt(Gt({source:t,isTeam:e,type:n,id:s}),zt(Kn),Ad),Od=({source:t=null,isTeam:e=!1,type:n=null,id:s})=>Kt(Gt({source:t,isTeam:e,type:n,id:s}),zt(Kn),Cd),ss=({content:t,source:e=null,type:n=null,isTeam:s=!1,timestamp:i="created"})=>Kt(Gt({source:e,type:n,isTeam:s}),zt(Da),Ba(t,i),$a(kd)),Md=({id:t,content:e,source:n=null,type:s=null,isTeam:i=!1,timestamp:r="edited"})=>Kt(Gt({source:n,type:s,isTeam:i,id:t}),zt(Kn),Ba(e,r),$a(Sd,{merge:!0})),Fd=({source:t=null,isTeam:e=!1,type:n=null,amount:s=50,timestamp:i="date",queries:r})=>Kt(Gt({source:t,isTeam:e,type:n}),zt(Da),o=>md(o,...r.map(a=>yd(a.type,a.compare,a.value)),wd(i,"desc"),Ed(s)),bd),me=iu(),Ht=async t=>await new Promise(e=>{t().then(()=>{e({})}).catch(n=>{e({error:gu(n.code)})})}),en=()=>new Promise(t=>{const e=Rd();if(e!=null){t(e);return}Cr.subscribe(async({user:n,ready:s})=>{var i;!s||t((i=n==null?void 0:n.uid)!=null?i:"")})}),Rd=()=>{var t;return(t=me.currentUser)==null?void 0:t.uid},Pd=()=>Ht(async()=>{await kr(me,new hu)}),Vd=()=>Ht(async()=>{await kr(me,new cu)}),Ud=(t,e)=>Ht(async()=>{await lu(me,t,e)}),qd=(t,e)=>Ht(async()=>{await ou(me,t,e),await au(me.currentUser);const n={contentType:"user",email:t,id:await en()},s={contentType:"todo",id:"",title:"Welcome to Haja! Get started by tapping (+) Add",caption:"We are glad to help you :)",status:"todo",type:"from_haja",date:new Date},i={contentType:"todo",id:"",title:"Happy Aniversary!!",caption:"Thanks for using Haja for 1 year :)",status:"todo",type:"from_haja",date:new Date};ss({isTeam:!1,id:await en(),content:n}),ss({source:await en(),isTeam:!1,content:s,type:"todo"}),ss({source:await en(),isTeam:!1,content:i,type:"todo"})}),Bd=t=>Ht(async()=>{await uu(me,t)}),$d=()=>{me.signOut()};ru(me,t=>{Cr.set({user:t,ready:!0})});export{Pd as a,Vd as b,Bd as c,en as d,Fd as e,Md as f,Ld as g,Od as h,Gt as i,Ud as l,Rd as m,qd as n,Kt as p,$d as s,ss as u};
