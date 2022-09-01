"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90993],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>c});var a=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=a.createContext({}),o=function(e){var t=a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(l),c=n,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||r;return l?a.createElement(k,i(i({ref:t},p),{},{components:l})):a.createElement(k,i({ref:t},p))}));function c(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var o=2;o<r;o++)i[o]=l[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},18367:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});l(67294);var a=l(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},n.apply(this,arguments)}function r(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}const i={id:"stylesheets",title:"Feuilles de style (style sheets)"},s=void 0,u={unversionedId:"FormEditor/stylesheets",id:"FormEditor/stylesheets",title:"Feuilles de style (style sheets)",description:"Une feuille de style regroupe une combinaison d\u2019attributs d'objets formulaire \u2014  allant des attributs de texte \xe0 quasiment tous les attributs d'objet disponibles.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/FormEditor/createStylesheet.md",sourceDirName:"FormEditor",slug:"/FormEditor/stylesheets",permalink:"/docs/fr/next/FormEditor/stylesheets",draft:!1,tags:[],version:"current",frontMatter:{id:"stylesheets",title:"Feuilles de style (style sheets)"},sidebar:"docs",previous:{title:"A propos des formulaires 4D",permalink:"/docs/fr/next/FormEditor/forms"},next:{title:"Images",permalink:"/docs/fr/next/FormEditor/pictures"}},o={},p=[{value:"Cr\xe9ation ou modification d&#39;une feuille de style",id:"cr\xe9ation-ou-modification-dune-feuille-de-style",level:2},{value:"Fichiers feuilles de style",id:"fichiers-feuilles-de-style",level:2},{value:"Architecture des feuilles de style",id:"architecture-des-feuilles-de-style",level:2},{value:"S\xe9lecteurs de feuilles de style",id:"s\xe9lecteurs-de-feuilles-de-style",level:2},{value:"Type d&#39;objet",id:"type-dobjet",level:3},{value:"Nom d&#39;objet",id:"nom-dobjet",level:3},{value:"Classe",id:"classe",level:3},{value:"Tous les objets",id:"tous-les-objets",level:3},{value:"Attributs sp\xe9cifiques",id:"attributs-sp\xe9cifiques",level:3},{value:"Syntaxes prises en charge",id:"syntaxes-prises-en-charge",level:4},{value:"Exemples",id:"exemples",level:4},{value:"D\xe9clarations de feuilles de style",id:"d\xe9clarations-de-feuilles-de-style",level:2},{value:"Media Queries",id:"media-queries",level:3},{value:"Exemple",id:"exemple",level:5},{value:"Object Attributes",id:"object-attributes",level:3},{value:"Mappage d&#39;attributs",id:"mappage-dattributs",level:4},{value:"Valeurs d&#39;attributs sp\xe9cifiques",id:"valeurs-dattributs-sp\xe9cifiques",level:4},{value:"Ordre de priorit\xe9",id:"ordre-de-priorit\xe9",level:2},{value:"JSON vs Feuille de style",id:"json-vs-feuille-de-style",level:3},{value:"Feuilles de style multiples",id:"feuilles-de-style-multiples",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}],d={toc:p};function m(e){var{components:t}=e,i=r(e,["components"]);return(0,a.kt)("wrapper",n({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Une feuille de style regroupe une combinaison d\u2019attributs d'objets formulaire \u2014  allant des attributs de texte \xe0 quasiment tous les attributs d'objet disponibles."),(0,a.kt)("p",null,"Outre l\u2019harmonisation de l\u2019interface de vos applications, l\u2019usage de feuilles de style a trois avantages majeurs :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gain de temps en d\xe9veloppement : pour chaque objet, vous d\xe9finissez en une seule op\xe9ration un ensemble de param\xe9trages."),(0,a.kt)("li",{parentName:"ul"},"Facilit\xe9 de maintenance : les feuilles de styles ont la propri\xe9t\xe9 de modifier l\u2019apparence de tous les objets qui les utilisent. Changer, par exemple, la taille de la police dans une feuille de style changera la taille de la police pour tous les objets qui utilisent cette feuille de style."),(0,a.kt)("li",{parentName:"ul"},"Contr\xf4le du d\xe9veloppement multi-plate-forme : les feuilles de style peuvent s'appliquer aux deux plate-formes macOS et Windows, ou bien \xe0 l'une d'elles uniquement. Lorsqu'une feuille de style est appliqu\xe9e, 4D utilise automatiquement la feuille de style appropri\xe9e.")),(0,a.kt)("h2",n({},{id:"cr\xe9ation-ou-modification-dune-feuille-de-style"}),"Cr\xe9ation ou modification d'une feuille de style"),(0,a.kt)("p",null,'Vous cr\xe9ez des feuilles de styles \xe0 partir d\'un \xe9diteur de feuilles de styles de votre choix, en sauvegardant le fichier sous une extension ".css" dans le dossier "/SOURCES" du projet.'),(0,a.kt)("p",null,"La Bo\xeete \xe0 Outils fournit une page ",(0,a.kt)("strong",{parentName:"p"},"Feuilles de style")," sous forme de raccourci pour cr\xe9er et modifier l'une des trois feuilles de style nomm\xe9es en fonction de la plate-forme."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ouvrez la page ",(0,a.kt)("strong",{parentName:"p"},"Styles")," en choisissant la ",(0,a.kt)("strong",{parentName:"p"},"Bo\xeete \xe0 outils > Styles ")," dans le menu D\xe9veloppement ou en cliquant sur l'ic\xf4ne ",(0,a.kt)("strong",{parentName:"p"},"Bo\xeete \xe0 outils")," dans la barre d'outils de l'\xe9diteur de formulaire."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:l(14897).Z,width:"787",height:"582"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choisissez le type de feuille de style que vous souhaitez cr\xe9er et cliquez sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"Cr\xe9er")," ou ",(0,a.kt)("strong",{parentName:"p"},"Editer")," : ",(0,a.kt)("img",{src:l(78442).Z,width:"116",height:"23"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"La feuille de style s'ouvrira dans votre \xe9diteur de texte par d\xe9faut."))),(0,a.kt)("h2",n({},{id:"fichiers-feuilles-de-style"}),"Fichiers feuilles de style"),(0,a.kt)("p",null,"4D accepte trois fichiers feuilles de style sp\xe9cifiques :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Feuille de style"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Plate-forme"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets.css"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Feuille de style globale par d\xe9faut pour macOS et Windows")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_mac.css"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Pour d\xe9finir des styles d'attributs sp\xe9cifiques de macOS uniquement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_windows.css"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Pour d\xe9finir des styles d'attributs sp\xe9cifiques pour Windows uniquement")))),(0,a.kt)("p",null,'Ces fichiers sont stock\xe9s dans le dossier "/SOURCES" du projet. Ils sont \xe9galement accessibles directement via le ',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/next/FormEditor/overview#css-preview"}),"CSS Preview")," dans la barre d'outils de l'\xe9diteur de formulaires."),(0,a.kt)("h2",n({},{id:"architecture-des-feuilles-de-style"}),"Architecture des feuilles de style"),(0,a.kt)("p",null,"While adapted to meet the specific needs of 4D forms, style sheets for application projects generally follow CSS2 syntax and grammar."),(0,a.kt)("p",null,"Chaque r\xe8gle de style d'une feuille de style contient deux parties :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"un ",(0,a.kt)("em",{parentName:"p"},"s\xe9lecteur"),' - Un s\xe9lecteur d\xe9finit o\xf9 appliquer le style. 4D prend en charge les s\xe9lecteurs "object type", "object name", "class", "all objects", et "attribute value".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"une ",(0,a.kt)("em",{parentName:"p"},"d\xe9claration")," - La d\xe9claration d\xe9finit le style \xe0 appliquer. Plusieurs lignes de d\xe9claration peuvent \xeatre regroup\xe9es pour former un bloc de d\xe9claration. Chaque ligne d'un bloc de d\xe9claration CSS doit se terminer par un point-virgule et l'int\xe9gralit\xe9 du bloc doit \xeatre entour\xe9e d'accolades."))),(0,a.kt)("h2",n({},{id:"s\xe9lecteurs-de-feuilles-de-style"}),"S\xe9lecteurs de feuilles de style"),(0,a.kt)("h3",n({},{id:"type-dobjet"}),"Type d'objet"),(0,a.kt)("p",null,"Le type d'objet d\xe9finit le type d'objet \xe0 styler et correspond au s\xe9lecteur d'\xe9l\xe9ment CSS."),(0,a.kt)("p",null,"Sp\xe9cifiez le type d'objet, puis entre accolades, d\xe9clarez le(s) style(s) \xe0 appliquer."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Le type d'objet correspond \xe0 la propri\xe9t\xe9 JSON ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/next/FormObjects/propertiesObject#type"})," type")," des objets de formulaire.")),(0,a.kt)("p",null,"Dans l'exemple suivant, tous les objets du type ",(0,a.kt)("em",{parentName:"p"},"bouton")," afficheront du texte dans la police Helvetica Neue, d'une taille de 20 pixels :"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"button {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n")),(0,a.kt)("p",null,'Pour appliquer le m\xeame style \xe0 plusieurs types d\u2019objets, sp\xe9cifiez les types d\'objets s\xe9par\xe9s par une "," puis, entre accolades, d\xe9clarez le(s) style(s) \xe0 appliquer :'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"text, input {\n  text-align: left;\n  stroke: grey;\n}\n")),(0,a.kt)("h3",n({},{id:"nom-dobjet"}),"Nom d'objet"),(0,a.kt)("p",null,"Le nom de l'objet correspond au ",(0,a.kt)("strong",{parentName:"p"},"s\xe9lecteur d'ID")," CSS et d\xe9finit un objet sp\xe9cifique \xe0 styler, puisque que ce nom est unique dans le formulaire."),(0,a.kt)("p",null,"D\xe9signez l'objet avec le caract\xe8re \"#\" avant le nom de l'objet, puis entre accolades, d\xe9clarez le(s) style(s) \xe0 appliquer."),(0,a.kt)("p",null,"Dans l'exemple suivant, le texte de l'objet portant le nom \"okButton\" sera affich\xe9 dans la police Helvetica Neue, avec une taille de 20 pixels :"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"#okButton {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n")),(0,a.kt)("h3",n({},{id:"classe"}),"Classe"),(0,a.kt)("p",null,"Class correspond au ",(0,a.kt)("strong",{parentName:"p"},"s\xe9lecteur class")," CSS et d\xe9finit un objet le style de tous les objets formulaires de l'attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"class"),"."),(0,a.kt)("p",null,'Vous pouvez sp\xe9cifier les classes \xe0 utiliser avec un caract\xe8re "." suivi du nom de la classe et, entre accolades, d\xe9clarez le(s) style(s) \xe0 appliquer.'),(0,a.kt)("p",null,"Dans l'exemple suivant, le texte de tous les objets de la classe ",(0,a.kt)("inlineCode",{parentName:"p"},"okButtons")," sera affich\xe9 dans la police Helvetica Neue, avec une taille de 20 pixels, align\xe9e au centre :"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),".okButtons {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n    text-align: center;\n}\n")),(0,a.kt)("p",null,'Pour indiquer qu\'un style doit \xeatre appliqu\xe9 uniquement \xe0 des objets de type diff\xe9rent, sp\xe9cifiez le type suivi de "." et du nom de la classe, puis d\xe9clarez entre accolades le(s) style(s) \xe0 appliquer.'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"text.center {\n  text-align: center;\n  stroke: red;\n}\n")),(0,a.kt)("p",null,"Dans la description du formulaire 4D, vous associez un nom de classe \xe0 un objet \xe0 l'aide de l'attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"class"),'. Cet attribut contient un ou plusieurs noms de "class", s\xe9par\xe9s par un espace :'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),'class: "okButtons important"       \n')),(0,a.kt)("h3",n({},{id:"tous-les-objets"}),"Tous les objets"),(0,a.kt)("p",null,'Le caract\xe8re "*" correspond au ',(0,a.kt)("strong",{parentName:"p"},"s\xe9lecteur universel")," CSS et indique que le style qui suit sera appliqu\xe9 \xe0 tous les objets du formulaire."),(0,a.kt)("p",null,"Indiquez qu'un style doit s'appliquer \xe0 tous les objets de formulaire avec le caract\xe8re \"*\", puis, entre accolades, d\xe9clarez le(s) style(s) \xe0 appliquer."),(0,a.kt)("p",null,"Dans l'exemple suivant, tous les objets auront un fond gris :"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"* {\n  fill: gray;\n}\n")),(0,a.kt)("h3",n({},{id:"attributs-sp\xe9cifiques"}),"Attributs sp\xe9cifiques"),(0,a.kt)("p",null,"Les styles correspondent aux ",(0,a.kt)("strong",{parentName:"p"},"s\xe9lecteurs d'attributs")," et peuvent s'appliquer \xe0 tous les objets du formulaire avec un attribut sp\xe9cifique."),(0,a.kt)("p",null,"Sp\xe9cifiez l'attribut entre parenth\xe8ses, puis entre accolades, d\xe9clarez le(s) style(s) \xe0 appliquer."),(0,a.kt)("h4",n({},{id:"syntaxes-prises-en-charge"}),"Syntaxes prises en charge"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Syntaxe"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"[attribute]"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"les objets ayant un ",(0,a.kt)("inlineCode",{parentName:"td"},"attribute"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),'[attribute="valeur"]'),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"les objets dont la valeur de l'",(0,a.kt)("inlineCode",{parentName:"td"},"attribute"),' correspond \xe0 la "valeur" indiqu\xe9e')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),'[attribute~="valeur"]'),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"les objets dont la valeur de ",(0,a.kt)("inlineCode",{parentName:"td"},"attribute"),' correspond \xe0 la "valeur" pr\xe9sente dans une liste de mots s\xe9par\xe9s par des espaces')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"[attribute","|",'="valeur"]'),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"les objets dont ",(0,a.kt)("inlineCode",{parentName:"td"},"attribute"),' contient une valeur qui commence par celle de "valeur"')))),(0,a.kt)("h4",n({},{id:"exemples"}),"Exemples"),(0,a.kt)("p",null,"Tous les objets ayant l'attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"borderStyle")," auront des lignes violettes :"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"[borderStyle]\n{\n     stroke: purple;\n}\n")),(0,a.kt)("p",null,'Tous les objets de type texte ayant un attribut text dont la valeur est "Hello" auront des lettres bleues :'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"text[text=Hello]\n{\n     stroke: blue;\n}\n")),(0,a.kt)("p",null,'Tous les objets ayant un attribut text dont la valeur est "Hello" auront des traits bleus :'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"[text~=Hello]\n{\n     stroke: blue;\n}\n\n")),(0,a.kt)("p",null,'Tous les objets de type texte ayant un attribut text dont la valeur commence par "Hello" auront des lettres jaunes :'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"text[text|=Hello]\n{\n     stroke: yellow;\n\n\n}\n")),(0,a.kt)("h2",n({},{id:"d\xe9clarations-de-feuilles-de-style"}),"D\xe9clarations de feuilles de style"),(0,a.kt)("h3",n({},{id:"media-queries"}),"Media Queries"),(0,a.kt)("p",null,"Media queries are used to apply color schemes to an application."),(0,a.kt)("p",null,"A media query is composed of a media feature and a value (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"\\&#060;media feature&#062;:\\&#060;value&#062;")," )."),(0,a.kt)("p",null,"Available media features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prefers-color-scheme"))),(0,a.kt)("p",null,"Available media feature expressions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"light"),(0,a.kt)("br",null),"For using a light scheme"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dark"),(0,a.kt)("br",null),"For using a dark scheme")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Color schemes are only supported on macOS.")),(0,a.kt)("h5",n({},{id:"exemple"}),"Exemple"),(0,a.kt)("p",null,"This CSS defines a color combination for text and text background in the light scheme (default) and another combination when the dark scheme is selected:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"@media (prefers-color-scheme: light) {\n .textScheme {\n   fill: LightGrey;\n   stroke: Black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .textScheme {\n    fill: DarkSlateGray;\n    stroke: LightGrey;\n  }\n}\n")),(0,a.kt)("h3",n({},{id:"object-attributes"}),"Object Attributes"),(0,a.kt)("p",null,"La majorit\xe9 des attributs d'objet formulaire peuvent \xeatre d\xe9finis dans une feuille de style, \xe0 l'exception des attributs suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"classe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ev\xe9nement")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"choiceList"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"excludedList"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"labels"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"requiredList")," (list type)")),(0,a.kt)("p",null,"Les attributs d'objet formulaire peuvent \xeatre d\xe9clar\xe9s avec leur ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/next/FormObjects/propertiesReference"}),"nom JSON")," en tant qu'attributs CSS (\xe0 l'exclusion des types d'objet, m\xe9thodes, \xe9v\xe9nements et listes)."),(0,a.kt)("h4",n({},{id:"mappage-dattributs"}),"Mappage d'attributs"),(0,a.kt)("p",null,"Les attributs r\xe9pertori\xe9s ci-dessous peuvent accepter le nom 4D ou le nom CSS."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"4D"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"CSS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"borderStyle")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"border-style"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"border-style")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"background-color"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"fontFamily")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"font-family"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"fontSize")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"font-size"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"fontStyle")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"font-style"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"fontWeight")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"font-weight"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"stroke")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"color"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"textAlign")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"text-align"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"textDecoration")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"text-decoration"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"verticalAlign")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"vertical-align"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"4D-specific values (",(0,a.kt)("em",{parentName:"p"},"e.g."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sunken"),") are not supported when using CSS attribute names.")),(0,a.kt)("h4",n({},{id:"valeurs-dattributs-sp\xe9cifiques"}),"Valeurs d'attributs sp\xe9cifiques"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pour les attributs ",(0,a.kt)("inlineCode",{parentName:"li"},"icon"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"picture"),", et ",(0,a.kt)("inlineCode",{parentName:"li"},"customBackgroundPicture")," qui prennent en charge un chemin vers une image, la syntaxe est la suivante :")),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),'icon: url("/RESOURCES/Images/Buttons/edit.png"); /* chemin absolu */\nicon: url("edit.png"); /* chemin relatif vers le fichier du formulaire */\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pour ",(0,a.kt)("inlineCode",{parentName:"p"},"fill"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stroke")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"alternateFill")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"horizontalLineStroke")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"verticalLineStroke"),", trois syntaxes sont prises en charge :"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nom la couleur CSS : ",(0,a.kt)("inlineCode",{parentName:"li"},"fill: red;")),(0,a.kt)("li",{parentName:"ul"},"Valeur hexad\xe9cimale : ",(0,a.kt)("inlineCode",{parentName:"li"},"fill: #FF0000;")),(0,a.kt)("li",{parentName:"ul"},"fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"rgb()")," : ",(0,a.kt)("inlineCode",{parentName:"li"},"fill:rgb(255,0,0)")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Si une cha\xeene utilise des caract\xe8res interdits en CSS, vous pouvez l'entourer de guillemets simples ou doubles."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"une r\xe9f\xe9rence xliff : ",(0,a.kt)("inlineCode",{parentName:"li"},'tooltip: ":xliff:CommonMenuFile";')),(0,a.kt)("li",{parentName:"ul"},"un datasource avec l'expression de champ : ",(0,a.kt)("inlineCode",{parentName:"li"},'dataSource: "[Table_1:1]ID:1";'))))),(0,a.kt)("h2",n({},{id:"ordre-de-priorit\xe9"}),"Ordre de priorit\xe9"),(0,a.kt)("p",null,"Les projets 4D hi\xe9rarchisent les d\xe9finitions de style en conflit, d'abord par la d\xe9finition du formulaire, puis par les feuilles de style."),(0,a.kt)("h3",n({},{id:"json-vs-feuille-de-style"}),"JSON vs Feuille de style"),(0,a.kt)("p",null,"Si un attribut est d\xe9fini dans la description du formulaire JSON et dans une feuille de style, 4D utilisera la valeur du fichier JSON."),(0,a.kt)("p",null,"Pour remplacer ce comportement, la valeur du style doit \xeatre suivie d'une d\xe9claration ",(0,a.kt)("inlineCode",{parentName:"p"},"! Important"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Exemple 1 :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description du formulaire JSON"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Feuille de style"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"4D affiche"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"text": "Button",')),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"text: Edit;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"Button"'))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Exemple 2 :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description du formulaire JSON"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Feuille de style"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"4D affiche"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"text": "Button",')),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"text: Edit !important;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"Edit"'))))),(0,a.kt)("h3",n({},{id:"feuilles-de-style-multiples"}),"Feuilles de style multiples"),(0,a.kt)("p",null,"A l'ex\xe9cution, 4D hi\xe9rarchise automatiquement les feuilles de style dans l'ordre suivant :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Le formulaire 4D chargera d\u2019abord le fichier CSS par d\xe9faut ",(0,a.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets.css"),"."),(0,a.kt)("li",{parentName:"ol"},"Il chargera ensuite le fichier CSS pour la plate-forme courante ",(0,a.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets__mac.css")," ou ",(0,a.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets_windows.css"),"."),(0,a.kt)("li",{parentName:"ol"},"S'il existe, il chargera alors un fichier CSS sp\xe9cifique d\xe9fini dans le formulaire JSON :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"un fichier pour les deux plates-formes :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",n({parentName:"pre"},{}),'"css": "<path>" \n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ou une liste de fichiers pour les deux plates-formes :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",n({parentName:"pre"},{}),'"css": [\n     "<path1>",\n     "<path2>" \n      ],\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ou une liste de fichiers par plate-forme :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",n({parentName:"pre"},{}),' "css": [\n        {"path": "<path>", "media": "mac"},\n        {"path": "<path>", "media": "windows"},\n    ],\n')))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les chemins de fichiers peuvent \xeatre relatifs ou absolus."),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Relative paths are resolved relative to the JSON form description file."),(0,a.kt)("li",{parentName:"ul"},"For security reasons, only filesystem paths are accepted for absolute paths. (",(0,a.kt)("em",{parentName:"li"},"ex :"),', "/RESOURCES", "/DATA")'))),(0,a.kt)("h2",n({},{id:"voir-\xe9galement"}),"Voir \xe9galement"),(0,a.kt)("p",null,"Voir la pr\xe9sentation vid\xe9o ",(0,a.kt)("a",n({parentName:"p"},{href:"https://www.youtube.com/watch?v=3Hk4FUQENyQ"}),(0,a.kt)("strong",{parentName:"a"},"CSS for 4D Forms")),"."))}m.isMDXComponent=!0},78442:(e,t,l)=>{l.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAXCAIAAABVmPyEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEFSURBVGhD7ZbBDYMwDEXZiW0ySW+swipM0XMnoTF17IBDpVYYI/SffIjj30MfFm03AzdIbvd4olwKch1L5L7AcUCuI5DrSKzcaeg7ph8mvrwPcXIXsWnkLreDnH9gTBd+LFFySa2a/R/Itey6JVkplZ3W1waH85ihC+14bvKxxMltLxz5KpNqK8e0jsuoynzLxxAnt71clSBdw4VPPM8ZI7eZDyVI7q7djax1RG/yqSn3AkYrouTyDqoM/rdQyVoS0hAyJI9Grs2Lbns4hTi5GfqqBbZSy1oHyEnp6TdPP0B8jG3yotIeTiFU7t2BXEcg1xHIdWQrF3V8Qa5jZbnACch1Y57fiJdV2WNWgUcAAAAASUVORK5CYII="},14897:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/stylesheets-566a8cb29cc275a6544f20ce64e0118e.png"}}]);