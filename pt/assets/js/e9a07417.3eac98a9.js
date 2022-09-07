"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(a,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>u});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"top_$limit",title:"$top/$limit"},p=void 0,a={unversionedId:"REST/top_$limit",id:"version-19-R6/REST/top_$limit",title:"$top/$limit",description:"Limits the number of entities to return (e.g., $top=50)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/REST/$top_$limit.md",sourceDirName:"REST",slug:"/REST/top_$limit",permalink:"/documentation/pt/docs/REST/top_$limit",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"top_$limit",title:"$top/$limit"},sidebar:"docs",previous:{title:"$timeout",permalink:"/documentation/pt/docs/REST/timeout"},next:{title:"$version",permalink:"/documentation/pt/docs/REST/version"}},c={},u=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],s={toc:u};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Limits the number of entities to return (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"$top=50"),")"),(0,r.kt)("h2",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$top/$limit")," defines the limit of entities to return. By default, the number is limited to 100. You can use either keyword: ",(0,r.kt)("inlineCode",{parentName:"p"},"$top")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"$limit"),"."),(0,r.kt)("p",null,"When used in conjunction with ",(0,r.kt)("a",o({parentName:"p"},{href:"/documentation/pt/docs/REST/skip"}),(0,r.kt)("inlineCode",{parentName:"a"},"$skip")),", you can navigate through the entity selection returned by the REST request."),(0,r.kt)("h2",o({},{id:"exemplo"}),"Exemplo"),(0,r.kt)("p",null,"In the following example, we request the next ten entities after the 20th entity:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10")))}m.isMDXComponent=!0}}]);