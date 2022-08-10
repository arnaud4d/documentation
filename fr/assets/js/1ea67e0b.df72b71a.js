"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"SignalClass",title:"Signal"},s=void 0,p={unversionedId:"API/SignalClass",id:"version-19/API/SignalClass",title:"Signal",description:"Signals are tools provided by the 4D language to manage interactions and avoid conflicts between processes in a multiprocess application. Signals allow you to make sure one or more process(es) will wait for a specific task to be completed before continuing execution. Any process can wait and/or release a signal.",source:"@site/versioned_docs/version-19/API/SignalClass.md",sourceDirName:"API",slug:"/API/SignalClass",permalink:"/fr/docs/19/API/SignalClass",draft:!1,tags:[],version:"19",frontMatter:{id:"SignalClass",title:"Signal"},sidebar:"docs",previous:{title:"Session",permalink:"/fr/docs/19/API/SessionClass"},next:{title:"SMTPTransporter",permalink:"/fr/docs/19/API/SMTPTransporterClass"}},d={},m=[{value:"Signal Object",id:"signal-object",level:3},{value:"Working with signals",id:"working-with-signals",level:3},{value:"Example",id:"example",level:3},{value:"Summary",id:"summary",level:3},{value:"New signal",id:"new-signal",level:2},{value:"Description",id:"description",level:4},{value:"Example",id:"example-1",level:4},{value:".description",id:"description-1",level:2},{value:"Description",id:"description-2",level:4},{value:".signaled",id:"signaled",level:2},{value:"Description",id:"description-3",level:4},{value:".trigger()",id:"trigger",level:2},{value:"Description",id:"description-4",level:4},{value:".wait()",id:"wait",level:2},{value:"Description",id:"description-5",level:4}],u={toc:m};function c(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Signals are tools provided by the 4D language to manage interactions and avoid conflicts between processes in a multiprocess application. Signals allow you to make sure one or more process(es) will wait for a specific task to be completed before continuing execution. Any process can wait and/or release a signal."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Semaphores can also be used to manage interactions. Semaphores allow you to make sure that two or more processes do not modify the same resource (file, record...) at the same time. Only the process that sets the semaphore can remove it.")),(0,l.kt)("h3",{id:"signal-object"},"Signal Object"),(0,l.kt)("p",null,"A signal is a shared object that must be passed as a parameter to commands that call or create workers or processes."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Signal")," object contains the following built-in methods and properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#wait"},(0,l.kt)("inlineCode",{parentName:"a"},".wait()"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trigger"},(0,l.kt)("inlineCode",{parentName:"a"},".trigger()"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#signaled"},(0,l.kt)("inlineCode",{parentName:"a"},".signaled"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#description"},(0,l.kt)("inlineCode",{parentName:"a"},".description")),".")),(0,l.kt)("p",null,"Any worker/process calling the ",(0,l.kt)("inlineCode",{parentName:"p"},".wait()")," method will suspend its execution until the ",(0,l.kt)("inlineCode",{parentName:"p"},".signaled")," property is true. While waiting for a signal, the calling process does not use any CPU. This can be very interesting for performance in multiprocess applications. The ",(0,l.kt)("inlineCode",{parentName:"p"},".signaled")," property becomes true when any worker/process calls the ",(0,l.kt)("inlineCode",{parentName:"p"},".trigger()")," method."),(0,l.kt)("p",null,"Note that to avoid blocking situations, the ",(0,l.kt)("inlineCode",{parentName:"p"},".wait()")," can also return after a defined timeout has been reached."),(0,l.kt)("p",null,"Signal objects are created with the ",(0,l.kt)("a",{parentName:"p",href:"#new-signal"},"New signal")," command."),(0,l.kt)("h3",{id:"working-with-signals"},"Working with signals"),(0,l.kt)("p",null,"In 4D, you create a new signal object by calling the ",(0,l.kt)("a",{parentName:"p",href:"#new-signal"},(0,l.kt)("inlineCode",{parentName:"a"},"New signal"))," command. Once created, this signal must be passed as a parameter to the ",(0,l.kt)("inlineCode",{parentName:"p"},"New process")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"CALL WORKER")," commands so that they can modify it when they have finished the task you want to wait for."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"signal.wait()")," must be called from the worker/process that needs another worker/process to finish a task in order to continue."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"signal.trigger()")," must be called from the worker/process that finished its execution in order to release all others.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(5301).Z,width:"813",height:"324"})),(0,l.kt)("p",null,"Once a signal has been released using a ",(0,l.kt)("inlineCode",{parentName:"p"},"signal.trigger()")," call, it cannot be reused again. If you want to set another signal, you need to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"New signal")," command again."),(0,l.kt)("p",null,"Since a signal object is a ",(0,l.kt)("a",{parentName:"p",href:"/fr/docs/19/Concepts/shared"},"shared object"),", you can use it to return results from called workers/processes, provided that you do not forget to write values within a ",(0,l.kt)("inlineCode",{parentName:"p"},"Use...End use")," structure (see example)."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' var $signal : 4D.Signal\n\n  // Creation of a signal\n $signal:=New signal\n\n  // call main process and execute OpenForm method\n CALL WORKER(1;"OpenForm";$signal)\n  // do another calculation\n ...\n  // Waiting for the end of the process\n $signaled:=$signal.wait()\n\n  // Processing of the results\n $calc:=$signal.result+...\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"OpenForm"))," method :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' #DECLARE ($signal : 4D.Signal)  \n var $form : Object\n $form:=New object("value";0)\n\n  // Open the form\n $win:=Open form window("Information";Movable form dialog box)\n DIALOG("Information";$form)\n CLOSE WINDOW($win)\n\n  // Add a new attribute to your $signal shared object to pass your result to the other process:\n Use($signal)\n    $signal.result:=$form.value\n End use\n\n  // Trigger the signal to the waiting process\n $signal.trigger()\n')),(0,l.kt)("h3",{id:"summary"},"Summary"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#description"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#signaled"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#trigger"}),"\xa0","\xa0","\xa0","\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#wait"}),"\xa0","\xa0","\xa0","\xa0")))),(0,l.kt)("h2",{id:"new-signal"},"New signal"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"New signal")," { ( ",(0,l.kt)("em",{parentName:"p"},"description")," : Text ) } : 4D.Signal"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Description for the signal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"4D.Signal"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Native object encapsulating the signal")))),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"New signal")," command ","creates a ",(0,l.kt)("inlineCode",{parentName:"p"},"4D.Signal")," object","."),(0,l.kt)("p",null,"A signal is a shared object which can be passed as parameter from a worker or process to another worker or process, so that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the called worker/process can update the signal object after specific processing has completed"),(0,l.kt)("li",{parentName:"ul"},"the calling worker/process can stop its execution and wait until the signal is updated, without consuming any CPU resources.")),(0,l.kt)("p",null,"Optionally, in the ",(0,l.kt)("em",{parentName:"p"},"description")," parameter you can pass a custom text describing the signal. This text can also be defined after signal creation."),(0,l.kt)("p",null,"Since the signal object is a shared object, it can also be used to maintain user properties, including the ",(0,l.kt)("a",{parentName:"p",href:"#description"},(0,l.kt)("inlineCode",{parentName:"a"},".description"))," property, by calling the ",(0,l.kt)("inlineCode",{parentName:"p"},"Use...End use")," structure."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"A new ",(0,l.kt)("a",{parentName:"p",href:"#signal-object"},(0,l.kt)("inlineCode",{parentName:"a"},"4D.Signal")," object"),"."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("p",null,"Here is a typical example of a worker that sets a signal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' var $signal : 4D.Signal\n $signal:=New signal("This is my first signal")\n\n CALL WORKER("myworker";"doSomething";$signal)\n $signaled:=$signal.wait(1) //wait for 1 second max\n\n If($signaled)\n    ALERT("myworker finished the work. Result: "+$signal.myresult)\n Else\n    ALERT("myworker has not finished in less than 1s")\n End if\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"doSomething"))," method could be like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," #DECLARE ($signal : 4D.Signal)\n  //any processing\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  //return the result\n End use\n $signal.trigger() // The work is finished\n")),(0,l.kt)("h2",{id:"description-1"},".description"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".description")," : Text"),(0,l.kt)("h4",{id:"description-2"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".description")," property ","contains a custom description for the ",(0,l.kt)("inlineCode",{parentName:"p"},"Signal")," object.",".  "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".description")," can be set at the creation of the signal object or at any moment. Note that since the ",(0,l.kt)("inlineCode",{parentName:"p"},"Signal")," object is a shared object, any write-mode access to the ",(0,l.kt)("inlineCode",{parentName:"p"},".description")," property must be surrounded by a ",(0,l.kt)("inlineCode",{parentName:"p"},"Use...End use")," structure."),(0,l.kt)("p",null,"This property is ",(0,l.kt)("strong",{parentName:"p"},"read-write"),"."),(0,l.kt)("h2",{id:"signaled"},".signaled"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".signaled")," : Boolean"),(0,l.kt)("h4",{id:"description-3"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".signaled")," property ","contains the current state of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Signal")," object",". When the signal is created, ",(0,l.kt)("inlineCode",{parentName:"p"},".signaled")," is ",(0,l.kt)("strong",{parentName:"p"},"False"),". It becomes ",(0,l.kt)("strong",{parentName:"p"},"True")," when the ",(0,l.kt)("inlineCode",{parentName:"p"},".trigger( )")," is called on the object."),(0,l.kt)("p",null,"This property is ",(0,l.kt)("strong",{parentName:"p"},"read-only"),"."),(0,l.kt)("h2",{id:"trigger"},".trigger()"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".trigger( )")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:null},"Does not require any parameters")))),(0,l.kt)("h4",{id:"description-4"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".trigger( )")," function ","sets the ",(0,l.kt)("inlineCode",{parentName:"p"},"signaled")," property of the signal object to ",(0,l.kt)("strong",{parentName:"p"},"true")," and awakens all workers or processes waiting for this signal."),(0,l.kt)("p",null,"If the signal is already in the signaled state (i.e., the ",(0,l.kt)("inlineCode",{parentName:"p"},"signaled")," property is already ",(0,l.kt)("strong",{parentName:"p"},"true"),"), the function does nothing."),(0,l.kt)("h2",{id:"wait"},".wait()"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v17 R4"),(0,l.kt)("td",{parentName:"tr",align:null},"Added"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".wait"),"( { ",(0,l.kt)("em",{parentName:"p"},"timeout")," : Real } ) : Boolean "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Real"),(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum waiting time for the signal in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"State of the ",(0,l.kt)("inlineCode",{parentName:"td"},".signaled")," property")))),(0,l.kt)("h4",{id:"description-5"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".wait( )")," function ","makes the current process wait until the ",(0,l.kt)("inlineCode",{parentName:"p"},".signaled")," property of the signal object to become ",(0,l.kt)("strong",{parentName:"p"},"true")," or the optional ",(0,l.kt)("em",{parentName:"p"},"timeout")," to expire","."),(0,l.kt)("p",null,"To prevent blocking code, you can pass a maximum waiting time in seconds in the ",(0,l.kt)("em",{parentName:"p"},"timeout")," parameter (decimals are accepted)."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Warning"),": Calling ",(0,l.kt)("inlineCode",{parentName:"p"},".wait( )")," without a ",(0,l.kt)("em",{parentName:"p"},"timeout")," in the 4D main process is not recommended because it could freeze the whole 4D application.")),(0,l.kt)("p",null,"If the signal is already in the signaled state (i.e. the ",(0,l.kt)("inlineCode",{parentName:"p"},".signaled")," property is already ",(0,l.kt)("strong",{parentName:"p"},"true"),"), the function returns immediately, without waiting."),(0,l.kt)("p",null,"The function returns the value of the ",(0,l.kt)("inlineCode",{parentName:"p"},".signaled")," property. Evaluating this value allows knowing if the function returned because the ",(0,l.kt)("inlineCode",{parentName:"p"},".trigger( )")," has been called (",(0,l.kt)("inlineCode",{parentName:"p"},".signaled")," is ",(0,l.kt)("strong",{parentName:"p"},"true"),") or if the ",(0,l.kt)("em",{parentName:"p"},"timeout")," expired (",(0,l.kt)("inlineCode",{parentName:"p"},".signaled")," is ",(0,l.kt)("strong",{parentName:"p"},"false"),")."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The state of a process that waits for a signal is ",(0,l.kt)("inlineCode",{parentName:"p"},"Waiting for internal flag"),".")))}c.isMDXComponent=!0},5301:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/signal-f8f54304f438eaf43a007e7cd1be6f66.png"}}]);