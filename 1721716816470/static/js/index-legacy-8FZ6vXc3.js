!function(){function e(e,t,n,r,i,a,l){try{var o=e[a](l),u=o.value}catch(c){return void n(c)}o.done?t(u):Promise.resolve(u).then(r,i)}function t(t){return function(){var n=this,r=arguments;return new Promise((function(i,a){var l=t.apply(n,r);function o(t){e(l,i,a,o,u,"next",t)}function u(t){e(l,i,a,o,u,"throw",t)}o(void 0)}))}}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./node/pnpm-legacy-hAhZQNdm.js","./index-legacy-C8J4lhHu.js","./index.vue_vue_type_script_setup_true_name_PluginsImage_lang-legacy-CtLHLks7.js","./common-legacy-B1eZndd-.js"],(function(e,n){"use strict";var i,a,l,o,u,c,s,d,f,p,m,v,h,b,g,y,x,_,O,w,j,P,E,k,C,z,S,T,D,I,R,q,A,B,M,G,H,L,N;return{setters:[e=>{i=e.r,a=e.aC,l=e.ay,o=e.a,u=e.o,c=e.c,s=e.e,d=e.f,f=e.u,p=e.X,m=e.H,v=e.a1,h=e.g,b=e.Y,g=e.G,y=e.a2,x=e.ax,_=e.aD,O=e.aE,w=e.aF,j=e.aG,P=e.ap,E=e.aH,k=e.aI,C=e.aJ,z=e.aK,S=e.az,T=e.aL,D=e.aM,I=e.aN,R=e.aO},e=>{q=e.r,A=e._,B=e.a,M=e.e,G=e.R,H=e.b},e=>{L=e._},e=>{N=e.i}],execute:function(){var n=document.createElement("style");function V(){function e(e){return e&&e.parent?a(e.parent)?{title:e.parent}:e.parent:{title:""}}function t(e){return e&&!a(e)?l(e):e}const n=i([]);function r(n,i=!1){return n.reduce(((a,l)=>{var o,u,c,s,d;const f={id:String(l.path),title:null!==(o=null===(u=l.meta.aside)||void 0===u?void 0:u.title)&&void 0!==o?o:"",icon:t(null===(c=l.meta.aside)||void 0===c?void 0:c.icon)};if(null!==(s=l.meta.aside)&&void 0!==s&&s.parent){const o=e(l.meta.aside),u=a.find((e=>e.id===o.title));!u||null!=u&&u.icon||!o.icon||(u.icon=o.icon),u||i||a.push({id:o.title,title:o.title,icon:t(o.icon),children:[f,...r(n.filter((t=>t.name!==l.name&&e(t.meta.aside).title===o.title)),!0)]})}return!l.meta.aside||null!==(d=l.meta.aside)&&void 0!==d&&d.parent&&!i||a.push(f),a}),[])}!function(){const e=q.getRoutes().filter((e=>e.meta.aside));n.value=r(e)}();const o=i([e(q.currentRoute.value.meta.aside).title]),u=i(String(q.currentRoute.value.path));return{menus:n,defaultOpeneds:o,defaultActive:u}}n.textContent=".el-menu[data-v-b9a61ecd]{--el-menu-bg-color: transparent;--el-menu-border-color: transparent;--el-menu-item-height: 50px;--el-menu-sub-item-height: 50px;--el-menu-text-color: white;--el-menu-hover-bg-color: rgba(0, 0, 0, .2)}\n",document.head.appendChild(n);const J=o({name:"ElAside"}),F=o(r(r({},J),{},{setup(e){const{defaultOpeneds:t,defaultActive:n,menus:r}=V();return(e,i)=>{const a=x,l=_,o=O,P=w,E=j;return u(),c(E,null,{default:s((()=>[d(P,{"default-openeds":f(t),"default-active":f(n),router:"","unique-opened":""},{default:s((()=>[(u(!0),p(m,null,v(f(r),(e=>(u(),c(o,{key:e.id,index:e.id},{title:s((()=>[e.icon?(u(),c(a,{key:0},{default:s((()=>[(u(),c(h(e.icon)))])),_:2},1024)):b("",!0),g(" "+y(e.title),1)])),default:s((()=>[(u(!0),p(m,null,v(e.children,(e=>(u(),c(l,{key:e.id,index:e.id},{default:s((()=>[e.icon?(u(),c(a,{key:0},{default:s((()=>[(u(),c(h(e.icon)))])),_:2},1024)):b("",!0),g(" "+y(e.title),1)])),_:2},1032,["index"])))),128))])),_:2},1032,["index"])))),128))])),_:1},8,["default-openeds","default-active"])])),_:1})}}})),K=A(F,[["__scopeId","data-v-b9a61ecd"]]),X={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Y=[P("path",{fill:"currentColor",d:"M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128"},null,-1),P("path",{fill:"currentColor",d:"M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32"},null,-1)];const Q={name:"ep-switch-button",render:function(e,t){return u(),p("svg",X,[...Y])}},U={class:"size-full flex-between"},W={class:"text-3xl font-youshe"},Z={class:"text-2xl"},$={class:"flex-center"},ee={class:"size-50px overflow-hidden border-2 rounded-full bg-#f6f7f8/30"},te={class:"mx-5 text-center text-xl leading-none font-ali"},ne=P("br",null,null,-1),re=o({name:"Header"}),ie=o(r(r({},re),{},{setup(e){const{currDate:n}=E(),r=N("tiger"),i=k(),a=C(t((function*(){"confirm"===(yield M.ElMessageBox.confirm("确定要退出登录吗？","温馨提示",{confirmButtonText:"残忍退出",cancelButtonText:"再想想"}))&&i.push({name:G.LOGIN})})),200);return(e,t)=>{const i=L,l=Q,o=x;return u(),p("header",U,[P("section",W,[P("h1",null,y(f(n).date)+" "+y(f(n).week),1),P("h2",Z,y(f(n).time),1)]),P("section",$,[P("div",ee,[d(i,{src:f(r),class:"size-full"},null,8,["src"])]),P("h1",te,[g(" 欢迎使用 "),ne,g(" "+y(f(B).VITE_PROJECT_TITLE),1)]),d(o,{size:"30",class:"cursor-pointer transition-opacity-200 active:opacity-50",onClick:f(a)},{default:s((()=>[d(l)])),_:1},8,["onClick"])])])}}}));e("default",A({},[["render",function(e,t){const n=ie,r=T,i=K,a=D,l=H,o=I,f=R,p=z("resize-scale");return S((u(),c(f,{class:"size-full bg-#2c3e50 text-white"},{default:s((()=>[d(r,{height:"80px"},{default:s((()=>[d(n)])),_:1}),d(f,{class:"h-[calc(100%-80px)] bg-#34495e"},{default:s((()=>[d(a,{width:"200px"},{default:s((()=>[d(i)])),_:1}),d(o,{class:"bg-#95a5a6"},{default:s((()=>[d(l,{"class-name":"wh-full overflow-hidden"})])),_:1})])),_:1})])),_:1})),[[p]])}]]))}}}))}();
