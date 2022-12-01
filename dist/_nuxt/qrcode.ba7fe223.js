import{_ as f}from"./ComponentContainer.f579fdde.js";import{i as a,o as u,b as m,e,j as c,p as v,v as x,V as h,k as b,F as g,a0 as q,c as w,w as i,f as y,l as k,u as C}from"./entry.fe5dfb17.js";import{u as S}from"./composables.4ec0e794.js";const j={class:"mb-5 flex flex-row items-center"},N={class:"flex flex-col text-center w-3/6 px-2"},Q=e("label",{class:"mb-1"},"Size",-1),V=q('<option value="100">100x100</option><option value="200">200x200</option><option value="300">300x300</option><option value="400">400x400</option><option value="500">500x500</option><option value="600">600x600</option><option value="700">700x700</option>',7),M=[V],T={class:"flex flex-col px-2 w-3/6"},B=e("label",{class:"mb-1"},"Url",-1),I=["onKeyup"],L={class:"flex items-center justify-between mb-5"},R={class:"flex items-center justify-between mb-5"},F={__name:"QrCode",setup(d){const n=a(""),t=a(200),o=a(""),l=a(null);function p(){l.value.innerHTML="",o.value=new QRCode("qrcode",{text:n.value,width:t.value,height:t.value,colorDark:"#000000",colorLight:"#ffffff"})}function _(){o.value&&(o.value=null,l.value.innerHTML="")}return(H,s)=>(u(),m(g,null,[e("div",j,[e("div",N,[Q,c(e("select",{"onUpdate:modelValue":s[0]||(s[0]=r=>t.value=r)},M,512),[[v,t.value]])]),e("div",T,[B,c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=r=>n.value=r),type:"text",placeholder:"Insert url for qr generation",onKeyup:h(p,["enter"])},null,40,I),[[x,n.value]])])]),e("div",L,[e("div",{id:"qrcode",ref_key:"qrImage",ref:l},null,512)]),c(e("div",R,[e("div",null,[e("button",{class:"btn btn-red",onClick:_},"Clear qr code")])],512),[[b,o.value]])],64))}},G={__name:"qrcode",setup(d){return S({title:"QR code generator",script:[{src:"https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",integrity:"sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}]}),(n,t)=>{const o=f;return u(),w(o,null,{header:i(()=>[y(" QR code generator ")]),body:i(()=>[k(C(F))]),_:1})}}};export{G as default};
