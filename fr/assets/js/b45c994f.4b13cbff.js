"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>s});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"timeout",title:"$timeout"},l=void 0,u={unversionedId:"REST/timeout",id:"version-19-R6/REST/timeout",title:"$timeout",description:"D\xe9finit le nombre de secondes pour enregistrer un ensemble d'entit\xe9s dans le cache de 4D Server (par exemple, $timeout=1800)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/REST/$timeout.md",sourceDirName:"REST",slug:"/REST/timeout",permalink:"/documentation/fr/docs/REST/timeout",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"timeout",title:"$timeout"},sidebar:"docs",previous:{title:"$skip",permalink:"/documentation/fr/docs/REST/skip"},next:{title:"$top/$limit",permalink:"/documentation/fr/docs/REST/top_$limit"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],c={toc:s};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"D\xe9finit le nombre de secondes pour enregistrer un ensemble d'entit\xe9s dans le cache de 4D Server (par exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout=1800"),")"),(0,r.kt)("h2",o({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/documentation/fr/docs/REST/method#methodentityset"}),(0,r.kt)("inlineCode",{parentName:"a"},"$method=entityset")),", passez le nombre de secondes \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout"),". Par exemple, si vous souhaitez d\xe9finir le timeout sur 20 minutes, passez 1200. Par d\xe9faut, le timeout est de deux (2) heures."),(0,r.kt)("p",null,"Une fois le timeout d\xe9fini, chaque fois qu'un ensemble d'entit\xe9s est appel\xe9 (via ",(0,r.kt)("inlineCode",{parentName:"p"},"$method=entityset"),"), le timeout est recalcul\xe9 en fonction de l'heure courante et du timeout."),(0,r.kt)("p",null,"Une fois le timeout d\xe9fini, chaque fois qu'un ensemble d'entit\xe9s est appel\xe9 (via ",(0,r.kt)("inlineCode",{parentName:"p"},"$method=entityset"),"), le timeout est recalcul\xe9 en fonction de l'heure courante et du timeout."),(0,r.kt)("h2",o({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"Si un ensemble d'entit\xe9s est supprim\xe9 puis recr\xe9\xe9 \xe0 l'aide de ",(0,r.kt)("inlineCode",{parentName:"p"},"$method=entityset")," avec ",(0,r.kt)("a",o({parentName:"p"},{href:"/documentation/fr/docs/REST/savedfilter"}),(0,r.kt)("inlineCode",{parentName:"a"},"$savedfilter")),", le nouveau timeout par d\xe9faut est de 10 minutes, quel que soit le timeout que vous avez d\xe9fini lors de l'appel de ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200')))}m.isMDXComponent=!0}}]);