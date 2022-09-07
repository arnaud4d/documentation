"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57261],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,A=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return t?n.createElement(A,i(i({ref:a},u),{},{components:t})):n.createElement(A,i({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},27848:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});t(67294);var n=t(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i={id:"authentication",title:"Autenticaci\xf3n"},l=void 0,s={unversionedId:"WebServer/authentication",id:"version-19/WebServer/authentication",title:"Autenticaci\xf3n",description:"La autentificaci\xf3n de los usuarios es necesaria cuando se desea ofrecer derechos de acceso espec\xedficos a los usuarios Web. La autenticaci\xf3n designa el modo en que se recoge y procesa la informaci\xf3n relativa a las credenciales del usuario (normalmente nombre y contrase\xf1a).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/WebServer/authentication.md",sourceDirName:"WebServer",slug:"/WebServer/authentication",permalink:"/documentation/es/docs/19/WebServer/authentication",draft:!1,tags:[],version:"19",frontMatter:{id:"authentication",title:"Autenticaci\xf3n"},sidebar:"docs",previous:{title:"P\xe1ginas de error HTTP personalizadas",permalink:"/documentation/es/docs/19/WebServer/errorPages"},next:{title:"Sesiones usuario",permalink:"/documentation/es/docs/19/WebServer/sessions"}},d={},u=[{value:"Modos de autenticaci\xf3n",id:"modos-de-autenticaci\xf3n",level:2},{value:"Generalidades",id:"generalidades",level:3},{value:"Personalizado (por defecto)",id:"personalizado-por-defecto",level:3},{value:"Protocolo Basic",id:"protocolo-basic",level:3},{value:"Protocolo DIGEST",id:"protocolo-digest",level:3},{value:"On Web Authentication",id:"on-web-authentication",level:2},{value:"Llamadas a m\xe9todos base",id:"llamadas-a-m\xe9todos-base",level:3},{value:"Sintaxis",id:"sintaxis",level:3},{value:"$1 - URL",id:"1---url",level:4},{value:"$2 - Encabezado y cuerpo de la petici\xf3n HTTP",id:"2---encabezado-y-cuerpo-de-la-petici\xf3n-http",level:4},{value:"$3 - Direcci\xf3n IP del cliente web",id:"3---direcci\xf3n-ip-del-cliente-web",level:4},{value:"$4 - Direcci\xf3n IP del servidor",id:"4---direcci\xf3n-ip-del-servidor",level:4},{value:"$5 y $6 - Nombre de usuario y contrase\xf1a",id:"5-y-6---nombre-de-usuario-y-contrase\xf1a",level:4},{value:"Par\xe1metro $0",id:"par\xe1metro-0",level:4},{value:"Ejemplo",id:"ejemplo",level:3}],c={toc:u};function p(e){var{components:a}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",r({},c,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"La autentificaci\xf3n de los usuarios es necesaria cuando se desea ofrecer derechos de acceso espec\xedficos a los usuarios Web. La autenticaci\xf3n designa el modo en que se recoge y procesa la informaci\xf3n relativa a las credenciales del usuario (normalmente nombre y contrase\xf1a)."),(0,n.kt)("h2",r({},{id:"modos-de-autenticaci\xf3n"}),"Modos de autenticaci\xf3n"),(0,n.kt)("p",null,"El servidor web 4D ofrece tres modos de autenticaci\xf3n, que puede seleccionar en la p\xe1gina ",(0,n.kt)("strong",{parentName:"p"},"Web"),"/",(0,n.kt)("strong",{parentName:"p"},"Opciones (I)")," de la ventana Propiedades:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(31821).Z,width:"790",height:"176"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Se recomienda utilizar una autenticaci\xf3n ",(0,n.kt)("strong",{parentName:"p"},"personalizada"),".")),(0,n.kt)("h3",r({},{id:"generalidades"}),"Generalidades"),(0,n.kt)("p",null,"El funcionamiento del sistema de acceso del servidor web 4D se resume en el siguiente diagrama:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(53594).Z,width:"680",height:"498"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Las peticiones que comienzan por ",(0,n.kt)("inlineCode",{parentName:"p"},"rest/")," son gestionadas directamente por el ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/REST/configuration"}),"servidor REST"),".")),(0,n.kt)("h3",r({},{id:"personalizado-por-defecto"}),"Personalizado (por defecto)"),(0,n.kt)("p",null,"B\xe1sicamente, en este modo, depende del desarrollador definir c\xf3mo autenticar a los usuarios. 4D s\xf3lo eval\xfaa las peticiones HTTP ",(0,n.kt)("a",r({parentName:"p"},{href:"#method-calls"}),"que requieren una autenticaci\xf3n"),"."),(0,n.kt)("p",null,"Este modo de autenticaci\xf3n es el m\xe1s flexible porque permite:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"o bien, delegar la autenticaci\xf3n del usuario a una aplicaci\xf3n de terceros (por ejemplo, una red social, SSO);"),(0,n.kt)("li",{parentName:"ul"},"o bien, ofrecer una interfaz al usuario (por ejemplo, un formulario web) para que pueda crear su cuenta en su base de datos clientes; luego, puede autenticar a los usuarios con cualquier algoritmo personalizado (ver ",(0,n.kt)("a",r({parentName:"li"},{href:"/documentation/es/docs/19/WebServer/sessions#example"}),"este ejemplo"),' del cap\xedtulo "Sesiones Usuario"). Lo importante es que nunca guarde la contrase\xf1a en claro, utilizando ese c\xf3digo:')),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//... creaci\xf3n de cuenta de usuario\nds.webUser.password:=Generate password hash($password)  \nds.webUser.save()\n")),(0,n.kt)("p",null,"Ver tambi\xe9n ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/WebServer/gettingStarted#authenticating-users"}),"este ejemplo"),' del cap\xedtulo "C\xf3mo comenzar".'),(0,n.kt)("p",null,"Si no se facilita una autenticaci\xf3n personalizada, 4D llama al m\xe9todo de base de datos ",(0,n.kt)("a",r({parentName:"p"},{href:"#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," (si existe). Adem\xe1s de $1 y $2, s\xf3lo se facilitan las direcciones IP del navegador y del servidor ($3 y $4), el nombre de usuario y la contrase\xf1a ($5 y $6) est\xe1n vac\xedos. El m\xe9todo debe devolver ",(0,n.kt)("strong",{parentName:"p"},"True")," en $0 si el usuario se autentifica con \xe9xito, entonces se sirve el recurso solicitado, o ",(0,n.kt)("strong",{parentName:"p"},"False")," en $0 si la autenticaci\xf3n fall\xf3."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Atenci\xf3n"),": si el m\xe9todo de base de datos ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," no existe, las conexiones se aceptan autom\xe1ticamente (modo de prueba).")),(0,n.kt)("h3",r({},{id:"protocolo-basic"}),"Protocolo Basic"),(0,n.kt)("p",null,"Cuando un usuario se conecta al servidor, aparece una caja de di\xe1logo est\xe1ndar en su navegador para que introduzca su nombre de usuario y contrase\xf1a."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El nombre y la contrase\xf1a introducidos por el usuario se env\xedan sin cifrar en el encabezado de la petici\xf3n HTTP. Este modo suele requerir HTTPS para ofrecer confidencialidad.")),(0,n.kt)("p",null,"A continuaci\xf3n, se eval\xfaan los valores introducidos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Si la opci\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Incluir contrase\xf1as de 4D")," est\xe1 marcada, las credenciales de los usuarios se evaluar\xe1n primero contra la ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/Users/overview"}),"tabla interna de usuarios 4D"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Si el nombre de usuario enviado por el navegador existe en la tabla de usuarios 4D y la contrase\xf1a es correcta, se acepta la conexi\xf3n. Si la contrase\xf1a es incorrecta, se rechaza la conexi\xf3n."),(0,n.kt)("li",{parentName:"ul"},"Si el nombre de usuario no existe en la tabla de usuarios 4D, se llama al m\xe9todo base ",(0,n.kt)("a",r({parentName:"li"},{href:"#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication")),". Si el m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," no existe, se rechazan las conexiones."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Si la opci\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Incluir las contrase\xf1as de 4D")," no est\xe1 marcada, las credenciales de usuario se env\xedan al m\xe9todo base ",(0,n.kt)("a",r({parentName:"p"},{href:"#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," junto con los dem\xe1s par\xe1metros de conexi\xf3n (direcci\xf3n y puerto IP, URL...) para que pueda procesarlas. Si el m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," no existe, se rechazan las conexiones."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Con el servidor Web del cliente 4D, tenga en cuenta que todos los sitios publicados por las m\xe1quinas 4D Client compartir\xe1n la misma tabla de usuarios. La validaci\xf3n de los usuarios/contrase\xf1as la realiza la aplicaci\xf3n 4D Server.")))),(0,n.kt)("h3",r({},{id:"protocolo-digest"}),"Protocolo DIGEST"),(0,n.kt)("p",null,"Este modo ofrece un mayor nivel de seguridad, ya que la informaci\xf3n de autenticaci\xf3n se procesa mediante un proceso unidireccional llamado hashing que hace que su contenido sea imposible de descifrar."),(0,n.kt)("p",null,"Al igual que en el modo BASIC, los usuarios deben introducir su nombre y contrase\xf1a al conectarse. A continuaci\xf3n, se llama al m\xe9todo base ",(0,n.kt)("a",r({parentName:"p"},{href:"#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication")),". Cuando se activa el modo DIGEST, el par\xe1metro $6 (contrase\xf1a) se devuelve siempre vac\xedo. De hecho, cuando se utiliza este modo, esta informaci\xf3n no pasa por la red como texto claro (sin encriptar). Por lo tanto, en este caso es imprescindible evaluar las solicitudes de conexi\xf3n mediante el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB Validate digest"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Debe reiniciar el servidor web para que se tengan en cuenta los cambios realizados en estos par\xe1metros.")),(0,n.kt)("h2",r({},{id:"on-web-authentication"}),"On Web Authentication"),(0,n.kt)("p",null,"El m\xe9todo de base de datos ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," se encarga de gestionar el acceso al motor del servidor web. Es llamado por 4D o 4D Server cuando se recibe una petici\xf3n HTTP din\xe1mica."),(0,n.kt)("h3",r({},{id:"llamadas-a-m\xe9todos-base"}),"Llamadas a m\xe9todos base"),(0,n.kt)("p",null,"El m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," se llama autom\xe1ticamente cuando una solicitud o procesamiento requiere la ejecuci\xf3n de alg\xfan c\xf3digo 4D (excepto para las llamadas REST). Tambi\xe9n se llama cuando el servidor web recibe una URL est\xe1tica no v\xe1lida (por ejemplo, si la p\xe1gina est\xe1tica solicitada no existe)."),(0,n.kt)("p",null,"Por tanto, se llama al m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cuando el servidor web recibe una URL que solicita un recurso que no existe"),(0,n.kt)("li",{parentName:"ul"},"cuando el servidor web recibe una URL que empieza por ",(0,n.kt)("inlineCode",{parentName:"li"},"4DACTION/"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"4DCGI/"),"..."),(0,n.kt)("li",{parentName:"ul"},"cuando el servidor web recibe una URL de acceso a la ra\xedz y no se ha definido ninguna p\xe1gina de inicio en la Configuraci\xf3n o mediante el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB SET HOME PAGE")),(0,n.kt)("li",{parentName:"ul"},"cuando el servidor web procesa una etiqueta que ejecuta c\xf3digo (por ejemplo, ",(0,n.kt)("inlineCode",{parentName:"li"},"4DSCRIPT"),") en una p\xe1gina semidin\xe1mica.")),(0,n.kt)("p",null,"Por tanto, NO se llama al m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cuando el servidor web recibe una URL que solicita una p\xe1gina est\xe1tica v\xe1lida."),(0,n.kt)("li",{parentName:"ul"},"cuando el servidor web recibe una URL que empieza por ",(0,n.kt)("inlineCode",{parentName:"li"},"rest/")," y se lanza el servidor REST (en este caso, la autenticaci\xf3n se gestiona a trav\xe9s del m\xe9todo base ",(0,n.kt)("a",r({parentName:"li"},{href:"/documentation/es/docs/19/REST/configuration#using-the-on-rest-authentication-database-method"}),(0,n.kt)("inlineCode",{parentName:"a"},"On REST Authentication"))," o las ",(0,n.kt)("a",r({parentName:"li"},{href:"/documentation/es/docs/19/REST/configuration#using-the-structure-settings"}),"Propiedades de la base"),").")),(0,n.kt)("h3",r({},{id:"sintaxis"}),"Sintaxis"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On Web Authentication"),"( ",(0,n.kt)("em",{parentName:"p"},"$1")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$2")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$3")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$4")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$5")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$6")," : Text ) -> $0 : Boolean"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Encabezados HTTP + cuerpo HTTP (hasta un l\xedmite de 32 kb)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Direcci\xf3n IP del cliente web (navegador)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Direcci\xf3n IP del servidor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre de usuario")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Contrase\xf1a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$0"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True = solicitud aceptada, False = solicitud rechazada")))),(0,n.kt)("p",null,"Debe declarar estos par\xe1metros de la siguiente manera:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//M\xe9todo base On Web Authentication \n\n C_TEXT($1;$2;$3;$4;$5;$6)\n C_BOOLEAN($0)\n\n//C\xf3digo para el m\xe9todo\n")),(0,n.kt)("p",null,"Como alternativa, puede utilizar la sintaxis ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/Concepts/parameters#named-parameters"}),"par\xe1metros nombrados"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"// M\xe9todo base On Web Authentication\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text) \\\n  -> $RequestAccepted : Boolean\n\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Todos los par\xe1metros del m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," no est\xe1n necesariamente rellenados. La informaci\xf3n recibida por el m\xe9todo base depende del ",(0,n.kt)("a",r({parentName:"p"},{href:"#authentication-mode"}),"modo de autenticaci\xf3n")," seleccionado).")),(0,n.kt)("h4",r({},{id:"1---url"}),"$1 - URL"),(0,n.kt)("p",null,"El primer par\xe1metro (",(0,n.kt)("inlineCode",{parentName:"p"},"$1"),") es la URL recibida por el servidor, de la que se ha eliminado la direcci\xf3n del host."),(0,n.kt)("p",null,"Tomemos el ejemplo de una conexi\xf3n a la Intranet. Supongamos que la direcci\xf3n IP de su m\xe1quina 4D Web Server es 123.45.67.89. La siguiente tabla muestra los valores de $1 en funci\xf3n de la URL introducida en el navegador web:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"URL introducida en el navegador web"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor del par\xe1metro $1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.45.67.89"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"http://123.45.67.89"}),"http://123.45.67.89")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.45.67.89/Customers"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Customers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"http://123.45.67.89/Customers/Add"}),"http://123.45.67.89/Customers/Add")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Customers/Add")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.45.67.89/Do_This/If_OK/Do_That"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Do_This/If_OK/Do_That")))),(0,n.kt)("h4",r({},{id:"2---encabezado-y-cuerpo-de-la-petici\xf3n-http"}),"$2 - Encabezado y cuerpo de la petici\xf3n HTTP"),(0,n.kt)("p",null,"El segundo par\xe1metro (",(0,n.kt)("inlineCode",{parentName:"p"},"$2"),") es el encabezado y el cuerpo de la petici\xf3n HTTP enviada por el navegador web. Tenga en cuenta que esta informaci\xf3n se pasa a su m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," tal cual. Su contenido variar\xe1 en funci\xf3n de la naturaleza del navegador web que intenta la conexi\xf3n."),(0,n.kt)("p",null,"Si su aplicaci\xf3n utiliza esta informaci\xf3n, deber\xe1 analizar el encabezado y el cuerpo. Puede utilizar los comandos ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET HTTP HEADER")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET HTTP BODY"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Por razones de rendimiento, el tama\xf1o de los datos que pasan por el par\xe1metro $2 no debe superar los 32 KB. M\xe1s all\xe1 de este tama\xf1o, son truncados por el servidor HTTP de 4D.")),(0,n.kt)("h4",r({},{id:"3---direcci\xf3n-ip-del-cliente-web"}),"$3 - Direcci\xf3n IP del cliente web"),(0,n.kt)("p",null,"El par\xe1metro ",(0,n.kt)("inlineCode",{parentName:"p"},"$3")," recibe la direcci\xf3n IP de la m\xe1quina del navegador. Esta informaci\xf3n puede permitirle distinguir entre las conexiones a la intranet y a Internet."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"4D devuelve las direcciones IPv4 en un formato h\xedbrido IPv6/IPv4 escrito con un prefijo de 96 bits, por ejemplo ::ffff:192.168.2.34 para la direcci\xf3n IPv4 192.168.2.34. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/WebServer/webServerConfig#about-ipv6-support"}),"Soporte IPv6"),".")),(0,n.kt)("h4",r({},{id:"4---direcci\xf3n-ip-del-servidor"}),"$4 - Direcci\xf3n IP del servidor"),(0,n.kt)("p",null,"El par\xe1metro ",(0,n.kt)("inlineCode",{parentName:"p"},"$4")," recibe la direcci\xf3n IP utilizada para llamar al servidor web. 4D permite el multi-homing, que permite explotar m\xe1quinas con m\xe1s de una direcci\xf3n IP. Para m\xe1s informaci\xf3n, consulte la ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/WebServer/webServerConfig#ip-address-to-listen"}),"p\xe1gina Configuraci\xf3n"),"."),(0,n.kt)("h4",r({},{id:"5-y-6---nombre-de-usuario-y-contrase\xf1a"}),"$5 y $6 - Nombre de usuario y contrase\xf1a"),(0,n.kt)("p",null,"Los par\xe1metros ",(0,n.kt)("inlineCode",{parentName:"p"},"$5")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"$6")," reciben el nombre de usuario y la contrase\xf1a introducidos por el usuario en la caja de di\xe1logo de identificaci\xf3n est\xe1ndar que muestra el navegador. Esta caja de di\xe1logo aparece para cada conexi\xf3n, si se selecciona la autenticaci\xf3n ",(0,n.kt)("a",r({parentName:"p"},{href:"#basic-protocol"}),"basic")," o ",(0,n.kt)("a",r({parentName:"p"},{href:"#digest-protocol"}),"digest"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si el nombre de usuario enviado por el navegador existe en 4D, el par\xe1metro $6 (la contrase\xf1a del usuario) no se devuelve por razones de seguridad.")),(0,n.kt)("h4",r({},{id:"par\xe1metro-0"}),"Par\xe1metro $0"),(0,n.kt)("p",null,"El m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," devuelve un booleano en $0:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Si $0 es True, la conexi\xf3n es aceptada.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Si $0 es False, la conexi\xf3n es rechazada."))),(0,n.kt)("p",null,"El m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection")," s\xf3lo se ejecuta si la conexi\xf3n ha sido aceptada por ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"ADVERTENCIA"),(0,n.kt)("br",null),"Si no se define ning\xfan valor en $0 o si $0 no est\xe1 definido en el m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),", la conexi\xf3n se considera aceptada y se ejecuta el m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection"),"."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Do not call any interface elements in the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," database method (",(0,n.kt)("inlineCode",{parentName:"li"},"ALERT"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"DIALOG"),", etc.) because otherwise its execution will be interrupted and the connection refused. Lo mismo ocurrir\xe1 si se produce un error durante su procesamiento."))))),(0,n.kt)("h3",r({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"Ejemplo del m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," en ",(0,n.kt)("a",r({parentName:"p"},{href:"#digest-protocol"}),"Modo DIGEST"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' // On Web Authentication Database Method\n #DECLARE ($url : Text; $header : Text; $ipB : Text; $ipS : Text; \\\n  $user : Text; $pw : Text) -> $valid : Boolean\n\n var $found : cs.WebUserSelection\n $valid:=False\n\n $found:=ds.WebUser.query("User === :1";$user)\n If($found.length=1) // User is found\n  $valid:=WEB Validate digest($user;[WebUser]password)\n Else\n    $valid:=False // User does not exist\n End if\n')))}p.isMDXComponent=!0},31821:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,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"},53594:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/serverAccess-b28091b35f6bc6b3f5605b27e8333135.png"}}]);