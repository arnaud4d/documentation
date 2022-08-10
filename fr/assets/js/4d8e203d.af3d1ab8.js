"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(r),y=a,d=m["".concat(i,".").concat(y)]||m[y]||c[y]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],p={id:"queryplan",title:"$queryplan"},i=void 0,u={unversionedId:"REST/queryplan",id:"version-19/REST/queryplan",title:"$queryplan",description:"Returns the query as it was passed to 4D Server (e.g., $queryplan=true)",source:"@site/versioned_docs/version-19/REST/$queryplan.md",sourceDirName:"REST",slug:"/REST/queryplan",permalink:"/fr/docs/19/REST/queryplan",draft:!1,tags:[],version:"19",frontMatter:{id:"queryplan",title:"$queryplan"},sidebar:"docs",previous:{title:"$querypath",permalink:"/fr/docs/19/REST/querypath"},next:{title:"$savedfilter",permalink:"/fr/docs/19/REST/savedfilter"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Response:",id:"response",level:4}],m={toc:c};function y(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Returns the query as it was passed to 4D Server (",(0,l.kt)("em",{parentName:"p"},"e.g."),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$queryplan=true"),")\t"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"$queryplan returns the query plan as it was passed to 4D Server. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"item"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Actual query executed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subquery"),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"If there is a subquery, an additional object containing an item property (as the one above)")))),(0,l.kt)("p",null,"For more information about query plans, refer to ",(0,l.kt)("a",{parentName:"p",href:"/fr/docs/19/REST/genInfo#querypath-and-queryplan"},"queryPlan and queryPath"),"."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"If you pass the following query:"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true')),(0,l.kt)("h4",{id:"response"},"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company.ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n')))}y.isMDXComponent=!0}}]);