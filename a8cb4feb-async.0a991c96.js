(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["a8cb4feb"],{a8cb4feb:function(t,e,l){"use strict";l.d(e,"__esModule",{value:!0}),l.d(e,"default",{enumerable:!0,get:function(){return d;}});var a=l("f19d2b93");l("8aecca8f");var n=l("a9d1a279"),r=l("3835a2b7");let o=(0,r.createStyles)(({css:t})=>({primary:t`
    background: #5794f7;
    border-color: blue;
    color: wheat;
  `,default:t`
    border-color: gray;
    background: #f5f5f5;
    color: #313030;
  `,dashed:t`
    border-color: gray;
    background: #f5f5f5;
    color: #313030;
  `,text:t`
    color: gray;
  `,link:t`
    color: blue;
  `})),s=(0,r.createStyles)(({css:t})=>({wrapper:t`
    .ant-btn-primary {
      color: #ec5b56;
    }
    .ant-btn-default {
      color: orange;
    }
    .ant-btn-dashed {
      color: #3976f6;
    }
    .ant-btn-text {
      color: green;
    }
    .ant-btn-link {
      color: #0e98aa;
    }
  `}));var d=()=>{let{styles:t}=o(),{styles:e}=s();return(0,a.jsxs)(n.Flex,{vertical:!0,gap:"middle",children:[(0,a.jsxs)(n.Flex,{gap:"small",children:[(0,a.jsx)(n.ConfigProvider,{theme:{token:{colorPrimary:"red"}},children:(0,a.jsx)(n.Button,{type:"link",children:"Link Button"})}),(0,a.jsx)(n.Button,{type:"link",children:"Link Button"})]}),(0,a.jsxs)(n.Flex,{gap:"small",wrap:!0,children:[(0,a.jsx)(n.Button,{type:"primary",className:t.primary,children:"Primary Button"}),(0,a.jsx)(n.Button,{type:"default",className:t.default,children:"Default Button"}),(0,a.jsx)(n.Button,{type:"dashed",className:t.dashed,children:"Dashed Button"}),(0,a.jsx)(n.Button,{type:"text",className:t.text,children:"Text Button"}),(0,a.jsx)(n.Button,{type:"link",className:t.link,children:"Link Button"})]}),(0,a.jsxs)(n.Flex,{gap:"small",wrap:!0,className:e.wrapper,children:[(0,a.jsx)(n.Button,{type:"primary",children:"Primary Button"}),(0,a.jsx)(n.Button,{type:"default",children:"Default Button"}),(0,a.jsx)(n.Button,{type:"dashed",children:"Dashed Button"}),(0,a.jsx)(n.Button,{type:"text",children:"Text Button"}),(0,a.jsx)(n.Button,{type:"link",children:"Link Button"})]})]});};}}]);