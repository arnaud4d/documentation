"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),y=a,d=m["".concat(i,".").concat(y)]||m[y]||c[y]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],p={id:"queryplan",title:"$queryplan"},i=void 0,u={unversionedId:"REST/queryplan",id:"version-18/REST/queryplan",title:"$queryplan",description:"Returns the query as it was passed to 4D Server (e.g., $queryplan=true)",source:"@site/versioned_docs/version-18/REST/$queryplan.md",sourceDirName:"REST",slug:"/REST/queryplan",permalink:"/main/pt/docs/18/REST/queryplan",draft:!1,tags:[],version:"18",frontMatter:{id:"queryplan",title:"$queryplan"},sidebar:"docs",previous:{title:"$querypath",permalink:"/main/pt/docs/18/REST/querypath"},next:{title:"$savedfilter",permalink:"/main/pt/docs/18/REST/savedfilter"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Response:",id:"response",level:4}],m={toc:c};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Returns the query as it was passed to 4D Server (",(0,l.kt)("em",{parentName:"p"},"e.g."),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$queryplan=true"),")\t"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"$queryplan returns the query plan as it was passed to 4D Server. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"item"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Actual query executed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subquery"),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"If there is a subquery, an additional object containing an item property (as the one above)")))),(0,l.kt)("p",null,"For more information about query plans, refer to ",(0,l.kt)("a",{parentName:"p",href:"/main/pt/docs/18/REST/genInfo#querypath-and-queryplan"},"queryPlan and queryPath"),"."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"If you pass the following query:"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true')),(0,l.kt)("h4",{id:"response"},"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company.ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n')))}y.isMDXComponent=!0}}]);