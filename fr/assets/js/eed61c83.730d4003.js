"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42260],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),k=n,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return a?r.createElement(u,i(i({ref:t},d),{},{components:a})):r.createElement(u,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13434:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>g,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&d(e,a,t[a]);return e};const m={id:"ZipArchiveClass",title:"ZIPArchive"},k=void 0,u={unversionedId:"API/ZipArchiveClass",id:"version-19-R6/API/ZipArchiveClass",title:"ZIPArchive",description:'A 4D ZIP archive is a File or Folder object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save disk space or transfer files via mediums which may have size limitations (e.g., email or network).',source:"@site/versioned_docs/version-19-R6/API/ZipArchiveClass.md",sourceDirName:"API",slug:"/API/ZipArchiveClass",permalink:"/docs/fr/API/ZipArchiveClass",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"ZipArchiveClass",title:"ZIPArchive"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/fr/API/WebServerClass"},next:{title:"ZIPFile",permalink:"/docs/fr/API/ZipFileClass"}},h={},f=[{value:"Example",id:"example",level:3},{value:"Summary",id:"summary",level:3},{value:"ZIP Create archive",id:"zip-create-archive",level:2},{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"ZIP Read archive",id:"zip-read-archive",level:2},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-6",level:4},{value:".root",id:"root",level:2},{value:"Description",id:"description-2",level:4}],N={toc:f};function g(e){var t,a=e,{components:n}=a,d=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=c(c({},N),d),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A 4D ZIP archive is a ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Folder"),' object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save disk space or transfer files via mediums which may have size limitations (e.g., email or network).'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You create a 4D ZIP archive with the ",(0,r.kt)("a",c({parentName:"li"},{href:"#zip-create-archive"}),"ZIP Create archive")," command."),(0,r.kt)("li",{parentName:"ul"},"4D ",(0,r.kt)("a",c({parentName:"li"},{href:"/docs/fr/API/ZipFileClass"}),(0,r.kt)("inlineCode",{parentName:"a"},"ZIPFile"))," and ",(0,r.kt)("a",c({parentName:"li"},{href:"/docs/fr/API/ZipFolderClass"}),(0,r.kt)("inlineCode",{parentName:"a"},"ZIPFolder"))," instances are available through the ",(0,r.kt)("a",c({parentName:"li"},{href:"#root"}),(0,r.kt)("inlineCode",{parentName:"a"},"root"))," property (",(0,r.kt)("inlineCode",{parentName:"li"},"ZIPFolder"),") of the object returned by ",(0,r.kt)("a",c({parentName:"li"},{href:"#zip-read-archive"}),"ZIP Read archive")," command.")),(0,r.kt)("h3",c({},{id:"example"}),"Example"),(0,r.kt)("p",null,"To retrieve and view the contents of a ZIP file object:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'var $path; $archive : 4D.File\nvar $zipFile : 4D.ZipFile\nvar $zipFolder : 4D.ZipFolder\nvar $txt : Text\n\n$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n$archive:=ZIP Read archive($path)\n$zipFolder:=$archive.root // store the zip main folder\n$zipFile:=$zipFolder.files()[0] //read the first zipped file\n\nIf($zipFile.extension=".txt")\n $txt:=$zipFile.getText()\nEnd if\n')),(0,r.kt)("h3",c({},{id:"summary"}),"Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"#root"})),"\xa0","\xa0","\xa0","\xa0")))),(0,r.kt)("h2",c({},{id:"zip-create-archive"}),"ZIP Create archive"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Version"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"v19 R3"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Added ",(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression xy"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".level")," property")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"v18"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Added"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,r.kt)("em",{parentName:"p"},"fileToZip")," : 4D.File ; ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : Object",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,r.kt)("em",{parentName:"p"},"folderToZip")," : 4D.Folder ; ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File { ; ",(0,r.kt)("em",{parentName:"p"},"options")," : Integer }) : Object",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,r.kt)("em",{parentName:"p"},"zipStructure")," : Object ; ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"})),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"fileToZip"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"4D.File"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"File or Folder object to compress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"folderToZip"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"4D.Folder"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"File or Folder object to compress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"zipStructure"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"File or Folder object to compress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"destinationFile"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"4D.File"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Destination file for the archive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"options"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"folderToZip")," option: ",(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Without enclosing folder"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"<-"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Status object")))),(0,r.kt)("h4",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," command ","creates a compressed ZIP archive object and returns the status of the operation","."),(0,r.kt)("p",null,"You can pass a 4D.File, a 4D.Folder, or a zip structure object as first parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"fileToZip"),": You simply pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File")," to compress.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"folderToZip"),": You pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Folder")," to compress. In this case, the ",(0,r.kt)("em",{parentName:"p"},"options")," parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Without enclosing folder")," constant in the ",(0,r.kt)("em",{parentName:"p"},"options")," parameter.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"zipStructure"),": You pass an object describing the ZIP archive object. The following properties are available to define the structure:"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"compression"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": Deflate compression (default)"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": LZMA compression"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": XZ compression"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression none"),": No compression"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"level"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Compression level. Possible values: 1 to 10. A lower value will produce a larger file, while a higher value will produce a smaller file. Compression level has however an impact on performance. Default values if omitted: ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": 6"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": 4"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": 4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"encryption"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The encryption to use if a password is set:",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES128"),": AES encryption using 128-bit key."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES192"),": AES encryption using 192-bit key."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES256"),": AES encryption using 256-bit key (default if password is set)."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption none"),": Data is not encrypted (default if no password is set)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"password"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A password to use if encryption is required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"files"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("li",null,"a collection of ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.File")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.Folder")," objects or"),(0,r.kt)("li",null,"a collection of objects with the following properties:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Property"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"source"),(0,r.kt)("td",null,"4D.File or 4D.Folder"),(0,r.kt)("td",null,"File or Folder")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"destination"),(0,r.kt)("td",null,"Text"),(0,r.kt)("td",null,"(optional) - Specify a relative filepath to change the organization of the contents of the archive")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"(optional) - ",(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Ignore invisible files")," or 0 to compress all of the file"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"callback"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"4D.Function"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A callback formula that will receive the compression progress (0 - 100) in $1.")))),(0,r.kt)("p",null,"In the ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," parameter, pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File"),' object describing the ZIP archive to create (name, location, etc.). It is advised to use the ".zip" extension if you want the ZIP archive to be processed automatically by any software.'),(0,r.kt)("p",null,"Once an archive is created, you can use the ",(0,r.kt)("a",c({parentName:"p"},{href:"#zip-read-archive"}),"ZIP Read archive")," command to access it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Status object")),(0,r.kt)("p",null,"The returned status object contains the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"statusText"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Error message (if any):",(0,r.kt)("li",null,"Cannot open ZIP archive"),(0,r.kt)("li",null,"Cannot create ZIP archive"),(0,r.kt)("li",null,"Password is required for encryption"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"status"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Status code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"True if archive created successfully, else false")))),(0,r.kt)("h4",c({},{id:"example-1"}),"Example 1"),(0,r.kt)("p",null,"To compress a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n')),(0,r.kt)("h4",c({},{id:"example-2"}),"Example 2"),(0,r.kt)("p",null,"To compress a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Folder")," without the folder itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n')),(0,r.kt)("h4",c({},{id:"example-3"}),"Example 3"),(0,r.kt)("p",null,"To compress a ZIP archive structure with a password and progress bar:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //we use the 4D Progress component\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"myFormulaCompressingMethod"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"})," var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n")),(0,r.kt)("h4",c({},{id:"example-4"}),"Example 4"),(0,r.kt)("p",null,"You want to pass a collection of folders and files to compress to the ",(0,r.kt)("em",{parentName:"p"},"zipStructure")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n')),(0,r.kt)("h4",c({},{id:"example-5"}),"Example 5"),(0,r.kt)("p",null,"You want to use an alternative compression algorithm with a high compression level:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'var $destination : 4D.File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 //default is 4\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n')),(0,r.kt)("h2",c({},{id:"zip-read-archive"}),"ZIP Read archive"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Version"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"v18"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Added"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZIP Read archive")," ( ",(0,r.kt)("em",{parentName:"p"},"zipFile")," : 4D.File { ; ",(0,r.kt)("em",{parentName:"p"},"password")," : Text }) : 4D.ZipArchive"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"})),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"zipFile"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"4D.File"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Zip archive file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"password"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ZIP archive password if any")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"4D.ZipArchive"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"<-"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Archive object")))),(0,r.kt)("h4",c({},{id:"description-1"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Read archive")," command ","retrieves the contents of ",(0,r.kt)("em",{parentName:"p"},"zipFile")," and returns it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive")," object","."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use methods such as ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/fr/API/Document#copyto"}),"file.copyTo()")," or ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/fr/API/Directory#copyto"}),"folder.copyTo()"),".")),(0,r.kt)("p",null,"Pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File")," object referencing the compressed ZIP archive in the ",(0,r.kt)("em",{parentName:"p"},"zipFile")," parameter. The target archive file will be opened until the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Read archive")," has finished executing and all contents/references have been extracted/released, then it will be closed automatically."),(0,r.kt)("p",null,"If the ",(0,r.kt)("em",{parentName:"p"},"zipFile")," is password protected, you need to use the optional ",(0,r.kt)("em",{parentName:"p"},"password")," parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Archive object")),(0,r.kt)("p",null,"The returned ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive")," object contains a single ",(0,r.kt)("a",c({parentName:"p"},{href:"#root"}),(0,r.kt)("inlineCode",{parentName:"a"},"root"))," property whose value is a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.ZipFolder")," object. This folder describes the whole contents of the ZIP archive."),(0,r.kt)("h4",c({},{id:"example-6"}),"Example"),(0,r.kt)("p",null,"To retrieve and view the contents of a ZIP file object:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n')),(0,r.kt)("p",null,"To retrieve the list of the files and folders in the archive:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"})," $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n")),(0,r.kt)("p",null,"To read the contents of a file without extracting it from the root folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n')),(0,r.kt)("p",null,"To extract from the root folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'  //extract a file\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  //extract all files\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n')),(0,r.kt)("h2",c({},{id:"root"}),".root"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".root")," : 4D.ZipFolder"),(0,r.kt)("h4",c({},{id:"description-2"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".root")," property contains ","a virtual folder providing access to the contents of the ZIP archive","."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," folder and its contents can be manipulated with the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/fr/API/ZipFileClass"}),"ZipFile")," and ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/fr/API/ZipFolderClass"}),"ZipFolder")," functions and properties."),(0,r.kt)("p",null,"This property is ",(0,r.kt)("strong",{parentName:"p"},"read-only"),"."))}g.isMDXComponent=!0}}]);