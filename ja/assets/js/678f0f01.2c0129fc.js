"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={id:"top_$limit",title:"$top/$limit"},l=void 0,c={unversionedId:"REST/top_$limit",id:"REST/top_$limit",title:"$top/$limit",description:"Limits the number of entities to return (e.g., $top=50)",source:"@site/docs/REST/$top_$limit.md",sourceDirName:"REST",slug:"/REST/top_$limit",permalink:"/docs/ja/next/REST/top_$limit",draft:!1,tags:[],version:"current",frontMatter:{id:"top_$limit",title:"$top/$limit"},sidebar:"docs",previous:{title:"$timeout",permalink:"/docs/ja/next/REST/timeout"},next:{title:"$version",permalink:"/docs/ja/next/REST/version"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Limits the number of entities to return (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"$top=50"),")\t"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$top/$limit")," defines the limit of entities to return. By default, the number is limited to 100. You can use either keyword: ",(0,o.kt)("inlineCode",{parentName:"p"},"$top")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"$limit"),"."),(0,o.kt)("p",null,"When used in conjunction with ",(0,o.kt)("a",{parentName:"p",href:"/docs/ja/next/REST/skip"},(0,o.kt)("inlineCode",{parentName:"a"},"$skip")),", you can navigate through the entity selection returned by the REST request."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In the following example, we request the next ten entities after the 20th entity:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10")))}d.isMDXComponent=!0}}]);