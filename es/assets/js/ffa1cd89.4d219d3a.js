"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39881],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),u=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=t,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return r?a.createElement(f,o(o({ref:n},c),{},{components:r})):a.createElement(f,o({ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},20932:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});r(67294);var a=r(3905);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},t.apply(this,arguments)}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}const o={id:"authUsers",title:"Usuarios y sesiones"},i=void 0,l={unversionedId:"REST/authUsers",id:"version-18/REST/authUsers",title:"Usuarios y sesiones",description:"Autenticaci\xf3n de los usuarios",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/documentation/es/docs/18/REST/authUsers",draft:!1,tags:[],version:"18",frontMatter:{id:"authUsers",title:"Usuarios y sesiones"},sidebar:"docs",previous:{title:"Configuraci\xf3n del servidor",permalink:"/documentation/es/docs/18/REST/configuration"},next:{title:"Obtener informaci\xf3n del servidor",permalink:"/documentation/es/docs/18/REST/genInfo"}},u={},c=[{value:"Autenticaci\xf3n de los usuarios",id:"autenticaci\xf3n-de-los-usuarios",level:2},{value:"Cookie de sesi\xf3n",id:"cookie-de-sesi\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:3}],d={toc:c};function p(e){var{components:n}=e,r=s(e,["components"]);return(0,a.kt)("wrapper",t({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",t({},{id:"autenticaci\xf3n-de-los-usuarios"}),"Autenticaci\xf3n de los usuarios"),(0,a.kt)("p",null,"Como primer paso para abrir una sesi\xf3n REST en el servidor 4D, el usuario que env\xeda la solicitud debe estar autenticado."),(0,a.kt)("p",null,"Usted inicia la sesi\xf3n de un usuario en su aplicaci\xf3n pasando el nombre y la contrase\xf1a del usuario en ",(0,a.kt)("a",t({parentName:"p"},{href:"/documentation/es/docs/18/REST/directory#directorylogin"}),(0,a.kt)("inlineCode",{parentName:"a"},"$directory/login")),"."),(0,a.kt)("p",null,"Una vez que un usuario se registra con \xe9xito, se abre una sesi\xf3n. Vea a continuaci\xf3n para saber c\xf3mo manejar la cookie de sesi\xf3n en las siguientes peticiones del cliente, si es necesario."),(0,a.kt)("p",null,"La sesi\xf3n se cerrar\xe1 autom\xe1ticamente cuando se alcance el tiempo de espera."),(0,a.kt)("h2",t({},{id:"cookie-de-sesi\xf3n"}),"Cookie de sesi\xf3n"),(0,a.kt)("p",null,"Cada petici\xf3n REST se gestiona por una sesi\xf3n espec\xedfica en el servidor 4D."),(0,a.kt)("p",null,"Cuando se recibe una primera petici\xf3n REST v\xe1lida, el servidor crea la sesi\xf3n y env\xeda una cookie de sesi\xf3n llamada ",(0,a.kt)("inlineCode",{parentName:"p"},"WASID4D")," en el encabezado de respuesta ",(0,a.kt)("strong",{parentName:"p"},'"Set-Cookie"'),", que contiene el UUID de la sesi\xf3n, por ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{}),"WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3\n")),(0,a.kt)("p",null,"En las siguientes peticiones REST, aseg\xfarese de que esta cookie se incluya en ",(0,a.kt)("strong",{parentName:"p"},'el encabezado "Cookie"')," con el fin de reutilizar la misma sesi\xf3n. En caso contrario, se abrir\xe1 una nueva sesi\xf3n y se utilizar\xe1 otra licencia."),(0,a.kt)("h3",t({},{id:"ejemplo"}),"Ejemplo"),(0,a.kt)("p",null,"La gesti\xf3n de las cookies de sesi\xf3n depende de su cliente HTTP. Este ejemplo muestra c\xf3mo extraer y reenviar la cookie de sesi\xf3n en el contexto de las peticiones gestionadas a trav\xe9s del comando 4D ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP Request"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'// Crear los encabezados\nARRAY TEXT(headerNames;0)\nARRAY TEXT(headerValues;0)\n\nAPPEND TO ARRAY(headerNames;"username-4D")\nAPPEND TO ARRAY(headerNames;"session-4D-length")\nAPPEND TO ARRAY(headerNames;"hashed-password-4D")\n\nAPPEND TO ARRAY(headerValues;"kind user")\nAPPEND TO ARRAY(headerValues;"60")\nAPPEND TO ARRAY(headerValues;Generate digest("test";4D digest))\n\nC_OBJECT($response)\n$response:=New object\n\n//Esta petici\xf3n abre una sesi\xf3n para el usuario "kind user"\n$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\\  \n    $response;headerNames;headerValues;*)\n\n\n//Crear nuevos arrays para los encabezados con \xfanicamente la cookie WASID4D\nbuildHeader(->headerNames;->headerValues)\n\n//Esta otra petici\xf3n no abrir\xe1 una nueva sesi\xf3n\n$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\\  \n    $response;headerNames;headerValues;*)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'// m\xe9todo proyecto buildHeader  \n\nC_POINTER($pointerNames;$1;$pointerValues;$2)\nARRAY TEXT($headerNames;0)\nARRAY TEXT($headerValues;0)\n\nCOPY ARRAY($1->;$headerNames)\nCOPY ARRAY($2->;$headerValues)\n\n$indexCookie:=Find in array($headerValues;"WASID4D@")\n$cookie:=$headerValues{$indexCookie}\n$start:=Position("WASID4D";$cookie)\n$end:=Position(";";$cookie)\n$uuid:= Substring($cookie;$start;$end-$start)\n\nARRAY TEXT($headerNames;1)\nARRAY TEXT($headerValues;1)\n\n$headerNames{1}:="Cookie"\n$headerValues{1}:=$uuid\n\nCOPY ARRAY($headerNames;$1->)\nCOPY ARRAY($headerValues;$2->)\n')))}p.isMDXComponent=!0}}]);