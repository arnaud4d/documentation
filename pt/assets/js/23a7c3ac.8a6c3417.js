"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5880],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97049:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"updates",title:"Documentation updates"},l=void 0,s={unversionedId:"Notes/updates",id:"Notes/updates",title:"Documentation updates",description:"The list of main updates in this documentation. For general information about new features in the 4D products, see the release notes on doc.4d.com.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/Notes/updates.md",sourceDirName:"Notes",slug:"/Notes/updates",permalink:"/docs/pt/next/Notes/updates",draft:!1,tags:[],version:"current",frontMatter:{id:"updates",title:"Documentation updates"}},p={},d=[{value:"4D v19 R7",id:"4d-v19-r7",level:2},{value:"4D v19 R6",id:"4d-v19-r6",level:2},{value:"4D v19 R5",id:"4d-v19-r5",level:2},{value:"4D v19 R4",id:"4d-v19-r4",level:2},{value:"4D v19 R3",id:"4d-v19-r3",level:2},{value:"4D v19 R2",id:"4d-v19-r2",level:2},{value:"4D v19",id:"4d-v19",level:2},{value:"4D v18 R6",id:"4d-v18-r6",level:2}],c={toc:d};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The list of main updates in this documentation. For general information about new features in the 4D products, see the ",(0,n.kt)("strong",{parentName:"p"},"release notes")," on ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com"}),"doc.4d.com"),"."),(0,n.kt)("h2",r({},{id:"4d-v19-r7"}),"4D v19 R7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related data and computed/alias attributes can be displayed in the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Admin/dataExplorer#basics"}),"Data Explorer"),"."),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/FileHandleClass"}),"FileHandle")," class and new ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/FileClass#open"}),(0,n.kt)("inlineCode",{parentName:"a"},".open()"))," function in the ",(0,n.kt)("inlineCode",{parentName:"li"},"File")," class.")),(0,n.kt)("h2",r({},{id:"4d-v19-r6"}),"4D v19 R6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/HTTPRequestClass"}),"HTTPRequest")," class."),(0,n.kt)("li",{parentName:"ul"},"Collection functions that can call code now support function objects as ",(0,n.kt)("em",{parentName:"li"},"formula")," parameter: ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/CollectionClass#every"}),(0,n.kt)("inlineCode",{parentName:"a"},".every()")),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/CollectionClass#filter"}),(0,n.kt)("inlineCode",{parentName:"a"},".filter()")),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/CollectionClass#find"}),(0,n.kt)("inlineCode",{parentName:"a"},".find()")),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/CollectionClass#findindex"}),(0,n.kt)("inlineCode",{parentName:"a"},".findIndex()")),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/CollectionClass#map"}),(0,n.kt)("inlineCode",{parentName:"a"},".map()")),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/CollectionClass#orderbymethod"}),(0,n.kt)("inlineCode",{parentName:"a"},".orderByMethod()")),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/CollectionClass#reduce"}),(0,n.kt)("inlineCode",{parentName:"a"},".reduce()")),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/CollectionClass#some"}),(0,n.kt)("inlineCode",{parentName:"a"},".some()")),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/CollectionClass#sort"}),(0,n.kt)("inlineCode",{parentName:"a"},".sort()"))),(0,n.kt)("li",{parentName:"ul"},"Listbox cells support ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#horizontal-padding"}),"horizontal")," and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing#vertical-padding"}),"vertical")," padding."),(0,n.kt)("li",{parentName:"ul"},"4D View Pro: new ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ViewPro/method-list#vp-create-table"}),"VP CREATE TABLE")," and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ViewPro/method-list#vp-remove-table"}),"VP REMOVE TABLE")," commands to handle tables in sheets."),(0,n.kt)("li",{parentName:"ul"},"Ability to see related, computed, and alias attributes in the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Admin/dataExplorer#basics"}),"Web Data Explorer"),"."),(0,n.kt)("li",{parentName:"ul"},"New page explaining ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Admin/data-collect"}),"why and how 4D collects data"),".")),(0,n.kt)("h2",r({},{id:"4d-v19-r5"}),"4D v19 R5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Built Client/Server applications:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The project ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Users/editing#directoryjson-file"}),"directory.json file")," can now be ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Desktop/building#embed-the-project-users-and-groups-in-built-server-application"}),"embedded in the server")," at build time, allowing you to deploy a client/server application with a basic security user and group configuration."),(0,n.kt)("li",{parentName:"ul"},"You can now ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Desktop/building#deselecting-modules"}),"deselect useless modules")," in your built applications."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/ORDA/datastores#clientserver-optimization"}),"Client/Server optimization"),": New class functions allow you to handle the ORDA cache and the contents of an optimization context. See ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/ORDA/datastores#preconfiguring-contexts"}),"Preconfiguring contexts")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/ORDA/datastores#orda-cache"}),"ORDA Cache")," for more information."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"These functions are intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use them."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/API/DataClassClass"}),"DataClass class"),": The new ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/API/DataClassClass#getcount"}),".getCount()")," function returns the number of entities in a dataclass.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"4D View Pro:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The new ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ViewPro/method-list#vp-set-data-context"}),"VP SET DATA CONTEXT"),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ViewPro/method-list#vp-get-data-context"}),"VP Get data context"),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ViewPro/method-list#vp-set-binding-path"}),"VP SET BINDING PATH"),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ViewPro/method-list#vp-get-binding-path"}),"VP Get binding path")," commands allow you to create data contexts and bind their contents to sheet cells."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ViewPro/method-list#vp-get-binding-path"}),"VP EXPORT DOCUMENT")," and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ViewPro/method-list#vp-get-binding-path"}),"VP Export to object")," now accept the new ",(0,n.kt)("inlineCode",{parentName:"li"},"includeBindingSource")," option that exports the contents of a data context as cell values.")))),(0,n.kt)("h2",r({},{id:"4d-v19-r4"}),"4D v19 R4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/ORDA/ordaClasses#alias-attributes-1"}),"Alias attributes")," are available in ORDA classes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support for ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/Concepts/looping#break-and-continue"}),"break and continue")," statements in loops.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support for ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/Concepts/control-flow#return-expression"}),"return")," statement and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/Concepts/parameters#return-expression"}),"return expression")," to return values.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support for ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/Concepts/operators#compound-assignment-operators"}),"compound assignment operators"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/Concepts/operators#short-circuit-operators"}),"short-circuit operators"),", and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/Concepts/operators#ternary-operator"}),"ternary operator"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("a",r({parentName:"p"},{href:"../code-editor/navigation.md"}),"Code Editor")," now includes an dropdown tool and supports markers for better code navigation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"New Preferences: ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/Preferences/general#include-tokens-in-project-source-files"}),(0,n.kt)("strong",{parentName:"a"},"Include tokens in project source files"))," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/Preferences/methods#show-clipboards"}),(0,n.kt)("strong",{parentName:"a"},"Show clipboards"))," option on the Methods page.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"New REST request to ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/REST/lock"}),"lock/unlock")," entities.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/ViewPro/getting-started"}),"4D View Pro")," chapter added with new commands: ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/ViewPro/method-list#vp-copy-to-object"}),"VP Copy to object"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/ViewPro/method-list#vp-move-cells"}),"VP MOVE CELLS"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/ViewPro/method-list#vp-paste-from-object"}),"VP PASTE FROM OBJECT"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"New ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/next/API/SystemWorkerClass"}),"SystemWorker class"),"."))),(0,n.kt)("h2",r({},{id:"4d-v19-r3"}),"4D v19 R3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Concepts/classes#function-get-and-function-set"}),"Computed properties")," are available in classes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ORDA/ordaClasses#computed-attributes"}),"Computed attributes")," are available in ORDA classes. They are similar to computed properties but also support ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ORDA/ordaClasses#function-query-attributename"}),"query")," and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ORDA/ordaClasses#function-orderby-attributename"}),"orderBy")," functions."),(0,n.kt)("li",{parentName:"ul"},"New ORDA dataclass attributes: ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/DataClassAttributeClass#exposed"}),(0,n.kt)("inlineCode",{parentName:"a"},"exposed"))," and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/DataClassAttributeClass#readonly"}),(0,n.kt)("inlineCode",{parentName:"a"},"readOnly")),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/ZipArchiveClass#zip-create-archive"}),"ZIP archives")," now supports ",(0,n.kt)("em",{parentName:"li"},"LZMA")," and ",(0,n.kt)("em",{parentName:"li"},"xz")," compression algorithms."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Desktop/building#allow-connection-of-silicon-mac-clients"}),"new build option")," makes it easier to include Silicon Mac clients in Server applications on Windows."),(0,n.kt)("li",{parentName:"ul"},"Extended ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Preferences/general#appearance-macos-only"}),"support of dark mode")," on macOS."),(0,n.kt)("li",{parentName:"ul"},"Support of ",(0,n.kt)("strong",{parentName:"li"},"OAuth2 token object")," in ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/IMAPTransporterClass#imap-new-transporter"}),(0,n.kt)("inlineCode",{parentName:"a"},"IMAP New transporter")),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/POP3TransporterClass#pop3-new-transporter"}),(0,n.kt)("inlineCode",{parentName:"a"},"POP3 New transporter")),", and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/SMTPTransporterClass#smtp-new-transporter"}),(0,n.kt)("inlineCode",{parentName:"a"},"SMTP New transporter")),"."),(0,n.kt)("li",{parentName:"ul"},"Users can now load a ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Debugging/debugLogFiles#using-a-log-configuration-file"}),"log configuration file")," using a button in the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/ServerWindow/maintenance#load-logs-configuration-file"}),"server administration window"),"."),(0,n.kt)("li",{parentName:"ul"},"Handling ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Concepts/parameters#optional-parameters"}),"optional parameters")," is more flexible in the 4D language."),(0,n.kt)("li",{parentName:"ul"},"Debugging web server sessions ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/WebServer/sessions#preemptive-mode"}),"is easier on 4D Server"),"."),(0,n.kt)("li",{parentName:"ul"},"The new ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Extensions/overview#list-of-4d-components"}),"4D NetKit")," component allows you to connect to third-party APIs such as Microsoft Graph.")),(0,n.kt)("h2",r({},{id:"4d-v19-r2"}),"4D v19 R2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Preferences/general#create-gitignore-file"}),"default .gitignore file")," can be created with new projects"),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/BlobClass"}),"Blob class API")," to handle new ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Concepts/blob#blob-types"}),(0,n.kt)("inlineCode",{parentName:"a"},"4D.Blob")," objects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"no-bom")," support and new default end-of-line characters in ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/FileClass#settext"}),(0,n.kt)("inlineCode",{parentName:"a"},".setText()")))),(0,n.kt)("h2",r({},{id:"4d-v19"}),"4D v19"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/IMAPTransporterClass"}),"IMAPTransporter Class"),": new ",(0,n.kt)("inlineCode",{parentName:"li"},".createBox()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},".deleteBox()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},".renameBox()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},".subscribe()"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},".unsubscribe()")," functions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/FileClass"}),"File Class"),": new ",(0,n.kt)("inlineCode",{parentName:"li"},"setAppInfo()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"getAppInfo()")," functions."),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Tags/tags#4deach-and-4dendeach"}),"4DEACH")," transformation tag."),(0,n.kt)("li",{parentName:"ul"},"Web Server: new ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/WebServer/webServerConfig#session-cookie-samesite"}),"SameSite session cookie")," setting."),(0,n.kt)("li",{parentName:"ul"},"Dark and light color scheme support for ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/FormEditor/propertiesForm#color-scheme"}),"forms")," and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/FormEditor/stylesheets#media-queries"}),"style sheets")),(0,n.kt)("li",{parentName:"ul"},"New default dark and light themes in ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Preferences/methods#theme-list"}),"Code Editor preferences"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Project/compiler#compiler-methods-for"}),"Native compilation")," for Silicon processors."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/FormObjects/propertiesObject#variable-calculation"}),"Variable calculation")," property is now supported by entity selection list box columns."),(0,n.kt)("li",{parentName:"ul"},"New, comprehensive ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Admin/cli"}),"CLI")," page.")),(0,n.kt)("h2",r({},{id:"4d-v18-r6"}),"4D v18 R6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/EntitySelectionClass"}),"Entity Selection Class"),": ",(0,n.kt)("inlineCode",{parentName:"li"},".average()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},".max()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},".min()")," functions now return ",(0,n.kt)("em",{parentName:"li"},"undefined")," if the entity selection is empty."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/IMAPTransporterClass"}),"IMAP Mail"),", ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/POP3TransporterClass"}),"POP3 Mail")," and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/SMTPTransporterClass"}),"SMTP Mail"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"authenticationMode")," property enables OAuth 2.0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/IMAPTransporterClass"}),"IMAP Mail"),": new ",(0,n.kt)("inlineCode",{parentName:"li"},".expunge()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},".append()")," functions"),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Admin/webAdmin"}),"WebAdmin")," web server component"),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/Admin/dataExplorer"}),"DataExplorer")," interface"),(0,n.kt)("li",{parentName:"ul"},"New web ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/WebServer/sessions"}),"user sessions")," and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/next/API/SessionClass"}),"their API"),".")))}m.isMDXComponent=!0}}]);