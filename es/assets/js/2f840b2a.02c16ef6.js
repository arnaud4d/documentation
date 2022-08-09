"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26925],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=u(n),y=a,d=s["".concat(i,".").concat(y)]||s[y]||m[y]||o;return n?r.createElement(d,l(l({ref:e},c),{},{components:n})):r.createElement(d,l({ref:e},c))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94155:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],p={id:"compute",title:"$compute"},i=void 0,u={unversionedId:"REST/compute",id:"version-19/REST/compute",title:"$compute",description:"Calculate on specific attributes (e.g., Employee/salary/?$compute=sum) or in the case of an Object attribute (e.g., Employee/objectAtt.property1/?$compute=sum)",source:"@site/versioned_docs/version-19/REST/$compute.md",sourceDirName:"REST",slug:"/REST/compute",permalink:"/docs/es/docs/19/REST/compute",draft:!1,tags:[],version:"19",frontMatter:{id:"compute",title:"$compute"},sidebar:"docs",previous:{title:"$binary",permalink:"/docs/es/docs/19/REST/binary"},next:{title:"$distinct",permalink:"/docs/es/docs/19/REST/distinct"}},c={},m=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],s={toc:m};function y(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Calculate on specific attributes (",(0,o.kt)("em",{parentName:"p"},"e.g."),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Employee/salary/?$compute=sum)")," or in the case of an Object attribute (",(0,o.kt)("em",{parentName:"p"},"e.g."),", Employee/objectAtt.property1/?$compute=sum)"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This parameter allows you to do calculations on your data. "),(0,o.kt)("p",null,"If you want to perform a calculation on an attribute, you write the following:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,o.kt)("p",null,"If you want to pass an Object attribute, you must pass one of its property. For example:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAtt.property1/?$compute=$all")),(0,o.kt)("p",null,"You can use any of the following keywords:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Keyword"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"$all"),(0,o.kt)("td",{parentName:"tr",align:null},"A JSON object that defines all the functions for the attribute (average, count, min, max, and sum for attributes of type Number and count, min, and max for attributes of type String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"average"),(0,o.kt)("td",{parentName:"tr",align:null},"Get the average on a numerical attribute")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"count"),(0,o.kt)("td",{parentName:"tr",align:null},"Get the total number in the collection or dataclass (in both cases you must specify an attribute)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"min"),(0,o.kt)("td",{parentName:"tr",align:null},"Get the minimum value on a numerical attribute or the lowest value in an attribute of type String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"max"),(0,o.kt)("td",{parentName:"tr",align:null},"Get the maximum value on a numerical attribute or the highest value in an attribute of type String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sum"),(0,o.kt)("td",{parentName:"tr",align:null},"Get the sum on a numerical attribute")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"If you want to get all the computations for an attribute of type Number, you can write:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n')),(0,o.kt)("p",null,"If you want to get all the computations for an attribute of type String, you can write:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/firstName/?$compute=$all")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n')),(0,o.kt)("p",null,"If you want to just get one calculation on an attribute, you can write the following:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=sum")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"235000")),(0,o.kt)("p",null,"If you want to perform a calculation on an Object attribute, you can write the following:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAttribute.property1/?$compute=sum")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"45")))}y.isMDXComponent=!0}}]);