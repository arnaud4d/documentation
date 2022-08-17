"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11625],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(n),k=r,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13474:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});n(67294);var a=n(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={id:"HTTPRequestClass",title:"HTTPRequest"},o=void 0,p={unversionedId:"API/HTTPRequestClass",id:"version-19-R6/API/HTTPRequestClass",title:"HTTPRequest",description:"History",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/API/HTTPRequestClass.md",sourceDirName:"API",slug:"/API/HTTPRequestClass",permalink:"/docs/pt/API/HTTPRequestClass",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"HTTPRequestClass",title:"HTTPRequest"},sidebar:"docs",previous:{title:"Formula",permalink:"/docs/pt/API/FunctionClass"},next:{title:"IMAPTransporter",permalink:"/docs/pt/API/IMAPTransporterClass"}},d={},s=[{value:"Example",id:"example",level:3},{value:"HTTPRequest Object",id:"httprequest-object",level:3},{value:"4D.HTTPRequest.new()",id:"4dhttprequestnew",level:2},{value:"Description",id:"description",level:4},{value:"<code>options</code> parameter",id:"options-parameter",level:4},{value:"Callback functions",id:"callback-functions",level:4},{value:"event object",id:"event-object",level:4},{value:"authentication object",id:"authentication-object",level:4},{value:".dataType",id:"datatype",level:2},{value:"Description",id:"description-1",level:4},{value:".encoding",id:"encoding",level:2},{value:"Description",id:"description-2",level:4},{value:".errors",id:"errors",level:2},{value:"Description",id:"description-3",level:4},{value:".headers",id:"headers",level:2},{value:"Description",id:"description-4",level:4},{value:".method",id:"method",level:2},{value:"Description",id:"description-5",level:4},{value:".protocol",id:"protocol",level:2},{value:"Description",id:"description-6",level:4},{value:".response",id:"response",level:2},{value:"Description",id:"description-7",level:4},{value:".returnResponseBody",id:"returnresponsebody",level:2},{value:"Description",id:"description-8",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Description",id:"description-9",level:4},{value:".terminated",id:"terminated",level:2},{value:"Description",id:"description-10",level:4},{value:".timeout",id:"timeout",level:2},{value:"Description",id:"description-11",level:4},{value:".url",id:"url",level:2},{value:"Description",id:"description-12",level:4},{value:".wait()",id:"wait",level:2},{value:"Description",id:"description-13",level:4}],u={toc:s};function m(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Class added"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPRequest")," class allows you to handle ",(0,a.kt)("a",r({parentName:"p"},{href:"#httprequest-object"}),(0,a.kt)("inlineCode",{parentName:"a"},"HTTPRequest objects"))," that can be used to configure and send requests to an HTTP server, as well as to process the HTTP server responses."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPRequest")," class is available from the ",(0,a.kt)("inlineCode",{parentName:"p"},"4D")," class store. You create and send HTTP requests using the ",(0,a.kt)("a",r({parentName:"p"},{href:"#4dhttprequestnew"}),"4D.HTTPRequest.new()")," function, that returns a ",(0,a.kt)("a",r({parentName:"p"},{href:"#httprequest-object"}),(0,a.kt)("inlineCode",{parentName:"a"},"HTTPRequest object")),"."),(0,a.kt)("h3",r({},{id:"example"}),"Example"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"MyHttpRequestOptions")," class for the request options:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"Class constructor($method : Text; $headers : Object; $body : Text)\nThis.method:=$method\nThis.headers:=$headers\nThis.body:=$body\n\nFunction onResponse($request : 4D.HTTPRequest; $event : Object)\n//My onResponse method, if you want to handle the request asynchronously\n\nFunction onError($request : 4D.HTTPRequest; $event : Object)\n//My onError method, if you want to handle the request asynchronously\n")),(0,a.kt)("p",null,"You can now create your request:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $headers : Object\n$headers:=New object()\n$headers["field1"]:="value1"\n\nvar myHttpRequestOptions : cs.MyHttpRequestOptions\nmyHttpRequestOptions := cs.MyHttpRequestOptions.new("GET"; $headers; "")\n\nvar $request : 4D.HTTPRequest\n$request:=4D.HTTPRequest.new("www.google.com"; myHttpRequestOptions)\n$request.wait() //If you want to handle the request synchronously\n//Now you can use $request.response to access the result of the request or $request.error to check the error that happened.\n')),(0,a.kt)("h3",r({},{id:"httprequest-object"}),"HTTPRequest Object"),(0,a.kt)("p",null,"An HTTPRequest object is a non-sharable object."),(0,a.kt)("p",null,"HTTPRequest objects provide the following properties and functions:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#dataType"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#encoding"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#errors"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#headers"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#method"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#protocol"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#response"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#returnResponseBody"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#terminate"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#terminated"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#timeout"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#url"})),"\xa0","\xa0","\xa0","\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#wait"})),"\xa0","\xa0","\xa0","\xa0")))),(0,a.kt)("h2",r({},{id:"4dhttprequestnew"}),"4D.HTTPRequest.new()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4D.HTTPRequest.new"),"( ",(0,a.kt)("em",{parentName:"p"},"url")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"options")," : Object } ) : 4D.HTTPRequest"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"url"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"URL to which to send the request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Request configuration properties")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.HTTPRequest"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"New HTTPRequest object")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.HTTPRequest.new()")," function ","creates and sends a HTTP request to the HTTP server defined in ",(0,a.kt)("em",{parentName:"p"},"url")," with the defined ",(0,a.kt)("em",{parentName:"p"},"options"),", and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.HTTPRequest")," object","."),(0,a.kt)("p",null,"The returned ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPRequest")," object is used to process responses from the HTTP server and call methods."),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},"url"),", pass the URL where you want to send the request. The syntax to use is:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"{http://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]\n{https://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]\n")),(0,a.kt)("p",null,"If you omit the protocol part (",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"https://"),"), a https request is sent."),(0,a.kt)("p",null,"For example, you can pass the following strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'    http://www.myserver.com\n    www.myserver.com/path\n    http://www.myserver.com/path?name="jones"\n    https://www.myserver.com/login\n    http://123.45.67.89:8083\n    http://john:smith@123.45.67.89:8083\n    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]\n    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)\n')),(0,a.kt)("h4",r({},{id:"options-parameter"}),(0,a.kt)("inlineCode",{parentName:"h4"},"options")," parameter"),(0,a.kt)("p",null,"In the ",(0,a.kt)("em",{parentName:"p"},"options")," parameter, pass an object that can contain the following properties:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"body"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Variant"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Body of the request (required in case of ",(0,a.kt)("inlineCode",{parentName:"td"},"post")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"put")," requests). Can be a text, a blob, or an object. The content-type is determined from the type of this property unless it is set inside the headers"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"certificatesFolder"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/pt/API/FolderClass"}),"Folder")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sets the active client certificates folder"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"dataType"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'Type of the response body attribute. Values: "text", "blob", "object", or "auto". If "auto", the type of the body content will be deduced from its MIME type (object for JSON, text for text, javascript, xml, http message and url encoded form, blob otherwise)'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"auto"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"encoding"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Used only in case of requests with a ",(0,a.kt)("inlineCode",{parentName:"td"},"body")," (",(0,a.kt)("inlineCode",{parentName:"td"},"post")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"put")," methods). Encoding of the request body content if it's a text, ignored if content-type is set inside the headers"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"UTF-8"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"headers"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Headers of the request. Syntax: ",(0,a.kt)("inlineCode",{parentName:"td"},"headers.key=value")," (",(0,a.kt)("em",{parentName:"td"},"value")," can be a Collection if the same key must appear multiple times)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Empty object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"method"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"POST", "GET", or other method'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"GET"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"minTLSVersion"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'Sets the minimum version of TLS: "',(0,a.kt)("inlineCode",{parentName:"td"},"TLSv1_0"),'", "',(0,a.kt)("inlineCode",{parentName:"td"},"TLSv1_1"),'", "',(0,a.kt)("inlineCode",{parentName:"td"},"TLSv1_2"),'", "',(0,a.kt)("inlineCode",{parentName:"td"},"TLSv1_3"),'"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"',(0,a.kt)("inlineCode",{parentName:"td"},"TLSv1_2"),'"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onData"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/pt/API/FunctionClass"}),"Function")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Callback when data from the body is received. It receives two objects as parameters (see below)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onError"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/pt/API/FunctionClass"}),"Function")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Callback when an error occurs. It receives two objects as parameters (see below)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onHeaders"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/pt/API/FunctionClass"}),"Function")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Callback when the headers are received. It receives two objects as parameters (see below)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onResponse"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/pt/API/FunctionClass"}),"Function")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Callback when a response is received. It receives two objects as parameters (see below)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onTerminate"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/pt/API/FunctionClass"}),"Function")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Callback when the request is over. It receives two objects as parameters (see below)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"protocol"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"auto" or "HTTP1". "auto" means HTTP1 in the current implementation'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"auto"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"proxyAuthentication"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#authentication-object"}),"authentication object")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object handling proxy authentication"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"serverAuthentication"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#authentication-object"}),"authentication object")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object handling server authentication"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"returnResponseBody"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"If false, the response body is not returned in the ",(0,a.kt)("a",r({parentName:"td"},{href:"#response"}),(0,a.kt)("inlineCode",{parentName:"a"},"response")," object"),". Returns an error if false and ",(0,a.kt)("inlineCode",{parentName:"td"},"onData")," is undefined"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"timeout"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Timeout in seconds. Undefined = no timeout"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Undefined")))),(0,a.kt)("h4",r({},{id:"callback-functions"}),"Callback functions"),(0,a.kt)("p",null,"All callback functions receive two object parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"$param1"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#httprequest-object"}),(0,a.kt)("inlineCode",{parentName:"a"},"HTTPRequest")," object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"$param2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#event-object"}),(0,a.kt)("inlineCode",{parentName:"a"},"Event")," object"))))),(0,a.kt)("p",null,"Here is the sequence of callback calls:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"onHeaders")," is always called once"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"onData")," is called zero or several times (not called if the request does not have a body)"),(0,a.kt)("li",{parentName:"ol"},"If no error occured, ",(0,a.kt)("inlineCode",{parentName:"li"},"onResponse")," is always called once"),(0,a.kt)("li",{parentName:"ol"},"If an error occurs, ",(0,a.kt)("inlineCode",{parentName:"li"},"onError")," is executed once (and terminates the request)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"onTerminate")," is always executed once")),(0,a.kt)("h4",r({},{id:"event-object"}),"event object"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," object is returned when a ",(0,a.kt)("a",r({parentName:"p"},{href:"#callback-functions"}),"callback function")," is called. It contains the following properties:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),".data"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"blob"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Received data. It is always ",(0,a.kt)("em",{parentName:"td"},"undefined")," except in the ",(0,a.kt)("inlineCode",{parentName:"td"},"onData")," callback")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),".type"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'Type of event. Possible values: "response", "error", "headers", "data", or "terminate')))),(0,a.kt)("h4",r({},{id:"authentication-object"}),"authentication object"),(0,a.kt)("p",null,"An authentication object handles the ",(0,a.kt)("inlineCode",{parentName:"p"},"options.serverAuthentication")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"options.proxyAuthentication")," property. It can contain the following properties:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Name used for authentication"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"password"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Password used for authentication"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"method"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'Method used for authentication:"basic", "digest", "auto"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"auto"')))),(0,a.kt)("h2",r({},{id:"datatype"}),".dataType"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"dataType")," : Text"),(0,a.kt)("h4",r({},{id:"description-1"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".dataType")," property contains ","the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataType")," passed in the ",(0,a.kt)("a",r({parentName:"p"},{href:"#options-parameter"}),(0,a.kt)("inlineCode",{parentName:"a"},"options"))," object when calling ",(0,a.kt)("a",r({parentName:"p"},{href:"#4dhttprequestnew"}),"new()"),', "auto" if it was omitted',"."),(0,a.kt)("h2",r({},{id:"encoding"}),".encoding"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"encoding")," : Text"),(0,a.kt)("h4",r({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".encoding")," property contains ","the ",(0,a.kt)("inlineCode",{parentName:"p"},"encoding")," passed in the ",(0,a.kt)("a",r({parentName:"p"},{href:"#options-parameter"}),(0,a.kt)("inlineCode",{parentName:"a"},"options"))," object when calling ",(0,a.kt)("a",r({parentName:"p"},{href:"#4dhttprequestnew"}),"new()"),', "UTF-8" if it was omitted',"."),(0,a.kt)("h2",r({},{id:"errors"}),".errors"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"errors")," : Collection"),(0,a.kt)("h4",r({},{id:"description-3"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".errors")," property contains ","the collection of all the errors if at least one error has been triggered","."),(0,a.kt)("p",null,"Here is the contents of the ",(0,a.kt)("inlineCode",{parentName:"p"},".errors")," property:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",r({parentName:"tr"},{align:null})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"errors"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D error stack in case of error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[].errCode"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D error code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[].message"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Description of the 4D error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[].componentSignature"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Signature of the internal component which returned the error")))),(0,a.kt)("h2",r({},{id:"headers"}),".headers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"headers")," : Object"),(0,a.kt)("h4",r({},{id:"description-4"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".headers")," property contains ","the ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," passed in the ",(0,a.kt)("a",r({parentName:"p"},{href:"#options-parameter"}),(0,a.kt)("inlineCode",{parentName:"a"},"options"))," object when calling ",(0,a.kt)("a",r({parentName:"p"},{href:"#4dhttprequestnew"}),"new()"),". If it was omitted, contains an empty object."),(0,a.kt)("h2",r({},{id:"method"}),".method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"method")," : Text"),(0,a.kt)("h4",r({},{id:"description-5"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".method")," property contains ","the ",(0,a.kt)("inlineCode",{parentName:"p"},"method")," passed in the ",(0,a.kt)("a",r({parentName:"p"},{href:"#options-parameter"}),(0,a.kt)("inlineCode",{parentName:"a"},"options"))," object when calling ",(0,a.kt)("a",r({parentName:"p"},{href:"#4dhttprequestnew"}),"new()"),'. If it was omitted, contains "GET".'),(0,a.kt)("h2",r({},{id:"protocol"}),".protocol"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"protocol")," : Text"),(0,a.kt)("h4",r({},{id:"description-6"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".protocol")," property contains ","the ",(0,a.kt)("inlineCode",{parentName:"p"},"protocol")," passed in the ",(0,a.kt)("a",r({parentName:"p"},{href:"#options-parameter"}),(0,a.kt)("inlineCode",{parentName:"a"},"options"))," object when calling ",(0,a.kt)("a",r({parentName:"p"},{href:"#4dhttprequestnew"}),"new()"),'. If it was omitted or if "auto" was used, contains the version of the protocol used.'),(0,a.kt)("h2",r({},{id:"response"}),".response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"response")," : Object"),(0,a.kt)("h4",r({},{id:"description-7"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".response")," property contains ","the response to the request if it has received at least the status code, undefined otherwise","."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," object is a non-sharable object. It provides the following properties:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),".body"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Variant"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Body of the response. The type of the message is defined according to the ",(0,a.kt)("a",r({parentName:"td"},{href:"#datatype"}),(0,a.kt)("inlineCode",{parentName:"a"},"dataType"))," property. Undefined if the body has not been received yet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),".headers"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Headers of the response. ",(0,a.kt)("inlineCode",{parentName:"td"},"headers.key")," = value (value can be a collection if the same key appears multiple times). Undefined if the headers have not been received yet.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),".status"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Status code of the response")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),".statusText"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Message explaining the status code")))),(0,a.kt)("h2",r({},{id:"returnresponsebody"}),".returnResponseBody"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"returnResponseBody")," : Boolean"),(0,a.kt)("h4",r({},{id:"description-8"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".returnResponseBody")," property contains ","the ",(0,a.kt)("inlineCode",{parentName:"p"},"returnResponseBody")," passed in the ",(0,a.kt)("a",r({parentName:"p"},{href:"#options-parameter"}),(0,a.kt)("inlineCode",{parentName:"a"},"options"))," object when calling ",(0,a.kt)("a",r({parentName:"p"},{href:"#4dhttprequestnew"}),"new()"),". If it was omitted, contains True."),(0,a.kt)("h2",r({},{id:"terminate"}),".terminate()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".terminate()")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Does not require any parameters")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description-9"}),"Description"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This function is thread-safe.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".terminate()")," function ","aborts the HTTP request",". It triggers the ",(0,a.kt)("inlineCode",{parentName:"p"},"onTerminate")," event."),(0,a.kt)("h2",r({},{id:"terminated"}),".terminated"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"terminated")," : Boolean"),(0,a.kt)("h4",r({},{id:"description-10"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".terminated")," property contains ","True if the request is terminated (after the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"onTerminate"),"), false otherwise","."),(0,a.kt)("h2",r({},{id:"timeout"}),".timeout"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"timeout")," : Real"),(0,a.kt)("h4",r({},{id:"description-11"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".timeout")," property contains ","the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," passed in the ",(0,a.kt)("a",r({parentName:"p"},{href:"#options-parameter"}),(0,a.kt)("inlineCode",{parentName:"a"},"options"))," object when calling ",(0,a.kt)("a",r({parentName:"p"},{href:"#4dhttprequestnew"}),"new()"),". If it was omitted, contains Undefined."),(0,a.kt)("h2",r({},{id:"url"}),".url"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"url")," : Text"),(0,a.kt)("h4",r({},{id:"description-12"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".url")," property contains ","the URL of the HTTP request","."),(0,a.kt)("h2",r({},{id:"wait"}),".wait()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".wait"),"( { ",(0,a.kt)("em",{parentName:"p"},"time")," : Real } ) : 4D.HTTPRequest"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"time"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Maximum time in seconds to wait for the response")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.HTTPRequest"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"HTTPRequest object")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description-13"}),"Description"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This function is thread-safe.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.HTTPRequest.wait()")," function ","waits for the response from the server","."),(0,a.kt)("p",null,"If a ",(0,a.kt)("em",{parentName:"p"},"time")," parameter is passed, the function will wait at most the defined number of seconds."),(0,a.kt)("p",null,"If the response from the server has already arrived, the function returns immediately."))}m.isMDXComponent=!0}}]);