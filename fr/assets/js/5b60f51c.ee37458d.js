"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"skip",title:"$skip"},l=void 0,p={unversionedId:"REST/skip",id:"version-19/REST/skip",title:"$skip",description:"D\xe9marre l'entit\xe9 d\xe9finie par ce num\xe9ro dans la collection (par exemple, $skip=10)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/$skip.md",sourceDirName:"REST",slug:"/REST/skip",permalink:"/documentation/fr/docs/19/REST/skip",draft:!1,tags:[],version:"19",frontMatter:{id:"skip",title:"$skip"},sidebar:"docs",previous:{title:"$savedorderby",permalink:"/documentation/fr/docs/19/REST/savedorderby"},next:{title:"$timeout",permalink:"/documentation/fr/docs/19/REST/timeout"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],u={toc:s};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"D\xe9marre l'entit\xe9 d\xe9finie par ce num\xe9ro dans la collection (par exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},"$skip=10"),")"),(0,r.kt)("h2",o({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$skip")," d\xe9finit l'entit\xe9 de la collection par laquelle commencer. Par d\xe9faut, la collection envoy\xe9e commence par la premi\xe8re entit\xe9. Pour commencer avec la 10e entit\xe9 de la collection, passez 10."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$skip")," est g\xe9n\xe9ralement utilis\xe9 avec"),(0,r.kt)("h2",o({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/documentation/fr/docs/19/REST/top_$limit"}),(0,r.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," pour naviguer dans une entity collection."),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20")))}m.isMDXComponent=!0}}]);