"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,y=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={id:"skip",title:"$skip"},p=void 0,l={unversionedId:"REST/skip",id:"version-18/REST/skip",title:"$skip",description:"Starts the entity defined by this number in the collection (e.g., $skip=10)",source:"@site/versioned_docs/version-18/REST/$skip.md",sourceDirName:"REST",slug:"/REST/skip",permalink:"/docs/pt/18/REST/skip",draft:!1,tags:[],version:"18",frontMatter:{id:"skip",title:"$skip"},sidebar:"docs",previous:{title:"$savedorderby",permalink:"/docs/pt/18/REST/savedorderby"},next:{title:"$timeout",permalink:"/docs/pt/18/REST/timeout"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],u={toc:s};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starts the entity defined by this number in the collection (",(0,r.kt)("em",{parentName:"p"},"e.g."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$skip=10"),")\t"),(0,r.kt)("h2",i({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$skip")," defines which entity in the collection to start with. By default, the collection sent starts with the first entity. To start with the 10th entity in the collection, pass 10."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$skip"),"  is generally used in conjunction with ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/pt/18/REST/top_$limit"}),(0,r.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," to navigate through an entity collection."),(0,r.kt)("h2",i({},{id:"example"}),"Example"),(0,r.kt)("p",null,"In the following example, we go to the 20th entity in our entity set:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20")))}f.isMDXComponent=!0}}]);