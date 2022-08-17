"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(n),d=a,m=k["".concat(i,".").concat(d)]||k[d]||u[d]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},71838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"lock",title:"$lock"},s=void 0,i={unversionedId:"REST/lock",id:"version-19/REST/lock",title:"$lock",description:"Locks and unlocks an entity using the pessimistic mechanism.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/docs/ja/19/REST/lock",draft:!1,tags:[],version:"19",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/docs/ja/19/REST/imageformat"},next:{title:"$method",permalink:"/docs/ja/19/REST/method"}},p={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:3},{value:"Response",id:"response",level:3},{value:"Example",id:"example",level:2}],u={toc:c};function k(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Locks and unlocks an entity using the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/ja/19/ORDA/entities#pessimistic-lock"}),"pessimistic mechanism"),"."),(0,r.kt)("h2",a({},{id:"syntax"}),"Syntax"),(0,r.kt)("p",null,"To lock an entity for other sessions and 4D processes:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"/?$lock=true\n")),(0,r.kt)("p",null,"To unlock the entity for other sessions and 4D processes:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"/?$lock=false\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",a({parentName:"p"},{href:"../API/EntityClass.html#lock"}),(0,r.kt)("inlineCode",{parentName:"a"},"lockKindText")," property"),' is "Locked by session".'),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The locks triggered by the REST API are put at the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/ja/19/REST/authUsers#opening-sessions"}),"session")," level."),(0,r.kt)("p",null,"A locked entity is seen as ",(0,r.kt)("em",{parentName:"p"},"locked")," (i.e. lock / unlock / update / delete actions are not possible) by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"other REST sessions"),(0,r.kt)("li",{parentName:"ul"},"4D processes (client/server, remote datastore, standalone) running on the REST server.")),(0,r.kt)("p",null,"An entity locked by the REST API can only be unlocked:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by its locker, i.e. a ",(0,r.kt)("inlineCode",{parentName:"li"},"/?$lock=false")," in the REST session that sets ",(0,r.kt)("inlineCode",{parentName:"li"},"/?$lock=true")),(0,r.kt)("li",{parentName:"ul"},"or if the session's ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/ja/19/REST/directory"}),"inactivity timeout")," is reached (the session is closed).")),(0,r.kt)("h3",a({},{id:"response"}),"Response"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"?$lock")," request returns a JSON object with ",(0,r.kt)("inlineCode",{parentName:"p"},'"result"=true')," if the lock operation was successful and ",(0,r.kt)("inlineCode",{parentName:"p"},'"result"=false')," if it failed."),(0,r.kt)("p",null,'The returned "__STATUS" object has the following properties:'),(0,r.kt)("p",null,"| Property     |  | Type    | Description                                                                                                                                     |\n| ------------ |  | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |\n|              |  |         | ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Available only in case of success:")),"                                                                                                        |\n| success      |  | boolean | true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case). |\n|              |  |         | ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Available only in case of error:")),'                                                                                                          |\n| status       |  | number  | Error code, see below                                                                                                                           |\n| statusText   |  | text    | Description of the error, see below                                                                                                             |\n| lockKind     |  | number  | Lock code                                                                                                                                       |\n| lockKindText |  | text    | "Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process                                                   |'),(0,r.kt)("p",null,"The following values can be returned in the ",(0,r.kt)("em",{parentName:"p"},"status")," and ",(0,r.kt)("em",{parentName:"p"},"statusText")," properties of the ",(0,r.kt)("em",{parentName:"p"},"__STATUS")," object in case of error:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"status"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"statusText"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Stamp has changed"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Already locked"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The entity is locked by a pessimistic lock.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"4"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Other error"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Entity does not exist anymore"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The entity no longer exists in the data.")))),(0,r.kt)("h2",a({},{id:"example"}),"Example"),(0,r.kt)("p",null,"We lock an entity in a first browser:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"GET /rest/Customers(1)/?$lock=true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n')),(0,r.kt)("p",null,"In a second browser (other session), we send the same request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n    }\n}\n')))}k.isMDXComponent=!0}}]);