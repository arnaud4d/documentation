"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>g,frontMatter:()=>f,metadata:()=>m,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e};const f={id:"structure",title:"Structure Page"},d=void 0,m={unversionedId:"Preferences/structure",id:"version-19-R6/Preferences/structure",title:"Structure Page",description:"Primary key",source:"@site/versioned_docs/version-19-R6/Preferences/structure.md",sourceDirName:"Preferences",slug:"/Preferences/structure",permalink:"/docs/fr/Preferences/structure",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"structure",title:"Structure Page"},sidebar:"docs",previous:{title:"General Page",permalink:"/docs/fr/Preferences/general"},next:{title:"Forms Page",permalink:"/docs/fr/Preferences/forms"}},y={},h=[{value:"Primary key",id:"primary-key",level:2},{value:"Structure editor",id:"structure-editor",level:2},{value:"Graphic quality of the structure",id:"graphic-quality-of-the-structure",level:3},{value:"When a folder is dimmed, its contents are:",id:"when-a-folder-is-dimmed-its-contents-are",level:3}],b={toc:h};function g(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",p({},{id:"primary-key"}),"Primary key"),(0,n.kt)("p",null,"These options in the preferences modify the default name and type of the primary key fields that are added automatically by 4D when new tables are created or by means of the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Primary-key-manager.300-5217742.en.html"}),"Primary key manager"),")."),(0,n.kt)("p",null,"The following options are available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name"),' ("ID" by default): Sets the default name of primary key fields. You can use any name you want, as long as it respects the ',(0,n.kt)("a",p({parentName:"li"},{href:"/docs/fr/Concepts/identifiers#tables-and-fields"}),"4D naming rules"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type")," (",(0,n.kt)("a",p({parentName:"li"},{href:"/docs/fr/Concepts/number"}),"Longint")," by default): Sets the default type of primary key fields. You can choose the UUID type. In this case, the primary key fields created by default are of the ",(0,n.kt)("a",p({parentName:"li"},{href:"/docs/fr/Concepts/string"}),"Alpha type")," and have the ",(0,n.kt)("strong",{parentName:"li"},"UUID Format")," and ",(0,n.kt)("strong",{parentName:"li"},"Auto UUID")," field properties checked.")),(0,n.kt)("h2",p({},{id:"structure-editor"}),"Structure editor"),(0,n.kt)("p",null,"This group of options configures the display of the 4D Structure editor."),(0,n.kt)("h3",p({},{id:"graphic-quality-of-the-structure"}),"Graphic quality of the structure"),(0,n.kt)("p",null,"This option varies the level of graphic detail in the Structure editor. By default, the quality is set to ",(0,n.kt)("strong",{parentName:"p"},"High"),'. You can select Standard quality in order to give priority to display speed. The effect of this setting is mainly perceptible when using the zoom function (see the "Zoom" paragraph in ',(0,n.kt)("a",p({parentName:"p"},{href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html"}),"Structure editor"),")."),(0,n.kt)("h3",p({},{id:"when-a-folder-is-dimmed-its-contents-are"}),"When a folder is dimmed, its contents are:"),(0,n.kt)("p",null,"This option sets the appearance of dimmed tables in the Structure editor, when you carry out selections by folder (see ",(0,n.kt)("a",p({parentName:"p"},{href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html#4592928"}),"Highlight/dim tables by folder"),"). The possible options are Dimmed (a shadow replaces the table image) and Invisible (the table disappears completely)."))}g.isMDXComponent=!0}}]);