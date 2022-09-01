"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25302],{3905:(e,a,r)=>{r.d(a,{Zo:()=>s,kt:()=>m});var n=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=n.createContext({}),d=function(e){var a=n.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},s=function(e){var a=d(e.components);return n.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=t,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(v,i(i({ref:a},s),{},{components:r})):n.createElement(v,i({ref:a},s))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42835:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});r(67294);var n=r(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}function o(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}const i={id:"tls",title:"Protocolo TLS (HTTPS)"},l=void 0,c={unversionedId:"Admin/tls",id:"version-19-R6/Admin/tls",title:"Protocolo TLS (HTTPS)",description:"Todos los servidores 4D pueden comunicarse en modo seguro a trav\xe9s del protocolo TLS (Transport Layer Security):",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Admin/tls.md",sourceDirName:"Admin",slug:"/Admin/tls",permalink:"/docs/es/Admin/tls",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"tls",title:"Protocolo TLS (HTTPS)"},sidebar:"docs",previous:{title:"Interfaz de l\xednea de comando",permalink:"/docs/es/Admin/cli"},next:{title:"Gesti\xf3n de licencias 4D",permalink:"/docs/es/Admin/licenses"}},d={},s=[{value:"Generalidades",id:"generalidades",level:2},{value:"Versi\xf3n m\xednima",id:"versi\xf3n-m\xednima",level:2},{value:"\xbfC\xf3mo obtener un certificado?",id:"c\xf3mo-obtener-un-certificado",level:2},{value:"Instalaci\xf3n y activaci\xf3n",id:"instalaci\xf3n-y-activaci\xf3n",level:2},{value:"Instalar los archivos <code>key.pem</code> y <code>cert.pem</code>",id:"instalar-los-archivos-keypem-y-certpem",level:3},{value:"Con el servidor Web",id:"con-el-servidor-web",level:4},{value:"Con el servidor de aplicaciones (aplicaciones de escritorio cliente-servidor)",id:"con-el-servidor-de-aplicaciones-aplicaciones-de-escritorio-cliente-servidor",level:4},{value:"Con el servidor Web",id:"con-el-servidor-web-1",level:4},{value:"Activar TLS",id:"activar-tls",level:3},{value:"Perfect Forward Secrecy (PFS)",id:"perfect-forward-secrecy-pfs",level:2}],p={toc:s};function u(e){var{components:a}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",t({},p,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Todos los servidores 4D pueden comunicarse en modo seguro a trav\xe9s del protocolo TLS (Transport Layer Security):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"el servidor web"),(0,n.kt)("li",{parentName:"ul"},"el servidor de aplicaciones (aplicaciones de escritorio cliente-servidor)"),(0,n.kt)("li",{parentName:"ul"},"el servidor SQL")),(0,n.kt)("h2",t({},{id:"generalidades"}),"Generalidades"),(0,n.kt)("p",null,"El protocolo TLS (sucesor de SSL) ha sido dise\xf1ado para asegurar los intercambios de datos entre dos aplicaciones, principalmente entre un servidor web y un navegador. Este protocolo es ampliamente utilizado y es compatible con la mayor\xeda de los navegadores web."),(0,n.kt)("p",null,"A nivel de red, el protocolo de seguridad se inserta entre la capa TCP/IP (nivel bajo) y el protocolo de alto nivel HTTP. Ha sido dise\xf1ado principalmente para trabajar con HTTP."),(0,n.kt)("p",null,"Configuraci\xf3n de la red utilizando TSL:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(95404).Z,width:"318",height:"174"})),(0,n.kt)("p",null,"El protocolo TLS est\xe1 dise\xf1ado para autenticar al emisor y al receptor y para garantizar la confidencialidad e integridad de la informaci\xf3n intercambiada:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Autenticaci\xf3n"),": se confirma la identidad del emisor y del receptor."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Confidencialidad"),": los datos enviados se cifran para que ninguna tercera persona pueda entender el mensaje."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Integridad"),": los datos recibidos no han sido modificados, por accidente o de forma malintencionada.")),(0,n.kt)("p",null,"TLS utiliza una t\xe9cnica de cifrado de llave p\xfablica basada en un par de llaves asim\xe9tricas para el cifrado y el descifrado: una llave p\xfablica y una llave privada. La llave privada se utiliza para encriptar los datos. El remitente (el sitio web) no se la da a nadie. La llave p\xfablica se utiliza para descifrar la informaci\xf3n y se env\xeda a los receptores (navegadores web) a trav\xe9s de un certificado. Cuando se utiliza TLS con Internet, el certificado se entrega a trav\xe9s de una autoridad de certificaci\xf3n, como Verisign\xae. El sitio web paga a la Autoridad de Certificaci\xf3n para que le entregue un certificado que garantice la autentificaci\xf3n del servidor y que contenga la llave p\xfablica que permita el intercambio de datos de forma segura."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Para m\xe1s informaci\xf3n sobre el m\xe9todo de encriptaci\xf3n y los temas de llave p\xfablica y privada, consulte la descripci\xf3n del comando ",(0,n.kt)("inlineCode",{parentName:"p"},"ENCRYPT BLOB"),".")),(0,n.kt)("h2",t({},{id:"versi\xf3n-m\xednima"}),"Versi\xf3n m\xednima"),(0,n.kt)("p",null,"Por defecto, la versi\xf3n m\xednima del protocolo seguro que acepta el servidor es TLS 1.2. Puede modificar este valor utilizando ",(0,n.kt)("inlineCode",{parentName:"p"},"Min TLS version")," con el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER"),"."),(0,n.kt)("p",null,"Puede controlar el nivel de seguridad de su servidor web definiendo la ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/WebServer/webServerConfig#minimum-tls-version"}),"versi\xf3n TLS m\xednima ")," aceptada para las conexiones."),(0,n.kt)("h2",t({},{id:"c\xf3mo-obtener-un-certificado"}),"\xbfC\xf3mo obtener un certificado?"),(0,n.kt)("p",null,"Un servidor que funciona en modo seguro significa que necesita un certificado digital de una autoridad de certificaci\xf3n. Este certificado contiene diversa informaci\xf3n, como el ID del sitio, as\xed como la llave p\xfablica utilizada para comunicarse con el servidor. Este certificado se transmite a los clientes (por ejemplo, los navegadores web) que se conectan a este servidor. Una vez identificado y aceptado el certificado, la comunicaci\xf3n se realiza en modo seguro."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Los navegadores web s\xf3lo autorizan los certificados emitidos por una autoridad de certificaci\xf3n referenciada en sus propiedades.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(15779).Z,width:"394",height:"227"})),(0,n.kt)("p",null,"La autoridad de certificaci\xf3n se elige en funci\xf3n de varios criterios. If the certification authority is well known, the certificate will be authorized by many browsers, however the price to pay will be expensive."),(0,n.kt)("p",null,"Para obtener un certificado digital:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Genere una llave privada utilizando el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"GENERATE ENCRYPTION KEYPAIR"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Atenci\xf3n"),": por razones de seguridad, la llave privada debe mantenerse siempre en secreto. En realidad, deber\xeda permanecer siempre en la m\xe1quina del servidor. Para el servidor web, el archivo Key.pem debe colocarse en la carpeta Project."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Utilice el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"GENERATE CERTIFICATE REQUEST")," para emitir una solicitud de certificado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Env\xede la solicitud de certificado a la autoridad de certificaci\xf3n elegida."),(0,n.kt)("p",{parentName:"li"},"Para llenar una solicitud de certificado, es posible que tenga que ponerse en contacto con la autoridad de certificaci\xf3n. La autoridad de certificaci\xf3n comprueba que la informaci\xf3n transmitida es correcta. La petici\xf3n de certificado se genera en un BLOB utilizando el formato PKCS codificado en base64 (formato PEM). Este principio permite copiar y pegar las llaves como texto y enviarlas por correo electr\xf3nico sin modificar el contenido de la llave. Por ejemplo, puede guardar el BLOB que contiene la solicitud de certificado en un documento de texto (utilizando el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"BLOB TO DOCUMENT"),"), y luego abrirlo y copiar y pegar su contenido en un correo o un formulario web para enviarlo a la autoridad de certificaci\xf3n.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Una vez que tenga el certificado, cree un archivo de texto llamado "cert.pem" y pegue en \xe9l el contenido del certificado.'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",t({parentName:"pre"},{}),"Puede recibir un certificado de diferentes maneras (normalmente por correo electr\xf3nico o formulario HTML). 4D acepta todos los formatos de texto relacionados con la plataforma para los certificados (OS X, PC, Linux, etc.). Sin embargo, el certificado debe estar en formato PEM, *es decir, *, PKCS codificado en base64.\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Los caracteres de fin de l\xednea CR no se soportan por s\xed solos; debe utilizar CRLF o LF."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Coloque el archivo "cert.pem" en la ',(0,n.kt)("a",t({parentName:"p"},{href:"#instalaci%C3%B3n-y-activaci%C3%B3n"}),"ubicaci\xf3n adecuada"),"."))),(0,n.kt)("p",null,"El servidor 4D puede ahora trabajar en modo seguro. El certificado tiene una validez de entre 3 meses y un a\xf1o."),(0,n.kt)("h2",t({},{id:"instalaci\xf3n-y-activaci\xf3n"}),"Instalaci\xf3n y activaci\xf3n"),(0,n.kt)("h3",t({},{id:"instalar-los-archivos-keypem-y-certpem"}),"Instalar los archivos ",(0,n.kt)("inlineCode",{parentName:"h3"},"key.pem")," y ",(0,n.kt)("inlineCode",{parentName:"h3"},"cert.pem")),(0,n.kt)("p",null,"Para poder utilizar el protocolo TLS con el servidor, debe instalar el ",(0,n.kt)("strong",{parentName:"p"},"key.pem")," (documento que contiene la llave privada de cifrado) y ",(0,n.kt)("strong",{parentName:"p"},"cert.pem")," (documento que contiene el certificado) en la ubicaci\xf3n adecuada). Se requieren diferentes ubicaciones en funci\xf3n del servidor en el que se quiera utilizar TLS."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Los archivos ",(0,n.kt)("em",{parentName:"p"},"key.pem")," y",(0,n.kt)("em",{parentName:"p"},"cert.pem")," por defecto se entregan con 4D. Para un mayor nivel de seguridad, le recomendamos encarecidamente que sustituya estos archivos por sus propios certificados.")),(0,n.kt)("h4",t({},{id:"con-el-servidor-web"}),"Con el servidor Web"),(0,n.kt)("p",null,"Para ser utilizado por el servidor web de 4D, los archivos ",(0,n.kt)("strong",{parentName:"p"},"key.pem")," y ",(0,n.kt)("strong",{parentName:"p"},"cert.pem")," deben ser colocados:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"con 4D en modo local o 4D Server, junto a la ",(0,n.kt)("a",t({parentName:"li"},{href:"/docs/es/Project/architecture#project-folder"}),"carpeta del proyecto")),(0,n.kt)("li",{parentName:"ul"},"con 4D en modo remoto, en la carpeta de la base cliente en la m\xe1quina remota (para m\xe1s informaci\xf3n sobre la ubicaci\xf3n de esta carpeta, ver el comando ",(0,n.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page485.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Get 4D folder")),").")),(0,n.kt)("p",null,"Debe copiar estos archivos manualmente en la m\xe1quina remota."),(0,n.kt)("h4",t({},{id:"con-el-servidor-de-aplicaciones-aplicaciones-de-escritorio-cliente-servidor"}),"Con el servidor de aplicaciones (aplicaciones de escritorio cliente-servidor)"),(0,n.kt)("p",null,"Para ser utilizado por el servidor de aplicaciones de 4D, los archivos ",(0,n.kt)("strong",{parentName:"p"},"key.pem")," y ",(0,n.kt)("strong",{parentName:"p"},"cert.pem")," deben ser colocados:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"en la carpeta ",(0,n.kt)("a",t({parentName:"li"},{href:"/docs/es/Project/architecture#resources"}),(0,n.kt)("strong",{parentName:"a"},"Resources"))," de la aplicaci\xf3n 4D Server"),(0,n.kt)("li",{parentName:"ul"},"y en la carpeta ",(0,n.kt)("strong",{parentName:"li"},"Resources")," de cada aplicaci\xf3n 4D remota (para m\xe1s informaci\xf3n sobre la ubicaci\xf3n de esta carpeta, ver el comando ",(0,n.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page485.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Get 4D folder")),").")),(0,n.kt)("h4",t({},{id:"con-el-servidor-web-1"}),"Con el servidor Web"),(0,n.kt)("p",null,"Para ser utilizado por el servidor SQL de 4D, los archivos ",(0,n.kt)("strong",{parentName:"p"},"key.pem")," y ",(0,n.kt)("strong",{parentName:"p"},"cert.pem")," deben ubicarse junto a la ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/Project/architecture#project-folder"}),"carpeta del proyecto"),"."),(0,n.kt)("h3",t({},{id:"activar-tls"}),"Activar TLS"),(0,n.kt)("p",null,"La instalaci\xf3n de los archivos ",(0,n.kt)("strong",{parentName:"p"},"key.pem")," y ",(0,n.kt)("strong",{parentName:"p"},"cert.pem")," permite utilizar TLS con el servidor 4D. Sin embargo, para que las conexiones TLS sean aceptadas por el servidor, debe habilitarlas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Con el servidor web 4D, debe ",(0,n.kt)("a",t({parentName:"li"},{href:"/docs/es/WebServer/webServerConfig#enable-https"}),"activar HTTPS"),". Puede definir la opci\xf3n ",(0,n.kt)("a",t({parentName:"li"},{href:"/docs/es/WebServer/webServerConfig#enable-hsts"}),"HSTS")," para redirigir a los navegadores que intenten conectarse en modo http."),(0,n.kt)("li",{parentName:"ul"},"Con el servidor de aplicaciones, debe seleccionar la opci\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Encriptar las comunicaciones cliente-servidor"),' en la p\xe1gina "Opciones cliente-servidor/red" del cuadro de di\xe1logo Par\xe1metros.'),(0,n.kt)("li",{parentName:"ul"},"Con el servidor SQL, debe seleccionar la opci\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Habilitar TLS"),' en la p\xe1gina "SQL" del cuadro de di\xe1logo Par\xe1metros.')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El servidor web 4D tambi\xe9n soporta la opci\xf3n ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/WebServer/webServerConfig#enable-hsts"}),"HSTS")," para declarar que los navegadores s\xf3lo deben interactuar con \xe9l a trav\xe9s de conexiones seguras HTTPS.")),(0,n.kt)("h2",t({},{id:"perfect-forward-secrecy-pfs"}),"Perfect Forward Secrecy (PFS)"),(0,n.kt)("p",null,(0,n.kt)("a",t({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Forward_secrecy"}),"PFS"),' a\xf1ade una capa adicional de seguridad a sus comunicaciones. En lugar de utilizar llaves de intercambio predefinidas, PFS crea llaves de sesi\xf3n de forma cooperativa entre las partes que se comunican utilizando algoritmos Diffie-Hellman (DH). La forma conjunta en que se construyen las llaves crea un "secreto compartido" que impide que partes externas puedan comprometerlas.'),(0,n.kt)("p",null,"Cuando se habilita TLS en el servidor, PFS se habilita autom\xe1ticamente. Si el archivo ",(0,n.kt)("em",{parentName:"p"},"dhparams.pem")," (documento que contiene la llave privada DH del servidor) no existe todav\xeda, 4D lo generar\xe1 autom\xe1ticamente con un tama\xf1o de llave de 2048. La generaci\xf3n inicial de este archivo puede llevar varios minutos. El archivo se coloca con los archivos ",(0,n.kt)("a",t({parentName:"p"},{href:"#key-pem-and-cert-pem-files"}),(0,n.kt)("em",{parentName:"a"},"key.pem")," y ",(0,n.kt)("em",{parentName:"a"},"cert.pem")),"."),(0,n.kt)("p",null,"Si utiliza una ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/WebServer/webServerConfig##cipher-list"}),"lista de cifrado personalizada")," y desea habilitar el PFS, debe comprobar que contiene entradas con algoritmos DH o ECDH (Elliptic-curve Diffie-Hellman)."))}u.isMDXComponent=!0},95404:(e,a,r)=>{r.d(a,{Z:()=>n});const n="data:image/png;base64,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"},15779:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/images/tls2-654d4965c78986e1ff3061d0686d7943.png"}}]);