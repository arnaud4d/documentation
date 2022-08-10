"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49085],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},20246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"propertiesWebArea",title:"Web Area"},s=void 0,d={unversionedId:"FormObjects/propertiesWebArea",id:"version-18/FormObjects/propertiesWebArea",title:"Web Area",description:"---",source:"@site/versioned_docs/version-18/FormObjects/properties_WebArea.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesWebArea",permalink:"/es/docs/18/FormObjects/propertiesWebArea",draft:!1,tags:[],version:"18",frontMatter:{id:"propertiesWebArea",title:"Web Area"},sidebar:"docs",previous:{title:"Text and Picture",permalink:"/es/docs/18/FormObjects/propertiesTextAndPicture"},next:{title:"Overview",permalink:"/es/docs/18/Menus/overview"}},p={},m=[{value:"Access 4D methods",id:"access-4d-methods",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Progression",id:"progression",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"URL",id:"url",level:2},{value:"URL Variable and WA OPEN URL command",id:"url-variable-and-wa-open-url-command",level:3},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4},{value:"Use embedded Web rendering engine",id:"use-embedded-web-rendering-engine",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Objects Supported",id:"objects-supported-3",level:4}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"access-4d-methods"},"Access 4D methods"),(0,o.kt)("p",null,'You can call 4D methods from the JavaScript code executed in a Web area and get values in return. To be able to call 4D methods from a Web area, you must activate the 4D methods accessibility property ("all").'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This property is only available if the Web area ",(0,o.kt)("a",{parentName:"p",href:"#use-embedded-web-rendering-engine"},"uses the embedded Web rendering engine"),".")),(0,o.kt)("p",null,"When this property is on, a special JavaScript object named ",(0,o.kt)("inlineCode",{parentName:"p"},"$4d")," is instantiated in the Web area, which you can ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/18/FormObjects/webAreaOverview#4d-object"},"use to manage calls to 4D project methods"),"."),(0,o.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"methodsAccessibility"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},'"none" (default), "all"')))),(0,o.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/es/docs/18/FormObjects/webAreaOverview"},"Web Area")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"progression"},"Progression"),(0,o.kt)("p",null,"Name of a Longint type variable. This variable will receive a value between 0 and 100, representing the page load completion percentage in the Web area. Automatically updated by 4D, cannot be modified manually."),(0,o.kt)("h4",{id:"json-grammar-1"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"progressSource"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of a Longint variable")))),(0,o.kt)("h4",{id:"objects-supported-1"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/es/docs/18/FormObjects/webAreaOverview"},"Web Area")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"url"},"URL"),(0,o.kt)("p",null,"A String type variable that designates the URL loaded or being loading by the associated Web area. The association between the variable and the Web area works in both directions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the user assigns a new URL to the variable, this URL is automatically loaded by the Web area."),(0,o.kt)("li",{parentName:"ul"},"Any browsing done within the Web area will automatically update the contents of the variable.")),(0,o.kt)("p",null,"Schematically, this variable functions like the address area of a Web browser. You can represent it via a text area above the Web area."),(0,o.kt)("h3",{id:"url-variable-and-wa-open-url-command"},"URL Variable and WA OPEN URL command"),(0,o.kt)("p",null,"The URL variable produces the same effects as the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"},"WA OPEN URL")," command. The following differences should nevertheless be noted:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'For access to documents, this variable only accepts URLs that are RFC-compliant ("file://c:/My%20Doc") and not system pathnames ("c:\\MyDoc"). The ',(0,o.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"},"WA OPEN URL")," command accepts both notations."),(0,o.kt)("li",{parentName:"ul"},"If the URL variable contains an empty string, the Web area does not attempt to load the URL. The ",(0,o.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"},"WA OPEN URL")," command generates an error in this case."),(0,o.kt)("li",{parentName:"ul"},'If the URL variable does not contain a protocol (http, mailto, file, etc.), the Web area adds "http://", which is not the case for the ',(0,o.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"},"WA OPEN URL")," command."),(0,o.kt)("li",{parentName:"ul"},"When the Web area is not displayed in the form (when it is located on another page of the form), executing the ",(0,o.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"},"WA OPEN URL")," command has no effect, whereas assigning a value to the URL variable can be used to update the current URL.")),(0,o.kt)("h4",{id:"json-grammar-2"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"urlSource"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"A URL.")))),(0,o.kt)("h4",{id:"objects-supported-2"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/es/docs/18/FormObjects/webAreaOverview"},"Web Area")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"use-embedded-web-rendering-engine"},"Use embedded Web rendering engine"),(0,o.kt)("p",null,"This option allows choosing between two rendering engines for the Web area, depending on the specifics of your application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"unchecked")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON value: system"),' (default): In this case, 4D uses the "best" engine corresponding to the system. On Windows, 4D automatically uses the most recent version of the browser found on the machine (IE11, MS Edge, etc.). On macOS, 4D uses the current version of WebKit (Safari).\nThis means that you automatically benefit from the latest advances in Web rendering, through HTML5 or JavaScript. However, you may notice some rendering differences between Internet Explorer/Edge implementations and Web Kit ones.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"checked")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON value: embedded"),": In this case, 4D uses Blink engine from Google. Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). When this option is chosen, you no longer benefit from automatic updates of the Web engine performed by the operating system; however, new versions of the engines are provided through 4D.")),(0,o.kt)("p",null,"Note that the Blink engine has the following limitations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"*   [WA SET PAGE CONTENT](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PAGE-CONTENT.301-5232965.en.html): using this command requires that at least one page is already loaded in the area (through a call to [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html) or an assignment to the URL variable associated to the area).\n*   Execution of JavaScript is always enabled; execution of Java applets and plug-ins is always disabled. These settings cannot be modified in Blink. The following selectors of the [WA SET PREFERENCE](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PREFERENCE.301-5232962.en.html) and [WA GET PREFERENCE](https://doc.4d.com/4Dv18/4D/18.4/WA-GET-PREFERENCE.301-5232945.en.html) commands are ignored:\n    *   `WA enable Java applets`\n    *   `WA enable JavaScript`\n    *   `WA enable plugins`\n*   When URL drops are enabled by the `WA enable URL drop` selector of the [WA SET PREFERENCE](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PREFERENCE.301-5232962.en.html) command, the first drop must be preceded by at least one call to [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html) or one assignment to the URL variable associated to the area.\n")),(0,o.kt)("h4",{id:"json-grammar-3"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"webEngine"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},'"embedded", "system"')))),(0,o.kt)("h4",{id:"objects-supported-3"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/es/docs/18/FormObjects/webAreaOverview"},"Web Area")))}u.isMDXComponent=!0}}]);