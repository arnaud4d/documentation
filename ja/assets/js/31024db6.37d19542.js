"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},17521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"menu",title:"Menu"},l=void 0,u={unversionedId:"FormEditor/menu",id:"version-19-R6/FormEditor/menu",title:"Menu",description:"Associated Menu Bar",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/FormEditor/properties_Menu.md",sourceDirName:"FormEditor",slug:"/FormEditor/menu",permalink:"/docs/ja/FormEditor/menu",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"menu",title:"Menu"},sidebar:"docs",previous:{title:"Markers",permalink:"/docs/ja/FormEditor/markers"},next:{title:"Print",permalink:"/docs/ja/FormEditor/print"}},c={},p=[{value:"Associated Menu Bar",id:"associated-menu-bar",level:2},{value:"JSON Grammar",id:"json-grammar",level:4}],m={toc:p};function s(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"associated-menu-bar"}),"Associated Menu Bar"),(0,n.kt)("p",null,"When a menu bar is associated to a form, it is added to the right of the current menu bar when the form is displayed in Application environment."),(0,n.kt)("p",null,"The selection of a menu command causes an ",(0,n.kt)("inlineCode",{parentName:"p"},"On Menu Selected")," event to be sent to the form method; you can then use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Menu selected")," command to test the selected menu."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the menu bar of the form is identical to the current menu bar, it is not added.")),(0,n.kt)("p",null,"The form menu bar will operate for both input and output forms."),(0,n.kt)("h4",a({},{id:"json-grammar"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Data Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"menuBar"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Name of a menu bar")))))}s.isMDXComponent=!0}}]);