"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),h=d(n),s=a,g=h["".concat(o,".").concat(s)]||h[s]||p[s]||r;return n?i.createElement(g,l(l({ref:t},u),{},{components:n})):i.createElement(g,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:a,l[1]=m;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>m,metadata:()=>d,toc:()=>p});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],m={id:"windowSize",title:"Window Size"},o=void 0,d={unversionedId:"FormEditor/windowSize",id:"version-19/FormEditor/windowSize",title:"Window Size",description:"Fixed Height",source:"@site/versioned_docs/version-19/FormEditor/properties_WindowSize.md",sourceDirName:"FormEditor",slug:"/FormEditor/windowSize",permalink:"/main/es/docs/19/FormEditor/windowSize",draft:!1,tags:[],version:"19",frontMatter:{id:"windowSize",title:"Window Size"},sidebar:"docs",previous:{title:"Print",permalink:"/main/es/docs/19/FormEditor/print"},next:{title:"About 4D Form Objects",permalink:"/main/es/docs/19/FormObjects/formObjectsOverview"}},u={},p=[{value:"Fixed Height",id:"fixed-height",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Fixed Width",id:"fixed-width",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Maximum Height, Minimum Height",id:"maximum-height-minimum-height",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:5},{value:"Maximum Width, Minimum Width",id:"maximum-width-minimum-width",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4}],h={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"fixed-height"},"Fixed Height"),(0,r.kt)("p",null,"If you select this option, the window height will be locked and it will not be possible for the user to resize it. "),(0,r.kt)("p",null,"If this option is not selected, the width of the form window can be modified. In this case, the ",(0,r.kt)("a",{parentName:"p",href:"#maximum-height-minimum-height"},"Minimum Height and Maximum Height")," properties can be used to determine the resizing limits."),(0,r.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"windowSizingY"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"fixed", "variable"')))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"fixed-width"},"Fixed Width"),(0,r.kt)("p",null,"If you select this option, the window width will be locked and it will not be possible for the user to resize it. "),(0,r.kt)("p",null,"If this option is not selected, the width of the form window can be modified. In this case, the ",(0,r.kt)("a",{parentName:"p",href:"#maximum-width-minimum-width"},"Minimum Width and Maximum Width")," properties can be used to determine the resizing limits."),(0,r.kt)("h4",{id:"json-grammar-1"},"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"windowSizingX"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"fixed", "variable"')))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"maximum-height-minimum-height"},"Maximum Height, Minimum Height"),(0,r.kt)("p",null,"Maximum and minimum height (in pixels) of a resizeable form window if the ",(0,r.kt)("a",{parentName:"p",href:"#fixed-height"},"Fixed Height")," option is not set. "),(0,r.kt)("h5",{id:"json-grammar-2"},"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"windowMinHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"integer value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"windowMaxHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"integer value")))),(0,r.kt)("h2",{id:"maximum-width-minimum-width"},"Maximum Width, Minimum Width"),(0,r.kt)("p",null,"Maximum and minimum width (in pixels) of a resizeable form window if the ",(0,r.kt)("a",{parentName:"p",href:"#fixed-width"},"Fixed Width")," option is not set. "),(0,r.kt)("h4",{id:"json-grammar-3"},"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"windowMinWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"integer value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"windowMaxWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"integer value")))))}s.isMDXComponent=!0}}]);