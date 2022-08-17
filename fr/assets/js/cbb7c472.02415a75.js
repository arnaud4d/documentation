"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35625],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e};const d={id:"onUrlResourceLoading",title:"On URL Resource Loading"},f=void 0,m={unversionedId:"Events/onUrlResourceLoading",id:"version-19-R6/Events/onUrlResourceLoading",title:"On URL Resource Loading",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onUrlResourceLoading.md",sourceDirName:"Events",slug:"/Events/onUrlResourceLoading",permalink:"/docs/fr/Events/onUrlResourceLoading",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onUrlResourceLoading",title:"On URL Resource Loading"},sidebar:"docs",previous:{title:"On URL Loading Error",permalink:"/docs/fr/Events/onUrlLoadingError"},next:{title:"On Validate",permalink:"/docs/fr/Events/onValidate"}},b={},v=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],y={toc:v};function O(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Can be called by"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"48"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/docs/fr/FormObjects/webAreaOverview"}),"Web Area")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A new resource is loaded in the Web area")))),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"This event is generated each time a new resource (picture, frame, etc.) is loaded on the current Web page."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/fr/FormObjects/propertiesWebArea#progression"}),"Progression")," variable associated with the area lets you find out the current state of the loading."),(0,n.kt)("h3",u({},{id:"see-also"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/docs/fr/Events/onOpenExternalLink"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Open External Link"))))}O.isMDXComponent=!0}}]);