import{h as g,r as l,o as u,b as r,e as s,F as x,H as k,t as i,w as v,f as _,p as y,m as I,c as S,u as B}from"./entry.72a4c47b.js";import{u as C}from"./composables.fb7eb567.js";const D=c=>(y("data-v-899e01a8"),c=c(),I(),c),F=D(()=>s("div",{class:"component-header"},[s("h2",null,"Tic-tac-toe")],-1)),H={class:"px-4 py-5"},$={class:"board grid grid-cols-3 gap-0 mx-auto mb-4"},j=["onClick"],A={class:"text-center mt-4"},E={__name:"TicTacToe",setup(c){const t=l(null),a=l(null),n=l(new Array(9).fill(0)),f=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function h(){n.value=[0,0,0,0,0,0,0,0,0],a.value=null,t.value=null}function d(e){T(e)?(a.value=e,e=null):w()&&(a.value=3,e=null)}function m(e){n.value[e]===0&&(a.value||(t||(t.value=1),t.value===1?(n.value[e]=1,d(t.value),t.value=2):(n.value[e]=2,d(t.value),t.value=1)))}function w(){return n.value.every(e=>e===1||e===2)}function T(e){return f.some(p=>p.every(o=>n.value[o]===e))}return(e,p)=>(u(),r("div",null,[F,s("div",H,[s("div",$,[(u(!0),r(x,null,k(n.value,(o,b)=>(u(),r("div",{class:"h-16 w-16 border flex justify-center items-center font-bold cursor-pointer",onClick:L=>m(b)},i(o===1?"\u274C":o===2?"\u2B55":""),9,j))),256))]),v(s("div",{class:"text-center"},i(t.value===1?"It's \u274C's turn":"It's \u2B55's turn"),513),[[_,t.value&&!a.value]]),v(s("div",{class:"text-center"},i(a.value===1?"\u274C has won":a.value===2?"\u2B55 has won":"It's draw"),513),[[_,a.value]]),v(s("div",A,[s("button",{onClick:h,class:"btn btn-green"},"Play again")],512),[[_,a.value]])])]))}},G=g(E,[["__scopeId","data-v-899e01a8"]]),W={__name:"tictactoe",setup(c){return C({title:"Tic tac toe"}),(t,a)=>(u(),S(B(G)))}};export{W as default};