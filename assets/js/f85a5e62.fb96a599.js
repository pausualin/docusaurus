"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["25647"],{93373:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"index","title":"Docs tests","description":"This Docusaurus docs plugin instance is meant to test fancy edge-cases that regular unit tests don\'t really cover.","source":"@site/_dogfooding/_docs tests/index.mdx","sourceDirName":".","slug":"/","permalink":"/tests/docs/","draft":false,"unlisted":true,"tags":[{"inline":false,"label":"A","permalink":"/tests/docs/tags/a","description":"Description for tag a"},{"inline":false,"label":"Label for tag b","permalink":"/tests/docs/tags/b"},{"inline":false,"label":"C","permalink":"/tests/docs/tags/permalink-for-tag-c"}],"version":"current","lastUpdatedBy":"Kenneth Ormandy","lastUpdatedAt":1738257873000,"frontMatter":{"slug":"/","tags":["a","b","c"],"unlisted":true,"id":"index","sidebar_label":"Docs tests"},"sidebar":"sidebar"}'),r=n(85893),l=n(80980),i=n(78042);let a={slug:"/",tags:["a","b","c"],unlisted:!0,id:"index",sidebar_label:"Docs tests"},o="Docs tests",c={},d=[];function u(e){let t={a:"a",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"docs-tests",children:"Docs tests"})}),"\n",(0,r.jsx)(t.p,{children:"This Docusaurus docs plugin instance is meant to test fancy edge-cases that regular unit tests don't really cover."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/tests/docs",children:"/tests/docs"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/tests/blog",children:"/tests/blog"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/tests/pages",children:"/tests/pages"})}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n","\n",(0,r.jsx)(i.Z,{})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}h.displayName="MDXContent(_dogfooding/_docs tests/index.mdx)"},78042:function(e,t,n){n.d(t,{Z:()=>j});var s=n(85893);n(67294);var r=n(90496),l=n(85921),i=n(35363),a=n(11660),o=n(82095),c=n(77827),d=n(57922);let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h(e){let{href:t,children:n}=e;return(0,s.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:l,description:i}=e;return(0,s.jsxs)(h,{href:t,children:[(0,s.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:l,children:[n," ",l]}),i&&(0,s.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:i,children:i})]})}function m(e){let{item:t}=e,n=(0,l.LM)(t),r=function(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,s.jsx)(f,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??r(t.items.length)}):null}function p(e){let{item:t}=e,n=(0,o.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,l.xz)(t.docId??void 0);return(0,s.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,s.jsx)(p,{item:t});case"category":return(0,s.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,l.Ok)();return(0,s.jsx)(j,{items:n,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,s.jsx)(x,{...e});let i=(0,l.MN)(t);return(0,s.jsx)("section",{className:(0,r.Z)("row",n),children:i.map((e,t)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(g,{item:e})},t))})}},11660:function(e,t,n){n.d(t,{c:()=>o});var s=n(67294),r=n(8156);let l=["zero","one","two","few","many","other"];function i(e){return l.filter(t=>e.includes(t))}let a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,s.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),a}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);let r=n.select(t);return s[Math.min(n.pluralForms.indexOf(r),s.length-1)]})(n,t,e)}}},80980:function(e,t,n){n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);let r={},l=s.createContext(r);function i(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);