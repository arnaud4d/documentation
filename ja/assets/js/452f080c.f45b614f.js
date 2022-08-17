"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28927],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(a),b=r,m=f["".concat(p,".").concat(b)]||f[b]||s[b]||o;return a?n.createElement(m,c(c({ref:t},l),{},{components:a})):n.createElement(m,c({ref:t},l))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},96378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>l});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const c={id:"backup",title:"Backup Page",sidebar_label:"Backup Page"},i=void 0,p={unversionedId:"MSC/backup",id:"version-19-R6/MSC/backup",title:"Backup Page",description:"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/MSC/backup.md",sourceDirName:"MSC",slug:"/MSC/backup",permalink:"/docs/ja/MSC/backup",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"backup",title:"Backup Page",sidebar_label:"Backup Page"},sidebar:"docs",previous:{title:"Verify Page",permalink:"/docs/ja/MSC/verify"},next:{title:"Compact Page",permalink:"/docs/ja/MSC/compact"}},u={},l=[],s={toc:l};function f(e){var{components:t}=e,c=o(e,["components"]);return(0,n.kt)("wrapper",r({},s,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(39489).Z,width:"882",height:"666"})),(0,n.kt)("p",null,"This page consists of the following three areas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Backup File Destination"),": displays information about the location of the application backup file. It also indicates the free/used space on the backup disk."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Last Backup Information"),": provides the date and time of the last backup (automatic or manual) carried out on the application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contents of the backup file"),": lists the files and folders included in the backup file.")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Backup")," button is used to launch a manual backup."),(0,n.kt)("p",null,"This page cannot be used to modify the backup parameters. To do this, you must click on the ",(0,n.kt)("strong",{parentName:"p"},"Database properties...")," button."))}f.isMDXComponent=!0},39489:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/msc_Backup-ad82859e54a1f47aa0a79bd9cf75adb4.png"}}]);