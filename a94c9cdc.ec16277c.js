(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(11),o=(n(0),n(241)),i={id:"finishing-touches",title:"Finishing touches"},c={id:"finishing-touches",isDocsHomePage:!1,title:"Finishing touches",description:"Try it out:",source:"@site/docs/finishing-touches.md",permalink:"/docs/finishing-touches"},p=[],s={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Try it out:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Change your REPL to say "test3" instead of "test1" and then re-run the request\nby hitting the play button.'),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_11.04.01_AM.png",alt:"gettingstarted/Screen_Shot_2020-02-11_at_11.04.01_AM.png"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A new trace dot will appear on the HTTP Post ",Object(o.b)("inlineCode",{parentName:"p"},"/test"),' handler. It shows "test6"\nin the body of the request.'),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_11.04.07_AM.png",alt:"gettingstarted/Screen_Shot_2020-02-11_at_11.04.07_AM.png"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The new request will be in the Datastore, and if you open your reports\nendpoint tomorrow, you'll see a log of all the new requests, as well as\nupdates to your Airtable base."))),Object(o.b)("p",null,"Congratulations! You now have your first Dark application: an API that stores\nrequests into a datastore, creates a daily report of those requests, and sends\nthe report to Airtable."))}u.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,d=l["".concat(i,".").concat(f)]||l[f]||b[f]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);