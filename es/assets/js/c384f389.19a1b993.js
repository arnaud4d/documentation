"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"clientServer",title:"Client/Server Management"},s=void 0,c={unversionedId:"Desktop/clientServer",id:"version-19/Desktop/clientServer",title:"Client/Server Management",description:"4D Desktop applications can be used in a Client/Server configuration, either as merged client/server applications or as remote projects.",source:"@site/versioned_docs/version-19/Desktop/clientServer.md",sourceDirName:"Desktop",slug:"/Desktop/clientServer",permalink:"/main/es/docs/19/Desktop/clientServer",draft:!1,tags:[],version:"19",frontMatter:{id:"clientServer",title:"Client/Server Management"},sidebar:"docs",previous:{title:"$version",permalink:"/main/es/docs/19/REST/version"},next:{title:"About 4D Forms",permalink:"/main/es/docs/19/FormEditor/forms"}},p={},d=[{value:"Opening a merged client/server application",id:"opening-a-merged-clientserver-application",level:2},{value:"Opening a remote project",id:"opening-a-remote-project",level:2},{value:"Updating project files on the server",id:"updating-project-files-on-the-server",level:3},{value:"Updating project files on remote machines",id:"updating-project-files-on-remote-machines",level:3},{value:"Using 4D and 4D Server on the same machine",id:"using-4d-and-4d-server-on-the-same-machine",level:2}],m={toc:d};function u(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4D Desktop applications can be used in a Client/Server configuration, either as merged client/server applications or as remote projects."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"merged client/server applications")," are generated by the ",(0,a.kt)("a",{parentName:"p",href:"/main/es/docs/19/Desktop/building#clientserver-page"},"Build Application manager"),". They are used for application deployments.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"remote projects")," are ",(0,a.kt)("a",{parentName:"p",href:"/main/es/docs/19/Project/architecture"},".4DProject")," files opened by 4D Server and accessed with 4D in remote mode. The server sends a .4dz version of the project (",(0,a.kt)("a",{parentName:"p",href:"/main/es/docs/19/Desktop/building#build-compiled-structure"},"compressed format"),") to the remote 4D, thus structure files are read-only. This configuration is usually used for application testing."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(79022).Z,width:"581",height:"249"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Connecting to a remote projet from the ",(0,a.kt)("strong",{parentName:"p"},"same machine as 4D Server")," allows modifying the project files. This ",(0,a.kt)("a",{parentName:"p",href:"#using-4d-and-4d-server-on-the-same-machine"},"specific feature")," allows to develop a client/server application in the same context as the deployment context.")),(0,a.kt)("h2",{id:"opening-a-merged-clientserver-application"},"Opening a merged client/server application"),(0,a.kt)("p",null,"A merged client/server application is customized and its starting is simplified:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To launch the server portion, the user simply double-clicks on the server application. The project file does not need to be selected."),(0,a.kt)("li",{parentName:"ul"},"To launch the client portion, the user simply double-clicks the client application, which connects directly to the server application.")),(0,a.kt)("p",null,"These principles are detailed in the ",(0,a.kt)("a",{parentName:"p",href:"/main/es/docs/19/Desktop/building#what-is-a-clientserver-application"},"Build Application")," page."),(0,a.kt)("h2",{id:"opening-a-remote-project"},"Opening a remote project"),(0,a.kt)("p",null,"The first time you connect to a 4D Server project via a remote 4D, you will usually use the standard connection dialog. Thereafter, you will be able to connect directly using the ",(0,a.kt)("strong",{parentName:"p"},"Open Recent Projects")," menu or a 4DLink shortcut file."),(0,a.kt)("p",null,"To connect remotely to a 4D Server project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Connect to 4D Server")," in the Welcome Wizard dialog, OR\nSelect ",(0,a.kt)("strong",{parentName:"li"},"Open/Remote Project...")," from the ",(0,a.kt)("strong",{parentName:"li"},"File")," menu or the ",(0,a.kt)("strong",{parentName:"li"},"Open")," toolbar button.")),(0,a.kt)("p",null,"The 4D Server connection dialog appears. This dialog has three tabs: ",(0,a.kt)("strong",{parentName:"p"},"Recent"),", ",(0,a.kt)("strong",{parentName:"p"},"Available"),", and ",(0,a.kt)("strong",{parentName:"p"},"Custom"),"."),(0,a.kt)("p",null,"If 4D Server is connected to the same network as the remote 4D, select ",(0,a.kt)("strong",{parentName:"p"},"Available"),". 4D Server includes a built-in TCP/IP broadcasting system that, by default, publishes the name of the 4D Server projects available over the network. The list is sorted by order of appearance and updated dynamically."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(71998).Z,width:"522",height:"482"})),(0,a.kt)("p",null,"To connect to a server from the list, double-click on its name or select it and click the ",(0,a.kt)("strong",{parentName:"p"},"OK")," button."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A circumflex accent (^) is placed before the name of projects published with the encryption option enabled.")),(0,a.kt)("p",null,"If the published project is not displayed in the ",(0,a.kt)("strong",{parentName:"p"},"Available")," list, select ",(0,a.kt)("strong",{parentName:"p"},"Custom"),". The Custom page allows you to connect to a published server on the network using its network address and assigning it a customized name."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(59606).Z,width:"522",height:"482"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Project name"),": Defines the local name of the 4D Server project. This name will be used in the ",(0,a.kt)("strong",{parentName:"li"},"Recent")," page when referring to the project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network address"),": The IP address of the machine where the 4D Server was launched. If two servers are executed simultaneously on the same machine, the IP address must be followed by a colon and port number, for example: ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.92.104:19814"),". By default, the publishing port of a 4D Server is 19813. This number can be modified in the Project settings.")),(0,a.kt)("p",null,"Once this page assigns a server, clicking the ",(0,a.kt)("strong",{parentName:"p"},"OK")," button will allow you to connect to the server."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the project is published with the encryption option enabled, you must add a circumflex accent (^) before the name, otherwise the connection will be refused. For more information, refer to the Encrypting Client/Server Connections section.")),(0,a.kt)("p",null,"Once a connection to the server has been established, the remote project will be listed on the ",(0,a.kt)("strong",{parentName:"p"},"Recent")," tab."),(0,a.kt)("h3",{id:"updating-project-files-on-the-server"},"Updating project files on the server"),(0,a.kt)("p",null,"4D Server automatically creates and sends the remote machines a ",(0,a.kt)("a",{parentName:"p",href:"/main/es/docs/19/Desktop/building#build-compiled-structure"},".4dz version")," of the ",(0,a.kt)("em",{parentName:"p"},".4DProject")," project file (not compressed) in interpreted mode."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An updated .4dz version of the project is automatically produced when necessary, ",(0,a.kt)("em",{parentName:"li"},"i.e.")," when the project has been modified and reloaded by 4D Server. The project is reloaded:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"automatically, when the 4D Server application window comes to the front of the OS or when the 4D application on the same machine saves a modification (see below)."),(0,a.kt)("li",{parentName:"ul"},"when the ",(0,a.kt)("inlineCode",{parentName:"li"},"RELOAD PROJECT")," command is executed. Calling this command is necessary for example when you have pulled a new version of the project from the source control platform.")))),(0,a.kt)("h3",{id:"updating-project-files-on-remote-machines"},"Updating project files on remote machines"),(0,a.kt)("p",null,"When an updated .4dz version of the project has been produced on 4D Server, connected remote 4D machines must log out and reconnect to 4D Server in order to benefit from the updated version."),(0,a.kt)("h2",{id:"using-4d-and-4d-server-on-the-same-machine"},"Using 4D and 4D Server on the same machine"),(0,a.kt)("p",null,"When 4D connects to a 4D Server on the same machine, the application behaves as 4D in single user mode and the design environment allows you to edit project files. This feature allows you to develop a client/server application in the same context as the deployment context."),(0,a.kt)("p",null,"Each time 4D performs a ",(0,a.kt)("strong",{parentName:"p"},"Save all")," action from the design environment (explicitly from ",(0,a.kt)("strong",{parentName:"p"},"File")," menu or implicitly by switching to application mode for example), 4D Server synchronously reloads project files. 4D waits for 4D Server to finish reloading the project files before it continues."),(0,a.kt)("p",null,"However, you need to pay attention to the following behavior differences compared to ",(0,a.kt)("a",{parentName:"p",href:"/main/es/docs/19/Project/architecture"},"standard project architecture"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'the userPreferences.{username} folder used by 4D is not the same folder used by 4D Server in the project folder. Instead, it is a dedicated folder, named "userPreferences", stored in the project system folder (i.e., the same location as when opening a .4dz project).'),(0,a.kt)("li",{parentName:"ul"},'the folder used by 4D for derived data is not the folder named "DerivedData" in the project folder. Instead it is a dedicated folder named "DerivedDataRemote" located in the project system folder.'),(0,a.kt)("li",{parentName:"ul"},"the catalog.4DCatalog file is not edited by 4D but by 4D Server. Catalog information is synchronised using client/server requests"),(0,a.kt)("li",{parentName:"ul"},"the directory.json file is not edited by 4D but by 4D Server. Directory information is synchronised using client/server requests"),(0,a.kt)("li",{parentName:"ul"},"4D uses its own internal components and plug-ins instead of those in 4D Server.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It is not recommended to install plug-ins or components at the 4D or 4D Server application level.")))}u.isMDXComponent=!0},79022:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/localremote-5c33fe5479db4c271ef3a6dabde98395.png"},71998:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/serverConnect-cb74aeff8307fbc27a084e5c6ec84144.png"},59606:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/serverConnect2-9dc60df13672f8189273aec3efcab19d.png"}}]);