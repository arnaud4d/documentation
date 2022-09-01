"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,y=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"skip",title:"$skip"},a=void 0,p={unversionedId:"REST/skip",id:"REST/skip",title:"$skip",description:"Starts the entity defined by this number in the collection (e.g., $skip=10)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/REST/$skip.md",sourceDirName:"REST",slug:"/REST/skip",permalink:"/docs/pt/next/REST/skip",draft:!1,tags:[],version:"current",frontMatter:{id:"skip",title:"$skip"},sidebar:"docs",previous:{title:"$savedorderby",permalink:"/docs/pt/next/REST/savedorderby"},next:{title:"$timeout",permalink:"/docs/pt/next/REST/timeout"}},c={},s=[{value:"Descr\xe7\xe3o",id:"descr\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],u={toc:s};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starts the entity defined by this number in the collection (",(0,r.kt)("em",{parentName:"p"},"e.g."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$skip=10"),")"),(0,r.kt)("h2",o({},{id:"descr\xe7\xe3o"}),"Descr\xe7\xe3o"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$skip")," defines which entity in the collection to start with. By default, the collection sent starts with the first entity. To start with the 10th entity in the collection, pass 10."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$skip"),"  is generally used in conjunction with ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/REST/top_$limit"}),(0,r.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," to navigate through an entity collection."),(0,r.kt)("h2",o({},{id:"exemplo"}),"Exemplo"),(0,r.kt)("p",null,"In the following example, we go to the 20th entity in our entity set:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20")))}f.isMDXComponent=!0}}]);