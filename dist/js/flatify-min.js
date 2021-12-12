"use strict";!function(){var o={2:function(t,e,o){var n=o(641);o(235),document.addEventListener("DOMContentLoaded",()=>{(0,n.Z)(document).on("click",".close-button",function(){const e=this.closest(".alert");e&&(e.classList.add("alert-will-be-removed"),(0,n.Z)(e).once("animationend",t=>{e.remove()}))})})},82:function(t,e,o){var n=o(641),r=o(162),a=o(235);function s(t,e){e=e||i(t),t.classList.add("dropdown-will-be-hidden"),(0,n.Z)(t).once("animationend",()=>{t.classList.remove("dropdown-will-be-hidden","show"),e.classList.remove("arrow-flip","active"),e.setAttribute("aria-expanded",!1)})}function i(t){const e=t.closest(".dropdown-wrapper");return e?e.querySelector(".dropdown-toggle"):(0,a.Z)("error","Dropdown should be inside '.dropdown-wrapper'")}document.addEventListener("DOMContentLoaded",()=>{(0,n.Z)(document).on("click",".dropdown-toggle",function(){const t=this.closest(".dropdown-wrapper");if(!t)return(0,a.Z)("error","Dropdown toggle button should be inside '.dropdown-wrapper'");const e=t.querySelector(".dropdown");if(!e)return(0,a.Z)("error","Could not found '.dropdown' element inside '.dropdown-wrapper'");var o,n;e.classList.contains("show")?s(e,this):(function(t,e){if("undefined"==typeof Popper)return(0,a.Z)("error","Dropdowns require Popper (https://popper.js.org)");let o=r.q5;t.closest(".navbar")&&(o=r.FL),t.closest(".popover")&&(o=r.pq),Popper.createPopper(e,t,{placement:t.getAttribute("data-dropdown-direction")||"bottom",modifiers:[{name:"computeStyles",options:{gpuAcceleration:!1}},{name:"offset",options:{offset:o}},{name:"arrow",options:{element:t.querySelector(".pointer-arrow"),padding:15}}]})}(o=e,n=(n=this)||i(o)),o.classList.add("show"),n.classList.add("arrow-flip","active"),n.setAttribute("aria-expanded",!0))}),(0,n.Z)(document).on("click",".dropdown",function(t){const e=t.target.closest(".dropdown"),o=e.getAttribute("data-dropdown-auto-close");o&&"true"!==o&&"inside"!==o||s(e)}),(0,n.Z)(document).on("click",".close-dropdown",function(t){t=t.target.closest(".dropdown");if(!t)return(0,a.Z)("error","Dropdown close button should be inside '.dropdown-wrapper'");s(t)}),document.addEventListener("click",function(o){const t=document.querySelectorAll(".dropdown.show:not([data-dropdown-auto-close]), .dropdown.show[data-dropdown-auto-close='outside'], .dropdown.show[data-dropdown-auto-close='true']");t&&t.forEach(t=>{var e=i(t);o.target.closest(".dropdown")!==t&&o.target!==e&&s(t,e)})}),document.addEventListener("keyup",t=>{if("Escape"==t.key){const t=document.querySelectorAll(".dropdown.show");t&&t.forEach(t=>s(t))}})})},619:function(t,e,o){var r=o(641),a=o(235);function s(e,o){const n=document.querySelectorAll(".modal.show");1===n.length&&o.classList.add("backdrop-will-be-removed"),e.classList.add("modal-will-be-hidden"),(0,r.Z)(e).once("animationend",t=>{1===n.length&&o.classList.remove("show","backdrop-will-be-removed"),e.classList.remove("show","modal-will-be-hidden"),e.setAttribute("aria-modal",!1)})}function n(e){const t=document.querySelectorAll(".modal.show");if(!t)return(0,a.Z)("warn","There is no active modal in this page to hide",modal);t.forEach(t=>{t.classList.contains("required")?setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>{t.classList.add("show")},150)},150):s(t,e||document.querySelector(".modal-backdrop.show"))})}document.addEventListener("DOMContentLoaded",()=>{(0,r.Z)(document).on("click",".open-modal",function(t){var t=t.target.getAttribute("data-modal-target"),e=document.querySelector(".modal-backdrop");if(!t||!document.querySelector(t))return(0,a.Z)("error","No target found for open modal button, try to add or edit 'data-modal-target' attribute of '.open-modal'");(function(t){if(e)e.classList.add("show");else{let t=document.createElement("div");t.classList.add("backdrop-layer","modal-backdrop","show"),document.body.appendChild(t)}t.setAttribute("aria-modal",!0),t.classList.add("show")})(document.querySelector(t))}),(0,r.Z)(document).on("click",".close-modal",function(t){let e;var o=t.target.getAttribute("data-modal-target"),n=document.querySelector(".modal-backdrop");if(o){if(e=document.querySelector(o),!e)return(0,a.Z)("error","No target found for close modal, try to add or edit 'data-modal-target' attribute of '.close-modal'")}else if(e=t.target.closest(".modal"),!e)return(0,a.Z)("error","Close modal button is not in a modal, you can set 'data-modal-target' attribute to specify which modal belongs to this button");s(e,n)}),(0,r.Z)(document).on("click",".modal-backdrop",t=>n(t.target)),document.addEventListener("keyup",t=>"Escape"==t.key&&n())})},752:function(t,e,o){o(162);var a=o(641),s=o(235),i=o(238);function d(t,n,e){!function(t){const e=n.closest(".tabs-header").querySelectorAll(".tab-button");e&&e.forEach(t=>{t.classList.remove("active")});const o=t.closest(".tabs-content").querySelectorAll(".tab-panel");o&&o.forEach(t=>{t.classList.remove("show","tab-will-be-hidden","slide-left","slide-right")})}(t),n.classList.add("active"),n.setAttribute("aria-selected",!0),t.classList.add("show"),e&&(0,i.o)(e)<(0,i.o)(n)?t.classList.add("slide-right"):t.classList.add("slide-left")}document.addEventListener("DOMContentLoaded",()=>{(0,a.Z)(document).on("click",".tab-button",function(t){var e=t.target.closest(".tab-button").getAttribute("data-tab-target")||"#"+t.target.closest(".tab-button").getAttribute("aria-controls");if(e&&"#null"===e||!e)return(0,s.Z)("error","Tab button should have 'data-tab-target' or 'aria-controls' HTML attribute to specify the target tab panel");const o=document.querySelector(e);if(!o)return(0,s.Z)("error","Provided target for tab button does not exist on this page");if(!this.classList.contains("active")||!o.classList.contains("show")){const n=o.closest(".tabs-content").querySelector(".tab-panel.show"),r=t.target.closest(".tabs-header").querySelector(".tab-button.active");r&&(r.classList.remove("active"),r.setAttribute("aria-selected",!1)),n?(n.classList.remove("slide-left","slide-right"),r&&(0,i.o)(r)<(0,i.o)(this)?n.classList.add("slide-left"):n.classList.add("slide-right"),n.classList.add("tab-will-be-hidden"),(0,a.Z)(n).once("animationend",()=>{n.classList.remove("show","tab-will-be-hidden","slide-left","slide-right"),d(o,this,r)})):d(o,this,r)}})})},891:function(t,e,o){o(2),o(82),o(619),o(752),o(277),o(291)},277:function(t,e,o){var n=o(641),r=o(235);document.addEventListener("DOMContentLoaded",()=>{(0,n.Z)(".input-wrapper").on("click",".show-password-button",function(t){t.preventDefault();const e=this.closest(".input-wrapper");if(!e)return(0,r.Z)("error","Show password button is not in an '.input-wrapper'",this.parentElement);const o=e.querySelector("input");if(!o)return(0,r.Z)("error","Show password button should be inside '.input-wrapper' with input type password",this.parentElement);e.classList.toggle("visible-password"),o.type=e.classList.contains("visible-password")?"text":"password"})})},291:function(t,e,o){var n=o(641),r=o(235);document.addEventListener("DOMContentLoaded",()=>{(0,n.Z)(document).on("click",".toggle-truncate",function(t){let e;if(t.target.classList.contains("truncate"))e=t.target;else{t=t.target.getAttribute("data-truncation-target");if(!t||!document.querySelector(t))return(0,r.Z)("error","No target found for truncation, try to add or edit 'data-truncation-target' attribute of '.toggle-truncate'");e=document.querySelector(t)}e.classList.contains("show-text")?e.classList.remove("show-text"):e.classList.add("show-text")})})},238:function(t,e,o){function n(t){return Array.prototype.indexOf.call(t.parentNode.children,t)}o.d(e,{o:function(){return n}})},235:function(t,e,o){o.d(e,{Z:function(){return r}});var n=o(162);function r(t,e,o){if(!0===n.U7)return e="".concat(n.u2,": ").concat(e),o?console[t](e,o):console[t](e)}},641:function(t,e){(()=>{const f=[],i=t=>"string"!=typeof t?[]:t.split(" ").reduce((t,e)=>{var{keys:o,existing:t}=t;return t[e]?{keys:o,existing:t}:{keys:[...o,e],existing:{...t,[e]:!0}}},{keys:[],existing:{}}).keys;window.Vent=function(){this.length=0,this.add(...arguments)},window.vent=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return new window.Vent(...e)},window.Vent.prototype.splice=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return Array.prototype.splice.apply(this,e)},window.Vent.prototype.each=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return Array.prototype.forEach.call(this,...e),this},window.Vent.prototype.add=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return e.forEach(t=>{((t=t)?"string"==typeof t?[...document.querySelectorAll(t)]:t instanceof NodeList?[...t]:"function"==typeof t.addEventListener?[t]:[]:[]).forEach(e=>{for(let t=0;t<this.length;t++)if(this[t]===e)return;this[this.length]=e,this.length++})}),this},window.Vent.prototype.on=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return n(this,{},e)},window.Vent.prototype.once=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return n(this,{once:!0},e)},window.Vent.prototype.off=function(e,o){return this.each(t=>((e,t,o)=>{var n=f.findIndex(t=>{var[t]=t;return t===e});if(-1!==n){const[,r]=f[n],a=i(t);for(const f in r)-1===a.indexOf(f)&&t||!Object.prototype.hasOwnProperty.call(r,f)||!Array.isArray(r[f])||(r[f]=r[f].filter(t=>o&&t.originalHandler!==o||(e.removeEventListener(f,t),!1)),t||delete r[f]);t||f.splice(n,1)}})(t,e,o))},window.Vent.prototype.trigger=function(e){let{data:o,options:n}=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return this.each(t=>((n,t,r,a)=>{const s="function"==typeof n.dispatchEvent;i(t).forEach(t=>{var e=void 0!==document["on".concat(t)],o=r||!e?new CustomEvent(t,Object.assign({detail:r,bubbles:!0},a)):new Event(t,Object.assign({bubbles:!0},a));e&&"function"==typeof n[t]&&n[t](),s&&n.dispatchEvent(o)})})(t,e,o,n))};const n=(t,o,e)=>{var[n,...e]=e;if(!e.length)return;const{length:r,[r-1]:a,[r-2]:p}=e,s=i(n);return t.each(e=>s.forEach(t=>((s,i,d)=>{let{delegate:c,once:l}={...o,delegate:p};const u=t=>{if(n=t.target,a=s,!(r=c)||"string"!=typeof r||(o=r,!!(e=n)&&("function"==typeof e.matches?e.matches(o):"function"==typeof e.msMatchesSelector&&e.msMatchesSelector(o)))||a.contains(n.closest(r))){const n=t&&t.detail;d.call(c?t.target:s,t,n),l&&s.removeEventListener(i,u)}var e,o,n,r,a};u.originalHandler=d,s.addEventListener(i,u),l||((e,t,o)=>{if(e&&t&&o){const n=f.findIndex(t=>{var[t]=t;return t===e}),[,r]=f[n]||[e,{}];r[t]=r[t]||[],r[t].push(o),-1===n?f.push([e,r]):f[n]=[e,r]}})(s,i,u)})(e,t,a)))};window.vent})(),e.Z=window.vent},162:function(t){t.exports=JSON.parse('{"u2":"FlatifyCSS","U7":true,"q5":[0,20],"FL":[0,0],"pq":[0,10]}')}},n={};function r(t){var e=n[t];if(void 0!==e)return e.exports;e=n[t]={exports:{}};return o[t](e,e.exports,r),e.exports}r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r(891),r(2),r(82),r(619),r(752),r(277),r(238),r(235),r(641),r(291)}();
//# sourceMappingURL=../maps/flatify-min.js.map
