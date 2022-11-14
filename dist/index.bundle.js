"use strict";
(self["webpackChunkleaderboard_project"] = self["webpackChunkleaderboard_project"] || []).push([["index"],{

/***/ "./gameIdConfig.js":
/*!*************************!*\
  !*** ./gameIdConfig.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseURLObject": () => (/* binding */ baseURLObject),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gameIDObject": () => (/* binding */ gameIDObject)
/* harmony export */ });
const gameIDObject = { gameID: 'eGOwTflTJsVJKzQrrJNk' };
const baseURLObject = {
  baseUrl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ gameIDObject, baseURLObject });


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 18px;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: calc(60% + 300px);\r\n  margin-right: 20px;\r\n  height: 100px;\r\n  padding: 0.5% 0 0 0;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  width: 100%;\r\n  padding-left: calc(20% - 160px);\r\n  gap: calc(16% - 60px);\r\n  list-style: none;\r\n}\r\n\r\nnav ul li {\r\n  cursor: pointer;\r\n}\r\n\r\nnav span img {\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nnav button {\r\n  border-color: blue;\r\n  width: 180px;\r\n  padding: 8px 0 8px 0;\r\n  color: blue;\r\n  background-color: white;\r\n  font-size: 13px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.language {\r\n  margin-right: 2%;\r\n  font-size: 14px;\r\n  color: gray;\r\n}\r\n\r\n.language-flag {\r\n  margin-top: 5px;\r\n  height: 23px;\r\n  width: 23px;\r\n}\r\n\r\n.flags {\r\n  margin-right: 0.5%;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n}\r\n\r\nsection ul li {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\nsection ul li a {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n.announcement-section {\r\n  display: flex;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 60px;\r\n  background-color: darkblue;\r\n  font-size: 2px;\r\n}\r\n\r\n.announcement-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  list-style: none;\r\n  color: white;\r\n}\r\n\r\n.new {\r\n  background-color: royalblue;\r\n  padding: 8px;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  border-radius: 10%;\r\n  cursor: pointer;\r\n}\r\n\r\n.new:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.refresh:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.view-now {\r\n  color: white;\r\n  text-underline-offset: 8px;\r\n}\r\n\r\n.content-section {\r\n  height: 80%;\r\n  padding: 4% 8% 0 8%;\r\n}\r\n\r\n.content-section h1 {\r\n  font-size: 40px;\r\n}\r\n\r\n.main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.content-boxes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 8% 6% 0 6%;\r\n  font-size: 16px;\r\n}\r\n\r\n.item-1 {\r\n  flex: 3;\r\n}\r\n\r\n.item-2 {\r\n  display: flex;\r\n  flex: 2;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\n.content-title {\r\n  display: flex;\r\n  text-align: center;\r\n  font-size: 26px;\r\n}\r\n\r\n.subtitle-and-refresh {\r\n  width: 75%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 5%;\r\n}\r\n\r\n.subtitle-and-refresh button {\r\n  padding: 8px 15px 8px 15px;\r\n  font-size: 14px;\r\n  color: white;\r\n  background-color: royalblue;\r\n  border-color: blue;\r\n  cursor: pointer;\r\n}\r\n\r\n.ranking-table {\r\n  width: 75%;\r\n  margin-top: 35px;\r\n  display: flex;\r\n  border: solid black 2px;\r\n}\r\n\r\n.ranking-table ul {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n}\r\n\r\n.ranking-table ul li {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  height: 40px;\r\n  padding: 0 0 0 20px;\r\n}\r\n\r\n.ranking-table ul li:nth-child(odd) {\r\n  background-color: gray;\r\n}\r\n\r\n.ranking-table ul li:nth-child(even) {\r\n  background-color: white;\r\n}\r\n\r\nform {\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 35px;\r\n}\r\n\r\ninput {\r\n  display: flex;\r\n  padding-left: 10px;\r\n  height: 40px;\r\n}\r\n\r\n.form-submit {\r\n  width: 100px;\r\n  padding: 8px 15px 8px 15px;\r\n  font-size: 14px;\r\n  color: white;\r\n  background-color: royalblue;\r\n  border-color: blue;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,wBAAwB;EACxB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,+BAA+B;EAC/B,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,oBAAoB;EACpB,WAAW;EACX,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 18px;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: calc(60% + 300px);\r\n  margin-right: 20px;\r\n  height: 100px;\r\n  padding: 0.5% 0 0 0;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  width: 100%;\r\n  padding-left: calc(20% - 160px);\r\n  gap: calc(16% - 60px);\r\n  list-style: none;\r\n}\r\n\r\nnav ul li {\r\n  cursor: pointer;\r\n}\r\n\r\nnav span img {\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nnav button {\r\n  border-color: blue;\r\n  width: 180px;\r\n  padding: 8px 0 8px 0;\r\n  color: blue;\r\n  background-color: white;\r\n  font-size: 13px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.language {\r\n  margin-right: 2%;\r\n  font-size: 14px;\r\n  color: gray;\r\n}\r\n\r\n.language-flag {\r\n  margin-top: 5px;\r\n  height: 23px;\r\n  width: 23px;\r\n}\r\n\r\n.flags {\r\n  margin-right: 0.5%;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n}\r\n\r\nsection ul li {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\nsection ul li a {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n.announcement-section {\r\n  display: flex;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 60px;\r\n  background-color: darkblue;\r\n  font-size: 2px;\r\n}\r\n\r\n.announcement-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  list-style: none;\r\n  color: white;\r\n}\r\n\r\n.new {\r\n  background-color: royalblue;\r\n  padding: 8px;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  border-radius: 10%;\r\n  cursor: pointer;\r\n}\r\n\r\n.new:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.refresh:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.view-now {\r\n  color: white;\r\n  text-underline-offset: 8px;\r\n}\r\n\r\n.content-section {\r\n  height: 80%;\r\n  padding: 4% 8% 0 8%;\r\n}\r\n\r\n.content-section h1 {\r\n  font-size: 40px;\r\n}\r\n\r\n.main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.content-boxes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 8% 6% 0 6%;\r\n  font-size: 16px;\r\n}\r\n\r\n.item-1 {\r\n  flex: 3;\r\n}\r\n\r\n.item-2 {\r\n  display: flex;\r\n  flex: 2;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\n.content-title {\r\n  display: flex;\r\n  text-align: center;\r\n  font-size: 26px;\r\n}\r\n\r\n.subtitle-and-refresh {\r\n  width: 75%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 5%;\r\n}\r\n\r\n.subtitle-and-refresh button {\r\n  padding: 8px 15px 8px 15px;\r\n  font-size: 14px;\r\n  color: white;\r\n  background-color: royalblue;\r\n  border-color: blue;\r\n  cursor: pointer;\r\n}\r\n\r\n.ranking-table {\r\n  width: 75%;\r\n  margin-top: 35px;\r\n  display: flex;\r\n  border: solid black 2px;\r\n}\r\n\r\n.ranking-table ul {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n}\r\n\r\n.ranking-table ul li {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  height: 40px;\r\n  padding: 0 0 0 20px;\r\n}\r\n\r\n.ranking-table ul li:nth-child(odd) {\r\n  background-color: gray;\r\n}\r\n\r\n.ranking-table ul li:nth-child(even) {\r\n  background-color: white;\r\n}\r\n\r\nform {\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 35px;\r\n}\r\n\r\ninput {\r\n  display: flex;\r\n  padding-left: 10px;\r\n  height: 40px;\r\n}\r\n\r\n.form-submit {\r\n  width: 100px;\r\n  padding: 8px 15px 8px 15px;\r\n  font-size: 14px;\r\n  color: white;\r\n  background-color: royalblue;\r\n  border-color: blue;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/Modules/getDataFromCreatedGame.js":
/*!***********************************************!*\
  !*** ./src/Modules/getDataFromCreatedGame.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fetchData": () => (/* binding */ fetchData)
/* harmony export */ });
/* harmony import */ var _gameIdConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gameIdConfig.js */ "./gameIdConfig.js");


const BASE_URL = _gameIdConfig_js__WEBPACK_IMPORTED_MODULE_0__.baseURLObject.baseUrl;
const API_PATH = `${BASE_URL}games/${_gameIdConfig_js__WEBPACK_IMPORTED_MODULE_0__.gameIDObject.gameID}/scores/`;

async function fetchData() {
  const fetchedData = fetch(API_PATH, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => error);

  return fetchedData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fetchData,
});


/***/ }),

