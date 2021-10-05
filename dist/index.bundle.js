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
___CSS_LOADER_EXPORT___.push([module.id, "/* For CSS important to the functioning of the game. */\r\n\r\n.no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.ship.draggable .cell {\r\n  background-color: #2c97fc;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55) !important;\r\n  background-color: rgba(0, 255, 64, 0.3) !important;\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  border: 1px solid rgb(131, 25, 25);\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.cpu-ship-reveal {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.gameboard-area {\r\n  transition: border 0.7s;\r\n}\r\n\r\n.gameboard-area.game-active {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.p1.gameboard .cell.attackable .ship {\r\n  cursor: default;\r\n}\r\n\r\n.p1.gameboard .cell.attackable:hover {\r\n  background-color: revert;\r\n}\r\n\r\n.p2.gameboard .cell.attackable:not(.attacked):hover {\r\n  background-color: rgba(255,0,0,0.6);\r\n  cursor: crosshair;\r\n}\r\n\r\ndiv.gameboard-area.game-active > div.gameboard .cell.attacked {\r\n  cursor: default;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.gameboard .cell.attacked::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 25%;\r\n  visibility: unset;\r\n  z-index: 100;\r\n  font-family: monospace;\r\n  font-size: 170%;\r\n  right: 25%;\r\n  /* bottom: 25%; */\r\n}\r\n\r\n.gameboard .cell.attacked.miss::after {\r\n  content: \"○\";\r\n  color: white;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n.gameboard .cell.attacked.hit::after {\r\n  content: \"X\";\r\n  color: red;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n@keyframes smash {\r\n  0% {\r\n    opacity: 0.25;\r\n    transform: scale(1.5);\r\n  }\r\n  75% {\r\n    opacity: 0.5;\r\n    transform: scale(0.65);\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n    transform: scale(1);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/game.css"],"names":[],"mappings":"AAAA,sDAAsD;;AAEtD;EACE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA,8DAA8D;AAC9D,uDAAuD;AACvD,uDAAuD;AACvD,gFAAgF;AAChF;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,4CAA4C;EAC5C,kDAAkD;AACpD;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;EAClC,sCAAsC;AACxC;;AAEA;EACE,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;EACjC,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,iBAAiB;EACjB,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE;IACE,aAAa;IACb,qBAAqB;EACvB;EACA;IACE,YAAY;IACZ,sBAAsB;EACxB;EACA;IACE,YAAY;IACZ,mBAAmB;EACrB;AACF","sourcesContent":["/* For CSS important to the functioning of the game. */\r\n\r\n.no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.ship.draggable .cell {\r\n  background-color: #2c97fc;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55) !important;\r\n  background-color: rgba(0, 255, 64, 0.3) !important;\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  border: 1px solid rgb(131, 25, 25);\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.cpu-ship-reveal {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.cpu-ship-reveal.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.gameboard-area {\r\n  transition: border 0.7s;\r\n}\r\n\r\n.gameboard-area.game-active {\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.p1.gameboard .cell.attackable .ship {\r\n  cursor: default;\r\n}\r\n\r\n.p1.gameboard .cell.attackable:hover {\r\n  background-color: revert;\r\n}\r\n\r\n.p2.gameboard .cell.attackable:not(.attacked):hover {\r\n  background-color: rgba(255,0,0,0.6);\r\n  cursor: crosshair;\r\n}\r\n\r\ndiv.gameboard-area.game-active > div.gameboard .cell.attacked {\r\n  cursor: default;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.gameboard .cell.attacked::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 25%;\r\n  visibility: unset;\r\n  z-index: 100;\r\n  font-family: monospace;\r\n  font-size: 170%;\r\n  right: 25%;\r\n  /* bottom: 25%; */\r\n}\r\n\r\n.gameboard .cell.attacked.miss::after {\r\n  content: \"○\";\r\n  color: white;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n.gameboard .cell.attacked.hit::after {\r\n  content: \"X\";\r\n  color: red;\r\n  animation: smash 0.5s;\r\n}\r\n\r\n@keyframes smash {\r\n  0% {\r\n    opacity: 0.25;\r\n    transform: scale(1.5);\r\n  }\r\n  75% {\r\n    opacity: 0.5;\r\n    transform: scale(0.65);\r\n  }\r\n  100% {\r\n    opacity: 1.0;\r\n    transform: scale(1);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* For CSS that has aesthetic purposes. */\r\nhtml, body {\r\n  height: 100%;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  color: white;\r\n  background: linear-gradient(353deg, rgb(11 35 56 / 89%), rgb(94 207 219 / 54%) 55.71%),\r\n  linear-gradient(265deg, rgb(238 8 26 / 90%), rgb(18 38 88 / 73%) 70.71%),\r\n  linear-gradient(142deg, rgb(133 131 205 / 83%), rgb(49 82 103 / 77%) 70.71%);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.content {\r\n  flex: 1 0 auto;\r\n}\r\n.footer {\r\n  flex-shrink: 0;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.footer .gh-icon {\r\n  width: 16px;\r\n  padding: 2px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.header {\r\n  font-family: \"Poppins\";\r\n  text-shadow: 4px 2px 2px #00000045;\r\n  margin-left: 15px;  \r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items:center;\r\n}\r\n\r\n.title {\r\n  font-size: 225%;  \r\n}\r\n\r\n.author {\r\n  width: fit-content;\r\n  position: relative;\r\n  left: 66px;\r\n}\r\n\r\n.logo-pic {\r\n  width: 64px;\r\n}\r\n\r\n.gameboard-grid {\r\n  box-shadow: 3px 3px 16px 4px #45434394;\r\n}\r\n\r\n.p1 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1 .gameboard-grid > .cell {\r\n  background-color: rgb(2 12 32 / 73%);\r\n}\r\n\r\n.p2 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1.gameboard .cell {\r\n  border: 1px solid rgb(25,79,131);\r\n}\r\n\r\n.p2.gameboard .cell:not(.cpu-ship-placed) {\r\n  border: 1px solid rgb(131, 25, 25);\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.gameboard-owner {\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 125%;\r\n  font-variant-caps: all-small-caps;\r\n  font-weight: 500;\r\n}\r\n\r\n.ship {\r\n  position: relative;\r\n  border: 1px solid black;\r\n}\r\n\r\ndiv.ship.draggable {\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\ndiv.ship.draggable div.cell {\r\n  border: 3px outset #1964c4;\r\n  width: 19.7px;\r\n  height: 19.1px;\r\n}\r\n\r\ndiv.ship-placed.vertical div.cell {\r\n  height: 19.7px;\r\n  width: 19.1px;\r\n}\r\n\r\n\r\ndiv.ship-placed {\r\n  top: -2px;\r\n  left: -2px;\r\n  background-color: #189dd1;\r\n}\r\n\r\ndiv.ship.draggable:hover {\r\n  box-shadow: 0px 0px 10px rgba(184, 233, 255, 0.562);\r\n  border: 1px solid orange;\r\n}\r\n\r\ndiv.ship.draggable:hover::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 100%; \r\n  left: 15px;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: black black transparent transparent;\r\n}\r\n\r\ndiv.ship.draggable:hover::after {\r\n  position: absolute;\r\n  content: attr(data-name);\r\n  font-variant-caps: all-small-caps;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  background-color: rgb(45,45,45);\r\n  padding: 3px;\r\n  color: beige;\r\n  bottom: calc(100% + 5px);\r\n}\r\n\r\n.cell.numbering .number-label {\r\n  margin: 6px auto;\r\n  font-family: monospace;\r\n  font-size: 110%;\r\n  width: fit-content;\r\n}\r\n\r\n.game-area {\r\n  margin: 15px auto;\r\n}\r\n\r\n.dialog-area {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  text-shadow: 2px 1px 6px rgb(100, 100, 100);\r\n  min-height: 75px;\r\n}\r\n\r\n.dialog-area .dialog-msg {\r\n  font-size: 165%;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.dialog-area .controls-help {\r\n  font-size: 0.9rem;\r\n  line-height: .25in;\r\n}\r\n\r\n.menu-area {\r\n  width: 290px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.ship-selection > * {\r\n  margin: 5px 0;\r\n}\r\n\r\n.ship-placer {\r\n  min-height: 200px;\r\n}\r\n\r\n.ship-placer-label, .start-game-prompt > [for=\"p1-name\"] {\r\n  font-variant-caps: all-petite-caps;\r\n  font-size: 1.1rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n\r\n#p1-name {\r\n  all: unset;\r\n  margin: 5px 0;\r\n  margin-left: 5px;\r\n  border-bottom: 1px solid white;\r\n  width: 75%;\r\n}\r\n\r\n.start-game-button {\r\n  font-family: \"Poppins\";\r\n  font-size: 1.05rem;\r\n  width: 100%;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: rgb(255, 215, 140);\r\n  transition: all 0.5s ease-out;\r\n}\r\n\r\n.start-game-button:disabled {\r\n  background-color: grey;\r\n}\r\n\r\n.subdialog-area {\r\n  /* animation: pull-open 1.25s; */\r\n}\r\n\r\n@keyframes pull-open {\r\n  from {\r\n    transform: scaleY(0.1);\r\n  }\r\n  to {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n\r\n.start-game-button:not([disabled]):hover {\r\n  background-color: rgb(255, 231, 185);\r\n}\r\n\r\n.start-game-button:active {\r\n  background-color: rgb(204, 154, 62);\r\n}\r\n\r\n.appear-from-bottom {\r\n  animation: appear-from-bottom 0.75s ease-in;\r\n}\r\n\r\n.appear-from-right {\r\n  animation: appear-from-right 1s ease-out;\r\n}\r\n\r\n@keyframes appear-from-bottom {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes appear-from-right {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(10px);\r\n  }\r\n  30% {\r\n    opacity: 0;\r\n    transform: translateX(10px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/css/page.css"],"names":[],"mappings":"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","sourcesContent":["/* For CSS that has aesthetic purposes. */\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\nhtml, body {\r\n  height: 100%;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  color: white;\r\n  background: linear-gradient(353deg, rgb(11 35 56 / 89%), rgb(94 207 219 / 54%) 55.71%),\r\n  linear-gradient(265deg, rgb(238 8 26 / 90%), rgb(18 38 88 / 73%) 70.71%),\r\n  linear-gradient(142deg, rgb(133 131 205 / 83%), rgb(49 82 103 / 77%) 70.71%);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.content {\r\n  flex: 1 0 auto;\r\n}\r\n.footer {\r\n  flex-shrink: 0;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.footer .gh-icon {\r\n  width: 16px;\r\n  padding: 2px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.header {\r\n  font-family: \"Poppins\";\r\n  text-shadow: 4px 2px 2px #00000045;\r\n  margin-left: 15px;  \r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items:center;\r\n}\r\n\r\n.title {\r\n  font-size: 225%;  \r\n}\r\n\r\n.author {\r\n  width: fit-content;\r\n  position: relative;\r\n  left: 66px;\r\n}\r\n\r\n.logo-pic {\r\n  width: 64px;\r\n}\r\n\r\n.gameboard-grid {\r\n  box-shadow: 3px 3px 16px 4px #45434394;\r\n}\r\n\r\n.p1 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1 .gameboard-grid > .cell {\r\n  background-color: rgb(2 12 32 / 73%);\r\n}\r\n\r\n.p2 .gameboard-grid {\r\n  border: 2px solid black;\r\n}\r\n\r\n.p1.gameboard .cell {\r\n  border: 1px solid rgb(25,79,131);\r\n}\r\n\r\n.p2.gameboard .cell:not(.cpu-ship-placed) {\r\n  border: 1px solid rgb(131, 25, 25);\r\n  background-color: rgba(32, 2, 2, 0.72);\r\n}\r\n\r\n.gameboard-owner {\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 125%;\r\n  font-variant-caps: all-small-caps;\r\n  font-weight: 500;\r\n}\r\n\r\n.ship {\r\n  position: relative;\r\n  border: 1px solid black;\r\n}\r\n\r\ndiv.ship.draggable {\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\ndiv.ship.draggable div.cell {\r\n  border: 3px outset #1964c4;\r\n  width: 19.7px;\r\n  height: 19.1px;\r\n}\r\n\r\ndiv.ship-placed.vertical div.cell {\r\n  height: 19.7px;\r\n  width: 19.1px;\r\n}\r\n\r\n\r\ndiv.ship-placed {\r\n  top: -2px;\r\n  left: -2px;\r\n  background-color: #189dd1;\r\n}\r\n\r\ndiv.ship.draggable:hover {\r\n  box-shadow: 0px 0px 10px rgba(184, 233, 255, 0.562);\r\n  border: 1px solid orange;\r\n}\r\n\r\ndiv.ship.draggable:hover::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 100%; \r\n  left: 15px;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: black black transparent transparent;\r\n}\r\n\r\ndiv.ship.draggable:hover::after {\r\n  position: absolute;\r\n  content: attr(data-name);\r\n  font-variant-caps: all-small-caps;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  background-color: rgb(45,45,45);\r\n  padding: 3px;\r\n  color: beige;\r\n  bottom: calc(100% + 5px);\r\n}\r\n\r\n.cell.numbering .number-label {\r\n  margin: 6px auto;\r\n  font-family: monospace;\r\n  font-size: 110%;\r\n  width: fit-content;\r\n}\r\n\r\n.game-area {\r\n  margin: 15px auto;\r\n}\r\n\r\n.dialog-area {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  text-shadow: 2px 1px 6px rgb(100, 100, 100);\r\n  min-height: 75px;\r\n}\r\n\r\n.dialog-area .dialog-msg {\r\n  font-size: 165%;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.dialog-area .controls-help {\r\n  font-size: 0.9rem;\r\n  line-height: .25in;\r\n}\r\n\r\n.menu-area {\r\n  width: 290px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.ship-selection > * {\r\n  margin: 5px 0;\r\n}\r\n\r\n.ship-placer {\r\n  min-height: 200px;\r\n}\r\n\r\n.ship-placer-label, .start-game-prompt > [for=\"p1-name\"] {\r\n  font-variant-caps: all-petite-caps;\r\n  font-size: 1.1rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n\r\n#p1-name {\r\n  all: unset;\r\n  margin: 5px 0;\r\n  margin-left: 5px;\r\n  border-bottom: 1px solid white;\r\n  width: 75%;\r\n}\r\n\r\n.start-game-button {\r\n  font-family: \"Poppins\";\r\n  font-size: 1.05rem;\r\n  width: 100%;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: rgb(255, 215, 140);\r\n  transition: all 0.5s ease-out;\r\n}\r\n\r\n.start-game-button:disabled {\r\n  background-color: grey;\r\n}\r\n\r\n.subdialog-area {\r\n  /* animation: pull-open 1.25s; */\r\n}\r\n\r\n@keyframes pull-open {\r\n  from {\r\n    transform: scaleY(0.1);\r\n  }\r\n  to {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n\r\n.start-game-button:not([disabled]):hover {\r\n  background-color: rgb(255, 231, 185);\r\n}\r\n\r\n.start-game-button:active {\r\n  background-color: rgb(204, 154, 62);\r\n}\r\n\r\n.appear-from-bottom {\r\n  animation: appear-from-bottom 0.75s ease-in;\r\n}\r\n\r\n.appear-from-right {\r\n  animation: appear-from-right 1s ease-out;\r\n}\r\n\r\n@keyframes appear-from-bottom {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes appear-from-right {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(10px);\r\n  }\r\n  30% {\r\n    opacity: 0;\r\n    transform: translateX(10px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}"],"sourceRoot":""}]);
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
    console.log(classNames);
    console.log(...classNames);
    const gameboard = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("gameboard", ...classNames);
    const gameboardGrid = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("gameboard-grid");

    const gridSize = this.gameManager.players[0].gameboard.size;
    const numberCell = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("cell", "numbering");
    const numberText = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("", "number-label");

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
    const victoryMsg = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p(`Game Over! Winner: `, "victory-message");
    const winner = _component__WEBPACK_IMPORTED_MODULE_0__["default"].span("%", "winner");

    const statsContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("summary-statistics");
    const statsHeading = _component__WEBPACK_IMPORTED_MODULE_0__["default"].heading("Game Statistics: ", 2, "header");
    const statsAccuracy = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("Accuracy: ", "accuracy");
    const p1Accuracy = _component__WEBPACK_IMPORTED_MODULE_0__["default"].span("--%", "p1-accuracy-metric");
    const p2Accuracy = _component__WEBPACK_IMPORTED_MODULE_0__["default"].span("--%", "p2-accuracy-metric");

    const playAgain = _component__WEBPACK_IMPORTED_MODULE_0__["default"].button("Play Again", "play-again");

    victoryMsg.append(winner);

    statsContainer.append(statsHeading,
      statsAccuracy, p1Accuracy, p2Accuracy);

    summary.append(victoryMsg, winner, statsContainer, playAgain);
      
    return summary;
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
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/js/component.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/js/player.js");




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
  p2turn: "Thinking..."
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
    document.querySelectorAll(".controls-area, .menu-area, .p2.gameboard")
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
    const p1AccMetric = summaryContainer.querySelector(".p1-accuracy-metric");
    const p2AccMetric = summaryContainer.querySelector(".p2-accuracy-metric");

    p1AccMetric.textContent = this.#calculateAccuracy(this.players[1]);
    p2AccMetric.textContent = this.#calculateAccuracy(this.players[0]);

    // 3. ////[removed damage metrics]
    // Instead of showing damage taken, when the game is over,
    // just show the enemy's gameboard.
    // TODO
    // When debugging is complete, test out hiding battleships from the view.
    summaryContainer.querySelector(".play-again")
        .addEventListener("click", this.#resetGame.bind(this));
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

    this.players[0] = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](this.players[0].name, false);
    this.players[1] = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](this.players[1].name, true);

    this.#page.generateDraggableShips();

    document.querySelector(".start-game-button").disabled = false;
    this.#gameOver = false;
    this.#p1turn = true;
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
      if (this.#p1turn === false) {
        this.#page.setDialog(GAME_STATE.p2turn);
        this.#page.setSubDialog(SUBDIALOGS.p2turn);

        setTimeout(performCPUAttack.bind(this), thinkTimer);
      }

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
      case 1: 
        console.log("It's a hit!");
        e.currentTarget.classList.add("hit");
        break;
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
      case _player__WEBPACK_IMPORTED_MODULE_2__.CPU_STATE.random: {
        // row = Math.round(Math.random() * (endIndex));
        // col = Math.round(Math.random() * (endIndex));
        row = 0;
        col = 0;
        break;
      }
      case _player__WEBPACK_IMPORTED_MODULE_2__.CPU_STATE.found: {
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
      case _player__WEBPACK_IMPORTED_MODULE_2__.CPU_STATE.focused: {
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
            row = cpu.cpuSecondSuccessfulHit.row +  1;
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
    let row;
    let col;
    while (status === -1) {
      [row, col] = this.#cpuAttackDetermineCoordinates(this.players[1]);
      
      status = this.players[1].attack(this.players[0], row, col);
    }

    let attackedCell = document.querySelector(`.p1.gameboard .selectable[data-row="${row}"][data-col="${col}"]`)
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
          console.log("CPU sank that ship!");
          // TODO
          // replace with a toast appearing below the game area.
          // this.#page.setDialog(GAME_STATE.playerShipSunk);
        }

        // The CPU has made its first successful hit against a ship! 
        if (p2.cpuBehavior === _player__WEBPACK_IMPORTED_MODULE_2__.CPU_STATE.random
          && p2.cpuFirstSuccessfulHit.row === null
        ) {
          p2.cpuFirstSuccessfulHit.row = row;
          p2.cpuFirstSuccessfulHit.col = col;
          p2.cpuBehavior = _player__WEBPACK_IMPORTED_MODULE_2__.CPU_STATE.found;
        // The CPU has made a second successful hit while in found mode!
        } else if (p2.cpuBehavior === _player__WEBPACK_IMPORTED_MODULE_2__.CPU_STATE.found
          && p2.cpuSecondSuccessfulHit.row === null
        ) {
          p2.cpuSecondSuccessfulHit.row = row;
          p2.cpuSecondSuccessfulHit.col = col;
          p2.cpuBehavior = _player__WEBPACK_IMPORTED_MODULE_2__.CPU_STATE.focused;
        } else {
          // focused mode behaviors -- revert to random whe sunk.
          if (p2.cpuBehavior === _player__WEBPACK_IMPORTED_MODULE_2__.CPU_STATE.focused) {
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

        if (p2.cpuBehavior === _player__WEBPACK_IMPORTED_MODULE_2__.CPU_STATE.focused) {
          console.log("Since CPU was focused, it'll swap directions starting from the first hit.");
          p2.cpuFocusInvert = true;
        }
        break;
    }

    this.#p1turn = true;
    this.#determineIfGameOver();
  }

  #cpuPlaceShips(player) {
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
  page.setSubDialog("Drag and drop ships onto the gameboard.",
      "Click (when placed) to rotate ship.");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0MsT0FBTyxZQUFZLG1CQUFtQixpQ0FBaUMsT0FBTyxLQUFLLE9BQU8sMEZBQTBGLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxh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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGFBQWE7QUFDckQsaUNBQWlDO0FBQ2pDLDZD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cUJBQXFCLG9EQUFXO0FBQ2hDLHFCQUFxQixzREFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQU07QUFDdkIsaUJBQWlCLCtDQUFNO0FBQ3ZCO0FBQ0EsbUJBQW1CLG9EQUFXO0FBQzlCLG1CQUFtQixrRUFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0VBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9jc3MvZ2FtZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL3BhZ2UuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL2dhbWUuY3NzP2EzY2YiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL3BhZ2UuY3NzPzI2NWMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC8uKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvQmF0dGxlc2hpcEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9nYW1lbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy91dGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZvciBDU1MgaW1wb3J0YW50IHRvIHRoZSBmdW5jdGlvbmluZyBvZiB0aGUgZ2FtZS4gKi9cXHJcXG5cXHJcXG4ubm8tZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWFyZWEge1xcclxcbiAgbWF4LXdpZHRoOiA5MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGlzIHBzZXVkbyBlbGVtZW50IGhlbHBzIGtlZXAgdGhlIGNlbGxzIGFsaWduZWQgdG9nZXRoZXIgKi9cXHJcXG4vKiBFbXB0eSBkaXZzIGFjdCBzdHJhbmdlbHksIHNvIHB1dCBjb250ZW50IGluIHRoZW0uICAqL1xcclxcbi8qIERlbGV0ZSBpdCBhbmQgdGhlbiBydW4gdGhpcyBpbiBjb25zb2xlIHRvIHNlZSB0aGF0ICovXFxyXFxuLyogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXFwiLmNlbGxcXFwiKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC50ZXh0Q29udGVudCA9IFxcXCJBXFxcIik7ICovXFxyXFxuLmNlbGw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcuJztcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpXFxyXFxufVxcclxcblxcclxcbi5zaGlwLXNlbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUge1xcclxcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlIC5jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzk3ZmM7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGUge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4udmFsaWQtZHJhZyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMjU1LCA1NSkgIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCA2NCwgMC4zKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5zaGlwLXBsYWNlZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM0ZThhMDI7XFxyXFxufVxcclxcblxcclxcbi5vY2N1cGllZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyMzgsIDI1Mik7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWdnYWJsZS52ZXJ0aWNhbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcGxhY2VkIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzEsIDI1LCAyNSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAyLCAyLCAwLjcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTM2LCAxMzYsIDAuODYzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1zdGFydC1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtbWlkZGxlLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtZW5kLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLXN0YXJ0LXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLW1pZGRsZS12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1lbmQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC10cmFuc3BhcmVudCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWFyZWEuZ2FtZS1hY3RpdmUge1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ucDEuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGUgLnNoaXAge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4ucDEuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmV2ZXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucDIuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGU6bm90KC5hdHRhY2tlZCk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwwLDAuNik7XFxyXFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmdhbWVib2FyZC1hcmVhLmdhbWUtYWN0aXZlID4gZGl2LmdhbWVib2FyZCAuY2VsbC5hdHRhY2tlZCB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQ6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDI1JTtcXHJcXG4gIHZpc2liaWxpdHk6IHVuc2V0O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTcwJTtcXHJcXG4gIHJpZ2h0OiAyNSU7XFxyXFxuICAvKiBib3R0b206IDI1JTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCAuY2VsbC5hdHRhY2tlZC5taXNzOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwi4peLXFxcIjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGFuaW1hdGlvbjogc21hc2ggMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCAuY2VsbC5hdHRhY2tlZC5oaXQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBhbmltYXRpb246IHNtYXNoIDAuNXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc21hc2gge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjI1O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMS4wO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2dhbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNEQUFzRDs7QUFFdEQ7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBLDhEQUE4RDtBQUM5RCx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELGdGQUFnRjtBQUNoRjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLFlBQVk7SUFDWixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGb3IgQ1NTIGltcG9ydGFudCB0byB0aGUgZnVuY3Rpb25pbmcgb2YgdGhlIGdhbWUuICovXFxyXFxuXFxyXFxuLm5vLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1hcmVhIHtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhpcyBwc2V1ZG8gZWxlbWVudCBoZWxwcyBrZWVwIHRoZSBjZWxscyBhbGlnbmVkIHRvZ2V0aGVyICovXFxyXFxuLyogRW1wdHkgZGl2cyBhY3Qgc3RyYW5nZWx5LCBzbyBwdXQgY29udGVudCBpbiB0aGVtLiAgKi9cXHJcXG4vKiBEZWxldGUgaXQgYW5kIHRoZW4gcnVuIHRoaXMgaW4gY29uc29sZSB0byBzZWUgdGhhdCAqL1xcclxcbi8qIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXFxcIi5jZWxsXFxcIikuZm9yRWFjaChjZWxsID0+IGNlbGwudGV4dENvbnRlbnQgPSBcXFwiQVxcXCIpOyAqL1xcclxcbi5jZWxsOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnLic7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDIzOCwgMjUyKVxcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zZWxlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlIHtcXHJcXG4gIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWdnYWJsZSAuY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM5N2ZjO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbGlkLWRyYWcge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDI1NSwgNTUpICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgNjQsIDAuMykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLnNoaXAtcGxhY2VkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNGU4YTAyO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUudmVydGljYWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXBsYWNlZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMxLCAyNSwgMjUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMiwgMiwgMC43Mik7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEzNiwgMTM2LCAwLjg2Myk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtc3RhcnQtaG9yaXpvbnRhbCB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLW1pZGRsZS1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXJldmVhbC5zaGlwLWVuZC1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1zdGFydC12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1yZXZlYWwuc2hpcC1taWRkbGUtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcmV2ZWFsLnNoaXAtZW5kLXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwtdHJhbnNwYXJlbnQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtYXJlYSB7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC43cztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhLmdhbWUtYWN0aXZlIHtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlIC5zaGlwIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJldmVydDtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlOm5vdCguYXR0YWNrZWQpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDAsMCwwLjYpO1xcclxcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxyXFxufVxcclxcblxcclxcbmRpdi5nYW1lYm9hcmQtYXJlYS5nYW1lLWFjdGl2ZSA+IGRpdi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2VkOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAyNSU7XFxyXFxuICB2aXNpYmlsaXR5OiB1bnNldDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBmb250LXNpemU6IDE3MCU7XFxyXFxuICByaWdodDogMjUlO1xcclxcbiAgLyogYm90dG9tOiAyNSU7ICovXFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQubWlzczo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIuKXi1xcXCI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBhbmltYXRpb246IHNtYXNoIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQuaGl0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYW5pbWF0aW9uOiBzbWFzaCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNtYXNoIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC4yNTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEuMDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGb3IgQ1NTIHRoYXQgaGFzIGFlc3RoZXRpYyBwdXJwb3Nlcy4gKi9cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzUzZGVnLCByZ2IoMTEgMzUgNTYgLyA4OSUpLCByZ2IoOTQgMjA3IDIxOSAvIDU0JSkgNTUuNzElKSxcXHJcXG4gIGxpbmVhci1ncmFkaWVudCgyNjVkZWcsIHJnYigyMzggOCAyNiAvIDkwJSksIHJnYigxOCAzOCA4OCAvIDczJSkgNzAuNzElKSxcXHJcXG4gIGxpbmVhci1ncmFkaWVudCgxNDJkZWcsIHJnYigxMzMgMTMxIDIwNSAvIDgzJSksIHJnYig0OSA4MiAxMDMgLyA3NyUpIDcwLjcxJSk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZmxleDogMSAwIGF1dG87XFxyXFxufVxcclxcbi5mb290ZXIge1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmdoLWljb24ge1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiAgdGV4dC1zaGFkb3c6IDRweCAycHggMnB4ICMwMDAwMDA0NTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4OyAgXFxyXFxufVxcclxcblxcclxcbi50aXRsZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIyNSU7ICBcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvciB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiA2NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1waWMge1xcclxcbiAgd2lkdGg6IDY0cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDE2cHggNHB4ICM0NTQzNDM5NDtcXHJcXG59XFxyXFxuXFxyXFxuLnAxIC5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnAxIC5nYW1lYm9hcmQtZ3JpZCA+IC5jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyIDEyIDMyIC8gNzMlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAyIC5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdhbWVib2FyZCAuY2VsbCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUsNzksMTMxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdhbWVib2FyZCAuY2VsbDpub3QoLmNwdS1zaGlwLXBsYWNlZCkge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMSwgMjUsIDI1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDIsIDIsIDAuNzIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLW93bmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTI1JTtcXHJcXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtc21hbGwtY2FwcztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGUge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLmRyYWdnYWJsZSBkaXYuY2VsbCB7XFxyXFxuICBib3JkZXI6IDNweCBvdXRzZXQgIzE5NjRjNDtcXHJcXG4gIHdpZHRoOiAxOS43cHg7XFxyXFxuICBoZWlnaHQ6IDE5LjFweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAtcGxhY2VkLnZlcnRpY2FsIGRpdi5jZWxsIHtcXHJcXG4gIGhlaWdodDogMTkuN3B4O1xcclxcbiAgd2lkdGg6IDE5LjFweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZGl2LnNoaXAtcGxhY2VkIHtcXHJcXG4gIHRvcDogLTJweDtcXHJcXG4gIGxlZnQ6IC0ycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5ZGQxO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGU6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMTg0LCAyMzMsIDI1NSwgMC41NjIpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGU6aG92ZXI6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTAwJTsgXFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxuICBib3JkZXItd2lkdGg6IDVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrIGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGU6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1uYW1lKTtcXHJcXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtc21hbGwtY2FwcztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LDQ1LDQ1KTtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIGNvbG9yOiBiZWlnZTtcXHJcXG4gIGJvdHRvbTogY2FsYygxMDAlICsgNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwubnVtYmVyaW5nIC5udW1iZXItbGFiZWwge1xcclxcbiAgbWFyZ2luOiA2cHggYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBmb250LXNpemU6IDExMCU7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWFyZWEge1xcclxcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2ctYXJlYSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMXB4IDZweCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxyXFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLWFyZWEgLmRpYWxvZy1tc2cge1xcclxcbiAgZm9udC1zaXplOiAxNjUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZy1hcmVhIC5jb250cm9scy1oZWxwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IC4yNWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1hcmVhIHtcXHJcXG4gIHdpZHRoOiAyOTBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zZWxlY3Rpb24gPiAqIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBsYWNlciB7XFxyXFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VyLWxhYmVsLCAuc3RhcnQtZ2FtZS1wcm9tcHQgPiBbZm9yPVxcXCJwMS1uYW1lXFxcIl0ge1xcclxcbiAgZm9udC12YXJpYW50LWNhcHM6IGFsbC1wZXRpdGUtY2FwcztcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jcDEtbmFtZSB7XFxyXFxuICBhbGw6IHVuc2V0O1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZ2FtZS1idXR0b24ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjE1LCAxNDApO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lLWJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViZGlhbG9nLWFyZWEge1xcclxcbiAgLyogYW5pbWF0aW9uOiBwdWxsLW9wZW4gMS4yNXM7ICovXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcHVsbC1vcGVuIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjEpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWdhbWUtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzEsIDE4NSk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lLWJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTU0LCA2Mik7XFxyXFxufVxcclxcblxcclxcbi5hcHBlYXItZnJvbS1ib3R0b20ge1xcclxcbiAgYW5pbWF0aW9uOiBhcHBlYXItZnJvbS1ib3R0b20gMC43NXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcGVhci1mcm9tLXJpZ2h0IHtcXHJcXG4gIGFuaW1hdGlvbjogYXBwZWFyLWZyb20tcmlnaHQgMXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyLWZyb20tYm90dG9tIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXItZnJvbS1yaWdodCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXHJcXG4gIH1cXHJcXG4gIDMwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEseUNBQXlDO0FBRXpDO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHdJQUF3STtFQUN4SSxZQUFZO0VBQ1o7OzhFQUU0RTtFQUM1RSw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztB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N0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZvciBDU1MgdGhhdCBoYXMgYWVzdGhldGljIHB1cnBvc2VzLiAqL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM1M2RlZywgcmdiKDExIDM1IDU2IC8gODklKSwgcmdiKDk0IDIwNyAyMTkgLyA1NCUpIDU1LjcxJSksXFxyXFxuICBsaW5lYXItZ3JhZGllbnQoMjY1ZGVnLCByZ2IoMjM4IDggMjYgLyA5MCUpLCByZ2IoMTggMzggODggLyA3MyUpIDcwLjcxJSksXFxyXFxuICBsaW5lYXItZ3JhZGllbnQoMTQyZGVnLCByZ2IoMTMzIDEzMSAyMDUgLyA4MyUpLCByZ2IoNDkgODIgMTAzIC8gNzclKSA3MC43MSUpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIGZsZXg6IDEgMCBhdXRvO1xcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5naC1pY29uIHtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4gIHRleHQtc2hhZG93OiA0cHggMnB4IDJweCAjMDAwMDAwNDU7XFxyXFxuICBtYXJnaW4tbGVmdDogMTVweDsgIFxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyMjUlOyAgXFxyXFxufVxcclxcblxcclxcbi5hdXRob3Ige1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogNjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tcGljIHtcXHJcXG4gIHdpZHRoOiA2NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxNnB4IDRweCAjNDU0MzQzOTQ7XFxyXFxufVxcclxcblxcclxcbi5wMSAuZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wMSAuZ2FtZWJvYXJkLWdyaWQgPiAuY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiAxMiAzMiAvIDczJSk7XFxyXFxufVxcclxcblxcclxcbi5wMiAuZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wMS5nYW1lYm9hcmQgLmNlbGwge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1LDc5LDEzMSk7XFxyXFxufVxcclxcblxcclxcbi5wMi5nYW1lYm9hcmQgLmNlbGw6bm90KC5jcHUtc2hpcC1wbGFjZWQpIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzEsIDI1LCAyNSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAyLCAyLCAwLjcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1vd25lciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEyNSU7XFxyXFxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXNtYWxsLWNhcHM7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuZHJhZ2dhYmxlIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5kcmFnZ2FibGUgZGl2LmNlbGwge1xcclxcbiAgYm9yZGVyOiAzcHggb3V0c2V0ICMxOTY0YzQ7XFxyXFxuICB3aWR0aDogMTkuN3B4O1xcclxcbiAgaGVpZ2h0OiAxOS4xcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLXBsYWNlZC52ZXJ0aWNhbCBkaXYuY2VsbCB7XFxyXFxuICBoZWlnaHQ6IDE5LjdweDtcXHJcXG4gIHdpZHRoOiAxOS4xcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbmRpdi5zaGlwLXBsYWNlZCB7XFxyXFxuICB0b3A6IC0ycHg7XFxyXFxuICBsZWZ0OiAtMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OWRkMTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuZHJhZ2dhYmxlOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDE4NCwgMjMzLCAyNTUsIDAuNTYyKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuZHJhZ2dhYmxlOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDEwMCU7IFxcclxcbiAgbGVmdDogMTVweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcclxcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibGFjayBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuZHJhZ2dhYmxlOmhvdmVyOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtbmFtZSk7XFxyXFxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXNtYWxsLWNhcHM7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSw0NSw0NSk7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBjb2xvcjogYmVpZ2U7XFxyXFxuICBib3R0b206IGNhbGMoMTAwJSArIDVweCk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLm51bWJlcmluZyAubnVtYmVyLWxhYmVsIHtcXHJcXG4gIG1hcmdpbjogNnB4IGF1dG87XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgZm9udC1zaXplOiAxMTAlO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1hcmVhIHtcXHJcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLWFyZWEge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDFweCA2cHggcmdiKDEwMCwgMTAwLCAxMDApO1xcclxcbiAgbWluLWhlaWdodDogNzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZy1hcmVhIC5kaWFsb2ctbXNnIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTY1JTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2ctYXJlYSAuY29udHJvbHMtaGVscCB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAuMjVpbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYXJlYSB7XFxyXFxuICB3aWR0aDogMjkwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtc2VsZWN0aW9uID4gKiB7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1wbGFjZXIge1xcclxcbiAgbWluLWhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBsYWNlci1sYWJlbCwgLnN0YXJ0LWdhbWUtcHJvbXB0ID4gW2Zvcj1cXFwicDEtbmFtZVxcXCJdIHtcXHJcXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtcGV0aXRlLWNhcHM7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3AxLW5hbWUge1xcclxcbiAgYWxsOiB1bnNldDtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWdhbWUtYnV0dG9uIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxyXFxuICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxNSwgMTQwKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZ2FtZS1idXR0b246ZGlzYWJsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YmRpYWxvZy1hcmVhIHtcXHJcXG4gIC8qIGFuaW1hdGlvbjogcHVsbC1vcGVuIDEuMjVzOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHB1bGwtb3BlbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4xKTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1nYW1lLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjMxLCAxODUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtZ2FtZS1idXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDE1NCwgNjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwZWFyLWZyb20tYm90dG9tIHtcXHJcXG4gIGFuaW1hdGlvbjogYXBwZWFyLWZyb20tYm90dG9tIDAuNzVzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5hcHBlYXItZnJvbS1yaWdodCB7XFxyXFxuICBhbmltYXRpb246IGFwcGVhci1mcm9tLXJpZ2h0IDFzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFwcGVhci1mcm9tLWJvdHRvbSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyLWZyb20tcmlnaHQge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxyXFxuICB9XFxyXFxuICAzMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmF0dGxlc2hpcC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYmF0dGxlc2hpcC5wbmdcIixcblx0XCIuL2doLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9naC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5cclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nJztcclxuaW1wb3J0IHsgR0FNRV9TVEFURSB9IGZyb20gXCIuL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHNldE5hbWUgfSBmcm9tIFwiLi9zaGlwXCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGVsZW1lbnRzIGZvciBCYXR0bGVzaGlwLlxyXG4gKi9cclxuIGV4cG9ydCBjbGFzcyBCYXR0bGVzaGlwRWxlbWVudHMge1xyXG5cclxuICAjZGlhbG9nSG9sZGVyO1xyXG4gICNnYW1lQ29udGFpbmVyO1xyXG4gIGdhbWVNYW5hZ2VyO1xyXG4gICNjdXJyZW50RHJhZ2dlZFNoaXBJZDtcclxuICAjY3VycmVudERyYWdnZWRMZW5ndGg7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWVNYW5hZ2VyKSB7XHJcbiAgICB0aGlzLmdhbWVNYW5hZ2VyID0gZ2FtZU1hbmFnZXI7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIpO1xyXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwidGl0bGUtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGNvbXBvbmVudC5oZWFkaW5nKFwiQmF0dGxlc2hpcHNcIiwgMSwgXCJ0aXRsZVwiKTtcclxuICAgIGNvbnN0IHRpdGxlSWNvbiA9IGNvbXBvbmVudC5pbWcobG9nbywgXCJsb2dvLXBpY1wiKTtcclxuICAgIGNvbnN0IGF1dGhvckxhYmVsID0gY29tcG9uZW50LnAoXCJieSBEYW4gVC5cIiwgXCJhdXRob3JcIik7XHJcblxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKHRpdGxlSWNvbiwgdGl0bGVMYWJlbCk7XHJcblxyXG4gICAgaGVhZGluZy5hcHBlbmQodGl0bGVDb250YWluZXIsIGF1dGhvckxhYmVsKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGluZztcclxuICB9XHJcblxyXG4gIGdhbWVBcmVhKCkge1xyXG4gICAgdGhpcy4jZ2FtZUNvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJnYW1lLWFyZWFcIik7XHJcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZ2FtZWJvYXJkLWFyZWFcIik7XHJcbiAgICBjb25zdCBkaWFsb2dDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZGlhbG9nLWFyZWFcIik7XHJcbiAgICBjb25zdCBtZW51QXJlYSA9IGNvbXBvbmVudC5kaXYoXCJtZW51LWFyZWFcIik7XHJcbiAgICBjb25zdCBzdW1tYXJ5QXJlYSA9IGNvbXBvbmVudC5kaXYoXCJzdW1tYXJ5LWFyZWFcIiwgXCJuby1kaXNwbGF5XCIpO1xyXG5cclxuICAgIHRoaXMuI2dhbWVDb250YWluZXIuYXBwZW5kKGRpYWxvZ0NvbnRhaW5lciwgZ2FtZWJvYXJkQ29udGFpbmVyLCBtZW51QXJlYSwgc3VtbWFyeUFyZWEpO1xyXG5cclxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmQodGhpcy4jZ2FtZWJvYXJkKFwiUGxheWVyXCIsIFwicDFcIiksIHRoaXMuI2dhbWVib2FyZChcIkNQVVwiLCBcInAyXCIsIFwibm8tZGlzcGxheVwiKSk7XHJcblxyXG4gICAgZGlhbG9nQ29udGFpbmVyLmFwcGVuZCh0aGlzLiNkaWFsb2coKSk7XHJcblxyXG4gICAgbWVudUFyZWEuYXBwZW5kKHRoaXMuI3NoaXBQbGFjZW1lbnQoKSk7XHJcbiAgICBtZW51QXJlYS5hcHBlbmQodGhpcy4jc3RhcnRHYW1lUHJvbXB0KCkpO1xyXG5cclxuICAgIHRoaXMuZ2VuZXJhdGVEcmFnZ2FibGVTaGlwcygpO1xyXG4gICAgdGhpcy4jZW5hYmxlRHJhZ0FuZERyb3BPbkNlbGwoKTtcclxuXHJcbiAgICBzdW1tYXJ5QXJlYS5hcHBlbmQodGhpcy4jc3VtbWFyeSgpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy4jZ2FtZUNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGNsaWNrYWJsZSBncmlkIGJhc2VkIG9uIHRoZSBnYW1lIG1hbmFnZXIncyBnYW1lYm9hcmQgc2l6ZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWVyTmFtZSA6IHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXI7IHVzZWQgYXMgYSBjbGFzcyBuYW1lIHRvIFxyXG4gICAqIGlkZW50aWZ5IHRoZSBnYW1lYm9hcmQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyA6IEFkZGl0aW9uYWwgY2xhc3MgbmFtZXMgdG8gaWRlbnRpZnkgdGhlIGdhbWVib2FyZCBieS5cclxuICAgKi9cclxuICAjZ2FtZWJvYXJkKHBsYXllck5hbWUsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKGNsYXNzTmFtZXMpO1xyXG4gICAgY29uc29sZS5sb2coLi4uY2xhc3NOYW1lcyk7XHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBjb21wb25lbnQuZGl2KFwiZ2FtZWJvYXJkXCIsIC4uLmNsYXNzTmFtZXMpO1xyXG4gICAgY29uc3QgZ2FtZWJvYXJkR3JpZCA9IGNvbXBvbmVudC5kaXYoXCJnYW1lYm9hcmQtZ3JpZFwiKTtcclxuXHJcbiAgICBjb25zdCBncmlkU2l6ZSA9IHRoaXMuZ2FtZU1hbmFnZXIucGxheWVyc1swXS5nYW1lYm9hcmQuc2l6ZTtcclxuICAgIGNvbnN0IG51bWJlckNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiLCBcIm51bWJlcmluZ1wiKTtcclxuICAgIGNvbnN0IG51bWJlclRleHQgPSBjb21wb25lbnQucChcIlwiLCBcIm51bWJlci1sYWJlbFwiKTtcclxuXHJcbiAgICBudW1iZXJDZWxsLmFwcGVuZChudW1iZXJUZXh0KTtcclxuICAgIGdhbWVib2FyZEdyaWQucHJlcGVuZChjb21wb25lbnQuZGl2KFwiY2VsbFwiLCBcImJsYW5rXCIpKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgcm93IG51bWJlcmluZ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkU2l6ZTsgaSsrKSB7XHJcbiAgICAgIG51bWJlclRleHQudGV4dENvbnRlbnQgPSBpICsgMTtcclxuICAgICAgZ2FtZWJvYXJkR3JpZC5hcHBlbmQobnVtYmVyQ2VsbC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZSBjb2x1bW4gbnVtYmVyaW5nIGFuZCBjZWxsc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkU2l6ZTsgaSsrKSB7XHJcbiAgICAgIG51bWJlclRleHQudGV4dENvbnRlbnQgPSBpICsgMTtcclxuICAgICAgZ2FtZWJvYXJkR3JpZC5hcHBlbmQobnVtYmVyQ2VsbC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkU2l6ZTsgaisrKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiLCBcInNlbGVjdGFibGVcIik7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGo7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICAgIGdhbWVib2FyZEdyaWQuYXBwZW5kKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZWJvYXJkLmFwcGVuZChnYW1lYm9hcmRHcmlkKTtcclxuXHJcbiAgICAvLyBBcHBseSBoZWFkZXJzIGZvciB0aGUgZ2FtZWJvYXJkXHJcbiAgICBnYW1lYm9hcmQucHJlcGVuZChjb21wb25lbnQuaGVhZGluZyhwbGF5ZXJOYW1lLCAyLCBcImdhbWVib2FyZC1vd25lclwiKSk7XHJcblxyXG4gICAgcmV0dXJuIGdhbWVib2FyZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGRpYWxvZyBtZXNzYWdlLCB3aGljaCBpcyB1c2VkIHRvIFxyXG4gICAqIGdpdmUgdGhlIHVzZXIgZGlyZWN0aW9ucyBvbiBlYWNoIHBoYXNlIG9mIHRoZSBnYW1lLlxyXG4gICAqL1xyXG4gICNkaWFsb2coKSB7XHJcbiAgICBsZXQgZGlhbG9nQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImRpYWxvZ1wiKTtcclxuICAgIGxldCBkaWFsb2dNc2cgPSBjb21wb25lbnQucChHQU1FX1NUQVRFLndlbGNvbWVQcm9tcHQsIFwiZGlhbG9nLW1zZ1wiKTtcclxuICAgIGxldCBzdWJEaWFsb2cgPSBjb21wb25lbnQuZGl2KFwic3ViZGlhbG9nLWFyZWFcIik7XHJcbiAgICBcclxuICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmQoZGlhbG9nTXNnLCBzdWJEaWFsb2cpO1xyXG5cclxuICAgIHRoaXMuI2RpYWxvZ0hvbGRlciA9IGRpYWxvZ0NvbnRhaW5lcjtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBkaWFsb2cgZm9yIHRoZSBiYXR0bGVzaGlwIGdhbWUuIFByZWZlcmFibHksIHVzZSBtZXNzYWdlcyBmcm9tIHRoZVxyXG4gICAqIGdhbWVtYW5hZ2VyIEdBTUVfU1RBVEUgb2JqZWN0LlxyXG4gICAqIEBwYXJhbSB7fSBtZXNzYWdlIFxyXG4gICAqL1xyXG4gIHNldERpYWxvZyhtZXNzYWdlKSB7XHJcbiAgICBsZXQgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWFsb2ctbXNnXCIpO1xyXG4gICAgbXNnLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICAgIFV0aWxpdHkudHJpZ2dlckFuaW1hdGlvbihtc2csIFwiYXBwZWFyLWZyb20tYm90dG9tXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHN1YmRpYWxvZyBpbiB0aGUgZGlhbG9nIGFyZWEuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nW119IG1lc3NhZ2VzIFxyXG4gICAqL1xyXG4gIHNldFN1YkRpYWxvZyguLi5tZXNzYWdlcykge1xyXG4gICAgY29uc3Qgc2RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJkaWFsb2ctYXJlYVwiKTtcclxuICAgIFV0aWxpdHkucmVtb3ZlQWxsQ2hpbGRyZW4oc2RhKTtcclxuXHJcbiAgICBtZXNzYWdlcy5mb3JFYWNoKG1zZyA9PiB7XHJcbiAgICAgIGxldCBwID0gY29tcG9uZW50LnAobXNnLCBcInN1YmRpYWxvZy1tZXNzYWdlXCIpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YmRpYWxvZy1hcmVhXCIpLmFwcGVuZChwKTtcclxuICAgICAgVXRpbGl0eS50cmlnZ2VyQW5pbWF0aW9uKHAsIFwiYXBwZWFyLWZyb20tcmlnaHRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhbiBpbnZlbnRvcnkgb2Ygc2hpcHMgYW5kIGxldHMgdGhlbSBiZSBkcmFnZ2VkIGJ5IHRoZSBwbGF5ZXIuXHJcbiAgICovXHJcbiAgI3NoaXBQbGFjZW1lbnQoKSB7XHJcbiAgICBsZXQgc2hpcEludmVudG9yeSA9IGNvbXBvbmVudC5kaXYoXCJzaGlwLXBsYWNlclwiKTtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0gY29tcG9uZW50LmhlYWRpbmcoXCJZb3VyIEFybWFkYTpcIiwgMywgXCJzaGlwLXBsYWNlci1sYWJlbFwiKTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBjb21wb25lbnQuZGl2KFwic2hpcC1zZWxlY3Rpb25cIik7XHJcblxyXG4gICAgc2hpcEludmVudG9yeS5hcHBlbmQoaGVhZGVyLCBzZWxlY3Rpb24pO1xyXG5cclxuICAgIHJldHVybiBzaGlwSW52ZW50b3J5O1xyXG4gIH1cclxuXHJcbiAgLyoqIFxyXG4gICAqIFJlZ2VuZXJhdGUgZHJhZ2dhYmxlIHNoaXBzIHdpdGhpbiAuc2hpcC1zZWxlY3Rpb24uXHJcbiAgICovXHJcbiAgZ2VuZXJhdGVEcmFnZ2FibGVTaGlwcygpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5zaGlwLXNlbGVjdGlvblwiKVxyXG4gICAgdGhpcy5nYW1lTWFuYWdlci5zaGlwTGVuZ3Rocy5mb3JFYWNoKChzaGlwTGVuLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgc2hpcCA9IGNvbXBvbmVudC5kaXYoXCJzaGlwXCIsIFwiZHJhZ2dhYmxlXCIpO1xyXG4gICAgICBzaGlwLmlkID0gYHBsYXllci1zaGlwJHtpbmRleH1gO1xyXG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiKTtcclxuICAgICAgICBzaGlwLmFwcGVuZChjZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIHRoaXMuI3NoaXBPbkRyYWdTdGFydC5iaW5kKHRoaXMpKTtcclxuICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCB0aGlzLiNzaGlwT25EcmFnRW5kLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgc2hpcC5kYXRhc2V0Lm5hbWUgPSBzZXROYW1lKHNoaXBMZW4pO1xyXG5cclxuICAgICAgY29udGFpbmVyLmFwcGVuZChzaGlwKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5IGRyb3AgZ3VpZGVzIHdoZW4gYSBzaGlwIGlzIGJlaW5nIGRyYWdnZWQgb3ZlciBhIGdhbWVib2FyZC5cclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gZHJhZyBvdmVyIGV2ZW50LlxyXG4gICAqL1xyXG4gICNkaXNwbGF5RHJvcEd1aWRlcyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBsZXQgaG92ZXJDZWxsID0gVXRpbGl0eS5nZXRNYXRjaGluZ1BhcmVudChlLnRhcmdldCwgXCIuc2VsZWN0YWJsZVwiKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZH1gKS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWR9YCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIikpIHtcclxuICAgICAgLy8gYXBwbHkgdmVydGljYWwgZ3VpZGUuXHJcbiAgICAgIGxldCBjb2wgPSBob3ZlckNlbGwuZGF0YXNldC5jb2w7XHJcbiAgICAgIGxldCBjZWxsc0NvbCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1jb2w9XCIke2NvbH1cIl1gKSk7XHJcbiAgICAgIGxldCBpbmRleCA9IGNlbGxzQ29sLmluZGV4T2YoaG92ZXJDZWxsKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCArIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoIDw9IGNlbGxzQ29sLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgLy8gbm90IGEgdmFsaWQgcGxhY2VtZW50LlxyXG4gICAgICAgICAgaWYgKGNlbGxzQ29sW2ldLmNsYXNzTGlzdC5jb250YWlucyhcIm9jY3VwaWVkXCIpXHJcbiAgICAgICAgICAgICYmIGNlbGxzQ29sW2ldLmRhdGFzZXQuc2hpcCAhPT0gdGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWQpIHtcclxuICAgICAgICAgICAgdGhpcy4jcmVtb3ZlRHJhZ0d1aWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNlbGxzQ29sW2ldLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcmFnXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gYXBwbHkgaG9yaXpvbnRhbCBndWlkZVxyXG4gICAgICBsZXQgcm93ID0gaG92ZXJDZWxsLmRhdGFzZXQucm93O1xyXG4gICAgICBsZXQgY2VsbHNSb3cgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgICBsZXQgaW5kZXggPSBjZWxsc1Jvdy5pbmRleE9mKGhvdmVyQ2VsbCk7XHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImhvdmVyaW5nIG92ZXIgaW5kZXg6IFwiICsgaW5kZXgpO1xyXG5cclxuICAgICAgaWYgKGluZGV4ICsgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGggPD0gY2VsbHNSb3cubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyB0aGlzLiNjdXJyZW50RHJhZ2dlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAvLyBub3QgYSB2YWxpZCBwbGFjZW1lbnQuXHJcbiAgICAgICAgICBpZiAoY2VsbHNSb3dbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib2NjdXBpZWRcIilcclxuICAgICAgICAgICAgJiYgY2VsbHNSb3dbaV0uZGF0YXNldC5zaGlwICE9PSB0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZCkge1xyXG4gICAgICAgICAgICB0aGlzLiNyZW1vdmVEcmFnR3VpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNlbGxzUm93W2ldLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcmFnXCIpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coe2luZGV4LCBjdXJyZW50RHJhZ2dlZExlbmd0aCwgaX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGRyYWcgZ3VpZGUuXHJcbiAgICovXHJcbiAgI3JlbW92ZURyYWdHdWlkZSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlXCIpXHJcbiAgICAuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWQtZHJhZ1wiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWZ0ZXIgdGhlIHVzZXIgZHJvcHMgdGhlIHNoaXAsIHBsYWNlcyB0aGUgc2hpcC5cclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gRHJvcCBldmVudC5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICAjcGxhY2VTaGlwT25Ecm9wKGUpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuI2N1cnJlbnREcmFnZ2VkU2hpcElkfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgLy8gb25seSB3aGVuIHRoZSBhcmVhIGlzIGEgdmFsaWQtZHJhZyBkbyB3ZSBhZGQgaXQgaW4uIG90aGVyd2lzZSwgbm9wZS5cclxuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmFsaWQtZHJhZ1wiKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy4jcmVtb3ZlRHJhZ0d1aWRlKCk7XHJcblxyXG4gICAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuXHJcbiAgICAvLyBiZWZvcmUgbW92aW5nIHRoZSBzaGlwLCBkZXRlcm1pbmUgaWYgaXQgaGFzIGJlZW4gcGxhY2VkIGFscmVhZHkuLi4gXHJcbiAgICAvLyB0aGlzIGlzIHRydWUgaWYgdGhlIHNoaXAgaXMgaW5zaWRlIGEgc2VsZWN0YWJsZSBjZWxsLlxyXG4gICAgbGV0IGxhc3RQbGFjZWRMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWxlY3RhYmxlICMke2lkfWApO1xyXG5cclxuICAgIC8vIGlmIHNvIHdlIG5lZWQgdG8gcmVtb3ZlIG9jY3VwaWVkIGZyb20gc3VjaCBjZWxscy5cclxuICAgIGlmIChsYXN0UGxhY2VkTG9jYXRpb24gIT09IG51bGwpIHtcclxuICAgICAgbGV0IGNlbGxzO1xyXG4gICAgICBsZXQgdmVydGljYWwgPSBsYXN0UGxhY2VkTG9jYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIik7XHJcblxyXG4gICAgICAvLyBwYXJlbnROb2RlIGlzIHRoZSBjZWxsLlxyXG4gICAgICBsYXN0UGxhY2VkTG9jYXRpb24gPSBsYXN0UGxhY2VkTG9jYXRpb24ucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIGxldCBjb2wgPSBsYXN0UGxhY2VkTG9jYXRpb24uZGF0YXNldC5jb2w7XHJcbiAgICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtY29sPVwiJHtjb2x9XCJdYCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJlbW92ZSBvY2N1cGllZCBtYXJraW5nIGZyb20gdGhvc2UgY2VsbHMuXHJcbiAgICAgICAgbGV0IHJvdyA9IGxhc3RQbGFjZWRMb2NhdGlvbi5kYXRhc2V0LnJvdztcclxuICAgICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke3Jvd31cIl1gKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBpbmRleCA9IGNlbGxzLmluZGV4T2YobGFzdFBsYWNlZExvY2F0aW9uKTtcclxuXHJcbiAgICAgIC8vIGNvbG9yIHRoZSBzdWJzZXF1ZW50IGNlbGxzLlxyXG4gICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgY2VsbHNbaV0uZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwbGFjZWRDZWxsID0gZS50YXJnZXQ7XHJcbiAgICAvLyBtb3ZlIHRoZSBzaGlwXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5jbGFzc0xpc3QuYWRkKFwic2hpcC1wbGFjZWRcIik7XHJcbiAgICBwbGFjZWRDZWxsLmFwcGVuZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKSk7XHJcblxyXG4gICAgbGV0IHZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIik7XHJcbiAgICBsZXQgY2VsbHM7XHJcblxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGxldCBjb2wgPSBwbGFjZWRDZWxsLmRhdGFzZXQuY29sO1xyXG4gICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1jb2w9XCIke2NvbH1cIl1gKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBnZXQgdGhlIHJvdywgaW5kZXgsIGFuZCBwbGFjZSB0aGVyZWFmdGVyIG9mIHRoZSBwbGFjZWQgY2VsbC5cclxuICAgICAgbGV0IHJvdyA9IHBsYWNlZENlbGwuZGF0YXNldC5yb3c7XHJcbiAgICAgIGNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLXJvdz1cIiR7cm93fVwiXWApKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5kZXggPSBjZWxscy5pbmRleE9mKHBsYWNlZENlbGwpO1xyXG5cclxuICAgIC8vIGNvbG9yIHRoZSBzdWJzZXF1ZW50IGNlbGxzLlxyXG4gICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyB0aGlzLiNjdXJyZW50RHJhZ2dlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgY2VsbHNbaV0uZGF0YXNldC5zaGlwID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWxsb3cgdGhlIHNoaXAgdG8gYmUgcm90YXRlZC5cclxuICAgIHRoaXMuI2FsbG93UGxhY2VkU2hpcFJvdGF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb250YWlucyBhIGNvbGxlY3Rpb24gb2YgY2FsbGJhY2tzIHRvIGVuYWJsZSBkcmFnICduJyBkcm9wIG9uIHRoZSBnYW1lYm9hcmQgd2l0aCByb3RhdGlvbi5cclxuICAgKiBXb3JrcyB3aXRoIHRoZSBkcmFnIGFuZCBkcm9wIEFQSSwgc28gaXQgd29ya3MgdG8gYXNzaWduIGNhbGxiYWNrcyB0byB0aGUgXHJcbiAgICogZHJhZ2dhYmxlIGl0ZW1zLCBhbmQgYWxsIHRoZSBkcm9wcGFibGUgem9uZSBpdCBwZXJ0YWlucyB0by4gSW4gdGhpcyBjYXNlLFxyXG4gICAqIHRoZSBzaGlwcyBhcmUgdGhlIGRyYWdnYWJsZXMsIGFuZCB0aGUgZHJvcCB6b25lcyBhcmUgYWxsIHRoZSBjZWxscyBvZiBcclxuICAgKiBwbGF5ZXIgMSdzIGdhbWVib2FyZC5cclxuICAgKi9cclxuICAjZW5hYmxlRHJhZ0FuZERyb3BPbkNlbGwoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIC8vIHRoaXMuYWRkU2hpcERyYWdIYW5kbGVycygpO1xyXG5cclxuICAgIC8vIGFsbCBjZWxscyB0aGF0IGFyZSBzZWxlY3RhYmxlIGFyZSBkcm9wcGFibGUgYXJlYXMuXHJcbiAgICB0aGlzLiNnYW1lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlXCIpLmZvckVhY2goY2VsbCA9PiB7XHJcblxyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBzZWxmLiNkaXNwbGF5RHJvcEd1aWRlcy5iaW5kKHNlbGYpKTtcclxuICAgICAgLy8gd2hlbiB0aGUgZHJhZyBlbGVtZW50IGxlYXZlcyBkcm9wcGFibGUgem9uZSwgcmVtb3ZlIGFsbCB2YWxpZCBkcmFnXHJcbiAgICAgIC8vIGl0J2xsIGp1c3QgYmUgcmVjcmVhdGVkIGJ5IHZhbGlkLWRyYWcuXHJcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBzZWxmLiNyZW1vdmVEcmFnR3VpZGUpO1xyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHNlbGYuI3BsYWNlU2hpcE9uRHJvcC5iaW5kKHNlbGYpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgI3NoaXBPbkRyYWdTdGFydChlKSB7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLnRhcmdldC5pZCk7XHJcblxyXG4gICAgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGggPSBlLnRhcmdldC5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgIHRoaXMuI2N1cnJlbnREcmFnZ2VkU2hpcElkID0gZS50YXJnZXQuaWQgPz8gZS50YXJnZXQuZGF0YXNldC5zaGlwO1xyXG4gICAgLy8gYmxhbmsgaW1hZ2VcclxuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShpbWcsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgI3NoaXBPbkRyYWdFbmQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZH1gKVxyXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIGZvciBzaGlwcyB0byBiZSByb3RhdGVkOyB0aGlzIGlzIGludm9rZWQgZWFjaCB0aW1lIGEgc2hpcCBpcyBwbGFjZWQsXHJcbiAgICogdG8gYWxsb3cgc2hpcHMsIG9uIHRoZSBnYW1lYm9hcmQsIHRvIGJlIHJvdGF0ZWQuXHJcbiAgICovXHJcbiAgI2FsbG93UGxhY2VkU2hpcFJvdGF0aW9uKCkge1xyXG4gICAgbGV0IGdyaWRTaXplID0gdGhpcy5nYW1lTWFuYWdlci5wbGF5ZXJzWzBdLmdhbWVib2FyZC5ncmlkLmxlbmd0aDtcclxuICAgIC8vIGFsbG93IHJvdGF0aW9uIG9mIHBsYWNlZCBzaGlwc1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLmRyYWdnYWJsZS5zaGlwLXBsYWNlZFwiKS5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICBpZiAoc2hpcC5vbmNsaWNrID09PSBudWxsKSB7XHJcbiAgICAgICAgc2hpcC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHZlcnRpY2FsT24gPSBzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgbGV0IGNlbGwgPSBzaGlwLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICBsZXQgc2hpcExlbmd0aCA9IHNoaXAuY2hpbGRFbGVtZW50Q291bnQ7XHJcblxyXG4gICAgICAgICAgbGV0IHJvd0luZGV4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdyk7XHJcbiAgICAgICAgICBsZXQgY29sSW5kZXggPSBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sKTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IHJvd0luZGV4LCBzaGlwTGVuZ3RoLCBncmlkU2l6ZSB9KTtcclxuXHJcbiAgICAgICAgICBpZiAocm93SW5kZXggKyBzaGlwTGVuZ3RoID4gZ3JpZFNpemUgfHwgY29sSW5kZXggKyBzaGlwTGVuZ3RoID4gZ3JpZFNpemUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGNoZWNrIGlmIGFueSBzaGlwcyBhcmUgaW4gdGhlIHdheSBvZiB0aGUgcm90YXRpb24uXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gcm93SW5kZXggKyAxOyBpIDwgcm93SW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnRcclxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke2l9XCJdYCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGNvbEluZGV4OyBqIDwgY29sSW5kZXggKyBzaGlwTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICBpZiAoY2VsbHNbal0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib2NjdXBpZWRcIikgJiYgY2VsbHNbal0uZGF0YXNldC5zaGlwICE9PSBzaGlwLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgcHJvY2VlZC5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlcmUncyBlbm91Z2ggc3BhY2UgdG8gbW92ZSBpdCB2ZXJ0aWNhbGx5LCBiYXNlZCBvbiB0aGUgc2hpcCBsZW5ndGguXHJcbiAgICAgICAgICAvLyAxIG5vIHNoaXBzIGluIHRoZSB3YXlcclxuICAgICAgICAgIC8vIDIud2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIGdhbWVib2FyZC5cclxuICAgICAgICAgIC8vIG9ubHkgdGhlbiBkbyB5b3UgYWxsb3cgdmVydGljYWwgY2xhc3MuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjZWxsKTtcclxuXHJcbiAgICAgICAgICBpZiAodmVydGljYWxPbikge1xyXG4gICAgICAgICAgICAvLyB2ZXJ0aWNhbCAtPiBob3Jpem9udGFsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSByb3dJbmRleCArIDE7IGkgPCByb3dJbmRleCArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7aX1cIl1bZGF0YS1jb2w9XCIke2NvbEluZGV4fVwiXWApO1xyXG4gICAgICAgICAgICAgIC8vIHN0cmlwIHZlcnRpY2FsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29sSW5kZXggKyAxOyBpIDwgY29sSW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAvLyBhZGQgaG9yaXpvbnRhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sPVwiJHtpfVwiXWApO1xyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gc2hpcC5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbCAtPiB2ZXJ0aWNhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29sSW5kZXggKyAxOyBpIDwgY29sSW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAvLyByZW1vdmUgaG9yaXpvbnRhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sPVwiJHtpfVwiXWApXHJcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93SW5kZXggKyAxOyBpIDwgcm93SW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAvLyBhZGQgdmVydGljYWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKVxyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gc2hpcC5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHRvZ2dsZSB2ZXJ0aWNhbCBmb3IgdGhlIHZpZXdcclxuICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgLy8gdGhlbiwgYWx0ZXIgdGhlIG9jY3VwaWVkIGNsYXNzLlxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGRpc2FibGUgcm90YXRpb24gZm9yIHNoaXBzIHRoYXQgYXJlIG5vdCBwbGFjZWQuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAuZHJhZ2dhYmxlOm5vdCguc2hpcC1wbGFjZWQpXCIpLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIGlmIChzaGlwLm9uY2xpY2sgIT09IG51bGwpIHtcclxuICAgICAgICBzaGlwLm9uY2xpY2sgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQbGFjZXMgc2hpcHMgb24gdGhlIGdhbWVib2FyZCBnaXZlbiBjb29yZGluYXRlcy4gVXNlZnVsIGZvciBBSS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCBcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGxheWVyMiAtIFBsYWNlIHNoaXBzIG9uIHBsYXllciAyJ3MgZ2FtZWJvYXJkP1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIHRoZSBJRCB0aGUgc2hpcCBzaG91bGQgYmUgaWRlbnRpZmllZCBieS5cclxuICAgKi9cclxuICBzdGF0aWMgcGxhY2VTaGlwVmlhQ29vcmRpbmF0ZShsZW5ndGgsIHJvdywgY29sLCB2ZXJ0aWNhbCwgcGxheWVyMiA9IHRydWUsIGlkKSB7XHJcbiAgICBjb25zb2xlLmxvZyh7bGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwsIHBsYXllcjIsIGlkfSk7XHJcbiAgICBsZXQgc2VsZWN0b3I7XHJcbiAgICBsZXQgZ2FtZWJvYXJkOyBcclxuICAgIGxldCBjcHVUYWcgPSBcImNwdS1zaGlwLXBsYWNlZFwiO1xyXG5cclxuICAgIGlmIChwbGF5ZXIyKSB7XHJcbiAgICAgIHNlbGVjdG9yID0gXCIucDIuZ2FtZWJvYXJkXCJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGVjdG9yID0gXCIucDEuZ2FtZWJvYXJkXCJcclxuICAgIH1cclxuXHJcbiAgICBnYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3NlbGVjdG9yfWApO1xyXG5cclxuICAgIGxldCBvcmlnaW5DZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5zZWxlY3RhYmxlW2RhdGEtcm93PScke3Jvd30nXVtkYXRhLWNvbD0nJHtjb2x9J11gKTtcclxuICAgIG9yaWdpbkNlbGwuZGF0YXNldC5zaGlwID0gaWQ7XHJcblxyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBsZXQgcm93cyA9IEFycmF5LmZyb20oZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoYC5zZWxlY3RhYmxlW2RhdGEtY29sPVwiJHtjb2x9XCJdYCkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcm93c1tpXS5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIiwgY3B1VGFnKTtcclxuICAgICAgICByb3dzW2ldLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG5cclxuICAgICAgICBzd2l0Y2goaSkge1xyXG4gICAgICAgICAgY2FzZSByb3c6IC8vIHN0YXJ0XHJcbiAgICAgICAgICAgIHJvd3NbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtc3RhcnQtdmVydGljYWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSByb3cgKyBsZW5ndGggLSAxOiAvLyBlbmRcclxuICAgICAgICAgICAgcm93c1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1lbmQtdmVydGljYWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogLy8gbWlkXHJcbiAgICAgICAgICAgIHJvd3NbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtbWlkZGxlLXZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjb2xzID0gQXJyYXkuZnJvbShnYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke3Jvd31cIl1gKSk7XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGxldCBpID0gY29sOyBpIDwgY29sICsgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb2xzW2ldLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiLCBjcHVUYWcpO1xyXG4gICAgICAgIGNvbHNbaV0uZGF0YXNldC5zaGlwID0gaWQ7XHJcblxyXG4gICAgICAgIHN3aXRjaChpKSB7XHJcbiAgICAgICAgICBjYXNlIGNvbDogLy8gc3RhcnRcclxuICAgICAgICAgICAgY29sc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdGFydC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgY29sICsgbGVuZ3RoIC0gMTogLy8gZW5kXHJcbiAgICAgICAgICAgIGNvbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtZW5kLWhvcml6b250YWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogLy8gbWlkXHJcbiAgICAgICAgICAgIGNvbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtbWlkZGxlLWhvcml6b250YWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXNrcyB1c2VyIGZvciB0aGVpciBuYW1lIGFuZCB0byBzdGFydCB0aGUgZ2FtZS4uLiBvbmx5IHdoZW4gdGhlIHNoaXAgcGxhY2VtZW50IGNvbnRhaW5lciBpcyBlbXB0eVxyXG4gICAqIHdpbGwgdGhlIHN0YXJ0IGdhbWUgYnV0dG9uIHVubG9jay5cclxuICAgKi9cclxuICAjc3RhcnRHYW1lUHJvbXB0KCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBzdGFydEdhbWVGb3JtID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcInN0YXJ0LWdhbWUtcHJvbXB0XCIpO1xyXG4gICAgY29uc3QgW3BsYXllck5hbWVMYWJlbCwgcGxheWVyTmFtZUZpZWxkXSA9IGNvbXBvbmVudC5mb3JtSW5wdXQoXCJOYW1lOiBcIiwgXCJpbnB1dFwiLCBcInAxLW5hbWVcIiwgXCJwMS1uYW1lXCIpO1xyXG4gICAgY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gY29tcG9uZW50LmJ1dHRvbihcIlN0YXJ0IEdhbWUhXCIsIFwic3RhcnQtZ2FtZS1idXR0b25cIik7XHJcblxyXG4gICAgcGxheWVyTmFtZUZpZWxkLnZhbHVlID0gXCJDb21tYW5kZXIgQmx1ZVwiO1xyXG4gICAgcGxheWVyTmFtZUZpZWxkLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIHBsYXllck5hbWVGaWVsZC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgeW91ciBuYW1lIGhlcmVcIjtcclxuXHJcbiAgICBzdGFydEdhbWVGb3JtLmFwcGVuZChwbGF5ZXJOYW1lTGFiZWwsIHBsYXllck5hbWVGaWVsZCwgc3RhcnRHYW1lQnV0dG9uKTtcclxuXHJcbiAgICBzdGFydEdhbWVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHN0YXJ0R2FtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNlbGYuZ2FtZU1hbmFnZXIuc3RhcnRHYW1lKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBET01PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuI2NoZWNrQWxsU2hpcHNQbGFjZWQpO1xyXG4gICAgRE9NT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiNnYW1lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1zZWxlY3Rpb25cIiksIHtjaGlsZExpc3Q6IHRydWV9KTtcclxuXHJcbiAgICByZXR1cm4gc3RhcnRHYW1lRm9ybTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhbGwgc2hpcHMgYmVlbiBwbGFjZWQ/IElmIHNvLCB1bmxvY2tzIHRoZSBnYW1lIGJ1dHRvbi4gVXNlZCB3aXRoXHJcbiAgICogTXV0YXRpb25PYnNlcnZlci5cclxuICAgKi9cclxuICAjY2hlY2tBbGxTaGlwc1BsYWNlZChtdXRhdGVkKSB7XHJcbiAgICBsZXQgc2hpcHNSZW1haW5pbmcgPSBtdXRhdGVkWzBdLnRhcmdldC5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgIGlmIChzaGlwc1JlbWFpbmluZyA+IDApIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lLWJ1dHRvblwiKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWUtYnV0dG9uXCIpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93cyBhIHN1bW1hcnkuIFRvIGJlIHVzZWQgYWZ0ZXIgdGhlIGdhbWUgaGFzIGZpbmlzaGVkLlxyXG4gICAqL1xyXG4gICNzdW1tYXJ5KC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNvbnN0IHN1bW1hcnkgPSBjb21wb25lbnQuZGl2KFwic3VtbWFyeS1zY3JlZW5cIiwgLi4uY2xhc3NOYW1lcyk7XHJcbiAgICBjb25zdCB2aWN0b3J5TXNnID0gY29tcG9uZW50LnAoYEdhbWUgT3ZlciEgV2lubmVyOiBgLCBcInZpY3RvcnktbWVzc2FnZVwiKTtcclxuICAgIGNvbnN0IHdpbm5lciA9IGNvbXBvbmVudC5zcGFuKFwiJVwiLCBcIndpbm5lclwiKTtcclxuXHJcbiAgICBjb25zdCBzdGF0c0NvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJzdW1tYXJ5LXN0YXRpc3RpY3NcIik7XHJcbiAgICBjb25zdCBzdGF0c0hlYWRpbmcgPSBjb21wb25lbnQuaGVhZGluZyhcIkdhbWUgU3RhdGlzdGljczogXCIsIDIsIFwiaGVhZGVyXCIpO1xyXG4gICAgY29uc3Qgc3RhdHNBY2N1cmFjeSA9IGNvbXBvbmVudC5wKFwiQWNjdXJhY3k6IFwiLCBcImFjY3VyYWN5XCIpO1xyXG4gICAgY29uc3QgcDFBY2N1cmFjeSA9IGNvbXBvbmVudC5zcGFuKFwiLS0lXCIsIFwicDEtYWNjdXJhY3ktbWV0cmljXCIpO1xyXG4gICAgY29uc3QgcDJBY2N1cmFjeSA9IGNvbXBvbmVudC5zcGFuKFwiLS0lXCIsIFwicDItYWNjdXJhY3ktbWV0cmljXCIpO1xyXG5cclxuICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGNvbXBvbmVudC5idXR0b24oXCJQbGF5IEFnYWluXCIsIFwicGxheS1hZ2FpblwiKTtcclxuXHJcbiAgICB2aWN0b3J5TXNnLmFwcGVuZCh3aW5uZXIpO1xyXG5cclxuICAgIHN0YXRzQ29udGFpbmVyLmFwcGVuZChzdGF0c0hlYWRpbmcsXHJcbiAgICAgIHN0YXRzQWNjdXJhY3ksIHAxQWNjdXJhY3ksIHAyQWNjdXJhY3kpO1xyXG5cclxuICAgIHN1bW1hcnkuYXBwZW5kKHZpY3RvcnlNc2csIHdpbm5lciwgc3RhdHNDb250YWluZXIsIHBsYXlBZ2Fpbik7XHJcbiAgICAgIFxyXG4gICAgcmV0dXJuIHN1bW1hcnk7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCBVdGlsaXR5IGZyb20gXCIuL3V0aWxpdHlcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgY2xhc3MuIENvbnRhaW5zIHZhcmlvdXMgRE9NIGVsZW1lbnRzLlxyXG4gKiBBdXRob3I6IGRhdHJpbm9uXHJcbiAqIFZlcnNpb246IDEuNCAoV2VhdGhlcilcclxuICovXHJcblxyXG5jbGFzcyBDb21wb25lbnQge1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNjAwcHgpXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgYSBiYXNpYyBIVE1MIHNrZWxldG9uIGZvciB0aGUgd2ViIHBhZ2UsIGdlbmVyYXRpbmcgYSBoZWFkZXIsXHJcbiAgICogbWFpbiwgYW5kIHN0aWNreSBmb290ZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyp9IGhlYWRlclRpdGxlIC0gV2hhdCB0aGUgd2ViIHBhZ2UgaXMgY2FsbGVkLlxyXG4gICAqIEBwYXJhbSB7Ym9vbH0gZW1wdHlIZWFkZXIgLSBTaG91bGQgdGhlIGhlYWRlciB1c2UgYSBkZWZhdWx0IHN0cnVjdHVyZT9cclxuICAgKiBUaGUgZGVmYXVsdCBzdHJ1Y3R1cmUgbG9va3MgbGlrZSBbIExvZ28gfCB8IHwgfCBOYXZpZ2F0aW9uIExpbmtzXVxyXG4gICAqIEByZXR1cm5zIC0gQW4gYXJyYXkgY29udGFpbmluZyByZWZlcmVuY2VzIHRvIHRoZSBnZW5lcmF0ZWQgaGVhZGVyLCBtYWluLCBhbmQgZm9vdGVyLlxyXG4gICAqL1xyXG4gIGluaXRpYWxpemVTdHJ1Y3R1cmUoXHJcbiAgICBoZWFkZXJUaXRsZSxcclxuICAgIGVtcHR5SGVhZGVyID0gZmFsc2UsXHJcbiAgICBjcmVhdGVNb250aCxcclxuICAgIGdpdGh1YkxpbmtcclxuICApIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgbWFpbldyYXBwZXIgPSB0aGlzLmRpdihcImNvbnRlbnRcIik7XHJcbiAgICBsZXQgaGVhZGVyO1xyXG4gICAgaWYgKGVtcHR5SGVhZGVyKSB7XHJcbiAgICAgIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIgPSB0aGlzLmhlYWRlcihoZWFkZXJUaXRsZSk7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IHRoaXMuZm9vdGVyKGNyZWF0ZU1vbnRoLCBnaXRodWJMaW5rKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG4gICAgbWFpbldyYXBwZXIuYXBwZW5kKGhlYWRlciwgbWFpbik7XHJcbiAgICBib2R5LmFwcGVuZChtYWluV3JhcHBlciwgZm9vdGVyKTtcclxuXHJcbiAgICByZXR1cm4gW2hlYWRlciwgbWFpbiwgZm9vdGVyXTtcclxuICB9XHJcblxyXG4gIGNvbnRlbnQoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyKHRpdGxlKSB7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIGxldCB0aXRsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICAgIG1lbnVCdXR0b24uaWQgPSBcIm1lbnUtYnV0dG9uXCI7XHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1iYXJzXCIsIFwibm8tZGlzcGxheVwiKTtcclxuXHJcbiAgICB0aGlzLm1xbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLm1hdGNoZXMpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGl0IGJpZ2dlciB0aGFuIHRoZSBxdWVyeSBydWxlLlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluLW91dFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVudSBwcmVzc2VkLlwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2xpZGUtaW4tb3V0XCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICAvLyBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpbWd9KWA7XHJcblxyXG4gICAgdGl0bGVFbGVtLmlkID0gXCJwYWdlLXRpdGxlXCI7XHJcbiAgICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICB0aXRsZUVsZW0uaW5zZXJ0QmVmb3JlKG1lbnVCdXR0b24sIHRpdGxlRWxlbS5maXJzdENoaWxkKTtcclxuICAgIGhlYWRlci5hcHBlbmQodGl0bGVFbGVtKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgbmF2YmFyKC4uLmxpbmtzKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBuYXYuaWQgPSBcIm5hdmJhclwiO1xyXG4gICAgbGlua0NvbnRhaW5lci5pZCA9IFwibmF2YmFyLWJ1dHRvbnMtY29udGFpbmVyXCI7XHJcblxyXG4gICAgZm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG4gICAgICBjb25zdCBsaW5rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBjb25zdCBsaW5rQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItYnV0dG9uXCIpO1xyXG5cclxuICAgICAgbGlua0FuY2hvci5pZCA9IGBuYXZsaW5rLSR7bGluay5yZXBsYWNlKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICBsaW5rQW5jaG9yLnRleHRDb250ZW50ID0gbGluaztcclxuICAgICAgbGlua0FuY2hvci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuXHJcbiAgICAgIGxpbmtCdXR0b24uYXBwZW5kKGxpbmtBbmNob3IpO1xyXG4gICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZChsaW5rQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXYuYXBwZW5kKGxpbmtDb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBuYXY7XHJcbiAgfVxyXG5cclxuICBiYW5uZXIodGV4dCwgaW1nKSB7XHJcbiAgICBsZXQgYmFubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICAgIGxldCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuXHJcbiAgICBiYW5uZXJDb250YWluZXIuaWQgPSBcImJhbm5lclwiO1xyXG4gICAgYmFubmVyLmlkID0gXCJiYW5uZXItaW1hZ2VcIjtcclxuICAgIGNhcHRpb24uaWQgPSBcImJhbm5lci1jYXB0aW9uXCI7XHJcblxyXG4gICAgYmFubmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWd9KWA7XHJcblxyXG4gICAgY2FwdGlvbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgYmFubmVyQ29udGFpbmVyLmFwcGVuZChiYW5uZXIsIGNhcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBiYW5uZXJDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBmb290ZXIoY3JlYXRlTW9udGgsIGdpdGh1YkxpbmspIHtcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcblxyXG4gICAgbGV0IHRleHQgPSBgQ3JlYXRlZCBpbiAke2NyZWF0ZU1vbnRofSAyMDIxLiBPZGluIFByb2plY3QgeCBEYW4gVC5gO1xyXG4gICAgbGV0IGdpdGh1YkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGxldCBnaEljb24gPSB0aGlzLmZhSWNvbihcImZhYlwiLCBcImZhLWdpdGh1Yi1zcXVhcmVcIiwgXCJpY29uXCIpO1xyXG5cclxuICAgIGdpdGh1YkVsZW0uYXBwZW5kKGdoSWNvbik7XHJcbiAgICBnaXRodWJFbGVtLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItZ2l0aHViLWljb25cIik7XHJcbiAgICBnaXRodWJFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgZ2l0aHViTGluayk7XHJcbiAgICBnaXRodWJFbGVtLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICAgIGdpdGh1YkVsZW0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHAuYXBwZW5kKGdpdGh1YkVsZW0pO1xyXG4gICAgZm9vdGVyLmFwcGVuZChwKTtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCBsYXJnZXIsIGVtYm9sZGVuZWQsIHRleHQsXHJcbiAgICogc2ltaWxhciB0byBhIHB1bGwgcXVvdGUgaW4gYSBtYWdhemluZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBtc2cge3N0cmluZ30gVGV4dCB0byBpbmNsdWRlIGluIHRoZSBibG9jayBxdW90ZVxyXG4gICAqL1xyXG4gIHB1bGxxdW90ZShtc2cpIHtcclxuICAgIGxldCBwdWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xyXG4gICAgcHVsbC50ZXh0Q29udGVudCA9IG1zZztcclxuXHJcbiAgICBwdWxsLmNsYXNzTGlzdC5hZGQoXCJwdWxsLXF1b3RlXCIpO1xyXG5cclxuICAgIHJldHVybiBwdWxsO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbihpZCkge1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIGVsZW1lbnQuaWQgPSBpZDtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdGV4dCBoZWFkaW5nIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyp9IHRleHQgLSBUaGUgbGFiZWwgZm9yIHRoZSBoZWFkZXIuXHJcbiAgICogQHBhcmFtIHsqfSBsZXZlbCAtIFRoZSBsZXZlbCBvZiBoZWFkZXIuXHJcbiAgICovXHJcbiAgaGVhZGluZyh0ZXh0LCBsZXZlbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAobGV2ZWwgPCAxIHx8IGxldmVsID4gNikge1xyXG4gICAgICB0aHJvdyBFcnJvcihcIkhlYWRpbmcgbGV2ZWxzIGNhbiBvbmx5IGJlIGJldHdlZW4gMSB0byA2IVwiKTtcclxuICAgIH1cclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoJHtsZXZlbH1gKTtcclxuXHJcbiAgICBpZiAoY2xhc3NOYW1lLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgcCh0ZXh0LCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpZiAoY2xhc3NOYW1lLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIHAuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBwO1xyXG4gIH1cclxuXHJcbiAgYSh0ZXh0LCBsaW5rLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBpZiAoY2xhc3NOYW1lLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGEuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGEudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgYS5ocmVmID0gbGluaztcclxuICAgIGEudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuXHJcbiAgICByZXR1cm4gYTtcclxuICB9XHJcblxyXG4gIGltZyh1cmwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG5cclxuICAgIHJldHVybiBpbWFnZTtcclxuICB9XHJcblxyXG4gIGRpdiguLi5jbGFzc05hbWVzKSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlmIChjbGFzc05hbWVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGl2O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uKGxhYmVsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICBidG4udGV4dENvbnRlbnQgPSBsYWJlbDtcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYSBiYXNpYyB0YWJsZSB3aXRoIHNpbmdsZS1jZWxsIGNvbHVtbnMgYW5kIHJvd3MsIGJhc2VkIG9uIHRoZSBpbXBvcnRlZCBmaWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtjc3Z9IGRhdGEgLSBEYXRhIHRvIHR1cm4gaW50byBhIHRhYmxlLiBQbGVhc2UgdXNlIHdlYnBhY2sgdG8gaW1wb3J0IC5jc3YgZmlsZXMuXHJcbiAgICovXHJcbiAgdGFibGUoaWQgPSBcIlwiLCBkYXRhKSB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0YWJsZS5pZCA9IGlkO1xyXG5cclxuICAgIC8vIEdlbmVyYXRlIGEgdGFibGUgaGVhZGVyIHJvdy5cclxuICAgIGxldCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGxldCB0YWJsZUhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBjb2wgb2YgT2JqZWN0LmtleXMoZGF0YVswXSkpIHtcclxuICAgICAgbGV0IGNvbENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgIGNvbENlbGwudGV4dENvbnRlbnQgPSBjb2w7XHJcblxyXG4gICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmQoY29sQ2VsbCk7XHJcbiAgICB9XHJcbiAgICB0YWJsZUhlYWRlci5hcHBlbmQodGFibGVIZWFkZXJSb3cpO1xyXG5cclxuICAgIHRhYmxlLmFwcGVuZCh0YWJsZUhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgLy8gR2VuZXJhdGUgdGFibGUgcm93cy5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgZm9yIChsZXQgcHJvcCBpbiBkYXRhW2ldKSB7XHJcbiAgICAgICAgbGV0IHRjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cclxuICAgICAgICB0Y2VsbC50ZXh0Q29udGVudCA9IGRhdGFbaV1bcHJvcF07XHJcbiAgICAgICAgdHJvdy5hcHBlbmQodGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJsZUJvZHkuYXBwZW5kKHRyb3cpO1xyXG4gICAgfVxyXG4gICAgdGFibGUuYXBwZW5kKHRhYmxlQm9keSk7XHJcblxyXG4gICAgcmV0dXJuIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZm9udCBhd2Vzb21lIGljb24uXHJcbiAgICovXHJcbiAgZmFJY29uKGNhdGVnb3J5LCBuYW1lLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBmYXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBmYXNJY29uLmNsYXNzTGlzdC5hZGQoY2F0ZWdvcnksIG5hbWUpO1xyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICBmYXNJY29uLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFzSWNvbjtcclxuICB9XHJcblxyXG4gIHNwYW4odGV4dENvbnRlbnQgPSBudWxsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBpZiAoY2xhc3NOYW1lLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuXHJcbiAgICByZXR1cm4gc3BhbjtcclxuICB9XHJcblxyXG4gIGZvcm1JbnB1dChsYWJlbFRleHQsIHR5cGUsIGlucHV0SWQsIG5hbWUpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LmlkID0gaW5wdXRJZDtcclxuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xyXG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgaW5wdXRdO1xyXG4gIH1cclxuXHJcbiAgZHJvcGRvd24obGFiZWxUZXh0LCBuYW1lLCBpbnB1dElkLCAuLi52YWx1ZXMpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXRJZCk7XHJcblxyXG4gICAgZm9yIChsZXQgdmFsIG9mIHZhbHVlcykge1xyXG4gICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBlbnRyeS52YWx1ZSA9IHZhbDtcclxuICAgICAgaWYgKGlzTmFOKHZhbCkgJiYgdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gdmFsWzBdLnRvVXBwZXJDYXNlKCkgKyB2YWwuc2xpY2UoMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSB2YWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGVjdC5hcHBlbmQoZW50cnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIHNlbGVjdF07XHJcbiAgfVxyXG5cclxuICB0ZXh0QXJlYShsYWJlbFRleHQsIG5hbWUsIGlucHV0SWQpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRhLmlkID0gaW5wdXRJZDtcclxuICAgIHRhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgdGFdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgY29uZmlybSBtb2RhbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gY2xhc3NOYW1lIC0gQ2xhc3NlcyB0aGUgbW9kYWwgc2hvdWxkIGJlbG9uZyB0by5cclxuICAgKiBAcGFyYW0geyp9IHRpdGxlIC0gVGhlIHRpdGxlIGFwcGVhcmluZyBvbiB0aGUgbW9kYWwuXHJcbiAgICogQHBhcmFtIHsqfSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgYXBwZWFyaW5nIG9uIHRoZSBtb2RhbC5cclxuICAgKiBAcGFyYW0geyp9IHBvc2l0aXZlQnV0dG9uTGFiZWwgLSBUZXh0IGZvciB0aGUgT0sgYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gbmVnYXRpdmVCdXR0b25MYWJlbCAtIFRleHQgZm9yIHRoZSBjYW5jZWwgYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gcG9zaXRpdmVDYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHJ1biBpZiBPSyBpcyBwcmVzc2VkLlxyXG4gICAqIEBwYXJhbSB7Kn0gbmVnYXRpdmVDYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHJ1biBpZiBjYW5jZWwgaXMgcHJlc3NlZC4gJ251bGwnIGJ5XHJcbiAgICogZGVmYXVsdCwgd2hpY2ggdGhlbiBqdXN0IGNsb3NlcyB0aGUgbW9kYWwuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyAtIFJldHVybnMgdGhlIGdlbmVyYXRlZCBtb2RhbCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGNvbmZpcm1Nb2RhbChcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRpdGxlLFxyXG4gICAgbWVzc2FnZSxcclxuICAgIHBvc2l0aXZlQnV0dG9uTGFiZWwsXHJcbiAgICBuZWdhdGl2ZUJ1dHRvbkxhYmVsLFxyXG4gICAgcG9zaXRpdmVDYWxsYmFjayxcclxuICAgIG5lZ2F0aXZlQ2FsbGJhY2sgPSBudWxsXHJcbiAgKSB7XHJcbiAgICBsZXQgbW9kYWxXcmFwcGVyID0gdGhpcy5kaXYoKTtcclxuICAgIG1vZGFsV3JhcHBlci5pZCA9IFwicHJvbXB0LXdyYXBwZXJcIjtcclxuICAgIGxldCBtb2RhbCA9IHRoaXMuZGl2KGNsYXNzTmFtZSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVIZWFkZXIgPSB0aGlzLmhlYWRpbmcodGl0bGUsIDEsIFwibW9kYWwtaGVhZGVyXCIpO1xyXG4gICAgY29uc3QgbWVzc2FnZVBhcmFncmFwaCA9IHRoaXMucGFyYWdyYXBoKG1lc3NhZ2UsIFwibW9kYWwtZGlhbG9nXCIpO1xyXG4gICAgY29uc3QgcG9zaXRpdmVCdXR0b24gPSB0aGlzLmJ1dHRvbihwb3NpdGl2ZUJ1dHRvbkxhYmVsLCBcIm1vZGFsLWNvbmZpcm1cIik7XHJcbiAgICBjb25zdCBuZWdhdGl2ZUJ1dHRvbiA9IHRoaXMuYnV0dG9uKG5lZ2F0aXZlQnV0dG9uTGFiZWwsIFwibW9kYWwtY2FuY2VsXCIpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvblNlY3Rpb24gPSB0aGlzLmRpdihcIm1vZGFsLWJ1dHRvbi1hcmVhXCIpO1xyXG5cclxuICAgIGlmIChuZWdhdGl2ZUNhbGxiYWNrID09PSBudWxsKSB7XHJcbiAgICAgIG5lZ2F0aXZlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOZWdhdGl2ZSBwcmVzc2VkLlwiKTtcclxuICAgICAgICBtb2RhbFdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9zaXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvc2l0aXZlQ2FsbGJhY2spO1xyXG4gICAgcG9zaXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIHBvc2l0aXZlQ2FsbGJhY2soZSk7XHJcbiAgICAgIG1vZGFsV3JhcHBlci5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgbmVnYXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5lZ2F0aXZlQ2FsbGJhY2spO1xyXG5cclxuICAgIGJ1dHRvblNlY3Rpb24uYXBwZW5kKHBvc2l0aXZlQnV0dG9uLCBuZWdhdGl2ZUJ1dHRvbik7XHJcbiAgICBtb2RhbC5hcHBlbmQodGl0bGVIZWFkZXIsIG1lc3NhZ2VQYXJhZ3JhcGgsIGJ1dHRvblNlY3Rpb24pO1xyXG4gICAgbW9kYWxXcmFwcGVyLmFwcGVuZChtb2RhbCk7XHJcblxyXG4gICAgLy8gc3R5bGluZyBtb3ZlZCB0byAuY3NzIHBhZ2UuXHJcblxyXG4gICAgcmV0dXJuIG1vZGFsV3JhcHBlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXkgYSBicmllZiwgdW5vYnRydXNpdmUgcG9wLXVwIG1lc3NhZ2UgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxyXG4gICAqIEBwYXJhbSB7Kn0gdGV4dENvbnRlbnQgLSBUaGUgdGV4dCB0aGUgbWVzc2FnZSBzaG91bGQgZGlzcGxheS5cclxuICAgKiBAcGFyYW0geyp9IGR1cmF0aW9uIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBtZXNzYWdlIGluIHNlY29uZHMuXHJcbiAgICovXHJcbiAgdG9hc3QodGV4dENvbnRlbnQsIGR1cmF0aW9uKSB7XHJcbiAgICBsZXQgdG9hc3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHRvYXN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XHJcbiAgICB0b2FzdEJveC5jbGFzc0xpc3QuYWRkKFwidG9hc3RcIik7XHJcbiAgICB0b2FzdE1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgIHRvYXN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidG9hc3QtbWVzc2FnZVwiKTtcclxuXHJcbiAgICB0b2FzdEJveC5hcHBlbmQodG9hc3RNZXNzYWdlKTtcclxuXHJcbiAgICBsZXQgdG9hc3RCb3hDc3MgPSBcInBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAxMHZoO1wiO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gXCJ3aWR0aDogMTAwdnc7XCI7XHJcbiAgICB0b2FzdEJveENzcyArPSBgYW5pbWF0aW9uOiBmYWRlLWluLW91dCAke2R1cmF0aW9ufXM7YDtcclxuICAgIHRvYXN0Qm94Q3NzICs9IFwiei1pbmRleDogOTk5OTtcIjtcclxuXHJcbiAgICBsZXQgdG9hc3RNZXNzYWdlQ3NzID1cclxuICAgICAgXCJtYXJnaW46IDAgYXV0bzsgd2lkdGg6IDMwMHB4OyBkaXNwbGF5OiBibG9jazsgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcIjtcclxuICAgIHRvYXN0TWVzc2FnZUNzcyArPVxyXG4gICAgICBcInRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDVweDtcIjtcclxuICAgIHRvYXN0TWVzc2FnZUNzcyArPSBcImNvbG9yOiB3aGl0ZTtcIjtcclxuXHJcbiAgICB0b2FzdEJveC5zdHlsZS5jc3NUZXh0ID0gdG9hc3RCb3hDc3M7XHJcbiAgICB0b2FzdE1lc3NhZ2Uuc3R5bGUuY3NzVGV4dCA9IHRvYXN0TWVzc2FnZUNzcztcclxuXHJcbiAgICB0b2FzdEJveC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcclxuICAgICAgdG9hc3RCb3gucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0b2FzdEJveCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBzZWFyY2ggZmllbGQgd2l0aCBhIHNlYXJjaCBidXR0b24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYWNlaG9sZGVyIC0gQWR2aWNlIHRvIGdpdmUgaW4gc2VhcmNoIGZpZWxkLlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHNlYXJjaChwbGFjZWhvbGRlciA9IFwiU2VhcmNoXCIpIHtcclxuICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJzZWFyY2gtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoRmllbGRXcmFwcGVyID0gdGhpcy5kaXYoXCJzZWFyY2gtZmllbGQtd3JhcHBlclwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEZpZWxkID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJzZWFyY2gtZmllbGRcIik7XHJcbiAgICBjb25zdCBzZWFyY2hJY29uID0gdGhpcy5mYUljb24oXCJmYXNcIiwgXCJmYS1zZWFyY2hcIik7XHJcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSB0aGlzLmJ1dHRvbihcIlwiLCBcInNlYXJjaFwiKTtcclxuXHJcbiAgICBzZWFyY2hDb250YWluZXIuc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xyXG4gICAgc2VhcmNoRmllbGRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgc2VhcmNoRmllbGQudHlwZSA9IFwic2VhcmNoXCI7XHJcbiAgICBzZWFyY2hGaWVsZC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XHJcbiAgICBzZWFyY2hGaWVsZC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgIHNlYXJjaEJ1dHRvbi5hcHBlbmQoc2VhcmNoSWNvbik7XHJcbiAgICBzZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuXHJcbiAgICBzZWFyY2hGaWVsZFdyYXBwZXIuYXBwZW5kKHNlYXJjaEZpZWxkKTtcclxuICAgIHNlYXJjaENvbnRhaW5lci5hcHBlbmQoc2VhcmNoRmllbGRXcmFwcGVyLCBzZWFyY2hCdXR0b24pO1xyXG4gICAgcmV0dXJuIHNlYXJjaENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHNlYXJjaCBmaWVsZCBmb3IgbG9jYXRpb25zLCBzbyBpdCBpbmNsdWRlcyBhIHNlYXJjaCBmaWVsZCB3aXRoIFxyXG4gICAqIGEgbG9jYXRpb24gYnV0dG9uLlxyXG4gICAqL1xyXG4gIGdlb3NlYXJjaChwbGFjZWhvbGRlcj1cIlwiKSB7XHJcbiAgICBjb25zdCBzZWFyY2hFbGVtID0gdGhpcy5zZWFyY2gocGxhY2Vob2xkZXIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25CdXR0b24gPSB0aGlzLmJ1dHRvbihcIlwiLCBcImxvY2F0aW9uXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25JY29uID0gdGhpcy5mYUljb24oXCJmYXNcIiwgXCJmYS1tYXAtbWFya2VyLWFsdFwiKVxyXG5cclxuICAgIGxvY2F0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBsb2NhdGlvbkJ1dHRvbi5hcHBlbmQobG9jYXRpb25JY29uKTtcclxuICAgIGxvY2F0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVdGlsaXR5LmdldEdlb2xvY2F0aW9uKTtcclxuICAgIHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIikuYmVmb3JlKGxvY2F0aW9uQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gc2VhcmNoRWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0b29sdGlwLWVzcXVlIG1lc3NhZ2Ugd2hpY2ggaG92ZXJzIGJlbG93LCByZWxhdGl2ZSB0byBhbiBlbGVtZW50J3MgcG9zaXRpb24sIFxyXG4gICAqIGZvciBhIHByb3ZpZGVkIGR1cmF0aW9uLiBPbmx5IGF0dGFjaCB0byByZWxhdGl2ZWx5LXBvc2l0aW9uZWQgZWxlbWVudHMuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gKGVsZW0pIC0gUG9zaXRpb25lZCBlbGVtZW50IHRvIGF0dGFjaCB0by4gXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IChtc2cpIC0gTWVzc2FnZSB0byBkaXNwbGF5LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAocykgLSBOdW1iZXIgb2Ygc2Vjb25kcyB0byBwZXJzaXN0IG1lc3NhZ2UuIDAgZm9yIHBlcnNpc3RlbnRcclxuICAgKiB1bnRpbCB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSB0b29sdGlwLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzbWlzc09uRXh0ZXJuYWxDbGljayAtIFNob3VsZCB0aGUgdG9vbHRpcCBiZSBkaXNtaXNzZWQgYnlcclxuICAgKiBjbGlja2luZyBvdXRzaWRlIG9mIHRoZSBlbGVtZW50PyBUcnVlIGJ5IGRlZmF1bHQuXHJcbiAgICovXHJcbiAgdG9vbHRpcChlbGVtLCBtc2csIHMsIGRpc21pc3NPbkV4dGVybmFsQ2xpY2sgPSB0cnVlKSB7XHJcbiAgICBjb25zdCB0b29sdGlwQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcInRvb2x0aXBcIik7XHJcbiAgICBmb3IgKGxldCBtc2dTZWdtZW50IG9mIG1zZy5zcGxpdChcIlxcblwiKSkge1xyXG4gICAgICBjb25zdCB0b29sdGlwTXNnID0gY29tcG9uZW50LnAobXNnU2VnbWVudC50cmltKCksIFwidG9vbHRpcC1tc2dcIik7XHJcbiAgICAgIHRvb2x0aXBDb250YWluZXIuYXBwZW5kKHRvb2x0aXBNc2cpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvb2x0aXBDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246IGFic29sdXRlOyB0b3A6IDEwMCU7IHdpZHRoOiBmaXQtY29udGVudFwiO1xyXG4gICAgLy8gdGhpcyBlbnN1cmVzIHRoYXQgdGhlIGxhdGVzdCB0b29sdGlwcyBhbHdheXMgYXBwZWFyIG9uIHRoZSB0b3AuXHJcbiAgICB0b29sdGlwQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9IDEwICsgMTAgKiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b29sdGlwXCIpLmxlbmd0aCk7XHJcblxyXG4gICAgZWxlbS5hcHBlbmQodG9vbHRpcENvbnRhaW5lcik7XHJcblxyXG5cclxuICAgIGNvbnN0IHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGlzbWlzc09uRXh0ZXJuYWxDbGljaykge1xyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ICE9PSB0b29sdGlwQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNsaWNrZWQ7IHJlbW92aW5nIHRvb2x0aXBcIik7XHJcbiAgICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKTtcclxuICAgIH0pXHJcblxyXG4gICAgcC50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKHMgIT09IDApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIudG9vbHRpcFwiKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWVyIGV4cGlyZWQ7IHJlbW92aW5nIHRvb2x0aXBcIik7XHJcbiAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgcyAqIDEwMDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjaCBhIGxvYWRpbmcgbWVzc2FnZSB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWxlbSAtIEVsZW1lbnQgdG8gYXR0YWNoIGxvYWRpbmcgbWVzc2FnZSB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbXNnIC0gTWVzc2FnZSB0byBwbGF5OyBkZWZhdWx0IGlzIFwibG9hZGluZ1wiLlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIGxvYWRpbmdNZXNzYWdlKHBhcmVudEVsZW0sIG1zZz1cIkxvYWRpbmdcIikge1xyXG4gICAgY29uc3QgbG9hZGluZ0Jhc2UgPSBjb21wb25lbnQucChtc2csIFwibG9hZGluZy10ZXh0XCIpO1xyXG4gICAgY29uc3QgbG9hZGluZ0RvdHMgPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwibG9hZGluZy1kb3RzXCIpO1xyXG5cclxuICAgIGxvYWRpbmdCYXNlLmFwcGVuZChsb2FkaW5nRG90cyk7XHJcbiAgICBwYXJlbnRFbGVtLmFwcGVuZChsb2FkaW5nQmFzZSk7XHJcblxyXG4gICAgY29uc3QgbG9hZGluZ0FuaW1hdGlvbiA9IHtcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIGxvYWRpbmdUZXh0QmFzZTogcGFyZW50RWxlbS5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctdGV4dFwiKSxcclxuICAgICAgbG9hZGluZ1RleHREb3RzOiBwYXJlbnRFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1kb3RzXCIpLFxyXG4gICAgICAvKipcclxuICAgICAgICogU2V0cyBhbiBpbnRlcnZhbCwgdXNpbmcgaXQgdG8gcGxheSBhIHNpbXBsZSBhbmltYXRpb24uXHJcbiAgICAgICAqL1xyXG4gICAgICBwbGF5KCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLnRleHRDb250ZW50ID0gbXNnO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1vcGFjaXR5XCIpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHREb3RzLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCAhPT0gXCIuLi5cIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCArPSBcIi5cIjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1RleHREb3RzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCA3NTApO1xyXG4gICAgICB9LFxyXG4gICAgICBzdG9wKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dEJhc2UuY2xhc3NMaXN0LmFkZChcIm5vLW9wYWNpdHlcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dEJhc2UucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGxvYWRpbmdBbmltYXRpb247XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcclxuXHJcbiAgZ3JpZDtcclxuICBzaXplO1xyXG4gIHNoaXBzO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2l6ZSA9IDEwO1xyXG4gICAgdGhpcy5ncmlkID0gW107XHJcbiAgICB0aGlzLnNoaXBzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xyXG4gICAgICB0aGlzLmdyaWRbaV0gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNpemU7IGorKykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFtpXVtqXSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW5kIHBsYWNlcyBhIGdpdmVuIHNoaXAgYmFzZWQgb24gdGhlIGNvb3JkaW5hdGVzXHJcbiAgICogYXNzaWduZWQgdG8gdGhlIHNoaXAuIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSB0aGUgZ2l2ZW4gbGVuZ3RoIG9mIHRoZSBzaGlwLiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gdGhlIHJvdyB0byBwbGFjZSB0aGUgc2hpcC4gMC1iYXNlZCBjb29yZGluYXRlcy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIC0gdGhlIGNvbHVtbiB0byBwbGFjZSB0aGUgc2hpcC4gMC1iYXNlZCBjb29yZGluYXRlcy5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIC0gUGxhY2UgdGhlIHNoaXAgaG9yaXpvbnRhbGx5P1xyXG4gICAqIEByZXR1cm4ge1NoaXB9IC0gVGhlIHNoaXAgdGhhdCB3YXMgcGxhY2VkLCBvciBudWxsIGlmIHRoZSBzaGlwIGZhaWxlZFxyXG4gICAqIHRvIGJlIHBsYWNlZC5cclxuICAgKi9cclxuICBwbGFjZVNoaXAobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwpIHtcclxuICAgIGlmIChyb3cgPCAwIHx8IGNvbCA8IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHBsYWNlIHNoaXAgb24gbmVnYXRpdmUgY29vcmRpbmF0ZXMuXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIG51bGwgaWYgb3V0IG9mIGJvdW5kc1xyXG4gICAgaWYgKHZlcnRpY2FsKSB7IC8vIHZlcnRpY2FsIG91dCBvZiBib3VuZHMgaW52b2x2ZXMgcm93LlxyXG4gICAgICBpZiAocm93ICsgbGVuZ3RoID4gdGhpcy5ncmlkLmxlbmd0aCB8fCBjb2wgPiB0aGlzLmdyaWQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjb2wgKyBsZW5ndGggPiB0aGlzLmdyaWQubGVuZ3RoIHx8IHJvdyA+IHRoaXMuZ3JpZC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2hlY2sgdG8gc2VlIHRoYXQgdGhlIGdpdmVuIHJvdyBhbmQgY29sICsgbGVuZ3RoIGFyZSBub3QgYWxyZWFkeSBvY2N1cGllZC5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgKHJvdyArIGxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmdyaWRbaV1bY29sXSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gY29sOyBpIDwgKGNvbCArIGxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmdyaWRbcm93XVtpXSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb3RoZXJ3aXNlIHdlJ3JlIGdvb2QgdG8gcGxhY2UgYSBzaGlwLlxyXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMuc2hpcHMubGVuZ3RoO1xyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgKHJvdyArIHNoaXAubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkW2ldW2NvbF0gPSBpZDtcclxuICAgICAgICBzaGlwLnN0YXR1c1tgJHtpfSwke2NvbH1gXSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gY29sOyBpIDwgKGNvbCArIHNoaXAubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkW3Jvd11baV0gPSBpZDtcclxuICAgICAgICBzaGlwLnN0YXR1c1tgJHtyb3d9LCR7aX1gXSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xyXG5cclxuICAgIHJldHVybiBzaGlwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGV0IHRoZSBnYW1lYm9hcmQgcmVjZWl2ZSBhbiBhdHRhY2sgYXQgdGhlIGdpdmVuIHJvdyBhbmQgY29sdW1uLiBcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2wgXHJcbiAgICogQHJldHVybnMge251bWJlcn0gc3RhdHVzIGNvZGUgYmFzZWQgb24gdGhlIGhpdC4gMSBpZiBhIGhpdCB3YXMgc3VjY2Vzc2Z1bCwgMFxyXG4gICAqIGlmIHRoZSBoaXQgbWlzc2VkLCBhbmQgLTEgaWYgdGhlIGFyZWEgd2FzIGFscmVhZHkgaGl0LiBcclxuICAgKi9cclxuICByZWNlaXZlQXR0YWNrKHJvdywgY29sKSB7XHJcbiAgICBjb25zb2xlLmxvZyh7cm93LCBjb2x9KTtcclxuICAgIGlmIChpc05hTihwYXJzZUludChyb3cpKSB8fCBjb2wgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwcm92aWRlIHJvdyBhbmQgY29sIGNvb3JkaW5hdGVzIGFzIGEgbnVtYmVyLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2hpcElkID0gdGhpcy5ncmlkW3Jvd11bY29sXTtcclxuXHJcbiAgICBpZiAoc2hpcElkID09PSBcInhcIiB8fCBzaGlwSWQgPT09IFwib1wiKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH0gZWxzZSBpZiAoc2hpcElkID09PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF0gPSBcIm9cIjtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhzaGlwSWQpO1xyXG4gICAgICB0aGlzLmdyaWRbcm93XVtjb2xdID0gXCJ4XCI7XHJcbiAgICAgIHRoaXMuc2hpcHNbc2hpcElkXS5oaXQocm93LCBjb2wpO1xyXG5cclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRHcmlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ3JpZDtcclxuICB9XHJcblxyXG4gIGlzU2hpcFN1bmsoaW5kZXgpIHtcclxuICAgIHJldHVybiB0aGlzLnNoaXBzW2luZGV4XS5pc1N1bmsoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhdmUgYWxsIHNoaXBzIGJlZW4gc3VuayBvbiB0aGUgZ2FtZWJvYXJkP1xyXG4gICAqL1xyXG4gIGFsbFNoaXBzU3VuaygpIHtcclxuICAgIGxldCBzdGF0dXMgPSB0cnVlO1xyXG4gICAgdGhpcy5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgICBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHN0YXR1cztcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQmF0dGxlc2hpcEVsZW1lbnRzIH0gZnJvbSBcIi4vQmF0dGxlc2hpcEVsZW1lbnRcIjtcclxuaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IFBsYXllciwgeyBDUFVfU1RBVEUgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBNYW5hZ2VzIGEgZ2FtZSBzZXNzaW9uIGZvciBiYXR0bGVzaGlwLiBLZWVwcyB0cmFjayBvZiBwbGF5ZXJzLlxyXG4gKiBDYW4gc3RhcnQsIGVuZCwgYW5kIHJlc2V0IHRoZSBnYW1lLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBHQU1FX1NUQVRFID0ge1xyXG4gIHAxdHVybjogXCJQbGF5ZXIgMSdzIHR1cm5cIixcclxuICBwMnR1cm46IFwiUGxheWVyIDIncyB0dXJuXCIsXHJcbiAgZW5kZWQ6IFwiR2FtZSBPdmVyLlwiLFxyXG4gIHAxdmljdG9yeTogXCJQbGF5ZXIgMSB3aW5zLlwiLFxyXG4gIHAydmljdG9yeTogXCJQbGF5ZXIgMiB3aW5zLlwiLFxyXG4gIHJlc3RhcnQ6IFwiUmVzdGFydGluZyBnYW1lLi4uXCIsXHJcbiAgcGxheWluZzogXCJHYW1lIHN0YXJ0IVwiLFxyXG4gIHdlbGNvbWVQcm9tcHQ6IFwiV2VsY29tZSwgQ29tbWFuZGVyLlwiLFxyXG4gIHJlcGxheVByb21wdDogXCJQbGFjZSB5b3VyIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQuXCIsXHJcbiAgY3B1U2hpcFN1bms6IFwiQSBzaGlwIG9mIHRoZSBDUFUncyB3YXMgc3VuayFcIixcclxuICBjcHVTaGlwSGl0OiBcIkEgc2hpcCBvZiB0aGUgQ1BVJ3Mgd2FzIHN1bmshXCIsXHJcbiAgcGxheWVyU2hpcFN1bms6IFwiQSBzaGlwIG9mIHRoZSBwbGF5ZXIncyB3YXMgc3VuayFcIixcclxuICBwbGF5ZXJTaGlwSGl0OiBcIkEgc2hpcCBvZiB0aGUgcGxheWVyJ3Mgd2FzIGhpdCEhXCIsXHJcbiAgYWxyZWFkeUF0dGFja2VkOiBcIlRoaXMgY2VsbCB3YXMgYWxyZWFkeSBhdHRhY2tlZFwiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU1VCRElBTE9HUyA9IHtcclxuICBwMXR1cm46IFwiQ2xpY2sgb24gdGhlIG9wcG9uZW50IGdhbWVib2FyZCB0byBmaXJlIGEgc2hvdC5cIixcclxuICBwMnR1cm46IFwiVGhpbmtpbmcuLi5cIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIge1xyXG4gIFxyXG4gIHN0YXRpYyAjaW5zdGFuY2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwbGF5ZXJzIGludm9sdmVkIGluIHRoZSBnYW1lLlxyXG4gICAqL1xyXG4gIHBsYXllcnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIElzIGl0IHBsYXllciAxJ3MgdHVybj8gXHJcbiAgICovXHJcbiAgI3AxdHVybjtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgb2YgdGhlIGxlbmd0aHMgb2YgZWFjaCBzaGlwIHRoYXQgdGhlIHBsYXllciB3aWxsIGhhdmUgaW4gdGhlaXIgYXJzZW5hbC5cclxuICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICovXHJcbiAgc2hpcExlbmd0aHM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhcyB0aGUgZ2FtZSBlbmRlZCB5ZXQ/XHJcbiAgICovXHJcbiAgI2dhbWVPdmVyO1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFRydWUgaWYgcGxheWVyIDEgd29uLCBmYWxzZSBpZiBwbGF5ZXIgMiB3b24uXHJcbiAgICovXHJcbiAgI2lzV2lubmVyUDE7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluc3RhbmNlIG9mIGEgQmF0dGxlc2hpcEVsZW1lbnRzIGNsYXNzIHRvIHVzZSB0byBtYW5pcHVsYXRlIHRoZSB2aWV3IG9mIHRoZSBwYWdlLlxyXG4gICAqIEB0eXBlIHtCYXR0bGVzaGlwRWxlbWVudHN9XHJcbiAgICovXHJcbiAgI3BhZ2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgZ2FtZS4gQXNzaWducyBDUFUgYXMgcGxheWVyIDIuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJbXX0gcGxheWVycyAtIEFuIGFycmF5IG9mIHRoZSBwbGF5ZXJzIGluIHRoZSBnYW1lLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcDFzdGFydCAtIFNob3VsZCBwbGF5ZXIgMSBzdGFydCBmaXJzdD8gVHJ1ZSBieSBkZWZhdWx0LlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBsYXllcjEsIHBsYXllcjIsIHAxc3RhcnQgPSB0cnVlLCBzaGlwTGVuZ3RocyA9IFsyXSkge1xyXG4gICAgaWYgKEdhbWVNYW5hZ2VyLiNpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBHYW1lTWFuYWdlci4jaW5zdGFuY2U7XHJcbiAgICB9IFxyXG5cclxuICAgIEdhbWVNYW5hZ2VyLiNpbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXIyLmNwdSA/IFtwbGF5ZXIxLCBwbGF5ZXIyXSA6IFtwbGF5ZXIyLCBwbGF5ZXIxXTtcclxuICAgIHRoaXMuI3AxdHVybiA9IHAxc3RhcnQ7XHJcbiAgICB0aGlzLnNoaXBMZW5ndGhzID0gc2hpcExlbmd0aHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgZ2FtZS4gSGFzIHRoZSBDUFUgcGxhY2Ugc2hpcHMsIGlzc3VlcyBhIHN0YXJ0IG1lc3NhZ2Ugb24gdGhlIHZpZXcsXHJcbiAgICogZGlzYWJsZXMgYWxsIGhhbmRsZXJzIG9mIGFsbCBzaGlwcywgYW5kIHRoZW4gaGFzIG9uZSBvZiB0aGUgcGxheWVycyBzZWxlY3QgYSBtb3ZlLlxyXG4gICAqIE1ha2VzIGFsbCBjZWxscyBcImF0dGFja2FibGUuXCJcclxuICAgKi9cclxuICBzdGFydEdhbWUoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRyb2xzLWFyZWEsIC5tZW51LWFyZWEsIC5wMi5nYW1lYm9hcmRcIilcclxuICAgICAgICAuZm9yRWFjaChhcmVhID0+IGFyZWEuY2xhc3NMaXN0LnRvZ2dsZShcIm5vLWRpc3BsYXlcIikpOyBcclxuXHJcbiAgICB0aGlzLnBsYXllcnNbMF0ubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDEtbmFtZVwiKS52YWx1ZTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAxLmdhbWVib2FyZCAuZ2FtZWJvYXJkLW93bmVyXCIpLnRleHRDb250ZW50ID1cclxuICAgICAgICB0aGlzLnBsYXllcnNbMF0ubmFtZSArIFwiIChZb3UpXCI7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAyLmdhbWVib2FyZCAuZ2FtZWJvYXJkLW93bmVyXCIpLnRleHRDb250ZW50ID1cclxuICAgICAgICB0aGlzLnBsYXllcnNbMV0ubmFtZTtcclxuXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lLWJ1dHRvblwiKS5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIHNoaXAub25jbGljayA9IG51bGw7XHJcbiAgICAgIHNoaXAuZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwbGFjZXMgc2hpcCBmb3IgY3B1LlxyXG4gICAgdGhpcy5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuICAgICAgaWYgKHBsYXllci5jcHUpIHtcclxuICAgICAgICB0aGlzLiNjcHVQbGFjZVNoaXBzKHBsYXllcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJlZ2lzdGVyIHNoaXBzIGZvciB0aGUgcGxheWVyLlxyXG4gICAgdGhpcy4jcGxheWVyUmVnaXN0ZXJTaGlwcygpO1xyXG5cclxuICAgIC8vIFRPRE9cclxuICAgIC8vIHJlbW92ZSB0aGlzIHByb21pc2UgY29kZSwgZWZmZWN0IGxvb2tzIGxhbWUuXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICB0aGlzLiNwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLnBsYXlpbmcpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKEdhbWVNYW5hZ2VyLiNpbnN0YW5jZS4jcDF0dXJuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKEdBTUVfU1RBVEUucDF0dXJuKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKEdBTUVfU1RBVEUucDJ0dXJuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICB9KTtcclxuICAgIH0pKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKHJlc3VsdCk7XHJcbiAgICAgIGlmICh0aGlzLiNwMXR1cm4pIHtcclxuICAgICAgICB0aGlzLiNwYWdlLnNldFN1YkRpYWxvZyhTVUJESUFMT0dTLnAxdHVybik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4jcGFnZS5zZXRTdWJEaWFsb2coU1VCRElBTE9HUy5wMnR1cm4pO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkLWFyZWFcIikuY2xhc3NMaXN0LmFkZChcImdhbWUtYWN0aXZlXCIpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGFibGVcIikuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2thYmxlXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAyLmdhbWVib2FyZCAuYXR0YWNrYWJsZVwiKS5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGYuI3BsYXlSb3VuZC5iaW5kKHRoaXMpKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBRdWVyaWVzIGJvdGggcGxheWVycycgZ2FtZWJvYXJkcyB0byBzZWUgaWYgdGhlIGdhbWUgc2hvdWxkIGJlIGVuZGVkLlxyXG4gICAqL1xyXG4gICNkZXRlcm1pbmVJZkdhbWVPdmVyKCkge1xyXG4gICAgY29uc3QgcDF2aWN0b3J5ID0gdGhpcy5wbGF5ZXJzWzFdLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKTtcclxuICAgIGNvbnN0IHAydmljdG9yeSA9IHRoaXMucGxheWVyc1swXS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCk7XHJcbiAgICBcclxuICAgIGlmIChwMXZpY3RvcnkpIHtcclxuICAgICAgdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wMXZpY3RvcnkpO1xyXG4gICAgICB0aGlzLiNpc1dpbm5lclAxID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAocDJ2aWN0b3J5KSB7XHJcbiAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUucDJ2aWN0b3J5KTtcclxuICAgICAgdGhpcy4jaXNXaW5uZXJQMSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwMXZpY3RvcnkgfHwgcDJ2aWN0b3J5KSB7XHJcbiAgICAgIHRoaXMuI2dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgdGhpcy4jZW5kR2FtZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgI2VuZEdhbWUoKSB7XHJcbiAgICAvLyByZXZlYWwgY3B1IHNoaXBzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNwdS1zaGlwLXBsYWNlZFwiKS5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjcHUtc2hpcC1yZXZlYWxcIik7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUuZW5kZWQpO1xyXG4gICAgdGhpcy4jcGFnZS5zZXRTdWJEaWFsb2coXCJcIik7XHJcbiAgICAvLyB1cGRhdGUgZ2FtZSByZXN1bHRzIGhlcmUuXHJcbiAgICBjb25zdCBzdW1tYXJ5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW1tYXJ5LWFyZWFcIik7XHJcblxyXG4gICAgc3VtbWFyeUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgIC8vIDEuIFNob3cgdGhlIHdpbm5lci5cclxuICAgIGlmICh0aGlzLiNpc1dpbm5lclAxKSB7XHJcbiAgICAgIHN1bW1hcnlDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIikudGV4dENvbnRlbnQgPSB0aGlzLnBsYXllcnNbMF0ubmFtZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1bW1hcnlDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIikudGV4dENvbnRlbnQgPSB0aGlzLnBsYXllcnNbMV0ubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAyLiBTaG93IHRoZSBhY2N1cmFjeSBtZXRyaWNzLlxyXG4gICAgY29uc3QgcDFBY2NNZXRyaWMgPSBzdW1tYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucDEtYWNjdXJhY3ktbWV0cmljXCIpO1xyXG4gICAgY29uc3QgcDJBY2NNZXRyaWMgPSBzdW1tYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucDItYWNjdXJhY3ktbWV0cmljXCIpO1xyXG5cclxuICAgIHAxQWNjTWV0cmljLnRleHRDb250ZW50ID0gdGhpcy4jY2FsY3VsYXRlQWNjdXJhY3kodGhpcy5wbGF5ZXJzWzFdKTtcclxuICAgIHAyQWNjTWV0cmljLnRleHRDb250ZW50ID0gdGhpcy4jY2FsY3VsYXRlQWNjdXJhY3kodGhpcy5wbGF5ZXJzWzBdKTtcclxuXHJcbiAgICAvLyAzLiAvLy8vW3JlbW92ZWQgZGFtYWdlIG1ldHJpY3NdXHJcbiAgICAvLyBJbnN0ZWFkIG9mIHNob3dpbmcgZGFtYWdlIHRha2VuLCB3aGVuIHRoZSBnYW1lIGlzIG92ZXIsXHJcbiAgICAvLyBqdXN0IHNob3cgdGhlIGVuZW15J3MgZ2FtZWJvYXJkLlxyXG4gICAgLy8gVE9ET1xyXG4gICAgLy8gV2hlbiBkZWJ1Z2dpbmcgaXMgY29tcGxldGUsIHRlc3Qgb3V0IGhpZGluZyBiYXR0bGVzaGlwcyBmcm9tIHRoZSB2aWV3LlxyXG4gICAgc3VtbWFyeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBsYXktYWdhaW5cIilcclxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI3Jlc2V0R2FtZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZSB0aGUgYWNjdXJhY3ksIGdpdmVuIHRoZSBwbGF5ZXIuIFVzZXMgdGhhdCdzIHBlcnNvbiBnYW1lYm9hcmRcclxuICAgKiB0byBkZXRlcm1pbmUgdGhlIGFjY3VyYWN5LlxyXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgOiB0aGUgcGVyc29uIHdobyB5b3UgYXR0YWNrZWQuXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gVG90YWwgc2hvdHMgLyBoaXRzIGFuZCB0aGUgYWNjdXJhY3kgb2YgaXQuXHJcbiAgICovXHJcbiAgI2NhbGN1bGF0ZUFjY3VyYWN5KHBsYXllcikge1xyXG4gICAgbGV0IHRvdGFsU2hvdHMgPSAwO1xyXG4gICAgbGV0IGhpdHMgPSAwO1xyXG4gICAgcGxheWVyLmdhbWVib2FyZC5ncmlkLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgcm93LmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgaWYgKGNlbGwgPT09IFwieFwiIHx8IGNlbGwgPT09IFwib1wiKSB7XHJcbiAgICAgICAgICB0b3RhbFNob3RzICs9IDE7IFxyXG4gICAgICAgICAgaWYgKGNlbGwgPT09IFwieFwiKSB7XHJcbiAgICAgICAgICAgIGhpdHMgKz0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBhY2N1cmFjeSA9IChoaXRzIC8gdG90YWxTaG90cykgKiAxMDA7XHJcbiAgICByZXR1cm4gYCR7aGl0c30vJHt0b3RhbFNob3RzfSAoJHthY2N1cmFjeS50b0ZpeGVkKDIpfSUpYDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0cyB0aGUgZ2FtZSBieTpcclxuICAgKiAtIFJlbWFya2luZyBhbGwgY2VsbHMuXHJcbiAgICogLSBSZW1vdmluZyBhbGwgc2hpcHMgZnJvbSB0aGUgZ2FtZWJvYXJkLlxyXG4gICAqIC0gUmVjcmVhdGluZyBwbGF5ZXIgaW5zdGFuY2VzLlxyXG4gICAqIC0gUmVjcmVhdGluZyBkcmFnZ2FibGUgc2hpcHMgaW4gdGhlIHNlbGVjdGlvbiBhcmVhLlxyXG4gICAqIC0gQWxsb3dpbmcgdGhlIHVzZXIgdG8gc3RhcnQgdGhlIGdhbWUgYWdhaW4uXHJcbiAgICovXHJcbiAgI3Jlc2V0R2FtZSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0YWJsZVwiKS5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY2VsbCBzZWxlY3RhYmxlXCI7XHJcbiAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpLmZvckVhY2goc2hpcCA9PiBzaGlwLnJlbW92ZSgpKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDEtbmFtZVwiKS52YWx1ZSA9IHRoaXMucGxheWVyc1swXS5uYW1lO1xyXG5cclxuICAgIHRoaXMucGxheWVyc1swXSA9IG5ldyBQbGF5ZXIodGhpcy5wbGF5ZXJzWzBdLm5hbWUsIGZhbHNlKTtcclxuICAgIHRoaXMucGxheWVyc1sxXSA9IG5ldyBQbGF5ZXIodGhpcy5wbGF5ZXJzWzFdLm5hbWUsIHRydWUpO1xyXG5cclxuICAgIHRoaXMuI3BhZ2UuZ2VuZXJhdGVEcmFnZ2FibGVTaGlwcygpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZS1idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuI2dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICB0aGlzLiNwMXR1cm4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGxheSBhIHJvdW5kIG9mIGJhdHRsZXNoaXBzLCBhbGxvd2luZyBlYWNoIHBsYXllciB0byBmaXJlLlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgOiBFdmVudDsgdXNlZCB0byBwaWNrIHVwIHRoZSBjZWxsIHRoZSB1c2VyIGNsaWNrZWQuIEFjcXVpcmVzXHJcbiAgICogY29vcmRpbmF0ZXMgZnJvbSBpdCB0byBhdHRhY2suXHJcbiAgICovXHJcbiAgI3BsYXlSb3VuZChlKSB7XHJcbiAgICBjb25zdCB0aGlua1RpbWVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTAwKSArIDgwMDtcclxuICAgIGNvbnN0IHBlcmZvcm1DUFVBdHRhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuI2NwdUZpcmVBdHRhY2soKTtcclxuICAgICAgaWYgKCF0aGlzLiNnYW1lT3Zlcikge1xyXG4gICAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUucDF0dXJuKTtcclxuICAgICAgICB0aGlzLiNwYWdlLnNldFN1YkRpYWxvZyhTVUJESUFMT0dTLnAxdHVybik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy4jcDF0dXJuICYmICF0aGlzLiNnYW1lT3Zlcikge1xyXG4gICAgICB0aGlzLiNwbGF5ZXJGaXJlQXR0YWNrKGUpO1xyXG4gICAgICBpZiAodGhpcy4jcDF0dXJuID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUucDJ0dXJuKTtcclxuICAgICAgICB0aGlzLiNwYWdlLnNldFN1YkRpYWxvZyhTVUJESUFMT0dTLnAydHVybik7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQocGVyZm9ybUNQVUF0dGFjay5iaW5kKHRoaXMpLCB0aGlua1RpbWVyKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNwbGF5ZXJSZWdpc3RlclNoaXBzKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEuZ2FtZWJvYXJkXCIpO1xyXG5cclxuICAgIGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIikuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgbGV0IG9yaWdpbkNlbGwgPSBzaGlwLnBhcmVudE5vZGU7XHJcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChvcmlnaW5DZWxsLmRhdGFzZXQucm93KTtcclxuICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KG9yaWdpbkNlbGwuZGF0YXNldC5jb2wpO1xyXG4gICAgICBsZXQgbGVuZ3RoID0gc2hpcC5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgICAgbGV0IHZlcnRpY2FsID0gc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcclxuXHJcbiAgICAgIHNlbGYucGxheWVyc1swXS5nYW1lYm9hcmQucGxhY2VTaGlwKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjayBhIHBsYXllci5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gRXZlbnQgd2hpY2ggdGhlIGhhbmRsZXIgY2FwdHVyZXMuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IGF0dGFja2VyIC0gVGhlIGF0dGFja2luZyBwbGF5ZXIuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IGF0dGFja2VkIC0gVGhlIHBsYXllciByZWNlaXZpbmcgdGhlIGF0dGFjay5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICAjcGxheWVyRmlyZUF0dGFjayhlKSB7XHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImF0dGFja2VkXCIpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBjZWxsIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQhXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvdyk7XHJcbiAgICBjb25zdCBjb2wgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb2wpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJvdywgY29sKTtcclxuICAgIGxldCByZXN1bHQgPSB0aGlzLnBsYXllcnNbMF0uYXR0YWNrKHRoaXMucGxheWVyc1sxXSwgcm93LCBjb2wpO1xyXG4gICAgc3dpdGNoKHJlc3VsdCkge1xyXG4gICAgICBjYXNlIDE6IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXQncyBhIGhpdCFcIik7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0J3MgYSBtaXNzIVwiKTtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aGlzLiNwMXR1cm4gPSBmYWxzZTsgLy8gQ1BVIG11c3QgbWFrZSBhIHN1Y2Nlc3NmdWwgbW92ZSBiZWZvcmUgdGhlIHBsYXllciBtb3ZlcyBhZ2Fpbi5cclxuXHJcbiAgICB0aGlzLiNkZXRlcm1pbmVJZkdhbWVPdmVyKCk7XHJcbiAgfVxyXG5cclxuICAjY3B1QXR0YWNrRGV0ZXJtaW5lQ29vcmRpbmF0ZXMoY3B1KSB7XHJcbiAgICBsZXQgcm93O1xyXG4gICAgbGV0IGNvbDsgXHJcbiAgICBsZXQgZW5kSW5kZXggPSBjcHUuZ2FtZWJvYXJkLnNpemUgLSAxO1xyXG5cclxuICAgIHN3aXRjaChjcHUuY3B1QmVoYXZpb3IpIHtcclxuICAgICAgY2FzZSBDUFVfU1RBVEUucmFuZG9tOiB7XHJcbiAgICAgICAgLy8gcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGVuZEluZGV4KSk7XHJcbiAgICAgICAgLy8gY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGVuZEluZGV4KSk7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgICBjb2wgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQ1BVX1NUQVRFLmZvdW5kOiB7XHJcbiAgICAgICAgLy8gd2hlbiBmb3VuZCwgdGFyZ2V0IHByb3hpbWl0eSBvZiAxIHVuaXQgcmFkaXVzIHRvIHRoZSBmb3VuZCBjZWxsLlxyXG4gICAgICAgIC8vIHRoYXQgbWVhbnMgYWx0ZXJpbmcgdGhlIHJvdyBYT1IgY29sdW1uIGJhc2VkIG9uIHRoZSBsYXN0IHN1Y2Nlc3NmdWwgaGl0LlxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGZvciBkZWNpZGluZyB3aGV0aGVyIHRvIHBpY2sgcm93IG9yIGNvbHVtbiBmb3IgYWRqdXN0bWVudFxyXG4gICAgICAgIGxldCBwaWNrUm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAvLyBmb3IgZGVjaWRpbmcgd2hldGhlciB0byBwbHVzIG9yIG1pbnVzLlxyXG4gICAgICAgIGxldCBwbHVzTWludXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID09PSAwID8gMSA6IC0xO1xyXG5cclxuICAgICAgICBpZiAocGlja1Jvdykge1xyXG4gICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IHN1Y2Nlc3NmdWwgaGl0IHdhcyAwIHdlIGRvbid0IHdhbnQgLTEgLS0gYWx3YXlzIGZvcmNlIGl0IHRvIGJlICsxLlxyXG4gICAgICAgICAgaWYgKGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ICsgMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgPT09IGVuZEluZGV4KSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93IC0gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ICsgcGx1c01pbnVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2w7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBzdWNjZXNzZnVsIGhpdCB3YXMgMCB3ZSBkb24ndCB3YW50IC0xIC0tIGFsd2F5cyBmb3JjZSBpdCB0byBiZSArMS5cclxuICAgICAgICAgIGlmIChjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb2wgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCArIDE7XHJcbiAgICAgICAgICAvLyBsaWtld2lzZSBmb3IgdGhlIGFyZWFzIHdoZXJlIHRoZSBzaGlwIGlzIGF0IHRoZSBlZGdlIG9mIHRoZSBib2FyZC4gTG9vayBiYWNrLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCA9PT0gZW5kSW5kZXgpIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgLSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgKyBwbHVzTWludXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBDUFVfU1RBVEUuZm9jdXNlZDoge1xyXG4gICAgICAgIC8vIGluIGEgZm9jdXNlZCBtb2RlLCB0aGUgQ1BVIHN0YXJ0cyB0cmF2ZXJzaW5nIGluIGEgc2luZ2xlIGRpcmVjdGlvbiB1bnRpbFxyXG4gICAgICAgIC8vIHRoZSBkZXN0cnVjdGlvbiBvZiB0aGUgc2hpcCBpcyBhbm5vdW5jZWQsIGEgbWlzcyBvY2N1cnMsIG9yIGl0IGhpdHMgYSB3YWxsLlxyXG5cclxuICAgICAgICAvLyB0aGUgZGlyZWN0aW9uIHRvIGJlIHRyYXZlcnNlZCBkZXBlbmRzIG9uIHRoZSBsYXN0IHR3byBzdWNjZXNzZnVsIGhpdHNcclxuICAgICAgICAvLyBhbmQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aG9zZSBjb29yZGluYXRlcy5cclxuICAgICAgICAvLyBhIHJvd0RpZmYgaW5kaWNhdGVzIHRvIGxvb2sgdXAgb3IgZG93biwgYXMgdGhlIHNoaXAgaXMgbHlpbmcgdmVydGljYWxseS5cclxuICAgICAgICAvLyBhIGNvbERpZmYgaW5kaWNhdGVzIHRvIGxvb2sgbGVmdCBvciByaWdodCwgYXMgdGhlIHNoaXAgaXMgbHlpbmcgaG9yaXpvbnRhbGx5LlxyXG5cclxuICAgICAgICBsZXQgcm93RGlmZiA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93IC1cclxuICAgICAgICAgICAgY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb2xEaWZmID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgLVxyXG4gICAgICAgICAgICBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2w7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gd2hlbiB0byBsb29rIHVwIC8gZG93biAtLSB0aGVyZSdzIGEgcm93IGRpZmZlcmVuY2VcclxuICAgICAgICBpZiAocm93RGlmZikge1xyXG4gICAgICAgICAgLy8gZm9yIHdoZW4gdGhlIGZvY3VzIG5lZWRzIHRvIGJlIGludmVydGVkIChtaXNzIG9yIGhpdCBhIGdyaWQgYmFycmllcilcclxuICAgICAgICAgIGlmIChjcHUuY3B1Rm9jdXNJbnZlcnQpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkaXJlY3Rpb24gdGhlIGNwdSB3YXMgdHJhdmVsaW5nIGluIHByZXZpb3VzbHk7IGlmIHBvc2l0aXZlLCB0aGVuIGl0IHdhcyBnb2luZyB1cC5cclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBnbyBkb3duIGJ5IGFkZGluZy5cclxuICAgICAgICAgICAgaWYgKHJvd0RpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgKyAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIGVsc2UgaXQgd2FzIG5lZ2F0aXZlLCBzbyBpdCB3YXMgZ29pbmcgZG93biwgc28gd2UgbmVlZCB0byBnbyB1cC5cclxuICAgICAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3B1LmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAvLyBpZiBhdCB0aGUgZW5kLCBzdGFydCBzZWFyY2hpbmcgdXB3YXJkcyBpbnN0ZWFkLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgPT09IGVuZEluZGV4KSB7IFxyXG4gICAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyAtIDE7XHJcbiAgICAgICAgICAvLyBpZiBhdCB0aGUgYmVnaW5uaW5nLCBzdGFydCBzZWFyY2hpbmcgZG93bndhcmRzLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgPT09IDApIHtcclxuICAgICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgKyAxO1xyXG4gICAgICAgICAgLy8gZWxzZSB3ZSdyZSBpbiB0aGUgbWlkZGxlLCBhbmQgaWYgdGhhdCBkaWZmZXJlbmNlIGlzIDEsIHRoZW4gbG9vayB1cHdhcmRzLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChyb3dEaWZmID4gMCkge1xyXG4gICAgICAgICAgICByb3cgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgLSAxO1xyXG4gICAgICAgICAgLy8gYWxzbyBpbiB0aGUgbWlkZGxlLCBidXQgZm9yIGRpZmZlcmVuY2UgMSwgdGhlbiBsb29rIGRvd253YXJkcy5cclxuICAgICAgICAgIH0gZWxzZSBpZiAocm93RGlmZiA8IDApIHtcclxuICAgICAgICAgICAgcm93ID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ICsgIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBjb2x1bW4gaXMgYSBnaXZlbiAtLSBrZWVwIGl0IHRoZSBzYW1lLlxyXG4gICAgICAgICAgY29sID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sO1xyXG4gICAgICAgIC8vIGVsc2UgaW4gdGhlIGNhc2Ugb2YgYSBjb2x1bW4gZGlmZmVyZW5jZSwgd2UgbG9vayBsZWZ0IC8gcmlnaHQuXHJcbiAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICBpZiAoY3B1LmNwdUZvY3VzSW52ZXJ0KSB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZGlyZWN0aW9uIHRoZSBjcHUgd2FzIHRyYXZlbGluZyBpbiBwcmV2aW91c2x5OyBpZiBwb3NpdGl2ZSwgdGhlbiBpdCB3YXMgZ29pbmcgdXAuXHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gZ28gZG93biBieSBhZGRpbmcuXHJcbiAgICAgICAgICAgIGlmIChjb2xEaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sICsgMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBlbHNlIGl0IHdhcyBuZWdhdGl2ZSwgc28gaXQgd2FzIHRyYXZlbGluZyBsZWZ0d2FyZHM7IHdlIG5lZWQgdG8gZ28gcmlnaHQuXHJcbiAgICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNwdS5jcHVGb2N1c0ludmVydCA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2wgPT09IGVuZEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sIC0gMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sICsgMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY29sRGlmZiA+IDApIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sIC0gMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY29sRGlmZiA8IDApIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sICsgMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByb3cgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3c7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7cm93LCBjb2x9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW3JvdywgY29sXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciB0aGUgQ1BVIHRvIGRlY2lkZSBvbiBhbiBhdHRhY2suXHJcbiAgICovXHJcbiAgI2NwdUZpcmVBdHRhY2soKSB7XHJcbiAgICBsZXQgcDIgPSB0aGlzLnBsYXllcnNbMV07XHJcbiAgICBsZXQgc3RhdHVzID0gLTE7XHJcbiAgICBsZXQgcm93O1xyXG4gICAgbGV0IGNvbDtcclxuICAgIHdoaWxlIChzdGF0dXMgPT09IC0xKSB7XHJcbiAgICAgIFtyb3csIGNvbF0gPSB0aGlzLiNjcHVBdHRhY2tEZXRlcm1pbmVDb29yZGluYXRlcyh0aGlzLnBsYXllcnNbMV0pO1xyXG4gICAgICBcclxuICAgICAgc3RhdHVzID0gdGhpcy5wbGF5ZXJzWzFdLmF0dGFjayh0aGlzLnBsYXllcnNbMF0sIHJvdywgY29sKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYXR0YWNrZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApXHJcbiAgICBhdHRhY2tlZENlbGwuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xyXG5cclxuICAgIHN3aXRjaChzdGF0dXMpIHtcclxuICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDUFUgc2NvcmVzIGEgaGl0IVwiKTtcclxuICAgICAgICBhdHRhY2tlZENlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wbGF5ZXJTaGlwSGl0KTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICAgICAgLy8gcmVwbGFjZSB3aXRoIGEgdG9hc3QuXHJcblxyXG4gICAgICAgIGxldCBzaGlwSWQgPSBhdHRhY2tlZENlbGwuZGF0YXNldC5zaGlwLnNwbGl0KFwicGxheWVyLXNoaXBcIilbMV07XHJcblxyXG4gICAgICAgIGxldCBzaGlwU3VuayA9IHRoaXMucGxheWVyc1swXS5nYW1lYm9hcmQuaXNTaGlwU3VuayhzaGlwSWQpO1xyXG4gICAgICAgIGlmIChzaGlwU3Vuaykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJDUFUgc2FuayB0aGF0IHNoaXAhXCIpO1xyXG4gICAgICAgICAgLy8gVE9ET1xyXG4gICAgICAgICAgLy8gcmVwbGFjZSB3aXRoIGEgdG9hc3QgYXBwZWFyaW5nIGJlbG93IHRoZSBnYW1lIGFyZWEuXHJcbiAgICAgICAgICAvLyB0aGlzLiNwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLnBsYXllclNoaXBTdW5rKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRoZSBDUFUgaGFzIG1hZGUgaXRzIGZpcnN0IHN1Y2Nlc3NmdWwgaGl0IGFnYWluc3QgYSBzaGlwISBcclxuICAgICAgICBpZiAocDIuY3B1QmVoYXZpb3IgPT09IENQVV9TVEFURS5yYW5kb21cclxuICAgICAgICAgICYmIHAyLmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgPT09IG51bGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHAyLmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgPSByb3c7XHJcbiAgICAgICAgICBwMi5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sID0gY29sO1xyXG4gICAgICAgICAgcDIuY3B1QmVoYXZpb3IgPSBDUFVfU1RBVEUuZm91bmQ7XHJcbiAgICAgICAgLy8gVGhlIENQVSBoYXMgbWFkZSBhIHNlY29uZCBzdWNjZXNzZnVsIGhpdCB3aGlsZSBpbiBmb3VuZCBtb2RlIVxyXG4gICAgICAgIH0gZWxzZSBpZiAocDIuY3B1QmVoYXZpb3IgPT09IENQVV9TVEFURS5mb3VuZFxyXG4gICAgICAgICAgJiYgcDIuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgPT09IG51bGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHAyLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ID0gcm93O1xyXG4gICAgICAgICAgcDIuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2wgPSBjb2w7XHJcbiAgICAgICAgICBwMi5jcHVCZWhhdmlvciA9IENQVV9TVEFURS5mb2N1c2VkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBmb2N1c2VkIG1vZGUgYmVoYXZpb3JzIC0tIHJldmVydCB0byByYW5kb20gd2hlIHN1bmsuXHJcbiAgICAgICAgICBpZiAocDIuY3B1QmVoYXZpb3IgPT09IENQVV9TVEFURS5mb2N1c2VkKSB7XHJcbiAgICAgICAgICAgIC8vIG9ubHkga2VlcCB1cGRhdGluZyB0aGUgc2Vjb25kIGhpdC5cclxuICAgICAgICAgICAgcDIuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgPSByb3c7XHJcbiAgICAgICAgICAgIHAyLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sID0gY29sO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gaW4gZm9jdXNlZCBtb2RlLi4uIGxheSBkb3duIHNvbWUgYXR0YWNrcy5cclxuICAgICAgICAgIC8vIGlmIGEgc2hpcCB3YXMgc3VuaywgdGhlbiByZXNldCB0byByYW5kb20uXHJcbiAgICAgICAgICBpZiAoc2hpcFN1bmspIHtcclxuICAgICAgICAgICAgcDIucmVzZXRDUFVCZWhhdmlvcnMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ1BVIG1pc3NlcyFcIik7XHJcbiAgICAgICAgYXR0YWNrZWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xyXG5cclxuICAgICAgICBpZiAocDIuY3B1QmVoYXZpb3IgPT09IENQVV9TVEFURS5mb2N1c2VkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpbmNlIENQVSB3YXMgZm9jdXNlZCwgaXQnbGwgc3dhcCBkaXJlY3Rpb25zIHN0YXJ0aW5nIGZyb20gdGhlIGZpcnN0IGhpdC5cIik7XHJcbiAgICAgICAgICBwMi5jcHVGb2N1c0ludmVydCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuI3AxdHVybiA9IHRydWU7XHJcbiAgICB0aGlzLiNkZXRlcm1pbmVJZkdhbWVPdmVyKCk7XHJcbiAgfVxyXG5cclxuICAjY3B1UGxhY2VTaGlwcyhwbGF5ZXIpIHtcclxuICAgIHRoaXMuc2hpcExlbmd0aHMuZm9yRWFjaCgobGVuZ3RoLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgc3RhdHVzID0gbnVsbDtcclxuICAgICAgbGV0IHJvdztcclxuICAgICAgbGV0IGNvbDtcclxuICAgICAgbGV0IHZlcnRpY2FsO1xyXG5cclxuICAgICAgd2hpbGUgKHN0YXR1cyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChwbGF5ZXIuZ2FtZWJvYXJkLnNpemUtMSkpO1xyXG4gICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChwbGF5ZXIuZ2FtZWJvYXJkLnNpemUtMSkpO1xyXG4gICAgICAgIHZlcnRpY2FsID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBzdGF0dXMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChsZW5ndGgsIHJvdywgY29sLCB2ZXJ0aWNhbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEJhdHRsZXNoaXBFbGVtZW50cy5wbGFjZVNoaXBWaWFDb29yZGluYXRlKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsLCB0cnVlLCBgY3B1LXNoaXAke2luZGV4fWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggYW4gaW5zdGFuY2Ugb2YgQmF0dGxlU2hpcEVsZW1lbnRzIHRvIGNvbnRyb2wgdGhlIHZpZXcgb2YgdGhlIHBhZ2UuXHJcbiAgICogQHBhcmFtIHtCYXR0bGVzaGlwRWxlbWVudHN9IHBhZ2UgXHJcbiAgICovXHJcbiAgYXR0YWNoUGFnZShwYWdlKSB7XHJcbiAgICB0aGlzLiNwYWdlID0gcGFnZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENQVV9TVEFURSA9IHtcclxuICByYW5kb20gOiBcInJhbmRvbVwiLFxyXG4gIGZvdW5kIDogXCJmb3VuZFwiLFxyXG4gIGZvY3VzZWQgOiBcImZvY3VzZWRcIlxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gIG5hbWU7XHJcbiAgY3B1O1xyXG4gIC8qKlxyXG4gICAqIEtlZXBzIHRyYWNrIG9mIGNvb3JkaW5hdGVzIG9mIHRoZSBDUFUncyBsYXN0IHN1Y2Nlc3NmdWwgaGl0LlxyXG4gICAqL1xyXG4gIGNwdUZpcnN0U3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIENQVSBzY29yZXMgdHdvIGhpdHMgb24gYSBzaGlwLCB0aGVuIHVzZSB0aGlzIGFzIGEgZmxhZyB0byBzd2l0Y2hcclxuICAgKiBpdCdzIGJlaGF2aW9yIHRvIGZvY3VzZWQuXHJcbiAgICovXHJcbiAgY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgYXJlIHRocmVlIHN0YXRlcyBmb3IgdGhlIENQVSB0byBlbXBsb3k6IHJhbmRvbSwgZm91bmQsIGZvY3VzZWQuXHJcbiAgICovXHJcbiAgY3B1QmVoYXZpb3I7XHJcbiAgLyoqXHJcbiAgICogV2hlbiBmb2N1c2VkIG9uIGEgdGFyZ2V0LCBzd2FwcyB0aGUgZGlyZWN0aW9uIG9mIGF0dGFjayB3aGVuIHNldCB0byB0cnVlLlxyXG4gICAqIFVzZWQgd2hlbiB0aGUgQ1BVIGlkZW50aWZpZXMgYSByb3cgLyBjb2wgd2hlcmUgYSBzaGlwIG1heSBiZSwgYnV0IGdldHMgYSBtaXNzLlxyXG4gICAqL1xyXG4gIGNwdUZvY3VzSW52ZXJ0O1xyXG4gIHNjb3JlO1xyXG4gIGdhbWVib2FyZDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSwgaXNDcHUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmNwdSA9IGlzQ3B1O1xyXG4gICAgdGhpcy5jcHVCZWhhdmlvciA9IENQVV9TVEFURS5yYW5kb207XHJcbiAgICB0aGlzLmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNrIHRoZSBvdGhlciBwbGF5ZXIncyBnYW1lYm9hcmQuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIFRoZSBvdGhlciBwbGF5ZXIgb2YgdGhlIGdhbWUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBjb29yZGluYXRlIHRvIGxhdW5jaCBhbiBhdHRhY2suXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCAtIENvbHVtbiBjb29yZGluYXRlIHRvIGxhdW5jaCBhbiBhdHRhY2suXHJcbiAgICogQHJldHVybnMge251bWJlcn0gLSBTdGF0dXMgb2YgdGhlIGF0dGFjay4gMSBpcyBhIGhpdC4gMCBpcyBhIG1pc3MsXHJcbiAgICogYW5kIC0xIGlzIGFuIGFyZWEgd2hpY2ggaGFzIGFscmVhZHkgYmVlbiBoaXQuXHJcbiAgICovXHJcbiAgYXR0YWNrKHBsYXllciwgcm93LCBjb2wpIHtcclxuICAgIHJldHVybiBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRDUFVCZWhhdmlvcnMoKSB7XHJcbiAgICB0aGlzLmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgICB0aGlzLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQgPSB7cm93OiBudWxsLCBjb2w6IG51bGx9O1xyXG4gICAgdGhpcy5jcHVCZWhhdmlvciA9IENQVV9TVEFURS5yYW5kb207XHJcbiAgICB0aGlzLmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNldE5hbWUobGVuZ3RoKSB7XHJcbiAgc3dpdGNoKGxlbmd0aCkge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICByZXR1cm4gXCJTcGVlZGVyXCI7XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIHJldHVybiBcIlBhdHJvbCBCb2F0XCI7XHJcbiAgICBjYXNlIDM6XHJcbiAgICAgIHJldHVybiBcIkRlc3Ryb3llclwiO1xyXG4gICAgY2FzZSA0OlxyXG4gICAgICByZXR1cm4gXCJCYXR0bGVzaGlwXCI7XHJcbiAgICBjYXNlIDU6XHJcbiAgICAgIHJldHVybiBcIkNhcnJpZXJcIjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlNoaXBcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBiYXR0bGVzaGlwLCBkZXBlbmRzIG9uIHRoZSBsZW5ndGguXHJcbiAgICovXHJcbiAgbmFtZTsgXHJcbiAgLyoqXHJcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgYmF0dGxlc2hpcC5cclxuICAgKi9cclxuICBsZW5ndGg7XHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCBjb25kaXRpb24gb2YgdGhlIGJhdHRsZXNoaXAuIFJldHVybnNcclxuICAgKiBhbiBhcnJheSBjb250YWluaW5nIHN0YXR1cyBvZiB0aGUgYmF0dGxlc2hpcC4gXHJcbiAgICogSWYgdGhlIHN0YXR1c2VzIGFyZSBhbGwgdHJ1ZSwgdGhlIHNoaXAgaXMgc3Vuay5cclxuICAgKi9cclxuICBzdGF0dXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHNoaXAuXHJcbiAgICogQHBhcmFtIHtHYW1lYm9hcmR9IGdhbWVib2FyZCAtIFRoZSBnYW1lYm9hcmQgdGhlIHNoaXAgYmVsb25ncyB0by5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIC0gVGhlIGxlbmd0aCBvZiB0aGUgc2hpcC5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IC0geENvb3JkaW5hdGUgdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQuXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbCAtIHlDb29yZGluYXRlIHRvIHBsYWNlIHRoZSBzaGlwLiAwLWJhc2VkLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgLSBTaG91bGQgdGhlIHNoaXAgYmUgcGxhY2VkIHZlcnRpY2FsbHk/XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aCA/PyAxO1xyXG4gICAgdGhpcy5uYW1lID0gc2V0TmFtZSh0aGlzLmxlbmd0aCk7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFya3MgdGhlIHNoaXAgaGl0IGF0IGdpdmVuIGxvY2F0aW9uLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NhdGlvbiBcclxuICAgKi9cclxuICBoaXQoeCwgeSkge1xyXG4gICAgbGV0IGlkID0gYCR7eH0sJHt5fWA7XHJcbiAgICB0aGlzLnN0YXR1c1tpZF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgc2hpcCBoYXMgYmVlbiBlbnRpcmVseSBzdW5rIHlldC5cclxuICAgKi9cclxuICBpc1N1bmsoKSB7XHJcbiAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuc3RhdHVzKSB7XHJcbiAgICAgIGlmICghdGhpcy5zdGF0dXNbcHJvcF0pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0iLCIvKipcclxuICogQSBjbGFzcyB3aXRoIHVzZWZ1bCwgZ2VuZXJhbC1wdXJwb3NlIG1ldGhvZHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuICBcclxuICBzdGF0aWMgZW1haWxSZWdleCA9ICBcdFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxyXG4gIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cclxuICAvKipcclxuICAgKiBCYXNlZCBvbiB3ZWJwYWNrJ3MgcmVxdWlyZSB0byBxdWlja2x5IGltcG9ydCBpbiBhbGwgaW1hZ2VzIGluIGEgZm9sZGVyLlxyXG4gICAqIFNlZSBkb2N1bWVudGF0aW9uIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlcXVpcmUtY29udGV4dCB0byB1bmRlcnN0YW5kXHJcbiAgICogbW9yZSBhYm91dCB0aGUgcGFyYW1ldGVyLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSByIC0gcmVxdWlyZS5jb250ZXh0KCkgZnVuY3Rpb24sIHVzZWQgZm9yIGltcG9ydGluZyBhbGwgZmlsZXMgaW5cclxuICAgKiBhIGRpcmVjdG9yeSBtYXRjaGluZyBhIHBhdHRlcm4uIEV4OlxyXG4gICAqIHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2VzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pLiBMZWF2ZSBibGFuayB0byB1c2UgdGhpcy5cclxuICAgKiBAcmV0dXJucyAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW1hZ2VzIG1hdGNoaW5nIHRoZSByZXF1aXJlIGNvbnRleHQsXHJcbiAgICogdGhlIG9yaWdpbmFsIGZpbGVuYW1lICh3LyBleHRlbnNpb24pIGJlaW5nIHRoZSBrZXkgcmVmZXJlbmNpbmcgdGhlIGltYWdlLlxyXG4gICAqL1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gIHN0YXRpYyBpbXBvcnRBbGxJbWFnZXMociA9IHJlcXVpcmUuY29udGV4dChcIi4uL2ltYWdlc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSkge1xyXG4gICAgbGV0IGltYWdlcyA9IHt9O1xyXG4gICAgci5rZXlzKCkubWFwKChpdGVtKSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xyXG4gICAgcmV0dXJuIGltYWdlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggdmFyaW91cyBjbGFzc2VzLiBXcmFwcyBkb2N1bWVudC5jcmVhdGVFbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUaGUgSFRNTCB0YWcgb2YgdGhlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDbGFzcyAtIERlZmF1bHQgY2xhc3MgdG8gcmVmZXIgdG8gdGhlIGVsZW1lbnQgYnkuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVzIC0gKE9wdGlvbmFsKSBBZGRpdGlvbmFsIGNsYXNzZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudC5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlRWxlbWVudCh0YWcsIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIFV0aWxpdHkuYWRkQ2xhc3Nlc1RvRWxlbWVudChlbGVtLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpO1xyXG5cclxuICAgIHJldHVybiBlbGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBoZWxwZXIgbWV0aG9kIHdoaWNoIGFkZHMgY2xhc3NlcyB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGFwcGVuZCBjbGFzc2VzIHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0Q2xhc3MgLSBUaGUgY2xhc3NuYW1lIHRoYXQgc2FpZCBlbGVtZW50IHNob3VsZCBhbHdheXMgaGF2ZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gVGhlIGNsYXNzbmFtZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudCAob3B0aW9uYWwpLlxyXG4gICAqICovIFxyXG4gIHN0YXRpYyBhZGRDbGFzc2VzVG9FbGVtZW50KGVsZW0sIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgICBjbGFzc05hbWVzLnB1c2goZGVmYXVsdENsYXNzKTtcclxuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGEgZ2l2ZW4gZWxlbWVudCwgYWRkIGFuIGFuaW1hdGlvbiBidXQgb25seSBwbGF5IGl0IG9uY2UuIEFmdGVyd2FyZHMsXHJcbiAgICogdW5sb2FkIHRoZSBhbmltYXRpb24uIFRoaXMgYWxsb3dzIHlvdSB0byBhZGQgdGhlIGNsYXNzIHRvIGl0IGFnYWluIHRvIFxyXG4gICAqIHBsYXkgdGhlIGFuaW1hdGlvbjsgdGhpcyBpcyB1c2VmdWwgd2hlbiBhc3NvY2lhdGVkIHdpdGggZXZlbnQgdHJpZ2dlcnMuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIEFuIGVsZW1lbnQgdG8gYXBwbHkgdGhlIGFuaW1hdGlvbiB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYW5pbWF0aW9uTmFtZSAtIEEgQ1NTIGNsYXNzIGFzc29jaWF0ZWQgd2l0aCBhbiBhbmltYXRpb24uXHJcbiAgICovXHJcbiAgc3RhdGljIHRyaWdnZXJBbmltYXRpb24oZWxlbSwgYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbk5hbWUpO1xyXG5cclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShhbmltYXRpb25OYW1lKTtcclxuICAgIH0sIHtvbmNlIDogdHJ1ZX0pOyBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlY3Vyc2l2ZWx5IHNjYWxlIHRoZSB0cmVlIG9mIGEgY2hpbGQgbm9kZSB1bnRpbCB0aGUgcGFyZW50IG1hdGNoaW5nIHRoZSBnaXZlblxyXG4gICAqIHNlbGVjdG9yIGlzIGZvdW5kLiBSZXR1cm5zIE5VTEwgaWYgbm8gbWF0Y2hpbmcgcGFyZW50IGlzIGZvdW5kLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBBIGNoaWxkIG5vZGUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gQ1NTIFNlbGVjdG9yIFN0cmluZy5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SFRNTGVsZW1lbnR9IC0gUGFyZW50IG9mIGVsZW0uXHJcbiAgICovXHJcbiAgc3RhdGljIGdldE1hdGNoaW5nUGFyZW50KGVsZW0sIHNlbGVjdG9yKSB7XHJcbiAgICB3aGlsZSghZWxlbS5tYXRjaGVzKHNlbGVjdG9yKSkge1xyXG4gICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xyXG4gICAgICBpZiAoZWxlbS5tYXRjaGVzKFwiaHRtbFwiKSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdXNlcidzIGxvY2F0aW9uLCB1c2luZyB0aGUgR2VvbG9jYXRpb24gQVBJLlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIG9mIHRoZSB1c2VyJ3MgbG9jYXRpb24sIG9yIG51bGxcclxuICAgKiBpZiB0aGUgdXNlciBkZW5pZXMgcGVybWlzc2lvbiByZXF1ZXN0cy5cclxuICAgKi9cclxuICAvKlxyXG4gIHN0YXRpYyBnZXRHZW9sb2NhdGlvbigpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWNjZXNzKHBvc2l0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGxhdGl0dWRlICA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgY29uc3QgbG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuXHJcbiAgICAgIGNvbnN0IGxhdGxvbmcgPSBgJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcclxuXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobGF0bG9uZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBlcnJvcigpIHtcclxuICAgICAgbGV0IGVycm9yID0gXCJVc2VyIGRlbmllZCBsb2NhdGlvbiBwZXJtaXNzaW9ucy5cIjtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7XHJcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2VzcywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gICovXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbGwgY2hpbGRyZW4gZnJvbSBhIHBhcmVudCBub2RlLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnROb2RlfSBwYXJlbnQgLSBQYXJlbnQgbm9kZSBjb250YWluaW5nIGNoaWxkcmVuLlxyXG4gICAqL1xyXG4gIHN0YXRpYyByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpIHtcclxuICAgIGlmIChwYXJlbnQuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbnRlbmNlIGZvcm1hdC4gTWFrZXMgc3VyZSB0aGUgZmlyc3QgbGV0dGVyIGlzIGNhcGl0YWxpemVkLCBhbmQgdGhlbiBcclxuICAgKiBhIHBlcmlvZCBpcyBhcHBlbmRlZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gYSBzdHJpbmcgdG8gc2VudGVuY2UtY2FzZS5cclxuICAgKi9cclxuICBzdGF0aWMgdG9TZW50ZW5jZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSArIFwiLlwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBhc3NpZ25lZCB0byBlYWNoIGJ1dHRvblxyXG4gICAqIHdoZW4gb25seSBvbmUgb2YgdGhlbSBzaG91bGQgYmUgdG9nZ2xlZC4gRnVuY3Rpb25zIGxpa2UgYSByYWRpb1xyXG4gICAqIGJ1dHRvbiBidXQgd2l0aCBkaWZmZXJlbnQgc3R5bGluZy5cclxuICAgKiBAcGFyYW0geyp9IGUgXHJcbiAgICogQHBhcmFtIHsqfSBwYXJlbnRTZWxlY3RvciBcclxuICAgKi9cclxuICBzdGF0aWMgdG9nZ2xlU2VsZWN0ZWQoZSwgcGFyZW50U2VsZWN0b3IpIHtcclxuICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBmcm9tIHRoZSBvdGhlci5cclxuICAgIGNvbnN0IHBhcmVudCA9IFV0aWxpdHkuZ2V0TWF0Y2hpbmdQYXJlbnQoZS5jdXJyZW50VGFyZ2V0LCBwYXJlbnRTZWxlY3Rvcik7XHJcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0ZWQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcclxuICAgIGN1cnJlbnRTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICBjdXJyZW50U2VsZWN0ZWQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAvLyB0b2dnbGUgc2VsZWN0ZWQgY2xhc3Mgb24gdGhlIGJ1dHRvblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgIGUuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvL2pzIFxyXG5pbXBvcnQgeyBCYXR0bGVzaGlwRWxlbWVudHMgfSBmcm9tIFwiLi9CYXR0bGVzaGlwRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBHQU1FX1NUQVRFIH0gZnJvbSBcIi4vZ2FtZW1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuL3V0aWxpdHlcIjtcclxuaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuXHJcbi8vY3NzXHJcbmltcG9ydCBcIi4uL2Nzcy9yZXNldC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2dhbWUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9wYWdlLmNzc1wiO1xyXG5cclxuXHJcbihmdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICBjb25zdCBtYWluID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwibWFpblwiLCBcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgZm9vdGVyID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIFwiZm9vdGVyXCIpO1xyXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBjb21wb25lbnQuYShcIlZpZXcgb24gR2l0SHViLlwiLCBcIiNcIiwgXCJnaC1saW5rXCIpO1xyXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBjb21wb25lbnQuaW1nKFwiaHR0cHM6Ly9naXRodWIuZ2l0aHViYXNzZXRzLmNvbS9pbWFnZXMvbW9kdWxlcy9sb2dvc19wYWdlL0dpdEh1Yi1NYXJrLnBuZ1wiLCBcImdoLWljb25cIik7XHJcblxyXG4gIGJvZHkuYXBwZW5kKG1haW4sIGZvb3Rlcik7XHJcblxyXG4gIGNvbnN0IHAxID0gbmV3IFBsYXllcihcIkNvbW1hbmRlciBCbHVlXCIsIGZhbHNlKTtcclxuICBjb25zdCBwMiA9IG5ldyBQbGF5ZXIoXCJDb21tYW5kZXIgUmVkXCIsIHRydWUpO1xyXG5cclxuICBjb25zdCBnYW1lID0gbmV3IEdhbWVNYW5hZ2VyKHAxLCBwMik7XHJcbiAgY29uc3QgcGFnZSA9IG5ldyBCYXR0bGVzaGlwRWxlbWVudHMoZ2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IHBhZ2UuaGVhZGVyKCk7XHJcbiAgY29uc3QgZ2FtZUFyZWEgPSBwYWdlLmdhbWVBcmVhKCk7XHJcblxyXG4gIG1haW4uYXBwZW5kKGhlYWRlciwgZ2FtZUFyZWEpO1xyXG4gIFxyXG4gIGdhbWUuYXR0YWNoUGFnZShwYWdlKTtcclxuICBwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLndlbGNvbWVQcm9tcHQpO1xyXG4gIHBhZ2Uuc2V0U3ViRGlhbG9nKFwiRHJhZyBhbmQgZHJvcCBzaGlwcyBvbnRvIHRoZSBnYW1lYm9hcmQuXCIsXHJcbiAgICAgIFwiQ2xpY2sgKHdoZW4gcGxhY2VkKSB0byByb3RhdGUgc2hpcC5cIik7XHJcbiAgZm9vdGVyLmFwcGVuZChnaXRodWJMaW5rLCBnaXRodWJJY29uKTtcclxufSkoKTtcclxuXHJcbi8qXHJcbjE6IFVzZXJzIHBsYWNlIHRoZWlyIHNoaXBzLlxyXG4yOiBVc2VycyBwbGF5IHRoZSBnYW1lLlxyXG4zOiBHYW1lIGVuZHMgd2hlbiB0aGUgb25lIHBsYXllcidzIGJhdHRsZXNoaXBzIGFyZSBkZXN0cm95ZWQuXHJcbjQ6IFRoZSBnYW1lIGVuZCBoYXMgc3RhdGlzdGljcyByZXN1bHRzIGFuZCBvcHRpb24gdG8gcmVwbGF5XHJcbjU6IEdvIGJhY2sgdG8gc3RlcCAxLlxyXG4qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==