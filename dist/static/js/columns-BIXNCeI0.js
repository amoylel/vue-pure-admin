import{r as v,a8 as y,K as p,aQ as b,A as T}from"./index-GuFRd4Ob.js";import{b as V}from"./data-wImfhL_u.js";function w(g,f,r){const e=v(V),u=y(e.value),s=v([]),t=p({sexValue:"",searchDate:""}),c=[{value:0,label:"男"},{value:1,label:"女"}],m=[{type:"selection",reserveSelection:!0,align:"left"},{label:"ID",prop:"id",width:50},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"地址",prop:"address"},{label:"日期",prop:"date",minWidth:120}],n=p({pageSize:5,currentPage:1,layout:"prev, pager, next",total:e.value.length,background:!0,small:!0}),d=a=>{const l=[];a.forEach(o=>{l.push({label:o.name,id:o.id})}),s.value=l},h=()=>{if(e.value=u,!b(t.sexValue)){let a=c.map(l=>l.value===Number(t.sexValue)&&l.label).filter(Boolean)[0];e.value=e.value.filter(l=>l.sex===a)}b(t.searchDate)||(e.value=e.value.filter(a=>a.date===t.searchDate)),n.total=e.value.length},S=()=>{f.value.resetFields(),i(),e.value=u,n.total=e.value.length},x=({id:a})=>{var o;const{toggleRowSelection:l}=r.value.getTableRef();l((o=e.value.filter(D=>D.id==a))==null?void 0:o[0],!1)},i=()=>{const{clearSelection:a}=r.value.getTableRef();a()};return{searchForm:t,sexOptions:c,columns:m,pagination:n,selectValue:s,tableData:e,onSure:()=>{g.value.blur(),T(`当前选中的数据为：${JSON.stringify(s.value)}`,{type:"success"})},onClear:i,onReset:S,onSearch:h,removeTag:x,handleSelectionChange:d}}export{w as useColumns};
