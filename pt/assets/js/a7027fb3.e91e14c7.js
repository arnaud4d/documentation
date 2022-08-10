"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={id:"skip",title:"$skip"},l=void 0,c={unversionedId:"REST/skip",id:"version-19-R6/REST/skip",title:"$skip",description:"Starts the entity defined by this number in the collection (e.g., $skip=10)",source:"@site/versioned_docs/version-19-R6/REST/$skip.md",sourceDirName:"REST",slug:"/REST/skip",permalink:"/main/pt/docs/REST/skip",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"skip",title:"$skip"},sidebar:"docs",previous:{title:"$savedorderby",permalink:"/main/pt/docs/REST/savedorderby"},next:{title:"$timeout",permalink:"/main/pt/docs/REST/timeout"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starts the entity defined by this number in the collection (",(0,o.kt)("em",{parentName:"p"},"e.g."),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$skip=10"),")\t"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$skip")," defines which entity in the collection to start with. By default, the collection sent starts with the first entity. To start with the 10th entity in the collection, pass 10."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$skip"),"  is generally used in conjunction with ",(0,o.kt)("a",{parentName:"p",href:"/main/pt/docs/REST/top_$limit"},(0,o.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," to navigate through an entity collection."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In the following example, we go to the 20th entity in our entity set:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20")))}d.isMDXComponent=!0}}]);