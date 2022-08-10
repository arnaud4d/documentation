"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83236],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>c});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,h=u["".concat(i,".").concat(c)]||u[c]||d[c]||o;return t?n.createElement(h,l(l({ref:a},m),{},{components:t})):n.createElement(h,l({ref:a},m))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60820:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],s={id:"parameters",title:"Parameters"},i=void 0,p={unversionedId:"Concepts/parameters",id:"version-19/Concepts/parameters",title:"Parameters",description:"You'll often find that you need to pass data to your methods and functions. This is easily done with parameters.",source:"@site/versioned_docs/version-19/Concepts/parameters.md",sourceDirName:"Concepts",slug:"/Concepts/parameters",permalink:"/docs/es/19/Concepts/parameters",draft:!1,tags:[],version:"19",frontMatter:{id:"parameters",title:"Parameters"},sidebar:"docs",previous:{title:"Methods",permalink:"/docs/es/19/Concepts/methods"},next:{title:"Shared objects and collections",permalink:"/docs/es/19/Concepts/shared"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Named parameters",id:"named-parameters",level:2},{value:"Returned value",id:"returned-value",level:3},{value:"Supported data types",id:"supported-data-types",level:3},{value:"Sequential parameters",id:"sequential-parameters",level:2},{value:"Returned value",id:"returned-value-1",level:3},{value:"Supported data types",id:"supported-data-types-1",level:3},{value:"Parameter indirection (${N})",id:"parameter-indirection-n",level:2},{value:"Using generic parameters",id:"using-generic-parameters",level:3},{value:"Declaring generic parameters",id:"declaring-generic-parameters",level:3},{value:"Declaring parameters for compiled mode",id:"declaring-parameters-for-compiled-mode",level:2},{value:"Wrong parameter type",id:"wrong-parameter-type",level:2},{value:"Input/Output variables",id:"inputoutput-variables",level:2},{value:"Using object properties as named parameters",id:"using-object-properties-as-named-parameters",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Values or references",id:"values-or-references",level:2},{value:"Particular cases: objects and collections",id:"particular-cases-objects-and-collections",level:3}],u={toc:d};function c(e){var a=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You'll often find that you need to pass data to your methods and functions. This is easily done with parameters."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")," (or ",(0,o.kt)("strong",{parentName:"p"},"arguments"),") are pieces of data that a method or a class function needs in order to perform its task. The terms ",(0,o.kt)("em",{parentName:"p"},"parameter")," and ",(0,o.kt)("em",{parentName:"p"},"argument")," are used interchangeably throughout this manual. Parameters are also passed to built-in 4D commands. In this example, the string \u201cHello\u201d is an argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ALERT")," built-in command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'ALERT("Hello")\n')),(0,o.kt)("p",null,"Parameters are passed to methods or class functions in the same way. For example, if a class function named ",(0,o.kt)("inlineCode",{parentName:"p"},"getArea()")," accepts two parameters, a call to the class function might look like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$area:=$o.getArea(50;100)\n")),(0,o.kt)("p",null,"Or, if a project method named ",(0,o.kt)("inlineCode",{parentName:"p"},"DO_SOMETHING")," accepts three parameters, a call to the method might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"DO_SOMETHING($WithThis;$AndThat;$ThisWay)\n")),(0,o.kt)("p",null,"The input parameters are separated by semicolons (;). "),(0,o.kt)("p",null,"The same principles are used when methods are executed through dedicated commands, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  \n//pass the !05/05/20! date as parameter to the SetCalendarDate  \n//in the context of a subform\n')),(0,o.kt)("p",null,"Data can also be ",(0,o.kt)("strong",{parentName:"p"},"returned")," from methods and class functions. For example, the following line is a statement that uses the built-in command, ",(0,o.kt)("inlineCode",{parentName:"p"},"Length"),", to return the length of a string. The statement puts the value returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"Length")," in a variable called ",(0,o.kt)("em",{parentName:"p"},"MyLength"),". Here is the statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'MyLength:=Length("How did I get here?")\n')),(0,o.kt)("p",null,"Any subroutine can return a value. Only one single output parameter can be declared per method or class function."),(0,o.kt)("p",null,"Input and output values are ",(0,o.kt)("a",{parentName:"p",href:"#values-or-references"},"evaluated")," at the moment of the call and copied into local variables within the called class function or method. Two syntaxes are proposed to declare variable parameters in the called code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#named-parameters"},"named variables")," (recommended in most cases) or"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sequential-parameters"},"sequentially numbered variables"),". ")),(0,o.kt)("p",null,"Both ",(0,o.kt)("a",{parentName:"p",href:"#named-parameters"},"named")," and ",(0,o.kt)("a",{parentName:"p",href:"#sequential-parameters"},"sequential")," syntaxes can be mixed with no restriction to declare parameters. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"Function add($x : Integer)\n    var $0;$2 : Integer\n    $0:=$x+$2\n")),(0,o.kt)("h2",{id:"named-parameters"},"Named parameters"),(0,o.kt)("p",null,"Inside called methods or class functions, parameter values are assigned to local variables. You can declare parameters using a ",(0,o.kt)("strong",{parentName:"p"},"parameter name")," along with a ",(0,o.kt)("strong",{parentName:"p"},"parameter type"),", separated by colon.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For class functions, parameters are declared along with the ",(0,o.kt)("inlineCode",{parentName:"li"},"Function")," keyword."),(0,o.kt)("li",{parentName:"ul"},"For methods (project methods, form object methods, database methods, and triggers), parameters are declared using the ",(0,o.kt)("inlineCode",{parentName:"li"},"#DECLARE")," keyword at the beginning of the method code.")),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"Function getArea($width : Integer; $height : Integer) -> $area : Integer\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," //myProjectMethod\n#DECLARE ($i : Integer) -> $myResult : Object\n")),(0,o.kt)("p",null,"The following rules apply:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The declaration line must be the first line of the method or function code, otherwise an error is displayed (only comments or line breaks can precede the declaration)."),(0,o.kt)("li",{parentName:"ul"},"Parameter names must start with a ",(0,o.kt)("inlineCode",{parentName:"li"},"$")," character and be compliant with ",(0,o.kt)("a",{parentName:"li",href:"/docs/es/19/Concepts/identifiers#object-properties"},"property naming rules"),". "),(0,o.kt)("li",{parentName:"ul"},"Multiple parameters (and types) are separated by semicolons (;). "),(0,o.kt)("li",{parentName:"ul"},'Multiline syntaxes are supported (using "',"\\",'" character).')),(0,o.kt)("p",null,"For example, when you call a ",(0,o.kt)("inlineCode",{parentName:"p"},"getArea()")," function with two parameters: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"$area:=$o.getArea(50;100)\n")),(0,o.kt)("p",null,"In the class function code, the value of each parameter is copied into the corresponding declared parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"// Class: Polygon\nFunction getArea($width : Integer; $height : Integer)-> $area : Integer\n    $area:=$width*$height\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the type is not defined, the parameter will be defined as ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/19/Concepts/variant"},(0,o.kt)("inlineCode",{parentName:"a"},"Variant")),".")),(0,o.kt)("p",null,"All 4D method kinds support the ",(0,o.kt)("inlineCode",{parentName:"p"},"#DECLARE")," keyword, including database methods. For example, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method, you can declare named parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'    // On Web Authentication database method\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text) \\\n  -> $RequestAccepted : Boolean\n$entitySelection:=ds.User.query("login=:1"; $user)\n// Check hash password...\n')),(0,o.kt)("h3",{id:"returned-value"},"Returned value"),(0,o.kt)("p",null,"You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"Function add($x : Variant; $y : Integer) -> $result : Integer\n")),(0,o.kt)("p",null,"You can also declare the return parameter only by adding ",(0,o.kt)("inlineCode",{parentName:"p"},": type"),", in which case it will automatically be available through ",(0,o.kt)("inlineCode",{parentName:"p"},"$0")," (",(0,o.kt)("a",{parentName:"p",href:"#returned-value-1"},"see sequential syntax below"),"). For example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"Function add($x : Variant; $y : Integer): Integer\n    $0:=$x+$y\n")),(0,o.kt)("h3",{id:"supported-data-types"},"Supported data types"),(0,o.kt)("p",null,"With named parameters, you can use the same data types as those which are ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/19/Concepts/variables#using-the-var-keyword"},"supported by the ",(0,o.kt)("inlineCode",{parentName:"a"},"var")," keyword"),", including class objects.  For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)\n")),(0,o.kt)("h2",{id:"sequential-parameters"},"Sequential parameters"),(0,o.kt)("p",null,"As an alternative to ",(0,o.kt)("a",{parentName:"p",href:"#named-parameters"},"named parameters")," syntax, you can declare parameters using sequentially numbered variables: ",(0,o.kt)("strong",{parentName:"p"},"$1"),", ",(0,o.kt)("strong",{parentName:"p"},"$2"),", ",(0,o.kt)("strong",{parentName:"p"},"$3"),", and so on. The numbering of the local variables represents the order of the parameters. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Although this syntax is supported by class functions, it is recommended to use ",(0,o.kt)("a",{parentName:"p",href:"#named-parameters"},"named parameters")," syntax in this case.")),(0,o.kt)("p",null,"For example, when you call a ",(0,o.kt)("inlineCode",{parentName:"p"},"DO_SOMETHING")," project method with three parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"DO_SOMETHING($WithThis;$AndThat;$ThisWay)\n")),(0,o.kt)("p",null,"In the method code, the value of each parameter is automatically copied into $1, $2, $3 variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //Code of the method DO_SOMETHING\n  //Assuming all parameters are of the text type\n C_TEXT($1;$2;$3)\n ALERT("I received "+$1+" and "+$2+" and also "+$3)\n  //$1 contains the $WithThis parameter\n  //$2 contains the $AndThat parameter\n  //$3 contains the $ThisWay parameter\n')),(0,o.kt)("h3",{id:"returned-value-1"},"Returned value"),(0,o.kt)("p",null,"The value to be returned is automatically put into the local variable ",(0,o.kt)("inlineCode",{parentName:"p"},"$0"),"."),(0,o.kt)("p",null,"For example, the following method, called ",(0,o.kt)("inlineCode",{parentName:"p"},"Uppercase4"),", returns a string with the first four characters of the string passed to it in uppercase:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"$0:=Uppercase(Substring($1;1;4))+Substring($1;5)\n")),(0,o.kt)("p",null,"The following is an example that uses the Uppercase4 method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'$NewPhrase:=Uppercase4("This is good.")\n')),(0,o.kt)("p",null,"In this example, the variable ",(0,o.kt)("em",{parentName:"p"},"$NewPhrase")," gets \u201cTHIS is good.\u201d"),(0,o.kt)("p",null,"The returned value, ",(0,o.kt)("inlineCode",{parentName:"p"},"$0"),", is a local variable within the subroutine. It can be used as such within the subroutine. For example, you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"// Do_something\n$0:=Uppercase($1)\nALERT($0)\n")),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"$0")," is first assigned the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"$1"),", then used as parameter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ALERT")," command. Within the subroutine, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"$0")," in the same way you would use any other local variable. It is 4D that returns the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"$0")," (as it is when the subroutine ends) to the called method."),(0,o.kt)("h3",{id:"supported-data-types-1"},"Supported data types"),(0,o.kt)("p",null,"You can use any ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/19/Concepts/quick-tour#expression-types"},"expression")," as sequential parameter, except:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"tables"),(0,o.kt)("li",{parentName:"ul"},"arrays")),(0,o.kt)("p",null,"Tables or array expressions can only be passed ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/19/Concepts/pointer#pointers-as-parameters-to-methods"},"as reference using a pointer"),". "),(0,o.kt)("h2",{id:"parameter-indirection-n"},"Parameter indirection (${N})"),(0,o.kt)("p",null,"4D project methods accept a variable number of parameters. You can address those parameters with a ",(0,o.kt)("inlineCode",{parentName:"p"},"For...End for")," loop, the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19/help/command/en/page259.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Count parameters"))," command and the ",(0,o.kt)("strong",{parentName:"p"},"parameter indirection syntax"),". Within the method, an indirection address is formatted ",(0,o.kt)("inlineCode",{parentName:"p"},"${N}"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," is a numeric expression. ",(0,o.kt)("inlineCode",{parentName:"p"},"${N}")," is called a ",(0,o.kt)("strong",{parentName:"p"},"generic parameter"),".  "),(0,o.kt)("h3",{id:"using-generic-parameters"},"Using generic parameters"),(0,o.kt)("p",null,"For example, consider a method that adds values and returns the sum formatted according to a format that is passed as a parameter. Each time this method is called, the number of values to be added may vary. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call."),(0,o.kt)("p",null,"Here is the method, named ",(0,o.kt)("inlineCode",{parentName:"p"},"MySum"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," #DECLARE($format : Text) -> $result : Text\n $sum:=0\n For($i;2;Count parameters)\n    $sum:=$sum+${$i}\n End for\n $result:=String($sum;$format)\n")),(0,o.kt)("p",null,"The method's parameters must be passed in the correct order, first the format and then a variable number of values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},' Result:=MySum("##0.00";125,2;33,5;24) //"182.70"\n Result:=MySum("000";1;2;200) //"203"\n')),(0,o.kt)("p",null,"Note that even if you declared 0, 1, or more parameters in the method, you can always pass the number of parameters that you want. Parameters are all available within the called method through the ",(0,o.kt)("inlineCode",{parentName:"p"},"${N}")," syntax and extra parameters type is ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/19/Concepts/variant"},"Variant")," by default (you can declare them using a ",(0,o.kt)("a",{parentName:"p",href:"#declaring-generic-parameters"},"compiler directive"),"). You just need to make sure parameters exist, thanks to the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19/help/command/en/page259.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Count parameters"))," command. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'//foo method\n#DECLARE($p1: Text;$p2 : Text; $p3 : Date) \nFor($i;1;Count parameters)\n    ALERT("param "+String($i)+" = "+String(${$i}))\nEnd for\n')),(0,o.kt)("p",null,"This method can be called:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameter indirection is best managed if you respect the following convention: if only some of the parameters are addressed by indirection, they should be passed after the others. ")),(0,o.kt)("h3",{id:"declaring-generic-parameters"},"Declaring generic parameters"),(0,o.kt)("p",null,"As with other local variables, it is not mandatory to declare generic parameters by compiler directive. However, it is recommended to avoid any ambiguity. Non-declared generic parameters automatically get the ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/19/Concepts/variant"},"Variant")," type."),(0,o.kt)("p",null,"To declare generic parameters, you use a compiler directive to which you pass ${N} as a parameter, where N specifies the first generic parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," C_TEXT(${4})\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Declaring generic parameters can only be done with the ",(0,o.kt)("a",{parentName:"p",href:"#sequential-parameters"},"sequential syntax"),".")),(0,o.kt)("p",null,"This command means that starting with the fourth parameter (included), the method can receive a variable number of parameters of text type. $1, $2 and $3 can be of any data type. However, if you use $2 by indirection, the data type used will be the generic type. Thus, it will be of the data type text, even if for you it was, for instance, of the data type Real."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The number in the declaration has to be a constant and not a variable.")),(0,o.kt)("h2",{id:"declaring-parameters-for-compiled-mode"},"Declaring parameters for compiled mode"),(0,o.kt)("p",null,"Even if it is not mandatory in ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/19/Concepts/interpreted-compiled"},"interpreted mode"),", you must declare each parameter in the called methods or functions to prevent any trouble. "),(0,o.kt)("p",null,"When using the ",(0,o.kt)("a",{parentName:"p",href:"#named-parameters"},"named variable syntax"),", parameters are automatically declared through the ",(0,o.kt)("inlineCode",{parentName:"p"},"#DECLARE")," keyword or ",(0,o.kt)("inlineCode",{parentName:"p"},"Function")," prototype. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"Function add($x : Variant; $y : Integer)-> $result : Integer\n    // all parameters are declared with their type\n")),(0,o.kt)("p",null,"When using the ",(0,o.kt)("a",{parentName:"p",href:"#sequential-parameters"},"sequential variable syntax"),", you need to make sure all parameters are properly declared. In the following example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Capitalize")," project method accepts a text parameter and returns a text result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"  // Capitalize Project Method\n  // Capitalize ( Text ) -> Text\n  // Capitalize ( Source string ) -> Capitalized string\n \n C_TEXT($0;$1)\n $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))\n")),(0,o.kt)("p",null,"Using commands such as ",(0,o.kt)("inlineCode",{parentName:"p"},"New process")," with process methods that accept parameters also require that parameters are explicitely declared in the called method. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_TEXT($string)\nC_LONGINT($idProc;$int)\nC_OBJECT($obj)\n\n$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)\n')),(0,o.kt)("p",null,'This code can be executed in compiled mode only if "foo_method" declares its parameters:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"//foo_method\nC_TEXT($1)\nC_LONGINT($2)\nC_OBJECT($3)\n...\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". Within this method, you can predeclare the parameters for each method, for example:'),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," // Compiler_method\n C_REAL(OneMethodAmongOthers;$1) \n")),(0,o.kt)("p",{parentName:"blockquote"},"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/19/Concepts/interpreted-compiled"},"Interpreted and compiled modes")," page for more information.")),(0,o.kt)("p",null,'Parameter declaration is also mandatory in the following contexts (these contexts do not support declaration in a "Compiler" method):'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Database methods - For example, the ",(0,o.kt)("inlineCode",{parentName:"li"},"On Web Connection Database Method")," receives six parameters, $1 to $6, of the data type Text. At the beginning of the database method, you must write (even if all parameters are not used):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"// On Web Connection\nC_TEXT($1;$2;$3;$4;$5;$6)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also use ",(0,o.kt)("a",{parentName:"p",href:"#named-parameters"},"named parameters")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"#DECLARE")," keyword. ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Triggers - The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the trigger itself.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Form objects that accept the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Drag Over")," form event - The $0 parameter (Longint), which is the result of the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Drag Over")," form event, is typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the object method.\n",(0,o.kt)("strong",{parentName:"p"},"Note:")," The compiler does not initialize the $0 parameter. So, as soon as you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Drag Over")," form event, you must initialize $0. For example:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"}," C_LONGINT($0)\n If(Form event=On Drag Over)\n    $0:=0\n    ...\n    If($DataType=Is picture)\n       $0:=-1\n    End if\n    ...\n End if\n")),(0,o.kt)("h2",{id:"wrong-parameter-type"},"Wrong parameter type"),(0,o.kt)("p",null,"Calling a parameter with an wrong type is an ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/19/Concepts/error-handling"},"error")," that prevents correct execution. For example, if you write the following methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"// method1\n#DECLARE($value : Text)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"// method2\nmethod1(42) //wrong type, text expected\n")),(0,o.kt)("p",null,"This case is handled by 4D depending on the context:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("a",{parentName:"li",href:"/docs/es/19/Concepts/interpreted-compiled"},"compiled projects"),", an error is generated at the compilation step whenever possible. Otherwise, an error is generated when the method is called."),(0,o.kt)("li",{parentName:"ul"},"in interpreted projects:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"if the parameter was declared using the ",(0,o.kt)("a",{parentName:"li",href:"#named-parameters"},"named syntax")," (",(0,o.kt)("inlineCode",{parentName:"li"},"#DECLARE")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Function"),"), an error is generated when the method is called."),(0,o.kt)("li",{parentName:"ul"},"if the parameter was declared using the ",(0,o.kt)("a",{parentName:"li",href:"#sequential-parameters"},"sequential syntax")," (",(0,o.kt)("inlineCode",{parentName:"li"},"C_XXX"),"), no error is generated, the called method receives an empty value of the expected type.")))),(0,o.kt)("h2",{id:"inputoutput-variables"},"Input/Output variables"),(0,o.kt)("p",null,"Within the subroutine, you can use the parameters $1, $2... in the same way you would use any other local variable. However, in the case where you use commands that modify the value of the variable passed as parameter (for example ",(0,o.kt)("inlineCode",{parentName:"p"},"Find in field"),"), the parameters $1, $2, and so on cannot be used directly. You must first copy them into standard local variables (for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"$myvar:=$1"),")."),(0,o.kt)("h2",{id:"using-object-properties-as-named-parameters"},"Using object properties as named parameters"),(0,o.kt)("p",null,"Using objects as parameters allow you to handle ",(0,o.kt)("strong",{parentName:"p"},"named parameters"),". This programming style is simple, flexible, and easy to read. "),(0,o.kt)("p",null,"For example, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreatePerson")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //CreatePerson\n var $person : Object\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n')),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeAge")," method you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //ChangeAge\n var $1; $para : Object\n $para:=$1  \n $para.Age:=$para.Age+10\n ALERT($para.Name+" is "+String($para.Age)+" years old.")\n')),(0,o.kt)("p",null,"This provides a powerful way to define ",(0,o.kt)("a",{parentName:"p",href:"#optional-parameters"},"optional parameters")," (see also below). To handle missing parameters, you can either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check if all expected parameters are provided by comparing them to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Null")," value, or"),(0,o.kt)("li",{parentName:"ul"},"preset parameter values, or"),(0,o.kt)("li",{parentName:"ul"},"use them as empty values.")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeAge")," method above, both Age and Name properties are mandatory and would produce errors if they were missing. To avoid this case, you can just write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //ChangeAge\n var $1; $para : Object\n $para:=$1  \n $para.Age:=Num($para.Age)+10\n ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n')),(0,o.kt)("p",null,'Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.'),(0,o.kt)("p",null,"Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'$person:=New object("Name";"Smith";"Age";40;"toAdd";10)\nChangeAge($person)\n\n//ChangeAge\nvar $1;$para : Object\n$para:=$1  \nIf ($para.toAdd=Null)\n    $para.toAdd:=10\nEnd if\n$para.Age:=Num($para.Age)+$para.toAdd\nALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n')),(0,o.kt)("p",null,"The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years."),(0,o.kt)("p",null,"With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order. "),(0,o.kt)("h2",{id:"optional-parameters"},"Optional parameters"),(0,o.kt)("p",null,"In the ",(0,o.kt)("em",{parentName:"p"},"4D Language Reference")," manual, the { } characters (braces) indicate optional parameters. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"ALERT (message{; okButtonTitle})")," means that the ",(0,o.kt)("em",{parentName:"p"},"okButtonTitle")," parameter may be omitted when calling the command. You can call it in the following ways:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'ALERT("Are you sure?";"Yes I am") //2 parameters\nALERT("Time is over") //1 parameter\n')),(0,o.kt)("p",null,"4D project methods also accept such optional parameters, starting from the right. The issue with optional parameters is how to handle the case where some of them are missing in the called method - it should never produce an error. A good practice is to assign default values to unused parameters."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When optional parameters are needed in your methods, you might also consider using ",(0,o.kt)("a",{parentName:"p",href:"#using-objects-properties-as-named-parameters"},"object properties as named parameters")," which provide a flexible way to handle variable numbers of parameters.  ")),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Count parameters")," command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received."),(0,o.kt)("p",null,"The following example displays a text message and can insert the text into a document on disk or in a 4D Write Pro area:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"// APPEND TEXT Project Method\n// APPEND TEXT ( Text { ; Text { ; Object } } )\n// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )\n \n Method($message : Text; $path : Text; $wpArea : Object)\n  \n ALERT($message)\n If(Count parameters>=3)\n    WP SET TEXT($wpArea;$1;wk append)\n Else\n    If(Count parameters>=2)\n       TEXT TO DOCUMENT($path;$message)\n    End if\n End if\n")),(0,o.kt)("p",null,"After this project method has been added to your application, you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'APPEND TEXT(vtSomeText) //Will only display the  message\nAPPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path\nAPPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea\n')),(0,o.kt)("h2",{id:"values-or-references"},"Values or references"),(0,o.kt)("p",null,"When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the ",(0,o.kt)("strong",{parentName:"p"},"resulting value")," to the local variables in the class function or subroutine. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the class function/subroutine, it does not change the value in the calling method. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'    //Here is some code from the method MY_METHOD\nDO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\nALERT([People]Name)\n \n    //Here is the code of the method DO_SOMETHING\n $1:=Uppercase($1)\n ALERT($1)\n')),(0,o.kt)("p",null,"The alert box displayed by ",(0,o.kt)("inlineCode",{parentName:"p"},"DO_SOMETHING"),' will read "WILLIAMS" and the alert box displayed by ',(0,o.kt)("inlineCode",{parentName:"p"},"MY_METHOD"),' will read "williams". The method locally changed the value of the parameter $1, but this does not affect the value of the field ',(0,o.kt)("inlineCode",{parentName:"p"},"[People]Name")," passed as parameter by the method ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_METHOD"),"."),(0,o.kt)("p",null,"There are two ways to make the method ",(0,o.kt)("inlineCode",{parentName:"p"},"DO_SOMETHING")," change the value of the field:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rather than passing the field to the method, you pass a pointer to it, so you would write:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //Here is some code from the method MY_METHOD\n DO_SOMETHING(->[People]Name) //Let\'s say [People]Name value is "williams"\n ALERT([People]Last Name)\n \n  //Here the code of the method DO_SOMETHING\n $1->:=Uppercase($1->)\n ALERT($1->)\n')),(0,o.kt)("p",null,"Here the parameter is not the field, but a pointer to it. Therefore, within the ",(0,o.kt)("inlineCode",{parentName:"p"},"DO SOMETHING")," method, $1 is no longer the value of the field but a pointer to the field. The object ",(0,o.kt)("strong",{parentName:"p"},"referenced"),' by $1 ($1-> in the code above) is the actual field. Consequently, changing the referenced object goes beyond the scope of the subroutine, and the actual field is affected. In this example, both alert boxes will read "WILLIAMS".'),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Rather than having the method ",(0,o.kt)("inlineCode",{parentName:"li"},"DO_SOMETHING"),' "doing something," you can rewrite the method so it returns a value. Thus you would write:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'    //Here is some code from the method MY METHOD\n [People]Name:=DO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\n ALERT([People]Name)\n\n    //Here the code of the method DO SOMETHING\n $0:=Uppercase($1)\n ALERT($0)\n')),(0,o.kt)("p",null,"This second technique of returning a value by a subroutine is called \u201cusing a function.\u201d This is described in the ",(0,o.kt)("a",{parentName:"p",href:"#returning-values"},"Returning values")," paragraph."),(0,o.kt)("h3",{id:"particular-cases-objects-and-collections"},"Particular cases: objects and collections"),(0,o.kt)("p",null,"You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal ",(0,o.kt)("em",{parentName:"p"},"pointer"),"). "),(0,o.kt)("p",null,"Consequently, when using such data types as parameters, ",(0,o.kt)("inlineCode",{parentName:"p"},"$1, $2...")," do not contain ",(0,o.kt)("em",{parentName:"p"},"values")," but ",(0,o.kt)("em",{parentName:"p"},"references"),". Modifying the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"$1, $2...")," parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/19/Concepts/pointer#pointers-as-parameters-to-methods"},"pointers"),", except that ",(0,o.kt)("inlineCode",{parentName:"p"},"$1, $2...")," parameters do not need to be dereferenced in the subroutine."),(0,o.kt)("p",null,"For example, consider the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreatePerson")," method that creates an object and sends it as a parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'  //CreatePerson\n var $person : Object\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeAge")," method adds 10 to the Age attribute of the received object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"  //ChangeAge\n #DECLARE ($person : Object)\n $person.Age:=$person.Age+10\n ALERT(String($person.Age))\n")),(0,o.kt)("p",null,"When you execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreatePerson"),' method, both alert boxes will read "50" since the same object reference is handled by both methods.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4D Server:"),' When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. In these cases, copies of object and collection parameters are sent instead of references.'))}c.isMDXComponent=!0}}]);