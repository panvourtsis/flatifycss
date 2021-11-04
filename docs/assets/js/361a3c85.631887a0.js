"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[819],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2695:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(7462),r=n(3366),i=n(7294),a=["children"];function l(e){var t=e.children,n=(0,r.Z)(e,a);return i.createElement("iframe",(0,o.Z)({width:"100%",className:"docus-preview-box",srcDoc:t},n))}},2544:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=n(2695),l=["components"],c={title:"Blockquote"},s=void 0,u={unversionedId:"content/blockquote",id:"content/blockquote",isDocsHomePage:!1,title:"Blockquote",description:"Default",source:"@site/docs/content/blockquote.mdx",sourceDirName:"content",slug:"/content/blockquote",permalink:"/FlatifyCSS/docs/content/blockquote",editUrl:"https://github.com/amir2mi/FlatifyCSS/tree/master/website/docs/content/blockquote.mdx",tags:[],version:"current",frontMatter:{title:"Blockquote"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/FlatifyCSS/docs/intro"},next:{title:"Figure and image",permalink:"/FlatifyCSS/docs/content/figure"}},p=[{value:"Default",id:"default",children:[],level:3},{value:"Large",id:"large",children:[],level:3},{value:"Customization",id:"customization",children:[],level:3}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"default"},"Default"),(0,i.kt)("p",null,"To write a quote Flatify CSS gives two types of ",(0,i.kt)("inlineCode",{parentName:"p"},"<blockquote>"),"s, first one is a default blockquote:"),(0,i.kt)(a.Z,{height:"180px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Quote</title> </head> <body> <blockquote style="margin-bottom: 0"> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <cite>John Doe</cite> </blockquote>         </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},"<blockquote>\n    <p>\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam\n        malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.\n    </p>\n    <cite>John Doe</cite>\n</blockquote>\n")),(0,i.kt)("h3",{id:"large"},"Large"),(0,i.kt)("p",null,"To have a large blockquote add ",(0,i.kt)("inlineCode",{parentName:"p"},".large")," to the blockquote."),(0,i.kt)(a.Z,{height:"250px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Quote</title> </head> <body> <blockquote class="large" style="margin-bottom: 0"> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <cite>John Doe</cite> </blockquote>         </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="index.html"',"{1}":!0,title:'"index.html"'},'<blockquote class="large">...</blockquote>\n')),(0,i.kt)("h3",{id:"customization"},"Customization"),(0,i.kt)("p",null,"Blockquotes can have different accent colors or use ",(0,i.kt)("a",{parentName:"p",href:"/docs/helpers/color-setters"},"color setter classes"),"."),(0,i.kt)(a.Z,{height:"565px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Quote</title> <style> .my-blockquote{ --flatify__blockquote-accent-color: #ff9600; } </style> </head> <body> <blockquote class="my-blockquote"> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <cite>John Doe</cite> </blockquote> <blockquote class="style-green"> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <cite>John Doe</cite> </blockquote> <blockquote class="large style-red" style="margin-bottom: 0"> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <cite>John Doe</cite> </blockquote> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="index.html"',"{1}":!0,title:'"index.html"'},'<blockquote class="my-blockquote">...</blockquote>\n\n<blockquote class="style-green">...</blockquote>\n\n<blockquote class="large style-red">...</blockquote>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'{2} title="style.css"',"{2}":!0,title:'"style.css"'},".my-blockquote {\n    --flatify__blockquote-accent-color: #ff9600;\n}\n")))}d.isMDXComponent=!0}}]);