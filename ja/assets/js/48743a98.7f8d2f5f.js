"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=d(r),u=a,m=y["".concat(l,".").concat(u)]||y[u]||p[u]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},71887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"savedorderby",title:"$savedorderby"},l=void 0,d={unversionedId:"REST/savedorderby",id:"REST/savedorderby",title:"$savedorderby",description:'Saves the order by defined by $orderby when creating an entity set (e.g., $savedorderby="")',source:"@site/docs/REST/$savedorderby.md",sourceDirName:"REST",slug:"/REST/savedorderby",permalink:"/main/ja/docs/next/REST/savedorderby",draft:!1,tags:[],version:"current",frontMatter:{id:"savedorderby",title:"$savedorderby"},sidebar:"docs",previous:{title:"$savedfilter",permalink:"/main/ja/docs/next/REST/savedfilter"},next:{title:"$skip",permalink:"/main/ja/docs/next/REST/skip"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],y={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Saves the order by defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"$orderby")," when creating an entity set (",(0,o.kt)("em",{parentName:"p"},"e.g."),", ",(0,o.kt)("inlineCode",{parentName:"p"},'$savedorderby="{orderby}"'),")\t"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"When you create an entity set, you can save the sort order along with the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/REST/method#methodrelease"},(0,o.kt)("inlineCode",{parentName:"a"},"$method=release")),")."),(0,o.kt)("p",null,"You use ",(0,o.kt)("inlineCode",{parentName:"p"},"$savedorderby")," to save the order you defined when creating your entity set, you then pass ",(0,o.kt)("inlineCode",{parentName:"p"},"$savedorderby")," along with your call to retrieve the entity set each time."),(0,o.kt)("p",null,"If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. If you have used both ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/REST/savedfilter"},(0,o.kt)("inlineCode",{parentName:"a"},"$savedfilter"))," and ",(0,o.kt)("inlineCode",{parentName:"p"},"$savedorderby")," in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"You first call ",(0,o.kt)("inlineCode",{parentName:"p"},"$savedorderby")," with the initial call to create an entity set:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="lastName!=\'\'"&$savedfilter="lastName!=\'\'"&$orderby="salary"&$savedorderby="salary"&$method=entityset')),(0,o.kt)("p",null,"Then, when you access your entity set, you write the following (using both $savedfilter and $savedorderby) to ensure that the filter and its sort order always exists:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},' GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=\'\'"&$savedorderby="salary"')))}u.isMDXComponent=!0}}]);