import{_ as v}from"./ComponentContainer.7fd0c4dd.js";import{i,o as m,e as b,f as e,j as r,v as u,a as _,a6 as h,t as x,c as w,w as d,l as y,u as k}from"./entry.38e07db5.js";import{u as M}from"./composables.85f75fe7.js";const N={class:"flex flex-col text-white"},V={class:"flex items-center justify-between mb-5"},C={class:"flex flex-col text-center w-3/6 px-2"},g=e("label",{class:"mb-1"},"MIN",-1),j={class:"flex flex-col text-center w-3/6 px-2"},B=e("label",{class:"mb-1"},"MAX",-1),D={class:"flex items-center justify-between mb-5"},U={class:"flex flex-col text-center w-3/6 px-2"},I={class:"mb-1"},R={class:"flex mb-5 font-bold justify-center text-center text-xl"},T={__name:"RandomNumber",setup(f){const t=i(1),o=i(5),n=i(!1),a=i();function p(){let c=Math.random()*(o.value-t.value)+t.value;n.value===!1&&(c=Math.floor(c)),a.value=c}return(c,s)=>(m(),b("div",N,[e("div",V,[e("div",C,[g,r(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),type:"text"},null,512),[[u,t.value]])]),e("div",j,[B,r(e("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>o.value=l),type:"text"},null,512),[[u,o.value]])])]),e("div",D,[e("div",U,[e("label",I,[_("Include decimal values: "),r(e("input",{"onUpdate:modelValue":s[2]||(s[2]=l=>n.value=l),type:"checkbox"},null,512),[[h,n.value]])])]),e("div",{class:"flex flex-col text-center w-3/6 px-2"},[e("button",{onClick:p,class:"btn btn-green"}," Generate ")])]),e("div",R,x(a.value),1)]))}},H={__name:"random",setup(f){const t="Random number generator";return M({title:t}),(o,n)=>{const a=v;return m(),w(a,null,{header:d(()=>[_(x(t))]),body:d(()=>[y(k(T))]),_:1})}}};export{H as default};