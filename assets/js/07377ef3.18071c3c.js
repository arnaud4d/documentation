"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||r;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"components",title:"Components"},l=void 0,p={unversionedId:"Concepts/components",id:"version-18/Concepts/components",title:"Components",description:"A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different databases. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D databases.",source:"@site/versioned_docs/version-18/Concepts/components.md",sourceDirName:"Concepts",slug:"/Concepts/components",permalink:"/docs/18/Concepts/components",draft:!1,tags:[],version:"18",frontMatter:{id:"components",title:"Components"},sidebar:"docs",previous:{title:"Interpreted and Compiled modes",permalink:"/docs/18/Concepts/interpreted-compiled"},next:{title:"Plug-ins",permalink:"/docs/18/Concepts/plug-ins"}},d={},m=[{value:"Definitions",id:"definitions",level:2},{value:"Protection of components: compilation",id:"protection-of-components-compilation",level:3},{value:"Sharing of project methods",id:"sharing-of-project-methods",level:2},{value:"Passing variables",id:"passing-variables",level:2},{value:"Access to tables of the host database",id:"access-to-tables-of-the-host-database",level:2},{value:"Scope of language commands",id:"scope-of-language-commands",level:2},{value:"Unusable commands",id:"unusable-commands",level:3},{value:"Error handling",id:"error-handling",level:2},{value:"Use of forms",id:"use-of-forms",level:2},{value:"Use of tables and fields",id:"use-of-tables-and-fields",level:2},{value:"Example",id:"example",level:3},{value:"Use of resources",id:"use-of-resources",level:2},{value:"On-line help for components",id:"on-line-help-for-components",level:2}],c={toc:m};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different databases. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D databases."),(0,r.kt)("p",null,"Creating and installing 4D components is carried out directly from 4D. Basically, components are managed like ",(0,r.kt)("a",{parentName:"p",href:"/docs/18/Concepts/plug-ins"},"plug-ins")," according to the following principles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A component consists of a regular structure file (compiled or not) having the standard architecture or in the form of a package (see .4dbase Extension)."),(0,r.kt)("li",{parentName:"ul"},'To install a component in a database, you simply need to copy it into the "Components" folder of the database, placed next to the structure file or next to the 4D executable application.'),(0,r.kt)("li",{parentName:"ul"},"A component can call on most of the 4D elements: project methods, project forms, menu bars, choice lists, pictures from the library, and so on. It cannot call database methods and triggers."),(0,r.kt)("li",{parentName:"ul"},"You cannot use standard tables or data files in 4D components. However, a component can create and/or use tables, fields and data files using mechanisms of external databases. These are separate 4D databases that you work with using SQL commands.")),(0,r.kt)("h2",{id:"definitions"},"Definitions"),(0,r.kt)("p",null,"The component management mechanisms in 4D require the implementation of the following terms and concepts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Matrix Database"),": 4D database used for developing the component. The matrix database is a standard database with no specific attributes. A matrix database forms a single component. The matrix database is intended to be copied, compiled or not, into the Components folder of the 4D application or the database that will be using the component (host database)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host Database"),": Database in which a component is installed and used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Component"),": Matrix database, compiled or not, copied into the Components folder of the 4D application or the host database and whose contents are used in the host databases.  ")),(0,r.kt)("p",null,"It should be noted that a database can be both a \u201cmatrix\u201d and a \u201chost,\u201d in other words, a matrix database can itself use one or more components. However, a component cannot use \u201csub-components\u201d itself."),(0,r.kt)("h3",{id:"protection-of-components-compilation"},"Protection of components: compilation"),(0,r.kt)("p",null,"By default, all the project methods of a matrix database installed as a component are potentially visible from the host database. In particular:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The shared project methods are found on the Methods Page of the Explorer and can be called in the methods of the host database. Their contents can be selected and copied in the preview area of the Explorer. They can also be viewed in the debugger. However, it is not possible to open them in the Method editor nor to modify them."),(0,r.kt)("li",{parentName:"ul"},"The other project methods of the matrix database do not appear in the Explorer but they too can be viewed in the debugger of the host database.")),(0,r.kt)("p",null,"To protect the project methods of a component effectively, simply compile the matrix database and provide it in the form of a .4dc file (compiled database that does not contain the interpreted code). When a compiled matrix database is installed as a component:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The shared project methods are shown on the Methods Page of the Explorer and can be called in the methods of the host database. However, their contents will not appear in the preview area nor in the debugger."),(0,r.kt)("li",{parentName:"ul"},"The other project methods of the matrix database will never appear.")),(0,r.kt)("h2",{id:"sharing-of-project-methods"},"Sharing of project methods"),(0,r.kt)("p",null,"All the project methods of a matrix database are by definition included in the component (the database is the component), which means that they can be called and executed by the component."),(0,r.kt)("p",null,"On the other hand, by default these project methods will not be visible, nor can they be called in the host database. In the matrix database, you must explicitly designate the methods that you want to share with the host database. These project methods can be called in the code of the host database (but they cannot be modified in the Method editor of the host database). These methods form ",(0,r.kt)("strong",{parentName:"p"},"entry points")," in the component."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Conversely, for security reasons, by default a component cannot execute project methods belonging to the host database. In certain cases, you may need to allow a component to access the project methods of your host database. To do this, you must explicitly designate the project methods of the host database that you want to make accessible to the components.  "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(89657).Z,width:"592",height:"146"})),(0,r.kt)("h2",{id:"passing-variables"},"Passing variables"),(0,r.kt)("p",null,"The local, process and interprocess variables are not shared between components and host databases. The only way to access component variables from the host database and vice versa is using pointers."),(0,r.kt)("p",null,"Example using an array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"//In the host database:\n     ARRAY INTEGER(MyArray;10)\n     AMethod(->MyArray)\n\n//In the component, the AMethod project method contains:\n     APPEND TO ARRAY($1->;2)\n")),(0,r.kt)("p",null,"Examples using variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," C_TEXT(myvariable)\n component_method1(->myvariable)\n C_POINTER($p)\n $p:=component_method2(...)\n")),(0,r.kt)("p",null,"When you use pointers to allow components and the host database to communicate, you need to take the following specificities into account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Get pointer")," command will not return a pointer to a variable of the host database if it is called from a component and vice versa.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The component architecture allows the coexistence, within the same interpreted database, of both interpreted and compiled components (conversely, only compiled components can be used in a compiled database). In order to use pointers in this case, you must respect the following principle: the interpreter can unpoint a pointer built in compiled mode; however, in compiled mode, you cannot unpoint a pointer built in interpreted mode.\nLet\u2019s illustrate this principle with the following example: given two components, C (compiled) and I (interpreted), installed in the same host database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If component C defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"myCvar")," variable, component I can access the value of this variable by using the pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"->myCvar"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If component I defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"myIvar")," variable, component C cannot access this variable by using the pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"->myIvar"),". This syntax causes an execution error.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The comparison of pointers using the ",(0,r.kt)("inlineCode",{parentName:"p"},"RESOLVE POINTER")," command is not recommended with components since the principle of partitioning variables allows the coexistence of variables having the same name but with radically different contents in a component and the host database (or another component). The type of the variable can even be different in both contexts. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"myptr1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"myptr2")," pointers each point to a variable, the following comparison will produce an incorrect result:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)\n     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)\n     If(vVarName1=vVarName2)\n      //This test returns True even though the variables are different\n")),(0,r.kt)("p",null,"In this case, it is necessary to use the comparison of pointers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"     If(myptr1=myptr2) //This test returns False\n")),(0,r.kt)("h2",{id:"access-to-tables-of-the-host-database"},"Access to tables of the host database"),(0,r.kt)("p",null,"Although components cannot use tables, pointers can permit host databases and components to communicate with each other. For example, here is a method that could be called from a component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'// calling a component method\nmethCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")\n')),(0,r.kt)("p",null,"Within the component, the code of the ",(0,r.kt)("inlineCode",{parentName:"p"},"methCreateRec")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"C_POINTER($1) //Pointer on a table in host database\nC_POINTER($2) //Pointer on a field in host database\nC_TEXT($3) // Value to insert\n\n$tablepointer:=$1\n$fieldpointer:=$2\nCREATE RECORD($tablepointer->)\n\n$fieldpointer->:=$3\nSAVE RECORD($tablepointer->)\n")),(0,r.kt)("h2",{id:"scope-of-language-commands"},"Scope of language commands"),(0,r.kt)("p",null,"Except for ",(0,r.kt)("a",{parentName:"p",href:"#unusable-commands"},"Unusable commands"),", a component can use any command of the 4D language."),(0,r.kt)("p",null,"When commands are called from a component, they are executed in the context of the component, except for the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXECUTE METHOD")," command that uses the context of the method specified by the command. Also note that the read commands of the \u201cUsers and Groups\u201d theme can be used from a component but will read the users and groups of the host database (a component does not have its own users and groups)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Get database parameter")," commands are an exception: their scope is global to the database. When these commands are called from a component, they are applied to the host database."),(0,r.kt)("p",null,"Furthermore, specific measures have been specified for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Structure file")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Get 4D folder")," commands when they are used in the framework of components."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPONENT LIST")," command can be used to obtain the list of components that are loaded by the host database."),(0,r.kt)("h3",{id:"unusable-commands"},"Unusable commands"),(0,r.kt)("p",null,"The following commands are not compatible for use within a component because they modify the structure file \u2014 which is open in read-only. Their execution in a component will generate the error -10511, \u201cThe CommandName command cannot be called from a component\u201d:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ON EVENT CALL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Method called on event")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SET PICTURE TO LIBRARY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REMOVE PICTURE FROM LIBRARY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SAVE LIST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ARRAY TO LIST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EDIT FORM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE USER FORM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DELETE USER FORM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHANGE PASSWORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EDIT ACCESS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Set group properties")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Set user properties")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DELETE USER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHANGE LICENSES")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BLOB TO USERS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SET PLUGIN ACCESS"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Current form table")," command returns ",(0,r.kt)("inlineCode",{parentName:"li"},"Nil")," when it is called in the context of a project form. Consequently, it cannot be used in a component."),(0,r.kt)("li",{parentName:"ul"},"SQL data definition language commands (",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE TABLE"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DROP TABLE"),", etc.) cannot be used on the component database. However, they are supported with external databases (see ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE DATABASE")," SQL command).")),(0,r.kt)("h2",{id:"error-handling"},"Error handling"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"/docs/18/Concepts/error-handling"},"error-handling method")," installed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command only applies to the running database. In the case of an error generated by a component, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," error-handling method of the host database is not called, and vice versa."),(0,r.kt)("h2",{id:"use-of-forms"},"Use of forms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only \u201cproject forms\u201d (forms that are not associated with any specific table) can be used in a component. Any project forms present in the matrix database can be used by the component."),(0,r.kt)("li",{parentName:"ul"},"A component can call table forms of the host database. Note that in this case it is necessary to use pointers rather than table names between brackets [] to specify the forms in the code of the component.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If a component uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD RECORD")," command, the current Input form of the host database will be displayed, in the context of the host database. Consequently, if the form includes variables, the component will not have access to it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can publish component forms as subforms in the host databases. This means that you can, more particularly, develop components offering graphic objects. For example, Widgets provided by 4D are based on the use of subforms in components.")),(0,r.kt)("h2",{id:"use-of-tables-and-fields"},"Use of tables and fields"),(0,r.kt)("p",null,"A component cannot use the tables and fields defined in the 4D structure of the matrix database. However, you can create and use external databases, and then use their tables and fields according to your needs. You can create and manage external databases using SQL. An external database is a 4D database that is independent from the main 4D database, but that you can work with from the main 4D database. Using an external database means temporarily designating this database as the current database, in other words, as the target database for the SQL queries executed by 4D. You create external databases using the SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")," command."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The following code is included in a component and performs three basic actions with an external database:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"creates the external database if it does not already exist,"),(0,r.kt)("li",{parentName:"ul"},"adds data to the external database,"),(0,r.kt)("li",{parentName:"ul"},"reads data from the external database.")),(0,r.kt)("p",null,"Creating the external database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'<>MyDatabase:=Get 4D folder+"\\MyDB" // (Windows) stores the data in an authorized directory\n Begin SQL\n        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];\n        USE DATABASE DATAFILE :[<>MyDatabase];\n        CREATE TABLE IF NOT EXISTS KEEPIT\n        (\n        ID INT32 PRIMARY KEY,\n        kind VARCHAR,\n        name VARCHAR,\n        code TEXT,\n        sort_order INT32\n        );\n\n        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n')),(0,r.kt)("p",null,"Writing in the external database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," $Ptr_1:=$2 // retrieves data from the host database through pointers\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n Begin SQL\n\n        USE DATABASE DATAFILE :[<>MyDatabase];\n\n        INSERT INTO KEEPIT\n        (ID, kind, name, code, sort_order)\n        VALUES\n        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n")),(0,r.kt)("p",null,"Reading from an external database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," $Ptr_1:=$2 // accesses data of the host database through pointers\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n\n Begin SQL\n\n    USE DATABASE DATAFILE :[<>MyDatabase];\n\n    SELECT ALL ID, kind, name, code, sort_order\n    FROM KEEPIT\n    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;\n\n    USE DATABASE SQL_INTERNAL;\n\n End SQL\n")),(0,r.kt)("h2",{id:"use-of-resources"},"Use of resources"),(0,r.kt)("p",null,"Components can use resources. In conformity with the resource management principle, if the component is of the .4dbase architecture (recommended architecture), the Resources folder must be placed inside this folder."),(0,r.kt)("p",null,"Automatic mechanisms are operational: the XLIFF files found in the Resources folder of a component will be loaded by this component."),(0,r.kt)("p",null,"In a host database containing one or more components, each component as well as the host databases has its own \u201cresources string.\u201d Resources are partitioned between the different databases: it is not possible to access the resources of component A from component B or the host database."),(0,r.kt)("h2",{id:"on-line-help-for-components"},"On-line help for components"),(0,r.kt)("p",null,"A specific mechanism has been implemented in order to allow developers to add on-line help to their components. The principle is the same as that provided for 4D databases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The component help must be provided as a file suffixed .htm, .html or (Windows only) .chm,"),(0,r.kt)("li",{parentName:"ul"},"The help file must be put next to the structure file of the component and have the same name as the structure file,"),(0,r.kt)("li",{parentName:"ul"},"This file is then automatically loaded into the Help menu of the application with the title \u201cHelp for...\u201d followed by the name of the help file.")))}h.isMDXComponent=!0},89657:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pict516563.en-686ce2897139b168aeb17276e04b4265.png"}}]);