"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],p={id:"propertiesPicture",title:"Picture"},c=void 0,s={unversionedId:"FormObjects/propertiesPicture",id:"version-19-R6/FormObjects/propertiesPicture",title:"Picture",description:"Pathname",source:"@site/versioned_docs/version-19-R6/FormObjects/properties_Picture.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesPicture",permalink:"/main/es/docs/FormObjects/propertiesPicture",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"propertiesPicture",title:"Picture"},sidebar:"docs",previous:{title:"Objects",permalink:"/main/es/docs/FormObjects/propertiesObject"},next:{title:"Plug-ins",permalink:"/main/es/docs/FormObjects/propertiesPlugIns"}},l={},u=[{value:"Pathname",id:"pathname",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Display",id:"display",level:2},{value:"Scaled to fit",id:"scaled-to-fit",level:3},{value:"Replicated",id:"replicated",level:3},{value:"Center / Truncated (non-centered)",id:"center--truncated-non-centered",level:3},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4}],m={toc:u};function d(e){var t=e.components,p=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pathname"},"Pathname"),(0,o.kt)("p",null,"Pathname of a static source picture for a ",(0,o.kt)("a",{parentName:"p",href:"/main/es/docs/FormObjects/pictureButtonOverview"},"picture button"),", ",(0,o.kt)("a",{parentName:"p",href:"/main/es/docs/FormObjects/picturePopupMenuOverview"},"picture pop-up Menu"),", or ",(0,o.kt)("a",{parentName:"p",href:"/main/es/docs/FormObjects/staticPicture"},"static picture"),". You must use the POSIX syntax."),(0,o.kt)("p",null,"The following locations can be used for static pictures:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in the ",(0,o.kt)("strong",{parentName:"li"},"Resources"),' folder of the project. Appropriate when you want to share static pictures between several forms in the project. In this case, the Pathname is "/RESOURCES/\\<picture path',">",'".'),(0,o.kt)("li",{parentName:"ul"},"in an image folder (e.g. named ",(0,o.kt)("strong",{parentName:"li"},"Images"),') within the form folder. Appropriate when the static pictures are used only in the form and/or you want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "\\<picture path',">",'" and is resolved from the root of the form folder.'),(0,o.kt)("li",{parentName:"ul"},'in a 4D picture variable. The picture must be loaded in memory when the form is executed. In this case, the Pathname is "var:\\<variableName',">",'".')),(0,o.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"picture"),(0,o.kt)("td",{parentName:"tr",align:"center"},"text"),(0,o.kt)("td",{parentName:"tr",align:null},'Relative or filesystem path in POSIX syntax, or "var:\\<variableName',">",'" for picture variable')))),(0,o.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/es/docs/FormObjects/pictureButtonOverview"},"Picture button")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/es/docs/FormObjects/picturePopupMenuOverview"},"Picture Pop-up Menu")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/es/docs/FormObjects/staticPicture"},"Static Picture")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"display"},"Display"),(0,o.kt)("h3",{id:"scaled-to-fit"},"Scaled to fit"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'JSON grammar: "scaled"')),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Scaled to fit")," format causes 4D to resize the picture to fit the dimensions of the area."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(39796).Z,width:"212",height:"198"})),(0,o.kt)("h3",{id:"replicated"},"Replicated"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'JSON grammar: "tiled"')),(0,o.kt)("p",null,"When the area that contains a picture with the ",(0,o.kt)("strong",{parentName:"p"},"Replicated")," format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(47934).Z,width:"663",height:"273"})),(0,o.kt)("p",null,"If the field is reduced to a size smaller than that of the original picture, the picture is truncated (non-centered)."),(0,o.kt)("h3",{id:"center--truncated-non-centered"},"Center / Truncated (non-centered)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'JSON grammar: "truncatedCenter" / "truncatedTopLeft"')),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Center")," format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 4D crops equally from each edge and from the top and bottom."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Truncated (non-centered)")," format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. 4D crops from the right and bottom."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the picture format is ",(0,o.kt)("strong",{parentName:"p"},"Truncated (non-centered)"),", it is possible to add scroll bars to the input area.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(58331).Z,width:"429",height:"221"})),(0,o.kt)("h4",{id:"json-grammar-1"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pictureFormat"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},'"scaled", "tiled", "truncatedCenter", "truncatedTopLeft"')))),(0,o.kt)("h4",{id:"objects-supported-1"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/es/docs/FormObjects/staticPicture"},"Static Picture")))}d.isMDXComponent=!0},47934:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/property_pictureFormat_Replicated-8497c171f9ede501e533a75837b762e5.png"},39796:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},58331:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/property_pictureFormat_Truncated-aebc828eb036b3aa77fc5edb90070ac5.png"}}]);