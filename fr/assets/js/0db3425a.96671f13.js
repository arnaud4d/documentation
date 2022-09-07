"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86389],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),s=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return t?a.createElement(m,l(l({ref:r},c),{},{components:t})):a.createElement(m,l({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54308:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});t(67294);var a=t(3905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={id:"backup",title:"Page Sauvegarde",sidebar_label:"Page Sauvegarde"},i=void 0,u={unversionedId:"MSC/backup",id:"version-19/MSC/backup",title:"Page Sauvegarde",description:"La page Sauvegarde du CSM permet de visualiser les param\xe8tres de sauvegarde de la base et de lancer une sauvegarde manuelle :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/MSC/backup.md",sourceDirName:"MSC",slug:"/MSC/backup",permalink:"/documentation/fr/docs/19/MSC/backup",draft:!1,tags:[],version:"19",frontMatter:{id:"backup",title:"Page Sauvegarde",sidebar_label:"Page Sauvegarde"},sidebar:"docs",previous:{title:"Page V\xe9rification",permalink:"/documentation/fr/docs/19/MSC/verify"},next:{title:"Page compactage",permalink:"/documentation/fr/docs/19/MSC/compact"}},s={},c=[],p={toc:c};function d(e){var{components:r}=e,l=o(e,["components"]);return(0,a.kt)("wrapper",n({},p,l,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"La page Sauvegarde du CSM permet de visualiser les param\xe8tres de sauvegarde de la base et de lancer une sauvegarde manuelle :"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(69385).Z,width:"882",height:"666"})),(0,a.kt)("p",null,"Cette page est constitu\xe9e des zones suivantes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Emplacement du fichier de sauvegarde")," : affiche les informations relatives \xe0 l\u2019emplacement du fichier de sauvegarde de l'application. Elle indique \xe9galement l\u2019espace occup\xe9 et l\u2019espace disponible sur le volume de sauvegarde."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Informations sur la derni\xe8re sauvegarde")," : fournit la date et l\u2019heure de la derni\xe8re sauvegarde (automatique ou manuelle) r\xe9alis\xe9e sur l'application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Contenu du fichier de sauvegarde")," : liste les fichiers et dossiers inclus dans le fichier de sauvegarde.")),(0,a.kt)("p",null,"Le bouton ",(0,a.kt)("strong",{parentName:"p"},"Sauvegarde")," permet de lancer une sauvegarde manuelle."),(0,a.kt)("p",null,"Cette page ne permet pas de modifier les param\xe8tres de sauvegarde. Pour cela, vous devez cliquer sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"Propri\xe9t\xe9s de la base..."),"."))}d.isMDXComponent=!0},69385:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/msc_Backup-ad82859e54a1f47aa0a79bd9cf75adb4.png"}}]);