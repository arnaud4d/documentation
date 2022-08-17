"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33442],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=o(a),m=r,N=k["".concat(d,".").concat(m)]||k[m]||u[m]||l;return a?n.createElement(N,i(i({ref:e},s),{},{components:a})):n.createElement(N,i({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},65152:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>y,frontMatter:()=>k,metadata:()=>N,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&s(t,a,e[a]);if(p)for(var a of p(e))o.call(e,a)&&s(t,a,e[a]);return t};const k={id:"DataClassAttributeClass",title:"DataClassAttribute"},m=void 0,N={unversionedId:"API/DataClassAttributeClass",id:"version-19-R6/API/DataClassAttributeClass",title:"DataClassAttribute",description:"Dataclass attributes are available as properties of their respective classes. For example:",source:"@site/versioned_docs/version-19-R6/API/DataClassAttributeClass.md",sourceDirName:"API",slug:"/API/DataClassAttributeClass",permalink:"/docs/ja/API/DataClassAttributeClass",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"DataClassAttributeClass",title:"DataClassAttribute"},sidebar:"docs",previous:{title:"DataClass",permalink:"/docs/ja/API/DataClassClass"},next:{title:"DataStore",permalink:"/docs/ja/API/DataStoreClass"}},c={},b=[{value:"Summary",id:"summary",level:3},{value:".autoFilled",id:"autofilled",level:2},{value:"Description",id:"description",level:4},{value:".exposed",id:"exposed",level:2},{value:"Description",id:"description-1",level:4},{value:"See also",id:"see-also",level:4},{value:".fieldNumber",id:"fieldnumber",level:2},{value:"Description",id:"description-2",level:4},{value:".fieldType",id:"fieldtype",level:2},{value:"Description",id:"description-3",level:4},{value:"See also",id:"see-also-1",level:4},{value:".indexed",id:"indexed",level:2},{value:"Description",id:"description-4",level:4},{value:".inverseName",id:"inversename",level:2},{value:"Description",id:"description-5",level:4},{value:".keywordIndexed",id:"keywordindexed",level:2},{value:"Description",id:"description-6",level:4},{value:".kind",id:"kind",level:2},{value:"Description",id:"description-7",level:4},{value:"Example",id:"example",level:4},{value:".mandatory",id:"mandatory",level:2},{value:"Description",id:"description-8",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-9",level:4},{value:"Example",id:"example-1",level:4},{value:".path",id:"path",level:2},{value:"Description",id:"description-10",level:4},{value:"Example",id:"example-2",level:4},{value:".readOnly",id:"readonly",level:2},{value:"Description",id:"description-11",level:4},{value:".relatedDataClass",id:"relateddataclass",level:2},{value:"Description",id:"description-12",level:4},{value:"Example",id:"example-3",level:4},{value:".type",id:"type",level:2},{value:"Description",id:"description-13",level:4},{value:"See also",id:"see-also-2",level:4},{value:".unique",id:"unique",level:2},{value:"Description",id:"description-14",level:4}],h={toc:b};function y(t){var e,r=t,{components:s}=r,k=((t,e)=>{var a={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&o.call(t,n)&&(a[n]=t[n]);return a})(r,["components"]);return(0,n.kt)("wrapper",(e=u(u({},h),k),l(e,i({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Dataclass attributes are available as properties of their respective classes. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-4d"}),' nameAttribute:=ds.Company.name //reference to class attribute\n revenuesAttribute:=ds.Company["revenues"] //alternate way\n')),(0,n.kt)("p",null,"This code assigns to ",(0,n.kt)("em",{parentName:"p"},"nameAttribute")," and ",(0,n.kt)("em",{parentName:"p"},"revenuesAttribute")," references to the name and revenues attributes of the Company class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/ja/API/EntityClass"}),(0,n.kt)("strong",{parentName:"a"},"Entities")),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DataClassAttribute")," objects have properties that you can read to get information about your dataclass attributes."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Dataclass attribute objects can be modified, but the underlying database structure will not be altered.")),(0,n.kt)("h3",u({},{id:"summary"}),"Summary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#autofilled"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#exposed"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#fieldnumber"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#fieldtype"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#indexed"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#inversename"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#keywordindexed"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#kind"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#mandatory"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#name"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#path"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#readonly"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#relateddataclass"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#type"})),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"#unique"})),"\xa0","\xa0","\xa0","\xa0")))),(0,n.kt)("h2",u({},{id:"autofilled"}),".autoFilled"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".autoFilled")," : Boolean"),(0,n.kt)("h4",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".autoFilled")," property ","contains True if the attribute value is automatically filled by 4D",". This property corresponds to the following 4D field properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"Autoincrement", for numeric type fields'),(0,n.kt)("li",{parentName:"ul"},'"Auto UUID", for UUID (alpha type) fields.')),(0,n.kt)("p",null,"This property is not returned if ",(0,n.kt)("inlineCode",{parentName:"p"},".kind"),' = "relatedEntity" or "relatedEntities".'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,n.kt)("strong",{parentName:"p"},"Bool"),"(dataClassAttribute.autoFilled) to get a valid value (false) even if ",(0,n.kt)("inlineCode",{parentName:"p"},".autoFilled")," is not returned.")),(0,n.kt)("h2",u({},{id:"exposed"}),".exposed"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v19 R3"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".exposed")," : Boolean"),(0,n.kt)("h4",u({},{id:"description-1"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".exposed")," property is ","true if the attribute is exposed in REST","."),(0,n.kt)("h4",u({},{id:"see-also"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/docs/ja/API/DataClassClass#getinfo"}),"DataClass.getInfo()")),(0,n.kt)("h2",u({},{id:"fieldnumber"}),".fieldNumber"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".fieldNumber")," : Integer"),(0,n.kt)("h4",u({},{id:"description-2"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".fieldNumber")," property ","contains the internal 4D field number of the attribute","."),(0,n.kt)("p",null,"This property is not returned if ",(0,n.kt)("inlineCode",{parentName:"p"},".kind"),' = "relatedEntity" or "relatedEntities".'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,n.kt)("strong",{parentName:"p"},"Num"),"(dataClassAttribute.fieldNumber) to get a valid value (0) even if ",(0,n.kt)("inlineCode",{parentName:"p"},".fieldNumber")," is not returned.")),(0,n.kt)("h2",u({},{id:"fieldtype"}),".fieldType"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v19 R4"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Support of alias attributes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v19 R3"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Support of computed attributes"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".fieldType")," : Integer"),(0,n.kt)("h4",u({},{id:"description-3"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".fieldType")," property ","contains the 4D database type of the attribute",". It depends on the attribute kind (see ",(0,n.kt)("a",u({parentName:"p"},{href:"#kind"}),(0,n.kt)("inlineCode",{parentName:"a"},".kind")),")."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Possible values:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"dataClassAttribute.kind"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"fieldType"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"storage"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Corresponding 4D field type, see ",(0,n.kt)("a",u({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page1509.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Value type")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"relatedEntity"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"38 (",(0,n.kt)("inlineCode",{parentName:"td"},"Is object"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"relatedEntities"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"42 (",(0,n.kt)("inlineCode",{parentName:"td"},"Is collection"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"calculated"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("li",null,"scalar: corresponding 4D field type, see ",(0,n.kt)("a",u({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page1509.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Value type"))),(0,n.kt)("li",null,"entity: 38 (",(0,n.kt)("inlineCode",{parentName:"td"},"Is object"),")"),(0,n.kt)("li",null,"entity selection: 42 (",(0,n.kt)("inlineCode",{parentName:"td"},"Is collection)")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"alias"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("li",null,"scalar: corresponding 4D field type, see ",(0,n.kt)("a",u({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page1509.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Value type"))),(0,n.kt)("li",null,"entity: 38 (",(0,n.kt)("inlineCode",{parentName:"td"},"Is object"),")"),(0,n.kt)("li",null,"entity selection: 42 (",(0,n.kt)("inlineCode",{parentName:"td"},"Is collection)")))))),(0,n.kt)("h4",u({},{id:"see-also-1"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"#type"}),".type")),(0,n.kt)("h2",u({},{id:"indexed"}),".indexed"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".indexed")," : Boolean"),(0,n.kt)("h4",u({},{id:"description-4"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".indexed")," property ","contains ",(0,n.kt)("strong",{parentName:"p"},"True")," if there is a B-tree or a Cluster B-tree index on the attribute",".  "),(0,n.kt)("p",null,"This property is not returned if ",(0,n.kt)("inlineCode",{parentName:"p"},".kind"),' = "relatedEntity" or "relatedEntities".'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,n.kt)("strong",{parentName:"p"},"Bool"),"(dataClassAttribute.indexed) to get a valid value (false) even if ",(0,n.kt)("inlineCode",{parentName:"p"},".indexed")," is not returned.")),(0,n.kt)("h2",u({},{id:"inversename"}),".inverseName"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".inverseName")," : Text"),(0,n.kt)("h4",u({},{id:"description-5"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".inverseName")," property ","returns the name of the attribute which is at the other side of the relation",".  "),(0,n.kt)("p",null,"This property is not returned if ",(0,n.kt)("inlineCode",{parentName:"p"},".kind"),' = "storage". It must be of the "relatedEntity" or "relatedEntities" kind.'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,n.kt)("strong",{parentName:"p"},"String"),'(dataClassAttribute.inverseName) to get a valid value ("") even if ',(0,n.kt)("inlineCode",{parentName:"p"},".inverseName")," is not returned.  ")),(0,n.kt)("h2",u({},{id:"keywordindexed"}),".keywordIndexed"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".keywordIndexed")," : Boolean"),(0,n.kt)("h4",u({},{id:"description-6"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".keywordIndexed")," property ","contains ",(0,n.kt)("strong",{parentName:"p"},"True")," if there is a keyword index on the attribute",".  "),(0,n.kt)("p",null,"This property is not returned if ",(0,n.kt)("a",u({parentName:"p"},{href:"#kind"}),(0,n.kt)("inlineCode",{parentName:"a"},".kind")),' = "relatedEntity" or "relatedEntities".'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,n.kt)("strong",{parentName:"p"},"Bool"),"(dataClassAttribute.keywordIndexed) to get a valid value (false) even if ",(0,n.kt)("inlineCode",{parentName:"p"},".keywordIndexed")," is not returned.")),(0,n.kt)("h2",u({},{id:"kind"}),".kind"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v19 R4"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'Added "alias"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v19 R3"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'Added "calculated"'))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".kind")," : Text"),(0,n.kt)("h4",u({},{id:"description-7"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".kind")," property ","returns the category of the attribute",". Returned value can be one of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"storage": storage (or scalar) attribute, i.e. attribute storing a value, not a reference to another attribute'),(0,n.kt)("li",{parentName:"ul"},'"calculated": computed attribute, i.e. defined through a ',(0,n.kt)("a",u({parentName:"li"},{href:"/docs/ja/ORDA/ordaClasses#function-get-attributename"}),(0,n.kt)("inlineCode",{parentName:"a"},"get")," function")),(0,n.kt)("li",{parentName:"ul"},'"alias": attribute built upon ',(0,n.kt)("a",u({parentName:"li"},{href:"/docs/ja/ORDA/ordaClasses#alias-attributes-1"}),"another attribute")),(0,n.kt)("li",{parentName:"ul"},'"relatedEntity": N -> 1 relation attribute (reference to an entity)'),(0,n.kt)("li",{parentName:"ul"},'"relatedEntities": 1 -> N relation attribute (reference to an entity selection)')),(0,n.kt)("h4",u({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Given the following table and relation:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(34764).Z,width:"468",height:"449"})),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-4d"}),' var $attKind : Text\n $attKind:=ds.Employee.lastname.kind //$attKind="storage"\n $attKind:=ds.Employee.manager.kind //$attKind="relatedEntity"\n $attKind:=ds.Employee.directReports.kind //$attKind="relatedEntities"\n')),(0,n.kt)("h2",u({},{id:"mandatory"}),".mandatory"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".mandatory")," : Boolean"),(0,n.kt)("h4",u({},{id:"description-8"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".mandatory")," property ","contains True if Null value input is rejected for the attribute","."),(0,n.kt)("p",null,"This property is not returned if ",(0,n.kt)("a",u({parentName:"p"},{href:"#kind"}),(0,n.kt)("inlineCode",{parentName:"a"},".kind")),' = "relatedEntity" or "relatedEntities".'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,n.kt)("strong",{parentName:"p"},"Bool"),"(dataClassAttribute.mandatory) to get a valid value (false) even if ",(0,n.kt)("inlineCode",{parentName:"p"},".mandatory")," is not returned.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning"),': This property corresponds to the "Reject NULL value input" field property at the 4D database level. It is unrelated to the existing "Mandatory" property which is a data entry control option for a table.')),(0,n.kt)("h2",u({},{id:"name"}),".name"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".name")," : Text"),(0,n.kt)("h4",u({},{id:"description-9"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".name")," property ","returns the name of the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataClassAttribute")," object as string","."),(0,n.kt)("h4",u({},{id:"example-1"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-4d"}),' var $attName : Text\n $attName:=ds.Employee.lastname.name //$attName="lastname"\n')),(0,n.kt)("h2",u({},{id:"path"}),".path"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v19 R4"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".path")," : Text"),(0,n.kt)("h4",u({},{id:"description-10"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".path")," property ","returns the path of an alias attribute based upon a relation","."),(0,n.kt)("h4",u({},{id:"example-2"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-4d"}),' var $path : Text\n $path:=ds.Teacher.students.path //$path="courses.student"\n')),(0,n.kt)("h2",u({},{id:"readonly"}),".readOnly"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v19 R3"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".readOnly")," : Boolean"),(0,n.kt)("h4",u({},{id:"description-11"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".readOnly")," property is ","true if the attribute is read-only","."),(0,n.kt)("p",null,"For example, computed attributes without ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/ja/ORDA/ordaClasses#function-set-attributename"}),(0,n.kt)("inlineCode",{parentName:"a"},"set")," function")," are read-only."),(0,n.kt)("h2",u({},{id:"relateddataclass"}),".relatedDataClass"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".relatedDataClass")," : Text"),(0,n.kt)("h4",u({},{id:"description-12"}),"Description"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'This property is only available with attributes of the "relatedEntity" or "relatedEntities" ',(0,n.kt)("a",u({parentName:"p"},{href:"#kind"}),(0,n.kt)("inlineCode",{parentName:"a"},".kind"))," property.")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".relatedDataClass")," property ","returns the name of the dataclass related to the attribute","."),(0,n.kt)("h4",u({},{id:"example-3"}),"Example"),(0,n.kt)("p",null,"Given the following tables and relations:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(39012).Z,width:"1000",height:"610"})),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-4d"}),' var $relClass1; $relClassN : Text\n $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"\n $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"\n')),(0,n.kt)("h2",u({},{id:"type"}),".type"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v19 R3"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Support of computed attributes"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".type")," : Text"),(0,n.kt)("h4",u({},{id:"description-13"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".type")," property ","contains the conceptual value type of the attribute",", useful for generic programming."),(0,n.kt)("p",null,"The conceptual value type depends on the attribute ",(0,n.kt)("a",u({parentName:"p"},{href:"#kind"}),(0,n.kt)("inlineCode",{parentName:"a"},".kind")),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Possible values:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"dataClassAttribute.kind"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"storage"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'"blob", "bool", "date", "image", "number", "object", or "string"'),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'"number" is returned for any numeric types including duration. "string" is returned for uuid, alpha and text field types. "blob" attributes are ',(0,n.kt)("a",u({parentName:"td"},{href:"/docs/ja/Concepts/blob#blob-type"}),"blob objects"),", they are handled using the ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/ja/API/BlobClass"}),"Blob class"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"relatedEntity"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"related dataClass name"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'Ex: "Companies"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"relatedEntities"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'related dataClass name + "Selection" suffix'),(0,n.kt)("td",u({parentName:"tr"},{align:null}),'Ex: "EmployeeSelection"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"calculated"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("li",null,'storage: type ("blob", "number", etc.)'),(0,n.kt)("li",null,"entity: dataClass name"),(0,n.kt)("li",null,'entity selection: dataClass name + "Selection"')),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"see-also-2"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"#fieldtype"}),(0,n.kt)("inlineCode",{parentName:"a"},".fieldType"))),(0,n.kt)("h2",u({},{id:"unique"}),".unique"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".unique")," : Boolean"),(0,n.kt)("h4",u({},{id:"description-14"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".unique")," property ","contains True if the attribute value must be unique",'. This property corresponds to the "Unique" 4D field property.'),(0,n.kt)("p",null,"This property is not returned if ",(0,n.kt)("a",u({parentName:"p"},{href:"#kind"}),(0,n.kt)("inlineCode",{parentName:"a"},".kind")),' = "relatedEntity" or "relatedEntities".'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For generic programming, you can use ",(0,n.kt)("strong",{parentName:"p"},"Bool"),"(dataClassAttribute.unique) to get a valid value (false) even if ",(0,n.kt)("inlineCode",{parentName:"p"},".unique")," is not returned.")))}y.isMDXComponent=!0},34764:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/dataclassAttribute3-9c93cae67ab1513ce692ac20af1f69d7.png"},39012:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/dataclassAttribute4-96c4a541a87b02eee83316636b0ae059.png"}}]);