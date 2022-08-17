"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"onRowMoved",title:"On Row Moved"},l=void 0,s={unversionedId:"Events/onRowMoved",id:"version-19-R6/Events/onRowMoved",title:"On Row Moved",description:"| Code | Can be called by                                                                                                                                     | Definition                                            |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Events/onRowMoved.md",sourceDirName:"Events",slug:"/Events/onRowMoved",permalink:"/docs/es/Events/onRowMoved",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onRowMoved",title:"On Row Moved"},sidebar:"docs",previous:{title:"On Resize",permalink:"/docs/es/Events/onResize"},next:{title:"On Row Resize",permalink:"/docs/es/Events/onRowResize"}},c={},p=[{value:"Description",id:"description",level:2}],d={toc:p};function u(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"34"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("a",o({parentName:"td"},{href:"/docs/es/FormObjects/listboxOverview#array-list-boxes"}),"List Box of the array type")," - ",(0,r.kt)("a",o({parentName:"td"},{href:"/docs/es/FormObjects/listboxOverview#list-box-columns"}),"List Box Column")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"A list box row is moved by the user via drag and drop")))),(0,r.kt)("h2",o({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is generated when a row of the list box (",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/listboxOverview#array-list-boxes"}),"array type only"),") is moved by the user using drag and drop (",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAction#movable-rows"}),"if allowed"),". It is not generated if the row is dragged and then dropped in its initial location."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LISTBOX MOVED ROW NUMBER")," command returns the new position of the row."))}u.isMDXComponent=!0}}]);