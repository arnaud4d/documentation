"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"interpreted-compiled",title:"Interpreted and Compiled modes"},l=void 0,p={unversionedId:"Concepts/interpreted-compiled",id:"version-19-R6/Concepts/interpreted-compiled",title:"Interpreted and Compiled modes",description:"4D applications can work in interpreted or compiled mode:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Concepts/interpreted.md",sourceDirName:"Concepts",slug:"/Concepts/interpreted-compiled",permalink:"/docs/es/Concepts/interpreted-compiled",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"interpreted-compiled",title:"Interpreted and Compiled modes"},sidebar:"docs",previous:{title:"Error handling",permalink:"/docs/es/Concepts/error-handling"},next:{title:"Components",permalink:"/docs/es/Concepts/components"}},s={},c=[{value:"Differences between interpreted and compiled code",id:"differences-between-interpreted-and-compiled-code",level:2},{value:"Using Compiler Directives with the Interpreter",id:"using-compiler-directives-with-the-interpreter",level:2},{value:"Using pointers to avoid retyping",id:"using-pointers-to-avoid-retyping",level:2}],d={toc:c};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4D applications can work in ",(0,r.kt)("strong",{parentName:"p"},"interpreted")," or ",(0,r.kt)("strong",{parentName:"p"},"compiled")," mode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in interpreted mode, statements are read and translated in machine language at the moment of their execution. You can add or modify the code whenever you need to, the application is automatically updated."),(0,r.kt)("li",{parentName:"ul"},"in compiled mode, all methods are read and translated once, at the compilation step. Afterwards, the application only contains assembly level instructions are available, it is no longer possible to edit the code.")),(0,r.kt)("p",null,"The advantages of the compilation are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Speed"),": Your application can run from 3 to 1,000 times faster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code checking"),": Your application is scanned for the consistency of code. Both logical and syntactical conflicts are detected."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Protection"),": Once your application is compiled, you can delete the interpreted code. Then, the compiled application is functionally identical to the original, except that the structure and methods cannot be viewed or modified, deliberately or inadvertently."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stand-alone double-clickable applications"),": compiled applications can also be transformed into stand-alone applications (.EXE files) with their own icon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Preemptive mode"),": only compiled code can be executed in preemptive processes.")),(0,r.kt)("h2",a({},{id:"differences-between-interpreted-and-compiled-code"}),"Differences between interpreted and compiled code"),(0,r.kt)("p",null,"Although application will work the same way in interpreted and compiled modes, there are some differences to know when you write code that will be compiled. The 4D interpreter is usually more flexible than the compiler."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Compiled"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Interpreted"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"You cannot have a method with the same name as a variable."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"No error is generated, but priority is given to the method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"All variables must by typed, either through a compiler directive (ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"C_LONGINT"),"), or by the compiler at compilation time."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Variables can be typed on-the-fly (not recommended)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"You cannot change the data type of any variable or array."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Changing the data type of a variable or an array is possible (not recommended)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"You cannot change a one-dimensional array to a two-dimensional array, or change a two-dimensional array to a one-dimensional array."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Possible")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Although the compiler will type the variable for you, you should specify the data type of a variable by using compiler directives where the data type is ambiguous, such as in a form."),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Undefined")," function always returns False for variables. Variables are always defined."),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),'If you have checked the "Can be run in preemptive processes" property for the method, the code must not call any thread-unsafe commands or other thread-unsafe methods.'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Preemptive process properties are ignored")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The ",(0,r.kt)("inlineCode",{parentName:"td"},"IDLE")," command is necessary to call 4D in specific loops"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"It is always possible to interrupt 4D")))),(0,r.kt)("h2",a({},{id:"using-compiler-directives-with-the-interpreter"}),"Using Compiler Directives with the Interpreter"),(0,r.kt)("p",null,"Compiler directives are not required for uncompiled applications. The interpreter automatically types each variable according to how it is used in each statement, and a variable can be freely retyped throughout the application project."),(0,r.kt)("p",null,"Because of this flexibility, it is possible that an application can perform differently in interpreted and compiled modes."),(0,r.kt)("p",null,"For example, if you write:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"C_LONGINT(MyInt)\n")),(0,r.kt)("p",null,"and elsewhere in the project, you write:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"MyInt:=3.1416\n")),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"MyInt")," is assigned the same value (3) in both the interpreted and compiled modes, provided the compiler directive is interpreted ",(0,r.kt)("em",{parentName:"p"},"prior")," to the assignment statement."),(0,r.kt)("p",null,"The 4D interpreter uses compiler directives to type variables. When the interpreter encounters a compiler directive, it types the variable according to the directive. If a subsequent statement tries to assign an incorrect value (e.g., assigning an alphanumeric value to a numeric variable) the assignment will not take place and will generate an error."),(0,r.kt)("p",null,"The order in which the two statements appear is irrelevant to the compiler, because it first scans the entire project for compiler directives. The interpreter, however, is not systematic. It interprets statements in the order in which they are executed. That order, of course, can change from session to session, depending on what the user does. For this reason, it is important to design your project so that your compiler directives are executed prior to any statements containing declared variables."),(0,r.kt)("h2",a({},{id:"using-pointers-to-avoid-retyping"}),"Using pointers to avoid retyping"),(0,r.kt)("p",null,"A variable cannot be retyped. However, it is possible to use a pointer to refer to variables of different data types. For example, the following code is allowed in both interpreted and compiled modes:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'C_POINTER($p)\nC_TEXT($name)\nC_LONGINT($age)\n\n$name:="Smith"\n$age:=50\n\n$p:=->$name //text target for the pointer\n$p->:="Wesson" //assigns a text value\n\n$p:=->$age  \n// new target of different type for the pointer\n$p->:=55 //assigns a number value\n')),(0,r.kt)("p",null,"Imagine a function that returns the length (number of charaters) of values that can be of any type."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"  // Calc_Length (how many characters)\n  // $1 = pointer to flexible variable type, numeric, text, time, boolean\n\nC_POINTER($1)\nC_TEXT($result)  \nC_LONGINT($0)\n$result:=String($1->)\n$0:=Length($result)\n")),(0,r.kt)("p",null,"Then this method can be called:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var4:=True\n\n$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)\n\nALERT("Total length: "+String($vLength))\n')))}m.isMDXComponent=!0}}]);