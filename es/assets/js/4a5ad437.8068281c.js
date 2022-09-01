"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4649],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(y,l(l({ref:r},c),{},{components:t})):n.createElement(y,l({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},63779:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={id:"orderby",title:"$orderby"},i=void 0,s={unversionedId:"REST/orderby",id:"version-18/REST/orderby",title:"$orderby",description:'Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (por ejemplo, $orderby="lastName desc, salary asc")',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/$orderby.md",sourceDirName:"REST",slug:"/REST/orderby",permalink:"/docs/es/18/REST/orderby",draft:!1,tags:[],version:"18",frontMatter:{id:"orderby",title:"$orderby"},sidebar:"docs",previous:{title:"$method",permalink:"/docs/es/18/REST/method"},next:{title:"$querypath",permalink:"/docs/es/18/REST/querypath"}},p={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],d={toc:c};function u(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (",(0,n.kt)("em",{parentName:"p"},"por ejemplo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},'$orderby="lastName desc, salary asc"'),")"),(0,n.kt)("h2",o({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$orderby")," ordena las entidades devueltas por la petici\xf3n REST. Para cada atributo, se especifica el orden como ",(0,n.kt)("inlineCode",{parentName:"p"},"ASC")," (o ",(0,n.kt)("inlineCode",{parentName:"p"},"asc"),") para el orden ascendente y ",(0,n.kt)("inlineCode",{parentName:"p"},"DESC")," (",(0,n.kt)("inlineCode",{parentName:"p"},"desc"),") para el orden descendente. Por defecto, los datos se clasifican en orden ascendente. By default, the data is sorted in ascending order."),(0,n.kt)("h2",o({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"En este ejemplo, recuperamos las entidades y las ordenamos al mismo tiempo:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"')),(0,n.kt)("p",null,"El ejemplo siguiente ordena el conjunto de entidades por el atributo lastName en orden ascendente:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultado"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n')))}u.isMDXComponent=!0}}]);