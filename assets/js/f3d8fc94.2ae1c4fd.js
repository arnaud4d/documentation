"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57245],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),m=r,f=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},19015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"information",title:"Information Page",sidebar_label:"Information Page"},l=void 0,d={unversionedId:"MSC/information",id:"version-18/MSC/information",title:"Information Page",description:"The Information page provides information about the 4D and system environments, as well as the database and application files. Each page can be displayed using tab controls at the top of the window.",source:"@site/versioned_docs/version-18/MSC/information.md",sourceDirName:"MSC",slug:"/MSC/information",permalink:"/docs/docs/18/MSC/information",draft:!1,tags:[],version:"18",frontMatter:{id:"information",title:"Information Page",sidebar_label:"Information Page"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/docs/18/MSC/overview"},next:{title:"Activity analysis Page",permalink:"/docs/docs/18/MSC/analysis"}},c={},p=[{value:"Program",id:"program",level:2},{value:"Tables",id:"tables",level:2},{value:"Data",id:"data",level:2}],h={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Information page provides information about the 4D and system environments, as well as the database and application files. Each page can be displayed using tab controls at the top of the window."),(0,o.kt)("h2",{id:"program"},"Program"),(0,o.kt)("p",null,"This page indicates the name, version and location of the application as well as the active 4D folder (for more information about the active 4D folder, refer to the description of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Get 4D folder")," command in the ",(0,o.kt)("em",{parentName:"p"},"4D Language Reference")," manual)."),(0,o.kt)("p",null,"The central part of the window indicates the name and location of the database project and data files as well as the log file (if any). The lower part of the window indicates the name of the 4D license holder, the type of license, and the name of the database user when passwords have been activated (or Designer if this is not the case)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Display and selection of pathnames"),": On the ",(0,o.kt)("strong",{parentName:"p"},"Program")," tab, pathnames are displayed in pop-up menus containing the folder sequence as found on the disk:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:a(85630).Z,width:"496",height:"190"}),"\nIf you select a menu item (disk or folder), it is displayed in a new system window.\nThe ",(0,o.kt)("strong",{parentName:"p"},"Copy the path")," command copies the complete pathname as text to the clipboard, using the separators of the current platform.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'"Licenses" Folder'),"\nThe ",(0,o.kt)("strong",{parentName:"p"},'"Licenses" Folder'),' button displays the contents of the active Licenses folder in a new system window. All the license files installed in your 4D environment are grouped together in this folder, on your hard disk. When they are opened with a Web browser, these files display information concerning the licenses they contain and their characteristics.\nThe location of the "Licenses" folder can vary depending on the version of your operating system. For more information about the location of this folder, refer to the ',(0,o.kt)("inlineCode",{parentName:"p"},"Get 4D folder")," command.\n",(0,o.kt)("strong",{parentName:"p"},"*Note:")," You can also access this folder from the \u201cUpdate License\u201d dialog box (available in the Help menu).*"))),(0,o.kt)("h2",{id:"tables"},"Tables"),(0,o.kt)("p",null,"This page provides an overview of the tables in your database:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(56861).Z,width:"882",height:"666"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Information on this page is available in both standard and maintenance modes.")),(0,o.kt)("p",null,"The page lists all the tables of the database (including invisible tables) as well as their characteristics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ID"),": Internal number of the table."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tables"),": Name of the table. Names of deleted tables are displayed with parenthesis (if they are still in the trash)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Records"),": Total number of records in the table. If a record is damaged or cannot be read, ",(0,o.kt)("em",{parentName:"li"},"Error")," is displayed instead of the number. In this case, you can consider using the verify and repair tools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fields"),": Number of fields in the table. Invisible fields are counted, however, deleted fields are not counted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Indexes"),": Number of indexes of any kind in the table"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Encryptable"),": If checked, the ",(0,o.kt)("strong",{parentName:"li"},"Encryptable")," attribute is selected for the table at the structure level (see Encryptable paragraph in the Design Reference Manual)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Encrypted"),": If checked, the records of the table are encrypted in the data file.\n",(0,o.kt)("strong",{parentName:"li"},"*Note:")," Any inconstency between Encryptable and Encrypted options requires that you check the encryption status of the data file in the ",(0,o.kt)("strong",{parentName:"li"},"Encrypt page")," of the database.*"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Address Table Size"),': Size of the address table for each table. The address table is an internal table which stores one element per record created in the table. It actually links records to their physical address. For performance reasons, it is not resized when records are deleted, thus its size can be different from the current number of records in the table. If this difference is significant, a data compacting operation with the "Compact address table" option checked can be executed to optimize the address table size (see ',(0,o.kt)("a",{parentName:"li",href:"/docs/docs/18/MSC/compact"},"Compact")," page).\n",(0,o.kt)("strong",{parentName:"li"},"*Note:")," Differences between address table size and record number can also result from an incident during the cache flush.*")),(0,o.kt)("h2",{id:"data"},"Data"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Data")," page provides information about the available and used storage space in the data file."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This page cannot be accessed in maintenance mode")),(0,o.kt)("p",null,"The information is provided in graph form:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(19655).Z,width:"761",height:"583"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'This page does not take into account any data that may be stored outside of the data file (see "External storage").')),(0,o.kt)("p",null,"Files that are too fragmented reduce disk, and thus, database performance. If the occupation rate is too low, 4D will indicate this by a warning icon (which is displayed on the Information button and on the tab of the corresponding file type) and specify that compacting is necessary:",(0,o.kt)("img",{src:a(97461).Z,width:"75",height:"69"})),(0,o.kt)("p",null,"A warning icon is also displayed on the button of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/18/MSC/compact"},"Compact")," page:\n",(0,o.kt)("img",{src:a(36128).Z,width:"76",height:"64"})))}m.isMDXComponent=!0},19655:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MSC_Data-aa469e50a3ad298cd02cf05689e87a71.png"},56861:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MSC_Tables-7498ec19de595de5fdea35406dbd42e3.png"},36128:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABACAIAAAA/NwYHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAATmSURBVGhD7ZjfaxxVFMf7rA3+QPRB6IMPtipYFc1LHwSr9EH/gOKD7INiYgIaYsiDP2JJ28Q0QWKhlBAaRWssCX0o2abkh43JStolTdBukq2JCWkoZldSF3wQEdl+Zu7Z2dndSdjdubON0/lwGc4999wz57szc+/s7ErdAwQi/UIg0i8EIv1CINIvBCL9gucik8nk1NRUT09Pa2trU1NTXV0dR2w8+BmVOC/xUOTGxkZ/f399ff27W8MoMUTKHG/wSmQkEmloaEBGTU1Ne3v70NDQ/Pz8+vr65uYmR2w8+BklhkjiZaYHeCJycHBQVd/Z2bmwsCDeVMq4dibST6UYJQYP8cwSr270i6RWiq6trQ2Hw+LKgD+dTttFKogkHr9HOjWL5K7jmlDx9PS0uGxsJRKIZxZzvbhvdYpk/VDPoXUNeQI7OjrwWCiRFowSo4KZhYcM2tchnSJZJ6mSZ0z6JolEoqWlZWxsDHl28OBnVOJM1PNJHulrQptIdjz2A+43+0qjWFtba25unpubE33pNDYe/BKRgblkII/e/VObSHZ2LgK7gvRzofrGxsaVlRUUcsReXFyUsVzIQB6ySV8H2kTyBkNx7H7SLyAajfKuE4vFOGKLtwAykIds0teBNpG8qVEcu7z0nRgdHSWGo/SdIAMxZJO+DrSJ5PpQHG8z0s+Ac3viU92TvQdov06fJp4MOMmmpmtBm0jevCnO2g8scKrFxpETHx4IH73PaouTX5CBKWST+Tq4m1fyg/feutBadfHY/Tev7r8Z3Y8x3P7w6o1rDO3QK1nGMzlz/m2u3uy5Pf/99Rrt2rk9dCe/fZOYHfpMlrq6/r46c/F41fDx3WtXnh3vfoyGQTd8bHdj3eEdurqWuk9O9L3Odbt+4QnkJZcvJZeGMeji7P1o7w7dJ0t644lePouYS59X/Z14GUM5MejixFiNjchkHWgTCcW/u1755hBK4iN7eRTtIunixIj0HZT5OtApssh/IZ+8/wYyRroe+GfzlUKROEe7HsRe/fm8SuIenSKhmP+T3336OBqWJ59BEs14JpeG1TOpPAwRMHH6JZnmGs0iYfsvA7di3yNgvPuhf1OvKkkb119EHg1DeRgigLCl6BmZ6Q79ImGrbzy1Ne8MfPYo1bP1Kz2OImm8Hhi/xZf7/rz9h0x2gScigfu28GvdLz90UfqPpx6xxNCQl7jxVSLeh2H3E0ZwPHJSMrrAK5FQ+N31zMdPUvet2RfsYgyR8b5CkeszzxH809eHJJ0LPBSpsH9BP3tkH3UvTzxtF+N4u9J+M5ef/4dIO0tXe6m7pMYUmeyCiooE/kyNn3wqT4lju3zqef5qyjR3VFrkXSEQ6RcCkdswENqVobptVpyew1nLOVtZIg2FoQHpVJLKiZxtq3Y8k3VxrVGjplCoWrlkWH4cs9w2mZH5wcisHHYpmbShUCZ/yUJLF7mFRrNq051jmaZZvKHEMJQis/SsmZEp4BJP7iC9UgUa6BJpP71lF2Pk2phCYRjkdYuljNvV8Ux2p2UXY9jsrM8xDPK6xVLOwmPcdNlzDbTllbNdrXZDrGw2fNkbOH/QxJpeGuWIBOPkgvXEGKWZWHVYNTkbak3KjTcx1phCp3Ee1bHGiqRMka6x1FaCQKRfCET6hUCkXwhE+oVApF+4B0SmUncAz2k1OlDbCAoAAAAASUVORK5CYII="},97461:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},85630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MSC_popup-3ef7648d9c8e141b600c690356171a0c.png"}}]);