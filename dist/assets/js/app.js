!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){"use strict";!function(){var t=!1;window.addEventListener("scroll",(function(){t||window.requestAnimationFrame((function(){n(),t=!1})),t=!0}),!1),document.addEventListener("DOMContentLoaded",n,!1);var e=document.querySelectorAll(".skills__item");function n(){e.forEach((function(t){if(function(t){var e=t.getBoundingClientRect(),n=e.top,i=e.bottom;return n>=0&&i<=window.innerHeight}(t)){var e;t.style.opacity="1";var n=t.querySelector(".skill__value").innerText,i=n.indexOf("%");e=n.slice(0,i),t.style.width="".concat(e,"rem"),t.classList.add("active")}else t.style.opacity="0",t.style.width="5.5rem",t.style.height="5.5rem",t.classList.remove("active")}))}}()},function(t,e,n){"use strict";(function(t,e){var n,i,o=document.querySelector(t),r=o.querySelector(".slider__items"),a=o.querySelectorAll(".slider__item"),s=o.querySelectorAll(".slider__control"),l=0,c=0,u=[],d=0,f=a.length-1,m={isAutoplay:!1,directionAutoplay:"next",delayAutoplay:4e3,isPauseOnHover:!0};for(var v in console.log(r),e)v in m&&(m[v]=e[v]);for(var p=0,y=a.length;p<y;p++)u.push({item:a[p],position:p,transform:0});var g={getItemIndex:function(t){for(var e=0,n=0,i=u.length;n<i;n++)(u[n].position<u[e].position&&"min"===t||u[n].position>u[e].position&&"max"===t)&&(e=n);return e},getItemPosition:function(t){return u[g.getItemIndex(t)].position}},_=function(t){var e,n=d;"next"===t?(++l>g.getItemPosition("max")&&(e=g.getItemIndex("min"),u[e].position=g.getItemPosition("max")+1,u[e].transform+=100*u.length,u[e].item.style.transform="translateX("+u[e].transform+"%)"),c-=100,(d+=1)>f&&(d=0)):(--l<g.getItemPosition("min")&&(e=g.getItemIndex("max"),u[e].position=g.getItemPosition("min")-1,u[e].transform-=100*u.length,u[e].item.style.transform="translateX("+u[e].transform+"%)"),c+=100,(d-=1)<0&&(d=f)),r.style.transform="translateX("+c+"%)",i[n].classList.remove("active"),i[d].classList.add("active")},h=function(){m.isAutoplay&&(x(),n=setInterval((function(){_(m.directionAutoplay)}),m.delayAutoplay))},x=function(){clearInterval(n)};(function(){var t=document.createElement("ol");t.classList.add("slider__indicators");for(var e=0,n=a.length;e<n;e++){var r=document.createElement("li");0===e&&r.classList.add("active"),r.setAttribute("data-slide-to","".concat(e)),t.append(r)}o.append(t),i=o.querySelectorAll(".slider__indicators > li")})(),function(){var t=0;if("ontouchstart"in window||navigator.maxTouchPoints)o.addEventListener("touchstart",(function(e){t=e.changedTouches[0].clientX,h()})),o.addEventListener("touchend",(function(e){var n=e.changedTouches[0].clientX-t;n>50?_("prev"):n<-50&&_("next"),h()}));else for(var e=0,n=s.length;e<n;e++)s[e].classList.add("slider__control_show");o.addEventListener("click",(function(t){t.target.classList.contains("slider__control")?(t.preventDefault(),_(t.target.classList.contains("slider__control_next")?"next":"prev"),h()):t.target.getAttribute("data-slide-to")&&(t.preventDefault(),function(t){for(var e=0,n=t>d?"next":"prev";t!==d&&e<=f;)_(n),e++}(parseInt(t.target.getAttribute("data-slide-to"))),h())})),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState?x():h()}),!1),m.isPauseOnHover&&m.isAutoplay&&(o.addEventListener("mouseenter",(function(){x()})),o.addEventListener("mouseleave",(function(){h()})))}(),h()})(".slider",{isAutoplay:!0})}]);