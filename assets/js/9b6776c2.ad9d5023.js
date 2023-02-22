"use strict";(self.webpackChunkz_3_r_0_docs=self.webpackChunkz_3_r_0_docs||[]).push([[467],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,slug:"/tagblocks",description:"Tag Blocks is a scripting language powered by TagScriptEngine"},i="Introduction",l={unversionedId:"tagblocks/intro",id:"tagblocks/intro",title:"Introduction",description:"Tag Blocks is a scripting language powered by TagScriptEngine",source:"@site/docs/tagblocks/intro.md",sourceDirName:"tagblocks",slug:"/tagblocks",permalink:"/docs/tagblocks",draft:!1,editUrl:"https://github.com/ZiRO-Bot/docs/tree/master/docs/tagblocks/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/tagblocks",description:"Tag Blocks is a scripting language powered by TagScriptEngine"},sidebar:"tagblocks",next:{title:"Blocks",permalink:"/docs/category/blocks"}},s={},c=[{value:"The Anatomy of Tag Blocks",id:"the-anatomy-of-tag-blocks",level:2},{value:"Supports",id:"supports",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Tag Blocks is a scripting language powered by\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ZiRO-Bot/TagScript"},"TagScriptEngine"),"."),(0,a.kt)("p",null,"It aims to mimic programming language while still relatively easy to use."),(0,a.kt)("h2",{id:"the-anatomy-of-tag-blocks"},"The Anatomy of Tag Blocks"),(0,a.kt)("p",null,"All Tag Blocks are surrounded by curly braces ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,a.kt)("p",null,"Inside is the name of the block, which determines the behaviour of the block.\nSome blocks have aliases or multiple names that produces the same behaviour."),(0,a.kt)("p",null,"Depending on the block's behaviour, it can have ",(0,a.kt)("strong",{parentName:"p"},"parameter")," options that can be\nadded right after the block's name. (",(0,a.kt)("inlineCode",{parentName:"p"},"blockname(parameter)"),")"),(0,a.kt)("p",null,"Block that performs action sometimes allows you to specify the text that\nreturned once specific action is successfully performed called ",(0,a.kt)("strong",{parentName:"p"},"*payload"),", it\ncan be added after block's name or after parameter option.\n(",(0,a.kt)("inlineCode",{parentName:"p"},"blockname(parameter):payload")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"blockname:payload"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"{if(true):It's true|It's false}"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"{random:1,2,3}")),(0,a.kt)("h2",{id:"supports"},"Supports"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Not all blocks are supported by these listed features, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"category/blocks"},"click here to see more details.")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom Commands"),(0,a.kt)("li",{parentName:"ul"},"Welcome Message"),(0,a.kt)("li",{parentName:"ul"},"Goodbye Message"),(0,a.kt)("li",{parentName:"ul"},"Boost Message (Not available yet)")))}m.isMDXComponent=!0}}]);