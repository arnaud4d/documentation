"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"onLongClick",title:"On Long Click"},c=void 0,s={unversionedId:"Events/onLongClick",id:"version-19-R6/Events/onLongClick",title:"On Long Click",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onLongClick.md",sourceDirName:"Events",slug:"/Events/onLongClick",permalink:"/main/pt/docs/Events/onLongClick",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onLongClick",title:"On Long Click"},sidebar:"docs",previous:{title:"On Load Record",permalink:"/main/pt/docs/Events/onLoadRecord"},next:{title:"On Losing focus",permalink:"/main/pt/docs/Events/onLosingFocus"}},p={},u=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"39"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/main/pt/docs/FormObjects/buttonOverview"},"Button")),(0,o.kt)("td",{parentName:"tr",align:null},"A button is clicked and the mouse button remains pushed for a certain length of time")))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This event is generated when a button receives a click and the mouse button is held for a certain length of time. In theory, the length of time for which this event is generated is equal to the maximum length of time separating a double-click, as defined in the system preferences."),(0,o.kt)("p",null,"This event can be generated for the following button styles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/pt/docs/FormObjects/buttonOverview#toolbar"},"Toolbar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/pt/docs/FormObjects/buttonOverview#bevel"},"Bevel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/pt/docs/FormObjects/buttonOverview#rounded-bevel"},"Rounded Bevel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/pt/docs/FormObjects/buttonOverview#os-x-gradient"},"OS X Gradient")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/pt/docs/FormObjects/buttonOverview#os-x-textured"},"OS X Textured")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/pt/docs/FormObjects/buttonOverview#office-xp"},"Office XP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/pt/docs/FormObjects/buttonOverview#help"},"Help")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/pt/docs/FormObjects/buttonOverview#circle"},"Circle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/pt/docs/FormObjects/buttonOverview#custom"},"Custom"))),(0,o.kt)("p",null,"This event is generally used to display pop-up menus in case of long button clicks. The ",(0,o.kt)("a",{parentName:"p",href:"/main/pt/docs/Events/onClicked"},(0,o.kt)("inlineCode",{parentName:"a"},"On Clicked")),' event, if enabled, is generated if the user releases the mouse button before the "long click" time limit.'),(0,o.kt)("h3",{id:"see-also"},"See also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/pt/docs/Events/onAlternativeClick"},(0,o.kt)("inlineCode",{parentName:"a"},"On Alternative Click"))))}d.isMDXComponent=!0}}]);