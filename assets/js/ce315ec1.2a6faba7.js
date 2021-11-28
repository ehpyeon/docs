"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(r,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22897:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>r,metadata:()=>p,toc:()=>c,default:()=>d});var a=n(87462),i=n(63366),s=(n(67294),n(3905)),l=["components"],o={id:"functional-aspects",title:"Functional Aspects",sidebar_label:"Functional Aspects"},r=void 0,p={unversionedId:"functional-aspects",id:"functional-aspects",isDocsHomePage:!1,title:"Functional Aspects",description:"Implicit Returns",source:"@site/docs/functional-aspects.md",sourceDirName:".",slug:"/functional-aspects",permalink:"/functional-aspects",editUrl:"https://github.com/darklang/docs/edit/main/docs/functional-aspects.md",tags:[],version:"current",frontMatter:{id:"functional-aspects",title:"Functional Aspects",sidebar_label:"Functional Aspects"},sidebar:"docs",previous:{title:"Unique Aspects",permalink:"/unique-aspects"},next:{title:"Language Details",permalink:"/languagedetails"}},c=[{value:"Implicit Returns",id:"implicit-returns",children:[],level:2},{value:"Statements",id:"statements",children:[],level:2},{value:"Pipelines",id:"pipelines",children:[{value:"Overview",id:"overview",children:[],level:3},{value:"How to Pipe",id:"how-to-pipe",children:[],level:3},{value:"Indentation Tip",id:"indentation-tip",children:[],level:3}],level:2},{value:"List::Map",id:"listmap",children:[{value:"Tips",id:"tips",children:[],level:3}],level:2},{value:"Blocks (lambdas, anonymous functions)",id:"blocks-lambdas-anonymous-functions",children:[],level:2},{value:"Match",id:"match",children:[],level:2}],u={toc:c};function d(e){var t=e.components,o=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"implicit-returns"},"Implicit Returns"),(0,s.kt)("p",null,"Most languages, especially Javascript, are imperative: you tell it to do one\nthing, then do another thing. So whenever you have code, you can add more code\nbelow it to do more stuff."),(0,s.kt)("p",null,'Dark uses "implicit returns" (somewhat similar to Ruby, CoffeeScript, Haskell\nand Rust). The value of an expression is that last value in that expression. So\nin the "hello world" example, you don\'t write ',(0,s.kt)("inlineCode",{parentName:"p"},'return "hello world"'),", just\n",(0,s.kt)("inlineCode",{parentName:"p"},'"hello world"')," is enough."),(0,s.kt)("p",null,"A handler or function will return the result of the last expression within it.\nThe return value of an expression is shown below the handler. If the last\nexpression is blank, Dark will return a 500 error."),(0,s.kt)("p",null,"You can see some examples are shown here:\n",(0,s.kt)("a",{parentName:"p",href:"https://darklang.com/a/sample-returns"},"https://darklang.com/a/sample-returns")),(0,s.kt)("p",null,"Other computation (side effects) can be done using a statement."),(0,s.kt)("h2",{id:"statements"},"Statements"),(0,s.kt)("p",null,"If you wish to use a function for side-effect (like ",(0,s.kt)("inlineCode",{parentName:"p"},"DB::set")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"emit"),") then\nyou can put it on the right hand side of a ",(0,s.kt)("inlineCode",{parentName:"p"},"let"),"."),(0,s.kt)("p",null,"Dark does not yet support statements without the extra ",(0,s.kt)("inlineCode",{parentName:"p"},"let"),". When you hit\n\u201center\u201d at the end of a line that has a return value, we assume you want to make\na new expression. Since that would be the last expression (and returned), we\nwill automatically add the ",(0,s.kt)("inlineCode",{parentName:"p"},"let _ =")," to the expression for you."),(0,s.kt)("h2",{id:"pipelines"},"Pipelines"),(0,s.kt)("h3",{id:"overview"},"Overview"),(0,s.kt)("p",null,"In Dark, pipelines make code more readable. Pipelines are similar to method\nchaining in OO languages, and pipes in Bash. Rather than calling functions with\ntheir parameters, you pass the previous value into the ",(0,s.kt)("strong",{parentName:"p"},"first")," parameter of an\nexpression:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/image2.gif",src:n(99074).Z})),(0,s.kt)("p",null,"Traditionally, you call functions with their arguments as parameters. However,\nthat is often confusing and can be hard to read:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/Image6.png",src:n(89169).Z})),(0,s.kt)("p",null,"Pipelines perform a series of transformations on a value in order. Here, we\nstart with the string ",(0,s.kt)("inlineCode",{parentName:"p"},'"live"')," and pipe it to ",(0,s.kt)("inlineCode",{parentName:"p"},"String::reverse")," to produce\n",(0,s.kt)("inlineCode",{parentName:"p"},'"evil"'),". Then we pipe the result to ",(0,s.kt)("inlineCode",{parentName:"p"},"String::toUppercase"),", producing the string\n",(0,s.kt)("inlineCode",{parentName:"p"},'"EVIL"'),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/image9.png",src:n(91120).Z})),(0,s.kt)("h3",{id:"how-to-pipe"},"How to Pipe"),(0,s.kt)("p",null,"To start a pipeline, use ",(0,s.kt)("inlineCode",{parentName:"p"},"|>")," at the end of the expression you are piping."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/openpipe.png",src:n(85865).Z})),(0,s.kt)("p",null,"Once you are in a pipeline, hitting ",(0,s.kt)("inlineCode",{parentName:"p"},"return")," at the end of the expression will\ncontinue the pipe."),(0,s.kt)("p",null,"If you need to pipe a specific subset of an expression, you can select it and\nthen hit ",(0,s.kt)("inlineCode",{parentName:"p"},"shift+enter"),". For example, selecting ",(0,s.kt)("inlineCode",{parentName:"p"},"UUID::generate")," to pipe it into\n",(0,s.kt)("inlineCode",{parentName:"p"},"toString"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/openpipe.png",src:n(62460).Z}),"\n",(0,s.kt)("img",{alt:"functional/openpipe.png",src:n(32632).Z})),(0,s.kt)("h3",{id:"indentation-tip"},"Indentation Tip"),(0,s.kt)("p",null,'Look at the indentation to see what is being piped. A common mistake with\npipelines is introducing them at an unintended "level". For example, here the\npiped value is the let expression as a whole, but the author intended to pipe\nthe expression bound to the variable s:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/image13.png",src:n(90041).Z})),(0,s.kt)("p",null,"_","To view the live code provided in the examples above, visit\n",(0,s.kt)("a",{parentName:"p",href:"https://darklang.com/a/sample-pipeline"},"https://darklang.com/a/sample-pipeline"),"."),(0,s.kt)("h2",{id:"listmap"},"List::Map"),(0,s.kt)("p",null,"Dark does not have a for-loop, it has ",(0,s.kt)("inlineCode",{parentName:"p"},"List::map.")," This allows you to do\nsomething to a collection of objects in a list."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"List::map")," takes two parameters. In this case we are passing in a list of\nintegers, and a block."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/image4.png",src:n(26917).Z})),(0,s.kt)("p",null,"In this case, we multiply each value by two:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/image17.png",src:n(96104).Z})),(0,s.kt)("p",null,"If we wanted to do something involving subsequent list items, we can use a List\nfold (in this case we pipe the output of our previous list into list::fold),\nresulting in a return value of 10,100:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/image14.png",src:n(93090).Z})),(0,s.kt)("h3",{id:"tips"},"Tips"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The live values within a block on ",(0,s.kt)("inlineCode",{parentName:"li"},"List::map")," will show you the last item in\nthe list. The live value for ",(0,s.kt)("inlineCode",{parentName:"li"},"List::map")," shows the full outcome."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Known bug:")," Right now, if you use a map with a function that has a side\neffect (like Int::Rand) the analysis will show you the impact of the ",(0,s.kt)("em",{parentName:"li"},"last"),"\nversion of the side effect as though it was used for all of them. This is an\nanalysis bug (you are actually getting a random int each time).")),(0,s.kt)("p",null,"List map with no side effect:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/listmap1.png",src:n(48834).Z})),(0,s.kt)("p",null,"List map with a side effect, appears to use the same Int::random each time:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/listmap2.png",src:n(29384).Z})),(0,s.kt)("p",null,"List map with side effect, discrepancy between analysis and values stored in DB:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/listmap3.png",src:n(10610).Z})),(0,s.kt)("h2",{id:"blocks-lambdas-anonymous-functions"},"Blocks (lambdas, anonymous functions)"),(0,s.kt)("p",null,"Blocks are anonymous functions that operate on a set of values. Expressions like\n",(0,s.kt)("inlineCode",{parentName:"p"},"List::map")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"DB::query")," take them as parameters."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/block.png",src:n(33316).Z})),(0,s.kt)("p",null,"To open the block type ",(0,s.kt)("inlineCode",{parentName:"p"},"\\"),". It auto-populates the parameters it is expecting\n(like ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," for ",(0,s.kt)("inlineCode",{parentName:"p"},"Db::query")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"accum, curr")," for ",(0,s.kt)("inlineCode",{parentName:"p"},"List::fold"),")."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/block.png",src:n(34754).Z})),(0,s.kt)("h2",{id:"match"},"Match"),(0,s.kt)("p",null,"The match expression is used to destructure complex types, such as the ",(0,s.kt)("inlineCode",{parentName:"p"},"Option"),"\ntype (",(0,s.kt)("inlineCode",{parentName:"p"},"Just")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Nothing"),") and the ",(0,s.kt)("inlineCode",{parentName:"p"},"Result")," type (",(0,s.kt)("inlineCode",{parentName:"p"},"Ok")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Error"),"). It can\nalso be used similarly to switch statements in other languages."),(0,s.kt)("p",null,"By default, functions that return Option or Result go to the\n",(0,s.kt)("a",{parentName:"p",href:"https://darklang.com/docs/unique-aspects#functions-that-use-error-rail"},"Error Rail"),".\nOnce you remove the function from the Error Rail, use match for destructuring."),(0,s.kt)("p",null,"Here\u2019s an example of using a match expression with a dictionary lookup."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"functional/image16.png",src:n(80786).Z})),(0,s.kt)("p",null,"Using a variable name as one of the branches will catch all matches. The\nvariable can be used on the right side of the branch."))}d.isMDXComponent=!0},33316:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/block-27e83d9f6cdd7e5a3aa96b71977a05ab.png"},34754:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blockfilter-4d56ff432941751e2d074125c45c3ff5.png"},90041:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image13-96990afe170909b604f0a5f8f9c949d9.png"},93090:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image14-5f1f6eba05580c1353b9be406e5352ef.png"},80786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image16-1ae6b9e27e3825b9558a0605ac339ec2.png"},96104:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image17-7d8e84b643f1e42a4eab5fbfaee9eff7.png"},99074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image2-08fea7cbe2af7eac6cd05990c51b0955.gif"},26917:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image4-07e836c631b3c0e3bc3f9927669549a8.png"},89169:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image6-60aa524b85fe6bcdb005e3d55403c85f.png"},91120:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image9-1c527b1b363073ce6b0fbd5536d20af0.png"},48834:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listmap1-804b546f95c111ff99dec164cbed36ec.png"},29384:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listmap2-4fc3b70f25be26fe0b5495b94be68709.png"},10610:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listmap3-11c32326bff088f6d3872b71c6585e57.png"},85865:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/openpipe-fd77fe1f3fed0c98a063c1db14252882.png"},62460:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/selectpipe-5c556f5d79eff4ebc940552288f83973.png"},32632:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/successfulpipe-c625f5c32b701404f81ddbc69fe3e849.png"}}]);