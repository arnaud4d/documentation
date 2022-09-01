"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95878],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,b=c["".concat(s,".").concat(u)]||c[u]||m[u]||n;return a?o.createElement(b,i(i({ref:t},d),{},{components:a})):o.createElement(b,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},10237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});a(67294);var o=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"preemptiveWeb",title:"Uso de procesos web apropiativos"},l=void 0,s={unversionedId:"WebServer/preemptiveWeb",id:"WebServer/preemptiveWeb",title:"Uso de procesos web apropiativos",description:"El servidor web de 4D le permite aprovechar al m\xe1ximo los ordenadores multin\xfacleo utilizando procesos web apropiativos en sus aplicaciones. Puede configurar su c\xf3digo relacionado con la web, incluyendo las etiquetas 4D, los m\xe9todos base Web o las funciones de clase REST de ORDA para que se ejecuten simult\xe1neamente en tantos n\xfacleos como sea posible.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/WebServer/preemptiveWeb.md",sourceDirName:"WebServer",slug:"/WebServer/preemptiveWeb",permalink:"/docs/es/next/WebServer/preemptiveWeb",draft:!1,tags:[],version:"current",frontMatter:{id:"preemptiveWeb",title:"Uso de procesos web apropiativos"},sidebar:"docs",previous:{title:"Sesiones usuario",permalink:"/docs/es/next/WebServer/sessions"},next:{title:"Comencemos",permalink:"/docs/es/next/REST/gettingStarted"}},p={},d=[{value:"Disponibilidad del modo apropiativo para los procesos web",id:"disponibilidad-del-modo-apropiativo-para-los-procesos-web",level:2},{value:"Escribir c\xf3digo servidor web hilo seguro",id:"escribir-c\xf3digo-servidor-web-hilo-seguro",level:2},{value:"C\xf3digo web 4D hilo seguro",id:"c\xf3digo-web-4d-hilo-seguro",level:2},{value:"Comandos 4D y m\xe9todos base",id:"comandos-4d-y-m\xe9todos-base",level:3},{value:"URLs del servidor web",id:"urls-del-servidor-web",level:3},{value:"Icono de proceso web apropiativo",id:"icono-de-proceso-web-apropiativo",level:3}],m={toc:d};function c(e){var{components:t}=e,i=n(e,["components"]);return(0,o.kt)("wrapper",r({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"El servidor web de 4D le permite aprovechar al m\xe1ximo los ordenadores multin\xfacleo utilizando procesos web apropiativos en sus aplicaciones. Puede configurar su c\xf3digo relacionado con la web, incluyendo las etiquetas 4D, los m\xe9todos base Web o las funciones de clase REST de ORDA para que se ejecuten simult\xe1neamente en tantos n\xfacleos como sea posible."),(0,o.kt)("p",null,"Para obtener informaci\xf3n detallada sobre los procesos apropiativos en 4D, consulte la secci\xf3n ",(0,o.kt)("em",{parentName:"p"},"Procesos 4D apropiativos")," del ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com"}),(0,o.kt)("em",{parentName:"a"},"manual de lenguaje")),"."),(0,o.kt)("h2",r({},{id:"disponibilidad-del-modo-apropiativo-para-los-procesos-web"}),"Disponibilidad del modo apropiativo para los procesos web"),(0,o.kt)("p",null,"La siguiente tabla indica si el modo apropiativo se utiliza o est\xe1 disponible, dependiendo del contexto de ejecuci\xf3n:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"4D Server"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Interpretado (",(0,o.kt)("a",r({parentName:"th"},{href:"/docs/es/next/Debugging/debugging-remote"}),"asociado al depurador"),")"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Interpretado (no asociado al depurador)"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Compilado"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Servidor REST"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"cooperativo"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"apropiativo"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"apropiativo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Servidor Web"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"cooperativo"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"par\xe1metro web")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"par\xe1metro web"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Servidor Web Services"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"cooperativo"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"par\xe1metro web")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"par\xe1metro web"))))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"4D remoto/monopuesto"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Interpretado"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Compilado"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Servidor REST"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"cooperativo"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"apropiativo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Servidor Web"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"cooperativo"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"par\xe1metro web"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Servidor Web Services"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"cooperativo"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"par\xe1metro web"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Servidor REST: gestiona las ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/es/next/REST/classFunctions"}),"funciones de clase del modelo de datos ORDA")),(0,o.kt)("li",{parentName:"ul"},"Servidor web: maneja las ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/es/next/WebServer/templates"}),"plantillas web"),", ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/es/next/WebServer/httpRequests"}),"4DACTION y los m\xe9todos base")),(0,o.kt)("li",{parentName:"ul"},"Servidor de servicios web: gestiona las peticiones SOAP"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"web setting"))," significa que el modo apropiativo depende de un valor de configuraci\xf3n:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"cuando la opci\xf3n ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/es/next/WebServer/sessions#enabling-sessions"}),(0,o.kt)("strong",{parentName:"a"},"sesiones escalables"))," est\xe1 seleccionada, el ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/es/next/WebServer/sessions#preemptive-mode"}),"modo apropiativo se utiliza autom\xe1ticamente")," para los procesos web."),(0,o.kt)("li",{parentName:"ul"},"de lo contrario, la opci\xf3n ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/es/next/WebServer/webServerConfig#use-preemptive-processes"}),(0,o.kt)("strong",{parentName:"a"},"Utilizar procesos apropiativos"))," se tiene en cuenta."),(0,o.kt)("li",{parentName:"ul"},'en lo que respecta a los procesos de servicios web (servidor o cliente), se soporta el modo apropiativo a nivel del m\xe9todo. S\xf3lo tiene que seleccionar la propiedad " Puede ejecutarse en procesos apropiativos " para los m\xe9todos del servidor SOAP publicados (ver ',(0,o.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html"}),"Publicaci\xf3n de un servicio web con 4D"),") o los m\xe9todos del cliente proxy (ver ",(0,o.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html"}),"Suscripci\xf3n a un servicio web en 4D"),") y asegurarse de que el compilador confirme que son hilo seguro.")))),(0,o.kt)("h2",r({},{id:"escribir-c\xf3digo-servidor-web-hilo-seguro"}),"Escribir c\xf3digo servidor web hilo seguro"),(0,o.kt)("p",null,"Todo el c\xf3digo 4D ejecutado por el servidor web debe ser hilo seguro si quiere que sus procesos web se ejecuten en modo apropiativo. Cuando el ",(0,o.kt)("a",r({parentName:"p"},{href:"#availability-of-preemptive-mode-for-web-processes"}),"modo apropiativo est\xe1 activo"),", las siguientes partes de la aplicaci\xf3n ser\xe1n evaluadas autom\xe1ticamente por el compilador 4D:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Todos los m\xe9todos base relacionados con la web:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"/docs/es/next/WebServer/authentication#on-web-authentication"}),(0,o.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"/docs/es/next/WebServer/httpRequests#on-web-connection"}),(0,o.kt)("inlineCode",{parentName:"a"},"On Web Connection"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"/docs/es/next/REST/configuration#using-the-on-rest-authentication-database-method"}),(0,o.kt)("inlineCode",{parentName:"a"},"On REST Authentication"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication"}),(0,o.kt)("inlineCode",{parentName:"a"},"On Mobile App Authentication"))," y ",(0,o.kt)("a",r({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action"}),(0,o.kt)("inlineCode",{parentName:"a"},"On Mobile App Action"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"El m\xe9todo proyecto ",(0,o.kt)("inlineCode",{parentName:"p"},"compilador_web"),' (independientemente de su propiedad real "Modo de ejecuci\xf3n");')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"B\xe1sicamente cualquier c\xf3digo procesado por el comando ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page816.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"PROCESS 4D TAGS"))," en el contexto web, por ejemplo a trav\xe9s de p\xe1ginas .shtml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Todo m\xe9todo proyecto con el atributo "Disponible a trav\xe9s de etiquetas 4D y URLs (',(0,o.kt)("inlineCode",{parentName:"p"},"4DACTION"),", etc.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Triggers para tablas con el atributo "Exponer como recurso REST"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/next/REST/classFunctions"}),"funciones de clase del modelo de datos ORDA")," llamadas v\xeda REST"))),(0,o.kt)("p",null,"Para cada uno de estos m\xe9todos y partes de c\xf3digo, el compilador comprobar\xe1 si se respetan las reglas de seguridad de hilos, y devolver\xe1 errores en caso de que haya problemas. Para m\xe1s informaci\xf3n sobre las reglas hilo seguro, consulte el p\xe1rrafo ",(0,o.kt)("em",{parentName:"p"},"Escribir un m\xe9todo hilo seguro")," en el cap\xedtulo ",(0,o.kt)("em",{parentName:"p"},"Procesos")," del manual de ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com"}),"Lenguaje 4D"),"."),(0,o.kt)("h2",r({},{id:"c\xf3digo-web-4d-hilo-seguro"}),"C\xf3digo web 4D hilo seguro"),(0,o.kt)("p",null,"La mayor\xeda de los comandos y funciones 4D relacionados con la web, los m\xe9todos base y las URL son hilo seguro y pueden utilizarse en modo apropiativo."),(0,o.kt)("h3",r({},{id:"comandos-4d-y-m\xe9todos-base"}),"Comandos 4D y m\xe9todos base"),(0,o.kt)("p",null,"Todos los comandos 4D relativos a la web son hilo seguro, ",(0,o.kt)("em",{parentName:"p"},"es decir"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"todos los comandos del tema ",(0,o.kt)("em",{parentName:"li"},"Servidor Web"),","),(0,o.kt)("li",{parentName:"ul"},"todos los comandos del tema ",(0,o.kt)("em",{parentName:"li"},"Cliente HTTP"),".")),(0,o.kt)("p",null,"Los m\xe9todos base relacionados con la web son hilo seguro y pueden utilizarse en modo apropiativo (ver arriba): ",(0,o.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Web Connection"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),"...)."),(0,o.kt)("p",null,"Por supuesto, el c\xf3digo ejecutado por estos m\xe9todos tambi\xe9n debe ser hilo seguro."),(0,o.kt)("h3",r({},{id:"urls-del-servidor-web"}),"URLs del servidor web"),(0,o.kt)("p",null,"Las siguientes URLs 4D Web Server son hilo seguro y pueden ser utilizadas en modo apropiativo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"4daction/")," (el m\xe9todo proyecto llamado tambi\xe9n debe ser hilo seguro)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"4dcgi/")," (los m\xe9todos base llamados tambi\xe9n deben ser hilo seguro)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"4dwebtest/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"4dblank/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"4dstats/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"4dhtmlstats/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"4dcacheclear/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"rest/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"4dimgfield/")," (generado por ",(0,o.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," para la petici\xf3n web en los campos imagen)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"4dimg/")," (generado por ",(0,o.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," para la petici\xf3n web en las variables imagen)")),(0,o.kt)("h3",r({},{id:"icono-de-proceso-web-apropiativo"}),"Icono de proceso web apropiativo"),(0,o.kt)("p",null,"Tanto el Explorador de ejecuci\xf3n como la ventana de administraci\xf3n de 4D Server muestran un icono espec\xedfico para los procesos web apropiativos:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Tipo de proceso"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Icono"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"M\xe9todo Web (proceso apropiativo)"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("img",{src:a(72442).Z,width:"40",height:"32"}))))))}c.isMDXComponent=!0},72442:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);