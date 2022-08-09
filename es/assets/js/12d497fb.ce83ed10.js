"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50599],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,u=c["".concat(i,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(u,s(s({ref:t},m),{},{components:a})):n.createElement(u,s({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5637:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],l={id:"parameters",title:"Parameters"},i=void 0,p={unversionedId:"Concepts/parameters",id:"version-18/Concepts/parameters",title:"Parameters",description:"Using parameters",source:"@site/versioned_docs/version-18/Concepts/parameters.md",sourceDirName:"Concepts",slug:"/Concepts/parameters",permalink:"/docs/es/docs/18/Concepts/parameters",draft:!1,tags:[],version:"18",frontMatter:{id:"parameters",title:"Parameters"},sidebar:"docs",previous:{title:"Methods",permalink:"/docs/es/docs/18/Concepts/methods"},next:{title:"Shared objects and collections",permalink:"/docs/es/docs/18/Concepts/shared"}},m={},d=[{value:"Using parameters",id:"using-parameters",level:2},{value:"Supported expressions",id:"supported-expressions",level:3},{value:"Functions",id:"functions",level:2},{value:"Declaring parameters",id:"declaring-parameters",level:2},{value:"Values or references",id:"values-or-references",level:2},{value:"Particular cases: objects and collections",id:"particular-cases-objects-and-collections",level:3},{value:"Named parameters",id:"named-parameters",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Parameter indirection",id:"parameter-indirection",level:2},{value:"Declaring generic parameters",id:"declaring-generic-parameters",level:3}],c={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"using-parameters"},"Using parameters"),(0,o.kt)("p",null,"You'll often find that you need to pass data to your methods. This is easily done with parameters."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")," (or ",(0,o.kt)("strong",{parentName:"p"},"arguments"),") are pieces of data that a method needs in order to perform its task. The terms ",(0,o.kt)("em",{parentName:"p"},"parameter")," and ",(0,o.kt)("em",{parentName:"p"},"argument")," are used interchangeably throughout this manual. Parameters are also passed to built-in 4D commands. In this example, the string \u201cHello\u201d is an argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ALERT")," built-in command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'ALERT("Hello")\n')),(0,o.kt)("p",null,"Parameters are passed to methods in the same way. For example, if a project method named DO SOMETHING accepted three parameters, a call to the method might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"DO SOMETHING(WithThis;AndThat;ThisWay)\n")),(0,o.kt)("p",null,"The parameters are separated by semicolons (;). Their value is evaluated at the moment of the call."),(0,o.kt)("p",null,"In the subroutine (the method that is called), the value of each parameter is automatically copied into sequentially numbered local variables: $1, $2, $3, and so on. The numbering of the local variables represents the order of the parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //Code of the method DO SOMETHING\n  //Assuming all parameters are of the text type\n C_TEXT($1;$2;$3)\n ALERT("I received "+$1+" and "+$2+" and also "+$3)\n  //$1 contains the WithThis parameter\n  //$2 contains the AndThat parameter\n  //$3 contains the ThisWay parameter\n')),(0,o.kt)("p",null,"Within the subroutine, you can use the parameters $1, $2... in the same way you would use any other local variable. However, in the case where you use commands that modify the value of the variable passed as parameter (for example ",(0,o.kt)("inlineCode",{parentName:"p"},"Find in field"),"), the parameters $1, $2, and so on cannot be used directly. You must first copy them into standard local variables (for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"$myvar:=$1"),")."),(0,o.kt)("p",null,"The same principles are used when methods are executed through dedicated commands, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  \n//pass the !05/05/10! date as parameter to the SetCalendarDate  \n// in the context of a subform\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," For a good execution of code, you need to make sure that all ",(0,o.kt)("inlineCode",{parentName:"p"},"$1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$2"),"... parameters are correctly declared within called methods (see ",(0,o.kt)("a",{parentName:"p",href:"#declaring-parameters"},"Declaring parameters")," below)."),(0,o.kt)("h3",{id:"supported-expressions"},"Supported expressions"),(0,o.kt)("p",null,"You can use any ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/docs/18/Concepts/quick-tour#expression-types"},"expression")," as parameter, except:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"tables"),(0,o.kt)("li",{parentName:"ul"},"arrays")),(0,o.kt)("p",null,"Tables or array expressions can only be passed ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/docs/18/Concepts/pointer#pointers-as-parameters-to-methods"},"as reference using a pointer"),"."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,"Data can be returned from methods. A method that returns a value is called a function."),(0,o.kt)("p",null,"4D or 4D Plug-in commands that return a value are also called functions."),(0,o.kt)("p",null,"For example, the following line is a statement that uses the built-in function, ",(0,o.kt)("inlineCode",{parentName:"p"},"Length"),", to return the length of a string. The statement puts the value returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"Length")," in a variable called ",(0,o.kt)("em",{parentName:"p"},"MyLength"),". Here is the statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'MyLength:=Length("How did I get here?")\n')),(0,o.kt)("p",null,"Any subroutine can return a value. The value to be returned is put into the local variable ",(0,o.kt)("inlineCode",{parentName:"p"},"$0"),"."),(0,o.kt)("p",null,"For example, the following function, called ",(0,o.kt)("inlineCode",{parentName:"p"},"Uppercase4"),", returns a string with the first four characters of the string passed to it in uppercase:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"$0:=Uppercase(Substring($1;1;4))+Substring($1;5)\n")),(0,o.kt)("p",null,"The following is an example that uses the Uppercase4 function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'NewPhrase:=Uppercase4("This is good.")\n')),(0,o.kt)("p",null,"In this example, the variable ",(0,o.kt)("em",{parentName:"p"},"NewPhrase")," gets \u201cTHIS is good.\u201d"),(0,o.kt)("p",null,"The function result, ",(0,o.kt)("inlineCode",{parentName:"p"},"$0"),", is a local variable within the subroutine. It can be used as such within the subroutine. For example, in the previous ",(0,o.kt)("inlineCode",{parentName:"p"},"DO SOMETHING")," example, ",(0,o.kt)("inlineCode",{parentName:"p"},"$0")," was first assigned the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"$1"),", then used as parameter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ALERT")," command. Within the subroutine, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"$0")," in the same way you would use any other local variable. It is 4D that returns the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"$0")," (as it is when the subroutine ends) to the called method."),(0,o.kt)("h2",{id:"declaring-parameters"},"Declaring parameters"),(0,o.kt)("p",null,"Even if it is not mandatory in ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/docs/18/Concepts/interpreted-compiled"},"interpreted mode"),", you must declare each parameter in the called methods to prevent any trouble."),(0,o.kt)("p",null,"In the following example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"OneMethodAmongOthers")," project method declares three parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"  // OneMethodAmongOthers Project Method\n  // OneMethodAmongOthers ( Real ; Date { ; Long } )\n  // OneMethodAmongOthers ( Amount ; Date { ; Ratio } )\n\n C_REAL($1) // 1st parameter is of type Real\n C_DATE($2) // 2nd parameter is of type Date\n C_LONGINT($3) // 3rd parameter is of type Long Integer\n")),(0,o.kt)("p",null,"In the following example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Capitalize")," project method accepts a text parameter and returns a text result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"  // Capitalize Project Method\n  // Capitalize ( Text ) -> Text\n  // Capitalize ( Source string ) -> Capitalized string\n\n C_TEXT($0;$1)\n $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))\n")),(0,o.kt)("p",null,"Using commands such as ",(0,o.kt)("inlineCode",{parentName:"p"},"New process")," with process methods that accept parameters also require that parameters are explicitely declared in the called method. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_TEXT($string)\nC_LONGINT($idProc;$int)\nC_OBJECT($obj)\n\n$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)\n')),(0,o.kt)("p",null,'This code can be executed in compiled mode only if "foo_method" declares its parameters:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"//foo_method\nC_TEXT($1)\nC_LONGINT($2)\nC_OBJECT($3)\n...\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:"),' For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". Within this method, you can predeclare the parameters for each method, for example:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," C_REAL(OneMethodAmongOthers;$1)\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/docs/18/Concepts/interpreted-compiled"},"Interpreted and compiled modes")," page for more information."),(0,o.kt)("p",null,'Parameter declaration is also mandatory in the following contexts (these contexts do not support declaration in a "Compiler" method):'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Database methods\nFor example, the ",(0,o.kt)("inlineCode",{parentName:"li"},"On Web Connection Database Method")," receives six parameters, $1 to $6, of the data type Text. At the beginning of the database method, you must write (even if all parameters are not used):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"// On Web Connection\nC_TEXT($1;$2;$3;$4;$5;$6)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Triggers\nThe $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the trigger itself.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Form objects that accept the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Drag Over")," form event\nThe $0 parameter (Longint), which is the result of the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Drag Over")," form event, is typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the object method.\n",(0,o.kt)("strong",{parentName:"p"},"Note:")," The compiler does not initialize the $0 parameter. So, as soon as you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Drag Over")," form event, you must initialize $0. For example:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," C_LONGINT($0)\n If(Form event=On Drag Over)\n    $0:=0\n    ...\n    If($DataType=Is picture)\n       $0:=-1\n    End if\n    ...\n End if\n")),(0,o.kt)("h2",{id:"values-or-references"},"Values or references"),(0,o.kt)("p",null,"When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the ",(0,o.kt)("strong",{parentName:"p"},"resulting value")," to the $1, $2... local variables in the subroutine (see ",(0,o.kt)("a",{parentName:"p",href:"#using-parameters"},"Using parameters"),"). The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the subroutine, it does not change the value in the calling method. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'    //Here is some code from the method MY_METHOD\nDO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\nALERT([People]Name)\n\n    //Here is the code of the method DO_SOMETHING\n $1:=Uppercase($1)\n ALERT($1)\n')),(0,o.kt)("p",null,"The alert box displayed by ",(0,o.kt)("inlineCode",{parentName:"p"},"DO_SOMETHING"),' will read "WILLIAMS" and the alert box displayed by ',(0,o.kt)("inlineCode",{parentName:"p"},"MY_METHOD"),' will read "williams". The method locally changed the value of the parameter $1, but this does not affect the value of the field ',(0,o.kt)("inlineCode",{parentName:"p"},"[People]Name")," passed as parameter by the method ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_METHOD"),"."),(0,o.kt)("p",null,"There are two ways to make the method ",(0,o.kt)("inlineCode",{parentName:"p"},"DO_SOMETHING")," change the value of the field:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rather than passing the field to the method, you pass a pointer to it, so you would write:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //Here is some code from the method MY_METHOD\n DO_SOMETHING(->[People]Name) //Let\'s say [People]Name value is "williams"\n ALERT([People]Last Name)\n\n  //Here the code of the method DO_SOMETHING\n $1->:=Uppercase($1->)\n ALERT($1->)\n')),(0,o.kt)("p",null,"Here the parameter is not the field, but a pointer to it. Therefore, within the ",(0,o.kt)("inlineCode",{parentName:"p"},"DO SOMETHING")," method, $1 is no longer the value of the field but a pointer to the field. The object ",(0,o.kt)("strong",{parentName:"p"},"referenced"),' by $1 ($1-> in the code above) is the actual field. Consequently, changing the referenced object goes beyond the scope of the subroutine, and the actual field is affected. In this example, both alert boxes will read "WILLIAMS".'),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Rather than having the method ",(0,o.kt)("inlineCode",{parentName:"li"},"DO_SOMETHING"),' "doing something," you can rewrite the method so it returns a value. Thus you would write:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'    //Here is some code from the method MY METHOD\n [People]Name:=DO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\n ALERT([People]Name)\n\n    //Here the code of the method DO SOMETHING\n $0:=Uppercase($1)\n ALERT($0)\n')),(0,o.kt)("p",null,"This second technique of returning a value by a subroutine is called \u201cusing a function.\u201d This is described in the ",(0,o.kt)("a",{parentName:"p",href:"#functions"},"Functions")," paragraph."),(0,o.kt)("h3",{id:"particular-cases-objects-and-collections"},"Particular cases: objects and collections"),(0,o.kt)("p",null,"You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal ",(0,o.kt)("em",{parentName:"p"},"pointer"),")."),(0,o.kt)("p",null,"Consequently, when using such data types as parameters, ",(0,o.kt)("inlineCode",{parentName:"p"},"$1, $2...")," do not contain ",(0,o.kt)("em",{parentName:"p"},"values")," but ",(0,o.kt)("em",{parentName:"p"},"references"),". Modifying the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"$1, $2...")," parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/docs/18/Concepts/pointer#pointers-as-parameters-to-methods"},"pointers"),", except that ",(0,o.kt)("inlineCode",{parentName:"p"},"$1, $2...")," parameters do not need to be dereferenced in the subroutine."),(0,o.kt)("p",null,"For example, consider the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreatePerson")," method that creates an object and sends it as a parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //CreatePerson\n C_OBJECT($person)\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeAge")," method adds 10 to the Age attribute of the received object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"  //ChangeAge\n C_OBJECT($1)\n $1.Age:=$1.Age+10\n ALERT(String($1.Age))\n")),(0,o.kt)("p",null,"When you execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreatePerson"),' method, both alert boxes will read "50" since the same object reference is handled by both methods.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4D Server:"),' When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. In these cases, copies of object and collection parameters are sent instead of references.'),(0,o.kt)("h2",{id:"named-parameters"},"Named parameters"),(0,o.kt)("p",null,"Using objects as parameters allow you to handle ",(0,o.kt)("strong",{parentName:"p"},"named parameters"),". This programming style is simple, flexible, and easy to read."),(0,o.kt)("p",null,"For example, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreatePerson")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //CreatePerson\n C_OBJECT($person)\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n')),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeAge")," method you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //ChangeAge\n C_OBJECT($1;$para)\n $para:=$1  \n $para.Age:=$para.Age+10\n ALERT($para.Name+" is "+String($para.Age)+" years old.")\n')),(0,o.kt)("p",null,"This provides a powerful way to define ",(0,o.kt)("a",{parentName:"p",href:"#optional-parameters"},"optional parameters")," (see also below). To handle missing parameters, you can either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check if all expected parameters are provided by comparing them to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Null")," value, or"),(0,o.kt)("li",{parentName:"ul"},"preset parameter values, or"),(0,o.kt)("li",{parentName:"ul"},"use them as empty values.")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeAge")," method above, both Age and Name properties are mandatory and would produce errors if they were missing. To avoid this case, you can just write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //ChangeAge\n C_OBJECT($1;$para)\n $para:=$1  \n $para.Age:=Num($para.Age)+10\n ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n')),(0,o.kt)("p",null,'Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.'),(0,o.kt)("p",null,"Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'$person:=New object("Name";"Smith";"Age";40;"toAdd";10)\nChangeAge($person)\n\n//ChangeAge\nC_OBJECT($1;$para)\n$para:=$1  \nIf ($para.toAdd=Null)\n    $para.toAdd:=10\nEnd if\n$para.Age:=Num($para.Age)+$para.toAdd\nALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n')),(0,o.kt)("p",null,"The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years."),(0,o.kt)("p",null,"With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order."),(0,o.kt)("h2",{id:"optional-parameters"},"Optional parameters"),(0,o.kt)("p",null,"In the ",(0,o.kt)("em",{parentName:"p"},"4D Language Reference")," manual, the { } characters (braces) indicate optional parameters. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"ALERT (message{; okButtonTitle})")," means that the ",(0,o.kt)("em",{parentName:"p"},"okButtonTitle")," parameter may be omitted when calling the command. You can call it in the following ways:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'ALERT("Are you sure?";"Yes I am") //2 parameters\nALERT("Time is over") //1 parameter\n')),(0,o.kt)("p",null,"4D project methods also accept such optional parameters, starting from the right. The issue with optional parameters is how to handle the case where some of them are missing in the called method - it should never produce an error. A good practice is to assign default values to unused parameters."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When optional parameters are needed in your methods, you might also consider using ",(0,o.kt)("a",{parentName:"p",href:"#named-parameters"},"Named parameters")," which provide a flexible way to handle variable numbers of parameters.  ")),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Count parameters")," command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received."),(0,o.kt)("p",null,"The following example displays a text message and can insert the text into a document on disk or in a 4D Write Pro area:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"// APPEND TEXT Project Method\n// APPEND TEXT ( Text { ; Text { ; Object } } )\n// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )\n\n C_TEXT($1;$2)\n C_OBJECT($3)\n\n ALERT($1)\n If(Count parameters>=3)\n    WP SET TEXT($3;$1;wk append)\n Else\n    If(Count parameters>=2)\n       TEXT TO DOCUMENT($2;$1)\n    End if\n End if\n")),(0,o.kt)("p",null,"After this project method has been added to your application, you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'APPEND TEXT(vtSomeText) //Will only display the  message\nAPPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path\nAPPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea\n')),(0,o.kt)("h2",{id:"parameter-indirection"},"Parameter indirection"),(0,o.kt)("p",null,"4D project methods accept a variable number of parameters of the same type, starting from the right. This principle is called ",(0,o.kt)("strong",{parentName:"p"},"parameter indirection"),". Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Count parameters")," command you can then address those parameters with a ",(0,o.kt)("inlineCode",{parentName:"p"},"For...End for")," loop and the parameter indirection syntax."),(0,o.kt)("p",null,"In the following example, the project method ",(0,o.kt)("inlineCode",{parentName:"p"},"SEND PACKETS")," accepts a time parameter followed by a variable number of text parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"  //SEND PACKETS Project Method\n  //SEND PACKETS ( Time ; Text { ; Text2... ; TextN } )\n  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )\n\n C_TIME($1)\n C_TEXT(${2})\n C_LONGINT($vlPacket)\n\n For($vlPacket;2;Count parameters)\n    SEND PACKET($1;${$vlPacket})\n End for\n")),(0,o.kt)("p",null,"Parameter indirection is best managed if you respect the following convention: if only some of the parameters are addressed by indirection, they should be passed after the others. Within the method, an indirection address is formatted: ${$i}, where $i is a numeric variable. ${$i} is called a ",(0,o.kt)("strong",{parentName:"p"},"generic parameter"),"."),(0,o.kt)("p",null,"For example, consider a function that adds values and returns the sum formatted according to a format that is passed as a parameter. Each time this method is called, the number of values to be added may vary. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call."),(0,o.kt)("p",null,"This function is called in the following manner:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},' Result:=MySum("##0.00";125,2;33,5;24)\n\n')),(0,o.kt)("p",null,"In this case, the calling method will get the string \u201c182.70\u201d, which is the sum of the numbers, formatted as specified. The function's parameters must be passed in the correct order: first the format and then the values."),(0,o.kt)("p",null,"Here is the function, named ",(0,o.kt)("inlineCode",{parentName:"p"},"MySum"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," $Sum:=0\n For($i;2;Count parameters)\n    $Sum:=$Sum+${$i}\n End for\n $0:=String($Sum;$1)\n")),(0,o.kt)("p",null,"This function can now be called in various ways:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},' Result:=MySum("##0.00";125,2;33,5;24)\n Result:=MySum("000";1;18;4;23;17)\n')),(0,o.kt)("h3",{id:"declaring-generic-parameters"},"Declaring generic parameters"),(0,o.kt)("p",null,"As with other local variables, it is not mandatory to declare generic parameters by compiler directive. However, it is recommended to avoid any ambiguity. To declare these parameters, you use a compiler directive to which you pass ${N} as a parameter, where N specifies the first generic parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," C_LONGINT(${4})\n")),(0,o.kt)("p",null,"This command means that starting with the fourth  parameter (included), the method can receive a variable number of parameters of longint type. $1, $2 and $3 can be of any data type. However, if you use $2 by indirection, the data type used will be the generic type. Thus, it will be of the data type Longint, even if for you it was, for instance, of the data type Real."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The number in the declaration has to be a constant and not a variable."))}h.isMDXComponent=!0}}]);