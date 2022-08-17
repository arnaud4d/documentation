"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>f,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e};const d={id:"onOutsideCall",title:"On Outside Call"},f=void 0,m={unversionedId:"Events/onOutsideCall",id:"Events/onOutsideCall",title:"On Outside Call",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onOutsideCall.md",sourceDirName:"Events",slug:"/Events/onOutsideCall",permalink:"/docs/pt/next/Events/onOutsideCall",draft:!1,tags:[],version:"current",frontMatter:{id:"onOutsideCall",title:"On Outside Call"},sidebar:"docs",previous:{title:"On Open External Link",permalink:"/docs/pt/next/Events/onOpenExternalLink"},next:{title:"On Page Change",permalink:"/docs/pt/next/Events/onPageChange"}},O={},b=[{value:"Description",id:"description",level:2}],v={toc:b};function y(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},v),s),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"10"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Form"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The form received a ",(0,r.kt)("inlineCode",{parentName:"td"},"POST OUTSIDE CALL")," call")))),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is called when the form is called from another process through the ",(0,r.kt)("inlineCode",{parentName:"p"},"POST OUTSIDE CALL")," command."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Outside Call")," event modifies the entry context of the receiving input form. In particular, if a field was being edited, the ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/pt/next/Events/onDataChange"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Data Change"))," event is generated.")))}y.isMDXComponent=!0}}]);