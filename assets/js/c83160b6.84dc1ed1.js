"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,f=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},311:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>h});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"A tour of the Backend"},l=void 0,c={unversionedId:"contributing/tour-of-backend",id:"contributing/tour-of-backend",title:"A tour of the Backend",description:"The journey of a HTTP request",source:"@site/docs/contributing/tour-of-backend.md",sourceDirName:"contributing",slug:"/contributing/tour-of-backend",permalink:"/contributing/tour-of-backend",editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/tour-of-backend.md",tags:[],version:"current",frontMatter:{title:"A tour of the Backend"},sidebar:"Contributing",previous:{title:"A tour of the Editor",permalink:"/contributing/tour-of-editor"},next:{title:"Repository directory structure",permalink:"/contributing/repo-layout"}},d=[{value:"The journey of a HTTP request",id:"the-journey-of-a-http-request",children:[],level:2},{value:"Traces",id:"traces",children:[],level:2},{value:"Serialization",id:"serialization",children:[],level:2},{value:"<code>Libexecution</code> and the editor",id:"libexecution-and-the-editor",children:[],level:2},{value:"Standard library",id:"standard-library",children:[],level:2}],u={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"the-journey-of-a-http-request"},"The journey of a HTTP request"),(0,i.kt)("p",null,"When the users of a Dark developer's app (we refer to them as \"grand-users\")\nmakes a request to a Dark app, it makes it's way directly to the developer's\neditor."),(0,i.kt)("p",null,"Here's the journey it takes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Google Load Balancer"),(0,i.kt)("li",{parentName:"ul"},"Nginx sidecar container"),(0,i.kt)("li",{parentName:"ul"},"the Dark\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/blob/main/fsharp-backend/src/BwdServer/Server.fs"},"BwdServer"),"\n(",(0,i.kt)("inlineCode",{parentName:"li"},"bwd")," stands for ",(0,i.kt)("inlineCode",{parentName:"li"},"BuiltWithDark"),")"),(0,i.kt)("li",{parentName:"ul"},"our webserver is built on top of ASP.NET, and it directs the request to\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/blob/main/fsharp-backend/src/BwdServer/Server.fs"},"BwdServer"),".runDarkHandler."),(0,i.kt)("li",{parentName:"ul"},"if it's a 404, the trace is stored in the ",(0,i.kt)("inlineCode",{parentName:"li"},"stored_events_v2")," table and sent to\nthe client as a 404 via ",(0,i.kt)("a",{parentName:"li",href:"https://pusher.com"},"Pusher")),(0,i.kt)("li",{parentName:"ul"},"if a page is found, the request path, body, and headers are passed to the\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/blob/main/fsharp-backend/src/HttpMiddleware/MiddlewareV0.fs"},"HttpMiddleware"),",\nwhich creates the ",(0,i.kt)("inlineCode",{parentName:"li"},"request")," parameter, run the code, and converts the response\ninto the correct formats."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/blob/main/fsharp-backend/src/LibExecution/Interpreter.fs"},(0,i.kt)("inlineCode",{parentName:"a"},"Interpreter.eval")),"\nruns the Dark code, saving parts of the trace as it goes. Input values,\nfunction arguments and return values are saved in Postgres tables\n",(0,i.kt)("inlineCode",{parentName:"li"},"stored_events_v2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"function_arguments")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"function_results_v2")),(0,i.kt)("li",{parentName:"ul"},"A trace is pushed to ",(0,i.kt)("a",{parentName:"li",href:"https://pusher.com"},"Pusher"),", which forwards it to the\neditor, where it appears as a dot on the canvas."),(0,i.kt)("li",{parentName:"ul"},"When a user clicks on the trace, the trace is loaded from the server. A web\nworker named\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/blob/main/client/workers/Fetcher.res"},(0,i.kt)("inlineCode",{parentName:"a"},"Fetcher")),"\nfetches the trace in the background, decodes it, and sends the value to the\neditor. On the server-side, it is fetched from the\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/blob/main/fsharp-backend/src/ApiServer/Api.fs"},"ApiServer"),".")),(0,i.kt)("h2",{id:"traces"},"Traces"),(0,i.kt)("p",null,'A trace is a combination of an event (referred to in Dark as an "input value"\nand in the code as ',(0,i.kt)("inlineCode",{parentName:"p"},"StoredEvent"),"), and the arguments and results of functions\ncalled during the trace:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"event refers to the HTTP request, worker event, or in the case of Crons, an\nempty value, that is used to trigger the event handler"),(0,i.kt)("li",{parentName:"ul"},"the trace includes information for every call to every function during the\nevent. For built-in functions, we record a hash of the arguments and the\nresult. For canvas functions, we also store the arguments to the function.")),(0,i.kt)("h2",{id:"serialization"},"Serialization"),(0,i.kt)("p",null,"Dark programs are directly serialized in our database, and loaded for any\nrequests that come in. Each change in the editor creates an Op for that toplevel\n(DB, handler, function, etc). That is appended to the list of previous ops for\nthat handler, and serialized into the DB in an efficient binary format."),(0,i.kt)("p",null,"The ops contain the entire handler or function, which is much slower than it\ncould be (part of the reason that ",(0,i.kt)("inlineCode",{parentName:"p"},"undo")," is so slow."),(0,i.kt)("p",null,"We cache/denormalize the current code for each handler, which makes requests\nfast."),(0,i.kt)("p",null,"One downside of this is that we have to be very careful what changes we make the\nDark AST definition. There is a doc in the dark repo discussing this in more\ndetail."),(0,i.kt)("h2",{id:"libexecution-and-the-editor"},(0,i.kt)("inlineCode",{parentName:"h2"},"Libexecution")," and the editor"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/tree/main/fsharp-backend/src/LibExecution"},(0,i.kt)("inlineCode",{parentName:"a"},"LibExecution")),'\nis the "execution engine" of Dark. The same code is compiled to native code to\nrespond to HTTP handlers, and is also compiled to WASM to run in the editor.'),(0,i.kt)("p",null,"The play button on functions and on handlers executes the code on the server,\nreturning updates to the trace of those functions. In all other cases, the\neditor runs code in the JS version, filling in the results of the functions it\ndoesn't have access to (e.g. DB calls) from the traces."),(0,i.kt)("h2",{id:"standard-library"},"Standard library"),(0,i.kt)("p",null,"The standard library is split between\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/tree/main/fsharp-backend/src/LibExecutionStdLib"},(0,i.kt)("inlineCode",{parentName:"a"},"fsharp-backend/src/LibExecutionStdLib")),"\n(for functions which are available on the client and backend) and\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/tree/main/fsharp-backend/src/BackendOnlyStdLib"},(0,i.kt)("inlineCode",{parentName:"a"},"fsharp-backend/src/BackendOnlyStdLib")),"\nfor functions which are only available on the backend (typically functions where\nwe cannot compile some library to JS)."))}h.isMDXComponent=!0}}]);