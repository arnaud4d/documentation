"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});r(67294);var o=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"staticPicture",title:"Static picture"},p=void 0,c={unversionedId:"FormObjects/staticPicture",id:"version-19-R6/FormObjects/staticPicture",title:"Static picture",description:"Static pictures are static objects that can be used for various purposes in 4D forms, including decoration, background, or user interface:",source:"@site/versioned_docs/version-19-R6/FormObjects/staticPicture.md",sourceDirName:"FormObjects",slug:"/FormObjects/staticPicture",permalink:"/docs/pt/FormObjects/staticPicture",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"staticPicture",title:"Static picture"},sidebar:"docs",previous:{title:"Splitter",permalink:"/docs/pt/FormObjects/splitters"},next:{title:"Stepper",permalink:"/docs/pt/FormObjects/stepper"}},s={},l=[{value:"Format and location",id:"format-and-location",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],u={toc:l};function m(e){var{components:t}=e,i=a(e,["components"]);return(0,o.kt)("wrapper",n({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Static pictures are ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/formObjectsOverview#active-and-static-objects"}),"static objects")," that can be used for various purposes in 4D forms, including decoration, background, or user interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(72975).Z,width:"312",height:"332"}),"  "),(0,o.kt)("p",null,"Static pictures are stored outside the forms and inserted by reference. In the form editor, static picture objects are created by copy/paste or drag and drop operations. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you place a static picture on page 0 of a multi-page form, it will appear automatically as a background element on all pages. You can also include it in an inherited form, applied in the background of other different forms. Either way, your application will run faster than if the picture was pasted into each page.")),(0,o.kt)("h2",n({},{id:"format-and-location"}),"Format and location"),(0,o.kt)("p",null,"The original picture must be stored in a format managed natively by 4D (4D recognizes the main picture formats: JPEG, PNG, BMP, SVG, GIF, etc.)."),(0,o.kt)("p",null,"Two main locations can be used for static picture path:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in the ",(0,o.kt)("strong",{parentName:"li"},"Resources"),' folder of the project. Appropriate when you want to share static pictures between several forms in the project. In this case, the Pathname is in the "/RESOURCES/\\<picture path',">",'".'),(0,o.kt)("li",{parentName:"ul"},"in an image folder (e.g. named ",(0,o.kt)("strong",{parentName:"li"},"Images"),') within the form folder. Appropriate when the static pictures are used only in the form and/or yon want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "<\\picture path',">",'" and is resolved from the root of the form folder.')),(0,o.kt)("h2",n({},{id:"supported-properties"}),"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#css-class"}),"CSS Class")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesPicture#display"}),"Display")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesPicture#pathname"}),"Pathname")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesDisplay#visibility"}),"Visibility"),"  - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}m.isMDXComponent=!0},72975:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/StaticPict-a25104204af88c0c0efe292951248788.png"}}]);