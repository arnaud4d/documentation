"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10458],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"directory",title:"$directory"},l=void 0,s={unversionedId:"REST/directory",id:"version-18/REST/directory",title:"$directory",description:"El directorio gestiona el acceso de los usuarios a trav\xe9s de peticiones REST.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/$directory.md",sourceDirName:"REST",slug:"/REST/directory",permalink:"/documentation/es/docs/18/REST/directory",draft:!1,tags:[],version:"18",frontMatter:{id:"directory",title:"$directory"},sidebar:"docs",previous:{title:"$catalog",permalink:"/documentation/es/docs/18/REST/catalog"},next:{title:"$info",permalink:"/documentation/es/docs/18/REST/info"}},c={},p=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Ejemplo",id:"ejemplo",level:3}],u={toc:p};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"El directorio gestiona el acceso de los usuarios a trav\xe9s de peticiones REST."),(0,n.kt)("h2",a({},{id:"directorylogin"}),"$directory/login"),(0,n.kt)("p",null,"Abre una sesi\xf3n REST en su aplicaci\xf3n 4D y conecta al usuario."),(0,n.kt)("h3",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"Utilice ",(0,n.kt)("inlineCode",{parentName:"p"},"$directory/login")," para abrir una sesi\xf3n en su aplicaci\xf3n 4D a trav\xe9s de REST y conecte un usuario. Tambi\xe9n puede modificar el tiempo de espera por defecto de la sesi\xf3n 4D."),(0,n.kt)("p",null,"Todos los par\xe1metros deben pasarse en ",(0,n.kt)("strong",{parentName:"p"},"encabezados"),"de un m\xe9todo POST:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Llave de encabezado"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Valor del encabezado"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"username-4D"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Usuario - No obligatorio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"password-4D"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Contrase\xf1a - No obligatorio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"hashed-password-4D"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Contrase\xf1a hashed - No obligatorio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"session-4D-length"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Tiempo de inactividad de la sesi\xf3n (minutos). No puede ser inferior a 60 - No es obligatorio")))),(0,n.kt)("h3",a({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="hashed-password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:=Generate digest("123";4D digest)\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultado"),":"),(0,n.kt)("p",null,"Si la conexi\xf3n fue exitosa, el resultado ser\xe1:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),'{\n    "result": true\n}\n')),(0,n.kt)("p",null,"De lo contrario, la respuesta ser\xe1:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),'{\n     "result": false\n}\n')))}d.isMDXComponent=!0}}]);