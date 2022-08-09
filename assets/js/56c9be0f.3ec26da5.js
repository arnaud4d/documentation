"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51778],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,b=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(b,p(p({ref:t},c),{},{components:r})):n.createElement(b,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],i={id:"propertiesCrop",title:"Crop"},l=void 0,u={unversionedId:"FormObjects/propertiesCrop",id:"version-19-R6/FormObjects/propertiesCrop",title:"Crop",description:"Columns",source:"@site/versioned_docs/version-19-R6/FormObjects/properties_Crop.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesCrop",permalink:"/docs/FormObjects/propertiesCrop",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"propertiesCrop",title:"Crop"},sidebar:"docs",previous:{title:"Coordinates & Sizing",permalink:"/docs/FormObjects/propertiesCoordinatesAndSizing"},next:{title:"Data Source",permalink:"/docs/FormObjects/propertiesDataSource"}},c={},s=[{value:"Columns",id:"columns",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Rows",id:"rows",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"columns"},"Columns"),(0,o.kt)("p",null,"Sets the number of columns in a thumbnail table."),(0,o.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"columnCount"),(0,o.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"minimum: 1")))),(0,o.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/FormObjects/pictureButtonOverview"},"Picture Button")," - ",(0,o.kt)("a",{parentName:"p",href:"/docs/FormObjects/buttonGridOverview"},"Button Grid")," - ",(0,o.kt)("a",{parentName:"p",href:"/docs/FormObjects/picturePopupMenuOverview"},"Picture Pop-up Menu")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"rows"},"Rows"),(0,o.kt)("p",null,"Sets the number of rows in a thumbnail table."),(0,o.kt)("h4",{id:"json-grammar-1"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"rowCount"),(0,o.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"minimum: 1")))),(0,o.kt)("h4",{id:"objects-supported-1"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/FormObjects/pictureButtonOverview"},"Picture Button")," - ",(0,o.kt)("a",{parentName:"p",href:"/docs/FormObjects/buttonGridOverview"},"Button Grid")," - ",(0,o.kt)("a",{parentName:"p",href:"/docs/FormObjects/picturePopupMenuOverview"},"Picture Pop-up Menu")))}d.isMDXComponent=!0}}]);