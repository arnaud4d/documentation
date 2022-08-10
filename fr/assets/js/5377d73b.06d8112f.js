"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={id:"onCloseDetail",title:"On Close Detail"},s=void 0,c={unversionedId:"Events/onCloseDetail",id:"version-19-R6/Events/onCloseDetail",title:"On Close Detail",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onCloseDetail.md",sourceDirName:"Events",slug:"/Events/onCloseDetail",permalink:"/fr/docs/Events/onCloseDetail",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onCloseDetail",title:"On Close Detail"},sidebar:"docs",previous:{title:"On Close Box",permalink:"/fr/docs/Events/onCloseBox"},next:{title:"On Collapse",permalink:"/fr/docs/Events/onCollapse"}},p={},d=[{value:"Description",id:"description",level:2}],u={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"26"),(0,a.kt)("td",{parentName:"tr",align:null},"Form - ",(0,a.kt)("a",{parentName:"td",href:"/fr/docs/FormObjects/listboxOverview"},"List Box")),(0,a.kt)("td",{parentName:"tr",align:null},"You left the detail form and are going back to the output form")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"On Close Detail")," event can be used in the following contexts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output forms"),": the detail form is closed and the user goes back to the list form. This event cannot be selected for project forms, it is only available with ",(0,a.kt)("strong",{parentName:"li"},"table forms"),".  "),(0,a.kt)("li",{parentName:"ul"},"List box of the ",(0,a.kt)("a",{parentName:"li",href:"/fr/docs/FormObjects/listboxOverview#selection-list-boxes"},(0,a.kt)("strong",{parentName:"a"},"selection type")),": This event is generated when a record displayed in the ",(0,a.kt)("a",{parentName:"li",href:"/fr/docs/FormObjects/propertiesListBox#detail-form-name"},"detail form")," associated with a selection type list box is about to be closed (regardless of whether or not the record was modified).")))}f.isMDXComponent=!0}}]);