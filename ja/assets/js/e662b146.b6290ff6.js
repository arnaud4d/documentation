"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=s,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>y});var a=n(3905),s=Object.defineProperty,l=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e};const c={id:"classFunctions",title:"Calling ORDA class functions"},m=void 0,h={unversionedId:"REST/classFunctions",id:"version-19/REST/classFunctions",title:"Calling ORDA class functions",description:"You can call data model class functions defined for the ORDA Data Model through your REST requests, so that you can benefit from the exposed API of the targeted 4D application.",source:"@site/versioned_docs/version-19/REST/ClassFunctions.md",sourceDirName:"REST",slug:"/REST/classFunctions",permalink:"/docs/ja/19/REST/classFunctions",draft:!1,tags:[],version:"19",frontMatter:{id:"classFunctions",title:"Calling ORDA class functions"},sidebar:"docs",previous:{title:"Manipulating Data",permalink:"/docs/ja/19/REST/manData"},next:{title:"About REST Requests",permalink:"/docs/ja/19/REST/REST_requests"}},k={},y=[{value:"Function calls",id:"function-calls",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Scalar value parameter",id:"scalar-value-parameter",level:3},{value:"Entity parameter",id:"entity-parameter",level:3},{value:"Related entity parameter",id:"related-entity-parameter",level:4},{value:"Entity selection parameter",id:"entity-selection-parameter",level:3},{value:"Request examples",id:"request-examples",level:2},{value:"Using a datastore class function",id:"using-a-datastore-class-function",level:3},{value:"Result",id:"result",level:4},{value:"Using a dataclass class function",id:"using-a-dataclass-class-function",level:3},{value:"Result",id:"result-1",level:4},{value:"Using an entity class function",id:"using-an-entity-class-function",level:3},{value:"Result",id:"result-2",level:4},{value:"Using an entitySelection class function",id:"using-an-entityselection-class-function",level:3},{value:"Result",id:"result-3",level:4},{value:"Using an entitySelection class function and an entitySet",id:"using-an-entityselection-class-function-and-an-entityset",level:3},{value:"Result",id:"result-4",level:4},{value:"Using an entitySelection class function and an orderBy",id:"using-an-entityselection-class-function-and-an-orderby",level:3},{value:"Result",id:"result-5",level:4},{value:"Using an entity to be created on the server",id:"using-an-entity-to-be-created-on-the-server",level:3},{value:"Result",id:"result-6",level:4},{value:"Using an entity to be updated on the server",id:"using-an-entity-to-be-updated-on-the-server",level:3},{value:"Result",id:"result-7",level:4},{value:"Creating an entity with a related entity",id:"creating-an-entity-with-a-related-entity",level:3},{value:"Result",id:"result-8",level:4},{value:"Updating an entity with a related entity",id:"updating-an-entity-with-a-related-entity",level:3},{value:"Result",id:"result-9",level:4},{value:"Receiving an entity selection as parameter",id:"receiving-an-entity-selection-as-parameter",level:3},{value:"Result",id:"result-10",level:4},{value:"Using an entity selection updated on the client",id:"using-an-entity-selection-updated-on-the-client",level:3}],g={toc:y};function f(e){var t,s=e,{components:p}=s,c=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(s,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),c),l(t,r({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"You can call ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/ORDA/ordaClasses"}),"data model class functions")," defined for the ORDA Data Model through your REST requests, so that you can benefit from the exposed API of the targeted 4D application."),(0,a.kt)("p",null,"Functions are simply called in POST requests on the appropriate ORDA interface, without (). For example, if you have defined a ",(0,a.kt)("inlineCode",{parentName:"p"},"getCity()")," function in the City dataclass class, you could call it using the following request:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/rest/City/getCity")),(0,a.kt)("p",null,"with data in the body of the POST request: ",(0,a.kt)("inlineCode",{parentName:"p"},'["Aguada"]')),(0,a.kt)("p",null,"In 4D language, this call is equivalent to, :"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'$city:=ds.City.getCity("Aguada")\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only functions with the ",(0,a.kt)("inlineCode",{parentName:"p"},"exposed")," keyword can be directly called from REST requests. See ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/ORDA/ordaClasses#exposed-vs-non-exposed-functions"}),"Exposed vs non-exposed functions")," section.")),(0,a.kt)("h2",d({},{id:"function-calls"}),"Function calls"),(0,a.kt)("p",null,"Functions must always be called using REST ",(0,a.kt)("strong",{parentName:"p"},"POST")," requests (a GET request will receive an error)."),(0,a.kt)("p",null,"Functions are called on the corresponding object on the server datastore."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Class function"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Syntax"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/ja/19/ORDA/ordaClasses#datastore-class"}),"datastore class")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/$catalog/DataStoreClassFunction"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/ja/19/ORDA/ordaClasses#dataclass-class"}),"dataclass class")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/DataClassClassFunction"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/ja/19/ORDA/ordaClasses#entityselection-class"}),"entitySelection class")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$filter"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$orderby"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/ja/19/ORDA/ordaClasses#entity-class"}),"entity class")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}(key)/EntityClassFunction/"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"/rest/{dataClass}/Function")," can be used to call either a dataclass or an entity selection function (",(0,a.kt)("inlineCode",{parentName:"p"},"/rest/{dataClass}")," returns all entities of the DataClass as an entity selection).\nThe function is searched in the entity selection class first. If not found, it is searched in the dataclass. In other words, if a function with the same name is defined in both the DataClass class and the EntitySelection class, the dataclass class function will never be executed.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"All 4D code called from REST requests ",(0,a.kt)("strong",{parentName:"p"},"must be thread-safe")," if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server"}),(0,a.kt)("em",{parentName:"a"},"Use preemptive process")," setting value")," is ignored by the REST Server).")),(0,a.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("p",null,"You can send parameters to functions defined in ORDA user classes. On the server side, they will be received in the class functions in regular $1, $2, etc. parameters."),(0,a.kt)("p",null,"The following rules apply:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Parameters must be passed in the ",(0,a.kt)("strong",{parentName:"li"},"body of the POST request")),(0,a.kt)("li",{parentName:"ul"},"Parameters must be enclosed within a collection (JSON format)"),(0,a.kt)("li",{parentName:"ul"},"All scalar data types supported in JSON collections can be passed as parameters."),(0,a.kt)("li",{parentName:"ul"},"Entity and entity selection can be passed as parameters. The JSON object must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: ",(0,a.kt)("strong",{parentName:"li"},"DATACLASS,"),"ENTITY, ",(0,a.kt)("strong",{parentName:"li"},"ENTITIES,"),"DATASET.")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",d({parentName:"p"},{href:"#request-receiving-an-entity-as-parameter"}),"this example")," and ",(0,a.kt)("a",d({parentName:"p"},{href:"#request-receiving-an-entity-selection-as-parameter"}),"this example"),"."),(0,a.kt)("h3",d({},{id:"scalar-value-parameter"}),"Scalar value parameter"),(0,a.kt)("p",null,"Parameter(s) must simply be enclosed in a collection defined in the body. For example, with a  dataclass function ",(0,a.kt)("inlineCode",{parentName:"p"},"getCities()")," receiving text parameters:\n",(0,a.kt)("inlineCode",{parentName:"p"},"/rest/City/getCities"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters in body:")," ",'["Aguada","Paris"]'),(0,a.kt)("p",null,'All JSON data types are supported in parameters, including JSON pointers. Dates can be passed as strings in ISO 8601 date format (e.g. "2020-08-22T22:00:000Z").'),(0,a.kt)("h3",d({},{id:"entity-parameter"}),"Entity parameter"),(0,a.kt)("p",null,"Entities passed in parameters are referenced on the server through their key (",(0,a.kt)("em",{parentName:"p"},"i.e.")," __KEY property). If the key parameter is omitted in a request, a new entity is loaded in memory  the server.\nYou can also pass values for any attributes of the entity. These values will automatically be used for the entity handled on the server."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the request sends modified attribute values for an existing entity on the server, the called ORDA data model function will be automatically executed on the server with modified values. This feature allows you, for example, to check the result of an operation on an entity, after applying all business rules, from the client application. You can then decide to save or not the entity on the server.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Properties"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Attributes of the entity"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"mixed"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Optional - Values to modify")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"__DATACLASS"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Mandatory - Indicates the Dataclass of the entity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"__ENTITY"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Mandatory - True to indicate to the server that the parameter is an entity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"__KEY"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"mixed (same type as the primary key)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Optional - Primary key of the entity")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If __KEY is not provided, a new entity is created on the server with the given attributes."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("strong",{parentName:"li"},"KEY is provided, the entity corresponding to"),"KEY is loaded on the server with the given attributes")),(0,a.kt)("p",null,"See examples for ",(0,a.kt)("a",d({parentName:"p"},{href:"#creating-an-entity"}),"creating")," or ",(0,a.kt)("a",d({parentName:"p"},{href:"#updating-an-entity"}),"updating")," entities."),(0,a.kt)("h4",d({},{id:"related-entity-parameter"}),"Related entity parameter"),(0,a.kt)("p",null,"Same properties as for an ",(0,a.kt)("a",d({parentName:"p"},{href:"#entity-parameter"}),"entity parameter"),". In addition, the related entity must exist and is referenced by __KEY containing its primary key."),(0,a.kt)("p",null,"See examples for ",(0,a.kt)("a",d({parentName:"p"},{href:"#creating-an-entity-with-a-related-entity"}),"creating")," or ",(0,a.kt)("a",d({parentName:"p"},{href:"#updating-an-entity-with-a-related-entity"}),"updating")," entities with related entities."),(0,a.kt)("h3",d({},{id:"entity-selection-parameter"}),"Entity selection parameter"),(0,a.kt)("p",null,"The entity selection must have been defined beforehand using ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/REST/method#methodentityset"}),"$method=entityset"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the request sends a modified entity selection to the server, the called ORDA data model function will be automatically executed on the server with the modified entity selection.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Properties"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Attributes of the entity"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"mixed"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Optional - Values to modify")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"__DATASET"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Mandatory - entitySetID (UUID) of the entity selection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"__ENTITIES"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Mandatory - True to indicate to the server that the parameter is an entity selection")))),(0,a.kt)("p",null,"See example for ",(0,a.kt)("a",d({parentName:"p"},{href:"#receiving-an-entity-selection-as-parameter"}),"receiving an entity selection"),"."),(0,a.kt)("h2",d({},{id:"request-examples"}),"Request examples"),(0,a.kt)("p",null,"This database is exposed as a remote datastore on localhost (port 8111):"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(46282).Z,width:"882",height:"599"})),(0,a.kt)("h3",d({},{id:"using-a-datastore-class-function"}),"Using a datastore class function"),(0,a.kt)("p",null,"The US_Cities ",(0,a.kt)("inlineCode",{parentName:"p"},"DataStore")," class provides an API:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'// DataStore class\n\nClass extends DataStoreImplementation\n\nexposed Function getName()\n    $0:="US cities and zip codes manager" \n')),(0,a.kt)("p",null,"You can then run this request:  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/$catalog/getName")),(0,a.kt)("h4",d({},{id:"result"}),"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'{\n"result": "US cities and zip codes manager" \n}\n')),(0,a.kt)("h3",d({},{id:"using-a-dataclass-class-function"}),"Using a dataclass class function"),(0,a.kt)("p",null,"The Dataclass class ",(0,a.kt)("inlineCode",{parentName:"p"},"City")," provides an API that returns a city entity from a name passed in parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'// City class\n\nClass extends DataClass\n\nexposed Function getCity()\n var $0 : cs.CityEntity\n var $1,$nameParam : text\n $nameParam:=$1\n $0:=This.query("name = :1";$nameParam).first()\n')),(0,a.kt)("p",null,"You can then run this request:  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/City/getCity")),(0,a.kt)("p",null,"Body of the request: ",'["Aguada"]'),(0,a.kt)("h4",d({},{id:"result-1"}),"Result"),(0,a.kt)("p",null,"The result is an entity:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'{\n    "__entityModel": "City",\n    "__DATACLASS": "City",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",\n    "__STAMP": 1,\n    "ID": 1,\n    "name": "Aguada",\n    "countyFIPS": 72003,\n    "county": {\n        "__deferred": {\n            "uri": "/rest/County(72003)",\n            "__KEY": "72003" \n        }\n    },\n    "zips": {\n        "__deferred": {\n            "uri": "/rest/City(1)/zips?$expand=zips" \n        }\n    }\n}\n')),(0,a.kt)("h3",d({},{id:"using-an-entity-class-function"}),"Using an entity class function"),(0,a.kt)("p",null,"The Entity class ",(0,a.kt)("inlineCode",{parentName:"p"},"CityEntity")," provides an API:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'// CityEntity class\n\nClass extends Entity\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n')),(0,a.kt)("p",null,"You can then run this request:  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/City(2)/getPopulation")),(0,a.kt)("h4",d({},{id:"result-2"}),"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'{\n    "result": 48814\n}\n')),(0,a.kt)("h3",d({},{id:"using-an-entityselection-class-function"}),"Using an entitySelection class function"),(0,a.kt)("p",null,"The EntitySelection class ",(0,a.kt)("inlineCode",{parentName:"p"},"CitySelection")," provides an API:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'// CitySelection class\n\nClass extends EntitySelection\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n')),(0,a.kt)("p",null,"You can then run this request:  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},'127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"')),(0,a.kt)("h4",d({},{id:"result-3"}),"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'{\n    "result": 87256\n}\n')),(0,a.kt)("h3",d({},{id:"using-an-entityselection-class-function-and-an-entityset"}),"Using an entitySelection class function and an entitySet"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"StudentsSelection")," class has a ",(0,a.kt)("inlineCode",{parentName:"p"},"getAgeAverage")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"// StudentsSelection Class\n\nClass extends EntitySelection\n\nexposed Function getAgeAverage\n C_LONGINT($sum;$0)\n C_OBJECT($s)\n\n $sum:=0\n For each ($s;This)\n     $sum:=$sum+$s.age()\n End for each \n $0:=$sum/This.length\n")),(0,a.kt)("p",null,"Once you have created an entityset, you can run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532")),(0,a.kt)("h4",d({},{id:"result-4"}),"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'{\n    "result": 34\n}\n')),(0,a.kt)("h3",d({},{id:"using-an-entityselection-class-function-and-an-orderby"}),"Using an entitySelection class function and an orderBy"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"StudentsSelection")," class has a ",(0,a.kt)("inlineCode",{parentName:"p"},"getLastSummary")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'// StudentsSelection Class\n\n\nClass extends EntitySelection\n\nexposed Function getLastSummary\n C_TEXT($0)\n C_OBJECT($last)\n\n $last:=This.last()\n $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())\n')),(0,a.kt)("p",null,"You can then run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},'127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"')),(0,a.kt)("h4",d({},{id:"result-5"}),"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'{\n    "result": "Wilbert - Bull is ... 21" \n}\n')),(0,a.kt)("h3",d({},{id:"using-an-entity-to-be-created-on-the-server"}),"Using an entity to be created on the server"),(0,a.kt)("p",null,"The Dataclass class ",(0,a.kt)("inlineCode",{parentName:"p"},"Students")," has the function ",(0,a.kt)("inlineCode",{parentName:"p"},"pushData()")," receiving an entity containing data from the client. The ",(0,a.kt)("inlineCode",{parentName:"p"},"checkData()")," method runs some controls. If they are OK, the entity is saved and returned."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"// Students Class\n\nClass extends DataClass\n\nexposed Function pushData\n var $1, $entity, $status, $0 : Object\n\n $entity:=$1\n\n $status:=checkData($entity) // $status is an object with a success boolean property\n\n $0:=$status\n\n If ($status.success)\n     $status:=$entity.save()\n     If ($status.success)\n         $0:=$entity\n     End if \n End if\n\n")),(0,a.kt)("p",null,"You run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,a.kt)("p",null,"Body of the request:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"Ann",\n"lastname":"Brown" \n}]\n')),(0,a.kt)("p",null,"Since no ",(0,a.kt)("inlineCode",{parentName:"p"},"__KEY")," is given, a new Students entity is loaded on the server ",(0,a.kt)("strong",{parentName:"p"},"with the attributes received from the client"),". Because the ",(0,a.kt)("inlineCode",{parentName:"p"},"pushData()")," function runs a ",(0,a.kt)("inlineCode",{parentName:"p"},"save()")," action, the new entity is created."),(0,a.kt)("h4",d({},{id:"result-6"}),"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",\n    "__STAMP": 1,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWN",\n    "schoolID": null,\n    "school": null\n}\n')),(0,a.kt)("h3",d({},{id:"using-an-entity-to-be-updated-on-the-server"}),"Using an entity to be updated on the server"),(0,a.kt)("p",null,"Same as above but with a __KEY attribute"),(0,a.kt)("p",null,"You run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST:"),(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,a.kt)("p",null,"Body of the request:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"lastname":"Brownie",\n"__KEY":55\n}]\n')),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"__KEY")," is given, the Students entity with primary key 55 is loaded ",(0,a.kt)("strong",{parentName:"p"},"with the lastname value received from the client"),". Because the function runs a ",(0,a.kt)("inlineCode",{parentName:"p"},"save()")," action, the entity is updated."),(0,a.kt)("h4",d({},{id:"result-7"}),"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",\n    "__STAMP": 3,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWNIE",\n    "schoolID": null,\n    "school": null \n}\n')),(0,a.kt)("h3",d({},{id:"creating-an-entity-with-a-related-entity"}),"Creating an entity with a related entity"),(0,a.kt)("p",null,"In this example, we create a new Students entity with the Schools entity having primary key 2."),(0,a.kt)("p",null,"You run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST:"),(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,a.kt)("p",null,"Body of the request:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"John",\n"lastname":"Smith",\n"school":{"__KEY":2}\n}]\n')),(0,a.kt)("h4",d({},{id:"result-8"}),"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "56",\n    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",\n    "__STAMP": 1,\n    "ID": 56,\n    "firstname": "John",\n    "lastname": "SMITH",\n    "schoolID": 2,\n       "school": {\n        "__deferred": {\n            "uri": "/rest/Schools(2)",\n            "__KEY": "2" \n        }\n    }\n}\n')),(0,a.kt)("h3",d({},{id:"updating-an-entity-with-a-related-entity"}),"Updating an entity with a related entity"),(0,a.kt)("p",null,"In this example, we associate an existing school to a Students entity. The ",(0,a.kt)("inlineCode",{parentName:"p"},"StudentsEntity")," class has an API:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"// StudentsEntity class\n\nClass extends Entity\n\nexposed Function putToSchool()\n var $1, $school , $0, $status : Object\n\n  //$1 is a Schools entity\n $school:=$1\n  //Associate the related entity school to the current Students entity\n This.school:=$school\n\n $status:=This.save()\n\n $0:=$status\n")),(0,a.kt)("p",null,"You run this request, called on a Students entity :\n",(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students(1)/putToSchool"),"\nBody of the request:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'[{\n"__DATACLASS":"Schools",\n"__ENTITY":true,\n"__KEY":2\n}]\n')),(0,a.kt)("h4",d({},{id:"result-9"}),"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'{\n    "result": {\n        "success": true\n    }\n}\n')),(0,a.kt)("h3",d({},{id:"receiving-an-entity-selection-as-parameter"}),"Receiving an entity selection as parameter"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Students")," Dataclass class, the ",(0,a.kt)("inlineCode",{parentName:"p"},"setFinalExam()")," function updates a received entity selection ($1). It actually updates the ",(0,a.kt)("em",{parentName:"p"},"finalExam")," attribute with the received value ($2). It returns the primary keys of the updated entities."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"// Students class\n\nClass extends DataClass\n\nexposed Function setFinalExam()\n\n    var $1, $es, $student, $status : Object\n    var $2, $examResult : Text\n\n    var $keys, $0 : Collection\n\n      //Entity selection\n    $es:=$1\n\n    $examResult:=$2\n\n    $keys:=New collection()\n\n      //Loop on the entity selection\n    For each ($student;$es)\n        $student.finalExam:=$examResult\n        $status:=$student.save()\n        If ($status.success)\n            $keys.push($student.ID)\n        End if \n    End for each \n\n    $0:=$keys\n")),(0,a.kt)("p",null,"An entity set is first created with this request:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset')),(0,a.kt)("p",null,"Then you can run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/setFinalExam")),(0,a.kt)("p",null,"Body of the request:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'[\n{\n"__ENTITIES":true,\n"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" \n},\n"Passed" \n]\n\n')),(0,a.kt)("h4",d({},{id:"result-10"}),"Result"),(0,a.kt)("p",null,"The entities with primary keys 1 and 2 have been updated."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'{\n    "result": [\n        1,\n        2\n    ]\n}\n')),(0,a.kt)("h3",d({},{id:"using-an-entity-selection-updated-on-the-client"}),"Using an entity selection updated on the client"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"getAgeAverage()")," function ",(0,a.kt)("a",d({parentName:"p"},{href:"#using-an-entityselection-class-function-and-an-entityset"}),"defined above"),".  "),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'var $remoteDS, $newStudent, $students : Object\nvar $ageAverage : Integer\n\n$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")\n\n// $newStudent is a student entity to procees\n$newStudent:=...\n$students:=$remoteDS.Students.query("school.name = :1";"Math school")\n// We add an entity to the $students entity selection on the client\n$students.add($newStudent) \n\n// We call a function on the StudentsSelection class returning the age average of the students in the entity selection\n// The function is executed on the server on the updated $students entity selection which included the student added from the client\n$ageAverage:=$students.getAgeAverage()\n')))}f.isMDXComponent=!0},46282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png"}}]);