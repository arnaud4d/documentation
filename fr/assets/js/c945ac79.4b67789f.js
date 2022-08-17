"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,y=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"onBeforeDataEntry",title:"On Before Data Entry"},l=void 0,s={unversionedId:"Events/onBeforeDataEntry",id:"version-19-R6/Events/onBeforeDataEntry",title:"On Before Data Entry",description:"| Code | Can be called by                                                                                                  | Definition                                         |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/Events/onBeforeDataEntry.md",sourceDirName:"Events",slug:"/Events/onBeforeDataEntry",permalink:"/docs/fr/Events/onBeforeDataEntry",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onBeforeDataEntry",title:"On Before Data Entry"},sidebar:"docs",previous:{title:"On Alternative Click",permalink:"/docs/fr/Events/onAlternativeClick"},next:{title:"On Before Keystroke",permalink:"/docs/fr/Events/onBeforeKeystroke"}},c={},p=[{value:"Description",id:"description",level:2}],f={toc:p};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Can be called by"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"41"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/fr/FormObjects/listboxOverview"}),"List Box")," - ",(0,n.kt)("a",o({parentName:"td"},{href:"/docs/fr/FormObjects/listboxOverview#list-box-columns"}),"List Box Column")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"A list box cell is about to change to editing mode")))),(0,n.kt)("h2",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,"This event is generated just before a cell in the list box is edited (before the entry cursor is displayed). This event allows the developer, for example, to display a different text depending on whether the user is in the display or edit mode."),(0,n.kt)("p",null,"When the cursor arrives in the cell, the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Before Data Entry")," event is generated in the list box or column method."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If, in the context of this event, $0 is set to -1, the cell is considered as not enterable. If the event was generated after ",(0,n.kt)("strong",{parentName:"li"},"Tab")," or ",(0,n.kt)("strong",{parentName:"li"},"Shift+Tab")," was pressed, the focus goes to either the next cell or the previous one, respectively."),(0,n.kt)("li",{parentName:"ul"},"If $0 is not -1 (by default $0 is 0), the cell is enterable and switches to editing mode.")),(0,n.kt)("p",null,"See also ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/FormObjects/listboxOverview#managing-entry"}),"Managing entry")," section."))}u.isMDXComponent=!0}}]);