"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(n),m=r,s=g["".concat(p,".").concat(m)]||g[m]||d[m]||l;return n?a.createElement(s,o(o({ref:t},u),{},{components:n})):a.createElement(s,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},62816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"onVpRangeChanged",title:"On VP Range Changed"},i=void 0,p={unversionedId:"Events/onVpRangeChanged",id:"version-19-R6/Events/onVpRangeChanged",title:"On VP Range Changed",description:"| Code | Can be called by                                        | Definition                                                                                            |",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/Events/onVpRangeChanged.md",sourceDirName:"Events",slug:"/Events/onVpRangeChanged",permalink:"/docs/ja/Events/onVpRangeChanged",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onVpRangeChanged",title:"On VP Range Changed"},sidebar:"docs",previous:{title:"On Validate",permalink:"/docs/ja/Events/onValidate"},next:{title:"On VP Ready",permalink:"/docs/ja/Events/onVpReady"}},c={},u=[{value:"Description",id:"description",level:2}],d={toc:u};function g(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Code"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Can be called by"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"61"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/ja/FormObjects/viewProAreaOverview"}),"4D View Pro Area")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The 4D View Pro cell range has changed (e.g., a formula calculation, value removed from a cell, etc.)")))),(0,a.kt)("h2",r({},{id:"description"}),"Description"),(0,a.kt)("p",null,"This event is generated when a change occurs within a cell range in the 4D View Pro document."),(0,a.kt)("p",null,"The object returned by the FORM Event command contains:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"objectName"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D View Pro area name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"code"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"longint"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On VP Range Changed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"description"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"On VP Range Changed"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sheetName"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Name of the sheet of the event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"range"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cell range of the change")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"changedCells"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Range containing only the changed cells. It can be a combined range.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"action"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The type of operation generating the event:",(0,a.kt)("li",null,'"clear" - A clear range value operation'),(0,a.kt)("li",null,'"dragDrop" - A drag and drop operation'),(0,a.kt)("li",null,'"dragFill" - A drag fill operation'),(0,a.kt)("li",null,'"evaluateFormula" - Setting a formula in a specified cell range'),(0,a.kt)("li",null,'"paste" - A paste operation'),(0,a.kt)("li",null,'"setArrayFormula" - Setting a formula in a specified cell range'),(0,a.kt)("li",null,'"sort" - Sorting a range of cells'))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"See also ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/Events/onAfterEdit"}),"On After Edit"),".")))}g.isMDXComponent=!0}}]);