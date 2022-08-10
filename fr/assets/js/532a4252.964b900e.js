"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64382],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(h,n(n({ref:t},c),{},{components:a})):r.createElement(h,n({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var l=2;l<i;l++)n[l]=a[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=a(87462),o=a(63366),i=(a(67294),a(3905)),n=["components"],s={id:"dropdownListOverview",title:"Drop-down List"},p=void 0,l={unversionedId:"FormObjects/dropdownListOverview",id:"version-18/FormObjects/dropdownListOverview",title:"Drop-down List",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/dropdownList_Overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/dropdownListOverview",permalink:"/docs/fr/18/FormObjects/dropdownListOverview",draft:!1,tags:[],version:"18",frontMatter:{id:"dropdownListOverview",title:"Drop-down List"},sidebar:"docs",previous:{title:"Combo Box",permalink:"/docs/fr/18/FormObjects/comboBoxOverview"},next:{title:"Group Box",permalink:"/docs/fr/18/FormObjects/groupBox"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Using an array",id:"using-an-array",level:2},{value:"Using a choice list",id:"using-a-choice-list",level:2},{value:"Save as",id:"save-as",level:3},{value:"Using a standard action",id:"using-a-standard-action",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],m={toc:d};function u(e){var t=e.components,s=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Drop-down lists are objects that allow the user to select from a list. You manage the items displayed in the drop-down list using an array, a choice list, or a standard action."),(0,i.kt)("p",null,'On macOS, drop-down lists are also sometimes called "pop-up menu". Both names refer to the same objects. As the following example shows, the appearance of these objects can differ slightly according to the platform:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(54980).Z,width:"458",height:"158"})),(0,i.kt)("h2",{id:"using-an-array"},"Using an array"),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/Concepts/arrays"},"array")," is a list of values in memory that is referenced by the name of the array. A drop-down list displays an array as a list of values when you click on it."),(0,i.kt)("p",null,"Drop-down list objects are initialized by loading a list of values into an array. You can do this in several ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter a list of default values in the object properties by selecting ",(0,i.kt)("inlineCode",{parentName:"p"},'"\\<Static List>"')," in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesDataSource"},"Data Source")," theme of the Property List. The default values are loaded into an array automatically. You can refer to the array using the name of the variable associated with the object.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Before the object is displayed, execute code that assigns values to the array elements. For example:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'  ARRAY TEXT($aCities;6)\n  $aCities{1}:="Philadelphia"\n  $aCities{2}:="Pittsburg"\n  $aCities{3}:="Grand Blanc"\n  $aCities{4}:="Bad Axe"\n  $aCities{5}:="Frostbite Falls"\n  $aCities{6}:="Green Bay"\n')),(0,i.kt)("p",null,"In this case, the name of the variable associated with the object in the form must be ",(0,i.kt)("em",{parentName:"p"},"$aCities"),". This code could be placed in the form method and be executed when the ",(0,i.kt)("inlineCode",{parentName:"p"},"On Load")," form event runs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before the object is displayed, load the values of a list into the array using the ",(0,i.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv17R5/4D/17-R5/LIST-TO-ARRAY.301-4127385.en.html"},"LIST TO ARRAY")," command. For example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'   LIST TO ARRAY("Cities";$aCities)\n')),(0,i.kt)("p",null," In this case also, the name of the variable associated with the object in the form must be ",(0,i.kt)("em",{parentName:"p"},"$aCities"),". This code would be run in place of the assignment statements shown above."),(0,i.kt)("p",null,"If you need to save the user\u2019s choice into a field, you would use an assignment statement that runs after the record is accepted. The code might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'  Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Cities";aCities)\n       If(Record number([People])<0) `new record\n          aCities:=3 `display a default value\n       Else `existing record, display stored value\n          aCities:=Find in array(aCities;City)\n       End if\n    :(Form event=On Clicked) `user modified selection\n       City:=aCities{aCities} `field gets new value\n    :(Form event=On Validate)\n       City:=aCities{aCities}\n    :(Form event=On Unload)\n       CLEAR VARIABLE(aCities)\n End case\n')),(0,i.kt)("p",null,"You must select each ","[event]"," that you test for in your Case statement. Arrays always contain a finite number of items. The list of items is dynamic and can be changed by a method. Items in an array can be modified, sorted, and added to."),(0,i.kt)("h2",{id:"using-a-choice-list"},"Using a choice list"),(0,i.kt)("p",null,"If you want to use a drop-down list to manage the values of a listed field or variable, 4D lets you reference the field or variable directly as the object's data source. This makes it easier to manage listed fields/variables."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you use a hierarchical list, only the first level is displayed and can be selected.")),(0,i.kt)("p",null,'For example, in the case of a "Color" field that can only contain the values "White", "Blue", "Green" or "Red", it is now possible to create a list containing these values and associate it with a pop-up menu object that references the 4D "Color" field. 4D then automatically takes care of managing the input and display of the current value in the form.'),(0,i.kt)("p",null,"To associate a pop-up menu/drop-down list or a combo box with a field or variable, you can just enter the name of the field or variable directly in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," of the object in the Property List."),(0,i.kt)("p",null,"When the form is executed, 4D automatically manages the pop-up menu or combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the pop-up menu when the form is displayed:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(13913).Z,width:"755",height:"171"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is not possible to combine this principle with using an array to initialize the object. If you enter a field name in the Variable Name area, then you must use a choice list.")),(0,i.kt)("h3",{id:"save-as"},"Save as"),(0,i.kt)("p",null,"When you have associated a pop-up menu/drop-down list with a choice list and with a field, you can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesDataSource#save-as"},"Save as Value/Reference property"),". This option lets you optimize the size of the data saved."),(0,i.kt)("h2",{id:"using-a-standard-action"},"Using a standard action"),(0,i.kt)("p",null,"You can assign a standard action to a pop-up menu/drop-down list (",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesAction#standard-action"},"Action")," theme of the Property List). Only actions that display a sublist of items (except the goto page action) are supported by this object. For example, if you select the ",(0,i.kt)("inlineCode",{parentName:"p"},"backgroundColor")," standard action, at runtime the object will display an automatic list of background colors. You can can override this automatic list by assigning in addition a choice list in which each item has been assigned a custom standard action."),(0,i.kt)("p",null,"For more information, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html"},"Standard actions")," section."),(0,i.kt)("h2",{id:"supported-properties"},"Supported Properties"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesDisplay#alpha-format"},"Alpha Format")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesText#bold"},"Bold")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesTextAndPicture#button-style"},"Button Style")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesDataSource#choice-list"},"Choice List")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesDisplay#date-format"},"Date Format")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesObject#expression-type"},"Expression Type")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesEntry#focusable"},"Focusable")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesText#font"},"Font")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesText#font-color"},"Font Color")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesText#font-size"},"Font Size")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesHelp#help-tip"},"Help Tip")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesText#italic"},"Italic")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesDisplay#not-rendered"},"Not rendered")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesAction#standard-action"},"Standard action")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesDataSource#save-as"},"Save as")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesDisplay#time-format"},"Time Format")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesObject#type"},"Type")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesText#underline"},"Underline")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#width"},"Width")))}u.isMDXComponent=!0},54980:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/popupDropdown_appearance-be4e6872edee7cab175cf9702b8731e4.png"},13913:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/popupDropdown_choiceList-f3bc797fde9f06db0a718cbc323d678b.png"}}]);