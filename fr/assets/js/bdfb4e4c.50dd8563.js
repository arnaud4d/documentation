"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"real-time-monitor",title:"Real Time Monitor Page"},l=void 0,p={unversionedId:"ServerWindow/real-time-monitor",id:"ServerWindow/real-time-monitor",title:"Real Time Monitor Page",description:'The Real Time Monitor page monitors the progress of "long" operations performed by the application in real time. These operations are, for example, sequential queries, execution of formulas, etc.',source:"@site/docs/ServerWindow/real-time-monitor.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/real-time-monitor",permalink:"/docs/fr/next/ServerWindow/real-time-monitor",draft:!1,tags:[],version:"current",frontMatter:{id:"real-time-monitor",title:"Real Time Monitor Page"},sidebar:"docs",previous:{title:"HTTP Server Page",permalink:"/docs/fr/next/ServerWindow/http-server"},next:{title:"WebAdmin",permalink:"/docs/fr/next/Admin/webAdmin"}},d={},c=[{value:"Advanced mode",id:"advanced-mode",level:2},{value:"Snapshot button",id:"snapshot-button",level:2},{value:"Display operations at least 5 seconds",id:"display-operations-at-least-5-seconds",level:2}],m={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'The Real Time Monitor page monitors the progress of "long" operations performed by the application in real time. These operations are, for example, sequential queries, execution of formulas, etc.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(29587).Z,width:"700",height:"472"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This page is available in the administration window of the server machine and also from a remote 4D machine. In the case of a remote machine, this page displays data from operations performed on the server machine.")),(0,a.kt)("p",null,"A line is added for each long operation performed on the data. This line automatically disappears when the operation is complete (you can check the ",(0,a.kt)("strong",{parentName:"p"},"Display operations at least 5 seconds")," option to keep quick operations on screen for 5 seconds, see below)."),(0,a.kt)("p",null,"The following information is provided for each line:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Start Time"),': starting time of operation in the format: "dd/mm/yyyy - hh:mm:ss"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Duration")," (ms): duration in milliseconds of operation in progress"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Information"),": title of operation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Details"),": this area displays detailed information which will vary according to the type of operation selected. More specifically:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Created on"),': indidates whether the operation results from a client action (Created on client) or if it was started explicitly on the server by means of a stored procedure or the "Execute on server" option (Created on server).'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Operation Details"),": Operation type and (for query operations) query plan."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sub-operations")," (if any): Dependent operations of the selected operation (e.g. deleting related records before a parent record)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Process Details"),": Additional information concerning the table, field, process or client, depending on the type of operation")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Real-time monitoring page uses the ",(0,a.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19/help/command/en/page1277.html"},(0,a.kt)("inlineCode",{parentName:"a"},"GET ACTIVITY SNAPSHOT"))," command internally. More information can be found in this command description.")),(0,a.kt)("p",null,"The page is active and updated permanently as soon as it is displayed. It should be noted that its operation can significantly slow the execution of the application. It is possible to suspend the updating of this page in one of the following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"clicking on the ",(0,a.kt)("strong",{parentName:"li"},"Pause")," button,"),(0,a.kt)("li",{parentName:"ul"},"clicking in the list,"),(0,a.kt)("li",{parentName:"ul"},"pressing the space bar.")),(0,a.kt)("p",null,'When you pause the page, a "PAUSED" message appears and the button label changes to ',(0,a.kt)("strong",{parentName:"p"},"Resume"),".\nYou can resume monitoring of the operations by performing the same action as for pausing."),(0,a.kt)("h2",{id:"advanced-mode"},"Advanced mode"),(0,a.kt)("p",null,"The RTM page can display additional information, if necessary, for each listed operation."),(0,a.kt)("p",null,"To access the advanced mode for an operation, press ",(0,a.kt)("strong",{parentName:"p"},"Shift"),' and select the desired operation. All available information is then displayed in the "Process Details" area without any filtering (as returned by the ',(0,a.kt)("inlineCode",{parentName:"p"},"GET ACTIVITY SNAPSHOT")," command). Available information depends on the operation selected."),(0,a.kt)("p",null,"Here is an example of information displayed in standard mode:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(48819).Z,width:"998",height:"293"})),(0,a.kt)("p",null,"In advanced mode (",(0,a.kt)("strong",{parentName:"p"},"Shift+Click")," on the operation), additional information is displayed:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(22691).Z,width:"999",height:"288"})),(0,a.kt)("h2",{id:"snapshot-button"},"Snapshot button"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Snapshot")," button allows you to copy to the clipboard all the operations displayed in the RTM panel, as well as their related details (process and sub-operation info):"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(14126).Z,width:"140",height:"40"})),(0,a.kt)("h2",{id:"display-operations-at-least-5-seconds"},"Display operations at least 5 seconds"),(0,a.kt)("p",null,"If you check the ",(0,a.kt)("strong",{parentName:"p"},"Display operations at least 5 seconds")," option, any listed operation will be displayed on the page for at least five seconds, even after its execution is finished. Retained operations appear dimmed in the operation list. This feature is useful for getting information about operations that execute very quickly."))}u.isMDXComponent=!0},48819:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/server-admin-monitor-adv1-245fbcdba652cbfee2f046d54326bd71.png"},22691:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/server-admin-monitor-adv2-8252febb014e028685127a890471c913.png"},29587:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/server-admin-monitor-page-8ffd13ff2756e987d786f0718515a4e5.png"},14126:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);