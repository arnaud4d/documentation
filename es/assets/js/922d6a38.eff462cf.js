"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63141],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=d(a),m=l,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},36540:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});a(67294);var n=a(3905);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},l.apply(this,arguments)}function r(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}const i={id:"data-collect",title:"About Data Collection"},o=void 0,p={unversionedId:"Admin/data-collect",id:"version-19-R6/Admin/data-collect",title:"About Data Collection",description:"To help us make our products always better, we automatically collect data regarding usage statistics on running 4D Server applications. Collected data is completely anonymous and data is transferred with no impact on the user experience.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Admin/data-collect.md",sourceDirName:"Admin",slug:"/Admin/data-collect",permalink:"/docs/es/Admin/data-collect",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"data-collect",title:"About Data Collection"},sidebar:"docs",previous:{title:"Managing 4D Licenses",permalink:"/docs/es/Admin/licenses"},next:{title:"TLS Protocol (HTTPS)",permalink:"/docs/es/Admin/tls"}},d={},s=[{value:"Collected information",id:"collected-information",level:2},{value:"Collected at 4D Server startup",id:"collected-at-4d-server-startup",level:3},{value:"Collected per database at opening",id:"collected-per-database-at-opening",level:3},{value:"Collected per database at closure",id:"collected-per-database-at-closure",level:3},{value:"Collected per database at web server startup",id:"collected-per-database-at-web-server-startup",level:3},{value:"When is it stored and sent?",id:"when-is-it-stored-and-sent",level:2},{value:"Disabling data collection in client/server built applications",id:"disabling-data-collection-in-clientserver-built-applications",level:2}],u={toc:s};function c(t){var{components:e}=t,i=r(t,["components"]);return(0,n.kt)("wrapper",l({},u,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To help us make our products always better, we automatically collect data regarding usage statistics on running 4D Server applications. Collected data is completely anonymous and data is transferred with no impact on the user experience."),(0,n.kt)("p",null,"This page explains:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"what information is collected"),(0,n.kt)("li",{parentName:"ul"},"where information is stored and when it is sent to 4D"),(0,n.kt)("li",{parentName:"ul"},"how to disable automatic data collection in client/server built applications.")),(0,n.kt)("h2",l({},{id:"collected-information"}),"Collected information"),(0,n.kt)("p",null,"Data is collected during the following events:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4D Server startup,"),(0,n.kt)("li",{parentName:"ul"},"database opening,"),(0,n.kt)("li",{parentName:"ul"},"database closure,"),(0,n.kt)("li",{parentName:"ul"},"web server startup.")),(0,n.kt)("h3",l({},{id:"collected-at-4d-server-startup"}),"Collected at 4D Server startup"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Example"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"CPU"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Name, type, and speed of the processor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"numberOfCores"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Total number of cores")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"memory"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"419430400"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Volume of memory storage (in bytes) available on the machine")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"system"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Microsoft Windows 10 Pro 1809 (17763.253)"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Operating system version and build number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"headless"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if the application is running in headless mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"version"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"1960"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Version number of the 4D application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"buildNumber"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"123456"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Build number of the 4D application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"license"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),'{"name":"4D Developer Professional 19R6","products":','[{"id":808464433,"name":"4D","allowedCount":1}]',"}"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Commercial name and description of product licenses")))),(0,n.kt)("h3",l({},{id:"collected-per-database-at-opening"}),"Collected per database at opening"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Example"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"hashed string"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Unique id associated to the database (",(0,n.kt)("em",{parentName:"td"},"Polynomial Rolling hash of the database name"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataFileSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"419430400"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Data file size in bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexesSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"419430400"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Index size in bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"419430400"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Cache size in bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"usingLegacyNetworkLayer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"fasle"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if legacy network layer used for the application server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"isEncrypted"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if the data file is encrypted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"isCompiled"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if the application is compiled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"isEngined"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if the application is merged with 4D Volume Desktop")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"isProjectMode"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if the application is a project")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"mobile"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),'[{"os":"iOS", "version":"12.465", "simulator":"false"}]'),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Information on mobile sessions")))),(0,n.kt)("h3",l({},{id:"collected-per-database-at-closure"}),"Collected per database at closure"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Example"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"uptime"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"123456"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Time elapsed (in seconds) since local 4D database was opened")))),(0,n.kt)("h3",l({},{id:"collected-per-database-at-web-server-startup"}),"Collected per database at web server startup"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Example"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webServer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),'{"started":true}'),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Always true")))),(0,n.kt)("h2",l({},{id:"when-is-it-stored-and-sent"}),"When is it stored and sent?"),(0,n.kt)("p",null,"Collected data is written in a text file (JSON format) when 4D Server quits. The file is stored inside the ",(0,n.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page485.html"}),"active 4D folder"),", i.e.:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"on Windows: ",(0,n.kt)("inlineCode",{parentName:"li"},"Users\\[userName]\\AppData\\Roaming\\4D Server")),(0,n.kt)("li",{parentName:"ul"},"on macOS: ",(0,n.kt)("inlineCode",{parentName:"li"},"/Users/[userName]/Library/ApplicationSupport/4D Server"))),(0,n.kt)("p",null,"Once a week, the file is automatically sent over the network to 4D. The file is then deleted from the active 4D folder."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(53790).Z,width:"1261",height:"398"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the file could not be sent for some reason, it is nevertheless deleted and no error message is displayed on the 4D Server side.")),(0,n.kt)("h2",l({},{id:"disabling-data-collection-in-clientserver-built-applications"}),"Disabling data collection in client/server built applications"),(0,n.kt)("p",null,"You can disable the automatic data collection in ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/Desktop/building#clientserver-page"}),"client/server built applications"),"."),(0,n.kt)("p",null,"To disable the collection, pass the value ",(0,n.kt)("strong",{parentName:"p"},"False")," to the ",(0,n.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"ServerDataCollection"))," key in the ",(0,n.kt)("inlineCode",{parentName:"p"},"buildApp.4DSettings")," file, used to build the client/server application."))}c.isMDXComponent=!0},53790:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/data-collect-3bbbbcb5b54d82cae14ce1aa89e842eb.png"}}]);