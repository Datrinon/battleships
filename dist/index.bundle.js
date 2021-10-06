/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/game.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/game.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* For CSS important to the functioning of the game. */\r\n\r\n.no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.ship.draggable .cell {\r\n  background-color: #2c97fc;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55) !important;\r\n  background-color: rgba(0, 255, 64, 0.3) !important;\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  /* border: 1px solid rgb(131, 25, 25); */\r\n  border: 1px solid rgb(255, 255, 255);\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.cpu-ship-reveal {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.gameboard-area {\r\n  transition: border 0.7s;\r\n}\r\n\r\n.gameboard-area.game-active {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.p1.gameboard .cell.attackable .ship {\r\n  cursor: default;\r\n}\r\n\r\n.p1.gameboard .cell.attackable:hover {\r\n  background-color: revert;\r\n}\r\n\r\n.p2.gameboard .cell.attackable:not(.attacked):hover {\r\n  background-color: rgba(255,0,0,0.6);\r\n  cursor: crosshair;\r\n}\r\n\r\ndiv.gameboard-area.game-active > div.gameboard .cell.attacked {\r\n  cursor: default;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.gameboard .cell.attacked::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 25%;\r\n  visibility: unset;\r\n  z-index: 100;\r\n  font-family: monospace;\r\n  font-size: 170%;\r\n  right: 25%;\r\n  /* bottom: 25%; */\r\n}\r\n\r\n.gameboard .cell.attacked.miss::after {\r\n  content: \"○\";\r\n  color: white;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n.gameboard .cell.attacked.hit::after {\r\n  content: \"X\";\r\n  color: red;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n@keyframes smash {\r\n  0% {\r\n    opacity: 0.25;\r\n    transform: scale(1.5);\r\n  }\r\n  75% {\r\n    opacity: 0.5;\r\n    transform: scale(0.65);\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.ship-name.destroyed {\r\n  color: #ff2424ab;\r\n  /* font-style: italic; */\r\n  text-decoration: line-through;\r\n}\r\n\r\np.ship-name.destroyed::before {\r\n  content: \"\";\r\n  content: \"⦻\";\r\n  color: red;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}", "",{"version":3,"sources":["webpack://./src/css/game.css"],"names":[],"mappings":"AAAA,sDAAsD;;AAEtD;EACE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA,8DAA8D;AAC9D,uDAAuD;AACvD,uDAAuD;AACvD,gFAAgF;AAChF;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,4CAA4C;EAC5C,kDAAkD;AACpD;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,wCAAwC;EACxC,oCAAoC;EACpC,sCAAsC;AACxC;;AAEA;EACE,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;EACjC,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,iBAAiB;EACjB,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE;IACE,aAAa;IACb,qBAAqB;EACvB;EACA;IACE,YAAY;IACZ,sBAAsB;EACxB;EACA;IACE,YAAY;IACZ,mBAAmB;EACrB;AACF;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,qBAAqB;EACrB,qBAAqB;AACvB","sourcesContent":["/* For CSS important to the functioning of the game. */\r\n\r\n.no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.ship.draggable .cell {\r\n  background-color: #2c97fc;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55) !important;\r\n  background-color: rgba(0, 255, 64, 0.3) !important;\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  /* border: 1px solid rgb(131, 25, 25); */\r\n  border: 1px solid rgb(255, 255, 255);\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.cpu-ship-reveal {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.gameboard-area {\r\n  transition: border 0.7s;\r\n}\r\n\r\n.gameboard-area.game-active {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.p1.gameboard .cell.attackable .ship {\r\n  cursor: default;\r\n}\r\n\r\n.p1.gameboard .cell.attackable:hover {\r\n  background-color: revert;\r\n}\r\n\r\n.p2.gameboard .cell.attackable:not(.attacked):hover {\r\n  background-color: rgba(255,0,0,0.6);\r\n  cursor: crosshair;\r\n}\r\n\r\ndiv.gameboard-area.game-active > div.gameboard .cell.attacked {\r\n  cursor: default;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.gameboard .cell.attacked::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 25%;\r\n  visibility: unset;\r\n  z-index: 100;\r\n  font-family: monospace;\r\n  font-size: 170%;\r\n  right: 25%;\r\n  /* bottom: 25%; */\r\n}\r\n\r\n.gameboard .cell.attacked.miss::after {\r\n  content: \"○\";\r\n  color: white;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n.gameboard .cell.attacked.hit::after {\r\n  content: \"X\";\r\n  color: red;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n@keyframes smash {\r\n  0% {\r\n    opacity: 0.25;\r\n    transform: scale(1.5);\r\n  }\r\n  75% {\r\n    opacity: 0.5;\r\n    transform: scale(0.65);\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.ship-name.destroyed {\r\n  color: #ff2424ab;\r\n  /* font-style: italic; */\r\n  text-decoration: line-through;\r\n}\r\n\r\np.ship-name.destroyed::before {\r\n  content: \"\";\r\n  content: \"⦻\";\r\n  color: red;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/page.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/page.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* For CSS that has aesthetic purposes. */\r\nhtml, body {\r\n  height: 100%;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  color: white;\r\n  background: linear-gradient(353deg, rgb(11 35 56 / 89%), rgb(94 207 219 / 54%) 55.71%),\r\n  linear-gradient(265deg, rgb(238 8 26 / 90%), rgb(18 38 88 / 73%) 70.71%),\r\n  linear-gradient(142deg, rgb(133 131 205 / 83%), rgb(49 82 103 / 77%) 70.71%);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.content {\r\n  flex: 1 0 auto;\r\n}\r\n.footer {\r\n  flex-shrink: 0;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.footer .gh-icon {\r\n  width: 16px;\r\n  padding: 2px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.header {\r\n  font-family: \"Poppins\";\r\n  text-shadow: 4px 2px 2px #00000045;\r\n  margin-left: 15px;  \r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items:center;\r\n}\r\n\r\n.title {\r\n  font-size: 225%;  \r\n}\r\n\r\n.author {\r\n  width: fit-content;\r\n  position: relative;\r\n  left: 66px;\r\n}\r\n\r\n.logo-pic {\r\n  width: 64px;\r\n}\r\n\r\n.gameboard-grid {\r\n  box-shadow: 3px 3px 16px 4px #45434394;\r\n}\r\n\r\n.p1 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1 .gameboard-grid > .cell {\r\n  background-color: rgb(2 12 32 / 73%);\r\n}\r\n\r\n.p2 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1.gameboard .cell {\r\n  border: 1px solid rgb(25,79,131);\r\n}\r\n\r\n.p2.gameboard .cell:not(.cpu-ship-placed) {\r\n  border: 1px solid rgb(131, 25, 25);\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.gameboard-owner {\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 125%;\r\n  font-variant-caps: all-small-caps;\r\n  font-weight: 500;\r\n}\r\n\r\n.ship {\r\n  position: relative;\r\n  border: 1px solid black;\r\n}\r\n\r\ndiv.ship.draggable {\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\ndiv.ship.draggable div.cell {\r\n  border: 3px outset #1964c4;\r\n  width: 19.7px;\r\n  height: 19.1px;\r\n}\r\n\r\ndiv.ship-placed.vertical div.cell {\r\n  height: 19.7px;\r\n  width: 19.1px;\r\n}\r\n\r\n\r\ndiv.ship-placed {\r\n  top: -2px;\r\n  left: -2px;\r\n  background-color: #189dd1;\r\n}\r\n\r\ndiv.ship.draggable:hover {\r\n  box-shadow: 0px 0px 10px rgba(184, 233, 255, 0.562);\r\n  border: 1px solid orange;\r\n}\r\n\r\ndiv.ship.draggable:hover::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 100%; \r\n  left: 15px;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: black black transparent transparent;\r\n}\r\n\r\ndiv.ship.draggable:hover::after {\r\n  position: absolute;\r\n  content: attr(data-name);\r\n  font-variant-caps: all-small-caps;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  background-color: rgb(45,45,45);\r\n  padding: 3px;\r\n  color: beige;\r\n  bottom: calc(100% + 5px);\r\n}\r\n\r\n.cell.numbering .number-label {\r\n  margin: 6px auto;\r\n  font-family: monospace;\r\n  font-size: 110%;\r\n  width: fit-content;\r\n}\r\n\r\n.game-area {\r\n  margin: 15px auto;\r\n}\r\n\r\n.dialog-area {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  text-shadow: 2px 1px 6px rgb(100, 100, 100);\r\n  min-height: 75px;\r\n}\r\n\r\n.dialog-area .dialog-msg {\r\n  font-size: 165%;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.dialog-area .controls-help {\r\n  font-size: 0.9rem;\r\n  line-height: .25in;\r\n}\r\n\r\n.menu-area {\r\n  width: 290px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.ship-selection > * {\r\n  margin: 5px 0;\r\n}\r\n\r\n.ship-placer {\r\n  min-height: 200px;\r\n}\r\n\r\n.ship-placer-label, .start-game-prompt > [for=\"p1-name\"] {\r\n  font-variant-caps: all-petite-caps;\r\n  font-size: 1.1rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n\r\n#p1-name {\r\n  all: unset;\r\n  margin: 5px 0;\r\n  margin-left: 5px;\r\n  border-bottom: 1px solid white;\r\n  width: 75%;\r\n}\r\n\r\n.start-game-button, .play-again {\r\n  font-family: \"Poppins\";\r\n  font-size: 1.05rem;\r\n  width: 100%;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: rgb(255, 215, 140);\r\n  transition: background-color 0.25s ease-out;\r\n}\r\n\r\n.start-game-button:disabled {\r\n  background-color: grey;\r\n}\r\n\r\n.subdialog-area {\r\n  /* animation: pull-open 1.25s; */\r\n}\r\n\r\n@keyframes pull-open {\r\n  from {\r\n    transform: scaleY(0.1);\r\n  }\r\n  to {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n\r\n.start-game-button:not([disabled]):hover {\r\n  background-color: rgb(255, 231, 185);\r\n}\r\n\r\n.start-game-button:active, .play-again:active {\r\n  background-color: rgb(165, 125, 49);\r\n}\r\n\r\n.appear-from-bottom {\r\n  animation: appear-from-bottom 0.75s ease-in;\r\n}\r\n\r\n.appear-from-right {\r\n  animation: appear-from-right 1s ease-out;\r\n}\r\n\r\n@keyframes appear-from-bottom {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes appear-from-right {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(10px);\r\n  }\r\n  30% {\r\n    opacity: 0;\r\n    transform: translateX(10px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.summary-area {\r\n  width: 320px;\r\n  margin: 15px auto;\r\n}\r\n\r\n.victory-message {\r\n  font-family: \"Poppins\";\r\n  text-align: center;\r\n  font-size: 150%;\r\n}\r\n\r\n.winner {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 115%;\r\n  font-weight: bold;\r\n}\r\n\r\n.accuracy {\r\n  text-align: center;\r\n  font-family: \"Poppins\";\r\n  font-size: 115%;\r\n  margin: 15px auto 0px auto;\r\n}\r\n\r\n.acc-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 15px;\r\n  font-variant-caps: petite-caps;\r\n}\r\n\r\n.play-again {\r\n  margin: 15px 0;\r\n}\r\n\r\n.summary-screen {\r\n  text-shadow: 2px 0px 3px #3c3c3c;\r\n  border: 1px solid #382504;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: #211a3078;\r\n  box-shadow: 5px 3px 14px 4px #00000033;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/css/page.css"],"names":[],"mappings":"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","sourcesContent":["/* For CSS that has aesthetic purposes. */\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\nhtml, body {\r\n  height: 100%;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  color: white;\r\n  background: linear-gradient(353deg, rgb(11 35 56 / 89%), rgb(94 207 219 / 54%) 55.71%),\r\n  linear-gradient(265deg, rgb(238 8 26 / 90%), rgb(18 38 88 / 73%) 70.71%),\r\n  linear-gradient(142deg, rgb(133 131 205 / 83%), rgb(49 82 103 / 77%) 70.71%);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.content {\r\n  flex: 1 0 auto;\r\n}\r\n.footer {\r\n  flex-shrink: 0;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.footer .gh-icon {\r\n  width: 16px;\r\n  padding: 2px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.header {\r\n  font-family: \"Poppins\";\r\n  text-shadow: 4px 2px 2px #00000045;\r\n  margin-left: 15px;  \r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items:center;\r\n}\r\n\r\n.title {\r\n  font-size: 225%;  \r\n}\r\n\r\n.author {\r\n  width: fit-content;\r\n  position: relative;\r\n  left: 66px;\r\n}\r\n\r\n.logo-pic {\r\n  width: 64px;\r\n}\r\n\r\n.gameboard-grid {\r\n  box-shadow: 3px 3px 16px 4px #45434394;\r\n}\r\n\r\n.p1 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1 .gameboard-grid > .cell {\r\n  background-color: rgb(2 12 32 / 73%);\r\n}\r\n\r\n.p2 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1.gameboard .cell {\r\n  border: 1px solid rgb(25,79,131);\r\n}\r\n\r\n.p2.gameboard .cell:not(.cpu-ship-placed) {\r\n  border: 1px solid rgb(131, 25, 25);\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.gameboard-owner {\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 125%;\r\n  font-variant-caps: all-small-caps;\r\n  font-weight: 500;\r\n}\r\n\r\n.ship {\r\n  position: relative;\r\n  border: 1px solid black;\r\n}\r\n\r\ndiv.ship.draggable {\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\ndiv.ship.draggable div.cell {\r\n  border: 3px outset #1964c4;\r\n  width: 19.7px;\r\n  height: 19.1px;\r\n}\r\n\r\ndiv.ship-placed.vertical div.cell {\r\n  height: 19.7px;\r\n  width: 19.1px;\r\n}\r\n\r\n\r\ndiv.ship-placed {\r\n  top: -2px;\r\n  left: -2px;\r\n  background-color: #189dd1;\r\n}\r\n\r\ndiv.ship.draggable:hover {\r\n  box-shadow: 0px 0px 10px rgba(184, 233, 255, 0.562);\r\n  border: 1px solid orange;\r\n}\r\n\r\ndiv.ship.draggable:hover::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 100%; \r\n  left: 15px;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: black black transparent transparent;\r\n}\r\n\r\ndiv.ship.draggable:hover::after {\r\n  position: absolute;\r\n  content: attr(data-name);\r\n  font-variant-caps: all-small-caps;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  background-color: rgb(45,45,45);\r\n  padding: 3px;\r\n  color: beige;\r\n  bottom: calc(100% + 5px);\r\n}\r\n\r\n.cell.numbering .number-label {\r\n  margin: 6px auto;\r\n  font-family: monospace;\r\n  font-size: 110%;\r\n  width: fit-content;\r\n}\r\n\r\n.game-area {\r\n  margin: 15px auto;\r\n}\r\n\r\n.dialog-area {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  text-shadow: 2px 1px 6px rgb(100, 100, 100);\r\n  min-height: 75px;\r\n}\r\n\r\n.dialog-area .dialog-msg {\r\n  font-size: 165%;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.dialog-area .controls-help {\r\n  font-size: 0.9rem;\r\n  line-height: .25in;\r\n}\r\n\r\n.menu-area {\r\n  width: 290px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.ship-selection > * {\r\n  margin: 5px 0;\r\n}\r\n\r\n.ship-placer {\r\n  min-height: 200px;\r\n}\r\n\r\n.ship-placer-label, .start-game-prompt > [for=\"p1-name\"] {\r\n  font-variant-caps: all-petite-caps;\r\n  font-size: 1.1rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n\r\n#p1-name {\r\n  all: unset;\r\n  margin: 5px 0;\r\n  margin-left: 5px;\r\n  border-bottom: 1px solid white;\r\n  width: 75%;\r\n}\r\n\r\n.start-game-button, .play-again {\r\n  font-family: \"Poppins\";\r\n  font-size: 1.05rem;\r\n  width: 100%;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: rgb(255, 215, 140);\r\n  transition: background-color 0.25s ease-out;\r\n}\r\n\r\n.start-game-button:disabled {\r\n  background-color: grey;\r\n}\r\n\r\n.subdialog-area {\r\n  /* animation: pull-open 1.25s; */\r\n}\r\n\r\n@keyframes pull-open {\r\n  from {\r\n    transform: scaleY(0.1);\r\n  }\r\n  to {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n\r\n.start-game-button:not([disabled]):hover {\r\n  background-color: rgb(255, 231, 185);\r\n}\r\n\r\n.start-game-button:active, .play-again:active {\r\n  background-color: rgb(165, 125, 49);\r\n}\r\n\r\n.appear-from-bottom {\r\n  animation: appear-from-bottom 0.75s ease-in;\r\n}\r\n\r\n.appear-from-right {\r\n  animation: appear-from-right 1s ease-out;\r\n}\r\n\r\n@keyframes appear-from-bottom {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes appear-from-right {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(10px);\r\n  }\r\n  30% {\r\n    opacity: 0;\r\n    transform: translateX(10px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.summary-area {\r\n  width: 320px;\r\n  margin: 15px auto;\r\n}\r\n\r\n.victory-message {\r\n  font-family: \"Poppins\";\r\n  text-align: center;\r\n  font-size: 150%;\r\n}\r\n\r\n.winner {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 115%;\r\n  font-weight: bold;\r\n}\r\n\r\n.accuracy {\r\n  text-align: center;\r\n  font-family: \"Poppins\";\r\n  font-size: 115%;\r\n  margin: 15px auto 0px auto;\r\n}\r\n\r\n.acc-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 15px;\r\n  font-variant-caps: petite-caps;\r\n}\r\n\r\n.play-again {\r\n  margin: 15px 0;\r\n}\r\n\r\n.summary-screen {\r\n  text-shadow: 2px 0px 3px #3c3c3c;\r\n  border: 1px solid #382504;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: #211a3078;\r\n  box-shadow: 5px 3px 14px 4px #00000033;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}", "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/game.css":
/*!**************************!*\
  !*** ./src/css/game.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./game.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/game.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/page.css":
/*!**************************!*\
  !*** ./src/css/page.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./page.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images sync \\.(png|jpe?g|svg)$":
/*!**********************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./battleship.png": "./src/images/battleship.png",
	"./gh.png": "./src/images/gh.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/js/BattleshipElement.js":
/*!*************************************!*\
  !*** ./src/js/BattleshipElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BattleshipElements": () => (/* binding */ BattleshipElements)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/component.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/js/utility.js");
/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/battleship.png */ "./src/images/battleship.png");
/* harmony import */ var _gamemanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamemanager */ "./src/js/gamemanager.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");






/**
 * Creates elements for Battleship.
 */
 class BattleshipElements {

  #dialogHolder;
  #gameContainer;
  gameManager;
  #currentDraggedShipId;
  #currentDraggedLength;

  constructor(gameManager) {
    this.gameManager = gameManager;
  }

  header() {
    const heading = _utility__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("header", "header");
    const titleContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("title-container");
    const titleLabel = _component__WEBPACK_IMPORTED_MODULE_0__["default"].heading("Battleships", 1, "title");
    const titleIcon = _component__WEBPACK_IMPORTED_MODULE_0__["default"].img(_images_battleship_png__WEBPACK_IMPORTED_MODULE_2__, "logo-pic");
    const authorLabel = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("by Dan T.", "author");

    titleContainer.append(titleIcon, titleLabel);

    heading.append(titleContainer, authorLabel);

    return heading;
  }

  gameArea() {
    this.#gameContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("game-area");
    const gameboardContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("gameboard-area");
    const dialogContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("dialog-area");
    const menuArea = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("menu-area");
    const summaryArea = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("summary-area", "no-display");

    this.#gameContainer.append(dialogContainer, gameboardContainer, menuArea, summaryArea);

    gameboardContainer.append(this.#gameboard("Player", "p1"), this.#gameboard("CPU", "p2", "no-display"));

    dialogContainer.append(this.#dialog());

    menuArea.append(this.#shipPlacement());
    menuArea.append(this.#startGamePrompt());

    this.generateDraggableShips();
    this.#enableDragAndDropOnCell();

    summaryArea.append(this.#summary());

    return this.#gameContainer;
  }

  /**
   * Generates a clickable grid based on the game manager's gameboard size.
   * @param {string} playerName : the name of the player; used as a class name to 
   * identify the gameboard.
   * @param {string[]} classNames : Additional class names to identify the gameboard by.
   */
  #gameboard(playerName, ...classNames) {
    const gameboard = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("gameboard", ...classNames);
    const gameboardGrid = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("gameboard-grid");

    const gridSize = this.gameManager.players[0].gameboard.size;
    const numberCell = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("cell", "numbering");
    const numberText = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("", "number-label");

    const shipRoster = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("ship-roster", "no-display");
    const shipRosterLabel = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("Ship status", "ship-roster-header");

    numberCell.append(numberText);
    gameboardGrid.prepend(_component__WEBPACK_IMPORTED_MODULE_0__["default"].div("cell", "blank"));

    // create row numbering
    for (let i = 0; i < gridSize; i++) {
      numberText.textContent = i + 1;
      gameboardGrid.append(numberCell.cloneNode(true));
    }

    // create column numbering and cells
    for (let i = 0; i < gridSize; i++) {
      numberText.textContent = i + 1;
      gameboardGrid.append(numberCell.cloneNode(true));

      for (let j = 0; j < gridSize; j++) {
        let cell = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("cell", "selectable");
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.dataset.ship = "";
        gameboardGrid.append(cell);
      }
    }

    gameboard.append(gameboardGrid);

    // Apply headers for the gameboard
    gameboard.prepend(_component__WEBPACK_IMPORTED_MODULE_0__["default"].heading(playerName, 2, "gameboard-owner"));

    // Apply roster.
    shipRoster.append(shipRosterLabel);
    gameboard.append(shipRoster);
    

    return gameboard;
  }

  /**
   * Generates a dialog message, which is used to 
   * give the user directions on each phase of the game.
   */
  #dialog() {
    let dialogContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("dialog");
    let dialogMsg = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p(_gamemanager__WEBPACK_IMPORTED_MODULE_3__.GAME_STATE.welcomePrompt, "dialog-msg");
    let subDialog = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("subdialog-area");
    
    dialogContainer.append(dialogMsg, subDialog);

    this.#dialogHolder = dialogContainer;

    return dialogContainer;
  }

  /**
   * Set the dialog for the battleship game. Preferably, use messages from the
   * gamemanager GAME_STATE object.
   * @param {} message 
   */
  setDialog(message) {
    let msg = document.querySelector(".dialog-msg");
    msg.textContent = message;
    _utility__WEBPACK_IMPORTED_MODULE_1__["default"].triggerAnimation(msg, "appear-from-bottom");
  }

  /**
   * Set subdialog in the dialog area.
   * @param  {string[]} messages 
   */
  setSubDialog(...messages) {
    const sda = document.querySelector(".subdialog-area");
    _utility__WEBPACK_IMPORTED_MODULE_1__["default"].removeAllChildren(sda);

    messages.forEach(msg => {
      let p = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p(msg, "subdialog-message");
      document.querySelector(".subdialog-area").append(p);
      _utility__WEBPACK_IMPORTED_MODULE_1__["default"].triggerAnimation(p, "appear-from-right");
    });
  }

  /**
   * Generates an inventory of ships and lets them be dragged by the player.
   */
  #shipPlacement() {
    let shipInventory = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("ship-placer");

    let header = _component__WEBPACK_IMPORTED_MODULE_0__["default"].heading("Your Armada:", 3, "ship-placer-label");
    let selection = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("ship-selection");

    shipInventory.append(header, selection);

    return shipInventory;
  }

  /** 
   * Regenerate draggable ships within .ship-selection.
   */
  generateDraggableShips() {
    const container = this.#gameContainer.querySelector(".ship-selection")
    this.gameManager.shipLengths.forEach((shipLen, index) => {
      let ship = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("ship", "draggable");
      ship.id = `player-ship${index}`;
      ship.setAttribute("draggable", "true");
      for (let i = 0; i < shipLen; i++) {
        let cell = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("cell");
        ship.append(cell);
      }

      ship.addEventListener("dragstart", this.#shipOnDragStart.bind(this));
      ship.addEventListener("dragend", this.#shipOnDragEnd.bind(this));

      ship.dataset.name = (0,_ship__WEBPACK_IMPORTED_MODULE_4__.setName)(shipLen);

      container.append(ship);
    })
  }

  /**
   * Display drop guides when a ship is being dragged over a gameboard.
   * @param {Event} e - drag over event.
   */
  #displayDropGuides(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    let hoverCell = _utility__WEBPACK_IMPORTED_MODULE_1__["default"].getMatchingParent(e.target, ".selectable");

    document.querySelector(`#${this.#currentDraggedShipId}`).classList.add("no-display");

    if (document.querySelector(`#${this.#currentDraggedShipId}`).classList.contains("vertical")) {
      // apply vertical guide.
      let col = hoverCell.dataset.col;
      let cellsCol = Array.from(document.querySelectorAll(`.p1.gameboard [data-col="${col}"]`));
      let index = cellsCol.indexOf(hoverCell);

      if (index + this.#currentDraggedLength <= cellsCol.length) {
        for (let i = index; i < index + this.#currentDraggedLength; i++) {
          // not a valid placement.
          if (cellsCol[i].classList.contains("occupied")
            && cellsCol[i].dataset.ship !== this.#currentDraggedShipId) {
            this.#removeDragGuide();
            return;
          }
          cellsCol[i].classList.add("valid-drag");
        }
      }
    } else {
      // apply horizontal guide
      let row = hoverCell.dataset.row;
      let cellsRow = Array.from(document.querySelectorAll(`.p1.gameboard [data-row="${row}"]`));
      let index = cellsRow.indexOf(hoverCell);

      // console.log("hovering over index: " + index);

      if (index + this.#currentDraggedLength <= cellsRow.length) {
        for (let i = index; i < index + this.#currentDraggedLength; i++) {
          // not a valid placement.
          if (cellsRow[i].classList.contains("occupied")
            && cellsRow[i].dataset.ship !== this.#currentDraggedShipId) {
            this.#removeDragGuide();
            return;
          }

          cellsRow[i].classList.add("valid-drag");
          // console.log({index, currentDraggedLength, i});
        }
      }
    }
  }

  /**
   * Remove drag guide.
   */
  #removeDragGuide() {
    document.querySelectorAll(".p1.gameboard .selectable")
    .forEach(cell => {
      cell.classList.remove("valid-drag");
    });
  }

  /**
   * After the user drops the ship, places the ship.
   * @param {Event} e - Drop event.
   * @returns 
   */
  #placeShipOnDrop(e) {
    document.querySelector(`#${this.#currentDraggedShipId}`).classList.remove("no-display");
    // only when the area is a valid-drag do we add it in. otherwise, nope.
    if (!e.target.classList.contains("valid-drag")) {
      return;
    }

    e.preventDefault();
    this.#removeDragGuide();

    const id = e.dataTransfer.getData("text/plain");

    // before moving the ship, determine if it has been placed already... 
    // this is true if the ship is inside a selectable cell.
    let lastPlacedLocation = document.querySelector(`.selectable #${id}`);

    // if so we need to remove occupied from such cells.
    if (lastPlacedLocation !== null) {
      let cells;
      let vertical = lastPlacedLocation.classList.contains("vertical");

      // parentNode is the cell.
      lastPlacedLocation = lastPlacedLocation.parentNode;

      if (vertical) {
        let col = lastPlacedLocation.dataset.col;
        cells = Array.from(document.querySelectorAll(`.p1.gameboard [data-col="${col}"]`));
      } else {
        // remove occupied marking from those cells.
        let row = lastPlacedLocation.dataset.row;
        cells = Array.from(document.querySelectorAll(`.p1.gameboard [data-row="${row}"]`));
      }

      let index = cells.indexOf(lastPlacedLocation);

      // color the subsequent cells.
      for (let i = index; i < index + this.#currentDraggedLength; i++) {
        cells[i].classList.remove("occupied");
        cells[i].dataset.ship = "";
      }
    }

    let placedCell = e.target;
    // move the ship
    document.querySelector(`#${id}`).classList.add("ship-placed");
    placedCell.append(document.querySelector(`#${id}`));

    let vertical = document.querySelector(`#${id}`).classList.contains("vertical");
    let cells;

    if (vertical) {
      let col = placedCell.dataset.col;
      cells = Array.from(document.querySelectorAll(`.p1.gameboard [data-col="${col}"]`));
    } else {
      // get the row, index, and place thereafter of the placed cell.
      let row = placedCell.dataset.row;
      cells = Array.from(document.querySelectorAll(`.p1.gameboard [data-row="${row}"]`));
    }

    let index = cells.indexOf(placedCell);

    // color the subsequent cells.
    for (let i = index; i < index + this.#currentDraggedLength; i++) {
      cells[i].classList.add("occupied");
      cells[i].dataset.ship = id;
    }

    // allow the ship to be rotated.
    this.#allowPlacedShipRotation();
  }

  /**
   * Contains a collection of callbacks to enable drag 'n' drop on the gameboard with rotation.
   * Works with the drag and drop API, so it works to assign callbacks to the 
   * draggable items, and all the droppable zone it pertains to. In this case,
   * the ships are the draggables, and the drop zones are all the cells of 
   * player 1's gameboard.
   */
  #enableDragAndDropOnCell() {
    const self = this;
    // this.addShipDragHandlers();

    // all cells that are selectable are droppable areas.
    this.#gameContainer.querySelectorAll(".p1.gameboard .selectable").forEach(cell => {

      cell.addEventListener("dragover", self.#displayDropGuides.bind(self));
      // when the drag element leaves droppable zone, remove all valid drag
      // it'll just be recreated by valid-drag.
      cell.addEventListener("dragleave", self.#removeDragGuide);
      cell.addEventListener("drop", self.#placeShipOnDrop.bind(self));
    });
  }

  #shipOnDragStart(e) {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", e.target.id);

    this.#currentDraggedLength = e.target.childElementCount;
    this.#currentDraggedShipId = e.target.id ?? e.target.dataset.ship;
    // blank image
    let img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
  }

  #shipOnDragEnd() {
    document.querySelector(`#${this.#currentDraggedShipId}`)
        .classList.remove("no-display");
  }
  
  /**
   * Allows for ships to be rotated; this is invoked each time a ship is placed,
   * to allow ships, on the gameboard, to be rotated.
   */
  #allowPlacedShipRotation() {
    let gridSize = this.gameManager.players[0].gameboard.grid.length;
    // allow rotation of placed ships
    document.querySelectorAll(".ship.draggable.ship-placed").forEach(ship => {
      if (ship.onclick === null) {
        ship.onclick = () => {
          let verticalOn = ship.classList.contains("vertical");
          let cell = ship.parentNode;
          let shipLength = ship.childElementCount;

          let rowIndex = parseInt(cell.dataset.row);
          let colIndex = parseInt(cell.dataset.col);

          console.log({ rowIndex, shipLength, gridSize });

          if (rowIndex + shipLength > gridSize || colIndex + shipLength > gridSize) {
            return;
          }

          // check if any ships are in the way of the rotation.
          for (let i = rowIndex + 1; i < rowIndex + shipLength; i++) {

            let cells = Array.from(document
              .querySelectorAll(`.p1.gameboard [data-row="${i}"]`));

            for (let j = colIndex; j < colIndex + shipLength; j++) {
              if (cells[j].classList.contains("occupied") && cells[j].dataset.ship !== ship.id) {
                // do not proceed.
                return;
              }
            }
          }

          // make sure there's enough space to move it vertically, based on the ship length.
          // 1 no ships in the way
          // 2.within the bounds of the gameboard.
          // only then do you allow vertical class.
          console.log(cell);

          if (verticalOn) {
            // vertical -> horizontal occupied
            for (let i = rowIndex + 1; i < rowIndex + shipLength; i++) {
              let cell = document.querySelector(`.p1.gameboard .selectable[data-row="${i}"][data-col="${colIndex}"]`);
              // strip vertical occupied
              cell.classList.remove("occupied");
              cell.dataset.ship = "";
            }

            for (let i = colIndex + 1; i < colIndex + shipLength; i++) {
              // add horizontal occupied
              let cell = document.querySelector(`.p1.gameboard .selectable[data-row="${rowIndex}"][data-col="${i}"]`);
              cell.classList.add("occupied");
              cell.dataset.ship = ship.id;
            }
          } else {
            // horizontal -> vertical occupied
            for (let i = colIndex + 1; i < colIndex + shipLength; i++) {
              // remove horizontal occupied
              let cell = document.querySelector(`.p1.gameboard .selectable[data-row="${rowIndex}"][data-col="${i}"]`)
              cell.classList.remove("occupied");
              cell.dataset.ship = "";
            }

            for (let i = rowIndex + 1; i < rowIndex + shipLength; i++) {
              // add vertical occupied
              let cell = document.querySelector(`.p1.gameboard .selectable[data-row="${i}"][data-col="${colIndex}"]`)
              cell.classList.add("occupied");
              cell.dataset.ship = ship.id;
            }
          }

          // toggle vertical for the view
          ship.classList.toggle("vertical");
          // then, alter the occupied class.

        };
      }
    });
    // disable rotation for ships that are not placed.
    document.querySelectorAll(".ship.draggable:not(.ship-placed)").forEach(ship => {
      if (ship.onclick !== null) {
        ship.onclick = null;
      }
    });

  }

  /**
   * Places ships on the gameboard given coordinates. Useful for AI.
   * 
   * @param {number} length 
   * @param {number} row 
   * @param {number} col 
   * @param {boolean} vertical 
   * @param {boolean} player2 - Place ships on player 2's gameboard?
   * @param {string} id - the ID the ship should be identified by.
   */
  static placeShipViaCoordinate(length, row, col, vertical, player2 = true, id) {
    console.log({length, row, col, vertical, player2, id});
    let selector;
    let gameboard; 
    let cpuTag = "cpu-ship-placed";

    if (player2) {
      selector = ".p2.gameboard"
    } else {
      selector = ".p1.gameboard"
    }

    gameboard = document.querySelector(`${selector}`);

    let originCell = gameboard.querySelector(`.selectable[data-row='${row}'][data-col='${col}']`);
    originCell.dataset.ship = id;


    if (vertical) {
      let rows = Array.from(gameboard.querySelectorAll(`.selectable[data-col="${col}"]`));

      for (let i = row; i < row + length; i++) {
        rows[i].classList.add("occupied", cpuTag);
        rows[i].dataset.ship = id;

        switch(i) {
          case row: // start
            rows[i].classList.add("ship-start-vertical");
            break;
          case row + length - 1: // end
            rows[i].classList.add("ship-end-vertical");
            break;
          default: // mid
            rows[i].classList.add("ship-middle-vertical");
            break;
        }
      }
    } else {
      let cols = Array.from(gameboard.querySelectorAll(`.selectable[data-row="${row}"]`));
      
      for (let i = col; i < col + length; i++) {
        cols[i].classList.add("occupied", cpuTag);
        cols[i].dataset.ship = id;

        switch(i) {
          case col: // start
            cols[i].classList.add("ship-start-horizontal");
            break;
          case col + length - 1: // end
            cols[i].classList.add("ship-end-horizontal");
            break;
          default: // mid
            cols[i].classList.add("ship-middle-horizontal");
            break;
        }
      }
    }
  }

  /**
   * Asks user for their name and to start the game... only when the ship placement container is empty
   * will the start game button unlock.
   */
  #startGamePrompt() {
    const self = this;
    const startGameForm = _utility__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("form", "start-game-prompt");
    const [playerNameLabel, playerNameField] = _component__WEBPACK_IMPORTED_MODULE_0__["default"].formInput("Name: ", "input", "p1-name", "p1-name");
    const startGameButton = _component__WEBPACK_IMPORTED_MODULE_0__["default"].button("Start Game!", "start-game-button");

    playerNameField.value = "Commander Blue";
    playerNameField.required = true;
    playerNameField.placeholder = "Enter your name here";

    startGameForm.append(playerNameLabel, playerNameField, startGameButton);

    startGameButton.disabled = true;

    startGameForm.addEventListener("submit", (e) => {
      e.preventDefault();
      self.gameManager.startGame();
    });

    const DOMObserver = new MutationObserver(this.#checkAllShipsPlaced);
    DOMObserver.observe(this.#gameContainer.querySelector(".ship-selection"), {childList: true});

    return startGameForm;
  }

  /**
   * Checks if all ships been placed? If so, unlocks the game button. Used with
   * MutationObserver.
   */
  #checkAllShipsPlaced(mutated) {
    let shipsRemaining = mutated[0].target.childElementCount;
    if (shipsRemaining > 0) {
      document.querySelector(".start-game-button").disabled = true;
    } else {
      document.querySelector(".start-game-button").disabled = false;
    }
  }

  /**
   * Shows a summary. To be used after the game has finished.
   */
  #summary(...classNames) {
    const summary = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("summary-screen", ...classNames);
    const victoryMsg = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("Winner", "victory-message");
    const winner = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("%", "winner");

    const statsContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("summary-statistics");
    const statsAccuracy = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("Accuracy", "accuracy");
    const p1AccContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("acc-container");
    const p2AccContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("acc-container");
    const p1AccLabel = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p(this.gameManager.players[0].name, "metric-player-name");
    const p2AccLabel = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p(this.gameManager.players[1].name, "metric-player-name");
    const p1Accuracy = _component__WEBPACK_IMPORTED_MODULE_0__["default"].span("--%", "p1", "accuracy-metric");
    const p2Accuracy = _component__WEBPACK_IMPORTED_MODULE_0__["default"].span("--%", "p2", "accuracy-metric");

    const playAgain = _component__WEBPACK_IMPORTED_MODULE_0__["default"].button("Play Again", "play-again");

    victoryMsg.append(winner);

    p1AccContainer.append(p1AccLabel, p1Accuracy);
    p2AccContainer.append(p2AccLabel, p2Accuracy);

    statsContainer.append(statsAccuracy, p1AccContainer, p2AccContainer);

    summary.append(victoryMsg, winner, statsContainer, playAgain);
      
    return summary;
  }

  /**
   * Enumerate ship roster for each user's gameboard. These ships will be 
   * shown as red when destroyed.
   */
  enumeratePlayerShipRoster() {
    let p1Gameboard = document.querySelector(".p1.gameboard");

    p1Gameboard.querySelectorAll(".ship-placed").forEach(ship => {
      let roster = p1Gameboard.querySelector(".ship-roster");
      let shipName = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p(ship.dataset.name, "ship-name");
      shipName.dataset.ship = ship.parentNode.dataset.ship;

      roster.append(shipName);
    });
  }
}

