"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19436],{3905:(e,t,A)=>{A.d(t,{Zo:()=>s,kt:()=>u});var r=A(67294);function o(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function n(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,r)}return A}function i(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?n(Object(A),!0).forEach((function(t){o(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):n(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function a(e,t){if(null==e)return{};var A,r,o=function(e,t){if(null==e)return{};var A,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)A=n[r],t.indexOf(A)>=0||(o[A]=e[A]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)A=n[r],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(o[A]=e[A])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),A=t;return e&&(A="function"==typeof e?e(t):i(i({},t),e)),A},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var A=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(A),u=o,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||n;return A?r.createElement(g,i(i({ref:t},s),{},{components:A})):r.createElement(g,i({ref:t},s))}));function u(e,t){var A=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=A.length,i=new Array(n);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<n;c++)i[c]=A[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,A)}d.displayName="MDXCreateElement"},88837:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>g,toc:()=>E});var r=A(3905),o=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,A)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:A}):e[t]=A,p=(e,t)=>{for(var A in t||(t={}))l.call(t,A)&&s(e,A,t[A]);if(a)for(var A of a(t))c.call(t,A)&&s(e,A,t[A]);return e};const d={id:"developing",title:"Developing a project"},u=void 0,g={unversionedId:"Project/developing",id:"version-18/Project/developing",title:"Developing a project",description:"Development tools",source:"@site/versioned_docs/version-18/Project/developing.md",sourceDirName:"Project",slug:"/Project/developing",permalink:"/docs/es/18/Project/developing",draft:!1,tags:[],version:"18",frontMatter:{id:"developing",title:"Developing a project"},sidebar:"docs",previous:{title:"Architecture of a 4D project",permalink:"/docs/es/18/Project/architecture"},next:{title:"Building a project package",permalink:"/docs/es/18/Project/building"}},m={},E=[{value:"Development tools",id:"development-tools",level:2},{value:"Project file access",id:"project-file-access",level:2}],f={toc:E};function v(e){var t,o=e,{components:s}=o,d=((e,t)=>{var A={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(A[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&c.call(e,r)&&(A[r]=e[r]);return A})(o,["components"]);return(0,r.kt)("wrapper",(t=p(p({},f),d),n(t,i({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("h2",p({},{id:"development-tools"}),"Development tools"),(0,r.kt)("p",null,"4D database projects are created locally, using the ",(0,r.kt)("strong",{parentName:"p"},"4D Developer")," application. To open a project from 4D Developer, select the project's main file, named ",(0,r.kt)("em",{parentName:"p"},"databaseName.4DProject")," (see ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/es/18/Project/architecture"}),"Architecture of a 4D project"),"). Note that you can also work with any text editor since most of the 4D project files are text files. Concurrent file access is handled via a file access manager (see below)."),(0,r.kt)("p",null,"4D Server can open ",(0,r.kt)("em",{parentName:"p"},"databaseName.4DProject")," files for testing purposes: remote 4D machines can connect and use the database, but all database structure files are read-only."),(0,r.kt)("p",null,"Multi-user development is managed through standard source control tools, which allow developers to work on different branches, and compare, merge, or revert modifications."),(0,r.kt)("h2",p({},{id:"project-file-access"}),"Project file access"),(0,r.kt)("p",null,"When working on a project in 4D Developer, you can use built-in 4D editors to create, modify, or save structure items, methods, forms, etc. Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations. For example, if the same method is edited in a method editor window ",(0,r.kt)("em",{parentName:"p"},"and")," in a text editor, saving both modifications will result in a conflict."),(0,r.kt)("p",null,"The 4D Developer framework includes a file access manager to control concurrent access:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if an open file which is read-only at the OS level, a locked icon is displayed in the editor:\n",(0,r.kt)("img",{src:A(50149).Z,width:"22",height:"31"})),(0,r.kt)("li",{parentName:"ul"},"if an open file is edited concurrently from different locations, 4D displays an alert dialog box when trying to save the changes:\n",(0,r.kt)("img",{src:A(86491).Z,width:"352",height:"185"}),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Yes"),": discard editor changes and reload"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No"),": save changes and overwrite the other version"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cancel"),": do not save")))),(0,r.kt)("p",null,"This feature is enabled for all built-in editors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Structure editor"),(0,r.kt)("li",{parentName:"ul"},"Form editor"),(0,r.kt)("li",{parentName:"ul"},"Method editor"),(0,r.kt)("li",{parentName:"ul"},"Settings editor"),(0,r.kt)("li",{parentName:"ul"},"Toolbox editor")))}v.isMDXComponent=!0},50149:(e,t,A)=>{A.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAfCAIAAABs2aqkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAE1SURBVEhL7ZQ9DoMwDEZ7ScaOPQMTDEhcgw1xAK7BIcoBUNmRaF9iKwk/EVLbAVV9U2x//uJEkMv4Mae1aNs2TdOrhQWhFiIsLPq+z/M8y7Ku6x4WFoQkKalow8ICadM08zw/AwhJUlLRBm/BwGxIwzRNdV3fLCwISVKKnchbcGzGZlvaiqK4W1gQkqSEQKVLvAWXx+FRsznNkmRBSJISAkmu8BZJkiAFFpqyxPKOv4XnSxbDMFRVheIQZIil02EsKJRlSU12i4EAGWLpdBgLPp7DfgEZYul0GAsmVEmATK5BAEnpdJzHwv1gIbsWuz+bsXC/+SG7v7yxcI+NCiPEHh5jAdS2T14IJQTIRB+iFryulIFRV/dCSFKqu4+wWggMyVG5MLlLgZBk7OGEhcV7/IjFOL4AhB3iYxYMqdEAAAAASUVORK5CYII="},86491:(e,t,A)=>{A.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);