"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47561],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var m=n.createContext({}),d=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=d(r),s=i,c=h["".concat(m,".").concat(s)]||h[s]||u[s]||a;return r?n.createElement(c,l(l({ref:t},p),{},{components:r})):n.createElement(c,l({ref:t},p))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=h;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},65854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>k,frontMatter:()=>h,metadata:()=>c,toc:()=>f});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&p(e,r,t[r]);return e};const h={id:"windowSize",title:"Window Size"},s=void 0,c={unversionedId:"FormEditor/windowSize",id:"version-19/FormEditor/windowSize",title:"Window Size",description:"Fixed Height",source:"@site/versioned_docs/version-19/FormEditor/properties_WindowSize.md",sourceDirName:"FormEditor",slug:"/FormEditor/windowSize",permalink:"/docs/pt/19/FormEditor/windowSize",draft:!1,tags:[],version:"19",frontMatter:{id:"windowSize",title:"Window Size"},sidebar:"docs",previous:{title:"Print",permalink:"/docs/pt/19/FormEditor/print"},next:{title:"About 4D Form Objects",permalink:"/docs/pt/19/FormObjects/formObjectsOverview"}},g={},f=[{value:"Fixed Height",id:"fixed-height",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Fixed Width",id:"fixed-width",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Maximum Height, Minimum Height",id:"maximum-height-minimum-height",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:5},{value:"Maximum Width, Minimum Width",id:"maximum-width-minimum-width",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4}],b={toc:f};function k(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),p),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h2",u({},{id:"fixed-height"}),"Fixed Height"),(0,n.kt)("p",null,"If you select this option, the window height will be locked and it will not be possible for the user to resize it. "),(0,n.kt)("p",null,"If this option is not selected, the width of the form window can be modified. In this case, the ",(0,n.kt)("a",u({parentName:"p"},{href:"#maximum-height-minimum-height"}),"Minimum Height and Maximum Height")," properties can be used to determine the resizing limits."),(0,n.kt)("h4",u({},{id:"json-grammar"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Data Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"windowSizingY"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,n.kt)("hr",null),(0,n.kt)("h2",u({},{id:"fixed-width"}),"Fixed Width"),(0,n.kt)("p",null,"If you select this option, the window width will be locked and it will not be possible for the user to resize it. "),(0,n.kt)("p",null,"If this option is not selected, the width of the form window can be modified. In this case, the ",(0,n.kt)("a",u({parentName:"p"},{href:"#maximum-width-minimum-width"}),"Minimum Width and Maximum Width")," properties can be used to determine the resizing limits."),(0,n.kt)("h4",u({},{id:"json-grammar-1"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Data Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"windowSizingX"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,n.kt)("hr",null),(0,n.kt)("h2",u({},{id:"maximum-height-minimum-height"}),"Maximum Height, Minimum Height"),(0,n.kt)("p",null,"Maximum and minimum height (in pixels) of a resizeable form window if the ",(0,n.kt)("a",u({parentName:"p"},{href:"#fixed-height"}),"Fixed Height")," option is not set. "),(0,n.kt)("h5",u({},{id:"json-grammar-2"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Data Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"windowMinHeight"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"integer value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"windowMaxHeight"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"integer value")))),(0,n.kt)("h2",u({},{id:"maximum-width-minimum-width"}),"Maximum Width, Minimum Width"),(0,n.kt)("p",null,"Maximum and minimum width (in pixels) of a resizeable form window if the ",(0,n.kt)("a",u({parentName:"p"},{href:"#fixed-width"}),"Fixed Width")," option is not set. "),(0,n.kt)("h4",u({},{id:"json-grammar-3"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Data Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"windowMinWidth"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"integer value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"windowMaxWidth"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"integer value")))))}k.isMDXComponent=!0}}]);