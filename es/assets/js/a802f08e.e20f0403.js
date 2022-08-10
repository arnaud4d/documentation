"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,u=d["".concat(s,".").concat(c)]||d[c]||h[c]||l;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),r=["components"],i={id:"looping",title:"Looping structures"},s=void 0,p={unversionedId:"Concepts/looping",id:"version-19/Concepts/looping",title:"Looping structures",description:"Looping structures repeat a sequence of statements until a condition is met or a number of times is reached.",source:"@site/versioned_docs/version-19/Concepts/cf_looping.md",sourceDirName:"Concepts",slug:"/Concepts/looping",permalink:"/es/docs/19/Concepts/looping",draft:!1,tags:[],version:"19",frontMatter:{id:"looping",title:"Looping structures"},sidebar:"docs",previous:{title:"Branching structures",permalink:"/es/docs/19/Concepts/branching"},next:{title:"Transformation tags",permalink:"/es/docs/19/Tags/tags"}},m={},h=[{value:"While...End while",id:"whileend-while",level:2},{value:"Example",id:"example",level:3},{value:"Repeat...Until",id:"repeatuntil",level:2},{value:"Example",id:"example-1",level:3},{value:"For...End for",id:"forend-for",level:2},{value:"Basic examples",id:"basic-examples",level:3},{value:"Decrementing variable counter",id:"decrementing-variable-counter",level:3},{value:"Incrementing the counter variable by more than one",id:"incrementing-the-counter-variable-by-more-than-one",level:3},{value:"Comparing looping structures",id:"comparing-looping-structures",level:3},{value:"Optimizing the execution of the For...End for loops",id:"optimizing-the-execution-of-the-forend-for-loops",level:3},{value:"Nested For...End for looping structures",id:"nested-forend-for-looping-structures",level:3},{value:"For each...End for each",id:"for-eachend-for-each",level:2},{value:"Loop through collections",id:"loop-through-collections",level:3},{value:"Example",id:"example-2",level:4},{value:"Loop through entity selections",id:"loop-through-entity-selections",level:3},{value:"Example",id:"example-3",level:4},{value:"Loop through object properties",id:"loop-through-object-properties",level:3},{value:"Example",id:"example-4",level:4},{value:"begin / end parameters",id:"begin--end-parameters",level:3},{value:"Example",id:"example-5",level:4},{value:"Until and While conditions",id:"until-and-while-conditions",level:3},{value:"Example",id:"example-6",level:4}],d={toc:h};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Looping structures repeat a sequence of statements until a condition is met or a number of times is reached. "),(0,l.kt)("h2",{id:"whileend-while"},"While...End while"),(0,l.kt)("p",null,"The formal syntax of the ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," control flow structure is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," While(Boolean_Expression)\n    statement(s)\n End while\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," loop executes the statements inside the loop as long as the Boolean expression is TRUE. It tests the Boolean expression at the beginning of the loop and does not enter the loop at all if the expression is FALSE."),(0,l.kt)("p",null,"It is common to initialize the value tested in the Boolean expression immediately before entering the ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," executes the loop."),(0,l.kt)("p",null,"The Boolean expression must be set by something inside the loop or else the loop will continue forever. The following loop continues forever because ",(0,l.kt)("em",{parentName:"p"},"NeverStop")," is always TRUE:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," NeverStop:=True\n While(NeverStop)\n End while\n")),(0,l.kt)("p",null,"If you find yourself in such a situation, where a method is executing uncontrolled, you can use the trace facilities to stop the loop and track down the problem. For more information about tracing a method, see the ",(0,l.kt)("a",{parentName:"p",href:"/es/docs/19/Concepts/error-handling"},"Error handling")," page."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' CONFIRM("Add a new record?") //The user wants to add a record?\n While(OK=1) //Loop as long as the user wants to\n    ADD RECORD([aTable]) //Add a new record\n End while //The loop always ends with End while\n')),(0,l.kt)("p",null,"In this example, the ",(0,l.kt)("inlineCode",{parentName:"p"},"OK")," system variable is set by the ",(0,l.kt)("inlineCode",{parentName:"p"},"CONFIRM")," command before the loop starts. If the user clicks the ",(0,l.kt)("strong",{parentName:"p"},"OK")," button in the confirmation dialog box, the ",(0,l.kt)("inlineCode",{parentName:"p"},"OK")," system variable is set to 1 and the loop starts. Otherwise, the ",(0,l.kt)("inlineCode",{parentName:"p"},"OK")," system variable is set to 0 and the loop is skipped. Once the loop starts, the ",(0,l.kt)("inlineCode",{parentName:"p"},"ADD RECORD")," command keeps the loop going because it sets the ",(0,l.kt)("inlineCode",{parentName:"p"},"OK")," system variable to 1 when the user saves the record. When the user cancels (does not save) the last record, the ",(0,l.kt)("inlineCode",{parentName:"p"},"OK")," system variable is set to 0 and the loop stops."),(0,l.kt)("h2",{id:"repeatuntil"},"Repeat...Until"),(0,l.kt)("p",null,"The formal syntax of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," control flow structure is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," Repeat\n    statement(s)\n Until(Boolean_Expression)\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," loop is similar to a ",(0,l.kt)("a",{parentName:"p",href:"flow-control#whileend-while"},"While...End while")," loop, except that it tests the Boolean expression after the loop rather than before. Thus, a ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," loop always executes the loop once, whereas if the Boolean expression is initially False, a ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," loop does not execute the loop at all."),(0,l.kt)("p",null,"The other difference with a ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," loop is that the loop continues until the Boolean expression is TRUE."),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("p",null,"Compare the following example with the example for the ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," loop. Note that the Boolean expression does not need to be initialized\u2014there is no ",(0,l.kt)("inlineCode",{parentName:"p"},"CONFIRM")," command to initialize the ",(0,l.kt)("inlineCode",{parentName:"p"},"OK")," variable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," Repeat\n    ADD RECORD([aTable])\n Until(OK=0)\n")),(0,l.kt)("h2",{id:"forend-for"},"For...End for"),(0,l.kt)("p",null,"The formal syntax of the ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," control flow structure is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})\n    statement(s)\n End for\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," loop is a loop controlled by a counter variable:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The counter variable ",(0,l.kt)("em",{parentName:"li"},"Counter_Variable")," is a numeric variable (Real or Long Integer) that the ",(0,l.kt)("inlineCode",{parentName:"li"},"For...End for")," loop initializes to the value specified by ",(0,l.kt)("em",{parentName:"li"},"Start_Expression"),"."),(0,l.kt)("li",{parentName:"ul"},"Each time the loop is executed, the counter variable is incremented by the value specified in the optional value ",(0,l.kt)("em",{parentName:"li"},"Increment_Expression"),". If you do not specify ",(0,l.kt)("em",{parentName:"li"},"Increment_Expression"),", the counter variable is incremented by one (1), which is the default."),(0,l.kt)("li",{parentName:"ul"},"When the counter variable passes the ",(0,l.kt)("em",{parentName:"li"},"End_Expression")," value, the loop stops.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Important:")," The numeric expressions ",(0,l.kt)("em",{parentName:"p"},"Start_Expression"),", ",(0,l.kt)("em",{parentName:"p"},"End_Expression")," and ",(0,l.kt)("em",{parentName:"p"},"Increment_Expression")," are evaluated once at the beginning of the loop. If these expressions are variables, changing one of these variables within the loop will not affect the loop."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tip:")," However, for special purposes, you can change the value of the counter variable ",(0,l.kt)("em",{parentName:"p"},"Counter_Variable")," within the loop; this will affect the loop."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Usually ",(0,l.kt)("em",{parentName:"li"},"Start_Expression")," is less than ",(0,l.kt)("em",{parentName:"li"},"End_Expression"),"."),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("em",{parentName:"li"},"Start_Expression")," and ",(0,l.kt)("em",{parentName:"li"},"End_Expression")," are equal, the loop will execute only once."),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("em",{parentName:"li"},"Start_Expression")," is greater than ",(0,l.kt)("em",{parentName:"li"},"End_Expression"),", the loop will not execute at all unless you specify a negative ",(0,l.kt)("em",{parentName:"li"},"Increment_Expression"),". See the examples.")),(0,l.kt)("h3",{id:"basic-examples"},"Basic examples"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The following example executes 100 iterations:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For(vCounter;1;100)\n  //Do something\n End for\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"The following example goes through all elements of the array anArray:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For($vlElem;1;Size of array(anArray))\n  //Do something with the element\n    anArray{$vlElem}:=...\n End for\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"The following example goes through all the characters of the text vtSomeText:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For($vlChar;1;Length(vtSomeText))\n  //Do something with the character if it is a TAB\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"The following example goes through the selected records for the table ","[aTable]",":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," FIRST RECORD([aTable])\n For($vlRecord;1;Records in selection([aTable]))\n  //Do something with the record\n    SEND RECORD([aTable])\n  //...\n  //Go to the next record\n    NEXT RECORD([aTable])\n End for\n")),(0,l.kt)("p",null,"Most of the ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," loops you will write in your projects will look like the ones listed in these examples. "),(0,l.kt)("h3",{id:"decrementing-variable-counter"},"Decrementing variable counter"),(0,l.kt)("p",null,"In some cases, you may want to have a loop whose counter variable is decreasing rather than increasing. To do so, you must specify ",(0,l.kt)("em",{parentName:"p"},"Start_Expression")," greater than ",(0,l.kt)("em",{parentName:"p"},"End_Expression")," and a negative ",(0,l.kt)("em",{parentName:"p"},"Increment_Expression"),". The following examples do the same thing as the previous examples, but in reverse order:"),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"The following example executes 100 iterations:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For(vCounter;100;1;-1)\n  //Do something\n End for\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"The following example goes through all elements of the array anArray:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For($vlElem;Size of array(anArray);1;-1)\n  //Do something with the element\n    anArray{$vlElem}:=...\n End for\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"The following example goes through all the characters of the text vtSomeText:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For($vlChar;Length(vtSomeText);1;-1)\n  //Do something with the character if it is a TAB\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n")),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"The following example goes through the selected records for the table ","[aTable]",":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," LAST RECORD([aTable])\n For($vlRecord;Records in selection([aTable]);1;-1)\n  //Do something with the record\n    SEND RECORD([aTable])\n  //...\n  //Go to the previous record\n    PREVIOUS RECORD([aTable])\n End for\n")),(0,l.kt)("h3",{id:"incrementing-the-counter-variable-by-more-than-one"},"Incrementing the counter variable by more than one"),(0,l.kt)("p",null,"If you need to, you can use an ",(0,l.kt)("em",{parentName:"p"},"Increment_Expression")," (positive or negative) whose absolute value is greater than one."),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"The following loop addresses only the even elements of the array anArray:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For($vlElem;2;Size of array(anArray);2)\n  //Do something with the element #2,#4...#2n\n    anArray{$vlElem}:=...\n End for\n")),(0,l.kt)("h3",{id:"comparing-looping-structures"},"Comparing looping structures"),(0,l.kt)("p",null,"Let's go back to the first ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," example. The following example executes 100 iterations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For(vCounter;1;100)\n  //Do something\n End for\n")),(0,l.kt)("p",null,"It is interesting to see how the ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," loop and ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," loop would perform the same action. Here is the equivalent ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," loop:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," $i:=1 //Initialize the counter\n While($i<=100) //Loop 100 times\n  //Do something\n    $i:=$i+1 //Need to increment the counter\n End while\n")),(0,l.kt)("p",null,"Here is the equivalent ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," loop:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," $i:=1 //Initialize the counter\n Repeat\n  //Do something\n    $i:=$i+1 //Need to increment the counter\n Until($i=100) //Loop 100 times\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tip:")," The ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," loop is usually faster than the ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," loop whenever possible."),(0,l.kt)("h3",{id:"optimizing-the-execution-of-the-forend-for-loops"},"Optimizing the execution of the For...End for loops"),(0,l.kt)("p",null,"You can use Real and Long Integer variables as well as interprocess, process, and local variable counters. For lengthy repetitive loops, especially in compiled mode, use local Long Integer variables."),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"Here is an example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," C_LONGINT($vlCounter) //use local Long Integer variables\n For($vlCounter;1;10000)\n  //Do something\n End for\n")),(0,l.kt)("h3",{id:"nested-forend-for-looping-structures"},"Nested For...End for looping structures"),(0,l.kt)("p",null,"You can nest as many control structures as you (reasonably) need. This includes nesting ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," loops. To avoid mistakes, make sure to use different counter variables for each looping structure."),(0,l.kt)("p",null,"Here are two examples:"),(0,l.kt)("ol",{start:11},(0,l.kt)("li",{parentName:"ol"},"The following example goes through all the elements of a two-dimensional array:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For($vlElem;1;Size of array(anArray))\n  //...\n  //Do something with the row\n  //...\n    For($vlSubElem;1;Size of array(anArray{$vlElem}))\n  //Do something with the element\n       anArray{$vlElem}{$vlSubElem}:=...\n    End for\n End for\n")),(0,l.kt)("ol",{start:12},(0,l.kt)("li",{parentName:"ol"},"The following example builds an array of pointers to all the date fields present in the database:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," ARRAY POINTER($apDateFields;0)\n $vlElem:=0\n For($vlTable;1;Get last table number)\n    If(Is table number valid($vlTable))\n       For($vlField;1;Get last field number($vlTable))\n          If(Is field number valid($vlTable;$vlField))\n             $vpField:=Field($vlTable;$vlField)\n             If(Type($vpField->)=Is date)\n                $vlElem:=$vlElem+1\n                INSERT IN ARRAY($apDateFields;$vlElem)\n                $apDateFields{$vlElem}:=$vpField\n             End if\n          End if\n       End for\n    End if\n End for\n")),(0,l.kt)("h2",{id:"for-eachend-for-each"},"For each...End for each"),(0,l.kt)("p",null,"The formal syntax of the ",(0,l.kt)("inlineCode",{parentName:"p"},"For each...End for each")," control flow structure is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}\n    statement(s)\n End for each\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"For each...End for each")," structure iterates a specified ",(0,l.kt)("em",{parentName:"p"},"Current_item")," over all values of the ",(0,l.kt)("em",{parentName:"p"},"Expression"),". The ",(0,l.kt)("em",{parentName:"p"},"Current_item")," type depends on the ",(0,l.kt)("em",{parentName:"p"},"Expression")," type. The ",(0,l.kt)("inlineCode",{parentName:"p"},"For each...End for each")," loop can iterate through three ",(0,l.kt)("em",{parentName:"p"},"Expression")," types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"collections: loop through each element of the collection,"),(0,l.kt)("li",{parentName:"ul"},"entity selections: loop through each entity,"),(0,l.kt)("li",{parentName:"ul"},"objects: loop through each object property.")),(0,l.kt)("p",null,"The following table compares the three types of ",(0,l.kt)("inlineCode",{parentName:"p"},"For each...End for each"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Loop through collections"),(0,l.kt)("th",{parentName:"tr",align:null},"Loop through entity selections"),(0,l.kt)("th",{parentName:"tr",align:null},"Loop through objects"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Current_Item type"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable of the same type as collection elements"),(0,l.kt)("td",{parentName:"tr",align:null},"Entity"),(0,l.kt)("td",{parentName:"tr",align:null},"Text variable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Expression type"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection (with elements of the same type)"),(0,l.kt)("td",{parentName:"tr",align:null},"Entity selection"),(0,l.kt)("td",{parentName:"tr",align:null},"Object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number of loops (by default)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of collection elements"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of entities in the selection"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of object properties")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Support of begin / end parameters"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The number of loops is evaluated at startup and will not change during the processing. Adding or removing items during the loop is usually not recommended since it may result in missing or redundant iterations."),(0,l.kt)("li",{parentName:"ul"},"By default, the enclosed ",(0,l.kt)("em",{parentName:"li"},"statement(s)")," are executed for each value in ",(0,l.kt)("em",{parentName:"li"},"Expression"),". It is, however, possible to exit the loop by testing a condition either at the begining of the loop (",(0,l.kt)("inlineCode",{parentName:"li"},"While"),") or at the end of the loop (",(0,l.kt)("inlineCode",{parentName:"li"},"Until"),")."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("em",{parentName:"li"},"begin")," and ",(0,l.kt)("em",{parentName:"li"},"end")," optional parameters can be used with collections and entity selections to define boundaries for the loop."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"For each...End for each")," loop can be used on a ",(0,l.kt)("strong",{parentName:"li"},"shared collection")," or a ",(0,l.kt)("strong",{parentName:"li"},"shared object"),". If your code needs to modify one or more element(s) of the collection or object properties, you need to use the ",(0,l.kt)("inlineCode",{parentName:"li"},"Use...End use")," keywords. Depending on your needs, you can call the ",(0,l.kt)("inlineCode",{parentName:"li"},"Use...End use")," keywords:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"before entering the loop, if items should be modified together for integrity reasons, or"),(0,l.kt)("li",{parentName:"ul"},"within the loop when only some elements/properties need to be modified and no integrity management is required. ")))),(0,l.kt)("h3",{id:"loop-through-collections"},"Loop through collections"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"For each...End for each")," is used with an ",(0,l.kt)("em",{parentName:"p"},"Expression")," of the ",(0,l.kt)("em",{parentName:"p"},"Collection")," type, the ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," parameter is a variable of the same type as the collection elements. By default, the number of loops is based on the number of items of the collection."),(0,l.kt)("p",null,"The collection must contain only elements of the same type, otherwise an error will be returned as soon as the ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," variable is assigned the first mismatched value type."),(0,l.kt)("p",null,"At each loop iteration, the ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," variable is automatically filled with the matching element of the collection. The following points must be taken into account:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the ",(0,l.kt)("em",{parentName:"li"},"Current_Item")," variable is of the object type or collection type (i.e. if ",(0,l.kt)("em",{parentName:"li"},"Expression")," is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("em",{parentName:"li"},"Current_Item")," variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops."),(0,l.kt)("li",{parentName:"ul"},"If the collection contains elements with a ",(0,l.kt)("strong",{parentName:"li"},"Null")," value, an error will be generated if the ",(0,l.kt)("em",{parentName:"li"},"Current_Item")," variable type does not support ",(0,l.kt)("strong",{parentName:"li"},"Null")," values (such as longint variables).")),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("p",null,"You want to compute some statistics for a collection of numbers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," C_COLLECTION($nums)\n $nums:=New collection(10;5001;6665;33;1;42;7850)\n C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)\n For each($item;$nums)\n    If($item%2=0)\n       $vEven:=$vEven+1\n    Else\n       $vOdd:=$vOdd+1\n    End if\n    Case of\n       :($item<5000)\n          $vUnder:=$vUnder+1\n       :($item>6000)\n          $vOver:=$vOver+1\n    End case\n End for each\n  //$vEven=3, $vOdd=4\n  //$vUnder=4,$vOver=2\n")),(0,l.kt)("h3",{id:"loop-through-entity-selections"},"Loop through entity selections"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"For each...End for each")," is used with an ",(0,l.kt)("em",{parentName:"p"},"Expression")," of the ",(0,l.kt)("em",{parentName:"p"},"Entity selection")," type, the ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," parameter is the entity that is currently processed."),(0,l.kt)("p",null,"The number of loops is based on the number of entities in the entity selection. On each loop iteration, the ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," parameter is automatically filled with the entity of the entity selection that is currently processed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop."),(0,l.kt)("p",null,"Keep in mind that any modifications applied on the current entity must be saved explicitly using ",(0,l.kt)("inlineCode",{parentName:"p"},"entity.save( )"),"."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("p",null,"You want to raise the salary of all British employees in an entity selection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," C_OBJECT(emp)\n For each(emp;ds.Employees.query(\"country='UK'\"))\n    emp.salary:=emp.salary*1,03\n    emp.save()\n End for each\n")),(0,l.kt)("h3",{id:"loop-through-object-properties"},"Loop through object properties"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"For each...End for each")," is used with an ",(0,l.kt)("em",{parentName:"p"},"Expression")," of the Object type, the ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," parameter is a text variable automatically filled with the name of the currently processed property. "),(0,l.kt)("p",null,"The properties of the object are processed according to their order of creation. During the loop, properties can be added to or removed from the object, without modifying the number of loops that will remain based on the original number of properties of the object."),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("p",null,"You want to switch the names to uppercase in the following object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'{\n    "firstname": "gregory",\n    "lastname": "badikora",\n    "age": 20\n}\n')),(0,l.kt)("p",null,"You can write:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," For each(property;vObject)\n    If(Value type(vObject[property])=Is text)\n       vObject[property]:=Uppercase(vObject[property])\n    End if\n End for each\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "firstname": "GREGORY",\n    "lastname": "BADIKORA",\n    "age": 20\n}\n')),(0,l.kt)("h3",{id:"begin--end-parameters"},"begin / end parameters"),(0,l.kt)("p",null,"You can define bounds to the iteration using the optional begin and end parameters."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," The ",(0,l.kt)("em",{parentName:"p"},"begin")," and ",(0,l.kt)("em",{parentName:"p"},"end")," parameters can only be used in iterations through collections and entity selections (they are ignored on object properties)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"begin")," parameter, pass the element position in ",(0,l.kt)("em",{parentName:"li"},"Expression")," at which to start the iteration (",(0,l.kt)("em",{parentName:"li"},"begin")," is included)."),(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"end")," parameter, you can also pass the element position in ",(0,l.kt)("em",{parentName:"li"},"Expression")," at which to stop the iteration (",(0,l.kt)("em",{parentName:"li"},"end")," is excluded). ")),(0,l.kt)("p",null,"If ",(0,l.kt)("em",{parentName:"p"},"end")," is omitted or if ",(0,l.kt)("em",{parentName:"p"},"end")," is greater than the number of elements in ",(0,l.kt)("em",{parentName:"p"},"Expression"),", elements are iterated from ",(0,l.kt)("em",{parentName:"p"},"begin")," until the last one (included).\nIf the ",(0,l.kt)("em",{parentName:"p"},"begin")," and ",(0,l.kt)("em",{parentName:"p"},"end")," parameters are positive values, they represent actual positions of elements in ",(0,l.kt)("em",{parentName:"p"},"Expression"),".\nIf ",(0,l.kt)("em",{parentName:"p"},"begin")," is a negative value, it is recalculed as ",(0,l.kt)("inlineCode",{parentName:"p"},"begin:=begin+Expression size")," (it is considered as the offset from the end of ",(0,l.kt)("em",{parentName:"p"},"Expression"),"). If the calculated value is negative, ",(0,l.kt)("em",{parentName:"p"},"begin")," is set to 0.\n",(0,l.kt)("strong",{parentName:"p"},"Note:")," Even if begin is negative, the iteration is still performed in the standard order.\nIf ",(0,l.kt)("em",{parentName:"p"},"end")," is a negative value, it is recalculed as ",(0,l.kt)("inlineCode",{parentName:"p"},"end:=end+Expression size")),(0,l.kt)("p",null,"For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a collection contains 10 elements (numbered from 0 to 9)"),(0,l.kt)("li",{parentName:"ul"},"begin=-4 -> begin=-4+10=6 -> iteration starts at the 6th element (#5)"),(0,l.kt)("li",{parentName:"ul"},"end=-2 -> end=-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element. ")),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' C_COLLECTION($col;$col2)\n $col:=New collection("a";"b";"c";"d";"e")\n $col2:=New collection(1;2;3)\n C_TEXT($item)\n For each($item;$col;0;3)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c"]\n For each($item;$col;-2;-1)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c","d"]\n')),(0,l.kt)("h3",{id:"until-and-while-conditions"},"Until and While conditions"),(0,l.kt)("p",null,"You can control the ",(0,l.kt)("inlineCode",{parentName:"p"},"For each...End for each")," execution by adding an ",(0,l.kt)("inlineCode",{parentName:"p"},"Until")," or a ",(0,l.kt)("inlineCode",{parentName:"p"},"While")," condition to the loop. When an ",(0,l.kt)("inlineCode",{parentName:"p"},"Until(condition)")," statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to ",(0,l.kt)("inlineCode",{parentName:"p"},"True"),", whereas when is case of a ",(0,l.kt)("inlineCode",{parentName:"p"},"While(condition)")," statement, the iteration will stop when the condition is first evaluated to ",(0,l.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,l.kt)("p",null,"You can pass either keyword depending on your needs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Until")," condition is tested at the end of each iteration, so if the ",(0,l.kt)("em",{parentName:"li"},"Expression")," is not empty or null, the loop will be executed at least once."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"While")," condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all.")),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)\n \n $total:=0\n For each($num;$colNum)While($total<30) //tested at the beginning\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)\n \n $total:=1000\n For each($num;$colNum)Until($total>30) //tested at the end\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 1001 (1000+1)\n")))}c.isMDXComponent=!0}}]);