"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,c=d["".concat(p,".").concat(y)]||d[y]||m[y]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"attributes",title:"$attributes"},p=void 0,s={unversionedId:"REST/attributes",id:"REST/attributes",title:"$attributes",description:"Allows selecting the related attribute(s) to get from the dataclass (e.g., Company(1)?$attributes=employees.lastname or Employee?$attributes=employer.name).",source:"@site/docs/REST/$attributes.md",sourceDirName:"REST",slug:"/REST/attributes",permalink:"/docs/pt/next/REST/attributes",draft:!1,tags:[],version:"current",frontMatter:{id:"attributes",title:"$attributes"},sidebar:"docs",previous:{title:"$atomic/$atonce",permalink:"/docs/pt/next/REST/atomic_$atonce"},next:{title:"$binary",permalink:"/docs/pt/next/REST/binary"}},u={},m=[{value:"Description",id:"description",level:2},{value:"Example with related entities",id:"example-with-related-entities",level:2},{value:"Example with related entity",id:"example-with-related-entity",level:2}],d={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Allows selecting the related attribute(s) to get from the dataclass (",(0,i.kt)("em",{parentName:"p"},"e.g."),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Company(1)?$attributes=employees.lastname")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Employee?$attributes=employer.name"),")."),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"When you have relation attributes in a dataclass, use ",(0,i.kt)("inlineCode",{parentName:"p"},"$attributes")," to define the path of attributes whose values you want to get for the related entity or entities."),(0,i.kt)("p",null,"You can apply ",(0,i.kt)("inlineCode",{parentName:"p"},"$attributes")," to an entity (",(0,i.kt)("em",{parentName:"p"},"e.g."),", People(1)) or an entity selection (",(0,i.kt)("em",{parentName:"p"},"e.g."),", People/$entityset/0AF4679A5C394746BFEB68D2162A19FF) ."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"$attributes"),' is not specified in a query, or if the "*" value is passed, all available attributes are extracted. ',(0,i.kt)("strong",{parentName:"p"},"Related entity")," attributes are extracted with the simple form: an object with property ",(0,i.kt)("inlineCode",{parentName:"p"},"__KEY")," (primary key) and ",(0,i.kt)("inlineCode",{parentName:"p"},"URI"),". ",(0,i.kt)("strong",{parentName:"p"},"Related entities")," attributes are not extracted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"$attributes")," is specified for ",(0,i.kt)("strong",{parentName:"p"},"related entity")," attributes:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity"),": the related entity is returned with simple form (deferred __KEY property (primary key)) and ",(0,i.kt)("inlineCode",{parentName:"li"},"URI"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.*"),": all the attributes of the related entity are returned"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."),": only those attributes of the related entity are returned.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"$attributes")," is specified for ",(0,i.kt)("strong",{parentName:"li"},"related entities")," attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.*"),": all the properties of all the related entities are returned"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ..."),": only those attributes of the related entities are returned.")))),(0,i.kt)("h2",{id:"example-with-related-entities"},"Example with related entities"),(0,i.kt)("p",null,'If we pass the following REST request for our Company dataclass (which has a relation attribute "employees"):'),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n        "__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n        "__GlobalStamp": 50,\n        "__COUNT": 135,\n        "__FIRST": 0,\n        "__ENTITIES": [\n            {\n                "__KEY": "1",\n                "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n                "__STAMP": 5,\n                "lastname": "ESSEAL"\n            },\n            {\n                "__KEY": "2",\n                "__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n                "__STAMP": 6,\n                "lastname": "JONES"\n            },\n            ...\n    }\n}\n')),(0,i.kt)("p",null,"If you want to get all attributes from employees:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.*")),(0,i.kt)("p",null,"If you want to get last name and job name attributes from employees:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname")),(0,i.kt)("h2",{id:"example-with-related-entity"},"Example with related entity"),(0,i.kt)("p",null,'If we pass the following REST request for our Employee dataclass (which has several relation attributes, including "employer"):'),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.name")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "__entityModel": "Employee",\n    "__KEY": "1",\n    "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n    "__STAMP": 5,\n    "employer": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n        "__STAMP": 0,\n        "name": "Adobe"\n    }\n}\n')),(0,i.kt)("p",null,"If you want to get all attributes of the employer:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.*")),(0,i.kt)("p",null,"If you want to get the last names of all employees of the employer:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.employees.lastname")))}y.isMDXComponent=!0}}]);