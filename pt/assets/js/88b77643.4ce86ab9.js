"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"rollback",title:"P\xe1gina Retrocesso",sidebar_label:"P\xe1gina Retrocesso"},s=void 0,i={unversionedId:"MSC/rollback",id:"MSC/rollback",title:"P\xe1gina Retrocesso",description:"You use the Rollback page to access the rollback function among the operations carried out on the data file. It resembles an undo function applied over several levels. It is particularly useful when a record has been deleted by mistake in a database.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/MSC/rollback.md",sourceDirName:"MSC",slug:"/MSC/rollback",permalink:"/docs/pt/next/MSC/rollback",draft:!1,tags:[],version:"current",frontMatter:{id:"rollback",title:"P\xe1gina Retrocesso",sidebar_label:"P\xe1gina Retrocesso"},sidebar:"docs",previous:{title:"P\xe1gina compactado",permalink:"/docs/pt/next/MSC/compact"},next:{title:"P\xe1gina de repara\xe7\xe3o",permalink:"/docs/pt/next/MSC/restore"}},c={},p=[],u={toc:p};function d(e){var{components:t}=e,l=o(e,["components"]);return(0,a.kt)("wrapper",r({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You use the Rollback page to access the rollback function among the operations carried out on the data file. It resembles an undo function applied over several levels. It is particularly useful when a record has been deleted by mistake in a database."),(0,a.kt)("p",null,"This function is only available when the application functions with a data log file."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7759).Z,width:"882",height:"666"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the ",(0,a.kt)("strong",{parentName:"p"},"Values")," column and a dialog requesting the passphrase or the data key is displayed if you click the ",(0,a.kt)("strong",{parentName:"p"},"Rollback")," button.")),(0,a.kt)("p",null,"The contents and functioning of the list of operations are the same as for the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/MSC/analysis"}),"Activity analysis")," window."),(0,a.kt)("p",null,"To perform a rollback among the operations, select the row after which all operations must be cancelled. The operation of the selected row will be the last kept. If, for example, you wish to cancel a deletion, select the operation located just before it. The deletion operation, as well as all subsequent operations, will be cancelled."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(72878).Z,width:"1008",height:"366"})),(0,a.kt)("p",null,"Next click on the ",(0,a.kt)("strong",{parentName:"p"},"Rollback")," button. 4D asks you to confirm the operation. If you click ",(0,a.kt)("strong",{parentName:"p"},"OK"),", the data is then restored to the exact state it was in at the moment of the selected action."),(0,a.kt)("p",null,"You use the menu found at the bottom of the window to select a data log file to be used when you apply the rollback function to a database restored from an archive file. In this case, you must specify the data log file corresponding to the archive."),(0,a.kt)("p",null,"Here is how the rollback function works: when the user clicks the ",(0,a.kt)("strong",{parentName:"p"},"Rollback")," button, 4D shuts the current database and restores the last backup of the database data. The restored database is then opened and 4D integrates the operations of the data log file up through to the selected operation. If the database has not yet been saved, 4D starts with a blank data file."))}d.isMDXComponent=!0},7759:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MSC_rollback1-b21c02b97be368379d88a7bdb43633bc.png"},72878:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MSC_rollback2-95de20fc9ee798b7396060a9a7ec5b1b.png"}}]);