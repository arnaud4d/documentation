"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),i=["components"],o={id:"overview",title:"Access Control overview"},c=void 0,l={unversionedId:"Users/overview",id:"Users/overview",title:"Access Control overview",description:"If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data, even in single-user applications.",source:"@site/docs/Users/overview.md",sourceDirName:"Users",slug:"/Users/overview",permalink:"/main/ja/docs/next/Users/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Access Control overview"},sidebar:"docs",previous:{title:"TLS Protocol (HTTPS)",permalink:"/main/ja/docs/next/Admin/tls"},next:{title:"Managing 4D users and groups",permalink:"/main/ja/docs/next/Users/editing"}},p={},u=[{value:"Access control in multi-user applications",id:"access-control-in-multi-user-applications",level:2},{value:"Access control in single-user applications",id:"access-control-in-single-user-applications",level:2},{value:"User identification",id:"user-identification",level:3},{value:"Protecting access",id:"protecting-access",level:3},{value:"Privileges",id:"privileges",level:4},{value:"Encrypting data",id:"encrypting-data",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data, even in single-user applications. "),(0,a.kt)("p",null,"4D access control strategy depends on your deployment configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in multi-user applications, you can rely on 4D users and groups,"),(0,a.kt)("li",{parentName:"ul"},"in single-user applications, user access is controlled through the system session, using commands such as ",(0,a.kt)("a",{parentName:"li",href:"https://doc.4d.com/4dv19R/help/command/en/page484.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Current system user")),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For an overview of 4D's security features, see the ",(0,a.kt)("a",{parentName:"p",href:"https://blog.4d.com/4d-security-guide/"},"4D Security guide"),".")),(0,a.kt)("h2",{id:"access-control-in-multi-user-applications"},"Access control in multi-user applications"),(0,a.kt)("p",null,"Multi-user applications are deployed with 4D Server. They include client-server, Web, or REST applications. "),(0,a.kt)("p",null,"In multi-user applications, access control is done through ",(0,a.kt)("a",{parentName:"p",href:"/main/ja/docs/next/Users/editing"},"4D users and groups"),". You create users, assign passwords, create access groups that have different levels of privileges in the application. "),(0,a.kt)("p",null,"You initiate the 4D password access control system with 4D Server by ",(0,a.kt)("a",{parentName:"p",href:"/main/ja/docs/next/Users/editing#designer-and-administrator"},"assigning a password to the Designer user"),". Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have ",(0,a.kt)("a",{parentName:"p",href:"/main/ja/docs/next/Users/editing"},"set up users and groups")," (when the application opens, no ID is required). Any part of the application can be opened."),(0,a.kt)("p",null,"When a password is assigned to the Designer, all the access privileges take effect. In order to connect to the application or to a ",(0,a.kt)("a",{parentName:"p",href:"/main/ja/docs/next/Users/editing#assigning-group-access"},"server with protected access"),", remote users must enter a login/password."),(0,a.kt)("p",null,"To disable the password access system, you just need to remove the Designer password. "),(0,a.kt)("h2",{id:"access-control-in-single-user-applications"},"Access control in single-user applications"),(0,a.kt)("p",null,"Single-user applications are desktop applications, deployed with 4D or merged with 4D Volume License. In single-user applications all users opening the application are ",(0,a.kt)("a",{parentName:"p",href:"/main/ja/docs/next/Users/editing#designer-and-administrator"},"Designers"),', they have all privileges and their name is "Designer". Access control is not based upon 4D users and groups, but upon ',(0,a.kt)("strong",{parentName:"p"},"user sessions"),"."),(0,a.kt)("h3",{id:"user-identification"},"User identification"),(0,a.kt)("p",null,"To identify the current user in a 4D single-user application, you can rely on the ",(0,a.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page484.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Current system user"))," command, which returns the user who opened the system session. Thus user authentication is delegated to the OS level."),(0,a.kt)("p",null,"You can then allow or deny access within your application by using code such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},"If(Current system user = $user) //you can store users in a database table\n    // give access to some features\nEnd if\n")),(0,a.kt)("p",null,'If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the ',(0,a.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page1666.html"},(0,a.kt)("inlineCode",{parentName:"a"},"SET USER ALIAS"))," command, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},"SET USER ALIAS(Current system user)\n")),(0,a.kt)("h3",{id:"protecting-access"},"Protecting access"),(0,a.kt)("h4",{id:"privileges"},"Privileges"),(0,a.kt)("p",null,"On a machine that is shared by several users, you can install the 4D application in a folder and give appropriate user access privileges to the folder at the OS level. "),(0,a.kt)("h4",{id:"encrypting-data"},"Encrypting data"),(0,a.kt)("p",null,"If you want to protect access to the application data, we recommend to ",(0,a.kt)("a",{parentName:"p",href:"/main/ja/docs/next/MSC/encrypt"},"encrypt data")," and provide the encryption key to the authorized user(s)."))}m.isMDXComponent=!0}}]);