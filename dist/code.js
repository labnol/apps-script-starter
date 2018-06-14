function doGet() {
}(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _webapp = __webpack_require__(2);

__webpack_require__(3);

global.doGet = _webapp.doGet;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var doGet = exports.doGet = function doGet() {
  var title = 'Google Apps Script';
  var fileName = 'index.html';
  return HtmlService.createHtmlOutputFromFile(fileName).setTitle(title).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var add = function add(a, b) {
  return a + b;
};
Logger.log("The sum of 2 and 3 is " + add(2, 3));

var max = function max(a, b) {
  if (a > b) return a;
  return b;
};
Logger.log("The bigger of 10 and 12 is " + max(10, 12));

/* default arguments in functions */
var multiply = function multiply(value) {
  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return value * factor;
};
Logger.log("2*10 = " + multiply(2, 10));
Logger.log("3*2 = " + multiply(3, 2));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var name = 'Amit Agarwal';

var country = 'USA';
country = 'India';

Logger.log(name + ' lives in ' + country);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var person = {
  name: 'Amit Agarwal',
  website: 'https://digitalinspiration.com/',
  email: 'amit@labnol.org'
};

var name = person.name,
    email = person.email;

Logger.log(name + '\'s email address is ' + email);

exports['default'] = person;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
    var gender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown';

    _classCallCheck(this, Person);

    this.name = name;
    this.gender = gender;
  }

  _createClass(Person, [{
    key: 'printDetails',
    value: function printDetails() {
      return this.name + ' is ' + this.gender;
    }
  }]);

  return Person;
}();

var person = new Person('Amit Agarwal', 'male');
Logger.log(person.printDetails());

var Employee = function (_Person) {
  _inherits(Employee, _Person);

  function Employee(name, gender, role) {
    _classCallCheck(this, Employee);

    var _this = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name, gender));

    _this.role = role;
    return _this;
  }

  _createClass(Employee, [{
    key: 'printRole',
    value: function printRole() {
      return this.name + ' is ' + this.role;
    }
  }]);

  return Employee;
}(Person);

var employee = new Employee('Amit', 'male', 'Google Developer');
Logger.log(employee.printDetails());
Logger.log(employee.printRole());

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person() {
  var _this = this;

  _classCallCheck(this, Person);

  this.name = 'Amit Agarwal';

  this.greet = function () {
    return 'Hello ' + _this.name + '!!';
  };

  this.getFirstName = function () {
    var _name$split = _this.name.split(' '),
        _name$split2 = _slicedToArray(_name$split, 1),
        firstName = _name$split2[0];

    return firstName;
  };
};

Person.country = 'India';

Person.sayHello = function () {
  Logger.log('Hello World!!');
};

var person = new Person();
Logger.log(person.getFirstName());
Logger.log(Person.country);

Person.sayHello();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentTime = exports.SCRIPT_TIMEOUT = undefined;

var _destructuring = __webpack_require__(6);

var _destructuring2 = _interopRequireDefault(_destructuring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SCRIPT_TIMEOUT = exports.SCRIPT_TIMEOUT = 1000 * 60 * 5;

var getCurrentTime = exports.getCurrentTime = function getCurrentTime() {
  return Date.now();
};

Logger.log(_destructuring2['default']);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Array functions */

var numbers = [10, 20, 30];

/* Print the nubmers */
numbers.forEach(function (number) {
  Logger.log(number);
});

/* Double the numbers */
var doubleIt = numbers.map(function (number) {
  return number * 2;
});
Logger.log(doubleIt);

/* Only numbers > 10 */
var bigNumbers = numbers.filter(function (number) {
  return number > 10;
});
Logger.log(bigNumbers);

/* Add the numbers */
var sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
Logger.log('The sum of ' + numbers.join(', ') + ' is ' + sum);

/* Remove duplicates with reduce */
var arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
var result = arr.sort().reduce(function (accumulator, current) {
  var length = accumulator.length;

  if (length === 0 || accumulator[length - 1] !== current) {
    accumulator.push(current);
  }
  return accumulator;
}, []);
Logger.log(result); // [1,2,3,4,5]

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* let and const */

var name = 'Amit Agarwal';
Logger.log('The name is ' + name);

for (var i = 0; i < 5; i += 1) {
  Logger.log('The count is ' + i);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var animals = ['Monkey', 'Lion', 'Zebra'];
var birds = ['Sparrow', 'Pigeon', 'Parrot'];
var species = [].concat(animals, birds);
Logger.log(species);

var person = {
  name: 'Amit Agarwal',
  email: 'amit@labnol.org'
};

var website = {
  url: 'https://digitalinspiration.com/'
};

var personDetails = _extends({}, person, website, {
  twitter: '@labnol'
});
Logger.log(personDetails);

/* Update the email address only */
var emailUpdated = _extends({}, personDetails, {
  email: 'email@example.com'
});
Logger.log(emailUpdated);

var stack = ['Google Apps Script', 'JavaScript', 'Firebase', 'Node.js', 'Webpack', 'Babel'];

var gas = stack[0],
    js = stack[1],
    others = stack.slice(2);


Logger.log(gas + ' is similar to ' + js);
Logger.log(others);

var newPerson = {
  name: 'Amit Agarwal',
  email: 'amit@labnol.org',
  website: 'https://digitalinspiration.com/'
};

var name = newPerson.name,
    _newPerson$age = newPerson.age,
    age = _newPerson$age === undefined ? 'unknown' : _newPerson$age;

Logger.log(name + ' is ' + age + ' years old');

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var name = 'Amit Agarwal';

Logger.log(name + ' has ' + name.length + ' characters');
Logger.log(name + ' in uppercase is  ' + name.toUpperCase());

Logger.log('The date is ' + new Date().toUTCString());

/***/ })
/******/ ])));