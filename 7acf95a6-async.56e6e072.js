(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["7acf95a6"],{"7acf95a6":function(a,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"texts",{enumerable:!0,get:function(){return n;}}),t("fb03e5b8");let n=[{value:"create-react-app",paraId:0},{value:" is one of the best React application development tools, This article will try to use ",paraId:0},{value:"create-react-app",paraId:0},{value:" to create a ",paraId:0},{value:"TypeScript",paraId:0},{value:" project, and introduce antd.",paraId:0},{value:"We build ",paraId:1},{value:"antd",paraId:1},{value:" based on latest stable version of TypeScript (",paraId:1},{value:">=5.0.0",paraId:1},{value:"), please make sure your project dependency matches it.",paraId:1},{value:"Before all start, you may need install ",paraId:2,tocIndex:0},{value:"yarn",paraId:2,tocIndex:0},{value:" or ",paraId:2,tocIndex:0},{value:"pnpm",paraId:2,tocIndex:0},{value:" or ",paraId:2,tocIndex:0},{value:"bun",paraId:2,tocIndex:0},{value:".",paraId:2,tocIndex:0},{value:"The tool will create and initialize environment and dependencies automatically, please try config your proxy setting or use another npm registry if any network errors happen during it.",paraId:3},{value:"Then we go inside project and start it.",paraId:4},{value:"$ cd antd-demo\n$ npm run start\n",paraId:5},{value:"Open the browser at ",paraId:6},{value:"http://localhost:3000/",paraId:6},{value:". It renders a header saying ",paraId:6},{value:"Welcome to React",paraId:6},{value:" on the page.",paraId:6},{value:"Below is the default directory structure.",paraId:7,tocIndex:1},{value:"\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 public\n\u2502\xa0\xa0 \u251C\u2500\u2500 favicon.ico\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.html\n\u251C\u2500\u2500 src\n\u2502\xa0\xa0 \u251C\u2500\u2500 App.css\n\u2502\xa0\xa0 \u251C\u2500\u2500 App.js\n\u2502\xa0\xa0 \u251C\u2500\u2500 App.test.js\n\u2502\xa0\xa0 \u251C\u2500\u2500 index.css\n\u2502\xa0\xa0 \u251C\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 logo.svg\n\u2514\u2500\u2500 yarn.lock\n",paraId:8,tocIndex:1},{value:"Now we install ",paraId:9,tocIndex:1},{value:"antd",paraId:9,tocIndex:1},{value:" from yarn or npm or pnpm.",paraId:9,tocIndex:1},{value:"Modify ",paraId:10},{value:"src/App.js",paraId:10},{value:", import Button component from ",paraId:10},{value:"antd",paraId:10},{value:".",paraId:10},{value:"import React from 'react';\nimport { Button } from 'antd';\n\nconst App: React.FC = () => (\n  <div className=\"App\">\n    <Button type=\"primary\">Button</Button>\n  </div>\n);\n\nexport default App;\n",paraId:11},{value:"OK, you should now see a blue primary button displayed on the page. Next you can choose any components of ",paraId:12},{value:"antd",paraId:12},{value:" to develop your application. Visit other workflows of ",paraId:12},{value:"create-react-app",paraId:12},{value:" at its ",paraId:12},{value:"User Guide",paraId:12},{value:".",paraId:12},{value:"Ref to the ",paraId:13,tocIndex:2},{value:"Customize Theme documentation",paraId:14,tocIndex:2},{value:". Modify theme with ConfigProvider:",paraId:13,tocIndex:2},{value:"import React from 'react';\nimport { ConfigProvider } from 'antd';\n\nconst App: React.FC = () => (\n  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>\n    <MyApp />\n  </ConfigProvider>\n);\n\nexport default App;\n",paraId:15,tocIndex:2},{value:"antd",paraId:16,tocIndex:2},{value:" is written in TypeScript with complete definitions, try out and enjoy the property suggestion and typing check.",paraId:16,tocIndex:2},{value:"Don't install ",paraId:17,tocIndex:2},{value:"@types/antd",paraId:17,tocIndex:2},{value:".",paraId:17,tocIndex:2},{value:"We are successfully running antd components now, go build your own application!",paraId:18,tocIndex:2}];}}]);