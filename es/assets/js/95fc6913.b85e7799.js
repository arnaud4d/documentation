"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"overview",title:"Generalidades"},l=void 0,s={unversionedId:"Extensions/overview",id:"version-19-R6/Extensions/overview",title:"Generalidades",description:"The 4D project architecture is modular. You can provide additional functionalities to your 4D projects by installing components and plug-ins. Components are made of 4D code, while plug-ins can be built using any language.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Extensions/overview.md",sourceDirName:"Extensions",slug:"/Extensions/overview",permalink:"/documentation/es/docs/Extensions/overview",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"overview",title:"Generalidades"},sidebar:"docs",previous:{title:"Restaurar",permalink:"/documentation/es/docs/Backup/restore"},next:{title:"Comencemos",permalink:"/documentation/es/docs/ViewPro/getting-started"}},p={},d=[{value:"Componentes 4D preinstalados",id:"componentes-4d-preinstalados",level:2},{value:"Componentes de terceros",id:"componentes-de-terceros",level:2},{value:"Plugins",id:"plugins",level:2}],c={toc:d};function u(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The 4D ",(0,r.kt)("a",a({parentName:"p"},{href:"/documentation/es/docs/Project/architecture"}),"project architecture")," is modular. You can provide additional functionalities to your 4D projects by installing ",(0,r.kt)("a",a({parentName:"p"},{href:"/documentation/es/docs/Concepts/components"}),(0,r.kt)("strong",{parentName:"a"},"components"))," and ",(0,r.kt)("a",a({parentName:"p"},{href:"Concepts/plug-ins"}),(0,r.kt)("strong",{parentName:"a"},"plug-ins")),". Components are made of 4D code, while plug-ins can be built using any language."),(0,r.kt)("h2",a({},{id:"componentes-4d-preinstalados"}),"Componentes 4D preinstalados"),(0,r.kt)("p",null,"4D includes by default a set of built-in 4D components, that you can see in the ",(0,r.kt)("strong",{parentName:"p"},"Component Methods")," theme of the Explorer's Methods page."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Nombre del componente"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Principales funcionalidades"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"4D Labels"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Componente interno necesario para la creaci\xf3n de plantillas de etiquetas"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://github.com/4d-go-mobile/4D-Mobile-App-Server"}),"4D Mobile App Server")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Conjunto de clases y funciones utilitarias para autenticar, gestionar sesiones y desarrollar aplicaciones m\xf3viles"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},".Action"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".Authentication"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".PushNotification"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".WebHandler"),", Authentication with email confirmation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://github.com/4d/4D-NetKit"}),"4D NetKit")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Conjunto de herramientas para conectarse a las API de terceros"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"OAuth2Provider")," class, ",(0,r.kt)("inlineCode",{parentName:"td"},"New OAuth2 provider"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"OAuth2ProviderObject.getToken()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://doc.4d.com/4Dv19/4D/19/4D-Progress.100-5461799.en.html"}),"4D Progress")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Abrir una o varias barras de progreso en la misma ventana"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Progress New"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Progress SET ON STOP METHOD"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Progress SET PROGRESS"),", ...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://doc.4d.com/4Dv19/4D/19/4D-SVG-Component.300-5462064.en.html"}),"4D SVG")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Crear y manipular objetos gr\xe1ficos svg comunes"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"SVGTool_Display_viewer"),", multiple ",(0,r.kt)("inlineCode",{parentName:"td"},"SVG_")," methods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/documentation/es/docs/ViewPro/getting-started"}),"4D ViewPro")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Funciones de hoja de c\xe1lculo en sus formularios"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Ver la ",(0,r.kt)("a",a({parentName:"td"},{href:"/documentation/es/docs/ViewPro/getting-started"}),"documentaci\xf3n 4D View Pro"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html"}),"4D Widgets")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Gestione los widgets DatePicker, TimePicker, SearchPicker 4D"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"DatePicker calendar"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DateEntry area"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"TimeEntry"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"SearchPicker SET HELP TEXT"),", ...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://github.com/4d/4D-WritePro-Interface"}),"Interfaz 4D WritePro")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Manage ",(0,r.kt)("a",a({parentName:"td"},{href:"https://doc.4d.com/4Dv19R3/4D/19-R3/4D-Write-Pro-Reference.100-5606477.en.html"}),"4D Write Pro")," palettes"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WP CreatePreview"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WP PictureSettings"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WP ShowTabPages"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WP SwitchToolbar"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WP UpdateWidget"))))),(0,r.kt)("h2",a({},{id:"componentes-de-terceros"}),"Componentes de terceros"),(0,r.kt)("p",null,"Puede desarrollar e instalar sus propios componentes 4D. See ",(0,r.kt)("a",a({parentName:"p"},{href:"/documentation/es/docs/Extensions/develop-components"}),"this page")," for more information."),(0,r.kt)("p",null,"Many developers from the 4D community have shared 4D components that you can install and use in you projects."),(0,r.kt)("p",null,"Browse Github to have a list of public 4D components gathered with the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/topics/4d-component"}),(0,r.kt)("inlineCode",{parentName:"a"},"4d-component"))," topic."),(0,r.kt)("h2",a({},{id:"plugins"}),"Plugins"),(0,r.kt)("p",null,"Plugins do things that 4D does not natively (e.g., specific platform technology), or would be very hard to write just using 4D. As described in ",(0,r.kt)("a",a({parentName:"p"},{href:"/documentation/es/docs/Extensions/develop-plug-ins"}),"this page"),", you can develop your own plug-ins."),(0,r.kt)("p",null,"Muchas funcionalidades est\xe1n cubiertas por los plug-ins 4D existentes. Browse Github to have a list of public 4D plugins gathered with the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/topics/4d-plugin"}),(0,r.kt)("inlineCode",{parentName:"a"},"4d-plugin"))," topic."))}u.isMDXComponent=!0}}]);