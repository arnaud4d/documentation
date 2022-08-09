"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"onBeforeDataEntry",title:"On Before Data Entry"},s=void 0,c={unversionedId:"Events/onBeforeDataEntry",id:"Events/onBeforeDataEntry",title:"On Before Data Entry",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onBeforeDataEntry.md",sourceDirName:"Events",slug:"/Events/onBeforeDataEntry",permalink:"/docs/es/docs/next/Events/onBeforeDataEntry",draft:!1,tags:[],version:"current",frontMatter:{id:"onBeforeDataEntry",title:"On Before Data Entry"},sidebar:"docs",previous:{title:"On Alternative Click",permalink:"/docs/es/docs/next/Events/onAlternativeClick"},next:{title:"On Before Keystroke",permalink:"/docs/es/docs/next/Events/onBeforeKeystroke"}},p={},d=[{value:"Description",id:"description",level:2}],u={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"41"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/es/docs/next/FormObjects/listboxOverview"},"List Box")," - ",(0,a.kt)("a",{parentName:"td",href:"/docs/es/docs/next/FormObjects/listboxOverview#list-box-columns"},"List Box Column")),(0,a.kt)("td",{parentName:"tr",align:null},"A list box cell is about to change to editing mode")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This event is generated just before a cell in the list box is edited (before the entry cursor is displayed). This event allows the developer, for example, to display a different text depending on whether the user is in the display or edit mode."),(0,a.kt)("p",null,"When the cursor arrives in the cell, the ",(0,a.kt)("inlineCode",{parentName:"p"},"On Before Data Entry")," event is generated in the list box or column method. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If, in the context of this event, $0 is set to -1, the cell is considered as not enterable. If the event was generated after ",(0,a.kt)("strong",{parentName:"li"},"Tab")," or ",(0,a.kt)("strong",{parentName:"li"},"Shift+Tab")," was pressed, the focus goes to either the next cell or the previous one, respectively."),(0,a.kt)("li",{parentName:"ul"},"If $0 is not -1 (by default $0 is 0), the cell is enterable and switches to editing mode.")),(0,a.kt)("p",null,"See also ",(0,a.kt)("a",{parentName:"p",href:"/docs/es/docs/next/FormObjects/listboxOverview#managing-entry"},"Managing entry")," section."))}f.isMDXComponent=!0}}]);