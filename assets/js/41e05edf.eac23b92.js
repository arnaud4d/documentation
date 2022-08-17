"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58350],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(a),k=r,s=c["".concat(d,".").concat(k)]||c[k]||u[k]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16743:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>k,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>N});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&m(t,a,e[a]);if(o)for(var a of o(e))p.call(e,a)&&m(t,a,e[a]);return t};const c={id:"onAfterEdit",title:"On After Edit"},k=void 0,s={unversionedId:"Events/onAfterEdit",id:"version-19-R6/Events/onAfterEdit",title:"On After Edit",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onAfterEdit.md",sourceDirName:"Events",slug:"/Events/onAfterEdit",permalink:"/docs/Events/onAfterEdit",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onAfterEdit",title:"On After Edit"},sidebar:"docs",previous:{title:"On Activate",permalink:"/docs/Events/onActivate"},next:{title:"On After Keystroke",permalink:"/docs/Events/onAfterKeystroke"}},g={},N=[{value:"Description",id:"description",level:2},{value:"General case",id:"general-case",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"action = editChange",id:"action--editchange",level:4},{value:"action = valueChanged",id:"action--valuechanged",level:4},{value:"action = DragDropBlock",id:"action--dragdropblock",level:4},{value:"action = DragFillBlock",id:"action--dragfillblock",level:4},{value:"action = formulaChanged",id:"action--formulachanged",level:4},{value:"action = clipboardPasted",id:"action--clipboardpasted",level:4},{value:"Example",id:"example",level:4}],h={toc:N};function f(t){var e,a=t,{components:r}=a,m=((t,e)=>{var a={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=u(u({},h),m),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Can be called by"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"45"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"FormObjects/viewProArea_overview"}),"4D View Pro area")," - ",(0,n.kt)("a",u({parentName:"td"},{href:"FormObjects/writeProArea_overview"}),"4D Write Pro area")," - ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/FormObjects/comboBoxOverview"}),"Combo Box")," - Form - ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/FormObjects/inputOverview"}),"Input")," - ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/FormObjects/listOverview"}),"Hierarchical List")," - ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/FormObjects/listboxOverview"}),"List Box")," - ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/FormObjects/listboxOverview#list-box-columns"}),"List Box Column")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The contents of the enterable object that has the focus has just been modified")))),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("h3",u({},{id:"general-case"}),"General case"),(0,n.kt)("p",null,"This event can be used filter the data entry in keyboard enterable objects at the lowest level."),(0,n.kt)("p",null,"When it is used, this event is generated after each change made to the contents of an enterable object, regardless of the action that caused the change, ",(0,n.kt)("em",{parentName:"p"},"i.e."),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Standard editing actions which modify content like paste, cut, delete or cancel;"),(0,n.kt)("li",{parentName:"ul"},"Dropping a value (action similar to paste);"),(0,n.kt)("li",{parentName:"ul"},"Any keyboard entry made by the user; in this case, the ",(0,n.kt)("inlineCode",{parentName:"li"},"On After Edit")," event is generated after the ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/Events/onBeforeKeystroke"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Before Keystroke"))," and ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/Events/onAfterKeystroke"}),(0,n.kt)("inlineCode",{parentName:"a"},"On After Keystroke"))," events, if they are used."),(0,n.kt)("li",{parentName:"ul"},"Any modification made using a language command that simulates a user action (i.e., ",(0,n.kt)("inlineCode",{parentName:"li"},"POST KEY"),").")),(0,n.kt)("p",null,"Within the ",(0,n.kt)("inlineCode",{parentName:"p"},"On After Edit")," event, text data being entered is returned by the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page655.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Get edited text"))," command.  "),(0,n.kt)("h3",u({},{id:"4d-view-pro"}),"4D View Pro"),(0,n.kt)("p",null,"The object returned by the ",(0,n.kt)("inlineCode",{parentName:"p"},"FORM Event")," command contains:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"code"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"longint"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"On After Edit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"description"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'"On After Edit"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"objectName"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"4D View Pro area name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"sheetName"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Name of the sheet of the event")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"action"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'"editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted"')))),(0,n.kt)("p",null,"Depending on the ",(0,n.kt)("inlineCode",{parentName:"p"},"action")," property value, the ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/Events/overview#event-object"}),"event object")," will contain additional properties."),(0,n.kt)("h4",u({},{id:"action--editchange"}),"action = editChange"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"range"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Cell range")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"editingText"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"variant"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The value from the current editor")))),(0,n.kt)("h4",u({},{id:"action--valuechanged"}),"action = valueChanged"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"range"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Cell range")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"oldValue"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"variant"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Value of cell before change")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"newValue"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"variant"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Value of cell after change")))),(0,n.kt)("h4",u({},{id:"action--dragdropblock"}),"action = DragDropBlock"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"fromRange"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Range of source cell range (being dragged)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"toRange"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Range of the destination cell range (drop location)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"copy"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Specifies if the source range is copied or not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"insert"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Specifies if the source range is inserted or not")))),(0,n.kt)("h4",u({},{id:"action--dragfillblock"}),"action = DragFillBlock"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"fillRange"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Range used for fill")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"autoFillType"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"longint"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Value used for the fill.",(0,n.kt)("li",null,"0: Cells are filled with all data (values, formatting, and formulas)"),(0,n.kt)("li",null,"1: Cells are filled with automatically sequential data"),(0,n.kt)("li",null,"2: Cells are filled with formatting only"),(0,n.kt)("li",null,"3: Cells are filled with values but not formatting"),(0,n.kt)("li",null,"4: Values are removed from the cells"),(0,n.kt)("li",null,"5: Cells are filled automatically"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"fillDirection"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"longint"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Direction of the fill.",(0,n.kt)("li",null,"0: The cells to the left are filled"),(0,n.kt)("li",null,"1: The cells to the right are filled"),(0,n.kt)("li",null,"2: The cells above are filled"),(0,n.kt)("li",null,"3: The cells below are filled"))))),(0,n.kt)("h4",u({},{id:"action--formulachanged"}),"action = formulaChanged"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"range"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Cell range")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"formula"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The formula entered")))),(0,n.kt)("h4",u({},{id:"action--clipboardpasted"}),"action = clipboardPasted"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"range"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Cell range")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"pasteOption"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"longint"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Specifies what is pasted from the clipboard:",(0,n.kt)("li",null,"0: Everything is pasted (values, formatting, and formulas)"),(0,n.kt)("li",null,"1: Only values are pasted"),(0,n.kt)("li",null,"2: Only the formatting is pasted"),(0,n.kt)("li",null,"3: Only formulas are pasted"),(0,n.kt)("li",null,"4: Values and formatting are pasted (not formulas)"),(0,n.kt)("li",null,"5: Formulas and formatting are pasted (not values)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"pasteData"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The data from the clipboard to be pasted",(0,n.kt)("li",null,'"text" (text): The text from the clipboard'),(0,n.kt)("li",null,'"html" (text): The HTML from the clipboard'))))),(0,n.kt)("h4",u({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Here is an example handling an ",(0,n.kt)("inlineCode",{parentName:"p"},"On After Edit")," event:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-4d"}),' If(FORM Event.code=On After Edit)\n    If(FORM Event.action="valueChanged")\n       ALERT("WARNING: You are currently changing the value\\  \n       from "+String(FORM Event.oldValue)+\\  \n       " to "+String(FORM Event.newValue)+"!")\n    End if\n End if\n')),(0,n.kt)("p",null,"The above example could generate an event object like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),'{\n\n"code":45;\n"description":"On After Edit";\n"objectName":"ViewProArea"\n"sheetname":"Sheet1";\n"action":"valueChanged";\n"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};\n"oldValue":"The quick brown fox";\n"newValue":"jumped over the lazy dog";\n}\n')))}f.isMDXComponent=!0}}]);