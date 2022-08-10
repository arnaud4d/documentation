"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"php",title:"PHP page"},p=void 0,c={unversionedId:"settings/php",id:"settings/php",title:"PHP page",description:"In 4D, you can execute PHP scripts directly by configuring the PHP page of the Database Settings (see Executing PHP scripts in 4D in the 4D Language Reference manual).",source:"@site/docs/settings/php.md",sourceDirName:"settings",slug:"/settings/php",permalink:"/docs/pt/next/settings/php",draft:!1,tags:[],version:"current",frontMatter:{id:"php",title:"PHP page"},sidebar:"docs",previous:{title:"SQL page",permalink:"/docs/pt/next/settings/sql"},next:{title:"Security page",permalink:"/docs/pt/next/settings/security"}},l={},u=[{value:"Interpreter",id:"interpreter",level:2},{value:"Options",id:"options",level:2}],m={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In 4D, you can execute PHP scripts directly by configuring the PHP page of the Database Settings (see ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html"},"Executing PHP scripts in 4D")," in the 4D ",(0,o.kt)("em",{parentName:"p"},"Language Reference")," manual)."),(0,o.kt)("h2",{id:"interpreter"},"Interpreter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"IP Address")," and Port number\nBy default, 4D provides a PHP interpreter, compiled in FastCGI. For reasons related to the internal architecture, execution requests go to the PHP interpreter at a specific HTTP address. By default, 4D uses the address 127.0.0.1 and port 8002. You can change this address and/or port if they are already used by another service or if you have several interpreters on the same machine. To do this, you modify the ",(0,o.kt)("strong",{parentName:"p"},"IP Address")," and ",(0,o.kt)("strong",{parentName:"p"},"Port number")," parameters.\\\nNote that the HTTP address must be on the same machine as 4D.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"External interpreter"),'\nIf you use an external PHP interpreter, it must be compiled in FastCGI and be on the same machine as 4D (see "Using another PHP interpreter or another php.ini file" in ',(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html"},"Executing PHP scripts in 4D"),").\nSelect this option so 4D does not attempt a connection with the internal interpreter when executing a PHP request. Note that this configuration requires your manual execution and control of the external interpreter."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4D Server:")," These settings are shared between 4D Server and the 4D remote machines so it is not possible to use an external interpreter on the server machine and simultaneously use the internal interpreter on the client machines (and vice versa). Also, if the server uses an external interpreter on port 9002, the client machines must also use an interpreter on this port."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"These options are related to the automatic management of the 4D PHP interpreter and are disabled when the ",(0,o.kt)("strong",{parentName:"p"},"External interpreter")," option is selected."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Number of processes"),': The 4D PHP interpreter drives a set of system execution processes called "child processes". For optimization, it can run and keep up to five child processes simultaneously by default. You can modify the number of child processes according to your needs. For example, you may want to increase this value if you call on the PHP interpreter intensively. For more information, refer to the "Architecture" section in ',(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html"},"Executing PHP scripts in 4D"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Under Mac OS, all child processes share the same port. Under Windows, each child process uses a specific port number. The first number is the one set for the PHP interpreter; the other child processes increment this number. For example, if the default port is 8002 and you launch 5 child processes, they will use ports 8002 to 8006."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Restart the interpreter after X requests"),": This sets the maximum number of requests that the 4D PHP interpreter accepts. When this number is reached, the interpreter restarts. For more information about this parameter, refer to the FastCGI-PHP documentation."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," In this dialog box, the parameters are specified by default for all connected machines and all sessions. You can also modify and read them separately for each machine and each session using the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page642.html"},"SET DATABASE PARAMETER")," and ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page643.html"},"Get database parameter")," commands. The parameters modified by the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page642.html"},"SET DATABASE PARAMETER")," command have priority for the current session.")))))}h.isMDXComponent=!0}}]);