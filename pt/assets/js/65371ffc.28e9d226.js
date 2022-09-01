"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=i(r),f=n,h=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return r?a.createElement(h,l(l({ref:t},d),{},{components:r})):a.createElement(h,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={id:"ZipFolderClass",title:"ZIPFolder"},p=void 0,s={unversionedId:"API/ZipFolderClass",id:"version-19-R6/API/ZipFolderClass",title:"ZIPFolder",description:"The following properties and functions from the Folder class are available to ZIPFolder objects:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/API/ZipFolderClass.md",sourceDirName:"API",slug:"/API/ZipFolderClass",permalink:"/docs/pt/API/ZipFolderClass",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"ZipFolderClass",title:"ZIPFolder"},sidebar:"docs",previous:{title:"ZIPFile",permalink:"/docs/pt/API/ZipFileClass"},next:{title:"About 4D Code",permalink:"/docs/pt/code-editor/overview"}},i={},d=[],c={toc:d};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following properties and functions from the ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass"}),"Folder")," class are available to ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIPFolder")," objects:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Available ",(0,a.kt)("a",n({parentName:"th"},{href:"/docs/pt/API/FolderClass"}),"Folder")," APIs for ZIPFolder"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Coment\xe1rio")))),(0,a.kt)("p",null,"| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#copyto"}),(0,a.kt)("strong",{parentName:"a"},".copyTo"),"( ",(0,a.kt)("em",{parentName:"a"},"destinationFolder")," : 4D. Folder { ; ",(0,a.kt)("em",{parentName:"a"},"newName")," : Text } { ; ",(0,a.kt)("em",{parentName:"a"},"overwrite")," : Integer } ) : 4D Folder"),"                   |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#creationdate"}),(0,a.kt)("strong",{parentName:"a"},".creationDate")," : Date"),"         | Date may be different for the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," folder from a folder within the archive                                                      |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#creationtime"}),(0,a.kt)("strong",{parentName:"a"},".creationTime")," : Time"),"         | Time may be different for the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," folder from a folder within the archive                                                      |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#exists"}),(0,a.kt)("strong",{parentName:"a"},".exists")," : Boolean"),"                     |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#extension"}),(0,a.kt)("strong",{parentName:"a"},".extension")," : Text"),"               |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#file"}),(0,a.kt)("strong",{parentName:"a"},".file"),"( ",(0,a.kt)("em",{parentName:"a"},"path")," : Text ) : 4D. File"),"                       |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#files"}),(0,a.kt)("strong",{parentName:"a"},".files"),"( { ",(0,a.kt)("em",{parentName:"a"},"options")," : Integer } ) : Collection"),"                     |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#folder"}),(0,a.kt)("strong",{parentName:"a"},".folder"),"( ",(0,a.kt)("em",{parentName:"a"},"path")," : Text ) : 4D. Folder"),"                   |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#folders"}),(0,a.kt)("strong",{parentName:"a"},".folders"),"( { ",(0,a.kt)("em",{parentName:"a"},"options")," : Integer } ) : Collection"),"                 |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#fullname"}),(0,a.kt)("strong",{parentName:"a"},".fullName")," : Text"),"                 |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#geticon"}),(0,a.kt)("strong",{parentName:"a"},".getIcon"),"( { ",(0,a.kt)("em",{parentName:"a"},"size")," : Integer } ) : Picture"),"                 |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#hidden"}),(0,a.kt)("strong",{parentName:"a"},".hidden")," : Boolean"),"                     |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#isalias"}),(0,a.kt)("strong",{parentName:"a"},".isAlias")," : Boolean"),"                   |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#isfile"}),(0,a.kt)("strong",{parentName:"a"},".isFile")," : Boolean"),"                     |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#isfolder"}),(0,a.kt)("strong",{parentName:"a"},".isFolder")," : Boolean"),"                 |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#ispackage"}),(0,a.kt)("strong",{parentName:"a"},".isPackage")," : Boolean"),"               |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#modificationdate"}),(0,a.kt)("strong",{parentName:"a"},".modificationDate")," : Date")," | Date may be different for the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," folder from a folder within the archive                                                      |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#modificationtime"}),(0,a.kt)("strong",{parentName:"a"},".modificationTime")," : Time")," | Time may be different for the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," folder from a folder within the archive                                                      |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#name"}),(0,a.kt)("strong",{parentName:"a"},".name")," : Text"),"                         |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#original"}),(0,a.kt)("strong",{parentName:"a"},".original")," : 4D. Folder"),"                 |                                                                                                                                   |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#parent"}),(0,a.kt)("strong",{parentName:"a"},".parent")," : 4D. Folder"),"                     | The archive's virtual ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," folder has no parent. However, the folders within the archive may have a parent other than the root. |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#path"}),(0,a.kt)("strong",{parentName:"a"},".path")," : Text"),"                         | Returns a path relative to the archive                                                                                            |\n| ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/FolderClass#platformpath"}),(0,a.kt)("strong",{parentName:"a"},".platformPath")," : Text"),"         |                                                                                                                                   |"))}m.isMDXComponent=!0}}]);