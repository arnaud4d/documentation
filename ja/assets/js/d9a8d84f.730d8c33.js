"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"overview",title:"Overview"},l=void 0,c={unversionedId:"Backup/overview",id:"Backup/overview",title:"Overview",description:"4D includes a full application backup and restore module.",source:"@site/docs/Backup/overview.md",sourceDirName:"Backup",slug:"/Backup/overview",permalink:"/docs/ja/next/Backup/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Encrypt Page",permalink:"/docs/ja/next/MSC/encrypt"},next:{title:"Backup",permalink:"/docs/ja/next/Backup/backup"}},u={},p=[],s={toc:p};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4D includes a full application backup and restore module. "),(0,r.kt)("p",null,"This module allows backing up an application currently in use without having to exit it. Each backup can include the project folder, the data file and any additional files or folders. These parameters are first set in the Settings. "),(0,r.kt)("p",null,"Backups can be started manually or automatically at regular intervals without any user intervention. Specific language commands, as well as specific database methods, allow integrating backup functions into a customized interface. "),(0,r.kt)("p",null,"Applications can be restored automatically when a damaged application is opened. "),(0,r.kt)("p",null,"Also, the integrated backup module can take advantage of the .journal file (",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/ja/next/Backup/log"}),"database log file"),"). This file keeps a record of all operations performed on the data and also ensures total security between two backups. In case of problems with an application in use, any operations missing in the data file are automatically reintegrated the next time the application is opened. You can view the journal file contents at any time."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of applications for backup purposes. These solutions can be based on the following mechanisms and technologies:  "),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  "),(0,r.kt)("li",{parentName:"ul"},"Synchronization using SQL"),(0,r.kt)("li",{parentName:"ul"},"Synchronization using HTTP (/rest/url)"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For a general overview of 4D's security features, see the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"4D Security guide"),".")))}f.isMDXComponent=!0}}]);