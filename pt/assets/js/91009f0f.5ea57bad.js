"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92619],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(o),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return o?n.createElement(f,l(l({ref:t},p),{},{components:o})):n.createElement(f,l({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3852:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});o(67294);var n=o(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const l={id:"collection",title:"Collection"},c=void 0,i={unversionedId:"Concepts/collection",id:"Concepts/collection",title:"Collection",description:"Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/pt/next/Concepts/collection",draft:!1,tags:[],version:"current",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Booleano",permalink:"/docs/pt/next/Concepts/boolean"},next:{title:"Date",permalink:"/docs/pt/next/Concepts/date"}},s={},p=[{value:"Inicializa\xe7\xe3o",id:"inicializa\xe7\xe3o",level:2},{value:"Cole\xe7\xe3o regular ou partilhada",id:"cole\xe7\xe3o-regular-ou-partilhada",level:3},{value:"Collection functions",id:"collection-functions",level:2},{value:"Par\xe2metro rotaPropriedade",id:"par\xe2metro-rotapropriedade",level:3}],u={toc:p};function m(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)("wrapper",r({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null)."),(0,n.kt)("p",null,"Collection type variables are managed using object notation (see ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/Concepts/object#syntax-basics"}),"Syntax basics"),")."),(0,n.kt)("p",null,"Para acessar a um elemento da cole\xe7\xe3o, \xe9 preciso passar o n\xfamero do elemento entre colchetes:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"collectionRef[expression]\n")),(0,n.kt)("p",null,"You can pass any valid 4D expression which returns a positive integer in ",(0,n.kt)("em",{parentName:"p"},"expression"),". Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," myCollection[5]  //aceso ao 6\xba elemento da cole\xe7\xe3o\n myCollection[$var]\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Aten\xe7\xe3o:")," os elementos da cole\xe7\xe3o est\xe3o numerados desde 0."),(0,n.kt)("p",null,"You can assign a value to a collection element or get a collection element value:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' myCol[10]:="My new element"\n $myVar:=myCol[0]\n')),(0,n.kt)("p",null,"Se atribuir um \xedndice de elemento que ultrapasse o \xfaltimo elemento existente da cole\xe7\xe3o, a cole\xe7\xe3o se redimensiona automaticamente e a todos os novos elementos intermedi\xe1rios se lhes atribui um valor nulo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var myCol : Collection\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n')),(0,n.kt)("h2",r({},{id:"inicializa\xe7\xe3o"}),"Inicializa\xe7\xe3o"),(0,n.kt)("p",null,"As cole\xe7\xf5es devem ter sido inicializadas, por exemplo utilizando o comando ",(0,n.kt)("inlineCode",{parentName:"p"},"New collection"),", do contr\xe1rio ao tentar ler ou modificar seus elementos se gerar\xe1 um erro de sintaxe."),(0,n.kt)("p",null,"Exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," var $colVar : Collection //cria\xe7\xe3o de uma vari\xe1vel 4D de tipo cole\xe7\xe3o\n $colVar:=New collection //initializa\xe7\xe3o da cole\xe7\xe3o e atribui\xe7\xe3o \xe0 vari\xe1vel 4D\n")),(0,n.kt)("h3",r({},{id:"cole\xe7\xe3o-regular-ou-partilhada"}),"Cole\xe7\xe3o regular ou partilhada"),(0,n.kt)("p",null,"Pode criar dois tipos de cole\xe7\xf5es:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"regular (non-shared) collections, using the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/CollectionClass#new-collection"}),(0,n.kt)("inlineCode",{parentName:"a"},"New collection"))," command. Essas cole\xe7\xf5es podem ser editadas sem qualquer controle de acesso espec\xedfico mas n\xe3o podem ser compartilhadas entre processos."),(0,n.kt)("li",{parentName:"ul"},"shared collections, using the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/CollectionClass#new-shared-collection"}),(0,n.kt)("inlineCode",{parentName:"a"},"New shared collection"))," command. Essas cole\xe7\xf5es podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Concepts/shared#useend-use"}),(0,n.kt)("inlineCode",{parentName:"a"},"Use... End use"))," structures.")),(0,n.kt)("p",null,"Para saber mais, consulte a se\xe7\xe3o ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/Concepts/shared"}),"Objetos e cole\xe7\xf5es compartidos"),"."),(0,n.kt)("h2",r({},{id:"collection-functions"}),"Collection functions"),(0,n.kt)("p",null,"4D collection references benefit from special class functions (sometimes named ",(0,n.kt)("em",{parentName:"p"},"member functions"),"). Collection functions are listed in the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/API/CollectionClass"}),"Class API Reference")," section."),(0,n.kt)("p",null,"Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$newCol:=$col.copy() //c\xf3pia de $col a $newCol\n$col.push(10;100) //adiciona 10 e 100 para a cole\xe7\xe3o\n")),(0,n.kt)("p",null,"Some functions return the original collection after modification, so that you can run the calls in a sequence:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n")),(0,n.kt)("h3",r({},{id:"par\xe2metro-rotapropriedade"}),"Par\xe2metro rotaPropriedade"),(0,n.kt)("p",null,"Several functions accept a ",(0,n.kt)("em",{parentName:"p"},"propertyPath")," as parameter. Este par\xe2metro significa:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'um nome de objeto propriedade por exemplo "Sobrenome"'),(0,n.kt)("li",{parentName:"ul"},'ou uma rota de propriedades de objeto, ou seja, uma sequ\xeancia hier\xe1rquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning:"),' When using functions and propertyPath parameters, you cannot use ".", "',"[ ]",'", or spaces in property names since it will prevent 4D from correctly parsing the path:'),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $vmin:=$col.min("My.special.property") //indefinido\n $vmin:=$col.min(["My.special.property"]) //erro\n')))}m.isMDXComponent=!0}}]);