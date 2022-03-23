/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Board.js":
/*!*************************!*\
  !*** ./src/js/Board.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/js/Game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Board = /*#__PURE__*/function () {
  function Board(id) {
    _classCallCheck(this, Board);

    this.gameBoard = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.gameBoard)(id);
  }

  _createClass(Board, [{
    key: "fillWithNewBalls",
    value: function fillWithNewBalls() {
      var a25 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.array25)();
      this.gameBoard.forEach(function (bin) {
        var ball = document.createElement('div');
        var ballId = a25.shift();
        var number = document.createTextNode(ballId);
        ball.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
        ball.appendChild(number);
        ball.addEventListener('click', function (e) {
          _Game__WEBPACK_IMPORTED_MODULE_1__["default"].ballClick(ballId, e.target);
        });
        bin.appendChild(ball);
      });
    }
  }, {
    key: "clearBalls",
    value: function clearBalls() {
      this.gameBoard.forEach(function (bin) {
        bin.innerHTML = '';
      });
    }
  }]);

  return Board;
}();



/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ "./src/js/Board.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
  }

  _createClass(Game, null, [{
    key: "loadGame",
    value: // 0 - neprasidejes, 1 - einantis, 2 - sustojes
    function loadGame() {
      var _this = this;

      this.a = new _Board__WEBPACK_IMPORTED_MODULE_0__["default"]('a');
      this.b = new _Board__WEBPACK_IMPORTED_MODULE_0__["default"]('b');
      this.controls = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.gameControls)();
      this.msg = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.msgPanel)();
      this.controls.timer.innerText = 0;
      this.controls.start.addEventListener('click', function () {
        _this.startGame();
      });
      this.controls.reset.addEventListener('click', function () {
        _this.resetGame();
      });
      this.msg.innerText = 'Press Start to begin!';
    }
  }, {
    key: "startGame",
    value: function startGame() {
      if (this.gameStatus > 0) {
        return;
      }

      this.gameStatus = 1;
      this.a.fillWithNewBalls();
      this.nextBall = 1;
      this.startTimer();
      this.msg.innerText = 'Game Started';
    }
  }, {
    key: "endGame",
    value: function endGame() {
      this.gameStatus = 2;
      this.stopTimer();
      this.a.clearBalls();
      this.b.clearBalls();
      this.msg.innerText = 'Well Played!';
      this.controls.timer.innerText = 0;
    }
  }, {
    key: "goToNext",
    value: function goToNext() {
      this.nextBall++;

      if (this.nextBall > 3) {
        this.endGame();
      }
    }
  }, {
    key: "ballClick",
    value: function ballClick(number, ball) {
      if (this.nextBall == number) {
        this.msg.innerText = 'Nice one!';
        this.moveBall(ball);
        this.goToNext();
      } else {
        this.msg.innerText = 'Oof, try again...';
      }
    }
  }, {
    key: "moveBall",
    value: function moveBall(ball) {
      this.b.gameBoard[this.nextBall - 1].appendChild(ball);
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this2 = this;

      var time = 0;
      this.timerId = setInterval(function () {
        _this2.controls.timer.innerText = ++time;
      }, 1000);
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      clearInterval(this.timerId);
    }
  }, {
    key: "resetGame",
    value: function resetGame() {
      this.gameStatus = 0;
      this.controls.timer.innerText = 0;
      this.a.clearBalls();
      this.b.clearBalls();
      this.stopTimer();
      this.msg.innerText = 'Press Start to begin!';
    }
  }]);

  return Game;
}();

_defineProperty(Game, "a", void 0);

_defineProperty(Game, "b", void 0);

_defineProperty(Game, "nextBall", void 0);

_defineProperty(Game, "timerId", void 0);

_defineProperty(Game, "gameStatus", 0);

_defineProperty(Game, "msg", void 0);



/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/js/Game.js");

window.addEventListener('DOMContentLoaded', function () {
  _Game__WEBPACK_IMPORTED_MODULE_0__["default"].loadGame();
});

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "array25": () => (/* binding */ array25),
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard),
/* harmony export */   "gameControls": () => (/* binding */ gameControls),
/* harmony export */   "msgPanel": () => (/* binding */ msgPanel)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var gameBoard = function gameBoard(id) {
  var square = document.createElement('div');
  square.classList.add('square');
  square.id = id;
  var bins = [];

  for (var i = 0; i < 25; i++) {
    bins[i] = document.createElement('div');
    bins[i].classList.add('bin');
    square.appendChild(bins[i]);
  }

  document.querySelector('body').appendChild(square);
  return bins;
};
var array25 = function array25() {
  var arrayShuffle = new Set();

  do {
    arrayShuffle.add(rand(1, 25));
  } while (arrayShuffle.size < 25);

  return _toConsumableArray(arrayShuffle);
};
var gameControls = function gameControls() {
  var panel = document.createElement('div');
  panel.classList.add('panel');
  var timer = document.createElement('h3');
  var start = document.createElement('button');
  start.appendChild(document.createTextNode('Start'));
  var reset = document.createElement('button');
  reset.appendChild(document.createTextNode('Reset Board'));
  panel.appendChild(start);
  panel.appendChild(timer);
  panel.appendChild(reset);
  document.querySelector('body').appendChild(panel);
  return {
    timer: timer,
    start: start,
    reset: reset
  };
};
var msgPanel = function msgPanel() {
  var msgDiv = document.createElement('div');
  msgDiv.classList.add('msg');
  document.querySelector('body').appendChild(msgDiv);
  return msgDiv;
};

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/app": 0,
/******/ 			"public/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkballs"] = self["webpackChunkballs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/app"], () => (__webpack_require__("./src/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;