/***/ }),

/***/ "./src/js/component.js":
/*!*****************************!*\
  !*** ./src/js/component.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/js/utility.js");


/**
 * Component class. Contains various DOM elements.
 * Author: datrinon
 * Version: 1.4 (Weather)
 */

class Component {


  constructor() {
    this.mql = window.matchMedia("(max-width: 600px)");
  }

  /**
   * Initializes a basic HTML skeleton for the web page, generating a header,
   * main, and sticky footer.
   *
   * @param {*} headerTitle - What the web page is called.
   * @param {bool} emptyHeader - Should the header use a default structure?
   * The default structure looks like [ Logo | | | | Navigation Links]
   * @returns - An array containing references to the generated header, main, and footer.
   */
  initializeStructure(
    headerTitle,
    emptyHeader = false,
    createMonth,
    githubLink
  ) {
    const body = document.body;
    const mainWrapper = this.div("content");
    let header;
    if (emptyHeader) {
      header = document.createElement("header");
    } else {
      header = this.header(headerTitle);
    }
    header.id = "header";

    const main = document.createElement("main");
    const footer = this.footer(createMonth, githubLink);
    main.classList.add("main");

    mainWrapper.append(header, main);
    body.append(mainWrapper, footer);

    return [header, main, footer];
  }

  content() {
    let content = document.createElement("div");
    content.classList.add("content");

    let main = document.createElement("main");
    main.classList.add("main");

    content.append(main);

    return content;
  }

  header(title) {
    let header = document.createElement("header");
    let titleElem = document.createElement("h1");
    let menuButton = document.createElement("i");

    menuButton.id = "menu-button";
    menuButton.classList.add("fas", "fa-bars", "no-display");

    this.mql.addEventListener("change", (e) => {
      if (e.matches) {
        document.querySelector("#menu-button").classList.remove("no-display");
      } else {
        // it bigger than the query rule.
        document.querySelector("#menu-button").classList.add("no-display");
        document.querySelector("#navbar").classList.remove("slide-in-out");
      }
    });

    window.addEventListener("load", function () {
      document.querySelector("#menu-button").addEventListener("click", () => {
        console.log("menu pressed.");
        document.querySelector("#navbar").classList.toggle("slide-in-out");
      });
    });

    header.id = "header";
    // header.style.background = `url(${img})`;

    titleElem.id = "page-title";
    titleElem.textContent = title;

    titleElem.insertBefore(menuButton, titleElem.firstChild);
    header.append(titleElem);

    return header;
  }

  navbar(...links) {
    const nav = document.createElement("nav");
    const linkContainer = document.createElement("ul");

    nav.id = "navbar";
    linkContainer.id = "navbar-buttons-container";

    for (let link of links) {
      const linkButton = document.createElement("li");
      const linkAnchor = document.createElement("a");

      linkButton.classList.add("navbar-button");

      linkAnchor.id = `navlink-${link.replace(" ", "-").toLowerCase()}`;
      linkAnchor.textContent = link;
      linkAnchor.setAttribute("href", "#");

      linkButton.append(linkAnchor);
      linkContainer.append(linkButton);
    }

    nav.append(linkContainer);

    return nav;
  }

  banner(text, img) {
    let bannerContainer = document.createElement("figure");
    let banner = document.createElement("div");
    let caption = document.createElement("figcaption");

    bannerContainer.id = "banner";
    banner.id = "banner-image";
    caption.id = "banner-caption";

    banner.style.backgroundImage = `url(${img})`;

    caption.textContent = text;

    bannerContainer.append(banner, caption);

    return bannerContainer;
  }

  footer(createMonth, githubLink) {
    let footer = document.createElement("footer");
    footer.classList.add("footer");

    let text = `Created in ${createMonth} 2021. Odin Project x Dan T.`;
    let githubElem = document.createElement("a");
    let ghIcon = this.faIcon("fab", "fa-github-square", "icon");

    githubElem.append(ghIcon);
    githubElem.classList.add("footer-github-icon");
    githubElem.setAttribute("href", githubLink);
    githubElem.setAttribute("target", "_blank");
    githubElem.style.display = "inline-block";

    let p = document.createElement("p");

    p.textContent = text;
    p.append(githubElem);
    footer.append(p);

    return footer;
  }

  /**
   * Create an element with larger, emboldened, text,
   * similar to a pull quote in a magazine.
   *
   * @param msg {string} Text to include in the block quote
   */
  pullquote(msg) {
    let pull = document.createElement("aside");
    pull.textContent = msg;

    pull.classList.add("pull-quote");

    return pull;
  }

  section(id) {
    let element = document.createElement("section");
    element.id = id;
    element.classList.add("section");

    return element;
  }

  /**
   * Creates a text heading element.
   *
   * @param {*} text - The label for the header.
   * @param {*} level - The level of header.
   */
  heading(text, level, ...className) {
    if (level < 1 || level > 6) {
      throw Error("Heading levels can only be between 1 to 6!");
    }
    let header = document.createElement(`h${level}`);

    if (className.length !== 0) {
      header.classList.add(...className);
    }
    header.textContent = text;

    return header;
  }

  p(text, ...className) {
    let p = document.createElement("p");
    if (className.length != 0) {
      p.classList.add(...className);
    }

    p.textContent = text;

    return p;
  }

  a(text, link, ...className) {
    let a = document.createElement("a");
    if (className.length != 0) {
      a.classList.add(...className);
    }

    a.textContent = text;
    a.href = link;
    a.target = "_blank";

    return a;
  }

  img(url, ...className) {
    let image = new Image();
    image.classList.add(...className);

    image.src = url;

    return image;
  }

  div(...classNames) {
    let div = document.createElement("div");
    if (classNames.length !== 0) {
      div.classList.add(...classNames);
    }

    return div;
  }

  button(label, ...className) {
    let btn = document.createElement("button");
    btn.classList.add(...className);

    btn.textContent = label;
    return btn;
  }

  /**
   * Generates a basic table with single-cell columns and rows, based on the imported file.
   *
   * @param {csv} data - Data to turn into a table. Please use webpack to import .csv files.
   */
  table(id = "", data) {
    let table = document.createElement("table");
    table.id = id;

    // Generate a table header row.
    let tableHeader = document.createElement("thead");
    let tableHeaderRow = document.createElement("tr");

    for (let col of Object.keys(data[0])) {
      let colCell = document.createElement("th");
      colCell.textContent = col;

      tableHeaderRow.append(colCell);
    }
    tableHeader.append(tableHeaderRow);

    table.append(tableHeader);

    const tableBody = document.createElement("tbody");
    // Generate table rows.
    for (let i = 0; i < data.length; i++) {
      let trow = document.createElement("tr");
      for (let prop in data[i]) {
        let tcell = document.createElement("td");

        tcell.textContent = data[i][prop];
        trow.append(tcell);
      }

      tableBody.append(trow);
    }
    table.append(tableBody);

    return table;
  }

  /**
   * Create a font awesome icon.
   */
  faIcon(category, name, ...className) {
    let fasIcon = document.createElement("i");
    fasIcon.classList.add(category, name);
    if (className !== null) {
      fasIcon.classList.add(...className);
    }

    return fasIcon;
  }

  span(textContent = null, ...className) {
    let span = document.createElement("span");
    if (className.length !== 0) {
      span.classList.add(...className);
    }
    span.textContent = textContent;

    return span;
  }

  formInput(labelText, type, inputId, name) {
    let label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    let input = document.createElement("input");
    input.id = inputId;
    input.name = name;
    input.type = type;

    return [label, input];
  }

  dropdown(labelText, name, inputId, ...values) {
    let label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    let select = document.createElement("select");
    select.setAttribute("name", name);
    select.setAttribute("id", inputId);

    for (let val of values) {
      let entry = document.createElement("option");
      entry.value = val;
      if (isNaN(val) && typeof val === "string") {
        entry.textContent = val[0].toUpperCase() + val.slice(1);
      } else {
        entry.textContent = val;
      }

      select.append(entry);
    }

    return [label, select];
  }

  textArea(labelText, name, inputId) {
    let label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    let ta = document.createElement("textarea");
    ta.id = inputId;
    ta.setAttribute("name", name);

    return [label, ta];
  }

  /**
   * Create a confirm modal.
   *
   * @param {*} className - Classes the modal should belong to.
   * @param {*} title - The title appearing on the modal.
   * @param {*} message - The message appearing on the modal.
   * @param {*} positiveButtonLabel - Text for the OK button.
   * @param {*} negativeButtonLabel - Text for the cancel button.
   * @param {*} positiveCallback - Function to run if OK is pressed.
   * @param {*} negativeCallback - Function to run if cancel is pressed. 'null' by
   * default, which then just closes the modal.
   *
   * @returns - Returns the generated modal element.
   */
  confirmModal(
    className,
    title,
    message,
    positiveButtonLabel,
    negativeButtonLabel,
    positiveCallback,
    negativeCallback = null
  ) {
    let modalWrapper = this.div();
    modalWrapper.id = "prompt-wrapper";
    let modal = this.div(className);

    const titleHeader = this.heading(title, 1, "modal-header");
    const messageParagraph = this.paragraph(message, "modal-dialog");
    const positiveButton = this.button(positiveButtonLabel, "modal-confirm");
    const negativeButton = this.button(negativeButtonLabel, "modal-cancel");

    const buttonSection = this.div("modal-button-area");

    if (negativeCallback === null) {
      negativeCallback = () => {
        console.log("Negative pressed.");
        modalWrapper.remove();
      };
    }

    // positiveButton.addEventListener("click", positiveCallback);
    positiveButton.addEventListener("click", (e) => {
      positiveCallback(e);
      modalWrapper.remove();
    });
    negativeButton.addEventListener("click", negativeCallback);

    buttonSection.append(positiveButton, negativeButton);
    modal.append(titleHeader, messageParagraph, buttonSection);
    modalWrapper.append(modal);

    // styling moved to .css page.

    return modalWrapper;
  }

  /**
   * Display a brief, unobtrusive pop-up message at the bottom of the screen.
   * @param {*} textContent - The text the message should display.
   * @param {*} duration - The duration of the message in seconds.
   */
  toast(textContent, duration) {
    let toastBox = document.createElement("div");
    let toastMessage = document.createElement("paragraph");
    toastBox.classList.add("toast");
    toastMessage.textContent = textContent;
    toastMessage.classList.add("toast-message");

    toastBox.append(toastMessage);

    let toastBoxCss = "position: fixed; bottom: 10vh;";
    toastBoxCss += "width: 100vw;";
    toastBoxCss += `animation: fade-in-out ${duration}s;`;
    toastBoxCss += "z-index: 9999;";

    let toastMessageCss =
      "margin: 0 auto; width: 300px; display: block; background-color: grey;";
    toastMessageCss +=
      "text-align: center; border: 1px solid black; border-radius: 5px;";
    toastMessageCss += "color: white;";

    toastBox.style.cssText = toastBoxCss;
    toastMessage.style.cssText = toastMessageCss;

    toastBox.addEventListener("animationend", () => {
      toastBox.remove();
    });

    document.body.append(toastBox);
  }

  /**
   * Create a search field with a search button.
   * @param {string} placeholder - Advice to give in search field.
   * @returns 
   */
  search(placeholder = "Search") {
    const searchContainer = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", "search-container");
    const searchFieldWrapper = this.div("search-field-wrapper");
    const searchField = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", "search-field");
    const searchIcon = this.faIcon("fas", "fa-search");
    const searchButton = this.button("", "search");

    searchContainer.setAttribute("action", "");
    searchFieldWrapper.style.display = "inline-block";
    searchField.type = "search";
    searchField.setAttribute("placeholder", placeholder);
    searchField.setAttribute("required", true);
    searchButton.append(searchIcon);
    searchButton.setAttribute("type", "submit");

    searchFieldWrapper.append(searchField);
    searchContainer.append(searchFieldWrapper, searchButton);
    return searchContainer;
  }

  /**
   * Create a search field for locations, so it includes a search field with 
   * a location button.
   */
  geosearch(placeholder="") {
    const searchElem = this.search(placeholder);
    const locationButton = this.button("", "location");
    const locationIcon = this.faIcon("fas", "fa-map-marker-alt")

    locationButton.setAttribute("type", "button");
    locationButton.append(locationIcon);
    locationButton.addEventListener("click", _utility__WEBPACK_IMPORTED_MODULE_0__["default"].getGeolocation);
    searchElem.querySelector(".search").before(locationButton);

    return searchElem;
  }

  /**
   * Creates a tooltip-esque message which hovers below, relative to an element's position, 
   * for a provided duration. Only attach to relatively-positioned elements.
   * @param {HTMLElement} (elem) - Positioned element to attach to. 
   * @param {string} (msg) - Message to display.
   * @param {number} (s) - Number of seconds to persist message. 0 for persistent
   * until user clicks outside of the tooltip.
   * @param {boolean} dismissOnExternalClick - Should the tooltip be dismissed by
   * clicking outside of the element? True by default.
   */
  tooltip(elem, msg, s, dismissOnExternalClick = true) {
    const tooltipContainer = component.div("tooltip");
    for (let msgSegment of msg.split("\n")) {
      const tooltipMsg = component.p(msgSegment.trim(), "tooltip-msg");
      tooltipContainer.append(tooltipMsg);
    }

    tooltipContainer.style.cssText = "position: absolute; top: 100%; width: fit-content";
    // this ensures that the latest tooltips always appear on the top.
    tooltipContainer.style.zIndex = 10 + 10 * (document.querySelectorAll(".tooltip").length);

    elem.append(tooltipContainer);


    const p = new Promise((resolve) => {
        
      setTimeout(() => {
        if (dismissOnExternalClick) {
          window.addEventListener("click", (e) => {
            if (e.currentTarget !== tooltipContainer) {
              console.log("User clicked; removing tooltip");
              tooltipContainer.remove();
            }
          }, { once: true });
          return resolve(null);
        }
      }, 0);
    })

    p.then(() => {
      if (s !== 0) {
        setTimeout(() => {
          if (document.body.querySelector(".tooltip")) {
            console.log("Timer expired; removing tooltip");
            tooltipContainer.remove();
          }
        }, s * 1000);
      }
    });
  }

  /**
   * Attach a loading message to a given element.
   * @param {HTMLElement} parentElem - Element to attach loading message to.
   * @param {string} msg - Message to play; default is "loading".
   * @returns 
   */
  loadingMessage(parentElem, msg="Loading") {
    const loadingBase = component.p(msg, "loading-text");
    const loadingDots = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", "loading-dots");

    loadingBase.append(loadingDots);
    parentElem.append(loadingBase);

    const loadingAnimation = {
      id: 0,
      loadingTextBase: parentElem.querySelector(".loading-text"),
      loadingTextDots: parentElem.querySelector(".loading-dots"),
      /**
       * Sets an interval, using it to play a simple animation.
       */
      play() {
        this.loadingTextBase.textContent = msg;
        this.loadingTextBase.classList.remove("no-opacity");
        this.loadingTextDots.textContent = "";

        this.id = setInterval(() => {
          if (this.loadingTextDots.textContent !== "...") {
            this.loadingTextDots.textContent += ".";
          } else {
            this.loadingTextDots.textContent = "";
          }
        }, 750);
      },
      stop() {
        clearInterval(this.id);
        this.loadingTextBase.classList.add("no-opacity");
        this.loadingTextBase.remove();
      }
    };

    return loadingAnimation;
  }
}

const component = new Component();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");


class Gameboard {

  grid;
  size;
  ships;

  constructor() {
    this.size = 10;
    this.grid = [];
    this.ships = [];

    for (let i = 0; i < this.size; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.size; j++) {
        this.grid[i][j] = "";
      }
    }
  }

  /**
   * Creates and places a given ship based on the coordinates
   * assigned to the ship. 
   * @param {number} length - the given length of the ship. 
   * @param {number} row - the row to place the ship. 0-based coordinates.
   * @param {number} col - the column to place the ship. 0-based coordinates.
   * @param {boolean} vertical - Place the ship horizontally?
   * @return {Ship} - The ship that was placed, or null if the ship failed
   * to be placed.
   */
  placeShip(length, row, col, vertical) {
    if (row < 0 || col < 0) {
      throw new Error("Cannot place ship on negative coordinates.");
    }
    // return null if out of bounds
    if (vertical) { // vertical out of bounds involves row.
      if (row + length > this.grid.length || col > this.grid.length) {
        return null;
      }
    } else {
      if (col + length > this.grid.length || row > this.grid.length) {
        return null;
      }
    }
    // check to see that the given row and col + length are not already occupied.
    if (vertical) {
      for (let i = row; i < (row + length); i++) {
        if (this.grid[i][col] !== "") {
          return null;
        }
      }
    } else {
      for (let i = col; i < (col + length); i++) {
        if (this.grid[row][i] !== "") {
          return null;
        }
      }
    }

    // otherwise we're good to place a ship.
    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
    const id = this.ships.length;

    if (vertical) {
      for (let i = row; i < (row + ship.length); i++) {
        this.grid[i][col] = id;
        ship.status[`${i},${col}`] = false;
      }
    } else {
      for (let i = col; i < (col + ship.length); i++) {
        this.grid[row][i] = id;
        ship.status[`${row},${i}`] = false;
      }
    }

    this.ships.push(ship);

    return ship;
  }

  /**
   * Let the gameboard receive an attack at the given row and column. 
   * 
   * @param {number} row 
   * @param {number} col 
   * @returns {number} status code based on the hit. 1 if a hit was successful, 0
   * if the hit missed, and -1 if the area was already hit. 
   */
  receiveAttack(row, col) {
    console.log({row, col});
    if (isNaN(parseInt(row)) || col === undefined) {
      throw new Error("You must provide row and col coordinates as a number.");
    }

    let shipId = this.grid[row][col];

    if (shipId === "x" || shipId === "o") {
      return -1;
    } else if (shipId === "") {
      this.grid[row][col] = "o";
      return 0;
    } else {
      console.log(shipId);
      this.grid[row][col] = "x";
      this.ships[shipId].hit(row, col);

      return 1;
    }
  }

  getGrid() {
    return this.grid;
  }

  isShipSunk(index) {
    return this.ships[index].isSunk();
  }

  /**
   * Have all ships been sunk on the gameboard?
   */
  allShipsSunk() {
    let status = true;
    this.ships.forEach(ship => {
      if (!ship.isSunk()) {
        status = false;
      }
    });

    return status;
  }

}

/***/ }),

/***/ "./src/js/gamemanager.js":
/*!*******************************!*\
  !*** ./src/js/gamemanager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GAME_STATE": () => (/* binding */ GAME_STATE),
/* harmony export */   "SUBDIALOGS": () => (/* binding */ SUBDIALOGS),
/* harmony export */   "default": () => (/* binding */ GameManager)
/* harmony export */ });
/* harmony import */ var _BattleshipElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BattleshipElement */ "./src/js/BattleshipElement.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/js/component.js");





/**
 * Manages a game session for battleship. Keeps track of players.
 * Can start, end, and reset the game.
 */

const GAME_STATE = {
  p1turn: "Player 1's turn",
  p2turn: "Player 2's turn",
  ended: "Game Over.",
  p1victory: "Player 1 wins.",
  p2victory: "Player 2 wins.",
  restart: "Restarting game...",
  playing: "Game start!",
  welcomePrompt: "Welcome, Commander.",
  replayPrompt: "Place your ships on the gameboard.",
  cpuShipSunk: "A ship of the CPU's was sunk!",
  cpuShipHit: "A ship of the CPU's was sunk!",
  playerShipSunk: "A ship of the player's was sunk!",
  playerShipHit: "A ship of the player's was hit!!",
  alreadyAttacked: "This cell was already attacked"
};

const SUBDIALOGS = {
  p1turn: "Click on the opponent gameboard to fire a shot.",
  p2turn: "Thinking...",
  controls1: "Drag and drop ships onto the gameboard.",
  controls2: "Click (when placed) to rotate ship."
}


class GameManager {
  
  static #instance;

  /**
   * The players involved in the game.
   */
  players;

  /**
   * Is it player 1's turn? 
   */
  #p1turn;

  /**
   * An array of the lengths of each ship that the player will have in their arsenal.
   * @type {number[]}
   */
  shipLengths;

  /**
   * Has the game ended yet?
   */
  #gameOver;
  
  /**
   * True if player 1 won, false if player 2 won.
   */
  #isWinnerP1;

  /**
   * Instance of a BattleshipElements class to use to manipulate the view of the page.
   * @type {BattleshipElements}
   */
  #page;

  /**
   * Create an instance of the game. Assigns CPU as player 2.
   * @param {Player[]} players - An array of the players in the game.
   * @param {boolean} p1start - Should player 1 start first? True by default.
   * @returns 
   */
  constructor(player1, player2, p1start = true, shipLengths = [2]) {
    if (GameManager.#instance !== undefined) {
      return GameManager.#instance;
    } 

    GameManager.#instance = this;
    this.players = player2.cpu ? [player1, player2] : [player2, player1];
    this.#p1turn = p1start;
    this.shipLengths = shipLengths;
  }

  /**
   * Start the game. Has the CPU place ships, issues a start message on the view,
   * disables all handlers of all ships, and then has one of the players select a move.
   * Makes all cells "attackable."
   */
  startGame() {
    document.querySelectorAll(".controls-area, .menu-area, .p2.gameboard, .ship-roster")
        .forEach(area => area.classList.toggle("no-display")); 

    this.players[0].name = document.querySelector("#p1-name").value;

    document.querySelector(".p1.gameboard .gameboard-owner").textContent =
        this.players[0].name + " (You)";
    document.querySelector(".p2.gameboard .gameboard-owner").textContent =
        this.players[1].name;

    this.#page.enumeratePlayerShipRoster();

    document.querySelector(".start-game-button").disabled = true;

    document.querySelectorAll(".ship").forEach(ship => {
      ship.onclick = null;
      ship.draggable = false;
    });

    // places ship for cpu.
    this.players.forEach(player => {
      if (player.cpu) {
        this.#cpuPlaceShips(player);
      }
    });

    // register ships for the player.
    this.#playerRegisterShips();

    // TODO
    // remove this promise code, effect looks lame.
    (() => {
      return new Promise((resolve) => {
        this.#page.setDialog(GAME_STATE.playing);
        setTimeout(() => {
          if (GameManager.#instance.#p1turn) {
            return resolve(GAME_STATE.p1turn);
          } else {
            return resolve(GAME_STATE.p2turn);
          }
          }, 0);
      });
    })().then((result) => {
      this.#page.setDialog(result);
      if (this.#p1turn) {
        this.#page.setSubDialog(SUBDIALOGS.p1turn);
      } else {
        this.#page.setSubDialog(SUBDIALOGS.p2turn);
      }
      document.querySelector(".gameboard-area").classList.add("game-active");
      document.querySelectorAll(".selectable").forEach(cell => {
        cell.classList.add("attackable");
      });

      const self = this;
      document.querySelectorAll(".p2.gameboard .attackable").forEach(cell => {
        cell.addEventListener("click", self.#playRound.bind(this));
      })
    })
  }

  /**
   * Queries both players' gameboards to see if the game should be ended.
   */
  #determineIfGameOver() {
    const p1victory = this.players[1].gameboard.allShipsSunk();
    const p2victory = this.players[0].gameboard.allShipsSunk();
    
    if (p1victory) {
      this.#page.setDialog(GAME_STATE.p1victory);
      this.#isWinnerP1 = true;
    } else if (p2victory) {
      this.#page.setDialog(GAME_STATE.p2victory);
      this.#isWinnerP1 = false;
    }

    if (p1victory || p2victory) {
      this.#gameOver = true;
      this.#endGame();
    }
  }

  
  #endGame() {
    // reveal cpu ships
    document.querySelectorAll(".cpu-ship-placed").forEach(cell => {
      cell.classList.add("cpu-ship-reveal");
    })

