"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"upload",title:"$upload"},l=void 0,p={unversionedId:"REST/upload",id:"version-18/REST/upload",title:"$upload",description:"Returns an ID of the file uploaded to the server",source:"@site/versioned_docs/version-18/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/documentation/docs/18/REST/upload",draft:!1,tags:[],version:"18",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/documentation/docs/18/REST/info"},next:{title:"{dataClass}",permalink:"/documentation/docs/18/REST/{dataClass}"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Image upload example",id:"image-upload-example",level:2}],c={toc:s};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Returns an ID of the file uploaded to the server\t"),(0,r.kt)("h2",o({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Post this request when you have a file that you want to upload to the Server. If you have an image, you pass ",(0,r.kt)("inlineCode",{parentName:"p"},"$rawPict=true"),". For all other files, you pass ",(0,r.kt)("inlineCode",{parentName:"p"},"$binary=true"),"."),(0,r.kt)("p",null,"You can modify the timeout, which by default is 120 seconds, by passing a value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout parameter"),"."),(0,r.kt)("h2",o({},{id:"image-upload-example"}),"Image upload example"),(0,r.kt)("p",null,"To upload an image, you must first select the file object on the client using the HTML 5 built-in API for using file from a web application. 4D uses the MIME type attribute of the file object so it can handle it appropriately."),(0,r.kt)("p",null,"Then, we upload the selected image to 4D Server:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/$upload?$rawPict=true")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }')),(0,r.kt)("p",null," Afterwards, you use this ID to add it to an attribute using ",(0,r.kt)("a",o({parentName:"p"},{href:"/documentation/docs/18/REST/method#methodupdate"}),(0,r.kt)("inlineCode",{parentName:"a"},"$method=update"))," to add the image to an entity:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/?$method=update")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"POST data"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response"),":"),(0,r.kt)("p",null,"The modified entity is returned:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n')))}d.isMDXComponent=!0}}]);