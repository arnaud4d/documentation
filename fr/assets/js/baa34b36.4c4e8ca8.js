"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90382],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(h,o(o({ref:r},p),{},{components:t})):a.createElement(h,o({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89888:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"propertiesHierarchy",title:"Hierarchy"},c=void 0,s={unversionedId:"FormObjects/propertiesHierarchy",id:"version-18/FormObjects/propertiesHierarchy",title:"Hierarchy",description:"Hierarchical List Box",source:"@site/versioned_docs/version-18/FormObjects/properties_Hierarchy.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHierarchy",permalink:"/main/fr/docs/18/FormObjects/propertiesHierarchy",draft:!1,tags:[],version:"18",frontMatter:{id:"propertiesHierarchy",title:"Hierarchy"},sidebar:"docs",previous:{title:"Help",permalink:"/main/fr/docs/18/FormObjects/propertiesHelp"},next:{title:"List Box",permalink:"/main/fr/docs/18/FormObjects/propertiesListBox"}},p={},m=[{value:"Hierarchical List Box",id:"hierarchical-list-box",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4}],u={toc:m};function d(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchical-list-box"},"Hierarchical List Box"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Array type list boxes")),(0,i.kt)("p",null,"This property specifies that the list box must be displayed in hierarchical form. In the JSON form, this feature is triggered ",(0,i.kt)("a",{parentName:"p",href:"/main/fr/docs/18/FormObjects/propertiesObject#hierarchical-list-box"},"when the ",(0,i.kt)("em",{parentName:"a"},"dataSource")," property value is an array"),", i.e. a collection."),(0,i.kt)("p",null,"Additional options (",(0,i.kt)("strong",{parentName:"p"},"Variable 1...10"),") are available when the ",(0,i.kt)("em",{parentName:"p"},"Hierarchical List Box")," option is selected, corresponding to each ",(0,i.kt)("em",{parentName:"p"},"dataSource")," array to use as break column. Each time a value is entered in a field, a new row is added. Up to 10 variables can be specified. These variables set the hierarchical levels to be displayed in the first column."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/main/fr/docs/18/FormObjects/listboxOverview#hierarchical-list-boxes"},"Hierarchical list boxes")),(0,i.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"datasource"),(0,i.kt)("td",{parentName:"tr",align:null},"string array"),(0,i.kt)("td",{parentName:"tr",align:null},"Collection of array names defining the hierarchy")))),(0,i.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/main/fr/docs/18/FormObjects/listboxOverview"},"List Box")))}d.isMDXComponent=!0}}]);