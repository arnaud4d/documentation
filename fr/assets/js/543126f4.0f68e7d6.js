"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>O,frontMatter:()=>d,metadata:()=>f,toc:()=>y});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e};const d={id:"onMenuSelected",title:"On Menu Selected"},m=void 0,f={unversionedId:"Events/onMenuSelected",id:"Events/onMenuSelected",title:"On Menu Selected",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onMenuSelected.md",sourceDirName:"Events",slug:"/Events/onMenuSelected",permalink:"/docs/fr/next/Events/onMenuSelected",draft:!1,tags:[],version:"current",frontMatter:{id:"onMenuSelected",title:"On Menu Selected"},sidebar:"docs",previous:{title:"On Losing focus",permalink:"/docs/fr/next/Events/onLosingFocus"},next:{title:"On Mouse Enter",permalink:"/docs/fr/next/Events/onMouseEnter"}},b={},y=[{value:"Description",id:"description",level:2}],v={toc:y};function O(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),p),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"18"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Form"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"A menu item has been chosen in the associated menu bar")))),(0,r.kt)("h2",s({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Menu Selected")," event is sent to the form method when a command of a menu bar associated to the form is selected. You can then call the ",(0,r.kt)("inlineCode",{parentName:"p"},"Menu selected")," language command to test the selected menu."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can associate a menu bar with a form in the Form properties. The menus on a form menu bar are appended to the current menu bar when the form is displayed as an output form in the Application environment.")))}O.isMDXComponent=!0}}]);