"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=l,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44608:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=["components"],i={id:"cli",title:"Command Line Interface"},s=void 0,p={unversionedId:"Admin/cli",id:"version-19/Admin/cli",title:"Command Line Interface",description:"You can use the macOS Terminal or the Windows console to drive your 4D applications (4D and 4D Server) using command lines. More particularly, this functionality allows you to:",source:"@site/versioned_docs/version-19/Admin/cli.md",sourceDirName:"Admin",slug:"/Admin/cli",permalink:"/docs/19/Admin/cli",draft:!1,tags:[],version:"19",frontMatter:{id:"cli",title:"Command Line Interface"},sidebar:"docs",previous:{title:"TLS Protocol (HTTPS)",permalink:"/docs/19/Admin/tls"},next:{title:"Description of log files",permalink:"/docs/19/Admin/debugLogFiles"}},d={},m=[{value:"Basic information",id:"basic-information",level:2},{value:"Launch a 4D application",id:"launch-a-4d-application",level:2},{value:"Examples",id:"examples",level:3}],c={toc:m};function u(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use the macOS Terminal or the Windows console to drive your 4D applications (4D and 4D Server) using command lines. More particularly, this functionality allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"launch a database remotely, which can be especially useful for administering Web servers."),(0,r.kt)("li",{parentName:"ul"},"run automatic tests for your applications.")),(0,r.kt)("h2",{id:"basic-information"},"Basic information"),(0,r.kt)("p",null,"You can execute command lines for 4D applications using the macOS Terminal or the Windows Console."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under macOS, you should use the ",(0,r.kt)("inlineCode",{parentName:"li"},"open")," command."),(0,r.kt)("li",{parentName:"ul"},"Under Windows, you can just pass the arguments directly.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Under macOS, you can pass the arguments directly by going to the folder where the application is found inside the package (Contents/MacOS path), which allows to address the stderr stream. For example, if the 4D package is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyFolder")," folder, you must write the command line as follows: ",(0,r.kt)("inlineCode",{parentName:"p"},"/MyFolder/4D.app/Contents/MacOS/4D"),". However, we recommend that you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," command whenever you do not need to access the stderr stream.")),(0,r.kt)("h2",{id:"launch-a-4d-application"},"Launch a 4D application"),(0,r.kt)("p",null,"Here is a description of command lines and the arguments supported to launch 4D applications."),(0,r.kt)("p",null,"Syntax: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]] \n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]\n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"applicationPath")),(0,r.kt)("td",{parentName:"tr",align:null},"Path of the 4D, 4D Server or merged application"),(0,r.kt)("td",{parentName:"tr",align:null},"Launches the application. Identical to double-clicking the 4D application. When called without structure file argument, the application is executed and the 'select database' dialog box appears.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--version")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dispays application version and exits")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--help")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dispays help and exits. Alternate arguments: -?, -h")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--project")),(0,r.kt)("td",{parentName:"tr",align:null},"projectPath ","|"," packagePath ","|"," 4dlinkPath"),(0,r.kt)("td",{parentName:"tr",align:null},"Project file to open with the current data file. No dialog box appears.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--data")),(0,r.kt)("td",{parentName:"tr",align:null},"dataPath"),(0,r.kt)("td",{parentName:"tr",align:null},"Data file to open with the designated project file. If not specified, 4D uses the last opened data file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--opening-mode")),(0,r.kt)("td",{parentName:"tr",align:null},"interpreted ","|"," compiled"),(0,r.kt)("td",{parentName:"tr",align:null},"Requests database to open in interpreted or compiled mode. No error is thrown if the requested mode is unavailable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--create-data")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'Automatically creates a new data file if no valid data file is found. No dialog box appears. 4D uses the file name passed in the "--data" argument if any (generates an error if a file with the same name already exists).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--user-param")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom user string"),(0,r.kt)("td",{parentName:"tr",align:null},'A string that will be available within the 4D application through the Get database parameter command (the string must not start with a "-" character, which is reserved).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--headless")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Launches the 4D, 4D Server or merged application without interface (headless mode). In this mode:",(0,r.kt)("li",null," The Design mode is not available, database starts in Application mode"),(0,r.kt)("li",null," No toolbar, menu bar, MDI window or splash screen is displayed"),(0,r.kt)("li",null,"No icon is displayed in the dock or task bar"),(0,r.kt)("li",null,'The opened database is not registered in the "Recent databases" menu'),(0,r.kt)("li",null,"The diagnostic log is automatically started (see ",(0,r.kt)("a",{parentName:"td",href:"https://doc.4d.com/4dv19/help/command/en/page642.html"},"SET DATABASE PARAMETER"),", selector 79)"),(0,r.kt)("li",null,"Every call to a dialog box is intercepted and an automatic response it provided (e.g. OK for the ",(0,r.kt)("a",{parentName:"td",href:"https://doc.4d.com/4dv19/help/command/en/page41.html"},"ALERT")," command, Abort for an error dialog...). All intercepted commands(*) are logged in the diagnostic log."),(0,r.kt)("br",null),"For maintenance needs, you can send any text to standard output streams using the ",(0,r.kt)("a",{parentName:"td",href:"https://doc.4d.com/4dv19/help/command/en/page667.html"},"LOG EVENT")," command. Note that headless 4D applications can only be closed by a call to ",(0,r.kt)("a",{parentName:"td",href:"https://doc.4d.com/4dv19/help/command/en/page291.html"},"QUIT 4D")," or using the OS task manager.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--dataless")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Launches 4D, 4D Server or merged application in dataless mode. Dataless mode is useful when 4D runs tasks with no need for data (project compilation for example). In this mode: ",(0,r.kt)("li",null,"No file containing data is opened, even if specified in the command line or the ",(0,r.kt)("inlineCode",{parentName:"td"},".4DLink")," file, or when using the ",(0,r.kt)("inlineCode",{parentName:"td"},"CREATE DATA FILE")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"OPEN DATA FILE")," commands."),(0,r.kt)("li",null,"Commands that manipulate data will throw an error. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"CREATE RECORD")," throws \u201cno table to apply the command to\u201d."),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),":",(0,r.kt)("li",null,"If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed."),(0,r.kt)("li",null,"If passed using the ",(0,r.kt)("inlineCode",{parentName:"td"},".4DLink")," file, dataless mode only applies to the database specified in the ",(0,r.kt)("inlineCode",{parentName:"td"},".4DLink")," file. For more information on ",(0,r.kt)("inlineCode",{parentName:"td"},".4DLink")," files, see ",(0,r.kt)("a",{parentName:"td",href:"/docs/19/Project/creating#project-opening-shortcuts"},"Project opening shortcuts"),"."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--webadmin-settings-file")),(0,r.kt)("td",{parentName:"tr",align:null},"File path"),(0,r.kt)("td",{parentName:"tr",align:null},"Path of the custom WebAdmin ",(0,r.kt)("inlineCode",{parentName:"td"},".4DSettings")," file for the ",(0,r.kt)("a",{parentName:"td",href:"/docs/19/Admin/webAdmin"},"WebAdmin web server"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--webadmin-access-key")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Access key for the ",(0,r.kt)("a",{parentName:"td",href:"/docs/19/Admin/webAdmin"},"WebAdmin web server"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--webadmin-auto-start")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the automatic startup for the ",(0,r.kt)("a",{parentName:"td",href:"/docs/19/Admin/webAdmin"},"WebAdmin web server"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--webadmin-store-settings")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Store the access key and automatic starting parameters in the currently used settings file (i.e. the default ",(0,r.kt)("a",{parentName:"td",href:"/docs/19/Admin/webAdmin#webadmin-settings"},(0,r.kt)("inlineCode",{parentName:"a"},"WebAdmin.4DSettings"))," file or a custom file designated with the ",(0,r.kt)("inlineCode",{parentName:"td"},"--webadmin-settings-path")," parameter). Use the ",(0,r.kt)("inlineCode",{parentName:"td"},"--webadmin-store-settings")," argument to save these settings if necessary")))),(0,r.kt)("p",null,"(*) Some dialogs are displayed before the database is opened, so that it's impossible to write into the ",(0,r.kt)("a",{parentName:"p",href:"/docs/19/Admin/debugLogFiles#4ddiagnosticlogtxt"},"Diagnostic log file")," (licence alert, conversion dialog, database selection, data file selection). In such case, an error message is thrown both in the stderr stream and the system event log, and then the application quits."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,'These examples assume that your 4D application is stored on the desktop and that the database to be opened is found in the "Documents" folder.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The current folder of the user is reached using the "~ " command under macOS and the "%HOMEPATH%" command under Windows.')),(0,r.kt)("p",null,"Launch application: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"open ~/Desktop/4D.app\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%HOMEPATH%\\Desktop\\4D\\4D.exe\n")),(0,r.kt)("p",null,"Launch application with a package file on macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn open ~/Desktop/4D.app --args ~/Documents/myDB.4dbase\n")),(0,r.kt)("p",null,"Launch application with a project file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn open ~/Desktop/4D.app --args ~/Documents/myProj/Project/myProj.4DProject\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%HOMEPATH%\\Desktop\\4D\\4D.exe %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n")),(0,r.kt)("p",null,"Launch application with a project file and a data file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%HOMEPATH%\\Desktop\\4D\\4D.exe --project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD\nor:\n%HOMEPATH%\\Desktop\\4D\\4D.exe /project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data %HOMEPATH%\\Documents\\data\\myData.4DD\n")),(0,r.kt)("p",null,"Launch application with a .4DLink file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"open ~/Desktop/4D.app MyDatabase.4DLink\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'open "~/Desktop/4D Server.app" MyDatabase.4DLink\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%HOMEPATH%\\Desktop\\4D.exe MyDatabase.4DLink\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'%HOMEPATH%\\Desktop\\4D Server.exe" MyDatabase.4DLink\n')),(0,r.kt)("p",null,"Launch application in compiled mode and create a data file if not available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"open ~/Desktop/4D.app ~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%HOMEPATH%\\Desktop\\4D\\4D.exe %HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode compiled --create-data true\n")),(0,r.kt)("p",null,"Launch application with a project file and a data file and pass a string as a user parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'%HOMEPATH%\\Desktop\\4D\\4D.exe --project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n')),(0,r.kt)("p",null,"Launch application without interface (headless mode):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"open ~/Desktop/MyBuiltRemoteApp \u2212\u2212headless\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%HOMEPATH%\\Desktop\\4D\\4D.exe --project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n%HOMEPATH%\\Desktop\\4D\\MyBuiltRemoteApp.exe --headless\n")))}u.isMDXComponent=!0}}]);