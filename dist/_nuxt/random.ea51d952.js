import{_ as p}from"./ComponentContainer.cda60fd2.js";import{i as c,o as m,b as v,e,j as r,v as u,f as _,a6 as b,t as h,c as w,w as d,l as y,u as k}from"./entry.6d7d4e22.js";import{u as M}from"./composables.9f38f497.js";const N={class:"flex flex-col text-white"},V={class:"flex items-center justify-between mb-5"},g={class:"flex flex-col text-center w-3/6 px-2"},C=e("label",{class:"mb-1"},"MIN",-1),j={class:"flex flex-col text-center w-3/6 px-2"},B=e("label",{class:"mb-1"},"MAX",-1),D={class:"flex items-center justify-between mb-5"},R={class:"flex flex-col text-center w-3/6 px-2"},U={class:"mb-1"},I={class:"flex mb-5 font-bold justify-center text-center text-xl"},T={__name:"RandomNumber",setup(x){const s=c(1),n=c(5),l=c(!1),i=c();function f(){let a=Math.random()*(n.value-s.value)+s.value;l.value===!1&&(a=Math.floor(a)),i.value=a}return(a,t)=>(m(),v("div",N,[e("div",V,[e("div",g,[C,r(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o),type:"text"},null,512),[[u,s.value]])]),e("div",j,[B,r(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),type:"text"},null,512),[[u,n.value]])])]),e("div",D,[e("div",R,[e("label",U,[_("Include decimal values: "),r(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>l.value=o),type:"checkbox"},null,512),[[b,l.value]])])]),e("div",{class:"flex flex-col text-center w-3/6 px-2"},[e("button",{onClick:f,class:"btn btn-green"}," Generate ")])]),e("div",I,h(i.value),1)]))}},H={__name:"random",setup(x){return M({title:"Random number generator"}),(s,n)=>{const l=p;return m(),w(l,null,{header:d(()=>[_("Random number generator")]),body:d(()=>[y(k(T))]),_:1})}}};export{H as default};