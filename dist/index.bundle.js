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
___CSS_LOADER_EXPORT___.push([module.id, "/* For CSS important to the functioning of the game. */\r\n\r\n.no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.ship.draggable .cell {\r\n  background-color: #2c97fc;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55) !important;\r\n  background-color: rgba(0, 255, 64, 0.3) !important;\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  border: 1px solid rgb(131, 25, 25);\r\n  /* debug */\r\n  /* border: 1px solid rgb(255, 255, 255);  */\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.cpu-ship-reveal {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.gameboard-area {\r\n  transition: border 0.7s;\r\n}\r\n\r\n.p1.gameboard .cell.attackable .ship {\r\n  cursor: default;\r\n}\r\n\r\n.p1.gameboard .cell.attackable:hover {\r\n  background-color: revert;\r\n}\r\n\r\n.p2.gameboard .cell.attackable:not(.attacked):hover {\r\n  background-color: rgba(255,0,0,0.6);\r\n  cursor: crosshair;\r\n}\r\n\r\ndiv.gameboard-area.game-active > div.gameboard .cell.attacked {\r\n  cursor: default;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.gameboard .cell.attacked::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 25%;\r\n  visibility: unset;\r\n  z-index: 10;\r\n  font-family: monospace;\r\n  font-size: 170%;\r\n  right: 25%;\r\n  /* bottom: 25%; */\r\n}\r\n\r\n.gameboard .cell.attacked.miss::after {\r\n  content: \"???\";\r\n  color: white;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n.gameboard .cell.attacked.hit::after {\r\n  content: \"X\";\r\n  color: red;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n@keyframes smash {\r\n  0% {\r\n    opacity: 0.25;\r\n    transform: scale(1.5);\r\n  }\r\n  75% {\r\n    opacity: 0.5;\r\n    transform: scale(0.65);\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.ship-name::before {\r\n  content: \"???\";\r\n}\r\n\r\n.ship-name.destroyed {\r\n  color: #ff2424ab;\r\n  /* font-style: italic; */\r\n  text-decoration: line-through;\r\n}\r\n\r\np.ship-name.destroyed::before {\r\n  content: \"???\";\r\n  color: red;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n\r\n.ship-placer-label {\r\n  user-select: none;\r\n}", "",{"version":3,"sources":["webpack://./src/css/game.css"],"names":[],"mappings":"AAAA,sDAAsD;;AAEtD;EACE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA,8DAA8D;AAC9D,uDAAuD;AACvD,uDAAuD;AACvD,gFAAgF;AAChF;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,4CAA4C;EAC5C,kDAAkD;AACpD;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;EAClC,UAAU;EACV,2CAA2C;EAC3C,sCAAsC;AACxC;;AAEA;EACE,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;EACjC,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,iBAAiB;EACjB,WAAW;EACX,sBAAsB;EACtB,eAAe;EACf,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE;IACE,aAAa;IACb,qBAAqB;EACvB;EACA;IACE,YAAY;IACZ,sBAAsB;EACxB;EACA;IACE,YAAY;IACZ,mBAAmB;EACrB;AACF;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["/* For CSS important to the functioning of the game. */\r\n\r\n.no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.ship.draggable .cell {\r\n  background-color: #2c97fc;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55) !important;\r\n  background-color: rgba(0, 255, 64, 0.3) !important;\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  border: 1px solid rgb(131, 25, 25);\r\n  /* debug */\r\n  /* border: 1px solid rgb(255, 255, 255);  */\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.cpu-ship-reveal {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.gameboard-area {\r\n  transition: border 0.7s;\r\n}\r\n\r\n.p1.gameboard .cell.attackable .ship {\r\n  cursor: default;\r\n}\r\n\r\n.p1.gameboard .cell.attackable:hover {\r\n  background-color: revert;\r\n}\r\n\r\n.p2.gameboard .cell.attackable:not(.attacked):hover {\r\n  background-color: rgba(255,0,0,0.6);\r\n  cursor: crosshair;\r\n}\r\n\r\ndiv.gameboard-area.game-active > div.gameboard .cell.attacked {\r\n  cursor: default;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.gameboard .cell.attacked::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 25%;\r\n  visibility: unset;\r\n  z-index: 10;\r\n  font-family: monospace;\r\n  font-size: 170%;\r\n  right: 25%;\r\n  /* bottom: 25%; */\r\n}\r\n\r\n.gameboard .cell.attacked.miss::after {\r\n  content: \"???\";\r\n  color: white;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n.gameboard .cell.attacked.hit::after {\r\n  content: \"X\";\r\n  color: red;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n@keyframes smash {\r\n  0% {\r\n    opacity: 0.25;\r\n    transform: scale(1.5);\r\n  }\r\n  75% {\r\n    opacity: 0.5;\r\n    transform: scale(0.65);\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.ship-name::before {\r\n  content: \"???\";\r\n}\r\n\r\n.ship-name.destroyed {\r\n  color: #ff2424ab;\r\n  /* font-style: italic; */\r\n  text-decoration: line-through;\r\n}\r\n\r\np.ship-name.destroyed::before {\r\n  content: \"???\";\r\n  color: red;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n\r\n.ship-placer-label {\r\n  user-select: none;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* For CSS that has aesthetic purposes. */\r\nhtml, body {\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  color: white;\r\n  background: linear-gradient(353deg, rgb(11 35 56 / 89%), rgb(94 207 219 / 54%) 55.71%),\r\n  linear-gradient(265deg, rgb(238 8 26 / 90%), rgb(18 38 88 / 73%) 70.71%),\r\n  linear-gradient(142deg, rgb(133 131 205 / 83%), rgb(49 82 103 / 77%) 70.71%);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.content {\r\n  flex: 1 0 auto;\r\n}\r\n.footer {\r\n  flex-shrink: 0;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.footer .gh-icon {\r\n  width: 16px;\r\n  padding: 2px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.header {\r\n  font-family: \"Poppins\";\r\n  text-shadow: 4px 2px 2px #00000045;\r\n  margin-left: 15px;  \r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items:center;\r\n}\r\n\r\n.title {\r\n  font-size: 225%;  \r\n}\r\n\r\n.author {\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  position: relative;\r\n  left: 66px;\r\n}\r\n\r\n.logo-pic {\r\n  width: 64px;\r\n}\r\n\r\n.gameboard-grid {\r\n  box-shadow: 3px 3px 16px 4px #45434394;\r\n}\r\n\r\n.p1 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1 .gameboard-grid > .cell {\r\n  background-color: rgb(2 12 32 / 73%);\r\n}\r\n\r\n.p2 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1.gameboard .cell {\r\n  border: 1px solid rgb(25,79,131);\r\n}\r\n\r\n.p2.gameboard .cell:not(.cpu-ship-placed) {\r\n  border: 1px solid rgb(131, 25, 25);\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.gameboard-owner {\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 125%;\r\n  font-variant-caps: all-small-caps;\r\n  font-weight: 500;\r\n}\r\n\r\n.ship {\r\n  position: relative;\r\n  border: 1px solid black;\r\n}\r\n\r\ndiv.ship.draggable {\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\ndiv.ship.draggable div.cell {\r\n  border: 3px outset #1964c4;\r\n  width: 19.7px;\r\n  height: 19.1px;\r\n}\r\n\r\ndiv.ship-placed.vertical div.cell {\r\n  height: 19.7px;\r\n  width: 19.1px;\r\n}\r\n\r\n\r\ndiv.ship-placed {\r\n  top: -2px;\r\n  left: -2px;\r\n  background-color: #189dd1;\r\n}\r\n\r\ndiv.ship.draggable:hover {\r\n  box-shadow: 0px 0px 10px rgba(184, 233, 255, 0.562);\r\n  border: 1px solid orange;\r\n}\r\n\r\ndiv.ship.draggable:hover::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 100%; \r\n  left: 15px;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: black black transparent transparent;\r\n}\r\n\r\ndiv.ship.draggable:hover::after {\r\n  position: absolute;\r\n  content: attr(data-name);\r\n  font-variant-caps: all-small-caps;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  background-color: rgb(45,45,45);\r\n  padding: 3px;\r\n  color: beige;\r\n  bottom: calc(100% + 5px);\r\n}\r\n\r\n.cell.numbering .number-label {\r\n  margin: 6px auto;\r\n  font-family: monospace;\r\n  font-size: 110%;\r\n  width: fit-content;\r\n  width: -moz-fit-content;\r\n}\r\n\r\n.game-area {\r\n  margin: 15px auto;\r\n}\r\n\r\n.dialog-area {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  text-shadow: 2px 1px 6px rgb(100, 100, 100);\r\n  min-height: 75px;\r\n}\r\n\r\n.dialog-area .dialog-msg {\r\n  font-size: 165%;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.dialog-area .controls-help {\r\n  font-size: 0.9rem;\r\n  line-height: .25in;\r\n}\r\n\r\n.menu-area {\r\n  width: 290px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.ship-selection > * {\r\n  margin: 5px 0;\r\n}\r\n\r\n.ship-placer {\r\n  min-height: 200px;\r\n}\r\n\r\n.ship-placer-label, .start-game-prompt > [for=\"p1-name\"] {\r\n  font-variant-caps: all-petite-caps;\r\n  font-size: 1.1rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n\r\n#p1-name {\r\n  all: unset;\r\n  margin: 5px 0;\r\n  margin-left: 5px;\r\n  border-bottom: 1px solid white;\r\n  width: 75%;\r\n}\r\n\r\n.start-game-button, .play-again {\r\n  font-family: \"Poppins\";\r\n  font-size: 1.05rem;\r\n  width: 100%;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: rgb(255, 215, 140);\r\n  transition: background-color 0.25s ease-out;\r\n}\r\n\r\n.start-game-button:disabled {\r\n  background-color: grey;\r\n}\r\n\r\n@keyframes pull-open {\r\n  from {\r\n    transform: scaleY(0.1);\r\n  }\r\n  to {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n\r\n.start-game-button:not([disabled]):hover {\r\n  background-color: rgb(255, 231, 185);\r\n}\r\n\r\n.start-game-button:active, .play-again:active {\r\n  background-color: rgb(165, 125, 49);\r\n}\r\n\r\n.appear-from-bottom {\r\n  animation: appear-from-bottom 0.75s ease-in;\r\n}\r\n\r\n.appear-from-right {\r\n  animation: appear-from-right 1s ease-out;\r\n}\r\n\r\n@keyframes appear-from-bottom {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes appear-from-right {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(5px);\r\n  }\r\n  30% {\r\n    opacity: 0;\r\n    transform: translateX(5px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.summary-area {\r\n  width: 320px;\r\n  margin: 15px auto;\r\n}\r\n\r\n.victory-message {\r\n  font-family: \"Poppins\";\r\n  text-align: center;\r\n  font-size: 150%;\r\n}\r\n\r\n.winner {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 115%;\r\n  font-weight: bold;\r\n}\r\n\r\n.accuracy {\r\n  text-align: center;\r\n  font-family: \"Poppins\";\r\n  font-size: 115%;\r\n  margin: 15px auto 0px auto;\r\n}\r\n\r\n.acc-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 15px;\r\n  font-variant-caps: petite-caps;\r\n}\r\n\r\n.play-again {\r\n  margin: 15px 0;\r\n}\r\n\r\n.summary-screen {\r\n  text-shadow: 2px 0px 3px #3c3c3c;\r\n  border: 1px solid #382504;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: #211a3078;\r\n  box-shadow: 5px 3px 14px 4px #00000033;\r\n}\r\n\r\n.ship-roster-header {\r\n  font-variant-caps: all-petite-caps;\r\n  text-align: center;\r\n}\r\n\r\n.ship-name {\r\n  font-variant-caps: all-petite-caps;\r\n  margin: 15px;\r\n}\r\n\r\n.ship-name::before, .ship-name.destroyed::before {\r\n  margin-right: 10px;\r\n  font-size: 80%;\r\n  position: relative;\r\n  bottom: 1px;\r\n}", "",{"version":3,"sources":["webpack://./src/css/page.css"],"names":[],"mappings":"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","sourcesContent":["/* For CSS that has aesthetic purposes. */\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\nhtml, body {\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  color: white;\r\n  background: linear-gradient(353deg, rgb(11 35 56 / 89%), rgb(94 207 219 / 54%) 55.71%),\r\n  linear-gradient(265deg, rgb(238 8 26 / 90%), rgb(18 38 88 / 73%) 70.71%),\r\n  linear-gradient(142deg, rgb(133 131 205 / 83%), rgb(49 82 103 / 77%) 70.71%);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.content {\r\n  flex: 1 0 auto;\r\n}\r\n.footer {\r\n  flex-shrink: 0;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.footer .gh-icon {\r\n  width: 16px;\r\n  padding: 2px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.header {\r\n  font-family: \"Poppins\";\r\n  text-shadow: 4px 2px 2px #00000045;\r\n  margin-left: 15px;  \r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items:center;\r\n}\r\n\r\n.title {\r\n  font-size: 225%;  \r\n}\r\n\r\n.author {\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  position: relative;\r\n  left: 66px;\r\n}\r\n\r\n.logo-pic {\r\n  width: 64px;\r\n}\r\n\r\n.gameboard-grid {\r\n  box-shadow: 3px 3px 16px 4px #45434394;\r\n}\r\n\r\n.p1 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1 .gameboard-grid > .cell {\r\n  background-color: rgb(2 12 32 / 73%);\r\n}\r\n\r\n.p2 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1.gameboard .cell {\r\n  border: 1px solid rgb(25,79,131);\r\n}\r\n\r\n.p2.gameboard .cell:not(.cpu-ship-placed) {\r\n  border: 1px solid rgb(131, 25, 25);\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.gameboard-owner {\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 125%;\r\n  font-variant-caps: all-small-caps;\r\n  font-weight: 500;\r\n}\r\n\r\n.ship {\r\n  position: relative;\r\n  border: 1px solid black;\r\n}\r\n\r\ndiv.ship.draggable {\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\ndiv.ship.draggable div.cell {\r\n  border: 3px outset #1964c4;\r\n  width: 19.7px;\r\n  height: 19.1px;\r\n}\r\n\r\ndiv.ship-placed.vertical div.cell {\r\n  height: 19.7px;\r\n  width: 19.1px;\r\n}\r\n\r\n\r\ndiv.ship-placed {\r\n  top: -2px;\r\n  left: -2px;\r\n  background-color: #189dd1;\r\n}\r\n\r\ndiv.ship.draggable:hover {\r\n  box-shadow: 0px 0px 10px rgba(184, 233, 255, 0.562);\r\n  border: 1px solid orange;\r\n}\r\n\r\ndiv.ship.draggable:hover::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 100%; \r\n  left: 15px;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: black black transparent transparent;\r\n}\r\n\r\ndiv.ship.draggable:hover::after {\r\n  position: absolute;\r\n  content: attr(data-name);\r\n  font-variant-caps: all-small-caps;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  background-color: rgb(45,45,45);\r\n  padding: 3px;\r\n  color: beige;\r\n  bottom: calc(100% + 5px);\r\n}\r\n\r\n.cell.numbering .number-label {\r\n  margin: 6px auto;\r\n  font-family: monospace;\r\n  font-size: 110%;\r\n  width: fit-content;\r\n  width: -moz-fit-content;\r\n}\r\n\r\n.game-area {\r\n  margin: 15px auto;\r\n}\r\n\r\n.dialog-area {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  text-shadow: 2px 1px 6px rgb(100, 100, 100);\r\n  min-height: 75px;\r\n}\r\n\r\n.dialog-area .dialog-msg {\r\n  font-size: 165%;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.dialog-area .controls-help {\r\n  font-size: 0.9rem;\r\n  line-height: .25in;\r\n}\r\n\r\n.menu-area {\r\n  width: 290px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.ship-selection > * {\r\n  margin: 5px 0;\r\n}\r\n\r\n.ship-placer {\r\n  min-height: 200px;\r\n}\r\n\r\n.ship-placer-label, .start-game-prompt > [for=\"p1-name\"] {\r\n  font-variant-caps: all-petite-caps;\r\n  font-size: 1.1rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n\r\n#p1-name {\r\n  all: unset;\r\n  margin: 5px 0;\r\n  margin-left: 5px;\r\n  border-bottom: 1px solid white;\r\n  width: 75%;\r\n}\r\n\r\n.start-game-button, .play-again {\r\n  font-family: \"Poppins\";\r\n  font-size: 1.05rem;\r\n  width: 100%;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: rgb(255, 215, 140);\r\n  transition: background-color 0.25s ease-out;\r\n}\r\n\r\n.start-game-button:disabled {\r\n  background-color: grey;\r\n}\r\n\r\n@keyframes pull-open {\r\n  from {\r\n    transform: scaleY(0.1);\r\n  }\r\n  to {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n\r\n.start-game-button:not([disabled]):hover {\r\n  background-color: rgb(255, 231, 185);\r\n}\r\n\r\n.start-game-button:active, .play-again:active {\r\n  background-color: rgb(165, 125, 49);\r\n}\r\n\r\n.appear-from-bottom {\r\n  animation: appear-from-bottom 0.75s ease-in;\r\n}\r\n\r\n.appear-from-right {\r\n  animation: appear-from-right 1s ease-out;\r\n}\r\n\r\n@keyframes appear-from-bottom {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes appear-from-right {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(5px);\r\n  }\r\n  30% {\r\n    opacity: 0;\r\n    transform: translateX(5px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.summary-area {\r\n  width: 320px;\r\n  margin: 15px auto;\r\n}\r\n\r\n.victory-message {\r\n  font-family: \"Poppins\";\r\n  text-align: center;\r\n  font-size: 150%;\r\n}\r\n\r\n.winner {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 115%;\r\n  font-weight: bold;\r\n}\r\n\r\n.accuracy {\r\n  text-align: center;\r\n  font-family: \"Poppins\";\r\n  font-size: 115%;\r\n  margin: 15px auto 0px auto;\r\n}\r\n\r\n.acc-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 15px;\r\n  font-variant-caps: petite-caps;\r\n}\r\n\r\n.play-again {\r\n  margin: 15px 0;\r\n}\r\n\r\n.summary-screen {\r\n  text-shadow: 2px 0px 3px #3c3c3c;\r\n  border: 1px solid #382504;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: #211a3078;\r\n  box-shadow: 5px 3px 14px 4px #00000033;\r\n}\r\n\r\n.ship-roster-header {\r\n  font-variant-caps: all-petite-caps;\r\n  text-align: center;\r\n}\r\n\r\n.ship-name {\r\n  font-variant-caps: all-petite-caps;\r\n  margin: 15px;\r\n}\r\n\r\n.ship-name::before, .ship-name.destroyed::before {\r\n  margin-right: 10px;\r\n  font-size: 80%;\r\n  position: relative;\r\n  bottom: 1px;\r\n}"],"sourceRoot":""}]);
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
	"./favicon.png": "./src/images/favicon.png",
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
    const shipRosterLabel = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("status", "ship-roster-header");

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
    let roster = p1Gameboard.querySelector(".ship-roster");

    for (let i = 0; i < this.gameManager.shipLengths.length; i++) {
      let ship = p1Gameboard.querySelector(`#player-ship${i}`);
      let shipName = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p(ship.dataset.name, "ship-name");

      shipName.dataset.ship = ship.parentNode.dataset.ship;
      roster.append(shipName);

    }
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
  constructor(player1, player2, p1start = true, shipLengths = [2, 3, 3, 4, 5]) {
    if (GameManager.#instance !== undefined) {
      return GameManager.#instance;
    } 

    GameManager.#instance = this;
    this.players = player2.cpu ? [player1, player2] : [player2, player1];
    this.#p1turn = p1start;
    this.shipLengths = shipLengths;
    this.#gameOver = false;
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

    this.#page.setDialog(GAME_STATE.playing);

    if (this.#p1turn) {
      this.#page.setDialog(GAME_STATE.p1turn);
      this.#page.setSubDialog(SUBDIALOGS.p1turn);
    } else {
      this.#page.setDialog(GAME_STATE.p2turn);
      this.#page.setSubDialog(SUBDIALOGS.p2turn);
    }

    document.querySelector(".gameboard-area").classList.add("game-active");
    document.querySelectorAll(".selectable").forEach(
      cell => cell.classList.add("attackable"));

    const self = this;
    document.querySelectorAll(".p2.gameboard .attackable").forEach(cell => {
      cell.addEventListener("click", self.#playRound.bind(this));
    });
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
    document.querySelectorAll(".ship-name").forEach(shipName => shipName.remove());

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

      if (!this.#gameOver) {
        this.#page.setDialog(GAME_STATE.p2turn);
        this.#page.setSubDialog(SUBDIALOGS.p2turn);
  
        setTimeout(performCPUAttack.bind(this), thinkTimer);
      }
    }
  }

  /**
   * Register player ships onto a record and also list them on a on a view.
   */
  #playerRegisterShips() {
    let self = this;
    let gameboard = document.querySelector(".p1.gameboard");

    for (let i = 0; i < self.shipLengths.length; i++) {
      let ship = gameboard.querySelector(`#player-ship${i}`);
      let originCell = ship.parentNode;
      let row = parseInt(originCell.dataset.row);
      let col = parseInt(originCell.dataset.col);
      let length = ship.childElementCount;
      let vertical = ship.classList.contains("vertical");

      self.players[0].gameboard.placeShip(length, row, col, vertical);
    }

    self.#page.enumeratePlayerShipRoster();
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
        row = Math.round(Math.random() * (endIndex));
        col = Math.round(Math.random() * (endIndex));
        // debug
        // row = 0;
        // col = 0;
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
      [row, col] = this.#cpuAttackDetermineCoordinates(p2);
      
      status = p2.attack(this.players[0], row, col);
      
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

        let shipId = attackedCell.dataset.ship.split("player-ship")[1];

        let shipSunk = this.players[0].gameboard.isShipSunk(shipId);
        if (shipSunk) {
          document.querySelector(`.p1.gameboard .ship-name[data-ship="player-ship${shipId}"]`)
              .classList.add("destroyed");
          console.log("CPU sank that ship!");
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

/***/ "./src/images/favicon.png":
/*!********************************!*\
  !*** ./src/images/favicon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f87e1e0c4e972b68b3ac.png";

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
/******/ 		__webpack_require__.p = "/battleships/";
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
  githubLink.href = "https://github.com/Datrinon/battleships";
  githubIcon.href = "https://github.com/Datrinon/battleships";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0s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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxR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Ozs7Ozs7Ozs7O0FDckl5RDtBQUNaO0FBQ1o7QUFDRztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUM5RDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9jc3MvZ2FtZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL3BhZ2UuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL2dhbWUuY3NzP2EzY2YiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL3BhZ2UuY3NzPzI2NWMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC8uKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvQmF0dGxlc2hpcEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9nYW1lbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy91dGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGb3IgQ1NTIGltcG9ydGFudCB0byB0aGUgZnVuY3Rpb25pbmcgb2YgdGhlIGdhbWUuICovXFxyXFxuXFxyXFxuLm5vLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1hcmVhIHtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhpcyBwc2V1ZG8gZWxlbWVudCBoZWxwcyBrZWVwIHRoZSBjZWxscyBhbGlnbmVkIHRvZ2V0aGVyICovXFxyXFxuLyogRW1wdHkgZGl2cyBhY3Qgc3RyYW5nZWx5LCBzbyBwdXQgY29udGVudCBpbiB0aGVtLiAgKi9cXHJcXG4vKiBEZWxldGUgaXQgYW5kIHRoZW4gcnVuIHRoaXMgaW4gY29uc29sZSB0byBzZWUgdGhhdCAqL1xcclxcbi8qIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXFxcIi5jZWxsXFxcIikuZm9yRWFjaChjZWxsID0+IGNlbGwudGV4dENvbnRlbnQgPSBcXFwiQVxcXCIpOyAqL1xcclxcbi5jZWxsOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnLic7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDIzOCwgMjUyKVxcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zZWxlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlIHtcXHJcXG4gIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWdnYWJsZSAuY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM5N2ZjO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbGlkLWRyYWcge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDI1NSwgNTUpICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgNjQsIDAuMykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLnNoaXAtcGxhY2VkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNGU4YTAyO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUudmVydGljYWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXBsYWNlZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMxLCAyNSwgMjUpO1xcclxcbiAgLyogZGVidWcgKi9cXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTsgICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAyLCAyLCAwLjcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTM2LCAxMzYsIDAuODYzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1zdGFydC1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtbWlkZGxlLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtZW5kLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLXN0YXJ0LXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLW1pZGRsZS12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1lbmQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC10cmFuc3BhcmVudCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4ucDEuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGUgLnNoaXAge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4ucDEuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmV2ZXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucDIuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGU6bm90KC5hdHRhY2tlZCk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwwLDAuNik7XFxyXFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmdhbWVib2FyZC1hcmVhLmdhbWUtYWN0aXZlID4gZGl2LmdhbWVib2FyZCAuY2VsbC5hdHRhY2tlZCB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQ6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDI1JTtcXHJcXG4gIHZpc2liaWxpdHk6IHVuc2V0O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgZm9udC1zaXplOiAxNzAlO1xcclxcbiAgcmlnaHQ6IDI1JTtcXHJcXG4gIC8qIGJvdHRvbTogMjUlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2VkLm1pc3M6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCLil4tcXFwiO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYW5pbWF0aW9uOiBzbWFzaCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2VkLmhpdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlhcXFwiO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGFuaW1hdGlvbjogc21hc2ggMC41cztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbWFzaCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY1KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxLjA7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zaGlwLW5hbWU6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwi44CHXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbmFtZS5kZXN0cm95ZWQge1xcclxcbiAgY29sb3I6ICNmZjI0MjRhYjtcXHJcXG4gIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG5wLnNoaXAtbmFtZS5kZXN0cm95ZWQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwi4qa7XFxcIjtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBsYWNlci1sYWJlbCB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9nYW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzREFBc0Q7O0FBRXREO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQSw4REFBOEQ7QUFDOUQsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCxnRkFBZ0Y7QUFDaEY7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsVUFBVTtFQUNWLDJDQUEyQztFQUMzQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLFlBQVk7SUFDWixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZvciBDU1MgaW1wb3J0YW50IHRvIHRoZSBmdW5jdGlvbmluZyBvZiB0aGUgZ2FtZS4gKi9cXHJcXG5cXHJcXG4ubm8tZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWFyZWEge1xcclxcbiAgbWF4LXdpZHRoOiA5MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGlzIHBzZXVkbyBlbGVtZW50IGhlbHBzIGtlZXAgdGhlIGNlbGxzIGFsaWduZWQgdG9nZXRoZXIgKi9cXHJcXG4vKiBFbXB0eSBkaXZzIGFjdCBzdHJhbmdlbHksIHNvIHB1dCBjb250ZW50IGluIHRoZW0uICAqL1xcclxcbi8qIERlbGV0ZSBpdCBhbmQgdGhlbiBydW4gdGhpcyBpbiBjb25zb2xlIHRvIHNlZSB0aGF0ICovXFxyXFxuLyogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXFwiLmNlbGxcXFwiKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC50ZXh0Q29udGVudCA9IFxcXCJBXFxcIik7ICovXFxyXFxuLmNlbGw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcuJztcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpXFxyXFxufVxcclxcblxcclxcbi5zaGlwLXNlbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUge1xcclxcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlIC5jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzk3ZmM7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGUge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4udmFsaWQtZHJhZyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMjU1LCA1NSkgIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCA2NCwgMC4zKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5zaGlwLXBsYWNlZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM0ZThhMDI7XFxyXFxufVxcclxcblxcclxcbi5vY2N1cGllZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyMzgsIDI1Mik7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWdnYWJsZS52ZXJ0aWNhbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcGxhY2VkIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzEsIDI1LCAyNSk7XFxyXFxuICAvKiBkZWJ1ZyAqL1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpOyAgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDIsIDIsIDAuNzIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMzYsIDEzNiwgMC44NjMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya3JlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLXN0YXJ0LWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1taWRkbGUtaG9yaXpvbnRhbCB7XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1lbmQtaG9yaXpvbnRhbCB7XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtc3RhcnQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtbWlkZGxlLXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLWVuZC12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLXRyYW5zcGFyZW50IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWFyZWEge1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuN3M7XFxyXFxufVxcclxcblxcclxcbi5wMS5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrYWJsZSAuc2hpcCB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5wMS5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrYWJsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZXZlcnQ7XFxyXFxufVxcclxcblxcclxcbi5wMi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrYWJsZTpub3QoLmF0dGFja2VkKTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwwLDAsMC42KTtcXHJcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZ2FtZWJvYXJkLWFyZWEuZ2FtZS1hY3RpdmUgPiBkaXYuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2VkIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCAuY2VsbC5hdHRhY2tlZDo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMjUlO1xcclxcbiAgdmlzaWJpbGl0eTogdW5zZXQ7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBmb250LXNpemU6IDE3MCU7XFxyXFxuICByaWdodDogMjUlO1xcclxcbiAgLyogYm90dG9tOiAyNSU7ICovXFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQubWlzczo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIuKXi1xcXCI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBhbmltYXRpb246IHNtYXNoIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQuaGl0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYW5pbWF0aW9uOiBzbWFzaCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNtYXNoIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC4yNTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEuMDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbmFtZTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCLjgIdcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1uYW1lLmRlc3Ryb3llZCB7XFxyXFxuICBjb2xvcjogI2ZmMjQyNGFiO1xcclxcbiAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbnAuc2hpcC1uYW1lLmRlc3Ryb3llZDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCLiprtcXFwiO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VyLWxhYmVsIHtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZvciBDU1MgdGhhdCBoYXMgYWVzdGhldGljIHB1cnBvc2VzLiAqL1xcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNTNkZWcsIHJnYigxMSAzNSA1NiAvIDg5JSksIHJnYig5NCAyMDcgMjE5IC8gNTQlKSA1NS43MSUpLFxcclxcbiAgbGluZWFyLWdyYWRpZW50KDI2NWRlZywgcmdiKDIzOCA4IDI2IC8gOTAlKSwgcmdiKDE4IDM4IDg4IC8gNzMlKSA3MC43MSUpLFxcclxcbiAgbGluZWFyLWdyYWRpZW50KDE0MmRlZywgcmdiKDEzMyAxMzEgMjA1IC8gODMlKSwgcmdiKDQ5IDgyIDEwMyAvIDc3JSkgNzAuNzElKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBmbGV4OiAxIDAgYXV0bztcXHJcXG59XFxyXFxuLmZvb3RlciB7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuZ2gtaWNvbiB7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICB0ZXh0LXNoYWRvdzogNHB4IDJweCAycHggIzAwMDAwMDQ1O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7ICBcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjI1JTsgIFxcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yIHtcXHJcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogNjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tcGljIHtcXHJcXG4gIHdpZHRoOiA2NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxNnB4IDRweCAjNDU0MzQzOTQ7XFxyXFxufVxcclxcblxcclxcbi5wMSAuZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wMSAuZ2FtZWJvYXJkLWdyaWQgPiAuY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiAxMiAzMiAvIDczJSk7XFxyXFxufVxcclxcblxcclxcbi5wMiAuZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wMS5nYW1lYm9hcmQgLmNlbGwge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1LDc5LDEzMSk7XFxyXFxufVxcclxcblxcclxcbi5wMi5nYW1lYm9hcmQgLmNlbGw6bm90KC5jcHUtc2hpcC1wbGFjZWQpIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzEsIDI1LCAyNSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAyLCAyLCAwLjcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1vd25lciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEyNSU7XFxyXFxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXNtYWxsLWNhcHM7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuZHJhZ2dhYmxlIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGUgZGl2LmNlbGwge1xcclxcbiAgYm9yZGVyOiAzcHggb3V0c2V0ICMxOTY0YzQ7XFxyXFxuICB3aWR0aDogMTkuN3B4O1xcclxcbiAgaGVpZ2h0OiAxOS4xcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLXBsYWNlZC52ZXJ0aWNhbCBkaXYuY2VsbCB7XFxyXFxuICBoZWlnaHQ6IDE5LjdweDtcXHJcXG4gIHdpZHRoOiAxOS4xcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbmRpdi5zaGlwLXBsYWNlZCB7XFxyXFxuICB0b3A6IC0ycHg7XFxyXFxuICBsZWZ0OiAtMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OWRkMTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuZHJhZ2dhYmxlOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDE4NCwgMjMzLCAyNTUsIDAuNTYyKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuZHJhZ2dhYmxlOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDEwMCU7IFxcclxcbiAgbGVmdDogMTVweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcclxcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibGFjayBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuZHJhZ2dhYmxlOmhvdmVyOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtbmFtZSk7XFxyXFxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXNtYWxsLWNhcHM7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSw0NSw0NSk7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBjb2xvcjogYmVpZ2U7XFxyXFxuICBib3R0b206IGNhbGMoMTAwJSArIDVweCk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLm51bWJlcmluZyAubnVtYmVyLWxhYmVsIHtcXHJcXG4gIG1hcmdpbjogNnB4IGF1dG87XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgZm9udC1zaXplOiAxMTAlO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWFyZWEge1xcclxcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2ctYXJlYSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMXB4IDZweCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxyXFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLWFyZWEgLmRpYWxvZy1tc2cge1xcclxcbiAgZm9udC1zaXplOiAxNjUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZy1hcmVhIC5jb250cm9scy1oZWxwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IC4yNWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1hcmVhIHtcXHJcXG4gIHdpZHRoOiAyOTBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zZWxlY3Rpb24gPiAqIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBsYWNlciB7XFxyXFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VyLWxhYmVsLCAuc3RhcnQtZ2FtZS1wcm9tcHQgPiBbZm9yPVxcXCJwMS1uYW1lXFxcIl0ge1xcclxcbiAgZm9udC12YXJpYW50LWNhcHM6IGFsbC1wZXRpdGUtY2FwcztcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jcDEtbmFtZSB7XFxyXFxuICBhbGw6IHVuc2V0O1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZ2FtZS1idXR0b24sIC5wbGF5LWFnYWluIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxNSwgMTQwKTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lLWJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHB1bGwtb3BlbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4xKTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjMxLCAxODUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZ2FtZS1idXR0b246YWN0aXZlLCAucGxheS1hZ2FpbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTI1LCA0OSk7XFxyXFxufVxcclxcblxcclxcbi5hcHBlYXItZnJvbS1ib3R0b20ge1xcclxcbiAgYW5pbWF0aW9uOiBhcHBlYXItZnJvbS1ib3R0b20gMC43NXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcGVhci1mcm9tLXJpZ2h0IHtcXHJcXG4gIGFuaW1hdGlvbjogYXBwZWFyLWZyb20tcmlnaHQgMXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyLWZyb20tYm90dG9tIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXItZnJvbS1yaWdodCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcclxcbiAgfVxcclxcbiAgMzAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeS1hcmVhIHtcXHJcXG4gIHdpZHRoOiAzMjBweDtcXHJcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udmljdG9yeS1tZXNzYWdlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE1MCU7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDExNSU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjY3VyYWN5IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICBmb250LXNpemU6IDExNSU7XFxyXFxuICBtYXJnaW46IDE1cHggYXV0byAwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFjYy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBwZXRpdGUtY2FwcztcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXktYWdhaW4ge1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5LXNjcmVlbiB7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDBweCAzcHggIzNjM2MzYztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODI1MDQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMWEzMDc4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDNweCAxNHB4IDRweCAjMDAwMDAwMzM7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXJvc3Rlci1oZWFkZXIge1xcclxcbiAgZm9udC12YXJpYW50LWNhcHM6IGFsbC1wZXRpdGUtY2FwcztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbmFtZSB7XFxyXFxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXBldGl0ZS1jYXBzO1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1uYW1lOjpiZWZvcmUsIC5zaGlwLW5hbWUuZGVzdHJveWVkOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiA4MCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDFweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9wYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5Q0FBeUM7QUFFekM7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHdJQUF3STtFQUN4SSxZQUFZO0VBQ1o7OzhFQUU0RTtFQUM1RSw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixl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RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZvciBDU1MgdGhhdCBoYXMgYWVzdGhldGljIHB1cnBvc2VzLiAqL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM1M2RlZywgcmdiKDExIDM1IDU2IC8gODklKSwgcmdiKDk0IDIwNyAyMTkgLyA1NCUpIDU1LjcxJSksXFxyXFxuICBsaW5lYXItZ3JhZGllbnQoMjY1ZGVnLCByZ2IoMjM4IDggMjYgLyA5MCUpLCByZ2IoMTggMzggODggLyA3MyUpIDcwLjcxJSksXFxyXFxuICBsaW5lYXItZ3JhZGllbnQoMTQyZGVnLCByZ2IoMTMzIDEzMSAyMDUgLyA4MyUpLCByZ2IoNDkgODIgMTAzIC8gNzclKSA3MC43MSUpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIGZsZXg6IDEgMCBhdXRvO1xcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5naC1pY29uIHtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4gIHRleHQtc2hhZG93OiA0cHggMnB4IDJweCAjMDAwMDAwNDU7XFxyXFxuICBtYXJnaW4tbGVmdDogMTVweDsgIFxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyMjUlOyAgXFxyXFxufVxcclxcblxcclxcbi5hdXRob3Ige1xcclxcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiA2NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1waWMge1xcclxcbiAgd2lkdGg6IDY0cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDE2cHggNHB4ICM0NTQzNDM5NDtcXHJcXG59XFxyXFxuXFxyXFxuLnAxIC5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnAxIC5nYW1lYm9hcmQtZ3JpZCA+IC5jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyIDEyIDMyIC8gNzMlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAyIC5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdhbWVib2FyZCAuY2VsbCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUsNzksMTMxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdhbWVib2FyZCAuY2VsbDpub3QoLmNwdS1zaGlwLXBsYWNlZCkge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMSwgMjUsIDI1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDIsIDIsIDAuNzIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLW93bmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTI1JTtcXHJcXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtc21hbGwtY2FwcztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGUge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLmRyYWdnYWJsZSBkaXYuY2VsbCB7XFxyXFxuICBib3JkZXI6IDNweCBvdXRzZXQgIzE5NjRjNDtcXHJcXG4gIHdpZHRoOiAxOS43cHg7XFxyXFxuICBoZWlnaHQ6IDE5LjFweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAtcGxhY2VkLnZlcnRpY2FsIGRpdi5jZWxsIHtcXHJcXG4gIGhlaWdodDogMTkuN3B4O1xcclxcbiAgd2lkdGg6IDE5LjFweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZGl2LnNoaXAtcGxhY2VkIHtcXHJcXG4gIHRvcDogLTJweDtcXHJcXG4gIGxlZnQ6IC0ycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5ZGQxO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGU6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMTg0LCAyMzMsIDI1NSwgMC41NjIpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGU6aG92ZXI6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTAwJTsgXFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxuICBib3JkZXItd2lkdGg6IDVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrIGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGU6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1uYW1lKTtcXHJcXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtc21hbGwtY2FwcztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LDQ1LDQ1KTtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIGNvbG9yOiBiZWlnZTtcXHJcXG4gIGJvdHRvbTogY2FsYygxMDAlICsgNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwubnVtYmVyaW5nIC5udW1iZXItbGFiZWwge1xcclxcbiAgbWFyZ2luOiA2cHggYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBmb250LXNpemU6IDExMCU7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtYXJlYSB7XFxyXFxuICBtYXJnaW46IDE1cHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZy1hcmVhIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAxcHggNnB4IHJnYigxMDAsIDEwMCwgMTAwKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2ctYXJlYSAuZGlhbG9nLW1zZyB7XFxyXFxuICBmb250LXNpemU6IDE2NSU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLWFyZWEgLmNvbnRyb2xzLWhlbHAge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBsaW5lLWhlaWdodDogLjI1aW47XFxyXFxufVxcclxcblxcclxcbi5tZW51LWFyZWEge1xcclxcbiAgd2lkdGg6IDI5MHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXNlbGVjdGlvbiA+ICoge1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1wbGFjZXItbGFiZWwsIC5zdGFydC1nYW1lLXByb21wdCA+IFtmb3I9XFxcInAxLW5hbWVcXFwiXSB7XFxyXFxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXBldGl0ZS1jYXBzO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNwMS1uYW1lIHtcXHJcXG4gIGFsbDogdW5zZXQ7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lLWJ1dHRvbiwgLnBsYXktYWdhaW4ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjE1LCAxNDApO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWdhbWUtYnV0dG9uOmRpc2FibGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcHVsbC1vcGVuIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjEpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWdhbWUtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzEsIDE4NSk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lLWJ1dHRvbjphY3RpdmUsIC5wbGF5LWFnYWluOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxMjUsIDQ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcGVhci1mcm9tLWJvdHRvbSB7XFxyXFxuICBhbmltYXRpb246IGFwcGVhci1mcm9tLWJvdHRvbSAwLjc1cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwZWFyLWZyb20tcmlnaHQge1xcclxcbiAgYW5pbWF0aW9uOiBhcHBlYXItZnJvbS1yaWdodCAxcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXItZnJvbS1ib3R0b20ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFwcGVhci1mcm9tLXJpZ2h0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XFxyXFxuICB9XFxyXFxuICAzMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5LWFyZWEge1xcclxcbiAgd2lkdGg6IDMyMHB4O1xcclxcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi52aWN0b3J5LW1lc3NhZ2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTE1JTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWNjdXJhY3kge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMTE1JTtcXHJcXG4gIG1hcmdpbjogMTVweCBhdXRvIDBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYWNjLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgZm9udC12YXJpYW50LWNhcHM6IHBldGl0ZS1jYXBzO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheS1hZ2FpbiB7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnktc2NyZWVuIHtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMHB4IDNweCAjM2MzYzNjO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4MjUwNDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjExYTMwNzg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggM3B4IDE0cHggNHB4ICMwMDAwMDAzMztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcm9zdGVyLWhlYWRlciB7XFxyXFxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXBldGl0ZS1jYXBzO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1uYW1lIHtcXHJcXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtcGV0aXRlLWNhcHM7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLW5hbWU6OmJlZm9yZSwgLnNoaXAtbmFtZS5kZXN0cm95ZWQ6OmJlZm9yZSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDgwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMXB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmF0dGxlc2hpcC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYmF0dGxlc2hpcC5wbmdcIixcblx0XCIuL2Zhdmljb24ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2Zhdmljb24ucG5nXCIsXG5cdFwiLi9naC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZ2gucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiOyIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuL3V0aWxpdHlcIjtcclxuXHJcbmltcG9ydCBsb2dvIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZyc7XHJcbmltcG9ydCB7IEdBTUVfU1RBVEUgfSBmcm9tIFwiLi9nYW1lbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBzZXROYW1lIH0gZnJvbSBcIi4vc2hpcFwiO1xyXG4vKipcclxuICogQ3JlYXRlcyBlbGVtZW50cyBmb3IgQmF0dGxlc2hpcC5cclxuICovXHJcbiBleHBvcnQgY2xhc3MgQmF0dGxlc2hpcEVsZW1lbnRzIHtcclxuXHJcbiAgI2RpYWxvZ0hvbGRlcjtcclxuICAjZ2FtZUNvbnRhaW5lcjtcclxuICBnYW1lTWFuYWdlcjtcclxuICAjY3VycmVudERyYWdnZWRTaGlwSWQ7XHJcbiAgI2N1cnJlbnREcmFnZ2VkTGVuZ3RoO1xyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lTWFuYWdlcikge1xyXG4gICAgdGhpcy5nYW1lTWFuYWdlciA9IGdhbWVNYW5hZ2VyO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGluZyA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBcImhlYWRlclwiKTtcclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcInRpdGxlLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBjb21wb25lbnQuaGVhZGluZyhcIkJhdHRsZXNoaXBzXCIsIDEsIFwidGl0bGVcIik7XHJcbiAgICBjb25zdCB0aXRsZUljb24gPSBjb21wb25lbnQuaW1nKGxvZ28sIFwibG9nby1waWNcIik7XHJcbiAgICBjb25zdCBhdXRob3JMYWJlbCA9IGNvbXBvbmVudC5wKFwiYnkgRGFuIFQuXCIsIFwiYXV0aG9yXCIpO1xyXG5cclxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZCh0aXRsZUljb24sIHRpdGxlTGFiZWwpO1xyXG5cclxuICAgIGhlYWRpbmcuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBhdXRob3JMYWJlbCk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRpbmc7XHJcbiAgfVxyXG5cclxuICBnYW1lQXJlYSgpIHtcclxuICAgIHRoaXMuI2dhbWVDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZ2FtZS1hcmVhXCIpO1xyXG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImdhbWVib2FyZC1hcmVhXCIpO1xyXG4gICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImRpYWxvZy1hcmVhXCIpO1xyXG4gICAgY29uc3QgbWVudUFyZWEgPSBjb21wb25lbnQuZGl2KFwibWVudS1hcmVhXCIpO1xyXG4gICAgY29uc3Qgc3VtbWFyeUFyZWEgPSBjb21wb25lbnQuZGl2KFwic3VtbWFyeS1hcmVhXCIsIFwibm8tZGlzcGxheVwiKTtcclxuXHJcbiAgICB0aGlzLiNnYW1lQ29udGFpbmVyLmFwcGVuZChkaWFsb2dDb250YWluZXIsIGdhbWVib2FyZENvbnRhaW5lciwgbWVudUFyZWEsIHN1bW1hcnlBcmVhKTtcclxuXHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kKHRoaXMuI2dhbWVib2FyZChcIlBsYXllclwiLCBcInAxXCIpLCB0aGlzLiNnYW1lYm9hcmQoXCJDUFVcIiwgXCJwMlwiLCBcIm5vLWRpc3BsYXlcIikpO1xyXG5cclxuICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmQodGhpcy4jZGlhbG9nKCkpO1xyXG5cclxuICAgIG1lbnVBcmVhLmFwcGVuZCh0aGlzLiNzaGlwUGxhY2VtZW50KCkpO1xyXG4gICAgbWVudUFyZWEuYXBwZW5kKHRoaXMuI3N0YXJ0R2FtZVByb21wdCgpKTtcclxuXHJcbiAgICB0aGlzLmdlbmVyYXRlRHJhZ2dhYmxlU2hpcHMoKTtcclxuICAgIHRoaXMuI2VuYWJsZURyYWdBbmREcm9wT25DZWxsKCk7XHJcblxyXG4gICAgc3VtbWFyeUFyZWEuYXBwZW5kKHRoaXMuI3N1bW1hcnkoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuI2dhbWVDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYSBjbGlja2FibGUgZ3JpZCBiYXNlZCBvbiB0aGUgZ2FtZSBtYW5hZ2VyJ3MgZ2FtZWJvYXJkIHNpemUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXllck5hbWUgOiB0aGUgbmFtZSBvZiB0aGUgcGxheWVyOyB1c2VkIGFzIGEgY2xhc3MgbmFtZSB0byBcclxuICAgKiBpZGVudGlmeSB0aGUgZ2FtZWJvYXJkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZXMgOiBBZGRpdGlvbmFsIGNsYXNzIG5hbWVzIHRvIGlkZW50aWZ5IHRoZSBnYW1lYm9hcmQgYnkuXHJcbiAgICovXHJcbiAgI2dhbWVib2FyZChwbGF5ZXJOYW1lLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBjb21wb25lbnQuZGl2KFwiZ2FtZWJvYXJkXCIsIC4uLmNsYXNzTmFtZXMpO1xyXG4gICAgY29uc3QgZ2FtZWJvYXJkR3JpZCA9IGNvbXBvbmVudC5kaXYoXCJnYW1lYm9hcmQtZ3JpZFwiKTtcclxuXHJcbiAgICBjb25zdCBncmlkU2l6ZSA9IHRoaXMuZ2FtZU1hbmFnZXIucGxheWVyc1swXS5nYW1lYm9hcmQuc2l6ZTtcclxuICAgIGNvbnN0IG51bWJlckNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiLCBcIm51bWJlcmluZ1wiKTtcclxuICAgIGNvbnN0IG51bWJlclRleHQgPSBjb21wb25lbnQucChcIlwiLCBcIm51bWJlci1sYWJlbFwiKTtcclxuXHJcbiAgICBjb25zdCBzaGlwUm9zdGVyID0gY29tcG9uZW50LmRpdihcInNoaXAtcm9zdGVyXCIsIFwibm8tZGlzcGxheVwiKTtcclxuICAgIGNvbnN0IHNoaXBSb3N0ZXJMYWJlbCA9IGNvbXBvbmVudC5wKFwic3RhdHVzXCIsIFwic2hpcC1yb3N0ZXItaGVhZGVyXCIpO1xyXG5cclxuICAgIG51bWJlckNlbGwuYXBwZW5kKG51bWJlclRleHQpO1xyXG4gICAgZ2FtZWJvYXJkR3JpZC5wcmVwZW5kKGNvbXBvbmVudC5kaXYoXCJjZWxsXCIsIFwiYmxhbmtcIikpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSByb3cgbnVtYmVyaW5nXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcclxuICAgICAgbnVtYmVyVGV4dC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgICBnYW1lYm9hcmRHcmlkLmFwcGVuZChudW1iZXJDZWxsLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlIGNvbHVtbiBudW1iZXJpbmcgYW5kIGNlbGxzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcclxuICAgICAgbnVtYmVyVGV4dC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgICBnYW1lYm9hcmRHcmlkLmFwcGVuZChudW1iZXJDZWxsLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRTaXplOyBqKyspIHtcclxuICAgICAgICBsZXQgY2VsbCA9IGNvbXBvbmVudC5kaXYoXCJjZWxsXCIsIFwic2VsZWN0YWJsZVwiKTtcclxuICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gaTtcclxuICAgICAgICBjZWxsLmRhdGFzZXQuY29sID0gajtcclxuICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IFwiXCI7XHJcbiAgICAgICAgZ2FtZWJvYXJkR3JpZC5hcHBlbmQoY2VsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnYW1lYm9hcmQuYXBwZW5kKGdhbWVib2FyZEdyaWQpO1xyXG5cclxuICAgIC8vIEFwcGx5IGhlYWRlcnMgZm9yIHRoZSBnYW1lYm9hcmRcclxuICAgIGdhbWVib2FyZC5wcmVwZW5kKGNvbXBvbmVudC5oZWFkaW5nKHBsYXllck5hbWUsIDIsIFwiZ2FtZWJvYXJkLW93bmVyXCIpKTtcclxuXHJcbiAgICAvLyBBcHBseSByb3N0ZXIuXHJcbiAgICBzaGlwUm9zdGVyLmFwcGVuZChzaGlwUm9zdGVyTGFiZWwpO1xyXG4gICAgZ2FtZWJvYXJkLmFwcGVuZChzaGlwUm9zdGVyKTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiBnYW1lYm9hcmQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYSBkaWFsb2cgbWVzc2FnZSwgd2hpY2ggaXMgdXNlZCB0byBcclxuICAgKiBnaXZlIHRoZSB1c2VyIGRpcmVjdGlvbnMgb24gZWFjaCBwaGFzZSBvZiB0aGUgZ2FtZS5cclxuICAgKi9cclxuICAjZGlhbG9nKCkge1xyXG4gICAgbGV0IGRpYWxvZ0NvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJkaWFsb2dcIik7XHJcbiAgICBsZXQgZGlhbG9nTXNnID0gY29tcG9uZW50LnAoR0FNRV9TVEFURS53ZWxjb21lUHJvbXB0LCBcImRpYWxvZy1tc2dcIik7XHJcbiAgICBsZXQgc3ViRGlhbG9nID0gY29tcG9uZW50LmRpdihcInN1YmRpYWxvZy1hcmVhXCIpO1xyXG4gICAgXHJcbiAgICBkaWFsb2dDb250YWluZXIuYXBwZW5kKGRpYWxvZ01zZywgc3ViRGlhbG9nKTtcclxuXHJcbiAgICB0aGlzLiNkaWFsb2dIb2xkZXIgPSBkaWFsb2dDb250YWluZXI7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ0NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgZGlhbG9nIGZvciB0aGUgYmF0dGxlc2hpcCBnYW1lLiBQcmVmZXJhYmx5LCB1c2UgbWVzc2FnZXMgZnJvbSB0aGVcclxuICAgKiBnYW1lbWFuYWdlciBHQU1FX1NUQVRFIG9iamVjdC5cclxuICAgKiBAcGFyYW0ge30gbWVzc2FnZSBcclxuICAgKi9cclxuICBzZXREaWFsb2cobWVzc2FnZSkge1xyXG4gICAgbGV0IG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlhbG9nLW1zZ1wiKTtcclxuICAgIG1zZy50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgICBVdGlsaXR5LnRyaWdnZXJBbmltYXRpb24obXNnLCBcImFwcGVhci1mcm9tLWJvdHRvbVwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBzdWJkaWFsb2cgaW4gdGhlIGRpYWxvZyBhcmVhLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ1tdfSBtZXNzYWdlcyBcclxuICAgKi9cclxuICBzZXRTdWJEaWFsb2coLi4ubWVzc2FnZXMpIHtcclxuICAgIGNvbnN0IHNkYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViZGlhbG9nLWFyZWFcIik7XHJcbiAgICBVdGlsaXR5LnJlbW92ZUFsbENoaWxkcmVuKHNkYSk7XHJcblxyXG4gICAgbWVzc2FnZXMuZm9yRWFjaChtc2cgPT4ge1xyXG4gICAgICBsZXQgcCA9IGNvbXBvbmVudC5wKG1zZywgXCJzdWJkaWFsb2ctbWVzc2FnZVwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJkaWFsb2ctYXJlYVwiKS5hcHBlbmQocCk7XHJcbiAgICAgIFV0aWxpdHkudHJpZ2dlckFuaW1hdGlvbihwLCBcImFwcGVhci1mcm9tLXJpZ2h0XCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYW4gaW52ZW50b3J5IG9mIHNoaXBzIGFuZCBsZXRzIHRoZW0gYmUgZHJhZ2dlZCBieSB0aGUgcGxheWVyLlxyXG4gICAqL1xyXG4gICNzaGlwUGxhY2VtZW50KCkge1xyXG4gICAgbGV0IHNoaXBJbnZlbnRvcnkgPSBjb21wb25lbnQuZGl2KFwic2hpcC1wbGFjZXJcIik7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IGNvbXBvbmVudC5oZWFkaW5nKFwiWW91ciBBcm1hZGE6XCIsIDMsIFwic2hpcC1wbGFjZXItbGFiZWxcIik7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gY29tcG9uZW50LmRpdihcInNoaXAtc2VsZWN0aW9uXCIpO1xyXG5cclxuICAgIHNoaXBJbnZlbnRvcnkuYXBwZW5kKGhlYWRlciwgc2VsZWN0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gc2hpcEludmVudG9yeTtcclxuICB9XHJcblxyXG4gIC8qKiBcclxuICAgKiBSZWdlbmVyYXRlIGRyYWdnYWJsZSBzaGlwcyB3aXRoaW4gLnNoaXAtc2VsZWN0aW9uLlxyXG4gICAqL1xyXG4gIGdlbmVyYXRlRHJhZ2dhYmxlU2hpcHMoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLiNnYW1lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1zZWxlY3Rpb25cIilcclxuICAgIHRoaXMuZ2FtZU1hbmFnZXIuc2hpcExlbmd0aHMuZm9yRWFjaCgoc2hpcExlbiwgaW5kZXgpID0+IHtcclxuICAgICAgbGV0IHNoaXAgPSBjb21wb25lbnQuZGl2KFwic2hpcFwiLCBcImRyYWdnYWJsZVwiKTtcclxuICAgICAgc2hpcC5pZCA9IGBwbGF5ZXItc2hpcCR7aW5kZXh9YDtcclxuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW47IGkrKykge1xyXG4gICAgICAgIGxldCBjZWxsID0gY29tcG9uZW50LmRpdihcImNlbGxcIik7XHJcbiAgICAgICAgc2hpcC5hcHBlbmQoY2VsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLiNzaGlwT25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgdGhpcy4jc2hpcE9uRHJhZ0VuZC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIHNoaXAuZGF0YXNldC5uYW1lID0gc2V0TmFtZShzaGlwTGVuKTtcclxuXHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoc2hpcCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheSBkcm9wIGd1aWRlcyB3aGVuIGEgc2hpcCBpcyBiZWluZyBkcmFnZ2VkIG92ZXIgYSBnYW1lYm9hcmQuXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZSAtIGRyYWcgb3ZlciBldmVudC5cclxuICAgKi9cclxuICAjZGlzcGxheURyb3BHdWlkZXMoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgbGV0IGhvdmVyQ2VsbCA9IFV0aWxpdHkuZ2V0TWF0Y2hpbmdQYXJlbnQoZS50YXJnZXQsIFwiLnNlbGVjdGFibGVcIik7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWR9YCkuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuI2N1cnJlbnREcmFnZ2VkU2hpcElkfWApLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpKSB7XHJcbiAgICAgIC8vIGFwcGx5IHZlcnRpY2FsIGd1aWRlLlxyXG4gICAgICBsZXQgY29sID0gaG92ZXJDZWxsLmRhdGFzZXQuY29sO1xyXG4gICAgICBsZXQgY2VsbHNDb2wgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtY29sPVwiJHtjb2x9XCJdYCkpO1xyXG4gICAgICBsZXQgaW5kZXggPSBjZWxsc0NvbC5pbmRleE9mKGhvdmVyQ2VsbCk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggKyB0aGlzLiNjdXJyZW50RHJhZ2dlZExlbmd0aCA8PSBjZWxsc0NvbC5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIC8vIG5vdCBhIHZhbGlkIHBsYWNlbWVudC5cclxuICAgICAgICAgIGlmIChjZWxsc0NvbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJvY2N1cGllZFwiKVxyXG4gICAgICAgICAgICAmJiBjZWxsc0NvbFtpXS5kYXRhc2V0LnNoaXAgIT09IHRoaXMuI2N1cnJlbnREcmFnZ2VkU2hpcElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI3JlbW92ZURyYWdHdWlkZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjZWxsc0NvbFtpXS5jbGFzc0xpc3QuYWRkKFwidmFsaWQtZHJhZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGFwcGx5IGhvcml6b250YWwgZ3VpZGVcclxuICAgICAgbGV0IHJvdyA9IGhvdmVyQ2VsbC5kYXRhc2V0LnJvdztcclxuICAgICAgbGV0IGNlbGxzUm93ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLXJvdz1cIiR7cm93fVwiXWApKTtcclxuICAgICAgbGV0IGluZGV4ID0gY2VsbHNSb3cuaW5kZXhPZihob3ZlckNlbGwpO1xyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJob3ZlcmluZyBvdmVyIGluZGV4OiBcIiArIGluZGV4KTtcclxuXHJcbiAgICAgIGlmIChpbmRleCArIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoIDw9IGNlbGxzUm93Lmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgLy8gbm90IGEgdmFsaWQgcGxhY2VtZW50LlxyXG4gICAgICAgICAgaWYgKGNlbGxzUm93W2ldLmNsYXNzTGlzdC5jb250YWlucyhcIm9jY3VwaWVkXCIpXHJcbiAgICAgICAgICAgICYmIGNlbGxzUm93W2ldLmRhdGFzZXQuc2hpcCAhPT0gdGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWQpIHtcclxuICAgICAgICAgICAgdGhpcy4jcmVtb3ZlRHJhZ0d1aWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjZWxsc1Jvd1tpXS5jbGFzc0xpc3QuYWRkKFwidmFsaWQtZHJhZ1wiKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHtpbmRleCwgY3VycmVudERyYWdnZWRMZW5ndGgsIGl9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBkcmFnIGd1aWRlLlxyXG4gICAqL1xyXG4gICNyZW1vdmVEcmFnR3VpZGUoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVwiKVxyXG4gICAgLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkLWRyYWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFmdGVyIHRoZSB1c2VyIGRyb3BzIHRoZSBzaGlwLCBwbGFjZXMgdGhlIHNoaXAuXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZSAtIERyb3AgZXZlbnQuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgI3BsYWNlU2hpcE9uRHJvcChlKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZH1gKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgIC8vIG9ubHkgd2hlbiB0aGUgYXJlYSBpcyBhIHZhbGlkLWRyYWcgZG8gd2UgYWRkIGl0IGluLiBvdGhlcndpc2UsIG5vcGUuXHJcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInZhbGlkLWRyYWdcIikpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuI3JlbW92ZURyYWdHdWlkZSgpO1xyXG5cclxuICAgIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XHJcblxyXG4gICAgLy8gYmVmb3JlIG1vdmluZyB0aGUgc2hpcCwgZGV0ZXJtaW5lIGlmIGl0IGhhcyBiZWVuIHBsYWNlZCBhbHJlYWR5Li4uIFxyXG4gICAgLy8gdGhpcyBpcyB0cnVlIGlmIHRoZSBzaGlwIGlzIGluc2lkZSBhIHNlbGVjdGFibGUgY2VsbC5cclxuICAgIGxldCBsYXN0UGxhY2VkTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VsZWN0YWJsZSAjJHtpZH1gKTtcclxuXHJcbiAgICAvLyBpZiBzbyB3ZSBuZWVkIHRvIHJlbW92ZSBvY2N1cGllZCBmcm9tIHN1Y2ggY2VsbHMuXHJcbiAgICBpZiAobGFzdFBsYWNlZExvY2F0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgIGxldCBjZWxscztcclxuICAgICAgbGV0IHZlcnRpY2FsID0gbGFzdFBsYWNlZExvY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpO1xyXG5cclxuICAgICAgLy8gcGFyZW50Tm9kZSBpcyB0aGUgY2VsbC5cclxuICAgICAgbGFzdFBsYWNlZExvY2F0aW9uID0gbGFzdFBsYWNlZExvY2F0aW9uLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICBsZXQgY29sID0gbGFzdFBsYWNlZExvY2F0aW9uLmRhdGFzZXQuY29sO1xyXG4gICAgICAgIGNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLWNvbD1cIiR7Y29sfVwiXWApKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZW1vdmUgb2NjdXBpZWQgbWFya2luZyBmcm9tIHRob3NlIGNlbGxzLlxyXG4gICAgICAgIGxldCByb3cgPSBsYXN0UGxhY2VkTG9jYXRpb24uZGF0YXNldC5yb3c7XHJcbiAgICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaW5kZXggPSBjZWxscy5pbmRleE9mKGxhc3RQbGFjZWRMb2NhdGlvbik7XHJcblxyXG4gICAgICAvLyBjb2xvciB0aGUgc3Vic2VxdWVudCBjZWxscy5cclxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyB0aGlzLiNjdXJyZW50RHJhZ2dlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgIGNlbGxzW2ldLmRhdGFzZXQuc2hpcCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGxhY2VkQ2VsbCA9IGUudGFyZ2V0O1xyXG4gICAgLy8gbW92ZSB0aGUgc2hpcFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuY2xhc3NMaXN0LmFkZChcInNoaXAtcGxhY2VkXCIpO1xyXG4gICAgcGxhY2VkQ2VsbC5hcHBlbmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkpO1xyXG5cclxuICAgIGxldCB2ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpO1xyXG4gICAgbGV0IGNlbGxzO1xyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBsZXQgY29sID0gcGxhY2VkQ2VsbC5kYXRhc2V0LmNvbDtcclxuICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtY29sPVwiJHtjb2x9XCJdYCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZ2V0IHRoZSByb3csIGluZGV4LCBhbmQgcGxhY2UgdGhlcmVhZnRlciBvZiB0aGUgcGxhY2VkIGNlbGwuXHJcbiAgICAgIGxldCByb3cgPSBwbGFjZWRDZWxsLmRhdGFzZXQucm93O1xyXG4gICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke3Jvd31cIl1gKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluZGV4ID0gY2VsbHMuaW5kZXhPZihwbGFjZWRDZWxsKTtcclxuXHJcbiAgICAvLyBjb2xvciB0aGUgc3Vic2VxdWVudCBjZWxscy5cclxuICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIik7XHJcbiAgICAgIGNlbGxzW2ldLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFsbG93IHRoZSBzaGlwIHRvIGJlIHJvdGF0ZWQuXHJcbiAgICB0aGlzLiNhbGxvd1BsYWNlZFNoaXBSb3RhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udGFpbnMgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byBlbmFibGUgZHJhZyAnbicgZHJvcCBvbiB0aGUgZ2FtZWJvYXJkIHdpdGggcm90YXRpb24uXHJcbiAgICogV29ya3Mgd2l0aCB0aGUgZHJhZyBhbmQgZHJvcCBBUEksIHNvIGl0IHdvcmtzIHRvIGFzc2lnbiBjYWxsYmFja3MgdG8gdGhlIFxyXG4gICAqIGRyYWdnYWJsZSBpdGVtcywgYW5kIGFsbCB0aGUgZHJvcHBhYmxlIHpvbmUgaXQgcGVydGFpbnMgdG8uIEluIHRoaXMgY2FzZSxcclxuICAgKiB0aGUgc2hpcHMgYXJlIHRoZSBkcmFnZ2FibGVzLCBhbmQgdGhlIGRyb3Agem9uZXMgYXJlIGFsbCB0aGUgY2VsbHMgb2YgXHJcbiAgICogcGxheWVyIDEncyBnYW1lYm9hcmQuXHJcbiAgICovXHJcbiAgI2VuYWJsZURyYWdBbmREcm9wT25DZWxsKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAvLyB0aGlzLmFkZFNoaXBEcmFnSGFuZGxlcnMoKTtcclxuXHJcbiAgICAvLyBhbGwgY2VsbHMgdGhhdCBhcmUgc2VsZWN0YWJsZSBhcmUgZHJvcHBhYmxlIGFyZWFzLlxyXG4gICAgdGhpcy4jZ2FtZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVwiKS5mb3JFYWNoKGNlbGwgPT4ge1xyXG5cclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgc2VsZi4jZGlzcGxheURyb3BHdWlkZXMuYmluZChzZWxmKSk7XHJcbiAgICAgIC8vIHdoZW4gdGhlIGRyYWcgZWxlbWVudCBsZWF2ZXMgZHJvcHBhYmxlIHpvbmUsIHJlbW92ZSBhbGwgdmFsaWQgZHJhZ1xyXG4gICAgICAvLyBpdCdsbCBqdXN0IGJlIHJlY3JlYXRlZCBieSB2YWxpZC1kcmFnLlxyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgc2VsZi4jcmVtb3ZlRHJhZ0d1aWRlKTtcclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBzZWxmLiNwbGFjZVNoaXBPbkRyb3AuYmluZChzZWxmKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICNzaGlwT25EcmFnU3RhcnQoZSkge1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuaWQpO1xyXG5cclxuICAgIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoID0gZS50YXJnZXQuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICB0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZCA9IGUudGFyZ2V0LmlkID8/IGUudGFyZ2V0LmRhdGFzZXQuc2hpcDtcclxuICAgIC8vIGJsYW5rIGltYWdlXHJcbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoaW1nLCAwLCAwKTtcclxuICB9XHJcblxyXG4gICNzaGlwT25EcmFnRW5kKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWR9YClcclxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyBmb3Igc2hpcHMgdG8gYmUgcm90YXRlZDsgdGhpcyBpcyBpbnZva2VkIGVhY2ggdGltZSBhIHNoaXAgaXMgcGxhY2VkLFxyXG4gICAqIHRvIGFsbG93IHNoaXBzLCBvbiB0aGUgZ2FtZWJvYXJkLCB0byBiZSByb3RhdGVkLlxyXG4gICAqL1xyXG4gICNhbGxvd1BsYWNlZFNoaXBSb3RhdGlvbigpIHtcclxuICAgIGxldCBncmlkU2l6ZSA9IHRoaXMuZ2FtZU1hbmFnZXIucGxheWVyc1swXS5nYW1lYm9hcmQuZ3JpZC5sZW5ndGg7XHJcbiAgICAvLyBhbGxvdyByb3RhdGlvbiBvZiBwbGFjZWQgc2hpcHNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC5kcmFnZ2FibGUuc2hpcC1wbGFjZWRcIikuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgaWYgKHNoaXAub25jbGljayA9PT0gbnVsbCkge1xyXG4gICAgICAgIHNoaXAub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgIGxldCB2ZXJ0aWNhbE9uID0gc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgIGxldCBjZWxsID0gc2hpcC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwLmNoaWxkRWxlbWVudENvdW50O1xyXG5cclxuICAgICAgICAgIGxldCByb3dJbmRleCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpO1xyXG4gICAgICAgICAgbGV0IGNvbEluZGV4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbCk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coeyByb3dJbmRleCwgc2hpcExlbmd0aCwgZ3JpZFNpemUgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKHJvd0luZGV4ICsgc2hpcExlbmd0aCA+IGdyaWRTaXplIHx8IGNvbEluZGV4ICsgc2hpcExlbmd0aCA+IGdyaWRTaXplKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBjaGVjayBpZiBhbnkgc2hpcHMgYXJlIGluIHRoZSB3YXkgb2YgdGhlIHJvdGF0aW9uLlxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IHJvd0luZGV4ICsgMTsgaSA8IHJvd0luZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtpfVwiXWApKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBjb2xJbmRleDsgaiA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGNlbGxzW2pdLmNsYXNzTGlzdC5jb250YWlucyhcIm9jY3VwaWVkXCIpICYmIGNlbGxzW2pdLmRhdGFzZXQuc2hpcCAhPT0gc2hpcC5pZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IHByb2NlZWQuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgZW5vdWdoIHNwYWNlIHRvIG1vdmUgaXQgdmVydGljYWxseSwgYmFzZWQgb24gdGhlIHNoaXAgbGVuZ3RoLlxyXG4gICAgICAgICAgLy8gMSBubyBzaGlwcyBpbiB0aGUgd2F5XHJcbiAgICAgICAgICAvLyAyLndpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBnYW1lYm9hcmQuXHJcbiAgICAgICAgICAvLyBvbmx5IHRoZW4gZG8geW91IGFsbG93IHZlcnRpY2FsIGNsYXNzLlxyXG4gICAgICAgICAgY29uc29sZS5sb2coY2VsbCk7XHJcblxyXG4gICAgICAgICAgaWYgKHZlcnRpY2FsT24pIHtcclxuICAgICAgICAgICAgLy8gdmVydGljYWwgLT4gaG9yaXpvbnRhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93SW5kZXggKyAxOyBpIDwgcm93SW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKTtcclxuICAgICAgICAgICAgICAvLyBzdHJpcCB2ZXJ0aWNhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbEluZGV4ICsgMTsgaSA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gYWRkIGhvcml6b250YWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7aX1cIl1gKTtcclxuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IHNoaXAuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGhvcml6b250YWwgLT4gdmVydGljYWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbEluZGV4ICsgMTsgaSA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gcmVtb3ZlIGhvcml6b250YWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7aX1cIl1gKVxyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHJvd0luZGV4ICsgMTsgaSA8IHJvd0luZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gYWRkIHZlcnRpY2FsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtpfVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdYClcclxuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IHNoaXAuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyB0b2dnbGUgdmVydGljYWwgZm9yIHRoZSB2aWV3XHJcbiAgICAgICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgIC8vIHRoZW4sIGFsdGVyIHRoZSBvY2N1cGllZCBjbGFzcy5cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBkaXNhYmxlIHJvdGF0aW9uIGZvciBzaGlwcyB0aGF0IGFyZSBub3QgcGxhY2VkLlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLmRyYWdnYWJsZTpub3QoLnNoaXAtcGxhY2VkKVwiKS5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICBpZiAoc2hpcC5vbmNsaWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2hpcC5vbmNsaWNrID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGxhY2VzIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQgZ2l2ZW4gY29vcmRpbmF0ZXMuIFVzZWZ1bCBmb3IgQUkuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2wgXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCBcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsYXllcjIgLSBQbGFjZSBzaGlwcyBvbiBwbGF5ZXIgMidzIGdhbWVib2FyZD9cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSB0aGUgSUQgdGhlIHNoaXAgc2hvdWxkIGJlIGlkZW50aWZpZWQgYnkuXHJcbiAgICovXHJcbiAgc3RhdGljIHBsYWNlU2hpcFZpYUNvb3JkaW5hdGUobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwsIHBsYXllcjIgPSB0cnVlLCBpZCkge1xyXG4gICAgY29uc29sZS5sb2coe2xlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsLCBwbGF5ZXIyLCBpZH0pO1xyXG4gICAgbGV0IHNlbGVjdG9yO1xyXG4gICAgbGV0IGdhbWVib2FyZDsgXHJcbiAgICBsZXQgY3B1VGFnID0gXCJjcHUtc2hpcC1wbGFjZWRcIjtcclxuXHJcbiAgICBpZiAocGxheWVyMikge1xyXG4gICAgICBzZWxlY3RvciA9IFwiLnAyLmdhbWVib2FyZFwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWxlY3RvciA9IFwiLnAxLmdhbWVib2FyZFwiXHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtzZWxlY3Rvcn1gKTtcclxuXHJcbiAgICBsZXQgb3JpZ2luQ2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGAuc2VsZWN0YWJsZVtkYXRhLXJvdz0nJHtyb3d9J11bZGF0YS1jb2w9JyR7Y29sfSddYCk7XHJcbiAgICBvcmlnaW5DZWxsLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG5cclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgbGV0IHJvd3MgPSBBcnJheS5mcm9tKGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKGAuc2VsZWN0YWJsZVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3cgKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJvd3NbaV0uY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIsIGNwdVRhZyk7XHJcbiAgICAgICAgcm93c1tpXS5kYXRhc2V0LnNoaXAgPSBpZDtcclxuXHJcbiAgICAgICAgc3dpdGNoKGkpIHtcclxuICAgICAgICAgIGNhc2Ugcm93OiAvLyBzdGFydFxyXG4gICAgICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0YXJ0LXZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2Ugcm93ICsgbGVuZ3RoIC0gMTogLy8gZW5kXHJcbiAgICAgICAgICAgIHJvd3NbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtZW5kLXZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6IC8vIG1pZFxyXG4gICAgICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW1pZGRsZS12ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY29scyA9IEFycmF5LmZyb20oZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoYC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgICBcclxuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29sc1tpXS5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIiwgY3B1VGFnKTtcclxuICAgICAgICBjb2xzW2ldLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG5cclxuICAgICAgICBzd2l0Y2goaSkge1xyXG4gICAgICAgICAgY2FzZSBjb2w6IC8vIHN0YXJ0XHJcbiAgICAgICAgICAgIGNvbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtc3RhcnQtaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIGNvbCArIGxlbmd0aCAtIDE6IC8vIGVuZFxyXG4gICAgICAgICAgICBjb2xzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVuZC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6IC8vIG1pZFxyXG4gICAgICAgICAgICBjb2xzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW1pZGRsZS1ob3Jpem9udGFsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFza3MgdXNlciBmb3IgdGhlaXIgbmFtZSBhbmQgdG8gc3RhcnQgdGhlIGdhbWUuLi4gb25seSB3aGVuIHRoZSBzaGlwIHBsYWNlbWVudCBjb250YWluZXIgaXMgZW1wdHlcclxuICAgKiB3aWxsIHRoZSBzdGFydCBnYW1lIGJ1dHRvbiB1bmxvY2suXHJcbiAgICovXHJcbiAgI3N0YXJ0R2FtZVByb21wdCgpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3Qgc3RhcnRHYW1lRm9ybSA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJzdGFydC1nYW1lLXByb21wdFwiKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJOYW1lTGFiZWwsIHBsYXllck5hbWVGaWVsZF0gPSBjb21wb25lbnQuZm9ybUlucHV0KFwiTmFtZTogXCIsIFwiaW5wdXRcIiwgXCJwMS1uYW1lXCIsIFwicDEtbmFtZVwiKTtcclxuICAgIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGNvbXBvbmVudC5idXR0b24oXCJTdGFydCBHYW1lIVwiLCBcInN0YXJ0LWdhbWUtYnV0dG9uXCIpO1xyXG5cclxuICAgIHBsYXllck5hbWVGaWVsZC52YWx1ZSA9IFwiQ29tbWFuZGVyIEJsdWVcIjtcclxuICAgIHBsYXllck5hbWVGaWVsZC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBwbGF5ZXJOYW1lRmllbGQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHlvdXIgbmFtZSBoZXJlXCI7XHJcblxyXG4gICAgc3RhcnRHYW1lRm9ybS5hcHBlbmQocGxheWVyTmFtZUxhYmVsLCBwbGF5ZXJOYW1lRmllbGQsIHN0YXJ0R2FtZUJ1dHRvbik7XHJcblxyXG4gICAgc3RhcnRHYW1lQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICBzdGFydEdhbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZWxmLmdhbWVNYW5hZ2VyLnN0YXJ0R2FtZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgRE9NT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLiNjaGVja0FsbFNoaXBzUGxhY2VkKTtcclxuICAgIERPTU9ic2VydmVyLm9ic2VydmUodGhpcy4jZ2FtZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtc2VsZWN0aW9uXCIpLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XHJcblxyXG4gICAgcmV0dXJuIHN0YXJ0R2FtZUZvcm07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYWxsIHNoaXBzIGJlZW4gcGxhY2VkPyBJZiBzbywgdW5sb2NrcyB0aGUgZ2FtZSBidXR0b24uIFVzZWQgd2l0aFxyXG4gICAqIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICovXHJcbiAgI2NoZWNrQWxsU2hpcHNQbGFjZWQobXV0YXRlZCkge1xyXG4gICAgbGV0IHNoaXBzUmVtYWluaW5nID0gbXV0YXRlZFswXS50YXJnZXQuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICBpZiAoc2hpcHNSZW1haW5pbmcgPiAwKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZS1idXR0b25cIikuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lLWJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvd3MgYSBzdW1tYXJ5LiBUbyBiZSB1c2VkIGFmdGVyIHRoZSBnYW1lIGhhcyBmaW5pc2hlZC5cclxuICAgKi9cclxuICAjc3VtbWFyeSguLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBzdW1tYXJ5ID0gY29tcG9uZW50LmRpdihcInN1bW1hcnktc2NyZWVuXCIsIC4uLmNsYXNzTmFtZXMpO1xyXG4gICAgY29uc3QgdmljdG9yeU1zZyA9IGNvbXBvbmVudC5wKFwiV2lubmVyXCIsIFwidmljdG9yeS1tZXNzYWdlXCIpO1xyXG4gICAgY29uc3Qgd2lubmVyID0gY29tcG9uZW50LnAoXCIlXCIsIFwid2lubmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IHN0YXRzQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcInN1bW1hcnktc3RhdGlzdGljc1wiKTtcclxuICAgIGNvbnN0IHN0YXRzQWNjdXJhY3kgPSBjb21wb25lbnQucChcIkFjY3VyYWN5XCIsIFwiYWNjdXJhY3lcIik7XHJcbiAgICBjb25zdCBwMUFjY0NvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJhY2MtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgcDJBY2NDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiYWNjLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHAxQWNjTGFiZWwgPSBjb21wb25lbnQucCh0aGlzLmdhbWVNYW5hZ2VyLnBsYXllcnNbMF0ubmFtZSwgXCJtZXRyaWMtcGxheWVyLW5hbWVcIik7XHJcbiAgICBjb25zdCBwMkFjY0xhYmVsID0gY29tcG9uZW50LnAodGhpcy5nYW1lTWFuYWdlci5wbGF5ZXJzWzFdLm5hbWUsIFwibWV0cmljLXBsYXllci1uYW1lXCIpO1xyXG4gICAgY29uc3QgcDFBY2N1cmFjeSA9IGNvbXBvbmVudC5zcGFuKFwiLS0lXCIsIFwicDFcIiwgXCJhY2N1cmFjeS1tZXRyaWNcIik7XHJcbiAgICBjb25zdCBwMkFjY3VyYWN5ID0gY29tcG9uZW50LnNwYW4oXCItLSVcIiwgXCJwMlwiLCBcImFjY3VyYWN5LW1ldHJpY1wiKTtcclxuXHJcbiAgICBjb25zdCBwbGF5QWdhaW4gPSBjb21wb25lbnQuYnV0dG9uKFwiUGxheSBBZ2FpblwiLCBcInBsYXktYWdhaW5cIik7XHJcblxyXG4gICAgdmljdG9yeU1zZy5hcHBlbmQod2lubmVyKTtcclxuXHJcbiAgICBwMUFjY0NvbnRhaW5lci5hcHBlbmQocDFBY2NMYWJlbCwgcDFBY2N1cmFjeSk7XHJcbiAgICBwMkFjY0NvbnRhaW5lci5hcHBlbmQocDJBY2NMYWJlbCwgcDJBY2N1cmFjeSk7XHJcblxyXG4gICAgc3RhdHNDb250YWluZXIuYXBwZW5kKHN0YXRzQWNjdXJhY3ksIHAxQWNjQ29udGFpbmVyLCBwMkFjY0NvbnRhaW5lcik7XHJcblxyXG4gICAgc3VtbWFyeS5hcHBlbmQodmljdG9yeU1zZywgd2lubmVyLCBzdGF0c0NvbnRhaW5lciwgcGxheUFnYWluKTtcclxuICAgICAgXHJcbiAgICByZXR1cm4gc3VtbWFyeTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVudW1lcmF0ZSBzaGlwIHJvc3RlciBmb3IgZWFjaCB1c2VyJ3MgZ2FtZWJvYXJkLiBUaGVzZSBzaGlwcyB3aWxsIGJlIFxyXG4gICAqIHNob3duIGFzIHJlZCB3aGVuIGRlc3Ryb3llZC5cclxuICAgKi9cclxuICBlbnVtZXJhdGVQbGF5ZXJTaGlwUm9zdGVyKCkge1xyXG4gICAgbGV0IHAxR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMS5nYW1lYm9hcmRcIik7XHJcbiAgICBsZXQgcm9zdGVyID0gcDFHYW1lYm9hcmQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXJvc3RlclwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZU1hbmFnZXIuc2hpcExlbmd0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHNoaXAgPSBwMUdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyLXNoaXAke2l9YCk7XHJcbiAgICAgIGxldCBzaGlwTmFtZSA9IGNvbXBvbmVudC5wKHNoaXAuZGF0YXNldC5uYW1lLCBcInNoaXAtbmFtZVwiKTtcclxuXHJcbiAgICAgIHNoaXBOYW1lLmRhdGFzZXQuc2hpcCA9IHNoaXAucGFyZW50Tm9kZS5kYXRhc2V0LnNoaXA7XHJcbiAgICAgIHJvc3Rlci5hcHBlbmQoc2hpcE5hbWUpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi91dGlsaXR5XCI7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IGNsYXNzLiBDb250YWlucyB2YXJpb3VzIERPTSBlbGVtZW50cy5cclxuICogQXV0aG9yOiBkYXRyaW5vblxyXG4gKiBWZXJzaW9uOiAxLjQgKFdlYXRoZXIpXHJcbiAqL1xyXG5cclxuY2xhc3MgQ29tcG9uZW50IHtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDYwMHB4KVwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIGEgYmFzaWMgSFRNTCBza2VsZXRvbiBmb3IgdGhlIHdlYiBwYWdlLCBnZW5lcmF0aW5nIGEgaGVhZGVyLFxyXG4gICAqIG1haW4sIGFuZCBzdGlja3kgZm9vdGVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSBoZWFkZXJUaXRsZSAtIFdoYXQgdGhlIHdlYiBwYWdlIGlzIGNhbGxlZC5cclxuICAgKiBAcGFyYW0ge2Jvb2x9IGVtcHR5SGVhZGVyIC0gU2hvdWxkIHRoZSBoZWFkZXIgdXNlIGEgZGVmYXVsdCBzdHJ1Y3R1cmU/XHJcbiAgICogVGhlIGRlZmF1bHQgc3RydWN0dXJlIGxvb2tzIGxpa2UgWyBMb2dvIHwgfCB8IHwgTmF2aWdhdGlvbiBMaW5rc11cclxuICAgKiBAcmV0dXJucyAtIEFuIGFycmF5IGNvbnRhaW5pbmcgcmVmZXJlbmNlcyB0byB0aGUgZ2VuZXJhdGVkIGhlYWRlciwgbWFpbiwgYW5kIGZvb3Rlci5cclxuICAgKi9cclxuICBpbml0aWFsaXplU3RydWN0dXJlKFxyXG4gICAgaGVhZGVyVGl0bGUsXHJcbiAgICBlbXB0eUhlYWRlciA9IGZhbHNlLFxyXG4gICAgY3JlYXRlTW9udGgsXHJcbiAgICBnaXRodWJMaW5rXHJcbiAgKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IG1haW5XcmFwcGVyID0gdGhpcy5kaXYoXCJjb250ZW50XCIpO1xyXG4gICAgbGV0IGhlYWRlcjtcclxuICAgIGlmIChlbXB0eUhlYWRlcikge1xyXG4gICAgICBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyID0gdGhpcy5oZWFkZXIoaGVhZGVyVGl0bGUpO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBjb25zdCBmb290ZXIgPSB0aGlzLmZvb3RlcihjcmVhdGVNb250aCwgZ2l0aHViTGluayk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICAgIG1haW5XcmFwcGVyLmFwcGVuZChoZWFkZXIsIG1haW4pO1xyXG4gICAgYm9keS5hcHBlbmQobWFpbldyYXBwZXIsIGZvb3Rlcik7XHJcblxyXG4gICAgcmV0dXJuIFtoZWFkZXIsIG1haW4sIGZvb3Rlcl07XHJcbiAgfVxyXG5cclxuICBjb250ZW50KCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZChtYWluKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGhlYWRlcih0aXRsZSkge1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBsZXQgdGl0bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuXHJcbiAgICBtZW51QnV0dG9uLmlkID0gXCJtZW51LWJ1dHRvblwiO1xyXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYmFyc1wiLCBcIm5vLWRpc3BsYXlcIik7XHJcblxyXG4gICAgdGhpcy5tcWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBpdCBiaWdnZXIgdGhhbiB0aGUgcXVlcnkgcnVsZS5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1pbi1vdXRcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgcHJlc3NlZC5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNsaWRlLWluLW91dFwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG4gICAgLy8gaGVhZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aW1nfSlgO1xyXG5cclxuICAgIHRpdGxlRWxlbS5pZCA9IFwicGFnZS10aXRsZVwiO1xyXG4gICAgdGl0bGVFbGVtLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgdGl0bGVFbGVtLmluc2VydEJlZm9yZShtZW51QnV0dG9uLCB0aXRsZUVsZW0uZmlyc3RDaGlsZCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kKHRpdGxlRWxlbSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuICB9XHJcblxyXG4gIG5hdmJhciguLi5saW5rcykge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gICAgbmF2LmlkID0gXCJuYXZiYXJcIjtcclxuICAgIGxpbmtDb250YWluZXIuaWQgPSBcIm5hdmJhci1idXR0b25zLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGZvciAobGV0IGxpbmsgb2YgbGlua3MpIHtcclxuICAgICAgY29uc3QgbGlua0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgY29uc3QgbGlua0FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cclxuICAgICAgbGlua0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWJ1dHRvblwiKTtcclxuXHJcbiAgICAgIGxpbmtBbmNob3IuaWQgPSBgbmF2bGluay0ke2xpbmsucmVwbGFjZShcIiBcIiwgXCItXCIpLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgbGlua0FuY2hvci50ZXh0Q29udGVudCA9IGxpbms7XHJcbiAgICAgIGxpbmtBbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XHJcblxyXG4gICAgICBsaW5rQnV0dG9uLmFwcGVuZChsaW5rQW5jaG9yKTtcclxuICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmQobGlua0J1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2LmFwcGVuZChsaW5rQ29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG4gIH1cclxuXHJcbiAgYmFubmVyKHRleHQsIGltZykge1xyXG4gICAgbGV0IGJhbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcblxyXG4gICAgYmFubmVyQ29udGFpbmVyLmlkID0gXCJiYW5uZXJcIjtcclxuICAgIGJhbm5lci5pZCA9IFwiYmFubmVyLWltYWdlXCI7XHJcbiAgICBjYXB0aW9uLmlkID0gXCJiYW5uZXItY2FwdGlvblwiO1xyXG5cclxuICAgIGJhbm5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1nfSlgO1xyXG5cclxuICAgIGNhcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIGJhbm5lckNvbnRhaW5lci5hcHBlbmQoYmFubmVyLCBjYXB0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gYmFubmVyQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyKGNyZWF0ZU1vbnRoLCBnaXRodWJMaW5rKSB7XHJcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG5cclxuICAgIGxldCB0ZXh0ID0gYENyZWF0ZWQgaW4gJHtjcmVhdGVNb250aH0gMjAyMS4gT2RpbiBQcm9qZWN0IHggRGFuIFQuYDtcclxuICAgIGxldCBnaXRodWJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBsZXQgZ2hJY29uID0gdGhpcy5mYUljb24oXCJmYWJcIiwgXCJmYS1naXRodWItc3F1YXJlXCIsIFwiaWNvblwiKTtcclxuXHJcbiAgICBnaXRodWJFbGVtLmFwcGVuZChnaEljb24pO1xyXG4gICAgZ2l0aHViRWxlbS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWdpdGh1Yi1pY29uXCIpO1xyXG4gICAgZ2l0aHViRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGdpdGh1YkxpbmspO1xyXG4gICAgZ2l0aHViRWxlbS5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcbiAgICBnaXRodWJFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBwLmFwcGVuZChnaXRodWJFbGVtKTtcclxuICAgIGZvb3Rlci5hcHBlbmQocCk7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggbGFyZ2VyLCBlbWJvbGRlbmVkLCB0ZXh0LFxyXG4gICAqIHNpbWlsYXIgdG8gYSBwdWxsIHF1b3RlIGluIGEgbWFnYXppbmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbXNnIHtzdHJpbmd9IFRleHQgdG8gaW5jbHVkZSBpbiB0aGUgYmxvY2sgcXVvdGVcclxuICAgKi9cclxuICBwdWxscXVvdGUobXNnKSB7XHJcbiAgICBsZXQgcHVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcclxuICAgIHB1bGwudGV4dENvbnRlbnQgPSBtc2c7XHJcblxyXG4gICAgcHVsbC5jbGFzc0xpc3QuYWRkKFwicHVsbC1xdW90ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gcHVsbDtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24oaWQpIHtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBlbGVtZW50LmlkID0gaWQ7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHRleHQgaGVhZGluZyBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSB0ZXh0IC0gVGhlIGxhYmVsIGZvciB0aGUgaGVhZGVyLlxyXG4gICAqIEBwYXJhbSB7Kn0gbGV2ZWwgLSBUaGUgbGV2ZWwgb2YgaGVhZGVyLlxyXG4gICAqL1xyXG4gIGhlYWRpbmcodGV4dCwgbGV2ZWwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGxldmVsIDwgMSB8fCBsZXZlbCA+IDYpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXCJIZWFkaW5nIGxldmVscyBjYW4gb25seSBiZSBiZXR3ZWVuIDEgdG8gNiFcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaCR7bGV2ZWx9YCk7XHJcblxyXG4gICAgaWYgKGNsYXNzTmFtZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuICB9XHJcblxyXG4gIHAodGV4dCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgaWYgKGNsYXNzTmFtZS5sZW5ndGggIT0gMCkge1xyXG4gICAgICBwLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gcDtcclxuICB9XHJcblxyXG4gIGEodGV4dCwgbGluaywgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgaWYgKGNsYXNzTmFtZS5sZW5ndGggIT0gMCkge1xyXG4gICAgICBhLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBhLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGEuaHJlZiA9IGxpbms7XHJcbiAgICBhLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcblxyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG5cclxuICBpbWcodXJsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIGltYWdlLnNyYyA9IHVybDtcclxuXHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbiAgfVxyXG5cclxuICBkaXYoLi4uY2xhc3NOYW1lcykge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZiAoY2xhc3NOYW1lcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbihsYWJlbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgYnRuLnRleHRDb250ZW50ID0gbGFiZWw7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGVzIGEgYmFzaWMgdGFibGUgd2l0aCBzaW5nbGUtY2VsbCBjb2x1bW5zIGFuZCByb3dzLCBiYXNlZCBvbiB0aGUgaW1wb3J0ZWQgZmlsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Y3N2fSBkYXRhIC0gRGF0YSB0byB0dXJuIGludG8gYSB0YWJsZS4gUGxlYXNlIHVzZSB3ZWJwYWNrIHRvIGltcG9ydCAuY3N2IGZpbGVzLlxyXG4gICAqL1xyXG4gIHRhYmxlKGlkID0gXCJcIiwgZGF0YSkge1xyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgdGFibGUuaWQgPSBpZDtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHRhYmxlIGhlYWRlciByb3cuXHJcbiAgICBsZXQgdGFibGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBsZXQgdGFibGVIZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG4gICAgZm9yIChsZXQgY29sIG9mIE9iamVjdC5rZXlzKGRhdGFbMF0pKSB7XHJcbiAgICAgIGxldCBjb2xDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICBjb2xDZWxsLnRleHRDb250ZW50ID0gY29sO1xyXG5cclxuICAgICAgdGFibGVIZWFkZXJSb3cuYXBwZW5kKGNvbENlbGwpO1xyXG4gICAgfVxyXG4gICAgdGFibGVIZWFkZXIuYXBwZW5kKHRhYmxlSGVhZGVyUm93KTtcclxuXHJcbiAgICB0YWJsZS5hcHBlbmQodGFibGVIZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIC8vIEdlbmVyYXRlIHRhYmxlIHJvd3MuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgIGZvciAobGV0IHByb3AgaW4gZGF0YVtpXSkge1xyXG4gICAgICAgIGxldCB0Y2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHJcbiAgICAgICAgdGNlbGwudGV4dENvbnRlbnQgPSBkYXRhW2ldW3Byb3BdO1xyXG4gICAgICAgIHRyb3cuYXBwZW5kKHRjZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFibGVCb2R5LmFwcGVuZCh0cm93KTtcclxuICAgIH1cclxuICAgIHRhYmxlLmFwcGVuZCh0YWJsZUJvZHkpO1xyXG5cclxuICAgIHJldHVybiB0YWJsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGZvbnQgYXdlc29tZSBpY29uLlxyXG4gICAqL1xyXG4gIGZhSWNvbihjYXRlZ29yeSwgbmFtZSwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgZmFzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgZmFzSWNvbi5jbGFzc0xpc3QuYWRkKGNhdGVnb3J5LCBuYW1lKTtcclxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgZmFzSWNvbi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhc0ljb247XHJcbiAgfVxyXG5cclxuICBzcGFuKHRleHRDb250ZW50ID0gbnVsbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgaWYgKGNsYXNzTmFtZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIHNwYW47XHJcbiAgfVxyXG5cclxuICBmb3JtSW5wdXQobGFiZWxUZXh0LCB0eXBlLCBpbnB1dElkLCBuYW1lKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dC5pZCA9IGlucHV0SWQ7XHJcbiAgICBpbnB1dC5uYW1lID0gbmFtZTtcclxuICAgIGlucHV0LnR5cGUgPSB0eXBlO1xyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIGlucHV0XTtcclxuICB9XHJcblxyXG4gIGRyb3Bkb3duKGxhYmVsVGV4dCwgbmFtZSwgaW5wdXRJZCwgLi4udmFsdWVzKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0SWQpO1xyXG5cclxuICAgIGZvciAobGV0IHZhbCBvZiB2YWx1ZXMpIHtcclxuICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgZW50cnkudmFsdWUgPSB2YWw7XHJcbiAgICAgIGlmIChpc05hTih2YWwpICYmIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IHZhbFswXS50b1VwcGVyQ2FzZSgpICsgdmFsLnNsaWNlKDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gdmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3QuYXBwZW5kKGVudHJ5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCBzZWxlY3RdO1xyXG4gIH1cclxuXHJcbiAgdGV4dEFyZWEobGFiZWxUZXh0LCBuYW1lLCBpbnB1dElkKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICB0YS5pZCA9IGlucHV0SWQ7XHJcbiAgICB0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIHRhXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGNvbmZpcm0gbW9kYWwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyp9IGNsYXNzTmFtZSAtIENsYXNzZXMgdGhlIG1vZGFsIHNob3VsZCBiZWxvbmcgdG8uXHJcbiAgICogQHBhcmFtIHsqfSB0aXRsZSAtIFRoZSB0aXRsZSBhcHBlYXJpbmcgb24gdGhlIG1vZGFsLlxyXG4gICAqIEBwYXJhbSB7Kn0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIGFwcGVhcmluZyBvbiB0aGUgbW9kYWwuXHJcbiAgICogQHBhcmFtIHsqfSBwb3NpdGl2ZUJ1dHRvbkxhYmVsIC0gVGV4dCBmb3IgdGhlIE9LIGJ1dHRvbi5cclxuICAgKiBAcGFyYW0geyp9IG5lZ2F0aXZlQnV0dG9uTGFiZWwgLSBUZXh0IGZvciB0aGUgY2FuY2VsIGJ1dHRvbi5cclxuICAgKiBAcGFyYW0geyp9IHBvc2l0aXZlQ2FsbGJhY2sgLSBGdW5jdGlvbiB0byBydW4gaWYgT0sgaXMgcHJlc3NlZC5cclxuICAgKiBAcGFyYW0geyp9IG5lZ2F0aXZlQ2FsbGJhY2sgLSBGdW5jdGlvbiB0byBydW4gaWYgY2FuY2VsIGlzIHByZXNzZWQuICdudWxsJyBieVxyXG4gICAqIGRlZmF1bHQsIHdoaWNoIHRoZW4ganVzdCBjbG9zZXMgdGhlIG1vZGFsLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgLSBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbW9kYWwgZWxlbWVudC5cclxuICAgKi9cclxuICBjb25maXJtTW9kYWwoXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB0aXRsZSxcclxuICAgIG1lc3NhZ2UsXHJcbiAgICBwb3NpdGl2ZUJ1dHRvbkxhYmVsLFxyXG4gICAgbmVnYXRpdmVCdXR0b25MYWJlbCxcclxuICAgIHBvc2l0aXZlQ2FsbGJhY2ssXHJcbiAgICBuZWdhdGl2ZUNhbGxiYWNrID0gbnVsbFxyXG4gICkge1xyXG4gICAgbGV0IG1vZGFsV3JhcHBlciA9IHRoaXMuZGl2KCk7XHJcbiAgICBtb2RhbFdyYXBwZXIuaWQgPSBcInByb21wdC13cmFwcGVyXCI7XHJcbiAgICBsZXQgbW9kYWwgPSB0aGlzLmRpdihjbGFzc05hbWUpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlSGVhZGVyID0gdGhpcy5oZWFkaW5nKHRpdGxlLCAxLCBcIm1vZGFsLWhlYWRlclwiKTtcclxuICAgIGNvbnN0IG1lc3NhZ2VQYXJhZ3JhcGggPSB0aGlzLnBhcmFncmFwaChtZXNzYWdlLCBcIm1vZGFsLWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IHBvc2l0aXZlQnV0dG9uID0gdGhpcy5idXR0b24ocG9zaXRpdmVCdXR0b25MYWJlbCwgXCJtb2RhbC1jb25maXJtXCIpO1xyXG4gICAgY29uc3QgbmVnYXRpdmVCdXR0b24gPSB0aGlzLmJ1dHRvbihuZWdhdGl2ZUJ1dHRvbkxhYmVsLCBcIm1vZGFsLWNhbmNlbFwiKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25TZWN0aW9uID0gdGhpcy5kaXYoXCJtb2RhbC1idXR0b24tYXJlYVwiKTtcclxuXHJcbiAgICBpZiAobmVnYXRpdmVDYWxsYmFjayA9PT0gbnVsbCkge1xyXG4gICAgICBuZWdhdGl2ZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmVnYXRpdmUgcHJlc3NlZC5cIik7XHJcbiAgICAgICAgbW9kYWxXcmFwcGVyLnJlbW92ZSgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBvc2l0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3NpdGl2ZUNhbGxiYWNrKTtcclxuICAgIHBvc2l0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBwb3NpdGl2ZUNhbGxiYWNrKGUpO1xyXG4gICAgICBtb2RhbFdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICAgIG5lZ2F0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZWdhdGl2ZUNhbGxiYWNrKTtcclxuXHJcbiAgICBidXR0b25TZWN0aW9uLmFwcGVuZChwb3NpdGl2ZUJ1dHRvbiwgbmVnYXRpdmVCdXR0b24pO1xyXG4gICAgbW9kYWwuYXBwZW5kKHRpdGxlSGVhZGVyLCBtZXNzYWdlUGFyYWdyYXBoLCBidXR0b25TZWN0aW9uKTtcclxuICAgIG1vZGFsV3JhcHBlci5hcHBlbmQobW9kYWwpO1xyXG5cclxuICAgIC8vIHN0eWxpbmcgbW92ZWQgdG8gLmNzcyBwYWdlLlxyXG5cclxuICAgIHJldHVybiBtb2RhbFdyYXBwZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5IGEgYnJpZWYsIHVub2J0cnVzaXZlIHBvcC11cCBtZXNzYWdlIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cclxuICAgKiBAcGFyYW0geyp9IHRleHRDb250ZW50IC0gVGhlIHRleHQgdGhlIG1lc3NhZ2Ugc2hvdWxkIGRpc3BsYXkuXHJcbiAgICogQHBhcmFtIHsqfSBkdXJhdGlvbiAtIFRoZSBkdXJhdGlvbiBvZiB0aGUgbWVzc2FnZSBpbiBzZWNvbmRzLlxyXG4gICAqL1xyXG4gIHRvYXN0KHRleHRDb250ZW50LCBkdXJhdGlvbikge1xyXG4gICAgbGV0IHRvYXN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB0b2FzdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xyXG4gICAgdG9hc3RCb3guY2xhc3NMaXN0LmFkZChcInRvYXN0XCIpO1xyXG4gICAgdG9hc3RNZXNzYWdlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICB0b2FzdE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInRvYXN0LW1lc3NhZ2VcIik7XHJcblxyXG4gICAgdG9hc3RCb3guYXBwZW5kKHRvYXN0TWVzc2FnZSk7XHJcblxyXG4gICAgbGV0IHRvYXN0Qm94Q3NzID0gXCJwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMTB2aDtcIjtcclxuICAgIHRvYXN0Qm94Q3NzICs9IFwid2lkdGg6IDEwMHZ3O1wiO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gYGFuaW1hdGlvbjogZmFkZS1pbi1vdXQgJHtkdXJhdGlvbn1zO2A7XHJcbiAgICB0b2FzdEJveENzcyArPSBcInotaW5kZXg6IDk5OTk7XCI7XHJcblxyXG4gICAgbGV0IHRvYXN0TWVzc2FnZUNzcyA9XHJcbiAgICAgIFwibWFyZ2luOiAwIGF1dG87IHdpZHRoOiAzMDBweDsgZGlzcGxheTogYmxvY2s7IGJhY2tncm91bmQtY29sb3I6IGdyZXk7XCI7XHJcbiAgICB0b2FzdE1lc3NhZ2VDc3MgKz1cclxuICAgICAgXCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBib3JkZXItcmFkaXVzOiA1cHg7XCI7XHJcbiAgICB0b2FzdE1lc3NhZ2VDc3MgKz0gXCJjb2xvcjogd2hpdGU7XCI7XHJcblxyXG4gICAgdG9hc3RCb3guc3R5bGUuY3NzVGV4dCA9IHRvYXN0Qm94Q3NzO1xyXG4gICAgdG9hc3RNZXNzYWdlLnN0eWxlLmNzc1RleHQgPSB0b2FzdE1lc3NhZ2VDc3M7XHJcblxyXG4gICAgdG9hc3RCb3guYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIHRvYXN0Qm94LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodG9hc3RCb3gpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgc2VhcmNoIGZpZWxkIHdpdGggYSBzZWFyY2ggYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGFjZWhvbGRlciAtIEFkdmljZSB0byBnaXZlIGluIHNlYXJjaCBmaWVsZC5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBzZWFyY2gocGxhY2Vob2xkZXIgPSBcIlNlYXJjaFwiKSB7XHJcbiAgICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFwic2VhcmNoLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEZpZWxkV3JhcHBlciA9IHRoaXMuZGl2KFwic2VhcmNoLWZpZWxkLXdyYXBwZXJcIik7XHJcbiAgICBjb25zdCBzZWFyY2hGaWVsZCA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwic2VhcmNoLWZpZWxkXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IHRoaXMuZmFJY29uKFwiZmFzXCIsIFwiZmEtc2VhcmNoXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gdGhpcy5idXR0b24oXCJcIiwgXCJzZWFyY2hcIik7XHJcblxyXG4gICAgc2VhcmNoQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcclxuICAgIHNlYXJjaEZpZWxkV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIHNlYXJjaEZpZWxkLnR5cGUgPSBcInNlYXJjaFwiO1xyXG4gICAgc2VhcmNoRmllbGQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xyXG4gICAgc2VhcmNoRmllbGQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICBzZWFyY2hCdXR0b24uYXBwZW5kKHNlYXJjaEljb24pO1xyXG4gICAgc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcblxyXG4gICAgc2VhcmNoRmllbGRXcmFwcGVyLmFwcGVuZChzZWFyY2hGaWVsZCk7XHJcbiAgICBzZWFyY2hDb250YWluZXIuYXBwZW5kKHNlYXJjaEZpZWxkV3JhcHBlciwgc2VhcmNoQnV0dG9uKTtcclxuICAgIHJldHVybiBzZWFyY2hDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBzZWFyY2ggZmllbGQgZm9yIGxvY2F0aW9ucywgc28gaXQgaW5jbHVkZXMgYSBzZWFyY2ggZmllbGQgd2l0aCBcclxuICAgKiBhIGxvY2F0aW9uIGJ1dHRvbi5cclxuICAgKi9cclxuICBnZW9zZWFyY2gocGxhY2Vob2xkZXI9XCJcIikge1xyXG4gICAgY29uc3Qgc2VhcmNoRWxlbSA9IHRoaXMuc2VhcmNoKHBsYWNlaG9sZGVyKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uQnV0dG9uID0gdGhpcy5idXR0b24oXCJcIiwgXCJsb2NhdGlvblwiKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uSWNvbiA9IHRoaXMuZmFJY29uKFwiZmFzXCIsIFwiZmEtbWFwLW1hcmtlci1hbHRcIilcclxuXHJcbiAgICBsb2NhdGlvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgbG9jYXRpb25CdXR0b24uYXBwZW5kKGxvY2F0aW9uSWNvbik7XHJcbiAgICBsb2NhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVXRpbGl0eS5nZXRHZW9sb2NhdGlvbik7XHJcbiAgICBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoXCIpLmJlZm9yZShsb2NhdGlvbkJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIHNlYXJjaEVsZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdG9vbHRpcC1lc3F1ZSBtZXNzYWdlIHdoaWNoIGhvdmVycyBiZWxvdywgcmVsYXRpdmUgdG8gYW4gZWxlbWVudCdzIHBvc2l0aW9uLCBcclxuICAgKiBmb3IgYSBwcm92aWRlZCBkdXJhdGlvbi4gT25seSBhdHRhY2ggdG8gcmVsYXRpdmVseS1wb3NpdGlvbmVkIGVsZW1lbnRzLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IChlbGVtKSAtIFBvc2l0aW9uZWQgZWxlbWVudCB0byBhdHRhY2ggdG8uIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAobXNnKSAtIE1lc3NhZ2UgdG8gZGlzcGxheS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gKHMpIC0gTnVtYmVyIG9mIHNlY29uZHMgdG8gcGVyc2lzdCBtZXNzYWdlLiAwIGZvciBwZXJzaXN0ZW50XHJcbiAgICogdW50aWwgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgdG9vbHRpcC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRpc21pc3NPbkV4dGVybmFsQ2xpY2sgLSBTaG91bGQgdGhlIHRvb2x0aXAgYmUgZGlzbWlzc2VkIGJ5XHJcbiAgICogY2xpY2tpbmcgb3V0c2lkZSBvZiB0aGUgZWxlbWVudD8gVHJ1ZSBieSBkZWZhdWx0LlxyXG4gICAqL1xyXG4gIHRvb2x0aXAoZWxlbSwgbXNnLCBzLCBkaXNtaXNzT25FeHRlcm5hbENsaWNrID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgdG9vbHRpcENvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJ0b29sdGlwXCIpO1xyXG4gICAgZm9yIChsZXQgbXNnU2VnbWVudCBvZiBtc2cuc3BsaXQoXCJcXG5cIikpIHtcclxuICAgICAgY29uc3QgdG9vbHRpcE1zZyA9IGNvbXBvbmVudC5wKG1zZ1NlZ21lbnQudHJpbSgpLCBcInRvb2x0aXAtbXNnXCIpO1xyXG4gICAgICB0b29sdGlwQ29udGFpbmVyLmFwcGVuZCh0b29sdGlwTXNnKTtcclxuICAgIH1cclxuXHJcbiAgICB0b29sdGlwQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAxMDAlOyB3aWR0aDogZml0LWNvbnRlbnRcIjtcclxuICAgIC8vIHRoaXMgZW5zdXJlcyB0aGF0IHRoZSBsYXRlc3QgdG9vbHRpcHMgYWx3YXlzIGFwcGVhciBvbiB0aGUgdG9wLlxyXG4gICAgdG9vbHRpcENvbnRhaW5lci5zdHlsZS56SW5kZXggPSAxMCArIDEwICogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vbHRpcFwiKS5sZW5ndGgpO1xyXG5cclxuICAgIGVsZW0uYXBwZW5kKHRvb2x0aXBDb250YWluZXIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRpc21pc3NPbkV4dGVybmFsQ2xpY2spIHtcclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCAhPT0gdG9vbHRpcENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBjbGlja2VkOyByZW1vdmluZyB0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHAudGhlbigoKSA9PiB7XHJcbiAgICAgIGlmIChzICE9PSAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLnRvb2x0aXBcIikpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaW1lciBleHBpcmVkOyByZW1vdmluZyB0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICB0b29sdGlwQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHMgKiAxMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggYSBsb2FkaW5nIG1lc3NhZ2UgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsZW0gLSBFbGVtZW50IHRvIGF0dGFjaCBsb2FkaW5nIG1lc3NhZ2UgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1zZyAtIE1lc3NhZ2UgdG8gcGxheTsgZGVmYXVsdCBpcyBcImxvYWRpbmdcIi5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBsb2FkaW5nTWVzc2FnZShwYXJlbnRFbGVtLCBtc2c9XCJMb2FkaW5nXCIpIHtcclxuICAgIGNvbnN0IGxvYWRpbmdCYXNlID0gY29tcG9uZW50LnAobXNnLCBcImxvYWRpbmctdGV4dFwiKTtcclxuICAgIGNvbnN0IGxvYWRpbmdEb3RzID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImxvYWRpbmctZG90c1wiKTtcclxuXHJcbiAgICBsb2FkaW5nQmFzZS5hcHBlbmQobG9hZGluZ0RvdHMpO1xyXG4gICAgcGFyZW50RWxlbS5hcHBlbmQobG9hZGluZ0Jhc2UpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRpbmdBbmltYXRpb24gPSB7XHJcbiAgICAgIGlkOiAwLFxyXG4gICAgICBsb2FkaW5nVGV4dEJhc2U6IHBhcmVudEVsZW0ucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLXRleHRcIiksXHJcbiAgICAgIGxvYWRpbmdUZXh0RG90czogcGFyZW50RWxlbS5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctZG90c1wiKSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFNldHMgYW4gaW50ZXJ2YWwsIHVzaW5nIGl0IHRvIHBsYXkgYSBzaW1wbGUgYW5pbWF0aW9uLlxyXG4gICAgICAgKi9cclxuICAgICAgcGxheSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0QmFzZS50ZXh0Q29udGVudCA9IG1zZztcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0QmFzZS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tb3BhY2l0eVwiKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5sb2FkaW5nVGV4dERvdHMudGV4dENvbnRlbnQgIT09IFwiLi4uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nVGV4dERvdHMudGV4dENvbnRlbnQgKz0gXCIuXCI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNzUwKTtcclxuICAgICAgfSxcclxuICAgICAgc3RvcCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLmNsYXNzTGlzdC5hZGQoXCJuby1vcGFjaXR5XCIpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBsb2FkaW5nQW5pbWF0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50OyIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XHJcblxyXG4gIGdyaWQ7XHJcbiAgc2l6ZTtcclxuICBzaGlwcztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNpemUgPSAxMDtcclxuICAgIHRoaXMuZ3JpZCA9IFtdO1xyXG4gICAgdGhpcy5zaGlwcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcclxuICAgICAgdGhpcy5ncmlkW2ldID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplOyBqKyspIHtcclxuICAgICAgICB0aGlzLmdyaWRbaV1bal0gPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuZCBwbGFjZXMgYSBnaXZlbiBzaGlwIGJhc2VkIG9uIHRoZSBjb29yZGluYXRlc1xyXG4gICAqIGFzc2lnbmVkIHRvIHRoZSBzaGlwLiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gdGhlIGdpdmVuIGxlbmd0aCBvZiB0aGUgc2hpcC4gXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIHRoZSByb3cgdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQgY29vcmRpbmF0ZXMuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCAtIHRoZSBjb2x1bW4gdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQgY29vcmRpbmF0ZXMuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCAtIFBsYWNlIHRoZSBzaGlwIGhvcml6b250YWxseT9cclxuICAgKiBAcmV0dXJuIHtTaGlwfSAtIFRoZSBzaGlwIHRoYXQgd2FzIHBsYWNlZCwgb3IgbnVsbCBpZiB0aGUgc2hpcCBmYWlsZWRcclxuICAgKiB0byBiZSBwbGFjZWQuXHJcbiAgICovXHJcbiAgcGxhY2VTaGlwKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsKSB7XHJcbiAgICBpZiAocm93IDwgMCB8fCBjb2wgPCAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwbGFjZSBzaGlwIG9uIG5lZ2F0aXZlIGNvb3JkaW5hdGVzLlwiKTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBudWxsIGlmIG91dCBvZiBib3VuZHNcclxuICAgIGlmICh2ZXJ0aWNhbCkgeyAvLyB2ZXJ0aWNhbCBvdXQgb2YgYm91bmRzIGludm9sdmVzIHJvdy5cclxuICAgICAgaWYgKHJvdyArIGxlbmd0aCA+IHRoaXMuZ3JpZC5sZW5ndGggfHwgY29sID4gdGhpcy5ncmlkLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY29sICsgbGVuZ3RoID4gdGhpcy5ncmlkLmxlbmd0aCB8fCByb3cgPiB0aGlzLmdyaWQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNoZWNrIHRvIHNlZSB0aGF0IHRoZSBnaXZlbiByb3cgYW5kIGNvbCArIGxlbmd0aCBhcmUgbm90IGFscmVhZHkgb2NjdXBpZWQuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IChyb3cgKyBsZW5ndGgpOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ncmlkW2ldW2NvbF0gIT09IFwiXCIpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IChjb2wgKyBsZW5ndGgpOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd11baV0gIT09IFwiXCIpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG90aGVyd2lzZSB3ZSdyZSBnb29kIHRvIHBsYWNlIGEgc2hpcC5cclxuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnNoaXBzLmxlbmd0aDtcclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IChyb3cgKyBzaGlwLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFtpXVtjb2xdID0gaWQ7XHJcbiAgICAgICAgc2hpcC5zdGF0dXNbYCR7aX0sJHtjb2x9YF0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IChjb2wgKyBzaGlwLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFtyb3ddW2ldID0gaWQ7XHJcbiAgICAgICAgc2hpcC5zdGF0dXNbYCR7cm93fSwke2l9YF0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuXHJcbiAgICByZXR1cm4gc2hpcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExldCB0aGUgZ2FtZWJvYXJkIHJlY2VpdmUgYW4gYXR0YWNrIGF0IHRoZSBnaXZlbiByb3cgYW5kIGNvbHVtbi4gXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBoaXQuIDEgaWYgYSBoaXQgd2FzIHN1Y2Nlc3NmdWwsIDBcclxuICAgKiBpZiB0aGUgaGl0IG1pc3NlZCwgYW5kIC0xIGlmIHRoZSBhcmVhIHdhcyBhbHJlYWR5IGhpdC4gXHJcbiAgICovXHJcbiAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbCkge1xyXG4gICAgY29uc29sZS5sb2coe3JvdywgY29sfSk7XHJcbiAgICBpZiAoaXNOYU4ocGFyc2VJbnQocm93KSkgfHwgY29sID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcHJvdmlkZSByb3cgYW5kIGNvbCBjb29yZGluYXRlcyBhcyBhIG51bWJlci5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNoaXBJZCA9IHRoaXMuZ3JpZFtyb3ddW2NvbF07XHJcblxyXG4gICAgaWYgKHNoaXBJZCA9PT0gXCJ4XCIgfHwgc2hpcElkID09PSBcIm9cIikge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9IGVsc2UgaWYgKHNoaXBJZCA9PT0gXCJcIikge1xyXG4gICAgICB0aGlzLmdyaWRbcm93XVtjb2xdID0gXCJvXCI7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coc2hpcElkKTtcclxuICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXSA9IFwieFwiO1xyXG4gICAgICB0aGlzLnNoaXBzW3NoaXBJZF0uaGl0KHJvdywgY29sKTtcclxuXHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0R3JpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgfVxyXG5cclxuICBpc1NoaXBTdW5rKGluZGV4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaGlwc1tpbmRleF0uaXNTdW5rKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYXZlIGFsbCBzaGlwcyBiZWVuIHN1bmsgb24gdGhlIGdhbWVib2FyZD9cclxuICAgKi9cclxuICBhbGxTaGlwc1N1bmsoKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcclxuICAgIHRoaXMuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdGF0dXM7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IEJhdHRsZXNoaXBFbGVtZW50cyB9IGZyb20gXCIuL0JhdHRsZXNoaXBFbGVtZW50XCI7XHJcbmltcG9ydCBQbGF5ZXIsIHsgQ1BVX1NUQVRFIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCB7IHNldE5hbWUgfSBmcm9tIFwiLi9zaGlwXCI7XHJcbmltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcblxyXG4vKipcclxuICogTWFuYWdlcyBhIGdhbWUgc2Vzc2lvbiBmb3IgYmF0dGxlc2hpcC4gS2VlcHMgdHJhY2sgb2YgcGxheWVycy5cclxuICogQ2FuIHN0YXJ0LCBlbmQsIGFuZCByZXNldCB0aGUgZ2FtZS5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURSA9IHtcclxuICBwMXR1cm46IFwiUGxheWVyIDEncyB0dXJuXCIsXHJcbiAgcDJ0dXJuOiBcIlBsYXllciAyJ3MgdHVyblwiLFxyXG4gIGVuZGVkOiBcIkdhbWUgT3Zlci5cIixcclxuICBwMXZpY3Rvcnk6IFwiUGxheWVyIDEgd2lucy5cIixcclxuICBwMnZpY3Rvcnk6IFwiUGxheWVyIDIgd2lucy5cIixcclxuICByZXN0YXJ0OiBcIlJlc3RhcnRpbmcgZ2FtZS4uLlwiLFxyXG4gIHBsYXlpbmc6IFwiR2FtZSBzdGFydCFcIixcclxuICB3ZWxjb21lUHJvbXB0OiBcIldlbGNvbWUsIENvbW1hbmRlci5cIixcclxuICByZXBsYXlQcm9tcHQ6IFwiUGxhY2UgeW91ciBzaGlwcyBvbiB0aGUgZ2FtZWJvYXJkLlwiLFxyXG4gIGNwdVNoaXBTdW5rOiBcIkEgc2hpcCBvZiB0aGUgQ1BVJ3Mgd2FzIHN1bmshXCIsXHJcbiAgY3B1U2hpcEhpdDogXCJBIHNoaXAgb2YgdGhlIENQVSdzIHdhcyBzdW5rIVwiLFxyXG4gIHBsYXllclNoaXBTdW5rOiBcIkEgc2hpcCBvZiB0aGUgcGxheWVyJ3Mgd2FzIHN1bmshXCIsXHJcbiAgcGxheWVyU2hpcEhpdDogXCJBIHNoaXAgb2YgdGhlIHBsYXllcidzIHdhcyBoaXQhIVwiLFxyXG4gIGFscmVhZHlBdHRhY2tlZDogXCJUaGlzIGNlbGwgd2FzIGFscmVhZHkgYXR0YWNrZWRcIlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNVQkRJQUxPR1MgPSB7XHJcbiAgcDF0dXJuOiBcIkNsaWNrIG9uIHRoZSBvcHBvbmVudCBnYW1lYm9hcmQgdG8gZmlyZSBhIHNob3QuXCIsXHJcbiAgcDJ0dXJuOiBcIlRoaW5raW5nLi4uXCIsXHJcbiAgY29udHJvbHMxOiBcIkRyYWcgYW5kIGRyb3Agc2hpcHMgb250byB0aGUgZ2FtZWJvYXJkLlwiLFxyXG4gIGNvbnRyb2xzMjogXCJDbGljayAod2hlbiBwbGFjZWQpIHRvIHJvdGF0ZSBzaGlwLlwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciB7XHJcbiAgXHJcbiAgc3RhdGljICNpbnN0YW5jZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHBsYXllcnMgaW52b2x2ZWQgaW4gdGhlIGdhbWUuXHJcbiAgICovXHJcbiAgcGxheWVycztcclxuXHJcbiAgLyoqXHJcbiAgICogSXMgaXQgcGxheWVyIDEncyB0dXJuPyBcclxuICAgKi9cclxuICAjcDF0dXJuO1xyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSBvZiB0aGUgbGVuZ3RocyBvZiBlYWNoIHNoaXAgdGhhdCB0aGUgcGxheWVyIHdpbGwgaGF2ZSBpbiB0aGVpciBhcnNlbmFsLlxyXG4gICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgKi9cclxuICBzaGlwTGVuZ3RocztcclxuXHJcbiAgLyoqXHJcbiAgICogSGFzIHRoZSBnYW1lIGVuZGVkIHlldD9cclxuICAgKi9cclxuICAjZ2FtZU92ZXI7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogVHJ1ZSBpZiBwbGF5ZXIgMSB3b24sIGZhbHNlIGlmIHBsYXllciAyIHdvbi5cclxuICAgKi9cclxuICAjaXNXaW5uZXJQMTtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5zdGFuY2Ugb2YgYSBCYXR0bGVzaGlwRWxlbWVudHMgY2xhc3MgdG8gdXNlIHRvIG1hbmlwdWxhdGUgdGhlIHZpZXcgb2YgdGhlIHBhZ2UuXHJcbiAgICogQHR5cGUge0JhdHRsZXNoaXBFbGVtZW50c31cclxuICAgKi9cclxuICAjcGFnZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBnYW1lLiBBc3NpZ25zIENQVSBhcyBwbGF5ZXIgMi5cclxuICAgKiBAcGFyYW0ge1BsYXllcltdfSBwbGF5ZXJzIC0gQW4gYXJyYXkgb2YgdGhlIHBsYXllcnMgaW4gdGhlIGdhbWUuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBwMXN0YXJ0IC0gU2hvdWxkIHBsYXllciAxIHN0YXJ0IGZpcnN0PyBUcnVlIGJ5IGRlZmF1bHQuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMiwgcDFzdGFydCA9IHRydWUsIHNoaXBMZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdKSB7XHJcbiAgICBpZiAoR2FtZU1hbmFnZXIuI2luc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIEdhbWVNYW5hZ2VyLiNpbnN0YW5jZTtcclxuICAgIH0gXHJcblxyXG4gICAgR2FtZU1hbmFnZXIuI2luc3RhbmNlID0gdGhpcztcclxuICAgIHRoaXMucGxheWVycyA9IHBsYXllcjIuY3B1ID8gW3BsYXllcjEsIHBsYXllcjJdIDogW3BsYXllcjIsIHBsYXllcjFdO1xyXG4gICAgdGhpcy4jcDF0dXJuID0gcDFzdGFydDtcclxuICAgIHRoaXMuc2hpcExlbmd0aHMgPSBzaGlwTGVuZ3RocztcclxuICAgIHRoaXMuI2dhbWVPdmVyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgZ2FtZS4gSGFzIHRoZSBDUFUgcGxhY2Ugc2hpcHMsIGlzc3VlcyBhIHN0YXJ0IG1lc3NhZ2Ugb24gdGhlIHZpZXcsXHJcbiAgICogZGlzYWJsZXMgYWxsIGhhbmRsZXJzIG9mIGFsbCBzaGlwcywgYW5kIHRoZW4gaGFzIG9uZSBvZiB0aGUgcGxheWVycyBzZWxlY3QgYSBtb3ZlLlxyXG4gICAqIE1ha2VzIGFsbCBjZWxscyBcImF0dGFja2FibGUuXCJcclxuICAgKi9cclxuICBzdGFydEdhbWUoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRyb2xzLWFyZWEsIC5tZW51LWFyZWEsIC5wMi5nYW1lYm9hcmQsIC5zaGlwLXJvc3RlclwiKVxyXG4gICAgICAgIC5mb3JFYWNoKGFyZWEgPT4gYXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tZGlzcGxheVwiKSk7IFxyXG5cclxuICAgIHRoaXMucGxheWVyc1swXS5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMS1uYW1lXCIpLnZhbHVlO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEuZ2FtZWJvYXJkIC5nYW1lYm9hcmQtb3duZXJcIikudGV4dENvbnRlbnQgPVxyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5uYW1lICsgXCIgKFlvdSlcIjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDIuZ2FtZWJvYXJkIC5nYW1lYm9hcmQtb3duZXJcIikudGV4dENvbnRlbnQgPVxyXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS5uYW1lO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZS1idXR0b25cIikuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKS5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICBzaGlwLm9uY2xpY2sgPSBudWxsO1xyXG4gICAgICBzaGlwLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcGxhY2VzIHNoaXAgZm9yIGNwdS5cclxuICAgIHRoaXMucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgIGlmIChwbGF5ZXIuY3B1KSB7XHJcbiAgICAgICAgdGhpcy4jY3B1UGxhY2VTaGlwcyhwbGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZWdpc3RlciBzaGlwcyBmb3IgdGhlIHBsYXllci5cclxuICAgIHRoaXMuI3BsYXllclJlZ2lzdGVyU2hpcHMoKTtcclxuXHJcbiAgICB0aGlzLiNwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLnBsYXlpbmcpO1xyXG5cclxuICAgIGlmICh0aGlzLiNwMXR1cm4pIHtcclxuICAgICAgdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wMXR1cm4pO1xyXG4gICAgICB0aGlzLiNwYWdlLnNldFN1YkRpYWxvZyhTVUJESUFMT0dTLnAxdHVybik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiNwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLnAydHVybik7XHJcbiAgICAgIHRoaXMuI3BhZ2Uuc2V0U3ViRGlhbG9nKFNVQkRJQUxPR1MucDJ0dXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZC1hcmVhXCIpLmNsYXNzTGlzdC5hZGQoXCJnYW1lLWFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0YWJsZVwiKS5mb3JFYWNoKFxyXG4gICAgICBjZWxsID0+IGNlbGwuY2xhc3NMaXN0LmFkZChcImF0dGFja2FibGVcIikpO1xyXG5cclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMi5nYW1lYm9hcmQgLmF0dGFja2FibGVcIikuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZi4jcGxheVJvdW5kLmJpbmQodGhpcykpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBRdWVyaWVzIGJvdGggcGxheWVycycgZ2FtZWJvYXJkcyB0byBzZWUgaWYgdGhlIGdhbWUgc2hvdWxkIGJlIGVuZGVkLlxyXG4gICAqL1xyXG4gICNkZXRlcm1pbmVJZkdhbWVPdmVyKCkge1xyXG4gICAgY29uc3QgcDF2aWN0b3J5ID0gdGhpcy5wbGF5ZXJzWzFdLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKTtcclxuICAgIGNvbnN0IHAydmljdG9yeSA9IHRoaXMucGxheWVyc1swXS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCk7XHJcbiAgICBcclxuICAgIGlmIChwMXZpY3RvcnkpIHtcclxuICAgICAgdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wMXZpY3RvcnkpO1xyXG4gICAgICB0aGlzLiNpc1dpbm5lclAxID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAocDJ2aWN0b3J5KSB7XHJcbiAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUucDJ2aWN0b3J5KTtcclxuICAgICAgdGhpcy4jaXNXaW5uZXJQMSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwMXZpY3RvcnkgfHwgcDJ2aWN0b3J5KSB7XHJcbiAgICAgIHRoaXMuI2dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgdGhpcy4jZW5kR2FtZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgI2VuZEdhbWUoKSB7XHJcbiAgICAvLyByZXZlYWwgY3B1IHNoaXBzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNwdS1zaGlwLXBsYWNlZFwiKS5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjcHUtc2hpcC1yZXZlYWxcIik7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUuZW5kZWQpO1xyXG4gICAgdGhpcy4jcGFnZS5zZXRTdWJEaWFsb2coXCJcIik7XHJcbiAgICAvLyB1cGRhdGUgZ2FtZSByZXN1bHRzIGhlcmUuXHJcbiAgICBjb25zdCBzdW1tYXJ5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW1tYXJ5LWFyZWFcIik7XHJcblxyXG4gICAgc3VtbWFyeUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgIC8vIDEuIFNob3cgdGhlIHdpbm5lci5cclxuICAgIGlmICh0aGlzLiNpc1dpbm5lclAxKSB7XHJcbiAgICAgIHN1bW1hcnlDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIikudGV4dENvbnRlbnQgPSB0aGlzLnBsYXllcnNbMF0ubmFtZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1bW1hcnlDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIikudGV4dENvbnRlbnQgPSB0aGlzLnBsYXllcnNbMV0ubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAyLiBTaG93IHRoZSBhY2N1cmFjeSBtZXRyaWNzLlxyXG4gICAgY29uc3QgcDFBY2NNZXRyaWMgPSBzdW1tYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucDEuYWNjdXJhY3ktbWV0cmljXCIpO1xyXG4gICAgY29uc3QgcDJBY2NNZXRyaWMgPSBzdW1tYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucDIuYWNjdXJhY3ktbWV0cmljXCIpO1xyXG5cclxuICAgIHAxQWNjTWV0cmljLnRleHRDb250ZW50ID0gdGhpcy4jY2FsY3VsYXRlQWNjdXJhY3kodGhpcy5wbGF5ZXJzWzFdKTtcclxuICAgIHAyQWNjTWV0cmljLnRleHRDb250ZW50ID0gdGhpcy4jY2FsY3VsYXRlQWNjdXJhY3kodGhpcy5wbGF5ZXJzWzBdKTtcclxuXHJcbiAgICBzdW1tYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1hZ2FpblwiKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jcmVzZXRHYW1lLmJpbmQodGhpcyksIHtvbmNlOiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGUgdGhlIGFjY3VyYWN5LCBnaXZlbiB0aGUgcGxheWVyLiBVc2VzIHRoYXQncyBwZXJzb24gZ2FtZWJvYXJkXHJcbiAgICogdG8gZGV0ZXJtaW5lIHRoZSBhY2N1cmFjeS5cclxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIDogdGhlIHBlcnNvbiB3aG8geW91IGF0dGFja2VkLlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRvdGFsIHNob3RzIC8gaGl0cyBhbmQgdGhlIGFjY3VyYWN5IG9mIGl0LlxyXG4gICAqL1xyXG4gICNjYWxjdWxhdGVBY2N1cmFjeShwbGF5ZXIpIHtcclxuICAgIGxldCB0b3RhbFNob3RzID0gMDtcclxuICAgIGxldCBoaXRzID0gMDtcclxuICAgIHBsYXllci5nYW1lYm9hcmQuZ3JpZC5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIHJvdy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGlmIChjZWxsID09PSBcInhcIiB8fCBjZWxsID09PSBcIm9cIikge1xyXG4gICAgICAgICAgdG90YWxTaG90cyArPSAxOyBcclxuICAgICAgICAgIGlmIChjZWxsID09PSBcInhcIikge1xyXG4gICAgICAgICAgICBoaXRzICs9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYWNjdXJhY3kgPSAoaGl0cyAvIHRvdGFsU2hvdHMpICogMTAwO1xyXG4gICAgcmV0dXJuIGAke2hpdHN9LyR7dG90YWxTaG90c30gKCR7YWNjdXJhY3kudG9GaXhlZCgyKX0lKWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIGdhbWUgYnk6XHJcbiAgICogLSBSZW1hcmtpbmcgYWxsIGNlbGxzLlxyXG4gICAqIC0gUmVtb3ZpbmcgYWxsIHNoaXBzIGZyb20gdGhlIGdhbWVib2FyZC5cclxuICAgKiAtIFJlY3JlYXRpbmcgcGxheWVyIGluc3RhbmNlcy5cclxuICAgKiAtIFJlY3JlYXRpbmcgZHJhZ2dhYmxlIHNoaXBzIGluIHRoZSBzZWxlY3Rpb24gYXJlYS5cclxuICAgKiAtIEFsbG93aW5nIHRoZSB1c2VyIHRvIHN0YXJ0IHRoZSBnYW1lIGFnYWluLlxyXG4gICAqL1xyXG4gICNyZXNldEdhbWUoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtbmFtZVwiKS5mb3JFYWNoKHNoaXBOYW1lID0+IHNoaXBOYW1lLnJlbW92ZSgpKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGFibGVcIikuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgY2VsbC5jbGFzc05hbWUgPSBcImNlbGwgc2VsZWN0YWJsZVwiO1xyXG4gICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IFwiXCI7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKS5mb3JFYWNoKHNoaXAgPT4gc2hpcC5yZW1vdmUoKSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AxLW5hbWVcIikudmFsdWUgPSB0aGlzLnBsYXllcnNbMF0ubmFtZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkLW93bmVyXCIpLnRleHRDb250ZW50ID0gXCJQbGF5ZXJcIjtcclxuXHJcbiAgICB0aGlzLnBsYXllcnNbMF0gPSBuZXcgUGxheWVyKHRoaXMucGxheWVyc1swXS5uYW1lLCBmYWxzZSk7XHJcbiAgICB0aGlzLnBsYXllcnNbMV0gPSBuZXcgUGxheWVyKHRoaXMucGxheWVyc1sxXS5uYW1lLCB0cnVlKTtcclxuXHJcbiAgICB0aGlzLiNwYWdlLmdlbmVyYXRlRHJhZ2dhYmxlU2hpcHMoKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWUtYnV0dG9uXCIpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLiNnYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgdGhpcy4jcDF0dXJuID0gdHJ1ZTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1bW1hcnktYXJlYSwgLm1lbnUtYXJlYSwgLnAyLmdhbWVib2FyZCxcIiArXHJcbiAgICBcImNvbnRyb2xzLWFyZWEsIC5zaGlwLXJvc3RlclwiKS5mb3JFYWNoKGFyZWEgPT4gYXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tZGlzcGxheVwiKSk7XHJcblxyXG4gICAgdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS53ZWxjb21lUHJvbXB0KTtcclxuICAgIHRoaXMuI3BhZ2Uuc2V0U3ViRGlhbG9nKFNVQkRJQUxPR1MuY29udHJvbHMxLCBTVUJESUFMT0dTLmNvbnRyb2xzMik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQbGF5IGEgcm91bmQgb2YgYmF0dGxlc2hpcHMsIGFsbG93aW5nIGVhY2ggcGxheWVyIHRvIGZpcmUuXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZSA6IEV2ZW50OyB1c2VkIHRvIHBpY2sgdXAgdGhlIGNlbGwgdGhlIHVzZXIgY2xpY2tlZC4gQWNxdWlyZXNcclxuICAgKiBjb29yZGluYXRlcyBmcm9tIGl0IHRvIGF0dGFjay5cclxuICAgKi9cclxuICAjcGxheVJvdW5kKGUpIHtcclxuICAgIGNvbnN0IHRoaW5rVGltZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1MDApICsgODAwO1xyXG4gICAgY29uc3QgcGVyZm9ybUNQVUF0dGFjayA9ICgpID0+IHtcclxuICAgICAgdGhpcy4jY3B1RmlyZUF0dGFjaygpO1xyXG4gICAgICBpZiAoIXRoaXMuI2dhbWVPdmVyKSB7XHJcbiAgICAgICAgdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wMXR1cm4pO1xyXG4gICAgICAgIHRoaXMuI3BhZ2Uuc2V0U3ViRGlhbG9nKFNVQkRJQUxPR1MucDF0dXJuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLiNwMXR1cm4gJiYgIXRoaXMuI2dhbWVPdmVyKSB7XHJcbiAgICAgIHRoaXMuI3BsYXllckZpcmVBdHRhY2soZSk7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuI2dhbWVPdmVyKSB7XHJcbiAgICAgICAgdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wMnR1cm4pO1xyXG4gICAgICAgIHRoaXMuI3BhZ2Uuc2V0U3ViRGlhbG9nKFNVQkRJQUxPR1MucDJ0dXJuKTtcclxuICBcclxuICAgICAgICBzZXRUaW1lb3V0KHBlcmZvcm1DUFVBdHRhY2suYmluZCh0aGlzKSwgdGhpbmtUaW1lcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIHBsYXllciBzaGlwcyBvbnRvIGEgcmVjb3JkIGFuZCBhbHNvIGxpc3QgdGhlbSBvbiBhIG9uIGEgdmlldy5cclxuICAgKi9cclxuICAjcGxheWVyUmVnaXN0ZXJTaGlwcygpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBnYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAxLmdhbWVib2FyZFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuc2hpcExlbmd0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHNoaXAgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgI3BsYXllci1zaGlwJHtpfWApO1xyXG4gICAgICBsZXQgb3JpZ2luQ2VsbCA9IHNoaXAucGFyZW50Tm9kZTtcclxuICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KG9yaWdpbkNlbGwuZGF0YXNldC5yb3cpO1xyXG4gICAgICBsZXQgY29sID0gcGFyc2VJbnQob3JpZ2luQ2VsbC5kYXRhc2V0LmNvbCk7XHJcbiAgICAgIGxldCBsZW5ndGggPSBzaGlwLmNoaWxkRWxlbWVudENvdW50O1xyXG4gICAgICBsZXQgdmVydGljYWwgPSBzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpO1xyXG5cclxuICAgICAgc2VsZi5wbGF5ZXJzWzBdLmdhbWVib2FyZC5wbGFjZVNoaXAobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuI3BhZ2UuZW51bWVyYXRlUGxheWVyU2hpcFJvc3RlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNrIGEgcGxheWVyLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBFdmVudCB3aGljaCB0aGUgaGFuZGxlciBjYXB0dXJlcy5cclxuICAgKiBAcGFyYW0ge1BsYXllcn0gYXR0YWNrZXIgLSBUaGUgYXR0YWNraW5nIHBsYXllci5cclxuICAgKiBAcGFyYW0ge1BsYXllcn0gYXR0YWNrZWQgLSBUaGUgcGxheWVyIHJlY2VpdmluZyB0aGUgYXR0YWNrLlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gICNwbGF5ZXJGaXJlQXR0YWNrKGUpIHtcclxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXR0YWNrZWRcIikpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJUaGlzIGNlbGwgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZCFcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm93KTtcclxuICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbCk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocm93LCBjb2wpO1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGxheWVyc1swXS5hdHRhY2sodGhpcy5wbGF5ZXJzWzFdLCByb3csIGNvbCk7XHJcbiAgICBzd2l0Y2gocmVzdWx0KSB7XHJcbiAgICAgIGNhc2UgMToge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXQncyBhIGhpdCFcIik7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcblxyXG4gICAgICAgIGxldCBzaGlwSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zaGlwLnNwbGl0KFwiY3B1LXNoaXBcIilbMV07XHJcbiAgICAgICAgbGV0IHNoaXBTdW5rID0gdGhpcy5wbGF5ZXJzWzFdLmdhbWVib2FyZC5pc1NoaXBTdW5rKHNoaXBJZCk7XHJcbiAgICAgICAgaWYgKHNoaXBTdW5rKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucDIuZ2FtZWJvYXJkIC5zaGlwLW5hbWVbZGF0YS1zaGlwPVwiY3B1LXNoaXAke3NoaXBJZH1cIl1gKVxyXG4gICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXQncyBhIG1pc3MhXCIpO1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMuI3AxdHVybiA9IGZhbHNlOyAvLyBDUFUgbXVzdCBtYWtlIGEgc3VjY2Vzc2Z1bCBtb3ZlIGJlZm9yZSB0aGUgcGxheWVyIG1vdmVzIGFnYWluLlxyXG5cclxuICAgIHRoaXMuI2RldGVybWluZUlmR2FtZU92ZXIoKTtcclxuICB9XHJcblxyXG4gICNjcHVBdHRhY2tEZXRlcm1pbmVDb29yZGluYXRlcyhjcHUpIHtcclxuICAgIGxldCByb3c7XHJcbiAgICBsZXQgY29sOyBcclxuICAgIGxldCBlbmRJbmRleCA9IGNwdS5nYW1lYm9hcmQuc2l6ZSAtIDE7XHJcblxyXG4gICAgc3dpdGNoKGNwdS5jcHVCZWhhdmlvcikge1xyXG4gICAgICBjYXNlIENQVV9TVEFURS5yYW5kb206IHtcclxuICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoZW5kSW5kZXgpKTtcclxuICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoZW5kSW5kZXgpKTtcclxuICAgICAgICAvLyBkZWJ1Z1xyXG4gICAgICAgIC8vIHJvdyA9IDA7XHJcbiAgICAgICAgLy8gY29sID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIENQVV9TVEFURS5mb3VuZDoge1xyXG4gICAgICAgIC8vIHdoZW4gZm91bmQsIHRhcmdldCBwcm94aW1pdHkgb2YgMSB1bml0IHJhZGl1cyB0byB0aGUgZm91bmQgY2VsbC5cclxuICAgICAgICAvLyB0aGF0IG1lYW5zIGFsdGVyaW5nIHRoZSByb3cgWE9SIGNvbHVtbiBiYXNlZCBvbiB0aGUgbGFzdCBzdWNjZXNzZnVsIGhpdC5cclxuICAgICAgICBcclxuICAgICAgICAvLyBmb3IgZGVjaWRpbmcgd2hldGhlciB0byBwaWNrIHJvdyBvciBjb2x1bW4gZm9yIGFkanVzdG1lbnRcclxuICAgICAgICBsZXQgcGlja1JvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgLy8gZm9yIGRlY2lkaW5nIHdoZXRoZXIgdG8gcGx1cyBvciBtaW51cy5cclxuICAgICAgICBsZXQgcGx1c01pbnVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSA9PT0gMCA/IDEgOiAtMTtcclxuXHJcbiAgICAgICAgaWYgKHBpY2tSb3cpIHtcclxuICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBzdWNjZXNzZnVsIGhpdCB3YXMgMCB3ZSBkb24ndCB3YW50IC0xIC0tIGFsd2F5cyBmb3JjZSBpdCB0byBiZSArMS5cclxuICAgICAgICAgIGlmIChjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyA9PT0gMCkge1xyXG4gICAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyArIDE7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ID09PSBlbmRJbmRleCkge1xyXG4gICAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyAtIDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyArIHBsdXNNaW51cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3Qgc3VjY2Vzc2Z1bCBoaXQgd2FzIDAgd2UgZG9uJ3Qgd2FudCAtMSAtLSBhbHdheXMgZm9yY2UgaXQgdG8gYmUgKzEuXHJcbiAgICAgICAgICBpZiAoY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgPT09IDApIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgKyAxO1xyXG4gICAgICAgICAgLy8gbGlrZXdpc2UgZm9yIHRoZSBhcmVhcyB3aGVyZSB0aGUgc2hpcCBpcyBhdCB0aGUgZWRnZSBvZiB0aGUgYm9hcmQuIExvb2sgYmFjay5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgPT09IGVuZEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sIC0gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sICsgcGx1c01pbnVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQ1BVX1NUQVRFLmZvY3VzZWQ6IHtcclxuICAgICAgICAvLyBpbiBhIGZvY3VzZWQgbW9kZSwgdGhlIENQVSBzdGFydHMgdHJhdmVyc2luZyBpbiBhIHNpbmdsZSBkaXJlY3Rpb24gdW50aWxcclxuICAgICAgICAvLyB0aGUgZGVzdHJ1Y3Rpb24gb2YgdGhlIHNoaXAgaXMgYW5ub3VuY2VkLCBhIG1pc3Mgb2NjdXJzLCBvciBpdCBoaXRzIGEgd2FsbC5cclxuXHJcbiAgICAgICAgLy8gdGhlIGRpcmVjdGlvbiB0byBiZSB0cmF2ZXJzZWQgZGVwZW5kcyBvbiB0aGUgbGFzdCB0d28gc3VjY2Vzc2Z1bCBoaXRzXHJcbiAgICAgICAgLy8gYW5kIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhvc2UgY29vcmRpbmF0ZXMuXHJcbiAgICAgICAgLy8gYSByb3dEaWZmIGluZGljYXRlcyB0byBsb29rIHVwIG9yIGRvd24sIGFzIHRoZSBzaGlwIGlzIGx5aW5nIHZlcnRpY2FsbHkuXHJcbiAgICAgICAgLy8gYSBjb2xEaWZmIGluZGljYXRlcyB0byBsb29rIGxlZnQgb3IgcmlnaHQsIGFzIHRoZSBzaGlwIGlzIGx5aW5nIGhvcml6b250YWxseS5cclxuXHJcbiAgICAgICAgbGV0IHJvd0RpZmYgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyAtXHJcbiAgICAgICAgICAgIGNwdS5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdztcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY29sRGlmZiA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sIC1cclxuICAgICAgICAgICAgY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHdoZW4gdG8gbG9vayB1cCAvIGRvd24gLS0gdGhlcmUncyBhIHJvdyBkaWZmZXJlbmNlXHJcbiAgICAgICAgaWYgKHJvd0RpZmYpIHtcclxuICAgICAgICAgIC8vIGZvciB3aGVuIHRoZSBmb2N1cyBuZWVkcyB0byBiZSBpbnZlcnRlZCAobWlzcyBvciBoaXQgYSBncmlkIGJhcnJpZXIpXHJcbiAgICAgICAgICBpZiAoY3B1LmNwdUZvY3VzSW52ZXJ0KSB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZGlyZWN0aW9uIHRoZSBjcHUgd2FzIHRyYXZlbGluZyBpbiBwcmV2aW91c2x5OyBpZiBwb3NpdGl2ZSwgdGhlbiBpdCB3YXMgZ29pbmcgdXAuXHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gZ28gZG93biBieSBhZGRpbmcuXHJcbiAgICAgICAgICAgIGlmIChyb3dEaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ICsgMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBlbHNlIGl0IHdhcyBuZWdhdGl2ZSwgc28gaXQgd2FzIGdvaW5nIGRvd24sIHNvIHdlIG5lZWQgdG8gZ28gdXAuXHJcbiAgICAgICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNwdS5jcHVGb2N1c0ludmVydCA9IGZhbHNlO1xyXG4gICAgICAgICAgLy8gaWYgYXQgdGhlIGVuZCwgc3RhcnQgc2VhcmNoaW5nIHVwd2FyZHMgaW5zdGVhZC5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ID09PSBlbmRJbmRleCkgeyBcclxuICAgICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgLSAxO1xyXG4gICAgICAgICAgLy8gaWYgYXQgdGhlIGJlZ2lubmluZywgc3RhcnQgc2VhcmNoaW5nIGRvd253YXJkcy5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ICsgMTtcclxuICAgICAgICAgIC8vIGVsc2Ugd2UncmUgaW4gdGhlIG1pZGRsZSwgYW5kIGlmIHRoYXQgZGlmZmVyZW5jZSBpcyAxLCB0aGVuIGxvb2sgdXB3YXJkcy5cclxuICAgICAgICAgIH0gZWxzZSBpZiAocm93RGlmZiA+IDApIHtcclxuICAgICAgICAgICAgcm93ID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93IC0gMTtcclxuICAgICAgICAgIC8vIGFsc28gaW4gdGhlIG1pZGRsZSwgYnV0IGZvciBkaWZmZXJlbmNlIDEsIHRoZW4gbG9vayBkb3dud2FyZHMuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJvd0RpZmYgPCAwKSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdyArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBjb2x1bW4gaXMgYSBnaXZlbiAtLSBrZWVwIGl0IHRoZSBzYW1lLlxyXG4gICAgICAgICAgY29sID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sO1xyXG4gICAgICAgIC8vIGVsc2UgaW4gdGhlIGNhc2Ugb2YgYSBjb2x1bW4gZGlmZmVyZW5jZSwgd2UgbG9vayBsZWZ0IC8gcmlnaHQuXHJcbiAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICBpZiAoY3B1LmNwdUZvY3VzSW52ZXJ0KSB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZGlyZWN0aW9uIHRoZSBjcHUgd2FzIHRyYXZlbGluZyBpbiBwcmV2aW91c2x5OyBpZiBwb3NpdGl2ZSwgdGhlbiBpdCB3YXMgZ29pbmcgdXAuXHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gZ28gZG93biBieSBhZGRpbmcuXHJcbiAgICAgICAgICAgIGlmIChjb2xEaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sICsgMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBlbHNlIGl0IHdhcyBuZWdhdGl2ZSwgc28gaXQgd2FzIHRyYXZlbGluZyBsZWZ0d2FyZHM7IHdlIG5lZWQgdG8gZ28gcmlnaHQuXHJcbiAgICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNwdS5jcHVGb2N1c0ludmVydCA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2wgPT09IGVuZEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sIC0gMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sICsgMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY29sRGlmZiA+IDApIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sIC0gMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY29sRGlmZiA8IDApIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sICsgMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByb3cgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3c7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7cm93LCBjb2x9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW3JvdywgY29sXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciB0aGUgQ1BVIHRvIGRlY2lkZSBvbiBhbiBhdHRhY2suXHJcbiAgICovXHJcbiAgI2NwdUZpcmVBdHRhY2soKSB7XHJcbiAgICBsZXQgcDIgPSB0aGlzLnBsYXllcnNbMV07XHJcbiAgICBsZXQgc3RhdHVzID0gLTE7XHJcbiAgICBsZXQgc2hvdHNGaXJlZCA9IDA7XHJcbiAgICBjb25zdCBzdHVja1RocmVzaG9sZCA9IDEwO1xyXG4gICAgbGV0IHJvdztcclxuICAgIGxldCBjb2w7XHJcbiAgICB3aGlsZSAoc3RhdHVzID09PSAtMSkge1xyXG4gICAgICBbcm93LCBjb2xdID0gdGhpcy4jY3B1QXR0YWNrRGV0ZXJtaW5lQ29vcmRpbmF0ZXMocDIpO1xyXG4gICAgICBcclxuICAgICAgc3RhdHVzID0gcDIuYXR0YWNrKHRoaXMucGxheWVyc1swXSwgcm93LCBjb2wpO1xyXG4gICAgICBcclxuICAgICAgaWYoc2hvdHNGaXJlZCA+IHN0dWNrVGhyZXNob2xkKSB7XHJcbiAgICAgICAgc2hvdHNGaXJlZCA9IDA7XHJcbiAgICAgICAgcDIucmVzZXRDUFVCZWhhdmlvcnMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2hvdHNGaXJlZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhdHRhY2tlZENlbGwgPSBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYClcclxuICAgIGF0dGFja2VkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWRcIik7XHJcblxyXG4gICAgc3dpdGNoKHN0YXR1cykge1xyXG4gICAgICBjYXNlIDE6IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNQVSBzY29yZXMgYSBoaXQhXCIpO1xyXG4gICAgICAgIGF0dGFja2VkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG5cclxuICAgICAgICBsZXQgc2hpcElkID0gYXR0YWNrZWRDZWxsLmRhdGFzZXQuc2hpcC5zcGxpdChcInBsYXllci1zaGlwXCIpWzFdO1xyXG5cclxuICAgICAgICBsZXQgc2hpcFN1bmsgPSB0aGlzLnBsYXllcnNbMF0uZ2FtZWJvYXJkLmlzU2hpcFN1bmsoc2hpcElkKTtcclxuICAgICAgICBpZiAoc2hpcFN1bmspIHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNoaXAtbmFtZVtkYXRhLXNoaXA9XCJwbGF5ZXItc2hpcCR7c2hpcElkfVwiXWApXHJcbiAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZWRcIik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNQVSBzYW5rIHRoYXQgc2hpcCFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgQ1BVIGhhcyBtYWRlIGl0cyBmaXJzdCBzdWNjZXNzZnVsIGhpdCBhZ2FpbnN0IGEgc2hpcCEgXHJcbiAgICAgICAgaWYgKHAyLmNwdUJlaGF2aW9yID09PSBDUFVfU1RBVEUucmFuZG9tXHJcbiAgICAgICAgICAmJiBwMi5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ID09PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBwMi5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ID0gcm93O1xyXG4gICAgICAgICAgcDIuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCA9IGNvbDtcclxuICAgICAgICAgIHAyLmNwdUJlaGF2aW9yID0gQ1BVX1NUQVRFLmZvdW5kO1xyXG4gICAgICAgIC8vIFRoZSBDUFUgaGFzIG1hZGUgYSBzZWNvbmQgc3VjY2Vzc2Z1bCBoaXQgd2hpbGUgaW4gZm91bmQgbW9kZSFcclxuICAgICAgICB9IGVsc2UgaWYgKHAyLmNwdUJlaGF2aW9yID09PSBDUFVfU1RBVEUuZm91bmRcclxuICAgICAgICAgICYmIHAyLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ID09PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBwMi5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdyA9IHJvdztcclxuICAgICAgICAgIHAyLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sID0gY29sO1xyXG4gICAgICAgICAgcDIuY3B1QmVoYXZpb3IgPSBDUFVfU1RBVEUuZm9jdXNlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZm9jdXNlZCBtb2RlIGJlaGF2aW9ycyAtLSByZXZlcnQgdG8gcmFuZG9tIHdoZSBzdW5rLlxyXG4gICAgICAgICAgaWYgKHAyLmNwdUJlaGF2aW9yID09PSBDUFVfU1RBVEUuZm9jdXNlZCkge1xyXG4gICAgICAgICAgICAvLyBvbmx5IGtlZXAgdXBkYXRpbmcgdGhlIHNlY29uZCBoaXQuXHJcbiAgICAgICAgICAgIHAyLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ID0gcm93O1xyXG4gICAgICAgICAgICBwMi5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LmNvbCA9IGNvbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGluIGZvY3VzZWQgbW9kZS4uLiBsYXkgZG93biBzb21lIGF0dGFja3MuXHJcbiAgICAgICAgICAvLyBpZiBhIHNoaXAgd2FzIHN1bmssIHRoZW4gcmVzZXQgdG8gcmFuZG9tLlxyXG4gICAgICAgICAgaWYgKHNoaXBTdW5rKSB7XHJcbiAgICAgICAgICAgIHAyLnJlc2V0Q1BVQmVoYXZpb3JzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNQVSBtaXNzZXMhXCIpO1xyXG4gICAgICAgIGF0dGFja2VkQ2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuXHJcbiAgICAgICAgaWYgKHAyLmNwdUJlaGF2aW9yID09PSBDUFVfU1RBVEUuZm9jdXNlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTaW5jZSBDUFUgd2FzIGZvY3VzZWQsIGl0J2xsIHN3YXAgZGlyZWN0aW9ucyBzdGFydGluZyBmcm9tIHRoZSBmaXJzdCBoaXQuXCIpO1xyXG4gICAgICAgICAgcDIuY3B1Rm9jdXNJbnZlcnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLiNwMXR1cm4gPSB0cnVlO1xyXG4gICAgdGhpcy4jZGV0ZXJtaW5lSWZHYW1lT3ZlcigpO1xyXG4gIH1cclxuXHJcbiAgI2NwdVBsYWNlU2hpcHMocGxheWVyKSB7XHJcbiAgICBsZXQgcm9zdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMi5nYW1lYm9hcmRcIik7XHJcblxyXG4gICAgdGhpcy5zaGlwTGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBzdGF0dXMgPSBudWxsO1xyXG4gICAgICBsZXQgcm93O1xyXG4gICAgICBsZXQgY29sO1xyXG4gICAgICBsZXQgdmVydGljYWw7XHJcblxyXG4gICAgICB3aGlsZSAoc3RhdHVzID09PSBudWxsKSB7XHJcbiAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHBsYXllci5nYW1lYm9hcmQuc2l6ZS0xKSk7XHJcbiAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHBsYXllci5nYW1lYm9hcmQuc2l6ZS0xKSk7XHJcbiAgICAgICAgdmVydGljYWwgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHN0YXR1cyA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQmF0dGxlc2hpcEVsZW1lbnRzLnBsYWNlU2hpcFZpYUNvb3JkaW5hdGUobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwsIHRydWUsIGBjcHUtc2hpcCR7aW5kZXh9YCk7XHJcblxyXG4gICAgICAvLyBsaXN0IG9uIHJvc3RlciB0b28uXHJcbiAgICAgIGxldCBzaGlwTmFtZSA9IGNvbXBvbmVudC5wKHNldE5hbWUobGVuZ3RoKSwgXCJzaGlwLW5hbWVcIik7XHJcbiAgICAgIHNoaXBOYW1lLmRhdGFzZXQuc2hpcCA9IGBjcHUtc2hpcCR7aW5kZXh9YDtcclxuXHJcbiAgICAgIHJvc3Rlci5hcHBlbmQoc2hpcE5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggYW4gaW5zdGFuY2Ugb2YgQmF0dGxlU2hpcEVsZW1lbnRzIHRvIGNvbnRyb2wgdGhlIHZpZXcgb2YgdGhlIHBhZ2UuXHJcbiAgICogQHBhcmFtIHtCYXR0bGVzaGlwRWxlbWVudHN9IHBhZ2UgXHJcbiAgICovXHJcbiAgYXR0YWNoUGFnZShwYWdlKSB7XHJcbiAgICB0aGlzLiNwYWdlID0gcGFnZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENQVV9TVEFURSA9IHtcclxuICByYW5kb20gOiBcInJhbmRvbVwiLFxyXG4gIGZvdW5kIDogXCJmb3VuZFwiLFxyXG4gIGZvY3VzZWQgOiBcImZvY3VzZWRcIlxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gIG5hbWU7XHJcbiAgY3B1O1xyXG4gIC8qKlxyXG4gICAqIEtlZXBzIHRyYWNrIG9mIGNvb3JkaW5hdGVzIG9mIHRoZSBDUFUncyBsYXN0IHN1Y2Nlc3NmdWwgaGl0LlxyXG4gICAqL1xyXG4gIGNwdUZpcnN0U3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIENQVSBzY29yZXMgdHdvIGhpdHMgb24gYSBzaGlwLCB0aGVuIHVzZSB0aGlzIGFzIGEgZmxhZyB0byBzd2l0Y2hcclxuICAgKiBpdCdzIGJlaGF2aW9yIHRvIGZvY3VzZWQuXHJcbiAgICovXHJcbiAgY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgYXJlIHRocmVlIHN0YXRlcyBmb3IgdGhlIENQVSB0byBlbXBsb3k6IHJhbmRvbSwgZm91bmQsIGZvY3VzZWQuXHJcbiAgICovXHJcbiAgY3B1QmVoYXZpb3I7XHJcbiAgLyoqXHJcbiAgICogV2hlbiBmb2N1c2VkIG9uIGEgdGFyZ2V0LCBzd2FwcyB0aGUgZGlyZWN0aW9uIG9mIGF0dGFjayB3aGVuIHNldCB0byB0cnVlLlxyXG4gICAqIFVzZWQgd2hlbiB0aGUgQ1BVIGlkZW50aWZpZXMgYSByb3cgLyBjb2wgd2hlcmUgYSBzaGlwIG1heSBiZSwgYnV0IGdldHMgYSBtaXNzLlxyXG4gICAqL1xyXG4gIGNwdUZvY3VzSW52ZXJ0O1xyXG4gIHNjb3JlO1xyXG4gIGdhbWVib2FyZDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSwgaXNDcHUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmNwdSA9IGlzQ3B1O1xyXG4gICAgdGhpcy5jcHVCZWhhdmlvciA9IENQVV9TVEFURS5yYW5kb207XHJcbiAgICB0aGlzLmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNrIHRoZSBvdGhlciBwbGF5ZXIncyBnYW1lYm9hcmQuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIFRoZSBvdGhlciBwbGF5ZXIgb2YgdGhlIGdhbWUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBjb29yZGluYXRlIHRvIGxhdW5jaCBhbiBhdHRhY2suXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCAtIENvbHVtbiBjb29yZGluYXRlIHRvIGxhdW5jaCBhbiBhdHRhY2suXHJcbiAgICogQHJldHVybnMge251bWJlcn0gLSBTdGF0dXMgb2YgdGhlIGF0dGFjay4gMSBpcyBhIGhpdC4gMCBpcyBhIG1pc3MsXHJcbiAgICogYW5kIC0xIGlzIGFuIGFyZWEgd2hpY2ggaGFzIGFscmVhZHkgYmVlbiBoaXQuXHJcbiAgICovXHJcbiAgYXR0YWNrKHBsYXllciwgcm93LCBjb2wpIHtcclxuICAgIHJldHVybiBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRDUFVCZWhhdmlvcnMoKSB7XHJcbiAgICB0aGlzLmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgICB0aGlzLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQgPSB7cm93OiBudWxsLCBjb2w6IG51bGx9O1xyXG4gICAgdGhpcy5jcHVCZWhhdmlvciA9IENQVV9TVEFURS5yYW5kb207XHJcbiAgICB0aGlzLmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNldE5hbWUobGVuZ3RoKSB7XHJcbiAgc3dpdGNoKGxlbmd0aCkge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICByZXR1cm4gXCJTcGVlZGVyXCI7XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIHJldHVybiBcIlBhdHJvbCBCb2F0XCI7XHJcbiAgICBjYXNlIDM6XHJcbiAgICAgIHJldHVybiBcIkRlc3Ryb3llclwiO1xyXG4gICAgY2FzZSA0OlxyXG4gICAgICByZXR1cm4gXCJCYXR0bGVzaGlwXCI7XHJcbiAgICBjYXNlIDU6XHJcbiAgICAgIHJldHVybiBcIkNhcnJpZXJcIjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlNoaXBcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBiYXR0bGVzaGlwLCBkZXBlbmRzIG9uIHRoZSBsZW5ndGguXHJcbiAgICovXHJcbiAgbmFtZTsgXHJcbiAgLyoqXHJcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgYmF0dGxlc2hpcC5cclxuICAgKi9cclxuICBsZW5ndGg7XHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCBjb25kaXRpb24gb2YgdGhlIGJhdHRsZXNoaXAuIFJldHVybnNcclxuICAgKiBhbiBhcnJheSBjb250YWluaW5nIHN0YXR1cyBvZiB0aGUgYmF0dGxlc2hpcC4gXHJcbiAgICogSWYgdGhlIHN0YXR1c2VzIGFyZSBhbGwgdHJ1ZSwgdGhlIHNoaXAgaXMgc3Vuay5cclxuICAgKi9cclxuICBzdGF0dXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHNoaXAuXHJcbiAgICogQHBhcmFtIHtHYW1lYm9hcmR9IGdhbWVib2FyZCAtIFRoZSBnYW1lYm9hcmQgdGhlIHNoaXAgYmVsb25ncyB0by5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIC0gVGhlIGxlbmd0aCBvZiB0aGUgc2hpcC5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IC0geENvb3JkaW5hdGUgdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQuXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbCAtIHlDb29yZGluYXRlIHRvIHBsYWNlIHRoZSBzaGlwLiAwLWJhc2VkLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgLSBTaG91bGQgdGhlIHNoaXAgYmUgcGxhY2VkIHZlcnRpY2FsbHk/XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aCA/PyAxO1xyXG4gICAgdGhpcy5uYW1lID0gc2V0TmFtZSh0aGlzLmxlbmd0aCk7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFya3MgdGhlIHNoaXAgaGl0IGF0IGdpdmVuIGxvY2F0aW9uLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NhdGlvbiBcclxuICAgKi9cclxuICBoaXQoeCwgeSkge1xyXG4gICAgbGV0IGlkID0gYCR7eH0sJHt5fWA7XHJcbiAgICB0aGlzLnN0YXR1c1tpZF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgc2hpcCBoYXMgYmVlbiBlbnRpcmVseSBzdW5rIHlldC5cclxuICAgKi9cclxuICBpc1N1bmsoKSB7XHJcbiAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuc3RhdHVzKSB7XHJcbiAgICAgIGlmICghdGhpcy5zdGF0dXNbcHJvcF0pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0iLCIvKipcclxuICogQSBjbGFzcyB3aXRoIHVzZWZ1bCwgZ2VuZXJhbC1wdXJwb3NlIG1ldGhvZHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuICBcclxuICBzdGF0aWMgZW1haWxSZWdleCA9ICBcdFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxyXG4gIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cclxuICAvKipcclxuICAgKiBCYXNlZCBvbiB3ZWJwYWNrJ3MgcmVxdWlyZSB0byBxdWlja2x5IGltcG9ydCBpbiBhbGwgaW1hZ2VzIGluIGEgZm9sZGVyLlxyXG4gICAqIFNlZSBkb2N1bWVudGF0aW9uIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlcXVpcmUtY29udGV4dCB0byB1bmRlcnN0YW5kXHJcbiAgICogbW9yZSBhYm91dCB0aGUgcGFyYW1ldGVyLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSByIC0gcmVxdWlyZS5jb250ZXh0KCkgZnVuY3Rpb24sIHVzZWQgZm9yIGltcG9ydGluZyBhbGwgZmlsZXMgaW5cclxuICAgKiBhIGRpcmVjdG9yeSBtYXRjaGluZyBhIHBhdHRlcm4uIEV4OlxyXG4gICAqIHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2VzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pLiBMZWF2ZSBibGFuayB0byB1c2UgdGhpcy5cclxuICAgKiBAcmV0dXJucyAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW1hZ2VzIG1hdGNoaW5nIHRoZSByZXF1aXJlIGNvbnRleHQsXHJcbiAgICogdGhlIG9yaWdpbmFsIGZpbGVuYW1lICh3LyBleHRlbnNpb24pIGJlaW5nIHRoZSBrZXkgcmVmZXJlbmNpbmcgdGhlIGltYWdlLlxyXG4gICAqL1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gIHN0YXRpYyBpbXBvcnRBbGxJbWFnZXMociA9IHJlcXVpcmUuY29udGV4dChcIi4uL2ltYWdlc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSkge1xyXG4gICAgbGV0IGltYWdlcyA9IHt9O1xyXG4gICAgci5rZXlzKCkubWFwKChpdGVtKSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xyXG4gICAgcmV0dXJuIGltYWdlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggdmFyaW91cyBjbGFzc2VzLiBXcmFwcyBkb2N1bWVudC5jcmVhdGVFbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUaGUgSFRNTCB0YWcgb2YgdGhlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDbGFzcyAtIERlZmF1bHQgY2xhc3MgdG8gcmVmZXIgdG8gdGhlIGVsZW1lbnQgYnkuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVzIC0gKE9wdGlvbmFsKSBBZGRpdGlvbmFsIGNsYXNzZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudC5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlRWxlbWVudCh0YWcsIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIFV0aWxpdHkuYWRkQ2xhc3Nlc1RvRWxlbWVudChlbGVtLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpO1xyXG5cclxuICAgIHJldHVybiBlbGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBoZWxwZXIgbWV0aG9kIHdoaWNoIGFkZHMgY2xhc3NlcyB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGFwcGVuZCBjbGFzc2VzIHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0Q2xhc3MgLSBUaGUgY2xhc3NuYW1lIHRoYXQgc2FpZCBlbGVtZW50IHNob3VsZCBhbHdheXMgaGF2ZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gVGhlIGNsYXNzbmFtZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudCAob3B0aW9uYWwpLlxyXG4gICAqICovIFxyXG4gIHN0YXRpYyBhZGRDbGFzc2VzVG9FbGVtZW50KGVsZW0sIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgICBjbGFzc05hbWVzLnB1c2goZGVmYXVsdENsYXNzKTtcclxuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGEgZ2l2ZW4gZWxlbWVudCwgYWRkIGFuIGFuaW1hdGlvbiBidXQgb25seSBwbGF5IGl0IG9uY2UuIEFmdGVyd2FyZHMsXHJcbiAgICogdW5sb2FkIHRoZSBhbmltYXRpb24uIFRoaXMgYWxsb3dzIHlvdSB0byBhZGQgdGhlIGNsYXNzIHRvIGl0IGFnYWluIHRvIFxyXG4gICAqIHBsYXkgdGhlIGFuaW1hdGlvbjsgdGhpcyBpcyB1c2VmdWwgd2hlbiBhc3NvY2lhdGVkIHdpdGggZXZlbnQgdHJpZ2dlcnMuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIEFuIGVsZW1lbnQgdG8gYXBwbHkgdGhlIGFuaW1hdGlvbiB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYW5pbWF0aW9uTmFtZSAtIEEgQ1NTIGNsYXNzIGFzc29jaWF0ZWQgd2l0aCBhbiBhbmltYXRpb24uXHJcbiAgICovXHJcbiAgc3RhdGljIHRyaWdnZXJBbmltYXRpb24oZWxlbSwgYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbk5hbWUpO1xyXG5cclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShhbmltYXRpb25OYW1lKTtcclxuICAgIH0sIHtvbmNlIDogdHJ1ZX0pOyBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlY3Vyc2l2ZWx5IHNjYWxlIHRoZSB0cmVlIG9mIGEgY2hpbGQgbm9kZSB1bnRpbCB0aGUgcGFyZW50IG1hdGNoaW5nIHRoZSBnaXZlblxyXG4gICAqIHNlbGVjdG9yIGlzIGZvdW5kLiBSZXR1cm5zIE5VTEwgaWYgbm8gbWF0Y2hpbmcgcGFyZW50IGlzIGZvdW5kLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBBIGNoaWxkIG5vZGUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gQ1NTIFNlbGVjdG9yIFN0cmluZy5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SFRNTGVsZW1lbnR9IC0gUGFyZW50IG9mIGVsZW0uXHJcbiAgICovXHJcbiAgc3RhdGljIGdldE1hdGNoaW5nUGFyZW50KGVsZW0sIHNlbGVjdG9yKSB7XHJcbiAgICB3aGlsZSghZWxlbS5tYXRjaGVzKHNlbGVjdG9yKSkge1xyXG4gICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xyXG4gICAgICBpZiAoZWxlbS5tYXRjaGVzKFwiaHRtbFwiKSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdXNlcidzIGxvY2F0aW9uLCB1c2luZyB0aGUgR2VvbG9jYXRpb24gQVBJLlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIG9mIHRoZSB1c2VyJ3MgbG9jYXRpb24sIG9yIG51bGxcclxuICAgKiBpZiB0aGUgdXNlciBkZW5pZXMgcGVybWlzc2lvbiByZXF1ZXN0cy5cclxuICAgKi9cclxuICAvKlxyXG4gIHN0YXRpYyBnZXRHZW9sb2NhdGlvbigpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWNjZXNzKHBvc2l0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGxhdGl0dWRlICA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgY29uc3QgbG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuXHJcbiAgICAgIGNvbnN0IGxhdGxvbmcgPSBgJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcclxuXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobGF0bG9uZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBlcnJvcigpIHtcclxuICAgICAgbGV0IGVycm9yID0gXCJVc2VyIGRlbmllZCBsb2NhdGlvbiBwZXJtaXNzaW9ucy5cIjtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7XHJcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2VzcywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gICovXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbGwgY2hpbGRyZW4gZnJvbSBhIHBhcmVudCBub2RlLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnROb2RlfSBwYXJlbnQgLSBQYXJlbnQgbm9kZSBjb250YWluaW5nIGNoaWxkcmVuLlxyXG4gICAqL1xyXG4gIHN0YXRpYyByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpIHtcclxuICAgIGlmIChwYXJlbnQuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbnRlbmNlIGZvcm1hdC4gTWFrZXMgc3VyZSB0aGUgZmlyc3QgbGV0dGVyIGlzIGNhcGl0YWxpemVkLCBhbmQgdGhlbiBcclxuICAgKiBhIHBlcmlvZCBpcyBhcHBlbmRlZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gYSBzdHJpbmcgdG8gc2VudGVuY2UtY2FzZS5cclxuICAgKi9cclxuICBzdGF0aWMgdG9TZW50ZW5jZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSArIFwiLlwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBhc3NpZ25lZCB0byBlYWNoIGJ1dHRvblxyXG4gICAqIHdoZW4gb25seSBvbmUgb2YgdGhlbSBzaG91bGQgYmUgdG9nZ2xlZC4gRnVuY3Rpb25zIGxpa2UgYSByYWRpb1xyXG4gICAqIGJ1dHRvbiBidXQgd2l0aCBkaWZmZXJlbnQgc3R5bGluZy5cclxuICAgKiBAcGFyYW0geyp9IGUgXHJcbiAgICogQHBhcmFtIHsqfSBwYXJlbnRTZWxlY3RvciBcclxuICAgKi9cclxuICBzdGF0aWMgdG9nZ2xlU2VsZWN0ZWQoZSwgcGFyZW50U2VsZWN0b3IpIHtcclxuICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBmcm9tIHRoZSBvdGhlci5cclxuICAgIGNvbnN0IHBhcmVudCA9IFV0aWxpdHkuZ2V0TWF0Y2hpbmdQYXJlbnQoZS5jdXJyZW50VGFyZ2V0LCBwYXJlbnRTZWxlY3Rvcik7XHJcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0ZWQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcclxuICAgIGN1cnJlbnRTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICBjdXJyZW50U2VsZWN0ZWQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAvLyB0b2dnbGUgc2VsZWN0ZWQgY2xhc3Mgb24gdGhlIGJ1dHRvblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgIGUuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2JhdHRsZXNoaXBzL1wiOyIsIi8vanMgXHJcbmltcG9ydCB7IEJhdHRsZXNoaXBFbGVtZW50cyB9IGZyb20gXCIuL0JhdHRsZXNoaXBFbGVtZW50XCI7XHJcbmltcG9ydCB7IEdBTUVfU1RBVEUsIFNVQkRJQUxPR1MgfSBmcm9tIFwiLi9nYW1lbWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vZ2FtZW1hbmFnZXJcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5pbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5cclxuLy9jc3NcclxuaW1wb3J0IFwiLi4vY3NzL3Jlc2V0LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3MvZ2FtZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL3BhZ2UuY3NzXCI7XHJcblxyXG5cclxuKGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gIGNvbnN0IG1haW4gPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIFwiY29udGVudFwiKTtcclxuICBjb25zdCBmb290ZXIgPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgXCJmb290ZXJcIik7XHJcbiAgY29uc3QgZ2l0aHViTGluayA9IGNvbXBvbmVudC5hKFwiVmlldyBvbiBHaXRIdWIuXCIsIFwiI1wiLCBcImdoLWxpbmtcIik7XHJcbiAgY29uc3QgZ2l0aHViSWNvbiA9IGNvbXBvbmVudC5pbWcoXCJodHRwczovL2dpdGh1Yi5naXRodWJhc3NldHMuY29tL2ltYWdlcy9tb2R1bGVzL2xvZ29zX3BhZ2UvR2l0SHViLU1hcmsucG5nXCIsIFwiZ2gtaWNvblwiKTtcclxuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9EYXRyaW5vbi9iYXR0bGVzaGlwc1wiO1xyXG4gIGdpdGh1Ykljb24uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0RhdHJpbm9uL2JhdHRsZXNoaXBzXCI7XHJcblxyXG4gIGJvZHkuYXBwZW5kKG1haW4sIGZvb3Rlcik7XHJcblxyXG4gIGNvbnN0IHAxID0gbmV3IFBsYXllcihcIkNvbW1hbmRlciBCbHVlXCIsIGZhbHNlKTtcclxuICBjb25zdCBwMiA9IG5ldyBQbGF5ZXIoXCJDb21tYW5kZXIgUmVkXCIsIHRydWUpO1xyXG5cclxuICBjb25zdCBnYW1lID0gbmV3IEdhbWVNYW5hZ2VyKHAxLCBwMik7XHJcbiAgY29uc3QgcGFnZSA9IG5ldyBCYXR0bGVzaGlwRWxlbWVudHMoZ2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IHBhZ2UuaGVhZGVyKCk7XHJcbiAgY29uc3QgZ2FtZUFyZWEgPSBwYWdlLmdhbWVBcmVhKCk7XHJcblxyXG4gIG1haW4uYXBwZW5kKGhlYWRlciwgZ2FtZUFyZWEpO1xyXG4gIFxyXG4gIGdhbWUuYXR0YWNoUGFnZShwYWdlKTtcclxuICBwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLndlbGNvbWVQcm9tcHQpO1xyXG4gIHBhZ2Uuc2V0U3ViRGlhbG9nKFNVQkRJQUxPR1MuY29udHJvbHMxLCBTVUJESUFMT0dTLmNvbnRyb2xzMik7XHJcbiAgZm9vdGVyLmFwcGVuZChnaXRodWJMaW5rLCBnaXRodWJJY29uKTtcclxufSkoKTtcclxuXHJcbi8qXHJcbjE6IFVzZXJzIHBsYWNlIHRoZWlyIHNoaXBzLlxyXG4yOiBVc2VycyBwbGF5IHRoZSBnYW1lLlxyXG4zOiBHYW1lIGVuZHMgd2hlbiB0aGUgb25lIHBsYXllcidzIGJhdHRsZXNoaXBzIGFyZSBkZXN0cm95ZWQuXHJcbjQ6IFRoZSBnYW1lIGVuZCBoYXMgc3RhdGlzdGljcyByZXN1bHRzIGFuZCBvcHRpb24gdG8gcmVwbGF5XHJcbjU6IEdvIGJhY2sgdG8gc3RlcCAxLlxyXG4qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==