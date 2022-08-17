"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},24041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>O,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e};const u={id:"onAfterSort",title:"On After Sort"},d=void 0,m={unversionedId:"Events/onAfterSort",id:"version-19-R6/Events/onAfterSort",title:"On After Sort",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onAfterSort.md",sourceDirName:"Events",slug:"/Events/onAfterSort",permalink:"/docs/es/Events/onAfterSort",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onAfterSort",title:"On After Sort"},sidebar:"docs",previous:{title:"On After Keystroke",permalink:"/docs/es/Events/onAfterKeystroke"},next:{title:"On Alternative Click",permalink:"/docs/es/Events/onAlternativeClick"}},b={},v=[{value:"Description",id:"description",level:2}],y={toc:v};function O(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},y),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Can be called by"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"30"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("a",f({parentName:"td"},{href:"/docs/es/FormObjects/listboxOverview"}),"List Box")," - ",(0,n.kt)("a",f({parentName:"td"},{href:"/docs/es/FormObjects/listboxOverview#list-box-columns"}),"List Box Column")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"A standard sort has just been carried out in a list box column.")))),(0,n.kt)("h2",f({},{id:"description"}),"Description"),(0,n.kt)("p",null,"This event is generated just after a standard sort is performed (",(0,n.kt)("em",{parentName:"p"},"i.e.")," it is NOT generated if $0 returns -1 in the ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/es/Events/onHeaderClick"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Header Click"))," event). This mechanism is useful for storing the directions of the last sort performed by the user. In this event, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Self")," command returns a pointer to the variable of the sorted column header."))}O.isMDXComponent=!0}}]);