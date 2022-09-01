"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"control-flow",title:"\u5236\u5fa1\u30d5\u30ed\u30fc"},i=void 0,c={unversionedId:"Concepts/control-flow",id:"version-19/Concepts/control-flow",title:"\u5236\u5fa1\u30d5\u30ed\u30fc",description:"\u30e1\u30bd\u30c3\u30c9\u304c\u5358\u7d14\u304b\u8907\u96d1\u304b\u306b\u95a2\u4fc2\u306a\u304f\u3001\u958b\u767a\u8005\u306f3\u3064\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u69cb\u9020\u306e\u3046\u3061\u30011\u3064\u4ee5\u4e0a\u3092\u5e38\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002 \u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u69cb\u9020\u306f\u3001\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u304c\u5b9f\u884c\u3055\u308c\u308b\u9806\u5e8f\u3092\u6c7a\u5b9a\u3059\u308b\u5b9f\u884c\u30d5\u30ed\u30fc\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3057\u307e\u3059\u3002 3\u3064\u306e\u30bf\u30a4\u30d7\u306e\u69cb\u9020\u304c\u3042\u308a\u307e\u3059:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/Concepts/flow-control.md",sourceDirName:"Concepts",slug:"/Concepts/control-flow",permalink:"/docs/ja/19/Concepts/control-flow",draft:!1,tags:[],version:"19",frontMatter:{id:"control-flow",title:"\u5236\u5fa1\u30d5\u30ed\u30fc"},sidebar:"docs",previous:{title:"\u30af\u30e9\u30b9",permalink:"/docs/ja/19/Concepts/classes"},next:{title:"\u5206\u5c90\u69cb\u9020",permalink:"/docs/ja/19/Concepts/branching"}},p={},s=[],u={toc:s};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30e1\u30bd\u30c3\u30c9\u304c\u5358\u7d14\u304b\u8907\u96d1\u304b\u306b\u95a2\u4fc2\u306a\u304f\u3001\u958b\u767a\u8005\u306f3\u3064\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u69cb\u9020\u306e\u3046\u3061\u30011\u3064\u4ee5\u4e0a\u3092\u5e38\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002 \u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u69cb\u9020\u306f\u3001\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u304c\u5b9f\u884c\u3055\u308c\u308b\u9806\u5e8f\u3092\u6c7a\u5b9a\u3059\u308b\u5b9f\u884c\u30d5\u30ed\u30fc\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3057\u307e\u3059\u3002 3\u3064\u306e\u30bf\u30a4\u30d7\u306e\u69cb\u9020\u304c\u3042\u308a\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30b7\u30fc\u30b1\u30f3\u30b7\u30e3\u30eb"),": \u30b7\u30fc\u30b1\u30f3\u30b7\u30e3\u30eb\u69cb\u9020\u306f\u5358\u7d14\u306a\u7dda\u5f62\u69cb\u9020\u3067\u3059\u3002 \u30b7\u30fc\u30b1\u30f3\u30b9\u3068\u306f\u30014D\u304c\u6700\u521d\u304b\u3089\u6700\u5f8c\u307e\u3067\u6b21\u3005\u306b\u5b9f\u884c\u3059\u308b\u4e00\u9023\u306e\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3067\u3059\u3002 \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u3067\u983b\u7e41\u306b\u4f7f\u7528\u3055\u308c\u308b1\u884c\u304b\u3089\u6210\u308b\u30eb\u30fc\u30c1\u30f3\u306f\u3082\u3063\u3068\u3082\u7c21\u5358\u306a\u30b7\u30fc\u30b1\u30f3\u30b7\u30e3\u30eb\u69cb\u9020\u306e\u4f8b\u3067\u3059\u3002 \u4f8b: ",(0,r.kt)("inlineCode",{parentName:"li"},"[People]lastName:=Uppercase([People]lastName)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",o({parentName:"strong"},{href:"/docs/ja/19/Concepts/branching"}),"\u5206\u5c90")),": \u5206\u5c90\u69cb\u9020\u306f\u3001\u6761\u4ef6\u3092\u30c6\u30b9\u30c8\u3057\u3001\u305d\u306e\u7d50\u679c\u306b\u57fa\u3065\u3044\u3066\u7570\u306a\u308b\u6d41\u308c\u306b\u30e1\u30bd\u30c3\u30c9\u3092\u5c0e\u304d\u307e\u3059\u3002 \u6761\u4ef6\u306f true \u307e\u305f\u306f false \u306b\u8a55\u4fa1\u3055\u308c\u308b\u30d6\u30fc\u30eb\u5f0f\u3067\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"li"},"If...Else...End if")," \u69cb\u6587\u306f\u5206\u5c90\u69cb\u9020\u306e\u4e00\u4f8b\u3067\u3001\u51e6\u7406\u30d5\u30ed\u30fc\u3092\u4e8c\u3064\u306b\u5206\u5c90\u3057\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"li"},"Case of...Else...End case")," \u69cb\u6587\u3082\u5206\u5c90\u69cb\u9020\u306e\u4e00\u3064\u3067\u3001\u51e6\u7406\u30d5\u30ed\u30fc\u3092\u3082\u3063\u3068\u305f\u304f\u3055\u3093\u5206\u5c90\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",o({parentName:"strong"},{href:"/docs/ja/19/Concepts/looping"}),"\u30eb\u30fc\u30d7")),": \u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210\u306b\u3042\u305f\u3063\u3066\u3001\u4f55\u5ea6\u3082\u540c\u3058\u51e6\u7406\u3092\u7e70\u308a\u8fd4\u3059\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306b\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u30014D\u306f\u4ee5\u4e0b\u306e\u30eb\u30fc\u30d7\u69cb\u9020\u3092\u5099\u3048\u3066\u3044\u307e\u3059:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"While...End while")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Repeat...Until")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"For...End for")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"For each...End for each"),(0,r.kt)("br",null)," \u30eb\u30fc\u30d7\u3092\u5236\u5fa1\u3059\u308b\u65b9\u6cd5\u306b\u306f\u3001\u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u308b\u307e\u3067\u30eb\u30fc\u30d7\u3059\u308b\u65b9\u6cd5\u3068\u3001\u6307\u5b9a\u3057\u305f\u56de\u6570\u3060\u3051\u30eb\u30fc\u30d7\u3059\u308b\u65b9\u6cd5\u306e 2\u901a\u308a\u304c\u3042\u308a\u307e\u3059\u3002 \u5404\u30eb\u30fc\u30d7\u69cb\u9020\u306f\u3044\u305a\u308c\u306e\u65b9\u6cd5\u306b\u3082\u7528\u3044\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"While")," \u30eb\u30fc\u30d7\u3068 ",(0,r.kt)("inlineCode",{parentName:"li"},"Repeat")," \u30eb\u30fc\u30d7\u306f\u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u308b\u307e\u3067\u7e70\u308a\u8fd4\u3059\u5834\u5408\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"For")," \u30eb\u30fc\u30d7\u306f\u6307\u5b9a\u3057\u305f\u56de\u6570\u3060\u3051\u30eb\u30fc\u30d7\u3059\u308b\u5834\u5408\u306e\u5229\u7528\u306b\u9069\u5207\u3067\u3059\u3002  ",(0,r.kt)("inlineCode",{parentName:"li"},"For each...End for each")," \u30eb\u30fc\u30d7\u306f\u4e21\u65b9\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3084\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u3067\u30eb\u30fc\u30d7\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8:")," 4D\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u69cb\u9020 (If/While/For/Caes of/Repeat/For each) \u3092512\u30ec\u30d9\u30eb\u307e\u3067\u5165\u308c\u5b50\u3067\u8a18\u8ff0\u3067\u304d\u307e\u3059\u3002"))}f.isMDXComponent=!0}}]);