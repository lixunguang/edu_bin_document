import{b as c,_ as $}from"./index.f3b0bd2a.js";/* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import{d as A,e as _,aH as U,B as M,C as z,F as b,aI as u,aG as o,aM as i,aW as O,bh as q,be as R,bm as T,b2 as G,b3 as H,b8 as L,a$ as P,b9 as j,ba as J}from"./arco.be854816.js";import{f as K}from"./vue.0bc632a1.js";import"./chart.cc2aed62.js";const Q=m=>(j("data-v-84eacdf5"),m=m(),J(),m),X={class:"container"},Y={class:"list"},Z=Q(()=>b("h3",null,"\u6559\u5E08\u8D26\u53F7\u5217\u8868",-1)),ee=A({__name:"teacher",setup(m){const h=K(),I=l=>{h.push({name:l})},w={pageSize:10},C=[{title:"\u9662\u7CFB",dataIndex:"departId"},{title:"\u59D3\u540D",dataIndex:"stuName"},{title:"\u8D26\u53F7",dataIndex:"stuNum"},{title:"\u5BC6\u7801",dataIndex:"passWord"},{title:"\u7F16\u8F91",slotName:"edit"},{title:"\u5220\u9664",slotName:"delete"}],v=_([{departId:"1",stuName:"\u5B59\u533B\u632F",stuNum:"1",passWord:"admin1"}]),f=async function(){try{const l=await c.post("/admin/teacher/all");v.value=[];const e=l.data;if(e.length)for(let s=0;s<e.length;s+=1)v.value.push({departId:String(e[s].organization_id),stuName:e[s].name,stuNum:e[s].login_id,passWord:e[s].password})}catch(l){throw console.log(l),l}};f();const d=_(!1),N=_(!1),t=_({departId:"",stuName:"",stuNum:"",passWord:""}),g=()=>{d.value=!0,N.value=!0,t.value.departId="",t.value.stuName="",t.value.stuNum="",t.value.passWord=""},B=async function(l,e,s,n){d.value=!0,N.value=!1,t.value.departId=l,t.value.stuName=e,t.value.stuNum=s,t.value.passWord=n},F=async function(){const l={organization_id:Number(t.value.departId),name:t.value.stuName,login_id:t.value.stuNum,password:t.value.passWord};N.value?await c.post("/admin/teacher/add",l):await c.post("/admin/teacher/update",l),f()},V=()=>{d.value=!1},x=async function(l){const e={login_id:String(l)};await c.post("/admin/teacher/del",e),f()};return(l,e)=>{const s=U("Breadcrumb"),n=O,y=q,k=R,W=T,r=G,p=H,D=L,E=P;return M(),z("div",X,[b("div",null,[u(s,{items:["menu.mAccount","menu.mAccount.teacher"]},null,8,["items"])]),b("div",Y,[Z,u(k,null,{default:o(()=>[u(y,{span:2},{default:o(()=>[u(n,{type:"primary",onClick:e[0]||(e[0]=a=>g())},{default:o(()=>[i(" \u65B0\u589E\u6559\u5E08\u8D26\u53F7 ")]),_:1})]),_:1})]),_:1}),u(W,{columns:C,data:v.value,pagination:w},{check:o(({})=>[u(n,{onClick:e[1]||(e[1]=a=>I("NoticePre"))},{default:o(()=>[i("\u9884\u89C8")]),_:1})]),edit:o(({record:a})=>[u(n,{onClick:S=>B(a.departId,a.stuName,a.stuNum,a.passWord)},{default:o(()=>[i("\u4FEE\u6539")]),_:2},1032,["onClick"])]),delete:o(({record:a})=>[u(n,{onClick:S=>l.$modal.info({title:"\u5220\u9664",content:a.stuNum,onOk:()=>x(a.stuNum)})},{default:o(()=>[i("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1},8,["data"])]),u(E,{visible:d.value,"onUpdate:visible":e[6]||(e[6]=a=>d.value=a),width:"auto",onOk:F,onCancel:V},{title:o(()=>[i(" \u65B0\u589E/\u7F16\u8F91\u5B66\u751F\u8D26\u53F7 ")]),default:o(()=>[u(D,{model:t.value,"auto-label-width":""},{default:o(()=>[u(p,{field:"title",label:"\u9662\u7CFB"},{default:o(()=>[u(r,{modelValue:t.value.departId,"onUpdate:modelValue":e[2]||(e[2]=a=>t.value.departId=a),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),u(p,{field:"title",label:"\u59D3\u540D"},{default:o(()=>[u(r,{modelValue:t.value.stuName,"onUpdate:modelValue":e[3]||(e[3]=a=>t.value.stuName=a),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),u(p,{field:"title",label:"\u5B66\u53F7"},{default:o(()=>[u(r,{modelValue:t.value.stuNum,"onUpdate:modelValue":e[4]||(e[4]=a=>t.value.stuNum=a),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),u(p,{field:"title",label:"\u5BC6\u7801"},{default:o(()=>[u(r,{modelValue:t.value.passWord,"onUpdate:modelValue":e[5]||(e[5]=a=>t.value.passWord=a),style:{width:"240px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])}}});const _e=$(ee,[["__scopeId","data-v-84eacdf5"]]);export{_e as default};
