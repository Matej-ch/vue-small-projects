import{_ as w}from"./ComponentContainer.7fd0c4dd.js";import{i as _,m as u,U as C,o as i,e as d,f as t,j as B,v as F,u as c,F as m,H as S,A as V,t as f,c as j,w as b,a as A,l as N}from"./entry.38e07db5.js";import{u as T}from"./composables.85f75fe7.js";const D={class:"flex items-center gap-2"},E=t("span",null,"Pick a number from 2 to 30:",-1),G={class:"flex flex-row gap-2 py-8"},H=["disabled"],J=["disabled"],O=["disabled"],U=["disabled"],z={class:"grid grid-cols-5 auto-rows-auto gap-5",style:{"justify-items":"center"}},L={__name:"JosephsGift",setup(v){const s=_(2),e=_(1),r=u(()=>{const l=[...Array(s.value+1).keys()].slice(1);let a=0,n=1;const p=[];for(;l.length>1;)a=(a+n)%l.length,p.push(l[a]),l.splice(a,1);return p}),o=u(()=>r.value.length),h=u(()=>r.value.slice(0,e.value));C(s,()=>e.value=1);function y(){e.value=1}function g(){e.value-=1}function x(){e.value+=1}function k(){e.value=o.value}return(l,a)=>(i(),d(m,null,[t("div",D,[E,B(t("input",{type:"range",min:"2",max:"30","onUpdate:modelValue":a[0]||(a[0]=n=>s.value=n)},null,512),[[F,s.value,void 0,{number:!0}]])]),t("div",G,[t("button",{onClick:y,class:"btn btn-slate disabled:opacity-40",disabled:e.value===1}," \u2770\u2770 ",8,H),t("button",{onClick:g,class:"btn btn-slate disabled:opacity-40",disabled:e.value===1}," \u2770 ",8,J),t("button",{onClick:x,class:"btn btn-slate disabled:opacity-40",disabled:e.value===c(o)}," \u2771 ",8,O),t("button",{onClick:k,class:"btn btn-slate disabled:opacity-40",disabled:e.value===c(o)}," \u2771\u2771 ",8,U)]),t("div",z,[(i(!0),d(m,null,S(s.value,n=>(i(),d("div",{key:n,class:V(["border-2 p-2 leading-5 w-10 h-10 text-center",{"opacity-40":c(h).includes(n)}])},f(n),3))),128))])],64))}},q={__name:"josephs",setup(v){const s="Josephs gift";return T({title:s}),(e,r)=>{const o=w;return i(),j(o,null,{header:b(()=>[A(f(s))]),body:b(()=>[N(c(L))]),_:1})}}};export{q as default};
