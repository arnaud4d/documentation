"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"onScroll",title:"On Scroll"},c=void 0,s={unversionedId:"Events/onScroll",id:"Events/onScroll",title:"On Scroll",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onScroll.md",sourceDirName:"Events",slug:"/Events/onScroll",permalink:"/main/docs/next/Events/onScroll",draft:!1,tags:[],version:"current",frontMatter:{id:"onScroll",title:"On Scroll"},sidebar:"docs",previous:{title:"On Row Resize",permalink:"/main/docs/next/Events/onRowResize"},next:{title:"On Selection Change",permalink:"/main/docs/next/Events/onSelectionChange"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Picture input",id:"picture-input",level:3},{value:"List box",id:"list-box",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"59"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/main/docs/next/FormObjects/inputOverview"},"Input")," of the ",(0,a.kt)("inlineCode",{parentName:"td"},"picture")," ",(0,a.kt)("a",{parentName:"td",href:"/main/docs/next/FormObjects/propertiesObject#type"},"Type")," - ",(0,a.kt)("a",{parentName:"td",href:"/main/docs/next/FormObjects/listboxOverview"},"List Box")),(0,a.kt)("td",{parentName:"tr",align:null},"The user scrolls the contents of a picture object or list box using the mouse or keyboard.")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This event can be generated in the context of a picture input or a list box."),(0,a.kt)("p",null,"This event is triggered after any other user event related to the scrolling action (",(0,a.kt)("a",{parentName:"p",href:"/main/docs/next/Events/onClicked"},"On Clicked"),", ",(0,a.kt)("a",{parentName:"p",href:"/main/docs/next/Events/onAfterKeystroke"},"On After Keystroke"),", etc.). The event is only generated in the object method (not in the form method). "),(0,a.kt)("p",null,"The event is triggered when the scroll is the result of a user action: using the scroll bars and/or cursors, using the mouse wheel or ",(0,a.kt)("a",{parentName:"p",href:"/main/docs/next/FormObjects/propertiesAppearance#vertical-scroll-bar"},"the keyboard"),". It is not generated when the object is scrolled due to the execution of the ",(0,a.kt)("inlineCode",{parentName:"p"},"OBJECT SET SCROLL POSITION")," command. "),(0,a.kt)("h3",{id:"picture-input"},"Picture input"),(0,a.kt)("p",null,"The event is generated as soon as a user scrolls a picture within the picture input (field or variable) that contains it. You can scroll the contents of a picture area when the size of the area is smaller than its contents and the ",(0,a.kt)("a",{parentName:"p",href:"/main/docs/next/FormObjects/propertiesDisplay#picture-format"},"display format"),' is "Truncated (non Centered)". '),(0,a.kt)("h3",{id:"list-box"},"List box"),(0,a.kt)("p",null,"The event is generated as soon as a user scrolls the rows or columns of the list box."))}m.isMDXComponent=!0}}]);