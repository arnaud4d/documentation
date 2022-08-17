"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23902],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,p=u["".concat(i,".").concat(h)]||u[h]||m[h]||r;return a?n.createElement(p,l(l({ref:t},c),{},{components:a})):n.createElement(p,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const l={id:"methods",title:"Methods"},s=void 0,i={unversionedId:"Concepts/methods",id:"version-18/Concepts/methods",title:"Methods",description:"A method is basically a piece of code that executes one or several actions. In the 4D Language, there are two categories of methods:",source:"@site/versioned_docs/version-18/Concepts/methods.md",sourceDirName:"Concepts",slug:"/Concepts/methods",permalink:"/docs/fr/18/Concepts/methods",draft:!1,tags:[],version:"18",frontMatter:{id:"methods",title:"Methods"},sidebar:"docs",previous:{title:"Arrays",permalink:"/docs/fr/18/Concepts/arrays"},next:{title:"Parameters",permalink:"/docs/fr/18/Concepts/parameters"}},d={},c=[{value:"Calling Project Methods",id:"calling-project-methods",level:2},{value:"Subroutines and functions",id:"subroutines-and-functions",level:3},{value:"Methods attached to objects",id:"methods-attached-to-objects",level:3},{value:"Menu Methods",id:"menu-methods",level:3},{value:"Process Methods",id:"process-methods",level:3},{value:"Event and Error catching Methods",id:"event-and-error-catching-methods",level:3},{value:"Recursive Project Methods",id:"recursive-project-methods",level:2},{value:"Specialized Methods",id:"specialized-methods",level:2}],m={toc:c};function u(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",o({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A method is basically a piece of code that executes one or several actions. In the 4D Language, there are two categories of methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"built-in methods"),", which are provided by 4D or third-party developers and can be only called in your code. Built-in methods include:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Commands and functions of the 4D API, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ALERT")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Current date"),"."),(0,n.kt)("li",{parentName:"ul"},"Methods attached to collections or native objects, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"collection.orderBy()")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"entity.save()"),"."),(0,n.kt)("li",{parentName:"ul"},"Commands from plug-ins or components, provided by 4D or third-party developers, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"SVG_New_arc"),".")),(0,n.kt)("p",{parentName:"li"},"Built-in methods are detailed in the ",(0,n.kt)("em",{parentName:"p"},"4D Language reference")," manual or dedicated manuals for plug-ins or components.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"project methods"),", where you can write your own code to execute any custom actions. Once a project method is created, it becomes part of the language of the database in which you create it. A project method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks).\nThe maximum size of a project method is limited to 2 GB of text or 32,000 lines of command."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," 4D also provides specific methods that are automatically executed depending on database or form events. See ",(0,n.kt)("a",o({parentName:"p"},{href:"#specialized-methods"}),"Specialized methods"),"."),(0,n.kt)("h2",o({},{id:"calling-project-methods"}),"Calling Project Methods"),(0,n.kt)("p",null,"A project method can have one of the following roles, depending on how it is executed and used:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Subroutine and function"),(0,n.kt)("li",{parentName:"ul"},"Method attached to object"),(0,n.kt)("li",{parentName:"ul"},"Menu method"),(0,n.kt)("li",{parentName:"ul"},"Process method"),(0,n.kt)("li",{parentName:"ul"},"Event or Error catching method")),(0,n.kt)("h3",o({},{id:"subroutines-and-functions"}),"Subroutines and functions"),(0,n.kt)("p",null,"A subroutine is a project method that can be thought of as a servant. It performs those tasks that other methods request it to perform. A function is a subroutine that returns a value to the method that called it."),(0,n.kt)("p",null,"When you create a project method, it becomes part of the language of the database in which you create it. You can then call the project method from other project methods, or from ",(0,n.kt)("a",o({parentName:"p"},{href:"#predefined-methods"}),"predefined methods")," in the same way that you call 4D\u2019s built-in commands. A project method used in this way is called a subroutine."),(0,n.kt)("p",null,"You use subroutines to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reduce repetitive coding"),(0,n.kt)("li",{parentName:"ul"},"Clarify your methods"),(0,n.kt)("li",{parentName:"ul"},"Facilitate changes to your methods"),(0,n.kt)("li",{parentName:"ul"},"Modularize your code")),(0,n.kt)("p",null,"For example, let\u2019s say you have a database of customers. As you customize the database, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. The code to do this might look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'  // Look for a customer\n QUERY BY EXAMPLE([Customers])\n  // Select the input form\n FORM SET INPUT([Customers];"Data Entry")\n  // Modify the customer\'s record\n MODIFY RECORD([Customers])\n')),(0,n.kt)("p",null,"If you do not use subroutines, you will have to write the code each time you want to modify a customer\u2019s record. If there are ten places in your custom database where you need to do this, you will have to write the code ten times. If you use subroutines, you will only have to write it once. This is the first advantage of subroutines\u2014to reduce the amount of code."),(0,n.kt)("p",null,"If the previously described code was a method called ",(0,n.kt)("inlineCode",{parentName:"p"},"MODIFY CUSTOMER"),", you would execute it simply by using the name of the method in another method. For example, to modify a customer\u2019s record and then print the record, you would write this method:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"})," MODIFY CUSTOMER\n PRINT SELECTION([Customers])\n")),(0,n.kt)("p",null,"This capability simplifies your methods dramatically. In the example, you do not need to know how the ",(0,n.kt)("inlineCode",{parentName:"p"},"MODIFY CUSTOMER")," method works, just what it does. This is the second reason for using subroutines\u2014to clarify your methods. In this way, your methods become extensions to the 4D language."),(0,n.kt)("p",null,"If you need to change your method of finding customers in this example database, you will need to change only one method, not ten. This is the next reason to use subroutines\u2014to facilitate changes to your methods."),(0,n.kt)("p",null,"Using subroutines, you make your code modular. This simply means dividing your code into modules (subroutines), each of which performs a logical task. Consider the following code from a checking account database:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"})," FIND CLEARED CHECKS ` Find the cleared checks\n RECONCILE ACCOUNT ` Reconcile the account\n PRINT CHECK BOOK REPORT ` Print a checkbook report\n")),(0,n.kt)("p",null,"Even for someone who doesn\u2019t know the database, it is clear what this code does. It is not necessary to examine each subroutine. Each subroutine might be many lines long and perform some complex operations, but here it is only important that it performs its task. We recommend that you divide your code into logical tasks, or modules, whenever possible."),(0,n.kt)("h3",o({},{id:"methods-attached-to-objects"}),"Methods attached to objects"),(0,n.kt)("p",null,"You can encapsulate your project methods in ",(0,n.kt)("strong",{parentName:"p"},"formula")," objects and call them from your objects."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Formula")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Formula from string")," commands allow you to create native formula objects that you can encapsulate in object properties. It allows you to implement custom object methods."),(0,n.kt)("p",null,"To execute a method stored in an object property, use the ",(0,n.kt)("strong",{parentName:"p"},"( )")," operator after the property name. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'//myAlert\nALERT("Hello world!")\n')),(0,n.kt)("p",null,"Then ",(0,n.kt)("inlineCode",{parentName:"p"},"myAlert")," can be encapsulated in any object and called:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($o)\n$o:=New object("custom_Alert";Formula(myAlert))\n$o.custom_Alert() //displays "Hello world!"\n')),(0,n.kt)("p",null,"Syntax with brackets is also supported:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$o["custom_Alert"]() //displays "Hello world!"\n')),(0,n.kt)("p",null,"You can also ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/18/Concepts/parameters"}),"pass parameters")," to your formula when you call it by using $1, $2\u2026 just like with 4D project methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'//fullName method\nC_TEXT($0;$1;$2)\n$0:=$1+" "+$2\n')),(0,n.kt)("p",null,"You can encapsulate ",(0,n.kt)("inlineCode",{parentName:"p"},"fullName")," in an object:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($o)\n$o:=New object("full_name";Formula(fullName))\n$result:=$o.full_name("John";"Smith")\n//$result = "John Smith"\n// equivalent to $result:=fullName("param1";"param2")\n')),(0,n.kt)("p",null,"Combined with the ",(0,n.kt)("inlineCode",{parentName:"p"},"This"),"function, such object methods allow writing powerful generic code. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'//fullName2 method\nC_TEXT($0)\n$0:=This.firstName+" "+This.lastName\n')),(0,n.kt)("p",null,"Then the method acts like a new, calculated attribute that can be added to other attributes:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($o)\n$o:=New object("firstName";"Jim";"lastName";"Wesson")\n$o.fullName:=Formula(fullName2) //add the method  \n\n$result:=$o.fullName()\n//$result = "Jim Wesson"\n')),(0,n.kt)("p",null,"Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$o:=$f.message //returns the formula object in $o\n")),(0,n.kt)("h3",o({},{id:"menu-methods"}),"Menu Methods"),(0,n.kt)("p",null,'A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a command of the "Menus" theme. The method executes when the menu command is chosen. This process is one of the major aspects of customizing a database. By creating custom menus with menu methods that perform specific actions, you personalize your database.'),(0,n.kt)("p",null,"Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the ",(0,n.kt)("inlineCode",{parentName:"p"},"ADD RECORD")," command until the user cancels the data entry activity."),(0,n.kt)("p",null,"Automating sequences of activities is a very powerful capability of the programming language. Using custom menus, you can automate task sequences and thus provide more guidance to users of the database."),(0,n.kt)("h3",o({},{id:"process-methods"}),"Process Methods"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"process method")," is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with ",(0,n.kt)("em",{parentName:"p"},"Start a New Process")," property is also the process method for the newly started process."),(0,n.kt)("h3",o({},{id:"event-and-error-catching-methods"}),"Event and Error catching Methods"),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"event catching method")," runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. For more information, see the description of the command ",(0,n.kt)("inlineCode",{parentName:"p"},"ON EVENT CALL"),"."),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"error catching method")," is an interrupt-based project method. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL"),"."),(0,n.kt)("h2",o({},{id:"recursive-project-methods"}),"Recursive Project Methods"),(0,n.kt)("p",null,"Project methods can call themselves. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The method A may call the method B which may call A, so A will call B again and so on."),(0,n.kt)("li",{parentName:"ul"},"A method can call itself.")),(0,n.kt)("p",null,"This is called recursion. The 4D language fully supports recursion."),(0,n.kt)("p",null,"Here is an example. Let\u2019s say you have a ",(0,n.kt)("inlineCode",{parentName:"p"},"[Friends and Relatives]")," table composed of this extremely simplified set of fields:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[Friends and Relatives]Name")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[Friends and Relatives]ChildrensName"))),(0,n.kt)("p",null,"For this example, we assume the values in the fields are unique (there are no two persons with the same name). Given a name, you want to build the sentence \u201cA friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!\u201d:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You can build the sentence in this way:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       $vtTheWholeStory:="A friend of mine, "+$vsName\n       Repeat\n          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)\n          $vlQueryResult:=Records in selection([Friends and Relatives])\n          If($vlQueryResult>0)\n             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name\n             $vsName:=[Friends and Relatives]Name\n          End if\n       Until($vlQueryResult=0)\n       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"\n       ALERT($vtTheWholeStory)\n    End if\n End if\n')),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"You can also build it this way:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")\n    End if\n End if\n')),(0,n.kt)("p",null,"with the recursive function ",(0,n.kt)("inlineCode",{parentName:"p"},"Genealogy of")," listed here:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'  ` Genealogy of project method\n  ` Genealogy of ( String ) -> Text\n  ` Genealogy of ( Name ) -> Part of sentence\n\n $0:=$1\n QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)\n If(Records in selection([Friends and Relatives])>0)\n    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)\n End if\n')),(0,n.kt)("p",null,"Note the ",(0,n.kt)("inlineCode",{parentName:"p"},"Genealogy of")," method which calls itself."),(0,n.kt)("p",null,"The first way is an ",(0,n.kt)("strong",{parentName:"p"},"iterative algorithm"),". The second way is a ",(0,n.kt)("strong",{parentName:"p"},"recursive algorithm"),"."),(0,n.kt)("p",null,"When implementing code for cases like the previous example, it is important to note that you can always write methods using iteration or recursion. Typically, recursion provides more concise, readable, and maintainable code, but using it is not mandatory."),(0,n.kt)("p",null,"Some typical uses of recursion in 4D are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Treating records within tables that relate to each other in the same way as in the example."),(0,n.kt)("li",{parentName:"ul"},"Browsing documents and folders on your disk, using the commands ",(0,n.kt)("inlineCode",{parentName:"li"},"FOLDER LIST")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"DOCUMENT LIST"),". A folder may contain folders and documents, the subfolders can themselves contain folders and documents, and so on.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important:")," Recursive calls should always end at some point. In the example, the method ",(0,n.kt)("inlineCode",{parentName:"p"},"Genealogy of")," stops calling itself when the query returns no records. Without this condition test, the method would call itself indefinitely; eventually, 4D would return a \u201cStack Full\u201d error becuase it would no longer have space to \u201cpile up\u201d the calls (as well as parameters and local variables used in the method)."),(0,n.kt)("h2",o({},{id:"specialized-methods"}),"Specialized Methods"),(0,n.kt)("p",null,"In addition to generic ",(0,n.kt)("strong",{parentName:"p"},"project methods"),", 4D supports several specific method types, that are automatically called depending on events:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Calling context"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Accepts parameters"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Object (widget) method")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Automatic, when an event involves the object to which the method is attached"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Property of a form object (also called widget)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Form method")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Automatic, when an event involves the form to which the method is attached"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Trigger")," (aka ",(0,n.kt)("em",{parentName:"td"},"Table method"),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Automatic, each time that you manipulate the records of a table (Add, Delete and Modify)"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Property of a table. Triggers are methods that can prevent \u201cillegal\u201d operations with the records of your database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Database method")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Automatic, when a working session event occurs"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Yes (predefined)"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"There are 16 database methods in 4D. See Database methods section")))))}u.isMDXComponent=!0}}]);