    this.#page.setDialog(GAME_STATE.ended);
    this.#page.setSubDialog("");
    // update game results here.
    const summaryContainer = document.querySelector(".summary-area");

    summaryContainer.classList.remove("no-display");
    // 1. Show the winner.
    if (this.#isWinnerP1) {
      summaryContainer.querySelector(".winner").textContent = this.players[0].name;
    } else {
      summaryContainer.querySelector(".winner").textContent = this.players[1].name;
    }

    // 2. Show the accuracy metrics.
    const p1AccMetric = summaryContainer.querySelector(".p1.accuracy-metric");
    const p2AccMetric = summaryContainer.querySelector(".p2.accuracy-metric");

    p1AccMetric.textContent = this.#calculateAccuracy(this.players[1]);
    p2AccMetric.textContent = this.#calculateAccuracy(this.players[0]);

    summaryContainer.querySelector(".play-again")
        .addEventListener("click", this.#resetGame.bind(this), {once: true});
  }

  /**
   * Calculate the accuracy, given the player. Uses that's person gameboard
   * to determine the accuracy.
   * @param {Player} player : the person who you attacked.
   * @returns {string} Total shots / hits and the accuracy of it.
   */
  #calculateAccuracy(player) {
    let totalShots = 0;
    let hits = 0;
    player.gameboard.grid.forEach(row => {
      row.forEach(cell => {
        if (cell === "x" || cell === "o") {
          totalShots += 1; 
          if (cell === "x") {
            hits += 1;
          }
        }
      })
    });

    const accuracy = (hits / totalShots) * 100;
    return `${hits}/${totalShots} (${accuracy.toFixed(2)}%)`;
  }

  /**
   * Resets the game by:
   * - Remarking all cells.
   * - Removing all ships from the gameboard.
   * - Recreating player instances.
   * - Recreating draggable ships in the selection area.
   * - Allowing the user to start the game again.
   */
  #resetGame() {
    document.querySelectorAll(".selectable").forEach(cell => {
      cell.className = "cell selectable";
      cell.dataset.ship = "";
    });
    document.querySelectorAll(".ship").forEach(ship => ship.remove());
    document.querySelector("#p1-name").value = this.players[0].name;
    document.querySelector(".gameboard-owner").textContent = "Player";

    this.players[0] = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.players[0].name, false);
    this.players[1] = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.players[1].name, true);

    this.#page.generateDraggableShips();

    document.querySelector(".start-game-button").disabled = false;
    this.#gameOver = false;
    this.#p1turn = true;

    document.querySelectorAll(".summary-area, .menu-area, .p2.gameboard," +
    "controls-area, .ship-roster").forEach(area => area.classList.toggle("no-display"));

    this.#page.setDialog(GAME_STATE.welcomePrompt);
    this.#page.setSubDialog(SUBDIALOGS.controls1, SUBDIALOGS.controls2);
  }

  /**
   * Play a round of battleships, allowing each player to fire.
   * @param {Event} e : Event; used to pick up the cell the user clicked. Acquires
   * coordinates from it to attack.
   */
  #playRound(e) {
    const thinkTimer = Math.round(Math.random() * 500) + 800;
    const performCPUAttack = () => {
      this.#cpuFireAttack();
      if (!this.#gameOver) {
        this.#page.setDialog(GAME_STATE.p1turn);
        this.#page.setSubDialog(SUBDIALOGS.p1turn);
      }
    }

    if (this.#p1turn && !this.#gameOver) {
      this.#playerFireAttack(e);
    }

    if (this.#p1turn === false && !this.#gameOver) {
      this.#page.setDialog(GAME_STATE.p2turn);
      this.#page.setSubDialog(SUBDIALOGS.p2turn);

      setTimeout(performCPUAttack.bind(this), thinkTimer);
    }
  }

  #playerRegisterShips() {
    let self = this;
    let gameboard = document.querySelector(".p1.gameboard");

    gameboard.querySelectorAll(".ship").forEach(ship => {
      let originCell = ship.parentNode;
      let row = parseInt(originCell.dataset.row);
      let col = parseInt(originCell.dataset.col);
      let length = ship.childElementCount;
      let vertical = ship.classList.contains("vertical");

      self.players[0].gameboard.placeShip(length, row, col, vertical);
    });

  }

  /**
   * Attack a player.
   * 
   * @param {Event} e - Event which the handler captures.
   * @param {Player} attacker - The attacking player.
   * @param {Player} attacked - The player receiving the attack.
   * @returns 
   */
  #playerFireAttack(e) {
    if (e.currentTarget.classList.contains("attacked")) {
      console.log("This cell has already been attacked!");
      return;
    } else {
      e.currentTarget.classList.add("attacked");
    }

    const row = parseInt(e.currentTarget.dataset.row);
    const col = parseInt(e.currentTarget.dataset.col);

    console.log(row, col);
    let result = this.players[0].attack(this.players[1], row, col);
    switch(result) {
      case 1: {
        console.log("It's a hit!");
        e.currentTarget.classList.add("hit");

        let shipId = e.currentTarget.dataset.ship.split("cpu-ship")[1];
        let shipSunk = this.players[1].gameboard.isShipSunk(shipId);
        if (shipSunk) {
          document.querySelector(`.p2.gameboard .ship-name[data-ship="cpu-ship${shipId}"]`)
              .classList.add("destroyed");
        }

        break;
      }
      case 0:
        console.log("It's a miss!");
        e.currentTarget.classList.add("miss");
        break;
    }
    this.#p1turn = false; // CPU must make a successful move before the player moves again.

    this.#determineIfGameOver();
  }

  #cpuAttackDetermineCoordinates(cpu) {
    let row;
    let col; 
    let endIndex = cpu.gameboard.size - 1;

    switch(cpu.cpuBehavior) {
      case _player__WEBPACK_IMPORTED_MODULE_1__.CPU_STATE.random: {
        // row = Math.round(Math.random() * (endIndex));
        // col = Math.round(Math.random() * (endIndex));
        row = 0;
        col = 0;
        break;
      }
      case _player__WEBPACK_IMPORTED_MODULE_1__.CPU_STATE.found: {
        // when found, target proximity of 1 unit radius to the found cell.
        // that means altering the row XOR column based on the last successful hit.
        
        // for deciding whether to pick row or column for adjustment
        let pickRow = Math.round(Math.random());
        // for deciding whether to plus or minus.
        let plusMinus = Math.round(Math.random()) === 0 ? 1 : -1;

        if (pickRow) {
          // if the first successful hit was 0 we don't want -1 -- always force it to be +1.
          if (cpu.cpuFirstSuccessfulHit.row === 0) {
            row = cpu.cpuFirstSuccessfulHit.row + 1;
          } else if (cpu.cpuFirstSuccessfulHit.row === endIndex) {
            row = cpu.cpuFirstSuccessfulHit.row - 1;
          } else {
            row = cpu.cpuFirstSuccessfulHit.row + plusMinus;
          }
          col = cpu.cpuFirstSuccessfulHit.col;
        } else {
          // if the first successful hit was 0 we don't want -1 -- always force it to be +1.
          if (cpu.cpuFirstSuccessfulHit.col === 0) {
            col = cpu.cpuFirstSuccessfulHit.col + 1;
          // likewise for the areas where the ship is at the edge of the board. Look back.
          } else if (cpu.cpuFirstSuccessfulHit.col === endIndex) {
            col = cpu.cpuFirstSuccessfulHit.col - 1;
          } else {
            col = cpu.cpuFirstSuccessfulHit.col + plusMinus;
          }
          row = cpu.cpuFirstSuccessfulHit.row;
        }
        break;
      }
      case _player__WEBPACK_IMPORTED_MODULE_1__.CPU_STATE.focused: {
        // in a focused mode, the CPU starts traversing in a single direction until
        // the destruction of the ship is announced, a miss occurs, or it hits a wall.

        // the direction to be traversed depends on the last two successful hits
        // and the difference between those coordinates.
        // a rowDiff indicates to look up or down, as the ship is lying vertically.
        // a colDiff indicates to look left or right, as the ship is lying horizontally.

        let rowDiff = cpu.cpuFirstSuccessfulHit.row -
            cpu.cpuSecondSuccessfulHit.row;
        
        let colDiff = cpu.cpuFirstSuccessfulHit.col -
            cpu.cpuSecondSuccessfulHit.col;
        
        // when to look up / down -- there's a row difference
        if (rowDiff) {
          // for when the focus needs to be inverted (miss or hit a grid barrier)
          if (cpu.cpuFocusInvert) {
            // get the direction the cpu was traveling in previously; if positive, then it was going up.
            // we need to go down by adding.
            if (rowDiff > 0) {
              row = cpu.cpuFirstSuccessfulHit.row + 1;
            } else {
              // else it was negative, so it was going down, so we need to go up.
              row = cpu.cpuFirstSuccessfulHit.row - 1;
            }
            cpu.cpuFocusInvert = false;
          // if at the end, start searching upwards instead.
          } else if (cpu.cpuSecondSuccessfulHit.row === endIndex) { 
            row = cpu.cpuFirstSuccessfulHit.row - 1;
          // if at the beginning, start searching downwards.
          } else if (cpu.cpuSecondSuccessfulHit.row === 0) {
            row = cpu.cpuFirstSuccessfulHit.row + 1;
          // else we're in the middle, and if that difference is 1, then look upwards.
          } else if (rowDiff > 0) {
            row = cpu.cpuSecondSuccessfulHit.row - 1;
          // also in the middle, but for difference 1, then look downwards.
          } else if (rowDiff < 0) {
            row = cpu.cpuSecondSuccessfulHit.row + 1;
          }
          // column is a given -- keep it the same.
          col = cpu.cpuSecondSuccessfulHit.col;
        // else in the case of a column difference, we look left / right.
        } else { 
          if (cpu.cpuFocusInvert) {
            // get the direction the cpu was traveling in previously; if positive, then it was going up.
            // we need to go down by adding.
            if (colDiff > 0) {
              col = cpu.cpuFirstSuccessfulHit.col + 1;
            } else {
              // else it was negative, so it was traveling leftwards; we need to go right.
              col = cpu.cpuFirstSuccessfulHit.col - 1;
            }
            cpu.cpuFocusInvert = false;
          } else if (cpu.cpuSecondSuccessfulHit.col === endIndex) {
            col = cpu.cpuFirstSuccessfulHit.col - 1;
          } else if (cpu.cpuSecondSuccessfulHit.col === 0) {
            col = cpu.cpuFirstSuccessfulHit.col + 1;
          } else if (colDiff > 0) {
            col = cpu.cpuSecondSuccessfulHit.col - 1;
          } else if (colDiff < 0) {
            col = cpu.cpuSecondSuccessfulHit.col + 1;
          }

          row = cpu.cpuSecondSuccessfulHit.row;
          console.log({row, col});
        }
        break;
      }
    }

    return [row, col];
  }

  /**
   * For the CPU to decide on an attack.
   */
  #cpuFireAttack() {
    let p2 = this.players[1];
    let status = -1;
    let shotsFired = 0;
    const stuckThreshold = 10;
    let row;
    let col;
    while (status === -1) {
      [row, col] = this.#cpuAttackDetermineCoordinates(this.players[1]);
      
      status = this.players[1].attack(this.players[0], row, col);
      
      if(shotsFired > stuckThreshold) {
        shotsFired = 0;
        p2.resetCPUBehaviors();
      }

      shotsFired++;
    }

    let attackedCell = 
        document.querySelector(`.p1.gameboard .selectable[data-row="${row}"][data-col="${col}"]`)
    attackedCell.classList.add("attacked");

    switch(status) {
      case 1: {
        console.log("CPU scores a hit!");
        attackedCell.classList.add("hit");

        // this.#page.setDialog(GAME_STATE.playerShipHit);
        // TODO
        // replace with a toast.

        let shipId = attackedCell.dataset.ship.split("player-ship")[1];

        let shipSunk = this.players[0].gameboard.isShipSunk(shipId);
        if (shipSunk) {
          document.querySelector(`.p1.gameboard .ship-name[data-ship="player-ship${shipId}"]`)
              .classList.add("destroyed");
          console.log("CPU sank that ship!");
          // TODO
          // replace with a toast appearing below the game area.
          // this.#page.setDialog(GAME_STATE.playerShipSunk);
        }

        // The CPU has made its first successful hit against a ship! 
        if (p2.cpuBehavior === _player__WEBPACK_IMPORTED_MODULE_1__.CPU_STATE.random
          && p2.cpuFirstSuccessfulHit.row === null
        ) {
          p2.cpuFirstSuccessfulHit.row = row;
          p2.cpuFirstSuccessfulHit.col = col;
          p2.cpuBehavior = _player__WEBPACK_IMPORTED_MODULE_1__.CPU_STATE.found;
        // The CPU has made a second successful hit while in found mode!
        } else if (p2.cpuBehavior === _player__WEBPACK_IMPORTED_MODULE_1__.CPU_STATE.found
          && p2.cpuSecondSuccessfulHit.row === null
        ) {
          p2.cpuSecondSuccessfulHit.row = row;
          p2.cpuSecondSuccessfulHit.col = col;
          p2.cpuBehavior = _player__WEBPACK_IMPORTED_MODULE_1__.CPU_STATE.focused;
        } else {
          // focused mode behaviors -- revert to random whe sunk.
          if (p2.cpuBehavior === _player__WEBPACK_IMPORTED_MODULE_1__.CPU_STATE.focused) {
            // only keep updating the second hit.
            p2.cpuSecondSuccessfulHit.row = row;
            p2.cpuSecondSuccessfulHit.col = col;
          }
          // in focused mode... lay down some attacks.
          // if a ship was sunk, then reset to random.
          if (shipSunk) {
            p2.resetCPUBehaviors();
          }
        }
        break;
      }
      case 0:
        console.log("CPU misses!");
        attackedCell.classList.add("miss");

        if (p2.cpuBehavior === _player__WEBPACK_IMPORTED_MODULE_1__.CPU_STATE.focused) {
          console.log("Since CPU was focused, it'll swap directions starting from the first hit.");
          p2.cpuFocusInvert = true;
        }
        break;
    }

    this.#p1turn = true;
    this.#determineIfGameOver();
  }

  #cpuPlaceShips(player) {
    let roster = document.querySelector(".p2.gameboard");

    this.shipLengths.forEach((length, index) => {
      let status = null;
      let row;
      let col;
      let vertical;

      while (status === null) {
        row = Math.round(Math.random() * (player.gameboard.size-1));
        col = Math.round(Math.random() * (player.gameboard.size-1));
        vertical = Math.round(Math.random());
        status = player.gameboard.placeShip(length, row, col, vertical);
      }

      _BattleshipElement__WEBPACK_IMPORTED_MODULE_0__.BattleshipElements.placeShipViaCoordinate(length, row, col, vertical, true, `cpu-ship${index}`);

      // list on roster too.
      let shipName = _component__WEBPACK_IMPORTED_MODULE_3__["default"].p((0,_ship__WEBPACK_IMPORTED_MODULE_2__.setName)(length), "ship-name");
      shipName.dataset.ship = `cpu-ship${index}`;

      roster.append(shipName);
    });
  }

  /**
   * Attach an instance of BattleShipElements to control the view of the page.
   * @param {BattleshipElements} page 
   */
  attachPage(page) {
    this.#page = page;
  }
}

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CPU_STATE": () => (/* binding */ CPU_STATE),
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");


const CPU_STATE = {
  random : "random",
  found : "found",
  focused : "focused"
};



class Player {
  name;
  cpu;
  /**
   * Keeps track of coordinates of the CPU's last successful hit.
   */
  cpuFirstSuccessfulHit = {row: null, col: null};
  /**
   * If the CPU scores two hits on a ship, then use this as a flag to switch
   * it's behavior to focused.
   */
  cpuSecondSuccessfulHit = {row: null, col: null};
  /**
   * There are three states for the CPU to employ: random, found, focused.
   */
  cpuBehavior;
  /**
   * When focused on a target, swaps the direction of attack when set to true.
   * Used when the CPU identifies a row / col where a ship may be, but gets a miss.
   */
  cpuFocusInvert;
  score;
  gameboard;

  constructor(name, isCpu) {
    this.name = name;
    this.cpu = isCpu;
    this.cpuBehavior = CPU_STATE.random;
    this.cpuFocusInvert = false;
    this.score = 0;
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /**
   * Attack the other player's gameboard.
   * @param {Player} player - The other player of the game.
   * @param {number} row - Row coordinate to launch an attack.
   * @param {number} col - Column coordinate to launch an attack.
   * @returns {number} - Status of the attack. 1 is a hit. 0 is a miss,
   * and -1 is an area which has already been hit.
   */
  attack(player, row, col) {
    return player.gameboard.receiveAttack(row, col);
  }

  resetCPUBehaviors() {
    this.cpuFirstSuccessfulHit = {row: null, col: null};
    this.cpuSecondSuccessfulHit = {row: null, col: null};
    this.cpuBehavior = CPU_STATE.random;
    this.cpuFocusInvert = false;
  }
}

/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setName": () => (/* binding */ setName),
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function setName(length) {
  switch(length) {
    case 1:
      return "Speeder";
    case 2:
      return "Patrol Boat";
    case 3:
      return "Destroyer";
    case 4:
      return "Battleship";
    case 5:
      return "Carrier";
    default:
      return "Ship";
  }
}

class Ship {
  /**
   * The name of the battleship, depends on the length.
   */
  name; 
  /**
   * The length of the battleship.
   */
  length;
  /**
   * Current condition of the battleship. Returns
   * an array containing status of the battleship. 
   * If the statuses are all true, the ship is sunk.
   */
  status;

  /**
   * Create a ship.
   * @param {Gameboard} gameboard - The gameboard the ship belongs to.
   * @param {Number} length - The length of the ship.
   * @param {Number} row - xCoordinate to place the ship. 0-based.
   * @param {Number} col - yCoordinate to place the ship. 0-based.
   * @param {boolean} vertical - Should the ship be placed vertically?
   */
  constructor(length) {
    this.length = length ?? 1;
    this.name = setName(this.length);
    this.status = {};
  }

  /**
   * Marks the ship hit at given location.
   * @param {number} location 
   */
  hit(x, y) {
    let id = `${x},${y}`;
    this.status[id] = true;
  }

  /**
   * Determines if the ship has been entirely sunk yet.
   */
  isSunk() {
    for (let prop in this.status) {
      if (!this.status[prop]) {
        return false;
      } 
    }
    return true;
  }
}

/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utility)
/* harmony export */ });
/**
 * A class with useful, general-purpose methods.
 */
class Utility {
  
  static emailRegex =  	
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  /**
   * Based on webpack's require to quickly import in all images in a folder.
   * See documentation https://www.npmjs.com/package/require-context to understand
   * more about the parameter.
   * 
   * @param r - require.context() function, used for importing all files in
   * a directory matching a pattern. Ex:
   * require.context("./images", false, /\.(png|jpe?g|svg)$/). Leave blank to use this.
   * @returns - An object containing all the images matching the require context,
   * the original filename (w/ extension) being the key referencing the image.
   */
  // eslint-disable-next-line no-undef
  static importAllImages(r = __webpack_require__("./src/images sync \\.(png|jpe?g|svg)$")) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  /**
   * Create an element with various classes. Wraps document.createElement.
   * @param {string} tag - The HTML tag of the element.
   * @param {string} defaultClass - Default class to refer to the element by.
   * @param  {string} classNames - (Optional) Additional classes to give the element.
   * @returns 
   */
  static createElement(tag, defaultClass, ...classNames) {
    const elem = document.createElement(tag);
    Utility.addClassesToElement(elem, defaultClass, ...classNames);

    return elem;
  }

  /**
   * A helper method which adds classes to a given element.
   * @param {HTMLElement} elem - The element to append classes to.
   * @param {string} defaultClass - The classname that said element should always have.
   * @param {string[]} classNames - The classnames to give the element (optional).
   * */ 
  static addClassesToElement(elem, defaultClass, ...classNames) {
      classNames.push(defaultClass);
      elem.classList.add(...classNames);
  }

  /**
   * For a given element, add an animation but only play it once. Afterwards,
   * unload the animation. This allows you to add the class to it again to 
   * play the animation; this is useful when associated with event triggers.
   * @param {HTMLElement} elem - An element to apply the animation to.
   * @param {string} animationName - A CSS class associated with an animation.
   */
  static triggerAnimation(elem, animationName) {
    elem.classList.add(animationName);

    elem.addEventListener("animationend", () => {
      elem.classList.remove(animationName);
    }, {once : true}); 
  }

  /**
   * Recursively scale the tree of a child node until the parent matching the given
   * selector is found. Returns NULL if no matching parent is found.
   * @param {HTMLElement} elem - A child node.
   * @param {string} selector - CSS Selector String.
   * 
   * @returns {HTMLelement} - Parent of elem.
   */
  static getMatchingParent(elem, selector) {
    while(!elem.matches(selector)) {
      elem = elem.parentNode;
      if (elem.matches("html")) {
        return null;
      }
    }
    return elem;
  }

  /**
   * Get the user's location, using the Geolocation API.
   * @returns {string} The latitude and longitude of the user's location, or null
   * if the user denies permission requests.
   */
  /*
  static getGeolocation() {

    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      const latlong = `${latitude},${longitude}`;

      return Promise.resolve(latlong);
    }
  
    function error() {
      let error = "User denied location permissions.";
      return Promise.reject(error)
    }

    return new Promise(() => {
      navigator.geolocation.getCurrentPosition(success, error);
    });
  }
  */

  /**
   * Remove all children from a parent node.
   * @param {HTMLElementNode} parent - Parent node containing children.
   */
  static removeAllChildren(parent) {
    if (parent.childElementCount === 0) {
      return;
    }
    while(parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  /**
   * Sentence format. Makes sure the first letter is capitalized, and then 
   * a period is appended.
   * 
   * @param {string} string - a string to sentence-case.
   */
  static toSentence(string) {
    return string[0].toUpperCase() + string.slice(1) + ".";
  }

  /**
   * A callback function that should be assigned to each button
   * when only one of them should be toggled. Functions like a radio
   * button but with different styling.
   * @param {*} e 
   * @param {*} parentSelector 
   */
  static toggleSelected(e, parentSelector) {
    // remove selected class from the other.
    const parent = Utility.getMatchingParent(e.currentTarget, parentSelector);
    const currentSelected = parent.querySelector(".selected");
    currentSelected.classList.remove("selected");
    currentSelected.removeAttribute("disabled");
    // toggle selected class on the button
    e.currentTarget.classList.add("selected");
    e.currentTarget.setAttribute("disabled", "true");
  }
}

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4895e6baee52b28c917.png";

/***/ }),

/***/ "./src/images/gh.png":
/*!***************************!*\
  !*** ./src/images/gh.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "582044e6ae88cd4c78b4.png";

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BattleshipElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BattleshipElement */ "./src/js/BattleshipElement.js");
/* harmony import */ var _gamemanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamemanager */ "./src/js/gamemanager.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility */ "./src/js/utility.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component */ "./src/js/component.js");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_game_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/game.css */ "./src/css/game.css");
/* harmony import */ var _css_page_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/page.css */ "./src/css/page.css");
//js 







//css





(function main() {
  const body = document.body;

  const main = _utility__WEBPACK_IMPORTED_MODULE_3__["default"].createElement("main", "content");
  const footer = _utility__WEBPACK_IMPORTED_MODULE_3__["default"].createElement("footer", "footer");
  const githubLink = _component__WEBPACK_IMPORTED_MODULE_4__["default"].a("View on GitHub.", "#", "gh-link");
  const githubIcon = _component__WEBPACK_IMPORTED_MODULE_4__["default"].img("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", "gh-icon");

  body.append(main, footer);

  const p1 = new _player__WEBPACK_IMPORTED_MODULE_2__["default"]("Commander Blue", false);
  const p2 = new _player__WEBPACK_IMPORTED_MODULE_2__["default"]("Commander Red", true);

  const game = new _gamemanager__WEBPACK_IMPORTED_MODULE_1__["default"](p1, p2);
  const page = new _BattleshipElement__WEBPACK_IMPORTED_MODULE_0__.BattleshipElements(game);

  const header = page.header();
  const gameArea = page.gameArea();

  main.append(header, gameArea);
  
  game.attachPage(page);
  page.setDialog(_gamemanager__WEBPACK_IMPORTED_MODULE_1__.GAME_STATE.welcomePrompt);
  page.setSubDialog(_gamemanager__WEBPACK_IMPORTED_MODULE_1__.SUBDIALOGS.controls1, _gamemanager__WEBPACK_IMPORTED_MODULE_1__.SUBDIALOGS.controls2);
  footer.append(githubLink, githubIcon);
})();

