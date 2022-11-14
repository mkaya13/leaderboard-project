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
const gameIDObject = { gameID: 'BdoeC2JUf9iHGchHmJ85' };
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
      messageTag.innerText = res.result;
      messageTag.style = 'background-color:green; color:white;';
      formTag.appendChild(messageTag);
      setTimeout(() => {
        formTag.removeChild(formTag.lastChild);
      }, 3000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9nYW1lSWRDb25maWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vc3JjL01vZHVsZXMvZ2V0RGF0YUZyb21DcmVhdGVkR2FtZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vc3JjL01vZHVsZXMvcG9zdERhdGFUb0NyZWF0ZWRHYW1lLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9zcmMvTW9kdWxlcy9yYW5rQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2FtZUlET2JqZWN0ID0geyBnYW1lSUQ6ICdCZG9lQzJKVWY5aUhHY2hIbUo4NScgfTtcbmV4cG9ydCBjb25zdCBiYXNlVVJMT2JqZWN0ID0ge1xuICBiYXNlVXJsOiAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJyxcbn07XG5leHBvcnQgZGVmYXVsdCB7IGdhbWVJRE9iamVjdCwgYmFzZVVSTE9iamVjdCB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogY2FsYyg2MCUgKyAzMDBweCk7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogMC41JSAwIDAgMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMjAlIC0gMTYwcHgpO1xcclxcbiAgZ2FwOiBjYWxjKDE2JSAtIDYwcHgpO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHNwYW4gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGJ1dHRvbiB7XFxyXFxuICBib3JkZXItY29sb3I6IGJsdWU7XFxyXFxuICB3aWR0aDogMTgwcHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMCA4cHggMDtcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwc2t5Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmd1YWdlIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmd1YWdlLWZsYWcge1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgaGVpZ2h0OiAyM3B4O1xcclxcbiAgd2lkdGg6IDIzcHg7XFxyXFxufVxcclxcblxcclxcbi5mbGFncyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNSU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24gdWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24gdWwgbGkgYSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm91bmNlbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgZm9udC1zaXplOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdW5jZW1lbnQtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uZXcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXc6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy1ub3cge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBwYWRkaW5nOiA0JSA4JSAwIDglO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1zZWN0aW9uIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtYm94ZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBwYWRkaW5nOiA4JSA2JSAwIDYlO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0xIHtcXHJcXG4gIGZsZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLTIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VidGl0bGUtYW5kLXJlZnJlc2gge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNSU7XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZS1hbmQtcmVmcmVzaCBidXR0b24ge1xcclxcbiAgcGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxyXFxuICBib3JkZXItY29sb3I6IGJsdWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yYW5raW5nLXRhYmxlIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBtYXJnaW4tdG9wOiAzNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFua2luZy10YWJsZSB1bCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmtpbmctdGFibGUgdWwgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFua2luZy10YWJsZSB1bCBsaTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFua2luZy10YWJsZSB1bCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1zdWJtaXQge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxyXFxuICBib3JkZXItY29sb3I6IGJsdWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IGNhbGMoNjAlICsgMzAwcHgpO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHBhZGRpbmc6IDAuNSUgMCAwIDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDIwJSAtIDE2MHB4KTtcXHJcXG4gIGdhcDogY2FsYygxNiUgLSA2MHB4KTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiBzcGFuIGltZyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiBidXR0b24ge1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDAgOHB4IDA7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XFxyXFxufVxcclxcblxcclxcbi5sYW5ndWFnZSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5sYW5ndWFnZS1mbGFnIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGhlaWdodDogMjNweDtcXHJcXG4gIHdpZHRoOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxhZ3Mge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIHVsIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIHVsIGxpIGEge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdW5jZW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3VuY2VtZW50LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwc2t5Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctbm93IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgcGFkZGluZzogNCUgOCUgMCA4JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtc2VjdGlvbiBoMSB7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWJveGVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgcGFkZGluZzogOCUgNiUgMCA2JTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tMSB7XFxyXFxuICBmbGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0yIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YnRpdGxlLWFuZC1yZWZyZXNoIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VidGl0bGUtYW5kLXJlZnJlc2ggYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNXB4IDhweCAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFua2luZy10YWJsZSB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgbWFyZ2luLXRvcDogMzVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmtpbmctdGFibGUgdWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5yYW5raW5nLXRhYmxlIHVsIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogMCAwIDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmtpbmctdGFibGUgdWwgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmtpbmctdGFibGUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tc3VibWl0IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNXB4IDhweCAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWVJRE9iamVjdCwgYmFzZVVSTE9iamVjdCB9IGZyb20gJy4uLy4uL2dhbWVJZENvbmZpZy5qcyc7XG5cbmNvbnN0IEJBU0VfVVJMID0gYmFzZVVSTE9iamVjdC5iYXNlVXJsO1xuY29uc3QgQVBJX1BBVEggPSBgJHtCQVNFX1VSTH1nYW1lcy8ke2dhbWVJRE9iamVjdC5nYW1lSUR9L3Njb3Jlcy9gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICBjb25zdCBmZXRjaGVkRGF0YSA9IGZldGNoKEFQSV9QQVRILCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5yZXN1bHQpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IpO1xuXG4gIHJldHVybiBmZXRjaGVkRGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmZXRjaERhdGEsXG59O1xuIiwiaW1wb3J0IHsgZ2FtZUlET2JqZWN0LCBiYXNlVVJMT2JqZWN0IH0gZnJvbSAnLi4vLi4vZ2FtZUlkQ29uZmlnLmpzJztcblxuY29uc3QgQkFTRV9VUkwgPSBiYXNlVVJMT2JqZWN0LmJhc2VVcmw7XG5jb25zdCBBUElfUEFUSCA9IGAke0JBU0VfVVJMfWdhbWVzLyR7Z2FtZUlET2JqZWN0LmdhbWVJRH0vc2NvcmVzL2A7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnRlclNjb3JlRGF0YShzY29yZSkge1xuICBjb25zdCByZXNwb25zZSA9IGZldGNoKEFQSV9QQVRILCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2NvcmUpLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yKTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgZW50ZXJTY29yZURhdGEgfTtcbiIsImV4cG9ydCBjbGFzcyBTY29yZSB7XG4gIGNvbnN0cnVjdG9yKHVzZXIsIHNjb3JlKSB7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBTY29yZSxcbn07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFNjb3JlIH0gZnJvbSAnLi9Nb2R1bGVzL3JhbmtDbGFzcy5qcyc7XG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuL01vZHVsZXMvZ2V0RGF0YUZyb21DcmVhdGVkR2FtZS5qcyc7XG5pbXBvcnQgeyBlbnRlclNjb3JlRGF0YSB9IGZyb20gJy4vTW9kdWxlcy9wb3N0RGF0YVRvQ3JlYXRlZEdhbWUuanMnO1xuXG5jb25zdCB0YWJsZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFua2luZy10YWJsZScpO1xuY29uc3QgZm9ybVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tcmFua2luZycpO1xuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LW5hbWUnKTtcbmNvbnN0IGlucHV0U2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtc2NvcmUnKTtcbmNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVmcmVzaCcpO1xuY29uc3QgcmVmcmVzaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJ0aXRsZS1hbmQtcmVmcmVzaCcpO1xuXG5sZXQgcmFua2luZ0xpc3QgPSBbXTtcbmxldCByYW5raW5nQ29udGVudCA9ICcnO1xubGV0IHNjb3JlID0ge307XG5cbmNvbnN0IHJhbmtpbmdJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5yYW5raW5nSXRlbXMuY2xhc3NOYW1lID0gJ2l0ZW0tbGlzdC11bCc7XG5cbmNvbnN0IHNvcnRUaGVuQWRkID0gKCkgPT4ge1xuICB0YWJsZUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIHJhbmtpbmdDb250ZW50ID0gJyc7XG4gIHJhbmtpbmdMaXN0LnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcblxuICByYW5raW5nTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgcmFua2luZ0NvbnRlbnQgKz0gYFxuICAgICAgICAgIDxsaT4ke2RhdGEudXNlcn06ICR7ZGF0YS5zY29yZX08L2xpPlxuICAgICAgICAgIGA7XG4gIH0pO1xuXG4gIHJhbmtpbmdJdGVtcy5pbm5lckhUTUwgPSByYW5raW5nQ29udGVudDtcbiAgdGFibGVDb250ZW50LmFwcGVuZENoaWxkKHJhbmtpbmdJdGVtcyk7XG59O1xuXG5hc3luYyBmdW5jdGlvbiByZXR1cm5TY29yZURhdGEoKSB7XG4gIHJhbmtpbmdMaXN0ID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG4gIHNvcnRUaGVuQWRkKCk7XG59XG5cbnJldHVyblNjb3JlRGF0YSgpO1xuXG4vLyBjb25zdCBhZGRTY29yZXNUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcbi8vICAgY29uc3Qgc3RyID0gSlNPTi5zdHJpbmdpZnkocmFua2luZ0xpc3QpO1xuLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkQm9va0RhdGEnLCBzdHIpO1xuLy8gfTtcblxubGV0IHJlcztcbmNvbnN0IG1lc3NhZ2VUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbmNvbnN0IHN1Ym1pdERhdGFUb0FQSSA9ICgpID0+IHtcbiAgZm9ybVRhZy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNjb3JlID0gbmV3IFNjb3JlKGlucHV0TmFtZS52YWx1ZSwgcGFyc2VGbG9hdChpbnB1dFNjb3JlLnZhbHVlKSk7XG4gICAgcmVzID0gYXdhaXQgZW50ZXJTY29yZURhdGEoc2NvcmUpO1xuICAgIGlmIChyZXMucmVzdWx0ID09PSAnTGVhZGVyYm9hcmQgc2NvcmUgY3JlYXRlZCBjb3JyZWN0bHkuJykge1xuICAgICAgbWVzc2FnZVRhZy5pbm5lclRleHQgPSByZXMucmVzdWx0O1xuICAgICAgbWVzc2FnZVRhZy5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuOyBjb2xvcjp3aGl0ZTsnO1xuICAgICAgZm9ybVRhZy5hcHBlbmRDaGlsZChtZXNzYWdlVGFnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb3JtVGFnLnJlbW92ZUNoaWxkKGZvcm1UYWcubGFzdENoaWxkKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlVGFnLmlubmVyVGV4dCA9ICdGaXggeW91ciBpbnB1dCBwbGVhc2UhJztcbiAgICAgIG1lc3NhZ2VUYWcuc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjpyZWQ7IGNvbG9yOndoaXRlOyc7XG4gICAgICBmb3JtVGFnLmFwcGVuZENoaWxkKG1lc3NhZ2VUYWcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvcm1UYWcucmVtb3ZlQ2hpbGQoZm9ybVRhZy5sYXN0Q2hpbGQpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICAgIGlucHV0TmFtZS52YWx1ZSA9ICcnO1xuICAgIGlucHV0U2NvcmUudmFsdWUgPSAnJztcbiAgfSk7XG59O1xuXG5zdWJtaXREYXRhVG9BUEkoKTtcblxuY29uc3QgY2xpY2tSZWZyZXNoID0gKCkgPT4ge1xuICByZWZyZXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBtZXNzYWdlVGFnLmlubmVyVGV4dCA9ICdSZWZyZXNoZWQgc3VjY2Vzc2Z1bGx5ISc7XG4gICAgbWVzc2FnZVRhZy5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuOyBjb2xvcjp3aGl0ZTsnO1xuICAgIHJlZnJlc2hDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZVRhZyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZWZyZXNoQ29udGFpbmVyLnJlbW92ZUNoaWxkKHJlZnJlc2hDb250YWluZXIubGFzdENoaWxkKTtcbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm5TY29yZURhdGEoKTtcbiAgfSk7XG59O1xuXG5jbGlja1JlZnJlc2goKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==