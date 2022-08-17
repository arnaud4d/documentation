"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97669],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,o=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),h=d(n),s=i,c=h["".concat(o,".").concat(s)]||h[s]||p[s]||a;return n?r.createElement(c,l(l({ref:e},u),{},{components:n})):r.createElement(c,l({ref:e},u))}));function s(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=h;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:i,l[1]=m;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20427:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});n(67294);var r=n(3905);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const l={id:"windowSize",title:"Window Size"},m=void 0,o={unversionedId:"FormEditor/windowSize",id:"FormEditor/windowSize",title:"Window Size",description:"Fixed Height",source:"@site/docs/FormEditor/properties_WindowSize.md",sourceDirName:"FormEditor",slug:"/FormEditor/windowSize",permalink:"/docs/next/FormEditor/windowSize",draft:!1,tags:[],version:"current",frontMatter:{id:"windowSize",title:"Window Size"},sidebar:"docs",previous:{title:"Print",permalink:"/docs/next/FormEditor/print"},next:{title:"About 4D Form Objects",permalink:"/docs/next/FormObjects/formObjectsOverview"}},d={},u=[{value:"Fixed Height",id:"fixed-height",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Fixed Width",id:"fixed-width",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Maximum Height, Minimum Height",id:"maximum-height-minimum-height",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:5},{value:"Maximum Width, Minimum Width",id:"maximum-width-minimum-width",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4}],p={toc:u};function h(t){var{components:e}=t,n=a(t,["components"]);return(0,r.kt)("wrapper",i({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"fixed-height"}),"Fixed Height"),(0,r.kt)("p",null,"If you select this option, the window height will be locked and it will not be possible for the user to resize it. "),(0,r.kt)("p",null,"If this option is not selected, the width of the form window can be modified. In this case, the ",(0,r.kt)("a",i({parentName:"p"},{href:"#maximum-height-minimum-height"}),"Minimum Height and Maximum Height")," properties can be used to determine the resizing limits."),(0,r.kt)("h4",i({},{id:"json-grammar"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"windowSizingY"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,r.kt)("hr",null),(0,r.kt)("h2",i({},{id:"fixed-width"}),"Fixed Width"),(0,r.kt)("p",null,"If you select this option, the window width will be locked and it will not be possible for the user to resize it. "),(0,r.kt)("p",null,"If this option is not selected, the width of the form window can be modified. In this case, the ",(0,r.kt)("a",i({parentName:"p"},{href:"#maximum-width-minimum-width"}),"Minimum Width and Maximum Width")," properties can be used to determine the resizing limits."),(0,r.kt)("h4",i({},{id:"json-grammar-1"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"windowSizingX"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,r.kt)("hr",null),(0,r.kt)("h2",i({},{id:"maximum-height-minimum-height"}),"Maximum Height, Minimum Height"),(0,r.kt)("p",null,"Maximum and minimum height (in pixels) of a resizeable form window if the ",(0,r.kt)("a",i({parentName:"p"},{href:"#fixed-height"}),"Fixed Height")," option is not set. "),(0,r.kt)("h5",i({},{id:"json-grammar-2"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"windowMinHeight"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"integer value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"windowMaxHeight"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"integer value")))),(0,r.kt)("h2",i({},{id:"maximum-width-minimum-width"}),"Maximum Width, Minimum Width"),(0,r.kt)("p",null,"Maximum and minimum width (in pixels) of a resizeable form window if the ",(0,r.kt)("a",i({parentName:"p"},{href:"#fixed-width"}),"Fixed Width")," option is not set. "),(0,r.kt)("h4",i({},{id:"json-grammar-3"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"windowMinWidth"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"integer value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"windowMaxWidth"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"integer value")))))}h.isMDXComponent=!0}}]);