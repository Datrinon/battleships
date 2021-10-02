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
___CSS_LOADER_EXPORT___.push([module.id, ".no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  background-color: cyan;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.draggable:hover {\r\n  background-color: blue;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55);\r\n  background-color: rgba(0, 255, 64, 0.3);\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: greenyellow;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.occupied:hover {\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.ship-placed .cell {\r\n  /* border: 1px solid rgba(27, 102, 71, 0.3); */\r\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA,8DAA8D;AAC9D,uDAAuD;AACvD,uDAAuD;AACvD,gFAAgF;AAChF;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;AACA;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;EACjC,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8CAA8C;AAChD","sourcesContent":[".no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  background-color: cyan;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.draggable:hover {\r\n  background-color: blue;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55);\r\n  background-color: rgba(0, 255, 64, 0.3);\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: greenyellow;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.occupied:hover {\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.ship-placed .cell {\r\n  /* border: 1px solid rgba(27, 102, 71, 0.3); */\r\n}"],"sourceRoot":""}]);
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

    this.#enableDraggingAndRotation();

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

  setDialog(message) {
    this.#dialogHolder.querySelector(".dialog-msg").textContent = message;
  }

  /**
   * Generates an inventory of ships and lets them be dragged by the player.
   */
  #shipPlacement() {
    let shipInventory = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("ship-placer");

    let header = _component__WEBPACK_IMPORTED_MODULE_0__["default"].heading("Select Ship", 3);
    let selection = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("ship-selection");

    this.gameManager.shipLengths.forEach((shipLen, index) => {
      let ship = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("ship", "draggable");
      ship.id = `player-ship${index}`;
      ship.setAttribute("draggable", "true");
      for (let i = 0; i < shipLen; i++) {
        let cell = _component__WEBPACK_IMPORTED_MODULE_0__["default"].div("cell");
        ship.append(cell);
      }

      selection.append(ship);
    })

    shipInventory.append(header, selection);

    return shipInventory;
  }

  /**
   * Contains a collection of callbacks to enable drag 'n' drop on the gameboard with rotation.
   * Works with the drag and drop API, so it works to assign callbacks to the 
   * draggable items, and all the droppable zone it pertains to. In this case,
   * the ships are the draggables, and the drop zones are all the cells of 
   * player 1's gameboard.
   */
  #enableDraggingAndRotation() {
    const removeDragGuide = () => {
      document.querySelectorAll(".p1.gameboard .selectable")
        .forEach(cell => {
          cell.classList.remove("valid-drag");
        });
    }

    let currentDraggedLength;
    let currentDraggedShipId;
    let self = this;

    this.#gameContainer.querySelectorAll(".draggable").forEach(ship => {
      ship.addEventListener("dragstart", (e) => {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text/plain", e.target.id);

        currentDraggedLength = e.target.childElementCount;
        currentDraggedShipId = e.target.id ?? e.target.dataset.ship;
        // blank image
        let img = new Image();
        e.dataTransfer.setDragImage(img, 0, 0);
      });

      ship.addEventListener("dragend", () => {
        document.querySelector(`#${currentDraggedShipId}`).classList.remove("no-display");
      });
    });

    // all cells that are selectable are droppable areas.
    this.#gameContainer.querySelectorAll(".p1.gameboard .selectable").forEach(cell => {

      cell.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        let hoverCell = _utility__WEBPACK_IMPORTED_MODULE_1__["default"].getMatchingParent(e.target, ".selectable");

        document.querySelector(`#${currentDraggedShipId}`).classList.add("no-display");

        if (document.querySelector(`#${currentDraggedShipId}`).classList.contains("vertical")) {
          // apply vertical guide.
          let col = hoverCell.dataset.col;
          let cellsCol = Array.from(document.querySelectorAll(`.p1.gameboard [data-col="${col}"]`));
          let index = cellsCol.indexOf(hoverCell);

          if (index + currentDraggedLength <= cellsCol.length) {
            for (let i = index; i < index + currentDraggedLength; i++) {
              // not a valid placement.
              if (cellsCol[i].classList.contains("occupied")
                && cellsCol[i].dataset.ship !== currentDraggedShipId) {
                removeDragGuide();
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

          if (index + currentDraggedLength <= cellsRow.length) {
            for (let i = index; i < index + currentDraggedLength; i++) {
              // not a valid placement.
              if (cellsRow[i].classList.contains("occupied")
                && cellsRow[i].dataset.ship !== currentDraggedShipId) {
                console.log("Firah!");
                removeDragGuide();
                return;
              }

              cellsRow[i].classList.add("valid-drag");
              // console.log({index, currentDraggedLength, i});
            }
          }
        }


      });

      // when the drag element leaves droppable zone, remove all valid drag
      // it'll just be recreated by valid-drag.
      cell.addEventListener("dragleave", removeDragGuide);

      cell.addEventListener("drop", (e) => {
        // only when the area is a valid-drag do we add it in. otherwise, nope.
        if (!e.target.classList.contains("valid-drag")) {
          return;
        }

        e.preventDefault();
        removeDragGuide();

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
          for (let i = index; i < index + currentDraggedLength; i++) {
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
        for (let i = index; i < index + currentDraggedLength; i++) {
          cells[i].classList.add("occupied");
          cells[i].dataset.ship = id;
        }

        // allow the ship to be rotated.
        self.#allowPlacedShipRotation();
      });

      // code to return ship to inventory
      this.#gameContainer.querySelector(".ship-placer")
        .addEventListener("dragover", (e) => {
          e.preventDefault();
        });

      this.#gameContainer.querySelector(".ship-placer")
        .addEventListener("drop", (e) => {

          e.preventDefault();

          const id = e.dataTransfer.getData("text/plain");
          document.querySelector(`#${id}`).classList.remove("ship-placed");
          e.target.append();
        });
    });
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
  static placeShipManually(length, row, col, vertical, player2 = true, id) {
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
    const statsDamage = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("Damage taken: ", "hurt");
    const p1Damage = _component__WEBPACK_IMPORTED_MODULE_0__["default"].span("--%", "p1-damage-metric");
    const p2Damage = _component__WEBPACK_IMPORTED_MODULE_0__["default"].span("--%", "p2-damage-metric");

    const playAgain = _component__WEBPACK_IMPORTED_MODULE_0__["default"].button("Play Again", "play-again");

    victoryMsg.append(winner);

    statsContainer.append(statsHeading,
      statsAccuracy, p1Accuracy, p2Accuracy,
      statsDamage, p1Damage, p2Damage);

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
    // return null if out of bounds
    if (row + length > this.grid.length
      || col + length > this.grid.length
    ) {
      return null;
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
    if (typeof row !== "number" || col === undefined) {
      throw new Error("You must provide row and col coordinates.");
    }

    let shipId = this.grid[row][col];

    if (shipId === "x" || shipId === "o") {
      return -1;
    } else if (shipId === "") {
      this.grid[row][col] = "o";
      return 0;
    } else {
      this.grid[row][col] = "x";
      this.ships[shipId].hit(row, col);

      return 1;
    }
  }

  getGrid() {
    return this.grid;
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
  playing: "Game active.",
  gamePrompt: "Welcome. Drag ships onto gameboard. Click (when placed): Rotate."
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
  p1turn;

  /**
   * An array of the lengths of each ship that the player will have in their arsenal.
   * @type {number[]}
   */
  shipLengths;

  /**
   * Create an instance of the game.
   * @param {Player[]} players - An array of the players in the game.
   * @param {boolean} p1start - Should player 1 start first? True by default.
   * @returns 
   */
  constructor(players, p1start = true, shipLengths = [2, 3, 3, 4, 5]) {
    if (GameManager.#instance !== undefined) {
      return GameManager.#instance;
    } 

    GameManager.#instance = this;
    this.players = players;
    this.p1turn = p1start;
    this.shipLengths = shipLengths;
  }

  /**
   * Start the game.
   */
  startGame() {
    this.players.forEach(player => {
      if (player.cpu) {
        this.#cpuPlaceShips(player);
      }
    });

    
  }

  #cpuPlaceShips(player) {
    this.shipLengths.forEach((length, index) => {
      let status = null;
      let row;
      let col;
      let vertical;

      while (status === null) {
        // TODO
        // when testing the game phase, override row and col to be 0, 0 to test
        // victory phase.
        row = Math.round(Math.random() * (player.gameboard.size-1));
        col = Math.round(Math.random() * (player.gameboard.size-1));
        vertical = Math.round(Math.random());
        status = player.gameboard.placeShip(length, row, col, vertical);
      }

      _BattleshipElement__WEBPACK_IMPORTED_MODULE_0__.BattleshipElements.placeShipManually(length, row, col, vertical, true, `cpu-ship${index}`);
    });
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
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");


class Player {
  name;
  cpu;
  score;
  gameboard;

  constructor(name, isCpu) {
    this.name = name;
    this.cpu = isCpu;
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
  attack(player, xLoc, yLoc) {
    return player.gameboard.receiveAttack(xLoc, yLoc);
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
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/component.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/js/utility.js");
/* harmony import */ var _BattleshipElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BattleshipElement */ "./src/js/BattleshipElement.js");
/* harmony import */ var _gamemanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamemanager */ "./src/js/gamemanager.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
//js 







//css



(function main() {
  const body = document.body;

  const p1 = new _player__WEBPACK_IMPORTED_MODULE_4__["default"]("Commander Blue", false);
  const p2 = new _player__WEBPACK_IMPORTED_MODULE_4__["default"]("Commander Red", true);

  const game = new _gamemanager__WEBPACK_IMPORTED_MODULE_3__["default"]([p1, p2]);
  const page = new _BattleshipElement__WEBPACK_IMPORTED_MODULE_2__.BattleshipElements(game);

  const header = page.header();
  const gameArea = page.gameArea();

  page.setDialog(_gamemanager__WEBPACK_IMPORTED_MODULE_3__.GAME_STATE.gamePrompt);

  body.append(header, gameArea);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN0SkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNvQztBQUNKO0FBQ3lCO0FBQ2Q7QUFDSDtBQUNWO0FBQzlCO0FBQ0E7QUFDMEI7QUFDQTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrQ0FBTTtBQUN2QixpQkFBaUIsK0NBQU07QUFDdkI7QUFDQSxtQkFBbUIsb0RBQVc7QUFDOUIsbUJBQW1CLGtFQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrREFBcUI7QUFDdEM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9yZXNldC5jc3M/MTUyYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvLihwbmd8anBlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL0JhdHRsZXNoaXBFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvZ2FtZW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1hcmVhIHtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGlzIHBzZXVkbyBlbGVtZW50IGhlbHBzIGtlZXAgdGhlIGNlbGxzIGFsaWduZWQgdG9nZXRoZXIgKi9cXHJcXG4vKiBFbXB0eSBkaXZzIGFjdCBzdHJhbmdlbHksIHNvIHB1dCBjb250ZW50IGluIHRoZW0uICAqL1xcclxcbi8qIERlbGV0ZSBpdCBhbmQgdGhlbiBydW4gdGhpcyBpbiBjb25zb2xlIHRvIHNlZSB0aGF0ICovXFxyXFxuLyogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXFwiLmNlbGxcXFwiKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC50ZXh0Q29udGVudCA9IFxcXCJBXFxcIik7ICovXFxyXFxuLmNlbGw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcuJztcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpXFxyXFxufVxcclxcblxcclxcbi5zaGlwLXNlbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUge1xcclxcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGUge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi52YWxpZC1kcmFnIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAyNTUsIDU1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCA2NCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLnNoaXAtcGxhY2VkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNGU4YTAyO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQ6aG92ZXIge1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUudmVydGljYWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXBsYWNlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTM2LCAxMzYsIDAuODYzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXN0YXJ0LWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLW1pZGRsZS1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZW5kLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtc3RhcnQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1taWRkbGUtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1lbmQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC10cmFuc3BhcmVudCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VkIC5jZWxsIHtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDEwMiwgNzEsIDAuMyk7ICovXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBLDhEQUE4RDtBQUM5RCx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELGdGQUFnRjtBQUNoRjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubm8tZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWFyZWEge1xcclxcbiAgbWF4LXdpZHRoOiA5MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWFyZWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFRoaXMgcHNldWRvIGVsZW1lbnQgaGVscHMga2VlcCB0aGUgY2VsbHMgYWxpZ25lZCB0b2dldGhlciAqL1xcclxcbi8qIEVtcHR5IGRpdnMgYWN0IHN0cmFuZ2VseSwgc28gcHV0IGNvbnRlbnQgaW4gdGhlbS4gICovXFxyXFxuLyogRGVsZXRlIGl0IGFuZCB0aGVuIHJ1biB0aGlzIGluIGNvbnNvbGUgdG8gc2VlIHRoYXQgKi9cXHJcXG4vKiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxcXCIuY2VsbFxcXCIpLmZvckVhY2goY2VsbCA9PiBjZWxsLnRleHRDb250ZW50ID0gXFxcIkFcXFwiKTsgKi9cXHJcXG4uY2VsbDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJy4nO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0YWJsZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0YWJsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyMzgsIDI1MilcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtc2VsZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWdnYWJsZSB7XFxyXFxuICB3aWR0aDpmaXQtY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnYWJsZSB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbGlkLWRyYWcge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDI1NSwgNTUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDY0LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5zaGlwLXBsYWNlZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM0ZThhMDI7XFxyXFxufVxcclxcblxcclxcbi5vY2N1cGllZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyMzgsIDI1Mik7XFxyXFxufVxcclxcblxcclxcbi5vY2N1cGllZDpob3ZlciB7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWdnYWJsZS52ZXJ0aWNhbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY3B1LXNoaXAtcGxhY2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMzYsIDEzNiwgMC44NjMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya3JlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtc3RhcnQtaG9yaXpvbnRhbCB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbWlkZGxlLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1lbmQtaG9yaXpvbnRhbCB7XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zdGFydC12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLW1pZGRsZS12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWVuZC12ZXJ0aWNhbCB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLXRyYW5zcGFyZW50IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1wbGFjZWQgLmNlbGwge1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMTAyLCA3MSwgMC4zKTsgKi9cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDsiLCJpbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi91dGlsaXR5XCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBlbGVtZW50cyBmb3IgQmF0dGxlc2hpcC5cclxuICovXHJcbiBleHBvcnQgY2xhc3MgQmF0dGxlc2hpcEVsZW1lbnRzIHtcclxuXHJcbiAgI2RpYWxvZ0hvbGRlcjtcclxuICAjZ2FtZUNvbnRhaW5lcjtcclxuICBnYW1lTWFuYWdlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZU1hbmFnZXIpIHtcclxuICAgIHRoaXMuZ2FtZU1hbmFnZXIgPSBnYW1lTWFuYWdlcjtcclxuICB9XHJcblxyXG4gIGhlYWRlcigpIHtcclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcInRpdGxlLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBjb21wb25lbnQuaGVhZGluZyhcIkJhdHRsZXNoaXBzXCIsIDEpO1xyXG4gICAgY29uc3QgYXV0aG9yTGFiZWwgPSBjb21wb25lbnQucChcImJ5IERhbiBULlwiLCAyKTtcclxuXHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQodGl0bGVMYWJlbCwgYXV0aG9yTGFiZWwpO1xyXG5cclxuICAgIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGdhbWVBcmVhKCkge1xyXG4gICAgdGhpcy4jZ2FtZUNvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJnYW1lLWFyZWFcIik7XHJcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZ2FtZWJvYXJkLWFyZWFcIik7XHJcbiAgICBjb25zdCBjb250cm9sRGlhbG9nQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImNvbnRyb2xzLWFyZWFcIik7XHJcblxyXG4gICAgdGhpcy4jZ2FtZUNvbnRhaW5lci5hcHBlbmQoZ2FtZWJvYXJkQ29udGFpbmVyLCBjb250cm9sRGlhbG9nQ29udGFpbmVyKTtcclxuXHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kKHRoaXMuI2dhbWVib2FyZChcIlBsYXllclwiLCBcInAxXCIpLCB0aGlzLiNnYW1lYm9hcmQoXCJDUFVcIiwgXCJwMlwiKSk7XHJcblxyXG4gICAgY29udHJvbERpYWxvZ0NvbnRhaW5lci5hcHBlbmQodGhpcy4jZGlhbG9nKCksIHRoaXMuI3NoaXBQbGFjZW1lbnQoKSk7XHJcbiAgICBjb250cm9sRGlhbG9nQ29udGFpbmVyLmFwcGVuZCh0aGlzLiNzdGFydEdhbWVQcm9tcHQoKSk7XHJcblxyXG4gICAgdGhpcy4jZW5hYmxlRHJhZ2dpbmdBbmRSb3RhdGlvbigpO1xyXG5cclxuICAgIGNvbnRyb2xEaWFsb2dDb250YWluZXIuYXBwZW5kKHRoaXMuI3N1bW1hcnkoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuI2dhbWVDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYSBjbGlja2FibGUgZ3JpZCBiYXNlZCBvbiB0aGUgZ2FtZSBtYW5hZ2VyJ3MgZ2FtZWJvYXJkIHNpemUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXllck5hbWUgOiB0aGUgbmFtZSBvZiB0aGUgcGxheWVyOyB1c2VkIGFzIGEgY2xhc3MgbmFtZSB0byBcclxuICAgKiBpZGVudGlmeSB0aGUgZ2FtZWJvYXJkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgOiBBZGRpdGlvbmFsIGNsYXNzIG5hbWVzIHRvIGlkZW50aWZ5IHRoZSBnYW1lYm9hcmQgYnkuXHJcbiAgICovXHJcbiAgI2dhbWVib2FyZChwbGF5ZXJOYW1lLCBjbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGNvbXBvbmVudC5kaXYoXCJnYW1lYm9hcmRcIiwgY2xhc3NOYW1lKTtcclxuICAgIGNvbnN0IGdhbWVib2FyZEdyaWQgPSBjb21wb25lbnQuZGl2KFwiZ2FtZWJvYXJkLWdyaWRcIik7XHJcblxyXG4gICAgY29uc3QgZ3JpZFNpemUgPSB0aGlzLmdhbWVNYW5hZ2VyLnBsYXllcnNbMF0uZ2FtZWJvYXJkLnNpemU7XHJcbiAgICBjb25zdCBudW1iZXJDZWxsID0gY29tcG9uZW50LmRpdihcImNlbGxcIiwgXCJudW1iZXJpbmdcIik7XHJcblxyXG4gICAgZ2FtZWJvYXJkR3JpZC5wcmVwZW5kKGNvbXBvbmVudC5kaXYoXCJjZWxsXCIsIFwiYmxhbmtcIikpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSByb3cgbnVtYmVyaW5nXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcclxuICAgICAgbnVtYmVyQ2VsbC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgICBnYW1lYm9hcmRHcmlkLmFwcGVuZChudW1iZXJDZWxsLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlIGNvbHVtbiBudW1iZXJpbmcgYW5kIGNlbGxzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcclxuICAgICAgbnVtYmVyQ2VsbC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG5cclxuICAgICAgZ2FtZWJvYXJkR3JpZC5hcHBlbmQobnVtYmVyQ2VsbC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkU2l6ZTsgaisrKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiLCBcInNlbGVjdGFibGVcIik7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGo7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICAgIGdhbWVib2FyZEdyaWQuYXBwZW5kKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZWJvYXJkLmFwcGVuZChnYW1lYm9hcmRHcmlkKTtcclxuXHJcbiAgICAvLyBBcHBseSBoZWFkZXJzIGZvciB0aGUgZ2FtZWJvYXJkXHJcbiAgICBnYW1lYm9hcmQucHJlcGVuZChjb21wb25lbnQuaGVhZGluZyhwbGF5ZXJOYW1lLCAyLCBcImdhbWVib2FyZC1vd25lclwiKSk7XHJcblxyXG4gICAgcmV0dXJuIGdhbWVib2FyZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGRpYWxvZyBtZXNzYWdlLCB3aGljaCBpcyB1c2VkIHRvIFxyXG4gICAqIGdpdmUgdGhlIHVzZXIgZGlyZWN0aW9ucyBvbiBlYWNoIHBoYXNlIG9mIHRoZSBnYW1lLlxyXG4gICAqL1xyXG4gICNkaWFsb2coKSB7XHJcbiAgICBsZXQgZGlhbG9nQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImRpYWxvZ1wiKTtcclxuICAgIGxldCBkaWFsb2dNc2cgPSBjb21wb25lbnQucChcIldlbGNvbWUuXCIsIFwiZGlhbG9nLW1zZ1wiKTtcclxuICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmQoZGlhbG9nTXNnKTtcclxuXHJcbiAgICB0aGlzLiNkaWFsb2dIb2xkZXIgPSBkaWFsb2dDb250YWluZXI7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ0NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHNldERpYWxvZyhtZXNzYWdlKSB7XHJcbiAgICB0aGlzLiNkaWFsb2dIb2xkZXIucXVlcnlTZWxlY3RvcihcIi5kaWFsb2ctbXNnXCIpLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhbiBpbnZlbnRvcnkgb2Ygc2hpcHMgYW5kIGxldHMgdGhlbSBiZSBkcmFnZ2VkIGJ5IHRoZSBwbGF5ZXIuXHJcbiAgICovXHJcbiAgI3NoaXBQbGFjZW1lbnQoKSB7XHJcbiAgICBsZXQgc2hpcEludmVudG9yeSA9IGNvbXBvbmVudC5kaXYoXCJzaGlwLXBsYWNlclwiKTtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0gY29tcG9uZW50LmhlYWRpbmcoXCJTZWxlY3QgU2hpcFwiLCAzKTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBjb21wb25lbnQuZGl2KFwic2hpcC1zZWxlY3Rpb25cIik7XHJcblxyXG4gICAgdGhpcy5nYW1lTWFuYWdlci5zaGlwTGVuZ3Rocy5mb3JFYWNoKChzaGlwTGVuLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgc2hpcCA9IGNvbXBvbmVudC5kaXYoXCJzaGlwXCIsIFwiZHJhZ2dhYmxlXCIpO1xyXG4gICAgICBzaGlwLmlkID0gYHBsYXllci1zaGlwJHtpbmRleH1gO1xyXG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiKTtcclxuICAgICAgICBzaGlwLmFwcGVuZChjZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZWN0aW9uLmFwcGVuZChzaGlwKTtcclxuICAgIH0pXHJcblxyXG4gICAgc2hpcEludmVudG9yeS5hcHBlbmQoaGVhZGVyLCBzZWxlY3Rpb24pO1xyXG5cclxuICAgIHJldHVybiBzaGlwSW52ZW50b3J5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udGFpbnMgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byBlbmFibGUgZHJhZyAnbicgZHJvcCBvbiB0aGUgZ2FtZWJvYXJkIHdpdGggcm90YXRpb24uXHJcbiAgICogV29ya3Mgd2l0aCB0aGUgZHJhZyBhbmQgZHJvcCBBUEksIHNvIGl0IHdvcmtzIHRvIGFzc2lnbiBjYWxsYmFja3MgdG8gdGhlIFxyXG4gICAqIGRyYWdnYWJsZSBpdGVtcywgYW5kIGFsbCB0aGUgZHJvcHBhYmxlIHpvbmUgaXQgcGVydGFpbnMgdG8uIEluIHRoaXMgY2FzZSxcclxuICAgKiB0aGUgc2hpcHMgYXJlIHRoZSBkcmFnZ2FibGVzLCBhbmQgdGhlIGRyb3Agem9uZXMgYXJlIGFsbCB0aGUgY2VsbHMgb2YgXHJcbiAgICogcGxheWVyIDEncyBnYW1lYm9hcmQuXHJcbiAgICovXHJcbiAgI2VuYWJsZURyYWdnaW5nQW5kUm90YXRpb24oKSB7XHJcbiAgICBjb25zdCByZW1vdmVEcmFnR3VpZGUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlXCIpXHJcbiAgICAgICAgLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZC1kcmFnXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50RHJhZ2dlZExlbmd0aDtcclxuICAgIGxldCBjdXJyZW50RHJhZ2dlZFNoaXBJZDtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLiNnYW1lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlXCIpLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLnRhcmdldC5pZCk7XHJcblxyXG4gICAgICAgIGN1cnJlbnREcmFnZ2VkTGVuZ3RoID0gZS50YXJnZXQuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICAgICAgY3VycmVudERyYWdnZWRTaGlwSWQgPSBlLnRhcmdldC5pZCA/PyBlLnRhcmdldC5kYXRhc2V0LnNoaXA7XHJcbiAgICAgICAgLy8gYmxhbmsgaW1hZ2VcclxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGltZywgMCwgMCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudERyYWdnZWRTaGlwSWR9YCkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWxsIGNlbGxzIHRoYXQgYXJlIHNlbGVjdGFibGUgYXJlIGRyb3BwYWJsZSBhcmVhcy5cclxuICAgIHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVcIikuZm9yRWFjaChjZWxsID0+IHtcclxuXHJcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgICAgICBsZXQgaG92ZXJDZWxsID0gVXRpbGl0eS5nZXRNYXRjaGluZ1BhcmVudChlLnRhcmdldCwgXCIuc2VsZWN0YWJsZVwiKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudERyYWdnZWRTaGlwSWR9YCkuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcblxyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50RHJhZ2dlZFNoaXBJZH1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKSkge1xyXG4gICAgICAgICAgLy8gYXBwbHkgdmVydGljYWwgZ3VpZGUuXHJcbiAgICAgICAgICBsZXQgY29sID0gaG92ZXJDZWxsLmRhdGFzZXQuY29sO1xyXG4gICAgICAgICAgbGV0IGNlbGxzQ29sID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLWNvbD1cIiR7Y29sfVwiXWApKTtcclxuICAgICAgICAgIGxldCBpbmRleCA9IGNlbGxzQ29sLmluZGV4T2YoaG92ZXJDZWxsKTtcclxuXHJcbiAgICAgICAgICBpZiAoaW5kZXggKyBjdXJyZW50RHJhZ2dlZExlbmd0aCA8PSBjZWxsc0NvbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBjdXJyZW50RHJhZ2dlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gbm90IGEgdmFsaWQgcGxhY2VtZW50LlxyXG4gICAgICAgICAgICAgIGlmIChjZWxsc0NvbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJvY2N1cGllZFwiKVxyXG4gICAgICAgICAgICAgICAgJiYgY2VsbHNDb2xbaV0uZGF0YXNldC5zaGlwICE9PSBjdXJyZW50RHJhZ2dlZFNoaXBJZCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRHJhZ0d1aWRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNlbGxzQ29sW2ldLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcmFnXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGFwcGx5IGhvcml6b250YWwgZ3VpZGVcclxuICAgICAgICAgIGxldCByb3cgPSBob3ZlckNlbGwuZGF0YXNldC5yb3c7XHJcbiAgICAgICAgICBsZXQgY2VsbHNSb3cgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gY2VsbHNSb3cuaW5kZXhPZihob3ZlckNlbGwpO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG92ZXJpbmcgb3ZlciBpbmRleDogXCIgKyBpbmRleCk7XHJcblxyXG4gICAgICAgICAgaWYgKGluZGV4ICsgY3VycmVudERyYWdnZWRMZW5ndGggPD0gY2VsbHNSb3cubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIC8vIG5vdCBhIHZhbGlkIHBsYWNlbWVudC5cclxuICAgICAgICAgICAgICBpZiAoY2VsbHNSb3dbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib2NjdXBpZWRcIilcclxuICAgICAgICAgICAgICAgICYmIGNlbGxzUm93W2ldLmRhdGFzZXQuc2hpcCAhPT0gY3VycmVudERyYWdnZWRTaGlwSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyYWghXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRHJhZ0d1aWRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBjZWxsc1Jvd1tpXS5jbGFzc0xpc3QuYWRkKFwidmFsaWQtZHJhZ1wiKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7aW5kZXgsIGN1cnJlbnREcmFnZ2VkTGVuZ3RoLCBpfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyB3aGVuIHRoZSBkcmFnIGVsZW1lbnQgbGVhdmVzIGRyb3BwYWJsZSB6b25lLCByZW1vdmUgYWxsIHZhbGlkIGRyYWdcclxuICAgICAgLy8gaXQnbGwganVzdCBiZSByZWNyZWF0ZWQgYnkgdmFsaWQtZHJhZy5cclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIHJlbW92ZURyYWdHdWlkZSk7XHJcblxyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XHJcbiAgICAgICAgLy8gb25seSB3aGVuIHRoZSBhcmVhIGlzIGEgdmFsaWQtZHJhZyBkbyB3ZSBhZGQgaXQgaW4uIG90aGVyd2lzZSwgbm9wZS5cclxuICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInZhbGlkLWRyYWdcIikpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZW1vdmVEcmFnR3VpZGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuXHJcbiAgICAgICAgLy8gYmVmb3JlIG1vdmluZyB0aGUgc2hpcCwgZGV0ZXJtaW5lIGlmIGl0IGhhcyBiZWVuIHBsYWNlZCBhbHJlYWR5Li4uIFxyXG4gICAgICAgIC8vIHRoaXMgaXMgdHJ1ZSBpZiB0aGUgc2hpcCBpcyBpbnNpZGUgYSBzZWxlY3RhYmxlIGNlbGwuXHJcbiAgICAgICAgbGV0IGxhc3RQbGFjZWRMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWxlY3RhYmxlICMke2lkfWApO1xyXG5cclxuICAgICAgICAvLyBpZiBzbyB3ZSBuZWVkIHRvIHJlbW92ZSBvY2N1cGllZCBmcm9tIHN1Y2ggY2VsbHMuXHJcbiAgICAgICAgaWYgKGxhc3RQbGFjZWRMb2NhdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgbGV0IGNlbGxzO1xyXG4gICAgICAgICAgbGV0IHZlcnRpY2FsID0gbGFzdFBsYWNlZExvY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpO1xyXG5cclxuICAgICAgICAgIC8vIHBhcmVudE5vZGUgaXMgdGhlIGNlbGwuXHJcbiAgICAgICAgICBsYXN0UGxhY2VkTG9jYXRpb24gPSBsYXN0UGxhY2VkTG9jYXRpb24ucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICAgICAgbGV0IGNvbCA9IGxhc3RQbGFjZWRMb2NhdGlvbi5kYXRhc2V0LmNvbDtcclxuICAgICAgICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtY29sPVwiJHtjb2x9XCJdYCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG9jY3VwaWVkIG1hcmtpbmcgZnJvbSB0aG9zZSBjZWxscy5cclxuICAgICAgICAgICAgbGV0IHJvdyA9IGxhc3RQbGFjZWRMb2NhdGlvbi5kYXRhc2V0LnJvdztcclxuICAgICAgICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxldCBpbmRleCA9IGNlbGxzLmluZGV4T2YobGFzdFBsYWNlZExvY2F0aW9uKTtcclxuXHJcbiAgICAgICAgICAvLyBjb2xvciB0aGUgc3Vic2VxdWVudCBjZWxscy5cclxuICAgICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgICAgIGNlbGxzW2ldLmRhdGFzZXQuc2hpcCA9IFwiXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGxhY2VkQ2VsbCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIC8vIG1vdmUgdGhlIHNoaXBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5jbGFzc0xpc3QuYWRkKFwic2hpcC1wbGFjZWRcIik7XHJcbiAgICAgICAgcGxhY2VkQ2VsbC5hcHBlbmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkpO1xyXG5cclxuICAgICAgICBsZXQgdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICBsZXQgY2VsbHM7XHJcblxyXG4gICAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgbGV0IGNvbCA9IHBsYWNlZENlbGwuZGF0YXNldC5jb2w7XHJcbiAgICAgICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1jb2w9XCIke2NvbH1cIl1gKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGdldCB0aGUgcm93LCBpbmRleCwgYW5kIHBsYWNlIHRoZXJlYWZ0ZXIgb2YgdGhlIHBsYWNlZCBjZWxsLlxyXG4gICAgICAgICAgbGV0IHJvdyA9IHBsYWNlZENlbGwuZGF0YXNldC5yb3c7XHJcbiAgICAgICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke3Jvd31cIl1gKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSBjZWxscy5pbmRleE9mKHBsYWNlZENlbGwpO1xyXG5cclxuICAgICAgICAvLyBjb2xvciB0aGUgc3Vic2VxdWVudCBjZWxscy5cclxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIGN1cnJlbnREcmFnZ2VkTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgIGNlbGxzW2ldLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWxsb3cgdGhlIHNoaXAgdG8gYmUgcm90YXRlZC5cclxuICAgICAgICBzZWxmLiNhbGxvd1BsYWNlZFNoaXBSb3RhdGlvbigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGNvZGUgdG8gcmV0dXJuIHNoaXAgdG8gaW52ZW50b3J5XHJcbiAgICAgIHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlclwiKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlclwiKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuY2xhc3NMaXN0LnJlbW92ZShcInNoaXAtcGxhY2VkXCIpO1xyXG4gICAgICAgICAgZS50YXJnZXQuYXBwZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyBmb3Igc2hpcHMgdG8gYmUgcm90YXRlZDsgdGhpcyBpcyBpbnZva2VkIGVhY2ggdGltZSBhIHNoaXAgaXMgcGxhY2VkLFxyXG4gICAqIHRvIGFsbG93IHNoaXBzLCBvbiB0aGUgZ2FtZWJvYXJkLCB0byBiZSByb3RhdGVkLlxyXG4gICAqL1xyXG4gICNhbGxvd1BsYWNlZFNoaXBSb3RhdGlvbigpIHtcclxuICAgIGxldCBncmlkU2l6ZSA9IHRoaXMuZ2FtZU1hbmFnZXIucGxheWVyc1swXS5nYW1lYm9hcmQuZ3JpZC5sZW5ndGg7XHJcbiAgICAvLyBhbGxvdyByb3RhdGlvbiBvZiBwbGFjZWQgc2hpcHNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC5kcmFnZ2FibGUuc2hpcC1wbGFjZWRcIikuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgaWYgKHNoaXAub25jbGljayA9PT0gbnVsbCkge1xyXG4gICAgICAgIHNoaXAub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgIGxldCB2ZXJ0aWNhbE9uID0gc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgIGxldCBjZWxsID0gc2hpcC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwLmNoaWxkRWxlbWVudENvdW50O1xyXG5cclxuICAgICAgICAgIGxldCByb3dJbmRleCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpO1xyXG4gICAgICAgICAgbGV0IGNvbEluZGV4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbCk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coeyByb3dJbmRleCwgc2hpcExlbmd0aCwgZ3JpZFNpemUgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKHJvd0luZGV4ICsgc2hpcExlbmd0aCA+IGdyaWRTaXplIHx8IGNvbEluZGV4ICsgc2hpcExlbmd0aCA+IGdyaWRTaXplKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBjaGVjayBpZiBhbnkgc2hpcHMgYXJlIGluIHRoZSB3YXkgb2YgdGhlIHJvdGF0aW9uLlxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IHJvd0luZGV4ICsgMTsgaSA8IHJvd0luZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtpfVwiXWApKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBjb2xJbmRleDsgaiA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGNlbGxzW2pdLmNsYXNzTGlzdC5jb250YWlucyhcIm9jY3VwaWVkXCIpICYmIGNlbGxzW2pdLmRhdGFzZXQuc2hpcCAhPT0gc2hpcC5pZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IHByb2NlZWQuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgZW5vdWdoIHNwYWNlIHRvIG1vdmUgaXQgdmVydGljYWxseSwgYmFzZWQgb24gdGhlIHNoaXAgbGVuZ3RoLlxyXG4gICAgICAgICAgLy8gMSBubyBzaGlwcyBpbiB0aGUgd2F5XHJcbiAgICAgICAgICAvLyAyLndpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBnYW1lYm9hcmQuXHJcbiAgICAgICAgICAvLyBvbmx5IHRoZW4gZG8geW91IGFsbG93IHZlcnRpY2FsIGNsYXNzLlxyXG4gICAgICAgICAgY29uc29sZS5sb2coY2VsbCk7XHJcblxyXG4gICAgICAgICAgaWYgKHZlcnRpY2FsT24pIHtcclxuICAgICAgICAgICAgLy8gdmVydGljYWwgLT4gaG9yaXpvbnRhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93SW5kZXggKyAxOyBpIDwgcm93SW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKTtcclxuICAgICAgICAgICAgICAvLyBzdHJpcCB2ZXJ0aWNhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbEluZGV4ICsgMTsgaSA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gYWRkIGhvcml6b250YWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7aX1cIl1gKTtcclxuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IHNoaXAuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGhvcml6b250YWwgLT4gdmVydGljYWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbEluZGV4ICsgMTsgaSA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gcmVtb3ZlIGhvcml6b250YWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7aX1cIl1gKVxyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHJvd0luZGV4ICsgMTsgaSA8IHJvd0luZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gYWRkIHZlcnRpY2FsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtpfVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdYClcclxuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IHNoaXAuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyB0b2dnbGUgdmVydGljYWwgZm9yIHRoZSB2aWV3XHJcbiAgICAgICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgIC8vIHRoZW4sIGFsdGVyIHRoZSBvY2N1cGllZCBjbGFzcy5cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBkaXNhYmxlIHJvdGF0aW9uIGZvciBzaGlwcyB0aGF0IGFyZSBub3QgcGxhY2VkLlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLmRyYWdnYWJsZTpub3QoLnNoaXAtcGxhY2VkKVwiKS5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICBpZiAoc2hpcC5vbmNsaWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2hpcC5vbmNsaWNrID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGxhY2VzIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQgZ2l2ZW4gY29vcmRpbmF0ZXMuIFVzZWZ1bCBmb3IgQUkuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2wgXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCBcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsYXllcjIgLSBQbGFjZSBzaGlwcyBvbiBwbGF5ZXIgMidzIGdhbWVib2FyZD9cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSB0aGUgSUQgdGhlIHNoaXAgc2hvdWxkIGJlIGlkZW50aWZpZWQgYnkuXHJcbiAgICovXHJcbiAgc3RhdGljIHBsYWNlU2hpcE1hbnVhbGx5KGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsLCBwbGF5ZXIyID0gdHJ1ZSwgaWQpIHtcclxuICAgIGNvbnNvbGUubG9nKHtsZW5ndGgsIHJvdywgY29sLCB2ZXJ0aWNhbCwgcGxheWVyMiwgaWR9KTtcclxuICAgIGxldCBzZWxlY3RvcjtcclxuICAgIGxldCBnYW1lYm9hcmQ7IFxyXG4gICAgbGV0IGNwdVRhZyA9IFwiY3B1LXNoaXAtcGxhY2VkXCI7XHJcblxyXG4gICAgaWYgKHBsYXllcjIpIHtcclxuICAgICAgc2VsZWN0b3IgPSBcIi5wMi5nYW1lYm9hcmRcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZWN0b3IgPSBcIi5wMS5nYW1lYm9hcmRcIlxyXG4gICAgfVxyXG5cclxuICAgIGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7c2VsZWN0b3J9YCk7XHJcblxyXG4gICAgbGV0IG9yaWdpbkNlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgLnNlbGVjdGFibGVbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbH0nXWApO1xyXG4gICAgb3JpZ2luQ2VsbC5kYXRhc2V0LnNoaXAgPSBpZDtcclxuXHJcblxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGxldCByb3dzID0gQXJyYXkuZnJvbShnYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChgLnNlbGVjdGFibGVbZGF0YS1jb2w9XCIke2NvbH1cIl1gKSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcm93ICsgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiLCBjcHVUYWcpO1xyXG4gICAgICAgIHJvd3NbaV0uZGF0YXNldC5zaGlwID0gaWQ7XHJcblxyXG4gICAgICAgIHN3aXRjaChpKSB7XHJcbiAgICAgICAgICBjYXNlIHJvdzogLy8gc3RhcnRcclxuICAgICAgICAgICAgcm93c1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdGFydC12ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIHJvdyArIGxlbmd0aCAtIDE6IC8vIGVuZFxyXG4gICAgICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVuZC12ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiAvLyBtaWRcclxuICAgICAgICAgICAgcm93c1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1taWRkbGUtdmVydGljYWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGNvbHMgPSBBcnJheS5mcm9tKGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKGAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93fVwiXWApKTtcclxuICAgICAgXHJcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCBjb2wgKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbHNbaV0uY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIsIGNwdVRhZyk7XHJcbiAgICAgICAgY29sc1tpXS5kYXRhc2V0LnNoaXAgPSBpZDtcclxuXHJcbiAgICAgICAgc3dpdGNoKGkpIHtcclxuICAgICAgICAgIGNhc2UgY29sOiAvLyBzdGFydFxyXG4gICAgICAgICAgICBjb2xzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0YXJ0LWhvcml6b250YWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBjb2wgKyBsZW5ndGggLSAxOiAvLyBlbmRcclxuICAgICAgICAgICAgY29sc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1lbmQtaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiAvLyBtaWRcclxuICAgICAgICAgICAgY29sc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1taWRkbGUtaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFza3MgdXNlciBmb3IgdGhlaXIgbmFtZSBhbmQgdG8gc3RhcnQgdGhlIGdhbWUuLi4gb25seSB3aGVuIHRoZSBzaGlwIHBsYWNlbWVudCBjb250YWluZXIgaXMgZW1wdHlcclxuICAgKiB3aWxsIHRoZSBzdGFydCBnYW1lIGJ1dHRvbiB1bmxvY2suXHJcbiAgICovXHJcbiAgI3N0YXJ0R2FtZVByb21wdCgpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3Qgc3RhcnRHYW1lRm9ybSA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJzdGFydC1nYW1lLXByb21wdFwiKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJOYW1lTGFiZWwsIHBsYXllck5hbWVGaWVsZF0gPSBjb21wb25lbnQuZm9ybUlucHV0KFwiTmFtZVwiLCBcImlucHV0XCIsIFwicDEtbmFtZVwiLCBcInAxLW5hbWVcIik7XHJcbiAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBjb21wb25lbnQuYnV0dG9uKFwiU3RhcnQgR2FtZSFcIiwgXCJzdGFydC1nYW1lLWJ1dHRvblwiKTtcclxuICAgIGNvbnN0IGVycm9yRmllbGQgPSBjb21wb25lbnQucChcIkVycm9yIEZpZWxkIEhlcmVcIiwgXCJmb3JtLWVycm9yLWZpZWxkXCIpO1xyXG5cclxuICAgIHBsYXllck5hbWVGaWVsZC52YWx1ZSA9IFwiQ29tbWFuZGVyXCI7XHJcbiAgICBwbGF5ZXJOYW1lRmllbGQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIHN0YXJ0R2FtZUZvcm0uYXBwZW5kKHBsYXllck5hbWVMYWJlbCwgcGxheWVyTmFtZUZpZWxkLCBzdGFydEdhbWVCdXR0b24sIGVycm9yRmllbGQpO1xyXG5cclxuICAgIHN0YXJ0R2FtZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgc3RhcnRHYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2VsZi5nYW1lTWFuYWdlci5zdGFydEdhbWUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IERPTU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy4jY2hlY2tBbGxTaGlwc1BsYWNlZCk7XHJcbiAgICBET01PYnNlcnZlci5vYnNlcnZlKHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5zaGlwLXNlbGVjdGlvblwiKSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG5cclxuICAgIHJldHVybiBzdGFydEdhbWVGb3JtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFsbCBzaGlwcyBiZWVuIHBsYWNlZD8gSWYgc28sIHVubG9ja3MgdGhlIGdhbWUgYnV0dG9uLiBVc2VkIHdpdGhcclxuICAgKiBNdXRhdGlvbk9ic2VydmVyLlxyXG4gICAqL1xyXG4gICNjaGVja0FsbFNoaXBzUGxhY2VkKG11dGF0ZWQpIHtcclxuICAgIGxldCBzaGlwc1JlbWFpbmluZyA9IG11dGF0ZWRbMF0udGFyZ2V0LmNoaWxkRWxlbWVudENvdW50O1xyXG4gICAgaWYgKHNoaXBzUmVtYWluaW5nID4gMCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWUtYnV0dG9uXCIpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZS1idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3dzIGEgc3VtbWFyeS4gVG8gYmUgdXNlZCBhZnRlciB0aGUgZ2FtZSBoYXMgZmluaXNoZWQuXHJcbiAgICovXHJcbiAgI3N1bW1hcnkoKSB7XHJcbiAgICBjb25zdCBzdW1tYXJ5ID0gY29tcG9uZW50LmRpdihcInN1bW1hcnktc2NyZWVuXCIpO1xyXG4gICAgY29uc3QgdmljdG9yeU1zZyA9IGNvbXBvbmVudC5wKGBHYW1lIE92ZXIhIFdpbm5lcjogYCwgXCJ2aWN0b3J5LW1lc3NhZ2VcIik7XHJcbiAgICBjb25zdCB3aW5uZXIgPSBjb21wb25lbnQuc3BhbihcIiVcIiwgXCJ3aW5uZXJcIik7XHJcblxyXG4gICAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwic3VtbWFyeS1zdGF0aXN0aWNzXCIpO1xyXG4gICAgY29uc3Qgc3RhdHNIZWFkaW5nID0gY29tcG9uZW50LmhlYWRpbmcoXCJHYW1lIFN0YXRpc3RpY3M6IFwiLCAyLCBcImhlYWRlclwiKTtcclxuICAgIGNvbnN0IHN0YXRzQWNjdXJhY3kgPSBjb21wb25lbnQucChcIkFjY3VyYWN5OiBcIiwgXCJhY2N1cmFjeVwiKTtcclxuICAgIGNvbnN0IHAxQWNjdXJhY3kgPSBjb21wb25lbnQuc3BhbihcIi0tJVwiLCBcInAxLWFjY3VyYWN5LW1ldHJpY1wiKTtcclxuICAgIGNvbnN0IHAyQWNjdXJhY3kgPSBjb21wb25lbnQuc3BhbihcIi0tJVwiLCBcInAyLWFjY3VyYWN5LW1ldHJpY1wiKTtcclxuICAgIGNvbnN0IHN0YXRzRGFtYWdlID0gY29tcG9uZW50LnAoXCJEYW1hZ2UgdGFrZW46IFwiLCBcImh1cnRcIik7XHJcbiAgICBjb25zdCBwMURhbWFnZSA9IGNvbXBvbmVudC5zcGFuKFwiLS0lXCIsIFwicDEtZGFtYWdlLW1ldHJpY1wiKTtcclxuICAgIGNvbnN0IHAyRGFtYWdlID0gY29tcG9uZW50LnNwYW4oXCItLSVcIiwgXCJwMi1kYW1hZ2UtbWV0cmljXCIpO1xyXG5cclxuICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGNvbXBvbmVudC5idXR0b24oXCJQbGF5IEFnYWluXCIsIFwicGxheS1hZ2FpblwiKTtcclxuXHJcbiAgICB2aWN0b3J5TXNnLmFwcGVuZCh3aW5uZXIpO1xyXG5cclxuICAgIHN0YXRzQ29udGFpbmVyLmFwcGVuZChzdGF0c0hlYWRpbmcsXHJcbiAgICAgIHN0YXRzQWNjdXJhY3ksIHAxQWNjdXJhY3ksIHAyQWNjdXJhY3ksXHJcbiAgICAgIHN0YXRzRGFtYWdlLCBwMURhbWFnZSwgcDJEYW1hZ2UpO1xyXG5cclxuICAgIHN1bW1hcnkuYXBwZW5kKHZpY3RvcnlNc2csIHdpbm5lciwgc3RhdHNDb250YWluZXIsIHBsYXlBZ2Fpbik7XHJcbiAgICAgIFxyXG4gICAgcmV0dXJuIHN1bW1hcnk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBjbGFzcy4gQ29udGFpbnMgdmFyaW91cyBET00gZWxlbWVudHMuXHJcbiAqIEF1dGhvcjogZGF0cmlub25cclxuICogVmVyc2lvbjogMS40IChXZWF0aGVyKVxyXG4gKi9cclxuXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA2MDBweClcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBhIGJhc2ljIEhUTUwgc2tlbGV0b24gZm9yIHRoZSB3ZWIgcGFnZSwgZ2VuZXJhdGluZyBhIGhlYWRlcixcclxuICAgKiBtYWluLCBhbmQgc3RpY2t5IGZvb3Rlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gaGVhZGVyVGl0bGUgLSBXaGF0IHRoZSB3ZWIgcGFnZSBpcyBjYWxsZWQuXHJcbiAgICogQHBhcmFtIHtib29sfSBlbXB0eUhlYWRlciAtIFNob3VsZCB0aGUgaGVhZGVyIHVzZSBhIGRlZmF1bHQgc3RydWN0dXJlP1xyXG4gICAqIFRoZSBkZWZhdWx0IHN0cnVjdHVyZSBsb29rcyBsaWtlIFsgTG9nbyB8IHwgfCB8IE5hdmlnYXRpb24gTGlua3NdXHJcbiAgICogQHJldHVybnMgLSBBbiBhcnJheSBjb250YWluaW5nIHJlZmVyZW5jZXMgdG8gdGhlIGdlbmVyYXRlZCBoZWFkZXIsIG1haW4sIGFuZCBmb290ZXIuXHJcbiAgICovXHJcbiAgaW5pdGlhbGl6ZVN0cnVjdHVyZShcclxuICAgIGhlYWRlclRpdGxlLFxyXG4gICAgZW1wdHlIZWFkZXIgPSBmYWxzZSxcclxuICAgIGNyZWF0ZU1vbnRoLFxyXG4gICAgZ2l0aHViTGlua1xyXG4gICkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IHRoaXMuZGl2KFwiY29udGVudFwiKTtcclxuICAgIGxldCBoZWFkZXI7XHJcbiAgICBpZiAoZW1wdHlIZWFkZXIpIHtcclxuICAgICAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlciA9IHRoaXMuaGVhZGVyKGhlYWRlclRpdGxlKTtcclxuICAgIH1cclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gdGhpcy5mb290ZXIoY3JlYXRlTW9udGgsIGdpdGh1YkxpbmspO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgICBtYWluV3JhcHBlci5hcHBlbmQoaGVhZGVyLCBtYWluKTtcclxuICAgIGJvZHkuYXBwZW5kKG1haW5XcmFwcGVyLCBmb290ZXIpO1xyXG5cclxuICAgIHJldHVybiBbaGVhZGVyLCBtYWluLCBmb290ZXJdO1xyXG4gIH1cclxuXHJcbiAgY29udGVudCgpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIodGl0bGUpIHtcclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgbGV0IHRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gICAgbWVudUJ1dHRvbi5pZCA9IFwibWVudS1idXR0b25cIjtcclxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWJhcnNcIiwgXCJuby1kaXNwbGF5XCIpO1xyXG5cclxuICAgIHRoaXMubXFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUubWF0Y2hlcykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gaXQgYmlnZ2VyIHRoYW4gdGhlIHF1ZXJ5IHJ1bGUuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW4tb3V0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtZW51IHByZXNzZWQuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzbGlkZS1pbi1vdXRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuICAgIC8vIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2ltZ30pYDtcclxuXHJcbiAgICB0aXRsZUVsZW0uaWQgPSBcInBhZ2UtdGl0bGVcIjtcclxuICAgIHRpdGxlRWxlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIHRpdGxlRWxlbS5pbnNlcnRCZWZvcmUobWVudUJ1dHRvbiwgdGl0bGVFbGVtLmZpcnN0Q2hpbGQpO1xyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZUVsZW0pO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG5cclxuICBuYXZiYXIoLi4ubGlua3MpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICAgIG5hdi5pZCA9IFwibmF2YmFyXCI7XHJcbiAgICBsaW5rQ29udGFpbmVyLmlkID0gXCJuYXZiYXItYnV0dG9ucy1jb250YWluZXJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgIGNvbnN0IGxpbmtCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGNvbnN0IGxpbmtBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgICAgIGxpbmtCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdmJhci1idXR0b25cIik7XHJcblxyXG4gICAgICBsaW5rQW5jaG9yLmlkID0gYG5hdmxpbmstJHtsaW5rLnJlcGxhY2UoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgIGxpbmtBbmNob3IudGV4dENvbnRlbnQgPSBsaW5rO1xyXG4gICAgICBsaW5rQW5jaG9yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG5cclxuICAgICAgbGlua0J1dHRvbi5hcHBlbmQobGlua0FuY2hvcik7XHJcbiAgICAgIGxpbmtDb250YWluZXIuYXBwZW5kKGxpbmtCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdi5hcHBlbmQobGlua0NvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIG5hdjtcclxuICB9XHJcblxyXG4gIGJhbm5lcih0ZXh0LCBpbWcpIHtcclxuICAgIGxldCBiYW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG5cclxuICAgIGJhbm5lckNvbnRhaW5lci5pZCA9IFwiYmFubmVyXCI7XHJcbiAgICBiYW5uZXIuaWQgPSBcImJhbm5lci1pbWFnZVwiO1xyXG4gICAgY2FwdGlvbi5pZCA9IFwiYmFubmVyLWNhcHRpb25cIjtcclxuXHJcbiAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZ30pYDtcclxuXHJcbiAgICBjYXB0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICBiYW5uZXJDb250YWluZXIuYXBwZW5kKGJhbm5lciwgY2FwdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGJhbm5lckNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZvb3RlcihjcmVhdGVNb250aCwgZ2l0aHViTGluaykge1xyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuXHJcbiAgICBsZXQgdGV4dCA9IGBDcmVhdGVkIGluICR7Y3JlYXRlTW9udGh9IDIwMjEuIE9kaW4gUHJvamVjdCB4IERhbiBULmA7XHJcbiAgICBsZXQgZ2l0aHViRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGV0IGdoSWNvbiA9IHRoaXMuZmFJY29uKFwiZmFiXCIsIFwiZmEtZ2l0aHViLXNxdWFyZVwiLCBcImljb25cIik7XHJcblxyXG4gICAgZ2l0aHViRWxlbS5hcHBlbmQoZ2hJY29uKTtcclxuICAgIGdpdGh1YkVsZW0uY2xhc3NMaXN0LmFkZChcImZvb3Rlci1naXRodWItaWNvblwiKTtcclxuICAgIGdpdGh1YkVsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBnaXRodWJMaW5rKTtcclxuICAgIGdpdGh1YkVsZW0uc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgZ2l0aHViRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcC5hcHBlbmQoZ2l0aHViRWxlbSk7XHJcbiAgICBmb290ZXIuYXBwZW5kKHApO1xyXG5cclxuICAgIHJldHVybiBmb290ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIGxhcmdlciwgZW1ib2xkZW5lZCwgdGV4dCxcclxuICAgKiBzaW1pbGFyIHRvIGEgcHVsbCBxdW90ZSBpbiBhIG1hZ2F6aW5lLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1zZyB7c3RyaW5nfSBUZXh0IHRvIGluY2x1ZGUgaW4gdGhlIGJsb2NrIHF1b3RlXHJcbiAgICovXHJcbiAgcHVsbHF1b3RlKG1zZykge1xyXG4gICAgbGV0IHB1bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XHJcbiAgICBwdWxsLnRleHRDb250ZW50ID0gbXNnO1xyXG5cclxuICAgIHB1bGwuY2xhc3NMaXN0LmFkZChcInB1bGwtcXVvdGVcIik7XHJcblxyXG4gICAgcmV0dXJuIHB1bGw7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uKGlkKSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0ZXh0IGhlYWRpbmcgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gdGV4dCAtIFRoZSBsYWJlbCBmb3IgdGhlIGhlYWRlci5cclxuICAgKiBAcGFyYW0geyp9IGxldmVsIC0gVGhlIGxldmVsIG9mIGhlYWRlci5cclxuICAgKi9cclxuICBoZWFkaW5nKHRleHQsIGxldmVsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGlmIChsZXZlbCA8IDEgfHwgbGV2ZWwgPiA2KSB7XHJcbiAgICAgIHRocm93IEVycm9yKFwiSGVhZGluZyBsZXZlbHMgY2FuIG9ubHkgYmUgYmV0d2VlbiAxIHRvIDYhXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke2xldmVsfWApO1xyXG5cclxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuICB9XHJcblxyXG4gIHAodGV4dCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgaWYgKGNsYXNzTmFtZS5sZW5ndGggIT0gMCkge1xyXG4gICAgICBwLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gcDtcclxuICB9XHJcblxyXG4gIGltZyh1cmwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG5cclxuICAgIHJldHVybiBpbWFnZTtcclxuICB9XHJcblxyXG4gIGRpdiguLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICByZXR1cm4gZGl2O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uKGxhYmVsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICBidG4udGV4dENvbnRlbnQgPSBsYWJlbDtcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYSBiYXNpYyB0YWJsZSB3aXRoIHNpbmdsZS1jZWxsIGNvbHVtbnMgYW5kIHJvd3MsIGJhc2VkIG9uIHRoZSBpbXBvcnRlZCBmaWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtjc3Z9IGRhdGEgLSBEYXRhIHRvIHR1cm4gaW50byBhIHRhYmxlLiBQbGVhc2UgdXNlIHdlYnBhY2sgdG8gaW1wb3J0IC5jc3YgZmlsZXMuXHJcbiAgICovXHJcbiAgdGFibGUoaWQgPSBcIlwiLCBkYXRhKSB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0YWJsZS5pZCA9IGlkO1xyXG5cclxuICAgIC8vIEdlbmVyYXRlIGEgdGFibGUgaGVhZGVyIHJvdy5cclxuICAgIGxldCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGxldCB0YWJsZUhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBjb2wgb2YgT2JqZWN0LmtleXMoZGF0YVswXSkpIHtcclxuICAgICAgbGV0IGNvbENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgIGNvbENlbGwudGV4dENvbnRlbnQgPSBjb2w7XHJcblxyXG4gICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmQoY29sQ2VsbCk7XHJcbiAgICB9XHJcbiAgICB0YWJsZUhlYWRlci5hcHBlbmQodGFibGVIZWFkZXJSb3cpO1xyXG5cclxuICAgIHRhYmxlLmFwcGVuZCh0YWJsZUhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgLy8gR2VuZXJhdGUgdGFibGUgcm93cy5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgZm9yIChsZXQgcHJvcCBpbiBkYXRhW2ldKSB7XHJcbiAgICAgICAgbGV0IHRjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cclxuICAgICAgICB0Y2VsbC50ZXh0Q29udGVudCA9IGRhdGFbaV1bcHJvcF07XHJcbiAgICAgICAgdHJvdy5hcHBlbmQodGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJsZUJvZHkuYXBwZW5kKHRyb3cpO1xyXG4gICAgfVxyXG4gICAgdGFibGUuYXBwZW5kKHRhYmxlQm9keSk7XHJcblxyXG4gICAgcmV0dXJuIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZm9udCBhd2Vzb21lIGljb24uXHJcbiAgICovXHJcbiAgZmFJY29uKGNhdGVnb3J5LCBuYW1lLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBmYXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBmYXNJY29uLmNsYXNzTGlzdC5hZGQoY2F0ZWdvcnksIG5hbWUpO1xyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICBmYXNJY29uLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFzSWNvbjtcclxuICB9XHJcblxyXG4gIHNwYW4odGV4dENvbnRlbnQgPSBudWxsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBpZiAoY2xhc3NOYW1lLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuXHJcbiAgICByZXR1cm4gc3BhbjtcclxuICB9XHJcblxyXG4gIGZvcm1JbnB1dChsYWJlbFRleHQsIHR5cGUsIGlucHV0SWQsIG5hbWUpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LmlkID0gaW5wdXRJZDtcclxuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xyXG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgaW5wdXRdO1xyXG4gIH1cclxuXHJcbiAgZHJvcGRvd24obGFiZWxUZXh0LCBuYW1lLCBpbnB1dElkLCAuLi52YWx1ZXMpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXRJZCk7XHJcblxyXG4gICAgZm9yIChsZXQgdmFsIG9mIHZhbHVlcykge1xyXG4gICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBlbnRyeS52YWx1ZSA9IHZhbDtcclxuICAgICAgaWYgKGlzTmFOKHZhbCkgJiYgdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gdmFsWzBdLnRvVXBwZXJDYXNlKCkgKyB2YWwuc2xpY2UoMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSB2YWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGVjdC5hcHBlbmQoZW50cnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIHNlbGVjdF07XHJcbiAgfVxyXG5cclxuICB0ZXh0QXJlYShsYWJlbFRleHQsIG5hbWUsIGlucHV0SWQpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRhLmlkID0gaW5wdXRJZDtcclxuICAgIHRhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgdGFdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgY29uZmlybSBtb2RhbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gY2xhc3NOYW1lIC0gQ2xhc3NlcyB0aGUgbW9kYWwgc2hvdWxkIGJlbG9uZyB0by5cclxuICAgKiBAcGFyYW0geyp9IHRpdGxlIC0gVGhlIHRpdGxlIGFwcGVhcmluZyBvbiB0aGUgbW9kYWwuXHJcbiAgICogQHBhcmFtIHsqfSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgYXBwZWFyaW5nIG9uIHRoZSBtb2RhbC5cclxuICAgKiBAcGFyYW0geyp9IHBvc2l0aXZlQnV0dG9uTGFiZWwgLSBUZXh0IGZvciB0aGUgT0sgYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gbmVnYXRpdmVCdXR0b25MYWJlbCAtIFRleHQgZm9yIHRoZSBjYW5jZWwgYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gcG9zaXRpdmVDYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHJ1biBpZiBPSyBpcyBwcmVzc2VkLlxyXG4gICAqIEBwYXJhbSB7Kn0gbmVnYXRpdmVDYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHJ1biBpZiBjYW5jZWwgaXMgcHJlc3NlZC4gJ251bGwnIGJ5XHJcbiAgICogZGVmYXVsdCwgd2hpY2ggdGhlbiBqdXN0IGNsb3NlcyB0aGUgbW9kYWwuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyAtIFJldHVybnMgdGhlIGdlbmVyYXRlZCBtb2RhbCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGNvbmZpcm1Nb2RhbChcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRpdGxlLFxyXG4gICAgbWVzc2FnZSxcclxuICAgIHBvc2l0aXZlQnV0dG9uTGFiZWwsXHJcbiAgICBuZWdhdGl2ZUJ1dHRvbkxhYmVsLFxyXG4gICAgcG9zaXRpdmVDYWxsYmFjayxcclxuICAgIG5lZ2F0aXZlQ2FsbGJhY2sgPSBudWxsXHJcbiAgKSB7XHJcbiAgICBsZXQgbW9kYWxXcmFwcGVyID0gdGhpcy5kaXYoKTtcclxuICAgIG1vZGFsV3JhcHBlci5pZCA9IFwicHJvbXB0LXdyYXBwZXJcIjtcclxuICAgIGxldCBtb2RhbCA9IHRoaXMuZGl2KGNsYXNzTmFtZSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVIZWFkZXIgPSB0aGlzLmhlYWRpbmcodGl0bGUsIDEsIFwibW9kYWwtaGVhZGVyXCIpO1xyXG4gICAgY29uc3QgbWVzc2FnZVBhcmFncmFwaCA9IHRoaXMucGFyYWdyYXBoKG1lc3NhZ2UsIFwibW9kYWwtZGlhbG9nXCIpO1xyXG4gICAgY29uc3QgcG9zaXRpdmVCdXR0b24gPSB0aGlzLmJ1dHRvbihwb3NpdGl2ZUJ1dHRvbkxhYmVsLCBcIm1vZGFsLWNvbmZpcm1cIik7XHJcbiAgICBjb25zdCBuZWdhdGl2ZUJ1dHRvbiA9IHRoaXMuYnV0dG9uKG5lZ2F0aXZlQnV0dG9uTGFiZWwsIFwibW9kYWwtY2FuY2VsXCIpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvblNlY3Rpb24gPSB0aGlzLmRpdihcIm1vZGFsLWJ1dHRvbi1hcmVhXCIpO1xyXG5cclxuICAgIGlmIChuZWdhdGl2ZUNhbGxiYWNrID09PSBudWxsKSB7XHJcbiAgICAgIG5lZ2F0aXZlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOZWdhdGl2ZSBwcmVzc2VkLlwiKTtcclxuICAgICAgICBtb2RhbFdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9zaXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvc2l0aXZlQ2FsbGJhY2spO1xyXG4gICAgcG9zaXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIHBvc2l0aXZlQ2FsbGJhY2soZSk7XHJcbiAgICAgIG1vZGFsV3JhcHBlci5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgbmVnYXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5lZ2F0aXZlQ2FsbGJhY2spO1xyXG5cclxuICAgIGJ1dHRvblNlY3Rpb24uYXBwZW5kKHBvc2l0aXZlQnV0dG9uLCBuZWdhdGl2ZUJ1dHRvbik7XHJcbiAgICBtb2RhbC5hcHBlbmQodGl0bGVIZWFkZXIsIG1lc3NhZ2VQYXJhZ3JhcGgsIGJ1dHRvblNlY3Rpb24pO1xyXG4gICAgbW9kYWxXcmFwcGVyLmFwcGVuZChtb2RhbCk7XHJcblxyXG4gICAgLy8gc3R5bGluZyBtb3ZlZCB0byAuY3NzIHBhZ2UuXHJcblxyXG4gICAgcmV0dXJuIG1vZGFsV3JhcHBlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXkgYSBicmllZiwgdW5vYnRydXNpdmUgcG9wLXVwIG1lc3NhZ2UgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxyXG4gICAqIEBwYXJhbSB7Kn0gdGV4dENvbnRlbnQgLSBUaGUgdGV4dCB0aGUgbWVzc2FnZSBzaG91bGQgZGlzcGxheS5cclxuICAgKiBAcGFyYW0geyp9IGR1cmF0aW9uIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBtZXNzYWdlIGluIHNlY29uZHMuXHJcbiAgICovXHJcbiAgdG9hc3QodGV4dENvbnRlbnQsIGR1cmF0aW9uKSB7XHJcbiAgICBsZXQgdG9hc3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHRvYXN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XHJcbiAgICB0b2FzdEJveC5jbGFzc0xpc3QuYWRkKFwidG9hc3RcIik7XHJcbiAgICB0b2FzdE1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgIHRvYXN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidG9hc3QtbWVzc2FnZVwiKTtcclxuXHJcbiAgICB0b2FzdEJveC5hcHBlbmQodG9hc3RNZXNzYWdlKTtcclxuXHJcbiAgICBsZXQgdG9hc3RCb3hDc3MgPSBcInBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAxMHZoO1wiO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gXCJ3aWR0aDogMTAwdnc7XCI7XHJcbiAgICB0b2FzdEJveENzcyArPSBgYW5pbWF0aW9uOiBmYWRlLWluLW91dCAke2R1cmF0aW9ufXM7YDtcclxuICAgIHRvYXN0Qm94Q3NzICs9IFwiei1pbmRleDogOTk5OTtcIjtcclxuXHJcbiAgICBsZXQgdG9hc3RNZXNzYWdlQ3NzID1cclxuICAgICAgXCJtYXJnaW46IDAgYXV0bzsgd2lkdGg6IDMwMHB4OyBkaXNwbGF5OiBibG9jazsgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcIjtcclxuICAgIHRvYXN0TWVzc2FnZUNzcyArPVxyXG4gICAgICBcInRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDVweDtcIjtcclxuICAgIHRvYXN0TWVzc2FnZUNzcyArPSBcImNvbG9yOiB3aGl0ZTtcIjtcclxuXHJcbiAgICB0b2FzdEJveC5zdHlsZS5jc3NUZXh0ID0gdG9hc3RCb3hDc3M7XHJcbiAgICB0b2FzdE1lc3NhZ2Uuc3R5bGUuY3NzVGV4dCA9IHRvYXN0TWVzc2FnZUNzcztcclxuXHJcbiAgICB0b2FzdEJveC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcclxuICAgICAgdG9hc3RCb3gucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0b2FzdEJveCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBzZWFyY2ggZmllbGQgd2l0aCBhIHNlYXJjaCBidXR0b24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYWNlaG9sZGVyIC0gQWR2aWNlIHRvIGdpdmUgaW4gc2VhcmNoIGZpZWxkLlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHNlYXJjaChwbGFjZWhvbGRlciA9IFwiU2VhcmNoXCIpIHtcclxuICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJzZWFyY2gtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoRmllbGRXcmFwcGVyID0gdGhpcy5kaXYoXCJzZWFyY2gtZmllbGQtd3JhcHBlclwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEZpZWxkID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJzZWFyY2gtZmllbGRcIik7XHJcbiAgICBjb25zdCBzZWFyY2hJY29uID0gdGhpcy5mYUljb24oXCJmYXNcIiwgXCJmYS1zZWFyY2hcIik7XHJcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSB0aGlzLmJ1dHRvbihcIlwiLCBcInNlYXJjaFwiKTtcclxuXHJcbiAgICBzZWFyY2hDb250YWluZXIuc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xyXG4gICAgc2VhcmNoRmllbGRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgc2VhcmNoRmllbGQudHlwZSA9IFwic2VhcmNoXCI7XHJcbiAgICBzZWFyY2hGaWVsZC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XHJcbiAgICBzZWFyY2hGaWVsZC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgIHNlYXJjaEJ1dHRvbi5hcHBlbmQoc2VhcmNoSWNvbik7XHJcbiAgICBzZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuXHJcbiAgICBzZWFyY2hGaWVsZFdyYXBwZXIuYXBwZW5kKHNlYXJjaEZpZWxkKTtcclxuICAgIHNlYXJjaENvbnRhaW5lci5hcHBlbmQoc2VhcmNoRmllbGRXcmFwcGVyLCBzZWFyY2hCdXR0b24pO1xyXG4gICAgcmV0dXJuIHNlYXJjaENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHNlYXJjaCBmaWVsZCBmb3IgbG9jYXRpb25zLCBzbyBpdCBpbmNsdWRlcyBhIHNlYXJjaCBmaWVsZCB3aXRoIFxyXG4gICAqIGEgbG9jYXRpb24gYnV0dG9uLlxyXG4gICAqL1xyXG4gIGdlb3NlYXJjaChwbGFjZWhvbGRlcj1cIlwiKSB7XHJcbiAgICBjb25zdCBzZWFyY2hFbGVtID0gdGhpcy5zZWFyY2gocGxhY2Vob2xkZXIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25CdXR0b24gPSB0aGlzLmJ1dHRvbihcIlwiLCBcImxvY2F0aW9uXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25JY29uID0gdGhpcy5mYUljb24oXCJmYXNcIiwgXCJmYS1tYXAtbWFya2VyLWFsdFwiKVxyXG5cclxuICAgIGxvY2F0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBsb2NhdGlvbkJ1dHRvbi5hcHBlbmQobG9jYXRpb25JY29uKTtcclxuICAgIGxvY2F0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVdGlsaXR5LmdldEdlb2xvY2F0aW9uKTtcclxuICAgIHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIikuYmVmb3JlKGxvY2F0aW9uQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gc2VhcmNoRWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0b29sdGlwLWVzcXVlIG1lc3NhZ2Ugd2hpY2ggaG92ZXJzIGJlbG93LCByZWxhdGl2ZSB0byBhbiBlbGVtZW50J3MgcG9zaXRpb24sIFxyXG4gICAqIGZvciBhIHByb3ZpZGVkIGR1cmF0aW9uLiBPbmx5IGF0dGFjaCB0byByZWxhdGl2ZWx5LXBvc2l0aW9uZWQgZWxlbWVudHMuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gKGVsZW0pIC0gUG9zaXRpb25lZCBlbGVtZW50IHRvIGF0dGFjaCB0by4gXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IChtc2cpIC0gTWVzc2FnZSB0byBkaXNwbGF5LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAocykgLSBOdW1iZXIgb2Ygc2Vjb25kcyB0byBwZXJzaXN0IG1lc3NhZ2UuIDAgZm9yIHBlcnNpc3RlbnRcclxuICAgKiB1bnRpbCB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSB0b29sdGlwLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzbWlzc09uRXh0ZXJuYWxDbGljayAtIFNob3VsZCB0aGUgdG9vbHRpcCBiZSBkaXNtaXNzZWQgYnlcclxuICAgKiBjbGlja2luZyBvdXRzaWRlIG9mIHRoZSBlbGVtZW50PyBUcnVlIGJ5IGRlZmF1bHQuXHJcbiAgICovXHJcbiAgdG9vbHRpcChlbGVtLCBtc2csIHMsIGRpc21pc3NPbkV4dGVybmFsQ2xpY2sgPSB0cnVlKSB7XHJcbiAgICBjb25zdCB0b29sdGlwQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcInRvb2x0aXBcIik7XHJcbiAgICBmb3IgKGxldCBtc2dTZWdtZW50IG9mIG1zZy5zcGxpdChcIlxcblwiKSkge1xyXG4gICAgICBjb25zdCB0b29sdGlwTXNnID0gY29tcG9uZW50LnAobXNnU2VnbWVudC50cmltKCksIFwidG9vbHRpcC1tc2dcIik7XHJcbiAgICAgIHRvb2x0aXBDb250YWluZXIuYXBwZW5kKHRvb2x0aXBNc2cpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvb2x0aXBDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246IGFic29sdXRlOyB0b3A6IDEwMCU7IHdpZHRoOiBmaXQtY29udGVudFwiO1xyXG4gICAgLy8gdGhpcyBlbnN1cmVzIHRoYXQgdGhlIGxhdGVzdCB0b29sdGlwcyBhbHdheXMgYXBwZWFyIG9uIHRoZSB0b3AuXHJcbiAgICB0b29sdGlwQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9IDEwICsgMTAgKiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b29sdGlwXCIpLmxlbmd0aCk7XHJcblxyXG4gICAgZWxlbS5hcHBlbmQodG9vbHRpcENvbnRhaW5lcik7XHJcblxyXG5cclxuICAgIGNvbnN0IHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGlzbWlzc09uRXh0ZXJuYWxDbGljaykge1xyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ICE9PSB0b29sdGlwQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNsaWNrZWQ7IHJlbW92aW5nIHRvb2x0aXBcIik7XHJcbiAgICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKTtcclxuICAgIH0pXHJcblxyXG4gICAgcC50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKHMgIT09IDApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIudG9vbHRpcFwiKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWVyIGV4cGlyZWQ7IHJlbW92aW5nIHRvb2x0aXBcIik7XHJcbiAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgcyAqIDEwMDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjaCBhIGxvYWRpbmcgbWVzc2FnZSB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWxlbSAtIEVsZW1lbnQgdG8gYXR0YWNoIGxvYWRpbmcgbWVzc2FnZSB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbXNnIC0gTWVzc2FnZSB0byBwbGF5OyBkZWZhdWx0IGlzIFwibG9hZGluZ1wiLlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIGxvYWRpbmdNZXNzYWdlKHBhcmVudEVsZW0sIG1zZz1cIkxvYWRpbmdcIikge1xyXG4gICAgY29uc3QgbG9hZGluZ0Jhc2UgPSBjb21wb25lbnQucChtc2csIFwibG9hZGluZy10ZXh0XCIpO1xyXG4gICAgY29uc3QgbG9hZGluZ0RvdHMgPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwibG9hZGluZy1kb3RzXCIpO1xyXG5cclxuICAgIGxvYWRpbmdCYXNlLmFwcGVuZChsb2FkaW5nRG90cyk7XHJcbiAgICBwYXJlbnRFbGVtLmFwcGVuZChsb2FkaW5nQmFzZSk7XHJcblxyXG4gICAgY29uc3QgbG9hZGluZ0FuaW1hdGlvbiA9IHtcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIGxvYWRpbmdUZXh0QmFzZTogcGFyZW50RWxlbS5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctdGV4dFwiKSxcclxuICAgICAgbG9hZGluZ1RleHREb3RzOiBwYXJlbnRFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1kb3RzXCIpLFxyXG4gICAgICAvKipcclxuICAgICAgICogU2V0cyBhbiBpbnRlcnZhbCwgdXNpbmcgaXQgdG8gcGxheSBhIHNpbXBsZSBhbmltYXRpb24uXHJcbiAgICAgICAqL1xyXG4gICAgICBwbGF5KCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLnRleHRDb250ZW50ID0gbXNnO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1vcGFjaXR5XCIpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHREb3RzLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCAhPT0gXCIuLi5cIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCArPSBcIi5cIjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1RleHREb3RzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCA3NTApO1xyXG4gICAgICB9LFxyXG4gICAgICBzdG9wKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dEJhc2UuY2xhc3NMaXN0LmFkZChcIm5vLW9wYWNpdHlcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dEJhc2UucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGxvYWRpbmdBbmltYXRpb247XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcclxuXHJcbiAgZ3JpZDtcclxuICBzaXplO1xyXG4gIHNoaXBzO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2l6ZSA9IDEwO1xyXG4gICAgdGhpcy5ncmlkID0gW107XHJcbiAgICB0aGlzLnNoaXBzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xyXG4gICAgICB0aGlzLmdyaWRbaV0gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNpemU7IGorKykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFtpXVtqXSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW5kIHBsYWNlcyBhIGdpdmVuIHNoaXAgYmFzZWQgb24gdGhlIGNvb3JkaW5hdGVzXHJcbiAgICogYXNzaWduZWQgdG8gdGhlIHNoaXAuIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSB0aGUgZ2l2ZW4gbGVuZ3RoIG9mIHRoZSBzaGlwLiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gdGhlIHJvdyB0byBwbGFjZSB0aGUgc2hpcC4gMC1iYXNlZCBjb29yZGluYXRlcy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIC0gdGhlIGNvbHVtbiB0byBwbGFjZSB0aGUgc2hpcC4gMC1iYXNlZCBjb29yZGluYXRlcy5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIC0gUGxhY2UgdGhlIHNoaXAgaG9yaXpvbnRhbGx5P1xyXG4gICAqIEByZXR1cm4ge1NoaXB9IC0gVGhlIHNoaXAgdGhhdCB3YXMgcGxhY2VkLCBvciBudWxsIGlmIHRoZSBzaGlwIGZhaWxlZFxyXG4gICAqIHRvIGJlIHBsYWNlZC5cclxuICAgKi9cclxuICBwbGFjZVNoaXAobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwpIHtcclxuICAgIC8vIHJldHVybiBudWxsIGlmIG91dCBvZiBib3VuZHNcclxuICAgIGlmIChyb3cgKyBsZW5ndGggPiB0aGlzLmdyaWQubGVuZ3RoXHJcbiAgICAgIHx8IGNvbCArIGxlbmd0aCA+IHRoaXMuZ3JpZC5sZW5ndGhcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIGNoZWNrIHRvIHNlZSB0aGF0IHRoZSBnaXZlbiByb3cgYW5kIGNvbCArIGxlbmd0aCBhcmUgbm90IGFscmVhZHkgb2NjdXBpZWQuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IChyb3cgKyBsZW5ndGgpOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ncmlkW2ldW2NvbF0gIT09IFwiXCIpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IChjb2wgKyBsZW5ndGgpOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd11baV0gIT09IFwiXCIpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG90aGVyd2lzZSB3ZSdyZSBnb29kIHRvIHBsYWNlIGEgc2hpcC5cclxuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnNoaXBzLmxlbmd0aDtcclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IChyb3cgKyBzaGlwLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFtpXVtjb2xdID0gaWQ7XHJcbiAgICAgICAgc2hpcC5zdGF0dXNbYCR7aX0sJHtjb2x9YF0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IChjb2wgKyBzaGlwLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFtyb3ddW2ldID0gaWQ7XHJcbiAgICAgICAgc2hpcC5zdGF0dXNbYCR7cm93fSwke2l9YF0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuXHJcbiAgICByZXR1cm4gc2hpcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExldCB0aGUgZ2FtZWJvYXJkIHJlY2VpdmUgYW4gYXR0YWNrIGF0IHRoZSBnaXZlbiByb3cgYW5kIGNvbHVtbi4gXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBoaXQuIDEgaWYgYSBoaXQgd2FzIHN1Y2Nlc3NmdWwsIDBcclxuICAgKiBpZiB0aGUgaGl0IG1pc3NlZCwgYW5kIC0xIGlmIHRoZSBhcmVhIHdhcyBhbHJlYWR5IGhpdC4gXHJcbiAgICovXHJcbiAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbCkge1xyXG4gICAgaWYgKHR5cGVvZiByb3cgIT09IFwibnVtYmVyXCIgfHwgY29sID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcHJvdmlkZSByb3cgYW5kIGNvbCBjb29yZGluYXRlcy5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNoaXBJZCA9IHRoaXMuZ3JpZFtyb3ddW2NvbF07XHJcblxyXG4gICAgaWYgKHNoaXBJZCA9PT0gXCJ4XCIgfHwgc2hpcElkID09PSBcIm9cIikge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9IGVsc2UgaWYgKHNoaXBJZCA9PT0gXCJcIikge1xyXG4gICAgICB0aGlzLmdyaWRbcm93XVtjb2xdID0gXCJvXCI7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXSA9IFwieFwiO1xyXG4gICAgICB0aGlzLnNoaXBzW3NoaXBJZF0uaGl0KHJvdywgY29sKTtcclxuXHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0R3JpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYXZlIGFsbCBzaGlwcyBiZWVuIHN1bmsgb24gdGhlIGdhbWVib2FyZD9cclxuICAgKi9cclxuICBhbGxTaGlwc1N1bmsoKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcclxuICAgIHRoaXMuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdGF0dXM7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IEJhdHRsZXNoaXBFbGVtZW50cyB9IGZyb20gXCIuL0JhdHRsZXNoaXBFbGVtZW50XCI7XHJcblxyXG4vKipcclxuICogTWFuYWdlcyBhIGdhbWUgc2Vzc2lvbiBmb3IgYmF0dGxlc2hpcC4gS2VlcHMgdHJhY2sgb2YgcGxheWVycy5cclxuICogQ2FuIHN0YXJ0LCBlbmQsIGFuZCByZXNldCB0aGUgZ2FtZS5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURSA9IHtcclxuICBwMXR1cm46IFwiUGxheWVyIDEncyB0dXJuXCIsXHJcbiAgcDJ0dXJuOiBcIlBsYXllciAyJ3MgdHVyblwiLFxyXG4gIGVuZGVkOiBcIkdhbWUgZW5kZWQuXCIsXHJcbiAgcDF2aWN0b3J5OiBcIlBsYXllciAxIHdpbnMuXCIsXHJcbiAgcDJ2aWN0b3J5OiBcIlBsYXllciAyIHdpbnMuXCIsXHJcbiAgcmVzdGFydDogXCJSZXN0YXJ0aW5nIGdhbWUuLi5cIixcclxuICBwbGF5aW5nOiBcIkdhbWUgYWN0aXZlLlwiLFxyXG4gIGdhbWVQcm9tcHQ6IFwiV2VsY29tZS4gRHJhZyBzaGlwcyBvbnRvIGdhbWVib2FyZC4gQ2xpY2sgKHdoZW4gcGxhY2VkKTogUm90YXRlLlwiXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIge1xyXG4gIFxyXG4gIHN0YXRpYyAjaW5zdGFuY2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwbGF5ZXJzIGludm9sdmVkIGluIHRoZSBnYW1lLlxyXG4gICAqL1xyXG4gIHBsYXllcnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIElzIGl0IHBsYXllciAxJ3MgdHVybj8gXHJcbiAgICovXHJcbiAgcDF0dXJuO1xyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSBvZiB0aGUgbGVuZ3RocyBvZiBlYWNoIHNoaXAgdGhhdCB0aGUgcGxheWVyIHdpbGwgaGF2ZSBpbiB0aGVpciBhcnNlbmFsLlxyXG4gICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgKi9cclxuICBzaGlwTGVuZ3RocztcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBnYW1lLlxyXG4gICAqIEBwYXJhbSB7UGxheWVyW119IHBsYXllcnMgLSBBbiBhcnJheSBvZiB0aGUgcGxheWVycyBpbiB0aGUgZ2FtZS5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHAxc3RhcnQgLSBTaG91bGQgcGxheWVyIDEgc3RhcnQgZmlyc3Q/IFRydWUgYnkgZGVmYXVsdC5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwbGF5ZXJzLCBwMXN0YXJ0ID0gdHJ1ZSwgc2hpcExlbmd0aHMgPSBbMiwgMywgMywgNCwgNV0pIHtcclxuICAgIGlmIChHYW1lTWFuYWdlci4jaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gR2FtZU1hbmFnZXIuI2luc3RhbmNlO1xyXG4gICAgfSBcclxuXHJcbiAgICBHYW1lTWFuYWdlci4jaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcclxuICAgIHRoaXMucDF0dXJuID0gcDFzdGFydDtcclxuICAgIHRoaXMuc2hpcExlbmd0aHMgPSBzaGlwTGVuZ3RocztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSBnYW1lLlxyXG4gICAqL1xyXG4gIHN0YXJ0R2FtZSgpIHtcclxuICAgIHRoaXMucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgIGlmIChwbGF5ZXIuY3B1KSB7XHJcbiAgICAgICAgdGhpcy4jY3B1UGxhY2VTaGlwcyhwbGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gICNjcHVQbGFjZVNoaXBzKHBsYXllcikge1xyXG4gICAgdGhpcy5zaGlwTGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBzdGF0dXMgPSBudWxsO1xyXG4gICAgICBsZXQgcm93O1xyXG4gICAgICBsZXQgY29sO1xyXG4gICAgICBsZXQgdmVydGljYWw7XHJcblxyXG4gICAgICB3aGlsZSAoc3RhdHVzID09PSBudWxsKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgICAgIC8vIHdoZW4gdGVzdGluZyB0aGUgZ2FtZSBwaGFzZSwgb3ZlcnJpZGUgcm93IGFuZCBjb2wgdG8gYmUgMCwgMCB0byB0ZXN0XHJcbiAgICAgICAgLy8gdmljdG9yeSBwaGFzZS5cclxuICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAocGxheWVyLmdhbWVib2FyZC5zaXplLTEpKTtcclxuICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAocGxheWVyLmdhbWVib2FyZC5zaXplLTEpKTtcclxuICAgICAgICB2ZXJ0aWNhbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3RhdHVzID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBCYXR0bGVzaGlwRWxlbWVudHMucGxhY2VTaGlwTWFudWFsbHkobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwsIHRydWUsIGBjcHUtc2hpcCR7aW5kZXh9YCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuICBuYW1lO1xyXG4gIGNwdTtcclxuICBzY29yZTtcclxuICBnYW1lYm9hcmQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlzQ3B1KSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5jcHUgPSBpc0NwdTtcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2sgdGhlIG90aGVyIHBsYXllcidzIGdhbWVib2FyZC5cclxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIC0gVGhlIG90aGVyIHBsYXllciBvZiB0aGUgZ2FtZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gUm93IGNvb3JkaW5hdGUgdG8gbGF1bmNoIGFuIGF0dGFjay5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIC0gQ29sdW1uIGNvb3JkaW5hdGUgdG8gbGF1bmNoIGFuIGF0dGFjay5cclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFN0YXR1cyBvZiB0aGUgYXR0YWNrLiAxIGlzIGEgaGl0LiAwIGlzIGEgbWlzcyxcclxuICAgKiBhbmQgLTEgaXMgYW4gYXJlYSB3aGljaCBoYXMgYWxyZWFkeSBiZWVuIGhpdC5cclxuICAgKi9cclxuICBhdHRhY2socGxheWVyLCB4TG9jLCB5TG9jKSB7XHJcbiAgICByZXR1cm4gcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHhMb2MsIHlMb2MpO1xyXG4gIH1cclxufSIsImZ1bmN0aW9uIHNldE5hbWUobGVuZ3RoKSB7XHJcbiAgc3dpdGNoKGxlbmd0aCkge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICByZXR1cm4gXCJTcGVlZGVyXCI7XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIHJldHVybiBcIlBhdHJvbCBCb2F0XCI7XHJcbiAgICBjYXNlIDM6XHJcbiAgICAgIHJldHVybiBcIkRlc3Ryb3llclwiO1xyXG4gICAgY2FzZSA0OlxyXG4gICAgICByZXR1cm4gXCJCYXR0bGVzaGlwXCI7XHJcbiAgICBjYXNlIDU6XHJcbiAgICAgIHJldHVybiBcIkNhcnJpZXJcIjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIlNoaXBcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBiYXR0bGVzaGlwLCBkZXBlbmRzIG9uIHRoZSBsZW5ndGguXHJcbiAgICovXHJcbiAgbmFtZTsgXHJcbiAgLyoqXHJcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgYmF0dGxlc2hpcC5cclxuICAgKi9cclxuICBsZW5ndGg7XHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCBjb25kaXRpb24gb2YgdGhlIGJhdHRsZXNoaXAuIFJldHVybnNcclxuICAgKiBhbiBhcnJheSBjb250YWluaW5nIHN0YXR1cyBvZiB0aGUgYmF0dGxlc2hpcC4gXHJcbiAgICogSWYgdGhlIHN0YXR1c2VzIGFyZSBhbGwgdHJ1ZSwgdGhlIHNoaXAgaXMgc3Vuay5cclxuICAgKi9cclxuICBzdGF0dXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHNoaXAuXHJcbiAgICogQHBhcmFtIHtHYW1lYm9hcmR9IGdhbWVib2FyZCAtIFRoZSBnYW1lYm9hcmQgdGhlIHNoaXAgYmVsb25ncyB0by5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIC0gVGhlIGxlbmd0aCBvZiB0aGUgc2hpcC5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IC0geENvb3JkaW5hdGUgdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQuXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbCAtIHlDb29yZGluYXRlIHRvIHBsYWNlIHRoZSBzaGlwLiAwLWJhc2VkLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgLSBTaG91bGQgdGhlIHNoaXAgYmUgcGxhY2VkIHZlcnRpY2FsbHk/XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aCA/PyAxO1xyXG4gICAgdGhpcy5uYW1lID0gc2V0TmFtZSh0aGlzLmxlbmd0aCk7XHJcblxyXG4gICAgdGhpcy5zdGF0dXMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcmtzIHRoZSBzaGlwIGhpdCBhdCBnaXZlbiBsb2NhdGlvbi5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9jYXRpb24gXHJcbiAgICovXHJcbiAgaGl0KHgsIHkpIHtcclxuICAgIGxldCBpZCA9IGAke3h9LCR7eX1gO1xyXG4gICAgdGhpcy5zdGF0dXNbaWRdID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgaWYgdGhlIHNoaXAgaGFzIGJlZW4gZW50aXJlbHkgc3VuayB5ZXQuXHJcbiAgICovXHJcbiAgaXNTdW5rKCkge1xyXG4gICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLnN0YXR1cykge1xyXG4gICAgICBpZiAoIXRoaXMuc3RhdHVzW3Byb3BdKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59IiwiLyoqXHJcbiAqIEEgY2xhc3Mgd2l0aCB1c2VmdWwsIGdlbmVyYWwtcHVycG9zZSBtZXRob2RzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbGl0eSB7XHJcbiAgXHJcbiAgc3RhdGljIGVtYWlsUmVnZXggPSAgXHRcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcclxuICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHJcbiAgLyoqXHJcbiAgICogQmFzZWQgb24gd2VicGFjaydzIHJlcXVpcmUgdG8gcXVpY2tseSBpbXBvcnQgaW4gYWxsIGltYWdlcyBpbiBhIGZvbGRlci5cclxuICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZXF1aXJlLWNvbnRleHQgdG8gdW5kZXJzdGFuZFxyXG4gICAqIG1vcmUgYWJvdXQgdGhlIHBhcmFtZXRlci5cclxuICAgKiBcclxuICAgKiBAcGFyYW0gciAtIHJlcXVpcmUuY29udGV4dCgpIGZ1bmN0aW9uLCB1c2VkIGZvciBpbXBvcnRpbmcgYWxsIGZpbGVzIGluXHJcbiAgICogYSBkaXJlY3RvcnkgbWF0Y2hpbmcgYSBwYXR0ZXJuLiBFeDpcclxuICAgKiByZXF1aXJlLmNvbnRleHQoXCIuL2ltYWdlc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKS4gTGVhdmUgYmxhbmsgdG8gdXNlIHRoaXMuXHJcbiAgICogQHJldHVybnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGltYWdlcyBtYXRjaGluZyB0aGUgcmVxdWlyZSBjb250ZXh0LFxyXG4gICAqIHRoZSBvcmlnaW5hbCBmaWxlbmFtZSAody8gZXh0ZW5zaW9uKSBiZWluZyB0aGUga2V5IHJlZmVyZW5jaW5nIHRoZSBpbWFnZS5cclxuICAgKi9cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICBzdGF0aWMgaW1wb3J0QWxsSW1hZ2VzKHIgPSByZXF1aXJlLmNvbnRleHQoXCIuLi9pbWFnZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpIHtcclxuICAgIGxldCBpbWFnZXMgPSB7fTtcclxuICAgIHIua2V5cygpLm1hcCgoaXRlbSkgPT4geyBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtcclxuICAgIHJldHVybiBpbWFnZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIHZhcmlvdXMgY2xhc3Nlcy4gV3JhcHMgZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGhlIEhUTUwgdGFnIG9mIHRoZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0Q2xhc3MgLSBEZWZhdWx0IGNsYXNzIHRvIHJlZmVyIHRvIHRoZSBlbGVtZW50IGJ5LlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NOYW1lcyAtIChPcHRpb25hbCkgQWRkaXRpb25hbCBjbGFzc2VzIHRvIGdpdmUgdGhlIGVsZW1lbnQuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQodGFnLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICBVdGlsaXR5LmFkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgZGVmYXVsdENsYXNzLCAuLi5jbGFzc05hbWVzKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGVscGVyIG1ldGhvZCB3aGljaCBhZGRzIGNsYXNzZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBhcHBlbmQgY2xhc3NlcyB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gVGhlIGNsYXNzbmFtZSB0aGF0IHNhaWQgZWxlbWVudCBzaG91bGQgYWx3YXlzIGhhdmUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIFRoZSBjbGFzc25hbWVzIHRvIGdpdmUgdGhlIGVsZW1lbnQgKG9wdGlvbmFsKS5cclxuICAgKiAqLyBcclxuICBzdGF0aWMgYWRkQ2xhc3Nlc1RvRWxlbWVudChlbGVtLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpIHtcclxuICAgICAgY2xhc3NOYW1lcy5wdXNoKGRlZmF1bHRDbGFzcyk7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBhIGdpdmVuIGVsZW1lbnQsIGFkZCBhbiBhbmltYXRpb24gYnV0IG9ubHkgcGxheSBpdCBvbmNlLiBBZnRlcndhcmRzLFxyXG4gICAqIHVubG9hZCB0aGUgYW5pbWF0aW9uLiBUaGlzIGFsbG93cyB5b3UgdG8gYWRkIHRoZSBjbGFzcyB0byBpdCBhZ2FpbiB0byBcclxuICAgKiBwbGF5IHRoZSBhbmltYXRpb247IHRoaXMgaXMgdXNlZnVsIHdoZW4gYXNzb2NpYXRlZCB3aXRoIGV2ZW50IHRyaWdnZXJzLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBBbiBlbGVtZW50IHRvIGFwcGx5IHRoZSBhbmltYXRpb24gdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFuaW1hdGlvbk5hbWUgLSBBIENTUyBjbGFzcyBhc3NvY2lhdGVkIHdpdGggYW4gYW5pbWF0aW9uLlxyXG4gICAqL1xyXG4gIHN0YXRpYyB0cmlnZ2VyQW5pbWF0aW9uKGVsZW0sIGFuaW1hdGlvbk5hbWUpIHtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChhbmltYXRpb25OYW1lKTtcclxuXHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xyXG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICB9LCB7b25jZSA6IHRydWV9KTsgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWN1cnNpdmVseSBzY2FsZSB0aGUgdHJlZSBvZiBhIGNoaWxkIG5vZGUgdW50aWwgdGhlIHBhcmVudCBtYXRjaGluZyB0aGUgZ2l2ZW5cclxuICAgKiBzZWxlY3RvciBpcyBmb3VuZC4gUmV0dXJucyBOVUxMIGlmIG5vIG1hdGNoaW5nIHBhcmVudCBpcyBmb3VuZC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gQSBjaGlsZCBub2RlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIENTUyBTZWxlY3RvciBTdHJpbmcuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0hUTUxlbGVtZW50fSAtIFBhcmVudCBvZiBlbGVtLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRNYXRjaGluZ1BhcmVudChlbGVtLCBzZWxlY3Rvcikge1xyXG4gICAgd2hpbGUoIWVsZW0ubWF0Y2hlcyhzZWxlY3RvcikpIHtcclxuICAgICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcclxuICAgICAgaWYgKGVsZW0ubWF0Y2hlcyhcImh0bWxcIikpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHVzZXIncyBsb2NhdGlvbiwgdXNpbmcgdGhlIEdlb2xvY2F0aW9uIEFQSS5cclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB0aGUgdXNlcidzIGxvY2F0aW9uLCBvciBudWxsXHJcbiAgICogaWYgdGhlIHVzZXIgZGVuaWVzIHBlcm1pc3Npb24gcmVxdWVzdHMuXHJcbiAgICovXHJcbiAgLypcclxuICBzdGF0aWMgZ2V0R2VvbG9jYXRpb24oKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gc3VjY2Vzcyhwb3NpdGlvbikge1xyXG4gICAgICBjb25zdCBsYXRpdHVkZSAgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcblxyXG4gICAgICBjb25zdCBsYXRsb25nID0gYCR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWA7XHJcblxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxhdGxvbmcpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gZXJyb3IoKSB7XHJcbiAgICAgIGxldCBlcnJvciA9IFwiVXNlciBkZW5pZWQgbG9jYXRpb24gcGVybWlzc2lvbnMuXCI7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge1xyXG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3MsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAqL1xyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYWxsIGNoaWxkcmVuIGZyb20gYSBwYXJlbnQgbm9kZS5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50Tm9kZX0gcGFyZW50IC0gUGFyZW50IG5vZGUgY29udGFpbmluZyBjaGlsZHJlbi5cclxuICAgKi9cclxuICBzdGF0aWMgcmVtb3ZlQWxsQ2hpbGRyZW4ocGFyZW50KSB7XHJcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VudGVuY2UgZm9ybWF0LiBNYWtlcyBzdXJlIHRoZSBmaXJzdCBsZXR0ZXIgaXMgY2FwaXRhbGl6ZWQsIGFuZCB0aGVuIFxyXG4gICAqIGEgcGVyaW9kIGlzIGFwcGVuZGVkLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBhIHN0cmluZyB0byBzZW50ZW5jZS1jYXNlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyB0b1NlbnRlbmNlKHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpICsgXCIuXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGFzc2lnbmVkIHRvIGVhY2ggYnV0dG9uXHJcbiAgICogd2hlbiBvbmx5IG9uZSBvZiB0aGVtIHNob3VsZCBiZSB0b2dnbGVkLiBGdW5jdGlvbnMgbGlrZSBhIHJhZGlvXHJcbiAgICogYnV0dG9uIGJ1dCB3aXRoIGRpZmZlcmVudCBzdHlsaW5nLlxyXG4gICAqIEBwYXJhbSB7Kn0gZSBcclxuICAgKiBAcGFyYW0geyp9IHBhcmVudFNlbGVjdG9yIFxyXG4gICAqL1xyXG4gIHN0YXRpYyB0b2dnbGVTZWxlY3RlZChlLCBwYXJlbnRTZWxlY3Rvcikge1xyXG4gICAgLy8gcmVtb3ZlIHNlbGVjdGVkIGNsYXNzIGZyb20gdGhlIG90aGVyLlxyXG4gICAgY29uc3QgcGFyZW50ID0gVXRpbGl0eS5nZXRNYXRjaGluZ1BhcmVudChlLmN1cnJlbnRUYXJnZXQsIHBhcmVudFNlbGVjdG9yKTtcclxuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3RlZCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xyXG4gICAgY3VycmVudFNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgIGN1cnJlbnRTZWxlY3RlZC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgIC8vIHRvZ2dsZSBzZWxlY3RlZCBjbGFzcyBvbiB0aGUgYnV0dG9uXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9qcyBcclxuaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5pbXBvcnQgeyBCYXR0bGVzaGlwRWxlbWVudHMgfSBmcm9tIFwiLi9CYXR0bGVzaGlwRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBHQU1FX1NUQVRFIH0gZnJvbSBcIi4vZ2FtZW1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcblxyXG4vL2Nzc1xyXG5pbXBvcnQgXCIuLi9jc3MvcmVzZXQuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9pbmRleC5jc3NcIjtcclxuXHJcbihmdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICBjb25zdCBwMSA9IG5ldyBQbGF5ZXIoXCJDb21tYW5kZXIgQmx1ZVwiLCBmYWxzZSk7XHJcbiAgY29uc3QgcDIgPSBuZXcgUGxheWVyKFwiQ29tbWFuZGVyIFJlZFwiLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lTWFuYWdlcihbcDEsIHAyXSk7XHJcbiAgY29uc3QgcGFnZSA9IG5ldyBCYXR0bGVzaGlwRWxlbWVudHMoZ2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IHBhZ2UuaGVhZGVyKCk7XHJcbiAgY29uc3QgZ2FtZUFyZWEgPSBwYWdlLmdhbWVBcmVhKCk7XHJcblxyXG4gIHBhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUuZ2FtZVByb21wdCk7XHJcblxyXG4gIGJvZHkuYXBwZW5kKGhlYWRlciwgZ2FtZUFyZWEpO1xyXG59KSgpO1xyXG5cclxuLypcclxuMTogVXNlcnMgcGxhY2UgdGhlaXIgc2hpcHMuXHJcbjI6IFVzZXJzIHBsYXkgdGhlIGdhbWUuXHJcbjM6IEdhbWUgZW5kcyB3aGVuIHRoZSBvbmUgcGxheWVyJ3MgYmF0dGxlc2hpcHMgYXJlIGRlc3Ryb3llZC5cclxuNDogVGhlIGdhbWUgZW5kIGhhcyBzdGF0aXN0aWNzIHJlc3VsdHMgYW5kIG9wdGlvbiB0byByZXBsYXlcclxuNTogR28gYmFjayB0byBzdGVwIDEuXHJcbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9