"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99294],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(b,o(o({ref:t},u),{},{components:r})):a.createElement(b,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>b,toc:()=>h});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e};const d={id:"propertiesRangeOfValues",title:"Range of Values"},m=void 0,b={unversionedId:"FormObjects/propertiesRangeOfValues",id:"FormObjects/propertiesRangeOfValues",title:"Range of Values",description:"Default value",source:"@site/docs/FormObjects/properties_RangeOfValues.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesRangeOfValues",permalink:"/docs/pt/next/FormObjects/propertiesRangeOfValues",draft:!1,tags:[],version:"current",frontMatter:{id:"propertiesRangeOfValues",title:"Range of Values"},sidebar:"docs",previous:{title:"Print",permalink:"/docs/pt/next/FormObjects/propertiesPrint"},next:{title:"Resizing Options",permalink:"/docs/pt/next/FormObjects/propertiesResizingOptions"}},f={},h=[{value:"Default value",id:"default-value",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Excluded List",id:"excluded-list",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"Required List",id:"required-list",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4}],k={toc:h};function v(e){var t,r=e,{components:n}=r,u=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=c(c({},k),u),l(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h2",c({},{id:"default-value"}),"Default value"),(0,a.kt)("p",null,"You can assign a default value to be entered in an input object. This property is useful for example when the input ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#variable-or-expression"}),"data source")," is a field: the default value is entered when a new record is first displayed. You can change the value unless the input area has been defined as ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesEntry#enterable"}),"non-enterable"),"."),(0,a.kt)("p",null,"The default value can only be used if the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#expression-type"}),"data source type")," is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"text/string"),(0,a.kt)("li",{parentName:"ul"},"number/integer"),(0,a.kt)("li",{parentName:"ul"},"date"),(0,a.kt)("li",{parentName:"ul"},"time"),(0,a.kt)("li",{parentName:"ul"},"boolean")),(0,a.kt)("p",null,"4D provides stamps for generating default values for the date, time, and sequence number. The date and time are taken from the system date and time. 4D automatically generates any sequence numbers needed. The table below shows the stamp to use to generate default values automatically:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Stamp"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"#D"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Current date")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"#H"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Current time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"#N"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Sequence number")))),(0,a.kt)("p",null,"You can use a sequence number to create a unique number for each record in the table for the current data file. A sequence number is a longint that is generated for each new record. The numbers start at one (1) and increase incrementally by one (1). A sequence number is never repeated even if the record it is assigned to is deleted from the table. Each table has its own internal counter of sequence numbers. For more information, refer to the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029"}),"Autoincrement")," paragraph."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Do not make confusion between this property and the "',(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDataSource#default-list-of-values"}),"default values"),'" property that allows to fill a list box column with static values.')),(0,a.kt)("h4",c({},{id:"json-grammar"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Data Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"defaultValue"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string, number, date, time, boolean"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),'Any value and/or a stamp: "#D", "#H", "#N"')))),(0,a.kt)("h4",c({},{id:"objects-supported"}),"Objects Supported"),(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/inputOverview"}),"Input")),(0,a.kt)("hr",null),(0,a.kt)("h2",c({},{id:"excluded-list"}),"Excluded List"),(0,a.kt)("p",null,"Allows setting a list whose values cannot be entered in the object. If an excluded value is entered, it is not accepted and an error message is displayed."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If a specified list is hierarchical, only the items of the first level are taken into account.")),(0,a.kt)("h4",c({},{id:"json-grammar-1"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Data Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"excludedList"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"list"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"A list of values to be excluded.")))),(0,a.kt)("h4",c({},{id:"objects-supported-1"}),"Objects Supported"),(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/comboBoxOverview"}),"Combo Box")," - ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/listboxOverview#list-box-columns"}),"List Box Column")," - ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/inputOverview"}),"Input")),(0,a.kt)("hr",null),(0,a.kt)("h2",c({},{id:"required-list"}),"Required List"),(0,a.kt)("p",null,"Restricts the valid entries to the items on the list. For example, you may want to use a required list for job titles so that valid entries are limited to titles that have been approved by management."),(0,a.kt)("p",null,"Making a list required does not automatically display the list when the field is selected. If you want to display the required list, assign the same list to the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," property.\nHowever, unlike the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," property, when a required list is defined, keyboard entry is no longer possible, only the selection of a list value using the pop-up menu is allowed. If different lists are defined using the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," and Required List properties, the Required List property has priority."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If a specified list is hierarchical, only the items of the first level are taken into account.")),(0,a.kt)("h4",c({},{id:"json-grammar-2"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Data Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"requiredList"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"list"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"A list of mandatory values.")))),(0,a.kt)("h4",c({},{id:"objects-supported-2"}),"Objects Supported"),(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/comboBoxOverview"}),"Combo Box")," - ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/listboxOverview#list-box-columns"}),"List Box Column")," - ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/pt/next/FormObjects/inputOverview"}),"Input")))}v.isMDXComponent=!0}}]);