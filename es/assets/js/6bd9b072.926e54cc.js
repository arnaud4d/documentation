"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"application-server",title:"Application Server Page"},l=void 0,p={unversionedId:"ServerWindow/application-server",id:"ServerWindow/application-server",title:"Application Server Page",description:"The Application Server page groups together information about the desktop application published by 4D Server and can be used to manage this publication.",source:"@site/docs/ServerWindow/application-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/application-server",permalink:"/docs/es/docs/next/ServerWindow/application-server",draft:!1,tags:[],version:"current",frontMatter:{id:"application-server",title:"Application Server Page"},sidebar:"docs",previous:{title:"Maintenance Page",permalink:"/docs/es/docs/next/ServerWindow/maintenance"},next:{title:"SQL Server Page",permalink:"/docs/es/docs/next/ServerWindow/sql-server"}},s={},u=[{value:"Accept/Reject New Connections",id:"acceptreject-new-connections",level:2},{value:"Information",id:"information",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Memory",id:"memory",level:3},{value:"Application Server Connections",id:"application-server-connections",level:3}],d={toc:u};function m(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Application Server page groups together information about the desktop application published by 4D Server and can be used to manage this publication."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(10723).Z,width:"1036",height:"699"})),(0,a.kt)("p",null,"The upper part of the page provides information about the current status of the 4D Server application server."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"State"),": Started or Stopped."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Starting time"),": Date and time the application server was launched. This date corresponds to the opening of the project by 4D Server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Uptime"),": Time elapsed since last opening of the project by the server.")),(0,a.kt)("h2",{id:"acceptreject-new-connections"},"Accept/Reject New Connections"),(0,a.kt)("p",null,"This button toggles and can be used to manage the access of new desktop client machines to the application server."),(0,a.kt)("p",null,"By default, when the project is published:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The button is titled "Reject new connections."'),(0,a.kt)("li",{parentName:"ul"},"New desktop clients can connect freely (within the limit of the connections permitted by the license)."),(0,a.kt)("li",{parentName:"ul"},'The project name is published in the remote connection dialog box (if the "At Startup Publish Database Name in the Connection Dialog" option is checked in the Preferences).')),(0,a.kt)("p",null,"If you click on the ",(0,a.kt)("strong",{parentName:"p"},"Reject new connections")," button:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The button title changes to "Accept new connections."'),(0,a.kt)("li",{parentName:"ul"},"No new desktop client can then connect. Clients attempting to connect will receive the following message:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(21878).Z,width:"671",height:"255"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The project name no longer appears in the remote connection dialog box."),(0,a.kt)("li",{parentName:"ul"},"Desktop clients that are already connected are not disconnected and can continue to work normally.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can perform the same action with the ",(0,a.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19/help/command/en/page1635.html"},(0,a.kt)("inlineCode",{parentName:"a"},"REJECT NEW REMOTE CONNECTIONS"))," command.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you click on the ",(0,a.kt)("strong",{parentName:"li"},"Accept new connections button"),", the application server returns to its default state.")),(0,a.kt)("p",null,"This feature permits, for example, an administrator to carry out various maintenance operations (verification, compacting, etc.) just after having started the server. If the administrator uses a remote connection, they can be certain to be the only one modifying the data. It is also possible to use this function in preparation of a maintenance operation which requires that there be no desktop client machine connected."),(0,a.kt)("h2",{id:"information"},"Information"),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This area provides information about the 4D project published by the server: name and location of data and structure files and name of database log file. You can click on the structure or data file name in order to view its complete pathname."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Mode")," field indicates the current execution mode of the application: compiled or interpreted."),(0,a.kt)("p",null,"The lower part of the area indicates the server configuration parameters (launched as service, port and IP address) and the enabling of TLS for client-server connections (does not concern SQL nor HTTP connections)."),(0,a.kt)("h3",{id:"memory"},"Memory"),(0,a.kt)("p",null,"This area indicates the ",(0,a.kt)("strong",{parentName:"p"},"Total cache memory")," (parameter set in the settings) and the ",(0,a.kt)("strong",{parentName:"p"},"Used cache memory")," (dynamic allocation by 4D Server according to its needs)."),(0,a.kt)("h3",{id:"application-server-connections"},"Application Server Connections"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Maximum"),": maximum number of simultaneous client connections allowed for the application server. This value depends on the license installed on the server machine."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Used"),": actual number of connections currently being used.")))}m.isMDXComponent=!0},10723:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-admin-application-page-2790afb1ca369f9c919e14a195be066d.png"},21878:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-error-5a94dad40acb679497621d693b40b05b.png"}}]);