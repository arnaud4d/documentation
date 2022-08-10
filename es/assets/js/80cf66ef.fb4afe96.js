"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29899],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),c=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(h,s(s({ref:a},p),{},{components:t})):r.createElement(h,s({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42224:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(87462),n=t(63366),o=(t(67294),t(3905)),s=["components"],l={id:"variables",title:"Variables"},i=void 0,c={unversionedId:"Concepts/variables",id:"version-18/Concepts/variables",title:"Variables",description:"Data in 4D is stored in two fundamentally different ways. Fields store data permanently on disk; variables store data temporarily in memory.",source:"@site/versioned_docs/version-18/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/es/docs/18/Concepts/variables",draft:!1,tags:[],version:"18",frontMatter:{id:"variables",title:"Variables"},sidebar:"docs",previous:{title:"Variant",permalink:"/es/docs/18/Concepts/variant"},next:{title:"Arrays",permalink:"/es/docs/18/Concepts/arrays"}},p={},d=[{value:"Creating Variables",id:"creating-variables",level:2},{value:"Assigning Data",id:"assigning-data",level:2},{value:"Local, Process, and Interprocess variables",id:"local-process-and-interprocess-variables",level:2},{value:"Local variables",id:"local-variables",level:3},{value:"Process variables",id:"process-variables",level:3},{value:"Interprocess variables",id:"interprocess-variables",level:3}],u={toc:d};function m(e){var a=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data in 4D is stored in two fundamentally different ways. ",(0,o.kt)("strong",{parentName:"p"},"Fields")," store data permanently on disk; ",(0,o.kt)("strong",{parentName:"p"},"variables")," store data temporarily in memory."),(0,o.kt)("p",null,"When you set up your 4D database, you specify the names and types of fields that you want to use. Variables are much the same\u2014you also give them names and different types (see ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/18/Concepts/data-types"},"Data types"),")."),(0,o.kt)("p",null,"Variables are language objects; you can create and use variables that will never appear on the screen. In your forms, you can display variables (except Pointer and BLOB) on the screen, enter data into them, and print them in reports. In this way, enterable and non-enterable area variables act just like fields, and the same built-in controls are available when you create them. Form variables can also control buttons, list boxes, scrollable areas, picture buttons, and so on, or display results of calculations that do not need to be saved."),(0,o.kt)("h2",{id:"creating-variables"},"Creating Variables"),(0,o.kt)("p",null,'You create variables by declaring them using one of the "Compiler" or "Arrays" theme commands.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:"),"Arrays are a particular type of variables. An array is an ordered series of variables of the same type. For more information, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/18/Concepts/arrays"},"Arrays"),"."),(0,o.kt)("p",null,"For example, if you want to define a text variable, you write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," C_TEXT(myText)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Although it is usually not recommended, you can create variables simply by using them; you do not necessarily need to formally define them as you do with fields. For example, if you want to create a variable that will hold the current date plus 30 days, you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," MyDate:=Current date+30 //MyDate is created and gets the current date plus 30 days\n")),(0,o.kt)("p",null,"Once created, you can use a variable wherever you need it in your database. For example, you might need to store the text variable in a field of same type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," [MyTable]MyField:=MyText\n")),(0,o.kt)("p",null,"The following are some basic variable declarations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"\n C_BLOB(vxMyBlob) // The process variable vxMyBlob is declared as a variable of type BLOB\n C_DATE($vdCurDate) // The local variable $vdCurDate is declared as a variable of type Date\n C_LONGINT(vg1;vg2;vg3) // The 3 process variables vg1, vg2 and vg3 are declared as variables of type longint  \n C_OBJECT($vObj) // The local variable $vObj is declared as a variable of type Object\n C_COLLECTION($vCol) // The local variable $vCol is declared as a variable of type Collection\n ARRAY LONGINT(alAnArray;10) //The process alAnArray variable is declared as a Longint array of 10 elements\n")),(0,o.kt)("h2",{id:"assigning-data"},"Assigning Data"),(0,o.kt)("p",null,"Data can be put into and copied out of variables and arrays. Putting data into a variable is called ",(0,o.kt)("strong",{parentName:"p"},"assigning the data to the variable")," and is done with the assignment operator (:=). The assignment operator is also used to assign data to fields."),(0,o.kt)("p",null,"The assignment operator is the primary way to create a variable and to put data into it. You write the name of the variable that you want to create on the left side of the assignment operator. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"MyNumber:=3\n")),(0,o.kt)("p",null,"creates the variable ",(0,o.kt)("em",{parentName:"p"},"MyNumber")," and puts the number 3 into it. If MyNumber already exists, then the number 3 is just put into it."),(0,o.kt)("p",null,"Of course, variables would not be very useful if you could not get data out of them. Once again, you use the assignment operator. If you need to put the value of MyNumber in a field called ","[Products]","Size, you would write ",(0,o.kt)("em",{parentName:"p"},"MyNumber")," on the right side of the assignment operator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"[Products]Size:=MyNumber\n")),(0,o.kt)("p",null,"In this case, ",(0,o.kt)("em",{parentName:"p"},"[Products]","Size")," would be equal to 3. This example is rather simple, but it illustrates the fundamental way that data is transferred from one place to another by using the language."),(0,o.kt)("p",null,"You assign data to array elements by using curly braces ({...}):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'atNames{1}:="Richard"\n')),(0,o.kt)("h2",{id:"local-process-and-interprocess-variables"},"Local, Process, and Interprocess variables"),(0,o.kt)("p",null,"You can create three types of variables: ",(0,o.kt)("strong",{parentName:"p"},"local"),", ",(0,o.kt)("strong",{parentName:"p"},"process"),", and ",(0,o.kt)("strong",{parentName:"p"},"interprocess"),". The difference between the three types of elements is their scope, or the objects to which they are available."),(0,o.kt)("h3",{id:"local-variables"},"Local variables"),(0,o.kt)("p",null,"A local variable is, as its name implies, local to a method\u2014accessible only within the method in which it was created and not accessible outside of that method. Being local to a method is formally referred to as being \u201clocal in scope.\u201d Local variables are used to restrict a variable so that it works only within the method."),(0,o.kt)("p",null,"You may want to use a local variable to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoid conflicts with the names of other variables"),(0,o.kt)("li",{parentName:"ul"},"Use data temporarily"),(0,o.kt)("li",{parentName:"ul"},"Reduce the number of process variables")),(0,o.kt)("p",null,"The name of a local variable always starts with a dollar sign ($) and can contain up to 31 additional characters. If you enter a longer name, 4D truncates it to the appropriate length."),(0,o.kt)("p",null,"When you are working in a database with many methods and variables, you often find that you need to use a variable only within the method on which you are working. You can create and use a local variable in the method without worrying about whether you have used the same variable name somewhere else."),(0,o.kt)("p",null,"Frequently, in a database, small pieces of information are needed from the user. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," command can obtain this information. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},' $vsID:=Request("Please enter your ID:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n')),(0,o.kt)("p",null,"This method simply asks the user to enter an ID. It puts the response into a local variable, $vsID, and then searches for the ID that the user entered. When this method finishes, the $vsID local variable is erased from memory. This is fine, because the variable is needed only once and only in this method."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Parameters $1, $2... passed to methods are local variables. For more information, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/18/Concepts/parameters"},"Parameters"),"."),(0,o.kt)("h3",{id:"process-variables"},"Process variables"),(0,o.kt)("p",null,"A process variable is available only within a process. It is accessible to the process method and any other method called from within the process."),(0,o.kt)("p",null,"A process variable does not have a prefix before its name. A process variable name can contain up to 31 characters."),(0,o.kt)("p",null,"In interpreted mode, variables are maintained dynamically; they are created and erased from memory \u201con the fly.\u201d In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. For example, the variable myVar is one variable in the process P_1 and another one in the process P_2."),(0,o.kt)("p",null,"A process can \u201cpeek and poke\u201d process variables from another process using the commands ",(0,o.kt)("inlineCode",{parentName:"p"},"GET PROCESS VARIABLE")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SET PROCESS VARIABLE"),". It is good programming practice to restrict the use of these commands to the situation for which they were added to 4D:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Interprocess communication at specific places or your code"),(0,o.kt)("li",{parentName:"ul"},"Handling of interprocess drag and drop"),(0,o.kt)("li",{parentName:"ul"},"In Client/Server, communication between processes on client machines and the stored procedures running on the server machines")),(0,o.kt)("p",null,"For more information, see the chapter ",(0,o.kt)("strong",{parentName:"p"},"Processes")," and the description of these commands."),(0,o.kt)("h3",{id:"interprocess-variables"},"Interprocess variables"),(0,o.kt)("p",null,"Interprocess variables are available throughout the database and are shared across all cooperative processes. They are primarily used to share information between processes."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Use of interprocess variables is not recommended since they are not available from preemptive processes and tend to make the code less maintainable.  ")),(0,o.kt)("p",null,"The name of an interprocess variable always begins with the symbols (",(0,o.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign\u2014 followed by 31 characters."),(0,o.kt)("p",null,"In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable."))}m.isMDXComponent=!0}}]);