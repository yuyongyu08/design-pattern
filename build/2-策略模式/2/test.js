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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/2-策略模式/2/test.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/2-策略模式/2/Casher.ts":
/*!********************************!*\
  !*** ./src/2-策略模式/2/Casher.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Discount_1 = __importDefault(__webpack_require__(/*! ../Discount */ \"./src/2-策略模式/Discount.ts\"));\nvar ReturnDiscount_1 = __importDefault(__webpack_require__(/*! ../ReturnDiscount */ \"./src/2-策略模式/ReturnDiscount.ts\"));\nvar RateDiscount_1 = __importDefault(__webpack_require__(/*! ../RateDiscount */ \"./src/2-策略模式/RateDiscount.ts\"));\nvar Casher = /** @class */ (function () {\n    function Casher(params) {\n        this.count = params.count;\n        this.prince = params.prince;\n        this.discountMoney = 0;\n    }\n    Casher.prototype.getDiscount = function (discountType) {\n        var discount = null;\n        switch (true) {\n            case discountType === 'return':\n                discount = new ReturnDiscount_1.default(this.count, this.prince);\n                break;\n            case discountType === 'rate':\n                discount = new RateDiscount_1.default(this.count, this.prince);\n                break;\n            default:\n                discount = new Discount_1.default(this.count, this.prince);\n                break;\n        }\n        return discount;\n    };\n    Casher.prototype.calculateDiscountMoney = function (discountType) {\n        var params = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            params[_i - 1] = arguments[_i];\n        }\n        var discount = this.getDiscount(discountType);\n        this.discountMoney = discount.getDiscountMoney.apply(discount, params);\n    };\n    Casher.prototype.getFinalMoney = function () {\n        return this.count * this.prince - this.discountMoney;\n    };\n    return Casher;\n}());\nexports.default = Casher;\n\n\n//# sourceURL=webpack:///./src/2-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F/2/Casher.ts?");

/***/ }),

/***/ "./src/2-策略模式/2/test.ts":
/*!******************************!*\
  !*** ./src/2-策略模式/2/test.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Casher_1 = __importDefault(__webpack_require__(/*! ./Casher */ \"./src/2-策略模式/2/Casher.ts\"));\n(function (window) {\n    window.Casher = Casher_1.default;\n})(window);\n\n\n//# sourceURL=webpack:///./src/2-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F/2/test.ts?");

/***/ }),

/***/ "./src/2-策略模式/Discount.ts":
/*!********************************!*\
  !*** ./src/2-策略模式/Discount.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Discount = /** @class */ (function () {\n    function Discount(count, prince) {\n        this.count = count;\n        this.prince = prince;\n    }\n    Discount.prototype.getDiscountMoney = function () {\n        var condition = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            condition[_i] = arguments[_i];\n        }\n        return 0;\n    };\n    return Discount;\n}());\nexports.default = Discount;\n\n\n//# sourceURL=webpack:///./src/2-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F/Discount.ts?");

/***/ }),

/***/ "./src/2-策略模式/RateDiscount.ts":
/*!************************************!*\
  !*** ./src/2-策略模式/RateDiscount.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Discount_1 = __importDefault(__webpack_require__(/*! ./Discount */ \"./src/2-策略模式/Discount.ts\"));\n//折扣\nvar RateDiscount = /** @class */ (function (_super) {\n    __extends(RateDiscount, _super);\n    function RateDiscount() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    RateDiscount.prototype.getDiscountMoney = function (rate) {\n        return this.count * this.prince * (1 - rate);\n    };\n    return RateDiscount;\n}(Discount_1.default));\nexports.default = RateDiscount;\n\n\n//# sourceURL=webpack:///./src/2-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F/RateDiscount.ts?");

/***/ }),

/***/ "./src/2-策略模式/ReturnDiscount.ts":
/*!**************************************!*\
  !*** ./src/2-策略模式/ReturnDiscount.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Discount_1 = __importDefault(__webpack_require__(/*! ./Discount */ \"./src/2-策略模式/Discount.ts\"));\n//满减\nvar ReturnDiscount = /** @class */ (function (_super) {\n    __extends(ReturnDiscount, _super);\n    function ReturnDiscount() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    ReturnDiscount.prototype.getDiscountMoney = function (limit, subMoney) {\n        var totalMoney = this.count * this.prince;\n        return totalMoney >= limit ? subMoney : 0;\n    };\n    return ReturnDiscount;\n}(Discount_1.default));\nexports.default = ReturnDiscount;\n\n\n//# sourceURL=webpack:///./src/2-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F/ReturnDiscount.ts?");

/***/ })

/******/ });