import{_ as y}from"./ComponentContainer.f579fdde.js";import{i as u,O as k,o as i,b as d,e,j as c,v as _,V as f,F as p,H as N,t as m,k as x,u as h,c as S,w as v,f as D,l as V}from"./entry.fe5dfb17.js";import{m as C}from"./marked.esm.11eb22fe.js";import{u as E}from"./composables.4ec0e794.js";const I={class:"flex flex-col text-white"},K={class:"flex items-end justify-between mb-5"},O={class:"flex flex-col px-2 w-full"},B=e("label",{class:"mb-1",for:"weight-kilograms"},"Add Note (markdown available)",-1),H=["onKeyup"],J={class:"flex mb-3 w-full flex-col"},M={class:"flex flex-col"},T={class:"flex flex-row gap-2"},$={class:"text-slate-700"},j=["onDblclick","innerHTML"],L=["onUpdate:modelValue","onKeyup"],U={class:"font-bold text-[0.75rem] text-slate-700"},A={class:"ml-auto"},F=["onClick"],P={__name:"NotesApp",setup(g){const o=u(""),s=u([]);k(()=>{localStorage.getItem("notes")&&(s.value=JSON.parse(localStorage.getItem("notes")))});function r(){s.value.push({id:s.value.length+1,text:o.value,date:Date.now(),isEditing:!1}),localStorage.setItem("notes",JSON.stringify(s.value)),o.value=""}function b(a){s.value=s.value.filter(l=>l.id!==a.id),localStorage.setItem("notes",JSON.stringify(s.value))}function w(a){a.isEditing=!1,a.date=Date.now(),localStorage.setItem("notes",JSON.stringify(s.value))}return(a,l)=>(i(),d(p,null,[e("div",I,[e("div",K,[e("div",O,[B,c(e("textarea",{"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),onKeyup:f(r,["enter"]),type:"text",cols:"30",rows:"10"},null,40,H),[[_,o.value]])])])]),e("div",J,[(i(!0),d(p,null,N(s.value,t=>(i(),d("div",{key:t.id,class:"flex flex-row px-2 font-bold text-xl border-b border-b-slate-500 bg-slate-50 py-2 mb-2 rounded"},[e("div",M,[e("div",T,[e("span",$,m(t.id),1),c(e("span",{class:"cursor-pointer js-markdown",onDblclick:n=>t.isEditing=!0,innerHTML:h(C).parse(t.text)},null,40,j),[[x,t.isEditing===!1]]),c(e("input",{type:"text","onUpdate:modelValue":n=>t.text=n,onKeyup:f(n=>w(t),["enter"]),class:"border-sky-200 border px-1 rounded"},null,40,L),[[x,t.isEditing===!0],[_,t.text]])]),e("span",U,"Created at "+m(new Date(t.date)),1)]),e("div",A,[e("button",{class:"",onClick:n=>b(t)},"\u274C",8,F)])]))),128))])],64))}},R={__name:"notes",setup(g){return E({title:"Personal notes"}),(o,s)=>{const r=y;return i(),S(r,null,{header:v(()=>[D("Personal notes")]),body:v(()=>[V(h(P))]),_:1})}}};export{R as default};
