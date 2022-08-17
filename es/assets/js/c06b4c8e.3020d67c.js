"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26057],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(a),u=s,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});a(67294);var n=a(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const o={id:"datastores",title:"Using a remote datastore"},r=void 0,l={unversionedId:"ORDA/datastores",id:"version-19-R6/ORDA/datastores",title:"Using a remote datastore",description:"A datastore exposed on a 4D application can be accessed simultaneously through different clients:",source:"@site/versioned_docs/version-19-R6/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/docs/es/ORDA/datastores",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"datastores",title:"Using a remote datastore"},sidebar:"docs",previous:{title:"Working with data",permalink:"/docs/es/ORDA/entities"},next:{title:"Glossary",permalink:"/docs/es/ORDA/glossary"}},c={},p=[{value:"Opening sessions",id:"opening-sessions",level:2},{value:"Viewing sessions",id:"viewing-sessions",level:3},{value:"Locking and transactions",id:"locking-and-transactions",level:3},{value:"Closing sessions",id:"closing-sessions",level:3},{value:"Client/server optimization",id:"clientserver-optimization",level:2},{value:"Context",id:"context",level:3},{value:"Example",id:"example",level:4},{value:"Reusing the context property",id:"reusing-the-context-property",level:4},{value:"Entity selection-based list box",id:"entity-selection-based-list-box",level:4},{value:"Preconfiguring contexts",id:"preconfiguring-contexts",level:4},{value:"ORDA cache",id:"orda-cache",level:3}],d={toc:p};function m(e){var{components:t}=e,o=i(e,["components"]);return(0,n.kt)("wrapper",s({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/es/ORDA/dsmapping#datastore"}),"datastore")," exposed on a 4D application can be accessed simultaneously through different clients:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4D remote applications using ORDA to access the main datastore with the ",(0,n.kt)("inlineCode",{parentName:"li"},"ds")," command. Note that the 4D remote application can still access the database in classic mode. These accesses are handled by the ",(0,n.kt)("strong",{parentName:"li"},"4D application server"),". "),(0,n.kt)("li",{parentName:"ul"},"Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/DataStoreClass#open-datastore"}),(0,n.kt)("inlineCode",{parentName:"a"},"Open datastore"))," command. These accesses are handled by the ",(0,n.kt)("strong",{parentName:"li"},"HTTP REST server"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://developer.4d.com/go-mobile/"}),"4D for iOS or 4D for Android")," queries for updating mobile applications. These accesses are handled by the ",(0,n.kt)("strong",{parentName:"li"},"HTTP server"),". ")),(0,n.kt)("h2",s({},{id:"opening-sessions"}),"Opening sessions"),(0,n.kt)("p",null,"When you work with a remote datastore referenced through calls to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," command, the connection between the requesting processes and the remote datastore is handled via sessions. "),(0,n.kt)("p",null,"A session in created on the remote datastore to handle the connection. This session is identified using a internal session ID which is associated to the ",(0,n.kt)("inlineCode",{parentName:"p"},"localID")," on the 4D application side. This session automatically manages access to data, entity selections, or entities. "),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"localID")," is local to the machine that connects to the remote datastore, which means:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If other processes of the same application need to access the same remote datastore, they can use the same ",(0,n.kt)("inlineCode",{parentName:"li"},"localID")," and thus, share the same session. "),(0,n.kt)("li",{parentName:"ul"},"If another process of the same application opens the same remote datastore but with another ",(0,n.kt)("inlineCode",{parentName:"li"},"localID"),", it will create a new session on the remote datastore."),(0,n.kt)("li",{parentName:"ul"},"If another machine connects to the same remote datastore with the same ",(0,n.kt)("inlineCode",{parentName:"li"},"localID"),", it will create another session with another cookie.")),(0,n.kt)("p",null,"These principles are illustrated in the following graphics:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7697).Z,width:"962",height:"719"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For sessions opened by REST requests, please refer to ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/es/REST/authUsers"}),"Users and sessions"),".")),(0,n.kt)("h3",s({},{id:"viewing-sessions"}),"Viewing sessions"),(0,n.kt)("p",null,"Processes that manage sessions for datastore access are shown in the 4D Server administration window:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'name: "REST Handler: \\<process name',">",'" '),(0,n.kt)("li",{parentName:"ul"},"type: HTTP Server Worker type"),(0,n.kt)("li",{parentName:"ul"},"session: session name is the user name passed to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Open datastore")," command.")),(0,n.kt)("p",null,"In the following example, two processes are running for the same session:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(28895).Z,width:"1402",height:"708"})),(0,n.kt)("h3",s({},{id:"locking-and-transactions"}),"Locking and transactions"),(0,n.kt)("p",null,"ORDA features related to entity locking and transaction are managed at process level in remote datastores, just like in ORDA client/server mode:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/ORDA/entities#entity-locking"}),"Entity locking"),"). If several entities pointing to a same record have been locked in a process, they must be all unlocked in the process to remove the lock. If a lock has been put on an entity, the lock is removed when there is no more reference to this entity in memory. "),(0,n.kt)("li",{parentName:"ul"},"Transactions can be started, validated or cancelled separately on each remote datastore using the ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.startTransaction()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.cancelTransaction()"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.validateTransaction()")," functions. They do not impact other datastores. "),(0,n.kt)("li",{parentName:"ul"},"Classic 4D language commands (",(0,n.kt)("inlineCode",{parentName:"li"},"START TRANSACTION"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"VALIDATE TRANSACTION"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"CANCEL TRANSACTION"),") only apply to the main datastore (returned by ",(0,n.kt)("inlineCode",{parentName:"li"},"ds"),").\nIf an entity from a remote datastore is hold by a transaction in a process, other processes cannot update it, even if these processes share the same session. "),(0,n.kt)("li",{parentName:"ul"},"Locks on entities are removed and transactions are rollbacked:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"when the process is killed."),(0,n.kt)("li",{parentName:"ul"},"when the session is closed on the server"),(0,n.kt)("li",{parentName:"ul"},"when the session is killed from the server administration window.")))),(0,n.kt)("h3",s({},{id:"closing-sessions"}),"Closing sessions"),(0,n.kt)("p",null,"A session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the ",(0,n.kt)("em",{parentName:"p"},"connectionInfo")," parameter of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," command. "),(0,n.kt)("p",null,"If a request is sent to the remote datastore after the session has been closed, it is automatically re-created if possible (license available, server not stopped...). However, keep in mind that the context of the session regarding locks and transactions is lost (see above). "),(0,n.kt)("h2",s({},{id:"clientserver-optimization"}),"Client/server optimization"),(0,n.kt)("p",null,"4D provides optimizations for ORDA requests that use entity selections or load entities in client/server configurations (datastore accessed remotely through ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," or via ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore"),"). These optimizations speed up the execution of your 4D application by reducing drastically the volume of information transmitted over the network. They include: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},"optimization context")),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},"ORDA cache"))),(0,n.kt)("h3",s({},{id:"context"}),"Context"),(0,n.kt)("p",null,"The optimization context is based upon the following implementations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'When a client requests an entity selection from the server, 4D automatically "learns" which attributes of the entity selection are actually used on the client side during the code execution, and builds a corresponding "optimization context". This context is attached to the entity selection and stores the used attributes. It will be dynamically updated if other attributes are used afterwards. The following methods and functions trigger the learning phase:'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#create-entity-selection"}),(0,n.kt)("inlineCode",{parentName:"a"},"Create entity selection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/DataClassClass#fromcollection"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.fromCollection()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/DataClassClass#all"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.all()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/DataClassClass#get"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.get()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/DataClassClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.query()"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Subsequent requests sent to the server on the same entity selection automatically reuse the optimization context and only get necessary attributes from the server, which accelerates the processing. For example, in an ",(0,n.kt)("a",s({parentName:"p"},{href:"#entity-selection-based-list-box"}),"entity selection-based list box"),", the learning phase takes place during the display of the first row. the display of the next rows is optimized. The following functions automatically associate the optimization context of the source entity selection to the returned entity selection:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#and"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.and()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#minus"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.minus()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#or"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.or()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#orderBy"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.orderBy()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#slice"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.slice()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#drop"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.drop()"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see ",(0,n.kt)("a",s({parentName:"p"},{href:"#reusing-the-context-property"}),"Using the context property")," below). ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can build optimization contexts manually using the ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/es/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," function (see ",(0,n.kt)("a",s({parentName:"p"},{href:"#preconfiguring-contexts"}),"Preconfiguring contexts"),"). "))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(80247).Z,width:"3439",height:"2018"})),(0,n.kt)("h4",s({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Given the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-4d"}),' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table\n End for each\n')),(0,n.kt)("p",null,"Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in ",(0,n.kt)("em",{parentName:"p"},"$sel")," from the second iteration of the loop. "),(0,n.kt)("h4",s({},{id:"reusing-the-context-property"}),"Reusing the context property"),(0,n.kt)("p",null,"You can increase the benefits of the optimization by using the ",(0,n.kt)("strong",{parentName:"p"},"context"),' property. This property references an optimization context "learned" for an entity selection. It can be passed as parameter to ORDA functions that return new entity selections, so that entity selections directly request used attributes to the server and bypass the learning phase.'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can also create contexts using the ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/es/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},".setRemoteContextInfo()"))," function.  ")),(0,n.kt)("p",null,"The same optimization context property can be passed to unlimited number of entity selections on the same dataclass. All ORDA functions that handle entity selections support the ",(0,n.kt)("strong",{parentName:"p"},"context")," property (for example ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/es/API/DataClassClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))," or ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/es/API/DataClassClass#all"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.all()")),"). Keep in mind, however, that a context is automatically updated when new attributes are used in other parts of the code. Reusing the same context in different codes could result in overloading the context and then, reduce its efficiency. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/es/API/DataClassClass#get"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.get()"))," function). ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example with ",(0,n.kt)("inlineCode",{parentName:"strong"},"dataClass.query()"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-4d"}),' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n \n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // In extractData method an optimization is triggered   \n // and associated to context "shortList"\n \n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // In extractData method the optimization associated   \n // to context "shortList" is applied\n \n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  \n // is triggered and associated to context "longList"\n \n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  \n // associated to context "longList" is applied\n')),(0,n.kt)("h4",s({},{id:"entity-selection-based-list-box"}),"Entity selection-based list box"),(0,n.kt)("p",null,"Entity selection optimization is automatically applied to entity selection-based list boxes in client/server configurations, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server."),(0,n.kt)("p",null,'A specific "page mode" context is also provided when loading the current entity through the ',(0,n.kt)("strong",{parentName:"p"},"Current item")," property expression of the list box (see ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/es/FormObjects/listboxOverview#list-box-types"}),"Collection or entity selection type list boxes"),'). This feature allows you to not overload the list box initial context in this case, especially if the "page" requests additional attributes. Note that only the use of ',(0,n.kt)("strong",{parentName:"p"},"Current item")," expression will create/use the page context (access through ",(0,n.kt)("inlineCode",{parentName:"p"},"entitySelection\\[index]")," will alter the entity selection context)."),(0,n.kt)("p",null,"Subsequent requests to server sent by entity browsing functions will also support this optimization. The following functions automatically associate the optimization context of the source entity to the returned entity:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntityClass#next"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.next()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntityClass#first"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.first()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntityClass#last"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.last()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntityClass#previous"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.previous()")))),(0,n.kt)("p",null,"For example, the following code loads the selected entity and allows browsing in the entity selection. Entities are loaded in a separate context and the list box initial context is left untouched:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-4d"})," $myEntity:=Form.currentElement //current item expression\n  //... do something\n $myEntity:=$myEntity.next() //loads the next entity using the same context\n")),(0,n.kt)("h4",s({},{id:"preconfiguring-contexts"}),"Preconfiguring contexts"),(0,n.kt)("p",null,"An optimization context should be defined for every feature or algorithm of your application, in order to have the best performances. For example, a context can be used for queries on customers, another context for queries on products, etc."),(0,n.kt)("p",null,"If you want to deliver final applications with the highest level of optimization, you can preconfigure your contexts and thus save learning phases by following these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Design your algorithms."),(0,n.kt)("li",{parentName:"ol"},"Run your application and let the automatic learning mechanism fill the optimization contexts."),(0,n.kt)("li",{parentName:"ol"},"Call the ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/DataStoreClass#getremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.getRemoteContextInfo()"))," or ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/DataStoreClass#getallremotecontexts"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.getAllRemoteContexts()"))," function to collect  contexts. You can use the ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#getremotecontextattributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.getRemoteContextAttributes()"))," and ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/EntityClass#getremotecontextattributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.getRemoteContextAttributes()"))," functions to analyse how your algorithms use attributes."),(0,n.kt)("li",{parentName:"ol"},"In the final step, call the ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," function to build contexts at application startup and ",(0,n.kt)("a",s({parentName:"li"},{href:"#reusing-the-context-property"}),"use them")," in your algorithms. ")),(0,n.kt)("h3",s({},{id:"orda-cache"}),"ORDA cache"),(0,n.kt)("p",null,"For optimization reasons, data requested from the server via ORDA is loaded in the ORDA remote cache (which is different from the 4D cache). The ORDA cache is organized by dataclass, and expires after 30 seconds. "),(0,n.kt)("p",null,"The data contained in the cache is considered as expired when the timeout is reached. Any access to expired data will send a request to the server. Expired data remains in the cache until space is needed."),(0,n.kt)("p",null,"By default, the ORDA cache is transparently handled by 4D. However, you can control its contents using the following ORDA class functions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/DataClassClass#setremotecachesettings"}),"dataClass.setRemoteCacheSettings()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/DataClassClass#getremotecache"}),"dataClass.getRemoteCache()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/es/API/DataClassClass#clearremotecache"}),"dataClass.clearRemoteCache()"))))}m.isMDXComponent=!0},80247:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},28895:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},7697:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"}}]);