/***/ "./src/Modules/postDataToCreatedGame.js":
/*!**********************************************!*\
  !*** ./src/Modules/postDataToCreatedGame.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "enterScoreData": () => (/* binding */ enterScoreData)
/* harmony export */ });
/* harmony import */ var _gameIdConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gameIdConfig.js */ "./gameIdConfig.js");


const BASE_URL = _gameIdConfig_js__WEBPACK_IMPORTED_MODULE_0__.baseURLObject.baseUrl;
const API_PATH = `${BASE_URL}games/${_gameIdConfig_js__WEBPACK_IMPORTED_MODULE_0__.gameIDObject.gameID}/scores/`;

async function enterScoreData(score) {
  const response = fetch(API_PATH, {
    method: 'post',
    body: JSON.stringify(score),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error);

  return response;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ enterScoreData });


/***/ }),

/***/ "./src/Modules/rankClass.js":
/*!**********************************!*\
  !*** ./src/Modules/rankClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Score": () => (/* binding */ Score),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Score,
});


/***/ }),

/***/ "./src/Modules/utils.js":
/*!******************************!*\
  !*** ./src/Modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "updateEventMessage": () => (/* binding */ updateEventMessage)
/* harmony export */ });
const updateEventMessage = (formTag, messageTag, res) => {
  messageTag.innerText = res;
  formTag.appendChild(messageTag);
  setTimeout(() => {
    formTag.removeChild(formTag.lastChild);
  }, 3000);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ updateEventMessage });


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Modules_rankClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/rankClass.js */ "./src/Modules/rankClass.js");
/* harmony import */ var _Modules_getDataFromCreatedGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/getDataFromCreatedGame.js */ "./src/Modules/getDataFromCreatedGame.js");
/* harmony import */ var _Modules_postDataToCreatedGame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/postDataToCreatedGame.js */ "./src/Modules/postDataToCreatedGame.js");
/* harmony import */ var _Modules_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/utils.js */ "./src/Modules/utils.js");






