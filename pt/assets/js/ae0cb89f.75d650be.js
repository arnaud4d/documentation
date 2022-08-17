"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83750],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"forms",title:"Forms Page"},s=void 0,l={unversionedId:"Preferences/forms",id:"version-19/Preferences/forms",title:"Forms Page",description:"This page lets you set the default operation and display of the 4D Form editor.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Preferences/forms.md",sourceDirName:"Preferences",slug:"/Preferences/forms",permalink:"/docs/pt/19/Preferences/forms",draft:!1,tags:[],version:"19",frontMatter:{id:"forms",title:"Forms Page"},sidebar:"docs",previous:{title:"Structure Page",permalink:"/docs/pt/19/Preferences/structure"},next:{title:"Methods Page",permalink:"/docs/pt/19/Preferences/methods"}},d={},c=[{value:"Move",id:"move",level:2},{value:"Step using keyboard",id:"step-using-keyboard",level:3},{value:"When moving beyond window limits",id:"when-moving-beyond-window-limits",level:3},{value:"Activate auto alignment by default",id:"activate-auto-alignment-by-default",level:3},{value:"New form default display",id:"new-form-default-display",level:2}],u={toc:c};function p(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page lets you set the default operation and display of the 4D Form editor."),(0,n.kt)("h2",o({},{id:"move"}),"Move"),(0,n.kt)("p",null,"This group of options sets parameters for moving objects using the keyboard or the mouse in the Form editor."),(0,n.kt)("h3",o({},{id:"step-using-keyboard"}),"Step using keyboard"),(0,n.kt)("p",null,"This option allows setting the value (in points) of the step used for moving or resizing an object using the keyboard and the ",(0,n.kt)("strong",{parentName:"p"},"Shift")," key."),(0,n.kt)("h3",o({},{id:"when-moving-beyond-window-limits"}),"When moving beyond window limits"),(0,n.kt)("p",null,"This option allows setting the behavior of the Form editor when moving an object using the mouse beyond window limits."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Autoscroll"),": When this option is checked, this action causes the scroll of the form in the window, as if you clicked on the scroll bars. This behavior is useful for moving objects in large forms."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Start drag and drop"),": When this option is checked, this action is interpreted as a drag and drop. The form window is not modified and the moved object can be dropped in another window (if its contents are compatible), for example, in another form. This behavior is useful for recycling objects among several forms or using object libraries (see ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/pt/19/FormEditor/objectLibrary#creating-and-using-custom-object-libraries"}),"Creating and using custom object libraries"),").")),(0,n.kt)("p",null,"You can configure this option depending on your work habits and development needs."),(0,n.kt)("h3",o({},{id:"activate-auto-alignment-by-default"}),"Activate auto alignment by default"),(0,n.kt)("p",null,"This option activates auto alignment by default in each new window of the Form editor. It is possible to modify this option individually in each window (refer to ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/19/FormEditor/overview#using-the-magnetic-grid"}),"Using the magnetic grid"),")."),(0,n.kt)("h2",o({},{id:"new-form-default-display"}),"New form default display"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Limits"),", ",(0,n.kt)("strong",{parentName:"li"},"Rulers"),", ...: check items that must be displayed by default in each new window of the Form editor. It is possible to modify the display of each window individually using the ",(0,n.kt)("strong",{parentName:"li"},"Display")," hierarchical menu of the Form editor."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Color for marker lines"),": modifies the color of the marker lines used in the Form editor to define the different areas (header, breaks, detail and footer, etc.). For more information about markers, refer to ",(0,n.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Using-output-control-lines.300-5217678.en.html"}),"Using output control lines"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default display shield"),": sets which shields to display by default in each new window of the Form editor. For more information about shields, refer to ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/pt/19/FormEditor/overview#using-shields"}),"Using shields"),".")))}p.isMDXComponent=!0}}]);