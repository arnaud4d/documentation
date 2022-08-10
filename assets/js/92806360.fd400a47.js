"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"onExpand",title:"On Expand"},c=void 0,s={unversionedId:"Events/onExpand",id:"version-19/Events/onExpand",title:"On Expand",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onExpand.md",sourceDirName:"Events",slug:"/Events/onExpand",permalink:"/main/docs/19/Events/onExpand",draft:!1,tags:[],version:"19",frontMatter:{id:"onExpand",title:"On Expand"},sidebar:"docs",previous:{title:"On End URL Loading",permalink:"/main/docs/19/Events/onEndUrlLoading"},next:{title:"On Footer Click",permalink:"/main/docs/19/Events/onFooterClick"}},p={},d=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Code"),(0,i.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"44"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/main/docs/19/FormObjects/listOverview#overview"},"Hierarchical List")," - ",(0,i.kt)("a",{parentName:"td",href:"/main/docs/19/FormObjects/listboxOverview"},"List Box")),(0,i.kt)("td",{parentName:"tr",align:null},"An element of the hierarchical list or hierarchical list box has been expanded using a click or a keystroke")))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/docs/19/FormObjects/listOverview"},"Hierarchical list"),": This event is generated every time an element of the hierarchical list is expanded with a mouse click or keystroke."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/docs/19/FormObjects/listboxOverview#hierarchical-list-boxes"},"Hierarchical list boxes"),": This event is generated when a row of the hierarchical list box is expanded.")),(0,i.kt)("h3",{id:"see-also"},"See also"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/main/docs/19/Events/onCollapse"},"On Collapse")))}u.isMDXComponent=!0}}]);