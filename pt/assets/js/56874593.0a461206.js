"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?o.createElement(m,a(a({ref:t},l),{},{components:r})):o.createElement(m,a({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16119:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});r(67294);var o=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const a={id:"buttonGridOverview",title:"Button Grid"},p=void 0,s={unversionedId:"FormObjects/buttonGridOverview",id:"version-19/FormObjects/buttonGridOverview",title:"Button Grid",description:"A button grid is a transparent object that is placed on top of a graphic. The graphic should depict a row-by-column array. When one of the graphics is clicked on, it will have a sunken or pressed appearance:",source:"@site/versioned_docs/version-19/FormObjects/buttonGrid_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/buttonGridOverview",permalink:"/docs/pt/19/FormObjects/buttonGridOverview",draft:!1,tags:[],version:"19",frontMatter:{id:"buttonGridOverview",title:"Button Grid"},sidebar:"docs",previous:{title:"Button",permalink:"/docs/pt/19/FormObjects/buttonOverview"},next:{title:"Check Box",permalink:"/docs/pt/19/FormObjects/checkboxOverview"}},c={},l=[{value:"Creating button grids",id:"creating-button-grids",level:2},{value:"Using button grids",id:"using-button-grids",level:2},{value:"Goto page",id:"goto-page",level:3},{value:"Supported Properties",id:"supported-properties",level:2}],d={toc:l};function u(e){var{components:t}=e,a=i(e,["components"]);return(0,o.kt)("wrapper",n({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A button grid is a transparent object that is placed on top of a graphic. The graphic should depict a row-by-column array. When one of the graphics is clicked on, it will have a sunken or pressed appearance:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(84358).Z,width:"187",height:"129"})),(0,o.kt)("p",null,"You can use a button grid object to determine where the user clicks on the graphic. The object method would use the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Clicked")," event and take appropriate action depending on the location of the click."),(0,o.kt)("h2",n({},{id:"creating-button-grids"}),"Creating button grids"),(0,o.kt)("p",null,"To create the button grid, add a background graphic to the form and place a button grid on top of it. Specify the number of ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCrop#rows"}),"rows")," and ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCrop#columns"}),"columns"),"."),(0,o.kt)("p",null,"In 4D, a button grid is used as a color palette:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(28596).Z,width:"421",height:"340"})),(0,o.kt)("h2",n({},{id:"using-button-grids"}),"Using button grids"),(0,o.kt)("p",null,"The buttons on the grid are numbered from top left to bottom right. In the above example, the grid is 16 columns across by 16 rows down. The button in the top-left position returns 1 when clicked. If the red button at the far right of the second row is selected, the button grid returns 32.\nIf no element is selected, the value is 0"),(0,o.kt)("h3",n({},{id:"goto-page"}),"Goto page"),(0,o.kt)("p",null,"You can assign the ",(0,o.kt)("inlineCode",{parentName:"p"},"gotoPage")," ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html"}),"standard action")," to a button grid. When this action is selected, 4D will automatically display the page of the form that corresponds to the number of the button that is selected in the button grid. For example, if the user selects the tenth button of the grid, 4D will display the tenth page of the current form (if it exists)."),(0,o.kt)("h2",n({},{id:"supported-properties"}),"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCrop#columns"}),"Columns")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCrop#rows"}),"Rows")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesAction#standard-action"}),"Standard action")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesDisplay#visibility"}),"Visibility")))}u.isMDXComponent=!0},84358:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"},28596:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/button_buttonGrid-426d2c4a3904ebcde18441040126a4d1.png"}}]);