"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55735],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=i,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],s={id:"settings",title:"Backup Settings"},l=void 0,p={unversionedId:"Backup/settings",id:"version-19/Backup/settings",title:"Backup Settings",description:"Backup settings are defined through three pages in the Settings dialog box. You can set:",source:"@site/versioned_docs/version-19/Backup/settings.md",sourceDirName:"Backup",slug:"/Backup/settings",permalink:"/docs/pt/19/Backup/settings",draft:!1,tags:[],version:"19",frontMatter:{id:"settings",title:"Backup Settings"},sidebar:"docs",previous:{title:"Backup",permalink:"/docs/pt/19/Backup/backup"},next:{title:"Log file (.journal)",permalink:"/docs/pt/19/Backup/log"}},c={},u=[{value:"Scheduler",id:"scheduler",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Content",id:"content",level:3},{value:"Backup File Destination Folder",id:"backup-file-destination-folder",level:3},{value:"Log management",id:"log-management",level:3},{value:"Backup &amp; Restore",id:"backup--restore",level:2},{value:"General settings",id:"general-settings",level:3},{value:"Archive",id:"archive",level:3},{value:"Automatic Restore",id:"automatic-restore",level:3}],h={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Backup settings are defined through three pages in the Settings dialog box. You can set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the scheduler for automatic backups"),(0,o.kt)("li",{parentName:"ul"},"the files to include in every backup"),(0,o.kt)("li",{parentName:"ul"},"the advanced features allowing to execute automatic tasks")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Settings defined in this dialog box are written in the ",(0,o.kt)("em",{parentName:"p"},"Backup.4DSettings")," file, stored in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/pt/19/Project/architecture#settings-folder"},"Settings folder"),".")),(0,o.kt)("h2",{id:"scheduler"},"Scheduler"),(0,o.kt)("p",null,"You can automate the backup of applications opened with 4D or 4D Server (even when no client machines are connected). This involves setting a backup frequency (in hours, days, weeks or months); for each session, 4D automatically starts a backup using the current backup settings."),(0,o.kt)("p",null,"If this application was not launched at the theoretical moment of the backup, the next time 4D is launched, it considers the backup as having failed and proceeds as set in the Settings (refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/pt/19/Backup/backup#handling-backup-issues"},"Handling backup issues"),")."),(0,o.kt)("p",null,"The scheduler backup settings are defined on the ",(0,o.kt)("strong",{parentName:"p"},"Backup/Scheduler")," page of the Structure Settings:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13024).Z,width:"862",height:"293"})),(0,o.kt)("p",null,"The options found on this tab let you set and configure scheduled automatic backups of the application. You can choose a standard quick configuration or you can completely customize it. Various options appear depending on the choice made in the ",(0,o.kt)("strong",{parentName:"p"},"Automatic Backup")," menu:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Never"),": The scheduled backup feature is disabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Every Hour"),": Programs an automatic backup every hour, starting with the next hour."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Every Day"),": Programs an automatic backup every day. You can then enter the time when the backup should start."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Every Week"),": Programs an automatic backup every week. Two additional entry areas let you indicate the day and time when the backup should start."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Every Month"),": Programs an automatic backup every month. Two additional entry areas let you indicate the day of the month and the time when the backup should start."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Personalized"),': Used to configure "tailormade" automatic backups. When you select this option, several additional entry areas appear:  ',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Every X hour(s)"),": Allows programming backups on an hourly basis. You can enter a value between 1 and 24."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Every X day(s) at x"),": Allows programming backups on a daily basis. For example, enter 1 if you want to perform a daily backup. When this option is checked, you must enter the time when the backup should start."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Every X week(s) day at x"),": Allows programming backups on a weekly basis. Enter 1 if you want to perform a weekly backup. When this option is checked, you must enter the day(s) of the week and the time when the backup should start. You can select several days of the week, if desired. For example, you can use this option to set two weekly backups: one on Wednesday and one on Friday."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Every X month(s), Xth Day at x"),": Allows programming backups on a monthly basis. Enter 1 if you want to perform a monthly backup. When this option is checked, you must indicate the day of the month and the time when the backup should start.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Switches back and forth from Standard time to Daylight saving time could temporarily affect the automatic scheduler and trigger the next backup with a one-hour time shift. This happens only once and subsequent backups are run at the expected scheduled time.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The Backup/Configuration page of the Structure Settings lets you set the backup files and their location, as well as that of the log file. These parameters are specific to each application opened by 4D or 4D Server."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(89613).Z,width:"862",height:"659"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"4D Server:")," These parameters can only be set from the 4D Server machine.")),(0,o.kt)("h3",{id:"content"},"Content"),(0,o.kt)("p",null,"This area allows you to set which files and/or folders to copy during the next backup."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data"),": Application data file. When this option is checked, the following elements are automatically backed up at the same time as the data:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the current log file of the application (if it exists),"),(0,o.kt)("li",{parentName:"ul"},"the full ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," folder located ",(0,o.kt)("a",{parentName:"li",href:"/docs/pt/19/Project/architecture#settings-folder"},"next to the data file")," (if it exists), i.e. the ",(0,o.kt)("em",{parentName:"li"},"user settings for data"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Structure"),": Application project folders and files. In cases where projects are compiled, this option allows you to backup the .4dz file. When this option is checked, the full ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," folder located ",(0,o.kt)("a",{parentName:"li",href:"/docs/pt/19/Project/architecture#settings-folder-1"},"at the same level as the Project folder"),", i.e. the ",(0,o.kt)("em",{parentName:"li"},"user settings"),", is automatically backed up."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User Structure File (only for binary database)"),": ",(0,o.kt)("em",{parentName:"li"},"deprecated feature")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Attachments"),": This area allows you to specify a set of files and/or folders to be backed up at the same time as the application. These files can be of any type (documents or plug-in templates, labels, reports, pictures, etc.). You can set either individual files or folders whose contents will be fully backed up. Each attached element is listed with its full access path in the \u201cAttachments\u201d area.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Delete"),": Removes the selected file from the list of attached files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Add folder..."),": Displays a dialog box that allows selecting a folder to add to the backup. In the case of a restore, the folder will be recovered with its internal structure. You can select any folder or volume connected to the machine, with the exception of the folder containing the application files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Add file..."),": Displays a dialog box that allows you to select a file to add to the backup.")))),(0,o.kt)("h3",{id:"backup-file-destination-folder"},"Backup File Destination Folder"),(0,o.kt)("p",null,"This area lets you view and change the location where backup files as well as log backup files (where applicable) will be stored."),(0,o.kt)("p",null,"To view the location of the files, click in the area in order to display their pathname as a pop-up menu."),(0,o.kt)("p",null,"To modify the location where these files are stored, click the ",(0,o.kt)("strong",{parentName:"p"},"..."),' button. A selection dialog box appears, which allows you to select a folder or disk where the backups will be placed. The "Used Space" and "Free Space" areas are updated automatically and indicate the remaining space on the disk of the selected folder.'),(0,o.kt)("h3",{id:"log-management"},"Log management"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Use Log")," option, when checked, indicates that the application uses a log file. Its pathname is specified below the option. When this option is checked, it is not possible to open the application without a log file."),(0,o.kt)("p",null,"By default, any project created with 4D uses a log file (option ",(0,o.kt)("strong",{parentName:"p"},"Use Log File")," checked in the ",(0,o.kt)("strong",{parentName:"p"},"General Page")," of the ",(0,o.kt)("strong",{parentName:"p"},"Preferences"),"). The log file is named ",(0,o.kt)("em",{parentName:"p"},"data.journal")," and is placed in the Data folder."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Activating a new log file requires the data of the application to be backed up beforehand. When you check this option, a warning message informs you that a backup is necessary. The creation of the log file is postponed and it will actually be created only after the next backup of the application.")),(0,o.kt)("h2",{id:"backup--restore"},"Backup & Restore"),(0,o.kt)("p",null,"Modifying backup and restore options is optional. Their default values correspond to a standard use of the function."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(56611).Z,width:"862",height:"644"})),(0,o.kt)("h3",{id:"general-settings"},"General settings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Keep only the last X backup files"),": This parameter activates and configures the mechanism used to delete the oldest backup files, which avoids the risk of saturating the disk drive. This feature works as follows: Once the current backup is complete, 4D deletes the oldest archive if it is found in the same location as the archive being backed up and has the same name (you can request that the oldest archive be deleted before the backup in order to save space).\nIf, for example, the number of sets is set to 3, the first three backups create the archives MyBase-0001, MyBase-0002, and MyBase-0003 respectively. During the fourth backup, the archive MyBase-0004 is created and MyBase-0001 is deleted. By default, the mechanism for deleting sets is enabled and 4D keeps 3 backup sets.\nTo disable the mechanism, simply deselect the option.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This parameter concerns both application and log file backups.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Backup only if the data file has been modified"),": When this option is checked, 4D starts scheduled backups only if data has been added, changed or deleted since the last backup. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. No error is generated; however the backup journal notes that the backup has been postponed. This option also allows saving machine time for the backup of applications principally used for viewing purposes. Please note that enabling this option does not take any modifications made to the project files or attached files into account.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This parameter concerns both application and log file backups.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Delete oldest backup file before/after backup"),': This option is only used if the "Keep only the last X backup files" option is checked. It specifies whether 4D should start by deleting the oldest archive before starting the backup (',(0,o.kt)("strong",{parentName:"p"},"before")," option) or whether the deletion should take place once the backup is completed (",(0,o.kt)("strong",{parentName:"p"},"after")," option). In order for this mechanism to work, the oldest archive must not have been renamed or moved.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"If backup fails"),": This option allows setting the mechanism used to handle failed backups (backup impossible). When a backup cannot be performed, 4D lets you carry out a new attempt."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Retry at the next scheduled date and time"),": This option only makes sense when working with scheduled automatic backups. It amounts to cancelling the failed backup. An error is generated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Retry after X second(s), minute(s) or hour(s)"),": When this option is checked, a new backup attempt is executed after the wait period. This mechanism allows anticipating certain circumstances that may block the backup. You can set a wait period in seconds, minutes or hours using the corresponding menu. If the new attempt also fails, an error is generated and the failure is noted in the status area of the last backup and in the backup journal file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cancel the operation after X attempts"),': This parameter is used to set the maximum number of failed backup attempts. If the backup has not been carried out successfully after the maximum number of attempts set has been reached, it is cancelled and the error 1401 is generated ("The maximum number of backup attempts has been reached; automatic backup is temporarily disabled"). In this case, no new automatic backup will be attempted as long as the application has not been restarted, or a manual backup has been carried out successfully.\nThis parameter is useful in order to avoid a case where an extended problem (requiring human intervention) that prevented a backup from being carried out would have led to the application repeatedly attempting the backup to the detriment of its overall performance. By default, this parameter is not checked.')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"4D considers a backup as failed if the application was not launched at the time when the scheduled automatic backup was set to be carried out.")),(0,o.kt)("h3",{id:"archive"},"Archive"),(0,o.kt)("p",null,"These options apply to main backup files and to log backup files."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Segment Size (Mb)"),"\n4D allows you to segment archives, i.e., to cut it up into smaller sizes. This behavior allows, for example, the storing of a backup on several different disks (DVDs, usb devices, etc.). During restore, 4D will automatically merge the segments. Each segment is called MyApplication","[xxxx-yyyy]",".4BK, where xxxx is the backup number and yyyy is the segment number. For example, the three segments of the MyApplication backup are called MyApplication","[0006-0001]",".4BK, MyApplication","[0006-0002]",".4BK and MyApplication","[0006-0003]",".4BK.\nThe ",(0,o.kt)("strong",{parentName:"p"},"Segment Size")," menu is a combo box that allows you to set the size in MB for each segment of the backup. You can choose one of the preset sizes or enter a specific size between 0 and 2048. If you pass 0, no segmentation occurs (this is the equivalent of passing ",(0,o.kt)("strong",{parentName:"p"},"None"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Compression Rate"),"\nBy default, 4D compresses backups to help save disk space. However, the file compression phase can noticeably slow down backups when dealing with large volumes of data. The ",(0,o.kt)("strong",{parentName:"p"},"Compression Rate")," option allows you to adjust file compression:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"None:")," No file compression is applied. The backup is faster but the archive files are considerably larger."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fast")," (default): This option is a compromise between backup speed and archive size."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compact"),": The maximum compression rate is applied to archives. The archive files take up the least amount of space possible on the disk, but the backup is noticeable slowed."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Interlacing Rate and Redundancy Rate"),"\n4D generates archives using specific algorithms that are based on optimization (interlacing) and security (redundancy) mechanisms. You can set these mechanisms according to your needs. The menus for these options contain rates of ",(0,o.kt)("strong",{parentName:"p"},"Low"),", ",(0,o.kt)("strong",{parentName:"p"},"Medium"),", ",(0,o.kt)("strong",{parentName:"p"},"High")," and ",(0,o.kt)("strong",{parentName:"p"},"None")," (default)."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interlacing Rate"),": Interlacing consists of storing data in non-adjacent sectors in order to limit risks in the case of sector damage. The higher the rate, the higher the security; however, data processing will use more memory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redundancy Rate"),": Redundancy allows securing data present in a file by repeating the same information several times. The higher the redundancy rate, the better the file security; however, storage will be slower and the file size will increase accordingly.")))),(0,o.kt)("h3",{id:"automatic-restore"},"Automatic Restore"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Restore last backup if database is damaged"),": When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the application, if an anomaly is detected (corrupted file, for example) during application launch. No intervention is required on the part of the user; however, the operation is logged in the backup journal.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Integrate last log file if database is incomplete"),": When this option is checked, the program automatically integrates the log file when opening or restoring the application."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When opening an application, the current log file is automatically integrated if 4D detects that there are operations stored in the log file that are not present in the data. This situation arises, for example, if a power outage occurs when there are operations in the data cache that have not yet been written to the disk."),(0,o.kt)("li",{parentName:"ul"},"When restoring an application, if the current log file or a log backup file having the same number as the backup file is stored in the same folder, 4D examines its contents. If it contains operations not found in the data file, the program automatically integrates it.")))),(0,o.kt)("p",null,"The user does not see any dialog box; the operation is completely automatic. The goal is to make use as easy as possible. The operation is logged in the backup journal."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the case of an automatic restore, only the following elements are restored:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},".4DD file"),(0,o.kt)("li",{parentName:"ul"},".4DIndx file"),(0,o.kt)("li",{parentName:"ul"},".4DSyncData file"),(0,o.kt)("li",{parentName:"ul"},".4DSyncHeader file"),(0,o.kt)("li",{parentName:"ul"},"External Data folder")),(0,o.kt)("p",{parentName:"blockquote"},"If you wish to get the attached files or the project files, you must perform a ",(0,o.kt)("a",{parentName:"p",href:"/docs/pt/19/Backup/restore#manually-restoring-a-backup-standard-dialog"},"manual restore"),".")))}d.isMDXComponent=!0},13024:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backup02-e31f4a2c8017e49094f31304dbdec2a9.png"},89613:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backup03-49b5b70c7c84c962daad433a29bbc583.png"},56611:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backup04-5934a7d8b0c0514cdd2804ba485708a2.png"}}]);