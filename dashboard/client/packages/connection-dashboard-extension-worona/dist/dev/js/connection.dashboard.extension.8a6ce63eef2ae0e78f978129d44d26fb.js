module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://cdn.worona.io/packages/connection-dashboard-extension-worona/dist/dev/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sagas = exports.libs = exports.selectors = exports.reducers = exports.types = exports.actions = undefined;

	var _actions = __webpack_require__(1);

	var actions = _interopRequireWildcard(_actions);

	var _types = __webpack_require__(2);

	var types = _interopRequireWildcard(_types);

	var _reducers = __webpack_require__(3);

	var reducers = _interopRequireWildcard(_reducers);

	var _selectors = __webpack_require__(6);

	var selectors = _interopRequireWildcard(_selectors);

	var _libs = __webpack_require__(8);

	var libs = _interopRequireWildcard(_libs);

	var _sagas = __webpack_require__(27);

	var sagas = _interopRequireWildcard(_sagas);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.actions = actions;
	exports.types = types;
	exports.reducers = reducers;
	exports.selectors = selectors;
	exports.libs = libs;
	exports.sagas = sagas;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.disconnected = exports.connectionFailed = exports.connectionSucceed = exports.connectionRequested = exports.connectionStarted = undefined;

	var _types = __webpack_require__(2);

	var types = _interopRequireWildcard(_types);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var connectionStarted = exports.connectionStarted = function connectionStarted() {
	  return { type: types.CONNECTION_STARTED };
	};
	var connectionRequested = exports.connectionRequested = function connectionRequested() {
	  return { type: types.CONNECTION_REQUESTED };
	};
	var connectionSucceed = exports.connectionSucceed = function connectionSucceed() {
	  return { type: types.CONNECTION_SUCCEED };
	};
	var connectionFailed = exports.connectionFailed = function connectionFailed(error) {
	  return { type: types.CONNECTION_FAILED, error: error };
	};
	var disconnected = exports.disconnected = function disconnected(error) {
	  return { type: types.DISCONNECTED, error: error };
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CONNECTION_STARTED = exports.CONNECTION_STARTED = 'connection/CONNECTION_STARTED';
	var CONNECTION_REQUESTED = exports.CONNECTION_REQUESTED = 'connection/CONNECTION_REQUESTED';
	var CONNECTION_SUCCEED = exports.CONNECTION_SUCCEED = 'connection/CONNECTION_SUCCEED';
	var CONNECTION_FAILED = exports.CONNECTION_FAILED = 'connection/CONNECTION_FAILED';
	var DISCONNECTED = exports.DISCONNECTED = 'connection/DISCONNECTED';

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isConnecting = exports.isConnected = undefined;

	var _redux = __webpack_require__(4);

	var _types = __webpack_require__(2);

	var types = _interopRequireWildcard(_types);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var isConnected = exports.isConnected = function isConnected() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case types.CONNECTION_SUCCEED:
	      return true;
	    case types.DISCONNECTED:
	      return false;
	    default:
	      return state;
	  }
	};

	var isConnecting = exports.isConnecting = function isConnecting() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case types.CONNECTION_REQUESTED:
	      return true;
	    case types.CONNECTION_SUCCEED:
	    case types.CONNECTION_FAILED:
	      return false;
	    default:
	      return state;
	  }
	};

	exports.default = function () {
	  return (0, _redux.combineReducers)({
	    isConnected: isConnected,
	    isConnecting: isConnecting
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))("c02e47e5e61c3e61b153c56e595bd867");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = vendors_dashboard_worona;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lodash = __webpack_require__(7);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reducers = __webpack_require__(3);

	var reducers = _interopRequireWildcard(_reducers);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _lodash2.default)(reducers).omit('default').keys().forEach(function (reducer) {
	  module.exports[reducer] = function (state) {
	    return state.connection[reducer];
	  };
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))("e0725a01daa4746ac52caa8a837089da");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.errorEventChannel = exports.readyEventChannel = exports.collectionEventChannel = exports.unsubscribe = exports.subscribe = exports.logout = exports.loggedOutEventChannel = exports.loggedInEventChannel = exports.loginWithPassword = exports.call = exports.disconnectedEventChannel = exports.connectedEventChannel = exports.connect = exports.start = exports.Connection = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _asteroid = __webpack_require__(9);

	var _reduxSaga = __webpack_require__(25);

	var _config = __webpack_require__(26);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Asteroid = (0, _asteroid.createClass)();

	var Connection = exports.Connection = function () {
	  function Connection() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Connection);

	    this._url = options.url || _config.url;
	    this._client = null;
	  }

	  _createClass(Connection, [{
	    key: 'start',
	    value: function start() {
	      this._client = new Asteroid({
	        autoConnect: false,
	        autoReconnect: false,
	        maintainCollections: true,
	        ddpVersion: '1',
	        endpoint: this._url
	      });
	    }
	  }, {
	    key: 'connect',
	    value: function connect() {
	      this._client.ddp.connect();
	    }
	  }, {
	    key: 'connectedEventChannel',
	    value: function connectedEventChannel() {
	      var _this = this;

	      return (0, _reduxSaga.eventChannel)(function (listener) {
	        var connected = _this._client.ddp.on('connected', function () {
	          listener('connected');
	        });
	        return function () {
	          _this._client.ddp.removeListener('connected', connected);
	        };
	      });
	    }
	  }, {
	    key: 'disconnectedEventChannel',
	    value: function disconnectedEventChannel() {
	      var _this2 = this;

	      return (0, _reduxSaga.eventChannel)(function (listener) {
	        var disconnected = _this2._client.ddp.on('disconnected', function () {
	          listener('disconnected');
	        });
	        return function () {
	          _this2._client.ddp.removeListener('disconnected', disconnected);
	        };
	      });
	    }
	  }, {
	    key: 'call',
	    value: function call() {
	      var _this3 = this;

	      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	        params[_key] = arguments[_key];
	      }

	      return new Promise(function (resolve, reject) {
	        var _client;

	        (_client = _this3._client).call.apply(_client, params).then(function (result) {
	          if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && result.errorType === 'Meteor.Error') {
	            reject(result);
	          } else {
	            resolve(result);
	          }
	        }).catch(function (error) {
	          return reject(error);
	        });
	      });
	    }
	  }, {
	    key: 'loginWithPassword',
	    value: function loginWithPassword(email, password) {
	      return this._client.loginWithPassword({ email: email, password: password });
	    }
	  }, {
	    key: 'loggedInEventChannel',
	    value: function loggedInEventChannel() {
	      var _this4 = this;

	      return (0, _reduxSaga.eventChannel)(function (listener) {
	        var loggedIn = _this4._client.on('loggedIn', function () {
	          listener(_this4._client.userId);
	        });
	        return function () {
	          _this4._client.removeListener('loggedIn', loggedIn);
	        };
	      });
	    }
	  }, {
	    key: 'loggedOutEventChannel',
	    value: function loggedOutEventChannel() {
	      var _this5 = this;

	      return (0, _reduxSaga.eventChannel)(function (listener) {
	        var loggedOut = _this5._client.on('loggedOut', function () {
	          listener('logout');
	        });
	        return function () {
	          _this5._client.removeListener('loggedOut', loggedOut);
	        };
	      });
	    }
	  }, {
	    key: 'logout',
	    value: function logout() {
	      return this._client.logout();
	    }
	  }, {
	    key: 'subscribe',
	    value: function subscribe() {
	      var _client2;

	      return (_client2 = this._client).subscribe.apply(_client2, arguments);
	    }
	  }, {
	    key: 'unsubscribe',
	    value: function unsubscribe(id) {
	      this._client.unsubscribe(id);
	    }
	  }, {
	    key: 'collectionEventChannel',
	    value: function collectionEventChannel(selectedCollection) {
	      var _this6 = this;

	      return (0, _reduxSaga.eventChannel)(function (listener) {
	        var added = _this6._client.ddp.on('added', function (_ref) {
	          var collection = _ref.collection;
	          var id = _ref.id;
	          var fields = _ref.fields;

	          if (collection === selectedCollection) {
	            listener({ collection: collection, event: 'added', id: id, fields: fields });
	          }
	        });
	        var changed = _this6._client.ddp.on('changed', function (_ref2) {
	          var collection = _ref2.collection;
	          var id = _ref2.id;
	          var fields = _ref2.fields;

	          if (collection === selectedCollection) {
	            listener({ collection: collection, event: 'changed', id: id, fields: fields });
	          }
	        });
	        var removed = _this6._client.ddp.on('removed', function (_ref3) {
	          var collection = _ref3.collection;
	          var id = _ref3.id;
	          var fields = _ref3.fields;

	          if (collection === selectedCollection) {
	            listener({ collection: collection, event: 'removed', id: id, fields: fields });
	          }
	        });
	        return function () {
	          _this6._client.ddp.removeListener('added', added);
	          _this6._client.ddp.removeListener('changed', changed);
	          _this6._client.ddp.removeListener('removed', removed);
	        };
	      });
	    }
	  }, {
	    key: 'readyEventChannel',
	    value: function readyEventChannel(subscription) {
	      return (0, _reduxSaga.eventChannel)(function (listener) {
	        var ready = subscription.on('ready', function () {
	          listener(subscription.name);
	        });
	        return function () {
	          subscription.removeListener('ready', ready);
	        };
	      });
	    }
	  }, {
	    key: 'errorEventChannel',
	    value: function errorEventChannel(subscription) {
	      return (0, _reduxSaga.eventChannel)(function (listener) {
	        var error = subscription.on('error', function (err) {
	          listener(subscription.name, err);
	        });
	        return function () {
	          subscription.removeListener('error', error);
	        };
	      });
	    }
	  }]);

	  return Connection;
	}();

	var connection = new Connection();
	var start = exports.start = connection.start.bind(connection);
	var connect = exports.connect = connection.connect.bind(connection);
	var connectedEventChannel = exports.connectedEventChannel = connection.connectedEventChannel.bind(connection);
	var disconnectedEventChannel = exports.disconnectedEventChannel = connection.disconnectedEventChannel.bind(connection);
	var call = exports.call = connection.call.bind(connection);
	var loginWithPassword = exports.loginWithPassword = connection.loginWithPassword.bind(connection);
	var loggedInEventChannel = exports.loggedInEventChannel = connection.loggedInEventChannel.bind(connection);
	var loggedOutEventChannel = exports.loggedOutEventChannel = connection.loggedOutEventChannel.bind(connection);
	var logout = exports.logout = connection.logout.bind(connection);
	var subscribe = exports.subscribe = connection.subscribe.bind(connection);
	var unsubscribe = exports.unsubscribe = connection.unsubscribe.bind(connection);
	var collectionEventChannel = exports.collectionEventChannel = connection.collectionEventChannel.bind(connection);
	var readyEventChannel = exports.readyEventChannel = connection.readyEventChannel.bind(connection);
	var errorEventChannel = exports.errorEventChannel = connection.errorEventChannel.bind(connection);
	exports.default = connection;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createClass = createClass;

	var _lodash = __webpack_require__(10);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _wolfy87Eventemitter = __webpack_require__(11);

	var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

	var _ddp = __webpack_require__(12);

	var ddp = _interopRequireWildcard(_ddp);

	var _login = __webpack_require__(17);

	var login = _interopRequireWildcard(_login);

	var _methods = __webpack_require__(20);

	var methods = _interopRequireWildcard(_methods);

	var _passwordLogin = __webpack_require__(21);

	var loginWithPassword = _interopRequireWildcard(_passwordLogin);

	var _subscriptions = __webpack_require__(22);

	var subscriptions = _interopRequireWildcard(_subscriptions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/*
	*   A mixin is a plain javascript object. Mixins are composed by merging the
	*   mixin object own enumerable properties into the Asteroid's base prototype.
	*   The only exception is the `init` method. If the mixin defines an `init`
	*   method, it will _not_ be merged into the prototype, instead it'll be called
	*   at construction time.
	*
	*   Example usage:
	*   ```js
	*   import {createClass} from "asteroid";
	*   import * as myMixinOne from "asteroid-my-mixin-one";
	*   import * as myMixinTwo from "asteroid-my-mixin-two";
	*   const Asteroid = createClass([myMixinOne, myMixinTwo]);
	*   ```
	*/

	function createClass() {
	    var customMixins = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];


	    // Include base mixins before custom ones
	    var mixins = [ddp, methods, subscriptions, login, loginWithPassword].concat(customMixins);

	    var Asteroid = function Asteroid() /* arguments */{
	        var _this = this,
	            _arguments = arguments;

	        // Call each init method
	        mixins.forEach(function (_ref) {
	            var init = _ref.init;
	            return init && init.apply(_this, _arguments);
	        });
	    };

	    Asteroid.prototype = Object.create(_wolfy87Eventemitter2.default.prototype);
	    Asteroid.prototype.constructor = Asteroid;
	    // Merge all mixins into Asteroid.prototype
	    _lodash2.default.apply(undefined, [Asteroid.prototype].concat(_toConsumableArray(mixins)));
	    // And delete the "dangling" init property
	    delete Asteroid.prototype.init;

	    // Return the newly constructed class
	    return Asteroid;
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    stringTag = '[object String]';

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * Creates a function that invokes `func` with its first argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf,
	    nativeKeys = Object.keys,
	    nativeMax = Math.max;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return object != null &&
	    (hasOwnProperty.call(object, key) ||
	      (typeof object == 'object' && key in object && getPrototype(object) === null));
	}

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	var baseKeys = overArg(nativeKeys, Object);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	var getPrototype = overArg(nativeGetPrototype, Object);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = assign;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * EventEmitter v4.2.11 - git.io/ee
	 * Unlicense - http://unlicense.org/
	 * Oliver Caldwell - http://oli.me.uk/
	 * @preserve
	 */

	;(function () {
	    'use strict';

	    /**
	     * Class for managing events.
	     * Can be extended to provide event functionality in other classes.
	     *
	     * @class EventEmitter Manages event registering and emitting.
	     */
	    function EventEmitter() {}

	    // Shortcuts to improve speed and size
	    var proto = EventEmitter.prototype;
	    var exports = this;
	    var originalGlobalValue = exports.EventEmitter;

	    /**
	     * Finds the index of the listener for the event in its storage array.
	     *
	     * @param {Function[]} listeners Array of listeners to search through.
	     * @param {Function} listener Method to look for.
	     * @return {Number} Index of the specified listener, -1 if not found
	     * @api private
	     */
	    function indexOfListener(listeners, listener) {
	        var i = listeners.length;
	        while (i--) {
	            if (listeners[i].listener === listener) {
	                return i;
	            }
	        }

	        return -1;
	    }

	    /**
	     * Alias a method while keeping the context correct, to allow for overwriting of target method.
	     *
	     * @param {String} name The name of the target method.
	     * @return {Function} The aliased method
	     * @api private
	     */
	    function alias(name) {
	        return function aliasClosure() {
	            return this[name].apply(this, arguments);
	        };
	    }

	    /**
	     * Returns the listener array for the specified event.
	     * Will initialise the event object and listener arrays if required.
	     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	     * Each property in the object response is an array of listener functions.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Function[]|Object} All listener functions for the event.
	     */
	    proto.getListeners = function getListeners(evt) {
	        var events = this._getEvents();
	        var response;
	        var key;

	        // Return a concatenated array of all matching events if
	        // the selector is a regular expression.
	        if (evt instanceof RegExp) {
	            response = {};
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    response[key] = events[key];
	                }
	            }
	        }
	        else {
	            response = events[evt] || (events[evt] = []);
	        }

	        return response;
	    };

	    /**
	     * Takes a list of listener objects and flattens it into a list of listener functions.
	     *
	     * @param {Object[]} listeners Raw listener objects.
	     * @return {Function[]} Just the listener functions.
	     */
	    proto.flattenListeners = function flattenListeners(listeners) {
	        var flatListeners = [];
	        var i;

	        for (i = 0; i < listeners.length; i += 1) {
	            flatListeners.push(listeners[i].listener);
	        }

	        return flatListeners;
	    };

	    /**
	     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Object} All listener functions for an event in an object.
	     */
	    proto.getListenersAsObject = function getListenersAsObject(evt) {
	        var listeners = this.getListeners(evt);
	        var response;

	        if (listeners instanceof Array) {
	            response = {};
	            response[evt] = listeners;
	        }

	        return response || listeners;
	    };

	    /**
	     * Adds a listener function to the specified event.
	     * The listener will not be added if it is a duplicate.
	     * If the listener returns true then it will be removed after it is called.
	     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListener = function addListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var listenerIsWrapped = typeof listener === 'object';
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
	                listeners[key].push(listenerIsWrapped ? listener : {
	                    listener: listener,
	                    once: false
	                });
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of addListener
	     */
	    proto.on = alias('addListener');

	    /**
	     * Semi-alias of addListener. It will add a listener that will be
	     * automatically removed after its first execution.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addOnceListener = function addOnceListener(evt, listener) {
	        return this.addListener(evt, {
	            listener: listener,
	            once: true
	        });
	    };

	    /**
	     * Alias of addOnceListener.
	     */
	    proto.once = alias('addOnceListener');

	    /**
	     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	     * You need to tell it what event names should be matched by a regex.
	     *
	     * @param {String} evt Name of the event to create.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvent = function defineEvent(evt) {
	        this.getListeners(evt);
	        return this;
	    };

	    /**
	     * Uses defineEvent to define multiple events.
	     *
	     * @param {String[]} evts An array of event names to define.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvents = function defineEvents(evts) {
	        for (var i = 0; i < evts.length; i += 1) {
	            this.defineEvent(evts[i]);
	        }
	        return this;
	    };

	    /**
	     * Removes a listener function from the specified event.
	     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to remove the listener from.
	     * @param {Function} listener Method to remove from the event.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListener = function removeListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var index;
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key)) {
	                index = indexOfListener(listeners[key], listener);

	                if (index !== -1) {
	                    listeners[key].splice(index, 1);
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of removeListener
	     */
	    proto.off = alias('removeListener');

	    /**
	     * Adds listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	     * You can also pass it a regular expression to add the array of listeners to all events that match it.
	     * Yeah, this function does quite a bit. That's probably a bad thing.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListeners = function addListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(false, evt, listeners);
	    };

	    /**
	     * Removes listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be removed.
	     * You can also pass it a regular expression to remove the listeners from all events that match it.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListeners = function removeListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(true, evt, listeners);
	    };

	    /**
	     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	     * The first argument will determine if the listeners are removed (true) or added (false).
	     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be added/removed.
	     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	     *
	     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
	        var i;
	        var value;
	        var single = remove ? this.removeListener : this.addListener;
	        var multiple = remove ? this.removeListeners : this.addListeners;

	        // If evt is an object then pass each of its properties to this method
	        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
	            for (i in evt) {
	                if (evt.hasOwnProperty(i) && (value = evt[i])) {
	                    // Pass the single listener straight through to the singular method
	                    if (typeof value === 'function') {
	                        single.call(this, i, value);
	                    }
	                    else {
	                        // Otherwise pass back to the multiple function
	                        multiple.call(this, i, value);
	                    }
	                }
	            }
	        }
	        else {
	            // So evt must be a string
	            // And listeners must be an array of listeners
	            // Loop over it and pass each one to the multiple method
	            i = listeners.length;
	            while (i--) {
	                single.call(this, evt, listeners[i]);
	            }
	        }

	        return this;
	    };

	    /**
	     * Removes all listeners from a specified event.
	     * If you do not specify an event then all listeners will be removed.
	     * That means every event will be emptied.
	     * You can also pass a regex to remove all events that match it.
	     *
	     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeEvent = function removeEvent(evt) {
	        var type = typeof evt;
	        var events = this._getEvents();
	        var key;

	        // Remove different things depending on the state of evt
	        if (type === 'string') {
	            // Remove all listeners for the specified event
	            delete events[evt];
	        }
	        else if (evt instanceof RegExp) {
	            // Remove all events matching the regex.
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    delete events[key];
	                }
	            }
	        }
	        else {
	            // Remove all listeners in all events
	            delete this._events;
	        }

	        return this;
	    };

	    /**
	     * Alias of removeEvent.
	     *
	     * Added to mirror the node API.
	     */
	    proto.removeAllListeners = alias('removeEvent');

	    /**
	     * Emits an event of your choice.
	     * When emitted, every listener attached to that event will be executed.
	     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	     * So they will not arrive within the array on the other side, they will be separate.
	     * You can also pass a regular expression to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {Array} [args] Optional array of arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emitEvent = function emitEvent(evt, args) {
	        var listenersMap = this.getListenersAsObject(evt);
	        var listeners;
	        var listener;
	        var i;
	        var key;
	        var response;

	        for (key in listenersMap) {
	            if (listenersMap.hasOwnProperty(key)) {
	                listeners = listenersMap[key].slice(0);
	                i = listeners.length;

	                while (i--) {
	                    // If the listener returns true then it shall be removed from the event
	                    // The function is executed either with a basic call or an apply if there is an args array
	                    listener = listeners[i];

	                    if (listener.once === true) {
	                        this.removeListener(evt, listener.listener);
	                    }

	                    response = listener.listener.apply(this, args || []);

	                    if (response === this._getOnceReturnValue()) {
	                        this.removeListener(evt, listener.listener);
	                    }
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of emitEvent
	     */
	    proto.trigger = alias('emitEvent');

	    /**
	     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {...*} Optional additional arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emit = function emit(evt) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        return this.emitEvent(evt, args);
	    };

	    /**
	     * Sets the current value to check against when executing listeners. If a
	     * listeners return value matches the one set here then it will be removed
	     * after execution. This value defaults to true.
	     *
	     * @param {*} value The new value to check for when executing listeners.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.setOnceReturnValue = function setOnceReturnValue(value) {
	        this._onceReturnValue = value;
	        return this;
	    };

	    /**
	     * Fetches the current value to check against when executing listeners. If
	     * the listeners return value matches this one then it should be removed
	     * automatically. It will return true by default.
	     *
	     * @return {*|Boolean} The current value to check for or the default, true.
	     * @api private
	     */
	    proto._getOnceReturnValue = function _getOnceReturnValue() {
	        if (this.hasOwnProperty('_onceReturnValue')) {
	            return this._onceReturnValue;
	        }
	        else {
	            return true;
	        }
	    };

	    /**
	     * Fetches the events object and creates one if required.
	     *
	     * @return {Object} The events storage object.
	     * @api private
	     */
	    proto._getEvents = function _getEvents() {
	        return this._events || (this._events = {});
	    };

	    /**
	     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	     *
	     * @return {Function} Non conflicting EventEmitter class.
	     */
	    EventEmitter.noConflict = function noConflict() {
	        exports.EventEmitter = originalGlobalValue;
	        return EventEmitter;
	    };

	    // Expose the class either via AMD, CommonJS or the global object
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return EventEmitter;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === 'object' && module.exports){
	        module.exports = EventEmitter;
	    }
	    else {
	        exports.EventEmitter = EventEmitter;
	    }
	}.call(this));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.connect = connect;
	exports.disconnect = disconnect;
	exports.init = init;

	var _ddp = __webpack_require__(13);

	var _ddp2 = _interopRequireDefault(_ddp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	*   Public methods
	*/

	function connect() {
	    this.ddp.connect();
	} /*
	  *   The ddp mixin:
	  *   - instantiates the ddp connection to the server (a DDP instance) and stores
	  *     it in the `ddp` property of the Asteroid instance
	  *   - listens for the `connected` and `disconnected` events of the DDP instance
	  *     and proxies them to the Asteroid instance
	  *   - exposes the `endpoint` public property
	  *   - defines the `connect` and `disconnect` methods, used to control the ddp
	  *     connection with the server
	  */

	function disconnect() {
	    this.ddp.disconnect();
	}

	/*
	*   Init method
	*/

	function init(options) {
	    var _this = this;

	    var endpoint = options.endpoint;
	    var _options$SocketConstr = options.SocketConstructor;
	    var SocketConstructor = _options$SocketConstr === undefined ? WebSocket : _options$SocketConstr;
	    var autoConnect = options.autoConnect;
	    var autoReconnect = options.autoReconnect;
	    var reconnectInterval = options.reconnectInterval;

	    this.endpoint = endpoint;
	    var ddpOptions = {
	        endpoint: endpoint,
	        SocketConstructor: SocketConstructor,
	        autoConnect: autoConnect,
	        autoReconnect: autoReconnect,
	        reconnectInterval: reconnectInterval
	    };
	    this.ddp = new _ddp2.default(ddpOptions).on("connected", function () {
	        return _this.emit("connected");
	    }).on("disconnected", function () {
	        return _this.emit("disconnected");
	    });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _wolfy87Eventemitter = __webpack_require__(11);

	var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

	var _queue = __webpack_require__(14);

	var _queue2 = _interopRequireDefault(_queue);

	var _socket = __webpack_require__(15);

	var _socket2 = _interopRequireDefault(_socket);

	var _utils = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DDP_VERSION = "1";
	var PUBLIC_EVENTS = [
	// Subscription messages
	"ready", "nosub", "added", "changed", "removed",
	// Method messages
	"result", "updated",
	// Error messages
	"error"];
	var DEFAULT_RECONNECT_INTERVAL = 10000;

	var DDP = function (_EventEmitter) {
	    _inherits(DDP, _EventEmitter);

	    _createClass(DDP, [{
	        key: "emit",
	        value: function emit() {
	            var _get2;

	            setTimeout((_get2 = _get(Object.getPrototypeOf(DDP.prototype), "emit", this)).bind.apply(_get2, [this].concat(Array.prototype.slice.call(arguments))), 0);
	        }
	    }]);

	    function DDP(options) {
	        _classCallCheck(this, DDP);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DDP).call(this));

	        _this.status = "disconnected";

	        // Default `autoConnect` and `autoReconnect` to true
	        _this.autoConnect = options.autoConnect !== false;
	        _this.autoReconnect = options.autoReconnect !== false;
	        _this.reconnectInterval = options.reconnectInterval || DEFAULT_RECONNECT_INTERVAL;

	        _this.messageQueue = new _queue2.default(function (message) {
	            if (_this.status === "connected") {
	                _this.socket.send(message);
	                return true;
	            } else {
	                return false;
	            }
	        });

	        _this.socket = new _socket2.default(options.SocketConstructor, options.endpoint);

	        _this.socket.on("open", function () {
	            // When the socket opens, send the `connect` message
	            // to establish the DDP connection
	            _this.socket.send({
	                msg: "connect",
	                version: DDP_VERSION,
	                support: [DDP_VERSION]
	            });
	        });

	        _this.socket.on("close", function () {
	            _this.status = "disconnected";
	            _this.messageQueue.empty();
	            _this.emit("disconnected");
	            if (_this.autoReconnect) {
	                // Schedule a reconnection
	                setTimeout(_this.socket.open.bind(_this.socket), _this.reconnectInterval);
	            }
	        });

	        _this.socket.on("message:in", function (message) {
	            if (message.msg === "connected") {
	                _this.status = "connected";
	                _this.messageQueue.process();
	                _this.emit("connected");
	            } else if (message.msg === "ping") {
	                // Reply with a `pong` message to prevent the server from
	                // closing the connection
	                _this.socket.send({ msg: "pong", id: message.id });
	            } else if ((0, _utils.contains)(PUBLIC_EVENTS, message.msg)) {
	                _this.emit(message.msg, message);
	            }
	        });

	        if (_this.autoConnect) {
	            _this.connect();
	        }

	        return _this;
	    }

	    _createClass(DDP, [{
	        key: "connect",
	        value: function connect() {
	            this.socket.open();
	        }
	    }, {
	        key: "disconnect",
	        value: function disconnect() {
	            /*
	            *   If `disconnect` is called, the caller likely doesn't want the
	            *   the instance to try to auto-reconnect. Therefore we set the
	            *   `autoReconnect` flag to false.
	            */
	            this.autoReconnect = false;
	            this.socket.close();
	        }
	    }, {
	        key: "method",
	        value: function method(name, params) {
	            var id = (0, _utils.uniqueId)();
	            this.messageQueue.push({
	                msg: "method",
	                id: id,
	                method: name,
	                params: params
	            });
	            return id;
	        }
	    }, {
	        key: "sub",
	        value: function sub(name, params) {
	            var id = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	            id || (id = (0, _utils.uniqueId)());
	            this.messageQueue.push({
	                msg: "sub",
	                id: id,
	                name: name,
	                params: params
	            });
	            return id;
	        }
	    }, {
	        key: "unsub",
	        value: function unsub(id) {
	            this.messageQueue.push({
	                msg: "unsub",
	                id: id
	            });
	            return id;
	        }
	    }]);

	    return DDP;
	}(_wolfy87Eventemitter2.default);

	exports.default = DDP;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Queue = function () {

	    /*
	    *   As the name implies, `consumer` is the (sole) consumer of the queue.
	    *   It gets called with each element of the queue and its return value
	    *   serves as a ack, determining whether the element is removed or not from
	    *   the queue, allowing then subsequent elements to be processed.
	    */

	    function Queue(consumer) {
	        _classCallCheck(this, Queue);

	        this.consumer = consumer;
	        this.queue = [];
	    }

	    _createClass(Queue, [{
	        key: "push",
	        value: function push(element) {
	            this.queue.push(element);
	            this.process();
	        }
	    }, {
	        key: "process",
	        value: function process() {
	            if (this.queue.length !== 0) {
	                var ack = this.consumer(this.queue[0]);
	                if (ack) {
	                    this.queue.shift();
	                    this.process();
	                }
	            }
	        }
	    }, {
	        key: "empty",
	        value: function empty() {
	            this.queue = [];
	        }
	    }]);

	    return Queue;
	}();

	exports.default = Queue;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _wolfy87Eventemitter = __webpack_require__(11);

	var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Socket = function (_EventEmitter) {
	    _inherits(Socket, _EventEmitter);

	    function Socket(SocketConstructor, endpoint) {
	        _classCallCheck(this, Socket);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Socket).call(this));

	        _this.SocketConstructor = SocketConstructor;
	        _this.endpoint = endpoint;
	        _this.rawSocket = null;
	        return _this;
	    }

	    _createClass(Socket, [{
	        key: "send",
	        value: function send(object) {
	            var message = JSON.stringify(object);
	            this.rawSocket.send(message);
	            // Emit a copy of the object, as the listener might mutate it.
	            this.emit("message:out", JSON.parse(message));
	        }
	    }, {
	        key: "open",
	        value: function open() {
	            var _this2 = this;

	            /*
	            *   Makes `open` a no-op if there's already a `rawSocket`. This avoids
	            *   memory / socket leaks if `open` is called twice (e.g. by a user
	            *   calling `ddp.connect` twice) without properly disposing of the
	            *   socket connection. `rawSocket` gets automatically set to `null` only
	            *   when it goes into a closed or error state. This way `rawSocket` is
	            *   disposed of correctly: the socket connection is closed, and the
	            *   object can be garbage collected.
	            */
	            if (this.rawSocket) {
	                return;
	            }
	            this.rawSocket = new this.SocketConstructor(this.endpoint);

	            /*
	            *   Calls to `onopen` and `onclose` directly trigger the `open` and
	            *   `close` events on the `Socket` instance.
	            */
	            this.rawSocket.onopen = function () {
	                return _this2.emit("open");
	            };
	            this.rawSocket.onclose = function () {
	                _this2.rawSocket = null;
	                _this2.emit("close");
	            };
	            /*
	            *   Calls to `onerror` trigger the `close` event on the `Socket`
	            *   instance, and cause the `rawSocket` object to be disposed of.
	            *   Since it's not clear what conditions could cause the error and if
	            *   it's possible to recover from it, we prefer to always close the
	            *   connection (if it isn't already) and dispose of the socket object.
	            */
	            this.rawSocket.onerror = function () {
	                // It's not clear what the socket lifecycle is when errors occurr.
	                // Hence, to avoid the `close` event to be emitted twice, before
	                // manually closing the socket we de-register the `onclose`
	                // callback.
	                delete _this2.rawSocket.onclose;
	                // Safe to perform even if the socket is already closed
	                _this2.rawSocket.close();
	                _this2.rawSocket = null;
	                _this2.emit("close");
	            };
	            /*
	            *   Calls to `onmessage` trigger a `message:in` event on the `Socket`
	            *   instance only once the message (first parameter to `onmessage`) has
	            *   been successfully parsed into a javascript object.
	            */
	            this.rawSocket.onmessage = function (message) {
	                var object;
	                try {
	                    object = JSON.parse(message.data);
	                } catch (ignore) {
	                    // Simply ignore the malformed message and return
	                    return;
	                }
	                // Outside the try-catch block as it must only catch JSON parsing
	                // errors, not errors that may occur inside a "message:in" event
	                // handler
	                _this2.emit("message:in", object);
	            };
	        }
	    }, {
	        key: "close",
	        value: function close() {
	            /*
	            *   Avoid throwing an error if `rawSocket === null`
	            */
	            if (this.rawSocket) {
	                this.rawSocket.close();
	            }
	        }
	    }]);

	    return Socket;
	}(_wolfy87Eventemitter2.default);

	exports.default = Socket;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.uniqueId = uniqueId;
	exports.contains = contains;
	var i = 0;
	function uniqueId() {
	    return (i++).toString();
	}

	function contains(array, element) {
	    return array.indexOf(element) !== -1;
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.login = login;
	exports.logout = logout;
	exports.init = init;

	var _loginMethod = __webpack_require__(18);

	/*
	*   Public methods
	*/

	function login(loginParameters) {
	    return this.call("login", loginParameters).then(_loginMethod.onLogin.bind(this));
	} /*
	  *   Login mixin:
	  *    - defines the `login` and `logout` methods
	  *    - exposes the `userId` and `loggedIn` public properties
	  */

	function logout() {
	    return this.call("logout").then(_loginMethod.onLogout.bind(this));
	}

	/*
	*   Init method
	*/

	function init() {
	    this.userId = null;
	    this.loggedIn = false;
	    this.ddp.on("connected", _loginMethod.resumeLogin.bind(this));
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.onLogin = onLogin;
	exports.onLogout = onLogout;
	exports.resumeLogin = resumeLogin;

	var _multiStorage = __webpack_require__(19);

	var multiStorage = _interopRequireWildcard(_multiStorage);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function onLogin(_ref) {
	    var id = _ref.id;
	    var token = _ref.token;

	    this.userId = id;
	    this.loggedIn = true;
	    return multiStorage.set(this.endpoint + "__login_token__", token).then(this.emit.bind(this, "loggedIn", id)).then(function () {
	        return id;
	    });
	}

	function onLogout() {
	    this.userId = null;
	    this.loggedIn = false;
	    return multiStorage.del(this.endpoint + "__login_token__").then(this.emit.bind(this, "loggedOut")).then(function () {
	        return null;
	    });
	}

	function resumeLogin() {
	    return multiStorage.get(this.endpoint + "__login_token__").then(function (resume) {
	        if (!resume) {
	            throw new Error("No login token");
	        }
	        return { resume: resume };
	    }).then(this.login.bind(this)).catch(onLogout.bind(this));
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.get = get;
	exports.set = set;
	exports.del = del;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var genericStorage = {};

	function get(key) {
	    return new Promise(function (resolve, reject) {
	        if (typeof chrome !== "undefined" && chrome.storage) {
	            chrome.storage.local.get(key, function (data) {
	                return resolve(data[key]);
	            });
	        } else if (typeof localStorage !== "undefined") {
	            resolve(localStorage[key]);
	        } else if (typeof AsyncStorage !== "undefined") {
	            AsyncStorage.getItem(key, function (error, data) {
	                if (error) {
	                    reject(error);
	                } else {
	                    resolve(data);
	                }
	            });
	        } else {
	            resolve(genericStorage[key]);
	        }
	    });
	}

	function set(key, value) {
	    return new Promise(function (resolve, reject) {
	        if (typeof chrome !== "undefined" && chrome.storage) {
	            var data = _defineProperty({}, key, value);
	            chrome.storage.local.set(data, resolve);
	        } else if (typeof localStorage !== "undefined") {
	            localStorage[key] = value;
	            resolve();
	        } else if (typeof AsyncStorage !== "undefined") {
	            AsyncStorage.setItem(key, value, function (error) {
	                if (error) {
	                    reject(error);
	                } else {
	                    resolve();
	                }
	            });
	        } else {
	            genericStorage[key] = value;
	            resolve();
	        }
	    });
	}

	function del(key) {
	    return new Promise(function (resolve, reject) {
	        if (typeof chrome !== "undefined" && chrome.storage) {
	            chrome.storage.local.remove(key, resolve);
	        } else if (typeof localStorage !== "undefined") {
	            delete localStorage[key];
	            resolve();
	        } else if (typeof AsyncStorage !== "undefined") {
	            AsyncStorage.removeItem(key, function (error) {
	                if (error) {
	                    reject(error);
	                } else {
	                    resolve();
	                }
	            });
	        } else {
	            delete genericStorage[key];
	            resolve();
	        }
	    });
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.apply = apply;
	exports.call = call;
	exports.init = init;
	/*
	*   The methods mixin:
	*   - defines the `apply` and `call` methods, used to send a ddp `method`
	*     message to the server. In order to do so - due to the asynchronicity of
	*     the ddp method call - it must maintain a cache (under the `methods.cache`
	*     property of the Asteroid instance) of ddp method calls, which is then used
	*     to match ddp `result` messages received from the server
	*/

	/*
	*   Public methods
	*/

	function apply(method, params) {
	    var _this = this;

	    return new Promise(function (resolve, reject) {
	        var id = _this.ddp.method(method, params);
	        _this.methods.cache[id] = { resolve: resolve, reject: reject };
	    });
	}

	function call(method) {
	    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        params[_key - 1] = arguments[_key];
	    }

	    return this.apply(method, params);
	}

	/*
	*   Init method
	*/

	function init() {
	    var _this2 = this;

	    this.methods = {
	        cache: {}
	    };
	    this.ddp.on("result", function (_ref) {
	        var id = _ref.id;
	        var error = _ref.error;
	        var result = _ref.result;

	        var method = _this2.methods.cache[id];
	        if (error) {
	            method.reject(error);
	        } else {
	            method.resolve(result);
	        }
	        delete _this2.methods.cache[id];
	    });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createUser = createUser;
	exports.loginWithPassword = loginWithPassword;

	var _loginMethod = __webpack_require__(18);

	/*
	*   Public methods
	*/

	function createUser(_ref) {
	    var username = _ref.username;
	    var email = _ref.email;
	    var password = _ref.password;

	    var options = {
	        password: password,
	        user: {
	            username: username,
	            email: email
	        }
	    };
	    return this.call("createUser", options).then(_loginMethod.onLogin.bind(this));
	} /*
	  *   The password-login mixin:
	  *   - defines the `createUser` and `loginWithPassword` methods, porcelain for
	  *     calling the `createUser` and `login` ddp methods
	  */

	function loginWithPassword(_ref2) {
	    var username = _ref2.username;
	    var email = _ref2.email;
	    var password = _ref2.password;

	    var loginParameters = {
	        password: password,
	        user: {
	            username: username,
	            email: email
	        }
	    };
	    return this.call("login", loginParameters).then(_loginMethod.onLogin.bind(this));
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.subscribe = subscribe;
	exports.unsubscribe = unsubscribe;
	exports.init = init;

	var _lodash = __webpack_require__(10);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _wolfy87Eventemitter = __webpack_require__(11);

	var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

	var _subscriptionCache = __webpack_require__(23);

	var _subscriptionCache2 = _interopRequireDefault(_subscriptionCache);

	var _fingerprintSub = __webpack_require__(24);

	var _fingerprintSub2 = _interopRequireDefault(_fingerprintSub);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
	                                                                                                                                                                                                    *   The subscriptions mixin:
	                                                                                                                                                                                                    *   - defines the `subscribe` and `unsubscribe` methods, used to send ddp `sub`
	                                                                                                                                                                                                    *     and `unsub` messages to the server. In order to do so - due to the
	                                                                                                                                                                                                    *     asynchronicity of the ddp sub and unsub calls - it must maintain a cache
	                                                                                                                                                                                                    *     (under the `subscriptions.cache` property of the Asteroid instance) of ddp
	                                                                                                                                                                                                    *     subscriptions. The cache is then used to match ddp `ready` and `nosub`
	                                                                                                                                                                                                    *     messages received from the server, and to restart active subscriptions in
	                                                                                                                                                                                                    *     the event of a reconnection (since Meteor does not support resuming ddp
	                                                                                                                                                                                                    *     sessions, as of version 1.2.0.2)
	                                                                                                                                                                                                    */

	/*
	*   Private methods: they are invoked with the asteroid instance as context, but
	*   they are not exported so they don't clutter the Asteroid class prototype.
	*/

	function restartSubscription(_ref) {
	    var id = _ref.id;
	    var name = _ref.name;
	    var params = _ref.params;
	    var stillInQueue = _ref.stillInQueue;

	    // Only restart the subscription if it isn't still in ddp's queue.
	    if (!stillInQueue) {
	        // The subscription must be deleted *before* re-subscribing, otherwise
	        // `subscribe` hits the cache and does nothing
	        this.subscriptions.cache.del(id);
	        this.subscribe.apply(this, [name].concat(_toConsumableArray(params)));
	    }
	}

	/*
	*   Public methods
	*/

	function subscribe(name) {
	    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        params[_key - 1] = arguments[_key];
	    }

	    var fingerprint = (0, _fingerprintSub2.default)(name, params);
	    var sub = this.subscriptions.cache.get(fingerprint);
	    if (!sub) {
	        // If there is no cached subscription, subscribe
	        var id = this.ddp.sub(name, params);
	        // ddp.js enqueues messages to send if a connection has not yet been
	        // established. Upon connection, when subscriptions are restarted, we
	        // don't want to restart those subscriptions which had been made when
	        // the connection had not yet been established, and therefore are still
	        // in the queue. For this reason, we save ddp's connection status onto
	        // the subscription object and we check it later to decide wether to
	        // restart the subscription or not.
	        var stillInQueue = this.ddp.status !== "connected";
	        // Build the subscription object and save it in the cache
	        sub = (0, _lodash2.default)(new _wolfy87Eventemitter2.default(), { fingerprint: fingerprint, id: id, name: name, params: params, stillInQueue: stillInQueue });
	        this.subscriptions.cache.add(sub);
	    }
	    // Return the subscription object
	    return sub;
	}

	function unsubscribe(id) {
	    this.ddp.unsub(id);
	}

	/*
	*   Init method
	*/

	function init() {
	    var _this = this;

	    this.subscriptions = {
	        cache: new _subscriptionCache2.default()
	    };
	    this.ddp.on("ready", function (_ref2) {
	        var subs = _ref2.subs;

	        subs.forEach(function (id) {
	            _this.subscriptions.cache.get(id).emit("ready");
	        });
	    }).on("nosub", function (_ref3) {
	        var error = _ref3.error;
	        var id = _ref3.id;

	        if (error) {
	            _this.subscriptions.cache.get(id).emit("error", error);
	        }
	        _this.subscriptions.cache.del(id);
	    }).on("connected", function () {
	        _this.subscriptions.cache.forEach(restartSubscription.bind(_this));
	    });
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SubscriptionCache = function () {
	    function SubscriptionCache() {
	        _classCallCheck(this, SubscriptionCache);

	        this.byFingerprint = {};
	        this.byId = {};
	    }

	    _createClass(SubscriptionCache, [{
	        key: "add",
	        value: function add(sub) {
	            this.byFingerprint[sub.fingerprint] = sub;
	            this.byId[sub.id] = sub;
	        }
	    }, {
	        key: "get",
	        value: function get(idOrFingerprint) {
	            return this.byId[idOrFingerprint] || this.byFingerprint[idOrFingerprint] || null;
	        }
	    }, {
	        key: "del",
	        value: function del(idOrFingerprint) {
	            var sub = this.get(idOrFingerprint) || {};
	            delete this.byFingerprint[sub.fingerprint];
	            delete this.byId[sub.id];
	        }
	    }, {
	        key: "forEach",
	        value: function forEach(iterator) {
	            var _this = this;

	            Object.keys(this.byId).forEach(function (id) {
	                iterator(_this.byId[id]);
	            });
	        }
	    }]);

	    return SubscriptionCache;
	}();

	exports.default = SubscriptionCache;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = fingerprintSub;
	function fingerprintSub(name, params) {
	    return JSON.stringify({ name: name, params: params });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))("ac46257ab981ad0673dc2f51603455a2");

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var url = exports.url = 'wss://meteor.worona.io/websocket';
	var timeout = exports.timeout = 10000;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee;

	var _effects = __webpack_require__(28);

	var _connectionStarter = __webpack_require__(29);

	var _connectionStarter2 = _interopRequireDefault(_connectionStarter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _marked = [_callee].map(regeneratorRuntime.mark);

	function _callee() {
	  return regeneratorRuntime.wrap(function _callee$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return [(0, _effects.fork)(_connectionStarter2.default)];

	        case 2:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))("9538dc1f1f3ffc7eff656785a3b0e00e");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = connectionStarter;

	var _effects = __webpack_require__(28);

	var _reduxSaga = __webpack_require__(25);

	var _errors = __webpack_require__(30);

	var _config = __webpack_require__(26);

	var _libs = __webpack_require__(8);

	var libs = _interopRequireWildcard(_libs);

	var _actions = __webpack_require__(1);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var _marked = [connectionStarter].map(regeneratorRuntime.mark); /* eslint-disable no-constant-condition */


	function connectionStarter() {
	  var connectedChannel, disconnectedChannel, _ref, connected;

	  return regeneratorRuntime.wrap(function connectionStarter$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return (0, _effects.call)(libs.start);

	        case 2:
	          _context.next = 4;
	          return (0, _effects.put)(actions.connectionStarted());

	        case 4:
	          _context.next = 6;
	          return (0, _effects.call)(libs.connectedEventChannel);

	        case 6:
	          connectedChannel = _context.sent;
	          _context.next = 9;
	          return (0, _effects.call)(libs.disconnectedEventChannel);

	        case 9:
	          disconnectedChannel = _context.sent;

	        case 10:
	          if (false) {
	            _context.next = 32;
	            break;
	          }

	          _context.next = 13;
	          return (0, _effects.put)(actions.connectionRequested());

	        case 13:
	          _context.next = 15;
	          return (0, _effects.call)(libs.connect);

	        case 15:
	          _context.next = 17;
	          return (0, _effects.race)({
	            connected: (0, _effects.take)(connectedChannel),
	            timeout: (0, _effects.call)(_reduxSaga.delay, _config.timeout)
	          });

	        case 17:
	          _ref = _context.sent;
	          connected = _ref.connected;

	          if (!connected) {
	            _context.next = 28;
	            break;
	          }

	          _context.next = 22;
	          return (0, _effects.put)(actions.connectionSucceed());

	        case 22:
	          _context.next = 24;
	          return (0, _effects.take)(disconnectedChannel);

	        case 24:
	          _context.next = 26;
	          return (0, _effects.put)(actions.disconnected(_errors.CONNECTION_LOST));

	        case 26:
	          _context.next = 30;
	          break;

	        case 28:
	          _context.next = 30;
	          return (0, _effects.put)(actions.connectionFailed(_errors.CONNECTION_TIMEOUT));

	        case 30:
	          _context.next = 10;
	          break;

	        case 32:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CONNECTION_LOST = exports.CONNECTION_LOST = 'Connection lost';
	var CONNECTION_TIMEOUT = exports.CONNECTION_TIMEOUT = 'Connection timeout';

/***/ }
/******/ ]);