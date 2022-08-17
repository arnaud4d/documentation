"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38078],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(h,o(o({ref:e},u),{},{components:a})):r.createElement(h,o({ref:e},u))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56512:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});a(67294);var r=a(3905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const o={id:"propertiesAnimation",title:"Animation"},i=void 0,s={unversionedId:"FormObjects/propertiesAnimation",id:"FormObjects/propertiesAnimation",title:"Animation",description:"Loop back to first frame",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/FormObjects/properties_Animation.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesAnimation",permalink:"/docs/ja/next/FormObjects/propertiesAnimation",draft:!1,tags:[],version:"current",frontMatter:{id:"propertiesAnimation",title:"Animation"},sidebar:"docs",previous:{title:"Action",permalink:"/docs/ja/next/FormObjects/propertiesAction"},next:{title:"Appearance",permalink:"/docs/ja/next/FormObjects/propertiesAppearance"}},p={},u=[{value:"Loop back to first frame",id:"loop-back-to-first-frame",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Switch back when released",id:"switch-back-when-released",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"Switch continuously on clicks",id:"switch-continuously-on-clicks",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4},{value:"Switch every x ticks",id:"switch-every-x-ticks",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Objects Supported",id:"objects-supported-3",level:4},{value:"Switch when roll over",id:"switch-when-roll-over",level:2},{value:"JSON Grammar",id:"json-grammar-4",level:4},{value:"Objects Supported",id:"objects-supported-4",level:4},{value:"Use Last frame as disabled",id:"use-last-frame-as-disabled",level:2},{value:"JSON Grammar",id:"json-grammar-5",level:4},{value:"Objects Supported",id:"objects-supported-5",level:4}],c={toc:u};function m(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",n({},{id:"loop-back-to-first-frame"}),"Loop back to first frame"),(0,r.kt)("p",null,"Pictures are displayed in a continuous loop. When the user reaches the last picture and clicks again, the first picture appears, and so forth."),(0,r.kt)("h4",n({},{id:"json-grammar"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"loopBackToFirstFrame"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"true, false")))),(0,r.kt)("h4",n({},{id:"objects-supported"}),"Objects Supported"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/ja/next/FormObjects/pictureButtonOverview"}),"Picture Button")),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"switch-back-when-released"}),"Switch back when released"),(0,r.kt)("p",null,"Displays the first picture all the time except when the user clicks the button. Displays the second picture until the mouse button is released. This mode allows you to create an action button with a different picture for each state (idle and clicked). You can use this mode to create a 3D effect or display any picture that depicts the action of the button."),(0,r.kt)("h4",n({},{id:"json-grammar-1"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"switchBackWhenReleased"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"true, false")))),(0,r.kt)("h4",n({},{id:"objects-supported-1"}),"Objects Supported"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/ja/next/FormObjects/pictureButtonOverview"}),"Picture Button")),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"switch-continuously-on-clicks"}),"Switch continuously on clicks"),(0,r.kt)("p",null,"Allows the user to hold down the mouse button to display the pictures continuously (i.e., as an animation). When the user reaches the last picture, the object does not cycle back to the first picture."),(0,r.kt)("h4",n({},{id:"json-grammar-2"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"switchContinuously"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"true, false")))),(0,r.kt)("h4",n({},{id:"objects-supported-2"}),"Objects Supported"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/ja/next/FormObjects/pictureButtonOverview"}),"Picture Button")),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"switch-every-x-ticks"}),"Switch every x ticks"),(0,r.kt)("p",null,"Enables cycling through the contents of the picture button at the specified speed (in ticks). In this mode, all other options are ignored."),(0,r.kt)("h4",n({},{id:"json-grammar-3"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"frameDelay"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"minimum: 0")))),(0,r.kt)("h4",n({},{id:"objects-supported-3"}),"Objects Supported"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/ja/next/FormObjects/pictureButtonOverview"}),"Picture Button")),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"switch-when-roll-over"}),"Switch when roll over"),(0,r.kt)("p",null,"Modifies the contents of the picture button when the mouse cursor passes over it. The initial picture is displayed when the cursor leaves the button\u2019s area."),(0,r.kt)("h4",n({},{id:"json-grammar-4"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"switchWhenRollover"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"true, false")))),(0,r.kt)("h4",n({},{id:"objects-supported-4"}),"Objects Supported"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/ja/next/FormObjects/pictureButtonOverview"}),"Picture Button")),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"use-last-frame-as-disabled"}),"Use Last frame as disabled"),(0,r.kt)("p",null,'Enables setting the last thumbnail as the one to display when the button is disabled. The thumbnail used when the button is disabled is processed separately by 4D: when you combine this option with "Switch Continuously" and "Loop Back to First Frame", the last picture is excluded from the sequence associated with the button and only appears when it is disabled.'),(0,r.kt)("h4",n({},{id:"json-grammar-5"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"Name"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"useLastFrameAsDisabled"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"true, false")))),(0,r.kt)("h4",n({},{id:"objects-supported-5"}),"Objects Supported"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/ja/next/FormObjects/pictureButtonOverview"}),"Picture Button")))}m.isMDXComponent=!0}}]);