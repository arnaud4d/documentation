"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,f=u["".concat(s,".").concat(b)]||u[b]||m[b]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"formObjectsOverview",title:"About 4D Form Objects"},c=void 0,s={unversionedId:"FormObjects/formObjectsOverview",id:"version-18/FormObjects/formObjectsOverview",title:"About 4D Form Objects",description:"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used.",source:"@site/versioned_docs/version-18/FormObjects/formObjects_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/formObjectsOverview",permalink:"/documentation/docs/18/FormObjects/formObjectsOverview",draft:!1,tags:[],version:"18",frontMatter:{id:"formObjectsOverview",title:"About 4D Form Objects"},sidebar:"docs",previous:{title:"Pictures",permalink:"/documentation/docs/18/FormEditor/pictures"},next:{title:"Button",permalink:"/documentation/docs/18/FormObjects/buttonOverview"}},p={},l=[{value:"Active and static objects",id:"active-and-static-objects",level:2},{value:"Handling form objects",id:"handling-form-objects",level:2}],m={toc:l};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used."),(0,n.kt)("h2",o({},{id:"active-and-static-objects"}),"Active and static objects"),(0,n.kt)("p",null,"4D forms support a large number of built-in ",(0,n.kt)("strong",{parentName:"p"},"active")," and ",(0,n.kt)("strong",{parentName:"p"},"static")," objects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"active objects")," perform a database task or an interface function. Fields are active objects. Other active objects \u2014 enterable objects (variables), combo boxes, drop-down lists, picture buttons, and so on \u2014 store data temporarily in memory or perform some action such as opening a dialog box, printing a report, or starting a background process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"static objects")," are generally used for setting the appearance of the form and its labels as well as for the graphic interface. Static objects do not have associated variables like active objects. However, you can insert dynamic objects into static objects.")),(0,n.kt)("h2",o({},{id:"handling-form-objects"}),"Handling form objects"),(0,n.kt)("p",null,"You can add or modify 4D form objects in the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Form editor:")," Drag an object from the Form editor toolbar onto the form. Then use the Property List to specify the object's properties.",(0,n.kt)("br",{parentName:"p"}),"\n","See the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Building-forms.200-4354618.en.html"}),"Building Forms")," chapter for more information.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"4D language"),": Commands from the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Objects-Forms.201-4127128.en.html"}),"Objects (Forms)")," theme such as ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT DUPLICATE")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT SET FONT STYLE")," allow to create and define form objects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"JSON code in dynamic forms:")," Define the properties using JSON. Use the ",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesObject#type"}),"type")," property to define the object type, then set its available properties.  See the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292"}),"Dynamic Forms")," page for information.",(0,n.kt)("br",{parentName:"p"}),"\n","Example for a button object:  "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",o({parentName:"pre"},{}),'```\n{\n    "type": "button",\n    "style": "bevel",\n    "text": "OK",\n    "action": "Cancel",\n    "left": 60,\n    "top": 160,\n    "width": 100,\n    "height": 20\n}\n')))))}u.isMDXComponent=!0}}]);