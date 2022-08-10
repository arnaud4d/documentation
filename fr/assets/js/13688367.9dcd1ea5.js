"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"onBeforeKeystroke",title:"On Before Keystroke"},s=void 0,c={unversionedId:"Events/onBeforeKeystroke",id:"version-19-R6/Events/onBeforeKeystroke",title:"On Before Keystroke",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onBeforeKeystroke.md",sourceDirName:"Events",slug:"/Events/onBeforeKeystroke",permalink:"/main/fr/docs/Events/onBeforeKeystroke",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onBeforeKeystroke",title:"On Before Keystroke"},sidebar:"docs",previous:{title:"On Before Data Entry",permalink:"/main/fr/docs/Events/onBeforeDataEntry"},next:{title:"On Begin Drag Over",permalink:"/main/fr/docs/Events/onBeginDragOver"}},d={},p=[{value:"Description",id:"description",level:2},{value:"Non-enterable objects",id:"non-enterable-objects",level:3},{value:"Keystroke sequence",id:"keystroke-sequence",level:3},{value:"See also",id:"see-also",level:3}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"17"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"FormObjects/writeProArea_overview"},"4D Write Pro area")," - ",(0,o.kt)("a",{parentName:"td",href:"/main/fr/docs/FormObjects/comboBoxOverview"},"Combo Box")," - Form - ",(0,o.kt)("a",{parentName:"td",href:"/main/fr/docs/FormObjects/inputOverview"},"Input")," - ",(0,o.kt)("a",{parentName:"td",href:"/main/fr/docs/FormObjects/listboxOverview"},"List Box")," - ",(0,o.kt)("a",{parentName:"td",href:"/main/fr/docs/FormObjects/listboxOverview#list-box-columns"},"List Box Column")),(0,o.kt)("td",{parentName:"tr",align:null},"A character is about to be entered in the object that has the focus. ",(0,o.kt)("inlineCode",{parentName:"td"},"Get edited text")," returns the object's text ",(0,o.kt)("strong",{parentName:"td"},"without")," this character.")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"History"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v18 R5"),(0,o.kt)("td",{parentName:"tr",align:null},"- Support in non-enterable list boxes - The event is now triggered after IME validation"))))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"After the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Before Keystroke")," and ",(0,o.kt)("a",{parentName:"p",href:"/main/fr/docs/Events/onAfterKeystroke"},(0,o.kt)("inlineCode",{parentName:"a"},"On After Keystroke event"))," events are selected for an object, you can detect and handle the keystrokes within the object, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Form event code")," command that will return ",(0,o.kt)("inlineCode",{parentName:"p"},"On Before Keystroke")," and then ",(0,o.kt)("a",{parentName:"p",href:"/main/fr/docs/Events/onAfterKeystroke"},(0,o.kt)("inlineCode",{parentName:"a"},"On After Keystroke event"))," (for more information, please refer to the description of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Get edited text")," command). Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Before Keystroke")," event, the ",(0,o.kt)("inlineCode",{parentName:"p"},"FILTER KEYSTROKE")," command can be used to filter typed chars."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"These events are also activated by language commands that simulate a user action like ",(0,o.kt)("inlineCode",{parentName:"p"},"POST KEY"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"On Before Keystroke")," event is not generated:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in a ",(0,o.kt)("a",{parentName:"li",href:"/main/fr/docs/FormObjects/listboxOverview#list-box-columns"},"list box column")," method except when a cell is being edited (however it is generated in any cases in the ",(0,o.kt)("a",{parentName:"li",href:"/main/fr/docs/FormObjects/listboxOverview"},"list box")," method),"),(0,o.kt)("li",{parentName:"ul"},"when user modifications are not carried out using the keyboard (paste, drag-and-drop, checkbox, drop down list, combo box). To process these events, you must use ",(0,o.kt)("a",{parentName:"li",href:"/main/fr/docs/Events/onAfterEdit"},(0,o.kt)("inlineCode",{parentName:"a"},"On After Edit")),".")),(0,o.kt)("h3",{id:"non-enterable-objects"},"Non-enterable objects"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"On Before Keystroke")," event can be generated in non-enterable objects, e.g. in a list box even if the list box cells are not enterable, or rows are not selectable. This allows you to build interfaces where the user can scroll dynamically to a specific row in a list box by entering the first letters of a value. In case where the list box cells are enterable, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Is editing text")," command to know if the user is actually entering text in a cell or is using the type-ahead feature and then, execute appropriate code."),(0,o.kt)("h3",{id:"keystroke-sequence"},"Keystroke sequence"),(0,o.kt)("p",null,"When an entry requires a sequence of keystrokes, the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Before Keystroke")," and ",(0,o.kt)("a",{parentName:"p",href:"/main/fr/docs/Events/onAfterKeystroke"},(0,o.kt)("inlineCode",{parentName:"a"},"On After Keystroke"))," events are generated only when the entry is fully validaded by the user. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Keystroke")," command returns the validated character. This case mainly occurs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'when using "dead" keys such as ^ or ~: events are generated only when the extended character is eventuelly entered (e.g. "\xea" or \xf1),'),(0,o.kt)("li",{parentName:"ul"},"when an IME (Input Code Editor) displays an intermediary dialog box where the user can enter a combination of characters: events are generated only when the IME dialog is validated.")),(0,o.kt)("h3",{id:"see-also"},"See also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/fr/docs/Events/onAfterKeystroke"},"On After Keystroke"),"."))}u.isMDXComponent=!0}}]);