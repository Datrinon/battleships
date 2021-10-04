/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  background-color: cyan;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.draggable:hover {\r\n  background-color: blue;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55);\r\n  background-color: rgba(0, 255, 64, 0.3);\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: greenyellow;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.occupied:hover {\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.ship-placed .cell {\r\n  /* border: 1px solid rgba(27, 102, 71, 0.3); */\r\n}\r\n\r\n.gameboard-area {\r\n  transition: border 0.7s;\r\n}\r\n\r\n.gameboard-area.game-active {\r\n  border: 1px solid red;\r\n}\r\n\r\n.p1.gameboard .cell.attackable .ship {\r\n  cursor: default;\r\n}\r\n\r\n.p1.gameboard .cell.attackable:hover {\r\n  background-color: revert;\r\n}\r\n\r\n.p2.gameboard .cell.attackable:hover {\r\n  background-color: rgba(255,0,0,0.6);\r\n  cursor: crosshair;\r\n}\r\n\r\n.gameboard .cell.attacked::after {\r\n  content: \"X\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  color: red;\r\n  visibility: unset;\r\n  z-index: 100;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA,8DAA8D;AAC9D,uDAAuD;AACvD,uDAAuD;AACvD,gFAAgF;AAChF;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;AACA;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;EACjC,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,UAAU;EACV,iBAAiB;EACjB,YAAY;AACd","sourcesContent":[".no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  background-color: cyan;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.draggable:hover {\r\n  background-color: blue;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55);\r\n  background-color: rgba(0, 255, 64, 0.3);\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: greenyellow;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.occupied:hover {\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.ship-placed .cell {\r\n  /* border: 1px solid rgba(27, 102, 71, 0.3); */\r\n}\r\n\r\n.gameboard-area {\r\n  transition: border 0.7s;\r\n}\r\n\r\n.gameboard-area.game-active {\r\n  border: 1px solid red;\r\n}\r\n\r\n.p1.gameboard .cell.attackable .ship {\r\n  cursor: default;\r\n}\r\n\r\n.p1.gameboard .cell.attackable:hover {\r\n  background-color: revert;\r\n}\r\n\r\n.p2.gameboard .cell.attackable:hover {\r\n  background-color: rgba(255,0,0,0.6);\r\n  cursor: crosshair;\r\n}\r\n\r\n.gameboard .cell.attacked::after {\r\n  content: \"X\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  color: red;\r\n  visibility: unset;\r\n  z-index: 100;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src/images sync \\.(png|jpe?g|svg)$";
module.exports = webpackEmptyContext;

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
    const titleContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("title-container");
    const titleLabel = _component__WEBPACK_IMPORTED_MODULE_0__["default"].heading("Battleships", 1);
    const authorLabel = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("by Dan T.", 2);

    titleContainer.append(titleLabel, authorLabel);

    return titleContainer;
  }

  gameArea() {
    this.#gameContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("game-area");
    const gameboardContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("gameboard-area");
    const controlDialogContainer = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("controls-area");

    this.#gameContainer.append(gameboardContainer, controlDialogContainer);

    gameboardContainer.append(this.#gameboard("Player", "p1"), this.#gameboard("CPU", "p2"));

    controlDialogContainer.append(this.#dialog(), this.#shipPlacement());
    controlDialogContainer.append(this.#startGamePrompt());

    this.generateDraggableShips();
    this.#enableDragAndDropOnCell();

    controlDialogContainer.append(this.#summary());

    return this.#gameContainer;
  }

  /**
   * Generates a clickable grid based on the game manager's gameboard size.
   * @param {string} playerName : the name of the player; used as a class name to 
   * identify the gameboard.
   * @param {string} className : Additional class names to identify the gameboard by.
   */
  #gameboard(playerName, className) {
    const gameboard = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("gameboard", className);
    const gameboardGrid = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("gameboard-grid");

    const gridSize = this.gameManager.players[0].gameboard.size;
    const numberCell = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("cell", "numbering");

    gameboardGrid.prepend(_component__WEBPACK_IMPORTED_MODULE_0__["default"].div("cell", "blank"));

    // create row numbering
    for (let i = 0; i < gridSize; i++) {
      numberCell.textContent = i + 1;
      gameboardGrid.append(numberCell.cloneNode(true));
    }

    // create column numbering and cells
    for (let i = 0; i < gridSize; i++) {
      numberCell.textContent = i + 1;

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
    let dialogMsg = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("Welcome.", "dialog-msg");
    dialogContainer.append(dialogMsg);

    this.#dialogHolder = dialogContainer;

    return dialogContainer;
  }

  /**
   * Set the dialog for the battleship game. Preferably, use messages from the
   * gamemanager GAME_STATE object.
   * @param {} message 
   */
  setDialog(message) {
    document.querySelector(".dialog-msg").textContent = message;
  }

  /**
   * Generates an inventory of ships and lets them be dragged by the player.
   */
  #shipPlacement() {
    let shipInventory = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("ship-placer");

    let header = _component__WEBPACK_IMPORTED_MODULE_0__["default"].heading("Select Ship", 3);
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

      console.log("hovering over index: " + index);

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
    const [playerNameLabel, playerNameField] = _component__WEBPACK_IMPORTED_MODULE_0__["default"].formInput("Name", "input", "p1-name", "p1-name");
    const startGameButton = _component__WEBPACK_IMPORTED_MODULE_0__["default"].button("Start Game!", "start-game-button");
    const errorField = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("Error Field Here", "form-error-field");

    playerNameField.value = "Commander";
    playerNameField.required = true;

    startGameForm.append(playerNameLabel, playerNameField, startGameButton, errorField);

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
  #summary() {
    const summary = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("summary-screen");
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

    if (className !== null) {
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

  img(url, ...className) {
    let image = new Image();
    image.classList.add(...className);

    image.src = url;

    return image;
  }

  div(...className) {
    let div = document.createElement("div");
    div.classList.add(...className);

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
/* harmony export */   "default": () => (/* binding */ GameManager)
/* harmony export */ });
/* harmony import */ var _BattleshipElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BattleshipElement */ "./src/js/BattleshipElement.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/js/player.js");



/**
 * Manages a game session for battleship. Keeps track of players.
 * Can start, end, and reset the game.
 */

const GAME_STATE = {
  p1turn: "Player 1's turn",
  p2turn: "Player 2's turn",
  ended: "Game ended.",
  p1victory: "Player 1 wins.",
  p2victory: "Player 2 wins.",
  restart: "Restarting game...",
  playing: "Game start!",
  gamePrompt: "Welcome. Drag ships onto gameboard. Click (when placed): Rotate.",
  cpuShipSunk: "A ship of the CPU's was sunk!",
  cpuShipHit: "A ship of the CPU's was sunk!",
  playerShipSunk: "A ship of the player's was sunk!",
  playerShipHit: "A ship of the player's was hit!!"
};


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
  constructor(player1, player2, p1start = true, shipLengths = [5]) {
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
          if (GameManager.#instance.p1turn) {
            return resolve(GAME_STATE.p1turn);
          } else {
            return resolve(GAME_STATE.p2turn);
          }
          }, 750);
      });
    })().then((result) => {
      this.#page.setDialog(result);
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
    // update game results here.
    const summaryContainer = document.querySelector(".summary-screen");
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
        .addEventListener("click", this.#resetGame);
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
   * - Removing all ships from the gameboard
   * - Remarking all cells on the gameboards and removing data ship from them.
   * - Recreating player instances.
   * - Recreating draggable ships.
   * - Allowing the user to start the game again.
   */
  #resetGame() {
    document.querySelectorAll(".ship").forEach(ship => ship.remove());
    document.querySelectorAll(".selectable").forEach(cell => {
      cell.className = "cell selectable";
      cell.dataset.ship = "";
    });

    document.querySelector("#p1-name").value = this.players[0].name;

    this.players[0] = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.players[0].name, false);
    this.players[1] = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.players[1].name, true);

  }

  /**
   * Play a round of battleships, allowing each player to fire.
   * @param {Event} e : Event; used to pick up the cell the user clicked. Acquires
   * coordinates from it to attack.
   */
  #playRound(e) {
    if (this.#p1turn && !this.#gameOver) {
      this.#playerFireAttack(e);
      if (this.#p1turn === false) {
        this.#cpuFireAttack();
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
        break;
      case 0:
        console.log("It's a miss!");
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
        this.#page.setDialog(GAME_STATE.playerShipHit);

        let shipId = attackedCell.dataset.ship.split("player-ship")[1];

        let shipSunk = this.players[0].gameboard.isShipSunk(shipId);
        if (shipSunk) {
          console.log("CPU sank that ship!");
          this.#page.setDialog(GAME_STATE.playerShipSunk);
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
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
//js 





//css



(function main() {
  const body = document.body;

  const p1 = new _player__WEBPACK_IMPORTED_MODULE_2__["default"]("Commander Blue", false);
  const p2 = new _player__WEBPACK_IMPORTED_MODULE_2__["default"]("Commander Red", true);

  const game = new _gamemanager__WEBPACK_IMPORTED_MODULE_1__["default"](p1, p2);
  const page = new _BattleshipElement__WEBPACK_IMPORTED_MODULE_0__.BattleshipElements(game);

  const header = page.header();
  const gameArea = page.gameArea();

  body.append(header, gameArea);
  
  game.attachPage(page);
  page.setDialog(_gamemanager__WEBPACK_IMPORTED_MODULE_1__.GAME_STATE.gamePrompt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMWlCZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFDQUFxQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJeUQ7QUFDWjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtB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Ozs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUN5RDtBQUNkO0FBQ0g7QUFDVjtBQUM5QjtBQUNBO0FBQzBCO0FBQ0E7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQU07QUFDdkIsaUJBQWlCLCtDQUFNO0FBQ3ZCO0FBQ0EsbUJBQW1CLG9EQUFXO0FBQzlCLG1CQUFtQixrRUFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0RBQXFCO0FBQ3RDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9yZXNldC5jc3M/MTUyYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvLihwbmd8anBlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL0JhdHRsZXNoaXBFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvZ2FtZW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1hcmVhIHtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGlzIHBzZXVkbyBlbGVtZW50IGhlbHBzIGtlZXAgdGhlIGNlbGxzIGFsaWduZWQgdG9nZXRoZXIgKi9cXHJcXG4vKiBFbXB0eSBkaXZzIGFjdCBzdHJhbmdlbHksIHNvIHB1dCBjb250ZW50IGluIHRoZW0uICAqL1xcclxcbi8qIERlbGV0ZSBpdCBhbmQgdGhlbiBydW4gdGhpcyBpbiBjb25zb2xlIHRvIHNlZSB0aGF0ICovXFxyXFxuLyogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXFwiLmNlbGxcXFwiKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC50ZXh0Q29udGVudCA9IFxcXCJBXFxcIik7ICovXFxyXFxuLmNlbGw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcuJztcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpXFxyXFxufVxcclxcblxcclxcbi5zaGlwLXNlbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUge1xcclxcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGUge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi52YWxpZC1kcmFnIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAyNTUsIDU1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCA2NCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLnNoaXAtcGxhY2VkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNGU4YTAyO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQ6aG92ZXIge1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUudmVydGljYWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXBsYWNlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTM2LCAxMzYsIDAuODYzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXN0YXJ0LWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLW1pZGRsZS1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZW5kLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtc3RhcnQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1taWRkbGUtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1lbmQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC10cmFuc3BhcmVudCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VkIC5jZWxsIHtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDEwMiwgNzEsIDAuMyk7ICovXFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtYXJlYSB7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC43cztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhLmdhbWUtYWN0aXZlIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlIC5zaGlwIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJldmVydDtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDAsMCwwLjYpO1xcclxcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdmlzaWJpbGl0eTogdW5zZXQ7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBLDhEQUE4RDtBQUM5RCx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELGdGQUFnRjtBQUNoRjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uby1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtYXJlYSB7XFxyXFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhpcyBwc2V1ZG8gZWxlbWVudCBoZWxwcyBrZWVwIHRoZSBjZWxscyBhbGlnbmVkIHRvZ2V0aGVyICovXFxyXFxuLyogRW1wdHkgZGl2cyBhY3Qgc3RyYW5nZWx5LCBzbyBwdXQgY29udGVudCBpbiB0aGVtLiAgKi9cXHJcXG4vKiBEZWxldGUgaXQgYW5kIHRoZW4gcnVuIHRoaXMgaW4gY29uc29sZSB0byBzZWUgdGhhdCAqL1xcclxcbi8qIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXFxcIi5jZWxsXFxcIikuZm9yRWFjaChjZWxsID0+IGNlbGwudGV4dENvbnRlbnQgPSBcXFwiQVxcXCIpOyAqL1xcclxcbi5jZWxsOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnLic7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDIzOCwgMjUyKVxcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zZWxlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlIHtcXHJcXG4gIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnYWJsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4udmFsaWQtZHJhZyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMjU1LCA1NSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgNjQsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLnNoaXAtcGxhY2VkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5zaGlwLXBsYWNlZDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzRlOGEwMjtcXHJcXG59XFxyXFxuXFxyXFxuLm9jY3VwaWVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDIzOCwgMjUyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9jY3VwaWVkOmhvdmVyIHtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlLnZlcnRpY2FsIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1wbGFjZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEzNiwgMTM2LCAwLjg2Myk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zdGFydC1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1taWRkbGUtaG9yaXpvbnRhbCB7XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWVuZC1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXN0YXJ0LXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbWlkZGxlLXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZW5kLXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwtdHJhbnNwYXJlbnQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBsYWNlZCAuY2VsbCB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAxMDIsIDcxLCAwLjMpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWFyZWEge1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuN3M7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtYXJlYS5nYW1lLWFjdGl2ZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5wMS5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrYWJsZSAuc2hpcCB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5wMS5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrYWJsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZXZlcnQ7XFxyXFxufVxcclxcblxcclxcbi5wMi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrYWJsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwwLDAsMC42KTtcXHJcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2VkOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIHZpc2liaWxpdHk6IHVuc2V0O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuL3V0aWxpdHlcIjtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGVsZW1lbnRzIGZvciBCYXR0bGVzaGlwLlxyXG4gKi9cclxuIGV4cG9ydCBjbGFzcyBCYXR0bGVzaGlwRWxlbWVudHMge1xyXG5cclxuICAjZGlhbG9nSG9sZGVyO1xyXG4gICNnYW1lQ29udGFpbmVyO1xyXG4gIGdhbWVNYW5hZ2VyO1xyXG4gICNjdXJyZW50RHJhZ2dlZFNoaXBJZDtcclxuICAjY3VycmVudERyYWdnZWRMZW5ndGg7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWVNYW5hZ2VyKSB7XHJcbiAgICB0aGlzLmdhbWVNYW5hZ2VyID0gZ2FtZU1hbmFnZXI7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIoKSB7XHJcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJ0aXRsZS1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gY29tcG9uZW50LmhlYWRpbmcoXCJCYXR0bGVzaGlwc1wiLCAxKTtcclxuICAgIGNvbnN0IGF1dGhvckxhYmVsID0gY29tcG9uZW50LnAoXCJieSBEYW4gVC5cIiwgMik7XHJcblxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKHRpdGxlTGFiZWwsIGF1dGhvckxhYmVsKTtcclxuXHJcbiAgICByZXR1cm4gdGl0bGVDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBnYW1lQXJlYSgpIHtcclxuICAgIHRoaXMuI2dhbWVDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZ2FtZS1hcmVhXCIpO1xyXG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImdhbWVib2FyZC1hcmVhXCIpO1xyXG4gICAgY29uc3QgY29udHJvbERpYWxvZ0NvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJjb250cm9scy1hcmVhXCIpO1xyXG5cclxuICAgIHRoaXMuI2dhbWVDb250YWluZXIuYXBwZW5kKGdhbWVib2FyZENvbnRhaW5lciwgY29udHJvbERpYWxvZ0NvbnRhaW5lcik7XHJcblxyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZCh0aGlzLiNnYW1lYm9hcmQoXCJQbGF5ZXJcIiwgXCJwMVwiKSwgdGhpcy4jZ2FtZWJvYXJkKFwiQ1BVXCIsIFwicDJcIikpO1xyXG5cclxuICAgIGNvbnRyb2xEaWFsb2dDb250YWluZXIuYXBwZW5kKHRoaXMuI2RpYWxvZygpLCB0aGlzLiNzaGlwUGxhY2VtZW50KCkpO1xyXG4gICAgY29udHJvbERpYWxvZ0NvbnRhaW5lci5hcHBlbmQodGhpcy4jc3RhcnRHYW1lUHJvbXB0KCkpO1xyXG5cclxuICAgIHRoaXMuZ2VuZXJhdGVEcmFnZ2FibGVTaGlwcygpO1xyXG4gICAgdGhpcy4jZW5hYmxlRHJhZ0FuZERyb3BPbkNlbGwoKTtcclxuXHJcbiAgICBjb250cm9sRGlhbG9nQ29udGFpbmVyLmFwcGVuZCh0aGlzLiNzdW1tYXJ5KCkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLiNnYW1lQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGVzIGEgY2xpY2thYmxlIGdyaWQgYmFzZWQgb24gdGhlIGdhbWUgbWFuYWdlcidzIGdhbWVib2FyZCBzaXplLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5ZXJOYW1lIDogdGhlIG5hbWUgb2YgdGhlIHBsYXllcjsgdXNlZCBhcyBhIGNsYXNzIG5hbWUgdG8gXHJcbiAgICogaWRlbnRpZnkgdGhlIGdhbWVib2FyZC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIDogQWRkaXRpb25hbCBjbGFzcyBuYW1lcyB0byBpZGVudGlmeSB0aGUgZ2FtZWJvYXJkIGJ5LlxyXG4gICAqL1xyXG4gICNnYW1lYm9hcmQocGxheWVyTmFtZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBjb21wb25lbnQuZGl2KFwiZ2FtZWJvYXJkXCIsIGNsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBnYW1lYm9hcmRHcmlkID0gY29tcG9uZW50LmRpdihcImdhbWVib2FyZC1ncmlkXCIpO1xyXG5cclxuICAgIGNvbnN0IGdyaWRTaXplID0gdGhpcy5nYW1lTWFuYWdlci5wbGF5ZXJzWzBdLmdhbWVib2FyZC5zaXplO1xyXG4gICAgY29uc3QgbnVtYmVyQ2VsbCA9IGNvbXBvbmVudC5kaXYoXCJjZWxsXCIsIFwibnVtYmVyaW5nXCIpO1xyXG5cclxuICAgIGdhbWVib2FyZEdyaWQucHJlcGVuZChjb21wb25lbnQuZGl2KFwiY2VsbFwiLCBcImJsYW5rXCIpKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgcm93IG51bWJlcmluZ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkU2l6ZTsgaSsrKSB7XHJcbiAgICAgIG51bWJlckNlbGwudGV4dENvbnRlbnQgPSBpICsgMTtcclxuICAgICAgZ2FtZWJvYXJkR3JpZC5hcHBlbmQobnVtYmVyQ2VsbC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZSBjb2x1bW4gbnVtYmVyaW5nIGFuZCBjZWxsc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkU2l6ZTsgaSsrKSB7XHJcbiAgICAgIG51bWJlckNlbGwudGV4dENvbnRlbnQgPSBpICsgMTtcclxuXHJcbiAgICAgIGdhbWVib2FyZEdyaWQuYXBwZW5kKG51bWJlckNlbGwuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JpZFNpemU7IGorKykge1xyXG4gICAgICAgIGxldCBjZWxsID0gY29tcG9uZW50LmRpdihcImNlbGxcIiwgXCJzZWxlY3RhYmxlXCIpO1xyXG4gICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBqO1xyXG4gICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgICBnYW1lYm9hcmRHcmlkLmFwcGVuZChjZWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdhbWVib2FyZC5hcHBlbmQoZ2FtZWJvYXJkR3JpZCk7XHJcblxyXG4gICAgLy8gQXBwbHkgaGVhZGVycyBmb3IgdGhlIGdhbWVib2FyZFxyXG4gICAgZ2FtZWJvYXJkLnByZXBlbmQoY29tcG9uZW50LmhlYWRpbmcocGxheWVyTmFtZSwgMiwgXCJnYW1lYm9hcmQtb3duZXJcIikpO1xyXG5cclxuICAgIHJldHVybiBnYW1lYm9hcmQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYSBkaWFsb2cgbWVzc2FnZSwgd2hpY2ggaXMgdXNlZCB0byBcclxuICAgKiBnaXZlIHRoZSB1c2VyIGRpcmVjdGlvbnMgb24gZWFjaCBwaGFzZSBvZiB0aGUgZ2FtZS5cclxuICAgKi9cclxuICAjZGlhbG9nKCkge1xyXG4gICAgbGV0IGRpYWxvZ0NvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJkaWFsb2dcIik7XHJcbiAgICBsZXQgZGlhbG9nTXNnID0gY29tcG9uZW50LnAoXCJXZWxjb21lLlwiLCBcImRpYWxvZy1tc2dcIik7XHJcbiAgICBkaWFsb2dDb250YWluZXIuYXBwZW5kKGRpYWxvZ01zZyk7XHJcblxyXG4gICAgdGhpcy4jZGlhbG9nSG9sZGVyID0gZGlhbG9nQ29udGFpbmVyO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIGRpYWxvZyBmb3IgdGhlIGJhdHRsZXNoaXAgZ2FtZS4gUHJlZmVyYWJseSwgdXNlIG1lc3NhZ2VzIGZyb20gdGhlXHJcbiAgICogZ2FtZW1hbmFnZXIgR0FNRV9TVEFURSBvYmplY3QuXHJcbiAgICogQHBhcmFtIHt9IG1lc3NhZ2UgXHJcbiAgICovXHJcbiAgc2V0RGlhbG9nKG1lc3NhZ2UpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlhbG9nLW1zZ1wiKS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYW4gaW52ZW50b3J5IG9mIHNoaXBzIGFuZCBsZXRzIHRoZW0gYmUgZHJhZ2dlZCBieSB0aGUgcGxheWVyLlxyXG4gICAqL1xyXG4gICNzaGlwUGxhY2VtZW50KCkge1xyXG4gICAgbGV0IHNoaXBJbnZlbnRvcnkgPSBjb21wb25lbnQuZGl2KFwic2hpcC1wbGFjZXJcIik7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IGNvbXBvbmVudC5oZWFkaW5nKFwiU2VsZWN0IFNoaXBcIiwgMyk7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gY29tcG9uZW50LmRpdihcInNoaXAtc2VsZWN0aW9uXCIpO1xyXG5cclxuICAgIHNoaXBJbnZlbnRvcnkuYXBwZW5kKGhlYWRlciwgc2VsZWN0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gc2hpcEludmVudG9yeTtcclxuICB9XHJcblxyXG4gIC8qKiBcclxuICAgKiBSZWdlbmVyYXRlIGRyYWdnYWJsZSBzaGlwcyB3aXRoaW4gLnNoaXAtc2VsZWN0aW9uLlxyXG4gICAqL1xyXG4gIGdlbmVyYXRlRHJhZ2dhYmxlU2hpcHMoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLiNnYW1lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1zZWxlY3Rpb25cIilcclxuICAgIHRoaXMuZ2FtZU1hbmFnZXIuc2hpcExlbmd0aHMuZm9yRWFjaCgoc2hpcExlbiwgaW5kZXgpID0+IHtcclxuICAgICAgbGV0IHNoaXAgPSBjb21wb25lbnQuZGl2KFwic2hpcFwiLCBcImRyYWdnYWJsZVwiKTtcclxuICAgICAgc2hpcC5pZCA9IGBwbGF5ZXItc2hpcCR7aW5kZXh9YDtcclxuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW47IGkrKykge1xyXG4gICAgICAgIGxldCBjZWxsID0gY29tcG9uZW50LmRpdihcImNlbGxcIik7XHJcbiAgICAgICAgc2hpcC5hcHBlbmQoY2VsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLiNzaGlwT25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgdGhpcy4jc2hpcE9uRHJhZ0VuZC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoc2hpcCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheSBkcm9wIGd1aWRlcyB3aGVuIGEgc2hpcCBpcyBiZWluZyBkcmFnZ2VkIG92ZXIgYSBnYW1lYm9hcmQuXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZSAtIGRyYWcgb3ZlciBldmVudC5cclxuICAgKi9cclxuICAjZGlzcGxheURyb3BHdWlkZXMoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgbGV0IGhvdmVyQ2VsbCA9IFV0aWxpdHkuZ2V0TWF0Y2hpbmdQYXJlbnQoZS50YXJnZXQsIFwiLnNlbGVjdGFibGVcIik7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWR9YCkuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuI2N1cnJlbnREcmFnZ2VkU2hpcElkfWApLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpKSB7XHJcbiAgICAgIC8vIGFwcGx5IHZlcnRpY2FsIGd1aWRlLlxyXG4gICAgICBsZXQgY29sID0gaG92ZXJDZWxsLmRhdGFzZXQuY29sO1xyXG4gICAgICBsZXQgY2VsbHNDb2wgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtY29sPVwiJHtjb2x9XCJdYCkpO1xyXG4gICAgICBsZXQgaW5kZXggPSBjZWxsc0NvbC5pbmRleE9mKGhvdmVyQ2VsbCk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggKyB0aGlzLiNjdXJyZW50RHJhZ2dlZExlbmd0aCA8PSBjZWxsc0NvbC5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIC8vIG5vdCBhIHZhbGlkIHBsYWNlbWVudC5cclxuICAgICAgICAgIGlmIChjZWxsc0NvbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJvY2N1cGllZFwiKVxyXG4gICAgICAgICAgICAmJiBjZWxsc0NvbFtpXS5kYXRhc2V0LnNoaXAgIT09IHRoaXMuI2N1cnJlbnREcmFnZ2VkU2hpcElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI3JlbW92ZURyYWdHdWlkZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjZWxsc0NvbFtpXS5jbGFzc0xpc3QuYWRkKFwidmFsaWQtZHJhZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGFwcGx5IGhvcml6b250YWwgZ3VpZGVcclxuICAgICAgbGV0IHJvdyA9IGhvdmVyQ2VsbC5kYXRhc2V0LnJvdztcclxuICAgICAgbGV0IGNlbGxzUm93ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLXJvdz1cIiR7cm93fVwiXWApKTtcclxuICAgICAgbGV0IGluZGV4ID0gY2VsbHNSb3cuaW5kZXhPZihob3ZlckNlbGwpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJob3ZlcmluZyBvdmVyIGluZGV4OiBcIiArIGluZGV4KTtcclxuXHJcbiAgICAgIGlmIChpbmRleCArIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoIDw9IGNlbGxzUm93Lmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgLy8gbm90IGEgdmFsaWQgcGxhY2VtZW50LlxyXG4gICAgICAgICAgaWYgKGNlbGxzUm93W2ldLmNsYXNzTGlzdC5jb250YWlucyhcIm9jY3VwaWVkXCIpXHJcbiAgICAgICAgICAgICYmIGNlbGxzUm93W2ldLmRhdGFzZXQuc2hpcCAhPT0gdGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWQpIHtcclxuICAgICAgICAgICAgdGhpcy4jcmVtb3ZlRHJhZ0d1aWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjZWxsc1Jvd1tpXS5jbGFzc0xpc3QuYWRkKFwidmFsaWQtZHJhZ1wiKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHtpbmRleCwgY3VycmVudERyYWdnZWRMZW5ndGgsIGl9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBkcmFnIGd1aWRlLlxyXG4gICAqL1xyXG4gICNyZW1vdmVEcmFnR3VpZGUoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVwiKVxyXG4gICAgLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkLWRyYWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFmdGVyIHRoZSB1c2VyIGRyb3BzIHRoZSBzaGlwLCBwbGFjZXMgdGhlIHNoaXAuXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZSAtIERyb3AgZXZlbnQuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgI3BsYWNlU2hpcE9uRHJvcChlKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZH1gKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgIC8vIG9ubHkgd2hlbiB0aGUgYXJlYSBpcyBhIHZhbGlkLWRyYWcgZG8gd2UgYWRkIGl0IGluLiBvdGhlcndpc2UsIG5vcGUuXHJcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInZhbGlkLWRyYWdcIikpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuI3JlbW92ZURyYWdHdWlkZSgpO1xyXG5cclxuICAgIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XHJcblxyXG4gICAgLy8gYmVmb3JlIG1vdmluZyB0aGUgc2hpcCwgZGV0ZXJtaW5lIGlmIGl0IGhhcyBiZWVuIHBsYWNlZCBhbHJlYWR5Li4uIFxyXG4gICAgLy8gdGhpcyBpcyB0cnVlIGlmIHRoZSBzaGlwIGlzIGluc2lkZSBhIHNlbGVjdGFibGUgY2VsbC5cclxuICAgIGxldCBsYXN0UGxhY2VkTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VsZWN0YWJsZSAjJHtpZH1gKTtcclxuXHJcbiAgICAvLyBpZiBzbyB3ZSBuZWVkIHRvIHJlbW92ZSBvY2N1cGllZCBmcm9tIHN1Y2ggY2VsbHMuXHJcbiAgICBpZiAobGFzdFBsYWNlZExvY2F0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgIGxldCBjZWxscztcclxuICAgICAgbGV0IHZlcnRpY2FsID0gbGFzdFBsYWNlZExvY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpO1xyXG5cclxuICAgICAgLy8gcGFyZW50Tm9kZSBpcyB0aGUgY2VsbC5cclxuICAgICAgbGFzdFBsYWNlZExvY2F0aW9uID0gbGFzdFBsYWNlZExvY2F0aW9uLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICBsZXQgY29sID0gbGFzdFBsYWNlZExvY2F0aW9uLmRhdGFzZXQuY29sO1xyXG4gICAgICAgIGNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLWNvbD1cIiR7Y29sfVwiXWApKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZW1vdmUgb2NjdXBpZWQgbWFya2luZyBmcm9tIHRob3NlIGNlbGxzLlxyXG4gICAgICAgIGxldCByb3cgPSBsYXN0UGxhY2VkTG9jYXRpb24uZGF0YXNldC5yb3c7XHJcbiAgICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaW5kZXggPSBjZWxscy5pbmRleE9mKGxhc3RQbGFjZWRMb2NhdGlvbik7XHJcblxyXG4gICAgICAvLyBjb2xvciB0aGUgc3Vic2VxdWVudCBjZWxscy5cclxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyB0aGlzLiNjdXJyZW50RHJhZ2dlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgIGNlbGxzW2ldLmRhdGFzZXQuc2hpcCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGxhY2VkQ2VsbCA9IGUudGFyZ2V0O1xyXG4gICAgLy8gbW92ZSB0aGUgc2hpcFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuY2xhc3NMaXN0LmFkZChcInNoaXAtcGxhY2VkXCIpO1xyXG4gICAgcGxhY2VkQ2VsbC5hcHBlbmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkpO1xyXG5cclxuICAgIGxldCB2ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpO1xyXG4gICAgbGV0IGNlbGxzO1xyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBsZXQgY29sID0gcGxhY2VkQ2VsbC5kYXRhc2V0LmNvbDtcclxuICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtY29sPVwiJHtjb2x9XCJdYCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZ2V0IHRoZSByb3csIGluZGV4LCBhbmQgcGxhY2UgdGhlcmVhZnRlciBvZiB0aGUgcGxhY2VkIGNlbGwuXHJcbiAgICAgIGxldCByb3cgPSBwbGFjZWRDZWxsLmRhdGFzZXQucm93O1xyXG4gICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke3Jvd31cIl1gKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluZGV4ID0gY2VsbHMuaW5kZXhPZihwbGFjZWRDZWxsKTtcclxuXHJcbiAgICAvLyBjb2xvciB0aGUgc3Vic2VxdWVudCBjZWxscy5cclxuICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIik7XHJcbiAgICAgIGNlbGxzW2ldLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFsbG93IHRoZSBzaGlwIHRvIGJlIHJvdGF0ZWQuXHJcbiAgICB0aGlzLiNhbGxvd1BsYWNlZFNoaXBSb3RhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udGFpbnMgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byBlbmFibGUgZHJhZyAnbicgZHJvcCBvbiB0aGUgZ2FtZWJvYXJkIHdpdGggcm90YXRpb24uXHJcbiAgICogV29ya3Mgd2l0aCB0aGUgZHJhZyBhbmQgZHJvcCBBUEksIHNvIGl0IHdvcmtzIHRvIGFzc2lnbiBjYWxsYmFja3MgdG8gdGhlIFxyXG4gICAqIGRyYWdnYWJsZSBpdGVtcywgYW5kIGFsbCB0aGUgZHJvcHBhYmxlIHpvbmUgaXQgcGVydGFpbnMgdG8uIEluIHRoaXMgY2FzZSxcclxuICAgKiB0aGUgc2hpcHMgYXJlIHRoZSBkcmFnZ2FibGVzLCBhbmQgdGhlIGRyb3Agem9uZXMgYXJlIGFsbCB0aGUgY2VsbHMgb2YgXHJcbiAgICogcGxheWVyIDEncyBnYW1lYm9hcmQuXHJcbiAgICovXHJcbiAgI2VuYWJsZURyYWdBbmREcm9wT25DZWxsKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAvLyB0aGlzLmFkZFNoaXBEcmFnSGFuZGxlcnMoKTtcclxuXHJcbiAgICAvLyBhbGwgY2VsbHMgdGhhdCBhcmUgc2VsZWN0YWJsZSBhcmUgZHJvcHBhYmxlIGFyZWFzLlxyXG4gICAgdGhpcy4jZ2FtZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVwiKS5mb3JFYWNoKGNlbGwgPT4ge1xyXG5cclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgc2VsZi4jZGlzcGxheURyb3BHdWlkZXMuYmluZChzZWxmKSk7XHJcbiAgICAgIC8vIHdoZW4gdGhlIGRyYWcgZWxlbWVudCBsZWF2ZXMgZHJvcHBhYmxlIHpvbmUsIHJlbW92ZSBhbGwgdmFsaWQgZHJhZ1xyXG4gICAgICAvLyBpdCdsbCBqdXN0IGJlIHJlY3JlYXRlZCBieSB2YWxpZC1kcmFnLlxyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgc2VsZi4jcmVtb3ZlRHJhZ0d1aWRlKTtcclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBzZWxmLiNwbGFjZVNoaXBPbkRyb3AuYmluZChzZWxmKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICNzaGlwT25EcmFnU3RhcnQoZSkge1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuaWQpO1xyXG5cclxuICAgIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoID0gZS50YXJnZXQuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICB0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZCA9IGUudGFyZ2V0LmlkID8/IGUudGFyZ2V0LmRhdGFzZXQuc2hpcDtcclxuICAgIC8vIGJsYW5rIGltYWdlXHJcbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoaW1nLCAwLCAwKTtcclxuICB9XHJcblxyXG4gICNzaGlwT25EcmFnRW5kKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWR9YClcclxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyBmb3Igc2hpcHMgdG8gYmUgcm90YXRlZDsgdGhpcyBpcyBpbnZva2VkIGVhY2ggdGltZSBhIHNoaXAgaXMgcGxhY2VkLFxyXG4gICAqIHRvIGFsbG93IHNoaXBzLCBvbiB0aGUgZ2FtZWJvYXJkLCB0byBiZSByb3RhdGVkLlxyXG4gICAqL1xyXG4gICNhbGxvd1BsYWNlZFNoaXBSb3RhdGlvbigpIHtcclxuICAgIGxldCBncmlkU2l6ZSA9IHRoaXMuZ2FtZU1hbmFnZXIucGxheWVyc1swXS5nYW1lYm9hcmQuZ3JpZC5sZW5ndGg7XHJcbiAgICAvLyBhbGxvdyByb3RhdGlvbiBvZiBwbGFjZWQgc2hpcHNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC5kcmFnZ2FibGUuc2hpcC1wbGFjZWRcIikuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgaWYgKHNoaXAub25jbGljayA9PT0gbnVsbCkge1xyXG4gICAgICAgIHNoaXAub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgIGxldCB2ZXJ0aWNhbE9uID0gc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgIGxldCBjZWxsID0gc2hpcC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwLmNoaWxkRWxlbWVudENvdW50O1xyXG5cclxuICAgICAgICAgIGxldCByb3dJbmRleCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpO1xyXG4gICAgICAgICAgbGV0IGNvbEluZGV4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbCk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coeyByb3dJbmRleCwgc2hpcExlbmd0aCwgZ3JpZFNpemUgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKHJvd0luZGV4ICsgc2hpcExlbmd0aCA+IGdyaWRTaXplIHx8IGNvbEluZGV4ICsgc2hpcExlbmd0aCA+IGdyaWRTaXplKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBjaGVjayBpZiBhbnkgc2hpcHMgYXJlIGluIHRoZSB3YXkgb2YgdGhlIHJvdGF0aW9uLlxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IHJvd0luZGV4ICsgMTsgaSA8IHJvd0luZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtpfVwiXWApKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBjb2xJbmRleDsgaiA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGNlbGxzW2pdLmNsYXNzTGlzdC5jb250YWlucyhcIm9jY3VwaWVkXCIpICYmIGNlbGxzW2pdLmRhdGFzZXQuc2hpcCAhPT0gc2hpcC5pZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IHByb2NlZWQuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgZW5vdWdoIHNwYWNlIHRvIG1vdmUgaXQgdmVydGljYWxseSwgYmFzZWQgb24gdGhlIHNoaXAgbGVuZ3RoLlxyXG4gICAgICAgICAgLy8gMSBubyBzaGlwcyBpbiB0aGUgd2F5XHJcbiAgICAgICAgICAvLyAyLndpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBnYW1lYm9hcmQuXHJcbiAgICAgICAgICAvLyBvbmx5IHRoZW4gZG8geW91IGFsbG93IHZlcnRpY2FsIGNsYXNzLlxyXG4gICAgICAgICAgY29uc29sZS5sb2coY2VsbCk7XHJcblxyXG4gICAgICAgICAgaWYgKHZlcnRpY2FsT24pIHtcclxuICAgICAgICAgICAgLy8gdmVydGljYWwgLT4gaG9yaXpvbnRhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93SW5kZXggKyAxOyBpIDwgcm93SW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKTtcclxuICAgICAgICAgICAgICAvLyBzdHJpcCB2ZXJ0aWNhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbEluZGV4ICsgMTsgaSA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gYWRkIGhvcml6b250YWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7aX1cIl1gKTtcclxuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IHNoaXAuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGhvcml6b250YWwgLT4gdmVydGljYWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbEluZGV4ICsgMTsgaSA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gcmVtb3ZlIGhvcml6b250YWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7aX1cIl1gKVxyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHJvd0luZGV4ICsgMTsgaSA8IHJvd0luZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gYWRkIHZlcnRpY2FsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtpfVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdYClcclxuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IHNoaXAuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyB0b2dnbGUgdmVydGljYWwgZm9yIHRoZSB2aWV3XHJcbiAgICAgICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgIC8vIHRoZW4sIGFsdGVyIHRoZSBvY2N1cGllZCBjbGFzcy5cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBkaXNhYmxlIHJvdGF0aW9uIGZvciBzaGlwcyB0aGF0IGFyZSBub3QgcGxhY2VkLlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLmRyYWdnYWJsZTpub3QoLnNoaXAtcGxhY2VkKVwiKS5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICBpZiAoc2hpcC5vbmNsaWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2hpcC5vbmNsaWNrID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGxhY2VzIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQgZ2l2ZW4gY29vcmRpbmF0ZXMuIFVzZWZ1bCBmb3IgQUkuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2wgXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCBcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsYXllcjIgLSBQbGFjZSBzaGlwcyBvbiBwbGF5ZXIgMidzIGdhbWVib2FyZD9cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSB0aGUgSUQgdGhlIHNoaXAgc2hvdWxkIGJlIGlkZW50aWZpZWQgYnkuXHJcbiAgICovXHJcbiAgc3RhdGljIHBsYWNlU2hpcFZpYUNvb3JkaW5hdGUobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwsIHBsYXllcjIgPSB0cnVlLCBpZCkge1xyXG4gICAgY29uc29sZS5sb2coe2xlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsLCBwbGF5ZXIyLCBpZH0pO1xyXG4gICAgbGV0IHNlbGVjdG9yO1xyXG4gICAgbGV0IGdhbWVib2FyZDsgXHJcbiAgICBsZXQgY3B1VGFnID0gXCJjcHUtc2hpcC1wbGFjZWRcIjtcclxuXHJcbiAgICBpZiAocGxheWVyMikge1xyXG4gICAgICBzZWxlY3RvciA9IFwiLnAyLmdhbWVib2FyZFwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWxlY3RvciA9IFwiLnAxLmdhbWVib2FyZFwiXHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtzZWxlY3Rvcn1gKTtcclxuXHJcbiAgICBsZXQgb3JpZ2luQ2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGAuc2VsZWN0YWJsZVtkYXRhLXJvdz0nJHtyb3d9J11bZGF0YS1jb2w9JyR7Y29sfSddYCk7XHJcbiAgICBvcmlnaW5DZWxsLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG5cclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgbGV0IHJvd3MgPSBBcnJheS5mcm9tKGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKGAuc2VsZWN0YWJsZVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3cgKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJvd3NbaV0uY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIsIGNwdVRhZyk7XHJcbiAgICAgICAgcm93c1tpXS5kYXRhc2V0LnNoaXAgPSBpZDtcclxuXHJcbiAgICAgICAgc3dpdGNoKGkpIHtcclxuICAgICAgICAgIGNhc2Ugcm93OiAvLyBzdGFydFxyXG4gICAgICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0YXJ0LXZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2Ugcm93ICsgbGVuZ3RoIC0gMTogLy8gZW5kXHJcbiAgICAgICAgICAgIHJvd3NbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtZW5kLXZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6IC8vIG1pZFxyXG4gICAgICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW1pZGRsZS12ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY29scyA9IEFycmF5LmZyb20oZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoYC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgICBcclxuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29sc1tpXS5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIiwgY3B1VGFnKTtcclxuICAgICAgICBjb2xzW2ldLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG5cclxuICAgICAgICBzd2l0Y2goaSkge1xyXG4gICAgICAgICAgY2FzZSBjb2w6IC8vIHN0YXJ0XHJcbiAgICAgICAgICAgIGNvbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtc3RhcnQtaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIGNvbCArIGxlbmd0aCAtIDE6IC8vIGVuZFxyXG4gICAgICAgICAgICBjb2xzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVuZC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6IC8vIG1pZFxyXG4gICAgICAgICAgICBjb2xzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW1pZGRsZS1ob3Jpem9udGFsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFza3MgdXNlciBmb3IgdGhlaXIgbmFtZSBhbmQgdG8gc3RhcnQgdGhlIGdhbWUuLi4gb25seSB3aGVuIHRoZSBzaGlwIHBsYWNlbWVudCBjb250YWluZXIgaXMgZW1wdHlcclxuICAgKiB3aWxsIHRoZSBzdGFydCBnYW1lIGJ1dHRvbiB1bmxvY2suXHJcbiAgICovXHJcbiAgI3N0YXJ0R2FtZVByb21wdCgpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3Qgc3RhcnRHYW1lRm9ybSA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJzdGFydC1nYW1lLXByb21wdFwiKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJOYW1lTGFiZWwsIHBsYXllck5hbWVGaWVsZF0gPSBjb21wb25lbnQuZm9ybUlucHV0KFwiTmFtZVwiLCBcImlucHV0XCIsIFwicDEtbmFtZVwiLCBcInAxLW5hbWVcIik7XHJcbiAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBjb21wb25lbnQuYnV0dG9uKFwiU3RhcnQgR2FtZSFcIiwgXCJzdGFydC1nYW1lLWJ1dHRvblwiKTtcclxuICAgIGNvbnN0IGVycm9yRmllbGQgPSBjb21wb25lbnQucChcIkVycm9yIEZpZWxkIEhlcmVcIiwgXCJmb3JtLWVycm9yLWZpZWxkXCIpO1xyXG5cclxuICAgIHBsYXllck5hbWVGaWVsZC52YWx1ZSA9IFwiQ29tbWFuZGVyXCI7XHJcbiAgICBwbGF5ZXJOYW1lRmllbGQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIHN0YXJ0R2FtZUZvcm0uYXBwZW5kKHBsYXllck5hbWVMYWJlbCwgcGxheWVyTmFtZUZpZWxkLCBzdGFydEdhbWVCdXR0b24sIGVycm9yRmllbGQpO1xyXG5cclxuICAgIHN0YXJ0R2FtZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgc3RhcnRHYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2VsZi5nYW1lTWFuYWdlci5zdGFydEdhbWUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IERPTU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy4jY2hlY2tBbGxTaGlwc1BsYWNlZCk7XHJcbiAgICBET01PYnNlcnZlci5vYnNlcnZlKHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5zaGlwLXNlbGVjdGlvblwiKSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG5cclxuICAgIHJldHVybiBzdGFydEdhbWVGb3JtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFsbCBzaGlwcyBiZWVuIHBsYWNlZD8gSWYgc28sIHVubG9ja3MgdGhlIGdhbWUgYnV0dG9uLiBVc2VkIHdpdGhcclxuICAgKiBNdXRhdGlvbk9ic2VydmVyLlxyXG4gICAqL1xyXG4gICNjaGVja0FsbFNoaXBzUGxhY2VkKG11dGF0ZWQpIHtcclxuICAgIGxldCBzaGlwc1JlbWFpbmluZyA9IG11dGF0ZWRbMF0udGFyZ2V0LmNoaWxkRWxlbWVudENvdW50O1xyXG4gICAgaWYgKHNoaXBzUmVtYWluaW5nID4gMCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWUtYnV0dG9uXCIpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZS1idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3dzIGEgc3VtbWFyeS4gVG8gYmUgdXNlZCBhZnRlciB0aGUgZ2FtZSBoYXMgZmluaXNoZWQuXHJcbiAgICovXHJcbiAgI3N1bW1hcnkoKSB7XHJcbiAgICBjb25zdCBzdW1tYXJ5ID0gY29tcG9uZW50LmRpdihcInN1bW1hcnktc2NyZWVuXCIpO1xyXG4gICAgY29uc3QgdmljdG9yeU1zZyA9IGNvbXBvbmVudC5wKGBHYW1lIE92ZXIhIFdpbm5lcjogYCwgXCJ2aWN0b3J5LW1lc3NhZ2VcIik7XHJcbiAgICBjb25zdCB3aW5uZXIgPSBjb21wb25lbnQuc3BhbihcIiVcIiwgXCJ3aW5uZXJcIik7XHJcblxyXG4gICAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwic3VtbWFyeS1zdGF0aXN0aWNzXCIpO1xyXG4gICAgY29uc3Qgc3RhdHNIZWFkaW5nID0gY29tcG9uZW50LmhlYWRpbmcoXCJHYW1lIFN0YXRpc3RpY3M6IFwiLCAyLCBcImhlYWRlclwiKTtcclxuICAgIGNvbnN0IHN0YXRzQWNjdXJhY3kgPSBjb21wb25lbnQucChcIkFjY3VyYWN5OiBcIiwgXCJhY2N1cmFjeVwiKTtcclxuICAgIGNvbnN0IHAxQWNjdXJhY3kgPSBjb21wb25lbnQuc3BhbihcIi0tJVwiLCBcInAxLWFjY3VyYWN5LW1ldHJpY1wiKTtcclxuICAgIGNvbnN0IHAyQWNjdXJhY3kgPSBjb21wb25lbnQuc3BhbihcIi0tJVwiLCBcInAyLWFjY3VyYWN5LW1ldHJpY1wiKTtcclxuXHJcbiAgICBjb25zdCBwbGF5QWdhaW4gPSBjb21wb25lbnQuYnV0dG9uKFwiUGxheSBBZ2FpblwiLCBcInBsYXktYWdhaW5cIik7XHJcblxyXG4gICAgdmljdG9yeU1zZy5hcHBlbmQod2lubmVyKTtcclxuXHJcbiAgICBzdGF0c0NvbnRhaW5lci5hcHBlbmQoc3RhdHNIZWFkaW5nLFxyXG4gICAgICBzdGF0c0FjY3VyYWN5LCBwMUFjY3VyYWN5LCBwMkFjY3VyYWN5KTtcclxuXHJcbiAgICBzdW1tYXJ5LmFwcGVuZCh2aWN0b3J5TXNnLCB3aW5uZXIsIHN0YXRzQ29udGFpbmVyLCBwbGF5QWdhaW4pO1xyXG4gICAgICBcclxuICAgIHJldHVybiBzdW1tYXJ5O1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi91dGlsaXR5XCI7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IGNsYXNzLiBDb250YWlucyB2YXJpb3VzIERPTSBlbGVtZW50cy5cclxuICogQXV0aG9yOiBkYXRyaW5vblxyXG4gKiBWZXJzaW9uOiAxLjQgKFdlYXRoZXIpXHJcbiAqL1xyXG5cclxuY2xhc3MgQ29tcG9uZW50IHtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDYwMHB4KVwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIGEgYmFzaWMgSFRNTCBza2VsZXRvbiBmb3IgdGhlIHdlYiBwYWdlLCBnZW5lcmF0aW5nIGEgaGVhZGVyLFxyXG4gICAqIG1haW4sIGFuZCBzdGlja3kgZm9vdGVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSBoZWFkZXJUaXRsZSAtIFdoYXQgdGhlIHdlYiBwYWdlIGlzIGNhbGxlZC5cclxuICAgKiBAcGFyYW0ge2Jvb2x9IGVtcHR5SGVhZGVyIC0gU2hvdWxkIHRoZSBoZWFkZXIgdXNlIGEgZGVmYXVsdCBzdHJ1Y3R1cmU/XHJcbiAgICogVGhlIGRlZmF1bHQgc3RydWN0dXJlIGxvb2tzIGxpa2UgWyBMb2dvIHwgfCB8IHwgTmF2aWdhdGlvbiBMaW5rc11cclxuICAgKiBAcmV0dXJucyAtIEFuIGFycmF5IGNvbnRhaW5pbmcgcmVmZXJlbmNlcyB0byB0aGUgZ2VuZXJhdGVkIGhlYWRlciwgbWFpbiwgYW5kIGZvb3Rlci5cclxuICAgKi9cclxuICBpbml0aWFsaXplU3RydWN0dXJlKFxyXG4gICAgaGVhZGVyVGl0bGUsXHJcbiAgICBlbXB0eUhlYWRlciA9IGZhbHNlLFxyXG4gICAgY3JlYXRlTW9udGgsXHJcbiAgICBnaXRodWJMaW5rXHJcbiAgKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IG1haW5XcmFwcGVyID0gdGhpcy5kaXYoXCJjb250ZW50XCIpO1xyXG4gICAgbGV0IGhlYWRlcjtcclxuICAgIGlmIChlbXB0eUhlYWRlcikge1xyXG4gICAgICBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyID0gdGhpcy5oZWFkZXIoaGVhZGVyVGl0bGUpO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBjb25zdCBmb290ZXIgPSB0aGlzLmZvb3RlcihjcmVhdGVNb250aCwgZ2l0aHViTGluayk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICAgIG1haW5XcmFwcGVyLmFwcGVuZChoZWFkZXIsIG1haW4pO1xyXG4gICAgYm9keS5hcHBlbmQobWFpbldyYXBwZXIsIGZvb3Rlcik7XHJcblxyXG4gICAgcmV0dXJuIFtoZWFkZXIsIG1haW4sIGZvb3Rlcl07XHJcbiAgfVxyXG5cclxuICBjb250ZW50KCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZChtYWluKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGhlYWRlcih0aXRsZSkge1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBsZXQgdGl0bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuXHJcbiAgICBtZW51QnV0dG9uLmlkID0gXCJtZW51LWJ1dHRvblwiO1xyXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYmFyc1wiLCBcIm5vLWRpc3BsYXlcIik7XHJcblxyXG4gICAgdGhpcy5tcWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBpdCBiaWdnZXIgdGhhbiB0aGUgcXVlcnkgcnVsZS5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1pbi1vdXRcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgcHJlc3NlZC5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNsaWRlLWluLW91dFwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG4gICAgLy8gaGVhZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aW1nfSlgO1xyXG5cclxuICAgIHRpdGxlRWxlbS5pZCA9IFwicGFnZS10aXRsZVwiO1xyXG4gICAgdGl0bGVFbGVtLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgdGl0bGVFbGVtLmluc2VydEJlZm9yZShtZW51QnV0dG9uLCB0aXRsZUVsZW0uZmlyc3RDaGlsZCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kKHRpdGxlRWxlbSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuICB9XHJcblxyXG4gIG5hdmJhciguLi5saW5rcykge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gICAgbmF2LmlkID0gXCJuYXZiYXJcIjtcclxuICAgIGxpbmtDb250YWluZXIuaWQgPSBcIm5hdmJhci1idXR0b25zLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGZvciAobGV0IGxpbmsgb2YgbGlua3MpIHtcclxuICAgICAgY29uc3QgbGlua0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgY29uc3QgbGlua0FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cclxuICAgICAgbGlua0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWJ1dHRvblwiKTtcclxuXHJcbiAgICAgIGxpbmtBbmNob3IuaWQgPSBgbmF2bGluay0ke2xpbmsucmVwbGFjZShcIiBcIiwgXCItXCIpLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgbGlua0FuY2hvci50ZXh0Q29udGVudCA9IGxpbms7XHJcbiAgICAgIGxpbmtBbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XHJcblxyXG4gICAgICBsaW5rQnV0dG9uLmFwcGVuZChsaW5rQW5jaG9yKTtcclxuICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmQobGlua0J1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2LmFwcGVuZChsaW5rQ29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG4gIH1cclxuXHJcbiAgYmFubmVyKHRleHQsIGltZykge1xyXG4gICAgbGV0IGJhbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcblxyXG4gICAgYmFubmVyQ29udGFpbmVyLmlkID0gXCJiYW5uZXJcIjtcclxuICAgIGJhbm5lci5pZCA9IFwiYmFubmVyLWltYWdlXCI7XHJcbiAgICBjYXB0aW9uLmlkID0gXCJiYW5uZXItY2FwdGlvblwiO1xyXG5cclxuICAgIGJhbm5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1nfSlgO1xyXG5cclxuICAgIGNhcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIGJhbm5lckNvbnRhaW5lci5hcHBlbmQoYmFubmVyLCBjYXB0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gYmFubmVyQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyKGNyZWF0ZU1vbnRoLCBnaXRodWJMaW5rKSB7XHJcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG5cclxuICAgIGxldCB0ZXh0ID0gYENyZWF0ZWQgaW4gJHtjcmVhdGVNb250aH0gMjAyMS4gT2RpbiBQcm9qZWN0IHggRGFuIFQuYDtcclxuICAgIGxldCBnaXRodWJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBsZXQgZ2hJY29uID0gdGhpcy5mYUljb24oXCJmYWJcIiwgXCJmYS1naXRodWItc3F1YXJlXCIsIFwiaWNvblwiKTtcclxuXHJcbiAgICBnaXRodWJFbGVtLmFwcGVuZChnaEljb24pO1xyXG4gICAgZ2l0aHViRWxlbS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWdpdGh1Yi1pY29uXCIpO1xyXG4gICAgZ2l0aHViRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGdpdGh1YkxpbmspO1xyXG4gICAgZ2l0aHViRWxlbS5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcbiAgICBnaXRodWJFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBwLmFwcGVuZChnaXRodWJFbGVtKTtcclxuICAgIGZvb3Rlci5hcHBlbmQocCk7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggbGFyZ2VyLCBlbWJvbGRlbmVkLCB0ZXh0LFxyXG4gICAqIHNpbWlsYXIgdG8gYSBwdWxsIHF1b3RlIGluIGEgbWFnYXppbmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbXNnIHtzdHJpbmd9IFRleHQgdG8gaW5jbHVkZSBpbiB0aGUgYmxvY2sgcXVvdGVcclxuICAgKi9cclxuICBwdWxscXVvdGUobXNnKSB7XHJcbiAgICBsZXQgcHVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcclxuICAgIHB1bGwudGV4dENvbnRlbnQgPSBtc2c7XHJcblxyXG4gICAgcHVsbC5jbGFzc0xpc3QuYWRkKFwicHVsbC1xdW90ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gcHVsbDtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24oaWQpIHtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBlbGVtZW50LmlkID0gaWQ7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHRleHQgaGVhZGluZyBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSB0ZXh0IC0gVGhlIGxhYmVsIGZvciB0aGUgaGVhZGVyLlxyXG4gICAqIEBwYXJhbSB7Kn0gbGV2ZWwgLSBUaGUgbGV2ZWwgb2YgaGVhZGVyLlxyXG4gICAqL1xyXG4gIGhlYWRpbmcodGV4dCwgbGV2ZWwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGxldmVsIDwgMSB8fCBsZXZlbCA+IDYpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXCJIZWFkaW5nIGxldmVscyBjYW4gb25seSBiZSBiZXR3ZWVuIDEgdG8gNiFcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaCR7bGV2ZWx9YCk7XHJcblxyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgcCh0ZXh0LCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpZiAoY2xhc3NOYW1lLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIHAuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBwO1xyXG4gIH1cclxuXHJcbiAgaW1nKHVybCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICBpbWFnZS5zcmMgPSB1cmw7XHJcblxyXG4gICAgcmV0dXJuIGltYWdlO1xyXG4gIH1cclxuXHJcbiAgZGl2KC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIHJldHVybiBkaXY7XHJcbiAgfVxyXG5cclxuICBidXR0b24obGFiZWwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGJhc2ljIHRhYmxlIHdpdGggc2luZ2xlLWNlbGwgY29sdW1ucyBhbmQgcm93cywgYmFzZWQgb24gdGhlIGltcG9ydGVkIGZpbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Nzdn0gZGF0YSAtIERhdGEgdG8gdHVybiBpbnRvIGEgdGFibGUuIFBsZWFzZSB1c2Ugd2VicGFjayB0byBpbXBvcnQgLmNzdiBmaWxlcy5cclxuICAgKi9cclxuICB0YWJsZShpZCA9IFwiXCIsIGRhdGEpIHtcclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIHRhYmxlLmlkID0gaWQ7XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgYSB0YWJsZSBoZWFkZXIgcm93LlxyXG4gICAgbGV0IHRhYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgbGV0IHRhYmxlSGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGNvbCBvZiBPYmplY3Qua2V5cyhkYXRhWzBdKSkge1xyXG4gICAgICBsZXQgY29sQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgY29sQ2VsbC50ZXh0Q29udGVudCA9IGNvbDtcclxuXHJcbiAgICAgIHRhYmxlSGVhZGVyUm93LmFwcGVuZChjb2xDZWxsKTtcclxuICAgIH1cclxuICAgIHRhYmxlSGVhZGVyLmFwcGVuZCh0YWJsZUhlYWRlclJvdyk7XHJcblxyXG4gICAgdGFibGUuYXBwZW5kKHRhYmxlSGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAvLyBHZW5lcmF0ZSB0YWJsZSByb3dzLlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0cm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICBmb3IgKGxldCBwcm9wIGluIGRhdGFbaV0pIHtcclxuICAgICAgICBsZXQgdGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblxyXG4gICAgICAgIHRjZWxsLnRleHRDb250ZW50ID0gZGF0YVtpXVtwcm9wXTtcclxuICAgICAgICB0cm93LmFwcGVuZCh0Y2VsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYmxlQm9keS5hcHBlbmQodHJvdyk7XHJcbiAgICB9XHJcbiAgICB0YWJsZS5hcHBlbmQodGFibGVCb2R5KTtcclxuXHJcbiAgICByZXR1cm4gdGFibGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBmb250IGF3ZXNvbWUgaWNvbi5cclxuICAgKi9cclxuICBmYUljb24oY2F0ZWdvcnksIG5hbWUsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGZhc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGZhc0ljb24uY2xhc3NMaXN0LmFkZChjYXRlZ29yeSwgbmFtZSk7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIGZhc0ljb24uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYXNJY29uO1xyXG4gIH1cclxuXHJcbiAgc3Bhbih0ZXh0Q29udGVudCA9IG51bGwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGlmIChjbGFzc05hbWUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG5cclxuICAgIHJldHVybiBzcGFuO1xyXG4gIH1cclxuXHJcbiAgZm9ybUlucHV0KGxhYmVsVGV4dCwgdHlwZSwgaW5wdXRJZCwgbmFtZSkge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQuaWQgPSBpbnB1dElkO1xyXG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XHJcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCBpbnB1dF07XHJcbiAgfVxyXG5cclxuICBkcm9wZG93bihsYWJlbFRleHQsIG5hbWUsIGlucHV0SWQsIC4uLnZhbHVlcykge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dElkKTtcclxuXHJcbiAgICBmb3IgKGxldCB2YWwgb2YgdmFsdWVzKSB7XHJcbiAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIGVudHJ5LnZhbHVlID0gdmFsO1xyXG4gICAgICBpZiAoaXNOYU4odmFsKSAmJiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSB2YWxbMF0udG9VcHBlckNhc2UoKSArIHZhbC5zbGljZSgxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IHZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZWN0LmFwcGVuZChlbnRyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgc2VsZWN0XTtcclxuICB9XHJcblxyXG4gIHRleHRBcmVhKGxhYmVsVGV4dCwgbmFtZSwgaW5wdXRJZCkge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgdGEuaWQgPSBpbnB1dElkO1xyXG4gICAgdGEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCB0YV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBjb25maXJtIG1vZGFsLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSBjbGFzc05hbWUgLSBDbGFzc2VzIHRoZSBtb2RhbCBzaG91bGQgYmVsb25nIHRvLlxyXG4gICAqIEBwYXJhbSB7Kn0gdGl0bGUgLSBUaGUgdGl0bGUgYXBwZWFyaW5nIG9uIHRoZSBtb2RhbC5cclxuICAgKiBAcGFyYW0geyp9IG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSBhcHBlYXJpbmcgb24gdGhlIG1vZGFsLlxyXG4gICAqIEBwYXJhbSB7Kn0gcG9zaXRpdmVCdXR0b25MYWJlbCAtIFRleHQgZm9yIHRoZSBPSyBidXR0b24uXHJcbiAgICogQHBhcmFtIHsqfSBuZWdhdGl2ZUJ1dHRvbkxhYmVsIC0gVGV4dCBmb3IgdGhlIGNhbmNlbCBidXR0b24uXHJcbiAgICogQHBhcmFtIHsqfSBwb3NpdGl2ZUNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gcnVuIGlmIE9LIGlzIHByZXNzZWQuXHJcbiAgICogQHBhcmFtIHsqfSBuZWdhdGl2ZUNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gcnVuIGlmIGNhbmNlbCBpcyBwcmVzc2VkLiAnbnVsbCcgYnlcclxuICAgKiBkZWZhdWx0LCB3aGljaCB0aGVuIGp1c3QgY2xvc2VzIHRoZSBtb2RhbC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIC0gUmV0dXJucyB0aGUgZ2VuZXJhdGVkIG1vZGFsIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgY29uZmlybU1vZGFsKFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGUsXHJcbiAgICBtZXNzYWdlLFxyXG4gICAgcG9zaXRpdmVCdXR0b25MYWJlbCxcclxuICAgIG5lZ2F0aXZlQnV0dG9uTGFiZWwsXHJcbiAgICBwb3NpdGl2ZUNhbGxiYWNrLFxyXG4gICAgbmVnYXRpdmVDYWxsYmFjayA9IG51bGxcclxuICApIHtcclxuICAgIGxldCBtb2RhbFdyYXBwZXIgPSB0aGlzLmRpdigpO1xyXG4gICAgbW9kYWxXcmFwcGVyLmlkID0gXCJwcm9tcHQtd3JhcHBlclwiO1xyXG4gICAgbGV0IG1vZGFsID0gdGhpcy5kaXYoY2xhc3NOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUhlYWRlciA9IHRoaXMuaGVhZGluZyh0aXRsZSwgMSwgXCJtb2RhbC1oZWFkZXJcIik7XHJcbiAgICBjb25zdCBtZXNzYWdlUGFyYWdyYXBoID0gdGhpcy5wYXJhZ3JhcGgobWVzc2FnZSwgXCJtb2RhbC1kaWFsb2dcIik7XHJcbiAgICBjb25zdCBwb3NpdGl2ZUJ1dHRvbiA9IHRoaXMuYnV0dG9uKHBvc2l0aXZlQnV0dG9uTGFiZWwsIFwibW9kYWwtY29uZmlybVwiKTtcclxuICAgIGNvbnN0IG5lZ2F0aXZlQnV0dG9uID0gdGhpcy5idXR0b24obmVnYXRpdmVCdXR0b25MYWJlbCwgXCJtb2RhbC1jYW5jZWxcIik7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uU2VjdGlvbiA9IHRoaXMuZGl2KFwibW9kYWwtYnV0dG9uLWFyZWFcIik7XHJcblxyXG4gICAgaWYgKG5lZ2F0aXZlQ2FsbGJhY2sgPT09IG51bGwpIHtcclxuICAgICAgbmVnYXRpdmVDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5lZ2F0aXZlIHByZXNzZWQuXCIpO1xyXG4gICAgICAgIG1vZGFsV3JhcHBlci5yZW1vdmUoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwb3NpdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9zaXRpdmVDYWxsYmFjayk7XHJcbiAgICBwb3NpdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgcG9zaXRpdmVDYWxsYmFjayhlKTtcclxuICAgICAgbW9kYWxXcmFwcGVyLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBuZWdhdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmVnYXRpdmVDYWxsYmFjayk7XHJcblxyXG4gICAgYnV0dG9uU2VjdGlvbi5hcHBlbmQocG9zaXRpdmVCdXR0b24sIG5lZ2F0aXZlQnV0dG9uKTtcclxuICAgIG1vZGFsLmFwcGVuZCh0aXRsZUhlYWRlciwgbWVzc2FnZVBhcmFncmFwaCwgYnV0dG9uU2VjdGlvbik7XHJcbiAgICBtb2RhbFdyYXBwZXIuYXBwZW5kKG1vZGFsKTtcclxuXHJcbiAgICAvLyBzdHlsaW5nIG1vdmVkIHRvIC5jc3MgcGFnZS5cclxuXHJcbiAgICByZXR1cm4gbW9kYWxXcmFwcGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheSBhIGJyaWVmLCB1bm9idHJ1c2l2ZSBwb3AtdXAgbWVzc2FnZSBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4uXHJcbiAgICogQHBhcmFtIHsqfSB0ZXh0Q29udGVudCAtIFRoZSB0ZXh0IHRoZSBtZXNzYWdlIHNob3VsZCBkaXNwbGF5LlxyXG4gICAqIEBwYXJhbSB7Kn0gZHVyYXRpb24gLSBUaGUgZHVyYXRpb24gb2YgdGhlIG1lc3NhZ2UgaW4gc2Vjb25kcy5cclxuICAgKi9cclxuICB0b2FzdCh0ZXh0Q29udGVudCwgZHVyYXRpb24pIHtcclxuICAgIGxldCB0b2FzdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgdG9hc3RNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcclxuICAgIHRvYXN0Qm94LmNsYXNzTGlzdC5hZGQoXCJ0b2FzdFwiKTtcclxuICAgIHRvYXN0TWVzc2FnZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgdG9hc3RNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJ0b2FzdC1tZXNzYWdlXCIpO1xyXG5cclxuICAgIHRvYXN0Qm94LmFwcGVuZCh0b2FzdE1lc3NhZ2UpO1xyXG5cclxuICAgIGxldCB0b2FzdEJveENzcyA9IFwicG9zaXRpb246IGZpeGVkOyBib3R0b206IDEwdmg7XCI7XHJcbiAgICB0b2FzdEJveENzcyArPSBcIndpZHRoOiAxMDB2dztcIjtcclxuICAgIHRvYXN0Qm94Q3NzICs9IGBhbmltYXRpb246IGZhZGUtaW4tb3V0ICR7ZHVyYXRpb259cztgO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gXCJ6LWluZGV4OiA5OTk5O1wiO1xyXG5cclxuICAgIGxldCB0b2FzdE1lc3NhZ2VDc3MgPVxyXG4gICAgICBcIm1hcmdpbjogMCBhdXRvOyB3aWR0aDogMzAwcHg7IGRpc3BsYXk6IGJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1wiO1xyXG4gICAgdG9hc3RNZXNzYWdlQ3NzICs9XHJcbiAgICAgIFwidGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgYm9yZGVyLXJhZGl1czogNXB4O1wiO1xyXG4gICAgdG9hc3RNZXNzYWdlQ3NzICs9IFwiY29sb3I6IHdoaXRlO1wiO1xyXG5cclxuICAgIHRvYXN0Qm94LnN0eWxlLmNzc1RleHQgPSB0b2FzdEJveENzcztcclxuICAgIHRvYXN0TWVzc2FnZS5zdHlsZS5jc3NUZXh0ID0gdG9hc3RNZXNzYWdlQ3NzO1xyXG5cclxuICAgIHRvYXN0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xyXG4gICAgICB0b2FzdEJveC5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRvYXN0Qm94KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHNlYXJjaCBmaWVsZCB3aXRoIGEgc2VhcmNoIGJ1dHRvbi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxhY2Vob2xkZXIgLSBBZHZpY2UgdG8gZ2l2ZSBpbiBzZWFyY2ggZmllbGQuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgc2VhcmNoKHBsYWNlaG9sZGVyID0gXCJTZWFyY2hcIikge1xyXG4gICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcInNlYXJjaC1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBzZWFyY2hGaWVsZFdyYXBwZXIgPSB0aGlzLmRpdihcInNlYXJjaC1maWVsZC13cmFwcGVyXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoRmllbGQgPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcInNlYXJjaC1maWVsZFwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEljb24gPSB0aGlzLmZhSWNvbihcImZhc1wiLCBcImZhLXNlYXJjaFwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IHRoaXMuYnV0dG9uKFwiXCIsIFwic2VhcmNoXCIpO1xyXG5cclxuICAgIHNlYXJjaENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XHJcbiAgICBzZWFyY2hGaWVsZFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBzZWFyY2hGaWVsZC50eXBlID0gXCJzZWFyY2hcIjtcclxuICAgIHNlYXJjaEZpZWxkLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKTtcclxuICAgIHNlYXJjaEZpZWxkLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgc2VhcmNoQnV0dG9uLmFwcGVuZChzZWFyY2hJY29uKTtcclxuICAgIHNlYXJjaEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xyXG5cclxuICAgIHNlYXJjaEZpZWxkV3JhcHBlci5hcHBlbmQoc2VhcmNoRmllbGQpO1xyXG4gICAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZChzZWFyY2hGaWVsZFdyYXBwZXIsIHNlYXJjaEJ1dHRvbik7XHJcbiAgICByZXR1cm4gc2VhcmNoQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgc2VhcmNoIGZpZWxkIGZvciBsb2NhdGlvbnMsIHNvIGl0IGluY2x1ZGVzIGEgc2VhcmNoIGZpZWxkIHdpdGggXHJcbiAgICogYSBsb2NhdGlvbiBidXR0b24uXHJcbiAgICovXHJcbiAgZ2Vvc2VhcmNoKHBsYWNlaG9sZGVyPVwiXCIpIHtcclxuICAgIGNvbnN0IHNlYXJjaEVsZW0gPSB0aGlzLnNlYXJjaChwbGFjZWhvbGRlcik7XHJcbiAgICBjb25zdCBsb2NhdGlvbkJ1dHRvbiA9IHRoaXMuYnV0dG9uKFwiXCIsIFwibG9jYXRpb25cIik7XHJcbiAgICBjb25zdCBsb2NhdGlvbkljb24gPSB0aGlzLmZhSWNvbihcImZhc1wiLCBcImZhLW1hcC1tYXJrZXItYWx0XCIpXHJcblxyXG4gICAgbG9jYXRpb25CdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGxvY2F0aW9uQnV0dG9uLmFwcGVuZChsb2NhdGlvbkljb24pO1xyXG4gICAgbG9jYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFV0aWxpdHkuZ2V0R2VvbG9jYXRpb24pO1xyXG4gICAgc2VhcmNoRWxlbS5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKS5iZWZvcmUobG9jYXRpb25CdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBzZWFyY2hFbGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHRvb2x0aXAtZXNxdWUgbWVzc2FnZSB3aGljaCBob3ZlcnMgYmVsb3csIHJlbGF0aXZlIHRvIGFuIGVsZW1lbnQncyBwb3NpdGlvbiwgXHJcbiAgICogZm9yIGEgcHJvdmlkZWQgZHVyYXRpb24uIE9ubHkgYXR0YWNoIHRvIHJlbGF0aXZlbHktcG9zaXRpb25lZCBlbGVtZW50cy5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAoZWxlbSkgLSBQb3NpdGlvbmVkIGVsZW1lbnQgdG8gYXR0YWNoIHRvLiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gKG1zZykgLSBNZXNzYWdlIHRvIGRpc3BsYXkuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IChzKSAtIE51bWJlciBvZiBzZWNvbmRzIHRvIHBlcnNpc3QgbWVzc2FnZS4gMCBmb3IgcGVyc2lzdGVudFxyXG4gICAqIHVudGlsIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgdGhlIHRvb2x0aXAuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNtaXNzT25FeHRlcm5hbENsaWNrIC0gU2hvdWxkIHRoZSB0b29sdGlwIGJlIGRpc21pc3NlZCBieVxyXG4gICAqIGNsaWNraW5nIG91dHNpZGUgb2YgdGhlIGVsZW1lbnQ/IFRydWUgYnkgZGVmYXVsdC5cclxuICAgKi9cclxuICB0b29sdGlwKGVsZW0sIG1zZywgcywgZGlzbWlzc09uRXh0ZXJuYWxDbGljayA9IHRydWUpIHtcclxuICAgIGNvbnN0IHRvb2x0aXBDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwidG9vbHRpcFwiKTtcclxuICAgIGZvciAobGV0IG1zZ1NlZ21lbnQgb2YgbXNnLnNwbGl0KFwiXFxuXCIpKSB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXBNc2cgPSBjb21wb25lbnQucChtc2dTZWdtZW50LnRyaW0oKSwgXCJ0b29sdGlwLW1zZ1wiKTtcclxuICAgICAgdG9vbHRpcENvbnRhaW5lci5hcHBlbmQodG9vbHRpcE1zZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9vbHRpcENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMTAwJTsgd2lkdGg6IGZpdC1jb250ZW50XCI7XHJcbiAgICAvLyB0aGlzIGVuc3VyZXMgdGhhdCB0aGUgbGF0ZXN0IHRvb2x0aXBzIGFsd2F5cyBhcHBlYXIgb24gdGhlIHRvcC5cclxuICAgIHRvb2x0aXBDb250YWluZXIuc3R5bGUuekluZGV4ID0gMTAgKyAxMCAqIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvb2x0aXBcIikubGVuZ3RoKTtcclxuXHJcbiAgICBlbGVtLmFwcGVuZCh0b29sdGlwQ29udGFpbmVyKTtcclxuXHJcblxyXG4gICAgY29uc3QgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkaXNtaXNzT25FeHRlcm5hbENsaWNrKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgIT09IHRvb2x0aXBDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgY2xpY2tlZDsgcmVtb3ZpbmcgdG9vbHRpcFwiKTtcclxuICAgICAgICAgICAgICB0b29sdGlwQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfSlcclxuXHJcbiAgICBwLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAocyAhPT0gMCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi50b29sdGlwXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGltZXIgZXhwaXJlZDsgcmVtb3ZpbmcgdG9vbHRpcFwiKTtcclxuICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBzICogMTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNoIGEgbG9hZGluZyBtZXNzYWdlIHRvIGEgZ2l2ZW4gZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbGVtIC0gRWxlbWVudCB0byBhdHRhY2ggbG9hZGluZyBtZXNzYWdlIHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgLSBNZXNzYWdlIHRvIHBsYXk7IGRlZmF1bHQgaXMgXCJsb2FkaW5nXCIuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgbG9hZGluZ01lc3NhZ2UocGFyZW50RWxlbSwgbXNnPVwiTG9hZGluZ1wiKSB7XHJcbiAgICBjb25zdCBsb2FkaW5nQmFzZSA9IGNvbXBvbmVudC5wKG1zZywgXCJsb2FkaW5nLXRleHRcIik7XHJcbiAgICBjb25zdCBsb2FkaW5nRG90cyA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJsb2FkaW5nLWRvdHNcIik7XHJcblxyXG4gICAgbG9hZGluZ0Jhc2UuYXBwZW5kKGxvYWRpbmdEb3RzKTtcclxuICAgIHBhcmVudEVsZW0uYXBwZW5kKGxvYWRpbmdCYXNlKTtcclxuXHJcbiAgICBjb25zdCBsb2FkaW5nQW5pbWF0aW9uID0ge1xyXG4gICAgICBpZDogMCxcclxuICAgICAgbG9hZGluZ1RleHRCYXNlOiBwYXJlbnRFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy10ZXh0XCIpLFxyXG4gICAgICBsb2FkaW5nVGV4dERvdHM6IHBhcmVudEVsZW0ucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLWRvdHNcIiksXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTZXRzIGFuIGludGVydmFsLCB1c2luZyBpdCB0byBwbGF5IGEgc2ltcGxlIGFuaW1hdGlvbi5cclxuICAgICAgICovXHJcbiAgICAgIHBsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dEJhc2UudGV4dENvbnRlbnQgPSBtc2c7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dEJhc2UuY2xhc3NMaXN0LnJlbW92ZShcIm5vLW9wYWNpdHlcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dERvdHMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMubG9hZGluZ1RleHREb3RzLnRleHRDb250ZW50ICE9PSBcIi4uLlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1RleHREb3RzLnRleHRDb250ZW50ICs9IFwiLlwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nVGV4dERvdHMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDc1MCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHN0b3AoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0QmFzZS5jbGFzc0xpc3QuYWRkKFwibm8tb3BhY2l0eVwiKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0QmFzZS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbG9hZGluZ0FuaW1hdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xyXG5cclxuICBncmlkO1xyXG4gIHNpemU7XHJcbiAgc2hpcHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaXplID0gMTA7XHJcbiAgICB0aGlzLmdyaWQgPSBbXTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZ3JpZFtpXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2l6ZTsgaisrKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkW2ldW2pdID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbmQgcGxhY2VzIGEgZ2l2ZW4gc2hpcCBiYXNlZCBvbiB0aGUgY29vcmRpbmF0ZXNcclxuICAgKiBhc3NpZ25lZCB0byB0aGUgc2hpcC4gXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIHRoZSBnaXZlbiBsZW5ndGggb2YgdGhlIHNoaXAuIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSB0aGUgcm93IHRvIHBsYWNlIHRoZSBzaGlwLiAwLWJhc2VkIGNvb3JkaW5hdGVzLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2wgLSB0aGUgY29sdW1uIHRvIHBsYWNlIHRoZSBzaGlwLiAwLWJhc2VkIGNvb3JkaW5hdGVzLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgLSBQbGFjZSB0aGUgc2hpcCBob3Jpem9udGFsbHk/XHJcbiAgICogQHJldHVybiB7U2hpcH0gLSBUaGUgc2hpcCB0aGF0IHdhcyBwbGFjZWQsIG9yIG51bGwgaWYgdGhlIHNoaXAgZmFpbGVkXHJcbiAgICogdG8gYmUgcGxhY2VkLlxyXG4gICAqL1xyXG4gIHBsYWNlU2hpcChsZW5ndGgsIHJvdywgY29sLCB2ZXJ0aWNhbCkge1xyXG4gICAgaWYgKHJvdyA8IDAgfHwgY29sIDwgMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGxhY2Ugc2hpcCBvbiBuZWdhdGl2ZSBjb29yZGluYXRlcy5cIik7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gbnVsbCBpZiBvdXQgb2YgYm91bmRzXHJcbiAgICBpZiAodmVydGljYWwpIHsgLy8gdmVydGljYWwgb3V0IG9mIGJvdW5kcyBpbnZvbHZlcyByb3cuXHJcbiAgICAgIGlmIChyb3cgKyBsZW5ndGggPiB0aGlzLmdyaWQubGVuZ3RoIHx8IGNvbCA+IHRoaXMuZ3JpZC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGNvbCArIGxlbmd0aCA+IHRoaXMuZ3JpZC5sZW5ndGggfHwgcm93ID4gdGhpcy5ncmlkLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjaGVjayB0byBzZWUgdGhhdCB0aGUgZ2l2ZW4gcm93IGFuZCBjb2wgKyBsZW5ndGggYXJlIG5vdCBhbHJlYWR5IG9jY3VwaWVkLlxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCAocm93ICsgbGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtpXVtjb2xdICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCAoY29sICsgbGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtyb3ddW2ldICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBvdGhlcndpc2Ugd2UncmUgZ29vZCB0byBwbGFjZSBhIHNoaXAuXHJcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5zaGlwcy5sZW5ndGg7XHJcblxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCAocm93ICsgc2hpcC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICB0aGlzLmdyaWRbaV1bY29sXSA9IGlkO1xyXG4gICAgICAgIHNoaXAuc3RhdHVzW2Ake2l9LCR7Y29sfWBdID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCAoY29sICsgc2hpcC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICB0aGlzLmdyaWRbcm93XVtpXSA9IGlkO1xyXG4gICAgICAgIHNoaXAuc3RhdHVzW2Ake3Jvd30sJHtpfWBdID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XHJcblxyXG4gICAgcmV0dXJuIHNoaXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMZXQgdGhlIGdhbWVib2FyZCByZWNlaXZlIGFuIGF0dGFjayBhdCB0aGUgZ2l2ZW4gcm93IGFuZCBjb2x1bW4uIFxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCBcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgaGl0LiAxIGlmIGEgaGl0IHdhcyBzdWNjZXNzZnVsLCAwXHJcbiAgICogaWYgdGhlIGhpdCBtaXNzZWQsIGFuZCAtMSBpZiB0aGUgYXJlYSB3YXMgYWxyZWFkeSBoaXQuIFxyXG4gICAqL1xyXG4gIHJlY2VpdmVBdHRhY2socm93LCBjb2wpIHtcclxuICAgIGNvbnNvbGUubG9nKHtyb3csIGNvbH0pO1xyXG4gICAgaWYgKGlzTmFOKHBhcnNlSW50KHJvdykpIHx8IGNvbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHByb3ZpZGUgcm93IGFuZCBjb2wgY29vcmRpbmF0ZXMgYXMgYSBudW1iZXIuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzaGlwSWQgPSB0aGlzLmdyaWRbcm93XVtjb2xdO1xyXG5cclxuICAgIGlmIChzaGlwSWQgPT09IFwieFwiIHx8IHNoaXBJZCA9PT0gXCJvXCIpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfSBlbHNlIGlmIChzaGlwSWQgPT09IFwiXCIpIHtcclxuICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXSA9IFwib1wiO1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNoaXBJZCk7XHJcbiAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF0gPSBcInhcIjtcclxuICAgICAgdGhpcy5zaGlwc1tzaGlwSWRdLmhpdChyb3csIGNvbCk7XHJcblxyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEdyaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ncmlkO1xyXG4gIH1cclxuXHJcbiAgaXNTaGlwU3VuayhpbmRleCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hpcHNbaW5kZXhdLmlzU3VuaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGF2ZSBhbGwgc2hpcHMgYmVlbiBzdW5rIG9uIHRoZSBnYW1lYm9hcmQ/XHJcbiAgICovXHJcbiAgYWxsU2hpcHNTdW5rKCkge1xyXG4gICAgbGV0IHN0YXR1cyA9IHRydWU7XHJcbiAgICB0aGlzLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xyXG4gICAgICAgIHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3RhdHVzO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBCYXR0bGVzaGlwRWxlbWVudHMgfSBmcm9tIFwiLi9CYXR0bGVzaGlwRWxlbWVudFwiO1xyXG5pbXBvcnQgUGxheWVyLCB7IENQVV9TVEFURSB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgYSBnYW1lIHNlc3Npb24gZm9yIGJhdHRsZXNoaXAuIEtlZXBzIHRyYWNrIG9mIHBsYXllcnMuXHJcbiAqIENhbiBzdGFydCwgZW5kLCBhbmQgcmVzZXQgdGhlIGdhbWUuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVEUgPSB7XHJcbiAgcDF0dXJuOiBcIlBsYXllciAxJ3MgdHVyblwiLFxyXG4gIHAydHVybjogXCJQbGF5ZXIgMidzIHR1cm5cIixcclxuICBlbmRlZDogXCJHYW1lIGVuZGVkLlwiLFxyXG4gIHAxdmljdG9yeTogXCJQbGF5ZXIgMSB3aW5zLlwiLFxyXG4gIHAydmljdG9yeTogXCJQbGF5ZXIgMiB3aW5zLlwiLFxyXG4gIHJlc3RhcnQ6IFwiUmVzdGFydGluZyBnYW1lLi4uXCIsXHJcbiAgcGxheWluZzogXCJHYW1lIHN0YXJ0IVwiLFxyXG4gIGdhbWVQcm9tcHQ6IFwiV2VsY29tZS4gRHJhZyBzaGlwcyBvbnRvIGdhbWVib2FyZC4gQ2xpY2sgKHdoZW4gcGxhY2VkKTogUm90YXRlLlwiLFxyXG4gIGNwdVNoaXBTdW5rOiBcIkEgc2hpcCBvZiB0aGUgQ1BVJ3Mgd2FzIHN1bmshXCIsXHJcbiAgY3B1U2hpcEhpdDogXCJBIHNoaXAgb2YgdGhlIENQVSdzIHdhcyBzdW5rIVwiLFxyXG4gIHBsYXllclNoaXBTdW5rOiBcIkEgc2hpcCBvZiB0aGUgcGxheWVyJ3Mgd2FzIHN1bmshXCIsXHJcbiAgcGxheWVyU2hpcEhpdDogXCJBIHNoaXAgb2YgdGhlIHBsYXllcidzIHdhcyBoaXQhIVwiXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIge1xyXG4gIFxyXG4gIHN0YXRpYyAjaW5zdGFuY2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwbGF5ZXJzIGludm9sdmVkIGluIHRoZSBnYW1lLlxyXG4gICAqL1xyXG4gIHBsYXllcnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIElzIGl0IHBsYXllciAxJ3MgdHVybj8gXHJcbiAgICovXHJcbiAgI3AxdHVybjtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgb2YgdGhlIGxlbmd0aHMgb2YgZWFjaCBzaGlwIHRoYXQgdGhlIHBsYXllciB3aWxsIGhhdmUgaW4gdGhlaXIgYXJzZW5hbC5cclxuICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICovXHJcbiAgc2hpcExlbmd0aHM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhcyB0aGUgZ2FtZSBlbmRlZCB5ZXQ/XHJcbiAgICovXHJcbiAgI2dhbWVPdmVyO1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFRydWUgaWYgcGxheWVyIDEgd29uLCBmYWxzZSBpZiBwbGF5ZXIgMiB3b24uXHJcbiAgICovXHJcbiAgI2lzV2lubmVyUDE7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluc3RhbmNlIG9mIGEgQmF0dGxlc2hpcEVsZW1lbnRzIGNsYXNzIHRvIHVzZSB0byBtYW5pcHVsYXRlIHRoZSB2aWV3IG9mIHRoZSBwYWdlLlxyXG4gICAqIEB0eXBlIHtCYXR0bGVzaGlwRWxlbWVudHN9XHJcbiAgICovXHJcbiAgI3BhZ2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgZ2FtZS4gQXNzaWducyBDUFUgYXMgcGxheWVyIDIuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJbXX0gcGxheWVycyAtIEFuIGFycmF5IG9mIHRoZSBwbGF5ZXJzIGluIHRoZSBnYW1lLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcDFzdGFydCAtIFNob3VsZCBwbGF5ZXIgMSBzdGFydCBmaXJzdD8gVHJ1ZSBieSBkZWZhdWx0LlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBsYXllcjEsIHBsYXllcjIsIHAxc3RhcnQgPSB0cnVlLCBzaGlwTGVuZ3RocyA9IFs1XSkge1xyXG4gICAgaWYgKEdhbWVNYW5hZ2VyLiNpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBHYW1lTWFuYWdlci4jaW5zdGFuY2U7XHJcbiAgICB9IFxyXG5cclxuICAgIEdhbWVNYW5hZ2VyLiNpbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXIyLmNwdSA/IFtwbGF5ZXIxLCBwbGF5ZXIyXSA6IFtwbGF5ZXIyLCBwbGF5ZXIxXTtcclxuICAgIHRoaXMuI3AxdHVybiA9IHAxc3RhcnQ7XHJcbiAgICB0aGlzLnNoaXBMZW5ndGhzID0gc2hpcExlbmd0aHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgZ2FtZS4gSGFzIHRoZSBDUFUgcGxhY2Ugc2hpcHMsIGlzc3VlcyBhIHN0YXJ0IG1lc3NhZ2Ugb24gdGhlIHZpZXcsXHJcbiAgICogZGlzYWJsZXMgYWxsIGhhbmRsZXJzIG9mIGFsbCBzaGlwcywgYW5kIHRoZW4gaGFzIG9uZSBvZiB0aGUgcGxheWVycyBzZWxlY3QgYSBtb3ZlLlxyXG4gICAqIE1ha2VzIGFsbCBjZWxscyBcImF0dGFja2FibGUuXCJcclxuICAgKi9cclxuICBzdGFydEdhbWUoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIikuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgc2hpcC5vbmNsaWNrID0gbnVsbDtcclxuICAgICAgc2hpcC5kcmFnZ2FibGUgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHBsYWNlcyBzaGlwIGZvciBjcHUuXHJcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICBpZiAocGxheWVyLmNwdSkge1xyXG4gICAgICAgIHRoaXMuI2NwdVBsYWNlU2hpcHMocGxheWVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmVnaXN0ZXIgc2hpcHMgZm9yIHRoZSBwbGF5ZXIuXHJcbiAgICB0aGlzLiNwbGF5ZXJSZWdpc3RlclNoaXBzKCk7XHJcblxyXG4gICAgLy8gVE9ET1xyXG4gICAgLy8gcmVtb3ZlIHRoaXMgcHJvbWlzZSBjb2RlLCBlZmZlY3QgbG9va3MgbGFtZS5cclxuICAgICgoKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUucGxheWluZyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoR2FtZU1hbmFnZXIuI2luc3RhbmNlLnAxdHVybikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShHQU1FX1NUQVRFLnAxdHVybik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShHQU1FX1NUQVRFLnAydHVybik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCA3NTApO1xyXG4gICAgICB9KTtcclxuICAgIH0pKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKHJlc3VsdCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkLWFyZWFcIikuY2xhc3NMaXN0LmFkZChcImdhbWUtYWN0aXZlXCIpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGFibGVcIikuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2thYmxlXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAyLmdhbWVib2FyZCAuYXR0YWNrYWJsZVwiKS5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGYuI3BsYXlSb3VuZC5iaW5kKHRoaXMpKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBRdWVyaWVzIGJvdGggcGxheWVycycgZ2FtZWJvYXJkcyB0byBzZWUgaWYgdGhlIGdhbWUgc2hvdWxkIGJlIGVuZGVkLlxyXG4gICAqL1xyXG4gICNkZXRlcm1pbmVJZkdhbWVPdmVyKCkge1xyXG4gICAgY29uc3QgcDF2aWN0b3J5ID0gdGhpcy5wbGF5ZXJzWzFdLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKTtcclxuICAgIGNvbnN0IHAydmljdG9yeSA9IHRoaXMucGxheWVyc1swXS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCk7XHJcbiAgICBcclxuICAgIGlmIChwMXZpY3RvcnkpIHtcclxuICAgICAgdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wMXZpY3RvcnkpO1xyXG4gICAgICB0aGlzLiNpc1dpbm5lclAxID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAocDJ2aWN0b3J5KSB7XHJcbiAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUucDJ2aWN0b3J5KTtcclxuICAgICAgdGhpcy4jaXNXaW5uZXJQMSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwMXZpY3RvcnkgfHwgcDJ2aWN0b3J5KSB7XHJcbiAgICAgIHRoaXMuI2dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgdGhpcy4jZW5kR2FtZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2VuZEdhbWUoKSB7XHJcbiAgICAvLyB1cGRhdGUgZ2FtZSByZXN1bHRzIGhlcmUuXHJcbiAgICBjb25zdCBzdW1tYXJ5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW1tYXJ5LXNjcmVlblwiKTtcclxuICAgIC8vIDEuIFNob3cgdGhlIHdpbm5lci5cclxuICAgIGlmICh0aGlzLiNpc1dpbm5lclAxKSB7XHJcbiAgICAgIHN1bW1hcnlDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIikudGV4dENvbnRlbnQgPSB0aGlzLnBsYXllcnNbMF0ubmFtZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1bW1hcnlDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIikudGV4dENvbnRlbnQgPSB0aGlzLnBsYXllcnNbMV0ubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAyLiBTaG93IHRoZSBhY2N1cmFjeSBtZXRyaWNzLlxyXG4gICAgY29uc3QgcDFBY2NNZXRyaWMgPSBzdW1tYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucDEtYWNjdXJhY3ktbWV0cmljXCIpO1xyXG4gICAgY29uc3QgcDJBY2NNZXRyaWMgPSBzdW1tYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucDItYWNjdXJhY3ktbWV0cmljXCIpO1xyXG5cclxuICAgIHAxQWNjTWV0cmljLnRleHRDb250ZW50ID0gdGhpcy4jY2FsY3VsYXRlQWNjdXJhY3kodGhpcy5wbGF5ZXJzWzFdKTtcclxuICAgIHAyQWNjTWV0cmljLnRleHRDb250ZW50ID0gdGhpcy4jY2FsY3VsYXRlQWNjdXJhY3kodGhpcy5wbGF5ZXJzWzBdKTtcclxuXHJcbiAgICAvLyAzLiAvLy8vW3JlbW92ZWQgZGFtYWdlIG1ldHJpY3NdXHJcbiAgICAvLyBJbnN0ZWFkIG9mIHNob3dpbmcgZGFtYWdlIHRha2VuLCB3aGVuIHRoZSBnYW1lIGlzIG92ZXIsXHJcbiAgICAvLyBqdXN0IHNob3cgdGhlIGVuZW15J3MgZ2FtZWJvYXJkLlxyXG4gICAgLy8gVE9ET1xyXG4gICAgLy8gV2hlbiBkZWJ1Z2dpbmcgaXMgY29tcGxldGUsIHRlc3Qgb3V0IGhpZGluZyBiYXR0bGVzaGlwcyBmcm9tIHRoZSB2aWV3LlxyXG4gICAgc3VtbWFyeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBsYXktYWdhaW5cIilcclxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI3Jlc2V0R2FtZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGUgdGhlIGFjY3VyYWN5LCBnaXZlbiB0aGUgcGxheWVyLiBVc2VzIHRoYXQncyBwZXJzb24gZ2FtZWJvYXJkXHJcbiAgICogdG8gZGV0ZXJtaW5lIHRoZSBhY2N1cmFjeS5cclxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIDogdGhlIHBlcnNvbiB3aG8geW91IGF0dGFja2VkLlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRvdGFsIHNob3RzIC8gaGl0cyBhbmQgdGhlIGFjY3VyYWN5IG9mIGl0LlxyXG4gICAqL1xyXG4gICNjYWxjdWxhdGVBY2N1cmFjeShwbGF5ZXIpIHtcclxuICAgIGxldCB0b3RhbFNob3RzID0gMDtcclxuICAgIGxldCBoaXRzID0gMDtcclxuICAgIHBsYXllci5nYW1lYm9hcmQuZ3JpZC5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIHJvdy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGlmIChjZWxsID09PSBcInhcIiB8fCBjZWxsID09PSBcIm9cIikge1xyXG4gICAgICAgICAgdG90YWxTaG90cyArPSAxOyBcclxuICAgICAgICAgIGlmIChjZWxsID09PSBcInhcIikge1xyXG4gICAgICAgICAgICBoaXRzICs9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYWNjdXJhY3kgPSAoaGl0cyAvIHRvdGFsU2hvdHMpICogMTAwO1xyXG4gICAgcmV0dXJuIGAke2hpdHN9LyR7dG90YWxTaG90c30gKCR7YWNjdXJhY3kudG9GaXhlZCgyKX0lKWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIGdhbWUgYnk6XHJcbiAgICogLSBSZW1vdmluZyBhbGwgc2hpcHMgZnJvbSB0aGUgZ2FtZWJvYXJkXHJcbiAgICogLSBSZW1hcmtpbmcgYWxsIGNlbGxzIG9uIHRoZSBnYW1lYm9hcmRzIGFuZCByZW1vdmluZyBkYXRhIHNoaXAgZnJvbSB0aGVtLlxyXG4gICAqIC0gUmVjcmVhdGluZyBwbGF5ZXIgaW5zdGFuY2VzLlxyXG4gICAqIC0gUmVjcmVhdGluZyBkcmFnZ2FibGUgc2hpcHMuXHJcbiAgICogLSBBbGxvd2luZyB0aGUgdXNlciB0byBzdGFydCB0aGUgZ2FtZSBhZ2Fpbi5cclxuICAgKi9cclxuICAjcmVzZXRHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpLmZvckVhY2goc2hpcCA9PiBzaGlwLnJlbW92ZSgpKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0YWJsZVwiKS5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY2VsbCBzZWxlY3RhYmxlXCI7XHJcbiAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDEtbmFtZVwiKS52YWx1ZSA9IHRoaXMucGxheWVyc1swXS5uYW1lO1xyXG5cclxuICAgIHRoaXMucGxheWVyc1swXSA9IG5ldyBQbGF5ZXIodGhpcy5wbGF5ZXJzWzBdLm5hbWUsIGZhbHNlKTtcclxuICAgIHRoaXMucGxheWVyc1sxXSA9IG5ldyBQbGF5ZXIodGhpcy5wbGF5ZXJzWzFdLm5hbWUsIHRydWUpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBsYXkgYSByb3VuZCBvZiBiYXR0bGVzaGlwcywgYWxsb3dpbmcgZWFjaCBwbGF5ZXIgdG8gZmlyZS5cclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIDogRXZlbnQ7IHVzZWQgdG8gcGljayB1cCB0aGUgY2VsbCB0aGUgdXNlciBjbGlja2VkLiBBY3F1aXJlc1xyXG4gICAqIGNvb3JkaW5hdGVzIGZyb20gaXQgdG8gYXR0YWNrLlxyXG4gICAqL1xyXG4gICNwbGF5Um91bmQoZSkge1xyXG4gICAgaWYgKHRoaXMuI3AxdHVybiAmJiAhdGhpcy4jZ2FtZU92ZXIpIHtcclxuICAgICAgdGhpcy4jcGxheWVyRmlyZUF0dGFjayhlKTtcclxuICAgICAgaWYgKHRoaXMuI3AxdHVybiA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLiNjcHVGaXJlQXR0YWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNwbGF5ZXJSZWdpc3RlclNoaXBzKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEuZ2FtZWJvYXJkXCIpO1xyXG5cclxuICAgIGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIikuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgbGV0IG9yaWdpbkNlbGwgPSBzaGlwLnBhcmVudE5vZGU7XHJcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChvcmlnaW5DZWxsLmRhdGFzZXQucm93KTtcclxuICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KG9yaWdpbkNlbGwuZGF0YXNldC5jb2wpO1xyXG4gICAgICBsZXQgbGVuZ3RoID0gc2hpcC5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgICAgbGV0IHZlcnRpY2FsID0gc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcclxuXHJcbiAgICAgIHNlbGYucGxheWVyc1swXS5nYW1lYm9hcmQucGxhY2VTaGlwKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjayBhIHBsYXllci5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gRXZlbnQgd2hpY2ggdGhlIGhhbmRsZXIgY2FwdHVyZXMuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IGF0dGFja2VyIC0gVGhlIGF0dGFja2luZyBwbGF5ZXIuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IGF0dGFja2VkIC0gVGhlIHBsYXllciByZWNlaXZpbmcgdGhlIGF0dGFjay5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICAjcGxheWVyRmlyZUF0dGFjayhlKSB7XHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImF0dGFja2VkXCIpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBjZWxsIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQhXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvdyk7XHJcbiAgICBjb25zdCBjb2wgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb2wpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJvdywgY29sKTtcclxuICAgIGxldCByZXN1bHQgPSB0aGlzLnBsYXllcnNbMF0uYXR0YWNrKHRoaXMucGxheWVyc1sxXSwgcm93LCBjb2wpO1xyXG4gICAgc3dpdGNoKHJlc3VsdCkge1xyXG4gICAgICBjYXNlIDE6IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXQncyBhIGhpdCFcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0J3MgYSBtaXNzIVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMuI3AxdHVybiA9IGZhbHNlOyAvLyBDUFUgbXVzdCBtYWtlIGEgc3VjY2Vzc2Z1bCBtb3ZlIGJlZm9yZSB0aGUgcGxheWVyIG1vdmVzIGFnYWluLlxyXG5cclxuICAgIHRoaXMuI2RldGVybWluZUlmR2FtZU92ZXIoKTtcclxuICB9XHJcblxyXG4gICNjcHVBdHRhY2tEZXRlcm1pbmVDb29yZGluYXRlcyhjcHUpIHtcclxuICAgIGxldCByb3c7XHJcbiAgICBsZXQgY29sOyBcclxuICAgIGxldCBlbmRJbmRleCA9IGNwdS5nYW1lYm9hcmQuc2l6ZSAtIDE7XHJcblxyXG4gICAgc3dpdGNoKGNwdS5jcHVCZWhhdmlvcikge1xyXG4gICAgICBjYXNlIENQVV9TVEFURS5yYW5kb206IHtcclxuICAgICAgICAvLyByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoZW5kSW5kZXgpKTtcclxuICAgICAgICAvLyBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoZW5kSW5kZXgpKTtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBDUFVfU1RBVEUuZm91bmQ6IHtcclxuICAgICAgICAvLyB3aGVuIGZvdW5kLCB0YXJnZXQgcHJveGltaXR5IG9mIDEgdW5pdCByYWRpdXMgdG8gdGhlIGZvdW5kIGNlbGwuXHJcbiAgICAgICAgLy8gdGhhdCBtZWFucyBhbHRlcmluZyB0aGUgcm93IFhPUiBjb2x1bW4gYmFzZWQgb24gdGhlIGxhc3Qgc3VjY2Vzc2Z1bCBoaXQuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZm9yIGRlY2lkaW5nIHdoZXRoZXIgdG8gcGljayByb3cgb3IgY29sdW1uIGZvciBhZGp1c3RtZW50XHJcbiAgICAgICAgbGV0IHBpY2tSb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIC8vIGZvciBkZWNpZGluZyB3aGV0aGVyIHRvIHBsdXMgb3IgbWludXMuXHJcbiAgICAgICAgbGV0IHBsdXNNaW51cyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkgPT09IDAgPyAxIDogLTE7XHJcblxyXG4gICAgICAgIGlmIChwaWNrUm93KSB7XHJcbiAgICAgICAgICAvLyBpZiB0aGUgZmlyc3Qgc3VjY2Vzc2Z1bCBoaXQgd2FzIDAgd2UgZG9uJ3Qgd2FudCAtMSAtLSBhbHdheXMgZm9yY2UgaXQgdG8gYmUgKzEuXHJcbiAgICAgICAgICBpZiAoY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgPT09IDApIHtcclxuICAgICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgKyAxO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyA9PT0gZW5kSW5kZXgpIHtcclxuICAgICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgLSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgKyBwbHVzTWludXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb2wgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IHN1Y2Nlc3NmdWwgaGl0IHdhcyAwIHdlIGRvbid0IHdhbnQgLTEgLS0gYWx3YXlzIGZvcmNlIGl0IHRvIGJlICsxLlxyXG4gICAgICAgICAgaWYgKGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sICsgMTtcclxuICAgICAgICAgIC8vIGxpa2V3aXNlIGZvciB0aGUgYXJlYXMgd2hlcmUgdGhlIHNoaXAgaXMgYXQgdGhlIGVkZ2Ugb2YgdGhlIGJvYXJkLiBMb29rIGJhY2suXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sID09PSBlbmRJbmRleCkge1xyXG4gICAgICAgICAgICBjb2wgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCAtIDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2wgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCArIHBsdXNNaW51cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIENQVV9TVEFURS5mb2N1c2VkOiB7XHJcbiAgICAgICAgLy8gaW4gYSBmb2N1c2VkIG1vZGUsIHRoZSBDUFUgc3RhcnRzIHRyYXZlcnNpbmcgaW4gYSBzaW5nbGUgZGlyZWN0aW9uIHVudGlsXHJcbiAgICAgICAgLy8gdGhlIGRlc3RydWN0aW9uIG9mIHRoZSBzaGlwIGlzIGFubm91bmNlZCwgYSBtaXNzIG9jY3Vycywgb3IgaXQgaGl0cyBhIHdhbGwuXHJcblxyXG4gICAgICAgIC8vIHRoZSBkaXJlY3Rpb24gdG8gYmUgdHJhdmVyc2VkIGRlcGVuZHMgb24gdGhlIGxhc3QgdHdvIHN1Y2Nlc3NmdWwgaGl0c1xyXG4gICAgICAgIC8vIGFuZCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRob3NlIGNvb3JkaW5hdGVzLlxyXG4gICAgICAgIC8vIGEgcm93RGlmZiBpbmRpY2F0ZXMgdG8gbG9vayB1cCBvciBkb3duLCBhcyB0aGUgc2hpcCBpcyBseWluZyB2ZXJ0aWNhbGx5LlxyXG4gICAgICAgIC8vIGEgY29sRGlmZiBpbmRpY2F0ZXMgdG8gbG9vayBsZWZ0IG9yIHJpZ2h0LCBhcyB0aGUgc2hpcCBpcyBseWluZyBob3Jpem9udGFsbHkuXHJcblxyXG4gICAgICAgIGxldCByb3dEaWZmID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgLVxyXG4gICAgICAgICAgICBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3c7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNvbERpZmYgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCAtXHJcbiAgICAgICAgICAgIGNwdS5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LmNvbDtcclxuICAgICAgICBcclxuICAgICAgICAvLyB3aGVuIHRvIGxvb2sgdXAgLyBkb3duIC0tIHRoZXJlJ3MgYSByb3cgZGlmZmVyZW5jZVxyXG4gICAgICAgIGlmIChyb3dEaWZmKSB7XHJcbiAgICAgICAgICAvLyBmb3Igd2hlbiB0aGUgZm9jdXMgbmVlZHMgdG8gYmUgaW52ZXJ0ZWQgKG1pc3Mgb3IgaGl0IGEgZ3JpZCBiYXJyaWVyKVxyXG4gICAgICAgICAgaWYgKGNwdS5jcHVGb2N1c0ludmVydCkge1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGRpcmVjdGlvbiB0aGUgY3B1IHdhcyB0cmF2ZWxpbmcgaW4gcHJldmlvdXNseTsgaWYgcG9zaXRpdmUsIHRoZW4gaXQgd2FzIGdvaW5nIHVwLlxyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGdvIGRvd24gYnkgYWRkaW5nLlxyXG4gICAgICAgICAgICBpZiAocm93RGlmZiA+IDApIHtcclxuICAgICAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyArIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gZWxzZSBpdCB3YXMgbmVnYXRpdmUsIHNvIGl0IHdhcyBnb2luZyBkb3duLCBzbyB3ZSBuZWVkIHRvIGdvIHVwLlxyXG4gICAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93IC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcHUuY3B1Rm9jdXNJbnZlcnQgPSBmYWxzZTtcclxuICAgICAgICAgIC8vIGlmIGF0IHRoZSBlbmQsIHN0YXJ0IHNlYXJjaGluZyB1cHdhcmRzIGluc3RlYWQuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGNwdS5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdyA9PT0gZW5kSW5kZXgpIHsgXHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93IC0gMTtcclxuICAgICAgICAgIC8vIGlmIGF0IHRoZSBiZWdpbm5pbmcsIHN0YXJ0IHNlYXJjaGluZyBkb3dud2FyZHMuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGNwdS5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdyA9PT0gMCkge1xyXG4gICAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyArIDE7XHJcbiAgICAgICAgICAvLyBlbHNlIHdlJ3JlIGluIHRoZSBtaWRkbGUsIGFuZCBpZiB0aGF0IGRpZmZlcmVuY2UgaXMgMSwgdGhlbiBsb29rIHVwd2FyZHMuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJvd0RpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdyAtIDE7XHJcbiAgICAgICAgICAvLyBhbHNvIGluIHRoZSBtaWRkbGUsIGJ1dCBmb3IgZGlmZmVyZW5jZSAxLCB0aGVuIGxvb2sgZG93bndhcmRzLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChyb3dEaWZmIDwgMCkge1xyXG4gICAgICAgICAgICByb3cgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgKyAgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGNvbHVtbiBpcyBhIGdpdmVuIC0tIGtlZXAgaXQgdGhlIHNhbWUuXHJcbiAgICAgICAgICBjb2wgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2w7XHJcbiAgICAgICAgLy8gZWxzZSBpbiB0aGUgY2FzZSBvZiBhIGNvbHVtbiBkaWZmZXJlbmNlLCB3ZSBsb29rIGxlZnQgLyByaWdodC5cclxuICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgIGlmIChjcHUuY3B1Rm9jdXNJbnZlcnQpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkaXJlY3Rpb24gdGhlIGNwdSB3YXMgdHJhdmVsaW5nIGluIHByZXZpb3VzbHk7IGlmIHBvc2l0aXZlLCB0aGVuIGl0IHdhcyBnb2luZyB1cC5cclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBnbyBkb3duIGJ5IGFkZGluZy5cclxuICAgICAgICAgICAgaWYgKGNvbERpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgKyAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIGVsc2UgaXQgd2FzIG5lZ2F0aXZlLCBzbyBpdCB3YXMgdHJhdmVsaW5nIGxlZnR3YXJkczsgd2UgbmVlZCB0byBnbyByaWdodC5cclxuICAgICAgICAgICAgICBjb2wgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3B1LmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGNwdS5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LmNvbCA9PT0gZW5kSW5kZXgpIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgLSAxO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2wgPT09IDApIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgKyAxO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjb2xEaWZmID4gMCkge1xyXG4gICAgICAgICAgICBjb2wgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2wgLSAxO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjb2xEaWZmIDwgMCkge1xyXG4gICAgICAgICAgICBjb2wgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2wgKyAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJvdyA9IGNwdS5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHtyb3csIGNvbH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbcm93LCBjb2xdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIHRoZSBDUFUgdG8gZGVjaWRlIG9uIGFuIGF0dGFjay5cclxuICAgKi9cclxuICAjY3B1RmlyZUF0dGFjaygpIHtcclxuICAgIGxldCBwMiA9IHRoaXMucGxheWVyc1sxXTtcclxuICAgIGxldCBzdGF0dXMgPSAtMTtcclxuICAgIGxldCByb3c7XHJcbiAgICBsZXQgY29sO1xyXG4gICAgd2hpbGUgKHN0YXR1cyA9PT0gLTEpIHtcclxuICAgICAgW3JvdywgY29sXSA9IHRoaXMuI2NwdUF0dGFja0RldGVybWluZUNvb3JkaW5hdGVzKHRoaXMucGxheWVyc1sxXSk7XHJcbiAgICAgIFxyXG4gICAgICBzdGF0dXMgPSB0aGlzLnBsYXllcnNbMV0uYXR0YWNrKHRoaXMucGxheWVyc1swXSwgcm93LCBjb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhdHRhY2tlZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYClcclxuICAgIGF0dGFja2VkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWRcIik7XHJcblxyXG4gICAgc3dpdGNoKHN0YXR1cykge1xyXG4gICAgICBjYXNlIDE6IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNQVSBzY29yZXMgYSBoaXQhXCIpO1xyXG4gICAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUucGxheWVyU2hpcEhpdCk7XHJcblxyXG4gICAgICAgIGxldCBzaGlwSWQgPSBhdHRhY2tlZENlbGwuZGF0YXNldC5zaGlwLnNwbGl0KFwicGxheWVyLXNoaXBcIilbMV07XHJcblxyXG4gICAgICAgIGxldCBzaGlwU3VuayA9IHRoaXMucGxheWVyc1swXS5nYW1lYm9hcmQuaXNTaGlwU3VuayhzaGlwSWQpO1xyXG4gICAgICAgIGlmIChzaGlwU3Vuaykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJDUFUgc2FuayB0aGF0IHNoaXAhXCIpO1xyXG4gICAgICAgICAgdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wbGF5ZXJTaGlwU3Vuayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgQ1BVIGhhcyBtYWRlIGl0cyBmaXJzdCBzdWNjZXNzZnVsIGhpdCBhZ2FpbnN0IGEgc2hpcCEgXHJcbiAgICAgICAgaWYgKHAyLmNwdUJlaGF2aW9yID09PSBDUFVfU1RBVEUucmFuZG9tXHJcbiAgICAgICAgICAmJiBwMi5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ID09PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBwMi5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ID0gcm93O1xyXG4gICAgICAgICAgcDIuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCA9IGNvbDtcclxuICAgICAgICAgIHAyLmNwdUJlaGF2aW9yID0gQ1BVX1NUQVRFLmZvdW5kO1xyXG4gICAgICAgIC8vIFRoZSBDUFUgaGFzIG1hZGUgYSBzZWNvbmQgc3VjY2Vzc2Z1bCBoaXQgd2hpbGUgaW4gZm91bmQgbW9kZSFcclxuICAgICAgICB9IGVsc2UgaWYgKHAyLmNwdUJlaGF2aW9yID09PSBDUFVfU1RBVEUuZm91bmRcclxuICAgICAgICAgICYmIHAyLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ID09PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBwMi5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdyA9IHJvdztcclxuICAgICAgICAgIHAyLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sID0gY29sO1xyXG4gICAgICAgICAgcDIuY3B1QmVoYXZpb3IgPSBDUFVfU1RBVEUuZm9jdXNlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZm9jdXNlZCBtb2RlIGJlaGF2aW9ycyAtLSByZXZlcnQgdG8gcmFuZG9tIHdoZSBzdW5rLlxyXG4gICAgICAgICAgaWYgKHAyLmNwdUJlaGF2aW9yID09PSBDUFVfU1RBVEUuZm9jdXNlZCkge1xyXG4gICAgICAgICAgICAvLyBvbmx5IGtlZXAgdXBkYXRpbmcgdGhlIHNlY29uZCBoaXQuXHJcbiAgICAgICAgICAgIHAyLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ID0gcm93O1xyXG4gICAgICAgICAgICBwMi5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LmNvbCA9IGNvbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGluIGZvY3VzZWQgbW9kZS4uLiBsYXkgZG93biBzb21lIGF0dGFja3MuXHJcbiAgICAgICAgICAvLyBpZiBhIHNoaXAgd2FzIHN1bmssIHRoZW4gcmVzZXQgdG8gcmFuZG9tLlxyXG4gICAgICAgICAgaWYgKHNoaXBTdW5rKSB7XHJcbiAgICAgICAgICAgIHAyLnJlc2V0Q1BVQmVoYXZpb3JzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNQVSBtaXNzZXMhXCIpO1xyXG4gICAgICAgIGlmIChwMi5jcHVCZWhhdmlvciA9PT0gQ1BVX1NUQVRFLmZvY3VzZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2luY2UgQ1BVIHdhcyBmb2N1c2VkLCBpdCdsbCBzd2FwIGRpcmVjdGlvbnMgc3RhcnRpbmcgZnJvbSB0aGUgZmlyc3QgaGl0LlwiKTtcclxuICAgICAgICAgIHAyLmNwdUZvY3VzSW52ZXJ0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4jcDF0dXJuID0gdHJ1ZTtcclxuICAgIHRoaXMuI2RldGVybWluZUlmR2FtZU92ZXIoKTtcclxuICB9XHJcblxyXG4gICNjcHVQbGFjZVNoaXBzKHBsYXllcikge1xyXG4gICAgdGhpcy5zaGlwTGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBzdGF0dXMgPSBudWxsO1xyXG4gICAgICBsZXQgcm93O1xyXG4gICAgICBsZXQgY29sO1xyXG4gICAgICBsZXQgdmVydGljYWw7XHJcblxyXG4gICAgICB3aGlsZSAoc3RhdHVzID09PSBudWxsKSB7XHJcbiAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHBsYXllci5nYW1lYm9hcmQuc2l6ZS0xKSk7XHJcbiAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHBsYXllci5nYW1lYm9hcmQuc2l6ZS0xKSk7XHJcbiAgICAgICAgdmVydGljYWwgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHN0YXR1cyA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQmF0dGxlc2hpcEVsZW1lbnRzLnBsYWNlU2hpcFZpYUNvb3JkaW5hdGUobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwsIHRydWUsIGBjcHUtc2hpcCR7aW5kZXh9YCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjaCBhbiBpbnN0YW5jZSBvZiBCYXR0bGVTaGlwRWxlbWVudHMgdG8gY29udHJvbCB0aGUgdmlldyBvZiB0aGUgcGFnZS5cclxuICAgKiBAcGFyYW0ge0JhdHRsZXNoaXBFbGVtZW50c30gcGFnZSBcclxuICAgKi9cclxuICBhdHRhY2hQYWdlKHBhZ2UpIHtcclxuICAgIHRoaXMuI3BhZ2UgPSBwYWdlO1xyXG4gIH1cclxufSIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ1BVX1NUQVRFID0ge1xyXG4gIHJhbmRvbSA6IFwicmFuZG9tXCIsXHJcbiAgZm91bmQgOiBcImZvdW5kXCIsXHJcbiAgZm9jdXNlZCA6IFwiZm9jdXNlZFwiXHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgbmFtZTtcclxuICBjcHU7XHJcbiAgLyoqXHJcbiAgICogS2VlcHMgdHJhY2sgb2YgY29vcmRpbmF0ZXMgb2YgdGhlIENQVSdzIGxhc3Qgc3VjY2Vzc2Z1bCBoaXQuXHJcbiAgICovXHJcbiAgY3B1Rmlyc3RTdWNjZXNzZnVsSGl0ID0ge3JvdzogbnVsbCwgY29sOiBudWxsfTtcclxuICAvKipcclxuICAgKiBJZiB0aGUgQ1BVIHNjb3JlcyB0d28gaGl0cyBvbiBhIHNoaXAsIHRoZW4gdXNlIHRoaXMgYXMgYSBmbGFnIHRvIHN3aXRjaFxyXG4gICAqIGl0J3MgYmVoYXZpb3IgdG8gZm9jdXNlZC5cclxuICAgKi9cclxuICBjcHVTZWNvbmRTdWNjZXNzZnVsSGl0ID0ge3JvdzogbnVsbCwgY29sOiBudWxsfTtcclxuICAvKipcclxuICAgKiBUaGVyZSBhcmUgdGhyZWUgc3RhdGVzIGZvciB0aGUgQ1BVIHRvIGVtcGxveTogcmFuZG9tLCBmb3VuZCwgZm9jdXNlZC5cclxuICAgKi9cclxuICBjcHVCZWhhdmlvcjtcclxuICAvKipcclxuICAgKiBXaGVuIGZvY3VzZWQgb24gYSB0YXJnZXQsIHN3YXBzIHRoZSBkaXJlY3Rpb24gb2YgYXR0YWNrIHdoZW4gc2V0IHRvIHRydWUuXHJcbiAgICogVXNlZCB3aGVuIHRoZSBDUFUgaWRlbnRpZmllcyBhIHJvdyAvIGNvbCB3aGVyZSBhIHNoaXAgbWF5IGJlLCBidXQgZ2V0cyBhIG1pc3MuXHJcbiAgICovXHJcbiAgY3B1Rm9jdXNJbnZlcnQ7XHJcbiAgc2NvcmU7XHJcbiAgZ2FtZWJvYXJkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lLCBpc0NwdSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY3B1ID0gaXNDcHU7XHJcbiAgICB0aGlzLmNwdUJlaGF2aW9yID0gQ1BVX1NUQVRFLnJhbmRvbTtcclxuICAgIHRoaXMuY3B1Rm9jdXNJbnZlcnQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2sgdGhlIG90aGVyIHBsYXllcidzIGdhbWVib2FyZC5cclxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gVGhlIG90aGVyIHBsYXllciBvZiB0aGUgZ2FtZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gUm93IGNvb3JkaW5hdGUgdG8gbGF1bmNoIGFuIGF0dGFjay5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIC0gQ29sdW1uIGNvb3JkaW5hdGUgdG8gbGF1bmNoIGFuIGF0dGFjay5cclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFN0YXR1cyBvZiB0aGUgYXR0YWNrLiAxIGlzIGEgaGl0LiAwIGlzIGEgbWlzcyxcclxuICAgKiBhbmQgLTEgaXMgYW4gYXJlYSB3aGljaCBoYXMgYWxyZWFkeSBiZWVuIGhpdC5cclxuICAgKi9cclxuICBhdHRhY2socGxheWVyLCByb3csIGNvbCkge1xyXG4gICAgcmV0dXJuIHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XHJcbiAgfVxyXG5cclxuICByZXNldENQVUJlaGF2aW9ycygpIHtcclxuICAgIHRoaXMuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0ID0ge3JvdzogbnVsbCwgY29sOiBudWxsfTtcclxuICAgIHRoaXMuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgICB0aGlzLmNwdUJlaGF2aW9yID0gQ1BVX1NUQVRFLnJhbmRvbTtcclxuICAgIHRoaXMuY3B1Rm9jdXNJbnZlcnQgPSBmYWxzZTtcclxuICB9XHJcbn0iLCJmdW5jdGlvbiBzZXROYW1lKGxlbmd0aCkge1xyXG4gIHN3aXRjaChsZW5ndGgpIHtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIFwiU3BlZWRlclwiO1xyXG4gICAgY2FzZSAyOlxyXG4gICAgICByZXR1cm4gXCJQYXRyb2wgQm9hdFwiO1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICByZXR1cm4gXCJEZXN0cm95ZXJcIjtcclxuICAgIGNhc2UgNDpcclxuICAgICAgcmV0dXJuIFwiQmF0dGxlc2hpcFwiO1xyXG4gICAgY2FzZSA1OlxyXG4gICAgICByZXR1cm4gXCJDYXJyaWVyXCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJTaGlwXCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgYmF0dGxlc2hpcCwgZGVwZW5kcyBvbiB0aGUgbGVuZ3RoLlxyXG4gICAqL1xyXG4gIG5hbWU7IFxyXG4gIC8qKlxyXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIGJhdHRsZXNoaXAuXHJcbiAgICovXHJcbiAgbGVuZ3RoO1xyXG4gIC8qKlxyXG4gICAqIEN1cnJlbnQgY29uZGl0aW9uIG9mIHRoZSBiYXR0bGVzaGlwLiBSZXR1cm5zXHJcbiAgICogYW4gYXJyYXkgY29udGFpbmluZyBzdGF0dXMgb2YgdGhlIGJhdHRsZXNoaXAuIFxyXG4gICAqIElmIHRoZSBzdGF0dXNlcyBhcmUgYWxsIHRydWUsIHRoZSBzaGlwIGlzIHN1bmsuXHJcbiAgICovXHJcbiAgc3RhdHVzO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBzaGlwLlxyXG4gICAqIEBwYXJhbSB7R2FtZWJvYXJkfSBnYW1lYm9hcmQgLSBUaGUgZ2FtZWJvYXJkIHRoZSBzaGlwIGJlbG9uZ3MgdG8uXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtIFRoZSBsZW5ndGggb2YgdGhlIHNoaXAuXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyAtIHhDb29yZGluYXRlIHRvIHBsYWNlIHRoZSBzaGlwLiAwLWJhc2VkLlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2wgLSB5Q29vcmRpbmF0ZSB0byBwbGFjZSB0aGUgc2hpcC4gMC1iYXNlZC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIC0gU2hvdWxkIHRoZSBzaGlwIGJlIHBsYWNlZCB2ZXJ0aWNhbGx5P1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGggPz8gMTtcclxuICAgIHRoaXMubmFtZSA9IHNldE5hbWUodGhpcy5sZW5ndGgpO1xyXG4gICAgdGhpcy5zdGF0dXMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcmtzIHRoZSBzaGlwIGhpdCBhdCBnaXZlbiBsb2NhdGlvbi5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9jYXRpb24gXHJcbiAgICovXHJcbiAgaGl0KHgsIHkpIHtcclxuICAgIGxldCBpZCA9IGAke3h9LCR7eX1gO1xyXG4gICAgdGhpcy5zdGF0dXNbaWRdID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgaWYgdGhlIHNoaXAgaGFzIGJlZW4gZW50aXJlbHkgc3VuayB5ZXQuXHJcbiAgICovXHJcbiAgaXNTdW5rKCkge1xyXG4gICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLnN0YXR1cykge1xyXG4gICAgICBpZiAoIXRoaXMuc3RhdHVzW3Byb3BdKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59IiwiLyoqXHJcbiAqIEEgY2xhc3Mgd2l0aCB1c2VmdWwsIGdlbmVyYWwtcHVycG9zZSBtZXRob2RzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbGl0eSB7XHJcbiAgXHJcbiAgc3RhdGljIGVtYWlsUmVnZXggPSAgXHRcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcclxuICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHJcbiAgLyoqXHJcbiAgICogQmFzZWQgb24gd2VicGFjaydzIHJlcXVpcmUgdG8gcXVpY2tseSBpbXBvcnQgaW4gYWxsIGltYWdlcyBpbiBhIGZvbGRlci5cclxuICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZXF1aXJlLWNvbnRleHQgdG8gdW5kZXJzdGFuZFxyXG4gICAqIG1vcmUgYWJvdXQgdGhlIHBhcmFtZXRlci5cclxuICAgKiBcclxuICAgKiBAcGFyYW0gciAtIHJlcXVpcmUuY29udGV4dCgpIGZ1bmN0aW9uLCB1c2VkIGZvciBpbXBvcnRpbmcgYWxsIGZpbGVzIGluXHJcbiAgICogYSBkaXJlY3RvcnkgbWF0Y2hpbmcgYSBwYXR0ZXJuLiBFeDpcclxuICAgKiByZXF1aXJlLmNvbnRleHQoXCIuL2ltYWdlc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKS4gTGVhdmUgYmxhbmsgdG8gdXNlIHRoaXMuXHJcbiAgICogQHJldHVybnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGltYWdlcyBtYXRjaGluZyB0aGUgcmVxdWlyZSBjb250ZXh0LFxyXG4gICAqIHRoZSBvcmlnaW5hbCBmaWxlbmFtZSAody8gZXh0ZW5zaW9uKSBiZWluZyB0aGUga2V5IHJlZmVyZW5jaW5nIHRoZSBpbWFnZS5cclxuICAgKi9cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICBzdGF0aWMgaW1wb3J0QWxsSW1hZ2VzKHIgPSByZXF1aXJlLmNvbnRleHQoXCIuLi9pbWFnZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpIHtcclxuICAgIGxldCBpbWFnZXMgPSB7fTtcclxuICAgIHIua2V5cygpLm1hcCgoaXRlbSkgPT4geyBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtcclxuICAgIHJldHVybiBpbWFnZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIHZhcmlvdXMgY2xhc3Nlcy4gV3JhcHMgZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGhlIEhUTUwgdGFnIG9mIHRoZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0Q2xhc3MgLSBEZWZhdWx0IGNsYXNzIHRvIHJlZmVyIHRvIHRoZSBlbGVtZW50IGJ5LlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NOYW1lcyAtIChPcHRpb25hbCkgQWRkaXRpb25hbCBjbGFzc2VzIHRvIGdpdmUgdGhlIGVsZW1lbnQuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQodGFnLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICBVdGlsaXR5LmFkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgZGVmYXVsdENsYXNzLCAuLi5jbGFzc05hbWVzKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGVscGVyIG1ldGhvZCB3aGljaCBhZGRzIGNsYXNzZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBhcHBlbmQgY2xhc3NlcyB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gVGhlIGNsYXNzbmFtZSB0aGF0IHNhaWQgZWxlbWVudCBzaG91bGQgYWx3YXlzIGhhdmUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIFRoZSBjbGFzc25hbWVzIHRvIGdpdmUgdGhlIGVsZW1lbnQgKG9wdGlvbmFsKS5cclxuICAgKiAqLyBcclxuICBzdGF0aWMgYWRkQ2xhc3Nlc1RvRWxlbWVudChlbGVtLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgICAgY2xhc3NOYW1lcy5wdXNoKGRlZmF1bHRDbGFzcyk7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBhIGdpdmVuIGVsZW1lbnQsIGFkZCBhbiBhbmltYXRpb24gYnV0IG9ubHkgcGxheSBpdCBvbmNlLiBBZnRlcndhcmRzLFxyXG4gICAqIHVubG9hZCB0aGUgYW5pbWF0aW9uLiBUaGlzIGFsbG93cyB5b3UgdG8gYWRkIHRoZSBjbGFzcyB0byBpdCBhZ2FpbiB0byBcclxuICAgKiBwbGF5IHRoZSBhbmltYXRpb247IHRoaXMgaXMgdXNlZnVsIHdoZW4gYXNzb2NpYXRlZCB3aXRoIGV2ZW50IHRyaWdnZXJzLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBBbiBlbGVtZW50IHRvIGFwcGx5IHRoZSBhbmltYXRpb24gdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFuaW1hdGlvbk5hbWUgLSBBIENTUyBjbGFzcyBhc3NvY2lhdGVkIHdpdGggYW4gYW5pbWF0aW9uLlxyXG4gICAqL1xyXG4gIHN0YXRpYyB0cmlnZ2VyQW5pbWF0aW9uKGVsZW0sIGFuaW1hdGlvbk5hbWUpIHtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChhbmltYXRpb25OYW1lKTtcclxuXHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xyXG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICB9LCB7b25jZSA6IHRydWV9KTsgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWN1cnNpdmVseSBzY2FsZSB0aGUgdHJlZSBvZiBhIGNoaWxkIG5vZGUgdW50aWwgdGhlIHBhcmVudCBtYXRjaGluZyB0aGUgZ2l2ZW5cclxuICAgKiBzZWxlY3RvciBpcyBmb3VuZC4gUmV0dXJucyBOVUxMIGlmIG5vIG1hdGNoaW5nIHBhcmVudCBpcyBmb3VuZC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gQSBjaGlsZCBub2RlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIENTUyBTZWxlY3RvciBTdHJpbmcuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0hUTUxlbGVtZW50fSAtIFBhcmVudCBvZiBlbGVtLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRNYXRjaGluZ1BhcmVudChlbGVtLCBzZWxlY3Rvcikge1xyXG4gICAgd2hpbGUoIWVsZW0ubWF0Y2hlcyhzZWxlY3RvcikpIHtcclxuICAgICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcclxuICAgICAgaWYgKGVsZW0ubWF0Y2hlcyhcImh0bWxcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHVzZXIncyBsb2NhdGlvbiwgdXNpbmcgdGhlIEdlb2xvY2F0aW9uIEFQSS5cclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB0aGUgdXNlcidzIGxvY2F0aW9uLCBvciBudWxsXHJcbiAgICogaWYgdGhlIHVzZXIgZGVuaWVzIHBlcm1pc3Npb24gcmVxdWVzdHMuXHJcbiAgICovXHJcbiAgLypcclxuICBzdGF0aWMgZ2V0R2VvbG9jYXRpb24oKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gc3VjY2Vzcyhwb3NpdGlvbikge1xyXG4gICAgICBjb25zdCBsYXRpdHVkZSAgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcblxyXG4gICAgICBjb25zdCBsYXRsb25nID0gYCR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWA7XHJcblxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxhdGxvbmcpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gZXJyb3IoKSB7XHJcbiAgICAgIGxldCBlcnJvciA9IFwiVXNlciBkZW5pZWQgbG9jYXRpb24gcGVybWlzc2lvbnMuXCI7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge1xyXG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3MsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAqL1xyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYWxsIGNoaWxkcmVuIGZyb20gYSBwYXJlbnQgbm9kZS5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50Tm9kZX0gcGFyZW50IC0gUGFyZW50IG5vZGUgY29udGFpbmluZyBjaGlsZHJlbi5cclxuICAgKi9cclxuICBzdGF0aWMgcmVtb3ZlQWxsQ2hpbGRyZW4ocGFyZW50KSB7XHJcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VudGVuY2UgZm9ybWF0LiBNYWtlcyBzdXJlIHRoZSBmaXJzdCBsZXR0ZXIgaXMgY2FwaXRhbGl6ZWQsIGFuZCB0aGVuIFxyXG4gICAqIGEgcGVyaW9kIGlzIGFwcGVuZGVkLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBhIHN0cmluZyB0byBzZW50ZW5jZS1jYXNlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyB0b1NlbnRlbmNlKHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpICsgXCIuXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGFzc2lnbmVkIHRvIGVhY2ggYnV0dG9uXHJcbiAgICogd2hlbiBvbmx5IG9uZSBvZiB0aGVtIHNob3VsZCBiZSB0b2dnbGVkLiBGdW5jdGlvbnMgbGlrZSBhIHJhZGlvXHJcbiAgICogYnV0dG9uIGJ1dCB3aXRoIGRpZmZlcmVudCBzdHlsaW5nLlxyXG4gICAqIEBwYXJhbSB7Kn0gZSBcclxuICAgKiBAcGFyYW0geyp9IHBhcmVudFNlbGVjdG9yIFxyXG4gICAqL1xyXG4gIHN0YXRpYyB0b2dnbGVTZWxlY3RlZChlLCBwYXJlbnRTZWxlY3Rvcikge1xyXG4gICAgLy8gcmVtb3ZlIHNlbGVjdGVkIGNsYXNzIGZyb20gdGhlIG90aGVyLlxyXG4gICAgY29uc3QgcGFyZW50ID0gVXRpbGl0eS5nZXRNYXRjaGluZ1BhcmVudChlLmN1cnJlbnRUYXJnZXQsIHBhcmVudFNlbGVjdG9yKTtcclxuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3RlZCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xyXG4gICAgY3VycmVudFNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgIGN1cnJlbnRTZWxlY3RlZC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgIC8vIHRvZ2dsZSBzZWxlY3RlZCBjbGFzcyBvbiB0aGUgYnV0dG9uXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9qcyBcclxuaW1wb3J0IHsgQmF0dGxlc2hpcEVsZW1lbnRzIH0gZnJvbSBcIi4vQmF0dGxlc2hpcEVsZW1lbnRcIjtcclxuaW1wb3J0IHsgR0FNRV9TVEFURSB9IGZyb20gXCIuL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9nYW1lbWFuYWdlclwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuLy9jc3NcclxuaW1wb3J0IFwiLi4vY3NzL3Jlc2V0LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3MvaW5kZXguY3NzXCI7XHJcblxyXG4oZnVuY3Rpb24gbWFpbigpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgY29uc3QgcDEgPSBuZXcgUGxheWVyKFwiQ29tbWFuZGVyIEJsdWVcIiwgZmFsc2UpO1xyXG4gIGNvbnN0IHAyID0gbmV3IFBsYXllcihcIkNvbW1hbmRlciBSZWRcIiwgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZU1hbmFnZXIocDEsIHAyKTtcclxuICBjb25zdCBwYWdlID0gbmV3IEJhdHRsZXNoaXBFbGVtZW50cyhnYW1lKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gcGFnZS5oZWFkZXIoKTtcclxuICBjb25zdCBnYW1lQXJlYSA9IHBhZ2UuZ2FtZUFyZWEoKTtcclxuXHJcbiAgYm9keS5hcHBlbmQoaGVhZGVyLCBnYW1lQXJlYSk7XHJcbiAgXHJcbiAgZ2FtZS5hdHRhY2hQYWdlKHBhZ2UpO1xyXG4gIHBhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUuZ2FtZVByb21wdCk7XHJcbn0pKCk7XHJcblxyXG4vKlxyXG4xOiBVc2VycyBwbGFjZSB0aGVpciBzaGlwcy5cclxuMjogVXNlcnMgcGxheSB0aGUgZ2FtZS5cclxuMzogR2FtZSBlbmRzIHdoZW4gdGhlIG9uZSBwbGF5ZXIncyBiYXR0bGVzaGlwcyBhcmUgZGVzdHJveWVkLlxyXG40OiBUaGUgZ2FtZSBlbmQgaGFzIHN0YXRpc3RpY3MgcmVzdWx0cyBhbmQgb3B0aW9uIHRvIHJlcGxheVxyXG41OiBHbyBiYWNrIHRvIHN0ZXAgMS5cclxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=