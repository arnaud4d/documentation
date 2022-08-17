"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"compatibility",title:"Compatibility page"},p=void 0,s={unversionedId:"settings/compatibility",id:"version-19-R6/settings/compatibility",title:"Compatibility page",description:"The Compatibility page groups together parameters related to maintaining compatibility with previous versions of 4D.",source:"@site/versioned_docs/version-19-R6/settings/compatibility.md",sourceDirName:"settings",slug:"/settings/compatibility",permalink:"/docs/settings/compatibility",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"compatibility",title:"Compatibility page"},sidebar:"docs",previous:{title:"Security page",permalink:"/docs/settings/security"},next:{title:"Overview",permalink:"/docs/Preferences/overview"}},l={},c=[],m={toc:c};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Compatibility page groups together parameters related to maintaining compatibility with previous versions of 4D. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The number of options displayed depends on the version of 4D with which the original database/project was created, as well as the settings modified in this database/project.",(0,a.kt)("br",{parentName:"p"}),"\n","This page lists the compatibility options available for database/projects converted from 4D v18 onwards. For older compatibility options, refer to the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R3/4D/19-R3/Compatibility-page.300-5612610.en.html"}),"Compatibility page")," on ",(0,a.kt)("strong",{parentName:"p"},"doc.4d.com"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Use legacy network layer"),": Starting with 4D v15, 4D applications propose a new network layer, named ",(0,a.kt)("em",{parentName:"p"},"ServerNet"),", to handle communications between 4D Server and remote 4D machines (clients). The former network layer has become obsolete, but it is kept to ensure compatibility with existing databases. Using this option, you can enable the former network layer at any time in your 4D Server applications depending on your needs. ",(0,a.kt)("em",{parentName:"p"},"ServerNet")," is used automatically for new databases and databases converted from a v15 release or later. Note that in case of a modification, you need to restart the application for the change to be taken into account. Any client applications that were logged must also be restarted to be able to connect with the new network layer.\n",(0,a.kt)("strong",{parentName:"p"},"Note:")," This option can also be managed by programming using the ",(0,a.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER")," command.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Use standard XPath:")," By default this option is unchecked for databases converted from a 4D version prior to v18 R3, and checked for databases created with 4D v18 R3 and higher. Starting with v18 R3, the XPath implementation in 4D has been modified to be more compliant and to support more predicates. As a consequence, non-standard features of the previous implementation no longer work. They include:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'initial "/" is not the root node only - using a / as first character in a XPath expression does not declare an absolute path from the root node'),(0,a.kt)("li",{parentName:"ul"},"no implicit current node - the current node has to be included in the XPath expression"),(0,a.kt)("li",{parentName:"ul"},"no recursive searches in repeated structures - only the first element is parsed.\\  ")),(0,a.kt)("p",{parentName:"li"},"Although not standard, you might want to keep using these features so that your code continues to work as before -- in this case, just set the option ",(0,a.kt)("em",{parentName:"p"},"unchecked"),". On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page864.html"}),"DOM Find XML element")," command), make sure the ",(0,a.kt)("strong",{parentName:"p"},"Use standard XPath")," option is ",(0,a.kt)("em",{parentName:"p"},"checked"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Use LF for end of line on macOS:")," Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. If you want to benefit from this new behavior on projects converted from previous 4D versions, check this option. See ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1237.html"}),"TEXT TO DOCUMENT"),", ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1236.html"}),"Document to text"),", and ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1090.html"}),"XML SET OPTIONS"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Don't add a BOM when writing a unicode text file by default:")," Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. In previous versions, text files were written with a BOM by default. Select this option if you want to enable the new behavior in converted projects. See ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1237.html"}),"TEXT TO DOCUMENT"),", ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1236.html"}),"Document to text"),", and ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1090.html"}),"XML SET OPTIONS"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Map NULL values to blank values unchecked by default a field creation"),": For better compliance with ORDA specifications, in databases created with 4D v19 R4 and higher the ",(0,a.kt)("strong",{parentName:"p"},"Map NULL values to blank values")," field property is unchecked by default when you create fields. You can apply this default behavior to your converted databases by checking this option (working with Null values is recommended since they are fully supported by ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ORDA/overview"}),"ORDA"),"."))))}d.isMDXComponent=!0}}]);