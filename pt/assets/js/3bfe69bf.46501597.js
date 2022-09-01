"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80292],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>c});var t=o(67294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=t.createContext({}),s=function(e){var a=t.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},d=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(o),c=n,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return o?t.createElement(k,l(l({ref:a},d),{},{components:o})):t.createElement(k,l({ref:a},d))}));function c(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},36749:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});o(67294);var t=o(3905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},n.apply(this,arguments)}function r(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const l={id:"looping",title:"Estruturas de loop"},i=void 0,p={unversionedId:"Concepts/looping",id:"version-19/Concepts/looping",title:"Estruturas de loop",description:"Estruturas de loop repetem uma sequ\xeancia de declara\xe7\xf5es at\xe9 que uma condi\xe7\xe3o seja atingida ou at\xe9 que alcance um certo n\xfamero de vezes.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/cf_looping.md",sourceDirName:"Concepts",slug:"/Concepts/looping",permalink:"/docs/pt/19/Concepts/looping",draft:!1,tags:[],version:"19",frontMatter:{id:"looping",title:"Estruturas de loop"},sidebar:"docs",previous:{title:"Estruturas condicionais",permalink:"/docs/pt/19/Concepts/branching"},next:{title:"Transformation tags",permalink:"/docs/pt/19/Tags/tags"}},s={},d=[{value:"While... End while",id:"while-end-while",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"Repeat... Until",id:"repeat-until",level:2},{value:"Exemplo",id:"exemplo-1",level:3},{value:"For... End for",id:"for-end-for",level:2},{value:"Exemplos b\xe1sicos",id:"exemplos-b\xe1sicos",level:3},{value:"Diminuir a vari\xe1vel contador",id:"diminuir-a-vari\xe1vel-contador",level:3},{value:"Incrementar a vari\xe1vel do contador em mais de um",id:"incrementar-a-vari\xe1vel-do-contador-em-mais-de-um",level:3},{value:"Compara\xe7\xe3o de estruturas de loop",id:"compara\xe7\xe3o-de-estruturas-de-loop",level:3},{value:"Optimizing the execution of the For... End for loops",id:"optimizing-the-execution-of-the-for-end-for-loops",level:3},{value:"Nested For... End for looping structures",id:"nested-for-end-for-looping-structures",level:3},{value:"For each... End for each",id:"for-each-end-for-each",level:2},{value:"Loop atrav\xe9s da cole\xe7\xe3o",id:"loop-atrav\xe9s-da-cole\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo-2",level:4},{value:"Loop nas sele\xe7\xf5es de entidades",id:"loop-nas-sele\xe7\xf5es-de-entidades",level:3},{value:"Exemplo",id:"exemplo-3",level:4},{value:"Loops nas propriedades de objetos",id:"loops-nas-propriedades-de-objetos",level:3},{value:"Exemplo",id:"exemplo-4",level:4},{value:"Par\xe2metros begin / end",id:"par\xe2metros-begin--end",level:3},{value:"Exemplo",id:"exemplo-5",level:4},{value:"Condi\xe7\xf5es Until e While",id:"condi\xe7\xf5es-until-e-while",level:3},{value:"Exemplo",id:"exemplo-6",level:4}],m={toc:d};function u(e){var{components:a}=e,o=r(e,["components"]);return(0,t.kt)("wrapper",n({},m,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Estruturas de loop repetem uma sequ\xeancia de declara\xe7\xf5es at\xe9 que uma condi\xe7\xe3o seja atingida ou at\xe9 que alcance um certo n\xfamero de vezes."),(0,t.kt)("h2",n({},{id:"while-end-while"}),"While... End while"),(0,t.kt)("p",null,"The formal syntax of the ",(0,t.kt)("inlineCode",{parentName:"p"},"While... End while")," control flow structure is:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," While(Boolean_Expression)\n    statement(s)\n End while\n")),(0,t.kt)("p",null,"A ",(0,t.kt)("inlineCode",{parentName:"p"},"While... End while")," loop executes the statements inside the loop as long as the Boolean expression is TRUE. Comprova a express\xe3o booleana ao in\xedcio do loop e n\xe3o entra no loop se a express\xe3o for FALSE."),(0,t.kt)("p",null,"It is common to initialize the value tested in the Boolean expression immediately before entering the ",(0,t.kt)("inlineCode",{parentName:"p"},"While... End while")," loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and ",(0,t.kt)("inlineCode",{parentName:"p"},"While... End while")," executes the loop."),(0,t.kt)("p",null,"O valor da express\xe3o booleana deve poder ser modificado por um elemento dentro do loop, do contr\xe1rio ser\xe1 executado indefinidamente. O pr\xf3ximo loop continua para sempre porque ",(0,t.kt)("em",{parentName:"p"},"NeverStop")," sempre ser\xe1 TRUE:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," NeverStop:=True\n While(NeverStop)\n End while\n")),(0,t.kt)("p",null,"Se voc\xea se encontrar em uma situa\xe7\xe3o desse tipo, na qual um m\xe9todo fica executando de forma descontrolada, pode usar as fun\xe7\xf5es de rastreamento para parar o loop e rastrear o problema. Para saber mais sobre o rastreio de um m\xe9todo veja a p\xe1gina ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/Concepts/error-handling"}),"Error handling"),"."),(0,t.kt)("h3",n({},{id:"exemplo"}),"Exemplo"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' CONFIRM("Add a new record?") //o usu\xe1rio quer adicionar um registro? CONFIRM("Add a new record?") //The user wants to add a record?\n While(OK=1) //Loop enquanto o usu\xe1rio quiser\n    ADD RECORD([aTable]) //Adiciona um novo registro\n End while //O loop sempre termina com End while\n')),(0,t.kt)("p",null,"Nesse exemplo, o valor da vari\xe1vel sistema ",(0,t.kt)("inlineCode",{parentName:"p"},"OK")," \xe9 estabelecida pelo comando ",(0,t.kt)("inlineCode",{parentName:"p"},"CONFIRM")," antes de que inicia o loop. Se o usu\xe1rio clicar no bot\xe3o ",(0,t.kt)("strong",{parentName:"p"},"OK")," da caixa de di\xe1logo de confirma\xe7\xe3o, a vari\xe1vel do sistema ",(0,t.kt)("inlineCode",{parentName:"p"},"OK")," toma o valor 1 e se inicia o loop. Sen\xe3o, a vari\xe1vel de sistema ",(0,t.kt)("inlineCode",{parentName:"p"},"OK")," toma o valor 0 e se omite o loop. Quando iniciar o loop, o comando ",(0,t.kt)("inlineCode",{parentName:"p"},"ADD RECORD")," permite continuar a execu\xe7\xe3o do loop porque se define a vari\xe1vel sistema ",(0,t.kt)("inlineCode",{parentName:"p"},"OK")," em 1 quando o usu\xe1rio salvar o registro. Quando o usu\xe1rio cancelar (n\xe3o salvar) o \xfaltimo registro, a vari\xe1vel do sistema ",(0,t.kt)("inlineCode",{parentName:"p"},"OK")," \xe9 estabelecida como 0 e o loop para."),(0,t.kt)("h2",n({},{id:"repeat-until"}),"Repeat... Until"),(0,t.kt)("p",null,"The formal syntax of the ",(0,t.kt)("inlineCode",{parentName:"p"},"Repeat... Until")," control flow structure is:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," Repeat\n    statement(s)\n Until(Boolean_Expression)\n")),(0,t.kt)("p",null,"The other difference with a ",(0,t.kt)("inlineCode",{parentName:"p"},"Repeat... Until")," loop is that the loop continues until the Boolean expression is TRUE."),(0,t.kt)("p",null,"Um loop ",(0,t.kt)("inlineCode",{parentName:"p"},"Repeat... Until")," \xe9 similar a um loop ",(0,t.kt)("a",n({parentName:"p"},{href:"flow-control#whileend-while"}),"While... End while"),", exceto que comprova a express\xe3o booleana depois do loop  e n\xe3o antes."),(0,t.kt)("h3",n({},{id:"exemplo-1"}),"Exemplo"),(0,t.kt)("p",null,"Compare the following example with the example for the ",(0,t.kt)("inlineCode",{parentName:"p"},"While... End while")," loop. Lembre que a express\xe3o booleana n\xe3o precisa ser iniciada - n\xe3o h\xe1 um comando ",(0,t.kt)("inlineCode",{parentName:"p"},"CONFIRM")," para inicializar a vari\xe1vel ",(0,t.kt)("inlineCode",{parentName:"p"},"OK"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," Repeat\n    ADD RECORD([aTable])\n Until(OK=0)\n")),(0,t.kt)("h2",n({},{id:"for-end-for"}),"For... End for"),(0,t.kt)("p",null,"The formal syntax of the ",(0,t.kt)("inlineCode",{parentName:"p"},"For... End for")," control flow structure is:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})\n    statement(s)\n End for\n")),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},"For... End for")," loop is a loop controlled by a counter variable:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"The counter variable ",(0,t.kt)("em",{parentName:"li"},"Counter_Variable")," is a numeric variable (Real or Long Integer) that the ",(0,t.kt)("inlineCode",{parentName:"li"},"For... End for")," loop initializes to the value specified by ",(0,t.kt)("em",{parentName:"li"},"Start_Expression"),"."),(0,t.kt)("li",{parentName:"ul"},"Cada vez que se executa o loop, a vari\xe1vel do contador se incrementa no valor especificado no valor opcional ",(0,t.kt)("em",{parentName:"li"},"Increment_Expression"),". Se n\xe3o especificar ",(0,t.kt)("em",{parentName:"li"},"Increment_Expression"),", a vari\xe1vel contadora \xe9 incrementada por um (1), que \xe9 o padr\xe3o."),(0,t.kt)("li",{parentName:"ul"},"Quando a vari\xe1vel contador passar o valor ",(0,t.kt)("em",{parentName:"li"},"End_Expression")," da\xed o loop para.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Importante:")," as express\xf5es num\xe9ricas ",(0,t.kt)("em",{parentName:"p"},"Start_Expression"),", ",(0,t.kt)("em",{parentName:"p"},"End_Expression")," e ",(0,t.kt)("em",{parentName:"p"},"Increment_Expression")," s\xe3o avaliadas apenas uma vez no come\xe7o do loop. Se essas express\xf5es forem vari\xe1veis, mudar uma deles dentro do loop n\xe3o vai afetar o loop."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Dicas:")," Entretanto, para fins especiais, pode mudar o valor da vari\xe1vel ",(0,t.kt)("em",{parentName:"p"},"Counter_Variable")," dentro do loop; isso afetar\xe1 o loop."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Geralmente ",(0,t.kt)("em",{parentName:"li"},"Start_Expression")," pe menor que ",(0,t.kt)("em",{parentName:"li"},"End_Expression"),"."),(0,t.kt)("li",{parentName:"ul"},"Se ",(0,t.kt)("em",{parentName:"li"},"Start_Expression")," e ",(0,t.kt)("em",{parentName:"li"},"End_Expression")," forem iguais, o loop se executar\xe1 s\xf3 uma vez."),(0,t.kt)("li",{parentName:"ul"},"Se ",(0,t.kt)("em",{parentName:"li"},"Start_Expression")," for maior que ",(0,t.kt)("em",{parentName:"li"},"End_Expression"),", o loop n\xe3o vai executar a n\xe3o ser que especifique uma ",(0,t.kt)("em",{parentName:"li"},"Increment_Expression")," negativa. Ver os exemplos.")),(0,t.kt)("h3",n({},{id:"exemplos-b\xe1sicos"}),"Exemplos b\xe1sicos"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"O seguinte exemplo executa 100 itera\xe7\xf5es:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For(vCounter;1;100)\n  //Faz algo\n End for\n")),(0,t.kt)("ol",n({},{start:2}),(0,t.kt)("li",{parentName:"ol"},"O exemplo abaixo percorre todos os elementos no array anArray:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For($vlElem;1;Size of array(anArray))\n  //Fazer algo com o elemento\n    anArray{$vlElem}:=...\n End for\n")),(0,t.kt)("ol",n({},{start:3}),(0,t.kt)("li",{parentName:"ol"},"O exemplo abaixo recorre todos os caracteres do texto vtSomeText:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For($vlChar;1;Length(vtSomeText))\n  //Faz algo com o caractere se for uma TAB\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n")),(0,t.kt)("ol",n({},{start:4}),(0,t.kt)("li",{parentName:"ol"},"O exemplo abaixo recorre os registros selecionados para a tabela ","[aTable]",":")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," FIRST RECORD([aTable])\n For($vlRecord;1;Records in selection([aTable]))\n  //Faz algo com o registro\n    SEND RECORD([aTable])\n  //...\n  //Vai para o pr\xf3ximo registro\n    NEXT RECORD([aTable])\n End for\n")),(0,t.kt)("p",null,"Most of the ",(0,t.kt)("inlineCode",{parentName:"p"},"For... End for")," loops you will write in your projects will look like the ones listed in these examples."),(0,t.kt)("h3",n({},{id:"diminuir-a-vari\xe1vel-contador"}),"Diminuir a vari\xe1vel contador"),(0,t.kt)("p",null,"Em alguns casos, pode querer ter um loop cuja vari\xe1vel de contador seja decrescente ao inv\xe9s de crescente. Para fazer isso, deve especificar ",(0,t.kt)("em",{parentName:"p"},"Start_Expression")," maior que ",(0,t.kt)("em",{parentName:"p"},"End_Expression")," e ",(0,t.kt)("em",{parentName:"p"},"Increment_Expression")," deve ser negativa. Os exemplos abaixo fazem a mesma coisa que nos exemplos acima, mas na ordem inversa:"),(0,t.kt)("ol",n({},{start:5}),(0,t.kt)("li",{parentName:"ol"},"O seguinte exemplo executa 100 itera\xe7\xf5es:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For(vCounter;100;1;-1)\n  //Faz algo\n End for\n")),(0,t.kt)("ol",n({},{start:6}),(0,t.kt)("li",{parentName:"ol"},"O exemplo abaixo percorre todos os elementos no array anArray:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For($vlElem;Size of array(anArray);1;-1)\n  //Faz algo com o elemento\n    anArray{$vlElem}:=...\n End for\n")),(0,t.kt)("ol",n({},{start:7}),(0,t.kt)("li",{parentName:"ol"},"O exemplo abaixo recorre todos os caracteres do texto vtSomeText:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For($vlChar;Length(vtSomeText);1;-1)\n  //Faz algo com o caractere se for uma TAB\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n")),(0,t.kt)("ol",n({},{start:8}),(0,t.kt)("li",{parentName:"ol"},"O exemplo abaixo recorre os registros selecionados para a tabela ","[aTable]",":")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," LAST RECORD([aTable])\n For($vlRecord;Records in selection([aTable]);1;-1)\n  //Faz algo com o registro\n    SEND RECORD([aTable])\n  //...\n  //Ir ao registro anterior\n    PREVIOUS RECORD([aTable])\n End for\n")),(0,t.kt)("h3",n({},{id:"incrementar-a-vari\xe1vel-do-contador-em-mais-de-um"}),"Incrementar a vari\xe1vel do contador em mais de um"),(0,t.kt)("p",null,"Se precisar, pode usar uma ",(0,t.kt)("em",{parentName:"p"},"Increment_Expression")," (positiva ou negativa) cujo valor absoluto seja maior que um."),(0,t.kt)("ol",n({},{start:9}),(0,t.kt)("li",{parentName:"ol"},"O loop a seguir aborda s\xf3 os elementos pares do array anArray:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For($vlElem;2;Size of array(anArray);2)\n  //Faz algo com o elemento #2,#4...#2n\n    anArray{$vlElem}:=...\n End for\n")),(0,t.kt)("h3",n({},{id:"compara\xe7\xe3o-de-estruturas-de-loop"}),"Compara\xe7\xe3o de estruturas de loop"),(0,t.kt)("p",null,"Let's go back to the first ",(0,t.kt)("inlineCode",{parentName:"p"},"For... End for")," example. O seguinte exemplo executa 100 itera\xe7\xf5es:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For(vCounter;1;100)\n  //Faz algo\n End for\n")),(0,t.kt)("p",null,"Here is the equivalent ",(0,t.kt)("inlineCode",{parentName:"p"},"Repeat... Until")," loop:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," $i:=1 //Initializa o contador\n While($i<=100) //Loop 100 vezes\n  //Faz algo\n    $i:=$i+1 //Precisa incrementar o contador\n End while\n")),(0,t.kt)("p",null,"Here is the equivalent ",(0,t.kt)("inlineCode",{parentName:"p"},"While... End while")," loop:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," $i:=1 //Initializa o contador\n Repeat\n  //Faz algo\n    $i:=$i+1 //Precisa incrementar o contador\n Until($i=100) //Loop 100 vezes\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Tip:")," The ",(0,t.kt)("inlineCode",{parentName:"p"},"For... End for")," loop is usually faster than the ",(0,t.kt)("inlineCode",{parentName:"p"},"While... End while")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"Repeat... Until")," loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the ",(0,t.kt)("inlineCode",{parentName:"p"},"For... End for")," loop whenever possible."),(0,t.kt)("h3",n({},{id:"optimizing-the-execution-of-the-for-end-for-loops"}),"Optimizing the execution of the For... End for loops"),(0,t.kt)("p",null,"Pode utilizar vari\xe1veis reais e inteiras, assim como contadores interprocesso, de processo e de vari\xe1veis locais. Para loops repetitivos longos, especialmente em modo compilado, use vari\xe1veis locais de tipo Inteiro longo."),(0,t.kt)("ol",n({},{start:10}),(0,t.kt)("li",{parentName:"ol"},"Aqui um exemplo simples:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," C_LONGINT($vlCounter) //usa vari\xe1veis locais Long Integer\n For($vlCounter;1;10000)\n  //Faz algo\n End for\n")),(0,t.kt)("h3",n({},{id:"nested-for-end-for-looping-structures"}),"Nested For... End for looping structures"),(0,t.kt)("p",null,"Pode aninhar tantas estruturas de controle (dentro do razo\xe1vel) como precisar. This includes nesting ",(0,t.kt)("inlineCode",{parentName:"p"},"For... End for")," loops. Para evitar erros, tenha certeza de usar vari\xe1veis contador diferentes para cada estrutura de looping."),(0,t.kt)("p",null,"Aqui s\xe3o dois exemplos:"),(0,t.kt)("ol",n({},{start:11}),(0,t.kt)("li",{parentName:"ol"},"O exemplo abaixo percorre todos os elementos em um array de duas dimens\xf5es:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For($vlElem;1;Size of array(anArray))\n  //...\n  //Faz algo com a linha\n  //...\n    For($vlSubElem;1;Size of array(anArray{$vlElem}))\n  //Faz algo com o elemento\n       anArray{$vlElem}{$vlSubElem}:=...\n    End for\n End for\n")),(0,t.kt)("ol",n({},{start:12}),(0,t.kt)("li",{parentName:"ol"},"O seguinte exemplo constr\xf3i um array de ponteiros a todos os campos de data presentes no banco:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," ARRAY POINTER($apDateFields;0)\n $vlElem:=0\n For($vlTable;1;Get last table number)\n    If(Is table number valid($vlTable))\n       For($vlField;1;Get last field number($vlTable))\n          If(Is field number valid($vlTable;$vlField))\n             $vpField:=Field($vlTable;$vlField)\n             If(Type($vpField->)=Is date)\n                $vlElem:=$vlElem+1\n                INSERT IN ARRAY($apDateFields;$vlElem)\n                $apDateFields{$vlElem}:=$vpField\n             End if\n          End if\n       End for\n    End if\n End for\n")),(0,t.kt)("h2",n({},{id:"for-each-end-for-each"}),"For each... End for each"),(0,t.kt)("p",null,"A sintaxe da estrutura condicional ",(0,t.kt)("inlineCode",{parentName:"p"},"For each... End for each")," \xe9:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For each(Element_courant;Expression{;debut{;fin}}){Until|While}(Expression_bool\xe9enne)}\n    instruction(s)\n End for each\n")),(0,t.kt)("p",null,"A estrutura ",(0,t.kt)("inlineCode",{parentName:"p"},"For each... End for each")," faz uma itera\xe7\xe3o sobre um ",(0,t.kt)("em",{parentName:"p"},"Elemento_atual")," especificado sobre todos os valores de ",(0,t.kt)("em",{parentName:"p"},"Express\xe3o"),". O tipo ",(0,t.kt)("em",{parentName:"p"},"elemento_atual")," depende do tipo ",(0,t.kt)("em",{parentName:"p"},"Expression"),". O loop ",(0,t.kt)("inlineCode",{parentName:"p"},"For each... End for each")," pode iterar atrav\xe9s de tr\xeas tipos de ",(0,t.kt)("em",{parentName:"p"},"Express\xe3o"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"collections: loop por cada elemento da cole\xe7\xe3o,"),(0,t.kt)("li",{parentName:"ul"},"sele\xe7\xf5es de entidades: loop em cada entidade,"),(0,t.kt)("li",{parentName:"ul"},"objetos: loop em cada propriedade do objeto.")),(0,t.kt)("p",null,"The following table compares the three types of ",(0,t.kt)("inlineCode",{parentName:"p"},"For each... End for each"),":"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",n({parentName:"tr"},{align:null})),(0,t.kt)("th",n({parentName:"tr"},{align:null}),"Loop atrav\xe9s da cole\xe7\xe3o"),(0,t.kt)("th",n({parentName:"tr"},{align:null}),"Loop nas sele\xe7\xf5es de entidades"),(0,t.kt)("th",n({parentName:"tr"},{align:null}),"Loop nos objetos"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Tipo Current_Item"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Vari\xe1vel do mesmo tipo que os elementos da cole\xe7\xe3o"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Entity"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Vari\xe1vel texto")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Tipos de express\xf5es"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Cole\xe7\xe3o (com elementos do mesmo tipo)"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Sele\xe7\xe3o de entidades"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Objeto")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de loops (por padr\xe3o)"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de elementos da cole\xe7\xe3o"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de entidades na sele\xe7\xe3o"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de propriedades de objeto")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Compatibilidade de par\xe2metros begin / end"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Sim"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Sim"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"No")))),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"O n\xfamero de loops \xe9 avaliado no in\xedcio e n\xe3o muda durante o processo. Adicionar ou remover itens durante o loop n\xe3o \xe9 recomendado porque resulta em itera\xe7\xf5es faltantes ou redundantes."),(0,t.kt)("li",{parentName:"ul"},"Por padr\xe3o, as  ",(0,t.kt)("em",{parentName:"li"},"instru\xe7\xf5es")," anexas s\xe3o executadas para cada valor de ",(0,t.kt)("em",{parentName:"li"},"Express\xe3o"),". Entretanto, \xe9 poss\xedvel sair do loop comprovando uma condi\xe7\xe3o ao in\xedcio do loop (",(0,t.kt)("inlineCode",{parentName:"li"},"While"),") ou ao final do loop (",(0,t.kt)("inlineCode",{parentName:"li"},"Until"),")."),(0,t.kt)("li",{parentName:"ul"},"Os par\xe2metros opcionais ",(0,t.kt)("em",{parentName:"li"},"begin")," e ",(0,t.kt)("em",{parentName:"li"},"end")," podem ser usados com cole\xe7~eos e sele\xe7\xf5es de entidades para definir os limites do loop."),(0,t.kt)("li",{parentName:"ul"},"The ",(0,t.kt)("inlineCode",{parentName:"li"},"For each... End for each")," loop can be used on a ",(0,t.kt)("strong",{parentName:"li"},"shared collection")," or a ",(0,t.kt)("strong",{parentName:"li"},"shared object"),". If your code needs to modify one or more element(s) of the collection or object properties, you need to use the ",(0,t.kt)("inlineCode",{parentName:"li"},"Use... End use")," keywords. Depending on your needs, you can call the ",(0,t.kt)("inlineCode",{parentName:"li"},"Use... End use")," keywords:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"antes de entrar no loop, se os elementos devem ser modificados juntos por raz\xf5es de integridade, ou"),(0,t.kt)("li",{parentName:"ul"},"dentro do loop quando s\xf3 tiver que modificar alguns elementos/propriedades e n\xe3o \xe9 necess\xe1rio gerenciar a integridade.")))),(0,t.kt)("h3",n({},{id:"loop-atrav\xe9s-da-cole\xe7\xe3o"}),"Loop atrav\xe9s da cole\xe7\xe3o"),(0,t.kt)("p",null,"When ",(0,t.kt)("inlineCode",{parentName:"p"},"For each... End for each")," is used with an ",(0,t.kt)("em",{parentName:"p"},"Expression")," of the ",(0,t.kt)("em",{parentName:"p"},"Collection")," type, the ",(0,t.kt)("em",{parentName:"p"},"Current_Item")," parameter is a variable of the same type as the collection elements. Como padr\xe3o, o n\xfamero de loops \xe9 baseado no n\xfamero de elementos da cole\xe7\xe3o."),(0,t.kt)("p",null,"A cole\xe7\xe3o deve conter s\xf3 elementos do mesmo tipo, do contr\xe1rio se devolver\xe1 um erro assim que a vari\xe1vel ",(0,t.kt)("em",{parentName:"p"},"Current_Item")," tenha sido atribu\xedda o primeiro tipo de valor estranho."),(0,t.kt)("p",null,"Em cada itera\xe7\xe3o do loop, a vari\xe1vel ",(0,t.kt)("em",{parentName:"p"},"Current_Item")," \xe9 preenchida automaticamente com o elemento correspondente da cole\xe7\xe3o. Os pontos abaixo devem ser considerados:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Se a vari\xe1vel ",(0,t.kt)("em",{parentName:"li"},"Current_Item")," \xe9 de tipo objeto ou de tipo cole\xe7\xe3o (ou seja, se ",(0,t.kt)("em",{parentName:"li"},"Expresi\xf3n")," for uma cole\xe7\xe3o de objetos ou de cole\xe7\xf5es), ao modificar esta vari\xe1vel se modificar\xe1 automaticamente o elemento coincidente da cole\xe7\xe3o (porque os objetos e as cole\xe7\xf5es compartem as mesmas refer\xeancias). Se a vari\xe1vel for de tipo escalar, s\xf3 se modificar\xe1 a vari\xe1vel."),(0,t.kt)("li",{parentName:"ul"},"A vari\xe1vel",(0,t.kt)("em",{parentName:"li"},"Current_Item")," deve ser do mesmo tipo que os elementos da cole\xe7\xe3o. Se algum elemento da cole\xe7\xe3o n\xe3o for do mesmo tipo que a vari\xe1vel, um erro \xe9 gerado e o loop para."),(0,t.kt)("li",{parentName:"ul"},"Se a cole\xe7\xe3o conter elementos com um valor ",(0,t.kt)("strong",{parentName:"li"},"Null"),", se gerar\xe1 um erro se o tipo de vari\xe1vel ",(0,t.kt)("em",{parentName:"li"},"Current_Item")," n\xe3o \xe9 compat\xedvel com valores ",(0,t.kt)("strong",{parentName:"li"},"Null")," (como as vari\xe1veis de tipo inteiro longo).")),(0,t.kt)("h4",n({},{id:"exemplo-2"}),"Exemplo"),(0,t.kt)("p",null,"Se quiser computar algumas estat\xedsticas para uma cole\xe7\xe3o de n\xfameros:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," C_COLLECTION($nums)\n $nums:=New collection(10;5001;6665;33;1;42;7850)\n C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)\n For each($item;$nums)\n    If($item%2=0)\n       $vEven:=$vEven+1\n    Else\n       $vOdd:=$vOdd+1\n    End if\n    Case of\n       :($item<5000)\n          $vUnder:=$vUnder+1\n       :($item>6000)\n          $vOver:=$vOver+1\n    End case\n End for each\n  //$vEven=3, $vOdd=4\n  //$vUnder=4,$vOver=2\n")),(0,t.kt)("h3",n({},{id:"loop-nas-sele\xe7\xf5es-de-entidades"}),"Loop nas sele\xe7\xf5es de entidades"),(0,t.kt)("p",null,"When ",(0,t.kt)("inlineCode",{parentName:"p"},"For each... End for each")," is used with an ",(0,t.kt)("em",{parentName:"p"},"Expression")," of the ",(0,t.kt)("em",{parentName:"p"},"Entity selection")," type, the ",(0,t.kt)("em",{parentName:"p"},"Current_Item")," parameter is the entity that is currently processed."),(0,t.kt)("p",null,"O n\xfamero de loops \xe9 baseado no n\xfamero de entidades da sele\xe7\xe3o de entidades. Em cada itera\xe7\xe3o do loop, o par\xe2metro ",(0,t.kt)("em",{parentName:"p"},"Current_Item")," \xe9 preenchido automaticamente com a entidade da sele\xe7\xe3o de entidade que estiver sendo processada atualmente."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Nota:")," se a sele\xe7\xe3o de entidades conter uma entidade que tenha sido eliminada, enquanto isso, por outro processo, ela \xe9 pulada durante o loop."),(0,t.kt)("p",null,"Lembre que qualquer modifica\xe7\xe3o aplicada na entidade atual deve ser guardada explicitamente utilizando ",(0,t.kt)("inlineCode",{parentName:"p"},"entity.save( )"),"."),(0,t.kt)("h4",n({},{id:"exemplo-3"}),"Exemplo"),(0,t.kt)("p",null,"Se quiser aumentar o sal\xe1rio de todos os empregados brit\xe2nicos em uma sele\xe7\xe3o de entidades:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," C_OBJECT(emp)\n For each(emp;ds. Employees.query(\"country='UK'\"))\n    emp.salary:=emp.salary*1,03\n    emp.save()\n End for each\n")),(0,t.kt)("h3",n({},{id:"loops-nas-propriedades-de-objetos"}),"Loops nas propriedades de objetos"),(0,t.kt)("p",null,"When ",(0,t.kt)("inlineCode",{parentName:"p"},"For each... End for each")," is used with an ",(0,t.kt)("em",{parentName:"p"},"Expression")," of the Object type, the ",(0,t.kt)("em",{parentName:"p"},"Current_Item")," parameter is a text variable automatically filled with the name of the currently processed property."),(0,t.kt)("p",null,"As propriedades do objeto s\xe3o processadas de acordo com sua ordem de cria\xe7\xe3o. Durante o loop, propriedades podem ser adicionadas ou eliminadas no objeto, sem modificar o n\xfamero de loops que permanecer\xe3o no n\xfamero original de propriedades do objeto."),(0,t.kt)("h4",n({},{id:"exemplo-4"}),"Exemplo"),(0,t.kt)("p",null,"Se quiser trocar os nomes para mai\xfasculas no objeto a seguir:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'{\n    "firstname": "gregory",\n    "lastname": "badikora",\n    "age": 20\n}\n')),(0,t.kt)("p",null,"Voc\xea pode escrever:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," For each(property;vObject)\n    If(Value type(vObject[property])=Is text)\n       vObject[property]:=Uppercase(vObject[property])\n    End if\n End for each\n")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{}),'{\n    "firstname": "GREGORY",\n    "lastname": "BADIKORA",\n    "age": 20\n}\n')),(0,t.kt)("h3",n({},{id:"par\xe2metros-begin--end"}),"Par\xe2metros begin / end"),(0,t.kt)("p",null,"Pode definir limites para a itera\xe7\xe3o usando os par\xe2metros opcionais inicio e fim."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Nota:"),"os par\xe2metros ",(0,t.kt)("em",{parentName:"p"},"inicio")," e ",(0,t.kt)("em",{parentName:"p"},"fim")," s\xf3 podem ser utilizados em itera\xe7\xf5es atrav\xe9s de cole\xe7\xf5es e sele\xe7\xf5es de entidades (s\xe3o ignoradas nas propriedades de objetos)."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"No par\xe2metro ",(0,t.kt)("em",{parentName:"li"},"begin"),", passe l posil\xe7ao do elemento em ",(0,t.kt)("em",{parentName:"li"},"Expression")," na que se iniciar\xe1 a itera\xe7\xe3o (se inclui ",(0,t.kt)("em",{parentName:"li"},"begin"),")."),(0,t.kt)("li",{parentName:"ul"},"No ",(0,t.kt)("em",{parentName:"li"},"par\xe2metro")," final, voc\xea tamb\xe9m pode passar a posi\xe7\xe3o do elemento na ",(0,t.kt)("em",{parentName:"li"},"Express\xe3o")," a qual vai parar a itera\xe7\xe3o (",(0,t.kt)("em",{parentName:"li"},"end")," \xe9 exclu\xeddo).")),(0,t.kt)("p",null,"Se omitir ",(0,t.kt)("em",{parentName:"p"},"end")," ou se ",(0,t.kt)("em",{parentName:"p"},"fim")," for maior que o n\xfamero de elementos em ",(0,t.kt)("em",{parentName:"p"},"Expression"),", os elementos s\xe3o iteragids de ",(0,t.kt)("em",{parentName:"p"},"begin")," at\xe9 o \xfaltimo elemento (inclu\xeddo). Se os par\xe2metros ",(0,t.kt)("em",{parentName:"p"},"inicio")," e",(0,t.kt)("em",{parentName:"p"},"fim")," forem valores positivos, representam posi\xe7\xf5es reais de elementos em ",(0,t.kt)("em",{parentName:"p"},"Expression"),". Se ",(0,t.kt)("em",{parentName:"p"},"begin")," for um valor negativo, \xe9 recalculado como ",(0,t.kt)("inlineCode",{parentName:"p"},"begin:=begin+Expression size")," (\xe9 considerado como o deslocamento offset desde o final de ",(0,t.kt)("em",{parentName:"p"},"Expression"),"). Se o valor calculado for negativo, ",(0,t.kt)("em",{parentName:"p"},"inicio")," toma o valor 0. ",(0,t.kt)("strong",{parentName:"p"},"Nota:")," mesmo se inicio for negativo, a itera\xe7\xe3o continua sendo realizada na ordem normal. Se ",(0,t.kt)("em",{parentName:"p"},"fim")," for um  valor negativo, se recalcula como ",(0,t.kt)("inlineCode",{parentName:"p"},"fim:=fim+tamanho da express\xe3o")),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"uma cole\xe7\xe3o cont\xe9m 10 elementos (numerada de 0 a 9)"),(0,t.kt)("li",{parentName:"ul"},"begin=-4 -> begin=-4+10=6 -> itera\xe7\xe3o come\xe7a no sexto elemento (#5)"),(0,t.kt)("li",{parentName:"ul"},"end=-2 -> end=-2+10=8 -> itera\xe7\xe3o para antes do oitavo elemento (#7), ou seja, no s\xe9timo elemento.")),(0,t.kt)("h4",n({},{id:"exemplo-5"}),"Exemplo"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' C_COLLECTION($col;$col2)\n $col:=New collection("a";"b";"c";"d";"e")\n $col2:=New collection(1;2;3)\n C_TEXT($item)\n For each($item;$col;0;3)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c"]\n For each($item;$col;-2;-1)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c","d"]\n')),(0,t.kt)("h3",n({},{id:"condi\xe7\xf5es-until-e-while"}),"Condi\xe7\xf5es Until e While"),(0,t.kt)("p",null,"You can control the ",(0,t.kt)("inlineCode",{parentName:"p"},"For each... End for each")," execution by adding an ",(0,t.kt)("inlineCode",{parentName:"p"},"Until")," or a ",(0,t.kt)("inlineCode",{parentName:"p"},"While")," condition to the loop. Quando uma instru\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"Until(condi\xe7\xe3o)")," estiver associada ao loop, a itera\xe7\xe3o vai parar logo que a condi\xe7\xe3o seja avaliada como ",(0,t.kt)("inlineCode",{parentName:"p"},"True"),", mas no caso de uma instru\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"While(condici\xf3n)"),", a itera\xe7\xe3o para quando a condi\xe7\xe3o for avaliada, pela primeira vez, como ",(0,t.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,t.kt)("p",null,"Pode passar qualquer uma das duas palavras chave em fun\xe7\xe3o das suas necessidades:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"A condi\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"li"},"Until")," \xe9 testada no final de cada itera\xe7\xe3o, portanto, se a ",(0,t.kt)("em",{parentName:"li"},"Express\xe3o")," n\xe3o for vazia ou nula, o loop ser\xe1 executado pelo menos uma vez."),(0,t.kt)("li",{parentName:"ul"},"A condi\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"li"},"While")," \xe9 testada no in\xedcio de cada itera\xe7\xe3o, ent\xe3o de acordo com o resultado da condi\xe7\xe3o, o loop n\xe3o poder\xe1 ser executado de forma alguma.")),(0,t.kt)("h4",n({},{id:"exemplo-6"}),"Exemplo"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)\n\n $total:=0\n For each($num;$colNum)While($total<30) //testado no come\xe7o\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)\n\n $total:=1000\n For each($num;$colNum)Until($total>30) //testado no final\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 1001 (1000+1)\n")))}u.isMDXComponent=!0}}]);