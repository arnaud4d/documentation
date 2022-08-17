"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33518],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?l.createElement(h,i(i({ref:t},c),{},{components:a})):l.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});a(67294);var l=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"stylesheets",title:"Style sheets"},o=void 0,s={unversionedId:"FormEditor/stylesheets",id:"version-18/FormEditor/stylesheets",title:"Style sheets",description:"Overview",source:"@site/versioned_docs/version-18/FormEditor/createStylesheet.md",sourceDirName:"FormEditor",slug:"/FormEditor/stylesheets",permalink:"/docs/pt/18/FormEditor/stylesheets",draft:!1,tags:[],version:"18",frontMatter:{id:"stylesheets",title:"Style sheets"},sidebar:"docs",previous:{title:"Object libraries",permalink:"/docs/pt/18/FormEditor/objectLibrary"},next:{title:"Pictures",permalink:"/docs/pt/18/FormEditor/pictures"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Style Sheet Files",id:"style-sheet-files",level:3},{value:"Style Sheet Architecture",id:"style-sheet-architecture",level:3},{value:"Style Sheet Selectors",id:"style-sheet-selectors",level:2},{value:"Object Type",id:"object-type",level:3},{value:"Object Name",id:"object-name",level:3},{value:"Class",id:"class",level:3},{value:"All Objects",id:"all-objects",level:3},{value:"Specific Attribute",id:"specific-attribute",level:3},{value:"Supported syntaxes",id:"supported-syntaxes",level:4},{value:"Examples",id:"examples",level:4},{value:"Style Sheet Declarations",id:"style-sheet-declarations",level:2},{value:"Attribute Mapping",id:"attribute-mapping",level:3},{value:"Specific Attribute Values",id:"specific-attribute-values",level:3},{value:"Priority Order",id:"priority-order",level:2},{value:"JSON vs Style Sheet",id:"json-vs-style-sheet",level:3},{value:"Multiple Style Sheets",id:"multiple-style-sheets",level:3},{value:"Creating or Editing Style Sheets",id:"creating-or-editing-style-sheets",level:2}],u={toc:c};function d(e){var{components:t}=e,i=r(e,["components"]);return(0,l.kt)("wrapper",n({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",n({},{id:"overview"}),"Overview"),(0,l.kt)("p",null,"A style sheet groups together a combination of attributes for form objects \u2014  from text attributes to nearly any available object attribute."),(0,l.kt)("p",null,"In addition to harmonizing an application's interface, style sheets provide three major advantages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Saves time during development: Each object has specific group of settings within a single operation."),(0,l.kt)("li",{parentName:"ul"},"Facilitates maintenance: Style sheets modify the appearance of any objects that uses them, so changing the font size in a style sheet will change the font size for all of the objects that use this same style sheet."),(0,l.kt)("li",{parentName:"ul"},"Controls multi-platform development: You can have a style sheets that apply to both macOS and Windows platforms, only macOS, or only Windows. When a style sheet is applied, 4D automatically uses the appropriate style sheet.")),(0,l.kt)("h3",n({},{id:"style-sheet-files"}),"Style Sheet Files"),(0,l.kt)("p",null,"4D accepts three, specific style sheet files:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",n({parentName:"tr"},{align:null}),"Style Sheet"),(0,l.kt)("th",n({parentName:"tr"},{align:null}),"Platform"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets.css"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"Default global style sheet for both macOS and Windows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_mac.css"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"For defining macOS only specific attribute styles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_windows.css"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"For defining Windows only specific attribute styles")))),(0,l.kt)("p",null,'These files are stored in the project\'s "/SOURCES" folder.'),(0,l.kt)("h3",n({},{id:"style-sheet-architecture"}),"Style Sheet Architecture"),(0,l.kt)("p",null,"While adapted to meet the specific needs of 4D forms, style sheets for project databases generally follow CSS2 syntax and grammar."),(0,l.kt)("p",null,"Every style rule in a style sheet contains two parts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"a ",(0,l.kt)("em",{parentName:"p"},"Selector"),' - A selector defines where to apply the style. 4D supports "object type", "object name", "class", "all objects", as well as "attribute value" selectors.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"a ",(0,l.kt)("em",{parentName:"p"},"Declaration")," - The declaration defines the actual style to apply. Multiple declaration lines can be grouped together to form a declaration block. Each line in a CSS declaration block must end with a semicolon, and the entire block must be surrounded by curly braces."))),(0,l.kt)("h2",n({},{id:"style-sheet-selectors"}),"Style Sheet Selectors"),(0,l.kt)("h3",n({},{id:"object-type"}),"Object Type"),(0,l.kt)("p",null,"Corresponding to the CSS element selector, the object type defines the type of object to style."),(0,l.kt)("p",null,"Specify the object type, then in curly braces, declare the style(s) to apply."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The object type corresponds to the JSON ",(0,l.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#type"}),"type")," property of form objects.")),(0,l.kt)("p",null,"In the following example, all objects of the ",(0,l.kt)("em",{parentName:"p"},"button")," type will display text in the Helvetica Neue font, with a size of 20 pixels:"),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),"button {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n")),(0,l.kt)("p",null,'To apply the same style to multiple types of objects, specify the object types separated by a "," then in curly braces, declare the style(s) to apply:'),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),"text, input {\n  text-align: left;\n  stroke: grey;\n}\n")),(0,l.kt)("h3",n({},{id:"object-name"}),"Object Name"),(0,l.kt)("p",null,"Corresponding to the CSS ",(0,l.kt)("strong",{parentName:"p"},"ID selector"),", the object name defines a specific object to style since the object's name is unique within the form."),(0,l.kt)("p",null,'Designate the object with a "#" character before the object\'s name, then in curly braces, declare the style(s) to apply.'),(0,l.kt)("p",null,'In the following example, the text of the object with the name "okButton" will be displayed in Helvetica Neue font, with a size of 20 pixels:'),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),"#okButton {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n")),(0,l.kt)("h3",n({},{id:"class"}),"Class"),(0,l.kt)("p",null,"Corresponding to the CSS ",(0,l.kt)("strong",{parentName:"p"},"class selector"),", the class defines the style for all form objects with the ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," attribute."),(0,l.kt)("p",null,'You can specify the classes to use with a "." character followed by the name of the class, and in curly braces, declare the style(s) to apply.'),(0,l.kt)("p",null,"In the following example, the text of all objects with the ",(0,l.kt)("inlineCode",{parentName:"p"},"okButtons")," class will be displayed in Helvetica Neue font, with a size of 20 pixels, aligned in the center:"),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),".okButtons {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n    text-align: center;\n}\n")),(0,l.kt)("p",null,'To designate that a style should be applied only to objects of a distinct type, specify the type followed by "." and the name of the class, then in curly braces, declare the style(s) to apply.'),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),"text.center {\n  text-align: center;\n  stroke: red;\n}\n")),(0,l.kt)("p",null,"In the 4D form description, you associate a class name to an object using the ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," attribute. This attribute contains one or several class names, separated by a space character:"),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),'class: "okButtons important"       \n')),(0,l.kt)("h3",n({},{id:"all-objects"}),"All Objects"),(0,l.kt)("p",null,"Corresponding to the CSS ",(0,l.kt)("strong",{parentName:"p"},"universal selector"),', the "*" character indicates that the following style will be applied to all objects on the form.'),(0,l.kt)("p",null,'Designate that a style should apply to all form objects with the "*" character, then in curly braces, declare the style(s) to apply.'),(0,l.kt)("p",null,"In the following example, all objects will have a gray fill:"),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),"* {\n  fill: gray;\n}\n")),(0,l.kt)("h3",n({},{id:"specific-attribute"}),"Specific Attribute"),(0,l.kt)("p",null,"Corresponding to the CSS ",(0,l.kt)("strong",{parentName:"p"},"attribute selectors"),", styles can be applied to all form objects with a specific attribute."),(0,l.kt)("p",null,"Specify the attribute within brackets, then in curly braces, declare the style(s) to apply."),(0,l.kt)("h4",n({},{id:"supported-syntaxes"}),"Supported syntaxes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",n({parentName:"tr"},{align:null}),"Syntax"),(0,l.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"[attribute]"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"matches objects with the ",(0,l.kt)("inlineCode",{parentName:"td"},"attribute"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),'[attribute="value"]'),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"matches objects with the ",(0,l.kt)("inlineCode",{parentName:"td"},"attribute"),' value containing exactly the specified "value"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),'[attribute~="value"]'),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"matches objects with the ",(0,l.kt)("inlineCode",{parentName:"td"},"attribute"),' value containing the "value" among a space-separated list of words')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"[attribute","|",'="value"]'),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"matches objects with an ",(0,l.kt)("inlineCode",{parentName:"td"},"attribute"),' whose value starts with "value"')))),(0,l.kt)("h4",n({},{id:"examples"}),"Examples"),(0,l.kt)("p",null,"All objects with the ",(0,l.kt)("inlineCode",{parentName:"p"},"borderStyle")," attribute will have purple lines:"),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),"[borderStyle]\n{\n     stroke: purple;\n}\n")),(0,l.kt)("p",null,'All objects of the text type with a text attribute whose value is "Hello" will have blue letters:'),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),"text[text=Hello]\n{\n     stroke: blue;\n}\n")),(0,l.kt)("p",null,'All objects with a text attribute whose value contains "Hello" will have blue lines:'),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),"[text~=Hello]\n{\n     stroke: blue;\n}\n\n")),(0,l.kt)("p",null,'All objects of the text type with a text attribute whose value starts with "Hello" will have yellow letters:'),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),"text[text|=Hello]\n{\n     stroke: yellow;\n}\n")),(0,l.kt)("h2",n({},{id:"style-sheet-declarations"}),"Style Sheet Declarations"),(0,l.kt)("p",null,"The majority of form object attributes can be defined within a style sheet, except the following attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"method"'),(0,l.kt)("li",{parentName:"ul"},'"type"'),(0,l.kt)("li",{parentName:"ul"},'"class"'),(0,l.kt)("li",{parentName:"ul"},'"event"'),(0,l.kt)("li",{parentName:"ul"},"choiceList, excludedList, labels, list, requiredList (list type)")),(0,l.kt)("p",null,"Form object attributes can be declared with their JSON name as CSS attributes (not including object types, methods, events, and lists). For more information, see the ",(0,l.kt)("strong",{parentName:"p"},"Dynamic Forms")," page in the Design Reference."),(0,l.kt)("h3",n({},{id:"attribute-mapping"}),"Attribute Mapping"),(0,l.kt)("p",null,"The attributes listed below are able to accept either the 4D name or the CSS name."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",n({parentName:"tr"},{align:null}),"4D"),(0,l.kt)("th",n({parentName:"tr"},{align:null}),"CSS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"borderStyle"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"border-style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"fill"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"background-color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"fontFamily"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"font-family")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"fontSize"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"font-size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"fontStyle"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"font-style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"fontWeight"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"font-weight")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"stroke"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"textAlign"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"text-align")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"textDecoration"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"text-decoration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),"verticalAlign"),(0,l.kt)("td",n({parentName:"tr"},{align:null}),"vertical-align")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"4D-specific values (",(0,l.kt)("em",{parentName:"p"},"e.g."),', "sunken") are not supported when using CSS attribute names.')),(0,l.kt)("h3",n({},{id:"specific-attribute-values"}),"Specific Attribute Values"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For ",(0,l.kt)("inlineCode",{parentName:"li"},"icon"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"picture"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"customBackgroundPicture")," attributes that support a path to an image, the syntax is:")),(0,l.kt)("pre",null,(0,l.kt)("code",n({parentName:"pre"},{}),'icon: url("/RESOURCES/Images/Buttons/edit.png"); /* absolute path */\nicon: url("edit.png"); /* relative path to the form file */\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For ",(0,l.kt)("inlineCode",{parentName:"p"},"fill"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stroke")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"alternateFill")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"horizontalLineStroke")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"verticalLineStroke"),", three syntaxes are supported:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"css color name: ",(0,l.kt)("inlineCode",{parentName:"li"},"fill: red;")),(0,l.kt)("li",{parentName:"ul"},"hexa value: ",(0,l.kt)("inlineCode",{parentName:"li"},"fill: #FF0000;")),(0,l.kt)("li",{parentName:"ul"},"the ",(0,l.kt)("inlineCode",{parentName:"li"},"rgb()")," function: ",(0,l.kt)("inlineCode",{parentName:"li"},"fill:rgb(255,0,0)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If a string uses forbidden characters in CSS, you can surround the string with simple or double quotes. For example:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a xliff reference: ",(0,l.kt)("inlineCode",{parentName:"li"},'tooltip: ":xliff:CommonMenuFile";')),(0,l.kt)("li",{parentName:"ul"},"a datasource with a field expression: ",(0,l.kt)("inlineCode",{parentName:"li"},'dataSource: "[Table_1:1]ID:1";'))))),(0,l.kt)("h2",n({},{id:"priority-order"}),"Priority Order"),(0,l.kt)("p",null,"4D projects prioritizes conflicting style definitions first by the form definition, then by the style sheets."),(0,l.kt)("h3",n({},{id:"json-vs-style-sheet"}),"JSON vs Style Sheet"),(0,l.kt)("p",null,"If an attribute is defined in the JSON form description and a style sheet, 4D will use the value in the JSON file."),(0,l.kt)("p",null,"To override this behavior, the style value must be followed with an ",(0,l.kt)("inlineCode",{parentName:"p"},"!important")," declaration."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",n({parentName:"tr"},{align:null}),"JSON form description"),(0,l.kt)("th",n({parentName:"tr"},{align:null}),"Style Sheet"),(0,l.kt)("th",n({parentName:"tr"},{align:null}),"4D displays"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},'"text": "Button",')),(0,l.kt)("td",n({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"text: Edit;")),(0,l.kt)("td",n({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},'"Button"'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",n({parentName:"tr"},{align:null}),"JSON form description"),(0,l.kt)("th",n({parentName:"tr"},{align:null}),"Style Sheet"),(0,l.kt)("th",n({parentName:"tr"},{align:null}),"4D displays"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",n({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},'"text": "Button",')),(0,l.kt)("td",n({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"text: Edit !important;")),(0,l.kt)("td",n({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},'"Edit"'))))),(0,l.kt)("h3",n({},{id:"multiple-style-sheets"}),"Multiple Style Sheets"),(0,l.kt)("p",null,"At runtime, 4D automatically prioritizes style sheets in the following order:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The 4D form will first load the default CSS file ",(0,l.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets.css"),"."),(0,l.kt)("li",{parentName:"ol"},"It will then load the CSS file for the current platform ",(0,l.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets_mac.css")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets_windows.css"),"."),(0,l.kt)("li",{parentName:"ol"},"If it exists, it will then load a specific CSS file defined in the JSON form:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"a file for both platforms:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",n({parentName:"pre"},{}),'"css": "<path>"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"or a list of files for both platforms:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",n({parentName:"pre"},{}),'"css": [\n     "<path1>",\n     "<path2>"\n      ],\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"or a list of files per platform:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",n({parentName:"pre"},{}),' "css": [\n        {"path": "<path>", "media": "mac"},\n        {"path": "<path>", "media": "windows"},\n    ],\n')))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filepaths can be relative or absolute."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Relative paths are resolved relative to the JSON form description file."),(0,l.kt)("li",{parentName:"ul"},"For security reasons, only filesystem paths are accepted for absolute paths. (",(0,l.kt)("em",{parentName:"li"},"e.g."),', "/RESOURCES", "/DATA")'))),(0,l.kt)("h2",n({},{id:"creating-or-editing-style-sheets"}),"Creating or Editing Style Sheets"),(0,l.kt)("p",null,'You can create style sheets using your preferred text editor and saving the file with a ".css" extension in the project\'s "/SOURCES" folder.'),(0,l.kt)("p",null,"The 4D Tool Box provides a ",(0,l.kt)("strong",{parentName:"p"},"Style Sheets")," page as a shortcut option to create and edit one of three platform-specific named style sheets."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open the ",(0,l.kt)("strong",{parentName:"p"},"Style Sheets")," page by choosing the ",(0,l.kt)("strong",{parentName:"p"},"Tool Box > Style Sheet")," from the Design menu or click on the ",(0,l.kt)("strong",{parentName:"p"},"Tool Box")," icon in the Form Editor toolbar."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(86870).Z,width:"787",height:"582"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the type of style sheet to create and click on the ",(0,l.kt)("strong",{parentName:"p"},"Create")," or ",(0,l.kt)("strong",{parentName:"p"},"Edit")," button: ",(0,l.kt)("img",{src:a(91369).Z,width:"116",height:"23"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The style sheet will open in your default text editor."))))}d.isMDXComponent=!0},91369:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAXCAIAAABVmPyEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEFSURBVGhD7ZbBDYMwDEXZiW0ySW+swipM0XMnoTF17IBDpVYYI/SffIjj30MfFm03AzdIbvd4olwKch1L5L7AcUCuI5DrSKzcaeg7ph8mvrwPcXIXsWnkLreDnH9gTBd+LFFySa2a/R/Itey6JVkplZ3W1waH85ihC+14bvKxxMltLxz5KpNqK8e0jsuoynzLxxAnt71clSBdw4VPPM8ZI7eZDyVI7q7djax1RG/yqSn3AkYrouTyDqoM/rdQyVoS0hAyJI9Grs2Lbns4hTi5GfqqBbZSy1oHyEnp6TdPP0B8jG3yotIeTiFU7t2BXEcg1xHIdWQrF3V8Qa5jZbnACch1Y57fiJdV2WNWgUcAAAAASUVORK5CYII="},86870:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/stylesheets-566a8cb29cc275a6544f20ce64e0118e.png"}}]);