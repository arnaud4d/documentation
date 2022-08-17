"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17599],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70789:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>c,default:()=>N,frontMatter:()=>m,metadata:()=>k,toc:()=>y});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&d(t,a,e[a]);if(o)for(var a of o(e))s.call(e,a)&&d(t,a,e[a]);return t};const m={id:"catalog",title:"$catalog"},c=void 0,k={unversionedId:"REST/catalog",id:"version-19/REST/catalog",title:"$catalog",description:"The catalog describes all the dataclasses and attributes available in the datastore.",source:"@site/versioned_docs/version-19/REST/$catalog.md",sourceDirName:"REST",slug:"/REST/catalog",permalink:"/docs/19/REST/catalog",draft:!1,tags:[],version:"19",frontMatter:{id:"catalog",title:"$catalog"},sidebar:"docs",previous:{title:"About REST Requests",permalink:"/docs/19/REST/REST_requests"},next:{title:"$directory",permalink:"/docs/19/REST/directory"}},g={},y=[{value:"Available syntaxes",id:"available-syntaxes",level:2},{value:"$catalog",id:"catalog",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"$catalog/$all",id:"catalogall",level:2},{value:"Description",id:"description-1",level:3},{value:"Example",id:"example-1",level:3},{value:"$catalog/{dataClass}",id:"catalogdataclass",level:2},{value:"Description",id:"description-2",level:3},{value:"DataClass",id:"dataclass",level:3},{value:"Attribute(s)",id:"attributes",level:3},{value:"Primary Key",id:"primary-key",level:3},{value:"Example",id:"example-2",level:3}],b={toc:y};function N(t){var e,a=t,{components:r}=a,d=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&s.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=u(u({},b),d),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The catalog describes all the dataclasses and attributes available in the datastore.   "),(0,n.kt)("h2",u({},{id:"available-syntaxes"}),"Available syntaxes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Syntax"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Example"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#catalog"}),(0,n.kt)("strong",{parentName:"a"},"$catalog"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/$catalog")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Returns a list of the dataclasses in your project along with two URIs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#catalogall"}),(0,n.kt)("strong",{parentName:"a"},"$catalog/$all"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/$catalog/$all")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Returns information about all of your project's dataclasses and their attributes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#catalogdataclass"}),(0,n.kt)("strong",{parentName:"a"},"$catalog/{dataClass}"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/$catalog/Employee")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Returns information about a dataclass and its attributes")))),(0,n.kt)("h2",u({},{id:"catalog"}),"$catalog"),(0,n.kt)("p",null,"Returns a list of the dataclasses in your project along with two URIs: one to access the information about its structure and one to retrieve the data in the dataclass\t"),(0,n.kt)("h3",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"When you call ",(0,n.kt)("inlineCode",{parentName:"p"},"$catalog"),", a list of the dataclasses is returned along with two URIs for each dataclass in your project's datastore."),(0,n.kt)("p",null,"Only the exposed dataclasses are shown in this list for your project's datastore. For more information, please refer to ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/19/REST/configuration#exposing-tables-and-fields"}),(0,n.kt)("strong",{parentName:"a"},"Exposing tables and fields"))," section. "),(0,n.kt)("p",null,"Here is a description of the properties returned for each dataclass in your project's datastore:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Name of the dataclass.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"uri"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A URI allowing you to obtain information about the dataclass and its attributes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"dataURI"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A URI that allows you to view the data in the dataclass.")))),(0,n.kt)("h3",u({},{id:"example"}),"Example"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/$catalog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),'{\n    dataClasses: [\n        {\n            name: "Company",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Company",\n            dataURI: "http://127.0.0.1:8081/rest/Company"\n        },\n        {\n            name: "Employee",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",\n            dataURI: "http://127.0.0.1:8081/rest/Employee"\n        }\n    ]\n}\n')),(0,n.kt)("h2",u({},{id:"catalogall"}),"$catalog/$all"),(0,n.kt)("p",null,"Returns information about all of your project's dataclasses and their attributes\t"),(0,n.kt)("h3",u({},{id:"description-1"}),"Description"),(0,n.kt)("p",null,"Calling ",(0,n.kt)("inlineCode",{parentName:"p"},"$catalog/$all")," allows you to receive detailed information about the attributes in each of the dataclasses in your project's active model."),(0,n.kt)("p",null,"For more information about what is returned for each dataclass and its attributes, use ",(0,n.kt)("a",u({parentName:"p"},{href:"#catalogdataClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"$catalog/{dataClass}")),"."),(0,n.kt)("h3",u({},{id:"example-1"}),"Example"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/$catalog/$all")," "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),'{\n \n    "dataClasses": [\n        {\n            "name": "Company",\n            "className": "Company",\n            "collectionName": "CompanySelection",\n            "tableNumber": 2,\n            "scope": "public",\n            "dataURI": "/rest/Company",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "fieldPos": 1,\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "name",\n                    "kind": "storage",\n                    "fieldPos": 2,\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "revenues",\n                    "kind": "storage",\n                    "fieldPos": 3,\n                    "scope": "public",\n                    "type": "number"\n                },\n                {\n                    "name": "staff",\n                    "kind": "relatedEntities",\n                    "fieldPos": 4,\n                    "scope": "public",\n                    "type": "EmployeeSelection",\n                    "reversePath": true,\n                    "path": "employer"\n                },\n                {\n                    "name": "url",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        },\n        {\n            "name": "Employee",\n            "className": "Employee",\n            "collectionName": "EmployeeSelection",\n            "tableNumber": 1,\n            "scope": "public",\n            "dataURI": "/rest/Employee",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "firstname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "lastname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "employer",\n                    "kind": "relatedEntity",\n                    "scope": "public",\n                    "type": "Company",\n                    "path": "Company"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        }\n    ]\n}\n')),(0,n.kt)("h2",u({},{id:"catalogdataclass"}),"$catalog/{dataClass}"),(0,n.kt)("p",null,"Returns information about a dataclass and its attributes "),(0,n.kt)("h3",u({},{id:"description-2"}),"Description"),(0,n.kt)("p",null,"Calling ",(0,n.kt)("inlineCode",{parentName:"p"},"$catalog/{dataClass}")," for a specific dataclass will return the following information about the dataclass and the attributes it contains. If you want to retrieve this information for all the dataclasses in your project's datastore, use ",(0,n.kt)("a",u({parentName:"p"},{href:"#catalogall"}),(0,n.kt)("inlineCode",{parentName:"a"},"$catalog/$all")),"."),(0,n.kt)("p",null,"The information you retrieve concerns the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dataclass"),(0,n.kt)("li",{parentName:"ul"},"Attribute(s)"),(0,n.kt)("li",{parentName:"ul"},"Method(s) if any"),(0,n.kt)("li",{parentName:"ul"},"Primary key")),(0,n.kt)("h3",u({},{id:"dataclass"}),"DataClass"),(0,n.kt)("p",null,"The following properties are returned for an exposed dataclass:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Name of the dataclass")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"collectionName"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Name of an entity selection on the dataclass")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"tableNumber"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Table number in the 4D database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"scope"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Scope for the dataclass (note that only dataclasses whose ",(0,n.kt)("strong",{parentName:"td"},"Scope")," is public are displayed)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"dataURI"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A URI to the data in the dataclass")))),(0,n.kt)("h3",u({},{id:"attributes"}),"Attribute(s)"),(0,n.kt)("p",null,"Here are the properties for each exposed attribute that are returned:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Attribute name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"kind"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Attribute type (storage or relatedEntity).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"fieldPos"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Position of the field in the database table).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"scope"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Scope of the attribute (only those attributes whose scope is Public will appear).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"indexed"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"If any ",(0,n.kt)("strong",{parentName:"td"},"Index Kind")," was selected, this property will return true. Otherwise, this property does not appear.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Attribute type (bool, blob, byte, date, duration, image, long, long64, number, string, uuid, or word) or the dataclass for a N->1 relation attribute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"identifying"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"This property returns True if the attribute is the primary key. Otherwise, this property does not appear.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"path"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Name of the dataclass for a relatedEntity attribute, or name of the relation for a relatedEntities attribute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"foreignKey"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"For a relatedEntity attribute, name of the related attribute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"inverseName"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Name of the opposite relation for a relatedEntity or relateEntities attribute.")))),(0,n.kt)("h3",u({},{id:"primary-key"}),"Primary Key"),(0,n.kt)("p",null,"The key object returns the ",(0,n.kt)("strong",{parentName:"p"},"name")," of the attribute defined as the ",(0,n.kt)("strong",{parentName:"p"},"Primary Key")," for the dataclass."),(0,n.kt)("h3",u({},{id:"example-2"}),"Example"),(0,n.kt)("p",null,"You can retrieve the information regarding a specific dataclass."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/$catalog/Employee")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),'{\n    name: "Employee",\n    className: "Employee",\n    collectionName: "EmployeeCollection",\n    scope: "public",\n    dataURI: "http://127.0.0.1:8081/rest/Employee",\n    defaultTopSize: 20,\n    extraProperties: {\n        panelColor: "#76923C",\n        __CDATA: "\\n\\n\\t\\t\\n",\n        panel: {\n            isOpen: "true",\n            pathVisible: "true",\n            __CDATA: "\\n\\n\\t\\t\\t\\n",\n            position: {\n                X: "394",\n                Y: "42"\n            }\n        }\n    },\n    attributes: [\n        {\n            name: "ID",\n            kind: "storage",\n            scope: "public",\n            indexed: true,\n            type: "long",\n            identifying: true\n        },\n        {\n            name: "firstName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "lastName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "fullName",\n            kind: "calculated",\n            scope: "public",\n            type: "string",\n            readOnly: true\n        },\n        {\n            name: "salary",\n            kind: "storage",\n            scope: "public",\n            type: "number",\n            defaultFormat: {\n                format: "$###,###.00"\n            }\n        },\n        {\n            name: "photo",\n            kind: "storage",\n            scope: "public",\n            type: "image"\n        },\n        {\n            name: "employer",\n            kind: "relatedEntity",\n            scope: "public",\n            type: "Company",\n            path: "Company"\n        },\n        {\n            name: "employerName",\n            kind: "alias",\n            scope: "public",\n\n            type: "string",\n            path: "employer.name",\n            readOnly: true\n        },\n        {\n            name: "description",\n            kind: "storage",\n            scope: "public",\n            type: "string",\n            multiLine: true\n        },\n   ],\n    key: [\n        {\n            name: "ID"\n        }\n    ]\n}\n')))}N.isMDXComponent=!0}}]);