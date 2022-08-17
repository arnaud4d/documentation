"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18604],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),A=l(r),d=s,g=A["".concat(c,".").concat(d)]||A[d]||p[d]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=A;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}A.displayName="MDXCreateElement"},33570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>A,frontMatter:()=>o,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const o={id:"overview",title:"Overview"},i=void 0,c={unversionedId:"Users/overview",id:"version-19/Users/overview",title:"Overview",description:"If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data. You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the application or to application operations.",source:"@site/versioned_docs/version-19/Users/overview.md",sourceDirName:"Users",slug:"/Users/overview",permalink:"/docs/ja/19/Users/overview",draft:!1,tags:[],version:"19",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Description of log files",permalink:"/docs/ja/19/Admin/debugLogFiles"},next:{title:"Managing 4D users and groups",permalink:"/docs/ja/19/Users/editing"}},l={},u=[{value:"Assigning group access",id:"assigning-group-access",level:2},{value:"Activating access control",id:"activating-access-control",level:2},{value:"Users and groups in project architecture",id:"users-and-groups-in-project-architecture",level:2},{value:"Toolbox editor",id:"toolbox-editor",level:2},{value:"Directory.json file",id:"directoryjson-file",level:2}],p={toc:u};function A(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)("wrapper",s({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data. You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the application or to application operations."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For an overview of 4D's security features, see the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"4D Security guide"),".")),(0,n.kt)("h2",s({},{id:"assigning-group-access"}),"Assigning group access"),(0,n.kt)("p",null,"4D\u2019s password access system is based on users and groups. You create users and assign passwords, put users in groups, and assign each group access rights to appropriate parts of the application."),(0,n.kt)("p",null,"Groups can then be assigned access privileges to specific parts or features of the application (Design access, HTTP server, SQL server, etc.), or any custom part."),(0,n.kt)("p",null,'The following example shows Design and Runtime explorer access rights being assigned to the "Devs" group:'),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(55059).Z,width:"552",height:"121"})),(0,n.kt)("h2",s({},{id:"activating-access-control"}),"Activating access control"),(0,n.kt)("p",null,"You initiate the 4D password access control system in client-server by ",(0,n.kt)("strong",{parentName:"p"},"assigning a password to the Designer"),"."),(0,n.kt)("p",null,"Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have set up users and groups (when the application opens, no ID is required). Any part of the application can be opened."),(0,n.kt)("p",null,"When a password is assigned to the Designer, all the access privileges take effect. In order to connect to the application, remote users must enter a password."),(0,n.kt)("p",null,"To disable the password access system, you just need to remove the Designer password."),(0,n.kt)("h2",s({},{id:"users-and-groups-in-project-architecture"}),"Users and groups in project architecture"),(0,n.kt)("p",null,"In project applications (.4DProject or .4dz files), 4D users and groups can be configured in both single-user and client-server environments. However, access control is only effective with 4D Server. The following table lists the main users and groups features and their availability:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"4D (single-user)"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"4D Server"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Adding/editing users and groups"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"yes"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Assigning user/group access to servers"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"yes"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"User identification"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"no (all users are Designer)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Access control once the Designer has been assigned a password"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"no (all access are Designer)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"yes")))),(0,n.kt)("h2",s({},{id:"toolbox-editor"}),"Toolbox editor"),(0,n.kt)("p",null,"The editors for users and groups are located in the toolbox of 4D. These editors can be used to create both users and groups, assign passwords to users, place users in groups, etc."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(15846).Z,width:"778",height:"276"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Users and groups editor can be displayed at runtime using the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html"}),"EDIT ACCESS")," command.\nThe whole users and groups configuration can also be edited during application execution using 4D language commands of the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv18R3/4D/18-R3/Users-and-Groups.201-4900438.en.html"}),"Users and Groups")," theme.  ")),(0,n.kt)("h2",s({},{id:"directoryjson-file"}),"Directory.json file"),(0,n.kt)("p",null,"Users, groups, as well as their access rights are stored in a specific project file named ",(0,n.kt)("strong",{parentName:"p"},"directory.json"),"."),(0,n.kt)("p",null,"This file can be stored at the following locations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'in the user settings folder, i.e. in the "Settings" folder at the same level as the "Project" folder. These settings are used by default for the application.'),(0,n.kt)("li",{parentName:"ul"},'in the data settings folder,  i.e. in the "Settings" folder in the "Data" folder. If a ',(0,n.kt)("strong",{parentName:"li"},"directory.json")," file is present at this location, it takes priority over the file in the user settings folder. This feature allows you to define custom/local Users and Groups configurations. The custom configuration will left untouched by an application upgrade.  ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If 4D password access control is not enabled, the ",(0,n.kt)("strong",{parentName:"p"},"directory.json")," is not created.")))}A.isMDXComponent=!0},55059:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},15846:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/editor-6e2ecb71f363782241b995d8f6130a20.png"}}]);