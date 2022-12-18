import{_ as h}from"./ComponentContainer.7fd0c4dd.js";import{i as c,P as v,o as p,e as b,f as t,j as w,v as g,t as n,a as s,F as k,c as y,w as _,l as C,u as M}from"./entry.38e07db5.js";import{u as D}from"./composables.85f75fe7.js";const B={class:"flex flex-col text-white"},T={class:"flex items-end mb-5"},V={class:"flex flex-col text-center w-3/6 px-2"},q=t("label",{class:"mb-1",for:"weight-kilograms"},"Dollars",-1),F={class:"flex items-center justify-between mb-3 w-full flex-col"},N={class:"flex flex-row flex text-right px-2 font-bold text-xl gap-2"},j={class:"decoration-slate-600 decoration-2 underline"},E={class:"decoration-neutral-500 decoration-2 underline"},H={class:"decoration-yellow-400 decoration-2 underline"},K=t("span",{class:"text-slate-800"},"and",-1),O={class:"decoration-amber-600 decoration-2 underline"},P={__name:"DollarsToCents",setup(f){const o=c(1),l=c(0),r=c(0),a=c(0),i=c(0);v(()=>{u()});function u(){let e=m(o.value);i.value=Math.floor(e/25),e=e%25,a.value=Math.floor(e/10),e=e%10,r.value=Math.floor(e/5),e=e%5,l.value=Math.floor(e)}function m(e){return e=(e+"").replace(/[^\d.-]/g,""),e&&e.includes(".")&&(e=e.substring(0,e.indexOf(".")+3)),e?Math.round(parseFloat(e)*100):0}return(e,d)=>(p(),b(k,null,[t("div",B,[t("div",T,[t("div",V,[q,w(t("input",{"onUpdate:modelValue":d[0]||(d[0]=x=>o.value=x),onKeyup:u,type:"number",step:"0.01",min:"0"},null,544),[[g,o.value]])]),t("div",{class:""},[t("button",{onClick:u,class:"btn btn-orange"}," Convert ")])])]),t("div",F,[t("div",N,[t("span",null,"You have "+n(l.value+r.value+a.value+i.value)+" coins:",1),t("span",null,[s(n(i.value),1),t("span",j,"\xA0"+n(i.value===1?"quarter":"quarters"),1),s(", ")]),t("span",null,[s(n(a.value),1),t("span",E,"\xA0"+n(a.value===1?"dime":"dimes"),1),s(", ")]),t("span",null,[s(n(r.value),1),t("span",H,"\xA0"+n(r.value===1?"nickel":"nickels"),1)]),K,t("span",null,[s(n(l.value),1),t("span",O,"\xA0"+n(l.value===1?"penny":"pennies"),1)])])])],64))}},$={__name:"dollars",setup(f){const o="Dollars to cents";return D({title:o}),(l,r)=>{const a=h;return p(),y(a,null,{header:_(()=>[s(n(o))]),body:_(()=>[C(M(P))]),_:1})}}};export{$ as default};
