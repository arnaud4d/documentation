"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19602],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=r.createContext({}),s=function(e){var a=r.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=s(e.components);return r.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=t,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,o(o({ref:a},p),{},{components:n})):r.createElement(k,o({ref:a},p))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=c;var u={};for(var i in a)hasOwnProperty.call(a,i)&&(u[i]=a[i]);u.originalType=e,u.mdxType="string"==typeof e?e:t,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2688:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});n(67294);var r=n(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}const o={id:"pointer",title:"Puntero"},u=void 0,i={unversionedId:"Concepts/pointer",id:"version-19/Concepts/pointer",title:"Puntero",description:"Una variable o expresi\xf3n puntero es una referencia a otra variable (incluyendo arrays y elementos de arrays), tabla, campo u objeto. No hay ning\xfan campo de tipo Puntero.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/dt_pointer.md",sourceDirName:"Concepts",slug:"/Concepts/pointer",permalink:"/documentation/es/docs/19/Concepts/pointer",draft:!1,tags:[],version:"19",frontMatter:{id:"pointer",title:"Puntero"},sidebar:"docs",previous:{title:"Picture",permalink:"/documentation/es/docs/19/Concepts/picture"},next:{title:"String",permalink:"/documentation/es/docs/19/Concepts/string"}},s={},p=[{value:"Utilizar punteros: ejemplo b\xe1sico",id:"utilizar-punteros-ejemplo-b\xe1sico",level:2},{value:"Operadores en punteros",id:"operadores-en-punteros",level:2},{value:"Principales usos",id:"principales-usos",level:2},{value:"Punteros a tablas",id:"punteros-a-tablas",level:3},{value:"Punteros a campos",id:"punteros-a-campos",level:3},{value:"Punteros a variables locales",id:"punteros-a-variables-locales",level:3},{value:"Punteros a elementos del array",id:"punteros-a-elementos-del-array",level:3},{value:"Punteros a arrays",id:"punteros-a-arrays",level:3},{value:"Punteros como par\xe1metros a los m\xe9todos",id:"punteros-como-par\xe1metros-a-los-m\xe9todos",level:3},{value:"Punteros a punteros",id:"punteros-a-punteros",level:3}],d={toc:p};function c(e){var{components:a}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",t({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Una variable o expresi\xf3n puntero es una referencia a otra variable (incluyendo arrays y elementos de arrays), tabla, campo u objeto. No hay ning\xfan campo de tipo Puntero."),(0,r.kt)("p",null,"Los punteros ofrecen una forma avanzada (en programaci\xf3n) de referirse a los datos. Cuando se utiliza el lenguaje, se accede a varios objetos -en particular, tablas, campos, variables, objetos y arrays- simplemente utilizando sus nombres. Sin embargo, con frecuencia es \xfatil referirse a estos elementos y acceder a ellos sin conocer sus nombres. Esto es lo que los punteros le permiten hacer."),(0,r.kt)("p",null,'El concepto de los punteros no es tan raro en la vida cotidiana. A menudo se hace referencia a algo sin conocer su identidad exacta. Por ejemplo, puede decirle a un amigo: "Vamos a dar una vuelta en tu coche" en lugar de "Vamos a dar una vuelta en el coche con matr\xedcula 123ABD." En este caso, se refiere al coche con matr\xedcula 123ABD utilizando la frase " tu coche." La frase "coche con matr\xedcula 123ABD" es como el nombre de un objeto, y usar la frase "tu coche" es como usar un puntero para referenciar el objeto.'),(0,r.kt)("p",null,'Poder referirse a algo sin conocer su identidad exacta es muy \xfatil. De hecho, su amigo podr\xeda comprarse un coche nuevo, y la frase " tu coche" seguir\xeda siendo correcta: seguir\xeda siendo un coche y usted podr\xeda seguir dando un paseo en \xe9l. Los punteros funcionan de la misma manera. Por ejemplo, un puntero podr\xeda referirse en un momento dado a un campo num\xe9rico llamado Edad, y m\xe1s tarde referirse a una variable num\xe9rica llamada Vejez. En ambos casos, el puntero hace referencia a datos num\xe9ricos que podr\xedan utilizarse en un c\xe1lculo.'),(0,r.kt)("p",null,"Puede utilizar punteros para referenciar tablas, campos, variables, arrays, elementos de arrays y objetos. La siguiente tabla ofrece un ejemplo de cada tipo de datos:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",t({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",t({parentName:"tr"},{align:null}),"Referenciaci\xf3n"),(0,r.kt)("th",t({parentName:"tr"},{align:null}),"Uso"),(0,r.kt)("th",t({parentName:"tr"},{align:null}),"Asignaci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Tabla"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"vpTable:=->","[Table]"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"DEFAULT TABLE(vpTable->)"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"vpField:=->","[Table]","Field"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"ALERT(vpField->)"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),'vpField->:="John"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Variable"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"vpVar:=->Variable"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"ALERT(vpVar->)"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),'vpVar->:="John"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Array"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"vpArr:=->Array"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"SORT ARRAY(vpArr->;>)"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"COPY ARRAY (Arr;vpArr->)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"array"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"vpElem:=->Array{1}"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"ALERT (vpElem->)"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),'vpElem->:="John"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"vpObj:=->myObject"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"ALERT (vpObj->myProp)"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),'vpObj->myProp:="John"')))),(0,r.kt)("h2",t({},{id:"utilizar-punteros-ejemplo-b\xe1sico"}),"Utilizar punteros: ejemplo b\xe1sico"),(0,r.kt)("p",null,"Lo m\xe1s f\xe1cil es explicar el uso de los punteros mediante un ejemplo. Este ejemplo muestra c\xf3mo acceder a una variable a trav\xe9s de un puntero. Comenzamos creando una variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'$MyVar:="Hello"\n')),(0,r.kt)("p",null,"$MyVar es ahora una variable que contiene la cadena \u201cHello.\u201d Ahora podemos crear un puntero a $MyVar:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"C_POINTER($MyPointer)  \n$MyPointer:=->$MyVar\n")),(0,r.kt)("p",null,'El s\xedmbolo -> significa "obtener un puntero a." Este s\xedmbolo est\xe1 formado por un gui\xf3n seguido de un signo "mayor que". En este caso, obtiene el puntero que hace referencia o "apunta" a $MyVar. Este puntero se asigna a MyPointer con el operador de asignaci\xf3n.'),(0,r.kt)("p",null,'$MyPointer es ahora una variable que contiene un puntero a $MyVar. $MyPointer no contiene " Hello ", que es el valor en $MyVar, pero se puede utilizar $MyPointer para obtener este valor. La siguiente expresi\xf3n devuelve el valor de $MyVar:'),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"$MyPointer->\n")),(0,r.kt)("p",null,'En este caso, devuelve la cadena "Hello". El s\xedmbolo ->, cuando sigue a un puntero, hace referencia al objeto apuntado. Esto se llama desreferenciaci\xf3n.'),(0,r.kt)("p",null,"Es importante entender que se puede utilizar un puntero seguido del s\xedmbolo -> en cualquier lugar donde se podr\xeda haber utilizado el objeto al que apunta el puntero. Esto significa que podr\xeda utilizar la expresi\xf3n $MyPointer-> en cualquier lugar en el que pudiera utilizar la variable original $MyVar. Por ejemplo, la siguiente l\xednea muestra un cuadro de alerta con la palabra Hello:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"ALERT($MyPointer->)\n")),(0,r.kt)("p",null,'Tambi\xe9n puede utilizar $MyPointer para cambiar los datos en $MyVar. Por ejemplo, la siguiente instrucci\xf3n almacena la cadena "Goodbye" en la variable $MyVar:'),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'$MyPointer->:="Goodbye"\n')),(0,r.kt)("p",null,"Si examina los dos usos de la expresi\xf3n $MyPointer->, ver\xe1 que act\xfaa igual que si hubiera utilizado $MyVar en su lugar. En resumen, las dos l\xedneas siguientes realizan la misma acci\xf3n: ambas muestran un cuadro de alerta con el valor actual de la variable $MyVar:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"ALERT($MyPointer->)\nALERT($MyVar)\n")),(0,r.kt)("p",null,'Las siguientes dos l\xedneas realizan la misma acci\xf3n - ambas asignan la cadena "Goodbye" a $MyVar:'),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'$MyPointer->:="Goodbye"\n$MyVar:="Goodbye"\n')),(0,r.kt)("h2",t({},{id:"operadores-en-punteros"}),"Operadores en punteros"),(0,r.kt)("p",null,"Con:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"  ` vPtrA y vPtrB apuntan al mismo objeto\n vPtrA:=->anObject\n vPtrB:=->anObject\n  ` vPtrC apunta a otro objeto\n vPtrC:=->anotherObject\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",t({parentName:"tr"},{align:null}),"Operaci\xf3n"),(0,r.kt)("th",t({parentName:"tr"},{align:null}),"Sintaxis"),(0,r.kt)("th",t({parentName:"tr"},{align:null}),"Devuelve"),(0,r.kt)("th",t({parentName:"tr"},{align:null}),"Expression"),(0,r.kt)("th",t({parentName:"tr"},{align:null}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Igual"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Puntero = Puntero"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"vPtrA = vPtrB"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null})),(0,r.kt)("td",t({parentName:"tr"},{align:null})),(0,r.kt)("td",t({parentName:"tr"},{align:null})),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"vPtrA = vPtrC"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Desigualdad"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Puntero # Puntero"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"vPtrA # vPtrC"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null})),(0,r.kt)("td",t({parentName:"tr"},{align:null})),(0,r.kt)("td",t({parentName:"tr"},{align:null})),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"vPtrA # vPtrB"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"False")))),(0,r.kt)("h2",t({},{id:"principales-usos"}),"Principales usos"),(0,r.kt)("h3",t({},{id:"punteros-a-tablas"}),"Punteros a tablas"),(0,r.kt)("p",null,"En cualquier lugar en el que el lenguaje espere ver una tabla, se puede utilizar un puntero desreferenciado a la tabla. Se crea un puntero a una tabla utilizando una l\xednea de instrucci\xf3n como esta:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"$TablePtr:=->[anyTable]\n")),(0,r.kt)("p",null,"Tambi\xe9n puede obtener un puntero a una tabla utilizando el comando ",(0,r.kt)("inlineCode",{parentName:"p"},"Table"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"$TablePtr:=Table(20)\n")),(0,r.kt)("p",null,"Puedes utilizar el puntero desreferenciado en los comandos, as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"DEFAULT TABLE($TablePtr->)\n")),(0,r.kt)("h3",t({},{id:"punteros-a-campos"}),"Punteros a campos"),(0,r.kt)("p",null,"En cualquier lugar en el que el lenguaje espere ver un campo, se puede utilizar un puntero desreferenciado para referenciar el campo. Se crea un puntero a un campo utilizando una l\xednea de instrucci\xf3n como esta:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"$FieldPtr:=->[aTable]ThisField\n")),(0,r.kt)("p",null,"Tambi\xe9n puede obtener un puntero a un campo utilizando el comando ",(0,r.kt)("inlineCode",{parentName:"p"},"Campo"),", por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"$FieldPtr:=Field(1;2)\n")),(0,r.kt)("p",null,"Puedes utilizar el puntero desreferenciado en los comandos, as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'OBJECT SET FONT($FieldPtr->;"Arial")\n')),(0,r.kt)("h3",t({},{id:"punteros-a-variables-locales"}),"Punteros a variables locales"),(0,r.kt)("p",null,"Cuando se utilizan punteros a variables de proceso o locales, hay que asegurarse de que la variable a la que se apunta ya est\xe1 definida cuando se utilice el puntero. Tenga en cuenta que las variables locales se borran cuando el m\xe9todo que las cre\xf3 ha terminado su ejecuci\xf3n y las variables de proceso se borran al final del proceso que las cre\xf3. Cuando un puntero llama a una variable que ya no existe, esto provoca un error de sintaxis en modo interpretado (variable no definida) pero puede generar un error m\xe1s grave en modo compilado."),(0,r.kt)("p",null,"Los punteros a variables locales permiten guardar las variables del proceso en muchos casos. Los punteros a variables locales s\xf3lo pueden utilizarse dentro del mismo proceso. En el depurador, cuando se muestra un puntero a una variable local que ha sido declarada en otro m\xe9todo, el nombre del m\xe9todo original se indica entre par\xe9ntesis, despu\xe9s del puntero. Por ejemplo, si se escribe en Method1:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' $MyVar:="Hello world"\n Method2(->$MyVar)\n')),(0,r.kt)("p",null,"En Method2, el depurador mostrar\xe1 $1 de la siguiente manera:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",t({parentName:"tr"},{align:null}),"$1"),(0,r.kt)("th",t({parentName:"tr"},{align:null}),"->$MyVar (Method1)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null})),(0,r.kt)("td",t({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,"El valor de 1 d\xf3lar ser\xe1:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",t({parentName:"tr"},{align:null}),"$MyVar (Method1)"),(0,r.kt)("th",t({parentName:"tr"},{align:null}),'"Hello world"'))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null})),(0,r.kt)("td",t({parentName:"tr"},{align:null}))))),(0,r.kt)("h3",t({},{id:"punteros-a-elementos-del-array"}),"Punteros a elementos del array"),(0,r.kt)("p",null,"Puede crear un puntero a un elemento del array. Por ejemplo, las siguientes l\xedneas crean un array y asignan un puntero al primer elemento del array a una variable llamada $ElemPtr:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"ARRAY REAL($anArray;10) //Crear un array\n$ElemPtr:=->$anArray{1} //Crear un puntero al elemento de array\n")),(0,r.kt)("p",null,"Puede utilizar el puntero desreferenciado para asignar un valor al elemento, as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"$ElemPtr->:=8\n")),(0,r.kt)("h3",t({},{id:"punteros-a-arrays"}),"Punteros a arrays"),(0,r.kt)("p",null,"Puede crear un puntero a un array. Por ejemplo, las siguientes l\xedneas crean un array y asignan un puntero al array a una variable llamada $ArrPtr:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"ARRAY REAL($anArray;10) //Crear un array\n$ArrPtr:=->$anArray //Crear un puntero al array\n")),(0,r.kt)("p",null,"Es importante entender que el puntero apunta al array; no apunta a un elemento del array. Por ejemplo, puede utilizar el puntero desreferenciado de las l\xedneas anteriores de esta manera:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"SORT ARRAY($ArrPtr->;>) //Ordenar el array\n")),(0,r.kt)("p",null,"Si debe referirse al cuarto elemento del array utilizando el puntero, haga lo siguiente:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"})," ArrPtr->{4}:=84\n")),(0,r.kt)("h3",t({},{id:"punteros-como-par\xe1metros-a-los-m\xe9todos"}),"Punteros como par\xe1metros a los m\xe9todos"),(0,r.kt)("p",null,"Puede pasar un puntero como par\xe1metro de un m\xe9todo. Dentro del m\xe9todo, puede modificar el objeto referenciado por el puntero. Por ejemplo, el siguiente m\xe9todo, ",(0,r.kt)("inlineCode",{parentName:"p"},"takeTwo"),", toma dos par\xe1metros que son punteros. Cambia el objeto referenciado por el primer par\xe1metro a caracteres en may\xfasculas, y el objeto referenciado por el segundo par\xe1metro a caracteres en min\xfasculas. Este es el m\xe9todo del proyecto:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"  //M\xe9todo proyecto takeTwo\n  //$1 \u2013 Puntero a un campo o variable de tipo cadena. Cambia la cadena a may\xfasculas.\n  //$2 - Puntero a un campo o variable de tipo cadena. Cambia la cadena a min\xfasculas.\n $1->:=Uppercase($1->)\n $2->:=Lowercase($2->)\n")),(0,r.kt)("p",null,"La siguiente l\xednea utiliza el m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"takeTwo")," para cambiar un campo a may\xfasculas y para cambiar una variable a min\xfasculas:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{}),"takeTwo(->[myTable]myField;->$MyVar)\n")),(0,r.kt)("p",null,"Si el campo ","[myTable]",'myField conten\xeda la cadena "jones", se cambiar\xeda por la cadena "JONES". Si la variable $MyVar conten\xeda la cadena "HELLO", se cambiar\xeda por la cadena "hello".'),(0,r.kt)("p",null,"En el m\xe9todo takeTwo, y de hecho, siempre que se utilicen punteros, es importante que el tipo de datos del objeto al que se hace referencia sea correcto. En el ejemplo anterior, los punteros deben apuntar a algo que contenga una cadena o texto."),(0,r.kt)("h3",t({},{id:"punteros-a-punteros"}),"Punteros a punteros"),(0,r.kt)("p",null,"Si realmente le gusta complicar las cosas, puede utilizar punteros para referenciar otros punteros. Considere este ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' $MyVar:="Hello"\n $PointerOne:=->$MyVar\n $PointerTwo:=->$PointerOne\n ($PointerTwo->)->:="Goodbye"\n ALERT(($PointerTwo->)->)\n')),(0,r.kt)("p",null,'Muestra un cuadro de alerta con la palabra "Goodbye".'),(0,r.kt)("p",null,"A continuaci\xf3n se explica cada l\xednea del ejemplo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'$MyVar:="Hello" --\x3e This line puts the string "Hello" into the variable $MyVar.'),(0,r.kt)("li",{parentName:"ul"},"$PointerOne:=->$MyVar --\x3e $PointerOne now contains a pointer to $MyVar."),(0,r.kt)("li",{parentName:"ul"},"$PointerTwo:=->$PointerOne --\x3e $PointerTwo (a new variable) contains a pointer to $PointerOne, which in turn points to $MyVar."),(0,r.kt)("li",{parentName:"ul"},'($PointerTwo->)->:="Goodbye" --\x3e $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. As\xed que en este caso, a $MyVar se le asigna "Goodbye".'),(0,r.kt)("li",{parentName:"ul"},"ALERT (($PointerTwo->)->) --\x3e Same thing: $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar.")),(0,r.kt)("p",null,'La siguiente l\xednea pone "Hello" en $MyVar:'),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'($PointerTwo->)->:="Hello"\n')),(0,r.kt)("p",null,'La siguiente l\xednea obtiene "Hello de $MyVar y lo pone en $NewVar:'),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{}),"$NewVar:=($PointerTwo->)->\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Importante:")," la desreferenciaci\xf3n m\xfaltiple requiere par\xe9ntesis."))}c.isMDXComponent=!0}}]);