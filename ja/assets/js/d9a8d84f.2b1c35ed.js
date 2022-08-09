"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"overview",title:"Overview"},c=void 0,u={unversionedId:"Backup/overview",id:"Backup/overview",title:"Overview",description:"4D includes a full application backup and restore module.",source:"@site/docs/Backup/overview.md",sourceDirName:"Backup",slug:"/Backup/overview",permalink:"/docs/ja/docs/next/Backup/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Encrypt Page",permalink:"/docs/ja/docs/next/MSC/encrypt"},next:{title:"Backup",permalink:"/docs/ja/docs/next/Backup/backup"}},p={},s=[],d={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"4D includes a full application backup and restore module. "),(0,o.kt)("p",null,"This module allows backing up an application currently in use without having to exit it. Each backup can include the project folder, the data file and any additional files or folders. These parameters are first set in the Settings. "),(0,o.kt)("p",null,"Backups can be started manually or automatically at regular intervals without any user intervention. Specific language commands, as well as specific database methods, allow integrating backup functions into a customized interface. "),(0,o.kt)("p",null,"Applications can be restored automatically when a damaged application is opened. "),(0,o.kt)("p",null,"Also, the integrated backup module can take advantage of the .journal file (",(0,o.kt)("a",{parentName:"p",href:"/docs/ja/docs/next/Backup/log"},"database log file"),"). This file keeps a record of all operations performed on the data and also ensures total security between two backups. In case of problems with an application in use, any operations missing in the data file are automatically reintegrated the next time the application is opened. You can view the journal file contents at any time."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of applications for backup purposes. These solutions can be based on the following mechanisms and technologies:  "),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  "),(0,o.kt)("li",{parentName:"ul"},"Synchronization using SQL"),(0,o.kt)("li",{parentName:"ul"},"Synchronization using HTTP (/rest/url)"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a general overview of 4D's security features, see the ",(0,o.kt)("a",{parentName:"p",href:"https://blog.4d.com/4d-security-guide/"},"4D Security guide"),".")))}f.isMDXComponent=!0}}]);