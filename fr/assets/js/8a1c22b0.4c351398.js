"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),b=s(n),u=l,c=b["".concat(p,".").concat(u)]||b[u]||d[u]||r;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=["components"],i={id:"BlobClass",title:"Blob"},p=void 0,s={unversionedId:"API/BlobClass",id:"API/BlobClass",title:"Blob",description:"The Blob class lets you create and manipulate blob objects (4D.Blob).",source:"@site/docs/API/BlobClass.md",sourceDirName:"API",slug:"/API/BlobClass",permalink:"/fr/docs/next/API/BlobClass",draft:!1,tags:[],version:"current",frontMatter:{id:"BlobClass",title:"Blob"},sidebar:"docs",previous:{title:"Class API Overview",permalink:"/fr/docs/next/API/overview"},next:{title:"Class",permalink:"/fr/docs/next/API/ClassClass"}},m={},d=[{value:"Summary",id:"summary",level:3},{value:"4D.Blob.new()",id:"4dblobnew",level:2},{value:"Description",id:"description",level:4},{value:".size",id:"size",level:2},{value:"Description",id:"description-1",level:4},{value:".slice()",id:"slice",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example",level:4}],b={toc:d};function u(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Blob class lets you create and manipulate ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/next/Concepts/blob#blob-types"},"blob objects")," (",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Blob"),")."),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#4dblobnew"}),"\xa0","\xa0","\xa0","\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#size"}),"\xa0","\xa0","\xa0","\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#slice"}),"\xa0","\xa0","\xa0","\xa0")))),(0,r.kt)("h2",{id:"4dblobnew"},"4D.Blob.new()"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v19 R2"),(0,r.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4D.Blob.new()")," : 4D.Blob",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"4D.Blob.new"),"( ",(0,r.kt)("em",{parentName:"p"},"blobScal")," : Blob ) : 4D.Blob",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"4D.Blob.new"),"( ",(0,r.kt)("em",{parentName:"p"},"blobObj")," : 4D.Blob ) : 4D.Blob"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blob"),(0,r.kt)("td",{parentName:"tr",align:null},"Blob or 4D.Blob"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Blob to copy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.Blob"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"New 4D.Blob")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"4D.Blob.new")," ","creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Blob")," object optionally encapsulating a copy of the data from another blob (scalar blob or ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Blob"),")","."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"blob")," parameter is omitted, the method returns an empty 4D.Blob."),(0,r.kt)("h2",{id:"size"},".size"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".size")," : Real"),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".size")," property ","returns the size of a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Blob"),", expressed in bytes."),(0,r.kt)("h2",{id:"slice"},".slice()"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v19 R2"),(0,r.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".slice()")," : 4D.Blob",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},".slice"),"( ",(0,r.kt)("em",{parentName:"p"},"start")," : Real ) : 4D.Blob",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},".slice"),"( ",(0,r.kt)("em",{parentName:"p"},"start")," : Real; ",(0,r.kt)("em",{parentName:"p"},"end")," : Real ) : 4D.Blob"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start"),(0,r.kt)("td",{parentName:"tr",align:null},"Real"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"index of the first byte to include in the new ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.Blob"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"Real"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"index of the first byte that will not be included in the new ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.Blob"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.Blob"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"New ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.Blob"))))),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".slice()")," "," creates and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Blob ")," that references data from a subset of the blob on which it's called. The original blob is not altered."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," parameter is an index into the blob indicating the first byte to include in the new ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Blob"),". If you specify a negative value, 4D treats it as an offset from the end of the blob toward the beginning. For example, -10 would be the 10th from last byte in the blob. The default value is 0. If you specify a value for start that is larger than the size of the source blob, the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Blob"),"'s size is 0, and it contains no data."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," parameter is an index into the blob indicating the first byte that will not be included in the new ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Blob")," (i.e. the byte exactly at this index is not included). If you specify a negative value, 4D treats it as an offset from the end of the blob toward the beginning. For example, -10 would be the 10th from last byte in the blob. The default value is the size of the blob."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'var $myBlob : 4D.Blob\n\n// Store text in a 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   //True\n\n$myString:=Convert to text($myBlob; "UTF-8")\n// $myString contains "Hello, World!"\n\n// Create a new 4D.Blob from $myBlob\n$myNewBlob:=$myBlob.slice(0; 5)\n\n$myString:=Convert to text($myNewBlob; "UTF-8")\n// $myString contains "Hello"\n')))}u.isMDXComponent=!0}}]);