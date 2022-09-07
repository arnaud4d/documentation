"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48150],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34032:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(67294);var t=n(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"onUrlLoadingError",title:"On URL Loading Error"},l=void 0,c={unversionedId:"Events/onUrlLoadingError",id:"version-19-R6/Events/onUrlLoadingError",title:"On URL Loading Error",description:"| Code | Puede ser llamado por                       | Definici\xf3n                                |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Events/onUrlLoadingError.md",sourceDirName:"Events",slug:"/Events/onUrlLoadingError",permalink:"/documentation/es/docs/Events/onUrlLoadingError",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onUrlLoadingError",title:"On URL Loading Error"},sidebar:"docs",previous:{title:"On URL Filtering",permalink:"/documentation/es/docs/Events/onUrlFiltering"},next:{title:"On URL Resource Loading",permalink:"/documentation/es/docs/Events/onUrlResourceLoading"}},p={},u=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}],s={toc:u};function d(e){var{components:r}=e,n=a(e,["components"]);return(0,t.kt)("wrapper",o({},s,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Puede ser llamado por"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Definici\xf3n"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),"50"),(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("a",o({parentName:"td"},{href:"/documentation/es/docs/FormObjects/webAreaOverview"}),"\xc1rea Web")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Se ha producido un error al cargar la URL")))),(0,t.kt)("h2",o({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,t.kt)("p",null,"Este evento se genera cuando se detecta un error durante la carga de una URL."),(0,t.kt)("p",null,"Puede llamar al comando ",(0,t.kt)("inlineCode",{parentName:"p"},"WA GET LAST URL ERROR")," para obtener informaci\xf3n sobre el error."),(0,t.kt)("h3",o({},{id:"ver-tambi\xe9n"}),"Ver tambi\xe9n"),(0,t.kt)("p",null,(0,t.kt)("a",o({parentName:"p"},{href:"/documentation/es/docs/Events/onOpenExternalLink"}),(0,t.kt)("inlineCode",{parentName:"a"},"On Open External Link"))))}d.isMDXComponent=!0}}]);