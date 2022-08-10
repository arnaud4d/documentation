"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86e3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),h=o,b=m["".concat(p,".").concat(h)]||m[h]||d[h]||n;return r?a.createElement(b,s(s({ref:t},l),{},{components:r})):a.createElement(b,s({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),s=["components"],i={id:"progressIndicator",title:"Progress Indicator"},p=void 0,c={unversionedId:"FormObjects/progressIndicator",id:"FormObjects/progressIndicator",title:"Progress Indicator",description:'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.',source:"@site/docs/FormObjects/progressIndicator.md",sourceDirName:"FormObjects",slug:"/FormObjects/progressIndicator",permalink:"/docs/ja/next/FormObjects/progressIndicator",draft:!1,tags:[],version:"current",frontMatter:{id:"progressIndicator",title:"Progress Indicator"},sidebar:"docs",previous:{title:"Plug-in Area",permalink:"/docs/ja/next/FormObjects/pluginAreaOverview"},next:{title:"Radio Button",permalink:"/docs/ja/next/FormObjects/radiobuttonOverview"}},l={},d=[{value:"Using indicators",id:"using-indicators",level:2},{value:"Default thermometer",id:"default-thermometer",level:2},{value:"Supported Properties",id:"supported-properties",level:3},{value:"Barber shop",id:"barber-shop",level:2},{value:"Supported Properties",id:"supported-properties-1",level:3},{value:"See also",id:"see-also",level:2}],m={toc:d};function h(e){var t=e.components,i=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically. '),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(81356).Z,width:"288",height:"45"})),(0,n.kt)("h2",{id:"using-indicators"},"Using indicators"),(0,n.kt)("p",null,"You can use indicators either to display or set values. For example, if a progress indicator is given a value by a method, it displays the value. If the user drags the indicator point, the value changes. The value can be used in another object such as a field or an enterable or non-enterable object."),(0,n.kt)("p",null,"The variable associated with the indicator controls the display. You place values into, or use values from, the indicator using methods. For example, a method for a field or enterable object could be used to control a progress indicator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"}," vTherm:=[Employees]Salary\n")),(0,n.kt)("p",null,"This method assigns the value of the Salary field to the vTherm variable. This method would be attached to the Salary field."),(0,n.kt)("p",null,"Conversely, you could use the indicator to control the value in a field. The user drags the indicator to set the value. In this case the method becomes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"}," [Employees]Salary:=vTherm\n")),(0,n.kt)("p",null,"The method assigns the value of the indicator to the Salary field. As the user drags the indicator, the value in the Salary field changes."),(0,n.kt)("h2",{id:"default-thermometer"},"Default thermometer"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(71177).Z,width:"53",height:"176"})),(0,n.kt)("p",null,"The thermometer is the basic progress indicator. "),(0,n.kt)("p",null,"You can display horizontal or vertical thermometers bars. This is determined by the shape of the object that you draw. "),(0,n.kt)("p",null,"Multiple graphical options are available: minimum/maximum values, graduations, steps."),(0,n.kt)("h3",{id:"supported-properties"},"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesScale#barber-shop"},"Barber shop")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#bold"},"Bold")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesBackgroundAndBorder#border-line-style"},"Border Line Style")," -",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesScale#display-graduation"},"Display graduation")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesEntry#enterable"},"Enterable")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesAction#execute-object-method"},"Execute object method")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesObject#expression-type"},"Expression Type"),' (only "integer", "number", "date", or "time") - ',(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#font"},"Font")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#font-color"},"Font Color")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#font-size"},"Font Size")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#italic"},"Italic")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesScale#graduation-step"},"Graduation step")," -",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesHelp#help-tip"},"Help Tip")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesScale#label-location"},"Label Location")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesScale#maximum"},"Maximum")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesScale#minimum"},"Minimum")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesDisplay#number-format"},"Number Format")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesScale#step"},"Step")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesObject#type"},"Type")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#underline"},"Underline")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#width"},"Width"),"  "),(0,n.kt)("h2",{id:"barber-shop"},"Barber shop"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(37542).Z,width:"280",height:"40"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Barber shop")," is a variant of the default thermometer. To enable this variant, you need to set the ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesScale#barber-shop"},"Barber shop")," property."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'In JSON code, just remove "max" property from a default thermometer object to enable the Barber shop variant. ')),(0,n.kt)("p",null,"Barber shop displays a continuous animation, like the ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/spinner"},"spinner"),". These thermometers are generally used to indicate to the user that the program is in the process of carrying out a long operation. When this thermometer variant is selected, ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesScale"},"graphical Scale properties")," are not available."),(0,n.kt)("p",null,"When the form is executed, the object is not animated. You manage the animation by passing a value to its ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesObject#variable-or-expression"},"associated variable or expression"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 (or any value other than 0) = Start animation,"),(0,n.kt)("li",{parentName:"ul"},"0 = Stop animation.")),(0,n.kt)("h3",{id:"supported-properties-1"},"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesScale#barber-shop"},"Barber shop")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#bold"},"Bold")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesBackgroundAndBorder#border-line-style"},"Border Line Style")," -",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesEntry#enterable"},"Enterable")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesAction#execute-object-method"},"Execute object method")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesObject#expression-type"},"Expression Type"),' (only "integer", "number", "date", or "time") - ',(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#font"},"Font")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#font-color"},"Font Color")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#font-size"},"Font Size")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesHelp#help-tip"},"Help Tip")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#italic"},"Italic")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesObject#type"},"Type")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesText#underline"},"Underline")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,n.kt)("a",{parentName:"p",href:"/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#width"},"Width"),"  "),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ja/next/FormObjects/ruler"},"rulers")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ja/next/FormObjects/stepper"},"steppers"))))}h.isMDXComponent=!0},37542:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/indicator-4aede0e01bdd9a603abe016a5ec90d03.gif"},71177:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAACwCAIAAAAg+bFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAMCSURBVHhe7drBjdswEIVhn7aTtLD1qBsX48sWkBpcxp5dQoacIUVqJNvyk0YK8H4ICE0D8geJOZDYy+Pc0YcV5bsNl8twsw/6MfV9vS/O5AJ89+u32IZh9IlFxzJQj5+xwt5vFXRDsSeOnykd4OsEedrP2Hji+wuna0izm1ob+X6x5A52r2n/j68dmszPlI7wCcHGMpkxfqZ0hE+ST7lxys/kwnwfRh8WfVj0YdGHRR8WfVj0YdGHRR8WfVj0YYX4yt62O8SYzCwU4BOLMtrB/GmBb39fc6Birspzpy2+gOdXDebqTI11to19uqo0u6mUjn9SKjnS9877PZdvRtOYum/n2v/5iaZ5fmkoKAM23y20v29cfs3hnsD6iaUifEj0YdGHRR8WfVj0YdGHRR8WfVj0YdGHRR9WkK/sd5udevd5sQifOyWQiROdH9yGiaHyznL+kv54cnydMydGy23sU4ZmNxVBeYn6Oo/0LTy/Isjjs/vamROsv8RRg2AyrPzbfLVYgE9BufZB9hNLhfiA6MOiD4s+LPqw6MOiD4s+LPqw6MOiD4s+rDhf2gTXzXjZ/77YnQf6ssg4Mj7V+UF+eMO1nLVUXp5/DgzxJd34d2udqbHOtrFPV5VmN3WuI33++Y2ac/rsP2pNaKdbf1q1yMCAIn3OO8QnCSz39N2mAn0fRR8WfVj0YdGHRR/W1Pf18we56HM/ueqiz/3kqos+95OrLvrcT6666HM/ueqiz/3kqmvWVza7zV68TL3YnUf47terbcLraYEMPj0/mPze2mv2+ZXKAULl9WcKs0X6zNWZGutsG/t0VWl201J9l0f6Fp6fkMaFdjafW2ONyX03bX+ff0LpaepUfeeL7e5LmCbjCCz39N2mYtbf59GHRR8WfVj0YdGHRR8WfVj0YdGHRR8WfVghvrLbfbEXnyvAVw8QXp8W+Pb3Vd4bpy2+3X2dqbG+2cY+XWea3nNjH57dq7Slb5c2XH+7JCgDinQtL8AnCSy38t2mQnxA9GGd2/d4/AMvdxxgkVtTAQAAAABJRU5ErkJggg=="},81356:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAtCAIAAACBCCG9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAF2SURBVHhe7dXBbQIxEEDRnNJJWqAeuqEYLikgNVBGzpQQhwxkycbY4Mwlfk9zACR7pdF+8XQE0ggMEgkMEgkMEgkMEvUFtt8+nWx2h/gFJvH58m/38eW3Fm7W0RNYueDrAeWDxJjHYbcpcW3P73+xbqFRR0dglxtOD1QYk1kEsG6hVUc7sKtji+tgDt8v/bqFZh0Cg9sEBomSA1seu7oOprAIYN1Cq46OwMq5uKNcpi9mc93QjxZadXQEVpSzJ+fnwDwWgRXrFm7W0RcY8BCBQaI7Ait/gvEJ5tbfgsDgbgKDRAKDRH8f2BuwEGG03BHY8+vLP5h3GCaw6sSGYIDAqhMbggECq05sCAYIrDqxIRggsOrEhmCAwKoTG4IBAqtObAgGCKw6sSEYILDqxIZggMCqExuCAQKrTmwIBgisOrEhGCCw6sSGYIDAqhMbggECq05sCAakBAZcRBgtvYEBDxAYJBIYJBIYJBIYJBIYJBIYpDkePwAePMhF3WLIcQAAAABJRU5ErkJggg=="}}]);