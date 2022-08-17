"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33080],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e};const d={id:"onCloseDetail",title:"On Close Detail"},f=void 0,m={unversionedId:"Events/onCloseDetail",id:"version-19/Events/onCloseDetail",title:"On Close Detail",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onCloseDetail.md",sourceDirName:"Events",slug:"/Events/onCloseDetail",permalink:"/docs/es/19/Events/onCloseDetail",draft:!1,tags:[],version:"19",frontMatter:{id:"onCloseDetail",title:"On Close Detail"},sidebar:"docs",previous:{title:"On Close Box",permalink:"/docs/es/19/Events/onCloseBox"},next:{title:"On Collapse",permalink:"/docs/es/19/Events/onCollapse"}},b={},v=[{value:"Description",id:"description",level:2}],y={toc:v};function O(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),p),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Can be called by"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"26"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Form - ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/es/19/FormObjects/listboxOverview"}),"List Box")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"You left the detail form and are going back to the output form")))),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On Close Detail")," event can be used in the following contexts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Output forms"),": the detail form is closed and the user goes back to the list form. This event cannot be selected for project forms, it is only available with ",(0,n.kt)("strong",{parentName:"li"},"table forms"),".  "),(0,n.kt)("li",{parentName:"ul"},"List box of the ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/es/19/FormObjects/listboxOverview#selection-list-boxes"}),(0,n.kt)("strong",{parentName:"a"},"selection type")),": This event is generated when a record displayed in the ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/es/19/FormObjects/propertiesListBox#detail-form-name"}),"detail form")," associated with a selection type list box is about to be closed (regardless of whether or not the record was modified).")))}O.isMDXComponent=!0}}]);