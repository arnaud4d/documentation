"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"onDeactivate",title:"On Deactivate"},c=void 0,s={unversionedId:"Events/onDeactivate",id:"Events/onDeactivate",title:"On Deactivate",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onDeactivate.md",sourceDirName:"Events",slug:"/Events/onDeactivate",permalink:"/docs/next/Events/onDeactivate",draft:!1,tags:[],version:"current",frontMatter:{id:"onDeactivate",title:"On Deactivate"},sidebar:"docs",previous:{title:"On Data Change",permalink:"/docs/next/Events/onDataChange"},next:{title:"On Delete Action",permalink:"/docs/next/Events/onDeleteAction"}},p={},u=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"12"),(0,o.kt)("td",{parentName:"tr",align:null},"Form"),(0,o.kt)("td",{parentName:"tr",align:null},"The form\u2019s window ceases to be the frontmost window")))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"If the window of a form was the frontmost window, this event is called when the window is sent to the background."),(0,o.kt)("p",null,"This event applies to the form as a whole and not to a particular object. Consequently, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Deactivate")," form event property is selected, only the form will have its form method called."),(0,o.kt)("h3",{id:"see-also"},"See also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/Events/onActivate"},"On Activate")))}f.isMDXComponent=!0}}]);