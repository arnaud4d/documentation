"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"onOutsideCall",title:"Sur appel ext\xe9rieur"},l=void 0,p={unversionedId:"Events/onOutsideCall",id:"version-19-R6/Events/onOutsideCall",title:"Sur appel ext\xe9rieur",description:"| Code | Peut \xeatre appel\xe9 par | D\xe9finition                                        |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/Events/onOutsideCall.md",sourceDirName:"Events",slug:"/Events/onOutsideCall",permalink:"/documentation/fr/docs/Events/onOutsideCall",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onOutsideCall",title:"Sur appel ext\xe9rieur"},sidebar:"docs",previous:{title:"On Open External Link",permalink:"/documentation/fr/docs/Events/onOpenExternalLink"},next:{title:"Sur changement page",permalink:"/documentation/fr/docs/Events/onPageChange"}},u={},c=[{value:"Description",id:"description",level:2}],s={toc:c};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Peut \xeatre appel\xe9 par"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"D\xe9finition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Formulaire"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Le formulaire a re\xe7u un appel ",(0,r.kt)("inlineCode",{parentName:"td"},"POST OUTSIDE CALL"))))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Cet \xe9v\xe9nement est appel\xe9 lorsque le formulaire est appel\xe9 \xe0 partir d'un autre processus via la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"POST OUTSIDE CALL"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"L'\xe9v\xe9nement ",(0,r.kt)("inlineCode",{parentName:"p"},"On Outside Call")," modifie le contexte de saisie du formulaire. En particulier si un champ \xe9tait en cours de modification, l'\xe9v\xe9nement ",(0,r.kt)("a",a({parentName:"p"},{href:"/documentation/fr/docs/Events/onDataChange"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Data Change"))," est g\xe9n\xe9r\xe9.")))}d.isMDXComponent=!0}}]);