"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,b=m["".concat(i,".").concat(d)]||m[d]||f[d]||o;return r?a.createElement(b,s(s({ref:t},l),{},{components:r})):a.createElement(b,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>f});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],p={id:"inputOverview",title:"Input"},i=void 0,c={unversionedId:"FormObjects/inputOverview",id:"FormObjects/inputOverview",title:"Input",description:"Inputs allow you to add enterable or non-enterable expressions such as database fields and variables to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:",source:"@site/docs/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/fr/docs/next/FormObjects/inputOverview",draft:!1,tags:[],version:"current",frontMatter:{id:"inputOverview",title:"Input"},sidebar:"docs",previous:{title:"Group Box",permalink:"/fr/docs/next/FormObjects/groupBox"},next:{title:"Hierarchical List",permalink:"/fr/docs/next/FormObjects/listOverview"}},l={},f=[{value:"JSON Example:",id:"json-example",level:3},{value:"Supported Properties",id:"supported-properties",level:2},{value:"Input alternatives",id:"input-alternatives",level:2}],m={toc:f};function d(e){var t=e.components,p=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Inputs allow you to add enterable or non-enterable expressions such as database ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/Concepts/identifiers#fields"},"fields")," and ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/Concepts/variables"},"variables")," to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(30088).Z,width:"279",height:"175"})),(0,o.kt)("p",null,"Inputs can contain ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/Concepts/quick-tour#assignable-vs-non-assignable-expressions"},"assignable or non-assignable expressions"),"."),(0,o.kt)("p",null,"In addition, inputs can be ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesEntry#enterable"},"enterable or non-enterable"),". An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user."),(0,o.kt)("p",null,"You can manage the data with object or form ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/Concepts/methods"},"methods"),"."),(0,o.kt)("h3",{id:"json-example"},"JSON Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'    "myText": {\n        "type": "input",    //define the type of object\n        "spellcheck": true, //enable spelling verification\n        "left": 60,         //left position on the form  \n        "top": 160,         //top position on the form \n        "width": 100,       //width of the object\n        "height": 20        //height of the object\n        }\n')),(0,o.kt)("h2",{id:"supported-properties"},"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesText#allow-font-color-picker"},"Allow font/color picker")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesDisplay#alpha-format"},"Alpha Format")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesEntry#auto-spellcheck"},"Auto Spellcheck")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesText#bold"},"Bold")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesDisplay#text-when-false-text-when-true"},"Test when False/Text when True")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesBackgroundAndBorder#border-line-style"},"Border Line Style")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesDataSource#choice-list"},"Choice List")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesEntry#context-menu"},"Context Menu")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesDisplay#date-format"},"Date Format")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesRangeOfValues#default-value"},"Default value")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesAction#draggable"},"Draggable")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesAction#droppable"},"Droppable")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesEntry#enterable"},"Enterable")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesEntry#entry-filter"},"Entry Filter")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesRangeOfValues#excluded-list"},"Excluded List")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesObject#expression-type"},"Expression type")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesBackgroundAndBorder#fill-color"},"Fill Color")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesText#font"},"Font")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesText#font-color"},"Font Color")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesText#font-size"},"Font Size")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesAppearance#hide-focus-rectangle"},"Hide focus rectangle")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesText#horizontal-alignment"},"Horizontal Alignment")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesAppearance#horizontal-scroll-bar"},"Horizontal Scroll Bar")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesText#italic"},"Italic")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesEntry#multiline"},"Multiline")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesText#multi-style"},"Multi-style")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesDisplay#number-format"},"Number Format")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesText#orientation"},"Orientation")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesDisplay#picture-format"},"Picture Format")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesEntry#placeholder"},"Placeholder")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesPrint#print-frame"},"Print Frame")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesRangeOfValues#required-list"},"Required List")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesEntry#selection-always-visible"},"Selection always visible")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesText#store-with-default-style-tags"},"Store with default style tags")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesDisplay#text-when-false-text-when-true"},"Text when False/Text when True")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesDisplay#time-format"},"Time Format")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesObject#type"},"Type")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesText#underline"},"Underline")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesAppearance#vertical-scroll-bar"},"Vertical Scroll Bar")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesCoordinatesAndSizing#width"},"Width")," - ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/FormObjects/propertiesDisplay#wordwrap"},"Wordwrap")," "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"input-alternatives"},"Input alternatives"),(0,o.kt)("p",null,"You can also represent field and variable expressions in your forms using alternative objects, more particularly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can display and enter data from database fields directly in columns of ",(0,o.kt)("a",{parentName:"li",href:"/fr/docs/next/FormObjects/listboxOverview"},"selection type List boxes"),"."),(0,o.kt)("li",{parentName:"ul"},"You can represent a list field or variable directly in a form using ",(0,o.kt)("a",{parentName:"li",href:"/fr/docs/next/FormObjects/dropdownListOverview"},"Pop-up Menus/Drop-down Lists")," and ",(0,o.kt)("a",{parentName:"li",href:"/fr/docs/next/FormObjects/comboBoxOverview"},"Combo Boxes")," objects."),(0,o.kt)("li",{parentName:"ul"},"You can represent a boolean expression as a ",(0,o.kt)("a",{parentName:"li",href:"/fr/docs/next/FormObjects/checkboxOverview"},"check box")," or as a ",(0,o.kt)("a",{parentName:"li",href:"/fr/docs/next/FormObjects/radiobuttonOverview"},"radio button")," object.")))}d.isMDXComponent=!0},30088:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"}}]);