const tableContent = document.querySelector('.ranking-table');
const formTag = document.querySelector('.add-to-ranking');
const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const refreshButton = document.querySelector('.refresh');
const refreshContainer = document.querySelector('.subtitle-and-refresh');

let rankingList = [];
let rankingContent = '';
let score = {};

const rankingItems = document.createElement('ul');
rankingItems.className = 'item-list-ul';

const sortThenAdd = () => {
  tableContent.innerHTML = '';
  rankingContent = '';
  rankingList.sort((a, b) => b.score - a.score);

  rankingList.forEach((data) => {
    rankingContent += `
          <li>${data.user}: ${data.score}</li>
          `;
  });

  rankingItems.innerHTML = rankingContent;
  tableContent.appendChild(rankingItems);
};

async function returnScoreData() {
  rankingList = await (0,_Modules_getDataFromCreatedGame_js__WEBPACK_IMPORTED_MODULE_2__.fetchData)();
  sortThenAdd();
}

returnScoreData();

// const addScoresToLocalStorage = () => {
//   const str = JSON.stringify(rankingList);
//   localStorage.setItem('storedBookData', str);
// };

let res;
const messageTag = document.createElement('p');

const submitDataToAPI = () => {
  formTag.addEventListener('submit', async (event) => {
    event.preventDefault();
    score = new _Modules_rankClass_js__WEBPACK_IMPORTED_MODULE_1__.Score(inputName.value, parseFloat(inputScore.value));
    res = await (0,_Modules_postDataToCreatedGame_js__WEBPACK_IMPORTED_MODULE_3__.enterScoreData)(score);
    if (res.result === 'Leaderboard score created correctly.') {
      messageTag.style = 'background-color:green; color:white;';
      (0,_Modules_utils_js__WEBPACK_IMPORTED_MODULE_4__.updateEventMessage)(formTag, messageTag, res.result);
    } else {
      messageTag.innerText = 'Fix your input please!';
      messageTag.style = 'background-color:red; color:white;';
      formTag.appendChild(messageTag);
      setTimeout(() => {
        formTag.removeChild(formTag.lastChild);
      }, 3000);
    }
    inputName.value = '';
    inputScore.value = '';
  });
};

