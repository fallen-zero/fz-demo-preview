import{a as _,aU as p,o as f,X as h,ap as e,f as l,e as i,G as d,a2 as r,u as o,az as x,aV as y,ar as k,aW as b}from"./node/pnpm-BbgYg0zY.js";const w=["冒大仙","麻辣烫","烤肉拌饭","黄焖鸡米饭","菲常牛·肥牛捞饭","兰州拉面"],B=["月亮馍","酱香饼","水饺",""],C={class:"size-full bg-#dfe4ea p-5"},V={class:"mt-5 pl-2 font-kt"},g=e("h4",{class:"mb-1 text-18px text-dark fw-bold"}," 中午吃啥: ",-1),v={class:"text-24px text-cyan"},N={class:"my-1 text-18px text-dark fw-bold"},R={class:"text-24px text-#ff6b81"},z=_({name:"demo-utils-random-foods"}),L=_({...z,setup(D){const s=p({lunch:"",meals:""});function n(t,c=""){const a=b(0,t.length-1);return t[a]||c}function u(){const t=n(w);s.lunch=t}function m(){const t=n(B,"今天就不加餐了吧！");s.meals=t}return(t,c)=>{const a=k;return f(),h("main",C,[e("section",null,[l(a,{type:"primary",onClick:u},{default:i(()=>[d(" 中午吃啥 ")]),_:1}),l(a,{type:"primary",plain:"",onClick:m},{default:i(()=>[d(" 加餐 ")]),_:1})]),e("section",V,[g,e("p",v,r(o(s).lunch||"吃啥呢？"),1),x(e("h4",N," 加餐: ",512),[[y,o(s).meals]]),e("p",R,r(o(s).meals),1)])])}}});export{L as default};
