"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82350],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=n,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(b,o(o({ref:r},p),{},{components:t})):a.createElement(b,o({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54090:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});t(67294);var a=t(3905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const o={id:"propertiesHierarchy",title:"Hierarchy"},l=void 0,c={unversionedId:"FormObjects/propertiesHierarchy",id:"version-19/FormObjects/propertiesHierarchy",title:"Hierarchy",description:"Hierarchical List Box",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/FormObjects/properties_Hierarchy.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHierarchy",permalink:"/docs/es/19/FormObjects/propertiesHierarchy",draft:!1,tags:[],version:"19",frontMatter:{id:"propertiesHierarchy",title:"Hierarchy"},sidebar:"docs",previous:{title:"Help",permalink:"/docs/es/19/FormObjects/propertiesHelp"},next:{title:"List Box",permalink:"/docs/es/19/FormObjects/propertiesListBox"}},s={},p=[{value:"Hierarchical List Box",id:"hierarchical-list-box",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4}],u={toc:p};function m(e){var{components:r}=e,t=i(e,["components"]);return(0,a.kt)("wrapper",n({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",n({},{id:"hierarchical-list-box"}),"Hierarchical List Box"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array type list boxes")),(0,a.kt)("p",null,"This property specifies that the list box must be displayed in hierarchical form. In the JSON form, this feature is triggered ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#hierarchical-list-box"}),"when the ",(0,a.kt)("em",{parentName:"a"},"dataSource")," property value is an array"),", i.e. a collection."),(0,a.kt)("p",null,"Additional options (",(0,a.kt)("strong",{parentName:"p"},"Variable 1...10"),") are available when the ",(0,a.kt)("em",{parentName:"p"},"Hierarchical List Box")," option is selected, corresponding to each ",(0,a.kt)("em",{parentName:"p"},"dataSource")," array to use as break column. Each time a value is entered in a field, a new row is added. Up to 10 variables can be specified. These variables set the hierarchical levels to be displayed in the first column."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/FormObjects/listboxOverview#hierarchical-list-boxes"}),"Hierarchical list boxes")),(0,a.kt)("h4",n({},{id:"json-grammar"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Data Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"datasource"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"string array"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Collection of array names defining the hierarchy")))),(0,a.kt)("h4",n({},{id:"objects-supported"}),"Objects Supported"),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/19/FormObjects/listboxOverview"}),"List Box")))}m.isMDXComponent=!0}}]);