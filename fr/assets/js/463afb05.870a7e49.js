"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},43915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>v,frontMatter:()=>s,metadata:()=>f,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e};const s={id:"menu",title:"Menu"},d=void 0,f={unversionedId:"FormEditor/menu",id:"FormEditor/menu",title:"Menu",description:"Associated Menu Bar",source:"@site/docs/FormEditor/properties_Menu.md",sourceDirName:"FormEditor",slug:"/FormEditor/menu",permalink:"/docs/fr/next/FormEditor/menu",draft:!1,tags:[],version:"current",frontMatter:{id:"menu",title:"Menu"},sidebar:"docs",previous:{title:"Markers",permalink:"/docs/fr/next/FormEditor/markers"},next:{title:"Print",permalink:"/docs/fr/next/FormEditor/print"}},b={},y=[{value:"Associated Menu Bar",id:"associated-menu-bar",level:2},{value:"JSON Grammar",id:"json-grammar",level:4}],O={toc:y};function v(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},O),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",m({},{id:"associated-menu-bar"}),"Associated Menu Bar"),(0,n.kt)("p",null,"When a menu bar is associated to a form, it is added to the right of the current menu bar when the form is displayed in Application environment."),(0,n.kt)("p",null,"The selection of a menu command causes an ",(0,n.kt)("inlineCode",{parentName:"p"},"On Menu Selected")," event to be sent to the form method; you can then use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Menu selected")," command to test the selected menu. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the menu bar of the form is identical to the current menu bar, it is not added. ")),(0,n.kt)("p",null,"The form menu bar will operate for both input and output forms."),(0,n.kt)("h4",m({},{id:"json-grammar"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Data Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"menuBar"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Name of a menu bar")))))}v.isMDXComponent=!0}}]);