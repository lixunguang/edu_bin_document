import{I as r,c as d,_ as x}from"./index.d653939b.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                */import{aa as _,d as v,B as y,C as I,aI as t,aH as n,F as s,u as c,E as N,aM as l,aN as C,bm as b,bn as w,bo as B,bl as T}from"./arco.2e067c42.js";import{f as k}from"./vue.845af46b.js";const A={class:"aaa"},M={class:"icon-hover"},S={class:"icon-hover"},V={class:"icon-hover"},$={style:{height:"204px",overflow:"hidden"}},z=["src"],D={style:{display:"flex",alignItems:"center",color:"#1D2129"}},E={components:{IconThumbUp:r,IconShareInternal:d,IconMore:_}},R=v({...E,__name:"index",props:{img:null,title:null,description:null,userName:null,id:null,routeName:null},setup(a){const m=e=>{if(e.length>50)e=`${e.slice(0,50)}...`;else if(e.length<50){const o=50-e.length;for(let i=0;i<o;i+=1)e+="\xA0"}return e},p=k(),u=(e,o)=>{p.push({name:e,params:{id:o}})};return(e,o)=>{const i=b,h=w,f=B,g=T;return y(),I("div",A,[t(g,{style:{width:"100%"}},{actions:n(()=>[s("span",M,[t(c(r))]),s("span",S,[t(c(d))]),s("span",V,[t(c(_))])]),cover:n(()=>[s("div",$,[s("img",{style:N({width:"100%",transform:"translateY(-20px)"}),alt:"dessert",src:a.img,onClick:o[0]||(o[0]=F=>u(a.routeName,a.id))},null,12,z)])]),default:n(()=>[t(f,{title:a.title,description:m(a.description),style:{height:"120px"}},{avatar:n(()=>[s("div",D,[t(i,{size:24,style:{marginRight:"8px"}},{default:n(()=>[l(" A ")]),_:1}),t(h,null,{default:n(()=>[l(C(a.userName),1)]),_:1})])]),_:1},8,["title","description"])]),_:1})])}}});const J=x(R,[["__scopeId","data-v-9d976faf"]]);export{J as C};