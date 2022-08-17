"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>f,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&p(e,n,t[n]);return e};const d={id:"general",title:"General page"},u=void 0,f={unversionedId:"settings/general",id:"version-19-R6/settings/general",title:"General page",description:"The General page contains options to configure generic parameters for the 4D project.",source:"@site/versioned_docs/version-19-R6/settings/general.md",sourceDirName:"settings",slug:"/settings/general",permalink:"/docs/ja/settings/general",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"general",title:"General page"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/ja/settings/overview"},next:{title:"Interface page",permalink:"/docs/ja/settings/interface"}},g={},v=[{value:"Design",id:"design",level:2},{value:"General",id:"general",level:2},{value:"Startup Environment",id:"startup-environment",level:3},{value:"Component",id:"component",level:2},{value:"Component namespace in the class store",id:"component-namespace-in-the-class-store",level:3},{value:"Generate syntax file for code completion when compiled",id:"generate-syntax-file-for-code-completion-when-compiled",level:3}],h={toc:v};function y(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},h),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The General page contains options to configure generic parameters for the 4D project."),(0,r.kt)("h2",m({},{id:"design"}),"Design"),(0,r.kt)("p",null,"This area contains the ",(0,r.kt)("strong",{parentName:"p"},"Display toolbar")," option. When it is checked, the 4D toolbar is displayed in the Design environment. "),(0,r.kt)("h2",m({},{id:"general"}),"General"),(0,r.kt)("p",null,"You use this area to set options concerning project startup and operation."),(0,r.kt)("h3",m({},{id:"startup-environment"}),"Startup Environment"),(0,r.kt)("p",null,"You use this menu to select the default startup mode for the database: ",(0,r.kt)("strong",{parentName:"p"},"Design")," or ",(0,r.kt)("strong",{parentName:"p"},"Application"),". Unless specified, 4D opens by default in the Design environment if a password access system is not activated. "),(0,r.kt)("h2",m({},{id:"component"}),"Component"),(0,r.kt)("p",null,"This area allows ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/ja/Extensions/develop-components"}),"component developers")," to configure how their component classes and functions will be exposed in the 4D Code Editor once the component is installed."),(0,r.kt)("h3",m({},{id:"component-namespace-in-the-class-store"}),"Component namespace in the class store"),(0,r.kt)("p",null,"Use this area to declare a namespace for the component classes and functions in the code on host projects. See ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/ja/Extensions/develop-components#declaring-the-component-namespace"}),"Declaring the component namespace"),"."),(0,r.kt)("h3",m({},{id:"generate-syntax-file-for-code-completion-when-compiled"}),"Generate syntax file for code completion when compiled"),(0,r.kt)("p",null,"When you check this option, a syntax file (JSON format) is automatically created during the compilation phase. See ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/ja/Extensions/develop-components#code-completion-for-compiled-components"}),"Code completion for compiled components"),"."))}y.isMDXComponent=!0}}]);