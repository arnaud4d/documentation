"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1786],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),v=c(a),d=r,y=v["".concat(p,".").concat(d)]||v[d]||u[d]||i;return a?n.createElement(y,l(l({ref:t},s),{},{components:a})):n.createElement(y,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},8094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:"variant",title:"Variant"},p=void 0,c={unversionedId:"Concepts/variant",id:"Concepts/variant",title:"Variant",description:"Variant is a variable type which allows encapsulating data of any valid regular type in a variable. Typically, this variable type can be used to write generic code returning or receiving values for which the type is not known. This is the case for example for code handling object attributes.",source:"@site/docs/Concepts/dt_variant.md",sourceDirName:"Concepts",slug:"/Concepts/variant",permalink:"/docs/pt/docs/next/Concepts/variant",draft:!1,tags:[],version:"current",frontMatter:{id:"variant",title:"Variant"},sidebar:"docs",previous:{title:"Time",permalink:"/docs/pt/docs/next/Concepts/time"},next:{title:"Variables",permalink:"/docs/pt/docs/next/Concepts/variables"}},s={},u=[],v={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Variant is a variable type which allows encapsulating data of any valid regular type in a variable. Typically, this variable type can be used to write generic code returning or receiving values for which the type is not known. This is the case for example for code handling object attributes.  "),(0,i.kt)("p",null,"A variant type variable can contain a value of the following data types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BLOB"),(0,i.kt)("li",{parentName:"ul"},"boolean"),(0,i.kt)("li",{parentName:"ul"},"collection"),(0,i.kt)("li",{parentName:"ul"},"date"),(0,i.kt)("li",{parentName:"ul"},"longint"),(0,i.kt)("li",{parentName:"ul"},"object"),(0,i.kt)("li",{parentName:"ul"},"picture"),(0,i.kt)("li",{parentName:"ul"},"pointer"),(0,i.kt)("li",{parentName:"ul"},"real"),(0,i.kt)("li",{parentName:"ul"},"text"),(0,i.kt)("li",{parentName:"ul"},"time"),(0,i.kt)("li",{parentName:"ul"},"null"),(0,i.kt)("li",{parentName:"ul"},"undefined")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Arrays cannot be stored in variant variables. ")),(0,i.kt)("p",null,"In both interpreted and in compiled modes, a same variant variable can be assigned contents of different types. Unlike regular variable types, the variant variable content type is different from the variant variable type itself. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_VARIANT($variant)\n\n$variant:="hello world"\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 2 (Is text)\n\n$variant:=42\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 1 (Is real)\n')),(0,i.kt)("p",null,"You can use variant variables wherever variables are expected, you only need to make sure than the variable content data type is of the expected type. When accessing variant variables, only their current value is taken into account. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_VARIANT($v)\n$v:="hello world"\n$v2:=$v //assign variable to another variable\n\n$t:=Type($v) // 12 (Is variant)\n$t2:=Type($v2) // 2 (Is text)\n')),(0,i.kt)("p",null,"Variant can be used to declare method parameters ($0, $1,...) that can be of various types. In this case, you can build your code by testing the parameter value type, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"C_VARIANT($1)\nCase of\n: (Value type($1)=Is longint)\n...\n: (Value type($1)=Is text)\n...\nEnd case\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When variant variables are not necessary (i.e. when the data type is known), it is recommended to use regular typed variables. Regular typed variables provide better performance, make code more clear and are helpful for the compiler to prevent bugs related to passing unexpected data types.")))}d.isMDXComponent=!0}}]);