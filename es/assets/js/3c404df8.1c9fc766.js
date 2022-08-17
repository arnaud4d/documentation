"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,s(s({ref:t},l),{},{components:r})):a.createElement(h,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>l});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={id:"pictureButtonOverview",title:"Picture Button"},i=void 0,p={unversionedId:"FormObjects/pictureButtonOverview",id:"version-19-R6/FormObjects/pictureButtonOverview",title:"Picture Button",description:"A picture button is similar to a standard button. However unlike a standard button (which accepts three states: enabled, disabled and clicked), a picture button has a different image to represent each state.",source:"@site/versioned_docs/version-19-R6/FormObjects/pictureButton_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/pictureButtonOverview",permalink:"/docs/es/FormObjects/pictureButtonOverview",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"pictureButtonOverview",title:"Picture Button"},sidebar:"docs",previous:{title:"List Box",permalink:"/docs/es/FormObjects/listboxOverview"},next:{title:"Picture Pop-up Menu",permalink:"/docs/es/FormObjects/picturePopupMenuOverview"}},c={},l=[{value:"Using picture buttons",id:"using-picture-buttons",level:2},{value:"Animation",id:"animation",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],u={toc:l};function m(e){var{components:t}=e,s=o(e,["components"]);return(0,a.kt)("wrapper",n({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A picture button is similar to a ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/buttonOverview"}),"standard button"),". However unlike a standard button (which accepts three states: enabled, disabled and clicked), a picture button has a different image to represent each state."),(0,a.kt)("p",null,"Picture buttons can be used in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As command buttons in a form. In this case, the picture button generally includes four different states: enabled, disabled, clicked and rolled over.",(0,a.kt)("br",{parentName:"p"}),"\n","For example, a table of thumbnails that has one row of four columns, each thumbnail corresponds to the Default, Clicked, Roll over, and Disabled states.      "),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"JSON name"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Rows"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"rowCount"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Columns"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"columnCount"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Switch back when Released"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"switchBackWhenReleased"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Switch when Roll Over"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"switchWhenRollover"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Use Last Frame as Disabled"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"useLastFrameAsDisabled"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"true"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As a picture button letting the user choose among several choices. In this case, a picture button can be used in place of a pop-up picture menu. With ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/picturePopupMenuOverview"}),"Picture Pop-up Menus"),", all choices are displayed simultaneously (as the items in the pop-up menu), while the picture button displays the choices consecutively (as the user clicks the button).",(0,a.kt)("br",{parentName:"p"}),"\n","Here is an example of a picture button. Suppose you want to give the users of a custom application the opportunity to choose the interface language for the application. You implement the option as a picture button in a custom properties dialog box:"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(24712).Z,width:"97",height:"118"})," "),(0,a.kt)("p",null,"Clicking the object changes the picture."),(0,a.kt)("h2",n({},{id:"using-picture-buttons"}),"Using picture buttons"),(0,a.kt)("p",null,"You can implement a picture button in the following manner:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First, prepare a single graphic in which the series of images are arranged in a row, a column, or a row-by-column grid.   "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(81273).Z,width:"242",height:"108"}),(0,a.kt)("br",{parentName:"p"}),"\n",""))),(0,a.kt)("p",null,"You can organize pictures as columns, rows, or a row-by-column grid (as shown above). When organizing pictures as a grid, they  are numbered from left to right, row by row, beginning with 0. For example, the second picture of the second row of a grid that consists of two rows and three columns, is numbered 4 (The UK flag in the example above). "),(0,a.kt)("ol",n({},{start:2}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, make sure the image is in your project's Resources and enter the path in the ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesTextAndPicture#picture-pathname"}),"Pathname")," property.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define the graphic's ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCrop"}),"Rows and Columns")," properties.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Specify when the images change by selecting appropriate ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAnimation"}),"animation")," properties."))),(0,a.kt)("h2",n({},{id:"animation"}),"Animation"),(0,a.kt)("p",null,"In addition to the standard positioning and appearance settings, you can set some specific properties for picture buttons, especially concerning how and when the pictures are displayed. These property options can be combined to enhance your picture buttons."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By default (when no ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/FormObjects/propertiesAnimation"}),"animation option")," is selected), a picture button displays the next picture in the series when the user clicks; it displays the previous picture in the series when the user holds down the ",(0,a.kt)("strong",{parentName:"li"},"Shift")," key and clicks. When the user reaches the last picture in the series, the picture does not change when the user clicks again. In other words, it does not cycle back to the first picture in the series.")),(0,a.kt)("p",null,"The following other modes are available: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/FormObjects/propertiesAnimation#loopBackToFirstFrame"}),"Loop back to first frame")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/FormObjects/propertiesAnimation#switch-back-when-released"}),"Switch back when Released")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/FormObjects/propertiesAnimation#switch-when-roll-over"}),"Switch when Roll Over")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/FormObjects/propertiesAnimation#switch-continuously-on-clicks"}),"Switch continuously on clicks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/FormObjects/propertiesAnimation#use-last-frame-as-disabled"}),"Use Last Frame as Disabled")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/FormObjects/propertiesAnimation#use-last-frame-as-disabled"}),"Use Last frame as disabled"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression"}),"associated variable")," of the picture button returns the index number, in the thumbnail table, of the current picture displayed. The numbering of pictures in the table begins with 0.")),(0,a.kt)("h2",n({},{id:"supported-properties"}),"Supported Properties"),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesTextAndPicture#button-style"}),"Button Style")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCrop#columns"}),"Columns")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAction#droppable"}),"Droppable")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesEntry#focusable"}),"Focusable")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#font"}),"Font")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAnimation#loopBackToFirstFrame"}),"Loop back to first frame")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesPicture#pathname"}),"Pathname")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCrop#rows"}),"Rows")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesEntry#shortcut"}),"Shortcut")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAction#standard-action"}),"Standard action")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAnimation#switchBackWhenReleased"}),"Switch back when released")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAnimation#switch-continuously-on-clicks"}),"Switch continuously on clicks")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAnimation#switch-every-x-ticks"}),"Switch every x ticks")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#title"}),"Title")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAnimation#switchWhenRollOver"}),"Switch when roll over")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#type"}),"Type")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAnimation#use-last-frame-as-disabled"}),"Use Last frame as disabled")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}m.isMDXComponent=!0},24712:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},81273:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);