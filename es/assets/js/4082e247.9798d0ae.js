"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82577],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6934:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={id:"dataClass",title:"dataClass"},o=void 0,p={unversionedId:"REST/dataClass",id:"version-19-R6/REST/dataClass",title:"dataClass",description:"Dataclass names can be used directly in the REST requests to work with entities and entity selections, or class functions of the dataclass.",source:"@site/versioned_docs/version-19-R6/REST/dataClass.md",sourceDirName:"REST",slug:"/REST/dataClass",permalink:"/es/docs/REST/dataClass",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"dataClass",title:"dataClass"},sidebar:"docs",previous:{title:"$upload",permalink:"/es/docs/REST/upload"},next:{title:"$asArray",permalink:"/es/docs/REST/asArray"}},d={},u=[{value:"Available syntaxes",id:"available-syntaxes",level:2},{value:"{dataClass}",id:"dataclass",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"{dataClass}({key})",id:"dataclasskey",level:2},{value:"Description",id:"description-1",level:3},{value:"Example",id:"example-1",level:3},{value:"{dataClass}:{attribute}(value)",id:"dataclassattributevalue",level:2},{value:"Description",id:"description-2",level:3},{value:"Example",id:"example-2",level:3}],m={toc:u};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Dataclass names can be used directly in the REST requests to work with entities and entity selections, or class functions of the dataclass."),(0,l.kt)("h2",{id:"available-syntaxes"},"Available syntaxes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#dataClass"},(0,l.kt)("strong",{parentName:"a"},"{dataClass}"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/Employee")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns all the data (by default the first 100 entities) for the dataclass")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#dataclasskey"},(0,l.kt)("strong",{parentName:"a"},"{dataClass}({key})"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/Employee(22)")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the data for the specific entity defined by the dataclass's primary key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#dataclassattributevalue"},(0,l.kt)("strong",{parentName:"a"},"{dataClass}:{attribute}(value)"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/Employee:firstName(John)")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the data for one entity in which the attribute's value is defined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/es/docs/REST/classFunctions#function-calls"},(0,l.kt)("strong",{parentName:"a"},"{dataClass}/{DataClassClassFunction}"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/City/getCity")),(0,l.kt)("td",{parentName:"tr",align:null},"Executes a dataclass class function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/es/docs/REST/classFunctions#function-calls"},(0,l.kt)("strong",{parentName:"a"},"{dataClass}({EntitySelectionClassFunction}"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'/City/getPopulation/?$filter="ID<3"')),(0,l.kt)("td",{parentName:"tr",align:null},"Executes an entity selection class function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/es/docs/REST/classFunctions#function-calls"},(0,l.kt)("strong",{parentName:"a"},"{dataClass}({key})/{EntityClassFunction}"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"City(2)/getPopulation")),(0,l.kt)("td",{parentName:"tr",align:null},"Executes an entity class function")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Function calls are detailed in the ",(0,l.kt)("a",{parentName:"p",href:"/es/docs/REST/classFunctions"},"Calling ORDA class functions")," section.")),(0,l.kt)("h2",{id:"dataclass"},"{dataClass}"),(0,l.kt)("p",null,"Returns all the data (by default the first 100 entities) for a specific dataclass (",(0,l.kt)("em",{parentName:"p"},"e.g."),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Company"),")\t"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using ",(0,l.kt)("a",{parentName:"p",href:"/es/docs/REST/top_$limit"},(0,l.kt)("inlineCode",{parentName:"a"},"$top/$limit")),"."),(0,l.kt)("p",null,"Here is a description of the data returned:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__entityModel"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the dataclass.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__COUNT"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of entities in the dataclass.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__SENT"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of entities sent by the REST request. This number can be the total number of entities if it is less than the value defined by ",(0,l.kt)("inlineCode",{parentName:"td"},"$top/$limit"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__FIRST"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Entity number that the selection starts at. Either 0 by default or the value defined by ",(0,l.kt)("inlineCode",{parentName:"td"},"$skip"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__ENTITIES"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection"),(0,l.kt)("td",{parentName:"tr",align:null},"This collection of objects contains an object for each entity with all its attributes. All relational attributes are returned as objects with a URI to obtain information regarding the parent.")))),(0,l.kt)("p",null,"Each entity contains the following properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__KEY"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Value of the primary key defined for the dataclass.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp of the last modification of the entity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__STAMP"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Internal stamp that is needed when you modify any of the values in the entity when using ",(0,l.kt)("inlineCode",{parentName:"td"},"$method=update"),".")))),(0,l.kt)("p",null,"If you want to specify which attributes you want to return, define them using the following syntax ",(0,l.kt)("a",{parentName:"p",href:"/es/docs/REST/manData##selecting-attributes-to-get"},"{attribute1, attribute2, ...}"),". For example:"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company/name,address")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Return all the data for a specific dataclass."),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 51,\n    "__COUNT": 250,\n    "__SENT": 100,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n            "__STAMP": 1,\n            "ID": 1,\n            "name": "Adobe",\n            "address": null,\n            "city": "San Jose",\n            "country": "USA",\n            "revenues": 500000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",\n            "__STAMP": 1,\n            "ID": 2,\n            "name": "Apple",\n            "address": null,\n            "city": "Cupertino",\n            "country": "USA",\n            "revenues": 890000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "name": "4D",\n            "address": null,\n            "city": "Clichy",\n            "country": "France",\n            "revenues": 700000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "4",\n            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",\n            "__STAMP": 1,\n            "ID": 4,\n            "name": "Microsoft",\n            "address": null,\n            "city": "Seattle",\n            "country": "USA",\n            "revenues": 650000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"\n                }\n            }\n        }\n.....//more entities here \n    ]\n}\n')),(0,l.kt)("h2",{id:"dataclasskey"},"{dataClass}({key})"),(0,l.kt)("p",null,"Returns the data for the specific entity defined by the dataclass's primary key, ",(0,l.kt)("em",{parentName:"p"},"e.g."),", ",(0,l.kt)("inlineCode",{parentName:"p"},'Company(22) or Company("IT0911AB2200")')),(0,l.kt)("h3",{id:"description-1"},"Description"),(0,l.kt)("p",null,"By passing the dataclass and a key, you can retrieve all the public information for that entity. The key is the value in the attribute defined as the Primary Key for your dataclass. For more information about defining a primary key, refer to the ",(0,l.kt)("strong",{parentName:"p"},"Modifying the Primary Key")," section in the ",(0,l.kt)("strong",{parentName:"p"},"Data Model Editor"),"."),(0,l.kt)("p",null,"For more information about the data returned, refer to ",(0,l.kt)("a",{parentName:"p",href:"#datastoreclass"},"{DataStoreClass}"),"."),(0,l.kt)("p",null,"If you want to specify which attributes you want to return, define them using the following syntax ",(0,l.kt)("a",{parentName:"p",href:"/es/docs/REST/manData##selecting-attributes-to-get"},"{attribute1, attribute2, ...}"),". For example:"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/name,address")),(0,l.kt)("p",null,"If you want to expand a relation attribute using ",(0,l.kt)("inlineCode",{parentName:"p"},"$expand"),", you do so by specifying it as shown below:"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/name,address,staff?$expand=staff")),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("p",null,"The following request returns all the public data in the Company dataclass whose key is 1."),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "__entityModel": "Company",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n    "__STAMP": 2,\n    "ID": 1,\n    "name": "Apple",\n    "address": Infinite Loop,\n    "city": "Cupertino",\n    "country": "USA",\n    "url": http://www.apple.com,\n    "revenues": 500000,\n    "staff": {\n        "__deferred": {\n            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"dataclassattributevalue"},"{dataClass}:{attribute}(value)"),(0,l.kt)("p",null,"Returns the data for one entity in which the attribute's value is defined"),(0,l.kt)("h3",{id:"description-2"},"Description"),(0,l.kt)("p",null,"By passing the ",(0,l.kt)("em",{parentName:"p"},"dataClass")," and an ",(0,l.kt)("em",{parentName:"p"},"attribute")," along with a value, you can retrieve all the public information for that entity. The value is a unique value for attribute, but is not the primary key."),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company:companyCode(Acme001)")),(0,l.kt)("p",null,"If you want to specify which attributes you want to return, define them using the following syntax ",(0,l.kt)("a",{parentName:"p",href:"/es/docs/REST/manData##selecting-attributes-to-get"},"{attribute1, attribute2, ...}"),". For example:"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company:companyCode(Acme001)/name,address")),(0,l.kt)("p",null,"If you want to use a relation attribute using ",(0,l.kt)("a",{parentName:"p",href:"/es/docs/REST/attributes"},"$attributes"),", you do so by specifying it as shown below:"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name")),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("p",null,'The following request returns all the public data of the employee named "Jones".'),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee:lastname(Jones)")))}c.isMDXComponent=!0}}]);