"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"genInfo",title:"Getting Server Information"},s=void 0,c={unversionedId:"REST/genInfo",id:"REST/genInfo",title:"Getting Server Information",description:"You can get several information from the REST server:",source:"@site/docs/REST/genInfo.md",sourceDirName:"REST",slug:"/REST/genInfo",permalink:"/main/docs/next/REST/genInfo",draft:!1,tags:[],version:"current",frontMatter:{id:"genInfo",title:"Getting Server Information"},sidebar:"docs",previous:{title:"Users and sessions",permalink:"/main/docs/next/REST/authUsers"},next:{title:"Manipulating Data",permalink:"/main/docs/next/REST/manData"}},u={},p=[{value:"Catalog",id:"catalog",level:2},{value:"Cache info",id:"cache-info",level:2},{value:"queryPath and queryPlan",id:"querypath-and-queryplan",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can get several information from the REST server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the exposed datastores and their attributes"),(0,o.kt)("li",{parentName:"ul"},"the REST server cache contents, including user sessions.")),(0,o.kt)("h2",{id:"catalog"},"Catalog"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/REST/catalog"},(0,o.kt)("inlineCode",{parentName:"a"},"$catalog")),", ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/REST/catalog#catalogdataclass"},(0,o.kt)("inlineCode",{parentName:"a"},"$catalog/{dataClass}")),", or ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/REST/catalog#catalogall"},(0,o.kt)("inlineCode",{parentName:"a"},"$catalog/$all"))," parameters to get the list of ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/REST/configuration#exposing-tables-and-fields"},"exposed dataclasses and their attributes"),"."),(0,o.kt)("p",null,"To get the collection of all exposed dataclasses along with their attributes:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET /rest/$catalog/$all")),(0,o.kt)("h2",{id:"cache-info"},"Cache info"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/REST/info"},(0,o.kt)("inlineCode",{parentName:"a"},"$info"))," parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions. "),(0,o.kt)("h2",{id:"querypath-and-queryplan"},"queryPath and queryPlan"),(0,o.kt)("p",null,"Entity selections that are generated through queries can have the following two properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"queryPlan")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"queryPath"),". To calculate and return these properties, you just need to add ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/REST/queryplan"},(0,o.kt)("inlineCode",{parentName:"a"},"$queryPlan"))," and/or ",(0,o.kt)("a",{parentName:"p",href:"/main/docs/next/REST/querypath"},(0,o.kt)("inlineCode",{parentName:"a"},"$queryPath"))," in the REST request."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true')),(0,o.kt)("p",null,"These properties are objects that contain information about how the server performs composite queries internally through dataclasses and relations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"queryPlan"),": object containing the detailed description of the query just before it was executed (i.e., the planned query)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"queryPath"),": object containing the detailed description of the query as it was actually performed.")),(0,o.kt)("p",null,"The information recorded includes the query type (indexed and sequential) and each necessary subquery along with conjunction operators. Query paths also contain the number of entities found and the time required to execute each search criterion. You may find it useful to analyze this information while developing your application. Generally, the description of the query plan and its path are identical but they can differ because 4D can implement dynamic optimizations when a query is executed in order to improve performance. For example, the 4D engine can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low."))}m.isMDXComponent=!0}}]);