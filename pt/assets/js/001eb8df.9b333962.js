"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98288],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||o;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},55874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"markers",title:"Markers"},d=void 0,s={unversionedId:"FormEditor/markers",id:"version-19/FormEditor/markers",title:"Markers",description:"These properties let you specify the precise location of markers on the vertical ruler of a table form. Markers are mainly used in output forms. They control the information that is listed and set header, breaks, detail and footer areas of the form. Any object that placed in these areas is displayed or printed at the appropriate location.",source:"@site/versioned_docs/version-19/FormEditor/properties_Markers.md",sourceDirName:"FormEditor",slug:"/FormEditor/markers",permalink:"/docs/pt/docs/19/FormEditor/markers",draft:!1,tags:[],version:"19",frontMatter:{id:"markers",title:"Markers"},sidebar:"docs",previous:{title:"Form Size",permalink:"/docs/pt/docs/19/FormEditor/formSize"},next:{title:"Menu",permalink:"/docs/pt/docs/19/FormEditor/menu"}},p={},m=[{value:"Form Break",id:"form-break",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Form Detail",id:"form-detail",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Form Footer",id:"form-footer",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Form Header",id:"form-header",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Additional areas",id:"additional-areas",level:2}],u={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These properties let you specify the precise location of markers on the vertical ruler of a ",(0,o.kt)("strong",{parentName:"p"},"table form"),". Markers are mainly used in output forms. They control the information that is listed and set header, breaks, detail and footer areas of the form. Any object that placed in these areas is displayed or printed at the appropriate location."),(0,o.kt)("p",null,"Whenever any form is used for output, either for screen display or printing, the output marker lines take effect and the areas display or print at designated locations. The markers also take effect when a form is used as the List form in a subform area. However, they have no effect when a form is used for input."),(0,o.kt)("p",null,"Methods that are associated with objects in these areas are executed when the areas are printed or displayed as long as the appropriate events have been activated. For example, a object method placed in the Header area is executed when the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Header")," event takes place."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"form-break"},"Form Break"),(0,o.kt)("p",null,"Form Break areas are displayed once at the end of the list of records and are printed once after the records have been printed in a report."),(0,o.kt)("p",null,"The Break area is defined as the area between the Detail control line and the Break control line. There can be ",(0,o.kt)("a",{parentName:"p",href:"#additional-areas"},"several Break areas")," in your report."),(0,o.kt)("p",null,"You can make Break areas smaller or larger. You can use a Break area to display information that is not part of the records (instructions, current date, current time, etc.), or to display a line or other graphic element that concludes the screen display. In a printed report, you can use a Break area for calculating and printing subtotals and other summary calculations."),(0,o.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"markerBreak"),(0,o.kt)("td",{parentName:"tr",align:null},"integer ","|"," integer collection"),(0,o.kt)("td",{parentName:"tr",align:null},"Break marker position or collection of break marker positions in pixels.",(0,o.kt)("br",null),"Minimum value: 0")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"form-detail"},"Form Detail"),(0,o.kt)("p",null,"The form Detail area is displayed on the screen and printed once for each record in a report. The Detail area is defined as the area between the Header control line and the Detail control line."),(0,o.kt)("p",null,"You can make the Detail area smaller or larger. Whatever you place in the Detail area is displayed or printed once for each record. Most often you place fields or variables in the Detail area so that the information in each record is displayed or printed, but you can place other elements in the Detail area as well."),(0,o.kt)("h4",{id:"json-grammar-1"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"markerBody"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"Detail marker position. Minimum: 0")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"form-footer"},"Form Footer"),(0,o.kt)("p",null,"The Form Footer area is displayed on screen under the list of records. It is always printed at the bottom of every page of a report. The Footer area is defined as the area between the Break control line and the Footer control line."),(0,o.kt)("p",null,"You make the Footer area smaller or larger."),(0,o.kt)("p",null,"You can use the Footer area to print graphics, page numbers, the current date, or any text you want at the bottom of each page of a report. For output forms designed for use on screen, the Footer area typically contains buttons that give the user options such as doing a search or sort, printing records, or putting away the current report. Active objects are accepted."),(0,o.kt)("h4",{id:"json-grammar-2"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"markerFooter"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"minimum: 0")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"form-header"},"Form Header"),(0,o.kt)("p",null,"The form Header area is displayed at the top of each screen and is printed at the top of each page of a report. The Header area is defined as the area above the Header control line."),(0,o.kt)("p",null,"You can make the Header area smaller or larger. You can use the Header area for column names, for instructions, additional information, or even a graphic such as a company logo or a decorative pattern."),(0,o.kt)("p",null,"You can also place and use active objects in the Header area of output forms displayed as subforms, in the records display window or using the ",(0,o.kt)("inlineCode",{parentName:"p"},"DISPLAY SELECTION")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MODIFY SELECTION")," commands. The following active objects can be inserted:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Buttons, picture buttons,"),(0,o.kt)("li",{parentName:"ul"},"Combo boxes, drop-down lists,  picture pop-up menus,"),(0,o.kt)("li",{parentName:"ul"},"hierarchical lists, list boxes"),(0,o.kt)("li",{parentName:"ul"},"Radio buttons, check boxes, 3D check boxes,"),(0,o.kt)("li",{parentName:"ul"},"Progress indicators, rulers, steppers, spinners.")),(0,o.kt)("p",null,"Standard actions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Subrecord"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Cancel")," (lists displayed using ",(0,o.kt)("inlineCode",{parentName:"p"},"DISPLAY SELECTION")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MODIFY SELECTION"),") or ",(0,o.kt)("inlineCode",{parentName:"p"},"Automatic splitter")," can be assigned to the inserted buttons. The following events apply to the active objects you insert in the Header area: ",(0,o.kt)("inlineCode",{parentName:"p"},"On Load"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Clicked"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Header"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Printing Footer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Double Clicked"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Drop"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Drag Over"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Unload"),". Keep in mind that the form method is called with the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Header")," event after calling the object methods of the area."),(0,o.kt)("p",null,"The form can contains ",(0,o.kt)("a",{parentName:"p",href:"#additional-areas"},"additional header areas")," to be associated with additional breaks. A level 1 Header is printed just before the records grouped by the first sorted field are printed."),(0,o.kt)("h4",{id:"json-grammar-3"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"markerHeader"),(0,o.kt)("td",{parentName:"tr",align:null},"integer ","|"," integer collection"),(0,o.kt)("td",{parentName:"tr",align:null},"Header marker position or collection of header marker positions in pixels.",(0,o.kt)("br",null),"Minimum value: 0")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"additional-areas"},"Additional areas"),(0,o.kt)("p",null,"You can create additional Break areas and Header areas for a report. These additional areas allow you to print subtotals and other calculations in a report and to display other information effectively."),(0,o.kt)("p",null,"Additional areas are defined when you use a collection of positions in the ",(0,o.kt)("a",{parentName:"p",href:"#form-break"},"Form Break")," and ",(0,o.kt)("a",{parentName:"p",href:"#form-header"},"Form Header")," properties."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the 4D Form editor, you create additional control lines by holding down the ",(0,o.kt)("strong",{parentName:"p"},"Alt")," key while clicking the appropriate control marker.")),(0,o.kt)("p",null,"A form always starts with a Header, Detail, Break level 0, and Footer areas."),(0,o.kt)("p",null,"Break at level 0 zero takes in all the records; it occurs after all the records are printed. Additional Break areas can be added, i.e. a Break level 1, Break level 2, etc."),(0,o.kt)("p",null,"A Break level 1 occurs after the records grouped by the first sorted field are printed."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Label"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Prints after groups created by:"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Form Break 1"),(0,o.kt)("td",{parentName:"tr",align:null},"Break at level 1"),(0,o.kt)("td",{parentName:"tr",align:null},"First sorted field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Form Break 2"),(0,o.kt)("td",{parentName:"tr",align:null},"Break at level 2"),(0,o.kt)("td",{parentName:"tr",align:null},"Second sorted field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Form Break 3"),(0,o.kt)("td",{parentName:"tr",align:null},"Break at level 3"),(0,o.kt)("td",{parentName:"tr",align:null},"Third sorted field")))),(0,o.kt)("p",null,"Additional Header areas are associated with Breaks. A level 1 Header is printed just before the records grouped by the first sorted field are printed."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Label"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Prints after groups created by:"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Form Header 1"),(0,o.kt)("td",{parentName:"tr",align:null},"Header at level 1"),(0,o.kt)("td",{parentName:"tr",align:null},"First sorted field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Form Header 2"),(0,o.kt)("td",{parentName:"tr",align:null},"Header at level 2"),(0,o.kt)("td",{parentName:"tr",align:null},"Second sorted field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Form Header 3"),(0,o.kt)("td",{parentName:"tr",align:null},"Header at level 3"),(0,o.kt)("td",{parentName:"tr",align:null},"Third sorted field")))),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Subtotal")," function to initiate Break processing, you should create a Break area for every level of Break that will be generated by the sort order, minus one. If you do not need anything printed in one of the Break areas, you can reduce its size to nothing by placing its marker on top of another control line. If you have more sort levels than Break areas, the last Break area will be repeated during printing."))}c.isMDXComponent=!0}}]);