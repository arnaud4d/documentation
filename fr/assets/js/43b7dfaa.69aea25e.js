"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"onColumnMoved",title:"On Column Moved"},s=void 0,c={unversionedId:"Events/onColumnMoved",id:"version-19-R6/Events/onColumnMoved",title:"On Column Moved",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onColumnMoved.md",sourceDirName:"Events",slug:"/Events/onColumnMoved",permalink:"/main/fr/docs/Events/onColumnMoved",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onColumnMoved",title:"On Column Moved"},sidebar:"docs",previous:{title:"On Collapse",permalink:"/main/fr/docs/Events/onCollapse"},next:{title:"On Column Resize",permalink:"/main/fr/docs/Events/onColumnResize"}},p={},u=[{value:"Description",id:"description",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"32"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/main/fr/docs/FormObjects/listboxOverview"},"List Box")," - ",(0,a.kt)("a",{parentName:"td",href:"/main/fr/docs/FormObjects/listboxOverview#list-box-columns"},"List Box Column")),(0,a.kt)("td",{parentName:"tr",align:null},"A list box column is moved by the user via drag and drop")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This event is generated when a column of the list box is moved by the user using drag and drop (",(0,a.kt)("a",{parentName:"p",href:"FormObjects/propertiesListBox.html#locked-columns-and-static-columns"},"if allowed"),"). It is not generated if the column is dragged and then dropped in its initial location. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LISTBOX MOVED COLUMN NUMBER")," command returns the new position of the column."))}m.isMDXComponent=!0}}]);