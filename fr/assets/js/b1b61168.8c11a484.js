"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"onRowResize",title:"On Row Resize"},p=void 0,c={unversionedId:"Events/onRowResize",id:"Events/onRowResize",title:"On Row Resize",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onRowResize.md",sourceDirName:"Events",slug:"/Events/onRowResize",permalink:"/main/fr/docs/next/Events/onRowResize",draft:!1,tags:[],version:"current",frontMatter:{id:"onRowResize",title:"On Row Resize"},sidebar:"docs",previous:{title:"On Row Moved",permalink:"/main/fr/docs/next/Events/onRowMoved"},next:{title:"On Scroll",permalink:"/main/fr/docs/next/Events/onScroll"}},d={},m=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:4}],s={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/main/fr/docs/next/FormObjects/viewProAreaOverview"},"4D View Pro Area")),(0,l.kt)("td",{parentName:"tr",align:null},"The height of a row is modified by a user with the mouse")))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"This event is generated when the height of a row is modified by a user in a 4D View Pro document. In this context, the ",(0,l.kt)("a",{parentName:"p",href:"/main/fr/docs/next/Events/overview#event-object"},"event object")," returned by the ",(0,l.kt)("inlineCode",{parentName:"p"},"FORM Event")," command contains:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"longint"),(0,l.kt)("td",{parentName:"tr",align:null},"60")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},'"On Row Resize"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"objectName"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"4D View Pro area name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sheetName"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the sheet of the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"range"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell range of the rows whose heights have changed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"True if the column header row (first row) is resized, else false")))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' If(FORM Event.code=On Row Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))\n End if\n')))}u.isMDXComponent=!0}}]);