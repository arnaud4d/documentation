"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"atomic_$atonce",title:"$atomic/$atonce"},s=void 0,l={unversionedId:"REST/atomic_$atonce",id:"version-19/REST/atomic_$atonce",title:"$atomic/$atonce",description:"Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled.",source:"@site/versioned_docs/version-19/REST/$atomic_$atonce.md",sourceDirName:"REST",slug:"/REST/atomic_$atonce",permalink:"/ja/docs/19/REST/atomic_$atonce",draft:!1,tags:[],version:"19",frontMatter:{id:"atomic_$atonce",title:"$atomic/$atonce"},sidebar:"docs",previous:{title:"$asArray",permalink:"/ja/docs/19/REST/asArray"},next:{title:"$attributes",permalink:"/ja/docs/19/REST/attributes"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled."),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"When you have multiple actions together, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"$atomic/$atonce")," to make sure that none of the actions are completed if one of them fails. You can use either ",(0,o.kt)("inlineCode",{parentName:"p"},"$atomic")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"$atonce"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"We call the following REST request in a transaction."),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee?$method=update&$atomic=true")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"POST data"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n{\n    "__KEY": "200",\n    "firstname": "John"\n},\n{\n    "__KEY": "201",\n    "firstname": "Harry"\n}\n]\n')),(0,o.kt)("p",null,"We get the following error in the second entity and therefore the first entity is not saved either:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "__STATUS": {\n        "success": true\n    },\n    "__KEY": "200",\n    "__STAMP": 1,\n    "uri": "/rest/Employee(200)",\n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 200,\n    "firstname": "John",\n    "lastname": "Keeling",\n    "isWoman": false,\n    "numberOfKids": 2,\n    "addressID": 200,\n    "gender": false,\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(200)",\n            "__KEY": "200"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Cannot find entity with \\"201\\" key in the \\"Employee\\" dataclass",\n            "componentSignature": "dbmg",\n            "errCode": 1542\n        }\n    ]\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Even though the salary for the first entity has a value of 45000, this value was not saved to the server and the ",(0,o.kt)("em",{parentName:"p"},"timestamp (__STAMP)")," was not modified either. If we reload the entity, we will see the previous value.")))}d.isMDXComponent=!0}}]);