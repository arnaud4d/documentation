"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51384],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=s(a),c=r,N=k["".concat(p,".").concat(c)]||k[c]||d[c]||l;return a?n.createElement(N,o(o({ref:e},m),{},{components:a})):n.createElement(N,o({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8753:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>m});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"ZipFileClass",title:"ZIPFile"},i=void 0,p={unversionedId:"API/ZipFileClass",id:"API/ZipFileClass",title:"ZIPFile",description:"The following properties and functions from the File class are available to ZIPFile objects:",source:"@site/docs/API/ZipFileClass.md",sourceDirName:"API",slug:"/API/ZipFileClass",permalink:"/docs/next/API/ZipFileClass",draft:!1,tags:[],version:"current",frontMatter:{id:"ZipFileClass",title:"ZIPFile"},sidebar:"docs",previous:{title:"ZIPArchive",permalink:"/docs/next/API/ZipArchiveClass"},next:{title:"ZIPFolder",permalink:"/docs/next/API/ZipFolderClass"}},s={},m=[],d={toc:m};function k(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The following properties and functions from the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/next/API/FileClass"}),"File")," class are available to ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIPFile")," objects:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Available ",(0,n.kt)("a",r({parentName:"th"},{href:"/docs/next/API/FileClass"}),"File")," APIs for ZIPFile"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#copyto"}),(0,n.kt)("strong",{parentName:"a"},".copyTo"),"( ",(0,n.kt)("em",{parentName:"a"},"destinationFolder")," : 4D.Folder { ; ",(0,n.kt)("em",{parentName:"a"},"newName")," : Text } { ; ",(0,n.kt)("em",{parentName:"a"},"overwrite")," : Integer } ) : 4D.File")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#creationdate"}),(0,n.kt)("strong",{parentName:"a"},".creationDate")," : Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#creationtime"}),(0,n.kt)("strong",{parentName:"a"},".creationTime")," : Time")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#exists"}),(0,n.kt)("strong",{parentName:"a"},".exists")," : Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#extension"}),(0,n.kt)("strong",{parentName:"a"},".extension")," : Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#fullname"}),(0,n.kt)("strong",{parentName:"a"},".fullName")," : Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#getcontent"}),(0,n.kt)("strong",{parentName:"a"},".getContent( )")," : 4D.Blob")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#geticon"}),(0,n.kt)("strong",{parentName:"a"},".getIcon"),"( { ",(0,n.kt)("em",{parentName:"a"},"size")," : Integer } ) : Picture")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#gettext"}),(0,n.kt)("strong",{parentName:"a"},".getText"),"( { ",(0,n.kt)("em",{parentName:"a"},"charSetName")," : Text { ; ",(0,n.kt)("em",{parentName:"a"},"breakMode")," : Integer } } ) : Text",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"a"},".getText"),"( { ",(0,n.kt)("em",{parentName:"a"},"charSetNum")," : Integer { ; ",(0,n.kt)("em",{parentName:"a"},"breakMode")," : Integer } } ) : Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#hidden"}),(0,n.kt)("strong",{parentName:"a"},".hidden")," : Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#isalias"}),(0,n.kt)("strong",{parentName:"a"},".isAlias")," : Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#isfile"}),(0,n.kt)("strong",{parentName:"a"},".isFile")," : Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#isfolder"}),(0,n.kt)("strong",{parentName:"a"},".isFolder")," : Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#iswritable"}),(0,n.kt)("strong",{parentName:"a"},".isWritable")," : Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Always false with ZIP archive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#modificationdate"}),(0,n.kt)("strong",{parentName:"a"},".modificationDate")," : Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#modificationtime"}),(0,n.kt)("strong",{parentName:"a"},".modificationTime")," : Time")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#name"}),(0,n.kt)("strong",{parentName:"a"},".name")," : Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#original"}),(0,n.kt)("strong",{parentName:"a"},".original")," : 4D.File",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"a"},".original")," : 4D.Folder")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#parent"}),(0,n.kt)("strong",{parentName:"a"},".parent")," : 4D.Folder")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#path"}),(0,n.kt)("strong",{parentName:"a"},".path")," : Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Returns a path relative to the archive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/next/API/FileClass#platformpath"}),(0,n.kt)("strong",{parentName:"a"},".platformPath")," : Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))))))}k.isMDXComponent=!0}}]);