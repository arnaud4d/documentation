"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"info",title:"$info"},s=void 0,o={unversionedId:"REST/info",id:"version-19/REST/info",title:"$info",description:"Renvoie des informations sur les ensembles d'entit\xe9s stock\xe9s couramment dans le cache de 4D Server ainsi que sur les sessions utilisateur",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/$info.md",sourceDirName:"REST",slug:"/REST/info",permalink:"/documentation/fr/docs/19/REST/info",draft:!1,tags:[],version:"19",frontMatter:{id:"info",title:"$info"},sidebar:"docs",previous:{title:"$directory",permalink:"/documentation/fr/docs/19/REST/directory"},next:{title:"$upload",permalink:"/documentation/fr/docs/19/REST/upload"}},u={},p=[{value:"Description",id:"description",level:2},{value:"entitySet",id:"entityset",level:3},{value:"sessionInfo",id:"sessioninfo",level:3},{value:"Exemple",id:"exemple",level:2}],d={toc:p};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Renvoie des informations sur les ensembles d'entit\xe9s stock\xe9s couramment dans le cache de 4D Server ainsi que sur les sessions utilisateur"),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"En appelant cette requ\xeate pour votre projet, vous r\xe9cup\xe9rez des informations dans les propri\xe9t\xe9s suivantes :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"cacheSize"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Taille du cache du serveur 4D.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"usedCache"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"La quantit\xe9 de cache du serveur 4D utilis\xe9e.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"entitySetCount"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre de s\xe9lections d'entit\xe9s.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"entitySet"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Collections"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Une collection dans laquelle chaque objet contient des informations sur chaque s\xe9lection d'entit\xe9s.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ProgressInfo"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Collections"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Une collection contenant des informations sur les indicateurs de progression.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"sessionInfo"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Collections"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Une collection dans laquelle chaque objet contient des informations sur chaque session utilisateur.")))),(0,r.kt)("h3",a({},{id:"entityset"}),"entitySet"),(0,r.kt)("p",null,"Pour chaque s\xe9lection d'entit\xe9s stock\xe9 dans le cache de 4D Server, les informations retourn\xe9es sont les suivantes :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"id"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Un UUID qui r\xe9f\xe9rence l'ensemble d'entit\xe9s.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"dataClass"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nom de la dataclass.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"selectionSize"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre d'entit\xe9s dans la s\xe9lection d'entit\xe9s.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"sorted"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Retourne vrai si l'ensemble a \xe9t\xe9 tri\xe9 (\xe0 l'aide de ",(0,r.kt)("inlineCode",{parentName:"td"},"$orderby"),") ou faux s'il n'est pas tri\xe9.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"refreshed"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Date"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Date de cr\xe9ation de l'ensemble d'entit\xe9s ou de la derni\xe8re utilisation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"expires"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Date"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Date d'expiration de l'ensemble d'entit\xe9s (cette date/heure change chaque fois que l'ensemble d'entit\xe9s est actualis\xe9). La diff\xe9rence entre actualis\xe9 et expire est le timeout d'un ensemble d'entit\xe9s. Cette valeur correspond soit \xe0 deux heures par d\xe9faut, soit \xe0 la valeur que vous avez d\xe9finie \xe0 l'aide de ",(0,r.kt)("inlineCode",{parentName:"td"},"$timeout"),".")))),(0,r.kt)("p",null,"Pour plus d'informations sur la cr\xe9ation d'une s\xe9lection d'entit\xe9s, reportez-vous \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"$method=entityset"),". Si vous souhaitez supprimer la s\xe9lection d'entit\xe9s du cache de 4D Server, utilisez ",(0,r.kt)("inlineCode",{parentName:"p"},"$method=release"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"4D cr\xe9e \xe9galement ses propres s\xe9lections d'entit\xe9s \xe0 des fins d'optimisation, de sorte que ceux que vous cr\xe9ez avec ",(0,r.kt)("inlineCode",{parentName:"p"},"$method=entityset")," ne soient pas les seuls \xe0 \xeatre retourn\xe9s.\n",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT")," If your project is in ",(0,r.kt)("strong",{parentName:"p"},"Controlled Admin Access Mode"),", you must first log into the project as a user in the Admin group.")),(0,r.kt)("h3",a({},{id:"sessioninfo"}),"sessionInfo"),(0,r.kt)("p",null,"Pour chaque session utilisateur, les informations suivantes sont retourn\xe9es dans la collection ",(0,r.kt)("em",{parentName:"p"},"sessionInfo")," :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"sessionID"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Un UUID qui r\xe9f\xe9rence la session.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"userName"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nom de l'utilisateur qui lance la session.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"lifeTime"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"La dur\xe9e d'une session utilisateur en secondes (3600 par d\xe9faut).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"expiration"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Date"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Date et heure d'expiration courante de la session utilisateur.")))),(0,r.kt)("h2",a({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"Retourne des informations sur les ensembles d'entit\xe9s stock\xe9s couramment dans le cache de 4D Server ainsi que sur les sessions utilisateur:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/$info")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9sultat")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\ncacheSize: 209715200,\nusedCache: 3136000,\nentitySetCount: 4,\nentitySet: [\n    {\n        id: "1418741678864021B56F8C6D77F2FC06",\n        tableName: "Company",\n        selectionSize: 1,\n        sorted: false,\n        refreshed: "2011-11-18T10:30:30Z",\n        expires: "2011-11-18T10:35:30Z"\n    },\n    {\n        id: "CAD79E5BF339462E85DA613754C05CC0",\n        tableName: "People",\n        selectionSize: 49,\n        sorted: true,\n        refreshed: "2011-11-18T10:28:43Z",\n        expires: "2011-11-18T10:38:43Z"\n    },\n    {\n        id: "F4514C59D6B642099764C15D2BF51624",\n        tableName: "People",\n        selectionSize: 37,\n        sorted: false,\n        refreshed: "2011-11-18T10:24:24Z",\n        expires: "2011-11-18T12:24:24Z"\n    }\n],\nProgressInfo: [\n    {\n        UserInfo: "flushProgressIndicator",\n        sessions: 0,\n        percent: 0\n    },\n    {\n        UserInfo: "indexProgressIndicator",\n        sessions: 0,\n        percent: 0\n    }\n],\nsessionInfo: [ \n    {\n        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",\n        userID: "36713176D42DB045B01B8E650E8FA9C6",\n        userName: "james",\n        lifeTime: 3600,\n        expiration: "2013-04-22T12:45:08Z"\n    },\n    {\n        sessionID: "A85F253EDE90CA458940337BE2939F6F",\n        userID: "00000000000000000000000000000000",\n        userName: "default guest",\n        lifeTime: 3600,\n        expiration: "2013-04-23T10:30:25Z"\n}\n]\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Les informations de l'indicateur de progression r\xe9pertori\xe9es apr\xe8s les s\xe9lections d'entit\xe9s sont utilis\xe9es en interne par 4D.")))}m.isMDXComponent=!0}}]);