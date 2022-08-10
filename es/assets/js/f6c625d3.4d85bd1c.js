"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4898],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},91769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"pointer",title:"Pointer"},s=void 0,p={unversionedId:"Concepts/pointer",id:"Concepts/pointer",title:"Pointer",description:"A Pointer variable or expression is a reference to another variable (including arrays and array elements), table, field, or object. There is no field of type Pointer.",source:"@site/docs/Concepts/dt_pointer.md",sourceDirName:"Concepts",slug:"/Concepts/pointer",permalink:"/main/es/docs/next/Concepts/pointer",draft:!1,tags:[],version:"current",frontMatter:{id:"pointer",title:"Pointer"},sidebar:"docs",previous:{title:"Picture",permalink:"/main/es/docs/next/Concepts/picture"},next:{title:"String",permalink:"/main/es/docs/next/Concepts/string"}},u={},d=[{value:"Using a pointer: Basic example",id:"using-a-pointer-basic-example",level:2},{value:"Pointer operators",id:"pointer-operators",level:2},{value:"Main usages",id:"main-usages",level:2},{value:"Pointers to tables",id:"pointers-to-tables",level:3},{value:"Pointers to fields",id:"pointers-to-fields",level:3},{value:"Pointers to local variables",id:"pointers-to-local-variables",level:3},{value:"Pointers to array elements",id:"pointers-to-array-elements",level:3},{value:"Pointers to arrays",id:"pointers-to-arrays",level:3},{value:"Pointers as parameters to methods",id:"pointers-as-parameters-to-methods",level:3},{value:"Pointers to pointers",id:"pointers-to-pointers",level:3}],c={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Pointer variable or expression is a reference to another variable (including arrays and array elements), table, field, or object. There is no field of type Pointer."),(0,l.kt)("p",null,"Pointers provide an advanced way (in programming) to refer to data. When you use the language, you access various objects\u2014in particular, tables, fields, variables, objects, and arrays\u2014by simply using their names. However, it is often useful to refer to these elements and access them without knowing their names. This is what pointers let you do."),(0,l.kt)("p",null,"The concept behind pointers is not that uncommon in everyday life. You often refer to something without knowing its exact identity. For example, you might say to a friend, \u201cLet\u2019s go for a ride in your car\u201d instead of \u201cLet\u2019s go for a ride in the car with license plate 123ABD.\u201d In this case, you are referencing the car with license plate 123ABD by using the phrase \u201cyour car.\u201d The phrase \u201ccar with license plate 123ABD\u201d is like the name of an object, and using the phrase \u201cyour car\u201d is like using a pointer to reference the object."),(0,l.kt)("p",null,"Being able to refer to something without knowing its exact identity is very useful. In fact, your friend could get a new car, and the phrase \u201cyour car\u201d would still be accurate\u2014it would still be a car and you could still take a ride in it. Pointers work the same way. For example, a pointer could at one time refer to a numeric field called Age, and later refer to a numeric variable called Old Age. In both cases, the pointer references numeric data that could be used in a calculation."),(0,l.kt)("p",null,"You can use pointers to reference tables, fields, variables, arrays, array elements, and objects. The following table gives an example of each data type:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"To Reference"),(0,l.kt)("th",{parentName:"tr",align:null},"To Use"),(0,l.kt)("th",{parentName:"tr",align:null},"To Assign"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table"),(0,l.kt)("td",{parentName:"tr",align:null},"vpTable:=->","[Table]"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT TABLE(vpTable->)"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"vpField:=->","[Table]","Field"),(0,l.kt)("td",{parentName:"tr",align:null},"ALERT(vpField->)"),(0,l.kt)("td",{parentName:"tr",align:null},'vpField->:="John"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"vpVar:=->Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"ALERT(vpVar->)"),(0,l.kt)("td",{parentName:"tr",align:null},'vpVar->:="John"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"vpArr:=->Array"),(0,l.kt)("td",{parentName:"tr",align:null},"SORT ARRAY(vpArr->;>)"),(0,l.kt)("td",{parentName:"tr",align:null},"COPY ARRAY (Arr;vpArr->)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Array element"),(0,l.kt)("td",{parentName:"tr",align:null},"vpElem:=->Array{1}"),(0,l.kt)("td",{parentName:"tr",align:null},"ALERT (vpElem->)"),(0,l.kt)("td",{parentName:"tr",align:null},'vpElem->:="John"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"vpObj:=->myObject"),(0,l.kt)("td",{parentName:"tr",align:null},"ALERT (vpObj->myProp)"),(0,l.kt)("td",{parentName:"tr",align:null},'vpObj->myProp:="John"')))),(0,l.kt)("h2",{id:"using-a-pointer-basic-example"},"Using a pointer: Basic example"),(0,l.kt)("p",null,"It is easiest to explain the use of pointers through an example. This example shows how to access a variable through a pointer. We start by creating a variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'$MyVar:="Hello"\n')),(0,l.kt)("p",null,"$MyVar is now a variable containing the string \u201cHello.\u201d We can now create a pointer to $MyVar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"C_POINTER($MyPointer)  \n$MyPointer:=->$MyVar\n")),(0,l.kt)("p",null,"The -> symbol means \u201cget a pointer to.\u201d This symbol is formed by a dash followed by a \u201cgreater than\u201d sign. In this case, it gets the pointer that references or \u201cpoints to\u201d $MyVar. This pointer is assigned to MyPointer with the assignment operator."),(0,l.kt)("p",null,"$MyPointer is now a variable that contains a pointer to $MyVar. $MyPointer does not contain \u201cHello\u201d, which is the value in $MyVar, but you can use $MyPointer to get this value. The following expression returns the value in $MyVar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"$MyPointer->\n")),(0,l.kt)("p",null,"In this case, it returns the string \u201cHello\u201d. The -> symbol, when it follows a pointer, references the object pointed to. This is called dereferencing."),(0,l.kt)("p",null,"It is important to understand that you can use a pointer followed by the -> symbol anywhere that you could have used the object that the pointer points to. This means that you could use the expression $MyPointer-> anywhere that you could use the original $MyVar variable. For example, the following line displays an alert box with the word Hello in it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"ALERT($MyPointer->)\n")),(0,l.kt)("p",null,'You can also use $MyPointer to change the data in $MyVar. For example, the following statement stores the string "Goodbye" in the variable $MyVar:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'$MyPointer->:="Goodbye"\n')),(0,l.kt)("p",null,"If you examine the two uses of the expression $MyPointer->, you will see that it acts just as if you had used $MyVar instead. In summary, the following two lines perform the same action\u2014both display an alert box containing the current value in the variable $MyVar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"ALERT($MyPointer->)\nALERT($MyVar)\n")),(0,l.kt)("p",null,'The following two lines perform the same action\u2014 both assign the string "Goodbye" to $MyVar:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'$MyPointer->:="Goodbye"\n$MyVar:="Goodbye"\n')),(0,l.kt)("h2",{id:"pointer-operators"},"Pointer operators"),(0,l.kt)("p",null,"With:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"  ` vPtrA and vPtrB point to the same object\n vPtrA:=->anObject\n vPtrB:=->anObject\n  ` vPtrC points to another object\n vPtrC:=->anotherObject\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Returns"),(0,l.kt)("th",{parentName:"tr",align:null},"Expression"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Equality"),(0,l.kt)("td",{parentName:"tr",align:null},"Pointer = Pointer"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"vPtrA = vPtrB"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"vPtrA = vPtrC"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inequality"),(0,l.kt)("td",{parentName:"tr",align:null},"Pointer # Pointer"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"vPtrA # vPtrC"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"vPtrA # vPtrB"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"main-usages"},"Main usages"),(0,l.kt)("h3",{id:"pointers-to-tables"},"Pointers to tables"),(0,l.kt)("p",null,"Anywhere that the language expects to see a table, you can use a dereferenced pointer to the table. You create a pointer to a table by using a line like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"$TablePtr:=->[anyTable]\n")),(0,l.kt)("p",null,"You can also get a pointer to a table by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"Table")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"$TablePtr:=Table(20)\n")),(0,l.kt)("p",null,"You can use the dereferenced pointer in commands, like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"DEFAULT TABLE($TablePtr->)\n")),(0,l.kt)("h3",{id:"pointers-to-fields"},"Pointers to fields"),(0,l.kt)("p",null,"Anywhere that the language expects to see a field, you can use a dereferenced pointer to reference the field. You create a pointer to a field by using a line like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"$FieldPtr:=->[aTable]ThisField\n")),(0,l.kt)("p",null,"You can also get a pointer to a field by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"Field")," command, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"$FieldPtr:=Field(1;2)\n")),(0,l.kt)("p",null,"You can use the dereferenced pointer in commands, like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'OBJECT SET FONT($FieldPtr->;"Arial")\n')),(0,l.kt)("h3",{id:"pointers-to-local-variables"},"Pointers to local variables"),(0,l.kt)("p",null,"When you use pointers to process or local variables, you must be sure that the variable pointed to is already set when the pointer is used. Keep in mind that local variables are deleted when the method that created them has completed its execution and process variables are deleted at the end of the process that created them. When a pointer calls a variable that no longer exists, this causes a syntax error in interpreted mode (variable not defined) but it can generate a more serious error in compiled mode."),(0,l.kt)("p",null,"Pointers to local variables allow you to save process variables in many cases. Pointers to local variables can only be used within the same process. In the debugger, when you display a pointer to a local variable that has been declared in another method, the original method name is indicated in parentheses, after the pointer. For example, if you write in Method1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' $MyVar:="Hello world"\n Method2(->$MyVar)\n')),(0,l.kt)("p",null,"In Method2, the debugger will display $1 as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"$1"),(0,l.kt)("th",{parentName:"tr",align:null},"->$MyVar (Method1)")))),(0,l.kt)("p",null,"The value of $1 will be:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"$MyVar (Method1)"),(0,l.kt)("th",{parentName:"tr",align:null},'"Hello world"')))),(0,l.kt)("h3",{id:"pointers-to-array-elements"},"Pointers to array elements"),(0,l.kt)("p",null,"You can create a pointer to an array element. For example, the following lines create an array and assign a pointer to the first array element to a variable called $ElemPtr:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"ARRAY REAL($anArray;10) //Create an array\n$ElemPtr:=->$anArray{1} //Create a pointer to the array element\n")),(0,l.kt)("p",null,"You could use the dereferenced pointer to assign a value to the element, like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"$ElemPtr->:=8\n")),(0,l.kt)("h3",{id:"pointers-to-arrays"},"Pointers to arrays"),(0,l.kt)("p",null,"You can create a pointer to an array. For example, the following lines create an array and assign a pointer to the array to a variable called $ArrPtr:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"ARRAY REAL($anArray;10) //Create an array\n$ArrPtr:=->$anArray //Create a pointer to the array\n")),(0,l.kt)("p",null,"It is important to understand that the pointer points to the array; it does not point to an element of the array. For example, you can use the dereferenced pointer from the preceding lines like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"SORT ARRAY($ArrPtr->;>) //Sort the array\n")),(0,l.kt)("p",null,"If you need to refer to the fourth element in the array by using the pointer, you do this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," ArrPtr->{4}:=84\n")),(0,l.kt)("h3",{id:"pointers-as-parameters-to-methods"},"Pointers as parameters to methods"),(0,l.kt)("p",null,"You can pass a pointer as a parameter to a method. Inside the method, you can modify the object referenced by the pointer. For example, the following method, ",(0,l.kt)("inlineCode",{parentName:"p"},"takeTwo"),", takes two parameters that are pointers. It changes the object referenced by the first parameter to uppercase characters, and the object referenced by the second parameter to lowercase characters. Here is the project method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"  //takeTwo project method\n  //$1 \u2013 Pointer to a string field or variable. Change this to uppercase.\n  //$2 \u2013 Pointer to a string field or variable. Change this to lowercase.\n $1->:=Uppercase($1->)\n $2->:=Lowercase($2->)\n")),(0,l.kt)("p",null,"The following line uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"takeTwo")," method to change a field to uppercase characters and to change a variable to lowercase characters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"takeTwo(->[myTable]myField;->$MyVar)\n")),(0,l.kt)("p",null,"If the field ","[myTable]",'myField contained the string "jones", it would be changed to the string "JONES". If the variable $MyVar contained the string "HELLO", it would be changed to the string "hello".'),(0,l.kt)("p",null,"In the takeTwo method, and in fact, whenever you use pointers, it is important that the data type of the object being referenced is correct. In the previous example, the pointers must point to something that contains a string or text."),(0,l.kt)("h3",{id:"pointers-to-pointers"},"Pointers to pointers"),(0,l.kt)("p",null,"If you really like to complicate things, you can use pointers to reference other pointers. Consider this example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' $MyVar:="Hello"\n $PointerOne:=->$MyVar\n $PointerTwo:=->$PointerOne\n ($PointerTwo->)->:="Goodbye"\n ALERT(($PointerTwo->)->)\n')),(0,l.kt)("p",null,"It displays an alert box with the word \u201cGoodbye\u201d in it."),(0,l.kt)("p",null,"Here is an explanation of each line of the example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'$MyVar:="Hello"\n--\x3e This line puts the string "Hello" into the variable $MyVar.'),(0,l.kt)("li",{parentName:"ul"},"$PointerOne:=->$MyVar\n--\x3e $PointerOne now contains a pointer to $MyVar."),(0,l.kt)("li",{parentName:"ul"},"$PointerTwo:=->$PointerOne\n--\x3e $PointerTwo (a new variable) contains a pointer to $PointerOne, which in turn points to $MyVar."),(0,l.kt)("li",{parentName:"ul"},'($PointerTwo->)->:="Goodbye"\n--\x3e $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. So in this case, $MyVar is assigned "Goodbye".'),(0,l.kt)("li",{parentName:"ul"},"ALERT (($PointerTwo->)->)\n--\x3e Same thing: $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. So in this case, the alert box displays the contents of $MyVar.")),(0,l.kt)("p",null,'The following line puts "Hello" into $MyVar:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'($PointerTwo->)->:="Hello"\n')),(0,l.kt)("p",null,'The following line gets "Hello" from $MyVar and puts it into $NewVar:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$NewVar:=($PointerTwo->)->\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Important:")," Multiple dereferencing requires parentheses."))}h.isMDXComponent=!0}}]);