"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,v=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const f={id:"onDeactivate",title:"On Deactivate"},d=void 0,v={unversionedId:"Events/onDeactivate",id:"version-19-R6/Events/onDeactivate",title:"On Deactivate",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onDeactivate.md",sourceDirName:"Events",slug:"/Events/onDeactivate",permalink:"/docs/es/Events/onDeactivate",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onDeactivate",title:"On Deactivate"},sidebar:"docs",previous:{title:"On Data Change",permalink:"/docs/es/Events/onDataChange"},next:{title:"On Delete Action",permalink:"/docs/es/Events/onDeleteAction"}},m={},b=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],y={toc:b};function O(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"12"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Form"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The form\u2019s window ceases to be the frontmost window")))),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"If the window of a form was the frontmost window, this event is called when the window is sent to the background."),(0,r.kt)("p",null,"This event applies to the form as a whole and not to a particular object. Consequently, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Deactivate")," form event property is selected, only the form will have its form method called."),(0,r.kt)("h3",u({},{id:"see-also"}),"See also"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/docs/es/Events/onActivate"}),"On Activate")))}O.isMDXComponent=!0}}]);