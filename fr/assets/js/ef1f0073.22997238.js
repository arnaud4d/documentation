"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||n;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var a=r(3905),o=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e};const d={id:"propertiesHelp",title:"Help"},u=void 0,f={unversionedId:"FormObjects/propertiesHelp",id:"FormObjects/propertiesHelp",title:"Help",description:"Help Tip",source:"@site/docs/FormObjects/properties_Help.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHelp",permalink:"/docs/fr/next/FormObjects/propertiesHelp",draft:!1,tags:[],version:"current",frontMatter:{id:"propertiesHelp",title:"Help"},sidebar:"docs",previous:{title:"Headers",permalink:"/docs/fr/next/FormObjects/propertiesHeaders"},next:{title:"Hierarchy",permalink:"/docs/fr/next/FormObjects/propertiesHierarchy"}},h={},b=[{value:"Help Tip",id:"help-tip",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Other help features",id:"other-help-features",level:4},{value:"See also",id:"see-also",level:4}],v={toc:b};function k(e){var t,o=e,{components:c}=o,d=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r})(o,["components"]);return(0,a.kt)("wrapper",(t=m(m({},v),d),n(t,i({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("h2",m({},{id:"help-tip"}),"Help Tip"),(0,a.kt)("p",null,"This property allows associating help messages with active objects in your forms. They can be displayed at runtime:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(17486).Z,width:"418",height:"52"})),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"The display delay and maximum duration of help tips can be controlled using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Tips delay")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Tips duration")," selectors of the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html"}),"SET DATABASE PARAMETER"))," command."),(0,a.kt)("li",{parentName:"ul"},"Help tips can be globally disabled or enabled for the application using the Tips enabled selector of the ",(0,a.kt)("a",m({parentName:"li"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html"}),(0,a.kt)("strong",{parentName:"a"},"SET DATABASE PARAMETER"))," command."))),(0,a.kt)("p",null,"You can either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"designate an existing help tip, previously specified in the ",(0,a.kt)("a",m({parentName:"li"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Help-tips.200-4163423.en.html"}),"Help tips")," editor of 4D."),(0,a.kt)("li",{parentName:"ul"},"or enter the help message directly as a string. This allows you to take advantage of XLIFF architecture. You can enter an XLIFF reference here in order to display a message in the application language (for more information about XLIFF, refer to ",(0,a.kt)("a",m({parentName:"li"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html"}),"Appendix B: XLIFF architecture"),". You can also use 4D references (",(0,a.kt)("a",m({parentName:"li"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html"}),"see Using references in static text"),").")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In macOS, displaying help tips is not supported in pop-up type windows.")),(0,a.kt)("h4",m({},{id:"json-grammar"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Data Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"tooltip"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"text"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"additional information to help a user")))),(0,a.kt)("h4",m({},{id:"objects-supported"}),"Objects Supported"),(0,a.kt)("p",null,(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/buttonOverview"}),"Button")," - ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/buttonGridOverview"}),"Button Grid")," - ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/checkboxOverview"}),"Check Box"),"  - ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/dropdownListOverview"}),"Drop-down List")," - ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/comboBoxOverview#overview"}),"Combo Box")," - ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/listOverview#overview"}),"Hierarchical List")," - ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/listboxOverview#list-box-headers"}),"List Box Header")," - ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/listboxOverview#list-box-footers"}),"List Box Footer")," - ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/pictureButtonOverview"}),"Picture Button")," - ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/picturePopupMenuOverview"}),"Picture Pop-up menu")," - ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/radiobuttonOverview"}),"Radio Button")),(0,a.kt)("h4",m({},{id:"other-help-features"}),"Other help features"),(0,a.kt)("p",null,"You can also associate help messages with form objects in two other ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"at the level of the database structure (fields only). In this case, the help tip of the field is displayed in every form where it appears. For more information, refer to \u201cHelp Tips\u201d in ",(0,a.kt)("a",m({parentName:"li"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Field-properties.300-4163580.en.html"}),"Field properties"),"."),(0,a.kt)("li",{parentName:"ul"},"using the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html"}),"OBJECT SET HELP TIP"))," command, for the current process.")),(0,a.kt)("p",null,"When different tips are associated with the same object in several locations, the following priority order is applied:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"structure level (lowest priority)"),(0,a.kt)("li",{parentName:"ol"},"form editor level"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html"}),"OBJECT SET HELP TIP"))," command (highest priority)")),(0,a.kt)("h4",m({},{id:"see-also"}),"See also"),(0,a.kt)("p",null,(0,a.kt)("a",m({parentName:"p"},{href:"/docs/fr/next/FormObjects/propertiesEntry#placeholder"}),"Placeholder")))}k.isMDXComponent=!0},17486:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaIAAAA0CAIAAABHIavSAAAFAElEQVR42u2d3Y7UNhiGk9keoTLqAirSSiOEVFSOeys94A56GWivoC3HcC/8SAghpJ5wshVH7UqViijQBUQrdidEBCIrcewviWN77OfRajWTfLFfO5537DgZly/+PioAANJlFVoAAMCyYHMAkDhfhRbgm3t374eWAD748cZP/zz/PbQKiILsbK7m4aMnoSXAshwe3gwtASIiR5ur+fnX22VZVlUVWggswsnr49ASICK4NgcAiSOyuUuXr4fWCQAwke6gteNoL7irDgB2HM21OdXaatfD6QBgpxkxBdF29FrjU7t+zcbGFiWR/cTxUwBYAqnNqTbUepm23yePBADwgHSmVW5M0ywM4wOAhdD05qwDzAkwVwsAobBMQbiCzhoAhCLA7cHanh3dPQBYiOkPe6kzqoWxvyaPBABwTtfmtB7U2di+7QfLIyX5AgDMh2daASBxcvyFksPDmyevj/999Se/YwGQA2Vuo8WL334fWgJ4gp/VhIbsenM0fYDc4NocACQONgcAiYPNAUDiZHdtLgg84wGwHNZ5VGzOE1X1R2gJAAlSllesMdnZHOu0AuRGdjZXsE4rQGbkaHPFp3VafWb3y6076tt+N9swpK2DnQx4XaWzNDN1jj1cHt9GzlE4M5G25ViPFWbkpFCL4kRYpjYXnDibVAJ4qNhQ5079wMs//OawTNohN5RERPNdXf9vv7TbLe1bdW8/YCgddVc/eChNa6T5EO1rbRln6uwrsZZiqAja15OzGDovo4rZIrEkg1qtMPXt0Fkw1LlWraEI8iIbWoVkzqGDvjcX1c/DZbVETmcQUf9phxXWL3bzUfI0rZHmHK1lLL58emfqlFTmKJFaqWOz6ASrZ3NaJc9RKxdmrmdh09IWQVhkrdQ5laNfCyIfWwlFp6m152zCIEJ7iHyjPE1Xh6iRi+o07B1bwMYIxmZh7ndMGzCq3w3TsrYKM8tzMgqWh03ou/Xp2tyQx2mXZFW3dNZmNe8txGu8Nm+b/52U+zp3yKDnNPFQ5Jx7PMVU+zvyGYmFxFiH/571DCGaghhaaLWzHqt8r3yN107wDhnZEoS9YJxz7nEWc9E66QwShQIkR/mpHJW4piBmWlg+Djjta9Zb7oum7yR3D33DmVloL8AHESaJH6vWeeWYCXZDybTHPNtR7a472tC1uaHgdjpCEl8oFzXkF3FcRWoPGUVfvKsBmqFatGonFEHNwjwVYK4xs8Kha5qSS3JCYdZ4rR7zUcIzaz0XY9tAMJub7FP94e3OIbm4q52U0DZ9YS5D6ZjTtE4XOE+8eSEpqXn6QihpwnzI2CxcHWvdO6rCDXoMew21NzZNYSKjij9Ed9DaWWzQD65y5IdAIDjtvV2xPVcQrTAPaHpz/WVVnS+0OipBdaBqmGaFltwacVREW/nRCvNAdkve3Lt7/+GjJ56faS3LMudGBrAcdeeU35uLhUxu+wKIEGzOB1VVhZYAKfPq5V/7Fw7evHlZ/9VDhy+b6xefG17TArfbs/X64np96enTB1c2V9ffbDJZ6A6bA0iB4+Ojzeb6+fMXrJHPnv12cPBdUZyFluwPbA4gBfb3Lx8dPX737uTs7PT09ENVbXsh5Wq1d+7c19eu/fD+/dvQer2CzQEkwXa7qftoq1XZsNqrXxXlXr3h0+j1854m9v//8rK5uB72AgBwDjYHAImDzQFA4mBzAJA42BwAJM5HTx0KqxySVTUAAAAASUVORK5CYII="}}]);