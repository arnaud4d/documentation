"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||n;return r?a.createElement(b,p(p({ref:t},l),{},{components:r})):a.createElement(b,p({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var c=2;c<n;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>l});r(67294);var a=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function n(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"inputOverview",title:"Input"},s=void 0,i={unversionedId:"FormObjects/inputOverview",id:"version-19-R6/FormObjects/inputOverview",title:"Input",description:"Inputs allow you to add enterable or non-enterable expressions such as database fields and variables to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/docs/ja/FormObjects/inputOverview",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"inputOverview",title:"Input"},sidebar:"docs",previous:{title:"Group Box",permalink:"/docs/ja/FormObjects/groupBox"},next:{title:"Hierarchical List",permalink:"/docs/ja/FormObjects/listOverview"}},c={},l=[{value:"JSON Example:",id:"json-example",level:3},{value:"Supported Properties",id:"supported-properties",level:2},{value:"Input alternatives",id:"input-alternatives",level:2}],m={toc:l};function d(e){var{components:t}=e,p=n(e,["components"]);return(0,a.kt)("wrapper",o({},m,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Inputs allow you to add enterable or non-enterable expressions such as database ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/Concepts/identifiers#fields"}),"fields")," and ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/Concepts/variables"}),"variables")," to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(67077).Z,width:"279",height:"175"})),(0,a.kt)("p",null,"Inputs can contain ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/Concepts/quick-tour#assignable-vs-non-assignable-expressions"}),"assignable or non-assignable expressions"),"."),(0,a.kt)("p",null,"In addition, inputs can be ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesEntry#enterable"}),"enterable or non-enterable"),". An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user."),(0,a.kt)("p",null,"You can manage the data with object or form ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/Concepts/methods"}),"methods"),"."),(0,a.kt)("h3",o({},{id:"json-example"}),"JSON Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'    "myText": {\n        "type": "input",    //define the type of object\n        "spellcheck": true, //enable spelling verification\n        "left": 60,         //left position on the form  \n        "top": 160,         //top position on the form \n        "width": 100,       //width of the object\n        "height": 20        //height of the object\n        }\n')),(0,a.kt)("h2",o({},{id:"supported-properties"}),"Supported Properties"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesText#allow-font-color-picker"}),"Allow font/color picker")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesDisplay#alpha-format"}),"Alpha Format")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesEntry#auto-spellcheck"}),"Auto Spellcheck")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesDisplay#text-when-false-text-when-true"}),"Test when False/Text when True")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesEntry#context-menu"}),"Context Menu")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesDisplay#date-format"}),"Date Format")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesRangeOfValues#default-value"}),"Default value")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesAction#draggable"}),"Draggable")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesAction#droppable"}),"Droppable")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesEntry#enterable"}),"Enterable")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesEntry#entry-filter"}),"Entry Filter")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesRangeOfValues#excluded-list"}),"Excluded List")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesObject#expression-type"}),"Expression type")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesBackgroundAndBorder#fill-color"}),"Fill Color")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesText#font"}),"Font")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesAppearance#hide-focus-rectangle"}),"Hide focus rectangle")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesText#horizontal-alignment"}),"Horizontal Alignment")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesAppearance#horizontal-scroll-bar"}),"Horizontal Scroll Bar")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesEntry#multiline"}),"Multiline")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesText#multi-style"}),"Multi-style")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesDisplay#number-format"}),"Number Format")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesText#orientation"}),"Orientation")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesDisplay#picture-format"}),"Picture Format")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesEntry#placeholder"}),"Placeholder")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesPrint#print-frame"}),"Print Frame")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesRangeOfValues#required-list"}),"Required List")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesEntry#selection-always-visible"}),"Selection always visible")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesText#store-with-default-style-tags"}),"Store with default style tags")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesDisplay#text-when-false-text-when-true"}),"Text when False/Text when True")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesDisplay#time-format"}),"Time Format")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesObject#type"}),"Type")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesAppearance#vertical-scroll-bar"}),"Vertical Scroll Bar")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormObjects/propertiesDisplay#wordwrap"}),"Wordwrap")),(0,a.kt)("hr",null),(0,a.kt)("h2",o({},{id:"input-alternatives"}),"Input alternatives"),(0,a.kt)("p",null,"You can also represent field and variable expressions in your forms using alternative objects, more particularly:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can display and enter data from database fields directly in columns of ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/ja/FormObjects/listboxOverview"}),"selection type List boxes"),"."),(0,a.kt)("li",{parentName:"ul"},"You can represent a list field or variable directly in a form using ",(0,a.kt)("a",o({parentName:"li"},{href:"popupMenuDropdownList_overview"}),"Pop-up Menus/Drop-down Lists")," and ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/ja/FormObjects/comboBoxOverview"}),"Combo Boxes")," objects."),(0,a.kt)("li",{parentName:"ul"},"You can represent a boolean expression as a ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/ja/FormObjects/checkboxOverview"}),"check box")," or as a ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/ja/FormObjects/radiobuttonOverview"}),"radio button")," object.")))}d.isMDXComponent=!0},67077:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"}}]);