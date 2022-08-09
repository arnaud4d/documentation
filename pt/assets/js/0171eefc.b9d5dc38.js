"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24618],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),f=l,m=c["".concat(u,".").concat(f)]||c[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},37310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=t(87462),l=t(63366),a=(t(67294),t(3905)),i=["components"],o={id:"null-undefined",title:"Null and Undefined"},u=void 0,d={unversionedId:"Concepts/null-undefined",id:"version-18/Concepts/null-undefined",title:"Null and Undefined",description:"Null",source:"@site/versioned_docs/version-18/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/pt/docs/18/Concepts/null-undefined",draft:!1,tags:[],version:"18",frontMatter:{id:"null-undefined",title:"Null and Undefined"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/pt/docs/18/Concepts/date"},next:{title:"Number (Real, Longint, Integer)",permalink:"/docs/pt/docs/18/Concepts/number"}},p={},s=[{value:"Null",id:"null",level:2},{value:"Undefined",id:"undefined",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s};function f(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"null"},"Null"),(0,a.kt)("p",null,"Null is a special data type with only one possible value: ",(0,a.kt)("strong",{parentName:"p"},"null"),". This value is returned by an expression that does not contain any value."),(0,a.kt)("p",null,"In the 4D language and for object field attributes, null values are managed through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Null")," function. This function can be used with the following expressions for setting or comparing the null value:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"object attributes"),(0,a.kt)("li",{parentName:"ul"},"collection elements"),(0,a.kt)("li",{parentName:"ul"},"variables of the object, collection, pointer, picture, or variant type.")),(0,a.kt)("h2",{id:"undefined"},"Undefined"),(0,a.kt)("p",null,"Undefined is not actually a data type. It denotes a variable that has not yet been defined. A function (a project method that returns a result) can return an undefined value if, within the method, the function result ($0) is assigned an undefined expression (an expression calculated with at least one undefined variable). A field cannot be undefined (the ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," command always returns False for a field). A variant variable has ",(0,a.kt)("strong",{parentName:"p"},"undefined")," as default value."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here are the different results of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," command as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Null")," command with object properties, depending on the context:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($vEmp)\n$vEmp:=New object\n$vEmp.name:="Smith"\n$vEmp.children:=Null\n\n$undefined:=Undefined($vEmp.name) // False\n$null:=($vEmp.name=Null) //False\n\n$undefined:=Undefined($vEmp.children) // False\n$null:=($vEmp.children=Null) //True\n\n$undefined:=Undefined($vEmp.parent) // True\n$null:=($vEmp.parent=Null) //True\n')))}f.isMDXComponent=!0}}]);