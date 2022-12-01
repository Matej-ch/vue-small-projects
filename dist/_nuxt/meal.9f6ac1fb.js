import{_ as v}from"./ComponentContainer.f579fdde.js";import{i as w,N as y,o as n,b as o,e,j as k,k as C,F as i,H as _,t as l,D as m,f as h,c as M,w as p,l as B,u as N}from"./entry.fe5dfb17.js";import{u as V}from"./composables.4ec0e794.js";const D={class:"flex flex-row gap-2 items-center mb-4"},I=["src","alt"],R={class:"font-bold"},$={class:"text-left"},j=e("p",{class:"font-bold py-2"}," Ingredients ",-1),T={key:0},Y={class:"text-left"},E=e("p",{class:"font-bold py-2"},"Instructions",-1),F={key:0,class:"text-left py-4"},H=["src"],S={__name:"RandomMeal",setup(f){const r=w([]),u=y(),c=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;function b(){fetch(`${u.mealApiBase}${52772}`).then(t=>t.json()).then(t=>{r.value=t.meals}).catch(t=>console.error(t))}function g(t){const a=t.match(c);return a&&a[2].length===11?`https://www.youtube.com/embed/${a[2]}`:""}return(t,a)=>(n(),o(i,null,[e("div",{class:"flex items-end justify-center mb-5"},[e("div",{class:"flex flex-col text-center px-2"},[e("button",{onClick:b,class:"btn btn-orange"}," Get meal ")])]),k(e("div",null,[(n(!0),o(i,null,_(r.value,s=>(n(),o("div",null,[e("div",D,[e("img",{src:s.strMealThumb,alt:s.strMeal,style:{"max-width":"100px"}},null,8,I),e("h2",R,l(s.strMeal),1)]),e("div",$,[j,e("ul",null,[(n(!0),o(i,null,_(s,(x,d)=>(n(),o("li",null,[d.includes("strIngredient")?(n(),o("span",T,l(x)+" "+l(s["strMeasure"+d.replace(/^\D+/g,"")]),1)):m("",!0)]))),256))])]),e("div",Y,[E,h(" "+l(s.strInstructions),1)]),s.strYoutube.length?(n(),o("div",F,[e("iframe",{width:"560",height:"315",src:g(s.strYoutube),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,H)])):m("",!0)]))),256))],512),[[C,r.value.length]])],64))}},U={__name:"meal",setup(f){return V({title:"Random meal"}),(r,u)=>{const c=v;return n(),M(c,null,{header:p(()=>[h("Random meal")]),body:p(()=>[B(N(S))]),_:1})}}};export{U as default};
