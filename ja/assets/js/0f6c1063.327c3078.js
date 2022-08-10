"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(n),d=r,m=k["".concat(s,".").concat(d)]||k[d]||u[d]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},68245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"lock",title:"$lock"},s=void 0,p={unversionedId:"REST/lock",id:"version-19/REST/lock",title:"$lock",description:"Locks and unlocks an entity using the pessimistic mechanism.",source:"@site/versioned_docs/version-19/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/main/ja/docs/19/REST/lock",draft:!1,tags:[],version:"19",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/main/ja/docs/19/REST/imageformat"},next:{title:"$method",permalink:"/main/ja/docs/19/REST/method"}},c={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:3},{value:"Response",id:"response",level:3},{value:"Example",id:"example",level:2}],k={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Locks and unlocks an entity using the ",(0,l.kt)("a",{parentName:"p",href:"/main/ja/docs/19/ORDA/entities#pessimistic-lock"},"pessimistic mechanism"),"."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"To lock an entity for other sessions and 4D processes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/?$lock=true\n")),(0,l.kt)("p",null,"To unlock the entity for other sessions and 4D processes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/?$lock=false\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"../API/EntityClass.html#lock"},(0,l.kt)("inlineCode",{parentName:"a"},"lockKindText")," property"),' is "Locked by session".'),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"The locks triggered by the REST API are put at the ",(0,l.kt)("a",{parentName:"p",href:"/main/ja/docs/19/REST/authUsers#opening-sessions"},"session")," level. "),(0,l.kt)("p",null,"A locked entity is seen as ",(0,l.kt)("em",{parentName:"p"},"locked")," (i.e. lock / unlock / update / delete actions are not possible) by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"other REST sessions"),(0,l.kt)("li",{parentName:"ul"},"4D processes (client/server, remote datastore, standalone) running on the REST server. ")),(0,l.kt)("p",null,"An entity locked by the REST API can only be unlocked:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"by its locker, i.e. a ",(0,l.kt)("inlineCode",{parentName:"li"},"/?$lock=false")," in the REST session that sets ",(0,l.kt)("inlineCode",{parentName:"li"},"/?$lock=true")),(0,l.kt)("li",{parentName:"ul"},"or if the session's ",(0,l.kt)("a",{parentName:"li",href:"/main/ja/docs/19/REST/directory"},"inactivity timeout")," is reached (the session is closed).")),(0,l.kt)("h3",{id:"response"},"Response"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"?$lock")," request returns a JSON object with ",(0,l.kt)("inlineCode",{parentName:"p"},'"result"=true')," if the lock operation was successful and ",(0,l.kt)("inlineCode",{parentName:"p"},'"result"=false')," if it failed. "),(0,l.kt)("p",null,'The returned "__STATUS" object has the following properties: '),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"Available only in case of success:")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"Available only in case of error:")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Error code, see below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusText"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the error, see below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lockKind"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Lock code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lockKindText"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},'"Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process')))),(0,l.kt)("p",null,"The following values can be returned in the ",(0,l.kt)("em",{parentName:"p"},"status")," and ",(0,l.kt)("em",{parentName:"p"},"statusText")," properties of the ",(0,l.kt)("em",{parentName:"p"},"__STATUS")," object in case of error: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"status"),(0,l.kt)("th",{parentName:"tr",align:null},"statusText"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},'"Stamp has changed"'),(0,l.kt)("td",{parentName:"tr",align:null},"The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},'"Already locked"'),(0,l.kt)("td",{parentName:"tr",align:null},"The entity is locked by a pessimistic lock.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},'"Other error"'),(0,l.kt)("td",{parentName:"tr",align:null},"A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},'"Entity does not exist anymore"'),(0,l.kt)("td",{parentName:"tr",align:null},"The entity no longer exists in the data.")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"We lock an entity in a first browser:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /rest/Customers(1)/?$lock=true\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n')),(0,l.kt)("p",null,"In a second browser (other session), we send the same request."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n    }\n}\n')))}d.isMDXComponent=!0}}]);