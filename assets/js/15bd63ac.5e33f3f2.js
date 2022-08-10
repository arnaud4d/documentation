"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),b=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=b(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,u=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return a?o.createElement(u,r(r({ref:t},c),{},{components:a})):o.createElement(u,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var b=2;b<l;b++)r[b]=a[b];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>b,toc:()=>p});var o=a(87462),n=a(63366),l=(a(67294),a(3905)),r=["components"],s={id:"blob",title:"BLOB"},i=void 0,b={unversionedId:"Concepts/blob",id:"version-19-R6/Concepts/blob",title:"BLOB",description:"A BLOB (Binary Large OBject) field, variable or expression is a contiguous series of bytes that can be treated as one whole object, or whose bytes can be addressed individually.",source:"@site/versioned_docs/version-19-R6/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/main/docs/Concepts/blob",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"Data types overview",permalink:"/main/docs/Concepts/data-types"},next:{title:"Boolean",permalink:"/main/docs/Concepts/boolean"}},c={},p=[{value:"Blob Types",id:"blob-types",level:2},{value:"Checking if a variable holds a scalar blob or a <code>4D.Blob</code>",id:"checking-if-a-variable-holds-a-scalar-blob-or-a-4dblob",level:2},{value:"Passing blobs as parameters",id:"passing-blobs-as-parameters",level:2},{value:"Passing blobs and blob objects to 4D commands",id:"passing-blobs-and-blob-objects-to-4d-commands",level:3},{value:"Passing blobs and blob objects to methods",id:"passing-blobs-and-blob-objects-to-methods",level:3},{value:"Passing a scalar blob by reference using a pointer",id:"passing-a-scalar-blob-by-reference-using-a-pointer",level:3},{value:"Assigning a blob variable to another",id:"assigning-a-blob-variable-to-another",level:2},{value:"Automatic conversion of blob type",id:"automatic-conversion-of-blob-type",level:2},{value:"Modifying a scalar blob",id:"modifying-a-scalar-blob",level:2},{value:"Individually accessing bytes in a blob",id:"individually-accessing-bytes-in-a-blob",level:2},{value:"Accessing a scalar blob&#39;s bytes",id:"accessing-a-scalar-blobs-bytes",level:4},{value:"Accessing a <code>4D.Blob</code>&#39;s bytes",id:"accessing-a-4dblobs-bytes",level:4}],d={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A BLOB (Binary Large OBject) field, variable or expression is a contiguous series of bytes that can be treated as one whole object, or whose bytes can be addressed individually."),(0,l.kt)("p",null,"A blob is loaded into memory in its entirety. A blob variable is held and exists in memory only. A blob field is loaded into memory from the disk, like the rest of the record to which it belongs."),(0,l.kt)("p",null,"Like other field types that can retain a large amount of data (such as the Picture field type), Blob fields are not duplicated in memory when you modify a record. Consequently, the result returned by the ",(0,l.kt)("inlineCode",{parentName:"p"},"Old")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Modified")," commands is not significant when applied to a Blob field."),(0,l.kt)("h2",{id:"blob-types"},"Blob Types"),(0,l.kt)("p",null,"Using the 4D language, there are two ways to handle a blob:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"as a scalar value"),": a blob can be stored in a Blob variable or field and altered."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"as an object (",(0,l.kt)("inlineCode",{parentName:"strong"},"4D.Blob"),")"),": a ",(0,l.kt)("inlineCode",{parentName:"li"},"4D.Blob")," is a blob object. You can encapsulate a blob or part of it in a ",(0,l.kt)("inlineCode",{parentName:"li"},"4D.Blob")," without altering the original blob. This method is called ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing"},"boxing"),". For more info on how to instantiate a ",(0,l.kt)("inlineCode",{parentName:"li"},"4D.Blob"),", see ",(0,l.kt)("a",{parentName:"li",href:"/main/docs/API/BlobClass"},"Blob Class"),".")),(0,l.kt)("p",null,"Each blob type has its advantages. Use the following table to determine which one suits your needs:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:"center"},"Blob"),(0,l.kt)("th",{parentName:"tr",align:"center"},"4D.Blob"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alterable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Shareable in objects and collections"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Passed by reference","*"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Performance when accessing bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"+"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum size"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2GB"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Memory")))),(0,l.kt)("p",null,"*","Unlike the 4D commands designed to take a scalar blob as a parameter, passing a scalar blob to a method duplicates it in memory. When working with methods, using blob objects (",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob"),") is more efficient, as they are passed by reference."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"By default, 4D sets the maximum size of scalar blobs to 2GB, but this size limit may be lower depending on your OS and how much space is available.")),(0,l.kt)("p",null,"You cannot use operators on blobs."),(0,l.kt)("h2",{id:"checking-if-a-variable-holds-a-scalar-blob-or-a-4dblob"},"Checking if a variable holds a scalar blob or a ",(0,l.kt)("inlineCode",{parentName:"h2"},"4D.Blob")),(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page1509.html"},"Value type")," command to determine if a value is of type Blob or Object.\nTo check that an object is a blob object (",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob"),"), use ",(0,l.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page1731.html"},"OB instance of"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"var $myBlob: Blob\nvar $myBlobObject: 4D.Blob\n$myBlobObject:=4D.Blob.new()\n\n$type:= Value type($myblobObject) // 38 (object)\n$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  //True\n")),(0,l.kt)("h2",{id:"passing-blobs-as-parameters"},"Passing blobs as parameters"),(0,l.kt)("p",null,"Scalar blobs and blob objects can be passed as parameters to 4D commands or plug-in routines that expect blob parameters."),(0,l.kt)("h3",{id:"passing-blobs-and-blob-objects-to-4d-commands"},"Passing blobs and blob objects to 4D commands"),(0,l.kt)("p",null,"You can pass a scalar blob or a ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," to any 4D command that takes a blob as a parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text( $myBlob ; UTF8 text without length )\n')),(0,l.kt)("p",null,"Some 4D commands alter the original blob, and thus do not support the ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," type:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page560.html"},"DELETE FROM BLOB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page559.html"},"INSERT IN BLOB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page548.html"},"INTEGER TO BLOB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page550.html"},"LONGINT TO BLOB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page552.html"},"REAL TO BLOB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page606.html"},"SET BLOB SIZE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page554.html"},"TEXT TO BLOB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page532.html"},"VARIABLE TO BLOB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page556.html"},"LIST TO BLOB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page782.html"},"SOAP DECLARATION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19/help/command/en/page777.html"},"WEB SERVICE SET PARAMETER"))),(0,l.kt)("h3",{id:"passing-blobs-and-blob-objects-to-methods"},"Passing blobs and blob objects to methods"),(0,l.kt)("p",null,"You can pass blobs and blob objects (",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob"),") to methods. Keep in mind that unlike blob objects, which are passed by reference, scalar blobs are duplicated in memory when passed to methods."),(0,l.kt)("h3",{id:"passing-a-scalar-blob-by-reference-using-a-pointer"},"Passing a scalar blob by reference using a pointer"),(0,l.kt)("p",null,"To pass a scalar blob to your own methods without duplicating it in memory, define a pointer to the variable that stores it and pass the pointer as a parameter."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"// Declare a variable of type Blob\nvar $myBlobVar: Blob\n// Pass the blob as parameter to a 4D command\n SET BLOB SIZE($myBlobVar;1024*1024)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"// Pass the blob as parameter to an external routine\n $errCode:=Do Something With This blob($myBlobVar)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"// Pass the blob as a parameter to a method that returns a blob\n var $retrieveBlob: Blob\n retrieveBlob:=Fill_Blob($myBlobVar)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"// Pass a pointer to the blob as a parameter to your own method,\nCOMPUTE BLOB(->$myBlobVar)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note for Plug-in developers:")," A BLOB parameter is declared as \u201c&O\u201d (the letter \u201cO\u201d, not the digit \u201c0\u201d)."),(0,l.kt)("h2",{id:"assigning-a-blob-variable-to-another"},"Assigning a blob variable to another"),(0,l.kt)("p",null,"You can assign a Blob variable to another:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"// Declare two variables of type Blob\n var $vBlobA; $vBlobB : Blob\n// Set the size of the first blob to 10K\n SET BLOB SIZE($vBlobA;10*1024)\n// Assign the first blob to the second one\n $vBlobB:=$vBlobA\n")),(0,l.kt)("h2",{id:"automatic-conversion-of-blob-type"},"Automatic conversion of blob type"),(0,l.kt)("p",null,"4D automatically converts scalar blobs to blob objects, and vice versa, when they're assigned to each other. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'// Create a variable of type Blob and an object variable\nvar $myBlob: Blob\nvar $myObject : Object\n\n// Assign that blob to a property of $myObject named "blob"\n$myObject:=New object("blob"; $myBlob)\n\n// The blob stored in $myBlob is automatically converted to a 4D.Blob\n$type:= OB Instance of($myObject.blob; 4D.Blob)  //True\n\n// Conversion from 4D.Blob to Blob\n$myBlob:= $myObject.blob\n$type:= Value type($myBlob) // Blob\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When converting a ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," to a scalar blob, if the size of the ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," exceeds the maximum size for scalar blobs, the resulting scalar blob is empty.\nFor example, when the maximum size for scalar blobs is 2GB, if you convert a ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," of 2.5GB to a scalar blob, you obtain an empty blob.")),(0,l.kt)("h2",{id:"modifying-a-scalar-blob"},"Modifying a scalar blob"),(0,l.kt)("p",null,"Unlike blob objects, scalar blobs can be altered. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"var $myBlob : Blob\nSET BLOB SIZE ($myBlob ; 16*1024)\n")),(0,l.kt)("h2",{id:"individually-accessing-bytes-in-a-blob"},"Individually accessing bytes in a blob"),(0,l.kt)("h4",{id:"accessing-a-scalar-blobs-bytes"},"Accessing a scalar blob's bytes"),(0,l.kt)("p",null,"You can access individual bytes of a scalar blob using curly brackets ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),". Within a blob, bytes are numbered from 0 to N-1, where N is the size of the BLOB:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"  // Declare a variable of type Blob\n var $vBlob : Blob\n  // Set the size of the blob to 256 bytes\n SET BLOB SIZE($vBlob;256)\n  // The following code loops through the blob to set each byte to zero\n For(vByte;0;BLOB size($vBlob)-1)\n    $vBlob{vByte}:=0\n End for\n")),(0,l.kt)("p",null,"Since you can address all the bytes of a blob individually, you can store whatever you want in a Blob variable or field."),(0,l.kt)("h4",{id:"accessing-a-4dblobs-bytes"},"Accessing a ",(0,l.kt)("inlineCode",{parentName:"h4"},"4D.Blob"),"'s bytes"),(0,l.kt)("p",null,"Use square brackets ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," to directly access a specific byte in a ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text ( $myBlob ; UTF8 text without length )\n$byte:=$myBlob[5]\n')),(0,l.kt)("p",null,"Since a ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," cannot be altered, you can read the bytes of a ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," using this syntax, but not modify them."))}m.isMDXComponent=!0}}]);