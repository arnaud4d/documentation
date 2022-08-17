"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},59955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={id:"filter",title:"$filter"},i=void 0,p={unversionedId:"REST/filter",id:"REST/filter",title:"$filter",description:"Allows to query the data in a dataclass or method (e.g., $filter=\"firstName!='' AND salary>30000\")",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/REST/$filter.md",sourceDirName:"REST",slug:"/REST/filter",permalink:"/docs/es/next/REST/filter",draft:!1,tags:[],version:"current",frontMatter:{id:"filter",title:"$filter"},sidebar:"docs",previous:{title:"$expand",permalink:"/docs/es/next/REST/expand"},next:{title:"$imageformat",permalink:"/docs/es/next/REST/imageformat"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Using a simple filter",id:"using-a-simple-filter",level:3},{value:"Using a complex filter",id:"using-a-complex-filter",level:3},{value:"Using the params property",id:"using-the-params-property",level:3},{value:"Attribute",id:"attribute",level:2},{value:"Comparator",id:"comparator",level:2},{value:"Examples",id:"examples",level:2}],m={toc:u};function c(e){var{components:t}=e,r=l(e,["components"]);return(0,a.kt)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Allows to query the data in a dataclass or method ",(0,a.kt)("em",{parentName:"p"},"(e.g."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$filter=\"firstName!='' AND salary>30000\""),")"),(0,a.kt)("h2",n({},{id:"description"}),"Description"),(0,a.kt)("p",null,"This parameter allows you to define the filter for your dataclass or method."),(0,a.kt)("h3",n({},{id:"using-a-simple-filter"}),"Using a simple filter"),(0,a.kt)("p",null,"A filter is composed of the following elements:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribute} {comparator} {value}")),(0,a.kt)("p",null,"For example: ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john"')," where ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," is the ",(0,a.kt)("strong",{parentName:"p"},"attribute"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," is the ",(0,a.kt)("strong",{parentName:"p"},"comparator")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"john")," is the ",(0,a.kt)("strong",{parentName:"p"},"value"),"."),(0,a.kt)("h3",n({},{id:"using-a-complex-filter"}),"Using a complex filter"),(0,a.kt)("p",null,"A more compex filter is composed of the following elements, which joins two queries:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}")),(0,a.kt)("p",null,"For example: ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john AND salary>20000"')," where ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"salary")," are attributes in the Employee dataclass."),(0,a.kt)("h3",n({},{id:"using-the-params-property"}),"Using the params property"),(0,a.kt)("p",null,"You can also use 4D's params property."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='",'["{value1}","{value2}"]',"\"'")),(0,a.kt)("p",null,"For example: ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\'')," where firstName and salary are attributes in the Employee dataclass."),(0,a.kt)("p",null,"For more information regarding how to query data in 4D, refer to the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html"}),"dataClass.query()")," documentation."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When inserting quotes (') or double quotes (\"), you must escape them using using their character code:"),(0,a.kt)("li",null,"Quotes ('): \\u0027"),(0,a.kt)("li",null,'Double quotes ("): \\u0022'),(0,a.kt)("p",{parentName:"blockquote"},"For example, you can write the following when passing a value with a quote when using the ",(0,a.kt)("em",{parentName:"p"},"params")," property:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\'')),(0,a.kt)("p",{parentName:"blockquote"},"If you pass the value directly, you can write the following: ",(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'))),(0,a.kt)("h2",n({},{id:"attribute"}),"Attribute"),(0,a.kt)("p",null,"If the attribute is in the same dataclass, you can just pass it directly (",(0,a.kt)("em",{parentName:"p"},"e.g."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName"),"). However, if you want to query another dataclass, you must include the relation attribute name plus the attribute name, i.e. the path (",(0,a.kt)("em",{parentName:"p"},"e.g."),", employer.name). The attribute name is case-sensitive (",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," is not equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"FirstName"),")."),(0,a.kt)("p",null,'You can also query attributes of type Object by using dot-notation. For example, if you have an attribute whose name is "objAttribute" with the following structure:'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),'{\n    prop1: "this is my first property",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n')),(0,a.kt)("p",null,"You can search in the object by writing the following:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?filter="objAttribute.prop2 == 9181"')),(0,a.kt)("h2",n({},{id:"comparator"}),"Comparator"),(0,a.kt)("p",null,"The comparator must be one of the following values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Comparator"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"equals to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"!="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"not equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),">"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"greater than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),">="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"greater than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"<"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"less than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"<="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"less than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"begin"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"begins with")))),(0,a.kt)("h2",n({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,'In the following example, we look for all employees whose last name begins with a "j":'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),' GET  /rest/Employee?$filter="lastName begin j"\n')),(0,a.kt)("p",null,"In this example, we search the Employee dataclass for all employees whose salary is greater than 20,000 and who do not work for a company named Acme:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n')),(0,a.kt)("p",null,"In this example, we search the Person dataclass for all the people whose number property in the anotherobj attribute of type Object is greater than 50:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n')))}c.isMDXComponent=!0}}]);