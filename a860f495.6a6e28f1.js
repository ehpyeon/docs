(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(11),a=(n(0),n(242)),o={title:"Making a Pull Request"},l={id:"contributing/making-a-pull-request",isDocsHomePage:!1,title:"Making a Pull Request",description:"Code Checklist",source:"@site/docs/contributing/making-a-pull-request.md",permalink:"/contributing/making-a-pull-request",sidebar:"Contributing",previous:{title:"Troubleshooting",permalink:"/contributing/troubleshooting"}},c=[{value:"Code Checklist",id:"code-checklist",children:[]},{value:"Writing a successful Pull Request message",id:"writing-a-successful-pull-request-message",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"code-checklist"},"Code Checklist"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Never change an existing Dark standard library function. Make a new one (with\na new version) and deprecate the old one. It is however safe to fix the type\nsignature on an existing function, or to change its docstring."),Object(a.b)("li",{parentName:"ul"},"Don't change existing serialized types, as that breaks the serializer.\nSerialized types are in ",Object(a.b)("inlineCode",{parentName:"li"},"Serialization_format.ml")," and have\n",Object(a.b)("inlineCode",{parentName:"li"},"[@@deriving ... bin_io]")," next to their type definitions."),Object(a.b)("li",{parentName:"ul"},"The code rendering step (",Object(a.b)("inlineCode",{parentName:"li"},"FluidEditorView.toHtml"),") is extremely performance\nsensitive, and it's important that we don't add any steps that checks the\nentire AST on each token. Doing passes of the AST at the start (not in the\nloop) is fine.")),Object(a.b)("h2",{id:"writing-a-successful-pull-request-message"},"Writing a successful Pull Request message"),Object(a.b)("p",null,"When writing a pull request, there are some steps you can take to make it easier\nto accept the contribution."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"explain the problem you're solving. If this is explained elsewhere, link to it"),Object(a.b)("li",{parentName:"ul"},"explain how your solution addresses the problem"),Object(a.b)("li",{parentName:"ul"},"highlight any choices you've made in the implementation"),Object(a.b)("li",{parentName:"ul"},"make clear what the product and user-facing changes are, especially if it\ncould break anything for existing users"),Object(a.b)("li",{parentName:"ul"},"if the change is in the editor, include a before/after screenshot or GIF")),Object(a.b)("p",null,"Highlighting these will make it much easier to know that this code is safe. The\npull request template asks for these."))}u.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(f,l(l({ref:t},s),{},{components:n})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);