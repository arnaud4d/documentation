"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),k=i,c=d["".concat(o,".").concat(k)]||d[k]||u[k]||r;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});n(67294);var a=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"SessionClass",title:"Session"},s=void 0,o={unversionedId:"API/SessionClass",id:"version-19-R6/API/SessionClass",title:"Session",description:"Session objects are returned by the Session command when scalable sessions are enabled in your project. The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes.",source:"@site/versioned_docs/version-19-R6/API/SessionClass.md",sourceDirName:"API",slug:"/API/SessionClass",permalink:"/docs/API/SessionClass",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"SessionClass",title:"Session"},sidebar:"docs",previous:{title:"POP3Transporter",permalink:"/docs/API/POP3TransporterClass"},next:{title:"Signal",permalink:"/docs/API/SignalClass"}},p={},m=[{value:"Summary",id:"summary",level:3},{value:"Session",id:"session",level:2},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:".clearPrivileges()",id:"clearprivileges",level:2},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-1",level:4},{value:".expirationDate",id:"expirationdate",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-2",level:4},{value:".hasPrivilege()",id:"hasprivilege",level:2},{value:"Description",id:"description-3",level:4},{value:"Example",id:"example-3",level:4},{value:".idleTimeout",id:"idletimeout",level:2},{value:"Description",id:"description-4",level:4},{value:"Example",id:"example-4",level:4},{value:".isGuest()",id:"isguest",level:2},{value:"Description",id:"description-5",level:4},{value:"Example",id:"example-5",level:4},{value:".setPrivileges()",id:"setprivileges",level:2},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example-6",level:4},{value:".storage",id:"storage",level:2},{value:"Description",id:"description-7",level:4},{value:"Example",id:"example-7",level:4},{value:".userName",id:"username",level:2},{value:"Description",id:"description-8",level:4}],u={toc:m};function d(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",i({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Session objects are returned by the ",(0,a.kt)("a",i({parentName:"p"},{href:"#session"}),(0,a.kt)("inlineCode",{parentName:"a"},"Session"))," command when ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/WebServer/sessions#enabling-sessions"}),"scalable sessions are enabled in your project"),". The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes."),(0,a.kt)("p",null,"For detailed information about the session implementation, please refer to the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/WebServer/sessions"}),"web server Sessions")," section."),(0,a.kt)("h3",i({},{id:"summary"}),"Summary"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}))))),(0,a.kt)("p",null,"|",(0,a.kt)("a",i({parentName:"p"},{href:"#clearprivileges"}),(0,a.kt)("strong",{parentName:"a"},".clearPrivileges()")),"\xa0","\xa0","\xa0","\xa0","removes all the privileges associated to the session|\n|",(0,a.kt)("a",i({parentName:"p"},{href:"#expirationdate"}),(0,a.kt)("strong",{parentName:"a"},".expirationDate")," : Text"),"\xa0","\xa0","\xa0","\xa0","the expiration date and time of the session cookie|\n|",(0,a.kt)("a",i({parentName:"p"},{href:"#hasprivilege"}),(0,a.kt)("strong",{parentName:"a"},".hasPrivilege"),"( ",(0,a.kt)("em",{parentName:"a"},"privilege")," : Text ) : Boolean"),"\xa0","\xa0","\xa0","\xa0","returns True if the privilege is associated to the session, and False otherwise|\n|",(0,a.kt)("a",i({parentName:"p"},{href:"#idletimeout"}),(0,a.kt)("strong",{parentName:"a"},".idleTimeout")," : Integer"),"\xa0","\xa0","\xa0","\xa0","the inactivity session timeout (in minutes), after which the session is automatically closed by 4D|\n|",(0,a.kt)("a",i({parentName:"p"},{href:"#isguest"}),(0,a.kt)("strong",{parentName:"a"},".isGuest()")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","returns True if the session is a Guest session (i.e. it has no privileges)|\n|",(0,a.kt)("a",i({parentName:"p"},{href:"#setprivileges"}),(0,a.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"a"},"privilege")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"a"},"privileges")," : Collection )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"a"},"settings")," : Object )"),"\xa0","\xa0","\xa0","\xa0","associates the privilege(s) defined in the parameter to the session|\n|",(0,a.kt)("a",i({parentName:"p"},{href:"#storage"}),(0,a.kt)("strong",{parentName:"a"},".storage")," : Object"),"\xa0","\xa0","\xa0","\xa0","a shared object that can be used to store information available to all requests of the web client|\n|",(0,a.kt)("a",i({parentName:"p"},{href:"#username"}),(0,a.kt)("strong",{parentName:"a"},".userName")," : Text"),"\xa0","\xa0","\xa0","\xa0","the user name associated to the session|"),(0,a.kt)("h2",i({},{id:"session"}),"Session"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Session")," : 4D.Session\n|Parameter|Type||Description|\n|---------|--- |:---:|------|\n|Result|4D.Session|<-|Session object|"),(0,a.kt)("h4",i({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," command returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," object corresponding to the current scalable user web session."),(0,a.kt)("p",null,"This command only works when ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/WebServer/sessions#enabling-sessions"}),"scalable sessions are enabled"),". It returns ",(0,a.kt)("em",{parentName:"p"},"Null")," when sessions are disabled or when legacy sessions are used."),(0,a.kt)("p",null,"When scalable sessions are enabled, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," object is available from any web processes in the following contexts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On Web Authentication"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"On Web Connection"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"On REST Authentication")," database methods,"),(0,a.kt)("li",{parentName:"ul"},"ORDA ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/ORDA/ordaClasses"}),"Data Model Class functions")," called with REST requests,"),(0,a.kt)("li",{parentName:"ul"},"code processed through 4D tags in semi-dynamic pages (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)"),(0,a.kt)("li",{parentName:"ul"},'project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls.')),(0,a.kt)("h4",i({},{id:"example"}),"Example"),(0,a.kt)("p",null,"You have defined the ",(0,a.kt)("inlineCode",{parentName:"p"},"action_Session"),' method with attribute "Available through 4D tags and URLs". You call the method by entering the following URL in your browser:'),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{}),"IP:port/4DACTION/action_Session\n")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-4d"}),'  //action_Session method\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function\n          WEB SEND TEXT("4DACTION --\x3e Session is WebAdmin")\n       Else\n          WEB SEND TEXT("4DACTION --\x3e Session is not WebAdmin")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION --\x3e Sesion is null")\n End case\n')),(0,a.kt)("h2",i({},{id:"clearprivileges"}),".clearPrivileges()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".clearPrivileges()"),"\n|Parameter|Type||Description|\n|---------|--- |:---:|------|\n||||Does not require any parameters|"),(0,a.kt)("h4",i({},{id:"description-1"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".clearPrivileges()")," function removes all the privileges associated to the session. As a result, the session automatically becomes a Guest session."),(0,a.kt)("h4",i({},{id:"example-1"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-4d"}),"//Invalidate a session\nvar $isGuest : Boolean  \n\nSession.clearPrivileges()\n$isGuest:=Session.isGuest() //$isGuest is True\n")),(0,a.kt)("h2",i({},{id:"expirationdate"}),".expirationDate"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".expirationDate")," : Text"),(0,a.kt)("h4",i({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".expirationDate")," property contains the expiration date and time of the session cookie. The value is expressed as text in the ISO 8601 format: ",(0,a.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:MM:SS.mmmZ"),"."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),". It is automatically recomputed if the ",(0,a.kt)("a",i({parentName:"p"},{href:"#idletimeout"}),(0,a.kt)("inlineCode",{parentName:"a"},".idleTimeout"))," property value is modified."),(0,a.kt)("h4",i({},{id:"example-2"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-4d"}),'var $expiration : Text\n$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"\n')),(0,a.kt)("h2",i({},{id:"hasprivilege"}),".hasPrivilege()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".hasPrivilege"),"( ",(0,a.kt)("em",{parentName:"p"},"privilege")," : Text ) : Boolean\n|Parameter|Type||Description|\n|---------|--- |:---:|------|\n|privilege|Text|<-|Name of the privilege to verify|\n|Result|Boolean|<-|True if session has ",(0,a.kt)("em",{parentName:"p"},"privilege"),", False otherwise|"),(0,a.kt)("h4",i({},{id:"description-3"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".hasPrivilege()")," function returns True if the privilege is associated to the session, and False otherwise."),(0,a.kt)("h4",i({},{id:"example-3"}),"Example"),(0,a.kt)("p",null,'You want to check if the "WebAdmin" privilege is associated to the session:'),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-4d"}),'If (Session.hasPrivilege("WebAdmin"))\n //Access is granted, do nothing\nElse\n //Display an authentication page\n\nEnd if\n')),(0,a.kt)("h2",i({},{id:"idletimeout"}),".idleTimeout"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".idleTimeout")," : Integer"),(0,a.kt)("h4",i({},{id:"description-4"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".idleTimeout")," property contains the inactivity session timeout (in minutes), after which the session is automatically closed by 4D."),(0,a.kt)("p",null,"If this property is not set, the default value is 60 (1h)."),(0,a.kt)("p",null,"When this property is set, the ",(0,a.kt)("a",i({parentName:"p"},{href:"#expirationdate"}),(0,a.kt)("inlineCode",{parentName:"a"},".expirationDate"))," property is updated accordingly."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The value cannot be less than 60: if a lower value is set, the timeout is raised up to 60.")),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read write"),"."),(0,a.kt)("h4",i({},{id:"example-4"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-4d"}),"If (Session.isGuest())\n  // A Guest session will close after 60 minutes of inactivity\n Session.idleTimeout:=60\nElse\n  // Other sessions will close after 120 minutes of inactivity\n Session.idleTimeout:=120\nEnd if\n\n")),(0,a.kt)("h2",i({},{id:"isguest"}),".isGuest()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".isGuest()")," : Boolean\n|Parameter|Type||Description|\n|---------|--- |:---:|------|\n|Result|Boolean|<-|True if session is a Guest one, False otherwise|"),(0,a.kt)("h4",i({},{id:"description-5"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".isGuest()")," function returns True if the session is a Guest session (i.e. it has no privileges)."),(0,a.kt)("h4",i({},{id:"example-5"}),"Example"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"On Web Connection")," database method:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-4d"}),"If (Session.isGuest())\n //Do something for Guest user\nEnd if\n")),(0,a.kt)("h2",i({},{id:"setprivileges"}),".setPrivileges()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"p"},"privilege")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"p"},"privileges")," : Collection )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,a.kt)("em",{parentName:"p"},"settings"),' : Object )\n|Parameter|Type||Description|\n|---------|--- |:---:|------|\n|privilege|Text|->|Privilege name|\n|privileges|Collection|->|Collection of privilege names|\n|settings|Object|->|Object with a "privileges" property (string or collection)|'),(0,a.kt)("h4",i({},{id:"description-6"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".setPrivileges()")," function associates the privilege(s) defined in the parameter to the session."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("em",{parentName:"p"},"privilege")," parameter, pass a string containing a privilege name (or several comma-separated privilege names).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("em",{parentName:"p"},"privileges")," parameter, pass a collection of strings containing privilege names.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("em",{parentName:"p"},"settings")," parameter, pass an object containing the following properties:"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"privileges"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Text or Collection"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("li",null,"String containing a privilege name, or"),(0,a.kt)("li",null,"Collection of strings containing privilege names"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"userName"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"User name to associate to the session (optional)")))),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"privileges")," property contains an invalid privilege name, it is ignored."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'In the current implementation, only the "WebAdmin" privilege is available.')),(0,a.kt)("p",null,"By default when no privilege is associated to the session, the session is a ",(0,a.kt)("a",i({parentName:"p"},{href:"#isguest"}),"Guest session"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",i({parentName:"p"},{href:"#username"}),(0,a.kt)("inlineCode",{parentName:"a"},"userName"))," property is available at session object level (read-only)."),(0,a.kt)("h4",i({},{id:"example-6"}),"Example"),(0,a.kt)("p",null,'In a custom authentication method, you set the "WebAdmin" privilege to the user:'),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-4d"}),'var $userOK : Boolean\n\n... //Authenticate the user\n\nIf ($userOK) //The user has been approved\n  var $info : Object\n  $info:=New object()\n  $info.privileges:=New collection("WebAdmin")\n  Session.setPrivileges($info)\nEnd if\n\n')),(0,a.kt)("h2",i({},{id:"storage"}),".storage"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".storage")," : Object"),(0,a.kt)("h4",i({},{id:"description-7"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".storage")," property contains a shared object that can be used to store information available to all requests of the web client."),(0,a.kt)("p",null,"When a ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," object is created, the ",(0,a.kt)("inlineCode",{parentName:"p"},".storage")," property is empty. Since it is a shared object, this property will be available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage")," object of the server."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Like the ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage")," object of the server, the ",(0,a.kt)("inlineCode",{parentName:"p"},".storage"),' property is always "single": adding a shared object or a shared collection to ',(0,a.kt)("inlineCode",{parentName:"p"},".storage")," does not create a shared group.")),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read only")," itself but it returns a read-write object."),(0,a.kt)("h4",i({},{id:"example-7"}),"Example"),(0,a.kt)("p",null,"You want to store the client IP in the ",(0,a.kt)("inlineCode",{parentName:"p"},".storage")," property. You can write in the ",(0,a.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-4d"}),'If (Session.storage.clientIP=Null) //first access\n    Use (Session.storage)\n        Session.storage.clientIP:=New shared object("value"; $clientIP)\n    End use\nEnd if\n\n')),(0,a.kt)("h2",i({},{id:"username"}),".userName"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"v18 R6"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".userName")," : Text"),(0,a.kt)("h4",i({},{id:"description-8"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".userName")," property contains the user name associated to the session. You can use it to identify the user within your code."),(0,a.kt)("p",null,"This property is an empty string by default. It can be set using the ",(0,a.kt)("inlineCode",{parentName:"p"},"privileges")," property of the ",(0,a.kt)("a",i({parentName:"p"},{href:"#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},"setPrivileges()"))," function."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read only"),"."))}d.isMDXComponent=!0}}]);