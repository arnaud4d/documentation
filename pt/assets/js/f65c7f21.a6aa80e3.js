"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97642],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),i=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=i(a),s=r,N=u["".concat(d,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(N,o(o({ref:e},m),{},{components:a})):n.createElement(N,o({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75642:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>m});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"FolderClass",title:"Folder"},p=void 0,d={unversionedId:"API/FolderClass",id:"version-19/API/FolderClass",title:"Folder",description:"Folder objects are created with the Folder command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the Folder command to create a new folder, a valid Folder object is created but nothing is actually stored on disk until you call the folder.create( ) function.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/API/FolderClass.md",sourceDirName:"API",slug:"/API/FolderClass",permalink:"/docs/pt/19/API/FolderClass",draft:!1,tags:[],version:"19",frontMatter:{id:"FolderClass",title:"Folder"},sidebar:"docs",previous:{title:"File",permalink:"/docs/pt/19/API/FileClass"},next:{title:"Formula",permalink:"/docs/pt/19/API/FunctionClass"}},i={},m=[{value:"Example",id:"example",level:3},{value:"Folder object",id:"folder-object",level:3},{value:"Folder",id:"folder",level:2},{value:"Description",id:"description",level:4},{value:"4D.Folder.new()",id:"4dfoldernew",level:2},{value:"Description",id:"description-1",level:4},{value:".create()",id:"create",level:2},{value:"Description",id:"description-2",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:".createAlias()",id:"createalias",level:2},{value:"Description",id:"description-3",level:4},{value:"Example",id:"example-3",level:4},{value:".delete()",id:"delete",level:2},{value:"Description",id:"description-4",level:4},{value:".moveTo()",id:"moveto",level:2},{value:"Description",id:"description-5",level:4},{value:"Example",id:"example-4",level:4},{value:".rename()",id:"rename",level:2},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example-5",level:4}],k={toc:m};function u(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Folder")," objects are created with the ",(0,n.kt)("a",r({parentName:"p"},{href:"#folder"}),(0,n.kt)("inlineCode",{parentName:"a"},"Folder"))," command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"Folder")," command to create a new folder, a valid ",(0,n.kt)("inlineCode",{parentName:"p"},"Folder")," object is created but nothing is actually stored on disk until you call the ",(0,n.kt)("a",r({parentName:"p"},{href:"#create-"}),(0,n.kt)("inlineCode",{parentName:"a"},"folder.create( )"))," function."),(0,n.kt)("h3",r({},{id:"example"}),"Example"),(0,n.kt)("p",null,'The following example creates a "JohnSmith" folder:'),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-code4d"}),'Form.curfolder:=Folder(fk database folder)\nForm.curfolder:=Folder("C:\\\\Users\\\\JohnSmith\\\\";fk platform path)\n')),(0,n.kt)("h3",r({},{id:"folder-object"}),"Folder object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#copyto"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#create"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#createalias"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#creationdate"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#creationtime"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#delete"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#exists"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#extension"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#file"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#files"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#folder"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#folders"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#fullname"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#geticon"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#hidden"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#isalias"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#isfile"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#isfolder"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#ispackage"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#modificationdate"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#modificationtime"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#name"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#original"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#parent"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#path"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#platformpath"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#moveto"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#rename"})),"\xa0","\xa0","\xa0","\xa0")))),(0,n.kt)("h2",r({},{id:"folder"}),"Folder"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Folder")," ( ",(0,n.kt)("em",{parentName:"p"},"path")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"pathType")," : Integer }{ ; *","*",(0,n.kt)("em",{parentName:"p"}," } ) : 4D.Folder",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"em"},"Folder")," ( "),"folderConstant",(0,n.kt)("em",{parentName:"p"}," : Integer { ; "),"*","* } ) : 4D.Folder"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Folder path")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"folderConstant"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D folder constant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"pathType"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"fk posix path")," (default) or ",(0,n.kt)("inlineCode",{parentName:"td"},"fk platform path"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"*"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"* to return folder of host database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.Folder"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"New folder object")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Folder")," command ","creates and returns a new object of the ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.Folder")," type",". The command accepts two syntaxes:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Folder ( path { ; pathType } { ; ","*"," } )")),(0,n.kt)("p",null,"In the ",(0,n.kt)("em",{parentName:"p"},"path"),' parameter, pass a folder path string. You can use a custom string or a filesystem (e.g., "/DATA").'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Only absolute pathnames are supported with the ",(0,n.kt)("inlineCode",{parentName:"p"},"Folder")," command.")),(0,n.kt)("p",null,"By default, 4D expects a path expressed with the POSIX syntax. If you work with platform pathnames (Windows or macOS), you must declare it using the ",(0,n.kt)("em",{parentName:"p"},"pathType")," parameter. The following constants are available:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constant"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk platform path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Path expressed with a platform-specific syntax (mandatory in case of platform pathname)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk posix path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Path expressed with POSIX syntax (default)")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Folder ( folderConstant { ; ","*"," } )")),(0,n.kt)("p",null,"In the ",(0,n.kt)("em",{parentName:"p"},"folderConstant")," parameter, pass a 4D built-in or system folder, using one of the following constants:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constant"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk applications folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"116"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk data folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"9"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Associated filesystem: "/DATA"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk database folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Associated filesystem: "/PACKAGE"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk desktop folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"115"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk documents folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"117"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Document folder of the user")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk licenses folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Folder containing the machine's 4D license files")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk logs folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Associated filesystem: "/LOGS"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk mobileApps folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk remote database folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D database folder created on each 4D remote machine")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk resources folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Associated filesystem: "/RESOURCES"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk system folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"100"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk user preferences folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D folder that stores user preference files within the ",(0,n.kt)("inlineCode",{parentName:"td"},"\\<userName>")," directory.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fk web root folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"8"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Current Web root folder of the database: if within the package "/PACKAGE/path", otherwise full path')))),(0,n.kt)("p",null,"If the command is called from a component, pass the optional ",(0,n.kt)("em",{parentName:"p"},"parameter to get the path of the host database. Otherwise, if you omit the")," parameter, a null object is always returned."),(0,n.kt)("h2",r({},{id:"4dfoldernew"}),"4D.Folder.new()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4D.Folder.new")," ( ",(0,n.kt)("em",{parentName:"p"},"path")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"pathType")," : Integer }{ ; *","*",(0,n.kt)("em",{parentName:"p"}," } ) : 4D.Folder",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"em"},"4D.Folder.new")," ( "),"folderConstant",(0,n.kt)("em",{parentName:"p"}," : Integer { ; "),"*","* } ) : 4D.Folder"),(0,n.kt)("h4",r({},{id:"description-1"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.Folder.new()")," function ","creates and returns a new object of the ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.Folder")," type",". It is identical to the ",(0,n.kt)("a",r({parentName:"p"},{href:"#folder"}),(0,n.kt)("inlineCode",{parentName:"a"},"Folder"))," command (shortcut)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is recommended to use the ",(0,n.kt)("a",r({parentName:"p"},{href:"#folder"}),(0,n.kt)("inlineCode",{parentName:"a"},"Folder"))," shortcut command instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.Folder.new()"),".")),(0,n.kt)("h2",r({},{id:"create"}),".create()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".create()")," : Boolean"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True if the folder was created successfully, false otherwise")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"description-2"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".create()")," function ","creates a folder on disk according to the properties of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Folder")," object","."),(0,n.kt)("p",null,"If necessary, the function creates the folder hierachy as described in the ",(0,n.kt)("a",r({parentName:"p"},{href:"#platformpath"}),"platformPath")," or ",(0,n.kt)("a",r({parentName:"p"},{href:"#path"}),"path")," properties. If the folder already exists on disk, the function does nothing (no error is thrown) and returns false."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"True")," if the folder is created successfully;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"False")," if a folder with the same name already exists or if an error occured.")),(0,n.kt)("h4",r({},{id:"example-1"}),"Example 1"),(0,n.kt)("p",null,"Create an empty folder in the database folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $created : Boolean\n$created:=Folder("/PACKAGE/SpecialPrefs").create()\n')),(0,n.kt)("h4",r({},{id:"example-2"}),"Example 2"),(0,n.kt)("p",null,'Creation of the "/Archives2019/January/" folder in the database folder:'),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$newFolder:=Folder("/PACKAGE/Archives2019/January")\nIf($newFolder.create())\n ALERT("The "+$newFolder.name+" folder was created.")\nElse\n ALERT("Impossible to create a "+$newFolder.name+" folder.")\nEnd if\n')),(0,n.kt)("h2",r({},{id:"createalias"}),".createAlias()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".createAlias"),"( ",(0,n.kt)("em",{parentName:"p"},"destinationFolder")," : 4D.Folder ; ",(0,n.kt)("em",{parentName:"p"},"aliasName")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"aliasType")," : Integer } ) : 4D.File"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"destinationFolder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.Folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Destination folder for the alias or shortcut")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"aliasName"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Name of the alias or shortcut")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"aliasType"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Type of the alias link")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.File"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Alias or shortcut reference")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"description-3"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".createAlias()")," function ","creates an alias (macOS) or a shortcut (Windows)"," to the folder with the specified ",(0,n.kt)("em",{parentName:"p"},"aliasName")," name in the folder designated by the ",(0,n.kt)("em",{parentName:"p"},"destinationFolder")," object."),(0,n.kt)("p",null,"Pass the name of the alias or shortcut to create in the ",(0,n.kt)("em",{parentName:"p"},"aliasName")," parameter."),(0,n.kt)("p",null,"By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the ",(0,n.kt)("em",{parentName:"p"},"aliasType")," parameter. The following constants are available:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constant"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"fk alias link")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Alias link (default)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"fk symbolic link")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Symbolic link (macOS only)")))),(0,n.kt)("p",null,"On Windows, a shortcut (.lnk file) is always created (the ",(0,n.kt)("em",{parentName:"p"},"aliasType")," parameter is ignored)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned object")),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.File")," object with the ",(0,n.kt)("inlineCode",{parentName:"p"},"isAlias")," property set to ",(0,n.kt)("strong",{parentName:"p"},"true"),"."),(0,n.kt)("h4",r({},{id:"example-3"}),"Example"),(0,n.kt)("p",null,"You want to create an alias to an archive folder in your database folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$myFolder:=Folder("C:\\\\Documents\\\\Archives\\\\2019\\\\January";fk platform path)\n$aliasFile:=$myFolder.createAlias(Folder("/PACKAGE");"Jan2019")\n')),(0,n.kt)("h2",r({},{id:"delete"}),".delete()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".delete"),"( { ",(0,n.kt)("em",{parentName:"p"},"option")," : Integer } )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Folder deletion option")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"description-4"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".delete()")," function ","deletes the folder","."),(0,n.kt)("p",null,"By default, for security reasons, if you omit the option parameter, ",(0,n.kt)("inlineCode",{parentName:"p"},".delete( )")," only allows empty folders to be deleted. If you want the command to be able to delete folders that are not empty, you must use the option parameter with one of the following constants:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constant"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Delete only if empty")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Deletes folder only when it is empty")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Delete with contents")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Deletes folder along with everything it contains")))),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete only if empty")," is passed or if you omit the option parameter:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The folder is only deleted if it is empty; otherwise, the command does nothing and an error -47 is generated."),(0,n.kt)("li",{parentName:"ul"},"If the folder does not exist, the error -120 is generated.")),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete with contents")," is passed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The folder, along with all of its contents, is deleted. ",(0,n.kt)("strong",{parentName:"li"},"Warning"),": Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, the folder (and contents) is still deleted."),(0,n.kt)("li",{parentName:"ul"},"If this folder, or any of the files it contains, cannot be deleted, deletion is aborted as soon as the first inaccessible element is detected, and an error(*) is returned. In this case, the folder may be only partially deleted. When deletion is aborted, you can use the ",(0,n.kt)("inlineCode",{parentName:"li"},"GET LAST ERROR STACK")," command to retrieve the name and path of the offending file."),(0,n.kt)("li",{parentName:"ul"},"If the folder does not exist, the command does nothing and no error is returned. (*) Windows: -54 (Attempt to open locked file for writing) macOS: -45 (The file is locked or the pathname is not correct)")),(0,n.kt)("h2",r({},{id:"moveto"}),".moveTo()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".moveTo"),"( ",(0,n.kt)("em",{parentName:"p"},"destinationFolder")," : 4D.Folder { ; ",(0,n.kt)("em",{parentName:"p"},"newName")," : Text } ) : 4D.Folder"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"destinationFolder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.Folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Destination folder")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"newName"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Full name for the moved folder")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.Folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Moved folder")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"description-5"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".moveTo( )")," function ","moves or renames the ",(0,n.kt)("inlineCode",{parentName:"p"},"Folder")," object (source folder) into the specified ",(0,n.kt)("em",{parentName:"p"},"destinationFolder"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"destinationFolder")," must exist on disk, otherwise an error is generated."),(0,n.kt)("p",null,"By default, the folder retains its name when moved. If you want to rename the moved folder, pass the new full name in the ",(0,n.kt)("em",{parentName:"p"},"newName"),' parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned object")),(0,n.kt)("p",null,"The moved ",(0,n.kt)("inlineCode",{parentName:"p"},"Folder")," object."),(0,n.kt)("h4",r({},{id:"example-4"}),"Example"),(0,n.kt)("p",null,"You want to move and rename a folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $tomove; $moved : Object\n $docs:=Folder(fk documents folder)\n $tomove:=$docs.folder("Pictures")\n $tomove2:=$tomove.moveTo($docs.folder("Archives");"Pic_Archives")\n')),(0,n.kt)("h2",r({},{id:"rename"}),".rename()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".rename"),"( ",(0,n.kt)("em",{parentName:"p"},"newName")," : Text ) : 4D.Folder"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"newName"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"New full name for the folder")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.Folder"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Renamed folder")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"description-6"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".rename()")," function ","renames the folder with the name you passed in ",(0,n.kt)("em",{parentName:"p"},"newName")," and returns the renamed ",(0,n.kt)("inlineCode",{parentName:"p"},"Folder")," object","."),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"newName"),' parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned object")),(0,n.kt)("p",null,"The renamed ",(0,n.kt)("inlineCode",{parentName:"p"},"Folder")," object."),(0,n.kt)("h4",r({},{id:"example-5"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $toRename : 4D.Folder\n $toRename:=Folder("/RESOURCES/Pictures").rename("Images")\n')))}u.isMDXComponent=!0}}]);