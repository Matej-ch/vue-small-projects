import{_ as T}from"./ComponentContainer.f579fdde.js";import{a as R,i as a,m as $,o as g,b as V,e,j as n,v as d,p as U,q as L,u as c,l as w,F as j,s as k,x as O,c as S,w as y,f as C}from"./entry.fe5dfb17.js";import{_ as I}from"./ClipboardBtn.bbb5d8db.js";import{u as M}from"./composables.4ec0e794.js";const l=u=>(k("data-v-337e5535"),u=u(),O(),u),N={class:"flex items-center justify-between mb-5"},F={class:"flex flex-col font-bold w-3/6 px-2"},H=l(()=>e("label",{class:"mb-1"},"Top left 1:",-1)),P=["step"],q={class:"flex flex-col font-bold w-3/6 px-2"},z=l(()=>e("label",{class:"mb-1"},"Top left 2:",-1)),A=["step"],D={class:"flex items-center justify-between mb-5"},E={class:"flex flex-col font-bold w-3/6 px-2"},J=l(()=>e("label",{class:"mb-1"},"Top right 1:",-1)),W=["step"],G={class:"flex flex-col font-bold w-3/6 px-2"},K=l(()=>e("label",{class:"mb-1"},"Top right 2:",-1)),Q=["step"],X={class:"flex items-center justify-between mb-5"},Y={class:"flex flex-col font-bold w-3/6 px-2"},Z=l(()=>e("label",{class:"mb-1"},"Bottom right 1:",-1)),ee=["step"],te={class:"flex flex-col font-bold w-3/6 px-2"},se=l(()=>e("label",{class:"mb-1"},"Bottom right 2:",-1)),oe=["step"],le={class:"flex items-center justify-between mb-5"},ae={class:"flex flex-col font-bold w-3/6 px-2"},ne=l(()=>e("label",{class:"mb-1"},"Bottom right 1:",-1)),de=["step"],ie={class:"flex flex-col font-bold w-3/6 px-2"},ue=l(()=>e("label",{class:"mb-1"},"Bottom right 2:",-1)),re=["step"],pe={class:"flex items-center justify-between mb-5"},ce={class:"flex flex-col font-bold w-3/6 px-2"},_e=l(()=>e("label",{class:"mb-1"},"Border height",-1)),ve={class:"flex flex-col w-3/6 px-2"},me=l(()=>e("label",{for:"decimals",class:"mr-3 font-bold"},"Units:",-1)),xe=l(()=>e("option",{value:"px"},"px",-1)),be=l(()=>e("option",{value:"em"},"em",-1)),fe=[xe,be],he={class:"relative"},$e=["innerHTML"],ye={class:"absolute right-4 top-2"},ge={__name:"BorderRadiusPreviewer",setup(u){const r=a(5),p=a(5),i=a(5),_=a(5),v=a(5),m=a(5),x=a(5),b=a(5),f=a(2),t=a("px"),B=$(()=>({borderTopLeftRadius:`${r.value}${t.value} ${p.value}${t.value}`,borderTopRightRadius:`${i.value}${t.value} ${_.value}${t.value}`,borderBottomRightRadius:`${x.value}${t.value} ${b.value}${t.value}`,borderBottomLeftRadius:`${v.value}${t.value} ${m.value}${t.value}`,border:`${f.value}px solid black`})),h=$(()=>JSON.stringify({"border-top-left-radius":`${r.value}${t.value} ${p.value}${t.value}`,"border-top-right-radius":`${i.value}${t.value} ${_.value}${t.value}`,"border-bottom-right-radius":`${x.value}${t.value} ${b.value}${t.value}`,"border-bottom-left-radius":`${v.value}${t.value} ${m.value}${t.value}`,border:`${f.value}px solid black`}).replace(/,/gi,";<br>").replace(/"/gi,""));return(Be,s)=>(g(),V(j,null,[e("div",N,[e("div",F,[H,n(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>r.value=o),type:"range",min:"0",max:"500",class:"py-3 px-5 rounded slider",step:t.value!=="px"?.1:1},null,8,P),[[d,r.value]])]),e("div",q,[z,n(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>p.value=o),type:"range",min:"0",max:"500",step:t.value!=="px"?.1:1,class:"py-3 px-5 rounded slider"},null,8,A),[[d,p.value]])])]),e("div",D,[e("div",E,[J,n(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>i.value=o),type:"range",min:"0",max:"500",class:"py-3 px-5 rounded slider",step:t.value!=="px"?.1:1},null,8,W),[[d,i.value]])]),e("div",G,[K,n(e("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>_.value=o),type:"range",min:"0",max:"500",step:t.value!=="px"?.1:1,class:"py-3 px-5 rounded slider"},null,8,Q),[[d,_.value]])])]),e("div",X,[e("div",Y,[Z,n(e("input",{"onUpdate:modelValue":s[4]||(s[4]=o=>x.value=o),type:"range",min:"0",max:"500",class:"py-3 px-5 rounded slider",step:t.value!=="px"?.1:1},null,8,ee),[[d,x.value]])]),e("div",te,[se,n(e("input",{"onUpdate:modelValue":s[5]||(s[5]=o=>b.value=o),type:"range",min:"0",max:"500",step:t.value!=="px"?.1:1,class:"py-3 px-5 rounded slider"},null,8,oe),[[d,b.value]])])]),e("div",le,[e("div",ae,[ne,n(e("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>v.value=o),type:"range",min:"0",max:"500",class:"py-3 px-5 rounded slider",step:t.value!=="px"?.1:1},null,8,de),[[d,v.value]])]),e("div",ie,[ue,n(e("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>m.value=o),type:"range",min:"0",max:"500",step:t.value!=="px"?.1:1,class:"py-3 px-5 rounded slider"},null,8,re),[[d,m.value]])])]),e("div",pe,[e("div",ce,[_e,n(e("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>f.value=o),type:"range",min:"1",max:"500",step:1,class:"py-3 px-5 rounded slider"},null,512),[[d,f.value]])]),e("div",ve,[me,n(e("select",{"onUpdate:modelValue":s[9]||(s[9]=o=>t.value=o)},fe,512),[[U,t.value]])])]),e("div",{class:"block p-8 mx-2 my-6",style:L(c(B))}," \xA0 ",4),e("div",he,[e("div",{class:"copy mx-2 font-bold bg-slate-600 rounded-sm",innerHTML:".border-class "+c(h)},null,8,$e),e("div",ye,[w(c(I),{text:".border-class "+c(h).replaceAll("<br>",""),btnClass:"btn-orange"},null,8,["text"])])])],64))}},we=R(ge,[["__scopeId","data-v-337e5535"]]),Le={__name:"border",setup(u){return M({title:"Border radius"}),(r,p)=>{const i=T;return g(),S(i,null,{header:y(()=>[C("Border radius settings!")]),body:y(()=>[w(c(we))]),_:1})}}};export{Le as default};
