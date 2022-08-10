"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"timeout",title:"$timeout"},l=void 0,u={unversionedId:"REST/timeout",id:"version-18/REST/timeout",title:"$timeout",description:"Defines the number of seconds to save an entity set in 4D Server's cache (e.g., $timeout=1800)",source:"@site/versioned_docs/version-18/REST/$timeout.md",sourceDirName:"REST",slug:"/REST/timeout",permalink:"/es/docs/18/REST/timeout",draft:!1,tags:[],version:"18",frontMatter:{id:"timeout",title:"$timeout"},sidebar:"docs",previous:{title:"$skip",permalink:"/es/docs/18/REST/skip"},next:{title:"$top/$limit",permalink:"/es/docs/18/REST/top_$limit"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Defines the number of seconds to save an entity set in 4D Server's cache (",(0,o.kt)("em",{parentName:"p"},"e.g."),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$timeout=1800"),")\t"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"To define a timeout for an entity set that you create using ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/18/REST/method#methodentityset"},(0,o.kt)("inlineCode",{parentName:"a"},"$method=entityset")),", pass the number of seconds to ",(0,o.kt)("inlineCode",{parentName:"p"},"$timeout"),". For example, if you want to set the timeout to 20 minutes, pass 1200. By default, the timeout is two (2) hours."),(0,o.kt)("p",null,"Once the timeout has been defined, each time an entity set is called upon (by using ",(0,o.kt)("inlineCode",{parentName:"p"},"$method=entityset"),"), the timeout is recalculated based on the current time and the timeout."),(0,o.kt)("p",null,"If an entity set is removed and then recreated using ",(0,o.kt)("inlineCode",{parentName:"p"},"$method=entityset")," along with ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/18/REST/savedfilter"},(0,o.kt)("inlineCode",{parentName:"a"},"$savedfilter")),", the new default timeout is 10 minutes regardless of the timeout you defined when calling ",(0,o.kt)("inlineCode",{parentName:"p"},"$timeout"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In our entity set that we're creating, we define the timeout to 20 minutes:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},' GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200')))}d.isMDXComponent=!0}}]);