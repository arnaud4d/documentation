"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"control-flow",title:"Control flow overview"},s=void 0,p={unversionedId:"Concepts/control-flow",id:"version-19-R6/Concepts/control-flow",title:"Control flow overview",description:"Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:",source:"@site/versioned_docs/version-19-R6/Concepts/flow-control.md",sourceDirName:"Concepts",slug:"/Concepts/control-flow",permalink:"/ja/docs/Concepts/control-flow",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"control-flow",title:"Control flow overview"},sidebar:"docs",previous:{title:"Classes",permalink:"/ja/docs/Concepts/classes"},next:{title:"Branching structures",permalink:"/ja/docs/Concepts/branching"}},c={},u=[{value:"return {expression}",id:"return-expression",level:2},{value:"Example",id:"example",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sequential"),": a sequential structure is a simple, linear structure. A sequence is a series of statements that 4D executes one after the other, from first to last. A one-line routine, frequently used for object methods, is the simplest case of a sequential structure. For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"[People]lastName:=Uppercase([People]lastName)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/ja/docs/Concepts/branching"},"Branching")),": A branching structure allows methods to test a condition and take alternative paths, depending on the result. The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. One branching structure is the ",(0,a.kt)("inlineCode",{parentName:"li"},"If...Else...End if")," structure, which directs program flow along one of two paths. The other branching structure is the ",(0,a.kt)("inlineCode",{parentName:"li"},"Case of...Else...End case")," structure, which directs program flow to one of many paths."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/ja/docs/Concepts/looping"},"Looping")),": When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. To deal with this need, the 4D language provides the following looping structures:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"While...End while")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Repeat...Until")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"For...End for")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"For each...End for each"),(0,a.kt)("br",null),"\nThe loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Each looping structure can be used in either way, but ",(0,a.kt)("inlineCode",{parentName:"li"},"While")," loops and ",(0,a.kt)("inlineCode",{parentName:"li"},"Repeat")," loops are more appropriate for repeating until a condition is met, and ",(0,a.kt)("inlineCode",{parentName:"li"},"For")," loops are more appropriate for looping a specified number of times. ",(0,a.kt)("inlineCode",{parentName:"li"},"For each...End for each")," allows mixing both ways and is designed to loop within objects and collections.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:"),' 4D allows you to embed programming structures up to a "depth" of 512 levels.'),(0,a.kt)("h2",{id:"return-expression"},"return {expression}"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v19 R4"),(0,a.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement can be called from anywhere. When a ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement is used in a function or method, the execution of the function or method is stopped. The remaining code is not executed and the control is returned to the caller."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement can be used to ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/Concepts/parameters#return-expression"},"return a value")," to the caller."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'var $message : Text\nvar $i : Integer\n\nWhile (True) //infinite loop\n $i:=$i+1\n $message+=String($i)+"A\\r"  // until 5\n logConsole($message)\n If ($i=5)\n  return //stops the loop\n End if \n $message+=String($i)+"B\\r"  // until 4\n logConsole($message)\nEnd while \n$message+=String($i)+"C\\r"  //never executed \nlogConsole($message)\n\n// 1A\n// 1B\n// 2A\n// 2B\n// 3A\n// 3B\n// 4A\n// 4B\n// 5A\n\n')))}d.isMDXComponent=!0}}]);