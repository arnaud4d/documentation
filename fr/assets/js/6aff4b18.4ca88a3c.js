"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51442],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(s,".").concat(b)]||u[b]||m[b]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});r(67294);var o=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"formObjectsOverview",title:"About 4D Form Objects"},c=void 0,s={unversionedId:"FormObjects/formObjectsOverview",id:"version-19/FormObjects/formObjectsOverview",title:"About 4D Form Objects",description:"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormObjects/formObjects_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/formObjectsOverview",permalink:"/docs/fr/19/FormObjects/formObjectsOverview",draft:!1,tags:[],version:"19",frontMatter:{id:"formObjectsOverview",title:"About 4D Form Objects"},sidebar:"docs",previous:{title:"Window Size",permalink:"/docs/fr/19/FormEditor/windowSize"},next:{title:"Button",permalink:"/docs/fr/19/FormObjects/buttonOverview"}},p={},l=[{value:"Active and static objects",id:"active-and-static-objects",level:2},{value:"Handling form objects",id:"handling-form-objects",level:2}],m={toc:l};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used."),(0,o.kt)("h2",n({},{id:"active-and-static-objects"}),"Active and static objects"),(0,o.kt)("p",null,"4D forms support a large number of built-in ",(0,o.kt)("strong",{parentName:"p"},"active")," and ",(0,o.kt)("strong",{parentName:"p"},"static")," objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"active objects")," perform a database task or an interface function. Fields are active objects. Other active objects \u2014 enterable objects (variables), combo boxes, drop-down lists, picture buttons, and so on \u2014 store data temporarily in memory or perform some action such as opening a dialog box, printing a report, or starting a background process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"static objects")," are generally used for setting the appearance of the form and its labels as well as for the graphic interface. Static objects do not have associated variables like active objects. However, you can insert dynamic objects into static objects.")),(0,o.kt)("h2",n({},{id:"handling-form-objects"}),"Handling form objects"),(0,o.kt)("p",null,"You can add or modify 4D form objects in the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",n({parentName:"strong"},{href:"/docs/fr/19/FormEditor/overview"}),"Form Editor"),":")," Drag an object from the Form Editor toolbar onto the form. Then use the Property List to specify the object's properties.",(0,o.kt)("br",{parentName:"p"}),"\n","See the ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Building-forms.200-4354618.en.html"}),"Building Forms")," chapter for more information.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"4D language"),": Commands from the ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Objects-Forms.201-4127128.en.html"}),"Objects (Forms)")," theme such as ",(0,o.kt)("inlineCode",{parentName:"p"},"OBJECT DUPLICATE")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"OBJECT SET FONT STYLE")," allow to create and define form objects.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"JSON code in dynamic forms:")," Define the properties using JSON. Use the ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#type"}),"type")," property to define the object type, then set its available properties.  See the ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292"}),"Dynamic Forms")," page for information.",(0,o.kt)("br",{parentName:"p"}),"\n","Example for a button object:  "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",n({parentName:"pre"},{}),'{ "type": "button", "style": "bevel", "text": "OK", "action": "Cancel", "left": 60, "top": 160, "width": 100, "height": 20 }\n')))))}u.isMDXComponent=!0}}]);