"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"structure",title:"Structure Page"},l=void 0,c={unversionedId:"Preferences/structure",id:"version-19/Preferences/structure",title:"Structure Page",description:"Primary key",source:"@site/versioned_docs/version-19/Preferences/structure.md",sourceDirName:"Preferences",slug:"/Preferences/structure",permalink:"/main/fr/docs/19/Preferences/structure",draft:!1,tags:[],version:"19",frontMatter:{id:"structure",title:"Structure Page"},sidebar:"docs",previous:{title:"General Page",permalink:"/main/fr/docs/19/Preferences/general"},next:{title:"Forms Page",permalink:"/main/fr/docs/19/Preferences/forms"}},u={},p=[{value:"Primary key",id:"primary-key",level:2},{value:"Structure editor",id:"structure-editor",level:2},{value:"Graphic quality of the structure",id:"graphic-quality-of-the-structure",level:3},{value:"When a folder is dimmed, its contents are:",id:"when-a-folder-is-dimmed-its-contents-are",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"primary-key"},"Primary key"),(0,i.kt)("p",null,"These options in the preferences modify the default name and type of the primary key fields that are added automatically by 4D when new tables are created or by means of the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Primary-key-manager.300-5217742.en.html"},"Primary key manager"),")."),(0,i.kt)("p",null,"The following options are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name"),' ("ID" by default): Sets the default name of primary key fields. You can use any name you want, as long as it respects the ',(0,i.kt)("a",{parentName:"li",href:"/main/fr/docs/19/Concepts/identifiers#tables-and-fields"},"4D naming rules"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type")," (",(0,i.kt)("a",{parentName:"li",href:"Concepts/number.md"},"Longint")," by default): Sets the default type of primary key fields. You can choose the UUID type. In this case, the primary key fields created by default are of the ",(0,i.kt)("a",{parentName:"li",href:"Concepts/string.md"},"Alpha type")," and have the ",(0,i.kt)("strong",{parentName:"li"},"UUID Format")," and ",(0,i.kt)("strong",{parentName:"li"},"Auto UUID")," field properties checked.")),(0,i.kt)("h2",{id:"structure-editor"},"Structure editor"),(0,i.kt)("p",null,"This group of options configures the display of the 4D Structure editor."),(0,i.kt)("h3",{id:"graphic-quality-of-the-structure"},"Graphic quality of the structure"),(0,i.kt)("p",null,"This option varies the level of graphic detail in the Structure editor. By default, the quality is set to ",(0,i.kt)("strong",{parentName:"p"},"High"),'. You can select Standard quality in order to give priority to display speed. The effect of this setting is mainly perceptible when using the zoom function (see the "Zoom" paragraph in ',(0,i.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html"},"Structure editor"),")."),(0,i.kt)("h3",{id:"when-a-folder-is-dimmed-its-contents-are"},"When a folder is dimmed, its contents are:"),(0,i.kt)("p",null,"This option sets the appearance of dimmed tables in the Structure editor, when you carry out selections by folder (see ",(0,i.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html#4592928"},"Highlight/dim tables by folder"),"). The possible options are Dimmed (a shadow replaces the table image) and Invisible (the table disappears completely)."))}f.isMDXComponent=!0}}]);