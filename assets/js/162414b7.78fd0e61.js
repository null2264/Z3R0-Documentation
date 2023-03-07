"use strict";(self.webpackChunkz_3_r_0_docs=self.webpackChunkz_3_r_0_docs||[]).push([[4376],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,u=m["".concat(s,".").concat(d)]||m[d]||k[d]||o;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},l="Discord Action Blocks",i={unversionedId:"tagblocks/blocks/discord-action",id:"tagblocks/blocks/discord-action",title:"Discord Action Blocks",description:"Similar to Discord Object Blocks, except these blocks allows you to do certain actions on Discord instead of accessing data.",source:"@site/docs/tagblocks/blocks/discord-action.md",sourceDirName:"tagblocks/blocks",slug:"/tagblocks/blocks/discord-action",permalink:"/docs/tagblocks/blocks/discord-action",draft:!1,editUrl:"https://github.com/ZiRO-Bot/docs/tree/master/docs/tagblocks/blocks/discord-action.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tagblocks",previous:{title:"Discord Object Blocks",permalink:"/docs/tagblocks/blocks/discord"},next:{title:"Meta Blocks",permalink:"/docs/tagblocks/blocks/meta"}},s={},p=[{value:"React Blocks",id:"react-blocks",level:2},{value:"React Block",id:"react-block",level:3},{value:"ReactU Block",id:"reactu-block",level:3},{value:"Embed Block",id:"embed-block",level:2}],c={toc:p},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"discord-action-blocks"},"Discord Action Blocks"),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"discord"},"Discord Object Blocks"),", except these blocks allows you to do certain actions on Discord instead of accessing data."),(0,r.kt)("h2",{id:"react-blocks"},"React Blocks"),(0,r.kt)("h3",{id:"react-block"},"React Block"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This block is supported in ",(0,r.kt)("strong",{parentName:"p"},"Custom Commands"),", ",(0,r.kt)("strong",{parentName:"p"},"Welcome Message"),", ",(0,r.kt)("strong",{parentName:"p"},"Goodbye Message"),",\nand ",(0,r.kt)("strong",{parentName:"p"},"Boost Message"),".")),(0,r.kt)("p",null,"Block that makes the bot react to its own message."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"{react}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Aliases"),": None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),": None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payloads"),": Emojis (supports both Unicode and Custom Emojis), separated by\nspaces"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"{react: :kekw:}"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"{react: :kekw: \ud83e\udd14}"))),(0,r.kt)("h3",{id:"reactu-block"},"ReactU Block"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This block is supported in ",(0,r.kt)("strong",{parentName:"p"},"Custom Commands"),".")),(0,r.kt)("p",null,"Similar to React Block, except this block react to the message that triggered the command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"{reactu}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Aliases"),": None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),": None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payloads"),": Emojis (supports both Unicode and Custom Emojis), separated by\nspaces"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"{reactu: :kekw:}"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"{reactu: :kekw: \ud83e\udd14}"))),(0,r.kt)("h2",{id:"embed-block"},"Embed Block"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This block is supported in ",(0,r.kt)("strong",{parentName:"p"},"Custom Commands"),", ",(0,r.kt)("strong",{parentName:"p"},"Welcome Message"),", ",(0,r.kt)("strong",{parentName:"p"},"Goodbye Message"),",\nand ",(0,r.kt)("strong",{parentName:"p"},"Boost Message"),".")),(0,r.kt)("p",null,"Block that tells the bot to build an Embed to the message. There's multiple way\nto use this Block, JSON and Manual."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Block"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"{embed}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Aliases"),": None")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JSON (",(0,r.kt)("strong",{parentName:"li"},"Ignored if you use Manual method"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title"),": Set the embed's title"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description"),": Set the embed's description"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color"),": Set the embed's color"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"colour"),": Alias for ",(0,r.kt)("inlineCode",{parentName:"li"},"color")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),": Set the embed's url (make the embed's title into hyperlink)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thumbnail"),": Add thumbnail to the embed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"image"),": Add image to the embed"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Payloads"),": The value you want to set for the parameter (",(0,r.kt)("strong",{parentName:"p"},"Manual Only"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"JSON")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{embed({"title":"Hello!", "description":"Lorem ipsum dolor sit amet"})}\n')),(0,r.kt)("p",{parentName:"li"},"It also works with formatted JSON:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{embed({\n    "title":"Hello!",\n    "description":"Lorem ipsum dolor sit amet"\n})}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Manual")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"{embed(color):#ffffff}\n{embed(title):Hello}\n{embed(description):Lorem ipsum dolor sit amet}\n")))))))}k.isMDXComponent=!0}}]);