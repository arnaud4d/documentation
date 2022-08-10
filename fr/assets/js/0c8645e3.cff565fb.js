"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12611],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,b=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return r?a.createElement(b,o(o({ref:t},d),{},{components:r})):a.createElement(b,o({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},64895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={id:"webServerObject",title:"Web Server object"},s=void 0,p={unversionedId:"WebServer/webServerObject",id:"version-19/WebServer/webServerObject",title:"Web Server object",description:"A 4D project can start and monitor a web server for the main (host) application as well as each hosted component.",source:"@site/versioned_docs/version-19/WebServer/webServerObject.md",sourceDirName:"WebServer",slug:"/WebServer/webServerObject",permalink:"/docs/fr/19/WebServer/webServerObject",draft:!1,tags:[],version:"19",frontMatter:{id:"webServerObject",title:"Web Server object"},sidebar:"docs",previous:{title:"Administration",permalink:"/docs/fr/19/WebServer/webServerAdmin"},next:{title:"Getting Started",permalink:"/docs/fr/19/WebServer/gettingStarted"}},d={},m=[{value:"Instantiating a web server object",id:"instantiating-a-web-server-object",level:2},{value:"Web server functions",id:"web-server-functions",level:2},{value:"Web server properties",id:"web-server-properties",level:2},{value:"Scope of the 4D Web commands",id:"scope-of-the-4d-web-commands",level:2}],c={toc:m};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A 4D project can start and monitor a web server for the main (host) application as well as each hosted component."),(0,l.kt)("p",null,"For example, if you installed two components in your main application, you can start and monitor up to three independant web servers from your application:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"one web server for the host application,"),(0,l.kt)("li",{parentName:"ul"},"one web server for the component #1,"),(0,l.kt)("li",{parentName:"ul"},"one web server for the component #2.")),(0,l.kt)("p",null,"Other than memory, there is no limit to the number of components and thus, of web servers, that can be attached to a single 4D application project. "),(0,l.kt)("p",null,"Each 4D web server, including the main application's web server, is exposed as a specific ",(0,l.kt)("strong",{parentName:"p"},"object")," of the ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.WebServer")," class. Once instantiated, a web server object can be handled from the current application or from any component using a ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/19/API/WebServerClass"},"large number of properties and functions"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The legacy ",(0,l.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html"},"WEB commands")," of the 4D language are supported but cannot select the web server to which they apply (see below). ")),(0,l.kt)("p",null,"Each web server (host application or component) can be used in its own separate context, including:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"On Web Connection")," database method calls"),(0,l.kt)("li",{parentName:"ul"},"4D tags processing and method calls,"),(0,l.kt)("li",{parentName:"ul"},"web sessions and TLS protocol management.")),(0,l.kt)("p",null,"This allows you to develop independant components and features that come with their own web interfaces. "),(0,l.kt)("h2",{id:"instantiating-a-web-server-object"},"Instantiating a web server object"),(0,l.kt)("p",null,"The web server object of the host application (default web server) is automatically loaded by 4D at startup. Thus, if you write in a newly created project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"$nbSrv:=WEB Server list.length   \n//$nbSrv value is 1\n")),(0,l.kt)("p",null,"To instantiate a web server object, call the ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/19/API/WebServerClass#web-server"},(0,l.kt)("inlineCode",{parentName:"a"},"WEB Server"))," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"    //create an object variable of the 4D.WebServer class\nvar webServer : 4D.WebServer \n    //call the web server from the current context\nwebServer:=WEB Server  \n\n    //equivalent to\nwebServer:=WEB Server(Web server database)\n")),(0,l.kt)("p",null,"If the application uses components and you want to call: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the host application's web server from a component or "),(0,l.kt)("li",{parentName:"ul"},"the server that received the request (whatever the server), ")),(0,l.kt)("p",null,"you can also use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"var webServer : 4D.WebServer \n    //call the host web server from a component  \nwebServer:=WEB Server(Web server host database)  \n    //call the target web server\nwebServer:=WEB Server(Web server receiving request)  \n")),(0,l.kt)("h2",{id:"web-server-functions"},"Web server functions"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/19/API/WebServerClass#web-server-object"},"web server class object")," contains the following functions: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Functions"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Return value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/fr/19/API/WebServerClass#start"},(0,l.kt)("inlineCode",{parentName:"a"},"start()"))),(0,l.kt)("td",{parentName:"tr",align:null},"settings (object)"),(0,l.kt)("td",{parentName:"tr",align:null},"status (object)"),(0,l.kt)("td",{parentName:"tr",align:null},"Starts the web server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/fr/19/API/WebServerClass#start"},(0,l.kt)("inlineCode",{parentName:"a"},"stop()"))),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Stops the web server")))),(0,l.kt)("p",null,"To start and stop a web server, just call the ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/19/API/WebServerClass#start"},(0,l.kt)("inlineCode",{parentName:"a"},"start()"))," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/19/API/WebServerClass#stop"},(0,l.kt)("inlineCode",{parentName:"a"},"stop()"))," functions of the web server object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"var $status : Object\n    //to start a web server with default settings\n$status:=webServer.start()\n    //to start the web server with custom settings  \n    //$settings object contains web server properties\nwebServer.start($settings)\n\n    //to stop the web server\n$status:=webServer.stop()\n")),(0,l.kt)("h2",{id:"web-server-properties"},"Web server properties"),(0,l.kt)("p",null,"A web server object contains ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/19/API/WebServerClass#web-server-object"},"various properties")," which configure the web server. "),(0,l.kt)("p",null,"These properties are defined:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"using the ",(0,l.kt)("inlineCode",{parentName:"li"},"settings")," parameter of the ",(0,l.kt)("a",{parentName:"li",href:"/docs/fr/19/API/WebServerClass#start"},(0,l.kt)("inlineCode",{parentName:"a"},".start()"))," function (except for read-only properties, see below),"),(0,l.kt)("li",{parentName:"ol"},"if not used, using the ",(0,l.kt)("inlineCode",{parentName:"li"},"WEB SET OPTION")," command (host applications only), "),(0,l.kt)("li",{parentName:"ol"},"if not used, in the settings of the host application or the component. ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the web server is not started, the properties contain the values that will be used at the next web server startup. "),(0,l.kt)("li",{parentName:"ul"},"If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the ",(0,l.kt)("inlineCode",{parentName:"li"},"settings")," parameter of the ",(0,l.kt)("a",{parentName:"li",href:"/docs/fr/19/API/WebServerClass#start"},(0,l.kt)("inlineCode",{parentName:"a"},".start()"))," function.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"isRunning"),", ",(0,l.kt)("em",{parentName:"p"},"name"),", ",(0,l.kt)("em",{parentName:"p"},"openSSLVersion"),", and ",(0,l.kt)("em",{parentName:"p"},"perfectForwardSecrecy")," are read-only properties that cannot be predefined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"settings")," object parameter for the ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/19/API/WebServerClass#start"},(0,l.kt)("inlineCode",{parentName:"a"},"start()"))," function.   ")),(0,l.kt)("h2",{id:"scope-of-the-4d-web-commands"},"Scope of the 4D Web commands"),(0,l.kt)("p",null,"The 4D Language contains ",(0,l.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html"},"several commands")," that can be used to control the web server. However, these commands are designed to work with a single (default) web server. When using these commands in the context of web server objects, make sure their scope is appropriate. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Scope"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SET DATABASE PARAMETER")),(0,l.kt)("td",{parentName:"tr",align:null},"Host application web server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB CLOSE SESSION")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB GET BODY PART")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB Get body part count")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB Get Current Session ID")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB GET HTTP BODY")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB GET HTTP HEADER")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB GET OPTION")),(0,l.kt)("td",{parentName:"tr",align:null},"Host application web server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB Get server info")),(0,l.kt)("td",{parentName:"tr",align:null},"Host application web server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB GET SESSION EXPIRATION")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB Get session process count")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB GET STATISTICS")),(0,l.kt)("td",{parentName:"tr",align:null},"Host application web server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB GET VARIABLES")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB Is secured connection")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB Is server running")),(0,l.kt)("td",{parentName:"tr",align:null},"Host application web server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB SEND BLOB")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB SEND FILE")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB SEND HTTP REDIRECT")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB SEND RAW DATA")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB SEND TEXT")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB SET HOME PAGE")),(0,l.kt)("td",{parentName:"tr",align:null},"Host application web server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB SET HTTP HEADER")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB SET OPTION")),(0,l.kt)("td",{parentName:"tr",align:null},"Host application web server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB SET ROOT FOLDER")),(0,l.kt)("td",{parentName:"tr",align:null},"Host application web server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB START SERVER")),(0,l.kt)("td",{parentName:"tr",align:null},"Host application web server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB STOP SERVER")),(0,l.kt)("td",{parentName:"tr",align:null},"Host application web server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEB Validate digest")),(0,l.kt)("td",{parentName:"tr",align:null},"Web server that received the request")))))}u.isMDXComponent=!0}}]);