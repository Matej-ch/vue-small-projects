import{N as B,r as c,O as H,o as a,a as u,b as e,w as p,j as x,F as y,H as b,t as f,v as $,e as j,c as O,u as N}from"./entry.90964fe4.js";import{u as T}from"./composables.419673dc.js";const V=e("div",{class:"component-header"},[e("h2",null,"Currency converter")],-1),q={class:"px-4 py-5"},A={class:"flex flex-col text-white"},E={class:"flex items-end justify-between mb-5"},F={class:"flex flex-col w-3/6 px-2"},M=e("label",{class:"mb-1"},"From",-1),S=["value"],U={class:"flex flex-col w-3/6 px-2"},D=e("label",{class:"mb-1"},"To",-1),G=["value"],K={class:"flex items-end justify-between mb-5"},I={class:"flex flex-col w-3/6 px-2"},L=e("label",{class:"mb-1"},"Amount",-1),R={__name:"CurrencyConverter",setup(w){const v=B(),n=c(0),r=c(""),i=c(""),d=c(""),m=c({});let _="",h="";H(()=>{_=v.currencyApiKey,h=v.currencyApiBase,C()});function g(){if(isNaN(n.value)){r.value="Is not a number";return}const l=new Headers;l.append("apikey",_);const o={method:"GET",redirect:"follow",headers:l};let t=h.replace("{to}",d.value).replace("{from}",i.value).replace("{amount}",n.value);fetch(t,o).then(s=>s.json()).then(s=>{s.success===!0?r.value=`${n.value} ${i.value} -> ${s.result} ${d.value}`:r.value=`Cannot convert: ${s.message}`}).catch(s=>console.log("error",s))}function C(){const l=new Headers;l.append("apikey",_),fetch("https://api.apilayer.com/exchangerates_data/symbols",{method:"GET",redirect:"follow",headers:l}).then(t=>t.json()).then(t=>{m.value=t.symbols}).catch(t=>console.log("error",t))}return(l,o)=>(a(),u("div",null,[V,e("div",q,[e("div",A,[e("div",E,[e("div",F,[M,p(e("select",{"onUpdate:modelValue":o[0]||(o[0]=t=>i.value=t),name:"currency-from"},[(a(!0),u(y,null,b(m.value,(t,s,k)=>(a(),u("option",{value:s},f(t),9,S))),256))],512),[[x,i.value]])]),e("div",U,[D,p(e("select",{"onUpdate:modelValue":o[1]||(o[1]=t=>d.value=t),name:"currency-to"},[(a(!0),u(y,null,b(m.value,(t,s,k)=>(a(),u("option",{value:s},f(t),9,G))),256))],512),[[x,d.value]])])]),e("div",K,[e("div",I,[L,p(e("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>n.value=t),step:"0.01",type:"number"},null,512),[[$,n.value]])]),e("div",{class:"flex flex-col w-3/6 px-2"},[e("button",{onClick:g,class:"btn btn-red"}," Convert ")])]),p(e("div",{class:"bg-blue-900 text-white rounded p-4 font-bold"},f(r.value),513),[[j,r.value.length]])])])]))}},P={__name:"currency",setup(w){return T({title:"Currency converter"}),(v,n)=>(a(),O(N(R)))}};export{P as default};
