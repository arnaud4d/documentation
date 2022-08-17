"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,b=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(b,p(p({ref:t},u),{},{components:r})):n.createElement(b,p({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&u(e,r,t[r]);return e};const m={id:"propertiesCrop",title:"Crop"},d=void 0,b={unversionedId:"FormObjects/propertiesCrop",id:"version-18/FormObjects/propertiesCrop",title:"Crop",description:"Columns",source:"@site/versioned_docs/version-18/FormObjects/properties_Crop.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesCrop",permalink:"/docs/18/FormObjects/propertiesCrop",draft:!1,tags:[],version:"18",frontMatter:{id:"propertiesCrop",title:"Crop"},sidebar:"docs",previous:{title:"Coordinates & Sizing",permalink:"/docs/18/FormObjects/propertiesCoordinatesAndSizing"},next:{title:"Data Source",permalink:"/docs/18/FormObjects/propertiesDataSource"}},f={},O=[{value:"Columns",id:"columns",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Rows",id:"rows",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4}],v={toc:O};function k(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},v),u),a(t,p({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h2",s({},{id:"columns"}),"Columns"),(0,n.kt)("p",null,"Sets the number of columns in a thumbnail table."),(0,n.kt)("h4",s({},{id:"json-grammar"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Data Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"columnCount"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"integer"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"minimum: 1")))),(0,n.kt)("h4",s({},{id:"objects-supported"}),"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/docs/18/FormObjects/pictureButtonOverview"}),"Picture Button")," - ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/18/FormObjects/buttonGridOverview"}),"Button Grid")," - ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/18/FormObjects/picturePopupMenuOverview"}),"Picture Pop-up Menu")),(0,n.kt)("hr",null),(0,n.kt)("h2",s({},{id:"rows"}),"Rows"),(0,n.kt)("p",null,"Sets the number of rows in a thumbnail table."),(0,n.kt)("h4",s({},{id:"json-grammar-1"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Data Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"rowCount"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"integer"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"minimum: 1")))),(0,n.kt)("h4",s({},{id:"objects-supported-1"}),"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/docs/18/FormObjects/pictureButtonOverview"}),"Picture Button")," - ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/18/FormObjects/buttonGridOverview"}),"Button Grid")," - ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/18/FormObjects/picturePopupMenuOverview"}),"Picture Pop-up Menu")))}k.isMDXComponent=!0}}]);