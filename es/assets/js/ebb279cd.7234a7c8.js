"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(r),u=n,f=h["".concat(m,".").concat(u)]||h[u]||d[u]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},53666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>b,frontMatter:()=>h,metadata:()=>f,toc:()=>c});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e};const h={id:"formSize",title:"Form Size"},u=void 0,f={unversionedId:"FormEditor/formSize",id:"version-19-R6/FormEditor/formSize",title:"Form Size",description:"4D lets you set the size of both the form and the window. These properties are interdependent and your application interface results from their interaction.",source:"@site/versioned_docs/version-19-R6/FormEditor/properties_FormSize.md",sourceDirName:"FormEditor",slug:"/FormEditor/formSize",permalink:"/docs/es/FormEditor/formSize",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"formSize",title:"Form Size"},sidebar:"docs",previous:{title:"Form Properties",permalink:"/docs/es/FormEditor/propertiesForm"},next:{title:"Markers",permalink:"/docs/es/FormEditor/markers"}},k={},c=[{value:"Size based on",id:"size-based-on",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Height",id:"height",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Hor. Margin",id:"hor-margin",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Vert. Margin",id:"vert-margin",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Width",id:"width",level:2},{value:"JSON Grammar",id:"json-grammar-4",level:4}],g={toc:c};function b(e){var t,r=e,{components:n}=r,s=((e,t)=>{var r={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),s),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"4D lets you set the size of both the form and the ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/es/FormEditor/windowSize"}),"window"),". These properties are interdependent and your application interface results from their interaction."),(0,a.kt)("p",null,"Size options depend on the value of the ",(0,a.kt)("strong",{parentName:"p"},"Size based on")," option."),(0,a.kt)("hr",null),(0,a.kt)("h2",d({},{id:"size-based-on"}),"Size based on"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Automatic Size"),": The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the ",(0,a.kt)("a",d({parentName:"p"},{href:"#hor-margin"}),(0,a.kt)("strong",{parentName:"a"},"Hor. Margin"))," and ",(0,a.kt)("a",d({parentName:"p"},{href:"#vert-margin"}),(0,a.kt)("strong",{parentName:"a"},"Vert. Margin"))," fields.\nYou can choose this option when you want to use active objects placed in an offscreen area (",(0,a.kt)("em",{parentName:"p"},"i.e."),", outside the bounding rectangle of the window) with an automatic size window. Thanks to this option, the presence of these objects will not modify the size of the window.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Set Size"),": The size of the form will be based on what you enter (in pixels) in the ",(0,a.kt)("a",d({parentName:"p"},{href:"#width"}),(0,a.kt)("strong",{parentName:"a"},"Width"))," and ",(0,a.kt)("a",d({parentName:"p"},{href:"#height"}),(0,a.kt)("strong",{parentName:"a"},"Height"))," fields.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"\\<object name>"),": The size of the form will be based on the position of the selected form object. For example, if you choose an object that is placed in the bottom-right part of the area to be displayed, the form size will consist of a rectangle whose upper left corner will be the origin of the form and the lower right corner will correspond to that of the selected object, plus any margin values."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For output forms, only the ",(0,a.kt)("a",d({parentName:"p"},{href:"#hor-margin"}),(0,a.kt)("strong",{parentName:"a"},"Hor. margin"))," or ",(0,a.kt)("a",d({parentName:"p"},{href:"width"}),(0,a.kt)("strong",{parentName:"a"},"Width"))," fields are available.")),(0,a.kt)("h4",d({},{id:"json-grammar"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Data Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"formSizeAnchor"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Name of object to use to defined the size of the form")))),(0,a.kt)("hr",null),(0,a.kt)("h2",d({},{id:"height"}),"Height"),(0,a.kt)("p",null,"Height of the form (in pixels) when the ",(0,a.kt)("a",d({parentName:"p"},{href:"#size-based-on"}),"form size")," is ",(0,a.kt)("strong",{parentName:"p"},"Set size"),".  "),(0,a.kt)("h4",d({},{id:"json-grammar-1"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Data Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"height"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"integer value")))),(0,a.kt)("hr",null),(0,a.kt)("h2",d({},{id:"hor-margin"}),"Hor. Margin"),(0,a.kt)("p",null,"Value to add (in pixels) to the right margin of the form when the ",(0,a.kt)("a",d({parentName:"p"},{href:"#size-based-on"}),"form size")," is ",(0,a.kt)("strong",{parentName:"p"},"Automatic size")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"\\<object name>")),(0,a.kt)("p",null,"This value also determines the right-hand margins of forms used in the Label editor."),(0,a.kt)("h4",d({},{id:"json-grammar-2"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Data Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"rightMargin"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"integer value")))),(0,a.kt)("hr",null),(0,a.kt)("h2",d({},{id:"vert-margin"}),"Vert. Margin"),(0,a.kt)("p",null,"Value to add (in pixels) to the bottom margin of the form when the ",(0,a.kt)("a",d({parentName:"p"},{href:"#size-based-on"}),"form size")," is ",(0,a.kt)("strong",{parentName:"p"},"Automatic size")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"\\<object name>"),"."),(0,a.kt)("p",null,"This value also determines the top margins of forms used in the Label editor."),(0,a.kt)("h4",d({},{id:"json-grammar-3"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Data Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"bottomMargin"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"integer value")))),(0,a.kt)("hr",null),(0,a.kt)("h2",d({},{id:"width"}),"Width"),(0,a.kt)("p",null,"Width of the form (in pixels) when the ",(0,a.kt)("a",d({parentName:"p"},{href:"#size-based-on"}),"form size")," is ",(0,a.kt)("strong",{parentName:"p"},"Set size"),".  "),(0,a.kt)("h4",d({},{id:"json-grammar-4"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Data Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"width"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"integer value")))))}b.isMDXComponent=!0}}]);