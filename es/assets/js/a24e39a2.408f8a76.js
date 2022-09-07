"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20507],{3905:(e,r,o)=>{o.d(r,{Zo:()=>p,kt:()=>m});var t=o(67294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||n;return o?t.createElement(f,i(i({ref:r},p),{},{components:o})):t.createElement(f,i({ref:r},p))}));function m(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=o[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},83241:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});o(67294);var t=o(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},a.apply(this,arguments)}function n(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const i={id:"overview",title:"Generalidades"},l=void 0,c={unversionedId:"Project/overview",id:"version-19-R6/Project/overview",title:"Generalidades",description:"Un proyecto 4D contiene todo el c\xf3digo fuente de una aplicaci\xf3n 4D, sin importar su tipo de despliegue (web, m\xf3vil o escritorio), de la estructura de la base de datos hasta la interfaz de usuario, incluyendo el c\xf3digo, los formularios, los men\xfas, los par\xe1metros usuario o cualquier recurso necesario. Un proyecto 4D se compone principalmente de archivos texto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Project/overview.md",sourceDirName:"Project",slug:"/Project/overview",permalink:"/documentation/es/docs/Project/overview",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"overview",title:"Generalidades"},sidebar:"docs",previous:{title:"Trabajar con un proyecto",permalink:"/documentation/es/docs/GettingStarted/creating"},next:{title:"Arquitectura de un proyecto",permalink:"/documentation/es/docs/Project/architecture"}},s={},p=[{value:"Archivos del proyecto",id:"archivos-del-proyecto",level:2},{value:"Desarrollo",id:"desarrollo",level:2},{value:"Aplicaci\xf3n final",id:"aplicaci\xf3n-final",level:2}],u={toc:p};function d(e){var{components:r}=e,o=n(e,["components"]);return(0,t.kt)("wrapper",a({},u,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Un proyecto 4D contiene todo el c\xf3digo fuente de una aplicaci\xf3n 4D, sin importar su tipo de despliegue (web, m\xf3vil o escritorio), de la estructura de la base de datos hasta la interfaz de usuario, incluyendo el c\xf3digo, los formularios, los men\xfas, los par\xe1metros usuario o cualquier recurso necesario. Un proyecto 4D se compone principalmente de archivos texto."),(0,t.kt)("h2",a({},{id:"archivos-del-proyecto"}),"Archivos del proyecto"),(0,t.kt)("p",null,"Los archivos de proyecto 4D se abren y editan con las aplicaciones est\xe1ndar de la plataforma 4D (4D o 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a Code Editor, a form editor, a menu editor..."),(0,t.kt)("p",null,"Como los proyectos se encuentran en archivos legibles, en texto plano (JSON, XML, etc.), pueden ser le\xeddos o editados manualmente por los desarrolladores, utilizando cualquier editor de c\xf3digo."),(0,t.kt)("p",null,"Adem\xe1s, los archivos de proyecto 4D facilitan la programaci\xf3n gen\xe9rica, la creaci\xf3n de plantillas de aplicaciones y el compartir c\xf3digo. Los proyectos se organizan internamente en ",(0,t.kt)("a",a({parentName:"p"},{href:"/documentation/es/docs/Project/architecture"}),"carpetas y archivos"),"."),(0,t.kt)("h2",a({},{id:"desarrollo"}),"Desarrollo"),(0,t.kt)("p",null,"Los proyectos 4D se desarrollan con la aplicaci\xf3n ",(0,t.kt)("strong",{parentName:"p"},"4D"),". Ofrece un entorno de desarrollo integrado (IDE) para los proyectos 4D, as\xed como un servidor web, un generador de proyectos para m\xf3viles y un tiempo de ejecuci\xf3n de aplicaciones, lo que permite desarrollar, probar y depurar cualquier tipo de proyecto."),(0,t.kt)("p",null,"El desarrollo multiusuario se gestiona a trav\xe9s de herramientas est\xe1ndar del repositorio de ",(0,t.kt)("strong",{parentName:"p"},"control de fuentes")," (Perforce, Git, SVN, etc.), que permiten a los desarrolladores trabajar en diferentes ramas y comparar, fusionar o revertir las modificaciones."),(0,t.kt)("h2",a({},{id:"aplicaci\xf3n-final"}),"Aplicaci\xf3n final"),(0,t.kt)("p",null,"Los archivos del proyecto pueden ser ",(0,t.kt)("a",a({parentName:"p"},{href:"/documentation/es/docs/Project/compiler"}),"compilados")," y f\xe1cilmente desplegados. 4D le permite crear tres tipos de aplicaciones a partir de sus proyectos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"las aplicaciones ",(0,t.kt)("a",a({parentName:"li"},{href:"/documentation/es/docs/WebServer/overview"}),"web"),","),(0,t.kt)("li",{parentName:"ul"},"las aplicaciones ",(0,t.kt)("a",a({parentName:"li"},{href:"https://developer.4d.com/go-mobile/"}),"m\xf3viles"),","),(0,t.kt)("li",{parentName:"ul"},"las aplicaciones ",(0,t.kt)("a",a({parentName:"li"},{href:"/documentation/es/docs/Desktop/building"}),"de escritorio")," (cliente/servidor o monopuesto).")),(0,t.kt)("p",null,"Las aplicaciones de back-end pueden desplegarse utilizando 4D Server, 4D, o ",(0,t.kt)("a",a({parentName:"p"},{href:"/documentation/es/docs/Desktop/building"}),"fusionadas con la licencia 4D Volume"),"."))}d.isMDXComponent=!0}}]);