"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31665],{3905:(e,r,o)=>{o.d(r,{Zo:()=>c,kt:()=>m});var n=o(67294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=n.createContext({}),s=function(e){var r=n.useContext(d),o=r;return e&&(o="function"==typeof e?e(r):l(l({},r),e)),o},c=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var o=e.components,t=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(o),m=t,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return o?n.createElement(g,l(l({ref:r},c),{},{components:o})):n.createElement(g,l({ref:r},c))}));function m(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3136:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});o(67294);var n=o(3905);function t(){return t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t.apply(this,arguments)}function a(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}const l={id:"error-handling",title:"Gesti\xf3n de errores"},i=void 0,d={unversionedId:"Concepts/error-handling",id:"version-18/Concepts/error-handling",title:"Gesti\xf3n de errores",description:"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/documentation/es/docs/18/Concepts/error-handling",draft:!1,tags:[],version:"18",frontMatter:{id:"error-handling",title:"Gesti\xf3n de errores"},sidebar:"docs",previous:{title:"Estructuras repetitivas (bucles)",permalink:"/documentation/es/docs/18/Concepts/looping"},next:{title:"Modos interpretado y compilado",permalink:"/documentation/es/docs/18/Concepts/interpreted-compiled"}},s={},c=[{value:"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores",id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores",level:2},{value:"Alcance y componentes",id:"alcance-y-componentes",level:3},{value:"Manejo de errores dentro del m\xe9todo",id:"manejo-de-errores-dentro-del-m\xe9todo",level:3},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo",id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo",level:3}],p={toc:c};function u(e){var{components:r}=e,o=a(e,["components"]);return(0,n.kt)("wrapper",t({},p,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones."),(0,n.kt)("p",null,"La gesti\xf3n de errores responde a dos necesidades principales:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"descubrir y corregir posibles errores y fallos en el c\xf3digo durante la fase de desarrollo,"),(0,n.kt)("li",{parentName:"ul"},"detectar y recuperar errores inesperados en las aplicaciones desplegadas; en particular, puede sustituir los di\xe1logos de error del sistema (disco lleno, archivo perdido, etc.) por su propia interfaz.",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("p",{parentName:"blockquote"},"It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. Este m\xe9todo evitar\xeda la aparici\xf3n de cajas de di\xe1logo inesperadas en el servidor, y podr\xeda registrar los errores en un archivo espec\xedfico para su posterior an\xe1lisis."))))),(0,n.kt)("h2",t({},{id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores"}),"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores"),(0,n.kt)("p",null,"En 4D, todos los errores pueden ser capturados y manejados en un m\xe9todo proyecto espec\xedfico, el m\xe9todo ",(0,n.kt)("strong",{parentName:"p"},"gesti\xf3n de errores")," (o ",(0,n.kt)("strong",{parentName:"p"},"captura de errores"),")."),(0,n.kt)("p",null,"Este m\xe9todo proyecto se instala para el proceso actual y ser\xe1 llamado autom\xe1ticamente para cualquier error que se produzca en el proceso, en modo interpretado o compilado. Para ",(0,n.kt)("em",{parentName:"p"},"instalar")," este m\xe9todo proyecto, basta con llamar al comando ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," con el nombre del m\xe9todo proyecto como par\xe1metro. Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_ERRORS") //Instala el m\xe9todo de gesti\xf3n de errores\n')),(0,n.kt)("p",null,"Para dejar de detectar errores y devolver el control a 4D, llame a ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," con una cadena vac\xeda:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("") //devuelve el control a 4D\n')),(0,n.kt)("h3",t({},{id:"alcance-y-componentes"}),"Alcance y componentes"),(0,n.kt)("p",null,"Se puede definir un \xfanico m\xe9todo de captura de errores para toda la aplicaci\xf3n o diferentes m\xe9todos por m\xf3dulo de aplicaci\xf3n. Sin embargo, s\xf3lo se puede instalar un m\xe9todo por proceso."),(0,n.kt)("p",null,"Un m\xe9todo de gesti\xf3n de errores instalado por el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," s\xf3lo se aplica a la base de datos en ejecuci\xf3n. En el caso de un error generado por un ",(0,n.kt)("strong",{parentName:"p"},"componente"),", no se llama al m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," de gesti\xf3n de errores de la base local, y viceversa."),(0,n.kt)("p",null,"El comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Method called on error")," permite conocer el nombre del m\xe9todo instalado por ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," para el proceso actual. Es particularmente \xfatil en el contexto de los componentes porque permite cambiar temporalmente y luego restaurar el m\xe9todo de captura de errores de la base de datos local:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  //Si no se puede abrir el documento, se genera un error\n $ref:=Open document("MyDocument")\n  //Reinstalaci\xf3n del m\xe9todo anterior\n ON ERR CALL($methCurrent)\n\n')),(0,n.kt)("h3",t({},{id:"manejo-de-errores-dentro-del-m\xe9todo"}),"Manejo de errores dentro del m\xe9todo"),(0,n.kt)("p",null,"Dentro del m\xe9todo de error personalizado, tiene acceso a varias informaciones que le ayudar\xe1n a identificar el error:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"4D mantiene autom\xe1ticamente un cierto n\xfamero de variables denominadas ",(0,n.kt)("strong",{parentName:"p"},"variables sistema"),", que responden a diferentes necesidades (ver el ",(0,n.kt)("em",{parentName:"p"},"manual de referencia del Lenguaje 4D"),"):"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error")," (entero largo): c\xf3digo de error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error method"),"(texto): nombre del m\xe9todo que ha provocado el error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error line")," (entero largo): n\xfamero de l\xednea del m\xe9todo que ha provocado el error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error formula")," (texto): f\xf3rmula del c\xf3digo 4D (texto bruto) que est\xe1 en el origen del error."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"GET LAST ERROR STACK")," que devuelve informaci\xf3n sobre la pila de errores actual de la aplicaci\xf3n 4D.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Get call chain")," que devuelve una colecci\xf3n de objetos que describen cada paso de la cadena de llamadas a m\xe9todos dentro del proceso actual."))),(0,n.kt)("h4",t({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"He aqu\xed un sistema de gesti\xf3n de errores sencillo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'//instalar el m\xe9todo de gesti\xf3n de errores\n ON ERR CALL("errorMethod")\n //... ejecutar el c\xf3digo\n ON ERR CALL("") //giving control back to 4D\n')),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'// m\xe9todo proyecto errorMethod\n If(Error#1006) //esto no es una interrupci\xf3n del usuario\n    ALERT("Se ha producido el error "+String(Error)+". El c\xf3digo en cuesti\xf3n es: \\""+Error formula+"\\"")\n End if\n')),(0,n.kt)("h3",t({},{id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo"}),"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo"),(0,n.kt)("p",null,"Si desea principalmente que la caja de di\xe1logo de error est\xe1ndar est\xe9 oculta, puede instalar un m\xe9todo de gesti\xf3n de errores vac\xedo. La variable sistema ",(0,n.kt)("inlineCode",{parentName:"p"},"Error")," puede ser probada en cualquier m\xe9todo, es decir, fuera del m\xe9todo de gesti\xf3n de errores:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\nEnd if\nON ERR CALL("")\n')))}u.isMDXComponent=!0}}]);