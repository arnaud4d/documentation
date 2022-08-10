"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},89634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"propertiesWebArea",title:"Web Area"},s=void 0,d={unversionedId:"FormObjects/propertiesWebArea",id:"version-19/FormObjects/propertiesWebArea",title:"Web Area",description:"---",source:"@site/versioned_docs/version-19/FormObjects/properties_WebArea.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesWebArea",permalink:"/main/ja/docs/19/FormObjects/propertiesWebArea",draft:!1,tags:[],version:"19",frontMatter:{id:"propertiesWebArea",title:"Web Area"},sidebar:"docs",previous:{title:"Text and Picture",permalink:"/main/ja/docs/19/FormObjects/propertiesTextAndPicture"},next:{title:"Overview",permalink:"/main/ja/docs/19/Events/overview"}},p={},m=[{value:"Access 4D methods",id:"access-4d-methods",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Progression",id:"progression",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"URL",id:"url",level:2},{value:"URL Variable and WA OPEN URL command",id:"url-variable-and-wa-open-url-command",level:3},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4},{value:"Use embedded Web rendering engine",id:"use-embedded-web-rendering-engine",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Objects Supported",id:"objects-supported-3",level:4}],c={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"access-4d-methods"},"Access 4D methods"),(0,l.kt)("p",null,'You can call 4D methods from the JavaScript code executed in a Web area and get values in return. To be able to call 4D methods from a Web area, you must activate the 4D methods accessibility property ("all"). '),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This property is only available if the Web area ",(0,l.kt)("a",{parentName:"p",href:"#use-embedded-web-rendering-engine"},"uses the embedded Web rendering engine"),".")),(0,l.kt)("p",null,"When this property is on, a special JavaScript object named ",(0,l.kt)("inlineCode",{parentName:"p"},"$4d")," is instantiated in the Web area, which you can ",(0,l.kt)("a",{parentName:"p",href:"/main/ja/docs/19/FormObjects/webAreaOverview#4d-object"},"use to manage calls to 4D project methods"),". "),(0,l.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"methodsAccessibility"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"none" (default), "all"')))),(0,l.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/main/ja/docs/19/FormObjects/webAreaOverview"},"Web Area")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"progression"},"Progression"),(0,l.kt)("p",null,"Name of a Longint type variable. This variable will receive a value between 0 and 100, representing the page load completion percentage in the Web area. Automatically updated by 4D, cannot be modified manually."),(0,l.kt)("h4",{id:"json-grammar-1"},"JSON Grammar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"progressSource"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of a Longint variable")))),(0,l.kt)("h4",{id:"objects-supported-1"},"Objects Supported"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/main/ja/docs/19/FormObjects/webAreaOverview"},"Web Area")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"url"},"URL"),(0,l.kt)("p",null,"A String type variable that designates the URL loaded or being loading by the associated Web area. The association between the variable and the Web area works in both directions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the user assigns a new URL to the variable, this URL is automatically loaded by the Web area."),(0,l.kt)("li",{parentName:"ul"},"Any browsing done within the Web area will automatically update the contents of the variable.")),(0,l.kt)("p",null,"Schematically, this variable functions like the address area of a Web browser. You can represent it via a text area above the Web area."),(0,l.kt)("h3",{id:"url-variable-and-wa-open-url-command"},"URL Variable and WA OPEN URL command"),(0,l.kt)("p",null,"The URL variable produces the same effects as the ",(0,l.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"},"WA OPEN URL")," command. The following differences should nevertheless be noted:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'For access to documents, this variable only accepts URLs that are RFC-compliant ("file://c:/My%20Doc") and not system pathnames ("c:\\MyDoc"). The ',(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"},"WA OPEN URL")," command accepts both notations."),(0,l.kt)("li",{parentName:"ul"},"If the URL variable contains an empty string, the Web area does not attempt to load the URL. The ",(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"},"WA OPEN URL")," command generates an error in this case."),(0,l.kt)("li",{parentName:"ul"},'If the URL variable does not contain a protocol (http, mailto, file, etc.), the Web area adds "http://", which is not the case for the ',(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"},"WA OPEN URL")," command."),(0,l.kt)("li",{parentName:"ul"},"When the Web area is not displayed in the form (when it is located on another page of the form), executing the ",(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"},"WA OPEN URL")," command has no effect, whereas assigning a value to the URL variable can be used to update the current URL.")),(0,l.kt)("h4",{id:"json-grammar-2"},"JSON Grammar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"urlSource"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"A URL.")))),(0,l.kt)("h4",{id:"objects-supported-2"},"Objects Supported"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/main/ja/docs/19/FormObjects/webAreaOverview"},"Web Area")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"use-embedded-web-rendering-engine"},"Use embedded Web rendering engine"),(0,l.kt)("p",null,"This option allows choosing between two rendering engines for the Web area, depending on the specifics of your application:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"unchecked")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"JSON value: system"),' (default): In this case, 4D uses the "best" engine corresponding to the system. On Windows, 4D automatically uses the most recent version of the browser found on the machine (IE11, MS Edge, etc.). On macOS, 4D uses the current version of WebKit (Safari).\nThis means that you automatically benefit from the latest advances in Web rendering, through HTML5 or JavaScript. However, you may notice some rendering differences between Internet Explorer/Edge implementations and WebKit ones.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"checked")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"JSON value: embedded"),": In this case, 4D uses Blink engine from Google (CEF). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). When this option is chosen, you no longer benefit from automatic updates of the Web engine performed by the operating system; however, new versions of the engines are provided through 4D.")),(0,l.kt)("p",null,"The Blink engine has the following limitations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PAGE-CONTENT.301-5232965.en.html"},"WA SET PAGE CONTENT"),": using this command requires that at least one page is already loaded in the area (through a call to ",(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html"},"WA OPEN URL")," or an assignment to the URL variable associated to the area)."),(0,l.kt)("li",{parentName:"ul"},"When URL drops are enabled by the ",(0,l.kt)("inlineCode",{parentName:"li"},"WA enable URL drop")," selector of the ",(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PREFERENCE.301-5232962.en.html"},"WA SET PREFERENCE")," command, the first drop must be preceded by at least one call to ",(0,l.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html"},"WA OPEN URL")," or one assignment to the URL variable associated to the area.")),(0,l.kt)("h4",{id:"json-grammar-3"},"JSON Grammar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"webEngine"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"embedded", "system"')))),(0,l.kt)("h4",{id:"objects-supported-3"},"Objects Supported"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/main/ja/docs/19/FormObjects/webAreaOverview"},"Web Area")))}u.isMDXComponent=!0}}]);