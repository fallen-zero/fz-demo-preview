!function(){function e(e,t,r,n,i,s,o){try{var a=e[s](o),u=a.value}catch(c){return void r(c)}a.done?t(u):Promise.resolve(u).then(n,i)}function t(t){return function(){var r=this,n=arguments;return new Promise((function(i,s){var o=t.apply(r,n);function a(t){e(o,i,s,a,u,"next",t)}function u(t){e(o,i,s,a,u,"throw",t)}a(void 0)}))}}function r(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy-COQ9AuRW.js","./node/pnpm-legacy-Cq3xfKn3.js"],(function(e,n){"use strict";var i,s,o,a,u,c;return{setters:[e=>{i=e.e,s=e.r,o=e.R},e=>{a=e.r,u=e.aK,c=e.aL}],execute:function(){e("u",(function(e,r,{immediate:i=!0,message:s,success:o}={}){let l,f=r;const p=a(),m=a(),h=a(!1);function d(){return g.apply(this,arguments)}function g(){return(g=t((function*(){yield n({api:e,params:f,before(e){l&&l(),h.value=!0,l=e},success:e=>t((function*(){p.value=e,o&&(yield o(e))}))(),error(e){m.value=e},complete(){h.value=!1,l=void 0},message:s})}))).apply(this,arguments)}function y(){return(y=t((function*(e,t=!0){f=e,t&&(yield d())}))).apply(this,arguments)}function v(){return(v=t((function*(e=!0){f=r,e&&(yield d())}))).apply(this,arguments)}i&&(u()?c(t((function*(){yield d()}))):d());return{run:d,data:p,error:m,loading:h,setParams:function(e){return y.apply(this,arguments)},reset:function(){return v.apply(this,arguments)}}}));const n=new class{constructor(e){r(this,"axiosErrorFn",{401:()=>s.push({path:o.LOGIN}),"-402":()=>s.push({path:o.LOGIN}),403:()=>s.push({path:o.LOGIN}),404:()=>s.push({name:"404"}),500:()=>s.push({name:"500"}),501:()=>s.push({name:"network"}),502:()=>s.push({name:"network"}),503:()=>s.push({name:"building"}),504:()=>s.push({name:"network"})}),this.config=e}init(){return this.requestApi.bind(this)}requestApi({api:e,params:r,before:n,success:i,fail:s,error:o,complete:a,message:u=(e=>null===(e=this.config)||void 0===e?void 0:e.message)(),pushMessage:c=(e=>null===(e=this.config)||void 0===e?void 0:e.pushMessage)()}){var l=this;return t((function*(){try{const t=e(...r),o="cancel"in t?t.cancel:void 0;if(n&&(yield n(o)))return void(o&&o());const a=yield t;if(a)return void(i&&i(a));if(!s||!(yield s(a)))throw a}catch(t){if(o&&(yield o(t)))return;l.handlerError(t,u,c)}finally{a&&a()}}))()}handlerError(e,t,r){if(e&&"object"==typeof e){if("code"in e&&"ERR_CANCELED"===e.code)return;let n,i=t;"extra"in e&&e.extra&&"object"==typeof e.extra&&"code"in e.extra&&"number"==typeof e.extra.code&&(n=this.axiosErrorFn[e.extra.code],"message"in e.extra&&"string"==typeof e.extra.message&&e.extra.message&&(i=e.extra.message),"msg"in e&&"string"==typeof e.msg&&e.msg&&(i=e.msg)),i&&r&&r(i),n&&n()}}}({message:"加载失败",pushMessage(e){i.ElMessage.error({message:e,grouping:!0})}}).init()}}}))}();
