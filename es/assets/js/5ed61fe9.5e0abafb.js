"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75848],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(g,i(i({ref:n},s),{},{components:t})):a.createElement(g,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});t(67294);var a=t(3905);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i={id:"onPageChange",title:"On Page Change"},l=void 0,c={unversionedId:"Events/onPageChange",id:"version-19/Events/onPageChange",title:"On Page Change",description:"| Code | Puede ser llamado por | Definici\xf3n                                |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onPageChange.md",sourceDirName:"Events",slug:"/Events/onPageChange",permalink:"/documentation/es/docs/19/Events/onPageChange",draft:!1,tags:[],version:"19",frontMatter:{id:"onPageChange",title:"On Page Change"},sidebar:"docs",previous:{title:"On Outside Call",permalink:"/documentation/es/docs/19/Events/onOutsideCall"},next:{title:"On Plug in Area",permalink:"/documentation/es/docs/19/Events/onPlugInArea"}},u={},s=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}],p={toc:s};function d(e){var{components:n}=e,t=o(e,["components"]);return(0,a.kt)("wrapper",r({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Code"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Puede ser llamado por"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Definici\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"56"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Formulario"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Se cambia la p\xe1gina actual del formulario")))),(0,a.kt)("h2",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,a.kt)("p",null,"Este evento s\xf3lo est\xe1 disponible a nivel del formulario (se llama en el m\xe9todo formulario). Se genera cada vez que la p\xe1gina actual del formulario cambia (tras una llamada al comando ",(0,a.kt)("inlineCode",{parentName:"p"},"FORM GOTO PAGE")," o una acci\xf3n de navegaci\xf3n est\xe1ndar)."),(0,a.kt)("p",null,"Note que se genera despu\xe9s de que la p\xe1gina est\xe9 completamente cargada, es decir, una vez que todos los objetos que contiene est\xe1n inicializados, incluyendo ",(0,a.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/webAreaOverview"}),"\xe1reas web"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"La \xfanica excepci\xf3n son las \xe1reas 4D View Pro, para las que hay que llamar al evento espec\xedfico ",(0,a.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/Events/onVpReady"}),"On VP Ready"),".")),(0,a.kt)("p",null,"El evento ",(0,a.kt)("inlineCode",{parentName:"p"},"On Page Change")," es \xfatil para ejecutar c\xf3digo que requiere que todos los objetos sean previamente inicializados. Tambi\xe9n se puede utilizar para optimizar la aplicaci\xf3n ejecutando el c\xf3digo (por ejemplo, una b\xfasqueda) s\xf3lo despu\xe9s de que se muestre una p\xe1gina espec\xedfica del formulario y no tan pronto como se cargue la p\xe1gina 1. Si el usuario no va a esta p\xe1gina, el c\xf3digo no se ejecuta."))}d.isMDXComponent=!0}}]);