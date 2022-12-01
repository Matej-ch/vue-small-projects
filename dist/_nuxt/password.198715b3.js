import{_ as L}from"./ComponentContainer.f579fdde.js";import{i as n,o as x,b as N,e as t,j as u,v as $,f as m,$ as p,k as v,t as _,l as g,u as w,c as A,w as b}from"./entry.fe5dfb17.js";import{_ as B}from"./ClipboardBtn.bbb5d8db.js";import{u as I}from"./composables.4ec0e794.js";const R={class:"px-4 py-5"},z={class:"flex flex-col text-white"},D={class:"flex items-end justify-between mb-5"},E={class:"flex flex-col text-center w-3/6 px-2"},G=t("label",{class:"mb-1"},"Password Length",-1),T={class:"flex items-end justify-between mb-5"},Z={class:"flex flex-col px-2 justify-start"},H={class:"mb-1 flex justify-between"},q={class:"mb-1 flex justify-between"},F={class:"mb-1 flex justify-between"},J={class:"mb-1 flex justify-between"},K={class:"w-full flex flex-col"},O=t("span",null,"Password Strength",-1),Q=["value"],W={class:"bg-blue-900 text-white rounded-sm px-4 py-6 font-bold flex flex-col relative"},X={class:"absolute right-4 top-2"},Y={__name:"PasswordGenerator",setup(y){const o=n(""),r=n(1),a=n(!0),i=n(!1),c=n(!1),d=n(!1),f=n(0);function C(){if(!a.value&&!i.value&&!c.value&&!d.value){alert("At least one checkbox must be set");return}const l=a.value+i.value+c.value+d.value;let e=[],s="";a.value&&e.push("upper"),i.value&&e.push("lower"),c.value&&e.push("numbers"),d.value&&e.push("symbols");const U={lower:k,upper:M,numbers:S,symbols:j};for(let h=0;h<r.value;h+=l)e.forEach(P=>{s+=U[P]()});o.value=s.slice(0,r.value),V(o.value)}function k(){return String.fromCharCode(Math.floor(Math.random()*26)+97)}function M(){return String.fromCharCode(Math.floor(Math.random()*26)+65)}function S(){return+String.fromCharCode(Math.floor(Math.random()*10)+48)}function j(){const l="!@#$%^&*(){}[]=<>/,.-\\;`~";return l[Math.floor(Math.random()*l.length)]}function V(l){let e=0;l.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&(e+=1),l.match(/([0-9])/)&&(e+=1),l.match(/([!@#$%^&*(){}\[\]=<>,.-;`~])/)&&(e+=1),l.length>7&&(e+=1),e<2?f.value=10:e===3?f.value=60:e===4&&(f.value=100)}return(l,e)=>(x(),N("div",null,[t("div",R,[t("div",z,[t("div",D,[t("div",E,[G,u(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s),type:"number",step:"1",min:"1"},null,512),[[$,r.value]])]),t("div",{class:"flex flex-col text-center w-3/6 px-2"},[t("button",{onClick:C,class:"btn btn-red"}," Generate ")])]),t("div",T,[t("div",Z,[t("label",H,[m("Include uppercase letters: "),u(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>a.value=s),type:"checkbox"},null,512),[[p,a.value]])]),t("label",q,[m("Include lowercase letters: "),u(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>i.value=s),type:"checkbox"},null,512),[[p,i.value]])]),t("label",F,[m("Include numbers: "),u(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>c.value=s),type:"checkbox"},null,512),[[p,c.value]])]),t("label",J,[m("Include symbols: "),u(t("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>d.value=s),type:"checkbox"},null,512),[[p,d.value]])])])]),u(t("div",K,[O,t("progress",{id:"strength",max:"100",value:f.value},_(f.value)+"%",9,Q)],512),[[v,o.value.length]]),u(t("div",W,[t("div",null,_(o.value),1),t("div",X,[g(w(B),{text:o.value},null,8,["text"])])],512),[[v,o.value.length]])])])]))}},oe={__name:"password",setup(y){return I({title:"Password generator"}),(o,r)=>{const a=L;return x(),A(a,null,{header:b(()=>[m(" Password generator ")]),body:b(()=>[g(w(Y))]),_:1})}}};export{oe as default};
