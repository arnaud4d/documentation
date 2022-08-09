"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58350],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(a),k=l,s=c["".concat(d,".").concat(k)]||c[k]||u[k]||r;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},95783:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],o={id:"onAfterEdit",title:"On After Edit"},d=void 0,p={unversionedId:"Events/onAfterEdit",id:"version-19-R6/Events/onAfterEdit",title:"On After Edit",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onAfterEdit.md",sourceDirName:"Events",slug:"/Events/onAfterEdit",permalink:"/docs/docs/Events/onAfterEdit",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onAfterEdit",title:"On After Edit"},sidebar:"docs",previous:{title:"On Activate",permalink:"/docs/docs/Events/onActivate"},next:{title:"On After Keystroke",permalink:"/docs/docs/Events/onAfterKeystroke"}},m={},u=[{value:"Description",id:"description",level:2},{value:"General case",id:"general-case",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"action = editChange",id:"action--editchange",level:4},{value:"action = valueChanged",id:"action--valuechanged",level:4},{value:"action = DragDropBlock",id:"action--dragdropblock",level:4},{value:"action = DragFillBlock",id:"action--dragfillblock",level:4},{value:"action = formulaChanged",id:"action--formulachanged",level:4},{value:"action = clipboardPasted",id:"action--clipboardpasted",level:4},{value:"Example",id:"example",level:4}],c={toc:u};function k(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"45"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"FormObjects/viewProArea_overview"},"4D View Pro area")," - ",(0,r.kt)("a",{parentName:"td",href:"FormObjects/writeProArea_overview"},"4D Write Pro area")," - ",(0,r.kt)("a",{parentName:"td",href:"/docs/docs/FormObjects/comboBoxOverview"},"Combo Box")," - Form - ",(0,r.kt)("a",{parentName:"td",href:"/docs/docs/FormObjects/inputOverview"},"Input")," - ",(0,r.kt)("a",{parentName:"td",href:"/docs/docs/FormObjects/listOverview"},"Hierarchical List")," - ",(0,r.kt)("a",{parentName:"td",href:"/docs/docs/FormObjects/listboxOverview"},"List Box")," - ",(0,r.kt)("a",{parentName:"td",href:"/docs/docs/FormObjects/listboxOverview#list-box-columns"},"List Box Column")),(0,r.kt)("td",{parentName:"tr",align:null},"The contents of the enterable object that has the focus has just been modified")))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("h3",{id:"general-case"},"General case"),(0,r.kt)("p",null,"This event can be used filter the data entry in keyboard enterable objects at the lowest level."),(0,r.kt)("p",null,"When it is used, this event is generated after each change made to the contents of an enterable object, regardless of the action that caused the change, ",(0,r.kt)("em",{parentName:"p"},"i.e."),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard editing actions which modify content like paste, cut, delete or cancel;"),(0,r.kt)("li",{parentName:"ul"},"Dropping a value (action similar to paste);"),(0,r.kt)("li",{parentName:"ul"},"Any keyboard entry made by the user; in this case, the ",(0,r.kt)("inlineCode",{parentName:"li"},"On After Edit")," event is generated after the ",(0,r.kt)("a",{parentName:"li",href:"/docs/docs/Events/onBeforeKeystroke"},(0,r.kt)("inlineCode",{parentName:"a"},"On Before Keystroke"))," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/docs/Events/onAfterKeystroke"},(0,r.kt)("inlineCode",{parentName:"a"},"On After Keystroke"))," events, if they are used."),(0,r.kt)("li",{parentName:"ul"},"Any modification made using a language command that simulates a user action (i.e., ",(0,r.kt)("inlineCode",{parentName:"li"},"POST KEY"),").")),(0,r.kt)("p",null,"Within the ",(0,r.kt)("inlineCode",{parentName:"p"},"On After Edit")," event, text data being entered is returned by the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19/help/command/en/page655.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Get edited text"))," command.  "),(0,r.kt)("h3",{id:"4d-view-pro"},"4D View Pro"),(0,r.kt)("p",null,"The object returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"FORM Event")," command contains:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"longint"),(0,r.kt)("td",{parentName:"tr",align:null},"On After Edit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},'"On After Edit"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"objectName"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"4D View Pro area name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sheetName"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the sheet of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},'"editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted"')))),(0,r.kt)("p",null,"Depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," property value, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/Events/overview#event-object"},"event object")," will contain additional properties."),(0,r.kt)("h4",{id:"action--editchange"},"action = editChange"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"range"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Cell range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"editingText"),(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},"The value from the current editor")))),(0,r.kt)("h4",{id:"action--valuechanged"},"action = valueChanged"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"range"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Cell range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oldValue"),(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},"Value of cell before change")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newValue"),(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},"Value of cell after change")))),(0,r.kt)("h4",{id:"action--dragdropblock"},"action = DragDropBlock"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fromRange"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Range of source cell range (being dragged)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toRange"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Range of the destination cell range (drop location)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copy"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies if the source range is copied or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"insert"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies if the source range is inserted or not")))),(0,r.kt)("h4",{id:"action--dragfillblock"},"action = DragFillBlock"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fillRange"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Range used for fill")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoFillType"),(0,r.kt)("td",{parentName:"tr",align:null},"longint"),(0,r.kt)("td",{parentName:"tr",align:null},"Value used for the fill.",(0,r.kt)("li",null,"0: Cells are filled with all data (values, formatting, and formulas)"),(0,r.kt)("li",null,"1: Cells are filled with automatically sequential data"),(0,r.kt)("li",null,"2: Cells are filled with formatting only"),(0,r.kt)("li",null,"3: Cells are filled with values but not formatting"),(0,r.kt)("li",null,"4: Values are removed from the cells"),(0,r.kt)("li",null,"5: Cells are filled automatically"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fillDirection"),(0,r.kt)("td",{parentName:"tr",align:null},"longint"),(0,r.kt)("td",{parentName:"tr",align:null},"Direction of the fill.",(0,r.kt)("li",null,"0: The cells to the left are filled"),(0,r.kt)("li",null,"1: The cells to the right are filled"),(0,r.kt)("li",null,"2: The cells above are filled"),(0,r.kt)("li",null,"3: The cells below are filled"))))),(0,r.kt)("h4",{id:"action--formulachanged"},"action = formulaChanged"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"range"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Cell range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formula"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"The formula entered")))),(0,r.kt)("h4",{id:"action--clipboardpasted"},"action = clipboardPasted"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"range"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Cell range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pasteOption"),(0,r.kt)("td",{parentName:"tr",align:null},"longint"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies what is pasted from the clipboard:",(0,r.kt)("li",null,"0: Everything is pasted (values, formatting, and formulas)"),(0,r.kt)("li",null,"1: Only values are pasted"),(0,r.kt)("li",null,"2: Only the formatting is pasted"),(0,r.kt)("li",null,"3: Only formulas are pasted"),(0,r.kt)("li",null,"4: Values and formatting are pasted (not formulas)"),(0,r.kt)("li",null,"5: Formulas and formatting are pasted (not values)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pasteData"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The data from the clipboard to be pasted",(0,r.kt)("li",null,'"text" (text): The text from the clipboard'),(0,r.kt)("li",null,'"html" (text): The HTML from the clipboard'))))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"Here is an example handling an ",(0,r.kt)("inlineCode",{parentName:"p"},"On After Edit")," event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' If(FORM Event.code=On After Edit)\n    If(FORM Event.action="valueChanged")\n       ALERT("WARNING: You are currently changing the value\\  \n       from "+String(FORM Event.oldValue)+\\  \n       " to "+String(FORM Event.newValue)+"!")\n    End if\n End if\n')),(0,r.kt)("p",null,"The above example could generate an event object like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n\n"code":45;\n"description":"On After Edit";\n"objectName":"ViewProArea"\n"sheetname":"Sheet1";\n"action":"valueChanged";\n"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};\n"oldValue":"The quick brown fox";\n"newValue":"jumped over the lazy dog";\n}\n')))}k.isMDXComponent=!0}}]);