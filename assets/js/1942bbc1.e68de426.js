"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=s(n),u=r,h=k["".concat(o,".").concat(u)]||k[u]||m[u]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},93579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"Document",title:"Document Class"},p=void 0,o={unversionedId:"API/Document",id:"API/Document",title:"Document Class",description:"Description",source:"@site/docs/API/Document.md",sourceDirName:"API",slug:"/API/Document",permalink:"/docs/next/API/Document",draft:!1,tags:[],version:"current",frontMatter:{id:"Document",title:"Document Class"}},s={},d=[{value:"Description",id:"description",level:2},{value:".creationDate",id:"creationdate",level:2},{value:"Description",id:"description-1",level:4},{value:".creationTime",id:"creationtime",level:2},{value:"Description",id:"description-2",level:4},{value:".exists",id:"exists",level:2},{value:"Description",id:"description-3",level:4},{value:".extension",id:"extension",level:2},{value:"Description",id:"description-4",level:4},{value:".fullName",id:"fullname",level:2},{value:"Description",id:"description-5",level:4},{value:".hidden",id:"hidden",level:2},{value:"Description",id:"description-6",level:4},{value:".isAlias",id:"isalias",level:2},{value:"Description",id:"description-7",level:4},{value:".isFile",id:"isfile",level:2},{value:"Description",id:"description-8",level:4},{value:".isFolder",id:"isfolder",level:2},{value:"Description",id:"description-9",level:4},{value:".isWritable",id:"iswritable",level:2},{value:"Description",id:"description-10",level:4},{value:".modificationDate",id:"modificationdate",level:2},{value:"Description",id:"description-11",level:4},{value:".modificationTime",id:"modificationtime",level:2},{value:"Description",id:"description-12",level:5},{value:".name",id:"name",level:2},{value:"Description",id:"description-13",level:4},{value:".original",id:"original",level:2},{value:"Description",id:"description-14",level:4},{value:".parent",id:"parent",level:2},{value:"Description",id:"description-15",level:4},{value:".path",id:"path",level:2},{value:"Description",id:"description-16",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"Description",id:"description-17",level:4},{value:".size",id:"size",level:2},{value:"Description",id:"description-18",level:4},{value:".copyTo()",id:"copyto",level:2},{value:"Description",id:"description-19",level:4},{value:"Example",id:"example",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"Description",id:"description-20",level:4},{value:"Example",id:"example-1",level:4},{value:".getIcon()",id:"geticon",level:2},{value:"Description",id:"description-21",level:4},{value:".getText()",id:"gettext",level:2},{value:"Description",id:"description-22",level:4},{value:"Example",id:"example-2",level:4}],m={toc:d};function k(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",r({},{id:"description"}),"Description"),(0,a.kt)("h2",r({},{id:"creationdate"}),".creationDate"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".creationDate")," : Date"),(0,a.kt)("h4",r({},{id:"description-1"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".creationDate")," property returns the creation date of the file."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"creationtime"}),".creationTime"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".creationTime")," : Time"),(0,a.kt)("h4",r({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".creationTime")," property  returns the creation  time of the file (expressed as a number of seconds beginning at 00:00)."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"exists"}),".exists"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".exists")," : Boolean"),(0,a.kt)("h4",r({},{id:"description-3"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".exists")," property returns true if the file exists on disk, and false otherwise."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"extension"}),".extension"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".extension")," : Text"),(0,a.kt)("h4",r({},{id:"description-4"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".extension"),' property returns the extension of the file name (if any). An extension always starts with ".". The property returns an empty string if the file name does not have an extension.'),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"fullname"}),".fullName"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".fullName")," : Text"),(0,a.kt)("h4",r({},{id:"description-5"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".fullName")," property returns the full name of the file, including its extension (if any)."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"hidden"}),".hidden"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".hidden")," : Boolean"),(0,a.kt)("h4",r({},{id:"description-6"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".hidden"),' property returns true if the file is set as "hidden" at the system level, and false otherwise.'),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"isalias"}),".isAlias"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".isAlias")," : Boolean"),(0,a.kt)("h4",r({},{id:"description-7"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".isAlias")," property returns true if the file is an alias, a shortcut, or a symbolic link, and false otherwise."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"isfile"}),".isFile"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".isFile")," : Boolean"),(0,a.kt)("h4",r({},{id:"description-8"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".isFile")," property returns always true for a file."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"isfolder"}),".isFolder"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".isFolder")," : Boolean"),(0,a.kt)("h4",r({},{id:"description-9"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".isFolder")," property returns always false for a file."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"iswritable"}),".isWritable"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".isWritable")," : Boolean"),(0,a.kt)("h4",r({},{id:"description-10"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".isWritable")," property returns true if the file exists on disk and is writable."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the ",(0,a.kt)("em",{parentName:"p"},"writable")," attribute of the file.")),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $myFile:=File("C:\\\\Documents\\\\Archives\\\\ReadMe.txt";fk platform path)\n If($myFile.isWritable)\n    $myNewFile:=$myFile.setText("Added text")\n End if\n')),(0,a.kt)("h2",r({},{id:"modificationdate"}),".modificationDate"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".modificationDate")," : Date"),(0,a.kt)("h4",r({},{id:"description-11"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".modificationDate")," property returns the date of the file's last modification."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"modificationtime"}),".modificationTime"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".modificationTime")," : Time"),(0,a.kt)("h5",r({},{id:"description-12"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".modificationTime")," property returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00)."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"name"}),".name"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".name")," : Text"),(0,a.kt)("h4",r({},{id:"description-13"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".name")," property returns the name of the file without extension (if any)."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"original"}),".original"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".original")," : 4D.File",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".original")," : 4D.Folder"),(0,a.kt)("h4",r({},{id:"description-14"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".original")," property returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a file object"),(0,a.kt)("li",{parentName:"ul"},"a folder object")),(0,a.kt)("p",null,"For non-alias files, the property returns the same file object as the file."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"parent"}),".parent"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".parent")," : 4D.Folder"),(0,a.kt)("h4",r({},{id:"description-15"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".parent"),' property returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned.'),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"path"}),".path"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".path")," : Text"),(0,a.kt)("h4",r({},{id:"description-16"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".path"),' property returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.'),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"platformpath"}),".platformPath"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".platformPath")," : Text"),(0,a.kt)("h4",r({},{id:"description-17"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".platformPath")," property returns the path of the file expressed with the current platform syntax."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"size"}),".size"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".size")," : Real"),(0,a.kt)("h4",r({},{id:"description-18"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".size")," property returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"copyto"}),".copyTo()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".copyTo"),"( ",(0,a.kt)("em",{parentName:"p"},"destinationFolder")," : 4D.Folder { ; ",(0,a.kt)("em",{parentName:"p"},"newName")," : Text } { ; ",(0,a.kt)("em",{parentName:"p"},"overwrite")," : Integer } ) : 4D.File\n|Parameter|Type||Description|\n|---------|--- |:---:|------|\n|destinationFolder | 4D.Folder |->|Destination folder|\n|newName|Text|->|Name for the copy|\n|overwrite|Integer|->|",(0,a.kt)("inlineCode",{parentName:"p"},"fk overwrite")," to replace existing elements|\n|Result|4D.File|<-|Copied file|"),(0,a.kt)("h4",r({},{id:"description-19"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".copyTo()")," function copies the ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," object into the specified ",(0,a.kt)("em",{parentName:"p"},"destinationFolder")," ."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"destinationFolder")," must exist on disk, otherwise an error is generated.  "),(0,a.kt)("p",null,"By default, the file is copied with the name of the original file. If you want to rename the copy, pass the new name in the ",(0,a.kt)("em",{parentName:"p"},"newName"),' parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.'),(0,a.kt)("p",null,"If a file with the same name already exists in the ",(0,a.kt)("em",{parentName:"p"},"destinationFolder"),", by default 4D generates an error. You can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"fk overwrite")," constant in the ",(0,a.kt)("em",{parentName:"p"},"overwrite")," parameter to ignore and overwrite the existing file"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Constant"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"fk overwrite")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Overwrite existing elements, if any")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"The copied ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," object."),(0,a.kt)("h4",r({},{id:"example"}),"Example"),(0,a.kt)("p",null,"You want to copy a picture ",(0,a.kt)("em",{parentName:"p"},"file")," from the user's document folder to the application folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $source; $copy : Object\n$source:=Folder(fk documents folder).file("Pictures/photo.png")\n$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)\n')),(0,a.kt)("h2",r({},{id:"getcontent"}),".getContent()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Returns 4D.Blob")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".getContent( )")," : 4D.Blob\n|Parameter|Type||Description|\n|---|----|---|---|\n|Result | 4D.Blob |<-|File content|"),(0,a.kt)("h4",r({},{id:"description-20"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".getContent()")," function  returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," object containing the entire content of a file. For information on BLOBs, please refer to the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/next/Concepts/blob"}),"BLOB")," section."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," object."),(0,a.kt)("h4",r({},{id:"example-1"}),"Example"),(0,a.kt)("p",null,"To save a document's contents in a ",(0,a.kt)("inlineCode",{parentName:"p"},"BLOB")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $vPath : Text\n $vPath:=Select document("";"*";"Select a document";0)\n If(OK=1) //If a document has been chosen\n    [aTable]aBlobField:=File($vPath;fk platform path).getContent()\n End if\n')),(0,a.kt)("h2",r({},{id:"geticon"}),".getIcon()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".getIcon"),"( { ",(0,a.kt)("em",{parentName:"p"},"size")," : Integer } ) : Picture\n|Parameter|Type||Description|\n|---|----|---|---|\n|size|Integer|->|Side length for the returned picture (pixels)|\n|Result|Picture|<-|Icon|"),(0,a.kt)("h4",r({},{id:"description-21"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".getIcon()")," function returns the icon of the file."),(0,a.kt)("p",null,"The optional ",(0,a.kt)("em",{parentName:"p"},"size"),' parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (\u201clarge icons\u201d) or 16x16 pixels (\u201csmall icons\u201d). If you pass 0 or omit this parameter, the "large icon" version is returned.'),(0,a.kt)("p",null,"If the file does not exist on disk, a default blank icon is returned.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"File icon ",(0,a.kt)("a",r({parentName:"p"},{href:"../Concepts/picture.html"}),"picture"),"."),(0,a.kt)("h2",r({},{id:"gettext"}),".getText()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".getText"),"( { ",(0,a.kt)("em",{parentName:"p"},"charSetName")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"breakMode")," : Integer } } ) : Text",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".getText"),"( { ",(0,a.kt)("em",{parentName:"p"},"charSetNum")," : Integer { ; ",(0,a.kt)("em",{parentName:"p"},"breakMode")," : Integer } } ) : Text\n|Parameter|Type||Description|\n|---|---|---|---|\n|charSetName |Text |-> |Name of character set|\n|charSetNum |Integer |-> |Number of character set|\n|breakMode|Integer |-> |Processing mode for line breaks|\n|Result |Text  |<- |Text from the document|"),(0,a.kt)("h4",r({},{id:"description-22"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".getText()")," function returns the contents of the file as text ."),(0,a.kt)("p",null,"Optionally, you can designate the character set to be used for reading the contents. You can pass either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in ",(0,a.kt)("em",{parentName:"li"},"charSetName"),', a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),'),(0,a.kt)("li",{parentName:"ul"},"or in ",(0,a.kt)("em",{parentName:"li"},"charSetNum"),", the MIBEnum ID (number) of the standard set name.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For the list of character sets supported by 4D, refer to the description of the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONVERT FROM TEXT")," command.")),(0,a.kt)("p",null,"If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in ",(0,a.kt)("em",{parentName:"p"},"charSetName")," or ",(0,a.kt)("em",{parentName:"p"},"charSetNum")," (this parameter is then ignored).\nIf the document does not contain a BOM and if ",(0,a.kt)("em",{parentName:"p"},"charSetName")," or ",(0,a.kt)("em",{parentName:"p"},"charSetNum"),' is omitted, by default 4D uses the "UTF-8" character set.'),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},"breakMode"),', you can pass a number indicating the processing to apply to end-of-line characters in the document. The following constants of the "System Documents" theme are available:'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Constant"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Document unchanged")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"No processing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Document with native format")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"(Default) Line breaks are converted to the native format of the operating system: CR (carriage return) under OS X, CRLF (carriage return + line feed) under Windows")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Document with CRLF")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Line breaks are converted to Windows format: CRLF (carriage return + line feed)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Document with CR")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Line breaks are converted to OS X format: CR (carriage return)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Document with LF")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Line breaks are converted to Unix format: LF (line feed)")))),(0,a.kt)("p",null,"By default, when you omit the ",(0,a.kt)("em",{parentName:"p"},"breakMode")," parameter, line breaks are processed in native mode (1)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"Text of the file."),(0,a.kt)("h4",r({},{id:"example-2"}),"Example"),(0,a.kt)("p",null,"Given the following text document (fields are separated by tabs):"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"id name price vat\n3 th\xe9 1.06\u20ac 19.6\n2 caf\xe9 1.05\u20ac 19.6\n")),(0,a.kt)("p",null,"When you execute this code:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 by default\n $txt:=$myFile.getText()\n')),(0,a.kt)("p",null,"... you get the following for ",(0,a.kt)("inlineCode",{parentName:"p"},"$txt"),":"),(0,a.kt)("p",null,'"id\\tname\\tprice\\tvat\\r\\n3\\tth\xe9\\t1.06\u20ac\\t19.6\\r\\n2\\tcaf\xe9\\t1.05\u20ac\\t19.6"'),(0,a.kt)("p",null,"with ",(0,a.kt)("inlineCode",{parentName:"p"},"\\t")," (tab) as separator and ",(0,a.kt)("inlineCode",{parentName:"p"},"\\r\\n")," (CRLF) as line delimiter."),(0,a.kt)("p",null,"Here is another example with the same file, but a different line delimiter:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $txt:=$myFile.getText("UTF-8", Document with LF)\n')),(0,a.kt)("p",null,"In this case, the contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"$txt")," are as follows:"),(0,a.kt)("p",null,'"id\\tname\\tprice\\tvat\\n3\\tth\xe9\\t1.06\u20ac\\t19.6\\n2\\tcaf\xe9\\t1.05\u20ac\\t19.6"'),(0,a.kt)("p",null,"This time ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," (LF) is used as line delimiter."))}k.isMDXComponent=!0}}]);