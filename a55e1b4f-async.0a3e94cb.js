(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["a55e1b4f"],{a55e1b4f:function(e,s,r){"use strict";r.d(s,"__esModule",{value:!0}),r.d(s,"default",{enumerable:!0,get:function(){return a;}});var d=r("f19d2b93");r("3f681966");var o=r("a9d1a279"),a=()=>{let[e]=o.Form.useForm();return(0,d.jsxs)(o.Form,{form:e,name:"dependencies",autoComplete:"off",style:{maxWidth:600},layout:"vertical",children:[(0,d.jsx)(o.Alert,{message:" Try modify `Password2` and then modify `Password`",type:"info",showIcon:!0}),(0,d.jsx)(o.Form.Item,{label:"Password",name:"password",rules:[{required:!0}],children:(0,d.jsx)(o.Input,{})}),(0,d.jsx)(o.Form.Item,{label:"Confirm Password",name:"password2",dependencies:["password"],rules:[{required:!0},({getFieldValue:e})=>({validator:(s,r)=>r&&e("password")!==r?Promise.reject(Error("The new password that you entered do not match!")):Promise.resolve()})],children:(0,d.jsx)(o.Input,{})}),(0,d.jsx)(o.Form.Item,{noStyle:!0,dependencies:["password2"],children:()=>(0,d.jsxs)(o.Typography,{children:[(0,d.jsxs)("p",{children:["Only Update when ",(0,d.jsx)("code",{children:"password2"})," updated:"]}),(0,d.jsx)("pre",{children:JSON.stringify(e.getFieldsValue(),null,2)})]})})]});};}}]);