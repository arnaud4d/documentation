"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52860],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=i,v=c["".concat(o,".").concat(f)]||c[f]||d[f]||l;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},49782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={id:"savedfilter",title:"$savedfilter"},s=void 0,o={unversionedId:"REST/savedfilter",id:"version-19/REST/savedfilter",title:"$savedfilter",description:"Enregistre le filtre d\xe9fini par $filter lors de la cr\xe9ation d'un ensemble d'entit\xe9s (par exemple, $savedfilter=\"\")",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/$savedfilter.md",sourceDirName:"REST",slug:"/REST/savedfilter",permalink:"/docs/fr/19/REST/savedfilter",draft:!1,tags:[],version:"19",frontMatter:{id:"savedfilter",title:"$savedfilter"},sidebar:"docs",previous:{title:"$queryplan",permalink:"/docs/fr/19/REST/queryplan"},next:{title:"$savedorderby",permalink:"/docs/fr/19/REST/savedorderby"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],d={toc:u};function c(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",i({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Enregistre le filtre d\xe9fini par $filter lors de la cr\xe9ation d'un ensemble d'entit\xe9s (par exemple, ",(0,n.kt)("inlineCode",{parentName:"p"},'$savedfilter="{filter}"'),")"),(0,n.kt)("h2",i({},{id:"description"}),"Description"),(0,n.kt)("p",null,"Lorsque vous cr\xe9ez un ensemble d'entit\xe9s, vous pouvez, par s\xe9curit\xe9, enregistrer le filtre utilis\xe9 pour sa cr\xe9ation. Si l'ensemble d'entit\xe9s que vous avez cr\xe9\xe9 est supprim\xe9 du cache de 4D Server (en raison du timeout, du besoin d'espace sur le serveur ou de la suppression apr\xe8s avoir appel\xe9 ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19/REST/method#methodrelease"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=release")),")."),(0,n.kt)("p",null,"Utilisez ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," pour enregistrer le filtre que vous avez d\xe9fini lors de la cr\xe9ation de votre ensemble d'entit\xe9s, puis passez ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," avec votre appel, pour r\xe9cup\xe9rer \xe0 chaque fois l'ensemble d'entit\xe9s."),(0,n.kt)("p",null,"Si l'ensemble d'entit\xe9s n'est plus dans le cache de 4D Server, il sera recr\xe9\xe9 avec un nouveau timeout de 10 minutes. L'ensemble d'entit\xe9s sera actualis\xe9 (certaines entit\xe9s peuvent \xeatre incluses tandis que d'autres peuvent \xeatre supprim\xe9es) depuis la derni\xe8re fois qu'il a \xe9t\xe9 cr\xe9\xe9, s'il n'existait plus avant de le recr\xe9er."),(0,n.kt)("p",null,"Si vous avez utilis\xe9 \xe0 la fois ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," et"),(0,n.kt)("h2",i({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19/REST/savedorderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedorderby"))," dans votre appel lors de la cr\xe9ation d'un ensemble d'entit\xe9s et que vous en omettez un, le nouvel ensemble d'entit\xe9s, qui aura le m\xeame num\xe9ro de r\xe9f\xe9rence, le refl\xe9tera."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset')),(0,n.kt)("p",null,"Puis, lorsque vous acc\xe9dez \xe0 votre ensemble d'entit\xe9s, saisissez ce qui suit pour vous assurer que l'ensemble d'entit\xe9s est toujours valide :"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"')))}c.isMDXComponent=!0}}]);