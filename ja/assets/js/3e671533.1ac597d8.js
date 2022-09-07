"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(i,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"error-handling",title:"\u30a8\u30e9\u30fc\u51e6\u7406"},p=void 0,i={unversionedId:"Concepts/error-handling",id:"version-19-R6/Concepts/error-handling",title:"\u30a8\u30e9\u30fc\u51e6\u7406",description:"\u30a8\u30e9\u30fc\u51e6\u7406\u3068\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30a8\u30e9\u30fc\u306b\u5099\u3048\u3001\u5bfe\u51e6\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u30e9\u30f3\u30bf\u30a4\u30e0\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc\u306e\u30ad\u30e3\u30c3\u30c1\u3084\u5831\u544a\u3001\u307e\u305f\u305d\u308c\u3089\u306e\u6761\u4ef6\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u30014D\u306f\u5305\u62ec\u7684\u306a\u30b5\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/documentation/ja/docs/Concepts/error-handling",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"error-handling",title:"\u30a8\u30e9\u30fc\u51e6\u7406"},sidebar:"docs",previous:{title:"\u30eb\u30fc\u30d7\u69cb\u9020",permalink:"/documentation/ja/docs/Concepts/looping"},next:{title:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u3068\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u30e2\u30fc\u30c9",permalink:"/documentation/ja/docs/Concepts/interpreted-compiled"}},u={},c=[{value:"\u30a8\u30e9\u30fc/\u30b9\u30c6\u30fc\u30bf\u30b9",id:"\u30a8\u30e9\u30fc\u30b9\u30c6\u30fc\u30bf\u30b9",level:2},{value:"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u88c5",id:"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u88c5",level:2},{value:"\u30b9\u30b3\u30fc\u30d7\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u30b9\u30b3\u30fc\u30d7\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:3},{value:"\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u306e\u30a8\u30e9\u30fc\u51e6\u7406",id:"\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u306e\u30a8\u30e9\u30fc\u51e6\u7406",level:3},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9",id:"\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9",level:3}],d={toc:c};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30a8\u30e9\u30fc\u51e6\u7406\u3068\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30a8\u30e9\u30fc\u306b\u5099\u3048\u3001\u5bfe\u51e6\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u30e9\u30f3\u30bf\u30a4\u30e0\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc\u306e\u30ad\u30e3\u30c3\u30c1\u3084\u5831\u544a\u3001\u307e\u305f\u305d\u308c\u3089\u306e\u6761\u4ef6\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u30014D\u306f\u5305\u62ec\u7684\u306a\u30b5\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a8\u30e9\u30fc\u51e6\u7406\u306f\u6b21\u306e2\u3064\u306e\u8981\u671b\u306b\u5fdc\u3048\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u958b\u767a\u30d5\u30a7\u30fc\u30ba\u306b\u304a\u3044\u3066\u3001\u554f\u984c\u3068\u306a\u308a\u3046\u308b\u30b3\u30fc\u30c9\u306e\u30a8\u30e9\u30fc\u3084\u30d0\u30b0\u3092\u767a\u898b\u3057\u3066\u4fee\u6b63\u3057\u305f\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u904b\u7528\u30d5\u30a7\u30fc\u30ba\u306b\u304a\u3044\u3066\u3001\u4e88\u671f\u3057\u306a\u3044\u30a8\u30e9\u30fc\u3092\u691c\u77e5\u3057\u3066\u56de\u5fa9\u3057\u305f\u3044\u3002\u3068\u304f\u306b\u3001\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u30c0\u30a4\u30a2\u30ed\u30b0 (\u30c7\u30a3\u30b9\u30af\u304c\u4e00\u676f\u3001\u30d5\u30a1\u30a4\u30eb\u304c\u306a\u3044\u3001\u306a\u3069) \u3092\u72ec\u81ea\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306b\u7f6e\u63db\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306e\u305f\u3081\u30014D Server \u306b\u306f\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u88c5\u3057\u3066\u304a\u304f\u3053\u3068\u304c\u5f37\u304f\u63a8\u5968\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306b\u3088\u3063\u3066\u3001\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u306b\u304a\u3044\u3066\u4e88\u671f\u305b\u306c\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u3092\u9632\u304e\u3001\u30a8\u30e9\u30fc\u306e\u8abf\u67fb\u306b\u5fc5\u8981\u306a\u30ed\u30b0\u3092\u5c02\u7528\u30d5\u30a1\u30a4\u30eb\u306b\u3068\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")))),(0,r.kt)("h2",a({},{id:"\u30a8\u30e9\u30fc\u30b9\u30c6\u30fc\u30bf\u30b9"}),"\u30a8\u30e9\u30fc/\u30b9\u30c6\u30fc\u30bf\u30b9"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"entity.save()")," \u3084 ",(0,r.kt)("inlineCode",{parentName:"p"},"transporter.send()")," \u306a\u3069\u3001\u304a\u304a\u304f\u306e 4D \u30af\u30e9\u30b9\u95a2\u6570\u306f ",(0,r.kt)("em",{parentName:"p"},"status"),' \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002 \u30e9\u30f3\u30bf\u30a4\u30e0\u306b\u304a\u3044\u3066 "\u60f3\u5b9a\u3055\u308c\u308b"\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u5b9f\u884c\u3092\u505c\u6b62\u3055\u305b\u306a\u3044\u30a8\u30e9\u30fc (\u7121\u52b9\u306a\u30d1\u30b9\u30ef\u30fc\u30c9\u3001\u30ed\u30c3\u30af\u3055\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306a\u3069) \u304c\u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30a8\u30e9\u30fc\u3078\u306e\u5bfe\u5fdc\u306f\u3001\u901a\u5e38\u306e\u30b3\u30fc\u30c9\u306b\u3088\u3063\u3066\u304a\u3053\u306a\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002'),(0,r.kt)("p",null,'\u30c7\u30a3\u30b9\u30af\u66f8\u304d\u8fbc\u307f\u30a8\u30e9\u30fc\u3084\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u554f\u984c\u306a\u3069\u306e\u30a4\u30ec\u30ae\u30e5\u30e9\u30fc\u306a\u4e2d\u65ad\u306f "\u60f3\u5b9a\u3055\u308c\u306a\u3044" \u30a8\u30e9\u30fc\u3067\u3059\u3002 \u3053\u308c\u3089\u306e\u30a8\u30e9\u30fc\u306f\u4f8b\u5916\u3092\u767a\u751f\u3055\u305b\u3001\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u4ecb\u3057\u3066\u5bfe\u5fdc\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002'),(0,r.kt)("h2",a({},{id:"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u88c5"}),"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u88c5"),(0,r.kt)("p",null,"4D \u306b\u304a\u3044\u3066\u306f\u3001\u30a8\u30e9\u30fc\u5c02\u7528\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u3067\u3042\u308b ",(0,r.kt)("strong",{parentName:"p"},"\u30a8\u30e9\u30fc\u51e6\u7406")," (\u307e\u305f\u306f ",(0,r.kt)("strong",{parentName:"p"},"\u30a8\u30e9\u30fc\u30ad\u30e3\u30c3\u30c1"),") \u30e1\u30bd\u30c3\u30c9\u5185\u3067\u3059\u3079\u3066\u306e\u30a8\u30e9\u30fc\u3092\u30ad\u30e3\u30c3\u30c1\u3057\u3001\u51e6\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u306f\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u306b\u5bfe\u3057\u3066\u5b9f\u88c5 (\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb) \u3055\u308c\u3001\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u304b\u30b3\u30f3\u30d1\u30a4\u30eb\u30e2\u30fc\u30c9\u304b\u306b\u304b\u304b\u308f\u3089\u305a\u3001\u30d7\u30ed\u30bb\u30b9\u5185\u3067\u767a\u751f\u3059\u308b\u3059\u3079\u3066\u306e\u30a8\u30e9\u30fc\u306e\u969b\u306b\u81ea\u52d5\u3067\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u3092 ",(0,r.kt)("em",{parentName:"p"},"\u5b9f\u88c5")," \u3059\u308b\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," \u30b3\u30de\u30f3\u30c9\u3092\u30b3\u30fc\u30eb\u3057\u3001\u30b3\u30de\u30f3\u30c9\u306b\u5f53\u8a72\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u540d\u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3057\u307e\u3059\u3002 \u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_ERRORS") // \u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u88c5\u3057\u307e\u3059\n')),(0,r.kt)("p",null,"\u30a8\u30e9\u30fc\u306e\u691c\u77e5\u3092\u4e2d\u6b62\u3059\u308b\u306b\u306f\u3001\u7a7a\u306e\u6587\u5b57\u5217\u3092\u6307\u5b9a\u3057\u3066\u518d\u5ea6 ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," \u30b3\u30de\u30f3\u30c9\u3092\u30b3\u30fc\u30eb\u3057\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("") // \u30a8\u30e9\u30fc\u306e\u691c\u77e5\u3092\u4e2d\u6b62\u3057\u307e\u3059\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Method called on error")," \u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," \u306b\u3088\u3063\u3066\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u540d\u3092\u8fd4\u3057\u307e\u3059\u3002 \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u6c4e\u7528\u7684\u306a\u30b3\u30fc\u30c9\u3067\u3068\u304f\u306b\u6709\u7528\u3067\u3059\u3002\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u4e00\u6642\u7684\u306b\u5909\u66f4\u3057\u3001\u5f8c\u3067\u5fa9\u5143\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  // \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u306a\u3051\u308c\u3070\u30a8\u30e9\u30fc\u304c\u751f\u6210\u3055\u308c\u307e\u3059\n $ref:=Open document("MyDocument")\n  // \u524d\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306b\u623b\u3057\u307e\u3059\n ON ERR CALL($methCurrent)\n\n')),(0,r.kt)("h3",a({},{id:"\u30b9\u30b3\u30fc\u30d7\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\u30b9\u30b3\u30fc\u30d7\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066\u4e00\u3064\u306e\u30a8\u30e9\u30fc\u30ad\u30e3\u30c3\u30c1\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3046\u3084\u308a\u65b9\u3082\u3042\u308c\u3070\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3054\u3068\u306b\u9055\u3046\u30e1\u30bd\u30c3\u30c9\u3092\u5b9a\u7fa9\u3059\u308b\u65b9\u6cd5\u3082\u3042\u308a\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u4e00\u3064\u306e\u30d7\u30ed\u30bb\u30b9\u306b\u3064\u304d\u5b9f\u88c5\u3067\u304d\u308b\u306e\u306f\u4e00\u3064\u306e\u30e1\u30bd\u30c3\u30c9\u306e\u307f\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u5b9f\u88c5\u3055\u308c\u305f\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306f\u5b9f\u884c\u4e2d\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3057\u304b\u9069\u7528\u3055\u308c\u307e\u305b\u3093\u3002 \u3064\u307e\u308a\u3001",(0,r.kt)("strong",{parentName:"p"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8")," \u306b\u3088\u3063\u3066\u30a8\u30e9\u30fc\u304c\u751f\u6210\u3055\u308c\u3066\u3082\u3001\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066 ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," \u3067\u5b9f\u88c5\u3055\u308c\u305f\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306f\u53cd\u5fdc\u3057\u307e\u305b\u3093\u3057\u3001\u9006\u3082\u307e\u305f\u7136\u308a\u3067\u3059\u3002"),(0,r.kt)("h3",a({},{id:"\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u306e\u30a8\u30e9\u30fc\u51e6\u7406"}),"\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u306e\u30a8\u30e9\u30fc\u51e6\u7406"),(0,r.kt)("p",null,"\u72ec\u81ea\u306b\u4f5c\u6210\u3057\u3066\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u306f\u3001\u30a8\u30e9\u30fc\u3092\u8abf\u67fb\u3059\u308b\u305f\u3081\u306e\u60c5\u5831\u304c\u3044\u304f\u3064\u304b\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c02\u7528\u306e\u30b7\u30b9\u30c6\u30e0\u5909\u6570 (*):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error")," (\u500d\u9577\u6574\u6570): \u30a8\u30e9\u30fc\u30b3\u30fc\u30c9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error method")," (\u30c6\u30ad\u30b9\u30c8): \u30a8\u30e9\u30fc\u3092\u751f\u6210\u3057\u305f\u30e1\u30bd\u30c3\u30c9\u306e\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error line")," (\u500d\u9577\u6574\u6570): \u30a8\u30e9\u30fc\u3092\u751f\u6210\u3057\u305f\u30e1\u30bd\u30c3\u30c9\u306e\u884c\u756a\u53f7"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error formula")," (\u30c6\u30ad\u30b9\u30c8): \u30a8\u30e9\u30fc\u306e\u5143\u3068\u306a\u3063\u305f 4D \u30b3\u30fc\u30c9\u306e\u30d5\u30a9\u30fc\u30df\u30e5\u30e9 (\u30c6\u30ad\u30b9\u30c8)")))),(0,r.kt)("p",null,"(*) 4D \u306f\u3001\u3044\u304f\u3064\u304b\u306e ",(0,r.kt)("strong",{parentName:"p"},"\u30b7\u30b9\u30c6\u30e0\u5909\u6570")," \u3068\u547c\u3070\u308c\u308b\u5c02\u7528\u306e\u5909\u6570\u3092\u81ea\u52d5\u7684\u306b\u7ba1\u7406\u3057\u3066\u3044\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.ja.html"}),"4D \u30e9\u30f3\u30b2\u30fc\u30b8\u30de\u30cb\u30e5\u30a2\u30eb")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET LAST ERROR STACK")," \u30b3\u30de\u30f3\u30c9\u306f\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u73fe\u5728\u306e\u30a8\u30e9\u30fc\u30b9\u30bf\u30c3\u30af\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Get call chain")," \u30b3\u30de\u30f3\u30c9\u306f\u3001\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u5185\u306b\u304a\u3051\u308b\u3001\u30e1\u30bd\u30c3\u30c9\u547c\u3073\u51fa\u3057\u30c1\u30a7\u30fc\u30f3\u306e\u5404\u30b9\u30c6\u30c3\u30d7\u3092\u8a73\u7d30\u306b\u8aac\u660e\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002")),(0,r.kt)("h4",a({},{id:"\u4f8b\u984c"}),"\u4f8b\u984c"),(0,r.kt)("p",null,"\u7c21\u5358\u306a\u30a8\u30e9\u30fc\u51e6\u7406\u30b7\u30b9\u30c6\u30e0\u306e\u4f8b\u3067\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'// \u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\n ON ERR CALL("errorMethod")\n //... \u30b3\u30fc\u30c9\u306e\u5b9f\u884c\n ON ERR CALL("") // \u30a8\u30e9\u30fc\u306e\u691c\u77e5\u3092\u4e2d\u6b62\u3057\u307e\u3059\n')),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'// errorMethod \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\n If(Error#1006) // \u3053\u308c\u306f\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u308b\u5272\u308a\u8fbc\u307f\u3067\u306f\u3042\u308a\u307e\u305b\u3093\n    ALERT("\u30a8\u30e9\u30fc "+String(Error)+" \u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002 \u554f\u984c\u3068\u306a\u3063\u305f\u30b3\u30fc\u30c9\u306f\u3053\u3061\u3089\u3067\u3059: \\""+Error formula+"\\"")\n End if\n')),(0,r.kt)("h3",a({},{id:"\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9"}),"\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("p",null,"\u6a19\u6e96\u306e\u30a8\u30e9\u30fc\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u8868\u793a\u3055\u305b\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u306b\u306f\u3001\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u88c5\u3059\u308b\u3060\u3051\u3067\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," \u30b7\u30b9\u30c6\u30e0\u5909\u6570\u306f\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u4ee5\u5916\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u3082\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") // emptyMethod \u306f\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3067\u3059\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("\u30d5\u30a1\u30a4\u30eb\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002")\nEnd if\nON ERR CALL("")\n')))}m.isMDXComponent=!0}}]);