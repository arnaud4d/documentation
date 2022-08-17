"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>c});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),f=p(r),c=a,u=f["".concat(s,".").concat(c)]||f[c]||d[c]||n;return r?o.createElement(u,i(i({ref:t},l),{},{components:r})):o.createElement(u,i({ref:t},l))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=f;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>f,metadata:()=>u,toc:()=>g});var o=r(3905),a=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(m)for(var r of m(t))p.call(t,r)&&l(e,r,t[r]);return e};const f={id:"forms",title:"About 4D Forms"},c=void 0,u={unversionedId:"FormEditor/forms",id:"version-19-R6/FormEditor/forms",title:"About 4D Forms",description:"Forms provide the interface through which information is entered, modified, and printed in a desktop application. Users interact with the data in a database using forms and print reports using forms. Forms can be used to create custom dialog boxes, palettes, or any featured custom window.",source:"@site/versioned_docs/version-19-R6/FormEditor/forms.md",sourceDirName:"FormEditor",slug:"/FormEditor/forms",permalink:"/docs/FormEditor/forms",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"forms",title:"About 4D Forms"},sidebar:"docs",previous:{title:"Client/Server Management",permalink:"/docs/Desktop/clientServer"},next:{title:"Style sheets",permalink:"/docs/FormEditor/stylesheets"}},h={},g=[{value:"Creating forms",id:"creating-forms",level:2},{value:"Project form and Table form",id:"project-form-and-table-form",level:2},{value:"Form pages",id:"form-pages",level:2},{value:"Inherited Forms",id:"inherited-forms",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],k={toc:g};function b(e){var t,a=e,{components:l}=a,f=((e,t)=>{var r={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&m)for(var o of m(e))t.indexOf(o)<0&&p.call(e,o)&&(r[o]=e[o]);return r})(a,["components"]);return(0,o.kt)("wrapper",(t=d(d({},k),f),n(t,i({components:l,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"Forms provide the interface through which information is entered, modified, and printed in a desktop application. Users interact with the data in a database using forms and print reports using forms. Forms can be used to create custom dialog boxes, palettes, or any featured custom window."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(92475).Z,width:"1114",height:"896"})),(0,o.kt)("p",null,"Forms can also contain other forms through the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/FormObjects/subformOverview"}),"subform objects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/FormEditor/propertiesForm#inherited-forms"}),"inherited forms"))),(0,o.kt)("h2",d({},{id:"creating-forms"}),"Creating forms"),(0,o.kt)("p",null,"You can add or modify 4D forms using the following elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"4D Developer interface:")," Create new forms from the ",(0,o.kt)("strong",{parentName:"li"},"File")," menu or the ",(0,o.kt)("strong",{parentName:"li"},"Explorer")," window."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Form Editor"),": Modify your forms using the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",d({parentName:"strong"},{href:"/docs/FormEditor/overview"}),"Form Editor")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"JSON code:")," Create and design your forms using JSON and save the form files at the ",(0,o.kt)("a",d({parentName:"li"},{href:"/docs/Project/architecture#sources-folder"}),"appropriate location"),". Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),'{\n    "windowTitle": "Hello World",\n    "windowMinWidth": 220,\n    "windowMinHeight": 80,\n    "method": "HWexample",\n    "pages": [\n        null,\n        {\n            "objects": {\n                "text": {\n                "type": "text",\n                "text": "Hello World!",\n                "textAlign": "center",\n                "left": 50,\n                "top": 120,\n                "width": 120,\n                "height": 80\n                },\n                "image": {\n                "type": "picture",\n                "pictureFormat": "scaled",\n                "picture": "/RESOURCES/Images/HW.png",\n                "alignment":"center", \n                "left": 70,\n                "top": 20, \n                "width":75, \n                "height":75        \n                },\n                "button": {\n                "type": "button",\n                "text": "OK",\n                "action": "Cancel",\n                "left": 60,\n                "top": 160,\n\n\n                "width": 100,\n                "height": 20\n                }\n            }\n        }\n    ]\n}\n')),(0,o.kt)("h2",d({},{id:"project-form-and-table-form"}),"Project form and Table form"),(0,o.kt)("p",null,"There are two categories of forms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Project forms")," - Independent forms that are not attached to any table. They are intended more particularly for creating interface dialog boxes as well as components. Project forms can be used to create interfaces that easily comply with OS standards.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Table forms")," - Attached to specific tables and thus benefit from automatic functions useful for developing applications based on databases. Typically, a table has separate input and output forms."))),(0,o.kt)("p",null,"Typically, you select the form category when you create the form, but you can change it afterwards."),(0,o.kt)("h2",d({},{id:"form-pages"}),"Form pages"),(0,o.kt)("p",null,"Each form has is made of at least two pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a page 1: a main page, displayed by default"),(0,o.kt)("li",{parentName:"ul"},"a page 0: a background page, whose contents is displayed on every other page.")),(0,o.kt)("p",null,"You can create multiple pages for an input form. If you have more fields or variables than will fit on one screen, you may want to create additional pages to display them. Multiple pages allow you to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Place the most important information on the first page and less important information on other pages."),(0,o.kt)("li",{parentName:"ul"},"Organize each topic on its own page."),(0,o.kt)("li",{parentName:"ul"},"Reduce or eliminate scrolling during data entry by setting the ",(0,o.kt)("a",d({parentName:"li"},{href:"../FormEditor/formEditor.html#data-entry-order"}),"entry order"),"."),(0,o.kt)("li",{parentName:"ul"},"Provide space around the form elements for an attractive screen design.")),(0,o.kt)("p",null,"Multiple pages are a convenience used for input forms only. They are not for printed output. When a multi-page form is printed, only the first page is printed."),(0,o.kt)("p",null,"There are no restrictions on the number of pages a form can have. The same field can appear any number of times in a form and on as many pages as you want. However, the more pages you have in a form, the longer it will take to display it."),(0,o.kt)("p",null,"A multi-page form has both a background page and several display pages. Objects that are placed on the background page may be visible on all display pages, but can be selected and edited only on the background page. In multi-page forms, you should put your button palette on the background page. You also need to include one or more objects on the background page that provide page navigation tools for the user."),(0,o.kt)("h2",d({},{id:"inherited-forms"}),"Inherited Forms"),(0,o.kt)("p",null,'4D forms can use and be used as "inherited forms," meaning that all of the objects from ',(0,o.kt)("em",{parentName:"p"},"Form A")," can be used in ",(0,o.kt)("em",{parentName:"p"},"Form B"),". In this case, ",(0,o.kt)("em",{parentName:"p"},"Form B"),' "inherits" the objects from ',(0,o.kt)("em",{parentName:"p"},"Form A"),"."),(0,o.kt)("p",null,"References to an inherited form are always active: if an element of an inherited form is modified (button styles, for example), all forms using this element will automatically be modified."),(0,o.kt)("p",null,"All forms (table forms and project forms) can be designated as an inherited form. However, the elements they contain must be compatible with use in different database tables."),(0,o.kt)("p",null,"When a form is executed, the objects are loaded and combined in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Page zero of the inherited form"),(0,o.kt)("li",{parentName:"ol"},"Page 1 of the inherited form"),(0,o.kt)("li",{parentName:"ol"},"Page zero of the open form"),(0,o.kt)("li",{parentName:"ol"},"Current page of the open form.")),(0,o.kt)("p",null,"This order determines the default ",(0,o.kt)("a",d({parentName:"p"},{href:"../FormEditor/formEditor.html#data-entry-order"}),"entry order")," of objects in the form."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only pages 0 and 1 of an inherited form can appear in other forms.")),(0,o.kt)("p",null,"The properties and method of a form are not considered when that form is used as an inherited form. On the other hand, the methods of objects that it contains are called."),(0,o.kt)("p",null,"To define an inherited form, the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#inherited-form-name"}),"Inherited Form Name")," and ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#inherited-form-table"}),"Inherited Form Table")," (for table form) properties must be defined in the form that will inherit something from another form."),(0,o.kt)("p",null,"A form can inherit from a project form, by setting the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#inherited-form-table"}),"Inherited Form Table")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<None>"),' in the Property List (or " " in JSON).'),(0,o.kt)("p",null,"To stop inheriting a form, select ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<None>"),' in the Property List (or " " in JSON) for the ',(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#inherited-form-name"}),"Inherited Form Name")," property."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is possible to define an inherited form in a form that will eventually be used as an inherited form for a third form. The combining of objects takes place in a recursive manner. 4D detects recursive loops (for example, if form ","[table1]","form1 is defined as the inherited form of ","[table1]","form1, in other words, itself) and interrupts the form chain.")),(0,o.kt)("h2",d({},{id:"supported-properties"}),"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/menu#associated-menu-bar"}),"Associated Menu Bar")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/windowSize#fixed-height"}),"Fixed Height")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/windowSize#fixed-width"}),"Fixed Width")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/markers#form-break"}),"Form Break")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/markers#form-detail"}),"Form Detail")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/markers#form-footer"}),"Form Footer")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/markers#form-header"}),"Form Header")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#form-name"}),"Form Name")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#form-type"}),"Form Type")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#inherited-form-name"}),"Inherited Form Name")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#inherited-form-table"}),"Inherited Form Table")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/windowSize#maximum-height-minimum-height"}),"Maximum Height")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/windowSize#maximum-width-minimum-width"}),"Maximum Width")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/action#method"}),"Method")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/windowSize#maximum-height-minimum-height"}),"Minimum Height")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/windowSize#maximum-width-minimum-width"}),"Minimum Width")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#pages"}),"Pages")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/print#settings"}),"Print Settings")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#published-as-subform"}),"Published as Subform")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#save-geometry"}),"Save Geometry")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/FormEditor/propertiesForm#window-title"}),"Window Title")))}b.isMDXComponent=!0},92475:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/form1-4cd115e2060b296f638be467d18d7b47.png"}}]);