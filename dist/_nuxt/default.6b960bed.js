import{O as f,r as _,o as n,b as l,e,t as c,F as x,H as v,c as m,y as p,A as b,u as h,l as d,B as $,W as g,G as w}from"./entry.72a4c47b.js";import{u as k}from"./navbarStore.b3d78e20.js";import{C as y}from"./ColorModePicker.31d016cc.js";const j={class:"flex flex-row font-bold text-xs md:text-base justify-center items-center text-slate-300"},B={class:"hour"},M=e("div",{class:"dots"},":",-1),N={class:"min"},S=e("div",{class:"dots"},":",-1),C={class:"secs"},D={__name:"Time",setup(u){f(()=>{i()});const t=_(0),a=_(0),r=_(0);function i(){setInterval(()=>{const o=new Date;t.value=o.getHours(),a.value=s(o.getMinutes()),r.value=s(o.getSeconds())},1e3)}function s(o){return("0"+o).slice(-2)}return(o,R)=>(n(),l("div",j,[e("div",B,c(t.value),1),M,e("div",N,c(a.value),1),S,e("div",C,c(r.value),1)]))}},V={class:"navbar"},T=e("h2",null,"Vuejs 3 components",-1),F=e("p",{class:"hidden md:block text-xs md:text-sm text-white font-bold"},[$("Made by "),e("a",{href:"https://github.com/Matej-ch",class:"text-blue-300 underline"},"matejch")],-1),H={class:"flex flex-col justify-between flex-1 md:mt-6 overflow-auto"},A={class:"mx-2 font-medium hidden md:inline-block"},E={__name:"Navbar",setup(u){const t=k();return(a,r)=>{const i=g;return n(),l("nav",V,[T,F,e("div",H,[e("nav",null,[(n(!0),l(x,null,v(h(t).items,s=>(n(),m(i,{to:{name:s.url},class:"item"},{default:p(()=>[(n(),m(b(s.icon),{markRaw:""})),e("span",A,c(s.label),1)]),_:2},1032,["to"]))),256))])]),d(h(D))])}}},G={class:"flex flex-row"},I={class:"w-full max-w-5xl m-auto"},L={class:"rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3"},O={class:"flex flex-col"},P={class:"absolute top-2 right-2"},J={__name:"default",setup(u){return(t,a)=>(n(),l("div",G,[d(E),e("div",I,[e("div",L,[e("div",O,[w(t.$slots,"default")])])]),e("div",P,[d(y)])]))}};export{J as default};