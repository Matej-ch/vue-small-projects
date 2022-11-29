import{N as b,r as l,O as g,o as c,b as d,e,w as v,v as k,Z as B,f as y,t as n,c as S,u as W}from"./entry.72a4c47b.js";import{u as C}from"./composables.fb7eb567.js";const I=e("div",{class:"component-header"},[e("h2",null,"Weather app")],-1),K={class:"px-4 py-5"},$={class:"flex flex-col text-white"},j={class:"flex items-end justify-between mb-5"},D={class:"flex flex-col text-center w-3/6 px-2"},N=e("label",{class:"mb-1"},"City",-1),H=["onKeyup"],M={class:"flex flex-col mb-5 font-bold justify-center text-center p-4 w-full"},T={class:"text-center"},V={key:0,class:"text-4xl"},q={key:1,class:"text-4xl"},A={__name:"WeatherApp",setup(w){const i=b(),s=l(""),_=l({}),a=l({}),u=l({}),h=l(!0),r=l(!1);let f="",m="";g(()=>{f=i.apiSecret,m=i.apiBase,localStorage.getItem("city")&&(s.value=localStorage.getItem("city"),p())});function p(){const x=`${m}?q=${s.value}&appid=${f}&units=metric`;fetch(x).then(t=>t.json()).then(t=>{_.value=t==null?void 0:t.weather[0],a.value=t.main,u.value=t.sys;const o=Date.now();o>u.value.sunrise*1e3&&o<u.value.sunset*1e3&&(h.value=!1),r.value=!0,localStorage.setItem("city",s.value)}).catch(t=>console.error(t))}return(x,t)=>(c(),d("div",null,[I,e("div",K,[e("div",$,[e("div",j,[e("div",D,[N,v(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o),type:"text",onKeyup:B(p,["enter"])},null,40,H),[[k,s.value]])]),e("div",{class:"flex flex-col text-center w-3/6 px-2"},[e("button",{onClick:p,class:"btn btn-red"}," Check weather ")])]),v(e("div",M,[e("div",null," Weather: "+n(_.value.description),1),e("div",null," Temperature: "+n(a.value.temp),1),e("div",null," Humidity: "+n(a.value.humidity),1),e("div",null," Pressure: "+n(a.value.pressure),1)],512),[[y,r.value===!0]]),v(e("div",T,[h.value?(c(),d("span",V," \u{1F315} ")):(c(),d("span",q," \u{1F31E} "))],512),[[y,r.value===!0]])])])]))}},O={__name:"weather",setup(w){return C({title:"Weather app"}),(i,s)=>(c(),S(W(A)))}};export{O as default};