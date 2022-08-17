"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=u(r),m=a,d=y["".concat(i,".").concat(m)]||y[m]||c[m]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},48778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>k,frontMatter:()=>y,metadata:()=>d,toc:()=>b});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&s(e,r,t[r]);return e};const y={id:"queryplan",title:"$queryplan"},m=void 0,d={unversionedId:"REST/queryplan",id:"version-19-R6/REST/queryplan",title:"$queryplan",description:"Returns the query as it was passed to 4D Server (e.g., $queryplan=true)",source:"@site/versioned_docs/version-19-R6/REST/$queryplan.md",sourceDirName:"REST",slug:"/REST/queryplan",permalink:"/docs/ja/REST/queryplan",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"queryplan",title:"$queryplan"},sidebar:"docs",previous:{title:"$querypath",permalink:"/docs/ja/REST/querypath"},next:{title:"$savedfilter",permalink:"/docs/ja/REST/savedfilter"}},f={},b=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Response:",id:"response",level:4}],v={toc:b};function k(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),s),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Returns the query as it was passed to 4D Server (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"$queryplan=true"),")\t"),(0,n.kt)("h2",c({},{id:"description"}),"Description"),(0,n.kt)("p",null,"$queryplan returns the query plan as it was passed to 4D Server. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"item"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Actual query executed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"subquery"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Array"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"If there is a subquery, an additional object containing an item property (as the one above)")))),(0,n.kt)("p",null,"For more information about query plans, refer to ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/ja/REST/genInfo#querypath-and-queryplan"}),"queryPlan and queryPath"),"."),(0,n.kt)("h2",c({},{id:"example"}),"Example"),(0,n.kt)("p",null,"If you pass the following query:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true')),(0,n.kt)("h4",c({},{id:"response"}),"Response:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company.ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n')))}k.isMDXComponent=!0}}]);