"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,n(n({ref:t},l),{},{components:r})):a.createElement(f,n({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,n[1]=c;for(var p=2;p<o;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=r(87462),i=r(63366),o=(r(67294),r(3905)),n=["components"],c={id:"staticPicture",title:"Static picture"},s=void 0,p={unversionedId:"FormObjects/staticPicture",id:"version-19/FormObjects/staticPicture",title:"Static picture",description:"Static pictures are static objects that can be used for various purposes in 4D forms, including decoration, background, or user interface:",source:"@site/versioned_docs/version-19/FormObjects/staticPicture.md",sourceDirName:"FormObjects",slug:"/FormObjects/staticPicture",permalink:"/main/docs/19/FormObjects/staticPicture",draft:!1,tags:[],version:"19",frontMatter:{id:"staticPicture",title:"Static picture"},sidebar:"docs",previous:{title:"Splitter",permalink:"/main/docs/19/FormObjects/splitters"},next:{title:"Stepper",permalink:"/main/docs/19/FormObjects/stepper"}},l={},m=[{value:"Format and location",id:"format-and-location",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],u={toc:m};function d(e){var t=e.components,c=(0,i.Z)(e,n);return(0,o.kt)("wrapper",(0,a.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Static pictures are ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/formObjectsOverview#active-and-static-objects"},"static objects")," that can be used for various purposes in 4D forms, including decoration, background, or user interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(35855).Z,width:"312",height:"332"}),"  "),(0,o.kt)("p",null,"Static pictures are stored outside the forms and inserted by reference. In the form editor, static picture objects are created by copy/paste or drag and drop operations."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you place a static picture on page 0 of a multi-page form, it will appear automatically as a background element on all pages. You can also include it in an inherited form, applied in the background of other different forms. Either way, your application will run faster than if the picture was pasted into each page.")),(0,o.kt)("h2",{id:"format-and-location"},"Format and location"),(0,o.kt)("p",null,"The original picture must be stored in a format managed natively by 4D (4D recognizes the main picture formats: JPEG, PNG, BMP, SVG, GIF, etc.)."),(0,o.kt)("p",null,"Two main locations can be used for static picture path:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in the ",(0,o.kt)("strong",{parentName:"li"},"Resources"),' folder of the project. Appropriate when you want to share static pictures between several forms in the project. In this case, the Pathname is in the "/RESOURCES/\\<picture path',">",'".'),(0,o.kt)("li",{parentName:"ul"},"in an image folder (e.g. named ",(0,o.kt)("strong",{parentName:"li"},"Images"),') within the form folder. Appropriate when the static pictures are used only in the form and/or yon want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "<\\picture path',">",'" and is resolved from the root of the form folder.')),(0,o.kt)("h2",{id:"supported-properties"},"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesObject#css-class"},"CSS Class")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesPicture#display"},"Display")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesPicture#pathname"},"Pathname")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesObject#type"},"Type")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesDisplay#visibility"},"Visibility"),"  - ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/propertiesCoordinatesAndSizing#width"},"Width")))}d.isMDXComponent=!0},35855:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/StaticPict-a25104204af88c0c0efe292951248788.png"}}]);