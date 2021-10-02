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
___CSS_LOADER_EXPORT___.push([module.id, ".no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  background-color: cyan;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.draggable:hover {\r\n  background-color: blue;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55);\r\n  background-color: rgba(0, 255, 64, 0.3);\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: greenyellow;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.occupied:hover {\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.ship-placed .cell {\r\n  /* border: 1px solid rgba(27, 102, 71, 0.3); */\r\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA,8DAA8D;AAC9D,uDAAuD;AACvD,uDAAuD;AACvD,gFAAgF;AAChF;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;AACA;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;EACjC,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8CAA8C;AAChD","sourcesContent":[".no-display {\r\n  display: none !important;\r\n}\r\n\r\n.game-area {\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.gameboard-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.gameboard-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  user-select: none;\r\n}\r\n\r\n/* This pseudo element helps keep the cells aligned together */\r\n/* Empty divs act strangely, so put content in them.  */\r\n/* Delete it and then run this in console to see that */\r\n/* document.querySelectorAll(\".cell\").forEach(cell => cell.textContent = \"A\"); */\r\n.cell::after {\r\n  content: '.';\r\n  visibility: hidden;\r\n}\r\n\r\n.selectable {\r\n  position: relative;\r\n  z-index: auto;\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: rgb(222, 238, 252)\r\n}\r\n\r\n.ship-selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.ship.draggable {\r\n  width:fit-content;\r\n  background-color: cyan;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.draggable {\r\n  cursor: move;\r\n}\r\n\r\n.draggable:hover {\r\n  background-color: blue;\r\n}\r\n\r\n.valid-drag {\r\n  border: 1px solid rgb(0, 255, 55);\r\n  background-color: rgba(0, 255, 64, 0.3);\r\n}\r\n\r\ndiv.ship.ship-placed {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: greenyellow;\r\n  z-index: 10;\r\n}\r\n\r\ndiv.ship.ship-placed:hover {\r\n  box-shadow: 0px 0px 10px #4e8a02;\r\n}\r\n\r\n.occupied {\r\n  background-color: rgb(222, 238, 252);\r\n}\r\n\r\n.occupied:hover {\r\n}\r\n\r\n.ship.draggable.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.cpu-ship-placed {\r\n  background-color: rgba(255, 136, 136, 0.863);\r\n  border: 1px solid darkred;\r\n}\r\n\r\n.ship-start-horizontal {\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-horizontal {\r\n  border-left: 1px solid transparent;\r\n  border-right: 1px solid transparent;\r\n}\r\n\r\n.ship-end-horizontal {\r\n  border-left: 1px solid transparent;\r\n}\r\n\r\n.ship-start-vertical {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-middle-vertical {\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.ship-end-vertical {\r\n  border-top: 1px solid transparent;\r\n}\r\n\r\n.cell-transparent {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.ship-placed .cell {\r\n  /* border: 1px solid rgba(27, 102, 71, 0.3); */\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/index.js");


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

      _index__WEBPACK_IMPORTED_MODULE_0__.BattleshipElements.placeShipManually(length, row, col, vertical, true, `cpu-ship${index}`);
    });
  }
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BattleshipElements": () => (/* binding */ BattleshipElements)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/component.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/js/utility.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");
/* harmony import */ var _gamemanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gamemanager */ "./src/js/gamemanager.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
//js 








//css



// perform any DOM change action in your page. e.g. show/hide


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

    controlDialogContainer.append(this.#dialog(), this.#shipPlacement(), this.#startGamePrompt());

    this.#enableDraggingAndRotation();

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
        document.querySelector(`#${currentDraggedShipId}`).classList.remove("no-display");
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
    let self = this;
    let startGameForm = _utility__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("form", "start-game-prompt");
    let [playerNameLabel, playerNameField] = _component__WEBPACK_IMPORTED_MODULE_0__["default"].formInput("Name", "input", "p1-name", "p1-name");
    let startGameButton = _component__WEBPACK_IMPORTED_MODULE_0__["default"].button("Start Game!", "start-game-button");
    let errorField = _component__WEBPACK_IMPORTED_MODULE_0__["default"].p("Error Field Here", "form-error-field");

    playerNameField.value = "Commander";
    playerNameField.required = true;

    startGameForm.append(playerNameLabel, playerNameField, startGameButton, errorField);


    startGameButton.disabled = true;

    

    startGameForm.addEventListener("submit", (e) => {
      e.preventDefault();

      self.gameManager.startGame();
    });

    return startGameForm;
  }
}


(function main() {
  const body = document.body;

  const p1 = new _player__WEBPACK_IMPORTED_MODULE_5__["default"]("Commander Blue", false);
  const p2 = new _player__WEBPACK_IMPORTED_MODULE_5__["default"]("Commander Red", true);

  const game = new _gamemanager__WEBPACK_IMPORTED_MODULE_4__["default"]([p1, p2]);
  const page = new BattleshipElements(game);

  const header = page.header();
  const gameArea = page.gameArea();

  page.setDialog(_gamemanager__WEBPACK_IMPORTED_MODULE_4__.GAME_STATE.gamePrompt);

  body.append(header, gameArea);
})();

