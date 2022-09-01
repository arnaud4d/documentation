"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58965],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"overview",title:"Vue d\u2019ensemble"},a=void 0,s={unversionedId:"Project/overview",id:"version-18/Project/overview",title:"Vue d\u2019ensemble",description:"Un projet 4D contient l'int\xe9gralit\xe9 du code source d'une application de base de donn\xe9es 4D, de la structure de la base de donn\xe9es \xe0 l'interface utilisateur, en passant par les formulaires, les menus, les param\xe8tres utilisateur ou n'importe quelle ressource requise. Un projet 4D est principalement constitu\xe9 de fichiers texte.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Project/overview.md",sourceDirName:"Project",slug:"/Project/overview",permalink:"/docs/fr/18/Project/overview",draft:!1,tags:[],version:"18",frontMatter:{id:"overview",title:"Vue d\u2019ensemble"},sidebar:"docs",previous:{title:"Identifiants",permalink:"/docs/fr/18/Concepts/identifiers"},next:{title:"Cr\xe9er un projet 4D",permalink:"/docs/fr/18/Project/creating"}},p={},u=[{value:"Fichiers du projet",id:"fichiers-du-projet",level:2},{value:"Contr\xf4le de la source",id:"contr\xf4le-de-la-source",level:2},{value:"Travailler avec des projets",id:"travailler-avec-des-projets",level:2}],c={toc:u};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un projet 4D contient l'int\xe9gralit\xe9 du code source d'une application de base de donn\xe9es 4D, de la structure de la base de donn\xe9es \xe0 l'interface utilisateur, en passant par les formulaires, les menus, les param\xe8tres utilisateur ou n'importe quelle ressource requise. Un projet 4D est principalement constitu\xe9 de fichiers texte."),(0,n.kt)("p",null,"Les projets 4D sont cr\xe9\xe9s et g\xe9r\xe9s \xe0 l'aide de l'application 4D Developer. Les fichiers de projet sont ensuite utilis\xe9s pour cr\xe9er les fichiers de d\xe9ploiement d'application finaux, qui peuvent \xeatre ouverts avec 4D Server ou une licence 4D Volume (applications fusionn\xe9es)."),(0,n.kt)("h2",o({},{id:"fichiers-du-projet"}),"Fichiers du projet"),(0,n.kt)("p",null,"Les fichiers de projet 4D sont ouverts et \xe9dit\xe9s \xe0 l'aide d'applications standard de la plate-forme 4D. Des \xe9diteurs complets sont disponibles pour g\xe9rer les fichiers, y compris un \xe9diteur de structure, un \xe9diteur de m\xe9thode, un \xe9diteur de formulaire, un \xe9diteur de menu, etc."),(0,n.kt)("p",null,"De plus, les projets \xe9tant des fichiers lisibles, en texte brut (JSON, XML, etc.), ils peuvent \xeatre lus ou \xe9dit\xe9s manuellement par les d\xe9veloppeurs, \xe0 l\u2019aide de n\u2019importe quel \xe9diteur de code."),(0,n.kt)("h2",o({},{id:"contr\xf4le-de-la-source"}),"Contr\xf4le de la source"),(0,n.kt)("p",null,"Les fichiers de projet 4D facilitent la programmation g\xe9n\xe9rique, la cr\xe9ation de mod\xe8les d'application et le partage de code."),(0,n.kt)("p",null,"La flexibilit\xe9 du d\xe9veloppement d'un projet 4D est particuli\xe8rement d\xe9montr\xe9e lorsque plusieurs d\xe9veloppeurs doivent travailler simultan\xe9ment sur la m\xeame partie d'une application. Les fichiers de projet 4D sont particuli\xe8rement bien adapt\xe9s pour \xeatre g\xe9r\xe9s par un syst\xe8me de ",(0,n.kt)("strong",{parentName:"p"},"contr\xf4le de version")," (Perforce, Git, SVN, etc.), permettant aux \xe9quipes de d\xe9veloppement de tirer parti de fonctionnalit\xe9s telles que :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Versioning"),(0,n.kt)("li",{parentName:"ul"},"Comparaisons de r\xe9vision"),(0,n.kt)("li",{parentName:"ul"},"Retours en arri\xe8re (Rollbacks)")),(0,n.kt)("h2",o({},{id:"travailler-avec-des-projets"}),"Travailler avec des projets"),(0,n.kt)("p",null,"Vous pouvez cr\xe9er un projet de base de donn\xe9es 4D :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"en cr\xe9ant un nouveau projet vierge - voir ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/fr/18/Project/creating"}),"Cr\xe9er un projet 4D"),"."),(0,n.kt)("li",{parentName:"ul"},'en exportant un d\xe9veloppement "binaire" 4D existant en projet -- voir "Exporter depuis une base 4D" sur ',(0,n.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com"}),"doc.4d.com"),".")),(0,n.kt)("p",null,"Le d\xe9veloppement du projet s'effectue localement, \xe0 l'aide de l'application 4D Developer - reportez-vous \xe0 la section ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/18/Project/developing"}),"D\xe9velopper un projet"),". Les interactions de d\xe9veloppement d'\xe9quipe sont g\xe9r\xe9es par un outil de contr\xf4le de version."),(0,n.kt)("p",null,"Les projets 4D peuvent \xeatre compil\xe9s et facilement d\xe9ploy\xe9s sur des applications en monoposte ou en client-serveur qui contiennent des versions compact\xe9es de votre projet - voir ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/18/Project/building"}),"Cr\xe9er un package de projet"),"."))}d.isMDXComponent=!0}}]);