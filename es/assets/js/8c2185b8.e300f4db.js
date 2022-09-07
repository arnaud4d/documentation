"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"lock",title:"$lock"},s=void 0,i={unversionedId:"REST/lock",id:"version-19/REST/lock",title:"$lock",description:"Locks and unlocks an entity using the pessimistic mechanism.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/documentation/es/docs/19/REST/lock",draft:!1,tags:[],version:"19",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/documentation/es/docs/19/REST/imageformat"},next:{title:"$method",permalink:"/documentation/es/docs/19/REST/method"}},p={},c=[{value:"Sintaxis",id:"sintaxis",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Respuesta",id:"respuesta",level:3},{value:"Ejemplo",id:"ejemplo",level:2}],u={toc:c};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Locks and unlocks an entity using the ",(0,r.kt)("a",a({parentName:"p"},{href:"/documentation/es/docs/19/ORDA/entities#pessimistic-lock"}),"pessimistic mechanism"),"."),(0,r.kt)("h2",a({},{id:"sintaxis"}),"Sintaxis"),(0,r.kt)("p",null,"Para bloquear una entidad para las otras sesiones y procesos 4D:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"/?$lock=true\n")),(0,r.kt)("p",null,"Para desbloquear la entidad para las otras sesiones y procesos 4D:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"/?$lock=false\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",a({parentName:"p"},{href:"../API/EntityClass.html#lock"}),(0,r.kt)("inlineCode",{parentName:"a"},"lockKindText")," property"),' is "Locked by session".'),(0,r.kt)("h3",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"The locks triggered by the REST API are put at the ",(0,r.kt)("a",a({parentName:"p"},{href:"/documentation/es/docs/19/REST/authUsers#opening-sessions"}),"session")," level."),(0,r.kt)("p",null,"A locked entity is seen as ",(0,r.kt)("em",{parentName:"p"},"locked")," (i.e. lock / unlock / update / delete actions are not possible) by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"otras sesiones REST"),(0,r.kt)("li",{parentName:"ul"},"4D processes (client/server, remote datastore, standalone) running on the REST server.")),(0,r.kt)("p",null,"Una entidad bloqueada por la API REST s\xf3lo puede ser desbloqueada:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by its locker, i.e. a ",(0,r.kt)("inlineCode",{parentName:"li"},"/?$lock=false")," in the REST session that sets ",(0,r.kt)("inlineCode",{parentName:"li"},"/?$lock=true")),(0,r.kt)("li",{parentName:"ul"},"or if the session's ",(0,r.kt)("a",a({parentName:"li"},{href:"/documentation/es/docs/19/REST/directory"}),"inactivity timeout")," is reached (the session is closed).")),(0,r.kt)("h3",a({},{id:"respuesta"}),"Respuesta"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"?$lock")," request returns a JSON object with ",(0,r.kt)("inlineCode",{parentName:"p"},'"result"=true')," if the lock operation was successful and ",(0,r.kt)("inlineCode",{parentName:"p"},'"result"=false')," if it failed."),(0,r.kt)("p",null,'El objeto "__STATUS" devuelto tiene las siguientes propiedades:'),(0,r.kt)("p",null,"| Propiedad    |  | Type    | Descripci\xf3n                                                                                                                                     |\n| ------------ |  | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |\n|              |  |         | ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Disponible s\xf3lo en caso de \xe9xito:")),"                                                                                                         |\n| success      |  | boolean | true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case). |\n|              |  |         | ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Disponible s\xf3lo en caso de error:")),'                                                                                                         |\n| status       |  | number  | C\xf3digo de error, ver abajo                                                                                                                      |\n| statusText   |  | text    | Descripci\xf3n del error, ver abajo                                                                                                                |\n| lockKind     |  | number  | C\xf3digo de bloqueo                                                                                                                               |\n| lockKindText |  | text    | "Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process                                                   |'),(0,r.kt)("p",null,"The following values can be returned in the ",(0,r.kt)("em",{parentName:"p"},"status")," and ",(0,r.kt)("em",{parentName:"p"},"statusText")," properties of the ",(0,r.kt)("em",{parentName:"p"},"__STATUS")," object in case of error:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"status"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"statusText"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Comentario"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Stamp has changed"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Already locked"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"La entidad est\xe1 bloqueada por un bloqueo pesimista.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"4"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Other error"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Entity does not exist anymore"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"La entidad ya no existe en los datos.")))),(0,r.kt)("h2",a({},{id:"ejemplo"}),"Ejemplo"),(0,r.kt)("p",null,"Bloqueamos una entidad en un primer navegador:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"GET /rest/Customers(1)/?$lock=true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Respuesta:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n')),(0,r.kt)("p",null,"En un segundo navegador (otra sesi\xf3n), enviamos la misma petici\xf3n."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Respuesta:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n    }\n}\n')))}d.isMDXComponent=!0}}]);