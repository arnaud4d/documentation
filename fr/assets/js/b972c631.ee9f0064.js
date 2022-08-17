"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"onColumnResize",title:"On Column Resize"},i=void 0,s={unversionedId:"Events/onColumnResize",id:"Events/onColumnResize",title:"On Column Resize",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onColumnResize.md",sourceDirName:"Events",slug:"/Events/onColumnResize",permalink:"/docs/fr/next/Events/onColumnResize",draft:!1,tags:[],version:"current",frontMatter:{id:"onColumnResize",title:"On Column Resize"},sidebar:"docs",previous:{title:"On Column Moved",permalink:"/docs/fr/next/Events/onColumnMoved"},next:{title:"On Data Change",permalink:"/docs/fr/next/Events/onDataChange"}},p={},u=[{value:"Description",id:"description",level:2},{value:"List Box",id:"list-box",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Example",id:"example",level:4}],m={toc:u};function c(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"33"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/fr/next/FormObjects/viewProAreaOverview"}),"4D View Pro Area")," - ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/fr/next/FormObjects/listboxOverview"}),"List Box")," - ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/fr/next/FormObjects/listboxOverview#list-box-columns"}),"List Box Column")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The width of a column is modified directly by the user or consequently to a form window resize")))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("h3",a({},{id:"list-box"}),"List Box"),(0,r.kt)("p",null,'This event is generated when the width of a column in the list box is modified by a user. The event is triggered "live", ',(0,r.kt)("em",{parentName:"p"},"i.e."),", sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the ",(0,r.kt)("inlineCode",{parentName:"p"},"RESIZE FORM WINDOW")," command)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Column Resize")," event is not triggered when a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/next/FormObjects/propertiesResizingOptions#about-the-fake-blank-column"}),"fake column")," is resized.")),(0,r.kt)("h3",a({},{id:"4d-view-pro"}),"4D View Pro"),(0,r.kt)("p",null,"This event is generated when the width of a column is modified by a user. On this context, the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/next/Events/overview#event-object"}),"event object")," returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"FORM Event")," command contains:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"code"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"longint"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"On Column Resize")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"description"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"On Column Resize"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"objectName"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"4D View Pro area name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"sheetName"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Name of the sheet of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"range"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"object"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Cell range of the columns whose widths have changed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"header"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"True if the row header column (first column) is resized, else false")))),(0,r.kt)("h4",a({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' If(FORM Event.code=On Column Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))\n End if\n')))}c.isMDXComponent=!0}}]);