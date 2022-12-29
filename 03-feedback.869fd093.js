!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,y=Math.min,b=function(){return v.Date.now()};function p(e,t,n){var r,o,a,f,u,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,l=t,f=e.apply(i,n)}function p(e){return l=e,u=setTimeout(S,t),s?m(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function S(){var e=b();if(O(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-c);return d?y(n,a-(e-l)):n}(e))}function w(e){return u=void 0,v&&r?m(e):(r=o=void 0,f)}function T(){var e=b(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return p(c);if(d)return u=setTimeout(S,t),m(c)}return void 0===u&&(u=setTimeout(S,t)),f}return t=j(t)||0,h(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},T.flush=function(){return void 0===u?f:w(b())},T}function h(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=u.test(t);return r||c.test(t)?l(t.slice(2),r?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var O=r.save,S=r.load,w=r.remove,T=document.querySelector(".feedback-form"),x={};!function(){var e=S("feedback-form-state");if(void 0!==e)for(var t in e)T.elements[t].value=e[t]}(),T.addEventListener("input",e(t)((function(e){var t=e.target,n=t.value,r=t.name;x[r]=n,O("feedback-form-state",x)}),500)),T.addEventListener("submit",(function(e){e.preventDefault(),console.log(x),T.reset(),w("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.869fd093.js.map
