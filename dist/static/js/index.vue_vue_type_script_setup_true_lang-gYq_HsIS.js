import{useColumns as m}from"./columns-tHHbEH3e.js";import{d as _,r as f,b as n,e as w,c as g,w as k,f as y,i as C,u as e,aC as b}from"./index-GMGmYiZc.js";const R={class:"m-4"},B=_({__name:"index",setup(V){const l=f(),{columns:s,pagination:o,selectValue:a,tableDataEdit:c,rowStyle:r,onRowClick:i}=m(l);return(x,t)=>{const u=n("pure-table"),p=n("el-select");return w(),g(p,{ref_key:"selectRef",ref:l,modelValue:e(a),"onUpdate:modelValue":t[0]||(t[0]=d=>b(a)?a.value=d:null),class:"!w-[200px]",placeholder:"请选择","value-key":"id",clearable:""},{empty:k(()=>[y("div",R,[C(u,{"row-key":"id",alignWhole:"center","header-cell-style":{background:"#f5f7fa",color:"#303133"},"row-style":e(r),data:e(c).slice((e(o).currentPage-1)*e(o).pageSize,e(o).currentPage*e(o).pageSize),columns:e(s),pagination:e(o),onRowClick:e(i)},null,8,["row-style","data","columns","pagination","onRowClick"])])]),_:1},8,["modelValue"])}}});export{B as _};