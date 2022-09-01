"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61081],{3905:(e,o,n)=>{n.d(o,{Zo:()=>p,kt:()=>m});var a=n(67294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function l(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?l(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function i(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),c=function(e){var o=a.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):r(r({},o),e)),n},p=function(e){var o=c(e.components);return a.createElement(s.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},u=a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=t,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,r(r({ref:o},p),{},{components:n})):a.createElement(k,r({ref:o},p))}));function m(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in o)hasOwnProperty.call(o,s)&&(i[s]=o[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28707:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function t(){return t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},t.apply(this,arguments)}function l(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}const r={id:"components",title:"Componentes"},i=void 0,s={unversionedId:"Concepts/components",id:"version-19/Concepts/components",title:"Componentes",description:"Un componente 4D es un conjunto de m\xe9todos y formularios 4D que representan una o varias funcionalidades que pueden instalarse en diferentes aplicaciones. Por ejemplo, puede desarrollar un componente 4D de correo electr\xf3nico que gestione todos los aspectos del env\xedo, la recepci\xf3n y el almacenamiento de correos electr\xf3nicos en aplicaciones 4D.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/components.md",sourceDirName:"Concepts",slug:"/Concepts/components",permalink:"/docs/es/19/Concepts/components",draft:!1,tags:[],version:"19",frontMatter:{id:"components",title:"Componentes"},sidebar:"docs",previous:{title:"Modos interpretado y compilado",permalink:"/docs/es/19/Concepts/interpreted-compiled"},next:{title:"Plug-ins",permalink:"/docs/es/19/Concepts/plug-ins"}},c={},p=[{value:"Presentaci\xf3n",id:"presentaci\xf3n",level:2},{value:"Definiciones",id:"definiciones",level:3},{value:"Principios",id:"principios",level:3},{value:"Alcance de los comandos del lenguaje",id:"alcance-de-los-comandos-del-lenguaje",level:2},{value:"Comandos no utilizables",id:"comandos-no-utilizables",level:3},{value:"Compartir m\xe9todos proyecto",id:"compartir-m\xe9todos-proyecto",level:2},{value:"Paso de variables",id:"paso-de-variables",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Acceso a las tablas del proyecto local",id:"acceso-a-las-tablas-del-proyecto-local",level:2},{value:"Uso de tablas y campos",id:"uso-de-tablas-y-campos",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Utilizaci\xf3n de formularios",id:"utilizaci\xf3n-de-formularios",level:2},{value:"Utilizaci\xf3n de recursos",id:"utilizaci\xf3n-de-recursos",level:2},{value:"Ejecuci\xf3n del c\xf3digo de inicializaci\xf3n",id:"ejecuci\xf3n-del-c\xf3digo-de-inicializaci\xf3n",level:2},{value:"Protecci\xf3n de los componentes: compilaci\xf3n",id:"protecci\xf3n-de-los-componentes-compilaci\xf3n",level:2}],d={toc:p};function u(e){var{components:o}=e,r=l(e,["components"]);return(0,a.kt)("wrapper",t({},d,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Un componente 4D es un conjunto de m\xe9todos y formularios 4D que representan una o varias funcionalidades que pueden instalarse en diferentes aplicaciones. Por ejemplo, puede desarrollar un componente 4D de correo electr\xf3nico que gestione todos los aspectos del env\xedo, la recepci\xf3n y el almacenamiento de correos electr\xf3nicos en aplicaciones 4D."),(0,a.kt)("h2",t({},{id:"presentaci\xf3n"}),"Presentaci\xf3n"),(0,a.kt)("h3",t({},{id:"definiciones"}),"Definiciones"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Base proyecto"),": proyecto 4D utilizado para desarrollar el componente. El proyecto matriz es una base est\xe1ndar sin atributos espec\xedficos. Un proyecto matricial forma un \xfanico componente."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proyecto local"),": proyecto aplicaci\xf3n en la que se instala y utiliza un componente."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Componente"),": proyecto matricial, compilado o no, copiado en la carpeta ",(0,a.kt)("a",t({parentName:"li"},{href:"/docs/es/19/Project/architecture"}),(0,a.kt)("inlineCode",{parentName:"a"},"Components"))," de la aplicaci\xf3n local y cuyo contenido se utiliza en la aplicaci\xf3n local.")),(0,a.kt)("h3",t({},{id:"principios"}),"Principios"),(0,a.kt)("p",null,"La creaci\xf3n e instalaci\xf3n de componentes 4D se realiza directamente desde 4D. B\xe1sicamente, los componentes se gestionan como ",(0,a.kt)("a",t({parentName:"p"},{href:"/docs/es/19/Concepts/plug-ins"}),"plug-ins")," seg\xfan los siguientes principios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Un componente consiste en un archivo de proyecto 4D cl\xe1sico."),(0,a.kt)("li",{parentName:"ul"},"Para instalar un componente, basta con copiarlo en la carpeta ",(0,a.kt)("a",t({parentName:"li"},{href:"/docs/es/19/Project/architecture"}),(0,a.kt)("inlineCode",{parentName:"a"},"Components")," del proyecto"),". Puede utilizar alias o atajos."),(0,a.kt)("li",{parentName:"ul"},'Un proyecto puede ser a la vez "matriz" y "local", es decir, que un proyecto matriz puede utilizar a su vez uno o varios componentes. Sin embargo, un componente no puede utilizar "subcomponentes" por s\xed mismo.'),(0,a.kt)("li",{parentName:"ul"},"Un componente puede llamar a la mayor\xeda de los elementos de 4D: m\xe9todos proyecto, formularios proyecto, barras de men\xfa, listas de selecci\xf3n, etc. No puede llamar a los m\xe9todos base ni a los triggers."),(0,a.kt)("li",{parentName:"ul"},"No se pueden utilizar tablas o archivos de datos est\xe1ndar en los componentes 4D. Sin embargo, un componente puede crear y/o utilizar tablas, campos y archivos de datos utilizando mecanismos de bases externas. Se trata de bases 4D independientes con las que se trabaja utilizando comandos SQL."),(0,a.kt)("li",{parentName:"ul"},"Un proyecto local que se ejecuta en modo interpretado puede utilizar componentes interpretados o compilados. Un proyecto local que se ejecuta en modo compilado no puede utilizar componentes interpretados. En este caso, s\xf3lo se pueden utilizar componentes compilados.")),(0,a.kt)("h2",t({},{id:"alcance-de-los-comandos-del-lenguaje"}),"Alcance de los comandos del lenguaje"),(0,a.kt)("p",null,"A excepci\xf3n de los ",(0,a.kt)("a",t({parentName:"p"},{href:"#comandos-inutilizables"}),"comandos no utilizables"),", un componente puede utilizar cualquier comando del lenguaje 4D."),(0,a.kt)("p",null,"Cuando se llaman comandos desde un componente, se ejecutan en el contexto del componente, excepto el comando ",(0,a.kt)("inlineCode",{parentName:"p"},"EXECUTE METHOD")," o ",(0,a.kt)("inlineCode",{parentName:"p"},"EXECUTE FORMULA"),' que utilizan el contexto del m\xe9todo especificado por el comando. Tambi\xe9n hay que tener en cuenta que los comandos de lectura del tema "Usuarios y grupos" se pueden utilizar desde un componente, pero leer\xe1n los usuarios y grupos del proyecto local (un componente no tiene sus propios usuarios y grupos).'),(0,a.kt)("p",null,"Los comandos ",(0,a.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"Get database parameter")," son una excepci\xf3n: su alcance es global a la aplicaci\xf3n. Cuando estos comandos se llaman desde un componente, se aplican al proyecto de la aplicaci\xf3n local."),(0,a.kt)("p",null,"Adem\xe1s, se han especificado medidas espec\xedficas para los comandos ",(0,a.kt)("inlineCode",{parentName:"p"},"Structure file")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"Get 4D folder")," cuando se utilizan en el marco de los componentes."),(0,a.kt)("p",null,"El comando ",(0,a.kt)("inlineCode",{parentName:"p"},"COMPONENT LIST")," puede utilizarse para obtener la lista de componentes cargados por el proyecto local."),(0,a.kt)("h3",t({},{id:"comandos-no-utilizables"}),"Comandos no utilizables"),(0,a.kt)("p",null,'Los siguientes comandos no son compatibles para su uso dentro de un componente porque modifican el archivo de estructura - que est\xe1 abierto en s\xf3lo lectura. Su ejecuci\xf3n en un componente generar\xe1 el error -10511, "El comando NomComando no puede ser llamado desde un componente":'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ON EVENT CALL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Method called on event")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SET PICTURE TO LIBRARY")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REMOVE PICTURE FROM LIBRARY")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SAVE LIST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ARRAY TO LIST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EDIT FORM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CREATE USER FORM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DELETE USER FORM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CHANGE PASSWORD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EDIT ACCESS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Set group properties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Set user properties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DELETE USER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CHANGE LICENSES")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BLOB TO USERS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SET PLUGIN ACCESS"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notas:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"El comando ",(0,a.kt)("inlineCode",{parentName:"li"},"Current form table")," devuelve ",(0,a.kt)("inlineCode",{parentName:"li"},"Nil")," cuando se llama en el contexto de un formulario proyecto. Por consiguiente, no puede utilizarse en un componente."),(0,a.kt)("li",{parentName:"ul"},"Los comandos SQL de definici\xf3n de datos (",(0,a.kt)("inlineCode",{parentName:"li"},"CREATE TABLE"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"DROP TABLE"),", etc.) no pueden utilizarse en el proyecto componente. Sin embargo, se soportan con bases de datos externas (ver el comando SQL ",(0,a.kt)("inlineCode",{parentName:"li"},"CREATE DATABASE"),").")),(0,a.kt)("h2",t({},{id:"compartir-m\xe9todos-proyecto"}),"Compartir m\xe9todos proyecto"),(0,a.kt)("p",null,"Todos los m\xe9todos proyecto de un proyecto matricial son por definici\xf3n incluidos en el componente (el proyecto es el componente), lo que significa que pueden ser llamados y ejecutados por el componente."),(0,a.kt)("p",null,"Por otro lado, por defecto estos m\xe9todos proyecto no ser\xe1n visibles, y no podr\xe1n ser llamados por el proyecto local. On the other hand, by default these project methods will not be visible, and they can't be called in the host project. In the matrix project, you must explicitly designate the methods that you want to share with the host project. Estos m\xe9todos forman los ",(0,a.kt)("strong",{parentName:"p"},"puntos de entrada")," en el componente."),(0,a.kt)("p",null,"Por el contrario, por razones de seguridad, por defecto un componente no puede ejecutar m\xe9todos proyecto que pertenezcan al proyecto local. En algunos casos, puede ser necesario permitir que un componente acceda a los m\xe9todos proyecto de su proyecto local. Para ello, debe designar expl\xedcitamente qu\xe9 m\xe9todos proyecto del proyecto local quiere hacer accesibles a los componentes (en las propiedades del m\xe9todo, marque la casilla ",(0,a.kt)("strong",{parentName:"p"},"Compartido por componentes y proyecto local"),")."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(30519).Z,width:"592",height:"146"})),(0,a.kt)("p",null,"Una vez que los m\xe9todos del proyecto anfitri\xf3n est\xe1n disponibles para los componentes, se puede ejecutar un m\xe9todo anfitri\xf3n desde dentro de un componente utilizando los comandos ",(0,a.kt)("inlineCode",{parentName:"p"},"EXECUTE FORMULA")," o ",(0,a.kt)("inlineCode",{parentName:"p"},"EXECUTE METHOD"),". Por ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'// M\xe9todo local\ncomponent_method("host_method_name")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"// component_method\n C_TEXT($1)\n EXECUTE METHOD($1)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Una base local interpretada que contenga componentes interpretados puede ser compilada o verificada sint\xe1cticamente si no llama a m\xe9todos del componente interpretado. Otherwise, a warning dialog box appears when you attempt to launch the compilation or a syntax check and it will not be possible to carry out the operation. Keep in mind that an interpreted method can call a compiled method, but not the reverse, except via the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXECUTE METHOD")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EXECUTE FORMULA")," commands.")),(0,a.kt)("h2",t({},{id:"paso-de-variables"}),"Paso de variables"),(0,a.kt)("p",null,"Las variables locales, proceso e interproceso no se comparten entre los componentes y los proyectos locales. La \xfanica forma de modificar las variables del componente desde el proyecto local y viceversa es utilizando punteros."),(0,a.kt)("p",null,"Ejemplo utilizando un array:"),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"//En el proyecto local: ARRAY INTEGER( MyArray;10)\n     AMethod(-> MyArray)\n\n//En el componente, el m\xe9todo proyecto AMethod contiene:\n     APPEND TO ARRAY($1->;2)\n")),(0,a.kt)("p",null,"Ejemplos utilizando variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"C_TEXT(myvariable)\ncomponent_method1(->myvariable)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"C_POINTER($p)\n$p:=component_method2(...)\n")),(0,a.kt)("p",null,"Sin un puntero, un componente puede seguir accediendo al valor de una variable de la base local (pero no a la propia variable) y viceversa:"),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'//En la base local\nC_TEXT($input_t)\n$input_t:="DoSomething"\ncomponent_method($input_t)\n// component_method obtiene "DoSomething" en $1 (pero no la variable $input_t)\n')),(0,a.kt)("p",null,"Cuando se utilizan punteros para que los componentes y el proyecto local se comuniquen, hay que tener en cuenta las siguientes particularidades:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"El comando ",(0,a.kt)("inlineCode",{parentName:"p"},"Get pointer")," no devolver\xe1 un puntero a una variable del proyecto local si se llama desde un componente y viceversa.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"La arquitectura de componentes permite la coexistencia, dentro del mismo proyecto interpretado, de componentes interpretados y compilados (a la inversa, en un proyecto compilado s\xf3lo pueden utilizarse componentes compilados). Para utilizar punteros en este caso, debe respetar el siguiente principio: el int\xe9rprete puede desanclar un puntero construido en modo compilado; sin embargo, en modo compilado, no puede desanclar un puntero construido en modo interpretado. Ilustremos este principio con el siguiente ejemplo: dados dos componentes, C (compilado) e I (interpretado), instalados en el mismo proyecto local.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Si el componente C define la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"myCvar"),", el componente I puede acceder al valor de esta variable utilizando el puntero ",(0,a.kt)("inlineCode",{parentName:"p"},"->myCvar"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Si el componente C define la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"myIvar"),", el componente C no puede acceder a esta variable utilizando el puntero ",(0,a.kt)("inlineCode",{parentName:"p"},"->myIvar"),". Esta sintaxis provoca un error de ejecuci\xf3n.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"La comparaci\xf3n de punteros utilizando el comando ",(0,a.kt)("inlineCode",{parentName:"p"},"RESOLVE POINTER")," no se recomienda con los componentes, ya que el principio de partici\xf3n de variables permite la coexistencia de variables con el mismo nombre pero con contenidos radicalmente diferentes en un componente y en el proyecto local (u otro componente). El tipo de la variable puede incluso ser diferente en ambos contextos. Si los punteros ",(0,a.kt)("inlineCode",{parentName:"p"},"myptr1")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"myptr2")," apuntan cada uno a una variable, la siguiente comparaci\xf3n producir\xe1 un resultado incorrecto:"))),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)\n     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)\n     If(vVarName1=vVarName2)\n      //Esta prueba devuelve True aunque las variables sean diferentes\n")),(0,a.kt)("p",null,"En este caso, es necesario utilizar la comparaci\xf3n de punteros:"),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"     If(myptr1=myptr2) //Esta prueba devuelve False\n")),(0,a.kt)("h2",t({},{id:"gesti\xf3n-de-errores"}),"Gesti\xf3n de errores"),(0,a.kt)("p",null,"Un ",(0,a.kt)("a",t({parentName:"p"},{href:"/docs/es/19/Concepts/error-handling"}),"m\xe9todo de gesti\xf3n de errores")," instalado por el comando ",(0,a.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," s\xf3lo se aplica a la aplicaci\xf3n en ejecuci\xf3n. En el caso de un error generado por un componente, no se llama al m\xe9todo de gesti\xf3n de errores ",(0,a.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," del proyecto local, y viceversa."),(0,a.kt)("h2",t({},{id:"acceso-a-las-tablas-del-proyecto-local"}),"Acceso a las tablas del proyecto local"),(0,a.kt)("p",null,"Aunque los componentes no pueden utilizar tablas, los punteros pueden permitir que los proyectos locales y los componentes se comuniquen entre s\xed. Por ejemplo, este es un m\xe9todo que podr\xeda ser llamado desde un componente:"),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'// llamar a un m\xe9todo componente\nmethCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")\n')),(0,a.kt)("p",null,"Dentro del componente, el c\xf3digo del m\xe9todo ",(0,a.kt)("inlineCode",{parentName:"p"},"methCreateRec"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"C_POINTER($1) //Puntero a una tabla del proyecto local\nC_POINTER($2) //Puntero a un campo del proyecto local\nC_TEXT($3) // Valor a insertar\n\n$tablepointer:=$1\n$fieldpointer:=$2\nCREATE RECORD($tablepointer->)\n\n$fieldpointer->:=$3\nSAVE RECORD($tablepointer->)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"En el contexto de un componente, 4D asume que una referencia a un formulario tabla es una referencia al formulario tabla local (ya que los componentes no pueden tener tablas.)")),(0,a.kt)("h2",t({},{id:"uso-de-tablas-y-campos"}),"Uso de tablas y campos"),(0,a.kt)("p",null,"Un componente no puede utilizar las tablas y campos definidos en la estructura 4D del proyecto matriz. Sin embargo, puede crear y utilizar bases externas, y luego utilizar sus tablas y campos seg\xfan sus necesidades. Puede crear y gestionar bases externas utilizando SQL. Sin embargo, puede crear y utilizar bases externas, y luego utilizar sus tablas y campos seg\xfan sus necesidades. Utilizar una base externa significa designar temporalmente esta base como base actual, es decir, como la base de destino para las consultas SQL ejecutadas por 4D. Las bases externas se crean con el comando SQL ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE"),"."),(0,a.kt)("h3",t({},{id:"ejemplo"}),"Ejemplo"),(0,a.kt)("p",null,"El siguiente c\xf3digo se incluye en un componente y realiza tres acciones b\xe1sicas con una base de datos externa:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"creaci\xf3n de la base de datos externa si a\xfan no existe,"),(0,a.kt)("li",{parentName:"ul"},"a\xf1ade datos a la base de datos externa,"),(0,a.kt)("li",{parentName:"ul"},"lectura de datos desde la base de datos externa.")),(0,a.kt)("p",null,"Creaci\xf3n de la base de datos externa:"),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'<>MyDatabase:=Get 4D folder+"\\MyDB" // (Windows) almacena los datos en un directorio autorizado\n Begin SQL\n        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];\n        USE DATABASE DATAFILE :[<>MyDatabase];\n        CREATE TABLE IF NOT EXISTS KEEPIT\n        (\n        ID INT32 PRIMARY KEY,\n        kind VARCHAR,\n        name VARCHAR,\n        code TEXT,\n        sort_order INT32\n        );\n\n        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n')),(0,a.kt)("p",null,"Escritura en la base de datos externa:"),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"})," $Ptr_1:=$2 // recupera datos del proyecto local mediante punteros\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n Begin SQL\n\n        USE DATABASE DATAFILE :[<>MyDatabase];\n\n        INSERT INTO KEEPIT\n        (ID, kind, name, code, sort_order)\n        VALUES\n        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n")),(0,a.kt)("p",null,"Lectura en una base de datos externa:"),(0,a.kt)("pre",null,(0,a.kt)("code",t({parentName:"pre"},{className:"language-4d"})," $Ptr_1:=$2 // accede a los datos del proyecto local a trav\xe9s de punteros\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n\n Begin SQL\n\n    USE DATABASE DATAFILE :[<>MyDatabase];\n\n    SELECT ALL ID, kind, name, code, sort_order\n    FROM KEEPIT\n    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;\n\n    USE DATABASE SQL_INTERNAL;\n\n End SQL\n")),(0,a.kt)("h2",t({},{id:"utilizaci\xf3n-de-formularios"}),"Utilizaci\xf3n de formularios"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'S\xf3lo los "formularios de proyecto" (formularios que no est\xe1n asociados a ninguna tabla espec\xedfica) pueden utilizarse en un componente. S\xf3lo los "formularios de proyecto" (formularios que no est\xe1n asociados a ninguna tabla espec\xedfica) pueden utilizarse en un componente.'),(0,a.kt)("li",{parentName:"ul"},"Un componente puede llamar a formularios tabla del proyecto local. Tenga en cuenta que en este caso es necesario utilizar punteros en lugar de nombres de tablas entre par\xe9ntesis [] para especificar los formularios en el c\xf3digo del componente.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si un componente utiliza el comando ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD RECORD"),", se mostrar\xe1 el formulario de entrada actual del proyecto local, en el contexto del proyecto local. Por consiguiente, si el formulario incluye variables, el componente no tendr\xe1 acceso a ellas.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Puede publicar formularios de componentes como subformularios en los proyectos locales. Esto significa que puede, m\xe1s concretamente, desarrollar componentes que ofrezcan objetos gr\xe1ficos. Por ejemplo, los Widgets que ofrece 4D se basan en el uso de subformularios en los componentes.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"En el contexto de un componente, cualquier formulario de proyecto referenciado debe pertenecer al componente. Por ejemplo, dentro de un componente, hacer referencia a un formulario proyecto local utilizando ",(0,a.kt)("inlineCode",{parentName:"p"},"DIALOG")," u ",(0,a.kt)("inlineCode",{parentName:"p"},"Open form window")," arrojar\xe1 un error.")),(0,a.kt)("h2",t({},{id:"utilizaci\xf3n-de-recursos"}),"Utilizaci\xf3n de recursos"),(0,a.kt)("p",null,"Los componentes pueden utilizar recursos situados en la carpeta Resources del componente."),(0,a.kt)("p",null,"Los mecanismos autom\xe1ticos son operacionales: los archivos XLIFF encontrados en la carpeta Resources de un componente ser\xe1n cargados por este componente."),(0,a.kt)("p",null,'En un proyecto local que contiene uno o m\xe1s componentes, cada componente, as\xed como los proyectos locales, tiene su propia "cadena de recursos." Los recursos est\xe1n divididos entre las diferentes proyectos: no es posible acceder a los recursos del componente A desde el componente B o desde el proyecto local.'),(0,a.kt)("h2",t({},{id:"ejecuci\xf3n-del-c\xf3digo-de-inicializaci\xf3n"}),"Ejecuci\xf3n del c\xf3digo de inicializaci\xf3n"),(0,a.kt)("p",null,"Un componente puede ejecutar autom\xe1ticamente c\xf3digo 4D al abrir o cerrar la base local, por ejemplo para cargar y/o guardar las preferencias o los estados usuario relacionados con el funcionamiento de la base local."),(0,a.kt)("p",null,"La ejecuci\xf3n del c\xf3digo de inicializaci\xf3n o cierre se realiza mediante el m\xe9todo base ",(0,a.kt)("inlineCode",{parentName:"p"},"On Host Database Event"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Por razones de seguridad, debe autorizar expl\xedcitamente la ejecuci\xf3n del m\xe9todo base ",(0,a.kt)("inlineCode",{parentName:"p"},"On Host Database Event")," en la base local para poder llamarlo. For security reasons, you must explicitly authorize the execution of the ",(0,a.kt)("inlineCode",{parentName:"p"},"On Host Database Event")," database method in the host database in order to be able to call it.")),(0,a.kt)("h2",t({},{id:"protecci\xf3n-de-los-componentes-compilaci\xf3n"}),"Protecci\xf3n de los componentes: compilaci\xf3n"),(0,a.kt)("p",null,"Por defecto, todos los m\xe9todos proyecto de un proyecto matriz instalado como componente son potencialmente visibles desde el proyecto local. En particular:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Los m\xe9todos proyecto compartido se encuentran en la P\xe1gina M\xe9todos del Explorador y pueden ser llamados en los m\xe9todos del proyecto local. Su contenido puede ser seleccionado y copiado en el \xe1rea de vista previa del Explorador. Tambi\xe9n se pueden ver en el depurador. Sin embargo, no es posible abrirlos en el editor de m\xe9todos o modificarlos."),(0,a.kt)("li",{parentName:"ul"},"Los otros m\xe9todos proyecto del proyecto matriz no aparecen en el Explorador, pero tambi\xe9n pueden verse en el depurador del proyecto local.")),(0,a.kt)("p",null,"Para proteger eficazmente los m\xe9todos proyecto de un componente, basta con compilar el proyecto de la matriz y entregarlo en forma de archivo .4dz. Cuando se instala un proyecto matricial compilado como un componente:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Los m\xe9todos proyecto compartidos se muestran en la P\xe1gina M\xe9todos del Explorador y pueden ser llamados en los m\xe9todos del proyecto local. Sin embargo, su contenido no aparecer\xe1 en el \xe1rea de vista previa ni en el depurador."),(0,a.kt)("li",{parentName:"ul"},"Los otros m\xe9todos proyecto del proyecto matriz nunca aparecer\xe1n.")))}u.isMDXComponent=!0},30519:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/pict516563.en-686ce2897139b168aeb17276e04b4265.png"}}]);