"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,f=d["".concat(m,".").concat(u)]||d[u]||s[u]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45456:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"action",title:"Action"},m=void 0,p={unversionedId:"FormEditor/action",id:"version-19-R6/FormEditor/action",title:"Action",description:"Method",source:"@site/versioned_docs/version-19-R6/FormEditor/properties_Action.md",sourceDirName:"FormEditor",slug:"/FormEditor/action",permalink:"/main/fr/docs/FormEditor/action",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"action",title:"Action"},sidebar:"docs",previous:{title:"JSON property list",permalink:"/main/fr/docs/FormEditor/jsonReference"},next:{title:"Form Properties",permalink:"/main/fr/docs/FormEditor/propertiesForm"}},c={},s=[{value:"Method",id:"method",level:2},{value:"JSON Grammar",id:"json-grammar",level:4}],d={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"method"},"Method"),(0,a.kt)("p",null,"Reference of a method attached to the form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. See ",(0,a.kt)("a",{parentName:"p",href:"/main/fr/docs/Concepts/methods#specialized-methods"},"Specialized methods"),"."),(0,a.kt)("p",null,"You do not call a form method\u20144D calls it automatically when an event involves the form to which the method is attached."),(0,a.kt)("p",null,"Several types of method references are supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a standard project method file path, i.e. that uses the following pattern:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"method.4dm"),(0,a.kt)("br",{parentName:"p"}),"\n",'This type of reference indicates that the method file is located at the default location ("sources/{TableForms/',(0,a.kt)("em",{parentName:"p"},"numTable"),"} | {Forms}/",(0,a.kt)("em",{parentName:"p"},"formName"),'/"). In this case, 4D automatically handles the form method when operations are executed on the form (renaming, duplication, copy/paste...)')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a project method name: name of an existing project method without file extension, i.e.:\n",(0,a.kt)("inlineCode",{parentName:"p"},"myMethod"),"\nIn this case, 4D does not provide automatic support for form operations.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"a custom method file path including the .4dm extension, e.g.:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"MyMethods/myFormMethod.4dm"),"\nYou can also use a filesystem:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"/RESOURCES/Forms/FormMethod.4dm"),"\nIn this case, 4D does not provide automatic support for object operations."))),(0,a.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"method"),(0,a.kt)("td",{parentName:"tr",align:null},"text"),(0,a.kt)("td",{parentName:"tr",align:null},"Form method standard or custom file path, or project method name")))))}u.isMDXComponent=!0}}]);