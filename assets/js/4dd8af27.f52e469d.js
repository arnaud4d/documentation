"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"webServer",slug:"overview",title:"Overview"},l=void 0,p={unversionedId:"WebServer/webServer",id:"WebServer/webServer",title:"Overview",description:"4D in local mode, 4D in remote mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases.",source:"@site/docs/WebServer/webServer.md",sourceDirName:"WebServer",slug:"/WebServer/overview",permalink:"/main/docs/next/WebServer/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"webServer",slug:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Developing Plug-ins",permalink:"/main/docs/next/Extensions/develop-plug-ins"},next:{title:"Configuration",permalink:"/main/docs/next/WebServer/webServerConfig"}},u={},d=[{value:"Easy Monitoring",id:"easy-monitoring",level:2},{value:"Ready-to-use",id:"ready-to-use",level:2},{value:"Security",id:"security",level:2},{value:"User Sessions",id:"user-sessions",level:2},{value:"Gateway to REST Requests",id:"gateway-to-rest-requests",level:2},{value:"Extended settings",id:"extended-settings",level:2},{value:"Templates and URLs",id:"templates-and-urls",level:2},{value:"Dedicated Database Methods",id:"dedicated-database-methods",level:2}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"4D in local mode, 4D in remote mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases."),(0,o.kt)("h2",{id:"easy-monitoring"},"Easy Monitoring"),(0,o.kt)("p",null,"You can start or stop publication of the web application at any time. To do so, you just need to select a menu command or execute a single line of code."),(0,o.kt)("p",null,"Monitoring the 4D web server is easy and can be done using the 4D Server administration window or through ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/WebServer/webServerAdmin#administration-urls"},"special URLs"),"."),(0,o.kt)("h2",{id:"ready-to-use"},"Ready-to-use"),(0,o.kt)("p",null,"The 4D web server automatically creates a default root folder and a default home page for an instantaneous availability."),(0,o.kt)("h2",{id:"security"},"Security"),(0,o.kt)("p",null,"Data security is present at every stage of the 4D web server implementations. Security levels are scalable and default settings usually select the most secure options. The 4D web server security is based upon the following elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Extended support of the ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/Admin/tls"},(0,o.kt)("strong",{parentName:"a"},"TLS Protocol (HTTPS)")),",")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Authentication"),": flexible and customizable ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/WebServer/authentication"},"authentication features")," based upon built-it settings as well as fallback database methods (",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/WebServer/authentication#on-web-authentication"},(0,o.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," for the web server and ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/REST/configuration#using-the-on-rest-authentication-database-method"},(0,o.kt)("inlineCode",{parentName:"a"},"On REST Authentication"))," for the REST server),")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Control of exposed contents"),": only elements that you expose explicitely can be available from direct web or REST requests. You must declare:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/docs/next/WebServer/templates#allowing-project-methods"},"Project methods")," exposed through HTTP requests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/docs/next/ORDA/ordaClasses#exposed-vs-non-exposed-functions"},"ORDA functions")," exposed through REST requests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/docs/next/REST/configuration#exposing-tables-and-fields"},"Tables and fields")," that you don't want to be available to REST requests."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Sandboxing")," through the definition of a ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/WebServer/webServerConfig#root-folder"},"HTML Root")," folder by default,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Control of server resource usage")," (e.g. ",(0,o.kt)("a",{parentName:"p",href:"webServerConfig.html#maximum-concurrent-web-processes"},"maximum concurrent web processes")," option)."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a general overview of 4D's security features, see the ",(0,o.kt)("a",{parentName:"p",href:"https://blog.4d.com/4d-security-guide/"},"4D Security guide"),".")),(0,o.kt)("h2",{id:"user-sessions"},"User Sessions"),(0,o.kt)("p",null,"The 4D web server includes complete automatic features for easily managing ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/WebServer/sessions"},"web sessions")," (user sessions) based on cookies."),(0,o.kt)("h2",{id:"gateway-to-rest-requests"},"Gateway to REST Requests"),(0,o.kt)("p",null,"The 4D web server allows accessing data stored in your 4D applications through REST requests. REST requests provide direct access to any database operation such as adding, reading, editing, ordering, or searching data."),(0,o.kt)("p",null,"REST requests are detailed in the ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/REST/gettingStarted"},"REST server")," section."),(0,o.kt)("h2",{id:"extended-settings"},"Extended settings"),(0,o.kt)("p",null,"The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the ",(0,o.kt)("inlineCode",{parentName:"p"},"webServer")," object properties or the ",(0,o.kt)("inlineCode",{parentName:"p"},"WEB SET OPTION")," command."),(0,o.kt)("h2",{id:"templates-and-urls"},"Templates and URLs"),(0,o.kt)("p",null,"The 4D web server supports access to data stored in your 4D applications through template pages and specific URLs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Template pages contain ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/WebServer/templates"},"special tags")," that initiate web server processing at the time when they are sent to browsers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"httpRequests"},"specific URLs")," enable 4D to be called in order to execute any action; these URLs can also be used as form actions to trigger processing when the user posts HTML forms."))),(0,o.kt)("h2",{id:"dedicated-database-methods"},"Dedicated Database Methods"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Web Connection"),", as well as ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database methods are the entry points of requests in the web server; they can be used to evaluate and route any type of request."))}m.isMDXComponent=!0}}]);