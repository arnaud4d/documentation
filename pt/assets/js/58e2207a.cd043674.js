"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57225],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(o,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={id:"SessionClass",title:"Session"},o=void 0,p={unversionedId:"API/SessionClass",id:"version-19/API/SessionClass",title:"Session",description:"Session objects are returned by the Session command when scalable sessions are enabled in your project. The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes.",source:"@site/versioned_docs/version-19/API/SessionClass.md",sourceDirName:"API",slug:"/API/SessionClass",permalink:"/main/pt/docs/19/API/SessionClass",draft:!1,tags:[],version:"19",frontMatter:{id:"SessionClass",title:"Session"},sidebar:"docs",previous:{title:"POP3Transporter",permalink:"/main/pt/docs/19/API/POP3TransporterClass"},next:{title:"Signal",permalink:"/main/pt/docs/19/API/SignalClass"}},m={},d=[{value:"Summary",id:"summary",level:3},{value:"Session",id:"session",level:2},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:".clearPrivileges()",id:"clearprivileges",level:2},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-1",level:4},{value:".expirationDate",id:"expirationdate",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-2",level:4},{value:".hasPrivilege()",id:"hasprivilege",level:2},{value:"Description",id:"description-3",level:4},{value:"Example",id:"example-3",level:4},{value:".idleTimeout",id:"idletimeout",level:2},{value:"Description",id:"description-4",level:4},{value:"Example",id:"example-4",level:4},{value:".isGuest()",id:"isguest",level:2},{value:"Description",id:"description-5",level:4},{value:"Example",id:"example-5",level:4},{value:".setPrivileges()",id:"setprivileges",level:2},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example-6",level:4},{value:".storage",id:"storage",level:2},{value:"Description",id:"description-7",level:4},{value:"Example",id:"example-7",level:4},{value:".userName",id:"username",level:2},{value:"Description",id:"description-8",level:4}],u={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Session objects are returned by the ",(0,l.kt)("a",{parentName:"p",href:"#session"},(0,l.kt)("inlineCode",{parentName:"a"},"Session"))," command when ",(0,l.kt)("a",{parentName:"p",href:"/main/pt/docs/19/WebServer/sessions#enabling-sessions"},"scalable sessions are enabled in your project"),". The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes."),(0,l.kt)("p",null,"For detailed information about the session implementation, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"/main/pt/docs/19/WebServer/sessions"},"web server Sessions")," section."),(0,l.kt)("h3",{id:"summary"},"Summary"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#clearprivileges"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#expirationdate"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#hasprivilege"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#idletimeout"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#isguest"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#setprivileges"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#storage"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#username"}),"\xa0","\xa0","\xa0","\xa0")))),(0,l.kt)("h2",{id:"session"},"Session"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v18 R6"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Session")," : 4D.Session"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"4D.Session"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Session object")))),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Session")," command ","returns the ",(0,l.kt)("inlineCode",{parentName:"p"},"Session")," object corresponding to the current scalable user web session","."),(0,l.kt)("p",null,"This command only works when ",(0,l.kt)("a",{parentName:"p",href:"/main/pt/docs/19/WebServer/sessions#enabling-sessions"},"scalable sessions are enabled"),". It returns ",(0,l.kt)("em",{parentName:"p"},"Null")," when sessions are disabled or when legacy sessions are used."),(0,l.kt)("p",null,"When scalable sessions are enabled, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Session")," object is available from any web processes in the following contexts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"On Web Authentication"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"On Web Connection"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"On REST Authentication")," database methods,"),(0,l.kt)("li",{parentName:"ul"},"ORDA ",(0,l.kt)("a",{parentName:"li",href:"/main/pt/docs/19/ORDA/ordaClasses"},"Data Model Class functions")," called with REST requests,"),(0,l.kt)("li",{parentName:"ul"},"code processed through 4D tags in semi-dynamic pages (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)"),(0,l.kt)("li",{parentName:"ul"},'project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls.')),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("p",null,"You have defined the ",(0,l.kt)("inlineCode",{parentName:"p"},"action_Session"),' method with attribute "Available through 4D tags and URLs". You call the method by entering the following URL in your browser:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"IP:port/4DACTION/action_Session\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'  //action_Session method\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function\n          WEB SEND TEXT("4DACTION --\x3e Session is WebAdmin")\n       Else\n          WEB SEND TEXT("4DACTION --\x3e Session is not WebAdmin")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION --\x3e Sesion is null")\n End case\n')),(0,l.kt)("h2",{id:"clearprivileges"},".clearPrivileges()"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v18 R6"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".clearPrivileges()")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:null},"Does not require any parameters")))),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".clearPrivileges()")," function ","removes all the privileges associated to the session",". As a result, the session automatically becomes a Guest session."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"//Invalidate a session\nvar $isGuest : Boolean  \n\nSession.clearPrivileges()\n$isGuest:=Session.isGuest() //$isGuest is True\n")),(0,l.kt)("h2",{id:"expirationdate"},".expirationDate"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v18 R6"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".expirationDate")," : Text"),(0,l.kt)("h4",{id:"description-2"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".expirationDate")," property contains ","the expiration date and time of the session cookie",". The value is expressed as text in the ISO 8601 format: ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:MM:SS.mmmZ"),"."),(0,l.kt)("p",null,"This property is ",(0,l.kt)("strong",{parentName:"p"},"read-only"),". It is automatically recomputed if the ",(0,l.kt)("a",{parentName:"p",href:"#idletimeout"},(0,l.kt)("inlineCode",{parentName:"a"},".idleTimeout"))," property value is modified."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'var $expiration : Text\n$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"\n')),(0,l.kt)("h2",{id:"hasprivilege"},".hasPrivilege()"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v18 R6"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".hasPrivilege"),"( ",(0,l.kt)("em",{parentName:"p"},"privilege")," : Text ) : Boolean"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privilege"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the privilege to verify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"True if session has ",(0,l.kt)("em",{parentName:"td"},"privilege"),", False otherwise")))),(0,l.kt)("h4",{id:"description-3"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".hasPrivilege()")," function ","returns True if the privilege is associated to the session, and False otherwise","."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("p",null,'You want to check if the "WebAdmin" privilege is associated to the session:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'If (Session.hasPrivilege("WebAdmin"))\n //Access is granted, do nothing\nElse\n //Display an authentication page\n\nEnd if\n')),(0,l.kt)("h2",{id:"idletimeout"},".idleTimeout"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v18 R6"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".idleTimeout")," : Integer"),(0,l.kt)("h4",{id:"description-4"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".idleTimeout")," property contains ","the inactivity session timeout (in minutes), after which the session is automatically closed by 4D","."),(0,l.kt)("p",null,"If this property is not set, the default value is 60 (1h)."),(0,l.kt)("p",null,"When this property is set, the ",(0,l.kt)("a",{parentName:"p",href:"#expirationdate"},(0,l.kt)("inlineCode",{parentName:"a"},".expirationDate"))," property is updated accordingly."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The value cannot be less than 60: if a lower value is set, the timeout is raised up to 60.")),(0,l.kt)("p",null,"This property is ",(0,l.kt)("strong",{parentName:"p"},"read write"),"."),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"If (Session.isGuest())\n  // A Guest session will close after 60 minutes of inactivity\n Session.idleTimeout:=60\nElse\n  // Other sessions will close after 120 minutes of inactivity\n Session.idleTimeout:=120\nEnd if\n\n")),(0,l.kt)("h2",{id:"isguest"},".isGuest()"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v18 R6"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".isGuest()")," : Boolean"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"True if session is a Guest one, False otherwise")))),(0,l.kt)("h4",{id:"description-5"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".isGuest()")," function ","returns True if the session is a Guest session (i.e. it has no privileges)","."),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"On Web Connection")," database method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"If (Session.isGuest())\n //Do something for Guest user\nEnd if\n")),(0,l.kt)("h2",{id:"setprivileges"},".setPrivileges()"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v18 R6"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,l.kt)("em",{parentName:"p"},"privilege")," : Text )",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,l.kt)("em",{parentName:"p"},"privileges")," : Collection )",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,l.kt)("em",{parentName:"p"},"settings")," : Object )"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privilege"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Privilege name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privileges"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection of privilege names")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},'Object with a "privileges" property (string or collection)')))),(0,l.kt)("h4",{id:"description-6"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".setPrivileges()")," function ","associates the privilege(s) defined in the parameter to the session","."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the ",(0,l.kt)("em",{parentName:"p"},"privilege")," parameter, pass a string containing a privilege name (or several comma-separated privilege names).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the ",(0,l.kt)("em",{parentName:"p"},"privileges")," parameter, pass a collection of strings containing privilege names.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the ",(0,l.kt)("em",{parentName:"p"},"settings")," parameter, pass an object containing the following properties:"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privileges"),(0,l.kt)("td",{parentName:"tr",align:null},"Text or Collection"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"String containing a privilege name, or"),(0,l.kt)("li",null,"Collection of strings containing privilege names"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userName"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"User name to associate to the session (optional)")))),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"privileges")," property contains an invalid privilege name, it is ignored."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'In the current implementation, only the "WebAdmin" privilege is available.')),(0,l.kt)("p",null,"By default when no privilege is associated to the session, the session is a ",(0,l.kt)("a",{parentName:"p",href:"#isguest"},"Guest session"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"#username"},(0,l.kt)("inlineCode",{parentName:"a"},"userName"))," property is available at session object level (read-only)."),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("p",null,'In a custom authentication method, you set the "WebAdmin" privilege to the user:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'var $userOK : Boolean\n\n... //Authenticate the user\n\nIf ($userOK) //The user has been approved\n  var $info : Object\n  $info:=New object()\n  $info.privileges:=New collection("WebAdmin")\n  Session.setPrivileges($info)\nEnd if\n\n')),(0,l.kt)("h2",{id:"storage"},".storage"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v18 R6"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".storage")," : Object"),(0,l.kt)("h4",{id:"description-7"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".storage")," property contains ","a shared object that can be used to store information available to all requests of the web client","."),(0,l.kt)("p",null,"When a ",(0,l.kt)("inlineCode",{parentName:"p"},"Session")," object is created, the ",(0,l.kt)("inlineCode",{parentName:"p"},".storage")," property is empty. Since it is a shared object, this property will be available in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Storage")," object of the server."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Like the ",(0,l.kt)("inlineCode",{parentName:"p"},"Storage")," object of the server, the ",(0,l.kt)("inlineCode",{parentName:"p"},".storage"),' property is always "single": adding a shared object or a shared collection to ',(0,l.kt)("inlineCode",{parentName:"p"},".storage")," does not create a shared group.")),(0,l.kt)("p",null,"This property is ",(0,l.kt)("strong",{parentName:"p"},"read only")," itself but it returns a read-write object."),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("p",null,"You want to store the client IP in the ",(0,l.kt)("inlineCode",{parentName:"p"},".storage")," property. You can write in the ",(0,l.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'If (Session.storage.clientIP=Null) //first access\n    Use (Session.storage)\n        Session.storage.clientIP:=New shared object("value"; $clientIP)\n    End use\nEnd if\n\n')),(0,l.kt)("h2",{id:"username"},".userName"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v18 R6"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".userName")," : Text"),(0,l.kt)("h4",{id:"description-8"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".userName")," property contains ","the user name associated to the session",". You can use it to identify the user within your code."),(0,l.kt)("p",null,"This property is an empty string by default. It can be set using the ",(0,l.kt)("inlineCode",{parentName:"p"},"privileges")," property of the ",(0,l.kt)("a",{parentName:"p",href:"#setprivileges"},(0,l.kt)("inlineCode",{parentName:"a"},"setPrivileges()"))," function."),(0,l.kt)("p",null,"This property is ",(0,l.kt)("strong",{parentName:"p"},"read only"),"."))}k.isMDXComponent=!0}}]);