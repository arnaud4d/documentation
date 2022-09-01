"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56767],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"debugLogFiles",title:"Descripci\xf3n de los archivos hist\xf3ricos"},i=void 0,d={unversionedId:"Admin/debugLogFiles",id:"version-19/Admin/debugLogFiles",title:"Descripci\xf3n de los archivos hist\xf3ricos",description:"Las aplicaciones 4D pueden generar varios archivos de historial que son \xfatiles para depurar u optimizar su ejecuci\xf3n. Los historiales suelen iniciarse o detenerse utilizando selectores de los comandos SET DATABASE PARAMETER o WEB SET OPTION y se almacenan en la carpeta Logs folder del proyecto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Admin/debugLogFiles.md",sourceDirName:"Admin",slug:"/Admin/debugLogFiles",permalink:"/docs/es/19/Admin/debugLogFiles",draft:!1,tags:[],version:"19",frontMatter:{id:"debugLogFiles",title:"Descripci\xf3n de los archivos hist\xf3ricos"},sidebar:"docs",previous:{title:"Interfaz de l\xednea de comando",permalink:"/docs/es/19/Admin/cli"},next:{title:"Generalidades",permalink:"/docs/es/19/Users/overview"}},s={},p=[{value:"4DRequestsLog.txt",id:"4drequestslogtxt",level:2},{value:"Encabezados",id:"encabezados",level:4},{value:"Contenido",id:"contenido",level:4},{value:"4DRequestsLog_ProcessInfo.txt",id:"4drequestslog_processinfotxt",level:2},{value:"Encabezados",id:"encabezados-1",level:4},{value:"Contenido",id:"contenido-1",level:4},{value:"HTTPDebugLog.txt",id:"httpdebuglogtxt",level:2},{value:"4DDebugLog.txt (est\xe1ndar)",id:"4ddebuglogtxt-est\xe1ndar",level:2},{value:"4DDebugLog.txt (tabular)",id:"4ddebuglogtxt-tabular",level:2},{value:"4DDiagnosticLog.txt",id:"4ddiagnosticlogtxt",level:2},{value:"4DSMTPLog.txt, 4DPOP3Log.txt y 4DIMAPLog.txt",id:"4dsmtplogtxt-4dpop3logtxt-y-4dimaplogtxt",level:2},{value:"Contenido",id:"contenido-2",level:4},{value:"Peticiones cliente ORDA",id:"peticiones-cliente-orda",level:2}],u={toc:p};function m(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)("wrapper",r({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Las aplicaciones 4D pueden generar varios archivos de historial que son \xfatiles para depurar u optimizar su ejecuci\xf3n. Los historiales suelen iniciarse o detenerse utilizando selectores de los comandos ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page642.html"}),"SET DATABASE PARAMETER")," o ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1210.html"}),"WEB SET OPTION")," y se almacenan en la carpeta ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19/Project/architecture#logs"}),"Logs folder")," del proyecto."),(0,n.kt)("p",null,"La informaci\xf3n hist\xf3rica debe ser analizada para detectar y solucionar los problemas. Esta secci\xf3n ofrece una descripci\xf3n completa de los siguientes archivos de registro:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#4drequestslogtxt"}),"4DRequestsLog.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"l#4drequestslog_processinfotxt"}),"4DRequestsLog_ProcessInfo.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#httpdebuglogtxt"}),"HTTPDebugLog.txt")),(0,n.kt)("li",{parentName:"ul"},"4DDebugLog.txt (",(0,n.kt)("a",r({parentName:"li"},{href:"#4ddebuglogtxt-standard"}),"standard")," & ",(0,n.kt)("a",r({parentName:"li"},{href:"#4ddebuglogtxt-tabular"}),"tabular"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#4ddiagnosticlogtxt"}),"4DDiagnosticLog.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DIMAPLog.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DPOP3Log.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DSMTPLog.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#orda-client-requests"}),"Archivo de historial de peticiones ORDA clientes"))),(0,n.kt)("p",null,'Nota: cuando un archivo de historial puede generarse tanto en 4D Server como en el cliente remoto, se a\xf1ade la palabra "Server" al nombre del archivo de historial del lado del servidor, por ejemplo "4DRequestsLogServer.txt"'),(0,n.kt)("p",null,"Los archivos de historial comparten algunos campos para que pueda establecer una cronolog\xeda y hacer conexiones entre las entradas mientras depura:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sequence_number"),": este n\xfamero es \xfanico en todos los registros de depuraci\xf3n y se incrementa para cada nueva entrada cualquiera que sea el archivo de historial, para que pueda conocer la secuencia exacta de las operaciones."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"connection_uuid"),": para cada proceso 4D creado en un cliente 4D que se conecte a un servidor, este UUID de conexi\xf3n se registra tanto del lado del servidor como del cliente. Permite identificar f\xe1cilmente el cliente remoto que lanz\xf3 cada proceso.")),(0,n.kt)("h2",r({},{id:"4drequestslogtxt"}),"4DRequestsLog.txt"),(0,n.kt)("p",null,"Este archivo de historial registra las solicitudes est\xe1ndar llevadas a cabo por la m\xe1quina 4D Server o la m\xe1quina remota 4D que ejecut\xf3 el comando (excluyendo las solicitudes web)."),(0,n.kt)("p",null,"Como iniciar este historial:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"en el servidor:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(4D Server log recording;1)\n//del lado del servidor\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"en un cliente:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(Client Log Recording;1)\n//del lado remoto\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Esta instrucci\xf3n tambi\xe9n inicia el archivo de historial ",(0,n.kt)("a",r({parentName:"p"},{href:"#4drequestslog_processinfotxt"}),"4DRequestsLog_ProcessInfo.txt"),".")),(0,n.kt)("h4",r({},{id:"encabezados"}),"Encabezados"),(0,n.kt)("p",null,"Este archivo comienza con los siguientes encabezados:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log Session Identifier (Identificador de sesi\xf3n de historial)"),(0,n.kt)("li",{parentName:"ul"},"Nombre del servidor que aloja la aplicaci\xf3n"),(0,n.kt)("li",{parentName:"ul"},"Nombre de usuario: nombre de usuario en el sistema operativo que ejecut\xf3 la aplicaci\xf3n 4D en el servidor.")),(0,n.kt)("h4",r({},{id:"contenido"}),"Contenido"),(0,n.kt)("p",null,"Para cada petici\xf3n, se registran los siguientes campos:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre del campo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"sequence_number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha y hora utilizando el formato ISO 8601: 'YYYY-MM-DDTHH:MM:SS.mmm'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"systemid"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID del sistema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"component"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Firma del componente (por ejemplo, "4SQLS" o "dbmg")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"process","_","info_"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'index Corresponds to the "index" field in 4DRequestsLog_ProcessInfo.txt log, and permits linking a request to a process.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"request"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID de petici\xf3n en modo remoto cadena de mensajes para las peticiones SQL o mensajes ",(0,n.kt)("inlineCode",{parentName:"td"},"LOG EVENT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"bytes_in"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de bytes recibidos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"bytes_out"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de bytes enviados")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"server","_","duration ","|"," exec","_","duration"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Depende de d\xf3nde se genere el registro:",(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"server","_","duration")," cuando se genera en el cliente --Tiempo que tarda el servidor en procesar la petici\xf3n y devolver una respuesta en microsegundos. B a F en la imagen de abajo, O"),(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"exec","_","duration")," cuando se genera en el servidor --Tiempo en microsegundos que tarda el servidor en procesar la petici\xf3n. B a E en la imagen de abajo."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"write","_","duration"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tiempo de env\xedo en microsegundos:",(0,n.kt)("li",null,"La petici\xf3n (cuando se ejecuta en el cliente). A a B en la imagen de abajo."),(0,n.kt)("li",null,"Respuesta (cuando se ejecuta en el servidor). E a F en la imagen de abajo."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"task_kind"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Apropiativo o cooperativo (respectivamente "p" o "c")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"rtt"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tiempo estimado en microsegundos para que el cliente env\xede la solicitud y el servidor la acuse de recibo. De la A a la D y de la E a la H en la imagen de abajo.",(0,n.kt)("li",null,"S\xf3lo se mide cuando se utiliza la capa de red ServerNet, devuelve 0 cuando se utiliza con la capa de red heredada."),(0,n.kt)("li",null,"Para las versiones de Windows anteriores a Windows 10 o Windows Server 2016, la llamada devolver\xe1 0."))))),(0,n.kt)("p",null,"Flujo de solicitudes:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(12871).Z,width:"535",height:"378"})),(0,n.kt)("h2",r({},{id:"4drequestslog_processinfotxt"}),"4DRequestsLog_ProcessInfo.txt"),(0,n.kt)("p",null,"Este archivo de historial registra la informaci\xf3n de cada proceso creado en la m\xe1quina 4D Server o en la m\xe1quina remota 4D que ejecut\xf3 el comando (excluyendo las solicitudes web)."),(0,n.kt)("p",null,"Como iniciar este historial:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"en el servidor:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(4D Server log recording;1) //lado servidor\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"en un cliente:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(Client Log Recording;1) //del lado remoto\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Esta instrucci\xf3n tambi\xe9n inicia el archivo de historial ",(0,n.kt)("a",r({parentName:"p"},{href:"#4drequestslogtxt"}),"4DRequestsLog.txt"),".")),(0,n.kt)("h4",r({},{id:"encabezados-1"}),"Encabezados"),(0,n.kt)("p",null,"Este archivo comienza con los siguientes encabezados:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log Session Identifier (Identificador de sesi\xf3n de historial)"),(0,n.kt)("li",{parentName:"ul"},"Nombre del servidor que aloja la aplicaci\xf3n"),(0,n.kt)("li",{parentName:"ul"},"Nombre de usuario: nombre de usuario en el sistema operativo que ejecut\xf3 la aplicaci\xf3n 4D en el servidor.")),(0,n.kt)("h4",r({},{id:"contenido-1"}),"Contenido"),(0,n.kt)("p",null,"Para cada proceso, se registran los siguientes campos:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre del campo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"sequence_number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha y hora utilizando el formato ISO 8601: 'YYYY-MM-DDTHH:MM:SS.mmm\"")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"process","_","info","_","index"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de proceso \xfanico y secuencial")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CDB4DBaseContext"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"UUID del contexto de base del componente DB4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"systemid"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID del sistema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"server","_","process","_","id"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID del proceso en el servidor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"remote","_","process","_","id"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID del proceso en el cliente")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"process","_","name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre del proceso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"cID"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Identificador de la conexi\xf3n 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"uID"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Identificador del cliente 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"IP Client"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Direcci\xf3n IPv4/IPv6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"host_name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre de host del cliente")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"user_name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre de conexi\xf3n usuario en el cliente")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"connection","_","uuid"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Identificador UUID de proceso de conexi\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"server","_","process","_","unique","_","id"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID \xfanico del proceso en el servidor")))),(0,n.kt)("h2",r({},{id:"httpdebuglogtxt"}),"HTTPDebugLog.txt"),(0,n.kt)("p",null,"Este archivo de historial registra cada petici\xf3n HTTP y cada respuesta en modo bruto (raw). Se registran las solicitudes completas, incluidos los encabezados; opcionalmente, tambi\xe9n se pueden registrar las partes del cuerpo."),(0,n.kt)("p",null,"Como iniciar este historial:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"WEB SET OPTION(Web debug log;wdl enable without body)  \n//otros valores est\xe1n disponibles\n")),(0,n.kt)("p",null,"Los siguientes campos se registran tanto para la solicitud como para la respuesta:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre del campo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SocketID"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID del socket utilizado para la comunicaci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PeerIP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Direcci\xf3n IPv4 del host (cliente)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PeerPort"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Puerto utilizado por host (cliente)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"TimeStamp"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Timestamp en milisegundos (desde el inicio del sistema)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ConnectionID"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Conexi\xf3n UUID (UUID del VTCPSocket utilizado para la comunicaci\xf3n)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SequenceNumber"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial")))),(0,n.kt)("h2",r({},{id:"4ddebuglogtxt-est\xe1ndar"}),"4DDebugLog.txt (est\xe1ndar)"),(0,n.kt)("p",null,"Este archivo de historial registra cada evento que se produce a nivel de programaci\xf3n 4D. El modo est\xe1ndar ofrece una visi\xf3n b\xe1sica de los eventos."),(0,n.kt)("p",null,"Como iniciar este historial:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(Debug Log Recording;2)  \n//est\xe1ndar, todos los procesos\n\nSET DATABASE PARAMETER(Current process debug log recording;2)  \n//est\xe1ndar, s\xf3lo el proceso actual\n")),(0,n.kt)("p",null,"Los siguientes campos se registran para cada evento:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Columna #"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID proceso (p=xx) e ID \xfanico proceso (puid=xx)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nivel de stack")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Puede ser Nombre del comando/Nombre del m\xe9todo/Mensaje/Informaci\xf3n de inicio y parada de la tarea/Nombre, evento o callback plugin / UUID conexi\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tiempo de la operaci\xf3n de conexi\xf3n en milisegundos")))),(0,n.kt)("h2",r({},{id:"4ddebuglogtxt-tabular"}),"4DDebugLog.txt (tabular)"),(0,n.kt)("p",null,"Este archivo de historial registra cada evento que se produce a nivel de programaci\xf3n 4D en un formato compacto y con pesta\xf1as que incluye informaci\xf3n adicional (en comparaci\xf3n con el formato est\xe1ndar)."),(0,n.kt)("p",null,"Como iniciar este historial:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(Debug Log Recording;2+4)  \n//formato tabular extendido, todos los procesos\n\nSET DATABASE PARAMETER(Current process debug log recording;2+4)  \n//extendido, s\xf3lo el proceso actual\n")),(0,n.kt)("p",null,"Los siguientes campos se registran para cada evento:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Columna #"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre del campo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"sequence_number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ProcessID"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID del Proceso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"unique_processID"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID \xfanico del proceso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"stack_level"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nivel de stack")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"operation_type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tipo de operaci\xf3n hist\xf3rico. Este valor puede ser un valor absoluto:",(0,n.kt)("ol",null,(0,n.kt)("li",null,"Comando"),(0,n.kt)("li",null,"M\xe9todo (m\xe9todo de proyecto, m\xe9todo base, etc.)"),(0,n.kt)("li",null,"Mensaje (enviado por el comando ",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page667.html"}),"LOG EVENT")," \xfanicamente)"),(0,n.kt)("li",null,"PluginMessage"),(0,n.kt)("li",null,"PluginEvent"),(0,n.kt)("li",null,"PluginCommand"),(0,n.kt)("li",null,"PluginCallback"),(0,n.kt)("li",null,"Tarea"),(0,n.kt)("li",null,"M\xe9todo miembro (m\xe9todo adjunto a una colecci\xf3n o a un objeto)")),"Al cerrar un nivel de pila, las columnas ",(0,n.kt)("inlineCode",{parentName:"td"},"operation_type"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"operation")," y ",(0,n.kt)("inlineCode",{parentName:"td"},"operation_parameters")," tienen el mismo valor que el nivel de pila de apertura registrado en la columna ",(0,n.kt)("inlineCode",{parentName:"td"},"stack_opening_sequence_number"),". Por ejemplo:",(0,n.kt)("ol",null,(0,n.kt)("li",null,"121  15:16:50:777  5  8  1  2 CallMethod Parameters 0"),(0,n.kt)("li",null,"122  15:16:50:777  5  8  2  1 283  0"),(0,n.kt)("li",null,"123  15:16:50:777  5  8  2  1 283  0 122 3"),(0,n.kt)("li",null,"124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61")),"La primera y la segunda l\xednea abren el nivel de la pila, la tercera y la cuarta lo cierran. Los valores de las columnas 6, 7 y 8 se repiten en la l\xednea del nivel de pila de cierre. La columna 10 contiene los n\xfameros de secuencia de apertura del nivel de pila, es decir, 122 para la tercera l\xednea y 121 para la cuarta.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"operation"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Puede representar (seg\xfan el tipo de operaci\xf3n):",(0,n.kt)("li",null,"un ID de comando de lenguaje (cuando tipo=1)"),(0,n.kt)("li",null,"un nombre de m\xe9todo (cuando tipo=2)"),(0,n.kt)("li",null,"una combinaci\xf3n de pluginIndex;pluginCommand (cuando tipo=4, 5, 6 o 7). Puede contener algo como '3;2'"),(0,n.kt)("li",null,"una UUID task connection (cuando tipo = 8)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"8"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"operation_parameters"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe1metros pasados a comandos, m\xe9todos o plugins")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"9"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"form_event"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Evento formulario si lo hay; vac\xedo en otros casos (supongamos que la columna se utiliza cuando se ejecuta el c\xf3digo en un m\xe9todo formulario o en un m\xe9todo objeto)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"stack_opening_sequence_number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xf3lo para los niveles de pila de cierre: n\xfamero de secuencia del nivel de pila de apertura correspondiente")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"stack_level_execution_time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S\xf3lo cuando se cierra el nivel de la pila: el tiempo transcurrido en microsegundos de la acci\xf3n registrada actualmente (ver la d\xe9cima columna en las l\xedneas 123 y 124 del registro anterior)")))),(0,n.kt)("h2",r({},{id:"4ddiagnosticlogtxt"}),"4DDiagnosticLog.txt"),(0,n.kt)("p",null,"Este archivo de historial registra muchos eventos relacionados con el funcionamiento interno de la aplicaci\xf3n y es legible para las personas. Puede incluir informaci\xf3n personalizada en este archivo utilizando el comando ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page667.html"}),"LOG EVENT"),"."),(0,n.kt)("p",null,"Como iniciar este historial:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," SET DATABASE PARAMETER(Diagnostic log recording;1) //iniciar registro\n")),(0,n.kt)("p",null,"Los siguientes campos se registran para cada evento:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre del campo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"sequenceNumber"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"timestamp"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"loggerID"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Opcional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"componentSignature"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Opcional - firma del componente interno")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"messageLevel"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Informaci\xf3n, avisos, errores")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Descripci\xf3n de la entrada del historial")))),(0,n.kt)("p",null,"Dependiendo del evento, se pueden incluir otros campos en el registro, como la tarea, socket, etc."),(0,n.kt)("h2",r({},{id:"4dsmtplogtxt-4dpop3logtxt-y-4dimaplogtxt"}),"4DSMTPLog.txt, 4DPOP3Log.txt y 4DIMAPLog.txt"),(0,n.kt)("p",null,"Estos archivos de registro registran cada intercambio entre la aplicaci\xf3n 4D y el servidor de correo (SMTP, POP3, IMAP) que ha sido iniciado por los siguientes comandos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SMTP - ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/19/API/SMTPTransporterClass#smtp-new-transporter"}),"SMTP New transporter")),(0,n.kt)("li",{parentName:"ul"},"POP3 - ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/19/API/POP3TransporterClass#pop3-new-transporter"}),"POP3 New transporter")),(0,n.kt)("li",{parentName:"ul"},"IMAP  - ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/19/API/IMAPTransporterClass#imap-new-transporter"}),"IMAP New transporter"))),(0,n.kt)("p",null,"Los archivos de historial pueden producirse en dos versiones:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"una versi\xf3n normal:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"archivos llamados 4DSMTPLog.txt, 4DPOP3Log.txt, o 4DIMAPLog.txt"),(0,n.kt)("li",{parentName:"ul"},"sin adjuntos"),(0,n.kt)("li",{parentName:"ul"},"utiliza un reciclaje autom\xe1tico de archivos circulares cada 10 MB"),(0,n.kt)("li",{parentName:"ul"},"destinado a la depuraci\xf3n habitual")),(0,n.kt)("p",{parentName:"li"},"Para iniciar este historial:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET DATABASE PARAMETER(SMTP Log;1) //start SMTP log \nSET DATABASE PARAMETER(POP3 Log;1) //start POP3 log \nSET DATABASE PARAMETER(IMAP Log;1) //start IMAP log\n")),(0,n.kt)("p",{parentName:"li"},"4D Server: clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Iniciar los historiales de peticiones y de depuraci\xf3n")," en la p\xe1gina ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv18R5/4D/18-R5/Maintenance-Page.300-5149308.en.html"}),"Mantenimiento")," ode la ventana de administraci\xf3n de 4D Server."),(0,n.kt)("p",{parentName:"li"},"  Esta ruta al historial es devuelta por el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Get 4D file"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"una versi\xf3n extendida:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"attachment(s) included no automatic recycling"),(0,n.kt)("li",{parentName:"ul"},"nombre personalizado"),(0,n.kt)("li",{parentName:"ul"},"reservado con fines espec\xedficos")),(0,n.kt)("p",{parentName:"li"},"Para iniciar este historial:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$server:=New object\n...\n//SMTP\n$server.logFile:="MySMTPAuthLog.txt"\n$transporter:=SMTP New transporter($server)\n\n// POP3\n$server.logFile:="MyPOP3AuthLog.txt"\n$transporter:=POP3 New transporter($server)\n\n//IMAP\n$server.logFile:="MyIMAPAuthLog.txt"\n$transporter:=IMAP New transporter($server)\n')))),(0,n.kt)("h4",r({},{id:"contenido-2"}),"Contenido"),(0,n.kt)("p",null,"Para cada petici\xf3n, se registran los siguientes campos:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Columna #"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha y hora en el formato RFC3339 (yyyy-mm-ddThh:mm:ss.ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID Proceso 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID \xfanico del proceso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Informaci\xf3n de inicio de sesi\xf3n SMTP, POP3 o IMAP, incluyendo el nombre del servidor, el n\xfamero de puerto TCP utilizado para conectarse al servidor SMTP, POP3 o IMAP y el estado de TLS, o"),(0,n.kt)("li",null,'datos intercambiados entre el servidor y el cliente, empezando por "S <" (datos recibidos del servidor SMTP,POP3 o IMAP) o "C >" (datos enviados por el cliente SMTP,POP3 o IMAP): lista de modos de autenticaci\xf3n enviada por el servidor y modo de autenticaci\xf3n seleccionado, cualquier error notificado por el servidor SMTP,POP3 o IMAP, informaci\xf3n del encabezado del correo enviado (s\xf3lo versi\xf3n est\xe1ndar) y si el correo se guarda en el servidor, o'),(0,n.kt)("li",null,"Informaci\xf3n de cierre de sesi\xf3n SMTP, POP3 o IMAP.")))))),(0,n.kt)("h2",r({},{id:"peticiones-cliente-orda"}),"Peticiones cliente ORDA"),(0,n.kt)("p",null,"Este diario registra cada petici\xf3n de ORDA enviada desde una m\xe1quina remota. Puede dirigir la informaci\xf3n de registro a la memoria o a un archivo en el disco. El nombre y la ubicaci\xf3n de este archivo de registro son de su elecci\xf3n."),(0,n.kt)("p",null,"Como iniciar este historial:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'//a ejecutar en una m\xe1quina remota\nds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  \n//tambi\xe9n puede enviarse a la memoria\n')),(0,n.kt)("p",null,"Si desea utilizar el n\xfamero de secuencia \xfanico en el registro de peticiones de ORDA, debe activarlo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'//a ejecutar en una m\xe1quina remota\n\nSET DATABASE PARAMETER(Client Log Recording;1)  \n//para activar el n\xfamero de secuencia del historial\n\nds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  \n//tambi\xe9n puede enviarse a la memoria\n\nSET DATABASE PARAMETER(Client Log Recording;0)  \n//desactiva el n\xfamero de secuencia\n')),(0,n.kt)("p",null,"Los siguientes campos se registran para cada petici\xf3n:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre del campo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Ejemplo"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"sequenceNumber"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"104")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"url"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"URL de la petici\xf3n ORDA efectuada por el cliente"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"rest/Persons(30001)"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"startTime"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha y hora de inicio en formato ISO 8601"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"2019-05-28T08:25:12.346Z"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"endTime"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha y hora final en formato ISO 8601"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"2019-05-28T08:25:12.371Z"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"duration"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Duraci\xf3n del procesamiento cliente (ms)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"response"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto respuesta del servidor"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'{"status":200,"body":{"__entityModel":"Persons",',"[","...]")))))}m.isMDXComponent=!0},12871:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/logRequestFlow-4d1667b5e86f1ae2bb483f71b5ee3414.PNG"}}]);