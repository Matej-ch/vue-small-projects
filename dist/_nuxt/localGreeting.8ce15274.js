import{_ as r}from"./ComponentContainer.cda60fd2.js";import{a as p,a5 as u,o as c,b as m,e,f as _,t as h,j as x,p as f,u as i,N as y,s as g,x as v,c as w,w as l,l as j}from"./entry.6d7d4e22.js";import{u as H}from"./composables.9f38f497.js";const o=t=>(g("data-v-0ad6ea67"),t=t(),v(),t),I={class:"flex flex-col justify-center h-full mx-auto max-w-600px"},N={class:"flex flex-col items-center leading-loose text-center"},S={class:"text-3xl"},B=o(()=>e("span",{class:"i-twemoji-christmas-tree"},null,-1)),G=o(()=>e("span",{class:"i-twemoji-world-map"},null,-1)),V=o(()=>e("option",{value:"en"},"EN",-1)),k=o(()=>e("option",{value:"de"},"DE",-1)),C=o(()=>e("option",{value:"ja"},"ja-JP",-1)),D=[V,k,C],E={__name:"HolidayGreeting",setup(t){const{locale:s}=u();return(n,a)=>(c(),m("main",I,[e("section",N,[e("div",S,[B,_(" "+h(n.$t("happyHolidays"))+" ",1),G]),x(e("select",{"onUpdate:modelValue":a[0]||(a[0]=d=>y(s)?s.value=d:null)},D,512),[[f,i(s)]])])]))}},b=p(E,[["__scopeId","data-v-0ad6ea67"]]),M={__name:"localGreeting",setup(t){return H({title:"Local holiday greetings"}),(s,n)=>{const a=r;return c(),w(a,null,{header:l(()=>[_("Local holiday greetings")]),body:l(()=>[j(i(b))]),_:1})}}};export{M as default};