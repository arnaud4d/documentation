"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,b=d["".concat(p,".").concat(h)]||d[h]||l[h]||i;return r?a.createElement(b,n(n({ref:t},m),{},{components:r})):a.createElement(b,n({ref:t},m))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var c=2;c<i;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=r(87462),o=r(63366),i=(r(67294),r(3905)),n=["components"],s={id:"progressIndicator",title:"Progress Indicator"},p=void 0,c={unversionedId:"FormObjects/progressIndicator",id:"version-18/FormObjects/progressIndicator",title:"Progress Indicator",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/progressIndicator.md",sourceDirName:"FormObjects",slug:"/FormObjects/progressIndicator",permalink:"/main/ja/docs/18/FormObjects/progressIndicator",draft:!1,tags:[],version:"18",frontMatter:{id:"progressIndicator",title:"Progress Indicator"},sidebar:"docs",previous:{title:"Plug-in Area",permalink:"/main/ja/docs/18/FormObjects/pluginAreaOverview"},next:{title:"Radio Button",permalink:"/main/ja/docs/18/FormObjects/radiobuttonOverview"}},m={},l=[{value:"Overview",id:"overview",level:2},{value:"Using indicators",id:"using-indicators",level:3},{value:"Default thermometer",id:"default-thermometer",level:2},{value:"Supported Properties",id:"supported-properties",level:3},{value:"Barber shop",id:"barber-shop",level:2},{value:"Supported Properties",id:"supported-properties-1",level:3},{value:"See also",id:"see-also",level:2}],d={toc:l};function h(e){var t=e.components,s=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(50074).Z,width:"288",height:"45"})),(0,i.kt)("h3",{id:"using-indicators"},"Using indicators"),(0,i.kt)("p",null,"You can use indicators either to display or set values. For example, if a progress indicator is given a value by a method, it displays the value. If the user drags the indicator point, the value changes. The value can be used in another object such as a field or an enterable or non-enterable object."),(0,i.kt)("p",null,"The variable associated with the indicator controls the display. You place values into, or use values from, the indicator using methods. For example, a method for a field or enterable object could be used to control a progress indicator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"}," $vTherm:=[Employees]Salary\n")),(0,i.kt)("p",null,"This method assigns the value of the Salary field to the $vTherm variable. This method would be attached to the Salary field."),(0,i.kt)("p",null,"Conversely, you could use the indicator to control the value in a field. The user drags the indicator to set the value. In this case the method becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"}," [Employees]Salary:=$vTherm\n")),(0,i.kt)("p",null,"The method assigns the value of the indicator to the Salary field. As the user drags the indicator, the value in the Salary field changes."),(0,i.kt)("h2",{id:"default-thermometer"},"Default thermometer"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(72504).Z,width:"53",height:"176"})),(0,i.kt)("p",null,"The thermometer is the basic progress indicator."),(0,i.kt)("p",null,"You can display horizontal or vertical thermometers bars. This is determined by the shape of the object that you draw."),(0,i.kt)("p",null,"Multiple graphical options are available: minimum/maximum values, graduations, steps."),(0,i.kt)("h3",{id:"supported-properties"},"Supported Properties"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesScale#barber-shop"},"Barber shop")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesText#bold"},"Bold")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"},"Border Line Style")," -",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesScale#display-graduation"},"Display graduation")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesEntry#enterable"},"Enterable")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesAction#execute-object-method"},"Execute object method")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesObject#expression-type"},"Expression Type"),' (only "integer", "number", "date", or "time") - ',(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesScale#graduation-step"},"Graduation step")," -",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesHelp#help-tip"},"Help Tip")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesScale#label-location"},"Label Location")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesScale#maximum"},"Maximum")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesScale#minimum"},"Minimum")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesDisplay#number-format"},"Number Format")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesScale#step"},"Step")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesObject#type"},"Type")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#width"},"Width"),"  "),(0,i.kt)("h2",{id:"barber-shop"},"Barber shop"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(68827).Z,width:"280",height:"40"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Barber shop")," is a variant of the default thermometer. To enable this variant, you need to set the ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesScale#barber-shop"},"Barber shop")," property."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'In JSON code, just remove "max" property from a default thermometer object to enable the Barber shop variant.')),(0,i.kt)("p",null,"Barber shop displays a continuous animation, like the ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/spinner"},"spinner"),". These thermometers are generally used to indicate to the user that the program is in the process of carrying out a long operation. When this thermometer variant is selected, ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesScale"},"graphical Scale properties")," are not available."),(0,i.kt)("p",null,"When the form is executed, the object is not animated. You manage the animation by passing a value to its ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesObject#variable-or-expression"},"associated variable or expression"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 (or any value other than 0) = Start animation,"),(0,i.kt)("li",{parentName:"ul"},"0 = Stop animation.")),(0,i.kt)("h3",{id:"supported-properties-1"},"Supported Properties"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesScale#barber-shop"},"Barber shop")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesText#bold"},"Bold")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"},"Border Line Style")," -",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesEntry#enterable"},"Enterable")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesAction#execute-object-method"},"Execute object method")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesObject#expression-type"},"Expression Type"),' (only "integer", "number", "date", or "time") - ',(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesHelp#help-tip"},"Help Tip")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesObject#type"},"Type")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesObject#variable-or-expression"},"Variable or Expression")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,i.kt)("a",{parentName:"p",href:"/main/ja/docs/18/FormObjects/propertiesCoordinatesAndSizing#width"},"Width"),"  "),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/ja/docs/18/FormObjects/ruler"},"rulers"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/ja/docs/18/FormObjects/stepper"},"steppers"))))}h.isMDXComponent=!0},68827:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/indicator-4aede0e01bdd9a603abe016a5ec90d03.gif"},72504:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAACwCAIAAAAg+bFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAMCSURBVHhe7drBjdswEIVhn7aTtLD1qBsX48sWkBpcxp5dQoacIUVqJNvyk0YK8H4ICE0D8geJOZDYy+Pc0YcV5bsNl8twsw/6MfV9vS/O5AJ89+u32IZh9IlFxzJQj5+xwt5vFXRDsSeOnykd4OsEedrP2Hji+wuna0izm1ob+X6x5A52r2n/j68dmszPlI7wCcHGMpkxfqZ0hE+ST7lxys/kwnwfRh8WfVj0YdGHRR8WfVj0YdGHRR8WfVj0YYX4yt62O8SYzCwU4BOLMtrB/GmBb39fc6Birspzpy2+gOdXDebqTI11to19uqo0u6mUjn9SKjnS9877PZdvRtOYum/n2v/5iaZ5fmkoKAM23y20v29cfs3hnsD6iaUifEj0YdGHRR8WfVj0YdGHRR8WfVj0YdGHRR9WkK/sd5udevd5sQifOyWQiROdH9yGiaHyznL+kv54cnydMydGy23sU4ZmNxVBeYn6Oo/0LTy/Isjjs/vamROsv8RRg2AyrPzbfLVYgE9BufZB9hNLhfiA6MOiD4s+LPqw6MOiD4s+LPqw6MOiD4s+rDhf2gTXzXjZ/77YnQf6ssg4Mj7V+UF+eMO1nLVUXp5/DgzxJd34d2udqbHOtrFPV5VmN3WuI33++Y2ac/rsP2pNaKdbf1q1yMCAIn3OO8QnCSz39N2mAn0fRR8WfVj0YdGHRR/W1Pf18we56HM/ueqiz/3kqos+95OrLvrcT6666HM/ueqiz/3kqmvWVza7zV68TL3YnUf47terbcLraYEMPj0/mPze2mv2+ZXKAULl9WcKs0X6zNWZGutsG/t0VWl201J9l0f6Fp6fkMaFdjafW2ONyX03bX+ff0LpaepUfeeL7e5LmCbjCCz39N2mYtbf59GHRR8WfVj0YdGHRR8WfVj0YdGHRR8WfVghvrLbfbEXnyvAVw8QXp8W+Pb3Vd4bpy2+3X2dqbG+2cY+XWea3nNjH57dq7Slb5c2XH+7JCgDinQtL8AnCSy38t2mQnxA9GGd2/d4/AMvdxxgkVtTAQAAAABJRU5ErkJggg=="},50074:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAtCAIAAACBCCG9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAF2SURBVHhe7dXBbQIxEEDRnNJJWqAeuqEYLikgNVBGzpQQhwxkycbY4Mwlfk9zACR7pdF+8XQE0ggMEgkMEgkMEgkMEvUFtt8+nWx2h/gFJvH58m/38eW3Fm7W0RNYueDrAeWDxJjHYbcpcW3P73+xbqFRR0dglxtOD1QYk1kEsG6hVUc7sKtji+tgDt8v/bqFZh0Cg9sEBomSA1seu7oOprAIYN1Cq46OwMq5uKNcpi9mc93QjxZadXQEVpSzJ+fnwDwWgRXrFm7W0RcY8BCBQaI7Ait/gvEJ5tbfgsDgbgKDRAKDRH8f2BuwEGG03BHY8+vLP5h3GCaw6sSGYIDAqhMbggECq05sCAYIrDqxIRggsOrEhmCAwKoTG4IBAqtObAgGCKw6sSEYILDqxIZggMCqExuCAQKrTmwIBgisOrEhGCCw6sSGYIDAqhMbggECq05sCAakBAZcRBgtvYEBDxAYJBIYJBIYJBIYJBIYJBIYpDkePwAePMhF3WLIcQAAAABJRU5ErkJggg=="}}]);