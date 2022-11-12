import{o as e,a as t,b as n,h as T,r as b,i as w,O as z,u as d,N as j,F as g,A as D,L as a,l as f,c as C,K as h,t as u,B as A,p as M,m as x,f as V,w as I,v as J}from"./entry-2c87ec4d.mjs";const K={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},L=n("path",{fill:"currentColor",d:"m7 10l5 5l5-5z"},null,-1),R=[L];function F(i,r){return e(),t("svg",K,R)}var S={name:"ic-baseline-arrow-drop-down",render:F};const E={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Y=n("path",{fill:"currentColor",d:"m10 17l5-5l-5-5v10z"},null,-1),G=[Y];function H(i,r){return e(),t("svg",E,G)}var B={name:"ic-baseline-arrow-right",render:H};const v=i=>(M("data-v-236ed356"),i=i(),x(),i),P={class:"json-tree"},U={key:0},q={key:0},Q={key:0},W=v(()=>n("span",null,"null",-1)),X=[W],Z={key:1,class:"relative"},ee={class:"flex items-center"},te=["onClick"],se=["onClick"],oe={key:2},ne={key:3},re=v(()=>n("span",{class:"absolute left-16 top-0.5"},"...",-1)),ae={key:2},ie={key:0},le={key:1},ce=A(" ] "),de={key:1},_e={key:0},ue={key:0},pe={class:"json-tree-key"},he=v(()=>n("span",null,": null",-1)),ye={key:0},fe={key:1,class:"relative"},me={class:"json-tree-key"},ke=["onClick"],ve=["onClick"],$e={key:2},je={key:3},be=v(()=>n("span",{class:"absolute left-24 top-0.5"},"...",-1)),we={key:2},ge={class:"json-tree-key"},De={key:0},Ce={key:1},Se=A(" } "),Be={__name:"TreeStructure",props:{jsonData:[Object,Array],root:{type:Boolean,default:!0},filterKey:{type:String,default:""}},setup(i){const r=i,l=b([]),m=b(Object.keys(r.jsonData).length);for(let s=0,y=m.value;s<y;s++)l.value.push(!0);const p=w(()=>{const s=r.filterKey&&r.filterKey.toLowerCase();if(s){let y={};return Object.keys(r.jsonData).forEach(o=>{(o.toLowerCase().includes(s)||JSON.stringify(r.jsonData[o]).includes(s))&&(y[o]=r.jsonData[o])}),y}else return r.jsonData}),N=w(()=>Object.keys(p).length-1);function k(s){l.value[s]=!l.value[s],l.value.splice(s,1,l.value[s])}return(s,y)=>{const $=z("TreeStructure",!0);return e(),t("div",P,[d(p).constructor===Array?(e(),t("div",U,[i.root?(e(),t("span",q," [ ")):j("",!0),(e(!0),t(g,null,D(d(p),(o,c)=>(e(),t("div",{class:"root_elem",key:c},[o==null?(e(),t("div",Q,X)):typeof o=="object"?(e(),t("div",Z,[n("span",ee,[l.value[c]?(e(),t("span",{key:0,onClick:_=>k(c),class:"cursor-pointer"},[a(s.$slots,"hide",{},()=>[f(d(S),{style:{"font-size":"2em"}})],!0)],8,te)):(e(),t("span",{key:1,onClick:_=>k(c),class:"cursor-pointer"},[a(s.$slots,"expand",{},()=>[f(d(B),{style:{"font-size":"2em"}})],!0)],8,se)),o.constructor===Array?(e(),t("span",oe," [ ")):(e(),t("span",ne," { "))]),l.value[c]?(e(),C($,{key:0,jsonData:o,root:!1},{expand:h(()=>[a(s.$slots,"expand",{},void 0,!0)]),hide:h(()=>[a(s.$slots,"hide",{},void 0,!0)]),more:h(()=>[a(s.$slots,"more",{},void 0,!0)]),_:2},1032,["jsonData"])):a(s.$slots,"more",{key:1},()=>[re],!0)])):(e(),t("div",ae,[typeof o=="string"?(e(),t("span",ie,' "'+u(o)+'" ',1)):(e(),t("span",le,u(o),1))]))]))),128)),ce])):(e(),t("div",de,[i.root?(e(),t("span",_e," { ")):j("",!0),(e(!0),t(g,null,D(d(p),(o,c,_)=>(e(),t("div",{class:"root_elem",key:c},[o==null||o==null?(e(),t("div",ue,[n("span",pe,u(c),1),he,_!==d(N)?(e(),t("span",ye,",")):j("",!0)])):typeof o=="object"?(e(),t("div",fe,[n("span",me,u(c),1),l.value[_]?(e(),t("span",{key:0,onClick:O=>k(_),class:"cursor-pointer inline-block align-middle"},[a(s.$slots,"hide",{},()=>[f(d(S),{style:{"font-size":"2em"}})],!0)],8,ke)):(e(),t("span",{key:1,onClick:O=>k(_),class:"cursor-pointer inline-block align-middle"},[a(s.$slots,"expand",{},()=>[f(d(B),{style:{"font-size":"2em"}})],!0)],8,ve)),o.constructor===Array?(e(),t("span",$e," [ ")):(e(),t("span",je," { ")),l.value[_]?(e(),C($,{key:4,jsonData:o,root:!1},{expand:h(()=>[a(s.$slots,"expand",{},void 0,!0)]),hide:h(()=>[a(s.$slots,"hide",{},void 0,!0)]),more:h(()=>[a(s.$slots,"more",{},void 0,!0)]),_:2},1032,["jsonData"])):a(s.$slots,"more",{key:5},()=>[be],!0)])):(e(),t("div",we,[n("span",ge,u(c),1),typeof o=="string"?(e(),t("span",De,' "'+u(o)+'" ',1)):(e(),t("span",Ce,u(o),1))]))]))),128)),Se]))])}}};var Ae=T(Be,[["__scopeId","data-v-236ed356"]]);const Ne=n("div",{class:"component-header"},[n("h2",null,"Tree structure from json")],-1),Oe={class:"px-4 py-2"},Te={class:"flex items-center justify-between mb-3 w-full flex-col"},ze={class:"flex items-center justify-between mb-3 w-full flex-col"},Me=n("label",{class:"mb-1 font-bold text-white"},"Json to convert",-1),xe={class:"px-4 bg-blue-400 py-2"},Ie={__name:"jsontree",setup(i){const r=b(`{"id":"0001","type":"donut","name":"Cake","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"},{"id":"1003","type":"Blueberry"},{"id":"1004","type":"Devil's Food"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},{"id":"5007","type":"Powdered Sugar"},{"id":"5006","type":"Chocolate with Sprinkles"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]}`);return V({title:"Tree structure"}),(l,m)=>(e(),t("div",null,[Ne,n("div",Oe,[n("div",Te,[n("div",ze,[Me,I(n("textarea",{"onUpdate:modelValue":m[0]||(m[0]=p=>r.value=p),cols:"30",rows:"10",placeholder:"Json to convert"},null,512),[[J,r.value]])])])]),n("div",xe,[f(d(Ae),{jsonData:JSON.parse(r.value)},null,8,["jsonData"])])]))}};export{Ie as default};