"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e};const d={id:"onCollapse",title:"On Collapse"},f=void 0,m={unversionedId:"Events/onCollapse",id:"Events/onCollapse",title:"On Collapse",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onCollapse.md",sourceDirName:"Events",slug:"/Events/onCollapse",permalink:"/docs/es/next/Events/onCollapse",draft:!1,tags:[],version:"current",frontMatter:{id:"onCollapse",title:"On Collapse"},sidebar:"docs",previous:{title:"On Close Detail",permalink:"/docs/es/next/Events/onCloseDetail"},next:{title:"On Column Moved",permalink:"/docs/es/next/Events/onColumnMoved"}},v={},b=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],O={toc:b};function y(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},O),p),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Can be called by"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"44"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/docs/es/next/FormObjects/listOverview#overview"}),"Hierarchical List")," - ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/es/next/FormObjects/listboxOverview"}),"List Box")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"An element of the hierarchical list or hierarchical list box has been collapsed using a click or a keystroke")))),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/es/next/FormObjects/listOverview"}),"Hierarchical list"),": This event is generated every time an element of the hierarchical list is collapsed with a mouse click or keystroke."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/es/next/FormObjects/listboxOverview#hierarchical-list-boxes"}),"Hierarchical list boxes"),": This event is generated when a row of the hierarchical list box is collapsed.")),(0,n.kt)("h3",u({},{id:"see-also"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/docs/es/next/Events/onExpand"}),"On Expand")))}y.isMDXComponent=!0}}]);