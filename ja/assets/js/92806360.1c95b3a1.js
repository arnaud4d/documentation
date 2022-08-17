"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96982],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48927:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e};const u={id:"onExpand",title:"On Expand"},f=void 0,m={unversionedId:"Events/onExpand",id:"version-19/Events/onExpand",title:"On Expand",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onExpand.md",sourceDirName:"Events",slug:"/Events/onExpand",permalink:"/docs/ja/19/Events/onExpand",draft:!1,tags:[],version:"19",frontMatter:{id:"onExpand",title:"On Expand"},sidebar:"docs",previous:{title:"On End URL Loading",permalink:"/docs/ja/19/Events/onEndUrlLoading"},next:{title:"On Footer Click",permalink:"/docs/ja/19/Events/onFooterClick"}},v={},b=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],O={toc:b};function y(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},O),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Can be called by"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"44"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/docs/ja/19/FormObjects/listOverview#overview"}),"Hierarchical List")," - ",(0,n.kt)("a",d({parentName:"td"},{href:"/docs/ja/19/FormObjects/listboxOverview"}),"List Box")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"An element of the hierarchical list or hierarchical list box has been expanded using a click or a keystroke")))),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/ja/19/FormObjects/listOverview"}),"Hierarchical list"),": This event is generated every time an element of the hierarchical list is expanded with a mouse click or keystroke."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/ja/19/FormObjects/listboxOverview#hierarchical-list-boxes"}),"Hierarchical list boxes"),": This event is generated when a row of the hierarchical list box is expanded.")),(0,n.kt)("h3",d({},{id:"see-also"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/docs/ja/19/Events/onCollapse"}),"On Collapse")))}y.isMDXComponent=!0}}]);