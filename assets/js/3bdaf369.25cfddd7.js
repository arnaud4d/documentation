"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7701],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),b=o,u=d["".concat(s,".").concat(b)]||d[b]||m[b]||i;return t?n.createElement(u,a(a({ref:r},l),{},{components:t})):n.createElement(u,a({ref:r},l))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13083:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>b,default:()=>j,frontMatter:()=>d,metadata:()=>u,toc:()=>O});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&l(e,t,r[t]);if(p)for(var t of p(r))c.call(r,t)&&l(e,t,r[t]);return e};const d={id:"spinner",title:"Spinner"},b=void 0,u={unversionedId:"FormObjects/spinner",id:"version-19/FormObjects/spinner",title:"Spinner",description:"The spinner is a circular indicator that displays a continuous animation, like the Barber shop.",source:"@site/versioned_docs/version-19/FormObjects/spinner.md",sourceDirName:"FormObjects",slug:"/FormObjects/spinner",permalink:"/docs/19/FormObjects/spinner",draft:!1,tags:[],version:"19",frontMatter:{id:"spinner",title:"Spinner"},sidebar:"docs",previous:{title:"Shapes",permalink:"/docs/19/FormObjects/shapesOverview"},next:{title:"Splitter",permalink:"/docs/19/FormObjects/splitters"}},f={},O=[{value:"Supported Properties",id:"supported-properties",level:3}],h={toc:O};function j(e){var r,o=e,{components:l}=o,d=((e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t})(o,["components"]);return(0,n.kt)("wrapper",(r=m(m({},h),d),i(r,a({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The spinner is a circular indicator that displays a continuous animation, like the ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/progressIndicator#barber-shop"}),"Barber shop"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(54226).Z,width:"50",height:"44"})),(0,n.kt)("p",null,"You use this type of object to indicate that an operation such as establishing a network connection or a performing a calculation is underway. When this indicator is selected, ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesScale"}),"graphical Scale properties")," are not available."),(0,n.kt)("p",null,"When the form is executed, the object is not animated. You manage the animation by passing a value to its ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesObject#variable-or-expression"}),"associated variable or expression"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 (or any value other than 0) = Start animation,"),(0,n.kt)("li",{parentName:"ul"},"0 = Stop animation")),(0,n.kt)("h3",m({},{id:"supported-properties"}),"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," -",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}j.isMDXComponent=!0},54226:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/spinner-156274f06885f34b79b8fa4815b4e8a8.gif"}}]);