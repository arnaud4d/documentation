"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27632],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(t),m=o,u=h["".concat(d,".").concat(m)]||h[m]||c[m]||a;return t?n.createElement(u,i(i({ref:r},p),{},{components:t})):n.createElement(u,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},22091:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>h,metadata:()=>u,toc:()=>f});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&p(e,t,r[t]);if(l)for(var t of l(r))s.call(r,t)&&p(e,t,r[t]);return e};const h={id:"error-handling",title:"Error handling"},m=void 0,u={unversionedId:"Concepts/error-handling",id:"version-19/Concepts/error-handling",title:"Error handling",description:"Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions.",source:"@site/versioned_docs/version-19/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/es/19/Concepts/error-handling",draft:!1,tags:[],version:"19",frontMatter:{id:"error-handling",title:"Error handling"},sidebar:"docs",previous:{title:"Transformation tags",permalink:"/docs/es/19/Tags/tags"},next:{title:"Interpreted and Compiled modes",permalink:"/docs/es/19/Concepts/interpreted-compiled"}},g={},f=[{value:"Error or status",id:"error-or-status",level:2},{value:"Installing an error-handling method",id:"installing-an-error-handling-method",level:2},{value:"Scope and components",id:"scope-and-components",level:3},{value:"Handling errors within the method",id:"handling-errors-within-the-method",level:3},{value:"Example",id:"example",level:4},{value:"Using an empty error-handling method",id:"using-an-empty-error-handling-method",level:3}],y={toc:f};function k(e){var r,t=e,{components:o}=t,p=((e,r)=>{var t={};for(var n in e)d.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=c(c({},y),p),a(r,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions. "),(0,n.kt)("p",null,"Error handling meets two main needs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"finding out and fixing potential errors and bugs in your code during the development phase,"),(0,n.kt)("li",{parentName:"ul"},"catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) with you own interface. ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. This method would avoid unexpected dialog boxes to be displayed on the server machine, and could log errors in a dedicated file for further analyses. ")),(0,n.kt)("h2",c({},{id:"error-or-status"}),"Error or status"),(0,n.kt)("p",null,"Many 4D class functions, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"entity.save()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"transporter.send()"),", return a ",(0,n.kt)("em",{parentName:"p"},"status"),' object. This object is used to store "predictable" errors in the runtime context, e.g. invalid password, locked entity, etc., that do not stop program execution. This category of errors can be handled by regular code.'),(0,n.kt)("p",null,'Other "unpredictable" errors include disk write error, network failure, or in general any unexpected interruption. This category of errors generates exceptions and needs to be handled through an error-handling method.  '),(0,n.kt)("h2",c({},{id:"installing-an-error-handling-method"}),"Installing an error-handling method"),(0,n.kt)("p",null,"In 4D, all errors can be caught and handled in a specific project method, the ",(0,n.kt)("strong",{parentName:"p"},"error-handling")," (or ",(0,n.kt)("strong",{parentName:"p"},"error-catching"),") method."),(0,n.kt)("p",null,"This project method is installed for the current process and will be automatically called for any error that occurs in the process, in interpreted or compiled mode. To ",(0,n.kt)("em",{parentName:"p"},"install")," this project method, you just need to call the ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command with the project method name as parameter. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_ERRORS") //Installs the error-handling method\n')),(0,n.kt)("p",null,"To stop catching errors and give back hand to 4D, call ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," with an empty string:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("") //gives back control to 4D\n')),(0,n.kt)("p",null,"The  ",(0,n.kt)("inlineCode",{parentName:"p"},"Method called on error")," command allows you to know the name of the method installed by ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," for the current process. It is particularly useful in the context of generic code because it enables you to temporarily change and then restore the error-catching method:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  //If the document cannot be opened, an error is generated\n $ref:=Open document("MyDocument")\n  //Reinstallation of previous method\n ON ERR CALL($methCurrent)\n\n')),(0,n.kt)("h3",c({},{id:"scope-and-components"}),"Scope and components"),(0,n.kt)("p",null,"You can define a single error-catching method for the whole application or different methods per application module. However, only one method can be installed per process."),(0,n.kt)("p",null,"An error-handling method installed by the ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command only applies to the running application. In the case of an error generated by a ",(0,n.kt)("strong",{parentName:"p"},"component"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," error-handling method of the host application is not called, and vice versa. "),(0,n.kt)("h3",c({},{id:"handling-errors-within-the-method"}),"Handling errors within the method"),(0,n.kt)("p",null,"Within the custom error method, you have access to several pieces of information that will help you identifying the error:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"dedicated system variables(*):"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error")," (longint): error code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error method")," (text): name of the method that triggered the error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error line")," (longint): line number in the method that triggered the error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error formula")," (text): formula of the 4D code (raw text) which is at the origin of the error. ")))),(0,n.kt)("p",null,"(",(0,n.kt)("em",{parentName:"p"},") 4D automatically maintains a number of variables called ",(0,n.kt)("strong",{parentName:"em"},"system variables"),", meeting different needs. See the "),"4D Language Reference manual*."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"GET LAST ERROR STACK")," command that returns information about the current stack of errors of the 4D application."),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"Get call chain")," command that returns a collection of objects describing each step of the method call chain within the current process. ")),(0,n.kt)("h4",c({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Here is a simple error-handling system:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'//installing the error handling method\n ON ERR CALL("errorMethod")\n //... executing code\n ON ERR CALL("") //giving control back to 4D\n')),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'// errorMethod project method\n If(Error#1006) //this is not a user interruption\n    ALERT("The error "+String(Error)+" occurred". The code in question is: \\""+Error formula+"\\"")\n End if\n')),(0,n.kt)("h3",c({},{id:"using-an-empty-error-handling-method"}),"Using an empty error-handling method"),(0,n.kt)("p",null,"If you mainly want the standard error dialog box to be hidden, you can install an empty error-handling method. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Error")," system variable can be tested in any method, i.e. outside of the error-handling method:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\n')))}k.isMDXComponent=!0}}]);