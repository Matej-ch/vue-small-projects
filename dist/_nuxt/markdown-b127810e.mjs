import{r as n,z as _,P as m,Q as v,o as c,a as w,b as e,w as s,v as p,e as r,l as f,u as i,f as h,c as k}from"./entry-2c87ec4d.mjs";import{_ as x}from"./ClipboardBtn-6ac51a53.mjs";const b=e("div",{class:"component-header"},[e("h2",null,"Markdown preview")],-1),g={class:"px-4 py-2"},M={class:"flex items-center justify-between mb-3 w-full flex-col"},T=e("label",{class:"mb-1"},"Text with markdown",-1),y={class:"px-4 flex"},B={class:"px-4 py-5"},S=["innerHTML"],H={__name:"MarkdownPreviewer",setup(d){const t=n(null),a=n("");_(()=>{localStorage.getItem("markdown")&&(t.value=localStorage.getItem("markdown"),o())});function o(){localStorage.setItem("markdown",t.value),a.value=m.sanitize(v.parse(t.value))}return(I,l)=>(c(),w("div",null,[b,e("div",g,[e("div",M,[T,s(e("textarea",{"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),cols:"30",rows:"10",placeholder:"Text with markdown"},null,512),[[p,t.value]])])]),e("div",y,[e("button",{onClick:o,class:"btn btn-green"}," Preview "),s(f(i(x),{text:a.value},null,8,["text"]),[[r,a.value.length]])]),e("div",B,[s(e("div",{class:"mb-3 w-full bg-white js-markdown",innerHTML:a.value},null,8,S),[[r,a.value.length]])])]))}},j={__name:"markdown",setup(d){return h({title:"Markdown"}),(t,a)=>(c(),k(i(H)))}};export{j as default};