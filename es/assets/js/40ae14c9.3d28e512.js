"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66014],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"advanced-programming",title:"Advanced programming with Javascript"},p=void 0,l={unversionedId:"ViewPro/advanced-programming",id:"version-19-R6/ViewPro/advanced-programming",title:"Advanced programming with Javascript",description:"A 4D View Pro Area is a Web Area form object that uses the embedded web rendering engine. As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the WA Evaluate Javascript 4D command.",source:"@site/versioned_docs/version-19-R6/ViewPro/advanced-programming.md",sourceDirName:"ViewPro",slug:"/ViewPro/advanced-programming",permalink:"/docs/es/ViewPro/advanced-programming",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"advanced-programming",title:"Advanced programming with Javascript"},sidebar:"docs",previous:{title:"Method List",permalink:"/docs/es/ViewPro/method-list"},next:{title:"Developing Components",permalink:"/docs/es/Extensions/develop-components"}},c={},d=[{value:"Hands-on example: Hiding the Ribbon",id:"hands-on-example-hiding-the-ribbon",level:2},{value:"Calling SpreadJS Javascript methods",id:"calling-spreadjs-javascript-methods",level:2},{value:"Example",id:"example",level:4},{value:"4D View Pro Tips repository",id:"4d-view-pro-tips-repository",level:2}],m={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A 4D View Pro Area is a ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/FormObjects/webAreaOverview"},"Web Area form object")," that uses the ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"},"embedded web rendering engine"),". As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19/help/command/en/page1029.html"},(0,o.kt)("inlineCode",{parentName:"a"},"WA Evaluate Javascript"))," 4D command. "),(0,o.kt)("p",null,"Since 4D View Pro is powered by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html"},"SpreadJS spreadsheet solution"),", you can also call SpreadJS Javascript methods in 4D View Pro areas."),(0,o.kt)("h2",{id:"hands-on-example-hiding-the-ribbon"},"Hands-on example: Hiding the Ribbon"),(0,o.kt)("p",null,"Since 4D View Pro is a web area, you can select a webpage element and modify its behavior using Javascript. The following example hides the spreadJS ",(0,o.kt)("a",{parentName:"p",href:"/docs/es/ViewPro/configuring#ribbon"},"Ribbon"),": "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"//Button's object method\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n")),(0,o.kt)("h2",{id:"calling-spreadjs-javascript-methods"},"Calling SpreadJS Javascript methods"),(0,o.kt)("p",null,"You can tap into the SpreadJS library of Javascript methods and call them directly to control your spreadsheets. "),(0,o.kt)("p",null,"4D has a built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Utils.spread")," property that gives access to the spreadsheet document (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS ",(0,o.kt)("a",{parentName:"p",href:"https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Workbook.html"},"Workbook methods"),"."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"The following code undoes the last action in the spreadsheet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n')),(0,o.kt)("h2",{id:"4d-view-pro-tips-repository"},"4D View Pro Tips repository"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-depot/4D-View-Pro-Tips"},"4D-View-Pro-Tips")," is a GitHub repository that contains a project full of useful functions, allowing to manage floating pictures, sort columns or rows, create a custom culture, and much more! Feel free to clone it and experiment with the project."))}u.isMDXComponent=!0}}]);