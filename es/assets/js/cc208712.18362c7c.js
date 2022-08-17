"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>O,frontMatter:()=>u,metadata:()=>f,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const u={id:"onDeleteAction",title:"On Delete Action"},m=void 0,f={unversionedId:"Events/onDeleteAction",id:"version-19-R6/Events/onDeleteAction",title:"On Delete Action",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onDeleteAction.md",sourceDirName:"Events",slug:"/Events/onDeleteAction",permalink:"/docs/es/Events/onDeleteAction",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onDeleteAction",title:"On Delete Action"},sidebar:"docs",previous:{title:"On Deactivate",permalink:"/docs/es/Events/onDeactivate"},next:{title:"On Display Detail",permalink:"/docs/es/Events/onDisplayDetail"}},y={},v=[{value:"Description",id:"description",level:2}],b={toc:v};function O(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"58"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/docs/es/FormObjects/listOverview"}),"Hierarchical List")," - ",(0,r.kt)("a",d({parentName:"td"},{href:"/docs/es/FormObjects/listboxOverview"}),"List Box")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"The user attempts to delete an item")))),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is generated each time a user attempts to delete the selected item(s) by pressing a deletion key (",(0,r.kt)("strong",{parentName:"p"},"Delete")," or ",(0,r.kt)("strong",{parentName:"p"},"Backspace"),") or selecting a menu item whose associated standard action is 'Clear' (such as the ",(0,r.kt)("strong",{parentName:"p"},"Clear")," command in the ",(0,r.kt)("strong",{parentName:"p"},"Edit")," menu). "),(0,r.kt)("p",null,"Note that generating the event is the only action carried out by 4D: the program does not delete any items. It is up to the developer to handle the deletion and any prior warning messages that are displayed."))}O.isMDXComponent=!0}}]);