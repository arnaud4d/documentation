"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41917],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33968:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>c,default:()=>f,frontMatter:()=>m,metadata:()=>k,toc:()=>g});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))i.call(e,n)&&s(t,n,e[n]);if(p)for(var n of p(e))u.call(e,n)&&s(t,n,e[n]);return t};const m={id:"boolean",title:"Boolean"},c=void 0,k={unversionedId:"Concepts/boolean",id:"version-19-R6/Concepts/boolean",title:"Boolean",description:"A boolean field, variable or expression can be either TRUE or FALSE.",source:"@site/versioned_docs/version-19-R6/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/Concepts/boolean",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"boolean",title:"Boolean"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/Concepts/blob"},next:{title:"Collection",permalink:"/docs/Concepts/collection"}},N={},g=[{value:"Boolean functions",id:"boolean-functions",level:2},{value:"Example",id:"example",level:3},{value:"Logical operators",id:"logical-operators",level:2}],b={toc:g};function f(t){var e,n=t,{components:r}=n,s=((t,e)=>{var n={};for(var a in t)i.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=d(d({},b),s),l(e,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A boolean field, variable or expression can be either TRUE or FALSE."),(0,a.kt)("h2",d({},{id:"boolean-functions"}),"Boolean functions"),(0,a.kt)("p",null,"4D provides the Boolean functions ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"False"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Not")," in the dedicated ",(0,a.kt)("strong",{parentName:"p"},"Boolean")," theme. For more information, see the descriptions of these commands."),(0,a.kt)("h3",d({},{id:"example"}),"Example"),(0,a.kt)("p",null,"This example sets a Boolean variable based on the value of a button. It returns True in myBoolean if the myButton button was clicked and False if the button was not clicked. When a button is clicked, the button variable is set to 1."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-4d"})," If(myButton=1) //If the button was clicked\n    myBoolean:=True //myBoolean is set to True\n Else //If the button was not clicked,\n    myBoolean:=False //myBoolean is set to False\n End if\n")),(0,a.kt)("p",null,"The previous example can be simplified into one line."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-4d"}),"myBoolean:=(myButton=1)\n")),(0,a.kt)("h2",d({},{id:"logical-operators"}),"Logical operators"),(0,a.kt)("p",null,"4D supports two logical operators that work on Boolean expressions: conjunction (AND) and inclusive disjunction (OR). A logical AND returns TRUE if both expressions are TRUE. A logical OR returns TRUE if at least one of the expressions is TRUE. The following table shows the logical operators:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Operation"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Syntax"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Returns"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AND"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Boolean & Boolean"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),'("A" = "A") & (15 # 3)'),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),'("A" = "B") & (15 # 3)'),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),'("A" = "B") & (15 = 3)'),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"OR"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Boolean  ","|"," Boolean"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),'("A" = "A") ',"|"," (15 # 3)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 # 3)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 = 3)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,"The following is the truth table for the AND logical operator:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Expr1"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Expr2"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Expr1 & Expr2"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,"The following is the truth table for the OR logical operator:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Expr1"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Expr2"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Expr1 ","|"," Expr2"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tip:")," If you need to calculate the exclusive disjunction between Expr1 and Expr2, evaluate:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-4d"})," (Expr1|Expr2) & Not(Expr1 & Expr2)  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In boolean contexts, the 4D language also supports ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/Concepts/operators#short-circuit-operators"}),"short-circuit operators")," (",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"||"),") and the ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/Concepts/operators#truthy-and-falsy"}),"truthy and falsy")," concept.")))}f.isMDXComponent=!0}}]);