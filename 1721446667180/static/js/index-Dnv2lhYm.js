import{aP as Z,aQ as I,aa as X,a as L,W as C,a9 as E,r as D,aJ as ee,w as O,B as q,o as _,X as m,ap as n,H as M,a1 as N,u as i,ao as te,aR as le,az as H,f as w,e as z,ac as A,a2 as $,G as J,$ as se,ar as ae,aS as Q,aT as ne,aB as oe}from"./node/pnpm-BbgYg0zY.js";import{_ as re}from"./index-M-NGE-p9.js";import{u as ie}from"./random-C5ItUyhN.js";import{u as ue}from"./useRequestApi-wjjwHMF5.js";function ce(S,k){const o=new WeakMap;let u=null;function d(t){if(!t)return;(Array.isArray(t)?t:[t]).forEach(l=>{!l.value||!u||o.has(l.value)||(o.set(l.value,!0),u.observe(l.value))})}function g(t){if(!t)return;(Array.isArray(t)?t:[t]).forEach(l=>{!l.value||!u||!o.has(l.value)||(o.delete(l.value),u.unobserve(l.value))})}return Z()&&(I(()=>{u=new ResizeObserver(k),d(S)}),X(()=>{u&&(g(S),u.disconnect(),u=null)})),{observe:d,unobserve:g}}const fe=L({name:"PluginsScroll"}),ve=L({...fe,props:{list:{},modelValue:{type:Boolean,default:!0},waitTime:{default:0},speed:{default:800},hover:{type:Boolean,default:!0},wheel:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(S,{emit:k}){const o=S,u=k,d=C({get(){return o.modelValue},set(e){u("update:modelValue",e)}}),g=E(),t=E(),c=E([]),l=D(1),a=D(0),b=C(()=>Array.from({length:l.value},()=>o.list));function B(){var f,v;const e=[];for(const p of Array.from((v=(f=c.value)==null?void 0:f[0].children)!=null?v:[]))e.push(p.clientHeight);return e.reduce((p,P)=>{var V;return p.push(le([(V=p.at(-1))!=null?V:0,P])),p},[0])}function h(e){if(t.value){if(typeof e=="number"||typeof e>"u"){t.value.style.transition="transform ".concat(e!=null?e:o.speed,"ms linear");return}t.value.style.transition=e}}let R=null,y=[];function T(){R&&(clearTimeout(R),R=null)}function x(){T(),a.value>y.length-2&&t.value&&(h(0),a.value=0,t.value.style.transform="translateY(0px)"),R=setTimeout(()=>{h(),t.value&&(a.value++,t.value.style.transform="translateY(-".concat(y[a.value]||0,"px)"))},o.waitTime)}function s(){var e;!d.value||l.value===1||(y=B(),x(),(e=t.value)==null||e.addEventListener("transitionend",x,!0))}function r(){s()}function G(){T(),h(0),t.value&&t.value.removeEventListener("transitionend",x,!0)}let W;(e=>{e[e.UP=-1]="UP",e[e.DOWN=1]="DOWN"})(W||(W={}));function Y(e){t.value&&(a.value+=e,e===-1&&a.value<0&&(a.value=y.length-2),e===1&&a.value>y.length-2&&(a.value=0),t.value.style.transform="translateY(".concat(-1*y[a.value]||0,"px)"))}function j(e){!o.hover||!o.wheel||l.value===1||(e.deltaY>0?Y(1):Y(-1))}function F(){a.value=0,G(),t.value&&(t.value.style.transform="translateY(0px)")}const U=ee(()=>{var v,p;const e=g.value,f=t.value;if(!e||!f)return-1;l.value=((p=(v=c.value[0])==null?void 0:v.clientHeight)!=null?p:0)-e.clientHeight<0?1:2,q(()=>{d.value&&l.value>1&&r(),l.value===1&&F()})},200);function K(e){e.forEach(()=>{U()})}return O(()=>o.list,()=>{l.value=1,F(),q(()=>{U()})}),O(d,e=>{if(e){r();return}G()}),ce([g],K),X(()=>{G()}),(e,f)=>(_(),m("main",{ref_key:"rootRef",ref:g,class:"fz-scroll"},[n("section",{ref_key:"wrapperRef",ref:t,class:"fz-scroll-list",onWheel:f[0]||(f[0]=v=>e.wheel&&e.hover&&j(v)),onMouseover:f[1]||(f[1]=v=>e.hover&&G()),onMouseleave:f[2]||(f[2]=v=>e.hover&&r())},[(_(!0),m(M,null,N(i(b),(v,p)=>(_(),m("ul",{ref_for:!0,ref_key:"listRef",ref:c,key:p,class:"fz-scroll-list"},[(_(!0),m(M,null,N(v,(P,V)=>(_(),m("li",{key:V,class:"fz-scroll-list"},[te(e.$slots,"item",{data:P,index:V},void 0,!0)]))),128))]))),128))],544)],512))}}),de=re(ve,[["__scopeId","data-v-55d68abb"]]),pe={class:"grid grid-cols-4 grid-rows-2 gap-4 wh-full"},_e={class:"size-full flex flex-col"},me={class:"relative w-full flex-1 bg-#9980FA"},he={"un-overflow-hidden":"","un-abs-0":""},ge={class:"size-full bg-blueGray"},be={class:"flex flex-col bg-blueGray"},ye={class:"mb-20px"},we={class:"relative flex-1"},xe={class:"abs-0"},ze={class:"size-full bg-blueGray"},$e={class:"size-full bg-blueGray"},ke={class:"size-full bg-blueGray"},Re=n("li",{class:"size-full bg-blueGray"},null,-1),Se=n("li",{class:"size-full bg-blueGray"},null,-1),Be=L({name:"demo-list-scroll"}),De=L({...Be,setup(S){const k=[5,10,20,30,40],o=D(0);function u(a=10){return new Promise(b=>{setTimeout(()=>{o.value=a,b(Array.from({length:a},(B,h)=>({id:h+1,str:ie()})))},1e3)})}const{loading:d,setParams:g,data:t}=ue(u,[k[0]]),c=C(()=>{var a;return(a=t.value)!=null?a:[]}),l=D(!1);return(a,b)=>{const B=ae,h=de,R=Q,y=Q,T=ne,x=oe;return _(),m("ul",pe,[n("li",_e,[n("h1",null,[(_(),m(M,null,N(k,s=>w(B,{key:s,type:i(o)===s?"primary":"",onClick:r=>i(g)([s])},{default:z(()=>[J($(s),1)]),_:2},1032,["type","onClick"])),64))]),H((_(),m("section",me,[n("div",he,[w(h,{list:i(c)},{item:z(({data:s,index:r})=>[n("div",{class:"mb-10px bg-#fab1a0",style:A({height:"".concat(r*3+20,"px")})},$(s),5)]),_:1},8,["list"])])])),[[x,i(d)]])]),H((_(),m("li",ge,[w(h,{list:i(c),"wait-time":1e3},{item:z(({data:s,index:r})=>[n("div",{class:"mb-10px bg-#fab1a0",style:A({height:"".concat(r*3+20,"px")})},$(s),5)]),_:1},8,["list"])])),[[x,i(d)]]),n("li",be,[n("h1",ye,[w(B,{type:"success",onClick:b[0]||(b[0]=s=>l.value=!i(l))},{default:z(()=>[J($(i(l)?"暂停":"开始"),1)]),_:1})]),H((_(),m("section",we,[n("div",xe,[w(h,{modelValue:i(l),"onUpdate:modelValue":b[1]||(b[1]=s=>se(l)?l.value=s:null),list:i(c),"wait-time":1e3},{item:z(({data:s,index:r})=>[n("div",{class:"mb-10px bg-#fab1a0",style:A({height:"".concat(r*3+20,"px")})},$(s),5)]),_:1},8,["modelValue","list"])])])),[[x,i(d)]])]),n("li",ze,[w(R,{list:i(c),"wait-time":1e3},{item:z(({data:s,index:r})=>[n("div",{class:"mb-10px bg-#fab1a0",style:A({height:"".concat(r*3+20,"px")})},$(s),5)]),_:1},8,["list"])]),n("li",$e,[w(y,{list:i(c),"wait-time":1e3},{item:z(({data:s,index:r})=>[n("div",{class:"mb-10px bg-#fab1a0",style:A({height:"".concat(r*3+20,"px")})},$(s),5)]),_:1},8,["list"])]),n("li",ke,[w(T)]),Re,Se])}}});export{De as default};
