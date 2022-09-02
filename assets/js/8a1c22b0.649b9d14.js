"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,c=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(c,o(o({ref:t},b),{},{components:n})):a.createElement(c,o({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>b});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"BlobClass",title:"Blob"},i=void 0,p={unversionedId:"API/BlobClass",id:"API/BlobClass",title:"Blob",description:"The Blob class lets you create and manipulate blob objects (4D.Blob).",source:"@site/docs/API/BlobClass.md",sourceDirName:"API",slug:"/API/BlobClass",permalink:"/docs/next/API/BlobClass",draft:!1,tags:[],version:"current",frontMatter:{id:"BlobClass",title:"Blob"},sidebar:"docs",previous:{title:"Class API Overview",permalink:"/docs/next/API/overview"},next:{title:"Class",permalink:"/docs/next/API/ClassClass"}},s={},b=[{value:"Summary",id:"summary",level:3},{value:"4D.Blob.new()",id:"4dblobnew",level:2},{value:"Description",id:"description",level:4},{value:".size",id:"size",level:2},{value:"Description",id:"description-1",level:4},{value:".slice()",id:"slice",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example",level:4}],m={toc:b};function d(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Blob class lets you create and manipulate ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/next/Concepts/blob#blob-types"}),"blob objects")," (",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),")."),(0,a.kt)("h3",r({},{id:"summary"}),"Summary"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#4dblobnew"}),(0,a.kt)("strong",{parentName:"a"},"4D.Blob.new()")," : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},"4D.Blob.new"),"( ",(0,a.kt)("em",{parentName:"a"},"blobScal")," : Blob ) : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},"4D.Blob.new"),"( ",(0,a.kt)("em",{parentName:"a"},"blobObj")," : 4D.Blob ) : 4D.Blob"),"\xa0","\xa0","\xa0","\xa0","creates a new ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob")," object optionally encapsulating a copy of the data from another blob (scalar blob or ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#size"}),(0,a.kt)("strong",{parentName:"a"},".size")," : Real"),"\xa0","\xa0","\xa0","\xa0","returns the size of a ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob"),", expressed in bytes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#slice"}),(0,a.kt)("strong",{parentName:"a"},".slice()")," : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".slice"),"( ",(0,a.kt)("em",{parentName:"a"},"start")," : Real ) : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".slice"),"( ",(0,a.kt)("em",{parentName:"a"},"start")," : Real; ",(0,a.kt)("em",{parentName:"a"},"end")," : Real ) : 4D.Blob"),"\xa0","\xa0","\xa0","\xa0"," creates and returns a ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob ")," that references data from a subset of the blob on which it's called. The original blob is not altered.")))),(0,a.kt)("h2",r({},{id:"4dblobnew"}),"4D.Blob.new()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4D.Blob.new()")," : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"4D.Blob.new"),"( ",(0,a.kt)("em",{parentName:"p"},"blobScal")," : Blob ) : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"4D.Blob.new"),"( ",(0,a.kt)("em",{parentName:"p"},"blobObj")," : 4D.Blob ) : 4D.Blob"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"blob"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blob or 4D.Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blob to copy")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"New 4D.Blob")))),(0,a.kt)("h4",r({},{id:"description"}),"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob.new")," creates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," object optionally encapsulating a copy of the data from another blob (scalar blob or ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),")."),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"blob")," parameter is omitted, the method returns an empty 4D.Blob."),(0,a.kt)("h2",r({},{id:"size"}),".size"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".size")," : Real"),(0,a.kt)("h4",r({},{id:"description-1"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".size")," property returns the size of a ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),", expressed in bytes."),(0,a.kt)("h2",r({},{id:"slice"}),".slice()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".slice()")," : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".slice"),"( ",(0,a.kt)("em",{parentName:"p"},"start")," : Real ) : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".slice"),"( ",(0,a.kt)("em",{parentName:"p"},"start")," : Real; ",(0,a.kt)("em",{parentName:"p"},"end")," : Real ) : 4D.Blob"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"start"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"index of the first byte to include in the new ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"end"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"index of the first byte that will not be included in the new ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"New ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob"))))),(0,a.kt)("h4",r({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".slice()"),"  creates and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob ")," that references data from a subset of the blob on which it's called. The original blob is not altered.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," parameter is an index into the blob indicating the first byte to include in the new ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),". If you specify a negative value, 4D treats it as an offset from the end of the blob toward the beginning. For example, -10 would be the 10th from last byte in the blob. The default value is 0. If you specify a value for start that is larger than the size of the source blob, the returned ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),"'s size is 0, and it contains no data."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"end")," parameter is an index into the blob indicating the first byte that will not be included in the new ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," (i.e. the byte exactly at this index is not included). If you specify a negative value, 4D treats it as an offset from the end of the blob toward the beginning. For example, -10 would be the 10th from last byte in the blob. The default value is the size of the blob."),(0,a.kt)("h4",r({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $myBlob : 4D.Blob\n\n// Store text in a 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   //True\n\n$myString:=Convert to text($myBlob; "UTF-8")\n// $myString contains "Hello, World!"\n\n// Create a new 4D.Blob from $myBlob\n$myNewBlob:=$myBlob.slice(0; 5)\n\n$myString:=Convert to text($myNewBlob; "UTF-8")\n// $myString contains "Hello"\n')))}d.isMDXComponent=!0}}]);