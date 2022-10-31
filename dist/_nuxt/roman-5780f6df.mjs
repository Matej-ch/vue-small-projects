import{r,o as d,a as p,b as t,w as i,v as m,e as x,t as h,f as b,c as w,u as y}from"./entry-2c87ec4d.mjs";const g=t("div",{class:"component-header"},[t("h2",null,"Roman numerals")],-1),D={class:"px-4 py-5"},V={class:"flex flex-col text-white"},C={class:"flex items-center justify-between mb-5"},R={class:"flex flex-col text-center w-3/6 px-2"},B=t("label",{class:"mb-1"},"Roman numeral",-1),X={class:"flex flex-col text-center w-3/6 px-2"},j=t("label",{class:"mb-1"},"Decimal",-1),k={__name:"RomanNumerals",setup(v){const c={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,XL:40,L:50,X:10,IX:9,V:5,IV:4,I:1},a=r(""),s=r(0),u=r("");function _(){let l=0;for(let e=0;e<a.value.length;e++){const n=c[a.value[e]],o=c[a.value[e+1]];if(o===void 0){l+=n;continue}if(n>=o){l+=n;continue}l-=n}s.value=l}function f(){if(s.value<1||s.value>3999){u.value="Cannot convert number";return}let l="",e=s.value;for(const[n,o]of Object.entries(c))for(;e>=o;)l+=n,e-=o;a.value=l}return(l,e)=>(d(),p("div",null,[g,t("div",D,[t("div",V,[t("div",C,[t("div",R,[B,i(t("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n),type:"text",onKeyup:_},null,544),[[m,a.value]])]),t("div",X,[j,i(t("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>s.value=n),type:"text",onKeyup:f},null,544),[[m,s.value]])])]),i(t("div",{class:"flex mb-5 font-bold justify-center text-center p-4 bg-red-300 text-red-600"},h(u.value),513),[[x,u.value.length]])])])]))}},M={__name:"roman",setup(v){return b({title:"Roman numerals"}),(c,a)=>(d(),w(y(k)))}};export{M as default};
