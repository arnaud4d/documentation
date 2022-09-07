"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"binary",title:"$binary"},c=void 0,l={unversionedId:"REST/binary",id:"version-19/REST/binary",title:"$binary",description:'Pass "true" to save the BLOB as a document (must also pass $expand=)',source:"@site/versioned_docs/version-19/REST/$binary.md",sourceDirName:"REST",slug:"/REST/binary",permalink:"/documentation/docs/19/REST/binary",draft:!1,tags:[],version:"19",frontMatter:{id:"binary",title:"$binary"},sidebar:"docs",previous:{title:"$attributes",permalink:"/documentation/docs/19/REST/attributes"},next:{title:"$compute",permalink:"/documentation/docs/19/REST/compute"}},p={},s=[{value:"Description",id:"description",level:2}],u={toc:s};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Pass "true" to save the BLOB as a document (must also pass ',(0,r.kt)("inlineCode",{parentName:"p"},"$expand={blobAttributeName}"),")"),(0,r.kt)("h2",o({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$binary")," allows you to save the BLOB as a document.  You must also use the ",(0,r.kt)("a",o({parentName:"p"},{href:"/documentation/docs/19/REST/expand"}),(0,r.kt)("inlineCode",{parentName:"a"},"$expand"))," command in conjunction with it."),(0,r.kt)("p",null,"When you make the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt\n")),(0,r.kt)("p",null,"You will be asked where to save the BLOB to disk:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(52514).Z,width:"459",height:"353"})))}d.isMDXComponent=!0},52514:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/binary-31d3b11dfbe0bcc90814f0d5800a53df.png"}}]);