"use strict";function toDBC(r){for(var t="",e=0;e<r.length;e+=1){var o=r.charCodeAt(e);t+=33<=o&&o<=126?String.fromCharCode(r.charCodeAt(e)+65248):32===o?String.fromCharCode(r.charCodeAt(e)+12288-32):r.charAt(e)}return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.toDBC=toDBC;