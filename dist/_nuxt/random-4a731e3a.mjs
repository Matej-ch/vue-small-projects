import{r as a,o as u,a as m,b as e,w as i,v as d,S as f,t as v,B as p,f as b,c as h,u as w}from"./entry-2c87ec4d.mjs";const y=e("div",{class:"component-header"},[e("h2",null,"Random number generator")],-1),k={class:"px-4 py-5"},M={class:"flex flex-col text-white"},g={class:"flex items-center justify-between mb-5"},B={class:"flex flex-col text-center w-3/6 px-2"},N=e("label",{class:"mb-1"},"MIN",-1),V={class:"flex flex-col text-center w-3/6 px-2"},j=e("label",{class:"mb-1"},"MAX",-1),D={class:"flex items-center justify-between mb-5"},R={class:"flex flex-col text-center w-3/6 px-2"},U={class:"mb-1"},C=p("Include decimal values: "),I={class:"flex mb-5 font-bold justify-center text-center text-xl"},S={__name:"RandomNumber",setup(x){const s=a(1),n=a(5),c=a(!1),r=a();function _(){let o=Math.random()*(n.value-s.value)+s.value;c.value===!1&&(o=Math.floor(o)),r.value=o}return(o,t)=>(u(),m("div",null,[y,e("div",k,[e("div",M,[e("div",g,[e("div",B,[N,i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),type:"text"},null,512),[[d,s.value]])]),e("div",V,[j,i(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>n.value=l),type:"text"},null,512),[[d,n.value]])])]),e("div",D,[e("div",R,[e("label",U,[C,i(e("input",{"onUpdate:modelValue":t[2]||(t[2]=l=>c.value=l),type:"checkbox"},null,512),[[f,c.value]])])]),e("div",{class:"flex flex-col text-center w-3/6 px-2"},[e("button",{onClick:_,class:"btn btn-green"}," Generate ")])]),e("div",I,v(r.value),1)])])]))}},A={__name:"random",setup(x){return b({title:"Random number generator"}),(s,n)=>(u(),h(w(S)))}};export{A as default};