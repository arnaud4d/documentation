"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={id:"savedfilter",title:"$savedfilter"},l=void 0,s={unversionedId:"REST/savedfilter",id:"REST/savedfilter",title:"$savedfilter",description:'Saves the filter defined by $filter when creating an entity set (e.g., $savedfilter="")',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/REST/$savedfilter.md",sourceDirName:"REST",slug:"/REST/savedfilter",permalink:"/docs/pt/next/REST/savedfilter",draft:!1,tags:[],version:"current",frontMatter:{id:"savedfilter",title:"$savedfilter"},sidebar:"docs",previous:{title:"$queryplan",permalink:"/docs/pt/next/REST/queryplan"},next:{title:"$savedorderby",permalink:"/docs/pt/next/REST/savedorderby"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Saves the filter defined by $filter when creating an entity set (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},'$savedfilter="{filter}"'),")"),(0,n.kt)("h2",i({},{id:"description"}),"Description"),(0,n.kt)("p",null,"When you create an entity set, you can save the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/pt/next/REST/method#methodrelease"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=release")),")."),(0,n.kt)("p",null,"You use ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," to save the filter you defined when creating your entity set and then pass ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," along with your call to retrieve the entity set each time."),(0,n.kt)("p",null,"If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it."),(0,n.kt)("p",null,"If you have used both ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," and ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/pt/next/REST/savedorderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedorderby"))," in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that."),(0,n.kt)("h2",i({},{id:"example"}),"Example"),(0,n.kt)("p",null,"In our example, we first call `",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," with the initial call to create an entity set as shown below:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset')),(0,n.kt)("p",null,"Then, when you access your entity set, you write the following to ensure that the entity set is always valid:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"')))}d.isMDXComponent=!0}}]);