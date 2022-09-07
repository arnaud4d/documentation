"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"onCollapse",title:"On Collapse"},i=void 0,c={unversionedId:"Events/onCollapse",id:"version-19-R6/Events/onCollapse",title:"On Collapse",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onCollapse.md",sourceDirName:"Events",slug:"/Events/onCollapse",permalink:"/documentation/docs/Events/onCollapse",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onCollapse",title:"On Collapse"},sidebar:"docs",previous:{title:"On Close Detail",permalink:"/documentation/docs/Events/onCloseDetail"},next:{title:"On Column Moved",permalink:"/documentation/docs/Events/onColumnMoved"}},s={},p=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],u={toc:p};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"44"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("a",o({parentName:"td"},{href:"/documentation/docs/FormObjects/listOverview#overview"}),"Hierarchical List")," - ",(0,r.kt)("a",o({parentName:"td"},{href:"/documentation/docs/FormObjects/listboxOverview"}),"List Box")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"An element of the hierarchical list or hierarchical list box has been collapsed using a click or a keystroke")))),(0,r.kt)("h2",o({},{id:"description"}),"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"/documentation/docs/FormObjects/listOverview"}),"Hierarchical list"),": This event is generated every time an element of the hierarchical list is collapsed with a mouse click or keystroke."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"/documentation/docs/FormObjects/listboxOverview#hierarchical-list-boxes"}),"Hierarchical list boxes"),": This event is generated when a row of the hierarchical list box is collapsed.")),(0,r.kt)("h3",o({},{id:"see-also"}),"See also"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/documentation/docs/Events/onExpand"}),"On Expand")))}d.isMDXComponent=!0}}]);