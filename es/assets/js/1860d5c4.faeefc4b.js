"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(b,s(s({ref:t},u),{},{components:r})):a.createElement(b,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={id:"webServer",slug:"overview",title:"Overview"},i=void 0,l={unversionedId:"WebServer/webServer",id:"version-19/WebServer/webServer",title:"Overview",description:"4D in local mode, 4D in remote mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases.",source:"@site/versioned_docs/version-19/WebServer/webServer.md",sourceDirName:"WebServer",slug:"/WebServer/overview",permalink:"/docs/es/19/WebServer/overview",draft:!1,tags:[],version:"19",frontMatter:{id:"webServer",slug:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Restore",permalink:"/docs/es/19/Backup/restore"},next:{title:"Configuration",permalink:"/docs/es/19/WebServer/webServerConfig"}},p={},u=[{value:"Easy Monitoring",id:"easy-monitoring",level:2},{value:"Ready-to-use",id:"ready-to-use",level:2},{value:"Security",id:"security",level:2},{value:"User Sessions",id:"user-sessions",level:2},{value:"Gateway to REST Requests",id:"gateway-to-rest-requests",level:2},{value:"Extended settings",id:"extended-settings",level:2},{value:"Templates and URLs",id:"templates-and-urls",level:2},{value:"Dedicated Database Methods",id:"dedicated-database-methods",level:2}],c={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4D in local mode, 4D in remote mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases."),(0,a.kt)("h2",n({},{id:"easy-monitoring"}),"Easy Monitoring"),(0,a.kt)("p",null,"You can start or stop publication of the web application at any time. To do so, you just need to select a menu command or execute a single line of code."),(0,a.kt)("p",null,"Monitoring the 4D web server is easy and can be done using the 4D Server administration window or through ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/WebServer/webServerAdmin#administration-urls"}),"special URLs"),"."),(0,a.kt)("h2",n({},{id:"ready-to-use"}),"Ready-to-use"),(0,a.kt)("p",null,"The 4D web server automatically creates a default root folder and a default home page for an instantaneous availability."),(0,a.kt)("h2",n({},{id:"security"}),"Security"),(0,a.kt)("p",null,"Data security is present at every stage of the 4D web server implementations. Security levels are scalable and default settings usually select the most secure options. The 4D web server security is based upon the following elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Extended support of the ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/Admin/tls"}),(0,a.kt)("strong",{parentName:"a"},"TLS Protocol (HTTPS)")),",")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Authentication"),": flexible and customizable ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/WebServer/authentication"}),"authentication features")," based upon built-it settings as well as fallback database methods (",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/WebServer/authentication#on-web-authentication"}),(0,a.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," for the web server and ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/REST/configuration#using-the-on-rest-authentication-database-method"}),(0,a.kt)("inlineCode",{parentName:"a"},"On REST Authentication"))," for the REST server),")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Control of exposed contents"),": only elements that you expose explicitely can be available from direct web or REST requests. You must declare:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/19/WebServer/templates#allowing-project-methods"}),"Project methods")," exposed through HTTP requests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/19/ORDA/ordaClasses#exposed-vs-non-exposed-functions"}),"ORDA functions")," exposed through REST requests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/19/REST/configuration#exposing-tables-and-fields"}),"Tables and fields")," that you don't want to be available to REST requests."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sandboxing")," through the definition of a ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/WebServer/webServerConfig#root-folder"}),"HTML Root")," folder by default,")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Control of server resource usage")," (e.g. ",(0,a.kt)("a",n({parentName:"p"},{href:"webServerConfig.html#maximum-concurrent-web-processes"}),"maximum concurrent web processes")," option)."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For a general overview of 4D's security features, see the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"4D Security guide"),".")),(0,a.kt)("h2",n({},{id:"user-sessions"}),"User Sessions"),(0,a.kt)("p",null,"The 4D web server includes complete automatic features for easily managing ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/WebServer/sessions"}),"web sessions")," (user sessions) based on cookies."),(0,a.kt)("h2",n({},{id:"gateway-to-rest-requests"}),"Gateway to REST Requests"),(0,a.kt)("p",null,"The 4D web server allows accessing data stored in your 4D applications through REST requests. REST requests provide direct access to any database operation such as adding, reading, editing, ordering, or searching data."),(0,a.kt)("p",null,"REST requests are detailed in the ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/REST/gettingStarted"}),"REST server")," section."),(0,a.kt)("h2",n({},{id:"extended-settings"}),"Extended settings"),(0,a.kt)("p",null,"The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the ",(0,a.kt)("inlineCode",{parentName:"p"},"webServer")," object properties or the ",(0,a.kt)("inlineCode",{parentName:"p"},"WEB SET OPTION")," command."),(0,a.kt)("h2",n({},{id:"templates-and-urls"}),"Templates and URLs"),(0,a.kt)("p",null,"The 4D web server supports access to data stored in your 4D applications through template pages and specific URLs."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Template pages contain ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/WebServer/templates"}),"special tags")," that initiate web server processing at the time when they are sent to browsers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",n({parentName:"p"},{href:"httpRequests"}),"specific URLs")," enable 4D to be called in order to execute any action; these URLs can also be used as form actions to trigger processing when the user posts HTML forms."))),(0,a.kt)("h2",n({},{id:"dedicated-database-methods"}),"Dedicated Database Methods"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"On Web Connection"),", as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database methods are the entry points of requests in the web server; they can be used to evaluate and route any type of request."))}d.isMDXComponent=!0}}]);