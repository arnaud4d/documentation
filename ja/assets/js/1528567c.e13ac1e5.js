"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"onMouseUp",title:"On Mouse Up"},p=void 0,l={unversionedId:"Events/onMouseUp",id:"version-19/Events/onMouseUp",title:"On Mouse Up",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onMouseUp.md",sourceDirName:"Events",slug:"/Events/onMouseUp",permalink:"/ja/docs/19/Events/onMouseUp",draft:!1,tags:[],version:"19",frontMatter:{id:"onMouseUp",title:"On Mouse Up"},sidebar:"docs",previous:{title:"On Mouse Move",permalink:"/ja/docs/19/Events/onMouseMove"},next:{title:"On Open Detail",permalink:"/ja/docs/19/Events/onOpenDetail"}},u={},c=[{value:"Description",id:"description",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/ja/docs/19/FormObjects/inputOverview"},"Input")," of the ",(0,a.kt)("inlineCode",{parentName:"td"},"picture")," ",(0,a.kt)("a",{parentName:"td",href:"/ja/docs/19/FormObjects/propertiesObject#type"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},"The user has just released the left mouse button in a Picture object")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"On Mouse Up")," event is generated when the user has just released the left mouse button while dragging in a picture input. This event is useful, for example, when you want the user to be able to move, resize or draw objects in a SVG area."),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"On Mouse Up")," event is generated, you can get the local coordinates where the mouse button was released. These coordinates are returned in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MouseX")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MouseY")," System variables. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0)."),(0,a.kt)("p",null,"When using this event, you must also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Is waiting mouse up"),' command to handle cases where the "state manager" of the form is desynchronized, i.e. when the ',(0,a.kt)("inlineCode",{parentName:"p"},"On Mouse Up")," event is not received after a click. This is the case for example when an alert dialog box is displayed above the form while the mouse button has not been released. For more information and an example of use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"On Mouse Up")," event, please refer to the description of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Is waiting mouse up")," command."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/19/FormObjects/propertiesAction#draggable"},"Draggable")," option is enabled for the picture object, the ",(0,a.kt)("inlineCode",{parentName:"p"},"On Mouse Up")," event is never generated.")))}m.isMDXComponent=!0}}]);