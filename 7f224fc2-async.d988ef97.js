(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["7f224fc2"],{"7f224fc2":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return i;}});var a=l("f19d2b93");l("19bcfe66");var d=l("e22febe0"),n=l("a9d1a279");let o={action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",beforeUpload:e=>new Promise(t=>{let l=new FileReader;l.readAsDataURL(e),l.onload=()=>{let e=document.createElement("img");e.src=l.result,e.onload=()=>{let l=document.createElement("canvas");l.width=e.naturalWidth,l.height=e.naturalHeight;let a=l.getContext("2d");a.drawImage(e,0,0),a.fillStyle="red",a.textBaseline="middle",a.font="33px Arial",a.fillText("Ant Design",20,20),l.toBlob(e=>t(e));};};})};var i=()=>(0,a.jsx)(n.Upload,{...o,children:(0,a.jsx)(n.Button,{icon:(0,a.jsx)(d.UploadOutlined,{}),children:"Upload"})});}}]);