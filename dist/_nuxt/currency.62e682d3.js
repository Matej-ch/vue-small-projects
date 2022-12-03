import{_ as B}from"./ComponentContainer.7b585e2f.js";import{S as V,i as c,U as N,o as l,b as u,e as t,j as m,p as y,F as f,H as b,t as x,v as j,k as F,c as H,w,f as S,l as T,u as U}from"./entry.88ccf0b3.js";import{u as q}from"./fetch.035a2b0a.js";import{u as A}from"./composables.3d54cfff.js";const E={class:"flex items-end justify-between mb-5"},M={class:"flex flex-col w-3/6 px-2"},D=t("label",{class:"mb-1"},"From",-1),K=["value"],O={class:"flex flex-col w-3/6 px-2"},R=t("label",{class:"mb-1"},"To",-1),G=["value"],I={class:"flex items-end justify-between mb-5"},L={class:"flex flex-col w-3/6 px-2"},z=t("label",{class:"mb-1"},"Amount",-1),J={__name:"CurrencyConverter",setup(C){const p=V(),n=c(0),o=c(""),i=c(""),d=c(""),v=c({});let _="",h="";N(()=>{_=p.currencyApiKey,h=p.currencyApiBase,k()});function g(){if(isNaN(n.value)){o.value="Is not a number";return}const r=new Headers;r.append("apikey",_);const a={method:"GET",redirect:"follow",headers:r};let e=h.replace("{to}",d.value).replace("{from}",i.value).replace("{amount}",n.value);fetch(e,a).then(s=>s.json()).then(s=>{s.success===!0?o.value=`${n.value} ${i.value} -> ${s.result} ${d.value}`:o.value=`Cannot convert: ${s.message}`}).catch(s=>console.log("error",s))}async function k(){const{data:r}=await q(()=>"https://api.apilayer.com/exchangerates_data/symbols",{onRequest({request:a,options:e}){e.headers=e.headers||{},e.headers.apikey=_}},"$hE2a09dxu0");v.value=r.value.symbols}return(r,a)=>(l(),u(f,null,[t("div",E,[t("div",M,[D,m(t("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),name:"currency-from"},[(l(!0),u(f,null,b(v.value,(e,s,$)=>(l(),u("option",{value:s},x(e),9,K))),256))],512),[[y,i.value]])]),t("div",O,[R,m(t("select",{"onUpdate:modelValue":a[1]||(a[1]=e=>d.value=e),name:"currency-to"},[(l(!0),u(f,null,b(v.value,(e,s,$)=>(l(),u("option",{value:s},x(e),9,G))),256))],512),[[y,d.value]])])]),t("div",I,[t("div",L,[z,m(t("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>n.value=e),step:"0.01",type:"number"},null,512),[[j,n.value]])]),t("div",{class:"flex flex-col w-3/6 px-2"},[t("button",{onClick:g,class:"btn btn-red"}," Convert ")])]),m(t("div",{class:"bg-blue-900 text-white rounded p-4 font-bold"},x(o.value),513),[[F,o.value.length]])],64))}},Y={__name:"currency",setup(C){return A({title:"Currency converter"}),(p,n)=>{const o=B;return l(),H(o,null,{header:w(()=>[S("Currency converter")]),body:w(()=>[T(U(J))]),_:1})}}};export{Y as default};
