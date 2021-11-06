"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return v}});var n=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(i),v=l,h=m["".concat(o,".").concat(v)]||m[v]||c[v]||a;return i?n.createElement(h,s(s({ref:t},p),{},{components:i})):n.createElement(h,s({ref:t},p))}));function v(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,s=new Array(a);s[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:l,s[1]=r;for(var d=2;d<a;d++)s[d]=i[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1942:function(e,t,i){i.d(t,{Z:function(){return l}});var n=i(7294);function l(e){var t=e.color,i=e.title,l=e.inline,a=e.style,s=e.className;return n.createElement("div",{className:"docus-color-indicator flex-center-y "+(l?"inline":"")},n.createElement("div",{className:"docus-color"+(s?" "+s:""),style:Object.assign({backgroundColor:t},a)}),n.createElement("code",null,i))}},2695:function(e,t,i){i.d(t,{Z:function(){return r}});var n=i(7462),l=i(3366),a=i(7294),s=["children"];function r(e){var t=e.children,i=(0,l.Z)(e,s);return a.createElement("iframe",(0,n.Z)({width:"100%",className:"docus-preview-box",srcDoc:t},i))}},3214:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return v}});var n=i(7462),l=i(3366),a=(i(7294),i(3905)),s=i(2695),r=(i(1942),["components"]),o={title:"Alignment"},d=void 0,p={unversionedId:"helpers/alignment",id:"helpers/alignment",isDocsHomePage:!1,title:"Alignment",description:"Alignment in CSS is a dilemma for beginners, there are tons of ways to achieve it",source:"@site/docs/helpers/alignment.mdx",sourceDirName:"helpers",slug:"/helpers/alignment",permalink:"/flatifycss/docs/helpers/alignment",editUrl:"https://github.com/amir2mi/FlatifyCSS/tree/master/website/docs/helpers/alignment.mdx",tags:[],version:"current",frontMatter:{title:"Alignment"},sidebar:"tutorialSidebar",previous:{title:"Button group",permalink:"/flatifycss/docs/components/button-group"},next:{title:"Color setters",permalink:"/flatifycss/docs/helpers/color-setters"}},c=[{value:"Flex",id:"flex",children:[{value:"Children in a row",id:"children-in-a-row",children:[],level:3},{value:"Children in a column",id:"children-in-a-column",children:[],level:3}],level:2},{value:"Margin",id:"margin",children:[],level:2},{value:"Absolute position",id:"absolute-position",children:[],level:2}],m={toc:c};function v(e){var t=e.components,i=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alignment in CSS is a dilemma for beginners, there are tons of ways to achieve it\nbut helpers classes are life savers."),(0,a.kt)("h2",{id:"flex"},"Flex"),(0,a.kt)("p",null,"Flexbox is a great feature in CSS you can have what you need without any effort though,\nwith vendor prefixes it can be messy if you repeat the main logic all the time,\nit is better to use the helper classes.\nThere are two types of helper classes for vertical and horizontal centering with Flexbox."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For alignment with flexbox, ",(0,a.kt)("strong",{parentName:"p"},"the helper class should be applied to the wrapper element")," so the child itself\nwithout flex parent do nothing."))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".inline-flex")," Treat as inline flex."),(0,a.kt)("h3",{id:"children-in-a-row"},"Children in a row"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".flex-center")," ","[row]"," Alignment for both X and Y axes.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".flex-center-x")," ","[row]"," Alignment for X axis.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".flex-center-y")," ","[row]"," Alignment for Y axis."),(0,a.kt)(s.Z,{height:"265px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Flex alignment classes</title> <style> .box{ width: 200px; height: 200px; margin: 0.5em; border: 0.25em solid; border-radius: 1em; } .box-sm{ width: 25px; height: 25px; margin: 0.5em; border: 0.18em solid; border-radius: 0.5em; } @media screen and (max-width: 650px){ .wrapper { flex-direction: column !important; } } </style> </head> <div class="wrapper flex-center"> <div class="box flex-center style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> <div class="box flex-center-x style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> <div class="box flex-center-y style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> </div>\n</html>\n',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="flex-center style-light">\n    <div class="style-red"></div>\n    <div class="style-green"></div>\n    <div class="style-blue"></div>\n</div>\n\n<div class="flex-center-x style-light">\n    <div class="style-red"></div>\n    <div class="style-green"></div>\n    <div class="style-blue"></div>\n</div>\n\n<div class="flex-center-y style-light">\n    <div class="style-red"></div>\n    <div class="style-green"></div>\n    <div class="style-blue"></div>\n</div>\n')),(0,a.kt)("h3",{id:"children-in-a-column"},"Children in a column"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".flex-column-center")," ","[column]"," Alignment for both X and Y axes.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".flex-column-center-x")," ","[column]"," Alignment for X axis.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".flex-column-center-y")," ","[column]"," Alignment for Y axis."),(0,a.kt)(s.Z,{height:"265px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Flex alignment classes</title> <style> .box{ width: 200px; height: 200px; margin: 0.5em; border: 0.25em solid; border-radius: 1em; } .box-sm{ width: 25px; height: 25px; margin: 0.5em; border: 0.18em solid; border-radius: 0.5em; } @media screen and (max-width: 650px){ .wrapper { flex-direction: column !important; } } </style> </head> <div class="wrapper flex-center"> <div class="box flex-column-center style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> <div class="box flex-column-center-x style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> <div class="box flex-column-center-y style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> </div>\n</html>',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="flex-column-center style-light">\n    <div class="style-red"></div>\n    <div class="style-green"></div>\n    <div class="style-blue"></div>\n</div>\n\n<div class="flex-column-center-x style-light">\n    <div class="style-red"></div>\n    <div class="style-green"></div>\n    <div class="style-blue"></div>\n</div>\n\n<div class="flex-column-center-y style-light">\n    <div class="style-red"></div>\n    <div class="style-green"></div>\n    <div class="style-blue"></div>\n</div>\n')),(0,a.kt)("h2",{id:"margin"},"Margin"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".margin-auto")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".margin-ya")," Margin top & bottom is auto.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".margin-ta")," Margin top auto.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".margin-ba")," Margin bottom auto."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".margin-xa")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".push-center")," Margin left & right is auto.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".margin-la")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".push-right")," Margin lefy is auto.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".margin-ra")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".push-left")," Margin right is auto."),(0,a.kt)("p",null,"With margin you can center an element one horizontal line."),(0,a.kt)(s.Z,{height:"265px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Margin alignment classes</title> <style> .box{ width: 200px; height: 200px; padding: 10px; margin: 0.5em; border: 0.25em solid; border-radius: 1em; } .box-sm{ width: 25px; height: 25px; border: 0.18em solid; border-radius: 0.5em; } @media screen and (max-width: 650px){ .wrapper { flex-direction: column !important; } } </style> </head> <div class="wrapper flex-center"> <div class="box style-light"> <div class="box-sm push-left style-red"></div> </div> <div class="box style-light"> <div class="box-sm push-center style-green"></div> </div> <div class="box style-light"> <div class="box-sm push-right style-blue"></div> </div> </div>\n</html>',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="style-light">\n    <div class="push-left style-red"></div>\n</div>\n\n<div class="style-light">\n    <div class="push-center style-green"></div>\n</div>\n\n<div class="style-light">\n    <div class="push-right style-blue"></div>\n</div>\n')),(0,a.kt)("h2",{id:"absolute-position"},"Absolute position"),(0,a.kt)("p",null,"Sometime it happens that the element has absolute position and you might try above tricks\nbut they will not work, to center things with absolute position just set both sides\nso in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"left: 50%")," or something like ",(0,a.kt)("strong",{parentName:"p"},"is not a wise choice"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bottom")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"right")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and set ",(0,a.kt)("inlineCode",{parentName:"p"},"margin: auto"),".\nThe list position helper classes are:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".position-relative")," To have relative postion (mostly for wrapper).",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".position-absolute")," To have absolute postion (mostly for children)."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".place-expand")," It sets all sides to 0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".place-expand-y")," It sets ",(0,a.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bottom")," to 0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".place-expand-x")," It sets ",(0,a.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"right")," to 0"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".place-top")," It sets top to 0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".place-bottom")," It sets bottom to 0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".place-left")," It sets left to 0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".place-right")," It sets right to 0"),(0,a.kt)("p",null,"Let see what is the better way:"),(0,a.kt)(s.Z,{height:"265px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Position alignment classes</title> <style> .box{ width: 200px; height: 200px; padding: 10px; margin: 0.5em; border: 0.25em solid; border-radius: 1em; } .box-sm{ width: 25px; height: 25px; border: 0.18em solid; border-radius: 0.5em; } </style> </head> <div class="flex-center"> <div class="box style-light position-relative"> <div class="box-sm position-absolute place-top place-left style-blue"></div> <div class="box-sm position-absolute place-top place-expand-x margin-xa style-blue"></div> <div class="box-sm position-absolute place-top place-right style-blue"></div> <br> <div class="box-sm position-absolute place-expand-y margin-ya place-left style-red"></div> <div class="box-sm position-absolute place-expand margin-auto style-red"></div> <div class="box-sm position-absolute place-expand-y margin-ya place-right style-red"></div> <br> <div class="box-sm position-absolute place-bottom place-left style-green"></div> <div class="box-sm position-absolute place-bottom place-expand-x margin-xa style-green"></div> <div class="box-sm position-absolute place-bottom place-right style-green"></div> </div> </div>\n</html>',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="style-light position-relative">\n    <div class="position-absolute place-top place-left style-blue"></div>\n    <div class="position-absolute place-top place-expand-x margin-xa style-blue"></div>\n    <div class="position-absolute place-top place-right style-blue"></div>\n\n    <div class="position-absolute place-expand-y place-left margin-ya style-red"></div>\n    <div class="position-absolute place-expand margin-auto style-red"></div>\n    <div class="position-absolute place-expand-y place-right margin-ya style-red"></div>\n\n    <div class="position-absolute place-bottom place-left style-green"></div>\n    <div class="position-absolute place-bottom place-expand-x margin-xa style-green"></div>\n    <div class="position-absolute place-bottom place-right style-green"></div>\n</div>\n')))}v.isMDXComponent=!0}}]);