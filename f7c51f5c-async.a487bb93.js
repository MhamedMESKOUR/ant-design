(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["f7c51f5c"],{f7c51f5c:function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return r;}});var s=t("f19d2b93");t("89b826e3");var n=t("a9d1a279"),r=()=>{let[e]=n.Form.useForm();return(0,s.jsxs)(n.Form,{form:e,layout:"vertical",onFinish:()=>{n.message.success("Submit success!");},onFinishFailed:()=>{n.message.error("Submit failed!");},autoComplete:"off",children:[(0,s.jsx)(n.Form.Item,{name:"url",label:"URL",rules:[{required:!0},{type:"url",warningOnly:!0},{type:"string",min:6}],children:(0,s.jsx)(n.Input,{placeholder:"input placeholder"})}),(0,s.jsx)(n.Form.Item,{children:(0,s.jsxs)(n.Space,{children:[(0,s.jsx)(n.Button,{type:"primary",htmlType:"submit",children:"Submit"}),(0,s.jsx)(n.Button,{htmlType:"button",onClick:()=>{e.setFieldsValue({url:"https://taobao.com/"});},children:"Fill"})]})})]});};}}]);