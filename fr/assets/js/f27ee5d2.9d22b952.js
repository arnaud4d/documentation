"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64287],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(a),u=r,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},18215:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"analysis",title:"Activity analysis Page",sidebar_label:"Activity analysis Page"},s=void 0,p={unversionedId:"MSC/analysis",id:"version-18/MSC/analysis",title:"Activity analysis Page",description:"The Activity analysis page allows viewing the contents of the current log file. This function is useful for parsing the use of a database or detecting the operation(s) that caused errors or malfunctions. In the case of a database in client-server mode, it allows verifying operations performed by each client machine.",source:"@site/versioned_docs/version-18/MSC/analysis.md",sourceDirName:"MSC",slug:"/MSC/analysis",permalink:"/fr/docs/18/MSC/analysis",draft:!1,tags:[],version:"18",frontMatter:{id:"analysis",title:"Activity analysis Page",sidebar_label:"Activity analysis Page"},sidebar:"docs",previous:{title:"Information Page",permalink:"/fr/docs/18/MSC/information"},next:{title:"Verify Page",permalink:"/fr/docs/18/MSC/verify"}},c={},d=[],f={toc:d};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Activity analysis page allows viewing the contents of the current log file. This function is useful for parsing the use of a database or detecting the operation(s) that caused errors or malfunctions. In the case of a database in client-server mode, it allows verifying operations performed by each client machine."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is also possible to rollback the operations carried out on the data of the database. For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/18/MSC/rollback"},"Rollback page"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(69703).Z,width:"882",height:"666"})),(0,o.kt)("p",null,"Every operation recorded in the log file appears as a row. The columns provide various information on the operation. You can reorganize the columns as desired by clicking on their headers."),(0,o.kt)("p",null,"This information allows you to identify the source and context of each operation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Operation"),": Sequence number of operation in the log file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Action"),": Type of operation performed on the data. This column can contain one of the following operations:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Opening of Data File: Opening of a data file."),(0,o.kt)("li",{parentName:"ul"},"Closing of Data File: Closing of an open data file."),(0,o.kt)("li",{parentName:"ul"},"Creation of a Context: Creation of a process that specifies an execution context."),(0,o.kt)("li",{parentName:"ul"},"Closing of a Context: Closing of process."),(0,o.kt)("li",{parentName:"ul"},"Addition: Creation and storage of a record."),(0,o.kt)("li",{parentName:"ul"},"Adding a BLOB: Storage of a BLOB in a BLOB field."),(0,o.kt)("li",{parentName:"ul"},"Deletion: Deletion of a record."),(0,o.kt)("li",{parentName:"ul"},"Modification: Modification of a record."),(0,o.kt)("li",{parentName:"ul"},"Start of Transaction: Transaction started."),(0,o.kt)("li",{parentName:"ul"},"Validation of Transaction: Transaction validated."),(0,o.kt)("li",{parentName:"ul"},"Cancellation of Transaction: Transaction cancelled."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Table"),": Table to which the added/deleted/modified record or BLOB belongs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Primary Key/BLOB"),": contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Process"),": Internal number of process in which the operation was carried out. This internal number corresponds to the context of the operation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Size"),": Size (in bytes) of data processed by the operation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Date and Hour"),": Date and hour when the operation was performed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"User"),": Name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the ID of the user is displayed. If the 4D passwords are not enabled, this column is blank.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Values"),": Values of fields for the record in the case of addition or modification. The values are separated by \u201c;\u201d. Only values represented in alphanumeric form are displayed.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"*Note:")," If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Records"),": Record number."))),(0,o.kt)("p",null,"Click on ",(0,o.kt)("strong",{parentName:"p"},"Analyze")," to update the contents of the current log file of the selected database (named by default dataname.journal). The Browse button can be used to select and open another log file for the database. The ",(0,o.kt)("strong",{parentName:"p"},"Export...")," button can be used to export the contents of the file as text."))}u.isMDXComponent=!0},69703:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MSC_analysis-a64034303099f14f6f52603e672cecae.png"}}]);