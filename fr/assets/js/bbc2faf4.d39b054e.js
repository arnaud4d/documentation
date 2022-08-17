"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var a=n(3905),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"general",title:"General Page"},h=void 0,m={unversionedId:"Preferences/general",id:"version-19-R6/Preferences/general",title:"General Page",description:"This page contains various options to configure the general operation of your 4D application.",source:"@site/versioned_docs/version-19-R6/Preferences/general.md",sourceDirName:"Preferences",slug:"/Preferences/general",permalink:"/docs/fr/Preferences/general",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"general",title:"General Page"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/fr/Preferences/overview"},next:{title:"Structure Page",permalink:"/docs/fr/Preferences/structure"}},g={},f=[{value:"Options",id:"options",level:2},{value:"At startup",id:"at-startup",level:3},{value:"Automatic form creation",id:"automatic-form-creation",level:3},{value:"Window tabbing (macOS only)",id:"window-tabbing-macos-only",level:3},{value:"Appearance (macOS only)",id:"appearance-macos-only",level:3},{value:"Exit Design when going to Application Environment",id:"exit-design-when-going-to-application-environment",level:3},{value:"Enable binary database creation",id:"enable-binary-database-creation",level:3},{value:"When creating a new project",id:"when-creating-a-new-project",level:2},{value:"Use Log File",id:"use-log-file",level:3},{value:"Create package",id:"create-package",level:3},{value:"Include tokens in project source files",id:"include-tokens-in-project-source-files",level:3},{value:"Excluding tokens in existing projects",id:"excluding-tokens-in-existing-projects",level:4},{value:"Create <code>.gitignore</code> file",id:"create-gitignore-file",level:3},{value:"Language of text comparison",id:"language-of-text-comparison",level:3},{value:"Documentation Location",id:"documentation-location",level:2},{value:"Documentation language",id:"documentation-language",level:3},{value:"Look in the local folder first",id:"look-in-the-local-folder-first",level:3},{value:"Local folder",id:"local-folder",level:3}],k={toc:f};function b(e){var t,o=e,{components:p}=o,d=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(o,["components"]);return(0,a.kt)("wrapper",(t=u(u({},k),d),i(t,r({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This page contains various options to configure the general operation of your 4D application."),(0,a.kt)("h2",u({},{id:"options"}),"Options"),(0,a.kt)("h3",u({},{id:"at-startup"}),"At startup"),(0,a.kt)("p",null,"This option allows you to configure the default 4D display at startup, when the user launches only the application."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do nothing"),": Only the application window appears, empty."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Open Local Project dialog"),": 4D displays a standard open document dialog box, allowing you to select a local project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Open last used project"),": 4D directly opens the last project used; no opening dialog box appears. ",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"To force the display of the opening dialog box when this option is selected, hold down the ",(0,a.kt)("strong",{parentName:"p"},"Alt")," (Windows) or ",(0,a.kt)("strong",{parentName:"p"},"Option")," (macOS) key while launching the project."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Open Remote Project dialog"),": 4D displays the standard 4D Server logon dialog, allowing you to select a project published on the network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Open Welcome Wizard dialog")," (factory setting): 4D displays the Welcome Wizard dialog box.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"4D Server"),": The 4D Server application ignores this option. In this environment, the ",(0,a.kt)("strong",{parentName:"p"},"Do nothing")," mode is always used.")),(0,a.kt)("h3",u({},{id:"automatic-form-creation"}),"Automatic form creation"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This option is only used in binary databases; it is ignored in project architecture. See doc.4d.com.")),(0,a.kt)("h3",u({},{id:"window-tabbing-macos-only"}),"Window tabbing (macOS only)"),(0,a.kt)("p",null,"Starting with macOS Sierra, Mac applications can benefit from the Automatic Window Tabbing feature that helps organizing multiple windows: document windows are stacked into a single parent window and can be browsed through tabs. This feature is useful on small screens and/or when using a trackpad."),(0,a.kt)("p",null,"You can benefit from this feature in the following environments (with 4D 64-bit versions only):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code Editor windows"),(0,a.kt)("li",{parentName:"ul"},"Form Editor windows")),(0,a.kt)("p",null,"All windows from these editors can be put in tab form:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(77563).Z,width:"1094",height:"316"})),(0,a.kt)("p",null,"A set of commands in the ",(0,a.kt)("strong",{parentName:"p"},"Window")," menu allows managing the tabs:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5567).Z,width:"352",height:"173"})),(0,a.kt)("p",null,"In the 4D's Preferences dialog box, the ",(0,a.kt)("strong",{parentName:"p"},"Window tabbing")," option allows you to control this feature:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5419).Z,width:"864",height:"296"})),(0,a.kt)("p",null,"Three options are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"According to System Preferences")," (default): 4D windows will behave like defined in the macOS System Preferences (In full screen, Always, or Manually)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Never"),": Opening a new document in 4D form editor or Code Editor will always result in creating a new window (tabs are never created)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Always"),": Opening a new document in 4D form editor or method editors will always result in creating a new tab.")),(0,a.kt)("h3",u({},{id:"appearance-macos-only"}),"Appearance (macOS only)"),(0,a.kt)("p",null,"This menu lets you select the color scheme to use for the ",(0,a.kt)("strong",{parentName:"p"},"4D development")," environment. The specified scheme will be applied to all editors and windows of the Design mode. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can also set the color scheme to use in your ",(0,a.kt)("strong",{parentName:"p"},"desktop applications"),' in the "Interface" page of the Settings dialog box.  ')),(0,a.kt)("p",null,"Three options are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"According to System Color Scheme Preferences")," (default): Use the color scheme defined in the macOS System Preferences."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Light"),": Use the Light Theme"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dark"),": Use the Dark Theme")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'This preference is only supported on macOS. On Windows, the "Light" scheme is always used.')),(0,a.kt)("h3",u({},{id:"exit-design-when-going-to-application-environment"}),"Exit Design when going to Application Environment"),(0,a.kt)("p",null,"If this option is checked, when the user switches to the Application environment using the ",(0,a.kt)("strong",{parentName:"p"},"Test Application")," menu command, all the windows of the Design environment are closed. If this option is not checked (factory setting), the windows of the Design environment remain visible in the background of the Application environment."),(0,a.kt)("h3",u({},{id:"enable-binary-database-creation"}),"Enable binary database creation"),(0,a.kt)("p",null,"If you check this option, two items are added in the ",(0,a.kt)("strong",{parentName:"p"},"File > New")," menu and the ",(0,a.kt)("strong",{parentName:"p"},"New")," toolbar button:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Database...")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Database from Structure Definition..."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(56860).Z,width:"599",height:"239"})),(0,a.kt)("p",null,"These items allow you to create binary databases (see ",(0,a.kt)("a",u({parentName:"p"},{href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html"}),"Creating a new database")," section). They are no longer proposed by default because 4D recommends using project-based architecture for new developments. "),(0,a.kt)("h2",u({},{id:"when-creating-a-new-project"}),"When creating a new project"),(0,a.kt)("h3",u({},{id:"use-log-file"}),"Use Log File"),(0,a.kt)("p",null,"When this option is checked, a log file is automatically started and used when a new database is created. For more information, please refer to ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/fr/Backup/log"}),"Log file (.journal)"),"."),(0,a.kt)("h3",u({},{id:"create-package"}),"Create package"),(0,a.kt)("p",null,"When this option is checked, 4D databases are automatically created in a folder suffixed .4dbase. "),(0,a.kt)("p",null,"Thanks to this principle, under macOS the database folders appear as packages having specific properties. Under Windows, this has no particular impact."),(0,a.kt)("h3",u({},{id:"include-tokens-in-project-source-files"}),"Include tokens in project source files"),(0,a.kt)("p",null,"When this option is checked, saved ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/fr/Project/architecture#sources"}),"method source files")," in new 4D projects will contain ",(0,a.kt)("strong",{parentName:"p"},"tokens")," for classic language and database objects (constants, commands, tables and fields). Tokens are additional characters such as ",(0,a.kt)("inlineCode",{parentName:"p"},":C10")," or ",(0,a.kt)("inlineCode",{parentName:"p"},":5")," inserted in the source code files, that allow renaming tables and fields and identifying elements whatever the 4D version (see ",(0,a.kt)("a",u({parentName:"p"},{href:"https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html"}),"Using tokens in formulas"),")."),(0,a.kt)("p",null,"If you intend to use VCS or external code editors with your new projects, you might want to uncheck this option for a better readability of the code with these tools. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This option can only be applied to projects (binary databases always include tokens).")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can always get the code with tokens by calling ",(0,a.kt)("a",u({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1190.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"METHOD GET CODE"))," with 1 in the ",(0,a.kt)("em",{parentName:"p"},"option")," parameter.")),(0,a.kt)("h4",u({},{id:"excluding-tokens-in-existing-projects"}),"Excluding tokens in existing projects"),(0,a.kt)("p",null,"You can configure your existing projects to save code ",(0,a.kt)("strong",{parentName:"p"},"without tokens")," by inserting the following key in the ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/fr/Project/architecture#applicationname4dproject-file"}),(0,a.kt)("inlineCode",{parentName:"a"},"<applicationName>.4DProject"))," file using a text editor:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),'"tokenizedText": false\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This setting is only taken into account when methods are saved. Existing methods in your projects are left untouched, unless you resave them. ")),(0,a.kt)("h3",u({},{id:"create-gitignore-file"}),"Create ",(0,a.kt)("inlineCode",{parentName:"h3"},".gitignore")," file"),(0,a.kt)("p",null,"You might need or want git to ignore some files in your new projects.  "),(0,a.kt)("p",null,"You can set this preference by checking the ",(0,a.kt)("strong",{parentName:"p"},"Create .gitignore file"),"  option."),(0,a.kt)("p",null,"When a project is created in 4D and that box is checked, 4D creates a ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file at the same level as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Project")," folder (see ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/fr/Project/architecture#gitignore-file-optional"}),"Architecture of a Project"),")."),(0,a.kt)("p",null,"You can define the default contents of the ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file by clicking the pencil icon. This will open the .gitignore configuration file in your text editor. The contents of this file will be used to generate the ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," files in your new projects."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",u({parentName:"p"},{href:"https://git-scm.com/docs/gitignore"}),"official git documentation")," is a great resource to understand how ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," files work. "),(0,a.kt)("h3",u({},{id:"language-of-text-comparison"}),"Language of text comparison"),(0,a.kt)("p",null,"This parameter configures the default language used for character string processing and comparison in new databases. The language choice has a direct influence on the sorting and searching of text, as well as the character case, but it has no effect on the translation of texts or on the date, time or currency formats, which remain in the system language. By default (factory setting), 4D uses the current user language set in the system."),(0,a.kt)("p",null,"A 4D database can thus operate in a language different from that of the system. When a database is opened, the 4D engine detects the language used by the data file and provides it to the language (interpreter or compiled mode). Text comparisons, regardless of whether they are carried out by the database engine or the language, are done in the same language."),(0,a.kt)("p",null,"When creating a new data file, 4D uses the language previously set in this menu. When opening a data file that is not in the same language as the structure, the data file language is used and the language code is copied into the structure. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can modify this parameter for the open database using the Database Settings (see ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/fr/settings/database#text-comparison"}),"Text comparison"),").")),(0,a.kt)("h2",u({},{id:"documentation-location"}),"Documentation Location"),(0,a.kt)("p",null,"This area configures access to the 4D HTML documentation displayed in your current browser:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When you hit the ",(0,a.kt)("strong",{parentName:"li"},"F1")," key while the cursor is inserted in a 4D class function or command name in the Code Editor;"),(0,a.kt)("li",{parentName:"ul"},"When you double-click on a 4D command in the ",(0,a.kt)("strong",{parentName:"li"},"Commands Page")," of the Explorer.")),(0,a.kt)("h3",u({},{id:"documentation-language"}),"Documentation language"),(0,a.kt)("p",null,"Language of the HTML documentation to display. You can select a documentation in a different language from the application language."),(0,a.kt)("h3",u({},{id:"look-in-the-local-folder-first"}),"Look in the local folder first"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This option is only taken into account for command documentation access (excluding class functions). ")),(0,a.kt)("p",null,"Sets where 4D will look for documentation pages."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When checked (default), 4D first looks for the page in the local folder (see below). If it is found, 4D displays the page in the current browser. If not, 4D automatically looks for it in the on-line documentation Web site. This makes it possible to access the documentation even when you are offline."),(0,a.kt)("li",{parentName:"ul"},"When not checked, 4D looks for the desired page directly in the on-line documentation Web site and displays it in the current browser. If it is not found, 4D displays an error message in the browser.")),(0,a.kt)("h3",u({},{id:"local-folder"}),"Local folder"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This option is only taken into account for command documentation access (excluding class functions). ")),(0,a.kt)("p",null,"Indicates the location of the static HTML documentation. By default, this is the \\Help\\Command\\language subfolder. You can view the location by clicking on the menu associated with the area. If this subfolder is not present, the location is shown in red. "),(0,a.kt)("p",null,"You can modify this location as desired, for example if you want to display the documentation in a language different from that of the application. The static HTML documentation can be located on another volume, on a web server, etc. To designate a different location, click on the ",(0,a.kt)("strong",{parentName:"p"},"[...]")," button next to the entry area and choose a documentation root folder (folder corresponding to the language: ",(0,a.kt)("inlineCode",{parentName:"p"},"fr"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"en"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"es"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"de")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ja"),")."))}b.isMDXComponent=!0},77563:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/general2-948c70c01e7b5824ffd053658a50ffeb.png"},5567:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/general3-3b8bdcccc3a3e646ae1a9e1cdaf1c9f2.png"},5419:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/general4-273b030d0b728e88f5c7343ebc2d00ce.png"},56860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/general5-d52f6fe46e4e88a688517bb2ecde6908.png"}}]);