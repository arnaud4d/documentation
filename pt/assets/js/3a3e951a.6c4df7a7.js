"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=n(87462),l=n(63366),r=(n(67294),n(3905)),a=["components"],i={id:"collection",title:"Collection"},c=void 0,s={unversionedId:"Concepts/collection",id:"version-18/Concepts/collection",title:"Collection",description:"Collections are ordered lists of values of similar or mixed types (text, number, object, boolean, collection, or null).",source:"@site/versioned_docs/version-18/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/main/pt/docs/18/Concepts/collection",draft:!1,tags:[],version:"18",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Boolean",permalink:"/main/pt/docs/18/Concepts/boolean"},next:{title:"Date",permalink:"/main/pt/docs/18/Concepts/date"}},p={},m=[{value:"Initialization",id:"initialization",level:2},{value:"Regular or shared collection",id:"regular-or-shared-collection",level:3},{value:"Collection methods",id:"collection-methods",level:2},{value:"propertyPath parameter",id:"propertypath-parameter",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Collections are ordered lists of values of similar or mixed types (text, number, object, boolean, collection, or null)."),(0,r.kt)("p",null,"To manage Collection type variables you must use object notation (see ",(0,r.kt)("a",{parentName:"p",href:"/main/pt/docs/18/Concepts/object#syntax-basics"},"Syntax basics"),")."),(0,r.kt)("p",null,"To access a collection element, you need to pass the element number inside square brackets:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"collectionRef[expression]\n")),(0,r.kt)("p",null,"You can pass any valid 4D expression which returns a positive integer in expression. Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," myCollection[5]  //access to 6th element of the collection\n myCollection[$var]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," Collection elements are numbered from 0."),(0,r.kt)("p",null,"You can assign a value to a collection element or get a collection element value using object notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' myCol[10]:="My new element"\n $myVar:=myCol[0]\n')),(0,r.kt)("p",null,"If you assign an element's index that surpasses the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a null value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' C_COLLECTION(myCol)\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n')),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"Collections must have been initialized, for example using the ",(0,r.kt)("inlineCode",{parentName:"p"},"New collection")," command, otherwise trying to read or modify their elements will generate a syntax error."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," C_COLLECTION($colVar) //creation of collection type 4D variable\n $colVar:=New collection //initialization of the collection and assignment to the 4D variable\n")),(0,r.kt)("h3",{id:"regular-or-shared-collection"},"Regular or shared collection"),(0,r.kt)("p",null,"You can create two types of collections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"regular (non-shared) collections, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"New collection")," command. These collections can be edited without any specific access control but cannot be shared between processes."),(0,r.kt)("li",{parentName:"ul"},"shared collections, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"New shared collection")," command. These collections can be shared between processes, including preemptive threads. Access to these collections is controlled by ",(0,r.kt)("inlineCode",{parentName:"li"},"Use...End use")," structures.\nFor more information, refer to the ",(0,r.kt)("a",{parentName:"li",href:"/main/pt/docs/18/Concepts/shared"},"Shared objects and collections")," section.")),(0,r.kt)("h2",{id:"collection-methods"},"Collection methods"),(0,r.kt)("p",null,"4D collection references benefit from special methods (sometimes named ",(0,r.kt)("em",{parentName:"p"},"member functions"),"). Thanks to object notation, these methods can be applied to collection references using the following syntax:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"{$result:=}myCollection.memberFunction( {params} )")),(0,r.kt)("p",null,"Note that, even if it does not have parameters, a member function must be called with () parenthesis, otherwise a syntax error is generated."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"$newCol:=$col.copy() //deep copy of $col to $newCol\n$col.push(10;100) //add 10 and 100 to the collection\n")),(0,r.kt)("p",null,"Some methods return the original collection after modification, so that you can run the calls in a sequence:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n")),(0,r.kt)("h3",{id:"propertypath-parameter"},"propertyPath parameter"),(0,r.kt)("p",null,"Several methods accept a ",(0,r.kt)("em",{parentName:"p"},"propertyPath")," as parameter. This parameter stands for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'either an object property name, for example "lastName"'),(0,r.kt)("li",{parentName:"ul"},'or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName".')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:"),' When using methods and propertyPath parameters, you cannot use ".", "',"[ ]",'", or spaces in property names since it will prevent 4D from correctly parsing the path:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' $vmin:=$col.min("My.special.property") //undefined\n $vmin:=$col.min(["My.special.property"]) //error\n')))}d.isMDXComponent=!0}}]);