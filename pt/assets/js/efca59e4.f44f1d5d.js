"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||n;return r?o.createElement(f,p(p({ref:t},l),{},{components:r})):o.createElement(f,p({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,p=new Array(n);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var c=2;c<n;c++)p[c]=r[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>l});r(67294);var o=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function n(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"inputOverview",title:"Entrada"},s=void 0,i={unversionedId:"FormObjects/inputOverview",id:"version-18/FormObjects/inputOverview",title:"Entrada",description:"Vis\xe3o Geral",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/docs/pt/18/FormObjects/inputOverview",draft:!1,tags:[],version:"18",frontMatter:{id:"inputOverview",title:"Entrada"},sidebar:"docs",previous:{title:"\xc1rea de grupo",permalink:"/docs/pt/18/FormObjects/groupBox"},next:{title:"Hierarchical List",permalink:"/docs/pt/18/FormObjects/listOverview"}},c={},l=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"JSON Exemplo",id:"json-exemplo",level:3},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2},{value:"Alternativas",id:"alternativas",level:2}],d={toc:l};function m(e){var{components:t}=e,p=n(e,["components"]);return(0,o.kt)("wrapper",a({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",a({},{id:"vis\xe3o-geral"}),"Vis\xe3o Geral"),(0,o.kt)("p",null,"Inputs allow you to add enterable or non-enterable expressions such as database ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/Concepts/identifiers#fields"}),"fields")," and ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/Concepts/variables"}),"variables")," to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(43076).Z,width:"279",height:"175"})),(0,o.kt)("p",null,"Inputs can contain ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/Concepts/quick-tour#assignable-vs-non-assignable-expressions"}),"assignable or non-assignable expressions"),"."),(0,o.kt)("p",null,"In addition, inputs can be ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesEntry#enterable"}),"enterable or non-enterable"),". An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user."),(0,o.kt)("p",null,"You can manage the data with object or form ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/Concepts/methods"}),"methods"),"."),(0,o.kt)("h3",a({},{id:"json-exemplo"}),"JSON Exemplo"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' "myText": {\n  "type": "input", //define the type of object\n  "spellcheck": true, //enable spelling verification\n  "left": 60,   //left position on the form  \n  "top": 160,   //top position on the form\n  "width": 100,  //width of the object\n  "height": 20  //height of the object\n  }\n')),(0,o.kt)("h2",a({},{id:"propriedades-compat\xedveis"}),"Propriedades compat\xedveis"),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#alpha-format"}),"Formato Alfa")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesEntry#auto-spellcheck"}),"Comprova\xe7\xe3o ortogr\xe1fica autom\xe1tica")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#bold"}),"Negrita")," - ","[","Formato booleano","]","(properties_Display. md#boolean-format) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Estilo de linha de borda")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Fundo")," - ","[","Lista de op\xe7\xf5es","]","(properties_DataSource. md#choice-list) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#css-class"}),"Classe")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesEntry#context-menu"}),"Men\xfa de contexto")," - ","[","Formato de data","]","(properties_Display. md#date-format) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesRangeOfValues#default-value"}),"Valor por padr\xe3o")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesAction#draggable"}),"Arrast\xe1vel")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesAction#droppable"}),"Solt\xe1vel")," - ","[","Edit\xe1vel","]","(properties_Entry. md#enterable) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesEntry#entry-filter"}),"Filtro de entrada")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesRangeOfValues#excluded-list"}),"Lista de exclus\xe3o")," - ","[","Tipo de express\xe3o","]","(properties_Object. md#expression-type) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesBackgroundAndBorder#fill-color"}),"Cor de preenchimento")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#font"}),"Fonte")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#font-color"}),"Cor de fonte")," - ","[","Tamanho da fonte","]","(properties_Text. md#font-size) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Altura")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesAppearance#hide-focus-rectangle"}),"Ocultar ret\xe2ngulo de enfoque")," - ","[","Alinhamento horizontal","]","(properties_Text. md#horizontal-alignment) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesAppearance#horizontal-scroll-bar"}),"Barra de deslocamento horizontal")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Tamanho horizontal")," - ","[","It\xe1lica","]","(properties_Text. md#italic) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Esquerda")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesBackgroundAndBorder#line-width"}),"Largura de linha")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesEntry#multiline"}),"Multiline")," - ","[","Multi-estilo","]","(properties_Text. md#multi-style) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#number-format"}),"Formato num\xe9rico")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#object-name"}),"Nome de objeto")," - ","[","Orienta\xe7\xe3o","]","(properties_Text. md#orientation) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#picture-format"}),"Formato de imagem")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesEntry#placeholder"}),"Titular")," - ","[","Marco de impress\xe3o","]","(properties_Print. md#print-frame) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesRangeOfValues#required-list"}),"Lista requerida")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Direita")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDataSource#save-as"}),"Salvar como")," - ","[","Sele\xe7\xe3o sempre vis\xedvel","]","(properties_Entry. md#selection-always-visible) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#store-with-default-style-tags"}),"Salvar com etiquetas de estilo por padr\xe3o")," - ","[","Texto quando for falso/Texto quando for verdadeiro","]","(properties_Display. md#text-when-false-text-when-true) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#time-format"}),"Formato de tempo")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Superior")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#type"}),"Type")," - ","[","Sublinhado","]","(properties_Text. md#underline) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#variable-or-expression"}),"Vari\xe1vel ou express\xe3o")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesAppearance#vertical-scroll-bar"}),"Barra de deslocamento vertical")," - ","[","Tamanho vertical","]","(properties_ResizingOptions. md#vertical-sizing) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#visibility"}),"Visibilidade")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Largura")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#wordwrap"}),"Wordwrap")),(0,o.kt)("hr",null),(0,o.kt)("h2",a({},{id:"alternativas"}),"Alternativas"),(0,o.kt)("p",null,"You can also represent field and variable expressions in your forms using alternative objects, more particularly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can display and enter data from database fields directly in columns of ",(0,o.kt)("a",a({parentName:"li"},{href:"/docs/pt/18/FormObjects/listboxOverview"}),"selection type List boxes"),"."),(0,o.kt)("li",{parentName:"ul"},"You can represent a list field or variable directly in a form using ",(0,o.kt)("a",a({parentName:"li"},{href:"popupMenuDropdownList_overview"}),"Pop-up Menus/Drop-down Lists")," and ",(0,o.kt)("a",a({parentName:"li"},{href:"/docs/pt/18/FormObjects/comboBoxOverview"}),"Combo Boxes")," objects."),(0,o.kt)("li",{parentName:"ul"},"You can represent a boolean expression as a ",(0,o.kt)("a",a({parentName:"li"},{href:"/docs/pt/18/FormObjects/checkboxOverview"}),"check box")," or as a ",(0,o.kt)("a",a({parentName:"li"},{href:"/docs/pt/18/FormObjects/radiobuttonOverview"}),"radio button")," object.")))}m.isMDXComponent=!0},43076:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"}}]);