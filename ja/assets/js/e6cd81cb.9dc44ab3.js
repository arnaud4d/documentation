"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=s(n),u=r,h=k["".concat(p,".").concat(u)]||k[u]||m[u]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},62526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"FileHandleClass",title:"FileHandle"},o=void 0,p={unversionedId:"API/FileHandleClass",id:"API/FileHandleClass",title:"FileHandle",description:"The FileHandle class has functions that allow you to sequentially read from or append contents to an opened File object. A file handle can access any part of a document.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/API/FileHandleClass.md",sourceDirName:"API",slug:"/API/FileHandleClass",permalink:"/docs/ja/next/API/FileHandleClass",draft:!1,tags:[],version:"current",frontMatter:{id:"FileHandleClass",title:"FileHandle"},sidebar:"docs",previous:{title:"File",permalink:"/docs/ja/next/API/FileClass"},next:{title:"Folder",permalink:"/docs/ja/next/API/FolderClass"}},s={},d=[{value:"Example",id:"example",level:3},{value:"FileHandle object",id:"filehandle-object",level:3},{value:".breakModeRead",id:"breakmoderead",level:2},{value:"Description",id:"description",level:4},{value:".breakModeWrite",id:"breakmodewrite",level:2},{value:"Description",id:"description-1",level:4},{value:".charset",id:"charset",level:2},{value:"Description",id:"description-2",level:4},{value:".eof",id:"eof",level:2},{value:"Description",id:"description-3",level:4},{value:".getSize()",id:"getsize",level:2},{value:"Description",id:"description-4",level:4},{value:"See also",id:"see-also",level:4},{value:".mode",id:"mode",level:2},{value:"Description",id:"description-5",level:4},{value:".offset",id:"offset",level:2},{value:"Description",id:"description-6",level:4},{value:".readBlob()",id:"readblob",level:2},{value:"Description",id:"description-7",level:4},{value:"See also",id:"see-also-1",level:4},{value:".readLine()",id:"readline",level:2},{value:"Description",id:"description-8",level:4},{value:"See also",id:"see-also-2",level:4},{value:".readText()",id:"readtext",level:2},{value:"Description",id:"description-9",level:4},{value:"See also",id:"see-also-3",level:4},{value:".setSize()",id:"setsize",level:2},{value:"Description",id:"description-10",level:4},{value:"See also",id:"see-also-4",level:4},{value:".writeBlob()",id:"writeblob",level:2},{value:"Description",id:"description-11",level:4},{value:"See also",id:"see-also-5",level:4},{value:".writeLine()",id:"writeline",level:2},{value:"Description",id:"description-12",level:4},{value:"See also",id:"see-also-6",level:4},{value:".writeText()",id:"writetext",level:2},{value:"Description",id:"description-13",level:4},{value:"See also",id:"see-also-7",level:4}],m={toc:d};function k(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FileHandle")," class has functions that allow you to sequentially read from or append contents to an opened ",(0,a.kt)("a",r({parentName:"p"},{href:"FileClass"}),(0,a.kt)("inlineCode",{parentName:"a"},"File"))," object. A file handle can access any part of a document."),(0,a.kt)("p",null,"File handle objects are created with the ",(0,a.kt)("a",r({parentName:"p"},{href:"FileClass#open"}),(0,a.kt)("inlineCode",{parentName:"a"},"file.open()"))," function."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To read or write a whole document at once, you might consider using the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/next/API/FileClass#gettext"}),"file.getText()")," and ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/next/API/FileClass#settext"}),"file.setText()")," functions.")),(0,a.kt)("p",null,"Thanks to the standard 4D object ",(0,a.kt)("em",{parentName:"p"},"refcounting"),", a file handle is automatically deleted when it is no longer referenced and thus, the requested ",(0,a.kt)("a",r({parentName:"p"},{href:"FileClass"}),(0,a.kt)("inlineCode",{parentName:"a"},"File"))," object is automatically closed. Consequently, with file handles you don't need to worry about closing documents."),(0,a.kt)("h3",r({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-code4d"}),'var $f : 4D.File\nvar $fhandle : 4D.FileHandle\n$f:=Folder(Database folder).file("example.txt")\n\n//Writing line by line from the start\n$fhandle:=$f.open("write")\n$text:="Hello World"\nFor ($line; 1; 4)\n    $fhandle.writeLine($text+String($line))\nEnd for\n\n//Writing line by line from the end\n$fhandle:=$f.open("append")\n$text:="Hello New World!"\nFor ($line; 1; 4)\n    $fhandle.writeLine($text+String($line))\nEnd for\n\n//Reading using a stop character and an object parameter\n$o:=New object()\n$o.mode:="read"\n$o.charset:="UTF-8"\n$o.breakModeRead:=Document with CRLF\n$stopChar:="!"\n$fhandle:=$f.open($o)\n$text:=$fhandle.readText($stopChar)\n\n//Reading line by line\n$lines:=New collection\n$fhandle:=$f.open("read")\nWhile (Not($fhandle.eof))\n    $lines.push($fhandle.readLine())\nEnd while\n\n')),(0,a.kt)("h3",r({},{id:"filehandle-object"}),"FileHandle object"),(0,a.kt)("p",null,"File handle objects cannot be shared."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}))))),(0,a.kt)("p",null,"| ",(0,a.kt)("a",r({parentName:"p"},{href:"#breakmoderead"}),(0,a.kt)("strong",{parentName:"a"},".breakModeRead")," : Text"),"\xa0","\xa0","\xa0","\xa0","the processing mode for line breaks used when reading the file|\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#breakmodewrite"}),(0,a.kt)("strong",{parentName:"a"},".breakModeWrite")," : Text"),"\xa0","\xa0","\xa0","\xa0","the processing mode for line breaks used when writing to the file|\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#charset"}),(0,a.kt)("strong",{parentName:"a"},".charset")," : Text"),"\xa0","\xa0","\xa0","\xa0","the charset used when reading from or writing to the file|\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#eof"}),(0,a.kt)("strong",{parentName:"a"},".eof")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","True is the ",(0,a.kt)("inlineCode",{parentName:"p"},"offset")," has reached the end of the file, and False otherwise|\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#getsize"}),(0,a.kt)("strong",{parentName:"a"},".getSize()")," : Real "),"\xa0","\xa0","\xa0","\xa0","returns the current size of the document, expressed in bytes|\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#mode"}),(0,a.kt)("strong",{parentName:"a"},".mode")," : Text"),"\xa0","\xa0","\xa0","\xa0",'the mode in which the file handle was created: "read", "write", or "append"|\n| ',(0,a.kt)("a",r({parentName:"p"},{href:"#offset"}),(0,a.kt)("strong",{parentName:"a"},".offset")," : Real"),"\xa0","\xa0","\xa0","\xa0","the current offset of the data stream (position inside the document)|\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#readblob"}),(0,a.kt)("strong",{parentName:"a"},".readBlob"),"( ",(0,a.kt)("em",{parentName:"a"},"bytes")," : Real ) : [4D.Blob](BlobClass) "),"\xa0","\xa0","\xa0","\xa0","returns a blob a ",(0,a.kt)("em",{parentName:"p"},"bytes")," size from the file, starting from the current position |\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#readline"}),(0,a.kt)("strong",{parentName:"a"},".readLine()")," : Text "),"\xa0","\xa0","\xa0","\xa0","returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached|\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#readtext"}),(0,a.kt)("strong",{parentName:"a"},".readText"),"( { ",(0,a.kt)("em",{parentName:"a"},"stopChar")," : Text } ) : Text "),"\xa0","\xa0","\xa0","\xa0","returns text from the file, starting from the current position until the first ",(0,a.kt)("em",{parentName:"p"},"stopChar")," string is encountered (if passed) or the end of file is reached|\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#setsize"}),(0,a.kt)("strong",{parentName:"a"},".setSize"),"( ",(0,a.kt)("em",{parentName:"a"},"size")," : Real )"),"\xa0","\xa0","\xa0","\xa0","sets a new ",(0,a.kt)("em",{parentName:"p"},"size")," in bytes for the document|\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#writeblob"}),(0,a.kt)("strong",{parentName:"a"},".writeBlob"),"( ",(0,a.kt)("em",{parentName:"a"},"blob")," : 4D.Blob ) "),"\xa0","\xa0","\xa0","\xa0","writes ",(0,a.kt)("em",{parentName:"p"},"blob")," into the file, starting from the current position |\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#writeline"}),(0,a.kt)("strong",{parentName:"a"},".writeLine"),"( ",(0,a.kt)("em",{parentName:"a"},"lineOfText")," : Text ) "),"\xa0","\xa0","\xa0","\xa0","writes ",(0,a.kt)("em",{parentName:"p"},"lineOfText")," content at the current position and inserts an end-of-line delimiter|\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#writetext"}),(0,a.kt)("strong",{parentName:"a"},".writeText"),"( ",(0,a.kt)("em",{parentName:"a"},"textToWrite")," : Text )"),"\xa0","\xa0","\xa0","\xa0","writes ",(0,a.kt)("em",{parentName:"p"},"textToWrite")," content at the current position and does not insert a final end-of-line delimiter|"),(0,a.kt)("h2",r({},{id:"breakmoderead"}),".breakModeRead"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".breakModeRead")," : Text"),(0,a.kt)("h4",r({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".breakModeRead")," property returns the processing mode for line breaks used when reading the file."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".breakModeRead")," property can be defined at the handle creation with the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/next/API/FileClass#open"}),(0,a.kt)("inlineCode",{parentName:"a"},"file.open()"))," function (see ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/next/API/FileClass#open"}),"the ",(0,a.kt)("inlineCode",{parentName:"a"},".open()")," function"),' for more information). Default is "native".'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},".breakModeRead")," property always contains a text value, even if the ",(0,a.kt)("inlineCode",{parentName:"p"},".open()")," option was set using a number (constant).")),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"breakmodewrite"}),".breakModeWrite"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".breakModeWrite")," : Text"),(0,a.kt)("h4",r({},{id:"description-1"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".breakModeWrite")," property returns the processing mode for line breaks used when writing to the file."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".breakModeWrite")," property can be defined at the handle creation with the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/next/API/FileClass#open"}),(0,a.kt)("inlineCode",{parentName:"a"},"file.open()"))," function (see ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/next/API/FileClass#open"}),"the ",(0,a.kt)("inlineCode",{parentName:"a"},".open()")," function"),' for more information). Default is "native".'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},".breakModeWrite")," property always contains a text value, even if the ",(0,a.kt)("inlineCode",{parentName:"p"},".open()")," option was set using a number (constant).")),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"charset"}),".charset"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".charset")," : Text"),(0,a.kt)("h4",r({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".charset")," property returns the charset used when reading from or writing to the file."),(0,a.kt)("p",null,"The charset can be defined at the handle creation with the ",(0,a.kt)("a",r({parentName:"p"},{href:"FileClass#open"}),(0,a.kt)("inlineCode",{parentName:"a"},"file.open()")),' function. Default is "UTF-8".'),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"eof"}),".eof"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".eof")," : Boolean"),(0,a.kt)("h4",r({},{id:"description-3"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".eof")," property returns True is the ",(0,a.kt)("inlineCode",{parentName:"p"},"offset")," has reached the end of the file, and False otherwise."),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"getsize"}),".getSize()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".getSize()")," : Real "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Size of the document in bytes")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description-4"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".getSize()")," function returns the current size of the document, expressed in bytes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This function returns the same value as the (",(0,a.kt)("a",r({parentName:"p"},{href:"FileClass#size"}),".size"),") property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," class.")),(0,a.kt)("h4",r({},{id:"see-also"}),"See also"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"#setsize"}),".setSize()"),", ",(0,a.kt)("a",r({parentName:"p"},{href:"FileClass#size"}),"file.size")),(0,a.kt)("h2",r({},{id:"mode"}),".mode"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".mode")," : Text"),(0,a.kt)("h4",r({},{id:"description-5"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".mode"),' property returns the mode in which the file handle was created: "read", "write", or "append".'),(0,a.kt)("p",null,"The mode can be defined at the handle creation with the ",(0,a.kt)("a",r({parentName:"p"},{href:"FileClass#open"}),(0,a.kt)("inlineCode",{parentName:"a"},"file.open()")),' function. Default is "read".'),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read-only"),"."),(0,a.kt)("h2",r({},{id:"offset"}),".offset"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".offset")," : Real"),(0,a.kt)("h4",r({},{id:"description-6"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".offset")," property returns the current offset of the data stream (position inside the document). The offset value is automatically updated after read and write operations."),(0,a.kt)("p",null,"Setting the ",(0,a.kt)("inlineCode",{parentName:"p"},".offset")," will change its current value."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the passed value is negative, the ",(0,a.kt)("inlineCode",{parentName:"li"},".offset")," is set to the start of the file (zero)."),(0,a.kt)("li",{parentName:"ul"},"If the passed value is higher than the size of the file,  the ",(0,a.kt)("inlineCode",{parentName:"li"},".offset")," is set to the end of the file (size of file).")),(0,a.kt)("p",null,"This property is ",(0,a.kt)("strong",{parentName:"p"},"read/write"),"."),(0,a.kt)("h2",r({},{id:"readblob"}),".readBlob()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".readBlob"),"( ",(0,a.kt)("em",{parentName:"p"},"bytes")," : Real ) : ",(0,a.kt)("a",r({parentName:"p"},{href:"BlobClass"}),"4D.Blob"),"\n| Parameter | Type                 |    | Description                                         |\n| --------- | -------------------- | -- | --------------------------------------------------- |\n| ",(0,a.kt)("em",{parentName:"p"},"bytes"),"   | Real                 | -> | Number of bytes to be read                          |\n| Result    | ",(0,a.kt)("a",r({parentName:"p"},{href:"BlobClass"}),"4D.Blob")," | <- | Bytes read from the file|\n|"),(0,a.kt)("h4",r({},{id:"description-7"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".readBlob()")," function returns a blob a ",(0,a.kt)("em",{parentName:"p"},"bytes")," size from the file, starting from the current position ."),(0,a.kt)("p",null,"When this function is executed, the current position (",(0,a.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is updated after the last byte read."),(0,a.kt)("h4",r({},{id:"see-also-1"}),"See also"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"#writeblob"}),".writeBlob()")),(0,a.kt)("h2",r({},{id:"readline"}),".readLine()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".readLine()")," : Text\n| Parameter | Type |    | Description                             |\n| --------- | ---- | -- | --------------------------------------- |\n| Result    | Text | <- | Line of text|\n|"),(0,a.kt)("h4",r({},{id:"description-8"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".readLine()")," function returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached."),(0,a.kt)("p",null,"When this function is executed, the current position (",(0,a.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is updated."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.")),(0,a.kt)("h4",r({},{id:"see-also-2"}),"See also"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"#readtext"}),".readText()"),", ",(0,a.kt)("a",r({parentName:"p"},{href:"#writeline"}),".writeLine()")),(0,a.kt)("h2",r({},{id:"readtext"}),".readText()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".readText"),"( { ",(0,a.kt)("em",{parentName:"p"},"stopChar")," : Text } ) : Text\n| Parameter  | Type |    | Description                                   |\n| ---------- | ---- | -- | --------------------------------------------- |\n| ",(0,a.kt)("em",{parentName:"p"},"stopChar")," | Text | -> | Character(s) at which to stop reading         |\n| Result     | Text | <- | Text from the file|\n|"),(0,a.kt)("h4",r({},{id:"description-9"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".readText()")," function returns text from the file, starting from the current position until the first ",(0,a.kt)("em",{parentName:"p"},"stopChar")," string is encountered (if passed) or the end of file is reached."),(0,a.kt)("p",null,"This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/next/API/FileClass#open"}),"opening the file handle")," by setting the ",(0,a.kt)("a",r({parentName:"p"},{href:"#breakmoderead"}),(0,a.kt)("inlineCode",{parentName:"a"},".breakModeRead"))," property."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"stopChar")," character string is not included in the returned text. If you omit the ",(0,a.kt)("em",{parentName:"p"},"stopChar")," parameter, the whole document text is returned."),(0,a.kt)("p",null,"When this function is executed, the (",(0,a.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is placed just after the ",(0,a.kt)("em",{parentName:"p"},"stopChar")," string."),(0,a.kt)("p",null,"If the ",(0,a.kt)("em",{parentName:"p"},"stopChar")," parameter is passed and not found, ",(0,a.kt)("inlineCode",{parentName:"p"},".readText()")," returns an empty string and the ",(0,a.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset")," is left untouched."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.")),(0,a.kt)("h4",r({},{id:"see-also-3"}),"See also"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"#readline"}),".readLine()"),", ",(0,a.kt)("a",r({parentName:"p"},{href:"#writetext"}),".writeText()")),(0,a.kt)("h2",r({},{id:"setsize"}),".setSize()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".setSize"),"( ",(0,a.kt)("em",{parentName:"p"},"size")," : Real )\n| Parameter | Type |    | Description                                                  |\n| --------- | ---- | -- | ------------------------------------------------------------ |\n| size      | Real | -> | New size of the document in bytes|\n|"),(0,a.kt)("h4",r({},{id:"description-10"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".setSize()")," function sets a new ",(0,a.kt)("em",{parentName:"p"},"size")," in bytes for the document."),(0,a.kt)("p",null,"If the ",(0,a.kt)("em",{parentName:"p"},"size")," value is less than the current document size, the document content is truncated from the beginning to get the new ",(0,a.kt)("em",{parentName:"p"},"size")," ."),(0,a.kt)("h4",r({},{id:"see-also-4"}),"See also"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"#getsize"}),".getSize()"),", ",(0,a.kt)("a",r({parentName:"p"},{href:"FileClass#size"}),"file.size")),(0,a.kt)("h2",r({},{id:"writeblob"}),".writeBlob()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".writeBlob"),"( ",(0,a.kt)("em",{parentName:"p"},"blob")," : 4D.Blob )\n| Parameter | Type                 |    | Description                                          |\n| --------- | -------------------- | -- | ---------------------------------------------------- |\n| ",(0,a.kt)("em",{parentName:"p"},"blob"),"    | ",(0,a.kt)("a",r({parentName:"p"},{href:"BlobClass"}),"4D.Blob")," | -> | Blob to write in the file|\n|"),(0,a.kt)("h4",r({},{id:"description-11"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".writeBlob()")," function writes ",(0,a.kt)("em",{parentName:"p"},"blob")," into the file, starting from the current position ."),(0,a.kt)("p",null,"When this function is executed, the current position (",(0,a.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is updated after the last byte written."),(0,a.kt)("h4",r({},{id:"see-also-5"}),"See also"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"#readblob"}),".readBlob()")),(0,a.kt)("h2",r({},{id:"writeline"}),".writeLine()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".writeLine"),"( ",(0,a.kt)("em",{parentName:"p"},"lineOfText")," : Text )\n| Parameter    | Type |    | Description                              |\n| ------------ | ---- | -- | ---------------------------------------- |\n| ",(0,a.kt)("em",{parentName:"p"},"lineOfText")," | Text | -> | Text to write|\n|"),(0,a.kt)("h4",r({},{id:"description-12"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".writeLine()")," function writes ",(0,a.kt)("em",{parentName:"p"},"lineOfText")," content at the current position and inserts an end-of-line delimiter (unlike the ",(0,a.kt)("a",r({parentName:"p"},{href:"#writetext"}),".writeText()")," function). By default, a native end-of-line delimiter is used, but you can define another delimiter when ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/next/API/FileClass#open"}),"opening the file handle")," by setting the ",(0,a.kt)("a",r({parentName:"p"},{href:"#breakmodewrite"}),(0,a.kt)("inlineCode",{parentName:"a"},".breakModeWrite"))," property."),(0,a.kt)("p",null,"When this function is executed, the current position (",(0,a.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is updated after the end-of-line delimiter."),(0,a.kt)("h4",r({},{id:"see-also-6"}),"See also"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"#breakmodewrite"}),".breakModeWrite"),", ",(0,a.kt)("a",r({parentName:"p"},{href:"#readline"}),".readLine()"),", ",(0,a.kt)("a",r({parentName:"p"},{href:"#writetext"}),".writeText()")),(0,a.kt)("h2",r({},{id:"writetext"}),".writeText()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".writeText"),"( ",(0,a.kt)("em",{parentName:"p"},"textToWrite")," : Text )\n| Parameter     | Type |    | Description                              |\n| ------------- | ---- | -- | ---------------------------------------- |\n| ",(0,a.kt)("em",{parentName:"p"},"textToWrite")," | Text | -> | Text to write|\n|"),(0,a.kt)("h4",r({},{id:"description-13"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".writeText()")," function writes ",(0,a.kt)("em",{parentName:"p"},"textToWrite")," content at the current position and does not insert a final end-of-line delimiter (unlike the ",(0,a.kt)("a",r({parentName:"p"},{href:"#writeline"}),".writeLine()")," function). This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/next/API/FileClass#open"}),"opening the file handle")," by setting the ",(0,a.kt)("a",r({parentName:"p"},{href:"#breakmodewrite"}),(0,a.kt)("inlineCode",{parentName:"a"},".breakModeWrite"))," property."),(0,a.kt)("p",null,"When this function is executed, the current position (",(0,a.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is updated after the next end-of-line delimiter."),(0,a.kt)("h4",r({},{id:"see-also-7"}),"See also"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"#breakmodewrite"}),".breakModeWrite"),", ",(0,a.kt)("a",r({parentName:"p"},{href:"#readtext"}),".readText()"),", ",(0,a.kt)("a",r({parentName:"p"},{href:"#writeline"}),".writeLine()")))}k.isMDXComponent=!0}}]);