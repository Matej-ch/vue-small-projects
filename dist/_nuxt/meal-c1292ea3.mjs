import{r as v,y as b,o as l,a as n,b as e,w as g,e as y,F as u,A as d,t as r,N as _,B as w,f as k,c as B,u as M}from"./entry-2c87ec4d.mjs";const I=e("div",{class:"flex flex-col items-center justify-center text-white py-4 px-4 bg-blue-800"},[e("div",{class:"text-center uppercase text-2xl"},"Random meal")],-1),N={class:"px-4 py-5"},R={class:"flex flex-col text-white"},V={class:"flex flex-row gap-2 items-center mb-4"},$=["src","alt"],j={class:"font-bold"},C={class:"text-left"},D=e("p",{class:"font-bold py-2"}," Ingredients ",-1),T={key:0},Y={class:"text-left"},A=e("p",{class:"font-bold py-2"},"Instructions",-1),E={key:0,class:"text-left py-4"},F=["src"],S={__name:"RandomMeal",setup(h){const o=v([]),a=b(),p=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;function f(){fetch(`${a.mealApiBase}${52772}`).then(t=>t.json()).then(t=>{o.value=t.meals}).catch(t=>console.error(t))}function m(t){const c=t.match(p);return c&&c[2].length===11?`https://www.youtube.com/embed/${c[2]}`:""}return(t,c)=>(l(),n("div",null,[I,e("div",N,[e("div",R,[e("div",{class:"flex items-end justify-center mb-5"},[e("div",{class:"flex flex-col text-center px-2"},[e("button",{onClick:f,class:"btn btn-orange"}," Get meal ")])]),g(e("div",null,[(l(!0),n(u,null,d(o.value,s=>(l(),n("div",null,[e("div",V,[e("img",{src:s.strMealThumb,alt:s.strMeal,style:{"max-width":"100px"}},null,8,$),e("h2",j,r(s.strMeal),1)]),e("div",C,[D,e("ul",null,[(l(!0),n(u,null,d(s,(x,i)=>(l(),n("li",null,[i.includes("strIngredient")?(l(),n("span",T,r(x)+" "+r(s["strMeasure"+i.replace(/^\D+/g,"")]),1)):_("",!0)]))),256))])]),e("div",Y,[A,w(" "+r(s.strInstructions),1)]),s.strYoutube.length?(l(),n("div",E,[e("iframe",{width:"560",height:"315",src:m(s.strYoutube),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,F)])):_("",!0)]))),256))],512),[[y,o.value.length]])])])]))}},H={__name:"meal",setup(h){return k({title:"Random meal"}),(o,a)=>(l(),B(M(S)))}};export{H as default};
