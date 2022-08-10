"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77719],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(i,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99181:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],s={id:"quick-tour",title:"A Quick Tour",sidebar_label:"A Quick Tour"},i=void 0,p={unversionedId:"Concepts/quick-tour",id:"version-18/Concepts/quick-tour",title:"A Quick Tour",description:'Using the 4D language, printing the traditional "Hello, world!" message on screen can be done in several ways. The most simple is probably to write the following single line in a project method:',source:"@site/versioned_docs/version-18/Concepts/quick-tour.md",sourceDirName:"Concepts",slug:"/Concepts/quick-tour",permalink:"/docs/18/Concepts/quick-tour",draft:!1,tags:[],version:"18",frontMatter:{id:"quick-tour",title:"A Quick Tour",sidebar_label:"A Quick Tour"},sidebar:"docs",previous:{title:"About the 4D Language",permalink:"/docs/18/Concepts/about"},next:{title:"Data types overview",permalink:"/docs/18/Concepts/data-types"}},m={},d=[{value:"Assigning Values",id:"assigning-values",level:2},{value:"Variables",id:"variables",level:2},{value:"Commands",id:"commands",level:2},{value:"Constants",id:"constants",level:2},{value:"Methods",id:"methods",level:2},{value:"Data Types",id:"data-types",level:2},{value:"Objects and collections",id:"objects-and-collections",level:2},{value:"Operators",id:"operators",level:2},{value:"Expressions",id:"expressions",level:2},{value:"Expression types",id:"expression-types",level:3},{value:"Assignable vs non-assignable expressions",id:"assignable-vs-non-assignable-expressions",level:3},{value:"Pointers",id:"pointers",level:2},{value:"Comments",id:"comments",level:2},{value:"Single line comments (//)",id:"single-line-comments-",level:4},{value:"Inline or multiline comments (/**/)",id:"inline-or-multiline-comments-",level:4}],u={toc:d};function c(e){var t=e.components,s=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'Using the 4D language, printing the traditional "Hello, world!" message on screen can be done in several ways. The most simple is probably to write the following single line in a project method:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'ALERT("Hello, World!")\n')),(0,l.kt)("p",null,'This code will display a platform-standard alert dialog box with the "Hello, World!" message, containing an OK button. To execute the code, you just need to click on the execution button in the Method editor:'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt-text",src:a(47680).Z,width:"613",height:"322"})),(0,l.kt)("p",null,"Or, you could attach this code to a button in a form and execute the form, in which case clicking on the button would display the alert dialog box. In any cases, you have just executed your first line of 4D code!"),(0,l.kt)("h2",{id:"assigning-values"},"Assigning Values"),(0,l.kt)("p",null,"Data can be put into and copied out of variables, fields, array elements... Putting data into a variable is called assigning the data to the variable and is done with the assignment operator (:=). The assignment operator is also used to assign data to fields or array elements."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'$MyNumber:=3 //assigns 3 to MyNumber variable  \n[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field\narrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element\nMyVar:=Length("Acme") //assigns the result of the function (4) to MyVar\n$myDate:=!2018/01/21! //assigns a date literal\n$myHour:=?08:12:55? //assigns a time literal\n')),(0,l.kt)("p",null,"You MUST distinguish the assignment operator := from the other operators. Rather than combining expressions into a new one, the assignment operator copies the value of the expression to the right of the assignment operator into the variable or field to the left of the operator."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Important:")," Do NOT confuse the assignment operator := with the equality comparison operator =. A different assignment operator (and not =) was deliberately chosen to avoid issues and confusion which often occur with == or === in other programming languages. Such errors are often difficult to recognize by the compiler and lead to time-consuming troubleshooting."),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("p",null,"The 4D language is strongly typed, although some flexibility is allowed in many cases. You create a typed variable using a ",(0,l.kt)("inlineCode",{parentName:"p"},"C_XXX")," command. For example, to create a variable of the date type, you can write:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"C_DATE(MyDate) //Date type for MyDate variable\n")),(0,l.kt)("p",null,"Even if it is usually not recommended, you can create variables simply by using them; you do not necessarily need to formally define them as you do with fields. For example, if you want a variable that will hold the current date plus 30 days, you can write:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"MyOtherDate:=Current date+30\n")),(0,l.kt)("p",null,"The line of code reads \u201cMyOtherDate gets the current date plus 30 days.\u201d This line creates the variable, assigns it with both the (temporary) date type and a content. A variable created by assignment is interpreted as typeless, that is, it can be assigned with other types in other lines and then changes the type dynamically. A variable typed with ",(0,l.kt)("inlineCode",{parentName:"p"},"C_XXX")," cannot change the type. In compiled mode, the type can never be changed, regardless of how the variable was created."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("p",null,"4D commands are built-in methods to perform an action. All 4D commands, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE RECORD"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"ALERT"),", are described in the ",(0,l.kt)("em",{parentName:"p"},"4D Language Reference")," manual, grouped by theme. Commands are often used with parameters, which are passed in brackets () and separated by semicolons (;). Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'COPY DOCUMENT("folder1\\\\name1";"folder2\\\\" ; "new")\n')),(0,l.kt)("p",null,"Some commands are attached to collections or objects, in which case they are named methods and are used using the dot notation. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"$c:=New collection(1;2;3;4;5)\n$nc:=$c.slice(0;3) //$nc=[1,2,3]  \n\n$lastEmployee:=$employee.last()\n")),(0,l.kt)("p",null,"You can use 4D plug-ins or 4D components that add new commands to your 4D development environment."),(0,l.kt)("p",null,"There are many plug-ins proposed by the 4D user community or 3rd-party developers on the market. For example, using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/miyako/4d-plugin-pdf-pages"},"4d-plugin-pdf-pages")," on macOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"PDF REMOVE PAGE(path;page)\n")),(0,l.kt)("p",null,"4D SVG is an example of a utility component extending the capabilities of your application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"//drawing a picture\nsvgRef:=SVG_New\nobjectRef:=SVG_New_arc(svgRef;100;100;90;90;180)\n")),(0,l.kt)("p",null,"4D SVG is included in 4D."),(0,l.kt)("h2",{id:"constants"},"Constants"),(0,l.kt)("p",null,"4D proposes an extensed set of predefined constants, whose values are accessible by name. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"Read Mode")," is a constant (value 2). Predefined constants appear underlined by default in the 4D Method editor. They allow writing more readable code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'vRef:=Open document("PassFile";"TEXT";Read Mode) // open doc in read only mode\n')),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("p",null,"4D provides a large number of built-in methods (or commands) but also lets you can create your own ",(0,l.kt)("strong",{parentName:"p"},"project methods"),". Project methods are user-defined methods that contain commands, operators, and other parts of the language.\nProject methods are generic methods, but there are other kinds of methods: Object methods, Form methods, Table methods (Triggers), and Database methods."),(0,l.kt)("p",null,"A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex."),(0,l.kt)("p",null,"For example, the following line is a statement that will display a confirmation dialog box:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'CONFIRM("Do you really want to close this account?";"Yes";"No")\n')),(0,l.kt)("p",null,"A method also contains tests and loops that control the flow of the execution. 4D methods support ",(0,l.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Case of...Else...End case")," branching structures as well as looping structures: ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"For each...End for each"),":"),(0,l.kt)("p",null,"The following example goes through all the characters of the text vtSomeText:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"For($vlChar;1;Length(vtSomeText))\n //Do something with the character if it is a TAB\n If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n End if\nEnd for\n")),(0,l.kt)("p",null,"A project method can call another project method with or without parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a semicolon (;). The parameters are available within the called method as consecutively numbered local variables: $1, $2,\u2026, $n. A method can return a single value in the $0 parameter. When you call a method, you just type its name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'$myText:="hello"\n$myText:=Do_Something($myText) //Call the Do_Something method\nALERT($myText) //"HELLO"\n\n  //Here the code of the method Do_Something\n$0:=Uppercase($1)\n')),(0,l.kt)("h2",{id:"data-types"},"Data Types"),(0,l.kt)("p",null,"In the language, the various types of data that can be handled are referred to as data types. There are basic data types (string, numeric, date, time, Boolean, picture, pointers, arrays), and also composite data types (BLOBs, objects, collections)."),(0,l.kt)("p",null,"Note that string and numeric data types can be associated with more than one type of field. When data is put into a field, the language automatically converts the data to the correct type for the field. For example, if an integer field is used, its data is automatically treated as numeric. In other words, you need not worry about mixing similar field types when using the language; it will manage them for you."),(0,l.kt)("p",null,"However, when using the language it is important that you do not mix different data types. In the same way that it makes no sense to store \u201cABC\u201d in a Date field, it makes no sense to put \u201cABC\u201d in a variable used for dates. In most cases, 4D is very tolerant and will try to make sense of what you are doing. For example, if you add a number to a date, 4D will assume that you want to add that number of days to the date, but if you try to add a string to a date, 4D will tell you that the operation cannot work."),(0,l.kt)("p",null,"There are cases in which you need to store data as one type and use it as another type. The language contains a full complement of commands that let you convert from one data type to another. For example, you may need to create a part number that starts with a number and ends with characters such as \u201cabc\u201d. In this case, you might write:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'[Products]Part Number:=String(Number)+"abc"\n')),(0,l.kt)("p",null,"If ",(0,l.kt)("em",{parentName:"p"},"Number")," is 17, then ",(0,l.kt)("em",{parentName:"p"},"[Products]","Part Number")," will get the string \u201c17abc\u201d."),(0,l.kt)("p",null,"The data types are fully defined in the section ",(0,l.kt)("a",{parentName:"p",href:"/docs/18/Concepts/data-types"},"Data Types"),"."),(0,l.kt)("h2",{id:"objects-and-collections"},"Objects and collections"),(0,l.kt)("p",null,"You can handle 4D language objects and collections using the object notation to get or to set their values. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'employee.name:="Smith"\n')),(0,l.kt)("p",null,"You can also use a string within square brackets, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'$vName:=employee["name"]\n')),(0,l.kt)("p",null,"Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"$vAge:=employee.children[2].age\n")),(0,l.kt)("p",null,"Note that if the object property value is an object that encapsulates a method (a formula), you need to add parenthesis () to the property name to execute the method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$f:=New object\n$f.message:=New formula(ALERT("Hello world!"))\n$f.message() //displays "Hello world!"\n')),(0,l.kt)("p",null,"To access a collection element, you have to pass the element number embedded in square brackets:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'C_COLLECTION(myColl)\nmyColl:=New collection("A";"B";1;2;Current time)\nmyColl[3]  //access to 4th element of the collection\n')),(0,l.kt)("h2",{id:"operators"},"Operators"),(0,l.kt)("p",null,"When you use the language, it is rare that you will simply want a piece of data. It is more likely that you will want to do something to or with that data. You perform such calculations with operators. Operators, in general, take two pieces of data and perform an operation on them that results in a new piece of data. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. This table shows some familiar numeric operators:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"Addition"),(0,l.kt)("td",{parentName:"tr",align:null},"1 + 2 results in 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2013"),(0,l.kt)("td",{parentName:"tr",align:null},"Subtraction"),(0,l.kt)("td",{parentName:"tr",align:null},"3 \u2013 2 results in 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiplication"),(0,l.kt)("td",{parentName:"tr",align:null},"2 * 3 results in 6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Division"),(0,l.kt)("td",{parentName:"tr",align:null},"6 / 2 results in 3")))),(0,l.kt)("p",null,"Numeric operators are just one type of operator available to you. 4D supports many different types of data, such as numbers, text, dates, and pictures, so there are operators that perform operations on these different data types."),(0,l.kt)("p",null,"The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Addition"),(0,l.kt)("td",{parentName:"tr",align:null},"1 + 2 adds the numbers and results in 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Concatenation"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201cHello \u201d + \u201cthere\u201d concatenates (joins together) the strings and results in \u201cHello there\u201d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Date and Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Date addition"),(0,l.kt)("td",{parentName:"tr",align:null},"!1989-01-01! + 20 adds 20 days to the date January 1, 1989, and results in the date January 21, 1989")))),(0,l.kt)("h2",{id:"expressions"},"Expressions"),(0,l.kt)("p",null,"Simply put, expressions return a value. In fact, when using the 4D language, you use expressions all the time and tend to think of them only in terms of the value they represent. Expressions are also sometimes referred to as formulas."),(0,l.kt)("p",null,"Expressions are made up of almost all the other parts of the language: commands, operators, variables, fields, object properties, and collection elements. You use expressions to build statements (lines of code), which in turn are used to build methods. The language uses expressions wherever it needs a piece of data."),(0,l.kt)("p",null,"Expressions rarely \u201cstand alone.\u201d There are several places in 4D where an expression can be used by itself. It includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Formula editor (apply formula, query with formula, order by formula)"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"EXECUTE FORMULA")," command"),(0,l.kt)("li",{parentName:"ul"},"The Property list, where an expression can be used as a data source for most of widgets"),(0,l.kt)("li",{parentName:"ul"},"Debugger where the value of expressions can be checked"),(0,l.kt)("li",{parentName:"ul"},"Quick Report editor as a formula for a column")),(0,l.kt)("h3",{id:"expression-types"},"Expression types"),(0,l.kt)("p",null,"You refer to an expression by the data type it returns. There are several expression types. The following table gives examples of each type of expression."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Expression"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u201cHello\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The word Hello is a string constant, indicated by the double quotation marks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u201cHello \u201d + \u201cthere\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Two strings, \u201cHello \u201d and \u201cthere\u201d, are added together (concatenated) with the string concatenation operator (+). The string \u201cHello there\u201d is returned.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u201cMr. \u201d + ","[People]","Name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Two strings are concatenated: the string \u201cMr. \u201d and the current value of the Name field in the People table. If the field contains \u201cSmith\u201d, the expression returns \u201cMr. Smith\u201d.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'Uppercase("smith")'),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"This expression uses ",(0,l.kt)("inlineCode",{parentName:"td"},"Uppercase"),", a command from the language, to convert the string \u201csmith\u201d to uppercase. It returns \u201cSMITH\u201d.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"This is a number constant, 4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4 * 2"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Two numbers, 4 and 2, are multiplied using the multiplication operator (*). The result is the number 8.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"myButton"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"This is a variable associated to a button. It returns the current value of the button: 1 if it was clicked, 0 if not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"!1997-01-25!"),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"This is a date constant for the date 1/25/97 (January 25, 1997).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Current date+ 30"),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"This is a date expression that uses the ",(0,l.kt)("inlineCode",{parentName:"td"},"Current date")," command to get today\u2019s date. It adds 30 days to today\u2019s date and returns the new date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"?8:05:30?"),(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"This is a time constant that represents 8 hours, 5 minutes, and 30 seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"?2:03:04? + ?1:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"This expression adds two times together and returns the time 3:05:07.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"This command returns the Boolean value TRUE.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 # 20"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"This is a logical comparison between two numbers. The number sign (#) means \u201cis not equal to\u201d. Since 10 \u201cis not equal to\u201d 20, the expression returns TRUE.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u201cABC\u201d = \u201cXYZ\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"This is a logical comparison between two strings. They are not equal, so the expression returns FALSE.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"My Picture + 50"),(0,l.kt)("td",{parentName:"tr",align:null},"Picture"),(0,l.kt)("td",{parentName:"tr",align:null},"This expression takes the picture in My Picture, moves it 50 pixels to the right, and returns the resulting picture.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->","[People]","Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Pointer"),(0,l.kt)("td",{parentName:"tr",align:null},"This expression returns a pointer to the field called ","[People]","Name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table (1)"),(0,l.kt)("td",{parentName:"tr",align:null},"Pointer"),(0,l.kt)("td",{parentName:"tr",align:null},"This is a command that returns a pointer to the first table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON Parse (MyString)"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"This is a command that returns MyString as an object (if proper format)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON Parse (MyJSONArray)"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection"),(0,l.kt)("td",{parentName:"tr",align:null},"This is a command that returns MyJSONArray as a collection (if proper format)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Form.pageNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"Object property"),(0,l.kt)("td",{parentName:"tr",align:null},"An object property is an expression that can be of any supported type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Col","[5]"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection element"),(0,l.kt)("td",{parentName:"tr",align:null},"A collection element is an expression that can be of any supported type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$entitySel","[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"Entity"),(0,l.kt)("td",{parentName:"tr",align:null},"A element of an ORDA entity selection is an expression of the entity type. This kind of expression is ",(0,l.kt)("strong",{parentName:"td"},"non-assignable"))))),(0,l.kt)("h3",{id:"assignable-vs-non-assignable-expressions"},"Assignable vs non-assignable expressions"),(0,l.kt)("p",null,'An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like ',(0,l.kt)("inlineCode",{parentName:"p"},"$myButton"),". It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are ",(0,l.kt)("strong",{parentName:"p"},"non-assignable"),", which means that you cannot assign a value to them.\nIn 4D, expressions can be ",(0,l.kt)("strong",{parentName:"p"},"assignable"),". An expression is assignable when it can be used on the left side of an assignation. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'//$myVar variable is assignable, you can write:  \n$myVar:="Hello" //assign "Hello" to myVar\n//Form.pageNumber is assignable, you can write:  \nForm.pageNumber:=10 //assign 10 to Form.pageNumber\n//Form.pageTotal-Form.pageNumber is not assignable:\nForm.pageTotal- Form.pageNumber:=10 //error, non-assignable\n')),(0,l.kt)("p",null,"In general, expressions that use an operator are non-assignable. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},'[Person]FirstName+" "+[Person]LastName')," is not assignable."),(0,l.kt)("h2",{id:"pointers"},"Pointers"),(0,l.kt)("p",null,"The 4D language provides an advanced implementation of pointers, that allow writing powerful and modular code. You can use pointers to reference tables, fields, variables, arrays, and array elements."),(0,l.kt)("p",null,'A pointer to an element is created by adding a "->" symbol before the element name, and can be dereferenced by adding the "->" symbol after the pointer name.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'MyVar:="Hello"\nMyPointer:=->MyVar\nALERT(MyPointer->)\n')),(0,l.kt)("h2",{id:"comments"},"Comments"),(0,l.kt)("p",null,"Comments are inactive lines of code. These lines are not interpreted by the 4D language and are not executed when the code is called."),(0,l.kt)("p",null,"There are two ways to create comments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"//")," for single line comments"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/*...*/")," for inline or multiline commnents.")),(0,l.kt)("p",null,"Both styles of comments can be used simultaneously."),(0,l.kt)("h4",{id:"single-line-comments-"},"Single line comments (//)"),(0,l.kt)("p",null,"Insert ",(0,l.kt)("inlineCode",{parentName:"p"},"//")," at the beginning of a line or after a statement to add a single line comment. Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"//This is a comment\nFor($vCounter;1;100) //Starting loop\n  //comment\n  //comment\n  //comment\n End for\n")),(0,l.kt)("h4",{id:"inline-or-multiline-comments-"},"Inline or multiline comments (/**/)"),(0,l.kt)("p",null,"Surround contents with ",(0,l.kt)("inlineCode",{parentName:"p"},"/*")," ... ",(0,l.kt)("inlineCode",{parentName:"p"},"*/")," characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with ",(0,l.kt)("inlineCode",{parentName:"p"},"/*")," and end with ",(0,l.kt)("inlineCode",{parentName:"p"},"*/"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Inline comments")," can be inserted anywhere in the code. Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"For /* inline comment */ ($vCounter;1;100)\n ...\nEnd for\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Multiline comment blocks")," allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the 4D code editor supports block collapsing). Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"For ($vCounter;1;100)\n/*\ncomments  \n /*\n other comments\n */\n*/\n...\nEnd for\n")))}c.isMDXComponent=!0},47680:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/helloworld-3e6e70b5b735baa9c97019730d06bfdd.png"}}]);