"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e};const m={id:"propertiesGridlines",title:"Gridlines"},d=void 0,b={unversionedId:"FormObjects/propertiesGridlines",id:"FormObjects/propertiesGridlines",title:"Gridlines",description:"Horizontal Line Color",source:"@site/docs/FormObjects/properties_Gridlines.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesGridlines",permalink:"/docs/fr/next/FormObjects/propertiesGridlines",draft:!1,tags:[],version:"current",frontMatter:{id:"propertiesGridlines",title:"Gridlines"},sidebar:"docs",previous:{title:"Footers",permalink:"/docs/fr/next/FormObjects/propertiesFooters"},next:{title:"Headers",permalink:"/docs/fr/next/FormObjects/propertiesHeaders"}},f={},O=[{value:"Horizontal Line Color",id:"horizontal-line-color",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Vertical Line Color",id:"vertical-line-color",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4}],y={toc:O};function v(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),c),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",u({},{id:"horizontal-line-color"}),"Horizontal Line Color"),(0,n.kt)("p",null,"Defines the color of the horizontal lines in a list box (gray by default)."),(0,n.kt)("h4",u({},{id:"json-grammar"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Data Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"horizontalLineStroke"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'any css value, "\'transparent", "automatic"')))),(0,n.kt)("h4",u({},{id:"objects-supported"}),"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/docs/fr/next/FormObjects/listboxOverview"}),"List Box")),(0,n.kt)("hr",null),(0,n.kt)("h2",u({},{id:"vertical-line-color"}),"Vertical Line Color"),(0,n.kt)("p",null,"Defines the color of the vertical lines in a list box (gray by default)."),(0,n.kt)("h4",u({},{id:"json-grammar-1"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Data Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"verticalLineStroke"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'any css value, "\'transparent", "automatic"')))),(0,n.kt)("h4",u({},{id:"objects-supported-1"}),"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/docs/fr/next/FormObjects/listboxOverview"}),"List Box")))}v.isMDXComponent=!0}}]);