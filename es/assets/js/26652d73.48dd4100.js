"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44628],{3905:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>m});var t=o(67294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function l(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?l(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)o=l[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)o=l[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=t.createContext({}),b=function(e){var a=t.useContext(i),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},p=function(e){var a=b(e.components);return t.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=b(o),m=n,u=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return o?t.createElement(u,r(r({ref:a},p),{},{components:o})):t.createElement(u,r({ref:a},p))}));function m(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=o.length,r=new Array(l);r[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var b=2;b<l;b++)r[b]=o[b];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},53801:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>b,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});o(67294);var t=o(3905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},n.apply(this,arguments)}function l(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)o=l[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)o=l[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const r={id:"blob",title:"BLOB"},s=void 0,i={unversionedId:"Concepts/blob",id:"version-19-R6/Concepts/blob",title:"BLOB",description:"Un campo, variable o expresi\xf3n BLOB (Binary Large OBject) es una serie contigua de bytes que puede ser tratada como un objeto completo o cuyos bytes pueden ser direccionados individualmente.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/docs/es/Concepts/blob",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"Tipos de datos",permalink:"/docs/es/Concepts/data-types"},next:{title:"Boolean",permalink:"/docs/es/Concepts/boolean"}},b={},p=[{value:"Tipos Blob",id:"tipos-blob",level:2},{value:"Verificar si una variable contiene un blob escalar o un <code>4D.Blob</code>",id:"verificar-si-una-variable-contiene-un-blob-escalar-o-un-4dblob",level:2},{value:"Pasar blobs como par\xe1metros",id:"pasar-blobs-como-par\xe1metros",level:2},{value:"Pasar blobs y objetos blob a los comandos 4D",id:"pasar-blobs-y-objetos-blob-a-los-comandos-4d",level:3},{value:"Pasar blobs y objetos blob a los m\xe9todos",id:"pasar-blobs-y-objetos-blob-a-los-m\xe9todos",level:3},{value:"Pasar un blob escalar por referencia usando un puntero",id:"pasar-un-blob-escalar-por-referencia-usando-un-puntero",level:3},{value:"Asignar una variable Blob a otra",id:"asignar-una-variable-blob-a-otra",level:2},{value:"Conversi\xf3n autom\xe1tica del tipo blob",id:"conversi\xf3n-autom\xe1tica-del-tipo-blob",level:2},{value:"Modificaci\xf3n de un blob escalar",id:"modificaci\xf3n-de-un-blob-escalar",level:2},{value:"Acceder individualmente a los bytes de un blob",id:"acceder-individualmente-a-los-bytes-de-un-blob",level:2},{value:"Acceder a los bytes de un blob escalar",id:"acceder-a-los-bytes-de-un-blob-escalar",level:4},{value:"Acceder a los bytes de un <code>4D.Blob</code>",id:"acceder-a-los-bytes-de-un-4dblob",level:4}],d={toc:p};function c(e){var{components:a}=e,o=l(e,["components"]);return(0,t.kt)("wrapper",n({},d,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Un campo, variable o expresi\xf3n BLOB (Binary Large OBject) es una serie contigua de bytes que puede ser tratada como un objeto completo o cuyos bytes pueden ser direccionados individualmente."),(0,t.kt)("p",null,"Un blob se carga en la memoria en su totalidad. Una variable blob se mantiene y existe s\xf3lo en la memoria. Un campo blob se carga en memoria desde el disco, como el resto del registro al que pertenece."),(0,t.kt)("p",null,"Al igual que otros tipos de campo que pueden retener una gran cantidad de datos (como el tipo de campo Imagen), los campos blob no se duplican en la memoria cuando se modifica un registro. Por consiguiente, el resultado devuelto por los comandos ",(0,t.kt)("inlineCode",{parentName:"p"},"Old")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"Modified")," no es significativo cuando se aplica a un campo blob."),(0,t.kt)("h2",n({},{id:"tipos-blob"}),"Tipos Blob"),(0,t.kt)("p",null,"Utilizando el lenguaje 4D, hay dos maneras de manipular un blob:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"como un valor escalar"),": un blob puede ser almacenado en una variable o un campo Blob y puede ser modificado."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"como un objeto (",(0,t.kt)("inlineCode",{parentName:"strong"},"4D.Blob"),")"),": un ",(0,t.kt)("inlineCode",{parentName:"li"},"4D.Blob")," es un objeto blob. Puede encapsular un blob o una parte de \xe9l en un ",(0,t.kt)("inlineCode",{parentName:"li"},"4D.Blob")," sin alterar el bloque original. Este m\xe9todo se llama ",(0,t.kt)("a",n({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing"}),"boxing"),". Para m\xe1s informaci\xf3n sobre c\xf3mo instanciar un ",(0,t.kt)("inlineCode",{parentName:"li"},"4D.Blob"),", vea ",(0,t.kt)("a",n({parentName:"li"},{href:"/docs/es/API/BlobClass"}),"Blob Class"),".")),(0,t.kt)("p",null,"Cada tipo de blob tiene sus ventajas. Utilice la siguiente tabla para determinar cu\xe1l se ajusta a sus necesidades:"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",n({parentName:"tr"},{align:null})),(0,t.kt)("th",n({parentName:"tr"},{align:"center"}),"Blob"),(0,t.kt)("th",n({parentName:"tr"},{align:"center"}),"4D.Blob"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Alterable"),(0,t.kt)("td",n({parentName:"tr"},{align:"center"}),"S\xed"),(0,t.kt)("td",n({parentName:"tr"},{align:"center"}),"No")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Compartible en objetos y colecciones"),(0,t.kt)("td",n({parentName:"tr"},{align:"center"}),"No"),(0,t.kt)("td",n({parentName:"tr"},{align:"center"}),"S\xed")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Pasado por referencia","*"),(0,t.kt)("td",n({parentName:"tr"},{align:"center"}),"No"),(0,t.kt)("td",n({parentName:"tr"},{align:"center"}),"S\xed")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Rendimiento al acceder a los bytes"),(0,t.kt)("td",n({parentName:"tr"},{align:"center"}),"+"),(0,t.kt)("td",n({parentName:"tr"},{align:"center"}),"-")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Tama\xf1o m\xe1ximo"),(0,t.kt)("td",n({parentName:"tr"},{align:"center"}),"2GB"),(0,t.kt)("td",n({parentName:"tr"},{align:"center"}),"Memoria")))),(0,t.kt)("p",null,"Tenga en cuenta que a diferencia de los objetos blob, que son pasados por referencia, los blobs escalares se duplican en la memoria cuando se pasan a los m\xe9todos. Puede pasar blobs y objetos blob (",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob"),") a los m\xe9todos."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Por defecto, 4D define el tama\xf1o m\xe1ximo de los blobs escalares en 2GB, pero este l\xedmite de tama\xf1o puede ser menor dependiendo de su sistema operativo y del espacio disponible.")),(0,t.kt)("p",null,"No se pueden utilizar operadores en los blobs."),(0,t.kt)("h2",n({},{id:"verificar-si-una-variable-contiene-un-blob-escalar-o-un-4dblob"}),"Verificar si una variable contiene un blob escalar o un ",(0,t.kt)("inlineCode",{parentName:"h2"},"4D.Blob")),(0,t.kt)("p",null,"Utilice el comando ",(0,t.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1509.html"}),"Value type")," para determinar si un valor es de tipo Blob u Objeto. Para verificar que un objeto es un objeto blob (",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob"),"), utilice ",(0,t.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1731.html"}),"instancia OB de"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"var $myBlob: Blob\nvar $myBlobObject: 4D.Blob\n$myBlobObject:=4D.Blob.new()\n\n$type:= Value type($myblobObject) // 38 (object)\n$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  //True\n")),(0,t.kt)("h2",n({},{id:"pasar-blobs-como-par\xe1metros"}),"Pasar blobs como par\xe1metros"),(0,t.kt)("p",null,"Los bloques escalares y los objetos blob pueden pasarse como par\xe1metros a los comandos 4D o a las rutinas de plug-in que esperan par\xe1metros blob."),(0,t.kt)("h3",n({},{id:"pasar-blobs-y-objetos-blob-a-los-comandos-4d"}),"Pasar blobs y objetos blob a los comandos 4D"),(0,t.kt)("p",null,"Puede pasar un blob escalar o un ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob")," a todo comando 4D que tome un blob como par\xe1metro:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text( $myBlob ; UTF8 text without length )\n')),(0,t.kt)("p",null,"Algunos comandos 4D modifican el blob, y por lo tanto no soportan el tipo ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page560.html"}),"DELETE FROM BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page559.html"}),"INSERT IN BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page548.html"}),"INTEGER TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page550.html"}),"LONGINT TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page552.html"}),"REAL TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page606.html"}),"SET BLOB SIZE")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page554.html"}),"TEXT TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page532.html"}),"VARIABLE TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page556.html"}),"LIST TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page782.html"}),"SOAP DECLARATION")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page777.html"}),"WEB SERVICE SET PARAMETER"))),(0,t.kt)("h3",n({},{id:"pasar-blobs-y-objetos-blob-a-los-m\xe9todos"}),"Pasar blobs y objetos blob a los m\xe9todos"),(0,t.kt)("p",null,"Al trabajar con m\xe9todos, usar objetos blob (",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob"),") es m\xe1s eficiente, ya que son pasados por referencia. Tenga en cuenta que a diferencia de los objetos blob, que son pasados por referencia, los blobs escalares se duplican en la memoria cuando se pasan a los m\xe9todos."),(0,t.kt)("h3",n({},{id:"pasar-un-blob-escalar-por-referencia-usando-un-puntero"}),"Pasar un blob escalar por referencia usando un puntero"),(0,t.kt)("p",null,"Pasar un blob escalar a sus propios m\xe9todos sin duplicarlo en memoria, defina un puntero a la variable que lo almacena y pase el puntero como par\xe1metro."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Ejemplos:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"// Declarar una variable de tipo Blob\nvar $myBlobVar: Blob\n// Pasar el blob como par\xe1metro a un comando 4D\n SET BLOB SIZE($myBlobVar; 024*1024)\n")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"// Pasar el blob como par\xe1metro a una rutina externa\n $errCode:=Hacer algo con este blob($myBlobVar)\n")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"// Pasar el blob como un par\xe1metro a un m\xe9todo que devuelve un blob\n var $retrieveBlob: Blob\n retrieveBlob:=Fill_Blob($myBlobVar)\n")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"// Pasa un puntero al blob como par\xe1metro a su propio m\xe9todo,\nCOMPUTE BLOB(->$myBlobVar)\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Nota para los desarrolladores de plugins:"),' un par\xe1metro BLOB se declara como "&O" (la letra "O", no el d\xedgito "0").'),(0,t.kt)("h2",n({},{id:"asignar-una-variable-blob-a-otra"}),"Asignar una variable Blob a otra"),(0,t.kt)("p",null,"Puede asignar una variable Blob a otra:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Ejemplo:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"// Declarar dos variables de tipo Blob\n var $vBlobA; $vBlobB : Blob\n// Establecer el tama\xf1o del primer blob en 10K\n SET BLOB SIZE($vBlobA; 0*1024)\n// Asignar el primer blob al segundo\n $vBlobB:=$vBlobA\n")),(0,t.kt)("h2",n({},{id:"conversi\xf3n-autom\xe1tica-del-tipo-blob"}),"Conversi\xf3n autom\xe1tica del tipo blob"),(0,t.kt)("p",null,"4D convierte autom\xe1ticamente los blobs escalares a objetos blob y viceversa, cuando se les asigna uno al otro. Por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'// Crear una variable de tipo Blob y una variable objeto\nvar $myBlob: Blob\nvar $myObject : Objeto\n\n// Asignar ese blob a una propiedad de $myObject llamada "blob"\n$myObject:=New object("blob"; $myBlob)\n\n// El blob almacenado en $myBlob se convierte autom\xe1ticamente en un 4D.Blob\n$type:= OB Instance of($myObject.blob; 4D.Blob) //True\n\n// Conversi\xf3n de un 4D.Blob en Blob\n$myBlob:= $myObject.blob\n$type:= Value type($myBlob) // Blob\n')),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Al convertir un ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob")," a un blob escalar, si el tama\xf1o del ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob")," excede el tama\xf1o m\xe1ximo para los blobs escalares, el blob escalar resultante est\xe1 vac\xedo. Por ejemplo, cuando el tama\xf1o m\xe1ximo para los blobs escalares es 2GB, si convierte un ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob")," de 2,5GB a un blob, obtiene un blob vac\xedo.")),(0,t.kt)("h2",n({},{id:"modificaci\xf3n-de-un-blob-escalar"}),"Modificaci\xf3n de un blob escalar"),(0,t.kt)("p",null,"A diferencia de los objetos blob, se pueden modificar los blobs escalares. Por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"var $myBlob : Blob\nSET BLOB SIZE ($myBlob ; 16*1024)\n")),(0,t.kt)("h2",n({},{id:"acceder-individualmente-a-los-bytes-de-un-blob"}),"Acceder individualmente a los bytes de un blob"),(0,t.kt)("h4",n({},{id:"acceder-a-los-bytes-de-un-blob-escalar"}),"Acceder a los bytes de un blob escalar"),(0,t.kt)("p",null,"Puede acceder a los bytes individuales de un blob escalar utilizando las llaves ",(0,t.kt)("inlineCode",{parentName:"p"},"{}"),". Dentro de un blob, los bytes se numeran de 0 a N-1, donde N es el tama\xf1o del BLOB:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"  // Declarar una variable de tipo Blob\n var $vBlob : Blob\n  // Establecer el tama\xf1o del blob en 256 bytes\n SET BLOB SIZE($vBlob; 56)\n  // El siguiente c\xf3digo hace un bucle a trav\xe9s del blob para inicializar cada byte en cero\n For(vByte; ;Tama\xf1o BLOB ($vBlob)-1)\n    $vBlob{vByte}:=0\n Fin por\n")),(0,t.kt)("p",null,"Como puede dirigir todos los bytes de un blob individualmente, puede almacenar lo que desee en una variable o un campo Blob."),(0,t.kt)("h4",n({},{id:"acceder-a-los-bytes-de-un-4dblob"}),"Acceder a los bytes de un ",(0,t.kt)("inlineCode",{parentName:"h4"},"4D.Blob")),(0,t.kt)("p",null,"Utilice los corchetes ",(0,t.kt)("inlineCode",{parentName:"p"},"[]")," para acceder directamente a un byte espec\xedfico en un ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text ( $myBlob ; UTF8 text without length )\n$byte:=$myBlob[5]\n')),(0,t.kt)("p",null,"Dado que un ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob")," no puede ser modificado, puede leer los bytes de un ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob")," utilizando esta sintaxis, pero no modificarlos."))}c.isMDXComponent=!0}}]);