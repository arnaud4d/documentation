"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"onActivate",title:"On Activate"},l=void 0,s={unversionedId:"Events/onActivate",id:"Events/onActivate",title:"On Activate",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onActivate.md",sourceDirName:"Events",slug:"/Events/onActivate",permalink:"/docs/es/docs/next/Events/onActivate",draft:!1,tags:[],version:"current",frontMatter:{id:"onActivate",title:"On Activate"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/es/docs/next/Events/overview"},next:{title:"On After Edit",permalink:"/docs/es/docs/next/Events/onAfterEdit"}},p={},u=[{value:"Description",id:"description",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"Form"),(0,a.kt)("td",{parentName:"tr",align:null},"The form's window becomes the frontmost window or the subform's container gets the focus")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"If the window of a form was sent to the background, this event is called when the window becomes the frontmost window."),(0,a.kt)("p",null,"This event applies to the form as a whole and not to a particular object. Consequently, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"On Activate")," form event property is selected, only the form will have its form method called."),(0,a.kt)("p",null,"In the case of a subform, this event is passed to the subform when the container gets the focus (if it has the ",(0,a.kt)("a",{parentName:"p",href:"/docs/es/docs/next/FormObjects/propertiesEntry#focusable"},"focusable")," property)."))}d.isMDXComponent=!0}}]);