import{q as h,r as x,O as b,b as c,h as g,V as k,o as l,c as p,y as m,G as v,e as a,l as y,F as C,H as $,u as S,B as u,t as _,C as w,A as N,W as T}from"./entry.72a4c47b.js";import{u as B}from"./composables.fb7eb567.js";import{u as V}from"./navbarStore.b3d78e20.js";const M=h({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(d,{slots:e,attrs:t}){const s=x(!1);return b(()=>{s.value=!0}),o=>{var i;if(s.value)return(i=e.default)==null?void 0:i.call(e);const r=e.fallback||e.placeholder;if(r)return r();const n=o.fallback||o.placeholder||"",f=o.fallbackTag||o.placeholderTag||"span";return c(f,t,n)}}}),F={name:k,props:{placeholder:String,tag:{type:String,default:"span"}}};function H(d,e,t,s,o,r){const n=M;return l(),p(n,{placeholder:t.placeholder,"placeholder-tag":t.tag},{default:m(()=>[v(d.$slots,"default")]),_:3},8,["placeholder","placeholder-tag"])}const O=g(F,[["render",H]]),W={class:"px-4 py-8 text-white text-center"},A={class:"max-w-5xl mx-auto rounded py-2 mb-8 bg-gradient-to-b from-blue-600 to-blue-400"},D=a("h1",{class:"text-2xl font-bold"},"Welcome!!!",-1),j=a("p",{class:"text-base"},"Here lies Few vuejs 3 components",-1),q={key:0},E={class:"grid grid-cols-12 gap-6 px-36"},G={class:"mx-2 font-medium"},I={__name:"index",setup(d){B({title:"Welcome"});const e=V();return(t,s)=>{const o=O,r=T;return l(),c("div",W,[a("div",A,[D,j,a("p",null,[y(o,{placeholder:"...",tag:"span"},{default:m(()=>[u(" Color mode: "),a("b",null,_(t.$colorMode.preference),1),t.$colorMode.preference==="system"?(l(),c("span",q,[u("\xA0("),a("i",null,_(t.$colorMode.value),1),u(" mode detected)")])):w("",!0)]),_:1})])]),a("div",E,[(l(!0),c(C,null,$(S(e).items,n=>(l(),p(r,{to:{name:n.url},class:"flex flex-row px-4 py-2 items-center rounded-sm text-slate-700 bg-slate-200 hover:bg-slate-600 rounded-md dark:bg-slate-700 dark:text-slate-200"},{default:m(()=>[(l(),p(N(n.icon),{markRaw:""})),a("span",G,_(n.label),1)]),_:2},1032,["to"]))),256))])])}}};export{I as default};