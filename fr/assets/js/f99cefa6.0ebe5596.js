"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"distinct",title:"$distinct"},l=void 0,p={unversionedId:"REST/distinct",id:"REST/distinct",title:"$distinct",description:'Returns the distinct values for a specific attribute in a collection (e.g., Company/name?$filter="name=a*"&$distinct=true)',source:"@site/docs/REST/$distinct.md",sourceDirName:"REST",slug:"/REST/distinct",permalink:"/main/fr/docs/next/REST/distinct",draft:!1,tags:[],version:"current",frontMatter:{id:"distinct",title:"$distinct"},sidebar:"docs",previous:{title:"$compute",permalink:"/main/fr/docs/next/REST/compute"},next:{title:"$entityset",permalink:"/main/fr/docs/next/REST/entityset"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns the distinct values for a specific attribute in a collection (",(0,a.kt)("em",{parentName:"p"},"e.g."),", ",(0,a.kt)("inlineCode",{parentName:"p"},'Company/name?$filter="name=a*"&$distinct=true'),")"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$distinct")," allows you to return a collection containing the distinct values for a query on a specific attribute. Only one attribute in the dataclass can be specified. Generally, the String type is best; however, you can also use it on any attribute type that could contain multiple values."),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"$skip")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$top/$limit")," as well, if you'd like to navigate the selection before it's placed in an array."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,'In our example below, we want to retrieve the distinct values for a company name starting with the letter "a":'),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},'GET  /rest/Company/name?$filter="name=a*"&$distinct=true')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[\n    "Adobe",\n    "Apple"\n]\n')))}m.isMDXComponent=!0}}]);