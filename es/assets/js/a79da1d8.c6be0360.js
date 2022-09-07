"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38479],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,b=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"pictureButtonOverview",title:"Bot\xf3n Imagen"},s=void 0,p={unversionedId:"FormObjects/pictureButtonOverview",id:"version-19/FormObjects/pictureButtonOverview",title:"Bot\xf3n Imagen",description:"Un bot\xf3n imagen es similar a un bot\xf3n est\xe1ndar. Sin embargo, a diferencia de un bot\xf3n est\xe1ndar (que acepta tres estados: activado, desactivado y pulsado), un bot\xf3n imagen tiene una imagen diferente para representar cada estado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/FormObjects/pictureButton_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/pictureButtonOverview",permalink:"/documentation/es/docs/19/FormObjects/pictureButtonOverview",draft:!1,tags:[],version:"19",frontMatter:{id:"pictureButtonOverview",title:"Bot\xf3n Imagen"},sidebar:"docs",previous:{title:"List Box",permalink:"/documentation/es/docs/19/FormObjects/listboxOverview"},next:{title:"Men\xfa pop-up imagen",permalink:"/documentation/es/docs/19/FormObjects/picturePopupMenuOverview"}},l={},c=[{value:"Utilizar los botones imagen",id:"utilizar-los-botones-imagen",level:2},{value:"Animaci\xf3n",id:"animaci\xf3n",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}],m={toc:c};function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un bot\xf3n imagen es similar a un ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/buttonOverview"}),"bot\xf3n est\xe1ndar"),". Sin embargo, a diferencia de un bot\xf3n est\xe1ndar (que acepta tres estados: activado, desactivado y pulsado), un bot\xf3n imagen tiene una imagen diferente para representar cada estado."),(0,n.kt)("p",null,"Los botones imagen pueden utilizarse de dos maneras:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Como botones de comando en un formulario. In this case, the picture button generally includes four different states: enabled, disabled, clicked and rolled over. For example, a table of thumbnails that has one row of four columns, each thumbnail corresponds to the Default, Clicked, Roll over, and Disabled states."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propiedad"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre JSON"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Rows"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"rowCount"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Columnas"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"columnCount"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Switch back when Released"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"switchBackWhenReleased"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Switch when Roll Over"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"switchWhenRollover"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Use Last Frame as Disabled"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"useLastFrameAsDisabled"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"true"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Como bot\xf3n de imagen que permite al usuario elegir entre varias opciones. En este caso, se puede utilizar un bot\xf3n de imagen en lugar de un men\xfa de imagen emergente. As a picture button letting the user choose among several choices. In this case, a picture button can be used in place of a pop-up picture menu. Supongamos que quiere dar a los usuarios de una aplicaci\xf3n personalizada la posibilidad de elegir el idioma de la interfaz de la aplicaci\xf3n. La opci\xf3n se implementa como un bot\xf3n imagen en una caja de di\xe1logo personalizada de propiedades:"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1031).Z,width:"97",height:"118"})),(0,n.kt)("p",null,"Al hacer clic en el objeto, la imagen cambia."),(0,n.kt)("h2",r({},{id:"utilizar-los-botones-imagen"}),"Utilizar los botones imagen"),(0,n.kt)("p",null,"Puede implementar un bot\xf3n imagen de la siguiente manera:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"En primer lugar, prepare un \xfanico gr\xe1fico en el que las series de im\xe1genes est\xe9n dispuestas en l\xedneas, en columnas o en las dos."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(5998).Z,width:"242",height:"108"})))),(0,n.kt)("p",null,"Puede organizar las im\xe1genes en columnas, l\xedneas o en una cuadr\xedcula (como se muestra arriba). Cuando se organizan las im\xe1genes en forma de cuadr\xedcula, se numeran de izquierda a derecha, l\xednea por l\xednea, empezando por 0. Por ejemplo, la segunda imagen de la segunda l\xednea de una cuadr\xedcula que consta de dos l\xedneas y tres columnas, tiene el n\xfamero 4 (la bandera del Reino Unido en el ejemplo anterior)."),(0,n.kt)("ol",r({},{start:2}),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A continuaci\xf3n, aseg\xfarese de que la imagen est\xe1 en los recursos de su proyecto e introduzca la ruta en la propiedad ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesTextAndPicture#picture-pathname"}),"Ruta de acceso imagen"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Defina las propiedades de ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesCrop"}),"l\xedneas y columnas")," del gr\xe1fico.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Especifique cu\xe1ndo cambian las im\xe1genes seleccionando las propiedades de ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation"}),"animaci\xf3n")," apropiadas."))),(0,n.kt)("h2",r({},{id:"animaci\xf3n"}),"Animaci\xf3n"),(0,n.kt)("p",null,"Adem\xe1s de los par\xe1metros de posicionamiento y de apariencia est\xe1ndar, puede definir algunas propiedades espec\xedficas para los botones imagen, especialmente en lo que respecta a c\xf3mo y cu\xe1ndo se muestran las im\xe1genes. Estas opciones de propiedades pueden combinarse para mejorar sus botones de imagen."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Por defecto (",(0,n.kt)("a",r({parentName:"li"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation"}),"cuando no se selecciona la opci\xf3n animaci\xf3n"),"), un bot\xf3n de imagen muestra la siguiente imagen de la serie cuando el usuario hace clic; muestra la imagen anterior de la serie cuando el usuario mantiene pulsada la tecla ",(0,n.kt)("strong",{parentName:"li"},"May\xfasculas")," y hace clic en el bot\xf3n. Cuando el usuario llega a la \xfaltima imagen de la serie, la imagen no cambia cuando el usuario hace clic de nuevo. En otras palabras, no vuelve a la primera imagen de la serie.")),(0,n.kt)("p",null,"Hay otros modos disponibles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#loopBackToFirstFrame"}),"Vuelve a la primera secuencia")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#switch-back-when-released"}),"Switch back when Released")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#switch-when-roll-over"}),"Switch when Roll Over")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#switch-continuously-on-clicks"}),"Desplazamiento continuo en clics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#use-last-frame-as-disabled"}),"Use Last Frame as Disabled")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#use-last-frame-as-disabled"}),"Utilizar el \xdaltimo cuadro como Desactivado"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#use-last-frame-as-disabled"}),"Use Last frame as disabled")," > The ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesObject#variable-or-expression"}),"associated variable")," of the picture button returns the index number, in the thumbnail table, of the current picture displayed. La numeraci\xf3n de las im\xe1genes en la tabla empieza por 0.")))),(0,n.kt)("h2",r({},{id:"propiedades-soportadas"}),"Propiedades soportadas"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesTextAndPicture#button-style"}),"Button Style")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesCrop#columns"}),"Columns")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesEntry#focusable"}),"Focusable")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesText#font"}),"Font")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#loopBackToFirstFrame"}),"Loop back to first frame")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesPicture#pathname"}),"Pathname")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesCrop#rows"}),"Rows")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesEntry#shortcut"}),"Shortcut")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesAction#standard-action"}),"Standard action")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#switchBackWhenReleased"}),"Switch back when released")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#switch-continuously-on-clicks"}),"Switch continuously on clicks")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#switch-every-x-ticks"}),"Switch every x ticks")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesObject#title"}),"Title")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#switchWhenRollOver"}),"Switch when roll over")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesAnimation#use-last-frame-as-disabled"}),"Use Last frame as disabled")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/es/docs/19/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}d.isMDXComponent=!0},1031:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},5998:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);