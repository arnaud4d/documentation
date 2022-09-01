"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32426],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={id:"tls",title:"Protocole TLS (HTTPS)"},o=void 0,u={unversionedId:"Admin/tls",id:"version-19/Admin/tls",title:"Protocole TLS (HTTPS)",description:"Tous les serveurs 4D peuvent communiquer en mode s\xe9curis\xe9 via le protocole TLS (Transport Layer Security) :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Admin/tls.md",sourceDirName:"Admin",slug:"/Admin/tls",permalink:"/docs/fr/19/Admin/tls",draft:!1,tags:[],version:"19",frontMatter:{id:"tls",title:"Protocole TLS (HTTPS)"},sidebar:"docs",previous:{title:"Gestion des licences 4D",permalink:"/docs/fr/19/Admin/licenses"},next:{title:"Interface de ligne de commande",permalink:"/docs/fr/19/Admin/cli"}},s={},c=[{value:"Vue d\u2019ensemble",id:"vue-densemble",level:2},{value:"Version minimale",id:"version-minimale",level:2},{value:"Obtenir un certificat",id:"obtenir-un-certificat",level:2},{value:"Installation et activation",id:"installation-et-activation",level:2},{value:"fichiers <code>key.pem</code> et <code>cert.pem</code>",id:"fichiers-keypem-et-certpem",level:3},{value:"Activation du TLS",id:"activation-du-tls",level:3},{value:"Perfect Forward Secrecy (PFS)",id:"perfect-forward-secrecy-pfs",level:2}],p={toc:c};function d(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)("wrapper",i({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Tous les serveurs 4D peuvent communiquer en mode s\xe9curis\xe9 via le protocole TLS (Transport Layer Security) :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"le serveur web"),(0,n.kt)("li",{parentName:"ul"},"le serveur d'application (application de bureau client-serveur)"),(0,n.kt)("li",{parentName:"ul"},"le serveur SQL")),(0,n.kt)("h2",i({},{id:"vue-densemble"}),"Vue d\u2019ensemble"),(0,n.kt)("p",null,"Le protocole TLS (successeur du SSL) a pour but de s\xe9curiser les informations de donn\xe9es entre deux applications\u2014principalement entre un serveur web et un navigateur. Ce protocole est largement r\xe9pandu et compatible avec la plupart des navigateurs web."),(0,n.kt)("p",null,"Au niveau de l'architecture r\xe9seau, le protocole de s\xe9curit\xe9 s'ins\xe8re entre la couche TCP/IP (bas niveau) et le protocole de haut niveau HTTP, pour lequel il est principalement destin\xe9."),(0,n.kt)("p",null,"Configuration r\xe9seau avec TSL :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(11157).Z,width:"318",height:"174"})),(0,n.kt)("p",null,"Le protocole TLS a pour but d'authentifier l'\xe9metteur et le r\xe9cepteur et de garantir la confidentialit\xe9 et l'int\xe9grit\xe9 des informations \xe9chang\xe9es :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Authentification")," : l'identit\xe9 de l'\xe9metteur et du r\xe9cepteur sont confirm\xe9es."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Confidentialit\xe9"),": les donn\xe9es envoy\xe9es sont crypt\xe9es afin de les rendre inintelligibles pour les tiers non autoris\xe9s."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Int\xe9grit\xe9"),": les donn\xe9es re\xe7ues n'ont pas \xe9t\xe9 alt\xe9r\xe9es, frauduleusement ou accidentellement.")),(0,n.kt)("p",null,"Les principes de s\xe9curisation utilis\xe9s par TLS sont bas\xe9s sur l\u2019emploi d\u2019un algorithme de cryptage utilisant une paire de cl\xe9s : une cl\xe9 priv\xe9e et une cl\xe9 publique. La cl\xe9 priv\xe9e est utilis\xe9e pour crypter les donn\xe9es. Elle est conserv\xe9e par l\u2019\xe9metteur (le site Web). La cl\xe9 publique est utilis\xe9e pour d\xe9crypter les donn\xe9es. Elle est diffus\xe9e aupr\xe8s des r\xe9cepteurs (les navigateurs web) via le certificat. L\u2019emploi du TLS dans le cadre d\u2019Internet requiert en effet l\u2019entremise d\u2019une Autorit\xe9 de Certification telle que Verisign\xae. Moyennant une participation financi\xe8re du site Web demandeur, cet organisme d\xe9livre un certificat, garantissant l\u2019identit\xe9 du serveur et contenant la cl\xe9 publique permettant la communication en mode s\xe9curis\xe9."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pour plus d'informations sur les principes g\xe9n\xe9raux de cryptage et d'emploi de cl\xe9s publiques/cl\xe9s priv\xe9es, voir la description de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"CRYPTER BLOB"),".")),(0,n.kt)("h2",i({},{id:"version-minimale"}),"Version minimale"),(0,n.kt)("p",null,"Par d\xe9faut, la version minimale accept\xe9e par le server est TLS 1.2. Vous pouvez modifier cette valeur via le s\xe9lecteur ",(0,n.kt)("inlineCode",{parentName:"p"},"Min version TLS")," de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"FIXER PARAMETRE BASE"),"."),(0,n.kt)("p",null,"Vous pouvez d\xe9finir le niveau de s\xe9curit\xe9 de votre serveur web en d\xe9finissant la ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19/WebServer/webServerConfig#minimum-tls-version"}),"version TLS minimale")," accept\xe9e pour les connexions."),(0,n.kt)("h2",i({},{id:"obtenir-un-certificat"}),"Obtenir un certificat"),(0,n.kt)("p",null,"La mise en place d\u2019un serveur fonctionnant en TLS n\xe9cessite un certificat num\xe9rique d\xe9livr\xe9 par un op\xe9rateur de certification. Ce certificat renferme diverses informations dont la carte d\u2019identit\xe9 du site ainsi que la cl\xe9 publique utilis\xe9e pour communiquer avec lui. Il est transmis aux clients (navigateurs Web) se connectant au site. Une fois qu\u2019il est accept\xe9, la communication en mode s\xe9curis\xe9 s\u2019\xe9tablit."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Les navigateurs Web autorisent uniquement les certificats \xe9mis par une autorit\xe9 de certification r\xe9f\xe9renc\xe9e dans leurs propri\xe9t\xe9s.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(87216).Z,width:"394",height:"227"})),(0,n.kt)("p",null,"Le choix de l\u2019autorit\xe9 de certification d\xe9pend de plusieurs facteurs. Plus l\u2019autorit\xe9 est \u201cconnue\u201d, plus le nombre de navigateurs acceptant les certificats qu\u2019elle d\xe9livre sera important, mais plus le prix \xe0 payer sera \xe9lev\xe9."),(0,n.kt)("p",null,"Pour obtenir un certificat num\xe9rique :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"G\xe9n\xe9rez une \u201ccl\xe9 priv\xe9e\u201d \xe0 l\u2019aide de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"GENERER CLES CRYPTAGE"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Attention")," : Pour des raisons de s\xe9curit\xe9, la cl\xe9 priv\xe9e ne doit jamais \xeatre diffus\xe9e sur un r\xe9seau. En fait, elle ne doit pas quitter le poste serveur. Pour le serveur Web, le fichier Key.pem doit \xeatre plac\xe9 dans le dossier de la structure du projet."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Etablissez une demande de certificat \xe0 l\u2019aide de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"GENERER DEMANDE CERTIFICAT."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Envoyez la demande de certificat \xe0 l\u2019autorit\xe9 de certification que vous avez choisie. Pour remplir la demande de certificat, il vous sera peut-\xeatre n\xe9cessaire de contacter l\u2019autorit\xe9 de certification. Les autorit\xe9s de certification v\xe9rifient la r\xe9alit\xe9 des informations qui leur ont \xe9t\xe9 transmises. La demande de certificat est g\xe9n\xe9r\xe9e dans un BLOB au format PKCS encod\xe9 en base64 (format PEM). Ce principe autorise le copier-coller des cl\xe9s sous forme de texte et leur envoi par E-mail en toute s\xe9curit\xe9, sans risque d\u2019alt\xe9ration de leur contenu. Vous pouvez donc par exemple sauvegarder le BLOB contenant la demande de certificat dans un document texte (\xe0 l\u2019aide de ",(0,n.kt)("inlineCode",{parentName:"p"},"BLOB VERS DOCUMENT"),"), puis l\u2019ouvrir et copier-coller son contenu dans un E-mail ou un formulaire Web destin\xe9 \xe0 l\u2019autorit\xe9 de certification.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Une fois que vous avez re\xe7u votre certificat, cr\xe9ez un fichier texte que vous nommerez \u201ccert.pem\u201d et copiez dans ce fichier le contenu du certificat. Vous pouvez recevoir votre certificat sous plusieurs formes (g\xe9n\xe9ralement via un E-mail ou un formulaire HTML). 4D accepte la plupart des formats de texte (macOS, PC, Linux...) pour les certificats. En revanche, le certificat doit \xeatre au format PEM, c'est-\xe0-dire PKCS encod\xe9 en base64."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Les caract\xe8res de fins de ligne CR ne sont pas pris en charge. Vous devez utiliser CRLF ou LF."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Placez le fichier \u201ccert.pem\u201d \xe0 ",(0,n.kt)("a",i({parentName:"p"},{href:"#installation-and-activation"}),"l'emplacement ad\xe9quat"),"."))),(0,n.kt)("p",null,"Le serveur Web peut d\xe8s lors fonctionner en mode s\xe9curis\xe9. La dur\xe9e de validit\xe9 d\u2019un certificat varie g\xe9n\xe9ralement entre trois mois et un an."),(0,n.kt)("h2",i({},{id:"installation-et-activation"}),"Installation et activation"),(0,n.kt)("h3",i({},{id:"fichiers-keypem-et-certpem"}),"fichiers ",(0,n.kt)("inlineCode",{parentName:"h3"},"key.pem")," et ",(0,n.kt)("inlineCode",{parentName:"h3"},"cert.pem")),(0,n.kt)("p",null,"Pour pouvoir utiliser le protocole TLS avec le serveur, vous devez installer le ",(0,n.kt)("strong",{parentName:"p"},"key.pem"),"(document contenant la cl\xe9 de cryptage priv\xe9e) et ",(0,n.kt)("strong",{parentName:"p"},"cert.pem")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"avec 4D en mode local ou 4D Server, \xe0 c\xf4t\xe9 du ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/fr/19/Project/architecture#project-folder"}),"dossier du projet")),(0,n.kt)("li",{parentName:"ul"},"avec 4D en mode distant, dans le dossier de la base de donn\xe9es cliente sur la machine distante (pour plus d'informations sur l'emplacement de ce dossier, consultez la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"Dossier 4D"),").")),(0,n.kt)("p",null,"Vous devez copier ces fichiers manuellement sur la machine distante."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Des fichiers ",(0,n.kt)("em",{parentName:"p"},"key.pem")," et ",(0,n.kt)("em",{parentName:"p"},"cert.pem")," par d\xe9faut sont fournis avec 4D. Pour un niveau de s\xe9curit\xe9 plus \xe9lev\xe9, nous vous recommandons fortement de remplacer ces fichiers avec vos propres certificats.")),(0,n.kt)("h3",i({},{id:"activation-du-tls"}),"Activation du TLS"),(0,n.kt)("p",null,"L'installation de fichiers ",(0,n.kt)("strong",{parentName:"p"},"key.pem")," et ",(0,n.kt)("strong",{parentName:"p"},"cert.pem")," permet d'utiliser TLS avec le 4D Server. Cependant, pour que les connexions TLS soient accept\xe9es par le server, il est n\xe9cessaire de les activer :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Avec le serveur web de 4D, vous devez ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/fr/19/WebServer/webServerConfig#enable-https"}),"autoriser le HTTPS"),". Vous pouvez activer ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/fr/19/WebServer/webServerConfig#enable-hsts"}),"l'option HSTS")," pour rediriger les navigateurs qui tentent de se connecter via HTTP."),(0,n.kt)("li",{parentName:"ul"},"Avec le serveur d'applications, vous devez s\xe9lectionner l'option ",(0,n.kt)("strong",{parentName:"li"},"Crypter les communications Client-Serveur")," dans la page Client-Serveur des Propri\xe9t\xe9s."),(0,n.kt)("li",{parentName:"ul"},"Avec le serveur SQL, vous devez s\xe9lectionner l'option ",(0,n.kt)("strong",{parentName:"li"},"Activer TLS"),' dans la page "SQL" des Propri\xe9t\xe9s.')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Le serveur web 4D accepte l'option HSTS")),(0,n.kt)("h2",i({},{id:"perfect-forward-secrecy-pfs"}),"Perfect Forward Secrecy (PFS)"),(0,n.kt)("p",null,"Le ",(0,n.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Forward_secrecy"}),"PFS")," ajoute une couche de s\xe9curit\xe9 suppl\xe9mentaire \xe0 vos communications. Plut\xf4t que d'utiliser des cl\xe9s d'\xe9changes pr\xe9\xe9tablies, la PFS cr\xe9e des cl\xe9s de session de mani\xe8re coop\xe9rative entre les parties en communication en utilisant des algorithmes Diffie-Hellman (DH). Le mode conjoint de production des cl\xe9s cr\xe9e un \"secret partag\xe9\" qui emp\xeache des \xe9l\xe9ments externes de les compromettre."),(0,n.kt)("p",null,"Lorsque TLS est activ\xe9 sur le serveur Web de 4D Web, PFS est automatiquement activ\xe9. Si le fichier ",(0,n.kt)("em",{parentName:"p"},"dhparams.pem")," (document contenant la cl\xe9 DH priv\xe9e du serveur) n'existe pas d\xe9j\xe0, 4D le g\xe9n\xe8re automatiquement avec une taille de cl\xe9 de 2048. La g\xe9n\xe9ration initiale de ce fichier peut prendre plusieurs minutes. Le fichier est plac\xe9 avec les fichiers ",(0,n.kt)("a",i({parentName:"p"},{href:"#key-pem-and-cert-pem-files"}),(0,n.kt)("em",{parentName:"a"},"key.pem")," et ",(0,n.kt)("em",{parentName:"a"},"cert.pem")),"."),(0,n.kt)("p",null,"Si vous utilisez une ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19/WebServer/webServerConfig##cipher-list"}),"liste de chiffrement personnalis\xe9e")," et souhaitez activer PFS, v\xe9rifiez que votre liste contient des entr\xe9es avec des algorithmes DH ou ECDH (courbes elliptiques de Diffie\u2013Hellman)."))}d.isMDXComponent=!0},11157:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},87216:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tls2-654d4965c78986e1ff3061d0686d7943.png"}}]);