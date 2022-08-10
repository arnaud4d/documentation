"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3755],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"overview",title:"Overview"},c=void 0,p={unversionedId:"Project/overview",id:"Project/overview",title:"Overview",description:"A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. A 4D project is primarily made of text-based files.",source:"@site/docs/Project/overview.md",sourceDirName:"Project",slug:"/Project/overview",permalink:"/main/es/docs/next/Project/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Working with a project",permalink:"/main/es/docs/next/GettingStarted/creating"},next:{title:"Architecture of a project",permalink:"/main/es/docs/next/Project/architecture"}},s={},d=[{value:"Project files",id:"project-files",level:2},{value:"Development",id:"development",level:2},{value:"Final application",id:"final-application",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. A 4D project is primarily made of text-based files. "),(0,a.kt)("h2",{id:"project-files"},"Project files"),(0,a.kt)("p",null,"4D project files are open and edited using regular 4D platform applications (4D or 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a Code Editor, a form editor, a menu editor..."),(0,a.kt)("p",null,"Since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor. "),(0,a.kt)("p",null,"In addition, 4D project files make it easier to program generically, create application templates, and share code. Project are organized internally in ",(0,a.kt)("a",{parentName:"p",href:"/main/es/docs/next/Project/architecture"},"folders and files"),"."),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"4D projects are developed using the ",(0,a.kt)("strong",{parentName:"p"},"4D")," application. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project. "),(0,a.kt)("p",null,"Multi-user development is managed via standard ",(0,a.kt)("strong",{parentName:"p"},"source control")," repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications. "),(0,a.kt)("h2",{id:"final-application"},"Final application"),(0,a.kt)("p",null,"Project files can be ",(0,a.kt)("a",{parentName:"p",href:"/main/es/docs/next/Project/compiler"},"compiled")," and easily deployed. 4D allows you to create three types of applications from your projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/main/es/docs/next/WebServer/overview"},"web")," applications,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.4d.com/go-mobile/"},"mobile")," applications, "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/main/es/docs/next/Desktop/building"},"desktop")," applications (client/server or single-user). ")),(0,a.kt)("p",null,"Back end applications can be deployed using 4D Server, 4D, or ",(0,a.kt)("a",{parentName:"p",href:"/main/es/docs/next/Desktop/building"},"merged with 4D Volume license"),"."))}m.isMDXComponent=!0}}]);