"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"onUrlLoadingError",title:"On URL Loading Error"},c=void 0,p={unversionedId:"Events/onUrlLoadingError",id:"Events/onUrlLoadingError",title:"On URL Loading Error",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onUrlLoadingError.md",sourceDirName:"Events",slug:"/Events/onUrlLoadingError",permalink:"/pt/docs/next/Events/onUrlLoadingError",draft:!1,tags:[],version:"current",frontMatter:{id:"onUrlLoadingError",title:"On URL Loading Error"},sidebar:"docs",previous:{title:"On URL Filtering",permalink:"/pt/docs/next/Events/onUrlFiltering"},next:{title:"On URL Resource Loading",permalink:"/pt/docs/next/Events/onUrlResourceLoading"}},d={},s=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"50"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pt/docs/next/FormObjects/webAreaOverview"},"Web Area")),(0,a.kt)("td",{parentName:"tr",align:null},"An error occurred when the URL was loading")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This event is generated when an error is detected during the loading of a URL."),(0,a.kt)("p",null,"You can call the ",(0,a.kt)("inlineCode",{parentName:"p"},"WA GET LAST URL ERROR")," command in order to get information about the error."),(0,a.kt)("h3",{id:"see-also"},"See also"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pt/docs/next/Events/onOpenExternalLink"},(0,a.kt)("inlineCode",{parentName:"a"},"On Open External Link"))))}m.isMDXComponent=!0}}]);