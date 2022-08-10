"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26860],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(a),d=n,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||o;return a?r.createElement(m,c(c({ref:t},l),{},{components:a})):r.createElement(m,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=a[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},53670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),c=["components"],i={id:"backup",title:"Backup Page",sidebar_label:"Backup Page"},p=void 0,u={unversionedId:"MSC/backup",id:"version-18/MSC/backup",title:"Backup Page",description:"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:",source:"@site/versioned_docs/version-18/MSC/backup.md",sourceDirName:"MSC",slug:"/MSC/backup",permalink:"/fr/docs/18/MSC/backup",draft:!1,tags:[],version:"18",frontMatter:{id:"backup",title:"Backup Page",sidebar_label:"Backup Page"},sidebar:"docs",previous:{title:"Verify Page",permalink:"/fr/docs/18/MSC/verify"},next:{title:"Compact Page",permalink:"/fr/docs/18/MSC/compact"}},l={},s=[],f={toc:s};function d(e){var t=e.components,i=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(27060).Z,width:"882",height:"666"})),(0,o.kt)("p",null,"This page consists of the following three areas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Backup File Destination"),": displays information about the location of the database backup file. It also indicates the free/used space on the backup disk."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Last Backup Information"),": provides the date and time of the last backup (automatic or manual) carried out on the database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contents of the backup file"),": lists the files and folders included in the backup file.")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Backup")," button is used to launch a manual backup."),(0,o.kt)("p",null,"This page cannot be used to modify the backup parameters. To do this, you must click on the ",(0,o.kt)("strong",{parentName:"p"},"Database properties...")," button."))}d.isMDXComponent=!0},27060:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/msc_Backup-ad82859e54a1f47aa0a79bd9cf75adb4.png"}}]);