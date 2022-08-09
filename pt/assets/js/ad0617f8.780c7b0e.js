"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"general",title:"General page"},c=void 0,p={unversionedId:"settings/general",id:"version-19-R6/settings/general",title:"General page",description:"The General page contains options to configure generic parameters for the 4D project.",source:"@site/versioned_docs/version-19-R6/settings/general.md",sourceDirName:"settings",slug:"/settings/general",permalink:"/docs/pt/docs/settings/general",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"general",title:"General page"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/pt/docs/settings/overview"},next:{title:"Interface page",permalink:"/docs/pt/docs/settings/interface"}},l={},d=[{value:"Design",id:"design",level:2},{value:"General",id:"general",level:2},{value:"Startup Environment",id:"startup-environment",level:3},{value:"Component",id:"component",level:2},{value:"Component namespace in the class store",id:"component-namespace-in-the-class-store",level:3},{value:"Generate syntax file for code completion when compiled",id:"generate-syntax-file-for-code-completion-when-compiled",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The General page contains options to configure generic parameters for the 4D project."),(0,a.kt)("h2",{id:"design"},"Design"),(0,a.kt)("p",null,"This area contains the ",(0,a.kt)("strong",{parentName:"p"},"Display toolbar")," option. When it is checked, the 4D toolbar is displayed in the Design environment. "),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("p",null,"You use this area to set options concerning project startup and operation."),(0,a.kt)("h3",{id:"startup-environment"},"Startup Environment"),(0,a.kt)("p",null,"You use this menu to select the default startup mode for the database: ",(0,a.kt)("strong",{parentName:"p"},"Design")," or ",(0,a.kt)("strong",{parentName:"p"},"Application"),". Unless specified, 4D opens by default in the Design environment if a password access system is not activated. "),(0,a.kt)("h2",{id:"component"},"Component"),(0,a.kt)("p",null,"This area allows ",(0,a.kt)("a",{parentName:"p",href:"/docs/pt/docs/Extensions/develop-components"},"component developers")," to configure how their component classes and functions will be exposed in the 4D Code Editor once the component is installed."),(0,a.kt)("h3",{id:"component-namespace-in-the-class-store"},"Component namespace in the class store"),(0,a.kt)("p",null,"Use this area to declare a namespace for the component classes and functions in the code on host projects. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/pt/docs/Extensions/develop-components#declaring-the-component-namespace"},"Declaring the component namespace"),"."),(0,a.kt)("h3",{id:"generate-syntax-file-for-code-completion-when-compiled"},"Generate syntax file for code completion when compiled"),(0,a.kt)("p",null,"When you check this option, a syntax file (JSON format) is automatically created during the compilation phase. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/pt/docs/Extensions/develop-components#code-completion-for-compiled-components"},"Code completion for compiled components"),"."))}u.isMDXComponent=!0}}]);