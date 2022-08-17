"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,c=d["".concat(p,".").concat(y)]||d[y]||m[y]||i;return n?r.createElement(c,l(l({ref:t},u),{},{components:n})):r.createElement(c,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"attributes",title:"$attributes"},o=void 0,p={unversionedId:"REST/attributes",id:"version-19/REST/attributes",title:"$attributes",description:"Allows selecting the related attribute(s) to get from the dataclass (e.g., Company(1)?$attributes=employees.lastname or Employee?$attributes=employer.name).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/$attributes.md",sourceDirName:"REST",slug:"/REST/attributes",permalink:"/docs/es/19/REST/attributes",draft:!1,tags:[],version:"19",frontMatter:{id:"attributes",title:"$attributes"},sidebar:"docs",previous:{title:"$atomic/$atonce",permalink:"/docs/es/19/REST/atomic_$atonce"},next:{title:"$binary",permalink:"/docs/es/19/REST/binary"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Example with related entities",id:"example-with-related-entities",level:2},{value:"Example with related entity",id:"example-with-related-entity",level:2}],m={toc:u};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Allows selecting the related attribute(s) to get from the dataclass (",(0,r.kt)("em",{parentName:"p"},"e.g."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Company(1)?$attributes=employees.lastname")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee?$attributes=employer.name"),")."),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"When you have relation attributes in a dataclass, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$attributes")," to define the path of attributes whose values you want to get for the related entity or entities."),(0,r.kt)("p",null,"You can apply ",(0,r.kt)("inlineCode",{parentName:"p"},"$attributes")," to an entity (",(0,r.kt)("em",{parentName:"p"},"e.g."),", People(1)) or an entity selection (",(0,r.kt)("em",{parentName:"p"},"e.g."),", People/$entityset/0AF4679A5C394746BFEB68D2162A19FF) ."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"$attributes"),' is not specified in a query, or if the "*" value is passed, all available attributes are extracted. ',(0,r.kt)("strong",{parentName:"p"},"Related entity")," attributes are extracted with the simple form: an object with property ",(0,r.kt)("inlineCode",{parentName:"p"},"__KEY")," (primary key) and ",(0,r.kt)("inlineCode",{parentName:"p"},"URI"),". ",(0,r.kt)("strong",{parentName:"p"},"Related entities")," attributes are not extracted.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"$attributes")," is specified for ",(0,r.kt)("strong",{parentName:"p"},"related entity")," attributes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity"),": the related entity is returned with simple form (deferred __KEY property (primary key)) and ",(0,r.kt)("inlineCode",{parentName:"li"},"URI"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.*"),": all the attributes of the related entity are returned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."),": only those attributes of the related entity are returned.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"$attributes")," is specified for ",(0,r.kt)("strong",{parentName:"li"},"related entities")," attributes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.*"),": all the properties of all the related entities are returned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ..."),": only those attributes of the related entities are returned.")))),(0,r.kt)("h2",a({},{id:"example-with-related-entities"}),"Example with related entities"),(0,r.kt)("p",null,'If we pass the following REST request for our Company dataclass (which has a relation attribute "employees"):'),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n        "__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n        "__GlobalStamp": 50,\n        "__COUNT": 135,\n        "__FIRST": 0,\n        "__ENTITIES": [\n            {\n                "__KEY": "1",\n                "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n                "__STAMP": 5,\n                "lastname": "ESSEAL"\n            },\n            {\n                "__KEY": "2",\n                "__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n                "__STAMP": 6,\n                "lastname": "JONES"\n            },\n            ...\n    }\n}\n')),(0,r.kt)("p",null,"If you want to get all attributes from employees:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.*")),(0,r.kt)("p",null,"If you want to get last name and job name attributes from employees:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname")),(0,r.kt)("h2",a({},{id:"example-with-related-entity"}),"Example with related entity"),(0,r.kt)("p",null,'If we pass the following REST request for our Employee dataclass (which has several relation attributes, including "employer"):'),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.name")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "__entityModel": "Employee",\n    "__KEY": "1",\n    "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n    "__STAMP": 5,\n    "employer": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n        "__STAMP": 0,\n        "name": "Adobe"\n    }\n}\n')),(0,r.kt)("p",null,"If you want to get all attributes of the employer:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.*")),(0,r.kt)("p",null,"If you want to get the last names of all employees of the employer:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.employees.lastname")))}d.isMDXComponent=!0}}]);