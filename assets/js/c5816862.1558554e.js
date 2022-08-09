"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(v,l(l({ref:t},p),{},{components:r})):n.createElement(v,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"onCollapse",title:"On Collapse"},s=void 0,c={unversionedId:"Events/onCollapse",id:"version-19/Events/onCollapse",title:"On Collapse",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onCollapse.md",sourceDirName:"Events",slug:"/Events/onCollapse",permalink:"/docs/docs/19/Events/onCollapse",draft:!1,tags:[],version:"19",frontMatter:{id:"onCollapse",title:"On Collapse"},sidebar:"docs",previous:{title:"On Close Detail",permalink:"/docs/docs/19/Events/onCloseDetail"},next:{title:"On Column Moved",permalink:"/docs/docs/19/Events/onColumnMoved"}},p={},d=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"44"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/docs/19/FormObjects/listOverview#overview"},"Hierarchical List")," - ",(0,o.kt)("a",{parentName:"td",href:"/docs/docs/19/FormObjects/listboxOverview"},"List Box")),(0,o.kt)("td",{parentName:"tr",align:null},"An element of the hierarchical list or hierarchical list box has been collapsed using a click or a keystroke")))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/19/FormObjects/listOverview"},"Hierarchical list"),": This event is generated every time an element of the hierarchical list is collapsed with a mouse click or keystroke."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/19/FormObjects/listboxOverview#hierarchical-list-boxes"},"Hierarchical list boxes"),": This event is generated when a row of the hierarchical list box is collapsed.")),(0,o.kt)("h3",{id:"see-also"},"See also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/docs/19/Events/onExpand"},"On Expand")))}m.isMDXComponent=!0}}]);