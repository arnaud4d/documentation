"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30485],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>u});var n=o(67294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},d=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var o=e.components,r=e.mdxType,t=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=i(o),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||t;return o?n.createElement(g,l(l({ref:a},d),{},{components:o})):n.createElement(g,l({ref:a},d))}));function u(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=o.length,l=new Array(t);l[0]=c;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<t;i++)l[i]=o[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},43055:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});o(67294);var n=o(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r.apply(this,arguments)}function t(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const l={id:"parameters",title:"Par\xe1metros"},s=void 0,p={unversionedId:"Concepts/parameters",id:"version-18/Concepts/parameters",title:"Par\xe1metros",description:"Utilizar param\xe9tros",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Concepts/parameters.md",sourceDirName:"Concepts",slug:"/Concepts/parameters",permalink:"/docs/es/18/Concepts/parameters",draft:!1,tags:[],version:"18",frontMatter:{id:"parameters",title:"Par\xe1metros"},sidebar:"docs",previous:{title:"M\xe9todos",permalink:"/docs/es/18/Concepts/methods"},next:{title:"Objetos y colecciones compartidos",permalink:"/docs/es/18/Concepts/shared"}},i={},d=[{value:"Utilizar param\xe9tros",id:"utilizar-param\xe9tros",level:2},{value:"Expresiones soportadas",id:"expresiones-soportadas",level:3},{value:"Funciones",id:"funciones",level:2},{value:"Declaraci\xf3n de par\xe1metros",id:"declaraci\xf3n-de-par\xe1metros",level:2},{value:"Valores o referencias",id:"valores-o-referencias",level:2},{value:"Casos particulares: objetos y colecciones",id:"casos-particulares-objetos-y-colecciones",level:3},{value:"Par\xe1metro con nombre",id:"par\xe1metro-con-nombre",level:2},{value:"Par\xe1metros opcionales",id:"par\xe1metros-opcionales",level:2},{value:"Indirecci\xf3n de par\xe1metros",id:"indirecci\xf3n-de-par\xe1metros",level:2},{value:"Declaraci\xf3n de par\xe1metros gen\xe9ricos",id:"declaraci\xf3n-de-par\xe1metros-gen\xe9ricos",level:3}],m={toc:d};function c(e){var{components:a}=e,o=t(e,["components"]);return(0,n.kt)("wrapper",r({},m,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",r({},{id:"utilizar-param\xe9tros"}),"Utilizar param\xe9tros"),(0,n.kt)("p",null,"A menudo encontrar\xe1 que necesita pasar datos a sus m\xe9todos. Esto se hace f\xe1cilmente con par\xe1metros."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Los par\xe1metros")," (o ",(0,n.kt)("strong",{parentName:"p"},"argumentos"),") son piezas de datos que un m\xe9todo necesita para realizar su tarea. Los t\xe9rminos ",(0,n.kt)("em",{parentName:"p"},"par\xe1metros")," y ",(0,n.kt)("em",{parentName:"p"},"argumentos"),' se utilizan indistintamente en este manual. Los par\xe1metros tambi\xe9n se pasan a los comandos integrados de 4D. En este ejemplo, la cadena "Hello" es un argumento para el comando integrado ',(0,n.kt)("inlineCode",{parentName:"p"},"ALERT"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'ALERT("Hello")\n')),(0,n.kt)("p",null,"Los par\xe1metros se pasan a los m\xe9todos de la misma manera. Por ejemplo, si un m\xe9todo proyecto llamado DO SOMETHING acepta tres par\xe1metros, una llamada al m\xe9todo podr\xeda tener la siguiente forma:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"DO SOMETHING(WithThis;AndThat;ThisWay)\n")),(0,n.kt)("p",null,"Los par\xe1metros est\xe1n separados por punto y coma (;). Su valor se eval\xfaa al momento de la llamada."),(0,n.kt)("p",null,"En la subrutina (el m\xe9todo llamado), el valor de cada par\xe1metro se copia autom\xe1ticamente en variables locales numeradas secuencialmente: $1, $2, $3, etc. La numeraci\xf3n de las variables locales representa el orden de los par\xe1metros."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  //C\xf3digo del m\xe9todo DO SOMETHING\n  //Asumiendo que todos los par\xe1metros son de tipo texto\n C_TEXT($1;$2;$3)\n ALERT("I received "+$1+" and "+$2+" and also "+$3)\n  //$1 contiene el par\xe1metro WithThis\n  //$2 contiene el par\xe1metro AndThat\n  //$3 contiene el par\xe1metro ThisWay\n')),(0,n.kt)("p",null,"Dentro de la subrutina, puede utilizar los par\xe1metros $1, $2... de la misma manera que utilizar\xeda cualquier otra variable local. Sin embargo, en el caso de que utilice comandos que modifiquen el valor de la variable pasada como par\xe1metro (por ejemplo ",(0,n.kt)("inlineCode",{parentName:"p"},"Find in field"),"), los par\xe1metros $1, $2, etc. no pueden utilizarse directamente. Primero debe copiarlos en las variables locales est\xe1ndar (por ejemplo: ",(0,n.kt)("inlineCode",{parentName:"p"},"$myvar:=$1"),")."),(0,n.kt)("p",null,"Los mismos principios se aplican cuando los m\xe9todos se ejecutan a trav\xe9s de comandos dedicados, por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  \n//pass the !05/05/10! date as parameter to the SetCalendarDate  \n// in the context of a subform  \n//pase la fecha !05/05/10! como par\xe1metro del SetCalendarDate  \n// en el contexto de un subformulario\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," para una buena ejecuci\xf3n del c\xf3digo, es necesario asegurarse de que todos los par\xe1metros ",(0,n.kt)("inlineCode",{parentName:"p"},"$1"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"$2"),"... est\xe9n correctamente declarados dentro de los m\xe9todos llamados (ver ",(0,n.kt)("a",r({parentName:"p"},{href:"#declaring-parameters"}),"Declaraci\xf3n de par\xe1metros")," m\xe1s abajo)."),(0,n.kt)("h3",r({},{id:"expresiones-soportadas"}),"Expresiones soportadas"),(0,n.kt)("p",null,"Puede utilizar toda ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/18/Concepts/quick-tour#expression-types"}),"expresi\xf3n")," como par\xe1metro, excepto:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"tablas"),(0,n.kt)("li",{parentName:"ul"},"arrays")),(0,n.kt)("p",null,"Las expresiones de tablas o arrays s\xf3lo pueden pasarse ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/18/Concepts/pointer#pointers-as-parameters-to-methods"}),"como referencia utilizando un puntero"),"."),(0,n.kt)("h2",r({},{id:"funciones"}),"Funciones"),(0,n.kt)("p",null,"Los datos pueden ser devueltos por los m\xe9todos. Un m\xe9todo que devuelve un valor se llama funci\xf3n."),(0,n.kt)("p",null,"Los comandos de 4D o 4D Plug-in que devuelven un valor tambi\xe9n se llaman funciones."),(0,n.kt)("p",null,"Por ejemplo, la siguiente l\xednea es una sentencia que utiliza la funci\xf3n integrada, ",(0,n.kt)("inlineCode",{parentName:"p"},"Length"),", para devolver la longitud de una cadena. La instrucci\xf3n pone el valor devuelto por ",(0,n.kt)("inlineCode",{parentName:"p"},"Length")," en una variable llamada ",(0,n.kt)("em",{parentName:"p"},"MyLength"),". Esta es la instrucci\xf3n:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'MyLength:=Length("How did I get here?")\n')),(0,n.kt)("p",null,"Toda subrutina puede devolver un valor. El valor a devolver se pone en la variable local ",(0,n.kt)("inlineCode",{parentName:"p"},"$0"),"."),(0,n.kt)("p",null,"Por ejemplo, la siguiente funci\xf3n, llamada ",(0,n.kt)("inlineCode",{parentName:"p"},"Uppercase4"),", devuelve una cadena con los cuatro primeros caracteres de la cadena que se han pasado en may\xfasculas:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$0:=Uppercase(Substring($1;1;4))+Substring($1;5)\n")),(0,n.kt)("p",null,"El siguiente es un ejemplo que utiliza la funci\xf3n Uppercase4:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'NewPhrase:=Uppercase4("This is good.")\n')),(0,n.kt)("p",null,"En este ejemplo, la variable ",(0,n.kt)("em",{parentName:"p"},"NewPhrase")," recibe \u201cTHIS is good.\u201d"),(0,n.kt)("p",null,"El resultado de la funci\xf3n, ",(0,n.kt)("inlineCode",{parentName:"p"},"$0"),", es una variable local dentro de la subrutina. Puede utilizarse como tal dentro de la subrutina. It can be used as such within the subroutine. Dentro de la subrutina, puede utilizar ",(0,n.kt)("inlineCode",{parentName:"p"},"$0")," de la misma manera que utilizar\xeda cualquier otra variable local. Es 4D quien devuelve el valor de ",(0,n.kt)("inlineCode",{parentName:"p"},"$0")," (tal y como est\xe1 cuando la subrutina termina) al m\xe9todo llamado."),(0,n.kt)("h2",r({},{id:"declaraci\xf3n-de-par\xe1metros"}),"Declaraci\xf3n de par\xe1metros"),(0,n.kt)("p",null,"Aunque no sea obligatorio en ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/18/Concepts/interpreted-compiled"}),"modo interpretado"),", debe declarar cada par\xe1metro en los m\xe9todos llamados para evitar problemas."),(0,n.kt)("p",null,"En el siguiente ejemplo, el m\xe9todo proyecto ",(0,n.kt)("inlineCode",{parentName:"p"},"OneMethodAmongOthers")," declara tres par\xe1metros:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  // M\xe9todo proyecto OneMethodAmongOthers\n  // OneMethodAmongOthers ( Real ; Date { ; Long } )\n  // OneMethodAmongOthers ( Amount ; Date { ; Ratio } )\n\n C_REAL($1) // El primer par\xe1metro es de tipo Real\n C_DATE($2) // El segundo par\xe1metro es de tipo Fecha\n C_LONGINT($3) // El tercer par\xe1metro es de tipo Entero largo\n")),(0,n.kt)("p",null,"En el siguiente ejemplo, el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"Capitalize")," proyecto acepta un par\xe1metro texto y devuelve un resultado texto:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  // M\xe9todo proyecto Mayusculas\n  // Mayusculas( Texto ) -> Texto\n  // Mayusculas( Cadena fuente ) -> Cadena con la primera letra en may\xfascula\n\n C_TEXT($0;$1)\n $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))\n")),(0,n.kt)("p",null,"La utilizaci\xf3n de comandos tales como ",(0,n.kt)("inlineCode",{parentName:"p"},"New process")," con m\xe9todos proceso que aceptan par\xe1metros tambi\xe9n requiere que los par\xe1metros se declaren expl\xedcitamente en el m\xe9todo llamado. Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_TEXT($string)\nC_LONGINT($idProc;$int)\nC_OBJECT($obj)\n\n$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)\n')),(0,n.kt)("p",null,'Este c\xf3digo puede ser ejecutado en modo compilado s\xf3lo si "foo_method" declara sus par\xe1metros:'),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//foo_method\nC_TEXT($1)\nC_LONGINT($2)\nC_OBJECT($3)\n...\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:"),' en modo compilado, puede agrupar todos los par\xe1metros de las variables locales de los m\xe9todos proyecto en un m\xe9todo espec\xedfico con un nombre que empiece por "Compiler". Dentro de este m\xe9todo, se pueden predeclarar los par\xe1metros de cada m\xe9todo, por ejemplo:'),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," C_REAL(OneMethodAmongOthers;$1)\n")),(0,n.kt)("p",null,"Ver la p\xe1gina ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/18/Concepts/interpreted-compiled"}),"Modos interpretado y compilado")," para m\xe1s informaci\xf3n."),(0,n.kt)("p",null,'La declaraci\xf3n de par\xe1metros tambi\xe9n es obligatoria en los siguientes contextos (estos contextos no soportan la declaraci\xf3n en un m\xe9todo "Compiler"):'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Database methods For example, the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Connection Database Method")," receives six parameters, $1 to $6, of the data type Text. Al principio del m\xe9todo base, debe escribir (incluso si no se utilizan todos los par\xe1metros):")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"// On Web Connection\nC_TEXT($1;$2;$3;$4;$5;$6)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Triggers The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Sin embargo, si quiere declararlo, debe hacerlo en el propio trigger.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Form objects that accept the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Drag Over")," form event The $0 parameter (Longint), which is the result of the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Drag Over")," form event, is typed by the compiler if the parameter has not been explicitly declared. Sin embargo, si quiere declararlo, debe hacerlo en el propio m\xe9todo proyecto. ",(0,n.kt)("strong",{parentName:"p"},"Nota:")," el compilador no inicializa el par\xe1metro $0. Por lo tanto, tan pronto como utilice el evento formulario ",(0,n.kt)("inlineCode",{parentName:"p"},"On Drag Over"),", debe inicializar $0. Por ejemplo:"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," C_LONGINT($0)\n If(Form event=On Drag Over)\n    $0:=0\n    ...\n    If($DataType=Is picture)\n       $0:=-1\n    End if\n    ...\n End if\n")),(0,n.kt)("h2",r({},{id:"valores-o-referencias"}),"Valores o referencias"),(0,n.kt)("p",null,"Cuando pasa un par\xe1metro, 4D siempre eval\xfaa la expresi\xf3n del par\xe1metro en el contexto del m\xe9todo que llama y define el ",(0,n.kt)("strong",{parentName:"p"},"valor resultante")," en las variables locales $1, $2... de la subrutina (ver ",(0,n.kt)("a",r({parentName:"p"},{href:"#using-parameters"}),"Utilizaci\xf3n de los par\xe1metros"),"). Las variables/par\xe1metros locales no son los campos, variables o expresiones reales pasados por el m\xe9todo que llama; s\xf3lo contienen los valores que se han pasado. Como su alcance es local, si el valor de un par\xe1metro se modifica en la subrutina, no cambia el valor en el m\xe9todo que llama. Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'    //Esta es una parte del c\xf3digo del m\xe9todo MY_METHOD\nDO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\nALERT([People]Name)\n\n    //Este es el c\xf3digo del m\xe9todo DO_SOMETHING\n $1:=Uppercase($1)\n ALERT($1)\n')),(0,n.kt)("p",null,"La caja de alerta mostrada por ",(0,n.kt)("inlineCode",{parentName:"p"},"DO_SOMETHING"),' dir\xe1 "WILLIAMS" y la caja de alerta mostrada por ',(0,n.kt)("inlineCode",{parentName:"p"},"MY_METHOD"),' dir\xe1 "williams". El m\xe9todo cambi\xf3 localmente el valor del par\xe1metro $1, pero esto no afecta al valor del campo ',(0,n.kt)("inlineCode",{parentName:"p"},"[People]Name")," pasado como par\xe1metro por el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"MY_METHOD"),"."),(0,n.kt)("p",null,"Hay dos formas de hacer que el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"DO_SOMETHING")," cambie el valor del campo:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"En lugar de pasar el campo al m\xe9todo, se pasa un puntero al mismo, por lo que se escribir\xeda:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  //Esta es una parte del c\xf3digo del m\xe9todo MY_METHOD\n DO_SOMETHING(->[People]Name) //Let\'s say [People]Name value is "williams"\n ALERT([People]Last Name)\n\n  //Este es el c\xf3digo del m\xe9todo DO_SOMETHING\n $1->:=Uppercase($1->)\n ALERT($1->)\n')),(0,n.kt)("p",null,"Aqu\xed el par\xe1metro no es el campo, sino un puntero al mismo. Por lo tanto, dentro del m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"DO SOMETHING"),", $1 ya no es el valor del campo sino un puntero al campo. El objeto ",(0,n.kt)("strong",{parentName:"p"},"referenciado"),' por $1 ($1-> en el c\xf3digo anterior) es el campo real. Por lo tanto, cambiar el objeto referenciado va m\xe1s all\xe1 del alcance de la subrutina, y el campo real se ve afectado. En este ejemplo, las dos cajas de alerta dir\xe1n "WILLIAMS".'),(0,n.kt)("ol",r({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"En lugar de que el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"DO_SOMETHING"),' "haga algo", puede reescribir el m\xe9todo para que devuelva un valor. Por lo tanto, escribir\xeda:')),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'    //Esta es una parte del c\xf3digo del m\xe9todo MY_METHO\n [People]Name:=DO_SOMETHING([People]Name) //Let\'s say [People]Name value is "williams"\n ALERT([People]Name)\n\n    //Este es el c\xf3digo del m\xe9todo DO_SOMETHING\n $0:=Uppercase($1)\n ALERT($0)\n')),(0,n.kt)("p",null,'Esta segunda t\xe9cnica de retornar un valor por una subrutina se llama " utilizar una funci\xf3n" Se describe en el p\xe1rrafo ',(0,n.kt)("a",r({parentName:"p"},{href:"#functions"}),"Funciones"),". Se describe en el p\xe1rrafo ",(0,n.kt)("a",r({parentName:"p"},{href:"#functions"}),"Funciones"),"."),(0,n.kt)("h3",r({},{id:"casos-particulares-objetos-y-colecciones"}),"Casos particulares: objetos y colecciones"),(0,n.kt)("p",null,"Debe prestar atenci\xf3n al hecho de que los tipos de datos Objeto y Colecci\xf3n s\xf3lo pueden manejarse a trav\xe9s de una referencia (es decir, un ",(0,n.kt)("em",{parentName:"p"},"puntero")," interno)."),(0,n.kt)("p",null,"Por consiguiente, cuando se utilizan estos tipos de datos como par\xe1metros, ",(0,n.kt)("inlineCode",{parentName:"p"},"$1, $2...")," no contienen ",(0,n.kt)("em",{parentName:"p"},"valores")," sino ",(0,n.kt)("em",{parentName:"p"},"referencias"),". La modificaci\xf3n del valor de los par\xe1metros ",(0,n.kt)("inlineCode",{parentName:"p"},"$1, $2...")," dentro de la subrutina se propagar\xe1 a cualquier lugar donde se utilice el objeto o colecci\xf3n fuente. Este es el mismo principio que para ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/18/Concepts/pointer#pointers-as-parameters-to-methods"}),"los punteros"),", excepto que los par\xe1metros ",(0,n.kt)("inlineCode",{parentName:"p"},"$1, $2...")," no necesitan ser desreferenciados en la subrutina."),(0,n.kt)("p",null,"Por ejemplo, considere el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"CreatePerson")," que crea un objeto y lo env\xeda como par\xe1metro:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  //CreatePerson\n C_OBJECT($person)\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n')),(0,n.kt)("p",null,"El m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"ChangeAge")," a\xf1ade 10 al atributo Age del objeto recibido"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  //ChangeAge\n C_OBJECT($1)\n $1.Age:=$1.Age+10\n ALERT(String($1.Age))\n")),(0,n.kt)("p",null,"Cuando se ejecuta el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"CreatePerson"),', las dos cajas de alerta dir\xe1n "50" ya que la misma referencia de objeto es manejada por ambos m\xe9todos.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4D Server:"),' cuando se pasan par\xe1metros entre m\xe9todos que no se ejecutan en la misma m\xe1quina (utilizando por ejemplo la opci\xf3n "Ejecutar en el servidor"), las referencias no son utilizables. En estos casos, se env\xedan copias de los par\xe1metros de objetos y colecciones en lugar de referencias.'),(0,n.kt)("h2",r({},{id:"par\xe1metro-con-nombre"}),"Par\xe1metro con nombre"),(0,n.kt)("p",null,"La utilizaci\xf3n de objetos como par\xe1metros permite manejar ",(0,n.kt)("strong",{parentName:"p"},"par\xe1metros con nombre"),". Este estilo de programaci\xf3n es simple, flexible y f\xe1cil de leer."),(0,n.kt)("p",null,"Por ejemplo, utilizando el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"CreatePerson"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  //CreatePerson\n C_OBJECT($person)\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n')),(0,n.kt)("p",null,"En el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"ChangeAge")," puede escribir:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  //ChangeAge\n C_OBJECT($1;$para)\n $para:=$1  \n $para.Age:=$para.Age+10\n ALERT($para.Name+" is "+String($para.Age)+" years old.")\n')),(0,n.kt)("p",null,"Esto ofrece una poderosa manera de definir ",(0,n.kt)("a",r({parentName:"p"},{href:"#optional-parameters"}),"par\xe1metros opcionales")," (ver tambi\xe9n abajo). Para manejar los par\xe1metros que faltan, puede:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"verificar si se suministran todos los par\xe1metros esperados compar\xe1ndolos con el valor ",(0,n.kt)("inlineCode",{parentName:"li"},"Null"),", o"),(0,n.kt)("li",{parentName:"ul"},"predefinir los valores de los par\xe1metros, o"),(0,n.kt)("li",{parentName:"ul"},"utilizarlos como valores vac\xedos.")),(0,n.kt)("p",null,"En el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"ChangeAge")," anterior, las propiedades Age y Name son obligatorias y producir\xedan errores si faltaran. Para evitar este caso, puede escribir simplemente:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  //ChangeAge\n C_OBJECT($1;$para)\n $para:=$1  \n $para.Age:=Num($para.Age)+10\n ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n')),(0,n.kt)("p",null,'Entonces ambos par\xe1metros son opcionales; si no se llenan, el resultado ser\xe1 " is 10 years old", pero no se generar\xe1 ning\xfan error.'),(0,n.kt)("p",null,"Por \xfaltimo, con los par\xe1metros con nombre, el mantenimiento o la reproducci\xf3n de las aplicaciones es muy sencillo y seguro. Imagine que m\xe1s adelante se da cuenta de que a\xf1adir 10 a\xf1os no siempre es apropiado. Necesita otro par\xe1metro para definir cu\xe1ntos a\xf1os hay que a\xf1adir. Escriba:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$person:=New object("Name";"Smith";"Age";40;"toAdd";10)\nChangeAge($person)\n\n//ChangeAge\nC_OBJECT($1;$para)\n$para:=$1  \nIf ($para.toAdd=Null)\n    $para.toAdd:=10\nEnd if\n$para.Age:=Num($para.Age)+$para.toAdd\nALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n')),(0,n.kt)("p",null,"El poder aqu\xed es que no tendr\xe1 que cambiar su c\xf3digo existente. Siempre funcionar\xe1 como en la versi\xf3n anterior, pero si es necesario, puede utilizar otro valor que no sea 10 a\xf1os."),(0,n.kt)("p",null,"Con las variables con nombre, cualquier par\xe1metro puede ser opcional. En el ejemplo anterior, todos los par\xe1metros son opcionales y se puede dar cualquiera, en cualquier orden."),(0,n.kt)("h2",r({},{id:"par\xe1metros-opcionales"}),"Par\xe1metros opcionales"),(0,n.kt)("p",null,"En el manual ",(0,n.kt)("em",{parentName:"p"},"Lenguaje de 4D"),", los caracteres { } (llaves) indican par\xe1metros opcionales. Por ejemplo, ",(0,n.kt)("inlineCode",{parentName:"p"},"ALERT (message{; okButtonTitle})")," significa que el par\xe1metro ",(0,n.kt)("em",{parentName:"p"},"okButtonTitle")," puede omitirse al llamar al comando. Se puede llamar de las siguientes maneras:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'ALERT("Are you sure?";"Yes I am") //2 par\xe1metros\nALERT("Time is over") //1 par\xe1metro\n')),(0,n.kt)("p",null,"Los m\xe9todos proyecto 4D tambi\xe9n aceptan estos par\xe1metros opcionales, empezando por la derecha. El problema con los par\xe1metros opcionales es c\xf3mo manejar el caso en que algunos de ellos falten en el m\xe9todo llamado, nunca deber\xeda producir un error. Una buena pr\xe1ctica es asignar valores por defecto a los par\xe1metros no utilizados."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Cuando los par\xe1metros opcionales son necesarios en sus m\xe9todos, tambi\xe9n puede considerar el uso de ",(0,n.kt)("a",r({parentName:"p"},{href:"#named-parameters"}),"par\xe1metros con nombre")," que ofrecen una forma flexible de manejar un n\xfamero variable de par\xe1metros.")),(0,n.kt)("p",null,"Utilizando el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Count parameters")," desde dentro del m\xe9todo llamado, puede detectar el n\xfamero real de par\xe1metros y realizar diferentes operaciones dependiendo de lo que haya recibido."),(0,n.kt)("p",null,"El siguiente ejemplo muestra un mensaje de texto y puede insertar el texto en un documento en el disco o en un \xe1rea de 4D Write Pro:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"// M\xe9todo proyecto APPEND TEXT\n// APPEND TEXT ( Text { ; Text { ; Object } } )\n// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )\n\n C_TEXT($1;$2)\n C_OBJECT($3)\n\n ALERT($1)\n If(Count parameters>=3)\n    WP SET TEXT($3;$1;wk append)\n Else\n    If(Count parameters>=2)\n       TEXT TO DOCUMENT($2;$1)\n    End if\n End if\n")),(0,n.kt)("p",null,"Despu\xe9s de a\xf1adir este m\xe9todo proyecto a su aplicaci\xf3n, puede escribir:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'APPEND TEXT(vtSomeText) //S\xf3lo mostrar\xe1 el mensaje\nAPPEND TEXT(vtSomeText;$path) //Muestra el mensaje y el anexo al documento en $path\nAPPEND TEXT(vtSomeText;"";$wpArea) //Muestra el mensaje y lo escribe en $wpArea\n')),(0,n.kt)("h2",r({},{id:"indirecci\xf3n-de-par\xe1metros"}),"Indirecci\xf3n de par\xe1metros"),(0,n.kt)("p",null,"Los m\xe9todos proyecto 4D aceptan un n\xfamero variable de par\xe1metros del mismo tipo, empezando por la derecha. Este principio se llama ",(0,n.kt)("strong",{parentName:"p"},"la indirecci\xf3n de par\xe1metros"),". Al utilizar el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Count parameters")," puede dirigirse a esos par\xe1metros con un bucle ",(0,n.kt)("inlineCode",{parentName:"p"},"For...End for")," y la sintaxis de indirecci\xf3n de par\xe1metros."),(0,n.kt)("p",null,"En el siguiente ejemplo, el m\xe9todo proyecto ",(0,n.kt)("inlineCode",{parentName:"p"},"SEND PACKETS")," acepta un par\xe1metro de tiempo seguido de un n\xfamero variable de par\xe1metros de texto:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  //M\xe9todo proyecto SEND PACKETS\n  //SEND PACKETS ( Time ; Text { ; Text2... ; TextN } )\n  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )\n\n C_TIME($1)\n C_TEXT(${2})\n C_LONGINT($vlPacket)\n\n For($vlPacket;2;Count parameters)\n    SEND PACKET($1;${$vlPacket})\n End for\n")),(0,n.kt)("p",null,"La indirecci\xf3n de par\xe1metros se gestiona mejor si se respeta la siguiente convenci\xf3n: si s\xf3lo algunos de los par\xe1metros se dirigen por indirecci\xf3n, deben pasarse despu\xe9s de los dem\xe1s. Dentro del m\xe9todo, una direcci\xf3n de indirecci\xf3n tiene el formato: ${$i}, donde $i es una variable num\xe9rica. ${$i} se denomina ",(0,n.kt)("strong",{parentName:"p"},"par\xe1metro gen\xe9rico"),"."),(0,n.kt)("p",null,"Por ejemplo, considere una funci\xf3n que suma valores y devuelve la suma formateada seg\xfan un formato que se pasa como par\xe1metro. Cada vez que se llama a este m\xe9todo, el n\xfamero de valores a sumar puede variar. Debemos pasar los valores como par\xe1metros al m\xe9todo y el formato en forma de cadena de caracteres. El n\xfamero de valores puede variar de una llamada a otra."),(0,n.kt)("p",null,"Esta funci\xf3n se llama de la siguiente manera:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' Result:=MySum("##0.00";125,2;33,5;24)\n\n')),(0,n.kt)("p",null,'En este caso, el m\xe9todo que llama obtendr\xe1 la cadena "182,70", que es la suma de los n\xfameros, con el formato especificado. Los par\xe1metros de la funci\xf3n deben pasarse en el orden correcto: primero el formato y luego los valores.'),(0,n.kt)("p",null,"Aqu\xed est\xe1 la funci\xf3n, llamada ",(0,n.kt)("inlineCode",{parentName:"p"},"MySum"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $Sum:=0\n For($i;2;Count parameters)\n    $Sum:=$Sum+${$i}\n End for\n $0:=String($Sum;$1)\n")),(0,n.kt)("p",null,"Esta funci\xf3n puede llamarse ahora de varias formas:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' Result:=MySum("##0.00";125,2;33,5;24)\n Result:=MySum("000";1;18;4;23;17)\n')),(0,n.kt)("h3",r({},{id:"declaraci\xf3n-de-par\xe1metros-gen\xe9ricos"}),"Declaraci\xf3n de par\xe1metros gen\xe9ricos"),(0,n.kt)("p",null,"Al igual que con otras variables locales, no es obligatorio declarar los par\xe1metros gen\xe9ricos mediante una directiva del compilador. Sin embargo, se recomienda para evitar toda ambig\xfcedad. Para declarar estos par\xe1metros, se utiliza una directiva del compilador a la que se pasa ${N} como par\xe1metro, donde N especifica el primer par\xe1metro gen\xe9rico."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," C_LONGINT(${4})\n")),(0,n.kt)("p",null,"Este comando significa que a partir del cuarto par\xe1metro (incluido), el m\xe9todo puede recibir un n\xfamero variable de par\xe1metros de tipo entero largo. $1, $2 y $3 pueden ser de cualquier tipo de datos. Sin embargo, si se utiliza $2 por indirecci\xf3n, el tipo de datos utilizado ser\xe1 el tipo gen\xe9rico. $1, $2 and $3 can be of any data type."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," el n\xfamero en la declaraci\xf3n tiene que ser una constante y no una variable."))}c.isMDXComponent=!0}}]);