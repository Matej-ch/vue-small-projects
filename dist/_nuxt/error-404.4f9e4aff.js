import{a,o as n,b as r,e,t as s,l,w as d,f as c,a2 as p,s as f,x as m}from"./entry.6d7d4e22.js";import{u as x}from"./composables.9f38f497.js";const h=t=>(f("data-v-30d2164e"),t=t(),m(),t),u={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},g=h(()=>e("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),_={class:"max-w-520px text-center z-20"},b=["textContent"],w=["textContent"],y={class:"w-full flex items-center justify-center"},S={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const o=t;return x({title:`${o.statusCode} - ${o.statusMessage} | ${o.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(k,v)=>{const i=p;return n(),r("div",u,[g,e("div",_,[e("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:s(t.statusCode)},null,8,b),e("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:s(t.description)},null,8,w),e("div",y,[l(i,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:d(()=>[c(s(t.backHome),1)]),_:1})])])])}}},C=a(S,[["__scopeId","data-v-30d2164e"]]);export{C as default};