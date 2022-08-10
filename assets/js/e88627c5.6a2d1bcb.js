"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,b=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"onDisplayDetail",title:"On Display Detail"},p=void 0,s={unversionedId:"Events/onDisplayDetail",id:"version-19/Events/onDisplayDetail",title:"On Display Detail",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onDisplayDetail.md",sourceDirName:"Events",slug:"/Events/onDisplayDetail",permalink:"/main/docs/19/Events/onDisplayDetail",draft:!1,tags:[],version:"19",frontMatter:{id:"onDisplayDetail",title:"On Display Detail"},sidebar:"docs",previous:{title:"On Delete Action",permalink:"/main/docs/19/Events/onDeleteAction"},next:{title:"On Double Clicked",permalink:"/main/docs/19/Events/onDoubleClicked"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Output form",id:"output-form",level:3},{value:"Selection list box",id:"selection-list-box",level:3},{value:"Displayed line number",id:"displayed-line-number",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Code"),(0,i.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"Form - ",(0,i.kt)("a",{parentName:"td",href:"/main/docs/19/FormObjects/listboxOverview"},"List Box")),(0,i.kt)("td",{parentName:"tr",align:null},"A record is about to be displayed in a list form or a row is about to be displayed in a list box.")))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"On Display Detail")," event can be used in the following contexts:"),(0,i.kt)("h3",{id:"output-form"},"Output form"),(0,i.kt)("p",null,"A record is about to be displayed in a list form displayed via ",(0,i.kt)("inlineCode",{parentName:"p"},"DISPLAY SELECTION")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MODIFY SELECTION"),". "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This event cannot be selected for project forms, it is only available with ",(0,i.kt)("strong",{parentName:"p"},"table forms"),".")),(0,i.kt)("p",null,"In this context, the following sequence of calls to methods and form events is triggered:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For each record:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For each object in the detail area:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Object method with ",(0,i.kt)("inlineCode",{parentName:"li"},"On Display Detail")," event"))),(0,i.kt)("li",{parentName:"ul"},"Form method with ",(0,i.kt)("inlineCode",{parentName:"li"},"On Display Detail")," event")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The header area is handled using the ",(0,i.kt)("a",{parentName:"p",href:"/main/docs/19/Events/onHeader"},(0,i.kt)("inlineCode",{parentName:"a"},"On Header"))," event.")),(0,i.kt)("p",null,"Calling a 4D command that displays a dialog box from the ",(0,i.kt)("inlineCode",{parentName:"p"},"On Display Detail")," event is not allowed and will cause a syntax error to occur. More particularly, the commands concerned are: ",(0,i.kt)("inlineCode",{parentName:"p"},"ALERT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DIALOG"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CONFIRM"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD RECORD"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MODIFY RECORD"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DISPLAY SELECTION"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"MODIFY SELECTION"),"."),(0,i.kt)("h3",{id:"selection-list-box"},"Selection list box"),(0,i.kt)("p",null,"This event is generated when a row of a ",(0,i.kt)("a",{parentName:"p",href:"/main/docs/19/FormObjects/listboxOverview#selection-list-boxes"},(0,i.kt)("strong",{parentName:"a"},"selection type"))," list box is displayed."),(0,i.kt)("h3",{id:"displayed-line-number"},"Displayed line number"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Displayed line number")," 4D command works with the ",(0,i.kt)("inlineCode",{parentName:"p"},"On Display Detail")," form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen."))}u.isMDXComponent=!0}}]);