"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e};const u={id:"onCloseBox",title:"On Close Box"},f=void 0,m={unversionedId:"Events/onCloseBox",id:"version-19/Events/onCloseBox",title:"On Close Box",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onCloseBox.md",sourceDirName:"Events",slug:"/Events/onCloseBox",permalink:"/docs/es/19/Events/onCloseBox",draft:!1,tags:[],version:"19",frontMatter:{id:"onCloseBox",title:"On Close Box"},sidebar:"docs",previous:{title:"On Clicked",permalink:"/docs/es/19/Events/onClicked"},next:{title:"On Close Detail",permalink:"/docs/es/19/Events/onCloseDetail"}},b={},v=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:3}],y={toc:v};function O(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),p),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"22"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Form"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"The window\u2019s close box has been clicked")))),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Close Box")," event is generated when the user clicks on the clos box of the window.  "),(0,r.kt)("h3",d({},{id:"example"}),"Example"),(0,r.kt)("p",null,"This example shows how to respond to a close window event with a form used for record data entry:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'  //Method for an input form\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("This record has been modified. Save Changes?")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n End case\n')))}O.isMDXComponent=!0}}]);