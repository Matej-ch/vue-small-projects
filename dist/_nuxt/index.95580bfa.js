import{X as C,Y as E,i as l,N,U as S,J as Q,P as F,L as T,u as A}from"./entry.38e07db5.js";var I;const c=typeof window<"u";c&&((I=window==null?void 0:window.navigator)==null?void 0:I.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function x(e){return typeof e=="function"?e():A(e)}function $(e){return e}function v(e){return C()?(E(e),!0):!1}function W(e,t=!0){Q()?F(e):t?e():T(e)}function j(e,t=1e3,n={}){const{immediate:a=!0,immediateCallback:o=!1}=n;let r=null;const u=l(!1);function i(){r&&(clearInterval(r),r=null)}function s(){u.value=!1,i()}function f(){A(t)<=0||(u.value=!0,o&&e(),i(),r=setInterval(e,x(t)))}if(a&&c&&f(),N(t)){const d=S(t,()=>{u.value&&c&&f()});v(d)}return v(s),{isActive:u,pause:s,resume:f}}const B=c?window:void 0;c&&window.document;const R=c?window.navigator:void 0;c&&window.location;function U(e,t=!1){const n=l(),a=()=>n.value=Boolean(e());return a(),W(a,t),n}const m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="__vueuse_ssr_handlers__";m[O]=m[O]||{};m[O];function q(e,t={}){const{immediate:n=!0,window:a=B}=t,o=l(!1);let r=null;function u(){!o.value||!a||(e(),r=a.requestAnimationFrame(u))}function i(){!o.value&&a&&(o.value=!0,u())}function s(){o.value=!1,r!=null&&a&&(a.cancelAnimationFrame(r),r=null)}return n&&i(),v(s),{isActive:o,pause:s,resume:i}}function Y(e={}){const{enableHighAccuracy:t=!0,maximumAge:n=3e4,timeout:a=27e3,navigator:o=R}=e,r=U(()=>o&&"geolocation"in o),u=l(null),i=l(null),s=l({accuracy:0,latitude:1/0,longitude:1/0,altitude:null,altitudeAccuracy:null,heading:null,speed:null});function f(p){u.value=p.timestamp,s.value=p.coords,i.value=null}let d;function w(){r.value&&(d=o.geolocation.watchPosition(f,p=>i.value=p,{enableHighAccuracy:t,maximumAge:n,timeout:a}))}w();function _(){d&&o&&o.geolocation.clearWatch(d)}return v(()=>{_()}),{isSupported:r,coords:s,locatedAt:u,error:i,resume:w,pause:_}}var D=Object.defineProperty,g=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))G.call(t,n)&&y(e,n,t[n]);if(g)for(var n of g(t))H.call(t,n)&&y(e,n,t[n]);return e};function z(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,a=l(new Date),o=()=>a.value=new Date,r=n==="requestAnimationFrame"?q(o,{immediate:!0}):j(o,n,{immediate:!0});return t?L({now:a},r):a}var P;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(P||(P={}));var M=Object.defineProperty,h=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&b(e,n,t[n]);if(h)for(var n of h(t))k.call(t,n)&&b(e,n,t[n]);return e};const K={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};J({linear:$},K);export{Y as a,z as u};
