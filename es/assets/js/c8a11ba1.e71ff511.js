"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),b=a,u=d["".concat(i,".").concat(b)]||d[b]||m[b]||s;return r?o.createElement(u,n(n({ref:t},l),{},{components:r})):o.createElement(u,n({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,n=new Array(s);n[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,n[1]=p;for(var c=2;c<s;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var o=r(87462),a=r(63366),s=(r(67294),r(3905)),n=["components"],p={id:"inputOverview",title:"Input"},i=void 0,c={unversionedId:"FormObjects/inputOverview",id:"version-18/FormObjects/inputOverview",title:"Input",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/docs/es/18/FormObjects/inputOverview",draft:!1,tags:[],version:"18",frontMatter:{id:"inputOverview",title:"Input"},sidebar:"docs",previous:{title:"Group Box",permalink:"/docs/es/18/FormObjects/groupBox"},next:{title:"Hierarchical List",permalink:"/docs/es/18/FormObjects/listOverview"}},l={},m=[{value:"Overview",id:"overview",level:2},{value:"JSON Example",id:"json-example",level:3},{value:"Supported Properties",id:"supported-properties",level:2},{value:"Input alternatives",id:"input-alternatives",level:2}],d={toc:m};function b(e){var t=e.components,p=(0,a.Z)(e,n);return(0,s.kt)("wrapper",(0,o.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Inputs allow you to add enterable or non-enterable expressions such as database ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/Concepts/identifiers#fields"},"fields")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/Concepts/variables"},"variables")," to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(83403).Z,width:"279",height:"175"})),(0,s.kt)("p",null,"Inputs can contain ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/Concepts/quick-tour#assignable-vs-non-assignable-expressions"},"assignable or non-assignable expressions"),"."),(0,s.kt)("p",null,"In addition, inputs can be ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesEntry#enterable"},"enterable or non-enterable"),". An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user."),(0,s.kt)("p",null,"You can manage the data with object or form ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/Concepts/methods"},"methods"),"."),(0,s.kt)("h3",{id:"json-example"},"JSON Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-4d"},' "myText": {\n  "type": "input", //define the type of object\n  "spellcheck": true, //enable spelling verification\n  "left": 60,   //left position on the form  \n  "top": 160,   //top position on the form\n  "width": 100,  //width of the object\n  "height": 20  //height of the object\n  }\n')),(0,s.kt)("h2",{id:"supported-properties"},"Supported Properties"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesDisplay#alpha-format"},"Alpha Format")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesEntry#auto-spellcheck"},"Auto Spellcheck")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesText#bold"},"Bold")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesDisplay#boolean-format"},"Boolean Format")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"},"Border Line Style")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesDataSource#choice-list"},"Choice List")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesEntry#context-menu"},"Context Menu")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesDisplay#date-format"},"Date Format")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesRangeOfValues#default-value"},"Default value")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesAction#draggable"},"Draggable")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesAction#droppable"},"Droppable")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesEntry#enterable"},"Enterable")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesEntry#entry-filter"},"Entry Filter")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesRangeOfValues#excluded-list"},"Excluded List")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesObject#expression-type"},"Expression type")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesBackgroundAndBorder#fill-color"},"Fill Color")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesText#font"},"Font")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesText#font-color"},"Font Color")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesText#font-size"},"Font Size")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesAppearance#hide-focus-rectangle"},"Hide focus rectangle")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesText#horizontal-alignment"},"Horizontal Alignment")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesAppearance#horizontal-scroll-bar"},"Horizontal Scroll Bar")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesText#italic"},"Italic")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesBackgroundAndBorder#line-width"},"Line Width")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesEntry#multiline"},"Multiline")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesText#multi-style"},"Multi-style")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesDisplay#number-format"},"Number Format")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesText#orientation"},"Orientation")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesDisplay#picture-format"},"Picture Format")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesEntry#placeholder"},"Placeholder")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesPrint#print-frame"},"Print Frame")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesRangeOfValues#required-list"},"Required List")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesDataSource#save-as"},"Save as")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesEntry#selection-always-visible"},"Selection always visible")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesText#store-with-default-style-tags"},"Store with default style tags")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesDisplay#text-when-false-text-when-true"},"Text when False/Text when True")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesDisplay#time-format"},"Time Format")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesObject#type"},"Type")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesText#underline"},"Underline")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesAppearance#vertical-scroll-bar"},"Vertical Scroll Bar")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#width"},"Width")," - ",(0,s.kt)("a",{parentName:"p",href:"/docs/es/18/FormObjects/propertiesDisplay#wordwrap"},"Wordwrap")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"input-alternatives"},"Input alternatives"),(0,s.kt)("p",null,"You can also represent field and variable expressions in your forms using alternative objects, more particularly:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You can display and enter data from database fields directly in columns of ",(0,s.kt)("a",{parentName:"li",href:"/docs/es/18/FormObjects/listboxOverview"},"selection type List boxes"),"."),(0,s.kt)("li",{parentName:"ul"},"You can represent a list field or variable directly in a form using ",(0,s.kt)("a",{parentName:"li",href:"popupMenuDropdownList_overview"},"Pop-up Menus/Drop-down Lists")," and ",(0,s.kt)("a",{parentName:"li",href:"/docs/es/18/FormObjects/comboBoxOverview"},"Combo Boxes")," objects."),(0,s.kt)("li",{parentName:"ul"},"You can represent a boolean expression as a ",(0,s.kt)("a",{parentName:"li",href:"/docs/es/18/FormObjects/checkboxOverview"},"check box")," or as a ",(0,s.kt)("a",{parentName:"li",href:"/docs/es/18/FormObjects/radiobuttonOverview"},"radio button")," object.")))}b.isMDXComponent=!0},83403:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"}}]);