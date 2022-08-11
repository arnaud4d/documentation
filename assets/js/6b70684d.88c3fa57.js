"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55387],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,b=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(b,i(i({ref:n},s),{},{components:t})):r.createElement(b,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"onWindowOpeningDenied",title:"On Window Opening Denied"},p=void 0,d={unversionedId:"Events/onWindowOpeningDenied",id:"version-19-R6/Events/onWindowOpeningDenied",title:"On Window Opening Denied",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onWindowOpeningDenied.md",sourceDirName:"Events",slug:"/Events/onWindowOpeningDenied",permalink:"/docs/Events/onWindowOpeningDenied",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onWindowOpeningDenied",title:"On Window Opening Denied"},sidebar:"docs",previous:{title:"On VP Ready",permalink:"/docs/Events/onVpReady"},next:{title:"Overview",permalink:"/docs/Menus/overview"}},s={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"53"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/FormObjects/webAreaOverview"},"Web Area")),(0,o.kt)("td",{parentName:"tr",align:null},"A pop-up window has been blocked")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"History"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v19 R5"),(0,o.kt)("td",{parentName:"tr",align:null},"Triggered on drop"))))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This event is generated when the opening of a pop-up window is blocked by the Web area. 4D Web areas do not allow the opening of pop-up windows."),(0,o.kt)("p",null,"You can find out the blocked URL using the ",(0,o.kt)("inlineCode",{parentName:"p"},"WA Get last filtered URL")," command."),(0,o.kt)("p",null,"This event is also triggered when a drop operation has been done in the Web area (with embedded and Wwindows system ",(0,o.kt)("a",{parentName:"p",href:"/docs/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"},"engines"),") if the ",(0,o.kt)("a",{parentName:"p",href:"/docs/FormObjects/webAreaOverview#user-interface"},"Drag and drop")," option is also enabled for the area. You can accept the drop by calling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'//web area object method\nIf (FORM Event.code=On Window Opening Denied)\n WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  \n // or UrlVariable:=WA Get last filtered URL(*; "WebArea")  \n // where UrlVariable is the URL variable associated to the web area\nEnd if \n')),(0,o.kt)("h3",{id:"see-also"},"See also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/Events/onOpenExternalLink"},(0,o.kt)("inlineCode",{parentName:"a"},"On Open External Link"))))}m.isMDXComponent=!0}}]);