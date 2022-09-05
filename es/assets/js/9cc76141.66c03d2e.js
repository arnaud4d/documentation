"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74977],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73469:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={id:"Transporter",title:"Clase Transporter"},o=void 0,p={unversionedId:"API/Transporter",id:"API/Transporter",title:"Clase Transporter",description:"Descripci\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/API/Transporter.md",sourceDirName:"API",slug:"/API/Transporter",permalink:"/docs/es/next/API/Transporter",draft:!1,tags:[],version:"current",frontMatter:{id:"Transporter",title:"Clase Transporter"}},d={},u=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:".acceptUnsecureConnection",id:"acceptunsecureconnection",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".authenticationMode",id:"authenticationmode",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".authenticationMode",id:"authenticationmode-1",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".authenticationMode",id:"authenticationmode-2",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".bodyCharset",id:"bodycharset",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:".connectionTimeOut",id:"connectiontimeout",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4},{value:".headerCharset",id:"headercharset",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-7",level:4},{value:".host",id:"host",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-8",level:4},{value:".logFile",id:"logfile",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-9",level:4},{value:".port",id:"port",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-10",level:4},{value:".sendTimeOut",id:"sendtimeout",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-11",level:4},{value:".user",id:"user",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-12",level:4},{value:".checkConnection()",id:"checkconnection",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-13",level:4},{value:"Objeto devuelto",id:"objeto-devuelto",level:4}],s={toc:u};function m(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("h2",r({},{id:"acceptunsecureconnection"}),".acceptUnsecureConnection"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".acceptUnsecureConnection"),": Boolean"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-1"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".acceptUnsecureConnection")," property contains ",(0,n.kt)("strong",{parentName:"p"},"True")," if 4D is allowed to establish an unencrypted connection when encrypted connection is not possible."),(0,n.kt)("p",null,"Contiene ",(0,n.kt)("strong",{parentName:"p"},"False")," si no se permiten las conexiones no cifradas, en cuyo caso se devuelve un error cuando no es posible la conexi\xf3n cifrada."),(0,n.kt)("p",null,"Los puertos seguros disponibles son:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SMTP"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"465: SMTPS"),(0,n.kt)("li",{parentName:"ul"},"587 o 25: SMTP con actualizaci\xf3n STARTTLS si lo soporta el servidor."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"IMAP"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"143: Puerto IMAP no encriptado"),(0,n.kt)("li",{parentName:"ul"},"993: IMAP con actualizaci\xf3n STARTTLS si lo soporta el servidor"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"POP3"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"110: Puerto POP3 no encriptado"),(0,n.kt)("li",{parentName:"ul"},"995: POP3 con actualizaci\xf3n STARTTLS si lo soporta el servidor.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"authenticationmode"}),".authenticationMode"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".authenticationMode"),": Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-2"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".authenticationMode")," property contains the authentication mode used to open the session on the mail server."),(0,n.kt)("p",null,"Por defecto, se utiliza el modo m\xe1s seguro soportado por el servidor."),(0,n.kt)("p",null,"Los valores posibles son:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constantes"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comentario"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CRAM-MD5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"IMAP authentication CRAM MD5")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo CRAM-MD5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LOGIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"IMAP authentication login")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo LOGIN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OAUTH2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"IMAP authentication OAUTH2")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo OAuth2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PLAIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"IMAP authentication plain")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo PLAIN")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"authenticationmode-1"}),".authenticationMode"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".authenticationMode"),": Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-3"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".authenticationMode")," contiene el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo."),(0,n.kt)("p",null,"Por defecto, se utiliza el modo m\xe1s seguro soportado por el servidor."),(0,n.kt)("p",null,"Los valores posibles son:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constantes"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comentario"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"APOP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"POP3 authentication APOP")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Authentication using APOP protocol (POP3 only)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CRAM-MD5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"POP3 authentication CRAM-MD5")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo CRAM-MD5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LOGIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"POP3 authentication login")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo LOGIN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OAUTH2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"POP3 authentication OAUTH2")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo OAuth2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PLAIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"POP3 authentication plain")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo PLAIN")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"authenticationmode-2"}),".authenticationMode"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".authenticationMode"),": Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-4"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".authenticationMode")," contiene el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo."),(0,n.kt)("p",null,"Por defecto, se utiliza el modo m\xe1s seguro soportado por el servidor."),(0,n.kt)("p",null,"Los valores posibles son:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constantes"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comentario"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CRAM-MD5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"SMTP authentication CRAM MD5")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo CRAM-MD5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LOGIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"SMTP authentication login")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo LOGIN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OAUTH2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"SMTP authentication OAUTH2")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo OAuth2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PLAIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"SMTP authentication plain")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autenticaci\xf3n utilizando el protocolo PLAIN")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"bodycharset"}),".bodyCharset"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Soporte de UTF8 base64")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".bodyCharset")," : Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-5"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".bodyCharset")," property contains   the charset and encoding used for the body part of the email."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"asunto,"),(0,n.kt)("li",{parentName:"ul"},"attachment filename(s),"),(0,n.kt)("li",{parentName:"ul"},"email name.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Valores posibles:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constante"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comentario"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode ISO2022JP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_ISO-2022-JP_UTF8_QP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"headerCharset"),": US-ASCII si es posible, japon\xe9s (ISO-2022-JP) & Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable"),(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode ISO88591"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ISO-8859-1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"headerCharset"),": ISO-8859-1 & Quoted-printable"),(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": ISO-8859-1 & 8-bit")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode UTF8"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_UTF8_QP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"headerCharset")," & ",(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII si es posible, de lo contrario UTF-8 & Quoted-printable (",(0,n.kt)("strong",{parentName:"td"},"valor por defecto"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode UTF8 in base64"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_UTF8_B64"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"headerCharset")," & ",(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII si es posible, de lo contrario UTF-8 & base64")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"connectiontimeout"}),".connectionTimeOut"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".connectionTimeOut")," : Integer"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-6"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".connectionTimeOut")," property contains the maximum wait time (in seconds) allowed to establish a connection to the server. Por defecto, si la propiedad no se ha definido en el objeto servidor (utilizado para crear el objeto transportador con ",(0,n.kt)("inlineCode",{parentName:"p"},"SMTP New transporter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"POP3 New transporter"),", o ",(0,n.kt)("inlineCode",{parentName:"p"},"IMAP New transporter"),"), el valor es 30."),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"headercharset"}),".headerCharset"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".headerCharset")," : Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-7"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".headerCharset")," property contains  the charset and encoding used for the email header. El encabezado incluye las siguientes partes del correo electr\xf3nico:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"asunto,"),(0,n.kt)("li",{parentName:"ul"},"attachment filename(s),"),(0,n.kt)("li",{parentName:"ul"},"email name.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Valores posibles:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constante"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comentario"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode ISO2022JP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_ISO-2022-JP_UTF8_QP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"headerCharset"),": US-ASCII si es posible, japon\xe9s (ISO-2022-JP) & Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable"),(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode ISO88591"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ISO-8859-1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"headerCharset"),": ISO-8859-1 & Quoted-printable"),(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": ISO-8859-1 & 8-bit")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode UTF8"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_UTF8_QP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"headerCharset")," & ",(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII si es posible, de lo contrario UTF-8 & Quoted-printable (valor por defecto)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode UTF8 in base64"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_UTF8_B64"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"headerCharset")," & ",(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII si es posible, de lo contrario UTF-8 & base64")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"host"}),".host"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".host")," : Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-8"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".host")," property contains the name or the IP address of the host server. Se utiliza para las transacciones de correo (SMTP, POP3, IMAP)."),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"logfile"}),".logFile"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".logFile")," : Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-9"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".logFile")," property contains the path of the extended log file defined (if any) for the mail connection. Puede ser relativo (a la carpeta actual Logs) o absoluto."),(0,n.kt)("p",null,"A diferencia de los archivos de registro cl\xe1sicos (habilitados mediante el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER"),"), los archivos de registro extendidos almacenan el contenido MIME de todos los correos enviados y no tienen ning\xfan l\xedmite de tama\xf1o. Para m\xe1s informaci\xf3n sobre los archivos de registro extendidos, consulte:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conexiones SMTP")," - ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/next/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DSMTPLog.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conexiones POP3 ")," - ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/next/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DSMTPLog.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conexiones IMAP")," - ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/next/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DIMAPLog.txt"))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"port"}),".port"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".port")," : Integer"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-10"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".port")," property contains  the port number used for mail transactions. Por defecto, si la propiedad ",(0,n.kt)("em",{parentName:"p"},"port")," no se ha definido en el objeto ",(0,n.kt)("em",{parentName:"p"},"server")," (utilizado para crear el objeto transportador con ",(0,n.kt)("inlineCode",{parentName:"p"},"SMTP New transporter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"POP3 New transporter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"IMAP New transporter"),"), el puerto utilizado es:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SMTP")," - 587"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"POP3")," - 995"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IMAP")," - 993")),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"sendtimeout"}),".sendTimeOut"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".sendTimeOut")," : Integer"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-11"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".sendTimeOut")," property contains  the maximum wait time (in seconds) of a call to ",(0,n.kt)("inlineCode",{parentName:"p"},".send( )")," before a timeout occurs. ."),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"user"}),".user"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".user")," : Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-12"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".user")," property contains  the user name used for authentication on the mail server."),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"checkconnection"}),".checkConnection()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".checkConnection()")," : Object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Estado de la conexi\xf3n del objeto transportador")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-13"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".checkConnection()")," function  checks the connection using information stored in the transporter object, recreates the connection if necessary, and returns the status. Esta funci\xf3n permite verificar que los valores proporcionados por el usuario son v\xe1lidos y coherentes."),(0,n.kt)("h4",r({},{id:"objeto-devuelto"}),"Objeto devuelto"),(0,n.kt)("p",null,"La funci\xf3n env\xeda una solicitud al servidor de correo y devuelve un objeto que describe el estado del correo. Este objeto puede contener las siguientes propiedades:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propiedad"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True si la verificaci\xf3n es exitosa, False en caso contrario")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"status"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(s\xf3lo SMTP) C\xf3digo de estado devuelto por el servidor de correo (0 en caso de un problema no relacionado con el procesamiento del correo)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"statusText"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Mensaje de estado devuelto por el servidor de correo, o \xfaltimo error devuelto en la pila de errores de 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errors"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor de correo)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"["," ].errCode"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D error code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"["," ].message"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Descripci\xf3n del error 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"["," ].componentSignature"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Firma del componente interno que ha devuelto el error")))))}m.isMDXComponent=!0}}]);