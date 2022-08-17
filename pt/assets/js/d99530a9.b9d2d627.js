"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={id:"webAdmin",title:"Web Administration"},s=void 0,l={unversionedId:"Admin/webAdmin",id:"version-19/Admin/webAdmin",title:"Web Administration",description:"An embedded web server component, named WebAdmin, is used by 4D and 4D Server to provide a secured web access to specific management features such as the Data Explorer. You can connect locally or remotely to this web server from a browser or any web application and access the associated 4D application.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/pt/19/Admin/webAdmin",draft:!1,tags:[],version:"19",frontMatter:{id:"webAdmin",title:"Web Administration"},sidebar:"docs",previous:{title:"Shortcuts Page",permalink:"/docs/pt/19/Preferences/shortcuts"},next:{title:"Web Data Explorer",permalink:"/docs/pt/19/Admin/dataExplorer"}},p={},c=[{value:"Starting the WebAdmin web server",id:"starting-the-webadmin-web-server",level:2},{value:"Launch at startup",id:"launch-at-startup",level:3},{value:"Start and stop",id:"start-and-stop",level:3},{value:"WebAdmin Settings",id:"webadmin-settings",level:2},{value:"Settings dialog box",id:"settings-dialog-box",level:3},{value:"Web server administration automatic startup",id:"web-server-administration-automatic-startup",level:4},{value:"Accept HTTP connections on localhost",id:"accept-http-connections-on-localhost",level:4},{value:"HTTP Port",id:"http-port",level:4},{value:"Accept HTTPS",id:"accept-https",level:4},{value:"HTTPS Port",id:"https-port",level:4},{value:"Certificate folder path",id:"certificate-folder-path",level:4},{value:"Debug log mode",id:"debug-log-mode",level:4},{value:"Access Key",id:"access-key",level:4},{value:"WebAdmin Headless Configuration",id:"webadmin-headless-configuration",level:2},{value:"Authentication and Session",id:"authentication-and-session",level:2}],d={toc:c};function u(e){var{components:t}=e,o=r(e,["components"]);return(0,a.kt)("wrapper",i({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An embedded web server component, named ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin"),", is used by 4D and 4D Server to provide a secured web access to specific management features such as the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/pt/19/Admin/dataExplorer"}),"Data Explorer"),". You can connect locally or remotely to this web server from a browser or any web application and access the associated 4D application."),(0,a.kt)("p",null,'The WebAdmin handles the authentication of users with "WebAdmin" privileges, so that they can open administration sessions and access dedicated interfaces.'),(0,a.kt)("p",null,"This feature can be used in 4D applications running headless as well as 4D applications running with interfaces."),(0,a.kt)("h2",i({},{id:"starting-the-webadmin-web-server"}),"Starting the WebAdmin web server"),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server is not launched. You need to configure the launch at startup, or (in versions with interface) launch it manually using a menu item."),(0,a.kt)("h3",i({},{id:"launch-at-startup"}),"Launch at startup"),(0,a.kt)("p",null,"You can configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server to be launched at 4D or 4D Server application startup (before any project is loaded)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you use a 4D application with interface, select the ",(0,a.kt)("strong",{parentName:"li"},"File > Web Administration > Settings...")," menu item.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(73246).Z,width:"470",height:"294"})),(0,a.kt)("p",null,"Check the ",(0,a.kt)("strong",{parentName:"p"},"Web server administration automatic startup")," option in the settings dialog box:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(68233).Z,width:"702",height:"205"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Whether you use 4D application which is headless or not, you can enable the automatic startup mode using the following ",(0,a.kt)("em",{parentName:"li"},"Command Line Interface")," argument:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{}),"open ~/Desktop/4D.app --webadmin-auto-start true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the TCP port used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server (",(0,a.kt)("a",i({parentName:"p"},{href:"#https-port"}),"HTTPS")," or ",(0,a.kt)("a",i({parentName:"p"},{href:"#http-port"}),"HTTP"),", depending on the settings) is not free at startup, 4D will try successively the 20 following ports, and use the first one that is available. If no port is available, the web server is not launched and an error is displayed or (headless application) logged in the console.")),(0,a.kt)("h3",i({},{id:"start-and-stop"}),"Start and stop"),(0,a.kt)("p",null,"If you use a 4D application with interface, you can start or stop the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server for your project at any moment:"),(0,a.kt)("p",null,"Select the ",(0,a.kt)("strong",{parentName:"p"},"File > Web Administration > Start Server")," menu item."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(83512).Z,width:"473",height:"354"})),(0,a.kt)("p",null,"The menu item becomes ",(0,a.kt)("strong",{parentName:"p"},"Stop Server")," when the server is launched; select ",(0,a.kt)("strong",{parentName:"p"},"Stop Server")," to stop the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server."),(0,a.kt)("h2",i({},{id:"webadmin-settings"}),"WebAdmin Settings"),(0,a.kt)("p",null,"Configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," component is mandatory in particular to define the ",(0,a.kt)("a",i({parentName:"p"},{href:"#access-key"}),(0,a.kt)("strong",{parentName:"a"},"access key")),". By default when the access key is not set, access via an url is not allowed."),(0,a.kt)("p",null,"You can configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," component using the ",(0,a.kt)("a",i({parentName:"p"},{href:"#settings-dialog-box"}),"Web Administration settings dialog box")," (see below)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you use a headless 4D application, you can use ",(0,a.kt)("a",i({parentName:"p"},{href:"#webadmin-headless-configuration"}),(0,a.kt)("em",{parentName:"a"},"Command Line Interface")," arguments")," to define basic settings. You will have to customize the settings file to define advanced parameters.")),(0,a.kt)("h3",i({},{id:"settings-dialog-box"}),"Settings dialog box"),(0,a.kt)("p",null,"To open the Web Administration settings dialog box, select the ",(0,a.kt)("strong",{parentName:"p"},"File > Web Administration > Settings...")," menu item."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(73246).Z,width:"470",height:"294"})),(0,a.kt)("p",null,"The following dialog box is displayed:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(19322).Z,width:"702",height:"462"})),(0,a.kt)("h4",i({},{id:"web-server-administration-automatic-startup"}),"Web server administration automatic startup"),(0,a.kt)("p",null,"Check this option if you want the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server to be automatically launched when the 4D or 4D Server application starts (",(0,a.kt)("a",i({parentName:"p"},{href:"#launching-at-startup"}),"see above"),"). By default, this option is not checked."),(0,a.kt)("h4",i({},{id:"accept-http-connections-on-localhost"}),"Accept HTTP connections on localhost"),(0,a.kt)("p",null,"When this option is checked, you will be able to connect to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server through HTTP on the same machine as the 4D application. By default, this option is checked."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connections with HTTP other than localhost are never accepted."),(0,a.kt)("li",{parentName:"ul"},"Even if this option is checked, when ",(0,a.kt)("a",i({parentName:"li"},{href:"#accept-https"}),"Accept HTTPS")," is checked and the TLS configuration is valid, localhost connections use HTTPS.")),(0,a.kt)("h4",i({},{id:"http-port"}),"HTTP Port"),(0,a.kt)("p",null,"Port number to use for connections through HTTP to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server when the ",(0,a.kt)("strong",{parentName:"p"},"Accept HTTP connections on localhost")," option is checked. Default value is 7080."),(0,a.kt)("h4",i({},{id:"accept-https"}),"Accept HTTPS"),(0,a.kt)("p",null,"When this option is checked, you will be able to connect to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server through HTTPS. By default, this option is checked."),(0,a.kt)("h4",i({},{id:"https-port"}),"HTTPS Port"),(0,a.kt)("p",null,"Port number to use for connections through HTTPS to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server when the ",(0,a.kt)("strong",{parentName:"p"},"Accept HTTPS")," option is checked. Default value is 7443."),(0,a.kt)("h4",i({},{id:"certificate-folder-path"}),"Certificate folder path"),(0,a.kt)("p",null,"Path of the folder where the TLS certificate files are located. By default, the certificate folder path is empty and 4D or 4D Server uses the certificate files embedded in the 4D application (custom certificates must be stored next to the project folder)."),(0,a.kt)("h4",i({},{id:"debug-log-mode"}),"Debug log mode"),(0,a.kt)("p",null,"Status or format of the HTTP request log file (HTTPDebugLog_",(0,a.kt)("em",{parentName:"p"},"nn"),'.txt, stored in the "Logs" folder of the application -- ',(0,a.kt)("em",{parentName:"p"},"nn")," is the file number). The following options are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Disable")," (default)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"With all body parts")," - enabled with body parts in response and request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Without body parts")," - enabled without body parts (body size is provided)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"With request body")," - enabled with body part in request only"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"With response body")," - enabled with body part in response only")),(0,a.kt)("h4",i({},{id:"access-key"}),"Access Key"),(0,a.kt)("p",null,"Defining an access key is mandatory to unlock access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server through an URL (access via a 4D menu command does not require an access key). When no access key is defined, no web client is allowed to connect through an URL to a web administration interface like the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/pt/19/Admin/dataExplorer"}),"Data Explorer page"),". An error page is returned in case of connection request:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(51675).Z,width:"193",height:"126"})),(0,a.kt)("p",null,"An access key is similar to a password but not associated to a login."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To define a new access key: click the ",(0,a.kt)("strong",{parentName:"li"},"Define")," button, enter the access key string in the dialog box and click ",(0,a.kt)("strong",{parentName:"li"},"OK"),". The button label becomes ",(0,a.kt)("strong",{parentName:"li"},"Modify"),"."),(0,a.kt)("li",{parentName:"ul"},"To modify the access key: click the ",(0,a.kt)("strong",{parentName:"li"},"Modify")," button, enter the new access key string in the dialog box and click ",(0,a.kt)("strong",{parentName:"li"},"OK"),"."),(0,a.kt)("li",{parentName:"ul"},"To delete the access key: click the ",(0,a.kt)("strong",{parentName:"li"},"Modify")," button, let the access key area empty and click ",(0,a.kt)("strong",{parentName:"li"},"OK"),".")),(0,a.kt)("h2",i({},{id:"webadmin-headless-configuration"}),"WebAdmin Headless Configuration"),(0,a.kt)("p",null,"All ",(0,a.kt)("a",i({parentName:"p"},{href:"#webadmin-settings"}),"WebAdmin settings")," are stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file. There is one default ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file per 4D and 4D Server application, so that it is possible to deploy multiple applications on the same host machine."),(0,a.kt)("p",null,"When running a 4D or 4D Server application headless, you can set and use the default ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file, or designate a custom ",(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings")," file."),(0,a.kt)("p",null,"To set the file contents, you can use the ",(0,a.kt)("a",i({parentName:"p"},{href:"#settings-dialog-box"}),"WebAdmin settings dialog")," of the 4D application with interface and run it headless afterwards. The default ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file is then used."),(0,a.kt)("p",null,"Or, you can set a custom ",(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings")," file (xml format) and use it instead of the default file. Several dedicated arguments are available in the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/pt/19/Admin/cli"}),"Command line interface")," to support this feature."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The access key is not stored in clear in the ",(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings")," file.")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{}),'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n "my Fabulous AccessKey" --webadmin-auto-start true   \n --webadmin-store-settings\n\n')),(0,a.kt)("h2",i({},{id:"authentication-and-session"}),"Authentication and Session"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When a web management page is accessed by entering an URL and without prior identification, an authentication is required. The user must enter the ",(0,a.kt)("a",i({parentName:"p"},{href:"#access-key"}),"access key")," in an authentication dialog box. If the access key was not defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," settings, no access via URL is possible.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When a web management page is accessed directly from a 4D or 4D Server menu item (such as ",(0,a.kt)("strong",{parentName:"p"},"Records > Data Explorer")," or ",(0,a.kt)("strong",{parentName:"p"},"Window > Data Explorer")," (4D Server)), access is granted without authentication, the user is automatically authenticated."))),(0,a.kt)("p",null,"Once the access is granted, a web ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/pt/19/WebServer/sessions"}),"session"),' with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the ',(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," component delivers requested pages."))}u.isMDXComponent=!0},51675:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},73246:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},83512:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},68233:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},19322:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"}}]);