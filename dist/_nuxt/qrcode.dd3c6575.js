import{r as l,o as c,b as _,e,w as i,j as v,v as f,Z as x,f as m,a0 as h,c as b,u as q}from"./entry.72a4c47b.js";import{u as w}from"./composables.fb7eb567.js";const y=e("div",{class:"component-header"},[e("h2",null,"QR code generator")],-1),g={class:"px-4 py-5"},k={class:"flex flex-col text-white"},S={class:"mb-5 flex flex-row items-center"},j={class:"flex flex-col text-center w-3/6 px-2"},Q=e("label",{class:"mb-1"},"Size",-1),C=h('<option value="100">100x100</option><option value="200">200x200</option><option value="300">300x300</option><option value="400">400x400</option><option value="500">500x500</option><option value="600">600x600</option><option value="700">700x700</option>',7),M=[C],B={class:"flex flex-col px-2 w-3/6"},I=e("label",{class:"mb-1"},"Url",-1),L=["onKeyup"],N={class:"flex items-center justify-between mb-5"},R={class:"flex items-center justify-between mb-5"},T={__name:"QrCode",setup(d){const t=l(""),o=l(200),s=l(""),a=l(null);function u(){a.value.innerHTML="",s.value=new QRCode("qrcode",{text:t.value,width:o.value,height:o.value,colorDark:"#000000",colorLight:"#ffffff"})}function p(){s.value&&(s.value=null,a.value.innerHTML="")}return(H,n)=>(c(),_("div",null,[y,e("div",g,[e("div",k,[e("div",S,[e("div",j,[Q,i(e("select",{"onUpdate:modelValue":n[0]||(n[0]=r=>o.value=r)},M,512),[[v,o.value]])]),e("div",B,[I,i(e("input",{"onUpdate:modelValue":n[1]||(n[1]=r=>t.value=r),type:"text",placeholder:"Insert url for qr generation",onKeyup:x(u,["enter"])},null,40,L),[[f,t.value]])])]),e("div",N,[e("div",{id:"qrcode",ref_key:"qrImage",ref:a},null,512)]),i(e("div",R,[e("div",null,[e("button",{class:"btn btn-red",onClick:p},"Clear qr code")])],512),[[m,s.value]])])])]))}},A={__name:"qrcode",setup(d){return w({title:"QR code generator",script:[{src:"https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",integrity:"sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}]}),(t,o)=>(c(),b(q(T)))}};export{A as default};
