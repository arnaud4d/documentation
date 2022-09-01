"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),y=a,d=m["".concat(i,".").concat(y)]||m[y]||s[y]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"queryplan",title:"$queryplan"},p=void 0,i={unversionedId:"REST/queryplan",id:"version-18/REST/queryplan",title:"$queryplan",description:"Devuelve la petici\xf3n tal y como se pas\xf3 a 4D Server (por ejemplo, , $queryplan=true)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/$queryplan.md",sourceDirName:"REST",slug:"/REST/queryplan",permalink:"/docs/es/18/REST/queryplan",draft:!1,tags:[],version:"18",frontMatter:{id:"queryplan",title:"$queryplan"},sidebar:"docs",previous:{title:"$querypath",permalink:"/docs/es/18/REST/querypath"},next:{title:"$savedfilter",permalink:"/docs/es/18/REST/savedfilter"}},u={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Respuesta:",id:"respuesta",level:4}],s={toc:c};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Devuelve la petici\xf3n tal y como se pas\xf3 a 4D Server (",(0,r.kt)("em",{parentName:"p"},"por ejemplo, "),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$queryplan=true"),")"),(0,r.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"$queryplan devuelve el plan de la petici\xf3n tal y como se pas\xf3 a 4D Server."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Propiedad"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"item"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Petici\xf3n ejecutada")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"subquery"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Array"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Si hay una subconsulta, un objeto adicional que contiene una propiedad de elemento (como la anterior)")))),(0,r.kt)("p",null,"Para m\xe1s informaci\xf3n sobre los planes de petici\xf3n, consulte ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/REST/genInfo#querypath-and-queryplan"}),"queryPlan y queryPath"),"."),(0,r.kt)("h2",a({},{id:"ejemplo"}),"Ejemplo"),(0,r.kt)("p",null,"Si pasas la siguiente petici\xf3n:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true')),(0,r.kt)("h4",a({},{id:"respuesta"}),"Respuesta:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company. ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);