webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(2);

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var pcx = __webpack_require__(4);

	var MyCalss = function () {
	    function MyCalss(name_) {
	        _classCallCheck(this, MyCalss);

	        this.myname = name_;
	    }

	    _createClass(MyCalss, [{
	        key: 'namelog',
	        value: function namelog() {
	            return this.myname;
	        }
	    }]);

	    return MyCalss;
	}();

	var myClass = new MyCalss('ES6 Class');
	document.getElementById('output').innerHTML = myClass.namelog();

	new _vue2.default({
	    el: '#app',
	    data: {
	        pcx: pcx
	    }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/c088727b654a44e854cd90b1ec581273.jpg";

/***/ }
]);