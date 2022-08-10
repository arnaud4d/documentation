"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3022],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={id:"propertiesPlugIns",title:"Plug-ins"},s=void 0,l={unversionedId:"FormObjects/propertiesPlugIns",id:"version-19/FormObjects/propertiesPlugIns",title:"Plug-ins",description:"Advanced Properties",source:"@site/versioned_docs/version-19/FormObjects/properties_Plugins.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesPlugIns",permalink:"/docs/ja/19/FormObjects/propertiesPlugIns",draft:!1,tags:[],version:"19",frontMatter:{id:"propertiesPlugIns",title:"Plug-ins"},sidebar:"docs",previous:{title:"Picture",permalink:"/docs/ja/19/FormObjects/propertiesPicture"},next:{title:"Print",permalink:"/docs/ja/19/FormObjects/propertiesPrint"}},c={},u=[{value:"Advanced Properties",id:"advanced-properties",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"advanced-properties"},"Advanced Properties"),(0,a.kt)("p",null,"If advanced options are provided by the author of the plug-in, an ",(0,a.kt)("strong",{parentName:"p"},"Advanced Properties")," button may be enabled in the Property list. In this case, you can click this button to set these options, usually through a custom dialog box."),(0,a.kt)("p",null,"Because the Advanced properties feature is under the control of the author of the plug-in, information about these Advanced options is the responsibility of the distributor of the plug-in."),(0,a.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"customProperties"),(0,a.kt)("td",{parentName:"tr",align:null},"text"),(0,a.kt)("td",{parentName:"tr",align:null},"Plugin specific properties, passed to plugin as a JSON string if an object, or as a binary buffer if a base64 encoded string")))),(0,a.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/ja/19/FormObjects/pluginAreaOverview"},"Plug-in Area")))}m.isMDXComponent=!0}}]);