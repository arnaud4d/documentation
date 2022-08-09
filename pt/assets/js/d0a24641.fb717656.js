"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"overview",title:"Class API Overview"},l=void 0,c={unversionedId:"API/overview",id:"version-19/API/overview",title:"Class API Overview",description:"This section describes the built-in 4D class API as well as the associated constructor commands. 4D class functions and properties are available through class instance objects.",source:"@site/versioned_docs/version-19/API/overview.md",sourceDirName:"API",slug:"/API/overview",permalink:"/docs/pt/docs/19/API/overview",draft:!1,tags:[],version:"19",frontMatter:{id:"overview",title:"Class API Overview"},sidebar:"docs",previous:{title:"Glossary",permalink:"/docs/pt/docs/19/ORDA/glossary"},next:{title:"Class",permalink:"/docs/pt/docs/19/API/ClassClass"}},p={},u=[{value:"Writing conventions",id:"writing-conventions",level:2},{value:"Other resources",id:"other-resources",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes the built-in 4D class API as well as the associated constructor commands. 4D class functions and properties are available through class instance objects. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"functions must be called on instances with the () operator. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"collection.sort()"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"properties are accessed without parentheses, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"file.creationTime"),". You can also use the ","[","] syntax, for example ",(0,o.kt)("inlineCode",{parentName:"p"},'file["creationTime"]'),"."))),(0,o.kt)("h2",{id:"writing-conventions"},"Writing conventions"),(0,o.kt)("p",null,"The following conventions are used in the function syntax: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"{ }")," characters (braces) indicate optional parameters. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},".delete( { option : Integer } )")," means that the ",(0,o.kt)("em",{parentName:"li"},"option")," parameter may be omitted when calling the function."),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"{ ; ...param }")," notation indicates an unlimited number of parameters. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},".concat( value : any { ;...valueN } ) : Collection")," means that an unlimited number of values of any type can be passed to the function. "),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"any")," keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...). ")),(0,o.kt)("h2",{id:"other-resources"},"Other resources"),(0,o.kt)("p",null,"For an overall presentation of the 4D Language basics and concepts, please go to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/pt/docs/19/Concepts/about"},"4D Language Concepts")," section. "),(0,o.kt)("p",null,'For a description of the 4D "classic" language, please go to the ',(0,o.kt)("em",{parentName:"p"},"4D Language Reference")," on ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com"},"doc.4d.com"),"."))}d.isMDXComponent=!0}}]);