"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12776],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?o.createElement(f,n(n({ref:t},l),{},{components:r})):o.createElement(f,n({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,n[1]=p;for(var c=2;c<i;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var o=r(87462),a=r(63366),i=(r(67294),r(3905)),n=["components"],p={id:"staticPicture",title:"Static picture"},s=void 0,c={unversionedId:"FormObjects/staticPicture",id:"version-18/FormObjects/staticPicture",title:"Static picture",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/staticPicture.md",sourceDirName:"FormObjects",slug:"/FormObjects/staticPicture",permalink:"/pt/docs/18/FormObjects/staticPicture",draft:!1,tags:[],version:"18",frontMatter:{id:"staticPicture",title:"Static picture"},sidebar:"docs",previous:{title:"Splitter",permalink:"/pt/docs/18/FormObjects/splitters"},next:{title:"Stepper",permalink:"/pt/docs/18/FormObjects/stepper"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Format and location",id:"format-and-location",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],m={toc:d};function u(e){var t=e.components,p=(0,a.Z)(e,n);return(0,i.kt)("wrapper",(0,o.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Static pictures are ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/formObjectsOverview#active-and-static-objects"},"static objects")," that can be used for various purposes in 4D forms, including decoration, background, or user interface:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(42059).Z,width:"312",height:"332"}),"  "),(0,i.kt)("p",null,"Static pictures are stored outside the forms and inserted by reference. In the form editor, static picture objects are created by copy/paste or drag and drop operations."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you place a static picture on page 0 of a multi-page form, it will appear automatically as a background element on all pages. You can also include it in an inherited form, applied in the background of other different forms. Either way, your database will run faster than if the picture was pasted into each page.")),(0,i.kt)("h2",{id:"format-and-location"},"Format and location"),(0,i.kt)("p",null,"The original picture must be stored in a format managed natively by 4D (4D recognizes the main picture formats: JPEG, PNG, BMP, SVG, GIF, etc.)."),(0,i.kt)("p",null,"Two main locations can be used for static picture path:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in the ",(0,i.kt)("strong",{parentName:"li"},"Resources"),' folder of the project database. Appropriate when you want to share static pictures between several forms in the database. In this case, the Pathname is in the "/RESOURCES/\\<picture path',">",'".'),(0,i.kt)("li",{parentName:"ul"},"in an image folder (e.g. named ",(0,i.kt)("strong",{parentName:"li"},"Images"),') within the form folder. Appropriate when the static pictures are used only in the form and/or yon want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "<\\picture path',">",'" and is resolved from the root of the form folder.')),(0,i.kt)("h2",{id:"supported-properties"},"Supported Properties"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesObject#css-class"},"CSS Class")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesPicture#display"},"Display")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesPicture#pathname"},"Pathname")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesObject#type"},"Type")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesDisplay#visibility"},"Visibility"),"  - ",(0,i.kt)("a",{parentName:"p",href:"/pt/docs/18/FormObjects/propertiesCoordinatesAndSizing#width"},"Width")))}u.isMDXComponent=!0},42059:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/StaticPict-a25104204af88c0c0efe292951248788.png"}}]);