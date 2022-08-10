"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97099],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=s,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=t(87462),s=t(63366),o=(t(67294),t(3905)),r=["components"],l={id:"branching",title:"Branching structures"},i=void 0,p={unversionedId:"Concepts/branching",id:"version-19/Concepts/branching",title:"Branching structures",description:"A branching structure allows methods to test a condition and take alternative paths, depending on the result.",source:"@site/versioned_docs/version-19/Concepts/cf_branching.md",sourceDirName:"Concepts",slug:"/Concepts/branching",permalink:"/docs/fr/19/Concepts/branching",draft:!1,tags:[],version:"19",frontMatter:{id:"branching",title:"Branching structures"},sidebar:"docs",previous:{title:"Control flow overview",permalink:"/docs/fr/19/Concepts/control-flow"},next:{title:"Looping structures",permalink:"/docs/fr/19/Concepts/looping"}},c={},d=[{value:"If...Else...End if",id:"ifelseend-if",level:2},{value:"Example",id:"example",level:3},{value:"Case of...Else...End case",id:"case-ofelseend-case",level:2},{value:"Example",id:"example-1",level:3}],u={toc:d};function m(e){var n=e.components,t=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A branching structure allows methods to test a condition and take alternative paths, depending on the result."),(0,o.kt)("h2",{id:"ifelseend-if"},"If...Else...End if"),(0,o.kt)("p",null,"The formal syntax of the ",(0,o.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," control flow structure is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," If(Boolean_Expression)\n    statement(s)\n Else\n    statement(s)\n End if\n")),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Else")," part is optional; you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," If(Boolean_Expression)\n    statement(s)\n End if\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," structure lets your method choose between two actions, depending on whether a test (a Boolean expression) is TRUE or FALSE. When the Boolean expression is TRUE, the statements immediately following the test are executed. If the Boolean expression is FALSE, the statements following the Else statement are executed. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Else")," statement is optional; if you omit Else, execution continues with the first statement (if any) following the ",(0,o.kt)("inlineCode",{parentName:"p"},"End if"),"."),(0,o.kt)("p",null,"Note that the Boolean expression is always fully evaluated. Consider in particular the following test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," If(MethodA & MethodB)\n    ...\n End if\n")),(0,o.kt)("p",null,"The expression is TRUE only if both methods are TRUE. However, even if ",(0,o.kt)("em",{parentName:"p"},"MethodA")," returns FALSE, 4D will still evaluate ",(0,o.kt)("em",{parentName:"p"},"MethodB"),", which is a useless waste of time. In this case, it is more interesting to use a structure like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," If(MethodA)\n    If(MethodB)\n       ...\n    End if\n End if\n")),(0,o.kt)("p",null,"The result is similar and ",(0,o.kt)("em",{parentName:"p"},"MethodB")," is evaluated only if necessary. "),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  // Ask the user to enter a name\n $Find:=Request(Type a name)\n If(OK=1)\n    QUERY([People];[People]LastName=$Find)\n Else\n    ALERT("You did not enter a name.")\n End if \n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tip:")," Branching can be performed without statements to be executed in one case or the other. When developing an algorithm or a specialized application, nothing prevents you from writing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," If(Boolean_Expression)\n Else\n    statement(s)\n End if\n")),(0,o.kt)("p",null,"or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," If(Boolean_Expression)\n    statement(s)\n Else\n End if\n")),(0,o.kt)("h2",{id:"case-ofelseend-case"},"Case of...Else...End case"),(0,o.kt)("p",null,"The formal syntax of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Case of...Else...End case")," control flow structure is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," Case of\n    :(Boolean_Expression)\n       statement(s)\n    :(Boolean_Expression)\n       statement(s)\n       .\n       .\n       .\n \n    :(Boolean_Expression)\n       statement(s)\n    Else\n       statement(s)\n End case\n")),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Else")," part is optional; you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," Case of\n    :(Boolean_Expression)\n       statement(s)\n    :(Boolean_Expression)\n       statement(s)\n       .\n       .\n       .\n \n    :(Boolean_Expression)\n       statement(s)\n End case\n")),(0,o.kt)("p",null,"As with the ",(0,o.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," structure, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Case of...Else...End case")," structure also lets your method choose between alternative actions. Unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"If...Else...End")," if structure, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Case of...Else...End case")," structure can test a reasonable unlimited number of Boolean expressions and take action depending on which one is TRUE."),(0,o.kt)("p",null,"Each Boolean expression is prefaced by a colon (",(0,o.kt)("inlineCode",{parentName:"p"},":"),"). This combination of the colon and the Boolean expression is called a case. For example, the following line is a case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},":(bValidate=1)\n")),(0,o.kt)("p",null,"Only the statements following the first TRUE case (and up to the next case) will be executed. If none of the cases are TRUE, none of the statements will be executed (if no ",(0,o.kt)("inlineCode",{parentName:"p"},"Else")," part is included)."),(0,o.kt)("p",null,"You can include an Else statement after the last case. If all of the cases are FALSE, the statements following the ",(0,o.kt)("inlineCode",{parentName:"p"},"Else")," will be executed."),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("p",null,"This example tests a numeric variable and displays an alert box with a word in it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},' Case of\n    :(vResult=1) //Test if the number is 1\n       ALERT("One.") //If it is 1, display an alert\n    :(vResult=2) //Test if the number is 2\n       ALERT("Two.") //If it is 2, display an alert\n    :(vResult=3) //Test if the number is 3\n       ALERT("Three.") //If it is 3, display an alert\n    Else //If it is not 1, 2, or 3, display an alert\n       ALERT("It was not one, two, or three.")\n End case\n')),(0,o.kt)("p",null,"For comparison, here is the ",(0,o.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," version of the same method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},' If(vResult=1) //Test if the number is 1\n    ALERT("One.") //If it is 1, display an alert\n Else\n    If(vResult=2) //Test if the number is 2\n       ALERT("Two.") //If it is 2, display an alert\n    Else\n       If(vResult=3) //Test if the number is 3\n          ALERT("Three.") //If it is 3, display an alert\n       Else //If it is not 1, 2, or 3, display an alert\n          ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if\n')),(0,o.kt)("p",null,"Remember that with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Case of...Else...End case")," structure, only the first TRUE case is executed. Even if two or more cases are TRUE, only the statements following the first TRUE case will be executed."),(0,o.kt)("p",null,"Consequently, when you want to implement hierarchical tests, you should make sure the condition statements that are lower in the hierarchical scheme appear first in the test sequence. For example, the test for the presence of condition1 covers the test for the presence of condition1&condition2 and should therefore be located last in the test sequence. For example, the following code will never see its last condition detected:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," Case of\n    :(vResult=1)\n       ... //statement(s)\n    :((vResult=1) & (vCondition#2)) //this case will never be detected\n       ... //statement(s)\n End case\n")),(0,o.kt)("p",null,'In the code above, the presence of the second condition is not detected since the test "vResult=1" branches off the code before any further testing. For the code to operate properly, you can write it as follows:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," Case of\n    :((vResult=1) & (vCondition#2)) //this case will be detected first\n       ... //statement(s)\n    :(vResult=1)\n       ... //statement(s)\n End case\n")),(0,o.kt)("p",null,"Also, if you want to implement hierarchical testing, you may consider using hierarchical code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tip:")," Branching can be performed without statements to be executed in one case or another. When developing an algorithm or a specialized application, nothing prevents you from writing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," Case of\n    :(Boolean_Expression)\n    :(Boolean_Expression)\n      ...\n \n    :(Boolean_Expression)\n       statement(s)\n    Else\n       statement(s)\n End case\n")),(0,o.kt)("p",null,"or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," Case of\n    :(Boolean_Expression)\n    :(Boolean_Expression)\n       statement(s)\n       ...\n        \n    :(Boolean_Expression)\n       statement(s)\n    Else\n End case\n")),(0,o.kt)("p",null,"or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," Case of\n    Else\n       statement(s)\n End case\n")))}m.isMDXComponent=!0}}]);