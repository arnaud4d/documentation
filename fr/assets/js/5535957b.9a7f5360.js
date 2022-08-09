"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27196],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,f=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return a?o.createElement(f,r(r({ref:t},d),{},{components:a})):o.createElement(f,r({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},43867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=a(87462),n=a(63366),i=(a(67294),a(3905)),r=["components"],l={id:"log",title:"Log file (.journal)"},s=void 0,p={unversionedId:"Backup/log",id:"version-18/Backup/log",title:"Log file (.journal)",description:"A continuously-used database is always record changes, additions or deletions. Performing regular backups of data is important but does not allow (in case of incident) restoring data entered since the last backup. To respond to this need, 4D now offers a specific tool: the log file. This file allows ensuring permanent security of database data.",source:"@site/versioned_docs/version-18/Backup/log.md",sourceDirName:"Backup",slug:"/Backup/log",permalink:"/docs/fr/docs/18/Backup/log",draft:!1,tags:[],version:"18",frontMatter:{id:"log",title:"Log file (.journal)"},sidebar:"docs",previous:{title:"Backup Settings",permalink:"/docs/fr/docs/18/Backup/settings"},next:{title:"Restore",permalink:"/docs/fr/docs/18/Backup/restore"}},d={},c=[{value:"How the log file works",id:"how-the-log-file-works",level:2},{value:"Creating the log file",id:"creating-the-log-file",level:2},{value:"Stopping a log file",id:"stopping-a-log-file",level:2}],u={toc:c};function h(e){var t=e.components,l=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A continuously-used database is always record changes, additions or deletions. Performing regular backups of data is important but does not allow (in case of incident) restoring data entered since the last backup. To respond to this need, 4D now offers a specific tool: the log file. This file allows ensuring permanent security of database data."),(0,i.kt)("p",null,"In addition, 4D works continuously with a data cache in memory. Any changes made to the data of the database are stored temporarily in the cache before being written to the hard disk. This accelerates the operation of applications; in fact, accessing memory is faster than accessing the hard disk. If an incident occurs in the database before the data stored in the cache could be written to the disk, you must include the current log file in order to restore the database entirely."),(0,i.kt)("p",null,"Finally, 4D has functions that analyze the contents of the log file, making it possible to rollback the operations carried out on the data of the database. These functions area available in the MSC: refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/docs/18/MSC/analysis"},"Activity analysis")," page and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/docs/18/MSC/rollback"},"Rollback")," page."),(0,i.kt)("h2",{id:"how-the-log-file-works"},"How the log file works"),(0,i.kt)("p",null,"The log file generated by 4D contains a descrption of all operations performed on the data of journaled tables of the database, which are logged sequentially. By default, all the tables are journaled, i.e. included in the log file, but you can deselect individual tables using the ",(0,i.kt)("strong",{parentName:"p"},"Include in Log File")," table property."),(0,i.kt)("p",null,"As such, each operation performed by a user causes two simultaneous actions: the first one in the database (instruction is executed normally) and the second one in the log file (the description of the operation is recorded). The log file is created independently without disturbing or slowing down the work of the user. A database can only work with one log file at a time. The log file records the following action types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Opening and closing of the data file,"),(0,i.kt)("li",{parentName:"ul"},"Opening and closing of the process (contexts),"),(0,i.kt)("li",{parentName:"ul"},"Adding of records or BLOBs,"),(0,i.kt)("li",{parentName:"ul"},"Modifying of records,"),(0,i.kt)("li",{parentName:"ul"},"Deleting of records,"),(0,i.kt)("li",{parentName:"ul"},"Creating and closing of transactions.")),(0,i.kt)("p",null,"For more information about these actions, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fr/docs/18/MSC/analysis"},"Activity analysis")," page of the MSC."),(0,i.kt)("p",null,"4D manages the log file. It takes into account all operations that affect the data file equally, regardless of any manipulations performed by a user, a 4D method, the SQL engine, plug-ins, or from a Web browser or a mobile applicaton."),(0,i.kt)("p",null,"The following illustration sums up how the log file works:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(27039).Z,width:"523",height:"448"})),(0,i.kt)("p",null,"The current log file is automatically saved with the current data file. This mechanism has two distinct advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Its avoids saturating the disk volume where the log file is stored. Without a backup, the log file would get bigger and bigger with use, and would eventually use all available disk space. For each data file backup, 4D or 4D Server closes the current log file and immediately starts a new, empty file, thereby avoiding the risk of saturation. The old log file is then archived and eventually destroyed depending on the mechanism for managing the backup sets."),(0,i.kt)("li",{parentName:"ul"},"It keeps log files corresponding to backups in order to be able to parse or repair a database at a later point in time. The integration of a log file can only be done in the database to which it corresponds. It is important, in order to be able to properly integrate a log file into a backup, to have backups and log files archived simultaneously.")),(0,i.kt)("h2",{id:"creating-the-log-file"},"Creating the log file"),(0,i.kt)("p",null,"By default, any database created with 4D uses a log file (option set in the ",(0,i.kt)("strong",{parentName:"p"},"General")," page of the Preferences). The log file is named ",(0,i.kt)("em",{parentName:"p"},"data.journal")," and is placed in the Data folder."),(0,i.kt)("p",null,"You can find out if your database uses a log file at any time: just check whether the ",(0,i.kt)("strong",{parentName:"p"},"Use Log")," option is selected on the ",(0,i.kt)("strong",{parentName:"p"},"Backup/Configuration")," page of the Database Settings. If you deselected this option, or if you use a database without a log file and wish to set up a backup strategy with a log file, you will have to create one."),(0,i.kt)("p",null,"To create a log file:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Backup/Configuration")," page of the Database Settings, check the ",(0,i.kt)("strong",{parentName:"p"},"Use Log")," option.\nThe program displays a standard open/new file dialog box. By default, the log file is named ",(0,i.kt)("em",{parentName:"p"},"data.journal"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Keep the default name or rename it, and then select the file location.\nIf you have at least two hard drives, it is recommended that you place the log file on a disk other than the one containing the database. If the database hard drive is lost, you can still recall your log file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),".\nThe disk and the name of the open log file are now displayed in the ",(0,i.kt)("strong",{parentName:"p"},"Use Log")," area of the dialog box. You can click on this area in order to display a pop-up menu containing the log path on the disk.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Validate the Database Settings dialog box."))),(0,i.kt)("p",null,"In order for you to be able to create a log file directly, the database must be in one of the following situations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The data file is blank,"),(0,i.kt)("li",{parentName:"ul"},"You just performed a backup of the database and no changes have yet been made to the data.")),(0,i.kt)("p",null,"In all other cases, when you validate the Database Settings dialog box, an alert dialog box will appear to inform you that it is necessary to perform a backup. If you click ",(0,i.kt)("strong",{parentName:"p"},"OK"),", the backup begins immediately, then the log file is activated. If you click ",(0,i.kt)("strong",{parentName:"p"},"Cancel"),", the request is saved but the creation of the log file is postponed and it will actually be created only after the next backup of the database. This precaution is indispensable because, in order to restore a database after any incidents, you will need a copy of the database into which the operations recorded in the log file will be integrated."),(0,i.kt)("p",null,"Without having to do anything else, all operations performed on the data are logged in this file and it will be used in the future when the database is opened."),(0,i.kt)("p",null,"You must create another log file if you create a new data file. You must set or create another log file if you open another data file that is not linked to a log file (or if the log file is missing)."),(0,i.kt)("h2",{id:"stopping-a-log-file"},"Stopping a log file"),(0,i.kt)("p",null,"If you would like to stop logging operations to the current log file, simply deselect the ",(0,i.kt)("strong",{parentName:"p"},"Use Log")," option on the ",(0,i.kt)("strong",{parentName:"p"},"Backup/Configuration")," page of the Database Settings."),(0,i.kt)("p",null,"4D then displays an alert message to remind you that this action prevents you from taking advantage of the security that the log file provides:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(58548).Z,width:"482",height:"188"})),(0,i.kt)("p",null,"If you click ",(0,i.kt)("strong",{parentName:"p"},"Stop"),", the current log file is immediately closed (the Database Settings dialog box does not need to be validated afterwards)."),(0,i.kt)("p",null,"If you wish to close the current log file because it is too large, you might consider performing a data file backup, which will cause the log file to be backed up as well."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"4D Server:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"New log file")," command automatically closes the current log file and starts a new one.\nIf for some reason the log file becomes unavailable during a working session, error 1274 is generated and 4D Server does not allow users to write data anymore. When the log file is available again, it is necessary to do a backup.")))}h.isMDXComponent=!0},27039:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/backup05-467406274aac70bb97c1fc96ec032647.png"},58548:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);