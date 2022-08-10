"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97157],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},78631:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"overview",title:"Overview",sidebar_label:"Overview"},l=void 0,d={unversionedId:"MSC/overview",id:"version-18/MSC/overview",title:"Overview",description:"The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop.",source:"@site/versioned_docs/version-18/MSC/overview.md",sourceDirName:"MSC",slug:"/MSC/overview",permalink:"/docs/es/18/MSC/overview",draft:!1,tags:[],version:"18",frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"SDI mode on Windows",permalink:"/docs/es/18/Menus/sdi"},next:{title:"Information Page",permalink:"/docs/es/18/MSC/information"}},c={},p=[{value:"Display in maintenance mode",id:"display-in-maintenance-mode",level:2},{value:"Display in standard mode",id:"display-in-standard-mode",level:2},{value:"Feature availability",id:"feature-availability",level:2}],m={toc:p};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The MSC window is not available from a 4D remote connection."),(0,r.kt)("p",null,"There are several ways to open the MSC window. The way it is accessed also determines the way the database is opened: in \u201cmaintenance\u201d mode or \u201cstandard\u201d mode. In maintenance mode, the database is not opened by 4D, only its reference is provided to the MSC. In standard mode, the database is opened by 4D."),(0,r.kt)("h2",{id:"display-in-maintenance-mode"},"Display in maintenance mode"),(0,r.kt)("p",null,"In maintenance mode, only the MSC window is displayed (the database is not opened by the 4D application). This means that databases that are too damaged to be opened in standard mode by 4D can nevertheless be accessed. Moreover, certain operations (compacting, repair, and so on) require the database to be opened in maintenance mode (see ",(0,r.kt)("a",{parentName:"p",href:"#feature-availability"},"Feature availability"),")."),(0,r.kt)("p",null,"You can open the MSC in maintenance mode from two locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"From the standard database opening dialog box"),"\nThe standard Open database dialog includes the ",(0,r.kt)("strong",{parentName:"li"},"Maintenance Security Center")," option from the menu associated with the ",(0,r.kt)("strong",{parentName:"li"},"Open")," button:\n",(0,r.kt)("img",{src:a(79798).Z,width:"748",height:"505"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Help/Maintenance Security Center")," menu or ",(0,r.kt)("strong",{parentName:"li"},"MSC")," button in the tool bar (database not open)",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{src:a(26006).Z,width:"54",height:"53"}),"\nWhen you call this function, a standard Open file dialog appears so that you can indicate the database to be examined. The database will not be opened by 4D.")),(0,r.kt)("h2",{id:"display-in-standard-mode"},"Display in standard mode"),(0,r.kt)("p",null,"In standard mode, a database is open. In this mode, certain maintenance functions are not available. You have several possibilities for accessing the MSC window:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"Help/Maintenance Security Center")," menu or the ",(0,r.kt)("strong",{parentName:"p"},"MSC")," button in the 4D toolbar:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{src:a(26006).Z,width:"54",height:"53"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Use the \u201cmsc\u201d standard action that it is possible to associated with a menu command or a form object (see "Standard actions" section).')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"OPEN SECURITY CENTER")," language command."))),(0,r.kt)("h2",{id:"feature-availability"},"Feature availability"),(0,r.kt)("p",null,"Certain MSC functions are not available depending on the MSC opening mode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Backup function is only available when the database is open (the MSC must have been opened in standard mode)."),(0,r.kt)("li",{parentName:"ul"},"Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). If these functions are tried while the database is open in standard mode, a dialog warns you that it implies that the application be closed and restarted in maintenance mode."),(0,r.kt)("li",{parentName:"ul"},"In encrypted databases, access to encrypted data or to the .journal file requires that a valid encryption data key be provided (see ",(0,r.kt)("a",{parentName:"li",href:"/docs/es/18/MSC/encrypt"},"Encrypt page"),"). Otherwise, encrypted data is not visible.")))}u.isMDXComponent=!0},79798:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MSC_standardOpen-ef15ff019a0992eb692c97fb75fb9800.png"},26006:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA1CAYAAAAK0RhzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAR5SURBVGhD7ZgPSBtXHMe/0c6V4R901TkdrVmymKHVrnMt1lFrlDgdadfCZgsiw9HObgyHA1e6qQhSpSDoECsrbCKDMiky6MQ/aLoK6hhLR+mSxkZNY0cnyvxTRTD1z+6dv8ZYtULvnTQhHzh4v997HPe59+53907x2+DMMrwQUSzyJe9yG51TwI/aXodPzNPwiXkaXisma7l3zs/DMWjFoPW2cFjgdM7j5V27EL37dSQefBcRkdE0ki+s3HMVW15exr/37+Ge7Q5sd/7GP/cdUKvVSExMRHx8PGZmZjAwMACrVZAdHERISIggGgGVNh77k1PxQkAAnUkaXMX6r7ejp6sNYWFhokRCQgJiY2MR4Haxk5OTojxjcXERdrtdlGSyo6OjUGu0yPnkC7FfClzFyr/6FDU1NQgNDaXMetzFnmR2dhalpaX49mI9/PykPfpcvzwWFhaeKsVQKBTUWk9gYCCWlpaw8OgRZaThK/eexraKPW0p8mbbxGw2G4aHhymSH9nFWBWcmJhAa2srjEYjpqamNq2MPJFdrK+vDyUlJa4Zq66uhslkol75kF0sJSUFaWlpFAHJyclISkqiSD64ifn7+4vvoY1wOp1QqVSIiYkR25vBigs7Dw+4iUVFRWNkZISiteh0OhQVFaGgoECcwY0YHx9HUFAQ/HfsoIw0uIlp9+5Dd3c3RWuJjIykFhAeHk6ttfT39yPildVxUuEmdjA1E6abN8UisRmbvcfYbPX29iLd8BFlpMNN7MWdO/HByY9RV1eH6elpym4Ne+YaGxuRsP8dvPrabspKh5sYQ/3mXiQdSkVlZaX4tb4V7MOZSbF92Psf5lGWD1zFGCnp2dDEJaKiogJjY2OUXcF9Kc4Lu+uGhgY8FDafeZ9/TVl+cBdjHMk6jn0HUlBWVgaLxULZVdhOura2FotLy8gv/Eby/msjZP3ncdd8C79c+REGgwHZ2dmYm5sTvzqam5uhVGtwPPcMjeQL938eGzE18R9+/bkRiwtOsdSbzWboso7h7UNHaAR/tkXsMbdNv8NmuQX9sZMIDA6hrDxsq9h2wvWfx/OGT8zT8Il5Gj4xT0OiWCfKooKhLe6keBXH5QxoozLQZKeEsVCIhbHi4ZZnrOkLxqnLQ9Tx7PCZsZ9a0UPNFYZw49of1Baw1+NUrhnnex/C+oAdXchTUh+TygW+F/Mrx5XTKup8djiIHUCOcNGX3O+y8Tu0GaqQQ+EKcYh5LONiCE01TLgWhynDCy4zpjpbDM21Djgo7mk3IytDTZGA8jNUlZtxRlhmZUbKMewdaMMJpK4Tlg6n4qFHuvYcfmAXLSy7SyheXWrEntNdwjK7CuQKz9HRetdNkAtOYsDhs1W4294JR1cLNO/pKfskepQ/+AvnQTdBqYbmzxbccC8knOAmBmUmsqwXcc52Avk6ym2JHvnlwIVC9xnsRNNzUxVFVMj7Mg54IxN7KOOCVUVXOX8LF7RXUU7ybIl2GFqQ6epvRQyHqujbj3kaPjFPw2vFxOJBbS8C+B/aCLjWUUEFJgAAAABJRU5ErkJggg=="}}]);