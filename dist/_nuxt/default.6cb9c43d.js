import{U as h,i as _,o as n,b as l,e,t as c,F as x,H as v,c as m,w as p,C as b,u as f,l as d,f as $,a0 as g,r as w}from"./entry.bfd3db2c.js";import{u as k}from"./navbarStore.408cc53e.js";import{C as j}from"./ColorModePicker.772be008.js";const y={class:"flex flex-row font-bold text-xs md:text-base justify-center items-center text-slate-300"},C={class:"hour"},M=e("div",{class:"dots"},":",-1),N={class:"min"},S=e("div",{class:"dots"},":",-1),B={class:"secs"},D={__name:"Time",setup(u){h(()=>{r()});const t=_(0),a=_(0),i=_(0);function r(){setInterval(()=>{const o=new Date;t.value=o.getHours(),a.value=s(o.getMinutes()),i.value=s(o.getSeconds())},1e3)}function s(o){return("0"+o).slice(-2)}return(o,z)=>(n(),l("div",y,[e("div",C,c(t.value),1),M,e("div",N,c(a.value),1),S,e("div",B,c(i.value),1)]))}},V={class:"navbar"},T=e("h2",null,"Vuejs 3 components",-1),F=e("p",{class:"hidden md:block text-xs md:text-sm text-white font-bold"},[$("Made by "),e("a",{href:"https://github.com/Matej-ch",class:"text-blue-300 underline"},"matejch")],-1),H={class:"flex flex-col justify-between flex-1 md:mt-6 overflow-auto"},E={class:"mx-2 font-medium hidden md:inline-block"},I={__name:"Navbar",setup(u){const t=k();return(a,i)=>{const r=g;return n(),l("nav",V,[T,F,e("div",H,[e("nav",null,[(n(!0),l(x,null,v(f(t).items,s=>(n(),m(r,{to:{name:s.url},class:"item"},{default:p(()=>[(n(),m(b(s.icon),{markRaw:""})),e("span",E,c(s.label),1)]),_:2},1032,["to"]))),256))])]),d(f(D))])}}},L={class:"flex flex-row"},P={class:"w-full max-w-5xl m-auto"},R={class:"rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3"},U={class:"flex flex-col"},q={class:"absolute top-2 right-2"},K={__name:"default",setup(u){return(t,a)=>(n(),l("div",L,[d(I),e("div",P,[e("div",R,[e("div",U,[w(t.$slots,"default")])])]),e("div",q,[d(j)])]))}};export{K as default};