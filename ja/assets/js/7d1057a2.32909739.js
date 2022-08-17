"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55637],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,b=u["".concat(p,".").concat(f)]||u[f]||s[f]||a;return t?r.createElement(b,i(i({ref:n},d),{},{components:t})):r.createElement(b,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>O,contentTitle:()=>f,default:()=>y,frontMatter:()=>u,metadata:()=>b,toc:()=>m});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&d(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&d(e,t,n[t]);return e};const u={id:"onWindowOpeningDenied",title:"On Window Opening Denied"},f=void 0,b={unversionedId:"Events/onWindowOpeningDenied",id:"version-19/Events/onWindowOpeningDenied",title:"On Window Opening Denied",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onWindowOpeningDenied.md",sourceDirName:"Events",slug:"/Events/onWindowOpeningDenied",permalink:"/docs/ja/19/Events/onWindowOpeningDenied",draft:!1,tags:[],version:"19",frontMatter:{id:"onWindowOpeningDenied",title:"On Window Opening Denied"},sidebar:"docs",previous:{title:"On VP Ready",permalink:"/docs/ja/19/Events/onVpReady"},next:{title:"Overview",permalink:"/docs/ja/19/Menus/overview"}},O={},m=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],v={toc:m};function y(e){var n,t=e,{components:o}=t,d=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=s(s({},v),d),a(n,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"53"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"/docs/ja/19/FormObjects/webAreaOverview"}),"Web Area")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"A pop-up window has been blocked")))),(0,r.kt)("h2",s({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is generated when the opening of a pop-up window is blocked by the Web area. 4D Web areas do not allow the opening of pop-up windows."),(0,r.kt)("p",null,"You can find out the blocked URL using the ",(0,r.kt)("inlineCode",{parentName:"p"},"WA Get last filtered URL")," command."),(0,r.kt)("h3",s({},{id:"see-also"}),"See also"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"/docs/ja/19/Events/onOpenExternalLink"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Open External Link"))))}y.isMDXComponent=!0}}]);