"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14473],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),d=o(a),s=r,N=d["".concat(m,".").concat(s)]||d[s]||u[s]||l;return a?n.createElement(N,p(p({ref:e},k),{},{components:a})):n.createElement(N,p({ref:e},k))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=d;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56403:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>m,toc:()=>k});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={id:"CryptoKeyClass",title:"CryptoKey"},i=void 0,m={unversionedId:"API/CryptoKeyClass",id:"version-19/API/CryptoKeyClass",title:"CryptoKey",description:"The CryptoKey class in the 4D language encapsulates an asymmetric encryption key pair.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/API/CryptoKeyClass.md",sourceDirName:"API",slug:"/API/CryptoKeyClass",permalink:"/docs/fr/19/API/CryptoKeyClass",draft:!1,tags:[],version:"19",frontMatter:{id:"CryptoKeyClass",title:"CryptoKey"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/fr/19/API/CollectionClass"},next:{title:"DataClass",permalink:"/docs/fr/19/API/DataClassClass"}},o={},k=[{value:"Example",id:"example",level:3},{value:"Summary",id:"summary",level:3},{value:"4D.CryptoKey.new()",id:"4dcryptokeynew",level:2},{value:"<em>settings</em>",id:"settings",level:4},{value:"<em>CryptoKey</em>",id:"cryptokey",level:4},{value:".curve",id:"curve",level:2},{value:".decrypt()",id:"decrypt",level:2},{value:"<em>options</em>",id:"options",level:4},{value:"<em>Result</em>",id:"result",level:4},{value:".encrypt()",id:"encrypt",level:2},{value:"<em>options</em>",id:"options-1",level:5},{value:"<em>Result</em>",id:"result-1",level:4},{value:".getPrivateKey()",id:"getprivatekey",level:2},{value:"<em>Result</em>",id:"result-2",level:4},{value:".getPublicKey()",id:"getpublickey",level:2},{value:"<em>Result</em>",id:"result-3",level:4},{value:".pem",id:"pem",level:2},{value:".sign()",id:"sign",level:2},{value:"<em>options</em>",id:"options-2",level:4},{value:"<em>Result</em>",id:"result-4",level:4},{value:".size",id:"size",level:2},{value:".type",id:"type",level:2},{value:".verify()",id:"verify",level:2},{value:"<em>options</em>",id:"options-3",level:4},{value:"<em>Result</em>",id:"result-5",level:4}],u={toc:k};function d(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," class in the 4D language encapsulates an asymmetric encryption key pair."),(0,n.kt)("p",null,"This class is available from the ",(0,n.kt)("inlineCode",{parentName:"p"},"4D")," class store."),(0,n.kt)("h3",r({},{id:"example"}),"Example"),(0,n.kt)("p",null,"The following sample code signs and verifies a message using a new ECDSA key pair, for example in order to make a ES256 JSON Web token."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' // Generate a new ECDSA key pair\n$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))\n\n  // Get signature as base64\n$message:="hello world"\n$signature:=$key.sign($message;New object("hash";"SHA256"))\n\n  // Verify signature\n$status:=$key.verify($message;$signature;New object("hash";"SHA256"))\nASSERT($status.success)\n')),(0,n.kt)("h3",r({},{id:"summary"}),"Summary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#4dcryptokeynew"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#curve"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#decrypt"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#encrypt"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#getprivatekey"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#getpublickey"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#sign"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#size"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#type"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#verify"})),"\xa0","\xa0","\xa0","\xa0")))),(0,n.kt)("h2",r({},{id:"4dcryptokeynew"}),"4D.CryptoKey.new()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4D.CryptoKey.new"),"( ",(0,n.kt)("em",{parentName:"p"},"settings")," : Object ) : 4D.CryptoKey"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"settings"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Settings to generate or load a key pair")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.CryptoKey"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object encapsulating an encryption key pair")))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.CryptoKey.new()")," function ","creates a new ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.CryptoKey")," object encapsulating an encryption key pair",", based upon the ",(0,n.kt)("em",{parentName:"p"},"settings")," object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition."),(0,n.kt)("h4",r({},{id:"settings"}),(0,n.kt)("em",{parentName:"h4"},"settings")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#curve"}),"curve")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Name of ECDSA curve")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#pem"}),"pem")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PEM definition of an encryption key to load")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#size"}),"size")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Size of RSA key in bits")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#type"}),"type")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Type of the key: "RSA", "ECDSA", or "PEM"')))),(0,n.kt)("h4",r({},{id:"cryptokey"}),(0,n.kt)("em",{parentName:"h4"},"CryptoKey")),(0,n.kt)("p",null,"The returned ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple 4D processes simultaneously."),(0,n.kt)("h2",r({},{id:"curve"}),".curve"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".curve")," : Text"),(0,n.kt)("p",null,"Defined only for ECDSA keys: the ","normalised curve name of the key",'. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.'),(0,n.kt)("h2",r({},{id:"decrypt"}),".decrypt()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".decrypt"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"options")," : Object ) : Object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Message string to be decoded using ",(0,n.kt)("inlineCode",{parentName:"td"},"options.encodingEncrypted")," and decrypted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Decoding options")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Status")))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".decrypt()")," function ","decrypts the ",(0,n.kt)("em",{parentName:"p"},"message")," parameter using the ",(0,n.kt)("strong",{parentName:"p"},"private")," key",". The algorithm used depends on the type of the key."),(0,n.kt)("p",null,"The key must be a RSA key, the algorithm is RSA-OAEP (see ",(0,n.kt)("a",r({parentName:"p"},{href:"https://tools.ietf.org/html/rfc3447"}),"RFC 3447"),")."),(0,n.kt)("h4",r({},{id:"options"}),(0,n.kt)("em",{parentName:"h4"},"options")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"hash"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encodingEncrypted"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Encoding used to convert the ",(0,n.kt)("inlineCode",{parentName:"td"},"message"),' parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". Default is "Base64".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encodingDecrypted"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".')))),(0,n.kt)("h4",r({},{id:"result"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The function returns a status object with ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," property set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,n.kt)("em",{parentName:"p"},"message")," could be successfully decrypted."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True if the message has been successfully decrypted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Message decrypted and decoded using the ",(0,n.kt)("inlineCode",{parentName:"td"},"options.encodingDecrypted"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errors"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"If ",(0,n.kt)("inlineCode",{parentName:"td"},"success")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", may contain a collection of errors")))),(0,n.kt)("p",null,"In case the ",(0,n.kt)("em",{parentName:"p"},"message")," couldn't be decrypted because it was not encrypted with the same key or algorithm, the ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," object being returned contains an error collection in ",(0,n.kt)("inlineCode",{parentName:"p"},"status.errors"),"."),(0,n.kt)("h2",r({},{id:"encrypt"}),".encrypt()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".encrypt"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"options")," : Object ) : Text"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Message string to be encoded using ",(0,n.kt)("inlineCode",{parentName:"td"},"options.encodingDecrypted")," and encrypted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Encoding options")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Message encrypted and encoded using the ",(0,n.kt)("inlineCode",{parentName:"td"},"options.encodingEncrypted"))))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".encrypt()")," function ","encrypts the ",(0,n.kt)("em",{parentName:"p"},"message")," parameter using the ",(0,n.kt)("strong",{parentName:"p"},"public")," key",". The algorithm used depends on the type of the key."),(0,n.kt)("p",null,"The key must be a RSA key, the algorithm is RSA-OAEP (see ",(0,n.kt)("a",r({parentName:"p"},{href:"https://tools.ietf.org/html/rfc3447"}),"RFC 3447"),")."),(0,n.kt)("h5",r({},{id:"options-1"}),(0,n.kt)("em",{parentName:"h5"},"options")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"hash"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encodingEncrypted"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encodingDecrypted"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Encoding used to convert the ",(0,n.kt)("inlineCode",{parentName:"td"},"message"),' parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".')))),(0,n.kt)("h4",r({},{id:"result-1"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The returned value is an encrypted message."),(0,n.kt)("h2",r({},{id:"getprivatekey"}),".getPrivateKey()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".getPrivateKey()")," : Text"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Private key in PEM format")))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".getPrivateKey()")," function  ","returns the private key of the ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object"," in PEM format, or an empty string if none is available."),(0,n.kt)("h4",r({},{id:"result-2"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The returned value is the private key."),(0,n.kt)("h2",r({},{id:"getpublickey"}),".getPublicKey()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".getPublicKey( )")," : Text"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Public key in PEM format")))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".getPublicKey()")," function ","returns the public key of the ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object"," in PEM format, or an empty string if none is available."),(0,n.kt)("h4",r({},{id:"result-3"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The returned value is the public key."),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"pem"}),".pem"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".pem")," : Text"),(0,n.kt)("p",null,"PEM definition of an encryption key to load. If the key is a private key, the RSA or ECDSA public key will be deduced from it. "),(0,n.kt)("h2",r({},{id:"sign"}),".sign()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,".",(0,n.kt)("strong",{parentName:"p"},"sign")," (",(0,n.kt)("em",{parentName:"p"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"options")," : Text) : Text"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Message string to sign")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Signing options")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Signature in Base64 or Base64URL representation, depending on "encoding" option')))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".sign()")," function ","signs the utf8 representation of a ",(0,n.kt)("em",{parentName:"p"},"message")," string"," using the ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object keys and provided ",(0,n.kt)("em",{parentName:"p"},"options"),". It returns its signature in base64 or base64URL format, depending on the value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"options.encoding")," attribute you passed."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," must contain a valid ",(0,n.kt)("strong",{parentName:"p"},"private")," key."),(0,n.kt)("h4",r({},{id:"options-2"}),(0,n.kt)("em",{parentName:"h4"},"options")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"hash"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encodingEncrypted"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"pss"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," when producing a JWT for PS@ algorithm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encoding"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'ERepresentation to be used for result signature. Possible values: "Base64" or "Base64URL". Default is "Base64".')))),(0,n.kt)("h4",r({},{id:"result-4"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The utf8 representation of the ",(0,n.kt)("em",{parentName:"p"},"message")," string."),(0,n.kt)("h2",r({},{id:"size"}),".size"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".size")," : Integer"),(0,n.kt)("p",null,"Defined only for RSA keys: ","the size of the key in bits",". Typically 2048 (default)."),(0,n.kt)("h2",r({},{id:"type"}),".type"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".type")," : Text"),(0,n.kt)("p",null,'Name of the key type - "RSA", "ECDSA", "PEM" ',".",(0,n.kt)("li",null,'"RSA": an RSA key pair, using ',(0,n.kt)("inlineCode",{parentName:"p"},"settings.size")," as ",(0,n.kt)("a",r({parentName:"p"},{href:"#size"}),".size"),"."),(0,n.kt)("li",null,'"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using ',(0,n.kt)("inlineCode",{parentName:"p"},"settings.curve")," as ",(0,n.kt)("a",r({parentName:"p"},{href:"#curve"}),".curve"),". Note that ECDSA keys cannot be used for encryption but only for signature."),(0,n.kt)("li",null,'"PEM": a key pair definition in PEM format, using ',(0,n.kt)("inlineCode",{parentName:"p"},"settings.pem")," as ",(0,n.kt)("a",r({parentName:"p"},{href:"#pem"}),".pem"),".")),(0,n.kt)("h2",r({},{id:"verify"}),".verify()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".verify"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"signature")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"options")," : Object) : object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Message string that was used to produce the signature")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"signature"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Signature to verify, in Base64 or Base64URL representation, depending on ",(0,n.kt)("inlineCode",{parentName:"td"},"options.encoding")," value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Signing options")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Status of the verification")))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".verify()")," function ","verifies the base64 signature against the utf8 representation of ",(0,n.kt)("em",{parentName:"p"},"message")," using the ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object keys and provided ",(0,n.kt)("em",{parentName:"p"},"options"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," must contain a valid ",(0,n.kt)("strong",{parentName:"p"},"public")," key."),(0,n.kt)("h4",r({},{id:"options-3"}),(0,n.kt)("em",{parentName:"h4"},"options")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"hash"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"pss"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," when verifying a JWT for PS@ algorithm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encoding"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Representation of provided signature. Possible values are "Base64" or "Base64URL". Default is "Base64".')))),(0,n.kt)("h4",r({},{id:"result-5"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The function returns a status object with ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," property set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,n.kt)("inlineCode",{parentName:"p"},"message")," could be successfully verified (i.e. the signature matches)."),(0,n.kt)("p",null,"In case the signature couldn't be verified because it was not signed with the same ",(0,n.kt)("em",{parentName:"p"},"message"),", key or algorithm, the ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," object being returned contains an error collection in ",(0,n.kt)("inlineCode",{parentName:"p"},"status.errors"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True if the signature matches the message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errors"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"If ",(0,n.kt)("inlineCode",{parentName:"td"},"success")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", may contain a collection of errors")))),(0,n.kt)("p",null,"|"))}d.isMDXComponent=!0}}]);