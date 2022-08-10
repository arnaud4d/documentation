"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50762],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=o(a),k=r,N=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(N,i(i({ref:e},s),{},{components:a})):n.createElement(N,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21473:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"DataClassAttributeClass",title:"DataClassAttribute"},d=void 0,o={unversionedId:"API/DataClassAttributeClass",id:"version-19/API/DataClassAttributeClass",title:"DataClassAttribute",description:"Dataclass attributes are available as properties of their respective classes. For example:",source:"@site/versioned_docs/version-19/API/DataClassAttributeClass.md",sourceDirName:"API",slug:"/API/DataClassAttributeClass",permalink:"/main/pt/docs/19/API/DataClassAttributeClass",draft:!1,tags:[],version:"19",frontMatter:{id:"DataClassAttributeClass",title:"DataClassAttribute"},sidebar:"docs",previous:{title:"DataClass",permalink:"/main/pt/docs/19/API/DataClassClass"},next:{title:"DataStore",permalink:"/main/pt/docs/19/API/DataStoreClass"}},s={},u=[{value:"Summary",id:"summary",level:3},{value:".autoFilled",id:"autofilled",level:2},{value:"Description",id:"description",level:4},{value:".fieldNumber",id:"fieldnumber",level:2},{value:"Description",id:"description-1",level:4},{value:".fieldType",id:"fieldtype",level:2},{value:"Description",id:"description-2",level:4},{value:".indexed",id:"indexed",level:2},{value:"Description",id:"description-3",level:4},{value:".inverseName",id:"inversename",level:2},{value:"Description",id:"description-4",level:4},{value:".keywordIndexed",id:"keywordindexed",level:2},{value:"Description",id:"description-5",level:4},{value:".kind",id:"kind",level:2},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example",level:4},{value:".mandatory",id:"mandatory",level:2},{value:"Description",id:"description-7",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-8",level:4},{value:"Example",id:"example-1",level:4},{value:".relatedDataClass",id:"relateddataclass",level:2},{value:"Description",id:"description-9",level:4},{value:"Example",id:"example-2",level:4},{value:".type",id:"type",level:2},{value:"Description",id:"description-10",level:4},{value:".unique",id:"unique",level:2},{value:"Description",id:"description-11",level:4}],m={toc:u};function k(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Dataclass attributes are available as properties of their respective classes. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' nameAttribute:=ds.Company.name //reference to class attribute\n revenuesAttribute:=ds.Company["revenues"] //alternate way\n')),(0,l.kt)("p",null,"This code assigns to ",(0,l.kt)("em",{parentName:"p"},"nameAttribute")," and ",(0,l.kt)("em",{parentName:"p"},"revenuesAttribute")," references to the name and revenues attributes of the Company class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through ",(0,l.kt)("a",{parentName:"p",href:"/main/pt/docs/19/API/EntityClass"},(0,l.kt)("strong",{parentName:"a"},"Entities")),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DataClassAttribute")," objects have properties that you can read to get information about your dataclass attributes."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Dataclass attribute objects can be modified, but the underlying database structure will not be altered.")),(0,l.kt)("h3",{id:"summary"},"Summary"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#autofilled"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#fieldnumber"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#fieldtype"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#indexed"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#inversename"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#keywordindexed"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#kind"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mandatory"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#name"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#relateddataclass"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#type"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#unique"}),"\xa0","\xa0","\xa0","\xa0")))),(0,l.kt)("h2",{id:"autofilled"},".autoFilled"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".autoFilled")," : Boolean"),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".autoFilled")," property ","contains True if the attribute value is automatically filled by 4D",". This property corresponds to the following 4D field properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"Autoincrement", for numeric type fields'),(0,l.kt)("li",{parentName:"ul"},'"Auto UUID", for UUID (alpha type) fields.')),(0,l.kt)("p",null,"This property is not returned if ",(0,l.kt)("inlineCode",{parentName:"p"},".kind"),' = "relatedEntity" or "relatedEntities".'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,l.kt)("strong",{parentName:"p"},"Bool"),"(dataClassAttribute.autoFilled) to get a valid value (false) even if ",(0,l.kt)("inlineCode",{parentName:"p"},".autoFilled")," is not returned.")),(0,l.kt)("h2",{id:"fieldnumber"},".fieldNumber"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".fieldNumber")," : Integer"),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".fieldNumber")," property ","contains the internal 4D field number of the attribute","."),(0,l.kt)("p",null,"This property is not returned if ",(0,l.kt)("inlineCode",{parentName:"p"},".kind"),' = "relatedEntity" or "relatedEntities".'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,l.kt)("strong",{parentName:"p"},"Num"),"(dataClassAttribute.fieldNumber) to get a valid value (0) even if ",(0,l.kt)("inlineCode",{parentName:"p"},".fieldNumber")," is not returned.")),(0,l.kt)("h2",{id:"fieldtype"},".fieldType"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".fieldType")," : Integer"),(0,l.kt)("h4",{id:"description-2"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".fieldType")," property ","contains the 4D database type of the attribute",". It depends on the attribute kind (see ",(0,l.kt)("a",{parentName:"p",href:"#kind"},(0,l.kt)("inlineCode",{parentName:"a"},".kind")),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"dataClassAttribute.kind"),(0,l.kt)("th",{parentName:"tr",align:null},"fieldType"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Corresponding 4D field type"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("inlineCode",{parentName:"td"},"Type")," command")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedEntity"),(0,l.kt)("td",{parentName:"tr",align:null},"38 (Is object)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedEntities"),(0,l.kt)("td",{parentName:"tr",align:null},"42 (Is collection)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"indexed"},".indexed"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".indexed")," : Boolean"),(0,l.kt)("h4",{id:"description-3"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".indexed")," property ","contains ",(0,l.kt)("strong",{parentName:"p"},"True")," if there is a B-tree or a Cluster B-tree index on the attribute",".  "),(0,l.kt)("p",null,"This property is not returned if ",(0,l.kt)("inlineCode",{parentName:"p"},".kind"),' = "relatedEntity" or "relatedEntities".'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,l.kt)("strong",{parentName:"p"},"Bool"),"(dataClassAttribute.indexed) to get a valid value (false) even if ",(0,l.kt)("inlineCode",{parentName:"p"},".indexed")," is not returned.")),(0,l.kt)("h2",{id:"inversename"},".inverseName"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".inverseName")," : Text"),(0,l.kt)("h4",{id:"description-4"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".inverseName")," property ","returns the name of the attribute which is at the other side of the relation",".  "),(0,l.kt)("p",null,"This property is not returned if ",(0,l.kt)("inlineCode",{parentName:"p"},".kind"),' = "storage". It must be of the "relatedEntity" or "relatedEntities" kind.'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,l.kt)("strong",{parentName:"p"},"String"),'(dataClassAttribute.inverseName) to get a valid value ("") even if ',(0,l.kt)("inlineCode",{parentName:"p"},".inverseName")," is not returned.  ")),(0,l.kt)("h2",{id:"keywordindexed"},".keywordIndexed"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".keywordIndexed")," : Boolean"),(0,l.kt)("h4",{id:"description-5"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".keywordIndexed")," property ","contains ",(0,l.kt)("strong",{parentName:"p"},"True")," if there is a keyword index on the attribute",".  "),(0,l.kt)("p",null,"This property is not returned if ",(0,l.kt)("a",{parentName:"p",href:"#kind"},(0,l.kt)("inlineCode",{parentName:"a"},".kind")),' = "relatedEntity" or "relatedEntities".'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,l.kt)("strong",{parentName:"p"},"Bool"),"(dataClassAttribute.keywordIndexed) to get a valid value (false) even if ",(0,l.kt)("inlineCode",{parentName:"p"},".keywordIndexed")," is not returned.")),(0,l.kt)("h2",{id:"kind"},".kind"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".kind")," : Text"),(0,l.kt)("h4",{id:"description-6"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".kind")," property ","returns the category of the attribute",". Returned value can be one of the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"storage": storage (or scalar) attribute, i.e. attribute storing a value, not a reference to another attribute'),(0,l.kt)("li",{parentName:"ul"},'"relatedEntity": N -> 1 relation attribute (reference to an entity)'),(0,l.kt)("li",{parentName:"ul"},'"relatedEntities": 1 -> N relation attribute (reference to an entity selection)')),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("p",null,"Given the following table and relation:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(35194).Z,width:"468",height:"449"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' var $attKind : Text\n $attKind:=ds.Employee.lastname.kind //$attKind="storage"\n $attKind:=ds.Employee.manager.kind //$attKind="relatedEntity"\n $attKind:=ds.Employee.directReports.kind //$attKind="relatedEntities"\n')),(0,l.kt)("h2",{id:"mandatory"},".mandatory"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".mandatory")," : Boolean"),(0,l.kt)("h4",{id:"description-7"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".mandatory")," property ","contains True if Null value input is rejected for the attribute","."),(0,l.kt)("p",null,"This property is not returned if ",(0,l.kt)("a",{parentName:"p",href:"#kind"},(0,l.kt)("inlineCode",{parentName:"a"},".kind")),' = "relatedEntity" or "relatedEntities".'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,l.kt)("strong",{parentName:"p"},"Bool"),"(dataClassAttribute.mandatory) to get a valid value (false) even if ",(0,l.kt)("inlineCode",{parentName:"p"},".mandatory")," is not returned.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Warning"),': This property corresponds to the "Reject NULL value input" field property at the 4D database level. It is unrelated to the existing "Mandatory" property which is a data entry control option for a table.')),(0,l.kt)("h2",{id:"name"},".name"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".name")," : Text"),(0,l.kt)("h4",{id:"description-8"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".name")," property ","returns the name of the ",(0,l.kt)("inlineCode",{parentName:"p"},"dataClassAttribute")," object as string","."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' var $attName : Text\n $attName:=ds.Employee.lastname.name //$attName="lastname"\n')),(0,l.kt)("h2",{id:"relateddataclass"},".relatedDataClass"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".relatedDataClass")," : Text"),(0,l.kt)("h4",{id:"description-9"},"Description"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'This property is only available with attributes of the "relatedEntity" or "relatedEntities" ',(0,l.kt)("a",{parentName:"p",href:"#kind"},(0,l.kt)("inlineCode",{parentName:"a"},".kind"))," property.")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".relatedDataClass")," property ","returns the name of the dataclass related to the attribute","."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("p",null,"Given the following tables and relations:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(89710).Z,width:"1000",height:"610"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' var $relClass1; $relClassN : Text\n $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"\n $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"\n')),(0,l.kt)("h2",{id:"type"},".type"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".type")," : Text"),(0,l.kt)("h4",{id:"description-10"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".type")," property ","contains the conceptual value type of the attribute",", useful for generic programming."),(0,l.kt)("p",null,"The conceptual value type depends on the attribute ",(0,l.kt)("a",{parentName:"p",href:"#kind"},(0,l.kt)("inlineCode",{parentName:"a"},".kind")),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"dataClassAttribute.kind"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storage"),(0,l.kt)("td",{parentName:"tr",align:null},'"number", "date", "object", "bool", "image", or "string"'),(0,l.kt)("td",{parentName:"tr",align:null},'"number" is returned for any numeric types including duration. "string" is returned for uuid, alpha and text field types')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedEntity"),(0,l.kt)("td",{parentName:"tr",align:null},"related dataClass name"),(0,l.kt)("td",{parentName:"tr",align:null},'Ex: "Companies"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedEntities"),(0,l.kt)("td",{parentName:"tr",align:null},'related dataClass name + "Selection" suffix'),(0,l.kt)("td",{parentName:"tr",align:null},'Ex: "EmployeeSelection"')))),(0,l.kt)("h2",{id:"unique"},".unique"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R5"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".unique")," : Boolean"),(0,l.kt)("h4",{id:"description-11"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".unique")," property ","contains True if the attribute value must be unique",'. This property corresponds to the "Unique" 4D field property.'),(0,l.kt)("p",null,"This property is not returned if ",(0,l.kt)("a",{parentName:"p",href:"#kind"},(0,l.kt)("inlineCode",{parentName:"a"},".kind")),' = "relatedEntity" or "relatedEntities".'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,l.kt)("strong",{parentName:"p"},"Bool"),"(dataClassAttribute.unique) to get a valid value (false) even if ",(0,l.kt)("inlineCode",{parentName:"p"},".unique")," is not returned.")))}k.isMDXComponent=!0},35194:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/dataclassAttribute3-9c93cae67ab1513ce692ac20af1f69d7.png"},89710:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/dataclassAttribute4-96c4a541a87b02eee83316636b0ae059.png"}}]);