"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={id:"onMenuSelected",title:"On Menu Selected"},c=void 0,u={unversionedId:"Events/onMenuSelected",id:"Events/onMenuSelected",title:"On Menu Selected",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onMenuSelected.md",sourceDirName:"Events",slug:"/Events/onMenuSelected",permalink:"/docs/pt/next/Events/onMenuSelected",draft:!1,tags:[],version:"current",frontMatter:{id:"onMenuSelected",title:"On Menu Selected"},sidebar:"docs",previous:{title:"On Losing focus",permalink:"/docs/pt/next/Events/onLosingFocus"},next:{title:"On Mouse Enter",permalink:"/docs/pt/next/Events/onMouseEnter"}},p={},s=[{value:"Description",id:"description",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"18"),(0,a.kt)("td",{parentName:"tr",align:null},"Form"),(0,a.kt)("td",{parentName:"tr",align:null},"A menu item has been chosen in the associated menu bar")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"On Menu Selected")," event is sent to the form method when a command of a menu bar associated to the form is selected. You can then call the ",(0,a.kt)("inlineCode",{parentName:"p"},"Menu selected")," language command to test the selected menu."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can associate a menu bar with a form in the Form properties. The menus on a form menu bar are appended to the current menu bar when the form is displayed as an output form in the Application environment.")))}m.isMDXComponent=!0}}]);