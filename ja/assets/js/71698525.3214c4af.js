"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11009],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return a?r.createElement(f,o(o({ref:t},m),{},{components:a})):r.createElement(f,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},52241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"filter",title:"$filter"},p=void 0,s={unversionedId:"REST/filter",id:"version-19-R6/REST/filter",title:"$filter",description:"Allows to query the data in a dataclass or method (e.g., $filter=\"firstName!='' AND salary>30000\")",source:"@site/versioned_docs/version-19-R6/REST/$filter.md",sourceDirName:"REST",slug:"/REST/filter",permalink:"/docs/ja/docs/REST/filter",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"filter",title:"$filter"},sidebar:"docs",previous:{title:"$expand",permalink:"/docs/ja/docs/REST/expand"},next:{title:"$imageformat",permalink:"/docs/ja/docs/REST/imageformat"}},m={},u=[{value:"Description",id:"description",level:2},{value:"Using a simple filter",id:"using-a-simple-filter",level:3},{value:"Using a complex filter",id:"using-a-complex-filter",level:3},{value:"Using the params property",id:"using-the-params-property",level:3},{value:"Attribute",id:"attribute",level:2},{value:"Comparator",id:"comparator",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Allows to query the data in a dataclass or method ",(0,l.kt)("em",{parentName:"p"},"(e.g."),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$filter=\"firstName!='' AND salary>30000\""),")"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"This parameter allows you to define the filter for your dataclass or method."),(0,l.kt)("h3",{id:"using-a-simple-filter"},"Using a simple filter"),(0,l.kt)("p",null,"A filter is composed of the following elements:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"{attribute} {comparator} {value}")),(0,l.kt)("p",null,"For example: ",(0,l.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john"')," where ",(0,l.kt)("inlineCode",{parentName:"p"},"firstName")," is the ",(0,l.kt)("strong",{parentName:"p"},"attribute"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"=")," is the ",(0,l.kt)("strong",{parentName:"p"},"comparator")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"john")," is the ",(0,l.kt)("strong",{parentName:"p"},"value"),"."),(0,l.kt)("h3",{id:"using-a-complex-filter"},"Using a complex filter"),(0,l.kt)("p",null,"A more compex filter is composed of the following elements, which joins two queries:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}")),(0,l.kt)("p",null,"For example: ",(0,l.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john AND salary>20000"')," where ",(0,l.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"salary")," are attributes in the Employee dataclass."),(0,l.kt)("h3",{id:"using-the-params-property"},"Using the params property"),(0,l.kt)("p",null,"You can also use 4D's params property."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='",'["{value1}","{value2}"]',"\"'")),(0,l.kt)("p",null,"For example: ",(0,l.kt)("inlineCode",{parentName:"p"},'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\'')," where firstName and salary are attributes in the Employee dataclass."),(0,l.kt)("p",null,"For more information regarding how to query data in 4D, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html"},"dataClass.query()")," documentation."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When inserting quotes (') or double quotes (\"), you must escape them using using their character code:"),(0,l.kt)("li",null,"Quotes ('): \\u0027"),(0,l.kt)("li",null,'Double quotes ("): \\u0022'),(0,l.kt)("p",{parentName:"blockquote"},"For example, you can write the following when passing a value with a quote when using the ",(0,l.kt)("em",{parentName:"p"},"params")," property:",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\'')),(0,l.kt)("p",{parentName:"blockquote"},"If you pass the value directly, you can write the following:\n",(0,l.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'))),(0,l.kt)("h2",{id:"attribute"},"Attribute"),(0,l.kt)("p",null,"If the attribute is in the same dataclass, you can just pass it directly (",(0,l.kt)("em",{parentName:"p"},"e.g."),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),"). However, if you want to query another dataclass, you must include the relation attribute name plus the attribute name, i.e. the path (",(0,l.kt)("em",{parentName:"p"},"e.g."),", employer.name). The attribute name is case-sensitive (",(0,l.kt)("inlineCode",{parentName:"p"},"firstName")," is not equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"FirstName"),")."),(0,l.kt)("p",null,'You can also query attributes of type Object by using dot-notation. For example, if you have an attribute whose name is "objAttribute" with the following structure:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    prop1: "this is my first property",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n')),(0,l.kt)("p",null,"You can search in the object by writing the following:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?filter="objAttribute.prop2 == 9181"')),(0,l.kt)("h2",{id:"comparator"},"Comparator"),(0,l.kt)("p",null,"The comparator must be one of the following values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Comparator"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"="),(0,l.kt)("td",{parentName:"tr",align:null},"equals to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"!="),(0,l.kt)("td",{parentName:"tr",align:null},"not equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">"),(0,l.kt)("td",{parentName:"tr",align:null},"greater than")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">="),(0,l.kt)("td",{parentName:"tr",align:null},"greater than or equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<"),(0,l.kt)("td",{parentName:"tr",align:null},"less than")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<="),(0,l.kt)("td",{parentName:"tr",align:null},"less than or equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"begin"),(0,l.kt)("td",{parentName:"tr",align:null},"begins with")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,'In the following example, we look for all employees whose last name begins with a "j":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},' GET  /rest/Employee?$filter="lastName begin j"\n')),(0,l.kt)("p",null,"In this example, we search the Employee dataclass for all employees whose salary is greater than 20,000 and who do not work for a company named Acme:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n')),(0,l.kt)("p",null,"In this example, we search the Person dataclass for all the people whose number property in the anotherobj attribute of type Object is greater than 50:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n')))}d.isMDXComponent=!0}}]);