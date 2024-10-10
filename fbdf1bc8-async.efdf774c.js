(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["fbdf1bc8"],{fbdf1bc8:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return s;}});var d=a("f19d2b93");a("d881d2f9");var n=a("a9d1a279"),l=a("3835a2b7");let r=(0,l.createStyles)(({css:e,token:t})=>{let{antCls:a}=t;return{customTable:e`
      ${a}-table {
        ${a}-table-container {
          ${a}-table-body,
          ${a}-table-content {
            scrollbar-width: thin;
            scrollbar-color: unset;
          }
        }
      }
    `};}),i=[{title:"Name",dataIndex:"name",key:"name",width:100,fixed:"left",filters:[{text:"Joe",value:"Joe"},{text:"John",value:"John"}],onFilter:(e,t)=>0===t.name.indexOf(e)},{title:"Other",children:[{title:"Age",dataIndex:"age",key:"age",width:150,sorter:(e,t)=>e.age-t.age},{title:"Address",children:[{title:"Street",dataIndex:"street",key:"street",width:150},{title:"Block",children:[{title:"Building",dataIndex:"building",key:"building",width:100},{title:"Door No.",dataIndex:"number",key:"number",width:100}]}]}]},{title:"Company",children:[{title:"Company Address",dataIndex:"companyAddress",key:"companyAddress",width:200},{title:"Company Name",dataIndex:"companyName",key:"companyName"}]},{title:"Gender",dataIndex:"gender",key:"gender",width:80,fixed:"right"}],o=Array.from({length:100}).map((e,t)=>({key:t,name:"John Brown",age:t+1,street:"Lake Park",building:"C",number:2035,companyAddress:"Lake Street 42",companyName:"SoftLake Co",gender:"M"}));var s=()=>{let{styles:e}=r();return(0,d.jsx)(n.Table,{className:e.customTable,columns:i,dataSource:o,bordered:!0,size:"middle",scroll:{x:"calc(700px + 50%)",y:235}});};}}]);