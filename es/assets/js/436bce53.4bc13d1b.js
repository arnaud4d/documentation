"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41599],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=d(r),u=a,f=y["".concat(s,".").concat(u)]||y[u]||p[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},88:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>h,frontMatter:()=>y,metadata:()=>f,toc:()=>m});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&c(e,r,t[r]);return e};const y={id:"savedorderby",title:"$savedorderby"},u=void 0,f={unversionedId:"REST/savedorderby",id:"version-19/REST/savedorderby",title:"$savedorderby",description:'Saves the order by defined by $orderby when creating an entity set (e.g., $savedorderby="")',source:"@site/versioned_docs/version-19/REST/$savedorderby.md",sourceDirName:"REST",slug:"/REST/savedorderby",permalink:"/docs/es/19/REST/savedorderby",draft:!1,tags:[],version:"19",frontMatter:{id:"savedorderby",title:"$savedorderby"},sidebar:"docs",previous:{title:"$savedfilter",permalink:"/docs/es/19/REST/savedfilter"},next:{title:"$skip",permalink:"/docs/es/19/REST/skip"}},v={},m=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],b={toc:m};function h(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Saves the order by defined by ",(0,n.kt)("inlineCode",{parentName:"p"},"$orderby")," when creating an entity set (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},'$savedorderby="{orderby}"'),")\t"),(0,n.kt)("h2",p({},{id:"description"}),"Description"),(0,n.kt)("p",null,"When you create an entity set, you can save the sort order along with the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/es/19/REST/method#methodrelease"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=release")),")."),(0,n.kt)("p",null,"You use ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," to save the order you defined when creating your entity set, you then pass ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," along with your call to retrieve the entity set each time."),(0,n.kt)("p",null,"If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. If you have used both ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/es/19/REST/savedfilter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedfilter"))," and ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that."),(0,n.kt)("h2",p({},{id:"example"}),"Example"),(0,n.kt)("p",null,"You first call ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," with the initial call to create an entity set:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="lastName!=\'\'"&$savedfilter="lastName!=\'\'"&$orderby="salary"&$savedorderby="salary"&$method=entityset')),(0,n.kt)("p",null,"Then, when you access your entity set, you write the following (using both $savedfilter and $savedorderby) to ensure that the filter and its sort order always exists:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},' GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=\'\'"&$savedorderby="salary"')))}h.isMDXComponent=!0}}]);