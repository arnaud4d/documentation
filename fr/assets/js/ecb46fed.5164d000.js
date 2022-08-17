"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50133],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),p=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return o.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?o.createElement(m,i(i({ref:r},s),{},{components:t})):o.createElement(m,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},41608:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>y});var o=t(3905),n=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))p.call(r,t)&&s(e,t,r[t]);return e};const u={id:"overview",title:"Overview"},f=void 0,m={unversionedId:"Project/overview",id:"version-19-R6/Project/overview",title:"Overview",description:"A 4D project contains all of the source code of a 4D application, whatever its deployement type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. A 4D project is primarily made of text-based files.",source:"@site/versioned_docs/version-19-R6/Project/overview.md",sourceDirName:"Project",slug:"/Project/overview",permalink:"/docs/fr/Project/overview",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Working with a project",permalink:"/docs/fr/GettingStarted/creating"},next:{title:"Architecture of a project",permalink:"/docs/fr/Project/architecture"}},v={},y=[{value:"Project files",id:"project-files",level:2},{value:"Development",id:"development",level:2},{value:"Final application",id:"final-application",level:2}],b={toc:y};function g(e){var r,t=e,{components:n}=t,s=((e,r)=>{var t={};for(var o in e)c.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))r.indexOf(o)<0&&p.call(e,o)&&(t[o]=e[o]);return t})(t,["components"]);return(0,o.kt)("wrapper",(r=d(d({},b),s),a(r,i({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"A 4D project contains all of the source code of a 4D application, whatever its deployement type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. A 4D project is primarily made of text-based files. "),(0,o.kt)("h2",d({},{id:"project-files"}),"Project files"),(0,o.kt)("p",null,"4D project files are open and edited using regular 4D platform applications (4D or 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a Code Editor, a form editor, a menu editor..."),(0,o.kt)("p",null,"Since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor. "),(0,o.kt)("p",null,"In addition, 4D project files make it easier to program generically, create application templates, and share code. Project are organized internally in ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/fr/Project/architecture"}),"folders and files"),"."),(0,o.kt)("h2",d({},{id:"development"}),"Development"),(0,o.kt)("p",null,"4D projects are developed using the ",(0,o.kt)("strong",{parentName:"p"},"4D")," application. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing to develop, test, and debug any kind of project. "),(0,o.kt)("p",null,"Multi-user development is managed via standard ",(0,o.kt)("strong",{parentName:"p"},"source control")," repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications. "),(0,o.kt)("h2",d({},{id:"final-application"}),"Final application"),(0,o.kt)("p",null,"Project files can be ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/fr/Project/compiler"}),"compiled")," and easily deployed. 4D allows you to create three types of applications from your projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/fr/WebServer/overview"}),"web")," applications,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.4d.com/go-mobile/"}),"mobile")," applications, "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/fr/Desktop/building"}),"desktop")," applications (client/server or single-user). ")),(0,o.kt)("p",null,"Back end applications can be deployed using 4D Server, 4D, or ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/fr/Desktop/building"}),"merged with 4D Volume license"),"."))}g.isMDXComponent=!0}}]);