"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8438],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=o(a),h=r,k=c["".concat(m,".").concat(h)]||c[h]||s[h]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50248:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"MailAttachmentClass",title:"MailAttachment"},m=void 0,o={unversionedId:"API/MailAttachmentClass",id:"version-19/API/MailAttachmentClass",title:"MailAttachment",description:"Attachment objects allow referencing files within a Email object. Attachment objects are created using the MAIL New attachment command.",source:"@site/versioned_docs/version-19/API/MailAttachmentClass.md",sourceDirName:"API",slug:"/API/MailAttachmentClass",permalink:"/pt/docs/19/API/MailAttachmentClass",draft:!1,tags:[],version:"19",frontMatter:{id:"MailAttachmentClass",title:"MailAttachment"},sidebar:"docs",previous:{title:"IMAPTransporter",permalink:"/pt/docs/19/API/IMAPTransporterClass"},next:{title:"POP3Transporter",permalink:"/pt/docs/19/API/POP3TransporterClass"}},d={},s=[{value:"Attachment Object",id:"attachment-object",level:3},{value:"MAIL New attachment",id:"mail-new-attachment",level:2},{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"4D.MailAttachment.new()",id:"4dmailattachmentnew",level:2},{value:"Description",id:"description-1",level:4},{value:".cid",id:"cid",level:2},{value:"Description",id:"description-2",level:4},{value:".disposition",id:"disposition",level:2},{value:"Description",id:"description-3",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"Description",id:"description-4",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-5",level:4},{value:".path",id:"path",level:2},{value:"Description",id:"description-6",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"Description",id:"description-7",level:4},{value:".type",id:"type",level:2},{value:"Description",id:"description-8",level:4}],c={toc:s};function h(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Attachment objects allow referencing files within a ",(0,l.kt)("a",{parentName:"p",href:"/pt/docs/19/API/EmailObjectClass"},(0,l.kt)("inlineCode",{parentName:"a"},"Email"))," object. Attachment objects are created using the ",(0,l.kt)("a",{parentName:"p",href:"#mail-new-attachment"},(0,l.kt)("inlineCode",{parentName:"a"},"MAIL New attachment"))," command."),(0,l.kt)("h3",{id:"attachment-object"},"Attachment Object"),(0,l.kt)("p",null,"Attachment objects provide the following read-only properties and functions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#cid"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#disposition"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#getcontent"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#name"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#path"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#platformpath"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#type"}),"\xa0","\xa0","\xa0","\xa0")))),(0,l.kt)("h2",{id:"mail-new-attachment"},"MAIL New attachment"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,l.kt)("em",{parentName:"p"},"path")," : Text { ; ",(0,l.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,l.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,l.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,l.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,l.kt)("em",{parentName:"p"},"blob")," : Blob { ; ",(0,l.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,l.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,l.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,l.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Path of the attachment file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blob"),(0,l.kt)("td",{parentName:"tr",align:null},"Blob"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"BLOB containing the attachment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Name + extension used by the mail client to designate the attachment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cid"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},'ID of attachment (HTML messages only), or " " if no cid is required')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Value of the content-type header")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disposition"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},'Value of the content-disposition header: "inline" or "attachment".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"4D.MailAttachment"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Attachment object")))),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"MAIL New attachment")," command ","allows you to create an attachment object that you can add to an ",(0,l.kt)("a",{parentName:"p",href:"/pt/docs/19/API/EmailObjectClass#email-object"},"Email object"),"."),(0,l.kt)("p",null,"You can pass either a path or a Blob to define the attachment."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If you use a ",(0,l.kt)("em",{parentName:"p"},"path"),", pass a ",(0,l.kt)("strong",{parentName:"p"},"text")," value containing the path of the attachment file, expressed with the system syntax. You can pass a full path name or a simple file name (in which case 4D will search for the file in the same directory as the project file).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If you use a ",(0,l.kt)("em",{parentName:"p"},"blob"),", pass a ",(0,l.kt)("strong",{parentName:"p"},"BLOB")," value containing the attachment itself."))),(0,l.kt)("p",null,"The optional ",(0,l.kt)("em",{parentName:"p"},"name")," parameter lets you pass the name and extension to be used by the mail client to designate the attachment. If ",(0,l.kt)("em",{parentName:"p"},"name")," is omitted and:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"you passed a file path, the name and extension of the file is used,"),(0,l.kt)("li",{parentName:"ul"},"you passed a BLOB, a random name without extension is automatically generated.")),(0,l.kt)("p",null,"The optional ",(0,l.kt)("em",{parentName:"p"},"cid")," parameter lets you pass an internal ID for the attachment. This ID is the value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Id")," header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as ",(0,l.kt)("inlineCode",{parentName:"p"},'\\<img src="cid:ID">'),". This means that the contents of the attachment (e.g., a picture) should be displayed within the message on the mail client. The final result may vary depending on the mail client. You can pass an empty string in ",(0,l.kt)("em",{parentName:"p"},"cid")," if you do not want to use this parameter."),(0,l.kt)("p",null,"You can use the optional ",(0,l.kt)("em",{parentName:"p"},"type")," parameter to explicitly set the ",(0,l.kt)("inlineCode",{parentName:"p"},"content-type"),' of the attachment file. For example, you can pass a string defining a MIME type ("video/mpeg"). This content-type value will be set for the attachment, regardless of its extension. For more information about MIME types, please refer to the ',(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/MIME"},"MIME type page on Wikipedia"),"."),(0,l.kt)("p",null,"By default, if the ",(0,l.kt)("em",{parentName:"p"},"type")," parameter is omitted or contains an empty string, the ",(0,l.kt)("inlineCode",{parentName:"p"},"content-type")," of the attachment file is based on its extension. The following rules are applied for the main MIME types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Extension"),(0,l.kt)("th",{parentName:"tr",align:null},"Content Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jpg, jpeg"),(0,l.kt)("td",{parentName:"tr",align:null},"image/jpeg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"png"),(0,l.kt)("td",{parentName:"tr",align:null},"image/png")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gif"),(0,l.kt)("td",{parentName:"tr",align:null},"image/gif")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pdf"),(0,l.kt)("td",{parentName:"tr",align:null},"application/pdf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"doc"),(0,l.kt)("td",{parentName:"tr",align:null},"application/msword")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xls"),(0,l.kt)("td",{parentName:"tr",align:null},"application/vnd.ms-excel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ppt"),(0,l.kt)("td",{parentName:"tr",align:null},"application/vnd.ms-powerpoint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zip"),(0,l.kt)("td",{parentName:"tr",align:null},"application/zip")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gz"),(0,l.kt)("td",{parentName:"tr",align:null},"application/gzip")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"js"),(0,l.kt)("td",{parentName:"tr",align:null},"application/javascript")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ps"),(0,l.kt)("td",{parentName:"tr",align:null},"application/postscript")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xml"),(0,l.kt)("td",{parentName:"tr",align:null},"application/xml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"htm, html"),(0,l.kt)("td",{parentName:"tr",align:null},"text/html")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mp3"),(0,l.kt)("td",{parentName:"tr",align:null},"audio/mpeg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"other")),(0,l.kt)("td",{parentName:"tr",align:null},"application/octet-stream")))),(0,l.kt)("p",null,"The optional ",(0,l.kt)("em",{parentName:"p"},"disposition")," parameter lets you pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"content-disposition"),' header of the attachment. You can pass one of the following constants from the "Mail" constant theme:'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constant"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mail disposition attachment"),(0,l.kt)("td",{parentName:"tr",align:null},'"attachment"'),(0,l.kt)("td",{parentName:"tr",align:null},'Set the Content-disposition header value to "attachment", which means that the attachment file must be provided as a link in the message.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mail disposition inline"),(0,l.kt)("td",{parentName:"tr",align:null},'"inline"'),(0,l.kt)("td",{parentName:"tr",align:null},'Set the Content-disposition header value to "inline", which means that the attachment must be rendered within the message contents, at the "cid" location. The rendering depends on the mail client.')))),(0,l.kt)("p",null,"By default, if the ",(0,l.kt)("em",{parentName:"p"},"disposition")," parameter is omitted:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"if the ",(0,l.kt)("em",{parentName:"li"},"cid")," parameter is used, the ",(0,l.kt)("inlineCode",{parentName:"li"},"Content-disposition"),' header is set to "inline",'),(0,l.kt)("li",{parentName:"ul"},"if the ",(0,l.kt)("em",{parentName:"li"},"cid")," parameter is not passed or empty, the ",(0,l.kt)("inlineCode",{parentName:"li"},"Content-disposition"),' header is set to "attachment".')),(0,l.kt)("h4",{id:"example-1"},"Example 1"),(0,l.kt)("p",null,"You want to send an email with a user-selected file as an attachment and an image embedded in the HTML body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'$doc:=Select document("";"*";"Please select a file to attach";0)\nIf (OK=1) //If a document was selected\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="test_user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="test_user@mail.com"\n$email.to:="test_user@mail.com"\n$email.subject:="This is a test message with attachments"\n\n//add a link to download file\n$email.attachments:=New collection(MAIL New attachment(Document))\n//insert an inline picture (use a cid)\n$email.attachments[1]:=MAIL New attachment("c:\\\\Pictures\\\\4D.jpg";"";"4D")\n\n$email.htmlBody:="<html>"+\\\n"<body>Hello World!"+\\\n"<img src=\'cid:4D\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\n$transporter.send($email) //send mail\n\nEnd if\n')),(0,l.kt)("h4",{id:"example-2"},"Example 2"),(0,l.kt)("p",null,"You want to send an email with a 4D Write Pro area as an attachment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'C_BLOB($blob)\nWP EXPORT VARIABLE(WPArea;$blob;wk docx)\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="user@mail.com"\n$email.to:="customer@mail.com"\n$email.subject:="New annual report"\n$email.textBody:="Please find enclosed our latest annual report."\n$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))\n\n$transporter.send($email)\n')),(0,l.kt)("h2",{id:"4dmailattachmentnew"},"4D.MailAttachment.new()"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,l.kt)("em",{parentName:"p"},"path")," : Text { ; ",(0,l.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,l.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,l.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,l.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,l.kt)("em",{parentName:"p"},"blob")," : Blob { ; ",(0,l.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,l.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,l.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,l.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Path of the attachment file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blob"),(0,l.kt)("td",{parentName:"tr",align:null},"Blob"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"BLOB containing the attachment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Name + extension used by the mail client to designate the attachment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cid"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},'ID of attachment (HTML messages only), or " " if no cid is required')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Value of the content-type header")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disposition"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},'Value of the content-disposition header: "inline" or "attachment".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"4D.MailAttachment"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Attachment object")))),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.MailAttachment.new()")," function ","creates and returns a new object of the ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.MailAttachment")," type",". It is identical to the ",(0,l.kt)("a",{parentName:"p",href:"#mail-new-attachment"},(0,l.kt)("inlineCode",{parentName:"a"},"MAIL New attachment"))," command (shortcut)."),(0,l.kt)("h2",{id:"cid"},".cid"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".cid")," : Text"),(0,l.kt)("h4",{id:"description-2"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".cid")," property contains "," the ID of the attachment",". This property is used in HTML messages only. If this property is missing, the file is handled as a simple attachment (link)."),(0,l.kt)("h2",{id:"disposition"},".disposition"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".disposition")," : Text"),(0,l.kt)("h4",{id:"description-3"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".disposition")," property contains ","the value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Disposition")," header",". Two values are available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"inline": the attachment is rendered within the message contents, at the "cid" location. The rendering depends on the mail client.'),(0,l.kt)("li",{parentName:"ul"},'"attachment": the attachment is provided as a link in the message.')),(0,l.kt)("h2",{id:"getcontent"},".getContent()"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".getContent()")," : Blob"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"Blob"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Content of the attachment")))),(0,l.kt)("h4",{id:"description-4"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".getContent()")," function ","returns the contents of the attachment object in a BLOB",". You can use this method with attachment objects received by the ",(0,l.kt)("a",{parentName:"p",href:"#mail-convert-from-mime"},(0,l.kt)("inlineCode",{parentName:"a"},"MAIL Convert from MIME"))," command."),(0,l.kt)("h2",{id:"name"},".name"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".name")," : Text"),(0,l.kt)("h4",{id:"description-5"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".name")," property contains ","the name and extension of the attachment",".  By default, it is the name of the file, unless another name was specified in the ",(0,l.kt)("a",{parentName:"p",href:"#mail-new-attachment"},(0,l.kt)("inlineCode",{parentName:"a"},"MAIL New attachment"))," command."),(0,l.kt)("h2",{id:"path"},".path"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".path")," : Text"),(0,l.kt)("h4",{id:"description-6"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".path")," property contains ","the POSIX path of the attachment file, if it exists",".  "),(0,l.kt)("h2",{id:"platformpath"},".platformPath"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v19"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".platformPath")," : Text"),(0,l.kt)("h4",{id:"description-7"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".platformPath")," property returns ","the path of the attachment file expressed with the current platform syntax","."),(0,l.kt)("h2",{id:"type"},".type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".type")," : Text"),(0,l.kt)("h4",{id:"description-8"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".type")," property contains ","the ",(0,l.kt)("inlineCode",{parentName:"p"},"content-type")," of the attachment file",". If this type is not explicitly passed to the ",(0,l.kt)("a",{parentName:"p",href:"#mail-new-attachment"},(0,l.kt)("inlineCode",{parentName:"a"},"MAIL New attachment"))," command, the ",(0,l.kt)("inlineCode",{parentName:"p"},"content-type")," is based on its file extension."))}h.isMDXComponent=!0}}]);