"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"onDeleteAction",title:"On Delete Action"},s=void 0,c={unversionedId:"Events/onDeleteAction",id:"version-19-R6/Events/onDeleteAction",title:"On Delete Action",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onDeleteAction.md",sourceDirName:"Events",slug:"/Events/onDeleteAction",permalink:"/docs/es/docs/Events/onDeleteAction",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onDeleteAction",title:"On Delete Action"},sidebar:"docs",previous:{title:"On Deactivate",permalink:"/docs/es/docs/Events/onDeactivate"},next:{title:"On Display Detail",permalink:"/docs/es/docs/Events/onDisplayDetail"}},p={},d=[{value:"Description",id:"description",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"58"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/es/docs/FormObjects/listOverview"},"Hierarchical List")," - ",(0,o.kt)("a",{parentName:"td",href:"/docs/es/docs/FormObjects/listboxOverview"},"List Box")),(0,o.kt)("td",{parentName:"tr",align:null},"The user attempts to delete an item")))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This event is generated each time a user attempts to delete the selected item(s) by pressing a deletion key (",(0,o.kt)("strong",{parentName:"p"},"Delete")," or ",(0,o.kt)("strong",{parentName:"p"},"Backspace"),") or selecting a menu item whose associated standard action is 'Clear' (such as the ",(0,o.kt)("strong",{parentName:"p"},"Clear")," command in the ",(0,o.kt)("strong",{parentName:"p"},"Edit")," menu). "),(0,o.kt)("p",null,"Note that generating the event is the only action carried out by 4D: the program does not delete any items. It is up to the developer to handle the deletion and any prior warning messages that are displayed."))}m.isMDXComponent=!0}}]);