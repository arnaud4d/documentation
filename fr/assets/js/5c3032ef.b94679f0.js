"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47128],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=p(t),m=n,u=f["".concat(i,".").concat(m)]||f[m]||c[m]||o;return t?a.createElement(u,s(s({ref:r},d),{},{components:t})):a.createElement(u,s({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},91974:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>d});t(67294);var a=t(3905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const s={id:"ZipFolderClass",title:"ZIPFolder"},l=void 0,i={unversionedId:"API/ZipFolderClass",id:"version-19-R6/API/ZipFolderClass",title:"ZIPFolder",description:"Les propri\xe9t\xe9s et fonctions suivantes de la classe Folder sont disponibles pour les objets ZIPFolder :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/API/ZipFolderClass.md",sourceDirName:"API",slug:"/API/ZipFolderClass",permalink:"/docs/fr/API/ZipFolderClass",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"ZipFolderClass",title:"ZIPFolder"},sidebar:"docs",previous:{title:"ZIPFile",permalink:"/docs/fr/API/ZipFileClass"},next:{title:"\xc0 propos du code 4D",permalink:"/docs/fr/code-editor/overview"}},p={},d=[],c={toc:d};function f(e){var{components:r}=e,t=o(e,["components"]);return(0,a.kt)("wrapper",n({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les propri\xe9t\xe9s et fonctions suivantes de la classe ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass"}),"Folder")," sont disponibles pour les objets ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIPFolder")," :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"API disponibles de ",(0,a.kt)("a",n({parentName:"th"},{href:"/docs/fr/API/FolderClass"}),"Folder")," API des ZIPFolder"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Commentaire")))),(0,a.kt)("p",null,"| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#copyto"}),(0,a.kt)("strong",{parentName:"a"},".copyTo"),"( ",(0,a.kt)("em",{parentName:"a"},"destinationFolder")," : 4D.Folder { ; ",(0,a.kt)("em",{parentName:"a"},"newName")," : Text } { ; ",(0,a.kt)("em",{parentName:"a"},"overwrite")," : Integer } ) : 4D Folder"),"                   |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#creationdate"}),(0,a.kt)("strong",{parentName:"a"},".creationDate")," : Date"),"         | La date du dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"racine")," peut \xeatre diff\xe9rente de celle du dossier de l'archive.                                                            |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#creationtime"}),(0,a.kt)("strong",{parentName:"a"},".creationTime")," : Time"),"         | L'heure du dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"racine")," peut \xeatre diff\xe9rente de celle du dossier de l'archive.                                                            |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#exists"}),(0,a.kt)("strong",{parentName:"a"},".exists")," : Boolean"),"                     |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#extension"}),(0,a.kt)("strong",{parentName:"a"},".extension")," : Text"),"               |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#file"}),(0,a.kt)("strong",{parentName:"a"},".file"),"( ",(0,a.kt)("em",{parentName:"a"},"path")," : Text ) : 4D.File"),"                       |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#files"}),(0,a.kt)("strong",{parentName:"a"},".files"),"( { ",(0,a.kt)("em",{parentName:"a"},"options")," : Integer } ) : Collection"),"                     |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#folder"}),(0,a.kt)("strong",{parentName:"a"},".folder"),"( ",(0,a.kt)("em",{parentName:"a"},"path")," : Text ) : 4D.Folder"),"                   |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#folders"}),(0,a.kt)("strong",{parentName:"a"},".folders"),"( { ",(0,a.kt)("em",{parentName:"a"},"options")," : Integer } ) : Collection"),"                 |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#fullname"}),(0,a.kt)("strong",{parentName:"a"},".fullName")," : Text"),"                 |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#geticon"}),(0,a.kt)("strong",{parentName:"a"},".getIcon"),"( { ",(0,a.kt)("em",{parentName:"a"},"size")," : Integer } ) : Picture"),"                 |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#hidden"}),(0,a.kt)("strong",{parentName:"a"},".hidden")," : Boolean"),"                     |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#isalias"}),(0,a.kt)("strong",{parentName:"a"},".isAlias")," : Boolean"),"                   |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#isfile"}),(0,a.kt)("strong",{parentName:"a"},".isFile")," : Boolean"),"                     |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#isfolder"}),(0,a.kt)("strong",{parentName:"a"},".isFolder")," : Boolean"),"                 |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#ispackage"}),(0,a.kt)("strong",{parentName:"a"},".isPackage")," : Boolean"),"               |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#modificationdate"}),(0,a.kt)("strong",{parentName:"a"},".modificationDate")," : Date")," | La date du dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"racine")," peut \xeatre diff\xe9rente de celle du dossier de l'archive.                                                            |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#modificationtime"}),(0,a.kt)("strong",{parentName:"a"},".modificationTime")," : Time")," | L'heure du dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"racine")," peut \xeatre diff\xe9rente de celle du dossier de l'archive.                                                            |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#name"}),(0,a.kt)("strong",{parentName:"a"},".name")," : Text"),"                         |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#original"}),(0,a.kt)("strong",{parentName:"a"},".original")," : 4D.Folder"),"                 |                                                                                                                                               |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#parent"}),(0,a.kt)("strong",{parentName:"a"},".parent")," : 4D.Folder"),"                     | Le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"racine")," virtuel de l'archive n'a pas de parent. Cependant, les dossiers de l'archive peuvent avoir un parent autre que la racine. |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#path"}),(0,a.kt)("strong",{parentName:"a"},".path")," : Text"),"                         | Retourne un chemin relatif \xe0 l'archive                                                                                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/API/FolderClass#platformpath"}),(0,a.kt)("strong",{parentName:"a"},".platformPath")," : Text"),"         |                                                                                                                                               |"))}f.isMDXComponent=!0}}]);