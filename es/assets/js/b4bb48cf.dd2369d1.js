"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),v=o,f=m["".concat(l,".").concat(v)]||m[v]||u[v]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44204:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"version",title:"$version"},l=void 0,p={unversionedId:"REST/version",id:"REST/version",title:"$version",description:"Image version number",source:"@site/docs/REST/$version.md",sourceDirName:"REST",slug:"/REST/version",permalink:"/main/es/docs/next/REST/version",draft:!1,tags:[],version:"current",frontMatter:{id:"version",title:"$version"},sidebar:"docs",previous:{title:"$top/$limit",permalink:"/main/es/docs/next/REST/top_$limit"},next:{title:"Client/Server Management",permalink:"/main/es/docs/next/Desktop/clientServer"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],m={toc:u};function v(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Image version number\t"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$version")," is the image's version number returned by the server. The version number, which is sent by the server, works around the browser's cache so that you are sure to retrieve the correct image."),(0,i.kt)("p",null,"The value of the image's version parameter is modified by the server."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo")))}v.isMDXComponent=!0}}]);