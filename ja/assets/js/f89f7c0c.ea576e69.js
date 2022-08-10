"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46227],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,f=d["".concat(s,".").concat(g)]||d[g]||c[g]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o=["components"],l={id:"plug-ins",title:"Plug-ins"},s=void 0,p={unversionedId:"Concepts/plug-ins",id:"Concepts/plug-ins",title:"Plug-ins",description:"As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding plug-ins to your 4D development environment.",source:"@site/docs/Concepts/plug-ins.md",sourceDirName:"Concepts",slug:"/Concepts/plug-ins",permalink:"/docs/ja/next/Concepts/plug-ins",draft:!1,tags:[],version:"current",frontMatter:{id:"plug-ins",title:"Plug-ins"},sidebar:"docs",previous:{title:"Components",permalink:"/docs/ja/next/Concepts/components"},next:{title:"Identifiers",permalink:"/docs/ja/next/Concepts/identifiers"}},u={},c=[{value:"What is a plug-in and what can it do?",id:"what-is-a-plug-in-and-what-can-it-do",level:2},{value:"Where to find plug-ins?",id:"where-to-find-plug-ins",level:2},{value:"Installing plug-ins",id:"installing-plug-ins",level:2},{value:"Using plug-ins",id:"using-plug-ins",level:2}],d={toc:c};function g(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding ",(0,a.kt)("strong",{parentName:"p"},"plug-ins")," to your 4D development environment."),(0,a.kt)("h2",{id:"what-is-a-plug-in-and-what-can-it-do"},"What is a plug-in and what can it do?"),(0,a.kt)("p",null,"A plug-in is a piece of code, written in any language such as C or C++, that 4D launches at start up. It adds functionality to 4D and thus increases its capacity. A plug-in usually contains a set of routines given to the 4D developer. It can handle external areas and run external processes. "),(0,a.kt)("h2",{id:"where-to-find-plug-ins"},"Where to find plug-ins?"),(0,a.kt)("p",null,"Multiple plug-ins have already been written by the 4D community. Published plug-ins ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/search?q=4d-plugin&type=Repositories"},"can be found on GitHub"),". Additionnally, you can ",(0,a.kt)("a",{parentName:"p",href:"/docs/ja/next/Extensions/develop-plug-ins"},"develop your own plug-ins"),"."),(0,a.kt)("h2",{id:"installing-plug-ins"},"Installing plug-ins"),(0,a.kt)("p",null,"You install plug-ins in the 4D environment by copying their files into the ",(0,a.kt)("strong",{parentName:"p"},"Plugins")," folder, at the ",(0,a.kt)("a",{parentName:"p",href:"/docs/ja/next/Project/architecture#plugins"},"same level as the Project folder"),".  "),(0,a.kt)("p",null,"Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. If a plug-in requires a specific license for use, it will be loaded but not available for use."),(0,a.kt)("h2",{id:"using-plug-ins"},"Using plug-ins"),(0,a.kt)("p",null,"Plug-ins commands can be used as regular 4D commands in your 4D development. Plug-in commands appear in the ",(0,a.kt)("strong",{parentName:"p"},"Plug-ins")," page of the Explorer."))}g.isMDXComponent=!0}}]);