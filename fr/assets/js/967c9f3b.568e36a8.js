"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=m(r),u=a,d=s["".concat(p,".").concat(u)]||s[u]||c[u]||o;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},40200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&f(e,r,t[r]);if(l)for(var r of l(t))m.call(t,r)&&f(e,r,t[r]);return e};const s={id:"imageformat",title:"$imageformat"},u=void 0,d={unversionedId:"REST/imageformat",id:"version-18/REST/imageformat",title:"$imageformat",description:"Defines which image format to use for retrieving images (e.g., $imageformat=png)",source:"@site/versioned_docs/version-18/REST/$imageformat.md",sourceDirName:"REST",slug:"/REST/imageformat",permalink:"/docs/fr/18/REST/imageformat",draft:!1,tags:[],version:"18",frontMatter:{id:"imageformat",title:"$imageformat"},sidebar:"docs",previous:{title:"$filter",permalink:"/docs/fr/18/REST/filter"},next:{title:"$method",permalink:"/docs/fr/18/REST/method"}},g={},y=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],b={toc:y};function h(e){var t,r=e,{components:a}=r,f=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),f),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Defines which image format to use for retrieving images (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"$imageformat=png"),")"),(0,n.kt)("h2",c({},{id:"description"}),"Description"),(0,n.kt)("p",null,"Define which format to use to display images. By default, the best format for the image will be chosen. You can, however, select one of the following formats:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"GIF"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"GIF format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PNG"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PNG format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"JPEG"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"JPEG format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"TIFF"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"TIFF format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"best"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Best format based on the image")))),(0,n.kt)("p",null,"Once you have defined the format, you must pass the image attribute to ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/fr/18/REST/expand"}),(0,n.kt)("inlineCode",{parentName:"a"},"$expand"))," to load the photo completely."),(0,n.kt)("p",null,"If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be empty."),(0,n.kt)("h2",c({},{id:"example"}),"Example"),(0,n.kt)("p",null,"The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo")))}h.isMDXComponent=!0}}]);