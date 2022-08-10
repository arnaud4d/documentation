"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"overview",title:"Overview"},p=void 0,d={unversionedId:"Extensions/overview",id:"Extensions/overview",title:"Overview",description:"The 4D project architecture is modular. You can provide additional functionalities to your 4D projects by installing components and plug-ins. Components are made of 4D code, while plug-ins can be built using any language.",source:"@site/docs/Extensions/overview.md",sourceDirName:"Extensions",slug:"/Extensions/overview",permalink:"/main/ja/docs/next/Extensions/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Restore",permalink:"/main/ja/docs/next/Backup/restore"},next:{title:"Getting Started",permalink:"/main/ja/docs/next/ViewPro/getting-started"}},s={},m=[{value:"Preinstalled 4D components",id:"preinstalled-4d-components",level:2},{value:"Third-party components",id:"third-party-components",level:2},{value:"Plugins",id:"plugins",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The 4D ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/Project/architecture"},"project architecture")," is modular. You can provide additional functionalities to your 4D projects by installing ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/Concepts/components"},(0,o.kt)("strong",{parentName:"a"},"components"))," and ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/Concepts/plug-ins"},(0,o.kt)("strong",{parentName:"a"},"plug-ins")),". Components are made of 4D code, while plug-ins can be built using any language. "),(0,o.kt)("h2",{id:"preinstalled-4d-components"},"Preinstalled 4D components"),(0,o.kt)("p",null,"4D includes by default a set of built-in 4D components, that you can see in the ",(0,o.kt)("strong",{parentName:"p"},"Component Methods")," theme of the Explorer's Methods page. "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Main Features"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4D Labels"),(0,o.kt)("td",{parentName:"tr",align:null},"Internal component required to build label templates"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/4d-go-mobile/4D-Mobile-App-Server"},"4D Mobile App Server")),(0,o.kt)("td",{parentName:"tr",align:null},"Set of utility classes and functions to authenticate, manage sessions, and develop mobile applications"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},".Action"),", ",(0,o.kt)("inlineCode",{parentName:"td"},".Authentication"),", ",(0,o.kt)("inlineCode",{parentName:"td"},".PushNotification"),", ",(0,o.kt)("inlineCode",{parentName:"td"},".WebHandler"),", Authentication with email confirmation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/4d/4D-NetKit"},"4D NetKit")),(0,o.kt)("td",{parentName:"tr",align:null},"Set of tools to connect to third-party APIs"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"OAuth2Provider")," class, ",(0,o.kt)("inlineCode",{parentName:"td"},"New OAuth2 provider"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"OAuth2ProviderObject.getToken()"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://doc.4d.com/4Dv19/4D/19/4D-Progress.100-5461799.en.html"},"4D Progress")),(0,o.kt)("td",{parentName:"tr",align:null},"Open one or more progress bars in the same window"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Progress New"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Progress SET ON STOP METHOD"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Progress SET PROGRESS"),", ...")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://doc.4d.com/4Dv19/4D/19/4D-SVG-Component.300-5462064.en.html"},"4D SVG")),(0,o.kt)("td",{parentName:"tr",align:null},"Create and manipulate common svg graphic objects"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SVGTool_Display_viewer"),", multiple ",(0,o.kt)("inlineCode",{parentName:"td"},"SVG_")," methods")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/main/ja/docs/next/ViewPro/getting-started"},"4D ViewPro")),(0,o.kt)("td",{parentName:"tr",align:null},"Spreadsheet features in your forms"),(0,o.kt)("td",{parentName:"tr",align:null},"See ",(0,o.kt)("a",{parentName:"td",href:"/main/ja/docs/next/ViewPro/getting-started"},"4D View Pro documentation"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html"},"4D Widgets")),(0,o.kt)("td",{parentName:"tr",align:null},"Manage DatePicker, TimePicker, SearchPicker 4D widgets"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DatePicker calendar"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"DateEntry area"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"TimeEntry"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"SearchPicker SET HELP TEXT"),", ...")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/4d/4D-WritePro-Interface"},"4D WritePro Interface")),(0,o.kt)("td",{parentName:"tr",align:null},"Manage ",(0,o.kt)("a",{parentName:"td",href:"https://doc.4d.com/4Dv19R3/4D/19-R3/4D-Write-Pro-Reference.100-5606477.en.html"},"4D Write Pro")," palettes"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"WP CreatePreview"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"WP PictureSettings"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"WP ShowTabPages"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"WP SwitchToolbar"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"WP UpdateWidget"))))),(0,o.kt)("h2",{id:"third-party-components"},"Third-party components"),(0,o.kt)("p",null,"You can develop and install your own 4D components. See ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/Extensions/develop-components"},"this page")," for more information. "),(0,o.kt)("p",null,"Many developers from the 4D community have shared 4D components that you can install and use in you projects."),(0,o.kt)("p",null,"Browse Github to have a list of public 4D components gathered with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/topics/4d-component"},(0,o.kt)("inlineCode",{parentName:"a"},"4d-component"))," topic. "),(0,o.kt)("h2",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"Plugins do things that 4D does not natively (e.g., specific platform technology), or would be very hard to write just using 4D. As described in ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/Extensions/develop-plug-ins"},"this page"),", you can develop your own plug-ins. "),(0,o.kt)("p",null,"A lot of functionnalities are covered by the existing 4D plug-ins. Browse Github to have a list of public 4D plugins gathered with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/topics/4d-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"4d-plugin"))," topic."))}u.isMDXComponent=!0}}]);