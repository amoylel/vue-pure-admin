import{d as l,aS as p,c as r,g as u,f as d,u as m,ax as c}from"./index.js";const x=l({__name:"formPrimitive",props:{data:{default:()=>""}},emits:["update:data"],setup(o,{emit:t}){const e=p(o,"data",t);return(f,a)=>{const s=r("el-input");return u(),d(s,{class:"!w-[220px]",modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=n=>c(e)?e.value=n:null),placeholder:"请输入内容"},null,8,["modelValue"])}}});export{x as _};