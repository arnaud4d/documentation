"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(r),u=n,k=h["".concat(m,".").concat(u)]||h[u]||d[u]||o;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},46854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"formSize",title:"Form Size"},m=void 0,p={unversionedId:"FormEditor/formSize",id:"version-19-R6/FormEditor/formSize",title:"Form Size",description:"4D lets you set the size of both the form and the window. These properties are interdependent and your application interface results from their interaction.",source:"@site/versioned_docs/version-19-R6/FormEditor/properties_FormSize.md",sourceDirName:"FormEditor",slug:"/FormEditor/formSize",permalink:"/ja/docs/FormEditor/formSize",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"formSize",title:"Form Size"},sidebar:"docs",previous:{title:"Form Properties",permalink:"/ja/docs/FormEditor/propertiesForm"},next:{title:"Markers",permalink:"/ja/docs/FormEditor/markers"}},s={},d=[{value:"Size based on",id:"size-based-on",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Height",id:"height",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Hor. Margin",id:"hor-margin",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Vert. Margin",id:"vert-margin",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Width",id:"width",level:2},{value:"JSON Grammar",id:"json-grammar-4",level:4}],h={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"4D lets you set the size of both the form and the ",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/FormEditor/windowSize"},"window"),". These properties are interdependent and your application interface results from their interaction."),(0,o.kt)("p",null,"Size options depend on the value of the ",(0,o.kt)("strong",{parentName:"p"},"Size based on")," option."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"size-based-on"},"Size based on"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Automatic Size"),": The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the ",(0,o.kt)("a",{parentName:"p",href:"#hor-margin"},(0,o.kt)("strong",{parentName:"a"},"Hor. Margin"))," and ",(0,o.kt)("a",{parentName:"p",href:"#vert-margin"},(0,o.kt)("strong",{parentName:"a"},"Vert. Margin"))," fields.\nYou can choose this option when you want to use active objects placed in an offscreen area (",(0,o.kt)("em",{parentName:"p"},"i.e."),", outside the bounding rectangle of the window) with an automatic size window. Thanks to this option, the presence of these objects will not modify the size of the window.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Set Size"),": The size of the form will be based on what you enter (in pixels) in the ",(0,o.kt)("a",{parentName:"p",href:"#width"},(0,o.kt)("strong",{parentName:"a"},"Width"))," and ",(0,o.kt)("a",{parentName:"p",href:"#height"},(0,o.kt)("strong",{parentName:"a"},"Height"))," fields.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"\\<object name>"),": The size of the form will be based on the position of the selected form object. For example, if you choose an object that is placed in the bottom-right part of the area to be displayed, the form size will consist of a rectangle whose upper left corner will be the origin of the form and the lower right corner will correspond to that of the selected object, plus any margin values."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For output forms, only the ",(0,o.kt)("a",{parentName:"p",href:"#hor-margin"},(0,o.kt)("strong",{parentName:"a"},"Hor. margin"))," or ",(0,o.kt)("a",{parentName:"p",href:"width"},(0,o.kt)("strong",{parentName:"a"},"Width"))," fields are available.")),(0,o.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"formSizeAnchor"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of object to use to defined the size of the form")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"height"},"Height"),(0,o.kt)("p",null,"Height of the form (in pixels) when the ",(0,o.kt)("a",{parentName:"p",href:"#size-based-on"},"form size")," is ",(0,o.kt)("strong",{parentName:"p"},"Set size"),".  "),(0,o.kt)("h4",{id:"json-grammar-1"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"height"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"integer value")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"hor-margin"},"Hor. Margin"),(0,o.kt)("p",null,"Value to add (in pixels) to the right margin of the form when the ",(0,o.kt)("a",{parentName:"p",href:"#size-based-on"},"form size")," is ",(0,o.kt)("strong",{parentName:"p"},"Automatic size")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<object name>")),(0,o.kt)("p",null,"This value also determines the right-hand margins of forms used in the Label editor."),(0,o.kt)("h4",{id:"json-grammar-2"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rightMargin"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"integer value")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"vert-margin"},"Vert. Margin"),(0,o.kt)("p",null,"Value to add (in pixels) to the bottom margin of the form when the ",(0,o.kt)("a",{parentName:"p",href:"#size-based-on"},"form size")," is ",(0,o.kt)("strong",{parentName:"p"},"Automatic size")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<object name>"),"."),(0,o.kt)("p",null,"This value also determines the top margins of forms used in the Label editor."),(0,o.kt)("h4",{id:"json-grammar-3"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bottomMargin"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"integer value")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"width"},"Width"),(0,o.kt)("p",null,"Width of the form (in pixels) when the ",(0,o.kt)("a",{parentName:"p",href:"#size-based-on"},"form size")," is ",(0,o.kt)("strong",{parentName:"p"},"Set size"),".  "),(0,o.kt)("h4",{id:"json-grammar-4"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"width"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"integer value")))))}u.isMDXComponent=!0}}]);