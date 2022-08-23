"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2337],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,g=d["".concat(o,".").concat(u)]||d[u]||k[u]||l;return a?n.createElement(g,p(p({ref:t},m),{},{components:a})):n.createElement(g,p({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>m});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"CryptoKeyClass",title:"CryptoKey"},i=void 0,o={unversionedId:"API/CryptoKeyClass",id:"API/CryptoKeyClass",title:"CryptoKey",description:"The CryptoKey class in the 4D language encapsulates an asymmetric encryption key pair.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/API/CryptoKeyClass.md",sourceDirName:"API",slug:"/API/CryptoKeyClass",permalink:"/docs/es/next/API/CryptoKeyClass",draft:!1,tags:[],version:"current",frontMatter:{id:"CryptoKeyClass",title:"CryptoKey"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/es/next/API/CollectionClass"},next:{title:"DataClass",permalink:"/docs/es/next/API/DataClassClass"}},s={},m=[{value:"Example",id:"example",level:3},{value:"Summary",id:"summary",level:3},{value:"4D.CryptoKey.new()",id:"4dcryptokeynew",level:2},{value:"<em>settings</em>",id:"settings",level:4},{value:"<em>CryptoKey</em>",id:"cryptokey",level:4},{value:".curve",id:"curve",level:2},{value:".decrypt()",id:"decrypt",level:2},{value:"<em>options</em>",id:"options",level:4},{value:"<em>Result</em>",id:"result",level:4},{value:".encrypt()",id:"encrypt",level:2},{value:"<em>options</em>",id:"options-1",level:5},{value:"<em>Result</em>",id:"result-1",level:4},{value:".getPrivateKey()",id:"getprivatekey",level:2},{value:"<em>Result</em>",id:"result-2",level:4},{value:".getPublicKey()",id:"getpublickey",level:2},{value:"<em>Result</em>",id:"result-3",level:4},{value:".pem",id:"pem",level:2},{value:".sign()",id:"sign",level:2},{value:"<em>options</em>",id:"options-2",level:4},{value:"<em>Result</em>",id:"result-4",level:4},{value:".size",id:"size",level:2},{value:".type",id:"type",level:2},{value:".verify()",id:"verify",level:2},{value:"<em>options</em>",id:"options-3",level:4},{value:"<em>Result</em>",id:"result-5",level:4}],k={toc:m};function d(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," class in the 4D language encapsulates an asymmetric encryption key pair."),(0,n.kt)("p",null,"This class is available from the ",(0,n.kt)("inlineCode",{parentName:"p"},"4D")," class store."),(0,n.kt)("h3",r({},{id:"example"}),"Example"),(0,n.kt)("p",null,"The following sample code signs and verifies a message using a new ECDSA key pair, for example in order to make a ES256 JSON Web token."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' // Generate a new ECDSA key pair\n$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))\n\n  // Get signature as base64\n$message:="hello world"\n$signature:=$key.sign($message;New object("hash";"SHA256"))\n\n  // Verify signature\n$status:=$key.verify($message;$signature;New object("hash";"SHA256"))\nASSERT($status.success)\n')),(0,n.kt)("h3",r({},{id:"summary"}),"Summary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#4dcryptokeynew"}),(0,n.kt)("strong",{parentName:"a"},"4D.CryptoKey.new"),"( ",(0,n.kt)("em",{parentName:"a"},"settings")," : Object ) : 4D.CryptoKey"),"\xa0","\xa0","\xa0","\xa0","creates a new ",(0,n.kt)("inlineCode",{parentName:"td"},"4D.CryptoKey")," object encapsulating an encryption key pair")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#curve"}),(0,n.kt)("strong",{parentName:"a"},".curve")," : Text"),"\xa0","\xa0","\xa0","\xa0","normalised curve name of the key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#decrypt"}),(0,n.kt)("strong",{parentName:"a"},".decrypt"),"( ",(0,n.kt)("em",{parentName:"a"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"a"},"options")," : Object ) : Object"),"\xa0","\xa0","\xa0","\xa0","decrypts the ",(0,n.kt)("em",{parentName:"td"},"message")," parameter using the ",(0,n.kt)("strong",{parentName:"td"},"private")," key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#encrypt"}),(0,n.kt)("strong",{parentName:"a"},".encrypt"),"( ",(0,n.kt)("em",{parentName:"a"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"a"},"options")," : Object ) : Text"),"\xa0","\xa0","\xa0","\xa0","encrypts the ",(0,n.kt)("em",{parentName:"td"},"message")," parameter using the ",(0,n.kt)("strong",{parentName:"td"},"public")," key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#getprivatekey"}),(0,n.kt)("strong",{parentName:"a"},".getPrivateKey()")," : Text"),"\xa0","\xa0","\xa0","\xa0","returns the private key of the ",(0,n.kt)("inlineCode",{parentName:"td"},"CryptoKey")," object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#getpublickey"}),(0,n.kt)("strong",{parentName:"a"},".getPublicKey( )")," : Text"),"\xa0","\xa0","\xa0","\xa0","returns the public key of the ",(0,n.kt)("inlineCode",{parentName:"td"},"CryptoKey")," object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#sign"}),".",(0,n.kt)("strong",{parentName:"a"},"sign")," (",(0,n.kt)("em",{parentName:"a"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"a"},"options")," : Text) : Text"),"\xa0","\xa0","\xa0","\xa0","signs the utf8 representation of a ",(0,n.kt)("em",{parentName:"td"},"message")," string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#size"}),(0,n.kt)("strong",{parentName:"a"},".size")," : Integer"),"\xa0","\xa0","\xa0","\xa0","the size of the key in bits")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#type"}),(0,n.kt)("strong",{parentName:"a"},".type")," : Text"),"\xa0","\xa0","\xa0","\xa0",'Name of the key type - "RSA", "ECDSA", "PEM"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#verify"}),(0,n.kt)("strong",{parentName:"a"},".verify"),"( ",(0,n.kt)("em",{parentName:"a"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"a"},"signature")," : Text ; ",(0,n.kt)("em",{parentName:"a"},"options")," : Object) : object"),"\xa0","\xa0","\xa0","\xa0","verifies the base64 signature against the utf8 representation of ",(0,n.kt)("em",{parentName:"td"},"message"))))),(0,n.kt)("h2",r({},{id:"4dcryptokeynew"}),"4D.CryptoKey.new()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4D.CryptoKey.new"),"( ",(0,n.kt)("em",{parentName:"p"},"settings")," : Object ) : 4D.CryptoKey\n| Parameter | Type         |    | Description                                                            |\n| --------- | ------------ | -- | ---------------------------------------------------------------------- |\n| settings  | Object       | -> | Settings to generate or load a key pair                                |\n| result    | 4D.CryptoKey | <- | Object encapsulating an encryption key pair|\n|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.CryptoKey.new()")," function creates a new ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.CryptoKey")," object encapsulating an encryption key pair, based upon the ",(0,n.kt)("em",{parentName:"p"},"settings")," object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition."),(0,n.kt)("h4",r({},{id:"settings"}),(0,n.kt)("em",{parentName:"h4"},"settings")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#curve"}),"curve")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Name of ECDSA curve")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#pem"}),"pem")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PEM definition of an encryption key to load")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#size"}),"size")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Size of RSA key in bits")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#type"}),"type")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Type of the key: "RSA", "ECDSA", or "PEM"')))),(0,n.kt)("h4",r({},{id:"cryptokey"}),(0,n.kt)("em",{parentName:"h4"},"CryptoKey")),(0,n.kt)("p",null,"The returned ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple 4D processes simultaneously."),(0,n.kt)("h2",r({},{id:"curve"}),".curve"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".curve"),' : Text\nDefined only for ECDSA keys: the normalised curve name of the key. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.'),(0,n.kt)("h2",r({},{id:"decrypt"}),".decrypt()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".decrypt"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"options")," : Object ) : Object\n| Parameter | Type   |    | Description                                                                   |\n| --------- | ------ | -- | ----------------------------------------------------------------------------- |\n| message   | Text   | -> | Message string to be decoded using ",(0,n.kt)("inlineCode",{parentName:"p"},"options.encodingEncrypted")," and decrypted. |\n| options   | Object | -> | Decoding options                                                              |\n| Result    | Object | <- | Status|\n|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".decrypt()")," function decrypts the ",(0,n.kt)("em",{parentName:"p"},"message")," parameter using the ",(0,n.kt)("strong",{parentName:"p"},"private")," key. The algorithm used depends on the type of the key."),(0,n.kt)("p",null,"The key must be a RSA key, the algorithm is RSA-OAEP (see ",(0,n.kt)("a",r({parentName:"p"},{href:"https://tools.ietf.org/html/rfc3447"}),"RFC 3447"),")."),(0,n.kt)("h4",r({},{id:"options"}),(0,n.kt)("em",{parentName:"h4"},"options")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"hash"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encodingEncrypted"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Encoding used to convert the ",(0,n.kt)("inlineCode",{parentName:"td"},"message"),' parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". Default is "Base64".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encodingDecrypted"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".')))),(0,n.kt)("h4",r({},{id:"result"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The function returns a status object with ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," property set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,n.kt)("em",{parentName:"p"},"message")," could be successfully decrypted."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True if the message has been successfully decrypted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Message decrypted and decoded using the ",(0,n.kt)("inlineCode",{parentName:"td"},"options.encodingDecrypted"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errors"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"If ",(0,n.kt)("inlineCode",{parentName:"td"},"success")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", may contain a collection of errors")))),(0,n.kt)("p",null,"In case the ",(0,n.kt)("em",{parentName:"p"},"message")," couldn't be decrypted because it was not encrypted with the same key or algorithm, the ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," object being returned contains an error collection in ",(0,n.kt)("inlineCode",{parentName:"p"},"status.errors"),"."),(0,n.kt)("h2",r({},{id:"encrypt"}),".encrypt()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".encrypt"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"options")," : Object ) : Text\n| Parameter | Type   |    | Description                                                                                    |\n| --------- | ------ | -- | ---------------------------------------------------------------------------------------------- |\n| message   | Text   | -> | Message string to be encoded using ",(0,n.kt)("inlineCode",{parentName:"p"},"options.encodingDecrypted")," and encrypted.                  |\n| options   | Object | -> | Encoding options                                                                               |\n| Result    | Text   | <- | Message encrypted and encoded using the ",(0,n.kt)("inlineCode",{parentName:"p"},"options.encodingEncrypted"),"|\n|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".encrypt()")," function encrypts the ",(0,n.kt)("em",{parentName:"p"},"message")," parameter using the ",(0,n.kt)("strong",{parentName:"p"},"public")," key. The algorithm used depends on the type of the key."),(0,n.kt)("p",null,"The key must be a RSA key, the algorithm is RSA-OAEP (see ",(0,n.kt)("a",r({parentName:"p"},{href:"https://tools.ietf.org/html/rfc3447"}),"RFC 3447"),")."),(0,n.kt)("h5",r({},{id:"options-1"}),(0,n.kt)("em",{parentName:"h5"},"options")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"hash"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encodingEncrypted"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encodingDecrypted"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Encoding used to convert the ",(0,n.kt)("inlineCode",{parentName:"td"},"message"),' parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".')))),(0,n.kt)("h4",r({},{id:"result-1"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The returned value is an encrypted message."),(0,n.kt)("h2",r({},{id:"getprivatekey"}),".getPrivateKey()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".getPrivateKey()")," : Text\n| Parameter | Type |    | Description                                          |\n| --------- | ---- | -- | ---------------------------------------------------- |\n| Result    | Text | <- | Private key in PEM format|\n|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".getPrivateKey()")," function  returns the private key of the ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object in PEM format, or an empty string if none is available."),(0,n.kt)("h4",r({},{id:"result-2"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The returned value is the private key."),(0,n.kt)("h2",r({},{id:"getpublickey"}),".getPublicKey()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".getPublicKey( )")," : Text\n| Parameter | Type |    | Description                                         |\n| --------- | ---- | -- | --------------------------------------------------- |\n| Result    | Text | <- | Public key in PEM format|\n|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".getPublicKey()")," function returns the public key of the ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object in PEM format, or an empty string if none is available."),(0,n.kt)("h4",r({},{id:"result-3"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The returned value is the public key."),(0,n.kt)("h2",r({},{id:"pem"}),".pem"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".pem")," : Text\nPEM definition of an encryption key to load. If the key is a private key, the RSA or ECDSA public key will be deduced from it. "),(0,n.kt)("h2",r({},{id:"sign"}),".sign()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,".",(0,n.kt)("strong",{parentName:"p"},"sign")," (",(0,n.kt)("em",{parentName:"p"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"options"),' : Text) : Text\n| Parameter | Type   |    | Description                                                                                                |\n| --------- | ------ | -- | ---------------------------------------------------------------------------------------------------------- |\n| message   | Text   | -> | Message string to sign                                                                                     |\n| options   | Object | -> | Signing options                                                                                            |\n| Result    | Text   | <- | Signature in Base64 or Base64URL representation, depending on "encoding" option|\n|'),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".sign()")," function signs the utf8 representation of a ",(0,n.kt)("em",{parentName:"p"},"message")," string using the ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object keys and provided ",(0,n.kt)("em",{parentName:"p"},"options"),". It returns its signature in base64 or base64URL format, depending on the value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"options.encoding")," attribute you passed."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," must contain a valid ",(0,n.kt)("strong",{parentName:"p"},"private")," key."),(0,n.kt)("h4",r({},{id:"options-2"}),(0,n.kt)("em",{parentName:"h4"},"options")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"hash"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encodingEncrypted"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"pss"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," when producing a JWT for PS@ algorithm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encoding"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'ERepresentation to be used for result signature. Possible values: "Base64" or "Base64URL". Default is "Base64".')))),(0,n.kt)("h4",r({},{id:"result-4"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The utf8 representation of the ",(0,n.kt)("em",{parentName:"p"},"message")," string."),(0,n.kt)("h2",r({},{id:"size"}),".size"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".size")," : Integer\nDefined only for RSA keys: the size of the key in bits. Typically 2048 (default)."),(0,n.kt)("h2",r({},{id:"type"}),".type"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".type"),' : Text\nName of the key type - "RSA", "ECDSA", "PEM" .',(0,n.kt)("li",null,'"RSA": an RSA key pair, using ',(0,n.kt)("inlineCode",{parentName:"p"},"settings.size")," as ",(0,n.kt)("a",r({parentName:"p"},{href:"#size"}),".size"),"."),(0,n.kt)("li",null,'"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using ',(0,n.kt)("inlineCode",{parentName:"p"},"settings.curve")," as ",(0,n.kt)("a",r({parentName:"p"},{href:"#curve"}),".curve"),". Note that ECDSA keys cannot be used for encryption but only for signature."),(0,n.kt)("li",null,'"PEM": a key pair definition in PEM format, using ',(0,n.kt)("inlineCode",{parentName:"p"},"settings.pem")," as ",(0,n.kt)("a",r({parentName:"p"},{href:"#pem"}),".pem"),".")),(0,n.kt)("h2",r({},{id:"verify"}),".verify()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".verify"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"signature")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"options")," : Object) : object\n| Parameter | Type   |    | Description                                                                                       |\n| --------- | ------ | -- | ------------------------------------------------------------------------------------------------- |\n| message   | Text   | -> | Message string that was used to produce the signature                                             |\n| signature | Text   | -> | Signature to verify, in Base64 or Base64URL representation, depending on ",(0,n.kt)("inlineCode",{parentName:"p"},"options.encoding")," value |\n| options   | Object | -> | Signing options                                                                                   |\n| Result    | Object | <- | Status of the verification|\n|"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".verify()")," function verifies the base64 signature against the utf8 representation of ",(0,n.kt)("em",{parentName:"p"},"message")," using the ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object keys and provided ",(0,n.kt)("em",{parentName:"p"},"options"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CryptoKey")," must contain a valid ",(0,n.kt)("strong",{parentName:"p"},"public")," key."),(0,n.kt)("h4",r({},{id:"options-3"}),(0,n.kt)("em",{parentName:"h4"},"options")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"hash"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"pss"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," when verifying a JWT for PS@ algorithm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encoding"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Representation of provided signature. Possible values are "Base64" or "Base64URL". Default is "Base64".')))),(0,n.kt)("h4",r({},{id:"result-5"}),(0,n.kt)("em",{parentName:"h4"},"Result")),(0,n.kt)("p",null,"The function returns a status object with ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," property set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,n.kt)("inlineCode",{parentName:"p"},"message")," could be successfully verified (i.e. the signature matches)."),(0,n.kt)("p",null,"In case the signature couldn't be verified because it was not signed with the same ",(0,n.kt)("em",{parentName:"p"},"message"),", key or algorithm, the ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," object being returned contains an error collection in ",(0,n.kt)("inlineCode",{parentName:"p"},"status.errors"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True if the signature matches the message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errors"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"If ",(0,n.kt)("inlineCode",{parentName:"td"},"success")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),", may contain a collection of errors")))))}d.isMDXComponent=!0}}]);