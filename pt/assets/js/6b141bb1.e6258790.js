"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87650],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>y});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),y=a,f=m["".concat(i,".").concat(y)]||m[y]||u[y]||o;return r?t.createElement(f,l(l({ref:n},c),{},{components:r})):t.createElement(f,l({ref:n},c))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89382:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});r(67294);var t=r(3905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"asArray",title:"$asArray"},p=void 0,i={unversionedId:"REST/asArray",id:"version-18/REST/asArray",title:"$asArray",description:"Returns the result of a query in an array (i.e. a collection) instead of a JSON object.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$asArray.md",sourceDirName:"REST",slug:"/REST/asArray",permalink:"/docs/pt/18/REST/asArray",draft:!1,tags:[],version:"18",frontMatter:{id:"asArray",title:"$asArray"},sidebar:"docs",previous:{title:"{dataClass}",permalink:"/docs/pt/18/REST/{dataClass}"},next:{title:"$atomic/$atonce",permalink:"/docs/pt/18/REST/atomic_$atonce"}},s={},c=[{value:"Descr\xe7\xe3o",id:"descr\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],u={toc:c};function m(e){var{components:n}=e,r=o(e,["components"]);return(0,t.kt)("wrapper",a({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Returns the result of a query in an array (i.e. a collection) instead of a JSON object."),(0,t.kt)("h2",a({},{id:"descr\xe7\xe3o"}),"Descr\xe7\xe3o"),(0,t.kt)("p",null,"If you want to receive the response in an array, you just have to add ",(0,t.kt)("inlineCode",{parentName:"p"},"$asArray")," to your REST request (",(0,t.kt)("em",{parentName:"p"},"e.g."),", ",(0,t.kt)("inlineCode",{parentName:"p"},"$asArray=true"),")."),(0,t.kt)("h2",a({},{id:"exemplo"}),"Exemplo"),(0,t.kt)("p",null,"Here is an example or how to receive the response in an array."),(0,t.kt)("p",null," ",(0,t.kt)("inlineCode",{parentName:"p"},'GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Response"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{}),'[\n    {\n        "__KEY": 15,\n        "__STAMP": 0,\n        "ID": 15,\n        "name": "Alpha North Yellow",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 82000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    },\n    {\n        "__KEY": 34,\n        "__STAMP": 0,\n        "ID": 34,\n        "name": "Astral Partner November",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 90000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    },\n    {\n        "__KEY": 47,\n        "__STAMP": 0,\n        "ID": 47,\n        "name": "Audio Production Uniform",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 28000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    }\n]\n')),(0,t.kt)("p",null,"The same data in its default JSON format:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{}),'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 50,\n    "__COUNT": 52,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "15",\n            "__TIMESTAMP": "2018-03-28T14:38:07.434Z",\n            "__STAMP": 0,\n            "ID": 15,\n            "name": "Alpha North Yellow",\n            "creationDate": "0!0!0",\n            "revenues": 82000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(15)/employees?$expand=employees"\n                }\n            }\n        },\n        {\n            "__KEY": "34",\n            "__TIMESTAMP": "2018-03-28T14:38:07.439Z",\n            "__STAMP": 0,\n            "ID": 34,\n            "name": "Astral Partner November",\n            "creationDate": "0!0!0",\n            "revenues": 90000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(34)/employees?$expand=employees"\n                }\n            }\n        },\n        {\n            "__KEY": "47",\n            "__TIMESTAMP": "2018-03-28T14:38:07.443Z",\n            "__STAMP": 0,\n            "ID": 47,\n            "name": "Audio Production Uniform",\n            "creationDate": "0!0!0",\n            "revenues": 28000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(47)/employees?$expand=employees"\n                }\n            }\n        }\n    ],\n"__SENT": 3\n}\n')))}m.isMDXComponent=!0}}]);