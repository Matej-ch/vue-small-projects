import{a as N,r as D,P as H,Q as R,R as A,S as E,u as C,J as T,i as L,U as K,O as W,o as O,b as P,e as x,w as $,f as G,t as z,F as I,H as V,x as J,B as F,c as Q}from"./entry.72a4c47b.js";import{u as X}from"./composables.fb7eb567.js";const Y=()=>null;function Z(...n){var f,B,v,S,m,w,_;const r=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(r);let[s,e,t={}]=n;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=(f=t.server)!=null?f:!0,t.default=(B=t.default)!=null?B:Y,t.lazy=(v=t.lazy)!=null?v:!1,t.immediate=(S=t.immediate)!=null?S:!0;const a=N(),o=()=>a.isHydrating?a.payload.data[s]:a.static.data[s],l=()=>o()!==void 0;a._asyncData[s]||(a._asyncData[s]={data:D((_=(w=o())!=null?w:(m=t.default)==null?void 0:m.call(t))!=null?_:null),pending:D(!l()),error:D(a.payload._errors[s]?H(a.payload._errors[s]):null)});const i={...a._asyncData[s]};i.refresh=i.execute=(u={})=>{if(a._asyncDataPromises[s]){if(u.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if(u._initial&&l())return o();i.pending.value=!0;const p=new Promise((c,g)=>{try{c(e(a))}catch(j){g(j)}}).then(c=>{if(p.cancelled)return a._asyncDataPromises[s];t.transform&&(c=t.transform(c)),t.pick&&(c=q(c,t.pick)),i.data.value=c,i.error.value=null}).catch(c=>{var g,j;if(p.cancelled)return a._asyncDataPromises[s];i.error.value=c,i.data.value=C((j=(g=t.default)==null?void 0:g.call(t))!=null?j:null)}).finally(()=>{p.cancelled||(i.pending.value=!1,a.payload.data[s]=i.data.value,i.error.value&&(a.payload._errors[s]=H(i.error.value)),delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=p,a._asyncDataPromises[s]};const h=()=>i.refresh({_initial:!0}),d=t.server!==!1&&a.payload.serverRendered;{const u=T();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const c=u._nuxtOnBeforeMountCbs;u&&(R(()=>{c.forEach(g=>{g()}),c.splice(0,c.length)}),A(()=>c.splice(0,c.length)))}d&&a.isHydrating&&l()?i.pending.value=!1:u&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?u._nuxtOnBeforeMountCbs.push(h):t.immediate&&h(),t.watch&&E(t.watch,()=>i.refresh());const p=a.hook("app:data:refresh",c=>{if(!c||c.includes(s))return i.refresh()});u&&A(p)}const y=Promise.resolve(a._asyncDataPromises[s]).then(()=>i);return Object.assign(y,i),y}function q(n,r){const s={};for(const e of r)s[e]=n[e];return s}const tt={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function et(n,r={}){r={...tt,...r};const s=M(r);return s.dispatch(n),s.toString()}function M(n){const r=[];let s=[];const e=t=>{r.push(t)};return{toString(){return r.join("")},getContext(){return s},dispatch(t){return n.replacer&&(t=n.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){const a=/\[object (.*)]/i,o=Object.prototype.toString.call(t),l=a.exec(o),i=l?l[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let h=null;if((h=s.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+h+"]");if(s.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")if(this["_"+i])this["_"+i](t);else{if(n.ignoreUnknown)return e("["+i+"]");throw new Error('Unknown object type "'+i+'"')}else{let d=Object.keys(t);n.unorderedObjects&&(d=d.sort()),n.respectType!==!1&&!U(t)&&d.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(d=d.filter(function(y){return!n.excludeKeys(y)})),e("object:"+d.length+":");for(const y of d)this.dispatch(y),e(":"),n.excludeValues||this.dispatch(t[y]),e(",")}},_array(t,a){if(a=typeof a<"u"?a:n.unorderedArrays!==!1,e("array:"+t.length+":"),!a||t.length<=1){for(const i of t)this.dispatch(i);return}const o=[],l=t.map(i=>{const h=M(n);return h.dispatch(i),o.push(h.getContext()),h.toString()});return s=[...s,...o],l.sort(),this._array(l,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),U(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const a=[...t];return this._array(a,n.unorderedSets!==!1)},_set(t){e("set:");const a=[...t];return this._array(a,n.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function U(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class k{constructor(r,s){r=this.words=r||[],this.sigBytes=s!==void 0?s:r.length*4}toString(r){return(r||st).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new k([...this.words])}}const st={stringify(n){const r=[];for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;r.push((e>>>4).toString(16),(e&15).toString(16))}return r.join("")}},rt={stringify(n){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,a=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,l=t<<16|a<<8|o;for(let i=0;i<4&&e*8+i*6<n.sigBytes*8;i++)s.push(r.charAt(l>>>6*(3-i)&63))}return s.join("")}},nt={parse(n){const r=n.length,s=[];for(let e=0;e<r;e++)s[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new k(s,r)}},at={parse(n){return nt.parse(unescape(encodeURIComponent(n)))}};class it{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new k,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=at.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,e=this._data.sigBytes/(this.blockSize*4);r?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new k(s,a)}}class ot extends it{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const ct=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],lt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],b=[];class ut extends ot{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new k([...ct])}_doProcessBlock(r,s){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],l=e[3],i=e[4],h=e[5],d=e[6],y=e[7];for(let f=0;f<64;f++){if(f<16)b[f]=r[s+f]|0;else{const u=b[f-15],p=(u<<25|u>>>7)^(u<<14|u>>>18)^u>>>3,c=b[f-2],g=(c<<15|c>>>17)^(c<<13|c>>>19)^c>>>10;b[f]=p+b[f-7]+g+b[f-16]}const B=i&h^~i&d,v=t&a^t&o^a&o,S=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),m=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),w=y+m+B+lt[f]+b[f],_=S+v;y=d,d=h,h=i,i=l+w|0,l=o,o=a,a=t,t=w+_|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+l|0,e[4]=e[4]+i|0,e[5]=e[5]+h|0,e[6]=e[6]+d|0,e[7]=e[7]+y|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ft(n){return new ut().finalize(n).toString(rt)}function ht(n,r={}){const s=typeof n=="string"?n:et(n,r);return ft(s).slice(0,10)}function dt(n,r,s){const[e={},t]=typeof r=="string"?[{},r]:[r,s],a=e.key||ht([t,C(e.baseURL),typeof n=="string"?n:"",C(e.params)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const o=a===t?"$f"+a:a,l=L(()=>{let p=n;return typeof p=="function"&&(p=p()),C(p)}),{server:i,lazy:h,default:d,transform:y,pick:f,watch:B,immediate:v,...S}=e,m=K({...S,cache:typeof e.cache=="boolean"?void 0:e.cache}),w={server:i,lazy:h,default:d,transform:y,pick:f,immediate:v,watch:[m,l,...B||[]]};let _;return Z(o,()=>{var p;return(p=_==null?void 0:_.abort)==null||p.call(_),_=typeof AbortController<"u"?new AbortController:{},$fetch(l.value,{signal:_.signal,...m})},w)}const pt={class:"flex flex-col w-full"},yt={class:"py-2",style:{width:"100%","text-align":"center"}},_t={class:"font-bold"},gt={class:"flex w-1/2 flex-col font-bold"},mt={class:"text-[.65rem]"},wt=x("hr",{class:"w-full"},null,-1),bt={__name:"GithubStatus",setup(n){const r=D(""),s=D([]);W(()=>{fetch("https://www.githubstatus.com/api/v2/summary.json").then(t=>t.json()).then(t=>{s.value=t.components})});async function e(){const t=await dt("https://www.githubstatus.com/api/v2/status.json","$WN13HQbX0K");r.value=t.data.value.status.description}return(t,a)=>(O(),P("div",pt,[x("div",{class:"flex flex-col justify-center items-center w-full p-4"},[x("button",{onClick:e,class:"btn btn-green"}," Get status ")]),$(x("div",yt,[x("div",_t,z(r.value),1)],512),[[G,r.value]]),(O(!0),P(I,null,V(s.value,o=>(O(),P("div",{class:J(["py-2 flex flex-row justify-between w-full flex-wrap px-4",o.status==="operational"?"bg-emerald-600":"bg-orange-600"])},[x("div",gt,[F(z(o.name)+" ",1),x("span",mt,z(o.description),1)]),F(" "+z(o.status==="operational"?"\u2705":"\u{1F6D1}")+" ",1),wt],2))),256))]))}},vt={__name:"github",setup(n){return X({title:"Github status"}),(r,s)=>(O(),Q(C(bt)))}};export{vt as default};