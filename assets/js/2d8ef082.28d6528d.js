"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27977],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),u=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(a),c=n,h=m["".concat(i,".").concat(c)]||m[c]||d[c]||s;return a?r.createElement(h,l(l({ref:e},p),{},{components:a})):r.createElement(h,l({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,l=new Array(s);l[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var u=2;u<s;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65287:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});a(67294);var r=a(3905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const l={id:"REST_requests",title:"About REST Requests"},o=void 0,i={unversionedId:"REST/REST_requests",id:"version-19/REST/REST_requests",title:"About REST Requests",description:"The following structures are supported for REST requests:",source:"@site/versioned_docs/version-19/REST/REST_requests.md",sourceDirName:"REST",slug:"/REST/REST_requests",permalink:"/documentation/docs/19/REST/REST_requests",draft:!1,tags:[],version:"19",frontMatter:{id:"REST_requests",title:"About REST Requests"},sidebar:"docs",previous:{title:"Calling ORDA class functions",permalink:"/documentation/docs/19/REST/classFunctions"},next:{title:"$catalog",permalink:"/documentation/docs/19/REST/catalog"}},u={},p=[{value:"REST Status and Response",id:"rest-status-and-response",level:2},{value:"Request Status",id:"request-status",level:3},{value:"Response",id:"response",level:3}],d={toc:p};function m(t){var{components:e}=t,a=s(t,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following structures are supported for REST requests:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"URI"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Resource (Input)"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"/? or &{filter} (Output)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"http://{servername}:{port}/rest/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/docs/19/REST/filter"}),"$filter"),", ",(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/docs/19/REST/attributes"}),"$attributes"),", ",(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/docs/19/REST/skip"}),"$skip"),", ",(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/docs/19/REST/method"}),"$method=..."),"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}"),"/",(0,r.kt)("a",n({parentName:"td"},{href:"entityset.html#entitysetentitysetid"}),"$entityset/{entitySetID}")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/docs/19/REST/method"}),"$method=..."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclasskey"}),"{dataClass}({key})")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/docs/19/REST/attributes"}),"$attributes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclassattributevalue"}),"{dataClass}:{attribute}(value)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,"While all REST requests must contain the URI and Resource parameters, the Output (which filters the data returned) is optional."),(0,r.kt)("p",null,"As with all URIs, the first parameter is delimited by a \u201c?\u201d and all subsequent parameters by a \u201c&\u201d. For example:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can place all values in quotes in case of ambiguity. For example, in our above example, we could have put the value for the last name in single quotes: \"lastName!='Jones'\".")),(0,r.kt)("p",null,"The parameters allow you to manipulate data in dataclasses in your 4D project. Besides retrieving data using ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," HTTP methods, you can also add, update, and delete entities in a dataclass using ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," HTTP methods."),(0,r.kt)("p",null,"If you want the data to be returned in an array instead of JSON, use the ",(0,r.kt)("a",n({parentName:"p"},{href:"/documentation/docs/19/REST/asArray"}),(0,r.kt)("inlineCode",{parentName:"a"},"$asArray"))," parameter."),(0,r.kt)("h2",n({},{id:"rest-status-and-response"}),"REST Status and Response"),(0,r.kt)("p",null,"With each REST request, the server returns the status and a response (with or without an error)."),(0,r.kt)("h3",n({},{id:"request-status"}),"Request Status"),(0,r.kt)("p",null,"With each REST request, you get the status along with the response. Below are a few of the statuses that can arise:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Status"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"0"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Request not processed (server might not be started).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"200 OK"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Request processed without error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"401 Unauthorized"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Permissions error (check user's permissions).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"402 No session"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Maximum number of sessions has been reached.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"404 Not Found"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The data class is not accessible via REST or the entity set doesn't exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"500 Internal Server Error"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Error processing the REST request.")))),(0,r.kt)("h3",n({},{id:"response"}),"Response"),(0,r.kt)("p",null,"The response (in JSON format) varies depending on the request."),(0,r.kt)("p",null,"If an error arises, it will be sent along with the response from the server or it will be the response from the server."))}m.isMDXComponent=!0}}]);