submitDataToAPI();

const clickRefresh = () => {
  refreshButton.addEventListener('click', (event) => {
    event.preventDefault();
    messageTag.innerText = 'Refreshed successfully!';
    messageTag.style = 'background-color:green; color:white;';
    refreshContainer.appendChild(messageTag);
    setTimeout(() => {
      refreshContainer.removeChild(refreshContainer.lastChild);
    }, 3000);
    returnScoreData();
  });
};

clickRefresh();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdEQUFnRCxZQUFZO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9nYW1lSWRDb25maWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vc3JjL01vZHVsZXMvZ2V0RGF0YUZyb21DcmVhdGVkR2FtZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vc3JjL01vZHVsZXMvcG9zdERhdGFUb0NyZWF0ZWRHYW1lLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9zcmMvTW9kdWxlcy9yYW5rQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL3NyYy9Nb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdhbWVJRE9iamVjdCA9IHsgZ2FtZUlEOiAnZUdPd1RmbFRKc1ZKS3pRcnJKTmsnIH07XG5leHBvcnQgY29uc3QgYmFzZVVSTE9iamVjdCA9IHtcbiAgYmFzZVVybDogJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpLycsXG59O1xuZXhwb3J0IGRlZmF1bHQgeyBnYW1lSURPYmplY3QsIGJhc2VVUkxPYmplY3QgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IGNhbGMoNjAlICsgMzAwcHgpO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHBhZGRpbmc6IDAuNSUgMCAwIDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDIwJSAtIDE2MHB4KTtcXHJcXG4gIGdhcDogY2FsYygxNiUgLSA2MHB4KTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiBzcGFuIGltZyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiBidXR0b24ge1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDAgOHB4IDA7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XFxyXFxufVxcclxcblxcclxcbi5sYW5ndWFnZSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5sYW5ndWFnZS1mbGFnIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGhlaWdodDogMjNweDtcXHJcXG4gIHdpZHRoOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxhZ3Mge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIHVsIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIHVsIGxpIGEge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdW5jZW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3VuY2VtZW50LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwc2t5Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctbm93IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgcGFkZGluZzogNCUgOCUgMCA4JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtc2VjdGlvbiBoMSB7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWJveGVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgcGFkZGluZzogOCUgNiUgMCA2JTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tMSB7XFxyXFxuICBmbGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0yIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YnRpdGxlLWFuZC1yZWZyZXNoIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VidGl0bGUtYW5kLXJlZnJlc2ggYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNXB4IDhweCAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFua2luZy10YWJsZSB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgbWFyZ2luLXRvcDogMzVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmtpbmctdGFibGUgdWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5yYW5raW5nLXRhYmxlIHVsIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogMCAwIDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmtpbmctdGFibGUgdWwgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmtpbmctdGFibGUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tc3VibWl0IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNXB4IDhweCAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsT0FBTztBQUNUOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiBjYWxjKDYwJSArIDMwMHB4KTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiAwLjUlIDAgMCAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogY2FsYygyMCUgLSAxNjBweCk7XFxyXFxuICBnYXA6IGNhbGMoMTYlIC0gNjBweCk7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgc3BhbiBpbWcge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAwIDhweCAwO1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZ3VhZ2Uge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZ3VhZ2UtZmxhZyB7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBoZWlnaHQ6IDIzcHg7XFxyXFxuICB3aWR0aDogMjNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsYWdzIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41JTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB1bCBsaSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB1bCBsaSBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3VuY2VtZW50LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBmb250LXNpemU6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm91bmNlbWVudC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwc2t5Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2g6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XFxyXFxufVxcclxcblxcclxcbi52aWV3LW5vdyB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDQlIDglIDAgOCU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXNlY3Rpb24gaDEge1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1ib3hlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHBhZGRpbmc6IDglIDYlIDAgNiU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLTEge1xcclxcbiAgZmxleDogMztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tMiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDI2cHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZS1hbmQtcmVmcmVzaCB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YnRpdGxlLWFuZC1yZWZyZXNoIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA4cHggMTVweCA4cHggMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmtpbmctdGFibGUge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XFxyXFxufVxcclxcblxcclxcbi5yYW5raW5nLXRhYmxlIHVsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFua2luZy10YWJsZSB1bCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yYW5raW5nLXRhYmxlIHVsIGxpOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5yYW5raW5nLXRhYmxlIHVsIGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXN1Ym1pdCB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMTVweCA4cHggMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lSURPYmplY3QsIGJhc2VVUkxPYmplY3QgfSBmcm9tICcuLi8uLi9nYW1lSWRDb25maWcuanMnO1xuXG5jb25zdCBCQVNFX1VSTCA9IGJhc2VVUkxPYmplY3QuYmFzZVVybDtcbmNvbnN0IEFQSV9QQVRIID0gYCR7QkFTRV9VUkx9Z2FtZXMvJHtnYW1lSURPYmplY3QuZ2FtZUlEfS9zY29yZXMvYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgY29uc3QgZmV0Y2hlZERhdGEgPSBmZXRjaChBUElfUEFUSCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEucmVzdWx0KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yKTtcblxuICByZXR1cm4gZmV0Y2hlZERhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmV0Y2hEYXRhLFxufTtcbiIsImltcG9ydCB7IGdhbWVJRE9iamVjdCwgYmFzZVVSTE9iamVjdCB9IGZyb20gJy4uLy4uL2dhbWVJZENvbmZpZy5qcyc7XG5cbmNvbnN0IEJBU0VfVVJMID0gYmFzZVVSTE9iamVjdC5iYXNlVXJsO1xuY29uc3QgQVBJX1BBVEggPSBgJHtCQVNFX1VSTH1nYW1lcy8ke2dhbWVJRE9iamVjdC5nYW1lSUR9L3Njb3Jlcy9gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW50ZXJTY29yZURhdGEoc2NvcmUpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaChBUElfUEFUSCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHNjb3JlKSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvcik7XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGVudGVyU2NvcmVEYXRhIH07XG4iLCJleHBvcnQgY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3Rvcih1c2VyLCBzY29yZSkge1xuICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgU2NvcmUsXG59O1xuIiwiZXhwb3J0IGNvbnN0IHVwZGF0ZUV2ZW50TWVzc2FnZSA9IChmb3JtVGFnLCBtZXNzYWdlVGFnLCByZXMpID0+IHtcbiAgbWVzc2FnZVRhZy5pbm5lclRleHQgPSByZXM7XG4gIGZvcm1UYWcuYXBwZW5kQ2hpbGQobWVzc2FnZVRhZyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGZvcm1UYWcucmVtb3ZlQ2hpbGQoZm9ybVRhZy5sYXN0Q2hpbGQpO1xuICB9LCAzMDAwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgdXBkYXRlRXZlbnRNZXNzYWdlIH07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFNjb3JlIH0gZnJvbSAnLi9Nb2R1bGVzL3JhbmtDbGFzcy5qcyc7XG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuL01vZHVsZXMvZ2V0RGF0YUZyb21DcmVhdGVkR2FtZS5qcyc7XG5pbXBvcnQgeyBlbnRlclNjb3JlRGF0YSB9IGZyb20gJy4vTW9kdWxlcy9wb3N0RGF0YVRvQ3JlYXRlZEdhbWUuanMnO1xuaW1wb3J0IHsgdXBkYXRlRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi9Nb2R1bGVzL3V0aWxzLmpzJztcblxuY29uc3QgdGFibGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmtpbmctdGFibGUnKTtcbmNvbnN0IGZvcm1UYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvLXJhbmtpbmcnKTtcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1uYW1lJyk7XG5jb25zdCBpbnB1dFNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXNjb3JlJyk7XG5jb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gnKTtcbmNvbnN0IHJlZnJlc2hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VidGl0bGUtYW5kLXJlZnJlc2gnKTtcblxubGV0IHJhbmtpbmdMaXN0ID0gW107XG5sZXQgcmFua2luZ0NvbnRlbnQgPSAnJztcbmxldCBzY29yZSA9IHt9O1xuXG5jb25zdCByYW5raW5nSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xucmFua2luZ0l0ZW1zLmNsYXNzTmFtZSA9ICdpdGVtLWxpc3QtdWwnO1xuXG5jb25zdCBzb3J0VGhlbkFkZCA9ICgpID0+IHtcbiAgdGFibGVDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICByYW5raW5nQ29udGVudCA9ICcnO1xuICByYW5raW5nTGlzdC5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XG5cbiAgcmFua2luZ0xpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgIHJhbmtpbmdDb250ZW50ICs9IGBcbiAgICAgICAgICA8bGk+JHtkYXRhLnVzZXJ9OiAke2RhdGEuc2NvcmV9PC9saT5cbiAgICAgICAgICBgO1xuICB9KTtcblxuICByYW5raW5nSXRlbXMuaW5uZXJIVE1MID0gcmFua2luZ0NvbnRlbnQ7XG4gIHRhYmxlQ29udGVudC5hcHBlbmRDaGlsZChyYW5raW5nSXRlbXMpO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gcmV0dXJuU2NvcmVEYXRhKCkge1xuICByYW5raW5nTGlzdCA9IGF3YWl0IGZldGNoRGF0YSgpO1xuICBzb3J0VGhlbkFkZCgpO1xufVxuXG5yZXR1cm5TY29yZURhdGEoKTtcblxuLy8gY29uc3QgYWRkU2NvcmVzVG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHJhbmtpbmdMaXN0KTtcbi8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZEJvb2tEYXRhJywgc3RyKTtcbi8vIH07XG5cbmxldCByZXM7XG5jb25zdCBtZXNzYWdlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG5jb25zdCBzdWJtaXREYXRhVG9BUEkgPSAoKSA9PiB7XG4gIGZvcm1UYWcuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzY29yZSA9IG5ldyBTY29yZShpbnB1dE5hbWUudmFsdWUsIHBhcnNlRmxvYXQoaW5wdXRTY29yZS52YWx1ZSkpO1xuICAgIHJlcyA9IGF3YWl0IGVudGVyU2NvcmVEYXRhKHNjb3JlKTtcbiAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ0xlYWRlcmJvYXJkIHNjb3JlIGNyZWF0ZWQgY29ycmVjdGx5LicpIHtcbiAgICAgIG1lc3NhZ2VUYWcuc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjpncmVlbjsgY29sb3I6d2hpdGU7JztcbiAgICAgIHVwZGF0ZUV2ZW50TWVzc2FnZShmb3JtVGFnLCBtZXNzYWdlVGFnLCByZXMucmVzdWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZVRhZy5pbm5lclRleHQgPSAnRml4IHlvdXIgaW5wdXQgcGxlYXNlISc7XG4gICAgICBtZXNzYWdlVGFnLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6cmVkOyBjb2xvcjp3aGl0ZTsnO1xuICAgICAgZm9ybVRhZy5hcHBlbmRDaGlsZChtZXNzYWdlVGFnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb3JtVGFnLnJlbW92ZUNoaWxkKGZvcm1UYWcubGFzdENoaWxkKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgICBpbnB1dE5hbWUudmFsdWUgPSAnJztcbiAgICBpbnB1dFNjb3JlLnZhbHVlID0gJyc7XG4gIH0pO1xufTtcblxuc3VibWl0RGF0YVRvQVBJKCk7XG5cbmNvbnN0IGNsaWNrUmVmcmVzaCA9ICgpID0+IHtcbiAgcmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbWVzc2FnZVRhZy5pbm5lclRleHQgPSAnUmVmcmVzaGVkIHN1Y2Nlc3NmdWxseSEnO1xuICAgIG1lc3NhZ2VUYWcuc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjpncmVlbjsgY29sb3I6d2hpdGU7JztcbiAgICByZWZyZXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VUYWcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVmcmVzaENvbnRhaW5lci5yZW1vdmVDaGlsZChyZWZyZXNoQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuU2NvcmVEYXRhKCk7XG4gIH0pO1xufTtcblxuY2xpY2tSZWZyZXNoKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=