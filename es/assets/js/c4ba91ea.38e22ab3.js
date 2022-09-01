"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,b=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(b,i(i({ref:t},s),{},{components:a})):r.createElement(b,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"webServerObject",title:"Objeto servidor web"},o=void 0,d={unversionedId:"WebServer/webServerObject",id:"WebServer/webServerObject",title:"Objeto servidor web",description:"Un proyecto 4D puede iniciar y monitorear un servidor web para la aplicaci\xf3n principal (host) as\xed como para cada componente alojado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/WebServer/webServerObject.md",sourceDirName:"WebServer",slug:"/WebServer/webServerObject",permalink:"/docs/es/next/WebServer/webServerObject",draft:!1,tags:[],version:"current",frontMatter:{id:"webServerObject",title:"Objeto servidor web"},sidebar:"docs",previous:{title:"Administraci\xf3n",permalink:"/docs/es/next/WebServer/webServerAdmin"},next:{title:"Comencemos",permalink:"/docs/es/next/WebServer/gettingStarted"}},p={},s=[{value:"Instanciar un objeto servidor web",id:"instanciar-un-objeto-servidor-web",level:2},{value:"Funciones del servidor web",id:"funciones-del-servidor-web",level:2},{value:"Propiedades del servidor web",id:"propiedades-del-servidor-web",level:2},{value:"Alcance de los comandos 4D Web",id:"alcance-de-los-comandos-4d-web",level:2}],c={toc:s};function u(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un proyecto 4D puede iniciar y monitorear un servidor web para la aplicaci\xf3n principal (host) as\xed como para cada componente alojado."),(0,r.kt)("p",null,"Por ejemplo, si ha instalado dos componentes en su aplicaci\xf3n principal, puede iniciar y supervisar hasta tres servidores web independientes desde su aplicaci\xf3n:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"un servidor web para la aplicaci\xf3n local,"),(0,r.kt)("li",{parentName:"ul"},"un servidor web para el componente #1,"),(0,r.kt)("li",{parentName:"ul"},"un servidor web para el componente #2.")),(0,r.kt)("p",null,"Aparte de la memoria, no hay l\xedmite en el n\xfamero de componentes y por lo tanto, de servidores web, que se pueden adjuntar a un solo proyecto de aplicaci\xf3n 4D."),(0,r.kt)("p",null,"Cada servidor web 4D, incluido el servidor web de la aplicaci\xf3n principal, se expone como un ",(0,r.kt)("strong",{parentName:"p"},"objeto")," de la clase ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.WebServer"),". Una vez instanciado, un objeto servidor web puede ser manejado desde la aplicaci\xf3n actual o desde cualquier componente utilizando un ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/next/API/WebServerClass"}),"gran n\xfamero de propiedades y funciones"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Los ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html"}),"comandos WEB")," heredados del lenguaje 4D son soportados, pero no se puede seleccionar el servidor web al que se aplican (ver m\xe1s abajo).")),(0,r.kt)("p",null,"Cada servidor web (aplicaci\xf3n local o componente) puede ser utilizado en su propio contexto independiente, incluyendo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"las llamadas a los m\xe9todos base ",(0,r.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," y ",(0,r.kt)("inlineCode",{parentName:"li"},"On Web Connection")),(0,r.kt)("li",{parentName:"ul"},"el procesamiento de las etiquetas 4D y las llamadas de m\xe9todos,"),(0,r.kt)("li",{parentName:"ul"},"sesiones web y gesti\xf3n del protocolo TLS.")),(0,r.kt)("p",null,"Esto le permite desarrollar componentes independientes y funcionalidades que vienen con sus propias interfaces web."),(0,r.kt)("h2",n({},{id:"instanciar-un-objeto-servidor-web"}),"Instanciar un objeto servidor web"),(0,r.kt)("p",null,"El objeto servidor web de la aplicaci\xf3n local (servidor web por defecto) es cargado autom\xe1ticamente por 4D en al inicio. Por lo tanto, si escribe en un proyecto reci\xe9n creado:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$nbSrv:=WEB Server list.length   \n//el valor de $nbSrv es 1\n")),(0,r.kt)("p",null,"Para instanciar un objeto servidor web, llame al comando ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/next/API/WebServerClass#web-server"}),(0,r.kt)("inlineCode",{parentName:"a"},"WEB Server")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"    //crear una variable objeto de la clase 4D.WebServer\nvar webServer : 4D.WebServer \n    //llamar al servidor web desde el contexto actual\nwebServer:=WEB Server  \n\n    //equivalente a\nwebServer:=WEB Server(Web server database)\n")),(0,r.kt)("p",null,"Si la aplicaci\xf3n utiliza componentes y quiere llamar a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"el servidor web de la aplicaci\xf3n local a partir de un componente o"),(0,r.kt)("li",{parentName:"ul"},"el servidor que ha recibido la solicitud (sin importar el servidor),")),(0,r.kt)("p",null,"tambi\xe9n se puede utilizar:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"var webServer : 4D.WebServer \n    //llamar al servidor web local desde un componente  \nwebServer:=WEB Server(Web server host database)  \n    //llamar al servidor web objetivo\nwebServer:=WEB Server(Web server receiving request)  \n")),(0,r.kt)("h2",n({},{id:"funciones-del-servidor-web"}),"Funciones del servidor web"),(0,r.kt)("p",null,"Un ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/next/API/WebServerClass#web-server-object"}),"objeto de clase Web srver")," contiene las siguientes funciones:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Funciones"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Valor devuelto"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/next/API/WebServerClass#start"}),(0,r.kt)("inlineCode",{parentName:"a"},"start()"))),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"settings (objet)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"status (objeto)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Iniciar el servidor web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/next/API/WebServerClass#start"}),(0,r.kt)("inlineCode",{parentName:"a"},"stop()"))),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"-"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"-"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Detener el servidor Web")))),(0,r.kt)("p",null,"Para iniciar y detener un servidor web, basta con llamar a las funciones ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/next/API/WebServerClass#start"}),(0,r.kt)("inlineCode",{parentName:"a"},"start()"))," y ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/next/API/WebServerClass#stop"}),(0,r.kt)("inlineCode",{parentName:"a"},"stop()"))," del objeto servidor web:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"var $status : Object\n    //para iniciar un servidor web con los par\xe1metros por defecto\n$status:=webServer.start()\n    //para iniciar el servidor web con los par\xe1metros personalizados  \n    //$settings object contains web server properties\nwebServer.start($settings)\n\n    //para detener el servidor web\n$status:=webServer.stop()\n")),(0,r.kt)("h2",n({},{id:"propiedades-del-servidor-web"}),"Propiedades del servidor web"),(0,r.kt)("p",null,"Un objeto servidor web contiene ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/next/API/WebServerClass#web-server-object"}),"varias propiedades")," que configuran el servidor web."),(0,r.kt)("p",null,"Estas propiedades son definidas:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"con la ayuda del par\xe1metro ",(0,r.kt)("inlineCode",{parentName:"li"},"settings")," de la funci\xf3n ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/next/API/WebServerClass#start"}),(0,r.kt)("inlineCode",{parentName:"a"},".start()"))," (excepto en el caso de las propiedades de s\xf3lo lectura, ver m\xe1s adelante),"),(0,r.kt)("li",{parentName:"ol"},"si no se utiliza, utilizando el comando ",(0,r.kt)("inlineCode",{parentName:"li"},"WEB SET OPTION")," (s\xf3lo aplicaciones locales),"),(0,r.kt)("li",{parentName:"ol"},"si no se utiliza, en los par\xe1metros de la aplicaci\xf3n local o del componente.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Si el servidor web no se inicia, las propiedades contienen los valores que se utilizar\xe1n en el pr\xf3ximo inicio del servidor web."),(0,r.kt)("li",{parentName:"ul"},"Si el servidor web se inicia, las propiedades contienen los valores reales utilizados por el servidor web (la configuraci\xf3n por defecto puede haber sido reemplazada por el par\xe1metro ",(0,r.kt)("inlineCode",{parentName:"li"},"settings")," de la funci\xf3n ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/next/API/WebServerClass#start"}),(0,r.kt)("inlineCode",{parentName:"a"},".start()")),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"isRunning"),", ",(0,r.kt)("em",{parentName:"p"},"name"),", ",(0,r.kt)("em",{parentName:"p"},"openSSLVersion")," y ",(0,r.kt)("em",{parentName:"p"},"perfectForwardSecrecy")," son propiedades de s\xf3lo lectura que no pueden predefinirse en el par\xe1metro del objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," para la funci\xf3n ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/next/API/WebServerClass#start"}),(0,r.kt)("inlineCode",{parentName:"a"},"start()")),".")),(0,r.kt)("h2",n({},{id:"alcance-de-los-comandos-4d-web"}),"Alcance de los comandos 4D Web"),(0,r.kt)("p",null,"El lenguaje 4D contiene ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html"}),"varios comandos")," permitiendo controlar el servido Web. Sin embargo, estos comandos est\xe1n dise\xf1ados para trabajar con un \xfanico servidor web (por defecto). Cuando utilice estos comandos en el contexto de los objetos servidor web, aseg\xfarese de que su alcance es el adecuado."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Comando"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Alcance"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"SET DATABASE PARAMETER")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Aplicaci\xf3n local del servidor web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB CLOSE SESSION")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB GET BODY PART")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB Get body part count")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB Get Current Session ID")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB GET HTTP BODY")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB GET HTTP HEADER")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB GET OPTION")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Aplicaci\xf3n local del servidor web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB Get server info")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Aplicaci\xf3n local del servidor web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB GET SESSION EXPIRATION")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB Get session process count")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB GET STATISTICS")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Aplicaci\xf3n local del servidor web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB GET VARIABLES")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB Is secured connection")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB Is server running")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Aplicaci\xf3n local del servidor web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB SEND BLOB")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB SEND FILE")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB SEND HTTP REDIRECT")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB SEND RAW DATA")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB SEND TEXT")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB SET HOME PAGE")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Aplicaci\xf3n local del servidor web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB SET HTTP HEADER")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB SET OPTION")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Aplicaci\xf3n local del servidor web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB SET ROOT FOLDER")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Aplicaci\xf3n local del servidor web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB START SERVER")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Aplicaci\xf3n local del servidor web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB STOP SERVER")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Aplicaci\xf3n local del servidor web")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WEB Validate digest")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor web que ha recibido la petici\xf3n")))))}u.isMDXComponent=!0}}]);