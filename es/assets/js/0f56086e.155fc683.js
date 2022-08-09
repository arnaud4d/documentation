"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87255],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54927:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"overview",title:"Overview"},c=void 0,s={unversionedId:"Backup/overview",id:"version-18/Backup/overview",title:"Overview",description:"4D includes a full database backup and restore module.",source:"@site/versioned_docs/version-18/Backup/overview.md",sourceDirName:"Backup",slug:"/Backup/overview",permalink:"/es/docs/18/Backup/overview",draft:!1,tags:[],version:"18",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Encrypt Page",permalink:"/es/docs/18/MSC/encrypt"},next:{title:"Backup",permalink:"/es/docs/18/Backup/backup"}},u={},p=[],d={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"4D includes a full database backup and restore module."),(0,o.kt)("p",null,"This module allows backing up a database currently in use without having to exit it. Each backup can include the project folder, the data file and any additional files or folders. These parameters are first set in the Database Settings."),(0,o.kt)("p",null,"Backups can be started manually or automatically at regular intervals without any user intervention. Specific language commands, as well as specific database methods, allow integrating backup functions into a customized interface."),(0,o.kt)("p",null,"Databases can be restored automatically when a damaged database is opened."),(0,o.kt)("p",null,"Also, the integrated backup module can take advantage of the .journal file (",(0,o.kt)("a",{parentName:"p",href:"/es/docs/18/Backup/log"},"database log file"),"). This file keeps a record of all operations performed on the data and also ensures total security between two backups. In case of problems with a database in use, any operations missing in the data file are automatically reintegrated the next time the database is opened. You can view the journal file contents at any time."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of databases for backup purposes. These solutions can be based on the following mechanisms and technologies:  "),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  "),(0,o.kt)("li",{parentName:"ul"},"Synchronization using SQL"),(0,o.kt)("li",{parentName:"ul"},"Synchronization using HTTP (/rest/url)"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a general overview of 4D's security features, see the ",(0,o.kt)("a",{parentName:"p",href:"https://blog.4d.com/4d-security-guide/"},"4D Security guide"),".")))}f.isMDXComponent=!0}}]);