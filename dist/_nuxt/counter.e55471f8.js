import{i as u,o as i,e as m,f as t,t as _,a as d,j as v,v as f,F as b,c as x,w as c,l as C}from"./entry.38e07db5.js";import{_ as g}from"./ComponentContainer.7fd0c4dd.js";import{u as w}from"./composables.85f75fe7.js";const k={class:"w-full text-center font-bold text-6xl"},h={class:"w-full gap-4 flex justify-center mt-8"},y={class:"max-w-lg grid grid-cols-2 items-end"},B={__name:"CounterWithStep",setup(p){const e=u(0),o=u(1);function r(){e.value=0}function s(){e.value-=o.value}function a(){e.value+=o.value}return(V,n)=>(i(),m(b,null,[t("div",k,_(e.value),1),t("div",h,[t("button",{onClick:n[0]||(n[0]=l=>a()),class:"btn btn-green"},"+"),t("button",{onClick:n[1]||(n[1]=l=>s()),class:"btn btn-green"},"-")]),t("div",y,[t("div",null,[d(" Increment by "),v(t("input",{type:"number",step:"1","onUpdate:modelValue":n[2]||(n[2]=l=>o.value=l)},null,512),[[f,o.value]])]),t("div",null,[t("button",{onClick:r,class:"btn btn-red"},"Reset")])])],64))}},j={__name:"counter",setup(p){const e="Counter with step";return w({title:e}),(o,r)=>{const s=B,a=g;return i(),x(a,null,{header:c(()=>[d(_(e))]),body:c(()=>[C(s)]),_:1})}}};export{j as default};
