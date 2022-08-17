"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>B});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),B=a,b=u["".concat(l,".").concat(B)]||u[B]||d[B]||o;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function B(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>B,default:()=>O,frontMatter:()=>u,metadata:()=>b,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e};const u={id:"blob",title:"BLOB"},B=void 0,b={unversionedId:"Concepts/blob",id:"version-19/Concepts/blob",title:"BLOB",description:"A BLOB (Binary Large OBjects) field, variable or expression is a contiguous series of bytes which can be treated as one whole object or whose bytes can be addressed individually. A BLOB can be empty (null length) or can contain up to 2147483647 bytes (2 GB).",source:"@site/versioned_docs/version-19/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/docs/es/19/Concepts/blob",draft:!1,tags:[],version:"19",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"Data types overview",permalink:"/docs/es/19/Concepts/data-types"},next:{title:"Boolean",permalink:"/docs/es/19/Concepts/boolean"}},m={},y=[{value:"Parameter passing, Pointers and function results",id:"parameter-passing-pointers-and-function-results",level:2},{value:"Assignment operator",id:"assignment-operator",level:2},{value:"Addressing BLOB contents",id:"addressing-blob-contents",level:2}],f={toc:y};function O(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},f),c),o(t,s({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A BLOB (Binary Large OBjects) field, variable or expression is a contiguous series of bytes which can be treated as one whole object or whose bytes can be addressed individually. A BLOB can be empty (null length) or can contain up to 2147483647 bytes (2 GB). "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By default, 4D sets the maximum blob size to 2GB, but this size limit may be lower depending on your OS and how much space is available.")),(0,r.kt)("p",null,"A BLOB is loaded into memory in its entirety. A BLOB variable is held and exists in memory only. A BLOB field is loaded into memory from the disk, like the rest of the record to which it belongs."),(0,r.kt)("p",null,"Like the other field types that can retain a large amount of data (such as the Picture field type), BLOB fields are not duplicated in memory when you modify a record. Consequently, the result returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Old")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Modified")," commands is not significant when applied to a BLOB field."),(0,r.kt)("h2",d({},{id:"parameter-passing-pointers-and-function-results"}),"Parameter passing, Pointers and function results"),(0,r.kt)("p",null,"4D BLOBs can be passed as parameters to 4D commands or plug-in routines that expect BLOB parameters. BLOBS can also be passed as parameters to a user method or be returned as a function result."),(0,r.kt)("p",null,"To pass a BLOB to your own methods, you can also define a pointer to the BLOB and pass the pointer as parameter."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples:")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-4d"}),"  ` Declare a variable of type BLOB\n C_BLOB(anyBlobVar)\n  ` The BLOB is passed as parameter to a 4D command\n SET BLOB SIZE(anyBlobVar;1024*1024)\n  ` The BLOB is passed as parameter to an external routine\n $errCode:=Do Something With This BLOB(anyBlobVar)\n  ` The BLOB is passed as a parameter to a method that returns a BLOB\n C_BLOB(retrieveBlob)\n retrieveBlob:=Fill_Blob(anyBlobVar)\n  ` A pointer to the BLOB is passed as parameter to a user method\n COMPUTE BLOB(->anyBlobVar)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note for Plug-in developers:")," A BLOB parameter is declared as \u201c&O\u201d (the letter \u201cO\u201d, not the digit \u201c0\u201d)."),(0,r.kt)("h2",d({},{id:"assignment-operator"}),"Assignment operator"),(0,r.kt)("p",null,"You can assign BLOBs to each other."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-4d"}),"  ` Declare two variables of type BLOB\n C_BLOB(vBlobA;vBlobB)\n  ` Set the size of the first BLOB to 10K\n SET BLOB SIZE(vBlobA;10*1024)\n  ` Assign the first BLOB to the second one\n vBlobB:=vBlobA\n")),(0,r.kt)("p",null,"However, no operator can be applied to BLOBs."),(0,r.kt)("h2",d({},{id:"addressing-blob-contents"}),"Addressing BLOB contents"),(0,r.kt)("p",null,"You can address each byte of a BLOB individually using the curly brackets symbols {...}. Within a BLOB, bytes are numbered from 0 to N-1, where N is the size of the BLOB. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-4d"}),"  ` Declare a variable of type BLOB\n C_BLOB(vBlob)\n  ` Set the size of the BLOB to 256 bytes\n SET BLOB SIZE(vBlob;256)\n  ` The loop below initializes the 256 bytes of the BLOB to zero\n For(vByte;0;BLOB size(vBlob)-1)\n    vBlob{vByte}:=0\n End for\n")),(0,r.kt)("p",null,"Because you can address all the bytes of a BLOB individually, you can actually store whatever you want in a BLOB field or variable."))}O.isMDXComponent=!0}}]);