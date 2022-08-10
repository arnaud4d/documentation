"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71686],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),s=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=s(a),u=r,c=k["".concat(i,".").concat(u)]||k[u]||d[u]||l;return a?n.createElement(c,o(o({ref:e},m),{},{components:a})):n.createElement(c,o({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6612:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],p={id:"SMTPTransporterClass",title:"SMTPTransporter"},i=void 0,s={unversionedId:"API/SMTPTransporterClass",id:"API/SMTPTransporterClass",title:"SMTPTransporter",description:"The SMTPTransporter class allows you to configure SMTP connections and send emails through SMTP transporter objects.",source:"@site/docs/API/SMTPTransporterClass.md",sourceDirName:"API",slug:"/API/SMTPTransporterClass",permalink:"/main/es/docs/next/API/SMTPTransporterClass",draft:!1,tags:[],version:"current",frontMatter:{id:"SMTPTransporterClass",title:"SMTPTransporter"},sidebar:"docs",previous:{title:"Signal",permalink:"/main/es/docs/next/API/SignalClass"},next:{title:"SystemWorker",permalink:"/main/es/docs/next/API/SystemWorkerClass"}},m={},d=[{value:"SMTP Transporter object",id:"smtp-transporter-object",level:3},{value:"SMTP New transporter",id:"smtp-new-transporter",level:2},{value:"Description",id:"description",level:4},{value:"Result",id:"result",level:4},{value:"Example",id:"example",level:4},{value:"4D.SMTPTransporter.new()",id:"4dsmtptransporternew",level:2},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-1",level:4},{value:".keepAlive",id:"keepalive",level:2},{value:"Description",id:"description-2",level:4},{value:".send()",id:"send",level:2},{value:"Description",id:"description-3",level:4},{value:"Returned object",id:"returned-object",level:4}],k={toc:d};function u(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SMTPTransporter")," class allows you to configure SMTP connections and send emails through ",(0,l.kt)("em",{parentName:"p"},"SMTP transporter")," objects."),(0,l.kt)("h3",{id:"smtp-transporter-object"},"SMTP Transporter object"),(0,l.kt)("p",null,"SMTP Transporter objects are instantiated with the ",(0,l.kt)("a",{parentName:"p",href:"#smtp-new-transporter"},"SMTP New transporter")," command. They provide the following properties and functions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#acceptunsecureconnection"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#authenticationmode"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#bodycharset"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#checkconnection"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#connectiontimeout"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#headercharset"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#host"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#keepalive"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#logfile"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#port"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#send"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#sendtimeout"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#user"}),"\xa0","\xa0","\xa0","\xa0")))),(0,l.kt)("h2",{id:"smtp-new-transporter"},"SMTP New transporter"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v18"),(0,l.kt)("td",{parentName:"tr",align:null},"New logFile property")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"New bodyCharset and headerCharset properties")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"SMTP New transporter"),"( ",(0,l.kt)("em",{parentName:"p"},"server")," : Object ) : 4D.SMTPTransporter"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Mail server information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"4D.SMTPTransporter"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#smtp-transporter-object"},"SMTP transporter object"))))),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SMTP New transporter")," command ","configures a new SMTP connection"," according to the ",(0,l.kt)("em",{parentName:"p"},"server")," parameter and returns a new ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"#smtp-transporter-object"},"SMTP transporter"))," object. The returned transporter object will then usually be used to send emails."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This command does not open any connection to the SMTP server. The SMTP connection is actually opened when the ",(0,l.kt)("a",{parentName:"p",href:"#send"},(0,l.kt)("inlineCode",{parentName:"a"},".send()"))," function is executed.  "),(0,l.kt)("p",{parentName:"blockquote"},"The SMTP connection is automatically closed:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"when the transporter object is destroyed if the ",(0,l.kt)("a",{parentName:"li",href:"#keepalive"},(0,l.kt)("inlineCode",{parentName:"a"},"keepAlive"))," property is true (default),"),(0,l.kt)("li",{parentName:"ul"},"after each  ",(0,l.kt)("a",{parentName:"li",href:"#send"},(0,l.kt)("inlineCode",{parentName:"a"},".send( )"))," function execution if the ",(0,l.kt)("a",{parentName:"li",href:"#keepalive"},(0,l.kt)("inlineCode",{parentName:"a"},"keepAlive"))," property is set to false."))),(0,l.kt)("p",null,"In the ",(0,l.kt)("em",{parentName:"p"},"server")," parameter, pass an object containing the following properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"server")),(0,l.kt)("th",{parentName:"tr",align:null},"Default value (if omitted)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#acceptunsecureconnection"}),"\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},".",(0,l.kt)("strong",{parentName:"td"},"accessTokenOAuth2"),": Text",(0,l.kt)("br",null),".",(0,l.kt)("strong",{parentName:"td"},"accessTokenOAuth2"),": Object",(0,l.kt)("br",null),"Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 ",(0,l.kt)("inlineCode",{parentName:"td"},"authenticationMode"),". If ",(0,l.kt)("inlineCode",{parentName:"td"},"accessTokenOAuth2")," is used but ",(0,l.kt)("inlineCode",{parentName:"td"},"authenticationMode")," is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#smtp-transporter-object"},"SMTP transporter"))," object."),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#authenticationmode"}),"\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"the most secure authentication mode supported by the server is used")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#bodycharset"}),"\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mail mode UTF8")," (US-ASCII_UTF8_QP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#connectiontimeout"}),"\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#headercharset"}),"\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mail mode UTF8")," (US-ASCII_UTF8_QP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#host"}),"\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"mandatory"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#keepalive"}),"\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#logfile"}),"\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"password")," : Text",(0,l.kt)("br",null),"User password for authentication on the server. Not returned in ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#smtp-transporter-object"},"SMTP transporter"))," object."),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#port"}),"\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"587")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#sendtimeout"}),"\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#user"}),"\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"none")))),(0,l.kt)("h4",{id:"result"},"Result"),(0,l.kt)("p",null,"The function returns a ",(0,l.kt)("a",{parentName:"p",href:"#smtp-transporter-object"},(0,l.kt)("strong",{parentName:"a"},"SMTP transporter object")),". All returned properties are ",(0,l.kt)("strong",{parentName:"p"},"read-only"),"."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' $server:=New object\n $server.host:="smtp.gmail.com" //Mandatory\n $server.port:=465\n $server.user:="4D@gmail.com"\n $server.password:="XXXX"\n $server.logFile:="LogTest.txt" //Extended log to save in the Logs folder\n\n var $transporter : 4D.SMTPTransporter\n $transporter:=SMTP New transporter($server)\n\n $email:=New object\n $email.subject:="my first mail "\n $email.from:="4d@gmail.com"\n $email.to:="4d@4d.com;test@4d.com"\n $email.textBody:="Hello World"\n $email.htmlBody:="<h1>Hello World</h1><h4>\'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\'</h4>\\\n <p>There are many variations of passages of Lorem Ipsum available."\\\n +"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"\n\n $status:=$transporter.send($email)\n If(Not($status.success))\n    ALERT("An error occurred sending the mail: "+$status.message)\n End if\n')),(0,l.kt)("h2",{id:"4dsmtptransporternew"},"4D.SMTPTransporter.new()"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4D.SMTPTransporter.new"),"( ",(0,l.kt)("em",{parentName:"p"},"server")," : Object ) : 4D.SMTPTransporter"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Mail server information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"4D.SMTPTransporter"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#smtp-transporter-object"},"SMTP transporter object"))))),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.SMTPTransporter.new()")," function ","creates and returns a new object of the ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.SMTPTransporter")," type",". It is identical to the ",(0,l.kt)("a",{parentName:"p",href:"#smtp-new-transporter"},(0,l.kt)("inlineCode",{parentName:"a"},"SMTP New transporter"))," command (shortcut)."),(0,l.kt)("p",null,"For information about SMTP status codes, please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://www.usps.org/info/smtp_status.html"},"this page"),"."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' var $pw : Text\n var $options : Object\n var $transporter : 4D.SMTPTransporter\n $options:=New object\n\n $pw:=Request("Please enter your password:")\n $options.host:="smtp.gmail.com"\n\n $options.user:="test@gmail.com"\n $options.password:=$pw\n\n $transporter:=SMTP New transporter($options)\n\n $status:=$transporter.checkConnection()\n If($status.success=True)\n    ALERT("SMTP connection check successful!")\n Else\n    ALERT("Error # "+String($status.status)+", "+$status.statusText)\n End if\n')),(0,l.kt)("h2",{id:"keepalive"},".keepAlive"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".keepAlive")," : Boolean"),(0,l.kt)("h4",{id:"description-2"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".keepAlive")," property contains ",(0,l.kt)("strong",{parentName:"p"},"True")," if the SMTP connection must be kept alive until the ",(0,l.kt)("inlineCode",{parentName:"p"},"transporter")," object is destroyed",", and ",(0,l.kt)("strong",{parentName:"p"},"False")," otherwise. By default, if the ",(0,l.kt)("inlineCode",{parentName:"p"},"keepAlive")," property has not been set in the ",(0,l.kt)("inlineCode",{parentName:"p"},"server")," object (used to create the ",(0,l.kt)("inlineCode",{parentName:"p"},"transporter")," object with ",(0,l.kt)("inlineCode",{parentName:"p"},"SMTP New transporter"),"), it is ",(0,l.kt)("strong",{parentName:"p"},"True"),"."),(0,l.kt)("p",null,"The SMTP connection is automatically closed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"when the ",(0,l.kt)("inlineCode",{parentName:"li"},"transporter")," object is destroyed if the ",(0,l.kt)("inlineCode",{parentName:"li"},".keepAlive")," property is true,"),(0,l.kt)("li",{parentName:"ul"},"after each ",(0,l.kt)("inlineCode",{parentName:"li"},".send( )")," function execution if the ",(0,l.kt)("inlineCode",{parentName:"li"},".keepAlive")," property is set to false.")),(0,l.kt)("h2",{id:"send"},".send()"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Support of mime contents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".send"),"( ",(0,l.kt)("em",{parentName:"p"},"mail")," : Object ) : Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mail"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/main/es/docs/next/API/EmailObjectClass#email-object"},"Email")," to send")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"SMTP status")))),(0,l.kt)("h4",{id:"description-3"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".send()")," function ","sends the ",(0,l.kt)("a",{parentName:"p",href:"/main/es/docs/next/API/EmailObjectClass#email-object"},(0,l.kt)("em",{parentName:"a"},"mail")," object")," to the SMTP server defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"transporter")," object and returns a status object","."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"transporter")," object must have already been created using the ",(0,l.kt)("inlineCode",{parentName:"p"},"SMTP New transporter")," command.")),(0,l.kt)("p",null,"The method creates the SMTP connection if it is not already alive. If the ",(0,l.kt)("inlineCode",{parentName:"p"},".keepAlive")," property of the ",(0,l.kt)("inlineCode",{parentName:"p"},"transporter")," object is ",(0,l.kt)("strong",{parentName:"p"},"false"),", the SMTP connection is automatically closed after the execution of ",(0,l.kt)("inlineCode",{parentName:"p"},".send()"),", otherwise it stays alive until the ",(0,l.kt)("inlineCode",{parentName:"p"},"transporter")," object is destroyed. For more information, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"#smtp-new-transporter"},(0,l.kt)("inlineCode",{parentName:"a"},"SMTP New transporter"))," command description."),(0,l.kt)("p",null,"In ",(0,l.kt)("em",{parentName:"p"},"mail"),", pass a valid ",(0,l.kt)("a",{parentName:"p",href:"/main/es/docs/next/API/EmailObjectClass#email-object"},(0,l.kt)("inlineCode",{parentName:"a"},"Email")," object")," to send. The origination (where the email is coming from) and destination (one or more recipients) properties must be included, the remaining properties are optional."),(0,l.kt)("h4",{id:"returned-object"},"Returned object"),(0,l.kt)("p",null,"The function returns an object describing the SMTP status of the operation. This object can contain the following properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"True if the send is successful, False otherwise")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Status code returned by the SMTP server (0 in case of an issue unrelated to the mail processing)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusText"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Status message returned by the SMTP server")))),(0,l.kt)("p",null,"In case of an issue unrelated to the SMTP processing (e.g. a mandatory property is missing in mail), 4D generates an error that you can intercept using a method installed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"GET LAST ERROR STACK")," command for information about the error."),(0,l.kt)("p",null,"In this case, the resulting status object contains the following values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusText"),(0,l.kt)("td",{parentName:"tr",align:null},'"Failed to send email"')))))}u.isMDXComponent=!0}}]);