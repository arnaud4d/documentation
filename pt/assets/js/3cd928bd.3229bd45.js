"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"directory",title:"$directory"},s=void 0,p={unversionedId:"REST/directory",id:"version-19-R6/REST/directory",title:"$directory",description:"The directory handles user access through REST requests.",source:"@site/versioned_docs/version-19-R6/REST/$directory.md",sourceDirName:"REST",slug:"/REST/directory",permalink:"/docs/pt/docs/REST/directory",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"directory",title:"$directory"},sidebar:"docs",previous:{title:"$catalog",permalink:"/docs/pt/docs/REST/catalog"},next:{title:"$info",permalink:"/docs/pt/docs/REST/info"}},c={},d=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The directory handles user access through REST requests. "),(0,o.kt)("h2",{id:"directorylogin"},"$directory/login"),(0,o.kt)("p",null,"Opens a REST session on your 4D application and logs in the user."),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"$directory/login")," to open a session in your 4D application through REST and login a user. You can also modify the default 4D session timeout."),(0,o.kt)("p",null,"All parameters must be passed in ",(0,o.kt)("strong",{parentName:"p"},"headers")," of a POST method:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Header key"),(0,o.kt)("th",{parentName:"tr",align:null},"Header value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"username-4D"),(0,o.kt)("td",{parentName:"tr",align:null},"User - Not mandatory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"password-4D"),(0,o.kt)("td",{parentName:"tr",align:null},"Password - Not mandatory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hashed-password-4D"),(0,o.kt)("td",{parentName:"tr",align:null},"Hashed password - Not mandatory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"session-4D-length"),(0,o.kt)("td",{parentName:"tr",align:null},"Session inactivity timeout (minutes). Cannot be less than 60 - Not mandatory")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="hashed-password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:=Generate digest("123";4D digest)\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result"),":"),(0,o.kt)("p",null,"If the login was successful, the result will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "result": true\n}\n')),(0,o.kt)("p",null,"Otherwise, the response will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n     "result": false\n}\n')))}m.isMDXComponent=!0}}]);