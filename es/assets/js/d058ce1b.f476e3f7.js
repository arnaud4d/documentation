"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17894],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"propertiesHierarchy",title:"Hierarchy"},c=void 0,s={unversionedId:"FormObjects/propertiesHierarchy",id:"FormObjects/propertiesHierarchy",title:"Hierarchy",description:"Hierarchical List Box",source:"@site/docs/FormObjects/properties_Hierarchy.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHierarchy",permalink:"/docs/es/next/FormObjects/propertiesHierarchy",draft:!1,tags:[],version:"current",frontMatter:{id:"propertiesHierarchy",title:"Hierarchy"},sidebar:"docs",previous:{title:"Help",permalink:"/docs/es/next/FormObjects/propertiesHelp"},next:{title:"List Box",permalink:"/docs/es/next/FormObjects/propertiesListBox"}},p={},m=[{value:"Hierarchical List Box",id:"hierarchical-list-box",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4}],u={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchical-list-box"},"Hierarchical List Box"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Array type list boxes")),(0,i.kt)("p",null,"This property specifies that the list box must be displayed in hierarchical form. In the JSON form, this feature is triggered ",(0,i.kt)("a",{parentName:"p",href:"/docs/es/next/FormObjects/propertiesObject#hierarchical-list-box"},"when the ",(0,i.kt)("em",{parentName:"a"},"dataSource")," property value is an array"),", i.e. a collection."),(0,i.kt)("p",null,"Additional options (",(0,i.kt)("strong",{parentName:"p"},"Variable 1...10"),") are available when the ",(0,i.kt)("em",{parentName:"p"},"Hierarchical List Box")," option is selected, corresponding to each ",(0,i.kt)("em",{parentName:"p"},"dataSource")," array to use as break column. Each time a value is entered in a field, a new row is added. Up to 10 variables can be specified. These variables set the hierarchical levels to be displayed in the first column."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/es/next/FormObjects/listboxOverview#hierarchical-list-boxes"},"Hierarchical list boxes")),(0,i.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"datasource"),(0,i.kt)("td",{parentName:"tr",align:null},"string array"),(0,i.kt)("td",{parentName:"tr",align:null},"Collection of array names defining the hierarchy")))),(0,i.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/es/next/FormObjects/listboxOverview"},"List Box")))}d.isMDXComponent=!0}}]);