"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52712],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=c(a),u=o,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28932:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const s={id:"datastores",title:"Utilizar un almac\xe9n de datos remoto"},r=void 0,l={unversionedId:"ORDA/datastores",id:"version-19-R6/ORDA/datastores",title:"Utilizar un almac\xe9n de datos remoto",description:"A datastore exposed on a 4D application can be accessed simultaneously through different clients:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/documentation/es/docs/ORDA/datastores",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"datastores",title:"Utilizar un almac\xe9n de datos remoto"},sidebar:"docs",previous:{title:"Trabajar con los datos",permalink:"/documentation/es/docs/ORDA/entities"},next:{title:"Glosario",permalink:"/documentation/es/docs/ORDA/glossary"}},c={},d=[{value:"Apertura de las sesiones",id:"apertura-de-las-sesiones",level:2},{value:"Visualizaci\xf3n de las sesiones",id:"visualizaci\xf3n-de-las-sesiones",level:3},{value:"Bloqueo y transacciones",id:"bloqueo-y-transacciones",level:3},{value:"Cierre de las sesiones",id:"cierre-de-las-sesiones",level:3},{value:"Optimizaci\xf3n cliente/servidor",id:"optimizaci\xf3n-clienteservidor",level:2},{value:"Contexto",id:"contexto",level:3},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Reutilizaci\xf3n de la propiedad context",id:"reutilizaci\xf3n-de-la-propiedad-context",level:4},{value:"List box basado en una selecci\xf3n de entidades",id:"list-box-basado-en-una-selecci\xf3n-de-entidades",level:4},{value:"Preconfiguraci\xf3n de contextos",id:"preconfiguraci\xf3n-de-contextos",level:4},{value:"Cach\xe9 ORDA",id:"cach\xe9-orda",level:3}],p={toc:d};function m(e){var{components:t}=e,s=i(e,["components"]);return(0,n.kt)("wrapper",o({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A ",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/es/docs/ORDA/dsmapping#datastore"}),"datastore")," exposed on a 4D application can be accessed simultaneously through different clients:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4D remote applications using ORDA to access the main datastore with the ",(0,n.kt)("inlineCode",{parentName:"li"},"ds")," command. Note that the 4D remote application can still access the database in classic mode. These accesses are handled by the ",(0,n.kt)("strong",{parentName:"li"},"4D application server"),"."),(0,n.kt)("li",{parentName:"ul"},"Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the ",(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/DataStoreClass#open-datastore"}),(0,n.kt)("inlineCode",{parentName:"a"},"Open datastore"))," command. These accesses are handled by the ",(0,n.kt)("strong",{parentName:"li"},"HTTP REST server"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://developer.4d.com/go-mobile/"}),"4D for iOS or 4D for Android")," queries for updating mobile applications. Estos accesos son gestionados por el ",(0,n.kt)("strong",{parentName:"li"},"servidor HTTP"),".")),(0,n.kt)("h2",o({},{id:"apertura-de-las-sesiones"}),"Apertura de las sesiones"),(0,n.kt)("p",null,"When you work with a remote datastore referenced through calls to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," command, the connection between the requesting processes and the remote datastore is handled via sessions."),(0,n.kt)("p",null,"Se crea una sesi\xf3n en el datastore remoto para gestionar la conexi\xf3n. This session is identified using a internal session ID which is associated to the ",(0,n.kt)("inlineCode",{parentName:"p"},"localID")," on the 4D application side. This session automatically manages access to data, entity selections, or entities."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"localID")," is local to the machine that connects to the remote datastore, which means:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If other processes of the same application need to access the same remote datastore, they can use the same ",(0,n.kt)("inlineCode",{parentName:"li"},"localID")," and thus, share the same session."),(0,n.kt)("li",{parentName:"ul"},"If another process of the same application opens the same remote datastore but with another ",(0,n.kt)("inlineCode",{parentName:"li"},"localID"),", it will create a new session on the remote datastore."),(0,n.kt)("li",{parentName:"ul"},"If another machine connects to the same remote datastore with the same ",(0,n.kt)("inlineCode",{parentName:"li"},"localID"),", it will create another session with another cookie.")),(0,n.kt)("p",null,"Estos principios se ilustran en los gr\xe1ficos siguientes:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(75010).Z,width:"962",height:"719"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For sessions opened by REST requests, please refer to ",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/es/docs/REST/authUsers"}),"Users and sessions"),".")),(0,n.kt)("h3",o({},{id:"visualizaci\xf3n-de-las-sesiones"}),"Visualizaci\xf3n de las sesiones"),(0,n.kt)("p",null,"Processes that manage sessions for datastore access are shown in the 4D Server administration window:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'name: "REST Handler: \\<process name',">",'"'),(0,n.kt)("li",{parentName:"ul"},"tipo: tipo Worker Server HTTP"),(0,n.kt)("li",{parentName:"ul"},"session: session name is the user name passed to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Open datastore")," command.")),(0,n.kt)("p",null,"In the following example, two processes are running for the same session:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(98210).Z,width:"1402",height:"708"})),(0,n.kt)("h3",o({},{id:"bloqueo-y-transacciones"}),"Bloqueo y transacciones"),(0,n.kt)("p",null,"ORDA features related to entity locking and transaction are managed at process level in remote datastores, just like in ORDA client/server mode:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see ",(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/ORDA/entities#entity-locking"}),"Entity locking"),"). If several entities pointing to a same record have been locked in a process, they must be all unlocked in the process to remove the lock. If a lock has been put on an entity, the lock is removed when there is no more reference to this entity in memory."),(0,n.kt)("li",{parentName:"ul"},"Transactions can be started, validated or cancelled separately on each remote datastore using the ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.startTransaction()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.cancelTransaction()"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.validateTransaction()")," functions. No afectan a otros almacenes de datos."),(0,n.kt)("li",{parentName:"ul"},"Classic 4D language commands (",(0,n.kt)("inlineCode",{parentName:"li"},"START TRANSACTION"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"VALIDATE TRANSACTION"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"CANCEL TRANSACTION"),") only apply to the main datastore (returned by ",(0,n.kt)("inlineCode",{parentName:"li"},"ds"),"). If an entity from a remote datastore is hold by a transaction in a process, other processes cannot update it, even if these processes share the same session."),(0,n.kt)("li",{parentName:"ul"},"Los bloqueos en las entidades son eliminados y las transacciones son anuladas:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"cuando el proceso es eliminado."),(0,n.kt)("li",{parentName:"ul"},"cuando la sesi\xf3n se cierra en el servidor"),(0,n.kt)("li",{parentName:"ul"},"cuando la sesi\xf3n es terminada desde la ventana de administraci\xf3n del servidor.")))),(0,n.kt)("h3",o({},{id:"cierre-de-las-sesiones"}),"Cierre de las sesiones"),(0,n.kt)("p",null,"A session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the ",(0,n.kt)("em",{parentName:"p"},"connectionInfo")," parameter of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," command."),(0,n.kt)("p",null,"If a request is sent to the remote datastore after the session has been closed, it is automatically re-created if possible (license available, server not stopped...). However, keep in mind that the context of the session regarding locks and transactions is lost (see above)."),(0,n.kt)("h2",o({},{id:"optimizaci\xf3n-clienteservidor"}),"Optimizaci\xf3n cliente/servidor"),(0,n.kt)("p",null,"4D provides optimizations for ORDA requests that use entity selections or load entities in client/server configurations (datastore accessed remotely through ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," or via ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore"),"). These optimizations speed up the execution of your 4D application by reducing drastically the volume of information transmitted over the network. Incluyen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"el ",(0,n.kt)("strong",{parentName:"li"},"contexto de optimizaci\xf3n")),(0,n.kt)("li",{parentName:"ul"},"la ",(0,n.kt)("strong",{parentName:"li"},"cach\xe9 ORDA"))),(0,n.kt)("h3",o({},{id:"contexto"}),"Contexto"),(0,n.kt)("p",null,"The optimization context is based upon the following implementations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'When a client requests an entity selection from the server, 4D automatically "learns" which attributes of the entity selection are actually used on the client side during the code execution, and builds a corresponding "optimization context". This context is attached to the entity selection and stores the used attributes. It will be dynamically updated if other attributes are used afterwards. Los siguientes m\xe9todos y funciones activan la fase de aprendizaje:'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntitySelectionClass#create-entity-selection"}),(0,n.kt)("inlineCode",{parentName:"a"},"Crear una entity selection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/DataClassClass#fromcollection"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.fromCollection()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/DataClassClass#all"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.all()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/DataClassClass#get"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.get()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/DataClassClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntitySelectionClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.query()"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Subsequent requests sent to the server on the same entity selection automatically reuse the optimization context and only get necessary attributes from the server, which accelerates the processing. For example, in an ",(0,n.kt)("a",o({parentName:"p"},{href:"#entity-selection-based-list-box"}),"entity selection-based list box"),", the learning phase takes place during the display of the first row. la visualizaci\xf3n de las siguientes l\xedneas est\xe1 optimizada. The following functions automatically associate the optimization context of the source entity selection to the returned entity selection:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntitySelectionClass#and"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.and()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntitySelectionClass#minus"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.minus()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntitySelectionClass#or"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.or()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntitySelectionClass#orderBy"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.orderBy()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntitySelectionClass#slice"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.slice()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntitySelectionClass#drop"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.drop()"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see ",(0,n.kt)("a",o({parentName:"p"},{href:"#reusing-the-context-property"}),"Using the context property")," below).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can build optimization contexts manually using the ",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/es/docs/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," function (see ",(0,n.kt)("a",o({parentName:"p"},{href:"#preconfiguring-contexts"}),"Preconfiguring contexts"),")."))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(33079).Z,width:"3439",height:"2018"})),(0,n.kt)("h4",o({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"Dado el siguiente c\xf3digo:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table\n End for each\n')),(0,n.kt)("p",null,"Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in ",(0,n.kt)("em",{parentName:"p"},"$sel")," from the second iteration of the loop."),(0,n.kt)("h4",o({},{id:"reutilizaci\xf3n-de-la-propiedad-context"}),"Reutilizaci\xf3n de la propiedad context"),(0,n.kt)("p",null,"You can increase the benefits of the optimization by using the ",(0,n.kt)("strong",{parentName:"p"},"context"),' property. This property references an optimization context "learned" for an entity selection. It can be passed as parameter to ORDA functions that return new entity selections, so that entity selections directly request used attributes to the server and bypass the learning phase.'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can also create contexts using the ",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/es/docs/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},".setRemoteContextInfo()"))," function.")),(0,n.kt)("p",null,"All ORDA functions that handle entity selections support the ",(0,n.kt)("strong",{parentName:"p"},"context")," property (for example ",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/es/docs/API/DataClassClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))," or ",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/es/docs/API/DataClassClass#all"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.all()")),"). The same optimization context property can be passed to unlimited number of entity selections on the same dataclass. Keep in mind, however, that a context is automatically updated when new attributes are used in other parts of the code. Reusing the same context in different codes could result in overloading the context and then, reduce its efficiency."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the ",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/es/docs/API/DataClassClass#get"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.get()"))," function).")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ejemplo con ",(0,n.kt)("inlineCode",{parentName:"strong"},"dataClass.query()"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n\n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // In extractData method an optimization is triggered   \n // and associated to context "shortList"\n\n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // In extractData method the optimization associated   \n // to context "shortList" is applied\n\n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  \n // is triggered and associated to context "longList"\n\n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  \n // associated to context "longList" is applied\n')),(0,n.kt)("h4",o({},{id:"list-box-basado-en-una-selecci\xf3n-de-entidades"}),"List box basado en una selecci\xf3n de entidades"),(0,n.kt)("p",null,"Entity selection optimization is automatically applied to entity selection-based list boxes in client/server configurations, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server."),(0,n.kt)("p",null,'A specific "page mode" context is also provided when loading the current entity through the ',(0,n.kt)("strong",{parentName:"p"},"Current item")," property expression of the list box (see ",(0,n.kt)("a",o({parentName:"p"},{href:"/documentation/es/docs/FormObjects/listboxOverview#list-box-types"}),"Collection or entity selection type list boxes"),'). This feature allows you to not overload the list box initial context in this case, especially if the "page" requests additional attributes. Note that only the use of ',(0,n.kt)("strong",{parentName:"p"},"Current item")," expression will create/use the page context (access through ",(0,n.kt)("inlineCode",{parentName:"p"},"entitySelection\\[index]")," will alter the entity selection context)."),(0,n.kt)("p",null,"Subsequent requests to server sent by entity browsing functions will also support this optimization. The following functions automatically associate the optimization context of the source entity to the returned entity:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntityClass#next"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.next()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntityClass#first"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.first()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntityClass#last"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.last()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntityClass#previous"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.previous()")))),(0,n.kt)("p",null,"For example, the following code loads the selected entity and allows browsing in the entity selection. Entities are loaded in a separate context and the list box initial context is left untouched:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"})," $myEntity:=Form.currentElement //current item expression\n  //... do something\n $myEntity:=$myEntity.next() //loads the next entity using the same context\n")),(0,n.kt)("h4",o({},{id:"preconfiguraci\xf3n-de-contextos"}),"Preconfiguraci\xf3n de contextos"),(0,n.kt)("p",null,"An optimization context should be defined for every feature or algorithm of your application, in order to have the best performances. For example, a context can be used for queries on customers, another context for queries on products, etc."),(0,n.kt)("p",null,"If you want to deliver final applications with the highest level of optimization, you can preconfigure your contexts and thus save learning phases by following these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Dise\xf1e sus algoritmos."),(0,n.kt)("li",{parentName:"ol"},"Run your application and let the automatic learning mechanism fill the optimization contexts."),(0,n.kt)("li",{parentName:"ol"},"Call the ",(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/DataStoreClass#getremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.getRemoteContextInfo()"))," or ",(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/DataStoreClass#getallremotecontexts"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.getAllRemoteContexts()"))," function to collect  contexts. You can use the ",(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntitySelectionClass#getremotecontextattributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.getRemoteContextAttributes()"))," and ",(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/EntityClass#getremotecontextattributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.getRemoteContextAttributes()"))," functions to analyse how your algorithms use attributes."),(0,n.kt)("li",{parentName:"ol"},"In the final step, call the ",(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," function to build contexts at application startup and ",(0,n.kt)("a",o({parentName:"li"},{href:"#reusing-the-context-property"}),"use them")," in your algorithms.")),(0,n.kt)("h3",o({},{id:"cach\xe9-orda"}),"Cach\xe9 ORDA"),(0,n.kt)("p",null,"For optimization reasons, data requested from the server via ORDA is loaded in the ORDA remote cache (which is different from the 4D cache). La cach\xe9 ORDA est\xe1 organizada por dataclass y vence despu\xe9s de 30 segundos."),(0,n.kt)("p",null,"The data contained in the cache is considered as expired when the timeout is reached. Todo acceso a los datos caducados enviar\xe1 una petici\xf3n al servidor. Los datos caducados permanecen en la cach\xe9 hasta que se necesite el espacio."),(0,n.kt)("p",null,"Por defecto, la cach\xe9 ORDA es manejada de forma transparente por 4D. However, you can control its contents using the following ORDA class functions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/DataClassClass#setremotecachesettings"}),"dataClass.setRemoteCacheSettings()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/DataClassClass#getremotecache"}),"dataClass.getRemoteCache()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/documentation/es/docs/API/DataClassClass#clearremotecache"}),"dataClass.clearRemoteCache()"))))}m.isMDXComponent=!0},33079:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},98210:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},75010:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"}}]);