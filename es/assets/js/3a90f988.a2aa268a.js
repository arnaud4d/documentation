"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"onRowResize",title:"On Row Resize"},i=void 0,p={unversionedId:"Events/onRowResize",id:"version-19/Events/onRowResize",title:"On Row Resize",description:"| Code | Puede ser llamado por                                   | Definici\xf3n                                                       |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onRowResize.md",sourceDirName:"Events",slug:"/Events/onRowResize",permalink:"/docs/es/19/Events/onRowResize",draft:!1,tags:[],version:"19",frontMatter:{id:"onRowResize",title:"On Row Resize"},sidebar:"docs",previous:{title:"On Row Moved",permalink:"/docs/es/19/Events/onRowMoved"},next:{title:"On Scroll",permalink:"/docs/es/19/Events/onScroll"}},c={},u=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:4}],d={toc:u};function s(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Puede ser llamado por"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Definici\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"60"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/es/19/FormObjects/viewProAreaOverview"}),"\xc1rea 4D View Pro")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"La altura de una l\xednea es modificada por un usuario con el rat\xf3n")))),(0,r.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"Este evento se genera cuando la altura de una l\xednea es modificada por un usuario en un documento 4D View Pro. En este contexto, el ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/19/Events/overview#event-object"}),"objeto evento")," devuelto por el comando ",(0,r.kt)("inlineCode",{parentName:"p"},"FORM Event")," contiene:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Propiedad"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"code"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"entero largo"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"description"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"On Row Resize"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"objectName"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre del \xe1rea 4D View Pro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"sheetName"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre de la hoja del evento")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"range"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"object"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rango de celdas de las l\xedneas cuyo alto ha cambiado")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"header"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"True si la l\xednea de la columna de encabezado (primera l\xednea) se redimensiona, si no false")))),(0,r.kt)("h4",a({},{id:"ejemplo"}),"Ejemplo"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' If(FORM Event.code=On Row Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))\n End if\n')))}s.isMDXComponent=!0}}]);