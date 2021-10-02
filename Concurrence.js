"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,r,n){return r&&_defineProperties(e.prototype,r),n&&_defineProperties(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Concurrence=void 0,require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.promise.finally.js");var Concurrence=function(){function r(e){_classCallCheck(this,r),this.taskQueue=[],this.current=0,this.maxCount=e}return _createClass(r,[{key:"addTask",value:function(e){var r=this;this.taskQueue.push(function(){r.current+=1,e().finally(function(){--r.current,r.runTask()})}),this.current>=this.maxCount||this.runTask()}},{key:"runTask",value:function(){var e=this.taskQueue.shift();e&&e()}}]),r}();exports.Concurrence=Concurrence;