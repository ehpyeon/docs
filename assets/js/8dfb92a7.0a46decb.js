"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69141:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"first-api-endpoint",title:"Your first API endpoint"},s=void 0,p={unversionedId:"first-api-endpoint",id:"first-api-endpoint",isDocsHomePage:!1,title:"Your first API endpoint",description:"Concepts: Structural elements, blanks, implicit returns, traces.",source:"@site/docs/first-api-endpoint.md",sourceDirName:".",slug:"/first-api-endpoint",permalink:"/first-api-endpoint",editUrl:"https://github.com/darklang/docs/edit/main/docs/first-api-endpoint.md",tags:[],version:"current",frontMatter:{id:"first-api-endpoint",title:"Your first API endpoint"}},c=[],u={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Concepts:")," Structural elements, blanks, implicit returns, traces."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new HTTP endpoint from the omnibox (click anywhere on the screen or\nhit ",(0,o.kt)("inlineCode",{parentName:"li"},"Cmd-k"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl-k"),"), or from the plus next to ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP")," on the sidebar.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.10.26_AM.png",src:n(12127).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Enter the HTTP verb as ",(0,o.kt)("inlineCode",{parentName:"li"},"GET")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"/math")," for the route.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.11.23_AM.png",src:n(20885).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"You can now write any code in the blank ","\u2013"," this is the return value of\nthe API endpoint that you've just created. To start with, let's just return\n",(0,o.kt)("inlineCode",{parentName:"li"},"4"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.12.02_AM.png",src:n(22929).Z})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Click the handler\'s menu (\u2630) in the upper right and select "open in new tab",\nto see your API endpoint running in production.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.12.43_AM.png",src:n(78054).Z})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Go back to Dark to edit your code. Add ",(0,o.kt)("inlineCode",{parentName:"li"},"+ 5")," to the end of the code and leave\nyour cursor in line.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.14.25_AM.png",src:n(27595).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"9")," below the handler shows you the return value for the handler.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," on the left shows you the result of the expression where the cursor\ncurrently is (in this case, 5). This isn't very useful when it's an integer,\nbut if it's a variable it will show you the result of the variable."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gettingstarted/Screen_Shot_2020-02-11_at_9.16.06_AM.png",src:n(41653).Z})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'Mouse over the white dots on the left. Each dot is a "trace", representing a\nsingle request to your handler. Traces are fundamental to coding in Dark, and\nwe\'ll come back to them later.')),(0,o.kt)("p",null,"Congratulations! You've shipped your first Dark API endpoint."))}d.isMDXComponent=!0},12127:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.10.26_AM-d9307639745ba56ddd56ce3638cd5a4e.png"},20885:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.11.23_AM-52a170256b0442e84200534340a34287.png"},22929:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.12.02_AM-ffb4fbad637bef2cd449efce8582f5be.png"},78054:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.12.43_AM-1b0d3e237f2ddc78a714a4781f179490.png"},27595:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.14.25_AM-39d55c2c61b61a7b7b8e489df64a02ee.png"},41653:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screen_Shot_2020-02-11_at_9.16.06_AM-340c777ca7937f0baa98bc2907362ec8.png"}}]);