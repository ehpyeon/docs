"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9817],{28507:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(67294),i=a(29548),r=a(39960),l=a(86010);const s="cardContainer_woeA",o="cardContainerLink_iOSj",c="cardTitle_pNjP",m="cardDescription_qC_k";var d=a(13919);function u(e){var t=e.href,a=e.children,i=(0,l.Z)("card margin-bottom--lg padding--lg",s,t&&o);return t?n.createElement(r.Z,{href:t,className:i},a):n.createElement("div",{className:i},a)}function v(e){var t=e.href,a=e.icon,i=e.title,r=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,l.Z)("text--truncate",c),title:i},a," ",i),n.createElement("div",{className:(0,l.Z)("text--truncate",m),title:r},r))}function h(e){var t=e.item,a=(0,i.Wl)(t);return n.createElement(v,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.items.length+" items"})}function g(e){var t,a=e.item,r=(0,d.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(v,{href:a.href,icon:r,title:a.label,description:null==l?void 0:l.description})}function E(e){var t=e.item;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items;return n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6"},n.createElement(E,{item:e}))})))}var p=a(95214),f=a(41217),Z=a(94474),N=a(27597),k=a(39649),L=a(44996);const _="generatedIndexPage_vzzw",T="title_qBh7";function w(e){var t=e.categoryGeneratedIndex,a=(0,i.jA)();return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:t.title,description:t.description,keywords:t.keywords,image:(0,L.Z)(t.image)}),n.createElement("div",{className:_},n.createElement(Z.Z,null),n.createElement(N.Z,null),n.createElement("header",null,n.createElement(k.Z,{as:"h1",className:T},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("main",{className:"margin-top--lg"},n.createElement(b,{items:a.items})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(p.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}},95214:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),i=a(67294),r=a(95999),l=a(39960);const s=function(e){var t=e.permalink,a=e.title,n=e.subLabel;return i.createElement(l.Z,{className:"pagination-nav__link",to:t},n&&i.createElement("div",{className:"pagination-nav__sublabel"},n),i.createElement("div",{className:"pagination-nav__label"},a))};const o=function(e){var t=e.previous,a=e.next;return i.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},i.createElement("div",{className:"pagination-nav__item"},t&&i.createElement(s,(0,n.Z)({},t,{subLabel:i.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),i.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&i.createElement(s,(0,n.Z)({},a,{subLabel:i.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},27597:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),i=a(29548),r=a(86010);function l(e){var t=e.className,a=(0,i.E6)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,i.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}},94474:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),i=a(52263),r=a(39960),l=a(95999),s=a(65551),o=a(29548),c=a(86010);var m={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function d(e){var t=m[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,i=e.onClick;return n.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:i},n.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.className,r=e.versionMetadata,l=(0,i.Z)().siteConfig.title,m=(0,s.useActivePlugin)({failfast:!0}).pluginId,v=(0,o.J)(m).savePreferredVersionName,h=(0,s.useDocVersionSuggestions)(m),g=h.latestDocSuggestion,E=h.latestVersionSuggestion,b=null!=g?g:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,c.Z)(a,o.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(d,{siteTitle:l,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:E.label,to:b.path,onClick:function(){return v(E.name)}})))}function h(e){var t=e.className,a=(0,o.E6)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},39649:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),i=a(63366),r=a(67294),l=a(86010),s=a(95999),o=a(29548);const c="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ";var d=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,i.Z)(e,d),h=(0,o.LU)().navbar.hideOnScroll;return u?r.createElement(a,(0,n.Z)({},v,{className:(0,l.Z)("anchor",(t={},t[m]=h,t[c]=!h,t)),id:u}),v.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(a,v)}function h(e){var t=e.as,a=(0,i.Z)(e,u);return"h1"===t?r.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):r.createElement(v,(0,n.Z)({as:t},a))}}}]);