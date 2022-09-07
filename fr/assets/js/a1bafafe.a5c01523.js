"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"overview",title:"Vue d\u2019ensemble"},u=void 0,s={unversionedId:"Backup/overview",id:"version-18/Backup/overview",title:"Vue d\u2019ensemble",description:"4D inclut un module complet de sauvegarde des bases de donn\xe9es et de r\xe9cup\xe9ration en cas d\u2019incident.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Backup/overview.md",sourceDirName:"Backup",slug:"/Backup/overview",permalink:"/documentation/fr/docs/18/Backup/overview",draft:!1,tags:[],version:"18",frontMatter:{id:"overview",title:"Vue d\u2019ensemble"},sidebar:"docs",previous:{title:"Page chiffrement",permalink:"/documentation/fr/docs/18/MSC/encrypt"},next:{title:"Sauvegarde",permalink:"/documentation/fr/docs/18/Backup/backup"}},l={},c=[],d={toc:c};function p(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4D inclut un module complet de sauvegarde des bases de donn\xe9es et de r\xe9cup\xe9ration en cas d\u2019incident."),(0,r.kt)("p",null,"Ce module permet de sauvegarder une base de donn\xe9es en cours d\u2019exploitation, sans qu\u2019il soit n\xe9cessaire de quitter l\u2019application. Chaque sauvegarde peut inclure le dossier du projet, le fichier de donn\xe9es et tout fichier ou dossier suppl\xe9mentaire. Ces param\xe8tres sont d\xe9finis au pr\xe9alable dans les Propri\xe9t\xe9s de la base."),(0,r.kt)("p",null,"Les sauvegardes peuvent \xeatre d\xe9clench\xe9es manuellement ou automatiquement, \xe0 intervalles r\xe9guliers et sans intervention de l\u2019utilisateur. Des commandes de langage ainsi que des m\xe9thodes base sp\xe9cifiques permettent d\u2019int\xe9grer les fonctions de sauvegarde \xe0 une interface personnalis\xe9e."),(0,r.kt)("p",null,"La restitution d\u2019une base de donn\xe9es apr\xe8s incident peut s\u2019effectuer automatiquement lors de l\u2019ouverture d\u2019une base endommag\xe9e."),(0,r.kt)("p",null,"En outre, le module de sauvegarde int\xe9gr\xe9 tire parti du fichier .journal (",(0,r.kt)("a",o({parentName:"p"},{href:"/documentation/fr/docs/18/Backup/log"})," d\u2019historique"),"). Ce fichier conserve une trace de chaque op\xe9ration effectu\xe9e sur les donn\xe9es et assure ainsi une s\xe9curit\xe9 totale entre deux sauvegardes. En cas d\u2019incident sur une base de donn\xe9es en cours d\u2019exploitation, les op\xe9rations \xe9ventuellement manquantes dans le fichier de donn\xe9es sont automatiquement r\xe9int\xe9gr\xe9es lors de l\u2019ouverture suivante de la base. Vous pouvez visualiser \xe0 tout moment le contenu du fichier d\u2019historique."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Vous pouvez \xe9galement mettre en place des solutions alternatives de r\xe9plication et de synchronisation des donn\xe9es permettant de maintenir des versions identiques des bases \xe0 des fins de sauvegarde. These solutions can be based on the following mechanisms and technologies:  "),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  "),(0,r.kt)("li",{parentName:"ul"},"Synchronization using SQL - Synchronization using HTTP (/rest/url)"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Consultez le document ",(0,r.kt)("a",o({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"4D Security guide")," pour une vue d'ensemble des fonctions de s\xe9curit\xe9 de 4D.")))}p.isMDXComponent=!0}}]);