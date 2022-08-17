"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e};const m={id:"advanced-programming",title:"Advanced programming with Javascript"},u=void 0,h={unversionedId:"ViewPro/advanced-programming",id:"ViewPro/advanced-programming",title:"Advanced programming with Javascript",description:"A 4D View Pro Area is a Web Area form object that uses the embedded web rendering engine. As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the WA Evaluate Javascript 4D command.",source:"@site/docs/ViewPro/advanced-programming.md",sourceDirName:"ViewPro",slug:"/ViewPro/advanced-programming",permalink:"/docs/next/ViewPro/advanced-programming",draft:!1,tags:[],version:"current",frontMatter:{id:"advanced-programming",title:"Advanced programming with Javascript"},sidebar:"docs",previous:{title:"Method List",permalink:"/docs/next/ViewPro/method-list"},next:{title:"Developing Components",permalink:"/docs/next/Extensions/develop-components"}},v={},b=[{value:"Hands-on example: Hiding the Ribbon",id:"hands-on-example-hiding-the-ribbon",level:2},{value:"Calling SpreadJS Javascript methods",id:"calling-spreadjs-javascript-methods",level:2},{value:"Example",id:"example",level:4},{value:"4D View Pro Tips repository",id:"4d-view-pro-tips-repository",level:2}],g={toc:b};function f(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),c),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A 4D View Pro Area is a ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/next/FormObjects/webAreaOverview"}),"Web Area form object")," that uses the ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/next/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"}),"embedded web rendering engine"),". As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1029.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"WA Evaluate Javascript"))," 4D command. "),(0,a.kt)("p",null,"Since 4D View Pro is powered by the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html"}),"SpreadJS spreadsheet solution"),", you can also call SpreadJS Javascript methods in 4D View Pro areas."),(0,a.kt)("h2",d({},{id:"hands-on-example-hiding-the-ribbon"}),"Hands-on example: Hiding the Ribbon"),(0,a.kt)("p",null,"Since 4D View Pro is a web area, you can select a webpage element and modify its behavior using Javascript. The following example hides the spreadJS ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/next/ViewPro/configuring#ribbon"}),"Ribbon"),": "),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-4d"}),"//Button's object method\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n")),(0,a.kt)("h2",d({},{id:"calling-spreadjs-javascript-methods"}),"Calling SpreadJS Javascript methods"),(0,a.kt)("p",null,"You can tap into the SpreadJS library of Javascript methods and call them directly to control your spreadsheets. "),(0,a.kt)("p",null,"4D has a built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"Utils.spread")," property that gives access to the spreadsheet document (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS ",(0,a.kt)("a",d({parentName:"p"},{href:"https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Workbook.html"}),"Workbook methods"),"."),(0,a.kt)("h4",d({},{id:"example"}),"Example"),(0,a.kt)("p",null,"The following code undoes the last action in the spreadsheet:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-4d"}),'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n')),(0,a.kt)("h2",d({},{id:"4d-view-pro-tips-repository"}),"4D View Pro Tips repository"),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/4d-depot/4D-View-Pro-Tips"}),"4D-View-Pro-Tips")," is a GitHub repository that contains a project full of useful functions, allowing to manage floating pictures, sort columns or rows, create a custom culture, and much more! Feel free to clone it and experiment with the project."))}f.isMDXComponent=!0}}]);