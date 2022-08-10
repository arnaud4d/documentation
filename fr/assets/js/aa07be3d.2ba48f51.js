"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6467],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,u=m["".concat(i,".").concat(d)]||m[d]||f[d]||n;return t?a.createElement(u,p(p({ref:r},l),{},{components:t})):a.createElement(u,p({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,p=new Array(n);p[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var c=2;c<n;c++)p[c]=t[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98574:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var a=t(87462),o=t(63366),n=(t(67294),t(3905)),p=["components"],s={id:"inputOverview",title:"Input"},i=void 0,c={unversionedId:"FormObjects/inputOverview",id:"version-19-R6/FormObjects/inputOverview",title:"Input",description:"Inputs allow you to add enterable or non-enterable expressions such as database fields and variables to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:",source:"@site/versioned_docs/version-19-R6/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/fr/docs/FormObjects/inputOverview",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"inputOverview",title:"Input"},sidebar:"docs",previous:{title:"Group Box",permalink:"/fr/docs/FormObjects/groupBox"},next:{title:"Hierarchical List",permalink:"/fr/docs/FormObjects/listOverview"}},l={},f=[{value:"JSON Example:",id:"json-example",level:3},{value:"Supported Properties",id:"supported-properties",level:2},{value:"Input alternatives",id:"input-alternatives",level:2}],m={toc:f};function d(e){var r=e.components,s=(0,o.Z)(e,p);return(0,n.kt)("wrapper",(0,a.Z)({},m,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Inputs allow you to add enterable or non-enterable expressions such as database ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/Concepts/identifiers#fields"},"fields")," and ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/Concepts/variables"},"variables")," to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(63539).Z,width:"279",height:"175"})),(0,n.kt)("p",null,"Inputs can contain ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/Concepts/quick-tour#assignable-vs-non-assignable-expressions"},"assignable or non-assignable expressions"),"."),(0,n.kt)("p",null,"In addition, inputs can be ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesEntry#enterable"},"enterable or non-enterable"),". An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user."),(0,n.kt)("p",null,"You can manage the data with object or form ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/Concepts/methods"},"methods"),"."),(0,n.kt)("h3",{id:"json-example"},"JSON Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},'    "myText": {\n        "type": "input",    //define the type of object\n        "spellcheck": true, //enable spelling verification\n        "left": 60,         //left position on the form  \n        "top": 160,         //top position on the form \n        "width": 100,       //width of the object\n        "height": 20        //height of the object\n        }\n')),(0,n.kt)("h2",{id:"supported-properties"},"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesText#allow-font-color-picker"},"Allow font/color picker")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesDisplay#alpha-format"},"Alpha Format")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesEntry#auto-spellcheck"},"Auto Spellcheck")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesText#bold"},"Bold")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesDisplay#text-when-false-text-when-true"},"Test when False/Text when True")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesBackgroundAndBorder#border-line-style"},"Border Line Style")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesDataSource#choice-list"},"Choice List")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesEntry#context-menu"},"Context Menu")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesDisplay#date-format"},"Date Format")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesRangeOfValues#default-value"},"Default value")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesAction#draggable"},"Draggable")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesAction#droppable"},"Droppable")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesEntry#enterable"},"Enterable")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesEntry#entry-filter"},"Entry Filter")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesRangeOfValues#excluded-list"},"Excluded List")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesObject#expression-type"},"Expression type")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesBackgroundAndBorder#fill-color"},"Fill Color")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesText#font"},"Font")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesText#font-color"},"Font Color")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesText#font-size"},"Font Size")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesAppearance#hide-focus-rectangle"},"Hide focus rectangle")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesText#horizontal-alignment"},"Horizontal Alignment")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesAppearance#horizontal-scroll-bar"},"Horizontal Scroll Bar")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesText#italic"},"Italic")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesEntry#multiline"},"Multiline")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesText#multi-style"},"Multi-style")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesDisplay#number-format"},"Number Format")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesText#orientation"},"Orientation")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesDisplay#picture-format"},"Picture Format")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesEntry#placeholder"},"Placeholder")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesPrint#print-frame"},"Print Frame")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesRangeOfValues#required-list"},"Required List")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesEntry#selection-always-visible"},"Selection always visible")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesText#store-with-default-style-tags"},"Store with default style tags")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesDisplay#text-when-false-text-when-true"},"Text when False/Text when True")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesDisplay#time-format"},"Time Format")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesObject#type"},"Type")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesText#underline"},"Underline")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesAppearance#vertical-scroll-bar"},"Vertical Scroll Bar")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesCoordinatesAndSizing#width"},"Width")," - ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/FormObjects/propertiesDisplay#wordwrap"},"Wordwrap")," "),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"input-alternatives"},"Input alternatives"),(0,n.kt)("p",null,"You can also represent field and variable expressions in your forms using alternative objects, more particularly:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can display and enter data from database fields directly in columns of ",(0,n.kt)("a",{parentName:"li",href:"/fr/docs/FormObjects/listboxOverview"},"selection type List boxes"),"."),(0,n.kt)("li",{parentName:"ul"},"You can represent a list field or variable directly in a form using ",(0,n.kt)("a",{parentName:"li",href:"popupMenuDropdownList_overview"},"Pop-up Menus/Drop-down Lists")," and ",(0,n.kt)("a",{parentName:"li",href:"/fr/docs/FormObjects/comboBoxOverview"},"Combo Boxes")," objects."),(0,n.kt)("li",{parentName:"ul"},"You can represent a boolean expression as a ",(0,n.kt)("a",{parentName:"li",href:"/fr/docs/FormObjects/checkboxOverview"},"check box")," or as a ",(0,n.kt)("a",{parentName:"li",href:"/fr/docs/FormObjects/radiobuttonOverview"},"radio button")," object.")))}d.isMDXComponent=!0},63539:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"}}]);