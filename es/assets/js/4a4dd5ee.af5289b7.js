"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68027],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(b,s(s({ref:a},u),{},{components:t})):r.createElement(b,s({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69766:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});t(67294);var r=t(3905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const s={id:"configuration",title:"Configuraci\xf3n del servidor"},i=void 0,l={unversionedId:"REST/configuration",id:"version-19-R6/REST/configuration",title:"Configuraci\xf3n del servidor",description:"Utilizando peticiones HTTP est\xe1ndar, el servidor 4D REST permite a las aplicaciones externas acceder directamente a los datos de su aplicaci\xf3n, es decir, recuperar informaci\xf3n sobre las clases de datos de su proyecto, manipular datos, entrar en su aplicaci\xf3n web, y mucho m\xe1s.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/REST/configuration.md",sourceDirName:"REST",slug:"/REST/configuration",permalink:"/docs/es/REST/configuration",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"configuration",title:"Configuraci\xf3n del servidor"},sidebar:"docs",previous:{title:"Comencemos",permalink:"/docs/es/REST/gettingStarted"},next:{title:"Usuarios y sesiones",permalink:"/docs/es/REST/authUsers"}},c={},u=[{value:"Iniciar el servidor REST",id:"iniciar-el-servidor-rest",level:2},{value:"Configuraci\xf3n del acceso REST",id:"configuraci\xf3n-del-acceso-rest",level:2},{value:"Uso de los par\xe1metros de la Estructura",id:"uso-de-los-par\xe1metros-de-la-estructura",level:3},{value:"M\xe9todo base On REST Authentication",id:"m\xe9todo-base-on-rest-authentication",level:3},{value:"Exponer tablas y campos",id:"exponer-tablas-y-campos",level:2},{value:"Exponer las tablas",id:"exponer-las-tablas",level:3},{value:"Exponer los campos",id:"exponer-los-campos",level:3}],p={toc:u};function d(e){var{components:a}=e,s=o(e,["components"]);return(0,r.kt)("wrapper",n({},p,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Utilizando peticiones HTTP est\xe1ndar, el servidor 4D REST permite a las aplicaciones externas acceder directamente a los datos de su aplicaci\xf3n, ",(0,r.kt)("em",{parentName:"p"},"es decir,")," recuperar informaci\xf3n sobre las clases de datos de su proyecto, manipular datos, entrar en su aplicaci\xf3n web, y mucho m\xe1s."),(0,r.kt)("p",null,"Para comenzar a utilizar las funcionalidades REST, es necesario iniciar y configurar el servidor 4D REST."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"En 4D Server, para abrir una sesi\xf3n REST es necesario disponer de una licencia cliente 4D gratuita.",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"En 4D monopuesto, puede abrir hasta tres sesiones REST para realizar pruebas."),(0,r.kt)("li",{parentName:"ul"},"Debe gestionar la ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/REST/authUsers"}),"sesi\xf3n")," para su aplicaci\xf3n solicitante."))),(0,r.kt)("h2",n({},{id:"iniciar-el-servidor-rest"}),"Iniciar el servidor REST"),(0,r.kt)("p",null,"Por razones de seguridad, por defecto, 4D no responde a las peticiones REST. Si desea iniciar el servidor REST, debe marcar la opci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Exponer como servidor REST")," en la p\xe1gina ",(0,r.kt)("strong",{parentName:"p"},"Web")," > ",(0,r.kt)("strong",{parentName:"p"},"Web Features")," de la configuraci\xf3n de la estructura para que se procesen las peticiones REST."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:t(61680).Z,width:"855",height:"381"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Los servicios REST utilizan el servidor HTTP 4D, por lo que debe asegurarse de que el servidor web 4D est\xe1 iniciado.")),(0,r.kt)("p",null,'El mensaje de advertencia "Atenci\xf3n, verifique los privilegios de acceso" aparece cuando se marca esta opci\xf3n para llamar la atenci\xf3n sobre el hecho de que cuando se activan los servicios REST, por defecto el acceso a los objetos de la base de datos es gratuito mientras no se hayan configurado los accesos REST.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Debe reiniciar la aplicaci\xf3n 4D para que los cambios surtan efecto.")),(0,r.kt)("h2",n({},{id:"configuraci\xf3n-del-acceso-rest"}),"Configuraci\xf3n del acceso REST"),(0,r.kt)("p",null,"Por defecto, los accesos REST est\xe1n abiertos a todos los usuarios, lo que obviamente no es recomendable por razones de seguridad, y tambi\xe9n para controlar el uso de las licencias de los clientes."),(0,r.kt)("p",null,"Puede configurar los accesos REST de una de las siguientes maneras:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"asignar un grupo de usuarios ",(0,r.kt)("strong",{parentName:"li"},"en lectura/escritura"),' a los servicios REST en la p\xe1gina "',(0,r.kt)("strong",{parentName:"li"},"Web")," > ",(0,r.kt)("strong",{parentName:"li"},"Web Features"),'" de los par\xe1metros de estructura;'),(0,r.kt)("li",{parentName:"ul"},"escribiendo un m\xe9todo base ",(0,r.kt)("inlineCode",{parentName:"li"},"On REST Authentication")," para interceptar y manejar cada petici\xf3n REST inicial.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No se pueden utilizar ambas funciones simult\xe1neamente. Una vez que se ha definido un m\xe9todo base ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),', 4D delega totalmente el control de las peticiones REST en \xe9l: se ignora cualquier ajuste realizado mediante el men\xfa " Lectura/Escritura" de la p\xe1gina de ',(0,r.kt)("strong",{parentName:"p"},"Web"),">",(0,r.kt)("strong",{parentName:"p"},"Funcionalidades Web")," de los par\xe1metros de la estructura.")),(0,r.kt)("h3",n({},{id:"uso-de-los-par\xe1metros-de-la-estructura"}),"Uso de los par\xe1metros de la Estructura"),(0,r.kt)("p",null,"El men\xfa ",(0,r.kt)("strong",{parentName:"p"},"Lectura/Escritura"),' de la p\xe1gina "',(0,r.kt)("strong",{parentName:"p"},"Web")," > ",(0,r.kt)("strong",{parentName:"p"},"Web Features"),'" de los par\xe1metros de la estructura indica un grupo de usuarios 4D que est\xe1 autorizado a establecer el enlace con la aplicaci\xf3n 4D utilizando las peticiones REST.'),(0,r.kt)("p",null,"Por defecto, el men\xfa muestra ",(0,r.kt)("inlineCode",{parentName:"p"},"\\&#060;Anyone&#062;"),", lo que significa que los accesos REST est\xe1n abiertos a todos los usuarios. Una vez que haya especificado un grupo, s\xf3lo una cuenta de usuario de 4D que pertenezca a este grupo podr\xe1 ser utilizada para ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/REST/authUsers"}),"acceder a 4D mediante una petici\xf3n REST"),". Si se utiliza una cuenta que no pertenece a este grupo, 4D devuelve un error de autenticaci\xf3n al remitente de la petici\xf3n."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Para que esta configuraci\xf3n tenga efecto, el m\xe9todo base",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," no debe estar definido. Si existe, 4D ignora los par\xe1metros de acceso definidos en las propiedades de la estructura.")),(0,r.kt)("h3",n({},{id:"m\xe9todo-base-on-rest-authentication"}),"M\xe9todo base On REST Authentication"),(0,r.kt)("p",null,"El m\xe9todo base ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," le ofrece una forma personalizada de controlar la apertura de sesiones REST en 4D. Este m\xe9todo base se llama autom\xe1ticamente cuando se abre una nueva sesi\xf3n a trav\xe9s de una solicitud REST. Cuando se recibe una ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/REST/authUsers"}),"solicitud para abrir una sesi\xf3n REST"),", los identificadores de conexi\xf3n se ofrecen en el encabezado de la solicitud. Se llama al m\xe9todo base ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," para poder evaluar estos identificadores. Puede utilizar la lista de usuarios de la aplicaci\xf3n 4D o puede utilizar su propia tabla de identificadores. Para obtener m\xe1s informaci\xf3n, consulte la ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html"}),"documentaci\xf3n")," del m\xe9todo base",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),"."),(0,r.kt)("h2",n({},{id:"exponer-tablas-y-campos"}),"Exponer tablas y campos"),(0,r.kt)("p",null,"Una vez activados los servicios REST en la aplicaci\xf3n 4D, por defecto una sesi\xf3n REST puede acceder a todas las tablas y campos de la base de datos 4D a trav\xe9s de la ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/ORDA/dsmapping#datastore"}),"interfaz del datastore"),". As\xed, puede utilizar sus datos. Por ejemplo, si su base de datos contiene una tabla ","[Employee]",", es posible escribir:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n')),(0,r.kt)("p",null,"Esta petici\xf3n devolver\xe1 todos los empleados cuyo campo de salario sea superior a 10000."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Las tablas y/o campos 4D que tienen el atributo "Invisible" tambi\xe9n se exponen en REST por defecto.')),(0,r.kt)("p",null,"Si desea personalizar los objetos del datastore accesibles a trav\xe9s de REST, debe desactivar la exposici\xf3n de cada tabla y/o campo que desee ocultar. Cuando una petici\xf3n REST intenta acceder a un recurso no autorizado, 4D devuelve un error."),(0,r.kt)("h3",n({},{id:"exponer-las-tablas"}),"Exponer las tablas"),(0,r.kt)("p",null,"Por defecto, todas las tablas se exponen en REST."),(0,r.kt)("p",null,"Por razones de seguridad, es posible que desee exponer s\xf3lo ciertas tablas de su almac\xe9n de datos a las llamadas REST. Por ejemplo, si ha creado una tabla ","[Users]"," que almacena los nombres de usuario y las contrase\xf1as, ser\xeda mejor no exponerla."),(0,r.kt)("p",null,"Para eliminar la exposici\xf3n REST de una tabla:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visualice el inspector de tablas en el editor de estructuras y seleccione la tabla que desea modificar.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Uncheck the ",(0,r.kt)("strong",{parentName:"p"},"Expose as REST resource")," option: ",(0,r.kt)("img",{alt:"alt-text",src:t(4303).Z,width:"279",height:"330"})," Do this for each table whose exposure needs to be modified."))),(0,r.kt)("h3",n({},{id:"exponer-los-campos"}),"Exponer los campos"),(0,r.kt)("p",null,"Por defecto, todos los campos de una base 4D se exponen en REST."),(0,r.kt)("p",null,"Es posible que no quiera exponer ciertos campos de sus tablas a REST. Por ejemplo, es posible que no quiera exponer el campo ","[Employees]","Salary."),(0,r.kt)("p",null,"Para eliminar la exposici\xf3n REST de un campo:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visualice el inspector de campo en el editor de estructuras y seleccione el campo a modificar.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Desmarque la opci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Exponer como recurso REST")," para el campo. ",(0,r.kt)("img",{alt:"alt-text",src:t(83415).Z,width:"279",height:"271"})," Repeat this for each field whose exposure needs to be modified."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Para que un campo sea accesible a trav\xe9s de REST, la tabla padre tambi\xe9n debe serlo. Si la tabla padre no est\xe1 expuesta, ninguno de sus campos lo estar\xe1, independientemente de su estado.")))}d.isMDXComponent=!0},61680:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/Settings-934d69d2618fdc41073c2f25c38ea3a6.png"},83415:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},4303:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"}}]);