"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={id:"object",title:"Object"},s=void 0,p={unversionedId:"Concepts/object",id:"version-19-R6/Concepts/object",title:"Object",description:'Variables, fields or expressions of the Object type can contain various types of data. The structure of "native" 4D objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation:',source:"@site/versioned_docs/version-19-R6/Concepts/dt_object.md",sourceDirName:"Concepts",slug:"/Concepts/object",permalink:"/docs/docs/Concepts/object",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"object",title:"Object"},sidebar:"docs",previous:{title:"Number (Real, Longint, Integer)",permalink:"/docs/docs/Concepts/number"},next:{title:"Picture",permalink:"/docs/docs/Concepts/picture"}},c={},u=[{value:"Initialization",id:"initialization",level:2},{value:"Regular or shared object",id:"regular-or-shared-object",level:3},{value:"Syntax basics",id:"syntax-basics",level:2},{value:"Object properties",id:"object-properties",level:3},{value:"Pointers",id:"pointers",level:3},{value:"Null value",id:"null-value",level:3},{value:"Undefined value",id:"undefined-value",level:3},{value:"Examples",id:"examples",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Variables, fields or expressions of the Object type can contain various types of data. The structure of "native" 4D objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation: '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'A property name is always a text, for example "Name". It must follow ',(0,r.kt)("a",{parentName:"p",href:"/docs/docs/Concepts/identifiers#object-properties"},"specific rules"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A property value can be of the following type:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"number (Real, Integer, etc.)"),(0,r.kt)("li",{parentName:"ul"},"text"),(0,r.kt)("li",{parentName:"ul"},"null"),(0,r.kt)("li",{parentName:"ul"},"boolean"),(0,r.kt)("li",{parentName:"ul"},"pointer (stored as such, evaluated using the ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON Stringify")," command or when copying),"),(0,r.kt)("li",{parentName:"ul"},"date (date type or ISO date format string)"),(0,r.kt)("li",{parentName:"ul"},"object(1) (objects can be nested on several levels)"),(0,r.kt)("li",{parentName:"ul"},"picture(2)"),(0,r.kt)("li",{parentName:"ul"},"collection")))),(0,r.kt)("p",null,"(1)ORDA objects such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/ORDA/dsmapping#entity"},"entities")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/ORDA/dsmapping#entity-selection"},"entity selections")," cannot be stored in ",(0,r.kt)("strong",{parentName:"p"},"object fields"),"; however, they are fully supported in ",(0,r.kt)("strong",{parentName:"p"},"object variables")," in memory. "),(0,r.kt)("p",null,'(2)When exposed as text in the debugger or exported to JSON, picture object properties print "',"[object Picture]",'". '),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," Keep in mind that attribute names differentiate between upper and lower case."),(0,r.kt)("p",null,"You manage Object type variables, fields or expressions using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/Concepts/object#syntax-basics"},"object notation")," or the classic commands available in the ",(0,r.kt)("strong",{parentName:"p"},"Objects (Language)")," theme. Note that specific commands of the ",(0,r.kt)("strong",{parentName:"p"},"Queries")," theme such as ",(0,r.kt)("inlineCode",{parentName:"p"},"QUERY BY ATTRIBUTE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"QUERY SELECTION BY ATTRIBUTE"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY ATTRIBUTE")," can be used to carry out processing on object fields. "),(0,r.kt)("p",null,"Each property value accessed through the object notation is considered an expression. You can use such values wherever 4D expressions are expected:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in 4D code, either written in the methods (Code Editor) or externalized (formulas, 4D tags files processed by ",(0,r.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," or the Web Server, export files, 4D Write Pro documents...),"),(0,r.kt)("li",{parentName:"ul"},"in the Expression areas of the Debugger and the Runtime explorer,"),(0,r.kt)("li",{parentName:"ul"},"in the Property list of the Form editor for form objects: Variable or Expression field as well as various selection list box and columns expressions (Data Source, background color, style, or font color).")),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"Objects must have been initialized, for example using the ",(0,r.kt)("inlineCode",{parentName:"p"},"New object")," command, otherwise trying to read or modify their properties will generate a syntax error."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," C_OBJECT($obVar) //creation of an object type 4D variable\n $obVar:=New object //initialization of the object and assignment to the 4D variable\n")),(0,r.kt)("h3",{id:"regular-or-shared-object"},"Regular or shared object"),(0,r.kt)("p",null,"You can create two types of objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"regular (non-shared) objects, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"New object")," command. These objects can be edited without any specific access control but cannot be shared between processes. "),(0,r.kt)("li",{parentName:"ul"},"shared objects, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"New shared object")," command. These objects can be shared between processes, including preemptive threads. Access to these objects is controlled by ",(0,r.kt)("inlineCode",{parentName:"li"},"Use...End use")," structures.\nFor more information, refer to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/docs/Concepts/shared"},"Shared objects and collections")," section.")),(0,r.kt)("h2",{id:"syntax-basics"},"Syntax basics"),(0,r.kt)("p",null,"Object notation can be used to access object property values through a chain of tokens."),(0,r.kt)("h3",{id:"object-properties"},"Object properties"),(0,r.kt)("p",null,"With object notation, object properties can be accessed in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'using a "dot" symbol:',(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"object.propertyName")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'     employee.name:="Smith"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using a string within square brackets:",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"object",'["propertyName"]')))),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'     $vName:=employee["name"]\n     //or also:\n     $property:="name"\n     $vName:=employee[$property]\n\n')),(0,r.kt)("p",null,"Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," $vAge:=employee.children[2].age\n")),(0,r.kt)("p",null,"Object notation is available on any language element that can contains or returns an object, i.e:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Objects")," themselves (stored in variables, fields, object properties, object arrays, or collection elements).\nExamples:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"     $age:=$myObjVar.employee.age //variable\n     $addr:=[Emp]data_obj.address //field\n     $city:=$addr.city //property of an object\n     $pop:=$aObjCountries{2}.population //object array\n     $val:=$myCollection[3].subvalue //collection element\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"4D commands")," that return objects.\nExample:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"     $measures:=Get database measures.DB.tables\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project methods")," that return objects.\nExample:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'      // MyMethod1\n     C_OBJECT($0)\n     $0:=New object("a";10;"b";20)\n     \n      //myMethod2\n     $result:=MyMethod1.a //10\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Collections"),"\nExample:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"     myColl.length //size of the collection\n")),(0,r.kt)("h3",{id:"pointers"},"Pointers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Preliminary Note:")," Since objects are always passed by reference, there is usually no need to use pointers. While just passing the object, internally 4D automatically uses a mechanism similar to a pointer, minimizing memory need and allowing you to modify the parameter and to return modifications. As a result, you should not need to use pointers. However, in case you want to use pointers, property values can be accessed through pointers. "),(0,r.kt)("p",null,'Using object notation with pointers is very similar to using object notation directly with objects, except that the "dot" symbol must be omitted.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Direct access:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"pointerOnObject->propertyName"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access by name:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"pointerOnObject->",'["propertyName"]')))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," C_OBJECT(vObj)\n C_POINTER(vPtr)\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n")),(0,r.kt)("h3",{id:"null-value"},"Null value"),(0,r.kt)("p",null,"When using the object notation, the ",(0,r.kt)("strong",{parentName:"p"},"null")," value is supported though the ",(0,r.kt)("strong",{parentName:"p"},"Null")," command. This command can be used to assign or compare the null value to object properties or collection elements, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," myObject.address.zip:=Null\n If(myColl[2]=Null)\n")),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Null")," command description."),(0,r.kt)("h3",{id:"undefined-value"},"Undefined value"),(0,r.kt)("p",null,"Evaluating an object property can sometimes produce an undefined value. Typically when trying to read or assign undefined expressions, 4D will generate errors. This does not happen in the following cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reading a property of an undefined object or value returns undefined; assigning an undefined value to variables (except arrays) has the same effect as calling ",(0,r.kt)("inlineCode",{parentName:"li"},"CLEAR VARIABLE")," with them:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"     C_OBJECT($o)\n     C_LONGINT($val)\n     $val:=10 //$val=10\n     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable\n      //$val=0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reading the ",(0,r.kt)("strong",{parentName:"li"},"length")," property of an undefined collection produces 0:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"     C_COLLECTION($c) //variable created but no collection is defined\n     $size:=$c.length //$size = 0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'An undefined value passed as parameter to a project method is automatically converted to 0 or "" according to the declared parameter type.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'     C_OBJECT($o)\n     mymethod($o.a) //pass an undefined parameter\n     \n      //In mymethod method\n     C_TEXT($1) //parameter type is text\n      // $1 contains ""\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A condition expression is automatically converted to false when evaluating to undefined with the If and Case of keywords:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"     C_OBJECT($o)\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assigning an undefined value to an existing object property reinitializes or clears its value, depending on its type:"),(0,r.kt)("li",{parentName:"ul"},"Object, collection, pointer: Null"),(0,r.kt)("li",{parentName:"ul"},"Picture: Empty picture"),(0,r.kt)("li",{parentName:"ul"},"Boolean: False"),(0,r.kt)("li",{parentName:"ul"},'String: ""'),(0,r.kt)("li",{parentName:"ul"},"Number: 0"),(0,r.kt)("li",{parentName:"ul"},'Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""'),(0,r.kt)("li",{parentName:"ul"},"Time: 0 (number of ms)"),(0,r.kt)("li",{parentName:"ul"},"Undefined, Null: no change")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'     C_OBJECT($o)\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assigning an undefined value to a non existing object property does nothing.")),(0,r.kt)("p",null,"When expressions of a given type are expected in your 4D code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate 4D cast command: ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Num"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Bool"),". These commands return an empty value of the specified type when the expression evaluates to undefined. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined\n  //to avoid errors in the code\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Using object notation simplifies the 4D code while handling objects. Note however that the command-based notation is still fully supported."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Writing and reading objects (this example compares object notation and command notation):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'  // Using the object notation\n C_OBJECT($myObj) //declares a 4D variable object\n $myObj:=New object //creates an object and assigns to the variable\n $myObj.age:=56\n $age:=$myObj.age //56\n \n  // Using the command notation\n C_OBJECT($myObj2) //declares a 4D variable object\n OB SET($myObj2;"age";42) //creates an object and adds the age property\n $age:=OB Get($myObj2;"age") //42\n \n  // Of course, both notations can be mixed\n C_OBJECT($myObj3)\n OB SET($myObj3;"age";10)\n $age:=$myObj3.age //10\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a property and assign values, including objects:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' C_OBJECT($Emp)\n $Emp:=New object\n $Emp.city:="London" //creates the city property and sets its value to "London"\n $Emp.city:="Paris" //modifies the city property\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //creates the phone property and sets its value to an object\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get a value in a sub-object is very simple using the object notation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can access properties as strings using the ","[ ]"," operator ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' $Emp["city"]:="Berlin" //modifies the city property\n  //this can be useful for creating properties through variables\n C_TEXT($addr)\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+String($i)]:=""\n End for\n  // creates 4 empty properties "address1...address4" in the $Emp object\n')))}m.isMDXComponent=!0}}]);