"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21737],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var o=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,s=function(e,r){if(null==e)return{};var t,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var n=o.createContext({}),c=function(e){var r=o.useContext(n),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return o.createElement(n.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,n=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(t),f=s,h=m["".concat(n,".").concat(f)]||m[f]||l[f]||a;return t?o.createElement(h,i(i({ref:r},d),{},{components:t})):o.createElement(h,i({ref:r},d))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var n in r)hasOwnProperty.call(r,n)&&(p[n]=r[n]);p.originalType=e,p.mdxType="string"==typeof e?e:s,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89866:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var o=t(87462),s=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"progressIndicator",title:"Progress Indicator"},n=void 0,c={unversionedId:"FormObjects/progressIndicator",id:"version-19/FormObjects/progressIndicator",title:"Progress Indicator",description:'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.',source:"@site/versioned_docs/version-19/FormObjects/progressIndicator.md",sourceDirName:"FormObjects",slug:"/FormObjects/progressIndicator",permalink:"/docs/fr/docs/19/FormObjects/progressIndicator",draft:!1,tags:[],version:"19",frontMatter:{id:"progressIndicator",title:"Progress Indicator"},sidebar:"docs",previous:{title:"Plug-in Area",permalink:"/docs/fr/docs/19/FormObjects/pluginAreaOverview"},next:{title:"Radio Button",permalink:"/docs/fr/docs/19/FormObjects/radiobuttonOverview"}},d={},l=[{value:"Using indicators",id:"using-indicators",level:2},{value:"Default thermometer",id:"default-thermometer",level:2},{value:"Supported Properties",id:"supported-properties",level:3},{value:"Barber shop",id:"barber-shop",level:2},{value:"Supported Properties",id:"supported-properties-1",level:3},{value:"See also",id:"see-also",level:2}],m={toc:l};function f(e){var r=e.components,p=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,p,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(57068).Z,width:"288",height:"45"})),(0,a.kt)("h2",{id:"using-indicators"},"Using indicators"),(0,a.kt)("p",null,"You can use indicators either to display or set values. For example, if a progress indicator is given a value by a method, it displays the value. If the user drags the indicator point, the value changes. The value can be used in another object such as a field or an enterable or non-enterable object."),(0,a.kt)("p",null,"The variable associated with the indicator controls the display. You place values into, or use values from, the indicator using methods. For example, a method for a field or enterable object could be used to control a progress indicator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"}," vTherm:=[Employees]Salary\n")),(0,a.kt)("p",null,"This method assigns the value of the Salary field to the vTherm variable. This method would be attached to the Salary field."),(0,a.kt)("p",null,"Conversely, you could use the indicator to control the value in a field. The user drags the indicator to set the value. In this case the method becomes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"}," [Employees]Salary:=vTherm\n")),(0,a.kt)("p",null,"The method assigns the value of the indicator to the Salary field. As the user drags the indicator, the value in the Salary field changes."),(0,a.kt)("h2",{id:"default-thermometer"},"Default thermometer"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(32372).Z,width:"53",height:"176"})),(0,a.kt)("p",null,"The thermometer is the basic progress indicator."),(0,a.kt)("p",null,"You can display horizontal or vertical thermometers bars. This is determined by the shape of the object that you draw."),(0,a.kt)("p",null,"Multiple graphical options are available: minimum/maximum values, graduations, steps."),(0,a.kt)("h3",{id:"supported-properties"},"Supported Properties"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesScale#barber-shop"},"Barber shop")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#bold"},"Bold")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesBackgroundAndBorder#border-line-style"},"Border Line Style")," -",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesScale#display-graduation"},"Display graduation")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesEntry#enterable"},"Enterable")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesAction#execute-object-method"},"Execute object method")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesObject#expression-type"},"Expression Type"),' (only "integer", "number", "date", or "time") - ',(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#font"},"Font")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#font-color"},"Font Color")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#font-size"},"Font Size")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#italic"},"Italic")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesScale#graduation-step"},"Graduation step")," -",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesHelp#help-tip"},"Help Tip")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesScale#label-location"},"Label Location")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesScale#maximum"},"Maximum")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesScale#minimum"},"Minimum")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesDisplay#number-format"},"Number Format")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesScale#step"},"Step")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesObject#type"},"Type")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#underline"},"Underline")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#width"},"Width"),"  "),(0,a.kt)("h2",{id:"barber-shop"},"Barber shop"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(54077).Z,width:"280",height:"40"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Barber shop")," is a variant of the default thermometer. To enable this variant, you need to set the ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesScale#barber-shop"},"Barber shop")," property."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'In JSON code, just remove "max" property from a default thermometer object to enable the Barber shop variant.')),(0,a.kt)("p",null,"Barber shop displays a continuous animation, like the ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/spinner"},"spinner"),". These thermometers are generally used to indicate to the user that the program is in the process of carrying out a long operation. When this thermometer variant is selected, ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesScale"},"graphical Scale properties")," are not available."),(0,a.kt)("p",null,"When the form is executed, the object is not animated. You manage the animation by passing a value to its ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesObject#variable-or-expression"},"associated variable or expression"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 (or any value other than 0) = Start animation,"),(0,a.kt)("li",{parentName:"ul"},"0 = Stop animation.")),(0,a.kt)("h3",{id:"supported-properties-1"},"Supported Properties"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesScale#barber-shop"},"Barber shop")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#bold"},"Bold")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesBackgroundAndBorder#border-line-style"},"Border Line Style")," -",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesEntry#enterable"},"Enterable")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesAction#execute-object-method"},"Execute object method")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesObject#expression-type"},"Expression Type"),' (only "integer", "number", "date", or "time") - ',(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#font"},"Font")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#font-color"},"Font Color")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#font-size"},"Font Size")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesHelp#help-tip"},"Help Tip")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#italic"},"Italic")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesObject#type"},"Type")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesText#underline"},"Underline")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/propertiesCoordinatesAndSizing#width"},"Width"),"  "),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/ruler"},"rulers"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/fr/docs/19/FormObjects/stepper"},"steppers")))))}f.isMDXComponent=!0},54077:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/indicator-4aede0e01bdd9a603abe016a5ec90d03.gif"},32372:(e,r,t)=>{t.d(r,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAACwCAIAAAAg+bFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAMCSURBVHhe7drBjdswEIVhn7aTtLD1qBsX48sWkBpcxp5dQoacIUVqJNvyk0YK8H4ICE0D8geJOZDYy+Pc0YcV5bsNl8twsw/6MfV9vS/O5AJ89+u32IZh9IlFxzJQj5+xwt5vFXRDsSeOnykd4OsEedrP2Hji+wuna0izm1ob+X6x5A52r2n/j68dmszPlI7wCcHGMpkxfqZ0hE+ST7lxys/kwnwfRh8WfVj0YdGHRR8WfVj0YdGHRR8WfVj0YYX4yt62O8SYzCwU4BOLMtrB/GmBb39fc6Birspzpy2+gOdXDebqTI11to19uqo0u6mUjn9SKjnS9877PZdvRtOYum/n2v/5iaZ5fmkoKAM23y20v29cfs3hnsD6iaUifEj0YdGHRR8WfVj0YdGHRR8WfVj0YdGHRR9WkK/sd5udevd5sQifOyWQiROdH9yGiaHyznL+kv54cnydMydGy23sU4ZmNxVBeYn6Oo/0LTy/Isjjs/vamROsv8RRg2AyrPzbfLVYgE9BufZB9hNLhfiA6MOiD4s+LPqw6MOiD4s+LPqw6MOiD4s+rDhf2gTXzXjZ/77YnQf6ssg4Mj7V+UF+eMO1nLVUXp5/DgzxJd34d2udqbHOtrFPV5VmN3WuI33++Y2ac/rsP2pNaKdbf1q1yMCAIn3OO8QnCSz39N2mAn0fRR8WfVj0YdGHRR/W1Pf18we56HM/ueqiz/3kqos+95OrLvrcT6666HM/ueqiz/3kqmvWVza7zV68TL3YnUf47terbcLraYEMPj0/mPze2mv2+ZXKAULl9WcKs0X6zNWZGutsG/t0VWl201J9l0f6Fp6fkMaFdjafW2ONyX03bX+ff0LpaepUfeeL7e5LmCbjCCz39N2mYtbf59GHRR8WfVj0YdGHRR8WfVj0YdGHRR8WfVghvrLbfbEXnyvAVw8QXp8W+Pb3Vd4bpy2+3X2dqbG+2cY+XWea3nNjH57dq7Slb5c2XH+7JCgDinQtL8AnCSy38t2mQnxA9GGd2/d4/AMvdxxgkVtTAQAAAABJRU5ErkJggg=="},57068:(e,r,t)=>{t.d(r,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAtCAIAAACBCCG9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAF2SURBVHhe7dXBbQIxEEDRnNJJWqAeuqEYLikgNVBGzpQQhwxkycbY4Mwlfk9zACR7pdF+8XQE0ggMEgkMEgkMEgkMEvUFtt8+nWx2h/gFJvH58m/38eW3Fm7W0RNYueDrAeWDxJjHYbcpcW3P73+xbqFRR0dglxtOD1QYk1kEsG6hVUc7sKtji+tgDt8v/bqFZh0Cg9sEBomSA1seu7oOprAIYN1Cq46OwMq5uKNcpi9mc93QjxZadXQEVpSzJ+fnwDwWgRXrFm7W0RcY8BCBQaI7Ait/gvEJ5tbfgsDgbgKDRAKDRH8f2BuwEGG03BHY8+vLP5h3GCaw6sSGYIDAqhMbggECq05sCAYIrDqxIRggsOrEhmCAwKoTG4IBAqtObAgGCKw6sSEYILDqxIZggMCqExuCAQKrTmwIBgisOrEhGCCw6sSGYIDAqhMbggECq05sCAakBAZcRBgtvYEBDxAYJBIYJBIYJBIYJBIYJBIYpDkePwAePMhF3WLIcQAAAABJRU5ErkJggg=="}}]);