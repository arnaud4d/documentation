"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55062],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,b=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64616:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={id:"propertiesPrint",title:"Print"},l=void 0,s={unversionedId:"FormObjects/propertiesPrint",id:"version-19/FormObjects/propertiesPrint",title:"Print",description:"Print frame",source:"@site/versioned_docs/version-19/FormObjects/properties_Print.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesPrint",permalink:"/main/pt/docs/19/FormObjects/propertiesPrint",draft:!1,tags:[],version:"19",frontMatter:{id:"propertiesPrint",title:"Print"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/main/pt/docs/19/FormObjects/propertiesPlugIns"},next:{title:"Range of Values",permalink:"/main/pt/docs/19/FormObjects/propertiesRangeOfValues"}},c={},m=[{value:"Print frame",id:"print-frame",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4}],d={toc:m};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"print-frame"},"Print frame"),(0,o.kt)("p",null,"This property handles the print mode for objects whose size can vary from one record to another depending on their contents. These objects can be set to print with either a fixed or variable frame. Fixed frame objects print within the confines of the object as it was created on the form. Variable frame objects expand during printing to include the entire contents of the object. Note that the width of objects printed as a variable size is not affected by this property; only the height varies automatically based on the contents of the object."),(0,o.kt)("p",null,"You cannot place more than one variable frame object side-by-side on a form. You can place non-variable frame objects on either side of an object that will be printed with a variable size provided that the variable frame object is at least one line longer than the object beside it and that all objects are aligned on the top. If this condition is not respected, the contents of the other fields will be repeated for every horizontal slice of the variable frame object."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Print object")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Print form")," commands do not support this property.")),(0,o.kt)("p",null,"The print options are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Variable")," option / ",(0,o.kt)("strong",{parentName:"p"},"Print Variable Frame")," checked: 4D enlarges or reduces the form object area in order to print all the subrecords.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fixed (Truncation)")," option / ",(0,o.kt)("strong",{parentName:"p"},"Print Variable Frame")," unchecked: 4D only prints the contents that appear in the object area. The form is only printed once and the contents not printed are ignored.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fixed (Multiple Records)")," (subforms only): the initial size of the subform area is kept but 4D prints the form several times in order to print all the records."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This property can be set by programming using the ",(0,o.kt)("inlineCode",{parentName:"p"},"OBJECT SET PRINT VARIABLE FRAME")," command.")),(0,o.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"printFrame"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:null},'"fixed", "variable", (subform only) "fixedMultiple"')))),(0,o.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/pt/docs/19/FormObjects/inputOverview"},"Input")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/pt/docs/19/FormObjects/subformOverview"},"Subforms")," (list subforms only) - ",(0,o.kt)("a",{parentName:"p",href:"/main/pt/docs/19/FormObjects/writeProAreaOverview"},"4D Write Pro areas")))}u.isMDXComponent=!0}}]);