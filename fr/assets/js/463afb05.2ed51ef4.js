"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},43923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"menu",title:"Menu"},u=void 0,c={unversionedId:"FormEditor/menu",id:"FormEditor/menu",title:"Menu",description:"Associated Menu Bar",source:"@site/docs/FormEditor/properties_Menu.md",sourceDirName:"FormEditor",slug:"/FormEditor/menu",permalink:"/docs/fr/docs/next/FormEditor/menu",draft:!1,tags:[],version:"current",frontMatter:{id:"menu",title:"Menu"},sidebar:"docs",previous:{title:"Markers",permalink:"/docs/fr/docs/next/FormEditor/markers"},next:{title:"Print",permalink:"/docs/fr/docs/next/FormEditor/print"}},m={},p=[{value:"Associated Menu Bar",id:"associated-menu-bar",level:2},{value:"JSON Grammar",id:"json-grammar",level:4}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"associated-menu-bar"},"Associated Menu Bar"),(0,o.kt)("p",null,"When a menu bar is associated to a form, it is added to the right of the current menu bar when the form is displayed in Application environment."),(0,o.kt)("p",null,"The selection of a menu command causes an ",(0,o.kt)("inlineCode",{parentName:"p"},"On Menu Selected")," event to be sent to the form method; you can then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Menu selected")," command to test the selected menu. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the menu bar of the form is identical to the current menu bar, it is not added. ")),(0,o.kt)("p",null,"The form menu bar will operate for both input and output forms."),(0,o.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"menuBar"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of a menu bar")))))}d.isMDXComponent=!0}}]);