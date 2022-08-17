"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,b=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>f,default:()=>y,frontMatter:()=>d,metadata:()=>b,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const d={id:"onBoundVariableChange",title:"On Bound Variable Change"},f=void 0,b={unversionedId:"Events/onBoundVariableChange",id:"Events/onBoundVariableChange",title:"On Bound Variable Change",description:"|Code|Can be called by|Definition|",source:"@site/docs/Events/onBoundVariableChange.md",sourceDirName:"Events",slug:"/Events/onBoundVariableChange",permalink:"/docs/pt/next/Events/onBoundVariableChange",draft:!1,tags:[],version:"current",frontMatter:{id:"onBoundVariableChange",title:"On Bound Variable Change"},sidebar:"docs",previous:{title:"On Begin URL Loading",permalink:"/docs/pt/next/Events/onBeginUrlLoading"},next:{title:"On Clicked",permalink:"/docs/pt/next/Events/onClicked"}},m={},v=[{value:"Description",id:"description",level:2}],g={toc:v};function y(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"54"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Form"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The variable bound to a subform is modified")))),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is generated in the context of the form method of a ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/pt/next/FormObjects/subformOverview"}),"subform")," as soon as a value is assigned to the variable bound with the subform in the parent form (even if the same value is reassigned) and if the subform belongs to the current form page or to page 0."),(0,r.kt)("p",null,"Form more information, refer to the ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/pt/next/FormObjects/subformOverview#managing-the-bound-variable"}),"Managing the bound variable")," section."))}y.isMDXComponent=!0}}]);