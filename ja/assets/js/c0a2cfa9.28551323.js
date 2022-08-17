"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),b=a,f=d["".concat(p,".").concat(b)]||d[b]||m[b]||n;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>b,default:()=>O,frontMatter:()=>d,metadata:()=>f,toc:()=>h});var o=r(3905),a=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&l(e,r,t[r]);return e};const d={id:"comboBoxOverview",title:"Combo Box"},b=void 0,f={unversionedId:"FormObjects/comboBoxOverview",id:"version-18/FormObjects/comboBoxOverview",title:"Combo Box",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/comboBox_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/comboBoxOverview",permalink:"/docs/ja/18/FormObjects/comboBoxOverview",draft:!1,tags:[],version:"18",frontMatter:{id:"comboBoxOverview",title:"Combo Box"},sidebar:"docs",previous:{title:"Check Box",permalink:"/docs/ja/18/FormObjects/checkboxOverview"},next:{title:"Drop-down List",permalink:"/docs/ja/18/FormObjects/dropdownListOverview"}},u={},h=[{value:"Overview",id:"overview",level:2},{value:"Options for combo boxes",id:"options-for-combo-boxes",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],j={toc:h};function O(e){var t,a=e,{components:l}=a,d=((e,t)=>{var r={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&c.call(e,o)&&(r[o]=e[o]);return r})(a,["components"]);return(0,o.kt)("wrapper",(t=m(m({},j),d),n(t,i({components:l,mdxType:"MDXLayout"}))),(0,o.kt)("h2",m({},{id:"overview"}),"Overview"),(0,o.kt)("p",null,"A combo box is similar to a ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/dropdownListOverview#overview"}),"drop-down list"),", except that it accepts text entered from the keyboard and has additional options."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(22358).Z,width:"173",height:"106"})),(0,o.kt)("p",null,"You initialize a combo box in exactly the same way as a drop-down list. If the user enters text into the combo box, it fills the 0th element of the array. In other respects, you treat a combo box as an enterable area that uses its array or a choice list as the set of default values."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Data Change")," event to manage entries into the enterable area, as you would for any enterable area object. For more information, refer to the description of the ",(0,o.kt)("a",m({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Form-event.301-4127796.en.html"}),"Form event")," command in the ",(0,o.kt)("em",{parentName:"p"},"4D Language Reference")," manual."),(0,o.kt)("h2",m({},{id:"options-for-combo-boxes"}),"Options for combo boxes"),(0,o.kt)("p",null,"Combo box type objects accept two specific options concerning choice lists associated with them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"/docs/ja/18/FormObjects/propertiesDataSource#automatic-insertion"}),"Automatic insertion"),": enables automatically adding a value to a list stored in memory when a user enters a value that is not found in the choice list associated with the combo box."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"/docs/ja/18/FormObjects/propertiesRangeOfValues#excluded-list"}),"Excluded List")," (list of excluded values): allows setting a list whose values cannot be entered in the combo box. If an excluded value is entered, it is not accepted and an error message is displayed.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Associating a ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesRangeOfValues#required-list"}),"list of required values")," is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/dropdownListOverview#overview"}),"Pop-up menu type")," object.")),(0,o.kt)("h2",m({},{id:"supported-properties"}),"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesDisplay#alpha-format"}),"Alpha Format")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesTextAndPicture#button-style"}),"Button Style")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesDisplay#date-format"}),"Date Format")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesEntry#focusable"}),"Focusable")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesText#font"}),"Font")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesDisplay#not-rendered"}),"Not rendered")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesAction#standard-action"}),"Standard action")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesDisplay#time-format"}),"Time Format")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,o.kt)("a",m({parentName:"p"},{href:"/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}O.isMDXComponent=!0},22358:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);