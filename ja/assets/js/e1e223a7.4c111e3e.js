"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"onAfterSort",title:"On After Sort"},s=void 0,c={unversionedId:"Events/onAfterSort",id:"version-19-R6/Events/onAfterSort",title:"On After Sort",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onAfterSort.md",sourceDirName:"Events",slug:"/Events/onAfterSort",permalink:"/main/ja/docs/Events/onAfterSort",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onAfterSort",title:"On After Sort"},sidebar:"docs",previous:{title:"On After Keystroke",permalink:"/main/ja/docs/Events/onAfterKeystroke"},next:{title:"On Alternative Click",permalink:"/main/ja/docs/Events/onAlternativeClick"}},p={},u=[{value:"Description",id:"description",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"30"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/main/ja/docs/FormObjects/listboxOverview"},"List Box")," - ",(0,o.kt)("a",{parentName:"td",href:"/main/ja/docs/FormObjects/listboxOverview#list-box-columns"},"List Box Column")),(0,o.kt)("td",{parentName:"tr",align:null},"A standard sort has just been carried out in a list box column.")))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This event is generated just after a standard sort is performed (",(0,o.kt)("em",{parentName:"p"},"i.e.")," it is NOT generated if $0 returns -1 in the ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/Events/onHeaderClick"},(0,o.kt)("inlineCode",{parentName:"a"},"On Header Click"))," event). This mechanism is useful for storing the directions of the last sort performed by the user. In this event, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Self")," command returns a pointer to the variable of the sorted column header."))}f.isMDXComponent=!0}}]);