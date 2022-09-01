"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74726],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),s=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return o.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?o.createElement(m,i(i({ref:r},p),{},{components:t})):o.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},47724:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});t(67294);var o=t(3905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},n.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const i={id:"overview",title:"Generalidades"},l=void 0,c={unversionedId:"Project/overview",id:"Project/overview",title:"Generalidades",description:"A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. Un proyecto 4D se compone principalmente de archivos texto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Project/overview.md",sourceDirName:"Project",slug:"/Project/overview",permalink:"/docs/es/next/Project/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Generalidades"},sidebar:"docs",previous:{title:"Trabajar con un proyecto",permalink:"/docs/es/next/GettingStarted/creating"},next:{title:"Arquitectura de un proyecto",permalink:"/docs/es/next/Project/architecture"}},s={},p=[{value:"Archivos del proyecto",id:"archivos-del-proyecto",level:2},{value:"Desarrollo",id:"desarrollo",level:2},{value:"Aplicaci\xf3n final",id:"aplicaci\xf3n-final",level:2}],d={toc:p};function u(e){var{components:r}=e,t=a(e,["components"]);return(0,o.kt)("wrapper",n({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. Un proyecto 4D se compone principalmente de archivos texto."),(0,o.kt)("h2",n({},{id:"archivos-del-proyecto"}),"Archivos del proyecto"),(0,o.kt)("p",null,"Los archivos de proyecto 4D se abren y editan con las aplicaciones est\xe1ndar de la plataforma 4D (4D o 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a Code Editor, a form editor, a menu editor..."),(0,o.kt)("p",null,"Como los proyectos se encuentran en archivos legibles, en texto plano (JSON, XML, etc.), pueden ser le\xeddos o editados manualmente por los desarrolladores, utilizando cualquier editor de c\xf3digo."),(0,o.kt)("p",null,"Adem\xe1s, los archivos de proyecto 4D facilitan la programaci\xf3n gen\xe9rica, la creaci\xf3n de plantillas de aplicaciones y el compartir c\xf3digo. Los proyectos se organizan internamente en ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/next/Project/architecture"}),"carpetas y archivos"),"."),(0,o.kt)("h2",n({},{id:"desarrollo"}),"Desarrollo"),(0,o.kt)("p",null,"Los proyectos 4D se desarrollan con la aplicaci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"4D"),". It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project."),(0,o.kt)("p",null,"El desarrollo multiusuario se gestiona a trav\xe9s de herramientas est\xe1ndar del repositorio de ",(0,o.kt)("strong",{parentName:"p"},"control de fuentes")," (Perforce, Git, SVN, etc.), que permiten a los desarrolladores trabajar en diferentes ramas y comparar, fusionar o revertir las modificaciones."),(0,o.kt)("h2",n({},{id:"aplicaci\xf3n-final"}),"Aplicaci\xf3n final"),(0,o.kt)("p",null,"Los archivos del proyecto pueden ser ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/next/Project/compiler"}),"compilados")," y f\xe1cilmente desplegados. 4D le permite crear tres tipos de aplicaciones a partir de sus proyectos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"las aplicaciones ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/es/next/WebServer/overview"}),"web"),","),(0,o.kt)("li",{parentName:"ul"},"las aplicaciones ",(0,o.kt)("a",n({parentName:"li"},{href:"https://developer.4d.com/go-mobile/"}),"m\xf3viles"),","),(0,o.kt)("li",{parentName:"ul"},"las aplicaciones ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/es/next/Desktop/building"}),"de escritorio")," (cliente/servidor o monopuesto).")),(0,o.kt)("p",null,"Las aplicaciones de back-end pueden desplegarse utilizando 4D Server, 4D, o ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/next/Desktop/building"}),"fusionadas con la licencia 4D Volume"),"."))}u.isMDXComponent=!0}}]);