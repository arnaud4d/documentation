"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85100],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>c});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),m=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=m(r),c=a,f=d["".concat(p,".").concat(c)]||d[c]||s[c]||i;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68230:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"print",title:"Print"},p=void 0,m={unversionedId:"FormEditor/print",id:"FormEditor/print",title:"Print",description:"Settings",source:"@site/docs/FormEditor/properties_Print.md",sourceDirName:"FormEditor",slug:"/FormEditor/print",permalink:"/docs/ja/docs/next/FormEditor/print",draft:!1,tags:[],version:"current",frontMatter:{id:"print",title:"Print"},sidebar:"docs",previous:{title:"Menu",permalink:"/docs/ja/docs/next/FormEditor/menu"},next:{title:"Window Size",permalink:"/docs/ja/docs/next/FormEditor/windowSize"}},u={},s=[{value:"Settings",id:"settings",level:2},{value:"JSON Grammar",id:"json-grammar",level:4}],d={toc:s};function c(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"settings"},"Settings"),(0,i.kt)("p",null,"Allows defining specific print settings for the form. This feature is useful to view printing page limits in the form editor. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Compatibility:")," Even if these settings are taken into account when the form is printed in Application mode, it is discouraged to rely on this feature to store print settings for the form, due to limitations regarding the platform and driver dependency. It is highly recommended to use the 4D commands ",(0,i.kt)("inlineCode",{parentName:"p"},"Print settings to BLOB"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"BLOB to print settings")," which are more powerful. ")),(0,i.kt)("p",null,"You can modify the following print settings: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Paper format "),(0,i.kt)("li",{parentName:"ul"},"Paper orientation "),(0,i.kt)("li",{parentName:"ul"},"Page scaling")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Available options depend on the system configuration. ")),(0,i.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pageFormat"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Available print properties: paperName, paperWidth, paperHeight, orientation, scale")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"paperName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'"A4", "US Letter"...')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"paperWidth"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"paperHeight"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"orientation"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'"landscape" (default is "portrait")')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scale"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"minimum: 0")))),(0,i.kt)("hr",null))}c.isMDXComponent=!0}}]);