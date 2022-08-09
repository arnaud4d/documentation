"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"architecture",title:"Architecture of a project"},d=void 0,s={unversionedId:"Project/architecture",id:"version-19-R6/Project/architecture",title:"Architecture of a project",description:"A 4D project is made of several folders and files, stored within a single parent application folder (package folder). For example:",source:"@site/versioned_docs/version-19-R6/Project/architecture.md",sourceDirName:"Project",slug:"/Project/architecture",permalink:"/docs/fr/docs/Project/architecture",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"architecture",title:"Architecture of a project"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/fr/docs/Project/overview"},next:{title:"Documenting a project",permalink:"/docs/fr/docs/Project/documentation"}},p={},m=[{value:"Project folder",id:"project-folder",level:2},{value:"<code>&lt;applicationName&gt;.4DProject</code> file",id:"applicationname4dproject-file",level:3},{value:"<code>Sources</code>",id:"sources",level:3},{value:"<code>DatabaseMethods</code>",id:"databasemethods",level:4},{value:"<code>Methods</code>",id:"methods",level:4},{value:"<code>Classes</code>",id:"classes",level:4},{value:"<code>Forms</code>",id:"forms",level:4},{value:"<code>TableForms</code>",id:"tableforms",level:4},{value:"<code>Triggers</code>",id:"triggers",level:4},{value:"<code>Trash</code>",id:"trash",level:3},{value:"<code>DerivedData</code>",id:"deriveddata",level:3},{value:"<code>Libraries</code>",id:"libraries",level:2},{value:"<code>Resources</code>",id:"resources",level:2},{value:"<code>Data</code>",id:"data",level:2},{value:"<code>Settings</code>",id:"settings",level:3},{value:"<code>Logs</code>",id:"logs",level:3},{value:"<code>Settings</code>",id:"settings-1",level:2},{value:"<code>userPreferences.&lt;userName&gt;</code>",id:"userpreferencesusername",level:2},{value:"<code>Components</code>",id:"components",level:2},{value:"<code>Plugins</code>",id:"plugins",level:2},{value:"<code>Documentation</code>",id:"documentation",level:2},{value:"<code>WebFolder</code>",id:"webfolder",level:2},{value:"<code>.gitignore</code> file (optional)",id:"gitignore-file-optional",level:2}],u={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A 4D project is made of several folders and files, stored within a single parent application folder (package folder). For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MyProject",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Components")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Data"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Logs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Settings")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Project"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DerivedData")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Sources")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Trash")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Resources")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Settings")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"userPreferences.jSmith")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WebFolder"))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'If your project has been converted from a binary database, additional folders may be present. See "Converting databases to projects" on ',(0,l.kt)("a",{parentName:"p",href:"https://doc.4d.com"},"doc.4d.com"),".")),(0,l.kt)("h2",{id:"project-folder"},"Project folder"),(0,l.kt)("p",null,"The Project folder typically contains the following hierarchy:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<applicationName>.4DProject")," file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Sources"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Classes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DatabaseMethods")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Methods")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Forms")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TableForms")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Triggers")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DerivedData")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Trash")," (if any)")),(0,l.kt)("h3",{id:"applicationname4dproject-file"},(0,l.kt)("inlineCode",{parentName:"h3"},"<applicationName>.4DProject")," file"),(0,l.kt)("p",null,"Project development file, used to designate and launch the project. This file can be opened by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"4D"),(0,l.kt)("li",{parentName:"ul"},"4D Server (read-only, see ",(0,l.kt)("a",{parentName:"li",href:"/docs/fr/docs/Desktop/clientServer#opening-a-remote-project"},"Opening a remote project"),")")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"In 4D projects, development is done with 4D and multi-user development is managed through source control tools. 4D Server can open .4DProject files for testing purposes.")),(0,l.kt)("p",null,"This text file can also contain configuration keys, in particular ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/docs/Preferences/general#excluding-tokens-in-existing-projects"},(0,l.kt)("inlineCode",{parentName:"a"},'"tokenizedText": false')),"."),(0,l.kt)("h3",{id:"sources"},(0,l.kt)("inlineCode",{parentName:"h3"},"Sources")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog.4DCatalog"),(0,l.kt)("td",{parentName:"tr",align:null},"Table and field definitions"),(0,l.kt)("td",{parentName:"tr",align:null},"XML")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"folders.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Explorer folder definitions"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"menus.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Menu definitions"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings.4DSettings"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Structure")," database settings. They are not taken into account if ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#settings-folder-1"},"user settings"))," or ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("a",{parentName:"em",href:"#settings-folder"},"user settings for data"))," are defined.",(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"td"},"Warning"),": In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to use ",(0,l.kt)("em",{parentName:"td"},"user settings")," or ",(0,l.kt)("em",{parentName:"td"},"user settings for data")," to define custom settings.")),(0,l.kt)("td",{parentName:"tr",align:null},"XML")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tips.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Defined tips"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lists.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Defined lists"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filters.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Defined filters"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"styleSheets.css"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS style sheets"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"styleSheets_mac.css"),(0,l.kt)("td",{parentName:"tr",align:null},"Mac css style sheets (from converted binary database)"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"styleSheets_windows.css"),(0,l.kt)("td",{parentName:"tr",align:null},"Windows css style sheets (from converted binary database)"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS")))),(0,l.kt)("h4",{id:"databasemethods"},(0,l.kt)("inlineCode",{parentName:"h4"},"DatabaseMethods")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"databaseMethodName"),".4dm"),(0,l.kt)("td",{parentName:"tr",align:null},"Database methods defined in the project. One file per database method"),(0,l.kt)("td",{parentName:"tr",align:null},"text")))),(0,l.kt)("h4",{id:"methods"},(0,l.kt)("inlineCode",{parentName:"h4"},"Methods")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"methodName"),".4dm"),(0,l.kt)("td",{parentName:"tr",align:null},"Project methods defined in the project. One file per method"),(0,l.kt)("td",{parentName:"tr",align:null},"text")))),(0,l.kt)("h4",{id:"classes"},(0,l.kt)("inlineCode",{parentName:"h4"},"Classes")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"className"),".4dm"),(0,l.kt)("td",{parentName:"tr",align:null},"User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name"),(0,l.kt)("td",{parentName:"tr",align:null},"text")))),(0,l.kt)("h4",{id:"forms"},(0,l.kt)("inlineCode",{parentName:"h4"},"Forms")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,l.kt)("td",{parentName:"tr",align:null},"Project form description"),(0,l.kt)("td",{parentName:"tr",align:null},"json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,l.kt)("td",{parentName:"tr",align:null},"Project form method"),(0,l.kt)("td",{parentName:"tr",align:null},"text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,l.kt)("em",{parentName:"td"},"pictureName")),(0,l.kt)("td",{parentName:"tr",align:null},"Project form static picture"),(0,l.kt)("td",{parentName:"tr",align:null},"picture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,l.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,l.kt)("td",{parentName:"tr",align:null},"Object methods. One file per object method"),(0,l.kt)("td",{parentName:"tr",align:null},"text")))),(0,l.kt)("h4",{id:"tableforms"},(0,l.kt)("inlineCode",{parentName:"h4"},"TableForms")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"n"),"/Input/",(0,l.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,l.kt)("td",{parentName:"tr",align:null},"Input table form description (n is the table number)"),(0,l.kt)("td",{parentName:"tr",align:null},"json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"n"),"/Input/",(0,l.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,l.kt)("em",{parentName:"td"},"pictureName")),(0,l.kt)("td",{parentName:"tr",align:null},"Input table form static pictures"),(0,l.kt)("td",{parentName:"tr",align:null},"picture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"n"),"/Input/",(0,l.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,l.kt)("td",{parentName:"tr",align:null},"Input table form method"),(0,l.kt)("td",{parentName:"tr",align:null},"text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"n"),"/Input/",(0,l.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,l.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,l.kt)("td",{parentName:"tr",align:null},"Input form object methods. One file per object method"),(0,l.kt)("td",{parentName:"tr",align:null},"text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"n"),"/Output/",(0,l.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,l.kt)("td",{parentName:"tr",align:null},"Output table form description (n is the table number)"),(0,l.kt)("td",{parentName:"tr",align:null},"json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"n"),"/Output/",(0,l.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,l.kt)("em",{parentName:"td"},"pictureName")),(0,l.kt)("td",{parentName:"tr",align:null},"Output table form static pictures"),(0,l.kt)("td",{parentName:"tr",align:null},"picture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"n"),"/Output/",(0,l.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,l.kt)("td",{parentName:"tr",align:null},"Output table form method"),(0,l.kt)("td",{parentName:"tr",align:null},"text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"n"),"/Output/",(0,l.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,l.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,l.kt)("td",{parentName:"tr",align:null},"Output form object methods. One file per object method"),(0,l.kt)("td",{parentName:"tr",align:null},"text")))),(0,l.kt)("h4",{id:"triggers"},(0,l.kt)("inlineCode",{parentName:"h4"},"Triggers")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_",(0,l.kt)("em",{parentName:"td"},"n"),".4dm"),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger methods defined in the project. One trigger file per table (n is the table number)"),(0,l.kt)("td",{parentName:"tr",align:null},"text")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:"),"\nThe .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools."),(0,l.kt)("h3",{id:"trash"},(0,l.kt)("inlineCode",{parentName:"h3"},"Trash")),(0,l.kt)("p",null,"The Trash folder contains methods and forms that were deleted from the project (if any). It can contain the following folders:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Methods")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Forms")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TableForms"))),(0,l.kt)("p",null,'Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the ',(0,l.kt)("a",{parentName:"p",href:"#sources"},"Sources")," folder."),(0,l.kt)("h3",{id:"deriveddata"},(0,l.kt)("inlineCode",{parentName:"h3"},"DerivedData")),(0,l.kt)("p",null,"The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. You can ignore this folder."),(0,l.kt)("h2",{id:"libraries"},(0,l.kt)("inlineCode",{parentName:"h2"},"Libraries")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This folder is used on macOS only.")),(0,l.kt)("p",null,"The Librairies folder contains the file resulting from a compilation with the ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/docs/Project/compiler#silicon-compiler"},"Silicon compiler")," on macOS."),(0,l.kt)("h2",{id:"resources"},(0,l.kt)("inlineCode",{parentName:"h2"},"Resources")),(0,l.kt)("p",null,"The Resources folder contains any custom project resource files and folders. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the ",(0,l.kt)("em",{parentName:"p"},"4D Server Reference Manual"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"item")),(0,l.kt)("td",{parentName:"tr",align:null},"Project resource files and folders"),(0,l.kt)("td",{parentName:"tr",align:null},"various")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Images/Library/",(0,l.kt)("em",{parentName:"td"},"item")),(0,l.kt)("td",{parentName:"tr",align:null},"Pictures from the Picture Library as separate files(*). Names of these items become file names. If a duplicate exists, a number is added to the name."),(0,l.kt)("td",{parentName:"tr",align:null},"picture")))),(0,l.kt)("p",null,"(*) only if the project was exported from a .4db binary database."),(0,l.kt)("h2",{id:"data"},(0,l.kt)("inlineCode",{parentName:"h2"},"Data")),(0,l.kt)("p",null,"The data folder contains the data file and all files and folders relating to the data."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data.4dd(*)"),(0,l.kt)("td",{parentName:"tr",align:null},"Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the ",(0,l.kt)("em",{parentName:"td"},"Open data file")," dialog box will then appear so that you can select the data file to use or create a new one"),(0,l.kt)("td",{parentName:"tr",align:null},"binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data.journal"),(0,l.kt)("td",{parentName:"tr",align:null},"Created only when the database uses a log file. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user\u2019s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created."),(0,l.kt)("td",{parentName:"tr",align:null},"binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data.match"),(0,l.kt)("td",{parentName:"tr",align:null},"(internal) UUID matching table number"),(0,l.kt)("td",{parentName:"tr",align:null},"XML")))),(0,l.kt)("p",null,"(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location."),(0,l.kt)("h3",{id:"settings"},(0,l.kt)("inlineCode",{parentName:"h3"},"Settings")),(0,l.kt)("p",null,"This folder contains ",(0,l.kt)("strong",{parentName:"p"},"user settings files for data")," used for application administration."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"These settings take priority over ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#settings-1"},"user settings files"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#sources"},"structure settings"))," files.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"directory.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of 4D groups, users, and their access rights when the application is run with this data file."),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Backup.4DSettings"),(0,l.kt)("td",{parentName:"tr",align:null},"Database backup settings, used to set the ",(0,l.kt)("a",{parentName:"td",href:"/docs/fr/docs/Backup/settings"},"backup options")," when the database is run with this data file. Keys concerning backup configuration are described in the ",(0,l.kt)("em",{parentName:"td"},"4D XML Keys Backup")," manual."),(0,l.kt)("td",{parentName:"tr",align:null},"XML")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings.4DSettings"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom database settings for this data file."),(0,l.kt)("td",{parentName:"tr",align:null},"XML")))),(0,l.kt)("h3",{id:"logs"},(0,l.kt)("inlineCode",{parentName:"h3"},"Logs")),(0,l.kt)("p",null,"The Logs folder contains all log files used by the project. Log files include, in particular:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"database conversion,"),(0,l.kt)("li",{parentName:"ul"},"web server requests,"),(0,l.kt)("li",{parentName:"ul"},"backup/restore activities journal (",(0,l.kt)("em",{parentName:"li"},"Backup Journal","[","xxx].txt"),", see ",(0,l.kt)("a",{parentName:"li",href:"/docs/fr/docs/Backup/backup#backup-journal"},"Backup journal"),")"),(0,l.kt)("li",{parentName:"ul"},"command debugging,"),(0,l.kt)("li",{parentName:"ul"},"4D Server requests (generated on client machines and on the server).")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"An additional Logs folder is available in the system user preferences folder (active 4D folder, see ",(0,l.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18R4/4D/18-R4/Get-4D-folder.301-4982857.en.html"},"Get 4D folder")," command) for maintenance log files and in cases where data folder is read-only.")),(0,l.kt)("h2",{id:"settings-1"},(0,l.kt)("inlineCode",{parentName:"h2"},"Settings")),(0,l.kt)("p",null,"This folder contains ",(0,l.kt)("strong",{parentName:"p"},"user settings files")," used for application administration."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"These settings take priority over ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#sources"},"structure settings"))," files. However, if a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#settings"},"user settings file for data"))," exists, it takes priority over user settings file.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"directory.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of 4D groups and users for the application, as well as their access rights"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Backup.4DSettings"),(0,l.kt)("td",{parentName:"tr",align:null},"Database backup settings, used to set the ",(0,l.kt)("a",{parentName:"td",href:"/docs/fr/docs/Backup/settings"},"backup options"),") when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the ",(0,l.kt)("em",{parentName:"td"},"backup journal"),". Keys concerning backup configuration are described in the ",(0,l.kt)("em",{parentName:"td"},"4D XML Keys Backup")," manual."),(0,l.kt)("td",{parentName:"tr",align:null},"XML")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BuildApp.4DSettings"),(0,l.kt)("td",{parentName:"tr",align:null},"Build settings file, created automatically when using the application builder dialog box or the ",(0,l.kt)("inlineCode",{parentName:"td"},"BUILD APPLICATION")," command"),(0,l.kt)("td",{parentName:"tr",align:null},"XML")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings.4DSettings"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom settings for this project (all data files)"),(0,l.kt)("td",{parentName:"tr",align:null},"XML")))),(0,l.kt)("h2",{id:"userpreferencesusername"},(0,l.kt)("inlineCode",{parentName:"h2"},"userPreferences.<userName>")),(0,l.kt)("p",null,"This folder contains files that memorize user configurations, e.g. break point or window positions. You can just ignore this folder. It contains for example:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"methodPreferences.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Current user Code Editor preferences"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"methodWindowPositions.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Current user window positions for methods"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"formWindowPositions.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Current user window positions for forms"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"workspace.json"),(0,l.kt)("td",{parentName:"tr",align:null},"List of opened windows; on macOS, order of tab windows"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debuggerCatches.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Caught calls to commands"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"recentTables.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Ordered list of tables"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"preferences.4DPreferences"),(0,l.kt)("td",{parentName:"tr",align:null},"Current data path and main window positions"),(0,l.kt)("td",{parentName:"tr",align:null},"XML")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CompilerIntermediateFiles"),(0,l.kt)("td",{parentName:"tr",align:null},"Intermediate files resulting from Apple Silicon compilation"),(0,l.kt)("td",{parentName:"tr",align:null},"Folder")))),(0,l.kt)("h2",{id:"components"},(0,l.kt)("inlineCode",{parentName:"h2"},"Components")),(0,l.kt)("p",null,"This folder contains the components to be available in the application project. It must be stored at the same level as the Project folder."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"An application project can be used itself as a component:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"for development: put an alias of the .4dproject file in the Components folder of the host project."),(0,l.kt)("li",{parentName:"ul"},"for deployment: ",(0,l.kt)("a",{parentName:"li",href:"/docs/fr/docs/Desktop/building#build-component"},"build the component")," and put the resulting .4dz file in a .4dbase folder in the Components folder of the host application."))),(0,l.kt)("h2",{id:"plugins"},(0,l.kt)("inlineCode",{parentName:"h2"},"Plugins")),(0,l.kt)("p",null,"This folder contains the plug-ins to be available in the application project. It must be stored at the same level as the Project folder."),(0,l.kt)("h2",{id:"documentation"},(0,l.kt)("inlineCode",{parentName:"h2"},"Documentation")),(0,l.kt)("p",null,"This folder contains all documentation files (.md) created for the project elements such as classes, methods, or forms. Documentation files are managed and displayed in the 4D Explorer."),(0,l.kt)("p",null,"For more information, refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/docs/Project/documentation"},"Documenting a project"),"."),(0,l.kt)("h2",{id:"webfolder"},(0,l.kt)("inlineCode",{parentName:"h2"},"WebFolder")),(0,l.kt)("p",null,"Defaut root folder of the 4D Web server for pages, pictures, etc. It is automatically created when the Web server is launched for the first time."),(0,l.kt)("h2",{id:"gitignore-file-optional"},(0,l.kt)("inlineCode",{parentName:"h2"},".gitignore")," file (optional)"),(0,l.kt)("p",null,"File that specifies which files will be ignored by git. You can include a gitignore file in your projects using the ",(0,l.kt)("strong",{parentName:"p"},"Create .gitignore file")," option on the ",(0,l.kt)("strong",{parentName:"p"},"General")," page of the preferences. To configure the contents of that file, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/fr/docs/Preferences/general#create-gitignore-file"},"Create ",(0,l.kt)("inlineCode",{parentName:"a"},".gitignore")," file"),"."))}c.isMDXComponent=!0}}]);