"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2007],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),i=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=i(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(t),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return t?o.createElement(f,c(c({ref:n},l),{},{components:t})):o.createElement(f,c({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<a;i++)c[i]=t[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});t(67294);var o=t(3905);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const c={id:"components",title:"Components"},p=void 0,s={unversionedId:"Concepts/components",id:"Concepts/components",title:"Components",description:"A 4D component is a set of 4D methods and forms representing one or more functionalities that you can install and use in your projects. For example, the 4D SVG component adds advanced commands and an integrated rendering engine that can be used to display SVG files.",source:"@site/docs/Concepts/components.md",sourceDirName:"Concepts",slug:"/Concepts/components",permalink:"/docs/fr/next/Concepts/components",draft:!1,tags:[],version:"current",frontMatter:{id:"components",title:"Components"},sidebar:"docs",previous:{title:"Interpreted and Compiled modes",permalink:"/docs/fr/next/Concepts/interpreted-compiled"},next:{title:"Plug-ins",permalink:"/docs/fr/next/Concepts/plug-ins"}},i={},l=[{value:"Where to find components?",id:"where-to-find-components",level:2},{value:"Installing components",id:"installing-components",level:2},{value:"Using components",id:"using-components",level:2}],m={toc:l};function d(e){var{components:n}=e,c=a(e,["components"]);return(0,o.kt)("wrapper",r({},m,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A 4D component is a set of 4D methods and forms representing one or more functionalities that you can install and use in your projects. For example, the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html"}),"4D SVG component")," adds advanced commands and an integrated rendering engine that can be used to display SVG files."),(0,o.kt)("h2",r({},{id:"where-to-find-components"}),"Where to find components?"),(0,o.kt)("p",null,"Several components are ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/fr/next/Extensions/overview"}),"preinstalled in the 4D development environment"),", but a lot of 4D components from the 4D community ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/search?q=4d-component&type=Repositories"}),"can be found on GitHub"),". Additionnally, you can ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/fr/next/Extensions/develop-components"}),"develop your own 4D components"),"."),(0,o.kt)("h2",r({},{id:"installing-components"}),"Installing components"),(0,o.kt)("p",null,"To install a component, you simply need to copy the component files into the ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/fr/next/Project/architecture"}),(0,o.kt)("inlineCode",{parentName:"a"},"Components")," folder of the project"),". You can use aliases or shortcuts."),(0,o.kt)("p",null,"A host project running in interpreted mode can use either interpreted or compiled components. A host project running in compiled mode cannot use interpreted components. In this case, only compiled components can be used. "),(0,o.kt)("h2",r({},{id:"using-components"}),"Using components"),(0,o.kt)("p",null,"Component methods and forms can be used as standard elements in your 4D development. "),(0,o.kt)("p",null,"When an installed component contains methods, they appear in the ",(0,o.kt)("strong",{parentName:"p"},"Component Methods")," theme of the Explorer's Methods page. "),(0,o.kt)("p",null,"You can select a component method and click on the ",(0,o.kt)("strong",{parentName:"p"},"Documentation")," button of the Explorer to get information about it, ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/fr/next/Project/documentation"}),"if any"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:t(10707).Z,width:"868",height:"569"})))}d.isMDXComponent=!0},10707:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/compDoc-a7c75dc713078bc430fe37a9e103b856.png"}}]);