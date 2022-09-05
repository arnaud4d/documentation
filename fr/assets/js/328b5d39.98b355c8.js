"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"SignalClass",title:"Signal"},s=void 0,o={unversionedId:"API/SignalClass",id:"version-19/API/SignalClass",title:"Signal",description:"Les signaux sont des outils fournis par le langage 4D pour g\xe9rer les interactions et \xe9viter les conflits entre les process dans une application multiprocessus. Les signaux vous permettent de vous assurer qu'un ou plusieurs process attendront la fin d'une t\xe2che sp\xe9cifique avant de poursuivre leur ex\xe9cution. Tout process peut attendre et/ou lib\xe9rer un signal.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/API/SignalClass.md",sourceDirName:"API",slug:"/API/SignalClass",permalink:"/docs/fr/19/API/SignalClass",draft:!1,tags:[],version:"19",frontMatter:{id:"SignalClass",title:"Signal"},sidebar:"docs",previous:{title:"Session",permalink:"/docs/fr/19/API/SessionClass"},next:{title:"SMTPTransporter",permalink:"/docs/fr/19/API/SMTPTransporterClass"}},p={},u=[{value:"Objet signal",id:"objet-signal",level:3},{value:"Travailler avec des signaux",id:"travailler-avec-des-signaux",level:3},{value:"Exemple",id:"exemple",level:3},{value:"Sommaire",id:"sommaire",level:3},{value:"New signal",id:"new-signal",level:2},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple-1",level:4},{value:".description",id:"description-1",level:2},{value:"Description",id:"description-2",level:4},{value:".signaled",id:"signaled",level:2},{value:"Description",id:"description-3",level:4},{value:".trigger()",id:"trigger",level:2},{value:"Description",id:"description-4",level:4},{value:".wait()",id:"wait",level:2},{value:"Description",id:"description-5",level:4}],m={toc:u};function d(e){var{components:t}=e,i=l(e,["components"]);return(0,a.kt)("wrapper",r({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les signaux sont des outils fournis par le langage 4D pour g\xe9rer les interactions et \xe9viter les conflits entre les process dans une application multiprocessus. Les signaux vous permettent de vous assurer qu'un ou plusieurs process attendront la fin d'une t\xe2che sp\xe9cifique avant de poursuivre leur ex\xe9cution. Tout process peut attendre et/ou lib\xe9rer un signal."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les s\xe9maphores peuvent \xe9galement \xeatre utilis\xe9s pour g\xe9rer les interactions. Les s\xe9maphores permettent de s'assurer que deux ou plusieurs process ne modifient pas la m\xeame ressource (fichier, enregistrement...) au m\xeame moment. Seul le process qui a pos\xe9 le s\xe9maphore peut le retirer.")),(0,a.kt)("h3",r({},{id:"objet-signal"}),"Objet signal"),(0,a.kt)("p",null,"Un signal est un objet partag\xe9 qui doit \xeatre pass\xe9 comme param\xe8tre aux commandes qui appellent ou cr\xe9ent des workers ou des process."),(0,a.kt)("p",null,"Un objet ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Signal")," contient les m\xe9thodes et propri\xe9t\xe9s int\xe9gr\xe9es suivantes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"#wait"}),(0,a.kt)("inlineCode",{parentName:"a"},".wait()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"#trigger"}),(0,a.kt)("inlineCode",{parentName:"a"},".trigger()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"#signaled"}),(0,a.kt)("inlineCode",{parentName:"a"},".signaled"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"#description"}),(0,a.kt)("inlineCode",{parentName:"a"},".description")),".")),(0,a.kt)("p",null,"Tout worker/process appelant la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},".wait()")," suspend son ex\xe9cution jusqu'\xe0 ce que la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".signaled")," soit mise \xe0 true. Lorsque vous \xeates en attente d'un signal, le process appelant n'utilise pas de CPU. Cela peut \xeatre tr\xe8s int\xe9ressant pour les performances des applications multiprocess. La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".signaled")," devient est mise \xe0 True lorsqu'un worker/processus appelle la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},".trigger()"),"."),(0,a.kt)("p",null,"A noter que pour \xe9viter les situations de blocage, la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},".wait()")," peut \xe9galement revenir apr\xe8s qu'un d\xe9lai d'attente d\xe9fini ait \xe9t\xe9 atteint."),(0,a.kt)("p",null,"Les objets signal sont cr\xe9\xe9s \xe0 l'aide de la commande ",(0,a.kt)("a",r({parentName:"p"},{href:"#new-signal"}),"New signal"),"."),(0,a.kt)("h3",r({},{id:"travailler-avec-des-signaux"}),"Travailler avec des signaux"),(0,a.kt)("p",null,"Dans 4D, vous cr\xe9ez un nouvel objet signal en appelant la commande ",(0,a.kt)("a",r({parentName:"p"},{href:"#new-signal"}),(0,a.kt)("inlineCode",{parentName:"a"},"New signal")),". Une fois cr\xe9\xe9, ce signal doit \xeatre pass\xe9 en param\xe8tre aux commandes ",(0,a.kt)("inlineCode",{parentName:"p"},"New process")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"CALL WORKER")," afin qu'elles puissent le modifier lorsqu'elles ont termin\xe9 la t\xe2che que vous souhaitez attendre."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signal.wait()")," doit \xeatre appel\xe9 par le worker/process qui a besoin qu'un autre worker/process termine une t\xe2che pour pouvoir continuer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signal.trigger()")," doit \xeatre appel\xe9 par le worker/process qui a termin\xe9 son ex\xe9cution afin de lib\xe9rer tous les autres.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(37223).Z,width:"813",height:"324"})),(0,a.kt)("p",null,"Une fois qu'un signal a \xe9t\xe9 lib\xe9r\xe9 par un appel \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"signal.trigger()"),", il ne peut plus \xeatre r\xe9utilis\xe9. Si vous souhaitez d\xe9finir un autre signal, vous devez \xe0 nouveau appeler la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"New signal"),"."),(0,a.kt)("p",null,"Etant donn\xe9 qu'un objet signal est un ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19/Concepts/shared"}),"objet partag\xe9"),", vous pouvez l'utiliser pour retourner les r\xe9sultats des workers/process appel\xe9s, \xe0 condition de ne pas oublier d'\xe9crire les valeurs dans une structure ",(0,a.kt)("inlineCode",{parentName:"p"},"Use...End use")," (voir exemple)."),(0,a.kt)("h3",r({},{id:"exemple"}),"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $signal : 4D.Signal\n\n  // Cr\xe9ation d\'un signal\n $signal:=New signal\n\n  // appel du process principal et ex\xe9cution de la m\xe9thode OpenForm\n CALL WORKER(1;"OpenForm";$signal)\n  // autre calcul\n ...\n  // Attente de la fin du process\n $signaled:=$signal.wait()\n\n  // Traitement des r\xe9sultats\n $calc:=$signal.result+...\n')),(0,a.kt)("p",null,"M\xe9thode ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"OpenForm"))," :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' #DECLARE ($signal : 4D.Signal)  \n var $form : Object\n $form:=New object("value";0)\n\n  // Ouvrir le form\n $win:=Open form window("Information";Movable form dialog box)\n DIALOG("Information";$form)\n CLOSE WINDOW($win)\n\n  // Ajout d\'un nouvel attribut \xe0 votre objet partag\xe9 $signal pour passer votre r\xe9sultat \xe0 l\'autre process :\n Use($signal)\n    $signal.result:=$form.value\n End use\n\n  // Envoyer le signal au process en attente\n $signal.trigger()\n')),(0,a.kt)("h3",r({},{id:"sommaire"}),"Sommaire"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#description"}),(0,a.kt)("strong",{parentName:"a"},".description")," : Text"),"\xa0","\xa0","\xa0","\xa0","contains a custom description for the ",(0,a.kt)("inlineCode",{parentName:"td"},"Signal")," object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#signaled"}),(0,a.kt)("strong",{parentName:"a"},".signaled")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","contains the current state of the ",(0,a.kt)("inlineCode",{parentName:"td"},"Signal")," object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#trigger"}),(0,a.kt)("strong",{parentName:"a"},".trigger( )")),"\xa0","\xa0","\xa0","\xa0","sets the ",(0,a.kt)("inlineCode",{parentName:"td"},"signaled")," property of the signal object to ",(0,a.kt)("strong",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#wait"}),(0,a.kt)("strong",{parentName:"a"},".wait"),"( { ",(0,a.kt)("em",{parentName:"a"},"timeout")," : Real } ) : Boolean "),"\xa0","\xa0","\xa0","\xa0","makes the current process wait until the ",(0,a.kt)("inlineCode",{parentName:"td"},".signaled")," property of the signal object to become ",(0,a.kt)("strong",{parentName:"td"},"true")," or the optional ",(0,a.kt)("em",{parentName:"td"},"timeout")," to expire")))),(0,a.kt)("h2",r({},{id:"new-signal"}),"New signal"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout\xe9es"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"New signal")," { ( ",(0,a.kt)("em",{parentName:"p"},"description")," : Text ) } : 4D.Signal\n| Param\xe8tres  | Type      |    | Description                                             |\n| ----------- | --------- |:--:| ------------------------------------------------------- |\n| Description | Text      | -> | Description du signal                                   |\n| Result      | 4D.Signal | <- | Object encapsulant le signal|\n|"),(0,a.kt)("h4",r({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"New signal")," command creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Signal")," object."),(0,a.kt)("p",null,"Un signal est un objet partag\xe9 qui peut \xeatre pass\xe9 en param\xe8tre depuis un worker ou un process \xe0 un autre worker ou process, de mani\xe8re \xe0 ce que :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"le worker/process appel\xe9 puisse mettre \xe0 jour l'objet signal apr\xe8s qu'un traitement sp\xe9cifique soit termin\xe9"),(0,a.kt)("li",{parentName:"ul"},"le worker/process appelant puisse stopper son ex\xe9cution et attende jusqu'\xe0 ce que le signal soit mis \xe0 jour, sans consommer aucune ressource CPU.")),(0,a.kt)("p",null,"Optionnellement, dans le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"description"),", vous pouvez passer un texte personnalis\xe9 d\xe9crivant le signal. Ce texte peut \xe9galement \xeatre d\xe9fini apr\xe8s la cr\xe9ation du signal."),(0,a.kt)("p",null,"Comme l'objet signal est un objet partag\xe9, il peut aussi \xeatre utilis\xe9 pour maintenir des propri\xe9t\xe9s utilisateur, y compris la propri\xe9t\xe9 ",(0,a.kt)("a",r({parentName:"p"},{href:"#description"}),(0,a.kt)("inlineCode",{parentName:"a"},".description")),", via l'appel de la structure ",(0,a.kt)("inlineCode",{parentName:"p"},"Use...End use"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Valeur retourn\xe9e")),(0,a.kt)("p",null,"Un nouvel objet ",(0,a.kt)("a",r({parentName:"p"},{href:"#signal-object"}),(0,a.kt)("inlineCode",{parentName:"a"},"4D.Signal")),"."),(0,a.kt)("h4",r({},{id:"exemple-1"}),"Exemple"),(0,a.kt)("p",null,"Voici un exemple type de worker qui d\xe9finit un signal :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $signal : 4D.Signal\n $signal:=New signal("This is my first signal")\n\n CALL WORKER("myworker";"doSomething";$signal)\n $signaled:=$signal.wait(1) //patienter 1 seconde au maximum\n\n If($signaled)\n    ALERT("myworker finished the work. Result: "+$signal.myresult)\n Else\n    ALERT("myworker has not finished in less than 1s")\n End if\n')),(0,a.kt)("p",null,"La m\xe9thode ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"doSomething"))," est par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," #DECLARE ($signal : 4D.Signal)\n  //any processing\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  //retourner le r\xe9sulat\n $signal.trigger() // L'op\xe9ration est termin\xe9e\n")),(0,a.kt)("h2",r({},{id:"description-1"}),".description"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout\xe9es"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".description")," : Text"),(0,a.kt)("h4",r({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".description")," property contains a custom description for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Signal")," object.."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".description")," peut \xeatre d\xe9finie \xe0 la cr\xe9ation de l'objet signal ou \xe0 tout moment. Notez que comme l'objet ",(0,a.kt)("inlineCode",{parentName:"p"},"Signal")," est un objet partag\xe9, tout acc\xe8s en mode \xe9criture \xe0 la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".description")," doit \xeatre encadr\xe9 par les mots-cl\xe9s ",(0,a.kt)("inlineCode",{parentName:"p"},"Use...End use"),"."),(0,a.kt)("p",null,"Cette propri\xe9t\xe9 est en ",(0,a.kt)("strong",{parentName:"p"},"lecture-\xe9criture"),"."),(0,a.kt)("h2",r({},{id:"signaled"}),".signaled"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout\xe9es"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".signaled")," : Boolean"),(0,a.kt)("h4",r({},{id:"description-3"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".signaled")," property contains the current state of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Signal")," object. . When the signal is created, ",(0,a.kt)("inlineCode",{parentName:"p"},".signaled")," is ",(0,a.kt)("strong",{parentName:"p"},"False"),"."),(0,a.kt)("p",null,"Cette propri\xe9t\xe9 est en ",(0,a.kt)("strong",{parentName:"p"},"lecture seule"),"."),(0,a.kt)("h2",r({},{id:"trigger"}),".trigger()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout\xe9es"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".trigger( )")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ne requiert aucun param\xe8tre")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description-4"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".trigger( )")," function sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"signaled")," property of the signal object to ",(0,a.kt)("strong",{parentName:"p"},"true")," and awakens all workers or processes waiting for this signal."),(0,a.kt)("p",null,"Si le signal est d\xe9j\xe0 dans l'\xe9tat signaled (i.e., la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"signaled")," est d\xe9j\xe0 ",(0,a.kt)("strong",{parentName:"p"},"true"),"), la fonction ne fait rien."),(0,a.kt)("h2",r({},{id:"wait"}),".wait()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout\xe9es"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".wait"),"( { ",(0,a.kt)("em",{parentName:"p"},"timeout")," : Real } ) : Boolean "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"timeout"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"D\xe9lai d'attente maximum du signal en secondes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Etat de la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"td"},".signaled"))))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description-5"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".wait( )")," function makes the current process wait until the ",(0,a.kt)("inlineCode",{parentName:"p"},".signaled")," property of the signal object to become ",(0,a.kt)("strong",{parentName:"p"},"true")," or the optional ",(0,a.kt)("em",{parentName:"p"},"timeout")," to expire."),(0,a.kt)("p",null,"Pour pr\xe9venir tout code bloquant, vous pouvez passez un temps d'attente maximum en secondes dans le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"timeout")," (les d\xe9cimales sont accept\xe9es)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Attention")," : L'appel de ",(0,a.kt)("inlineCode",{parentName:"p"},".wait( )")," sans ",(0,a.kt)("em",{parentName:"p"},"timeout")," dans le process principal de 4D n'est pas recommand\xe9 car il pourrait geler l'ensemble de l'application 4D.")),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,"La fonction retourne la valeur de la propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".signaled"),". Evaluer cette valeur permet de savoir si la fonction a retourn\xe9 \xe0 cause de l'appel de ",(0,a.kt)("inlineCode",{parentName:"p"},".trigger( )")," (",(0,a.kt)("inlineCode",{parentName:"p"},".signaled")," est ",(0,a.kt)("strong",{parentName:"p"},"true"),") ou si le ",(0,a.kt)("em",{parentName:"p"},"timeout")," a expir\xe9 (",(0,a.kt)("inlineCode",{parentName:"p"},".signaled")," est ",(0,a.kt)("strong",{parentName:"p"},"false"),")."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"L'\xe9tat d'un process qui attend un signal est ",(0,a.kt)("inlineCode",{parentName:"p"},"En attente d'un marqueur interne"),".")))}d.isMDXComponent=!0},37223:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/signal-f8f54304f438eaf43a007e7cd1be6f66.png"}}]);