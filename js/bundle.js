(()=>{var e={754:()=>{const e=function(e,t,c){let n=function(e){let t,c;return"brands"===e?(t=6,c="brands-slider__card--hidden768",window.matchMedia("(min-width: 1440px)").matches&&(c="brands-slider__card--hidden1440",t=8)):(t=3,c="tech-slider__card--hidden768",window.matchMedia("(min-width: 1440px)").matches&&(c="tech-slider__card--hidden1440",t=4)),[t,c]}(c);for(let e=n[0];e<t.length;e++)t[e].classList.toggle(n[1]);!function(e){e.classList.toggle("swiper__dropdown--active"),e.innerHTML=e.classList.contains("swiper__dropdown--active")?"Скрыть":"Показать все"}(e)},t=document.querySelector(".brands .swiper__dropdown"),c=document.querySelectorAll(".brands-slider__card");t.addEventListener("click",(function(){e(t,c,"brands")}));const n=document.querySelector(".tech .swiper__dropdown"),r=document.querySelectorAll(".tech-slider__card");n.addEventListener("click",(function(){e(n,r,"tech")}))},282:()=>{const e=document.querySelector(".modal"),t=document.querySelector(".modal__call-close"),c=document.querySelector(".modal-call"),n=document.querySelector(".overlay--call");function r(){e.classList.toggle("modal--active"),c.classList.toggle("modal-call--active"),n.classList.toggle("overlay--active")}document.querySelectorAll(".call-button").forEach((e=>{e.addEventListener("click",r)})),t.addEventListener("click",r),n.addEventListener("click",r)},149:()=>{const e=document.querySelector(".modal__feedback-close"),t=document.querySelector(".modal-feedback"),c=document.querySelector(".overlay--feedback");function n(){t.classList.toggle("modal-feedback--active"),c.classList.toggle("overlay--active")}document.querySelectorAll(".feedback-button").forEach((e=>{e.addEventListener("click",n)})),e.addEventListener("click",n),c.addEventListener("click",n)},975:()=>{const e=document.querySelector(".services-text__button"),t=document.querySelector(".services-text__paragraph_hidden"),c=document.querySelector(".services-text__paragraph_768hidden");e.addEventListener("click",(function(){var n;t.classList.toggle("services-text__paragraph_hidden--active"),c.classList.toggle("services-text__paragraph_768hidden--active"),(n=e).classList.toggle("services-text__button--active"),n.innerHTML=n.classList.contains("services-text__button--active")?"Скрыть":"Читать далее"}))},732:()=>{const e=document.querySelector(".sidenav-button"),t=document.querySelector(".sidenav__close-button"),c=document.querySelector(".sidenav"),n=document.querySelector(".overlay--sidenav");function r(){c.classList.toggle("sidenav--active"),n.classList.toggle("overlay--active")}e.addEventListener("click",r),t.addEventListener("click",r),n.addEventListener("click",r)},570:()=>{function e(){window.innerWidth<768&&new Swiper(".swiper-container",{slidesPerView:"auto",slidesOffsetBefore:16,slidesOffsetAfter:16,spaceBetween:16,touchEventsTarget:"container",simulateTouch:!0,preventClicks:!0,preventClicksPropagation:!0,pagination:{el:".swiper-pagination",clickable:!0}})}window.addEventListener("load",e),window.addEventListener("resize",e)},198:()=>{}},t={};function c(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,c),o.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";c(198),c(754),c(570),c(282),c(149),c(975),c(732)})()})();
//# sourceMappingURL=bundle.js.map