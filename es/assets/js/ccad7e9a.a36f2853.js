"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22127],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=u(n),N=l,k=s["".concat(d,".").concat(N)]||s[N]||p[N]||r;return n?a.createElement(k,o(o({ref:e},m),{},{components:n})):a.createElement(k,o({ref:e},m))}));function N(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},90861:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},l.apply(this,arguments)}function r(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const o={id:"overview",title:"Generalidades"},i=void 0,d={unversionedId:"Events/overview",id:"version-19-R6/Events/overview",title:"Generalidades",description:"Los eventos formulario son eventos que pueden llevar a la ejecuci\xf3n del m\xe9todo de formulario y/o del o de los m\xe9todos objeto de formulario. Los eventos de formulario le permiten controlar el flujo de su aplicaci\xf3n y escribir c\xf3digo que se ejecuta s\xf3lo cuando ocurre un evento espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Events/overview.md",sourceDirName:"Events",slug:"/Events/overview",permalink:"/documentation/es/docs/Events/overview",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"overview",title:"Generalidades"},sidebar:"docs",previous:{title:"\xc1rea Web",permalink:"/documentation/es/docs/FormObjects/propertiesWebArea"},next:{title:"On Activate",permalink:"/documentation/es/docs/Events/onActivate"}},u={},m=[{value:"Objeto evento",id:"objeto-evento",level:2},{value:"Eventos y m\xe9todos",id:"eventos-y-m\xe9todos",level:2},{value:"Tabla de llamadas",id:"tabla-de-llamadas",level:2}],p={toc:m};function s(t){var{components:e}=t,n=r(t,["components"]);return(0,a.kt)("wrapper",l({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Los eventos formulario son eventos que pueden llevar a la ejecuci\xf3n del m\xe9todo de formulario y/o del o de los m\xe9todos objeto de formulario. Los eventos de formulario le permiten controlar el flujo de su aplicaci\xf3n y escribir c\xf3digo que se ejecuta s\xf3lo cuando ocurre un evento espec\xedfico."),(0,a.kt)("p",null,"En su c\xf3digo, se controlan los eventos mediante el comando ",(0,a.kt)("inlineCode",{parentName:"p"},"FORM Event"),", que devuelve el evento disparado. Por ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"//code of a button\nIf(FORM Event.code=On Clicked) \n// hacer algo cuando se presiona el bot\xf3n\nEnd if\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cada formulario y cada objeto activo en el formulario puede escuchar un conjunto predefinido de eventos, pero s\xf3lo los eventos que habilit\xf3 a nivel del formulario y/o en cada nivel del objeto ocurrir\xe1n realmente.")),(0,a.kt)("h2",l({},{id:"objeto-evento"}),"Objeto evento"),(0,a.kt)("p",null,"Cada evento es devuelto como un objeto por el comando ",(0,a.kt)("inlineCode",{parentName:"p"},"FORM Event"),". Por defecto, contiene las siguientes propiedades:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Propiedad"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"objectName"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Name of the object triggering the event - Not included if the event is triggered by the form")))),(0,a.kt)("p",null,"Se devuelven propiedades adicionales cuando el evento se produce en objetos espec\xedficos. En particular:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Los ",(0,a.kt)("a",l({parentName:"li"},{href:"/documentation/es/docs/FormObjects/listboxOverview#supported-form-events"}),"list box")," y las ",(0,a.kt)("a",l({parentName:"li"},{href:"/documentation/es/docs/FormObjects/listboxOverview#supported-form-events-1"}),"columnas de list box")," devuelven las ",(0,a.kt)("a",l({parentName:"li"},{href:"/documentation/es/docs/FormObjects/listboxOverview#additional-properties"}),"propiedades adicionales")," tales como ",(0,a.kt)("inlineCode",{parentName:"li"},"columnName")," o ",(0,a.kt)("inlineCode",{parentName:"li"},"isRowSelected"),"."),(0,a.kt)("li",{parentName:"ul"},"Las ",(0,a.kt)("a",l({parentName:"li"},{href:"/documentation/es/docs/FormObjects/viewProAreaOverview"}),"\xe1reas de View Pro")," devuelven por ejemplo las propiedades ",(0,a.kt)("inlineCode",{parentName:"li"},"sheetName")," o ",(0,a.kt)("inlineCode",{parentName:"li"},"action")," en el objeto evento ",(0,a.kt)("a",l({parentName:"li"},{href:"/documentation/es/docs/Events/onAfterEdit"}),"On After Edit"),".")),(0,a.kt)("h2",l({},{id:"eventos-y-m\xe9todos"}),"Eventos y m\xe9todos"),(0,a.kt)("p",null,"Cuando se produce un evento formulario, 4D realiza las siguientes acciones:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"En primer lugar, explora los objetos del formulario y llama al m\xe9todo objeto para todo objeto (asociado al evento) cuya propiedad de evento de objeto correspondiente haya sido seleccionada."),(0,a.kt)("li",{parentName:"ul"},"Luego, llama al m\xe9todo formulario si la propiedad del evento formulario correspondiente ha sido seleccionada.")),(0,a.kt)("p",null,"No asuma que los m\xe9todos objeto, si los hay, ser\xe1n llamados en un orden particular. La regla general es que los m\xe9todos objeto siempre se llaman antes que el m\xe9todo formulario. Si un objeto es un subformulario, se llaman los m\xe9todos objeto del formulario lista del subformulario, y luego se llama al m\xe9todo formulario del formulario listado. 4D contin\xfaa llamando a los m\xe9todos objeto del formulario padre. En otras palabras, cuando un objeto es un subformulario, 4D utiliza la misma regla general para los m\xe9todos objeto y formulario dentro del objeto subformulario."),(0,a.kt)("p",null,"Excepto en los eventos ",(0,a.kt)("a",l({parentName:"p"},{href:"/documentation/es/docs/Events/onLoad"}),"En carga")," y ",(0,a.kt)("a",l({parentName:"p"},{href:"/documentation/es/docs/Events/onUnload"}),"En descarga")," (ver m\xe1s abajo), si la propiedad del evento formulario no est\xe1 seleccionada para un evento determinado, esto no impide las llamadas a los m\xe9todos objetos cuya misma propiedad de evento est\xe1 seleccionada. En otras palabras, la activaci\xf3n o desactivaci\xf3n de un evento a nivel de formulario no tiene ning\xfan efecto sobre las propiedades del evento del objeto."),(0,a.kt)("p",null,"El n\xfamero de objetos asociados a un evento depende de la naturaleza del mismo."),(0,a.kt)("h2",l({},{id:"tabla-de-llamadas"}),"Tabla de llamadas"),(0,a.kt)("p",null,"El n\xfamero de objetos asociados a un evento depende de la naturaleza del mismo."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Evento"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"M\xe9todo objeto"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"M\xe9todo formulario"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Objetos"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Load"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Todos los objetos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Unload"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Todos los objetos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Validate"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Todos los objetos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Clicked"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Double Clicked"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Before Keystroke"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On After Keystroke"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On After Edit"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Getting Focus"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Losing Focus"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Activate"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguno")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Deactivate"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguno")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Outside Call"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguno")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Page Change"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguno")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Begin Drag Over"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Drop"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Drag Over"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Mouse Enter"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Todos los objetos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Mouse Move"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Todos los objetos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Mouse Leave"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Todos los objetos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Mouse Up"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Menu Selected"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguno")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Bound variable change"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguno")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Data Change"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Plug in Area"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Header"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Todos los objetos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Printing Detail"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Todos los objetos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Printing Break"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Todos los objetos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Printing Footer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Todos los objetos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Close Box"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguno")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Display Detail"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Todos los objetos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Open Detail"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguna, excepto los list box")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Close Detail"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguna, excepto los list box")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Resize"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguno")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Selection Change"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Load Record"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguno")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Timer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ninguno")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Scroll"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Before Data Entry"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Column Moved"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Row Moved"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Column Resize"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (List box y \xc1rea 4D View Pro)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Header Click"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (List box y \xc1rea 4D View Pro)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Footer Click"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On After Sort"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Long Click"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (bot\xf3n)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Alternative Click"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (Bot\xf3n y List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Expand"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (Lista jerarq. y list box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Collapse"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (Lista jerarq. y list box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Delete Action"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (Lista jerarq. y list box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On URL Resource Loading"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (\xc1rea Web)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Begin URL Loading"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (\xc1rea Web)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On URL Loading Error"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (\xc1rea Web)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On URL Filtering"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (\xc1rea Web)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On End URL Loading"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (\xc1rea Web)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Open External Link"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (\xc1rea Web)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Window Opening Denied"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (\xc1rea Web)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On VP Range Changed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (\xc1rea 4D View Pro)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On VP Ready"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (\xc1rea 4D View Pro)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Row Resize"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"S\xed (\xc1rea 4D View Pro)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Objetos involucrados \xfanicamente")))),(0,a.kt)("p",null,"Tenga siempre en cuenta que, para todo evento, se llama al m\xe9todo de un formulario o de un objeto si se selecciona la correspondiente propiedad del evento para el formulario o los objetos. La ventaja de desactivar los eventos en el entorno de dise\xf1o (utilizando la lista de propiedades del editor de formularios) es que puede reducir el n\xfamero de llamadas a los m\xe9todos y, por tanto, optimizar significativamente la velocidad de ejecuci\xf3n de sus formularios."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ATENCI\xd3N: los eventos ",(0,a.kt)("a",l({parentName:"p"},{href:"onLoad"}),"On Load")," y ",(0,a.kt)("a",l({parentName:"p"},{href:"onUnloas"}),"On Unload")," se generan para los objetos si est\xe1n activados a la vez para los objetos y para el formulario al que pertenecen los objetos. Si los eventos est\xe1n activados s\xf3lo para los objetos, no se producir\xe1n; estos dos eventos tambi\xe9n deben estar activados a nivel del formulario.")))}s.isMDXComponent=!0}}]);