/*
1: Users place their ships.
2: Users play the game.
3: Game ends when the one player's battleships are destroyed.
4: The game end has statistics results and option to replay
5: Go back to step 1.
*/

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFDQUFxQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9yZXNldC5jc3M/MTUyYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvLihwbmd8anBlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvZ2FtZW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uby1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtYXJlYSB7XFxyXFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhpcyBwc2V1ZG8gZWxlbWVudCBoZWxwcyBrZWVwIHRoZSBjZWxscyBhbGlnbmVkIHRvZ2V0aGVyICovXFxyXFxuLyogRW1wdHkgZGl2cyBhY3Qgc3RyYW5nZWx5LCBzbyBwdXQgY29udGVudCBpbiB0aGVtLiAgKi9cXHJcXG4vKiBEZWxldGUgaXQgYW5kIHRoZW4gcnVuIHRoaXMgaW4gY29uc29sZSB0byBzZWUgdGhhdCAqL1xcclxcbi8qIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXFxcIi5jZWxsXFxcIikuZm9yRWFjaChjZWxsID0+IGNlbGwudGV4dENvbnRlbnQgPSBcXFwiQVxcXCIpOyAqL1xcclxcbi5jZWxsOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnLic7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDIzOCwgMjUyKVxcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zZWxlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlIHtcXHJcXG4gIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnYWJsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4udmFsaWQtZHJhZyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMjU1LCA1NSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgNjQsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLnNoaXAtcGxhY2VkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5zaGlwLXBsYWNlZDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzRlOGEwMjtcXHJcXG59XFxyXFxuXFxyXFxuLm9jY3VwaWVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDIzOCwgMjUyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9jY3VwaWVkOmhvdmVyIHtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlLnZlcnRpY2FsIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1wbGFjZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEzNiwgMTM2LCAwLjg2Myk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zdGFydC1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1taWRkbGUtaG9yaXpvbnRhbCB7XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWVuZC1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXN0YXJ0LXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbWlkZGxlLXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZW5kLXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwtdHJhbnNwYXJlbnQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBsYWNlZCAuY2VsbCB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAxMDIsIDcxLCAwLjMpOyAqL1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUEsOERBQThEO0FBQzlELHVEQUF1RDtBQUN2RCx1REFBdUQ7QUFDdkQsZ0ZBQWdGO0FBQ2hGO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uby1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtYXJlYSB7XFxyXFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhpcyBwc2V1ZG8gZWxlbWVudCBoZWxwcyBrZWVwIHRoZSBjZWxscyBhbGlnbmVkIHRvZ2V0aGVyICovXFxyXFxuLyogRW1wdHkgZGl2cyBhY3Qgc3RyYW5nZWx5LCBzbyBwdXQgY29udGVudCBpbiB0aGVtLiAgKi9cXHJcXG4vKiBEZWxldGUgaXQgYW5kIHRoZW4gcnVuIHRoaXMgaW4gY29uc29sZSB0byBzZWUgdGhhdCAqL1xcclxcbi8qIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXFxcIi5jZWxsXFxcIikuZm9yRWFjaChjZWxsID0+IGNlbGwudGV4dENvbnRlbnQgPSBcXFwiQVxcXCIpOyAqL1xcclxcbi5jZWxsOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnLic7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RhYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDIzOCwgMjUyKVxcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zZWxlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlIHtcXHJcXG4gIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnYWJsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4udmFsaWQtZHJhZyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMjU1LCA1NSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgNjQsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLnNoaXAtcGxhY2VkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2hpcC5zaGlwLXBsYWNlZDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzRlOGEwMjtcXHJcXG59XFxyXFxuXFxyXFxuLm9jY3VwaWVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDIzOCwgMjUyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9jY3VwaWVkOmhvdmVyIHtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZ2dhYmxlLnZlcnRpY2FsIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jcHUtc2hpcC1wbGFjZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEzNiwgMTM2LCAwLjg2Myk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1zdGFydC1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1taWRkbGUtaG9yaXpvbnRhbCB7XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWVuZC1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXN0YXJ0LXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbWlkZGxlLXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZW5kLXZlcnRpY2FsIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwtdHJhbnNwYXJlbnQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBsYWNlZCAuY2VsbCB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAxMDIsIDcxLCAwLjMpOyAqL1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsImltcG9ydCBVdGlsaXR5IGZyb20gXCIuL3V0aWxpdHlcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgY2xhc3MuIENvbnRhaW5zIHZhcmlvdXMgRE9NIGVsZW1lbnRzLlxyXG4gKiBBdXRob3I6IGRhdHJpbm9uXHJcbiAqIFZlcnNpb246IDEuNCAoV2VhdGhlcilcclxuICovXHJcblxyXG5jbGFzcyBDb21wb25lbnQge1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNjAwcHgpXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgYSBiYXNpYyBIVE1MIHNrZWxldG9uIGZvciB0aGUgd2ViIHBhZ2UsIGdlbmVyYXRpbmcgYSBoZWFkZXIsXHJcbiAgICogbWFpbiwgYW5kIHN0aWNreSBmb290ZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyp9IGhlYWRlclRpdGxlIC0gV2hhdCB0aGUgd2ViIHBhZ2UgaXMgY2FsbGVkLlxyXG4gICAqIEBwYXJhbSB7Ym9vbH0gZW1wdHlIZWFkZXIgLSBTaG91bGQgdGhlIGhlYWRlciB1c2UgYSBkZWZhdWx0IHN0cnVjdHVyZT9cclxuICAgKiBUaGUgZGVmYXVsdCBzdHJ1Y3R1cmUgbG9va3MgbGlrZSBbIExvZ28gfCB8IHwgfCBOYXZpZ2F0aW9uIExpbmtzXVxyXG4gICAqIEByZXR1cm5zIC0gQW4gYXJyYXkgY29udGFpbmluZyByZWZlcmVuY2VzIHRvIHRoZSBnZW5lcmF0ZWQgaGVhZGVyLCBtYWluLCBhbmQgZm9vdGVyLlxyXG4gICAqL1xyXG4gIGluaXRpYWxpemVTdHJ1Y3R1cmUoXHJcbiAgICBoZWFkZXJUaXRsZSxcclxuICAgIGVtcHR5SGVhZGVyID0gZmFsc2UsXHJcbiAgICBjcmVhdGVNb250aCxcclxuICAgIGdpdGh1YkxpbmtcclxuICApIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgbWFpbldyYXBwZXIgPSB0aGlzLmRpdihcImNvbnRlbnRcIik7XHJcbiAgICBsZXQgaGVhZGVyO1xyXG4gICAgaWYgKGVtcHR5SGVhZGVyKSB7XHJcbiAgICAgIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIgPSB0aGlzLmhlYWRlcihoZWFkZXJUaXRsZSk7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IHRoaXMuZm9vdGVyKGNyZWF0ZU1vbnRoLCBnaXRodWJMaW5rKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG4gICAgbWFpbldyYXBwZXIuYXBwZW5kKGhlYWRlciwgbWFpbik7XHJcbiAgICBib2R5LmFwcGVuZChtYWluV3JhcHBlciwgZm9vdGVyKTtcclxuXHJcbiAgICByZXR1cm4gW2hlYWRlciwgbWFpbiwgZm9vdGVyXTtcclxuICB9XHJcblxyXG4gIGNvbnRlbnQoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyKHRpdGxlKSB7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIGxldCB0aXRsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICAgIG1lbnVCdXR0b24uaWQgPSBcIm1lbnUtYnV0dG9uXCI7XHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1iYXJzXCIsIFwibm8tZGlzcGxheVwiKTtcclxuXHJcbiAgICB0aGlzLm1xbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLm1hdGNoZXMpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGl0IGJpZ2dlciB0aGFuIHRoZSBxdWVyeSBydWxlLlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluLW91dFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVudSBwcmVzc2VkLlwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2xpZGUtaW4tb3V0XCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICAvLyBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpbWd9KWA7XHJcblxyXG4gICAgdGl0bGVFbGVtLmlkID0gXCJwYWdlLXRpdGxlXCI7XHJcbiAgICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICB0aXRsZUVsZW0uaW5zZXJ0QmVmb3JlKG1lbnVCdXR0b24sIHRpdGxlRWxlbS5maXJzdENoaWxkKTtcclxuICAgIGhlYWRlci5hcHBlbmQodGl0bGVFbGVtKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgbmF2YmFyKC4uLmxpbmtzKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBuYXYuaWQgPSBcIm5hdmJhclwiO1xyXG4gICAgbGlua0NvbnRhaW5lci5pZCA9IFwibmF2YmFyLWJ1dHRvbnMtY29udGFpbmVyXCI7XHJcblxyXG4gICAgZm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG4gICAgICBjb25zdCBsaW5rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBjb25zdCBsaW5rQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItYnV0dG9uXCIpO1xyXG5cclxuICAgICAgbGlua0FuY2hvci5pZCA9IGBuYXZsaW5rLSR7bGluay5yZXBsYWNlKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICBsaW5rQW5jaG9yLnRleHRDb250ZW50ID0gbGluaztcclxuICAgICAgbGlua0FuY2hvci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuXHJcbiAgICAgIGxpbmtCdXR0b24uYXBwZW5kKGxpbmtBbmNob3IpO1xyXG4gICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZChsaW5rQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXYuYXBwZW5kKGxpbmtDb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBuYXY7XHJcbiAgfVxyXG5cclxuICBiYW5uZXIodGV4dCwgaW1nKSB7XHJcbiAgICBsZXQgYmFubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICAgIGxldCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuXHJcbiAgICBiYW5uZXJDb250YWluZXIuaWQgPSBcImJhbm5lclwiO1xyXG4gICAgYmFubmVyLmlkID0gXCJiYW5uZXItaW1hZ2VcIjtcclxuICAgIGNhcHRpb24uaWQgPSBcImJhbm5lci1jYXB0aW9uXCI7XHJcblxyXG4gICAgYmFubmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWd9KWA7XHJcblxyXG4gICAgY2FwdGlvbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgYmFubmVyQ29udGFpbmVyLmFwcGVuZChiYW5uZXIsIGNhcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBiYW5uZXJDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBmb290ZXIoY3JlYXRlTW9udGgsIGdpdGh1YkxpbmspIHtcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcblxyXG4gICAgbGV0IHRleHQgPSBgQ3JlYXRlZCBpbiAke2NyZWF0ZU1vbnRofSAyMDIxLiBPZGluIFByb2plY3QgeCBEYW4gVC5gO1xyXG4gICAgbGV0IGdpdGh1YkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGxldCBnaEljb24gPSB0aGlzLmZhSWNvbihcImZhYlwiLCBcImZhLWdpdGh1Yi1zcXVhcmVcIiwgXCJpY29uXCIpO1xyXG5cclxuICAgIGdpdGh1YkVsZW0uYXBwZW5kKGdoSWNvbik7XHJcbiAgICBnaXRodWJFbGVtLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItZ2l0aHViLWljb25cIik7XHJcbiAgICBnaXRodWJFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgZ2l0aHViTGluayk7XHJcbiAgICBnaXRodWJFbGVtLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICAgIGdpdGh1YkVsZW0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHAuYXBwZW5kKGdpdGh1YkVsZW0pO1xyXG4gICAgZm9vdGVyLmFwcGVuZChwKTtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCBsYXJnZXIsIGVtYm9sZGVuZWQsIHRleHQsXHJcbiAgICogc2ltaWxhciB0byBhIHB1bGwgcXVvdGUgaW4gYSBtYWdhemluZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBtc2cge3N0cmluZ30gVGV4dCB0byBpbmNsdWRlIGluIHRoZSBibG9jayBxdW90ZVxyXG4gICAqL1xyXG4gIHB1bGxxdW90ZShtc2cpIHtcclxuICAgIGxldCBwdWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xyXG4gICAgcHVsbC50ZXh0Q29udGVudCA9IG1zZztcclxuXHJcbiAgICBwdWxsLmNsYXNzTGlzdC5hZGQoXCJwdWxsLXF1b3RlXCIpO1xyXG5cclxuICAgIHJldHVybiBwdWxsO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbihpZCkge1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIGVsZW1lbnQuaWQgPSBpZDtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdGV4dCBoZWFkaW5nIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyp9IHRleHQgLSBUaGUgbGFiZWwgZm9yIHRoZSBoZWFkZXIuXHJcbiAgICogQHBhcmFtIHsqfSBsZXZlbCAtIFRoZSBsZXZlbCBvZiBoZWFkZXIuXHJcbiAgICovXHJcbiAgaGVhZGluZyh0ZXh0LCBsZXZlbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAobGV2ZWwgPCAxIHx8IGxldmVsID4gNikge1xyXG4gICAgICB0aHJvdyBFcnJvcihcIkhlYWRpbmcgbGV2ZWxzIGNhbiBvbmx5IGJlIGJldHdlZW4gMSB0byA2IVwiKTtcclxuICAgIH1cclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoJHtsZXZlbH1gKTtcclxuXHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG5cclxuICBwKHRleHQsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGlmIChjbGFzc05hbWUubGVuZ3RoICE9IDApIHtcclxuICAgICAgcC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIHA7XHJcbiAgfVxyXG5cclxuICBpbWcodXJsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIGltYWdlLnNyYyA9IHVybDtcclxuXHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbiAgfVxyXG5cclxuICBkaXYoLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbihsYWJlbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgYnRuLnRleHRDb250ZW50ID0gbGFiZWw7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGVzIGEgYmFzaWMgdGFibGUgd2l0aCBzaW5nbGUtY2VsbCBjb2x1bW5zIGFuZCByb3dzLCBiYXNlZCBvbiB0aGUgaW1wb3J0ZWQgZmlsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Y3N2fSBkYXRhIC0gRGF0YSB0byB0dXJuIGludG8gYSB0YWJsZS4gUGxlYXNlIHVzZSB3ZWJwYWNrIHRvIGltcG9ydCAuY3N2IGZpbGVzLlxyXG4gICAqL1xyXG4gIHRhYmxlKGlkID0gXCJcIiwgZGF0YSkge1xyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgdGFibGUuaWQgPSBpZDtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHRhYmxlIGhlYWRlciByb3cuXHJcbiAgICBsZXQgdGFibGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBsZXQgdGFibGVIZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG4gICAgZm9yIChsZXQgY29sIG9mIE9iamVjdC5rZXlzKGRhdGFbMF0pKSB7XHJcbiAgICAgIGxldCBjb2xDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICBjb2xDZWxsLnRleHRDb250ZW50ID0gY29sO1xyXG5cclxuICAgICAgdGFibGVIZWFkZXJSb3cuYXBwZW5kKGNvbENlbGwpO1xyXG4gICAgfVxyXG4gICAgdGFibGVIZWFkZXIuYXBwZW5kKHRhYmxlSGVhZGVyUm93KTtcclxuXHJcbiAgICB0YWJsZS5hcHBlbmQodGFibGVIZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIC8vIEdlbmVyYXRlIHRhYmxlIHJvd3MuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgIGZvciAobGV0IHByb3AgaW4gZGF0YVtpXSkge1xyXG4gICAgICAgIGxldCB0Y2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHJcbiAgICAgICAgdGNlbGwudGV4dENvbnRlbnQgPSBkYXRhW2ldW3Byb3BdO1xyXG4gICAgICAgIHRyb3cuYXBwZW5kKHRjZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFibGVCb2R5LmFwcGVuZCh0cm93KTtcclxuICAgIH1cclxuICAgIHRhYmxlLmFwcGVuZCh0YWJsZUJvZHkpO1xyXG5cclxuICAgIHJldHVybiB0YWJsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGZvbnQgYXdlc29tZSBpY29uLlxyXG4gICAqL1xyXG4gIGZhSWNvbihjYXRlZ29yeSwgbmFtZSwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgZmFzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgZmFzSWNvbi5jbGFzc0xpc3QuYWRkKGNhdGVnb3J5LCBuYW1lKTtcclxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgZmFzSWNvbi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhc0ljb247XHJcbiAgfVxyXG5cclxuICBzcGFuKHRleHRDb250ZW50ID0gbnVsbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgaWYgKGNsYXNzTmFtZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIHNwYW47XHJcbiAgfVxyXG5cclxuICBmb3JtSW5wdXQobGFiZWxUZXh0LCB0eXBlLCBpbnB1dElkLCBuYW1lKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dC5pZCA9IGlucHV0SWQ7XHJcbiAgICBpbnB1dC5uYW1lID0gbmFtZTtcclxuICAgIGlucHV0LnR5cGUgPSB0eXBlO1xyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIGlucHV0XTtcclxuICB9XHJcblxyXG4gIGRyb3Bkb3duKGxhYmVsVGV4dCwgbmFtZSwgaW5wdXRJZCwgLi4udmFsdWVzKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0SWQpO1xyXG5cclxuICAgIGZvciAobGV0IHZhbCBvZiB2YWx1ZXMpIHtcclxuICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgZW50cnkudmFsdWUgPSB2YWw7XHJcbiAgICAgIGlmIChpc05hTih2YWwpICYmIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IHZhbFswXS50b1VwcGVyQ2FzZSgpICsgdmFsLnNsaWNlKDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gdmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3QuYXBwZW5kKGVudHJ5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCBzZWxlY3RdO1xyXG4gIH1cclxuXHJcbiAgdGV4dEFyZWEobGFiZWxUZXh0LCBuYW1lLCBpbnB1dElkKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICB0YS5pZCA9IGlucHV0SWQ7XHJcbiAgICB0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIHRhXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGNvbmZpcm0gbW9kYWwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyp9IGNsYXNzTmFtZSAtIENsYXNzZXMgdGhlIG1vZGFsIHNob3VsZCBiZWxvbmcgdG8uXHJcbiAgICogQHBhcmFtIHsqfSB0aXRsZSAtIFRoZSB0aXRsZSBhcHBlYXJpbmcgb24gdGhlIG1vZGFsLlxyXG4gICAqIEBwYXJhbSB7Kn0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIGFwcGVhcmluZyBvbiB0aGUgbW9kYWwuXHJcbiAgICogQHBhcmFtIHsqfSBwb3NpdGl2ZUJ1dHRvbkxhYmVsIC0gVGV4dCBmb3IgdGhlIE9LIGJ1dHRvbi5cclxuICAgKiBAcGFyYW0geyp9IG5lZ2F0aXZlQnV0dG9uTGFiZWwgLSBUZXh0IGZvciB0aGUgY2FuY2VsIGJ1dHRvbi5cclxuICAgKiBAcGFyYW0geyp9IHBvc2l0aXZlQ2FsbGJhY2sgLSBGdW5jdGlvbiB0byBydW4gaWYgT0sgaXMgcHJlc3NlZC5cclxuICAgKiBAcGFyYW0geyp9IG5lZ2F0aXZlQ2FsbGJhY2sgLSBGdW5jdGlvbiB0byBydW4gaWYgY2FuY2VsIGlzIHByZXNzZWQuICdudWxsJyBieVxyXG4gICAqIGRlZmF1bHQsIHdoaWNoIHRoZW4ganVzdCBjbG9zZXMgdGhlIG1vZGFsLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgLSBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbW9kYWwgZWxlbWVudC5cclxuICAgKi9cclxuICBjb25maXJtTW9kYWwoXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB0aXRsZSxcclxuICAgIG1lc3NhZ2UsXHJcbiAgICBwb3NpdGl2ZUJ1dHRvbkxhYmVsLFxyXG4gICAgbmVnYXRpdmVCdXR0b25MYWJlbCxcclxuICAgIHBvc2l0aXZlQ2FsbGJhY2ssXHJcbiAgICBuZWdhdGl2ZUNhbGxiYWNrID0gbnVsbFxyXG4gICkge1xyXG4gICAgbGV0IG1vZGFsV3JhcHBlciA9IHRoaXMuZGl2KCk7XHJcbiAgICBtb2RhbFdyYXBwZXIuaWQgPSBcInByb21wdC13cmFwcGVyXCI7XHJcbiAgICBsZXQgbW9kYWwgPSB0aGlzLmRpdihjbGFzc05hbWUpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlSGVhZGVyID0gdGhpcy5oZWFkaW5nKHRpdGxlLCAxLCBcIm1vZGFsLWhlYWRlclwiKTtcclxuICAgIGNvbnN0IG1lc3NhZ2VQYXJhZ3JhcGggPSB0aGlzLnBhcmFncmFwaChtZXNzYWdlLCBcIm1vZGFsLWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IHBvc2l0aXZlQnV0dG9uID0gdGhpcy5idXR0b24ocG9zaXRpdmVCdXR0b25MYWJlbCwgXCJtb2RhbC1jb25maXJtXCIpO1xyXG4gICAgY29uc3QgbmVnYXRpdmVCdXR0b24gPSB0aGlzLmJ1dHRvbihuZWdhdGl2ZUJ1dHRvbkxhYmVsLCBcIm1vZGFsLWNhbmNlbFwiKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25TZWN0aW9uID0gdGhpcy5kaXYoXCJtb2RhbC1idXR0b24tYXJlYVwiKTtcclxuXHJcbiAgICBpZiAobmVnYXRpdmVDYWxsYmFjayA9PT0gbnVsbCkge1xyXG4gICAgICBuZWdhdGl2ZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmVnYXRpdmUgcHJlc3NlZC5cIik7XHJcbiAgICAgICAgbW9kYWxXcmFwcGVyLnJlbW92ZSgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBvc2l0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3NpdGl2ZUNhbGxiYWNrKTtcclxuICAgIHBvc2l0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBwb3NpdGl2ZUNhbGxiYWNrKGUpO1xyXG4gICAgICBtb2RhbFdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICAgIG5lZ2F0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZWdhdGl2ZUNhbGxiYWNrKTtcclxuXHJcbiAgICBidXR0b25TZWN0aW9uLmFwcGVuZChwb3NpdGl2ZUJ1dHRvbiwgbmVnYXRpdmVCdXR0b24pO1xyXG4gICAgbW9kYWwuYXBwZW5kKHRpdGxlSGVhZGVyLCBtZXNzYWdlUGFyYWdyYXBoLCBidXR0b25TZWN0aW9uKTtcclxuICAgIG1vZGFsV3JhcHBlci5hcHBlbmQobW9kYWwpO1xyXG5cclxuICAgIC8vIHN0eWxpbmcgbW92ZWQgdG8gLmNzcyBwYWdlLlxyXG5cclxuICAgIHJldHVybiBtb2RhbFdyYXBwZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5IGEgYnJpZWYsIHVub2J0cnVzaXZlIHBvcC11cCBtZXNzYWdlIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cclxuICAgKiBAcGFyYW0geyp9IHRleHRDb250ZW50IC0gVGhlIHRleHQgdGhlIG1lc3NhZ2Ugc2hvdWxkIGRpc3BsYXkuXHJcbiAgICogQHBhcmFtIHsqfSBkdXJhdGlvbiAtIFRoZSBkdXJhdGlvbiBvZiB0aGUgbWVzc2FnZSBpbiBzZWNvbmRzLlxyXG4gICAqL1xyXG4gIHRvYXN0KHRleHRDb250ZW50LCBkdXJhdGlvbikge1xyXG4gICAgbGV0IHRvYXN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB0b2FzdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xyXG4gICAgdG9hc3RCb3guY2xhc3NMaXN0LmFkZChcInRvYXN0XCIpO1xyXG4gICAgdG9hc3RNZXNzYWdlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICB0b2FzdE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInRvYXN0LW1lc3NhZ2VcIik7XHJcblxyXG4gICAgdG9hc3RCb3guYXBwZW5kKHRvYXN0TWVzc2FnZSk7XHJcblxyXG4gICAgbGV0IHRvYXN0Qm94Q3NzID0gXCJwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMTB2aDtcIjtcclxuICAgIHRvYXN0Qm94Q3NzICs9IFwid2lkdGg6IDEwMHZ3O1wiO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gYGFuaW1hdGlvbjogZmFkZS1pbi1vdXQgJHtkdXJhdGlvbn1zO2A7XHJcbiAgICB0b2FzdEJveENzcyArPSBcInotaW5kZXg6IDk5OTk7XCI7XHJcblxyXG4gICAgbGV0IHRvYXN0TWVzc2FnZUNzcyA9XHJcbiAgICAgIFwibWFyZ2luOiAwIGF1dG87IHdpZHRoOiAzMDBweDsgZGlzcGxheTogYmxvY2s7IGJhY2tncm91bmQtY29sb3I6IGdyZXk7XCI7XHJcbiAgICB0b2FzdE1lc3NhZ2VDc3MgKz1cclxuICAgICAgXCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBib3JkZXItcmFkaXVzOiA1cHg7XCI7XHJcbiAgICB0b2FzdE1lc3NhZ2VDc3MgKz0gXCJjb2xvcjogd2hpdGU7XCI7XHJcblxyXG4gICAgdG9hc3RCb3guc3R5bGUuY3NzVGV4dCA9IHRvYXN0Qm94Q3NzO1xyXG4gICAgdG9hc3RNZXNzYWdlLnN0eWxlLmNzc1RleHQgPSB0b2FzdE1lc3NhZ2VDc3M7XHJcblxyXG4gICAgdG9hc3RCb3guYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIHRvYXN0Qm94LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodG9hc3RCb3gpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgc2VhcmNoIGZpZWxkIHdpdGggYSBzZWFyY2ggYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGFjZWhvbGRlciAtIEFkdmljZSB0byBnaXZlIGluIHNlYXJjaCBmaWVsZC5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBzZWFyY2gocGxhY2Vob2xkZXIgPSBcIlNlYXJjaFwiKSB7XHJcbiAgICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFwic2VhcmNoLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEZpZWxkV3JhcHBlciA9IHRoaXMuZGl2KFwic2VhcmNoLWZpZWxkLXdyYXBwZXJcIik7XHJcbiAgICBjb25zdCBzZWFyY2hGaWVsZCA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwic2VhcmNoLWZpZWxkXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IHRoaXMuZmFJY29uKFwiZmFzXCIsIFwiZmEtc2VhcmNoXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gdGhpcy5idXR0b24oXCJcIiwgXCJzZWFyY2hcIik7XHJcblxyXG4gICAgc2VhcmNoQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcclxuICAgIHNlYXJjaEZpZWxkV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIHNlYXJjaEZpZWxkLnR5cGUgPSBcInNlYXJjaFwiO1xyXG4gICAgc2VhcmNoRmllbGQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xyXG4gICAgc2VhcmNoRmllbGQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICBzZWFyY2hCdXR0b24uYXBwZW5kKHNlYXJjaEljb24pO1xyXG4gICAgc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcblxyXG4gICAgc2VhcmNoRmllbGRXcmFwcGVyLmFwcGVuZChzZWFyY2hGaWVsZCk7XHJcbiAgICBzZWFyY2hDb250YWluZXIuYXBwZW5kKHNlYXJjaEZpZWxkV3JhcHBlciwgc2VhcmNoQnV0dG9uKTtcclxuICAgIHJldHVybiBzZWFyY2hDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBzZWFyY2ggZmllbGQgZm9yIGxvY2F0aW9ucywgc28gaXQgaW5jbHVkZXMgYSBzZWFyY2ggZmllbGQgd2l0aCBcclxuICAgKiBhIGxvY2F0aW9uIGJ1dHRvbi5cclxuICAgKi9cclxuICBnZW9zZWFyY2gocGxhY2Vob2xkZXI9XCJcIikge1xyXG4gICAgY29uc3Qgc2VhcmNoRWxlbSA9IHRoaXMuc2VhcmNoKHBsYWNlaG9sZGVyKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uQnV0dG9uID0gdGhpcy5idXR0b24oXCJcIiwgXCJsb2NhdGlvblwiKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uSWNvbiA9IHRoaXMuZmFJY29uKFwiZmFzXCIsIFwiZmEtbWFwLW1hcmtlci1hbHRcIilcclxuXHJcbiAgICBsb2NhdGlvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgbG9jYXRpb25CdXR0b24uYXBwZW5kKGxvY2F0aW9uSWNvbik7XHJcbiAgICBsb2NhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVXRpbGl0eS5nZXRHZW9sb2NhdGlvbik7XHJcbiAgICBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoXCIpLmJlZm9yZShsb2NhdGlvbkJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIHNlYXJjaEVsZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdG9vbHRpcC1lc3F1ZSBtZXNzYWdlIHdoaWNoIGhvdmVycyBiZWxvdywgcmVsYXRpdmUgdG8gYW4gZWxlbWVudCdzIHBvc2l0aW9uLCBcclxuICAgKiBmb3IgYSBwcm92aWRlZCBkdXJhdGlvbi4gT25seSBhdHRhY2ggdG8gcmVsYXRpdmVseS1wb3NpdGlvbmVkIGVsZW1lbnRzLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IChlbGVtKSAtIFBvc2l0aW9uZWQgZWxlbWVudCB0byBhdHRhY2ggdG8uIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAobXNnKSAtIE1lc3NhZ2UgdG8gZGlzcGxheS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gKHMpIC0gTnVtYmVyIG9mIHNlY29uZHMgdG8gcGVyc2lzdCBtZXNzYWdlLiAwIGZvciBwZXJzaXN0ZW50XHJcbiAgICogdW50aWwgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgdG9vbHRpcC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRpc21pc3NPbkV4dGVybmFsQ2xpY2sgLSBTaG91bGQgdGhlIHRvb2x0aXAgYmUgZGlzbWlzc2VkIGJ5XHJcbiAgICogY2xpY2tpbmcgb3V0c2lkZSBvZiB0aGUgZWxlbWVudD8gVHJ1ZSBieSBkZWZhdWx0LlxyXG4gICAqL1xyXG4gIHRvb2x0aXAoZWxlbSwgbXNnLCBzLCBkaXNtaXNzT25FeHRlcm5hbENsaWNrID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgdG9vbHRpcENvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJ0b29sdGlwXCIpO1xyXG4gICAgZm9yIChsZXQgbXNnU2VnbWVudCBvZiBtc2cuc3BsaXQoXCJcXG5cIikpIHtcclxuICAgICAgY29uc3QgdG9vbHRpcE1zZyA9IGNvbXBvbmVudC5wKG1zZ1NlZ21lbnQudHJpbSgpLCBcInRvb2x0aXAtbXNnXCIpO1xyXG4gICAgICB0b29sdGlwQ29udGFpbmVyLmFwcGVuZCh0b29sdGlwTXNnKTtcclxuICAgIH1cclxuXHJcbiAgICB0b29sdGlwQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAxMDAlOyB3aWR0aDogZml0LWNvbnRlbnRcIjtcclxuICAgIC8vIHRoaXMgZW5zdXJlcyB0aGF0IHRoZSBsYXRlc3QgdG9vbHRpcHMgYWx3YXlzIGFwcGVhciBvbiB0aGUgdG9wLlxyXG4gICAgdG9vbHRpcENvbnRhaW5lci5zdHlsZS56SW5kZXggPSAxMCArIDEwICogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vbHRpcFwiKS5sZW5ndGgpO1xyXG5cclxuICAgIGVsZW0uYXBwZW5kKHRvb2x0aXBDb250YWluZXIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRpc21pc3NPbkV4dGVybmFsQ2xpY2spIHtcclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCAhPT0gdG9vbHRpcENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBjbGlja2VkOyByZW1vdmluZyB0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHAudGhlbigoKSA9PiB7XHJcbiAgICAgIGlmIChzICE9PSAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLnRvb2x0aXBcIikpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaW1lciBleHBpcmVkOyByZW1vdmluZyB0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICB0b29sdGlwQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHMgKiAxMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggYSBsb2FkaW5nIG1lc3NhZ2UgdG8gYSBnaXZlbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsZW0gLSBFbGVtZW50IHRvIGF0dGFjaCBsb2FkaW5nIG1lc3NhZ2UgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1zZyAtIE1lc3NhZ2UgdG8gcGxheTsgZGVmYXVsdCBpcyBcImxvYWRpbmdcIi5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBsb2FkaW5nTWVzc2FnZShwYXJlbnRFbGVtLCBtc2c9XCJMb2FkaW5nXCIpIHtcclxuICAgIGNvbnN0IGxvYWRpbmdCYXNlID0gY29tcG9uZW50LnAobXNnLCBcImxvYWRpbmctdGV4dFwiKTtcclxuICAgIGNvbnN0IGxvYWRpbmdEb3RzID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImxvYWRpbmctZG90c1wiKTtcclxuXHJcbiAgICBsb2FkaW5nQmFzZS5hcHBlbmQobG9hZGluZ0RvdHMpO1xyXG4gICAgcGFyZW50RWxlbS5hcHBlbmQobG9hZGluZ0Jhc2UpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRpbmdBbmltYXRpb24gPSB7XHJcbiAgICAgIGlkOiAwLFxyXG4gICAgICBsb2FkaW5nVGV4dEJhc2U6IHBhcmVudEVsZW0ucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLXRleHRcIiksXHJcbiAgICAgIGxvYWRpbmdUZXh0RG90czogcGFyZW50RWxlbS5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctZG90c1wiKSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFNldHMgYW4gaW50ZXJ2YWwsIHVzaW5nIGl0IHRvIHBsYXkgYSBzaW1wbGUgYW5pbWF0aW9uLlxyXG4gICAgICAgKi9cclxuICAgICAgcGxheSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0QmFzZS50ZXh0Q29udGVudCA9IG1zZztcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0QmFzZS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tb3BhY2l0eVwiKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5sb2FkaW5nVGV4dERvdHMudGV4dENvbnRlbnQgIT09IFwiLi4uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nVGV4dERvdHMudGV4dENvbnRlbnQgKz0gXCIuXCI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNzUwKTtcclxuICAgICAgfSxcclxuICAgICAgc3RvcCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLmNsYXNzTGlzdC5hZGQoXCJuby1vcGFjaXR5XCIpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBsb2FkaW5nQW5pbWF0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50OyIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XHJcblxyXG4gIGdyaWQ7XHJcbiAgc2l6ZTtcclxuICBzaGlwcztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNpemUgPSAxMDtcclxuICAgIHRoaXMuZ3JpZCA9IFtdO1xyXG4gICAgdGhpcy5zaGlwcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcclxuICAgICAgdGhpcy5ncmlkW2ldID0gW107XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplOyBqKyspIHtcclxuICAgICAgICB0aGlzLmdyaWRbaV1bal0gPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuZCBwbGFjZXMgYSBnaXZlbiBzaGlwIGJhc2VkIG9uIHRoZSBjb29yZGluYXRlc1xyXG4gICAqIGFzc2lnbmVkIHRvIHRoZSBzaGlwLiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gdGhlIGdpdmVuIGxlbmd0aCBvZiB0aGUgc2hpcC4gXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIHRoZSByb3cgdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQgY29vcmRpbmF0ZXMuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCAtIHRoZSBjb2x1bW4gdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQgY29vcmRpbmF0ZXMuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCAtIFBsYWNlIHRoZSBzaGlwIGhvcml6b250YWxseT9cclxuICAgKiBAcmV0dXJuIHtTaGlwfSAtIFRoZSBzaGlwIHRoYXQgd2FzIHBsYWNlZCwgb3IgbnVsbCBpZiB0aGUgc2hpcCBmYWlsZWRcclxuICAgKiB0byBiZSBwbGFjZWQuXHJcbiAgICovXHJcbiAgcGxhY2VTaGlwKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsKSB7XHJcbiAgICAvLyByZXR1cm4gbnVsbCBpZiBvdXQgb2YgYm91bmRzXHJcbiAgICBpZiAocm93ICsgbGVuZ3RoID4gdGhpcy5ncmlkLmxlbmd0aFxyXG4gICAgICB8fCBjb2wgKyBsZW5ndGggPiB0aGlzLmdyaWQubGVuZ3RoXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICAvLyBjaGVjayB0byBzZWUgdGhhdCB0aGUgZ2l2ZW4gcm93IGFuZCBjb2wgKyBsZW5ndGggYXJlIG5vdCBhbHJlYWR5IG9jY3VwaWVkLlxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCAocm93ICsgbGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtpXVtjb2xdICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCAoY29sICsgbGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtyb3ddW2ldICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBvdGhlcndpc2Ugd2UncmUgZ29vZCB0byBwbGFjZSBhIHNoaXAuXHJcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5zaGlwcy5sZW5ndGg7XHJcblxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCAocm93ICsgc2hpcC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICB0aGlzLmdyaWRbaV1bY29sXSA9IGlkO1xyXG4gICAgICAgIHNoaXAuc3RhdHVzW2Ake2l9LCR7Y29sfWBdID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCAoY29sICsgc2hpcC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICB0aGlzLmdyaWRbcm93XVtpXSA9IGlkO1xyXG4gICAgICAgIHNoaXAuc3RhdHVzW2Ake3Jvd30sJHtpfWBdID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XHJcblxyXG4gICAgcmV0dXJuIHNoaXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMZXQgdGhlIGdhbWVib2FyZCByZWNlaXZlIGFuIGF0dGFjayBhdCB0aGUgZ2l2ZW4gcm93IGFuZCBjb2x1bW4uIFxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCBcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgaGl0LiAxIGlmIGEgaGl0IHdhcyBzdWNjZXNzZnVsLCAwXHJcbiAgICogaWYgdGhlIGhpdCBtaXNzZWQsIGFuZCAtMSBpZiB0aGUgYXJlYSB3YXMgYWxyZWFkeSBoaXQuIFxyXG4gICAqL1xyXG4gIHJlY2VpdmVBdHRhY2socm93LCBjb2wpIHtcclxuICAgIGlmICh0eXBlb2Ygcm93ICE9PSBcIm51bWJlclwiIHx8IGNvbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHByb3ZpZGUgcm93IGFuZCBjb2wgY29vcmRpbmF0ZXMuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzaGlwSWQgPSB0aGlzLmdyaWRbcm93XVtjb2xdO1xyXG5cclxuICAgIGlmIChzaGlwSWQgPT09IFwieFwiIHx8IHNoaXBJZCA9PT0gXCJvXCIpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfSBlbHNlIGlmIChzaGlwSWQgPT09IFwiXCIpIHtcclxuICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXSA9IFwib1wiO1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF0gPSBcInhcIjtcclxuICAgICAgdGhpcy5zaGlwc1tzaGlwSWRdLmhpdChyb3csIGNvbCk7XHJcblxyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEdyaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ncmlkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGF2ZSBhbGwgc2hpcHMgYmVlbiBzdW5rIG9uIHRoZSBnYW1lYm9hcmQ/XHJcbiAgICovXHJcbiAgYWxsU2hpcHNTdW5rKCkge1xyXG4gICAgbGV0IHN0YXR1cyA9IHRydWU7XHJcbiAgICB0aGlzLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xyXG4gICAgICAgIHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3RhdHVzO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBCYXR0bGVzaGlwRWxlbWVudHMgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgYSBnYW1lIHNlc3Npb24gZm9yIGJhdHRsZXNoaXAuIEtlZXBzIHRyYWNrIG9mIHBsYXllcnMuXHJcbiAqIENhbiBzdGFydCwgZW5kLCBhbmQgcmVzZXQgdGhlIGdhbWUuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVEUgPSB7XHJcbiAgcDF0dXJuOiBcIlBsYXllciAxJ3MgdHVyblwiLFxyXG4gIHAydHVybjogXCJQbGF5ZXIgMidzIHR1cm5cIixcclxuICBlbmRlZDogXCJHYW1lIGVuZGVkLlwiLFxyXG4gIHAxdmljdG9yeTogXCJQbGF5ZXIgMSB3aW5zLlwiLFxyXG4gIHAydmljdG9yeTogXCJQbGF5ZXIgMiB3aW5zLlwiLFxyXG4gIHJlc3RhcnQ6IFwiUmVzdGFydGluZyBnYW1lLi4uXCIsXHJcbiAgcGxheWluZzogXCJHYW1lIGFjdGl2ZS5cIixcclxuICBnYW1lUHJvbXB0OiBcIldlbGNvbWUuIERyYWcgc2hpcHMgb250byBnYW1lYm9hcmQuIENsaWNrICh3aGVuIHBsYWNlZCk6IFJvdGF0ZS5cIlxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcclxuICBcclxuICBzdGF0aWMgI2luc3RhbmNlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcGxheWVycyBpbnZvbHZlZCBpbiB0aGUgZ2FtZS5cclxuICAgKi9cclxuICBwbGF5ZXJzO1xyXG5cclxuICAvKipcclxuICAgKiBJcyBpdCBwbGF5ZXIgMSdzIHR1cm4/IFxyXG4gICAqL1xyXG4gIHAxdHVybjtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgb2YgdGhlIGxlbmd0aHMgb2YgZWFjaCBzaGlwIHRoYXQgdGhlIHBsYXllciB3aWxsIGhhdmUgaW4gdGhlaXIgYXJzZW5hbC5cclxuICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICovXHJcbiAgc2hpcExlbmd0aHM7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgZ2FtZS5cclxuICAgKiBAcGFyYW0ge1BsYXllcltdfSBwbGF5ZXJzIC0gQW4gYXJyYXkgb2YgdGhlIHBsYXllcnMgaW4gdGhlIGdhbWUuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBwMXN0YXJ0IC0gU2hvdWxkIHBsYXllciAxIHN0YXJ0IGZpcnN0PyBUcnVlIGJ5IGRlZmF1bHQuXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGxheWVycywgcDFzdGFydCA9IHRydWUsIHNoaXBMZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdKSB7XHJcbiAgICBpZiAoR2FtZU1hbmFnZXIuI2luc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIEdhbWVNYW5hZ2VyLiNpbnN0YW5jZTtcclxuICAgIH0gXHJcblxyXG4gICAgR2FtZU1hbmFnZXIuI2luc3RhbmNlID0gdGhpcztcclxuICAgIHRoaXMucGxheWVycyA9IHBsYXllcnM7XHJcbiAgICB0aGlzLnAxdHVybiA9IHAxc3RhcnQ7XHJcbiAgICB0aGlzLnNoaXBMZW5ndGhzID0gc2hpcExlbmd0aHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgZ2FtZS5cclxuICAgKi9cclxuICBzdGFydEdhbWUoKSB7XHJcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICBpZiAocGxheWVyLmNwdSkge1xyXG4gICAgICAgIHRoaXMuI2NwdVBsYWNlU2hpcHMocGxheWVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAjY3B1UGxhY2VTaGlwcyhwbGF5ZXIpIHtcclxuICAgIHRoaXMuc2hpcExlbmd0aHMuZm9yRWFjaCgobGVuZ3RoLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgc3RhdHVzID0gbnVsbDtcclxuICAgICAgbGV0IHJvdztcclxuICAgICAgbGV0IGNvbDtcclxuICAgICAgbGV0IHZlcnRpY2FsO1xyXG5cclxuICAgICAgd2hpbGUgKHN0YXR1cyA9PT0gbnVsbCkge1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgICAgICAvLyB3aGVuIHRlc3RpbmcgdGhlIGdhbWUgcGhhc2UsIG92ZXJyaWRlIHJvdyBhbmQgY29sIHRvIGJlIDAsIDAgdG8gdGVzdFxyXG4gICAgICAgIC8vIHZpY3RvcnkgcGhhc2UuXHJcbiAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHBsYXllci5nYW1lYm9hcmQuc2l6ZS0xKSk7XHJcbiAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHBsYXllci5nYW1lYm9hcmQuc2l6ZS0xKSk7XHJcbiAgICAgICAgdmVydGljYWwgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHN0YXR1cyA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQmF0dGxlc2hpcEVsZW1lbnRzLnBsYWNlU2hpcE1hbnVhbGx5KGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsLCB0cnVlLCBgY3B1LXNoaXAke2luZGV4fWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiLy9qcyBcclxuaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCB7IEdBTUVfU1RBVEUgfSBmcm9tIFwiLi9nYW1lbWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vZ2FtZW1hbmFnZXJcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbi8vY3NzXHJcbmltcG9ydCBcIi4uL2Nzcy9yZXNldC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2luZGV4LmNzc1wiO1xyXG5cclxuLy8gcGVyZm9ybSBhbnkgRE9NIGNoYW5nZSBhY3Rpb24gaW4geW91ciBwYWdlLiBlLmcuIHNob3cvaGlkZVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGVsZW1lbnRzIGZvciBCYXR0bGVzaGlwLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhdHRsZXNoaXBFbGVtZW50cyB7XHJcblxyXG4gICNkaWFsb2dIb2xkZXI7XHJcbiAgI2dhbWVDb250YWluZXI7XHJcbiAgZ2FtZU1hbmFnZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWVNYW5hZ2VyKSB7XHJcbiAgICB0aGlzLmdhbWVNYW5hZ2VyID0gZ2FtZU1hbmFnZXI7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIoKSB7XHJcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJ0aXRsZS1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gY29tcG9uZW50LmhlYWRpbmcoXCJCYXR0bGVzaGlwc1wiLCAxKTtcclxuICAgIGNvbnN0IGF1dGhvckxhYmVsID0gY29tcG9uZW50LnAoXCJieSBEYW4gVC5cIiwgMik7XHJcblxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKHRpdGxlTGFiZWwsIGF1dGhvckxhYmVsKTtcclxuXHJcbiAgICByZXR1cm4gdGl0bGVDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBnYW1lQXJlYSgpIHtcclxuICAgIHRoaXMuI2dhbWVDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZ2FtZS1hcmVhXCIpO1xyXG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImdhbWVib2FyZC1hcmVhXCIpO1xyXG4gICAgY29uc3QgY29udHJvbERpYWxvZ0NvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJjb250cm9scy1hcmVhXCIpO1xyXG5cclxuICAgIHRoaXMuI2dhbWVDb250YWluZXIuYXBwZW5kKGdhbWVib2FyZENvbnRhaW5lciwgY29udHJvbERpYWxvZ0NvbnRhaW5lcik7XHJcblxyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZCh0aGlzLiNnYW1lYm9hcmQoXCJQbGF5ZXJcIiwgXCJwMVwiKSwgdGhpcy4jZ2FtZWJvYXJkKFwiQ1BVXCIsIFwicDJcIikpO1xyXG5cclxuICAgIGNvbnRyb2xEaWFsb2dDb250YWluZXIuYXBwZW5kKHRoaXMuI2RpYWxvZygpLCB0aGlzLiNzaGlwUGxhY2VtZW50KCksIHRoaXMuI3N0YXJ0R2FtZVByb21wdCgpKTtcclxuXHJcbiAgICB0aGlzLiNlbmFibGVEcmFnZ2luZ0FuZFJvdGF0aW9uKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuI2dhbWVDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYSBjbGlja2FibGUgZ3JpZCBiYXNlZCBvbiB0aGUgZ2FtZSBtYW5hZ2VyJ3MgZ2FtZWJvYXJkIHNpemUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXllck5hbWUgOiB0aGUgbmFtZSBvZiB0aGUgcGxheWVyOyB1c2VkIGFzIGEgY2xhc3MgbmFtZSB0byBcclxuICAgKiBpZGVudGlmeSB0aGUgZ2FtZWJvYXJkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgOiBBZGRpdGlvbmFsIGNsYXNzIG5hbWVzIHRvIGlkZW50aWZ5IHRoZSBnYW1lYm9hcmQgYnkuXHJcbiAgICovXHJcbiAgI2dhbWVib2FyZChwbGF5ZXJOYW1lLCBjbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGNvbXBvbmVudC5kaXYoXCJnYW1lYm9hcmRcIiwgY2xhc3NOYW1lKTtcclxuICAgIGNvbnN0IGdhbWVib2FyZEdyaWQgPSBjb21wb25lbnQuZGl2KFwiZ2FtZWJvYXJkLWdyaWRcIik7XHJcblxyXG4gICAgY29uc3QgZ3JpZFNpemUgPSB0aGlzLmdhbWVNYW5hZ2VyLnBsYXllcnNbMF0uZ2FtZWJvYXJkLnNpemU7XHJcbiAgICBjb25zdCBudW1iZXJDZWxsID0gY29tcG9uZW50LmRpdihcImNlbGxcIiwgXCJudW1iZXJpbmdcIik7XHJcblxyXG4gICAgZ2FtZWJvYXJkR3JpZC5wcmVwZW5kKGNvbXBvbmVudC5kaXYoXCJjZWxsXCIsIFwiYmxhbmtcIikpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSByb3cgbnVtYmVyaW5nXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcclxuICAgICAgbnVtYmVyQ2VsbC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgICBnYW1lYm9hcmRHcmlkLmFwcGVuZChudW1iZXJDZWxsLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlIGNvbHVtbiBudW1iZXJpbmcgYW5kIGNlbGxzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcclxuICAgICAgbnVtYmVyQ2VsbC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG5cclxuICAgICAgZ2FtZWJvYXJkR3JpZC5hcHBlbmQobnVtYmVyQ2VsbC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkU2l6ZTsgaisrKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiLCBcInNlbGVjdGFibGVcIik7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGo7XHJcbiAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICAgIGdhbWVib2FyZEdyaWQuYXBwZW5kKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZWJvYXJkLmFwcGVuZChnYW1lYm9hcmRHcmlkKTtcclxuXHJcbiAgICAvLyBBcHBseSBoZWFkZXJzIGZvciB0aGUgZ2FtZWJvYXJkXHJcbiAgICBnYW1lYm9hcmQucHJlcGVuZChjb21wb25lbnQuaGVhZGluZyhwbGF5ZXJOYW1lLCAyLCBcImdhbWVib2FyZC1vd25lclwiKSk7XHJcblxyXG4gICAgcmV0dXJuIGdhbWVib2FyZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGRpYWxvZyBtZXNzYWdlLCB3aGljaCBpcyB1c2VkIHRvIFxyXG4gICAqIGdpdmUgdGhlIHVzZXIgZGlyZWN0aW9ucyBvbiBlYWNoIHBoYXNlIG9mIHRoZSBnYW1lLlxyXG4gICAqL1xyXG4gICNkaWFsb2coKSB7XHJcbiAgICBsZXQgZGlhbG9nQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImRpYWxvZ1wiKTtcclxuICAgIGxldCBkaWFsb2dNc2cgPSBjb21wb25lbnQucChcIldlbGNvbWUuXCIsIFwiZGlhbG9nLW1zZ1wiKTtcclxuICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmQoZGlhbG9nTXNnKTtcclxuXHJcbiAgICB0aGlzLiNkaWFsb2dIb2xkZXIgPSBkaWFsb2dDb250YWluZXI7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ0NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHNldERpYWxvZyhtZXNzYWdlKSB7XHJcbiAgICB0aGlzLiNkaWFsb2dIb2xkZXIucXVlcnlTZWxlY3RvcihcIi5kaWFsb2ctbXNnXCIpLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhbiBpbnZlbnRvcnkgb2Ygc2hpcHMgYW5kIGxldHMgdGhlbSBiZSBkcmFnZ2VkIGJ5IHRoZSBwbGF5ZXIuXHJcbiAgICovXHJcbiAgI3NoaXBQbGFjZW1lbnQoKSB7XHJcbiAgICBsZXQgc2hpcEludmVudG9yeSA9IGNvbXBvbmVudC5kaXYoXCJzaGlwLXBsYWNlclwiKTtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0gY29tcG9uZW50LmhlYWRpbmcoXCJTZWxlY3QgU2hpcFwiLCAzKTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBjb21wb25lbnQuZGl2KFwic2hpcC1zZWxlY3Rpb25cIik7XHJcblxyXG4gICAgdGhpcy5nYW1lTWFuYWdlci5zaGlwTGVuZ3Rocy5mb3JFYWNoKChzaGlwTGVuLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgc2hpcCA9IGNvbXBvbmVudC5kaXYoXCJzaGlwXCIsIFwiZHJhZ2dhYmxlXCIpO1xyXG4gICAgICBzaGlwLmlkID0gYHBsYXllci1zaGlwJHtpbmRleH1gO1xyXG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiKTtcclxuICAgICAgICBzaGlwLmFwcGVuZChjZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZWN0aW9uLmFwcGVuZChzaGlwKTtcclxuICAgIH0pXHJcblxyXG4gICAgc2hpcEludmVudG9yeS5hcHBlbmQoaGVhZGVyLCBzZWxlY3Rpb24pO1xyXG5cclxuICAgIHJldHVybiBzaGlwSW52ZW50b3J5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udGFpbnMgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byBlbmFibGUgZHJhZyAnbicgZHJvcCBvbiB0aGUgZ2FtZWJvYXJkIHdpdGggcm90YXRpb24uXHJcbiAgICogV29ya3Mgd2l0aCB0aGUgZHJhZyBhbmQgZHJvcCBBUEksIHNvIGl0IHdvcmtzIHRvIGFzc2lnbiBjYWxsYmFja3MgdG8gdGhlIFxyXG4gICAqIGRyYWdnYWJsZSBpdGVtcywgYW5kIGFsbCB0aGUgZHJvcHBhYmxlIHpvbmUgaXQgcGVydGFpbnMgdG8uIEluIHRoaXMgY2FzZSxcclxuICAgKiB0aGUgc2hpcHMgYXJlIHRoZSBkcmFnZ2FibGVzLCBhbmQgdGhlIGRyb3Agem9uZXMgYXJlIGFsbCB0aGUgY2VsbHMgb2YgXHJcbiAgICogcGxheWVyIDEncyBnYW1lYm9hcmQuXHJcbiAgICovXHJcbiAgI2VuYWJsZURyYWdnaW5nQW5kUm90YXRpb24oKSB7XHJcbiAgICBjb25zdCByZW1vdmVEcmFnR3VpZGUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlXCIpXHJcbiAgICAgICAgLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZC1kcmFnXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50RHJhZ2dlZExlbmd0aDtcclxuICAgIGxldCBjdXJyZW50RHJhZ2dlZFNoaXBJZDtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLiNnYW1lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlXCIpLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLnRhcmdldC5pZCk7XHJcblxyXG4gICAgICAgIGN1cnJlbnREcmFnZ2VkTGVuZ3RoID0gZS50YXJnZXQuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICAgICAgY3VycmVudERyYWdnZWRTaGlwSWQgPSBlLnRhcmdldC5pZCA/PyBlLnRhcmdldC5kYXRhc2V0LnNoaXA7XHJcbiAgICAgICAgLy8gYmxhbmsgaW1hZ2VcclxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGltZywgMCwgMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWxsIGNlbGxzIHRoYXQgYXJlIHNlbGVjdGFibGUgYXJlIGRyb3BwYWJsZSBhcmVhcy5cclxuICAgIHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVcIikuZm9yRWFjaChjZWxsID0+IHtcclxuXHJcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgICAgICBsZXQgaG92ZXJDZWxsID0gVXRpbGl0eS5nZXRNYXRjaGluZ1BhcmVudChlLnRhcmdldCwgXCIuc2VsZWN0YWJsZVwiKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudERyYWdnZWRTaGlwSWR9YCkuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcblxyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50RHJhZ2dlZFNoaXBJZH1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKSkge1xyXG4gICAgICAgICAgLy8gYXBwbHkgdmVydGljYWwgZ3VpZGUuXHJcbiAgICAgICAgICBsZXQgY29sID0gaG92ZXJDZWxsLmRhdGFzZXQuY29sO1xyXG4gICAgICAgICAgbGV0IGNlbGxzQ29sID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLWNvbD1cIiR7Y29sfVwiXWApKTtcclxuICAgICAgICAgIGxldCBpbmRleCA9IGNlbGxzQ29sLmluZGV4T2YoaG92ZXJDZWxsKTtcclxuXHJcbiAgICAgICAgICBpZiAoaW5kZXggKyBjdXJyZW50RHJhZ2dlZExlbmd0aCA8PSBjZWxsc0NvbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBjdXJyZW50RHJhZ2dlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gbm90IGEgdmFsaWQgcGxhY2VtZW50LlxyXG4gICAgICAgICAgICAgIGlmIChjZWxsc0NvbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJvY2N1cGllZFwiKVxyXG4gICAgICAgICAgICAgICAgJiYgY2VsbHNDb2xbaV0uZGF0YXNldC5zaGlwICE9PSBjdXJyZW50RHJhZ2dlZFNoaXBJZCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRHJhZ0d1aWRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNlbGxzQ29sW2ldLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcmFnXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGFwcGx5IGhvcml6b250YWwgZ3VpZGVcclxuICAgICAgICAgIGxldCByb3cgPSBob3ZlckNlbGwuZGF0YXNldC5yb3c7XHJcbiAgICAgICAgICBsZXQgY2VsbHNSb3cgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gY2VsbHNSb3cuaW5kZXhPZihob3ZlckNlbGwpO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG92ZXJpbmcgb3ZlciBpbmRleDogXCIgKyBpbmRleCk7XHJcblxyXG4gICAgICAgICAgaWYgKGluZGV4ICsgY3VycmVudERyYWdnZWRMZW5ndGggPD0gY2VsbHNSb3cubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIC8vIG5vdCBhIHZhbGlkIHBsYWNlbWVudC5cclxuICAgICAgICAgICAgICBpZiAoY2VsbHNSb3dbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib2NjdXBpZWRcIilcclxuICAgICAgICAgICAgICAgICYmIGNlbGxzUm93W2ldLmRhdGFzZXQuc2hpcCAhPT0gY3VycmVudERyYWdnZWRTaGlwSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyYWghXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRHJhZ0d1aWRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBjZWxsc1Jvd1tpXS5jbGFzc0xpc3QuYWRkKFwidmFsaWQtZHJhZ1wiKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7aW5kZXgsIGN1cnJlbnREcmFnZ2VkTGVuZ3RoLCBpfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyB3aGVuIHRoZSBkcmFnIGVsZW1lbnQgbGVhdmVzIGRyb3BwYWJsZSB6b25lLCByZW1vdmUgYWxsIHZhbGlkIGRyYWdcclxuICAgICAgLy8gaXQnbGwganVzdCBiZSByZWNyZWF0ZWQgYnkgdmFsaWQtZHJhZy5cclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIHJlbW92ZURyYWdHdWlkZSk7XHJcblxyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudERyYWdnZWRTaGlwSWR9YCkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgICAgLy8gb25seSB3aGVuIHRoZSBhcmVhIGlzIGEgdmFsaWQtZHJhZyBkbyB3ZSBhZGQgaXQgaW4uIG90aGVyd2lzZSwgbm9wZS5cclxuICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInZhbGlkLWRyYWdcIikpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZW1vdmVEcmFnR3VpZGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuXHJcbiAgICAgICAgLy8gYmVmb3JlIG1vdmluZyB0aGUgc2hpcCwgZGV0ZXJtaW5lIGlmIGl0IGhhcyBiZWVuIHBsYWNlZCBhbHJlYWR5Li4uIFxyXG4gICAgICAgIC8vIHRoaXMgaXMgdHJ1ZSBpZiB0aGUgc2hpcCBpcyBpbnNpZGUgYSBzZWxlY3RhYmxlIGNlbGwuXHJcbiAgICAgICAgbGV0IGxhc3RQbGFjZWRMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWxlY3RhYmxlICMke2lkfWApO1xyXG5cclxuICAgICAgICAvLyBpZiBzbyB3ZSBuZWVkIHRvIHJlbW92ZSBvY2N1cGllZCBmcm9tIHN1Y2ggY2VsbHMuXHJcbiAgICAgICAgaWYgKGxhc3RQbGFjZWRMb2NhdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgbGV0IGNlbGxzO1xyXG4gICAgICAgICAgbGV0IHZlcnRpY2FsID0gbGFzdFBsYWNlZExvY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpO1xyXG5cclxuICAgICAgICAgIC8vIHBhcmVudE5vZGUgaXMgdGhlIGNlbGwuXHJcbiAgICAgICAgICBsYXN0UGxhY2VkTG9jYXRpb24gPSBsYXN0UGxhY2VkTG9jYXRpb24ucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICAgICAgbGV0IGNvbCA9IGxhc3RQbGFjZWRMb2NhdGlvbi5kYXRhc2V0LmNvbDtcclxuICAgICAgICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtY29sPVwiJHtjb2x9XCJdYCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG9jY3VwaWVkIG1hcmtpbmcgZnJvbSB0aG9zZSBjZWxscy5cclxuICAgICAgICAgICAgbGV0IHJvdyA9IGxhc3RQbGFjZWRMb2NhdGlvbi5kYXRhc2V0LnJvdztcclxuICAgICAgICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxldCBpbmRleCA9IGNlbGxzLmluZGV4T2YobGFzdFBsYWNlZExvY2F0aW9uKTtcclxuXHJcbiAgICAgICAgICAvLyBjb2xvciB0aGUgc3Vic2VxdWVudCBjZWxscy5cclxuICAgICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgICAgIGNlbGxzW2ldLmRhdGFzZXQuc2hpcCA9IFwiXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGxhY2VkQ2VsbCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIC8vIG1vdmUgdGhlIHNoaXBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5jbGFzc0xpc3QuYWRkKFwic2hpcC1wbGFjZWRcIik7XHJcbiAgICAgICAgcGxhY2VkQ2VsbC5hcHBlbmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkpO1xyXG5cclxuICAgICAgICBsZXQgdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICBsZXQgY2VsbHM7XHJcblxyXG4gICAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgbGV0IGNvbCA9IHBsYWNlZENlbGwuZGF0YXNldC5jb2w7XHJcbiAgICAgICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1jb2w9XCIke2NvbH1cIl1gKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGdldCB0aGUgcm93LCBpbmRleCwgYW5kIHBsYWNlIHRoZXJlYWZ0ZXIgb2YgdGhlIHBsYWNlZCBjZWxsLlxyXG4gICAgICAgICAgbGV0IHJvdyA9IHBsYWNlZENlbGwuZGF0YXNldC5yb3c7XHJcbiAgICAgICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke3Jvd31cIl1gKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSBjZWxscy5pbmRleE9mKHBsYWNlZENlbGwpO1xyXG5cclxuICAgICAgICAvLyBjb2xvciB0aGUgc3Vic2VxdWVudCBjZWxscy5cclxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIGN1cnJlbnREcmFnZ2VkTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgIGNlbGxzW2ldLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWxsb3cgdGhlIHNoaXAgdG8gYmUgcm90YXRlZC5cclxuICAgICAgICBzZWxmLiNhbGxvd1BsYWNlZFNoaXBSb3RhdGlvbigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGNvZGUgdG8gcmV0dXJuIHNoaXAgdG8gaW52ZW50b3J5XHJcbiAgICAgIHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlclwiKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlclwiKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuY2xhc3NMaXN0LnJlbW92ZShcInNoaXAtcGxhY2VkXCIpO1xyXG4gICAgICAgICAgZS50YXJnZXQuYXBwZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyBmb3Igc2hpcHMgdG8gYmUgcm90YXRlZDsgdGhpcyBpcyBpbnZva2VkIGVhY2ggdGltZSBhIHNoaXAgaXMgcGxhY2VkLFxyXG4gICAqIHRvIGFsbG93IHNoaXBzLCBvbiB0aGUgZ2FtZWJvYXJkLCB0byBiZSByb3RhdGVkLlxyXG4gICAqL1xyXG4gICNhbGxvd1BsYWNlZFNoaXBSb3RhdGlvbigpIHtcclxuICAgIGxldCBncmlkU2l6ZSA9IHRoaXMuZ2FtZU1hbmFnZXIucGxheWVyc1swXS5nYW1lYm9hcmQuZ3JpZC5sZW5ndGg7XHJcbiAgICAvLyBhbGxvdyByb3RhdGlvbiBvZiBwbGFjZWQgc2hpcHNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC5kcmFnZ2FibGUuc2hpcC1wbGFjZWRcIikuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgaWYgKHNoaXAub25jbGljayA9PT0gbnVsbCkge1xyXG4gICAgICAgIHNoaXAub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgIGxldCB2ZXJ0aWNhbE9uID0gc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgIGxldCBjZWxsID0gc2hpcC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwLmNoaWxkRWxlbWVudENvdW50O1xyXG5cclxuICAgICAgICAgIGxldCByb3dJbmRleCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpO1xyXG4gICAgICAgICAgbGV0IGNvbEluZGV4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbCk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coeyByb3dJbmRleCwgc2hpcExlbmd0aCwgZ3JpZFNpemUgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKHJvd0luZGV4ICsgc2hpcExlbmd0aCA+IGdyaWRTaXplIHx8IGNvbEluZGV4ICsgc2hpcExlbmd0aCA+IGdyaWRTaXplKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBjaGVjayBpZiBhbnkgc2hpcHMgYXJlIGluIHRoZSB3YXkgb2YgdGhlIHJvdGF0aW9uLlxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IHJvd0luZGV4ICsgMTsgaSA8IHJvd0luZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtcm93PVwiJHtpfVwiXWApKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBjb2xJbmRleDsgaiA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGNlbGxzW2pdLmNsYXNzTGlzdC5jb250YWlucyhcIm9jY3VwaWVkXCIpICYmIGNlbGxzW2pdLmRhdGFzZXQuc2hpcCAhPT0gc2hpcC5pZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IHByb2NlZWQuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgZW5vdWdoIHNwYWNlIHRvIG1vdmUgaXQgdmVydGljYWxseSwgYmFzZWQgb24gdGhlIHNoaXAgbGVuZ3RoLlxyXG4gICAgICAgICAgLy8gMSBubyBzaGlwcyBpbiB0aGUgd2F5XHJcbiAgICAgICAgICAvLyAyLndpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBnYW1lYm9hcmQuXHJcbiAgICAgICAgICAvLyBvbmx5IHRoZW4gZG8geW91IGFsbG93IHZlcnRpY2FsIGNsYXNzLlxyXG4gICAgICAgICAgY29uc29sZS5sb2coY2VsbCk7XHJcblxyXG4gICAgICAgICAgaWYgKHZlcnRpY2FsT24pIHtcclxuICAgICAgICAgICAgLy8gdmVydGljYWwgLT4gaG9yaXpvbnRhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93SW5kZXggKyAxOyBpIDwgcm93SW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKTtcclxuICAgICAgICAgICAgICAvLyBzdHJpcCB2ZXJ0aWNhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbEluZGV4ICsgMTsgaSA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gYWRkIGhvcml6b250YWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7aX1cIl1gKTtcclxuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IHNoaXAuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGhvcml6b250YWwgLT4gdmVydGljYWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbEluZGV4ICsgMTsgaSA8IGNvbEluZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gcmVtb3ZlIGhvcml6b250YWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7aX1cIl1gKVxyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHJvd0luZGV4ICsgMTsgaSA8IHJvd0luZGV4ICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gYWRkIHZlcnRpY2FsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucDEuZ2FtZWJvYXJkIC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtpfVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdYClcclxuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IHNoaXAuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyB0b2dnbGUgdmVydGljYWwgZm9yIHRoZSB2aWV3XHJcbiAgICAgICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgIC8vIHRoZW4sIGFsdGVyIHRoZSBvY2N1cGllZCBjbGFzcy5cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBkaXNhYmxlIHJvdGF0aW9uIGZvciBzaGlwcyB0aGF0IGFyZSBub3QgcGxhY2VkLlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLmRyYWdnYWJsZTpub3QoLnNoaXAtcGxhY2VkKVwiKS5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICBpZiAoc2hpcC5vbmNsaWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2hpcC5vbmNsaWNrID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGxhY2VzIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQgZ2l2ZW4gY29vcmRpbmF0ZXMuIFVzZWZ1bCBmb3IgQUkuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2wgXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCBcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsYXllcjIgLSBQbGFjZSBzaGlwcyBvbiBwbGF5ZXIgMidzIGdhbWVib2FyZD9cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSB0aGUgSUQgdGhlIHNoaXAgc2hvdWxkIGJlIGlkZW50aWZpZWQgYnkuXHJcbiAgICovXHJcbiAgc3RhdGljIHBsYWNlU2hpcE1hbnVhbGx5KGxlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsLCBwbGF5ZXIyID0gdHJ1ZSwgaWQpIHtcclxuICAgIGNvbnNvbGUubG9nKHtsZW5ndGgsIHJvdywgY29sLCB2ZXJ0aWNhbCwgcGxheWVyMiwgaWR9KTtcclxuICAgIGxldCBzZWxlY3RvcjtcclxuICAgIGxldCBnYW1lYm9hcmQ7IFxyXG4gICAgbGV0IGNwdVRhZyA9IFwiY3B1LXNoaXAtcGxhY2VkXCI7XHJcblxyXG4gICAgaWYgKHBsYXllcjIpIHtcclxuICAgICAgc2VsZWN0b3IgPSBcIi5wMi5nYW1lYm9hcmRcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZWN0b3IgPSBcIi5wMS5nYW1lYm9hcmRcIlxyXG4gICAgfVxyXG5cclxuICAgIGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7c2VsZWN0b3J9YCk7XHJcblxyXG4gICAgbGV0IG9yaWdpbkNlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgLnNlbGVjdGFibGVbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbH0nXWApO1xyXG4gICAgb3JpZ2luQ2VsbC5kYXRhc2V0LnNoaXAgPSBpZDtcclxuXHJcblxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIGxldCByb3dzID0gQXJyYXkuZnJvbShnYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChgLnNlbGVjdGFibGVbZGF0YS1jb2w9XCIke2NvbH1cIl1gKSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcm93ICsgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiLCBjcHVUYWcpO1xyXG4gICAgICAgIHJvd3NbaV0uZGF0YXNldC5zaGlwID0gaWQ7XHJcblxyXG4gICAgICAgIHN3aXRjaChpKSB7XHJcbiAgICAgICAgICBjYXNlIHJvdzogLy8gc3RhcnRcclxuICAgICAgICAgICAgcm93c1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdGFydC12ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIHJvdyArIGxlbmd0aCAtIDE6IC8vIGVuZFxyXG4gICAgICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVuZC12ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiAvLyBtaWRcclxuICAgICAgICAgICAgcm93c1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1taWRkbGUtdmVydGljYWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGNvbHMgPSBBcnJheS5mcm9tKGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKGAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93fVwiXWApKTtcclxuICAgICAgXHJcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCBjb2wgKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbHNbaV0uY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIsIGNwdVRhZyk7XHJcbiAgICAgICAgY29sc1tpXS5kYXRhc2V0LnNoaXAgPSBpZDtcclxuXHJcbiAgICAgICAgc3dpdGNoKGkpIHtcclxuICAgICAgICAgIGNhc2UgY29sOiAvLyBzdGFydFxyXG4gICAgICAgICAgICBjb2xzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0YXJ0LWhvcml6b250YWxcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBjb2wgKyBsZW5ndGggLSAxOiAvLyBlbmRcclxuICAgICAgICAgICAgY29sc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1lbmQtaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiAvLyBtaWRcclxuICAgICAgICAgICAgY29sc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1taWRkbGUtaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFza3MgdXNlciBmb3IgdGhlaXIgbmFtZSBhbmQgdG8gc3RhcnQgdGhlIGdhbWUuLi4gb25seSB3aGVuIHRoZSBzaGlwIHBsYWNlbWVudCBjb250YWluZXIgaXMgZW1wdHlcclxuICAgKiB3aWxsIHRoZSBzdGFydCBnYW1lIGJ1dHRvbiB1bmxvY2suXHJcbiAgICovXHJcbiAgI3N0YXJ0R2FtZVByb21wdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBzdGFydEdhbWVGb3JtID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcInN0YXJ0LWdhbWUtcHJvbXB0XCIpO1xyXG4gICAgbGV0IFtwbGF5ZXJOYW1lTGFiZWwsIHBsYXllck5hbWVGaWVsZF0gPSBjb21wb25lbnQuZm9ybUlucHV0KFwiTmFtZVwiLCBcImlucHV0XCIsIFwicDEtbmFtZVwiLCBcInAxLW5hbWVcIik7XHJcbiAgICBsZXQgc3RhcnRHYW1lQnV0dG9uID0gY29tcG9uZW50LmJ1dHRvbihcIlN0YXJ0IEdhbWUhXCIsIFwic3RhcnQtZ2FtZS1idXR0b25cIik7XHJcbiAgICBsZXQgZXJyb3JGaWVsZCA9IGNvbXBvbmVudC5wKFwiRXJyb3IgRmllbGQgSGVyZVwiLCBcImZvcm0tZXJyb3ItZmllbGRcIik7XHJcblxyXG4gICAgcGxheWVyTmFtZUZpZWxkLnZhbHVlID0gXCJDb21tYW5kZXJcIjtcclxuICAgIHBsYXllck5hbWVGaWVsZC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgc3RhcnRHYW1lRm9ybS5hcHBlbmQocGxheWVyTmFtZUxhYmVsLCBwbGF5ZXJOYW1lRmllbGQsIHN0YXJ0R2FtZUJ1dHRvbiwgZXJyb3JGaWVsZCk7XHJcblxyXG5cclxuICAgIHN0YXJ0R2FtZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgXHJcblxyXG4gICAgc3RhcnRHYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHNlbGYuZ2FtZU1hbmFnZXIuc3RhcnRHYW1lKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3RhcnRHYW1lRm9ybTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4oZnVuY3Rpb24gbWFpbigpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgY29uc3QgcDEgPSBuZXcgUGxheWVyKFwiQ29tbWFuZGVyIEJsdWVcIiwgZmFsc2UpO1xyXG4gIGNvbnN0IHAyID0gbmV3IFBsYXllcihcIkNvbW1hbmRlciBSZWRcIiwgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZU1hbmFnZXIoW3AxLCBwMl0pO1xyXG4gIGNvbnN0IHBhZ2UgPSBuZXcgQmF0dGxlc2hpcEVsZW1lbnRzKGdhbWUpO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBwYWdlLmhlYWRlcigpO1xyXG4gIGNvbnN0IGdhbWVBcmVhID0gcGFnZS5nYW1lQXJlYSgpO1xyXG5cclxuICBwYWdlLnNldERpYWxvZyhHQU1FX1NUQVRFLmdhbWVQcm9tcHQpO1xyXG5cclxuICBib2R5LmFwcGVuZChoZWFkZXIsIGdhbWVBcmVhKTtcclxufSkoKTtcclxuXHJcbi8qXHJcbjE6IFVzZXJzIHBsYWNlIHRoZWlyIHNoaXBzLlxyXG4yOiBVc2VycyBwbGF5IHRoZSBnYW1lLlxyXG4zOiBHYW1lIGVuZHMgd2hlbiB0aGUgb25lIHBsYXllcidzIGJhdHRsZXNoaXBzIGFyZSBkZXN0cm95ZWQuXHJcbjQ6IFRoZSBnYW1lIGVuZCBoYXMgc3RhdGlzdGljcyByZXN1bHRzIGFuZCBvcHRpb24gdG8gcmVwbGF5XHJcbjU6IEdvIGJhY2sgdG8gc3RlcCAxLlxyXG4qLyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gIG5hbWU7XHJcbiAgY3B1O1xyXG4gIHNjb3JlO1xyXG4gIGdhbWVib2FyZDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSwgaXNDcHUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmNwdSA9IGlzQ3B1O1xyXG4gICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjayB0aGUgb3RoZXIgcGxheWVyJ3MgZ2FtZWJvYXJkLlxyXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgLSBUaGUgb3RoZXIgcGxheWVyIG9mIHRoZSBnYW1lLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSBSb3cgY29vcmRpbmF0ZSB0byBsYXVuY2ggYW4gYXR0YWNrLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2wgLSBDb2x1bW4gY29vcmRpbmF0ZSB0byBsYXVuY2ggYW4gYXR0YWNrLlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IC0gU3RhdHVzIG9mIHRoZSBhdHRhY2suIDEgaXMgYSBoaXQuIDAgaXMgYSBtaXNzLFxyXG4gICAqIGFuZCAtMSBpcyBhbiBhcmVhIHdoaWNoIGhhcyBhbHJlYWR5IGJlZW4gaGl0LlxyXG4gICAqL1xyXG4gIGF0dGFjayhwbGF5ZXIsIHhMb2MsIHlMb2MpIHtcclxuICAgIHJldHVybiBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeExvYywgeUxvYyk7XHJcbiAgfVxyXG59IiwiZnVuY3Rpb24gc2V0TmFtZShsZW5ndGgpIHtcclxuICBzd2l0Y2gobGVuZ3RoKSB7XHJcbiAgICBjYXNlIDE6XHJcbiAgICAgIHJldHVybiBcIlNwZWVkZXJcIjtcclxuICAgIGNhc2UgMjpcclxuICAgICAgcmV0dXJuIFwiUGF0cm9sIEJvYXRcIjtcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIFwiRGVzdHJveWVyXCI7XHJcbiAgICBjYXNlIDQ6XHJcbiAgICAgIHJldHVybiBcIkJhdHRsZXNoaXBcIjtcclxuICAgIGNhc2UgNTpcclxuICAgICAgcmV0dXJuIFwiQ2FycmllclwiO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiU2hpcFwiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGJhdHRsZXNoaXAsIGRlcGVuZHMgb24gdGhlIGxlbmd0aC5cclxuICAgKi9cclxuICBuYW1lOyBcclxuICAvKipcclxuICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSBiYXR0bGVzaGlwLlxyXG4gICAqL1xyXG4gIGxlbmd0aDtcclxuICAvKipcclxuICAgKiBDdXJyZW50IGNvbmRpdGlvbiBvZiB0aGUgYmF0dGxlc2hpcC4gUmV0dXJuc1xyXG4gICAqIGFuIGFycmF5IGNvbnRhaW5pbmcgc3RhdHVzIG9mIHRoZSBiYXR0bGVzaGlwLiBcclxuICAgKiBJZiB0aGUgc3RhdHVzZXMgYXJlIGFsbCB0cnVlLCB0aGUgc2hpcCBpcyBzdW5rLlxyXG4gICAqL1xyXG4gIHN0YXR1cztcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgc2hpcC5cclxuICAgKiBAcGFyYW0ge0dhbWVib2FyZH0gZ2FtZWJvYXJkIC0gVGhlIGdhbWVib2FyZCB0aGUgc2hpcCBiZWxvbmdzIHRvLlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggLSBUaGUgbGVuZ3RoIG9mIHRoZSBzaGlwLlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgLSB4Q29vcmRpbmF0ZSB0byBwbGFjZSB0aGUgc2hpcC4gMC1iYXNlZC5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sIC0geUNvb3JkaW5hdGUgdG8gcGxhY2UgdGhlIHNoaXAuIDAtYmFzZWQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCAtIFNob3VsZCB0aGUgc2hpcCBiZSBwbGFjZWQgdmVydGljYWxseT9cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoID8/IDE7XHJcbiAgICB0aGlzLm5hbWUgPSBzZXROYW1lKHRoaXMubGVuZ3RoKTtcclxuXHJcbiAgICB0aGlzLnN0YXR1cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFya3MgdGhlIHNoaXAgaGl0IGF0IGdpdmVuIGxvY2F0aW9uLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NhdGlvbiBcclxuICAgKi9cclxuICBoaXQoeCwgeSkge1xyXG4gICAgbGV0IGlkID0gYCR7eH0sJHt5fWA7XHJcbiAgICB0aGlzLnN0YXR1c1tpZF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgc2hpcCBoYXMgYmVlbiBlbnRpcmVseSBzdW5rIHlldC5cclxuICAgKi9cclxuICBpc1N1bmsoKSB7XHJcbiAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuc3RhdHVzKSB7XHJcbiAgICAgIGlmICghdGhpcy5zdGF0dXNbcHJvcF0pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0iLCIvKipcclxuICogQSBjbGFzcyB3aXRoIHVzZWZ1bCwgZ2VuZXJhbC1wdXJwb3NlIG1ldGhvZHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXR5IHtcclxuICBcclxuICBzdGF0aWMgZW1haWxSZWdleCA9ICBcdFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxyXG4gIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cclxuICAvKipcclxuICAgKiBCYXNlZCBvbiB3ZWJwYWNrJ3MgcmVxdWlyZSB0byBxdWlja2x5IGltcG9ydCBpbiBhbGwgaW1hZ2VzIGluIGEgZm9sZGVyLlxyXG4gICAqIFNlZSBkb2N1bWVudGF0aW9uIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlcXVpcmUtY29udGV4dCB0byB1bmRlcnN0YW5kXHJcbiAgICogbW9yZSBhYm91dCB0aGUgcGFyYW1ldGVyLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSByIC0gcmVxdWlyZS5jb250ZXh0KCkgZnVuY3Rpb24sIHVzZWQgZm9yIGltcG9ydGluZyBhbGwgZmlsZXMgaW5cclxuICAgKiBhIGRpcmVjdG9yeSBtYXRjaGluZyBhIHBhdHRlcm4uIEV4OlxyXG4gICAqIHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2VzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pLiBMZWF2ZSBibGFuayB0byB1c2UgdGhpcy5cclxuICAgKiBAcmV0dXJucyAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW1hZ2VzIG1hdGNoaW5nIHRoZSByZXF1aXJlIGNvbnRleHQsXHJcbiAgICogdGhlIG9yaWdpbmFsIGZpbGVuYW1lICh3LyBleHRlbnNpb24pIGJlaW5nIHRoZSBrZXkgcmVmZXJlbmNpbmcgdGhlIGltYWdlLlxyXG4gICAqL1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gIHN0YXRpYyBpbXBvcnRBbGxJbWFnZXMociA9IHJlcXVpcmUuY29udGV4dChcIi4uL2ltYWdlc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSkge1xyXG4gICAgbGV0IGltYWdlcyA9IHt9O1xyXG4gICAgci5rZXlzKCkubWFwKChpdGVtKSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xyXG4gICAgcmV0dXJuIGltYWdlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggdmFyaW91cyBjbGFzc2VzLiBXcmFwcyBkb2N1bWVudC5jcmVhdGVFbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUaGUgSFRNTCB0YWcgb2YgdGhlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDbGFzcyAtIERlZmF1bHQgY2xhc3MgdG8gcmVmZXIgdG8gdGhlIGVsZW1lbnQgYnkuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVzIC0gKE9wdGlvbmFsKSBBZGRpdGlvbmFsIGNsYXNzZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudC5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlRWxlbWVudCh0YWcsIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIFV0aWxpdHkuYWRkQ2xhc3Nlc1RvRWxlbWVudChlbGVtLCBkZWZhdWx0Q2xhc3MsIC4uLmNsYXNzTmFtZXMpO1xyXG5cclxuICAgIHJldHVybiBlbGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBoZWxwZXIgbWV0aG9kIHdoaWNoIGFkZHMgY2xhc3NlcyB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGFwcGVuZCBjbGFzc2VzIHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0Q2xhc3MgLSBUaGUgY2xhc3NuYW1lIHRoYXQgc2FpZCBlbGVtZW50IHNob3VsZCBhbHdheXMgaGF2ZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWVzIC0gVGhlIGNsYXNzbmFtZXMgdG8gZ2l2ZSB0aGUgZWxlbWVudCAob3B0aW9uYWwpLlxyXG4gICAqICovIFxyXG4gIHN0YXRpYyBhZGRDbGFzc2VzVG9FbGVtZW50KGVsZW0sIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcykge1xyXG4gICAgICBjbGFzc05hbWVzLnB1c2goZGVmYXVsdENsYXNzKTtcclxuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGEgZ2l2ZW4gZWxlbWVudCwgYWRkIGFuIGFuaW1hdGlvbiBidXQgb25seSBwbGF5IGl0IG9uY2UuIEFmdGVyd2FyZHMsXHJcbiAgICogdW5sb2FkIHRoZSBhbmltYXRpb24uIFRoaXMgYWxsb3dzIHlvdSB0byBhZGQgdGhlIGNsYXNzIHRvIGl0IGFnYWluIHRvIFxyXG4gICAqIHBsYXkgdGhlIGFuaW1hdGlvbjsgdGhpcyBpcyB1c2VmdWwgd2hlbiBhc3NvY2lhdGVkIHdpdGggZXZlbnQgdHJpZ2dlcnMuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIEFuIGVsZW1lbnQgdG8gYXBwbHkgdGhlIGFuaW1hdGlvbiB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYW5pbWF0aW9uTmFtZSAtIEEgQ1NTIGNsYXNzIGFzc29jaWF0ZWQgd2l0aCBhbiBhbmltYXRpb24uXHJcbiAgICovXHJcbiAgc3RhdGljIHRyaWdnZXJBbmltYXRpb24oZWxlbSwgYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbk5hbWUpO1xyXG5cclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShhbmltYXRpb25OYW1lKTtcclxuICAgIH0sIHtvbmNlIDogdHJ1ZX0pOyBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlY3Vyc2l2ZWx5IHNjYWxlIHRoZSB0cmVlIG9mIGEgY2hpbGQgbm9kZSB1bnRpbCB0aGUgcGFyZW50IG1hdGNoaW5nIHRoZSBnaXZlblxyXG4gICAqIHNlbGVjdG9yIGlzIGZvdW5kLiBSZXR1cm5zIE5VTEwgaWYgbm8gbWF0Y2hpbmcgcGFyZW50IGlzIGZvdW5kLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBBIGNoaWxkIG5vZGUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gQ1NTIFNlbGVjdG9yIFN0cmluZy5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SFRNTGVsZW1lbnR9IC0gUGFyZW50IG9mIGVsZW0uXHJcbiAgICovXHJcbiAgc3RhdGljIGdldE1hdGNoaW5nUGFyZW50KGVsZW0sIHNlbGVjdG9yKSB7XHJcbiAgICB3aGlsZSghZWxlbS5tYXRjaGVzKHNlbGVjdG9yKSkge1xyXG4gICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xyXG4gICAgICBpZiAoZWxlbS5tYXRjaGVzKFwiaHRtbFwiKSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdXNlcidzIGxvY2F0aW9uLCB1c2luZyB0aGUgR2VvbG9jYXRpb24gQVBJLlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIG9mIHRoZSB1c2VyJ3MgbG9jYXRpb24sIG9yIG51bGxcclxuICAgKiBpZiB0aGUgdXNlciBkZW5pZXMgcGVybWlzc2lvbiByZXF1ZXN0cy5cclxuICAgKi9cclxuICAvKlxyXG4gIHN0YXRpYyBnZXRHZW9sb2NhdGlvbigpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWNjZXNzKHBvc2l0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGxhdGl0dWRlICA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgY29uc3QgbG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuXHJcbiAgICAgIGNvbnN0IGxhdGxvbmcgPSBgJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcclxuXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobGF0bG9uZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBlcnJvcigpIHtcclxuICAgICAgbGV0IGVycm9yID0gXCJVc2VyIGRlbmllZCBsb2NhdGlvbiBwZXJtaXNzaW9ucy5cIjtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7XHJcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2VzcywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gICovXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbGwgY2hpbGRyZW4gZnJvbSBhIHBhcmVudCBub2RlLlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnROb2RlfSBwYXJlbnQgLSBQYXJlbnQgbm9kZSBjb250YWluaW5nIGNoaWxkcmVuLlxyXG4gICAqL1xyXG4gIHN0YXRpYyByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpIHtcclxuICAgIHdoaWxlKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW50ZW5jZSBmb3JtYXQuIE1ha2VzIHN1cmUgdGhlIGZpcnN0IGxldHRlciBpcyBjYXBpdGFsaXplZCwgYW5kIHRoZW4gXHJcbiAgICogYSBwZXJpb2QgaXMgYXBwZW5kZWQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIGEgc3RyaW5nIHRvIHNlbnRlbmNlLWNhc2UuXHJcbiAgICovXHJcbiAgc3RhdGljIHRvU2VudGVuY2Uoc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSkgKyBcIi5cIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgYXNzaWduZWQgdG8gZWFjaCBidXR0b25cclxuICAgKiB3aGVuIG9ubHkgb25lIG9mIHRoZW0gc2hvdWxkIGJlIHRvZ2dsZWQuIEZ1bmN0aW9ucyBsaWtlIGEgcmFkaW9cclxuICAgKiBidXR0b24gYnV0IHdpdGggZGlmZmVyZW50IHN0eWxpbmcuXHJcbiAgICogQHBhcmFtIHsqfSBlIFxyXG4gICAqIEBwYXJhbSB7Kn0gcGFyZW50U2VsZWN0b3IgXHJcbiAgICovXHJcbiAgc3RhdGljIHRvZ2dsZVNlbGVjdGVkKGUsIHBhcmVudFNlbGVjdG9yKSB7XHJcbiAgICAvLyByZW1vdmUgc2VsZWN0ZWQgY2xhc3MgZnJvbSB0aGUgb3RoZXIuXHJcbiAgICBjb25zdCBwYXJlbnQgPSBVdGlsaXR5LmdldE1hdGNoaW5nUGFyZW50KGUuY3VycmVudFRhcmdldCwgcGFyZW50U2VsZWN0b3IpO1xyXG4gICAgY29uc3QgY3VycmVudFNlbGVjdGVkID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIik7XHJcbiAgICBjdXJyZW50U2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgY3VycmVudFNlbGVjdGVkLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgLy8gdG9nZ2xlIHNlbGVjdGVkIGNsYXNzIG9uIHRoZSBidXR0b25cclxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==