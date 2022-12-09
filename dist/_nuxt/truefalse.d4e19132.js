import{_ as w}from"./ComponentContainer.cda60fd2.js";import{i as s,o as _,b as h,e as t,j as a,v as m,f as p,a7 as v,p as V,k as y,A as C,t as T,F as S,Z as B,c as N,w as f,l as U,u as j}from"./entry.6d7d4e22.js";import{u as k}from"./composables.9f38f497.js";const F={class:"flex items-center justify-between mb-5"},O={class:"flex flex-col font-bold w-3/6 px-2"},M=t("label",{class:"mb-1"},"First value",-1),D={class:"flex flex-col font-bold w-3/6 px-2"},z=t("label",{class:"mb-1"},"Second value",-1),A={class:"flex items-center justify-between mb-5"},E={class:"flex flex-col w-3/6 px-2 justify-between"},H=t("label",{class:"mr-3 font-bold"},"Compare as",-1),L={class:"flex items-center gap-4 font-bold"},R={class:"flex flex-col px-2 w-3/6"},Z=t("label",{for:"decimals-comparison",class:"mr-3 font-bold"},"Comparison operator",-1),$=B('<option value="&gt;">&gt;</option><option value="&gt;=">&gt;=</option><option value="&lt;">&lt;</option><option value="&lt;=">&lt;=</option><option value="==">==</option><option value="===">===</option><option value="!=">!=</option><option value="!==">!==</option>',8),q=[$],G={class:"flex items-center justify-between mb-5"},I={__name:"TrueOrFalse",setup(b){const i=s(""),d=s(""),r=s(">"),u=s(void 0),n=s("string"),x=s(g());function g(){return{">"(o,e){return o>e},">="(o,e){return o>=e},"<"(o,e){return o<e},"<="(o,e){return o<=e},"=="(o,e){return o==e},"==="(o,e){return o===e},"!="(o,e){return o!=e},"!=="(o,e){return o!==e}}}function c(){let o=i.value,e=d.value;n.value==="number"&&(o=Number(o),e=Number(e)),n.value==="string"&&(o=o.toString(),e=e.toString()),n.value==="bool"&&(o=Boolean(o),e=Boolean(e)),x.value[r.value](o,e)?u.value="True":u.value="False"}return(o,e)=>(_(),h(S,null,[t("div",F,[t("div",O,[M,a(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l),onChange:c},null,544),[[m,i.value]])]),t("div",D,[z,a(t("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>d.value=l),onChange:c},null,544),[[m,d.value]])])]),t("div",A,[t("div",E,[H,t("div",L,[t("label",null,[p(" Number "),a(t("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l),type:"radio",value:"number"},null,512),[[v,n.value]])]),t("label",null,[p(" String "),a(t("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>n.value=l),type:"radio",value:"string"},null,512),[[v,n.value]])]),t("label",null,[p(" Boolean "),a(t("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>n.value=l),type:"radio",value:"bool"},null,512),[[v,n.value]])])])]),t("div",R,[Z,a(t("select",{"onUpdate:modelValue":e[5]||(e[5]=l=>r.value=l),onChange:c,id:"decimals-comparison"},q,544),[[V,r.value]])])]),t("div",G,[a(t("div",{class:C(["w-full text-xl p-4 font-bold rounded-sm",u.value==="True"?"bg-green-500":"bg-red-500"])},T(u.value),3),[[y,u.value]])])],64))}},Q={__name:"truefalse",setup(b){return k({title:"True or false"}),(i,d)=>{const r=w;return _(),N(r,null,{header:f(()=>[p("True or false")]),body:f(()=>[U(j(I))]),_:1})}}};export{Q as default};
