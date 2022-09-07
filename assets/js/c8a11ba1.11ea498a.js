"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,b=d["".concat(s,".").concat(u)]||d[u]||l[u]||a;return r?o.createElement(b,i(i({ref:t},m),{},{components:r})):o.createElement(b,i({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});r(67294);var o=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"inputOverview",title:"Input"},p=void 0,s={unversionedId:"FormObjects/inputOverview",id:"version-18/FormObjects/inputOverview",title:"Input",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/documentation/docs/18/FormObjects/inputOverview",draft:!1,tags:[],version:"18",frontMatter:{id:"inputOverview",title:"Input"},sidebar:"docs",previous:{title:"Group Box",permalink:"/documentation/docs/18/FormObjects/groupBox"},next:{title:"Hierarchical List",permalink:"/documentation/docs/18/FormObjects/listOverview"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"JSON Example",id:"json-example",level:3},{value:"Supported Properties",id:"supported-properties",level:2},{value:"Input alternatives",id:"input-alternatives",level:2}],l={toc:m};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,o.kt)("wrapper",n({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",n({},{id:"overview"}),"Overview"),(0,o.kt)("p",null,"Inputs allow you to add enterable or non-enterable expressions such as database ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/Concepts/identifiers#fields"}),"fields")," and ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/Concepts/variables"}),"variables")," to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(10374).Z,width:"279",height:"175"})),(0,o.kt)("p",null,"Inputs can contain ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/Concepts/quick-tour#assignable-vs-non-assignable-expressions"}),"assignable or non-assignable expressions"),"."),(0,o.kt)("p",null,"In addition, inputs can be ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesEntry#enterable"}),"enterable or non-enterable"),". An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user."),(0,o.kt)("p",null,"You can manage the data with object or form ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/Concepts/methods"}),"methods"),"."),(0,o.kt)("h3",n({},{id:"json-example"}),"JSON Example"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' "myText": {\n  "type": "input", //define the type of object\n  "spellcheck": true, //enable spelling verification\n  "left": 60,   //left position on the form  \n  "top": 160,   //top position on the form\n  "width": 100,  //width of the object\n  "height": 20  //height of the object\n  }\n')),(0,o.kt)("h2",n({},{id:"supported-properties"}),"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesDisplay#alpha-format"}),"Alpha Format")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesEntry#auto-spellcheck"}),"Auto Spellcheck")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesDisplay#boolean-format"}),"Boolean Format")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesEntry#context-menu"}),"Context Menu")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesDisplay#date-format"}),"Date Format")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesRangeOfValues#default-value"}),"Default value")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesAction#draggable"}),"Draggable")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesAction#droppable"}),"Droppable")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesEntry#enterable"}),"Enterable")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesEntry#entry-filter"}),"Entry Filter")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesRangeOfValues#excluded-list"}),"Excluded List")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesObject#expression-type"}),"Expression type")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesBackgroundAndBorder#fill-color"}),"Fill Color")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesText#font"}),"Font")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesAppearance#hide-focus-rectangle"}),"Hide focus rectangle")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesText#horizontal-alignment"}),"Horizontal Alignment")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesAppearance#horizontal-scroll-bar"}),"Horizontal Scroll Bar")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesBackgroundAndBorder#line-width"}),"Line Width")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesEntry#multiline"}),"Multiline")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesText#multi-style"}),"Multi-style")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesDisplay#number-format"}),"Number Format")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesText#orientation"}),"Orientation")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesDisplay#picture-format"}),"Picture Format")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesEntry#placeholder"}),"Placeholder")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesPrint#print-frame"}),"Print Frame")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesRangeOfValues#required-list"}),"Required List")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesDataSource#save-as"}),"Save as")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesEntry#selection-always-visible"}),"Selection always visible")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesText#store-with-default-style-tags"}),"Store with default style tags")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesDisplay#text-when-false-text-when-true"}),"Text when False/Text when True")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesDisplay#time-format"}),"Time Format")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesAppearance#vertical-scroll-bar"}),"Vertical Scroll Bar")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/documentation/docs/18/FormObjects/propertiesDisplay#wordwrap"}),"Wordwrap")),(0,o.kt)("hr",null),(0,o.kt)("h2",n({},{id:"input-alternatives"}),"Input alternatives"),(0,o.kt)("p",null,"You can also represent field and variable expressions in your forms using alternative objects, more particularly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can display and enter data from database fields directly in columns of ",(0,o.kt)("a",n({parentName:"li"},{href:"/documentation/docs/18/FormObjects/listboxOverview"}),"selection type List boxes"),"."),(0,o.kt)("li",{parentName:"ul"},"You can represent a list field or variable directly in a form using ",(0,o.kt)("a",n({parentName:"li"},{href:"popupMenuDropdownList_overview"}),"Pop-up Menus/Drop-down Lists")," and ",(0,o.kt)("a",n({parentName:"li"},{href:"/documentation/docs/18/FormObjects/comboBoxOverview"}),"Combo Boxes")," objects."),(0,o.kt)("li",{parentName:"ul"},"You can represent a boolean expression as a ",(0,o.kt)("a",n({parentName:"li"},{href:"/documentation/docs/18/FormObjects/checkboxOverview"}),"check box")," or as a ",(0,o.kt)("a",n({parentName:"li"},{href:"/documentation/docs/18/FormObjects/radiobuttonOverview"}),"radio button")," object.")))}d.isMDXComponent=!0},10374:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"}}]);