"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"onCloseDetail",title:"Sur fermeture corps"},l=void 0,s={unversionedId:"Events/onCloseDetail",id:"version-19/Events/onCloseDetail",title:"Sur fermeture corps",description:"| Code | Peut \xeatre appel\xe9 par                                     | D\xe9finition                                                                        |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onCloseDetail.md",sourceDirName:"Events",slug:"/Events/onCloseDetail",permalink:"/documentation/fr/docs/19/Events/onCloseDetail",draft:!1,tags:[],version:"19",frontMatter:{id:"onCloseDetail",title:"Sur fermeture corps"},sidebar:"docs",previous:{title:"On Close Box",permalink:"/documentation/fr/docs/19/Events/onCloseBox"},next:{title:"Sur contracter",permalink:"/documentation/fr/docs/19/Events/onCollapse"}},u={},c=[{value:"Description",id:"description",level:2}],p={toc:c};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Peut \xeatre appel\xe9 par"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"D\xe9finition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"26"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Formulaire - ",(0,n.kt)("a",o({parentName:"td"},{href:"/documentation/fr/docs/19/FormObjects/listboxOverview"}),"List Box")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Vous avez quitt\xe9 le formulaire d\xe9taill\xe9 et vous retournez au formulaire de sortie")))),(0,n.kt)("h2",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,"L'\xe9v\xe9nement ",(0,n.kt)("inlineCode",{parentName:"p"},"On Close Detail")," peut \xeatre utilis\xe9 dans les contextes suivants :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Formulaires de sortie")," : le formulaire d\xe9taill\xe9 est ferm\xe9 et l'utilisateur retourne au formulaire liste. Cet \xe9v\xe9nement ne peut pas \xeatre s\xe9lectionn\xe9 pour les formulaires projet, il est uniquement disponible avec les ",(0,n.kt)("strong",{parentName:"li"},"formulaires table"),"."),(0,n.kt)("li",{parentName:"ul"},"List box ",(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/fr/docs/19/FormObjects/listboxOverview#selection-list-boxes"}),(0,n.kt)("strong",{parentName:"a"},"de type s\xe9lection"))," : Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsqu'un enregistrement affich\xe9 dans le ",(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/fr/docs/19/FormObjects/propertiesListBox#detail-form-name"}),"formulaire d\xe9taill\xe9")," associ\xe9 \xe0 une list box de type s\xe9lection est sur le point d'\xeatre ferm\xe9 (que l'enregistrement ait \xe9t\xe9 modifi\xe9 ou non).")))}m.isMDXComponent=!0}}]);