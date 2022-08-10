"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69910],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],s={id:"errorPages",title:"Custom HTTP Error Pages"},i=void 0,p={unversionedId:"WebServer/errorPages",id:"WebServer/errorPages",title:"Custom HTTP Error Pages",description:"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:",source:"@site/docs/WebServer/errorPages.md",sourceDirName:"WebServer",slug:"/WebServer/errorPages",permalink:"/pt/docs/next/WebServer/errorPages",draft:!1,tags:[],version:"current",frontMatter:{id:"errorPages",title:"Custom HTTP Error Pages"},sidebar:"docs",previous:{title:"Allowing project methods",permalink:"/pt/docs/next/WebServer/allowProject"},next:{title:"Authentication",permalink:"/pt/docs/next/WebServer/authentication"}},u={},c=[{value:"Replacing default pages",id:"replacing-default-pages",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function d(e){var t=e.components,s=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"status codes starting with 4 (client errors), for example 404")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"status codes starting with 5 (server errors), for example 501. "))),(0,o.kt)("p",null,"For a full description of HTTP error status codes, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"List of HTTP status codes")," (Wikipedia)."),(0,o.kt)("h2",{id:"replacing-default-pages"},"Replacing default pages"),(0,o.kt)("p",null,"To replace default 4D Web Server error pages with your own pages you just need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"put custom HTML pages at the first level of the application's web folder,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'name the custom pages "{statusCode}.html" (for example, "404.html"). '))),(0,o.kt)("p",null,'You can define one error page per status code and/or a generic error page for a range of errors, named "{number}xx.html". For example, you can create "4xx.html" for generic client errors. The 4D Web Server will first look for a {statusCode}.html page then, if it does not exist, a generic page.'),(0,o.kt)("p",null,"For example, when an HTTP response returns a status code 404:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'4D Web Server tries to send a "404.html" page located in the application\'s web folder.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'If it is not found, 4D Web Server tries to send a "4xx.html" page located in the application\'s web folder.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If not found, 4D Web Server then uses its default error page."))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"If you define the following custom pages in your web folder:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(87965).Z,width:"166",height:"287"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'the "403.html" or "404.html" pages will be served when 403 or 404 HTTP responses are returned respectively,')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'the "4xx.html" page will be served for any other 4xx error status (400, 401, etc.),')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'the "5xx.html" page will be served for any 5xx error status.'))))}d.isMDXComponent=!0},87965:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"}}]);