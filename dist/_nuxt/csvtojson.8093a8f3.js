import{_ as C}from"./ComponentContainer.7fd0c4dd.js";import{i as r,o as p,e as w,f as t,j as u,v,k as g,t as b,F as k,c as y,w as d,a as h,l as V,u as J}from"./entry.38e07db5.js";import{u as $}from"./composables.85f75fe7.js";const j={class:"flex items-center justify-between mb-3 w-full flex-col"},B=t("label",{class:"mb-1 font-bold text-white"},"Csv to convert",-1),N={class:"flex items-center justify-between mb-3 w-full flex-col"},S=t("label",{class:"mb-1 font-bold text-white"},"Json result",-1),D={class:"p-4 flex gap-2"},T={__name:"CsvToJson",setup(f){const n=r(""),o=r(""),i=r(""),l=r(",");function m(){if(!o.value.length)return;const a=o.value.split(`
`);let e=a[0].split(l.value),s=a[1].split(l.value);n.value=JSON.stringify(e.reduce((c,_,x)=>(c[_]=s[x],c),{}))}function F(a=!1){}return(a,e)=>(p(),w(k,null,[t("div",j,[B,u(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.value=s),cols:"30",rows:"10",placeholder:"Csv to convert",onKeyup:e[1]||(e[1]=s=>void 0),onPaste:e[2]||(e[2]=s=>void 0)},`\r
                `,544),[[v,o.value]])]),t("div",null,[t("button",{onClick:m,class:"btn btn-green"}," Convert ")]),u(t("div",{class:"bg-red-300 text-red-500 p-4"},b(i.value),513),[[g,i.value.length]]),t("div",N,[S,u(t("textarea",{"onUpdate:modelValue":e[3]||(e[3]=s=>n.value=s),cols:"30",rows:"10",placeholder:"Json",disabled:"",class:"pointer-events-none"},null,512),[[v,n.value]])]),t("div",D,[t("button",{class:"btn btn-slate",onClick:e[4]||(e[4]=s=>n.value="")},"Clear Json"),t("button",{class:"btn btn-orange",onClick:e[5]||(e[5]=s=>o.value="")},"Clear Csv"),t("button",{class:"btn btn-red",onClick:e[6]||(e[6]=s=>{n.value="",o.value=""})},"Clear Both")])],64))}},H={__name:"csvtojson",setup(f){const n="CSV to Json converter";return $({title:n}),(o,i)=>{const l=C;return p(),y(l,null,{header:d(()=>[h(b(n))]),body:d(()=>[V(J(T))]),_:1})}}};export{H as default};
