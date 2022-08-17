"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?o.createElement(f,n(n({ref:t},l),{},{components:r})):o.createElement(f,n({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,n[1]=p;for(var s=2;s<i;s++)n[s]=r[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>f,toc:()=>h});var o=r(3905),a=Object.defineProperty,i=Object.defineProperties,n=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&l(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&l(e,r,t[r]);return e};const d={id:"staticPicture",title:"Static picture"},m=void 0,f={unversionedId:"FormObjects/staticPicture",id:"version-19-R6/FormObjects/staticPicture",title:"Static picture",description:"Static pictures are static objects that can be used for various purposes in 4D forms, including decoration, background, or user interface:",source:"@site/versioned_docs/version-19-R6/FormObjects/staticPicture.md",sourceDirName:"FormObjects",slug:"/FormObjects/staticPicture",permalink:"/docs/pt/FormObjects/staticPicture",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"staticPicture",title:"Static picture"},sidebar:"docs",previous:{title:"Splitter",permalink:"/docs/pt/FormObjects/splitters"},next:{title:"Stepper",permalink:"/docs/pt/FormObjects/stepper"}},b={},h=[{value:"Format and location",id:"format-and-location",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],O={toc:h};function g(e){var t,a=e,{components:l}=a,d=((e,t)=>{var r={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&p)for(var o of p(e))t.indexOf(o)<0&&s.call(e,o)&&(r[o]=e[o]);return r})(a,["components"]);return(0,o.kt)("wrapper",(t=u(u({},O),d),i(t,n({components:l,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"Static pictures are ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/formObjectsOverview#active-and-static-objects"}),"static objects")," that can be used for various purposes in 4D forms, including decoration, background, or user interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(72975).Z,width:"312",height:"332"}),"  "),(0,o.kt)("p",null,"Static pictures are stored outside the forms and inserted by reference. In the form editor, static picture objects are created by copy/paste or drag and drop operations. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you place a static picture on page 0 of a multi-page form, it will appear automatically as a background element on all pages. You can also include it in an inherited form, applied in the background of other different forms. Either way, your application will run faster than if the picture was pasted into each page.")),(0,o.kt)("h2",u({},{id:"format-and-location"}),"Format and location"),(0,o.kt)("p",null,"The original picture must be stored in a format managed natively by 4D (4D recognizes the main picture formats: JPEG, PNG, BMP, SVG, GIF, etc.)."),(0,o.kt)("p",null,"Two main locations can be used for static picture path:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in the ",(0,o.kt)("strong",{parentName:"li"},"Resources"),' folder of the project. Appropriate when you want to share static pictures between several forms in the project. In this case, the Pathname is in the "/RESOURCES/\\<picture path',">",'".'),(0,o.kt)("li",{parentName:"ul"},"in an image folder (e.g. named ",(0,o.kt)("strong",{parentName:"li"},"Images"),') within the form folder. Appropriate when the static pictures are used only in the form and/or yon want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "<\\picture path',">",'" and is resolved from the root of the form folder.')),(0,o.kt)("h2",u({},{id:"supported-properties"}),"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#css-class"}),"CSS Class")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesPicture#display"}),"Display")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesPicture#pathname"}),"Pathname")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesDisplay#visibility"}),"Visibility"),"  - ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}g.isMDXComponent=!0},72975:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/StaticPict-a25104204af88c0c0efe292951248788.png"}}]);