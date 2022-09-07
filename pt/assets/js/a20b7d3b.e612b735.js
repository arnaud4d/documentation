"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80456],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=m(a),c=o,g=u["".concat(i,".").concat(c)]||u[c]||p[c]||r;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35312:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const l={id:"quick-tour",title:"A Quick Tour",sidebar_label:"A Quick Tour"},s=void 0,i={unversionedId:"Concepts/quick-tour",id:"version-19-R6/Concepts/quick-tour",title:"A Quick Tour",description:'Usando a linguagem 4D, imprimir a mensagem tradicional ""Hello, world!" na tela pode ser feito de v\xe1rias maneiras. A maneira mais simples \xe9 provavelmente escrever a linha \xfanica abaixo em um m\xe9todo de projeto:',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/Concepts/quick-tour.md",sourceDirName:"Concepts",slug:"/Concepts/quick-tour",permalink:"/documentation/pt/docs/Concepts/quick-tour",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"quick-tour",title:"A Quick Tour",sidebar_label:"A Quick Tour"},sidebar:"docs",previous:{title:"Sobre a linguagem 4D",permalink:"/documentation/pt/docs/Concepts/about"},next:{title:"Operadores",permalink:"/documentation/pt/docs/Concepts/operators"}},m={},d=[{value:"Atribuir valores",id:"atribuir-valores",level:2},{value:"Vari\xe1veis",id:"vari\xe1veis",level:2},{value:"Comandos",id:"comandos",level:2},{value:"Constantes",id:"constantes",level:2},{value:"M\xe9todos",id:"m\xe9todos",level:2},{value:"Tipos de dados",id:"tipos-de-dados",level:2},{value:"Objects and collections",id:"objects-and-collections",level:2},{value:"Classes",id:"classes",level:2},{value:"Operadores",id:"operadores",level:2},{value:"Expressions",id:"expressions",level:2},{value:"Expression types",id:"expression-types",level:3},{value:"Assignable vs non-assignable expressions",id:"assignable-vs-non-assignable-expressions",level:3},{value:"Ponteiro",id:"ponteiro",level:2},{value:"Coment\xe1rios",id:"coment\xe1rios",level:2},{value:"Single line comments (//)",id:"single-line-comments-",level:4},{value:"Inline or multiline comments (/**/)",id:"inline-or-multiline-comments-",level:4}],p={toc:d};function u(e){var{components:t}=e,l=r(e,["components"]);return(0,n.kt)("wrapper",o({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Usando a linguagem 4D, imprimir a mensagem tradicional ""Hello, world!" na tela pode ser feito de v\xe1rias maneiras. A maneira mais simples \xe9 provavelmente escrever a linha \xfanica abaixo em um m\xe9todo de projeto:'),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ALERT("Hello, World!")\n')),(0,n.kt)("p",null,'Esse c\xf3digo vai exibir um alerta normal de plataforma com a mensagem "hello world" contendo um bot\xe3o OK. To execute the code, you just need to click on the execution button in the Code Editor:'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(57094).Z,width:"613",height:"322"})),(0,n.kt)("p",null,"Ou poderia anexar esse c\xf3digo a um bot\xe3o em um formul\xe1rio e executar o formul\xe1rio, nesse caso, clicar no bot\xe3o exibira a caixa de di\xe1logo de alerta. Em qualquer caso, acabou de executar sua primeira linha de c\xf3digo 4D!"),(0,n.kt)("h2",o({},{id:"atribuir-valores"}),"Atribuir valores"),(0,n.kt)("p",null,"Dados podem ser colocado ou copiados de ou em vari\xe1veis, campos, elementos arrays... Colocar dados em uma vari\xe1vel \xe9 chamado atribuiindo os dados a uma vari\xe1vel e \xe9 feito com o operador de atribui\xe7\xe3o (:=). O operador de atribui\xe7\xe3o tamb\xe9m \xe9 usado para atribuir dados para elementos campos ou arrays."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$MyNumber:=3 //assigns 3 to MyNumber variable  \n[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field\narrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element MyVar:=Length("Acme") //assigns the result of the function (4) to MyVar\n$myDate:=!2018/01/21! //atribui uma data literal\n$myHour:=?08:12:55? //atribui uma hora literal\n')),(0,n.kt)("p",null,"Voc\xea DEVE diferenciar o operador atribui\xe7\xe3o := dos outros operadores. Ao inv\xe9s de combinar express\xf5es a uma nova, o operador de atribui\xe7\xe3o copia o valor da express\xe3o para a direita do operador de atribui\xe7\xe3o para a vari\xe1vel ou campo para a esquerda do operador."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Importante:")," N\xe3o confunda o operador de atribui\xe7\xe3o := com o operador de compara\xe7\xe3o de igualdade =. Um operador de atribui\xe7\xe3o diferente (e n\xe3o =) foi escolhido deliberadamente para evitar problemas e confus\xe3o que ocorrem frequentemente em outras linguagens com operadores como == ou ===. Esses erros s\xe3o geralmente dif\xedceis de reconhecer pelo compilador e geram problemas trabalhosos."),(0,n.kt)("h2",o({},{id:"vari\xe1veis"}),"Vari\xe1veis"),(0,n.kt)("p",null,"A linguagem 4D \xe9 baseada em tipos, mas com alguma flexibilidade. You create a typed variable using the ",(0,n.kt)("inlineCode",{parentName:"p"},"var")," keyword. Por exemplo, para criar uma vari\xe1vel do tipo dados, pode escrever:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var MyDate : Date \n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"var")," keyword allows declaring object variables of a defined class type, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var myPerson : cs. Person \n//variable of the Person user class\n")),(0,n.kt)("p",null,"Even if it is usually not recommended, you can declare variables simply by using them; you do not necessarily need to formally define them. Por exemplo, se quiser criar uma vari\xe1vel que contenha a data atual mais 30 dias, pode escrever:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"MyOtherDate:=Current date+30\n")),(0,n.kt)("p",null,"A linha de c\xf3digo l\xea \u201cMyOtherDate gets the current date plus 30 days.\u201d This line declares the variable, assigns it with both the (temporary) date type and a content. A variable declared by assignment is interpreted as typeless, that is, it can be assigned with other types in other lines and then changes the type dynamically. A variable typed with ",(0,n.kt)("inlineCode",{parentName:"p"},"var")," cannot change the type. In ",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/pt/docs/Concepts/interpreted-compiled"}),"compiled mode")," however, the type can never be changed, regardless of how the variable was declared."),(0,n.kt)("h2",o({},{id:"comandos"}),"Comandos"),(0,n.kt)("p",null,"Os comandos 4D s\xe3o m\xe9todos integrados para realizar uma a\xe7\xe3o. Todos os comandos 4D, como ",(0,n.kt)("inlineCode",{parentName:"p"},"CREATE RECORD"),", o ",(0,n.kt)("inlineCode",{parentName:"p"},"ALERT"),", se descrevem no manual ",(0,n.kt)("em",{parentName:"p"},"Linguagem de 4D"),", agrupados por temas. Comandos s\xe3o frequentemente usados com par\xe2metros, que s\xe3o passados em par\xeanteses () e separados por ponto e v\xedrgula (;). Exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'COPY DOCUMENT("folder1\\\\name1";"folder2\\\\" ; "new")\n')),(0,n.kt)("p",null,"Alguns comandos s\xe3o anexados \xe0 cole\xe7\xf5es ou objetos, em cujo caso s\xe3o m\xe9todos temporais que se utilizam com a nota\xe7\xe3o de pontos. Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$c:=New collection(1;2;3;4;5)\n$nc:=$c.slice(0;3) //$nc=[1,2,3]  \n\n$lastEmployee:=$employee.last()\n")),(0,n.kt)("p",null,"Pode utilizar os plug-ins ou os componentes 4D que adicionem novos comandos a seu entorno de desenvolvimento 4D."),(0,n.kt)("p",null,"H\xe1 v\xe1rios plug-ins propostos pela comunidade de usu\xe1rios 4D ou desenvolvedores de terceira parte no mercado. Por exemplo, usar ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/miyako/4d-plugin-pdf-pages"}),"4d-plugin-pdf-pages")," em macOS:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"PDF REMOVE PAGE(path;page)\n")),(0,n.kt)("p",null,"4D SVG \xe9 um exemplo de componente utilit\xe1rio que aumenta as capacidades de sua aplica\xe7\xe3o:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"//desenhar uma imagem\nsvgRef:=SVG_New\nobjectRef:=SVG_New_arc(svgRef;100;100;90;90;180)\n")),(0,n.kt)("p",null,"4D SVG \xe9 inclu\xeddo em 4D."),(0,n.kt)("h2",o({},{id:"constantes"}),"Constantes"),(0,n.kt)("p",null,"4D oferece um conjunto extensivo de constantes predefinidas, cujos valores s\xe3o acess\xedveis por nome. Isso permite escrever c\xf3digo mais leg\xedvel. Por exemplo, ",(0,n.kt)("inlineCode",{parentName:"p"},"Read Mode")," \xe9 uma constante (valor 2)."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'vRef:=Open document("PassFile";"TEXT";Read Mode) // abre documento em modo apenas leitura\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Predefined constants appear ",(0,n.kt)("u",null,"underlined")," by default in the 4D Code Editor.")),(0,n.kt)("h2",o({},{id:"m\xe9todos"}),"M\xe9todos"),(0,n.kt)("p",null,"4D oferece un grande n\xfamero de m\xe9todos (ou comandos) integrados, mas tamb\xe9m lhe permite criar seus pr\xf3prios ",(0,n.kt)("strong",{parentName:"p"},"m\xe9todos de projeto"),". Os m\xe9todos de projeto s\xe3o m\xe9todos definidos pelo usu\xe1rio que contenham comandos, operadores e outras partes da linguaje. Los m\xe9todos projeto s\xe3o m\xe9todos gen\xe9ricos, mas h\xe1 outros tipos de m\xe9todos: m\xe9todos objeto, m\xe9todos formul\xe1rio, m\xe9todos tabela (Triggers) e m\xe9todos base."),(0,n.kt)("p",null,"Um m\xe9todo projeto \xe9 composto de v\xe1rias linhas de instru\xe7\xf5es, cada uma das quais consta de uma linha no m\xe9todo. Uma linha de instru\xe7\xe3o realiza uma a\xe7\xe3o e pode ser simples ou complexa."),(0,n.kt)("p",null,"Por exemplo, a linha abaixo \xe9 uma declara\xe7\xe3o que mostar\xe1 uma caixa de di\xe1logo de confirma\xe7\xe3o:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'CONFIRM("Quer realmente fechar esta conta?"; "S\xedm"; "N\xe3o")\n')),(0,n.kt)("p",null,"Um m\xe9todo tamb\xe9m cont\xe9m testes e loops que controlam o fluxo da execu\xe7\xe3o. 4D methods support ",(0,n.kt)("inlineCode",{parentName:"p"},"If... End if")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Case of... End case")," branching structures as well as looping structures: ",(0,n.kt)("inlineCode",{parentName:"p"},"While... End while"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Repeat... Until"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"For... End for"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"For each... End for each"),":"),(0,n.kt)("p",null,"O exemplo abaixo recorre todos os caracteres do texto vtSomeText:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"For ($vCounter;1;100)\n/*\ncomments  \n /*\n other comments\n */\n*/\n...\n End for\n")),(0,n.kt)("p",null,"Um m\xe9todo projeto pode chamar a outro m\xe9todo projeto com ou sem par\xe2metros (argumentos). Os par\xe2metros se passam ao m\xe9todo entre par\xeantesis, depois do nome do m\xe9todo. Cada par\xe2metro est\xe1 separado do pr\xf3ximo por um ponto e v\xedrgula (;). The parameters are available within the called method as consecutively numbered local variables: $1, $2,\u2026, $n. A method can return a single value in the $0 parameter. Um m\xe9todo pode devolver um \xfanico valor no par\xe2metro $0. Quando chamar um m\xe9todo, apenas digite seu nome:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$f:=New object\n$f.message:=New formula(ALERT("Hello world!"))\n$f.message() //displays "Hello world!"\n')),(0,n.kt)("h2",o({},{id:"tipos-de-dados"}),"Tipos de dados"),(0,n.kt)("p",null,"Na linguagem, os diferentes tipos de dados que podem ser manejados s\xe3o denominados tipos de dados. Existem tipos de dados b\xe1sicos (string, num\xe9rico, data, hora, booleano, imagem, ponteiros, arrays), e tamb\xe9m tipos de dados compostos (BLOBs, objetos, cole\xe7\xf5es)."),(0,n.kt)("p",null,"Lembre que os dados de tipo string e num\xe9rico podem ser associados a mais de um tipo de campo. Quando s\xe3o introduzidos dados em um campo, a linguagem converte automaticamente os dados no tipo correto para o campo. Por exemplo, se um campo inteiro for usado, seus dados s\xe3o tratados automaticamente como num\xe9ricos. Em outras palavras n\xe3o precisa se preocupar sobre misturar tipos de campos similares quando usando a linguagem; vai ser gerenciada por voc\xea."),(0,n.kt)("p",null,'Entretanto, quando usar a linguagem \xe9 importante que n\xe3o misture diferentes tipos de dados. Da mesma forma que n\xe3o tem sentido armazenar "ABC" em um campo de data, tampouco tem sentido por "ABC" em uma vari\xe1vel utilizada para datas. Na maioria dos casos, 4D \xe9 muito tolerante e tentar\xe1 dar sentido ao que est\xe1 fazendo. For example, if you add a number to a date, 4D will assume that you want to add that number of days to the date, but if you try to add a string to a date, 4D will tell you that the operation cannot work.'),(0,n.kt)("p",null,"There are cases in which you need to store data as one type and use it as another type. The language contains a full complement of commands that let you convert from one data type to another. For example, you may need to create a part number that starts with a number and ends with characters such as \u201cabc\u201d. In this case, you might write:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'[Products]Part Number:=String(Number)+"abc"\n')),(0,n.kt)("p",null,"If ",(0,n.kt)("em",{parentName:"p"},"Number")," is 17, then ",(0,n.kt)("em",{parentName:"p"},"[Products]","Part Number")," will get the string \u201c17abc\u201d."),(0,n.kt)("p",null,"The data types are fully defined in the section ",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/pt/docs/Concepts/data-types"}),"Data Types"),"."),(0,n.kt)("h2",o({},{id:"objects-and-collections"}),"Objects and collections"),(0,n.kt)("p",null,"You can handle 4D language objects and collections using the object notation to get or to set their values. Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'employee.name:="Smith"\n')),(0,n.kt)("p",null,"You can also use a string within square brackets, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$vName:=employee["name"]\n')),(0,n.kt)("p",null,"Uma vez que um valor de propriedade de objeto pode ser um objeto ou uma cole\xe7\xe3o, a nota\xe7\xe3o de objeto aceita uma sequ\xeancia de s\xedmbolos para acessar subpropriedades, por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$vAge:=employee.children[2].age\n")),(0,n.kt)("p",null,"Note that if the object property value is an object that encapsulates a method (a formula), you need to add parenthesis () to the property name to execute the method:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'$o:=cs.myClass.new()\n$o.who:="World"\n$message:=$o.myClass.hello()  \n//$message:\n"Hello World"\n')),(0,n.kt)("p",null,"To access a collection element, you have to pass the element number embedded in square brackets:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'C_COLLECTION(myColl)\nmyColl:=New collection("A";"B";1;2;Current time)\nmyColl[3]  //access to 4th element of the collection\n')),(0,n.kt)("h2",o({},{id:"classes"}),"Classes"),(0,n.kt)("p",null,"The 4D language supports object classes. Add a ",(0,n.kt)("inlineCode",{parentName:"p"},"myClass.4dm"),' file in the Project/Sources/Classes folder of a project to create a class named "myClass".'),(0,n.kt)("p",null,"To instantiate an object of the class in a method, call the user class from the ",(0,n.kt)("em",{parentName:"p"},"class store")," (",(0,n.kt)("inlineCode",{parentName:"p"},"cs"),") and use the ",(0,n.kt)("inlineCode",{parentName:"p"},"new()")," member function. You can pass parameters."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"// in a 4D method\n$o:=cs.myClass.new() \n")),(0,n.kt)("p",null,"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"myClass")," class method, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Function <methodName>"),"  statement to define the ",(0,n.kt)("em",{parentName:"p"},"methodName")," class member method. A class member method can receive and return parameters like any method, and use ",(0,n.kt)("inlineCode",{parentName:"p"},"This")," as the object instance."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'//in the myClass.4dm file Function hello\n  C_TEXT($0)\n  $0:="Hello "+This.who\n')),(0,n.kt)("p",null,"To execute a class member method, just use the ",(0,n.kt)("inlineCode",{parentName:"p"},"()")," operator on the member method of the object instance."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$f:=New object\n$f.message:=New formula(ALERT("Hello world!"))\n$f.message() //displays "Hello world!"\n')),(0,n.kt)("p",null,"Optionally, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Class constructor")," keyword to declare properties of the object."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'//in the Rectangle.4dm file Class constructor C_LONGINT($1;$2)\nThis.height:=$1 This.width:=$2 This.name:="Rectangle"\n')),(0,n.kt)("p",null,"A class can extend another class by using ",(0,n.kt)("inlineCode",{parentName:"p"},"Class extends <ClassName>"),". Superclasses can be called using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Super")," command. Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"//in the Square.4dm file Class extends rectangle Class constructor C_LONGINT($1)\n\n  // It calls the parent class's constructor with lengths   \n  // provided for the Rectangle's width and height Super($1;$1) This.name:=\"Square\"\n")),(0,n.kt)("h2",o({},{id:"operadores"}),"Operadores"),(0,n.kt)("p",null,"When you use the language, it is rare that you will simply want a piece of data. It is more likely that you will want to do something to or with that data. You perform such calculations with operators. Operators, in general, take two pieces of data and perform an operation on them that results in a new piece of data. You are already familiar with many operators. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Operator"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Exemplo"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"+"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Adi\xe7\xe3o"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"1 + 2 results in 3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u2013"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Subtra\xe7\xe3o"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"3 \u2013 2 results in 1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"*"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Multiplica\xe7\xe3o"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"2 * 3 results in 6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"/"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Divis\xe3o"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"6 / 2 results in 3")))),(0,n.kt)("p",null,"Numeric operators are just one type of operator available to you. 4D supports many different types of data, such as numbers, text, dates, and pictures, so there are operators that perform operations on these different data types."),(0,n.kt)("p",null,"The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Tipo de dados"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Exemplo"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Adi\xe7\xe3o"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"1 + 2 adds the numbers and results in 3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Concatenation"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u201cHello \u201d + \u201cthere\u201d concatenates (joins together) the strings and results in \u201cHello there\u201d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Date and Number"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Date addition"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"!1989-01-01! + 20 adds 20 days to the date January 1, 1989, and results in the date January 21, 1989")))),(0,n.kt)("h2",o({},{id:"expressions"}),"Expressions"),(0,n.kt)("p",null,"Simply put, expressions return a value. In fact, when using the 4D language, you use expressions all the time and tend to think of them only in terms of the value they represent. Expressions are also sometimes referred to as formulas."),(0,n.kt)("p",null,"Expressions are made up of almost all the other parts of the language: commands, operators, variables, fields, object properties, and collection elements. You use expressions to build statements (lines of code), which in turn are used to build methods. The language uses expressions wherever it needs a piece of data."),(0,n.kt)("p",null,"Expressions rarely \u201cstand alone.\u201d There are several places in 4D where an expression can be used by itself. It includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Formula editor (apply formula, query with formula, order by formula)"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"EXECUTE FORMULA")," command"),(0,n.kt)("li",{parentName:"ul"},"The Property list, where an expression can be used as a data source for most of widgets"),(0,n.kt)("li",{parentName:"ul"},"Debugger where the value of expressions can be checked"),(0,n.kt)("li",{parentName:"ul"},"Quick Report editor as a formula for a column")),(0,n.kt)("h3",o({},{id:"expression-types"}),"Expression types"),(0,n.kt)("p",null,"You refer to an expression by the data type it returns. There are several expression types. The following table gives examples of each type of expression."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Expression"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u201cHello\u201d"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The word Hello is a string constant, indicated by the double quotation marks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u201cHello \u201d + \u201cthere\u201d"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Two strings, \u201cHello \u201d and \u201cthere\u201d, are added together (concatenated) with the string concatenation operator (+). The string \u201cHello there\u201d is returned.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u201cMr. \u201d + ","[People]","Name"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Two strings are concatenated: the string \u201cMr. \u201d and the current value of the Name field in the People table. If the field contains \u201cSmith\u201d, the expression returns \u201cMr. Smith\u201d.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),'Uppercase("smith")'),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This expression uses ",(0,n.kt)("inlineCode",{parentName:"td"},"Uppercase"),", a command from the language, to convert the string \u201csmith\u201d to uppercase. It returns \u201cSMITH\u201d.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This is a number constant, 4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"4 * 2"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Two numbers, 4 and 2, are multiplied using the multiplication operator (*). The result is the number 8.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"myButton"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This is a variable associated to a button. It returns the current value of the button: 1 if it was clicked, 0 if not.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"!1997-01-25!"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This is a date constant for the date 1/25/97 (January 25, 1997).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Current date+ 30"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This is a date expression that uses the ",(0,n.kt)("inlineCode",{parentName:"td"},"Current date")," command to get today\u2019s date. It adds 30 days to today\u2019s date and returns the new date.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"?8:05:30?"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This is a time constant that represents 8 hours, 5 minutes, and 30 seconds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"?2:03:04? + ?1:02:03?"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This expression adds two times together and returns the time 3:05:07.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This command returns the Boolean value TRUE.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"10 # 20"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This is a logical comparison between two numbers. The number sign (#) means \u201cis not equal to\u201d. Since 10 \u201cis not equal to\u201d 20, the expression returns TRUE.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u201cABC\u201d = \u201cXYZ\u201d"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This is a logical comparison between two strings. They are not equal, so the expression returns FALSE.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"My Picture + 50"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Imagem"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This expression takes the picture in My Picture, moves it 50 pixels to the right, and returns the resulting picture.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"->","[People]","Name"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Ponteiro"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This expression returns a pointer to the field called ","[People]","Name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Table(1)"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Ponteiro"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This is a command that returns a pointer to the first table.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"JSON Parse (MyString)"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Objeto"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This is a command that returns MyString as an object (if proper format)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"JSON Parse (MyJSONArray)"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"This is a command that returns MyJSONArray as a collection (if proper format)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Form.pageNumber"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Object property"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"An object property is an expression that can be of any supported type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Col","[5]"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Collection element"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"A collection element is an expression that can be of any supported type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"$entitySel","[0]"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Entity"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"A element of an ORDA entity selection is an expression of the entity type. This kind of expression is ",(0,n.kt)("strong",{parentName:"td"},"non-assignable"))))),(0,n.kt)("h3",o({},{id:"assignable-vs-non-assignable-expressions"}),"Assignable vs non-assignable expressions"),(0,n.kt)("p",null,'An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like ',(0,n.kt)("inlineCode",{parentName:"p"},"$myButton"),". It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are ",(0,n.kt)("strong",{parentName:"p"},"non-assignable"),", which means that you cannot assign a value to them. In 4D, expressions can be ",(0,n.kt)("strong",{parentName:"p"},"assignable"),". An expression is assignable when it can be used on the left side of an assignation. Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'//$myVar variable is assignable, you can write:  \n$myVar:="Hello" //assign "Hello" to myVar\n//Form.pageNumber is assignable, you can write: Form.pageNumber:=10 //assign 10 to Form.pageNumber\n//Form.pageTotal-Form.pageNumber is not assignable: Form.pageTotal- Form.pageNumber:=10 //error, non-assignable\n')),(0,n.kt)("p",null,"In general, expressions that use an operator are non-assignable. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},'[Person]FirstName+" "+[Person]LastName')," is not assignable."),(0,n.kt)("h2",o({},{id:"ponteiro"}),"Ponteiro"),(0,n.kt)("p",null,"The 4D language provides an advanced implementation of pointers, that allow writing powerful and modular code. You can use pointers to reference tables, fields, variables, arrays, and array elements."),(0,n.kt)("p",null,'A pointer to an element is created by adding a "->" symbol before the element name, and can be dereferenced by adding the "->" symbol after the pointer name.'),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'MyVar:="Hello" MyPointer:=->MyVar ALERT(MyPointer->)\n')),(0,n.kt)("h2",o({},{id:"coment\xe1rios"}),"Coment\xe1rios"),(0,n.kt)("p",null,"Comments are inactive lines of code. These lines are not interpreted by the 4D language and are not executed when the code is called."),(0,n.kt)("p",null,"There are two ways to create comments:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"//")," for single line comments"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/*...*/")," for inline or multiline commnents.")),(0,n.kt)("p",null,"Both styles of comments can be used simultaneously."),(0,n.kt)("h4",o({},{id:"single-line-comments-"}),"Single line comments (//)"),(0,n.kt)("p",null,"Insert ",(0,n.kt)("inlineCode",{parentName:"p"},"//")," at the beginning of a line or after a statement to add a single line comment. Exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"//This is a comment For($vCounter;1;100) //Starting loop\n  //comment\n  //comment\n  //comment\n End for\n")),(0,n.kt)("h4",o({},{id:"inline-or-multiline-comments-"}),"Inline or multiline comments (/**/)"),(0,n.kt)("p",null,"Surround contents with ",(0,n.kt)("inlineCode",{parentName:"p"},"/*")," ... ",(0,n.kt)("inlineCode",{parentName:"p"},"*/")," characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with ",(0,n.kt)("inlineCode",{parentName:"p"},"/*")," and end with ",(0,n.kt)("inlineCode",{parentName:"p"},"*/"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Inline comments")," can be inserted anywhere in the code. Exemplo:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"For /* inline comment */ ($vCounter;1;100)\n ...\nEnd for\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Multiline comment blocks")," allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the 4D code editor supports block collapsing). Exemplo:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"For ($vCounter;1;100)\n/*\ncomments  \n /* \n other comments\n */\n*/\n...\nEnd for\n")))}u.isMDXComponent=!0},57094:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/helloworld-3e6e70b5b735baa9c97019730d06bfdd.png"}}]);