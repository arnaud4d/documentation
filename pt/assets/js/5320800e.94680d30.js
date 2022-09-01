"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43760],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(a),c=r,k=s["".concat(i,".").concat(c)]||s[c]||d[c]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},30924:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"boolean",title:"Booleano"},p=void 0,i={unversionedId:"Concepts/boolean",id:"version-18/Concepts/boolean",title:"Booleano",description:"Um campo booleano, vari\xe1vel ou express\xe3o pode ser VERDADEIRO ou FALSO.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/pt/18/Concepts/boolean",draft:!1,tags:[],version:"18",frontMatter:{id:"boolean",title:"Booleano"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/pt/18/Concepts/blob"},next:{title:"Collection",permalink:"/docs/pt/18/Concepts/collection"}},u={},m=[{value:"Fun\xe7\xf5es booleanas",id:"fun\xe7\xf5es-booleanas",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"Opera\xe7\xe3o l\xf3gica",id:"opera\xe7\xe3o-l\xf3gica",level:2}],d={toc:m};function s(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Um campo booleano, vari\xe1vel ou express\xe3o pode ser VERDADEIRO ou FALSO."),(0,n.kt)("h2",r({},{id:"fun\xe7\xf5es-booleanas"}),"Fun\xe7\xf5es booleanas"),(0,n.kt)("p",null,"4D fornece as fun\xe7\xf5es booleanas ",(0,n.kt)("inlineCode",{parentName:"p"},"True"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"False"),", e ",(0,n.kt)("inlineCode",{parentName:"p"},"Not")," no tema dedicado ",(0,n.kt)("strong",{parentName:"p"},"Boolean")," . Para obter mais informa\xe7\xf5es, consulte as descri\xe7\xf5es desses comandos"),(0,n.kt)("h3",r({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"Esse exemplo define uma vari\xe1vel booleana com base no valor de um bot\xe3o. Retorna verdadeiro em myBoolean se o bot\xe3o myButton foi clicado e falso se o bot\xe3o n\xe3o foi clicado. Quando um bot\xe3o \xe9 clicado, a vari\xe1vel do bot\xe3o \xe9 definida como 1."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," If(myButton=1) //Se apertou o bot\xe3o\n    myBoolean:=True //myBoolean toma o valor True\n Else //Se o bot\xe3o n\xe3o for apertado\n    myBoolean:=False //myBoolean toma o valor False\n End if\n")),(0,n.kt)("p",null,"O exemplo anterior pode ser simplificado numa s\xf3 linha."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"myBoolean:=(myButton=1)\n")),(0,n.kt)("h2",r({},{id:"opera\xe7\xe3o-l\xf3gica"}),"Opera\xe7\xe3o l\xf3gica"),(0,n.kt)("p",null,"4D suporta dois operadores l\xf3gicos que trabalham com express\xf5es booleanas: conjun\xe7\xe3o (AND) e disjun\xe7\xe3o inclusiva (OR). Uma l\xf3gica E retorna VERDADEIRA se ambas as express\xf5es forem VERDADEIRAS. Uma l\xf3gica OU retorna VERDADEIRA se pelo menos uma das express\xf5es for VERDADEIRA. O quadro seguinte mostra os operadores l\xf3gicos:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Retorna"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"AND"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean & Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "A") & (15 # 3)'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") & (15 # 3)'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") & (15 = 3)'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OU"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean  ","|"," Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "A") ',"|"," (15 # 3)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 # 3)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 = 3)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("p",null,"A tabela seguinte \xe9 a tabela da verdade para o operador l\xf3gico AND:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1 & Expr2"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("p",null,"A tabela seguinte \xe9 a tabela da verdade para o operador l\xf3gico OR:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1 ","|"," Expr2"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dica:")," Se voc\xea precisa calcular a disjun\xe7\xe3o exclusiva entre Expr1 e Expr2, avalie:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," (Expr1|Expr2) & Not(Expr1 & Expr2)  \n")))}s.isMDXComponent=!0}}]);