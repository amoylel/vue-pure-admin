import{d as h,C as k,h as a,u as s,r as p,g as V,ar as A,F as H,ai as L,a as U,c as W,w as o,o as X,e as r,q as Y,s as E,_ as G}from"./index-591b3534.js";const R=h({name:"Resizer",props:{split:{type:String,required:!0},className:{type:String,default:""}},setup(e){const i=k(()=>["splitter-pane-resizer",e.split,e.className].join(" "));return()=>a("div",{class:s(i)},null)}});const T=h({name:"SplitPane",components:{resizer:R},props:{splitSet:{type:Object,require:!0}},emits:["resize"],setup(e,i){var m,S,g,w,P;const l=p(!1),d=p(!1),n=p((m=e.splitSet)==null?void 0:m.defaultPercent),u=((S=e.splitSet)==null?void 0:S.split)==="vertical"?"width":"height",B=((g=e.splitSet)==null?void 0:g.split)==="vertical"?"left":"top",I=p(["splitter-pane splitter-paneL",(w=e.splitSet)==null?void 0:w.split]),N=p(["splitter-pane splitter-paneR",(P=e.splitSet)==null?void 0:P.split]),$=k(()=>{var t;return l.value?((t=e.splitSet)==null?void 0:t.split)==="vertical"?{cursor:"col-resize"}:{cursor:"row-resize"}:{cursor:"default"}}),b=()=>{d.value||(n.value=50,i.emit("resize",n.value))},q=()=>{l.value=!0,d.value=!1},j=()=>{l.value=!1},D=t=>{var y,z,C,M,x;if((t.buttons===0||t.which===0)&&(l.value=!1),l.value){let f=0,c=t.currentTarget;if(((y=e.splitSet)==null?void 0:y.split)==="vertical")for(;c;)f+=c.offsetLeft,c=c.offsetParent;else for(;c;)f+=c.offsetTop,c=c.offsetParent;const F=((z=e.splitSet)==null?void 0:z.split)==="vertical"?t.pageX:t.pageY,O=((C=e.splitSet)==null?void 0:C.split)==="vertical"?t.currentTarget.offsetWidth:t.currentTarget.offsetHeight,_=Math.floor((F-f)/O*1e4)/100;_>((M=e.splitSet)==null?void 0:M.minPercent)&&_<100-((x=e.splitSet)==null?void 0:x.minPercent)&&(n.value=_),i.emit("resize",n.value),d.value=!0}};return()=>{var t;return a(H,null,[a("div",{class:"vue-splitter-container clearfix",style:s($),onMouseup:()=>j(),onMousemove:()=>D(event)},[a("div",{class:s(I),style:{[s(u)]:s(n)+"%"}},[i.slots.paneL()]),a(R,{style:`${s([B])}:${s(n)}%`,split:(t=e.splitSet)==null?void 0:t.split,onMousedown:()=>q(),onClick:()=>b()},null),a("div",{class:s(N),style:{[s(u)]:100-s(n)+"%"}},[i.slots.paneR()]),V(a("div",{class:"vue-splitter-container-mask"},null),[[A,s(l)]])])])}}}),v=e=>(Y("data-v-62ddaddc"),e=e(),E(),e),J=v(()=>r("div",{class:"card-header"},[r("span",{class:"font-medium"},"切割面板组件")],-1)),K={class:"split-pane"},Q=v(()=>r("div",{class:"dv-a"},"A",-1)),Z=v(()=>r("div",{class:"dv-b"},"B",-1)),ee=v(()=>r("div",{class:"dv-c"},"C",-1)),te=h({name:"SplitPane",__name:"index",setup(e){const i=L({minPercent:20,defaultPercent:40,split:"vertical"}),l=L({minPercent:20,defaultPercent:40,split:"horizontal"});return(d,n)=>{const u=U("el-card");return X(),W(u,{shadow:"never"},{header:o(()=>[J]),default:o(()=>[r("div",K,[a(s(T),{splitSet:i},{paneL:o(()=>[Q]),paneR:o(()=>[a(s(T),{splitSet:l},{paneL:o(()=>[Z]),paneR:o(()=>[ee]),_:1},8,["splitSet"])]),_:1},8,["splitSet"])])]),_:1})}}});const ae=G(te,[["__scopeId","data-v-62ddaddc"]]);export{ae as default};