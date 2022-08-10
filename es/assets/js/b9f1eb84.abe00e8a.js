"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"upload",title:"$upload"},p=void 0,s={unversionedId:"REST/upload",id:"version-19-R6/REST/upload",title:"$upload",description:"Returns an ID of the file uploaded to the server",source:"@site/versioned_docs/version-19-R6/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/main/es/docs/REST/upload",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/main/es/docs/REST/info"},next:{title:"dataClass",permalink:"/main/es/docs/REST/dataClass"}},u={},d=[{value:"Description",id:"description",level:2},{value:"Uploading scenario",id:"uploading-scenario",level:2},{value:"Example with a 4D HTTP client",id:"example-with-a-4d-http-client",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns an ID of the file uploaded to the server\t"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Post this request when you have a file that you want to upload to the Server. If you have an image, you pass ",(0,o.kt)("inlineCode",{parentName:"p"},"$rawPict=true"),". For all other files, you pass ",(0,o.kt)("inlineCode",{parentName:"p"},"$binary=true"),"."),(0,o.kt)("p",null,"You can modify the timeout, which by default is 120 seconds, by passing a value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"$timeout")," parameter."),(0,o.kt)("h2",{id:"uploading-scenario"},"Uploading scenario"),(0,o.kt)("p",null,"Imagine you want to upload an image to update the picture attribute of an entity. "),(0,o.kt)("p",null,"To upload an image (or any binary file), you must first select the file from the client application. The file itlself must be passed in the ",(0,o.kt)("strong",{parentName:"p"},"body")," of the request. "),(0,o.kt)("p",null,"Then, you upload the selected image to 4D Server using a request such as:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"POST  /rest/$upload?$rawPict=true")," "),(0,o.kt)("p",null,"As a result, the server returns an ID that identifies the file: "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }')),(0,o.kt)("p",null,"Afterwards, you use this ID to add it to an attribute using ",(0,o.kt)("a",{parentName:"p",href:"/main/es/docs/REST/method#methodupdate"},(0,o.kt)("inlineCode",{parentName:"a"},"$method=update"))," to add the image to an entity. The request looks like:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/?$method=update")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"POST data"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("p",null,"The modified entity is returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n')),(0,o.kt)("h2",{id:"example-with-a-4d-http-client"},"Example with a 4D HTTP client"),(0,o.kt)("p",null,"The following example shows how to upload a ",(0,o.kt)("em",{parentName:"p"},".pdf")," file to the server using the 4D HTTP client. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob\n\n\nARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" //prepare the REST request\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream"\n\nDOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) //Load the binary \n\n //Execute the first POST request to upload the file\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)\n\nIf ($result=200) \n    var $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" //second request to update the entity\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n    ALERT(String($result)+" Error")\nEnd if\n')))}m.isMDXComponent=!0}}]);