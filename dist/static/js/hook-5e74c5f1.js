import{ai as g,r as l,j as T,h as W,a as x,by as j,bB as B,m as o,a_ as H,a2 as L,M as P}from"./index-591b3534.js";import{_ as Y}from"./form.vue_vue_type_script_setup_true_lang-7d05ea66.js";import{a as _}from"./system-e5b167f0.js";import{u as F}from"./hooks-66d0e5fc.js";function N(){const u=g({name:"",code:"",status:""}),c=l(),m=l([]),i=l(!0),t=l({}),{switchStyle:f}=F(),s=g({total:0,pageSize:10,currentPage:1,background:!0}),p=[{label:"角色编号",prop:"id",minWidth:100},{label:"角色名称",prop:"name",minWidth:120},{label:"角色标识",prop:"code",minWidth:150},{label:"状态",minWidth:130,cellRenderer:e=>{var a;return W(x("el-switch"),{size:e.props.size==="small"?"small":"default",loading:(a=t.value[e.index])==null?void 0:a.loading,modelValue:e.row.status,"onUpdate:modelValue":r=>e.row.status=r,"active-value":1,"inactive-value":0,"active-text":"已启用","inactive-text":"已停用","inline-prompt":!0,style:f.value,onChange:()=>h(e)},null)}},{label:"备注",prop:"remark",minWidth:150},{label:"创建时间",minWidth:180,prop:"createTime",formatter:({createTime:e})=>j(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:240,slot:"operation"}];function h({row:e,index:a}){B.confirm(`确认要<strong>${e.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${e.name}</strong>吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{t.value[a]=Object.assign({},t.value[a],{loading:!0}),setTimeout(()=>{t.value[a]=Object.assign({},t.value[a],{loading:!1}),o(`已${e.status===0?"停用":"启用"}${e.name}`,{type:"success"})},300)}).catch(()=>{e.status===0?e.status=1:e.status=0})}function v(e){o(`您删除了角色名称为${e.name}的这条数据`,{type:"success"}),n()}function b(e){}function y(e){}function M(e){}async function n(){i.value=!0;const{data:e}=await _(H(u));m.value=e.list,s.total=e.total,s.pageSize=e.pageSize,s.currentPage=e.currentPage,setTimeout(()=>{i.value=!1},500)}const S=e=>{e&&(e.resetFields(),n())};function C(e="新增",a){L({title:`${e}角色`,props:{formInline:{name:(a==null?void 0:a.name)??"",code:(a==null?void 0:a.code)??"",remark:(a==null?void 0:a.remark)??""}},width:"40%",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>P(Y,{ref:c}),beforeSure:(r,{options:$})=>{const k=c.value.getRef(),z=$.props.formInline;function d(){o(`您${e}了角色名称为${z.name}的这条数据`,{type:"success"}),r(),n()}k.validate(D=>{D&&d()})}})}function R(){o("等菜单管理页面开发后完善")}return T(()=>{n()}),{form:u,loading:i,columns:p,dataList:m,pagination:s,onSearch:n,resetForm:S,openDialog:C,handleMenu:R,handleDelete:v,handleSizeChange:b,handleCurrentChange:y,handleSelectionChange:M}}export{N as useRole};