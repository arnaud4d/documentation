"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58572],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},35766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],p={id:"compatibility",title:"Compatibility page"},s=void 0,l={unversionedId:"settings/compatibility",id:"settings/compatibility",title:"Compatibility page",description:"The Compatibility page groups together parameters related to maintaining compatibility with previous versions of 4D.",source:"@site/docs/settings/compatibility.md",sourceDirName:"settings",slug:"/settings/compatibility",permalink:"/main/fr/docs/next/settings/compatibility",draft:!1,tags:[],version:"current",frontMatter:{id:"compatibility",title:"Compatibility page"},sidebar:"docs",previous:{title:"Security page",permalink:"/main/fr/docs/next/settings/security"},next:{title:"Overview",permalink:"/main/fr/docs/next/Preferences/overview"}},c={},m=[],d={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Compatibility page groups together parameters related to maintaining compatibility with previous versions of 4D. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The number of options displayed depends on the version of 4D with which the original database/project was created, as well as the settings modified in this database/project.",(0,o.kt)("br",{parentName:"p"}),"\n","This page lists the compatibility options available for database/projects converted from 4D v18 onwards. For older compatibility options, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19R3/4D/19-R3/Compatibility-page.300-5612610.en.html"},"Compatibility page")," on ",(0,o.kt)("strong",{parentName:"p"},"doc.4d.com"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use legacy network layer"),": Starting with 4D v15, 4D applications propose a new network layer, named ",(0,o.kt)("em",{parentName:"p"},"ServerNet"),", to handle communications between 4D Server and remote 4D machines (clients). The former network layer has become obsolete, but it is kept to ensure compatibility with existing databases. Using this option, you can enable the former network layer at any time in your 4D Server applications depending on your needs. ",(0,o.kt)("em",{parentName:"p"},"ServerNet")," is used automatically for new databases and databases converted from a v15 release or later. Note that in case of a modification, you need to restart the application for the change to be taken into account. Any client applications that were logged must also be restarted to be able to connect with the new network layer.\n",(0,o.kt)("strong",{parentName:"p"},"Note:")," This option can also be managed by programming using the ",(0,o.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER")," command.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use standard XPath:")," By default this option is unchecked for databases converted from a 4D version prior to v18 R3, and checked for databases created with 4D v18 R3 and higher. Starting with v18 R3, the XPath implementation in 4D has been modified to be more compliant and to support more predicates. As a consequence, non-standard features of the previous implementation no longer work. They include:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'initial "/" is not the root node only - using a / as first character in a XPath expression does not declare an absolute path from the root node'),(0,o.kt)("li",{parentName:"ul"},"no implicit current node - the current node has to be included in the XPath expression"),(0,o.kt)("li",{parentName:"ul"},"no recursive searches in repeated structures - only the first element is parsed.\\  ")),(0,o.kt)("p",{parentName:"li"},"Although not standard, you might want to keep using these features so that your code continues to work as before -- in this case, just set the option ",(0,o.kt)("em",{parentName:"p"},"unchecked"),". On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page864.html"},"DOM Find XML element")," command), make sure the ",(0,o.kt)("strong",{parentName:"p"},"Use standard XPath")," option is ",(0,o.kt)("em",{parentName:"p"},"checked"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use LF for end of line on macOS:")," Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. If you want to benefit from this new behavior on projects converted from previous 4D versions, check this option. See ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page1237.html"},"TEXT TO DOCUMENT"),", ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page1236.html"},"Document to text"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page1090.html"},"XML SET OPTIONS"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Don't add a BOM when writing a unicode text file by default:")," Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. In previous versions, text files were written with a BOM by default. Select this option if you want to enable the new behavior in converted projects. See ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page1237.html"},"TEXT TO DOCUMENT"),", ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page1236.html"},"Document to text"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19R/help/command/en/page1090.html"},"XML SET OPTIONS"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Map NULL values to blank values unchecked by default a field creation"),": For better compliance with ORDA specifications, in databases created with 4D v19 R4 and higher the ",(0,o.kt)("strong",{parentName:"p"},"Map NULL values to blank values")," field property is unchecked by default when you create fields. You can apply this default behavior to your converted databases by checking this option (working with Null values is recommended since they are fully supported by ",(0,o.kt)("a",{parentName:"p",href:"/main/fr/docs/next/ORDA/overview"},"ORDA"),"."))))}h.isMDXComponent=!0}}]);