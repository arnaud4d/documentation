"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57619],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var l=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=l.createContext({}),c=function(e){var a=l.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=c(e.components);return l.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},u=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=t,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?l.createElement(k,o(o({ref:a},p),{},{components:n})):l.createElement(k,o({ref:a},p))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28108:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});n(67294);var l=n(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},t.apply(this,arguments)}function r(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}const o={id:"looping",title:"Estructuras repetitivas (bucles)"},i=void 0,s={unversionedId:"Concepts/looping",id:"version-19/Concepts/looping",title:"Estructuras repetitivas (bucles)",description:"Las estructuras en bucle repiten una secuencia de instrucciones hasta que se cumple una condici\xf3n o se alcanza un n\xfamero de veces.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/cf_looping.md",sourceDirName:"Concepts",slug:"/Concepts/looping",permalink:"/documentation/es/docs/19/Concepts/looping",draft:!1,tags:[],version:"19",frontMatter:{id:"looping",title:"Estructuras repetitivas (bucles)"},sidebar:"docs",previous:{title:"Estructuras condicionales",permalink:"/documentation/es/docs/19/Concepts/branching"},next:{title:"Etiquetas de transformaci\xf3n",permalink:"/documentation/es/docs/19/Tags/tags"}},c={},p=[{value:"While...End while",id:"whileend-while",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Repeat...Until",id:"repeatuntil",level:2},{value:"Ejemplo",id:"ejemplo-1",level:3},{value:"For...End for",id:"forend-for",level:2},{value:"Ejemplos b\xe1sicos",id:"ejemplos-b\xe1sicos",level:3},{value:"Disminuir la variable contador",id:"disminuir-la-variable-contador",level:3},{value:"Incrementar la variable del contador en m\xe1s de uno",id:"incrementar-la-variable-del-contador-en-m\xe1s-de-uno",level:3},{value:"Comparaci\xf3n de estructuras de bucle",id:"comparaci\xf3n-de-estructuras-de-bucle",level:3},{value:"Optimizing the execution of the For... End for loops",id:"optimizing-the-execution-of-the-for-end-for-loops",level:3},{value:"Nested For... End for looping structures",id:"nested-for-end-for-looping-structures",level:3},{value:"For each... End for each",id:"for-each-end-for-each",level:2},{value:"Bucle en las colecciones",id:"bucle-en-las-colecciones",level:3},{value:"Ejemplo",id:"ejemplo-2",level:4},{value:"Bucle en las selecciones de entidades",id:"bucle-en-las-selecciones-de-entidades",level:3},{value:"Ejemplo",id:"ejemplo-3",level:4},{value:"Bucles en las propiedades de objetos",id:"bucles-en-las-propiedades-de-objetos",level:3},{value:"Ejemplo",id:"ejemplo-4",level:4},{value:"Par\xe1metros begin / end",id:"par\xe1metros-begin--end",level:3},{value:"Ejemplo",id:"ejemplo-5",level:4},{value:"Condiciones Until y While",id:"condiciones-until-y-while",level:3},{value:"Ejemplo",id:"ejemplo-6",level:4}],d={toc:p};function u(e){var{components:a}=e,n=r(e,["components"]);return(0,l.kt)("wrapper",t({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Las estructuras en bucle repiten una secuencia de instrucciones hasta que se cumple una condici\xf3n o se alcanza un n\xfamero de veces."),(0,l.kt)("h2",t({},{id:"whileend-while"}),"While...End while"),(0,l.kt)("p",null,"La sintaxis de la estructura condicional ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," es:"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," While(Boolean_Expression)\n    statement(s)\n End while\n")),(0,l.kt)("p",null,"Un bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," ejecuta las instrucciones dentro del bucle mientras la expresi\xf3n booleana sea TRUE. Comprueba la expresi\xf3n booleana al inicio del bucle y no entra en el bucle si la expresi\xf3n es FALSE."),(0,l.kt)("p",null,"Es com\xfan inicializar el valor probado en la expresi\xf3n booleana inmediatamente antes de entrar en el bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while"),". Inicializar el valor significa asignarle un contenido adecuado, normalmente para que la expresi\xf3n booleana sea TRUE y ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," ejecute el bucle."),(0,l.kt)("p",null,"El valor de la expresi\xf3n booleana debe poder ser modificado por un elemento dentro del bucle, de lo contrario se ejecutar\xe1 indefinidamente. El siguiente bucle contin\xfaa para siempre porque ",(0,l.kt)("em",{parentName:"p"},"NeverStop")," es siempre TRUE:"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," NeverStop:=True\n While(NeverStop)\n End while\n")),(0,l.kt)("p",null,"Si se encuentra en una situaci\xf3n de este tipo, en la que un m\xe9todo se ejecuta de forma incontrolada, puede utilizar las funciones de rastreo para detener el bucle y localizar el problema. Para m\xe1s informaci\xf3n sobre el seguimiento de un m\xe9todo, consulte la p\xe1gina ",(0,l.kt)("a",t({parentName:"p"},{href:"/documentation/es/docs/19/Concepts/error-handling"}),"Gesti\xf3n de errores"),"."),(0,l.kt)("h3",t({},{id:"ejemplo"}),"Ejemplo"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' CONFIRM("\xbfA\xf1adir un nuevo registro?") CONFIRM("Add a new record?") //The user wants to add a record?\n While(OK=1) //Bucle mientras el usuario quiera\n    ADD RECORD([aTable]) /A\xf1adir un nuevo registro\n End while //El bucle siempre termina con End while\n')),(0,l.kt)("p",null,"En este ejemplo, el valor de la variable sistema ",(0,l.kt)("inlineCode",{parentName:"p"},"OK")," es definido por el comando ",(0,l.kt)("inlineCode",{parentName:"p"},"CONFIRM")," antes de que se inicie el bucle. Si el usuario hace clic en el bot\xf3n ",(0,l.kt)("strong",{parentName:"p"},"OK")," de la caja de di\xe1logo de confirmaci\xf3n, la variable del sistema ",(0,l.kt)("inlineCode",{parentName:"p"},"OK")," toma el valor 1 y se inicia el bucle. En caso contrario, la variable del sistema ",(0,l.kt)("inlineCode",{parentName:"p"},"OK")," toma el valor 0 y se omite el bucle. Una vez se inicia el bucle, el comando ",(0,l.kt)("inlineCode",{parentName:"p"},"ADD RECORD")," permite continuar la ejecuci\xf3n del bucle porque se define la variable sistema ",(0,l.kt)("inlineCode",{parentName:"p"},"OK")," en 1 cuando el usuario guarda el registro. Cuando el usuario cancela (no guarda) el \xfaltimo registro, la variable del sistema ",(0,l.kt)("inlineCode",{parentName:"p"},"OK")," toma el valor 0 y el bucle se detiene."),(0,l.kt)("h2",t({},{id:"repeatuntil"}),"Repeat...Until"),(0,l.kt)("p",null,"La sintaxis de la estructura condicional ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," es:"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," Repeat\n    statement(s)\n Until(Boolean_Expression)\n")),(0,l.kt)("p",null,"Un bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," es similar a un bucle ",(0,l.kt)("a",t({parentName:"p"},{href:"flow-control#whileend-while"}),"While...End while"),", excepto que comprueba la expresi\xf3n booleana despu\xe9s del bucle en lugar de antes. As\xed, un bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," siempre ejecuta el bucle una vez, mientras que si la expresi\xf3n booleana es inicialmente False, un bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," no ejecuta el bucle en absoluto."),(0,l.kt)("p",null,"La otra diferencia con un bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," es que el bucle contin\xfaa hasta que la expresi\xf3n booleana sea TRUE."),(0,l.kt)("h3",t({},{id:"ejemplo-1"}),"Ejemplo"),(0,l.kt)("p",null,"Compara el siguiente ejemplo con el ejemplo del bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while"),". Tenga en cuenta que la expresi\xf3n booleana no necesita ser inicializada-no hay un comando ",(0,l.kt)("inlineCode",{parentName:"p"},"CONFIRM")," para inicializar la variable ",(0,l.kt)("inlineCode",{parentName:"p"},"OK"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," Repeat\n    ADD RECORD([aTable])\n Until(OK=0)\n")),(0,l.kt)("h2",t({},{id:"forend-for"}),"For...End for"),(0,l.kt)("p",null,"La sintaxis de la estructura condicional ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," es:"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})\n    statement(s)\n End for\n")),(0,l.kt)("p",null,"El bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," es un bucle controlado por un contador:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"La variable contador ",(0,l.kt)("em",{parentName:"li"},"Counter_Variable")," es una variable num\xe9rica (Real o Entero largo) inicializada por ",(0,l.kt)("inlineCode",{parentName:"li"},"For...End for")," con el valor especificado por ",(0,l.kt)("em",{parentName:"li"},"Start_Expression"),"."),(0,l.kt)("li",{parentName:"ul"},"Cada vez que se ejecuta el bucle, la variable del contador se incrementa en el valor especificado en el valor opcional ",(0,l.kt)("em",{parentName:"li"},"Increment_Expression"),". Si no se especifica ",(0,l.kt)("em",{parentName:"li"},"Increment_Expression"),", la variable del contador se incrementa en uno (1), que es el valor predeterminado."),(0,l.kt)("li",{parentName:"ul"},"Cuando la variable del contador pasa el valor ",(0,l.kt)("em",{parentName:"li"},"End_Expression"),", el bucle se detiene.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Importante:")," las expresiones num\xe9ricas ",(0,l.kt)("em",{parentName:"p"},"Start_Expression"),", ",(0,l.kt)("em",{parentName:"p"},"End_Expression")," y ",(0,l.kt)("em",{parentName:"p"},"Increment_Expression")," se eval\xfaan una vez al principio del bucle. Si estas expresiones son variables, el cambio de una de estas variables dentro del bucle no afectar\xe1 al bucle."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Consejo:")," Sin embargo, para fines especiales, puede cambiar el valor de la variable ",(0,l.kt)("em",{parentName:"p"},"Counter_Variable")," dentro del bucle; esto afectar\xe1 al bucle."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Normalmente ",(0,l.kt)("em",{parentName:"li"},"Start_Expression")," es menor que ",(0,l.kt)("em",{parentName:"li"},"End_Expression"),"."),(0,l.kt)("li",{parentName:"ul"},"Si ",(0,l.kt)("em",{parentName:"li"},"Start_Expression")," y ",(0,l.kt)("em",{parentName:"li"},"End_Expression")," son iguales, el bucle se ejecutar\xe1 s\xf3lo una vez."),(0,l.kt)("li",{parentName:"ul"},"Si ",(0,l.kt)("em",{parentName:"li"},"Start_Expression")," es mayor que ",(0,l.kt)("em",{parentName:"li"},"End_Expression"),", el bucle no se ejecutar\xe1 en absoluto a menos que se especifique una ",(0,l.kt)("em",{parentName:"li"},"Increment_Expression")," negativa. Ver los ejemplos.")),(0,l.kt)("h3",t({},{id:"ejemplos-b\xe1sicos"}),"Ejemplos b\xe1sicos"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"El siguiente ejemplo ejecuta 100 iteraciones:")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For(vCounter;1;100)\n  //Hacer algo\n End for\n")),(0,l.kt)("ol",t({},{start:2}),(0,l.kt)("li",{parentName:"ol"},"El siguiente ejemplo recorre todos los elementos del array anArray:")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For($vlElem;1;Size of array(anArray))\n  //Hacer algo con el elemento\n    anArray{$vlElem}:=...\n End for\n")),(0,l.kt)("ol",t({},{start:3}),(0,l.kt)("li",{parentName:"ol"},"El siguiente ejemplo recorre todos los caracteres del texto vtSomeText:")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For($vlChar;1;Length(vtSomeText))\n  //Hacer algo con el car\xe1cter si es un TAB\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n")),(0,l.kt)("ol",t({},{start:4}),(0,l.kt)("li",{parentName:"ol"},"El siguiente ejemplo recorre los registros seleccionados para la tabla ","[aTable]",":")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," FIRST RECORD([aTable])\n For($vlRecord;1;Records in selection([aTable]))\n  //Hacer algo con el registro\n    SEND RECORD([aTable])\n  //...\n  //Ir al siguiente registro\n    NEXT RECORD([aTable])\n End for\n")),(0,l.kt)("p",null,"La mayor\xeda de los bucles ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," que escribir\xe1 en sus proyectos se parecer\xe1n a los que se presentan en estos ejemplos."),(0,l.kt)("h3",t({},{id:"disminuir-la-variable-contador"}),"Disminuir la variable contador"),(0,l.kt)("p",null,"En algunos casos, puede querer tener un bucle cuya variable de contador sea decreciente en lugar de creciente. Para ello, debe especificar ",(0,l.kt)("em",{parentName:"p"},"Start_Expression")," mayor que ",(0,l.kt)("em",{parentName:"p"},"End_Expression")," y ",(0,l.kt)("em",{parentName:"p"},"Increment_Expression")," debe ser negativa. Los siguientes ejemplos hacen lo mismo que los anteriores, pero en orden inverso:"),(0,l.kt)("ol",t({},{start:5}),(0,l.kt)("li",{parentName:"ol"},"El siguiente ejemplo ejecuta 100 iteraciones:")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For(vCounter;100;1;-1)\n  //Hacer algo\n End for\n")),(0,l.kt)("ol",t({},{start:6}),(0,l.kt)("li",{parentName:"ol"},"El siguiente ejemplo recorre todos los elementos del array anArray:")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For($vlElem;Size of array(anArray);1;-1)\n  //Hacer algo con el elemento\n    anArray{$vlElem}:=...\n End for\n")),(0,l.kt)("ol",t({},{start:7}),(0,l.kt)("li",{parentName:"ol"},"El siguiente ejemplo recorre todos los caracteres del texto vtSomeText:")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For($vlChar;Length(vtSomeText);1;-1)\n  //Hacer algo con el car\xe1cter si es un TAB\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n")),(0,l.kt)("ol",t({},{start:8}),(0,l.kt)("li",{parentName:"ol"},"El siguiente ejemplo recorre los registros seleccionados para la tabla ","[aTable]",":")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," LAST RECORD([aTable])\n For($vlRecord;1;Records in selection([aTable]))\n  //Hacer algo con el registro\n    SEND RECORD([aTable])\n  //...\n  //Ir al registro anterior\n    PREVIOUS RECORD([aTable])\n End for\n")),(0,l.kt)("h3",t({},{id:"incrementar-la-variable-del-contador-en-m\xe1s-de-uno"}),"Incrementar la variable del contador en m\xe1s de uno"),(0,l.kt)("p",null,"Si lo requiere, puede utilizar una ",(0,l.kt)("em",{parentName:"p"},"Increment_Expression")," (positiva o negativa) cuyo valor absoluto sea mayor que uno."),(0,l.kt)("ol",t({},{start:9}),(0,l.kt)("li",{parentName:"ol"},"El siguiente bucle aborda s\xf3lo los elementos pares del array anArray:")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For($vlElem;2;Size of array(anArray);2)\n  //Hacer algo con el elemento #2,#4...#2n\n    anArray{$vlElem}:=...\n End for\n")),(0,l.kt)("h3",t({},{id:"comparaci\xf3n-de-estructuras-de-bucle"}),"Comparaci\xf3n de estructuras de bucle"),(0,l.kt)("p",null,"Volvamos al primer ejemplo de ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for"),". El siguiente ejemplo ejecuta 100 iteraciones:"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For(vCounter;1;100)\n  //Hacer algo\n End for\n")),(0,l.kt)("p",null,"Es interesante ver c\xf3mo el bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," y el bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," realizar\xedan la misma acci\xf3n. Aqu\xed est\xe1 el bucle equivalente ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," $i:=1 //Inicializar el contador\n While($i<=100) //Bucle 100 veces\n  //Hacer algo\n    $i:=$i+1 //Necesita incrementar el contador\n End while\n")),(0,l.kt)("p",null,"Aqu\xed est\xe1 el bucle equivalente ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," $i:=1 //Inicializar el contador\n Repeat\n  //Hacer algo\n    $i:=$i+1 //Necesita incrementar el contador\n Until($i=100) //Bucle 100 veces\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Consejo:")," el bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," suele ser m\xe1s r\xe1pido que los bucles ",(0,l.kt)("inlineCode",{parentName:"p"},"While...End while")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"Repeat...Until"),", porque 4D comprueba la condici\xf3n internamente en cada ciclo del bucle e incrementa el contador. Por lo tanto, utilice el bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for")," siempre que sea posible."),(0,l.kt)("h3",t({},{id:"optimizing-the-execution-of-the-for-end-for-loops"}),"Optimizing the execution of the For... End for loops"),(0,l.kt)("p",null,"Puede utilizar variables reales y enteras, as\xed como contadores interproceso, de proceso y de variables locales. Para bucles repetitivos largos, especialmente en modo compilado, utilice variables locales de tipo Entero largo."),(0,l.kt)("ol",t({},{start:10}),(0,l.kt)("li",{parentName:"ol"},"Aqu\xed un ejemplo:")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," C_LONGINT($vlCounter) //Utilizaci\xf3n de variables locales de tipo Entero largo\n For($vlCounter;1;10000)\n  //Hacer algo\n End for\n")),(0,l.kt)("h3",t({},{id:"nested-for-end-for-looping-structures"}),"Nested For... End for looping structures"),(0,l.kt)("p",null,"Puede anidar tantas estructuras de control como necesite (razonablemente). Esto incluye la anidaci\xf3n de bucles ",(0,l.kt)("inlineCode",{parentName:"p"},"For...End for"),". Para evitar errores, aseg\xfarese de utilizar diferentes variables de contador para cada estructura de bucle."),(0,l.kt)("p",null,"He aqu\xed dos ejemplos:"),(0,l.kt)("ol",t({},{start:11}),(0,l.kt)("li",{parentName:"ol"},"El siguiente ejemplo recorre todos los elementos de un array de dos dimensiones:")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For($vlElem;1;Size of array(anArray))\n  //...\n  //Hacer algo con la l\xednea\n  //...\n    For($vlSubElem;1;Size of array(anArray{$vlElem}))\n  //Hacer algo con el elemento\n       anArray{$vlElem}{$vlSubElem}:=...\n    End for\n End for\n")),(0,l.kt)("ol",t({},{start:12}),(0,l.kt)("li",{parentName:"ol"},"El siguiente ejemplo construye un array de punteros a todos los campos de fecha presentes en la base:")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," ARRAY POINTER($apDateFields;0)\n $vlElem:=0\n For($vlTable;1;Get last table number)\n    If(Is table number valid($vlTable))\n       For($vlField;1;Get last field number($vlTable))\n          If(Is field number valid($vlTable;$vlField))\n             $vpField:=Field($vlTable;$vlField)\n             If(Type($vpField->)=Is date)\n                $vlElem:=$vlElem+1\n                INSERT IN ARRAY($apDateFields;$vlElem)\n                $apDateFields{$vlElem}:=$vpField\n             End if\n          End if\n       End for\n    End if\n End for\n")),(0,l.kt)("h2",t({},{id:"for-each-end-for-each"}),"For each... End for each"),(0,l.kt)("p",null,"La sintaxis de la estructura condicional ",(0,l.kt)("inlineCode",{parentName:"p"},"For each... End for each")," es:"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}\n    instrucci\xf3n(es)\n End for each\n")),(0,l.kt)("p",null,"La estructura ",(0,l.kt)("inlineCode",{parentName:"p"},"For each... End for each")," ejecuta un ",(0,l.kt)("em",{parentName:"p"},"Current_item")," especificado sobre todos los valores de ",(0,l.kt)("em",{parentName:"p"},"Expression"),". El tipo ",(0,l.kt)("em",{parentName:"p"},"Current_item")," depende del tipo ",(0,l.kt)("em",{parentName:"p"},"Expression"),". El bucle ",(0,l.kt)("inlineCode",{parentName:"p"},"For each... End for each")," puede iterar a trav\xe9s de tres tipos de ",(0,l.kt)("em",{parentName:"p"},"Expression"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"colecciones: bucle en cada elemento de la colecci\xf3n,"),(0,l.kt)("li",{parentName:"ul"},"selecciones de entidades: bucle en cada entidad,"),(0,l.kt)("li",{parentName:"ul"},"objetos: bucle en cada propiedad del objeto.")),(0,l.kt)("p",null,"La siguiente tabla compara los tres tipos de ",(0,l.kt)("inlineCode",{parentName:"p"},"For each... End for each"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",t({parentName:"tr"},{align:null})),(0,l.kt)("th",t({parentName:"tr"},{align:null}),"Bucle en las colecciones"),(0,l.kt)("th",t({parentName:"tr"},{align:null}),"Bucle en las selecciones de entidades"),(0,l.kt)("th",t({parentName:"tr"},{align:null}),"Bucle en los objetos"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",t({parentName:"tr"},{align:null}),"Tipo Current_Item"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"Variable del mismo tipo que los elementos de la colecci\xf3n"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"Entity"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"Variable texto")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",t({parentName:"tr"},{align:null}),"Tipos de expresiones"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"Colecci\xf3n (con elementos del mismo tipo)"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"Entity selection"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"Object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",t({parentName:"tr"},{align:null}),"N\xfamero de bucles (por defecto)"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"N\xfamero de elementos de la colecci\xf3n"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"N\xfamero de entidades en la selecci\xf3n"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"N\xfamero de propiedades del objeto")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",t({parentName:"tr"},{align:null}),"Soporte de par\xe1metros begin / end"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"S\xed"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"S\xed"),(0,l.kt)("td",t({parentName:"tr"},{align:null}),"No")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"El n\xfamero de bucles se eval\xfaa al inicio y no cambiar\xe1 durante el proceso. La adici\xf3n o eliminaci\xf3n de elementos durante el bucle no suele ser recomendable, ya que puede resultar en redundancia o perdidas de iteraciones."),(0,l.kt)("li",{parentName:"ul"},"Por defecto, la(s) ",(0,l.kt)("em",{parentName:"li"},"instrucciones")," adjuntas se ejecutan para cada valor de ",(0,l.kt)("em",{parentName:"li"},"Expresi\xf3n"),". Sin embargo, es posible salir del bucle comprobando una condici\xf3n al principio del bucle ( ",(0,l.kt)("inlineCode",{parentName:"li"},"While"),") o al final del bucle (",(0,l.kt)("inlineCode",{parentName:"li"},"Until"),")."),(0,l.kt)("li",{parentName:"ul"},"Los par\xe1metros opcionales ",(0,l.kt)("em",{parentName:"li"},"begin")," y ",(0,l.kt)("em",{parentName:"li"},"end")," pueden utilizarse con colecciones y selecciones de entidades para definir los l\xedmites del bucle."),(0,l.kt)("li",{parentName:"ul"},"El bucle ",(0,l.kt)("inlineCode",{parentName:"li"},"For each... End for each")," puede utilizarse en una ",(0,l.kt)("strong",{parentName:"li"},"colecci\xf3n compartida")," o en un ",(0,l.kt)("strong",{parentName:"li"},"objeto compartido"),". Si su c\xf3digo necesita modificar uno o m\xe1s elementos de la colecci\xf3n o de las propiedades del objeto, debe utilizar las palabras clave ",(0,l.kt)("inlineCode",{parentName:"li"},"Use...End use"),". Dependiendo de sus necesidades, puede llamar a las palabras clave ",(0,l.kt)("inlineCode",{parentName:"li"},"Use...End use"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"antes de entrar en el bucle, si los elementos deben modificarse juntos por razones de integridad, o"),(0,l.kt)("li",{parentName:"ul"},"dentro del bucle cuando s\xf3lo hay que modificar algunos elementos/propiedades y no es necesario gestionar la integridad.")))),(0,l.kt)("h3",t({},{id:"bucle-en-las-colecciones"}),"Bucle en las colecciones"),(0,l.kt)("p",null,"Cuando ",(0,l.kt)("inlineCode",{parentName:"p"},"For each...End for each")," se utiliza con una ",(0,l.kt)("em",{parentName:"p"},"Expression")," del tipo ",(0,l.kt)("em",{parentName:"p"},"Collection"),", el par\xe1metro ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," es una variable del mismo tipo que los elementos de la colecci\xf3n. El n\xfamero de bucles se basa en el n\xfamero de elementos de la colecci\xf3n."),(0,l.kt)("p",null,"La colecci\xf3n debe contener s\xf3lo elementos del mismo tipo, de lo contrario se devolver\xe1 un error en cuanto a la variable ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," se le asigne el primer tipo de valor diferente."),(0,l.kt)("p",null,"En cada iteraci\xf3n del bucle, la variable ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," se llena autom\xe1ticamente con el elemento correspondiente de la colecci\xf3n. Hay que tener en cuenta los siguientes puntos:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Si la variable ",(0,l.kt)("em",{parentName:"li"},"Current_Item")," es de tipo objeto o de tipo colecci\xf3n (es decir, si ",(0,l.kt)("em",{parentName:"li"},"Expresi\xf3n")," es una colecci\xf3n de objetos o de colecciones), al modificar esta variable se modificar\xe1 autom\xe1ticamente el elemento coincidente de la colecci\xf3n (porque los objetos y las colecciones comparten las mismas referencias). Si la variable es de tipo escalar, s\xf3lo se modificar\xe1 la variable."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("em",{parentName:"li"},"Current_Item")," variable must be of the same type as the collection elements. Si alg\xfan elemento de la colecci\xf3n no es del mismo tipo que la variable, se genera un error y el bucle se detiene."),(0,l.kt)("li",{parentName:"ul"},"Si la colecci\xf3n contiene elementos con un valor ",(0,l.kt)("strong",{parentName:"li"},"Null"),", se generar\xe1 un error si el tipo de variable ",(0,l.kt)("em",{parentName:"li"},"Current_Item")," no soporta valores ",(0,l.kt)("strong",{parentName:"li"},"Null")," (como las variables de tipo entero largo).")),(0,l.kt)("h4",t({},{id:"ejemplo-2"}),"Ejemplo"),(0,l.kt)("p",null,"Usted quiere calcular algunas estad\xedsticas para una colecci\xf3n de n\xfameros:"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," C_COLLECTION($nums)\n $nums:=New collection(10;5001;6665;33;1;42;7850)\n C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)\n For each($item;$nums)\n    If($item%2=0)\n       $vEven:=$vEven+1\n    Else\n       $vOdd:=$vOdd+1\n    End if\n    Case of\n       :($item<5000)\n          $vUnder:=$vUnder+1\n       :($item>6000)\n          $vOver:=$vOver+1\n    End case\n End for each\n  //$vEven=3, $vOdd=4\n  //$vUnder=4,$vOver=2\n")),(0,l.kt)("h3",t({},{id:"bucle-en-las-selecciones-de-entidades"}),"Bucle en las selecciones de entidades"),(0,l.kt)("p",null,"Cuando ",(0,l.kt)("inlineCode",{parentName:"p"},"For each... End for each")," se utiliza con una ",(0,l.kt)("em",{parentName:"p"},"Expression")," del tipo ",(0,l.kt)("em",{parentName:"p"},"Collection"),", el par\xe1metro ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," es una variable del mismo tipo que los elementos de la colecci\xf3n."),(0,l.kt)("p",null,"El n\xfamero de bucles se basa en el n\xfamero de entidades de la selecci\xf3n de entidades. En cada iteraci\xf3n del bucle, el par\xe1metro ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," se llena autom\xe1ticamente con la entidad de la selecci\xf3n de entidades que se procesa actualmente."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Nota:")," si la selecci\xf3n de entidades contiene una entidad que fue eliminada mientras tanto por otro proceso, se salta autom\xe1ticamente durante el bucle."),(0,l.kt)("p",null,"Tenga en cuenta que cualquier modificaci\xf3n aplicada en la entidad actual debe ser guardada expl\xedcitamente utilizando ",(0,l.kt)("inlineCode",{parentName:"p"},"entity.save( )"),"."),(0,l.kt)("h4",t({},{id:"ejemplo-3"}),"Ejemplo"),(0,l.kt)("p",null,"Quiere aumentar el salario de todos los empleados brit\xe1nicos en una selecci\xf3n de entidades:"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," C_OBJECT(emp)\n For each(emp;ds.Employees.query(\"country='UK'\"))\n    emp.salary:=emp.salary*1,03\n    emp.save()\n End for each\n")),(0,l.kt)("h3",t({},{id:"bucles-en-las-propiedades-de-objetos"}),"Bucles en las propiedades de objetos"),(0,l.kt)("p",null,"Cuando se utiliza ",(0,l.kt)("inlineCode",{parentName:"p"},"For each... End for each")," con una ",(0,l.kt)("em",{parentName:"p"},"Expression")," de tipo Object, el par\xe1metro ",(0,l.kt)("em",{parentName:"p"},"Current_Item")," es una variable texto que se llena autom\xe1ticamente con el nombre de la propiedad actualmente procesada."),(0,l.kt)("p",null,"Las propiedades del objeto se procesan de acuerdo con su orden de creaci\xf3n. Durante el bucle, se pueden a\xf1adir o eliminar propiedades en el objeto, sin modificar el n\xfamero de bucles que quedar\xe1n en funci\xf3n del n\xfamero original de propiedades del objeto."),(0,l.kt)("h4",t({},{id:"ejemplo-4"}),"Ejemplo"),(0,l.kt)("p",null,"Quiere pasar los nombres a may\xfasculas en el siguiente objeto:"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'{\n    "firstname": "gregory",\n    "lastname": "badikora",\n    "age": 20\n}\n')),(0,l.kt)("p",null,"Puede escribir:"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," For each(property;vObject)\n    If(Value type(vObject[property])=Is text)\n       vObject[property]:=Uppercase(vObject[property])\n    End if\n End for each\n")),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{}),'{\n    "firstname": "GREGORY",\n    "lastname": "BADIKORA",\n    "age": 20\n}\n')),(0,l.kt)("h3",t({},{id:"par\xe1metros-begin--end"}),"Par\xe1metros begin / end"),(0,l.kt)("p",null,"Puede definir los l\xedmites de la iteraci\xf3n utilizando los par\xe1metros opcionales inicio y fin."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Nota:"),"los par\xe1metros ",(0,l.kt)("em",{parentName:"p"},"inicio")," y ",(0,l.kt)("em",{parentName:"p"},"fin")," s\xf3lo pueden utilizarse en iteraciones a trav\xe9s de colecciones y selecciones de entidades (se ignoran en las propiedades de objetos)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"En el par\xe1metro ",(0,l.kt)("em",{parentName:"li"},"begin"),", pase la posici\xf3n del elemento en ",(0,l.kt)("em",{parentName:"li"},"Expression")," en la que se iniciar\xe1 la iteraci\xf3n (se incluye ",(0,l.kt)("em",{parentName:"li"},"begin"),")."),(0,l.kt)("li",{parentName:"ul"},"En el par\xe1metro ",(0,l.kt)("em",{parentName:"li"},"end"),", tambi\xe9n se puede pasar la posici\xf3n del elemento en ",(0,l.kt)("em",{parentName:"li"},"Expression")," en la que se debe detener la iteraci\xf3n (se excluye ",(0,l.kt)("em",{parentName:"li"},"end"),").")),(0,l.kt)("p",null,"Si se omite ",(0,l.kt)("em",{parentName:"p"},"fin")," o si ",(0,l.kt)("em",{parentName:"p"},"fin"),"es mayor que el n\xfamero de elementos de ",(0,l.kt)("em",{parentName:"p"},"Expression"),", se iteran los elementos desde ",(0,l.kt)("em",{parentName:"p"},"inicio")," hasta el \xfaltimo (incluido). Si los par\xe1metros ",(0,l.kt)("em",{parentName:"p"},"inicio")," y ",(0,l.kt)("em",{parentName:"p"},"fin")," son valores positivos, representan posiciones reales de elementos en ",(0,l.kt)("em",{parentName:"p"},"Expression"),". Si ",(0,l.kt)("em",{parentName:"p"},"comienzo")," es un valor negativo, se recalcula como ",(0,l.kt)("inlineCode",{parentName:"p"},"comienzo:=comienzo+tama\xf1o de la expresi\xf3n")," (se considera como el desplazamiento desde el final de ",(0,l.kt)("em",{parentName:"p"},"Expression"),"). Si el valor calculado es negativo, ",(0,l.kt)("em",{parentName:"p"},"inicio")," toma el valor 0. ",(0,l.kt)("strong",{parentName:"p"},"Nota:")," aunque inicio sea negativo, la iteraci\xf3n se sigue realizando en el orden est\xe1ndar. Si ",(0,l.kt)("em",{parentName:"p"},"fin")," es un valor negativo, se recalcula como ",(0,l.kt)("inlineCode",{parentName:"p"},"fin:=fin+tama\xf1o de la expresi\xf3n")),(0,l.kt)("p",null,"Por ejemplo:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"una colecci\xf3n contiene 10 elementos (numerados de 0 a 9)"),(0,l.kt)("li",{parentName:"ul"},"begin=-4 > -> begin=-4+10=6 >-> la iteraci\xf3n comienza en el sexto elemento (#5)"),(0,l.kt)("li",{parentName:"ul"},"end=-2 -> end=-2+10=8 -> la iteraci\xf3n se detiene antes del 8\xba elemento (#7), es decir, en el 7\xba elemento.")),(0,l.kt)("h4",t({},{id:"ejemplo-5"}),"Ejemplo"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' C_COLLECTION($col;$col2)\n $col:=New collection("a";"b";"c";"d";"e")\n $col2:=New collection(1;2;3)\n C_TEXT($item)\n For each($item;$col;0;3)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c"]\n For each($item;$col;-2;-1)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c","d"]\n')),(0,l.kt)("h3",t({},{id:"condiciones-until-y-while"}),"Condiciones Until y While"),(0,l.kt)("p",null,"Puede controlar la ejecuci\xf3n de ",(0,l.kt)("inlineCode",{parentName:"p"},"For each... End for each")," a\xf1adiendo una condici\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"Until")," o una condici\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"While")," al bucle. Cuando una instrucci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"Until(condici\xf3n)")," est\xe1 asociada al bucle, la iteraci\xf3n se detendr\xe1 tan pronto como la condici\xf3n se eval\xfae como ",(0,l.kt)("inlineCode",{parentName:"p"},"True"),", mientras que cuando se trata de una instrucci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"While(condici\xf3n)"),", la iteraci\xf3n se detendr\xe1 cuando la condici\xf3n se eval\xfae por primera vez como ",(0,l.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,l.kt)("p",null,"Puede pasar cualquiera de las dos palabras clave en funci\xf3n de sus necesidades:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"La condici\xf3n ",(0,l.kt)("inlineCode",{parentName:"li"},"Until")," se comprueba al final de cada iteraci\xf3n, por lo que si ",(0,l.kt)("em",{parentName:"li"},"Expression")," no est\xe1 vac\xeda o es nula, el bucle se ejecutar\xe1 al menos una vez."),(0,l.kt)("li",{parentName:"ul"},"La condici\xf3n ",(0,l.kt)("inlineCode",{parentName:"li"},"While")," se prueba al principio de cada iteraci\xf3n, por lo que seg\xfan el resultado de la condici\xf3n, el bucle puede no ejecutarse en absoluto.")),(0,l.kt)("h4",t({},{id:"ejemplo-6"}),"Ejemplo"),(0,l.kt)("pre",null,(0,l.kt)("code",t({parentName:"pre"},{className:"language-4d"})," $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)\n\n $total:=0\n For each($num;$colNum)While($total<30) //probada al inicio\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)\n\n $total:=1000\n For each($num;$colNum)Until($total>30) //probada al final\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 1001 (1000+1)\n")))}u.isMDXComponent=!0}}]);