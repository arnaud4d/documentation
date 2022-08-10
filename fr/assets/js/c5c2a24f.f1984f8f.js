"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1249],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"info",title:"$info"},s=void 0,p={unversionedId:"REST/info",id:"REST/info",title:"$info",description:"Returns information about the entity sets currently stored in 4D Server's cache as well as user sessions",source:"@site/docs/REST/$info.md",sourceDirName:"REST",slug:"/REST/info",permalink:"/main/fr/docs/next/REST/info",draft:!1,tags:[],version:"current",frontMatter:{id:"info",title:"$info"},sidebar:"docs",previous:{title:"$directory",permalink:"/main/fr/docs/next/REST/directory"},next:{title:"$upload",permalink:"/main/fr/docs/next/REST/upload"}},u={},m=[{value:"Description",id:"description",level:2},{value:"entitySet",id:"entityset",level:3},{value:"sessionInfo",id:"sessioninfo",level:3},{value:"Example",id:"example",level:2}],d={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns information about the entity sets currently stored in 4D Server's cache as well as user sessions\t"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"When you call this request for your project, you retrieve information in the following properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cacheSize"),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"4D Server's cache size.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"usedCache"),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"How much of 4D Server's cache has been used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"entitySetCount"),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of entity selections.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"entitySet"),(0,i.kt)("td",{parentName:"tr",align:null},"Collection"),(0,i.kt)("td",{parentName:"tr",align:null},"A collection in which each object contains information about each entity selection.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ProgressInfo"),(0,i.kt)("td",{parentName:"tr",align:null},"Collection"),(0,i.kt)("td",{parentName:"tr",align:null},"A collection containing information about progress indicator information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sessionInfo"),(0,i.kt)("td",{parentName:"tr",align:null},"Collection"),(0,i.kt)("td",{parentName:"tr",align:null},"A collection in which each object contains information about each user session.")))),(0,i.kt)("h3",{id:"entityset"},"entitySet"),(0,i.kt)("p",null,"For each entity selection currently stored in 4D Server's cache, the following information is returned:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"A UUID that references the entity set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dataClass"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the dataclass.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"selectionSize"),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of entities in the entity selection.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sorted"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns true if the set was sorted (using ",(0,i.kt)("inlineCode",{parentName:"td"},"$orderby"),") or false if it's not sorted.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"refreshed"),(0,i.kt)("td",{parentName:"tr",align:null},"Date"),(0,i.kt)("td",{parentName:"tr",align:null},"When the entity set was created or the last time it was used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expires"),(0,i.kt)("td",{parentName:"tr",align:null},"Date"),(0,i.kt)("td",{parentName:"tr",align:null},"When the entity set will expire (this date/time changes each time when the entity set is refreshed). The difference between refreshed and expires is the timeout for an entity set. This value is either two hours by default or what you defined using ",(0,i.kt)("inlineCode",{parentName:"td"},"$timeout"),".")))),(0,i.kt)("p",null,"For information about how to create an entity selection, refer to ",(0,i.kt)("inlineCode",{parentName:"p"},"$method=entityset"),". If you want to remove the entity selection from 4D Server's cache, use ",(0,i.kt)("inlineCode",{parentName:"p"},"$method=release"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"4D also creates its own entity selections for optimization purposes, so the ones you create with ",(0,i.kt)("inlineCode",{parentName:"p"},"$method=entityset")," are not the only ones returned.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"IMPORTANT"),"\nIf your project is in ",(0,i.kt)("strong",{parentName:"p"},"Controlled Admin Access Mode"),", you must first log into the project as a user in the Admin group.")),(0,i.kt)("h3",{id:"sessioninfo"},"sessionInfo"),(0,i.kt)("p",null,"For each user session, the following information is returned in the ",(0,i.kt)("em",{parentName:"p"},"sessionInfo")," collection:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sessionID"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"A UUID that references the session.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"userName"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the user who runs the session.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"lifeTime"),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"The lifetime of a user session in seconds (3600 by default).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expiration"),(0,i.kt)("td",{parentName:"tr",align:null},"Date"),(0,i.kt)("td",{parentName:"tr",align:null},"The current expiration date and time of the user session.")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Retrieve information about the entity sets currently stored in 4D Server's cache as well as user sessions:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /rest/$info")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\ncacheSize: 209715200,\nusedCache: 3136000,\nentitySetCount: 4,\nentitySet: [\n    {\n        id: "1418741678864021B56F8C6D77F2FC06",\n        tableName: "Company",\n        selectionSize: 1,\n        sorted: false,\n        refreshed: "2011-11-18T10:30:30Z",\n        expires: "2011-11-18T10:35:30Z"\n    },\n    {\n        id: "CAD79E5BF339462E85DA613754C05CC0",\n        tableName: "People",\n        selectionSize: 49,\n        sorted: true,\n        refreshed: "2011-11-18T10:28:43Z",\n        expires: "2011-11-18T10:38:43Z"\n    },\n    {\n        id: "F4514C59D6B642099764C15D2BF51624",\n        tableName: "People",\n        selectionSize: 37,\n        sorted: false,\n        refreshed: "2011-11-18T10:24:24Z",\n        expires: "2011-11-18T12:24:24Z"\n    }\n],\nProgressInfo: [\n    {\n        UserInfo: "flushProgressIndicator",\n        sessions: 0,\n        percent: 0\n    },\n    {\n        UserInfo: "indexProgressIndicator",\n        sessions: 0,\n        percent: 0\n    }\n],\nsessionInfo: [ \n    {\n        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",\n        userID: "36713176D42DB045B01B8E650E8FA9C6",\n        userName: "james",\n        lifeTime: 3600,\n        expiration: "2013-04-22T12:45:08Z"\n    },\n    {\n        sessionID: "A85F253EDE90CA458940337BE2939F6F",\n        userID: "00000000000000000000000000000000",\n        userName: "default guest",\n        lifeTime: 3600,\n        expiration: "2013-04-23T10:30:25Z"\n}\n]\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The progress indicator information listed after the entity selections is used internally by 4D.")))}c.isMDXComponent=!0}}]);