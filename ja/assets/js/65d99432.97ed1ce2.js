"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"binary",title:"$binary"},s=void 0,p={unversionedId:"REST/binary",id:"REST/binary",title:"$binary",description:'Pass "true" to save the BLOB as a document (must also pass $expand=)',source:"@site/docs/REST/$binary.md",sourceDirName:"REST",slug:"/REST/binary",permalink:"/docs/ja/docs/next/REST/binary",draft:!1,tags:[],version:"current",frontMatter:{id:"binary",title:"$binary"},sidebar:"docs",previous:{title:"$attributes",permalink:"/docs/ja/docs/next/REST/attributes"},next:{title:"$compute",permalink:"/docs/ja/docs/next/REST/compute"}},l={},u=[{value:"Description",id:"description",level:2}],d={toc:u};function m(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Pass "true" to save the BLOB as a document (must also pass ',(0,o.kt)("inlineCode",{parentName:"p"},"$expand={blobAttributeName}"),")"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$binary")," allows you to save the BLOB as a document.  You must also use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/ja/docs/next/REST/expand"},(0,o.kt)("inlineCode",{parentName:"a"},"$expand"))," command in conjunction with it."),(0,o.kt)("p",null,"When you make the following request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt\n")),(0,o.kt)("p",null,"You will be asked where to save the BLOB to disk:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(77248).Z,width:"459",height:"353"})))}m.isMDXComponent=!0},77248:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/binary-31d3b11dfbe0bcc90814f0d5800a53df.png"}}]);