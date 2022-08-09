"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"onHeaderClick",title:"On Header Click"},c=void 0,d={unversionedId:"Events/onHeaderClick",id:"version-19/Events/onHeaderClick",title:"On Header Click",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onHeaderClick.md",sourceDirName:"Events",slug:"/Events/onHeaderClick",permalink:"/ja/docs/19/Events/onHeaderClick",draft:!1,tags:[],version:"19",frontMatter:{id:"onHeaderClick",title:"On Header Click"},sidebar:"docs",previous:{title:"On Header",permalink:"/ja/docs/19/Events/onHeader"},next:{title:"On Load",permalink:"/ja/docs/19/Events/onLoad"}},s={},p=[{value:"Description",id:"description",level:2},{value:"List Box",id:"list-box",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Example",id:"example",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Can be called by"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/ja/docs/19/FormObjects/viewProAreaOverview"},"4D View Pro Area")," - ",(0,l.kt)("a",{parentName:"td",href:"/ja/docs/19/FormObjects/listboxOverview"},"List Box")," - ",(0,l.kt)("a",{parentName:"td",href:"/ja/docs/19/FormObjects/listboxOverview#list-box-columns"},"List Box Column")),(0,l.kt)("td",{parentName:"tr",align:null},"A click occurs in a column header")))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("h3",{id:"list-box"},"List Box"),(0,l.kt)("p",null,"This event is generated when a click occurs on the header of a column in the list box. In this case, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Self")," command lets you find out the header of the column that was clicked."),(0,l.kt)("p",null,"If the ",(0,l.kt)("a",{parentName:"p",href:"/ja/docs/19/FormObjects/propertiesAction#sortable"},"Sortable")," property was selected for the list box, you can decide whether or not to authorize a standard sort of the column by passing the value 0 or -1 in the ",(0,l.kt)("inlineCode",{parentName:"p"},"$0")," variable:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"$0")," equals 0, a standard sort is performed."),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"$0")," equals -1, a standard sort is not performed and the header does not display the sort arrow. The developer can still generate a column sort based on customized sort criteria using the 4D language.")),(0,l.kt)("p",null,"If the ",(0,l.kt)("a",{parentName:"p",href:"/ja/docs/19/FormObjects/propertiesAction#sortable"},"Sortable")," property is not selected for the list box, the ",(0,l.kt)("inlineCode",{parentName:"p"},"$0")," variable is not used."),(0,l.kt)("h3",{id:"4d-view-pro"},"4D View Pro"),(0,l.kt)("p",null,"This event is generated when the user clicks on a column or row header in a 4D View Pro document. In this context, the ",(0,l.kt)("a",{parentName:"p",href:"/ja/docs/19/Events/overview#event-object"},"event object")," returned by the ",(0,l.kt)("inlineCode",{parentName:"p"},"FORM Event")," command contains:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"longint"),(0,l.kt)("td",{parentName:"tr",align:null},"42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},'"On Header Click"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"objectName"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"4D View Pro area name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sheetName"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the sheet of the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"range"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sheetArea"),(0,l.kt)("td",{parentName:"tr",align:null},"longint"),(0,l.kt)("td",{parentName:"tr",align:null},"The sheet location where the event took place:",(0,l.kt)("br",null),(0,l.kt)("li",null,"0: The crossing area between column number/letter headers (top left of the sheet)"),(0,l.kt)("li",null,"1: The column headers (area indicating the column numbers/letters)"),(0,l.kt)("li",null,"2: The row headers (area indicating the row numbers)"))))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' If(FORM Event.code=On Header Click)\n    Case of\n       :(FORM Event.sheetArea=1)\n          $values:=VP Get values(FORM Event.range)\n       :(FORM Event.sheetArea=2)\n          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))\n       :(FORM Event.sheetArea=0)\n          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";\\\n          New object("color";"#800080";"style";vk line style thick)))\n    End case\n End if\n')))}m.isMDXComponent=!0}}]);