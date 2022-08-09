"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||s[u]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"onSelectionChange",title:"On Selection Change"},c=void 0,d={unversionedId:"Events/onSelectionChange",id:"Events/onSelectionChange",title:"On Selection Change",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onSelectionChange.md",sourceDirName:"Events",slug:"/Events/onSelectionChange",permalink:"/docs/ja/docs/next/Events/onSelectionChange",draft:!1,tags:[],version:"current",frontMatter:{id:"onSelectionChange",title:"On Selection Change"},sidebar:"docs",previous:{title:"On Scroll",permalink:"/docs/ja/docs/next/Events/onScroll"},next:{title:"On Timer",permalink:"/docs/ja/docs/next/Events/onTimer"}},p={},s=[{value:"Description",id:"description",level:2},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Example",id:"example",level:4},{value:"List form",id:"list-form",level:3},{value:"Hierarchical list",id:"hierarchical-list",level:3},{value:"Input &amp; 4D Write Pro",id:"input--4d-write-pro",level:3},{value:"List box",id:"list-box",level:3}],m={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"31"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ja/docs/next/FormObjects/viewProAreaOverview"},"4D View Pro area")," - ",(0,l.kt)("a",{parentName:"td",href:"/docs/ja/docs/next/FormObjects/writeProAreaOverview"},"4D Write Pro area")," - Form - ",(0,l.kt)("a",{parentName:"td",href:"/docs/ja/docs/next/FormObjects/listOverview"},"Hierarchical List")," - ",(0,l.kt)("a",{parentName:"td",href:"/docs/ja/docs/next/FormObjects/inputOverview"},"Input")," - ",(0,l.kt)("a",{parentName:"td",href:"/docs/ja/docs/next/FormObjects/listboxOverview"},"List Box")),(0,l.kt)("td",{parentName:"tr",align:null},"The selection in the object is modified")))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"This event can be generated in different contexts."),(0,l.kt)("h3",{id:"4d-view-pro"},"4D View Pro"),(0,l.kt)("p",null,"The current selection of rows or columns is modified. In this context, the ",(0,l.kt)("a",{parentName:"p",href:"/docs/ja/docs/next/Events/overview#event-object"},"event object")," returned by the ",(0,l.kt)("inlineCode",{parentName:"p"},"FORM Event")," command contains:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"longint"),(0,l.kt)("td",{parentName:"tr",align:null},"31")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},'"On Selection Change"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"objectName"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"4D View Pro area name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sheetName"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the sheet of the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oldSelections"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell range before change")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newSelections"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell range after change")))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' If(FORM Event.code=On Selection Change)\n    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))\n    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))\n End if\n')),(0,l.kt)("h3",{id:"list-form"},"List form"),(0,l.kt)("p",null,"The current record or the current selection of rows is modified in a list form. "),(0,l.kt)("h3",{id:"hierarchical-list"},"Hierarchical list"),(0,l.kt)("p",null,"This event is generated every time the selection in the hierarchical list is modified after a mouse click or keystroke."),(0,l.kt)("h3",{id:"input--4d-write-pro"},"Input & 4D Write Pro"),(0,l.kt)("p",null,"The text selection or the position of the cursor in the area is modified following a click or a keystroke."),(0,l.kt)("h3",{id:"list-box"},"List box"),(0,l.kt)("p",null,"This event is generated each time the current selection of rows or columns of the list box is modified."))}u.isMDXComponent=!0}}]);