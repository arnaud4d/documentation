"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],p={id:"querypath",title:"$querypath"},i=void 0,u={unversionedId:"REST/querypath",id:"version-18/REST/querypath",title:"$querypath",description:"Returns the query as it was executed by 4D Server (e.g., $querypath=true)",source:"@site/versioned_docs/version-18/REST/$querypath.md",sourceDirName:"REST",slug:"/REST/querypath",permalink:"/docs/docs/18/REST/querypath",draft:!1,tags:[],version:"18",frontMatter:{id:"querypath",title:"$querypath"},sidebar:"docs",previous:{title:"$orderby",permalink:"/docs/docs/18/REST/orderby"},next:{title:"$queryplan",permalink:"/docs/docs/18/REST/queryplan"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the query as it was executed by 4D Server (",(0,o.kt)("em",{parentName:"p"},"e.g."),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$querypath=true"),")\t"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$querypath")," returns the query as it was executed by 4D Server. If, for example, a part of the query passed returns no entities, the rest of the query is not executed. The query requested is optimized as you can see in this ",(0,o.kt)("inlineCode",{parentName:"p"},"$querypath"),"."),(0,o.kt)("p",null,"For more information about query paths, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/18/REST/genInfo#querypath-and-queryplan"},"queryPlan and queryPath"),"."),(0,o.kt)("p",null,"In the steps collection, there is an object with the following properties defining the query executed:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"description"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},'Actual query executed or "AND" when there are multiple steps')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"time"),(0,o.kt)("td",{parentName:"tr",align:null},"Number"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of milliseconds needed to execute the query")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"recordsfounds"),(0,o.kt)("td",{parentName:"tr",align:null},"Number"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of records found")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"steps"),(0,o.kt)("td",{parentName:"tr",align:null},"Collection"),(0,o.kt)("td",{parentName:"tr",align:null},"An collection with an object defining the subsequent step of the query path")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"If you passed the following query:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true')),(0,o.kt)("p",null,"And no entities were found, the following query path would be returned, if you write the following:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"}," GET  /rest/$querypath")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'__queryPath: {\n \n    steps: [\n        {\n            description: "AND",\n            time: 0,\n            recordsfounds: 0,\n            steps: [\n                {\n                    description: "Join on Table : Company : People.employer = Company.ID",\n                    time: 0,\n                    recordsfounds: 0,\n                    steps: [\n                        {\n                            steps: [\n                                {\n                                    description: "Company.name = acme",\n                                    time: 0,\n                                    recordsfounds: 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n \n}\n')),(0,o.kt)("p",null,"If, on the other hand, the first query returns more than one entity, the second one will be executed. If we execute the following query:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true')),(0,o.kt)("p",null,"If at least one entity was found, the following query path would be returned, if you write the following:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"GET  /rest/$querypath")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Respose"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"__queryPath": {\n    "steps": [\n        {\n            "description": "AND",\n            "time": 1,\n            "recordsfounds": 4,\n            "steps": [\n                {\n                    "description": "Join on Table : Company : Employee.employer = Company.ID",\n                    "time": 1,\n                    "recordsfounds": 4,\n                    "steps": [\n                        {\n                            "steps": [\n                                {\n                                    "description": "Company.name LIKE a*",\n                                    "time": 0,\n                                    "recordsfounds": 2\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "description": "Employee.lastName # smith",\n                    "time": 0,\n                    "recordsfounds": 4\n                }\n            ]\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);