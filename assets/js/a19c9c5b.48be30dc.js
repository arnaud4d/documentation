"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,b=m["".concat(p,".").concat(h)]||m[h]||d[h]||s;return r?o.createElement(b,i(i({ref:t},l),{},{components:r})):o.createElement(b,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var n={};for(var p in t)hasOwnProperty.call(t,p)&&(n[p]=t[p]);n.originalType=e,n.mdxType="string"==typeof e?e:a,i[1]=n;for(var c=2;c<s;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});r(67294);var o=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"progressIndicator",title:"Progress Indicator"},n=void 0,p={unversionedId:"FormObjects/progressIndicator",id:"version-19-R6/FormObjects/progressIndicator",title:"Progress Indicator",description:'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.',source:"@site/versioned_docs/version-19-R6/FormObjects/progressIndicator.md",sourceDirName:"FormObjects",slug:"/FormObjects/progressIndicator",permalink:"/docs/FormObjects/progressIndicator",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"progressIndicator",title:"Progress Indicator"},sidebar:"docs",previous:{title:"Plug-in Area",permalink:"/docs/FormObjects/pluginAreaOverview"},next:{title:"Radio Button",permalink:"/docs/FormObjects/radiobuttonOverview"}},c={},l=[{value:"Using indicators",id:"using-indicators",level:2},{value:"Default thermometer",id:"default-thermometer",level:2},{value:"Supported Properties",id:"supported-properties",level:3},{value:"Barber shop",id:"barber-shop",level:2},{value:"Supported Properties",id:"supported-properties-1",level:3},{value:"See also",id:"see-also",level:2}],d={toc:l};function m(e){var{components:t}=e,i=s(e,["components"]);return(0,o.kt)("wrapper",a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically. '),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(12785).Z,width:"288",height:"45"})),(0,o.kt)("h2",a({},{id:"using-indicators"}),"Using indicators"),(0,o.kt)("p",null,"You can use indicators either to display or set values. For example, if a progress indicator is given a value by a method, it displays the value. If the user drags the indicator point, the value changes. The value can be used in another object such as a field or an enterable or non-enterable object."),(0,o.kt)("p",null,"The variable associated with the indicator controls the display. You place values into, or use values from, the indicator using methods. For example, a method for a field or enterable object could be used to control a progress indicator:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-4d"})," vTherm:=[Employees]Salary\n")),(0,o.kt)("p",null,"This method assigns the value of the Salary field to the vTherm variable. This method would be attached to the Salary field."),(0,o.kt)("p",null,"Conversely, you could use the indicator to control the value in a field. The user drags the indicator to set the value. In this case the method becomes:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-4d"})," [Employees]Salary:=vTherm\n")),(0,o.kt)("p",null,"The method assigns the value of the indicator to the Salary field. As the user drags the indicator, the value in the Salary field changes."),(0,o.kt)("h2",a({},{id:"default-thermometer"}),"Default thermometer"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(48397).Z,width:"53",height:"176"})),(0,o.kt)("p",null,"The thermometer is the basic progress indicator. "),(0,o.kt)("p",null,"You can display horizontal or vertical thermometers bars. This is determined by the shape of the object that you draw. "),(0,o.kt)("p",null,"Multiple graphical options are available: minimum/maximum values, graduations, steps."),(0,o.kt)("h3",a({},{id:"supported-properties"}),"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesScale#barber-shop"}),"Barber shop")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," -",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesScale#display-graduation"}),"Display graduation")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#enterable"}),"Enterable")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesAction#execute-object-method"}),"Execute object method")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#expression-type"}),"Expression Type"),' (only "integer", "number", "date", or "time") - ',(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font"}),"Font")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesScale#graduation-step"}),"Graduation step")," -",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesScale#label-location"}),"Label Location")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesScale#maximum"}),"Maximum")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesScale#minimum"}),"Minimum")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#number-format"}),"Number Format")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesScale#step"}),"Step")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width"),"  "),(0,o.kt)("h2",a({},{id:"barber-shop"}),"Barber shop"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(26781).Z,width:"280",height:"40"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Barber shop")," is a variant of the default thermometer. To enable this variant, you need to set the ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesScale#barber-shop"}),"Barber shop")," property."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'In JSON code, just remove "max" property from a default thermometer object to enable the Barber shop variant. ')),(0,o.kt)("p",null,"Barber shop displays a continuous animation, like the ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/spinner"}),"spinner"),". These thermometers are generally used to indicate to the user that the program is in the process of carrying out a long operation. When this thermometer variant is selected, ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesScale"}),"graphical Scale properties")," are not available."),(0,o.kt)("p",null,"When the form is executed, the object is not animated. You manage the animation by passing a value to its ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#variable-or-expression"}),"associated variable or expression"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 (or any value other than 0) = Start animation,"),(0,o.kt)("li",{parentName:"ul"},"0 = Stop animation.")),(0,o.kt)("h3",a({},{id:"supported-properties-1"}),"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesScale#barber-shop"}),"Barber shop")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," -",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#enterable"}),"Enterable")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesAction#execute-object-method"}),"Execute object method")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#expression-type"}),"Expression Type"),' (only "integer", "number", "date", or "time") - ',(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font"}),"Font")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width"),"  "),(0,o.kt)("h2",a({},{id:"see-also"}),"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/FormObjects/ruler"}),"rulers")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/FormObjects/stepper"}),"steppers"))))}m.isMDXComponent=!0},26781:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/indicator-4aede0e01bdd9a603abe016a5ec90d03.gif"},48397:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAACwCAIAAAAg+bFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAMCSURBVHhe7drBjdswEIVhn7aTtLD1qBsX48sWkBpcxp5dQoacIUVqJNvyk0YK8H4ICE0D8geJOZDYy+Pc0YcV5bsNl8twsw/6MfV9vS/O5AJ89+u32IZh9IlFxzJQj5+xwt5vFXRDsSeOnykd4OsEedrP2Hji+wuna0izm1ob+X6x5A52r2n/j68dmszPlI7wCcHGMpkxfqZ0hE+ST7lxys/kwnwfRh8WfVj0YdGHRR8WfVj0YdGHRR8WfVj0YYX4yt62O8SYzCwU4BOLMtrB/GmBb39fc6Birspzpy2+gOdXDebqTI11to19uqo0u6mUjn9SKjnS9877PZdvRtOYum/n2v/5iaZ5fmkoKAM23y20v29cfs3hnsD6iaUifEj0YdGHRR8WfVj0YdGHRR8WfVj0YdGHRR9WkK/sd5udevd5sQifOyWQiROdH9yGiaHyznL+kv54cnydMydGy23sU4ZmNxVBeYn6Oo/0LTy/Isjjs/vamROsv8RRg2AyrPzbfLVYgE9BufZB9hNLhfiA6MOiD4s+LPqw6MOiD4s+LPqw6MOiD4s+rDhf2gTXzXjZ/77YnQf6ssg4Mj7V+UF+eMO1nLVUXp5/DgzxJd34d2udqbHOtrFPV5VmN3WuI33++Y2ac/rsP2pNaKdbf1q1yMCAIn3OO8QnCSz39N2mAn0fRR8WfVj0YdGHRR/W1Pf18we56HM/ueqiz/3kqos+95OrLvrcT6666HM/ueqiz/3kqmvWVza7zV68TL3YnUf47terbcLraYEMPj0/mPze2mv2+ZXKAULl9WcKs0X6zNWZGutsG/t0VWl201J9l0f6Fp6fkMaFdjafW2ONyX03bX+ff0LpaepUfeeL7e5LmCbjCCz39N2mYtbf59GHRR8WfVj0YdGHRR8WfVj0YdGHRR8WfVghvrLbfbEXnyvAVw8QXp8W+Pb3Vd4bpy2+3X2dqbG+2cY+XWea3nNjH57dq7Slb5c2XH+7JCgDinQtL8AnCSy38t2mQnxA9GGd2/d4/AMvdxxgkVtTAQAAAABJRU5ErkJggg=="},12785:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAtCAIAAACBCCG9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAF2SURBVHhe7dXBbQIxEEDRnNJJWqAeuqEYLikgNVBGzpQQhwxkycbY4Mwlfk9zACR7pdF+8XQE0ggMEgkMEgkMEgkMEvUFtt8+nWx2h/gFJvH58m/38eW3Fm7W0RNYueDrAeWDxJjHYbcpcW3P73+xbqFRR0dglxtOD1QYk1kEsG6hVUc7sKtji+tgDt8v/bqFZh0Cg9sEBomSA1seu7oOprAIYN1Cq46OwMq5uKNcpi9mc93QjxZadXQEVpSzJ+fnwDwWgRXrFm7W0RcY8BCBQaI7Ait/gvEJ5tbfgsDgbgKDRAKDRH8f2BuwEGG03BHY8+vLP5h3GCaw6sSGYIDAqhMbggECq05sCAYIrDqxIRggsOrEhmCAwKoTG4IBAqtObAgGCKw6sSEYILDqxIZggMCqExuCAQKrTmwIBgisOrEhGCCw6sSGYIDAqhMbggECq05sCAakBAZcRBgtvYEBDxAYJBIYJBIYJBIYJBIYJBIYpDkePwAePMhF3WLIcQAAAABJRU5ErkJggg=="}}]);