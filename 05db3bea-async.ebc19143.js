(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["05db3bea"],{"05db3bea":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return l;}});var a=n("f19d2b93");n("65d724af");var i=n("e22febe0"),r=n("a9d1a279"),o=n("3835a2b7");let d=(0,o.createStyles)(({prefixCls:e,css:t})=>({linearGradientButton:t`
    &.${e}-btn-primary:not([disabled]):not(.${e}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `}));var l=()=>{let{styles:e}=d();return(0,a.jsx)(r.ConfigProvider,{button:{className:e.linearGradientButton},children:(0,a.jsxs)(r.Space,{children:[(0,a.jsx)(r.Button,{type:"primary",size:"large",icon:(0,a.jsx)(i.AntDesignOutlined,{}),children:"Gradient Button"}),(0,a.jsx)(r.Button,{size:"large",children:"Button"})]})});};}}]);