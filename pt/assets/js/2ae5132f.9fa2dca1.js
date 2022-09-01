"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18905],{3905:(e,a,r)=>{r.d(a,{Zo:()=>d,kt:()=>c});var o=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,o,t=function(e,a){if(null==e)return{};var r,o,t={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var m=o.createContext({}),i=function(e){var a=o.useContext(m),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},d=function(e){var a=i(e.components);return o.createElement(m.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var r=e.components,t=e.mdxType,n=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(r),c=t,y=p["".concat(m,".").concat(c)]||p[c]||u[c]||n;return r?o.createElement(y,s(s({ref:a},d),{},{components:r})):o.createElement(y,s({ref:a},d))}));function c(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=r.length,s=new Array(n);s[0]=p;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l.mdxType="string"==typeof e?e:t,s[1]=l;for(var i=2;i<n;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49206:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>m,toc:()=>d});r(67294);var o=r(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},t.apply(this,arguments)}function n(e,a){if(null==e)return{};var r,o,t=function(e,a){if(null==e)return{};var r,o,t={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}const s={id:"arrays",title:"Arrays"},l=void 0,m={unversionedId:"Concepts/arrays",id:"Concepts/arrays",title:"Arrays",description:"Um array \xe9 uma s\xe9rie ordenada devari\xe1veis do mesmo tipo. Cada vari\xe1vel \xe9 um elemento do array. Um array recebe seu tamanho quando \xe9 criado, depois pode ser redimensionado quantas vezes sejam necess\xe1rio, adicionando, inserindo ou eliminado elementos, ou redimensionando o array atrav\xe9s do mesmo comando usado para cri\xe1-lo. Elementos do array s\xe3o numerados de 1 a N, onde N \xe9 o tamanho do array. Um array sempre tem um elemento especial elemento zero. Arrays s\xe3o vari\xe1veis 4D. Como qualquer vari\xe1vel, um array tem um alcance/escopo e segue as regras da linguagem 4D, mas com algumas diferen\xe7as \xfanicas.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/Concepts/arrays.md",sourceDirName:"Concepts",slug:"/Concepts/arrays",permalink:"/docs/pt/next/Concepts/arrays",draft:!1,tags:[],version:"current",frontMatter:{id:"arrays",title:"Arrays"},sidebar:"docs",previous:{title:"Vari\xe1veis",permalink:"/docs/pt/next/Concepts/variables"},next:{title:"M\xe9todos",permalink:"/docs/pt/next/Concepts/methods"}},i={},d=[{value:"Criar Arrays",id:"criar-arrays",level:2},{value:"Atribuir valores em arrays",id:"atribuir-valores-em-arrays",level:2},{value:"Atribuindo um array para outro array",id:"atribuindo-um-array-para-outro-array",level:3},{value:"Usar o elemento zero de um array",id:"usar-o-elemento-zero-de-um-array",level:2},{value:"Arrays de duas dimens\xf5es",id:"arrays-de-duas-dimens\xf5es",level:2},{value:"Arrays e mem\xf3ria",id:"arrays-e-mem\xf3ria",level:2}],u={toc:d};function p(e){var{components:a}=e,r=n(e,["components"]);return(0,o.kt)("wrapper",t({},u,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Um ",(0,o.kt)("strong",{parentName:"p"},"array")," \xe9 uma s\xe9rie ordenada de",(0,o.kt)("strong",{parentName:"p"},"vari\xe1veis")," do mesmo tipo. Cada vari\xe1vel \xe9 um ",(0,o.kt)("strong",{parentName:"p"},"elemento")," do array. Um array recebe seu tamanho quando \xe9 criado, depois pode ser redimensionado quantas vezes sejam necess\xe1rio, adicionando, inserindo ou eliminado elementos, ou redimensionando o array atrav\xe9s do mesmo comando usado para cri\xe1-lo. Elementos do array s\xe3o numerados de 1 a N, onde N \xe9 o tamanho do array. Um array sempre tem um elemento especial ",(0,o.kt)("a",t({parentName:"p"},{href:"#using-the-element-zero-of-an-array"}),"elemento zero"),". Arrays s\xe3o vari\xe1veis 4D. Como qualquer vari\xe1vel, um array tem um alcance/escopo e segue as regras da linguagem 4D, mas com algumas diferen\xe7as \xfanicas."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Na maioria dos casos \xe9 recomendado usar ",(0,o.kt)("strong",{parentName:"p"},"collections")," ao inv\xe9s de ",(0,o.kt)("strong",{parentName:"p"},"arrays"),". Collections s\xe3o mais flex\xedveis e oferecem uma maior gama de m\xe9todos dedicados. Para saber mais veja ",(0,o.kt)("a",t({parentName:"p"},{href:"/docs/pt/next/Concepts/collection"}),"Collection"),".")),(0,o.kt)("h2",t({},{id:"criar-arrays"}),"Criar Arrays"),(0,o.kt)("p",null,'Pode criar um array com um dos comandos de declara\xe7\xe3o de array no tema "Array". Cada comando de declara\xe7\xe3o de array pode criar ou redimensionar arrays unidimensionais ou bidimensionais. Para mais informa\xe7\xe3o sobre arrays bidimensionais, consulte ',(0,o.kt)("a",t({parentName:"p"},{href:"#two-dimensional-arrays"}),"arrays bidimensionais"),"."),(0,o.kt)("p",null,"A linha de c\xf3digo abaixo cria (declara) um array Inteiro de 10 elementos:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"})," ARRAY INTEGER(aiAnArray;10)\n")),(0,o.kt)("p",null,"Depois, o c\xf3digo a seguir redimensiona o mesmo array para 20 elementos:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"ARRAY INTEGER(aiAnArray;20)\n")),(0,o.kt)("p",null,"Depois, o c\xf3digo a seguir redimensiona o mesmo array para 0 elementos:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"ARRAY INTEGER(aiAnArray;0)\n")),(0,o.kt)("h2",t({},{id:"atribuir-valores-em-arrays"}),"Atribuir valores em arrays"),(0,o.kt)("p",null,"Pode referenciar os elementos em um array usando chaves ({\u2026}). Dentro das chaves se utiliza um n\xfamero para dirigir-se a um elemento concreto; este n\xfamero se denomina n\xfamero de elemento. As linhas abaixo p\xf5e cinco nomes em um array chamado atNames e ent\xe3o exibe-os na janela de alerta:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT(atNames;5)\n atNames{1}:="Richard"\n atNames{2}:="Sarah"\n atNames{3}:="Sam"\n atNames{4}:="Jane"\n atNames{5}:="John"\n For($vlElem;1;5)\n    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})\n End for\n')),(0,o.kt)("p",null,"Lembre da sintaxe atNames{$vlElem}. Ao inv\xe9s de especificar um literal num\xe9rico como atNames{3}, pode usar uma vari\xe1vel num\xe9rica para indicar a quais elementos de um array se dirige. Using the iteration provided by a loop structure (",(0,o.kt)("inlineCode",{parentName:"p"},"For... End for"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Repeat... Until")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"While... End while"),"), compact pieces of code can address all or part of the elements in an array."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Importante:")," N\xe3o confunda o operador de atribui\xe7\xe3o := com o operador de compara\xe7\xe3o de igualdade (=). As opera\xe7\xf5es de atribui\xe7\xe3o e compara\xe7\xe3o s\xe3o bem diferentes."),(0,o.kt)("h3",t({},{id:"atribuindo-um-array-para-outro-array"}),"Atribuindo um array para outro array"),(0,o.kt)("p",null,"Diferente de vari\xe1veis texto ou strings, n\xe3o pode atribuir um array para outro. Para copiar (atribuir) um array para outro, use ",(0,o.kt)("inlineCode",{parentName:"p"},"COPY ARRAY"),"."),(0,o.kt)("h2",t({},{id:"usar-o-elemento-zero-de-um-array"}),"Usar o elemento zero de um array"),(0,o.kt)("p",null,"Um array sempre tem um elemento zero. Apesar do elemento zero n\xe3o ser mostrado quando um array for compat\xedvel com um objeto formul\xe1rio, n\xe3o h\xe1 restri\xe7\xf5es (*) ao us\xe1-lo com a linguagem."),(0,o.kt)("p",null,"Aqui h\xe1 outro exemplo: se quiser inicializar um objeto formul\xe1rio com um valor texto mas sem estabelecer um valor padr\xe3o. Pode usar o elemento zero do array:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'  // m\xe9todo para um combo box ou lista drop down\n  // vinculado ao array de vari\xe1vel atName\n Case of\n    :(Form event code=On Load)\n  // Initializar o array (como mostrado acima)  \n  // Mas use o elemento zero\n        ARRAY TEXT(atName;5)\n        atName{0}:=Please select an item"\n        atName{1}:="Text1"\n        atName{2}:="Text2"\n        atName{3}:="Text3"\n        atName{4}:="Text4"\n        atName{5}:="Text5"\n    // Posiciona o array para elemento 0\n        atName:=0\n End case\n')),(0,o.kt)("p",null,"(*) Entretanto, h\xe1 uma excep\xe7\xe3o: em um array tipo List Box o elemento zero se usa internamente para armazenar o valor anterior de um elemento que se est\xe1 editando, n\xe3o \xe9 poss\xedvel para usar no seu contexto particular."),(0,o.kt)("h2",t({},{id:"arrays-de-duas-dimens\xf5es"}),"Arrays de duas dimens\xf5es"),(0,o.kt)("p",null,"Cada comando de declara\xe7\xe3o de comandos pode criar ou redimensionar arrays unidimensionais ou bidimensionais. Exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT(atTopics;100;50) // Cria um array de texto composto de 100 linhas de 50 colunas\n")),(0,o.kt)("p",null,"Os arrays de duas dimens\xf5es s\xe3o essencialmente objetos de linguagem; n\xe3o podem se mostrar nem imprimir."),(0,o.kt)("p",null,"No exemplo anterior:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"atTopics \xe9 um array de duas dimens\xf5ees"),(0,o.kt)("li",{parentName:"ul"},"atTopics{8}{5} \xe9 o elemento 5a (5a coluna...) da 8a fila"),(0,o.kt)("li",{parentName:"ul"},"atTopics{20} \xe9 a 20a linha \xe9 por sua vez um array dimens\xe3o"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Tamanho do array(atTopics)")," devolve 100, que \xe9 o n\xfamero de filas"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Tamanho de array(atTopics{17})")," devolve 50, que \xe9 o n\xfamero de colunas da linha 17")),(0,o.kt)("p",null,"No seguinte exemplo, um ponteiro a cada campo de cada tabela do banco de dados se armazena em um array de duas dimens\xf5es:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' C_LONGINT($vlLastTable;$vlLastField)\n C_LONGINT($vlFieldNumber)\n  // Criar tantas linhas (vazias e sem colunas) como tabelas \n $vlLastTable:=Get last table number\n ARRAY POINTER(<>apFields;$vlLastTable;0) /Array 2D com X linhas e zero colunas\n  // Para cada tabela\n For($vlTable;1;$vlLastTable)\n    If(Is table number valid($vlTable))\n       $vlLastField:=Get last field number($vlTable)\n  // Dar valor aos elementos\n       $vlColumnNumber:=0\n       For($vlField;1;$vlLastField)\n          If(Is field number valid($vlTable;$vlField))\n             $vlColumnNumber:=$vlColumnNumber+1\n  //Insere uma coluna em uma linha da tabela em curso\n             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)\n  //Atribuir \xe0 "c\xe9lula" com o ponteiro\n             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)\n          End if\n       End for\n    End if\n End for\n')),(0,o.kt)("p",null,"Sempre que tiver inicializado este array de duas dimens\xf4es, se pedem obter os ponteiros aos campos de uma tabela concreta da seguinte maneira:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"  // Obter os ponteiros aos campos para a tabela que se mostra atualmente na tela:\n COPY ARRAY(\u25caapFields{Table(Current form table)};$apTheFieldsIamWorkingOn)\n  // Inicializar os campos booleanos e de data\n For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))\n    Case of\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=True\n    End case\n End for\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nota:")," como sugere este exemplo, as linhas de um array de duas dimens\xf5es podem ter o mesmo tamanho ou diferentes tamanhos."),(0,o.kt)("h2",t({},{id:"arrays-e-mem\xf3ria"}),"Arrays e mem\xf3ria"),(0,o.kt)("p",null,"A diferen\xe7a dos dados que se armazenam no disco mediante tabelas e registros, um array se mant\xe9m sempre na mem\xf3ria em sua totalidade."),(0,o.kt)("p",null,"Por exemplo, se introduzir todos os c\xf3digos postais dos EUA na tabela ","[Zip Codes]",", conteria por volta de 100.000 registros. Al\xe9m disso essa tabela incluiria v\xe1rios campos: o c\xf3digo cep e a cidade, regi\xe3o e estado correspondentes. Se selecionar todos os ceps (zip codes) da Calif\xf3rnia, o motor de banco de dados 4D cria a sele\xe7\xe3o correspondente de registros dentro da tabela ","[Zip Codes]"," e ent\xe3o carrega os registros s\xf3 quando forem necess\xe1rios (ou seja quando forem exibidos ou impressos). Ou seja, voc\xea trabalha com uma s\xe9rie ordenada de valores (do mesmo tipo para cada campo) que \xe9 carregada parcialmente desde o disco \xe0 mem\xf3ria pelo motor do banco de dados 4D."),(0,o.kt)("p",null,"Fazer a mesma coisa com arrays seria imposs\xedvel pelas raz\xf5es abaixo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Para manter os quatro tipos de informa\xe7\xe3o (c\xf3digo postal, cidade, regi\xe3o e estado) teria que manter quatro arrays grandes na mem\xf3ria."),(0,o.kt)("li",{parentName:"ul"},"Como um array sempre \xe9 mantido na mem\xf3ria inteiramente, teria que manter toda a informa\xe7\xe3o de c\xf3digos postais na mem\xf3ria durante a sess\xe3o inteira, mesmo quando os dados n\xe3o estivessem sendo usados."),(0,o.kt)("li",{parentName:"ul"},"De novo, como um array \xe9 sempre mantido na mem\xf3ria em sua totalidade, a cada vez que a aplica\xe7\xe3o for iniciada, os quatro arrays teriam que ser carregados e ent\xe3o salvos no disco, mesmo se os dados n\xe3o forem usados ou modificados na sess\xe3o de trabalho.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Conclus\xe3o:")," os arrays est\xe3o pensados para manter quantidades razo\xe1veis de dados durante um curto per\xedodo de tempo. Por outro lado, como os arrays s\xe3o mantidos na mem\xf3ria, s\xe3o f\xe1ceis de manejar e r\xe1pidos de manipular."),(0,o.kt)("p",null,"Entretanto, em algumas circunst\xe2ncias, pode precisar trabalhar com arrays que contenham centenas ou milhares de elementos. A tabela abaixo lista as f\xf3rmulas usadas para calcular a quantidade de mem\xf3ria usada para cada tipo de array:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",t({parentName:"tr"},{align:null}),"Tipo de array"),(0,o.kt)("th",t({parentName:"tr"},{align:null}),"F\xf3rmula para determinar o uso da memoria em bytes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Blob"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 12 + Soma de tamanho de cada blob")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Booleano"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(31+n\xfamero de elementos)\\N8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Date"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Integer"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Long Integer"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Objeto"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 8 + Soma de tamanho de cada objeto")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Imagem"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 8 + Soma do tamanho de cada imagem")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Ponteiro"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 8 + Soma de tamanho de cada ponteiro")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Real"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Text"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) ",(0,o.kt)("em",{parentName:"td"}," 20 + (soma da longitude de cada texto) ")," 2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Hora"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",t({parentName:"tr"},{align:null}),"Dois dimens\xf5ees"),(0,o.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 16 + Soma do tamanho de cada array")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notas:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"O tamanho de um texto em memoria se calcula com esta f\xf3rmula ((Longitude + 1) * 2)"),(0,o.kt)("li",{parentName:"ul"},"S\xe3o necess\xe1rios alguns bytes adicionais para acompanhar o elemento selecionado, o n\xfamero de elementos, e o pr\xf3prio array.")))}p.isMDXComponent=!0}}]);