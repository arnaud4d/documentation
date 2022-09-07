"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35087],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38663:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});t(67294);var n=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"savedorderby",title:"$savedorderby"},d=void 0,l={unversionedId:"REST/savedorderby",id:"version-18/REST/savedorderby",title:"$savedorderby",description:'Guarda el filtro definido por $orderby al crear un conjunto de entidades (por ejemplo, $savedorderby="")',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/$savedorderby.md",sourceDirName:"REST",slug:"/REST/savedorderby",permalink:"/documentation/es/docs/18/REST/savedorderby",draft:!1,tags:[],version:"18",frontMatter:{id:"savedorderby",title:"$savedorderby"},sidebar:"docs",previous:{title:"$savedfilter",permalink:"/documentation/es/docs/18/REST/savedfilter"},next:{title:"$skip",permalink:"/documentation/es/docs/18/REST/skip"}},s={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],p={toc:c};function u(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Guarda el filtro definido por ",(0,n.kt)("inlineCode",{parentName:"p"},"$orderby")," al crear un conjunto de entidades (",(0,n.kt)("em",{parentName:"p"},"por ejemplo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},'$savedorderby="{orderby}"'),")"),(0,n.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"Cuando se crea un conjunto de entidades, se puede guardar el sentido de la ordenaci\xf3n junto con el filtro utilizado para su creaci\xf3n como medida de seguridad. Si el conjunto de entidades que ha creado es eliminado de la cach\xe9 de 4D Server (debido al tiempo de espera, a la necesidad de espacio del servidor o a que lo ha eliminado llamando a ",(0,n.kt)("a",a({parentName:"p"},{href:"/documentation/es/docs/18/REST/method#methodrelease"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=release")),")."),(0,n.kt)("p",null,"Utilice ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," para guardar el orden que defini\xf3 al crear su conjunto de entidades, luego pase ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," junto con su llamada para recuperar cada vez el conjunto de entidades."),(0,n.kt)("p",null,"Si el conjunto de entidades ya no est\xe1 en la cach\xe9 de 4D Server, se recrear\xe1 con un nuevo tiempo de espera de 10 minutos por defecto. Si ha utilizado tanto ",(0,n.kt)("a",a({parentName:"p"},{href:"/documentation/es/docs/18/REST/savedfilter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedfilter"))," y ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," en su llamada al crear un conjunto de entidades y luego omite uno de ellos, el nuevo conjunto de entidades, que tiene el mismo n\xfamero de referencia, lo reflejar\xe1."),(0,n.kt)("h2",a({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"Primero se llama a ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," con la llamada inicial para crear un conjunto de entidades:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="lastName!=\'\'"&$savedfilter="lastName!=\'\'"&$orderby="salary"&$savedorderby="salary"&$method=entityset')),(0,n.kt)("p",null,"Luego, cuando acceda a su conjunto de entidades, escriba lo siguiente (utilizando tanto $savedfilter como $savedorderby) para asegurarse de que el filtro y su orden de clasificaci\xf3n siempre existen:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=\'\'"&$savedorderby="salary"')))}u.isMDXComponent=!0}}]);