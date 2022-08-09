"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"timeout",title:"$timeout"},l=void 0,u={unversionedId:"REST/timeout",id:"version-19-R6/REST/timeout",title:"$timeout",description:"Defines the number of seconds to save an entity set in 4D Server's cache (e.g., $timeout=1800)",source:"@site/versioned_docs/version-19-R6/REST/$timeout.md",sourceDirName:"REST",slug:"/REST/timeout",permalink:"/docs/fr/docs/REST/timeout",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"timeout",title:"$timeout"},sidebar:"docs",previous:{title:"$skip",permalink:"/docs/fr/docs/REST/skip"},next:{title:"$top/$limit",permalink:"/docs/fr/docs/REST/top_$limit"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Defines the number of seconds to save an entity set in 4D Server's cache (",(0,i.kt)("em",{parentName:"p"},"e.g."),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$timeout=1800"),")\t"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"To define a timeout for an entity set that you create using ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/docs/REST/method#methodentityset"},(0,i.kt)("inlineCode",{parentName:"a"},"$method=entityset")),", pass the number of seconds to ",(0,i.kt)("inlineCode",{parentName:"p"},"$timeout"),". For example, if you want to set the timeout to 20 minutes, pass 1200. By default, the timeout is two (2) hours."),(0,i.kt)("p",null,"Once the timeout has been defined, each time an entity set is called upon (by using ",(0,i.kt)("inlineCode",{parentName:"p"},"$method=entityset"),"), the timeout is recalculated based on the current time and the timeout."),(0,i.kt)("p",null,"If an entity set is removed and then recreated using ",(0,i.kt)("inlineCode",{parentName:"p"},"$method=entityset")," along with ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/docs/REST/savedfilter"},(0,i.kt)("inlineCode",{parentName:"a"},"$savedfilter")),", the new default timeout is 10 minutes regardless of the timeout you defined when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"$timeout"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In our entity set that we're creating, we define the timeout to 20 minutes:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},' GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200')))}d.isMDXComponent=!0}}]);