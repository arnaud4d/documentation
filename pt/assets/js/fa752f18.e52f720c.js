"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43305],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40718:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))p.call(r,t)&&s(e,t,r[t]);return e};const u={id:"onUrlLoadingError",title:"On URL Loading Error"},f=void 0,m={unversionedId:"Events/onUrlLoadingError",id:"version-19-R6/Events/onUrlLoadingError",title:"On URL Loading Error",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onUrlLoadingError.md",sourceDirName:"Events",slug:"/Events/onUrlLoadingError",permalink:"/docs/pt/Events/onUrlLoadingError",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onUrlLoadingError",title:"On URL Loading Error"},sidebar:"docs",previous:{title:"On URL Filtering",permalink:"/docs/pt/Events/onUrlFiltering"},next:{title:"On URL Resource Loading",permalink:"/docs/pt/Events/onUrlResourceLoading"}},b={},v=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],g={toc:v};function O(e){var r,t=e,{components:o}=t,s=((e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=d(d({},g),s),a(r,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Can be called by"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"50"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/docs/pt/FormObjects/webAreaOverview"}),"Web Area")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"An error occurred when the URL was loading")))),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"This event is generated when an error is detected during the loading of a URL."),(0,n.kt)("p",null,"You can call the ",(0,n.kt)("inlineCode",{parentName:"p"},"WA GET LAST URL ERROR")," command in order to get information about the error."),(0,n.kt)("h3",d({},{id:"see-also"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/docs/pt/Events/onOpenExternalLink"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Open External Link"))))}O.isMDXComponent=!0}}]);