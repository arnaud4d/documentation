"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"onUrlFiltering",title:"On URL Filtering"},i=void 0,c={unversionedId:"Events/onUrlFiltering",id:"Events/onUrlFiltering",title:"On URL Filtering",description:"| Code | Can be called by                            | Defini\xe7\xe3o                         |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/Events/onUrlFiltering.md",sourceDirName:"Events",slug:"/Events/onUrlFiltering",permalink:"/docs/pt/next/Events/onUrlFiltering",draft:!1,tags:[],version:"current",frontMatter:{id:"onUrlFiltering",title:"On URL Filtering"},sidebar:"docs",previous:{title:"On Unload",permalink:"/docs/pt/next/Events/onUnload"},next:{title:"On URL Loading Error",permalink:"/docs/pt/next/Events/onUrlLoadingError"}},p={},u=[{value:"Descr\xe7\xe3o",id:"descr\xe7\xe3o",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}],s={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Defini\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"51"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/pt/next/FormObjects/webAreaOverview"}),"\xc1rea Web")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A URL was blocked by the Web area")))),(0,r.kt)("h2",a({},{id:"descr\xe7\xe3o"}),"Descr\xe7\xe3o"),(0,r.kt)("p",null,"This event is generated when the loading of a URL is blocked by the Web area because of a filter set up using the ",(0,r.kt)("inlineCode",{parentName:"p"},"WA SET URL FILTERS")," command."),(0,r.kt)("p",null,"You can find out the blocked URL using the ",(0,r.kt)("inlineCode",{parentName:"p"},"WA Get last filtered URL")," command."),(0,r.kt)("h3",a({},{id:"veja-tamb\xe9m"}),"Veja tamb\xe9m"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/next/Events/onOpenExternalLink"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Open External Link"))))}d.isMDXComponent=!0}}]);