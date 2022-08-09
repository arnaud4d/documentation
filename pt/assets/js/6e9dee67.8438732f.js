"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36906],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"orderby",title:"$orderby"},s=void 0,p={unversionedId:"REST/orderby",id:"version-18/REST/orderby",title:"$orderby",description:'Sorts the data returned by the attribute and sorting order defined (e.g., $orderby="lastName desc, salary asc")',source:"@site/versioned_docs/version-18/REST/$orderby.md",sourceDirName:"REST",slug:"/REST/orderby",permalink:"/docs/pt/docs/18/REST/orderby",draft:!1,tags:[],version:"18",frontMatter:{id:"orderby",title:"$orderby"},sidebar:"docs",previous:{title:"$method",permalink:"/docs/pt/docs/18/REST/method"},next:{title:"$querypath",permalink:"/docs/pt/docs/18/REST/querypath"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sorts the data returned by the attribute and sorting order defined (",(0,o.kt)("em",{parentName:"p"},"e.g."),", ",(0,o.kt)("inlineCode",{parentName:"p"},'$orderby="lastName desc, salary asc"'),")\t"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$orderby")," orders the entities returned by the REST request. For each attribute, you specify the order as ",(0,o.kt)("inlineCode",{parentName:"p"},"ASC")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"asc"),") for ascending order and ",(0,o.kt)("inlineCode",{parentName:"p"},"DESC")," (",(0,o.kt)("inlineCode",{parentName:"p"},"desc"),") for descending order. By default, the data is sorted in ascending order. If you want to specify multiple attributes, you can delimit them with a comma, ",(0,o.kt)("em",{parentName:"p"},"e.g."),", ",(0,o.kt)("inlineCode",{parentName:"p"},'$orderby="lastName desc, firstName asc"'),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In this example, we retrieve entities and sort them at the same time:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"')),(0,o.kt)("p",null,"The example below sorts the entity set by lastName attribute in ascending order:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n')))}u.isMDXComponent=!0}}]);