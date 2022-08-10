"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75441],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||s[f]||a;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3834:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"onUrlLoadingError",title:"On URL Loading Error"},c=void 0,p={unversionedId:"Events/onUrlLoadingError",id:"Events/onUrlLoadingError",title:"On URL Loading Error",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onUrlLoadingError.md",sourceDirName:"Events",slug:"/Events/onUrlLoadingError",permalink:"/docs/fr/next/Events/onUrlLoadingError",draft:!1,tags:[],version:"current",frontMatter:{id:"onUrlLoadingError",title:"On URL Loading Error"},sidebar:"docs",previous:{title:"On URL Filtering",permalink:"/docs/fr/next/Events/onUrlFiltering"},next:{title:"On URL Resource Loading",permalink:"/docs/fr/next/Events/onUrlResourceLoading"}},d={},s=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],u={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"50"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/fr/next/FormObjects/webAreaOverview"},"Web Area")),(0,a.kt)("td",{parentName:"tr",align:null},"An error occurred when the URL was loading")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This event is generated when an error is detected during the loading of a URL."),(0,a.kt)("p",null,"You can call the ",(0,a.kt)("inlineCode",{parentName:"p"},"WA GET LAST URL ERROR")," command in order to get information about the error."),(0,a.kt)("h3",{id:"see-also"},"See also"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/fr/next/Events/onOpenExternalLink"},(0,a.kt)("inlineCode",{parentName:"a"},"On Open External Link"))))}f.isMDXComponent=!0}}]);