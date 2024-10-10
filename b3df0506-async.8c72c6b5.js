(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["b3df0506"],{b3df0506:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return i;}});var l=t("f19d2b93");t("b1098fe5");var n=t("a9d1a279"),d=t("3835a2b7");let o=(0,d.createStyles)(({css:e,token:a})=>{let{antCls:t}=a;return{customTable:e`
      ${t}-table {
        ${t}-table-container {
          ${t}-table-body,
          ${t}-table-content {
            scrollbar-width: thin;
            scrollbar-color: unset;
          }
        }
      }
    `};}),r=[{title:"Name",dataIndex:"name",width:150},{title:"Age",dataIndex:"age",width:150},{title:"Address",dataIndex:"address"}],s=Array.from({length:100}).map((e,a)=>({key:a,name:`Edward King ${a}`,age:32,address:`London, Park Lane no. ${a}`}));var i=()=>{let{styles:e}=o();return(0,l.jsx)(n.Table,{className:e.customTable,columns:r,dataSource:s,pagination:{pageSize:50},scroll:{y:275}});};}}]);