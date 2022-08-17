"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94120],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},33727:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={id:"updates",title:"Documentation updates"},o=void 0,p={type:"mdx",permalink:"/docs/es/updates",source:"@site/src/pages/updates.md",title:"Documentation updates",description:"The list of main updates in this documentation. For general information about new features in the 4D products, see the release notes on doc.4d.com.",frontMatter:{id:"updates",title:"Documentation updates"}},s=[{value:"4D v19 R7",id:"4d-v19-r7",level:2},{value:"4D v19 R6",id:"4d-v19-r6",level:2},{value:"4D v19 R5",id:"4d-v19-r5",level:2},{value:"4D v19 R4",id:"4d-v19-r4",level:2},{value:"4D v19 R3",id:"4d-v19-r3",level:2},{value:"4D v19 R2",id:"4d-v19-r2",level:2},{value:"4D v19",id:"4d-v19",level:2},{value:"4D v18 R6",id:"4d-v18-r6",level:2}],m={toc:s};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)("wrapper",n({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The list of main updates in this documentation. For general information about new features in the 4D products, see the ",(0,r.kt)("strong",{parentName:"p"},"release notes")," on ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),"doc.4d.com"),". "),(0,r.kt)("h2",n({},{id:"4d-v19-r7"}),"4D v19 R7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related data and computed/alias attributes can be displayed in the ",(0,r.kt)("a",n({parentName:"li"},{href:"Admin/dataExplorer#basics"}),"Data Explorer"),"."),(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("a",n({parentName:"li"},{href:"API/FileHandleClass"}),"FileHandle")," class and new ",(0,r.kt)("a",n({parentName:"li"},{href:"API/FileClass#open"}),(0,r.kt)("inlineCode",{parentName:"a"},".open()"))," function in the ",(0,r.kt)("inlineCode",{parentName:"li"},"File")," class. "),(0,r.kt)("li",{parentName:"ul"},"4D View Pro: new table commands ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-get-tables"}),"VP Get tables"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-insert-table-columns"}),"VP INSERT TABLE COLUMNS"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-insert-table-rows"}),"VP INSERT TABLE ROWS"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-remove-table-columns"}),"VP REMOVE TABLE COLUMNS"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-remove-table-rows"}),"VP REMOVE TABLE ROWS"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-resize-table"}),"VP RESIZE TABLE"),".")),(0,r.kt)("h2",n({},{id:"4d-v19-r6"}),"4D v19 R6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("a",n({parentName:"li"},{href:"API/HTTPRequestClass"}),"HTTPRequest")," class."),(0,r.kt)("li",{parentName:"ul"},"Collection functions that can call code now support function objects as ",(0,r.kt)("em",{parentName:"li"},"formula")," parameter: ",(0,r.kt)("a",n({parentName:"li"},{href:"API/CollectionClass#every"}),(0,r.kt)("inlineCode",{parentName:"a"},".every()")),", ",(0,r.kt)("a",n({parentName:"li"},{href:"API/CollectionClass#filter"}),(0,r.kt)("inlineCode",{parentName:"a"},".filter()")),", ",(0,r.kt)("a",n({parentName:"li"},{href:"API/CollectionClass#find"}),(0,r.kt)("inlineCode",{parentName:"a"},".find()")),", ",(0,r.kt)("a",n({parentName:"li"},{href:"API/CollectionClass#findindex"}),(0,r.kt)("inlineCode",{parentName:"a"},".findIndex()")),", ",(0,r.kt)("a",n({parentName:"li"},{href:"API/CollectionClass#map"}),(0,r.kt)("inlineCode",{parentName:"a"},".map()")),", ",(0,r.kt)("a",n({parentName:"li"},{href:"API/CollectionClass#orderbymethod"}),(0,r.kt)("inlineCode",{parentName:"a"},".orderByMethod()")),", ",(0,r.kt)("a",n({parentName:"li"},{href:"API/CollectionClass#reduce"}),(0,r.kt)("inlineCode",{parentName:"a"},".reduce()")),", ",(0,r.kt)("a",n({parentName:"li"},{href:"API/CollectionClass#some"}),(0,r.kt)("inlineCode",{parentName:"a"},".some()")),", ",(0,r.kt)("a",n({parentName:"li"},{href:"API/CollectionClass#sort"}),(0,r.kt)("inlineCode",{parentName:"a"},".sort()"))),(0,r.kt)("li",{parentName:"ul"},"Listbox cells support ",(0,r.kt)("a",n({parentName:"li"},{href:"FormObjects/propertiesCoordinatesAndSizing#horizontal-padding"}),"horizontal")," and ",(0,r.kt)("a",n({parentName:"li"},{href:"FormObjects/propertiesCoordinatesAndSizing#vertical-padding"}),"vertical")," padding."),(0,r.kt)("li",{parentName:"ul"},"4D View Pro: new ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-create-table"}),"VP CREATE TABLE")," and ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-remove-table"}),"VP REMOVE TABLE")," commands to handle tables in sheets."),(0,r.kt)("li",{parentName:"ul"},"Ability to see related, computed, and alias attributes in the ",(0,r.kt)("a",n({parentName:"li"},{href:"Admin/dataExplorer#basics"}),"Web Data Explorer"),"."),(0,r.kt)("li",{parentName:"ul"},"New page explaining ",(0,r.kt)("a",n({parentName:"li"},{href:"Admin/data-collect"}),"why and how 4D collects data"),".")),(0,r.kt)("h2",n({},{id:"4d-v19-r5"}),"4D v19 R5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Built Client/Server applications: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The project ",(0,r.kt)("a",n({parentName:"li"},{href:"Users/editing#directoryjson-file"}),"directory.json file")," can now be ",(0,r.kt)("a",n({parentName:"li"},{href:"Desktop/building#embed-the-project-users-and-groups-in-built-server-application"}),"embedded in the server")," at build time, allowing you to deploy a client/server application with a basic security user and group configuration."),(0,r.kt)("li",{parentName:"ul"},"You can now ",(0,r.kt)("a",n({parentName:"li"},{href:"Desktop/building#deselecting-modules"}),"deselect useless modules")," in your built applications."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"ORDA/datastores#clientserver-optimization"}),"Client/Server optimization"),": New class functions allow you to handle the ORDA cache and the contents of an optimization context. See ",(0,r.kt)("a",n({parentName:"li"},{href:"ORDA/datastores#preconfiguring-contexts"}),"Preconfiguring contexts")," and ",(0,r.kt)("a",n({parentName:"li"},{href:"ORDA/datastores#orda-cache"}),"ORDA Cache")," for more information. ",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"These functions are intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use them."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"API/DataClassClass"}),"DataClass class"),": The new ",(0,r.kt)("a",n({parentName:"li"},{href:"API/DataClassClass#getcount"}),".getCount()")," function returns the number of entities in a dataclass."),(0,r.kt)("li",{parentName:"ul"},"4D View Pro: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The new ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-set-data-context"}),"VP SET DATA CONTEXT"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-get-data-context"}),"VP Get data context"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-set-binding-path"}),"VP SET BINDING PATH"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-get-binding-path"}),"VP Get binding path")," commands allow you to create data contexts and bind their contents to sheet cells. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-get-binding-path"}),"VP EXPORT DOCUMENT")," and ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-get-binding-path"}),"VP Export to object")," now accept the new ",(0,r.kt)("inlineCode",{parentName:"li"},"includeBindingSource")," option that exports the contents of a data context as cell values.")))),(0,r.kt)("h2",n({},{id:"4d-v19-r4"}),"4D v19 R4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"ORDA/ordaClasses#alias-attributes-1"}),"Alias attributes")," are available in ORDA classes."),(0,r.kt)("li",{parentName:"ul"},"Support for ",(0,r.kt)("a",n({parentName:"li"},{href:"Concepts/looping#break-and-continue"}),"break and continue")," statements in loops."),(0,r.kt)("li",{parentName:"ul"},"Support for ",(0,r.kt)("a",n({parentName:"li"},{href:"Concepts/control-flow#return-expression"}),"return")," statement and ",(0,r.kt)("a",n({parentName:"li"},{href:"Concepts/parameters#return-expression"}),"return expression")," to return values."),(0,r.kt)("li",{parentName:"ul"},"Support for ",(0,r.kt)("a",n({parentName:"li"},{href:"Concepts/operators#compound-assignment-operators"}),"compound assignment operators"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"Concepts/operators#short-circuit-operators"}),"short-circuit operators"),", and ",(0,r.kt)("a",n({parentName:"li"},{href:"Concepts/operators#ternary-operator"}),"ternary operator")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",n({parentName:"li"},{href:"code-editor/overview"}),"Code Editor")," now includes an dropdown tool and supports markers for better code navigation."),(0,r.kt)("li",{parentName:"ul"},"New Preferences: ",(0,r.kt)("a",n({parentName:"li"},{href:"Preferences/general#include-tokens-in-project-source-files"}),(0,r.kt)("strong",{parentName:"a"},"Include tokens in project source files"))," and ",(0,r.kt)("a",n({parentName:"li"},{href:"Preferences/methods#show-clipboards"}),(0,r.kt)("strong",{parentName:"a"},"Show clipboards"))," option on the Methods page."),(0,r.kt)("li",{parentName:"ul"},"New REST request to ",(0,r.kt)("a",n({parentName:"li"},{href:"REST/lock"}),"lock/unlock")," entities.   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/getting-started"}),"4D View Pro")," chapter added with new commands: ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-copy-to-object"}),"VP Copy to object"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-move-cells"}),"VP MOVE CELLS"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"ViewPro/method-list#vp-paste-from-object"}),"VP PASTE FROM OBJECT"),"."),(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("a",n({parentName:"li"},{href:"API/SystemWorkerClass"}),"SystemWorker class"),".")),(0,r.kt)("h2",n({},{id:"4d-v19-r3"}),"4D v19 R3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",n({parentName:"p"},{href:"Concepts/classes#function-get-and-function-set"}),"Computed properties")," are available in classes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",n({parentName:"p"},{href:"ORDA/ordaClasses#computed-attributes"}),"Computed attributes")," are available in ORDA classes. They are similar to computed properties but also support ",(0,r.kt)("a",n({parentName:"p"},{href:"ORDA/ordaClasses#function-query-attributename"}),"query")," and ",(0,r.kt)("a",n({parentName:"p"},{href:"ORDA/ordaClasses#function-orderby-attributename"}),"orderBy")," functions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New ORDA dataclass attributes: ",(0,r.kt)("a",n({parentName:"p"},{href:"API/DataClassAttributeClass#exposed"}),(0,r.kt)("inlineCode",{parentName:"a"},"exposed"))," and ",(0,r.kt)("a",n({parentName:"p"},{href:"API/DataClassAttributeClass#readonly"}),(0,r.kt)("inlineCode",{parentName:"a"},"readOnly")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",n({parentName:"p"},{href:"API/ZipArchiveClass#zip-create-archive"}),"ZIP archives")," now supports ",(0,r.kt)("em",{parentName:"p"},"LZMA")," and ",(0,r.kt)("em",{parentName:"p"},"xz")," compression algorithms. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",n({parentName:"p"},{href:"Desktop/building#allow-connection-of-silicon-mac-clients"}),"new build option")," makes it easier to include Silicon Mac clients in Server applications on Windows. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Extended ",(0,r.kt)("a",n({parentName:"p"},{href:"Preferences/general#appearance-macos-only"}),"support of dark mode")," on macOS.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support of ",(0,r.kt)("strong",{parentName:"p"},"OAuth2 token object")," in ",(0,r.kt)("a",n({parentName:"p"},{href:"API/IMAPTransporterClass#imap-new-transporter"}),(0,r.kt)("inlineCode",{parentName:"a"},"IMAP New transporter")),", ",(0,r.kt)("a",n({parentName:"p"},{href:"API/POP3TransporterClass#pop3-new-transporter"}),(0,r.kt)("inlineCode",{parentName:"a"},"POP3 New transporter")),", and ",(0,r.kt)("a",n({parentName:"p"},{href:"API/SMTPTransporterClass#smtp-new-transporter"}),(0,r.kt)("inlineCode",{parentName:"a"},"SMTP New transporter")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Users can now load a ",(0,r.kt)("a",n({parentName:"p"},{href:"Debugging/debugLogFiles#using-a-log-configuration-file"}),"log configuration file")," using a button in the ",(0,r.kt)("a",n({parentName:"p"},{href:"ServerWindow/maintenance#load-logs-configuration-file"}),"server administration window"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Handling ",(0,r.kt)("a",n({parentName:"p"},{href:"Concepts/parameters#optional-parameters"}),"optional parameters")," is more flexible in the 4D language.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Debugging web server sessions ",(0,r.kt)("a",n({parentName:"p"},{href:"WebServer/sessions#preemptive-mode"}),"is easier on 4D Server"),". ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The new ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/4d/4D-NetKit"}),"4D NetKit")," component allows you to connect to third-party APIs such as Microsoft Graph."))),(0,r.kt)("h2",n({},{id:"4d-v19-r2"}),"4D v19 R2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",n({parentName:"li"},{href:"Preferences/general#create-gitignore-file"}),"default .gitignore file")," can be created with new projects"),(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("a",n({parentName:"li"},{href:"API/BlobClass"}),"Blob class API")," to handle new ",(0,r.kt)("a",n({parentName:"li"},{href:"Concepts/dt_blob#blob-types"}),(0,r.kt)("inlineCode",{parentName:"a"},"4D.Blob")," objects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"no-bom")," support and new default end-of-line characters in ",(0,r.kt)("a",n({parentName:"li"},{href:"API/FileClass#settext"}),(0,r.kt)("inlineCode",{parentName:"a"},".setText()")))),(0,r.kt)("h2",n({},{id:"4d-v19"}),"4D v19"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"API/IMAPTransporterClass"}),"IMAPTransporter Class"),": new ",(0,r.kt)("inlineCode",{parentName:"li"},".createBox()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".deleteBox()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".renameBox()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".subscribe()"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},".unsubscribe()")," functions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"API/FileClass"}),"File Class"),": new ",(0,r.kt)("inlineCode",{parentName:"li"},"setAppInfo()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"getAppInfo()")," functions."),(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("a",n({parentName:"li"},{href:"Tags/#4deach-and-4dendeach"}),"4DEACH")," transformation tag."),(0,r.kt)("li",{parentName:"ul"},"Web Server: new ",(0,r.kt)("a",n({parentName:"li"},{href:"WebServer/webServerConfig#session-cookie-samesite"}),"SameSite session cookie")," setting. "),(0,r.kt)("li",{parentName:"ul"},"Dark and light color scheme support for ",(0,r.kt)("a",n({parentName:"li"},{href:"FormEditor/propertiesForm#color-scheme"}),"forms")," and ",(0,r.kt)("a",n({parentName:"li"},{href:"FormEditor/stylesheets#media-queries"}),"style sheets")),(0,r.kt)("li",{parentName:"ul"},"New default dark and light themes in ",(0,r.kt)("a",n({parentName:"li"},{href:"Preferences/methods#theme-list"}),"Code Editor preferences"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"Project/compiler#compiler-methods-for"}),"Native compilation")," for Silicon processors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"FormObjects/propertiesObject#variable-calculation"}),"Variable calculation")," property is now supported by entity selection list box columns."),(0,r.kt)("li",{parentName:"ul"},"New, comprehensive ",(0,r.kt)("a",n({parentName:"li"},{href:"Admin/cli"}),"CLI")," page.")),(0,r.kt)("h2",n({},{id:"4d-v18-r6"}),"4D v18 R6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"API/EntitySelectionClass"}),"Entity Selection Class"),": ",(0,r.kt)("inlineCode",{parentName:"li"},".average()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".max()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".min()")," functions now return ",(0,r.kt)("em",{parentName:"li"},"undefined")," if the entity selection is empty."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"API/IMAPTransporterClass"}),"IMAP Mail"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"API/POP3TransporterClass"}),"POP3 Mail")," and ",(0,r.kt)("a",n({parentName:"li"},{href:"API/SMTPTransporterClass"}),"SMTP Mail"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"authenticationMode")," property enables OAuth 2.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"API/IMAPTransporterClass"}),"IMAP Mail"),": new ",(0,r.kt)("inlineCode",{parentName:"li"},".expunge()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".append()")," functions"),(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("a",n({parentName:"li"},{href:"Admin/webAdmin"}),"WebAdmin")," web server component"),(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("a",n({parentName:"li"},{href:"Admin/dataExplorer"}),"DataExplorer")," interface"),(0,r.kt)("li",{parentName:"ul"},"New web ",(0,r.kt)("a",n({parentName:"li"},{href:"WebServer/sessions"}),"user sessions")," and ",(0,r.kt)("a",n({parentName:"li"},{href:"API/SessionClass"}),"their API"),".")))}d.isMDXComponent=!0}}]);