import{useColumns as k}from"./columns--bIJ3fWY.js";import{d as x,r as c,b as t,g as y,c as v,w as r,u as e,j as i,i as R,h as V,aG as S}from"./index-3LdIHCm7.js";const w={class:"m-4"},P=x({__name:"index",setup(T){const l=c(),n=c(),{columns:u,pagination:a,selectValue:o,tableDataEdit:p,onClear:m,onSure:d,removeTag:_,handleSelectionChange:f}=k(l,n);return(z,s)=>{const g=t("pure-table"),b=t("el-button"),C=t("el-select");return y(),v(C,{ref_key:"selectRef",ref:l,modelValue:e(o),"onUpdate:modelValue":s[0]||(s[0]=h=>S(o)?o.value=h:null),class:"!w-[200px]",placeholder:"请选择",clearable:"",multiple:"","collapse-tags":"","value-key":"id",onRemoveTag:e(_),onClear:e(m)},{empty:r(()=>[V("div",w,[i(g,{ref_key:"tableRef",ref:n,"row-key":"id",alignWhole:"center","header-cell-style":{background:"#f5f7fa",color:"#303133"},data:e(p).slice((e(a).currentPage-1)*e(a).pageSize,e(a).currentPage*e(a).pageSize),columns:e(u),pagination:e(a),onSelectionChange:e(f)},null,8,["data","columns","pagination","onSelectionChange"]),i(b,{class:"absolute bottom-[17px]",type:"primary",size:"small",text:"",bg:"",onClick:e(d)},{default:r(()=>[R(" 确定 ")]),_:1},8,["onClick"])])]),_:1},8,["modelValue","onRemoveTag","onClear"])}}});export{P as _};