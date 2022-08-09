"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75012],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),h=s,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},82042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=t(87462),s=t(63366),a=(t(67294),t(3905)),o=["components"],i={id:"authUsers",title:"Users and sessions"},l=void 0,u={unversionedId:"REST/authUsers",id:"version-18/REST/authUsers",title:"Users and sessions",description:"Authenticating users",source:"@site/versioned_docs/version-18/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/fr/docs/18/REST/authUsers",draft:!1,tags:[],version:"18",frontMatter:{id:"authUsers",title:"Users and sessions"},sidebar:"docs",previous:{title:"Server Configuration",permalink:"/docs/fr/docs/18/REST/configuration"},next:{title:"Getting Server Information",permalink:"/docs/fr/docs/18/REST/genInfo"}},d={},c=[{value:"Authenticating users",id:"authenticating-users",level:2},{value:"Session cookie",id:"session-cookie",level:2},{value:"Example",id:"example",level:3}],p={toc:c};function h(e){var n=e.components,t=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"authenticating-users"},"Authenticating users"),(0,a.kt)("p",null,"As a first step to open a REST session on the 4D server, the user sending the request must be authenticated. "),(0,a.kt)("p",null,"You log in a user to your application by passing the user's name and password to ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/18/REST/directory#directorylogin"},(0,a.kt)("inlineCode",{parentName:"a"},"$directory/login")),". "),(0,a.kt)("p",null,"Once a user is successfully logged, a session is open. See below to know how to handle the session cookie in subsequent client requests, if necessary."),(0,a.kt)("p",null,"The session will automatically be closed once the timeout is reached.    "),(0,a.kt)("h2",{id:"session-cookie"},"Session cookie"),(0,a.kt)("p",null,"Each REST request is handled through a specific session on the 4D server. "),(0,a.kt)("p",null,"When a first valid REST request is received, the server creates the session and sends a session cookie named ",(0,a.kt)("inlineCode",{parentName:"p"},"WASID4D")," in the ",(0,a.kt)("strong",{parentName:"p"},'"Set-Cookie" response header'),", containing the session UUID, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3\n")),(0,a.kt)("p",null,"In the subsequent REST requests, make sure this cookie is included in the ",(0,a.kt)("strong",{parentName:"p"},'"Cookie" request header')," so that you will reuse the same session. Otherwise, a new session will be opened, and another license used. "),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"The way to handle session cookies actually depends on your HTTP client. This example shows how to extract and resend the session cookie in the context of requests handled through the 4D ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP Request")," command. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'// Creating headers\nARRAY TEXT(headerNames;0)\nARRAY TEXT(headerValues;0)\n\nAPPEND TO ARRAY(headerNames;"username-4D")\nAPPEND TO ARRAY(headerNames;"session-4D-length")\nAPPEND TO ARRAY(headerNames;"hashed-password-4D")\n\nAPPEND TO ARRAY(headerValues;"kind user")\nAPPEND TO ARRAY(headerValues;"60")\nAPPEND TO ARRAY(headerValues;Generate digest("test";4D digest))\n\nC_OBJECT($response)\n$response:=New object\n \n//This request opens a session for the user "kind user"\n$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\\  \n    $response;headerNames;headerValues;*)\n \n \n//Build new arrays for headers with only the cookie WASID4D\nbuildHeader(->headerNames;->headerValues)\n\n//This other request will not open a new session\n$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\\  \n    $response;headerNames;headerValues;*)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'// buildHeader project method  \n\nC_POINTER($pointerNames;$1;$pointerValues;$2)\nARRAY TEXT($headerNames;0)\nARRAY TEXT($headerValues;0)\n\nCOPY ARRAY($1->;$headerNames)\nCOPY ARRAY($2->;$headerValues)\n\n$indexCookie:=Find in array($headerValues;"WASID4D@")\n$cookie:=$headerValues{$indexCookie}\n$start:=Position("WASID4D";$cookie)\n$end:=Position(";";$cookie)\n$uuid:= Substring($cookie;$start;$end-$start)\n\nARRAY TEXT($headerNames;1)\nARRAY TEXT($headerValues;1)\n\n$headerNames{1}:="Cookie"\n$headerValues{1}:=$uuid\n\nCOPY ARRAY($headerNames;$1->)\nCOPY ARRAY($headerValues;$2->)\n')))}h.isMDXComponent=!0}}]);