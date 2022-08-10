"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},49470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"propertiesFooters",title:"Footers"},s=void 0,p={unversionedId:"FormObjects/propertiesFooters",id:"FormObjects/propertiesFooters",title:"Footers",description:"Display Footers",source:"@site/docs/FormObjects/properties_Footers.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesFooters",permalink:"/main/ja/docs/next/FormObjects/propertiesFooters",draft:!1,tags:[],version:"current",frontMatter:{id:"propertiesFooters",title:"Footers"},sidebar:"docs",previous:{title:"Entry",permalink:"/main/ja/docs/next/FormObjects/propertiesEntry"},next:{title:"Gridlines",permalink:"/main/ja/docs/next/FormObjects/propertiesGridlines"}},c={},m=[{value:"Display Footers",id:"display-footers",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Height",id:"height",level:2},{value:"JSON Example",id:"json-example",level:4},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"See also",id:"see-also",level:4}],u={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"display-footers"},"Display Footers"),(0,o.kt)("p",null,"This property is used to display or hide ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview#list-box-footers"},"list box column footers"),". There is one footer per column; each footer is configured separately."),(0,o.kt)("h4",{id:"json-grammar"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"showFooters"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"true, false")))),(0,o.kt)("h4",{id:"objects-supported"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview"},"List Box")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"height"},"Height"),(0,o.kt)("p",null,"This property is used to set the row height for a list box footer in ",(0,o.kt)("strong",{parentName:"p"},"pixels")," or ",(0,o.kt)("strong",{parentName:"p"},"text lines")," (when displayed). Both types of units can be used in the same list box:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Pixel")," - the height value is applied directly to the row concerned, regardless of the font size contained in the columns. If a font is too big, the text is truncated. Moreover, pictures are truncated or resized according to their format.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Line")," - the height is calculated while taking into account the font size of the row concerned."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'If more than one size is set, 4D uses the biggest one. For example, if a row contains "Verdana 18", "Geneva 12" and "Arial 9", 4D uses "Verdana 18" to determine the row height (for instance, 25 pixels). This height is then multiplied by the number of rows defined.'),(0,o.kt)("li",{parentName:"ul"},"This calculation does not take into account the size of pictures nor any styles applied to the fonts."),(0,o.kt)("li",{parentName:"ul"},"In macOS, the row height may be incorrect if the user enters characters that are not available in the selected font. When this occurs, a substitute font is used, which may cause variations in size.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This property can also be set dynamically using the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv17R6/4D/17-R6/List-box-footer-specific-properties.300-4354808.en.html"},"LISTBOX SET FOOTERS HEIGHT")," command.")),(0,o.kt)("p",null,'Conversion of units: When you switch from one unit to the other, 4D converts them automatically and displays the result in the Property List. For example, if the font used is "Lucida grande 24", a height of "1 line" is converted to "30 pixels" and a height of "60 pixels" is converted to "2 lines".'),(0,o.kt)("p",null,"Note that converting back and forth may lead to an end result that is different from the starting value due to the automatic calculations made by 4D. This is illustrated in the following sequences:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(font Arial 18)"),": 52 pixels -> 2 lines -> 40 pixels\n",(0,o.kt)("em",{parentName:"p"},"(font Arial 12)"),": 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels"),(0,o.kt)("h4",{id:"json-example"},"JSON Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' "List Box": {\n  "type": "listbox",\n  "showFooters": true,\n  "footerHeight": "44px",  \n  ...\n  }\n')),(0,o.kt)("h4",{id:"json-grammar-1"},"JSON Grammar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"footerHeight"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"positive decimal+px ","|"," em")))),(0,o.kt)("h4",{id:"objects-supported-1"},"Objects Supported"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview"},"List Box")),(0,o.kt)("h4",{id:"see-also"},"See also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/propertiesHeaders"},"Headers")," - ",(0,o.kt)("a",{parentName:"p",href:"/main/ja/docs/next/FormObjects/listboxOverview#list-box-footers"},"List box footers")))}d.isMDXComponent=!0}}]);