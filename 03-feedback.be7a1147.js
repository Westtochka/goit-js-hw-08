function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var r,o,i,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,a=setTimeout(T,t),l?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function T(){var e=m();if(S(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-f);return s?v(n,i-(e-c)):n}(e))}function h(e){return a=void 0,p&&r?b(e):(r=o=void 0,u)}function w(){var e=m(),n=S(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(T,t),b(f)}return void 0===a&&(a=setTimeout(T,t)),u}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},w.flush=function(){return void 0===a?u:h(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector("form"),j=document.querySelector("input"),S=document.querySelector("textarea"),T={};b.addEventListener("submit",(function(e){return e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(T),T})),b.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"))||{};e&&(j.value=e.email||"",S.value=e.message||"")}();
//# sourceMappingURL=03-feedback.be7a1147.js.map