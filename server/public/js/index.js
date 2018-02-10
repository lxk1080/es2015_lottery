/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // import 'babel-polyfill' // es6 API转换器


var Out = function Out() {
  _classCallCheck(this, Out);

  this.name = 'hello world ah! 123';
};

var o = new Out();

document.body.textContent = o.name;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
  var Parent = function Parent() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'parent';

    _classCallCheck(this, Parent);

    this.name = name;
  };

  var parent = new Parent();
  console.log(parent);
}

// 继承
{
  var _Parent = function () {
    function _Parent() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'parent';

      _classCallCheck(this, _Parent);

      this.name = name;
    }

    _createClass(_Parent, [{
      key: 'getName',
      value: function getName() {
        console.log(this.name);
      }
    }]);

    return _Parent;
  }();

  var Child = function (_Parent2) {
    _inherits(Child, _Parent2);

    function Child() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'child';

      _classCallCheck(this, Child);

      var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));

      _this.type = 'child';
      return _this;
    }

    return Child;
  }(_Parent);

  var child = new Child('job');
  console.log(child);
  child.getName();
}

// getter、setter属性
{
  var _Parent3 = function () {
    function _Parent3() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'parent';

      _classCallCheck(this, _Parent3);

      this.name = name;
    }

    _createClass(_Parent3, [{
      key: 'longName',
      get: function get() {
        return this.name + ' -name';
      },
      set: function set(name) {
        this.name = name;
      }
    }]);

    return _Parent3;
  }();

  var _parent = new _Parent3();
  console.log(_parent.longName);

  _parent.longName = 'change';
  console.log(_parent.longName);
}

// 静态方法
{
  var _Parent4 = function () {
    function _Parent4() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'parent';

      _classCallCheck(this, _Parent4);

      this.name = name;
    }

    _createClass(_Parent4, null, [{
      key: 'getCode',
      value: function getCode() {
        console.log('code');
      }
    }]);

    return _Parent4;
  }();

  _Parent4.getCode();
}

// 静态属性
{
  var _Parent5 = function _Parent5() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'parent';

    _classCallCheck(this, _Parent5);

    this.name = name;
  };

  _Parent5.code = '123456';
  console.log(_Parent5.code);
}

/***/ })
/******/ ]);