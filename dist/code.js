function doGet() {
}
function sendmail() {
}!function(e, a) {
    for (var i in a) e[i] = a[i];
}(this, function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 1);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return doGet;
    });
    var doGet = function() {
        return HtmlService.createHtmlOutputFromFile("index.html").setTitle("Google Apps Script").setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__), function(global) {
        var _server_webapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
        __webpack_require__(11);
        global.doGet = _server_webapp__WEBPACK_IMPORTED_MODULE_0__["a"], global.sendmail = function() {
            var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "amit@labnol.org";
            GmailApp.sendEmail(email, "It works!", "Hello Google Apps Script");
        };
    }.call(this, __webpack_require__(2));
}, function(module, exports) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || Function("return this")() || (0, eval)("this");
    } catch (e) {
        "object" == typeof window && (g = window);
    }
    module.exports = g;
}, function(module, exports) {
    Logger.log("The sum of 2 and 3 is " + (2 + 3));
    Logger.log("The bigger of 10 and 12 is " + function(a, b) {
        return a > b ? a : b;
    }(10, 12));
    var multiply = function(value) {
        return value * (arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2);
    };
    Logger.log("2*10 = " + multiply(2, 10)), Logger.log("3*2 = " + multiply(3, 2));
}, function(module, exports) {
    Logger.log("Amit Agarwal lives in India");
}, function(module, exports) {
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }();
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var Person = function() {
        function Person() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous", gender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Unknown";
            _classCallCheck(this, Person), this.name = name, this.gender = gender;
        }
        return _createClass(Person, [ {
            key: "printDetails",
            value: function() {
                return this.name + " is " + this.gender;
            }
        } ]), Person;
    }(), person = new Person("Amit Agarwal", "male");
    Logger.log(person.printDetails());
    var employee = new (function(_Person) {
        function Employee(name, gender, role) {
            _classCallCheck(this, Employee);
            var _this = function(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name, gender));
            return _this.role = role, _this;
        }
        return function(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }(Employee, Person), _createClass(Employee, [ {
            key: "printRole",
            value: function() {
                return this.name + " is " + this.role;
            }
        } ]), Employee;
    }())("Amit", "male", "Google Developer");
    Logger.log(employee.printDetails()), Logger.log(employee.printRole());
}, function(module, exports) {
    var _slicedToArray = function() {
        return function(arr, i) {
            if (Array.isArray(arr)) return arr;
            if (Symbol.iterator in Object(arr)) return function(arr, i) {
                var _arr = [], _n = !0, _d = !1, _e = undefined;
                try {
                    for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                    !i || _arr.length !== i); _n = !0) ;
                } catch (err) {
                    _d = !0, _e = err;
                } finally {
                    try {
                        !_n && _i["return"] && _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }(arr, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }();
    var Person = function Person() {
        var _this = this;
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, Person), this.name = "Amit Agarwal", this.greet = function() {
            return "Hello " + _this.name + "!!";
        }, this.getFirstName = function() {
            var _name$split = _this.name.split(" ");
            return _slicedToArray(_name$split, 1)[0];
        };
    };
    Person.country = "India", Person.sayHello = function() {
        Logger.log("Hello World!!");
    };
    var person = new Person();
    Logger.log(person.getFirstName()), Logger.log(Person.country), Person.sayHello();
}, function(module, exports) {
    var numbers = [ 10, 20, 30 ];
    numbers.forEach(function(number) {
        Logger.log(number);
    });
    var doubleIt = numbers.map(function(number) {
        return 2 * number;
    });
    Logger.log(doubleIt);
    var bigNumbers = numbers.filter(function(number) {
        return number > 10;
    });
    Logger.log(bigNumbers);
    var sum = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    Logger.log("The sum of " + numbers.join(", ") + " is " + sum);
    var result = [ 1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4 ].sort().reduce(function(accumulator, current) {
        var length = accumulator.length;
        return 0 !== length && accumulator[length - 1] === current || accumulator.push(current), 
        accumulator;
    }, []);
    Logger.log(result);
}, function(module, exports) {
    Logger.log("The name is Amit Agarwal");
    for (var i = 0; i < 5; i += 1) Logger.log("The count is " + i);
}, function(module, exports) {
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, species = [].concat([ "Monkey", "Lion", "Zebra" ], [ "Sparrow", "Pigeon", "Parrot" ]);
    Logger.log(species);
    var personDetails = _extends({}, {
        name: "Amit Agarwal",
        email: "amit@labnol.org"
    }, {
        url: "https://digitalinspiration.com/"
    }, {
        twitter: "@labnol"
    });
    Logger.log(personDetails);
    var emailUpdated = _extends({}, personDetails, {
        email: "email@example.com"
    });
    Logger.log(emailUpdated);
    var stack = [ "Google Apps Script", "JavaScript", "Firebase", "Node.js", "Webpack", "Babel" ], gas = stack[0], js = stack[1], others = stack.slice(2);
    Logger.log(gas + " is similar to " + js), Logger.log(others);
    var newPerson = {
        name: "Amit Agarwal",
        email: "amit@labnol.org",
        website: "https://digitalinspiration.com/"
    }, name = newPerson.name, _newPerson$age = newPerson.age, age = _newPerson$age === undefined ? "unknown" : _newPerson$age;
    Logger.log(name + " is " + age + " years old");
}, function(module, exports) {
    var name = "Amit Agarwal";
    Logger.log(name + " has " + name.length + " characters"), Logger.log(name + " in uppercase is  " + name.toUpperCase()), 
    Logger.log("The date is " + new Date().toUTCString());
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__(3), __webpack_require__(4);
    var person = {
        name: "Amit Agarwal",
        website: "https://digitalinspiration.com/",
        email: "amit@labnol.org"
    }, destructuring_name = person.name, email = person.email, _person$country = person.country, country = _person$country === undefined ? "unknown" : _person$country;
    Logger.log(destructuring_name + "'s email address is " + email + ". Their country is " + country);
    var destructuring = person;
    __webpack_require__(5), __webpack_require__(6);
    Logger.log(destructuring);
    __webpack_require__(7), __webpack_require__(8), __webpack_require__(9), __webpack_require__(10);
} ]));