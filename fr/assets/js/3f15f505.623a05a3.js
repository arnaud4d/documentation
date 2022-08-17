"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55922],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),f=n,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return a?r.createElement(b,l(l({ref:t},p),{},{components:a})):r.createElement(b,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={id:"rollback",title:"Rollback Page",sidebar_label:"Rollback Page"},i=void 0,s={unversionedId:"MSC/rollback",id:"MSC/rollback",title:"Rollback Page",description:"You use the Rollback page to access the rollback function among the operations carried out on the data file. It resembles an undo function applied over several levels. It is particularly useful when a record has been deleted by mistake in a database.",source:"@site/docs/MSC/rollback.md",sourceDirName:"MSC",slug:"/MSC/rollback",permalink:"/docs/fr/next/MSC/rollback",draft:!1,tags:[],version:"current",frontMatter:{id:"rollback",title:"Rollback Page",sidebar_label:"Rollback Page"},sidebar:"docs",previous:{title:"Compact Page",permalink:"/docs/fr/next/MSC/compact"},next:{title:"Restore Page",permalink:"/docs/fr/next/MSC/restore"}},c={},p=[],u={toc:p};function d(e){var{components:t}=e,l=o(e,["components"]);return(0,r.kt)("wrapper",n({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You use the Rollback page to access the rollback function among the operations carried out on the data file. It resembles an undo function applied over several levels. It is particularly useful when a record has been deleted by mistake in a database. "),(0,r.kt)("p",null,"This function is only available when the application functions with a data log file."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(25916).Z,width:"882",height:"666"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the ",(0,r.kt)("strong",{parentName:"p"},"Values")," column and a dialog requesting the passphrase or the data key is displayed if you click the ",(0,r.kt)("strong",{parentName:"p"},"Rollback")," button. ")),(0,r.kt)("p",null,"The contents and functioning of the list of operations are the same as for the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/next/MSC/analysis"}),"Activity analysis")," window. "),(0,r.kt)("p",null,"To perform a rollback among the operations, select the row after which all operations must be cancelled. The operation of the selected row will be the last kept. If, for example, you wish to cancel a deletion, select the operation located just before it. The deletion operation, as well as all subsequent operations, will be cancelled. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(77844).Z,width:"1008",height:"366"})),(0,r.kt)("p",null,"Next click on the ",(0,r.kt)("strong",{parentName:"p"},"Rollback")," button. 4D asks you to confirm the operation. If you click ",(0,r.kt)("strong",{parentName:"p"},"OK"),", the data is then restored to the exact state it was in at the moment of the selected action. "),(0,r.kt)("p",null,"You use the menu found at the bottom of the window to select a data log file to be used when you apply the rollback function to a database restored from an archive file. In this case, you must specify the data log file corresponding to the archive."),(0,r.kt)("p",null,"Here is how the rollback function works: when the user clicks the ",(0,r.kt)("strong",{parentName:"p"},"Rollback")," button, 4D shuts the current database and restores the last backup of the database data. The restored database is then opened and 4D integrates the operations of the data log file up through to the selected operation. If the database has not yet been saved, 4D starts with a blank data file."))}d.isMDXComponent=!0},25916:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MSC_rollback1-b21c02b97be368379d88a7bdb43633bc.png"},77844:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MSC_rollback2-95de20fc9ee798b7396060a9a7ec5b1b.png"}}]);