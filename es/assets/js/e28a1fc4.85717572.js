"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57786],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),h=o,b=m["".concat(i,".").concat(h)]||m[h]||d[h]||r;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>f});var n=a(3905),o=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&p(e,a,t[a]);if(l)for(var a of l(t))c.call(t,a)&&p(e,a,t[a]);return e};const m={id:"tabControl",title:"Tab Controls"},h=void 0,b={unversionedId:"FormObjects/tabControl",id:"FormObjects/tabControl",title:"Tab Controls",description:"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. Each screen is accessed by clicking its tab.",source:"@site/docs/FormObjects/tabControl.md",sourceDirName:"FormObjects",slug:"/FormObjects/tabControl",permalink:"/docs/es/next/FormObjects/tabControl",draft:!1,tags:[],version:"current",frontMatter:{id:"tabControl",title:"Tab Controls"},sidebar:"docs",previous:{title:"Subform",permalink:"/docs/es/next/FormObjects/subformOverview"},next:{title:"Text",permalink:"/docs/es/next/FormObjects/text"}},u={},f=[{value:"JSON Example:",id:"json-example",level:3},{value:"Adding labels to a tab control",id:"adding-labels-to-a-tab-control",level:2},{value:"Using an object",id:"using-an-object",level:3},{value:"Using a choice list",id:"using-a-choice-list",level:3},{value:"Using a Text array",id:"using-a-text-array",level:3},{value:"Goto page features",id:"goto-page-features",level:2},{value:"FORM GOTO PAGE command",id:"form-goto-page-command",level:3},{value:"Goto Page action",id:"goto-page-action",level:3},{value:"Supported Properties",id:"supported-properties",level:2}],g={toc:f};function k(e){var t,o=e,{components:p}=o,m=((e,t)=>{var a={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(o,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),m),r(t,s({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. Each screen is accessed by clicking its tab. "),(0,n.kt)("p",null,"The following multi-page form uses a tab control object:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(52979).Z,width:"600",height:"534"})),(0,n.kt)("p",null,"To navigate from screen to screen, the user simply clicks the desired tab. "),(0,n.kt)("p",null,"The screens can represent pages in a multi-page form or an object that changes when the user clicks a tab. If the tab control is used as a page navigation tool, then the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page247.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"FORM GOTO")," PAGE")," command or the ",(0,n.kt)("inlineCode",{parentName:"p"},"gotoPage")," standard action would be used when a user clicks a tab. "),(0,n.kt)("p",null,"Another use of the tab control is to control the data that is displayed in a subform. For example, a Rolodex could be implemented using a tab control. The tabs would display the letters of the alphabet and the tab control\u2019s action would be to load the data corresponding to the letter that the user clicked."),(0,n.kt)("p",null,"Each tab can display labels or labels and a small icon. If you include icons, they appear to the left of each label. Here is an example of a tab control that uses icons:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(59902).Z,width:"599",height:"510"})),(0,n.kt)("p",null,"When you create a tab control, 4D manages the spacing and placement of the tabs. You only need to supply the labels in the form of an array, or the icons and labels in the form of a hierarchical list."),(0,n.kt)("p",null,"If the tab control is wide enough to display all the tabs with both the labels and icons, it displays both. If the tab control is not wide enough to display both the labels and icons, 4D displays the icons only. If it can\u2019t fit all the icons, it places scroll arrows to the right of the last visible tab. The scroll arrows allow the user to scroll the icons to the left or right."),(0,n.kt)("p",null,"Under macOS, in addition to the standard position (top), the tab controls can also be aligned to the bottom."),(0,n.kt)("h3",d({},{id:"json-example"}),"JSON Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'    "myTab": {\n        "type": "tab",\n        "left": 60, \n        "top": 160,  \n        "width": 100,   \n        "height": 20,   \n        "labelsPlacement": "bottom" //define the direction\n    }\n')),(0,n.kt)("h2",d({},{id:"adding-labels-to-a-tab-control"}),"Adding labels to a tab control"),(0,n.kt)("p",null,"To supply the labels for a tab control, you can use:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"an object"),(0,n.kt)("li",{parentName:"ul"},"a choice list"),(0,n.kt)("li",{parentName:"ul"},"an array")),(0,n.kt)("h3",d({},{id:"using-an-object"}),"Using an object"),(0,n.kt)("p",null,"You can assign an ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/Concepts/object"}),"object")," encapsulating a ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/Concepts/collection"}),"collection")," as the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesObject#variable-or-expression"}),"data source")," of the tab control. The object must contain the following properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"values")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Mandatory - Collection of scalar values. Only string values are supported. If invalid, empty or not defined, the tab control is empty")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"index")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Index of the currently tab control page (value between 0 and ",(0,n.kt)("inlineCode",{parentName:"td"},"collection.length-1"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Currently selected value")))),(0,n.kt)("p",null,"The initialization code must be executed before the form is presented to the user. "),(0,n.kt)("p",null,"In the following example, ",(0,n.kt)("inlineCode",{parentName:"p"},"Form.tabControl")," has been defined as tab control ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesObject#variable-or-expression"}),"expression"),". You can associate the ",(0,n.kt)("a",d({parentName:"p"},{href:"#goto-page-action"}),(0,n.kt)("inlineCode",{parentName:"a"},"gotoPage")," standard action")," to the form object:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'Form.tabControl:=New object\nForm.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")\nForm.tabControl.index:=2 //start on page 3\n')),(0,n.kt)("h3",d({},{id:"using-a-choice-list"}),"Using a choice list"),(0,n.kt)("p",null,"You can assign a ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesDataSource#choice-list-static-list"}),"choice list"),' to the tab control, either through a collection (static list) or a JSON pointer to a json list ("$ref"). Icons associated with list items in the Lists editor will be displayed in the tab control.'),(0,n.kt)("h3",d({},{id:"using-a-text-array"}),"Using a Text array"),(0,n.kt)("p",null,"You can create a Text array that contains the names of each page of the form. This code must be executed before the form is presented to the user. For example, you could place the code in the object method of the tab control and execute it when the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Load")," event occurs.  "),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can also store the names of the pages in a hierarchical list and use the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page288.html"}),"LIST TO ARRAY")," command to load the values into the array.")),(0,n.kt)("h2",d({},{id:"goto-page-features"}),"Goto page features"),(0,n.kt)("h3",d({},{id:"form-goto-page-command"}),"FORM GOTO PAGE command"),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page247.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"FORM GOTO PAGE"))," command in the tab control\u2019s method:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),"FORM GOTO PAGE(arrPages)\n")),(0,n.kt)("p",null,"The command is executed when the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/Events/onClicked"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Clicked"))," event occurs. You should then clear the array when the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/Events/onUnload"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Unload"))," event occurs."),(0,n.kt)("p",null,"Here is an example object method:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n')),(0,n.kt)("h3",d({},{id:"goto-page-action"}),"Goto Page action"),(0,n.kt)("p",null,"When you assign the ",(0,n.kt)("inlineCode",{parentName:"p"},"gotoPage")," ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesAction#standard-action"}),"standard action")," to a tab control, 4D will automatically display the page of the form that corresponds to the number of the tab that is selected. "),(0,n.kt)("p",null,"For example, if the user selects the 3rd tab, 4D will display the third page of the current form (if it exists). "),(0,n.kt)("h2",d({},{id:"supported-properties"}),"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesDataSource#choice-list-static-list"}),"Choice List")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesText#font"}),"Font")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesObject#save-value"}),"Save value")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesAction#standard-action"}),"Standard action")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesAppearance#tab-control-direction"}),"Tab Control Direction")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/es/next/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}k.isMDXComponent=!0},52979:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},59902:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"}}]);