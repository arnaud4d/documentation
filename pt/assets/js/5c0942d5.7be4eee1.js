"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(b,p(p({ref:t},l),{},{components:r})):n.createElement(b,p({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>l});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"spinner",title:"Spinner"},a=void 0,s={unversionedId:"FormObjects/spinner",id:"version-18/FormObjects/spinner",title:"Spinner",description:"Overview",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/FormObjects/spinner.md",sourceDirName:"FormObjects",slug:"/FormObjects/spinner",permalink:"/docs/pt/18/FormObjects/spinner",draft:!1,tags:[],version:"18",frontMatter:{id:"spinner",title:"Spinner"},sidebar:"docs",previous:{title:"Shapes",permalink:"/docs/pt/18/FormObjects/shapesOverview"},next:{title:"Splitter",permalink:"/docs/pt/18/FormObjects/splitters"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Supported Properties",id:"supported-properties",level:3}],m={toc:l};function u(e){var{components:t}=e,p=i(e,["components"]);return(0,n.kt)("wrapper",o({},m,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"The spinner is a circular indicator that displays a continuous animation, like the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/progressIndicator#barber-shop"}),"Barber shop"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(96751).Z,width:"50",height:"44"})),(0,n.kt)("p",null,"You use this type of object to indicate that an operation such as establishing a network connection or a performing a calculation is underway. When this indicator is selected, ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesScale"}),"graphical Scale properties")," are not available."),(0,n.kt)("p",null,"When the form is executed, the object is not animated. You manage the animation by passing a value to its ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#variable-or-expression"}),"associated variable or expression"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 (or any value other than 0) = Start animation,"),(0,n.kt)("li",{parentName:"ul"},"0 = Stop animation")),(0,n.kt)("h3",o({},{id:"supported-properties"}),"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," -",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}u.isMDXComponent=!0},96751:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/spinner-156274f06885f34b79b8fa4815b4e8a8.gif"}}]);