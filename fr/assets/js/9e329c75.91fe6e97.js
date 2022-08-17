"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26847],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(r),u=n,f=b["".concat(s,".").concat(u)]||b[u]||m[u]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},57653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>b,metadata:()=>f,toc:()=>j});var o=r(3905),n=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&l(e,r,t[r]);return e};const b={id:"formObjectsOverview",title:"About 4D Form Objects"},u=void 0,f={unversionedId:"FormObjects/formObjectsOverview",id:"FormObjects/formObjectsOverview",title:"About 4D Form Objects",description:"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used.",source:"@site/docs/FormObjects/formObjects_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/formObjectsOverview",permalink:"/docs/fr/next/FormObjects/formObjectsOverview",draft:!1,tags:[],version:"current",frontMatter:{id:"formObjectsOverview",title:"About 4D Form Objects"},sidebar:"docs",previous:{title:"Window Size",permalink:"/docs/fr/next/FormEditor/windowSize"},next:{title:"Button",permalink:"/docs/fr/next/FormObjects/buttonOverview"}},d={},j=[{value:"Active and static objects",id:"active-and-static-objects",level:2},{value:"Handling form objects",id:"handling-form-objects",level:2}],y={toc:j};function v(e){var t,r=e,{components:n}=r,l=((e,t)=>{var r={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&p.call(e,o)&&(r[o]=e[o]);return r})(r,["components"]);return(0,o.kt)("wrapper",(t=m(m({},y),l),a(t,i({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used. "),(0,o.kt)("h2",m({},{id:"active-and-static-objects"}),"Active and static objects"),(0,o.kt)("p",null,"4D forms support a large number of built-in ",(0,o.kt)("strong",{parentName:"p"},"active")," and ",(0,o.kt)("strong",{parentName:"p"},"static")," objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"active objects")," perform a database task or an interface function. Fields are active objects. Other active objects \u2014 enterable objects (variables), combo boxes, drop-down lists, picture buttons, and so on \u2014 store data temporarily in memory or perform some action such as opening a dialog box, printing a report, or starting a background process. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"static objects")," are generally used for setting the appearance of the form and its labels as well as for the graphic interface. Static objects do not have associated variables like active objects. However, you can insert dynamic objects into static objects.")),(0,o.kt)("h2",m({},{id:"handling-form-objects"}),"Handling form objects"),(0,o.kt)("p",null,"You can add or modify 4D form objects in the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",m({parentName:"strong"},{href:"/docs/fr/next/FormEditor/overview"}),"Form Editor"),":")," Drag an object from the Form Editor toolbar onto the form. Then use the Property List to specify the object's properties.",(0,o.kt)("br",{parentName:"p"}),"\n","See the ",(0,o.kt)("a",m({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Building-forms.200-4354618.en.html"}),"Building Forms")," chapter for more information.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"4D language"),": Commands from the ",(0,o.kt)("a",m({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Objects-Forms.201-4127128.en.html"}),"Objects (Forms)")," theme such as ",(0,o.kt)("inlineCode",{parentName:"p"},"OBJECT DUPLICATE")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"OBJECT SET FONT STYLE")," allow to create and define form objects. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"JSON code in dynamic forms:")," Define the properties using JSON. Use the ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/propertiesObject#type"}),"type")," property to define the object type, then set its available properties.  See the ",(0,o.kt)("a",m({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292"}),"Dynamic Forms")," page for information.",(0,o.kt)("br",{parentName:"p"}),"\n","Example for a button object:  "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",m({parentName:"pre"},{}),'```\n{\n    "type": "button", \n    "style": "bevel", \n    "text": "OK", \n    "action": "Cancel", \n    "left": 60, \n    "top": 160, \n    "width": 100, \n    "height": 20\n}\n')))))}v.isMDXComponent=!0}}]);