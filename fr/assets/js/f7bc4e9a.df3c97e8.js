"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62725],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>A});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),A=o,h=m["".concat(p,".").concat(A)]||m[A]||d[A]||n;return r?i.createElement(h,a(a({ref:t},l),{},{components:r})):i.createElement(h,a({ref:t},l))}));function A(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<n;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>A,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=r(87462),o=r(63366),n=(r(67294),r(3905)),a=["components"],s={id:"shapesOverview",title:"Shapes"},p=void 0,c={unversionedId:"FormObjects/shapesOverview",id:"version-19-R6/FormObjects/shapesOverview",title:"Shapes",description:"Shapes are static objects that can be added to 4D forms.",source:"@site/versioned_docs/version-19-R6/FormObjects/shapes_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/shapesOverview",permalink:"/main/fr/docs/FormObjects/shapesOverview",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"shapesOverview",title:"Shapes"},sidebar:"docs",previous:{title:"Ruler",permalink:"/main/fr/docs/FormObjects/ruler"},next:{title:"Spinner",permalink:"/main/fr/docs/FormObjects/spinner"}},l={},d=[{value:"Rectangle",id:"rectangle",level:2},{value:"JSON Example:",id:"json-example",level:4},{value:"Supported Properties",id:"supported-properties",level:4},{value:"Line",id:"line",level:2},{value:"startPoint property",id:"startpoint-property",level:3},{value:"JSON Examples:",id:"json-examples",level:4},{value:"Supported Properties",id:"supported-properties-1",level:4},{value:"Oval",id:"oval",level:2},{value:"JSON Example:",id:"json-example-1",level:4},{value:"Supported Properties",id:"supported-properties-2",level:4}],m={toc:d};function A(e){var t=e.components,s=(0,o.Z)(e,a);return(0,n.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Shapes are ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/formObjectsOverview#active-and-static-objects"},"static objects")," that can be added to 4D forms."),(0,n.kt)("p",null,"4D forms support the following basic shapes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"rectangles"),(0,n.kt)("li",{parentName:"ul"},"lines"),(0,n.kt)("li",{parentName:"ul"},"ovals")),(0,n.kt)("h2",{id:"rectangle"},"Rectangle"),(0,n.kt)("p",null,"A static rectangle is a decorative object for forms. Rectangles are constrained to squared shapes. "),(0,n.kt)("p",null,"The design of rectangles is controlled through many properties (color, line thickness, pattern, etc.). Specifically, the ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#corner-radius"},"roundness")," of its corners can be defined. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(23707).Z,width:"98",height:"114"})),(0,n.kt)("h4",{id:"json-example"},"JSON Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},'    "myRectangle": {\n        "type": "rectangle",    //define the type of object\n        "left": 60,             //left position on the form  \n        "top": 160,             //top position on the form \n        "width": 100,           //width of the object\n        "height": 20,           //height of the object\n        "borderRadius": 20      //define the roundness of the corners\n                }\n')),(0,n.kt)("h4",{id:"supported-properties"},"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#corner-radius"},"Corner radius")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesBackgroundAndBorder#dotted-line-type"},"Dotted Line Type")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color"},"Fill Color")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesBackgroundAndBorder#line-color"},"Line Color")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesBackgroundAndBorder#line-width"},"Line Width")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesObject#type"},"Type")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#width"},"Width")," "),(0,n.kt)("h2",{id:"line"},"Line"),(0,n.kt)("p",null,"A static line is a decorative object for forms, drawn between two plots. Lines can be horizontal, vertical, or of any angle shapes."),(0,n.kt)("p",null,"The design of lines is controlled through many properties (color, line thickness, etc.)."),(0,n.kt)("h3",{id:"startpoint-property"},"startPoint property"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"startPoint")," JSON property defines from which coordinate to draw the line (see example)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"the ",(0,n.kt)("inlineCode",{parentName:"p"},"startPoint")," property is not exposed in the Property List, where the line drawing direction is visible. ")),(0,n.kt)("h4",{id:"json-examples"},"JSON Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'    "myLine": {\n        "type": "line",                \n        "left": 20,\n        "top": 40,\n        "width": 100,\n        "height": 80,\n        "startPoint": "topLeft", //first direction\n        "strokeDashArray": "6 2" //dashed\n        }\n')),(0,n.kt)("p",null,"Result:\n",(0,n.kt)("img",{src:r(20487).Z,width:"160",height:"120"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'    "myLine": {\n        "type": "line",                \n        "left": 20,\n        "top": 40,\n        "width": 100,\n        "height": 80,\n        "startPoint": "bottomLeft", //2nd direction\n        "strokeDashArray": "6 2" //dashed\n        }\n')),(0,n.kt)("p",null,"Result:\n",(0,n.kt)("img",{src:r(12872).Z,width:"160",height:"120"})),(0,n.kt)("h4",{id:"supported-properties-1"},"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesBackgroundAndBorder#dotted-line-type"},"Dotted Line Type")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesBackgroundAndBorder#line-color"},"Line Color")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesBackgroundAndBorder#line-width"},"Line Width")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,n.kt)("a",{parentName:"p",href:"#startpoint-property"},"startPoint")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesObject#type"},"Type")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#width"},"Width")," "),(0,n.kt)("h2",{id:"oval"},"Oval"),(0,n.kt)("p",null,"A static oval is a decorative object for forms. Oval objects can be used to draw circular shapes (when ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#width"},"width")," and ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#height"},"height")," properties are equal). "),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(86442).Z,width:"75",height:"111"})),(0,n.kt)("h4",{id:"json-example-1"},"JSON Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},'    "myOval": {\n        "type": "oval",     //define the type of object\n        "left": 60,         //left position on the form  \n        "top": 160,         //top position on the form \n        "width": 100,       //width of the object\n        "height": 20,       //height of the object\n        "fill": "blue"      //define the background color\n                }\n')),(0,n.kt)("h4",{id:"supported-properties-2"},"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#bottom"},"Bottom")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesObject#css-class"},"Class")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesBackgroundAndBorder#dotted-line-type"},"Dotted Line Type")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color"},"Fill Color")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#height"},"Height")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesResizingOptions#horizontal-sizing"},"Horizontal Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#left"},"Left")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesBackgroundAndBorder#line-color"},"Line Color")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesBackgroundAndBorder#line-width"},"Line Width")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesObject#object-name"},"Object Name")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#right"},"Right")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#top"},"Top")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesObject#type"},"Type")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesResizingOptions#vertical-sizing"},"Vertical Sizing")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesDisplay#visibility"},"Visibility")," - ",(0,n.kt)("a",{parentName:"p",href:"/main/fr/docs/FormObjects/propertiesCoordinatesAndSizing#width"},"Width")))}A.isMDXComponent=!0},20487:(e,t,r)=>{r.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAIAAAD6wG44AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAANhSURBVHhe7dovTiRBGIZxboAk4QDjEDjECCQOzw0QSJJO5gbcgwQ5glOMQLQgQSAQJIgRe4R9N19n/4VZZruru6veen5iQmGfTH091XUAf99gisDmCGyOwOYIbI7A5ghsjsDmCGyOwOYIbI7A5ghsjsDmCGyOwOYIbI7A5uYM/PT01P2F0cwW+PX19ejo6O7urltjHLMFlrZtT05Orq6uPj4+un8htTkDy/v7++Xl5enp6fPzc/cvJDVz4LBarZbLZbdAUlkEltileexKLpfAst1utVczktPKKLBoJF9cXDCSE8orcGiaRr+gHh8fuzUGyDGwPDw8qPHb21u3Rl+ZBpaYxNqrGclD5Bs4XF9fM5KHyD2wMJKHKCCwaCQfHh5ycN1DGYFls9ksFov1et2tsZ9iAks8bemTkby/kgKH+/t7RvL+ygssjOT9FRlYYiRzcP2lUgNLHFzf3t52a3ym4MAhvsG8Z9yl+MCih2pG8i4OgYWRvItJYOFd8qd8Aoemac7OzroF/AILj12/MwwsXO/6yTOwMJKDbeDAu2TzwFL59S7/wBKTWHt1hSO5isDh5uamwpFcUWBZrVbHx8dVjeS6Ast6vdZIrufgurrA0rat9upKvsc1BpbtdqtP/Va2H8mVBg7aru1HctWBRXXV2Hgk1x5YtEsbH1wT+AelVeCmabq1EQL/Ek9em80mlh4I/IeXlxezkUzgv5mNZAJ/Ikayx8E1gXfSRn1+ft4tikXgfzF47CLw15bLZbkjmcBfK3okE3hfGsklHlwT+D+o7mKxKOt6F4H/Tzx2tW1bykgmcB9N05QykgncUykjmcD9FfEumcCDxMF1zt9jAg+V+fUuAqeR7fUuAieT50gmcEoxkrM6uCZwYnFwnc/1LgKPIp/3jAQeSybXuwg8ohxGMoHHNfu7ZAJPQRv1XNe7CDyRuR67CDyp6a93EXhS049kAs9gynfJBJ6H6k5zvYvAs5nmeheBZzb29S4Cz2/UkUzgLIz3LpnAuYiD6+TfYwJnZIzrXQTOTtrrXQTOUcKRTOBMxUgefnBN4HzFwfXA610Ezl08ecVnDwQuQO+6QmBzBDZHYHMENkdgcwQ2R2BzBDZHYHMENkdgcwQ2R2BzBDZHYHMENkdgcwQ21wWGrYOD70yi0jKVpSuYAAAAAElFTkSuQmCC"},12872:(e,t,r)=>{r.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAIAAAD6wG44AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAANZSURBVHhe7duhTitBFIfxvgOCpAJJgqhAkCAQlTg8AskbNGnCGyAqeYrKCpIKBB7ZpBJBUlHBI9y52TV34EJ358zOzH++nyCM/kLPducwgr5PiCKwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCF+Dj46P9rTsCiyNwvvb7/f39/cPDQ3vuhcCZ2m63V1dXNzc3IZ/PDoFz9PLycnJyEvi32yBwdpbL5fHxsfvZnsMQODvuM/nt7a09BCNwLpqh+/z83J6NEDgLhkPXQ+D0np6eDIeuh8CJzefzs7Mzw6HrIXBiLm3gN92fETgNN3Qnk8n7+3t7jobACUQduh4CD6p5vRx16HoIPBxXdzqdhr9e7oTAg3p9fW1/GwqBh+CG7vX1dXsYFoHjGn7oeggckdWdbggCx7LZbCK9Xu6EwBEN/0j1FYGNmSxSGSKwpRyGrofAZuLd6YYgsA3bRSpDBLZhu0hliMBBIi1SGSJwf3kOXQ+BexryTjcEgfuIvUhliMB9xF6kMkTgDgZbpDJE4EOVMnQ9BP5d8jvdEAT+RZJFKkME/l0Ot369Efi/Ei5SGSLwN4oeuh4C+zK80w1B4H9kskhliMC+oh+pviLwX7ktUhkisNrQ9dQeuIg73RBVB852kcpQ1YGzXaQyVGPg/BepDFUXeL1eaw9dT12BF4vF0dGR9tD1VBR4NptpvF7upIrA+/3e/SxokcqQfuDVanV6elrWIpUh8cCPj4+1DV2PbODdbnd7e1vh0PXIBr68vFR9vdyJYODmkUrs1q83tcBu6E6n0/YApcAM3W+JBN5sNufn5wzdrxQCu7rj8bie18udFB+YR6qfFRy4Gbrz+bw94zulBmboHqjIwKvViqF7oPICL5fLyl8vd1JS4OZ5qoZFKkPFBG6Grvtwbs84TBmBGbq9FRCYO90QuQeuc5HKUL6Ba16kMpRp4MoXqQzlGJihayivwNzpmssrMItU5nIJzK1fJFkEXiwWLFJFkjiw+8O9u7tj6MaTMvB2u724uGDoRpUssPuOW9X/6aaSLLDDI9UAUgbGAAgsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILK4NDFmj0R82ANRa+9ve+AAAAABJRU5ErkJggg=="},86442:(e,t,r)=>{r.d(t,{Z:()=>i});const i="data:image/png;base64,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"},23707:(e,t,r)=>{r.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAByCAIAAAAnEZPCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEkSURBVHhe7d2xDQMhEABBcAXff5V0gJOPbGRv/jMJkK6EdNnNtdbgn9d98pNMiUyJTIlMiUzJYSC4ruu+PdJxQjpn2nvfj4eZ8zxI+nSJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiW2Hn+q2Q775dIlMiUyJTIlMiUyJTMEYb82sGvDSbsgTAAAAAElFTkSuQmCC"}}]);