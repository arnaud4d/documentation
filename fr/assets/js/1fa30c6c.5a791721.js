"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56327],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21961:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"cli",title:"Interface de ligne de commande"},i=void 0,s={unversionedId:"Admin/cli",id:"version-19-R6/Admin/cli",title:"Interface de ligne de commande",description:"Vous pouvez utiliser le terminal macOS ou la console Windows pour piloter vos applications 4D (4D et 4D Server) \xe0 l'aide de lignes de commande. Cette fonctionnalit\xe9 vous permet notamment :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/Admin/cli.md",sourceDirName:"Admin",slug:"/Admin/cli",permalink:"/documentation/fr/docs/Admin/cli",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"cli",title:"Interface de ligne de commande"},sidebar:"docs",previous:{title:"Explorateur de donn\xe9es Web",permalink:"/documentation/fr/docs/Admin/dataExplorer"},next:{title:"Protocole TLS (HTTPS)",permalink:"/documentation/fr/docs/Admin/tls"}},d={},p=[{value:"Informations de base",id:"informations-de-base",level:2},{value:"Lancer une application 4D",id:"lancer-une-application-4d",level:2},{value:"Exemples",id:"exemples",level:3}],u={toc:p};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Vous pouvez utiliser le terminal macOS ou la console Windows pour piloter vos applications 4D (4D et 4D Server) \xe0 l'aide de lignes de commande. Cette fonctionnalit\xe9 vous permet notamment :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"de lancer une base de donn\xe9es \xe0 distance, ce qui peut \xeatre particuli\xe8rement utile pour administrer des serveurs Web."),(0,n.kt)("li",{parentName:"ul"},"d'ex\xe9cuter des tests automatiques pour vos applications.")),(0,n.kt)("h2",r({},{id:"informations-de-base"}),"Informations de base"),(0,n.kt)("p",null,"Vous pouvez ex\xe9cuter des lignes de commande pour les applications 4D \xe0 l'aide du terminal macOS ou de la console Windows."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS, vous devez utiliser la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"open"),"."),(0,n.kt)("li",{parentName:"ul"},"Sous Windows, vous pouvez simplement passer les arguments directement.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sous macOS, vous pouvez passer les arguments directement en allant dans le dossier contenant l'application, \xe0 l'int\xe9rieur du package (Contents/MacOS), ce qui permet d'adresser le flux stderr. Par exemple, si le package 4D se trouve dans le dossier ",(0,n.kt)("inlineCode",{parentName:"p"},"MyFolder"),", vous devez \xe9crire la ligne de commande comme suit : ",(0,n.kt)("inlineCode",{parentName:"p"},"/MyFolder/4D.app/Contents/MacOS/4D"),". Nous vous recommandons cependant d'utiliser la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," chaque fois que vous n'avez pas besoin d'acc\xe9der au flux stderr.")),(0,n.kt)("h2",r({},{id:"lancer-une-application-4d"}),"Lancer une application 4D"),(0,n.kt)("p",null,"Voici une description des lignes de commande et des arguments pris en charge pour le lancement d'applications 4D."),(0,n.kt)("p",null,"Syntaxe :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]] \n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]\n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Argument","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"applicationPath")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Chemin de 4D, 4D Server ou de l'application fusionn\xe9e"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lance l'application. Identique au double-clic sur l'application 4D. Lorsqu'elle est appel\xe9e sans argument de fichier de structure, l'application est ex\xe9cut\xe9e et la bo\xeete de dialogue \xabs\xe9lectionner la base de donn\xe9es\xbb appara\xeet.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--version")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Affiche la version de l'application et quitte")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--help")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Affiche le message d'aide et quitte. Autres arguments : -?, -h")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--project")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"projectPath ","|"," packagePath ","|"," 4dlinkPath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fichier de projet \xe0 ouvrir avec le fichier de donn\xe9es courant. Aucune bo\xeete de dialogue n'appara\xeet.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--data")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"dataPath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fichier de donn\xe9es \xe0 ouvrir avec le fichier de projet d\xe9sign\xe9. S'il n'est pas indoqu\xe9, 4D utilise le dernier fichier de donn\xe9es ouvert.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--opening-mode")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"interpreted ","|"," compiled"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Base de donn\xe9es de requ\xeates \xe0 ouvrir en mode interpr\xe9t\xe9 ou compil\xe9. Aucune erreur n'est g\xe9n\xe9r\xe9e si le mode demand\xe9 n'est pas disponible.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--create-data")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cr\xe9e automatiquement un nouveau fichier de donn\xe9es si aucun fichier de donn\xe9es valide n'est trouv\xe9. Aucune bo\xeete de dialogue n'appara\xeet. 4D utilise le nom de fichier pass\xe9 dans l'argument \"--data\" s'il en exise un (g\xe9n\xe8re une erreur si un fichier du m\xeame nom existe d\xe9j\xe0).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--user-param")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cha\xeene utilisateur personnalis\xe9e"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Une cha\xeene qui sera disponible dans l\'application 4D via la commande Get database parameter (la cha\xeene ne doit pas commencer par un caract\xe8re "-", qui est r\xe9serv\xe9).')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--headless")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lance 4D, 4D Server ou l'application fusionn\xe9e sans interface (mode headless). Dans ce mode :",(0,n.kt)("li",null," Le mode D\xe9veloppement n'est pas disponible, la base de donn\xe9es d\xe9marre en mode Application"),(0,n.kt)("li",null," Aucune barre d'outils, barre de menus, fen\xeatre MDI ou \xe9cran de d\xe9marrage ne s'affiche"),(0,n.kt)("li",null,"Aucune ic\xf4ne n'est affich\xe9e dans le dock ou la barre des t\xe2ches"),(0,n.kt)("li",null,'La base de donn\xe9es ouverte n\'est pas enregistr\xe9e dans le menu "Bases de donn\xe9es r\xe9centes"'),(0,n.kt)("li",null,"Le journal de diagnostic est automatiquement lanc\xe9 (voir ","[SET DATABASE PARAMETER]"," (",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page642.html"}),"https://doc.4d.com/4dv19/help/command/en/page642.html"),"), s\xe9lecteur 79)"),(0,n.kt)("li",null,"Chaque appel \xe0 une bo\xeete de dialogue est intercept\xe9 et une r\xe9ponse automatique est fournie (par exemple OK pour la commande ","[ALERT]"," (",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page41.html"}),"https://doc.4d.com/4dv19/help/command/en/page41.html"),"), Abort pour un bo\xeete de dialogue d'erreur, etc.). Toutes les commandes intercept\xe9es (*) sont enregistr\xe9es dans le journal de diagnostic."),(0,n.kt)("br",null),"Pour les besoins de maintenance, vous pouvez envoyer n'importe quel texte aux flux de sortie standard \xe0 l'aide de la commande ",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page667.html"}),"LOG EVENT"),". A noter que les applications 4D headless ne peuvent \xeatre ferm\xe9es qu'en appelant ",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page291.html"}),"QUIT 4D")," ou en utilisant le gestionnaire de t\xe2ches du syst\xe8me d'exploitation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--dataless")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lance 4D, 4D Server ou une application fusionn\xe9e en mode headless. Le mode Dataless est utile lorsque 4D ex\xe9cute des t\xe2ches sans donn\xe9es (compilation de projet par exemple). Dans ce mode : ",(0,n.kt)("li",null,"Aucun fichier contenant des donn\xe9es n'est ouvert, m\xeame s'il est sp\xe9cifi\xe9 dans la ligne de commande ou le fichier ",(0,n.kt)("inlineCode",{parentName:"td"},".4DLink"),", ou lors de l'utilisation des commandes",(0,n.kt)("inlineCode",{parentName:"td"}," CREATE DATA FILE")," et ",(0,n.kt)("inlineCode",{parentName:"td"},"OPEN DATA FILE"),"."),(0,n.kt)("li",null,"Les commandes qui manipulent les donn\xe9es g\xe9n\xe9reront une erreur. Par exemple : \xabCREATE RECORD\xbb lance \xabaucune table \xe0 laquelle appliquer la commande\xbb."),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Note")," :",(0,n.kt)("li",null,"S'il est pass\xe9 en ligne de commande, le mode dataless s'applique \xe0 toutes les bases de donn\xe9es ouvertes dans 4D, tant que l'application n'est pas ferm\xe9e."),(0,n.kt)("li",null,"S'il est pass\xe9 \xe0 l'aide du fichier ",(0,n.kt)("inlineCode",{parentName:"td"},".4DLink"),", le mode dataless ne s'applique qu'\xe0 la base de donn\xe9es sp\xe9cifi\xe9e dans le fichier",(0,n.kt)("inlineCode",{parentName:"td"}," .4DLink"),". Pour plus d'informations sur les fichiers ",(0,n.kt)("inlineCode",{parentName:"td"},".4DLink"),", voir ","[Raccourcis d'ouverture de projet]"," (../GettingStarted/creating.md#project-opening-shortcuts)."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-settings-file")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Chemin de fichier"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Chemin du fichier WebAdmin ",(0,n.kt)("inlineCode",{parentName:"td"},".4DSettings")," personnalis\xe9 pour le ",(0,n.kt)("a",r({parentName:"td"},{href:"/documentation/fr/docs/Admin/webAdmin"}),"serveur Web WebAdmin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-access-key")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cl\xe9 d'acc\xe8s au ",(0,n.kt)("a",r({parentName:"td"},{href:"/documentation/fr/docs/Admin/webAdmin"}),"serveur Web WebAdmin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-auto-start")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Statut du d\xe9marrage automatique du ",(0,n.kt)("a",r({parentName:"td"},{href:"/documentation/fr/docs/Admin/webAdmin"}),"serveur Web WebAdmin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-store-settings")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Stocke la cl\xe9 d'acc\xe8s et les param\xe8tres de d\xe9marrage automatique dans le fichier de param\xe8tres courant (c'est-\xe0-dire le fichier ",(0,n.kt)("a",r({parentName:"td"},{href:"/documentation/fr/docs/Admin/webAdmin#webadmin-settings"}),(0,n.kt)("inlineCode",{parentName:"a"},"WebAdmin.4DSettings"))," par d\xe9faut ou un fichier personnalis\xe9 d\xe9sign\xe9 par le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-settings-path"),"). Utilisez l'argument ",(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-store-settings")," pour enregistrer ces param\xe8tres si n\xe9cessaire")))),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"/documentation/fr/docs/Debugging/debugLogFiles#4ddiagnosticlogtxt"}),"Diagnostic log file")," (licence alert, conversion dialog, database selection, data file selection). Dans ce cas, un message d'erreur est envoy\xe9 \xe0 la fois dans le flux stderr et dans le journal d'\xe9v\xe9nements syst\xe8me, puis l'application se ferme."),(0,n.kt)("h3",r({},{id:"exemples"}),"Exemples"),(0,n.kt)("p",null,'Ces exemples supposent que votre application 4D est stock\xe9e sur le bureau et que la base de donn\xe9es \xe0 ouvrir se trouve dans le dossier "Documents".'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'Le dossier courant de l\'utilisateur est atteint \xe0 l\'aide de la commande "~" sous macOS et de la commande "%HOMEPATH%" sous Windows.')),(0,n.kt)("p",null,'Ces exemples supposent que votre application 4D est stock\xe9e sur le bureau et que la base de donn\xe9es \xe0 ouvrir se trouve dans le dossier "Documents".'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"open ~/Desktop/4D.app\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Desktop\\4D\\4D.exe\n")),(0,n.kt)("p",null,'Ces exemples supposent que votre application 4D est stock\xe9e sur le bureau et que la base de donn\xe9es \xe0 ouvrir se trouve dans le dossier "Documents".'),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn open ~/Desktop/4D.app --args ~/Documents/myDB.4dbase\n")),(0,n.kt)("p",null,"Lancer l'application :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn open ~/Desktop/4D.app --args ~/Documents/myProj/Project/myProj.4DProject\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Desktop\\4D\\4D.exe %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n")),(0,n.kt)("p",null,"Lancer l'application avec un fichier de package sur macOS :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Desktop\\4D\\4D.exe --project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD\nou :\n%HOMEPATH%\\Desktop\\4D\\4D.exe /project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data %HOMEPATH%\\Documents\\data\\myData.4DD\n")),(0,n.kt)("p",null,"Lancer l'application avec un fichier projet :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"open ~/Desktop/4D.app MyDatabase.4DLink\n")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'open "~/Desktop/4D Server.app" MyDatabase.4DLink\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Desktop\\4D.exe MyDatabase.4DLink\n")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'%HOMEPATH%\\Desktop\\4D Server.exe" MyDatabase.4DLink\n')),(0,n.kt)("p",null,"Lancer l'application avec un fichier projet et un fichier de donn\xe9es :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"open ~/Desktop/4D.app ~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Desktop\\4D\\4D.exe %HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode compiled --create-data true\n")),(0,n.kt)("p",null,"Lancer l'application avec un fichier .4DLink :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'%HOMEPATH%\\Desktop\\4D\\4D.exe --project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n')),(0,n.kt)("p",null,"Lancez l'application en mode compil\xe9 et cr\xe9er un fichier de donn\xe9es s'il n'est pas disponible :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous macOS :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless\n")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"open ~/Desktop/MyBuiltRemoteApp \u2212\u2212headless\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sous Windows :")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Desktop\\4D\\4D.exe --project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n%HOMEPATH%\\Desktop\\4D\\MyBuiltRemoteApp.exe --headless\n")))}m.isMDXComponent=!0}}]);