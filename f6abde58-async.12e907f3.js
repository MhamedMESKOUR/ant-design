(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["f6abde58"],{f6abde58:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return L;}});var o=n("f19d2b93");n("00535210");var a=n("5b220c3d"),r=n("915a4463"),d=n("c0f053f1"),s=n("9944ffaa"),g=n("7f663da5"),x=n("a9d1a279");let i=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],l=e=>{let{attributes:t,listeners:n,setNodeRef:a,transform:r,transition:d,isDragging:x}=(0,s.useSortable)({id:e["data-row-key"]}),i={...e.style,transform:g.CSS.Translate.toString(r),transition:d,cursor:"move",...x?{position:"relative",zIndex:9999}:{}};return(0,o.jsx)("tr",{...e,ref:a,style:i,...t,...n});};var L=()=>{let[e,t]=(0,a.useState)([{key:"1",name:"John Brown",age:32,address:"Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]),n=(0,r.useSensors)((0,r.useSensor)(r.PointerSensor,{activationConstraint:{distance:1}}));return(0,o.jsx)(r.DndContext,{sensors:n,modifiers:[d.restrictToVerticalAxis],onDragEnd:({active:e,over:n})=>{e.id!==(null==n?void 0:n.id)&&t(t=>{let o=t.findIndex(t=>t.key===e.id),a=t.findIndex(e=>e.key===(null==n?void 0:n.id));return(0,s.arrayMove)(t,o,a);});},children:(0,o.jsx)(s.SortableContext,{items:e.map(e=>e.key),strategy:s.verticalListSortingStrategy,children:(0,o.jsx)(x.Table,{components:{body:{row:l}},rowKey:"key",columns:i,dataSource:e})})});};}}]);