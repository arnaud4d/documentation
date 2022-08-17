"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94495],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,b=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"binary",title:"$binary"},p=void 0,c={unversionedId:"REST/binary",id:"version-19-R6/REST/binary",title:"$binary",description:'Pass "true" to save the BLOB as a document (must also pass $expand=)',source:"@site/versioned_docs/version-19-R6/REST/$binary.md",sourceDirName:"REST",slug:"/REST/binary",permalink:"/docs/pt/REST/binary",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"binary",title:"$binary"},sidebar:"docs",previous:{title:"$attributes",permalink:"/docs/pt/REST/attributes"},next:{title:"$compute",permalink:"/docs/pt/REST/compute"}},l={},s=[{value:"Description",id:"description",level:2}],u={toc:s};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Pass "true" to save the BLOB as a document (must also pass ',(0,n.kt)("inlineCode",{parentName:"p"},"$expand={blobAttributeName}"),")"),(0,n.kt)("h2",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$binary")," allows you to save the BLOB as a document.  You must also use the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/REST/expand"}),(0,n.kt)("inlineCode",{parentName:"a"},"$expand"))," command in conjunction with it."),(0,n.kt)("p",null,"When you make the following request:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt\n")),(0,n.kt)("p",null,"You will be asked where to save the BLOB to disk:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(37364).Z,width:"459",height:"353"})))}d.isMDXComponent=!0},37364:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/binary-31d3b11dfbe0bcc90814f0d5800a53df.png"}}]);