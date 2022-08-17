"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&u(e,r,t[r]);return e};const m={id:"expand",title:"$expand"},d=void 0,f={unversionedId:"REST/expand",id:"version-18/REST/expand",title:"$expand",description:"Expands an image stored in an Image attribute (e.g., Employee(1)/photo?$imageformat=best&$expand=photo)",source:"@site/versioned_docs/version-18/REST/$expand.md",sourceDirName:"REST",slug:"/REST/expand",permalink:"/docs/18/REST/expand",draft:!1,tags:[],version:"18",frontMatter:{id:"expand",title:"$expand"},sidebar:"docs",previous:{title:"$entityset",permalink:"/docs/18/REST/entityset"},next:{title:"$filter",permalink:"/docs/18/REST/filter"}},b={},y=[{value:"Viewing an image attribute",id:"viewing-an-image-attribute",level:2},{value:"Saving a BLOB attribute to disk",id:"saving-a-blob-attribute-to-disk",level:2}],g={toc:y};function v(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},g),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Expands an image stored in an Image attribute (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Employee(1)/photo?$imageformat=best&$expand=photo"),")",(0,n.kt)("br",null),"\nor",(0,n.kt)("br",null),"\nExpands an BLOB attribute to save it."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Compatibility"),": For compatibility reasons, $expand can be used to expand a relational attribute (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Company(1)?$expand=staff")," or ",(0,n.kt)("inlineCode",{parentName:"p"},'Employee/?$filter="firstName BEGIN a"&$expand=employer'),"). It is however recommended to use ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/18/REST/attributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"$attributes"))," for this feature.")),(0,n.kt)("h2",c({},{id:"viewing-an-image-attribute"}),"Viewing an image attribute"),(0,n.kt)("p",null,"If you want to view an image attribute in its entirety, write the following:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo")),(0,n.kt)("p",null,"For more information about the image formats, refer to ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/18/REST/imageformat"}),(0,n.kt)("inlineCode",{parentName:"a"},"$imageformat")),". For more information about the version parameter, refer to ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/18/REST/version"}),(0,n.kt)("inlineCode",{parentName:"a"},"$version")),"."),(0,n.kt)("h2",c({},{id:"saving-a-blob-attribute-to-disk"}),"Saving a BLOB attribute to disk"),(0,n.kt)("p",null,'If you want to save a BLOB stored in your dataclass, you can write the following by also passing "true" to $binary:'),(0,n.kt)("p",null,"  ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt")))}v.isMDXComponent=!0}}]);