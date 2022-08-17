"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95441],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},20486:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"dsmapping",title:"Data Model Objects"},s=void 0,i={unversionedId:"ORDA/dsmapping",id:"version-19/ORDA/dsmapping",title:"Data Model Objects",description:"The ORDA technology is based upon an automatic mapping of an underlying 4D structure. It also provides access to data through entity and entity selection objects. As a result, ORDA exposes the whole database as a set of data model objects.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/ORDA/dsMapping.md",sourceDirName:"ORDA",slug:"/ORDA/dsmapping",permalink:"/docs/es/19/ORDA/dsmapping",draft:!1,tags:[],version:"19",frontMatter:{id:"dsmapping",title:"Data Model Objects"},sidebar:"docs",previous:{title:"What is ORDA?",permalink:"/docs/es/19/ORDA/overview"},next:{title:"Data Model Classes",permalink:"/docs/es/19/ORDA/ordaClasses"}},d={},p=[{value:"Structure mapping",id:"structure-mapping",level:2},{value:"General rules",id:"general-rules",level:3},{value:"Rules for remote access control",id:"rules-for-remote-access-control",level:3},{value:"Data model update",id:"data-model-update",level:3},{value:"Object definition",id:"object-definition",level:2},{value:"Datastore",id:"datastore",level:3},{value:"Dataclass",id:"dataclass",level:3},{value:"Attribute",id:"attribute",level:3},{value:"Storage and Relation attributes",id:"storage-and-relation-attributes",level:4},{value:"Entity",id:"entity",level:3},{value:"Entity selection",id:"entity-selection",level:3},{value:"Ordered or unordered entity selection",id:"ordered-or-unordered-entity-selection",level:4}],c={toc:p};function u(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)("wrapper",r({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ORDA technology is based upon an automatic mapping of an underlying 4D structure. It also provides access to data through entity and entity selection objects. As a result, ORDA exposes the whole database as a set of data model objects."),(0,n.kt)("h2",r({},{id:"structure-mapping"}),"Structure mapping"),(0,n.kt)("p",null,"When you call a datastore using the ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," or the ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," command, 4D automatically references tables and fields of the corresponding 4D structure as properties of the returned ",(0,n.kt)("a",r({parentName:"p"},{href:"#datastore"}),"datastore")," object:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tables are mapped to dataclasses."),(0,n.kt)("li",{parentName:"ul"},"Fields are mapped to storage attributes."),(0,n.kt)("li",{parentName:"ul"},"Relations are mapped to relation attributes - relation names, defined in the Structure editor, are used as relation attribute names.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(56260).Z,width:"961",height:"480"})),(0,n.kt)("h3",r({},{id:"general-rules"}),"General rules"),(0,n.kt)("p",null,"The following rules are applied for any conversions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Table, field, and relation names are mapped to object property names. Make sure that such names comply with general object naming rules, as explained in the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/19/Concepts/identifiers"}),"object naming conventions")," section."),(0,n.kt)("li",{parentName:"ul"},"A datastore only references tables with a single primary key. The following tables are not referenced:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Tables without a primary key"),(0,n.kt)("li",{parentName:"ul"},"Tables with composite primary keys."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/19/Concepts/blob"}),"BLOB")," type attributes are not managed in the datastore. BLOB type attributes are returned as Null in entities and cannot be assigned.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"ORDA mapping does not take into account:  "),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},'the "Invisible" option for tables or fields,'),(0,n.kt)("li",{parentName:"ul"},"the virtual structure defined through ",(0,n.kt)("inlineCode",{parentName:"li"},"SET TABLE TITLES")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"SET FIELD TITLES"),","),(0,n.kt)("li",{parentName:"ul"},'the "Manual" or "Automatic" property of relations.'))),(0,n.kt)("h3",r({},{id:"rules-for-remote-access-control"}),"Rules for remote access control"),(0,n.kt)("p",null,"When accessing a remote datastore through the ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," command or ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19/REST/gettingStarted"}),"REST requests"),", only tables and fields with the ",(0,n.kt)("strong",{parentName:"p"},"Expose as REST resource")," property are available remotely."),(0,n.kt)("p",null,"This option must be selected at the 4D structure level for each table and each field that you want to be exposed as dataclass and attribute in the datastore:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(76930).Z,width:"279",height:"362"})),(0,n.kt)("h3",r({},{id:"data-model-update"}),"Data model update"),(0,n.kt)("p",null,"Any modifications applied at the level of the database structure invalidate the current ORDA model layer. These modifications include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"adding or removing a table, a field, or a relation"),(0,n.kt)("li",{parentName:"ul"},"renaming of a table, a field, or a relation"),(0,n.kt)("li",{parentName:"ul"},"changing a core property of a field (type, unique, index, autoincrement, null value support)")),(0,n.kt)("p",null,"When the current ORDA model layer has been invalidated, it is automatically reloaded and updated in subsequent calls of the local ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," datastore on 4D and 4D Server. Note that existing references to ORDA objects such as entities or entity selections will continue to use the model from which they have been created, until they are regenerated."),(0,n.kt)("p",null,"However, the updated ORDA model layer is not automatically available in the following contexts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a remote 4D application connected to 4D Server -- the remote application must reconnect to the server."),(0,n.kt)("li",{parentName:"ul"},"a remote datastore opened using ",(0,n.kt)("inlineCode",{parentName:"li"},"Open datastore")," or through ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/19/REST/gettingStarted"}),"REST calls")," -- a new session must be opened.")),(0,n.kt)("h2",r({},{id:"object-definition"}),"Object definition"),(0,n.kt)("h3",r({},{id:"datastore"}),"Datastore"),(0,n.kt)("p",null,"The datastore is the interface object to a database. It builds a representation of the whole database as object. A datastore is made of a ",(0,n.kt)("strong",{parentName:"p"},"model")," and ",(0,n.kt)("strong",{parentName:"p"},"data"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The model contains and describes all the dataclasses that make up the datastore. It is independant from the underlying database itself."),(0,n.kt)("li",{parentName:"ul"},"Data refers to the information that is going to be used and stored in this model. For example, names, addresses, and birthdates of employees are pieces of data that you can work with in a datastore.")),(0,n.kt)("p",null,"When handled through the code, the datastore is an object whose properties are all of the ",(0,n.kt)("a",r({parentName:"p"},{href:"#dataclass"}),"dataclasses")," which have been specifically exposed."),(0,n.kt)("p",null,"4D allows you to handle the following datastores:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the local datastore, based on the current 4D database, returned by the ",(0,n.kt)("inlineCode",{parentName:"li"},"ds")," command (the main datastore)."),(0,n.kt)("li",{parentName:"ul"},"one or more remote datastore(s) exposed as REST resources in remote 4D databases, returned by the ",(0,n.kt)("inlineCode",{parentName:"li"},"Open datastore")," command.")),(0,n.kt)("p",null,"A datastore references only a single local or remote database."),(0,n.kt)("p",null,"The datastore object itself cannot be copied as an object:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$mydatastore:=OB Copy(ds) //returns null\n")),(0,n.kt)("p",null,"The datastore properties are however enumerable:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds;$prop)\n  //$prop contains the names of all the dataclasses\n")),(0,n.kt)("p",null,"The main (default) datastore is always available through the ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," command, but the ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," command allows referencing any remote datastore."),(0,n.kt)("h3",r({},{id:"dataclass"}),"Dataclass"),(0,n.kt)("p",null,"A dataclass is the equivalent of a table. It is used as an object model and references all fields as attributes, including relational attributes (attributes built upon relations between dataclasses). Relational attributes can be used in queries like any other attribute."),(0,n.kt)("p",null,"All dataclasses in a 4D project are available as a property of the ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," datastore. For remote datastores accessed through ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," or ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19/REST/gettingStarted"}),"REST requests"),", the ",(0,n.kt)("strong",{parentName:"p"},"Expose as REST resource")," option must be selected at the 4D structure level for each exposed table that you want to be exposed as dataclass in the datastore."),(0,n.kt)("p",null,"For example, consider the following table in the 4D structure:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(26492).Z,width:"137",height:"188"})),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Company")," table is automatically available as a dataclass in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," datastore. You can write:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $compClass : cs.Company //declares a $compClass object variable of the Company class\n$compClass:=ds.Company //assigns the Company dataclass reference to $compClass\n")),(0,n.kt)("p",null,"A dataclass object can contain:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"attributes"),(0,n.kt)("li",{parentName:"ul"},"relation attributes")),(0,n.kt)("p",null,"The dataclass offers an abstraction of the physical database and allows handling a conceptual data model. The dataclass is the only means to query the datastore. A query is done from a single dataclass. Queries are built around attributes and relation attribute names of the dataclasses. So the relation attributes are the means to involve several linked tables in a query."),(0,n.kt)("p",null,"The dataclass object itself cannot be copied as an object:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$mydataclass:=OB Copy(ds.Employee) //returns null\n")),(0,n.kt)("p",null,"The dataclass properties are however enumerable:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-code4d"}),"ARRAY TEXT($prop;0)\nOB GET PROPERTY NAMES(ds.Employee;$prop)\n//$prop contains the names of all the dataclasse attributes\n")),(0,n.kt)("h3",r({},{id:"attribute"}),"Attribute"),(0,n.kt)("p",null,"Dataclass properties are attribute objects describing the underlying fields or relations. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $nameAttribute:=ds.Company.name //reference to class attribute\n $revenuesAttribute:=ds.Company["revenues"] //alternate way\n')),(0,n.kt)("p",null,"This code assigns to ",(0,n.kt)("inlineCode",{parentName:"p"},"$nameAttribute")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"$revenuesAttribute")," references to the name and revenues attributes of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Company")," class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through ",(0,n.kt)("a",r({parentName:"p"},{href:"#entity"}),"Entities"),"."),(0,n.kt)("p",null,"All eligible fieds in a table are available as attributes of their parent ",(0,n.kt)("a",r({parentName:"p"},{href:"#dataclass"}),"dataclass"),". For remote datastores accessed through ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," or ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19/REST/gettingStarted"}),"REST requests"),", the ",(0,n.kt)("strong",{parentName:"p"},"Expose as REST resource")," option must be selected at the 4D structure level for each field that you want to be exposed as a dataclass attribute."),(0,n.kt)("h4",r({},{id:"storage-and-relation-attributes"}),"Storage and Relation attributes"),(0,n.kt)("p",null,"Dataclass attributes come in several kinds: storage, relatedEntity, and relatedEntities. Attributes that are scalar (",(0,n.kt)("em",{parentName:"p"},"i.e."),", provide only a single value) support the standard 4D data type (integer, text, object, etc.)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"storage attribute")," is equivalent to a field in the 4D database and can be indexed. Values assigned to a storage attribute are stored as part of the entity when it is saved. When a storage attribute is accessed, its value comes directly from the datastore. Storage attributes are the most basic building block of an entity and are defined by name and data type."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"relation attribute"),' provides access to other entities. Relation attributes can result in either a single entity (or no entity) or an entity selection (0 to N entities). Relation attributes are built upon "classic" relations in the relational structure to provide direct access to related entity or related entities. Relation attributes are directy available in ORDA using their names.')),(0,n.kt)("p",null,"For example, consider the following partial database structure and the relation properties:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(42202).Z,width:"690",height:"533"})),(0,n.kt)("p",null,"All storage attributes will be automatically available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'in the Project dataclass: "ID", "name", and "companyID"'),(0,n.kt)("li",{parentName:"ul"},'in the Company dataclass: "ID", "name", and "discount"')),(0,n.kt)("p",null,"In addition, the following relation attributes will also be automatically available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"in the Project dataclass: ",(0,n.kt)("strong",{parentName:"li"},"theClient"),' attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)'),(0,n.kt)("li",{parentName:"ul"},"in the Company dataclass: ",(0,n.kt)("strong",{parentName:"li"},"companyProjects"),' attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.',(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The Manual or Automatic property of a database relation has no effect in ORDA.")))),(0,n.kt)("p",null,"All dataclass attributes are exposed as properties of the dataclass:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(42684).Z,width:"1049",height:"288"})),(0,n.kt)("p",null,"Keep in mind that these objects describe attributes, but do not give access to data. Reading or writing data is done through ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19/ORDA/entities#using-entity-attributes"}),"entity objects"),"."),(0,n.kt)("h3",r({},{id:"entity"}),"Entity"),(0,n.kt)("p",null,"An entity is the equivalent of a record. It is actually an object that references a record in the database. It can be seen as an instance of a ",(0,n.kt)("a",r({parentName:"p"},{href:"#dataclass"}),"dataclass"),", like a record of the table matching the dataclass. However, an entity also contains data correlated to the database related to the datastore."),(0,n.kt)("p",null,"The purpose of the entity is to manage data (create, update, delete). When an entity reference is obtained by means of an entity selection, it also retains information about the entity selection which allows iteration through the selection."),(0,n.kt)("p",null,"The entity object itself cannot be copied as an object:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $myentity:=OB Copy(ds.Employee.get(1)) //returns null\n")),(0,n.kt)("p",null,"The entity properties are however enumerable:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)\n  //$prop contains the names of all the entity attributes\n")),(0,n.kt)("h3",r({},{id:"entity-selection"}),"Entity selection"),(0,n.kt)("p",null,"An entity selection is an object containing one or more reference(s) to entities belonging to the same dataclass. It is usually created as a result of a query or returned from a relation attribute. An entity selection can contain 0, 1 or X entities from the dataclass -- where X can represent the total number of entities contained in the dataclass."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $e : cs.EmployeeSelection //declares a $e object variable of the EmployeeSelection class type\n$e:=ds.Employee.all() //assigns the resulting entity selection reference to the $e variable\n")),(0,n.kt)("p",null,'Entity selections can be "sorted" or "unsorted" (',(0,n.kt)("a",r({parentName:"p"},{href:"#ordered-or-unordered-entity-selection"}),"see below"),")."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'Entity selections can also be "shareable" or "non-shareable", depending on ',(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19/ORDA/entities#shareable-or-alterable-entity-selections"}),"how they have been created"),".")),(0,n.kt)("p",null,"The entity selection object itself cannot be copied as an object:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $myentitysel:=OB Copy(ds.Employee.all()) //returns null\n")),(0,n.kt)("p",null,"The entity selection properties are however enumerable:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.all();$prop)\n  //$prop contains the names of the entity selection properties\n  //("length", 00", "01"...)\n')),(0,n.kt)("h4",r({},{id:"ordered-or-unordered-entity-selection"}),"Ordered or unordered entity selection"),(0,n.kt)("p",null,"For optimization reasons, by default 4D ORDA usually creates unordered entity selections, except when you use the ",(0,n.kt)("inlineCode",{parentName:"p"},"orderBy( )"),' method or use specific options. In this documentation, unless specified, "entity selection" usually refers to an "unordered entity selection".'),(0,n.kt)("p",null,"Ordered entity selections are created only when necessary or when specifically requested using options, i.e. in the following cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"result of an ",(0,n.kt)("inlineCode",{parentName:"li"},"orderBy()")," on a selection (of any type) or an ",(0,n.kt)("inlineCode",{parentName:"li"},"orderBy()")," on a dataclass"),(0,n.kt)("li",{parentName:"ul"},"result of the ",(0,n.kt)("inlineCode",{parentName:"li"},"newSelection()")," method with the ",(0,n.kt)("inlineCode",{parentName:"li"},"dk keep ordered")," option")),(0,n.kt)("p",null,"Unordered entity selections are created in the following cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"result of a standard ",(0,n.kt)("inlineCode",{parentName:"li"},"query()")," on a selection (of any type) or a ",(0,n.kt)("inlineCode",{parentName:"li"},"query()")," on a dataclass,"),(0,n.kt)("li",{parentName:"ul"},"result of the ",(0,n.kt)("inlineCode",{parentName:"li"},"newSelection()")," method without option,"),(0,n.kt)("li",{parentName:"ul"},"result of any of the comparison methods, whatever the input selection types: ",(0,n.kt)("inlineCode",{parentName:"li"},"or()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"and()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"minus()"),".",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The following entity selections are always ",(0,n.kt)("strong",{parentName:"p"},"ordered"),":"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"entity selections returned by 4D Server to a remote client"),(0,n.kt)("li",{parentName:"ul"},"entity selections built upon remote datastores."))))),(0,n.kt)("p",null,"Note that when an ordered entity selection becomes an unordered entity selection, any repeated entity references are removed."))}u.isMDXComponent=!0},76930:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ExposeDataclass-493afc3bdbd30cb758f171009c9d11bb.png"},26492:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/companyTable-15e8c71e579a6392b89a8e3f45aa8536.png"},42684:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataclassProperties-b0e6524ae14723315b5d45435df82853.png"},56260:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datastoreMapping-833be12255d9e7b9cde49426a0cc902f.png"},42202:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/relationProperties-f7d9bc6fc793e2bae76ea2164c37ffe3.png"}}]);