"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84423],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"propertiesAction",title:"Action"},p=void 0,s={unversionedId:"FormObjects/propertiesAction",id:"FormObjects/propertiesAction",title:"Action",description:"---",source:"@site/docs/FormObjects/properties_Action.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesAction",permalink:"/main/ja/docs/next/FormObjects/propertiesAction",draft:!1,tags:[],version:"current",frontMatter:{id:"propertiesAction",title:"Action"},sidebar:"docs",previous:{title:"JSON property list",permalink:"/main/ja/docs/next/FormObjects/propertiesReference"},next:{title:"Animation",permalink:"/main/ja/docs/next/FormObjects/propertiesAnimation"}},m={},d=[{value:"Draggable",id:"draggable",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"See also",id:"see-also",level:4},{value:"Droppable",id:"droppable",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"See also",id:"see-also-1",level:4},{value:"Execute object method",id:"execute-object-method",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4},{value:"Method",id:"method",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Objects Supported",id:"objects-supported-3",level:4},{value:"Movable Rows",id:"movable-rows",level:2},{value:"JSON Grammar",id:"json-grammar-4",level:4},{value:"Objects Supported",id:"objects-supported-4",level:4},{value:"Multi-selectable",id:"multi-selectable",level:2},{value:"JSON Grammar",id:"json-grammar-5",level:4},{value:"Objects Supported",id:"objects-supported-5",level:4},{value:"Sortable",id:"sortable",level:2},{value:"JSON Grammar",id:"json-grammar-6",level:4},{value:"Objects Supported",id:"objects-supported-6",level:4},{value:"Standard action",id:"standard-action",level:2},{value:"JSON Grammar",id:"json-grammar-7",level:4},{value:"Objects Supported",id:"objects-supported-7",level:4}],c={toc:d};function u(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"draggable"},"Draggable"),(0,o.kt)("p",null,"Control whether and how the user can drag the object. By default, no drag operation is allowed."),(0,o.kt)("p",null,"Two drag modes are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom"),": In this mode, any drag operation performed on the object triggers the ",(0,o.kt)("inlineCode",{parentName:"li"},"On Begin Drag")," form event in the context of the object. You then manage the drag action using a method.",(0,o.kt)("br",{parentName:"li"}),"In custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. This mode is based upon a combination of specific properties, events, and commands from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Pasteboard")," theme. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Automatic"),": In this mode, 4D ",(0,o.kt)("strong",{parentName:"li"},"copies")," text or pictures directly from the form object. It can then be used in the same 4D area, between two 4D areas, or between 4D and another application. For example, automatic drag (and drop) lets you copy a value between two fields without using programming:",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{src:a(29601).Z,width:"421",height:"63"}),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{src:a(21957).Z,width:"421",height:"27"}),"\nIn this mode, the ",(0,o.kt)("inlineCode",{parentName:"li"},"On Begin Drag"),' form event is NOT generated. If you want to "force" the use of the custom drag while automatic drag is enabled, hold down the ',(0,o.kt)("strong",{parentName:"li"},"Alt")," (Windows) or ",(0,o.kt)("strong",{parentName:"li"},"Option")," (macOS) key during the action. This option is not available for pictures.")),(0,o.kt)("p",null,"For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html"},"Drag and Drop")," in the ",(0,o.kt)("em",{parentName:"p"},"4D Language Reference")," manual."),(0,o.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dragging"),(0,o.kt)("td",{parentName:"tr",align:null},"text"),(0,o.kt)("td",{parentName:"tr",align:null},'"none" (default), "custom", "automatic" (excluding list box)')))),(0,o.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/writeProAreaOverview"},"4D Write Pro areas")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/inputOverview"},"Input")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listOverview#overview"},"Hierarchical List")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview#overview"},"List Box")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/pluginAreaOverview#overview"},"Plug-in Area")),(0,o.kt)("h4",{id:"see-also"},"See also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#droppable"},"Droppable")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"droppable"},"Droppable"),(0,o.kt)("p",null,"Control whether and how the object can be the destination of a drag and drop operation. "),(0,o.kt)("p",null,"Two drop modes are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom"),": In this mode, any drop operation performed on the object triggers the ",(0,o.kt)("inlineCode",{parentName:"li"},"On Drag Over")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"On Drop")," form events in the context of the object. You then manage the drop action using a method.",(0,o.kt)("br",{parentName:"li"}),"In custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. This mode is based upon a combination of specific properties, events, and commands from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Pasteboard")," theme. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Automatic"),": In this mode, 4D automatically manages \u2014 if possible \u2014 the insertion of dragged data of the text or picture type that is dropped onto the object (the data are pasted into the object). The ",(0,o.kt)("inlineCode",{parentName:"li"},"On Drag Over")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"On Drop")," form events are NOT generated. On the other hand, the ",(0,o.kt)("inlineCode",{parentName:"li"},"On After Edit")," (during the drop) and ",(0,o.kt)("inlineCode",{parentName:"li"},"On Data Change")," (when the object loses the focus) events are generated. ")),(0,o.kt)("p",null,"For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html"},"Drag and Drop")," in the ",(0,o.kt)("em",{parentName:"p"},"4D Language Reference")," manual."),(0,o.kt)("h4",{id:"json-grammar-1"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dropping"),(0,o.kt)("td",{parentName:"tr",align:null},"text"),(0,o.kt)("td",{parentName:"tr",align:null},'"none" (default), "custom", "automatic" (excluding list box)')))),(0,o.kt)("h4",{id:"objects-supported-1"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/writeProAreaOverview"},"4D Write Pro areas")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/buttonOverview"},"Button")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/inputOverview"},"Input")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listOverview#overview"},"Hierarchical List")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview#overview"},"List Box")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/pluginAreaOverview#overview"},"Plug-in Area")," "),(0,o.kt)("h4",{id:"see-also-1"},"See also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#draggable"},"Draggable")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"execute-object-method"},"Execute object method"),(0,o.kt)("p",null,"When this option is enabled, the object method is executed with the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Data Change")," event ",(0,o.kt)("em",{parentName:"p"},"at the same moment")," the user changes the value of the indicator. When the option is disabled, the method is executed ",(0,o.kt)("em",{parentName:"p"},"after")," the modification."),(0,o.kt)("h4",{id:"json-grammar-2"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"continuousExecution"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"true, false")))),(0,o.kt)("h4",{id:"objects-supported-2"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/progressIndicator"},"Progress bar")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/ruler"},"Ruler")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/stepper"},"Stepper")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"method"},"Method"),(0,o.kt)("p",null,'Reference of a method attached to the object. Object methods generally "manage" the object while the form is displayed or printed. You do not call an object method\u20144D calls it automatically when an event involves the object to which the object method is attached.'),(0,o.kt)("p",null,"Several types of method references are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a standard object method file path, i.e. that uses the following pattern:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectMethods/objectName.4dm"),(0,o.kt)("br",{parentName:"p"}),"\n","... where ",(0,o.kt)("inlineCode",{parentName:"p"},"objectName")," is the actual ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/propertiesObject#object-name"},"object name"),'. This type of reference indicates that the method file is located at the default location ("sources/forms/',(0,o.kt)("em",{parentName:"p"},"formName"),'/ObjectMethods/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a project method name: name of an existing project method without file extension, i.e.:\n",(0,o.kt)("inlineCode",{parentName:"p"},"myMethod"),"\nIn this case, 4D does not provide automatic support for object operations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a custom method file path including the .4dm extension, e.g.:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"../../CustomMethods/myMethod.4dm"),"\nYou can also use a filesystem:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/RESOURCES/Buttons/bOK.4dm"),"\nIn this case, 4D does not provide automatic support for object operations."))),(0,o.kt)("h4",{id:"json-grammar-3"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"method"),(0,o.kt)("td",{parentName:"tr",align:null},"text"),(0,o.kt)("td",{parentName:"tr",align:null},"Object method standard or custom file path, or project method name")))),(0,o.kt)("h4",{id:"objects-supported-3"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/viewProAreaOverview"},"4D View Pro Area")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/writeProAreaOverview"},"4D Write Pro Area")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/buttonOverview"},"Button")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/buttonGridOverview"},"Button Grid")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/checkboxOverview"},"Check Box")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/comboBoxOverview"},"Combo Box")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/dropdownListOverview"},"Dropdown list")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormEditor/forms"},"Forms")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listOverview#overview"},"Hierarchical List")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/inputOverview"},"Input")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview#overview"},"List Box")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview#list-box-columns"},"List Box Column")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/pictureButtonOverview"},"Picture Button")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/picturePopupMenuOverview"},"Picture Pop up menu")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/pluginAreaOverview#overview"},"Plug-in Area")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/progressIndicator"},"Progress Indicators")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/radiobuttonOverview"},"Radio Button")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/ruler"},"Ruler")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/spinner"},"Spinner")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/splitters"},"Splitter")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/stepper"},"Stepper")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/subformOverview"},"Subform")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/tabControl"},"Tab control")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/webAreaOverview#overview"},"Web Area")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"movable-rows"},"Movable Rows"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array type list boxes")),(0,o.kt)("p",null,"Authorizes the movement of rows during execution. This option is selected by default. It is not available for ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview#selection-list-boxes"},"selection type list boxes")," nor for ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/propertiesHierarchy#hierarchical-list-box"},"list boxes in hierarchical mode"),". "),(0,o.kt)("h4",{id:"json-grammar-4"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"movableRows"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"true, false")))),(0,o.kt)("h4",{id:"objects-supported-4"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview#overview"},"List Box")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"multi-selectable"},"Multi-selectable"),(0,o.kt)("p",null,"Allows the selection of multiple records/options in a ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listOverview"},"hierarchical list"),"."),(0,o.kt)("h4",{id:"json-grammar-5"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"selectionMode"),(0,o.kt)("td",{parentName:"tr",align:null},"text"),(0,o.kt)("td",{parentName:"tr",align:null},'"multiple", "single", "none"')))),(0,o.kt)("h4",{id:"objects-supported-5"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listOverview"},"Hierarchical List")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"sortable"},"Sortable"),(0,o.kt)("p",null,"Allows sorting column data by clicking a ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview"},"listbox")," header. This option is selected by default. Picture type arrays (columns) cannot be sorted using this feature."),(0,o.kt)("p",null,"In list boxes based on a selection of records, the standard sort function is available only:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When the data source is ",(0,o.kt)("em",{parentName:"li"},"Current Selection"),","),(0,o.kt)("li",{parentName:"ul"},"With columns associated with fields (of the Alpha, Number, Date, Time or Boolean type).")),(0,o.kt)("p",null,"In other cases (list boxes based on named selections, columns associated with expressions), the standard sort function is not available. A standard list box sort changes the order of the current selection in the database. However, the highlighted records and the current record are not changed. A standard sort synchronizes all the columns of the list box, including calculated columns."),(0,o.kt)("h4",{id:"json-grammar-6"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sortable"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"true, false")))),(0,o.kt)("h4",{id:"objects-supported-6"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview"},"List Box")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"standard-action"},"Standard action"),(0,o.kt)("p",null,"Typical activities to be performed by active objects (",(0,o.kt)("em",{parentName:"p"},"e.g."),", letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. They are described in detail in the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html"},"Standard actions")," section of the ",(0,o.kt)("em",{parentName:"p"},"Design Reference"),"."),(0,o.kt)("p",null,"You can assign both a standard action and a project method to an object. In this case, the standard action is usually executed after the method and 4D uses this action to enable/disable the object according to the current context. When an object is deactivated, the associated project method cannot be executed. "),(0,o.kt)("p",null,"You can also set this property using the ",(0,o.kt)("inlineCode",{parentName:"p"},"OBJECT SET ACTION")," command."),(0,o.kt)("h4",{id:"json-grammar-7"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"action"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of a ",(0,o.kt)("a",{parentName:"td",href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html"},"valid standard action"),".")))),(0,o.kt)("h4",{id:"objects-supported-7"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/buttonOverview"},"Button")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/buttonGridOverview"},"Button Grid")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/checkboxOverview"},"Check Box")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/dropdownListOverview"},"Drop-down List")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview"},"List Box")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/pictureButtonOverview"},"Picture Button")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/picturePopupMenuOverview"},"Picture Pop-up Menu")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/tabControl"},"Tab control")))}u.isMDXComponent=!0},29601:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAA/CAIAAADPOkBoAAADZElEQVR42u3csW7TQBwH4BjxBiCYmGHuyGt06Bt06TtUWVgRCxMPQxkoAxIzXelE1YrSFwhGFpY520ma5u6c3PepipKLk1wq99f/+eyrrn9+nwEU4FHuDgAkIu+AUsg7oBTyDiiFvANK8Th3B1Y4+/gpdxdI4fDo+ObqIncvQna/PdDdtaaed7XPX77m7gJxzeenubswyu6304Jdawfyrvb23YeDk/OUn/jt/evcX7ogd7eXubuwTL375e4CGwp2LcfvgFI8KO+ePn+1ZmNKSjO2rqqq3F1gC8K8q9Oq+zN7cH5tK/76Kbb1XBOUsN8Gjt9d/39F7fWmF9hmL/TWJ+mgBKvnK+rYaiKvm19BCA5GW/9VY++8joOT8zqV2lmL4H67Tbt9d4Puw260tRv0nwL2z7rzs0E2dR/2n0r8HQZDcNBYCAIlGMi7JXXcdkV9c4DA6uN3rezH49ohbb9MW/9NDFqhWPc433ia5djggbwlDGChWBuefzdW692rBkxWMI7loFoPirJufVcXd2PH9bpPde8Hd7ZSHvYHs03L2JbB/WDjfmHYbhbnt00pqqpaLBa5e0EozLt+KrUtaz61ZPuVn7WOfhgFLcFZJksal7wnPJDImyDXz0IUddi5Cm1qdmB9lPn89O728uzNi5QfOvEVO0hss0qtiTxV3nRMPe8Oj45zd4GiNf9uN355E3m/f/3I/T34q5rmWSYwBU+evdzshUFZp8rLa5fWN4ZctrXEfFPlqS2yM18BKdSRl/0KJeQdJCLyspN3kI7Iy0veQQrVP7MJLL1RLPMVEFF3ZtZ8RXbqO4ilmZNtajoj2SmQdxCFE1AmSN5BFN2FM5R4EyHvYPtUdtNkvgJiqau5dsmA5rZdNKXbLhyTUd9BLN1QG2t3XW1K6juIpYmzm6uLpoJrU69pqW/Vd4nJO4gliLN+rrWBmLunpZB3EMtYnHVnaQfXQFbxReL4HcSyZEn3xbjcvd5n8g5iMR0xNcazEEswDzs4VzsTiwmp7yCWwbATbRmZC4fUmvOQZ73JirbRX2UkxrOQTRtwir40jGeBUsg7yExxl4y8A0rh+B1kMHYeMlGZCQJKYTwLlELeAaWQd0Ap5B1QCnkHlELeAaWQd0Ap5B1QCnkHlELeAaWQd0Ap5B1Qij9Ru9BheP253gAAAABJRU5ErkJggg=="},21957:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAAbCAIAAABTBwdIAAAB/ElEQVR42u3cwU3DMBSAYYLYAAQjwD49dIOOUWUCxJ1hgAPiwALlzKmoSBULlEiVrPQ5dt008bPj/zsljhMe6OnZTkKqzXp1AQAFuNQOAAAiod4BKAX1DkAprrQD8Hl9edMOATHM5ovfny/tKCTSbwJEaiVd7xrvH5/aIWBcdb3UDsGJ9MuanVqp17vG49OzdggY0d/2WzsEH9IvX3Zqcf8OQCn617ubu4fAxpiqqtINACUj/RJ3sJ4V1WqzXjUtmzNeSD7zdKNJo91u528Z/EcAe6TfZMj7d6I89a5W6hO9cIzJUET6xXTkeYWZoLXrlyiCnaXNPst15RDN0NceAMW26WP6i9HS7LZzy3SwDwFtpN9kBD2fFbWpvWsfivwLdGZhJ1cWAr2RfnmR9c4zjxvWqBcHANuR+3eG+v04s6awx8nwi7BqQD+k3zSEvm+c5nSs806KBysIDIj0y06f9+9cc72T5oDRJoyuRGSwRQSkX1KC5nf7F/Hau52H2ttiY5Dpob2a2Le4eopt0dkemU230f7ayBjpNwEH9c6uSqYl8JCnv+v0k9jZIFrEY35Po+eaQCfSL3f8/yyAUqT+fZS6Xib+/QwAuUi63s3mC+0QUDSG24mp0nzRBFB3fXuvHQIGkNP3jQEtCX5iHmfieQWAUlDvAJSCegegFP8tyFk+nAzT1QAAAABJRU5ErkJggg=="}}]);