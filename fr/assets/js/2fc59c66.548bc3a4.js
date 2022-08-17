"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86906],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||n;return t?a.createElement(d,l(l({ref:r},c),{},{components:t})):a.createElement(d,l({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<n;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},46417:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>m,default:()=>h,frontMatter:()=>f,metadata:()=>d,toc:()=>b});var a=t(3905),o=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&c(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&c(e,t,r[t]);return e};const f={id:"errorPages",title:"Custom HTTP Error Pages"},m=void 0,d={unversionedId:"WebServer/errorPages",id:"version-19/WebServer/errorPages",title:"Custom HTTP Error Pages",description:"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:",source:"@site/versioned_docs/version-19/WebServer/errorPages.md",sourceDirName:"WebServer",slug:"/WebServer/errorPages",permalink:"/docs/fr/19/WebServer/errorPages",draft:!1,tags:[],version:"19",frontMatter:{id:"errorPages",title:"Custom HTTP Error Pages"},sidebar:"docs",previous:{title:"Allowing project methods",permalink:"/docs/fr/19/WebServer/allowProject"},next:{title:"Authentication",permalink:"/docs/fr/19/WebServer/authentication"}},g={},b=[{value:"Replacing default pages",id:"replacing-default-pages",level:2},{value:"Example",id:"example",level:2}],v={toc:b};function h(e){var r,o=e,{components:c}=o,f=((e,r)=>{var t={};for(var a in e)i.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&s)for(var a of s(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(o,["components"]);return(0,a.kt)("wrapper",(r=u(u({},v),f),n(r,l({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"status codes starting with 4 (client errors), for example 404")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"status codes starting with 5 (server errors), for example 501."))),(0,a.kt)("p",null,"For a full description of HTTP error status codes, you can refer to the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"}),"List of HTTP status codes")," (Wikipedia)."),(0,a.kt)("h2",u({},{id:"replacing-default-pages"}),"Replacing default pages"),(0,a.kt)("p",null,"To replace default 4D Web Server error pages with your own pages you just need to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"put custom HTML pages at the first level of the application's web folder,")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'name the custom pages "{statusCode}.html" (for example, "404.html").'))),(0,a.kt)("p",null,'You can define one error page per status code and/or a generic error page for a range of errors, named "{number}xx.html". For example, you can create "4xx.html" for generic client errors. The 4D Web Server will first look for a {statusCode}.html page then, if it does not exist, a generic page.'),(0,a.kt)("p",null,"For example, when an HTTP response returns a status code 404:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'4D Web Server tries to send a "404.html" page located in the application\'s web folder.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'If it is not found, 4D Web Server tries to send a "4xx.html" page located in the application\'s web folder.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If not found, 4D Web Server then uses its default error page."))),(0,a.kt)("h2",u({},{id:"example"}),"Example"),(0,a.kt)("p",null,"If you define the following custom pages in your web folder:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(18625).Z,width:"166",height:"287"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'the "403.html" or "404.html" pages will be served when 403 or 404 HTTP responses are returned respectively,')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'the "4xx.html" page will be served for any other 4xx error status (400, 401, etc.),')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'the "5xx.html" page will be served for any 5xx error status.'))))}h.isMDXComponent=!0},18625:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"}}]);