"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),c=n,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={id:"filter",title:"$filter"},i=void 0,p={unversionedId:"REST/filter",id:"version-19-R6/REST/filter",title:"$filter",description:"Permite consultar los datos de una clase de datos o de un m\xe9todo (p. ej., $filter=\"firstName!='' AND salary>30000\")",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/REST/$filter.md",sourceDirName:"REST",slug:"/REST/filter",permalink:"/documentation/es/docs/REST/filter",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"filter",title:"$filter"},sidebar:"docs",previous:{title:"$expand",permalink:"/documentation/es/docs/REST/expand"},next:{title:"$imageformat",permalink:"/documentation/es/docs/REST/imageformat"}},s={},u=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Utilizar un filtro simple",id:"utilizar-un-filtro-simple",level:3},{value:"Utilizar un filtro complejo",id:"utilizar-un-filtro-complejo",level:3},{value:"Utilizar la propiedad params",id:"utilizar-la-propiedad-params",level:3},{value:"Atributo",id:"atributo",level:2},{value:"Comparador",id:"comparador",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],m={toc:u};function d(e){var{components:t}=e,r=l(e,["components"]);return(0,a.kt)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Permite consultar los datos de una clase de datos o de un m\xe9todo ",(0,a.kt)("em",{parentName:"p"},"(p. ej."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$filter=\"firstName!='' AND salary>30000\""),")"),(0,a.kt)("h2",n({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,a.kt)("p",null,"Este par\xe1metro le permite definir el filtro para su clase de datos o m\xe9todo."),(0,a.kt)("h3",n({},{id:"utilizar-un-filtro-simple"}),"Utilizar un filtro simple"),(0,a.kt)("p",null,"Un filtro se compone de los siguientes elementos:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribute} {comparator} {value}")),(0,a.kt)("p",null,"Por ejemplo: ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john"')," donde ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," es el ",(0,a.kt)("strong",{parentName:"p"},"atributo"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," es el ",(0,a.kt)("strong",{parentName:"p"},"comparador")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"john")," es el ",(0,a.kt)("strong",{parentName:"p"},"valor"),"."),(0,a.kt)("h3",n({},{id:"utilizar-un-filtro-complejo"}),"Utilizar un filtro complejo"),(0,a.kt)("p",null,"Un filtro m\xe1s compejo se compone de los siguientes elementos, que unen dos consultas:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}")),(0,a.kt)("p",null,"Por ejemplo: ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john AND salary>20000"')," donde ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"salary")," son atributos de la clase de datos Employee."),(0,a.kt)("h3",n({},{id:"utilizar-la-propiedad-params"}),"Utilizar la propiedad params"),(0,a.kt)("p",null,"Tambi\xe9n puede utilizar la propiedad params de 4D."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='",'["{value1}","{value2}"]',"\"'")),(0,a.kt)("p",null,"Por ejemplo: ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\'')," donde firstName y salary son los atributos de la clase de datos Employee."),(0,a.kt)("p",null,"Para m\xe1s informaci\xf3n sobre c\xf3mo consultar los datos en 4D, consulte la ",(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html"}),"dataClass.query()")," documentaci\xf3n."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Al insertar comillas (') o comillas dobles (\"), debe escaparlas utilizando su c\xf3digo de caracteres:"),(0,a.kt)("li",null,"Comillas ('): \\u0027"),(0,a.kt)("li",null,'Comillas dobles ("): \\u0022'),(0,a.kt)("p",{parentName:"blockquote"},"Por ejemplo, se puede escribir lo siguiente al pasar un valor con una comilla cuando se utiliza la propiedad ",(0,a.kt)("em",{parentName:"p"},"params"),":",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\'')),(0,a.kt)("p",{parentName:"blockquote"},"If you pass the value directly, you can write the following: ",(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'))),(0,a.kt)("h2",n({},{id:"atributo"}),"Atributo"),(0,a.kt)("p",null,"Si el atributo est\xe1 en la misma clase de datos, puede pasarlo directamente (",(0,a.kt)("em",{parentName:"p"},"p. ej."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName"),"). Sin embargo, si quiere consultar otra clase de datos, debe incluir el nombre del atributo relacional y el nombre del atributo, es decir, la ruta de acceso (",(0,a.kt)("em",{parentName:"p"},"por ejemplo"),", nombre.empleador). El nombre del atributo distingue entre may\xfasculas y min\xfasculas (",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," no es igual a ",(0,a.kt)("inlineCode",{parentName:"p"},"FirstName"),")."),(0,a.kt)("p",null,'Tambi\xe9n puede consultar los atributos de tipo Object utilizando la anotaci\xf3n de puntos. Por ejemplo, si tiene un atributo cuyo nombre es "objAttributo" con la siguiente estructura:'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),'{\n    prop1: "this is my first property",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n')),(0,a.kt)("p",null,"Puede buscar en el objeto escribiendo lo siguiente:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?filter="objAttribute.prop2 == 9181"')),(0,a.kt)("h2",n({},{id:"comparador"}),"Comparador"),(0,a.kt)("p",null,"El comparador debe ser uno de los siguientes valores:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Comparador"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"igual a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"!="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"diferente de")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),">"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"mayor que")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),">="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"mayor o igual que")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"<"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"menor que")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"<="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"menor o igual que")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"begin"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"comienza con")))),(0,a.kt)("h2",n({},{id:"ejemplos"}),"Ejemplos"),(0,a.kt)("p",null,'En el siguiente ejemplo, buscamos a todos los empleados cuyo apellido empieza por "j":'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),' GET  /rest/Employee?$filter="lastName begin j"\n')),(0,a.kt)("p",null,"En este ejemplo, buscamos en la clase de datos Empleado todos los empleados cuyo salario sea superior a 20.000 y que no trabajen para una empresa llamada Acme:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n')),(0,a.kt)("p",null,"En este ejemplo, buscamos en la clase de datos Person todas las personas cuya propiedad n\xfamero en el atributo anotherobj de tipo Object es mayor que 50:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n')))}d.isMDXComponent=!0}}]);