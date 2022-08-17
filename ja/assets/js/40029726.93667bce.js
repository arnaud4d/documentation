"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84624],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,b=m["".concat(i,".").concat(h)]||m[h]||d[h]||n;return a?o.createElement(b,l(l({ref:t},p),{},{components:a})):o.createElement(b,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<n;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>f});var o=a(3905),r=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&p(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&p(e,a,t[a]);return e};const m={id:"tabControl",title:"Tab Controls"},h=void 0,b={unversionedId:"FormObjects/tabControl",id:"version-19/FormObjects/tabControl",title:"Tab Controls",description:"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. Each screen is accessed by clicking its tab.",source:"@site/versioned_docs/version-19/FormObjects/tabControl.md",sourceDirName:"FormObjects",slug:"/FormObjects/tabControl",permalink:"/docs/ja/19/FormObjects/tabControl",draft:!1,tags:[],version:"19",frontMatter:{id:"tabControl",title:"Tab Controls"},sidebar:"docs",previous:{title:"Subform",permalink:"/docs/ja/19/FormObjects/subformOverview"},next:{title:"Text",permalink:"/docs/ja/19/FormObjects/text"}},u={},f=[{value:"JSON Example",id:"json-example",level:3},{value:"Adding labels to a tab control",id:"adding-labels-to-a-tab-control",level:2},{value:"Using an object",id:"using-an-object",level:3},{value:"Using a choice list",id:"using-a-choice-list",level:3},{value:"Using a Text array",id:"using-a-text-array",level:3},{value:"Goto page features",id:"goto-page-features",level:2},{value:"FORM GOTO PAGE command",id:"form-goto-page-command",level:3},{value:"Goto Page action",id:"goto-page-action",level:3},{value:"Supported Properties",id:"supported-properties",level:2}],g={toc:f};function k(e){var t,r=e,{components:p}=r,m=((e,t)=>{var a={};for(var o in e)i.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&c.call(e,o)&&(a[o]=e[o]);return a})(r,["components"]);return(0,o.kt)("wrapper",(t=d(d({},g),m),n(t,l({components:p,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. Each screen is accessed by clicking its tab."),(0,o.kt)("p",null,"The following multi-page form uses a tab control object:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(56198).Z,width:"600",height:"534"})),(0,o.kt)("p",null,"To navigate from screen to screen, the user simply clicks the desired tab."),(0,o.kt)("p",null,"The screens can represent pages in a multi-page form or an object that changes when the user clicks a tab. If the tab control is used as a page navigation tool, then the ",(0,o.kt)("a",d({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page247.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"FORM GOTO")," PAGE")," command or the ",(0,o.kt)("inlineCode",{parentName:"p"},"gotoPage")," standard action would be used when a user clicks a tab."),(0,o.kt)("p",null,"Another use of the tab control is to control the data that is displayed in a subform. For example, a Rolodex could be implemented using a tab control. The tabs would display the letters of the alphabet and the tab control\u2019s action would be to load the data corresponding to the letter that the user clicked."),(0,o.kt)("p",null,"Each tab can display labels or labels and a small icon. If you include icons, they appear to the left of each label. Here is an example of a tab control that uses icons:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(17377).Z,width:"599",height:"510"})),(0,o.kt)("p",null,"When you create a tab control, 4D manages the spacing and placement of the tabs. You only need to supply the labels in the form of an array, or the icons and labels in the form of a hierarchical list."),(0,o.kt)("p",null,"If the tab control is wide enough to display all the tabs with both the labels and icons, it displays both. If the tab control is not wide enough to display both the labels and icons, 4D displays the icons only. If it can\u2019t fit all the icons, it places scroll arrows to the right of the last visible tab. The scroll arrows allow the user to scroll the icons to the left or right."),(0,o.kt)("p",null,"Under macOS, in addition to the standard position (top), the tab controls can also be aligned to the bottom."),(0,o.kt)("h3",d({},{id:"json-example"}),"JSON Example"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' "myTab": {\n  "type": "tab",\n   "left": 60, \n  "top": 160,  \n  "width": 100, \n  "height": 20, \n  "labelsPlacement": "bottom" //define the direction\n }\n')),(0,o.kt)("h2",d({},{id:"adding-labels-to-a-tab-control"}),"Adding labels to a tab control"),(0,o.kt)("p",null,"To supply the labels for a tab control, you can use:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an object"),(0,o.kt)("li",{parentName:"ul"},"a choice list"),(0,o.kt)("li",{parentName:"ul"},"an array")),(0,o.kt)("h3",d({},{id:"using-an-object"}),"Using an object"),(0,o.kt)("p",null,"You can assign an ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/Concepts/object"}),"object")," encapsulating a ",(0,o.kt)("a",d({parentName:"p"},{href:"Concepts/dt_collection"}),"collection")," as the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesObject#variable-or-expression"}),"data source")," of the tab control. The object must contain the following properties:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",d({parentName:"tr"},{align:null}),"Property"),(0,o.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,o.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"values")),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"Collection"),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"Mandatory - Collection of scalar values. Only string values are supported. If invalid, empty or not defined, the tab control is empty")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"index")),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"Index of the currently tab control page (value between 0 and ",(0,o.kt)("inlineCode",{parentName:"td"},"collection.length-1"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"Text"),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"Currently selected value")))),(0,o.kt)("p",null,"The initialization code must be executed before the form is presented to the user."),(0,o.kt)("p",null,"In the following example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Form.tabControl")," has been defined as tab control ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesObject#variable-or-expression"}),"expression"),". You can associate the ",(0,o.kt)("a",d({parentName:"p"},{href:"#goto-page-action"}),(0,o.kt)("inlineCode",{parentName:"a"},"gotoPage")," standard action")," to the form object:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'Form.tabControl:=New object\nForm.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")\nForm.tabControl.index:=2 //start on page 3\n')),(0,o.kt)("h3",d({},{id:"using-a-choice-list"}),"Using a choice list"),(0,o.kt)("p",null,"You can assign a ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesDataSource#choice-list-static-list"}),"choice list"),' to the tab control, either through a collection (static list) or a JSON pointer to a json list ("$ref"). Icons associated with list items in the Lists editor will be displayed in the tab control.'),(0,o.kt)("h3",d({},{id:"using-a-text-array"}),"Using a Text array"),(0,o.kt)("p",null,"You can create a Text array that contains the names of each page of the form. This code must be executed before the form is presented to the user. For example, you could place the code in the object method of the tab control and execute it when the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Load")," event occurs.  "),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also store the names of the pages in a hierarchical list and use the ",(0,o.kt)("a",d({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page288.html"}),"LIST TO ARRAY")," command to load the values into the array.")),(0,o.kt)("h2",d({},{id:"goto-page-features"}),"Goto page features"),(0,o.kt)("h3",d({},{id:"form-goto-page-command"}),"FORM GOTO PAGE command"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",d({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page247.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"FORM GOTO PAGE"))," command in the tab control\u2019s method:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-4d"}),"FORM GOTO PAGE(arrPages)\n")),(0,o.kt)("p",null,"The command is executed when the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/Events/onClicked"}),(0,o.kt)("inlineCode",{parentName:"a"},"On Clicked"))," event occurs. You should then clear the array when the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/Events/onUnload"}),(0,o.kt)("inlineCode",{parentName:"a"},"On Unload"))," event occurs."),(0,o.kt)("p",null,"Here is an example object method:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n')),(0,o.kt)("h3",d({},{id:"goto-page-action"}),"Goto Page action"),(0,o.kt)("p",null,"When you assign the ",(0,o.kt)("inlineCode",{parentName:"p"},"gotoPage")," ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesAction#standard-action"}),"standard action")," to a tab control, 4D will automatically display the page of the form that corresponds to the number of the tab that is selected."),(0,o.kt)("p",null,"For example, if the user selects the 3rd tab, 4D will display the third page of the current form (if it exists)."),(0,o.kt)("h2",d({},{id:"supported-properties"}),"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesDataSource#choice-list-static-list"}),"Choice List")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesText#font"}),"Font")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesObject#save-value"}),"Save value")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesAction#standard-action"}),"Standard action")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesAppearance#tab-control-direction"}),"Tab Control Direction")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}k.isMDXComponent=!0},56198:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},17377:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"}}]);