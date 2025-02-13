"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["37251"],{71317:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>a,toc:()=>u,contentTitle:()=>l});var r=JSON.parse('{"id":"release-process","title":"Release process","description":"Let\'s see how Docusaurus handles versioning, releases and breaking changes.","source":"@site/community/5-release-process.mdx","sourceDirName":".","slug":"/release-process","permalink":"/community/release-process","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/community/5-release-process.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1739456991000,"sidebarPosition":5,"frontMatter":{},"sidebar":"community","previous":{"title":"Canary releases","permalink":"/community/canary"}}'),t=s(85893),i=s(80980),o=s(21143);let c={},l="Release process",a={},u=[{value:"Semantic versioning",id:"semantic-versioning",level:2},{value:"Major versions",id:"major-versions",level:3},{value:"Minor versions",id:"minor-versions",level:3},{value:"Patch versions",id:"patch-versions",level:3},{value:"Versions",id:"versions",level:2},{value:"Stable version",id:"stable-version",level:3},{value:"Next version",id:"next-version",level:3},{value:"Public API surface",id:"public-api-surface",level:2},{value:"Core public API",id:"core-public-api",level:3},{value:"Theming public API",id:"theming-public-api",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"release-process",children:"Release process"})}),"\n",(0,t.jsxs)(n.p,{children:["Let's see how Docusaurus handles ",(0,t.jsx)(n.strong,{children:"versioning, releases and breaking changes"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This topic is particularly important for highly customized sites that may have difficulties to upgrade."})}),"\n",(0,t.jsx)(n.h2,{id:"semantic-versioning",children:"Semantic versioning"}),"\n",(0,t.jsxs)(n.p,{children:["Docusaurus versioning is based on the ",(0,t.jsx)(n.code,{children:"major.minor.patch"})," scheme and respects ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Respecting Semantic Versioning is important for multiple reasons:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It ",(0,t.jsx)(n.strong,{children:"guarantees simple minor version upgrades"}),", as long as you only use the ",(0,t.jsx)(n.a,{href:"/community/release-process#public-api-surface",children:"public API"})]}),"\n",(0,t.jsx)(n.li,{children:"It follows front-end ecosystem conventions"}),"\n",(0,t.jsx)(n.li,{children:"A new major version is an opportunity to thoroughly document breaking changes"}),"\n",(0,t.jsx)(n.li,{children:"A new major/minor version is an opportunity to communicate new features through a blog post"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Releasing Docusaurus 2.0 took a very long time. From now on, Docusaurus will ",(0,t.jsx)(n.strong,{children:"release new major versions more regularly"}),". In practice, you can expect a new major version every 2\u20134 months."]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://tom.preston-werner.com/2022/05/23/major-version-numbers-are-not-sacred.html",children:"Major version numbers are not sacred"}),", but we still group breaking changes together and avoid releasing major versions too often."]})]}),"\n",(0,t.jsx)(n.h3,{id:"major-versions",children:"Major versions"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"major"})," version number is incremented on ",(0,t.jsx)(n.strong,{children:"every breaking change"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Whenever a new major version is released, we publish:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["a blog post with feature highlights, major bug fixes, ",(0,t.jsx)(n.strong,{children:"breaking changes, and upgrade instructions"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"an exhaustive changelog entry"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Read our ",(0,t.jsx)(n.a,{href:"#public-api-surface",children:"public API surface"})," section to clearly understand what we consider as a breaking change."]})}),"\n",(0,t.jsx)(n.h3,{id:"minor-versions",children:"Minor versions"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"minor"})," version number is incremented on every significant retro-compatible change."]}),"\n",(0,t.jsx)(n.p,{children:"Whenever a new minor version is released, we publish:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a blog post with a list of feature highlights and major bug fixes"}),"\n",(0,t.jsx)(n.li,{children:"an exhaustive changelog entry"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you only use our ",(0,t.jsx)(n.a,{href:"#public-api-surface",children:"public API surface"}),", you should be able to upgrade in no time!"]})}),"\n",(0,t.jsx)(n.h3,{id:"patch-versions",children:"Patch versions"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"patch"})," version number is incremented on bugfixes releases."]}),"\n",(0,t.jsx)(n.p,{children:"Whenever a new patch version is released, we publish:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"an exhaustive changelog entry"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"versions",children:"Versions"}),"\n","\n",(0,t.jsx)(n.p,{children:"The Docusaurus team is usually working on 2 major versions at the same time:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Docusaurus ",(0,t.jsx)(o.Fr,{})]}),": the ",(0,t.jsx)(n.strong,{children:"stable"})," version, on the ",(0,t.jsx)(o.Zl,{})," branch"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Docusaurus ",(0,t.jsx)(o.CW,{})]}),": the ",(0,t.jsx)(n.strong,{children:"next"})," version, on the ",(0,t.jsx)(o.mq,{})," branch"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(o.Zl,{})," branch is created just before releasing the first v",(0,t.jsx)(o.Fr,{})," release candidate."]})}),"\n",(0,t.jsx)(n.h3,{id:"stable-version",children:"Stable version"}),"\n",(0,t.jsxs)(n.p,{children:["The stable version (v",(0,t.jsx)(o.Fr,{}),", on ",(0,t.jsx)(o.Zl,{}),") is recommended for most Docusaurus users."]}),"\n",(0,t.jsxs)(n.p,{children:["We regularly backport retro-compatible features, bug and security fixes from ",(0,t.jsx)(o.mq,{})," to ",(0,t.jsx)(o.Zl,{})," with ",(0,t.jsx)(n.code,{children:"git cherry-pick"})," to make them available to those not ready for the next version."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["After a new stable version has been released, the former stable version will continue to receive support only for ",(0,t.jsx)(n.strong,{children:"major security issues"})," for ",(0,t.jsx)(n.strong,{children:"3 months"}),". Otherwise, all features will be frozen and non-critical bugs will not be fixed."]}),(0,t.jsx)(n.p,{children:"It is recommended to upgrade within that time frame to the new stable version."})]}),"\n",(0,t.jsx)(n.h3,{id:"next-version",children:"Next version"}),"\n",(0,t.jsxs)(n.p,{children:["The next version (v",(0,t.jsx)(o.CW,{}),", on ",(0,t.jsx)(o.mq,{}),") is the version the Docusaurus team is currently working on."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(o.mq,{})," branch is the ",(0,t.jsx)(n.strong,{children:"default target branch"})," for all pull requests, including core team and external contributions."]}),"\n",(0,t.jsxs)(n.p,{children:["This version is recommended for ",(0,t.jsx)(n.strong,{children:"early adopters"})," that want to use the latest Docusaurus features as soon as possible. It is also a good way to help us by reporting bugs and giving some feedback."]}),"\n",(0,t.jsx)(n.p,{children:"There are 3 ways to use the next version:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["with an ",(0,t.jsx)(n.code,{children:"alpha"}),", ",(0,t.jsx)(n.code,{children:"beta"})," or ",(0,t.jsx)(n.code,{children:"rc"})," pre-release"]}),"\n",(0,t.jsxs)(n.li,{children:["with the ",(0,t.jsx)(n.code,{children:"@next"})," npm dist tag for the latest pre-release"]}),"\n",(0,t.jsxs)(n.li,{children:["with a ",(0,t.jsx)(n.a,{href:"/community/canary",children:"canary release"})," for the very latest features"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"The next version passes all our automated tests and is used by the Docusaurus site itself. It is relatively safe: don't be afraid to give it a try."})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"Breaking changes can happen on the next version: detailed upgrade instructions are available in the changelog and pull requests."}),(0,t.jsxs)(n.p,{children:["At the ",(0,t.jsx)(n.code,{children:"beta"})," and ",(0,t.jsx)(n.code,{children:"rc"})," (release candidate) phases, we avoid introducing major breaking changes."]})]}),"\n",(0,t.jsx)(n.h2,{id:"public-api-surface",children:"Public API surface"}),"\n",(0,t.jsxs)(n.p,{children:["Docusaurus commits to respecting Semantic Versioning. This means that whenever changes occur in Docusaurus public APIs and break backward compatibility, we will increment the ",(0,t.jsx)(n.code,{children:"major"})," version number."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Docusaurus guarantees public API retro-compatibility across ",(0,t.jsx)(n.code,{children:"minor"})," versions. Unless you use internal APIs, ",(0,t.jsx)(n.code,{children:"minor"})," version upgrades should be easy."]})}),"\n",(0,t.jsx)(n.p,{children:"We will outline what accounts as the public API surface."}),"\n",(0,t.jsx)(n.h3,{id:"core-public-api",children:"Core public API"}),"\n",(0,t.jsx)(n.p,{children:"\u2705 Our public API includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Docusaurus config"}),"\n",(0,t.jsx)(n.li,{children:"Docusaurus client APIs"}),"\n",(0,t.jsx)(n.li,{children:"Docusaurus CLI"}),"\n",(0,t.jsx)(n.li,{children:"Preset options"}),"\n",(0,t.jsx)(n.li,{children:"Plugin options"}),"\n",(0,t.jsx)(n.li,{children:"Plugin lifecycle APIs"}),"\n",(0,t.jsx)(n.li,{children:"Theme config"}),"\n",(0,t.jsx)(n.li,{children:"Core plugins route component props"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@docusaurus/types"})," TypeScript types","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"We still retain the freedom to make types stricter (which may break type-checking)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u274C Our public API ",(0,t.jsx)(n.strong,{children:"excludes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Docusaurus config ",(0,t.jsx)(n.code,{children:"future"})]}),"\n",(0,t.jsxs)(n.li,{children:["All features prefixed by ",(0,t.jsx)(n.code,{children:"experimental_"})," or ",(0,t.jsx)(n.code,{children:"unstable_"})]}),"\n",(0,t.jsxs)(n.li,{children:["All features prefixed by ",(0,t.jsx)(n.code,{children:"v<MajorVersion>_"})," (",(0,t.jsx)(n.code,{children:"v6_"})," ",(0,t.jsx)(n.code,{children:"v7_"}),", etc.)"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"For non-theme APIs, any documented API is considered public (and will be stable); any undocumented API is considered internal."})}),"\n",(0,t.jsxs)(n.p,{children:['An API being "stable" means if you increment the patch or minor version of your Docusaurus installation without any other change, running ',(0,t.jsx)(n.code,{children:"docusaurus start"})," or ",(0,t.jsx)(n.code,{children:"docusaurus build"})," should not throw an error."]}),"\n",(0,t.jsx)(n.h3,{id:"theming-public-api",children:"Theming public API"}),"\n",(0,t.jsx)(n.p,{children:"Docusaurus has a very flexible theming system:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can use custom CSS"}),"\n",(0,t.jsxs)(n.li,{children:["You can ",(0,t.jsx)(n.a,{href:"/docs/swizzling",children:"swizzle"})," any React theme component"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This system also implicitly creates a very large API surface. To be able to move fast and improve Docusaurus, we can't guarantee retro-compatibility."}),"\n",(0,t.jsx)(n.p,{children:"\u2705 Our public theming API includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/styling-layout#theme-class-names",children:"Theme class names"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/styling-layout#styling-your-site-with-infima",children:"Infima"})," class names and CSS variables"]}),"\n",(0,t.jsxs)(n.li,{children:["React components that are ",(0,t.jsx)(n.a,{href:"/docs/swizzling#what-is-safe-to-swizzle",children:"safe to swizzle"})]}),"\n",(0,t.jsx)(n.li,{children:"The theme user experience"}),"\n",(0,t.jsx)(n.li,{children:"Browser support"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"You may not be able to achieve your site customization through this public API."}),(0,t.jsxs)(n.p,{children:["In this case, please ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/discussions/5468",children:"report your customization use case"})," and we will figure out how to expand our public API."]})]}),"\n",(0,t.jsxs)(n.p,{children:["\u274C Our public theming API ",(0,t.jsx)(n.strong,{children:"excludes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The DOM structure"}),"\n",(0,t.jsxs)(n.li,{children:["CSS module class names with a hash suffix (usually targeted with ",(0,t.jsx)(n.code,{children:"[class*='myClassName']"})," selectors)"]}),"\n",(0,t.jsxs)(n.li,{children:["React components that are ",(0,t.jsx)(n.a,{href:"/docs/swizzling#what-is-safe-to-swizzle",children:"unsafe or forbidden to swizzle"})]}),"\n",(0,t.jsxs)(n.li,{children:["React components that import from ",(0,t.jsx)(n.code,{children:"@docusaurus/theme-common/internal"})]}),"\n",(0,t.jsx)(n.li,{children:"The exact visual appearance of the theme"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.a,{href:"/docs/swizzling",children:"swizzling"})," safe components, you might encounter components that import undocumented APIs from ",(0,t.jsx)(n.code,{children:"@docusaurus/theme-common"})," (without the ",(0,t.jsx)(n.code,{children:"/internal"})," subpath)."]}),(0,t.jsx)(n.p,{children:'We still maintain retro-compatibility on those APIs (hence they are marked as "safe"), but we don\'t encourage a direct usage.'})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},56497:function(e,n,s){s.d(n,{Z:()=>i});var r=s(85893);s(67294);var t=s(71607);function i(e){let{children:n,fallback:s}=e;return(0,t.Z)()?(0,r.jsx)(r.Fragment,{children:n?.()}):s??null}},21143:function(e,n,s){s.d(n,{CW:()=>x,FS:()=>y,Fr:()=>j,Hc:()=>w,I1:()=>p,SR:()=>m,UM:()=>v,Zl:()=>f,mC:()=>d,mq:()=>g,rv:()=>k});var r=s(85893),t=s(67294),i=s(99887),o=s(90158),c=s(77827),l=s(35363),a=s(95998);let u=t.createContext(null);function d(e){let{children:n}=e,[s,i]=(0,t.useState)(null),o=(0,t.useRef)(!0);return(0,t.useEffect)(()=>(o.current=!0,()=>{o.current=!1}),[]),(0,t.useEffect)(()=>{fetch("https://registry.npmjs.org/@docusaurus/core").then(e=>e.json()).then(e=>{if(!o.current)return;let n=Object.keys(e.versions).at(-1),s=e.time[n];i({name:n,time:s})})},[]),(0,r.jsx)(u.Provider,{value:s,children:n})}function h(){let e=i.J("default").preferredVersion?.name,n=(0,o.gB)("default"),s=(n.find(e=>"current"!==e.name)??n[0]).name;return e&&"current"!==e?e:s}function p(){let e=(0,t.useContext)(u);return e?(0,r.jsx)("span",{children:(0,r.jsx)(c.Z,{description:"The hint text for the current canary version tag.",values:{canaryVersionName:(0,r.jsx)("b",{children:e.name})},children:"Current: {canaryVersionName}"})}):(0,r.jsx)("span",{children:(0,r.jsx)(c.Z,{description:"An example canary version tag when the actual version can't be fetched.",children:"Example: 0.0.0-4922"})})}function m(){let e=h();return(0,r.jsx)("span",{children:e})}function x(){return(0,r.jsx)("span",{children:3})}function j(){return(0,r.jsx)("span",{children:2})}function b(e){let{branch:n}=e;return(0,r.jsx)(l.Z,{to:`https://github.com/facebook/docusaurus/tree/${n}`,children:(0,r.jsx)("code",{children:n})})}function f(){return(0,r.jsx)(b,{branch:"docusaurus-v2"})}function g(){return(0,r.jsx)(b,{branch:"main"})}function v(e){let{children:n}=e;return(0,t.useContext)(u)?null:n}function y(e){let{children:n}=e;return(0,t.useContext)(u)?n:null}function w(){let e=t.useContext(u)?.name??"0.0.0-4922",n=h();return(0,r.jsx)(a.Z,{language:"diff",children:`-  "@docusaurus/core": "^${n}",
-  "@docusaurus/preset-classic": "^${n}",
+  "@docusaurus/core": "${e}",
+  "@docusaurus/preset-classic": "${e}",
`})}function k(){let e=t.useContext(u)?.time;return e?(0,r.jsx)(c.Z,{values:{time:(0,r.jsx)("b",{children:new Date(e).toLocaleString()})},children:"The latest canary version that's available on npm is published at {time}."}):null}},95998:function(e,n,s){s.d(n,{Z:()=>en});var r,t={};s.r(t),s.d(t,{ButtonExample:()=>C});var i=s(85893),o=s(67294),c=s(90496),l=s(71607),a=s(10075),u=s(77827),d=s(8156),h=s(56497),p=s(85108),m=s(45245),x=s(26378);function j(){let{prism:e}=(0,x.L)(),{colorMode:n}=(0,m.I)(),s=e.theme,r=e.darkTheme||s;return"dark"===n?r:s}var b=s(67490);function f(e){let{children:n}=e;return(0,i.jsx)("div",{className:(0,c.Z)("playgroundHeader_Tvsk"),children:n})}function g(){return(0,i.jsx)("div",{children:"Loading..."})}function v(){return(0,i.jsx)(h.Z,{fallback:(0,i.jsx)(g,{}),children:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.Z,{fallback:e=>(0,i.jsx)(p.Ac,{...e}),children:(0,i.jsx)(a.i5,{})}),(0,i.jsx)(a.IF,{})]})})}function y(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{children:(0,i.jsx)(u.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,i.jsx)("div",{className:"playgroundPreview_mApW",children:(0,i.jsx)(v,{})})]})}function w(){let e=(0,l.Z)();return(0,i.jsx)(a.uz,{className:"playgroundEditor_TySg"},String(e))}function k(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{children:(0,i.jsx)(u.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,i.jsx)(w,{})]})}let I=e=>`${e};`;function B(e){let{children:n,transformCode:s,...r}=e,{siteConfig:{themeConfig:t}}=(0,d.Z)(),{liveCodeBlock:{playgroundPosition:o}}=t,c=j(),l=r.metastring?.includes("noInline")??!1;return(0,i.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,i.jsx)(a.nu,{code:n?.replace(/\n$/,""),noInline:l,transformCode:s??I,theme:c,...r,children:"top"===o?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{}),(0,i.jsx)(k,{})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k,{}),(0,i.jsx)(y,{})]})})})}function C(e){return(0,i.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let A={React:o,...o,...t};var N=s(55951),L=s(6324),T=s.n(L);let P=/title=(?<quote>["'])(?<title>.*?)\1/,S=/\{(?<range>[\d,-]+)\}/,E={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},Z={...E,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},z=Object.keys(E);function _(e,n){let s=e.map(e=>{let{start:s,end:r}=Z[e];return`(?:${s}\\s*(${n.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${s})\\s*$`)}function D(e){let{as:n,...s}=e,r=function(e){let n={color:"--prism-color",backgroundColor:"--prism-background-color"},s={};return Object.entries(e.plain).forEach(e=>{let[r,t]=e,i=n[r];i&&"string"==typeof t&&(s[i]=t)}),s}(j());return(0,i.jsx)(n,{...s,style:r,className:(0,c.Z)(s.className,"codeBlockContainer_jDV4",N.k.common.codeBlock)})}let W={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function R(e){let{children:n,className:s}=e;return(0,i.jsx)(D,{as:"pre",tabIndex:0,className:(0,c.Z)(W.codeBlockStandalone,"thin-scrollbar",s),children:(0,i.jsx)("code",{className:W.codeBlockLines,children:n})})}var O=s(50923);let $={attributes:!0,characterData:!0,childList:!0,subtree:!0};var M=s(7316);let F={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function V(e){let{line:n,classNames:s,showLineNumbers:r,getLineProps:t,getTokenProps:o}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");let l=t({line:n,className:(0,c.Z)(s,r&&F.codeLine)}),a=n.map((e,n)=>(0,i.jsx)("span",{...o({token:e})},n));return(0,i.jsxs)("span",{...l,children:[r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:F.codeLineNumber}),(0,i.jsx)("span",{className:F.codeLineContent,children:a})]}):a,(0,i.jsx)("br",{})]})}var H=s(44771);function q(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function U(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let G={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function J(e){let{code:n,className:s}=e,[r,t]=(0,o.useState)(!1),l=(0,o.useRef)(void 0),a=(0,o.useCallback)(()=>{(0,H.Z)(n),t(!0),l.current=window.setTimeout(()=>{t(!1)},1e3)},[n]);return(0,o.useEffect)(()=>()=>window.clearTimeout(l.current),[]),(0,i.jsx)("button",{type:"button","aria-label":r?(0,u.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,u.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",s,G.copyButton,r&&G.copyButtonCopied),onClick:a,children:(0,i.jsxs)("span",{className:G.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(q,{className:G.copyButtonIcon}),(0,i.jsx)(U,{className:G.copyButtonSuccessIcon})]})})}function Q(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let Y={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function X(e){let{className:n,onClick:s,isEnabled:r}=e,t=(0,u.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:s,className:(0,c.Z)("clean-btn",n,r&&Y.wordWrapButtonEnabled),"aria-label":t,title:t,children:(0,i.jsx)(Q,{className:Y.wordWrapButtonIcon,"aria-hidden":"true"})})}function K(e){var n;let{children:s,className:r="",metastring:t,title:a,showLineNumbers:u,language:d}=e,{prism:{defaultLanguage:h,magicComments:p}}=(0,x.L)(),m=(n=d??function(e){let n=e.split(" ").find(e=>e.startsWith("language-"));return n?.replace(/language-/,"")}(r)??h,n?.toLowerCase()),b=j(),f=function(){let[e,n]=(0,o.useState)(!1),[s,r]=(0,o.useState)(!1),t=(0,o.useRef)(null),i=(0,o.useCallback)(()=>{let s=t.current.querySelector("code");e?s.removeAttribute("style"):(s.style.whiteSpace="pre-wrap",s.style.overflowWrap="anywhere"),n(e=>!e)},[t,e]),c=(0,o.useCallback)(()=>{let{scrollWidth:e,clientWidth:n}=t.current;r(e>n||t.current.querySelector("code").hasAttribute("style"))},[t]);return!function(e,n){let[s,r]=(0,o.useState)(),t=(0,o.useCallback)(()=>{r(e.current?.closest("[role=tabpanel][hidden]"))},[e,r]);(0,o.useEffect)(()=>{t()},[t]),function(e,n){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:$,r=(0,O.zX)(n),t=(0,O.Ql)(s);(0,o.useEffect)(()=>{let n=new MutationObserver(r);return e&&n.observe(e,t),()=>n.disconnect()},[e,r,t])}(s,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(n(),t())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(t,c),(0,o.useEffect)(()=>{c()},[e,c]),(0,o.useEffect)(()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)}),[c]),{codeBlockRef:t,isEnabled:e,isCodeScrollable:s,toggle:i}}(),g=(0,l.Z)(),v=(t?.match(P)?.groups.title??"")||a,{lineClassNames:y,code:w}=function(e,n){let s=e.replace(/\n$/,""),{language:r,magicComments:t,metastring:i}=n;if(i&&S.test(i)){let e=i.match(S).groups.range;if(0===t.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let n=t[0].className;return{lineClassNames:Object.fromEntries(T()(e).filter(e=>e>0).map(e=>[e-1,[n]])),code:s}}if(void 0===r)return{lineClassNames:{},code:s};let o=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"],n);case"jsx":case"tsx":return _(["js","jsBlock","jsx"],n);case"html":return _(["js","jsBlock","html"],n);case"python":case"py":case"bash":return _(["bash"],n);case"markdown":case"md":return _(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return _(["tex"],n);case"lua":case"haskell":return _(["lua"],n);case"sql":return _(["lua","jsBlock"],n);case"wasm":return _(["wasm"],n);case"vb":case"vba":case"visual-basic":return _(["vb","rem"],n);case"vbnet":return _(["vbnet","rem"],n);case"batch":return _(["rem"],n);case"basic":return _(["rem","f90"],n);case"fsharp":return _(["js","ml"],n);case"ocaml":case"sml":return _(["ml"],n);case"fortran":return _(["f90"],n);case"cobol":return _(["cobol"],n);default:return _(z,n)}}(r,t),c=s.split("\n"),l=Object.fromEntries(t.map(e=>[e.className,{start:0,range:""}])),a=Object.fromEntries(t.filter(e=>e.line).map(e=>{let{className:n,line:s}=e;return[s,n]})),u=Object.fromEntries(t.filter(e=>e.block).map(e=>{let{className:n,block:s}=e;return[s.start,n]})),d=Object.fromEntries(t.filter(e=>e.block).map(e=>{let{className:n,block:s}=e;return[s.end,n]}));for(let e=0;e<c.length;){let n=c[e].match(o);if(!n){e+=1;continue}let s=n.slice(1).find(e=>void 0!==e);a[s]?l[a[s]].range+=`${e},`:u[s]?l[u[s]].start=e:d[s]&&(l[d[s]].range+=`${l[d[s]].start}-${e-1},`),c.splice(e,1)}s=c.join("\n");let h={};return Object.entries(l).forEach(e=>{let[n,{range:s}]=e;T()(s).forEach(e=>{h[e]??=[],h[e].push(n)})}),{lineClassNames:h,code:s}}(s,{metastring:t,language:m,magicComments:p}),k=function(e){let{showLineNumbers:n,metastring:s}=e;return"boolean"==typeof n?n?1:void 0:"number"==typeof n?n:function(e){let n=e?.split(" ").find(e=>e.startsWith("showLineNumbers"));if(n)return n.startsWith("showLineNumbers=")?parseInt(n.replace("showLineNumbers=",""),10):1}(s)}({showLineNumbers:u,metastring:t});return(0,i.jsxs)(D,{as:"div",className:(0,c.Z)(r,m&&!r.includes(`language-${m}`)&&`language-${m}`),children:[v&&(0,i.jsx)("div",{className:W.codeBlockTitle,children:v}),(0,i.jsxs)("div",{className:W.codeBlockContent,children:[(0,i.jsx)(M.y$,{theme:b,code:w,language:m??"text",children:e=>{let{className:n,style:s,tokens:r,getLineProps:t,getTokenProps:o}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,c.Z)(n,W.codeBlock,"thin-scrollbar"),style:s,children:(0,i.jsx)("code",{className:(0,c.Z)(W.codeBlockLines,void 0!==k&&W.codeBlockLinesWithNumbering),style:void 0===k?void 0:{counterReset:`line-count ${k-1}`},children:r.map((e,n)=>(0,i.jsx)(V,{line:e,getLineProps:t,getTokenProps:o,classNames:y[n],showLineNumbers:void 0!==k},n))})})}}),g?(0,i.jsxs)("div",{className:W.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,i.jsx)(X,{className:W.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,i.jsx)(J,{className:W.codeButton,code:w})]}):null]})]})}let ee=(r=function(e){let{children:n,...s}=e,r=(0,l.Z)(),t=o.Children.toArray(n).some(e=>(0,o.isValidElement)(e))?n:Array.isArray(n)?n.join(""):n;return(0,i.jsx)("string"==typeof t?K:R,{...s,children:t},String(r))},function(e){return e.live?(0,i.jsx)(B,{scope:A,...e}):(0,i.jsx)(r,{...e})});function en(e){return(0,i.jsx)(ee,{...e})}}}]);