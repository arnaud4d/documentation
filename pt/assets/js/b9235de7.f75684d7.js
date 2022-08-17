"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),b=o,u=d["".concat(s,".").concat(b)]||d[b]||m[b]||i;return r?n.createElement(u,a(a({ref:t},l),{},{components:r})):n.createElement(u,a({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>j,frontMatter:()=>d,metadata:()=>u,toc:()=>O});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&l(e,r,t[r]);return e};const d={id:"spinner",title:"Spinner"},b=void 0,u={unversionedId:"FormObjects/spinner",id:"FormObjects/spinner",title:"Spinner",description:"The spinner is a circular indicator that displays a continuous animation, like the Barber shop.",source:"@site/docs/FormObjects/spinner.md",sourceDirName:"FormObjects",slug:"/FormObjects/spinner",permalink:"/docs/pt/next/FormObjects/spinner",draft:!1,tags:[],version:"current",frontMatter:{id:"spinner",title:"Spinner"},sidebar:"docs",previous:{title:"Shapes",permalink:"/docs/pt/next/FormObjects/shapesOverview"},next:{title:"Splitter",permalink:"/docs/pt/next/FormObjects/splitters"}},f={},O=[{value:"Supported Properties",id:"supported-properties",level:3}],h={toc:O};function j(e){var t,o=e,{components:l}=o,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(o,["components"]);return(0,n.kt)("wrapper",(t=m(m({},h),d),i(t,a({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The spinner is a circular indicator that displays a continuous animation, like the ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/progressIndicator#barber-shop"}),"Barber shop"),". "),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(95716).Z,width:"50",height:"44"})),(0,n.kt)("p",null,"You use this type of object to indicate that an operation such as establishing a network connection or a performing a calculation is underway. When this indicator is selected, ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesScale"}),"graphical Scale properties")," are not available."),(0,n.kt)("p",null,"When the form is executed, the object is not animated. You manage the animation by passing a value to its ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#variable-or-expression"}),"associated variable or expression"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 (or any value other than 0) = Start animation,"),(0,n.kt)("li",{parentName:"ul"},"0 = Stop animation")),(0,n.kt)("h3",m({},{id:"supported-properties"}),"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," -",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}j.isMDXComponent=!0},95716:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/spinner-156274f06885f34b79b8fa4815b4e8a8.gif"}}]);