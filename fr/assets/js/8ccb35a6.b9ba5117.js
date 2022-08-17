"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91346],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>c});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),m=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=m(r),c=a,f=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return r?n.createElement(f,o(o({ref:e},s),{},{components:r})):n.createElement(f,o({ref:e},s))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99332:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>g,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>f,toc:()=>k});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,u=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&s(t,r,e[r]);if(l)for(var r of l(e))m.call(e,r)&&s(t,r,e[r]);return t};const d={id:"print",title:"Print"},c=void 0,f={unversionedId:"FormEditor/print",id:"version-19/FormEditor/print",title:"Print",description:"Settings",source:"@site/versioned_docs/version-19/FormEditor/properties_Print.md",sourceDirName:"FormEditor",slug:"/FormEditor/print",permalink:"/docs/fr/19/FormEditor/print",draft:!1,tags:[],version:"19",frontMatter:{id:"print",title:"Print"},sidebar:"docs",previous:{title:"Menu",permalink:"/docs/fr/19/FormEditor/menu"},next:{title:"Window Size",permalink:"/docs/fr/19/FormEditor/windowSize"}},g={},k=[{value:"Settings",id:"settings",level:2},{value:"JSON Grammar",id:"json-grammar",level:4}],b={toc:k};function y(t){var e,r=t,{components:a}=r,s=((t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&l)for(var n of l(t))e.indexOf(n)<0&&m.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=u(u({},b),s),i(e,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",u({},{id:"settings"}),"Settings"),(0,n.kt)("p",null,"Allows defining specific print settings for the form. This feature is useful to view printing page limits in the form editor. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Compatibility:")," Even if these settings are taken into account when the form is printed in Application mode, it is discouraged to rely on this feature to store print settings for the form, due to limitations regarding the platform and driver dependency. It is highly recommended to use the 4D commands ",(0,n.kt)("inlineCode",{parentName:"p"},"Print settings to BLOB"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"BLOB to print settings")," which are more powerful. ")),(0,n.kt)("p",null,"You can modify the following print settings: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Paper format "),(0,n.kt)("li",{parentName:"ul"},"Paper orientation "),(0,n.kt)("li",{parentName:"ul"},"Page scaling")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Available options depend on the system configuration. ")),(0,n.kt)("h4",u({},{id:"json-grammar"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Data Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"pageFormat"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Available print properties: paperName, paperWidth, paperHeight, orientation, scale")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"paperName"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'"A4", "US Letter"...')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"paperWidth"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"paperHeight"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"orientation"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'"landscape" (default is "portrait")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"scale"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"minimum: 0")))),(0,n.kt)("hr",null))}y.isMDXComponent=!0}}]);