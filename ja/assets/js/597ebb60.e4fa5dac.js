"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90956],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=d(n),k=r,N=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},48719:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"Transporter",title:"Transporter Class"},p=void 0,d={unversionedId:"API/Transporter",id:"version-19-R6/API/Transporter",title:"Transporter Class",description:"Description",source:"@site/versioned_docs/version-19-R6/API/Transporter.md",sourceDirName:"API",slug:"/API/Transporter",permalink:"/docs/ja/docs/API/Transporter",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"Transporter",title:"Transporter Class"}},u={},m=[{value:"Description",id:"description",level:2},{value:".acceptUnsecureConnection",id:"acceptunsecureconnection",level:2},{value:"Description",id:"description-1",level:4},{value:".authenticationMode",id:"authenticationmode",level:2},{value:"Description",id:"description-2",level:4},{value:".authenticationMode",id:"authenticationmode-1",level:2},{value:"Description",id:"description-3",level:4},{value:".authenticationMode",id:"authenticationmode-2",level:2},{value:"Description",id:"description-4",level:4},{value:".bodyCharset",id:"bodycharset",level:2},{value:"Description",id:"description-5",level:4},{value:".connectionTimeOut",id:"connectiontimeout",level:2},{value:"Description",id:"description-6",level:4},{value:".headerCharset",id:"headercharset",level:2},{value:"Description",id:"description-7",level:4},{value:".host",id:"host",level:2},{value:"Description",id:"description-8",level:4},{value:".logFile",id:"logfile",level:2},{value:"Description",id:"description-9",level:4},{value:".port",id:"port",level:2},{value:"Description",id:"description-10",level:4},{value:".sendTimeOut",id:"sendtimeout",level:2},{value:"Description",id:"description-11",level:4},{value:".user",id:"user",level:2},{value:"Description",id:"description-12",level:4},{value:".checkConnection()",id:"checkconnection",level:2},{value:"Description",id:"description-13",level:4},{value:"Returned object",id:"returned-object",level:4}],s={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("h2",{id:"acceptunsecureconnection"},".acceptUnsecureConnection"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".acceptUnsecureConnection")," : Boolean"),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".acceptUnsecureConnection")," property contains ",(0,l.kt)("strong",{parentName:"p"},"True")," if 4D is allowed to establish an unencrypted connection"," when encrypted connection is not possible."),(0,l.kt)("p",null,"It contains ",(0,l.kt)("strong",{parentName:"p"},"False")," if unencrypted connections are unallowed, in which case an error in returned when encrypted connection is not possible."),(0,l.kt)("p",null,"Available secured ports are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SMTP"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"465: SMTPS"),(0,l.kt)("li",{parentName:"ul"},"587 or 25: SMTP with STARTTLS upgrade if supported by the server."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"IMAP"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"143: IMAP non-encrypted port"),(0,l.kt)("li",{parentName:"ul"},"993: IMAP with STARTTLS upgrade if supported by the server"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"POP3"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"110: POP3 non-encrypted port"),(0,l.kt)("li",{parentName:"ul"},"995: POP3 with STARTTLS upgrade if supported by the server.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"authenticationmode"},".authenticationMode"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".authenticationMode")," : Text"),(0,l.kt)("h4",{id:"description-2"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".authenticationMode")," property contains ","the authentication mode used to open the session on the mail server","."),(0,l.kt)("p",null,"By default, the most secured mode supported by the server is used."),(0,l.kt)("p",null,"Possible values are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Constants"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CRAM-MD5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IMAP authentication CRAM MD5")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using CRAM-MD5 protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOGIN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IMAP authentication login")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using LOGIN protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OAUTH2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IMAP authentication OAUTH2")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using OAuth2 protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PLAIN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IMAP authentication plain")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using PLAIN protocol")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"authenticationmode-1"},".authenticationMode"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".authenticationMode")," : Text"),(0,l.kt)("h4",{id:"description-3"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".authenticationMode")," property contains the authentication mode used to open the session on the mail server."),(0,l.kt)("p",null,"By default, the most secured mode supported by the server is used."),(0,l.kt)("p",null,"Possible values are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Constants"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"APOP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"POP3 authentication APOP")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using APOP protocol (POP3 only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CRAM-MD5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"POP3 authentication CRAM-MD5")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using CRAM-MD5 protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOGIN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"POP3 authentication login")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using LOGIN protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OAUTH2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"POP3 authentication OAUTH2")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using OAuth2 protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PLAIN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"POP3 authentication plain")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using PLAIN protocol")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"authenticationmode-2"},".authenticationMode"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".authenticationMode")," : Text"),(0,l.kt)("h4",{id:"description-4"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".authenticationMode")," property contains the authentication mode used to open the session on the mail server."),(0,l.kt)("p",null,"By default, the most secured mode supported by the server is used."),(0,l.kt)("p",null,"Possible values are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Constants"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CRAM-MD5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SMTP authentication CRAM MD5")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using CRAM-MD5 protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOGIN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SMTP authentication login")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using LOGIN protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OAUTH2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SMTP authentication OAUTH2")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using OAuth2 protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PLAIN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SMTP authentication plain")),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication using PLAIN protocol")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"bodycharset"},".bodyCharset"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v18"),(0,l.kt)("td",{parentName:"tr",align:null},"Support for UTF8 base64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".bodyCharset")," : Text"),(0,l.kt)("h4",{id:"description-5"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".bodyCharset")," property contains ","  the charset and encoding used for the body part of the email","."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"subject,"),(0,l.kt)("li",{parentName:"ul"},"attachment filename(s),"),(0,l.kt)("li",{parentName:"ul"},"email name.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constant"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mail mode ISO2022JP"),(0,l.kt)("td",{parentName:"tr",align:null},"US-ASCII_ISO-2022-JP_UTF8_QP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("em",{parentName:"td"},"headerCharset"),": US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable"),(0,l.kt)("li",null,(0,l.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mail mode ISO88591"),(0,l.kt)("td",{parentName:"tr",align:null},"ISO-8859-1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("em",{parentName:"td"},"headerCharset"),": ISO-8859-1 & Quoted-printable"),(0,l.kt)("li",null,(0,l.kt)("em",{parentName:"td"},"bodyCharset"),": ISO-8859-1 & 8-bit")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mail mode UTF8"),(0,l.kt)("td",{parentName:"tr",align:null},"US-ASCII_UTF8_QP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"headerCharset")," & ",(0,l.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII if possible, otherwise UTF-8 & Quoted-printable (",(0,l.kt)("strong",{parentName:"td"},"default value"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mail mode UTF8 in base64"),(0,l.kt)("td",{parentName:"tr",align:null},"US-ASCII_UTF8_B64"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"headerCharset")," & ",(0,l.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII if possible, otherwise UTF-8 & base64")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"connectiontimeout"},".connectionTimeOut"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".connectionTimeOut")," : Integer"),(0,l.kt)("h4",{id:"description-6"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".connectionTimeOut")," property contains ","the maximum wait time (in seconds) allowed to establish a connection to the server",". By default, if the property has not been set in the server object (used to create the transporter object with ",(0,l.kt)("inlineCode",{parentName:"p"},"SMTP New transporter"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"POP3 New transporter"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"IMAP New transporter"),"), the value is 30."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"headercharset"},".headerCharset"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".headerCharset")," : Text"),(0,l.kt)("h4",{id:"description-7"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".headerCharset")," property contains "," the charset and encoding used for the email header",". The header includes the following parts of the email:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"subject,"),(0,l.kt)("li",{parentName:"ul"},"attachment filename(s),"),(0,l.kt)("li",{parentName:"ul"},"email name.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constant"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mail mode ISO2022JP"),(0,l.kt)("td",{parentName:"tr",align:null},"US-ASCII_ISO-2022-JP_UTF8_QP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("em",{parentName:"td"},"headerCharset"),": US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable"),(0,l.kt)("li",null,(0,l.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mail mode ISO88591"),(0,l.kt)("td",{parentName:"tr",align:null},"ISO-8859-1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("em",{parentName:"td"},"headerCharset"),": ISO-8859-1 & Quoted-printable"),(0,l.kt)("li",null,(0,l.kt)("em",{parentName:"td"},"bodyCharset"),": ISO-8859-1 & 8-bit")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mail mode UTF8"),(0,l.kt)("td",{parentName:"tr",align:null},"US-ASCII_UTF8_QP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"headerCharset")," & ",(0,l.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII if possible, otherwise UTF-8 & Quoted-printable (default value)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mail mode UTF8 in base64"),(0,l.kt)("td",{parentName:"tr",align:null},"US-ASCII_UTF8_B64"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"headerCharset")," & ",(0,l.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII if possible, otherwise UTF-8 & base64")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"host"},".host"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".host")," : Text"),(0,l.kt)("h4",{id:"description-8"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".host")," property contains ","the name or the IP address of the host server",". Used for mail transactions (SMTP, POP3, IMAP)."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"logfile"},".logFile"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".logFile")," : Text"),(0,l.kt)("h4",{id:"description-9"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".logFile")," property contains ","the path of the extended log file defined (if any) for the mail connection",". It can be relative (to the current Logs folder) or absolute."),(0,l.kt)("p",null,"Unlike regular log files (enabled via the ",(0,l.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER")," command), extended log files store MIME contents of all sent mails and do not have any size limit. For more information about extended log files, refer to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SMTP connections")," - ",(0,l.kt)("a",{parentName:"li",href:"Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"},"4DSMTPLog.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"POP3 connections")," - ",(0,l.kt)("a",{parentName:"li",href:"Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"},"4DPOP3Log.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"IMAP connections")," - ",(0,l.kt)("a",{parentName:"li",href:"Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"},"4DIMAPLog.txt"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"port"},".port"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".port")," : Integer"),(0,l.kt)("h4",{id:"description-10"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".port")," property contains "," the port number used for mail transactions",". By default, if the ",(0,l.kt)("em",{parentName:"p"},"port")," property has not been set in the ",(0,l.kt)("em",{parentName:"p"},"server")," object (used to create the transporter object with ",(0,l.kt)("inlineCode",{parentName:"p"},"SMTP New transporter"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"POP3 New transporter"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"IMAP New transporter"),"), the port used is:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SMTP")," - 587"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"POP3")," - 995"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"IMAP")," - 993")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sendtimeout"},".sendTimeOut"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".sendTimeOut")," : Integer"),(0,l.kt)("h4",{id:"description-11"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".sendTimeOut")," property contains "," the maximum wait time (in seconds) of a call to ",(0,l.kt)("inlineCode",{parentName:"p"},".send( )")," before a timeout occurs",". By default, if the ",(0,l.kt)("inlineCode",{parentName:"p"},".sendTimeOut")," property has not been set in the ",(0,l.kt)("inlineCode",{parentName:"p"},"server")," object, the value 100 is used."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"user"},".user"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".user")," : Text"),(0,l.kt)("h4",{id:"description-12"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".user")," property contains "," the user name used for authentication on the mail server","."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"checkconnection"},".checkConnection()"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".checkConnection()")," : Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Status of the transporter object connection")))),(0,l.kt)("h4",{id:"description-13"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".checkConnection()")," function "," checks the connection using information stored in the transporter object",", recreates the connection if necessary, and returns the status. This function allows you to verify that the values provided by the user are valid and consistent."),(0,l.kt)("h4",{id:"returned-object"},"Returned object"),(0,l.kt)("p",null,"The function sends a request to the mail server and returns an object describing the mail status. This object can contain the following properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"True if the check is successful, False otherwise")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"(SMTP only) Status code returned by the mail server (0 in case of an issue unrelated to the mail processing)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusText"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Status message returned by the mail server, or last error returned in the 4D error stack")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errors"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"collection"),(0,l.kt)("td",{parentName:"tr",align:null},"4D error stack (not returned if a mail server response is received)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"["," ].errCode"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"4D error code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"["," ].message"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the 4D error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"["," ].componentSignature"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Signature of the internal component which returned the error")))))}k.isMDXComponent=!0}}]);