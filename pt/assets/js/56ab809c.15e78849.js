"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e};const d={id:"onScroll",title:"On Scroll"},f=void 0,m={unversionedId:"Events/onScroll",id:"version-19-R6/Events/onScroll",title:"On Scroll",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onScroll.md",sourceDirName:"Events",slug:"/Events/onScroll",permalink:"/docs/pt/Events/onScroll",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onScroll",title:"On Scroll"},sidebar:"docs",previous:{title:"On Row Resize",permalink:"/docs/pt/Events/onRowResize"},next:{title:"On Selection Change",permalink:"/docs/pt/Events/onSelectionChange"}},b={},h=[{value:"Description",id:"description",level:2},{value:"Picture input",id:"picture-input",level:3},{value:"List box",id:"list-box",level:3}],v={toc:h};function y(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Can be called by"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"59"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/docs/pt/FormObjects/inputOverview"}),"Input")," of the ",(0,n.kt)("inlineCode",{parentName:"td"},"picture")," ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/pt/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/pt/FormObjects/listboxOverview"}),"List Box")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The user scrolls the contents of a picture object or list box using the mouse or keyboard.")))),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"This event can be generated in the context of a picture input or a list box."),(0,n.kt)("p",null,"This event is triggered after any other user event related to the scrolling action (",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/pt/Events/onClicked"}),"On Clicked"),", ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/pt/Events/onAfterKeystroke"}),"On After Keystroke"),", etc.). The event is only generated in the object method (not in the form method). "),(0,n.kt)("p",null,"The event is triggered when the scroll is the result of a user action: using the scroll bars and/or cursors, using the mouse wheel or ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesAppearance#vertical-scroll-bar"}),"the keyboard"),". It is not generated when the object is scrolled due to the execution of the ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT SET SCROLL POSITION")," command. "),(0,n.kt)("h3",u({},{id:"picture-input"}),"Picture input"),(0,n.kt)("p",null,"The event is generated as soon as a user scrolls a picture within the picture input (field or variable) that contains it. You can scroll the contents of a picture area when the size of the area is smaller than its contents and the ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesDisplay#picture-format"}),"display format"),' is "Truncated (non Centered)". '),(0,n.kt)("h3",u({},{id:"list-box"}),"List box"),(0,n.kt)("p",null,"The event is generated as soon as a user scrolls the rows or columns of the list box."))}y.isMDXComponent=!0}}]);