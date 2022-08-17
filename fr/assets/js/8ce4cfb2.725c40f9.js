"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[772],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&c(e,r,t[r]);return e};const d={id:"propertiesPlugIns",title:"Plug-ins"},f=void 0,m={unversionedId:"FormObjects/propertiesPlugIns",id:"version-19-R6/FormObjects/propertiesPlugIns",title:"Plug-ins",description:"Advanced Properties",source:"@site/versioned_docs/version-19-R6/FormObjects/properties_Plugins.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesPlugIns",permalink:"/docs/fr/FormObjects/propertiesPlugIns",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"propertiesPlugIns",title:"Plug-ins"},sidebar:"docs",previous:{title:"Picture",permalink:"/docs/fr/FormObjects/propertiesPicture"},next:{title:"Print",permalink:"/docs/fr/FormObjects/propertiesPrint"}},b={},g=[{value:"Advanced Properties",id:"advanced-properties",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4}],v={toc:g};function y(e){var t,r=e,{components:o}=r,c=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),c),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h2",u({},{id:"advanced-properties"}),"Advanced Properties"),(0,n.kt)("p",null,"If advanced options are provided by the author of the plug-in, an ",(0,n.kt)("strong",{parentName:"p"},"Advanced Properties")," button may be enabled in the Property list. In this case, you can click this button to set these options, usually through a custom dialog box."),(0,n.kt)("p",null,"Because the Advanced properties feature is under the control of the author of the plug-in, information about these Advanced options is the responsibility of the distributor of the plug-in."),(0,n.kt)("h4",u({},{id:"json-grammar"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Data Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"customProperties"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Plugin specific properties, passed to plugin as a JSON string if an object, or as a binary buffer if a base64 encoded string")))),(0,n.kt)("h4",u({},{id:"objects-supported"}),"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/docs/fr/FormObjects/pluginAreaOverview"}),"Plug-in Area")))}y.isMDXComponent=!0}}]);