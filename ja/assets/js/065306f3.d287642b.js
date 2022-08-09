"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"onPageChange",title:"On Page Change"},c=void 0,s={unversionedId:"Events/onPageChange",id:"version-19-R6/Events/onPageChange",title:"On Page Change",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onPageChange.md",sourceDirName:"Events",slug:"/Events/onPageChange",permalink:"/docs/ja/docs/Events/onPageChange",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onPageChange",title:"On Page Change"},sidebar:"docs",previous:{title:"On Outside Call",permalink:"/docs/ja/docs/Events/onOutsideCall"},next:{title:"On Plug in Area",permalink:"/docs/ja/docs/Events/onPlugInArea"}},p={},d=[{value:"Description",id:"description",level:2}],u={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"56"),(0,o.kt)("td",{parentName:"tr",align:null},"Form"),(0,o.kt)("td",{parentName:"tr",align:null},"The current page of the form is changed")))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This event is only available at the form level (it is called in the form method). It is generated each time the current page of the form changes (following a call to the ",(0,o.kt)("inlineCode",{parentName:"p"},"FORM GOTO PAGE")," command or a standard navigation action)."),(0,o.kt)("p",null,"Note that it is generated after the page is fully loaded, i.e. once all the objects it contains are initialized, including ",(0,o.kt)("a",{parentName:"p",href:"/docs/ja/docs/FormObjects/webAreaOverview"},"Web areas"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The only exception is 4D View Pro areas, for which you need to call the ",(0,o.kt)("a",{parentName:"p",href:"/docs/ja/docs/Events/onVpReady"},"On VP Ready")," specific event. ")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"On Page Change")," event is useful for executing code that requires all objects to be initialized beforehand. You can also use it to optimize the application by executing code (for example, a search) only after a specific page of the form is displayed and not just as soon as page 1 is loaded. If the user does not go to this page, the code is not executed."))}f.isMDXComponent=!0}}]);