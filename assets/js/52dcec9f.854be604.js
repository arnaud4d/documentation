"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"method",title:"$method"},s=void 0,d={unversionedId:"REST/method",id:"REST/method",title:"$method",description:"This parameter allows you to define the operation to execute with the returned entity or entity selection.",source:"@site/docs/REST/$method.md",sourceDirName:"REST",slug:"/REST/method",permalink:"/docs/next/REST/method",draft:!1,tags:[],version:"current",frontMatter:{id:"method",title:"$method"},sidebar:"docs",previous:{title:"$lock",permalink:"/docs/next/REST/lock"},next:{title:"$orderby",permalink:"/docs/next/REST/orderby"}},p={},m=[{value:"Available syntaxes",id:"available-syntaxes",level:2},{value:"$method=delete",id:"methoddelete",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:2},{value:"$method=entityset",id:"methodentityset",level:2},{value:"Description",id:"description-1",level:3},{value:"Example",id:"example-1",level:3},{value:"$method=release",id:"methodrelease",level:2},{value:"Description",id:"description-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Response:",id:"response",level:4},{value:"$method=subentityset",id:"methodsubentityset",level:2},{value:"Description",id:"description-3",level:3},{value:"Example",id:"example-3",level:3},{value:"Response:",id:"response-1",level:4},{value:"$method=update",id:"methodupdate",level:2},{value:"Description",id:"description-4",level:3},{value:"Example",id:"example-4",level:3}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This parameter allows you to define the operation to execute with the returned entity or entity selection. "),(0,i.kt)("h2",{id:"available-syntaxes"},"Available syntaxes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#methoddelete"},(0,i.kt)("strong",{parentName:"a"},"$method=delete"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'POST /Employee?$filter="ID=11"& $method=delete')),(0,i.kt)("td",{parentName:"tr",align:null},"Deletes the current entity, entity collection, or entity selection")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#methodentityset"},(0,i.kt)("strong",{parentName:"a"},"$method=entityset"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'GET /People/?$filter="ID>320"& $method=entityset& $timeout=600')),(0,i.kt)("td",{parentName:"tr",align:null},"Creates an entity set in 4D Server's cache based on the collection of entities defined in the REST request")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#methodrelease"},(0,i.kt)("strong",{parentName:"a"},"$method=release"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GET /Employee/$entityset/<entitySetID>?$method=release")),(0,i.kt)("td",{parentName:"tr",align:null},"Releases an existing entity set stored in 4D Server's cache")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#methodsubentityset"},(0,i.kt)("strong",{parentName:"a"},"$method=subentityset"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC")),(0,i.kt)("td",{parentName:"tr",align:null},"Creates an entity set based on the collection of related entities defined in the REST request")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#methodupdate"},(0,i.kt)("strong",{parentName:"a"},"$method=update"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"POST /Person/?$method=update")),(0,i.kt)("td",{parentName:"tr",align:null},"Updates and/or creates one or more entities")))),(0,i.kt)("h2",{id:"methoddelete"},"$method=delete"),(0,i.kt)("p",null,"Deletes the current entity, entity collection, or entity selection (created through REST)"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"$method=delete"),", you can delete an entity or an entire entity collection. You can define the collection of entities by using, for example, ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/REST/filter"},(0,i.kt)("inlineCode",{parentName:"a"},"$filter"))," or specifying one directly using ",(0,i.kt)("a",{parentName:"p",href:"%7BdataClass%7D.html#dataclasskey"},(0,i.kt)("inlineCode",{parentName:"a"},"{dataClass}({key})"))," ",(0,i.kt)("em",{parentName:"p"},"(e.g."),", /Employee(22))."),(0,i.kt)("p",null,"You can also delete the entities in an entity set, by calling ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/REST/entityset#entitysetentitysetid"},(0,i.kt)("inlineCode",{parentName:"a"},"$entityset/{entitySetID}")),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"You can then write the following REST request to delete the entity whose key is 22:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee(22)/?$method=delete")),(0,i.kt)("p",null,"You can also do a query as well using $filter:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},'POST  /rest/Employee?$filter="ID=11"&$method=delete')),(0,i.kt)("p",null,"You can also delete an entity set using $entityset/{entitySetID}:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "ok": true\n}\n')),(0,i.kt)("h2",{id:"methodentityset"},"$method=entityset"),(0,i.kt)("p",null,"Creates an entity set in 4D Server's cache based on the collection of entities defined in the REST request\t"),(0,i.kt)("h3",{id:"description-1"},"Description"),(0,i.kt)("p",null,"When you create a collection of entities in REST, you can also create an entity set that will be saved in 4D Server's cache. The entity set will have a reference number that you can pass to ",(0,i.kt)("inlineCode",{parentName:"p"},"$entityset/{entitySetID}")," to access it. By default, it is valid for two hours; however, you can modify that amount of time by passing a value (in seconds) to $timeout."),(0,i.kt)("p",null,"If you have used ",(0,i.kt)("inlineCode",{parentName:"p"},"$savedfilter")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"$savedorderby")," (in conjunction with ",(0,i.kt)("inlineCode",{parentName:"p"},"$filter")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"$orderby"),") when you created your entity set, you can recreate it with the same reference ID even if it has been removed from 4D Server's cache."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("p",null,"To create an entity set, which will be saved in 4D Server's cache for two hours, add ",(0,i.kt)("inlineCode",{parentName:"p"},"$method=entityset")," at the end of your REST request:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="ID>320"&$method=entityset')),(0,i.kt)("p",null,"You can create an entity set that will be stored in 4D Server's cache for only ten minutes by passing a new timeout to ",(0,i.kt)("inlineCode",{parentName:"p"},"$timeout"),":"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600')),(0,i.kt)("p",null,"You can also save the filter and order by, by passing true to ",(0,i.kt)("inlineCode",{parentName:"p"},"$savedfilter")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"$savedorderby"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"$skip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"$top/$limit")," are not taken into consideration when saving an entity set.")),(0,i.kt)("p",null,"After you create an entity set, the first element, ",(0,i.kt)("inlineCode",{parentName:"p"},"__ENTITYSET"),", is added to the object returned and indicates the URI to use to access the entity set:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"')),(0,i.kt)("h2",{id:"methodrelease"},"$method=release"),(0,i.kt)("p",null,"Releases an existing entity set stored in 4D Server's cache."),(0,i.kt)("h3",{id:"description-2"},"Description"),(0,i.kt)("p",null,"You can release an entity set, which you created using ",(0,i.kt)("a",{parentName:"p",href:"#methodentityset"},(0,i.kt)("inlineCode",{parentName:"a"},"$method=entityset")),", from 4D Server's cache."),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("p",null,"Release an existing entity set:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release")),(0,i.kt)("h4",{id:"response"},"Response:"),(0,i.kt)("p",null,"If the request was successful, the following response is returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "ok": true\n}\nIf the entity set wasn\'t found, an error is returned:\n\n{\n    "__ERROR": [\n        {\n             "message": "Error code: 1802\\nEntitySet  \\"4C51204DD8184B65AC7D79F09A077F24\\" cannot be found\\ncomponent:  \'dbmg\'\\ntask 22, name: \'HTTP connection handler\'\\n",\n            "componentSignature": "dbmg",\n            "errCode": 1802\n        }\n    ]\n}\n')),(0,i.kt)("h2",{id:"methodsubentityset"},"$method=subentityset"),(0,i.kt)("p",null,"Creates an entity set in 4D Server's cache based on the collection of related entities defined in the REST request\t"),(0,i.kt)("h3",{id:"description-3"},"Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$method=subentityset")," allows you to sort the data returned by the relation attribute defined in the REST request."),(0,i.kt)("p",null,"To sort the data, you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"$subOrderby")," property. For each attribute, you specify the order as ASC (or asc) for ascending order and DESC (desc) for descending order. By default, the data is sorted in ascending order."),(0,i.kt)("p",null,"If you want to specify multiple attributes, you can delimit them with a comma, \xb5, ",(0,i.kt)("inlineCode",{parentName:"p"},'$subOrderby="lastName desc, firstName asc"'),"."),(0,i.kt)("h3",{id:"example-3"},"Example"),(0,i.kt)("p",null,"If you want to retrieve only the related entities for a specific entity, you can make the following REST request where staff is the relation attribute in the Company dataclass linked to the Employee dataclass:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"}," GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC")),(0,i.kt)("h4",{id:"response-1"},"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n \n    "__ENTITYSET": "/rest/Employee/$entityset/FF625844008E430B9862E5FD41C741AB",\n    "__entityModel": "Employee",\n    "__COUNT": 2,\n    "__SENT": 2,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "4",\n            "__STAMP": 1,\n            "ID": 4,\n            "firstName": "Linda",\n            "lastName": "Jones",\n            "birthday": "1970-10-05T14:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        },\n        {\n            "__KEY": "1",\n            "__STAMP": 3,\n            "ID": 1,\n            "firstName": "John",\n            "lastName": "Smith",\n            "birthday": "1985-11-01T15:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        }\n    ]\n \n}\n')),(0,i.kt)("h2",{id:"methodupdate"},"$method=update"),(0,i.kt)("p",null,"Updates and/or creates one or more entities\t"),(0,i.kt)("h3",{id:"description-4"},"Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$method=update")," allows you to update and/or create one or more entities in a single ",(0,i.kt)("strong",{parentName:"p"},"POST"),". If you update and/or create one entity, it is done in an object with each property an attribute with its value, ",(0,i.kt)("em",{parentName:"p"},"e.g."),", ",(0,i.kt)("inlineCode",{parentName:"p"},'{ lastName: "Smith" }'),". If you update and/or create multiple entities, you must create a collection of objects. "),(0,i.kt)("p",null,"In any cases, you must set the ",(0,i.kt)("strong",{parentName:"p"},"POST")," data in the ",(0,i.kt)("strong",{parentName:"p"},"body")," of the request. "),(0,i.kt)("p",null,"To update an entity, you must pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"__KEY")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"__STAMP")," parameters in the object along with any modified attributes. If both of these parameters are missing, an entity will be added with the values in the object you send in the body of your ",(0,i.kt)("strong",{parentName:"p"},"POST"),"."),(0,i.kt)("p",null,"Triggers are executed immediately when saving the entity to the server. The response contains all the data as it exists on the server."),(0,i.kt)("p",null,"You can also put these requests to create or update entities in a transaction by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"$atomic/$atonce"),". If any errors occur during data validation, none of the entities are saved. You can also use $method=validate to validate the entities before creating or updating them."),(0,i.kt)("p",null,"If a problem arises while adding or modifying an entity, an error will be returned to you with that information."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Notes for specific attribute types:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},'*   **Dates** must be expressed in JS format: YYYY-MM-DDTHH:MM:SSZ (e.g., "2010-10-05T23:00:00Z"). If you have selected the Date only property for your Date attribute, the time zone and time (hour, minutes, and seconds) will be removed. In this case, you can also send the date in the format that it is returned to you dd!mm!yyyy (e.g., 05!10!2013).\n*   **Booleans** are either true or false.\n*   Uploaded files using `$upload` can be applied to an attribute of type Image or BLOB by passing the object returned in the following format { "ID": "D507BC03E613487E9B4C2F6A0512FE50"}\n'))),(0,i.kt)("h3",{id:"example-4"},"Example"),(0,i.kt)("p",null,"To update a specific entity, you use the following URL:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"POST  /rest/Person/?$method=update")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"POST data:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    __KEY: "340",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Miller"\n}\n')),(0,i.kt)("p",null,"The firstName and lastName attributes in the entity indicated above will be modified leaving all other attributes (except calculated ones based on these attributes) unchanged."),(0,i.kt)("p",null,"If you want to create an entity, you can POST the attributes using this URL:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"POST  /rest/Person/?$method=update")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"POST data:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{ \n    firstName: "John",\n    lastName: "Smith"\n}\n')),(0,i.kt)("p",null,"You can also create and update multiple entities at the same time using the same URL above by passing multiple objects in an array to the POST:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"POST  /rest/Person/?$method=update")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"POST data:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[{ \n    "__KEY": "309",\n    "__STAMP": 5,\n    "ID": "309",\n    "firstName": "Penelope",\n    "lastName": "Miller"\n}, { \n    "firstName": "Ann",\n    "lastName": "Jones"\n}]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response:")),(0,i.kt)("p",null,"When you add or modify an entity, it is returned to you with the attributes that were modified. For example, if you create the new employee above, the following will be returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "__KEY": "622", \n    "__STAMP": 1, \n    "uri": "http://127.0.0.1:8081/rest/Employee(622)", \n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 622, \n    "firstName": "John", \n    "firstName": "Smith"\n}\n')),(0,i.kt)("p",null,"If, for example, the stamp is not correct, the following error is returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "__STATUS": {\n        "status": 2,\n        "statusText": "Stamp has changed",\n        "success": false\n    },\n    "__KEY": "1",\n    "__STAMP": 12,\n    "__TIMESTAMP": "!!2020-03-31!!",\n    "ID": 1,\n    "firstname": "Denise",\n    "lastname": "O\'Peters",\n    "isWoman": true,\n    "numberOfKids": 1,\n    "addressID": 1,\n    "gender": true,\n    "imageAtt": {\n        "__deferred": {\n            "uri": "/rest/Persons(1)/imageAtt?$imageformat=best&$version=12&$expand=imageAtt",\n            "image": true\n        }\n    },\n    "extra": {\n        "num": 1,\n        "alpha": "I am 1"\n    },\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(1)",\n            "__KEY": "1"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Given stamp does not match current one for record# 0 of table Persons",\n            "componentSignature": "dbmg",\n            "errCode": 1263\n        },\n        {\n            "message": "Cannot save record 0 in table Persons of database remote_dataStore",\n            "componentSignature": "dbmg",\n            "errCode": 1046\n        },\n        {\n            "message": "The entity# 1 in the \\"Persons\\" dataclass cannot be saved",\n            "componentSignature": "dbmg",\n            "errCode": 1517\n        }\n    ]\n}{}\n\n')))}c.isMDXComponent=!0}}]);