"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86906],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=n,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(f,l(l({ref:r},u),{},{components:t})):a.createElement(f,l({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81990:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=t(87462),n=t(63366),o=(t(67294),t(3905)),l=["components"],s={id:"errorPages",title:"Custom HTTP Error Pages"},i=void 0,p={unversionedId:"WebServer/errorPages",id:"version-19/WebServer/errorPages",title:"Custom HTTP Error Pages",description:"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:",source:"@site/versioned_docs/version-19/WebServer/errorPages.md",sourceDirName:"WebServer",slug:"/WebServer/errorPages",permalink:"/docs/ja/19/WebServer/errorPages",draft:!1,tags:[],version:"19",frontMatter:{id:"errorPages",title:"Custom HTTP Error Pages"},sidebar:"docs",previous:{title:"Allowing project methods",permalink:"/docs/ja/19/WebServer/allowProject"},next:{title:"Authentication",permalink:"/docs/ja/19/WebServer/authentication"}},u={},c=[{value:"Replacing default pages",id:"replacing-default-pages",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function d(e){var r=e.components,s=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"status codes starting with 4 (client errors), for example 404")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"status codes starting with 5 (server errors), for example 501."))),(0,o.kt)("p",null,"For a full description of HTTP error status codes, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"List of HTTP status codes")," (Wikipedia)."),(0,o.kt)("h2",{id:"replacing-default-pages"},"Replacing default pages"),(0,o.kt)("p",null,"To replace default 4D Web Server error pages with your own pages you just need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"put custom HTML pages at the first level of the application's web folder,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'name the custom pages "{statusCode}.html" (for example, "404.html").'))),(0,o.kt)("p",null,'You can define one error page per status code and/or a generic error page for a range of errors, named "{number}xx.html". For example, you can create "4xx.html" for generic client errors. The 4D Web Server will first look for a {statusCode}.html page then, if it does not exist, a generic page.'),(0,o.kt)("p",null,"For example, when an HTTP response returns a status code 404:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'4D Web Server tries to send a "404.html" page located in the application\'s web folder.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'If it is not found, 4D Web Server tries to send a "4xx.html" page located in the application\'s web folder.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If not found, 4D Web Server then uses its default error page."))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"If you define the following custom pages in your web folder:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(18625).Z,width:"166",height:"287"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'the "403.html" or "404.html" pages will be served when 403 or 404 HTTP responses are returned respectively,')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'the "4xx.html" page will be served for any other 4xx error status (400, 401, etc.),')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'the "5xx.html" page will be served for any 5xx error status.'))))}d.isMDXComponent=!0},18625:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"}}]);