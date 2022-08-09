"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"onOpenExternalLink",title:"On Open External Link"},p=void 0,c={unversionedId:"Events/onOpenExternalLink",id:"version-19/Events/onOpenExternalLink",title:"On Open External Link",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onOpenExternalLink.md",sourceDirName:"Events",slug:"/Events/onOpenExternalLink",permalink:"/pt/docs/19/Events/onOpenExternalLink",draft:!1,tags:[],version:"19",frontMatter:{id:"onOpenExternalLink",title:"On Open External Link"},sidebar:"docs",previous:{title:"On Open Detail",permalink:"/pt/docs/19/Events/onOpenDetail"},next:{title:"On Outside Call",permalink:"/pt/docs/19/Events/onOutsideCall"}},s={},u=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"52"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pt/docs/19/FormObjects/webAreaOverview"},"Web Area")),(0,o.kt)("td",{parentName:"tr",align:null},"An external URL has been opened in the browser")))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This event is generated when the loading of a URL was blocked by the Web area and the URL was opened with the current system browser, because of a filter set up via the ",(0,o.kt)("inlineCode",{parentName:"p"},"WA SET EXTERNAL LINKS FILTERS")," command."),(0,o.kt)("p",null,"You can find out the blocked URL using the ",(0,o.kt)("inlineCode",{parentName:"p"},"WA Get last filtered URL")," command."),(0,o.kt)("h3",{id:"see-also"},"See also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pt/docs/19/Events/onUrlFiltering"},(0,o.kt)("inlineCode",{parentName:"a"},"On URL Filtering"))))}m.isMDXComponent=!0}}]);