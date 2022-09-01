"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54675],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,u=f["".concat(l,".").concat(d)]||f[d]||m[d]||o;return r?a.createElement(u,s(s({ref:t},c),{},{components:r})):a.createElement(u,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={id:"ZipFileClass",title:"ZIPFile"},i=void 0,l={unversionedId:"API/ZipFileClass",id:"version-19/API/ZipFileClass",title:"ZIPFile",description:"Les propri\xe9t\xe9s et fonctions suivantes de la classe File sont disponibles pour les objets ZIPFile :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/API/ZipFileClass.md",sourceDirName:"API",slug:"/API/ZipFileClass",permalink:"/docs/fr/19/API/ZipFileClass",draft:!1,tags:[],version:"19",frontMatter:{id:"ZipFileClass",title:"ZIPFile"},sidebar:"docs",previous:{title:"ZIPArchive",permalink:"/docs/fr/19/API/ZipArchiveClass"},next:{title:"ZIPFolder",permalink:"/docs/fr/19/API/ZipFolderClass"}},p={},c=[],m={toc:c};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les propri\xe9t\xe9s et fonctions suivantes de la classe ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass"}),"File")," sont disponibles pour les objets ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIPFile")," :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"API disponibles de ",(0,a.kt)("a",n({parentName:"th"},{href:"/docs/fr/19/API/FileClass"}),"File")," API des ZIPFile"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Commentaire")))),(0,a.kt)("p",null,"| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#copyto"}),(0,a.kt)("strong",{parentName:"a"},".copyTo"),"( ",(0,a.kt)("em",{parentName:"a"},"destinationFolder")," : 4D.Folder { ; ",(0,a.kt)("em",{parentName:"a"},"newName")," : Text } { ; ",(0,a.kt)("em",{parentName:"a"},"overwrite")," : Integer } ) : 4D.File"),"                   |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#creationdate"}),(0,a.kt)("strong",{parentName:"a"},".creationDate")," : Date"),"         |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#creationtime"}),(0,a.kt)("strong",{parentName:"a"},".creationTime")," : Time"),"         |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#exists"}),(0,a.kt)("strong",{parentName:"a"},".exists")," : Boolean"),"                     |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#extension"}),(0,a.kt)("strong",{parentName:"a"},".extension")," : Text"),"               |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#fullname"}),(0,a.kt)("strong",{parentName:"a"},".fullName")," : Text"),"                 |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#getcontent"}),(0,a.kt)("strong",{parentName:"a"},".getContent( )")," : Blob"),"           |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#geticon"}),(0,a.kt)("strong",{parentName:"a"},".getIcon"),"( { ",(0,a.kt)("em",{parentName:"a"},"size")," : Integer } ) : Picture"),"                 |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#gettext"}),(0,a.kt)("strong",{parentName:"a"},".getText"),"( { ",(0,a.kt)("em",{parentName:"a"},"charSetName")," : Text { ; ",(0,a.kt)("em",{parentName:"a"},"breakMode")," : Integer } } ) : Text",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".getText"),"( { ",(0,a.kt)("em",{parentName:"a"},"charSetNum")," : Integer { ; ",(0,a.kt)("em",{parentName:"a"},"breakMode")," : Integer } } ) : Text"),"                 |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#hidden"}),(0,a.kt)("strong",{parentName:"a"},".hidden")," : Boolean"),"                     |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#isalias"}),(0,a.kt)("strong",{parentName:"a"},".isAlias")," : Boolean"),"                   |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#isfile"}),(0,a.kt)("strong",{parentName:"a"},".isFile")," : Boolean"),"                     |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#isfolder"}),(0,a.kt)("strong",{parentName:"a"},".isFolder")," : Boolean"),"                 |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#iswritable"}),(0,a.kt)("strong",{parentName:"a"},".isWritable")," : Boolean"),"             | Toujours Faux avec ZIP archive         |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#modificationdate"}),(0,a.kt)("strong",{parentName:"a"},".modificationDate")," : Date")," |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#modificationtime"}),(0,a.kt)("strong",{parentName:"a"},".modificationTime")," : Time")," |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#name"}),(0,a.kt)("strong",{parentName:"a"},".name")," : Text"),"                         |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#original"}),(0,a.kt)("strong",{parentName:"a"},".original")," : 4D.File",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".original")," : 4D.Folder"),"                 |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#parent"}),(0,a.kt)("strong",{parentName:"a"},".parent")," : 4D.Folder"),"                     |                                        |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#path"}),(0,a.kt)("strong",{parentName:"a"},".path")," : Text"),"                         | Retourne un chemin relatif \xe0 l'archive |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/API/FileClass#platformpath"}),(0,a.kt)("strong",{parentName:"a"},".platformPath")," : Text"),"         |                                        |"))}f.isMDXComponent=!0}}]);