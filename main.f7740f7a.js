parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return o(t)||n(t)||e(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function n(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return i(t)}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var a=document.querySelector("table"),c=a.tHead.children[0],l=t(a.tBodies[0].querySelectorAll("tr"));function u(t){var r=t.target,e=["Name","Position","Age","Salary"].indexOf(r.innerText);f(l,e)}function f(r,e){var n;r.sort(function(r,n){var o=t(r.children)[e].textContent,i=t(n.children)[e].textContent;return"$"===o[0]?s(o)-s(i):o.localeCompare(i)}),(n=a.tBodies[0]).append.apply(n,t(r))}function s(t){return+t.slice(1).split(",").join("")}c.addEventListener("click",u);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f7740f7a.js.map