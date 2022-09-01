"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41793],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,N=m["".concat(d,".").concat(g)]||m[g]||s[g]||l;return a?n.createElement(N,o(o({ref:t},u),{},{components:a})):n.createElement(N,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"number",title:"N\xfamero (Real, Entero largo, Entero)"},i=void 0,d={unversionedId:"Concepts/number",id:"version-19/Concepts/number",title:"N\xfamero (Real, Entero largo, Entero)",description:"N\xfamero es un t\xe9rmino gen\xe9rico que significa:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/dt_number.md",sourceDirName:"Concepts",slug:"/Concepts/number",permalink:"/docs/es/19/Concepts/number",draft:!1,tags:[],version:"19",frontMatter:{id:"number",title:"N\xfamero (Real, Entero largo, Entero)"},sidebar:"docs",previous:{title:"Null e indefinido",permalink:"/docs/es/19/Concepts/null-undefined"},next:{title:"Object",permalink:"/docs/es/19/Concepts/object"}},p={},u=[{value:"Constantes literales num\xe9ricas",id:"constantes-literales-num\xe9ricas",level:2},{value:"Operadores num\xe9ricos",id:"operadores-num\xe9ricos",level:2},{value:"Prioridad",id:"prioridad",level:3},{value:"Operadores de bits",id:"operadores-de-bits",level:2},{value:"Notas",id:"notas",level:4},{value:"Ejemplos",id:"ejemplos",level:3}],s={toc:u};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"N\xfamero es un t\xe9rmino gen\xe9rico que significa:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Los campos, variables o expresiones de tipo real. El rango del tipo Real es \xb11,7e\xb1308 (13 d\xedgitos significativos)."),(0,n.kt)("li",{parentName:"ul"},"Los campos, variables o expresiones de tipo Entero largo. El rango para el tipo de datos Entero largo (4 bytes) es -2^31..(2^31)-1."),(0,n.kt)("li",{parentName:"ul"},"Los campos, variables o expresiones de tipo Entero. El rango para el tipo de datos Entero (2 bytes) es -32.768..32.767 (2^15..(2^15)-1).")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," los valores de los campos enteros se convierten autom\xe1ticamente en enteros largos cuando se utilizan en el lenguaje 4D."),(0,n.kt)("p",null,"Puede asignar cualquier tipo de dato num\xe9rico a otro; 4D realiza la conversi\xf3n, truncando o redondeando si es necesario. Sin embargo, cuando los valores est\xe1n fuera del rango, la conversi\xf3n no devolver\xe1 un valor v\xe1lido. Se pueden mezclar los tipos de datos num\xe9ricos en las expresiones."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," en el manual de referencia del lenguaje 4D, sin importar el tipo de datos real, los par\xe1metros de tipo Real, Entero y Entero largo en las descripciones de los comandos se indican como n\xfamero, salvo que se indique lo contrario."),(0,n.kt)("h2",r({},{id:"constantes-literales-num\xe9ricas"}),"Constantes literales num\xe9ricas"),(0,n.kt)("p",null,"Una constante literal num\xe9rica se escribe como un n\xfamero real. Estos son algunos ejemplos de constantes num\xe9ricas:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"27\n123.76\n0.0076\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'El separador decimal por defecto es el punto (.), independientemente del lenguaje del sistema. Si ha marcado la opci\xf3n "Utilizar la configuraci\xf3n regional del sistema" en la p\xe1gina de M\xe9todos de las Preferencias, debe utilizar el separador definido en su sistema.')),(0,n.kt)("p",null,"Los n\xfameros negativos se especifican con el signo menos (-). Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"-27\n-123.76\n-0.0076\n")),(0,n.kt)("h2",r({},{id:"operadores-num\xe9ricos"}),"Operadores num\xe9ricos"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Operaci\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxis"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Devuelve"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adici\xf3n"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero + N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2 + 3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resta"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero - N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"3 \u2013 2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Multiplicaci\xf3n"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero * N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5 * 2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Divisi\xf3n"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero / N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5 / 2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2.5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Divisi\xf3n entera"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero \\ N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5 \\ 2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"M\xf3dulo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero % N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5 % 2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Exponenciaci\xf3n"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero ^ N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2 ^ 3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero = N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 = 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 = 11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Desigualdad"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero # N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 #11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 # 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Mayor que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero > N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"11 > 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 > 11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Menor que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero < N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 < 11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"11 < 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Mayor o igual que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero >= N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"11 >= 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 >= 11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Menor o igual que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero <= N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 <= 11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"11 <= 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("p",null,"El operador modulo % divide el primer n\xfamero entre el segundo y devuelve un resto de n\xfamero entero. He aqu\xed algunos ejemplos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"10 % 2 devuelve 0 porque 10 est\xe1 dividido uniformemente por 2."),(0,n.kt)("li",{parentName:"ul"},"10 % 3 devuelve 1 porque el resto es 1."),(0,n.kt)("li",{parentName:"ul"},"10,5 % 2 devuelve 0 porque el resto no es un n\xfamero entero.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ATENCI\xd3N:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"El operador modulo % devuelve valores significativos con n\xfameros que est\xe1n en el rango de los enteros largos (de \u20132^31 hasta 2^31 menos 1). Para calcular el m\xf3dulo con n\xfameros fuera de este rango, utilice el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"Mod"),"."),(0,n.kt)("li",{parentName:"ul"},"El operador de divisi\xf3n entero largo \\ devuelve valores significativos s\xf3lo con n\xfameros enteros.")),(0,n.kt)("h3",r({},{id:"prioridad"}),"Prioridad"),(0,n.kt)("p",null,"El orden en que se eval\xfaa una expresi\xf3n se llama prioridad. 4D tiene una precedencia estricta de izquierda a derecha, en la que no se aplica el orden algebraico. Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," 3+4*5\n")),(0,n.kt)("p",null,"devuelve 35, porque la expresi\xf3n se eval\xfaa como 3 + 4, dando como resultado 7, que luego se multiplica por 5, con el resultado final de 35."),(0,n.kt)("p",null,"Para anular la precedencia de izquierda a derecha, DEBE utilizar par\xe9ntesis. Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," 3+(4*5)\n")),(0,n.kt)("p",null,"devuelve 23 porque la expresi\xf3n (4 * 5) se eval\xfaa primero, debido a los par\xe9ntesis. El resultado es 20, que se suma a 3 para el resultado final de 23."),(0,n.kt)("p",null,"Los par\xe9ntesis pueden anidarse dentro de otros conjuntos de par\xe9ntesis. Aseg\xfarese de que cada par\xe9ntesis de la izquierda tenga un par\xe9ntesis de la derecha que coincida para garantizar la evaluaci\xf3n correcta de las expresiones. La falta o el uso incorrecto de los par\xe9ntesis puede provocar resultados inesperados o expresiones no v\xe1lidas. Adem\xe1s, si pretende compilar sus aplicaciones, debe tener par\xe9ntesis coincidentes: el compilador detecta la falta de par\xe9ntesis como un error de sintaxis."),(0,n.kt)("h2",r({},{id:"operadores-de-bits"}),"Operadores de bits"),(0,n.kt)("p",null,"Los operadores de bits operan sobre expresiones o valores ",(0,n.kt)("strong",{parentName:"p"},"Entero largo"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si se pasa un valor de tipo Entero o Real a un operador de tipo bit, 4D eval\xfaa el valor como un valor de tipo Entero Largo antes de calcular el resultado de la expresi\xf3n.")),(0,n.kt)("p",null,"Cuando se utilizan los operadores de bits, hay que pensar en un valor de tipo Entero largo como un array de 32 bits. Los bits est\xe1n numerados de 0 a 31, de derecha a izquierda."),(0,n.kt)("p",null,"Dado que cada bit puede ser igual a 0 o 1, tambi\xe9n se puede pensar en un valor Entero largo como un valor en el que se pueden almacenar 32 valores booleanos. Un bit igual a 1 significa ",(0,n.kt)("strong",{parentName:"p"},"Verdadero")," y un bit igual a 0 significa ",(0,n.kt)("strong",{parentName:"p"},"Falso"),"."),(0,n.kt)("p",null,"Una expresi\xf3n que utiliza un operador bitwise devuelve un valor Entero largo, excepto para el operador Bit Test, donde la expresi\xf3n devuelve un valor Booleano. La siguiente tabla lista los operadores a nivel de bits y su sintaxis:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Operaci\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Operador"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxis"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Devuelve"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Y"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"&"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long & Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"O (inclusive)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"|"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long ","|"," Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"O (exclusivo)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\\^","|"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long \\^","|"," Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Left Bit Shift"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<<"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long << Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long (ver nota 1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Right Bit Shift"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),">>"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long >> Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long (ver nota 1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bit Set"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?+"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long ?+ Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long (ver nota 2)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Poner el bit en 0"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long ?- Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long (ver nota 2)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Probar bit"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"??"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long ?? Long Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean (ver nota 2)")))),(0,n.kt)("h4",r({},{id:"notas"}),"Notas"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Para las operaciones ",(0,n.kt)("inlineCode",{parentName:"li"},"Left Bit Shift")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Right Bit Shift"),", el segundo operando indica el n\xfamero de posiciones en que se desplazar\xe1n los bits del primer operando en el valor resultante. Por lo tanto, este segundo operando debe estar entre 0 y 31. Tenga en cuenta, sin embargo, que el desplazamiento de 0 devuelve un valor sin cambios y el desplazamiento de m\xe1s de 31 bits devuelve 0x00000000 porque todos los bits se pierden. Si se pasa otro valor como segundo operando, el resultado no es significativo."),(0,n.kt)("li",{parentName:"ol"},"En las operaciones ",(0,n.kt)("inlineCode",{parentName:"li"},"Bit Set"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Bit Clear")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"Bit Test")," , el segundo operando indica el n\xfamero del bit sobre el que hay que actuar. Por lo tanto, este segundo operando debe estar entre 0 y 31; de lo contrario, el resultado de la expresi\xf3n no es significativo.")),(0,n.kt)("p",null,"La siguiente tabla lista los operadores a nivel de bits y sus efectos:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Operaci\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Y"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cada bit resultante es el resultado de la operaci\xf3n AND l\xf3gica aplicada a los bits de los dos operandos. Aqu\xed est\xe1 la tabla del AND l\xf3gico:",(0,n.kt)("li",null,"1 & 1 --\x3e 1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("li",null,"0 & 1 --\x3e 0"),(0,n.kt)("li",null,"1 & 0 --\x3e 0"),(0,n.kt)("li",null,"0 & 0 --\x3e 0"),"In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0."),(0,n.kt)("td",r({parentName:"tr"},{align:null}))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," Teniendo en cuenta s\xf3lo los valores positivos, el desplazamiento a la izquierda de N bits es lo mismo que la multiplicaci\xf3n por 2^N.| |Right Bit Shift|El valor resultante se ajusta al valor del primer operando, luego los bits resultantes se desplazan a la derecha el n\xfamero de posici\xf3n indicado por el segundo operando. Los bits de la derecha se pierden y los nuevos bits de la izquierda se ponen en 0.",(0,n.kt)("strong",{parentName:"p"},"Nota:")," teniendo en cuenta s\xf3lo los valores positivos, el desplazamiento a la derecha de N bits es lo mismo que dividir por 2^N.| |Bit Set|El valor resultante se establece en el valor del primer operando, luego el bit resultante, cuyo n\xfamero es indicado por el segundo operando, se establece en 1. Los otros bits no se modifican.| |Bit Clear|El valor resultante se establece en el valor del primer operando, luego el bit resultante, cuyo n\xfamero es indicado por el segundo operando, se establece en 0. Los otros bits no se modifican.| |Bit Test|Devuelve True si, en el primer operando, el bit cuyo n\xfamero indica el segundo operando es igual a 1. Devuelve False si, en el primer operando, el bit cuyo n\xfamero indica el segundo operando es igual a 0.|"),(0,n.kt)("h3",r({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Operaci\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Ejemplo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Result"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Y"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF & 0xFF00FF00"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FF00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"O (inclusive)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF ","|"," 0xFF00FF00"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0xFF00FFFF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"O (exclusivo)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF \\^","|"," 0xFF00FF00"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0xFF0000FF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Left Bit Shift"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF << 8"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00FFFF00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Right Bit Shift"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF >> 8"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x000000FF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bit Set"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00000000 ?+ 16"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00010000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Poner el bit en 0"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00010000 ?- 16"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Probar bit"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00010000 ?? 16 16"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")))))}m.isMDXComponent=!0}}]);