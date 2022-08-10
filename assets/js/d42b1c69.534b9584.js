"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2007],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return t?o.createElement(f,s(s({ref:n},l),{},{components:t})):o.createElement(f,s({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),s=["components"],p={id:"components",title:"Components"},i=void 0,c={unversionedId:"Concepts/components",id:"Concepts/components",title:"Components",description:"A 4D component is a set of 4D methods and forms representing one or more functionalities that you can install and use in your projects. For example, the 4D SVG component adds advanced commands and an integrated rendering engine that can be used to display SVG files.",source:"@site/docs/Concepts/components.md",sourceDirName:"Concepts",slug:"/Concepts/components",permalink:"/main/docs/next/Concepts/components",draft:!1,tags:[],version:"current",frontMatter:{id:"components",title:"Components"},sidebar:"docs",previous:{title:"Interpreted and Compiled modes",permalink:"/main/docs/next/Concepts/interpreted-compiled"},next:{title:"Plug-ins",permalink:"/main/docs/next/Concepts/plug-ins"}},l={},m=[{value:"Where to find components?",id:"where-to-find-components",level:2},{value:"Installing components",id:"installing-components",level:2},{value:"Using components",id:"using-components",level:2}],d={toc:m};function u(e){var n=e.components,p=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A 4D component is a set of 4D methods and forms representing one or more functionalities that you can install and use in your projects. For example, the ",(0,a.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html"},"4D SVG component")," adds advanced commands and an integrated rendering engine that can be used to display SVG files."),(0,a.kt)("h2",{id:"where-to-find-components"},"Where to find components?"),(0,a.kt)("p",null,"Several components are ",(0,a.kt)("a",{parentName:"p",href:"/main/docs/next/Extensions/overview"},"preinstalled in the 4D development environment"),", but a lot of 4D components from the 4D community ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/search?q=4d-component&type=Repositories"},"can be found on GitHub"),". Additionnally, you can ",(0,a.kt)("a",{parentName:"p",href:"/main/docs/next/Extensions/develop-components"},"develop your own 4D components"),"."),(0,a.kt)("h2",{id:"installing-components"},"Installing components"),(0,a.kt)("p",null,"To install a component, you simply need to copy the component files into the ",(0,a.kt)("a",{parentName:"p",href:"/main/docs/next/Project/architecture"},(0,a.kt)("inlineCode",{parentName:"a"},"Components")," folder of the project"),". You can use aliases or shortcuts."),(0,a.kt)("p",null,"A host project running in interpreted mode can use either interpreted or compiled components. A host project running in compiled mode cannot use interpreted components. In this case, only compiled components can be used. "),(0,a.kt)("h2",{id:"using-components"},"Using components"),(0,a.kt)("p",null,"Component methods and forms can be used as standard elements in your 4D development. "),(0,a.kt)("p",null,"When an installed component contains methods, they appear in the ",(0,a.kt)("strong",{parentName:"p"},"Component Methods")," theme of the Explorer's Methods page. "),(0,a.kt)("p",null,"You can select a component method and click on the ",(0,a.kt)("strong",{parentName:"p"},"Documentation")," button of the Explorer to get information about it, ",(0,a.kt)("a",{parentName:"p",href:"/main/docs/next/Project/documentation"},"if any"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:t(10707).Z,width:"868",height:"569"})))}u.isMDXComponent=!0},10707:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/compDoc-a7c75dc713078bc430fe37a9e103b856.png"}}]);