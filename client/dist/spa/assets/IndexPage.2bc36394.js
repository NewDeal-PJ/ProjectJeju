import{E as xe,N as En,O as Ps,Q as Ms,L as Se,D as Ds,_ as Os,w as ie,a as Zt,e as bn,g as Be,X as yo,c as N,h as M,r as ne,Y as Co,Z as Eo,$ as bo,s as wo,n as Ne,a0 as Io,a1 as So,o as Fs,i as To,t as Tt,W as Ro,a2 as xo,j as No,u as Ni,f as ko,A as Ao,F as Rt,G as xt,I as ki,R as Po,M as Nt}from"./index.8ae85c7a.js";import{k as Mo,c as jn,l as Do,m as Oo,Q as Ai,n as Fo,h as rt}from"./QBtn.691920fc.js";import{b as Lo,u as Bo,a as Vo,c as Wo,Q as Pi}from"./QItem.5dcb4592.js";/**
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
 */const Ls={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const f=function(t,e){if(!t)throw Ze(e)},Ze=function(t){return new Error("Firebase Database ("+Ls.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Bs=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qo=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Gn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),i.push(n[h],n[u],n[d],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bs(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const g=a<<4&240|c>>2;if(i.push(g),u!==64){const y=c<<6&192|u;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Vs=function(t){const e=Bs(t);return Gn.encodeByteArray(e,!0)},Ws=function(t){return Vs(t).replace(/\./g,"")},Mi=function(t){try{return Gn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $o(t){return qs(void 0,t)}function qs(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Uo(n)||(t[n]=qs(t[n],e[n]));return t}function Uo(t){return t!=="__proto__"}/**
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
 */class Kn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Ho(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $s(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ho())}function zo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Us(){return Ls.NODE_ADMIN===!0}function jo(){return typeof indexedDB=="object"}function Go(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ko="FirebaseError";class Yn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Ko,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Yo(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Yn(s,a,i)}}function Yo(t,e){return t.replace(Qo,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Qo=/\{\$([^}]+)}/g;/**
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
 */function ut(t){return JSON.parse(t)}function Z(t){return JSON.stringify(t)}/**
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
 */const zs=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=ut(Mi(r[0])||""),n=ut(Mi(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Xo=function(t){const e=zs(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Zo=function(t){const e=zs(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ve(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ke(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Di(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ot(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function wn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Oi(r)&&Oi(o)){if(!wn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Oi(t){return t!==null&&typeof t=="object"}/**
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
 */function Jo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class ea{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function js(t,e){return`${t} failed: ${e} argument `}/**
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
 */const ta=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jt=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Qn(t){return t&&t._delegate?t._delegate:t}class ht{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Te="[DEFAULT]";/**
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
 */class na{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Kn;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sa(e))try{this.getOrInitializeService({instanceIdentifier:Te})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Te){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Te){return this.instances.has(e)}getOptions(e=Te){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ia(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Te){return this.component?this.component.multipleInstances?e:Te:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ia(t){return t===Te?void 0:t}function sa(t){return t.instantiationMode==="EAGER"}/**
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
 */class ra{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new na(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(L||(L={}));const oa={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},aa=L.INFO,la={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},ca=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=la[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gs{constructor(e){this.name=e,this._logLevel=aa,this._logHandler=ca,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const ua=(t,e)=>e.some(n=>t instanceof n);let Fi,Li;function ha(){return Fi||(Fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function da(){return Li||(Li=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ks=new WeakMap,In=new WeakMap,Ys=new WeakMap,cn=new WeakMap,Xn=new WeakMap;function fa(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ee(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ks.set(n,t)}).catch(()=>{}),Xn.set(e,t),e}function _a(t){if(In.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});In.set(t,e)}let Sn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return In.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ys.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ee(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pa(t){Sn=t(Sn)}function ga(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(un(this),e,...n);return Ys.set(i,e.sort?e.sort():[e]),Ee(i)}:da().includes(t)?function(...e){return t.apply(un(this),e),Ee(Ks.get(this))}:function(...e){return Ee(t.apply(un(this),e))}}function ma(t){return typeof t=="function"?ga(t):(t instanceof IDBTransaction&&_a(t),ua(t,ha())?new Proxy(t,Sn):t)}function Ee(t){if(t instanceof IDBRequest)return fa(t);if(cn.has(t))return cn.get(t);const e=ma(t);return e!==t&&(cn.set(t,e),Xn.set(e,t)),e}const un=t=>Xn.get(t);function va(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ee(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ee(o.result),l.oldVersion,l.newVersion,Ee(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ya=["get","getKey","getAll","getAllKeys","count"],Ca=["put","add","delete","clear"],hn=new Map;function Bi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hn.get(e))return hn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Ca.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ya.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return hn.set(e,r),r}pa(t=>({...t,get:(e,n,i)=>Bi(e,n)||t.get(e,n,i),has:(e,n)=>!!Bi(e,n)||t.has(e,n)}));/**
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
 */class Ea{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ba(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function ba(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tn="@firebase/app",Vi="0.7.29";/**
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
 */const Zn=new Gs("@firebase/app"),wa="@firebase/app-compat",Ia="@firebase/analytics-compat",Sa="@firebase/analytics",Ta="@firebase/app-check-compat",Ra="@firebase/app-check",xa="@firebase/auth",Na="@firebase/auth-compat",ka="@firebase/database",Aa="@firebase/database-compat",Pa="@firebase/functions",Ma="@firebase/functions-compat",Da="@firebase/installations",Oa="@firebase/installations-compat",Fa="@firebase/messaging",La="@firebase/messaging-compat",Ba="@firebase/performance",Va="@firebase/performance-compat",Wa="@firebase/remote-config",qa="@firebase/remote-config-compat",$a="@firebase/storage",Ua="@firebase/storage-compat",Ha="@firebase/firestore",za="@firebase/firestore-compat",ja="firebase",Ga="9.9.1";/**
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
 */const Qs="[DEFAULT]",Ka={[Tn]:"fire-core",[wa]:"fire-core-compat",[Sa]:"fire-analytics",[Ia]:"fire-analytics-compat",[Ra]:"fire-app-check",[Ta]:"fire-app-check-compat",[xa]:"fire-auth",[Na]:"fire-auth-compat",[ka]:"fire-rtdb",[Aa]:"fire-rtdb-compat",[Pa]:"fire-fn",[Ma]:"fire-fn-compat",[Da]:"fire-iid",[Oa]:"fire-iid-compat",[Fa]:"fire-fcm",[La]:"fire-fcm-compat",[Ba]:"fire-perf",[Va]:"fire-perf-compat",[Wa]:"fire-rc",[qa]:"fire-rc-compat",[$a]:"fire-gcs",[Ua]:"fire-gcs-compat",[Ha]:"fire-fst",[za]:"fire-fst-compat","fire-js":"fire-js",[ja]:"fire-js-all"};/**
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
 */const Ft=new Map,Rn=new Map;function Ya(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Lt(t){const e=t.name;if(Rn.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Rn.set(e,t);for(const n of Ft.values())Ya(n,t);return!0}function Qa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Xa={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Pe=new Hs("app","Firebase",Xa);/**
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
 */class Za{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}/**
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
 */const Ja=Ga;function el(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Qs,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Pe.create("bad-app-name",{appName:String(i)});const s=Ft.get(i);if(s){if(wn(t,s.options)&&wn(n,s.config))return s;throw Pe.create("duplicate-app",{appName:i})}const r=new ra(i);for(const a of Rn.values())r.addComponent(a);const o=new Za(t,n,r);return Ft.set(i,o),o}function tl(t=Qs){const e=Ft.get(t);if(!e)throw Pe.create("no-app",{appName:t});return e}function He(t,e,n){var i;let s=(i=Ka[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(a.join(" "));return}Lt(new ht(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const nl="firebase-heartbeat-database",il=1,dt="firebase-heartbeat-store";let dn=null;function Xs(){return dn||(dn=va(nl,il,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dt)}}}).catch(t=>{throw Pe.create("storage-open",{originalErrorMessage:t.message})})),dn}async function sl(t){var e;try{return(await Xs()).transaction(dt).objectStore(dt).get(Zs(t))}catch(n){throw Pe.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Wi(t,e){var n;try{const s=(await Xs()).transaction(dt,"readwrite");return await s.objectStore(dt).put(e,Zs(t)),s.done}catch(i){throw Pe.create("storage-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message})}}function Zs(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rl=1024,ol=30*24*60*60*1e3;class al{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cl(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=ol}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qi(),{heartbeatsToSend:n,unsentEntries:i}=ll(this._heartbeatsCache.heartbeats),s=Ws(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function qi(){return new Date().toISOString().substring(0,10)}function ll(t,e=rl){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),$i(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$i(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class cl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jo()?Go().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $i(t){return Ws(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ul(t){Lt(new ht("platform-logger",e=>new Ea(e),"PRIVATE")),Lt(new ht("heartbeat",e=>new al(e),"PRIVATE")),He(Tn,Vi,t),He(Tn,Vi,"esm2017"),He("fire-js","")}ul("");var hl="firebase",dl="9.9.1";/**
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
 */He(hl,dl,"app");const fl={apiKey:"AIzaSyBA0h1I5a-Kg0-5_CvYi4piFYJvw-rcax8",authDomain:"project-0727-d6c11.firebaseapp.com",databaseURL:"https://project-0727-d6c11-default-rtdb.firebaseio.com",projectId:"project-0727-d6c11",storageBucket:"project-0727-d6c11.appspot.com",messagingSenderId:"479172916220",appId:"1:479172916220:web:cf5eac5ec383503e82f879"},_l=el(fl),Ui="@firebase/database",Hi="0.13.3";/**
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
 */let Js="";function pl(t){Js=t}/**
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
 */class gl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Z(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ut(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ml{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ve(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const er=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gl(e)}}catch{}return new ml},ke=er("localStorage"),xn=er("sessionStorage");/**
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
 */const ze=new Gs("@firebase/database"),vl=function(){let t=1;return function(){return t++}}(),tr=function(t){const e=ta(t),n=new ea;n.update(e);const i=n.digest();return Gn.encodeByteArray(i)},Ct=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ct.apply(null,i):typeof i=="object"?e+=Z(i):e+=i,e+=" "}return e};let Ae=null,zi=!0;const yl=function(t,e){f(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ze.logLevel=L.VERBOSE,Ae=ze.log.bind(ze),e&&xn.set("logging_enabled",!0)):typeof t=="function"?Ae=t:(Ae=null,xn.remove("logging_enabled"))},ee=function(...t){if(zi===!0&&(zi=!1,Ae===null&&xn.get("logging_enabled")===!0&&yl(!0)),Ae){const e=Ct.apply(null,t);Ae(e)}},Et=function(t){return function(...e){ee(t,...e)}},Nn=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ct(...t);ze.error(e)},Me=function(...t){const e=`FIREBASE FATAL ERROR: ${Ct(...t)}`;throw ze.error(e),new Error(e)},ce=function(...t){const e="FIREBASE WARNING: "+Ct(...t);ze.warn(e)},Cl=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},El=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ye="[MIN_NAME]",De="[MAX_NAME]",Je=function(t,e){if(t===e)return 0;if(t===Ye||e===De)return-1;if(e===Ye||t===De)return 1;{const n=ji(t),i=ji(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},bl=function(t,e){return t===e?0:t<e?-1:1},tt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Z(e))},Jn=function(t){if(typeof t!="object"||t===null)return Z(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Z(e[i]),n+=":",n+=Jn(t[e[i]]);return n+="}",n},ir=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function oe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sr=function(t){f(!nr(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},wl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Il=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Sl(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Tl=new RegExp("^-?(0*)\\d{1,10}$"),Rl=-2147483648,xl=2147483647,ji=function(t){if(Tl.test(t)){const e=Number(t);if(e>=Rl&&e<=xl)return e}return null},bt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ce("Exception was thrown by user callback.",n),e},Math.floor(0))}},Nl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ot=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class kl{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Al{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class kn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kn.OWNER="owner";/**
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
 */const ei="5",rr="v",or="s",ar="r",lr="f",cr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ur="ls",hr="p",An="ac",dr="websocket",fr="long_polling";/**
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
 */class Pl{constructor(e,n,i,s,r=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ke.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ke.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ml(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _r(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===dr)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fr)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ml(t)&&(n.ns=t.namespace);const s=[];return oe(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Dl{constructor(){this.counters_={}}incrementCounter(e,n=1){ve(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $o(this.counters_)}}/**
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
 */const fn={},_n={};function ti(t){const e=t.toString();return fn[e]||(fn[e]=new Dl),fn[e]}function Ol(t,e){const n=t.toString();return _n[n]||(_n[n]=e()),_n[n]}/**
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
 */class Fl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&bt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Gi="start",Ll="close",Bl="pLPCommand",Vl="pRTLPCB",pr="id",gr="pw",mr="ser",Wl="cb",ql="seg",$l="ts",Ul="d",Hl="dframe",vr=1870,yr=30,zl=vr-yr,jl=25e3,Gl=3e4;class $e{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Et(e),this.stats_=ti(n),this.urlFn=l=>(this.appCheckToken&&(l[An]=this.appCheckToken),_r(n,fr,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Fl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gl)),El(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ni((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gi)this.id=a,this.password=l;else if(o===Ll)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Gi]="t",i[mr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Wl]=this.scriptTagHolder.uniqueCallbackIdentifier),i[rr]=ei,this.transportSessionId&&(i[or]=this.transportSessionId),this.lastSessionId&&(i[ur]=this.lastSessionId),this.applicationId&&(i[hr]=this.applicationId),this.appCheckToken&&(i[An]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&cr.test(location.hostname)&&(i[ar]=lr);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$e.forceAllow_=!0}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){return $e.forceAllow_?!0:!$e.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!wl()&&!Il()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Z(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Vs(n),s=ir(i,zl);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Hl]="t",i[pr]=e,i[gr]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Z(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ni{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vl(),window[Bl+this.uniqueCallbackIdentifier]=e,window[Vl+this.uniqueCallbackIdentifier]=n,this.myIFrame=ni.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ee("frame writing exception"),a.stack&&ee(a.stack),ee(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ee("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pr]=this.myID,e[gr]=this.myPW,e[mr]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yr+i.length<=vr;){const o=this.pendingSegs.shift();i=i+"&"+ql+s+"="+o.seg+"&"+$l+s+"="+o.ts+"&"+Ul+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(jl)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Kl=16384,Yl=45e3;let Bt=null;typeof MozWebSocket!="undefined"?Bt=MozWebSocket:typeof WebSocket!="undefined"&&(Bt=WebSocket);class ue{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Et(this.connId),this.stats_=ti(n),this.connURL=ue.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[rr]=ei,typeof location!="undefined"&&location.hostname&&cr.test(location.hostname)&&(o[ar]=lr),n&&(o[or]=n),i&&(o[ur]=i),s&&(o[An]=s),r&&(o[hr]=r),_r(e,dr,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ke.set("previous_websocket_failure",!0);try{let i;Us(),this.mySock=new Bt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Bt!==null&&!ue.forceDisallow_}static previouslyFailed(){return ke.isInMemoryStorage||ke.get("previous_websocket_failure")===!0}markConnectionHealthy(){ke.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ut(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Z(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ir(n,Kl);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Yl))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ue.responsesRequiredToBeHealthy=2;ue.healthyTimeout=3e4;/**
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
 */class ft{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$e,ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ue&&ue.isAvailable();let i=n&&!ue.previouslyFailed();if(e.webSocketOnly&&(n||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ue];else{const s=this.transports_=[];for(const r of ft.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ft.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ft.globalTransportInitialized_=!1;/**
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
 */const Ql=6e4,Xl=5e3,Zl=10*1024,Jl=100*1024,pn="t",Ki="d",ec="s",Yi="r",tc="e",Qi="o",Xi="a",Zi="n",Ji="p",nc="h";class ic{constructor(e,n,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Et("c:"+this.id+":"),this.transportManager_=new ft(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ot(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jl?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zl?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pn in e){const n=e[pn];n===Xi?this.upgradeIfSecondaryHealthy_():n===Yi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=tt("t",e),i=tt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ji,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=tt("t",e),i=tt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=tt(pn,e);if(Ki in e){const i=e[Ki];if(n===nc)this.onHandshake_(i);else if(n===Zi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ec?this.onConnectionShutdown_(i):n===Yi?this.onReset_(i):n===tc?Nn("Server Error: "+i):n===Qi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nn("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ei!==i&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ot(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ql))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ot(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xl))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ji,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ke.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Cr{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Er{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Vt extends Er{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!$s()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vt}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const es=32,ts=768;class F{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function D(){return new F("")}function k(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function we(t){return t.pieces_.length-t.pieceNum_}function B(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new F(t.pieces_,e)}function br(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sc(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ir(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new F(e,0)}function K(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof F)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new F(n,0)}function A(t){return t.pieceNum_>=t.pieces_.length}function se(t,e){const n=k(t),i=k(e);if(n===null)return e;if(n===i)return se(B(t),B(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ii(t,e){if(we(t)!==we(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function he(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(we(t)>we(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class rc{constructor(e,n){this.errorPrefix_=n,this.parts_=wr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Jt(this.parts_[i]);Sr(this)}}function oc(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jt(e),Sr(t)}function ac(t){const e=t.parts_.pop();t.byteLength_-=Jt(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sr(t){if(t.byteLength_>ts)throw new Error(t.errorPrefix_+"has a key path longer than "+ts+" bytes ("+t.byteLength_+").");if(t.parts_.length>es)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+es+") or object contains a cycle "+Re(t))}function Re(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class si extends Er{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new si}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const nt=1e3,lc=60*5*1e3,ns=30*1e3,cc=1.3,uc=3e4,hc="server_kill",is=3;class me extends Cr{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=me.nextPersistentConnectionId_++,this.log_=Et("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=nt,this.maxReconnectDelay_=lc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Us())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");si.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Z(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Kn,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;me.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ve(e,"w")){const i=Ke(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Zo(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ns)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Xo(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nn("Unrecognized action received from server: "+Z(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uc&&(this.reconnectDelay_=nt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+me.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ee("getToken() completed but was canceled"):(ee("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new ic(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{ce(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(hc)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ce(u),l())}}}interrupt(e){ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Di(this.interruptReasons_)&&(this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Jn(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new F(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=is&&(this.reconnectDelay_=ns,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=is&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Js.replace(/\./g,"-")]=1,$s()?e["framework.cordova"]=1:zo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vt.getInstance().currentlyOnline();return Di(this.interruptReasons_)&&e}}me.nextPersistentConnectionId_=0;me.nextConnectionId_=0;/**
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
 */class R{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new R(e,n)}}/**
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
 */class en{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new R(Ye,e),s=new R(Ye,n);return this.compare(i,s)!==0}minPost(){return R.MIN}}/**
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
 */let kt;class Tr extends en{static get __EMPTY_NODE(){return kt}static set __EMPTY_NODE(e){kt=e}compare(e,n){return Je(e.name,n.name)}isDefinedOn(e){throw Ze("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return R.MIN}maxPost(){return new R(De,kt)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new R(e,kt)}toString(){return".key"}}const je=new Tr;/**
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
 */class At{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class X{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:X.RED,this.left=s!=null?s:re.EMPTY_NODE,this.right=r!=null?r:re.EMPTY_NODE}copy(e,n,i,s,r){return new X(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return re.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}X.RED=!0;X.BLACK=!1;class dc{copy(e,n,i,s,r){return this}insert(e,n,i){return new X(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class re{constructor(e,n=re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,X.BLACK,null,null))}remove(e){return new re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,X.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new At(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new At(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new At(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new At(this.root_,null,this.comparator_,!0,e)}}re.EMPTY_NODE=new dc;/**
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
 */function fc(t,e){return Je(t.name,e.name)}function ri(t,e){return Je(t,e)}/**
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
 */let Pn;function _c(t){Pn=t}const Rr=function(t){return typeof t=="number"?"number:"+sr(t):"string:"+t},xr=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ve(e,".sv"),"Priority must be a string or number.")}else f(t===Pn||t.isEmpty(),"priority of unexpected type.");f(t===Pn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ss;class Q{constructor(e,n=Q.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xr(this.priorityNode_)}static set __childrenNodeConstructor(e){ss=e}static get __childrenNodeConstructor(){return ss}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Q(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Q.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return A(e)?this:k(e)===".priority"?this.priorityNode_:Q.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Q.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=k(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||we(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Q.__childrenNodeConstructor.EMPTY_NODE.updateChild(B(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Rr(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sr(this.value_):e+=this.value_,this.lazyHash_=tr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Q.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Q.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Q.VALUE_TYPE_ORDER.indexOf(n),r=Q.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Q.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Nr,kr;function pc(t){Nr=t}function gc(t){kr=t}class mc extends en{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Je(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return R.MIN}maxPost(){return new R(De,new Q("[PRIORITY-POST]",kr))}makePost(e,n){const i=Nr(e);return new R(n,new Q("[PRIORITY-POST]",i))}toString(){return".priority"}}const $=new mc;/**
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
 */const vc=Math.log(2);class yc{constructor(e){const n=r=>parseInt(Math.log(r)/vc,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wt=function(t,e,n,i){t.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=t[l],d=n?n(u):u,new X(d,u.node,X.BLACK,null,null);{const g=parseInt(h/2,10)+l,y=s(l,g),P=s(g+1,c);return u=t[g],d=n?n(u):u,new X(d,u.node,X.BLACK,y,P)}},r=function(l){let c=null,h=null,u=t.length;const d=function(y,P){const x=u-y,z=u;u-=y;const Y=s(x+1,z),H=t[x],j=n?n(H):H;g(new X(j,H.node,P,null,Y))},g=function(y){c?(c.left=y,c=y):(h=y,c=y)};for(let y=0;y<l.count;++y){const P=l.nextBitIsOne(),x=Math.pow(2,l.count-(y+1));P?d(x,X.BLACK):(d(x,X.BLACK),d(x,X.RED))}return h},o=new yc(t.length),a=r(o);return new re(i||e,a)};/**
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
 */let gn;const qe={};class ge{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return f(qe&&$,"ChildrenNode.ts has not been loaded"),gn=gn||new ge({".priority":qe},{".priority":$}),gn}get(e){const n=Ke(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof re?n:null}hasIndex(e){return ve(this.indexSet_,e.toString())}addIndex(e,n){f(e!==je,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(R.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Wt(i,e.getCompare()):a=qe;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new ge(h,c)}addToIndexes(e,n){const i=Ot(this.indexes_,(s,r)=>{const o=Ke(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===qe)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(R.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Wt(a,o.getCompare())}else return qe;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new R(e.name,a))),l.insert(e,e.node)}});return new ge(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ot(this.indexes_,s=>{if(s===qe)return s;{const r=n.get(e.name);return r?s.remove(new R(e.name,r)):s}});return new ge(i,this.indexSet_)}}/**
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
 */let it;class I{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&xr(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return it||(it=new I(new re(ri),null,ge.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||it}updatePriority(e){return this.children_.isEmpty()?this:new I(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?it:n}}getChild(e){const n=k(e);return n===null?this:this.getImmediateChild(n).getChild(B(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new R(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?it:this.priorityNode_;return new I(s,o,r)}}updateChild(e,n){const i=k(e);if(i===null)return n;{f(k(e)!==".priority"||we(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(B(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild($,(o,a)=>{n[o]=a.val(e),i++,r&&I.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Rr(this.getPriority().val())+":"),this.forEachChild($,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":tr(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new R(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new R(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new R(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,R.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,R.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wt?-1:0}withIndex(e){if(e===je||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new I(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===je||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator($),s=n.getIterator($);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===je?null:this.indexMap_.get(e.toString())}}I.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cc extends I{constructor(){super(new re(ri),I.EMPTY_NODE,ge.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return I.EMPTY_NODE}isEmpty(){return!1}}const wt=new Cc;Object.defineProperties(R,{MIN:{value:new R(Ye,I.EMPTY_NODE)},MAX:{value:new R(De,wt)}});Tr.__EMPTY_NODE=I.EMPTY_NODE;Q.__childrenNodeConstructor=I;_c(wt);gc(wt);/**
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
 */const Ec=!0;function te(t,e=null){if(t===null)return I.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Q(n,te(e))}if(!(t instanceof Array)&&Ec){const n=[];let i=!1;if(oe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=te(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new R(o,l)))}}),n.length===0)return I.EMPTY_NODE;const r=Wt(n,fc,o=>o.name,ri);if(i){const o=Wt(n,$.getCompare());return new I(r,te(e),new ge({".priority":o},{".priority":$}))}else return new I(r,te(e),ge.Default)}else{let n=I.EMPTY_NODE;return oe(t,(i,s)=>{if(ve(t,i)&&i.substring(0,1)!=="."){const r=te(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(te(e))}}pc(te);/**
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
 */class bc extends en{constructor(e){super(),this.indexPath_=e,f(!A(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Je(e.name,n.name):r}makePost(e,n){const i=te(e),s=I.EMPTY_NODE.updateChild(this.indexPath_,i);return new R(n,s)}maxPost(){const e=I.EMPTY_NODE.updateChild(this.indexPath_,wt);return new R(De,e)}toString(){return wr(this.indexPath_,0).join("/")}}/**
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
 */class wc extends en{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Je(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return R.MIN}maxPost(){return R.MAX}makePost(e,n){const i=te(e);return new R(n,i)}toString(){return".value"}}const Ic=new wc;/**
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
 */function Ar(t){return{type:"value",snapshotNode:t}}function Qe(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _t(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function pt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Sc(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class oi{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(_t(n,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qe(n,i)):o.trackChildChange(pt(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild($,(s,r)=>{n.hasChild(s)||i.trackChildChange(_t(s,r))}),n.isLeafNode()||n.forEachChild($,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(pt(s,r,o))}else i.trackChildChange(Qe(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?I.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class gt{constructor(e){this.indexedFilter_=new oi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gt.getStartPost_(e),this.endPost_=gt.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,s,r,o){return this.matches(new R(n,i))||(i=I.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=I.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(I.EMPTY_NODE);const r=this;return n.forEachChild($,(o,a)=>{r.matches(new R(o,a))||(s=s.updateImmediateChild(o,I.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Tc{constructor(e){this.rangedFilter_=new gt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new R(n,i))||(i=I.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=I.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=I.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=n.withIndex(this.index_),s=s.updatePriority(I.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();a=(d,g)=>u(g,d)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,h=!1;for(;l.hasNext();){const u=l.getNext();!h&&a(r,u)<=0&&(h=!0),h&&c<this.limit_&&a(u,o)<=0?c++:s=s.updateImmediateChild(u.name,I.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,g)=>u(g,d)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new R(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,l);if(h&&!i.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(pt(n,i,u)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(_t(n,u));const P=a.updateImmediateChild(n,I.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Qe(d.name,d.node)),P.updateImmediateChild(d.name,d.node)):P}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(_t(c.name,c.node)),r.trackChildChange(Qe(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,I.EMPTY_NODE)):e}}/**
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
 */class ai{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ye}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:De}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$}copy(){const e=new ai;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rc(t){return t.loadsAllData()?new oi(t.getIndex()):t.hasLimit()?new Tc(t):new gt(t)}function rs(t){const e={};if(t.isDefault())return e;let n;return t.index_===$?n="$priority":t.index_===Ic?n="$value":t.index_===je?n="$key":(f(t.index_ instanceof bc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Z(n),t.startSet_&&(e.startAt=Z(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Z(t.indexStartName_))),t.endSet_&&(e.endAt=Z(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Z(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function os(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$&&(e.i=t.index_.toString()),e}/**
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
 */class qt extends Cr{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Et("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=qt.getListenId_(e,i),a={};this.listens_[o]=a;const l=rs(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),Ke(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=qt.getListenId_(e,n);delete this.listens_[i]}get(e){const n=rs(e._queryParams),i=e._path.toString(),s=new Kn;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Jo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ut(a.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class xc{constructor(){this.rootNode_=I.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function $t(){return{value:null,children:new Map}}function Pr(t,e,n){if(A(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=k(e);t.children.has(i)||t.children.set(i,$t());const s=t.children.get(i);e=B(e),Pr(s,e,n)}}function Mn(t,e,n){t.value!==null?n(e,t.value):Nc(t,(i,s)=>{const r=new F(e.toString()+"/"+i);Mn(s,r,n)})}function Nc(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class kc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&oe(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const as=10*1e3,Ac=30*1e3,Pc=5*60*1e3;class Mc{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kc(e);const i=as+(Ac-as)*Math.random();ot(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;oe(e,(s,r)=>{r>0&&ve(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),ot(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pc))}}/**
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
 */var de;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(de||(de={}));function Mr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function li(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ci(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ut{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=de.ACK_USER_WRITE,this.source=Mr()}operationForChild(e){if(A(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new F(e));return new Ut(D(),n,this.revert)}}else return f(k(this.path)===e,"operationForChild called for unrelated child."),new Ut(B(this.path),this.affectedTree,this.revert)}}/**
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
 */class mt{constructor(e,n){this.source=e,this.path=n,this.type=de.LISTEN_COMPLETE}operationForChild(e){return A(this.path)?new mt(this.source,D()):new mt(this.source,B(this.path))}}/**
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
 */class Oe{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=de.OVERWRITE}operationForChild(e){return A(this.path)?new Oe(this.source,D(),this.snap.getImmediateChild(e)):new Oe(this.source,B(this.path),this.snap)}}/**
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
 */class vt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=de.MERGE}operationForChild(e){if(A(this.path)){const n=this.children.subtree(new F(e));return n.isEmpty()?null:n.value?new Oe(this.source,D(),n.value):new vt(this.source,D(),n)}else return f(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vt(this.source,B(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fe{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(A(e))return this.isFullyInitialized()&&!this.filtered_;const n=k(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Dc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Oc(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Sc(o.childName,o.snapshotNode))}),st(t,s,"child_removed",e,i,n),st(t,s,"child_added",e,i,n),st(t,s,"child_moved",r,i,n),st(t,s,"child_changed",e,i,n),st(t,s,"value",e,i,n),s}function st(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Lc(t,a,l)),o.forEach(a=>{const l=Fc(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Fc(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Lc(t,e,n){if(e.childName==null||n.childName==null)throw Ze("Should only compare child_ events.");const i=new R(e.childName,e.snapshotNode),s=new R(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function tn(t,e){return{eventCache:t,serverCache:e}}function at(t,e,n,i){return tn(new Fe(e,n,i),t.serverCache)}function Dr(t,e,n,i){return tn(t.eventCache,new Fe(e,n,i))}function Dn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Le(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let mn;const Bc=()=>(mn||(mn=new re(bl)),mn);class W{constructor(e,n=Bc()){this.value=e,this.children=n}static fromObject(e){let n=new W(null);return oe(e,(i,s)=>{n=n.set(new F(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:D(),value:this.value};if(A(e))return null;{const i=k(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(B(e),n);return r!=null?{path:K(new F(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(A(e))return this;{const n=k(e),i=this.children.get(n);return i!==null?i.subtree(B(e)):new W(null)}}set(e,n){if(A(e))return new W(n,this.children);{const i=k(e),r=(this.children.get(i)||new W(null)).set(B(e),n),o=this.children.insert(i,r);return new W(this.value,o)}}remove(e){if(A(e))return this.children.isEmpty()?new W(null):new W(null,this.children);{const n=k(e),i=this.children.get(n);if(i){const s=i.remove(B(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new W(null):new W(this.value,r)}else return this}}get(e){if(A(e))return this.value;{const n=k(e),i=this.children.get(n);return i?i.get(B(e)):null}}setTree(e,n){if(A(e))return n;{const i=k(e),r=(this.children.get(i)||new W(null)).setTree(B(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new W(this.value,o)}}fold(e){return this.fold_(D(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(K(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,D(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(A(e))return null;{const r=k(e),o=this.children.get(r);return o?o.findOnPath_(B(e),K(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,D(),n)}foreachOnPath_(e,n,i){if(A(e))return this;{this.value&&i(n,this.value);const s=k(e),r=this.children.get(s);return r?r.foreachOnPath_(B(e),K(n,s),i):new W(null)}}foreach(e){this.foreach_(D(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(K(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class fe{constructor(e){this.writeTree_=e}static empty(){return new fe(new W(null))}}function lt(t,e,n){if(A(e))return new fe(new W(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=se(s,e);return r=r.updateChild(o,n),new fe(t.writeTree_.set(s,r))}else{const s=new W(n),r=t.writeTree_.setTree(e,s);return new fe(r)}}}function ls(t,e,n){let i=t;return oe(n,(s,r)=>{i=lt(i,K(e,s),r)}),i}function cs(t,e){if(A(e))return fe.empty();{const n=t.writeTree_.setTree(e,new W(null));return new fe(n)}}function On(t,e){return Ve(t,e)!=null}function Ve(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(se(n.path,e)):null}function us(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($,(i,s)=>{e.push(new R(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new R(i,s.value))}),e}function be(t,e){if(A(e))return t;{const n=Ve(t,e);return n!=null?new fe(new W(n)):new fe(t.writeTree_.subtree(e))}}function Fn(t){return t.writeTree_.isEmpty()}function Xe(t,e){return Or(D(),t.writeTree_,e)}function Or(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Or(K(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(K(t,".priority"),i)),n}}/**
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
 */function ui(t,e){return Vr(e,t)}function Vc(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=lt(t.visibleWrites,e,n)),t.lastWriteId=i}function Wc(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function qc(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$c(a,i.path)?s=!1:he(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Uc(t),!0;if(i.snap)t.visibleWrites=cs(t.visibleWrites,i.path);else{const a=i.children;oe(a,l=>{t.visibleWrites=cs(t.visibleWrites,K(i.path,l))})}return!0}else return!1}function $c(t,e){if(t.snap)return he(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&he(K(t.path,n),e))return!0;return!1}function Uc(t){t.visibleWrites=Fr(t.allWrites,Hc,D()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Hc(t){return t.visible}function Fr(t,e,n){let i=fe.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)he(n,o)?(a=se(n,o),i=lt(i,a,r.snap)):he(o,n)&&(a=se(o,n),i=lt(i,D(),r.snap.getChild(a)));else if(r.children){if(he(n,o))a=se(n,o),i=ls(i,a,r.children);else if(he(o,n))if(a=se(o,n),A(a))i=ls(i,D(),r.children);else{const l=Ke(r.children,k(a));if(l){const c=l.getChild(B(a));i=lt(i,D(),c)}}}else throw Ze("WriteRecord should have .snap or .children")}}return i}function Lr(t,e,n,i,s){if(!i&&!s){const r=Ve(t.visibleWrites,e);if(r!=null)return r;{const o=be(t.visibleWrites,e);if(Fn(o))return n;if(n==null&&!On(o,D()))return null;{const a=n||I.EMPTY_NODE;return Xe(o,a)}}}else{const r=be(t.visibleWrites,e);if(!s&&Fn(r))return n;if(!s&&n==null&&!On(r,D()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(he(c.path,e)||he(e,c.path))},a=Fr(t.allWrites,o,e),l=n||I.EMPTY_NODE;return Xe(a,l)}}}function zc(t,e,n){let i=I.EMPTY_NODE;const s=Ve(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild($,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=be(t.visibleWrites,e);return n.forEachChild($,(o,a)=>{const l=Xe(be(r,new F(o)),a);i=i.updateImmediateChild(o,l)}),us(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=be(t.visibleWrites,e);return us(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function jc(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=K(e,n);if(On(t.visibleWrites,r))return null;{const o=be(t.visibleWrites,r);return Fn(o)?s.getChild(n):Xe(o,s.getChild(n))}}function Gc(t,e,n,i){const s=K(e,n),r=Ve(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=be(t.visibleWrites,s);return Xe(o,i.getNode().getImmediateChild(n))}else return null}function Kc(t,e){return Ve(t.visibleWrites,e)}function Yc(t,e,n,i,s,r,o){let a;const l=be(t.visibleWrites,e),c=Ve(l,D());if(c!=null)a=c;else if(n!=null)a=Xe(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=d.getNext();for(;g&&h.length<s;)u(g,i)!==0&&h.push(g),g=d.getNext();return h}else return[]}function Qc(){return{visibleWrites:fe.empty(),allWrites:[],lastWriteId:-1}}function Ht(t,e,n,i){return Lr(t.writeTree,t.treePath,e,n,i)}function hi(t,e){return zc(t.writeTree,t.treePath,e)}function hs(t,e,n,i){return jc(t.writeTree,t.treePath,e,n,i)}function zt(t,e){return Kc(t.writeTree,K(t.treePath,e))}function Xc(t,e,n,i,s,r){return Yc(t.writeTree,t.treePath,e,n,i,s,r)}function di(t,e,n){return Gc(t.writeTree,t.treePath,e,n)}function Br(t,e){return Vr(K(t.treePath,e),t.writeTree)}function Vr(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Zc{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,pt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,_t(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Qe(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,pt(i,e.snapshotNode,s.oldSnap));else throw Ze("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Jc{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Wr=new Jc;class fi{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Fe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return di(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Le(this.viewCache_),r=Xc(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function eu(t){return{filter:t}}function tu(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nu(t,e,n,i,s){const r=new Zc;let o,a;if(n.type===de.OVERWRITE){const c=n;c.source.fromUser?o=Ln(t,e,c.path,c.snap,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!A(c.path),o=jt(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===de.MERGE){const c=n;c.source.fromUser?o=su(t,e,c.path,c.children,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Bn(t,e,c.path,c.children,i,s,a,r))}else if(n.type===de.ACK_USER_WRITE){const c=n;c.revert?o=au(t,e,c.path,i,s,r):o=ru(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===de.LISTEN_COMPLETE)o=ou(t,e,n.path,i,r);else throw Ze("Unknown operation type: "+n.type);const l=r.getChanges();return iu(e,o,l),{viewCache:o,changes:l}}function iu(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Dn(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Ar(Dn(e)))}}function qr(t,e,n,i,s,r){const o=e.eventCache;if(zt(i,n)!=null)return e;{let a,l;if(A(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Le(e),h=c instanceof I?c:I.EMPTY_NODE,u=hi(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Ht(i,Le(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=k(n);if(c===".priority"){f(we(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=hs(i,n,h,l);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=B(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=hs(i,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=di(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return at(e,a,o.isFullyInitialized()||A(n),t.filter.filtersNodes())}}function jt(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(A(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),g,null)}else{const g=k(n);if(!l.isCompleteForPath(n)&&we(n)>1)return e;const y=B(n),x=l.getNode().getImmediateChild(g).updateChild(y,i);g===".priority"?c=h.updatePriority(l.getNode(),x):c=h.updateChild(l.getNode(),g,x,y,Wr,null)}const u=Dr(e,c,l.isFullyInitialized()||A(n),h.filtersNodes()),d=new fi(s,u,r);return qr(t,u,n,s,d,a)}function Ln(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const h=new fi(s,e,r);if(A(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=at(e,c,!0,t.filter.filtersNodes());else{const u=k(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=at(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=B(n),g=a.getNode().getImmediateChild(u);let y;if(A(d))y=i;else{const P=h.getCompleteChild(u);P!=null?br(d)===".priority"&&P.getChild(Ir(d)).isEmpty()?y=P:y=P.updateChild(d,i):y=I.EMPTY_NODE}if(g.equals(y))l=e;else{const P=t.filter.updateChild(a.getNode(),u,y,d,h,o);l=at(e,P,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ds(t,e){return t.eventCache.isCompleteForChild(e)}function su(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=K(n,l);ds(e,k(h))&&(a=Ln(t,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=K(n,l);ds(e,k(h))||(a=Ln(t,a,h,c,s,r,o))}),a}function fs(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Bn(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;A(n)?c=i:c=new W(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),y=fs(t,g,d);l=jt(t,l,new F(u),y,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const g=!e.serverCache.isCompleteForChild(u)&&d.value===void 0;if(!h.hasChild(u)&&!g){const y=e.serverCache.getNode().getImmediateChild(u),P=fs(t,y,d);l=jt(t,l,new F(u),P,s,r,o,a)}}),l}function ru(t,e,n,i,s,r,o){if(zt(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(A(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return jt(t,e,n,l.getNode().getChild(n),s,r,a,o);if(A(n)){let c=new W(null);return l.getNode().forEachChild(je,(h,u)=>{c=c.set(new F(h),u)}),Bn(t,e,n,c,s,r,a,o)}else return e}else{let c=new W(null);return i.foreach((h,u)=>{const d=K(n,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Bn(t,e,n,c,s,r,a,o)}}function ou(t,e,n,i,s){const r=e.serverCache,o=Dr(e,r.getNode(),r.isFullyInitialized()||A(n),r.isFiltered());return qr(t,o,n,i,Wr,s)}function au(t,e,n,i,s,r){let o;if(zt(i,n)!=null)return e;{const a=new fi(i,e,s),l=e.eventCache.getNode();let c;if(A(n)||k(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Ht(i,Le(e));else{const u=e.serverCache.getNode();f(u instanceof I,"serverChildren would be complete if leaf node"),h=hi(i,u)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=k(n);let u=di(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=t.filter.updateChild(l,h,u,B(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,I.EMPTY_NODE,B(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ht(i,Le(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||zt(i,D())!=null,at(e,c,o,t.filter.filtersNodes())}}/**
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
 */class lu{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new oi(i.getIndex()),r=Rc(i);this.processor_=eu(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(I.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(I.EMPTY_NODE,a.getNode(),null),h=new Fe(l,o.isFullyInitialized(),s.filtersNodes()),u=new Fe(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=tn(u,h),this.eventGenerator_=new Dc(this.query_)}get query(){return this.query_}}function cu(t){return t.viewCache_.serverCache.getNode()}function uu(t,e){const n=Le(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!A(e)&&!n.getImmediateChild(k(e)).isEmpty())?n.getChild(e):null}function _s(t){return t.eventRegistrations_.length===0}function hu(t,e){t.eventRegistrations_.push(e)}function ps(t,e,n){const i=[];if(n){f(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function gs(t,e,n,i){e.type===de.MERGE&&e.source.queryId!==null&&(f(Le(t.viewCache_),"We should always have a full cache before handling merges"),f(Dn(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=nu(t.processor_,s,e,n,i);return tu(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,$r(t,r.changes,r.viewCache.eventCache.getNode(),null)}function du(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($,(r,o)=>{i.push(Qe(r,o))}),n.isFullyInitialized()&&i.push(Ar(n.getNode())),$r(t,i,n.getNode(),e)}function $r(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Oc(t.eventGenerator_,e,n,s)}/**
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
 */let Gt;class fu{constructor(){this.views=new Map}}function _u(t){f(!Gt,"__referenceConstructor has already been defined"),Gt=t}function pu(){return f(Gt,"Reference.ts has not been loaded"),Gt}function gu(t){return t.views.size===0}function _i(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),gs(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(gs(o,e,n,i));return r}}function mu(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ht(n,s?i:null),l=!1;a?l=!0:i instanceof I?(a=hi(n,i),l=!1):(a=I.EMPTY_NODE,l=!1);const c=tn(new Fe(a,l,!1),new Fe(i,s,!1));return new lu(e,c)}return o}function vu(t,e,n,i,s,r){const o=mu(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hu(o,n),du(o,n)}function yu(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Ie(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(ps(c,n,i)),_s(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(ps(l,n,i)),_s(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ie(t)&&r.push(new(pu())(e._repo,e._path)),{removed:r,events:o}}function Ur(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ge(t,e){let n=null;for(const i of t.views.values())n=n||uu(i,e);return n}function Hr(t,e){if(e._queryParams.loadsAllData())return nn(t);{const i=e._queryIdentifier;return t.views.get(i)}}function zr(t,e){return Hr(t,e)!=null}function Ie(t){return nn(t)!=null}function nn(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Kt;function Cu(t){f(!Kt,"__referenceConstructor has already been defined"),Kt=t}function Eu(){return f(Kt,"Reference.ts has not been loaded"),Kt}let bu=1;class ms{constructor(e){this.listenProvider_=e,this.syncPointTree_=new W(null),this.pendingWriteTree_=Qc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wu(t,e,n,i,s){return Vc(t.pendingWriteTree_,e,n,i,s),s?It(t,new Oe(Mr(),e,n)):[]}function Ue(t,e,n=!1){const i=Wc(t.pendingWriteTree_,e);if(qc(t.pendingWriteTree_,e)){let r=new W(null);return i.snap!=null?r=r.set(D(),!0):oe(i.children,o=>{r=r.set(new F(o),!0)}),It(t,new Ut(i.path,r,n))}else return[]}function sn(t,e,n){return It(t,new Oe(li(),e,n))}function Iu(t,e,n){const i=W.fromObject(n);return It(t,new vt(li(),e,i))}function Su(t,e){return It(t,new mt(li(),e))}function Tu(t,e,n){const i=pi(t,n);if(i){const s=gi(i),r=s.path,o=s.queryId,a=se(r,e),l=new mt(ci(o),a);return mi(t,r,l)}else return[]}function Vn(t,e,n,i){const s=e._path,r=t.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||zr(r,e))){const a=yu(r,e,n,i);gu(r)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const l=a.removed;o=a.events;const c=l.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(u,d)=>Ie(d));if(c&&!h){const u=t.syncPointTree_.subtree(s);if(!u.isEmpty()){const d=ku(u);for(let g=0;g<d.length;++g){const y=d[g],P=y.query,x=Yr(t,y);t.listenProvider_.startListening(ct(P),Yt(t,P),x.hashFn,x.onComplete)}}}!h&&l.length>0&&!i&&(c?t.listenProvider_.stopListening(ct(e),null):l.forEach(u=>{const d=t.queryToTagMap.get(rn(u));t.listenProvider_.stopListening(ct(u),d)})),Au(t,l)}return o}function Ru(t,e,n,i){const s=pi(t,i);if(s!=null){const r=gi(s),o=r.path,a=r.queryId,l=se(o,e),c=new Oe(ci(a),l,n);return mi(t,o,c)}else return[]}function xu(t,e,n,i){const s=pi(t,i);if(s){const r=gi(s),o=r.path,a=r.queryId,l=se(o,e),c=W.fromObject(n),h=new vt(ci(a),l,c);return mi(t,o,h)}else return[]}function Nu(t,e){const n=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(n,(c,h)=>{const u=se(c,n);i=i||Ge(h,u),s=s||Ie(h)});let r=e.syncPointTree_.get(n);r?(s=s||Ie(r),i=i||Ge(r,D())):(r=new fu,e.syncPointTree_=e.syncPointTree_.set(n,r));let o;i!=null?o=!0:(o=!1,i=I.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((h,u)=>{const d=Ge(u,D());d&&(i=i.updateImmediateChild(h,d))}));const a=zr(r,t);if(!a&&!t._queryParams.loadsAllData()){const c=rn(t);f(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");const h=Pu();e.queryToTagMap.set(c,h),e.tagToQueryMap.set(h,c)}const l=ui(e.pendingWriteTree_,n);return{syncPoint:r,writesCache:l,serverCache:i,serverCacheComplete:o,foundAncestorDefaultView:s,viewAlreadyExists:a}}function vs(t,e,n){const{syncPoint:i,serverCache:s,writesCache:r,serverCacheComplete:o,viewAlreadyExists:a,foundAncestorDefaultView:l}=Nu(e,t);let c=vu(i,e,n,r,s,o);if(!a&&!l){const h=Hr(i,e);c=c.concat(Mu(t,e,h))}return c}function jr(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=se(o,e),c=Ge(a,l);if(c)return c});return Lr(s,e,r,n,!0)}function It(t,e){return Gr(e,t.syncPointTree_,null,ui(t.pendingWriteTree_,D()))}function Gr(t,e,n,i){if(A(t.path))return Kr(t,e,n,i);{const s=e.get(D());n==null&&s!=null&&(n=Ge(s,D()));let r=[];const o=k(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=Br(i,o);r=r.concat(Gr(a,l,c,h))}return s&&(r=r.concat(_i(s,t,i,n))),r}}function Kr(t,e,n,i){const s=e.get(D());n==null&&s!=null&&(n=Ge(s,D()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Br(i,o),h=t.operationForChild(o);h&&(r=r.concat(Kr(h,a,l,c)))}),s&&(r=r.concat(_i(s,t,i,n))),r}function Yr(t,e){const n=e.query,i=Yt(t,n);return{hashFn:()=>(cu(e)||I.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Tu(t,n._path,i):Su(t,n._path);{const r=Sl(s,n);return Vn(t,n,null,r)}}}}function Yt(t,e){const n=rn(e);return t.queryToTagMap.get(n)}function rn(t){return t._path.toString()+"$"+t._queryIdentifier}function pi(t,e){return t.tagToQueryMap.get(e)}function gi(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new F(t.substr(0,e))}}function mi(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=ui(t.pendingWriteTree_,e);return _i(i,n,s,null)}function ku(t){return t.fold((e,n,i)=>{if(n&&Ie(n))return[nn(n)];{let s=[];return n&&(s=Ur(n)),oe(i,(r,o)=>{s=s.concat(o)}),s}})}function ct(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Eu())(t._repo,t._path):t}function Au(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=rn(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Pu(){return bu++}function Mu(t,e,n){const i=e._path,s=Yt(t,e),r=Yr(t,n),o=t.listenProvider_.startListening(ct(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)f(!Ie(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!A(c)&&h&&Ie(h))return[nn(h).query];{let d=[];return h&&(d=d.concat(Ur(h).map(g=>g.query))),oe(u,(g,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(ct(h),Yt(t,h))}}return o}/**
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
 */class vi{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vi(n)}node(){return this.node_}}class yi{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=K(this.path_,e);return new yi(this.syncTree_,n)}node(){return jr(this.syncTree_,this.path_)}}const Du=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ys=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ou(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Fu(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ou=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},Fu=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Lu=function(t,e,n,i){return Ci(e,new yi(n,t),i)},Bu=function(t,e,n){return Ci(t,new vi(e),n)};function Ci(t,e,n){const i=t.getPriority().val(),s=ys(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ys(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Q(a,te(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Q(s))),o.forEachChild($,(a,l)=>{const c=Ci(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Ei{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function bi(t,e){let n=e instanceof F?e:new F(e),i=t,s=k(n);for(;s!==null;){const r=Ke(i.node.children,s)||{children:{},childCount:0};i=new Ei(s,i,r),n=B(n),s=k(n)}return i}function et(t){return t.node.value}function Qr(t,e){t.node.value=e,Wn(t)}function Xr(t){return t.node.childCount>0}function Vu(t){return et(t)===void 0&&!Xr(t)}function on(t,e){oe(t.node.children,(n,i)=>{e(new Ei(n,t,i))})}function Zr(t,e,n,i){n&&!i&&e(t),on(t,s=>{Zr(s,e,!0,i)}),n&&i&&e(t)}function Wu(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function St(t){return new F(t.parent===null?t.name:St(t.parent)+"/"+t.name)}function Wn(t){t.parent!==null&&qu(t.parent,t.name,t)}function qu(t,e,n){const i=Vu(n),s=ve(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Wn(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Wn(t))}/**
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
 */const $u=/[\[\].#$\/\u0000-\u001F\u007F]/,Uu=/[\[\].#$\u0000-\u001F\u007F]/,vn=10*1024*1024,Jr=function(t){return typeof t=="string"&&t.length!==0&&!$u.test(t)},eo=function(t){return typeof t=="string"&&t.length!==0&&!Uu.test(t)},Hu=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),eo(t)},to=function(t,e,n){const i=n instanceof F?new rc(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Re(i));if(typeof e=="function")throw new Error(t+"contains a function "+Re(i)+" with contents = "+e.toString());if(nr(e))throw new Error(t+"contains "+e.toString()+" "+Re(i));if(typeof e=="string"&&e.length>vn/3&&Jt(e)>vn)throw new Error(t+"contains a string greater than "+vn+" utf8 bytes "+Re(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(oe(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Jr(o)))throw new Error(t+" contains an invalid key ("+o+") "+Re(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oc(i,o),to(t,a,i),ac(i)}),s&&r)throw new Error(t+' contains ".value" child '+Re(i)+" in addition to actual children.")}},no=function(t,e,n,i){if(!(i&&n===void 0)&&!eo(n))throw new Error(js(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zu=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),no(t,e,n,i)},ju=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Hu(n))throw new Error(js(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Gu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function io(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!ii(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function so(t,e,n){io(t,n),ro(t,i=>ii(i,e))}function We(t,e,n){io(t,n),ro(t,i=>he(i,e)||he(e,i))}function ro(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Ku(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ku(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ae&&ee("event: "+n.toString()),bt(i)}}}/**
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
 */const Yu="repo_interrupt",Qu=25;class Xu{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$t(),this.transactionQueueTree_=new Ei,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zu(t,e,n){if(t.stats_=ti(t.repoInfo_),t.forceRestClient_||Nl())t.server_=new qt(t.repoInfo_,(i,s,r,o)=>{Cs(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Es(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new me(t.repoInfo_,e,(i,s,r,o)=>{Cs(t,i,s,r,o)},i=>{Es(t,i)},i=>{eh(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Ol(t.repoInfo_,()=>new Mc(t.stats_,t.server_)),t.infoData_=new xc,t.infoSyncTree_=new ms({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=sn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wi(t,"connected",!1),t.serverSyncTree_=new ms({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);We(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Ju(t){const n=t.infoData_.getNode(new F(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function oo(t){return Du({timestamp:Ju(t)})}function Cs(t,e,n,i,s){t.dataUpdateCount++;const r=new F(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Ot(n,c=>te(c));o=xu(t.serverSyncTree_,r,l,s)}else{const l=te(n);o=Ru(t.serverSyncTree_,r,l,s)}else if(i){const l=Ot(n,c=>te(c));o=Iu(t.serverSyncTree_,r,l)}else{const l=te(n);o=sn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Si(t,r)),We(t.eventQueue_,a,o)}function Es(t,e){wi(t,"connected",e),e===!1&&nh(t)}function eh(t,e){oe(e,(n,i)=>{wi(t,n,i)})}function wi(t,e,n){const i=new F("/.info/"+e),s=te(n);t.infoData_.updateSnapshot(i,s);const r=sn(t.infoSyncTree_,i,s);We(t.eventQueue_,i,r)}function th(t){return t.nextWriteId_++}function nh(t){ao(t,"onDisconnectEvents");const e=oo(t),n=$t();Mn(t.onDisconnect_,D(),(s,r)=>{const o=Lu(s,r,t.serverSyncTree_,e);Pr(n,s,o)});let i=[];Mn(n,D(),(s,r)=>{i=i.concat(sn(t.serverSyncTree_,s,r));const o=ah(t,s);Si(t,o)}),t.onDisconnect_=$t(),We(t.eventQueue_,D(),i)}function ih(t,e,n){let i;k(e._path)===".info"?i=vs(t.infoSyncTree_,e,n):i=vs(t.serverSyncTree_,e,n),so(t.eventQueue_,e._path,i)}function bs(t,e,n){let i;k(e._path)===".info"?i=Vn(t.infoSyncTree_,e,n):i=Vn(t.serverSyncTree_,e,n),so(t.eventQueue_,e._path,i)}function sh(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Yu)}function ao(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ee(n,...e)}function lo(t,e,n){return jr(t.serverSyncTree_,e,n)||I.EMPTY_NODE}function Ii(t,e=t.transactionQueueTree_){if(e||an(t,e),et(e)){const n=uo(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&rh(t,St(e),n)}else Xr(e)&&on(e,n=>{Ii(t,n)})}function rh(t,e,n){const i=n.map(c=>c.currentWriteId),s=lo(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=se(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ao(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Ue(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();an(t,bi(t.transactionQueueTree_,e)),Ii(t,t.transactionQueueTree_),We(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)bt(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{ce("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Si(t,e)}},o)}function Si(t,e){const n=co(t,e),i=St(n),s=uo(t,n);return oh(t,s,i),i}function oh(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=se(n,l.path);let h=!1,u;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Ue(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Qu)h=!0,u="maxretry",s=s.concat(Ue(t.serverSyncTree_,l.currentWriteId,!0));else{const d=lo(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){to("transaction failed: Data returned ",g,l.path);let y=te(g);typeof g=="object"&&g!=null&&ve(g,".priority")||(y=y.updatePriority(d.getPriority()));const x=l.currentWriteId,z=oo(t),Y=Bu(y,d,z);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=Y,l.currentWriteId=th(t),o.splice(o.indexOf(x),1),s=s.concat(wu(t.serverSyncTree_,l.path,Y,l.currentWriteId,l.applyLocally)),s=s.concat(Ue(t.serverSyncTree_,x,!0))}else h=!0,u="nodata",s=s.concat(Ue(t.serverSyncTree_,l.currentWriteId,!0))}We(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}an(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)bt(i[a]);Ii(t,t.transactionQueueTree_)}function co(t,e){let n,i=t.transactionQueueTree_;for(n=k(e);n!==null&&et(i)===void 0;)i=bi(i,n),e=B(e),n=k(e);return i}function uo(t,e){const n=[];return ho(t,e,n),n.sort((i,s)=>i.order-s.order),n}function ho(t,e,n){const i=et(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);on(e,s=>{ho(t,s,n)})}function an(t,e){const n=et(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Qr(e,n.length>0?n:void 0)}on(e,i=>{an(t,i)})}function ah(t,e){const n=St(co(t,e)),i=bi(t.transactionQueueTree_,e);return Wu(i,s=>{yn(t,s)}),yn(t,i),Zr(i,s=>{yn(t,s)}),n}function yn(t,e){const n=et(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ue(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Qr(e,void 0):n.length=r+1,We(t.eventQueue_,St(e),s);for(let o=0;o<i.length;o++)bt(i[o])}}/**
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
 */function lh(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function ch(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ce(`Invalid query segment '${n}' in query '${t}'`)}return e}const ws=function(t,e){const n=uh(t),i=n.namespace;n.domain==="firebase.com"&&Me(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Cl();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Pl(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new F(n.pathString)}},uh=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=lh(t.substring(h,u)));const d=ch(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class fo{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Z(this.snapshot.exportVal())}}class _o{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class hh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ti{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return A(this._path)?null:br(this._path)}get ref(){return new ye(this._repo,this._path)}get _queryIdentifier(){const e=os(this._queryParams),n=Jn(e);return n==="{}"?"default":n}get _queryObject(){return os(this._queryParams)}isEqual(e){if(e=Qn(e),!(e instanceof Ti))return!1;const n=this._repo===e._repo,i=ii(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+sc(this._path)}}class ye extends Ti{constructor(e,n){super(e,n,new ai,!1)}get parent(){const e=Ir(this._path);return e===null?null:new ye(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yt{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new F(e),i=Qt(this.ref,e);return new yt(this._node.getChild(n),i,$)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new yt(s,Qt(this.ref,i),$)))}hasChild(e){const n=new F(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dh(t,e){return t=Qn(t),t._checkNotDeleted("ref"),e!==void 0?Qt(t._root,e):t._root}function Qt(t,e){return t=Qn(t),k(t._path)===null?zu("child","path",e,!1):no("child","path",e,!1),new ye(t._repo,K(t._path,e))}class Ri{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new fo("value",this,new yt(e.snapshotNode,new ye(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _o(this,e,n):null}matches(e){return e instanceof Ri?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class xi{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _o(this,e,n):null}createEvent(e,n){f(e.childName!=null,"Child events should have a childName.");const i=Qt(new ye(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new fo(e.type,this,new yt(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof xi?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function fh(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=n,c=(h,u)=>{bs(t._repo,t,a),l(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new hh(n,r||void 0),a=e==="value"?new Ri(o):new xi(e,o);return ih(t._repo,t,a),()=>bs(t._repo,t,a)}function _h(t,e,n,i){return fh(t,"value",e,n,i)}_u(ye);Cu(ye);/**
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
 */const ph="FIREBASE_DATABASE_EMULATOR_HOST",qn={};let gh=!1;function mh(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ee("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ws(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[ph]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ws(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const h=s&&l?new kn(kn.OWNER):new Al(t.name,t.options,e);ju("Invalid Firebase Database URL",o),A(o.path)||Me("Database URL must point to the root of a Firebase Database (not including a child path).");const u=yh(a,t,h,new kl(t.name,n));return new Ch(u,t)}function vh(t,e){const n=qn[e];(!n||n[t.key]!==t)&&Me(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sh(t),delete n[t.key]}function yh(t,e,n,i){let s=qn[e.name];s||(s={},qn[e.name]=s);let r=s[t.toURLString()];return r&&Me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Xu(t,gh,n,i),s[t.toURLString()]=r,r}class Ch{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ye(this._repo,D())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Me("Cannot call "+e+" on a deleted database.")}}function Eh(t=tl(),e){return Qa(t,"database").getImmediate({identifier:e})}/**
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
 */function bh(t){pl(Ja),Lt(new ht("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return mh(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),He(Ui,Hi,t),He(Ui,Hi,"esm2017")}me.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};me.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bh();function wh(t,e,n,i,s,r){return xe(!0),En(Ms,null,Ps(t.testData2,o=>(xe(),En("div",null,"| "+Se(o),1))),256)}const Ih=Ds({props:{refAddr:"addrs"},data(){return{testData2:[]}},mounted(){console.log(this.refAddr);let t=this;const e=Eh(_l),n=dh(e,t.refAddr);_h(n,i=>{const s=i.val();console.log(s),t.testData2=s})}});var Sh=Os(Ih,[["render",wh]]);function Th({validate:t,resetValidation:e,requiresQForm:n}){const i=bn(yo,!1);if(i!==!1){const{props:s,proxy:r}=Be();Object.assign(r,{validate:t,resetValidation:e}),ie(()=>s.disable,o=>{o===!0?(typeof e=="function"&&e(),i.unbindComponent(r)):i.bindComponent(r)}),s.disable!==!0&&i.bindComponent(r),Zt(()=>{s.disable!==!0&&i.unbindComponent(r)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const Is=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ss=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Ts=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Pt=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Mt=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Rs={date:t=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t),time:t=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(t),fulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t),timeOrFulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(t),email:t=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),hexColor:t=>Is.test(t),hexaColor:t=>Ss.test(t),hexOrHexaColor:t=>Ts.test(t),rgbColor:t=>Pt.test(t),rgbaColor:t=>Mt.test(t),rgbOrRgbaColor:t=>Pt.test(t)||Mt.test(t),hexOrRgbColor:t=>Is.test(t)||Pt.test(t),hexaOrRgbaColor:t=>Ss.test(t)||Mt.test(t),anyColor:t=>Ts.test(t)||Pt.test(t)||Mt.test(t)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(t=>{t.toLowerCase()});const Rh={...Mo,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:t=>t>=0&&t<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},$n=50,po=2*$n,go=po*Math.PI,xh=Math.round(go*1e3)/1e3;jn({name:"QCircularProgress",props:{...Rh,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Be(),i=Do(t),s=N(()=>{const d=(n.lang.rtl===!0?-1:1)*t.angle;return{transform:t.reverse!==(n.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-d}deg)`:`rotate3d(0, 0, 1, ${d-90}deg)`}}),r=N(()=>t.instantFeedback!==!0&&t.indeterminate!==!0?{transition:`stroke-dashoffset ${t.animationSpeed}ms ease 0s, stroke ${t.animationSpeed}ms ease`}:""),o=N(()=>po/(1-t.thickness/2)),a=N(()=>`${o.value/2} ${o.value/2} ${o.value} ${o.value}`),l=N(()=>Lo(t.value,t.min,t.max)),c=N(()=>go*(1-(l.value-t.min)/(t.max-t.min))),h=N(()=>t.thickness/2*o.value);function u({thickness:d,offset:g,color:y,cls:P}){return M("circle",{class:"q-circular-progress__"+P+(y!==void 0?` text-${y}`:""),style:r.value,fill:"transparent",stroke:"currentColor","stroke-width":d,"stroke-dasharray":xh,"stroke-dashoffset":g,cx:o.value,cy:o.value,r:$n})}return()=>{const d=[];t.centerColor!==void 0&&t.centerColor!=="transparent"&&d.push(M("circle",{class:`q-circular-progress__center text-${t.centerColor}`,fill:"currentColor",r:$n-h.value/2,cx:o.value,cy:o.value})),t.trackColor!==void 0&&t.trackColor!=="transparent"&&d.push(u({cls:"track",thickness:h.value,offset:0,color:t.trackColor})),d.push(u({cls:"circle",thickness:h.value,offset:c.value,color:t.color}));const g=[M("svg",{class:"q-circular-progress__svg",style:s.value,viewBox:a.value,"aria-hidden":"true"},d)];return t.showValue===!0&&g.push(M("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:t.fontSize}},e.default!==void 0?e.default():[M("div",l.value)])),M("div",{class:`q-circular-progress q-circular-progress--${t.indeterminate===!0?"in":""}determinate`,style:i.value,role:"progressbar","aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":t.indeterminate===!0?void 0:l.value},Oo(e.internal,g))}}});const Nh=["rejected"],kh=[...Nh,"start","finish","added","removed"],Ah=()=>!0;function Ph(t){const e={};return t.forEach(n=>{e[n]=Ah}),e}Ph(kh);let Cn,Dt=0;const J=new Array(256);for(let t=0;t<256;t++)J[t]=(t+256).toString(16).substring(1);const Mh=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const n=new Uint8Array(e);return t.getRandomValues(n),n}}return e=>{const n=[];for(let i=e;i>0;i--)n.push(Math.floor(Math.random()*256));return n}})(),xs=4096;function Dh(){(Cn===void 0||Dt+16>xs)&&(Dt=0,Cn=Mh(xs));const t=Array.prototype.slice.call(Cn,Dt,Dt+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,J[t[0]]+J[t[1]]+J[t[2]]+J[t[3]]+"-"+J[t[4]]+J[t[5]]+"-"+J[t[6]]+J[t[7]]+"-"+J[t[8]]+J[t[9]]+"-"+J[t[10]]+J[t[11]]+J[t[12]]+J[t[13]]+J[t[14]]+J[t[15]]}const Oh=[!0,!1,"ondemand"],Fh={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:t=>Oh.includes(t)}};function Lh(t,e){const{props:n,proxy:i}=Be(),s=ne(!1),r=ne(null),o=ne(null);Th({validate:y,resetValidation:g});let a=0,l;const c=N(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length>0),h=N(()=>n.disable!==!0&&c.value===!0),u=N(()=>n.error===!0||s.value===!0),d=N(()=>typeof n.errorMessage=="string"&&n.errorMessage.length>0?n.errorMessage:r.value);ie(()=>n.modelValue,()=>{P()}),ie(()=>n.reactiveRules,z=>{z===!0?l===void 0&&(l=ie(()=>n.rules,()=>{P(!0)})):l!==void 0&&(l(),l=void 0)},{immediate:!0}),ie(t,z=>{z===!0?o.value===null&&(o.value=!1):o.value===!1&&(o.value=!0,h.value===!0&&n.lazyRules!=="ondemand"&&e.value===!1&&x())});function g(){a++,e.value=!1,o.value=null,s.value=!1,r.value=null,x.cancel()}function y(z=n.modelValue){if(h.value!==!0)return!0;const Y=++a;e.value!==!0&&n.lazyRules!==!0&&(o.value=!0);const H=(U,p)=>{s.value!==U&&(s.value=U);const v=p||void 0;r.value!==v&&(r.value=v),e.value=!1},j=[];for(let U=0;U<n.rules.length;U++){const p=n.rules[U];let v;if(typeof p=="function"?v=p(z):typeof p=="string"&&Rs[p]!==void 0&&(v=Rs[p](z)),v===!1||typeof v=="string")return H(!0,v),!1;v!==!0&&v!==void 0&&j.push(v)}return j.length===0?(H(!1),!0):(e.value=!0,Promise.all(j).then(U=>{if(U===void 0||Array.isArray(U)===!1||U.length===0)return Y===a&&H(!1),!0;const p=U.find(v=>v===!1||typeof v=="string");return Y===a&&H(p!==void 0,p),p===void 0},U=>(Y===a&&(console.error(U),H(!0)),!1)))}function P(z){h.value===!0&&n.lazyRules!=="ondemand"&&(o.value===!0||n.lazyRules!==!0&&z!==!0)&&x()}const x=Co(y,0);return Zt(()=>{l!==void 0&&l(),x.cancel()}),Object.assign(i,{resetValidation:g,validate:y}),Eo(i,"hasError",()=>u.value),{isDirtyModel:o,hasRules:c,hasError:u,errorMessage:d,validate:y,resetValidation:g}}const Ns=/^on[A-Z]/;function Bh(t,e){const n={listeners:ne({}),attributes:ne({})};function i(){const s={},r={};for(const o in t)o!=="class"&&o!=="style"&&Ns.test(o)===!1&&(s[o]=t[o]);for(const o in e.props)Ns.test(o)===!0&&(r[o]=e.props[o]);n.attributes.value=s,n.listeners.value=r}return bo(i),i(),n}let Un=[],Vh=[];function mo(t){Vh.length===0?t():Un.push(t)}function Wh(t){Un=Un.filter(e=>e!==t)}function Hn(t){return t===void 0?`f_${Dh()}`:t}function zn(t){return t!=null&&(""+t).length>0}const qh={...Bo,...Fh,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},$h=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function Uh(){const{props:t,attrs:e,proxy:n,vnode:i}=Be();return{isDark:Vo(t,n.$q),editable:N(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:ne(!1),focused:ne(!1),hasPopupOpen:!1,splitAttrs:Bh(e,i),targetUid:ne(Hn(t.for)),rootRef:ne(null),targetRef:ne(null),controlRef:ne(null)}}function Hh(t){const{props:e,emit:n,slots:i,attrs:s,proxy:r}=Be(),{$q:o}=r;let a;t.hasValue===void 0&&(t.hasValue=N(()=>zn(e.modelValue))),t.emitValue===void 0&&(t.emitValue=_=>{n("update:modelValue",_)}),t.controlEvents===void 0&&(t.controlEvents={onFocusin:E,onFocusout:b}),Object.assign(t,{clearValue:C,onControlFocusin:E,onControlFocusout:b,focus:v}),t.computedCounter===void 0&&(t.computedCounter=N(()=>{if(e.counter!==!1){const _=typeof e.modelValue=="string"||typeof e.modelValue=="number"?(""+e.modelValue).length:Array.isArray(e.modelValue)===!0?e.modelValue.length:0,S=e.maxlength!==void 0?e.maxlength:e.maxValues;return _+(S!==void 0?" / "+S:"")}}));const{isDirtyModel:l,hasRules:c,hasError:h,errorMessage:u,resetValidation:d}=Lh(t.focused,t.innerLoading),g=t.floatingLabel!==void 0?N(()=>e.stackLabel===!0||t.focused.value===!0||t.floatingLabel.value===!0):N(()=>e.stackLabel===!0||t.focused.value===!0||t.hasValue.value===!0),y=N(()=>e.bottomSlots===!0||e.hint!==void 0||c.value===!0||e.counter===!0||e.error!==null),P=N(()=>e.filled===!0?"filled":e.outlined===!0?"outlined":e.borderless===!0?"borderless":e.standout?"standout":"standard"),x=N(()=>`q-field row no-wrap items-start q-field--${P.value}`+(t.fieldClass!==void 0?` ${t.fieldClass.value}`:"")+(e.rounded===!0?" q-field--rounded":"")+(e.square===!0?" q-field--square":"")+(g.value===!0?" q-field--float":"")+(Y.value===!0?" q-field--labeled":"")+(e.dense===!0?" q-field--dense":"")+(e.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(t.isDark.value===!0?" q-field--dark":"")+(t.getControl===void 0?" q-field--auto-height":"")+(t.focused.value===!0?" q-field--focused":"")+(h.value===!0?" q-field--error":"")+(h.value===!0||t.focused.value===!0?" q-field--highlighted":"")+(e.hideBottomSpace!==!0&&y.value===!0?" q-field--with-bottom":"")+(e.disable===!0?" q-field--disabled":e.readonly===!0?" q-field--readonly":"")),z=N(()=>"q-field__control relative-position row no-wrap"+(e.bgColor!==void 0?` bg-${e.bgColor}`:"")+(h.value===!0?" text-negative":typeof e.standout=="string"&&e.standout.length>0&&t.focused.value===!0?` ${e.standout}`:e.color!==void 0?` text-${e.color}`:"")),Y=N(()=>e.labelSlot===!0||e.label!==void 0),H=N(()=>"q-field__label no-pointer-events absolute ellipsis"+(e.labelColor!==void 0&&h.value!==!0?` text-${e.labelColor}`:"")),j=N(()=>({id:t.targetUid.value,editable:t.editable.value,focused:t.focused.value,floatingLabel:g.value,modelValue:e.modelValue,emitValue:t.emitValue})),U=N(()=>{const _={for:t.targetUid.value};return e.disable===!0?_["aria-disabled"]="true":e.readonly===!0&&(_["aria-readonly"]="true"),_});ie(()=>e.for,_=>{t.targetUid.value=Hn(_)});function p(){const _=document.activeElement;let S=t.targetRef!==void 0&&t.targetRef.value;S&&(_===null||_.id!==t.targetUid.value)&&(S.hasAttribute("tabindex")===!0||(S=S.querySelector("[tabindex]")),S&&S!==_&&S.focus({preventScroll:!0}))}function v(){mo(p)}function w(){Wh(p);const _=document.activeElement;_!==null&&t.rootRef.value.contains(_)&&_.blur()}function E(_){clearTimeout(a),t.editable.value===!0&&t.focused.value===!1&&(t.focused.value=!0,n("focus",_))}function b(_,S){clearTimeout(a),a=setTimeout(()=>{document.hasFocus()===!0&&(t.hasPopupOpen===!0||t.controlRef===void 0||t.controlRef.value===null||t.controlRef.value.contains(document.activeElement)!==!1)||(t.focused.value===!0&&(t.focused.value=!1,n("blur",_)),S!==void 0&&S())})}function C(_){wo(_),o.platform.is.mobile!==!0?(t.targetRef!==void 0&&t.targetRef.value||t.rootRef.value).focus():t.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),e.type==="file"&&(t.inputRef.value.value=null),n("update:modelValue",null),n("clear",e.modelValue),Ne(()=>{d(),o.platform.is.mobile!==!0&&(l.value=!1)})}function O(){const _=[];return i.prepend!==void 0&&_.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:Tt},i.prepend())),_.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},T())),h.value===!0&&e.noErrorIcon===!1&&_.push(ae("error",[M(Ai,{name:o.iconSet.field.error,color:"negative"})])),e.loading===!0||t.innerLoading.value===!0?_.push(ae("inner-loading-append",i.loading!==void 0?i.loading():[M(Fo,{color:e.color})])):e.clearable===!0&&t.hasValue.value===!0&&t.editable.value===!0&&_.push(ae("inner-clearable-append",[M(Ai,{class:"q-field__focusable-action",tag:"button",name:e.clearIcon||o.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:C})])),i.append!==void 0&&_.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:Tt},i.append())),t.getInnerAppend!==void 0&&_.push(ae("inner-append",t.getInnerAppend())),t.getControlChild!==void 0&&_.push(t.getControlChild()),_}function T(){const _=[];return e.prefix!==void 0&&e.prefix!==null&&_.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},e.prefix)),t.getShadowControl!==void 0&&t.hasShadow.value===!0&&_.push(t.getShadowControl()),t.getControl!==void 0?_.push(t.getControl()):i.rawControl!==void 0?_.push(i.rawControl()):i.control!==void 0&&_.push(M("div",{ref:t.targetRef,class:"q-field__native row",tabindex:-1,...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0},i.control(j.value))),Y.value===!0&&_.push(M("div",{class:H.value},rt(i.label,e.label))),e.suffix!==void 0&&e.suffix!==null&&_.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},e.suffix)),_.concat(rt(i.default))}function q(){let _,S;h.value===!0?u.value!==null?(_=[M("div",{role:"alert"},u.value)],S=`q--slot-error-${u.value}`):(_=rt(i.error),S="q--slot-error"):(e.hideHint!==!0||t.focused.value===!0)&&(e.hint!==void 0?(_=[M("div",e.hint)],S=`q--slot-hint-${e.hint}`):(_=rt(i.hint),S="q--slot-hint"));const m=e.counter===!0||i.counter!==void 0;if(e.hideBottomSpace===!0&&m===!1&&_===void 0)return;const V=M("div",{key:S,class:"q-field__messages col"},_);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(e.hideBottomSpace!==!0?"animated":"stale")},[e.hideBottomSpace===!0?V:M(Ro,{name:"q-transition--field-message"},()=>V),m===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():t.computedCounter.value):null])}function ae(_,S){return S===null?null:M("div",{key:_,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},S)}Object.assign(r,{focus:v,blur:w});let _e=!1;return Io(()=>{_e=!0}),So(()=>{_e===!0&&e.autofocus===!0&&r.focus()}),Fs(()=>{To.value===!0&&e.for===void 0&&(t.targetUid.value=Hn()),e.autofocus===!0&&r.focus()}),Zt(()=>{clearTimeout(a)}),function(){const S=t.getControl===void 0&&i.control===void 0?{...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0,...U.value}:U.value;return M("label",{ref:t.rootRef,class:[x.value,s.class],style:s.style,...S},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:Tt},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:t.controlRef,class:z.value,tabindex:-1,...t.controlEvents},O()),y.value===!0?q():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:Tt},i.after()):null])}}const ks={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},Xt={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleLowerCase()}},vo=Object.keys(Xt);vo.forEach(t=>{Xt[t].regex=new RegExp(Xt[t].pattern)});const zh=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+vo.join("")+"])|(.)","g"),As=/[.*+?^${}()|[\]\\]/g,G=String.fromCharCode(1),jh={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Gh(t,e,n,i){let s,r,o,a;const l=ne(null),c=ne(u());function h(){return t.autogrow===!0||["textarea","text","search","url","tel","password"].includes(t.type)}ie(()=>t.type+t.autogrow,g),ie(()=>t.mask,p=>{if(p!==void 0)y(c.value,!0);else{const v=j(c.value);g(),t.modelValue!==v&&e("update:modelValue",v)}}),ie(()=>t.fillMask+t.reverseFillMask,()=>{l.value===!0&&y(c.value,!0)}),ie(()=>t.unmaskedValue,()=>{l.value===!0&&y(c.value)});function u(){if(g(),l.value===!0){const p=Y(j(t.modelValue));return t.fillMask!==!1?U(p):p}return t.modelValue}function d(p){if(p<s.length)return s.slice(-p);let v="",w=s;const E=w.indexOf(G);if(E>-1){for(let b=p-w.length;b>0;b--)v+=G;w=w.slice(0,E)+v+w.slice(E)}return w}function g(){if(l.value=t.mask!==void 0&&t.mask.length>0&&h(),l.value===!1){a=void 0,s="",r="";return}const p=ks[t.mask]===void 0?t.mask:ks[t.mask],v=typeof t.fillMask=="string"&&t.fillMask.length>0?t.fillMask.slice(0,1):"_",w=v.replace(As,"\\$&"),E=[],b=[],C=[];let O=t.reverseFillMask===!0,T="",q="";p.replace(zh,(S,m,V,pe,Ce)=>{if(pe!==void 0){const le=Xt[pe];C.push(le),q=le.negate,O===!0&&(b.push("(?:"+q+"+)?("+le.pattern+"+)?(?:"+q+"+)?("+le.pattern+"+)?"),O=!1),b.push("(?:"+q+"+)?("+le.pattern+")?")}else if(V!==void 0)T="\\"+(V==="\\"?"":V),C.push(V),E.push("([^"+T+"]+)?"+T+"?");else{const le=m!==void 0?m:Ce;T=le==="\\"?"\\\\\\\\":le.replace(As,"\\\\$&"),C.push(le),E.push("([^"+T+"]+)?"+T+"?")}});const ae=new RegExp("^"+E.join("")+"("+(T===""?".":"[^"+T+"]")+"+)?$"),_e=b.length-1,_=b.map((S,m)=>m===0&&t.reverseFillMask===!0?new RegExp("^"+w+"*"+S):m===_e?new RegExp("^"+S+"("+(q===""?".":q)+"+)?"+(t.reverseFillMask===!0?"$":w+"*")):new RegExp("^"+S));o=C,a=S=>{const m=ae.exec(S);m!==null&&(S=m.slice(1).join(""));const V=[],pe=_.length;for(let Ce=0,le=S;Ce<pe;Ce++){const ln=_[Ce].exec(le);if(ln===null)break;le=le.slice(ln.shift().length),V.push(...ln)}return V.length>0?V.join(""):S},s=C.map(S=>typeof S=="string"?S:G).join(""),r=s.split(G).join(v)}function y(p,v,w){const E=i.value,b=E.selectionEnd,C=E.value.length-b,O=j(p);v===!0&&g();const T=Y(O),q=t.fillMask!==!1?U(T):T,ae=c.value!==q;E.value!==q&&(E.value=q),ae===!0&&(c.value=q),document.activeElement===E&&Ne(()=>{if(q===r){const _=t.reverseFillMask===!0?r.length:0;E.setSelectionRange(_,_,"forward");return}if(w==="insertFromPaste"&&t.reverseFillMask!==!0){const _=b-1;x.right(E,_,_);return}if(["deleteContentBackward","deleteContentForward"].indexOf(w)>-1){const _=t.reverseFillMask===!0?b===0?q.length>T.length?1:0:Math.max(0,q.length-(q===r?0:Math.min(T.length,C)+1))+1:b;E.setSelectionRange(_,_,"forward");return}if(t.reverseFillMask===!0)if(ae===!0){const _=Math.max(0,q.length-(q===r?0:Math.min(T.length,C+1)));_===1&&b===1?E.setSelectionRange(_,_,"forward"):x.rightReverse(E,_,_)}else{const _=q.length-C;E.setSelectionRange(_,_,"backward")}else if(ae===!0){const _=Math.max(0,s.indexOf(G),Math.min(T.length,b)-1);x.right(E,_,_)}else{const _=b-1;x.right(E,_,_)}});const _e=t.unmaskedValue===!0?j(q):q;String(t.modelValue)!==_e&&n(_e,!0)}function P(p,v,w){const E=Y(j(p.value));v=Math.max(0,s.indexOf(G),Math.min(E.length,v)),p.setSelectionRange(v,w,"forward")}const x={left(p,v,w,E){const b=s.slice(v-1).indexOf(G)===-1;let C=Math.max(0,v-1);for(;C>=0;C--)if(s[C]===G){v=C,b===!0&&v++;break}if(C<0&&s[v]!==void 0&&s[v]!==G)return x.right(p,0,0);v>=0&&p.setSelectionRange(v,E===!0?w:v,"backward")},right(p,v,w,E){const b=p.value.length;let C=Math.min(b,w+1);for(;C<=b;C++)if(s[C]===G){w=C;break}else s[C-1]===G&&(w=C);if(C>b&&s[w-1]!==void 0&&s[w-1]!==G)return x.left(p,b,b);p.setSelectionRange(E?v:w,w,"forward")},leftReverse(p,v,w,E){const b=d(p.value.length);let C=Math.max(0,v-1);for(;C>=0;C--)if(b[C-1]===G){v=C;break}else if(b[C]===G&&(v=C,C===0))break;if(C<0&&b[v]!==void 0&&b[v]!==G)return x.rightReverse(p,0,0);v>=0&&p.setSelectionRange(v,E===!0?w:v,"backward")},rightReverse(p,v,w,E){const b=p.value.length,C=d(b),O=C.slice(0,w+1).indexOf(G)===-1;let T=Math.min(b,w+1);for(;T<=b;T++)if(C[T-1]===G){w=T,w>0&&O===!0&&w--;break}if(T>b&&C[w-1]!==void 0&&C[w-1]!==G)return x.leftReverse(p,b,b);p.setSelectionRange(E===!0?v:w,w,"forward")}};function z(p){if(xo(p)===!0)return;const v=i.value,w=v.selectionStart,E=v.selectionEnd;if(p.keyCode===37||p.keyCode===39){const b=x[(p.keyCode===39?"right":"left")+(t.reverseFillMask===!0?"Reverse":"")];p.preventDefault(),b(v,w,E,p.shiftKey)}else p.keyCode===8&&t.reverseFillMask!==!0&&w===E?x.left(v,w,E,!0):p.keyCode===46&&t.reverseFillMask===!0&&w===E&&x.rightReverse(v,w,E,!0)}function Y(p){if(p==null||p==="")return"";if(t.reverseFillMask===!0)return H(p);const v=o;let w=0,E="";for(let b=0;b<v.length;b++){const C=p[w],O=v[b];if(typeof O=="string")E+=O,C===O&&w++;else if(C!==void 0&&O.regex.test(C))E+=O.transform!==void 0?O.transform(C):C,w++;else return E}return E}function H(p){const v=o,w=s.indexOf(G);let E=p.length-1,b="";for(let C=v.length-1;C>=0&&E>-1;C--){const O=v[C];let T=p[E];if(typeof O=="string")b=O+b,T===O&&E--;else if(T!==void 0&&O.regex.test(T))do b=(O.transform!==void 0?O.transform(T):T)+b,E--,T=p[E];while(w===C&&T!==void 0&&O.regex.test(T));else return b}return b}function j(p){return typeof p!="string"||a===void 0?typeof p=="number"?a(""+p):p:a(p)}function U(p){return r.length-p.length<=0?p:t.reverseFillMask===!0&&p.length>0?r.slice(0,-p.length)+p:p+r.slice(p.length)}return{innerValue:c,hasMask:l,moveCursorForPaste:P,updateMaskValue:y,onMaskedKeydown:z}}const Kh={name:String};function Yh(t){return N(()=>t.name||t.for)}function Qh(t,e){function n(){const i=t.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(r=>{s.items.add(r)}),{files:s.files}}catch{return{files:void 0}}}return e===!0?N(()=>{if(t.type==="file")return n()}):N(n)}const Xh=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Zh=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Jh=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ed=/[a-z0-9_ -]$/i;function td(t){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,t(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(No.is.firefox===!0?ed.test(n.data)===!1:Xh.test(n.data)===!0||Zh.test(n.data)===!0||Jh.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}var nd=jn({name:"QInput",inheritAttrs:!1,props:{...qh,...jh,...Kh,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...$h,"paste","change"],setup(t,{emit:e,attrs:n}){const i={};let s=NaN,r,o,a,l;const c=ne(null),h=Yh(t),{innerValue:u,hasMask:d,moveCursorForPaste:g,updateMaskValue:y,onMaskedKeydown:P}=Gh(t,e,O,c),x=Qh(t,!0),z=N(()=>zn(u.value)),Y=td(C),H=Uh(),j=N(()=>t.type==="textarea"||t.autogrow===!0),U=N(()=>j.value===!0||["text","search","url","tel","password"].includes(t.type)),p=N(()=>{const m={...H.splitAttrs.listeners.value,onInput:C,onPaste:b,onChange:q,onBlur:ae,onFocus:Ni};return m.onCompositionstart=m.onCompositionupdate=m.onCompositionend=Y,d.value===!0&&(m.onKeydown=P),t.autogrow===!0&&(m.onAnimationend=T),m}),v=N(()=>{const m={tabindex:0,"data-autofocus":t.autofocus===!0||void 0,rows:t.type==="textarea"?6:void 0,"aria-label":t.label,name:h.value,...H.splitAttrs.attributes.value,id:H.targetUid.value,maxlength:t.maxlength,disabled:t.disable===!0,readonly:t.readonly===!0};return j.value===!1&&(m.type=t.type),t.autogrow===!0&&(m.rows=1),m});ie(()=>t.type,()=>{c.value&&(c.value.value=t.modelValue)}),ie(()=>t.modelValue,m=>{if(d.value===!0){if(o===!0&&(o=!1,String(m)===s))return;y(m)}else u.value!==m&&(u.value=m,t.type==="number"&&i.hasOwnProperty("value")===!0&&(r===!0?r=!1:delete i.value));t.autogrow===!0&&Ne(T)}),ie(()=>t.autogrow,m=>{m===!0?Ne(T):c.value!==null&&n.rows>0&&(c.value.style.height="auto")}),ie(()=>t.dense,()=>{t.autogrow===!0&&Ne(T)});function w(){mo(()=>{const m=document.activeElement;c.value!==null&&c.value!==m&&(m===null||m.id!==H.targetUid.value)&&c.value.focus({preventScroll:!0})})}function E(){c.value!==null&&c.value.select()}function b(m){if(d.value===!0&&t.reverseFillMask!==!0){const V=m.target;g(V,V.selectionStart,V.selectionEnd)}e("paste",m)}function C(m){if(!m||!m.target)return;if(t.type==="file"){e("update:modelValue",m.target.files);return}const V=m.target.value;if(m.target.qComposing===!0){i.value=V;return}if(d.value===!0)y(V,!1,m.inputType);else if(O(V),U.value===!0&&m.target===document.activeElement){const{selectionStart:pe,selectionEnd:Ce}=m.target;pe!==void 0&&Ce!==void 0&&Ne(()=>{m.target===document.activeElement&&V.indexOf(m.target.value)===0&&m.target.setSelectionRange(pe,Ce)})}t.autogrow===!0&&T()}function O(m,V){l=()=>{t.type!=="number"&&i.hasOwnProperty("value")===!0&&delete i.value,t.modelValue!==m&&s!==m&&(s=m,V===!0&&(o=!0),e("update:modelValue",m),Ne(()=>{s===m&&(s=NaN)})),l=void 0},t.type==="number"&&(r=!0,i.value=m),t.debounce!==void 0?(clearTimeout(a),i.value=m,a=setTimeout(l,t.debounce)):l()}function T(){const m=c.value;if(m!==null){const V=m.parentNode.style,{overflow:pe}=m.style;V.marginBottom=m.scrollHeight-1+"px",m.style.height="1px",m.style.overflow="hidden",m.style.height=m.scrollHeight+"px",m.style.overflow=pe,V.marginBottom=""}}function q(m){Y(m),clearTimeout(a),l!==void 0&&l(),e("change",m.target.value)}function ae(m){m!==void 0&&Ni(m),clearTimeout(a),l!==void 0&&l(),r=!1,o=!1,delete i.value,t.type!=="file"&&setTimeout(()=>{c.value!==null&&(c.value.value=u.value!==void 0?u.value:"")})}function _e(){return i.hasOwnProperty("value")===!0?i.value:u.value!==void 0?u.value:""}Zt(()=>{ae()}),Fs(()=>{t.autogrow===!0&&T()}),Object.assign(H,{innerValue:u,fieldClass:N(()=>`q-${j.value===!0?"textarea":"input"}`+(t.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:N(()=>t.type!=="file"&&typeof t.shadowText=="string"&&t.shadowText.length>0),inputRef:c,emitValue:O,hasValue:z,floatingLabel:N(()=>z.value===!0||zn(t.displayValue)),getControl:()=>M(j.value===!0?"textarea":"input",{ref:c,class:["q-field__native q-placeholder",t.inputClass],style:t.inputStyle,...v.value,...p.value,...t.type!=="file"?{value:_e()}:x.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(j.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},_e()),M("span",t.shadowText)])});const _=Hh(H),S=Be();return Object.assign(S.proxy,{focus:w,select:E,getNativeElement:()=>c.value}),_}}),id=jn({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:e}){const{proxy:{$q:n}}=Be(),i=bn(ko);bn(Ao,()=>{console.error("QPage needs to be child of QPageContainer")});const s=N(()=>{const o=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof t.styleFn=="function"){const a=i.isContainer.value===!0?i.containerHeight.value:n.screen.height;return t.styleFn(o,a)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-o+"px":n.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":n.screen.height-o+"px"}}),r=N(()=>`q-page ${t.padding===!0?" q-layout-padding":""}`);return()=>M("main",{class:r.value,style:s.value},rt(e.default))}});const sd={class:"name"},rd={class:"tel"},od={class:"name"},ad={class:"tel"};function ld(t,e,n,i,s,r){const o=Po("ListView");return xe(),Rt(id,{class:"q-pa-md"},{default:xt(()=>[ki(o,{refAddr:"addrs"}),ki(nd,{modelValue:t.targetStar2,"onUpdate:modelValue":e[0]||(e[0]=a=>t.targetStar2=a)},null,8,["modelValue"]),(xe(!0),En(Ms,null,Ps(t.testData2,a=>(xe(),Rt(Wo,{onClick:l=>t.select(a)},{default:xt(()=>[a.star>=t.targetStar?(xe(),Rt(Pi,{key:0,class:"q-mb-sm good shadow-2 flex flex-center"},{default:xt(()=>[Nt("div",sd,Se(a.name)+" ("+Se(a.star)+")",1),Nt("div",rd,Se(a.tel),1)]),_:2},1024)):(xe(),Rt(Pi,{key:1,class:"shadow-2"},{default:xt(()=>[Nt("div",od,Se(a.name)+" ("+Se(a.star)+")",1),Nt("div",ad,Se(a.tel),1)]),_:2},1024))]),_:2},1032,["onClick"]))),256))]),_:1})}const cd=Ds({name:"IndexPage",data(){return{testData2:[]}},methods:{select(t){alert(JSON.stringify(t))}},components:{ListView:Sh}});var fd=Os(cd,[["render",ld]]);export{fd as default};
