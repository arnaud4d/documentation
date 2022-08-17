"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"onDisplayDetail",title:"On Display Detail"},o=void 0,p={unversionedId:"Events/onDisplayDetail",id:"version-19/Events/onDisplayDetail",title:"On Display Detail",description:"| Code | Can be called by                                   | Definition                                                                                        |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onDisplayDetail.md",sourceDirName:"Events",slug:"/Events/onDisplayDetail",permalink:"/docs/es/19/Events/onDisplayDetail",draft:!1,tags:[],version:"19",frontMatter:{id:"onDisplayDetail",title:"On Display Detail"},sidebar:"docs",previous:{title:"On Delete Action",permalink:"/docs/es/19/Events/onDeleteAction"},next:{title:"On Double Clicked",permalink:"/docs/es/19/Events/onDoubleClicked"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Output form",id:"output-form",level:3},{value:"Selection list box",id:"selection-list-box",level:3},{value:"Displayed line number",id:"displayed-line-number",level:3}],d={toc:c};function u(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"8"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Form - ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/es/19/FormObjects/listboxOverview"}),"List Box")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A record is about to be displayed in a list form or a row is about to be displayed in a list box.")))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Display Detail")," event can be used in the following contexts:"),(0,r.kt)("h3",a({},{id:"output-form"}),"Output form"),(0,r.kt)("p",null,"A record is about to be displayed in a list form displayed via ",(0,r.kt)("inlineCode",{parentName:"p"},"DISPLAY SELECTION")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFY SELECTION"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This event cannot be selected for project forms, it is only available with ",(0,r.kt)("strong",{parentName:"p"},"table forms"),".")),(0,r.kt)("p",null,"In this context, the following sequence of calls to methods and form events is triggered:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For each record:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For each object in the detail area:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Object method with ",(0,r.kt)("inlineCode",{parentName:"li"},"On Display Detail")," event"))),(0,r.kt)("li",{parentName:"ul"},"Form method with ",(0,r.kt)("inlineCode",{parentName:"li"},"On Display Detail")," event")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The header area is handled using the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/19/Events/onHeader"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Header"))," event.")),(0,r.kt)("p",null,"Calling a 4D command that displays a dialog box from the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Display Detail")," event is not allowed and will cause a syntax error to occur. More particularly, the commands concerned are: ",(0,r.kt)("inlineCode",{parentName:"p"},"ALERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DIALOG"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIRM"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD RECORD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFY RECORD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DISPLAY SELECTION"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFY SELECTION"),"."),(0,r.kt)("h3",a({},{id:"selection-list-box"}),"Selection list box"),(0,r.kt)("p",null,"This event is generated when a row of a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/listboxOverview#selection-list-boxes"}),(0,r.kt)("strong",{parentName:"a"},"selection type"))," list box is displayed."),(0,r.kt)("h3",a({},{id:"displayed-line-number"}),"Displayed line number"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Displayed line number")," 4D command works with the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Display Detail")," form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen."))}u.isMDXComponent=!0}}]);