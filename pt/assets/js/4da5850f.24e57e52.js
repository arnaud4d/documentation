"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>O,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&d(e,n,t[n]);return e};const u={id:"onVpReady",title:"On VP Ready"},f=void 0,m={unversionedId:"Events/onVpReady",id:"version-19/Events/onVpReady",title:"On VP Ready",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onVpReady.md",sourceDirName:"Events",slug:"/Events/onVpReady",permalink:"/docs/pt/19/Events/onVpReady",draft:!1,tags:[],version:"19",frontMatter:{id:"onVpReady",title:"On VP Ready"},sidebar:"docs",previous:{title:"On VP Range Changed",permalink:"/docs/pt/19/Events/onVpRangeChanged"},next:{title:"On Window Opening Denied",permalink:"/docs/pt/19/Events/onWindowOpeningDenied"}},y={},v=[{value:"Description",id:"description",level:2}],b={toc:v};function O(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},b),d),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"9"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"/docs/pt/19/FormObjects/viewProAreaOverview"}),"4D View Pro Area")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The loading of the 4D View Pro area is complete")))),(0,r.kt)("h2",s({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is generated when the 4D View Pro area loading is complete. "),(0,r.kt)("p",null,"You need to use this event to write initialization code for the area. Any 4D View Pro area initialization code, for loading or reading values from or in the area, must be located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"On VP Ready")," form event of the area. This form event is triggered once the area loading is complete. Testing this event makes you sure that the code will be executed in a valid context. An error is returned if a 4D View Pro command is called before the ",(0,r.kt)("inlineCode",{parentName:"p"},"On VP Ready")," form event is generated."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"4D View Pro areas are loaded asynchronously in 4D forms. It means that the standard ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/pt/19/Events/onLoad"}),"On load")," form event cannot be used for 4D View Pro initialization code, since it could be executed before the loading of the area is complete. ",(0,r.kt)("inlineCode",{parentName:"p"},"On VP Ready")," is always generated after ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/pt/19/Events/onLoad"}),"On load"),".")))}O.isMDXComponent=!0}}]);