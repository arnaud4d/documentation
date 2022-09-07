"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5859],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>c});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),c=r,b=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return t?n.createElement(b,l(l({ref:a},p),{},{components:t})):n.createElement(b,l({ref:a},p))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68774:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});t(67294);var n=t(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const l={id:"httpRequests",title:"Procesamiento de peticiones HTTP"},i=void 0,s={unversionedId:"WebServer/httpRequests",id:"version-19-R6/WebServer/httpRequests",title:"Procesamiento de peticiones HTTP",description:"El servidor web de 4D ofrece varias funcionalidades para gestionar las peticiones HTTP:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/WebServer/httpRequests.md",sourceDirName:"WebServer",slug:"/WebServer/httpRequests",permalink:"/documentation/es/docs/WebServer/httpRequests",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"httpRequests",title:"Procesamiento de peticiones HTTP"},sidebar:"docs",previous:{title:"P\xe1ginas de plantillas",permalink:"/documentation/es/docs/WebServer/templates"},next:{title:"Permitir m\xe9todos proyecto",permalink:"/documentation/es/docs/WebServer/allowProject"}},d={},p=[{value:"On Web Connection",id:"on-web-connection",level:2},{value:"Llamadas a m\xe9todos base",id:"llamadas-a-m\xe9todos-base",level:3},{value:"Sintaxis",id:"sintaxis",level:3},{value:"$1 - Datos adicionales de la URL",id:"1---datos-adicionales-de-la-url",level:3},{value:"$2 - Encabezado y cuerpo de la petici\xf3n HTTP",id:"2---encabezado-y-cuerpo-de-la-petici\xf3n-http",level:3},{value:"$3 - Direcci\xf3n IP del cliente web",id:"3---direcci\xf3n-ip-del-cliente-web",level:3},{value:"$4 - Direcci\xf3n IP del servidor",id:"4---direcci\xf3n-ip-del-servidor",level:3},{value:"$5 y $6 - Nombre de usuario y contrase\xf1a",id:"5-y-6---nombre-de-usuario-y-contrase\xf1a",level:3},{value:"/4DACTION",id:"4daction",level:2},{value:"Ejemplo",id:"ejemplo",level:4},{value:"4DACCI\xd3N para publicar formularios",id:"4dacci\xf3n-para-publicar-formularios",level:3},{value:"Ejemplo",id:"ejemplo-1",level:4},{value:"Obtener valores de las peticiones HTTP",id:"obtener-valores-de-las-peticiones-http",level:2},{value:"Otros comandos del servidor web",id:"otros-comandos-del-servidor-web",level:2},{value:"M\xe9todo proyecto COMPILER_WEB",id:"m\xe9todo-proyecto-compiler_web",level:2}],m={toc:p};function u(e){var{components:a}=e,l=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"El servidor web de 4D ofrece varias funcionalidades para gestionar las peticiones HTTP:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"el m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Connection"),", un enrutador para su aplicaci\xf3n web,"),(0,n.kt)("li",{parentName:"ul"},"la URL ",(0,n.kt)("inlineCode",{parentName:"li"},"/4DACTION")," para llamar al c\xf3digo del lado del servidor"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET VARIABLES")," para obtener valores de los objetos HTML enviados al servidor"),(0,n.kt)("li",{parentName:"ul"},"otros comandos como ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP BODY"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP HEADER"),", o ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET BODY PART")," permiten personalizar el tratamiento de las solicitudes, incluidas las cookies."),(0,n.kt)("li",{parentName:"ul"},"el m\xe9todo proyecto ",(0,n.kt)("em",{parentName:"li"},"COMPILER_WEB"),", para declarar sus variables.")),(0,n.kt)("h2",r({},{id:"on-web-connection"}),"On Web Connection"),(0,n.kt)("p",null,"El m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection")," puede utilizarse como punto de entrada al servidor web de 4D."),(0,n.kt)("h3",r({},{id:"llamadas-a-m\xe9todos-base"}),"Llamadas a m\xe9todos base"),(0,n.kt)("p",null,"El m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection")," se llama autom\xe1ticamente cuando el servidor recibe cualquier URL que no sea una ruta a una p\xe1gina existente en el servidor. Se llama al m\xe9todo de la base de datos con la URL."),(0,n.kt)("p",null,'Por ejemplo, la URL "',(0,n.kt)("em",{parentName:"p"},"a/b/c"),'" llamar\xe1 al m\xe9todo base, pero "',(0,n.kt)("em",{parentName:"p"},"a/b/c.html"),'" no llamar\xe1 al m\xe9todo base si la p\xe1gina "c.html" existe en la subcarpeta "a/b" del ',(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/WebServer/webServerConfig#root-folder"}),"WebFolder"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"La petici\xf3n debe haber sido aceptada previamente por el m\xe9todo base ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/WebServer/authentication#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," (si existe) y el servidor web debe ser lanzado.")),(0,n.kt)("h3",r({},{id:"sintaxis"}),"Sintaxis"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On Web Connection"),"( ",(0,n.kt)("em",{parentName:"p"},"$1")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$2")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$3")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$4")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$5")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$6")," : Text )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Encabezados HTTP + cuerpo HTTP (hasta un l\xedmite de 32 kb)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Direcci\xf3n IP del cliente web (navegador)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Direcci\xf3n IP del servidor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre de usuario")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Contrase\xf1a")))),(0,n.kt)("p",null,"Debe declarar estos par\xe1metros de la siguiente manera:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//M\xe9todo base On Web Connection\n\n C_TEXT($1;$2;$3;$4;$5;$6)\n\n//C\xf3digo para el m\xe9todod\n")),(0,n.kt)("p",null,"Como alternativa, puede utilizar la sintaxis ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/Concepts/parameters#named-parameters"}),"par\xe1metros nombrados"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"// M\xe9todo base On Web Connection\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text)\n\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Llamar a un comando 4D que muestra un elemento de interfaz (",(0,n.kt)("inlineCode",{parentName:"p"},"DIALOG"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ALERT"),", etc.) no est\xe1 permitido y termina el procesamiento del m\xe9todo.")),(0,n.kt)("h3",r({},{id:"1---datos-adicionales-de-la-url"}),"$1 - Datos adicionales de la URL"),(0,n.kt)("p",null,"El primer par\xe1metro ($1) es la URL introducida por los usuarios en el \xe1rea de direcciones de su navegador web, sin la direcci\xf3n local."),(0,n.kt)("p",null,"Utilicemos como ejemplo una conexi\xf3n de intranet. Supongamos que la direcci\xf3n IP de su m\xe1quina 4D Web Server es 123.4.567.89. La siguiente tabla muestra los valores de $1 en funci\xf3n de la URL introducida en el navegador web:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"URL introducida en el navegador web"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor del par\xe1metro $1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.4.567.89"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"http://123.4.567.89"}),"http://123.4.567.89")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.4.567.89/Customers"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Customers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"http://123.4.567.89/Customers/Add"}),"http://123.4.567.89/Customers/Add")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Customers/Add")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.4.567.89/Do_This/If_OK/Do_That"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Do_This/If_OK/Do_That")))),(0,n.kt)("p",null,'Tenga en cuenta que es libre de utilizar este par\xe1metro a su conveniencia. 4D simplemente ignora el valor pasado m\xe1s all\xe1 de la parte del host de la URL. Por ejemplo, puede establecer una convenci\xf3n en la que el valor "',(0,n.kt)("em",{parentName:"p"},"/Customers/Add"),'" significa "ir directamente a a\xf1adir un nuevo registro en la tabla ',(0,n.kt)("inlineCode",{parentName:"p"},"[Customers]"),".\u201d Al proporcionar a los usuarios de la web una lista de posibles valores y/o marcadores por defecto, puede dar accesos directos a diferentes partes de su aplicaci\xf3n. De este modo, los usuarios de la web pueden acceder r\xe1pidamente a los recursos de su sitio web sin tener que recorrer toda la ruta de navegaci\xf3n cada vez que realicen una nueva conexi\xf3n."),(0,n.kt)("h3",r({},{id:"2---encabezado-y-cuerpo-de-la-petici\xf3n-http"}),"$2 - Encabezado y cuerpo de la petici\xf3n HTTP"),(0,n.kt)("p",null,"El segundo par\xe1metro ($2) es el encabezado y el cuerpo de la petici\xf3n HTTP enviada por el navegador web. Tenga en cuenta que esta informaci\xf3n se pasa a su m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection"),' "tal cual". Su contenido variar\xe1 en funci\xf3n de la naturaleza del navegador web que intenta la conexi\xf3n.'),(0,n.kt)("p",null,"Si su aplicaci\xf3n utiliza esta informaci\xf3n, deber\xe1 analizar el encabezado y el cuerpo. Puede utilizar los comandos ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET HTTP HEADER")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET HTTP BODY"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Por razones de rendimiento, el tama\xf1o de los datos que pasan por el par\xe1metro $2 no debe superar los 32 KB. M\xe1s all\xe1 de este tama\xf1o, son truncados por el servidor HTTP de 4D.")),(0,n.kt)("h3",r({},{id:"3---direcci\xf3n-ip-del-cliente-web"}),"$3 - Direcci\xf3n IP del cliente web"),(0,n.kt)("p",null,"El par\xe1metro $3 recibe la direcci\xf3n IP de la m\xe1quina del navegador. Esta informaci\xf3n puede permitirle distinguir entre las conexiones a la intranet y a Internet."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"4D devuelve las direcciones IPv4 en un formato h\xedbrido IPv6/IPv4 escrito con un prefijo de 96 bits, por ejemplo ::ffff:192.168.2.34 para la direcci\xf3n IPv4 192.168.2.34. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/WebServer/webServerConfig#about-ipv6-support"}),"Soporte IPv6"),".")),(0,n.kt)("h3",r({},{id:"4---direcci\xf3n-ip-del-servidor"}),"$4 - Direcci\xf3n IP del servidor"),(0,n.kt)("p",null,"El par\xe1metro $4 recibe la direcci\xf3n IP solicitada por el servidor web 4D. 4D permite el multi-homing, que permite utilizar m\xe1quinas con m\xe1s de una direcci\xf3n IP. Para m\xe1s informaci\xf3n, consulte la ",(0,n.kt)("a",r({parentName:"p"},{href:"webServerConfig.html#ip-address-to-listen"}),"p\xe1gina Configuraci\xf3n"),"."),(0,n.kt)("h3",r({},{id:"5-y-6---nombre-de-usuario-y-contrase\xf1a"}),"$5 y $6 - Nombre de usuario y contrase\xf1a"),(0,n.kt)("p",null,"Los par\xe1metros $5 y $6 reciben el nombre de usuario y la contrase\xf1a introducidos por el usuario en el cuadro de di\xe1logo de identificaci\xf3n est\xe1ndar que muestra el navegador, si procede (ver la p\xe1gina ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/WebServer/authentication"}),"autenticaci\xf3n"),")."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si el nombre de usuario enviado por el navegador existe en 4D, el par\xe1metro $6 (la contrase\xf1a del usuario) no se devuelve por razones de seguridad.")),(0,n.kt)("h2",r({},{id:"4daction"}),"/4DACTION"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"/4DACTION/")),"MethodName",(0,n.kt)("strong",{parentName:"p"},"*",(0,n.kt)("br",null)," "),"/4DACTION/",(0,n.kt)("strong",{parentName:"p"},"**"),"MethodName/Param*"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MethodName"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre del m\xe9todo de proyecto 4D a ejecutar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Param"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe1metro texto a pasar al m\xe9todo proyecto")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Uso:")," URL o acci\xf3n del formulario."),(0,n.kt)("p",null,"Esta URL permite llamar al m\xe9todo proyecto 4D ",(0,n.kt)("em",{parentName:"p"},"MethodName")," con un par\xe1metro texto opcional ",(0,n.kt)("em",{parentName:"p"},"Param"),". El m\xe9todo recibir\xe1 este par\xe1metro en ",(0,n.kt)("em",{parentName:"p"},"$1"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"El m\xe9todo proyecto 4D debe haber sido ",(0,n.kt)("a",r({parentName:"li"},{href:"/documentation/es/docs/WebServer/allowProject"}),"permitido para peticiones web"),': el valor del atributo "Disponible a trav\xe9s de etiquetas y URLs 4D (4DACTION...)" debe haber sido marcado en las propiedades del m\xe9todo. Si no se comprueba el atributo, se rechaza la solicitud web.'),(0,n.kt)("li",{parentName:"ul"},"Cuando 4D recibes una petici\xf3n ",(0,n.kt)("inlineCode",{parentName:"li"},"/4DACTION/MethodName/Param"),", se llama el m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," (si existe).")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"4DACTION/")," puede asociarse a una URL en una p\xe1gina web est\xe1tica:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<A HREF="/4DACTION/MyMethod/hello">Do Something</A>\n')),(0,n.kt)("p",null,"El m\xe9todo proyecto ",(0,n.kt)("inlineCode",{parentName:"p"},"MyMethod"),' debe devolver generalmente una "respuesta" (env\xedo de una p\xe1gina HTML utilizando ',(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND FILE")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND TEXT"),", etc.). Aseg\xfarese de que el tratamiento sea lo m\xe1s breve posible para no bloquear el navegador."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Un m\xe9todo llamado por ",(0,n.kt)("inlineCode",{parentName:"p"},"/4DACTION")," no debe llamar a elementos de la interfaz (",(0,n.kt)("inlineCode",{parentName:"p"},"DIALOG"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ALERT"),", etc.).")),(0,n.kt)("h4",r({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"Este ejemplo describe la asociaci\xf3n de la URL ",(0,n.kt)("inlineCode",{parentName:"p"},"/4DACTION")," con un objeto imagen HTML para mostrar din\xe1micamente una imagen en la p\xe1gina. Inserta las siguientes instrucciones en una p\xe1gina HTML est\xe1tica:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<IMG SRC="/4DACTION/getPhoto/smith">\n')),(0,n.kt)("p",null,"El m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"getPhoto")," es el siguiente:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_TEXT($1) // Este par\xe1metro debe declararse siempre\nvar $path : Text\nvar $PictVar : Picture\nvar $BlobVar : Blob\n\n //busca la imagen en la carpeta Im\xe1genes dentro de la carpeta Resources \n$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd"\n\nREAD PICTURE FILE($path;$PictVar) //pone la imagen en la variable imagen\nPICTURE TO BLOB($PictVar;$BLOB;".png") //convierte la imagen en formato ".png". WEB SEND BLOB($BLOB;"image/png")\n')),(0,n.kt)("h3",r({},{id:"4dacci\xf3n-para-publicar-formularios"}),"4DACCI\xd3N para publicar formularios"),(0,n.kt)("p",null,'El servidor web de 4D tambi\xe9n le permite utilizar formularios "publicados", que son p\xe1ginas HTML est\xe1ticas que env\xedan datos al servidor web y recuperar f\xe1cilmente todos los valores. Se les debe asociar el tipo POST y la acci\xf3n del formulario debe empezar imperativamente por /4DACTION/MethodName.'),(0,n.kt)("p",null,"Un formulario puede ser enviado a trav\xe9s de dos m\xe9todos (ambos pueden ser utilizados con 4D):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"POST, normalmente utilizado para enviar datos al servidor web,"),(0,n.kt)("li",{parentName:"ul"},"GET, normalmente utilizado para solicitar datos del servidor web.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Cuando el servidor web recibe un formulario publicado, llama al m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," (si existe).")),(0,n.kt)("p",null,"En el m\xe9todo llamado, debe llamar al comando ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," para ",(0,n.kt)("a",r({parentName:"p"},{href:"#getting-values-from-the-requests"}),"recuperar los nombres y valores")," de todos los campos incluidos en una p\xe1gina HTML enviada al servidor."),(0,n.kt)("p",null,"Ejemplo para definir la acci\xf3n de un formulario:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<FORM ACTION="/4DACTION/MethodName" METHOD=POST>\n')),(0,n.kt)("h4",r({},{id:"ejemplo-1"}),"Ejemplo"),(0,n.kt)("p",null,'En una aplicaci\xf3n web, nos gustar\xeda que los navegadores pudieran buscar entre los registros mediante una p\xe1gina HTML est\xe1tica. Esta p\xe1gina se llama "search.htm". La aplicaci\xf3n contiene otras p\xe1ginas est\xe1ticas que permiten, por ejemplo, mostrar el resultado de la b\xfasqueda ("results.htm"). Se ha asociado el tipo POST a la p\xe1gina, as\xed como la acci\xf3n ',(0,n.kt)("inlineCode",{parentName:"p"},"/4DACTION/SEARCH"),"."),(0,n.kt)("p",null,"Aqu\xed est\xe1 el c\xf3digo HTML que corresponde a esta p\xe1gina:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<form action="/4daction/processForm" method=POST>\n<input type=text name=vName value=""><br/>\n<input type=checkbox name=vExact value="Word">Whole word<br/>\n<input type=submit name=OK value="Search">\n</FORM>\n')),(0,n.kt)("p",null,'Durante la entrada de datos, escriba "ABCD" en el \xe1rea de entrada de datos, marque la opci\xf3n "Whole word" y val\xeddela haciendo clic en el bot\xf3n ',(0,n.kt)("strong",{parentName:"p"},"Search"),". En la solicitud enviada al servidor web:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'vName="ABCD"\nvExact="Word"\nOK="Search"\n')),(0,n.kt)("p",null,"4D llama al m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"<On Web Authentication>")," (si existe), luego se llama al m\xe9todo proyecto ",(0,n.kt)("inlineCode",{parentName:"p"},"processForm"),", que es el siguiente:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' C_TEXT($1) //obligatorio para el modo compilado\n C_LONGINT($vName)\n C_TEXT(vName;vLIST)\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrVals;0)\n WEB GET VARIABLES($arrNames;$arrVals) //recuperamos todas las variables del formulario\n $vName:=Find in array($arrNames;"vName")\n vName:=$arrVals{$vName}\n If(Find in array($arrNames;"vExact")=-1) //Si la opci\xf3n no ha sido marcada\n    vName:=vName+"@"\n End if\n QUERY([Jockeys];[Jockeys]Name=vName)\n FIRST RECORD([Jockeys])\n While(Not(End selection([Jockeys])))\n    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"\n    NEXT RECORD([Jockeys])\n End while\n WEB SEND FILE("results.htm") //Enviar la lista al formulario results.htm\n  //que contiene una referencia a la variable vLIST,\n  //por ejemplo \x3c!--4DHTML vLIST--\x3e\n  //...\nEnd if\n')),(0,n.kt)("h2",r({},{id:"obtener-valores-de-las-peticiones-http"}),"Obtener valores de las peticiones HTTP"),(0,n.kt)("p",null,"El servidor web de 4D le permite recuperar datos enviados a trav\xe9s de peticiones POST o GET, utilizando formularios web o URLs."),(0,n.kt)("p",null,"Cuando el servidor web recibe una petici\xf3n con datos en el encabezado o en la URL, 4D puede recuperar los valores de cualquier objeto HTML que contenga. Este principio puede implementarse en el caso de un formulario web, enviado por ejemplo utilizando ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND FILE")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND BLOB"),", en el que el usuario introduce o modifica valores y luego hace clic en el bot\xf3n de validaci\xf3n."),(0,n.kt)("p",null,"En este caso, 4D puede recuperar los valores de los objetos HTML encontrados en la petici\xf3n utilizando el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES"),". El comando ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," recupera los valores como texto."),(0,n.kt)("p",null,"Considere el siguiente c\xf3digo fuente de la p\xe1gina HTML:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<html>\n<head>\n  <title>Welcome</title>\n  <script language="JavaScript">\x3c!--\nfunction GetBrowserInformation(formObj){\nformObj.vtNav_appName.value = navigator.appName\nformObj.vtNav_appVersion.value = navigator.appVersion\nformObj.vtNav_appCodeName.value = navigator.appCodeName\nformObj.vtNav_userAgent.value = navigator.userAgent\nreturn true\n}\nfunction LogOn(formObj){\nif(formObj.vtUserName.value!=""){\nreturn true\n} else {\nalert("Enter your name, then try again.")\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p> \n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> \n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p> \n<input name="vtNav_appName" value="" type="hidden"> \n<input name="vtNav_appVersion" value="" type="hidden"> \n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p> \n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> \n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p> \n<input name="vtNav_appName" value="" type="hidden"> \n<input name="vtNav_appVersion" value="" type="hidden"> \n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\n')),(0,n.kt)("p",null,"Cuando 4D env\xeda la p\xe1gina a un navegador web, tiene el siguiente aspecto:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(36422).Z,width:"446",height:"156"})),(0,n.kt)("p",null,"Las principales caracter\xedsticas de esta p\xe1gina son:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Incluye tres botones ",(0,n.kt)("strong",{parentName:"li"},"Submit"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"vsbLogOn"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"vsbRegister")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"vsbInformation"),"."),(0,n.kt)("li",{parentName:"ul"},"Cuando se hace clic en ",(0,n.kt)("strong",{parentName:"li"},"Log On"),", el env\xedo del formulario se procesa primero por la funci\xf3n de JavaScript ",(0,n.kt)("inlineCode",{parentName:"li"},"LogOn"),". Si no se introduce ning\xfan nombre, el formulario ni siquiera se env\xeda a 4D, y se muestra una alerta de JavaScript."),(0,n.kt)("li",{parentName:"ul"},"El formulario tiene un m\xe9todo POST 4D as\xed como un script Submit (",(0,n.kt)("em",{parentName:"li"},"GetBrowserInformation"),") que copia las propiedades del navegador a los cuatro objetos ocultos cuyos nombres empiezan por ",(0,n.kt)("em",{parentName:"li"},"vtNav_App"),". Tambi\xe9n incluye el objeto ",(0,n.kt)("inlineCode",{parentName:"li"},"vtUserName"),".")),(0,n.kt)("p",null,"Examinemos el m\xe9todo 4D ",(0,n.kt)("inlineCode",{parentName:"p"},"WWW_STD_FORM_POST")," que se llama cuando el usuario hace clic en uno de los botones del formulario HTML."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  // Recuperaci\xf3n del valor de las variables\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrValues;0)\n WEB GET VARIABLES($arrNames;$arrValues)\n C_TEXT($user)\n\n Case of\n\n  // Se ha presionado el bot\xf3n Log On\n    :(Find in array($arrNames;"vsbLogOn")#-1)\n       $user :=Find in array($arrNames;"vtUserName")\n       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})\n       $0:=(Records in selection([WWW Users])>0)\n       If($0)\n          WWW POST EVENT("Log On";WWW Log information)\n  // El m\xe9todo WWW POST EVENT guarda la informaci\xf3n en una tabla de la base\n       Else\n\n          $0:=WWW Register\n  // El m\xe9todo WWW Register permite que un nuevo usuario de la Web se registre\n       End if\n\n  // Se ha presionado el bot\xf3n Register\n    :(Find in array($arrNames;"vsbRegister")#-1)\n       $0:=WWW Register\n\n  // Se ha presionado el bot\xf3n de informaci\xf3n\n    :(Find in array($arrNames;"vsbInformation")#-1)\n       WEB SEND FILE("userinfos.html")\n End case\n')),(0,n.kt)("p",null,"Las funcionalidades de este m\xe9todo son:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Los valores de las variables ",(0,n.kt)("em",{parentName:"li"},"vtNav_appName"),", ",(0,n.kt)("em",{parentName:"li"},"vtNav_appVersion"),", ",(0,n.kt)("em",{parentName:"li"},"vtNav_appCodeName"),", y ",(0,n.kt)("em",{parentName:"li"},"vtNav_userAgent")," (vinculadas a los objetos HTML que tienen los mismos nombres) se recuperan utilizando el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET VARIABLES")," a partir de los objetos HTML creados por el script JavaScript ",(0,n.kt)("em",{parentName:"li"},"GetBrowserInformation"),"."),(0,n.kt)("li",{parentName:"ul"},"De las variables vinculadas ",(0,n.kt)("em",{parentName:"li"},"vsbLogOn"),", ",(0,n.kt)("em",{parentName:"li"},"vsbRegister")," y ",(0,n.kt)("em",{parentName:"li"},"vsbInformation")," a los tres botones de env\xedo, s\xf3lo la correspondiente al bot\xf3n que se ha presionado ser\xe1 recuperada por el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET VARIABLES"),". Cuando el env\xedo se realiza mediante uno de estos botones, el navegador devuelve a 4D el valor del bot\xf3n presionado. Esto le indica qu\xe9 bot\xf3n se ha presionado.")),(0,n.kt)("p",null,"Tenga en cuenta que con HTML, todos los objetos son objetos de texto. Si se utiliza un objeto SELECT, es el valor del elemento resaltado en el objeto el que se devuelve en el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES"),", y no la posici\xf3n del elemento en el array como en 4D. ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," siempre devuelve valores de tipo Texto."),(0,n.kt)("h2",r({},{id:"otros-comandos-del-servidor-web"}),"Otros comandos del servidor web"),(0,n.kt)("p",null,"El servidor web de 4D ofrece varios comandos web de bajo nivel que le permiten desarrollar un procesamiento personalizado de las solicitudes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP BODY")," devuelve el cuerpo como texto sin procesar, permitiendo cualquier an\xe1lisis que pueda necesitar"),(0,n.kt)("li",{parentName:"ul"},"el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP HEADER")," devuelve los encabezados de la petici\xf3n. Es \xfatil para manejar cookies personalizadas, por ejemplo (junto con el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB SET HTTP HEADER"),")."),(0,n.kt)("li",{parentName:"ul"},"los comandos ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET BODY PART")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB Get body part count")," para analizar la parte del cuerpo de una petici\xf3n de varias partes y recuperar los valores de texto, pero tambi\xe9n los archivos publicados, utilizando BLOBs.")),(0,n.kt)("p",null,"Estos comandos se resumen en el siguiente gr\xe1fico:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(38171).Z,width:"676",height:"374"})),(0,n.kt)("p",null,'El servidor web de 4D ahora soporta archivos cargados con codificaci\xf3n chunked desde cualquier cliente web. La codificaci\xf3n de transferencia en trozos es un mecanismo de transferencia de datos especificado en HTTP/1.1. Permite transferir datos en una serie de "trozos" (partes) sin conocer el tama\xf1o final de los datos. El servidor web de 4D tambi\xe9n soporta la codificaci\xf3n de transferencia en trozos desde el servidor a los clientes web (utilizando ',(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND RAW DATA"),")."),(0,n.kt)("h2",r({},{id:"m\xe9todo-proyecto-compiler_web"}),"M\xe9todo proyecto COMPILER_WEB"),(0,n.kt)("p",null,"El m\xe9todo COMPILER\\WEB, si existe, es llamado sistem\xe1ticamente cuando el servidor HTTP recibe una petici\xf3n din\xe1mica y llama al motor 4D. Este es el caso, por ejemplo, cuando el servidor web de 4D recibe un formulario publicado o una URL para procesar en ",(0,n.kt)("a",r({parentName:"p"},{href:"#on-web-connection"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Connection")),". Este m\xe9todo est\xe1 destinado a contener directivas de digitaci\xf3n y/o inicializaci\xf3n de variables utilizadas durante los intercambios web. Es utilizado por el compilador cuando se compila la aplicaci\xf3n. El m\xe9todo COMPILER\\WEB es com\xfan a todos los formularios web. Por defecto, el m\xe9todo COMPILER_WEB no existe. Debe crearlo expl\xedcitamente."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tambi\xe9n se llama al m\xe9todo proyecto COMPILER_WEB, si existe, para cada solicitud SOAP aceptada.")))}u.isMDXComponent=!0},38171:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/httpCommands-f0f40e81d3278591838e7c262365beb9.png"},36422:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/spiders-0e4915c8e3496e1dd10f0b15a4319274.png"}}]);