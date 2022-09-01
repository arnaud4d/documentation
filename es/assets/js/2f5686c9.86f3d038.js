"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>d});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,u=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?l.createElement(u,o(o({ref:t},b),{},{components:n})):l.createElement(u,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>b});n(67294);var l=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"BlobClass",title:"Blob"},i=void 0,p={unversionedId:"API/BlobClass",id:"API/BlobClass",title:"Blob",description:"La clase Blob permite crear y manipular los blob objects (4D.Blob).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/API/BlobClass.md",sourceDirName:"API",slug:"/API/BlobClass",permalink:"/docs/es/next/API/BlobClass",draft:!1,tags:[],version:"current",frontMatter:{id:"BlobClass",title:"Blob"},sidebar:"docs",previous:{title:"Generalidades - API de clases",permalink:"/docs/es/next/API/overview"},next:{title:"Class",permalink:"/docs/es/next/API/ClassClass"}},s={},b=[{value:"Resumen",id:"resumen",level:3},{value:"4D.Blob.new()",id:"4dblobnew",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".size",id:"size",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".slice()",id:"slice",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:"Ejemplo",id:"ejemplo",level:4}],c={toc:b};function m(e){var{components:t}=e,n=r(e,["components"]);return(0,l.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"La clase Blob permite crear y manipular los ",(0,l.kt)("a",a({parentName:"p"},{href:"/docs/es/next/Concepts/blob#blob-types"}),"blob objects")," (",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob"),")."),(0,l.kt)("h3",a({},{id:"resumen"}),"Resumen"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:null}))))),(0,l.kt)("p",null,"| ",(0,l.kt)("a",a({parentName:"p"},{href:"#4dblobnew"}),(0,l.kt)("strong",{parentName:"a"},"4D.Blob.new()")," : 4D.Blob",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"a"},"4D.Blob.new"),"( ",(0,l.kt)("em",{parentName:"a"},"blobScal")," : Blob ) : 4D.Blob",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"a"},"4D.Blob.new"),"( ",(0,l.kt)("em",{parentName:"a"},"blobObj")," : 4D.Blob ) : 4D.Blob"),"\xa0","\xa0","\xa0","\xa0","crea un nuevo objeto ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," encapsulando opcionalmente una copia de los datos de otro blob (blob escalar o ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob"),")|\n| ",(0,l.kt)("a",a({parentName:"p"},{href:"#size"}),(0,l.kt)("strong",{parentName:"a"},".size")," : Real"),"\xa0","\xa0","\xa0","\xa0","devuelve el tama\xf1o de un ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob"),", expresado en bytes.|\n| ",(0,l.kt)("a",a({parentName:"p"},{href:"#slice"}),(0,l.kt)("strong",{parentName:"a"},".slice()")," : 4D.Blob",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"a"},".slice"),"( ",(0,l.kt)("em",{parentName:"a"},"start")," : Real ) : 4D.Blob",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"a"},".slice"),"( ",(0,l.kt)("em",{parentName:"a"},"start")," : Real; ",(0,l.kt)("em",{parentName:"a"},"end")," : Real ) : 4D.Blob"),"\xa0","\xa0","\xa0","\xa0"," crea y devuelve un ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," que hace referencia a los datos de un subconjunto del blob en el que se llama. El blob original no se altera.|"),(0,l.kt)("h2",a({},{id:"4dblobnew"}),"4D.Blob.new()"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Hist\xf3rico"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Modificaciones"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"v19 R2"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4D.Blob.new()")," : 4D.Blob",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"p"},"4D.Blob.new"),"( ",(0,l.kt)("em",{parentName:"p"},"blobScal")," : Blob ) : 4D.Blob",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"p"},"4D.Blob.new"),"( ",(0,l.kt)("em",{parentName:"p"},"blobObj")," : 4D.Blob ) : 4D.Blob"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"})),(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"blob"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Blob o 4D.Blob"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"->"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Blob a copiar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Result"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"4D.Blob"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"<-"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Nuevo 4D.Blob")))),(0,l.kt)("p",null,"|"),(0,l.kt)("h4",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"4D. Blob.new")," crea un nuevo objeto ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," encapsulando opcionalmente una copia de los datos de otro blob (blob escalar o ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob"),")."),(0,l.kt)("p",null,"Si el par\xe1metro ",(0,l.kt)("inlineCode",{parentName:"p"},"blob")," se omite, el m\xe9todo devuelve un 4D.Blob vac\xedo."),(0,l.kt)("h2",a({},{id:"size"}),".size"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".size")," : Real"),(0,l.kt)("h4",a({},{id:"descripci\xf3n-1"}),"Descripci\xf3n"),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},".size")," devuelve el tama\xf1o de un ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob"),", expresado en bytes."),(0,l.kt)("h2",a({},{id:"slice"}),".slice()"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Hist\xf3rico"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Modificaciones"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"v19 R2"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".slice()")," : 4D.Blob",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"p"},".slice"),"( ",(0,l.kt)("em",{parentName:"p"},"start")," : Real ) : 4D.Blob",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"p"},".slice"),"( ",(0,l.kt)("em",{parentName:"p"},"start")," : Real; ",(0,l.kt)("em",{parentName:"p"},"end")," : Real ) : 4D.Blob\n| Par\xe1metros | Type    |    | Descripci\xf3n                                                     |\n| ---------- | ------- |:--:| --------------------------------------------------------------- |\n| start      | Real    | -> | \xedndice del primer byte a incluir en el nuevo ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob"),".         |\n| end        | Real    | -> | \xedndice del primer byte que no se incluir\xe1 en el nuevo ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," |\n| Result     | 4D.Blob | <- | Nuevo ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob"),"|\n|"),(0,l.kt)("h4",a({},{id:"descripci\xf3n-2"}),"Descripci\xf3n"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".slice()"),"  crea y devuelve un ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," que hace referencia a los datos de un subconjunto del blob en el que se llama. El blob original no se altera.\nEl par\xe1metro ",(0,l.kt)("inlineCode",{parentName:"p"},"start")," es un \xedndice en el blob que indica el primer byte a incluir en el nuevo ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob"),". Si indica un valor negativo, 4D lo trata como un desplazamiento desde el final del blob hacia el inicio. Por ejemplo, -10 ser\xeda el d\xe9cimo desde el \xfaltimo byte del blob. El valor por defecto es 0. Si indica un valor de inicio mayor al tama\xf1o del blob fuente, el tama\xf1o del ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," devuelto es 0, y no contiene datos."),(0,l.kt)("p",null,"El par\xe1metro ",(0,l.kt)("inlineCode",{parentName:"p"},"end")," es un \xedndice en el blob que indica el primer byte que no se incluir\xe1 en el nuevo ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Blob")," (es decir, el byte situado exactamente en este \xedndice no se incluye). Si indica un valor negativo, 4D lo trata como un desplazamiento desde el final del blob hacia el inicio. Por ejemplo, -10 ser\xeda el d\xe9cimo desde el \xfaltimo byte del blob. El valor por defecto es el tama\xf1o del blob."),(0,l.kt)("h4",a({},{id:"ejemplo"}),"Ejemplo"),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $myBlob : 4D.Blob\n\n// Store text in a 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   //True\n\n$myString:=Convert to text($myBlob; "UTF-8")\n// $myString contains "Hello, World!"\n\n// Create a new 4D.Blob from $myBlob\n$myNewBlob:=$myBlob.slice(0; 5)\n\n$myString:=Convert to text($myNewBlob; "UTF-8")\n// $myString contains "Hello"\n\n// Crear un nuevo 4D.Blob a partir de $myBlob\n$myNewBlob:=$myBlob.slice(0; 5)\n\n$myString:=Convert to text($myNewBlob; "UTF-8")\n// $myString contiene "Hello"\n')))}m.isMDXComponent=!0}}]);