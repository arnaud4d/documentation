"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20071],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),s=o(a),k=l,N=s["".concat(p,".").concat(k)]||s[k]||u[k]||r;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},10162:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],d={id:"data-types",title:"Data types overview"},p=void 0,o={unversionedId:"Concepts/data-types",id:"version-18/Concepts/data-types",title:"Data types overview",description:"In 4D, data are handled according to their type in two places: database fields and the 4D language.",source:"@site/versioned_docs/version-18/Concepts/data-types.md",sourceDirName:"Concepts",slug:"/Concepts/data-types",permalink:"/docs/pt/docs/18/Concepts/data-types",draft:!1,tags:[],version:"18",frontMatter:{id:"data-types",title:"Data types overview"},sidebar:"docs",previous:{title:"A Quick Tour",permalink:"/docs/pt/docs/18/Concepts/quick-tour"},next:{title:"BLOB",permalink:"/docs/pt/docs/18/Concepts/blob"}},m={},u=[{value:"Default values",id:"default-values",level:2},{value:"Converting data types",id:"converting-data-types",level:2}],s={toc:u};function k(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In 4D, data are handled according to their type in two places: database fields and the 4D language."),(0,r.kt)("p",null,"Although they are usually equivalent, some data types available at the database level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Types"),(0,r.kt)("th",{parentName:"tr",align:null},"Database support(1)"),(0,r.kt)("th",{parentName:"tr",align:null},"Language support"),(0,r.kt)("th",{parentName:"tr",align:null},"Variable declaration"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/string"},"Alphanumeric")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Converted to text"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/string"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_TEXT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY TEXT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/date"},"Date")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_DATE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY DATE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/time"},"Time")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_TIME"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY TIME"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/boolean"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_BOOLEAN"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY BOOLEAN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/number"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Converted to longint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY INTEGER"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/number"},"Longint")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_LONGINT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY LONGINT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/number"},"Longint 64 bits")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes (SQL)"),(0,r.kt)("td",{parentName:"tr",align:null},"Converted to real"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/number"},"Real")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_REAL"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY REAL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/null-undefined"},"Undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/null-undefined"},"Null")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/pointer"},"Pointer")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_POINTER"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY POINTER"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/picture"},"Picture")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_PICTURE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY PICTURE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/blob"},"BLOB")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_BLOB"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY BLOB"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/object"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_OBJECT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY OBJECT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/collection"},"Collection")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_COLLECTION"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/pt/docs/18/Concepts/variant"},"Variant"),"(2)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C_VARIANT"))))),(0,r.kt)("p",null,"(1) Note that ORDA handles database fields through objects (entities) and thus, only supports data types available to these objects. For more information, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pt/docs/18/Concepts/object"},"Object")," data type description."),(0,r.kt)("p",null,"(2) Variant is actually not a ",(0,r.kt)("em",{parentName:"p"},"data")," type but a ",(0,r.kt)("em",{parentName:"p"},"variable")," type that can contain a value of any other data type."),(0,r.kt)("h2",{id:"default-values"},"Default values"),(0,r.kt)("p",null,"When variables are typed by means of a compiler directive, they receive a default value, which they will keep during the session as long as they have not been assigned."),(0,r.kt)("p",null,"The default value depends on the variable type and category, its execution context (interpreted or compiled), as well as, for compiled mode, the compilation options defined on the Compiler page of the Database settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Process and interprocess variables are always set "to zero" (which means, depending on the case, "0", an empty string, an empty Blob, a Nil pointer, a blank date (00-00-00), etc.)'),(0,r.kt)("li",{parentName:"ul"},"Local variables are set:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'- in interpreted mode: to zero\n- in compiled mode, depending on the **Initialize local variables** option of the Database settings:\n    - "to zero": to zero (see above),\n    - "to a random value": 0x72677267 for numbers and times, always True for Booleans, the same as "to zero" for the others,\n    - "no": no initialization, meaning whatever is in RAM is used for the variables, like values used before for other variables.\n')),(0,r.kt)("strong",{parentName:"li"},"Note:"),' 4D recommends to use "to zero".')),(0,r.kt)("p",null,"The following table illustrates these default values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},'Interprocess/Process (interpreted/compiled), Local (interpreted/compiled "to zero")'),(0,r.kt)("th",{parentName:"tr",align:null},'Local compiled "random"'),(0,r.kt)("th",{parentName:"tr",align:null},'Local compiled "no"'))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Booleen"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True (varies)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"00-00-00"),(0,r.kt)("td",{parentName:"tr",align:null},"00-00-00"),(0,r.kt)("td",{parentName:"tr",align:null},"00-00-00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Longint"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1919382119"),(0,r.kt)("td",{parentName:"tr",align:null},"909540880 (varies)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},"00:00:00"),(0,r.kt)("td",{parentName:"tr",align:null},"533161:41:59"),(0,r.kt)("td",{parentName:"tr",align:null},"249345:34:24 (varies)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Picture"),(0,r.kt)("td",{parentName:"tr",align:null},"picture size=0"),(0,r.kt)("td",{parentName:"tr",align:null},"picture size=0"),(0,r.kt)("td",{parentName:"tr",align:null},"picture size=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Real"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1.250753659382e+243"),(0,r.kt)("td",{parentName:"tr",align:null},"1.972748538022e-217 (varies)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pointer"),(0,r.kt)("td",{parentName:"tr",align:null},"Nil=true"),(0,r.kt)("td",{parentName:"tr",align:null},"Nil=true"),(0,r.kt)("td",{parentName:"tr",align:null},"Nil=true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blob"),(0,r.kt)("td",{parentName:"tr",align:null},"Blob size=0"),(0,r.kt)("td",{parentName:"tr",align:null},"Blob size=0"),(0,r.kt)("td",{parentName:"tr",align:null},"Blob size=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Variant"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h2",{id:"converting-data-types"},"Converting data types"),(0,r.kt)("p",null,'The 4D language contains operators and commands to convert between data types, where such conversions are meaningful. The 4D language enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.'),(0,r.kt)("p",null,"The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Type to Convert"),(0,r.kt)("th",{parentName:"tr",align:null},"to String"),(0,r.kt)("th",{parentName:"tr",align:null},"to Number"),(0,r.kt)("th",{parentName:"tr",align:null},"to Date"),(0,r.kt)("th",{parentName:"tr",align:null},"to Time"),(0,r.kt)("th",{parentName:"tr",align:null},"to Boolean"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String (1)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Num"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number (2)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Num"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON Parse")," command."),(0,r.kt)("p",null,"(2) Time values can be treated as numbers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands."))}k.isMDXComponent=!0}}]);