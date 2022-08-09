"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"onLongClick",title:"On Long Click"},c=void 0,s={unversionedId:"Events/onLongClick",id:"version-19/Events/onLongClick",title:"On Long Click",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onLongClick.md",sourceDirName:"Events",slug:"/Events/onLongClick",permalink:"/docs/fr/docs/19/Events/onLongClick",draft:!1,tags:[],version:"19",frontMatter:{id:"onLongClick",title:"On Long Click"},sidebar:"docs",previous:{title:"On Load Record",permalink:"/docs/fr/docs/19/Events/onLoadRecord"},next:{title:"On Losing focus",permalink:"/docs/fr/docs/19/Events/onLosingFocus"}},u={},p=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"39"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/fr/docs/19/FormObjects/buttonOverview"},"Button")),(0,a.kt)("td",{parentName:"tr",align:null},"A button is clicked and the mouse button remains pushed for a certain length of time")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This event is generated when a button receives a click and the mouse button is held for a certain length of time. In theory, the length of time for which this event is generated is equal to the maximum length of time separating a double-click, as defined in the system preferences."),(0,a.kt)("p",null,"This event can be generated for the following button styles:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/fr/docs/19/FormObjects/buttonOverview#toolbar"},"Toolbar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/fr/docs/19/FormObjects/buttonOverview#bevel"},"Bevel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/fr/docs/19/FormObjects/buttonOverview#rounded-bevel"},"Rounded Bevel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/fr/docs/19/FormObjects/buttonOverview#os-x-gradient"},"OS X Gradient")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/fr/docs/19/FormObjects/buttonOverview#os-x-textured"},"OS X Textured")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/fr/docs/19/FormObjects/buttonOverview#office-xp"},"Office XP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/fr/docs/19/FormObjects/buttonOverview#help"},"Help")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/fr/docs/19/FormObjects/buttonOverview#circle"},"Circle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/fr/docs/19/FormObjects/buttonOverview#custom"},"Custom"))),(0,a.kt)("p",null,"This event is generally used to display pop-up menus in case of long button clicks. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/Events/onClicked"},(0,a.kt)("inlineCode",{parentName:"a"},"On Clicked")),' event, if enabled, is generated if the user releases the mouse button before the "long click" time limit.'),(0,a.kt)("h3",{id:"see-also"},"See also"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/Events/onAlternativeClick"},(0,a.kt)("inlineCode",{parentName:"a"},"On Alternative Click"))))}m.isMDXComponent=!0}}]);