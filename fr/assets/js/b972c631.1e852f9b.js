"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"onColumnResize",title:"On Column Resize"},s=void 0,m={unversionedId:"Events/onColumnResize",id:"Events/onColumnResize",title:"On Column Resize",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onColumnResize.md",sourceDirName:"Events",slug:"/Events/onColumnResize",permalink:"/docs/fr/next/Events/onColumnResize",draft:!1,tags:[],version:"current",frontMatter:{id:"onColumnResize",title:"On Column Resize"},sidebar:"docs",previous:{title:"On Column Moved",permalink:"/docs/fr/next/Events/onColumnMoved"},next:{title:"On Data Change",permalink:"/docs/fr/next/Events/onDataChange"}},p={},u=[{value:"Description",id:"description",level:2},{value:"List Box",id:"list-box",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Example",id:"example",level:4}],d={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"33"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/fr/next/FormObjects/viewProAreaOverview"},"4D View Pro Area")," - ",(0,l.kt)("a",{parentName:"td",href:"/docs/fr/next/FormObjects/listboxOverview"},"List Box")," - ",(0,l.kt)("a",{parentName:"td",href:"/docs/fr/next/FormObjects/listboxOverview#list-box-columns"},"List Box Column")),(0,l.kt)("td",{parentName:"tr",align:null},"The width of a column is modified directly by the user or consequently to a form window resize")))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("h3",{id:"list-box"},"List Box"),(0,l.kt)("p",null,'This event is generated when the width of a column in the list box is modified by a user. The event is triggered "live", ',(0,l.kt)("em",{parentName:"p"},"i.e."),", sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the ",(0,l.kt)("inlineCode",{parentName:"p"},"RESIZE FORM WINDOW")," command)."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"On Column Resize")," event is not triggered when a ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/next/FormObjects/propertiesResizingOptions#about-the-fake-blank-column"},"fake column")," is resized.")),(0,l.kt)("h3",{id:"4d-view-pro"},"4D View Pro"),(0,l.kt)("p",null,"This event is generated when the width of a column is modified by a user. On this context, the ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/next/Events/overview#event-object"},"event object")," returned by the ",(0,l.kt)("inlineCode",{parentName:"p"},"FORM Event")," command contains:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"longint"),(0,l.kt)("td",{parentName:"tr",align:null},"On Column Resize")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},'"On Column Resize"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"objectName"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"4D View Pro area name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sheetName"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the sheet of the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"range"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell range of the columns whose widths have changed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"True if the row header column (first column) is resized, else false")))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' If(FORM Event.code=On Column Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))\n End if\n')))}c.isMDXComponent=!0}}]);