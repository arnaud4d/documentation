"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18156],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?r.createElement(b,o(o({ref:t},u),{},{components:a})):r.createElement(b,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},99347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"propertiesRangeOfValues",title:"Range of Values"},s=void 0,p={unversionedId:"FormObjects/propertiesRangeOfValues",id:"version-19-R6/FormObjects/propertiesRangeOfValues",title:"Range of Values",description:"Default value",source:"@site/versioned_docs/version-19-R6/FormObjects/properties_RangeOfValues.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesRangeOfValues",permalink:"/docs/docs/FormObjects/propertiesRangeOfValues",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"propertiesRangeOfValues",title:"Range of Values"},sidebar:"docs",previous:{title:"Print",permalink:"/docs/docs/FormObjects/propertiesPrint"},next:{title:"Resizing Options",permalink:"/docs/docs/FormObjects/propertiesResizingOptions"}},u={},d=[{value:"Default value",id:"default-value",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Excluded List",id:"excluded-list",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"Required List",id:"required-list",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4}],c={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"default-value"},"Default value"),(0,l.kt)("p",null,"You can assign a default value to be entered in an input object. This property is useful for example when the input ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/propertiesObject#variable-or-expression"},"data source")," is a field: the default value is entered when a new record is first displayed. You can change the value unless the input area has been defined as ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/propertiesEntry#enterable"},"non-enterable"),"."),(0,l.kt)("p",null,"The default value can only be used if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/propertiesObject#expression-type"},"data source type")," is:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"text/string"),(0,l.kt)("li",{parentName:"ul"},"number/integer"),(0,l.kt)("li",{parentName:"ul"},"date"),(0,l.kt)("li",{parentName:"ul"},"time"),(0,l.kt)("li",{parentName:"ul"},"boolean")),(0,l.kt)("p",null,"4D provides stamps for generating default values for the date, time, and sequence number. The date and time are taken from the system date and time. 4D automatically generates any sequence numbers needed. The table below shows the stamp to use to generate default values automatically:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Stamp"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#D"),(0,l.kt)("td",{parentName:"tr",align:null},"Current date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#H"),(0,l.kt)("td",{parentName:"tr",align:null},"Current time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#N"),(0,l.kt)("td",{parentName:"tr",align:null},"Sequence number")))),(0,l.kt)("p",null,"You can use a sequence number to create a unique number for each record in the table for the current data file. A sequence number is a longint that is generated for each new record. The numbers start at one (1) and increase incrementally by one (1). A sequence number is never repeated even if the record it is assigned to is deleted from the table. Each table has its own internal counter of sequence numbers. For more information, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029"},"Autoincrement")," paragraph."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'Do not make confusion between this property and the "',(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/propertiesDataSource#default-list-of-values"},"default values"),'" property that allows to fill a list box column with static values.')),(0,l.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"string, number, date, time, boolean"),(0,l.kt)("td",{parentName:"tr",align:null},'Any value and/or a stamp: "#D", "#H", "#N"')))),(0,l.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/inputOverview"},"Input")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"excluded-list"},"Excluded List"),(0,l.kt)("p",null,"Allows setting a list whose values cannot be entered in the object. If an excluded value is entered, it is not accepted and an error message is displayed."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If a specified list is hierarchical, only the items of the first level are taken into account.")),(0,l.kt)("h4",{id:"json-grammar-1"},"JSON Grammar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"excludedList"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of values to be excluded.")))),(0,l.kt)("h4",{id:"objects-supported-1"},"Objects Supported"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/comboBoxOverview"},"Combo Box")," - ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/listboxOverview#list-box-columns"},"List Box Column")," - ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/inputOverview"},"Input")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"required-list"},"Required List"),(0,l.kt)("p",null,"Restricts the valid entries to the items on the list. For example, you may want to use a required list for job titles so that valid entries are limited to titles that have been approved by management."),(0,l.kt)("p",null,"Making a list required does not automatically display the list when the field is selected. If you want to display the required list, assign the same list to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/propertiesDataSource#choice-list"},"Choice List")," property.\nHowever, unlike the ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/propertiesDataSource#choice-list"},"Choice List")," property, when a required list is defined, keyboard entry is no longer possible, only the selection of a list value using the pop-up menu is allowed. If different lists are defined using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/propertiesDataSource#choice-list"},"Choice List")," and Required List properties, the Required List property has priority."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If a specified list is hierarchical, only the items of the first level are taken into account.")),(0,l.kt)("h4",{id:"json-grammar-2"},"JSON Grammar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"requiredList"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of mandatory values.")))),(0,l.kt)("h4",{id:"objects-supported-2"},"Objects Supported"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/comboBoxOverview"},"Combo Box")," - ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/listboxOverview#list-box-columns"},"List Box Column")," - ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/FormObjects/inputOverview"},"Input")))}m.isMDXComponent=!0}}]);