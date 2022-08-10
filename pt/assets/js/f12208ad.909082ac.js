"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60506],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),m=s(n),u=r,c=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(c,i(i({ref:e},k),{},{components:n})):a.createElement(c,i({ref:e},k))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67804:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"lock",title:"$lock"},p=void 0,s={unversionedId:"REST/lock",id:"version-19-R6/REST/lock",title:"$lock",description:"Locks and unlocks an entity using the pessimistic mechanism.",source:"@site/versioned_docs/version-19-R6/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/main/pt/docs/REST/lock",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/main/pt/docs/REST/imageformat"},next:{title:"$method",permalink:"/main/pt/docs/REST/method"}},k={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:3},{value:"Response",id:"response",level:3},{value:"Example",id:"example",level:2}],m={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Locks and unlocks an entity using the ",(0,l.kt)("a",{parentName:"p",href:"/main/pt/docs/ORDA/entities#pessimistic-lock"},"pessimistic mechanism"),"."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"To lock an entity for other sessions and 4D processes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/?$lock=true\n")),(0,l.kt)("p",null,"To unlock the entity for other sessions and 4D processes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/?$lock=false\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"../API/EntityClass.html#lock"},(0,l.kt)("inlineCode",{parentName:"a"},"lockKindText")," property"),' is "Locked by session".'),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"The locks triggered by the REST API are put at the ",(0,l.kt)("a",{parentName:"p",href:"/main/pt/docs/REST/authUsers#opening-sessions"},"session")," level. "),(0,l.kt)("p",null,"A locked entity is seen as ",(0,l.kt)("em",{parentName:"p"},"locked")," (i.e. lock / unlock / update / delete actions are not possible) by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"other REST sessions"),(0,l.kt)("li",{parentName:"ul"},"4D processes (client/server, remote datastore, standalone) running on the REST server. ")),(0,l.kt)("p",null,"An entity locked by the REST API can only be unlocked:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"by its locker, i.e. a ",(0,l.kt)("inlineCode",{parentName:"li"},"/?$lock=false")," in the REST session that sets ",(0,l.kt)("inlineCode",{parentName:"li"},"/?$lock=true")),(0,l.kt)("li",{parentName:"ul"},"or if the session's ",(0,l.kt)("a",{parentName:"li",href:"/main/pt/docs/REST/directory"},"inactivity timeout")," is reached (the session is closed).")),(0,l.kt)("h3",{id:"response"},"Response"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"?$lock")," request returns a JSON object with ",(0,l.kt)("inlineCode",{parentName:"p"},'"result"=true')," if the lock operation was successful and ",(0,l.kt)("inlineCode",{parentName:"p"},'"result"=false')," if it failed. "),(0,l.kt)("p",null,'The returned "__STATUS" object has the following properties: '),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"Available only in case of success:")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"Available only in case of error:")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Error code, see below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusText"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the error, see below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lockKind"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Lock code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lockKindText"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},'"Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lockInfo"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Information about the lock origin. Returned properties depend on the lock origin (4D process or REST session).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"Available only for a 4D process lock:")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"task_id"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Process ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"user_name"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Session user name on the machine")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"user4d_alias"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Name or alias of the 4D user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"user4d_id"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"User id in the 4D database directory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"host_name"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Machine name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"task_name"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Process name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"client_version"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Version of the client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"Available only for a REST session lock:")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},'URL that locked the entity (e.g. "127.0.0.1:8043")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IPAddr"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},'IP address of the locker (e.g. "127.0.0.1")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"recordNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Record number of the locked record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"userAgent"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},'userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36")')))),(0,l.kt)("p",null,"The following values can be returned in the ",(0,l.kt)("em",{parentName:"p"},"status")," and ",(0,l.kt)("em",{parentName:"p"},"statusText")," properties of the ",(0,l.kt)("em",{parentName:"p"},"__STATUS")," object in case of error: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"status"),(0,l.kt)("th",{parentName:"tr",align:null},"statusText"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},'"Stamp has changed"'),(0,l.kt)("td",{parentName:"tr",align:null},"The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},'"Already locked"'),(0,l.kt)("td",{parentName:"tr",align:null},"The entity is locked by a pessimistic lock.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},'"Other error"'),(0,l.kt)("td",{parentName:"tr",align:null},"A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},'"Entity does not exist anymore"'),(0,l.kt)("td",{parentName:"tr",align:null},"The entity no longer exists in the data.")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"We lock an entity in a first browser:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /rest/Customers(1)/?$lock=true\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n')),(0,l.kt)("p",null,"In a second browser (other session), we send the same request."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n        "lockInfo":{\n            "host":"127.0.0.1:8043",\n            "IPAddr":"127.0.0.1",\n            "recordNumber": 7,\n            "userAgent": ""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);