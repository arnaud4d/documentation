"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35518],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),v=o,d=m["".concat(l,".").concat(v)]||m[v]||u[v]||i;return t?n.createElement(d,a(a({ref:r},c),{},{components:t})):n.createElement(d,a({ref:r},c))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60159:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"version",title:"$version"},l=void 0,p={unversionedId:"REST/version",id:"version-19-R6/REST/version",title:"$version",description:"Image version number",source:"@site/versioned_docs/version-19-R6/REST/$version.md",sourceDirName:"REST",slug:"/REST/version",permalink:"/docs/docs/REST/version",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"version",title:"$version"},sidebar:"docs",previous:{title:"$top/$limit",permalink:"/docs/docs/REST/top_$limit"},next:{title:"Client/Server Management",permalink:"/docs/docs/Desktop/clientServer"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],m={toc:u};function v(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Image version number\t"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$version")," is the image's version number returned by the server. The version number, which is sent by the server, works around the browser's cache so that you are sure to retrieve the correct image."),(0,i.kt)("p",null,"The value of the image's version parameter is modified by the server."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo")))}v.isMDXComponent=!0}}]);