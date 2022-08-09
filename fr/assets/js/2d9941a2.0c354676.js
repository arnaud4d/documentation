"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"onOpenDetail",title:"On Open Detail"},s=void 0,p={unversionedId:"Events/onOpenDetail",id:"Events/onOpenDetail",title:"On Open Detail",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onOpenDetail.md",sourceDirName:"Events",slug:"/Events/onOpenDetail",permalink:"/docs/fr/docs/next/Events/onOpenDetail",draft:!1,tags:[],version:"current",frontMatter:{id:"onOpenDetail",title:"On Open Detail"},sidebar:"docs",previous:{title:"On Mouse Up",permalink:"/docs/fr/docs/next/Events/onMouseUp"},next:{title:"On Open External Link",permalink:"/docs/fr/docs/next/Events/onOpenExternalLink"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Displayed line number",id:"displayed-line-number",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"25"),(0,a.kt)("td",{parentName:"tr",align:null},"Form - ",(0,a.kt)("a",{parentName:"td",href:"/docs/fr/docs/next/FormObjects/listboxOverview"},"List Box")),(0,a.kt)("td",{parentName:"tr",align:null},"The detail form associated with the output form or with the list box is about to be opened.")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"On Open Detail")," event can be used in the following contexts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output forms"),": A record is about to be displayed in the detail form associated with the output form. This event cannot be selected for project forms, it is only available with ",(0,a.kt)("strong",{parentName:"li"},"table forms"),".  "),(0,a.kt)("li",{parentName:"ul"},"List box of the ",(0,a.kt)("a",{parentName:"li",href:"/docs/fr/docs/next/FormObjects/listboxOverview#selection-list-boxes"},(0,a.kt)("strong",{parentName:"a"},"selection type")),": This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).")),(0,a.kt)("h3",{id:"displayed-line-number"},"Displayed line number"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Displayed line number")," 4D command works with the ",(0,a.kt)("inlineCode",{parentName:"p"},"On Open Detail")," form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen."))}m.isMDXComponent=!0}}]);