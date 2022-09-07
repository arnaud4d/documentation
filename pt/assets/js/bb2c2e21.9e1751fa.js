"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49913],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),y=o,m=u["".concat(s,".").concat(y)]||u[y]||c[y]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},81378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"orderby",title:"$orderby"},l=void 0,s={unversionedId:"REST/orderby",id:"version-18/REST/orderby",title:"$orderby",description:'Sorts the data returned by the attribute and sorting order defined (e.g., $orderby="lastName desc, salary asc")',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$orderby.md",sourceDirName:"REST",slug:"/REST/orderby",permalink:"/documentation/pt/docs/18/REST/orderby",draft:!1,tags:[],version:"18",frontMatter:{id:"orderby",title:"$orderby"},sidebar:"docs",previous:{title:"$method",permalink:"/documentation/pt/docs/18/REST/method"},next:{title:"$querypath",permalink:"/documentation/pt/docs/18/REST/querypath"}},p={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],c={toc:d};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Sorts the data returned by the attribute and sorting order defined (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},'$orderby="lastName desc, salary asc"'),")"),(0,n.kt)("h2",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$orderby")," orders the entities returned by the REST request. For each attribute, you specify the order as ",(0,n.kt)("inlineCode",{parentName:"p"},"ASC")," (or ",(0,n.kt)("inlineCode",{parentName:"p"},"asc"),") for ascending order and ",(0,n.kt)("inlineCode",{parentName:"p"},"DESC")," (",(0,n.kt)("inlineCode",{parentName:"p"},"desc"),") for descending order. By default, the data is sorted in ascending order. By default, the data is sorted in ascending order."),(0,n.kt)("h2",o({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"In this example, we retrieve entities and sort them at the same time:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"')),(0,n.kt)("p",null,"The example below sorts the entity set by lastName attribute in ascending order:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n')))}u.isMDXComponent=!0}}]);