"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9202],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),u=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(a),c=n,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return a?r.createElement(k,s(s({ref:e},p),{},{components:a})):r.createElement(k,s({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,s[1]=o;for(var u=2;u<l;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46182:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});a(67294);var r=a(3905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const s={id:"REST_requests",title:"About REST Requests"},o=void 0,i={unversionedId:"REST/REST_requests",id:"version-18/REST/REST_requests",title:"About REST Requests",description:"The following structures are supported for REST requests:",source:"@site/versioned_docs/version-18/REST/REST_requests.md",sourceDirName:"REST",slug:"/REST/REST_requests",permalink:"/docs/pt/18/REST/REST_requests",draft:!1,tags:[],version:"18",frontMatter:{id:"REST_requests",title:"About REST Requests"},sidebar:"docs",previous:{title:"Manipulating Data",permalink:"/docs/pt/18/REST/manData"},next:{title:"$catalog",permalink:"/docs/pt/18/REST/catalog"}},u={},p=[{value:"REST Status and Response",id:"rest-status-and-response",level:2},{value:"Request Status",id:"request-status",level:3},{value:"Response",id:"response",level:3}],d={toc:p};function m(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following structures are supported for REST requests:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"URI"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Resource"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"{Subresource}"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"{Querystring}"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"http://{servername}:{port}/rest/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"manData.html#selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"manData.html#selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclassmethod"}),"{method}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"entityset.html#entitysetentitysetid"}),"$entityset/{entitySetID}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/pt/18/REST/filter"}),"?$filter"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"manData.html#selecting-attributes-to-get"}),"{attribute}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/pt/18/REST/compute"}),"?$compute"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclasskey"}),"{dataClass}({key})"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"manData.html#selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D%7Battribute%7D_value.html"}),"{dataClass}:{attribute}(value)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/pt/18/REST/catalog"}),"$catalog")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/pt/18/REST/directory"}),"$directory")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/pt/18/REST/info"}),"$info")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,"While all REST requests must contain the URI and Resource parameters, the Subresource (which filters the data returned) is optional."),(0,r.kt)("p",null,"As with all URIs, the first parameter is delimited by a \u201c?\u201d and all subsequent parameters by a \u201c&\u201d. For example:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can place all values in quotes in case of ambiguity. For example, in our above example, we could have put the value for the last name in single quotes: \"lastName!='Jones'\".")),(0,r.kt)("p",null,"The parameters allow you to manipulate data in dataclasses in your 4D project. Besides retrieving data using ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," HTTP methods, you can also add, update, and delete entities in a dataclass using ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," HTTP methods."),(0,r.kt)("p",null,"If you want the data to be returned in an array instead of JSON, use the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/REST/asArray"}),(0,r.kt)("inlineCode",{parentName:"a"},"$asArray"))," parameter."),(0,r.kt)("h2",n({},{id:"rest-status-and-response"}),"REST Status and Response"),(0,r.kt)("p",null,"With each REST request, the server returns the status and a response (with or without an error)."),(0,r.kt)("h3",n({},{id:"request-status"}),"Request Status"),(0,r.kt)("p",null,"With each REST request, you get the status along with the response. Below are a few of the statuses that can arise:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Status"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"0"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Request not processed (server might not be started).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"200 OK"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Request processed without error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"401 Unauthorized"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Permissions error (check user's permissions).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"402 No session"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Maximum number of sessions has been reached.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"404 Not Found"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The data class is not accessible via REST or the entity set doesn't exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"500 Internal Server Error"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Error processing the REST request.")))),(0,r.kt)("h3",n({},{id:"response"}),"Response"),(0,r.kt)("p",null,"The response (in JSON format) varies depending on the request."),(0,r.kt)("p",null,"If an error arises, it will be sent along with the response from the server or it will be the response from the server."))}m.isMDXComponent=!0}}]);