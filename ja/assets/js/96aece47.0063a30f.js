"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39021:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>k,toc:()=>g});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&p(e,a,t[a]);return e};const m={id:"identifiers",title:"Identifiers"},u=void 0,k={unversionedId:"Concepts/identifiers",id:"version-18/Concepts/identifiers",title:"Identifiers",description:"This section describes the conventions and rules for naming various elements in the 4D language (variables, tables, objects, forms, etc.).",source:"@site/versioned_docs/version-18/Concepts/identifiers.md",sourceDirName:"Concepts",slug:"/Concepts/identifiers",permalink:"/docs/ja/18/Concepts/identifiers",draft:!1,tags:[],version:"18",frontMatter:{id:"identifiers",title:"Identifiers"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/ja/18/Concepts/plug-ins"},next:{title:"Overview",permalink:"/docs/ja/18/Project/overview"}},h={},g=[{value:"Basic Rules",id:"basic-rules",level:2},{value:"Additional rules for object property and ORDA names",id:"additional-rules-for-object-property-and-orda-names",level:3},{value:"Additional rules for SQL",id:"additional-rules-for-sql",level:3},{value:"Tables",id:"tables",level:2},{value:"Fields",id:"fields",level:2},{value:"Interprocess Variables",id:"interprocess-variables",level:2},{value:"Process Variables",id:"process-variables",level:2},{value:"Local Variables",id:"local-variables",level:2},{value:"Arrays",id:"arrays",level:2},{value:"Interprocess Arrays",id:"interprocess-arrays",level:3},{value:"Process Arrays",id:"process-arrays",level:3},{value:"Local Arrays",id:"local-arrays",level:3},{value:"Elements of arrays",id:"elements-of-arrays",level:3},{value:"Elements of two-dimensional arrays",id:"elements-of-two-dimensional-arrays",level:3},{value:"Object attributes",id:"object-attributes",level:2},{value:"Forms",id:"forms",level:2},{value:"Form objects",id:"form-objects",level:2},{value:"Project methods",id:"project-methods",level:2},{value:"Plug-In Commands",id:"plug-in-commands",level:2},{value:"Sets",id:"sets",level:2},{value:"Interprocess Sets",id:"interprocess-sets",level:3},{value:"Process Sets",id:"process-sets",level:3},{value:"Client Sets",id:"client-sets",level:3},{value:"Named Selections",id:"named-selections",level:2},{value:"Interprocess Named Selections",id:"interprocess-named-selections",level:3},{value:"Process Named Selections",id:"process-named-selections",level:3},{value:"Processes",id:"processes",level:2},{value:"Global Processes",id:"global-processes",level:3},{value:"Local Processes",id:"local-processes",level:3},{value:"Summary of Naming Conventions",id:"summary-of-naming-conventions",level:2},{value:"Resolving Naming Conflicts",id:"resolving-naming-conflicts",level:2}],y={toc:g};function b(e){var t,a=e,{components:r}=a,p=((e,t)=>{var a={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},y),p),l(t,s({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This section describes the conventions and rules for naming various elements in the 4D language (variables, tables, objects, forms, etc.)."),(0,n.kt)("h2",d({},{id:"basic-rules"}),"Basic Rules"),(0,n.kt)("p",null,"The following rules apply for all 4D frameworks."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'A name must begin with an alphabetic character, an underscore, or a dollar ("$") (note that a dollar sign can denote a local element, see below).'),(0,n.kt)("li",{parentName:"ul"},'Thereafter, the name can include alphabetic characters, numeric characters, the space character, and the underscore character ("_").'),(0,n.kt)("li",{parentName:"ul"},'Periods (".") and brackets ("',"[ ]",'") are not allowed in table, field, method, or variable names.'),(0,n.kt)("li",{parentName:"ul"},"Commas, slashes, quotation marks, and colons are not allowed."),(0,n.kt)("li",{parentName:"ul"},"Characters reserved for use as operators, such as * and +, are not allowed."),(0,n.kt)("li",{parentName:"ul"},"Do not use reserved names, i.e. 4D command names (",(0,n.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Time"),", etc), keywords (If, For, etc.), and constants."),(0,n.kt)("li",{parentName:"ul"},"Any trailing spaces are ignored.")),(0,n.kt)("h3",d({},{id:"additional-rules-for-object-property-and-orda-names"}),"Additional rules for object property and ORDA names"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Space characters are not allowed."),(0,n.kt)("li",{parentName:"ul"},'Periods (".") and brackets ("',"[ ]",'") are not allowed.'),(0,n.kt)("li",{parentName:"ul"},"Names are case sensitive.")),(0,n.kt)("h3",d({},{id:"additional-rules-for-sql"}),"Additional rules for SQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Only the characters _0123456789abcdefghijklmnopqrstuvwxyz are accepted"),(0,n.kt)("li",{parentName:"ul"},"Names must not include any SQL keywords (command, attribute, etc.).")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:"),' The "SQL" area of the Inspector in the Structure editor automatically indicates any unauthorized characters in the name of a table or field.  '),(0,n.kt)("h2",d({},{id:"tables"}),"Tables"),(0,n.kt)("p",null,"You designate a table by placing its name between brackets: ","[...]",". A table name can contain up to 31 characters."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'DEFAULT TABLE([Orders])\nFORM SET INPUT([Clients];"Entry")\nADD RECORD([Letters])\n')),(0,n.kt)("h2",d({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"You designate a field by first specifying the table to which it belongs. The field name immediately follows the table name. A field name can contain up to 31 characters."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'[Orders]Total:=Sum([Line]Amount)\nQUERY([Clients];[Clients]Name="Smith")\n[Letters]Text:=Capitalize text([Letters]Text)\n')),(0,n.kt)("h2",d({},{id:"interprocess-variables"}),"Interprocess Variables"),(0,n.kt)("p",null,"You designate an interprocess variable by preceding the name of the variable with the symbols (",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."),(0,n.kt)("p",null,"The name of an interprocess variable can be up to 31 characters, not including the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'<>vlProcessID:=Current process\n<>vsKey:=Char(KeyCode)\nIf(<>vtName#"")\n')),(0,n.kt)("h2",d({},{id:"process-variables"}),"Process Variables"),(0,n.kt)("p",null,"You designate a process variable by using its name (which cannot start with the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols nor the dollar sign $). A process variable name can contain up to 31 characters."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'<>vrGrandTotal:=Sum([Accounts]Amount)\nIf(bValidate=1)\nvsCurrentName:=""\n')),(0,n.kt)("h2",d({},{id:"local-variables"}),"Local Variables"),(0,n.kt)("p",null,"You designate a local variable by placing a dollar sign ($) before the variable name. A local variable name can contain up to 31 characters, not including the dollar sign."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'For($vlRecord;1;100)\nIf($vsTempVar="No")\n$vsMyString:="Hello there"\n')),(0,n.kt)("h2",d({},{id:"arrays"}),"Arrays"),(0,n.kt)("p",null,"You designate an array by using its name, which is the name you pass to an array declaration (such as ARRAY LONGINT) when you create the array. Arrays are variables, and from the scope point of view, like variables, there are three different types of arrays:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Interprocess arrays,"),(0,n.kt)("li",{parentName:"ul"},"Process arrays,"),(0,n.kt)("li",{parentName:"ul"},"Local arrays.")),(0,n.kt)("h3",d({},{id:"interprocess-arrays"}),"Interprocess Arrays"),(0,n.kt)("p",null,"The name of an interprocess array is preceded by the symbols (",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."),(0,n.kt)("p",null,"An interprocess array name can contain up to 31 characters, not including the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),"ARRAY TEXT(<>atSubjects;Records in table([Topics]))\nSORT ARRAY(<>asKeywords;>)\nARRAY INTEGER(<>aiBigArray;10000)\n")),(0,n.kt)("h3",d({},{id:"process-arrays"}),"Process Arrays"),(0,n.kt)("p",null,"You designate a process array by using its name (which cannot start with the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols nor the dollar sign $). A process array name can contain up to 31 characters."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),"ARRAY TEXT(atSubjects;Records in table([Topics]))\nSORT ARRAY(asKeywords;>)\nARRAY INTEGER(aiBigArray;10000)\n")),(0,n.kt)("h3",d({},{id:"local-arrays"}),"Local Arrays"),(0,n.kt)("p",null,"The name of a local array is preceded by the dollar sign ($). A local array name can contain up to 31 characters, not including the dollar sign."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),"ARRAY TEXT($atSubjects;Records in table([Topics]))\nSORT ARRAY($asKeywords;>)\nARRAY INTEGER($aiBigArray;10000)\n")),(0,n.kt)("h3",d({},{id:"elements-of-arrays"}),"Elements of arrays"),(0,n.kt)("p",null,'You reference an element of an interprocess, process or local array by using the curly braces("{ }"). The element referenced is denoted by a numeric expression.'),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' //Addressing an element of an interprocess array\nIf(<>asKeywords{1}="Stop")\n<>atSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}\n\n //Addressing an element of a process array\nIf(asKeywords{1}="Stop")\natSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=aiBigArray{Size of array(aiBigArray)}\n\n //Addressing an element of a local array\nIf($asKeywords{1}="Stop")\n$atSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=$aiBigArray{Size of array($aiBigArray)}\n')),(0,n.kt)("h3",d({},{id:"elements-of-two-dimensional-arrays"}),"Elements of two-dimensional arrays"),(0,n.kt)("p",null,"You reference an element of a two-dimensional array by using the curly braces ({\u2026}) twice. The element referenced is denoted by two numeric expressions in two sets of curly braces."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' //Addressing an element of a two-dimensional interprocess array\nIf(<>asKeywords{$vlNextRow}{1}="Stop")\n<>atSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}\n\n //Addressing an element of a two-dimensional process array\nIf(asKeywords{$vlNextRow}{1}="Stop")\natSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}\n\n //Addressing an element of a two-dimensional local array\nIf($asKeywords{$vlNextRow}{1}="Stop")\n$atSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}\n')),(0,n.kt)("h2",d({},{id:"object-attributes"}),"Object attributes"),(0,n.kt)("p",null,'When object notation is enabled, you designate an object attribute (also called object property) by placing a point (".") between the name of the object (or attribute) and the name of the attribute. An attribute name can contain up to 255 characters and is case sensitive.'),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'myObject.myAttribute:="10"\n$value:=$clientObj.data.address.city\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Additional rules apply to object attribute names (they must conform to the ECMAScript specification). For more information, see ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/ja/18/Concepts/object#object-property-identifiers"}),"Object property identifiers"),"."),(0,n.kt)("h2",d({},{id:"forms"}),"Forms"),(0,n.kt)("p",null,"You designate a form by using a string expression that represents its name. A form name can contain up to 31 characters."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'FORM SET INPUT([People];"Input")\nFORM SET OUTPUT([People];"Output")\nDIALOG([Storage];"Note box"+String($vlStage))\n')),(0,n.kt)("h2",d({},{id:"form-objects"}),"Form objects"),(0,n.kt)("p",null,"You designate a form object by passing its name as a string, preceded by the * parameter. A form object name can contain up to 255 characters."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'OBJECT SET FONT(*;"Binfo";"Times")\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Do not confuse form objects (buttons, list boxes, variables that can be entered, etc.) and objects in the 4D language. 4D language objects are created and manipulated via object notation or dedicated commands."),(0,n.kt)("h2",d({},{id:"project-methods"}),"Project methods"),(0,n.kt)("p",null,"You designate a project method (procedure or function) by using its name. A method name can contain up to 31 characters."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," A project method that does not return a result is also called a procedure. A project method that returns a result is also called a function."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),"If(New client)\nDELETE DUPLICATED VALUES\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tip:")," It is a good programming technique to adopt the same naming convention as the one used by 4D for built-in methods. Use uppercase characters for naming your methods; however if a method is a function, capitalize the first character of its name. By doing so, when you reopen a database for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," When you call a method, you just type its name. However, some 4D built-in commands, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"ON EVENT CALL"),", as well as all the Plug-In commands, expect the name of a method as a string when a method parameter is passed. Example:"),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' //This command expects a method (function) or formula\nQUERY BY FORMULA([aTable];Special query)\n //This command expects a method (procedure) or statement\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n //But this command expects a method name\nON EVENT CALL("HANDLE EVENTS")\n')),(0,n.kt)("p",null,"Project methods can accept parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a semicolon (;). The parameters are available within the called method as consecutively numbered local variables: $1, $2,\u2026, $n. In addition, multiple consecutive (and last) parameters can be addressed with the syntax ${n}where n, numeric expression, is the number of the parameter."),(0,n.kt)("p",null,"Inside a function, the $0 local variable contains the value to be returned."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' //Within DROP SPACES $1 is a pointer to the field [People]Name\nDROP SPACES(->[People]Name)\n\n //Within Calc creator:\n //- $1 is numeric and equal to 1\n //- $2 is numeric and equal to 5\n //- $3 is text or string and equal to "Nice"\n //- The result value is assigned to $0\n$vsResult:=Calc creator(1;5;"Nice")\n\n //Within Dump:\n //- The three parameters are text or string\n //- They can be addressed as $1, $2 or $3\n //- They can also be addressed as, for instance, ${$vlParam} where $vlParam is 1, 2 or 3\n //- The result value is assigned to $0\nvtClone:=Dump("is";"the";"it")\n')),(0,n.kt)("h2",d({},{id:"plug-in-commands"}),"Plug-In Commands"),(0,n.kt)("p",null,"You designate a plug-in command by using its name as defined by the plug-in. A plug-in command name can contain up to 31 characters."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'$error:=SMTP_From($smtp_id;"henry@gmail.com")\n')),(0,n.kt)("h2",d({},{id:"sets"}),"Sets"),(0,n.kt)("p",null,"From the scope point of view, there are two types of sets:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Interprocess sets"),(0,n.kt)("li",{parentName:"ul"},"Process sets")),(0,n.kt)("p",null,"4D Server also includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Client sets")),(0,n.kt)("h3",d({},{id:"interprocess-sets"}),"Interprocess Sets"),(0,n.kt)("p",null,"A set is an interprocess set if the name of the set is preceded by the symbols (",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."),(0,n.kt)("p",null,"An interprocess set name can contain up to 255 characters, not including the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols."),(0,n.kt)("h3",d({},{id:"process-sets"}),"Process Sets"),(0,n.kt)("p",null,"You denote a process set by using a string expression that represents its name (which cannot start with the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols or the dollar sign $). A set name can contain up to 255 characters."),(0,n.kt)("h3",d({},{id:"client-sets"}),"Client Sets"),(0,n.kt)("p",null,"The name of a client set is preceded by the dollar sign ($). A client set name can contain up to 255 characters, not including the dollar sign."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Sets are maintained on the Server machine. In certain cases, for efficiency or special purposes, you may need to work with sets locally on the Client machine. To do so, you use Client sets."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' //Interprocess sets\nUSE SET("<>Deleted Records")\nCREATE SET([Customers];"<>Customer Orders")\nIf(Records in set("<>Selection"+String($i))>0)\n //Process sets\nUSE SET("Deleted Records")\nCREATE SET([Customers];"Customer Orders")\nIf(Records in set("<>Selection"+String($i))>0)\n //Client sets\nUSE SET("$Deleted Records")\nCREATE SET([Customers];"$Customer Orders")\nIf(Records in set("$Selection"+String($i))>0)\n')),(0,n.kt)("h2",d({},{id:"named-selections"}),"Named Selections"),(0,n.kt)("p",null,"From the scope point of view, there are two types of named selections:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Interprocess named selections"),(0,n.kt)("li",{parentName:"ul"},"Process named selections.")),(0,n.kt)("h3",d({},{id:"interprocess-named-selections"}),"Interprocess Named Selections"),(0,n.kt)("p",null,"A named selection is an interprocess named selection if its name is preceded by the symbols (",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."),(0,n.kt)("p",null,"An interprocess named selection name can contain up to 255 characters, not including the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols."),(0,n.kt)("h3",d({},{id:"process-named-selections"}),"Process Named Selections"),(0,n.kt)("p",null,"You denote a process named selection by using a string expression that represents its name (which cannot start with the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols nor the dollar sign $). A named selection name can contain up to 255 characters."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' //Interprocess Named Selection\nUSE NAMED SELECTION([Customers];"<>ByZipcode")\n //Process Named Selection\nUSE NAMED SELECTION([Customers];"<>ByZipcode")\n')),(0,n.kt)("h2",d({},{id:"processes"}),"Processes"),(0,n.kt)("p",null,"In the single-user version, or in Client/Server on the Client side, there are two types of processes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Global processes"),(0,n.kt)("li",{parentName:"ul"},"Local processes.")),(0,n.kt)("h3",d({},{id:"global-processes"}),"Global Processes"),(0,n.kt)("p",null,"You denote a global process by using a string expression that represents its name (which cannot start with the dollar sign $). A process name can contain up to 255 characters."),(0,n.kt)("h3",d({},{id:"local-processes"}),"Local Processes"),(0,n.kt)("p",null,"You denote a local process if the name of the process is preceded by a dollar ($) sign. The process name can contain up to 255 characters, not including the dollar sign."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-4d"}),' //Starting the global process "Add Customers"\n$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")\n //Starting the local process "$Follow Mouse Moves"\n$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")\n')),(0,n.kt)("h2",d({},{id:"summary-of-naming-conventions"}),"Summary of Naming Conventions"),(0,n.kt)("p",null,"The following table summarizes 4D naming conventions."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Identifier"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Max. Length"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Table"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"[Invoices]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"[Employees]","Last Name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Interprocess Variable/Array"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<>")," + 31"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<>vlNextProcessID"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Process Variable/Array"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"vsCurrentName")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Local Variable/Array"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"$ + 31"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"$vlLocalCounter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Object attribute"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"$o.myAttribute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Form"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"My Custom Web Input"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Form object"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"MyButton"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Project method"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"M_ADD_CUSTOMERS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Plug-in Routine"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"PDF SET ROTATION")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Interprocess Set"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<>")," + 255"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'"<>Records to be Archived"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Process Set"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"Current selected records"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Client Set"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"$ + 255"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"$Previous Subjects"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Named Selection"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"Employees A to Z"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Interprocess Named Selection"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<>")," + 255"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'"<>Employees Z to A"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Local Process"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"$ + 255"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"$Follow Events"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Global Process"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"',(0,n.kt)("em",{parentName:"td"},"P_INVOICES_MODULE"),'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Semaphore"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),'"mysemaphore"')))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller."),(0,n.kt)("h2",d({},{id:"resolving-naming-conflicts"}),"Resolving Naming Conflicts"),(0,n.kt)("p",null,"Be sure to use unique names for the different elements in your database. If a particular object has the same name as another object of a different type (for example, if a field is named Person and a variable is also named Person), 4D uses a priority system."),(0,n.kt)("p",null,"4D identifies names used in procedures in the following order:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Fields"),(0,n.kt)("li",{parentName:"ol"},"Commands"),(0,n.kt)("li",{parentName:"ol"},"Methods"),(0,n.kt)("li",{parentName:"ol"},"Plug-in routines"),(0,n.kt)("li",{parentName:"ol"},"Predefined constants"),(0,n.kt)("li",{parentName:"ol"},"Variables.")),(0,n.kt)("p",null,"For example, 4D has a built-in command called ",(0,n.kt)("inlineCode",{parentName:"p"},"Date"),". If you named a method ",(0,n.kt)("em",{parentName:"p"},"Date"),", 4D would recognize it as the built-in ",(0,n.kt)("inlineCode",{parentName:"p"},"Date")," command, and not as your method. This would prevent you from calling your method. If, however, you named a field \u201cDate\u201d, 4D would try to use your field instead of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Date")," command."))}b.isMDXComponent=!0}}]);