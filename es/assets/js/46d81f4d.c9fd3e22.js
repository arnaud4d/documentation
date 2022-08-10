"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"control-flow",title:"Control flow overview"},s=void 0,c={unversionedId:"Concepts/control-flow",id:"version-18/Concepts/control-flow",title:"Control flow overview",description:"Regardless of the simplicity or complexity of a method, you will always use one or more of three types of programming structures. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:",source:"@site/versioned_docs/version-18/Concepts/flow-control.md",sourceDirName:"Concepts",slug:"/Concepts/control-flow",permalink:"/main/es/docs/18/Concepts/control-flow",draft:!1,tags:[],version:"18",frontMatter:{id:"control-flow",title:"Control flow overview"},sidebar:"docs",previous:{title:"Shared objects and collections",permalink:"/main/es/docs/18/Concepts/shared"},next:{title:"Branching structures",permalink:"/main/es/docs/18/Concepts/branching"}},p={},u=[],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Regardless of the simplicity or complexity of a method, you will always use one or more of three types of programming structures. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sequential"),": a sequential structure is a simple, linear structure. A sequence is a series of statements that 4D executes one after the other, from first to last. A one-line routine, frequently used for object methods, is the simplest case of a sequential structure. For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"[People]lastName:=Uppercase([People]lastName)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/main/es/docs/18/Concepts/branching"},"Branching")),": A branching structure allows methods to test a condition and take alternative paths, depending on the result. The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. One branching structure is the ",(0,a.kt)("inlineCode",{parentName:"li"},"If...Else...End if")," structure, which directs program flow along one of two paths. The other branching structure is the ",(0,a.kt)("inlineCode",{parentName:"li"},"Case of...Else...End case")," structure, which directs program flow to one of many paths."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/main/es/docs/18/Concepts/looping"},"Looping")),": When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. To deal with this need, the 4D language provides the following looping structures:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"While...End while")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Repeat...Until")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"For...End for")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"For each...End for each"),(0,a.kt)("br",null),"\nThe loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Each looping structure can be used in either way, but ",(0,a.kt)("inlineCode",{parentName:"li"},"While")," loops and ",(0,a.kt)("inlineCode",{parentName:"li"},"Repeat")," loops are more appropriate for repeating until a condition is met, and ",(0,a.kt)("inlineCode",{parentName:"li"},"For")," loops are more appropriate for looping a specified number of times. ",(0,a.kt)("inlineCode",{parentName:"li"},"For each...End for each")," allows mixing both ways and is designed to loop within objects and collections.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:"),' 4D allows you to embed programming structures up to a "depth" of 512 levels.'))}d.isMDXComponent=!0}}]);