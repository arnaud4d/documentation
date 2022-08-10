"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>m,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"expand",title:"$expand"},l=void 0,m={unversionedId:"REST/expand",id:"REST/expand",title:"$expand",description:"Expands an image stored in an Image attribute (e.g., Employee(1)/photo?$imageformat=best&$expand=photo)",source:"@site/docs/REST/$expand.md",sourceDirName:"REST",slug:"/REST/expand",permalink:"/main/pt/docs/next/REST/expand",draft:!1,tags:[],version:"current",frontMatter:{id:"expand",title:"$expand"},sidebar:"docs",previous:{title:"$entityset",permalink:"/main/pt/docs/next/REST/entityset"},next:{title:"$filter",permalink:"/main/pt/docs/next/REST/filter"}},s={},u=[{value:"Viewing an image attribute",id:"viewing-an-image-attribute",level:2},{value:"Saving a BLOB attribute to disk",id:"saving-a-blob-attribute-to-disk",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Expands an image stored in an Image attribute (",(0,o.kt)("em",{parentName:"p"},"e.g."),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Employee(1)/photo?$imageformat=best&$expand=photo"),")",(0,o.kt)("br",null),"\nor",(0,o.kt)("br",null),"\nExpands an BLOB attribute to save it."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Compatibility"),": For compatibility reasons, $expand can be used to expand a relational attribute (",(0,o.kt)("em",{parentName:"p"},"e.g."),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Company(1)?$expand=staff")," or ",(0,o.kt)("inlineCode",{parentName:"p"},'Employee/?$filter="firstName BEGIN a"&$expand=employer'),"). It is however recommended to use ",(0,o.kt)("a",{parentName:"p",href:"/main/pt/docs/next/REST/attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"$attributes"))," for this feature. ")),(0,o.kt)("h2",{id:"viewing-an-image-attribute"},"Viewing an image attribute"),(0,o.kt)("p",null,"If you want to view an image attribute in its entirety, write the following:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo")),(0,o.kt)("p",null,"For more information about the image formats, refer to ",(0,o.kt)("a",{parentName:"p",href:"/main/pt/docs/next/REST/imageformat"},(0,o.kt)("inlineCode",{parentName:"a"},"$imageformat")),". For more information about the version parameter, refer to ",(0,o.kt)("a",{parentName:"p",href:"/main/pt/docs/next/REST/version"},(0,o.kt)("inlineCode",{parentName:"a"},"$version")),"."),(0,o.kt)("h2",{id:"saving-a-blob-attribute-to-disk"},"Saving a BLOB attribute to disk"),(0,o.kt)("p",null,'If you want to save a BLOB stored in your dataclass, you can write the following by also passing "true" to $binary:'),(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt")))}d.isMDXComponent=!0}}]);