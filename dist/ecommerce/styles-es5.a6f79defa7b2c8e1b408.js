(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{3:function(n,r,t){n.exports=t("OmL/")},JPst:function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t,o,a=n[1]||"",e=n[3];if(!e)return a;if(r&&"function"==typeof btoa){var s=(t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[a].concat(i).concat([s]).join("\n")}return[a].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(o)for(var e=0;e<this.length;e++){var s=this[e][0];null!=s&&(a[s]=!0)}for(var i=0;i<n.length;i++){var c=[].concat(n[i]);o&&a[c[0]]||(t&&(c[2]=c[2]?"".concat(t," and ").concat(c[2]):t),r.push(c))}},r}},LboF:function(n,r,t){"use strict";var o,a=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(o){t=null}n[r]=t}return n[r]}}(),e=[];function s(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function i(n,r){for(var t={},o=[],a=0;a<n.length;a++){var i=n[a],c=r.base?i[0]+r.base:i[0],f=t[c]||0,l="".concat(c," ").concat(f);t[c]=f+1;var u=s(l),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(e[u].references++,e[u].updater(m)):e.push({identifier:l,updater:p(m,r),references:1}),o.push(l)}return o}function c(n){var r=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var e=t.nc;e&&(o.nonce=e)}if(Object.keys(o).forEach((function(n){r.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(r);else{var s=a(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(r)}return r}var f,l=(f=[],function(n,r){return f[n]=r,f.filter(Boolean).join("\n")});function u(n,r,t,o){var a=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(r,a);else{var e=document.createTextNode(a),s=n.childNodes;s[r]&&n.removeChild(s[r]),s.length?n.insertBefore(e,s[r]):n.appendChild(e)}}function m(n,r,t){var o=t.css,a=t.media,e=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),e&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(e))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var d=null,h=0;function p(n,r){var t,o,a;if(r.singleton){var e=h++;t=d||(d=c(r)),o=u.bind(null,t,e,!1),a=u.bind(null,t,e,!0)}else t=c(r),o=m.bind(null,t,r),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;o(n=r)}else a()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=i(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var a=s(t[o]);e[a].references--}for(var c=i(n,r),f=0;f<t.length;f++){var l=s(t[f]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}t=c}}}},"OmL/":function(n,r,t){var o=t("LboF"),a=t("W9N5");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]),o(a,{insert:"head",singleton:!1}),n.exports=a.locals||{}},W9N5:function(n,r,t){(r=t("JPst")(!1)).push([n.i,"/* You can add global styles to this file, and also import other style files */\r\n\r\n\r\n/* latin-ext */\r\n\r\n\r\n@font-face {\r\n    font-family: 'Kumbh Sans';\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    font-display: swap;\r\n    src: local('Kumbh Sans Light'), local('KumbhSans-Light'), url(https://fonts.gstatic.com/s/kumbhsans/v1/c4mm1n92AsfhuCq6tVsagit_7KufXHv8.woff2) format('woff2');\r\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n\r\n\r\n/* latin */\r\n\r\n\r\n@font-face {\r\n    font-family: 'Kumbh Sans';\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    font-display: swap;\r\n    src: local('Kumbh Sans Light'), local('KumbhSans-Light'), url(https://fonts.gstatic.com/s/kumbhsans/v1/c4mm1n92AsfhuCq6tVsagit_7KWfXA.woff2) format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n\r\n/* latin-ext */\r\n\r\n\r\n@font-face {\r\n    font-family: 'Kumbh Sans';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    src: local('Kumbh Sans Regular'), local('KumbhSans-Regular'), url(https://fonts.gstatic.com/s/kumbhsans/v1/c4ml1n92AsfhuCq6tVsaio5d-Zq-.woff2) format('woff2');\r\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n\r\n\r\n/* latin */\r\n\r\n\r\n@font-face {\r\n    font-family: 'Kumbh Sans';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    src: local('Kumbh Sans Regular'), local('KumbhSans-Regular'), url(https://fonts.gstatic.com/s/kumbhsans/v1/c4ml1n92AsfhuCq6tVsaioBd-Q.woff2) format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n\r\n/* latin-ext */\r\n\r\n\r\n@font-face {\r\n    font-family: 'Kumbh Sans';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-display: swap;\r\n    src: local('Kumbh Sans Bold'), local('KumbhSans-Bold'), url(https://fonts.gstatic.com/s/kumbhsans/v1/c4mm1n92AsfhuCq6tVsagjt47KufXHv8.woff2) format('woff2');\r\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n\r\n\r\n/* latin */\r\n\r\n\r\n@font-face {\r\n    font-family: 'Kumbh Sans';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-display: swap;\r\n    src: local('Kumbh Sans Bold'), local('KumbhSans-Bold'), url(https://fonts.gstatic.com/s/kumbhsans/v1/c4mm1n92AsfhuCq6tVsagjt47KWfXA.woff2) format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n\r\nhtml {\r\n    margin: 0px !important;\r\n    padding: 0px !important\r\n}\r\n\r\n\r\n* {\r\n    font-family: 'Kumbh Sans';\r\n}\r\n\r\n\r\n/* @font-face {\r\n    src: url('./assets/fonts/futura-book-bt.ttf');\r\n    font-family: 'FuturaBook';\r\n} */\r\n\r\n\r\nbody {\r\n    margin: 0px !important;\r\n    padding: 0px !important;\r\n    /* background-color: #EBFFD9; */\r\n    overflow-x: hidden !important;\r\n}\r\n\r\n\r\n::-webkit-scrollbar {\r\n    width: 4px;\r\n}\r\n\r\n\r\n::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #F5F5F5;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #000000;\r\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(156, 116, 116, 0.2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);\r\n    border-radius: 20px;\r\n}",""]),n.exports=r}},[[3,0]]]);