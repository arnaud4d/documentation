"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55922],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),b=r,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"rollback",title:"Rollback Page",sidebar_label:"Rollback Page"},i=void 0,s={unversionedId:"MSC/rollback",id:"MSC/rollback",title:"Rollback Page",description:"You use the Rollback page to access the rollback function among the operations carried out on the data file. It resembles an undo function applied over several levels. It is particularly useful when a record has been deleted by mistake in a database.",source:"@site/docs/MSC/rollback.md",sourceDirName:"MSC",slug:"/MSC/rollback",permalink:"/docs/pt/next/MSC/rollback",draft:!1,tags:[],version:"current",frontMatter:{id:"rollback",title:"Rollback Page",sidebar_label:"Rollback Page"},sidebar:"docs",previous:{title:"Compact Page",permalink:"/docs/pt/next/MSC/compact"},next:{title:"Restore Page",permalink:"/docs/pt/next/MSC/restore"}},c={},p=[],u={toc:p};function d(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)("wrapper",r({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You use the Rollback page to access the rollback function among the operations carried out on the data file. It resembles an undo function applied over several levels. It is particularly useful when a record has been deleted by mistake in a database. "),(0,n.kt)("p",null,"This function is only available when the application functions with a data log file."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(25916).Z,width:"882",height:"666"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the ",(0,n.kt)("strong",{parentName:"p"},"Values")," column and a dialog requesting the passphrase or the data key is displayed if you click the ",(0,n.kt)("strong",{parentName:"p"},"Rollback")," button. ")),(0,n.kt)("p",null,"The contents and functioning of the list of operations are the same as for the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/MSC/analysis"}),"Activity analysis")," window. "),(0,n.kt)("p",null,"To perform a rollback among the operations, select the row after which all operations must be cancelled. The operation of the selected row will be the last kept. If, for example, you wish to cancel a deletion, select the operation located just before it. The deletion operation, as well as all subsequent operations, will be cancelled. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(77844).Z,width:"1008",height:"366"})),(0,n.kt)("p",null,"Next click on the ",(0,n.kt)("strong",{parentName:"p"},"Rollback")," button. 4D asks you to confirm the operation. If you click ",(0,n.kt)("strong",{parentName:"p"},"OK"),", the data is then restored to the exact state it was in at the moment of the selected action. "),(0,n.kt)("p",null,"You use the menu found at the bottom of the window to select a data log file to be used when you apply the rollback function to a database restored from an archive file. In this case, you must specify the data log file corresponding to the archive."),(0,n.kt)("p",null,"Here is how the rollback function works: when the user clicks the ",(0,n.kt)("strong",{parentName:"p"},"Rollback")," button, 4D shuts the current database and restores the last backup of the database data. The restored database is then opened and 4D integrates the operations of the data log file up through to the selected operation. If the database has not yet been saved, 4D starts with a blank data file."))}d.isMDXComponent=!0},25916:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MSC_rollback1-b21c02b97be368379d88a7bdb43633bc.png"},77844:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MSC_rollback2-95de20fc9ee798b7396060a9a7ec5b1b.png"}}]);