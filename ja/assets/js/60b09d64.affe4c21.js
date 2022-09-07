"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60545],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),i=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=i(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=i(n),d=a,k=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return n?r.createElement(k,o(o({ref:e},m),{},{components:n})):r.createElement(k,o({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77298:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={id:"compute",title:"$compute"},p=void 0,u={unversionedId:"REST/compute",id:"version-19-R6/REST/compute",title:"$compute",description:"\u6307\u5b9a\u3057\u305f\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u8a08\u7b97\u3092\u304a\u3053\u306a\u3044\u307e\u3059 (\u4f8b Employee/objectAtt.property1/?$compute=sum)\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/REST/$compute.md",sourceDirName:"REST",slug:"/REST/compute",permalink:"/documentation/ja/docs/REST/compute",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"compute",title:"$compute"},sidebar:"docs",previous:{title:"$binary",permalink:"/documentation/ja/docs/REST/binary"},next:{title:"$distinct",permalink:"/documentation/ja/docs/REST/distinct"}},i={},m=[{value:"\u8a73\u7d30",id:"\u8a73\u7d30",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2}],c={toc:m};function s(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6307\u5b9a\u3057\u305f\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u8a08\u7b97\u3092\u304a\u3053\u306a\u3044\u307e\u3059 (",(0,r.kt)("em",{parentName:"p"},"\u4f8b"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee/salary/?$compute=sum"),"\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306e\u4f8b: ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee/objectAtt.property1/?$compute=sum"),")\u3002"),(0,r.kt)("h2",a({},{id:"\u8a73\u7d30"}),"\u8a73\u7d30"),(0,r.kt)("p",null,"\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u3063\u3066\u3001\u30c7\u30fc\u30bf\u3092\u5bfe\u8c61\u306b\u8a08\u7b97\u3092\u304a\u3053\u306a\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u8a08\u7b97\u3092\u304a\u3053\u306a\u3046\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,r.kt)("p",null,"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306e\u5834\u5408\u306f\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u4f8b:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAtt.property1/?$compute=$all")),(0,r.kt)("p",null,"\u6b21\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u30ad\u30fc\u30ef\u30fc\u30c9"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8a73\u7d30"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"$all"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5229\u7528\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u8a08\u7b97\u3092\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u304a\u3053\u306a\u3044\u3001\u7d50\u679c\u3092\u683c\u7d0d\u3057\u305f JSON \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u6570\u5024\u578b\u306e\u5c5e\u6027\u306b\u3064\u3044\u3066\u306f\u5e73\u5747 (average)\u3001\u30ab\u30a6\u30f3\u30c8 (count)\u3001\u6700\u5c0f (min)\u3001\u6700\u5927 (max)\u3001\u5408\u8a08 (sum)\u3001\u6587\u5b57\u5217\u578b\u306e\u5c5e\u6027\u306b\u3064\u3044\u3066\u306f\u30ab\u30a6\u30f3\u30c8 (count)\u3001\u6700\u5c0f (min)\u3001\u6700\u5927 (max) \u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"average"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6570\u5024\u578b\u5c5e\u6027\u306e\u5e73\u5747\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"count"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u306e\u8981\u7d20\u6570\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u5185\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u6570\u3092\u53d6\u5f97\u3057\u307e\u3059 (\u3069\u3061\u3089\u306e\u5834\u5408\u3082\u5c5e\u6027\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"min"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6570\u5024\u578b\u5c5e\u6027\u3042\u308b\u3044\u306f\u6587\u5b57\u5217\u578b\u5c5e\u6027\u306e\u6700\u5c0f\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"max"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6570\u5024\u578b\u5c5e\u6027\u3042\u308b\u3044\u306f\u6587\u5b57\u5217\u578b\u5c5e\u6027\u306e\u6700\u5927\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"sum"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6570\u5024\u578b\u5c5e\u6027\u306e\u5408\u8a08\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")))),(0,r.kt)("h2",a({},{id:"\u4f8b\u984c"}),"\u4f8b\u984c"),(0,r.kt)("p",null,"\u6570\u5024\u578b\u306e\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u3059\u3079\u3066\u306e\u8a08\u7b97\u5024\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n')),(0,r.kt)("p",null,"\u6587\u5b57\u5217\u578b\u306e\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u3059\u3079\u3066\u306e\u8a08\u7b97\u5024\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/firstName/?$compute=$all")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n')),(0,r.kt)("p",null,"\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u7279\u5b9a\u306e\u8a08\u7b97\u306e\u307f\u3092\u304a\u3053\u306a\u3046\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=sum")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"235000")),(0,r.kt)("p",null,"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u7279\u5b9a\u306e\u8a08\u7b97\u306e\u307f\u3092\u304a\u3053\u306a\u3046\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAttribute.property1/?$compute=sum")),(0,r.kt)("p",null,"\u30ec\u30b9\u30dd\u30f3\u30b9:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"45")))}s.isMDXComponent=!0}}]);