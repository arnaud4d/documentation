"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57057],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>g});var r=a(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&d(e,a,t[a]);return e};const m={id:"dropdownListOverview",title:"Drop-down List"},u=void 0,h={unversionedId:"FormObjects/dropdownListOverview",id:"FormObjects/dropdownListOverview",title:"Drop-down List",description:"Drop-down lists are form objects that allow the user to select from a list. You manage the items displayed in the drop-down list using an object, an array, a choice list, or a standard action.",source:"@site/docs/FormObjects/dropdownList_Overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/dropdownListOverview",permalink:"/docs/pt/next/FormObjects/dropdownListOverview",draft:!1,tags:[],version:"current",frontMatter:{id:"dropdownListOverview",title:"Drop-down List"},sidebar:"docs",previous:{title:"Combo Box",permalink:"/docs/pt/next/FormObjects/comboBoxOverview"},next:{title:"Group Box",permalink:"/docs/pt/next/FormObjects/groupBox"}},f={},g=[{value:"Drop-down list types",id:"drop-down-list-types",level:2},{value:"Handling drop-down lists",id:"handling-drop-down-lists",level:2},{value:"Using an object",id:"using-an-object",level:3},{value:"Using an array",id:"using-an-array",level:3},{value:"Using a choice list",id:"using-a-choice-list",level:3},{value:"Selected item value or Selected item reference",id:"selected-item-value-or-selected-item-reference",level:4},{value:"Using a hierarchical choice list",id:"using-a-hierarchical-choice-list",level:3},{value:"Using a standard action",id:"using-a-standard-action",level:3},{value:"Supported Properties",id:"supported-properties",level:2}],k={toc:g};function b(e){var t,n=e,{components:d}=n,m=((e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},k),m),o(t,i({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Drop-down lists are form objects that allow the user to select from a list. You manage the items displayed in the drop-down list using an object, an array, a choice list, or a standard action."),(0,r.kt)("p",null,'On macOS, drop-down lists are also sometimes called "pop-up menu". Both names refer to the same objects. As the following example shows, the appearance of these objects can differ slightly according to the platform:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(32479).Z,width:"458",height:"158"})),(0,r.kt)("h2",c({},{id:"drop-down-list-types"}),"Drop-down list types"),(0,r.kt)("p",null,"You can create different types of drop-down lists with different features. To define a type, select the appropriate ",(0,r.kt)("strong",{parentName:"p"},"Expression Type")," and ",(0,r.kt)("strong",{parentName:"p"},"Data Type")," values in the Property list, or use their JSON equivalent."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Features"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Expression Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"JSON definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Built upon a collection"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Numeric, Text, Date, or Time"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: object")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"numberFormat: <format>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"textFormat: <format>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"dateFormat: <format>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"timeFormat: <format>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Array"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Built upon an array"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Array"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Numeric, Text, Date, or Time"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: arrayNumber")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"arrayText")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"arrayDate")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"arrayTime"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Choice list saved as value"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Built upon a choice list (standard)"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"List"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Selected item value"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: text")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"saveAs: value"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Choice list saved as reference"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Built upon a choice list. Item position is saved"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"List"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Selected item reference"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: integer")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"saveAs: reference"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Hierarchical choice list"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Can display hierarchical contents"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"List"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"List reference"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: integer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Standard action"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Automatically built by the action"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"any")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"any except List reference")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"any definition + ",(0,r.kt)("inlineCode",{parentName:"td"},"action: <action>")," (+ ",(0,r.kt)("inlineCode",{parentName:"td"},"focusable: false")," for actions applying to other areas)")))),(0,r.kt)("h2",c({},{id:"handling-drop-down-lists"}),"Handling drop-down lists"),(0,r.kt)("h3",c({},{id:"using-an-object"}),"Using an object"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature is only available in 4D projects.")),(0,r.kt)("p",null,"An ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/Concepts/object"}),"object")," encapsulating a ",(0,r.kt)("a",c({parentName:"p"},{href:"Concepts/dt_collection"}),"collection")," can be used as the data source of a drop-down list. The object must contain the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"values")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Mandatory - Collection of scalar values. All values must be of the same type. Supported types:",(0,r.kt)("li",null,"strings"),(0,r.kt)("li",null,"numbers"),(0,r.kt)("li",null,"dates"),(0,r.kt)("li",null,"times"),"If empty or not defined, the drop-down list is empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"index")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Index of the currently selected item (value between 0 and ",(0,r.kt)("inlineCode",{parentName:"td"},"collection.length-1"),"). If you set -1, ",(0,r.kt)("inlineCode",{parentName:"td"},"currentValue")," is displayed as a placeholder string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"same as Collection"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Currently selected item (used as placeholder value if set by code)")))),(0,r.kt)("p",null,"If the object contains other properties, they are ignored."),(0,r.kt)("p",null,"To initialize the object associated to the drop-down list, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter a list of default values in the object properties by selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"\\<Static List>")," in the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDataSource"}),"Data Source")," theme of the Property List. The default values are loaded into an object automatically.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Execute code that creates the object and its properties. For example, if "myList" is the ',(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#variable-or-expression"}),"variable")," associated to the drop-down list, you can write in the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/Events/onLoad"}),"On Load")," form event:"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'// Form.myDrop is the datasource of the form object\n \nForm.myDrop:=New object\nForm.myDrop.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")\nForm.myDrop.index:=-1  //currentValue is a placeholder\nForm.myDrop.currentValue:="Select a fruit" \n')),(0,r.kt)("p",null,"The drop-down list is displayed with the placeholder string:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(65102).Z,width:"230",height:"33"})),(0,r.kt)("p",null,"After the user selects a value:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(26194).Z,width:"234",height:"116"})),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]\nForm.myDrop.currentValue //"oranges"\nForm.myDrop.index //3\n')),(0,r.kt)("h3",c({},{id:"using-an-array"}),"Using an array"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/Concepts/arrays"}),"array")," is a list of values in memory that is referenced by the name of the array. A drop-down list can display an array as a list of values when you click on it."),(0,r.kt)("p",null,"To initialize the array associated to the drop-down list, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter a list of default values in the object properties by selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"\\<Static List>")," in the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDataSource"}),"Data Source")," theme of the Property List. The default values are loaded into an array automatically. You can refer to the array using the name of the variable associated with the object.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Before the object is displayed, execute code that assigns values to the array elements. For example:"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'  ARRAY TEXT(aCities;6) \n  aCities{1}:="Philadelphia" \n  aCities{2}:="Pittsburg" \n  aCities{3}:="Grand Blanc" \n  aCities{4}:="Bad Axe" \n  aCities{5}:="Frostbite Falls" \n  aCities{6}:="Green Bay" \n')),(0,r.kt)("p",null,"In this case, the name of the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#variable-or-expression"}),"variable")," associated with the object in the form must be ",(0,r.kt)("inlineCode",{parentName:"p"},"aCities"),". This code could be placed in the form method and be executed when the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Load")," form event runs."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Before the object is displayed, load the values of a list into the array using the ",(0,r.kt)("a",c({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page288.html"}),"LIST TO ARRAY")," command. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'   LIST TO ARRAY("Cities";aCities)\n')),(0,r.kt)("p",null,"In this case also, the name of the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#variable-or-expression"}),"variable")," associated with the object in the form must be ",(0,r.kt)("inlineCode",{parentName:"p"},"aCities"),". This code would be run in place of the assignment statements shown above."),(0,r.kt)("p",null,"If you need to save the user\u2019s choice into a field, you would use an assignment statement that runs after the record is accepted. The code might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'  Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Cities";aCities)\n       If(Record number([People])<0) `new record\n          aCities:=3 `display a default value\n       Else `existing record, display stored value\n          aCities:=Find in array(aCities;City)\n       End if\n    :(Form event=On Clicked) `user modified selection\n       City:=aCities{aCities} `field gets new value\n    :(Form event=On Validate)\n       City:=aCities{aCities}\n    :(Form event=On Unload)\n       CLEAR VARIABLE(aCities)\n End case\n')),(0,r.kt)("p",null,"You must select each event that you test for in your Case statement. Arrays always contain a finite number of items. The list of items is dynamic and can be changed by a method. Items in an array can be modified, sorted, and added to."),(0,r.kt)("h3",c({},{id:"using-a-choice-list"}),"Using a choice list"),(0,r.kt)("p",null,"If you want to use a drop-down list to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the drop-down list's ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#variable-or-expression"}),"data source"),". This makes it easier to manage listed fields/variables."),(0,r.kt)("p",null,'For example, in the case of a "Color" field that can only contain the values "White", "Blue", "Green" or "Red", it is possible to create a list containing these values and associate it with a drop-down list that references the 4D "Color" field. 4D then automatically takes care of managing the input and display of the current value in the form.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you use a hierarchical list, only the first level is displayed and can be selected. If you want to display hierarchical contents, you need to use a ",(0,r.kt)("a",c({parentName:"p"},{href:"#using-a-hierarchical-choice-list"}),"hierarchical choice list"),".")),(0,r.kt)("p",null,"To associate a drop-down list with a field or variable, enter the name of the field or variable directly as the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," field of the drop-down list in the Property List."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'It is not possible to use this feature with an object or an array drop-down list. If you enter a field name in the "Variable or Expression" area, then you must use a choice list.')),(0,r.kt)("p",null,"When the form is executed, 4D automatically manages the drop-down list during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the drop-down list when the form is displayed:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(15696).Z,width:"755",height:"171"})),(0,r.kt)("h4",c({},{id:"selected-item-value-or-selected-item-reference"}),"Selected item value or Selected item reference"),(0,r.kt)("p",null,"When you have associated a drop-down list with a choice list and with a field or a variable, you can set the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDataSource#data-type"}),(0,r.kt)("strong",{parentName:"a"},"Data Type"))," property to ",(0,r.kt)("strong",{parentName:"p"},"Selected item value")," or ",(0,r.kt)("strong",{parentName:"p"},"Selected item reference"),". This option lets you optimize the size of the data saved."),(0,r.kt)("h3",c({},{id:"using-a-hierarchical-choice-list"}),"Using a hierarchical choice list"),(0,r.kt)("p",null,"A hierarchical drop-down list has a sublist associated with each item in the list. Here is an example of a hierarchical drop-down list:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7679).Z,width:"248",height:"177"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In forms, hierarchical drop-down lists are limited to two levels.")),(0,r.kt)("p",null,"You can assign the hierarchical choice list to the drop-down list object using the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," field of the Property List."),(0,r.kt)("p",null,"You manage hierarchical drop-down lists using the ",(0,r.kt)("strong",{parentName:"p"},"Hierarchical Lists")," commands of the 4D Language. All commands that support the ",(0,r.kt)("inlineCode",{parentName:"p"},'(*; "name")')," syntax can be used with hierarchical  drop-down lists, e.g. ",(0,r.kt)("a",c({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page633.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"List item parent")),"."),(0,r.kt)("h3",c({},{id:"using-a-standard-action"}),"Using a standard action"),(0,r.kt)("p",null,"You can build automatically a drop-down list using a ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesAction#standard-action"}),"standard action"),". This feature is supported in the following contexts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoPage")," standard action. In this case, 4D will automatically display the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormEditor/forms#form-pages"}),"page of the form")," that corresponds to the number of the item that is selected. For example, if the user selects the 3rd item, 4D will display the third page of the current form (if it exists). At runtime, by default the drop-down list displays the page numbers (1, 2...).  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use of a standard action that displays a sublist of items, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor"),". This feature requires that:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a styled text area (",(0,r.kt)("a",c({parentName:"li"},{href:"/docs/pt/next/FormObjects/writeProAreaOverview"}),"4D Write Pro area")," or ",(0,r.kt)("a",c({parentName:"li"},{href:"/docs/pt/next/FormObjects/inputOverview"}),"input")," with ",(0,r.kt)("a",c({parentName:"li"},{href:"/docs/pt/next/FormObjects/propertiesText#multi-style"}),"multistyle")," property) is present in the form as the standard action target."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("a",c({parentName:"li"},{href:"/docs/pt/next/FormObjects/propertiesEntry#focusable"}),"focusable")," property is not set to the drop-down list.\nAt runtime the drop-down list will display an automatic list of values, e.g. background colors. You can override this automatic list by assigning in addition a choice list in which each item has been assigned a custom standard action.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature cannot be used with a hierarchical drop-down list.")),(0,r.kt)("h2",c({},{id:"supported-properties"}),"Supported Properties"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDisplay#alpha-format"}),"Alpha Format")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesTextAndPicture#button-style"}),"Button Style")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDataSource#data-type-expression-type"}),"Data Type (expression type)")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDataSource#data-type-list"}),"Data Type (list)")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDisplay#date-format"}),"Date Format")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesEntry#focusable"}),"Focusable")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesText#font"}),"Font")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDisplay#not-rendered"}),"Not rendered")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesAction#standard-action"}),"Standard action")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#save-value"}),"Save value")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDisplay#time-format"}),"Time Format")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#type"}),"Type")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}b.isMDXComponent=!0},65102:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAAAhCAYAAADNh9e3AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAiJJREFUeF7t2M2xgyAUhmF7spcsaIZCsrGBrFKBRaSAdGAHXA9qggiKeud6Zu67eGb4OUYWfIGx6rrOAdCFYAIKEUxAIYIJKPQJ5uPxAHChbDDf7zeACxBMQCGCCShEMAGFCCagEMEEFCKYgELlwWyMq6pqZFwTzi00zlS1s21q7g9Ma62ta1PzOa119ZXrBkZlwfQbNghj37fN2E46E8yzoZbnK2dW11fi4j8X/GtlwZQTaNfpc3UwfyNQBBPXKQum36SVq20bjI38aRpfcaNNnawRrbP1NC6n3PCeqV+ZZqz7asza/Pz5Yb3DWoyp+zF5d7S2WX9qz38ntQ6g1PP5TI6L3FxhMMU3RN9rYrTJ+5M1DMN8s8c1w+8twx7VZ+Xq4nHph+9JzU/9XBs45vV6udvt5u73+2JOxmROauK5HcEcjaefD+fsJAxPl2BT52r8eOoj0kYgZh+hUnXx83v6uTZwXCqca6EU+4PZa21/LSwNV67mSDBnz8iJm6qLn9/Tz7WBc8JwboVSlAWzscEGDa+gsnm3rqO5mgNX2fAjlA9pqi5+Pu4P7/1cx/0JHK411QbOm8K5FUpReGLKJo2uotOcD0g8F23qZM3yd6ewfD7whO/xhlD5udo4c+jE7IXXYdP/TiaM+XUAx0ggt0IpCoMJ4C8RTEAhggkoRDABhQgmoBDBBBQimIBCBBNQiGACCq0GE8B1ksEEoAfBBNTp3A89HOoPkDBgIQAAAABJRU5ErkJggg=="},26194:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},32479:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/popupDropdown_appearance-be4e6872edee7cab175cf9702b8731e4.png"},15696:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/popupDropdown_choiceList-f3bc797fde9f06db0a718cbc323d678b.png"},7679:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);