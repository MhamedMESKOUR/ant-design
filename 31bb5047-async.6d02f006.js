(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["31bb5047"],{"31bb5047":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return s;}});var r=a("f19d2b93");a("f32f2133");var t=a("a9d1a279"),l=a("3835a2b7");let o=(0,l.createStyles)(({token:e,css:n})=>{let a=".ant-tabs";return n`
    ${a}${a}-card {
      ${a}-content {
        padding: ${e.padding}px;
        background: ${e.colorBgContainer};
      }

      ${a}-nav {
        margin: 0;

        ${a}-nav-wrap > ${a}-nav-list > ${a}-tab {
          background: transparent;
          border-color: transparent;

          &-active {
            border-color: ${e.colorBorderBg};
            background: ${e.colorBgContainer};
          }
        }

        &::before {
          display: none;
        }
      }
    }
  `;}),d=[,,,].fill(null).map((e,n)=>{let a=String(n+1);return{label:`Tab Title ${a}`,key:a,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["Content of Tab Pane ",a]}),(0,r.jsxs)("p",{children:["Content of Tab Pane ",a]}),(0,r.jsxs)("p",{children:["Content of Tab Pane ",a]})]})};});var s=()=>{let{styles:e}=o();return(0,r.jsx)("div",{className:e,children:(0,r.jsx)(t.Tabs,{type:"card",items:d})});};}}]);