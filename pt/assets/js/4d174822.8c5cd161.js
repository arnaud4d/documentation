"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,s=m["".concat(p,".").concat(g)]||m[g]||u[g]||l;return n?a.createElement(s,o(o({ref:t},d),{},{components:n})):a.createElement(s,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"onVpRangeChanged",title:"On VP Range Changed"},p=void 0,c={unversionedId:"Events/onVpRangeChanged",id:"Events/onVpRangeChanged",title:"On VP Range Changed",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onVpRangeChanged.md",sourceDirName:"Events",slug:"/Events/onVpRangeChanged",permalink:"/main/pt/docs/next/Events/onVpRangeChanged",draft:!1,tags:[],version:"current",frontMatter:{id:"onVpRangeChanged",title:"On VP Range Changed"},sidebar:"docs",previous:{title:"On Validate",permalink:"/main/pt/docs/next/Events/onValidate"},next:{title:"On VP Ready",permalink:"/main/pt/docs/next/Events/onVpReady"}},d={},u=[{value:"Description",id:"description",level:2}],m={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"61"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/main/pt/docs/next/FormObjects/viewProAreaOverview"},"4D View Pro Area")),(0,l.kt)("td",{parentName:"tr",align:null},"The 4D View Pro cell range has changed (e.g., a formula calculation, value removed from a cell, etc.)")))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"This event is generated when a change occurs within a cell range in the 4D View Pro document. "),(0,l.kt)("p",null,"The object returned by the FORM Event command contains:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"objectName"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"4D View Pro area name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"longint"),(0,l.kt)("td",{parentName:"tr",align:null},"On VP Range Changed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},'"On VP Range Changed"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sheetName"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the sheet of the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"range"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell range of the change")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"changedCells"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Range containing only the changed cells. It can be a combined range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"action"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of operation generating the event:",(0,l.kt)("li",null,'"clear" - A clear range value operation'),(0,l.kt)("li",null,'"dragDrop" - A drag and drop operation'),(0,l.kt)("li",null,'"dragFill" - A drag fill operation'),(0,l.kt)("li",null,'"evaluateFormula" - Setting a formula in a specified cell range'),(0,l.kt)("li",null,'"paste" - A paste operation'),(0,l.kt)("li",null,'"setArrayFormula" - Setting a formula in a specified cell range'),(0,l.kt)("li",null,'"sort" - Sorting a range of cells'))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"See also ",(0,l.kt)("a",{parentName:"p",href:"/main/pt/docs/next/Events/onAfterEdit"},"On After Edit"),".")))}g.isMDXComponent=!0}}]);