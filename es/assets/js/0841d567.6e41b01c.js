"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"plug-ins",title:"Plug-ins"},r=void 0,s={unversionedId:"Concepts/plug-ins",id:"version-19/Concepts/plug-ins",title:"Plug-ins",description:"As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding plug-ins to your 4D development environment.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/plug-ins.md",sourceDirName:"Concepts",slug:"/Concepts/plug-ins",permalink:"/docs/es/19/Concepts/plug-ins",draft:!1,tags:[],version:"19",frontMatter:{id:"plug-ins",title:"Plug-ins"},sidebar:"docs",previous:{title:"Components",permalink:"/docs/es/19/Concepts/components"},next:{title:"Identifiers",permalink:"/docs/es/19/Concepts/identifiers"}},u={},p=[{value:"Why the need for a plug-in?",id:"why-the-need-for-a-plug-in",level:2},{value:"What is a plug-in and what can it do?",id:"what-is-a-plug-in-and-what-can-it-do",level:2},{value:"Important note",id:"important-note",level:3},{value:"How to create a plug-in?",id:"how-to-create-a-plug-in",level:2},{value:"How to install a plug-in?",id:"how-to-install-a-plug-in",level:2}],c={toc:p};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding ",(0,a.kt)("strong",{parentName:"p"},"plug-ins")," to your 4D development environment."),(0,a.kt)("h2",o({},{id:"why-the-need-for-a-plug-in"}),"Why the need for a plug-in?"),(0,a.kt)("p",null,"Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure."),(0,a.kt)("p",null,"It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected."),(0,a.kt)("p",null,"The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. 4D Plug-ins multiply that application or user's power and productivity."),(0,a.kt)("h2",o({},{id:"what-is-a-plug-in-and-what-can-it-do"}),"What is a plug-in and what can it do?"),(0,a.kt)("p",null,"A plug-in is a piece of code that 4D launches at start up. It adds functionality to 4D and thus increases its capacity."),(0,a.kt)("p",null,"Usually, a plug-in does things that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4D cannot do (ie, specific platform technology),"),(0,a.kt)("li",{parentName:"ul"},"will be very hard to write just using 4D,"),(0,a.kt)("li",{parentName:"ul"},"are only available as Plug-in Entrypoint")),(0,a.kt)("p",null,"A plug-in usually contains a set of routines given to the 4D Developer. It can handle an External Area and run an external process."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"plug-in routine")," is a routine written in native language (usually C or C++) that causes an action."),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("strong",{parentName:"li"},"external area")," is a part of a form that can display almost everything and interact with the user when necessary."),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("strong",{parentName:"li"},"external process")," is a process that runs alone, usually in a loop, doing almost everything it wants. All process code belongs to the plug-in, 4D is simply present to receive/send events to the process.")),(0,a.kt)("h3",o({},{id:"important-note"}),"Important note"),(0,a.kt)("p",null,'A plug-in can be very simple, with just one routine performing a very small task, or it can be very complex, involving hundred of routines and areas. There is virtually no limit to what a plug-in can do, however every plug-in developer should remember that a plug-in is a "sample" piece of code. It is the plug-in that runs within 4D, not the opposite. As a piece of code, it is the host of 4D; it is not a stand-alone application. It shares CPU time and memory with 4D and other plug-ins, thus, it should be a polite code, using just what is necessary to run. For example, in long loops, a plug-in should call ',(0,a.kt)("inlineCode",{parentName:"p"},"PA_Yield()")," to give time to the 4D scheduler unless its task is critical for both it and the application."),(0,a.kt)("h2",o({},{id:"how-to-create-a-plug-in"}),"How to create a plug-in?"),(0,a.kt)("p",null,"4D provides on GitHub an open-source ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/4d/4D-Plugin-SDK"}),(0,a.kt)("strong",{parentName:"a"},"plug-in SDK")),", containing the 4D Plugin API and the 4D Plugin Wizard:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("a",o({parentName:"li"},{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API"}),(0,a.kt)("strong",{parentName:"a"},"4D Plugin API")),", written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. 4D Plug-in API functions manage all the interactions between the 4D application and your plug-in."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",o({parentName:"li"},{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard"}),(0,a.kt)("strong",{parentName:"a"},"4D Plugin Wizard"))," is an essential tool that simplifies the task of developing 4D plug-ins. It writes the code 4D needs to correctly load and interact with a plug-in, allowing you to concentrate on your own code.")),(0,a.kt)("h2",o({},{id:"how-to-install-a-plug-in"}),"How to install a plug-in?"),(0,a.kt)("p",null,"You install plug-ins in the 4D environment by copying their files into the appropriate folder."),(0,a.kt)("p",null,"\u201cPluginName.bundle\u201d folders contain both Windows and macOS versions of 4D plug-ins. Their specific internal architecture lets 4D Server load the appropriate version according to the platform where the client machine will be run. To install a plug-in in your environment, you just need to put the \u201cPluginName.bundle\u201d folder or package concerned into the desired ",(0,a.kt)("strong",{parentName:"p"},"Plugins")," folder."),(0,a.kt)("p",null,"You can put the Plugins folder in two different places:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At the level of the 4D executable application, i.e.:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Under Windows: next to the .exe file"),(0,a.kt)("li",{parentName:"ul"},"Under macOS: at the first level of the Contents folder inside the application package. In this case, plug-ins are available in every project opened by this application."))),(0,a.kt)("li",{parentName:"ul"},"At the same level as the Project folder. In this case, plug-ins are only available in this particular project.")),(0,a.kt)("p",null,"The choice of location depends on how you want to use the plug-in."),(0,a.kt)("p",null,"If the same plug-in is placed in both locations, 4D will only load the one located next to the structure. In an application that is compiled and merged using 4D Volume Desktop, if there are several instances of the same plug-in present, this will prevent the application from opening."),(0,a.kt)("p",null,"Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. Then open your project with 4D. If any plug-in requires a specific license for use, it will be loaded but not available for use."))}d.isMDXComponent=!0}}]);