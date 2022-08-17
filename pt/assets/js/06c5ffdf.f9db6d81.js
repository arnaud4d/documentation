"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44669],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});a(67294);var n=a(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const i={id:"{dataClass}",title:"{dataClass}"},o=void 0,s={unversionedId:"REST/{dataClass}",id:"version-18/REST/{dataClass}",title:"{dataClass}",description:"Dataclass names can be used directly in the REST requests to work with entities, entity selections, or methods of the dataclass.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/{dataClass}.md",sourceDirName:"REST",slug:"/REST/{dataClass}",permalink:"/docs/pt/18/REST/{dataClass}",draft:!1,tags:[],version:"18",frontMatter:{id:"{dataClass}",title:"{dataClass}"},sidebar:"docs",previous:{title:"$upload",permalink:"/docs/pt/18/REST/upload"},next:{title:"$asArray",permalink:"/docs/pt/18/REST/asArray"}},p={},d=[{value:"Available syntaxes",id:"available-syntaxes",level:2},{value:"{dataClass}",id:"dataclass",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"{dataClass}({key})",id:"dataclasskey",level:2},{value:"Description",id:"description-1",level:3},{value:"Example",id:"example-1",level:3},{value:"{dataClass}:{attribute}(value)",id:"dataclassattributevalue",level:2},{value:"Description",id:"description-2",level:3},{value:"Example",id:"example-2",level:3},{value:"{dataClass}/{method} and {dataClass}({key})/{method}",id:"dataclassmethod-and-dataclasskeymethod",level:2},{value:"Description",id:"description-3",level:3},{value:"4D Configuration",id:"4d-configuration",level:3},{value:"Passing Parameters to a Method",id:"passing-parameters-to-a-method",level:3},{value:"Examples",id:"examples",level:3},{value:"Table scope",id:"table-scope",level:4},{value:"Current record scope",id:"current-record-scope",level:4},{value:"Current selection scope",id:"current-selection-scope",level:4}],u={toc:d};function m(e){var{components:t}=e,i=r(e,["components"]);return(0,n.kt)("wrapper",l({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Dataclass names can be used directly in the REST requests to work with entities, entity selections, or methods of the dataclass."),(0,n.kt)("h2",l({},{id:"available-syntaxes"}),"Available syntaxes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Syntax"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Example"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#dataClass"}),(0,n.kt)("strong",{parentName:"a"},"{dataClass}"))),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/Employee")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Returns all the data (by default the first 100 entities) for the dataclass")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#dataclasskey"}),(0,n.kt)("strong",{parentName:"a"},"{dataClass}({key})"))),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/Employee(22)")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Returns the data for the specific entity defined by the dataclass's primary key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#dataclassattributevalue"}),(0,n.kt)("strong",{parentName:"a"},"{dataClass}:{attribute}(value)"))),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/Employee:firstName(John)")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Returns the data for one entity in which the attribute's value is defined")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#dataclassmethod-and-dataclasskeymethod"}),(0,n.kt)("strong",{parentName:"a"},"{dataClass}/{method}"))),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/Employee/getHighSalaries")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Executes a project method and returns an object or a collection (the project method must be exposed)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#dataclassmethod-and-dataclasskeymethod"}),(0,n.kt)("strong",{parentName:"a"},"{dataClass}({key})/{method}"))),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/Employee(22)/getAge")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Returns a value based on an entity method")))),(0,n.kt)("h2",l({},{id:"dataclass"}),"{dataClass}"),(0,n.kt)("p",null,"Returns all the data (by default the first 100 entities) for a specific dataclass (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Company"),")"),(0,n.kt)("h3",l({},{id:"description"}),"Description"),(0,n.kt)("p",null,"When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/pt/18/REST/top_$limit"}),(0,n.kt)("inlineCode",{parentName:"a"},"$top/$limit")),"."),(0,n.kt)("p",null,"Here is a description of the data returned:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__entityModel"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Name of the dataclass.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__COUNT"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of entities in the dataclass.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__SENT"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of entities sent by the REST request. This number can be the total number of entities if it is less than the value defined by ",(0,n.kt)("inlineCode",{parentName:"td"},"$top/$limit"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__FIRST"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Entity number that the selection starts at. Either 0 by default or the value defined by ",(0,n.kt)("inlineCode",{parentName:"td"},"$skip"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__ENTITIES"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"This collection of objects contains an object for each entity with all its attributes. All relational attributes are returned as objects with a URI to obtain information regarding the parent.")))),(0,n.kt)("p",null,"Each entity contains the following properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__KEY"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Value of the primary key defined for the dataclass.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__TIMESTAMP"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Timestamp of the last modification of the entity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__STAMP"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Internal stamp that is needed when you modify any of the values in the entity when using ",(0,n.kt)("inlineCode",{parentName:"td"},"$method=update"),".")))),(0,n.kt)("p",null,"If you want to specify which attributes you want to return, define them using the following syntax ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/pt/18/REST/manData##selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),". For example:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company/name,address")),(0,n.kt)("h3",l({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Return all the data for a specific dataclass."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 51,\n    "__COUNT": 250,\n    "__SENT": 100,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n            "__STAMP": 1,\n            "ID": 1,\n            "name": "Adobe",\n            "address": null,\n            "city": "San Jose",\n            "country": "USA",\n            "revenues": 500000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",\n            "__STAMP": 1,\n            "ID": 2,\n            "name": "Apple",\n            "address": null,\n            "city": "Cupertino",\n            "country": "USA",\n            "revenues": 890000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "name": "4D",\n            "address": null,\n            "city": "Clichy",\n            "country": "France",\n            "revenues": 700000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "4",\n            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",\n            "__STAMP": 1,\n            "ID": 4,\n            "name": "Microsoft",\n            "address": null,\n            "city": "Seattle",\n            "country": "USA",\n            "revenues": 650000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"\n                }\n            }\n        }\n.....//more entities here \n    ]\n}\n')),(0,n.kt)("h2",l({},{id:"dataclasskey"}),"{dataClass}({key})"),(0,n.kt)("p",null,"Returns the data for the specific entity defined by the dataclass's primary key, ",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},'Company(22) or Company("IT0911AB2200")')),(0,n.kt)("h3",l({},{id:"description-1"}),"Description"),(0,n.kt)("p",null,"By passing the dataclass and a key, you can retrieve all the public information for that entity. The key is the value in the attribute defined as the Primary Key for your dataclass. For more information about defining a primary key, refer to the ",(0,n.kt)("strong",{parentName:"p"},"Modifying the Primary Key")," section in the ",(0,n.kt)("strong",{parentName:"p"},"Data Model Editor"),"."),(0,n.kt)("p",null,"For more information about the data returned, refer to ",(0,n.kt)("a",l({parentName:"p"},{href:"#datastoreclass"}),"{datastoreClass}"),"."),(0,n.kt)("p",null,"If you want to specify which attributes you want to return, define them using the following syntax ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/pt/18/REST/manData##selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),". For example:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/name,address")),(0,n.kt)("p",null,"If you want to expand a relation attribute using ",(0,n.kt)("inlineCode",{parentName:"p"},"$expand"),", you do so by specifying it as shown below:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/name,address,staff?$expand=staff")),(0,n.kt)("h3",l({},{id:"example-1"}),"Example"),(0,n.kt)("p",null,"The following request returns all the public data in the Company dataclass whose key is 1."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "__entityModel": "Company",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n    "__STAMP": 2,\n    "ID": 1,\n    "name": "Apple",\n    "address": Infinite Loop,\n    "city": "Cupertino",\n    "country": "USA",\n    "url": http://www.apple.com,\n    "revenues": 500000,\n    "staff": {\n        "__deferred": {\n            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n        }\n    }\n}\n')),(0,n.kt)("h2",l({},{id:"dataclassattributevalue"}),"{dataClass}:{attribute}(value)"),(0,n.kt)("p",null,"Returns the data for one entity in which the attribute's value is defined"),(0,n.kt)("h3",l({},{id:"description-2"}),"Description"),(0,n.kt)("p",null,"By passing the ",(0,n.kt)("em",{parentName:"p"},"dataClass")," and an ",(0,n.kt)("em",{parentName:"p"},"attribute")," along with a value, you can retrieve all the public information for that entity. The value is a unique value for attribute, but is not the primary key."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company:companyCode(Acme001)")),(0,n.kt)("p",null,"If you want to specify which attributes you want to return, define them using the following syntax ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/pt/18/REST/manData##selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),". For example:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company:companyCode(Acme001)/name,address")),(0,n.kt)("p",null,"If you want to use a relation attribute using ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/pt/18/REST/attributes"}),"$attributes"),", you do so by specifying it as shown below:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name")),(0,n.kt)("h3",l({},{id:"example-2"}),"Example"),(0,n.kt)("p",null,'The following request returns all the public data of the employee named "Jones".'),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee:lastname(Jones)")),(0,n.kt)("h2",l({},{id:"dataclassmethod-and-dataclasskeymethod"}),"{dataClass}/{method} and {dataClass}({key})/{method}"),(0,n.kt)("p",null,"Returns an object or a collection based on a project method."),(0,n.kt)("h3",l({},{id:"description-3"}),"Description"),(0,n.kt)("p",null,"Project methods are called through a dataclass (table) or an entity (record), and must return either an object or a collection."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/getHighSalaries")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee(52)/getFullName")),(0,n.kt)("h3",l({},{id:"4d-configuration"}),"4D Configuration"),(0,n.kt)("p",null,"To be called in a REST request, a method must:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'have been declared as "Available through REST server" in 4D,'),(0,n.kt)("li",{parentName:"ul"},"have its master table and scope defined accordingly:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Table"),": 4D table (i.e. dataclass) on which the method is called. The table must be ",(0,n.kt)("a",l({parentName:"li"},{href:"/docs/pt/18/REST/configuration#exposing-tables-and-fields"}),"exposed to REST"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Scope"),": This setting is useful when the method uses the 4D classic language and thus, needs to have a database context on the server side.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Table")," -for methods applied to the whole table (dataclass)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Current record")," -for methods applied to the current record (entity) using the ",(0,n.kt)("inlineCode",{parentName:"li"},"{dataClass}(key)/{method}")," syntax."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Current selection")," -for methods applied to the current selection")))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(90250).Z,width:"552",height:"557"})),(0,n.kt)("h3",l({},{id:"passing-parameters-to-a-method"}),"Passing Parameters to a Method"),(0,n.kt)("p",null,"You can also pass parameters to a method in a POST."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/addEmployee")),(0,n.kt)("p",null,"You can POST data in the body part of the request, for example:"),(0,n.kt)("p",null,'["John","Smith"]'),(0,n.kt)("h3",l({},{id:"examples"}),"Examples"),(0,n.kt)("h4",l({},{id:"table-scope"}),"Table scope"),(0,n.kt)("p",null,"Call of a ",(0,n.kt)("inlineCode",{parentName:"p"},"getAverage")," method:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"on ","[Employee]"," table"),(0,n.kt)("li",{parentName:"ul"},"with ",(0,n.kt)("strong",{parentName:"li"},"Table")," scope")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' //getAverage  \nALL RECORDS([Employee])\n$0:=New object("ageAverage";Average([Employee]age))\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/getAverage")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "result": {\n        "ageAverage": 44.125\n    }\n}\n')),(0,n.kt)("h4",l({},{id:"current-record-scope"}),"Current record scope"),(0,n.kt)("p",null,"Call of a ",(0,n.kt)("inlineCode",{parentName:"p"},"getFullName")," method:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"on ","[Employee]"," table"),(0,n.kt)("li",{parentName:"ul"},"with ",(0,n.kt)("strong",{parentName:"li"},"Current record")," scope")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' //getFullName  \n$0:=New object("fullName";[Employee]firstname+" "+[Employee]lastname)\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee(3)/getFullName")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "result": {\n        "fullName": "John Smith"\n    }\n}\n')),(0,n.kt)("h4",l({},{id:"current-selection-scope"}),"Current selection scope"),(0,n.kt)("p",null,"Call of a ",(0,n.kt)("inlineCode",{parentName:"p"},"updateSalary")," method:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"on ","[Employee]"," table"),(0,n.kt)("li",{parentName:"ul"},"with ",(0,n.kt)("strong",{parentName:"li"},"Current selection")," scope")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' //updateSalary  \nC_REAL($1;$vCount)\nREAD WRITE([Employee])\n$vCount:=0\nFIRST RECORD([Employee])\nWhile (Not(End selection([Employee]))  \n [Employee]salary:=[Employee]salary * $1\n    SAVE RECORD([Employee])\n    $vCount:=$vCount+1\n    NEXT RECORD([Employee])\nEnd while \nUNLOAD RECORD([Employee])\n$0:=New object("updates";$vCount)\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'POST  /rest/Employee/updateSalary/?$filter="salary<1500"')),(0,n.kt)("p",null,"POST data (in the request body): ","[1.5]"),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "result": {\n        "updated": 42\n    }\n}\n')))}m.isMDXComponent=!0},90250:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MethodProp-81c3e8a0e2bb72d44d9ac3e5d10d4a7f.png"}}]);