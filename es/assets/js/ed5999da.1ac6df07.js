"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92794],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),i=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=i(e.components);return t.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return n?t.createElement(k,l(l({ref:a},c),{},{components:n})):t.createElement(k,l({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98515:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var t=n(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r.apply(this,arguments)}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"ClassClass",title:"Class"},o=void 0,p={unversionedId:"API/ClassClass",id:"API/ClassClass",title:"Class",description:'Cuando una clase usuario es definida en el proyecto, se carga en el entorno del lenguaje 4D. Una clase es un objeto en s\xed mismo, de la clase "Class", que tiene propiedades y una funci\xf3n.',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/API/ClassClass.md",sourceDirName:"API",slug:"/API/ClassClass",permalink:"/docs/es/next/API/ClassClass",draft:!1,tags:[],version:"current",frontMatter:{id:"ClassClass",title:"Class"},sidebar:"docs",previous:{title:"Blob",permalink:"/docs/es/next/API/BlobClass"},next:{title:"Collection",permalink:"/docs/es/next/API/CollectionClass"}},i={},c=[{value:"Resumen",id:"resumen",level:3},{value:".name",id:"name",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".new()",id:"new",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:".superclass",id:"superclass",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4}],u={toc:c};function d(e){var{components:a}=e,n=s(e,["components"]);return(0,t.kt)("wrapper",r({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Cuando una clase usuario es ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/next/Concepts/classes#class-definition"}),"definida"),' en el proyecto, se carga en el entorno del lenguaje 4D. Una clase es un objeto en s\xed mismo, de la clase "Class", que tiene propiedades y una funci\xf3n.'),(0,t.kt)("h3",r({},{id:"resumen"}),"Resumen"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",r({parentName:"tr"},{align:null}))))),(0,t.kt)("p",null,"| ",(0,t.kt)("a",r({parentName:"p"},{href:"#name"}),(0,t.kt)("strong",{parentName:"a"},".name")," : Text"),"\xa0","\xa0","\xa0","\xa0","contiene el nombre del objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Class"),"|\n| ",(0,t.kt)("a",r({parentName:"p"},{href:"#new"}),(0,t.kt)("strong",{parentName:"a"},".new"),"( ",(0,t.kt)("em",{parentName:"a"},"param")," : any { ",(0,t.kt)("em",{parentName:"a"},";...paramN")," } ) : 4D.Class"),"\xa0","\xa0","\xa0","\xa0","crea y devuelve un objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"cs.className")," que es una nueva instancia de la clase sobre la que se llama |\n| ",(0,t.kt)("a",r({parentName:"p"},{href:"#superclass"}),(0,t.kt)("strong",{parentName:"a"},".superclass")," : 4D.Class"),"\xa0","\xa0","\xa0","\xa0","devuelve la clase padre de la clase |"),(0,t.kt)("h2",r({},{id:"name"}),".name"),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Hist\xf3rico"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,t.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"v18 R3"),(0,t.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},".name")," : Text"),(0,t.kt)("h4",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,t.kt)("p",null,"La propiedad ",(0,t.kt)("inlineCode",{parentName:"p"},".name")," contiene el nombre del objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Class"),". ."),(0,t.kt)("p",null,"Esta propiedad es ",(0,t.kt)("strong",{parentName:"p"},"de s\xf3lo lectura"),"."),(0,t.kt)("h2",r({},{id:"new"}),".new()"),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Hist\xf3rico"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,t.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"v18 R3"),(0,t.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},".new"),"( ",(0,t.kt)("em",{parentName:"p"},"param")," : any { ",(0,t.kt)("em",{parentName:"p"},";...paramN")," } ) : 4D.Class\n| Par\xe1metros | Type     |    | Descripci\xf3n                                         |\n| ---------- | -------- |:--:| --------------------------------------------------- |\n| param      | any      | -> | Par\xe1metro(s) a pasar a la funci\xf3n constructor       |\n| Result     | 4D.Class | <- | Nuevo objeto de la clase|"),(0,t.kt)("p",null,"|"),(0,t.kt)("h4",r({},{id:"descripci\xf3n-1"}),"Descripci\xf3n"),(0,t.kt)("p",null,"La funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},".new()")," crea y devuelve un objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"cs.className")," que es una nueva instancia de la clase sobre la que se llama. Esta funci\xf3n est\xe1 disponible autom\xe1ticamente en todas las clases del class store ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/next/Concepts/classes#cs"}),(0,t.kt)("inlineCode",{parentName:"a"},"cs")),"."),(0,t.kt)("p",null,"Puede pasar uno o m\xe1s par\xe1metros opcionales ",(0,t.kt)("em",{parentName:"p"},"param"),", que se pasar\xe1n a la funci\xf3n ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/next/Concepts/classes#class-constructor"}),"constructor de la clase")," (si la hay) en la definici\xf3n de la clase className. Dentro de la funci\xf3n constructor, ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/next/Concepts/classes#this"}),(0,t.kt)("inlineCode",{parentName:"a"},"This"))," est\xe1 ligado al nuevo objeto que se est\xe1 construyendo."),(0,t.kt)("p",null,"Si se llama a ",(0,t.kt)("inlineCode",{parentName:"p"},".new()")," en una clase inexistente, se devuelve un error."),(0,t.kt)("h4",r({},{id:"ejemplos"}),"Ejemplos"),(0,t.kt)("p",null,"Para crear una nueva instancia de la clase Person:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $person : cs.Person  \n$person:=cs.Person.new() //crear la nueva instancia  \n//$person contiene las funciones de la clase\n")),(0,t.kt)("p",null,"Para crear una nueva instancia de la clase Person con par\xe1metros:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//Class: Person.4dm\nClass constructor($firstname : Text; $lastname : Text; $age : Integer)\n    This.firstName:=$firstname\n    This.lastName:=$lastname\n    This.age:=$age\n")),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'//En un m\xe9todo\nvar $person : cs.Person  \n$person:=cs.Person.new("John";"Doe";40)  \n//$person.firstName = "John"\n//$person.lastName = "Doe"\n//$person.age = 40\n')),(0,t.kt)("h2",r({},{id:"superclass"}),".superclass"),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Hist\xf3rico"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,t.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"v18 R3"),(0,t.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},".superclass")," : 4D.Class"),(0,t.kt)("h4",r({},{id:"descripci\xf3n-2"}),"Descripci\xf3n"),(0,t.kt)("p",null,"La propiedad ",(0,t.kt)("inlineCode",{parentName:"p"},".superclass")," devuelve la clase padre de la clase. Una superclase puede ser un objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Class"),", o un objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"cs.className"),". Si la clase no tiene una clase padre, la propiedad devuelve ",(0,t.kt)("strong",{parentName:"p"},"null"),"."),(0,t.kt)("p",null,"Una superclase de clase usuario se declara en una clase utilizando la palabra clave the ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/next/Concepts/classes#class-extends-classname"}),(0,t.kt)("inlineCode",{parentName:"a"},"Class extends <superclass>")),"."),(0,t.kt)("p",null,"Esta propiedad es ",(0,t.kt)("strong",{parentName:"p"},"de s\xf3lo lectura"),"."),(0,t.kt)("h4",r({},{id:"ejemplos-1"}),"Ejemplos"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$sup:=4D.File.superclass //Document\n$sup:=4D.Document.superclass //Object\n$sup:=4D.Object.superclass //null\n\n// Si cre\xf3 una clase MyFile\n// with `Class extends File`\n$sup:=cs.MyFile.superclass //File\n\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Ver tambi\xe9n:")," ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/next/Concepts/classes#super"}),"Super")))}d.isMDXComponent=!0}}]);