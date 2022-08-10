"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2766],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),i=["components"],s={id:"propertiesFooters",title:"Footers"},l=void 0,p={unversionedId:"FormObjects/propertiesFooters",id:"version-19-R6/FormObjects/propertiesFooters",title:"Footers",description:"Display Footers",source:"@site/versioned_docs/version-19-R6/FormObjects/properties_Footers.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesFooters",permalink:"/ja/docs/FormObjects/propertiesFooters",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"propertiesFooters",title:"Footers"},sidebar:"docs",previous:{title:"Entry",permalink:"/ja/docs/FormObjects/propertiesEntry"},next:{title:"Gridlines",permalink:"/ja/docs/FormObjects/propertiesGridlines"}},c={},u=[{value:"Display Footers",id:"display-footers",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Height",id:"height",level:2},{value:"JSON Example",id:"json-example",level:4},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"See also",id:"see-also",level:4}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"display-footers"},"Display Footers"),(0,n.kt)("p",null,"This property is used to display or hide ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/FormObjects/listboxOverview#list-box-footers"},"list box column footers"),". There is one footer per column; each footer is configured separately."),(0,n.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"showFooters"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"true, false")))),(0,n.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ja/docs/FormObjects/listboxOverview"},"List Box")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"height"},"Height"),(0,n.kt)("p",null,"This property is used to set the row height for a list box footer in ",(0,n.kt)("strong",{parentName:"p"},"pixels")," or ",(0,n.kt)("strong",{parentName:"p"},"text lines")," (when displayed). Both types of units can be used in the same list box:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Pixel")," - the height value is applied directly to the row concerned, regardless of the font size contained in the columns. If a font is too big, the text is truncated. Moreover, pictures are truncated or resized according to their format.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Line")," - the height is calculated while taking into account the font size of the row concerned."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'If more than one size is set, 4D uses the biggest one. For example, if a row contains "Verdana 18", "Geneva 12" and "Arial 9", 4D uses "Verdana 18" to determine the row height (for instance, 25 pixels). This height is then multiplied by the number of rows defined.'),(0,n.kt)("li",{parentName:"ul"},"This calculation does not take into account the size of pictures nor any styles applied to the fonts."),(0,n.kt)("li",{parentName:"ul"},"In macOS, the row height may be incorrect if the user enters characters that are not available in the selected font. When this occurs, a substitute font is used, which may cause variations in size.")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This property can also be set dynamically using the ",(0,n.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv17R6/4D/17-R6/List-box-footer-specific-properties.300-4354808.en.html"},"LISTBOX SET FOOTERS HEIGHT")," command.")),(0,n.kt)("p",null,'Conversion of units: When you switch from one unit to the other, 4D converts them automatically and displays the result in the Property List. For example, if the font used is "Lucida grande 24", a height of "1 line" is converted to "30 pixels" and a height of "60 pixels" is converted to "2 lines".'),(0,n.kt)("p",null,"Note that converting back and forth may lead to an end result that is different from the starting value due to the automatic calculations made by 4D. This is illustrated in the following sequences:"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(font Arial 18)"),": 52 pixels -> 2 lines -> 40 pixels\n",(0,n.kt)("em",{parentName:"p"},"(font Arial 12)"),": 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels"),(0,n.kt)("h4",{id:"json-example"},"JSON Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},' "List Box": {\n  "type": "listbox",\n  "showFooters": true,\n  "footerHeight": "44px",  \n  ...\n  }\n')),(0,n.kt)("h4",{id:"json-grammar-1"},"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"footerHeight"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"positive decimal+px ","|"," em")))),(0,n.kt)("h4",{id:"objects-supported-1"},"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ja/docs/FormObjects/listboxOverview"},"List Box")),(0,n.kt)("h4",{id:"see-also"},"See also"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ja/docs/FormObjects/propertiesHeaders"},"Headers")," - ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/FormObjects/listboxOverview#list-box-footers"},"List box footers")))}d.isMDXComponent=!0}}]);