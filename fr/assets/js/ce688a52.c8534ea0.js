"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),v=o,m=d["".concat(l,".").concat(v)]||d[v]||p[v]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92528:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"sql-server",title:"SQL Server Page"},l=void 0,c={unversionedId:"ServerWindow/sql-server",id:"ServerWindow/sql-server",title:"SQL Server Page",description:"The SQL Server page groups together information about the integrated SQL server of 4D Server. It also includes a button that can be used to control the activation of the server.",source:"@site/docs/ServerWindow/sql-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/sql-server",permalink:"/docs/fr/next/ServerWindow/sql-server",draft:!1,tags:[],version:"current",frontMatter:{id:"sql-server",title:"SQL Server Page"},sidebar:"docs",previous:{title:"Application Server Page",permalink:"/docs/fr/next/ServerWindow/application-server"},next:{title:"HTTP Server Page",permalink:"/docs/fr/next/ServerWindow/http-server"}},u={},p=[{value:"Start / Stop SQL Server",id:"start--stop-sql-server",level:2},{value:"Information",id:"information",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Connections",id:"connections",level:3},{value:"Maximum Connections",id:"maximum-connections",level:3}],d={toc:p};function v(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"SQL Server")," page groups together information about the integrated SQL server of 4D Server. It also includes a button that can be used to control the activation of the server."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(17778).Z,width:"1036",height:"498"})),(0,a.kt)("p",null,"The upper part of the page provides information about the current status of the SQL server of 4D Server."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"State"),": Started or Stopped"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Starting time"),": Date and time the SQL server was last launched."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Uptime"),": Time elapsed since last startup of the SQL server.")),(0,a.kt)("h2",{id:"start--stop-sql-server"},"Start / Stop SQL Server"),(0,a.kt)("p",null,"This button toggles and can be used to control the activation of the 4D Server SQL server."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'When the SQL server state is "Started," the button is titled ',(0,a.kt)("strong",{parentName:"li"},"Stop SQL Server"),". If you click on this button, the 4D Server SQL server is immediately stopped; it no longer replies to any external SQL requests received on the designated TCP port."),(0,a.kt)("li",{parentName:"ul"},'When the SQL server state is "Stopped," the button is titled ',(0,a.kt)("strong",{parentName:"li"},"Start SQL Server"),". If you click on this button, the 4D Server SQL server is immediately started; it replies to any external SQL queries received on the designated TCP port. Note that you will need a suitable license to be able to use the 4D SQL server.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The SQL server can also be launched automatically on application startup (option in the Settings) or by programming.")),(0,a.kt)("h2",{id:"information"},"Information"),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This area provides information about the SQL server configuration parameters: automatic launching on startup, listening IP address, TCP port (19812 by default) and enabling of SSL for SQL connections (does not concern 4D nor HTTP connections)."),(0,a.kt)("p",null,"These parameters can be modified via the 4D Settings."),(0,a.kt)("h3",{id:"connections"},"Connections"),(0,a.kt)("p",null,"Number of SQL connections currently open on 4D Server."),(0,a.kt)("h3",{id:"maximum-connections"},"Maximum Connections"),(0,a.kt)("p",null,"Maximum number of simultaneous SQL connections allowed. This value depends on the license installed on the server machine."))}v.isMDXComponent=!0},17778:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-admin-sql-page-073207509ee5a53f2e3e69c2d106d4ab.png"}}]);