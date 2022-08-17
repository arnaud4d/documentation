"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e};const d={id:"onColumnMoved",title:"On Column Moved"},m=void 0,f={unversionedId:"Events/onColumnMoved",id:"version-19/Events/onColumnMoved",title:"On Column Moved",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onColumnMoved.md",sourceDirName:"Events",slug:"/Events/onColumnMoved",permalink:"/docs/ja/19/Events/onColumnMoved",draft:!1,tags:[],version:"19",frontMatter:{id:"onColumnMoved",title:"On Column Moved"},sidebar:"docs",previous:{title:"On Collapse",permalink:"/docs/ja/19/Events/onCollapse"},next:{title:"On Column Resize",permalink:"/docs/ja/19/Events/onColumnResize"}},v={},b=[{value:"Description",id:"description",level:2}],O={toc:b};function y(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},O),p),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"32"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/docs/ja/19/FormObjects/listboxOverview"}),"List Box")," - ",(0,r.kt)("a",u({parentName:"td"},{href:"/docs/ja/19/FormObjects/listboxOverview#list-box-columns"}),"List Box Column")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"A list box column is moved by the user via drag and drop")))),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is generated when a column of the list box is moved by the user using drag and drop (",(0,r.kt)("a",u({parentName:"p"},{href:"FormObjects/propertiesListBox.html#locked-columns-and-static-columns"}),"if allowed"),"). It is not generated if the column is dragged and then dropped in its initial location. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LISTBOX MOVED COLUMN NUMBER")," command returns the new position of the column."))}y.isMDXComponent=!0}}]);