/*
1: Users place their ships.
2: Users play the game.
3: Game ends when the one player's battleships are destroyed.
4: The game end has statistics results and option to replay
5: Go back to step 1.
*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN5RDtBQUNGO0FBQ2Y7QUFDVjtBQUNFO0FBQ0k7QUFDcEM7QUFDQTtBQUMwQjtBQUNEO0FBQ0E7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOERBQXFCO0FBQ3BDLGlCQUFpQiw4REFBcUI7QUFDdEMscUJBQXFCLG9EQUFXO0FBQ2hDLHFCQUFxQixzREFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQU07QUFDdkIsaUJBQWlCLCtDQUFNO0FBQ3ZCO0FBQ0EsbUJBQW1CLG9EQUFXO0FBQzlCLG1CQUFtQixrRUFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0VBQXdCO0FBQ3pDLG9CQUFvQiw4REFBb0IsRUFBRSw4REFBb0I7QUFDOUQ7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL2dhbWUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9wYWdlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9jc3MvcmVzZXQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9nYW1lLmNzcz9hM2NmIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9wYWdlLmNzcz8yNjVjIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9yZXNldC5jc3M/MTUyYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvLihwbmd8anBlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL0JhdHRsZXNoaXBFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvZ2FtZW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGb3IgQ1NTIGltcG9ydGFudCB0byB0aGUgZnVuY3Rpb25pbmcgb2YgdGhlIGdhbWUuICovXFxyXFxuXFxyXFxuLm5vLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1hcmVhIHtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhpcyBwc2V1ZG8gZWxlbWVudCBoZWxwcyBrZWVwIHRoZSBjZWxscyBhbGlnbmVkIHRvZ2V0aGVyICovXFxyXFxuLyogRW1wdHkgZGl2cyBhY3Qgc3RyYW5nZWx5LCBzbyBwdXQgY29udGVudCBpbiB0aGVtLiAgKi9cXHJcXG4vKiBEZWxldGUgaXQgYW5kIHRoZW4gcnVuIHRoaXMgaW4gY29uc29sZSB0byBzZWUgdGhhdCAqL1xcclxcbi8qIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXFxcIi5jZWxsXFxcIikuZm9yRWFjaChjZWxsID0+IGNlbGwudGV4dENvbnRlbnQgPSBcXFwiQVxcXCIpOyAqL1xcclxcbi5jZWxsOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnLic7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDIzOCwgMjUyKVxcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zZWxlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlIHtcXHJcXG4gIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWdnYWJsZSAuY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM5N2ZjO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbGlkLWRyYWcge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDI1NSwgNTUpICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgNjQsIDAuMykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLnNoaXAtcGxhY2VkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNGU4YTAyO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUudmVydGljYWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXBsYWNlZCB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMxLCAyNSwgMjUpOyAqL1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMiwgMiwgMC43Mik7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEzNiwgMTM2LCAwLjg2Myk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtc3RhcnQtaG9yaXpvbnRhbCB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLW1pZGRsZS1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLWVuZC1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1zdGFydC12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1taWRkbGUtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtZW5kLXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwtdHJhbnNwYXJlbnQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtYXJlYSB7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC43cztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhLmdhbWUtYWN0aXZlIHtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlIC5zaGlwIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJldmVydDtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlOm5vdCguYXR0YWNrZWQpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDAsMCwwLjYpO1xcclxcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxyXFxufVxcclxcblxcclxcbmRpdi5nYW1lYm9hcmQtYXJlYS5nYW1lLWFjdGl2ZSA+IGRpdi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2VkOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAyNSU7XFxyXFxuICB2aXNpYmlsaXR5OiB1bnNldDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBmb250LXNpemU6IDE3MCU7XFxyXFxuICByaWdodDogMjUlO1xcclxcbiAgLyogYm90dG9tOiAyNSU7ICovXFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQubWlzczo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIuKXi1xcXCI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBhbmltYXRpb246IHNtYXNoIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQuaGl0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYW5pbWF0aW9uOiBzbWFzaCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNtYXNoIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC4yNTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEuMDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbmFtZS5kZXN0cm95ZWQge1xcclxcbiAgY29sb3I6ICNmZjI0MjRhYjtcXHJcXG4gIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG5wLnNoaXAtbmFtZS5kZXN0cm95ZWQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGNvbnRlbnQ6IFxcXCLiprtcXFwiO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9nYW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzREFBc0Q7O0FBRXREO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQSw4REFBOEQ7QUFDOUQsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCxnRkFBZ0Y7QUFDaEY7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsb0NBQW9DO0VBQ3BDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDRDQUE0QztFQUM1Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZvciBDU1MgaW1wb3J0YW50IHRvIHRoZSBmdW5jdGlvbmluZyBvZiB0aGUgZ2FtZS4gKi9cXHJcXG5cXHJcXG4ubm8tZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWFyZWEge1xcclxcbiAgbWF4LXdpZHRoOiA5MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGlzIHBzZXVkbyBlbGVtZW50IGhlbHBzIGtlZXAgdGhlIGNlbGxzIGFsaWduZWQgdG9nZXRoZXIgKi9cXHJcXG4vKiBFbXB0eSBkaXZzIGFjdCBzdHJhbmdlbHksIHNvIHB1dCBjb250ZW50IGluIHRoZW0uICAqL1xcclxcbi8qIERlbGV0ZSBpdCBhbmQgdGhlbiBydW4gdGhpcyBpbiBjb25zb2xlIHRvIHNlZSB0aGF0ICovXFxyXFxuLyogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXFwiLmNlbGxcXFwiKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC50ZXh0Q29udGVudCA9IFxcXCJBXFxcIik7ICovXFxyXFxuLmNlbGw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcuJztcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpXFxyXFxufVxcclxcblxcclxcbi5zaGlwLXNlbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUge1xcclxcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlIC5jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzk3ZmM7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGUge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4udmFsaWQtZHJhZyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMjU1LCA1NSkgIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCA2NCwgMC4zKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5zaGlwLXBsYWNlZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM0ZThhMDI7XFxyXFxufVxcclxcblxcclxcbi5vY2N1cGllZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyMzgsIDI1Mik7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWdnYWJsZS52ZXJ0aWNhbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcGxhY2VkIHtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzEsIDI1LCAyNSk7ICovXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAyLCAyLCAwLjcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTM2LCAxMzYsIDAuODYzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1zdGFydC1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtbWlkZGxlLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtZW5kLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLXN0YXJ0LXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLW1pZGRsZS12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1lbmQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC10cmFuc3BhcmVudCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWFyZWEuZ2FtZS1hY3RpdmUge1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ucDEuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGUgLnNoaXAge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4ucDEuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmV2ZXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucDIuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGU6bm90KC5hdHRhY2tlZCk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwwLDAuNik7XFxyXFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmdhbWVib2FyZC1hcmVhLmdhbWUtYWN0aXZlID4gZGl2LmdhbWVib2FyZCAuY2VsbC5hdHRhY2tlZCB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQ6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDI1JTtcXHJcXG4gIHZpc2liaWxpdHk6IHVuc2V0O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTcwJTtcXHJcXG4gIHJpZ2h0OiAyNSU7XFxyXFxuICAvKiBib3R0b206IDI1JTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCAuY2VsbC5hdHRhY2tlZC5taXNzOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwi4peLXFxcIjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGFuaW1hdGlvbjogc21hc2ggMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCAuY2VsbC5hdHRhY2tlZC5oaXQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBhbmltYXRpb246IHNtYXNoIDAuNXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc21hc2gge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjI1O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMS4wO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1uYW1lLmRlc3Ryb3llZCB7XFxyXFxuICBjb2xvcjogI2ZmMjQyNGFiO1xcclxcbiAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbnAuc2hpcC1uYW1lLmRlc3Ryb3llZDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgY29udGVudDogXFxcIuKmu1xcXCI7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZvciBDU1MgdGhhdCBoYXMgYWVzdGhldGljIHB1cnBvc2VzLiAqL1xcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNTNkZWcsIHJnYigxMSAzNSA1NiAvIDg5JSksIHJnYig5NCAyMDcgMjE5IC8gNTQlKSA1NS43MSUpLFxcclxcbiAgbGluZWFyLWdyYWRpZW50KDI2NWRlZywgcmdiKDIzOCA4IDI2IC8gOTAlKSwgcmdiKDE4IDM4IDg4IC8gNzMlKSA3MC43MSUpLFxcclxcbiAgbGluZWFyLWdyYWRpZW50KDE0MmRlZywgcmdiKDEzMyAxMzEgMjA1IC8gODMlKSwgcmdiKDQ5IDgyIDEwMyAvIDc3JSkgNzAuNzElKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBmbGV4OiAxIDAgYXV0bztcXHJcXG59XFxyXFxuLmZvb3RlciB7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuZ2gtaWNvbiB7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICB0ZXh0LXNoYWRvdzogNHB4IDJweCAycHggIzAwMDAwMDQ1O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7ICBcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjI1JTsgIFxcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDY2cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLXBpYyB7XFxyXFxuICB3aWR0aDogNjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1ncmlkIHtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTZweCA0cHggIzQ1NDM0Mzk0O1xcclxcbn1cXHJcXG5cXHJcXG4ucDEgLmdhbWVib2FyZC1ncmlkIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucDEgLmdhbWVib2FyZC1ncmlkID4gLmNlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIgMTIgMzIgLyA3MyUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucDIgLmdhbWVib2FyZC1ncmlkIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucDEuZ2FtZWJvYXJkIC5jZWxsIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNSw3OSwxMzEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucDIuZ2FtZWJvYXJkIC5jZWxsOm5vdCguY3B1LXNoaXAtcGxhY2VkKSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMxLCAyNSwgMjUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMiwgMiwgMC43Mik7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtb3duZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxMjUlO1xcclxcbiAgZm9udC12YXJpYW50LWNhcHM6IGFsbC1zbWFsbC1jYXBzO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLmRyYWdnYWJsZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuZHJhZ2dhYmxlIGRpdi5jZWxsIHtcXHJcXG4gIGJvcmRlcjogM3B4IG91dHNldCAjMTk2NGM0O1xcclxcbiAgd2lkdGg6IDE5LjdweDtcXHJcXG4gIGhlaWdodDogMTkuMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC1wbGFjZWQudmVydGljYWwgZGl2LmNlbGwge1xcclxcbiAgaGVpZ2h0OiAxOS43cHg7XFxyXFxuICB3aWR0aDogMTkuMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5kaXYuc2hpcC1wbGFjZWQge1xcclxcbiAgdG9wOiAtMnB4O1xcclxcbiAgbGVmdDogLTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODlkZDE7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLmRyYWdnYWJsZTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgxODQsIDIzMywgMjU1LCAwLjU2Mik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLmRyYWdnYWJsZTpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAxMDAlOyBcXHJcXG4gIGxlZnQ6IDE1cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogLTVweDtcXHJcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmxhY2sgYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLmRyYWdnYWJsZTpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogYXR0cihkYXRhLW5hbWUpO1xcclxcbiAgZm9udC12YXJpYW50LWNhcHM6IGFsbC1zbWFsbC1jYXBzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsNDUsNDUpO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgY29sb3I6IGJlaWdlO1xcclxcbiAgYm90dG9tOiBjYWxjKDEwMCUgKyA1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5udW1iZXJpbmcgLm51bWJlci1sYWJlbCB7XFxyXFxuICBtYXJnaW46IDZweCBhdXRvO1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTEwJTtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtYXJlYSB7XFxyXFxuICBtYXJnaW46IDE1cHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZy1hcmVhIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAxcHggNnB4IHJnYigxMDAsIDEwMCwgMTAwKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2ctYXJlYSAuZGlhbG9nLW1zZyB7XFxyXFxuICBmb250LXNpemU6IDE2NSU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLWFyZWEgLmNvbnRyb2xzLWhlbHAge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBsaW5lLWhlaWdodDogLjI1aW47XFxyXFxufVxcclxcblxcclxcbi5tZW51LWFyZWEge1xcclxcbiAgd2lkdGg6IDI5MHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXNlbGVjdGlvbiA+ICoge1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1wbGFjZXItbGFiZWwsIC5zdGFydC1nYW1lLXByb21wdCA+IFtmb3I9XFxcInAxLW5hbWVcXFwiXSB7XFxyXFxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXBldGl0ZS1jYXBzO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNwMS1uYW1lIHtcXHJcXG4gIGFsbDogdW5zZXQ7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lLWJ1dHRvbiwgLnBsYXktYWdhaW4ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjE1LCAxNDApO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWdhbWUtYnV0dG9uOmRpc2FibGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5zdWJkaWFsb2ctYXJlYSB7XFxyXFxuICAvKiBhbmltYXRpb246IHB1bGwtb3BlbiAxLjI1czsgKi9cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwdWxsLW9wZW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMSk7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZ2FtZS1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzMSwgMTg1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWdhbWUtYnV0dG9uOmFjdGl2ZSwgLnBsYXktYWdhaW46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDEyNSwgNDkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwZWFyLWZyb20tYm90dG9tIHtcXHJcXG4gIGFuaW1hdGlvbjogYXBwZWFyLWZyb20tYm90dG9tIDAuNzVzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5hcHBlYXItZnJvbS1yaWdodCB7XFxyXFxuICBhbmltYXRpb246IGFwcGVhci1mcm9tLXJpZ2h0IDFzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFwcGVhci1mcm9tLWJvdHRvbSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyLWZyb20tcmlnaHQge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxyXFxuICB9XFxyXFxuICAzMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeS1hcmVhIHtcXHJcXG4gIHdpZHRoOiAzMjBweDtcXHJcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udmljdG9yeS1tZXNzYWdlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE1MCU7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDExNSU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjY3VyYWN5IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICBmb250LXNpemU6IDExNSU7XFxyXFxuICBtYXJnaW46IDE1cHggYXV0byAwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFjYy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBwZXRpdGUtY2FwcztcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXktYWdhaW4ge1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5LXNjcmVlbiB7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDBweCAzcHggIzNjM2MzYztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODI1MDQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMWEzMDc4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDNweCAxNHB4IDRweCAjMDAwMDAwMzM7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEseUNBQXlDO0FBRXpDO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHdJQUF3STtFQUN4SSxZQUFZO0VBQ1o7OzhFQUU0RTtFQUM1RSw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNw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QUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixzQ0FBc0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRm9yIENTUyB0aGF0IGhhcyBhZXN0aGV0aWMgcHVycG9zZXMuICovXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzUzZGVnLCByZ2IoMTEgMzUgNTYgLyA4OSUpLCByZ2IoOTQgMjA3IDIxOSAvIDU0JSkgNTUuNzElKSxcXHJcXG4gIGxpbmVhci1ncmFkaWVudCgyNjVkZWcsIHJnYigyMzggOCAyNiAvIDkwJSksIHJnYigxOCAzOCA4OCAvIDczJSkgNzAuNzElKSxcXHJcXG4gIGxpbmVhci1ncmFkaWVudCgxNDJkZWcsIHJnYigxMzMgMTMxIDIwNSAvIDgzJSksIHJnYig0OSA4MiAxMDMgLyA3NyUpIDcwLjcxJSk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZmxleDogMSAwIGF1dG87XFxyXFxufVxcclxcbi5mb290ZXIge1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmdoLWljb24ge1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiAgdGV4dC1zaGFkb3c6IDRweCAycHggMnB4ICMwMDAwMDA0NTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4OyAgXFxyXFxufVxcclxcblxcclxcbi50aXRsZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIyNSU7ICBcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvciB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiA2NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1waWMge1xcclxcbiAgd2lkdGg6IDY0cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDE2cHggNHB4ICM0NTQzNDM5NDtcXHJcXG59XFxyXFxuXFxyXFxuLnAxIC5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnAxIC5nYW1lYm9hcmQtZ3JpZCA+IC5jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyIDEyIDMyIC8gNzMlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAyIC5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdhbWVib2FyZCAuY2VsbCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUsNzksMTMxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdhbWVib2FyZCAuY2VsbDpub3QoLmNwdS1zaGlwLXBsYWNlZCkge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMSwgMjUsIDI1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDIsIDIsIDAuNzIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLW93bmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTI1JTtcXHJcXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtc21hbGwtY2FwcztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGUge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLmRyYWdnYWJsZSBkaXYuY2VsbCB7XFxyXFxuICBib3JkZXI6IDNweCBvdXRzZXQgIzE5NjRjNDtcXHJcXG4gIHdpZHRoOiAxOS43cHg7XFxyXFxuICBoZWlnaHQ6IDE5LjFweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAtcGxhY2VkLnZlcnRpY2FsIGRpdi5jZWxsIHtcXHJcXG4gIGhlaWdodDogMTkuN3B4O1xcclxcbiAgd2lkdGg6IDE5LjFweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZGl2LnNoaXAtcGxhY2VkIHtcXHJcXG4gIHRvcDogLTJweDtcXHJcXG4gIGxlZnQ6IC0ycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5ZGQxO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGU6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMTg0LCAyMzMsIDI1NSwgMC41NjIpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGU6aG92ZXI6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTAwJTsgXFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxuICBib3JkZXItd2lkdGg6IDVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrIGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGU6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1uYW1lKTtcXHJcXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtc21hbGwtY2FwcztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LDQ1LDQ1KTtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIGNvbG9yOiBiZWlnZTtcXHJcXG4gIGJvdHRvbTogY2FsYygxMDAlICsgNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwubnVtYmVyaW5nIC5udW1iZXItbGFiZWwge1xcclxcbiAgbWFyZ2luOiA2cHggYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBmb250LXNpemU6IDExMCU7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWFyZWEge1xcclxcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2ctYXJlYSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMXB4IDZweCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxyXFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLWFyZWEgLmRpYWxvZy1tc2cge1xcclxcbiAgZm9udC1zaXplOiAxNjUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZy1hcmVhIC5jb250cm9scy1oZWxwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IC4yNWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1hcmVhIHtcXHJcXG4gIHdpZHRoOiAyOTBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zZWxlY3Rpb24gPiAqIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBsYWNlciB7XFxyXFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VyLWxhYmVsLCAuc3RhcnQtZ2FtZS1wcm9tcHQgPiBbZm9yPVxcXCJwMS1uYW1lXFxcIl0ge1xcclxcbiAgZm9udC12YXJpYW50LWNhcHM6IGFsbC1wZXRpdGUtY2FwcztcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jcDEtbmFtZSB7XFxyXFxuICBhbGw6IHVuc2V0O1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZ2FtZS1idXR0b24sIC5wbGF5LWFnYWluIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxNSwgMTQwKTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lLWJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViZGlhbG9nLWFyZWEge1xcclxcbiAgLyogYW5pbWF0aW9uOiBwdWxsLW9wZW4gMS4yNXM7ICovXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcHVsbC1vcGVuIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjEpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWdhbWUtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzEsIDE4NSk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lLWJ1dHRvbjphY3RpdmUsIC5wbGF5LWFnYWluOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxMjUsIDQ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcGVhci1mcm9tLWJvdHRvbSB7XFxyXFxuICBhbmltYXRpb246IGFwcGVhci1mcm9tLWJvdHRvbSAwLjc1cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwZWFyLWZyb20tcmlnaHQge1xcclxcbiAgYW5pbWF0aW9uOiBhcHBlYXItZnJvbS1yaWdodCAxcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXItZnJvbS1ib3R0b20ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFwcGVhci1mcm9tLXJpZ2h0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcclxcbiAgfVxcclxcbiAgMzAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnktYXJlYSB7XFxyXFxuICB3aWR0aDogMzIwcHg7XFxyXFxuICBtYXJnaW46IDE1cHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnZpY3RvcnktbWVzc2FnZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxMTUlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5hY2N1cmFjeSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiAgZm9udC1zaXplOiAxMTUlO1xcclxcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hY2MtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICBmb250LXZhcmlhbnQtY2FwczogcGV0aXRlLWNhcHM7XFxyXFxufVxcclxcblxcclxcbi5wbGF5LWFnYWluIHtcXHJcXG4gIG1hcmdpbjogMTVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeS1zY3JlZW4ge1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAwcHggM3B4ICMzYzNjM2M7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzgyNTA0O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTFhMzA3ODtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCAzcHggMTRweCA0cHggIzAwMDAwMDMzO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmF0dGxlc2hpcC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYmF0dGxlc2hpcC5wbmdcIixcblx0XCIuL2doLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9naC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5cclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nJztcclxuaW1wb3J0IHsgR0FNRV9TVEFURSB9IGZyb20gXCIuL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHNldE5hbWUgfSBmcm9tIFwiLi9zaGlwXCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGVsZW1lbnRzIGZvciBCYXR0bGVzaGlwLlxyXG4gKi9cclxuIGV4cG9ydCBjbGFzcyBCYXR0bGVzaGlwRWxlbWVudHMge1xyXG5cclxuICAjZGlhbG9nSG9sZGVyO1xyXG4gICNnYW1lQ29udGFpbmVyO1xyXG4gIGdhbWVNYW5hZ2VyO1xyXG4gICNjdXJyZW50RHJhZ2dlZFNoaXBJZDtcclxuICAjY3VycmVudERyYWdnZWRMZW5ndGg7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWVNYW5hZ2VyKSB7XHJcbiAgICB0aGlzLmdhbWVNYW5hZ2VyID0gZ2FtZU1hbmFnZXI7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIpO1xyXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwidGl0bGUtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGNvbXBvbmVudC5oZWFkaW5nKFwiQmF0dGxlc2hpcHNcIiwgMSwgXCJ0aXRsZVwiKTtcclxuICAgIGNvbnN0IHRpdGxlSWNvbiA9IGNvbXBvbmVudC5pbWcobG9nbywgXCJsb2dvLXBpY1wiKTtcclxuICAgIGNvbnN0IGF1dGhvckxhYmVsID0gY29tcG9uZW50LnAoXCJieSBEYW4gVC5cIiwgXCJhdXRob3JcIik7XHJcblxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKHRpdGxlSWNvbiwgdGl0bGVMYWJlbCk7XHJcblxyXG4gICAgaGVhZGluZy5hcHBlbmQodGl0bGVDb250YWluZXIsIGF1dGhvckxhYmVsKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGluZztcclxuICB9XHJcblxyXG4gIGdhbWVBcmVhKCkge1xyXG4gICAgdGhpcy4jZ2FtZUNvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJnYW1lLWFyZWFcIik7XHJcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZ2FtZWJvYXJkLWFyZWFcIik7XHJcbiAgICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZGlhbG9nLWFyZWFcIik7XHJcbiAgICBjb25zdCBtZW51QXJlYSA9IGNvbXBvbmVudC5kaXYoXCJtZW51LWFyZWFcIik7XHJcbiAgICBjb25zdCBzdW1tYXJ5QXJlYSA9IGNvbXBvbmVudC5kaXYoXCJzdW1tYXJ5LWFyZWFcIiwgXCJuby1kaXNwbGF5XCIpO1xyXG5cclxuICAgIHRoaXMuI2dhbWVDb250YWluZXIuYXBwZW5kKGRpYWxvZ0NvbnRhaW5lciwgZ2FtZWJvYXJkQ29udGFpbmVyLCBtZW51QXJlYSwgc3VtbWFyeUFyZWEpO1xyXG5cclxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmQodGhpcy4jZ2FtZWJvYXJkKFwiUGxheWVyXCIsIFwicDFcIiksIHRoaXMuI2dhbWVib2FyZChcIkNQVVwiLCBcInAyXCIsIFwibm8tZGlzcGxheVwiKSk7XHJcblxyXG4gICAgZGlhbG9nQ29udGFpbmVyLmFwcGVuZCh0aGlzLiNkaWFsb2coKSk7XHJcblxyXG4gICAgbWVudUFyZWEuYXBwZW5kKHRoaXMuI3NoaXBQbGFjZW1lbnQoKSk7XHJcbiAgICBtZW51QXJlYS5hcHBlbmQodGhpcy4jc3RhcnRHYW1lUHJvbXB0KCkpO1xyXG5cclxuICAgIHRoaXMuZ2VuZXJhdGVEcmFnZ2FibGVTaGlwcygpO1xyXG4gICAgdGhpcy4jZW5hYmxlRHJhZ0FuZERyb3BPbkNlbGwoKTtcclxuXHJcbiAgICBzdW1tYXJ5QXJlYS5hcHBlbmQodGhpcy4jc3VtbWFyeSgpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy4jZ2FtZUNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGNsaWNrYWJsZSBncmlkIGJhc2VkIG9uIHRoZSBnYW1lIG1hbmFnZXIncyBnYW1lYm9hcmQgc2l6ZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWVyTmFtZSA6IHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXI7IHVzZWQgYXMgYSBjbGFzcyBuYW1lIHRvIFxyXG4gICAqIGlkZW50aWZ5IHRoZSBnYW1lYm9hcmQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyA6IEFkZGl0aW9uYWwgY2xhc3MgbmFtZXMgdG8gaWRlbnRpZnkgdGhlIGdhbWVib2FyZCBieS5cclxuICAgKi9cclxuICAjZ2FtZWJvYXJkKHBsYXllck5hbWUsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGNvbXBvbmVudC5kaXYoXCJnYW1lYm9hcmRcIiwgLi4uY2xhc3NOYW1lcyk7XHJcbiAgICBjb25zdCBnYW1lYm9hcmRHcmlkID0gY29tcG9uZW50LmRpdihcImdhbWVib2FyZC1ncmlkXCIpO1xyXG5cclxuICAgIGNvbnN0IGdyaWRTaXplID0gdGhpcy5nYW1lTWFuYWdlci5wbGF5ZXJzWzBdLmdhbWVib2FyZC5zaXplO1xyXG4gICAgY29uc3QgbnVtYmVyQ2VsbCA9IGNvbXBvbmVudC5kaXYoXCJjZWxsXCIsIFwibnVtYmVyaW5nXCIpO1xyXG4gICAgY29uc3QgbnVtYmVyVGV4dCA9IGNvbXBvbmVudC5wKFwiXCIsIFwibnVtYmVyLWxhYmVsXCIpO1xyXG5cclxuICAgIGNvbnN0IHNoaXBSb3N0ZXIgPSBjb21wb25lbnQuZGl2KFwic2hpcC1yb3N0ZXJcIiwgXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgY29uc3Qgc2hpcFJvc3RlckxhYmVsID0gY29tcG9uZW50LnAoXCJTaGlwIHN0YXR1c1wiLCBcInNoaXAtcm9zdGVyLWhlYWRlclwiKTtcclxuXHJcbiAgICBudW1iZXJDZWxsLmFwcGVuZChudW1iZXJUZXh0KTtcclxuICAgIGdhbWVib2FyZEdyaWQucHJlcGVuZChjb21wb25lbnQuZGl2KFwiY2VsbFwiLCBcImJsYW5rXCIpKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgcm93IG51bWJlcmluZ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkU2l6ZTsgaSsrKSB7XHJcbiAgICAgIG51bWJlclRleHQudGV4dENvbnRlbnQgPSBpICsgMTtcclxuICAgICAgZ2FtZWJvYXJkR3JpZC5hcHBlbmQobnVtYmVyQ2VsbC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZSBjb2x1bW4gbnVtYmVyaW5nIGFuZCBjZWxsc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkU2l6ZTsgaSsrKSB7XHJcbiAgICAgIG51bWJlclRleHQudGV4dENvbnRlbnQgPSBpICsgMTtcclxuICAgICAgZ2FtZWJvYXJkR3JpZC5hcHBlbmQobnVtYmVyQ2VsbC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkU2l6ZTsgaisrKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiLCBcInNlbGVjdGFibGVcIik7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGo7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICAgIGdhbWVib2FyZEdyaWQuYXBwZW5kKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZWJvYXJkLmFwcGVuZChnYW1lYm9hcmRHcmlkKTtcclxuXHJcbiAgICAvLyBBcHBseSBoZWFkZXJzIGZvciB0aGUgZ2FtZWJvYXJkXHJcbiAgICBnYW1lYm9hcmQucHJlcGVuZChjb21wb25lbnQuaGVhZGluZyhwbGF5ZXJOYW1lLCAyLCBcImdhbWVib2FyZC1vd25lclwiKSk7XHJcblxyXG4gICAgLy8gQXBwbHkgcm9zdGVyLlxyXG4gICAgc2hpcFJvc3Rlci5hcHBlbmQoc2hpcFJvc3RlckxhYmVsKTtcclxuICAgIGdhbWVib2FyZC5hcHBlbmQoc2hpcFJvc3Rlcik7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGVzIGEgZGlhbG9nIG1lc3NhZ2UsIHdoaWNoIGlzIHVzZWQgdG8gXHJcbiAgICogZ2l2ZSB0aGUgdXNlciBkaXJlY3Rpb25zIG9uIGVhY2ggcGhhc2Ugb2YgdGhlIGdhbWUuXHJcbiAgICovXHJcbiAgI2RpYWxvZygpIHtcclxuICAgIGxldCBkaWFsb2dDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZGlhbG9nXCIpO1xyXG4gICAgbGV0IGRpYWxvZ01zZyA9IGNvbXBvbmVudC5wKEdBTUVfU1RBVEUud2VsY29tZVByb21wdCwgXCJkaWFsb2ctbXNnXCIpO1xyXG4gICAgbGV0IHN1YkRpYWxvZyA9IGNvbXBvbmVudC5kaXYoXCJzdWJkaWFsb2ctYXJlYVwiKTtcclxuICAgIFxyXG4gICAgZGlhbG9nQ29udGFpbmVyLmFwcGVuZChkaWFsb2dNc2csIHN1YkRpYWxvZyk7XHJcblxyXG4gICAgdGhpcy4jZGlhbG9nSG9sZGVyID0gZGlhbG9nQ29udGFpbmVyO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIGRpYWxvZyBmb3IgdGhlIGJhdHRsZXNoaXAgZ2FtZS4gUHJlZmVyYWJseSwgdXNlIG1lc3NhZ2VzIGZyb20gdGhlXHJcbiAgICogZ2FtZW1hbmFnZXIgR0FNRV9TVEFURSBvYmplY3QuXHJcbiAgICogQHBhcmFtIHt9IG1lc3NhZ2UgXHJcbiAgICovXHJcbiAgc2V0RGlhbG9nKG1lc3NhZ2UpIHtcclxuICAgIGxldCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpYWxvZy1tc2dcIik7XHJcbiAgICBtc2cudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgVXRpbGl0eS50cmlnZ2VyQW5pbWF0aW9uKG1zZywgXCJhcHBlYXItZnJvbS1ib3R0b21cIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgc3ViZGlhbG9nIGluIHRoZSBkaWFsb2cgYXJlYS5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmdbXX0gbWVzc2FnZXMgXHJcbiAgICovXHJcbiAgc2V0U3ViRGlhbG9nKC4uLm1lc3NhZ2VzKSB7XHJcbiAgICBjb25zdCBzZGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YmRpYWxvZy1hcmVhXCIpO1xyXG4gICAgVXRpbGl0eS5yZW1vdmVBbGxDaGlsZHJlbihzZGEpO1xyXG5cclxuICAgIG1lc3NhZ2VzLmZvckVhY2gobXNnID0+IHtcclxuICAgICAgbGV0IHAgPSBjb21wb25lbnQucChtc2csIFwic3ViZGlhbG9nLW1lc3NhZ2VcIik7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViZGlhbG9nLWFyZWFcIikuYXBwZW5kKHApO1xyXG4gICAgICBVdGlsaXR5LnRyaWdnZXJBbmltYXRpb24ocCwgXCJhcHBlYXItZnJvbS1yaWdodFwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGVzIGFuIGludmVudG9yeSBvZiBzaGlwcyBhbmQgbGV0cyB0aGVtIGJlIGRyYWdnZWQgYnkgdGhlIHBsYXllci5cclxuICAgKi9cclxuICAjc2hpcFBsYWNlbWVudCgpIHtcclxuICAgIGxldCBzaGlwSW52ZW50b3J5ID0gY29tcG9uZW50LmRpdihcInNoaXAtcGxhY2VyXCIpO1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSBjb21wb25lbnQuaGVhZGluZyhcIllvdXIgQXJtYWRhOlwiLCAzLCBcInNoaXAtcGxhY2VyLWxhYmVsXCIpO1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IGNvbXBvbmVudC5kaXYoXCJzaGlwLXNlbGVjdGlvblwiKTtcclxuXHJcbiAgICBzaGlwSW52ZW50b3J5LmFwcGVuZChoZWFkZXIsIHNlbGVjdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIHNoaXBJbnZlbnRvcnk7XHJcbiAgfVxyXG5cclxuICAvKiogXHJcbiAgICogUmVnZW5lcmF0ZSBkcmFnZ2FibGUgc2hpcHMgd2l0aGluIC5zaGlwLXNlbGVjdGlvbi5cclxuICAgKi9cclxuICBnZW5lcmF0ZURyYWdnYWJsZVNoaXBzKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy4jZ2FtZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtc2VsZWN0aW9uXCIpXHJcbiAgICB0aGlzLmdhbWVNYW5hZ2VyLnNoaXBMZW5ndGhzLmZvckVhY2goKHNoaXBMZW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBzaGlwID0gY29tcG9uZW50LmRpdihcInNoaXBcIiwgXCJkcmFnZ2FibGVcIik7XHJcbiAgICAgIHNoaXAuaWQgPSBgcGxheWVyLXNoaXAke2luZGV4fWA7XHJcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuOyBpKyspIHtcclxuICAgICAgICBsZXQgY2VsbCA9IGNvbXBvbmVudC5kaXYoXCJjZWxsXCIpO1xyXG4gICAgICAgIHNoaXAuYXBwZW5kKGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgdGhpcy4jc2hpcE9uRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIHRoaXMuI3NoaXBPbkRyYWdFbmQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICBzaGlwLmRhdGFzZXQubmFtZSA9IHNldE5hbWUoc2hpcExlbik7XHJcblxyXG4gICAgICBjb250YWluZXIuYXBwZW5kKHNoaXApO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXkgZHJvcCBndWlkZXMgd2hlbiBhIHNoaXAgaXMgYmVpbmcgZHJhZ2dlZCBvdmVyIGEgZ2FtZWJvYXJkLlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBkcmFnIG92ZXIgZXZlbnQuXHJcbiAgICovXHJcbiAgI2Rpc3BsYXlEcm9wR3VpZGVzKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgIGxldCBob3ZlckNlbGwgPSBVdGlsaXR5LmdldE1hdGNoaW5nUGFyZW50KGUudGFyZ2V0LCBcIi5zZWxlY3RhYmxlXCIpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuI2N1cnJlbnREcmFnZ2VkU2hpcElkfWApLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xyXG5cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZH1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKSkge1xyXG4gICAgICAvLyBhcHBseSB2ZXJ0aWNhbCBndWlkZS5cclxuICAgICAgbGV0IGNvbCA9IGhvdmVyQ2VsbC5kYXRhc2V0LmNvbDtcclxuICAgICAgbGV0IGNlbGxzQ29sID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLWNvbD1cIiR7Y29sfVwiXWApKTtcclxuICAgICAgbGV0IGluZGV4ID0gY2VsbHNDb2wuaW5kZXhPZihob3ZlckNlbGwpO1xyXG5cclxuICAgICAgaWYgKGluZGV4ICsgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGggPD0gY2VsbHNDb2wubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyB0aGlzLiNjdXJyZW50RHJhZ2dlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAvLyBub3QgYSB2YWxpZCBwbGFjZW1lbnQuXHJcbiAgICAgICAgICBpZiAoY2VsbHNDb2xbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib2NjdXBpZWRcIilcclxuICAgICAgICAgICAgJiYgY2VsbHNDb2xbaV0uZGF0YXNldC5zaGlwICE9PSB0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZCkge1xyXG4gICAgICAgICAgICB0aGlzLiNyZW1vdmVEcmFnR3VpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2VsbHNDb2xbaV0uY2xhc3NMaXN0LmFkZChcInZhbGlkLWRyYWdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBhcHBseSBob3Jpem9udGFsIGd1aWRlXHJcbiAgICAgIGxldCByb3cgPSBob3ZlckNlbGwuZGF0YXNldC5yb3c7XHJcbiAgICAgIGxldCBjZWxsc1JvdyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke3Jvd31cIl1gKSk7XHJcbiAgICAgIGxldCBpbmRleCA9IGNlbGxzUm93LmluZGV4T2YoaG92ZXJDZWxsKTtcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaG92ZXJpbmcgb3ZlciBpbmRleDogXCIgKyBpbmRleCk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggKyB0aGlzLiNjdXJyZW50RHJhZ2dlZExlbmd0aCA8PSBjZWxsc1Jvdy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIC8vIG5vdCBhIHZhbGlkIHBsYWNlbWVudC5cclxuICAgICAgICAgIGlmIChjZWxsc1Jvd1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJvY2N1cGllZFwiKVxyXG4gICAgICAgICAgICAmJiBjZWxsc1Jvd1tpXS5kYXRhc2V0LnNoaXAgIT09IHRoaXMuI2N1cnJlbnREcmFnZ2VkU2hpcElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI3JlbW92ZURyYWdHdWlkZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY2VsbHNSb3dbaV0uY2xhc3NMaXN0LmFkZChcInZhbGlkLWRyYWdcIik7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7aW5kZXgsIGN1cnJlbnREcmFnZ2VkTGVuZ3RoLCBpfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgZHJhZyBndWlkZS5cclxuICAgKi9cclxuICAjcmVtb3ZlRHJhZ0d1aWRlKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVcIilcclxuICAgIC5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZC1kcmFnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZnRlciB0aGUgdXNlciBkcm9wcyB0aGUgc2hpcCwgcGxhY2VzIHRoZSBzaGlwLlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBEcm9wIGV2ZW50LlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gICNwbGFjZVNoaXBPbkRyb3AoZSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWR9YCkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAvLyBvbmx5IHdoZW4gdGhlIGFyZWEgaXMgYSB2YWxpZC1kcmFnIGRvIHdlIGFkZCBpdCBpbi4gb3RoZXJ3aXNlLCBub3BlLlxyXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2YWxpZC1kcmFnXCIpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLiNyZW1vdmVEcmFnR3VpZGUoKTtcclxuXHJcbiAgICBjb25zdCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG5cclxuICAgIC8vIGJlZm9yZSBtb3ZpbmcgdGhlIHNoaXAsIGRldGVybWluZSBpZiBpdCBoYXMgYmVlbiBwbGFjZWQgYWxyZWFkeS4uLiBcclxuICAgIC8vIHRoaXMgaXMgdHJ1ZSBpZiB0aGUgc2hpcCBpcyBpbnNpZGUgYSBzZWxlY3RhYmxlIGNlbGwuXHJcbiAgICBsZXQgbGFzdFBsYWNlZExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlbGVjdGFibGUgIyR7aWR9YCk7XHJcblxyXG4gICAgLy8gaWYgc28gd2UgbmVlZCB0byByZW1vdmUgb2NjdXBpZWQgZnJvbSBzdWNoIGNlbGxzLlxyXG4gICAgaWYgKGxhc3RQbGFjZWRMb2NhdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICBsZXQgY2VsbHM7XHJcbiAgICAgIGxldCB2ZXJ0aWNhbCA9IGxhc3RQbGFjZWRMb2NhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcclxuXHJcbiAgICAgIC8vIHBhcmVudE5vZGUgaXMgdGhlIGNlbGwuXHJcbiAgICAgIGxhc3RQbGFjZWRMb2NhdGlvbiA9IGxhc3RQbGFjZWRMb2NhdGlvbi5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgbGV0IGNvbCA9IGxhc3RQbGFjZWRMb2NhdGlvbi5kYXRhc2V0LmNvbDtcclxuICAgICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1jb2w9XCIke2NvbH1cIl1gKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIG9jY3VwaWVkIG1hcmtpbmcgZnJvbSB0aG9zZSBjZWxscy5cclxuICAgICAgICBsZXQgcm93ID0gbGFzdFBsYWNlZExvY2F0aW9uLmRhdGFzZXQucm93O1xyXG4gICAgICAgIGNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLXJvdz1cIiR7cm93fVwiXWApKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGluZGV4ID0gY2VsbHMuaW5kZXhPZihsYXN0UGxhY2VkTG9jYXRpb24pO1xyXG5cclxuICAgICAgLy8gY29sb3IgdGhlIHN1YnNlcXVlbnQgY2VsbHMuXHJcbiAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICBjZWxsc1tpXS5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBsYWNlZENlbGwgPSBlLnRhcmdldDtcclxuICAgIC8vIG1vdmUgdGhlIHNoaXBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBsYWNlZFwiKTtcclxuICAgIHBsYWNlZENlbGwuYXBwZW5kKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApKTtcclxuXHJcbiAgICBsZXQgdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgIGxldCBjZWxscztcclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgbGV0IGNvbCA9IHBsYWNlZENlbGwuZGF0YXNldC5jb2w7XHJcbiAgICAgIGNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLWNvbD1cIiR7Y29sfVwiXWApKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGdldCB0aGUgcm93LCBpbmRleCwgYW5kIHBsYWNlIHRoZXJlYWZ0ZXIgb2YgdGhlIHBsYWNlZCBjZWxsLlxyXG4gICAgICBsZXQgcm93ID0gcGxhY2VkQ2VsbC5kYXRhc2V0LnJvdztcclxuICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbmRleCA9IGNlbGxzLmluZGV4T2YocGxhY2VkQ2VsbCk7XHJcblxyXG4gICAgLy8gY29sb3IgdGhlIHN1YnNlcXVlbnQgY2VsbHMuXHJcbiAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIpO1xyXG4gICAgICBjZWxsc1tpXS5kYXRhc2V0LnNoaXAgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbGxvdyB0aGUgc2hpcCB0byBiZSByb3RhdGVkLlxyXG4gICAgdGhpcy4jYWxsb3dQbGFjZWRTaGlwUm90YXRpb24oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRhaW5zIGEgY29sbGVjdGlvbiBvZiBjYWxsYmFja3MgdG8gZW5hYmxlIGRyYWcgJ24nIGRyb3Agb24gdGhlIGdhbWVib2FyZCB3aXRoIHJvdGF0aW9uLlxyXG4gICAqIFdvcmtzIHdpdGggdGhlIGRyYWcgYW5kIGRyb3AgQVBJLCBzbyBpdCB3b3JrcyB0byBhc3NpZ24gY2FsbGJhY2tzIHRvIHRoZSBcclxuICAgKiBkcmFnZ2FibGUgaXRlbXMsIGFuZCBhbGwgdGhlIGRyb3BwYWJsZSB6b25lIGl0IHBlcnRhaW5zIHRvLiBJbiB0aGlzIGNhc2UsXHJcbiAgICogdGhlIHNoaXBzIGFyZSB0aGUgZHJhZ2dhYmxlcywgYW5kIHRoZSBkcm9wIHpvbmVzIGFyZSBhbGwgdGhlIGNlbGxzIG9mIFxyXG4gICAqIHBsYXllciAxJ3MgZ2FtZWJvYXJkLlxyXG4gICAqL1xyXG4gICNlbmFibGVEcmFnQW5kRHJvcE9uQ2VsbCgpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgLy8gdGhpcy5hZGRTaGlwRHJhZ0hhbmRsZXJzKCk7XHJcblxyXG4gICAgLy8gYWxsIGNlbGxzIHRoYXQgYXJlIHNlbGVjdGFibGUgYXJlIGRyb3BwYWJsZSBhcmVhcy5cclxuICAgIHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVcIikuZm9yRWFjaChjZWxsID0+IHtcclxuXHJcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHNlbGYuI2Rpc3BsYXlEcm9wR3VpZGVzLmJpbmQoc2VsZikpO1xyXG4gICAgICAvLyB3aGVuIHRoZSBkcmFnIGVsZW1lbnQgbGVhdmVzIGRyb3BwYWJsZSB6b25lLCByZW1vdmUgYWxsIHZhbGlkIGRyYWdcclxuICAgICAgLy8gaXQnbGwganVzdCBiZSByZWNyZWF0ZWQgYnkgdmFsaWQtZHJhZy5cclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIHNlbGYuI3JlbW92ZURyYWdHdWlkZSk7XHJcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgc2VsZi4jcGxhY2VTaGlwT25Ecm9wLmJpbmQoc2VsZikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAjc2hpcE9uRHJhZ1N0YXJ0KGUpIHtcclxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmlkKTtcclxuXHJcbiAgICB0aGlzLiNjdXJyZW50RHJhZ2dlZExlbmd0aCA9IGUudGFyZ2V0LmNoaWxkRWxlbWVudENvdW50O1xyXG4gICAgdGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWQgPSBlLnRhcmdldC5pZCA/PyBlLnRhcmdldC5kYXRhc2V0LnNoaXA7XHJcbiAgICAvLyBibGFuayBpbWFnZVxyXG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGltZywgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAjc2hpcE9uRHJhZ0VuZCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuI2N1cnJlbnREcmFnZ2VkU2hpcElkfWApXHJcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBBbGxvd3MgZm9yIHNoaXBzIHRvIGJlIHJvdGF0ZWQ7IHRoaXMgaXMgaW52b2tlZCBlYWNoIHRpbWUgYSBzaGlwIGlzIHBsYWNlZCxcclxuICAgKiB0byBhbGxvdyBzaGlwcywgb24gdGhlIGdhbWVib2FyZCwgdG8gYmUgcm90YXRlZC5cclxuICAgKi9cclxuICAjYWxsb3dQbGFjZWRTaGlwUm90YXRpb24oKSB7XHJcbiAgICBsZXQgZ3JpZFNpemUgPSB0aGlzLmdhbWVNYW5hZ2VyLnBsYXllcnNbMF0uZ2FtZWJvYXJkLmdyaWQubGVuZ3RoO1xyXG4gICAgLy8gYWxsb3cgcm90YXRpb24gb2YgcGxhY2VkIHNoaXBzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAuZHJhZ2dhYmxlLnNoaXAtcGxhY2VkXCIpLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIGlmIChzaGlwLm9uY2xpY2sgPT09IG51bGwpIHtcclxuICAgICAgICBzaGlwLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgdmVydGljYWxPbiA9IHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIik7XHJcbiAgICAgICAgICBsZXQgY2VsbCA9IHNoaXAucGFyZW50Tm9kZTtcclxuICAgICAgICAgIGxldCBzaGlwTGVuZ3RoID0gc2hpcC5jaGlsZEVsZW1lbnRDb3VudDtcclxuXHJcbiAgICAgICAgICBsZXQgcm93SW5kZXggPSBwYXJzZUludChjZWxsLmRhdGFzZXQucm93KTtcclxuICAgICAgICAgIGxldCBjb2xJbmRleCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2wpO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgcm93SW5kZXgsIHNoaXBMZW5ndGgsIGdyaWRTaXplIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChyb3dJbmRleCArIHNoaXBMZW5ndGggPiBncmlkU2l6ZSB8fCBjb2xJbmRleCArIHNoaXBMZW5ndGggPiBncmlkU2l6ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gY2hlY2sgaWYgYW55IHNoaXBzIGFyZSBpbiB0aGUgd2F5IG9mIHRoZSByb3RhdGlvbi5cclxuICAgICAgICAgIGZvciAobGV0IGkgPSByb3dJbmRleCArIDE7IGkgPCByb3dJbmRleCArIHNoaXBMZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudFxyXG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLXJvdz1cIiR7aX1cIl1gKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gY29sSW5kZXg7IGogPCBjb2xJbmRleCArIHNoaXBMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgIGlmIChjZWxsc1tqXS5jbGFzc0xpc3QuY29udGFpbnMoXCJvY2N1cGllZFwiKSAmJiBjZWxsc1tqXS5kYXRhc2V0LnNoaXAgIT09IHNoaXAuaWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBwcm9jZWVkLlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSdzIGVub3VnaCBzcGFjZSB0byBtb3ZlIGl0IHZlcnRpY2FsbHksIGJhc2VkIG9uIHRoZSBzaGlwIGxlbmd0aC5cclxuICAgICAgICAgIC8vIDEgbm8gc2hpcHMgaW4gdGhlIHdheVxyXG4gICAgICAgICAgLy8gMi53aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgZ2FtZWJvYXJkLlxyXG4gICAgICAgICAgLy8gb25seSB0aGVuIGRvIHlvdSBhbGxvdyB2ZXJ0aWNhbCBjbGFzcy5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNlbGwpO1xyXG5cclxuICAgICAgICAgIGlmICh2ZXJ0aWNhbE9uKSB7XHJcbiAgICAgICAgICAgIC8vIHZlcnRpY2FsIC0+IGhvcml6b250YWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHJvd0luZGV4ICsgMTsgaSA8IHJvd0luZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtpfVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdYCk7XHJcbiAgICAgICAgICAgICAgLy8gc3RyaXAgdmVydGljYWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb2xJbmRleCArIDE7IGkgPCBjb2xJbmRleCArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIC8vIGFkZCBob3Jpem9udGFsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtyb3dJbmRleH1cIl1bZGF0YS1jb2w9XCIke2l9XCJdYCk7XHJcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBzaGlwLmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBob3Jpem9udGFsIC0+IHZlcnRpY2FsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb2xJbmRleCArIDE7IGkgPCBjb2xJbmRleCArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIC8vIHJlbW92ZSBob3Jpem9udGFsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtyb3dJbmRleH1cIl1bZGF0YS1jb2w9XCIke2l9XCJdYClcclxuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSByb3dJbmRleCArIDE7IGkgPCByb3dJbmRleCArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIC8vIGFkZCB2ZXJ0aWNhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7aX1cIl1bZGF0YS1jb2w9XCIke2NvbEluZGV4fVwiXWApXHJcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBzaGlwLmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gdG9nZ2xlIHZlcnRpY2FsIGZvciB0aGUgdmlld1xyXG4gICAgICAgICAgc2hpcC5jbGFzc0xpc3QudG9nZ2xlKFwidmVydGljYWxcIik7XHJcbiAgICAgICAgICAvLyB0aGVuLCBhbHRlciB0aGUgb2NjdXBpZWQgY2xhc3MuXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gZGlzYWJsZSByb3RhdGlvbiBmb3Igc2hpcHMgdGhhdCBhcmUgbm90IHBsYWNlZC5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC5kcmFnZ2FibGU6bm90KC5zaGlwLXBsYWNlZClcIikuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgaWYgKHNoaXAub25jbGljayAhPT0gbnVsbCkge1xyXG4gICAgICAgIHNoaXAub25jbGljayA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBsYWNlcyBzaGlwcyBvbiB0aGUgZ2FtZWJvYXJkIGdpdmVuIGNvb3JkaW5hdGVzLiBVc2VmdWwgZm9yIEFJLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBwbGF5ZXIyIC0gUGxhY2Ugc2hpcHMgb24gcGxheWVyIDIncyBnYW1lYm9hcmQ/XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gdGhlIElEIHRoZSBzaGlwIHNob3VsZCBiZSBpZGVudGlmaWVkIGJ5LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBwbGFjZVNoaXBWaWFDb29yZGluYXRlKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsLCBwbGF5ZXIyID0gdHJ1ZSwgaWQpIHtcclxuICAgIGNvbnNvbGUubG9nKHtsZW5ndGgsIHJvdywgY29sLCB2ZXJ0aWNhbCwgcGxheWVyMiwgaWR9KTtcclxuICAgIGxldCBzZWxlY3RvcjtcclxuICAgIGxldCBnYW1lYm9hcmQ7IFxyXG4gICAgbGV0IGNwdVRhZyA9IFwiY3B1LXNoaXAtcGxhY2VkXCI7XHJcblxyXG4gICAgaWYgKHBsYXllcjIpIHtcclxuICAgICAgc2VsZWN0b3IgPSBcIi5wMi5nYW1lYm9hcmRcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZWN0b3IgPSBcIi5wMS5nYW1lYm9hcmRcIlxyXG4gICAgfVxyXG5cclxuICAgIGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7c2VsZWN0b3J9YCk7XHJcblxyXG4gICAgbGV0IG9yaWdpbkNlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgLnNlbGVjdGFibGVbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbH0nXWApO1xyXG4gICAgb3JpZ2luQ2VsbC5kYXRhc2V0LnNoaXAgPSBpZDtcclxuXHJcblxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGxldCByb3dzID0gQXJyYXkuZnJvbShnYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChgLnNlbGVjdGFibGVbZGF0YS1jb2w9XCIke2NvbH1cIl1gKSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcm93ICsgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiLCBjcHVUYWcpO1xyXG4gICAgICAgIHJvd3NbaV0uZGF0YXNldC5zaGlwID0gaWQ7XHJcblxyXG4gICAgICAgIHN3aXRjaChpKSB7XHJcbiAgICAgICAgICBjYXNlIHJvdzogLy8gc3RhcnRcclxuICAgICAgICAgICAgcm93c1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdGFydC12ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIHJvdyArIGxlbmd0aCAtIDE6IC8vIGVuZFxyXG4gICAgICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVuZC12ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiAvLyBtaWRcclxuICAgICAgICAgICAgcm93c1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1taWRkbGUtdmVydGljYWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGNvbHMgPSBBcnJheS5mcm9tKGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKGAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93fVwiXWApKTtcclxuICAgICAgXHJcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCBjb2wgKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbHNbaV0uY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIsIGNwdVRhZyk7XHJcbiAgICAgICAgY29sc1tpXS5kYXRhc2V0LnNoaXAgPSBpZDtcclxuXHJcbiAgICAgICAgc3dpdGNoKGkpIHtcclxuICAgICAgICAgIGNhc2UgY29sOiAvLyBzdGFydFxyXG4gICAgICAgICAgICBjb2xzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0YXJ0LWhvcml6b250YWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBjb2wgKyBsZW5ndGggLSAxOiAvLyBlbmRcclxuICAgICAgICAgICAgY29sc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1lbmQtaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiAvLyBtaWRcclxuICAgICAgICAgICAgY29sc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1taWRkbGUtaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc2tzIHVzZXIgZm9yIHRoZWlyIG5hbWUgYW5kIHRvIHN0YXJ0IHRoZSBnYW1lLi4uIG9ubHkgd2hlbiB0aGUgc2hpcCBwbGFjZW1lbnQgY29udGFpbmVyIGlzIGVtcHR5XHJcbiAgICogd2lsbCB0aGUgc3RhcnQgZ2FtZSBidXR0b24gdW5sb2NrLlxyXG4gICAqL1xyXG4gICNzdGFydEdhbWVQcm9tcHQoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGNvbnN0IHN0YXJ0R2FtZUZvcm0gPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFwic3RhcnQtZ2FtZS1wcm9tcHRcIik7XHJcbiAgICBjb25zdCBbcGxheWVyTmFtZUxhYmVsLCBwbGF5ZXJOYW1lRmllbGRdID0gY29tcG9uZW50LmZvcm1JbnB1dChcIk5hbWU6IFwiLCBcImlucHV0XCIsIFwicDEtbmFtZVwiLCBcInAxLW5hbWVcIik7XHJcbiAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBjb21wb25lbnQuYnV0dG9uKFwiU3RhcnQgR2FtZSFcIiwgXCJzdGFydC1nYW1lLWJ1dHRvblwiKTtcclxuXHJcbiAgICBwbGF5ZXJOYW1lRmllbGQudmFsdWUgPSBcIkNvbW1hbmRlciBCbHVlXCI7XHJcbiAgICBwbGF5ZXJOYW1lRmllbGQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgcGxheWVyTmFtZUZpZWxkLnBsYWNlaG9sZGVyID0gXCJFbnRlciB5b3VyIG5hbWUgaGVyZVwiO1xyXG5cclxuICAgIHN0YXJ0R2FtZUZvcm0uYXBwZW5kKHBsYXllck5hbWVMYWJlbCwgcGxheWVyTmFtZUZpZWxkLCBzdGFydEdhbWVCdXR0b24pO1xyXG5cclxuICAgIHN0YXJ0R2FtZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgc3RhcnRHYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2VsZi5nYW1lTWFuYWdlci5zdGFydEdhbWUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IERPTU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy4jY2hlY2tBbGxTaGlwc1BsYWNlZCk7XHJcbiAgICBET01PYnNlcnZlci5vYnNlcnZlKHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5zaGlwLXNlbGVjdGlvblwiKSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG5cclxuICAgIHJldHVybiBzdGFydEdhbWVGb3JtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFsbCBzaGlwcyBiZWVuIHBsYWNlZD8gSWYgc28sIHVubG9ja3MgdGhlIGdhbWUgYnV0dG9uLiBVc2VkIHdpdGhcclxuICAgKiBNdXRhdGlvbk9ic2VydmVyLlxyXG4gICAqL1xyXG4gICNjaGVja0FsbFNoaXBzUGxhY2VkKG11dGF0ZWQpIHtcclxuICAgIGxldCBzaGlwc1JlbWFpbmluZyA9IG11dGF0ZWRbMF0udGFyZ2V0LmNoaWxkRWxlbWVudENvdW50O1xyXG4gICAgaWYgKHNoaXBzUmVtYWluaW5nID4gMCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWUtYnV0dG9uXCIpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZS1idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3dzIGEgc3VtbWFyeS4gVG8gYmUgdXNlZCBhZnRlciB0aGUgZ2FtZSBoYXMgZmluaXNoZWQuXHJcbiAgICovXHJcbiAgI3N1bW1hcnkoLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3Qgc3VtbWFyeSA9IGNvbXBvbmVudC5kaXYoXCJzdW1tYXJ5LXNjcmVlblwiLCAuLi5jbGFzc05hbWVzKTtcclxuICAgIGNvbnN0IHZpY3RvcnlNc2cgPSBjb21wb25lbnQucChcIldpbm5lclwiLCBcInZpY3RvcnktbWVzc2FnZVwiKTtcclxuICAgIGNvbnN0IHdpbm5lciA9IGNvbXBvbmVudC5wKFwiJVwiLCBcIndpbm5lclwiKTtcclxuXHJcbiAgICBjb25zdCBzdGF0c0NvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJzdW1tYXJ5LXN0YXRpc3RpY3NcIik7XHJcbiAgICBjb25zdCBzdGF0c0FjY3VyYWN5ID0gY29tcG9uZW50LnAoXCJBY2N1cmFjeVwiLCBcImFjY3VyYWN5XCIpO1xyXG4gICAgY29uc3QgcDFBY2NDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiYWNjLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHAyQWNjQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImFjYy1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBwMUFjY0xhYmVsID0gY29tcG9uZW50LnAodGhpcy5nYW1lTWFuYWdlci5wbGF5ZXJzWzBdLm5hbWUsIFwibWV0cmljLXBsYXllci1uYW1lXCIpO1xyXG4gICAgY29uc3QgcDJBY2NMYWJlbCA9IGNvbXBvbmVudC5wKHRoaXMuZ2FtZU1hbmFnZXIucGxheWVyc1sxXS5uYW1lLCBcIm1ldHJpYy1wbGF5ZXItbmFtZVwiKTtcclxuICAgIGNvbnN0IHAxQWNjdXJhY3kgPSBjb21wb25lbnQuc3BhbihcIi0tJVwiLCBcInAxXCIsIFwiYWNjdXJhY3ktbWV0cmljXCIpO1xyXG4gICAgY29uc3QgcDJBY2N1cmFjeSA9IGNvbXBvbmVudC5zcGFuKFwiLS0lXCIsIFwicDJcIiwgXCJhY2N1cmFjeS1tZXRyaWNcIik7XHJcblxyXG4gICAgY29uc3QgcGxheUFnYWluID0gY29tcG9uZW50LmJ1dHRvbihcIlBsYXkgQWdhaW5cIiwgXCJwbGF5LWFnYWluXCIpO1xyXG5cclxuICAgIHZpY3RvcnlNc2cuYXBwZW5kKHdpbm5lcik7XHJcblxyXG4gICAgcDFBY2NDb250YWluZXIuYXBwZW5kKHAxQWNjTGFiZWwsIHAxQWNjdXJhY3kpO1xyXG4gICAgcDJBY2NDb250YWluZXIuYXBwZW5kKHAyQWNjTGFiZWwsIHAyQWNjdXJhY3kpO1xyXG5cclxuICAgIHN0YXRzQ29udGFpbmVyLmFwcGVuZChzdGF0c0FjY3VyYWN5LCBwMUFjY0NvbnRhaW5lciwgcDJBY2NDb250YWluZXIpO1xyXG5cclxuICAgIHN1bW1hcnkuYXBwZW5kKHZpY3RvcnlNc2csIHdpbm5lciwgc3RhdHNDb250YWluZXIsIHBsYXlBZ2Fpbik7XHJcbiAgICAgIFxyXG4gICAgcmV0dXJuIHN1bW1hcnk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbnVtZXJhdGUgc2hpcCByb3N0ZXIgZm9yIGVhY2ggdXNlcidzIGdhbWVib2FyZC4gVGhlc2Ugc2hpcHMgd2lsbCBiZSBcclxuICAgKiBzaG93biBhcyByZWQgd2hlbiBkZXN0cm95ZWQuXHJcbiAgICovXHJcbiAgZW51bWVyYXRlUGxheWVyU2hpcFJvc3RlcigpIHtcclxuICAgIGxldCBwMUdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEuZ2FtZWJvYXJkXCIpO1xyXG5cclxuICAgIHAxR2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC1wbGFjZWRcIikuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgbGV0IHJvc3RlciA9IHAxR2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1yb3N0ZXJcIik7XHJcbiAgICAgIGxldCBzaGlwTmFtZSA9IGNvbXBvbmVudC5wKHNoaXAuZGF0YXNldC5uYW1lLCBcInNoaXAtbmFtZVwiKTtcclxuICAgICAgc2hpcE5hbWUuZGF0YXNldC5zaGlwID0gc2hpcC5wYXJlbnROb2RlLmRhdGFzZXQuc2hpcDtcclxuXHJcbiAgICAgIHJvc3Rlci5hcHBlbmQoc2hpcE5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBjbGFzcy4gQ29udGFpbnMgdmFyaW91cyBET00gZWxlbWVudHMuXHJcbiAqIEF1dGhvcjogZGF0cmlub25cclxuICogVmVyc2lvbjogMS40IChXZWF0aGVyKVxyXG4gKi9cclxuXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA2MDBweClcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBhIGJhc2ljIEhUTUwgc2tlbGV0b24gZm9yIHRoZSB3ZWIgcGFnZSwgZ2VuZXJhdGluZyBhIGhlYWRlcixcclxuICAgKiBtYWluLCBhbmQgc3RpY2t5IGZvb3Rlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gaGVhZGVyVGl0bGUgLSBXaGF0IHRoZSB3ZWIgcGFnZSBpcyBjYWxsZWQuXHJcbiAgICogQHBhcmFtIHtib29sfSBlbXB0eUhlYWRlciAtIFNob3VsZCB0aGUgaGVhZGVyIHVzZSBhIGRlZmF1bHQgc3RydWN0dXJlP1xyXG4gICAqIFRoZSBkZWZhdWx0IHN0cnVjdHVyZSBsb29rcyBsaWtlIFsgTG9nbyB8IHwgfCB8IE5hdmlnYXRpb24gTGlua3NdXHJcbiAgICogQHJldHVybnMgLSBBbiBhcnJheSBjb250YWluaW5nIHJlZmVyZW5jZXMgdG8gdGhlIGdlbmVyYXRlZCBoZWFkZXIsIG1haW4sIGFuZCBmb290ZXIuXHJcbiAgICovXHJcbiAgaW5pdGlhbGl6ZVN0cnVjdHVyZShcclxuICAgIGhlYWRlclRpdGxlLFxyXG4gICAgZW1wdHlIZWFkZXIgPSBmYWxzZSxcclxuICAgIGNyZWF0ZU1vbnRoLFxyXG4gICAgZ2l0aHViTGlua1xyXG4gICkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IHRoaXMuZGl2KFwiY29udGVudFwiKTtcclxuICAgIGxldCBoZWFkZXI7XHJcbiAgICBpZiAoZW1wdHlIZWFkZXIpIHtcclxuICAgICAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlciA9IHRoaXMuaGVhZGVyKGhlYWRlclRpdGxlKTtcclxuICAgIH1cclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gdGhpcy5mb290ZXIoY3JlYXRlTW9udGgsIGdpdGh1YkxpbmspO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgICBtYWluV3JhcHBlci5hcHBlbmQoaGVhZGVyLCBtYWluKTtcclxuICAgIGJvZHkuYXBwZW5kKG1haW5XcmFwcGVyLCBmb290ZXIpO1xyXG5cclxuICAgIHJldHVybiBbaGVhZGVyLCBtYWluLCBmb290ZXJdO1xyXG4gIH1cclxuXHJcbiAgY29udGVudCgpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIodGl0bGUpIHtcclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgbGV0IHRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gICAgbWVudUJ1dHRvbi5pZCA9IFwibWVudS1idXR0b25cIjtcclxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWJhcnNcIiwgXCJuby1kaXNwbGF5XCIpO1xyXG5cclxuICAgIHRoaXMubXFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUubWF0Y2hlcykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gaXQgYmlnZ2VyIHRoYW4gdGhlIHF1ZXJ5IHJ1bGUuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW4tb3V0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtZW51IHByZXNzZWQuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzbGlkZS1pbi1vdXRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuICAgIC8vIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2ltZ30pYDtcclxuXHJcbiAgICB0aXRsZUVsZW0uaWQgPSBcInBhZ2UtdGl0bGVcIjtcclxuICAgIHRpdGxlRWxlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIHRpdGxlRWxlbS5pbnNlcnRCZWZvcmUobWVudUJ1dHRvbiwgdGl0bGVFbGVtLmZpcnN0Q2hpbGQpO1xyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZUVsZW0pO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG5cclxuICBuYXZiYXIoLi4ubGlua3MpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICAgIG5hdi5pZCA9IFwibmF2YmFyXCI7XHJcbiAgICBsaW5rQ29udGFpbmVyLmlkID0gXCJuYXZiYXItYnV0dG9ucy1jb250YWluZXJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgIGNvbnN0IGxpbmtCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGNvbnN0IGxpbmtBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgICAgIGxpbmtCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdmJhci1idXR0b25cIik7XHJcblxyXG4gICAgICBsaW5rQW5jaG9yLmlkID0gYG5hdmxpbmstJHtsaW5rLnJlcGxhY2UoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgIGxpbmtBbmNob3IudGV4dENvbnRlbnQgPSBsaW5rO1xyXG4gICAgICBsaW5rQW5jaG9yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG5cclxuICAgICAgbGlua0J1dHRvbi5hcHBlbmQobGlua0FuY2hvcik7XHJcbiAgICAgIGxpbmtDb250YWluZXIuYXBwZW5kKGxpbmtCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdi5hcHBlbmQobGlua0NvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIG5hdjtcclxuICB9XHJcblxyXG4gIGJhbm5lcih0ZXh0LCBpbWcpIHtcclxuICAgIGxldCBiYW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG5cclxuICAgIGJhbm5lckNvbnRhaW5lci5pZCA9IFwiYmFubmVyXCI7XHJcbiAgICBiYW5uZXIuaWQgPSBcImJhbm5lci1pbWFnZVwiO1xyXG4gICAgY2FwdGlvbi5pZCA9IFwiYmFubmVyLWNhcHRpb25cIjtcclxuXHJcbiAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZ30pYDtcclxuXHJcbiAgICBjYXB0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICBiYW5uZXJDb250YWluZXIuYXBwZW5kKGJhbm5lciwgY2FwdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGJhbm5lckNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZvb3RlcihjcmVhdGVNb250aCwgZ2l0aHViTGluaykge1xyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuXHJcbiAgICBsZXQgdGV4dCA9IGBDcmVhdGVkIGluICR7Y3JlYXRlTW9udGh9IDIwMjEuIE9kaW4gUHJvamVjdCB4IERhbiBULmA7XHJcbiAgICBsZXQgZ2l0aHViRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGV0IGdoSWNvbiA9IHRoaXMuZmFJY29uKFwiZmFiXCIsIFwiZmEtZ2l0aHViLXNxdWFyZVwiLCBcImljb25cIik7XHJcblxyXG4gICAgZ2l0aHViRWxlbS5hcHBlbmQoZ2hJY29uKTtcclxuICAgIGdpdGh1YkVsZW0uY2xhc3NMaXN0LmFkZChcImZvb3Rlci1naXRodWItaWNvblwiKTtcclxuICAgIGdpdGh1YkVsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBnaXRodWJMaW5rKTtcclxuICAgIGdpdGh1YkVsZW0uc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgZ2l0aHViRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcC5hcHBlbmQoZ2l0aHViRWxlbSk7XHJcbiAgICBmb290ZXIuYXBwZW5kKHApO1xyXG5cclxuICAgIHJldHVybiBmb290ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIGxhcmdlciwgZW1ib2xkZW5lZCwgdGV4dCxcclxuICAgKiBzaW1pbGFyIHRvIGEgcHVsbCBxdW90ZSBpbiBhIG1hZ2F6aW5lLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1zZyB7c3RyaW5nfSBUZXh0IHRvIGluY2x1ZGUgaW4gdGhlIGJsb2NrIHF1b3RlXHJcbiAgICovXHJcbiAgcHVsbHF1b3RlKG1zZykge1xyXG4gICAgbGV0IHB1bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XHJcbiAgICBwdWxsLnRleHRDb250ZW50ID0gbXNnO1xyXG5cclxuICAgIHB1bGwuY2xhc3NMaXN0LmFkZChcInB1bGwtcXVvdGVcIik7XHJcblxyXG4gICAgcmV0dXJuIHB1bGw7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uKGlkKSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0ZXh0IGhlYWRpbmcgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gdGV4dCAtIFRoZSBsYWJlbCBmb3IgdGhlIGhlYWRlci5cclxuICAgKiBAcGFyYW0geyp9IGxldmVsIC0gVGhlIGxldmVsIG9mIGhlYWRlci5cclxuICAgKi9cclxuICBoZWFkaW5nKHRleHQsIGxldmVsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGlmIChsZXZlbCA8IDEgfHwgbGV2ZWwgPiA2KSB7XHJcbiAgICAgIHRocm93IEVycm9yKFwiSGVhZGluZyBsZXZlbHMgY2FuIG9ubHkgYmUgYmV0d2VlbiAxIHRvIDYhXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke2xldmVsfWApO1xyXG5cclxuICAgIGlmIChjbGFzc05hbWUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG5cclxuICBwKHRleHQsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGlmIChjbGFzc05hbWUubGVuZ3RoICE9IDApIHtcclxuICAgICAgcC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIHA7XHJcbiAgfVxyXG5cclxuICBhKHRleHQsIGxpbmssIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGlmIChjbGFzc05hbWUubGVuZ3RoICE9IDApIHtcclxuICAgICAgYS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBhLmhyZWYgPSBsaW5rO1xyXG4gICAgYS50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG5cclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxuXHJcbiAgaW1nKHVybCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICBpbWFnZS5zcmMgPSB1cmw7XHJcblxyXG4gICAgcmV0dXJuIGltYWdlO1xyXG4gIH1cclxuXHJcbiAgZGl2KC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWYgKGNsYXNzTmFtZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXY7XHJcbiAgfVxyXG5cclxuICBidXR0b24obGFiZWwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGJhc2ljIHRhYmxlIHdpdGggc2luZ2xlLWNlbGwgY29sdW1ucyBhbmQgcm93cywgYmFzZWQgb24gdGhlIGltcG9ydGVkIGZpbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Nzdn0gZGF0YSAtIERhdGEgdG8gdHVybiBpbnRvIGEgdGFibGUuIFBsZWFzZSB1c2Ugd2VicGFjayB0byBpbXBvcnQgLmNzdiBmaWxlcy5cclxuICAgKi9cclxuICB0YWJsZShpZCA9IFwiXCIsIGRhdGEpIHtcclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIHRhYmxlLmlkID0gaWQ7XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgYSB0YWJsZSBoZWFkZXIgcm93LlxyXG4gICAgbGV0IHRhYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgbGV0IHRhYmxlSGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGNvbCBvZiBPYmplY3Qua2V5cyhkYXRhWzBdKSkge1xyXG4gICAgICBsZXQgY29sQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgY29sQ2VsbC50ZXh0Q29udGVudCA9IGNvbDtcclxuXHJcbiAgICAgIHRhYmxlSGVhZGVyUm93LmFwcGVuZChjb2xDZWxsKTtcclxuICAgIH1cclxuICAgIHRhYmxlSGVhZGVyLmFwcGVuZCh0YWJsZUhlYWRlclJvdyk7XHJcblxyXG4gICAgdGFibGUuYXBwZW5kKHRhYmxlSGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAvLyBHZW5lcmF0ZSB0YWJsZSByb3dzLlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0cm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICBmb3IgKGxldCBwcm9wIGluIGRhdGFbaV0pIHtcclxuICAgICAgICBsZXQgdGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblxyXG4gICAgICAgIHRjZWxsLnRleHRDb250ZW50ID0gZGF0YVtpXVtwcm9wXTtcclxuICAgICAgICB0cm93LmFwcGVuZCh0Y2VsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYmxlQm9keS5hcHBlbmQodHJvdyk7XHJcbiAgICB9XHJcbiAgICB0YWJsZS5hcHBlbmQodGFibGVCb2R5KTtcclxuXHJcbiAgICByZXR1cm4gdGFibGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBmb250IGF3ZXNvbWUgaWNvbi5cclxuICAgKi9cclxuICBmYUljb24oY2F0ZWdvcnksIG5hbWUsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGZhc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGZhc0ljb24uY2xhc3NMaXN0LmFkZChjYXRlZ29yeSwgbmFtZSk7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIGZhc0ljb24uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYXNJY29uO1xyXG4gIH1cclxuXHJcbiAgc3Bhbih0ZXh0Q29udGVudCA9IG51bGwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGlmIChjbGFzc05hbWUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG5cclxuICAgIHJldHVybiBzcGFuO1xyXG4gIH1cclxuXHJcbiAgZm9ybUlucHV0KGxhYmVsVGV4dCwgdHlwZSwgaW5wdXRJZCwgbmFtZSkge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQuaWQgPSBpbnB1dElkO1xyXG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XHJcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCBpbnB1dF07XHJcbiAgfVxyXG5cclxuICBkcm9wZG93bihsYWJlbFRleHQsIG5hbWUsIGlucHV0SWQsIC4uLnZhbHVlcykge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dElkKTtcclxuXHJcbiAgICBmb3IgKGxldCB2YWwgb2YgdmFsdWVzKSB7XHJcbiAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIGVudHJ5LnZhbHVlID0gdmFsO1xyXG4gICAgICBpZiAoaXNOYU4odmFsKSAmJiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSB2YWxbMF0udG9VcHBlckNhc2UoKSArIHZhbC5zbGljZSgxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IHZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZWN0LmFwcGVuZChlbnRyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgc2VsZWN0XTtcclxuICB9XHJcblxyXG4gIHRleHRBcmVhKGxhYmVsVGV4dCwgbmFtZSwgaW5wdXRJZCkge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgdGEuaWQgPSBpbnB1dElkO1xyXG4gICAgdGEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCB0YV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBjb25maXJtIG1vZGFsLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSBjbGFzc05hbWUgLSBDbGFzc2VzIHRoZSBtb2RhbCBzaG91bGQgYmVsb25nIHRvLlxyXG4gICAqIEBwYXJhbSB7Kn0gdGl0bGUgLSBUaGUgdGl0bGUgYXBwZWFyaW5nIG9uIHRoZSBtb2RhbC5cclxuICAgKiBAcGFyYW0geyp9IG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSBhcHBlYXJpbmcgb24gdGhlIG1vZGFsLlxyXG4gICAqIEBwYXJhbSB7Kn0gcG9zaXRpdmVCdXR0b25MYWJlbCAtIFRleHQgZm9yIHRoZSBPSyBidXR0b24uXHJcbiAgICogQHBhcmFtIHsqfSBuZWdhdGl2ZUJ1dHRvbkxhYmVsIC0gVGV4dCBmb3IgdGhlIGNhbmNlbCBidXR0b24uXHJcbiAgICogQHBhcmFtIHsqfSBwb3NpdGl2ZUNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gcnVuIGlmIE9LIGlzIHByZXNzZWQuXHJcbiAgICogQHBhcmFtIHsqfSBuZWdhdGl2ZUNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gcnVuIGlmIGNhbmNlbCBpcyBwcmVzc2VkLiAnbnVsbCcgYnlcclxuICAgKiBkZWZhdWx0LCB3aGljaCB0aGVuIGp1c3QgY2xvc2VzIHRoZSBtb2RhbC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIC0gUmV0dXJucyB0aGUgZ2VuZXJhdGVkIG1vZGFsIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgY29uZmlybU1vZGFsKFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGUsXHJcbiAgICBtZXNzYWdlLFxyXG4gICAgcG9zaXRpdmVCdXR0b25MYWJlbCxcclxuICAgIG5lZ2F0aXZlQnV0dG9uTGFiZWwsXHJcbiAgICBwb3NpdGl2ZUNhbGxiYWNrLFxyXG4gICAgbmVnYXRpdmVDYWxsYmFjayA9IG51bGxcclxuICApIHtcclxuICAgIGxldCBtb2RhbFdyYXBwZXIgPSB0aGlzLmRpdigpO1xyXG4gICAgbW9kYWxXcmFwcGVyLmlkID0gXCJwcm9tcHQtd3JhcHBlclwiO1xyXG4gICAgbGV0IG1vZGFsID0gdGhpcy5kaXYoY2xhc3NOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUhlYWRlciA9IHRoaXMuaGVhZGluZyh0aXRsZSwgMSwgXCJtb2RhbC1oZWFkZXJcIik7XHJcbiAgICBjb25zdCBtZXNzYWdlUGFyYWdyYXBoID0gdGhpcy5wYXJhZ3JhcGgobWVzc2FnZSwgXCJtb2RhbC1kaWFsb2dcIik7XHJcbiAgICBjb25zdCBwb3NpdGl2ZUJ1dHRvbiA9IHRoaXMuYnV0dG9uKHBvc2l0aXZlQnV0dG9uTGFiZWwsIFwibW9kYWwtY29uZmlybVwiKTtcclxuICAgIGNvbnN0IG5lZ2F0aXZlQnV0dG9uID0gdGhpcy5idXR0b24obmVnYXRpdmVCdXR0b25MYWJlbCwgXCJtb2RhbC1jYW5jZWxcIik7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uU2VjdGlvbiA9IHRoaXMuZGl2KFwibW9kYWwtYnV0dG9uLWFyZWFcIik7XHJcblxyXG4gICAgaWYgKG5lZ2F0aXZlQ2FsbGJhY2sgPT09IG51bGwpIHtcclxuICAgICAgbmVnYXRpdmVDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5lZ2F0aXZlIHByZXNzZWQuXCIpO1xyXG4gICAgICAgIG1vZGFsV3JhcHBlci5yZW1vdmUoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwb3NpdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9zaXRpdmVDYWxsYmFjayk7XHJcbiAgICBwb3NpdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgcG9zaXRpdmVDYWxsYmFjayhlKTtcclxuICAgICAgbW9kYWxXcmFwcGVyLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBuZWdhdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmVnYXRpdmVDYWxsYmFjayk7XHJcblxyXG4gICAgYnV0dG9uU2VjdGlvbi5hcHBlbmQocG9zaXRpdmVCdXR0b24sIG5lZ2F0aXZlQnV0dG9uKTtcclxuICAgIG1vZGFsLmFwcGVuZCh0aXRsZUhlYWRlciwgbWVzc2FnZVBhcmFncmFwaCwgYnV0dG9uU2VjdGlvbik7XHJcbiAgICBtb2RhbFdyYXBwZXIuYXBwZW5kKG1vZGFsKTtcclxuXHJcbiAgICAvLyBzdHlsaW5nIG1vdmVkIHRvIC5jc3MgcGFnZS5cclxuXHJcbiAgICByZXR1cm4gbW9kYWxXcmFwcGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheSBhIGJyaWVmLCB1bm9idHJ1c2l2ZSBwb3AtdXAgbWVzc2FnZSBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4uXHJcbiAgICogQHBhcmFtIHsqfSB0ZXh0Q29udGVudCAtIFRoZSB0ZXh0IHRoZSBtZXNzYWdlIHNob3VsZCBkaXNwbGF5LlxyXG4gICAqIEBwYXJhbSB7Kn0gZHVyYXRpb24gLSBUaGUgZHVyYXRpb24gb2YgdGhlIG1lc3NhZ2UgaW4gc2Vjb25kcy5cclxuICAgKi9cclxuICB0b2FzdCh0ZXh0Q29udGVudCwgZHVyYXRpb24pIHtcclxuICAgIGxldCB0b2FzdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgdG9hc3RNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcclxuICAgIHRvYXN0Qm94LmNsYXNzTGlzdC5hZGQoXCJ0b2FzdFwiKTtcclxuICAgIHRvYXN0TWVzc2FnZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgdG9hc3RNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJ0b2FzdC1tZXNzYWdlXCIpO1xyXG5cclxuICAgIHRvYXN0Qm94LmFwcGVuZCh0b2FzdE1lc3NhZ2UpO1xyXG5cclxuICAgIGxldCB0b2FzdEJveENzcyA9IFwicG9zaXRpb246IGZpeGVkOyBib3R0b206IDEwdmg7XCI7XHJcbiAgICB0b2FzdEJveENzcyArPSBcIndpZHRoOiAxMDB2dztcIjtcclxuICAgIHRvYXN0Qm94Q3NzICs9IGBhbmltYXRpb246IGZhZGUtaW4tb3V0ICR7ZHVyYXRpb259cztgO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gXCJ6LWluZGV4OiA5OTk5O1wiO1xyXG5cclxuICAgIGxldCB0b2FzdE1lc3NhZ2VDc3MgPVxyXG4gICAgICBcIm1hcmdpbjogMCBhdXRvOyB3aWR0aDogMzAwcHg7IGRpc3BsYXk6IGJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1wiO1xyXG4gICAgdG9hc3RNZXNzYWdlQ3NzICs9XHJcbiAgICAgIFwidGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgYm9yZGVyLXJhZGl1czogNXB4O1wiO1xyXG4gICAgdG9hc3RNZXNzYWdlQ3NzICs9IFwiY29sb3I6IHdoaXRlO1wiO1xyXG5cclxuICAgIHRvYXN0Qm94LnN0eWxlLmNzc1RleHQgPSB0b2FzdEJveENzcztcclxuICAgIHRvYXN0TWVzc2FnZS5zdHlsZS5jc3NUZXh0ID0gdG9hc3RNZXNzYWdlQ3NzO1xyXG5cclxuICAgIHRvYXN0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xyXG4gICAgICB0b2FzdEJveC5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRvYXN0Qm94KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHNlYXJjaCBmaWVsZCB3aXRoIGEgc2VhcmNoIGJ1dHRvbi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxhY2Vob2xkZXIgLSBBZHZpY2UgdG8gZ2l2ZSBpbiBzZWFyY2ggZmllbGQuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgc2VhcmNoKHBsYWNlaG9sZGVyID0gXCJTZWFyY2hcIikge1xyXG4gICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcInNlYXJjaC1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBzZWFyY2hGaWVsZFdyYXBwZXIgPSB0aGlzLmRpdihcInNlYXJjaC1maWVsZC13cmFwcGVyXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoRmllbGQgPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcInNlYXJjaC1maWVsZFwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEljb24gPSB0aGlzLmZhSWNvbihcImZhc1wiLCBcImZhLXNlYXJjaFwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IHRoaXMuYnV0dG9uKFwiXCIsIFwic2VhcmNoXCIpO1xyXG5cclxuICAgIHNlYXJjaENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XHJcbiAgICBzZWFyY2hGaWVsZFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBzZWFyY2hGaWVsZC50eXBlID0gXCJzZWFyY2hcIjtcclxuICAgIHNlYXJjaEZpZWxkLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKTtcclxuICAgIHNlYXJjaEZpZWxkLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgc2VhcmNoQnV0dG9uLmFwcGVuZChzZWFyY2hJY29uKTtcclxuICAgIHNlYXJjaEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xyXG5cclxuICAgIHNlYXJjaEZpZWxkV3JhcHBlci5hcHBlbmQoc2VhcmNoRmllbGQpO1xyXG4gICAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZChzZWFyY2hGaWVsZFdyYXBwZXIsIHNlYXJjaEJ1dHRvbik7XHJcbiAgICByZXR1cm4gc2VhcmNoQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgc2VhcmNoIGZpZWxkIGZvciBsb2NhdGlvbnMsIHNvIGl0IGluY2x1ZGVzIGEgc2VhcmNoIGZpZWxkIHdpdGggXHJcbiAgICogYSBsb2NhdGlvbiBidXR0b24uXHJcbiAgICovXHJcbiAgZ2Vvc2VhcmNoKHBsYWNlaG9sZGVyPVwiXCIpIHtcclxuICAgIGNvbnN0IHNlYXJjaEVsZW0gPSB0aGlzLnNlYXJjaChwbGFjZWhvbGRlcik7XHJcbiAgICBjb25zdCBsb2NhdGlvbkJ1dHRvbiA9IHRoaXMuYnV0dG9uKFwiXCIsIFwibG9jYXRpb25cIik7XHJcbiAgICBjb25zdCBsb2NhdGlvbkljb24gPSB0aGlzLmZhSWNvbihcImZhc1wiLCBcImZhLW1hcC1tYXJrZXItYWx0XCIpXHJcblxyXG4gICAgbG9jYXRpb25CdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGxvY2F0aW9uQnV0dG9uLmFwcGVuZChsb2NhdGlvbkljb24pO1xyXG4gICAgbG9jYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFV0aWxpdHkuZ2V0R2VvbG9jYXRpb24pO1xyXG4gICAgc2VhcmNoRWxlbS5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKS5iZWZvcmUobG9jYXRpb25CdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBzZWFyY2hFbGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHRvb2x0aXAtZXNxdWUgbWVzc2FnZSB3aGljaCBob3ZlcnMgYmVsb3csIHJlbGF0aXZlIHRvIGFuIGVsZW1lbnQncyBwb3NpdGlvbiwgXHJcbiAgICogZm9yIGEgcHJvdmlkZWQgZHVyYXRpb24uIE9ubHkgYXR0YWNoIHRvIHJlbGF0aXZlbHktcG9zaXRpb25lZCBlbGVtZW50cy5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAoZWxlbSkgLSBQb3NpdGlvbmVkIGVsZW1lbnQgdG8gYXR0YWNoIHRvLiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gKG1zZykgLSBNZXNzYWdlIHRvIGRpc3BsYXkuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IChzKSAtIE51bWJlciBvZiBzZWNvbmRzIHRvIHBlcnNpc3QgbWVzc2FnZS4gMCBmb3IgcGVyc2lzdGVudFxyXG4gICAqIHVudGlsIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgdGhlIHRvb2x0aXAuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNtaXNzT25FeHRlcm5hbENsaWNrIC0gU2hvdWxkIHRoZSB0b29sdGlwIGJlIGRpc21pc3NlZCBieVxyXG4gICAqIGNsaWNraW5nIG91dHNpZGUgb2YgdGhlIGVsZW1lbnQ/IFRydWUgYnkgZGVmYXVsdC5cclxuICAgKi9cclxuICB0b29sdGlwKGVsZW0sIG1zZywgcywgZGlzbWlzc09uRXh0ZXJuYWxDbGljayA9IHRydWUpIHtcclxuICAgIGNvbnN0IHRvb2x0aXBDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwidG9vbHRpcFwiKTtcclxuICAgIGZvciAobGV0IG1zZ1NlZ21lbnQgb2YgbXNnLnNwbGl0KFwiXFxuXCIpKSB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXBNc2cgPSBjb21wb25lbnQucChtc2dTZWdtZW50LnRyaW0oKSwgXCJ0b29sdGlwLW1zZ1wiKTtcclxuICAgICAgdG9vbHRpcENvbnRhaW5lci5hcHBlbmQodG9vbHRpcE1zZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9vbHRpcENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMTAwJTsgd2lkdGg6IGZpdC1jb250ZW50XCI7XHJcbiAgICAvLyB0aGlzIGVuc3VyZXMgdGhhdCB0aGUgbGF0ZXN0IHRvb2x0aXBzIGFsd2F5cyBhcHBlYXIgb24gdGhlIHRvcC5cclxuICAgIHRvb2x0aXBDb250YWluZXIuc3R5bGUuekluZGV4ID0gMTAgKyAxMCAqIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvb2x0aXBcIikubGVuZ3RoKTtcclxuXHJcbiAgICBlbGVtLmFwcGVuZCh0b29sdGlwQ29udGFpbmVyKTtcclxuXHJcblxyXG4gICAgY29uc3QgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkaXNtaXNzT25FeHRlcm5hbENsaWNrKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgIT09IHRvb2x0aXBDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgY2xpY2tlZDsgcmVtb3ZpbmcgdG9vbHRpcFwiKTtcclxuICAgICAgICAgICAgICB0b29sdGlwQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfSlcclxuXHJcbiAgICBwLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAocyAhPT0gMCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi50b29sdGlwXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGltZXIgZXhwaXJlZDsgcmVtb3ZpbmcgdG9vbHRpcFwiKTtcclxuICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBzICogMTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNoIGEgbG9hZGluZyBtZXNzYWdlIHRvIGEgZ2l2ZW4gZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbGVtIC0gRWxlbWVudCB0byBhdHRhY2ggbG9hZGluZyBtZXNzYWdlIHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgLSBNZXNzYWdlIHRvIHBsYXk7IGRlZmF1bHQgaXMgXCJsb2FkaW5nXCIuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgbG9hZGluZ01lc3NhZ2UocGFyZW50RWxlbSwgbXNnPVwiTG9hZGluZ1wiKSB7XHJcbiAgICBjb25zdCBsb2FkaW5nQmFzZSA9IGNvbXBvbmVudC5wKG1zZywgXCJsb2FkaW5nLXRleHRcIik7XHJcbiAgICBjb25zdCBsb2FkaW5nRG90cyA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJsb2FkaW5nLWRvdHNcIik7XHJcblxyXG4gICAgbG9hZGluZ0Jhc2UuYXBwZW5kKGxvYWRpbmdEb3RzKTtcclxuICAgIHBhcmVudEVsZW0uYXBwZW5kKGxvYWRpbmdCYXNlKTtcclxuXHJcbiAgICBjb25zdCBsb2FkaW5nQW5pbWF0aW9uID0ge1xyXG4gICAgICBpZDogMCxcclxuICAgICAgbG9hZGluZ1RleHRCYXNlOiBwYXJlbnRFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy10ZXh0XCIpLFxyXG4gICAgICBsb2FkaW5nVGV4dERvdHM6IHBhcmVudEVsZW0ucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLWRvdHNcIiksXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTZXRzIGFuIGludGVydmFsLCB1c2luZyBpdCB0byBwbGF5IGEgc2ltcGxlIGFuaW1hdGlvbi5cclxuICAgICAgICovXHJcbiAgICAgIHBsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dEJhc2UudGV4dENvbnRlbnQgPSBtc2c7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dEJhc2UuY2xhc3NMaXN0LnJlbW92ZShcIm5vLW9wYWNpdHlcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dERvdHMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMubG9hZGluZ1RleHREb3RzLnRleHRDb250ZW50ICE9PSBcIi4uLlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1RleHREb3RzLnRleHRDb250ZW50ICs9IFwiLlwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nVGV4dERvdHMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDc1MCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHN0b3AoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0QmFzZS5jbGFzc0xpc3QuYWRkKFwibm8tb3BhY2l0eVwiKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0QmFzZS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbG9hZGluZ0FuaW1hdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xyXG5cclxuICBncmlkO1xyXG4gIHNpemU7XHJcbiAgc2hpcHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaXplID0gMTA7XHJcbiAgICB0aGlzLmdyaWQgPSBbXTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZ3JpZFtpXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2l6ZTsgaisrKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkW2ldW2pdID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbmQgcGxhY2VzIGEgZ2l2ZW4gc2hpcCBiYXNlZCBvbiB0aGUgY29vcmRpbmF0ZXNcclxuICAgKiBhc3NpZ25lZCB0byB0aGUgc2hpcC4gXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIHRoZSBnaXZlbiBsZW5ndGggb2YgdGhlIHNoaXAuIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSB0aGUgcm93IHRvIHBsYWNlIHRoZSBzaGlwLiAwLWJhc2VkIGNvb3JkaW5hdGVzLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2wgLSB0aGUgY29sdW1uIHRvIHBsYWNlIHRoZSBzaGlwLiAwLWJhc2VkIGNvb3JkaW5hdGVzLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgLSBQbGFjZSB0aGUgc2hpcCBob3Jpem9udGFsbHk/XHJcbiAgICogQHJldHVybiB7U2hpcH0gLSBUaGUgc2hpcCB0aGF0IHdhcyBwbGFjZWQsIG9yIG51bGwgaWYgdGhlIHNoaXAgZmFpbGVkXHJcbiAgICogdG8gYmUgcGxhY2VkLlxyXG4gICAqL1xyXG4gIHBsYWNlU2hpcChsZW5ndGgsIHJvdywgY29sLCB2ZXJ0aWNhbCkge1xyXG4gICAgaWYgKHJvdyA8IDAgfHwgY29sIDwgMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGxhY2Ugc2hpcCBvbiBuZWdhdGl2ZSBjb29yZGluYXRlcy5cIik7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gbnVsbCBpZiBvdXQgb2YgYm91bmRzXHJcbiAgICBpZiAodmVydGljYWwpIHsgLy8gdmVydGljYWwgb3V0IG9mIGJvdW5kcyBpbnZvbHZlcyByb3cuXHJcbiAgICAgIGlmIChyb3cgKyBsZW5ndGggPiB0aGlzLmdyaWQubGVuZ3RoIHx8IGNvbCA+IHRoaXMuZ3JpZC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGNvbCArIGxlbmd0aCA+IHRoaXMuZ3JpZC5sZW5ndGggfHwgcm93ID4gdGhpcy5ncmlkLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjaGVjayB0byBzZWUgdGhhdCB0aGUgZ2l2ZW4gcm93IGFuZCBjb2wgKyBsZW5ndGggYXJlIG5vdCBhbHJlYWR5IG9jY3VwaWVkLlxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCAocm93ICsgbGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtpXVtjb2xdICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCAoY29sICsgbGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtyb3ddW2ldICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBvdGhlcndpc2Ugd2UncmUgZ29vZCB0byBwbGFjZSBhIHNoaXAuXHJcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5zaGlwcy5sZW5ndGg7XHJcblxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCAocm93ICsgc2hpcC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICB0aGlzLmdyaWRbaV1bY29sXSA9IGlkO1xyXG4gICAgICAgIHNoaXAuc3RhdHVzW2Ake2l9LCR7Y29sfWBdID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCAoY29sICsgc2hpcC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICB0aGlzLmdyaWRbcm93XVtpXSA9IGlkO1xyXG4gICAgICAgIHNoaXAuc3RhdHVzW2Ake3Jvd30sJHtpfWBdID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XHJcblxyXG4gICAgcmV0dXJuIHNoaXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMZXQgdGhlIGdhbWVib2FyZCByZWNlaXZlIGFuIGF0dGFjayBhdCB0aGUgZ2l2ZW4gcm93IGFuZCBjb2x1bW4uIFxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCBcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgaGl0LiAxIGlmIGEgaGl0IHdhcyBzdWNjZXNzZnVsLCAwXHJcbiAgICogaWYgdGhlIGhpdCBtaXNzZWQsIGFuZCAtMSBpZiB0aGUgYXJlYSB3YXMgYWxyZWFkeSBoaXQuIFxyXG4gICAqL1xyXG4gIHJlY2VpdmVBdHRhY2socm93LCBjb2wpIHtcclxuICAgIGNvbnNvbGUubG9nKHtyb3csIGNvbH0pO1xyXG4gICAgaWYgKGlzTmFOKHBhcnNlSW50KHJvdykpIHx8IGNvbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHByb3ZpZGUgcm93IGFuZCBjb2wgY29vcmRpbmF0ZXMgYXMgYSBudW1iZXIuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzaGlwSWQgPSB0aGlzLmdyaWRbcm93XVtjb2xdO1xyXG5cclxuICAgIGlmIChzaGlwSWQgPT09IFwieFwiIHx8IHNoaXBJZCA9PT0gXCJvXCIpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfSBlbHNlIGlmIChzaGlwSWQgPT09IFwiXCIpIHtcclxuICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXSA9IFwib1wiO1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNoaXBJZCk7XHJcbiAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF0gPSBcInhcIjtcclxuICAgICAgdGhpcy5zaGlwc1tzaGlwSWRdLmhpdChyb3csIGNvbCk7XHJcblxyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEdyaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ncmlkO1xyXG4gIH1cclxuXHJcbiAgaXNTaGlwU3VuayhpbmRleCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hpcHNbaW5kZXhdLmlzU3VuaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGF2ZSBhbGwgc2hpcHMgYmVlbiBzdW5rIG9uIHRoZSBnYW1lYm9hcmQ/XHJcbiAgICovXHJcbiAgYWxsU2hpcHNTdW5rKCkge1xyXG4gICAgbGV0IHN0YXR1cyA9IHRydWU7XHJcbiAgICB0aGlzLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xyXG4gICAgICAgIHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3RhdHVzO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBCYXR0bGVzaGlwRWxlbWVudHMgfSBmcm9tIFwiLi9CYXR0bGVzaGlwRWxlbWVudFwiO1xyXG5pbXBvcnQgUGxheWVyLCB7IENQVV9TVEFURSB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgeyBzZXROYW1lIH0gZnJvbSBcIi4vc2hpcFwiO1xyXG5pbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgYSBnYW1lIHNlc3Npb24gZm9yIGJhdHRsZXNoaXAuIEtlZXBzIHRyYWNrIG9mIHBsYXllcnMuXHJcbiAqIENhbiBzdGFydCwgZW5kLCBhbmQgcmVzZXQgdGhlIGdhbWUuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVEUgPSB7XHJcbiAgcDF0dXJuOiBcIlBsYXllciAxJ3MgdHVyblwiLFxyXG4gIHAydHVybjogXCJQbGF5ZXIgMidzIHR1cm5cIixcclxuICBlbmRlZDogXCJHYW1lIE92ZXIuXCIsXHJcbiAgcDF2aWN0b3J5OiBcIlBsYXllciAxIHdpbnMuXCIsXHJcbiAgcDJ2aWN0b3J5OiBcIlBsYXllciAyIHdpbnMuXCIsXHJcbiAgcmVzdGFydDogXCJSZXN0YXJ0aW5nIGdhbWUuLi5cIixcclxuICBwbGF5aW5nOiBcIkdhbWUgc3RhcnQhXCIsXHJcbiAgd2VsY29tZVByb21wdDogXCJXZWxjb21lLCBDb21tYW5kZXIuXCIsXHJcbiAgcmVwbGF5UHJvbXB0OiBcIlBsYWNlIHlvdXIgc2hpcHMgb24gdGhlIGdhbWVib2FyZC5cIixcclxuICBjcHVTaGlwU3VuazogXCJBIHNoaXAgb2YgdGhlIENQVSdzIHdhcyBzdW5rIVwiLFxyXG4gIGNwdVNoaXBIaXQ6IFwiQSBzaGlwIG9mIHRoZSBDUFUncyB3YXMgc3VuayFcIixcclxuICBwbGF5ZXJTaGlwU3VuazogXCJBIHNoaXAgb2YgdGhlIHBsYXllcidzIHdhcyBzdW5rIVwiLFxyXG4gIHBsYXllclNoaXBIaXQ6IFwiQSBzaGlwIG9mIHRoZSBwbGF5ZXIncyB3YXMgaGl0ISFcIixcclxuICBhbHJlYWR5QXR0YWNrZWQ6IFwiVGhpcyBjZWxsIHdhcyBhbHJlYWR5IGF0dGFja2VkXCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTVUJESUFMT0dTID0ge1xyXG4gIHAxdHVybjogXCJDbGljayBvbiB0aGUgb3Bwb25lbnQgZ2FtZWJvYXJkIHRvIGZpcmUgYSBzaG90LlwiLFxyXG4gIHAydHVybjogXCJUaGlua2luZy4uLlwiLFxyXG4gIGNvbnRyb2xzMTogXCJEcmFnIGFuZCBkcm9wIHNoaXBzIG9udG8gdGhlIGdhbWVib2FyZC5cIixcclxuICBjb250cm9sczI6IFwiQ2xpY2sgKHdoZW4gcGxhY2VkKSB0byByb3RhdGUgc2hpcC5cIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIge1xyXG4gIFxyXG4gIHN0YXRpYyAjaW5zdGFuY2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwbGF5ZXJzIGludm9sdmVkIGluIHRoZSBnYW1lLlxyXG4gICAqL1xyXG4gIHBsYXllcnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIElzIGl0IHBsYXllciAxJ3MgdHVybj8gXHJcbiAgICovXHJcbiAgI3AxdHVybjtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgb2YgdGhlIGxlbmd0aHMgb2YgZWFjaCBzaGlwIHRoYXQgdGhlIHBsYXllciB3aWxsIGhhdmUgaW4gdGhlaXIgYXJzZW5hbC5cclxuICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICovXHJcbiAgc2hpcExlbmd0aHM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhcyB0aGUgZ2FtZSBlbmRlZCB5ZXQ/XHJcbiAgICovXHJcbiAgI2dhbWVPdmVyO1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFRydWUgaWYgcGxheWVyIDEgd29uLCBmYWxzZSBpZiBwbGF5ZXIgMiB3b24uXHJcbiAgICovXHJcbiAgI2lzV2lubmVyUDE7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluc3RhbmNlIG9mIGEgQmF0dGxlc2hpcEVsZW1lbnRzIGNsYXNzIHRvIHVzZSB0byBtYW5pcHVsYXRlIHRoZSB2aWV3IG9mIHRoZSBwYWdlLlxyXG4gICAqIEB0eXBlIHtCYXR0bGVzaGlwRWxlbWVudHN9XHJcbiAgICovXHJcbiAgI3BhZ2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgZ2FtZS4gQXNzaWducyBDUFUgYXMgcGxheWVyIDIuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJbXX0gcGxheWVycyAtIEFuIGFycmF5IG9mIHRoZSBwbGF5ZXJzIGluIHRoZSBnYW1lLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcDFzdGFydCAtIFNob3VsZCBwbGF5ZXIgMSBzdGFydCBmaXJzdD8gVHJ1ZSBieSBkZWZhdWx0LlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBsYXllcjEsIHBsYXllcjIsIHAxc3RhcnQgPSB0cnVlLCBzaGlwTGVuZ3RocyA9IFsyXSkge1xyXG4gICAgaWYgKEdhbWVNYW5hZ2VyLiNpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBHYW1lTWFuYWdlci4jaW5zdGFuY2U7XHJcbiAgICB9IFxyXG5cclxuICAgIEdhbWVNYW5hZ2VyLiNpbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXIyLmNwdSA/IFtwbGF5ZXIxLCBwbGF5ZXIyXSA6IFtwbGF5ZXIyLCBwbGF5ZXIxXTtcclxuICAgIHRoaXMuI3AxdHVybiA9IHAxc3RhcnQ7XHJcbiAgICB0aGlzLnNoaXBMZW5ndGhzID0gc2hpcExlbmd0aHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgZ2FtZS4gSGFzIHRoZSBDUFUgcGxhY2Ugc2hpcHMsIGlzc3VlcyBhIHN0YXJ0IG1lc3NhZ2Ugb24gdGhlIHZpZXcsXHJcbiAgICogZGlzYWJsZXMgYWxsIGhhbmRsZXJzIG9mIGFsbCBzaGlwcywgYW5kIHRoZW4gaGFzIG9uZSBvZiB0aGUgcGxheWVycyBzZWxlY3QgYSBtb3ZlLlxyXG4gICAqIE1ha2VzIGFsbCBjZWxscyBcImF0dGFja2FibGUuXCJcclxuICAgKi9cclxuICBzdGFydEdhbWUoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRyb2xzLWFyZWEsIC5tZW51LWFyZWEsIC5wMi5nYW1lYm9hcmQsIC5zaGlwLXJvc3RlclwiKVxyXG4gICAgICAgIC5mb3JFYWNoKGFyZWEgPT4gYXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tZGlzcGxheVwiKSk7IFxyXG5cclxuICAgIHRoaXMucGxheWVyc1swXS5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMS1uYW1lXCIpLnZhbHVlO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEuZ2FtZWJvYXJkIC5nYW1lYm9hcmQtb3duZXJcIikudGV4dENvbnRlbnQgPVxyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5uYW1lICsgXCIgKFlvdSlcIjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDIuZ2FtZWJvYXJkIC5nYW1lYm9hcmQtb3duZXJcIikudGV4dENvbnRlbnQgPVxyXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS5uYW1lO1xyXG5cclxuICAgIHRoaXMuI3BhZ2UuZW51bWVyYXRlUGxheWVyU2hpcFJvc3RlcigpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZS1idXR0b25cIikuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKS5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICBzaGlwLm9uY2xpY2sgPSBudWxsO1xyXG4gICAgICBzaGlwLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcGxhY2VzIHNoaXAgZm9yIGNwdS5cclxuICAgIHRoaXMucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgIGlmIChwbGF5ZXIuY3B1KSB7XHJcbiAgICAgICAgdGhpcy4jY3B1UGxhY2VTaGlwcyhwbGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZWdpc3RlciBzaGlwcyBmb3IgdGhlIHBsYXllci5cclxuICAgIHRoaXMuI3BsYXllclJlZ2lzdGVyU2hpcHMoKTtcclxuXHJcbiAgICAvLyBUT0RPXHJcbiAgICAvLyByZW1vdmUgdGhpcyBwcm9taXNlIGNvZGUsIGVmZmVjdCBsb29rcyBsYW1lLlxyXG4gICAgKCgpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wbGF5aW5nKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmIChHYW1lTWFuYWdlci4jaW5zdGFuY2UuI3AxdHVybikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShHQU1FX1NUQVRFLnAxdHVybik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShHQU1FX1NUQVRFLnAydHVybik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9KSgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICB0aGlzLiNwYWdlLnNldERpYWxvZyhyZXN1bHQpO1xyXG4gICAgICBpZiAodGhpcy4jcDF0dXJuKSB7XHJcbiAgICAgICAgdGhpcy4jcGFnZS5zZXRTdWJEaWFsb2coU1VCRElBTE9HUy5wMXR1cm4pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuI3BhZ2Uuc2V0U3ViRGlhbG9nKFNVQkRJQUxPR1MucDJ0dXJuKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZC1hcmVhXCIpLmNsYXNzTGlzdC5hZGQoXCJnYW1lLWFjdGl2ZVwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RhYmxlXCIpLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrYWJsZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMi5nYW1lYm9hcmQgLmF0dGFja2FibGVcIikuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxmLiNwbGF5Um91bmQuYmluZCh0aGlzKSk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUXVlcmllcyBib3RoIHBsYXllcnMnIGdhbWVib2FyZHMgdG8gc2VlIGlmIHRoZSBnYW1lIHNob3VsZCBiZSBlbmRlZC5cclxuICAgKi9cclxuICAjZGV0ZXJtaW5lSWZHYW1lT3ZlcigpIHtcclxuICAgIGNvbnN0IHAxdmljdG9yeSA9IHRoaXMucGxheWVyc1sxXS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCk7XHJcbiAgICBjb25zdCBwMnZpY3RvcnkgPSB0aGlzLnBsYXllcnNbMF0uZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpO1xyXG4gICAgXHJcbiAgICBpZiAocDF2aWN0b3J5KSB7XHJcbiAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUucDF2aWN0b3J5KTtcclxuICAgICAgdGhpcy4jaXNXaW5uZXJQMSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHAydmljdG9yeSkge1xyXG4gICAgICB0aGlzLiNwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLnAydmljdG9yeSk7XHJcbiAgICAgIHRoaXMuI2lzV2lubmVyUDEgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocDF2aWN0b3J5IHx8IHAydmljdG9yeSkge1xyXG4gICAgICB0aGlzLiNnYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgIHRoaXMuI2VuZEdhbWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gICNlbmRHYW1lKCkge1xyXG4gICAgLy8gcmV2ZWFsIGNwdSBzaGlwc1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHUtc2hpcC1wbGFjZWRcIikuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY3B1LXNoaXAtcmV2ZWFsXCIpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLiNwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLmVuZGVkKTtcclxuICAgIHRoaXMuI3BhZ2Uuc2V0U3ViRGlhbG9nKFwiXCIpO1xyXG4gICAgLy8gdXBkYXRlIGdhbWUgcmVzdWx0cyBoZXJlLlxyXG4gICAgY29uc3Qgc3VtbWFyeUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VtbWFyeS1hcmVhXCIpO1xyXG5cclxuICAgIHN1bW1hcnlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAvLyAxLiBTaG93IHRoZSB3aW5uZXIuXHJcbiAgICBpZiAodGhpcy4jaXNXaW5uZXJQMSkge1xyXG4gICAgICBzdW1tYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyXCIpLnRleHRDb250ZW50ID0gdGhpcy5wbGF5ZXJzWzBdLm5hbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdW1tYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyXCIpLnRleHRDb250ZW50ID0gdGhpcy5wbGF5ZXJzWzFdLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gU2hvdyB0aGUgYWNjdXJhY3kgbWV0cmljcy5cclxuICAgIGNvbnN0IHAxQWNjTWV0cmljID0gc3VtbWFyeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnAxLmFjY3VyYWN5LW1ldHJpY1wiKTtcclxuICAgIGNvbnN0IHAyQWNjTWV0cmljID0gc3VtbWFyeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnAyLmFjY3VyYWN5LW1ldHJpY1wiKTtcclxuXHJcbiAgICBwMUFjY01ldHJpYy50ZXh0Q29udGVudCA9IHRoaXMuI2NhbGN1bGF0ZUFjY3VyYWN5KHRoaXMucGxheWVyc1sxXSk7XHJcbiAgICBwMkFjY01ldHJpYy50ZXh0Q29udGVudCA9IHRoaXMuI2NhbGN1bGF0ZUFjY3VyYWN5KHRoaXMucGxheWVyc1swXSk7XHJcblxyXG4gICAgc3VtbWFyeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBsYXktYWdhaW5cIilcclxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI3Jlc2V0R2FtZS5iaW5kKHRoaXMpLCB7b25jZTogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlIHRoZSBhY2N1cmFjeSwgZ2l2ZW4gdGhlIHBsYXllci4gVXNlcyB0aGF0J3MgcGVyc29uIGdhbWVib2FyZFxyXG4gICAqIHRvIGRldGVybWluZSB0aGUgYWNjdXJhY3kuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciA6IHRoZSBwZXJzb24gd2hvIHlvdSBhdHRhY2tlZC5cclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUb3RhbCBzaG90cyAvIGhpdHMgYW5kIHRoZSBhY2N1cmFjeSBvZiBpdC5cclxuICAgKi9cclxuICAjY2FsY3VsYXRlQWNjdXJhY3kocGxheWVyKSB7XHJcbiAgICBsZXQgdG90YWxTaG90cyA9IDA7XHJcbiAgICBsZXQgaGl0cyA9IDA7XHJcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLmdyaWQuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICByb3cuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBpZiAoY2VsbCA9PT0gXCJ4XCIgfHwgY2VsbCA9PT0gXCJvXCIpIHtcclxuICAgICAgICAgIHRvdGFsU2hvdHMgKz0gMTsgXHJcbiAgICAgICAgICBpZiAoY2VsbCA9PT0gXCJ4XCIpIHtcclxuICAgICAgICAgICAgaGl0cyArPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFjY3VyYWN5ID0gKGhpdHMgLyB0b3RhbFNob3RzKSAqIDEwMDtcclxuICAgIHJldHVybiBgJHtoaXRzfS8ke3RvdGFsU2hvdHN9ICgke2FjY3VyYWN5LnRvRml4ZWQoMil9JSlgO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSBnYW1lIGJ5OlxyXG4gICAqIC0gUmVtYXJraW5nIGFsbCBjZWxscy5cclxuICAgKiAtIFJlbW92aW5nIGFsbCBzaGlwcyBmcm9tIHRoZSBnYW1lYm9hcmQuXHJcbiAgICogLSBSZWNyZWF0aW5nIHBsYXllciBpbnN0YW5jZXMuXHJcbiAgICogLSBSZWNyZWF0aW5nIGRyYWdnYWJsZSBzaGlwcyBpbiB0aGUgc2VsZWN0aW9uIGFyZWEuXHJcbiAgICogLSBBbGxvd2luZyB0aGUgdXNlciB0byBzdGFydCB0aGUgZ2FtZSBhZ2Fpbi5cclxuICAgKi9cclxuICAjcmVzZXRHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RhYmxlXCIpLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsIHNlbGVjdGFibGVcIjtcclxuICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIikuZm9yRWFjaChzaGlwID0+IHNoaXAucmVtb3ZlKCkpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMS1uYW1lXCIpLnZhbHVlID0gdGhpcy5wbGF5ZXJzWzBdLm5hbWU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZC1vd25lclwiKS50ZXh0Q29udGVudCA9IFwiUGxheWVyXCI7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXJzWzBdID0gbmV3IFBsYXllcih0aGlzLnBsYXllcnNbMF0ubmFtZSwgZmFsc2UpO1xyXG4gICAgdGhpcy5wbGF5ZXJzWzFdID0gbmV3IFBsYXllcih0aGlzLnBsYXllcnNbMV0ubmFtZSwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy4jcGFnZS5nZW5lcmF0ZURyYWdnYWJsZVNoaXBzKCk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lLWJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy4jZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgIHRoaXMuI3AxdHVybiA9IHRydWU7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdW1tYXJ5LWFyZWEsIC5tZW51LWFyZWEsIC5wMi5nYW1lYm9hcmQsXCIgK1xyXG4gICAgXCJjb250cm9scy1hcmVhLCAuc2hpcC1yb3N0ZXJcIikuZm9yRWFjaChhcmVhID0+IGFyZWEuY2xhc3NMaXN0LnRvZ2dsZShcIm5vLWRpc3BsYXlcIikpO1xyXG5cclxuICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUud2VsY29tZVByb21wdCk7XHJcbiAgICB0aGlzLiNwYWdlLnNldFN1YkRpYWxvZyhTVUJESUFMT0dTLmNvbnRyb2xzMSwgU1VCRElBTE9HUy5jb250cm9sczIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGxheSBhIHJvdW5kIG9mIGJhdHRsZXNoaXBzLCBhbGxvd2luZyBlYWNoIHBsYXllciB0byBmaXJlLlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgOiBFdmVudDsgdXNlZCB0byBwaWNrIHVwIHRoZSBjZWxsIHRoZSB1c2VyIGNsaWNrZWQuIEFjcXVpcmVzXHJcbiAgICogY29vcmRpbmF0ZXMgZnJvbSBpdCB0byBhdHRhY2suXHJcbiAgICovXHJcbiAgI3BsYXlSb3VuZChlKSB7XHJcbiAgICBjb25zdCB0aGlua1RpbWVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTAwKSArIDgwMDtcclxuICAgIGNvbnN0IHBlcmZvcm1DUFVBdHRhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuI2NwdUZpcmVBdHRhY2soKTtcclxuICAgICAgaWYgKCF0aGlzLiNnYW1lT3Zlcikge1xyXG4gICAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUucDF0dXJuKTtcclxuICAgICAgICB0aGlzLiNwYWdlLnNldFN1YkRpYWxvZyhTVUJESUFMT0dTLnAxdHVybik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy4jcDF0dXJuICYmICF0aGlzLiNnYW1lT3Zlcikge1xyXG4gICAgICB0aGlzLiNwbGF5ZXJGaXJlQXR0YWNrKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLiNwMXR1cm4gPT09IGZhbHNlICYmICF0aGlzLiNnYW1lT3Zlcikge1xyXG4gICAgICB0aGlzLiNwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLnAydHVybik7XHJcbiAgICAgIHRoaXMuI3BhZ2Uuc2V0U3ViRGlhbG9nKFNVQkRJQUxPR1MucDJ0dXJuKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQocGVyZm9ybUNQVUF0dGFjay5iaW5kKHRoaXMpLCB0aGlua1RpbWVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNwbGF5ZXJSZWdpc3RlclNoaXBzKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEuZ2FtZWJvYXJkXCIpO1xyXG5cclxuICAgIGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIikuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgbGV0IG9yaWdpbkNlbGwgPSBzaGlwLnBhcmVudE5vZGU7XHJcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChvcmlnaW5DZWxsLmRhdGFzZXQucm93KTtcclxuICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KG9yaWdpbkNlbGwuZGF0YXNldC5jb2wpO1xyXG4gICAgICBsZXQgbGVuZ3RoID0gc2hpcC5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgICAgbGV0IHZlcnRpY2FsID0gc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcclxuXHJcbiAgICAgIHNlbGYucGxheWVyc1swXS5nYW1lYm9hcmQucGxhY2VTaGlwKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjayBhIHBsYXllci5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gRXZlbnQgd2hpY2ggdGhlIGhhbmRsZXIgY2FwdHVyZXMuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IGF0dGFja2VyIC0gVGhlIGF0dGFja2luZyBwbGF5ZXIuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IGF0dGFja2VkIC0gVGhlIHBsYXllciByZWNlaXZpbmcgdGhlIGF0dGFjay5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICAjcGxheWVyRmlyZUF0dGFjayhlKSB7XHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImF0dGFja2VkXCIpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBjZWxsIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQhXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvdyk7XHJcbiAgICBjb25zdCBjb2wgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb2wpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJvdywgY29sKTtcclxuICAgIGxldCByZXN1bHQgPSB0aGlzLnBsYXllcnNbMF0uYXR0YWNrKHRoaXMucGxheWVyc1sxXSwgcm93LCBjb2wpO1xyXG4gICAgc3dpdGNoKHJlc3VsdCkge1xyXG4gICAgICBjYXNlIDE6IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0J3MgYSBoaXQhXCIpO1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG5cclxuICAgICAgICBsZXQgc2hpcElkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2hpcC5zcGxpdChcImNwdS1zaGlwXCIpWzFdO1xyXG4gICAgICAgIGxldCBzaGlwU3VuayA9IHRoaXMucGxheWVyc1sxXS5nYW1lYm9hcmQuaXNTaGlwU3VuayhzaGlwSWQpO1xyXG4gICAgICAgIGlmIChzaGlwU3Vuaykge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAyLmdhbWVib2FyZCAuc2hpcC1uYW1lW2RhdGEtc2hpcD1cImNwdS1zaGlwJHtzaGlwSWR9XCJdYClcclxuICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0J3MgYSBtaXNzIVwiKTtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aGlzLiNwMXR1cm4gPSBmYWxzZTsgLy8gQ1BVIG11c3QgbWFrZSBhIHN1Y2Nlc3NmdWwgbW92ZSBiZWZvcmUgdGhlIHBsYXllciBtb3ZlcyBhZ2Fpbi5cclxuXHJcbiAgICB0aGlzLiNkZXRlcm1pbmVJZkdhbWVPdmVyKCk7XHJcbiAgfVxyXG5cclxuICAjY3B1QXR0YWNrRGV0ZXJtaW5lQ29vcmRpbmF0ZXMoY3B1KSB7XHJcbiAgICBsZXQgcm93O1xyXG4gICAgbGV0IGNvbDsgXHJcbiAgICBsZXQgZW5kSW5kZXggPSBjcHUuZ2FtZWJvYXJkLnNpemUgLSAxO1xyXG5cclxuICAgIHN3aXRjaChjcHUuY3B1QmVoYXZpb3IpIHtcclxuICAgICAgY2FzZSBDUFVfU1RBVEUucmFuZG9tOiB7XHJcbiAgICAgICAgLy8gcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGVuZEluZGV4KSk7XHJcbiAgICAgICAgLy8gY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGVuZEluZGV4KSk7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgICBjb2wgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQ1BVX1NUQVRFLmZvdW5kOiB7XHJcbiAgICAgICAgLy8gd2hlbiBmb3VuZCwgdGFyZ2V0IHByb3hpbWl0eSBvZiAxIHVuaXQgcmFkaXVzIHRvIHRoZSBmb3VuZCBjZWxsLlxyXG4gICAgICAgIC8vIHRoYXQgbWVhbnMgYWx0ZXJpbmcgdGhlIHJvdyBYT1IgY29sdW1uIGJhc2VkIG9uIHRoZSBsYXN0IHN1Y2Nlc3NmdWwgaGl0LlxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGZvciBkZWNpZGluZyB3aGV0aGVyIHRvIHBpY2sgcm93IG9yIGNvbHVtbiBmb3IgYWRqdXN0bWVudFxyXG4gICAgICAgIGxldCBwaWNrUm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAvLyBmb3IgZGVjaWRpbmcgd2hldGhlciB0byBwbHVzIG9yIG1pbnVzLlxyXG4gICAgICAgIGxldCBwbHVzTWludXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID09PSAwID8gMSA6IC0xO1xyXG5cclxuICAgICAgICBpZiAocGlja1Jvdykge1xyXG4gICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IHN1Y2Nlc3NmdWwgaGl0IHdhcyAwIHdlIGRvbid0IHdhbnQgLTEgLS0gYWx3YXlzIGZvcmNlIGl0IHRvIGJlICsxLlxyXG4gICAgICAgICAgaWYgKGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ICsgMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgPT09IGVuZEluZGV4KSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93IC0gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ICsgcGx1c01pbnVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2w7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBzdWNjZXNzZnVsIGhpdCB3YXMgMCB3ZSBkb24ndCB3YW50IC0xIC0tIGFsd2F5cyBmb3JjZSBpdCB0byBiZSArMS5cclxuICAgICAgICAgIGlmIChjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb2wgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCArIDE7XHJcbiAgICAgICAgICAvLyBsaWtld2lzZSBmb3IgdGhlIGFyZWFzIHdoZXJlIHRoZSBzaGlwIGlzIGF0IHRoZSBlZGdlIG9mIHRoZSBib2FyZC4gTG9vayBiYWNrLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCA9PT0gZW5kSW5kZXgpIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgLSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgKyBwbHVzTWludXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBDUFVfU1RBVEUuZm9jdXNlZDoge1xyXG4gICAgICAgIC8vIGluIGEgZm9jdXNlZCBtb2RlLCB0aGUgQ1BVIHN0YXJ0cyB0cmF2ZXJzaW5nIGluIGEgc2luZ2xlIGRpcmVjdGlvbiB1bnRpbFxyXG4gICAgICAgIC8vIHRoZSBkZXN0cnVjdGlvbiBvZiB0aGUgc2hpcCBpcyBhbm5vdW5jZWQsIGEgbWlzcyBvY2N1cnMsIG9yIGl0IGhpdHMgYSB3YWxsLlxyXG5cclxuICAgICAgICAvLyB0aGUgZGlyZWN0aW9uIHRvIGJlIHRyYXZlcnNlZCBkZXBlbmRzIG9uIHRoZSBsYXN0IHR3byBzdWNjZXNzZnVsIGhpdHNcclxuICAgICAgICAvLyBhbmQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aG9zZSBjb29yZGluYXRlcy5cclxuICAgICAgICAvLyBhIHJvd0RpZmYgaW5kaWNhdGVzIHRvIGxvb2sgdXAgb3IgZG93biwgYXMgdGhlIHNoaXAgaXMgbHlpbmcgdmVydGljYWxseS5cclxuICAgICAgICAvLyBhIGNvbERpZmYgaW5kaWNhdGVzIHRvIGxvb2sgbGVmdCBvciByaWdodCwgYXMgdGhlIHNoaXAgaXMgbHlpbmcgaG9yaXpvbnRhbGx5LlxyXG5cclxuICAgICAgICBsZXQgcm93RGlmZiA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93IC1cclxuICAgICAgICAgICAgY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb2xEaWZmID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgLVxyXG4gICAgICAgICAgICBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2w7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gd2hlbiB0byBsb29rIHVwIC8gZG93biAtLSB0aGVyZSdzIGEgcm93IGRpZmZlcmVuY2VcclxuICAgICAgICBpZiAocm93RGlmZikge1xyXG4gICAgICAgICAgLy8gZm9yIHdoZW4gdGhlIGZvY3VzIG5lZWRzIHRvIGJlIGludmVydGVkIChtaXNzIG9yIGhpdCBhIGdyaWQgYmFycmllcilcclxuICAgICAgICAgIGlmIChjcHUuY3B1Rm9jdXNJbnZlcnQpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkaXJlY3Rpb24gdGhlIGNwdSB3YXMgdHJhdmVsaW5nIGluIHByZXZpb3VzbHk7IGlmIHBvc2l0aXZlLCB0aGVuIGl0IHdhcyBnb2luZyB1cC5cclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBnbyBkb3duIGJ5IGFkZGluZy5cclxuICAgICAgICAgICAgaWYgKHJvd0RpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgKyAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIGVsc2UgaXQgd2FzIG5lZ2F0aXZlLCBzbyBpdCB3YXMgZ29pbmcgZG93biwgc28gd2UgbmVlZCB0byBnbyB1cC5cclxuICAgICAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3B1LmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAvLyBpZiBhdCB0aGUgZW5kLCBzdGFydCBzZWFyY2hpbmcgdXB3YXJkcyBpbnN0ZWFkLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgPT09IGVuZEluZGV4KSB7IFxyXG4gICAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyAtIDE7XHJcbiAgICAgICAgICAvLyBpZiBhdCB0aGUgYmVnaW5uaW5nLCBzdGFydCBzZWFyY2hpbmcgZG93bndhcmRzLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgPT09IDApIHtcclxuICAgICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgKyAxO1xyXG4gICAgICAgICAgLy8gZWxzZSB3ZSdyZSBpbiB0aGUgbWlkZGxlLCBhbmQgaWYgdGhhdCBkaWZmZXJlbmNlIGlzIDEsIHRoZW4gbG9vayB1cHdhcmRzLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChyb3dEaWZmID4gMCkge1xyXG4gICAgICAgICAgICByb3cgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgLSAxO1xyXG4gICAgICAgICAgLy8gYWxzbyBpbiB0aGUgbWlkZGxlLCBidXQgZm9yIGRpZmZlcmVuY2UgMSwgdGhlbiBsb29rIGRvd253YXJkcy5cclxuICAgICAgICAgIH0gZWxzZSBpZiAocm93RGlmZiA8IDApIHtcclxuICAgICAgICAgICAgcm93ID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGNvbHVtbiBpcyBhIGdpdmVuIC0tIGtlZXAgaXQgdGhlIHNhbWUuXHJcbiAgICAgICAgICBjb2wgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2w7XHJcbiAgICAgICAgLy8gZWxzZSBpbiB0aGUgY2FzZSBvZiBhIGNvbHVtbiBkaWZmZXJlbmNlLCB3ZSBsb29rIGxlZnQgLyByaWdodC5cclxuICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgIGlmIChjcHUuY3B1Rm9jdXNJbnZlcnQpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkaXJlY3Rpb24gdGhlIGNwdSB3YXMgdHJhdmVsaW5nIGluIHByZXZpb3VzbHk7IGlmIHBvc2l0aXZlLCB0aGVuIGl0IHdhcyBnb2luZyB1cC5cclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBnbyBkb3duIGJ5IGFkZGluZy5cclxuICAgICAgICAgICAgaWYgKGNvbERpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgKyAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIGVsc2UgaXQgd2FzIG5lZ2F0aXZlLCBzbyBpdCB3YXMgdHJhdmVsaW5nIGxlZnR3YXJkczsgd2UgbmVlZCB0byBnbyByaWdodC5cclxuICAgICAgICAgICAgICBjb2wgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3B1LmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGNwdS5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LmNvbCA9PT0gZW5kSW5kZXgpIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgLSAxO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2wgPT09IDApIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgKyAxO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjb2xEaWZmID4gMCkge1xyXG4gICAgICAgICAgICBjb2wgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2wgLSAxO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjb2xEaWZmIDwgMCkge1xyXG4gICAgICAgICAgICBjb2wgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2wgKyAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJvdyA9IGNwdS5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHtyb3csIGNvbH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbcm93LCBjb2xdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIHRoZSBDUFUgdG8gZGVjaWRlIG9uIGFuIGF0dGFjay5cclxuICAgKi9cclxuICAjY3B1RmlyZUF0dGFjaygpIHtcclxuICAgIGxldCBwMiA9IHRoaXMucGxheWVyc1sxXTtcclxuICAgIGxldCBzdGF0dXMgPSAtMTtcclxuICAgIGxldCBzaG90c0ZpcmVkID0gMDtcclxuICAgIGNvbnN0IHN0dWNrVGhyZXNob2xkID0gMTA7XHJcbiAgICBsZXQgcm93O1xyXG4gICAgbGV0IGNvbDtcclxuICAgIHdoaWxlIChzdGF0dXMgPT09IC0xKSB7XHJcbiAgICAgIFtyb3csIGNvbF0gPSB0aGlzLiNjcHVBdHRhY2tEZXRlcm1pbmVDb29yZGluYXRlcyh0aGlzLnBsYXllcnNbMV0pO1xyXG4gICAgICBcclxuICAgICAgc3RhdHVzID0gdGhpcy5wbGF5ZXJzWzFdLmF0dGFjayh0aGlzLnBsYXllcnNbMF0sIHJvdywgY29sKTtcclxuICAgICAgXHJcbiAgICAgIGlmKHNob3RzRmlyZWQgPiBzdHVja1RocmVzaG9sZCkge1xyXG4gICAgICAgIHNob3RzRmlyZWQgPSAwO1xyXG4gICAgICAgIHAyLnJlc2V0Q1BVQmVoYXZpb3JzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNob3RzRmlyZWQrKztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYXR0YWNrZWRDZWxsID0gXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApXHJcbiAgICBhdHRhY2tlZENlbGwuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xyXG5cclxuICAgIHN3aXRjaChzdGF0dXMpIHtcclxuICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDUFUgc2NvcmVzIGEgaGl0IVwiKTtcclxuICAgICAgICBhdHRhY2tlZENlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wbGF5ZXJTaGlwSGl0KTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICAgICAgLy8gcmVwbGFjZSB3aXRoIGEgdG9hc3QuXHJcblxyXG4gICAgICAgIGxldCBzaGlwSWQgPSBhdHRhY2tlZENlbGwuZGF0YXNldC5zaGlwLnNwbGl0KFwicGxheWVyLXNoaXBcIilbMV07XHJcblxyXG4gICAgICAgIGxldCBzaGlwU3VuayA9IHRoaXMucGxheWVyc1swXS5nYW1lYm9hcmQuaXNTaGlwU3VuayhzaGlwSWQpO1xyXG4gICAgICAgIGlmIChzaGlwU3Vuaykge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2hpcC1uYW1lW2RhdGEtc2hpcD1cInBsYXllci1zaGlwJHtzaGlwSWR9XCJdYClcclxuICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llZFwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1BVIHNhbmsgdGhhdCBzaGlwIVwiKTtcclxuICAgICAgICAgIC8vIFRPRE9cclxuICAgICAgICAgIC8vIHJlcGxhY2Ugd2l0aCBhIHRvYXN0IGFwcGVhcmluZyBiZWxvdyB0aGUgZ2FtZSBhcmVhLlxyXG4gICAgICAgICAgLy8gdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wbGF5ZXJTaGlwU3Vuayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgQ1BVIGhhcyBtYWRlIGl0cyBmaXJzdCBzdWNjZXNzZnVsIGhpdCBhZ2FpbnN0IGEgc2hpcCEgXHJcbiAgICAgICAgaWYgKHAyLmNwdUJlaGF2aW9yID09PSBDUFVfU1RBVEUucmFuZG9tXHJcbiAgICAgICAgICAmJiBwMi5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ID09PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBwMi5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ID0gcm93O1xyXG4gICAgICAgICAgcDIuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCA9IGNvbDtcclxuICAgICAgICAgIHAyLmNwdUJlaGF2aW9yID0gQ1BVX1NUQVRFLmZvdW5kO1xyXG4gICAgICAgIC8vIFRoZSBDUFUgaGFzIG1hZGUgYSBzZWNvbmQgc3VjY2Vzc2Z1bCBoaXQgd2hpbGUgaW4gZm91bmQgbW9kZSFcclxuICAgICAgICB9IGVsc2UgaWYgKHAyLmNwdUJlaGF2aW9yID09PSBDUFVfU1RBVEUuZm91bmRcclxuICAgICAgICAgICYmIHAyLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ID09PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBwMi5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdyA9IHJvdztcclxuICAgICAgICAgIHAyLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sID0gY29sO1xyXG4gICAgICAgICAgcDIuY3B1QmVoYXZpb3IgPSBDUFVfU1RBVEUuZm9jdXNlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZm9jdXNlZCBtb2RlIGJlaGF2aW9ycyAtLSByZXZlcnQgdG8gcmFuZG9tIHdoZSBzdW5rLlxyXG4gICAgICAgICAgaWYgKHAyLmNwdUJlaGF2aW9yID09PSBDUFVfU1RBVEUuZm9jdXNlZCkge1xyXG4gICAgICAgICAgICAvLyBvbmx5IGtlZXAgdXBkYXRpbmcgdGhlIHNlY29uZCBoaXQuXHJcbiAgICAgICAgICAgIHAyLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ID0gcm93O1xyXG4gICAgICAgICAgICBwMi5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LmNvbCA9IGNvbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGluIGZvY3VzZWQgbW9kZS4uLiBsYXkgZG93biBzb21lIGF0dGFja3MuXHJcbiAgICAgICAgICAvLyBpZiBhIHNoaXAgd2FzIHN1bmssIHRoZW4gcmVzZXQgdG8gcmFuZG9tLlxyXG4gICAgICAgICAgaWYgKHNoaXBTdW5rKSB7XHJcbiAgICAgICAgICAgIHAyLnJlc2V0Q1BVQmVoYXZpb3JzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNQVSBtaXNzZXMhXCIpO1xyXG4gICAgICAgIGF0dGFja2VkQ2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuXHJcbiAgICAgICAgaWYgKHAyLmNwdUJlaGF2aW9yID09PSBDUFVfU1RBVEUuZm9jdXNlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTaW5jZSBDUFUgd2FzIGZvY3VzZWQsIGl0J2xsIHN3YXAgZGlyZWN0aW9ucyBzdGFydGluZyBmcm9tIHRoZSBmaXJzdCBoaXQuXCIpO1xyXG4gICAgICAgICAgcDIuY3B1Rm9jdXNJbnZlcnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLiNwMXR1cm4gPSB0cnVlO1xyXG4gICAgdGhpcy4jZGV0ZXJtaW5lSWZHYW1lT3ZlcigpO1xyXG4gIH1cclxuXHJcbiAgI2NwdVBsYWNlU2hpcHMocGxheWVyKSB7XHJcbiAgICBsZXQgcm9zdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMi5nYW1lYm9hcmRcIik7XHJcblxyXG4gICAgdGhpcy5zaGlwTGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBzdGF0dXMgPSBudWxsO1xyXG4gICAgICBsZXQgcm93O1xyXG4gICAgICBsZXQgY29sO1xyXG4gICAgICBsZXQgdmVydGljYWw7XHJcblxyXG4gICAgICB3aGlsZSAoc3RhdHVzID09PSBudWxsKSB7XHJcbiAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHBsYXllci5nYW1lYm9hcmQuc2l6ZS0xKSk7XHJcbiAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHBsYXllci5nYW1lYm9hcmQuc2l6ZS0xKSk7XHJcbiAgICAgICAgdmVydGljYWwgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHN0YXR1cyA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQmF0dGxlc2hpcEVsZW1lbnRzLnBsYWNlU2hpcFZpYUNvb3JkaW5hdGUobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwsIHRydWUsIGBjcHUtc2hpcCR7aW5kZXh9YCk7XHJcblxyXG4gICAgICAvLyBsaXN0IG9uIHJvc3RlciB0b28uXHJcbiAgICAgIGxldCBzaGlwTmFtZSA9IGNvbXBvbmVudC5wKHNldE5hbWUobGVuZ3RoKSwgXCJzaGlwLW5hbWVcIik7XHJcbiAgICAgIHNoaXBOYW1lLmRhdGFzZXQuc2hpcCA9IGBjcHUtc2hpcCR7aW5kZXh9YDtcclxuXHJcbiAgICAgIHJvc3Rlci5hcHBlbmQoc2hpcE5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggYW4gaW5zdGFuY2Ugb2YgQmF0dGxlU2hpcEVsZW1lbnRzIHRvIGNvbnRyb2wgdGhlIHZpZXcgb2YgdGhlIHBhZ2UuXHJcbiAgICogQHBhcmFtIHtCYXR0bGVzaGlwRWxlbWVudHN9IHBhZ2UgXHJcbiAgICovXHJcbiAgYXR0YWNoUGFnZShwYWdlKSB7XHJcbiAgICB0aGlzLiNwYWdlID0gcGFnZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENQVV9TVEFURSA9IHtcclxuICByYW5kb20gOiBcInJhbmRvbVwiLFxyXG4gIGZvdW5kIDogXCJmb3VuZFwiLFxyXG4gIGZvY3VzZWQgOiBcImZvY3VzZWRcIlxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gIG5hbWU7XHJcbiAgY3B1O1xyXG4gIC8qKlxyXG4gICAqIEtlZXBzIHRyYWNrIG9mIGNvb3JkaW5hdGVzIG9mIHRoZSBDUFUncyBsYXN0IHN1Y2Nlc3NmdWwgaGl0LlxyXG4gICAqL1xyXG4gIGNwdUZpcnN0U3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIENQVSBzY29yZXMgdHdvIGhpdHMgb24gYSBzaGlwLCB0aGVuIHVzZSB0aGlzIGFzIGEgZmxhZyB0byBzd2l0Y2hcclxuICAgKiBpdCdzIGJlaGF2aW9yIHRvIGZvY3VzZWQuXHJcbiAgICovXHJcbiAgY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgYXJlIHRocmVlIHN0YXRlcyBmb3IgdGhlIENQVSB0byBlbXBsb3k6IHJhbmRvbSwgZm91bmQsIGZvY3VzZWQuXHJcbiAgICovXHJcbiAgY3B1QmVoYXZpb3I7XHJcbiAgLyoqXHJcbiAgICogV2hlbiBmb2N1c2VkIG9uIGEgdGFyZ2V0LCBzd2FwcyB0aGUgZGlyZWN0aW9uIG9mIGF0dGFjayB3aGVuIHNldCB0byB0cnVlLlxyXG4gICAqIFVzZWQgd2hlbiB0aGUgQ1BVIGlkZW50aWZpZXMgYSByb3cgLyBjb2wgd2hlcmUgYSBzaGlwIG1heSBiZSwgYnV0IGdldHMgYSBtaXNzLlxyXG4gICAqL1xyXG4gIGNwdUZvY3VzSW52ZXJ0O1xyXG4gIHNjb3JlO1xyXG4gIGdhbWVib2FyZDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSwgaXNDcHUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmNwdSA9IGlzQ3B1O1xyXG4gICAgdGhpcy5jcHVCZWhhdmlvciA9IENQVV9TVEFURS5yYW5kb207XHJcbiAgICB0aGlzLmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNrIHRoZSBvdGhlciBwbGF5ZXIncyBnYW1lYm9hcmQuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIFRoZSBvdGhlciBwbGF5ZXIgb2YgdGhlIGdhbWUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBjb29yZGluYXRlIHRvIGxhdW5jaCBhbiBhdHRhY2suXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCAtIENvbHVtbiBjb29yZGluYXRlIHRvIGxhdW5jaCBhbiBhdHRhY2suXHJcbiAgICogQHJldHVybnMge251bWJlcn0gLSBTdGF0dXMgb2YgdGhlIGF0dGFjay4gMSBpcyBhIGhpdC4gMCBpcyBhIG1pc3MsXHJcbiAgICogYW5kIC0xIGlzIGFuIGFyZWEgd2hpY2ggaGFzIGFscmVhZHkgYmVlbiBoaXQuXHJcbiAgICovXHJcbiAgYXR0YWNrKHBsYXllciwgcm93LCBjb2wpIHtcclxuICAgIHJldHVybiBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRDUFVCZWhhdmlvcnMoKSB7XHJcbiAgICB0aGlzLmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgICB0aGlzLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQgPSB7cm93OiBudWxsLCBjb2w6IG51bGx9O1xyXG4gICAgdGhpcy5jcHVCZWhhdmlvciA9IENQVV9TVEFURS5yYW5kb207XHJcbiAgICB0aGlzLmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNldE5hbWUobGVuZ3RoKSB7XHJcbiAgc3dpdGNoKGxlbmd0aCkge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICByZXR1cm4gXCJTcGVlZGVyXCI7XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIHJldHVybiBcIlBhdHJvbCBCb2F0XCI7XHJcbiAgICBjYXNlIDM6XHJcbiAgICAgIHJldHVybiBcIkRlc3Ryb3llclwiO1xyXG4gICAgY2FzZSA0OlxyXG4gICAgICByZXR1cm4gXCJCYXR0bGVzaGlwXCI7XHJcbiAgICBjYXNlIDU6XHJcbiAgICAgIHJldHVybiBcIkNhcnJpZXJcIjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlNoaXBcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBiYXR0bGVzaGlwLCBkZXBlbmRzIG9uIHRoZSBsZW5ndGguXHJcbiAgICovXHJcbiAgbmFtZTsgXHJcbiAgLyoqXHJcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgYmF0dGxlc2hpcC5cclxuICAgKi9cclxuICBsZW5ndGg7XHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCBjb25kaXRpb24gb2YgdGhlIGJhdHRsZXNoaXAuIFJldHVybnNcclxuICAgKiBhbiBhcnJheSBjb250YWluaW5nIHN0YXR1cyBvZiB0aGUgYmF0dGxlc2hpcC4gXHJcbiAgICogSWYgdGhlIHN0YXR1c2VzIGFyZSBhbGwgdHJ1ZSwgdGhlIHNoaXAgaXMgc3Vuay5cclxuICAgKi9cclxuICBzdGF0dXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHNoaXAuXHJcbiAgICogQHBhcmFtIHtHYW1lYm9hcmR9IGdhbWVib2FyZCAtIFRoZSBnYW1lYm9hcmQgdGhlIHNoaXAgYmVsb25ncyB0by5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIC0gVGhlIGxlbmd0aCBvZiB0aGUgc2hpcC5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IC0geENvb3JkaW5hdGUgdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQuXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbCAtIHlDb29yZGluYXRlIHRvIHBsYWNlIHRoZSBzaGlwLiAwLWJhc2VkLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgLSBTaG91bGQgdGhlIHNoaXAgYmUgcGxhY2VkIHZlcnRpY2FsbHk/XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aCA/PyAxO1xyXG4gICAgdGhpcy5uYW1lID0gc2V0TmFtZSh0aGlzLmxlbmd0aCk7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFya3MgdGhlIHNoaXAgaGl0IGF0IGdpdmVuIGxvY2F0aW9uLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NhdGlvbiBcclxuICAgKi9cclxuICBoaXQoeCwgeSkge1xyXG4gICAgbGV0IGlkID0gYCR7eH0sJHt5fWA7XHJcbiAgICB0aGlzLnN0YXR1c1tpZF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgc2hpcCBoYXMgYmVlbiBlbnRpcmVseSBzdW5rIHlldC5cclxuICAgKi9cclxuICBpc1N1bmsoKSB7XHJcbiAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuc3RhdHVzKSB7XHJcbiAgICAgIGlmICghdGhpcy5zdGF0dXNbcHJvcF0pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0iLCIvKipcclxuICogQSBjbGFzcyB3aXRoIHVzZWZ1bCwgZ2VuZXJhbC1wdXJwb3NlIG1ldGhvZHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuICBcclxuICBzdGF0aWMgZW1haWxSZWdleCA9ICBcdFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxyXG4gIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cclxuICAvKipcclxuICAgKiBCYXNlZCBvbiB3ZWJwYWNrJ3MgcmVxdWlyZSB0byBxdWlja2x5IGltcG9ydCBpbiBhbGwgaW1hZ2VzIGluIGEgZm9sZGVyLlxyXG4gICAqIFNlZSBkb2N1bWVudGF0aW9uIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlcXVpcmUtY29udGV4dCB0byB1bmRlcnN0YW5kXHJcbiAgICogbW9yZSBhYm91dCB0aGUgcGFyYW1ldGVyLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSByIC0gcmVxdWlyZS5jb250ZXh0KCkgZnVuY3Rpb24sIHVzZWQgZm9yIGltcG9ydGluZyBhbGwgZmlsZXMgaW5cclxuICAgKiBhIGRpcmVjdG9yeSBtYXRjaGluZyBhIHBhdHRlcm4uIEV4OlxyXG4gICAqIHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2VzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pLiBMZWF2ZSBibGFuayB0byB1c2UgdGhpcy5cclxuICAgKiBAcmV0dXJucyAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW1hZ2VzIG1hdGNoaW5nIHRoZSByZXF1aXJlIGNvbnRleHQsXHJcbiAgICogdGhlIG9yaWdpbmFsIGZpbGVuYW1lICh3LyBleHRlbnNpb24pIGJlaW5nIHRoZSBrZXkgcmVmZXJlbmNpbmcgdGhlIGltYWdlLlxyXG4gICAqL1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gIHN0YXRpYyBpbXBvcnRBbGxJbWFnZXMociA9IHJlcXVpcmUuY29udGV4dChcIi4uL2ltYWdlc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSkge1xyXG4gICAgbGV0IGltYWdlcyA9IHt9O1xyXG4gICAgci5rZXlzKCkubWFwKChpdGVtKSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xyXG4gICAgcmV0dXJuIGltYWdlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggdmFyaW91cyBjbGFzc2VzLiBXcmFwcyBkb2N1bWVudC5jcmVhdGVFbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUaGUgSFRNTCB0YWcgb2YgdGhlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDbGFzcyAtIERlZmF1bHQgY2xhc3MgdG8gcmVmZXIgdG8gdGhlIGVsZW1lbnQgYnkuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVzIC0gKE9wdGlvbmFsKSBBZGRpdGlvbmFsIGNsYXNzZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudC5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlRWxlbWVudCh0YWcsIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIFV0aWxpdHkuYWRkQ2xhc3Nlc1RvRWxlbWVudChlbGVtLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpO1xyXG5cclxuICAgIHJldHVybiBlbGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBoZWxwZXIgbWV0aG9kIHdoaWNoIGFkZHMgY2xhc3NlcyB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGFwcGVuZCBjbGFzc2VzIHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0Q2xhc3MgLSBUaGUgY2xhc3NuYW1lIHRoYXQgc2FpZCBlbGVtZW50IHNob3VsZCBhbHdheXMgaGF2ZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gVGhlIGNsYXNzbmFtZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudCAob3B0aW9uYWwpLlxyXG4gICAqICovIFxyXG4gIHN0YXRpYyBhZGRDbGFzc2VzVG9FbGVtZW50KGVsZW0sIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgICBjbGFzc05hbWVzLnB1c2goZGVmYXVsdENsYXNzKTtcclxuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGEgZ2l2ZW4gZWxlbWVudCwgYWRkIGFuIGFuaW1hdGlvbiBidXQgb25seSBwbGF5IGl0IG9uY2UuIEFmdGVyd2FyZHMsXHJcbiAgICogdW5sb2FkIHRoZSBhbmltYXRpb24uIFRoaXMgYWxsb3dzIHlvdSB0byBhZGQgdGhlIGNsYXNzIHRvIGl0IGFnYWluIHRvIFxyXG4gICAqIHBsYXkgdGhlIGFuaW1hdGlvbjsgdGhpcyBpcyB1c2VmdWwgd2hlbiBhc3NvY2lhdGVkIHdpdGggZXZlbnQgdHJpZ2dlcnMuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIEFuIGVsZW1lbnQgdG8gYXBwbHkgdGhlIGFuaW1hdGlvbiB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYW5pbWF0aW9uTmFtZSAtIEEgQ1NTIGNsYXNzIGFzc29jaWF0ZWQgd2l0aCBhbiBhbmltYXRpb24uXHJcbiAgICovXHJcbiAgc3RhdGljIHRyaWdnZXJBbmltYXRpb24oZWxlbSwgYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbk5hbWUpO1xyXG5cclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShhbmltYXRpb25OYW1lKTtcclxuICAgIH0sIHtvbmNlIDogdHJ1ZX0pOyBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlY3Vyc2l2ZWx5IHNjYWxlIHRoZSB0cmVlIG9mIGEgY2hpbGQgbm9kZSB1bnRpbCB0aGUgcGFyZW50IG1hdGNoaW5nIHRoZSBnaXZlblxyXG4gICAqIHNlbGVjdG9yIGlzIGZvdW5kLiBSZXR1cm5zIE5VTEwgaWYgbm8gbWF0Y2hpbmcgcGFyZW50IGlzIGZvdW5kLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBBIGNoaWxkIG5vZGUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gQ1NTIFNlbGVjdG9yIFN0cmluZy5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SFRNTGVsZW1lbnR9IC0gUGFyZW50IG9mIGVsZW0uXHJcbiAgICovXHJcbiAgc3RhdGljIGdldE1hdGNoaW5nUGFyZW50KGVsZW0sIHNlbGVjdG9yKSB7XHJcbiAgICB3aGlsZSghZWxlbS5tYXRjaGVzKHNlbGVjdG9yKSkge1xyXG4gICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xyXG4gICAgICBpZiAoZWxlbS5tYXRjaGVzKFwiaHRtbFwiKSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdXNlcidzIGxvY2F0aW9uLCB1c2luZyB0aGUgR2VvbG9jYXRpb24gQVBJLlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIG9mIHRoZSB1c2VyJ3MgbG9jYXRpb24sIG9yIG51bGxcclxuICAgKiBpZiB0aGUgdXNlciBkZW5pZXMgcGVybWlzc2lvbiByZXF1ZXN0cy5cclxuICAgKi9cclxuICAvKlxyXG4gIHN0YXRpYyBnZXRHZW9sb2NhdGlvbigpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWNjZXNzKHBvc2l0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGxhdGl0dWRlICA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgY29uc3QgbG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuXHJcbiAgICAgIGNvbnN0IGxhdGxvbmcgPSBgJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcclxuXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobGF0bG9uZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBlcnJvcigpIHtcclxuICAgICAgbGV0IGVycm9yID0gXCJVc2VyIGRlbmllZCBsb2NhdGlvbiBwZXJtaXNzaW9ucy5cIjtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7XHJcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2VzcywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gICovXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbGwgY2hpbGRyZW4gZnJvbSBhIHBhcmVudCBub2RlLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnROb2RlfSBwYXJlbnQgLSBQYXJlbnQgbm9kZSBjb250YWluaW5nIGNoaWxkcmVuLlxyXG4gICAqL1xyXG4gIHN0YXRpYyByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpIHtcclxuICAgIGlmIChwYXJlbnQuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbnRlbmNlIGZvcm1hdC4gTWFrZXMgc3VyZSB0aGUgZmlyc3QgbGV0dGVyIGlzIGNhcGl0YWxpemVkLCBhbmQgdGhlbiBcclxuICAgKiBhIHBlcmlvZCBpcyBhcHBlbmRlZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gYSBzdHJpbmcgdG8gc2VudGVuY2UtY2FzZS5cclxuICAgKi9cclxuICBzdGF0aWMgdG9TZW50ZW5jZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSArIFwiLlwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBhc3NpZ25lZCB0byBlYWNoIGJ1dHRvblxyXG4gICAqIHdoZW4gb25seSBvbmUgb2YgdGhlbSBzaG91bGQgYmUgdG9nZ2xlZC4gRnVuY3Rpb25zIGxpa2UgYSByYWRpb1xyXG4gICAqIGJ1dHRvbiBidXQgd2l0aCBkaWZmZXJlbnQgc3R5bGluZy5cclxuICAgKiBAcGFyYW0geyp9IGUgXHJcbiAgICogQHBhcmFtIHsqfSBwYXJlbnRTZWxlY3RvciBcclxuICAgKi9cclxuICBzdGF0aWMgdG9nZ2xlU2VsZWN0ZWQoZSwgcGFyZW50U2VsZWN0b3IpIHtcclxuICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBmcm9tIHRoZSBvdGhlci5cclxuICAgIGNvbnN0IHBhcmVudCA9IFV0aWxpdHkuZ2V0TWF0Y2hpbmdQYXJlbnQoZS5jdXJyZW50VGFyZ2V0LCBwYXJlbnRTZWxlY3Rvcik7XHJcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0ZWQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcclxuICAgIGN1cnJlbnRTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICBjdXJyZW50U2VsZWN0ZWQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAvLyB0b2dnbGUgc2VsZWN0ZWQgY2xhc3Mgb24gdGhlIGJ1dHRvblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgIGUuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvL2pzIFxyXG5pbXBvcnQgeyBCYXR0bGVzaGlwRWxlbWVudHMgfSBmcm9tIFwiLi9CYXR0bGVzaGlwRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBHQU1FX1NUQVRFLCBTVUJESUFMT0dTIH0gZnJvbSBcIi4vZ2FtZW1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuL3V0aWxpdHlcIjtcclxuaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuXHJcbi8vY3NzXHJcbmltcG9ydCBcIi4uL2Nzcy9yZXNldC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2dhbWUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9wYWdlLmNzc1wiO1xyXG5cclxuXHJcbihmdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICBjb25zdCBtYWluID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwibWFpblwiLCBcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgZm9vdGVyID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIFwiZm9vdGVyXCIpO1xyXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBjb21wb25lbnQuYShcIlZpZXcgb24gR2l0SHViLlwiLCBcIiNcIiwgXCJnaC1saW5rXCIpO1xyXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBjb21wb25lbnQuaW1nKFwiaHR0cHM6Ly9naXRodWIuZ2l0aHViYXNzZXRzLmNvbS9pbWFnZXMvbW9kdWxlcy9sb2dvc19wYWdlL0dpdEh1Yi1NYXJrLnBuZ1wiLCBcImdoLWljb25cIik7XHJcblxyXG4gIGJvZHkuYXBwZW5kKG1haW4sIGZvb3Rlcik7XHJcblxyXG4gIGNvbnN0IHAxID0gbmV3IFBsYXllcihcIkNvbW1hbmRlciBCbHVlXCIsIGZhbHNlKTtcclxuICBjb25zdCBwMiA9IG5ldyBQbGF5ZXIoXCJDb21tYW5kZXIgUmVkXCIsIHRydWUpO1xyXG5cclxuICBjb25zdCBnYW1lID0gbmV3IEdhbWVNYW5hZ2VyKHAxLCBwMik7XHJcbiAgY29uc3QgcGFnZSA9IG5ldyBCYXR0bGVzaGlwRWxlbWVudHMoZ2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IHBhZ2UuaGVhZGVyKCk7XHJcbiAgY29uc3QgZ2FtZUFyZWEgPSBwYWdlLmdhbWVBcmVhKCk7XHJcblxyXG4gIG1haW4uYXBwZW5kKGhlYWRlciwgZ2FtZUFyZWEpO1xyXG4gIFxyXG4gIGdhbWUuYXR0YWNoUGFnZShwYWdlKTtcclxuICBwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLndlbGNvbWVQcm9tcHQpO1xyXG4gIHBhZ2Uuc2V0U3ViRGlhbG9nKFNVQkRJQUxPR1MuY29udHJvbHMxLCBTVUJESUFMT0dTLmNvbnRyb2xzMik7XHJcbiAgZm9vdGVyLmFwcGVuZChnaXRodWJMaW5rLCBnaXRodWJJY29uKTtcclxufSkoKTtcclxuXHJcbi8qXHJcbjE6IFVzZXJzIHBsYWNlIHRoZWlyIHNoaXBzLlxyXG4yOiBVc2VycyBwbGF5IHRoZSBnYW1lLlxyXG4zOiBHYW1lIGVuZHMgd2hlbiB0aGUgb25lIHBsYXllcidzIGJhdHRsZXNoaXBzIGFyZSBkZXN0cm95ZWQuXHJcbjQ6IFRoZSBnYW1lIGVuZCBoYXMgc3RhdGlzdGljcyByZXN1bHRzIGFuZCBvcHRpb24gdG8gcmVwbGF5XHJcbjU6IEdvIGJhY2sgdG8gc3RlcCAxLlxyXG4qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==