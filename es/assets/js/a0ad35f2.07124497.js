"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36615],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=o,h=p["".concat(d,".").concat(u)]||p[u]||c[u]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},41609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>m});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const i={id:"creating-using-macros",title:"Creaci\xf3n y uso de macros"},l=void 0,d={unversionedId:"code-editor/creating-using-macros",id:"version-19-R6/code-editor/creating-using-macros",title:"Creaci\xf3n y uso de macros",description:"Puede utilizar macrocomandos en sus m\xe9todos. El uso de macrocomandos permite ahorrar mucho tiempo durante la entrada de c\xf3digo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/code-editor/creating-using-macros.md",sourceDirName:"code-editor",slug:"/code-editor/creating-using-macros",permalink:"/documentation/es/docs/code-editor/creating-using-macros",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"creating-using-macros",title:"Creaci\xf3n y uso de macros"},sidebar:"docs",previous:{title:"Buscar y reemplazar",permalink:"/documentation/es/docs/code-editor/find-replace"},next:{title:"Etiquetas de transformaci\xf3n",permalink:"/documentation/es/docs/Tags/tags"}},s={},m=[{value:"\xbfQu\xe9 es una macro?",id:"qu\xe9-es-una-macro",level:2},{value:"Ubicaci\xf3n de las macros",id:"ubicaci\xf3n-de-las-macros",level:2},{value:"Macros por defecto",id:"macros-por-defecto",level:2},{value:"Adding customized macros",id:"adding-customized-macros",level:2},{value:"Comprobaci\xf3n de la sintaxis de las macros personalizadas",id:"comprobaci\xf3n-de-la-sintaxis-de-las-macros-personalizadas",level:3},{value:"Syntax of 4D macros",id:"syntax-of-4d-macros",level:2},{value:"Sobre la etiqueta <code>&lt;method&gt;</code>",id:"sobre-la-etiqueta-method",level:2},{value:"Llamando macros",id:"llamando-macros",level:2},{value:"Context menu and toolbar",id:"context-menu-and-toolbar",level:3},{value:"Autocompletar",id:"autocompletar",level:3},{value:"Lista del editor de c\xf3digo",id:"lista-del-editor-de-c\xf3digo",level:3},{value:"Compatibility notes",id:"compatibility-notes",level:2},{value:"Variables de selecci\xf3n de texto para m\xe9todos",id:"variables-de-selecci\xf3n-de-texto-para-m\xe9todos",level:3},{value:"Incompatibilidades relacionadas con el est\xe1ndar XML",id:"incompatibilidades-relacionadas-con-el-est\xe1ndar-xml",level:3}],c={toc:m};function p(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",o({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Puede utilizar macrocomandos en sus m\xe9todos. El uso de macrocomandos permite ahorrar mucho tiempo durante la entrada de c\xf3digo."),(0,n.kt)("h2",o({},{id:"qu\xe9-es-una-macro"}),"\xbfQu\xe9 es una macro?"),(0,n.kt)("p",null,"A macro-command is a section of 4D code that is permanently accessible and that can be inserted anywhere in your methods, whatever the type of database open. Macros can contain all types of 4D text, commands and constants, as well as special tags which are replaced at the time of macro insertion by values derived from the method context. For instance, a macro may contain the tag ",(0,n.kt)("inlineCode",{parentName:"p"},"<method_name/>;")," at the time of macro insertion, this tag will be replaced by the name of the current project method."),(0,n.kt)("p",null,"Las macros se almacenan en uno o varios archivos en formato XML (texto). They can be placed in a Code Editor list; they can also be called using the context menu of the editor or using the autocomplete function."),(0,n.kt)("p",null,"Las macros 4D est\xe1n escritas en formato XML. Puede utilizar el archivo de macros por defecto de 4D tal como est\xe1 o modificarlo."),(0,n.kt)("h2",o({},{id:"ubicaci\xf3n-de-las-macros"}),"Ubicaci\xf3n de las macros"),(0,n.kt)("p",null,"4D loads the macros from a folder named ",(0,n.kt)("strong",{parentName:"p"},"Macros v2"),". Macros must be in the form of one or more XML files that are placed in this folder."),(0,n.kt)("p",null,'La carpeta "Macros v2" puede ser ubicada:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"En la carpeta 4D activa de la m\xe1quina. Las macros son compartidas para todas las bases. ",(0,n.kt)("strong",{parentName:"li"},"Note:"),"\xa0The location of the active 4D folder varies according to the operating system used. For more information, refer to the description of the\xa0",(0,n.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html"}),"Get 4D folder"),"\xa0command in the 4D\xa0",(0,n.kt)("em",{parentName:"li"},"Language Reference"),"\xa0manual."),(0,n.kt)("li",{parentName:"ul"},"Junto al archivo de estructura de la base. Las macros s\xf3lo se cargan para esta estructura."),(0,n.kt)("li",{parentName:"ul"},"For components: in the ",(0,n.kt)("strong",{parentName:"li"},"Components")," folder of the database. Las macros s\xf3lo se cargan si el componente est\xe1 instalado.")),(0,n.kt)("p",null,'These three locations can be used simultaneously: it is possible to install a "Macros v2" folder in each location. The macros will be loaded in the following order: 4D folder, structure file, component 1... component X.'),(0,n.kt)("h2",o({},{id:"macros-por-defecto"}),"Macros por defecto"),(0,n.kt)("p",null,'4D offers a set of default macros corresponding, in particular, to the list of keywords in previous versions of 4D. These macros are included in the default "',(0,n.kt)("em",{parentName:"p"},"Macros.xml"),'" file, placed in the "Macros v2" folder that is created in the active 4D folder of the machine during the initial startup of 4D.'),(0,n.kt)("p",null,"You can modify this file or the contents of the folder subsequently as desired (see the following paragraph). In the event of problems with this folder, it can be deleted and 4D will re-create it on the next startup."),(0,n.kt)("h2",o({},{id:"adding-customized-macros"}),"Adding customized macros"),(0,n.kt)("p",null,'You can add customized macros in the "Macros.xml" file using a standard text editor or by programming. Tambi\xe9n puede a\xf1adir archivos XML de macros personalizados en esta carpeta.'),(0,n.kt)("p",null,"En modo local, el archivo de macros puede abrirse mientras se utiliza 4D. La lista de macros disponibles se actualiza en cada evento de activaci\xf3n de 4D. For instance, it is possible to bring the text editor to the foreground, modify the macro file, then return to the method: the new macro is then available in the Code Editor."),(0,n.kt)("p",null,"No se muestran macros vac\xedas o err\xf3neas."),(0,n.kt)("h3",o({},{id:"comprobaci\xf3n-de-la-sintaxis-de-las-macros-personalizadas"}),"Comprobaci\xf3n de la sintaxis de las macros personalizadas"),(0,n.kt)("p",null,"The macro-command files of 4D must be in conformity with the XML standard. This means more particularly that XML declaration ",(0,n.kt)("inlineCode",{parentName:"p"},'<?xml version="1.0" ...?>')," and document declaration ",(0,n.kt)("inlineCode",{parentName:"p"},'<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">')," statements are mandatory at the beginning of a macro file in order for it to be loaded. Se soportan los diferentes tipos de codificaci\xf3n XML. However, it is recommended to use encoding that is Mac/PC (UTF-8) compatible. 4D ofrece un DTD que puede utilizarse para validar los archivos de macros. Este archivo se encuentra en la siguiente ubicaci\xf3n:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows: \\Resources\\DTD\\macros.dtd"),(0,n.kt)("li",{parentName:"ul"},"Mac OS: :Contents:Resources:DTD:macros.dtd")),(0,n.kt)("p",null,"If a macros file does not contain the declaration statements or cannot be validated, it is not loaded."),(0,n.kt)("h2",o({},{id:"syntax-of-4d-macros"}),"Syntax of 4D macros"),(0,n.kt)("p",null,'Las macros 4D se crean utilizando etiquetas XML personalizadas llamadas "elementos"'),(0,n.kt)("p",null,"Some tags indicate the start and end of the definition (double tags of the type ",(0,n.kt)("inlineCode",{parentName:"p"},"<tag> </tag>"),"), others are replaced by insertion context values (",(0,n.kt)("inlineCode",{parentName:"p"},"<tag/>"),")."),(0,n.kt)("p",null,"In conformity with XML specifications, some element tags can include attributes. Unless otherwise indicated, these attributes are optional and a default value is used when they are omitted. La sintaxis de los elementos con atributos es la siguiente:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Double tags: ",(0,n.kt)("inlineCode",{parentName:"li"},'<tag attribute="value"> </macro>')),(0,n.kt)("li",{parentName:"ul"},"Single tags: ",(0,n.kt)("inlineCode",{parentName:"li"},'<tag attribute="value"/>'))),(0,n.kt)("p",null,"If the element accepts several attributes, you can group them in the same line of command, separated by a space: ",(0,n.kt)("inlineCode",{parentName:"p"},'\\&#060;tag attribute1="value" attribute2="value" attribute3="value"... &#062;')),(0,n.kt)("p",null,"Aqu\xed est\xe1 la lista de etiquetas y su modo de uso:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Etiquetas de elementos")),(0,n.kt)("th",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Descripci\xf3n")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macros> </macros>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Inicio y fin del archivo macro (etiqueta obligatoria).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macro> </macro>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Inicio y fin de la definici\xf3n de una macro y sus atributos.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Atributos"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"- name: Name**of macro as it appears in menus and Code Editor lists (mandatory attribute).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"- type_ahead_text: Character string*",(0,n.kt)("em",{parentName:"td"}," to be entered to call the macro using the type-ahead (aka autocomplete) function"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'- in_menu: Boolean indicating whether the macro can be called using the context menu*. Valores = "true" (por defecto) o "false"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'- type_ahead: Boolean indicating whether the macro can be called using the type-ahead (aka autocomplete) function*. Valores = "true" (por defecto) o "false"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'- method_event: Used to trigger the automatic calling of the macro depending on the current handling phase of each method (creation, closing, and so on). Values = "on_load": The macro is triggered on the opening of each method, "on_save": The macro is triggered when each method is saved (closing of a modified method or saving using the File>Save command, "on_create": The macro is triggered when each method is created, "on_close": The macro is triggered when each method is closed.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'"on_save" and "on_close" can be used jointly --- in other words, both of these events are generated when a modified method is closed. On the other hand, "on_create" and "on_load" are never generated in a consecutive manner. This attribute can be used, for example, to preformat methods when they are created (comments in header area) or to record information such as the date and time when they are closed.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'- version: Used to activate the new mode of supporting text selections for the macro (see the "About the ',(0,n.kt)("inlineCode",{parentName:"td"},"<method>"),' Tag" section below). Para activar este nuevo modo, pase el valor "2". If you omit this attribute or pass version="1", the former mode is kept.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'- in_toolbar: Boolean indicating if the macro must be present in the menu of the Macro button of the toolbar. Valores= "true" (por defecto) o "false".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<selection/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Etiqueta reemplazada por el texto seleccionado cuando la macro se inserta. La selecci\xf3n puede estar vac\xeda.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<text> </text>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Inicio y fin del c\xf3digo que debe insertarse en el m\xe9todo. Se a\xf1adir\xe1 un retorno de carro antes y despu\xe9s del c\xf3digo.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method> </method>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'Start and end of the name of the project method and its (optional) parameter. El m\xe9todo se ejecuta cuando se llama a la macro. Puede pasar un par\xe1metro de la forma ("param1;param2;..."). This parameter will be received in the method using the variables $1, $2, etc. For additional information about this tag, refer to the "About the ',(0,n.kt)("inlineCode",{parentName:"td"},"<method>"),' Tag" section below.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<caret/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Location of the insertion point in the code after the macro has been inserted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<user_4D/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Etiqueta reemplazada por el nombre del usuario 4D actual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<user_os/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Etiqueta reemplazada por el nombre de usuario actual del sistema.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method_name/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Etiqueta reemplazada por el nombre del m\xe9todo proyecto actual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method_path/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Etiqueta sustituida por el nombre completo del m\xe9todo proyecto actual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<date/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Etiqueta reemplazada por la fecha actual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Atributo"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"- format: formato 4D utilizado para mostrar la fecha. Si no se define ning\xfan formato, se utilizar\xe1 el formato predeterminado. Valores = n\xfamero de formato 4D (0 a 8).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<time/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Tag replaced by the current time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Atributo"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"- format: formato 4D utilizado para mostrar la hora. Si no se define ning\xfan formato, se utilizar\xe1 el formato predeterminado. Valores = n\xfamero de formato 4D (0 a 6).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<clipboard/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Etiqueta reemplazada por el contenido del portapapeles.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Atributo"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"- index: Clipboard to be pasted. Valores = n\xfamero del portapapeles (0 a 9).")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Macros can be called using the context menu of the Code Editor or using the type-ahead function (see the following section).\\\n** If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.)."),(0,n.kt)("li",{parentName:"ul"},"If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.).")),(0,n.kt)("p",null,"Este es un ejemplo de definici\xf3n de una macro:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Contenido de la macro")),(0,n.kt)("th",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Comentarios")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'<?xml version="1.0"...?>')),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Declaraci\xf3n XML")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<!DOCTYPE macros SYSTEM>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Declaraci\xf3n del documento")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macros>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Start of macros XML file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'<macro name="RecordLoop">')),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Start of macro definition and name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<text>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Start of macro code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"For($i;1;Records in selection(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),"))"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The ",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>")," tag will be replaced by the selected code in the 4D method at the time of macro insertion (for instance, a table name)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"SAVE RECORD(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"NEXT RECORD(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"End for"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</text>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Fin del c\xf3digo macro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</macro>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Fin de la definici\xf3n de macro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</macros>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Fin del archivo XML de macros")))),(0,n.kt)("h2",o({},{id:"sobre-la-etiqueta-method"}),"Sobre la etiqueta ",(0,n.kt)("inlineCode",{parentName:"h2"},"<method>")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<method>")," tag allows you to generate and use macro-commands that execute 4D project methods. This allows developers to create sophisticated functions that can be distributed via macro-commands which are associated with components. For example, the following macro will cause the\xa0",(0,n.kt)("em",{parentName:"p"},"MyMethod"),"\xa0method to be executed with the name of the current method as parameter:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<method>MyMethod("<method_name/>")</method>')),(0,n.kt)("p",null,"El c\xf3digo de un m\xe9todo llamado se ejecuta en un nuevo proceso. Este proceso se cierra una vez se ejecuta el m\xe9todo."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\xa0The structure process remains frozen until the called method execution is completed. You must make sure that the execution is quick and that there is no risk of it blocking the application. If this occurs, use the\xa0",(0,n.kt)("strong",{parentName:"p"},"Ctrl+F8"),"\xa0(Windows) or\xa0",(0,n.kt)("strong",{parentName:"p"},"Command+F8"),'\xa0(Mac OS) command to "kill" the process.')),(0,n.kt)("h2",o({},{id:"llamando-macros"}),"Llamando macros"),(0,n.kt)("p",null,"By default, macros can be called using the context menu or toolbar of the Code Editor, the autocomplete function, or a specific list at the bottom of the Code Editor window."),(0,n.kt)("p",null,"Note that for each macro it is possible to restrict the possibility of calling it using the context menu and/or the autocomplete function."),(0,n.kt)("h3",o({},{id:"context-menu-and-toolbar"}),"Context menu and toolbar"),(0,n.kt)("p",null,"By default, all macros can be called via the context menu of the Code Editor (using the\xa0",(0,n.kt)("strong",{parentName:"p"},"Insert macro"),"\xa0hierarchical command) or the ",(0,n.kt)("strong",{parentName:"p"},"Macros")," button of the toolbar."),(0,n.kt)("p",null,"The\xa0",(0,n.kt)("em",{parentName:"p"},"in_menu"),"\xa0attribute of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<macro>")," tag is used to set whether or not the macro appears in this menu."),(0,n.kt)("p",null,'In the context menu, macros are displayed in the order of the "Macros.xml" file and any additional XML files. Por lo tanto, es posible cambiar el orden modificando estos archivos.'),(0,n.kt)("h3",o({},{id:"autocompletar"}),"Autocompletar"),(0,n.kt)("p",null,"By default, all macros are accessible using the autocomplete (aka type-ahead) function (see\xa0",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/es/docs/code-editor/write-class-method"}),"Writing a method"),"). The\xa0",(0,n.kt)("em",{parentName:"p"},"type_ahead"),"\xa0attribute of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<macro>")," tag can be used to exclude a macro from this type of operation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:"),"\xa0If the macro contains the ",(0,n.kt)("inlineCode",{parentName:"p"},"<selection/>")," tag, it will not appear in the autocomplete pop-up window."),(0,n.kt)("h3",o({},{id:"lista-del-editor-de-c\xf3digo"}),"Lista del editor de c\xf3digo"),(0,n.kt)("p",null,"You can display your macros in a list of the Code Editor (see\xa0",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/es/docs/code-editor/write-class-method"}),"Writing a method"),"). Basta con hacer doble clic en el nombre de una macro de la lista para llamarla. No es posible excluir una macro espec\xedfica de esta lista."),(0,n.kt)("h2",o({},{id:"compatibility-notes"}),"Compatibility notes"),(0,n.kt)("p",null,"El soporte de macros puede cambiar de una versi\xf3n de 4D a otra. In order to keep the different versions compatible while maintaining your customizations, 4D does not remove any previous versions. If you want to use the latest features available, you must adapt your version accordingly."),(0,n.kt)("h3",o({},{id:"variables-de-selecci\xf3n-de-texto-para-m\xe9todos"}),"Variables de selecci\xf3n de texto para m\xe9todos"),(0,n.kt)("p",null,"It is recommended to manage text selections using the\xa0",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html"}),"GET MACRO PARAMETER"),"and\xa0",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html"}),"SET MACRO PARAMETER"),"\xa0commands. These commands can be used to overcome the partitioning of the host project/component execution spaces and thus allow the creation of components dedicated to the management of macros. In order to activate this mode for a macro, you must declare the Version attribute with the value 2 in the Macro element. In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the\xa0",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html"}),"GET MACRO PARAMETER"),"and\xa0",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html"}),"SET MACRO PARAMETER"),"\xa0are used. Este atributo debe declararse as\xed:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<macro name="MyMacro" version="2">'),(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"p"},"--- Text of the macro ---"),(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"p"},"</macro>")),(0,n.kt)("p",null,"Si no se pasa este atributo, el modo anterior se mantiene."),(0,n.kt)("h3",o({},{id:"incompatibilidades-relacionadas-con-el-est\xe1ndar-xml"}),"Incompatibilidades relacionadas con el est\xe1ndar XML"),(0,n.kt)("p",null,"Strict syntax rules must be observed in order for macros files to respect the XML standard. This may lead to incompatibilities with the code of macros created with previous versions and prevent the loading of XML files. Las siguientes son las principales fuentes de mal funcionamiento:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Comments of the "// my comment" type, allowed inside ',(0,n.kt)("inlineCode",{parentName:"li"},"<macro>")," elements in previous versions of 4D, are not compatible with the XML syntax. The lines of comments must respect the standard ",(0,n.kt)("inlineCode",{parentName:"li"},'"\x3c!-- my comment --\x3e"')," form."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"<>")," symbols used more particularly for interprocess object names must be encoded. For example, the ",(0,n.kt)("inlineCode",{parentName:"li"},"<>params")," variable must be written ",(0,n.kt)("inlineCode",{parentName:"li"},"&lt;>params"),"."),(0,n.kt)("li",{parentName:"ul"},"The initial ",(0,n.kt)("inlineCode",{parentName:"li"},"<macros>")," declaration tag could be omitted in previous versions of 4D. Ahora es obligatorio; de lo contrario, el archivo no se cargar\xe1.")))}p.isMDXComponent=!0}}]);