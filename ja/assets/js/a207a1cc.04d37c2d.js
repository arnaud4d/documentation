"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78616],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),k=o(n),s=r,N=k["".concat(p,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},51233:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>m,metadata:()=>o,toc:()=>d});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],m={id:"time",title:"Time"},p=void 0,o={unversionedId:"Concepts/time",id:"version-18/Concepts/time",title:"Time",description:"- A Time field, variable or expression can be in the range of 0000 to 596,00000.",source:"@site/versioned_docs/version-18/Concepts/dt_time.md",sourceDirName:"Concepts",slug:"/Concepts/time",permalink:"/ja/docs/18/Concepts/time",draft:!1,tags:[],version:"18",frontMatter:{id:"time",title:"Time"},sidebar:"docs",previous:{title:"String",permalink:"/ja/docs/18/Concepts/string"},next:{title:"Variant",permalink:"/ja/docs/18/Concepts/variant"}},u={},d=[{value:"Time literals",id:"time-literals",level:2},{value:"Time operators",id:"time-operators",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3}],k={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A Time field, variable or expression can be in the range of 00:00:00 to 596,000:00:00."),(0,l.kt)("li",{parentName:"ul"},"Times are in 24-hour format."),(0,l.kt)("li",{parentName:"ul"},"A time value can be treated as a number. The number returned from a time is the number of seconds since midnight (00:00:00) that time represents.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," In the 4D Language Reference manual, Time parameters in command descriptions are denoted as Time, except when marked otherwise.  "),(0,l.kt)("h2",{id:"time-literals"},"Time literals"),(0,l.kt)("p",null,"A time literal constant is enclosed by question marks (?...?)."),(0,l.kt)("p",null,"A time literal constant is ordered hour:minute:second, with a colon (:) setting off each part. Times are specified in 24-hour format."),(0,l.kt)("p",null,"Here are some examples of time literals:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"?00:00:00? ` midnight\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minute, and 59 seconds\n")),(0,l.kt)("p",null,"A null time is specified by ?00:00:00?"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tip:")," The Method Editor includes a shortcut for entering a null time. To type a null time, enter the question mark (?) character and press Enter."),(0,l.kt)("h2",{id:"time-operators"},"Time operators"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Returns"),(0,l.kt)("th",{parentName:"tr",align:null},"Expression"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Addition"),(0,l.kt)("td",{parentName:"tr",align:null},"Time + Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? + ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"?03:05:07?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Subtraction"),(0,l.kt)("td",{parentName:"tr",align:null},"Time \u2013 Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? \u2013 ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:01:01?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Addition"),(0,l.kt)("td",{parentName:"tr",align:null},"Time + Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? + 65"),(0,l.kt)("td",{parentName:"tr",align:null},"7449")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Subtraction"),(0,l.kt)("td",{parentName:"tr",align:null},"Time \u2013 Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? \u2013 65"),(0,l.kt)("td",{parentName:"tr",align:null},"7319")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multiplication"),(0,l.kt)("td",{parentName:"tr",align:null},"Time * Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? * 2"),(0,l.kt)("td",{parentName:"tr",align:null},"14768")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Division"),(0,l.kt)("td",{parentName:"tr",align:null},"Time / Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? / 2"),(0,l.kt)("td",{parentName:"tr",align:null},"3692")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Longint division"),(0,l.kt)("td",{parentName:"tr",align:null},"Time \\ Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? \\ 2"),(0,l.kt)("td",{parentName:"tr",align:null},"3692")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Modulo"),(0,l.kt)("td",{parentName:"tr",align:null},"Time % Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"?20:10:00? % ?04:20:00?"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:50:00?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Modulo"),(0,l.kt)("td",{parentName:"tr",align:null},"Time % Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"?02:03:04? % 2"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Equality"),(0,l.kt)("td",{parentName:"tr",align:null},"Time = Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? = ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? = ?01:02:04?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inequality"),(0,l.kt)("td",{parentName:"tr",align:null},"Time # Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? # ?01:02:04?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? # ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,l.kt)("td",{parentName:"tr",align:null},"Time > Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:04? > ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? > ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less than"),(0,l.kt)("td",{parentName:"tr",align:null},"Time < Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? < ?01:02:04?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? < ?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater than or equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"Time >= Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? >=?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? >=?01:02:04?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less than or equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"Time <= Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:03? <=?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?01:02:04? <=?01:02:03?"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("p",null,"To obtain a time expression from an expression that combines a time expression with a number, use the commands ",(0,l.kt)("inlineCode",{parentName:"p"},"Time")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Time string"),"."),(0,l.kt)("p",null,"You can combine expressions of the time and number types using the ",(0,l.kt)("inlineCode",{parentName:"p"},"Time")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Current time")," functions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"    //The following line assigns to $vlSeconds the number of seconds   \n    //that will be elapsed between midnight and one hour from now\n$vlSeconds:=Current time+3600\n    //The following line assigns to $vHSoon the time it will be in one hour\n$vhSoon:=Time(Current time+3600)\n")),(0,l.kt)("p",null,"The second line could be written in a simpler way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"  // The following line assigns to $vHSoon the time it will be in one hour\n $vhSoon:=Current time+?01:00:00?\n")),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("p",null,"The Modulo operator can be used, more specifically, to add times that take the 24-hour format into account:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"$t1:=?23:00:00? // It is 23:00 p.m.\n  // We want to add 2 and a half hours\n$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 a.m. the next morning\n")))}s.isMDXComponent=!0}}]);