"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"onUrlFiltering",title:"On URL Filtering"},c=void 0,p={unversionedId:"Events/onUrlFiltering",id:"version-19-R6/Events/onUrlFiltering",title:"On URL Filtering",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onUrlFiltering.md",sourceDirName:"Events",slug:"/Events/onUrlFiltering",permalink:"/main/ja/docs/Events/onUrlFiltering",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onUrlFiltering",title:"On URL Filtering"},sidebar:"docs",previous:{title:"On Unload",permalink:"/main/ja/docs/Events/onUnload"},next:{title:"On URL Loading Error",permalink:"/main/ja/docs/Events/onUrlLoadingError"}},s={},d=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Code"),(0,i.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"51"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/main/ja/docs/FormObjects/webAreaOverview"},"Web Area")),(0,i.kt)("td",{parentName:"tr",align:null},"A URL was blocked by the Web area")))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This event is generated when the loading of a URL is blocked by the Web area because of a filter set up using the ",(0,i.kt)("inlineCode",{parentName:"p"},"WA SET URL FILTERS")," command."),(0,i.kt)("p",null,"You can find out the blocked URL using the ",(0,i.kt)("inlineCode",{parentName:"p"},"WA Get last filtered URL")," command."),(0,i.kt)("h3",{id:"see-also"},"See also"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/Events/onOpenExternalLink"},(0,i.kt)("inlineCode",{parentName:"a"},"On Open External Link"))))}m.isMDXComponent=!0}}]);