"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5841],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(h,o(o({ref:t},l),{},{components:r})):a.createElement(h,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=r(87462),i=r(63366),n=(r(67294),r(3905)),o=["components"],s={id:"pictures",title:"Pictures"},c=void 0,p={unversionedId:"FormEditor/pictures",id:"version-19-R6/FormEditor/pictures",title:"Pictures",description:"4D includes specific support for pictures used in your forms.",source:"@site/versioned_docs/version-19-R6/FormEditor/pictures.md",sourceDirName:"FormEditor",slug:"/FormEditor/pictures",permalink:"/docs/pt/docs/FormEditor/pictures",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"pictures",title:"Pictures"},sidebar:"docs",previous:{title:"Style sheets",permalink:"/docs/pt/docs/FormEditor/stylesheets"},next:{title:"Form Editor",permalink:"/docs/pt/docs/FormEditor/overview"}},l={},d=[{value:"Native Formats Supported",id:"native-formats-supported",level:2},{value:"Unavailable picture format",id:"unavailable-picture-format",level:3},{value:"High Resolution Pictures",id:"high-resolution-pictures",level:2},{value:"Scale factor",id:"scale-factor",level:3},{value:"DPI",id:"dpi",level:3},{value:"Dark mode pictures (macOS only)",id:"dark-mode-pictures-macos-only",level:2},{value:"Mouse Coordinates in a Picture",id:"mouse-coordinates-in-a-picture",level:2}],u={toc:d};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"4D includes specific support for pictures used in your forms."),(0,n.kt)("h2",{id:"native-formats-supported"},"Native Formats Supported"),(0,n.kt)("p",null,"4D integrates native management of picture formats. This means that pictures will be displayed and stored in their original format, without any interpretation in 4D. The specific features of the different formats (shading, transparent areas, etc.) will be retained when they are copied and pasted, and will be displayed without alteration. This native support is valid for all pictures stored in 4D forms: ",(0,n.kt)("a",{parentName:"p",href:"/docs/pt/docs/FormObjects/staticPicture"},"static pictures")," pasted in Design mode, pictures pasted into ",(0,n.kt)("a",{parentName:"p",href:"/docs/pt/docs/FormObjects/inputOverview"},"inputs objects")," at runtime, etc."),(0,n.kt)("p",null,"The most common picture formats are supported of both platforms: .jpeg, .gif, .png, .tiff, .bmp, etc. On macOS, the .pdf format is also available for encoding and decoding."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The full list of supported formats varies according to the operating system and the custom codecs that are installed on the machines. To find out which codecs are available, you must use the ",(0,n.kt)("inlineCode",{parentName:"p"},"PICTURE CODEC LIST")," command (see also the ",(0,n.kt)("a",{parentName:"p",href:"/docs/pt/docs/Concepts/picture"},"picture data type")," description).")),(0,n.kt)("h3",{id:"unavailable-picture-format"},"Unavailable picture format"),(0,n.kt)("p",null,"A specific icon is displayed for pictures saved in a format that is not available on the machine. The extension of the missing format is shown at the bottom of the icon:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(48625).Z,width:"136",height:"67"})),(0,n.kt)("p",null,"The icon is automatically used wherever the picture is meant to be displayed:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(57943).Z,width:"392",height:"221"})),(0,n.kt)("p",null,"This icon indicates that the picture cannot be displayed or manipulated locally -- but it can be saved without alteration so that it can be displayed on other machines. This is the case, for example, for PDF pictures on Windows, or for PICT format pictures."),(0,n.kt)("h2",{id:"high-resolution-pictures"},"High Resolution Pictures"),(0,n.kt)("p",null,"4D supports high resolution pictures on both macOS and Windows platforms. High resolution pictures can be defined by either scale factor or dpi."),(0,n.kt)("h3",{id:"scale-factor"},"Scale factor"),(0,n.kt)("p",null,"High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the ",(0,n.kt)("em",{parentName:"p"},"scale factor")," (",(0,n.kt)("em",{parentName:"p"},"i.e."),", two times larger, three times larger, etc.)."),(0,n.kt)("p",null,'When using high resolution pictures, you can specify the scale factor by adding "@nx" in the picture\'s name (where ',(0,n.kt)("em",{parentName:"p"},"n")," designates the scale factor). In the table below, you can see that the scale factor is indicated in the names of the high resolution pictures, ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"mailto:circle@2x.png"},"circle@2x.png"))," and ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"mailto:circle@3x.png"},"circle@3x.png")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Display Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Scale Factor"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Standard Resolution"),(0,n.kt)("td",{parentName:"tr",align:null},"1:1 pixel density."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"1x"),(0,n.kt)("br",null),(0,n.kt)("img",{src:r(99337).Z,width:"152",height:"155"})," ",(0,n.kt)("em",{parentName:"td"},"circle.png"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"High Resolution"),(0,n.kt)("td",{parentName:"tr",align:null},"Pixel density increased by a factor of 2 or 3."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("table",null,(0,n.kt)("th",null,"2x"),(0,n.kt)("th",null,"3x"),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("img",{src:r(81164).Z,width:"156",height:"152"}),(0,n.kt)("em",{parentName:"td"},(0,n.kt)("a",{parentName:"em",href:"mailto:circle@2x.png"},"circle@2x.png"))),(0,n.kt)("td",null,(0,n.kt)("img",{src:r(86522).Z,width:"156",height:"152"}),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},(0,n.kt)("a",{parentName:"em",href:"mailto:circle@3x.png"},"circle@3x.png"))))))))),(0,n.kt)("p",null,"High resolution pictures with the @nx convention can be used in the following objects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pt/docs/FormObjects/staticPicture"},"Static pictures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pt/docs/FormObjects/buttonOverview"},"Buttons"),"/",(0,n.kt)("a",{parentName:"li",href:"/docs/pt/docs/FormObjects/radiobuttonOverview"},"radio"),"/",(0,n.kt)("a",{parentName:"li",href:"/docs/pt/docs/FormObjects/checkboxOverview"},"check boxes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pt/docs/FormObjects/pictureButtonOverview"},"Picture buttons"),"/",(0,n.kt)("a",{parentName:"li",href:"/docs/pt/docs/FormObjects/picturePopupMenuOverview"},"Picture pop-ups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pt/docs/FormObjects/tabControl"},"Tab controls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pt/docs/FormObjects/listboxOverview#list-box-headers"},"List box headers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pt/docs/Menus/properties#item-icon"},"Menu icons"))),(0,n.kt)("p",null,"4D automatically prioritizes pictures with the highest resolution. For example, when using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D automatically renders the highest possible resolution of the picture. Even if a command or property specifies ",(0,n.kt)("em",{parentName:"p"},"circle.png"),", ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"mailto:circle@3x.png"},"circle@3x.png"))," will be used (if it exists)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that resolution prioritization occurs only for displaying pictures onscreen, there is no automatic prioritization made when printing.")),(0,n.kt)("h3",{id:"dpi"},"DPI"),(0,n.kt)("p",null,"While 4D automatically prioritizes the highest resolution,  there are, however, some behavioral differences depending on screen and image dpi",(0,n.kt)("em",{parentName:"p"},"(","*",")"),", and picture format:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Operation"),(0,n.kt)("th",{parentName:"tr",align:null},"Behavior"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Drop or Paste"),(0,n.kt)("td",{parentName:"tr",align:null},"If the picture has:",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("strong",{parentName:"td"},"72dpi or 96dpi"),' - The picture is "',(0,n.kt)("a",{parentName:"td",href:"/docs/pt/docs/FormObjects/propertiesPicture#center--truncated-non-centered"},"Center"),'" formatted and the object containing the picture has the same number of pixels.'),(0,n.kt)("li",null,(0,n.kt)("strong",{parentName:"td"},"Other dpi"),' - The picture is "',(0,n.kt)("a",{parentName:"td",href:"/docs/pt/docs/FormObjects/propertiesPicture#scaled-to-fit"},"Scaled to fit"),"\" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)")," ",(0,n.kt)("li",null,(0,n.kt)("strong",{parentName:"td"},"No dpi"),' - The picture is "',(0,n.kt)("a",{parentName:"td",href:"/docs/pt/docs/FormObjects/propertiesPicture#scaled-to-fit"},"Scaled to fit"),'" formatted.')))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://doc.4d.com/4Dv19/4D/19/Setting-object-display-properties.300-5416671.en.html#148057"},"Automatic Size")," (Form Editor context menu)"),(0,n.kt)("td",{parentName:"tr",align:null},"If the picture's display format  is:",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"/docs/pt/docs/FormObjects/propertiesPicture#scaled-to-fit"},"Scaled"))," - The object containing the picture is resized according to (picture's number of pixels * screen dpi) / (picture's dpi) ")," ",(0,n.kt)("li",null,(0,n.kt)("strong",{parentName:"td"},"Not scaled")," - The object containing the picture has the same number of pixels as the picture.")))))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(","*",") Typically,  macOS = 72dpi, Windows = 96dpi")),(0,n.kt)("h2",{id:"dark-mode-pictures-macos-only"},"Dark mode pictures (macOS only)"),(0,n.kt)("p",null,"You can define specific pictures and icons to be used instead of standard pictures when ",(0,n.kt)("a",{parentName:"p",href:"/docs/pt/docs/FormEditor/propertiesForm#color-scheme"},"forms use the dark scheme"),"."),(0,n.kt)("p",null,"A dark mode picture is defined in the following way:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'dark mode picture has the same name as the standard (light scheme) version with the suffix "',(0,n.kt)("inlineCode",{parentName:"li"},"_dark"),'"'),(0,n.kt)("li",{parentName:"ul"},"dark mode picture is stored next to the standard version.")),(0,n.kt)("p",null,"At runtime, 4D will automatically load the light or dark image according to the ",(0,n.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv19/help/command/en/1761.html"},"current form color scheme"),".  "),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(91221).Z,width:"758",height:"246"})),(0,n.kt)("h2",{id:"mouse-coordinates-in-a-picture"},"Mouse Coordinates in a Picture"),(0,n.kt)("p",null,"4D lets you retrieve the local coordinates of the mouse in an ",(0,n.kt)("a",{parentName:"p",href:"/docs/pt/docs/FormObjects/inputOverview"},"input object")," associated with a ",(0,n.kt)("a",{parentName:"p",href:"/docs/pt/docs/FormObjects/propertiesObject#expression-type"},"picture expression"),", in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. This mechanism, similar to that of a picture map, can be used, for example, to handle scrollable button bars or the interface of cartography software."),(0,n.kt)("p",null,"The coordinates are returned in the ",(0,n.kt)("em",{parentName:"p"},"MouseX")," and ",(0,n.kt)("em",{parentName:"p"},"MouseY")," ",(0,n.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html"},"System Variables"),". The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in ",(0,n.kt)("em",{parentName:"p"},"MouseX")," and ",(0,n.kt)("em",{parentName:"p"},"MouseY"),"."),(0,n.kt)("p",null,"You can get the value of these variables as part of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/pt/docs/Events/onClicked"},(0,n.kt)("inlineCode",{parentName:"a"},"On Clicked")),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/pt/docs/Events/onDoubleClicked"},(0,n.kt)("inlineCode",{parentName:"a"},"On Double Clicked")),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/pt/docs/Events/onMouseUp"},(0,n.kt)("inlineCode",{parentName:"a"},"On Mouse up")),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/pt/docs/Events/onMouseEnter"},(0,n.kt)("inlineCode",{parentName:"a"},"On Mouse Enter")),", or ",(0,n.kt)("a",{parentName:"p",href:"/docs/pt/docs/Events/onMouseMove"},(0,n.kt)("inlineCode",{parentName:"a"},"On Mouse Move"))," form events."))}m.isMDXComponent=!0},91221:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/darkicon-a6428b1f55bb92aa93a9efcd2e556455.png"},48625:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},57943:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/picNoFormat2-ad015882b591ae364c3361325b40b6fe.png"},99337:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pictureScale1-6a3c795f192d157b724aa32aff50e77e.png"},81164:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pictureScale2-237c92c0209bcecc58087d7cc02cf0d0.png"},86522:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pictureScale3-cf162d1062562b17012494226b938198.png"}}]);