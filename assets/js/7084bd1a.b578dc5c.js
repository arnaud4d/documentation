"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51648],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),b=n,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||r;return a?o.createElement(h,l(l({ref:t},p),{},{components:a})):o.createElement(h,l({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},68393:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=a(87462),n=a(63366),r=(a(67294),a(3905)),l=["components"],s={id:"rollback",title:"Rollback Page",sidebar_label:"Rollback Page"},i=void 0,c={unversionedId:"MSC/rollback",id:"version-18/MSC/rollback",title:"Rollback Page",description:"You use the Rollback page to access the rollback function among the operations carried out on the data file. It resembles an undo function applied over several levels. It is particularly useful when a record has been deleted by mistake in a database.",source:"@site/versioned_docs/version-18/MSC/rollback.md",sourceDirName:"MSC",slug:"/MSC/rollback",permalink:"/docs/18/MSC/rollback",draft:!1,tags:[],version:"18",frontMatter:{id:"rollback",title:"Rollback Page",sidebar_label:"Rollback Page"},sidebar:"docs",previous:{title:"Compact Page",permalink:"/docs/18/MSC/compact"},next:{title:"Restore Page",permalink:"/docs/18/MSC/restore"}},p={},u=[],d={toc:u};function b(e){var t=e.components,s=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You use the Rollback page to access the rollback function among the operations carried out on the data file. It resembles an undo function applied over several levels. It is particularly useful when a record has been deleted by mistake in a database."),(0,r.kt)("p",null,"This function is only available when the database functions with a data log file."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(23665).Z,width:"882",height:"666"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the ",(0,r.kt)("strong",{parentName:"p"},"Values")," column and a dialog requesting the passphrase or the data key is displayed if you click the ",(0,r.kt)("strong",{parentName:"p"},"Rollback")," button.")),(0,r.kt)("p",null,"The contents and functioning of the list of operations are the same as for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/18/MSC/analysis"},"Activity analysis")," window."),(0,r.kt)("p",null,"To perform a rollback among the operations, select the row after which all operations must be cancelled. The operation of the selected row will be the last kept. If, for example, you wish to cancel a deletion, select the operation located just before it. The deletion operation, as well as all subsequent operations, will be cancelled."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(23336).Z,width:"1008",height:"366"})),(0,r.kt)("p",null,"Next click on the ",(0,r.kt)("strong",{parentName:"p"},"Rollback")," button. 4D asks you to confirm the operation. If you click ",(0,r.kt)("strong",{parentName:"p"},"OK"),", the data is then restored to the exact state it was in at the moment of the selected action."),(0,r.kt)("p",null,"You use the menu found at the bottom of the window to select a data log file to be used when you apply the rollback function to a database restored from an archive file. In this case, you must specify the data log file corresponding to the archive."),(0,r.kt)("p",null,"Here is how the rollback function works: when the user clicks the ",(0,r.kt)("strong",{parentName:"p"},"Rollback")," button, 4D shuts the current database and restores the last backup of the database data. The restored database is then opened and 4D integrates the operations of the data log file up through to the selected operation. If the database has not yet been saved, 4D starts with a blank data file."))}b.isMDXComponent=!0},23665:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/MSC_rollback1-b21c02b97be368379d88a7bdb43633bc.png"},23336:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/MSC_rollback2-95de20fc9ee798b7396060a9a7ec5b1b.png"}}]);