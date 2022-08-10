"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55119],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(a),m=r,b=h["".concat(l,".").concat(m)]||h[m]||d[m]||n;return a?o.createElement(b,s(s({ref:t},p),{},{components:a})):o.createElement(b,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},63839:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=a(87462),r=a(63366),n=(a(67294),a(3905)),s=["components"],i={id:"tabControl",title:"Tab Controls"},l=void 0,c={unversionedId:"FormObjects/tabControl",id:"version-18/FormObjects/tabControl",title:"Tab Controls",description:"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. Each screen is accessed by clicking its tab.",source:"@site/versioned_docs/version-18/FormObjects/tabControl.md",sourceDirName:"FormObjects",slug:"/FormObjects/tabControl",permalink:"/ja/docs/18/FormObjects/tabControl",draft:!1,tags:[],version:"18",frontMatter:{id:"tabControl",title:"Tab Controls"},sidebar:"docs",previous:{title:"Subform",permalink:"/ja/docs/18/FormObjects/subformOverview"},next:{title:"Text",permalink:"/ja/docs/18/FormObjects/text"}},p={},d=[{value:"JSON Example",id:"json-example",level:3},{value:"Adding labels to a tab control",id:"adding-labels-to-a-tab-control",level:2},{value:"Managing tabs programmatically",id:"managing-tabs-programmatically",level:2},{value:"FORM GOTO PAGE command",id:"form-goto-page-command",level:3},{value:"Goto Page action",id:"goto-page-action",level:3},{value:"Supported Properties",id:"supported-properties",level:2}],h={toc:d};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. Each screen is accessed by clicking its tab."),(0,n.kt)("p",null,"The following multi-page form uses a tab control object:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(51511).Z,width:"600",height:"534"})),(0,n.kt)("p",null,"To navigate from screen to screen, the user simply clicks the desired tab."),(0,n.kt)("p",null,"The screens can represent pages in a multi-page form or an object that changes when the user clicks a tab. If the tab control is used as a page navigation tool, then the ",(0,n.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html"},"FORM GOTO PAGE")," command or the ",(0,n.kt)("inlineCode",{parentName:"p"},"gotoPage")," standard action would be used when a user clicks a tab."),(0,n.kt)("p",null,"Another use of the tab control is to control the data that is displayed in a subform. For example, a Rolodex could be implemented using a tab control. The tabs would display the letters of the alphabet and the tab control\u2019s action would be to load the data corresponding to the letter that the user clicked."),(0,n.kt)("p",null,"Each tab can display labels or labels and a small icon. If you include icons, they appear to the left of each label. Here is an example of a tab control that uses icons:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(95721).Z,width:"599",height:"510"})),(0,n.kt)("p",null,"When you create a tab control, 4D manages the spacing and placement of the tabs. You only need to supply the labels in the form of an array, or the icons and labels in the form of a hierarchical list."),(0,n.kt)("p",null,"If the tab control is wide enough to display all the tabs with both the labels and icons, it displays both. If the tab control is not wide enough to display both the labels and icons, 4D displays the icons only. If it can\u2019t fit all the icons, it places scroll arrows to the right of the last visible tab. The scroll arrows allow the user to scroll the icons to the left or right."),(0,n.kt)("p",null,"Under macOS, in addition to the standard position (top), the tab controls can also be aligned to the bottom."),(0,n.kt)("h3",{id:"json-example"},"JSON Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},' "myTab": {\n  "type": "tab",\n   "left": 60, \n  "top": 160,  \n  "width": 100, \n  "height": 20, \n  "labelsPlacement": "bottom" //define the direction\n }\n')),(0,n.kt)("h2",{id:"adding-labels-to-a-tab-control"},"Adding labels to a tab control"),(0,n.kt)("p",null,"There are several ways to supply the labels for a tab control:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can assign a ",(0,n.kt)("a",{parentName:"li",href:"/ja/docs/18/FormObjects/propertiesDataSource#choice-list-static-list"},"choice list"),' to the tab control, either through a collection (static list) or a JSON pointer ("$ref") to a json list. Icons associated with list items in the Lists editor will be displayed in the tob control.'),(0,n.kt)("li",{parentName:"ul"},"You can create a Text array that contains the names of each page of the form. This code must be executed before the form is presented to the user. For example, you could place the code in the object method of the tab control and execute it when the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Load")," event occurs.  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can also store the names of the pages in a hierarchical list and use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Load list")," command to load the values into the array.")),(0,n.kt)("h2",{id:"managing-tabs-programmatically"},"Managing tabs programmatically"),(0,n.kt)("h3",{id:"form-goto-page-command"},"FORM GOTO PAGE command"),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html"},"FORM GOTO PAGE")," command in the tab control\u2019s method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},"FORM GOTO PAGE(arrPages)\n")),(0,n.kt)("p",null,"The command is executed when the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Clicked")," event occurs. You should then clear the array when the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Unload")," event occurs."),(0,n.kt)("p",null,"Here is an example object method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n')),(0,n.kt)("h3",{id:"goto-page-action"},"Goto Page action"),(0,n.kt)("p",null,"When you assign the ",(0,n.kt)("inlineCode",{parentName:"p"},"gotoPage")," ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesAction#standard-action"},"standard action")," to a tab control, 4D will automatically display the page of the form that corresponds to the number of the tab that is selected."),(0,n.kt)("p",null,"For example, if the user selects the 3rd tab, 4D will display the third page of the current form (if it exists)."),(0,n.kt)("h2",{id:"supported-properties"},"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesText#bold"},"Bold")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesDataSource#choice-list-static-list"},"Choice List")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesObject#expression-type"},"Expression Type")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesText#font"},"Font")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesText#font-size"},"Font Size"),"  - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesHelp#help-tip"},"Help Tip")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesText#italic"},"Italic")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesAction#standard-action"},"Standard action")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesAppearance#tab-control-direction"},"Tab Control Direction")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesObject#type"},"Type")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesText#underline"},"Underline")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#width"},"Width")))}m.isMDXComponent=!0},51511:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},95721:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"}}]);