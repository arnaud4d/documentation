"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"develop-plug-ins",title:"Developing Plug-ins"},s=void 0,p={unversionedId:"Extensions/develop-plug-ins",id:"version-19-R6/Extensions/develop-plug-ins",title:"Developing Plug-ins",description:"Why the need for a plug-in?",source:"@site/versioned_docs/version-19-R6/Extensions/develop-plug-ins.md",sourceDirName:"Extensions",slug:"/Extensions/develop-plug-ins",permalink:"/main/docs/Extensions/develop-plug-ins",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"develop-plug-ins",title:"Developing Plug-ins"},sidebar:"docs",previous:{title:"Developing Components",permalink:"/main/docs/Extensions/develop-components"},next:{title:"Overview",permalink:"/main/docs/WebServer/overview"}},u={},c=[{value:"Why the need for a plug-in?",id:"why-the-need-for-a-plug-in",level:2},{value:"What is a plug-in and what can it do?",id:"what-is-a-plug-in-and-what-can-it-do",level:2},{value:"Important note",id:"important-note",level:3},{value:"How to create a plug-in?",id:"how-to-create-a-plug-in",level:2},{value:"Sharing plug-ins",id:"sharing-plug-ins",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-the-need-for-a-plug-in"},"Why the need for a plug-in?"),(0,i.kt)("p",null,"Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure."),(0,i.kt)("p",null,"It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected."),(0,i.kt)("p",null,"The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. 4D Plug-ins multiply that application or user's power and productivity."),(0,i.kt)("h2",{id:"what-is-a-plug-in-and-what-can-it-do"},"What is a plug-in and what can it do?"),(0,i.kt)("p",null,"A plug-in is a piece of code that 4D launches at start up. It adds functionality to 4D and thus increases its capacity."),(0,i.kt)("p",null,"Usually, a plug-in does things that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"4D cannot do (ie, specific platform technology),"),(0,i.kt)("li",{parentName:"ul"},"will be very hard to write just using 4D,"),(0,i.kt)("li",{parentName:"ul"},"are only available as Plug-in Entrypoint")),(0,i.kt)("p",null,"A plug-in usually contains a set of routines given to the 4D Developer. It can handle an External Area and run an external process. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"plug-in routine")," is a routine written in native language (usually C or C++) that causes an action. "),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("strong",{parentName:"li"},"external area")," is a part of a form that can display almost everything and interact with the user when necessary."),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("strong",{parentName:"li"},"external process")," is a process that runs alone, usually in a loop, doing almost everything it wants. All process code belongs to the plug-in, 4D is simply present to receive/send events to the process. ")),(0,i.kt)("h3",{id:"important-note"},"Important note"),(0,i.kt)("p",null,'A plug-in can be very simple, with just one routine performing a very small task, or it can be very complex, involving hundred of routines and areas. There is virtually no limit to what a plug-in can do, however every plug-in developer should remember that a plug-in is a "sample" piece of code. It is the plug-in that runs within 4D, not the opposite. As a piece of code, it is the host of 4D; it is not a stand-alone application. It shares CPU time and memory with 4D and other plug-ins, thus, it should be a polite code, using just what is necessary to run. For example, in long loops, a plug-in should call ',(0,i.kt)("inlineCode",{parentName:"p"},"PA_Yield()")," to give time to the 4D scheduler unless its task is critical for both it and the application."),(0,i.kt)("h2",{id:"how-to-create-a-plug-in"},"How to create a plug-in?"),(0,i.kt)("p",null,"4D provides on GitHub an open-source ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d/4D-Plugin-SDK"},(0,i.kt)("strong",{parentName:"a"},"plug-in SDK")),", containing the 4D Plugin API and the 4D Plugin Wizard:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API"},(0,i.kt)("strong",{parentName:"a"},"4D Plugin API")),", written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. 4D Plug-in API functions manage all the interactions between the 4D application and your plug-in."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard"},(0,i.kt)("strong",{parentName:"a"},"4D Plugin Wizard"))," is an essential tool that simplifies the task of developing 4D plug-ins. It writes the code 4D needs to correctly load and interact with a plug-in, allowing you to concentrate on your own code.")),(0,i.kt)("h2",{id:"sharing-plug-ins"},"Sharing plug-ins"),(0,i.kt)("p",null,"We encourage you to support the 4D developer community by sharing your plug-ins, preferably on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/topics/4d-plugin"},"GitHub platform"),". We recommend that you use the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"4d-plugin"))," topic to be correctly referenced."))}h.isMDXComponent=!0}}]);