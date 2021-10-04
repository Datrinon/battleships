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

    this.players[0] = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.players[0].name, false);
    this.players[1] = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.players[1].name, true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMWlCZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFDQUFxQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJeUQ7QUFDWjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsV0FBVztBQUNYLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3lEO0FBQ2Q7QUFDSDtBQUNWO0FBQzlCO0FBQ0E7QUFDMEI7QUFDQTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrQ0FBTTtBQUN2QixpQkFBaUIsK0NBQU07QUFDdkI7QUFDQSxtQkFBbUIsb0RBQVc7QUFDOUIsbUJBQW1CLGtFQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrREFBcUI7QUFDdEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC8uKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvQmF0dGxlc2hpcEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9nYW1lbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy91dGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubm8tZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWFyZWEge1xcclxcbiAgbWF4LXdpZHRoOiA5MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWFyZWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFRoaXMgcHNldWRvIGVsZW1lbnQgaGVscHMga2VlcCB0aGUgY2VsbHMgYWxpZ25lZCB0b2dldGhlciAqL1xcclxcbi8qIEVtcHR5IGRpdnMgYWN0IHN0cmFuZ2VseSwgc28gcHV0IGNvbnRlbnQgaW4gdGhlbS4gICovXFxyXFxuLyogRGVsZXRlIGl0IGFuZCB0aGVuIHJ1biB0aGlzIGluIGNvbnNvbGUgdG8gc2VlIHRoYXQgKi9cXHJcXG4vKiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxcXCIuY2VsbFxcXCIpLmZvckVhY2goY2VsbCA9PiBjZWxsLnRleHRDb250ZW50ID0gXFxcIkFcXFwiKTsgKi9cXHJcXG4uY2VsbDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJy4nO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0YWJsZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0YWJsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyMzgsIDI1MilcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtc2VsZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWdnYWJsZSB7XFxyXFxuICB3aWR0aDpmaXQtY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnYWJsZSB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbGlkLWRyYWcge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDI1NSwgNTUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDY0LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5zaGlwLXBsYWNlZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM0ZThhMDI7XFxyXFxufVxcclxcblxcclxcbi5vY2N1cGllZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyMzgsIDI1Mik7XFxyXFxufVxcclxcblxcclxcbi5vY2N1cGllZDpob3ZlciB7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWdnYWJsZS52ZXJ0aWNhbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcGxhY2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMzYsIDEzNiwgMC44NjMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya3JlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtc3RhcnQtaG9yaXpvbnRhbCB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbWlkZGxlLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1lbmQtaG9yaXpvbnRhbCB7XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zdGFydC12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLW1pZGRsZS12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWVuZC12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLXRyYW5zcGFyZW50IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1wbGFjZWQgLmNlbGwge1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMTAyLCA3MSwgMC4zKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWFyZWEuZ2FtZS1hY3RpdmUge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucDEuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGUgLnNoaXAge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4ucDEuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmV2ZXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucDIuZ2FtZWJvYXJkIC5jZWxsLmF0dGFja2FibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwwLDAuNik7XFxyXFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCAuY2VsbC5hdHRhY2tlZDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlhcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB2aXNpYmlsaXR5OiB1bnNldDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUEsOERBQThEO0FBQzlELHVEQUF1RDtBQUN2RCx1REFBdUQ7QUFDdkQsZ0ZBQWdGO0FBQ2hGO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5vLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1hcmVhIHtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGlzIHBzZXVkbyBlbGVtZW50IGhlbHBzIGtlZXAgdGhlIGNlbGxzIGFsaWduZWQgdG9nZXRoZXIgKi9cXHJcXG4vKiBFbXB0eSBkaXZzIGFjdCBzdHJhbmdlbHksIHNvIHB1dCBjb250ZW50IGluIHRoZW0uICAqL1xcclxcbi8qIERlbGV0ZSBpdCBhbmQgdGhlbiBydW4gdGhpcyBpbiBjb25zb2xlIHRvIHNlZSB0aGF0ICovXFxyXFxuLyogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXFwiLmNlbGxcXFwiKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC50ZXh0Q29udGVudCA9IFxcXCJBXFxcIik7ICovXFxyXFxuLmNlbGw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcuJztcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpXFxyXFxufVxcclxcblxcclxcbi5zaGlwLXNlbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUge1xcclxcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGUge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi52YWxpZC1kcmFnIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAyNTUsIDU1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCA2NCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLnNoaXAtcGxhY2VkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNGU4YTAyO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQ6aG92ZXIge1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUudmVydGljYWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXBsYWNlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTM2LCAxMzYsIDAuODYzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXN0YXJ0LWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLW1pZGRsZS1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZW5kLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtc3RhcnQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1taWRkbGUtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1lbmQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC10cmFuc3BhcmVudCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VkIC5jZWxsIHtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDEwMiwgNzEsIDAuMyk7ICovXFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtYXJlYSB7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC43cztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhLmdhbWUtYWN0aXZlIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlIC5zaGlwIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJldmVydDtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdhbWVib2FyZCAuY2VsbC5hdHRhY2thYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDAsMCwwLjYpO1xcclxcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgLmNlbGwuYXR0YWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdmlzaWJpbGl0eTogdW5zZXQ7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7IiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgZWxlbWVudHMgZm9yIEJhdHRsZXNoaXAuXHJcbiAqL1xyXG4gZXhwb3J0IGNsYXNzIEJhdHRsZXNoaXBFbGVtZW50cyB7XHJcblxyXG4gICNkaWFsb2dIb2xkZXI7XHJcbiAgI2dhbWVDb250YWluZXI7XHJcbiAgZ2FtZU1hbmFnZXI7XHJcbiAgI2N1cnJlbnREcmFnZ2VkU2hpcElkO1xyXG4gICNjdXJyZW50RHJhZ2dlZExlbmd0aDtcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZU1hbmFnZXIpIHtcclxuICAgIHRoaXMuZ2FtZU1hbmFnZXIgPSBnYW1lTWFuYWdlcjtcclxuICB9XHJcblxyXG4gIGhlYWRlcigpIHtcclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcInRpdGxlLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBjb21wb25lbnQuaGVhZGluZyhcIkJhdHRsZXNoaXBzXCIsIDEpO1xyXG4gICAgY29uc3QgYXV0aG9yTGFiZWwgPSBjb21wb25lbnQucChcImJ5IERhbiBULlwiLCAyKTtcclxuXHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQodGl0bGVMYWJlbCwgYXV0aG9yTGFiZWwpO1xyXG5cclxuICAgIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGdhbWVBcmVhKCkge1xyXG4gICAgdGhpcy4jZ2FtZUNvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJnYW1lLWFyZWFcIik7XHJcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZ2FtZWJvYXJkLWFyZWFcIik7XHJcbiAgICBjb25zdCBjb250cm9sRGlhbG9nQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImNvbnRyb2xzLWFyZWFcIik7XHJcblxyXG4gICAgdGhpcy4jZ2FtZUNvbnRhaW5lci5hcHBlbmQoZ2FtZWJvYXJkQ29udGFpbmVyLCBjb250cm9sRGlhbG9nQ29udGFpbmVyKTtcclxuXHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kKHRoaXMuI2dhbWVib2FyZChcIlBsYXllclwiLCBcInAxXCIpLCB0aGlzLiNnYW1lYm9hcmQoXCJDUFVcIiwgXCJwMlwiKSk7XHJcblxyXG4gICAgY29udHJvbERpYWxvZ0NvbnRhaW5lci5hcHBlbmQodGhpcy4jZGlhbG9nKCksIHRoaXMuI3NoaXBQbGFjZW1lbnQoKSk7XHJcbiAgICBjb250cm9sRGlhbG9nQ29udGFpbmVyLmFwcGVuZCh0aGlzLiNzdGFydEdhbWVQcm9tcHQoKSk7XHJcblxyXG4gICAgdGhpcy5nZW5lcmF0ZURyYWdnYWJsZVNoaXBzKCk7XHJcbiAgICB0aGlzLiNlbmFibGVEcmFnQW5kRHJvcE9uQ2VsbCgpO1xyXG5cclxuICAgIGNvbnRyb2xEaWFsb2dDb250YWluZXIuYXBwZW5kKHRoaXMuI3N1bW1hcnkoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuI2dhbWVDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYSBjbGlja2FibGUgZ3JpZCBiYXNlZCBvbiB0aGUgZ2FtZSBtYW5hZ2VyJ3MgZ2FtZWJvYXJkIHNpemUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXllck5hbWUgOiB0aGUgbmFtZSBvZiB0aGUgcGxheWVyOyB1c2VkIGFzIGEgY2xhc3MgbmFtZSB0byBcclxuICAgKiBpZGVudGlmeSB0aGUgZ2FtZWJvYXJkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgOiBBZGRpdGlvbmFsIGNsYXNzIG5hbWVzIHRvIGlkZW50aWZ5IHRoZSBnYW1lYm9hcmQgYnkuXHJcbiAgICovXHJcbiAgI2dhbWVib2FyZChwbGF5ZXJOYW1lLCBjbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGNvbXBvbmVudC5kaXYoXCJnYW1lYm9hcmRcIiwgY2xhc3NOYW1lKTtcclxuICAgIGNvbnN0IGdhbWVib2FyZEdyaWQgPSBjb21wb25lbnQuZGl2KFwiZ2FtZWJvYXJkLWdyaWRcIik7XHJcblxyXG4gICAgY29uc3QgZ3JpZFNpemUgPSB0aGlzLmdhbWVNYW5hZ2VyLnBsYXllcnNbMF0uZ2FtZWJvYXJkLnNpemU7XHJcbiAgICBjb25zdCBudW1iZXJDZWxsID0gY29tcG9uZW50LmRpdihcImNlbGxcIiwgXCJudW1iZXJpbmdcIik7XHJcblxyXG4gICAgZ2FtZWJvYXJkR3JpZC5wcmVwZW5kKGNvbXBvbmVudC5kaXYoXCJjZWxsXCIsIFwiYmxhbmtcIikpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSByb3cgbnVtYmVyaW5nXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcclxuICAgICAgbnVtYmVyQ2VsbC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgICBnYW1lYm9hcmRHcmlkLmFwcGVuZChudW1iZXJDZWxsLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlIGNvbHVtbiBudW1iZXJpbmcgYW5kIGNlbGxzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcclxuICAgICAgbnVtYmVyQ2VsbC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG5cclxuICAgICAgZ2FtZWJvYXJkR3JpZC5hcHBlbmQobnVtYmVyQ2VsbC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkU2l6ZTsgaisrKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiLCBcInNlbGVjdGFibGVcIik7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGo7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICAgIGdhbWVib2FyZEdyaWQuYXBwZW5kKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZWJvYXJkLmFwcGVuZChnYW1lYm9hcmRHcmlkKTtcclxuXHJcbiAgICAvLyBBcHBseSBoZWFkZXJzIGZvciB0aGUgZ2FtZWJvYXJkXHJcbiAgICBnYW1lYm9hcmQucHJlcGVuZChjb21wb25lbnQuaGVhZGluZyhwbGF5ZXJOYW1lLCAyLCBcImdhbWVib2FyZC1vd25lclwiKSk7XHJcblxyXG4gICAgcmV0dXJuIGdhbWVib2FyZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGRpYWxvZyBtZXNzYWdlLCB3aGljaCBpcyB1c2VkIHRvIFxyXG4gICAqIGdpdmUgdGhlIHVzZXIgZGlyZWN0aW9ucyBvbiBlYWNoIHBoYXNlIG9mIHRoZSBnYW1lLlxyXG4gICAqL1xyXG4gICNkaWFsb2coKSB7XHJcbiAgICBsZXQgZGlhbG9nQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImRpYWxvZ1wiKTtcclxuICAgIGxldCBkaWFsb2dNc2cgPSBjb21wb25lbnQucChcIldlbGNvbWUuXCIsIFwiZGlhbG9nLW1zZ1wiKTtcclxuICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmQoZGlhbG9nTXNnKTtcclxuXHJcbiAgICB0aGlzLiNkaWFsb2dIb2xkZXIgPSBkaWFsb2dDb250YWluZXI7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ0NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgZGlhbG9nIGZvciB0aGUgYmF0dGxlc2hpcCBnYW1lLiBQcmVmZXJhYmx5LCB1c2UgbWVzc2FnZXMgZnJvbSB0aGVcclxuICAgKiBnYW1lbWFuYWdlciBHQU1FX1NUQVRFIG9iamVjdC5cclxuICAgKiBAcGFyYW0ge30gbWVzc2FnZSBcclxuICAgKi9cclxuICBzZXREaWFsb2cobWVzc2FnZSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWFsb2ctbXNnXCIpLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhbiBpbnZlbnRvcnkgb2Ygc2hpcHMgYW5kIGxldHMgdGhlbSBiZSBkcmFnZ2VkIGJ5IHRoZSBwbGF5ZXIuXHJcbiAgICovXHJcbiAgI3NoaXBQbGFjZW1lbnQoKSB7XHJcbiAgICBsZXQgc2hpcEludmVudG9yeSA9IGNvbXBvbmVudC5kaXYoXCJzaGlwLXBsYWNlclwiKTtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0gY29tcG9uZW50LmhlYWRpbmcoXCJTZWxlY3QgU2hpcFwiLCAzKTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBjb21wb25lbnQuZGl2KFwic2hpcC1zZWxlY3Rpb25cIik7XHJcblxyXG4gICAgc2hpcEludmVudG9yeS5hcHBlbmQoaGVhZGVyLCBzZWxlY3Rpb24pO1xyXG5cclxuICAgIHJldHVybiBzaGlwSW52ZW50b3J5O1xyXG4gIH1cclxuXHJcbiAgLyoqIFxyXG4gICAqIFJlZ2VuZXJhdGUgZHJhZ2dhYmxlIHNoaXBzIHdpdGhpbiAuc2hpcC1zZWxlY3Rpb24uXHJcbiAgICovXHJcbiAgZ2VuZXJhdGVEcmFnZ2FibGVTaGlwcygpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5zaGlwLXNlbGVjdGlvblwiKVxyXG4gICAgdGhpcy5nYW1lTWFuYWdlci5zaGlwTGVuZ3Rocy5mb3JFYWNoKChzaGlwTGVuLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgc2hpcCA9IGNvbXBvbmVudC5kaXYoXCJzaGlwXCIsIFwiZHJhZ2dhYmxlXCIpO1xyXG4gICAgICBzaGlwLmlkID0gYHBsYXllci1zaGlwJHtpbmRleH1gO1xyXG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiKTtcclxuICAgICAgICBzaGlwLmFwcGVuZChjZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIHRoaXMuI3NoaXBPbkRyYWdTdGFydC5iaW5kKHRoaXMpKTtcclxuICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCB0aGlzLiNzaGlwT25EcmFnRW5kLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgY29udGFpbmVyLmFwcGVuZChzaGlwKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5IGRyb3AgZ3VpZGVzIHdoZW4gYSBzaGlwIGlzIGJlaW5nIGRyYWdnZWQgb3ZlciBhIGdhbWVib2FyZC5cclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gZHJhZyBvdmVyIGV2ZW50LlxyXG4gICAqL1xyXG4gICNkaXNwbGF5RHJvcEd1aWRlcyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBsZXQgaG92ZXJDZWxsID0gVXRpbGl0eS5nZXRNYXRjaGluZ1BhcmVudChlLnRhcmdldCwgXCIuc2VsZWN0YWJsZVwiKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZH1gKS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWR9YCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIikpIHtcclxuICAgICAgLy8gYXBwbHkgdmVydGljYWwgZ3VpZGUuXHJcbiAgICAgIGxldCBjb2wgPSBob3ZlckNlbGwuZGF0YXNldC5jb2w7XHJcbiAgICAgIGxldCBjZWxsc0NvbCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1jb2w9XCIke2NvbH1cIl1gKSk7XHJcbiAgICAgIGxldCBpbmRleCA9IGNlbGxzQ29sLmluZGV4T2YoaG92ZXJDZWxsKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCArIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoIDw9IGNlbGxzQ29sLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgLy8gbm90IGEgdmFsaWQgcGxhY2VtZW50LlxyXG4gICAgICAgICAgaWYgKGNlbGxzQ29sW2ldLmNsYXNzTGlzdC5jb250YWlucyhcIm9jY3VwaWVkXCIpXHJcbiAgICAgICAgICAgICYmIGNlbGxzQ29sW2ldLmRhdGFzZXQuc2hpcCAhPT0gdGhpcy4jY3VycmVudERyYWdnZWRTaGlwSWQpIHtcclxuICAgICAgICAgICAgdGhpcy4jcmVtb3ZlRHJhZ0d1aWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNlbGxzQ29sW2ldLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcmFnXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gYXBwbHkgaG9yaXpvbnRhbCBndWlkZVxyXG4gICAgICBsZXQgcm93ID0gaG92ZXJDZWxsLmRhdGFzZXQucm93O1xyXG4gICAgICBsZXQgY2VsbHNSb3cgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgICBsZXQgaW5kZXggPSBjZWxsc1Jvdy5pbmRleE9mKGhvdmVyQ2VsbCk7XHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImhvdmVyaW5nIG92ZXIgaW5kZXg6IFwiICsgaW5kZXgpO1xyXG5cclxuICAgICAgaWYgKGluZGV4ICsgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGggPD0gY2VsbHNSb3cubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyB0aGlzLiNjdXJyZW50RHJhZ2dlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAvLyBub3QgYSB2YWxpZCBwbGFjZW1lbnQuXHJcbiAgICAgICAgICBpZiAoY2VsbHNSb3dbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib2NjdXBpZWRcIilcclxuICAgICAgICAgICAgJiYgY2VsbHNSb3dbaV0uZGF0YXNldC5zaGlwICE9PSB0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZCkge1xyXG4gICAgICAgICAgICB0aGlzLiNyZW1vdmVEcmFnR3VpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNlbGxzUm93W2ldLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcmFnXCIpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coe2luZGV4LCBjdXJyZW50RHJhZ2dlZExlbmd0aCwgaX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGRyYWcgZ3VpZGUuXHJcbiAgICovXHJcbiAgI3JlbW92ZURyYWdHdWlkZSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlXCIpXHJcbiAgICAuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWQtZHJhZ1wiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWZ0ZXIgdGhlIHVzZXIgZHJvcHMgdGhlIHNoaXAsIHBsYWNlcyB0aGUgc2hpcC5cclxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gRHJvcCBldmVudC5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICAjcGxhY2VTaGlwT25Ecm9wKGUpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuI2N1cnJlbnREcmFnZ2VkU2hpcElkfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgLy8gb25seSB3aGVuIHRoZSBhcmVhIGlzIGEgdmFsaWQtZHJhZyBkbyB3ZSBhZGQgaXQgaW4uIG90aGVyd2lzZSwgbm9wZS5cclxuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmFsaWQtZHJhZ1wiKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy4jcmVtb3ZlRHJhZ0d1aWRlKCk7XHJcblxyXG4gICAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuXHJcbiAgICAvLyBiZWZvcmUgbW92aW5nIHRoZSBzaGlwLCBkZXRlcm1pbmUgaWYgaXQgaGFzIGJlZW4gcGxhY2VkIGFscmVhZHkuLi4gXHJcbiAgICAvLyB0aGlzIGlzIHRydWUgaWYgdGhlIHNoaXAgaXMgaW5zaWRlIGEgc2VsZWN0YWJsZSBjZWxsLlxyXG4gICAgbGV0IGxhc3RQbGFjZWRMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWxlY3RhYmxlICMke2lkfWApO1xyXG5cclxuICAgIC8vIGlmIHNvIHdlIG5lZWQgdG8gcmVtb3ZlIG9jY3VwaWVkIGZyb20gc3VjaCBjZWxscy5cclxuICAgIGlmIChsYXN0UGxhY2VkTG9jYXRpb24gIT09IG51bGwpIHtcclxuICAgICAgbGV0IGNlbGxzO1xyXG4gICAgICBsZXQgdmVydGljYWwgPSBsYXN0UGxhY2VkTG9jYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIik7XHJcblxyXG4gICAgICAvLyBwYXJlbnROb2RlIGlzIHRoZSBjZWxsLlxyXG4gICAgICBsYXN0UGxhY2VkTG9jYXRpb24gPSBsYXN0UGxhY2VkTG9jYXRpb24ucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIGxldCBjb2wgPSBsYXN0UGxhY2VkTG9jYXRpb24uZGF0YXNldC5jb2w7XHJcbiAgICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtY29sPVwiJHtjb2x9XCJdYCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJlbW92ZSBvY2N1cGllZCBtYXJraW5nIGZyb20gdGhvc2UgY2VsbHMuXHJcbiAgICAgICAgbGV0IHJvdyA9IGxhc3RQbGFjZWRMb2NhdGlvbi5kYXRhc2V0LnJvdztcclxuICAgICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke3Jvd31cIl1gKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBpbmRleCA9IGNlbGxzLmluZGV4T2YobGFzdFBsYWNlZExvY2F0aW9uKTtcclxuXHJcbiAgICAgIC8vIGNvbG9yIHRoZSBzdWJzZXF1ZW50IGNlbGxzLlxyXG4gICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIHRoaXMuI2N1cnJlbnREcmFnZ2VkTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgY2VsbHNbaV0uZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwbGFjZWRDZWxsID0gZS50YXJnZXQ7XHJcbiAgICAvLyBtb3ZlIHRoZSBzaGlwXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5jbGFzc0xpc3QuYWRkKFwic2hpcC1wbGFjZWRcIik7XHJcbiAgICBwbGFjZWRDZWxsLmFwcGVuZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKSk7XHJcblxyXG4gICAgbGV0IHZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIik7XHJcbiAgICBsZXQgY2VsbHM7XHJcblxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGxldCBjb2wgPSBwbGFjZWRDZWxsLmRhdGFzZXQuY29sO1xyXG4gICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1jb2w9XCIke2NvbH1cIl1gKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBnZXQgdGhlIHJvdywgaW5kZXgsIGFuZCBwbGFjZSB0aGVyZWFmdGVyIG9mIHRoZSBwbGFjZWQgY2VsbC5cclxuICAgICAgbGV0IHJvdyA9IHBsYWNlZENlbGwuZGF0YXNldC5yb3c7XHJcbiAgICAgIGNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLXJvdz1cIiR7cm93fVwiXWApKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5kZXggPSBjZWxscy5pbmRleE9mKHBsYWNlZENlbGwpO1xyXG5cclxuICAgIC8vIGNvbG9yIHRoZSBzdWJzZXF1ZW50IGNlbGxzLlxyXG4gICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyB0aGlzLiNjdXJyZW50RHJhZ2dlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgY2VsbHNbaV0uZGF0YXNldC5zaGlwID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWxsb3cgdGhlIHNoaXAgdG8gYmUgcm90YXRlZC5cclxuICAgIHRoaXMuI2FsbG93UGxhY2VkU2hpcFJvdGF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb250YWlucyBhIGNvbGxlY3Rpb24gb2YgY2FsbGJhY2tzIHRvIGVuYWJsZSBkcmFnICduJyBkcm9wIG9uIHRoZSBnYW1lYm9hcmQgd2l0aCByb3RhdGlvbi5cclxuICAgKiBXb3JrcyB3aXRoIHRoZSBkcmFnIGFuZCBkcm9wIEFQSSwgc28gaXQgd29ya3MgdG8gYXNzaWduIGNhbGxiYWNrcyB0byB0aGUgXHJcbiAgICogZHJhZ2dhYmxlIGl0ZW1zLCBhbmQgYWxsIHRoZSBkcm9wcGFibGUgem9uZSBpdCBwZXJ0YWlucyB0by4gSW4gdGhpcyBjYXNlLFxyXG4gICAqIHRoZSBzaGlwcyBhcmUgdGhlIGRyYWdnYWJsZXMsIGFuZCB0aGUgZHJvcCB6b25lcyBhcmUgYWxsIHRoZSBjZWxscyBvZiBcclxuICAgKiBwbGF5ZXIgMSdzIGdhbWVib2FyZC5cclxuICAgKi9cclxuICAjZW5hYmxlRHJhZ0FuZERyb3BPbkNlbGwoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIC8vIHRoaXMuYWRkU2hpcERyYWdIYW5kbGVycygpO1xyXG5cclxuICAgIC8vIGFsbCBjZWxscyB0aGF0IGFyZSBzZWxlY3RhYmxlIGFyZSBkcm9wcGFibGUgYXJlYXMuXHJcbiAgICB0aGlzLiNnYW1lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlXCIpLmZvckVhY2goY2VsbCA9PiB7XHJcblxyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBzZWxmLiNkaXNwbGF5RHJvcEd1aWRlcy5iaW5kKHNlbGYpKTtcclxuICAgICAgLy8gd2hlbiB0aGUgZHJhZyBlbGVtZW50IGxlYXZlcyBkcm9wcGFibGUgem9uZSwgcmVtb3ZlIGFsbCB2YWxpZCBkcmFnXHJcbiAgICAgIC8vIGl0J2xsIGp1c3QgYmUgcmVjcmVhdGVkIGJ5IHZhbGlkLWRyYWcuXHJcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBzZWxmLiNyZW1vdmVEcmFnR3VpZGUpO1xyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHNlbGYuI3BsYWNlU2hpcE9uRHJvcC5iaW5kKHNlbGYpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgI3NoaXBPbkRyYWdTdGFydChlKSB7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLnRhcmdldC5pZCk7XHJcblxyXG4gICAgdGhpcy4jY3VycmVudERyYWdnZWRMZW5ndGggPSBlLnRhcmdldC5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgIHRoaXMuI2N1cnJlbnREcmFnZ2VkU2hpcElkID0gZS50YXJnZXQuaWQgPz8gZS50YXJnZXQuZGF0YXNldC5zaGlwO1xyXG4gICAgLy8gYmxhbmsgaW1hZ2VcclxuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShpbWcsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgI3NoaXBPbkRyYWdFbmQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLiNjdXJyZW50RHJhZ2dlZFNoaXBJZH1gKVxyXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIGZvciBzaGlwcyB0byBiZSByb3RhdGVkOyB0aGlzIGlzIGludm9rZWQgZWFjaCB0aW1lIGEgc2hpcCBpcyBwbGFjZWQsXHJcbiAgICogdG8gYWxsb3cgc2hpcHMsIG9uIHRoZSBnYW1lYm9hcmQsIHRvIGJlIHJvdGF0ZWQuXHJcbiAgICovXHJcbiAgI2FsbG93UGxhY2VkU2hpcFJvdGF0aW9uKCkge1xyXG4gICAgbGV0IGdyaWRTaXplID0gdGhpcy5nYW1lTWFuYWdlci5wbGF5ZXJzWzBdLmdhbWVib2FyZC5ncmlkLmxlbmd0aDtcclxuICAgIC8vIGFsbG93IHJvdGF0aW9uIG9mIHBsYWNlZCBzaGlwc1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLmRyYWdnYWJsZS5zaGlwLXBsYWNlZFwiKS5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICBpZiAoc2hpcC5vbmNsaWNrID09PSBudWxsKSB7XHJcbiAgICAgICAgc2hpcC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHZlcnRpY2FsT24gPSBzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgbGV0IGNlbGwgPSBzaGlwLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICBsZXQgc2hpcExlbmd0aCA9IHNoaXAuY2hpbGRFbGVtZW50Q291bnQ7XHJcblxyXG4gICAgICAgICAgbGV0IHJvd0luZGV4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdyk7XHJcbiAgICAgICAgICBsZXQgY29sSW5kZXggPSBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sKTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IHJvd0luZGV4LCBzaGlwTGVuZ3RoLCBncmlkU2l6ZSB9KTtcclxuXHJcbiAgICAgICAgICBpZiAocm93SW5kZXggKyBzaGlwTGVuZ3RoID4gZ3JpZFNpemUgfHwgY29sSW5kZXggKyBzaGlwTGVuZ3RoID4gZ3JpZFNpemUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGNoZWNrIGlmIGFueSBzaGlwcyBhcmUgaW4gdGhlIHdheSBvZiB0aGUgcm90YXRpb24uXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gcm93SW5kZXggKyAxOyBpIDwgcm93SW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnRcclxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke2l9XCJdYCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGNvbEluZGV4OyBqIDwgY29sSW5kZXggKyBzaGlwTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICBpZiAoY2VsbHNbal0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib2NjdXBpZWRcIikgJiYgY2VsbHNbal0uZGF0YXNldC5zaGlwICE9PSBzaGlwLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgcHJvY2VlZC5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlcmUncyBlbm91Z2ggc3BhY2UgdG8gbW92ZSBpdCB2ZXJ0aWNhbGx5LCBiYXNlZCBvbiB0aGUgc2hpcCBsZW5ndGguXHJcbiAgICAgICAgICAvLyAxIG5vIHNoaXBzIGluIHRoZSB3YXlcclxuICAgICAgICAgIC8vIDIud2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIGdhbWVib2FyZC5cclxuICAgICAgICAgIC8vIG9ubHkgdGhlbiBkbyB5b3UgYWxsb3cgdmVydGljYWwgY2xhc3MuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjZWxsKTtcclxuXHJcbiAgICAgICAgICBpZiAodmVydGljYWxPbikge1xyXG4gICAgICAgICAgICAvLyB2ZXJ0aWNhbCAtPiBob3Jpem9udGFsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSByb3dJbmRleCArIDE7IGkgPCByb3dJbmRleCArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7aX1cIl1bZGF0YS1jb2w9XCIke2NvbEluZGV4fVwiXWApO1xyXG4gICAgICAgICAgICAgIC8vIHN0cmlwIHZlcnRpY2FsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29sSW5kZXggKyAxOyBpIDwgY29sSW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAvLyBhZGQgaG9yaXpvbnRhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sPVwiJHtpfVwiXWApO1xyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gc2hpcC5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbCAtPiB2ZXJ0aWNhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29sSW5kZXggKyAxOyBpIDwgY29sSW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAvLyByZW1vdmUgaG9yaXpvbnRhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sPVwiJHtpfVwiXWApXHJcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93SW5kZXggKyAxOyBpIDwgcm93SW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAvLyBhZGQgdmVydGljYWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKVxyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gc2hpcC5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHRvZ2dsZSB2ZXJ0aWNhbCBmb3IgdGhlIHZpZXdcclxuICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgLy8gdGhlbiwgYWx0ZXIgdGhlIG9jY3VwaWVkIGNsYXNzLlxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGRpc2FibGUgcm90YXRpb24gZm9yIHNoaXBzIHRoYXQgYXJlIG5vdCBwbGFjZWQuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAuZHJhZ2dhYmxlOm5vdCguc2hpcC1wbGFjZWQpXCIpLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIGlmIChzaGlwLm9uY2xpY2sgIT09IG51bGwpIHtcclxuICAgICAgICBzaGlwLm9uY2xpY2sgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQbGFjZXMgc2hpcHMgb24gdGhlIGdhbWVib2FyZCBnaXZlbiBjb29yZGluYXRlcy4gVXNlZnVsIGZvciBBSS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCBcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGxheWVyMiAtIFBsYWNlIHNoaXBzIG9uIHBsYXllciAyJ3MgZ2FtZWJvYXJkP1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIHRoZSBJRCB0aGUgc2hpcCBzaG91bGQgYmUgaWRlbnRpZmllZCBieS5cclxuICAgKi9cclxuICBzdGF0aWMgcGxhY2VTaGlwVmlhQ29vcmRpbmF0ZShsZW5ndGgsIHJvdywgY29sLCB2ZXJ0aWNhbCwgcGxheWVyMiA9IHRydWUsIGlkKSB7XHJcbiAgICBjb25zb2xlLmxvZyh7bGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwsIHBsYXllcjIsIGlkfSk7XHJcbiAgICBsZXQgc2VsZWN0b3I7XHJcbiAgICBsZXQgZ2FtZWJvYXJkOyBcclxuICAgIGxldCBjcHVUYWcgPSBcImNwdS1zaGlwLXBsYWNlZFwiO1xyXG5cclxuICAgIGlmIChwbGF5ZXIyKSB7XHJcbiAgICAgIHNlbGVjdG9yID0gXCIucDIuZ2FtZWJvYXJkXCJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGVjdG9yID0gXCIucDEuZ2FtZWJvYXJkXCJcclxuICAgIH1cclxuXHJcbiAgICBnYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3NlbGVjdG9yfWApO1xyXG5cclxuICAgIGxldCBvcmlnaW5DZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5zZWxlY3RhYmxlW2RhdGEtcm93PScke3Jvd30nXVtkYXRhLWNvbD0nJHtjb2x9J11gKTtcclxuICAgIG9yaWdpbkNlbGwuZGF0YXNldC5zaGlwID0gaWQ7XHJcblxyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBsZXQgcm93cyA9IEFycmF5LmZyb20oZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoYC5zZWxlY3RhYmxlW2RhdGEtY29sPVwiJHtjb2x9XCJdYCkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcm93c1tpXS5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIiwgY3B1VGFnKTtcclxuICAgICAgICByb3dzW2ldLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG5cclxuICAgICAgICBzd2l0Y2goaSkge1xyXG4gICAgICAgICAgY2FzZSByb3c6IC8vIHN0YXJ0XHJcbiAgICAgICAgICAgIHJvd3NbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtc3RhcnQtdmVydGljYWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSByb3cgKyBsZW5ndGggLSAxOiAvLyBlbmRcclxuICAgICAgICAgICAgcm93c1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1lbmQtdmVydGljYWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogLy8gbWlkXHJcbiAgICAgICAgICAgIHJvd3NbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtbWlkZGxlLXZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjb2xzID0gQXJyYXkuZnJvbShnYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke3Jvd31cIl1gKSk7XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGxldCBpID0gY29sOyBpIDwgY29sICsgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb2xzW2ldLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiLCBjcHVUYWcpO1xyXG4gICAgICAgIGNvbHNbaV0uZGF0YXNldC5zaGlwID0gaWQ7XHJcblxyXG4gICAgICAgIHN3aXRjaChpKSB7XHJcbiAgICAgICAgICBjYXNlIGNvbDogLy8gc3RhcnRcclxuICAgICAgICAgICAgY29sc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdGFydC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgY29sICsgbGVuZ3RoIC0gMTogLy8gZW5kXHJcbiAgICAgICAgICAgIGNvbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtZW5kLWhvcml6b250YWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogLy8gbWlkXHJcbiAgICAgICAgICAgIGNvbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtbWlkZGxlLWhvcml6b250YWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXNrcyB1c2VyIGZvciB0aGVpciBuYW1lIGFuZCB0byBzdGFydCB0aGUgZ2FtZS4uLiBvbmx5IHdoZW4gdGhlIHNoaXAgcGxhY2VtZW50IGNvbnRhaW5lciBpcyBlbXB0eVxyXG4gICAqIHdpbGwgdGhlIHN0YXJ0IGdhbWUgYnV0dG9uIHVubG9jay5cclxuICAgKi9cclxuICAjc3RhcnRHYW1lUHJvbXB0KCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBzdGFydEdhbWVGb3JtID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcInN0YXJ0LWdhbWUtcHJvbXB0XCIpO1xyXG4gICAgY29uc3QgW3BsYXllck5hbWVMYWJlbCwgcGxheWVyTmFtZUZpZWxkXSA9IGNvbXBvbmVudC5mb3JtSW5wdXQoXCJOYW1lXCIsIFwiaW5wdXRcIiwgXCJwMS1uYW1lXCIsIFwicDEtbmFtZVwiKTtcclxuICAgIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGNvbXBvbmVudC5idXR0b24oXCJTdGFydCBHYW1lIVwiLCBcInN0YXJ0LWdhbWUtYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgZXJyb3JGaWVsZCA9IGNvbXBvbmVudC5wKFwiRXJyb3IgRmllbGQgSGVyZVwiLCBcImZvcm0tZXJyb3ItZmllbGRcIik7XHJcblxyXG4gICAgcGxheWVyTmFtZUZpZWxkLnZhbHVlID0gXCJDb21tYW5kZXJcIjtcclxuICAgIHBsYXllck5hbWVGaWVsZC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgc3RhcnRHYW1lRm9ybS5hcHBlbmQocGxheWVyTmFtZUxhYmVsLCBwbGF5ZXJOYW1lRmllbGQsIHN0YXJ0R2FtZUJ1dHRvbiwgZXJyb3JGaWVsZCk7XHJcblxyXG4gICAgc3RhcnRHYW1lQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICBzdGFydEdhbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZWxmLmdhbWVNYW5hZ2VyLnN0YXJ0R2FtZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgRE9NT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLiNjaGVja0FsbFNoaXBzUGxhY2VkKTtcclxuICAgIERPTU9ic2VydmVyLm9ic2VydmUodGhpcy4jZ2FtZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtc2VsZWN0aW9uXCIpLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XHJcblxyXG4gICAgcmV0dXJuIHN0YXJ0R2FtZUZvcm07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYWxsIHNoaXBzIGJlZW4gcGxhY2VkPyBJZiBzbywgdW5sb2NrcyB0aGUgZ2FtZSBidXR0b24uIFVzZWQgd2l0aFxyXG4gICAqIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICovXHJcbiAgI2NoZWNrQWxsU2hpcHNQbGFjZWQobXV0YXRlZCkge1xyXG4gICAgbGV0IHNoaXBzUmVtYWluaW5nID0gbXV0YXRlZFswXS50YXJnZXQuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICBpZiAoc2hpcHNSZW1haW5pbmcgPiAwKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZS1idXR0b25cIikuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lLWJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvd3MgYSBzdW1tYXJ5LiBUbyBiZSB1c2VkIGFmdGVyIHRoZSBnYW1lIGhhcyBmaW5pc2hlZC5cclxuICAgKi9cclxuICAjc3VtbWFyeSgpIHtcclxuICAgIGNvbnN0IHN1bW1hcnkgPSBjb21wb25lbnQuZGl2KFwic3VtbWFyeS1zY3JlZW5cIik7XHJcbiAgICBjb25zdCB2aWN0b3J5TXNnID0gY29tcG9uZW50LnAoYEdhbWUgT3ZlciEgV2lubmVyOiBgLCBcInZpY3RvcnktbWVzc2FnZVwiKTtcclxuICAgIGNvbnN0IHdpbm5lciA9IGNvbXBvbmVudC5zcGFuKFwiJVwiLCBcIndpbm5lclwiKTtcclxuXHJcbiAgICBjb25zdCBzdGF0c0NvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJzdW1tYXJ5LXN0YXRpc3RpY3NcIik7XHJcbiAgICBjb25zdCBzdGF0c0hlYWRpbmcgPSBjb21wb25lbnQuaGVhZGluZyhcIkdhbWUgU3RhdGlzdGljczogXCIsIDIsIFwiaGVhZGVyXCIpO1xyXG4gICAgY29uc3Qgc3RhdHNBY2N1cmFjeSA9IGNvbXBvbmVudC5wKFwiQWNjdXJhY3k6IFwiLCBcImFjY3VyYWN5XCIpO1xyXG4gICAgY29uc3QgcDFBY2N1cmFjeSA9IGNvbXBvbmVudC5zcGFuKFwiLS0lXCIsIFwicDEtYWNjdXJhY3ktbWV0cmljXCIpO1xyXG4gICAgY29uc3QgcDJBY2N1cmFjeSA9IGNvbXBvbmVudC5zcGFuKFwiLS0lXCIsIFwicDItYWNjdXJhY3ktbWV0cmljXCIpO1xyXG5cclxuICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGNvbXBvbmVudC5idXR0b24oXCJQbGF5IEFnYWluXCIsIFwicGxheS1hZ2FpblwiKTtcclxuXHJcbiAgICB2aWN0b3J5TXNnLmFwcGVuZCh3aW5uZXIpO1xyXG5cclxuICAgIHN0YXRzQ29udGFpbmVyLmFwcGVuZChzdGF0c0hlYWRpbmcsXHJcbiAgICAgIHN0YXRzQWNjdXJhY3ksIHAxQWNjdXJhY3ksIHAyQWNjdXJhY3kpO1xyXG5cclxuICAgIHN1bW1hcnkuYXBwZW5kKHZpY3RvcnlNc2csIHdpbm5lciwgc3RhdHNDb250YWluZXIsIHBsYXlBZ2Fpbik7XHJcbiAgICAgIFxyXG4gICAgcmV0dXJuIHN1bW1hcnk7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCBVdGlsaXR5IGZyb20gXCIuL3V0aWxpdHlcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgY2xhc3MuIENvbnRhaW5zIHZhcmlvdXMgRE9NIGVsZW1lbnRzLlxyXG4gKiBBdXRob3I6IGRhdHJpbm9uXHJcbiAqIFZlcnNpb246IDEuNCAoV2VhdGhlcilcclxuICovXHJcblxyXG5jbGFzcyBDb21wb25lbnQge1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNjAwcHgpXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgYSBiYXNpYyBIVE1MIHNrZWxldG9uIGZvciB0aGUgd2ViIHBhZ2UsIGdlbmVyYXRpbmcgYSBoZWFkZXIsXHJcbiAgICogbWFpbiwgYW5kIHN0aWNreSBmb290ZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyp9IGhlYWRlclRpdGxlIC0gV2hhdCB0aGUgd2ViIHBhZ2UgaXMgY2FsbGVkLlxyXG4gICAqIEBwYXJhbSB7Ym9vbH0gZW1wdHlIZWFkZXIgLSBTaG91bGQgdGhlIGhlYWRlciB1c2UgYSBkZWZhdWx0IHN0cnVjdHVyZT9cclxuICAgKiBUaGUgZGVmYXVsdCBzdHJ1Y3R1cmUgbG9va3MgbGlrZSBbIExvZ28gfCB8IHwgfCBOYXZpZ2F0aW9uIExpbmtzXVxyXG4gICAqIEByZXR1cm5zIC0gQW4gYXJyYXkgY29udGFpbmluZyByZWZlcmVuY2VzIHRvIHRoZSBnZW5lcmF0ZWQgaGVhZGVyLCBtYWluLCBhbmQgZm9vdGVyLlxyXG4gICAqL1xyXG4gIGluaXRpYWxpemVTdHJ1Y3R1cmUoXHJcbiAgICBoZWFkZXJUaXRsZSxcclxuICAgIGVtcHR5SGVhZGVyID0gZmFsc2UsXHJcbiAgICBjcmVhdGVNb250aCxcclxuICAgIGdpdGh1YkxpbmtcclxuICApIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgbWFpbldyYXBwZXIgPSB0aGlzLmRpdihcImNvbnRlbnRcIik7XHJcbiAgICBsZXQgaGVhZGVyO1xyXG4gICAgaWYgKGVtcHR5SGVhZGVyKSB7XHJcbiAgICAgIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIgPSB0aGlzLmhlYWRlcihoZWFkZXJUaXRsZSk7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IHRoaXMuZm9vdGVyKGNyZWF0ZU1vbnRoLCBnaXRodWJMaW5rKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG4gICAgbWFpbldyYXBwZXIuYXBwZW5kKGhlYWRlciwgbWFpbik7XHJcbiAgICBib2R5LmFwcGVuZChtYWluV3JhcHBlciwgZm9vdGVyKTtcclxuXHJcbiAgICByZXR1cm4gW2hlYWRlciwgbWFpbiwgZm9vdGVyXTtcclxuICB9XHJcblxyXG4gIGNvbnRlbnQoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyKHRpdGxlKSB7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIGxldCB0aXRsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICAgIG1lbnVCdXR0b24uaWQgPSBcIm1lbnUtYnV0dG9uXCI7XHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1iYXJzXCIsIFwibm8tZGlzcGxheVwiKTtcclxuXHJcbiAgICB0aGlzLm1xbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLm1hdGNoZXMpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGl0IGJpZ2dlciB0aGFuIHRoZSBxdWVyeSBydWxlLlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluLW91dFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVudSBwcmVzc2VkLlwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2xpZGUtaW4tb3V0XCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICAvLyBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpbWd9KWA7XHJcblxyXG4gICAgdGl0bGVFbGVtLmlkID0gXCJwYWdlLXRpdGxlXCI7XHJcbiAgICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICB0aXRsZUVsZW0uaW5zZXJ0QmVmb3JlKG1lbnVCdXR0b24sIHRpdGxlRWxlbS5maXJzdENoaWxkKTtcclxuICAgIGhlYWRlci5hcHBlbmQodGl0bGVFbGVtKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgbmF2YmFyKC4uLmxpbmtzKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBuYXYuaWQgPSBcIm5hdmJhclwiO1xyXG4gICAgbGlua0NvbnRhaW5lci5pZCA9IFwibmF2YmFyLWJ1dHRvbnMtY29udGFpbmVyXCI7XHJcblxyXG4gICAgZm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG4gICAgICBjb25zdCBsaW5rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBjb25zdCBsaW5rQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItYnV0dG9uXCIpO1xyXG5cclxuICAgICAgbGlua0FuY2hvci5pZCA9IGBuYXZsaW5rLSR7bGluay5yZXBsYWNlKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICBsaW5rQW5jaG9yLnRleHRDb250ZW50ID0gbGluaztcclxuICAgICAgbGlua0FuY2hvci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuXHJcbiAgICAgIGxpbmtCdXR0b24uYXBwZW5kKGxpbmtBbmNob3IpO1xyXG4gICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZChsaW5rQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXYuYXBwZW5kKGxpbmtDb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBuYXY7XHJcbiAgfVxyXG5cclxuICBiYW5uZXIodGV4dCwgaW1nKSB7XHJcbiAgICBsZXQgYmFubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICAgIGxldCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuXHJcbiAgICBiYW5uZXJDb250YWluZXIuaWQgPSBcImJhbm5lclwiO1xyXG4gICAgYmFubmVyLmlkID0gXCJiYW5uZXItaW1hZ2VcIjtcclxuICAgIGNhcHRpb24uaWQgPSBcImJhbm5lci1jYXB0aW9uXCI7XHJcblxyXG4gICAgYmFubmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWd9KWA7XHJcblxyXG4gICAgY2FwdGlvbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgYmFubmVyQ29udGFpbmVyLmFwcGVuZChiYW5uZXIsIGNhcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBiYW5uZXJDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBmb290ZXIoY3JlYXRlTW9udGgsIGdpdGh1YkxpbmspIHtcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcblxyXG4gICAgbGV0IHRleHQgPSBgQ3JlYXRlZCBpbiAke2NyZWF0ZU1vbnRofSAyMDIxLiBPZGluIFByb2plY3QgeCBEYW4gVC5gO1xyXG4gICAgbGV0IGdpdGh1YkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGxldCBnaEljb24gPSB0aGlzLmZhSWNvbihcImZhYlwiLCBcImZhLWdpdGh1Yi1zcXVhcmVcIiwgXCJpY29uXCIpO1xyXG5cclxuICAgIGdpdGh1YkVsZW0uYXBwZW5kKGdoSWNvbik7XHJcbiAgICBnaXRodWJFbGVtLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItZ2l0aHViLWljb25cIik7XHJcbiAgICBnaXRodWJFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgZ2l0aHViTGluayk7XHJcbiAgICBnaXRodWJFbGVtLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICAgIGdpdGh1YkVsZW0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHAuYXBwZW5kKGdpdGh1YkVsZW0pO1xyXG4gICAgZm9vdGVyLmFwcGVuZChwKTtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCBsYXJnZXIsIGVtYm9sZGVuZWQsIHRleHQsXHJcbiAgICogc2ltaWxhciB0byBhIHB1bGwgcXVvdGUgaW4gYSBtYWdhemluZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBtc2cge3N0cmluZ30gVGV4dCB0byBpbmNsdWRlIGluIHRoZSBibG9jayBxdW90ZVxyXG4gICAqL1xyXG4gIHB1bGxxdW90ZShtc2cpIHtcclxuICAgIGxldCBwdWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xyXG4gICAgcHVsbC50ZXh0Q29udGVudCA9IG1zZztcclxuXHJcbiAgICBwdWxsLmNsYXNzTGlzdC5hZGQoXCJwdWxsLXF1b3RlXCIpO1xyXG5cclxuICAgIHJldHVybiBwdWxsO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbihpZCkge1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIGVsZW1lbnQuaWQgPSBpZDtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdGV4dCBoZWFkaW5nIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyp9IHRleHQgLSBUaGUgbGFiZWwgZm9yIHRoZSBoZWFkZXIuXHJcbiAgICogQHBhcmFtIHsqfSBsZXZlbCAtIFRoZSBsZXZlbCBvZiBoZWFkZXIuXHJcbiAgICovXHJcbiAgaGVhZGluZyh0ZXh0LCBsZXZlbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAobGV2ZWwgPCAxIHx8IGxldmVsID4gNikge1xyXG4gICAgICB0aHJvdyBFcnJvcihcIkhlYWRpbmcgbGV2ZWxzIGNhbiBvbmx5IGJlIGJldHdlZW4gMSB0byA2IVwiKTtcclxuICAgIH1cclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoJHtsZXZlbH1gKTtcclxuXHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG5cclxuICBwKHRleHQsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGlmIChjbGFzc05hbWUubGVuZ3RoICE9IDApIHtcclxuICAgICAgcC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIHA7XHJcbiAgfVxyXG5cclxuICBpbWcodXJsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIGltYWdlLnNyYyA9IHVybDtcclxuXHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbiAgfVxyXG5cclxuICBkaXYoLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbihsYWJlbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgYnRuLnRleHRDb250ZW50ID0gbGFiZWw7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGVzIGEgYmFzaWMgdGFibGUgd2l0aCBzaW5nbGUtY2VsbCBjb2x1bW5zIGFuZCByb3dzLCBiYXNlZCBvbiB0aGUgaW1wb3J0ZWQgZmlsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Y3N2fSBkYXRhIC0gRGF0YSB0byB0dXJuIGludG8gYSB0YWJsZS4gUGxlYXNlIHVzZSB3ZWJwYWNrIHRvIGltcG9ydCAuY3N2IGZpbGVzLlxyXG4gICAqL1xyXG4gIHRhYmxlKGlkID0gXCJcIiwgZGF0YSkge1xyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgdGFibGUuaWQgPSBpZDtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHRhYmxlIGhlYWRlciByb3cuXHJcbiAgICBsZXQgdGFibGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBsZXQgdGFibGVIZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG4gICAgZm9yIChsZXQgY29sIG9mIE9iamVjdC5rZXlzKGRhdGFbMF0pKSB7XHJcbiAgICAgIGxldCBjb2xDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICBjb2xDZWxsLnRleHRDb250ZW50ID0gY29sO1xyXG5cclxuICAgICAgdGFibGVIZWFkZXJSb3cuYXBwZW5kKGNvbENlbGwpO1xyXG4gICAgfVxyXG4gICAgdGFibGVIZWFkZXIuYXBwZW5kKHRhYmxlSGVhZGVyUm93KTtcclxuXHJcbiAgICB0YWJsZS5hcHBlbmQodGFibGVIZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIC8vIEdlbmVyYXRlIHRhYmxlIHJvd3MuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgIGZvciAobGV0IHByb3AgaW4gZGF0YVtpXSkge1xyXG4gICAgICAgIGxldCB0Y2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHJcbiAgICAgICAgdGNlbGwudGV4dENvbnRlbnQgPSBkYXRhW2ldW3Byb3BdO1xyXG4gICAgICAgIHRyb3cuYXBwZW5kKHRjZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFibGVCb2R5LmFwcGVuZCh0cm93KTtcclxuICAgIH1cclxuICAgIHRhYmxlLmFwcGVuZCh0YWJsZUJvZHkpO1xyXG5cclxuICAgIHJldHVybiB0YWJsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGZvbnQgYXdlc29tZSBpY29uLlxyXG4gICAqL1xyXG4gIGZhSWNvbihjYXRlZ29yeSwgbmFtZSwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgZmFzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgZmFzSWNvbi5jbGFzc0xpc3QuYWRkKGNhdGVnb3J5LCBuYW1lKTtcclxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgZmFzSWNvbi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhc0ljb247XHJcbiAgfVxyXG5cclxuICBzcGFuKHRleHRDb250ZW50ID0gbnVsbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgaWYgKGNsYXNzTmFtZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIHNwYW47XHJcbiAgfVxyXG5cclxuICBmb3JtSW5wdXQobGFiZWxUZXh0LCB0eXBlLCBpbnB1dElkLCBuYW1lKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dC5pZCA9IGlucHV0SWQ7XHJcbiAgICBpbnB1dC5uYW1lID0gbmFtZTtcclxuICAgIGlucHV0LnR5cGUgPSB0eXBlO1xyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIGlucHV0XTtcclxuICB9XHJcblxyXG4gIGRyb3Bkb3duKGxhYmVsVGV4dCwgbmFtZSwgaW5wdXRJZCwgLi4udmFsdWVzKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0SWQpO1xyXG5cclxuICAgIGZvciAobGV0IHZhbCBvZiB2YWx1ZXMpIHtcclxuICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgZW50cnkudmFsdWUgPSB2YWw7XHJcbiAgICAgIGlmIChpc05hTih2YWwpICYmIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IHZhbFswXS50b1VwcGVyQ2FzZSgpICsgdmFsLnNsaWNlKDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gdmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3QuYXBwZW5kKGVudHJ5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCBzZWxlY3RdO1xyXG4gIH1cclxuXHJcbiAgdGV4dEFyZWEobGFiZWxUZXh0LCBuYW1lLCBpbnB1dElkKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICB0YS5pZCA9IGlucHV0SWQ7XHJcbiAgICB0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIHRhXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGNvbmZpcm0gbW9kYWwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyp9IGNsYXNzTmFtZSAtIENsYXNzZXMgdGhlIG1vZGFsIHNob3VsZCBiZWxvbmcgdG8uXHJcbiAgICogQHBhcmFtIHsqfSB0aXRsZSAtIFRoZSB0aXRsZSBhcHBlYXJpbmcgb24gdGhlIG1vZGFsLlxyXG4gICAqIEBwYXJhbSB7Kn0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIGFwcGVhcmluZyBvbiB0aGUgbW9kYWwuXHJcbiAgICogQHBhcmFtIHsqfSBwb3NpdGl2ZUJ1dHRvbkxhYmVsIC0gVGV4dCBmb3IgdGhlIE9LIGJ1dHRvbi5cclxuICAgKiBAcGFyYW0geyp9IG5lZ2F0aXZlQnV0dG9uTGFiZWwgLSBUZXh0IGZvciB0aGUgY2FuY2VsIGJ1dHRvbi5cclxuICAgKiBAcGFyYW0geyp9IHBvc2l0aXZlQ2FsbGJhY2sgLSBGdW5jdGlvbiB0byBydW4gaWYgT0sgaXMgcHJlc3NlZC5cclxuICAgKiBAcGFyYW0geyp9IG5lZ2F0aXZlQ2FsbGJhY2sgLSBGdW5jdGlvbiB0byBydW4gaWYgY2FuY2VsIGlzIHByZXNzZWQuICdudWxsJyBieVxyXG4gICAqIGRlZmF1bHQsIHdoaWNoIHRoZW4ganVzdCBjbG9zZXMgdGhlIG1vZGFsLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgLSBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbW9kYWwgZWxlbWVudC5cclxuICAgKi9cclxuICBjb25maXJtTW9kYWwoXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB0aXRsZSxcclxuICAgIG1lc3NhZ2UsXHJcbiAgICBwb3NpdGl2ZUJ1dHRvbkxhYmVsLFxyXG4gICAgbmVnYXRpdmVCdXR0b25MYWJlbCxcclxuICAgIHBvc2l0aXZlQ2FsbGJhY2ssXHJcbiAgICBuZWdhdGl2ZUNhbGxiYWNrID0gbnVsbFxyXG4gICkge1xyXG4gICAgbGV0IG1vZGFsV3JhcHBlciA9IHRoaXMuZGl2KCk7XHJcbiAgICBtb2RhbFdyYXBwZXIuaWQgPSBcInByb21wdC13cmFwcGVyXCI7XHJcbiAgICBsZXQgbW9kYWwgPSB0aGlzLmRpdihjbGFzc05hbWUpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlSGVhZGVyID0gdGhpcy5oZWFkaW5nKHRpdGxlLCAxLCBcIm1vZGFsLWhlYWRlclwiKTtcclxuICAgIGNvbnN0IG1lc3NhZ2VQYXJhZ3JhcGggPSB0aGlzLnBhcmFncmFwaChtZXNzYWdlLCBcIm1vZGFsLWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IHBvc2l0aXZlQnV0dG9uID0gdGhpcy5idXR0b24ocG9zaXRpdmVCdXR0b25MYWJlbCwgXCJtb2RhbC1jb25maXJtXCIpO1xyXG4gICAgY29uc3QgbmVnYXRpdmVCdXR0b24gPSB0aGlzLmJ1dHRvbihuZWdhdGl2ZUJ1dHRvbkxhYmVsLCBcIm1vZGFsLWNhbmNlbFwiKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25TZWN0aW9uID0gdGhpcy5kaXYoXCJtb2RhbC1idXR0b24tYXJlYVwiKTtcclxuXHJcbiAgICBpZiAobmVnYXRpdmVDYWxsYmFjayA9PT0gbnVsbCkge1xyXG4gICAgICBuZWdhdGl2ZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmVnYXRpdmUgcHJlc3NlZC5cIik7XHJcbiAgICAgICAgbW9kYWxXcmFwcGVyLnJlbW92ZSgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBvc2l0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3NpdGl2ZUNhbGxiYWNrKTtcclxuICAgIHBvc2l0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBwb3NpdGl2ZUNhbGxiYWNrKGUpO1xyXG4gICAgICBtb2RhbFdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICAgIG5lZ2F0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZWdhdGl2ZUNhbGxiYWNrKTtcclxuXHJcbiAgICBidXR0b25TZWN0aW9uLmFwcGVuZChwb3NpdGl2ZUJ1dHRvbiwgbmVnYXRpdmVCdXR0b24pO1xyXG4gICAgbW9kYWwuYXBwZW5kKHRpdGxlSGVhZGVyLCBtZXNzYWdlUGFyYWdyYXBoLCBidXR0b25TZWN0aW9uKTtcclxuICAgIG1vZGFsV3JhcHBlci5hcHBlbmQobW9kYWwpO1xyXG5cclxuICAgIC8vIHN0eWxpbmcgbW92ZWQgdG8gLmNzcyBwYWdlLlxyXG5cclxuICAgIHJldHVybiBtb2RhbFdyYXBwZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5IGEgYnJpZWYsIHVub2J0cnVzaXZlIHBvcC11cCBtZXNzYWdlIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cclxuICAgKiBAcGFyYW0geyp9IHRleHRDb250ZW50IC0gVGhlIHRleHQgdGhlIG1lc3NhZ2Ugc2hvdWxkIGRpc3BsYXkuXHJcbiAgICogQHBhcmFtIHsqfSBkdXJhdGlvbiAtIFRoZSBkdXJhdGlvbiBvZiB0aGUgbWVzc2FnZSBpbiBzZWNvbmRzLlxyXG4gICAqL1xyXG4gIHRvYXN0KHRleHRDb250ZW50LCBkdXJhdGlvbikge1xyXG4gICAgbGV0IHRvYXN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB0b2FzdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xyXG4gICAgdG9hc3RCb3guY2xhc3NMaXN0LmFkZChcInRvYXN0XCIpO1xyXG4gICAgdG9hc3RNZXNzYWdlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICB0b2FzdE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInRvYXN0LW1lc3NhZ2VcIik7XHJcblxyXG4gICAgdG9hc3RCb3guYXBwZW5kKHRvYXN0TWVzc2FnZSk7XHJcblxyXG4gICAgbGV0IHRvYXN0Qm94Q3NzID0gXCJwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMTB2aDtcIjtcclxuICAgIHRvYXN0Qm94Q3NzICs9IFwid2lkdGg6IDEwMHZ3O1wiO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gYGFuaW1hdGlvbjogZmFkZS1pbi1vdXQgJHtkdXJhdGlvbn1zO2A7XHJcbiAgICB0b2FzdEJveENzcyArPSBcInotaW5kZXg6IDk5OTk7XCI7XHJcblxyXG4gICAgbGV0IHRvYXN0TWVzc2FnZUNzcyA9XHJcbiAgICAgIFwibWFyZ2luOiAwIGF1dG87IHdpZHRoOiAzMDBweDsgZGlzcGxheTogYmxvY2s7IGJhY2tncm91bmQtY29sb3I6IGdyZXk7XCI7XHJcbiAgICB0b2FzdE1lc3NhZ2VDc3MgKz1cclxuICAgICAgXCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBib3JkZXItcmFkaXVzOiA1cHg7XCI7XHJcbiAgICB0b2FzdE1lc3NhZ2VDc3MgKz0gXCJjb2xvcjogd2hpdGU7XCI7XHJcblxyXG4gICAgdG9hc3RCb3guc3R5bGUuY3NzVGV4dCA9IHRvYXN0Qm94Q3NzO1xyXG4gICAgdG9hc3RNZXNzYWdlLnN0eWxlLmNzc1RleHQgPSB0b2FzdE1lc3NhZ2VDc3M7XHJcblxyXG4gICAgdG9hc3RCb3guYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIHRvYXN0Qm94LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodG9hc3RCb3gpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgc2VhcmNoIGZpZWxkIHdpdGggYSBzZWFyY2ggYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGFjZWhvbGRlciAtIEFkdmljZSB0byBnaXZlIGluIHNlYXJjaCBmaWVsZC5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBzZWFyY2gocGxhY2Vob2xkZXIgPSBcIlNlYXJjaFwiKSB7XHJcbiAgICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFwic2VhcmNoLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEZpZWxkV3JhcHBlciA9IHRoaXMuZGl2KFwic2VhcmNoLWZpZWxkLXdyYXBwZXJcIik7XHJcbiAgICBjb25zdCBzZWFyY2hGaWVsZCA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwic2VhcmNoLWZpZWxkXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IHRoaXMuZmFJY29uKFwiZmFzXCIsIFwiZmEtc2VhcmNoXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gdGhpcy5idXR0b24oXCJcIiwgXCJzZWFyY2hcIik7XHJcblxyXG4gICAgc2VhcmNoQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcclxuICAgIHNlYXJjaEZpZWxkV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIHNlYXJjaEZpZWxkLnR5cGUgPSBcInNlYXJjaFwiO1xyXG4gICAgc2VhcmNoRmllbGQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xyXG4gICAgc2VhcmNoRmllbGQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICBzZWFyY2hCdXR0b24uYXBwZW5kKHNlYXJjaEljb24pO1xyXG4gICAgc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcblxyXG4gICAgc2VhcmNoRmllbGRXcmFwcGVyLmFwcGVuZChzZWFyY2hGaWVsZCk7XHJcbiAgICBzZWFyY2hDb250YWluZXIuYXBwZW5kKHNlYXJjaEZpZWxkV3JhcHBlciwgc2VhcmNoQnV0dG9uKTtcclxuICAgIHJldHVybiBzZWFyY2hDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBzZWFyY2ggZmllbGQgZm9yIGxvY2F0aW9ucywgc28gaXQgaW5jbHVkZXMgYSBzZWFyY2ggZmllbGQgd2l0aCBcclxuICAgKiBhIGxvY2F0aW9uIGJ1dHRvbi5cclxuICAgKi9cclxuICBnZW9zZWFyY2gocGxhY2Vob2xkZXI9XCJcIikge1xyXG4gICAgY29uc3Qgc2VhcmNoRWxlbSA9IHRoaXMuc2VhcmNoKHBsYWNlaG9sZGVyKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uQnV0dG9uID0gdGhpcy5idXR0b24oXCJcIiwgXCJsb2NhdGlvblwiKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uSWNvbiA9IHRoaXMuZmFJY29uKFwiZmFzXCIsIFwiZmEtbWFwLW1hcmtlci1hbHRcIilcclxuXHJcbiAgICBsb2NhdGlvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgbG9jYXRpb25CdXR0b24uYXBwZW5kKGxvY2F0aW9uSWNvbik7XHJcbiAgICBsb2NhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVXRpbGl0eS5nZXRHZW9sb2NhdGlvbik7XHJcbiAgICBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoXCIpLmJlZm9yZShsb2NhdGlvbkJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIHNlYXJjaEVsZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdG9vbHRpcC1lc3F1ZSBtZXNzYWdlIHdoaWNoIGhvdmVycyBiZWxvdywgcmVsYXRpdmUgdG8gYW4gZWxlbWVudCdzIHBvc2l0aW9uLCBcclxuICAgKiBmb3IgYSBwcm92aWRlZCBkdXJhdGlvbi4gT25seSBhdHRhY2ggdG8gcmVsYXRpdmVseS1wb3NpdGlvbmVkIGVsZW1lbnRzLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IChlbGVtKSAtIFBvc2l0aW9uZWQgZWxlbWVudCB0byBhdHRhY2ggdG8uIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAobXNnKSAtIE1lc3NhZ2UgdG8gZGlzcGxheS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gKHMpIC0gTnVtYmVyIG9mIHNlY29uZHMgdG8gcGVyc2lzdCBtZXNzYWdlLiAwIGZvciBwZXJzaXN0ZW50XHJcbiAgICogdW50aWwgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgdG9vbHRpcC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRpc21pc3NPbkV4dGVybmFsQ2xpY2sgLSBTaG91bGQgdGhlIHRvb2x0aXAgYmUgZGlzbWlzc2VkIGJ5XHJcbiAgICogY2xpY2tpbmcgb3V0c2lkZSBvZiB0aGUgZWxlbWVudD8gVHJ1ZSBieSBkZWZhdWx0LlxyXG4gICAqL1xyXG4gIHRvb2x0aXAoZWxlbSwgbXNnLCBzLCBkaXNtaXNzT25FeHRlcm5hbENsaWNrID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgdG9vbHRpcENvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJ0b29sdGlwXCIpO1xyXG4gICAgZm9yIChsZXQgbXNnU2VnbWVudCBvZiBtc2cuc3BsaXQoXCJcXG5cIikpIHtcclxuICAgICAgY29uc3QgdG9vbHRpcE1zZyA9IGNvbXBvbmVudC5wKG1zZ1NlZ21lbnQudHJpbSgpLCBcInRvb2x0aXAtbXNnXCIpO1xyXG4gICAgICB0b29sdGlwQ29udGFpbmVyLmFwcGVuZCh0b29sdGlwTXNnKTtcclxuICAgIH1cclxuXHJcbiAgICB0b29sdGlwQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAxMDAlOyB3aWR0aDogZml0LWNvbnRlbnRcIjtcclxuICAgIC8vIHRoaXMgZW5zdXJlcyB0aGF0IHRoZSBsYXRlc3QgdG9vbHRpcHMgYWx3YXlzIGFwcGVhciBvbiB0aGUgdG9wLlxyXG4gICAgdG9vbHRpcENvbnRhaW5lci5zdHlsZS56SW5kZXggPSAxMCArIDEwICogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vbHRpcFwiKS5sZW5ndGgpO1xyXG5cclxuICAgIGVsZW0uYXBwZW5kKHRvb2x0aXBDb250YWluZXIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRpc21pc3NPbkV4dGVybmFsQ2xpY2spIHtcclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCAhPT0gdG9vbHRpcENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBjbGlja2VkOyByZW1vdmluZyB0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHAudGhlbigoKSA9PiB7XHJcbiAgICAgIGlmIChzICE9PSAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLnRvb2x0aXBcIikpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaW1lciBleHBpcmVkOyByZW1vdmluZyB0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICB0b29sdGlwQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHMgKiAxMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggYSBsb2FkaW5nIG1lc3NhZ2UgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsZW0gLSBFbGVtZW50IHRvIGF0dGFjaCBsb2FkaW5nIG1lc3NhZ2UgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1zZyAtIE1lc3NhZ2UgdG8gcGxheTsgZGVmYXVsdCBpcyBcImxvYWRpbmdcIi5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBsb2FkaW5nTWVzc2FnZShwYXJlbnRFbGVtLCBtc2c9XCJMb2FkaW5nXCIpIHtcclxuICAgIGNvbnN0IGxvYWRpbmdCYXNlID0gY29tcG9uZW50LnAobXNnLCBcImxvYWRpbmctdGV4dFwiKTtcclxuICAgIGNvbnN0IGxvYWRpbmdEb3RzID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImxvYWRpbmctZG90c1wiKTtcclxuXHJcbiAgICBsb2FkaW5nQmFzZS5hcHBlbmQobG9hZGluZ0RvdHMpO1xyXG4gICAgcGFyZW50RWxlbS5hcHBlbmQobG9hZGluZ0Jhc2UpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRpbmdBbmltYXRpb24gPSB7XHJcbiAgICAgIGlkOiAwLFxyXG4gICAgICBsb2FkaW5nVGV4dEJhc2U6IHBhcmVudEVsZW0ucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLXRleHRcIiksXHJcbiAgICAgIGxvYWRpbmdUZXh0RG90czogcGFyZW50RWxlbS5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctZG90c1wiKSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFNldHMgYW4gaW50ZXJ2YWwsIHVzaW5nIGl0IHRvIHBsYXkgYSBzaW1wbGUgYW5pbWF0aW9uLlxyXG4gICAgICAgKi9cclxuICAgICAgcGxheSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0QmFzZS50ZXh0Q29udGVudCA9IG1zZztcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0QmFzZS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tb3BhY2l0eVwiKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5sb2FkaW5nVGV4dERvdHMudGV4dENvbnRlbnQgIT09IFwiLi4uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nVGV4dERvdHMudGV4dENvbnRlbnQgKz0gXCIuXCI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNzUwKTtcclxuICAgICAgfSxcclxuICAgICAgc3RvcCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLmNsYXNzTGlzdC5hZGQoXCJuby1vcGFjaXR5XCIpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBsb2FkaW5nQW5pbWF0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50OyIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XHJcblxyXG4gIGdyaWQ7XHJcbiAgc2l6ZTtcclxuICBzaGlwcztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNpemUgPSAxMDtcclxuICAgIHRoaXMuZ3JpZCA9IFtdO1xyXG4gICAgdGhpcy5zaGlwcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcclxuICAgICAgdGhpcy5ncmlkW2ldID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplOyBqKyspIHtcclxuICAgICAgICB0aGlzLmdyaWRbaV1bal0gPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuZCBwbGFjZXMgYSBnaXZlbiBzaGlwIGJhc2VkIG9uIHRoZSBjb29yZGluYXRlc1xyXG4gICAqIGFzc2lnbmVkIHRvIHRoZSBzaGlwLiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gdGhlIGdpdmVuIGxlbmd0aCBvZiB0aGUgc2hpcC4gXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIHRoZSByb3cgdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQgY29vcmRpbmF0ZXMuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCAtIHRoZSBjb2x1bW4gdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQgY29vcmRpbmF0ZXMuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCAtIFBsYWNlIHRoZSBzaGlwIGhvcml6b250YWxseT9cclxuICAgKiBAcmV0dXJuIHtTaGlwfSAtIFRoZSBzaGlwIHRoYXQgd2FzIHBsYWNlZCwgb3IgbnVsbCBpZiB0aGUgc2hpcCBmYWlsZWRcclxuICAgKiB0byBiZSBwbGFjZWQuXHJcbiAgICovXHJcbiAgcGxhY2VTaGlwKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsKSB7XHJcbiAgICBpZiAocm93IDwgMCB8fCBjb2wgPCAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwbGFjZSBzaGlwIG9uIG5lZ2F0aXZlIGNvb3JkaW5hdGVzLlwiKTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBudWxsIGlmIG91dCBvZiBib3VuZHNcclxuICAgIGlmICh2ZXJ0aWNhbCkgeyAvLyB2ZXJ0aWNhbCBvdXQgb2YgYm91bmRzIGludm9sdmVzIHJvdy5cclxuICAgICAgaWYgKHJvdyArIGxlbmd0aCA+IHRoaXMuZ3JpZC5sZW5ndGggfHwgY29sID4gdGhpcy5ncmlkLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY29sICsgbGVuZ3RoID4gdGhpcy5ncmlkLmxlbmd0aCB8fCByb3cgPiB0aGlzLmdyaWQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNoZWNrIHRvIHNlZSB0aGF0IHRoZSBnaXZlbiByb3cgYW5kIGNvbCArIGxlbmd0aCBhcmUgbm90IGFscmVhZHkgb2NjdXBpZWQuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IChyb3cgKyBsZW5ndGgpOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ncmlkW2ldW2NvbF0gIT09IFwiXCIpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IChjb2wgKyBsZW5ndGgpOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd11baV0gIT09IFwiXCIpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG90aGVyd2lzZSB3ZSdyZSBnb29kIHRvIHBsYWNlIGEgc2hpcC5cclxuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnNoaXBzLmxlbmd0aDtcclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IChyb3cgKyBzaGlwLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFtpXVtjb2xdID0gaWQ7XHJcbiAgICAgICAgc2hpcC5zdGF0dXNbYCR7aX0sJHtjb2x9YF0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IChjb2wgKyBzaGlwLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFtyb3ddW2ldID0gaWQ7XHJcbiAgICAgICAgc2hpcC5zdGF0dXNbYCR7cm93fSwke2l9YF0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuXHJcbiAgICByZXR1cm4gc2hpcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExldCB0aGUgZ2FtZWJvYXJkIHJlY2VpdmUgYW4gYXR0YWNrIGF0IHRoZSBnaXZlbiByb3cgYW5kIGNvbHVtbi4gXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBoaXQuIDEgaWYgYSBoaXQgd2FzIHN1Y2Nlc3NmdWwsIDBcclxuICAgKiBpZiB0aGUgaGl0IG1pc3NlZCwgYW5kIC0xIGlmIHRoZSBhcmVhIHdhcyBhbHJlYWR5IGhpdC4gXHJcbiAgICovXHJcbiAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbCkge1xyXG4gICAgY29uc29sZS5sb2coe3JvdywgY29sfSk7XHJcbiAgICBpZiAoaXNOYU4ocGFyc2VJbnQocm93KSkgfHwgY29sID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcHJvdmlkZSByb3cgYW5kIGNvbCBjb29yZGluYXRlcyBhcyBhIG51bWJlci5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNoaXBJZCA9IHRoaXMuZ3JpZFtyb3ddW2NvbF07XHJcblxyXG4gICAgaWYgKHNoaXBJZCA9PT0gXCJ4XCIgfHwgc2hpcElkID09PSBcIm9cIikge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9IGVsc2UgaWYgKHNoaXBJZCA9PT0gXCJcIikge1xyXG4gICAgICB0aGlzLmdyaWRbcm93XVtjb2xdID0gXCJvXCI7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coc2hpcElkKTtcclxuICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXSA9IFwieFwiO1xyXG4gICAgICB0aGlzLnNoaXBzW3NoaXBJZF0uaGl0KHJvdywgY29sKTtcclxuXHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0R3JpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgfVxyXG5cclxuICBpc1NoaXBTdW5rKGluZGV4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaGlwc1tpbmRleF0uaXNTdW5rKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYXZlIGFsbCBzaGlwcyBiZWVuIHN1bmsgb24gdGhlIGdhbWVib2FyZD9cclxuICAgKi9cclxuICBhbGxTaGlwc1N1bmsoKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcclxuICAgIHRoaXMuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdGF0dXM7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IEJhdHRsZXNoaXBFbGVtZW50cyB9IGZyb20gXCIuL0JhdHRsZXNoaXBFbGVtZW50XCI7XHJcbmltcG9ydCBQbGF5ZXIsIHsgQ1BVX1NUQVRFIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcblxyXG4vKipcclxuICogTWFuYWdlcyBhIGdhbWUgc2Vzc2lvbiBmb3IgYmF0dGxlc2hpcC4gS2VlcHMgdHJhY2sgb2YgcGxheWVycy5cclxuICogQ2FuIHN0YXJ0LCBlbmQsIGFuZCByZXNldCB0aGUgZ2FtZS5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURSA9IHtcclxuICBwMXR1cm46IFwiUGxheWVyIDEncyB0dXJuXCIsXHJcbiAgcDJ0dXJuOiBcIlBsYXllciAyJ3MgdHVyblwiLFxyXG4gIGVuZGVkOiBcIkdhbWUgZW5kZWQuXCIsXHJcbiAgcDF2aWN0b3J5OiBcIlBsYXllciAxIHdpbnMuXCIsXHJcbiAgcDJ2aWN0b3J5OiBcIlBsYXllciAyIHdpbnMuXCIsXHJcbiAgcmVzdGFydDogXCJSZXN0YXJ0aW5nIGdhbWUuLi5cIixcclxuICBwbGF5aW5nOiBcIkdhbWUgc3RhcnQhXCIsXHJcbiAgZ2FtZVByb21wdDogXCJXZWxjb21lLiBEcmFnIHNoaXBzIG9udG8gZ2FtZWJvYXJkLiBDbGljayAod2hlbiBwbGFjZWQpOiBSb3RhdGUuXCIsXHJcbiAgY3B1U2hpcFN1bms6IFwiQSBzaGlwIG9mIHRoZSBDUFUncyB3YXMgc3VuayFcIixcclxuICBjcHVTaGlwSGl0OiBcIkEgc2hpcCBvZiB0aGUgQ1BVJ3Mgd2FzIHN1bmshXCIsXHJcbiAgcGxheWVyU2hpcFN1bms6IFwiQSBzaGlwIG9mIHRoZSBwbGF5ZXIncyB3YXMgc3VuayFcIixcclxuICBwbGF5ZXJTaGlwSGl0OiBcIkEgc2hpcCBvZiB0aGUgcGxheWVyJ3Mgd2FzIGhpdCEhXCJcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciB7XHJcbiAgXHJcbiAgc3RhdGljICNpbnN0YW5jZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHBsYXllcnMgaW52b2x2ZWQgaW4gdGhlIGdhbWUuXHJcbiAgICovXHJcbiAgcGxheWVycztcclxuXHJcbiAgLyoqXHJcbiAgICogSXMgaXQgcGxheWVyIDEncyB0dXJuPyBcclxuICAgKi9cclxuICAjcDF0dXJuO1xyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSBvZiB0aGUgbGVuZ3RocyBvZiBlYWNoIHNoaXAgdGhhdCB0aGUgcGxheWVyIHdpbGwgaGF2ZSBpbiB0aGVpciBhcnNlbmFsLlxyXG4gICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgKi9cclxuICBzaGlwTGVuZ3RocztcclxuXHJcbiAgLyoqXHJcbiAgICogSGFzIHRoZSBnYW1lIGVuZGVkIHlldD9cclxuICAgKi9cclxuICAjZ2FtZU92ZXI7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogVHJ1ZSBpZiBwbGF5ZXIgMSB3b24sIGZhbHNlIGlmIHBsYXllciAyIHdvbi5cclxuICAgKi9cclxuICAjaXNXaW5uZXJQMTtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5zdGFuY2Ugb2YgYSBCYXR0bGVzaGlwRWxlbWVudHMgY2xhc3MgdG8gdXNlIHRvIG1hbmlwdWxhdGUgdGhlIHZpZXcgb2YgdGhlIHBhZ2UuXHJcbiAgICogQHR5cGUge0JhdHRsZXNoaXBFbGVtZW50c31cclxuICAgKi9cclxuICAjcGFnZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBnYW1lLiBBc3NpZ25zIENQVSBhcyBwbGF5ZXIgMi5cclxuICAgKiBAcGFyYW0ge1BsYXllcltdfSBwbGF5ZXJzIC0gQW4gYXJyYXkgb2YgdGhlIHBsYXllcnMgaW4gdGhlIGdhbWUuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBwMXN0YXJ0IC0gU2hvdWxkIHBsYXllciAxIHN0YXJ0IGZpcnN0PyBUcnVlIGJ5IGRlZmF1bHQuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMiwgcDFzdGFydCA9IHRydWUsIHNoaXBMZW5ndGhzID0gWzVdKSB7XHJcbiAgICBpZiAoR2FtZU1hbmFnZXIuI2luc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIEdhbWVNYW5hZ2VyLiNpbnN0YW5jZTtcclxuICAgIH0gXHJcblxyXG4gICAgR2FtZU1hbmFnZXIuI2luc3RhbmNlID0gdGhpcztcclxuICAgIHRoaXMucGxheWVycyA9IHBsYXllcjIuY3B1ID8gW3BsYXllcjEsIHBsYXllcjJdIDogW3BsYXllcjIsIHBsYXllcjFdO1xyXG4gICAgdGhpcy4jcDF0dXJuID0gcDFzdGFydDtcclxuICAgIHRoaXMuc2hpcExlbmd0aHMgPSBzaGlwTGVuZ3RocztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSBnYW1lLiBIYXMgdGhlIENQVSBwbGFjZSBzaGlwcywgaXNzdWVzIGEgc3RhcnQgbWVzc2FnZSBvbiB0aGUgdmlldyxcclxuICAgKiBkaXNhYmxlcyBhbGwgaGFuZGxlcnMgb2YgYWxsIHNoaXBzLCBhbmQgdGhlbiBoYXMgb25lIG9mIHRoZSBwbGF5ZXJzIHNlbGVjdCBhIG1vdmUuXHJcbiAgICogTWFrZXMgYWxsIGNlbGxzIFwiYXR0YWNrYWJsZS5cIlxyXG4gICAqL1xyXG4gIHN0YXJ0R2FtZSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZS1idXR0b25cIikuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKS5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICBzaGlwLm9uY2xpY2sgPSBudWxsO1xyXG4gICAgICBzaGlwLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcGxhY2VzIHNoaXAgZm9yIGNwdS5cclxuICAgIHRoaXMucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgIGlmIChwbGF5ZXIuY3B1KSB7XHJcbiAgICAgICAgdGhpcy4jY3B1UGxhY2VTaGlwcyhwbGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZWdpc3RlciBzaGlwcyBmb3IgdGhlIHBsYXllci5cclxuICAgIHRoaXMuI3BsYXllclJlZ2lzdGVyU2hpcHMoKTtcclxuXHJcbiAgICAvLyBUT0RPXHJcbiAgICAvLyByZW1vdmUgdGhpcyBwcm9taXNlIGNvZGUsIGVmZmVjdCBsb29rcyBsYW1lLlxyXG4gICAgKCgpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wbGF5aW5nKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmIChHYW1lTWFuYWdlci4jaW5zdGFuY2UucDF0dXJuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKEdBTUVfU1RBVEUucDF0dXJuKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKEdBTUVfU1RBVEUucDJ0dXJuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDc1MCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSkoKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgdGhpcy4jcGFnZS5zZXREaWFsb2cocmVzdWx0KTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmQtYXJlYVwiKS5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1hY3RpdmVcIik7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0YWJsZVwiKS5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImF0dGFja2FibGVcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDIuZ2FtZWJvYXJkIC5hdHRhY2thYmxlXCIpLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZi4jcGxheVJvdW5kLmJpbmQodGhpcykpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFF1ZXJpZXMgYm90aCBwbGF5ZXJzJyBnYW1lYm9hcmRzIHRvIHNlZSBpZiB0aGUgZ2FtZSBzaG91bGQgYmUgZW5kZWQuXHJcbiAgICovXHJcbiAgI2RldGVybWluZUlmR2FtZU92ZXIoKSB7XHJcbiAgICBjb25zdCBwMXZpY3RvcnkgPSB0aGlzLnBsYXllcnNbMV0uZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpO1xyXG4gICAgY29uc3QgcDJ2aWN0b3J5ID0gdGhpcy5wbGF5ZXJzWzBdLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKTtcclxuICAgIFxyXG4gICAgaWYgKHAxdmljdG9yeSkge1xyXG4gICAgICB0aGlzLiNwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLnAxdmljdG9yeSk7XHJcbiAgICAgIHRoaXMuI2lzV2lubmVyUDEgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChwMnZpY3RvcnkpIHtcclxuICAgICAgdGhpcy4jcGFnZS5zZXREaWFsb2coR0FNRV9TVEFURS5wMnZpY3RvcnkpO1xyXG4gICAgICB0aGlzLiNpc1dpbm5lclAxID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHAxdmljdG9yeSB8fCBwMnZpY3RvcnkpIHtcclxuICAgICAgdGhpcy4jZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICB0aGlzLiNlbmRHYW1lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICAjZW5kR2FtZSgpIHtcclxuICAgIC8vIHVwZGF0ZSBnYW1lIHJlc3VsdHMgaGVyZS5cclxuICAgIGNvbnN0IHN1bW1hcnlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bW1hcnktc2NyZWVuXCIpO1xyXG4gICAgLy8gMS4gU2hvdyB0aGUgd2lubmVyLlxyXG4gICAgaWYgKHRoaXMuI2lzV2lubmVyUDEpIHtcclxuICAgICAgc3VtbWFyeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLndpbm5lclwiKS50ZXh0Q29udGVudCA9IHRoaXMucGxheWVyc1swXS5uYW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3VtbWFyeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLndpbm5lclwiKS50ZXh0Q29udGVudCA9IHRoaXMucGxheWVyc1sxXS5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIFNob3cgdGhlIGFjY3VyYWN5IG1ldHJpY3MuXHJcbiAgICBjb25zdCBwMUFjY01ldHJpYyA9IHN1bW1hcnlDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wMS1hY2N1cmFjeS1tZXRyaWNcIik7XHJcbiAgICBjb25zdCBwMkFjY01ldHJpYyA9IHN1bW1hcnlDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wMi1hY2N1cmFjeS1tZXRyaWNcIik7XHJcblxyXG4gICAgcDFBY2NNZXRyaWMudGV4dENvbnRlbnQgPSB0aGlzLiNjYWxjdWxhdGVBY2N1cmFjeSh0aGlzLnBsYXllcnNbMV0pO1xyXG4gICAgcDJBY2NNZXRyaWMudGV4dENvbnRlbnQgPSB0aGlzLiNjYWxjdWxhdGVBY2N1cmFjeSh0aGlzLnBsYXllcnNbMF0pO1xyXG5cclxuICAgIC8vIDMuIC8vLy9bcmVtb3ZlZCBkYW1hZ2UgbWV0cmljc11cclxuICAgIC8vIEluc3RlYWQgb2Ygc2hvd2luZyBkYW1hZ2UgdGFrZW4sIHdoZW4gdGhlIGdhbWUgaXMgb3ZlcixcclxuICAgIC8vIGp1c3Qgc2hvdyB0aGUgZW5lbXkncyBnYW1lYm9hcmQuXHJcbiAgICAvLyBUT0RPXHJcbiAgICAvLyBXaGVuIGRlYnVnZ2luZyBpcyBjb21wbGV0ZSwgdGVzdCBvdXQgaGlkaW5nIGJhdHRsZXNoaXBzIGZyb20gdGhlIHZpZXcuXHJcbiAgICBzdW1tYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1hZ2FpblwiKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jcmVzZXRHYW1lLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlIHRoZSBhY2N1cmFjeSwgZ2l2ZW4gdGhlIHBsYXllci4gVXNlcyB0aGF0J3MgcGVyc29uIGdhbWVib2FyZFxyXG4gICAqIHRvIGRldGVybWluZSB0aGUgYWNjdXJhY3kuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciA6IHRoZSBwZXJzb24gd2hvIHlvdSBhdHRhY2tlZC5cclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUb3RhbCBzaG90cyAvIGhpdHMgYW5kIHRoZSBhY2N1cmFjeSBvZiBpdC5cclxuICAgKi9cclxuICAjY2FsY3VsYXRlQWNjdXJhY3kocGxheWVyKSB7XHJcbiAgICBsZXQgdG90YWxTaG90cyA9IDA7XHJcbiAgICBsZXQgaGl0cyA9IDA7XHJcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLmdyaWQuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICByb3cuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBpZiAoY2VsbCA9PT0gXCJ4XCIgfHwgY2VsbCA9PT0gXCJvXCIpIHtcclxuICAgICAgICAgIHRvdGFsU2hvdHMgKz0gMTsgXHJcbiAgICAgICAgICBpZiAoY2VsbCA9PT0gXCJ4XCIpIHtcclxuICAgICAgICAgICAgaGl0cyArPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFjY3VyYWN5ID0gKGhpdHMgLyB0b3RhbFNob3RzKSAqIDEwMDtcclxuICAgIHJldHVybiBgJHtoaXRzfS8ke3RvdGFsU2hvdHN9ICgke2FjY3VyYWN5LnRvRml4ZWQoMil9JSlgO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSBnYW1lIGJ5OlxyXG4gICAqIC0gUmVtYXJraW5nIGFsbCBjZWxscy5cclxuICAgKiAtIFJlbW92aW5nIGFsbCBzaGlwcyBmcm9tIHRoZSBnYW1lYm9hcmQuXHJcbiAgICogLSBSZWNyZWF0aW5nIHBsYXllciBpbnN0YW5jZXMuXHJcbiAgICogLSBSZWNyZWF0aW5nIGRyYWdnYWJsZSBzaGlwcyBpbiB0aGUgc2VsZWN0aW9uIGFyZWEuXHJcbiAgICogLSBBbGxvd2luZyB0aGUgdXNlciB0byBzdGFydCB0aGUgZ2FtZSBhZ2Fpbi5cclxuICAgKi9cclxuICAjcmVzZXRHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RhYmxlXCIpLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsIHNlbGVjdGFibGVcIjtcclxuICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIikuZm9yRWFjaChzaGlwID0+IHNoaXAucmVtb3ZlKCkpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMS1uYW1lXCIpLnZhbHVlID0gdGhpcy5wbGF5ZXJzWzBdLm5hbWU7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXJzWzBdID0gbmV3IFBsYXllcih0aGlzLnBsYXllcnNbMF0ubmFtZSwgZmFsc2UpO1xyXG4gICAgdGhpcy5wbGF5ZXJzWzFdID0gbmV3IFBsYXllcih0aGlzLnBsYXllcnNbMV0ubmFtZSwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy4jcGFnZS5nZW5lcmF0ZURyYWdnYWJsZVNoaXBzKCk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lLWJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy4jZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgIHRoaXMuI3AxdHVybiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQbGF5IGEgcm91bmQgb2YgYmF0dGxlc2hpcHMsIGFsbG93aW5nIGVhY2ggcGxheWVyIHRvIGZpcmUuXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZSA6IEV2ZW50OyB1c2VkIHRvIHBpY2sgdXAgdGhlIGNlbGwgdGhlIHVzZXIgY2xpY2tlZC4gQWNxdWlyZXNcclxuICAgKiBjb29yZGluYXRlcyBmcm9tIGl0IHRvIGF0dGFjay5cclxuICAgKi9cclxuICAjcGxheVJvdW5kKGUpIHtcclxuICAgIGlmICh0aGlzLiNwMXR1cm4gJiYgIXRoaXMuI2dhbWVPdmVyKSB7XHJcbiAgICAgIHRoaXMuI3BsYXllckZpcmVBdHRhY2soZSk7XHJcbiAgICAgIGlmICh0aGlzLiNwMXR1cm4gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy4jY3B1RmlyZUF0dGFjaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjcGxheWVyUmVnaXN0ZXJTaGlwcygpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBnYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAxLmdhbWVib2FyZFwiKTtcclxuXHJcbiAgICBnYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIGxldCBvcmlnaW5DZWxsID0gc2hpcC5wYXJlbnROb2RlO1xyXG4gICAgICBsZXQgcm93ID0gcGFyc2VJbnQob3JpZ2luQ2VsbC5kYXRhc2V0LnJvdyk7XHJcbiAgICAgIGxldCBjb2wgPSBwYXJzZUludChvcmlnaW5DZWxsLmRhdGFzZXQuY29sKTtcclxuICAgICAgbGV0IGxlbmd0aCA9IHNoaXAuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICAgIGxldCB2ZXJ0aWNhbCA9IHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIik7XHJcblxyXG4gICAgICBzZWxmLnBsYXllcnNbMF0uZ2FtZWJvYXJkLnBsYWNlU2hpcChsZW5ndGgsIHJvdywgY29sLCB2ZXJ0aWNhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2sgYSBwbGF5ZXIuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtFdmVudH0gZSAtIEV2ZW50IHdoaWNoIHRoZSBoYW5kbGVyIGNhcHR1cmVzLlxyXG4gICAqIEBwYXJhbSB7UGxheWVyfSBhdHRhY2tlciAtIFRoZSBhdHRhY2tpbmcgcGxheWVyLlxyXG4gICAqIEBwYXJhbSB7UGxheWVyfSBhdHRhY2tlZCAtIFRoZSBwbGF5ZXIgcmVjZWl2aW5nIHRoZSBhdHRhY2suXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgI3BsYXllckZpcmVBdHRhY2soZSkge1xyXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhdHRhY2tlZFwiKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRoaXMgY2VsbCBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkIVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb3cgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb3cpO1xyXG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29sKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyb3csIGNvbCk7XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wbGF5ZXJzWzBdLmF0dGFjayh0aGlzLnBsYXllcnNbMV0sIHJvdywgY29sKTtcclxuICAgIHN3aXRjaChyZXN1bHQpIHtcclxuICAgICAgY2FzZSAxOiBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0J3MgYSBoaXQhXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJdCdzIGEgbWlzcyFcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aGlzLiNwMXR1cm4gPSBmYWxzZTsgLy8gQ1BVIG11c3QgbWFrZSBhIHN1Y2Nlc3NmdWwgbW92ZSBiZWZvcmUgdGhlIHBsYXllciBtb3ZlcyBhZ2Fpbi5cclxuXHJcbiAgICB0aGlzLiNkZXRlcm1pbmVJZkdhbWVPdmVyKCk7XHJcbiAgfVxyXG5cclxuICAjY3B1QXR0YWNrRGV0ZXJtaW5lQ29vcmRpbmF0ZXMoY3B1KSB7XHJcbiAgICBsZXQgcm93O1xyXG4gICAgbGV0IGNvbDsgXHJcbiAgICBsZXQgZW5kSW5kZXggPSBjcHUuZ2FtZWJvYXJkLnNpemUgLSAxO1xyXG5cclxuICAgIHN3aXRjaChjcHUuY3B1QmVoYXZpb3IpIHtcclxuICAgICAgY2FzZSBDUFVfU1RBVEUucmFuZG9tOiB7XHJcbiAgICAgICAgLy8gcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGVuZEluZGV4KSk7XHJcbiAgICAgICAgLy8gY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGVuZEluZGV4KSk7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgICBjb2wgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQ1BVX1NUQVRFLmZvdW5kOiB7XHJcbiAgICAgICAgLy8gd2hlbiBmb3VuZCwgdGFyZ2V0IHByb3hpbWl0eSBvZiAxIHVuaXQgcmFkaXVzIHRvIHRoZSBmb3VuZCBjZWxsLlxyXG4gICAgICAgIC8vIHRoYXQgbWVhbnMgYWx0ZXJpbmcgdGhlIHJvdyBYT1IgY29sdW1uIGJhc2VkIG9uIHRoZSBsYXN0IHN1Y2Nlc3NmdWwgaGl0LlxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGZvciBkZWNpZGluZyB3aGV0aGVyIHRvIHBpY2sgcm93IG9yIGNvbHVtbiBmb3IgYWRqdXN0bWVudFxyXG4gICAgICAgIGxldCBwaWNrUm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAvLyBmb3IgZGVjaWRpbmcgd2hldGhlciB0byBwbHVzIG9yIG1pbnVzLlxyXG4gICAgICAgIGxldCBwbHVzTWludXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID09PSAwID8gMSA6IC0xO1xyXG5cclxuICAgICAgICBpZiAocGlja1Jvdykge1xyXG4gICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IHN1Y2Nlc3NmdWwgaGl0IHdhcyAwIHdlIGRvbid0IHdhbnQgLTEgLS0gYWx3YXlzIGZvcmNlIGl0IHRvIGJlICsxLlxyXG4gICAgICAgICAgaWYgKGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ICsgMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgPT09IGVuZEluZGV4KSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93IC0gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdyA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93ICsgcGx1c01pbnVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2w7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBzdWNjZXNzZnVsIGhpdCB3YXMgMCB3ZSBkb24ndCB3YW50IC0xIC0tIGFsd2F5cyBmb3JjZSBpdCB0byBiZSArMS5cclxuICAgICAgICAgIGlmIChjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb2wgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCArIDE7XHJcbiAgICAgICAgICAvLyBsaWtld2lzZSBmb3IgdGhlIGFyZWFzIHdoZXJlIHRoZSBzaGlwIGlzIGF0IHRoZSBlZGdlIG9mIHRoZSBib2FyZC4gTG9vayBiYWNrLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LmNvbCA9PT0gZW5kSW5kZXgpIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgLSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgKyBwbHVzTWludXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBDUFVfU1RBVEUuZm9jdXNlZDoge1xyXG4gICAgICAgIC8vIGluIGEgZm9jdXNlZCBtb2RlLCB0aGUgQ1BVIHN0YXJ0cyB0cmF2ZXJzaW5nIGluIGEgc2luZ2xlIGRpcmVjdGlvbiB1bnRpbFxyXG4gICAgICAgIC8vIHRoZSBkZXN0cnVjdGlvbiBvZiB0aGUgc2hpcCBpcyBhbm5vdW5jZWQsIGEgbWlzcyBvY2N1cnMsIG9yIGl0IGhpdHMgYSB3YWxsLlxyXG5cclxuICAgICAgICAvLyB0aGUgZGlyZWN0aW9uIHRvIGJlIHRyYXZlcnNlZCBkZXBlbmRzIG9uIHRoZSBsYXN0IHR3byBzdWNjZXNzZnVsIGhpdHNcclxuICAgICAgICAvLyBhbmQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aG9zZSBjb29yZGluYXRlcy5cclxuICAgICAgICAvLyBhIHJvd0RpZmYgaW5kaWNhdGVzIHRvIGxvb2sgdXAgb3IgZG93biwgYXMgdGhlIHNoaXAgaXMgbHlpbmcgdmVydGljYWxseS5cclxuICAgICAgICAvLyBhIGNvbERpZmYgaW5kaWNhdGVzIHRvIGxvb2sgbGVmdCBvciByaWdodCwgYXMgdGhlIHNoaXAgaXMgbHlpbmcgaG9yaXpvbnRhbGx5LlxyXG5cclxuICAgICAgICBsZXQgcm93RGlmZiA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQucm93IC1cclxuICAgICAgICAgICAgY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb2xEaWZmID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgLVxyXG4gICAgICAgICAgICBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2w7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gd2hlbiB0byBsb29rIHVwIC8gZG93biAtLSB0aGVyZSdzIGEgcm93IGRpZmZlcmVuY2VcclxuICAgICAgICBpZiAocm93RGlmZikge1xyXG4gICAgICAgICAgLy8gZm9yIHdoZW4gdGhlIGZvY3VzIG5lZWRzIHRvIGJlIGludmVydGVkIChtaXNzIG9yIGhpdCBhIGdyaWQgYmFycmllcilcclxuICAgICAgICAgIGlmIChjcHUuY3B1Rm9jdXNJbnZlcnQpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkaXJlY3Rpb24gdGhlIGNwdSB3YXMgdHJhdmVsaW5nIGluIHByZXZpb3VzbHk7IGlmIHBvc2l0aXZlLCB0aGVuIGl0IHdhcyBnb2luZyB1cC5cclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBnbyBkb3duIGJ5IGFkZGluZy5cclxuICAgICAgICAgICAgaWYgKHJvd0RpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgKyAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIGVsc2UgaXQgd2FzIG5lZ2F0aXZlLCBzbyBpdCB3YXMgZ29pbmcgZG93biwgc28gd2UgbmVlZCB0byBnbyB1cC5cclxuICAgICAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3B1LmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAvLyBpZiBhdCB0aGUgZW5kLCBzdGFydCBzZWFyY2hpbmcgdXB3YXJkcyBpbnN0ZWFkLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgPT09IGVuZEluZGV4KSB7IFxyXG4gICAgICAgICAgICByb3cgPSBjcHUuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyAtIDE7XHJcbiAgICAgICAgICAvLyBpZiBhdCB0aGUgYmVnaW5uaW5nLCBzdGFydCBzZWFyY2hpbmcgZG93bndhcmRzLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgPT09IDApIHtcclxuICAgICAgICAgICAgcm93ID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5yb3cgKyAxO1xyXG4gICAgICAgICAgLy8gZWxzZSB3ZSdyZSBpbiB0aGUgbWlkZGxlLCBhbmQgaWYgdGhhdCBkaWZmZXJlbmNlIGlzIDEsIHRoZW4gbG9vayB1cHdhcmRzLlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChyb3dEaWZmID4gMCkge1xyXG4gICAgICAgICAgICByb3cgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgLSAxO1xyXG4gICAgICAgICAgLy8gYWxzbyBpbiB0aGUgbWlkZGxlLCBidXQgZm9yIGRpZmZlcmVuY2UgMSwgdGhlbiBsb29rIGRvd253YXJkcy5cclxuICAgICAgICAgIH0gZWxzZSBpZiAocm93RGlmZiA8IDApIHtcclxuICAgICAgICAgICAgcm93ID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQucm93ICsgIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBjb2x1bW4gaXMgYSBnaXZlbiAtLSBrZWVwIGl0IHRoZSBzYW1lLlxyXG4gICAgICAgICAgY29sID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sO1xyXG4gICAgICAgIC8vIGVsc2UgaW4gdGhlIGNhc2Ugb2YgYSBjb2x1bW4gZGlmZmVyZW5jZSwgd2UgbG9vayBsZWZ0IC8gcmlnaHQuXHJcbiAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICBpZiAoY3B1LmNwdUZvY3VzSW52ZXJ0KSB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZGlyZWN0aW9uIHRoZSBjcHUgd2FzIHRyYXZlbGluZyBpbiBwcmV2aW91c2x5OyBpZiBwb3NpdGl2ZSwgdGhlbiBpdCB3YXMgZ29pbmcgdXAuXHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gZ28gZG93biBieSBhZGRpbmcuXHJcbiAgICAgICAgICAgIGlmIChjb2xEaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sICsgMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBlbHNlIGl0IHdhcyBuZWdhdGl2ZSwgc28gaXQgd2FzIHRyYXZlbGluZyBsZWZ0d2FyZHM7IHdlIG5lZWQgdG8gZ28gcmlnaHQuXHJcbiAgICAgICAgICAgICAgY29sID0gY3B1LmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNwdS5jcHVGb2N1c0ludmVydCA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2wgPT09IGVuZEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sIC0gMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbCA9IGNwdS5jcHVGaXJzdFN1Y2Nlc3NmdWxIaXQuY29sICsgMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY29sRGlmZiA+IDApIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sIC0gMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY29sRGlmZiA8IDApIHtcclxuICAgICAgICAgICAgY29sID0gY3B1LmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQuY29sICsgMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByb3cgPSBjcHUuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3c7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7cm93LCBjb2x9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW3JvdywgY29sXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciB0aGUgQ1BVIHRvIGRlY2lkZSBvbiBhbiBhdHRhY2suXHJcbiAgICovXHJcbiAgI2NwdUZpcmVBdHRhY2soKSB7XHJcbiAgICBsZXQgcDIgPSB0aGlzLnBsYXllcnNbMV07XHJcbiAgICBsZXQgc3RhdHVzID0gLTE7XHJcbiAgICBsZXQgcm93O1xyXG4gICAgbGV0IGNvbDtcclxuICAgIHdoaWxlIChzdGF0dXMgPT09IC0xKSB7XHJcbiAgICAgIFtyb3csIGNvbF0gPSB0aGlzLiNjcHVBdHRhY2tEZXRlcm1pbmVDb29yZGluYXRlcyh0aGlzLnBsYXllcnNbMV0pO1xyXG4gICAgICBcclxuICAgICAgc3RhdHVzID0gdGhpcy5wbGF5ZXJzWzFdLmF0dGFjayh0aGlzLnBsYXllcnNbMF0sIHJvdywgY29sKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYXR0YWNrZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApXHJcbiAgICBhdHRhY2tlZENlbGwuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xyXG5cclxuICAgIHN3aXRjaChzdGF0dXMpIHtcclxuICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDUFUgc2NvcmVzIGEgaGl0IVwiKTtcclxuICAgICAgICB0aGlzLiNwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLnBsYXllclNoaXBIaXQpO1xyXG5cclxuICAgICAgICBsZXQgc2hpcElkID0gYXR0YWNrZWRDZWxsLmRhdGFzZXQuc2hpcC5zcGxpdChcInBsYXllci1zaGlwXCIpWzFdO1xyXG5cclxuICAgICAgICBsZXQgc2hpcFN1bmsgPSB0aGlzLnBsYXllcnNbMF0uZ2FtZWJvYXJkLmlzU2hpcFN1bmsoc2hpcElkKTtcclxuICAgICAgICBpZiAoc2hpcFN1bmspIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1BVIHNhbmsgdGhhdCBzaGlwIVwiKTtcclxuICAgICAgICAgIHRoaXMuI3BhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUucGxheWVyU2hpcFN1bmspO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGhlIENQVSBoYXMgbWFkZSBpdHMgZmlyc3Qgc3VjY2Vzc2Z1bCBoaXQgYWdhaW5zdCBhIHNoaXAhIFxyXG4gICAgICAgIGlmIChwMi5jcHVCZWhhdmlvciA9PT0gQ1BVX1NUQVRFLnJhbmRvbVxyXG4gICAgICAgICAgJiYgcDIuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyA9PT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcDIuY3B1Rmlyc3RTdWNjZXNzZnVsSGl0LnJvdyA9IHJvdztcclxuICAgICAgICAgIHAyLmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdC5jb2wgPSBjb2w7XHJcbiAgICAgICAgICBwMi5jcHVCZWhhdmlvciA9IENQVV9TVEFURS5mb3VuZDtcclxuICAgICAgICAvLyBUaGUgQ1BVIGhhcyBtYWRlIGEgc2Vjb25kIHN1Y2Nlc3NmdWwgaGl0IHdoaWxlIGluIGZvdW5kIG1vZGUhXHJcbiAgICAgICAgfSBlbHNlIGlmIChwMi5jcHVCZWhhdmlvciA9PT0gQ1BVX1NUQVRFLmZvdW5kXHJcbiAgICAgICAgICAmJiBwMi5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdyA9PT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcDIuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5yb3cgPSByb3c7XHJcbiAgICAgICAgICBwMi5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LmNvbCA9IGNvbDtcclxuICAgICAgICAgIHAyLmNwdUJlaGF2aW9yID0gQ1BVX1NUQVRFLmZvY3VzZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGZvY3VzZWQgbW9kZSBiZWhhdmlvcnMgLS0gcmV2ZXJ0IHRvIHJhbmRvbSB3aGUgc3Vuay5cclxuICAgICAgICAgIGlmIChwMi5jcHVCZWhhdmlvciA9PT0gQ1BVX1NUQVRFLmZvY3VzZWQpIHtcclxuICAgICAgICAgICAgLy8gb25seSBrZWVwIHVwZGF0aW5nIHRoZSBzZWNvbmQgaGl0LlxyXG4gICAgICAgICAgICBwMi5jcHVTZWNvbmRTdWNjZXNzZnVsSGl0LnJvdyA9IHJvdztcclxuICAgICAgICAgICAgcDIuY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdC5jb2wgPSBjb2w7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBpbiBmb2N1c2VkIG1vZGUuLi4gbGF5IGRvd24gc29tZSBhdHRhY2tzLlxyXG4gICAgICAgICAgLy8gaWYgYSBzaGlwIHdhcyBzdW5rLCB0aGVuIHJlc2V0IHRvIHJhbmRvbS5cclxuICAgICAgICAgIGlmIChzaGlwU3Vuaykge1xyXG4gICAgICAgICAgICBwMi5yZXNldENQVUJlaGF2aW9ycygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDUFUgbWlzc2VzIVwiKTtcclxuICAgICAgICBpZiAocDIuY3B1QmVoYXZpb3IgPT09IENQVV9TVEFURS5mb2N1c2VkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpbmNlIENQVSB3YXMgZm9jdXNlZCwgaXQnbGwgc3dhcCBkaXJlY3Rpb25zIHN0YXJ0aW5nIGZyb20gdGhlIGZpcnN0IGhpdC5cIik7XHJcbiAgICAgICAgICBwMi5jcHVGb2N1c0ludmVydCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuI3AxdHVybiA9IHRydWU7XHJcbiAgICB0aGlzLiNkZXRlcm1pbmVJZkdhbWVPdmVyKCk7XHJcbiAgfVxyXG5cclxuICAjY3B1UGxhY2VTaGlwcyhwbGF5ZXIpIHtcclxuICAgIHRoaXMuc2hpcExlbmd0aHMuZm9yRWFjaCgobGVuZ3RoLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgc3RhdHVzID0gbnVsbDtcclxuICAgICAgbGV0IHJvdztcclxuICAgICAgbGV0IGNvbDtcclxuICAgICAgbGV0IHZlcnRpY2FsO1xyXG5cclxuICAgICAgd2hpbGUgKHN0YXR1cyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChwbGF5ZXIuZ2FtZWJvYXJkLnNpemUtMSkpO1xyXG4gICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChwbGF5ZXIuZ2FtZWJvYXJkLnNpemUtMSkpO1xyXG4gICAgICAgIHZlcnRpY2FsID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBzdGF0dXMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChsZW5ndGgsIHJvdywgY29sLCB2ZXJ0aWNhbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEJhdHRsZXNoaXBFbGVtZW50cy5wbGFjZVNoaXBWaWFDb29yZGluYXRlKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsLCB0cnVlLCBgY3B1LXNoaXAke2luZGV4fWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggYW4gaW5zdGFuY2Ugb2YgQmF0dGxlU2hpcEVsZW1lbnRzIHRvIGNvbnRyb2wgdGhlIHZpZXcgb2YgdGhlIHBhZ2UuXHJcbiAgICogQHBhcmFtIHtCYXR0bGVzaGlwRWxlbWVudHN9IHBhZ2UgXHJcbiAgICovXHJcbiAgYXR0YWNoUGFnZShwYWdlKSB7XHJcbiAgICB0aGlzLiNwYWdlID0gcGFnZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENQVV9TVEFURSA9IHtcclxuICByYW5kb20gOiBcInJhbmRvbVwiLFxyXG4gIGZvdW5kIDogXCJmb3VuZFwiLFxyXG4gIGZvY3VzZWQgOiBcImZvY3VzZWRcIlxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gIG5hbWU7XHJcbiAgY3B1O1xyXG4gIC8qKlxyXG4gICAqIEtlZXBzIHRyYWNrIG9mIGNvb3JkaW5hdGVzIG9mIHRoZSBDUFUncyBsYXN0IHN1Y2Nlc3NmdWwgaGl0LlxyXG4gICAqL1xyXG4gIGNwdUZpcnN0U3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIENQVSBzY29yZXMgdHdvIGhpdHMgb24gYSBzaGlwLCB0aGVuIHVzZSB0aGlzIGFzIGEgZmxhZyB0byBzd2l0Y2hcclxuICAgKiBpdCdzIGJlaGF2aW9yIHRvIGZvY3VzZWQuXHJcbiAgICovXHJcbiAgY3B1U2Vjb25kU3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgYXJlIHRocmVlIHN0YXRlcyBmb3IgdGhlIENQVSB0byBlbXBsb3k6IHJhbmRvbSwgZm91bmQsIGZvY3VzZWQuXHJcbiAgICovXHJcbiAgY3B1QmVoYXZpb3I7XHJcbiAgLyoqXHJcbiAgICogV2hlbiBmb2N1c2VkIG9uIGEgdGFyZ2V0LCBzd2FwcyB0aGUgZGlyZWN0aW9uIG9mIGF0dGFjayB3aGVuIHNldCB0byB0cnVlLlxyXG4gICAqIFVzZWQgd2hlbiB0aGUgQ1BVIGlkZW50aWZpZXMgYSByb3cgLyBjb2wgd2hlcmUgYSBzaGlwIG1heSBiZSwgYnV0IGdldHMgYSBtaXNzLlxyXG4gICAqL1xyXG4gIGNwdUZvY3VzSW52ZXJ0O1xyXG4gIHNjb3JlO1xyXG4gIGdhbWVib2FyZDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSwgaXNDcHUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmNwdSA9IGlzQ3B1O1xyXG4gICAgdGhpcy5jcHVCZWhhdmlvciA9IENQVV9TVEFURS5yYW5kb207XHJcbiAgICB0aGlzLmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNrIHRoZSBvdGhlciBwbGF5ZXIncyBnYW1lYm9hcmQuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIFRoZSBvdGhlciBwbGF5ZXIgb2YgdGhlIGdhbWUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBjb29yZGluYXRlIHRvIGxhdW5jaCBhbiBhdHRhY2suXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCAtIENvbHVtbiBjb29yZGluYXRlIHRvIGxhdW5jaCBhbiBhdHRhY2suXHJcbiAgICogQHJldHVybnMge251bWJlcn0gLSBTdGF0dXMgb2YgdGhlIGF0dGFjay4gMSBpcyBhIGhpdC4gMCBpcyBhIG1pc3MsXHJcbiAgICogYW5kIC0xIGlzIGFuIGFyZWEgd2hpY2ggaGFzIGFscmVhZHkgYmVlbiBoaXQuXHJcbiAgICovXHJcbiAgYXR0YWNrKHBsYXllciwgcm93LCBjb2wpIHtcclxuICAgIHJldHVybiBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRDUFVCZWhhdmlvcnMoKSB7XHJcbiAgICB0aGlzLmNwdUZpcnN0U3VjY2Vzc2Z1bEhpdCA9IHtyb3c6IG51bGwsIGNvbDogbnVsbH07XHJcbiAgICB0aGlzLmNwdVNlY29uZFN1Y2Nlc3NmdWxIaXQgPSB7cm93OiBudWxsLCBjb2w6IG51bGx9O1xyXG4gICAgdGhpcy5jcHVCZWhhdmlvciA9IENQVV9TVEFURS5yYW5kb207XHJcbiAgICB0aGlzLmNwdUZvY3VzSW52ZXJ0ID0gZmFsc2U7XHJcbiAgfVxyXG59IiwiZnVuY3Rpb24gc2V0TmFtZShsZW5ndGgpIHtcclxuICBzd2l0Y2gobGVuZ3RoKSB7XHJcbiAgICBjYXNlIDE6XHJcbiAgICAgIHJldHVybiBcIlNwZWVkZXJcIjtcclxuICAgIGNhc2UgMjpcclxuICAgICAgcmV0dXJuIFwiUGF0cm9sIEJvYXRcIjtcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIFwiRGVzdHJveWVyXCI7XHJcbiAgICBjYXNlIDQ6XHJcbiAgICAgIHJldHVybiBcIkJhdHRsZXNoaXBcIjtcclxuICAgIGNhc2UgNTpcclxuICAgICAgcmV0dXJuIFwiQ2FycmllclwiO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiU2hpcFwiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGJhdHRsZXNoaXAsIGRlcGVuZHMgb24gdGhlIGxlbmd0aC5cclxuICAgKi9cclxuICBuYW1lOyBcclxuICAvKipcclxuICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSBiYXR0bGVzaGlwLlxyXG4gICAqL1xyXG4gIGxlbmd0aDtcclxuICAvKipcclxuICAgKiBDdXJyZW50IGNvbmRpdGlvbiBvZiB0aGUgYmF0dGxlc2hpcC4gUmV0dXJuc1xyXG4gICAqIGFuIGFycmF5IGNvbnRhaW5pbmcgc3RhdHVzIG9mIHRoZSBiYXR0bGVzaGlwLiBcclxuICAgKiBJZiB0aGUgc3RhdHVzZXMgYXJlIGFsbCB0cnVlLCB0aGUgc2hpcCBpcyBzdW5rLlxyXG4gICAqL1xyXG4gIHN0YXR1cztcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgc2hpcC5cclxuICAgKiBAcGFyYW0ge0dhbWVib2FyZH0gZ2FtZWJvYXJkIC0gVGhlIGdhbWVib2FyZCB0aGUgc2hpcCBiZWxvbmdzIHRvLlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggLSBUaGUgbGVuZ3RoIG9mIHRoZSBzaGlwLlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgLSB4Q29vcmRpbmF0ZSB0byBwbGFjZSB0aGUgc2hpcC4gMC1iYXNlZC5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sIC0geUNvb3JkaW5hdGUgdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCAtIFNob3VsZCB0aGUgc2hpcCBiZSBwbGFjZWQgdmVydGljYWxseT9cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoID8/IDE7XHJcbiAgICB0aGlzLm5hbWUgPSBzZXROYW1lKHRoaXMubGVuZ3RoKTtcclxuICAgIHRoaXMuc3RhdHVzID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXJrcyB0aGUgc2hpcCBoaXQgYXQgZ2l2ZW4gbG9jYXRpb24uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvY2F0aW9uIFxyXG4gICAqL1xyXG4gIGhpdCh4LCB5KSB7XHJcbiAgICBsZXQgaWQgPSBgJHt4fSwke3l9YDtcclxuICAgIHRoaXMuc3RhdHVzW2lkXSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBzaGlwIGhhcyBiZWVuIGVudGlyZWx5IHN1bmsgeWV0LlxyXG4gICAqL1xyXG4gIGlzU3VuaygpIHtcclxuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5zdGF0dXMpIHtcclxuICAgICAgaWYgKCF0aGlzLnN0YXR1c1twcm9wXSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufSIsIi8qKlxyXG4gKiBBIGNsYXNzIHdpdGggdXNlZnVsLCBnZW5lcmFsLXB1cnBvc2UgbWV0aG9kcy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxpdHkge1xyXG4gIFxyXG4gIHN0YXRpYyBlbWFpbFJlZ2V4ID0gIFx0XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXHJcbiAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblxyXG4gIC8qKlxyXG4gICAqIEJhc2VkIG9uIHdlYnBhY2sncyByZXF1aXJlIHRvIHF1aWNrbHkgaW1wb3J0IGluIGFsbCBpbWFnZXMgaW4gYSBmb2xkZXIuXHJcbiAgICogU2VlIGRvY3VtZW50YXRpb24gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVxdWlyZS1jb250ZXh0IHRvIHVuZGVyc3RhbmRcclxuICAgKiBtb3JlIGFib3V0IHRoZSBwYXJhbWV0ZXIuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHIgLSByZXF1aXJlLmNvbnRleHQoKSBmdW5jdGlvbiwgdXNlZCBmb3IgaW1wb3J0aW5nIGFsbCBmaWxlcyBpblxyXG4gICAqIGEgZGlyZWN0b3J5IG1hdGNoaW5nIGEgcGF0dGVybi4gRXg6XHJcbiAgICogcmVxdWlyZS5jb250ZXh0KFwiLi9pbWFnZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykuIExlYXZlIGJsYW5rIHRvIHVzZSB0aGlzLlxyXG4gICAqIEByZXR1cm5zIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBpbWFnZXMgbWF0Y2hpbmcgdGhlIHJlcXVpcmUgY29udGV4dCxcclxuICAgKiB0aGUgb3JpZ2luYWwgZmlsZW5hbWUgKHcvIGV4dGVuc2lvbikgYmVpbmcgdGhlIGtleSByZWZlcmVuY2luZyB0aGUgaW1hZ2UuXHJcbiAgICovXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgc3RhdGljIGltcG9ydEFsbEltYWdlcyhyID0gcmVxdWlyZS5jb250ZXh0KFwiLi4vaW1hZ2VzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKSB7XHJcbiAgICBsZXQgaW1hZ2VzID0ge307XHJcbiAgICByLmtleXMoKS5tYXAoKGl0ZW0pID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XHJcbiAgICByZXR1cm4gaW1hZ2VzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCB2YXJpb3VzIGNsYXNzZXMuIFdyYXBzIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRoZSBIVE1MIHRhZyBvZiB0aGUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gRGVmYXVsdCBjbGFzcyB0byByZWZlciB0byB0aGUgZWxlbWVudCBieS5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzTmFtZXMgLSAoT3B0aW9uYWwpIEFkZGl0aW9uYWwgY2xhc3NlcyB0byBnaXZlIHRoZSBlbGVtZW50LlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHRhZywgZGVmYXVsdENsYXNzLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgVXRpbGl0eS5hZGRDbGFzc2VzVG9FbGVtZW50KGVsZW0sIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcyk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGhlbHBlciBtZXRob2Qgd2hpY2ggYWRkcyBjbGFzc2VzIHRvIGEgZ2l2ZW4gZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIGNsYXNzZXMgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDbGFzcyAtIFRoZSBjbGFzc25hbWUgdGhhdCBzYWlkIGVsZW1lbnQgc2hvdWxkIGFsd2F5cyBoYXZlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZXMgLSBUaGUgY2xhc3NuYW1lcyB0byBnaXZlIHRoZSBlbGVtZW50IChvcHRpb25hbCkuXHJcbiAgICogKi8gXHJcbiAgc3RhdGljIGFkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgZGVmYXVsdENsYXNzLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICAgIGNsYXNzTmFtZXMucHVzaChkZWZhdWx0Q2xhc3MpO1xyXG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgYSBnaXZlbiBlbGVtZW50LCBhZGQgYW4gYW5pbWF0aW9uIGJ1dCBvbmx5IHBsYXkgaXQgb25jZS4gQWZ0ZXJ3YXJkcyxcclxuICAgKiB1bmxvYWQgdGhlIGFuaW1hdGlvbi4gVGhpcyBhbGxvd3MgeW91IHRvIGFkZCB0aGUgY2xhc3MgdG8gaXQgYWdhaW4gdG8gXHJcbiAgICogcGxheSB0aGUgYW5pbWF0aW9uOyB0aGlzIGlzIHVzZWZ1bCB3aGVuIGFzc29jaWF0ZWQgd2l0aCBldmVudCB0cmlnZ2Vycy5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gQW4gZWxlbWVudCB0byBhcHBseSB0aGUgYW5pbWF0aW9uIHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbmltYXRpb25OYW1lIC0gQSBDU1MgY2xhc3MgYXNzb2NpYXRlZCB3aXRoIGFuIGFuaW1hdGlvbi5cclxuICAgKi9cclxuICBzdGF0aWMgdHJpZ2dlckFuaW1hdGlvbihlbGVtLCBhbmltYXRpb25OYW1lKSB7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uTmFtZSk7XHJcblxyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcclxuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgfSwge29uY2UgOiB0cnVlfSk7IFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVjdXJzaXZlbHkgc2NhbGUgdGhlIHRyZWUgb2YgYSBjaGlsZCBub2RlIHVudGlsIHRoZSBwYXJlbnQgbWF0Y2hpbmcgdGhlIGdpdmVuXHJcbiAgICogc2VsZWN0b3IgaXMgZm91bmQuIFJldHVybnMgTlVMTCBpZiBubyBtYXRjaGluZyBwYXJlbnQgaXMgZm91bmQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIEEgY2hpbGQgbm9kZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBDU1MgU2VsZWN0b3IgU3RyaW5nLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIVE1MZWxlbWVudH0gLSBQYXJlbnQgb2YgZWxlbS5cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0TWF0Y2hpbmdQYXJlbnQoZWxlbSwgc2VsZWN0b3IpIHtcclxuICAgIHdoaWxlKCFlbGVtLm1hdGNoZXMoc2VsZWN0b3IpKSB7XHJcbiAgICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XHJcbiAgICAgIGlmIChlbGVtLm1hdGNoZXMoXCJodG1sXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSB1c2VyJ3MgbG9jYXRpb24sIHVzaW5nIHRoZSBHZW9sb2NhdGlvbiBBUEkuXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgdGhlIHVzZXIncyBsb2NhdGlvbiwgb3IgbnVsbFxyXG4gICAqIGlmIHRoZSB1c2VyIGRlbmllcyBwZXJtaXNzaW9uIHJlcXVlc3RzLlxyXG4gICAqL1xyXG4gIC8qXHJcbiAgc3RhdGljIGdldEdlb2xvY2F0aW9uKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MocG9zaXRpb24pIHtcclxuICAgICAgY29uc3QgbGF0aXR1ZGUgID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICBjb25zdCBsb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG5cclxuICAgICAgY29uc3QgbGF0bG9uZyA9IGAke2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gO1xyXG5cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsYXRsb25nKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGVycm9yKCkge1xyXG4gICAgICBsZXQgZXJyb3IgPSBcIlVzZXIgZGVuaWVkIGxvY2F0aW9uIHBlcm1pc3Npb25zLlwiO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHtcclxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFsbCBjaGlsZHJlbiBmcm9tIGEgcGFyZW50IG5vZGUuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudE5vZGV9IHBhcmVudCAtIFBhcmVudCBub2RlIGNvbnRhaW5pbmcgY2hpbGRyZW4uXHJcbiAgICovXHJcbiAgc3RhdGljIHJlbW92ZUFsbENoaWxkcmVuKHBhcmVudCkge1xyXG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbnRlbmNlIGZvcm1hdC4gTWFrZXMgc3VyZSB0aGUgZmlyc3QgbGV0dGVyIGlzIGNhcGl0YWxpemVkLCBhbmQgdGhlbiBcclxuICAgKiBhIHBlcmlvZCBpcyBhcHBlbmRlZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gYSBzdHJpbmcgdG8gc2VudGVuY2UtY2FzZS5cclxuICAgKi9cclxuICBzdGF0aWMgdG9TZW50ZW5jZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSArIFwiLlwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBhc3NpZ25lZCB0byBlYWNoIGJ1dHRvblxyXG4gICAqIHdoZW4gb25seSBvbmUgb2YgdGhlbSBzaG91bGQgYmUgdG9nZ2xlZC4gRnVuY3Rpb25zIGxpa2UgYSByYWRpb1xyXG4gICAqIGJ1dHRvbiBidXQgd2l0aCBkaWZmZXJlbnQgc3R5bGluZy5cclxuICAgKiBAcGFyYW0geyp9IGUgXHJcbiAgICogQHBhcmFtIHsqfSBwYXJlbnRTZWxlY3RvciBcclxuICAgKi9cclxuICBzdGF0aWMgdG9nZ2xlU2VsZWN0ZWQoZSwgcGFyZW50U2VsZWN0b3IpIHtcclxuICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBmcm9tIHRoZSBvdGhlci5cclxuICAgIGNvbnN0IHBhcmVudCA9IFV0aWxpdHkuZ2V0TWF0Y2hpbmdQYXJlbnQoZS5jdXJyZW50VGFyZ2V0LCBwYXJlbnRTZWxlY3Rvcik7XHJcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0ZWQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcclxuICAgIGN1cnJlbnRTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICBjdXJyZW50U2VsZWN0ZWQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAvLyB0b2dnbGUgc2VsZWN0ZWQgY2xhc3Mgb24gdGhlIGJ1dHRvblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgIGUuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vanMgXHJcbmltcG9ydCB7IEJhdHRsZXNoaXBFbGVtZW50cyB9IGZyb20gXCIuL0JhdHRsZXNoaXBFbGVtZW50XCI7XHJcbmltcG9ydCB7IEdBTUVfU1RBVEUgfSBmcm9tIFwiLi9nYW1lbWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vZ2FtZW1hbmFnZXJcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbi8vY3NzXHJcbmltcG9ydCBcIi4uL2Nzcy9yZXNldC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2luZGV4LmNzc1wiO1xyXG5cclxuKGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gIGNvbnN0IHAxID0gbmV3IFBsYXllcihcIkNvbW1hbmRlciBCbHVlXCIsIGZhbHNlKTtcclxuICBjb25zdCBwMiA9IG5ldyBQbGF5ZXIoXCJDb21tYW5kZXIgUmVkXCIsIHRydWUpO1xyXG5cclxuICBjb25zdCBnYW1lID0gbmV3IEdhbWVNYW5hZ2VyKHAxLCBwMik7XHJcbiAgY29uc3QgcGFnZSA9IG5ldyBCYXR0bGVzaGlwRWxlbWVudHMoZ2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IHBhZ2UuaGVhZGVyKCk7XHJcbiAgY29uc3QgZ2FtZUFyZWEgPSBwYWdlLmdhbWVBcmVhKCk7XHJcblxyXG4gIGJvZHkuYXBwZW5kKGhlYWRlciwgZ2FtZUFyZWEpO1xyXG4gIFxyXG4gIGdhbWUuYXR0YWNoUGFnZShwYWdlKTtcclxuICBwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLmdhbWVQcm9tcHQpO1xyXG59KSgpO1xyXG5cclxuLypcclxuMTogVXNlcnMgcGxhY2UgdGhlaXIgc2hpcHMuXHJcbjI6IFVzZXJzIHBsYXkgdGhlIGdhbWUuXHJcbjM6IEdhbWUgZW5kcyB3aGVuIHRoZSBvbmUgcGxheWVyJ3MgYmF0dGxlc2hpcHMgYXJlIGRlc3Ryb3llZC5cclxuNDogVGhlIGdhbWUgZW5kIGhhcyBzdGF0aXN0aWNzIHJlc3VsdHMgYW5kIG9wdGlvbiB0byByZXBsYXlcclxuNTogR28gYmFjayB0byBzdGVwIDEuXHJcbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9