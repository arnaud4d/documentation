"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65364],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=o,g=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={id:"maintenance",title:"Maintenance Page"},c=void 0,l={unversionedId:"ServerWindow/maintenance",id:"version-19-R6/ServerWindow/maintenance",title:"Maintenance Page",description:"The Maintenance page of the 4D Server Administration window provides information concerning the current operation of the application. It also provides access to basic maintenance functions:",source:"@site/versioned_docs/version-19-R6/ServerWindow/maintenance.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/maintenance",permalink:"/docs/pt/docs/ServerWindow/maintenance",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"maintenance",title:"Maintenance Page"},sidebar:"docs",previous:{title:"Processes Page",permalink:"/docs/pt/docs/ServerWindow/processes"},next:{title:"Application Server Page",permalink:"/docs/pt/docs/ServerWindow/application-server"}},p={},u=[{value:"Last verification/compacting",id:"last-verificationcompacting",level:2},{value:"Verify Records and Indexes",id:"verify-records-and-indexes",level:3},{value:"Compact Data...",id:"compact-data",level:3},{value:"Uptime",id:"uptime",level:2},{value:"Restart server...",id:"restart-server",level:3},{value:"Last backup",id:"last-backup",level:2},{value:"Request and Debug logs",id:"request-and-debug-logs",level:2},{value:"Start/Stop Request and Debug Logs",id:"startstop-request-and-debug-logs",level:3},{value:"View Report",id:"view-report",level:3},{value:"Load logs configuration file",id:"load-logs-configuration-file",level:3},{value:"Pause logging",id:"pause-logging",level:3}],d={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Maintenance")," page of the 4D Server Administration window provides information concerning the current operation of the application. It also provides access to basic maintenance functions:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(26281).Z,width:"1036",height:"699"})),(0,r.kt)("h2",{id:"last-verificationcompacting"},"Last verification/compacting"),(0,r.kt)("p",null,"These areas indicate the date, time and status of the last ",(0,r.kt)("a",{parentName:"p",href:"/docs/pt/docs/MSC/verify"},"data verification")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/pt/docs/MSC/compact"},"compacting operation")," carried out on the database."),(0,r.kt)("h3",{id:"verify-records-and-indexes"},"Verify Records and Indexes"),(0,r.kt)("p",null,"This button can be used to launch the verification operation directly, without interrupting the server. Note that the server may be noticeably slowed down during the operation."),(0,r.kt)("p",null,"All the records and all the indexes of the database are verified. If you want to be able to target the verification or have additional options available, you will need to use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pt/docs/MSC/overview"},"Maintenance and Security Center")," (MSC)."),(0,r.kt)("p",null,"After verification, a report file is generated in XML format on the server in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pt/docs/Project/architecture#logs"},"maintenance Logs")," folder. The ",(0,r.kt)("strong",{parentName:"p"},"View Report")," button (named ",(0,r.kt)("strong",{parentName:"p"},"Download Report")," if the operation was carried out from a remote machine) lets you display the file in your browser."),(0,r.kt)("h3",{id:"compact-data"},"Compact Data..."),(0,r.kt)("p",null,"Thus button can be used to launch a data compacting operation directly. This operation requires stopping the server: when you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(96286).Z,width:"502",height:"356"})),(0,r.kt)("p",null,"After the actual interruption of the application service, 4D Server carries out a standard compacting operation on the database data. If you want to have additional options available, you will need to use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pt/docs/MSC/overview"},"MSC"),"."),(0,r.kt)("p",null,"Once the compacting is finished, 4D Server automatically restarts the application. The 4D users can then be reconnected."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the request for compacting was carried out from a remote 4D remote machine, this machine is automatically reconnected by 4D Server.")),(0,r.kt)("p",null,"After verification, a report file is generated in XML format on the server in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pt/docs/Project/architecture#logs"},"maintenance Logs")," folder. The ",(0,r.kt)("strong",{parentName:"p"},"View Report")," button (named ",(0,r.kt)("strong",{parentName:"p"},"Download Report")," if the operation was carried out from a remote machine) lets you display the file in your browser."),(0,r.kt)("h2",{id:"uptime"},"Uptime"),(0,r.kt)("p",null,"This area indicates the duration of the 4D Server application execution since the last time it was started (days, hours and minutes)."),(0,r.kt)("h3",{id:"restart-server"},"Restart server..."),(0,r.kt)("p",null,"This button can be used to immediately close and restart the project. When you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation. After validation, 4D Server automatically closes and reopens the project. The 4D users can then be reconnected."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the request for restarting was carried out from a remote 4D machine, this machine is automatically reconnected by 4D Server.")),(0,r.kt)("h2",{id:"last-backup"},"Last backup"),(0,r.kt)("p",null,"This area indicates the date and time of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pt/docs/MSC/backup"},"last backup")," of the database and provides information about the next scheduled automatic backup (if any). Automatic backups are configured using the ",(0,r.kt)("strong",{parentName:"p"},"Scheduler")," page of the structure settings."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last backup"),": date and time of last backup."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Next backup"),": date and time of next scheduled backup."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Needed space"),": estimated space needed for the backup. The actual size of the backup file may vary according to the settings (compression, etc.) and according to variations of the data file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Available space"),": space available on the backup volume.")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Start backup")," button can be used to backup the database immediately using the current backup parameters (files backed up, location of archives, options, etc.). You can view these parameters by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Settings..."),' button. During a backup on the server, the client machines are "blocked" (but not disconnected) and it is not possible for any new clients to connect.'),(0,r.kt)("h2",{id:"request-and-debug-logs"},"Request and Debug logs"),(0,r.kt)("p",null,"This area indicates the server log files recording duration (when log files are activated) and allows you to control their activation."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pt/docs/Debugging/debugLogFiles"},(0,r.kt)("strong",{parentName:"a"},"Description of log files"))," section for details on log files."),(0,r.kt)("h3",{id:"startstop-request-and-debug-logs"},"Start/Stop Request and Debug Logs"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Start Request and Debug Logs")," button starts log files. Since this may noticeably deteriorate server performance, it is to be reserved for the development phase of the application."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This button only logs operations that are executed on the server.")),(0,r.kt)("p",null,"When the logs have been activated, the button title changes to ",(0,r.kt)("strong",{parentName:"p"},"Stop Request and Debug Logs"),', so that you can stop recording requests at any time. Pay attention to the fact that restarting the log after stopping it "erases" the previous file.'),(0,r.kt)("h3",{id:"view-report"},"View Report"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"View Report")," button (named ",(0,r.kt)("strong",{parentName:"p"},"Download report")," if the operation was carried out from a remote desktop client) lets you open a system window displaying the request log file."),(0,r.kt)("h3",{id:"load-logs-configuration-file"},"Load logs configuration file"),(0,r.kt)("p",null,"This button allows you to load a special server ",(0,r.kt)("a",{parentName:"p",href:"/docs/pt/docs/Debugging/debugLogFiles#using-a-log-configuration-file"},"log configuration file")," (",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file). Such a file can be provided by 4D technical services to monitor and study specific cases."),(0,r.kt)("h3",{id:"pause-logging"},"Pause logging"),(0,r.kt)("p",null,"This button suspends all currently logging operations started on the server. This feature can be useful to temporarily lighten the server tasks."),(0,r.kt)("p",null,"When the logs have been paused, the button title changes to ",(0,r.kt)("strong",{parentName:"p"},"Resume logging"),", so that you can resume the logging operations."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can pause and resume logging using the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19/help/command/en/page642.html"},"SET DATABASE PARAMETER")," command.")))}h.isMDXComponent=!0},26281:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/server-maintenance-4bfb79992706819bcbe044fbc28cfeea.png"},96286:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/server-shut-f9f06d837e57804645a3ab89d77b810f.png"}}]);