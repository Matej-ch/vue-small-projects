import{i as c,o,e as u,f as n,F as p,H as b,j as x,a6 as h,a as f,t as m,c as w,w as g,l as C}from"./entry.38e07db5.js";import{_ as y}from"./ComponentContainer.7fd0c4dd.js";import{u as V}from"./composables.85f75fe7.js";const j={class:"border rounded-sm flex flex-row justify-between"},B={class:"flex flex-col gap-2 grow items-center justify-center"},R=["value"],A={class:"flex flex-col gap-2 grow items-center justify-center"},H=["value"],N={__name:"TransferList",setup(k){const e=c(["JS","HTML","CSS","TS"]),l=c(["React","Angular","Vue","Svelte"]),s=c([]),a=c([]);function i(){l.value=[...l.value,...e.value],e.value=[]}function L(){e.value=[...e.value,...l.value],l.value=[]}function S(){l.value=[...l.value,...e.value.filter((r,t)=>s.value.includes(t))],e.value=[...e.value.filter((r,t)=>!s.value.includes(t))],s.value=[]}function T(){e.value=[...e.value,...l.value.filter((r,t)=>a.value.includes(t))],l.value=[...l.value.filter((r,t)=>!a.value.includes(t))],a.value=[]}return(r,t)=>(o(),u("div",j,[n("div",B,[(o(!0),u(p,null,b(e.value,(v,d)=>(o(),u("span",null,[n("label",null,[x(n("input",{type:"checkbox",value:d,name:"selected","onUpdate:modelValue":t[0]||(t[0]=_=>s.value=_)},null,8,R),[[h,s.value]]),f(" "+m(v),1)])]))),256))]),n("div",{class:"max-w-sm flex flex-col gap-4 p-2 grow-0"},[n("button",{class:"btn btn-slate",onClick:L}," <<"),n("button",{class:"btn btn-slate",onClick:T}," <"),n("button",{class:"btn btn-slate",onClick:S}," >"),n("button",{class:"btn btn-slate",onClick:i}," >>")]),n("div",A,[(o(!0),u(p,null,b(l.value,(v,d)=>(o(),u("span",null,[n("label",null,[x(n("input",{type:"checkbox",name:"selected",value:d,"onUpdate:modelValue":t[1]||(t[1]=_=>a.value=_)},null,8,H),[[h,a.value]]),f(" "+m(v),1)])]))),256))])]))}},U={__name:"transfers",setup(k){const e="Transfer List";return V({title:e}),(l,s)=>{const a=N,i=y;return o(),w(i,null,{header:g(()=>[f(m(e))]),body:g(()=>[C(a)]),_:1})}}};export{U as default};