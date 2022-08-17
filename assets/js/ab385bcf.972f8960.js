"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>c});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),f=p(r),c=n,u=f["".concat(s,".").concat(c)]||f[c]||d[c]||a;return r?o.createElement(u,i(i({ref:t},l),{},{components:r})):o.createElement(u,i({ref:t},l))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:n,i[1]=m;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});r(67294);var o=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"forms",title:"About 4D Forms"},m=void 0,s={unversionedId:"FormEditor/forms",id:"FormEditor/forms",title:"About 4D Forms",description:"Forms provide the interface through which information is entered, modified, and printed in a desktop application. Users interact with the data in a database using forms and print reports using forms. Forms can be used to create custom dialog boxes, palettes, or any featured custom window.",source:"@site/docs/FormEditor/forms.md",sourceDirName:"FormEditor",slug:"/FormEditor/forms",permalink:"/docs/next/FormEditor/forms",draft:!1,tags:[],version:"current",frontMatter:{id:"forms",title:"About 4D Forms"},sidebar:"docs",previous:{title:"Client/Server Management",permalink:"/docs/next/Desktop/clientServer"},next:{title:"Style sheets",permalink:"/docs/next/FormEditor/stylesheets"}},p={},l=[{value:"Creating forms",id:"creating-forms",level:2},{value:"Project form and Table form",id:"project-form-and-table-form",level:2},{value:"Form pages",id:"form-pages",level:2},{value:"Inherited Forms",id:"inherited-forms",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],d={toc:l};function f(e){var{components:t}=e,i=a(e,["components"]);return(0,o.kt)("wrapper",n({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Forms provide the interface through which information is entered, modified, and printed in a desktop application. Users interact with the data in a database using forms and print reports using forms. Forms can be used to create custom dialog boxes, palettes, or any featured custom window."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(62075).Z,width:"1114",height:"896"})),(0,o.kt)("p",null,"Forms can also contain other forms through the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",n({parentName:"li"},{href:"/docs/next/FormObjects/subformOverview"}),"subform objects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",n({parentName:"li"},{href:"/docs/next/FormEditor/propertiesForm#inherited-forms"}),"inherited forms"))),(0,o.kt)("h2",n({},{id:"creating-forms"}),"Creating forms"),(0,o.kt)("p",null,"You can add or modify 4D forms using the following elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"4D Developer interface:")," Create new forms from the ",(0,o.kt)("strong",{parentName:"li"},"File")," menu or the ",(0,o.kt)("strong",{parentName:"li"},"Explorer")," window."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Form Editor"),": Modify your forms using the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",n({parentName:"strong"},{href:"/docs/next/FormEditor/overview"}),"Form Editor")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"JSON code:")," Create and design your forms using JSON and save the form files at the ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/next/Project/architecture#sources-folder"}),"appropriate location"),". Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{}),'{\n    "windowTitle": "Hello World",\n    "windowMinWidth": 220,\n    "windowMinHeight": 80,\n    "method": "HWexample",\n    "pages": [\n        null,\n        {\n            "objects": {\n                "text": {\n                "type": "text",\n                "text": "Hello World!",\n                "textAlign": "center",\n                "left": 50,\n                "top": 120,\n                "width": 120,\n                "height": 80\n                },\n                "image": {\n                "type": "picture",\n                "pictureFormat": "scaled",\n                "picture": "/RESOURCES/Images/HW.png",\n                "alignment":"center", \n                "left": 70,\n                "top": 20, \n                "width":75, \n                "height":75        \n                },\n                "button": {\n                "type": "button",\n                "text": "OK",\n                "action": "Cancel",\n                "left": 60,\n                "top": 160,\n\n\n                "width": 100,\n                "height": 20\n                }\n            }\n        }\n    ]\n}\n')),(0,o.kt)("h2",n({},{id:"project-form-and-table-form"}),"Project form and Table form"),(0,o.kt)("p",null,"There are two categories of forms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Project forms")," - Independent forms that are not attached to any table. They are intended more particularly for creating interface dialog boxes as well as components. Project forms can be used to create interfaces that easily comply with OS standards.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Table forms")," - Attached to specific tables and thus benefit from automatic functions useful for developing applications based on databases. Typically, a table has separate input and output forms."))),(0,o.kt)("p",null,"Typically, you select the form category when you create the form, but you can change it afterwards."),(0,o.kt)("h2",n({},{id:"form-pages"}),"Form pages"),(0,o.kt)("p",null,"Each form has is made of at least two pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a page 1: a main page, displayed by default"),(0,o.kt)("li",{parentName:"ul"},"a page 0: a background page, whose contents is displayed on every other page.")),(0,o.kt)("p",null,"You can create multiple pages for an input form. If you have more fields or variables than will fit on one screen, you may want to create additional pages to display them. Multiple pages allow you to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Place the most important information on the first page and less important information on other pages."),(0,o.kt)("li",{parentName:"ul"},"Organize each topic on its own page."),(0,o.kt)("li",{parentName:"ul"},"Reduce or eliminate scrolling during data entry by setting the ",(0,o.kt)("a",n({parentName:"li"},{href:"../FormEditor/formEditor.html#data-entry-order"}),"entry order"),"."),(0,o.kt)("li",{parentName:"ul"},"Provide space around the form elements for an attractive screen design.")),(0,o.kt)("p",null,"Multiple pages are a convenience used for input forms only. They are not for printed output. When a multi-page form is printed, only the first page is printed."),(0,o.kt)("p",null,"There are no restrictions on the number of pages a form can have. The same field can appear any number of times in a form and on as many pages as you want. However, the more pages you have in a form, the longer it will take to display it."),(0,o.kt)("p",null,"A multi-page form has both a background page and several display pages. Objects that are placed on the background page may be visible on all display pages, but can be selected and edited only on the background page. In multi-page forms, you should put your button palette on the background page. You also need to include one or more objects on the background page that provide page navigation tools for the user."),(0,o.kt)("h2",n({},{id:"inherited-forms"}),"Inherited Forms"),(0,o.kt)("p",null,'4D forms can use and be used as "inherited forms," meaning that all of the objects from ',(0,o.kt)("em",{parentName:"p"},"Form A")," can be used in ",(0,o.kt)("em",{parentName:"p"},"Form B"),". In this case, ",(0,o.kt)("em",{parentName:"p"},"Form B"),' "inherits" the objects from ',(0,o.kt)("em",{parentName:"p"},"Form A"),"."),(0,o.kt)("p",null,"References to an inherited form are always active: if an element of an inherited form is modified (button styles, for example), all forms using this element will automatically be modified."),(0,o.kt)("p",null,"All forms (table forms and project forms) can be designated as an inherited form. However, the elements they contain must be compatible with use in different database tables."),(0,o.kt)("p",null,"When a form is executed, the objects are loaded and combined in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Page zero of the inherited form"),(0,o.kt)("li",{parentName:"ol"},"Page 1 of the inherited form"),(0,o.kt)("li",{parentName:"ol"},"Page zero of the open form"),(0,o.kt)("li",{parentName:"ol"},"Current page of the open form.")),(0,o.kt)("p",null,"This order determines the default ",(0,o.kt)("a",n({parentName:"p"},{href:"../FormEditor/formEditor.html#data-entry-order"}),"entry order")," of objects in the form."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only pages 0 and 1 of an inherited form can appear in other forms.")),(0,o.kt)("p",null,"The properties and method of a form are not considered when that form is used as an inherited form. On the other hand, the methods of objects that it contains are called."),(0,o.kt)("p",null,"To define an inherited form, the ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#inherited-form-name"}),"Inherited Form Name")," and ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#inherited-form-table"}),"Inherited Form Table")," (for table form) properties must be defined in the form that will inherit something from another form."),(0,o.kt)("p",null,"A form can inherit from a project form, by setting the ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#inherited-form-table"}),"Inherited Form Table")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<None>"),' in the Property List (or " " in JSON).'),(0,o.kt)("p",null,"To stop inheriting a form, select ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<None>"),' in the Property List (or " " in JSON) for the ',(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#inherited-form-name"}),"Inherited Form Name")," property."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is possible to define an inherited form in a form that will eventually be used as an inherited form for a third form. The combining of objects takes place in a recursive manner. 4D detects recursive loops (for example, if form ","[table1]","form1 is defined as the inherited form of ","[table1]","form1, in other words, itself) and interrupts the form chain.")),(0,o.kt)("h2",n({},{id:"supported-properties"}),"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/menu#associated-menu-bar"}),"Associated Menu Bar")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/windowSize#fixed-height"}),"Fixed Height")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/windowSize#fixed-width"}),"Fixed Width")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/markers#form-break"}),"Form Break")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/markers#form-detail"}),"Form Detail")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/markers#form-footer"}),"Form Footer")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/markers#form-header"}),"Form Header")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#form-name"}),"Form Name")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#form-type"}),"Form Type")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#inherited-form-name"}),"Inherited Form Name")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#inherited-form-table"}),"Inherited Form Table")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/windowSize#maximum-height-minimum-height"}),"Maximum Height")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/windowSize#maximum-width-minimum-width"}),"Maximum Width")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/action#method"}),"Method")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/windowSize#maximum-height-minimum-height"}),"Minimum Height")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/windowSize#maximum-width-minimum-width"}),"Minimum Width")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#pages"}),"Pages")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/print#settings"}),"Print Settings")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#published-as-subform"}),"Published as Subform")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#save-geometry"}),"Save Geometry")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/next/FormEditor/propertiesForm#window-title"}),"Window Title")))}f.isMDXComponent=!0},62075:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/form1-4cd115e2060b296f638be467d18d7b47.png"}}]);