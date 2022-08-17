"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>O,frontMatter:()=>d,metadata:()=>f,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const d={id:"onLongClick",title:"On Long Click"},m=void 0,f={unversionedId:"Events/onLongClick",id:"version-19-R6/Events/onLongClick",title:"On Long Click",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onLongClick.md",sourceDirName:"Events",slug:"/Events/onLongClick",permalink:"/docs/ja/Events/onLongClick",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onLongClick",title:"On Long Click"},sidebar:"docs",previous:{title:"On Load Record",permalink:"/docs/ja/Events/onLoadRecord"},next:{title:"On Losing focus",permalink:"/docs/ja/Events/onLosingFocus"}},b={},v=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],k={toc:v};function O(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},k),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"39"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/docs/ja/FormObjects/buttonOverview"}),"Button")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"A button is clicked and the mouse button remains pushed for a certain length of time")))),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is generated when a button receives a click and the mouse button is held for a certain length of time. In theory, the length of time for which this event is generated is equal to the maximum length of time separating a double-click, as defined in the system preferences."),(0,r.kt)("p",null,"This event can be generated for the following button styles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/ja/FormObjects/buttonOverview#toolbar"}),"Toolbar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/ja/FormObjects/buttonOverview#bevel"}),"Bevel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/ja/FormObjects/buttonOverview#rounded-bevel"}),"Rounded Bevel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/ja/FormObjects/buttonOverview#os-x-gradient"}),"OS X Gradient")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/ja/FormObjects/buttonOverview#os-x-textured"}),"OS X Textured")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/ja/FormObjects/buttonOverview#office-xp"}),"Office XP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/ja/FormObjects/buttonOverview#help"}),"Help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/ja/FormObjects/buttonOverview#circle"}),"Circle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/ja/FormObjects/buttonOverview#custom"}),"Custom"))),(0,r.kt)("p",null,"This event is generally used to display pop-up menus in case of long button clicks. The ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/ja/Events/onClicked"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Clicked")),' event, if enabled, is generated if the user releases the mouse button before the "long click" time limit.'),(0,r.kt)("h3",u({},{id:"see-also"}),"See also"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/docs/ja/Events/onAlternativeClick"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Alternative Click"))))}O.isMDXComponent=!0}}]);