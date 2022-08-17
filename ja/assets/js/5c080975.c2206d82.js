"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,g=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>f,metadata:()=>g,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&p(e,r,t[r]);return e};const f={id:"sql",title:"SQL page"},d=void 0,g={unversionedId:"settings/sql",id:"version-19-R6/settings/sql",title:"SQL page",description:"This page is used to configure the publishing parameters, access rights, and engine options of the 4D SQL Server.",source:"@site/versioned_docs/version-19-R6/settings/sql.md",sourceDirName:"settings",slug:"/settings/sql",permalink:"/docs/ja/settings/sql",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"sql",title:"SQL page"},sidebar:"docs",previous:{title:"Web page",permalink:"/docs/ja/settings/web"},next:{title:"PHP page",permalink:"/docs/ja/settings/php"}},m={},h=[{value:"SQL Server Publishing",id:"sql-server-publishing",level:2},{value:"SQL Access Control for the default schema",id:"sql-access-control-for-the-default-schema",level:2},{value:"SQL Engine Options",id:"sql-engine-options",level:2}],v={toc:h};function b(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This page is used to configure the publishing parameters, access rights, and engine options of the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://doc.4d.com/What-s-new/4D-SQL-Reference-19-R3/Using-SQL-in-4D.200-5680718.en.html"}),"4D SQL Server"),". "),(0,n.kt)("h2",u({},{id:"sql-server-publishing"}),"SQL Server Publishing"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://doc.4d.com/4Dv19R2/4D/19-R2/Configuration-of-4D-SQL-Server.300-5541563.en.html"}),(0,n.kt)("strong",{parentName:"a"},"Configuration of 4D SQL Server"))," page on doc.4d.com. "),(0,n.kt)("h2",u({},{id:"sql-access-control-for-the-default-schema"}),"SQL Access Control for the default schema"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://doc.4d.com/4Dv19R2/4D/19-R2/Configuration-of-4D-SQL-Server.300-5541563.en.html"}),(0,n.kt)("strong",{parentName:"a"},"Configuration of 4D SQL Server"))," page on doc.4d.com. "),(0,n.kt)("h2",u({},{id:"sql-engine-options"}),"SQL Engine Options"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SQL-engine-implementation.300-5680725.en.html"}),(0,n.kt)("strong",{parentName:"a"},"SQL Engine Options"))," paragraph on doc.4d.com."))}b.isMDXComponent=!0}}]);