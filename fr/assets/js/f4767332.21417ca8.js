"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86358],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,b=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return a?r.createElement(b,i(i({ref:t},m),{},{components:a})):r.createElement(b,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15318:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"preemptiveWeb",title:"Using preemptive web processes"},o=void 0,p={unversionedId:"WebServer/preemptiveWeb",id:"version-19/WebServer/preemptiveWeb",title:"Using preemptive web processes",description:"The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/WebServer/preemptiveWeb.md",sourceDirName:"WebServer",slug:"/WebServer/preemptiveWeb",permalink:"/documentation/fr/docs/19/WebServer/preemptiveWeb",draft:!1,tags:[],version:"19",frontMatter:{id:"preemptiveWeb",title:"Using preemptive web processes"},sidebar:"docs",previous:{title:"Sessions utilisateur",permalink:"/documentation/fr/docs/19/WebServer/sessions"},next:{title:"Prise en main",permalink:"/documentation/fr/docs/19/REST/gettingStarted"}},s={},m=[{value:"Disponibilit\xe9 du mode pr\xe9emptif pour les pocess Web",id:"disponibilit\xe9-du-mode-pr\xe9emptif-pour-les-pocess-web",level:2},{value:"Ecrire du code serveur Web thread-safe",id:"ecrire-du-code-serveur-web-thread-safe",level:2},{value:"Code web 4D thread-safe",id:"code-web-4d-thread-safe",level:2},{value:"4D commands and database methods",id:"4d-commands-and-database-methods",level:3},{value:"URL Web Server",id:"url-web-server",level:3},{value:"Preemptive web process icon",id:"preemptive-web-process-icon",level:3}],d={toc:m};function u(e){var{components:t}=e,i=l(e,["components"]);return(0,r.kt)("wrapper",n({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible."),(0,r.kt)("p",null,"Pour plus d'informations sur la fonctionnalit\xe9 des process pr\xe9emptifs dans 4D, veuillez vous r\xe9f\xe9rer \xe0 la section ",(0,r.kt)("em",{parentName:"p"},"Process 4D pr\xe9emptifs")," du ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),(0,r.kt)("em",{parentName:"a"},"manuel de language 4D")),"."),(0,r.kt)("h2",n({},{id:"disponibilit\xe9-du-mode-pr\xe9emptif-pour-les-pocess-web"}),"Disponibilit\xe9 du mode pr\xe9emptif pour les pocess Web"),(0,r.kt)("p",null,"Le tableau suivant permet d'indiquer si l'utilisation du mode pr\xe9emptif pour les process Web est disponible dans le contexte d'ex\xe9cution suivant :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"4D Server"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Interpreted, project (",(0,r.kt)("a",n({parentName:"th"},{href:"/documentation/fr/docs/19/Desktop/clientServer#using-4d-and-4d-server-on-the-same-machine"}),"client connected locally"),")"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Interpreted, project (no client connected locally) or binary"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Compil\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Serveur REST"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"pr\xe9emptif"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"pr\xe9emptif")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Serveur Web"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"param\xe8tre web")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"param\xe8tre web"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Server Web Services"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"param\xe8tre web")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"param\xe8tre web"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Legacy REST"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"param\xe8tre web")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"param\xe8tre web"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"4D distant/monoposte"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Interpr\xe9t\xe9"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Compil\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Serveur REST"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"pr\xe9emptif")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Serveur Web"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"param\xe8tre web"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Server Web Services"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"param\xe8tre web"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Legacy REST"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"param\xe8tre web"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Serveur REST : g\xe8re les ",(0,r.kt)("a",n({parentName:"li"},{href:"/documentation/fr/docs/19/REST/classFunctions"}),"fonctions de classe du mod\xe8le de donn\xe9es ORDA")),(0,r.kt)("li",{parentName:"ul"},"Serveur Web : g\xe8re les ",(0,r.kt)("a",n({parentName:"li"},{href:"/documentation/fr/docs/19/WebServer/templates"}),"mod\xe8les Web"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"/documentation/fr/docs/19/WebServer/httpRequests"}),"4DACTION et les m\xe9thodes base")),(0,r.kt)("li",{parentName:"ul"},"Serveur de services Web : g\xe8re les requ\xeates SOAP"),(0,r.kt)("li",{parentName:"ul"},"Legacy REST: direct requests to 4D methods (",(0,r.kt)("inlineCode",{parentName:"li"},"/rest/{table}/{methodName}"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"web setting"))," signifie que le mode pr\xe9emptif d\xe9pend d'une valeur de r\xe9glage :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"lorsque l'option ",(0,r.kt)("a",n({parentName:"li"},{href:"/documentation/fr/docs/19/WebServer/sessions#enabling-sessions"}),(0,r.kt)("strong",{parentName:"a"},"Scalable sessions est s\xe9lectionn\xe9e")),", le ",(0,r.kt)("a",n({parentName:"li"},{href:"/documentation/fr/docs/19/WebServer/sessions#preemptive-mode"}),"mode pr\xe9emptif est automatiquement utilis\xe9")," pour les process web."),(0,r.kt)("li",{parentName:"ul"},"otherwise, the ",(0,r.kt)("a",n({parentName:"li"},{href:"/documentation/fr/docs/19/WebServer/webServerConfig#use-preemptive-processes"}),(0,r.kt)("strong",{parentName:"a"},"Use preemptive processes"))," option is taken into account."),(0,r.kt)("li",{parentName:"ul"},'regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see ',(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html"}),"Publishing a Web Service with 4D"),") or proxy client methods (see ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html"}),"Subscribing to a Web Service in 4D"),") and make sure they are confirmed thread-safe by the compiler.")))),(0,r.kt)("h2",n({},{id:"ecrire-du-code-serveur-web-thread-safe"}),"Ecrire du code serveur Web thread-safe"),(0,r.kt)("p",null,"Tout le code 4D ex\xe9cut\xe9 par le serveur Web doit \xeatre thread-safe si vous souhaitez que les process Web soient lanc\xe9s en mode pr\xe9emptif. When the ",(0,r.kt)("strong",{parentName:"p"},"Use preemptive processes")," option is checked in the Settings dialog box, the following parts of the application will be automatically evaluated by the 4D compiler:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Toutes les m\xe9thodes base li\xe9es au web :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/documentation/fr/docs/19/WebServer/authentication#on-web-authentication"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/documentation/fr/docs/19/WebServer/httpRequests#on-web-connection"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Web Connection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/documentation/fr/docs/19/REST/configuration#using-the-on-rest-authentication-database-method"}),(0,r.kt)("inlineCode",{parentName:"a"},"On REST Authentication"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Mobile App Authentication"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"La m\xe9thode projet ",(0,r.kt)("inlineCode",{parentName:"p"},"compiler_web"),' (ind\xe9pendamment de sa propri\xe9t\xe9 "Mode d\'ex\xe9cution") ;')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basically any code processed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"PROCESS 4D TAGS")," command in the web context, for example through .shtml pages.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Toute m\xe9thode projet comportant l'attribut \"Available through 4D tags and URLS (",(0,r.kt)("inlineCode",{parentName:"p"},"4DACTION"),', etc.)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Triggers pour les tables comportant l\'attribut "Expose as REST resource"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",n({parentName:"p"},{href:"/documentation/fr/docs/19/REST/classFunctions"}),"Fonctions de classe du mod\xe8le de donn\xe9es ORDA")," appel\xe9es via REST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Project methods with "REST Server" property checked (legacy REST calls)'))),(0,r.kt)("p",null,"Pour chacune de ces m\xe9thodes ou parties de code, le compilateur v\xe9rifiera si les r\xe8gles thread-safe sont respect\xe9es, et retournera une erreur en cas de probl\xe8me. Pour plus d'informations \xe0 propos des r\xe8gles thread-safe, veuillez vous r\xe9f\xe9rer au paragraphe ",(0,r.kt)("em",{parentName:"p"},"Ecrire une m\xe9thode thread-safe")," dans le chapitre ",(0,r.kt)("em",{parentName:"p"},"Process")," du manuel de ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),"Langage 4D"),"."),(0,r.kt)("h2",n({},{id:"code-web-4d-thread-safe"}),"Code web 4D thread-safe"),(0,r.kt)("p",null,"La plupart des commandes et fonctions 4D, des m\xe9thodes base et des URL 4D sont thread-safe et peuvent \xeatre utilis\xe9es en mode pr\xe9emptif."),(0,r.kt)("h3",n({},{id:"4d-commands-and-database-methods"}),"4D commands and database methods"),(0,r.kt)("p",null,"Toutes les commandes 4D relatives au Web sont thread-safe, \xe0 savoir :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"toutes les commandes du th\xe8me ",(0,r.kt)("em",{parentName:"li"},"Web Server")),(0,r.kt)("li",{parentName:"ul"},"toutes les commandes du th\xe8me ",(0,r.kt)("em",{parentName:"li"},"Client HTTP"),".")),(0,r.kt)("p",null,"The web-related database methods are thread-safe and can be used in preemptive mode (see below): ",(0,r.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"On Web Connection"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),"...)."),(0,r.kt)("p",null,"Bien s\xfbr, le code ex\xe9cut\xe9 par ces m\xe9thodes doit aussi \xeatre thread-safe."),(0,r.kt)("h3",n({},{id:"url-web-server"}),"URL Web Server"),(0,r.kt)("p",null,"Les URLs Web Server ci-dessous sont thread-safe et peuvent \xeatre utilis\xe9es en mode pr\xe9emptif :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4daction/")," (la m\xe9thode projet appel\xe9e doit \xe9galement \xeatre \xe0 thread-safe)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dcgi/")," (les m\xe9thodes base appel\xe9es doivent \xe9galement \xeatre thread-safe)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dwebtest/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dblank/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dstats/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dhtmlstats/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dcacheclear/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"rest/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dimgfield/")," (g\xe9n\xe9r\xe9 par ",(0,r.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," pour les requ\xeates web relatives aux champs images)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dimg/")," (g\xe9n\xe9r\xe9 par ",(0,r.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," pour les requ\xeates web sur les variables image)")),(0,r.kt)("h3",n({},{id:"preemptive-web-process-icon"}),"Preemptive web process icon"),(0,r.kt)("p",null,"Dans l'Explorateur d'ex\xe9cution et dans la fen\xeatre d'administration de 4D Server, une icone sp\xe9cifique s'affiche pour les process Web pr\xe9emptifs :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Type de process"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Ic\xf4ne"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thode Web (process pr\xe9emptif)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("img",{src:a(18421).Z,width:"40",height:"32"}))))))}u.isMDXComponent=!0},18421:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);