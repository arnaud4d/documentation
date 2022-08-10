"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10916],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=s.createContext({}),d=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return s.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},c=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return t?s.createElement(h,i(i({ref:n},u),{},{components:t})):s.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<r;d++)i[d]=t[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}c.displayName="MDXCreateElement"},10831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var s=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],o={id:"authUsers",title:"Users and sessions"},l=void 0,d={unversionedId:"REST/authUsers",id:"version-19/REST/authUsers",title:"Users and sessions",description:"REST requests can benefit from web user sessions, providing extra features such as multiple requests handling, data sharing between the web client processes, and user privileges.",source:"@site/versioned_docs/version-19/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/main/pt/docs/19/REST/authUsers",draft:!1,tags:[],version:"19",frontMatter:{id:"authUsers",title:"Users and sessions"},sidebar:"docs",previous:{title:"Server Configuration",permalink:"/main/pt/docs/19/REST/configuration"},next:{title:"Getting Server Information",permalink:"/main/pt/docs/19/REST/genInfo"}},u={},p=[{value:"Authenticating users",id:"authenticating-users",level:2},{value:"Opening sessions",id:"opening-sessions",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function m(e){var n=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"REST requests can benefit from ",(0,r.kt)("a",{parentName:"p",href:"/main/pt/docs/19/WebServer/sessions"},"web user sessions"),", providing extra features such as multiple requests handling, data sharing between the web client processes, and user privileges.  "),(0,r.kt)("p",null,"As a first step to open a REST session on the 4D server, the user sending the request must be authenticated."),(0,r.kt)("h2",{id:"authenticating-users"},"Authenticating users"),(0,r.kt)("p",null,"You log in a user to your application by calling ",(0,r.kt)("a",{parentName:"p",href:"/main/pt/docs/19/REST/directory#directorylogin"},(0,r.kt)("inlineCode",{parentName:"a"},"$directory/login"))," in a POST request including the user's name and password in the header. This request calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method (if it exists), where you can check the user's credentials (see example below)."),(0,r.kt)("h2",{id:"opening-sessions"},"Opening sessions"),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"/main/pt/docs/19/WebServer/sessions#enabling-sessions"},"scalable sessions are enabled")," (recommended), if the ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", a user session is then automatically opened and you can handle it through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Session")," object and the ",(0,r.kt)("a",{parentName:"p",href:"/main/pt/docs/19/API/SessionClass"},"Session API"),". Subsequent REST requests will reuse the same session cookie."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method has not been defined, a ",(0,r.kt)("inlineCode",{parentName:"p"},"guest")," session is opened."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"In this example, the user enters their email and password in an html page that requests ",(0,r.kt)("a",{parentName:"p",href:"/main/pt/docs/19/REST/directory#directorylogin"},(0,r.kt)("inlineCode",{parentName:"a"},"$directory/login"))," in a POST (it is recommended to use an HTTPS connection to send the html page). The ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method is called to validate the credentials and to set the session."),(0,r.kt)("p",null,"The HTML login page:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:t(10304).Z,width:"268",height:"85"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n <FORM name="myForm">\nEmail: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\nPassword: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()">\nLogin\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n  \n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n  \n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //rest server address\n  \n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n  \n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n')),(0,r.kt)("p",null,"When the login page is sent to the server, the ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method is called:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' //On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs.SalesPersonsEntity\n\n$Accepted:=False\n\n //A \'/rest\' URL has been called with headers username-4D and password-4D\nIf ($userId#"")\n    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if \nEnd if \n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As soon as it has been called and returned ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method is no longer called in the session.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fillSession")," project method initializes the user session, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'#DECLARE($sales : cs.SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname\n\nSession.setPrivileges($info)\n\nUse (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if \nEnd use\n')))}m.isMDXComponent=!0},10304:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"}}]);