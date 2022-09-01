"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"onColumnMoved",title:"On Column Moved"},i=void 0,s={unversionedId:"Events/onColumnMoved",id:"Events/onColumnMoved",title:"On Column Moved",description:"| Code | Puede ser llamado por                                                                                                    | Definici\xf3n                                                                       |",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Events/onColumnMoved.md",sourceDirName:"Events",slug:"/Events/onColumnMoved",permalink:"/docs/es/next/Events/onColumnMoved",draft:!1,tags:[],version:"current",frontMatter:{id:"onColumnMoved",title:"On Column Moved"},sidebar:"docs",previous:{title:"On Collapse",permalink:"/docs/es/next/Events/onCollapse"},next:{title:"On Column Resize",permalink:"/docs/es/next/Events/onColumnResize"}},c={},u=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}],p={toc:u};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Puede ser llamado por"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Definici\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"32"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("a",o({parentName:"td"},{href:"/docs/es/next/FormObjects/listboxOverview"}),"List Box")," - ",(0,r.kt)("a",o({parentName:"td"},{href:"/docs/es/next/FormObjects/listboxOverview#list-box-columns"}),"Columna List Box")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Una columna de list box es movida por el usuario por medio de arrastrar y soltar")))),(0,r.kt)("h2",o({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"Este evento se genera cuando una columna de list box es movida por el usuario utilizando la funci\xf3n de arrastrar y soltar (",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesListBox#locked-columns-and-static-columns"}),"si se permite"),"). No se genera si la columna se arrastra y luego se suelta en su ubicaci\xf3n inicial."),(0,r.kt)("p",null,"El comando ",(0,r.kt)("inlineCode",{parentName:"p"},"LISTBOX MOVED COLUMN NUMBER")," devuelve la nueva posici\xf3n de la columna."))}d.isMDXComponent=!0}}]);