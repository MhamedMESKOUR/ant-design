(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["c3a33fb1"],{c3a33fb1:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return u;}});var o=t("f19d2b93");t("ad30e2b3");var n=t("5b220c3d"),l=t("a9d1a279");let d=[{label:"topLeft",value:"topLeft"},{label:"topCenter",value:"topCenter"},{label:"topRight",value:"topRight"},{label:"none",value:"none"}],r=[{label:"bottomLeft",value:"bottomLeft"},{label:"bottomCenter",value:"bottomCenter"},{label:"bottomRight",value:"bottomRight"},{label:"none",value:"none"}],s=[{title:"Name",dataIndex:"name",key:"name",render:e=>(0,o.jsx)("a",{children:e})},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:e=>(0,o.jsx)("span",{children:e.map(e=>{let a=e.length>5?"geekblue":"green";return"loser"===e&&(a="volcano"),(0,o.jsx)(l.Tag,{color:a,children:e.toUpperCase()},e);})})},{title:"Action",key:"action",render:(e,a)=>(0,o.jsxs)(l.Space,{size:"middle",children:[(0,o.jsxs)("a",{children:["Invite ",a.name]}),(0,o.jsx)("a",{children:"Delete"})]})}],i=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park",tags:["cool","teacher"]}];var u=()=>{let[e,a]=(0,n.useState)("topLeft"),[t,u]=(0,n.useState)("bottomRight");return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:(0,o.jsx)(l.Radio.Group,{style:{marginBottom:10},options:d,value:e,onChange:e=>{a(e.target.value);}})}),(0,o.jsx)(l.Radio.Group,{style:{marginBottom:10},options:r,value:t,onChange:e=>{u(e.target.value);}}),(0,o.jsx)(l.Table,{columns:s,pagination:{position:[e,t]},dataSource:i})]});};}}]);