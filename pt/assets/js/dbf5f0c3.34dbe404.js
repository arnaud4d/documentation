"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71005],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):A(A({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),l=c(a),d=n,h=l["".concat(o,".").concat(d)]||l[d]||s[d]||i;return a?r.createElement(h,A(A({ref:t},u),{},{components:a})):r.createElement(h,A({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,A=new Array(i);A[0]=l;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g.mdxType="string"==typeof e?e:n,A[1]=g;for(var c=2;c<i;c++)A[c]=a[c];return r.createElement.apply(null,A)}return r.createElement.apply(null,a)}l.displayName="MDXCreateElement"},17702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>g,metadata:()=>c,toc:()=>s});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),A=["components"],g={id:"debugging-remote",title:"Debugging from remote machines"},o=void 0,c={unversionedId:"Debugging/debugging-remote",id:"version-19-R6/Debugging/debugging-remote",title:"Debugging from remote machines",description:"Overview",source:"@site/versioned_docs/version-19-R6/Debugging/debugging-remote.md",sourceDirName:"Debugging",slug:"/Debugging/debugging-remote",permalink:"/pt/docs/Debugging/debugging-remote",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"debugging-remote",title:"Debugging from remote machines"},sidebar:"docs",previous:{title:"Breakpoints and Command Catching",permalink:"/pt/docs/Debugging/breakpoints"},next:{title:"Description of log files",permalink:"/pt/docs/Debugging/debugLogFiles"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Attached debugger",id:"attached-debugger",level:2},{value:"Attaching the debugger",id:"attaching-the-debugger",level:2},{value:"Attaching debugger at startup",id:"attaching-debugger-at-startup",level:2},{value:"Rejected attachment requests",id:"rejected-attachment-requests",level:2}],l={toc:s};function d(e){var t=e.components,g=(0,n.Z)(e,A);return(0,i.kt)("wrapper",(0,r.Z)({},l,g,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"When a 4D database is running on 4D Server in interpreted mode, you can debug the 4D code running on the server from a remote 4D client logged to the project. You just need to attach the debugger to a specific remote machine, and the code execution can be monitored in the debugger directly on the remote machine."),(0,i.kt)("p",null,"On a remote machine, the ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/Debugging/debugger"},"debugger window")," displays a specific server icon and a blue background color to indicate that you are debugging server code:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"debugger-window-remote",src:a(82451).Z,width:"754",height:"511"})),(0,i.kt)("p",null,"This feature is particularly useful when 4D Server runs in headless mode (see ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/Admin/cli"},"Command Line Interface"),"), or when access to the server machine is not easy.  "),(0,i.kt)("h2",{id:"attached-debugger"},"Attached debugger"),(0,i.kt)("p",null,"Only one debugger can debug a 4D Server application at a given time. It is called the ",(0,i.kt)("strong",{parentName:"p"},"attached debugger"),". The attached debugger can be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the local 4D Server debugger (default) - if the server is not running headless."),(0,i.kt)("li",{parentName:"ul"},"the debugger of a remote 4D client - if the remote session has access to Design mode.")),(0,i.kt)("p",null,"The attached debugger is called whenever a 4D Server encounters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a break point"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"TRACE")," command"),(0,i.kt)("li",{parentName:"ul"},"a caught command"),(0,i.kt)("li",{parentName:"ul"},"an error")),(0,i.kt)("p",null,"Keep in mind that error messages are sent to the attached debugger machine. This means that in the case of a remote debugger, server error messages are displayed on the remote 4D client."),(0,i.kt)("p",null,"Note that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The code executed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"On Server Startup Database")," Method cannot be debugged remotely. It can only be debugged on the server side"),(0,i.kt)("li",{parentName:"ul"},"If no debugger is attached, the running code is not stopped by debugging commands")),(0,i.kt)("h2",{id:"attaching-the-debugger"},"Attaching the debugger"),(0,i.kt)("p",null,"By default when you start an interpreted application:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if 4D Server is not running headless, the debugger is attached to the server,"),(0,i.kt)("li",{parentName:"ul"},"if 4D Server is running headless, no debugger is attached.")),(0,i.kt)("p",null,"You can attach the debugger to any remote 4D client allowed to connect to the 4D Server application."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The remote 4D client's user session must have access to the Design environment of the database.")),(0,i.kt)("p",null,"To attach the debugger to a remote 4D client:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the 4D Server menu bar, select ",(0,i.kt)("strong",{parentName:"li"},"Edit")," > ",(0,i.kt)("strong",{parentName:"li"},"Detach Debugger")," so that the debugger becomes available to remote machines (this step is useless if the 4D Server is running headless)."),(0,i.kt)("li",{parentName:"ol"},"In a remote 4D client connected to the server, select ",(0,i.kt)("strong",{parentName:"li"},"Run")," > ",(0,i.kt)("strong",{parentName:"li"},"Attach Remote Debugger"))),(0,i.kt)("p",null,"If the attachment is accepted (see ",(0,i.kt)("a",{parentName:"p",href:"#rejected-attachment-requests"},"Rejected attachment requests"),"), the menu command becomes ",(0,i.kt)("strong",{parentName:"p"},"Detach Remote Debugger"),"."),(0,i.kt)("p",null,"The debugger is then attached to the remote 4D client:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"until the end of the user session"),(0,i.kt)("li",{parentName:"ul"},"until you select ",(0,i.kt)("inlineCode",{parentName:"li"},"Detach Remote Debugger"))),(0,i.kt)("p",null,"To attach the debugger back to the server:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the remote 4D client that has the debugger attached, select ",(0,i.kt)("strong",{parentName:"li"},"Run")," > ",(0,i.kt)("strong",{parentName:"li"},"Detach Remote Debugger"),"."),(0,i.kt)("li",{parentName:"ol"},"In the 4D Server menu bar, select ",(0,i.kt)("strong",{parentName:"li"},"Edit")," > ",(0,i.kt)("strong",{parentName:"li"},"Attach debugger"),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When the debugger is attached to the server (default), all server processes are automatically executed in cooperative mode to enable debugging. This can have a significant impact on performance. When you don't need to debug on the server machine, it is recommended to detach the debugger and attach it to a remote machine if necessary.  ")),(0,i.kt)("h2",{id:"attaching-debugger-at-startup"},"Attaching debugger at startup"),(0,i.kt)("p",null,"4D allows you to automatically attach the debugger to a remote 4D client or the server at startup:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On the server (if not headless), this option is named ",(0,i.kt)("strong",{parentName:"li"},"Attach Debugger At Startup"),". When the server is started, it automatically attaches the debugger (default).")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning"),": If this option is selected for a server which is subsequently launched in headless mode, the debugger won't be available for this server.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On a remote 4D client, this option is named ",(0,i.kt)("strong",{parentName:"li"},"Attach Remote Debugger At Startup"),". When selected, the remote 4D client will automatically try to attach the remote debugger at each subsequent connection to the same 4D Server database. If the attachment is accepted (see ",(0,i.kt)("a",{parentName:"li",href:"#rejected-attachment-requests"},"Rejected attachment requests"),"), the remote debugger is automatically attached to the remote 4D client and the ",(0,i.kt)("strong",{parentName:"li"},"Detach Remote Debugger option is displayed"),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This setting is applied per project and is stored locally in the ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/Project/architecture#userpreferencesusername"},(0,i.kt)("inlineCode",{parentName:"a"},".4DPreferences"))," file.")),(0,i.kt)("h2",{id:"rejected-attachment-requests"},"Rejected attachment requests"),(0,i.kt)("p",null,"While the debugger is already attached to a remote 4D client or to 4D Server, no other machine can attach the debugger."),(0,i.kt)("p",null,"If a machine tries to attach the debugger while it is already attached, the attachment is rejected and a dialog box appears:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"attach-debugger-dialog",src:a(98469).Z,width:"482",height:"231"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"attach-debugger-dialog-2",src:a(25545).Z,width:"482",height:"168"})),(0,i.kt)("p",null,"Attaching the debugger in this case requires that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the attached debugger is detached from the server or from the remote 4D client using respectively the ",(0,i.kt)("strong",{parentName:"li"},"Detach debugger")," or ",(0,i.kt)("strong",{parentName:"li"},"Detach remote debugger")," menu command,"),(0,i.kt)("li",{parentName:"ul"},"the attached remote 4D client session is closed.")))}d.isMDXComponent=!0},25545:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},98469:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},82451:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/debuggerWindowRemote-7031fc37327ed258c4104052ae225c7a.png"}}]);