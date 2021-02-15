(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(352),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap);"]),o.push([n.id,'* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: #b8c6db;\r\n    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: "Poppins", sans-serif;\r\n    margin: 0;\r\n    min-height: 100vh;\r\n}\r\n\r\n.quiz-container {\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);\r\n    overflow: hidden;\r\n    width: 600px;\r\n    max-width: 100%;\r\n}\r\n\r\n.quiz-header {\r\n    padding: 4rem;\r\n}\r\n\r\nh2 {\r\n    padding: 1rem;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\nul li {\r\n    font-size: 1.2rem;\r\n    margin: 1rem 0;\r\n}\r\n\r\nul li label {\r\n    cursor: pointer;\r\n}\r\n\r\nbutton {\r\n    background-color: #8e44ad;\r\n    border: none;\r\n    color: white;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-family: inherit;\r\n    font-size: 1.1rem;\r\n    width: 100%;\r\n    padding: 1.3rem;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #732d91;\r\n}\r\n\r\nbutton:focus {\r\n    background-color: #5e3370;\r\n    outline: none;\r\n}',""]);const i=o},352:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&o[d[0]]||(r&&(d[2]?d[2]="".concat(r," and ").concat(d[2]):d[2]=r),e.push(d))}},e}},701:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function a(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],o=0;o<n.length;o++){var c=n[o],d=e.base?c[0]+e.base:c[0],s=r[d]||0,u="".concat(d," ").concat(s);r[d]=s+1;var l=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:u,updater:h(f,e),references:1}),t.push(u)}return t}function d(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,u=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function l(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,m=0;function h(n,e){var r,t,o;if(e.singleton){var i=m++;r=p||(p=d(e)),t=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else r=d(e),t=f.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=a(r[t]);i[o].references--}for(var d=c(n,e),s=0;s<r.length;s++){var u=a(r[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=d}}}}},e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=r(701),e=r.n(n),t=r(426);e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;const o=[{question:"В таблицу базы данных СКЛАД, содержащую 5 столбцов информации о товаре (наименование, поставщик, количество, дата окончания срока хранения, цена), внесена информация о 25 видах товара. Количество записей в таблице равно …",a:"25",b:"5",c:"125",d:"30",correct:"b"},{question:"В СУБД MS Access не существует запрос на _________ данных.",a:"создание",b:"обновление",c:"удаление",d:"добавление",correct:"a"},{question:"Для первичного ключа ложно утверждение, что …",a:"первичный ключ может принимать нулевое значение",b:"первичный ключ может быть простым и составным",c:"в таблице может быть назначен только один первичный ключ",d:"первичный ключ однозначно определяет каждую запись в таблице",correct:"a"}],i=document.getElementById("quiz"),a=document.querySelectorAll(".answer"),c=document.getElementById("question"),d=document.getElementById("a_text"),s=document.getElementById("b_text"),u=document.getElementById("c_text"),l=document.getElementById("d_text"),f=document.getElementById("submit");let p=0,m=0;function h(){a.forEach((n=>{n.checked=!1}));const n=o[p];c.innerText=n.question,d.innerText=n.a,s.innerText=n.b,u.innerText=n.c,l.innerText=n.d}h(),f.addEventListener("click",(()=>{const n=function(){let n;return a.forEach((e=>{e.checked&&(n=e.id)})),n}();n&&(n===o[p].correct&&m++,p++,p<o.length?h():i.innerHTML=`\n                <h2>Вы ответили правильно на ${m} из ${o.length} вопросов.</h2>\n                \n                <button onclick="location.reload()">Пройти заново</button>\n            `)}))})()})();