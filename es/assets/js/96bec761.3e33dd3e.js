"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86095],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},90218:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={id:"REST_requests",title:"Acerca de las peticiones REST"},s=void 0,i={unversionedId:"REST/REST_requests",id:"version-19-R6/REST/REST_requests",title:"Acerca de las peticiones REST",description:"Se soportan las siguientes estructuras para las peticiones REST:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/REST/REST_requests.md",sourceDirName:"REST",slug:"/REST/REST_requests",permalink:"/documentation/es/docs/REST/REST_requests",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"REST_requests",title:"Acerca de las peticiones REST"},sidebar:"docs",previous:{title:"Llamar a las funciones de clase ORDA",permalink:"/documentation/es/docs/REST/classFunctions"},next:{title:"$catalog",permalink:"/documentation/es/docs/REST/catalog"}},d={},p=[{value:"Estado y respuesta REST",id:"estado-y-respuesta-rest",level:2},{value:"Estado de la petici\xf3n",id:"estado-de-la-petici\xf3n",level:3},{value:"Respuesta",id:"respuesta",level:3}],u={toc:p};function c(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",n({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Se soportan las siguientes estructuras para las peticiones REST:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"URI"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Resource (Input)"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"/? /? or &{filter} (Output)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"http://{servername}:{port}/rest/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/es/docs/REST/filter"}),"$filter"),", ",(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/es/docs/REST/attributes"}),"$attributes"),", ",(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/es/docs/REST/skip"}),"$skip"),", ",(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/es/docs/REST/method"}),"$method=..."),"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}"),"/",(0,r.kt)("a",n({parentName:"td"},{href:"entityset.html#entitysetentitysetid"}),"$entityset/{entitySetID}")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/es/docs/REST/method"}),"$method=..."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclasskey"}),"{dataClass}({key})")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/documentation/es/docs/REST/attributes"}),"$attributes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclassattributevalue"}),"{dataClass}:{attribute}(value)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,"Mientras que todas las solicitudes REST deben contener los par\xe1metros URI y Resource, los filtros de salida (que filtran los datos devueltos) son opcionales."),(0,r.kt)("p",null,'Como en todos los URI, el primer par\xe1metro est\xe1 delimitado por un "?" y todos los siguientes por un "&". Por ejemplo:'),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Puede colocar todos los valores entre comillas en caso de ambig\xfcedad. Por ejemplo, en nuestro ejemplo anterior, podr\xedamos haber puesto el valor del apellido entre comillas simples: \"lastName!='Jones'\".")),(0,r.kt)("p",null,"Los par\xe1metros le permiten manipular los datos de las clases de datos en su proyecto 4D. Adem\xe1s de recuperar datos mediante los m\xe9todos HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", tambi\xe9n se pueden a\xf1adir, actualizar y eliminar entidades de una clase de datos utilizando los m\xe9todos HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),"."),(0,r.kt)("p",null,"Si desea que los datos se devuelvan en un array en lugar de en JSON, utilice el par\xe1metro ",(0,r.kt)("a",n({parentName:"p"},{href:"/documentation/es/docs/REST/asArray"}),(0,r.kt)("inlineCode",{parentName:"a"},"$asArray")),"."),(0,r.kt)("h2",n({},{id:"estado-y-respuesta-rest"}),"Estado y respuesta REST"),(0,r.kt)("p",null,"Con cada petici\xf3n REST, el servidor devuelve el estado y una respuesta (con o sin error)."),(0,r.kt)("h3",n({},{id:"estado-de-la-petici\xf3n"}),"Estado de la petici\xf3n"),(0,r.kt)("p",null,"Con cada solicitud REST, se obtiene el estado junto con la respuesta. A continuaci\xf3n se presentan algunos de los estados que pueden surgir:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Estado"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"0"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Solicitud no procesada (el servidor podr\xeda no estar iniciado).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"200 OK"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Petici\xf3n procesada sin error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"401 Unauthorized"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Error de permisos (compruebe los permisos del usuario).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"402 No session"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Se ha alcanzado el n\xfamero m\xe1ximo de sesiones.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"404 Not Found"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"La clase de datos no es accesible v\xeda REST o el conjunto de entidades no existe.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"500 Internal Server Error"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Error al procesar la solicitud REST.")))),(0,r.kt)("h3",n({},{id:"respuesta"}),"Respuesta"),(0,r.kt)("p",null,"La respuesta (en formato JSON) var\xeda en funci\xf3n de la petici\xf3n."),(0,r.kt)("p",null,"Si se produce un error, se enviar\xe1 junto con la respuesta del servidor o ser\xe1 la respuesta del servidor."))}c.isMDXComponent=!0}}]);