import{_ as x}from"./ComponentContainer.7fd0c4dd.js";import{i as c,o as v,e as g,f as n,j as u,v as i,A as p,k as C,F as b,c as w,w as d,a as k,t as A,l as V,u as T}from"./entry.38e07db5.js";import{u as j}from"./composables.85f75fe7.js";const E={class:"px-4 py-2"},B={class:"flex items-center justify-between mb-3 w-full flex-col"},S=n("label",{class:"mb-1"},"Text to encrypt",-1),D={class:"flex items-center justify-between mb-3 w-full flex-col"},K=n("label",{class:"mb-1"},"Encryption keyword",-1),N={class:"px-4 flex gap-2 py-2"},U={class:"px-4 flex gap-2 py-2"},F={__name:"VigenereCipher",setup(h){const o=c(null),s=c(""),r=c(""),a=c(""),_=c("");function f(){let l="";for(let e=0;e<o.value.length;e++){let t=(o.value[e].charCodeAt(0)+r.value[e].charCodeAt(0))%26;t+="A".charCodeAt(0),l+=String.fromCharCode(t)}a.value=l}function m(){let l="";for(let e=0;e<a.value.length;e++){let t=(a.value[e].charCodeAt(0)-r.value[e].charCodeAt(0)+26)%26;t+="A".charCodeAt(0),l+=String.fromCharCode(t)}_.value=l}function y(){let l=s.value.split("");if(o.value.length!==0){if(o.value.length===l.length)r.value=l.join("");else{let e=l.length;for(let t=0;t<o.value.length-e;t++)l.push(l[t%l.length])}r.value=l.join("")}}return(l,e)=>(v(),g(b,null,[n("div",E,[n("div",B,[S,u(n("textarea",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),cols:"30",rows:"10",placeholder:"Text to encrypt"},null,512),[[i,o.value]])]),n("div",D,[K,u(n("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.value=t),type:"text",placeholder:"Encryption key",onKeyup:y,class:"w-full"},null,544),[[i,s.value]])])]),n("div",N,[n("button",{onClick:f,class:p([s.value.length?"":"pointer-events-none opacity-25","btn btn-green"])}," Encrypt ",2),n("button",{onClick:m,class:p(["btn",a.value.length?"btn-orange":" btn-slate pointer-events-none opacity-25"])}," Decrypt ",2)]),u(n("div",U,[u(n("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),cols:"30",rows:"10",placeholder:"Encrypted text"},null,512),[[i,a.value]])],512),[[C,a.value.length]])],64))}},$={__name:"vigenere",setup(h){const o="Vigenere cipher";return j({title:o}),(s,r)=>{const a=x;return v(),w(a,null,{header:d(()=>[k(A(o))]),body:d(()=>[V(T(F))]),_:1})}}};export{$ as default};