"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var o=n(87462),l=n(63366),r=(n(67294),n(3905)),a=["components"],c={id:"collection",title:"Collection"},i=void 0,s={unversionedId:"Concepts/collection",id:"Concepts/collection",title:"Collection",description:"Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).",source:"@site/docs/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/es/docs/next/Concepts/collection",draft:!1,tags:[],version:"current",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Boolean",permalink:"/es/docs/next/Concepts/boolean"},next:{title:"Date",permalink:"/es/docs/next/Concepts/date"}},p={},u=[{value:"Initialization",id:"initialization",level:2},{value:"Regular or shared collection",id:"regular-or-shared-collection",level:3},{value:"Collection functions",id:"collection-functions",level:2},{value:"propertyPath parameter",id:"propertypath-parameter",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null)."),(0,r.kt)("p",null,"Collection type variables are managed using object notation (see ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/next/Concepts/object#syntax-basics"},"Syntax basics"),")."),(0,r.kt)("p",null,"To access a collection element, you need to pass the element number inside square brackets:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"collectionRef[expression]\n")),(0,r.kt)("p",null,"You can pass any valid 4D expression which returns a positive integer in ",(0,r.kt)("em",{parentName:"p"},"expression"),". Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," myCollection[5]  //access to 6th element of the collection\n myCollection[$var]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," Collection elements are numbered from 0."),(0,r.kt)("p",null,"You can assign a value to a collection element or get a collection element value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' myCol[10]:="My new element"\n $myVar:=myCol[0]\n')),(0,r.kt)("p",null,"If you assign an element's index that surpasses the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a null value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var myCol : Collection\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n')),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"Collections must have been initialized, for example using the ",(0,r.kt)("inlineCode",{parentName:"p"},"New collection")," command, otherwise trying to read or modify their elements will generate a syntax error."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," var $colVar : Collection //creation of collection type 4D variable\n $colVar:=New collection //initialization of the collection and assignment to the 4D variable\n")),(0,r.kt)("h3",{id:"regular-or-shared-collection"},"Regular or shared collection"),(0,r.kt)("p",null,"You can create two types of collections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"regular (non-shared) collections, using the ",(0,r.kt)("a",{parentName:"li",href:"/es/docs/next/API/CollectionClass#new-collection"},(0,r.kt)("inlineCode",{parentName:"a"},"New collection"))," command. These collections can be edited without any specific access control but cannot be shared between processes. "),(0,r.kt)("li",{parentName:"ul"},"shared collections, using the ",(0,r.kt)("a",{parentName:"li",href:"/es/docs/next/API/CollectionClass#new-shared-collection"},(0,r.kt)("inlineCode",{parentName:"a"},"New shared collection"))," command. These collections can be shared between processes, including preemptive threads. Access to these collections is controlled by ",(0,r.kt)("a",{parentName:"li",href:"/es/docs/next/Concepts/shared#useend-use"},(0,r.kt)("inlineCode",{parentName:"a"},"Use...End use"))," structures. ")),(0,r.kt)("p",null,"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/next/Concepts/shared"},"Shared objects and collections")," section."),(0,r.kt)("h2",{id:"collection-functions"},"Collection functions"),(0,r.kt)("p",null,"4D collection references benefit from special class functions (sometimes named ",(0,r.kt)("em",{parentName:"p"},"member functions"),"). Collection functions are listed in the ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/next/API/CollectionClass"},"Class API Reference")," section."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"$newCol:=$col.copy() //deep copy of $col to $newCol\n$col.push(10;100) //add 10 and 100 to the collection\n")),(0,r.kt)("p",null,"Some functions return the original collection after modification, so that you can run the calls in a sequence:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n")),(0,r.kt)("h3",{id:"propertypath-parameter"},"propertyPath parameter"),(0,r.kt)("p",null,"Several functions accept a ",(0,r.kt)("em",{parentName:"p"},"propertyPath")," as parameter. This parameter stands for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'either an object property name, for example "lastName"'),(0,r.kt)("li",{parentName:"ul"},'or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName".')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:"),' When using functions and propertyPath parameters, you cannot use ".", "',"[ ]",'", or spaces in property names since it will prevent 4D from correctly parsing the path:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' $vmin:=$col.min("My.special.property") //undefined\n $vmin:=$col.min(["My.special.property"]) //error\n')))}d.isMDXComponent=!0}}]);