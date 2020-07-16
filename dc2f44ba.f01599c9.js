(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(11),r=(n(0),n(241)),i={id:"custom-domains",title:"Use a Custom Domain",sidebar_label:"Use a Custom Domain"},c={id:"custom-domains",isDocsHomePage:!1,title:"Use a Custom Domain",description:"Your backend endpoints are always available at",source:"@site/docs/custom-domains.md",permalink:"/docs/custom-domains",sidebar_label:"Use a Custom Domain",sidebar:"docs",previous:{title:"Host Static Assets",permalink:"/docs/static-assets"},next:{title:"CORS",permalink:"/docs/cors"}},s=[{value:"How to set it up",id:"how-to-set-it-up",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"I&#39;ve set up a CNAME but I still don&#39;t see <code>&lt;your_canvas_name&gt;.darkcustomdomain.com</code> in the results from <code>dig</code>!",id:"ive-set-up-a-cname-but-i-still-dont-see-your_canvas_namedarkcustomdomaincom-in-the-results-from-dig",children:[]},{value:"My DNS is set up correctly, but I&#39;m getting an invalid certificate warning when trying to visit my custom domain via <code>https</code>",id:"my-dns-is-set-up-correctly-but-im-getting-an-invalid-certificate-warning-when-trying-to-visit-my-custom-domain-via-https",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Your backend endpoints are always available at\n",Object(r.b)("inlineCode",{parentName:"p"},"<your_canvas_name>.builtwithdark.com/*"),"."),Object(r.b)("p",null,"If you'd like, you can additionally use a custom domain like\n",Object(r.b)("inlineCode",{parentName:"p"},"www.myawesomedarkservice.com")," or ",Object(r.b)("inlineCode",{parentName:"p"},"api.myawesomedarkservice.com")," to serve your\nendpoints!"),Object(r.b)("p",null,"We'll manage SSL for you - no need to buy your own certificate to make your site\nor service available over ",Object(r.b)("inlineCode",{parentName:"p"},"https"),"."),Object(r.b)("h2",{id:"how-to-set-it-up"},"How to set it up"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set up a ",Object(r.b)("inlineCode",{parentName:"p"},"CNAME")," record that points from your desired domain to\n",Object(r.b)("inlineCode",{parentName:"p"},"<your_canvas_name>.darkcustomdomain.com"),". For example, if your canvas is\ncalled ",Object(r.b)("inlineCode",{parentName:"p"},"ellen-demo"),", point your ",Object(r.b)("inlineCode",{parentName:"p"},"CNAME")," at ",Object(r.b)("inlineCode",{parentName:"p"},"ellen-demo.darkcustomdomain.com"),".\nThe specifics for this step depends on how you manage your DNS settings, but\nhere's what it might look like on Cloudflare:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/customdomain/cname-example.png",alt:"Setting a CNAME on Cloudflare"}))),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Note"),": You ",Object(r.b)("em",{parentName:"p"},"cannot")," use an apex domain like ",Object(r.b)("inlineCode",{parentName:"p"},"myawesomedarkservice.com"),".\nUsing ",Object(r.b)("inlineCode",{parentName:"p"},"www.myawesomedarkservice.com")," is the usual way, although you can use\n",Object(r.b)("inlineCode",{parentName:"p"},"app"),", ",Object(r.b)("inlineCode",{parentName:"p"},"api"),", or another subdomain instead of ",Object(r.b)("inlineCode",{parentName:"p"},"www"),". This is because apex\n",Object(r.b)("inlineCode",{parentName:"p"},"CNAME"),"s aren't supported by the DNS spec, and ",Object(r.b)("inlineCode",{parentName:"p"},"A")," records remove some of our\noptions for providing stable and resilient infrastructure. You can read\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.netlify.com/blog/2017/02/28/to-www-or-not-www/"}),"this Netlify post"),"\nfor more information."),Object(r.b)("p",{parentName:"li"},"If you wish, you can additionally set up an ",Object(r.b)("inlineCode",{parentName:"p"},"A")," record pointing the apex\n(e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"myawesomedarkservice.com"),") to ",Object(r.b)("inlineCode",{parentName:"p"},"35.227.208.117"),". We cannot currently\nprovide an SSL cert for that, but we can redirect to your main subdomain\n(which is usually ",Object(r.b)("inlineCode",{parentName:"p"},"www"),"). If your DNS provider supports ",Object(r.b)("inlineCode",{parentName:"p"},"ALIAS")," records (like\n",Object(r.b)("inlineCode",{parentName:"p"},"CNAME"),", but permitted on an apex), that also works - though again, for\nredirects, not SSL certs.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Double-check that DNS has resolved. One way to test this is with the ",Object(r.b)("inlineCode",{parentName:"p"},"dig"),"\ntool on the command line. If everything is ready, you should see something\nlike this:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"})," $dig api.myawesomedarkservice.com\n # ...\n ;; ANSWER SECTION:\n api.myawesomedarkservice.com.    300    IN    CNAME    ellen-demo.darkcustomdomain.com.\n ellen-demo.darkcustomdomain.com. 300 IN A 35.197.124.122\n # ...\n")),Object(r.b)("p",{parentName:"li"},"Another way to check is with a service like\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://dnschecker.org/"}),"https://dnschecker.org/"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once DNS resolves, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"support"}),"contact us")," with your domain and canvas, and\nwe'll set up an SSL cert and the appropriate redirects from ",Object(r.b)("inlineCode",{parentName:"p"},"http")," to ",Object(r.b)("inlineCode",{parentName:"p"},"https"),"\non our end."))),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("h3",{id:"ive-set-up-a-cname-but-i-still-dont-see-your_canvas_namedarkcustomdomaincom-in-the-results-from-dig"},"I've set up a CNAME but I still don't see ",Object(r.b)("inlineCode",{parentName:"h3"},"<your_canvas_name>.darkcustomdomain.com")," in the results from ",Object(r.b)("inlineCode",{parentName:"h3"},"dig"),"!"),Object(r.b)("p",null,"We've seen this happen for develops using proxies like Cloudflare in front of\ntheir domains. For example, you might see:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ dig api.myawesomedarkservice.com\n# ...\n;; ANSWER SECTION:\napi.myawesomedarkservice.com.    300    IN    A    104.24.118.127\napi.myawesomedarkservice.com.    300    IN    A    104.24.119.127\n# ...\n")),Object(r.b)("p",null,'To resolve this, turn off the proxy. On Cloudflare, you can press this button to\nswitch from "Proxied" to "DNS only" mode:\n',Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/customdomain/cloudflare-proxy.png",alt:'Turning off the Cloudflare proxy in favor of "DNS only"'}))),Object(r.b)("h3",{id:"my-dns-is-set-up-correctly-but-im-getting-an-invalid-certificate-warning-when-trying-to-visit-my-custom-domain-via-https"},"My DNS is set up correctly, but I'm getting an invalid certificate warning when trying to visit my custom domain via ",Object(r.b)("inlineCode",{parentName:"h3"},"https")),Object(r.b)("p",null,"If this happens we likely haven't set up an SSL certificate for you yet (see\nstep 3 above). In any case, please ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"support"}),"contact us")," with your domain and\ncanvas."))}l.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);