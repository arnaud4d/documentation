"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>h,toc:()=>b});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e};const u={id:"propertiesHeaders",title:"Headers"},m=void 0,h={unversionedId:"FormObjects/propertiesHeaders",id:"FormObjects/propertiesHeaders",title:"Headers",description:"Display Headers",source:"@site/docs/FormObjects/properties_Headers.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHeaders",permalink:"/docs/fr/next/FormObjects/propertiesHeaders",draft:!1,tags:[],version:"current",frontMatter:{id:"propertiesHeaders",title:"Headers"},sidebar:"docs",previous:{title:"Gridlines",permalink:"/docs/fr/next/FormObjects/propertiesGridlines"},next:{title:"Help",permalink:"/docs/fr/next/FormObjects/propertiesHelp"}},f={},b=[{value:"Display Headers",id:"display-headers",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Height",id:"height",level:2},{value:"JSON Example",id:"json-example",level:4},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"See also",id:"see-also",level:4}],k={toc:b};function y(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=d(d({},k),c),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h2",d({},{id:"display-headers"}),"Display Headers"),(0,a.kt)("p",null,"This property is used to display or hide ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/fr/next/FormObjects/listboxOverview#list-box-headers"}),"list box column headers"),". There is one header per column; each header is configured separately."),(0,a.kt)("h4",d({},{id:"json-grammar"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Data Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"showHeaders"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"true, false")))),(0,a.kt)("h4",d({},{id:"objects-supported"}),"Objects Supported"),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"/docs/fr/next/FormObjects/listboxOverview"}),"List Box")),(0,a.kt)("hr",null),(0,a.kt)("h2",d({},{id:"height"}),"Height"),(0,a.kt)("p",null,"This property is used to set the row height for a list box header in ",(0,a.kt)("strong",{parentName:"p"},"pixels")," or ",(0,a.kt)("strong",{parentName:"p"},"text lines")," (when displayed). Both types of units can be used in the same list box:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Pixel")," - the height value is applied directly to the row concerned, regardless of the font size contained in the columns. If a font is too big, the text is truncated. Moreover, pictures are truncated or resized according to their format.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Line")," - the height is calculated while taking into account the font size of the row concerned."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'If more than one size is set, 4D uses the biggest one. For example, if a row contains "Verdana 18", "Geneva 12" and "Arial 9", 4D uses "Verdana 18" to determine the row height (for instance, 25 pixels). This height is then multiplied by the number of rows defined.'),(0,a.kt)("li",{parentName:"ul"},"This calculation does not take into account the size of pictures nor any styles applied to the fonts."),(0,a.kt)("li",{parentName:"ul"},"In macOS, the row height may be incorrect if the user enters characters that are not available in the selected font. When this occurs, a substitute font is used, which may cause variations in size.")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This property can also be set dynamically using the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-SET-HEADERS-HEIGHT.301-4311129.en.html"}),"LISTBOX SET HEADERS HEIGHT")," command.")),(0,a.kt)("p",null,'Conversion of units: When you switch from one unit to the other, 4D converts them automatically and displays the result in the Property List. For example, if the font used is "Lucida grande 24", a height of "1 line" is converted to "30 pixels" and a height of "60 pixels" is converted to "2 lines".'),(0,a.kt)("p",null,"Note that converting back and forth may lead to an end result that is different from the starting value due to the automatic calculations made by 4D. This is illustrated in the following sequences:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(font Arial 18)"),": 52 pixels -> 2 lines -> 40 pixels\n",(0,a.kt)("em",{parentName:"p"},"(font Arial 12)"),": 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels"),(0,a.kt)("h4",d({},{id:"json-example"}),"JSON Example"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),' "List Box": {\n  "type": "listbox",\n  "showHeaders": true,\n  "headerHeight": "22px",  \n  ...\n  }\n')),(0,a.kt)("h4",d({},{id:"json-grammar-1"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Data Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"headerHeight"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"positive decimal+px ","|"," em )")))),(0,a.kt)("h4",d({},{id:"objects-supported-1"}),"Objects Supported"),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"/docs/fr/next/FormObjects/listboxOverview"}),"List Box")),(0,a.kt)("h4",d({},{id:"see-also"}),"See also"),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"/docs/fr/next/FormObjects/propertiesFooters"}),"Footers")," - ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/fr/next/FormObjects/listboxOverview#list-box-headers"}),"List box headers")))}y.isMDXComponent=!0}}]);