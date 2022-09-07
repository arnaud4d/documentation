"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22249],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22892:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"propertiesGridlines",title:"Gridlines"},i=void 0,p={unversionedId:"FormObjects/propertiesGridlines",id:"version-18/FormObjects/propertiesGridlines",title:"Gridlines",description:"Cor linha horizontal",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/FormObjects/properties_Gridlines.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesGridlines",permalink:"/documentation/pt/docs/18/FormObjects/propertiesGridlines",draft:!1,tags:[],version:"18",frontMatter:{id:"propertiesGridlines",title:"Gridlines"},sidebar:"docs",previous:{title:"Footers",permalink:"/documentation/pt/docs/18/FormObjects/propertiesFooters"},next:{title:"Cabe\xe7alhos",permalink:"/documentation/pt/docs/18/FormObjects/propertiesHeaders"}},s={},c=[{value:"Cor linha horizontal",id:"cor-linha-horizontal",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Cor linha vertical",id:"cor-linha-vertical",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4}],u={toc:c};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"cor-linha-horizontal"}),"Cor linha horizontal"),(0,n.kt)("p",null,"Defines the color of the horizontal lines in a list box (gray by default)."),(0,n.kt)("h4",a({},{id:"json-grammar"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Nome"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Tipo de dados"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"horizontalLineStroke"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),'any css value, "\'transparent", "automatic"')))),(0,n.kt)("h4",a({},{id:"objects-supported"}),"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/documentation/pt/docs/18/FormObjects/listboxOverview"}),"List Box")),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"cor-linha-vertical"}),"Cor linha vertical"),(0,n.kt)("p",null,"Defines the color of the vertical lines in a list box (gray by default)."),(0,n.kt)("h4",a({},{id:"json-grammar-1"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Nome"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Tipo de dados"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"verticalLineStroke"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),'any css value, "\'transparent", "automatic"')))),(0,n.kt)("h4",a({},{id:"objects-supported-1"}),"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/documentation/pt/docs/18/FormObjects/listboxOverview"}),"List Box")))}d.isMDXComponent=!0}}]);