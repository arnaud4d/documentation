"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>u,metadata:()=>f,toc:()=>g});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e};const u={id:"onRowResize",title:"On Row Resize"},m=void 0,f={unversionedId:"Events/onRowResize",id:"Events/onRowResize",title:"On Row Resize",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onRowResize.md",sourceDirName:"Events",slug:"/Events/onRowResize",permalink:"/docs/pt/next/Events/onRowResize",draft:!1,tags:[],version:"current",frontMatter:{id:"onRowResize",title:"On Row Resize"},sidebar:"docs",previous:{title:"On Row Moved",permalink:"/docs/pt/next/Events/onRowMoved"},next:{title:"On Scroll",permalink:"/docs/pt/next/Events/onScroll"}},b={},g=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:4}],v={toc:g};function k(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},v),s),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"60"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/docs/pt/next/FormObjects/viewProAreaOverview"}),"4D View Pro Area")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"The height of a row is modified by a user with the mouse")))),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is generated when the height of a row is modified by a user in a 4D View Pro document. In this context, the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/pt/next/Events/overview#event-object"}),"event object")," returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"FORM Event")," command contains:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"code"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"longint"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"description"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),'"On Row Resize"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"objectName"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"4D View Pro area name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"sheetName"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Name of the sheet of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"range"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"object"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Cell range of the rows whose heights have changed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"header"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"True if the column header row (first row) is resized, else false")))),(0,r.kt)("h4",d({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' If(FORM Event.code=On Row Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))\n End if\n')))}k.isMDXComponent=!0}}]);