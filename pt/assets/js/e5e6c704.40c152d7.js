"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16925],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64079:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"staticPicture",title:"Static picture"},p=void 0,c={unversionedId:"FormObjects/staticPicture",id:"FormObjects/staticPicture",title:"Static picture",description:"Static pictures are static objects that can be used for various purposes in 4D forms, including decoration, background, or user interface:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/FormObjects/staticPicture.md",sourceDirName:"FormObjects",slug:"/FormObjects/staticPicture",permalink:"/docs/pt/next/FormObjects/staticPicture",draft:!1,tags:[],version:"current",frontMatter:{id:"staticPicture",title:"Static picture"},sidebar:"docs",previous:{title:"Splitter",permalink:"/docs/pt/next/FormObjects/splitters"},next:{title:"Stepper",permalink:"/docs/pt/next/FormObjects/stepper"}},s={},l=[{value:"Format and location",id:"format-and-location",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],u={toc:l};function m(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Static pictures are ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/formObjectsOverview#active-and-static-objects"}),"static objects")," that can be used for various purposes in 4D forms, including decoration, background, or user interface:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(32889).Z,width:"312",height:"332"})),(0,n.kt)("p",null,"Static pictures are stored outside the forms and inserted by reference. In the form editor, static picture objects are created by copy/paste or drag and drop operations."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you place a static picture on page 0 of a multi-page form, it will appear automatically as a background element on all pages. You can also include it in an inherited form, applied in the background of other different forms. Either way, your application will run faster than if the picture was pasted into each page.")),(0,n.kt)("h2",o({},{id:"format-and-location"}),"Format and location"),(0,n.kt)("p",null,"The original picture must be stored in a format managed natively by 4D (4D recognizes the main picture formats: JPEG, PNG, BMP, SVG, GIF, etc.)."),(0,n.kt)("p",null,"Two main locations can be used for static picture path:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"in the ",(0,n.kt)("strong",{parentName:"li"},"Resources"),' folder of the project. Appropriate when you want to share static pictures between several forms in the project. In this case, the Pathname is in the "/RESOURCES/\\<picture path',">",'".'),(0,n.kt)("li",{parentName:"ul"},"in an image folder (e.g. named ",(0,n.kt)("strong",{parentName:"li"},"Images"),') within the form folder. Appropriate when the static pictures are used only in the form and/or yon want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "<\\picture path',">",'" and is resolved from the root of the form folder.')),(0,n.kt)("h2",o({},{id:"supported-properties"}),"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#css-class"}),"CSS Class")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesPicture#display"}),"Display")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesPicture#pathname"}),"Pathname")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDisplay#visibility"}),"Visibility"),"  - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}m.isMDXComponent=!0},32889:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/StaticPict-a25104204af88c0c0efe292951248788.png"}}]);