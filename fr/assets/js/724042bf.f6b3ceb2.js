"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20569],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},31209:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"onRowMoved",title:"On Row Moved"},s=void 0,p={unversionedId:"Events/onRowMoved",id:"version-19/Events/onRowMoved",title:"On Row Moved",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onRowMoved.md",sourceDirName:"Events",slug:"/Events/onRowMoved",permalink:"/fr/docs/19/Events/onRowMoved",draft:!1,tags:[],version:"19",frontMatter:{id:"onRowMoved",title:"On Row Moved"},sidebar:"docs",previous:{title:"On Resize",permalink:"/fr/docs/19/Events/onResize"},next:{title:"On Row Resize",permalink:"/fr/docs/19/Events/onRowResize"}},c={},d=[{value:"Description",id:"description",level:2}],u={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"34"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/fr/docs/19/FormObjects/listboxOverview#array-list-boxes"},"List Box of the array type")," - ",(0,a.kt)("a",{parentName:"td",href:"/fr/docs/19/FormObjects/listboxOverview#list-box-columns"},"List Box Column")),(0,a.kt)("td",{parentName:"tr",align:null},"A list box row is moved by the user via drag and drop")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This event is generated when a row of the list box (",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/19/FormObjects/listboxOverview#array-list-boxes"},"array type only"),") is moved by the user using drag and drop (",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/19/FormObjects/propertiesAction#movable-rows"},"if allowed"),". It is not generated if the row is dragged and then dropped in its initial location."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LISTBOX MOVED ROW NUMBER")," command returns the new position of the row."))}f.isMDXComponent=!0}}]);