"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15783],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),h=a,p=u["".concat(i,".").concat(h)]||u[h]||m[h]||r;return o?n.createElement(p,l(l({ref:t},d),{},{components:o})):n.createElement(p,l({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},49244:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),l=["components"],s={id:"methods",title:"Methods"},i=void 0,c={unversionedId:"Concepts/methods",id:"Concepts/methods",title:"Methods",description:"A method is basically a piece of code that executes one or several actions. A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks).",source:"@site/docs/Concepts/methods.md",sourceDirName:"Concepts",slug:"/Concepts/methods",permalink:"/docs/fr/docs/next/Concepts/methods",draft:!1,tags:[],version:"current",frontMatter:{id:"methods",title:"Methods"},sidebar:"docs",previous:{title:"Arrays",permalink:"/docs/fr/docs/next/Concepts/arrays"},next:{title:"Parameters",permalink:"/docs/fr/docs/next/Concepts/parameters"}},d={},m=[{value:"Method Types",id:"method-types",level:2},{value:"Calling Project Methods",id:"calling-project-methods",level:2},{value:"Subroutines",id:"subroutines",level:3},{value:"Object formulas",id:"object-formulas",level:3},{value:"Menu Methods",id:"menu-methods",level:3},{value:"Process Methods",id:"process-methods",level:3},{value:"Event and Error catching Methods",id:"event-and-error-catching-methods",level:3},{value:"Manual Execution",id:"manual-execution",level:3},{value:"From the Code Editor",id:"from-the-code-editor",level:4},{value:"From the Execute Method dialog box",id:"from-the-execute-method-dialog-box",level:4},{value:"Recursive Project Methods",id:"recursive-project-methods",level:2}],u={toc:m};function h(e){var t=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A method is basically a piece of code that executes one or several actions. A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks)."),(0,r.kt)("p",null,"The maximum size of a method is limited to 2 GB of text or 32,000 lines of code.  "),(0,r.kt)("h2",{id:"method-types"},"Method Types"),(0,r.kt)("p",null,"In the 4D Language, there are several categories of methods. The category depends on how they can be called:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Calling context"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepts parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Project method")),(0,r.kt)("td",{parentName:"tr",align:null},"On demand, when the project method name is called (see ",(0,r.kt)("a",{parentName:"td",href:"#calling-project-methods"},"Calling project methods"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Can contain any code to execute any custom actions. Once a project method is created, it becomes part of the language of the project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Object (widget) method")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic, when an event involves the object to which the method is attached"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Property of a form object (also called widget)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Form method")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic, when an event involves the form to which the method is attached"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Trigger")," (aka ",(0,r.kt)("em",{parentName:"td"},"Table method"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic, each time that you manipulate the records of a table (Add, Delete and Modify)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Property of a table. Triggers are methods that can prevent \u201cillegal\u201d operations with the records of your database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Database method")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic, when a working session event occurs"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes (predefined)"),(0,r.kt)("td",{parentName:"tr",align:null},"There are 16 database methods in 4D. See Database methods section")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The 4D Language also supports ",(0,r.kt)("strong",{parentName:"p"},"Class functions"),", that can be called in the context of an object instance. Class functions can be built-in (",(0,r.kt)("em",{parentName:"p"},"e.g.")," ",(0,r.kt)("inlineCode",{parentName:"p"},"collection.orderBy()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"entity.save()"),"), or ",(0,r.kt)("a",{parentName:"p",href:"/docs/fr/docs/next/Concepts/classes#class-function"},"created by the 4D developer"),".")),(0,r.kt)("h2",{id:"calling-project-methods"},"Calling Project Methods"),(0,r.kt)("p",null,"A project method can have one of the following roles, depending on how it is executed and used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subroutine"),(0,r.kt)("li",{parentName:"ul"},"Object formula"),(0,r.kt)("li",{parentName:"ul"},"Menu method"),(0,r.kt)("li",{parentName:"ul"},"Process method"),(0,r.kt)("li",{parentName:"ul"},"Event or Error catching method")),(0,r.kt)("p",null,"You can also execute your project methods manually, for testing purpose for example."),(0,r.kt)("h3",{id:"subroutines"},"Subroutines"),(0,r.kt)("p",null,"A subroutine is a project method that can be thought of as a servant. It performs those tasks that other methods request it to perform. A function is a subroutine that returns a value to the method that called it."),(0,r.kt)("p",null,"When you create a project method, it becomes part of the language of the project in which you create it. You can then call the project method from another method (project method, object method...) in the same way that you call 4D\u2019s built-in commands. A project method used in this way is called a subroutine."),(0,r.kt)("p",null,"You use subroutines to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reduce repetitive coding"),(0,r.kt)("li",{parentName:"ul"},"Clarify your methods"),(0,r.kt)("li",{parentName:"ul"},"Facilitate changes to your methods"),(0,r.kt)("li",{parentName:"ul"},"Modularize your code")),(0,r.kt)("p",null,"For example, let\u2019s say you have a project of customers. As you customize the project, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. The code to do this might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'  // Look for a customer\n QUERY BY EXAMPLE([Customers])\n  // Select the input form\n FORM SET INPUT([Customers];"Data Entry")\n  // Modify the customer\'s record\n MODIFY RECORD([Customers])\n')),(0,r.kt)("p",null,"If you do not use subroutines, you will have to write the code each time you want to modify a customer\u2019s record. If there are ten places in your project where you need to do this, you will have to write the code ten times. If you use subroutines, you will only have to write it once. This is the first advantage of subroutines\u2014to reduce the amount of code."),(0,r.kt)("p",null,"If the previously described code was a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFY_CUSTOMER"),", you would execute it simply by using the name of the method in another method. For example, to modify a customer\u2019s record and then print the record, you would write this method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," MODIFY_CUSTOMER\n PRINT SELECTION([Customers])\n")),(0,r.kt)("p",null,"This capability simplifies your methods dramatically. In the example, you do not need to know how the ",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFY_CUSTOMER")," method works, just what it does. This is the second reason for using subroutines\u2014to clarify your methods. In this way, your methods become extensions to the 4D language."),(0,r.kt)("p",null,"If you need to change your method of finding customers in this example project, you will need to change only one method, not ten. This is the next reason to use subroutines\u2014to facilitate changes to your methods."),(0,r.kt)("p",null,"Using subroutines, you make your code modular. This simply means dividing your code into modules (subroutines), each of which performs a logical task. Consider the following code from a checking account project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," FIND_CLEARED_CHECKS //Find the cleared checks\n RECONCILE_ACCOUNT //Reconcile the account\n PRINT_CHECK_BOOK_REPORT //Print a checkbook report\n")),(0,r.kt)("p",null,"Even for someone who doesn\u2019t know the project, it is clear what this code does. It is not necessary to examine each subroutine. Each subroutine might be many lines long and perform some complex operations, but here it is only important that it performs its task. We recommend that you divide your code into logical tasks, or modules, whenever possible."),(0,r.kt)("h3",{id:"object-formulas"},"Object formulas"),(0,r.kt)("p",null,"You can encapsulate your project methods in ",(0,r.kt)("strong",{parentName:"p"},"formula")," objects and call them from your objects."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Formula")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Formula from string")," commands allow you to create native formula objects that you can encapsulate in object properties. It allows you to implement custom object methods."),(0,r.kt)("p",null,"To execute a method stored in an object property, use the ",(0,r.kt)("strong",{parentName:"p"},"( )")," operator after the property name. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'//myAlert\nALERT("Hello world!")\n')),(0,r.kt)("p",null,"Then ",(0,r.kt)("inlineCode",{parentName:"p"},"myAlert")," can be encapsulated in any object and called:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($o)\n$o:=New object("custom_Alert";Formula(myAlert))\n$o.custom_Alert() //displays "Hello world!"\n')),(0,r.kt)("p",null,"Syntax with brackets is also supported:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'$o["custom_Alert"]() //displays "Hello world!"\n')),(0,r.kt)("p",null,"You can also ",(0,r.kt)("a",{parentName:"p",href:"/docs/fr/docs/next/Concepts/parameters"},"pass parameters")," to your formula when you call it by using $1, $2\u2026 just like with 4D project methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'//fullName method\nC_TEXT($0;$1;$2)\n$0:=$1+" "+$2\n')),(0,r.kt)("p",null,"You can encapsulate ",(0,r.kt)("inlineCode",{parentName:"p"},"fullName")," in an object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($o)\n$o:=New object("full_name";Formula(fullName))\n$result:=$o.full_name("John";"Smith") \n//$result = "John Smith"\n// equivalent to $result:=fullName("param1";"param2")\n')),(0,r.kt)("p",null,"Combined with the ",(0,r.kt)("inlineCode",{parentName:"p"},"This"),"function, such object methods allow writing powerful generic code. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'//fullName2 method\nC_TEXT($0)\n$0:=This.firstName+" "+This.lastName\n')),(0,r.kt)("p",null,"Then the method acts like a new, calculated attribute that can be added to other attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($o)\n$o:=New object("firstName";"Jim";"lastName";"Wesson")\n$o.fullName:=Formula(fullName2) //add the method  \n\n$result:=$o.fullName() \n//$result = "Jim Wesson"\n')),(0,r.kt)("p",null,"Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"$o:=$f.message //returns the formula object in $o\n")),(0,r.kt)("h3",{id:"menu-methods"},"Menu Methods"),(0,r.kt)("p",null,'A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a command of the "Menus" theme. The method executes when the menu command is chosen. By creating custom menus with menu methods that perform specific actions, you create custom interfaces for your desktop applications.'),(0,r.kt)("p",null,"Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD RECORD")," command until the user cancels the data entry activity."),(0,r.kt)("p",null,"Automating sequences of activities is a very powerful capability of the programming language. Using custom menus, you can automate task sequences and thus provide more guidance to users of the application."),(0,r.kt)("h3",{id:"process-methods"},"Process Methods"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"process method")," is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with ",(0,r.kt)("em",{parentName:"p"},"Start a New Process")," property is also the process method for the newly started process."),(0,r.kt)("h3",{id:"event-and-error-catching-methods"},"Event and Error catching Methods"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"event catching method")," runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. For more information, see the description of the command ",(0,r.kt)("inlineCode",{parentName:"p"},"ON EVENT CALL"),"."),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"error catching method")," is an interrupt-based project method. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL"),"."),(0,r.kt)("h3",{id:"manual-execution"},"Manual Execution"),(0,r.kt)("p",null,"Project methods written in your application are usually called automatically during the use of the application via menu commands, buttons, other methods, and so on. As for database methods, they are executed in relation to specific events that occur in the application."),(0,r.kt)("p",null,"However, for testing and debugging purposes, 4D lets you manually execute project methods and certain database methods in Design mode. In this case, it is possible to run the method in a new process and/or directly in Debug mode, in order to check its execution step by step."),(0,r.kt)("p",null,"You can execute methods in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the Code Editor window,"),(0,r.kt)("li",{parentName:"ul"},"From the Execute Method dialog box (project methods only).")),(0,r.kt)("h4",{id:"from-the-code-editor"},"From the Code Editor"),(0,r.kt)("p",null,"Each ",(0,r.kt)("a",{parentName:"p",href:"/docs/fr/docs/next/code-editor/write-class-method"},(0,r.kt)("strong",{parentName:"a"},"Code Editor"))," window has a button that can be used to run the current method. Using the menu associated with this button, you can choose the type of execution desired."),(0,r.kt)("p",null,"This button is only active for project methods and for the following database methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On Startup"),(0,r.kt)("li",{parentName:"ul"},"On Exit"),(0,r.kt)("li",{parentName:"ul"},"On Server Startup"),(0,r.kt)("li",{parentName:"ul"},"On Server Shutdown")),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/fr/docs/next/code-editor/write-class-method#toolbar"},"Toolbar"),"."),(0,r.kt)("h4",{id:"from-the-execute-method-dialog-box"},"From the Execute Method dialog box"),(0,r.kt)("p",null,"When you select the ",(0,r.kt)("strong",{parentName:"p"},"Method...")," command of the ",(0,r.kt)("strong",{parentName:"p"},"Run")," menu,  displays the ",(0,r.kt)("strong",{parentName:"p"},"Execute Method")," dialog."),(0,r.kt)("p",null,"This dialog box lists all the project methods of the database, including shared project methods of components. On the other hand, project methods that have been declared invisible will not appear."),(0,r.kt)("p",null,"To execute a project method, simply select its name in the list and click on ",(0,r.kt)("strong",{parentName:"p"},"Execute"),". To run a method step by step in Debug mode, click on ",(0,r.kt)("strong",{parentName:"p"},"Debug"),". For more information about the 4D debugger, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/fr/docs/next/Debugging/basics"},"Debugging")," section."),(0,r.kt)("p",null,"If you check the ",(0,r.kt)("strong",{parentName:"p"},"New Process")," check box, the method you selected executes in another process. If the method is performing a time-consuming task such as printing a large set of records, you can continue to work with your database, adding records to a table, creating a graph to display data, and so on. For more information about processes, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html"},"Processes")," the 4D ",(0,r.kt)("em",{parentName:"p"},"Language Reference")," manual."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4D Server Notes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you want the method to be executed on the server machine rather than on the client machine, select the ",(0,r.kt)("strong",{parentName:"li"},"On 4D Server")," option in the To be executed menu. In this case, a new process, call a ",(0,r.kt)("em",{parentName:"li"},"stored procedure"),", is created on the server machine in order to execute the method. This option can be used to reduce network traffic and optimize the functioning of 4D Server, in particular for methods that call data stored on the disk. All types of methods can be executed on the server machine or on another client machine, except for those that modify the user interface. In this case, stored procedures are ineffective."),(0,r.kt)("li",{parentName:"ul"},'You can also choose to run the method on another client workstation. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the ',(0,r.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page648.html"},"REGISTER CLIENT"),".")),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("strong",{parentName:"p"},"locally")," option is selected. With the 4D single-user version, this is the only option available."),(0,r.kt)("h2",{id:"recursive-project-methods"},"Recursive Project Methods"),(0,r.kt)("p",null,"Project methods can call themselves. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The method A may call the method B which may call A, so A will call B again and so on."),(0,r.kt)("li",{parentName:"ul"},"A method can call itself.")),(0,r.kt)("p",null,"This is called recursion. The 4D language fully supports recursion."),(0,r.kt)("p",null,"Here is an example. Let\u2019s say you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"[Friends and Relatives]")," table composed of this extremely simplified set of fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[Friends and Relatives]Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[Friends and Relatives]ChildrensName"))),(0,r.kt)("p",null,"For this example, we assume the values in the fields are unique (there are no two persons with the same name). Given a name, you want to build the sentence \u201cA friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!\u201d:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can build the sentence in this way:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       $vtTheWholeStory:="A friend of mine, "+$vsName\n       Repeat\n          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)\n          $vlQueryResult:=Records in selection([Friends and Relatives])\n          If($vlQueryResult>0)\n             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name\n             $vsName:=[Friends and Relatives]Name\n          End if\n       Until($vlQueryResult=0)\n       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"\n       ALERT($vtTheWholeStory)\n    End if\n End if\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You can also build it this way:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")\n    End if\n End if\n')),(0,r.kt)("p",null,"with the recursive function ",(0,r.kt)("inlineCode",{parentName:"p"},"Genealogy of")," listed here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'  ` Genealogy of project method\n  ` Genealogy of ( String ) -> Text\n  ` Genealogy of ( Name ) -> Part of sentence\n \n $0:=$1\n QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)\n If(Records in selection([Friends and Relatives])>0)\n    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)\n End if\n')),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"Genealogy of")," method which calls itself."),(0,r.kt)("p",null,"The first way is an ",(0,r.kt)("strong",{parentName:"p"},"iterative algorithm"),". The second way is a ",(0,r.kt)("strong",{parentName:"p"},"recursive algorithm"),"."),(0,r.kt)("p",null,"When implementing code for cases like the previous example, it is important to note that you can always write methods using iteration or recursion. Typically, recursion provides more concise, readable, and maintainable code, but using it is not mandatory."),(0,r.kt)("p",null,"Some typical uses of recursion in 4D are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Treating records within tables that relate to each other in the same way as in the example."),(0,r.kt)("li",{parentName:"ul"},"Browsing documents and folders on your disk, using the commands ",(0,r.kt)("inlineCode",{parentName:"li"},"FOLDER LIST")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"DOCUMENT LIST"),". A folder may contain folders and documents, the subfolders can themselves contain folders and documents, and so on.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important:")," Recursive calls should always end at some point. In the example, the method ",(0,r.kt)("inlineCode",{parentName:"p"},"Genealogy of")," stops calling itself when the query returns no records. Without this condition test, the method would call itself indefinitely; eventually, 4D would return a \u201cStack Full\u201d error becuase it would no longer have space to \u201cpile up\u201d the calls (as well as parameters and local variables used in the method)."))}h.isMDXComponent=!0}}]);