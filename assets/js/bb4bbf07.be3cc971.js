"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=r,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||o;return n?a.createElement(d,c(c({ref:t},l),{},{components:n})):a.createElement(d,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>l});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"backup",title:"Backup Page",sidebar_label:"Backup Page"},i=void 0,p={unversionedId:"MSC/backup",id:"version-19/MSC/backup",title:"Backup Page",description:"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:",source:"@site/versioned_docs/version-19/MSC/backup.md",sourceDirName:"MSC",slug:"/MSC/backup",permalink:"/documentation/docs/19/MSC/backup",draft:!1,tags:[],version:"19",frontMatter:{id:"backup",title:"Backup Page",sidebar_label:"Backup Page"},sidebar:"docs",previous:{title:"Verify Page",permalink:"/documentation/docs/19/MSC/verify"},next:{title:"Compact Page",permalink:"/documentation/docs/19/MSC/compact"}},u={},l=[],s={toc:l};function f(e){var{components:t}=e,c=o(e,["components"]);return(0,a.kt)("wrapper",r({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(21007).Z,width:"882",height:"666"})),(0,a.kt)("p",null,"This page consists of the following three areas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backup File Destination"),": displays information about the location of the application backup file. It also indicates the free/used space on the backup disk."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Last Backup Information"),": provides the date and time of the last backup (automatic or manual) carried out on the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Contents of the backup file"),": lists the files and folders included in the backup file.")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Backup")," button is used to launch a manual backup."),(0,a.kt)("p",null,"This page cannot be used to modify the backup parameters. To do this, you must click on the ",(0,a.kt)("strong",{parentName:"p"},"Database properties...")," button."))}f.isMDXComponent=!0},21007:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/msc_Backup-ad82859e54a1f47aa0a79bd9cf75adb4.png"}}]);