"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93642],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(f,o(o({ref:a},p),{},{components:t})):n.createElement(f,o({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95203:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});t(67294);var n=t(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const o={id:"analysis",title:"P\xe1gina An\xe1lisis de actividades",sidebar_label:"P\xe1gina An\xe1lisis de actividades"},l=void 0,s={unversionedId:"MSC/analysis",id:"MSC/analysis",title:"P\xe1gina An\xe1lisis de actividades",description:"La p\xe1gina An\xe1lisis de actividades permite ver el contenido del archivo de registro actual. This function is useful for parsing the use of an application or detecting the operation(s) that caused errors or malfunctions. In the case of an application in client-server mode, it allows verifying operations performed by each client machine.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/MSC/analysis.md",sourceDirName:"MSC",slug:"/MSC/analysis",permalink:"/docs/es/next/MSC/analysis",draft:!1,tags:[],version:"current",frontMatter:{id:"analysis",title:"P\xe1gina An\xe1lisis de actividades",sidebar_label:"P\xe1gina An\xe1lisis de actividades"},sidebar:"docs",previous:{title:"P\xe1gina de informaci\xf3n",permalink:"/docs/es/next/MSC/information"},next:{title:"P\xe1gina Verificaci\xf3n",permalink:"/docs/es/next/MSC/verify"}},c={},p=[],d={toc:p};function u(e){var{components:a}=e,o=i(e,["components"]);return(0,n.kt)("wrapper",r({},d,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"La p\xe1gina An\xe1lisis de actividades permite ver el contenido del archivo de registro actual. This function is useful for parsing the use of an application or detecting the operation(s) that caused errors or malfunctions. In the case of an application in client-server mode, it allows verifying operations performed by each client machine."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tambi\xe9n es posible revertir las operaciones realizadas sobre los datos de la base. Para m\xe1s informaci\xf3n, consulte ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/next/MSC/rollback"}),"P\xe1gina de retroceso"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(40066).Z,width:"882",height:"666"})),(0,n.kt)("p",null,"Cada operaci\xf3n registrada en el archivo de registro aparece como una l\xednea. Las columnas ofrecen informaci\xf3n variada sobre la operaci\xf3n. Puede reorganizar las columnas como desee haciendo clic en sus encabezados."),(0,n.kt)("p",null,"Esta informaci\xf3n permite identificar la fuente y el contexto de cada operaci\xf3n:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Operaci\xf3n"),": n\xfamero de secuencia de la operaci\xf3n en el archivo de historial.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Acci\xf3n"),": tipo de operaci\xf3n realizada sobre los datos. Esta columna puede contener una de las siguientes operaciones:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apertura del archivo de datos: apertura de un archivo de datos."),(0,n.kt)("li",{parentName:"ul"},"Cierre del archivo de datos: cierre de un archivo de datos abierto."),(0,n.kt)("li",{parentName:"ul"},"Creaci\xf3n de un contexto: creaci\xf3n de un proceso que especifica un contexto de ejecuci\xf3n."),(0,n.kt)("li",{parentName:"ul"},"Cierre de un contexto: cierre de un proceso."),(0,n.kt)("li",{parentName:"ul"},"Adici\xf3n: creaci\xf3n y almacenamiento de un registro."),(0,n.kt)("li",{parentName:"ul"},"A\xf1adir un BLOB: almacenamiento de un BLOB en un campo BLOB."),(0,n.kt)("li",{parentName:"ul"},"Eliminaci\xf3n: eliminaci\xf3n de un registro."),(0,n.kt)("li",{parentName:"ul"},"Modificaci\xf3n: modificaci\xf3n de un registro."),(0,n.kt)("li",{parentName:"ul"},"Inicio de la transacci\xf3n: transacci\xf3n iniciada."),(0,n.kt)("li",{parentName:"ul"},"Validaci\xf3n de transacci\xf3n: transacci\xf3n validada."),(0,n.kt)("li",{parentName:"ul"},"Cancelaci\xf3n de transacci\xf3n: transacci\xf3n cancelada."),(0,n.kt)("li",{parentName:"ul"},"Update context: Change in extra data (e.g. a call to ",(0,n.kt)("inlineCode",{parentName:"li"},"CHANGE CURRENT USER")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"SET USER ALIAS"),")."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Tabla"),": tabla a la que pertenece el registro a\xf1adido/borrado/modificado o el BLOB.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Llave primaria/BLOB"),": contenido de la llave primaria de cada registro (cuando la llave primaria se compone de varios campos, los valores se separan con punto y coma) o n\xfamero de secuencia del BLOB implicado en la operaci\xf3n.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Proceso"),": n\xfamero interno del proceso en el que se realiz\xf3 la operaci\xf3n. Este n\xfamero interno corresponde al contexto de la operaci\xf3n.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Tama\xf1o"),": tama\xf1o (en bytes) de los datos procesados por la operaci\xf3n.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fecha y hora"),": fecha y hora en que se realiz\xf3 la operaci\xf3n.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"System User"),": System name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the session name of the user is displayed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"4D User"),": 4D user name of the user that performed the operation. If an alias is defined for the user, the alias is displayed instead of the 4D user name.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Valores"),': valores de los campos del registro en caso de adici\xf3n o de modificaci\xf3n. Los valores est\xe1n separados por ";". S\xf3lo se muestran los valores representados en forma alfanum\xe9rica.',(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"*Nota:")," si la base est\xe1 encriptada y no se ha ofrecido una llave de datos v\xe1lida correspondiente al archivo de historial abierto, los valores encriptados no se muestran en esta columna.*")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Registros"),": n\xfamero del registro."))),(0,n.kt)("p",null,"Click on ",(0,n.kt)("strong",{parentName:"p"},"Analyze")," to update the contents of the current log file of the selected application (named by default dataname.journal). The Browse button can be used to select and open another log file for the application. El bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Exportar...")," puede utilizarse para exportar el contenido del archivo como texto."))}u.isMDXComponent=!0},40066:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/MSC_analysis-a64034303099f14f6f52603e672cecae.png"}}]);