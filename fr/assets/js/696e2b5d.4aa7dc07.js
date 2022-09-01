"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95983],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,h=c["".concat(i,".").concat(m)]||c[m]||p[m]||a;return t?n.createElement(h,l(l({ref:r},d),{},{components:t})):n.createElement(h,l({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},98074:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={id:"error-handling",title:"Gestion des erreurs"},s=void 0,i={unversionedId:"Concepts/error-handling",id:"version-18/Concepts/error-handling",title:"Gestion des erreurs",description:"Le traitement des erreurs consiste \xe0 anticiper les erreurs pouvant survenir dans votre application et \xe0 y r\xe9pondre. 4D fournit un support complet pour la d\xe9tection et la signalisation des erreurs lors de l'ex\xe9cution, ainsi que pour l'analyse de leurs conditions.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/fr/18/Concepts/error-handling",draft:!1,tags:[],version:"18",frontMatter:{id:"error-handling",title:"Gestion des erreurs"},sidebar:"docs",previous:{title:'Structures r\xe9p\xe9titives (ou "boucles")',permalink:"/docs/fr/18/Concepts/looping"},next:{title:"Modes interpr\xe9t\xe9 et compil\xe9",permalink:"/docs/fr/18/Concepts/interpreted-compiled"}},u={},d=[{value:"Installer une m\xe9thode de gestion des erreurs",id:"installer-une-m\xe9thode-de-gestion-des-erreurs",level:2},{value:"Port\xe9e et composants",id:"port\xe9e-et-composants",level:3},{value:"G\xe9rer les erreurs dans une m\xe9thode",id:"g\xe9rer-les-erreurs-dans-une-m\xe9thode",level:3},{value:"Exemple",id:"exemple",level:4},{value:"Utiliser une m\xe9thode de gestion des erreurs vide",id:"utiliser-une-m\xe9thode-de-gestion-des-erreurs-vide",level:3}],p={toc:d};function c(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Le traitement des erreurs consiste \xe0 anticiper les erreurs pouvant survenir dans votre application et \xe0 y r\xe9pondre. 4D fournit un support complet pour la d\xe9tection et la signalisation des erreurs lors de l'ex\xe9cution, ainsi que pour l'analyse de leurs conditions."),(0,n.kt)("p",null,"La gestion des erreurs r\xe9pond \xe0 deux besoins principaux :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"rechercher et corriger les \xe9ventuels bugs et erreurs dans votre code pendant la phase de d\xe9veloppement,"),(0,n.kt)("li",{parentName:"ul"},"d\xe9tecter et r\xe9cup\xe9rer des erreurs inattendues dans les applications d\xe9ploy\xe9es; vous pouvez notamment remplacer les bo\xeetes de dialogue d'erreur syst\xe8me (disque plein, fichier manquant, etc.) par votre propre interface.",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("p",{parentName:"blockquote"},"It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. Cette m\xe9thode \xe9viterait d'afficher des bo\xeetes de dialogue inattendues sur le serveur et pourrait consigner les erreurs dans un fichier consacr\xe9 en vue d'analyses ult\xe9rieures."))))),(0,n.kt)("h2",o({},{id:"installer-une-m\xe9thode-de-gestion-des-erreurs"}),"Installer une m\xe9thode de gestion des erreurs"),(0,n.kt)("p",null,"Dans 4D, toutes les erreurs peuvent \xeatre captur\xe9es et trait\xe9es dans une m\xe9thode projet sp\xe9cifique, la m\xe9thode de ",(0,n.kt)("strong",{parentName:"p"},"gestion des erreurs")," (ou m\xe9thode de ",(0,n.kt)("strong",{parentName:"p"},"capture d'erreurs"),")."),(0,n.kt)("p",null,"Cette m\xe9thode projet est install\xe9e pour le process en cours et sera automatiquement appel\xe9e pour toute erreur survenant dans le process, en mode interpr\xe9t\xe9 ou compil\xe9. Pour ",(0,n.kt)("em",{parentName:"p"},"installer")," cette m\xe9thode projet, il vous suffit d\u2019appeler la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"APPELER SUR ERREUR")," avec le nom de la m\xe9thode projet en param\xe8tre."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'APPELER SUR ERREUR("IO_ERRORS") //Installe la m\xe9thode de gestion des erreurs\n')),(0,n.kt)("p",null,"Pour ne plus d\xe9tecter d'erreurs et redonner le contr\xf4le \xe0 4D, appelez la m\xe9thode ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," \xe0 l'aide d'une cha\xeene vide :"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("") //redonne le contr\xf4le \xe0 4D\n')),(0,n.kt)("h3",o({},{id:"port\xe9e-et-composants"}),"Port\xe9e et composants"),(0,n.kt)("p",null,"Vous pouvez d\xe9finir une seule m\xe9thode d'erreur pour l'ensemble de l'application ou diff\xe9rentes m\xe9thodes par module d'application. Cependant, une seule m\xe9thode peut \xeatre install\xe9e par processus."),(0,n.kt)("p",null,"Une m\xe9thode de gestion des erreurs install\xe9e par la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"APPELER SUR ERREUR")," s'applique uniquement \xe0 la base de donn\xe9es en cours d'ex\xe9cution. En cas d'erreur g\xe9n\xe9r\xe9e par un ",(0,n.kt)("strong",{parentName:"p"},"composant"),", la m\xe9thode ",(0,n.kt)("inlineCode",{parentName:"p"},"APPELER SUR ERREUR")," de la base h\xf4te n'est pas appel\xe9e, et inversement."),(0,n.kt)("p",null,"La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"Method called on error")," permet de conna\xeetre le nom de la m\xe9thode install\xe9e par ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," pour le processus en cours. Cela est particuli\xe8rement utile dans le contexte des composants car il vous permet de modifier temporairement puis de restaurer la m\xe9thode de capture d'erreur de la base de donn\xe9es h\xf4te :"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  //Si le document ne peut pas \xeatre ouvert, une erreur est g\xe9n\xe9r\xe9e\n $ref:=Open document("MyDocument")\n  //R\xe9tablissement de la m\xe9thode pr\xe9c\xe9dente\n ON ERR CALL($methCurrent)\n\n')),(0,n.kt)("h3",o({},{id:"g\xe9rer-les-erreurs-dans-une-m\xe9thode"}),"G\xe9rer les erreurs dans une m\xe9thode"),(0,n.kt)("p",null,"Dans la m\xe9thode d'erreur personnalis\xe9e, vous pouvez acc\xe9der \xe0 plusieurs informations qui vous aideront \xe0 identifier l'erreur :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"4D maintient automatiquement un certain nombre de variables appel\xe9es ",(0,n.kt)("strong",{parentName:"p"},"variables syst\xe8me"),", r\xe9pondant \xe0 diff\xe9rents besoins (voir le ",(0,n.kt)("em",{parentName:"p"},"manuel de r\xe9f\xe9rence du Langage 4D"),") :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error")," (entier long): Code d'erreur"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error method")," (texte) : nom de la m\xe9thode ayant engendr\xe9 l'erreur"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error line")," (entier long) : Num\xe9ro de ligne de la m\xe9thode ayant g\xe9n\xe9r\xe9 l'erreur"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error formula")," (texte) : formule du code 4D (texte brut) \xe0 l'origine de l'erreur."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"GET LAST ERROR STACK")," qui retourne les informations sur la pile d'erreur courant de l'application 4D.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"Get call chain")," qui retourne une collection d'objets d\xe9crivant chaque \xe9tape de la cha\xeene d'appel de la m\xe9thode dans le process courant."))),(0,n.kt)("h4",o({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,"Voici un syst\xe8me de gestion des erreurs simple :"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'//installer la m\xe9thode de gestion d\'erreur\nON ERR CALL("errorMethod")\n //... ex\xe9cuter le code\n ON ERR CALL("") //redonner le contr\xf4le \xe0 4D\n')),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'// m\xe9thode projet errorMethod\n If(Error#1006) //ceci n\'est pas une interruption g\xe9n\xe9r\xe9e par l\'utilisateur\n    ALERT("L\'erreur "+String(Error)+" s\'est produite". Le code en question est : \\""+Error formula+"\\"")\n End if\n')),(0,n.kt)("h3",o({},{id:"utiliser-une-m\xe9thode-de-gestion-des-erreurs-vide"}),"Utiliser une m\xe9thode de gestion des erreurs vide"),(0,n.kt)("p",null,"Si vous souhaitez cacher la boite de dialogue d'erreur standard, vous pouvez installer une m\xe9thode de gestion d'erreurs vide. La variable syst\xe8me ",(0,n.kt)("inlineCode",{parentName:"p"},"Error")," peut \xeatre test\xe9e dans n'importe quelle m\xe9thode, c'est-\xe0-dire en dehors de la m\xe9thode de gestion d'erreurs :"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\nEnd if\nON ERR CALL.("")\n')))}c.isMDXComponent=!0}}]);