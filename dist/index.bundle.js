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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFDQUFxQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC8uKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9nYW1lbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9qcy91dGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1hcmVhIHtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGlzIHBzZXVkbyBlbGVtZW50IGhlbHBzIGtlZXAgdGhlIGNlbGxzIGFsaWduZWQgdG9nZXRoZXIgKi9cXHJcXG4vKiBFbXB0eSBkaXZzIGFjdCBzdHJhbmdlbHksIHNvIHB1dCBjb250ZW50IGluIHRoZW0uICAqL1xcclxcbi8qIERlbGV0ZSBpdCBhbmQgdGhlbiBydW4gdGhpcyBpbiBjb25zb2xlIHRvIHNlZSB0aGF0ICovXFxyXFxuLyogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXFwiLmNlbGxcXFwiKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC50ZXh0Q29udGVudCA9IFxcXCJBXFxcIik7ICovXFxyXFxuLmNlbGw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcuJztcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpXFxyXFxufVxcclxcblxcclxcbi5zaGlwLXNlbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUge1xcclxcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGUge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi52YWxpZC1kcmFnIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAyNTUsIDU1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCA2NCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLnNoaXAtcGxhY2VkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNGU4YTAyO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQ6aG92ZXIge1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUudmVydGljYWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXBsYWNlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTM2LCAxMzYsIDAuODYzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXN0YXJ0LWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLW1pZGRsZS1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZW5kLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtc3RhcnQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1taWRkbGUtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1lbmQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC10cmFuc3BhcmVudCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VkIC5jZWxsIHtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDEwMiwgNzEsIDAuMyk7ICovXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQSw4REFBOEQ7QUFDOUQsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCxnRkFBZ0Y7QUFDaEY7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5vLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1hcmVhIHtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1hcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGlzIHBzZXVkbyBlbGVtZW50IGhlbHBzIGtlZXAgdGhlIGNlbGxzIGFsaWduZWQgdG9nZXRoZXIgKi9cXHJcXG4vKiBFbXB0eSBkaXZzIGFjdCBzdHJhbmdlbHksIHNvIHB1dCBjb250ZW50IGluIHRoZW0uICAqL1xcclxcbi8qIERlbGV0ZSBpdCBhbmQgdGhlbiBydW4gdGhpcyBpbiBjb25zb2xlIHRvIHNlZSB0aGF0ICovXFxyXFxuLyogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXFwiLmNlbGxcXFwiKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC50ZXh0Q29udGVudCA9IFxcXCJBXFxcIik7ICovXFxyXFxuLmNlbGw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcuJztcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGFibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpXFxyXFxufVxcclxcblxcclxcbi5zaGlwLXNlbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUge1xcclxcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGUge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dhYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi52YWxpZC1kcmFnIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAyNTUsIDU1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCA2NCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNoaXAuc2hpcC1wbGFjZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbmRpdi5zaGlwLnNoaXAtcGxhY2VkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNGU4YTAyO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjM4LCAyNTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQ6aG92ZXIge1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnZ2FibGUudmVydGljYWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNwdS1zaGlwLXBsYWNlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTM2LCAxMzYsIDAuODYzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXN0YXJ0LWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLW1pZGRsZS1ob3Jpem9udGFsIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZW5kLWhvcml6b250YWwge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtc3RhcnQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1taWRkbGUtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1lbmQtdmVydGljYWwge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC10cmFuc3BhcmVudCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VkIC5jZWxsIHtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDEwMiwgNzEsIDAuMyk7ICovXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7IiwiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBjbGFzcy4gQ29udGFpbnMgdmFyaW91cyBET00gZWxlbWVudHMuXHJcbiAqIEF1dGhvcjogZGF0cmlub25cclxuICogVmVyc2lvbjogMS40IChXZWF0aGVyKVxyXG4gKi9cclxuXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA2MDBweClcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBhIGJhc2ljIEhUTUwgc2tlbGV0b24gZm9yIHRoZSB3ZWIgcGFnZSwgZ2VuZXJhdGluZyBhIGhlYWRlcixcclxuICAgKiBtYWluLCBhbmQgc3RpY2t5IGZvb3Rlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gaGVhZGVyVGl0bGUgLSBXaGF0IHRoZSB3ZWIgcGFnZSBpcyBjYWxsZWQuXHJcbiAgICogQHBhcmFtIHtib29sfSBlbXB0eUhlYWRlciAtIFNob3VsZCB0aGUgaGVhZGVyIHVzZSBhIGRlZmF1bHQgc3RydWN0dXJlP1xyXG4gICAqIFRoZSBkZWZhdWx0IHN0cnVjdHVyZSBsb29rcyBsaWtlIFsgTG9nbyB8IHwgfCB8IE5hdmlnYXRpb24gTGlua3NdXHJcbiAgICogQHJldHVybnMgLSBBbiBhcnJheSBjb250YWluaW5nIHJlZmVyZW5jZXMgdG8gdGhlIGdlbmVyYXRlZCBoZWFkZXIsIG1haW4sIGFuZCBmb290ZXIuXHJcbiAgICovXHJcbiAgaW5pdGlhbGl6ZVN0cnVjdHVyZShcclxuICAgIGhlYWRlclRpdGxlLFxyXG4gICAgZW1wdHlIZWFkZXIgPSBmYWxzZSxcclxuICAgIGNyZWF0ZU1vbnRoLFxyXG4gICAgZ2l0aHViTGlua1xyXG4gICkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IHRoaXMuZGl2KFwiY29udGVudFwiKTtcclxuICAgIGxldCBoZWFkZXI7XHJcbiAgICBpZiAoZW1wdHlIZWFkZXIpIHtcclxuICAgICAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlciA9IHRoaXMuaGVhZGVyKGhlYWRlclRpdGxlKTtcclxuICAgIH1cclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gdGhpcy5mb290ZXIoY3JlYXRlTW9udGgsIGdpdGh1YkxpbmspO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgICBtYWluV3JhcHBlci5hcHBlbmQoaGVhZGVyLCBtYWluKTtcclxuICAgIGJvZHkuYXBwZW5kKG1haW5XcmFwcGVyLCBmb290ZXIpO1xyXG5cclxuICAgIHJldHVybiBbaGVhZGVyLCBtYWluLCBmb290ZXJdO1xyXG4gIH1cclxuXHJcbiAgY29udGVudCgpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIodGl0bGUpIHtcclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgbGV0IHRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gICAgbWVudUJ1dHRvbi5pZCA9IFwibWVudS1idXR0b25cIjtcclxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWJhcnNcIiwgXCJuby1kaXNwbGF5XCIpO1xyXG5cclxuICAgIHRoaXMubXFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUubWF0Y2hlcykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gaXQgYmlnZ2VyIHRoYW4gdGhlIHF1ZXJ5IHJ1bGUuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW4tb3V0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtZW51IHByZXNzZWQuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzbGlkZS1pbi1vdXRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuICAgIC8vIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2ltZ30pYDtcclxuXHJcbiAgICB0aXRsZUVsZW0uaWQgPSBcInBhZ2UtdGl0bGVcIjtcclxuICAgIHRpdGxlRWxlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIHRpdGxlRWxlbS5pbnNlcnRCZWZvcmUobWVudUJ1dHRvbiwgdGl0bGVFbGVtLmZpcnN0Q2hpbGQpO1xyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZUVsZW0pO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG5cclxuICBuYXZiYXIoLi4ubGlua3MpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICAgIG5hdi5pZCA9IFwibmF2YmFyXCI7XHJcbiAgICBsaW5rQ29udGFpbmVyLmlkID0gXCJuYXZiYXItYnV0dG9ucy1jb250YWluZXJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgIGNvbnN0IGxpbmtCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGNvbnN0IGxpbmtBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgICAgIGxpbmtCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdmJhci1idXR0b25cIik7XHJcblxyXG4gICAgICBsaW5rQW5jaG9yLmlkID0gYG5hdmxpbmstJHtsaW5rLnJlcGxhY2UoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgIGxpbmtBbmNob3IudGV4dENvbnRlbnQgPSBsaW5rO1xyXG4gICAgICBsaW5rQW5jaG9yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG5cclxuICAgICAgbGlua0J1dHRvbi5hcHBlbmQobGlua0FuY2hvcik7XHJcbiAgICAgIGxpbmtDb250YWluZXIuYXBwZW5kKGxpbmtCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdi5hcHBlbmQobGlua0NvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIG5hdjtcclxuICB9XHJcblxyXG4gIGJhbm5lcih0ZXh0LCBpbWcpIHtcclxuICAgIGxldCBiYW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG5cclxuICAgIGJhbm5lckNvbnRhaW5lci5pZCA9IFwiYmFubmVyXCI7XHJcbiAgICBiYW5uZXIuaWQgPSBcImJhbm5lci1pbWFnZVwiO1xyXG4gICAgY2FwdGlvbi5pZCA9IFwiYmFubmVyLWNhcHRpb25cIjtcclxuXHJcbiAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZ30pYDtcclxuXHJcbiAgICBjYXB0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICBiYW5uZXJDb250YWluZXIuYXBwZW5kKGJhbm5lciwgY2FwdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGJhbm5lckNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZvb3RlcihjcmVhdGVNb250aCwgZ2l0aHViTGluaykge1xyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuXHJcbiAgICBsZXQgdGV4dCA9IGBDcmVhdGVkIGluICR7Y3JlYXRlTW9udGh9IDIwMjEuIE9kaW4gUHJvamVjdCB4IERhbiBULmA7XHJcbiAgICBsZXQgZ2l0aHViRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGV0IGdoSWNvbiA9IHRoaXMuZmFJY29uKFwiZmFiXCIsIFwiZmEtZ2l0aHViLXNxdWFyZVwiLCBcImljb25cIik7XHJcblxyXG4gICAgZ2l0aHViRWxlbS5hcHBlbmQoZ2hJY29uKTtcclxuICAgIGdpdGh1YkVsZW0uY2xhc3NMaXN0LmFkZChcImZvb3Rlci1naXRodWItaWNvblwiKTtcclxuICAgIGdpdGh1YkVsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBnaXRodWJMaW5rKTtcclxuICAgIGdpdGh1YkVsZW0uc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgZ2l0aHViRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcC5hcHBlbmQoZ2l0aHViRWxlbSk7XHJcbiAgICBmb290ZXIuYXBwZW5kKHApO1xyXG5cclxuICAgIHJldHVybiBmb290ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIGxhcmdlciwgZW1ib2xkZW5lZCwgdGV4dCxcclxuICAgKiBzaW1pbGFyIHRvIGEgcHVsbCBxdW90ZSBpbiBhIG1hZ2F6aW5lLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1zZyB7c3RyaW5nfSBUZXh0IHRvIGluY2x1ZGUgaW4gdGhlIGJsb2NrIHF1b3RlXHJcbiAgICovXHJcbiAgcHVsbHF1b3RlKG1zZykge1xyXG4gICAgbGV0IHB1bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XHJcbiAgICBwdWxsLnRleHRDb250ZW50ID0gbXNnO1xyXG5cclxuICAgIHB1bGwuY2xhc3NMaXN0LmFkZChcInB1bGwtcXVvdGVcIik7XHJcblxyXG4gICAgcmV0dXJuIHB1bGw7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uKGlkKSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0ZXh0IGhlYWRpbmcgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gdGV4dCAtIFRoZSBsYWJlbCBmb3IgdGhlIGhlYWRlci5cclxuICAgKiBAcGFyYW0geyp9IGxldmVsIC0gVGhlIGxldmVsIG9mIGhlYWRlci5cclxuICAgKi9cclxuICBoZWFkaW5nKHRleHQsIGxldmVsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGlmIChsZXZlbCA8IDEgfHwgbGV2ZWwgPiA2KSB7XHJcbiAgICAgIHRocm93IEVycm9yKFwiSGVhZGluZyBsZXZlbHMgY2FuIG9ubHkgYmUgYmV0d2VlbiAxIHRvIDYhXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke2xldmVsfWApO1xyXG5cclxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuICB9XHJcblxyXG4gIHAodGV4dCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgaWYgKGNsYXNzTmFtZS5sZW5ndGggIT0gMCkge1xyXG4gICAgICBwLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gcDtcclxuICB9XHJcblxyXG4gIGltZyh1cmwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG5cclxuICAgIHJldHVybiBpbWFnZTtcclxuICB9XHJcblxyXG4gIGRpdiguLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICByZXR1cm4gZGl2O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uKGxhYmVsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICBidG4udGV4dENvbnRlbnQgPSBsYWJlbDtcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYSBiYXNpYyB0YWJsZSB3aXRoIHNpbmdsZS1jZWxsIGNvbHVtbnMgYW5kIHJvd3MsIGJhc2VkIG9uIHRoZSBpbXBvcnRlZCBmaWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtjc3Z9IGRhdGEgLSBEYXRhIHRvIHR1cm4gaW50byBhIHRhYmxlLiBQbGVhc2UgdXNlIHdlYnBhY2sgdG8gaW1wb3J0IC5jc3YgZmlsZXMuXHJcbiAgICovXHJcbiAgdGFibGUoaWQgPSBcIlwiLCBkYXRhKSB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0YWJsZS5pZCA9IGlkO1xyXG5cclxuICAgIC8vIEdlbmVyYXRlIGEgdGFibGUgaGVhZGVyIHJvdy5cclxuICAgIGxldCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGxldCB0YWJsZUhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBjb2wgb2YgT2JqZWN0LmtleXMoZGF0YVswXSkpIHtcclxuICAgICAgbGV0IGNvbENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgIGNvbENlbGwudGV4dENvbnRlbnQgPSBjb2w7XHJcblxyXG4gICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmQoY29sQ2VsbCk7XHJcbiAgICB9XHJcbiAgICB0YWJsZUhlYWRlci5hcHBlbmQodGFibGVIZWFkZXJSb3cpO1xyXG5cclxuICAgIHRhYmxlLmFwcGVuZCh0YWJsZUhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgLy8gR2VuZXJhdGUgdGFibGUgcm93cy5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgZm9yIChsZXQgcHJvcCBpbiBkYXRhW2ldKSB7XHJcbiAgICAgICAgbGV0IHRjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cclxuICAgICAgICB0Y2VsbC50ZXh0Q29udGVudCA9IGRhdGFbaV1bcHJvcF07XHJcbiAgICAgICAgdHJvdy5hcHBlbmQodGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJsZUJvZHkuYXBwZW5kKHRyb3cpO1xyXG4gICAgfVxyXG4gICAgdGFibGUuYXBwZW5kKHRhYmxlQm9keSk7XHJcblxyXG4gICAgcmV0dXJuIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZm9udCBhd2Vzb21lIGljb24uXHJcbiAgICovXHJcbiAgZmFJY29uKGNhdGVnb3J5LCBuYW1lLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBmYXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBmYXNJY29uLmNsYXNzTGlzdC5hZGQoY2F0ZWdvcnksIG5hbWUpO1xyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICBmYXNJY29uLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFzSWNvbjtcclxuICB9XHJcblxyXG4gIHNwYW4odGV4dENvbnRlbnQgPSBudWxsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBpZiAoY2xhc3NOYW1lLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuXHJcbiAgICByZXR1cm4gc3BhbjtcclxuICB9XHJcblxyXG4gIGZvcm1JbnB1dChsYWJlbFRleHQsIHR5cGUsIGlucHV0SWQsIG5hbWUpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LmlkID0gaW5wdXRJZDtcclxuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xyXG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgaW5wdXRdO1xyXG4gIH1cclxuXHJcbiAgZHJvcGRvd24obGFiZWxUZXh0LCBuYW1lLCBpbnB1dElkLCAuLi52YWx1ZXMpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXRJZCk7XHJcblxyXG4gICAgZm9yIChsZXQgdmFsIG9mIHZhbHVlcykge1xyXG4gICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBlbnRyeS52YWx1ZSA9IHZhbDtcclxuICAgICAgaWYgKGlzTmFOKHZhbCkgJiYgdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gdmFsWzBdLnRvVXBwZXJDYXNlKCkgKyB2YWwuc2xpY2UoMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSB2YWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGVjdC5hcHBlbmQoZW50cnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIHNlbGVjdF07XHJcbiAgfVxyXG5cclxuICB0ZXh0QXJlYShsYWJlbFRleHQsIG5hbWUsIGlucHV0SWQpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRhLmlkID0gaW5wdXRJZDtcclxuICAgIHRhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgdGFdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgY29uZmlybSBtb2RhbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gY2xhc3NOYW1lIC0gQ2xhc3NlcyB0aGUgbW9kYWwgc2hvdWxkIGJlbG9uZyB0by5cclxuICAgKiBAcGFyYW0geyp9IHRpdGxlIC0gVGhlIHRpdGxlIGFwcGVhcmluZyBvbiB0aGUgbW9kYWwuXHJcbiAgICogQHBhcmFtIHsqfSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgYXBwZWFyaW5nIG9uIHRoZSBtb2RhbC5cclxuICAgKiBAcGFyYW0geyp9IHBvc2l0aXZlQnV0dG9uTGFiZWwgLSBUZXh0IGZvciB0aGUgT0sgYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gbmVnYXRpdmVCdXR0b25MYWJlbCAtIFRleHQgZm9yIHRoZSBjYW5jZWwgYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gcG9zaXRpdmVDYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHJ1biBpZiBPSyBpcyBwcmVzc2VkLlxyXG4gICAqIEBwYXJhbSB7Kn0gbmVnYXRpdmVDYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHJ1biBpZiBjYW5jZWwgaXMgcHJlc3NlZC4gJ251bGwnIGJ5XHJcbiAgICogZGVmYXVsdCwgd2hpY2ggdGhlbiBqdXN0IGNsb3NlcyB0aGUgbW9kYWwuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyAtIFJldHVybnMgdGhlIGdlbmVyYXRlZCBtb2RhbCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGNvbmZpcm1Nb2RhbChcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRpdGxlLFxyXG4gICAgbWVzc2FnZSxcclxuICAgIHBvc2l0aXZlQnV0dG9uTGFiZWwsXHJcbiAgICBuZWdhdGl2ZUJ1dHRvbkxhYmVsLFxyXG4gICAgcG9zaXRpdmVDYWxsYmFjayxcclxuICAgIG5lZ2F0aXZlQ2FsbGJhY2sgPSBudWxsXHJcbiAgKSB7XHJcbiAgICBsZXQgbW9kYWxXcmFwcGVyID0gdGhpcy5kaXYoKTtcclxuICAgIG1vZGFsV3JhcHBlci5pZCA9IFwicHJvbXB0LXdyYXBwZXJcIjtcclxuICAgIGxldCBtb2RhbCA9IHRoaXMuZGl2KGNsYXNzTmFtZSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVIZWFkZXIgPSB0aGlzLmhlYWRpbmcodGl0bGUsIDEsIFwibW9kYWwtaGVhZGVyXCIpO1xyXG4gICAgY29uc3QgbWVzc2FnZVBhcmFncmFwaCA9IHRoaXMucGFyYWdyYXBoKG1lc3NhZ2UsIFwibW9kYWwtZGlhbG9nXCIpO1xyXG4gICAgY29uc3QgcG9zaXRpdmVCdXR0b24gPSB0aGlzLmJ1dHRvbihwb3NpdGl2ZUJ1dHRvbkxhYmVsLCBcIm1vZGFsLWNvbmZpcm1cIik7XHJcbiAgICBjb25zdCBuZWdhdGl2ZUJ1dHRvbiA9IHRoaXMuYnV0dG9uKG5lZ2F0aXZlQnV0dG9uTGFiZWwsIFwibW9kYWwtY2FuY2VsXCIpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvblNlY3Rpb24gPSB0aGlzLmRpdihcIm1vZGFsLWJ1dHRvbi1hcmVhXCIpO1xyXG5cclxuICAgIGlmIChuZWdhdGl2ZUNhbGxiYWNrID09PSBudWxsKSB7XHJcbiAgICAgIG5lZ2F0aXZlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOZWdhdGl2ZSBwcmVzc2VkLlwiKTtcclxuICAgICAgICBtb2RhbFdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9zaXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvc2l0aXZlQ2FsbGJhY2spO1xyXG4gICAgcG9zaXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIHBvc2l0aXZlQ2FsbGJhY2soZSk7XHJcbiAgICAgIG1vZGFsV3JhcHBlci5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgbmVnYXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5lZ2F0aXZlQ2FsbGJhY2spO1xyXG5cclxuICAgIGJ1dHRvblNlY3Rpb24uYXBwZW5kKHBvc2l0aXZlQnV0dG9uLCBuZWdhdGl2ZUJ1dHRvbik7XHJcbiAgICBtb2RhbC5hcHBlbmQodGl0bGVIZWFkZXIsIG1lc3NhZ2VQYXJhZ3JhcGgsIGJ1dHRvblNlY3Rpb24pO1xyXG4gICAgbW9kYWxXcmFwcGVyLmFwcGVuZChtb2RhbCk7XHJcblxyXG4gICAgLy8gc3R5bGluZyBtb3ZlZCB0byAuY3NzIHBhZ2UuXHJcblxyXG4gICAgcmV0dXJuIG1vZGFsV3JhcHBlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXkgYSBicmllZiwgdW5vYnRydXNpdmUgcG9wLXVwIG1lc3NhZ2UgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxyXG4gICAqIEBwYXJhbSB7Kn0gdGV4dENvbnRlbnQgLSBUaGUgdGV4dCB0aGUgbWVzc2FnZSBzaG91bGQgZGlzcGxheS5cclxuICAgKiBAcGFyYW0geyp9IGR1cmF0aW9uIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBtZXNzYWdlIGluIHNlY29uZHMuXHJcbiAgICovXHJcbiAgdG9hc3QodGV4dENvbnRlbnQsIGR1cmF0aW9uKSB7XHJcbiAgICBsZXQgdG9hc3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHRvYXN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XHJcbiAgICB0b2FzdEJveC5jbGFzc0xpc3QuYWRkKFwidG9hc3RcIik7XHJcbiAgICB0b2FzdE1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgIHRvYXN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidG9hc3QtbWVzc2FnZVwiKTtcclxuXHJcbiAgICB0b2FzdEJveC5hcHBlbmQodG9hc3RNZXNzYWdlKTtcclxuXHJcbiAgICBsZXQgdG9hc3RCb3hDc3MgPSBcInBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAxMHZoO1wiO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gXCJ3aWR0aDogMTAwdnc7XCI7XHJcbiAgICB0b2FzdEJveENzcyArPSBgYW5pbWF0aW9uOiBmYWRlLWluLW91dCAke2R1cmF0aW9ufXM7YDtcclxuICAgIHRvYXN0Qm94Q3NzICs9IFwiei1pbmRleDogOTk5OTtcIjtcclxuXHJcbiAgICBsZXQgdG9hc3RNZXNzYWdlQ3NzID1cclxuICAgICAgXCJtYXJnaW46IDAgYXV0bzsgd2lkdGg6IDMwMHB4OyBkaXNwbGF5OiBibG9jazsgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcIjtcclxuICAgIHRvYXN0TWVzc2FnZUNzcyArPVxyXG4gICAgICBcInRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDVweDtcIjtcclxuICAgIHRvYXN0TWVzc2FnZUNzcyArPSBcImNvbG9yOiB3aGl0ZTtcIjtcclxuXHJcbiAgICB0b2FzdEJveC5zdHlsZS5jc3NUZXh0ID0gdG9hc3RCb3hDc3M7XHJcbiAgICB0b2FzdE1lc3NhZ2Uuc3R5bGUuY3NzVGV4dCA9IHRvYXN0TWVzc2FnZUNzcztcclxuXHJcbiAgICB0b2FzdEJveC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcclxuICAgICAgdG9hc3RCb3gucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0b2FzdEJveCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBzZWFyY2ggZmllbGQgd2l0aCBhIHNlYXJjaCBidXR0b24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYWNlaG9sZGVyIC0gQWR2aWNlIHRvIGdpdmUgaW4gc2VhcmNoIGZpZWxkLlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHNlYXJjaChwbGFjZWhvbGRlciA9IFwiU2VhcmNoXCIpIHtcclxuICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IFV0aWxpdHkuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJzZWFyY2gtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoRmllbGRXcmFwcGVyID0gdGhpcy5kaXYoXCJzZWFyY2gtZmllbGQtd3JhcHBlclwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEZpZWxkID0gVXRpbGl0eS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJzZWFyY2gtZmllbGRcIik7XHJcbiAgICBjb25zdCBzZWFyY2hJY29uID0gdGhpcy5mYUljb24oXCJmYXNcIiwgXCJmYS1zZWFyY2hcIik7XHJcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSB0aGlzLmJ1dHRvbihcIlwiLCBcInNlYXJjaFwiKTtcclxuXHJcbiAgICBzZWFyY2hDb250YWluZXIuc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xyXG4gICAgc2VhcmNoRmllbGRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgc2VhcmNoRmllbGQudHlwZSA9IFwic2VhcmNoXCI7XHJcbiAgICBzZWFyY2hGaWVsZC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XHJcbiAgICBzZWFyY2hGaWVsZC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgIHNlYXJjaEJ1dHRvbi5hcHBlbmQoc2VhcmNoSWNvbik7XHJcbiAgICBzZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuXHJcbiAgICBzZWFyY2hGaWVsZFdyYXBwZXIuYXBwZW5kKHNlYXJjaEZpZWxkKTtcclxuICAgIHNlYXJjaENvbnRhaW5lci5hcHBlbmQoc2VhcmNoRmllbGRXcmFwcGVyLCBzZWFyY2hCdXR0b24pO1xyXG4gICAgcmV0dXJuIHNlYXJjaENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIHNlYXJjaCBmaWVsZCBmb3IgbG9jYXRpb25zLCBzbyBpdCBpbmNsdWRlcyBhIHNlYXJjaCBmaWVsZCB3aXRoIFxyXG4gICAqIGEgbG9jYXRpb24gYnV0dG9uLlxyXG4gICAqL1xyXG4gIGdlb3NlYXJjaChwbGFjZWhvbGRlcj1cIlwiKSB7XHJcbiAgICBjb25zdCBzZWFyY2hFbGVtID0gdGhpcy5zZWFyY2gocGxhY2Vob2xkZXIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25CdXR0b24gPSB0aGlzLmJ1dHRvbihcIlwiLCBcImxvY2F0aW9uXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25JY29uID0gdGhpcy5mYUljb24oXCJmYXNcIiwgXCJmYS1tYXAtbWFya2VyLWFsdFwiKVxyXG5cclxuICAgIGxvY2F0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBsb2NhdGlvbkJ1dHRvbi5hcHBlbmQobG9jYXRpb25JY29uKTtcclxuICAgIGxvY2F0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVdGlsaXR5LmdldEdlb2xvY2F0aW9uKTtcclxuICAgIHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIikuYmVmb3JlKGxvY2F0aW9uQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gc2VhcmNoRWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0b29sdGlwLWVzcXVlIG1lc3NhZ2Ugd2hpY2ggaG92ZXJzIGJlbG93LCByZWxhdGl2ZSB0byBhbiBlbGVtZW50J3MgcG9zaXRpb24sIFxyXG4gICAqIGZvciBhIHByb3ZpZGVkIGR1cmF0aW9uLiBPbmx5IGF0dGFjaCB0byByZWxhdGl2ZWx5LXBvc2l0aW9uZWQgZWxlbWVudHMuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gKGVsZW0pIC0gUG9zaXRpb25lZCBlbGVtZW50IHRvIGF0dGFjaCB0by4gXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IChtc2cpIC0gTWVzc2FnZSB0byBkaXNwbGF5LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAocykgLSBOdW1iZXIgb2Ygc2Vjb25kcyB0byBwZXJzaXN0IG1lc3NhZ2UuIDAgZm9yIHBlcnNpc3RlbnRcclxuICAgKiB1bnRpbCB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSB0b29sdGlwLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzbWlzc09uRXh0ZXJuYWxDbGljayAtIFNob3VsZCB0aGUgdG9vbHRpcCBiZSBkaXNtaXNzZWQgYnlcclxuICAgKiBjbGlja2luZyBvdXRzaWRlIG9mIHRoZSBlbGVtZW50PyBUcnVlIGJ5IGRlZmF1bHQuXHJcbiAgICovXHJcbiAgdG9vbHRpcChlbGVtLCBtc2csIHMsIGRpc21pc3NPbkV4dGVybmFsQ2xpY2sgPSB0cnVlKSB7XHJcbiAgICBjb25zdCB0b29sdGlwQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcInRvb2x0aXBcIik7XHJcbiAgICBmb3IgKGxldCBtc2dTZWdtZW50IG9mIG1zZy5zcGxpdChcIlxcblwiKSkge1xyXG4gICAgICBjb25zdCB0b29sdGlwTXNnID0gY29tcG9uZW50LnAobXNnU2VnbWVudC50cmltKCksIFwidG9vbHRpcC1tc2dcIik7XHJcbiAgICAgIHRvb2x0aXBDb250YWluZXIuYXBwZW5kKHRvb2x0aXBNc2cpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvb2x0aXBDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246IGFic29sdXRlOyB0b3A6IDEwMCU7IHdpZHRoOiBmaXQtY29udGVudFwiO1xyXG4gICAgLy8gdGhpcyBlbnN1cmVzIHRoYXQgdGhlIGxhdGVzdCB0b29sdGlwcyBhbHdheXMgYXBwZWFyIG9uIHRoZSB0b3AuXHJcbiAgICB0b29sdGlwQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9IDEwICsgMTAgKiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b29sdGlwXCIpLmxlbmd0aCk7XHJcblxyXG4gICAgZWxlbS5hcHBlbmQodG9vbHRpcENvbnRhaW5lcik7XHJcblxyXG5cclxuICAgIGNvbnN0IHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGlzbWlzc09uRXh0ZXJuYWxDbGljaykge1xyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ICE9PSB0b29sdGlwQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNsaWNrZWQ7IHJlbW92aW5nIHRvb2x0aXBcIik7XHJcbiAgICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKTtcclxuICAgIH0pXHJcblxyXG4gICAgcC50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKHMgIT09IDApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIudG9vbHRpcFwiKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWVyIGV4cGlyZWQ7IHJlbW92aW5nIHRvb2x0aXBcIik7XHJcbiAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgcyAqIDEwMDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjaCBhIGxvYWRpbmcgbWVzc2FnZSB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWxlbSAtIEVsZW1lbnQgdG8gYXR0YWNoIGxvYWRpbmcgbWVzc2FnZSB0by5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbXNnIC0gTWVzc2FnZSB0byBwbGF5OyBkZWZhdWx0IGlzIFwibG9hZGluZ1wiLlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIGxvYWRpbmdNZXNzYWdlKHBhcmVudEVsZW0sIG1zZz1cIkxvYWRpbmdcIikge1xyXG4gICAgY29uc3QgbG9hZGluZ0Jhc2UgPSBjb21wb25lbnQucChtc2csIFwibG9hZGluZy10ZXh0XCIpO1xyXG4gICAgY29uc3QgbG9hZGluZ0RvdHMgPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwibG9hZGluZy1kb3RzXCIpO1xyXG5cclxuICAgIGxvYWRpbmdCYXNlLmFwcGVuZChsb2FkaW5nRG90cyk7XHJcbiAgICBwYXJlbnRFbGVtLmFwcGVuZChsb2FkaW5nQmFzZSk7XHJcblxyXG4gICAgY29uc3QgbG9hZGluZ0FuaW1hdGlvbiA9IHtcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIGxvYWRpbmdUZXh0QmFzZTogcGFyZW50RWxlbS5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctdGV4dFwiKSxcclxuICAgICAgbG9hZGluZ1RleHREb3RzOiBwYXJlbnRFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1kb3RzXCIpLFxyXG4gICAgICAvKipcclxuICAgICAgICogU2V0cyBhbiBpbnRlcnZhbCwgdXNpbmcgaXQgdG8gcGxheSBhIHNpbXBsZSBhbmltYXRpb24uXHJcbiAgICAgICAqL1xyXG4gICAgICBwbGF5KCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLnRleHRDb250ZW50ID0gbXNnO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHRCYXNlLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1vcGFjaXR5XCIpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHREb3RzLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCAhPT0gXCIuLi5cIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdUZXh0RG90cy50ZXh0Q29udGVudCArPSBcIi5cIjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1RleHREb3RzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCA3NTApO1xyXG4gICAgICB9LFxyXG4gICAgICBzdG9wKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dEJhc2UuY2xhc3NMaXN0LmFkZChcIm5vLW9wYWNpdHlcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dEJhc2UucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGxvYWRpbmdBbmltYXRpb247XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcclxuXHJcbiAgZ3JpZDtcclxuICBzaXplO1xyXG4gIHNoaXBzO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2l6ZSA9IDEwO1xyXG4gICAgdGhpcy5ncmlkID0gW107XHJcbiAgICB0aGlzLnNoaXBzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xyXG4gICAgICB0aGlzLmdyaWRbaV0gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNpemU7IGorKykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFtpXVtqXSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW5kIHBsYWNlcyBhIGdpdmVuIHNoaXAgYmFzZWQgb24gdGhlIGNvb3JkaW5hdGVzXHJcbiAgICogYXNzaWduZWQgdG8gdGhlIHNoaXAuIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSB0aGUgZ2l2ZW4gbGVuZ3RoIG9mIHRoZSBzaGlwLiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gdGhlIHJvdyB0byBwbGFjZSB0aGUgc2hpcC4gMC1iYXNlZCBjb29yZGluYXRlcy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIC0gdGhlIGNvbHVtbiB0byBwbGFjZSB0aGUgc2hpcC4gMC1iYXNlZCBjb29yZGluYXRlcy5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIC0gUGxhY2UgdGhlIHNoaXAgaG9yaXpvbnRhbGx5P1xyXG4gICAqIEByZXR1cm4ge1NoaXB9IC0gVGhlIHNoaXAgdGhhdCB3YXMgcGxhY2VkLCBvciBudWxsIGlmIHRoZSBzaGlwIGZhaWxlZFxyXG4gICAqIHRvIGJlIHBsYWNlZC5cclxuICAgKi9cclxuICBwbGFjZVNoaXAobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwpIHtcclxuICAgIC8vIHJldHVybiBudWxsIGlmIG91dCBvZiBib3VuZHNcclxuICAgIGlmIChyb3cgKyBsZW5ndGggPiB0aGlzLmdyaWQubGVuZ3RoXHJcbiAgICAgIHx8IGNvbCArIGxlbmd0aCA+IHRoaXMuZ3JpZC5sZW5ndGhcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIGNoZWNrIHRvIHNlZSB0aGF0IHRoZSBnaXZlbiByb3cgYW5kIGNvbCArIGxlbmd0aCBhcmUgbm90IGFscmVhZHkgb2NjdXBpZWQuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IChyb3cgKyBsZW5ndGgpOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ncmlkW2ldW2NvbF0gIT09IFwiXCIpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IChjb2wgKyBsZW5ndGgpOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd11baV0gIT09IFwiXCIpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG90aGVyd2lzZSB3ZSdyZSBnb29kIHRvIHBsYWNlIGEgc2hpcC5cclxuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnNoaXBzLmxlbmd0aDtcclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IChyb3cgKyBzaGlwLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFtpXVtjb2xdID0gaWQ7XHJcbiAgICAgICAgc2hpcC5zdGF0dXNbYCR7aX0sJHtjb2x9YF0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IChjb2wgKyBzaGlwLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFtyb3ddW2ldID0gaWQ7XHJcbiAgICAgICAgc2hpcC5zdGF0dXNbYCR7cm93fSwke2l9YF0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuXHJcbiAgICByZXR1cm4gc2hpcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExldCB0aGUgZ2FtZWJvYXJkIHJlY2VpdmUgYW4gYXR0YWNrIGF0IHRoZSBnaXZlbiByb3cgYW5kIGNvbHVtbi4gXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBoaXQuIDEgaWYgYSBoaXQgd2FzIHN1Y2Nlc3NmdWwsIDBcclxuICAgKiBpZiB0aGUgaGl0IG1pc3NlZCwgYW5kIC0xIGlmIHRoZSBhcmVhIHdhcyBhbHJlYWR5IGhpdC4gXHJcbiAgICovXHJcbiAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbCkge1xyXG4gICAgaWYgKHR5cGVvZiByb3cgIT09IFwibnVtYmVyXCIgfHwgY29sID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcHJvdmlkZSByb3cgYW5kIGNvbCBjb29yZGluYXRlcy5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNoaXBJZCA9IHRoaXMuZ3JpZFtyb3ddW2NvbF07XHJcblxyXG4gICAgaWYgKHNoaXBJZCA9PT0gXCJ4XCIgfHwgc2hpcElkID09PSBcIm9cIikge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9IGVsc2UgaWYgKHNoaXBJZCA9PT0gXCJcIikge1xyXG4gICAgICB0aGlzLmdyaWRbcm93XVtjb2xdID0gXCJvXCI7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXSA9IFwieFwiO1xyXG4gICAgICB0aGlzLnNoaXBzW3NoaXBJZF0uaGl0KHJvdywgY29sKTtcclxuXHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0R3JpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYXZlIGFsbCBzaGlwcyBiZWVuIHN1bmsgb24gdGhlIGdhbWVib2FyZD9cclxuICAgKi9cclxuICBhbGxTaGlwc1N1bmsoKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcclxuICAgIHRoaXMuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdGF0dXM7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IEJhdHRsZXNoaXBFbGVtZW50cyB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogTWFuYWdlcyBhIGdhbWUgc2Vzc2lvbiBmb3IgYmF0dGxlc2hpcC4gS2VlcHMgdHJhY2sgb2YgcGxheWVycy5cclxuICogQ2FuIHN0YXJ0LCBlbmQsIGFuZCByZXNldCB0aGUgZ2FtZS5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURSA9IHtcclxuICBwMXR1cm46IFwiUGxheWVyIDEncyB0dXJuXCIsXHJcbiAgcDJ0dXJuOiBcIlBsYXllciAyJ3MgdHVyblwiLFxyXG4gIGVuZGVkOiBcIkdhbWUgZW5kZWQuXCIsXHJcbiAgcDF2aWN0b3J5OiBcIlBsYXllciAxIHdpbnMuXCIsXHJcbiAgcDJ2aWN0b3J5OiBcIlBsYXllciAyIHdpbnMuXCIsXHJcbiAgcmVzdGFydDogXCJSZXN0YXJ0aW5nIGdhbWUuLi5cIixcclxuICBwbGF5aW5nOiBcIkdhbWUgYWN0aXZlLlwiLFxyXG4gIGdhbWVQcm9tcHQ6IFwiV2VsY29tZS4gRHJhZyBzaGlwcyBvbnRvIGdhbWVib2FyZC4gQ2xpY2sgKHdoZW4gcGxhY2VkKTogUm90YXRlLlwiXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIge1xyXG4gIFxyXG4gIHN0YXRpYyAjaW5zdGFuY2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwbGF5ZXJzIGludm9sdmVkIGluIHRoZSBnYW1lLlxyXG4gICAqL1xyXG4gIHBsYXllcnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIElzIGl0IHBsYXllciAxJ3MgdHVybj8gXHJcbiAgICovXHJcbiAgcDF0dXJuO1xyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSBvZiB0aGUgbGVuZ3RocyBvZiBlYWNoIHNoaXAgdGhhdCB0aGUgcGxheWVyIHdpbGwgaGF2ZSBpbiB0aGVpciBhcnNlbmFsLlxyXG4gICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgKi9cclxuICBzaGlwTGVuZ3RocztcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBnYW1lLlxyXG4gICAqIEBwYXJhbSB7UGxheWVyW119IHBsYXllcnMgLSBBbiBhcnJheSBvZiB0aGUgcGxheWVycyBpbiB0aGUgZ2FtZS5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHAxc3RhcnQgLSBTaG91bGQgcGxheWVyIDEgc3RhcnQgZmlyc3Q/IFRydWUgYnkgZGVmYXVsdC5cclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwbGF5ZXJzLCBwMXN0YXJ0ID0gdHJ1ZSwgc2hpcExlbmd0aHMgPSBbMiwgMywgMywgNCwgNV0pIHtcclxuICAgIGlmIChHYW1lTWFuYWdlci4jaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gR2FtZU1hbmFnZXIuI2luc3RhbmNlO1xyXG4gICAgfSBcclxuXHJcbiAgICBHYW1lTWFuYWdlci4jaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcclxuICAgIHRoaXMucDF0dXJuID0gcDFzdGFydDtcclxuICAgIHRoaXMuc2hpcExlbmd0aHMgPSBzaGlwTGVuZ3RocztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSBnYW1lLlxyXG4gICAqL1xyXG4gIHN0YXJ0R2FtZSgpIHtcclxuICAgIHRoaXMucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgIGlmIChwbGF5ZXIuY3B1KSB7XHJcbiAgICAgICAgdGhpcy4jY3B1UGxhY2VTaGlwcyhwbGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICNjcHVQbGFjZVNoaXBzKHBsYXllcikge1xyXG4gICAgdGhpcy5zaGlwTGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBzdGF0dXMgPSBudWxsO1xyXG4gICAgICBsZXQgcm93O1xyXG4gICAgICBsZXQgY29sO1xyXG4gICAgICBsZXQgdmVydGljYWw7XHJcblxyXG4gICAgICB3aGlsZSAoc3RhdHVzID09PSBudWxsKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgICAgIC8vIHdoZW4gdGVzdGluZyB0aGUgZ2FtZSBwaGFzZSwgb3ZlcnJpZGUgcm93IGFuZCBjb2wgdG8gYmUgMCwgMCB0byB0ZXN0XHJcbiAgICAgICAgLy8gdmljdG9yeSBwaGFzZS5cclxuICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAocGxheWVyLmdhbWVib2FyZC5zaXplLTEpKTtcclxuICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAocGxheWVyLmdhbWVib2FyZC5zaXplLTEpKTtcclxuICAgICAgICB2ZXJ0aWNhbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3RhdHVzID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBCYXR0bGVzaGlwRWxlbWVudHMucGxhY2VTaGlwTWFudWFsbHkobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwsIHRydWUsIGBjcHUtc2hpcCR7aW5kZXh9YCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCIvL2pzIFxyXG5pbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi91dGlsaXR5XCI7XHJcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IHsgR0FNRV9TVEFURSB9IGZyb20gXCIuL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9nYW1lbWFuYWdlclwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuLy9jc3NcclxuaW1wb3J0IFwiLi4vY3NzL3Jlc2V0LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3MvaW5kZXguY3NzXCI7XHJcblxyXG4vLyBwZXJmb3JtIGFueSBET00gY2hhbmdlIGFjdGlvbiBpbiB5b3VyIHBhZ2UuIGUuZy4gc2hvdy9oaWRlXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgZWxlbWVudHMgZm9yIEJhdHRsZXNoaXAuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmF0dGxlc2hpcEVsZW1lbnRzIHtcclxuXHJcbiAgI2RpYWxvZ0hvbGRlcjtcclxuICAjZ2FtZUNvbnRhaW5lcjtcclxuICBnYW1lTWFuYWdlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZU1hbmFnZXIpIHtcclxuICAgIHRoaXMuZ2FtZU1hbmFnZXIgPSBnYW1lTWFuYWdlcjtcclxuICB9XHJcblxyXG4gIGhlYWRlcigpIHtcclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcInRpdGxlLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBjb21wb25lbnQuaGVhZGluZyhcIkJhdHRsZXNoaXBzXCIsIDEpO1xyXG4gICAgY29uc3QgYXV0aG9yTGFiZWwgPSBjb21wb25lbnQucChcImJ5IERhbiBULlwiLCAyKTtcclxuXHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQodGl0bGVMYWJlbCwgYXV0aG9yTGFiZWwpO1xyXG5cclxuICAgIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGdhbWVBcmVhKCkge1xyXG4gICAgdGhpcy4jZ2FtZUNvbnRhaW5lciA9IGNvbXBvbmVudC5kaXYoXCJnYW1lLWFyZWFcIik7XHJcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZ2FtZWJvYXJkLWFyZWFcIik7XHJcbiAgICBjb25zdCBjb250cm9sRGlhbG9nQ29udGFpbmVyID0gY29tcG9uZW50LmRpdihcImNvbnRyb2xzLWFyZWFcIik7XHJcblxyXG4gICAgdGhpcy4jZ2FtZUNvbnRhaW5lci5hcHBlbmQoZ2FtZWJvYXJkQ29udGFpbmVyLCBjb250cm9sRGlhbG9nQ29udGFpbmVyKTtcclxuXHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kKHRoaXMuI2dhbWVib2FyZChcIlBsYXllclwiLCBcInAxXCIpLCB0aGlzLiNnYW1lYm9hcmQoXCJDUFVcIiwgXCJwMlwiKSk7XHJcblxyXG4gICAgY29udHJvbERpYWxvZ0NvbnRhaW5lci5hcHBlbmQodGhpcy4jZGlhbG9nKCksIHRoaXMuI3NoaXBQbGFjZW1lbnQoKSwgdGhpcy4jc3RhcnRHYW1lUHJvbXB0KCkpO1xyXG5cclxuICAgIHRoaXMuI2VuYWJsZURyYWdnaW5nQW5kUm90YXRpb24oKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy4jZ2FtZUNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGNsaWNrYWJsZSBncmlkIGJhc2VkIG9uIHRoZSBnYW1lIG1hbmFnZXIncyBnYW1lYm9hcmQgc2l6ZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWVyTmFtZSA6IHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXI7IHVzZWQgYXMgYSBjbGFzcyBuYW1lIHRvIFxyXG4gICAqIGlkZW50aWZ5IHRoZSBnYW1lYm9hcmQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSA6IEFkZGl0aW9uYWwgY2xhc3MgbmFtZXMgdG8gaWRlbnRpZnkgdGhlIGdhbWVib2FyZCBieS5cclxuICAgKi9cclxuICAjZ2FtZWJvYXJkKHBsYXllck5hbWUsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gY29tcG9uZW50LmRpdihcImdhbWVib2FyZFwiLCBjbGFzc05hbWUpO1xyXG4gICAgY29uc3QgZ2FtZWJvYXJkR3JpZCA9IGNvbXBvbmVudC5kaXYoXCJnYW1lYm9hcmQtZ3JpZFwiKTtcclxuXHJcbiAgICBjb25zdCBncmlkU2l6ZSA9IHRoaXMuZ2FtZU1hbmFnZXIucGxheWVyc1swXS5nYW1lYm9hcmQuc2l6ZTtcclxuICAgIGNvbnN0IG51bWJlckNlbGwgPSBjb21wb25lbnQuZGl2KFwiY2VsbFwiLCBcIm51bWJlcmluZ1wiKTtcclxuXHJcbiAgICBnYW1lYm9hcmRHcmlkLnByZXBlbmQoY29tcG9uZW50LmRpdihcImNlbGxcIiwgXCJibGFua1wiKSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIHJvdyBudW1iZXJpbmdcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZFNpemU7IGkrKykge1xyXG4gICAgICBudW1iZXJDZWxsLnRleHRDb250ZW50ID0gaSArIDE7XHJcbiAgICAgIGdhbWVib2FyZEdyaWQuYXBwZW5kKG51bWJlckNlbGwuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGUgY29sdW1uIG51bWJlcmluZyBhbmQgY2VsbHNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZFNpemU7IGkrKykge1xyXG4gICAgICBudW1iZXJDZWxsLnRleHRDb250ZW50ID0gaSArIDE7XHJcblxyXG4gICAgICBnYW1lYm9hcmRHcmlkLmFwcGVuZChudW1iZXJDZWxsLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRTaXplOyBqKyspIHtcclxuICAgICAgICBsZXQgY2VsbCA9IGNvbXBvbmVudC5kaXYoXCJjZWxsXCIsIFwic2VsZWN0YWJsZVwiKTtcclxuICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gaTtcclxuICAgICAgICBjZWxsLmRhdGFzZXQuY29sID0gajtcclxuICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IFwiXCI7XHJcbiAgICAgICAgZ2FtZWJvYXJkR3JpZC5hcHBlbmQoY2VsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnYW1lYm9hcmQuYXBwZW5kKGdhbWVib2FyZEdyaWQpO1xyXG5cclxuICAgIC8vIEFwcGx5IGhlYWRlcnMgZm9yIHRoZSBnYW1lYm9hcmRcclxuICAgIGdhbWVib2FyZC5wcmVwZW5kKGNvbXBvbmVudC5oZWFkaW5nKHBsYXllck5hbWUsIDIsIFwiZ2FtZWJvYXJkLW93bmVyXCIpKTtcclxuXHJcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGVzIGEgZGlhbG9nIG1lc3NhZ2UsIHdoaWNoIGlzIHVzZWQgdG8gXHJcbiAgICogZ2l2ZSB0aGUgdXNlciBkaXJlY3Rpb25zIG9uIGVhY2ggcGhhc2Ugb2YgdGhlIGdhbWUuXHJcbiAgICovXHJcbiAgI2RpYWxvZygpIHtcclxuICAgIGxldCBkaWFsb2dDb250YWluZXIgPSBjb21wb25lbnQuZGl2KFwiZGlhbG9nXCIpO1xyXG4gICAgbGV0IGRpYWxvZ01zZyA9IGNvbXBvbmVudC5wKFwiV2VsY29tZS5cIiwgXCJkaWFsb2ctbXNnXCIpO1xyXG4gICAgZGlhbG9nQ29udGFpbmVyLmFwcGVuZChkaWFsb2dNc2cpO1xyXG5cclxuICAgIHRoaXMuI2RpYWxvZ0hvbGRlciA9IGRpYWxvZ0NvbnRhaW5lcjtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlhbG9nKG1lc3NhZ2UpIHtcclxuICAgIHRoaXMuI2RpYWxvZ0hvbGRlci5xdWVyeVNlbGVjdG9yKFwiLmRpYWxvZy1tc2dcIikudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGVzIGFuIGludmVudG9yeSBvZiBzaGlwcyBhbmQgbGV0cyB0aGVtIGJlIGRyYWdnZWQgYnkgdGhlIHBsYXllci5cclxuICAgKi9cclxuICAjc2hpcFBsYWNlbWVudCgpIHtcclxuICAgIGxldCBzaGlwSW52ZW50b3J5ID0gY29tcG9uZW50LmRpdihcInNoaXAtcGxhY2VyXCIpO1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSBjb21wb25lbnQuaGVhZGluZyhcIlNlbGVjdCBTaGlwXCIsIDMpO1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IGNvbXBvbmVudC5kaXYoXCJzaGlwLXNlbGVjdGlvblwiKTtcclxuXHJcbiAgICB0aGlzLmdhbWVNYW5hZ2VyLnNoaXBMZW5ndGhzLmZvckVhY2goKHNoaXBMZW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBzaGlwID0gY29tcG9uZW50LmRpdihcInNoaXBcIiwgXCJkcmFnZ2FibGVcIik7XHJcbiAgICAgIHNoaXAuaWQgPSBgcGxheWVyLXNoaXAke2luZGV4fWA7XHJcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuOyBpKyspIHtcclxuICAgICAgICBsZXQgY2VsbCA9IGNvbXBvbmVudC5kaXYoXCJjZWxsXCIpO1xyXG4gICAgICAgIHNoaXAuYXBwZW5kKGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3Rpb24uYXBwZW5kKHNoaXApO1xyXG4gICAgfSlcclxuXHJcbiAgICBzaGlwSW52ZW50b3J5LmFwcGVuZChoZWFkZXIsIHNlbGVjdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIHNoaXBJbnZlbnRvcnk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb250YWlucyBhIGNvbGxlY3Rpb24gb2YgY2FsbGJhY2tzIHRvIGVuYWJsZSBkcmFnICduJyBkcm9wIG9uIHRoZSBnYW1lYm9hcmQgd2l0aCByb3RhdGlvbi5cclxuICAgKiBXb3JrcyB3aXRoIHRoZSBkcmFnIGFuZCBkcm9wIEFQSSwgc28gaXQgd29ya3MgdG8gYXNzaWduIGNhbGxiYWNrcyB0byB0aGUgXHJcbiAgICogZHJhZ2dhYmxlIGl0ZW1zLCBhbmQgYWxsIHRoZSBkcm9wcGFibGUgem9uZSBpdCBwZXJ0YWlucyB0by4gSW4gdGhpcyBjYXNlLFxyXG4gICAqIHRoZSBzaGlwcyBhcmUgdGhlIGRyYWdnYWJsZXMsIGFuZCB0aGUgZHJvcCB6b25lcyBhcmUgYWxsIHRoZSBjZWxscyBvZiBcclxuICAgKiBwbGF5ZXIgMSdzIGdhbWVib2FyZC5cclxuICAgKi9cclxuICAjZW5hYmxlRHJhZ2dpbmdBbmRSb3RhdGlvbigpIHtcclxuICAgIGNvbnN0IHJlbW92ZURyYWdHdWlkZSA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVcIilcclxuICAgICAgICAuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkLWRyYWdcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGN1cnJlbnREcmFnZ2VkTGVuZ3RoO1xyXG4gICAgbGV0IGN1cnJlbnREcmFnZ2VkU2hpcElkO1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuI2dhbWVDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGVcIikuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmlkKTtcclxuXHJcbiAgICAgICAgY3VycmVudERyYWdnZWRMZW5ndGggPSBlLnRhcmdldC5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgICAgICBjdXJyZW50RHJhZ2dlZFNoaXBJZCA9IGUudGFyZ2V0LmlkID8/IGUudGFyZ2V0LmRhdGFzZXQuc2hpcDtcclxuICAgICAgICAvLyBibGFuayBpbWFnZVxyXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoaW1nLCAwLCAwKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50RHJhZ2dlZFNoaXBJZH1gKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhbGwgY2VsbHMgdGhhdCBhcmUgc2VsZWN0YWJsZSBhcmUgZHJvcHBhYmxlIGFyZWFzLlxyXG4gICAgdGhpcy4jZ2FtZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVwiKS5mb3JFYWNoKGNlbGwgPT4ge1xyXG5cclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgICAgIGxldCBob3ZlckNlbGwgPSBVdGlsaXR5LmdldE1hdGNoaW5nUGFyZW50KGUudGFyZ2V0LCBcIi5zZWxlY3RhYmxlXCIpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50RHJhZ2dlZFNoaXBJZH1gKS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbnREcmFnZ2VkU2hpcElkfWApLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpKSB7XHJcbiAgICAgICAgICAvLyBhcHBseSB2ZXJ0aWNhbCBndWlkZS5cclxuICAgICAgICAgIGxldCBjb2wgPSBob3ZlckNlbGwuZGF0YXNldC5jb2w7XHJcbiAgICAgICAgICBsZXQgY2VsbHNDb2wgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wMS5nYW1lYm9hcmQgW2RhdGEtY29sPVwiJHtjb2x9XCJdYCkpO1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gY2VsbHNDb2wuaW5kZXhPZihob3ZlckNlbGwpO1xyXG5cclxuICAgICAgICAgIGlmIChpbmRleCArIGN1cnJlbnREcmFnZ2VkTGVuZ3RoIDw9IGNlbGxzQ29sLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIGN1cnJlbnREcmFnZ2VkTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAvLyBub3QgYSB2YWxpZCBwbGFjZW1lbnQuXHJcbiAgICAgICAgICAgICAgaWYgKGNlbGxzQ29sW2ldLmNsYXNzTGlzdC5jb250YWlucyhcIm9jY3VwaWVkXCIpXHJcbiAgICAgICAgICAgICAgICAmJiBjZWxsc0NvbFtpXS5kYXRhc2V0LnNoaXAgIT09IGN1cnJlbnREcmFnZ2VkU2hpcElkKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVEcmFnR3VpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY2VsbHNDb2xbaV0uY2xhc3NMaXN0LmFkZChcInZhbGlkLWRyYWdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gYXBwbHkgaG9yaXpvbnRhbCBndWlkZVxyXG4gICAgICAgICAgbGV0IHJvdyA9IGhvdmVyQ2VsbC5kYXRhc2V0LnJvdztcclxuICAgICAgICAgIGxldCBjZWxsc1JvdyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke3Jvd31cIl1gKSk7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSBjZWxsc1Jvdy5pbmRleE9mKGhvdmVyQ2VsbCk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJob3ZlcmluZyBvdmVyIGluZGV4OiBcIiArIGluZGV4KTtcclxuXHJcbiAgICAgICAgICBpZiAoaW5kZXggKyBjdXJyZW50RHJhZ2dlZExlbmd0aCA8PSBjZWxsc1Jvdy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBjdXJyZW50RHJhZ2dlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gbm90IGEgdmFsaWQgcGxhY2VtZW50LlxyXG4gICAgICAgICAgICAgIGlmIChjZWxsc1Jvd1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJvY2N1cGllZFwiKVxyXG4gICAgICAgICAgICAgICAgJiYgY2VsbHNSb3dbaV0uZGF0YXNldC5zaGlwICE9PSBjdXJyZW50RHJhZ2dlZFNoaXBJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaXJhaCFcIik7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVEcmFnR3VpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGNlbGxzUm93W2ldLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcmFnXCIpO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHtpbmRleCwgY3VycmVudERyYWdnZWRMZW5ndGgsIGl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHdoZW4gdGhlIGRyYWcgZWxlbWVudCBsZWF2ZXMgZHJvcHBhYmxlIHpvbmUsIHJlbW92ZSBhbGwgdmFsaWQgZHJhZ1xyXG4gICAgICAvLyBpdCdsbCBqdXN0IGJlIHJlY3JlYXRlZCBieSB2YWxpZC1kcmFnLlxyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgcmVtb3ZlRHJhZ0d1aWRlKTtcclxuXHJcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGUpID0+IHtcclxuICAgICAgICAvLyBvbmx5IHdoZW4gdGhlIGFyZWEgaXMgYSB2YWxpZC1kcmFnIGRvIHdlIGFkZCBpdCBpbi4gb3RoZXJ3aXNlLCBub3BlLlxyXG4gICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmFsaWQtZHJhZ1wiKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJlbW92ZURyYWdHdWlkZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG5cclxuICAgICAgICAvLyBiZWZvcmUgbW92aW5nIHRoZSBzaGlwLCBkZXRlcm1pbmUgaWYgaXQgaGFzIGJlZW4gcGxhY2VkIGFscmVhZHkuLi4gXHJcbiAgICAgICAgLy8gdGhpcyBpcyB0cnVlIGlmIHRoZSBzaGlwIGlzIGluc2lkZSBhIHNlbGVjdGFibGUgY2VsbC5cclxuICAgICAgICBsZXQgbGFzdFBsYWNlZExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlbGVjdGFibGUgIyR7aWR9YCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHNvIHdlIG5lZWQgdG8gcmVtb3ZlIG9jY3VwaWVkIGZyb20gc3VjaCBjZWxscy5cclxuICAgICAgICBpZiAobGFzdFBsYWNlZExvY2F0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBsZXQgY2VsbHM7XHJcbiAgICAgICAgICBsZXQgdmVydGljYWwgPSBsYXN0UGxhY2VkTG9jYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIik7XHJcblxyXG4gICAgICAgICAgLy8gcGFyZW50Tm9kZSBpcyB0aGUgY2VsbC5cclxuICAgICAgICAgIGxhc3RQbGFjZWRMb2NhdGlvbiA9IGxhc3RQbGFjZWRMb2NhdGlvbi5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICBsZXQgY29sID0gbGFzdFBsYWNlZExvY2F0aW9uLmRhdGFzZXQuY29sO1xyXG4gICAgICAgICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1jb2w9XCIke2NvbH1cIl1gKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgb2NjdXBpZWQgbWFya2luZyBmcm9tIHRob3NlIGNlbGxzLlxyXG4gICAgICAgICAgICBsZXQgcm93ID0gbGFzdFBsYWNlZExvY2F0aW9uLmRhdGFzZXQucm93O1xyXG4gICAgICAgICAgICBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke3Jvd31cIl1gKSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGV0IGluZGV4ID0gY2VsbHMuaW5kZXhPZihsYXN0UGxhY2VkTG9jYXRpb24pO1xyXG5cclxuICAgICAgICAgIC8vIGNvbG9yIHRoZSBzdWJzZXF1ZW50IGNlbGxzLlxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBjdXJyZW50RHJhZ2dlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvY2N1cGllZFwiKTtcclxuICAgICAgICAgICAgY2VsbHNbaV0uZGF0YXNldC5zaGlwID0gXCJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwbGFjZWRDZWxsID0gZS50YXJnZXQ7XHJcbiAgICAgICAgLy8gbW92ZSB0aGUgc2hpcFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBsYWNlZFwiKTtcclxuICAgICAgICBwbGFjZWRDZWxsLmFwcGVuZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKSk7XHJcblxyXG4gICAgICAgIGxldCB2ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpO1xyXG4gICAgICAgIGxldCBjZWxscztcclxuXHJcbiAgICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgICBsZXQgY29sID0gcGxhY2VkQ2VsbC5kYXRhc2V0LmNvbDtcclxuICAgICAgICAgIGNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLWNvbD1cIiR7Y29sfVwiXWApKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZ2V0IHRoZSByb3csIGluZGV4LCBhbmQgcGxhY2UgdGhlcmVhZnRlciBvZiB0aGUgcGxhY2VkIGNlbGwuXHJcbiAgICAgICAgICBsZXQgcm93ID0gcGxhY2VkQ2VsbC5kYXRhc2V0LnJvdztcclxuICAgICAgICAgIGNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucDEuZ2FtZWJvYXJkIFtkYXRhLXJvdz1cIiR7cm93fVwiXWApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IGNlbGxzLmluZGV4T2YocGxhY2VkQ2VsbCk7XHJcblxyXG4gICAgICAgIC8vIGNvbG9yIHRoZSBzdWJzZXF1ZW50IGNlbGxzLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgY3VycmVudERyYWdnZWRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgY2VsbHNbaV0uZGF0YXNldC5zaGlwID0gaWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhbGxvdyB0aGUgc2hpcCB0byBiZSByb3RhdGVkLlxyXG4gICAgICAgIHNlbGYuI2FsbG93UGxhY2VkU2hpcFJvdGF0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gY29kZSB0byByZXR1cm4gc2hpcCB0byBpbnZlbnRvcnlcclxuICAgICAgdGhpcy4jZ2FtZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtcGxhY2VyXCIpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4jZ2FtZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtcGxhY2VyXCIpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcC1wbGFjZWRcIik7XHJcbiAgICAgICAgICBlLnRhcmdldC5hcHBlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIGZvciBzaGlwcyB0byBiZSByb3RhdGVkOyB0aGlzIGlzIGludm9rZWQgZWFjaCB0aW1lIGEgc2hpcCBpcyBwbGFjZWQsXHJcbiAgICogdG8gYWxsb3cgc2hpcHMsIG9uIHRoZSBnYW1lYm9hcmQsIHRvIGJlIHJvdGF0ZWQuXHJcbiAgICovXHJcbiAgI2FsbG93UGxhY2VkU2hpcFJvdGF0aW9uKCkge1xyXG4gICAgbGV0IGdyaWRTaXplID0gdGhpcy5nYW1lTWFuYWdlci5wbGF5ZXJzWzBdLmdhbWVib2FyZC5ncmlkLmxlbmd0aDtcclxuICAgIC8vIGFsbG93IHJvdGF0aW9uIG9mIHBsYWNlZCBzaGlwc1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLmRyYWdnYWJsZS5zaGlwLXBsYWNlZFwiKS5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICBpZiAoc2hpcC5vbmNsaWNrID09PSBudWxsKSB7XHJcbiAgICAgICAgc2hpcC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHZlcnRpY2FsT24gPSBzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgbGV0IGNlbGwgPSBzaGlwLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICBsZXQgc2hpcExlbmd0aCA9IHNoaXAuY2hpbGRFbGVtZW50Q291bnQ7XHJcblxyXG4gICAgICAgICAgbGV0IHJvd0luZGV4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdyk7XHJcbiAgICAgICAgICBsZXQgY29sSW5kZXggPSBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sKTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IHJvd0luZGV4LCBzaGlwTGVuZ3RoLCBncmlkU2l6ZSB9KTtcclxuXHJcbiAgICAgICAgICBpZiAocm93SW5kZXggKyBzaGlwTGVuZ3RoID4gZ3JpZFNpemUgfHwgY29sSW5kZXggKyBzaGlwTGVuZ3RoID4gZ3JpZFNpemUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGNoZWNrIGlmIGFueSBzaGlwcyBhcmUgaW4gdGhlIHdheSBvZiB0aGUgcm90YXRpb24uXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gcm93SW5kZXggKyAxOyBpIDwgcm93SW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnRcclxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgLnAxLmdhbWVib2FyZCBbZGF0YS1yb3c9XCIke2l9XCJdYCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGNvbEluZGV4OyBqIDwgY29sSW5kZXggKyBzaGlwTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICBpZiAoY2VsbHNbal0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib2NjdXBpZWRcIikgJiYgY2VsbHNbal0uZGF0YXNldC5zaGlwICE9PSBzaGlwLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgcHJvY2VlZC5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlcmUncyBlbm91Z2ggc3BhY2UgdG8gbW92ZSBpdCB2ZXJ0aWNhbGx5LCBiYXNlZCBvbiB0aGUgc2hpcCBsZW5ndGguXHJcbiAgICAgICAgICAvLyAxIG5vIHNoaXBzIGluIHRoZSB3YXlcclxuICAgICAgICAgIC8vIDIud2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIGdhbWVib2FyZC5cclxuICAgICAgICAgIC8vIG9ubHkgdGhlbiBkbyB5b3UgYWxsb3cgdmVydGljYWwgY2xhc3MuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjZWxsKTtcclxuXHJcbiAgICAgICAgICBpZiAodmVydGljYWxPbikge1xyXG4gICAgICAgICAgICAvLyB2ZXJ0aWNhbCAtPiBob3Jpem9udGFsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSByb3dJbmRleCArIDE7IGkgPCByb3dJbmRleCArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7aX1cIl1bZGF0YS1jb2w9XCIke2NvbEluZGV4fVwiXWApO1xyXG4gICAgICAgICAgICAgIC8vIHN0cmlwIHZlcnRpY2FsIG9jY3VwaWVkXHJcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29sSW5kZXggKyAxOyBpIDwgY29sSW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAvLyBhZGQgaG9yaXpvbnRhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sPVwiJHtpfVwiXWApO1xyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gc2hpcC5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbCAtPiB2ZXJ0aWNhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29sSW5kZXggKyAxOyBpIDwgY29sSW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAvLyByZW1vdmUgaG9yaXpvbnRhbCBvY2N1cGllZFxyXG4gICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnAxLmdhbWVib2FyZCAuc2VsZWN0YWJsZVtkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sPVwiJHtpfVwiXWApXHJcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93SW5kZXggKyAxOyBpIDwgcm93SW5kZXggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAvLyBhZGQgdmVydGljYWwgb2NjdXBpZWRcclxuICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wMS5nYW1lYm9hcmQgLnNlbGVjdGFibGVbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKVxyXG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIpO1xyXG4gICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gc2hpcC5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHRvZ2dsZSB2ZXJ0aWNhbCBmb3IgdGhlIHZpZXdcclxuICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgLy8gdGhlbiwgYWx0ZXIgdGhlIG9jY3VwaWVkIGNsYXNzLlxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGRpc2FibGUgcm90YXRpb24gZm9yIHNoaXBzIHRoYXQgYXJlIG5vdCBwbGFjZWQuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAuZHJhZ2dhYmxlOm5vdCguc2hpcC1wbGFjZWQpXCIpLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIGlmIChzaGlwLm9uY2xpY2sgIT09IG51bGwpIHtcclxuICAgICAgICBzaGlwLm9uY2xpY2sgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQbGFjZXMgc2hpcHMgb24gdGhlIGdhbWVib2FyZCBnaXZlbiBjb29yZGluYXRlcy4gVXNlZnVsIGZvciBBSS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCBcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGxheWVyMiAtIFBsYWNlIHNoaXBzIG9uIHBsYXllciAyJ3MgZ2FtZWJvYXJkP1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIHRoZSBJRCB0aGUgc2hpcCBzaG91bGQgYmUgaWRlbnRpZmllZCBieS5cclxuICAgKi9cclxuICBzdGF0aWMgcGxhY2VTaGlwTWFudWFsbHkobGVuZ3RoLCByb3csIGNvbCwgdmVydGljYWwsIHBsYXllcjIgPSB0cnVlLCBpZCkge1xyXG4gICAgY29uc29sZS5sb2coe2xlbmd0aCwgcm93LCBjb2wsIHZlcnRpY2FsLCBwbGF5ZXIyLCBpZH0pO1xyXG4gICAgbGV0IHNlbGVjdG9yO1xyXG4gICAgbGV0IGdhbWVib2FyZDsgXHJcbiAgICBsZXQgY3B1VGFnID0gXCJjcHUtc2hpcC1wbGFjZWRcIjtcclxuXHJcbiAgICBpZiAocGxheWVyMikge1xyXG4gICAgICBzZWxlY3RvciA9IFwiLnAyLmdhbWVib2FyZFwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWxlY3RvciA9IFwiLnAxLmdhbWVib2FyZFwiXHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtzZWxlY3Rvcn1gKTtcclxuXHJcbiAgICBsZXQgb3JpZ2luQ2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGAuc2VsZWN0YWJsZVtkYXRhLXJvdz0nJHtyb3d9J11bZGF0YS1jb2w9JyR7Y29sfSddYCk7XHJcbiAgICBvcmlnaW5DZWxsLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG5cclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgbGV0IHJvd3MgPSBBcnJheS5mcm9tKGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKGAuc2VsZWN0YWJsZVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3cgKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJvd3NbaV0uY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIsIGNwdVRhZyk7XHJcbiAgICAgICAgcm93c1tpXS5kYXRhc2V0LnNoaXAgPSBpZDtcclxuXHJcbiAgICAgICAgc3dpdGNoKGkpIHtcclxuICAgICAgICAgIGNhc2Ugcm93OiAvLyBzdGFydFxyXG4gICAgICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN0YXJ0LXZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2Ugcm93ICsgbGVuZ3RoIC0gMTogLy8gZW5kXHJcbiAgICAgICAgICAgIHJvd3NbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtZW5kLXZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6IC8vIG1pZFxyXG4gICAgICAgICAgICByb3dzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW1pZGRsZS12ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY29scyA9IEFycmF5LmZyb20oZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoYC5zZWxlY3RhYmxlW2RhdGEtcm93PVwiJHtyb3d9XCJdYCkpO1xyXG4gICAgICBcclxuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29sc1tpXS5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIiwgY3B1VGFnKTtcclxuICAgICAgICBjb2xzW2ldLmRhdGFzZXQuc2hpcCA9IGlkO1xyXG5cclxuICAgICAgICBzd2l0Y2goaSkge1xyXG4gICAgICAgICAgY2FzZSBjb2w6IC8vIHN0YXJ0XHJcbiAgICAgICAgICAgIGNvbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtc3RhcnQtaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIGNvbCArIGxlbmd0aCAtIDE6IC8vIGVuZFxyXG4gICAgICAgICAgICBjb2xzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVuZC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6IC8vIG1pZFxyXG4gICAgICAgICAgICBjb2xzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW1pZGRsZS1ob3Jpem9udGFsXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXNrcyB1c2VyIGZvciB0aGVpciBuYW1lIGFuZCB0byBzdGFydCB0aGUgZ2FtZS4uLiBvbmx5IHdoZW4gdGhlIHNoaXAgcGxhY2VtZW50IGNvbnRhaW5lciBpcyBlbXB0eVxyXG4gICAqIHdpbGwgdGhlIHN0YXJ0IGdhbWUgYnV0dG9uIHVubG9jay5cclxuICAgKi9cclxuICAjc3RhcnRHYW1lUHJvbXB0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IHN0YXJ0R2FtZUZvcm0gPSBVdGlsaXR5LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFwic3RhcnQtZ2FtZS1wcm9tcHRcIik7XHJcbiAgICBsZXQgW3BsYXllck5hbWVMYWJlbCwgcGxheWVyTmFtZUZpZWxkXSA9IGNvbXBvbmVudC5mb3JtSW5wdXQoXCJOYW1lXCIsIFwiaW5wdXRcIiwgXCJwMS1uYW1lXCIsIFwicDEtbmFtZVwiKTtcclxuICAgIGxldCBzdGFydEdhbWVCdXR0b24gPSBjb21wb25lbnQuYnV0dG9uKFwiU3RhcnQgR2FtZSFcIiwgXCJzdGFydC1nYW1lLWJ1dHRvblwiKTtcclxuICAgIGxldCBlcnJvckZpZWxkID0gY29tcG9uZW50LnAoXCJFcnJvciBGaWVsZCBIZXJlXCIsIFwiZm9ybS1lcnJvci1maWVsZFwiKTtcclxuXHJcbiAgICBwbGF5ZXJOYW1lRmllbGQudmFsdWUgPSBcIkNvbW1hbmRlclwiO1xyXG4gICAgcGxheWVyTmFtZUZpZWxkLnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICBzdGFydEdhbWVGb3JtLmFwcGVuZChwbGF5ZXJOYW1lTGFiZWwsIHBsYXllck5hbWVGaWVsZCwgc3RhcnRHYW1lQnV0dG9uLCBlcnJvckZpZWxkKTtcclxuXHJcblxyXG4gICAgc3RhcnRHYW1lQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBzdGFydEdhbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgc2VsZi5nYW1lTWFuYWdlci5zdGFydEdhbWUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdGFydEdhbWVGb3JtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbihmdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICBjb25zdCBwMSA9IG5ldyBQbGF5ZXIoXCJDb21tYW5kZXIgQmx1ZVwiLCBmYWxzZSk7XHJcbiAgY29uc3QgcDIgPSBuZXcgUGxheWVyKFwiQ29tbWFuZGVyIFJlZFwiLCB0cnVlKTtcclxuXHJcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lTWFuYWdlcihbcDEsIHAyXSk7XHJcbiAgY29uc3QgcGFnZSA9IG5ldyBCYXR0bGVzaGlwRWxlbWVudHMoZ2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IHBhZ2UuaGVhZGVyKCk7XHJcbiAgY29uc3QgZ2FtZUFyZWEgPSBwYWdlLmdhbWVBcmVhKCk7XHJcblxyXG4gIHBhZ2Uuc2V0RGlhbG9nKEdBTUVfU1RBVEUuZ2FtZVByb21wdCk7XHJcblxyXG4gIGJvZHkuYXBwZW5kKGhlYWRlciwgZ2FtZUFyZWEpO1xyXG59KSgpO1xyXG5cclxuLypcclxuMTogVXNlcnMgcGxhY2UgdGhlaXIgc2hpcHMuXHJcbjI6IFVzZXJzIHBsYXkgdGhlIGdhbWUuXHJcbjM6IEdhbWUgZW5kcyB3aGVuIHRoZSBvbmUgcGxheWVyJ3MgYmF0dGxlc2hpcHMgYXJlIGRlc3Ryb3llZC5cclxuNDogVGhlIGdhbWUgZW5kIGhhcyBzdGF0aXN0aWNzIHJlc3VsdHMgYW5kIG9wdGlvbiB0byByZXBsYXlcclxuNTogR28gYmFjayB0byBzdGVwIDEuXHJcbiovIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgbmFtZTtcclxuICBjcHU7XHJcbiAgc2NvcmU7XHJcbiAgZ2FtZWJvYXJkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lLCBpc0NwdSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY3B1ID0gaXNDcHU7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNrIHRoZSBvdGhlciBwbGF5ZXIncyBnYW1lYm9hcmQuXHJcbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciAtIFRoZSBvdGhlciBwbGF5ZXIgb2YgdGhlIGdhbWUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBjb29yZGluYXRlIHRvIGxhdW5jaCBhbiBhdHRhY2suXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCAtIENvbHVtbiBjb29yZGluYXRlIHRvIGxhdW5jaCBhbiBhdHRhY2suXHJcbiAgICogQHJldHVybnMge251bWJlcn0gLSBTdGF0dXMgb2YgdGhlIGF0dGFjay4gMSBpcyBhIGhpdC4gMCBpcyBhIG1pc3MsXHJcbiAgICogYW5kIC0xIGlzIGFuIGFyZWEgd2hpY2ggaGFzIGFscmVhZHkgYmVlbiBoaXQuXHJcbiAgICovXHJcbiAgYXR0YWNrKHBsYXllciwgeExvYywgeUxvYykge1xyXG4gICAgcmV0dXJuIHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4TG9jLCB5TG9jKTtcclxuICB9XHJcbn0iLCJmdW5jdGlvbiBzZXROYW1lKGxlbmd0aCkge1xyXG4gIHN3aXRjaChsZW5ndGgpIHtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIFwiU3BlZWRlclwiO1xyXG4gICAgY2FzZSAyOlxyXG4gICAgICByZXR1cm4gXCJQYXRyb2wgQm9hdFwiO1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICByZXR1cm4gXCJEZXN0cm95ZXJcIjtcclxuICAgIGNhc2UgNDpcclxuICAgICAgcmV0dXJuIFwiQmF0dGxlc2hpcFwiO1xyXG4gICAgY2FzZSA1OlxyXG4gICAgICByZXR1cm4gXCJDYXJyaWVyXCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJTaGlwXCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgYmF0dGxlc2hpcCwgZGVwZW5kcyBvbiB0aGUgbGVuZ3RoLlxyXG4gICAqL1xyXG4gIG5hbWU7IFxyXG4gIC8qKlxyXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIGJhdHRsZXNoaXAuXHJcbiAgICovXHJcbiAgbGVuZ3RoO1xyXG4gIC8qKlxyXG4gICAqIEN1cnJlbnQgY29uZGl0aW9uIG9mIHRoZSBiYXR0bGVzaGlwLiBSZXR1cm5zXHJcbiAgICogYW4gYXJyYXkgY29udGFpbmluZyBzdGF0dXMgb2YgdGhlIGJhdHRsZXNoaXAuIFxyXG4gICAqIElmIHRoZSBzdGF0dXNlcyBhcmUgYWxsIHRydWUsIHRoZSBzaGlwIGlzIHN1bmsuXHJcbiAgICovXHJcbiAgc3RhdHVzO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBzaGlwLlxyXG4gICAqIEBwYXJhbSB7R2FtZWJvYXJkfSBnYW1lYm9hcmQgLSBUaGUgZ2FtZWJvYXJkIHRoZSBzaGlwIGJlbG9uZ3MgdG8uXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtIFRoZSBsZW5ndGggb2YgdGhlIHNoaXAuXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyAtIHhDb29yZGluYXRlIHRvIHBsYWNlIHRoZSBzaGlwLiAwLWJhc2VkLlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2wgLSB5Q29vcmRpbmF0ZSB0byBwbGFjZSB0aGUgc2hpcC4gMC1iYXNlZC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIC0gU2hvdWxkIHRoZSBzaGlwIGJlIHBsYWNlZCB2ZXJ0aWNhbGx5P1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGggPz8gMTtcclxuICAgIHRoaXMubmFtZSA9IHNldE5hbWUodGhpcy5sZW5ndGgpO1xyXG5cclxuICAgIHRoaXMuc3RhdHVzID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXJrcyB0aGUgc2hpcCBoaXQgYXQgZ2l2ZW4gbG9jYXRpb24uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvY2F0aW9uIFxyXG4gICAqL1xyXG4gIGhpdCh4LCB5KSB7XHJcbiAgICBsZXQgaWQgPSBgJHt4fSwke3l9YDtcclxuICAgIHRoaXMuc3RhdHVzW2lkXSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBzaGlwIGhhcyBiZWVuIGVudGlyZWx5IHN1bmsgeWV0LlxyXG4gICAqL1xyXG4gIGlzU3VuaygpIHtcclxuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5zdGF0dXMpIHtcclxuICAgICAgaWYgKCF0aGlzLnN0YXR1c1twcm9wXSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufSIsIi8qKlxyXG4gKiBBIGNsYXNzIHdpdGggdXNlZnVsLCBnZW5lcmFsLXB1cnBvc2UgbWV0aG9kcy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxpdHkge1xyXG4gIFxyXG4gIHN0YXRpYyBlbWFpbFJlZ2V4ID0gIFx0XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXHJcbiAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblxyXG4gIC8qKlxyXG4gICAqIEJhc2VkIG9uIHdlYnBhY2sncyByZXF1aXJlIHRvIHF1aWNrbHkgaW1wb3J0IGluIGFsbCBpbWFnZXMgaW4gYSBmb2xkZXIuXHJcbiAgICogU2VlIGRvY3VtZW50YXRpb24gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVxdWlyZS1jb250ZXh0IHRvIHVuZGVyc3RhbmRcclxuICAgKiBtb3JlIGFib3V0IHRoZSBwYXJhbWV0ZXIuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHIgLSByZXF1aXJlLmNvbnRleHQoKSBmdW5jdGlvbiwgdXNlZCBmb3IgaW1wb3J0aW5nIGFsbCBmaWxlcyBpblxyXG4gICAqIGEgZGlyZWN0b3J5IG1hdGNoaW5nIGEgcGF0dGVybi4gRXg6XHJcbiAgICogcmVxdWlyZS5jb250ZXh0KFwiLi9pbWFnZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykuIExlYXZlIGJsYW5rIHRvIHVzZSB0aGlzLlxyXG4gICAqIEByZXR1cm5zIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBpbWFnZXMgbWF0Y2hpbmcgdGhlIHJlcXVpcmUgY29udGV4dCxcclxuICAgKiB0aGUgb3JpZ2luYWwgZmlsZW5hbWUgKHcvIGV4dGVuc2lvbikgYmVpbmcgdGhlIGtleSByZWZlcmVuY2luZyB0aGUgaW1hZ2UuXHJcbiAgICovXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgc3RhdGljIGltcG9ydEFsbEltYWdlcyhyID0gcmVxdWlyZS5jb250ZXh0KFwiLi4vaW1hZ2VzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKSB7XHJcbiAgICBsZXQgaW1hZ2VzID0ge307XHJcbiAgICByLmtleXMoKS5tYXAoKGl0ZW0pID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XHJcbiAgICByZXR1cm4gaW1hZ2VzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCB2YXJpb3VzIGNsYXNzZXMuIFdyYXBzIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRoZSBIVE1MIHRhZyBvZiB0aGUgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENsYXNzIC0gRGVmYXVsdCBjbGFzcyB0byByZWZlciB0byB0aGUgZWxlbWVudCBieS5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzTmFtZXMgLSAoT3B0aW9uYWwpIEFkZGl0aW9uYWwgY2xhc3NlcyB0byBnaXZlIHRoZSBlbGVtZW50LlxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHRhZywgZGVmYXVsdENsYXNzLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgVXRpbGl0eS5hZGRDbGFzc2VzVG9FbGVtZW50KGVsZW0sIGRlZmF1bHRDbGFzcywgLi4uY2xhc3NOYW1lcyk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGhlbHBlciBtZXRob2Qgd2hpY2ggYWRkcyBjbGFzc2VzIHRvIGEgZ2l2ZW4gZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIGNsYXNzZXMgdG8uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDbGFzcyAtIFRoZSBjbGFzc25hbWUgdGhhdCBzYWlkIGVsZW1lbnQgc2hvdWxkIGFsd2F5cyBoYXZlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGNsYXNzTmFtZXMgLSBUaGUgY2xhc3NuYW1lcyB0byBnaXZlIHRoZSBlbGVtZW50IChvcHRpb25hbCkuXHJcbiAgICogKi8gXHJcbiAgc3RhdGljIGFkZENsYXNzZXNUb0VsZW1lbnQoZWxlbSwgZGVmYXVsdENsYXNzLCAuLi5jbGFzc05hbWVzKSB7XHJcbiAgICAgIGNsYXNzTmFtZXMucHVzaChkZWZhdWx0Q2xhc3MpO1xyXG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgYSBnaXZlbiBlbGVtZW50LCBhZGQgYW4gYW5pbWF0aW9uIGJ1dCBvbmx5IHBsYXkgaXQgb25jZS4gQWZ0ZXJ3YXJkcyxcclxuICAgKiB1bmxvYWQgdGhlIGFuaW1hdGlvbi4gVGhpcyBhbGxvd3MgeW91IHRvIGFkZCB0aGUgY2xhc3MgdG8gaXQgYWdhaW4gdG8gXHJcbiAgICogcGxheSB0aGUgYW5pbWF0aW9uOyB0aGlzIGlzIHVzZWZ1bCB3aGVuIGFzc29jaWF0ZWQgd2l0aCBldmVudCB0cmlnZ2Vycy5cclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gQW4gZWxlbWVudCB0byBhcHBseSB0aGUgYW5pbWF0aW9uIHRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbmltYXRpb25OYW1lIC0gQSBDU1MgY2xhc3MgYXNzb2NpYXRlZCB3aXRoIGFuIGFuaW1hdGlvbi5cclxuICAgKi9cclxuICBzdGF0aWMgdHJpZ2dlckFuaW1hdGlvbihlbGVtLCBhbmltYXRpb25OYW1lKSB7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uTmFtZSk7XHJcblxyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcclxuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgfSwge29uY2UgOiB0cnVlfSk7IFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVjdXJzaXZlbHkgc2NhbGUgdGhlIHRyZWUgb2YgYSBjaGlsZCBub2RlIHVudGlsIHRoZSBwYXJlbnQgbWF0Y2hpbmcgdGhlIGdpdmVuXHJcbiAgICogc2VsZWN0b3IgaXMgZm91bmQuIFJldHVybnMgTlVMTCBpZiBubyBtYXRjaGluZyBwYXJlbnQgaXMgZm91bmQuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIEEgY2hpbGQgbm9kZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBDU1MgU2VsZWN0b3IgU3RyaW5nLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtIVE1MZWxlbWVudH0gLSBQYXJlbnQgb2YgZWxlbS5cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0TWF0Y2hpbmdQYXJlbnQoZWxlbSwgc2VsZWN0b3IpIHtcclxuICAgIHdoaWxlKCFlbGVtLm1hdGNoZXMoc2VsZWN0b3IpKSB7XHJcbiAgICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XHJcbiAgICAgIGlmIChlbGVtLm1hdGNoZXMoXCJodG1sXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSB1c2VyJ3MgbG9jYXRpb24sIHVzaW5nIHRoZSBHZW9sb2NhdGlvbiBBUEkuXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgdGhlIHVzZXIncyBsb2NhdGlvbiwgb3IgbnVsbFxyXG4gICAqIGlmIHRoZSB1c2VyIGRlbmllcyBwZXJtaXNzaW9uIHJlcXVlc3RzLlxyXG4gICAqL1xyXG4gIC8qXHJcbiAgc3RhdGljIGdldEdlb2xvY2F0aW9uKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MocG9zaXRpb24pIHtcclxuICAgICAgY29uc3QgbGF0aXR1ZGUgID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICBjb25zdCBsb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG5cclxuICAgICAgY29uc3QgbGF0bG9uZyA9IGAke2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gO1xyXG5cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsYXRsb25nKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGVycm9yKCkge1xyXG4gICAgICBsZXQgZXJyb3IgPSBcIlVzZXIgZGVuaWVkIGxvY2F0aW9uIHBlcm1pc3Npb25zLlwiO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHtcclxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFsbCBjaGlsZHJlbiBmcm9tIGEgcGFyZW50IG5vZGUuXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudE5vZGV9IHBhcmVudCAtIFBhcmVudCBub2RlIGNvbnRhaW5pbmcgY2hpbGRyZW4uXHJcbiAgICovXHJcbiAgc3RhdGljIHJlbW92ZUFsbENoaWxkcmVuKHBhcmVudCkge1xyXG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbnRlbmNlIGZvcm1hdC4gTWFrZXMgc3VyZSB0aGUgZmlyc3QgbGV0dGVyIGlzIGNhcGl0YWxpemVkLCBhbmQgdGhlbiBcclxuICAgKiBhIHBlcmlvZCBpcyBhcHBlbmRlZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gYSBzdHJpbmcgdG8gc2VudGVuY2UtY2FzZS5cclxuICAgKi9cclxuICBzdGF0aWMgdG9TZW50ZW5jZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSArIFwiLlwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBhc3NpZ25lZCB0byBlYWNoIGJ1dHRvblxyXG4gICAqIHdoZW4gb25seSBvbmUgb2YgdGhlbSBzaG91bGQgYmUgdG9nZ2xlZC4gRnVuY3Rpb25zIGxpa2UgYSByYWRpb1xyXG4gICAqIGJ1dHRvbiBidXQgd2l0aCBkaWZmZXJlbnQgc3R5bGluZy5cclxuICAgKiBAcGFyYW0geyp9IGUgXHJcbiAgICogQHBhcmFtIHsqfSBwYXJlbnRTZWxlY3RvciBcclxuICAgKi9cclxuICBzdGF0aWMgdG9nZ2xlU2VsZWN0ZWQoZSwgcGFyZW50U2VsZWN0b3IpIHtcclxuICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBmcm9tIHRoZSBvdGhlci5cclxuICAgIGNvbnN0IHBhcmVudCA9IFV0aWxpdHkuZ2V0TWF0Y2hpbmdQYXJlbnQoZS5jdXJyZW50VGFyZ2V0LCBwYXJlbnRTZWxlY3Rvcik7XHJcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0ZWQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcclxuICAgIGN1cnJlbnRTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICBjdXJyZW50U2VsZWN0ZWQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAvLyB0b2dnbGUgc2VsZWN0ZWQgY2xhc3Mgb24gdGhlIGJ1dHRvblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgIGUuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9