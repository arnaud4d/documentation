"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,k=u["".concat(s,".").concat(g)]||u[g]||p[g]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"debugLogFiles",title:"Description of log files"},i=void 0,s={unversionedId:"Admin/debugLogFiles",id:"version-19/Admin/debugLogFiles",title:"Description of log files",description:"4D applications can generate several log files that are useful for debugging or optimizing their execution. Logs are usually started or stopped using selectors of the SET DATABASE PARAMETER or WEB SET OPTION commands and are stored in the Logs folder of the project.",source:"@site/versioned_docs/version-19/Admin/debugLogFiles.md",sourceDirName:"Admin",slug:"/Admin/debugLogFiles",permalink:"/documentation/docs/19/Admin/debugLogFiles",draft:!1,tags:[],version:"19",frontMatter:{id:"debugLogFiles",title:"Description of log files"},sidebar:"docs",previous:{title:"Command Line Interface",permalink:"/documentation/docs/19/Admin/cli"},next:{title:"Overview",permalink:"/documentation/docs/19/Users/overview"}},d={},m=[{value:"4DRequestsLog.txt",id:"4drequestslogtxt",level:2},{value:"Headers",id:"headers",level:4},{value:"Contents",id:"contents",level:4},{value:"4DRequestsLog_ProcessInfo.txt",id:"4drequestslog_processinfotxt",level:2},{value:"Headers",id:"headers-1",level:4},{value:"Contents",id:"contents-1",level:4},{value:"HTTPDebugLog.txt",id:"httpdebuglogtxt",level:2},{value:"4DDebugLog.txt (standard)",id:"4ddebuglogtxt-standard",level:2},{value:"4DDebugLog.txt (tabular)",id:"4ddebuglogtxt-tabular",level:2},{value:"4DDiagnosticLog.txt",id:"4ddiagnosticlogtxt",level:2},{value:"4DSMTPLog.txt, 4DPOP3Log.txt, and 4DIMAPLog.txt",id:"4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",level:2},{value:"Contents",id:"contents-2",level:4},{value:"ORDA client requests",id:"orda-client-requests",level:2}],p={toc:m};function u(e){var{components:t}=e,o=l(e,["components"]);return(0,a.kt)("wrapper",r({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4D applications can generate several log files that are useful for debugging or optimizing their execution. Logs are usually started or stopped using selectors of the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page642.html"}),"SET DATABASE PARAMETER")," or ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1210.html"}),"WEB SET OPTION")," commands and are stored in the ",(0,a.kt)("a",r({parentName:"p"},{href:"/documentation/docs/19/Project/architecture#logs"}),"Logs folder")," of the project."),(0,a.kt)("p",null,"Information logged needs to be analyzed to detect and fix issues. This section provides a comprehensive description of the following log files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"#4drequestslogtxt"}),"4DRequestsLog.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"l#4drequestslog_processinfotxt"}),"4DRequestsLog_ProcessInfo.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"#httpdebuglogtxt"}),"HTTPDebugLog.txt")),(0,a.kt)("li",{parentName:"ul"},"4DDebugLog.txt (",(0,a.kt)("a",r({parentName:"li"},{href:"#4ddebuglogtxt-standard"}),"standard")," & ",(0,a.kt)("a",r({parentName:"li"},{href:"#4ddebuglogtxt-tabular"}),"tabular"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"#4ddiagnosticlogtxt"}),"4DDiagnosticLog.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DIMAPLog.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DPOP3Log.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DSMTPLog.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"#orda-client-requests"}),"ORDA client requests log file"))),(0,a.kt)("p",null,'Note: When a log file can be generated either on 4D Server or on the remote client, the word "Server" is added to the server-side log file name, for example "4DRequestsLogServer.txt"'),(0,a.kt)("p",null,"Log files share some fields so that you can establish a chronology and make connections between entries while debugging:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sequence_number"),": this number is unique over all debug logs and is incremented for each new entry whatever the log file, so that you can know the exact sequence of the operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connection_uuid"),": for any 4D process created on a 4D client that connects to a server, this connection UUID is logged on both server and client side. It allows you to easily identify the remote client that launched each process.")),(0,a.kt)("h2",r({},{id:"4drequestslogtxt"}),"4DRequestsLog.txt"),(0,a.kt)("p",null,"This log file records standard requests carried out by the 4D Server machine or the 4D remote machine that executed the command (excluding Web requests)."),(0,a.kt)("p",null,"How to start this log:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on the server:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(4D Server log recording;1)\n//server side\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on a client:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(Client Log Recording;1)\n//remote side\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This statement also starts the ",(0,a.kt)("a",r({parentName:"p"},{href:"#4drequestslog_processinfotxt"}),"4DRequestsLog_ProcessInfo.txt")," log file.")),(0,a.kt)("h4",r({},{id:"headers"}),"Headers"),(0,a.kt)("p",null,"This file starts with the following headers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log Session Identifier"),(0,a.kt)("li",{parentName:"ul"},"Hostname of the server that hosts the application"),(0,a.kt)("li",{parentName:"ul"},"User Login Name: login on the OS of the user that ran the 4D application on the server.")),(0,a.kt)("h4",r({},{id:"contents"}),"Contents"),(0,a.kt)("p",null,"For each request, the following fields are logged:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Field name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sequence_number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique and sequential operation number in the logging session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"time"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date and time using ISO 8601 format: 'YYYY-MM-DDTHH:MM:SS.mmm'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"systemid"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"System ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"component"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Component signature (e.g., '4SQLS' or 'dbmg')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"process","_","info_"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'index Corresponds to the "index" field in 4DRequestsLog_ProcessInfo.txt log, and permits linking a request to a process.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"request"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Request ID in C/S or message string for SQL requests or ",(0,a.kt)("inlineCode",{parentName:"td"},"LOG EVENT")," messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"bytes_in"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number of bytes received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"bytes_out"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number of bytes sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"server","_","duration ","|"," exec","_","duration"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Depends on where the log is generated:",(0,a.kt)("li",null,(0,a.kt)("em",{parentName:"td"},"server","_","duration")," when generated on the client --Time taken in microseconds for the server to process the request and return a response. B to F in image below, OR"),(0,a.kt)("li",null,(0,a.kt)("em",{parentName:"td"},"exec","_","duration")," when generated on the server --Time taken in microseconds for the server to process the request. B to E in image below."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"write","_","duration"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Time taken in microseconds for sending the:",(0,a.kt)("li",null,"Request (when run on the client). A to B in image below."),(0,a.kt)("li",null,"Response (when run on the server). E to F in image below."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"task_kind"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Preemptive or cooperative (respectively 'p' or 'c')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"rtt"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Time estimate in microseconds for the client to send the request and the server to acknowledge it. A to D and E to H in image below.",(0,a.kt)("li",null,"Only measured when using the ServerNet network layer, returns 0 when used with the legacy network layer."),(0,a.kt)("li",null,"For Windows versions prior to Windows 10 or Windows Server 2016, the call will return 0."))))),(0,a.kt)("p",null,"Request flow:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(15329).Z,width:"535",height:"378"})),(0,a.kt)("h2",r({},{id:"4drequestslog_processinfotxt"}),"4DRequestsLog_ProcessInfo.txt"),(0,a.kt)("p",null,"This log file records information on each process created on the 4D Server machine or the 4D remote machine that executed the command (excluding Web requests)."),(0,a.kt)("p",null,"How to start this log:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on the server:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(4D Server log recording;1) //server side\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on a client:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(Client Log Recording;1) //remote side\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This statement also starts the ",(0,a.kt)("a",r({parentName:"p"},{href:"#4drequestslogtxt"}),"4DRequestsLog.txt")," log file.")),(0,a.kt)("h4",r({},{id:"headers-1"}),"Headers"),(0,a.kt)("p",null,"This file starts with the following headers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log Session Identifier"),(0,a.kt)("li",{parentName:"ul"},"Hostname of the server that hosts the application"),(0,a.kt)("li",{parentName:"ul"},"User Login Name: login on the OS of the user that ran the 4D application on the server.")),(0,a.kt)("h4",r({},{id:"contents-1"}),"Contents"),(0,a.kt)("p",null,"For each process, the following fields are logged:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Field name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sequence_number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique and sequential operation number in the logging session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"time"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'Date and time using ISO 8601 format: "YYYY-MM-DDTHH:MM:SS.mmm"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"process","_","info_index"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique and sequential process number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"CDB4DBaseContext"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"DB4D component database context UUID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"systemid"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"System ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"server","_","process","_","id"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Process ID on Server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"remote","_","process","_","id"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Process ID on Client")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"process","_","name"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Process name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"cID"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Identifier of 4D Connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"uID"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Identifier of 4D Client")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"IP Client"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"IPv4/IPv6 address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"host_name"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Client hostname")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"user_name"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"User Login Name on client")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"connection","_","uuid"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"UUID identifier of process connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"server","_","process","_","unique","_","id"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique process ID on Server")))),(0,a.kt)("h2",r({},{id:"httpdebuglogtxt"}),"HTTPDebugLog.txt"),(0,a.kt)("p",null,"This log file records each HTTP request and each response in raw mode. Whole requests, including headers, are logged; optionally, body parts can be logged as well."),(0,a.kt)("p",null,"How to start this log:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"WEB SET OPTION(Web debug log;wdl enable without body)  \n//other values are available\n")),(0,a.kt)("p",null,"The following fields are logged for both Request and Response:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Field name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"SocketID"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"ID of socket used for communication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"PeerIP"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"IPv4 address of host (client)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"PeerPort"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Port used by host (client)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"TimeStamp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Timestamp in milliseconds (since system startup)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"ConnectionID"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Connection UUID (UUID of VTCPSocket used for communication)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"SequenceNumber"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique and sequential operation number in the logging session")))),(0,a.kt)("h2",r({},{id:"4ddebuglogtxt-standard"}),"4DDebugLog.txt (standard)"),(0,a.kt)("p",null,"This log file records each event occurring at the 4D programming level. Standard mode provides a basic view of events."),(0,a.kt)("p",null,"How to start this log:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(Debug Log Recording;2)  \n//standard, all processes\n  \nSET DATABASE PARAMETER(Current process debug log recording;2)  \n//standard, current process only\n")),(0,a.kt)("p",null,"The following fields are logged for each event:  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Column #"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique and sequential operation number in the logging session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date and time in ISO 8601 format (YYYY-MM-DDThh:mm:ss.mmm)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Process ID (p=xx) and unique process ID (puid=xx)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Stack level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Can be Command Name/ Method Name/Message/ Task Start Stop info/Plugin Name, event or Callback/Connection UUID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Time taken for logging operation in milliseconds")))),(0,a.kt)("h2",r({},{id:"4ddebuglogtxt-tabular"}),"4DDebugLog.txt (tabular)"),(0,a.kt)("p",null,"This log file records each event occurring at the 4D programming level in a tabbed, compact format that includes additional information (compared to the standard format)."),(0,a.kt)("p",null,"How to start this log:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(Debug Log Recording;2+4)  \n//extended tabbed format, all processes\n  \nSET DATABASE PARAMETER(Current process debug log recording;2+4)  \n//extended, current process only\n")),(0,a.kt)("p",null,"The following fields are logged for each event:  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Column #"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Field name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sequence_number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique and sequential operation number in the logging session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"time"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date and time in ISO 8601 format (YYYY-MM-DDThh:mm:ss.mmm)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"ProcessID"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Process ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"unique_processID"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique process ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"stack_level"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Stack level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"6"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"operation_type"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Log operation type. This value may be an absolute value:",(0,a.kt)("ol",null,(0,a.kt)("li",null,"Command"),(0,a.kt)("li",null,"Method (project method, database method, etc.)"),(0,a.kt)("li",null,"Message (sent by ",(0,a.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page667.html"}),"LOG EVENT")," command only)"),(0,a.kt)("li",null,"PluginMessage"),(0,a.kt)("li",null,"PluginEvent"),(0,a.kt)("li",null,"PluginCommand"),(0,a.kt)("li",null,"PluginCallback"),(0,a.kt)("li",null,"Task"),(0,a.kt)("li",null,"Member method (method attached to a collection or an object)")),"When closing a stack level, the ",(0,a.kt)("inlineCode",{parentName:"td"},"operation_type"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"operation")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"operation_parameters")," columns have the same value as the opening stack level logged in the ",(0,a.kt)("inlineCode",{parentName:"td"},"stack_opening_sequence_number")," column. For example:",(0,a.kt)("ol",null,(0,a.kt)("li",null,"121  15:16:50:777  5  8  1  2 CallMethod Parameters 0"),(0,a.kt)("li",null,"122  15:16:50:777  5  8  2  1 283  0"),(0,a.kt)("li",null,"123  15:16:50:777  5  8  2  1 283  0 122 3"),(0,a.kt)("li",null,"124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61")),"The 1st and 2nd lines open a stack level, the 3rd and 4th lines close a stack level. Values in the columns 6, 7 and 8 are repeated in the closing stack level line. The column 10 contains the stack level opening sequence numbers, i.e. 122 for the 3rd line and 121 for the 4th.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"operation"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"May represent (depending on operation type):",(0,a.kt)("li",null,"a Language Command ID (when type=1)"),(0,a.kt)("li",null,"a Method Name (when type=2)"),(0,a.kt)("li",null,"a combination of pluginIndex;pluginCommand (when type=4, 5, 6 or 7). May contain something like '3;2'"),(0,a.kt)("li",null,"a Task Connection UUID (when type=8)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"8"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"operation_parameters"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Parameters passed to commands, methods, or plugins")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"9"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"form_event"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Form event if any; empty in other cases (suppose that column is used when code is executed in a form method or object method)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"stack_opening_sequence_number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Only for the closing stack levels: Sequence number of the corresponding opening stack level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"stack_level_execution_time"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Only for the closing stack levels: Elapsed time in micro seconds of the current logged action; only for the closing stack levels (see 10th columns in lines 123 and 124 in the log above)")))),(0,a.kt)("h2",r({},{id:"4ddiagnosticlogtxt"}),"4DDiagnosticLog.txt"),(0,a.kt)("p",null,"This log file records many events related to the internal application operation and is human-readable. You can include custom information in this file using the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page667.html"}),"LOG EVENT")," command."),(0,a.kt)("p",null,"How to start this log:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," SET DATABASE PARAMETER(Diagnostic log recording;1) //start recording\n")),(0,a.kt)("p",null,"The following fields are logged for each event:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Field Name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sequenceNumber"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique and sequential operation number in the logging session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"timestamp"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date and time in ISO 8601 format (YYYY-MM-DDThh:mm:ss.mmm)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"loggerID"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"componentSignature"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Optional - internal component signature")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"messageLevel"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Info, Warning, Error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Description of the log entry")))),(0,a.kt)("p",null,"Depending on the event, various other fields can also be logged, such as task, socket, etc."),(0,a.kt)("h2",r({},{id:"4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DSMTPLog.txt, 4DPOP3Log.txt, and 4DIMAPLog.txt"),(0,a.kt)("p",null,"These log files record each exchange between the 4D application and the mail server (SMTP, POP3, IMAP) that has been initiated by the following commands:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SMTP - ",(0,a.kt)("a",r({parentName:"li"},{href:"/documentation/docs/19/API/SMTPTransporterClass#smtp-new-transporter"}),"SMTP New transporter")),(0,a.kt)("li",{parentName:"ul"},"POP3 - ",(0,a.kt)("a",r({parentName:"li"},{href:"/documentation/docs/19/API/POP3TransporterClass#pop3-new-transporter"}),"POP3 New transporter")),(0,a.kt)("li",{parentName:"ul"},"IMAP  - ",(0,a.kt)("a",r({parentName:"li"},{href:"/documentation/docs/19/API/IMAPTransporterClass#imap-new-transporter"}),"IMAP New transporter"))),(0,a.kt)("p",null,"The log files can be produced in two versions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a regular version:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"named 4DSMTPLog.txt, 4DPOP3Log.txt, or 4DIMAPLog.txt"),(0,a.kt)("li",{parentName:"ul"},"no attachments"),(0,a.kt)("li",{parentName:"ul"},"uses an automatic circular file recycling each 10 MB"),(0,a.kt)("li",{parentName:"ul"},"intended for usual debugging")),(0,a.kt)("p",{parentName:"li"},"To start this log:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(SMTP Log;1) //start SMTP log \nSET DATABASE PARAMETER(POP3 Log;1) //start POP3 log \nSET DATABASE PARAMETER(IMAP Log;1) //start IMAP log\n")),(0,a.kt)("p",{parentName:"li"},"4D Server: Click on the ",(0,a.kt)("strong",{parentName:"p"},"Start Request and Debug Logs")," button in the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv18R5/4D/18-R5/Maintenance-Page.300-5149308.en.html"}),"Maintenance Page")," of the 4D Server administration window."),(0,a.kt)("p",{parentName:"li"},"  This log path is returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Get 4D file")," command.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"an extended version:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"attachment(s) included\nno automatic recycling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"custom name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"reserved for specific purposes"),(0,a.kt)("p",{parentName:"li"},"To start this log:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$server:=New object\n...\n//SMTP\n$server.logFile:="MySMTPAuthLog.txt"\n$transporter:=SMTP New transporter($server)\n \n// POP3\n$server.logFile:="MyPOP3AuthLog.txt"\n$transporter:=POP3 New transporter($server)\n \n//IMAP\n$server.logFile:="MyIMAPAuthLog.txt"\n$transporter:=IMAP New transporter($server)\n')))))),(0,a.kt)("h4",r({},{id:"contents-2"}),"Contents"),(0,a.kt)("p",null,"For each request, the following fields are logged:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Column #"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique and sequential operation number in the logging session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date and time in RFC3339 format (yyyy-mm-ddThh:mm:ss.ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D Process ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique process ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"SMTP,POP3, or IMAP session startup information, including server host name, TCP port number used to connect to SMTP,POP3, or IMAP server and TLS status,or"),(0,a.kt)("li",null,'data exchanged between server and client, starting with "S <" (data received from the SMTP,POP3, or IMAP server) or "C >" (data sent by the SMTP,POP3, or IMAP client): authentication mode list sent by the server and selected authentication mode, any error reported by the SMTP,POP3, or IMAP Server, header information of sent mail (standard version only) and if the mail is saved on the server,or'),(0,a.kt)("li",null,"SMTP,POP3, or IMAP session closing information.")))))),(0,a.kt)("h2",r({},{id:"orda-client-requests"}),"ORDA client requests"),(0,a.kt)("p",null,"This log records each ORDA request sent from a remote machine. You can direct log information to memory or to a file on disk. The name and location of this log file are your choice."),(0,a.kt)("p",null,"How to start this log:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'//to be executed on a remote machine\nds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  \n//can be also sent to memory\n')),(0,a.kt)("p",null,"If you want to use the unique sequence number in ORDA request log, you need to trigger it:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'//to be executed on a remote machine\n  \nSET DATABASE PARAMETER(Client Log Recording;1)  \n//to enable log sequence number\n \nds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  \n//can be also sent to memory\n  \nSET DATABASE PARAMETER(Client Log Recording;0)  \n//disabling sequence number\n')),(0,a.kt)("p",null,"The following fields are logged for each request:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Field name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sequenceNumber"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unique and sequential operation number in the logging session"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"104")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"url"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Client ORDA request URL"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"rest/Persons(30001)"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"startTime"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Starting date and time using ISO 8601 format"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"2019-05-28T08:25:12.346Z"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"endTime"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ending date and time using ISO 8601 format"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"2019-05-28T08:25:12.371Z"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"duration"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Client processing duration (ms)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"25")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"response"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Server response object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'{"status":200,"body":{"__entityModel":"Persons",',"[","...]")))))}u.isMDXComponent=!0},15329:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/logRequestFlow-4d1667b5e86f1ae2bb483f71b5ee3414.PNG"}}]);