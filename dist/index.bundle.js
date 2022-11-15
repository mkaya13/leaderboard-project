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
const gameIDObject = { gameID: 'gTXKJoAIqWEQruCQftqV' };
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 18px;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: calc(60% + 300px);\r\n  margin-right: 20px;\r\n  height: 100px;\r\n  padding: 0.5% 0 0 0;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  width: 100%;\r\n  padding-left: calc(20% - 160px);\r\n  gap: calc(16% - 60px);\r\n  list-style: none;\r\n}\r\n\r\nnav ul li {\r\n  cursor: pointer;\r\n}\r\n\r\nnav span img {\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nnav button {\r\n  border-color: blue;\r\n  width: 180px;\r\n  padding: 8px 0 8px 0;\r\n  color: blue;\r\n  background-color: white;\r\n  font-size: 13px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.language {\r\n  margin-right: 2%;\r\n  font-size: 14px;\r\n  color: gray;\r\n}\r\n\r\n.language-flag {\r\n  margin-top: 5px;\r\n  height: 23px;\r\n  width: 23px;\r\n}\r\n\r\n.flags {\r\n  margin-right: 0.5%;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n}\r\n\r\nsection ul li {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\nsection ul li a {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n.announcement-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  font-size: 2px;\r\n}\r\n\r\n.field-holder {\r\n  display: flex;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 60px;\r\n  background-color: darkblue;\r\n}\r\n\r\n.announcement-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  list-style: none;\r\n  color: white;\r\n}\r\n\r\n.new {\r\n  background-color: royalblue;\r\n  padding: 8px;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  border-radius: 10%;\r\n  cursor: pointer;\r\n}\r\n\r\n.new:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.refresh:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.view-now {\r\n  color: white;\r\n  text-underline-offset: 8px;\r\n}\r\n\r\n.content-section {\r\n  height: 80%;\r\n  padding: 2% 8% 0 8%;\r\n}\r\n\r\n.content-section h1 {\r\n  font-size: 40px;\r\n}\r\n\r\n.main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.content-boxes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 8% 6% 0 6%;\r\n  font-size: 16px;\r\n}\r\n\r\n.item-1 {\r\n  flex: 3;\r\n}\r\n\r\n.item-2 {\r\n  display: flex;\r\n  flex: 2;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\n.content-title {\r\n  display: flex;\r\n  text-align: center;\r\n  font-size: 26px;\r\n}\r\n\r\n.subtitle-and-refresh {\r\n  width: 75%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 5%;\r\n}\r\n\r\n.subtitle-and-refresh button {\r\n  padding: 8px 15px 8px 15px;\r\n  font-size: 14px;\r\n  color: white;\r\n  background-color: royalblue;\r\n  border-color: blue;\r\n  cursor: pointer;\r\n}\r\n\r\n.ranking-table {\r\n  width: 75%;\r\n  margin-top: 35px;\r\n  display: flex;\r\n  border: solid black 2px;\r\n}\r\n\r\n.ranking-table ul {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n}\r\n\r\n.ranking-table ul li {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  height: 40px;\r\n  padding: 0 0 0 20px;\r\n}\r\n\r\n.ranking-table ul li:nth-child(odd) {\r\n  background-color: gray;\r\n}\r\n\r\n.ranking-table ul li:nth-child(even) {\r\n  background-color: white;\r\n}\r\n\r\nform {\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 35px;\r\n}\r\n\r\ninput {\r\n  display: flex;\r\n  padding-left: 10px;\r\n  height: 40px;\r\n}\r\n\r\n.form-submit {\r\n  width: 100px;\r\n  padding: 8px 15px 8px 15px;\r\n  font-size: 14px;\r\n  color: white;\r\n  background-color: royalblue;\r\n  border-color: blue;\r\n  cursor: pointer;\r\n}\r\n\r\n.current-time {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: end;\r\n  margin-right: 10%;\r\n  padding-top: 10px;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 14.5%;\r\n  width: 100%;\r\n  background-color: gray;\r\n  height: 60px;\r\n}\r\n\r\n.rights {\r\n  font-size: 14px;\r\n  color: ghostwhite;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 18px;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: calc(60% + 300px);\r\n  margin-right: 20px;\r\n  height: 100px;\r\n  padding: 0.5% 0 0 0;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  width: 100%;\r\n  padding-left: calc(20% - 160px);\r\n  gap: calc(16% - 60px);\r\n  list-style: none;\r\n}\r\n\r\nnav ul li {\r\n  cursor: pointer;\r\n}\r\n\r\nnav span img {\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nnav button {\r\n  border-color: blue;\r\n  width: 180px;\r\n  padding: 8px 0 8px 0;\r\n  color: blue;\r\n  background-color: white;\r\n  font-size: 13px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.language {\r\n  margin-right: 2%;\r\n  font-size: 14px;\r\n  color: gray;\r\n}\r\n\r\n.language-flag {\r\n  margin-top: 5px;\r\n  height: 23px;\r\n  width: 23px;\r\n}\r\n\r\n.flags {\r\n  margin-right: 0.5%;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n}\r\n\r\nsection ul li {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\nsection ul li a {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n.announcement-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  font-size: 2px;\r\n}\r\n\r\n.field-holder {\r\n  display: flex;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 60px;\r\n  background-color: darkblue;\r\n}\r\n\r\n.announcement-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  list-style: none;\r\n  color: white;\r\n}\r\n\r\n.new {\r\n  background-color: royalblue;\r\n  padding: 8px;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  border-radius: 10%;\r\n  cursor: pointer;\r\n}\r\n\r\n.new:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.refresh:hover {\r\n  background-color: deepskyblue;\r\n}\r\n\r\n.view-now {\r\n  color: white;\r\n  text-underline-offset: 8px;\r\n}\r\n\r\n.content-section {\r\n  height: 80%;\r\n  padding: 2% 8% 0 8%;\r\n}\r\n\r\n.content-section h1 {\r\n  font-size: 40px;\r\n}\r\n\r\n.main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.content-boxes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 8% 6% 0 6%;\r\n  font-size: 16px;\r\n}\r\n\r\n.item-1 {\r\n  flex: 3;\r\n}\r\n\r\n.item-2 {\r\n  display: flex;\r\n  flex: 2;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\n.content-title {\r\n  display: flex;\r\n  text-align: center;\r\n  font-size: 26px;\r\n}\r\n\r\n.subtitle-and-refresh {\r\n  width: 75%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 5%;\r\n}\r\n\r\n.subtitle-and-refresh button {\r\n  padding: 8px 15px 8px 15px;\r\n  font-size: 14px;\r\n  color: white;\r\n  background-color: royalblue;\r\n  border-color: blue;\r\n  cursor: pointer;\r\n}\r\n\r\n.ranking-table {\r\n  width: 75%;\r\n  margin-top: 35px;\r\n  display: flex;\r\n  border: solid black 2px;\r\n}\r\n\r\n.ranking-table ul {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n}\r\n\r\n.ranking-table ul li {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  height: 40px;\r\n  padding: 0 0 0 20px;\r\n}\r\n\r\n.ranking-table ul li:nth-child(odd) {\r\n  background-color: gray;\r\n}\r\n\r\n.ranking-table ul li:nth-child(even) {\r\n  background-color: white;\r\n}\r\n\r\nform {\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 35px;\r\n}\r\n\r\ninput {\r\n  display: flex;\r\n  padding-left: 10px;\r\n  height: 40px;\r\n}\r\n\r\n.form-submit {\r\n  width: 100px;\r\n  padding: 8px 15px 8px 15px;\r\n  font-size: 14px;\r\n  color: white;\r\n  background-color: royalblue;\r\n  border-color: blue;\r\n  cursor: pointer;\r\n}\r\n\r\n.current-time {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: end;\r\n  margin-right: 10%;\r\n  padding-top: 10px;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 14.5%;\r\n  width: 100%;\r\n  background-color: gray;\r\n  height: 60px;\r\n}\r\n\r\n.rights {\r\n  font-size: 14px;\r\n  color: ghostwhite;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/Modules/dateModul.js":
/*!**********************************!*\
  !*** ./src/Modules/dateModul.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "showDateTime": () => (/* binding */ showDateTime)
/* harmony export */ });
/* harmony import */ var _node_modules_luxon_src_luxon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/luxon/src/luxon.js */ "./node_modules/luxon/src/luxon.js");


const showCurrentTime = document.querySelector('.current-time');

const showDateTime = () => {
  const dt = _node_modules_luxon_src_luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.now();
  showCurrentTime.textContent = dt
    .toLocaleString(_node_modules_luxon_src_luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.DATETIME_FULL_WITH_SECONDS)
    .slice(0, -5);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  showDateTime,
});


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

const fetchData = () => {
  const fetchedData = fetch(API_PATH, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => error);

  return fetchedData;
};

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

const enterScoreData = (score) => {
  const response = fetch(API_PATH, {
    method: 'post',
    body: JSON.stringify(score),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error);

  return response;
};

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
/* harmony export */   "clickRefresh": () => (/* binding */ clickRefresh),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "returnScoreData": () => (/* binding */ returnScoreData),
/* harmony export */   "sortThenAdd": () => (/* binding */ sortThenAdd),
/* harmony export */   "submitDataToAPI": () => (/* binding */ submitDataToAPI),
/* harmony export */   "updateEventMessage": () => (/* binding */ updateEventMessage)
/* harmony export */ });
/* harmony import */ var _getDataFromCreatedGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataFromCreatedGame.js */ "./src/Modules/getDataFromCreatedGame.js");
/* harmony import */ var _rankClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rankClass.js */ "./src/Modules/rankClass.js");
/* harmony import */ var _postDataToCreatedGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postDataToCreatedGame.js */ "./src/Modules/postDataToCreatedGame.js");




const updateEventMessage = (formTag, messageTag, res) => {
  messageTag.innerText = res;
  formTag.appendChild(messageTag);
  setTimeout(() => {
    formTag.removeChild(formTag.lastChild);
  }, 3000);
};

const sortThenAdd = (
  tableContent,
  rankingContent,
  rankingList,
  rankingItems,
) => {
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

const returnScoreData = async (tableContent, rankingContent, rankingList, rankingItems) => {
  rankingList = await (0,_getDataFromCreatedGame_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)();
  sortThenAdd(tableContent, rankingContent, rankingList, rankingItems);
};

const submitDataToAPI = (formTag, score, inputName, inputScore, res, messageTag) => {
  formTag.addEventListener('submit', async (event) => {
    event.preventDefault();
    score = new _rankClass_js__WEBPACK_IMPORTED_MODULE_1__.Score(inputName.value, parseFloat(inputScore.value));
    res = await (0,_postDataToCreatedGame_js__WEBPACK_IMPORTED_MODULE_2__.enterScoreData)(score);
    if (res.result === 'Leaderboard score created correctly.') {
      messageTag.style = 'background-color:green; color:white;';
      updateEventMessage(formTag, messageTag, res.result);
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

const clickRefresh = (tableContent, rankingContent, rankingList,
  rankingItems, refreshButton, messageTag, refreshContainer) => {
  refreshButton.addEventListener('click', (event) => {
    event.preventDefault();
    messageTag.innerText = 'Refreshed successfully!';
    messageTag.style = 'background-color:green; color:white;';
    refreshContainer.appendChild(messageTag);
    setTimeout(() => {
      refreshContainer.removeChild(refreshContainer.lastChild);
    }, 3000);
    returnScoreData(tableContent, rankingContent, rankingList, rankingItems);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  updateEventMessage,
  sortThenAdd,
  returnScoreData,
  submitDataToAPI,
  clickRefresh,
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Modules_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/utils.js */ "./src/Modules/utils.js");
/* harmony import */ var _Modules_dateModul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/dateModul.js */ "./src/Modules/dateModul.js");




const tableContent = document.querySelector('.ranking-table');
const formTag = document.querySelector('.add-to-ranking');
const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const refreshButton = document.querySelector('.refresh');
const refreshContainer = document.querySelector('.subtitle-and-refresh');

const rankingList = [];
const rankingContent = '';
const score = {};

const rankingItems = document.createElement('ul');
rankingItems.className = 'item-list-ul';

(0,_Modules_utils_js__WEBPACK_IMPORTED_MODULE_1__.returnScoreData)(tableContent, rankingContent, rankingList, rankingItems);

let res;
const messageTag = document.createElement('p');

(0,_Modules_utils_js__WEBPACK_IMPORTED_MODULE_1__.submitDataToAPI)(formTag, score, inputName, inputScore, res, messageTag);

(0,_Modules_utils_js__WEBPACK_IMPORTED_MODULE_1__.clickRefresh)(tableContent, rankingContent, rankingList,
  rankingItems, refreshButton, messageTag, refreshContainer);

setInterval(_Modules_dateModul_js__WEBPACK_IMPORTED_MODULE_2__.showDateTime, 1000);


/***/ }),

/***/ "./node_modules/luxon/src/datetime.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/datetime.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateTime),
/* harmony export */   "friendlyDateTime": () => (/* binding */ friendlyDateTime)
/* harmony export */ });
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interval.js */ "./node_modules/luxon/src/interval.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.js */ "./node_modules/luxon/src/info.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");
/* harmony import */ var _impl_diff_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./impl/diff.js */ "./node_modules/luxon/src/impl/diff.js");
/* harmony import */ var _impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./impl/regexParser.js */ "./node_modules/luxon/src/impl/regexParser.js");
/* harmony import */ var _impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./impl/tokenParser.js */ "./node_modules/luxon/src/impl/tokenParser.js");
/* harmony import */ var _impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./impl/conversions.js */ "./node_modules/luxon/src/impl/conversions.js");
/* harmony import */ var _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./impl/formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");

















const INVALID = "Invalid DateTime";
const MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("unsupported zone", `the zone "${zone.name}" is not supported`);
}

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid,
  };
  return new DateTime({ ...current, ...alts, old: current });
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  let utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  const o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;

  const d = new Date(ts);

  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds(),
  };
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.objToLocalTS)(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  const oPre = inst.o,
    year = inst.c.year + Math.trunc(dur.years),
    month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
    c = {
      ...inst.c,
      year,
      month,
      day:
        Math.min(inst.c.day, (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(year, month)) +
        Math.trunc(dur.days) +
        Math.trunc(dur.weeks) * 7,
    },
    millisToAdd = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds,
    }).as("milliseconds"),
    localTS = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.objToLocalTS)(c);

  let [ts, o] = fixOffset(localTS, oPre, inst.zone);

  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }

  return { ts, o };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone,
      inst = DateTime.fromObject(parsed, {
        ...opts,
        zone: interpretationZone,
        specificOffset,
      });
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(
      new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("unparsable", `the input "${text}" can't be parsed as ${format}`)
    );
  }
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid
    ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(_impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].create("en-US"), {
        allowZ,
        forceSimple: true,
      }).formatDateTimeFromString(dt, format)
    : null;
}

function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = "";
  if (longFormat && o.c.year >= 0) c += "+";
  c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.year, longFormat ? 6 : 4);

  if (extended) {
    c += "-";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.month);
    c += "-";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.day);
  } else {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.month);
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.day);
  }
  return c;
}

function toISOTime(
  o,
  extended,
  suppressSeconds,
  suppressMilliseconds,
  includeOffset,
  extendedZone
) {
  let c = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.hour);
  if (extended) {
    c += ":";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.minute);
  }

  if (o.c.second !== 0 || !suppressSeconds) {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.second);

    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.millisecond, 3);
    }
  }

  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(-o.o / 60));
      c += ":";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(o.o / 60));
      c += ":";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(o.o % 60));
    }
  }

  if (extendedZone) {
    c += "[" + o.zone.ianaName + "]";
  }
  return c;
}

// defaults for unspecified units in the supported calendars
const defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  };

// Units in the supported calendars, sorted by bigness
const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

// standardize case and plurality in units
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[unit.toLowerCase()];

  if (!normalized) throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidUnitError(unit);

  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
  const zone = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(opts.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
    loc = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(opts),
    tsNow = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now();

  let ts, o;

  // assume we have the higher-order units
  if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(obj.year)) {
    for (const u of orderedUnits) {
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    const invalid = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidGregorianData)(obj) || (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidTimeData)(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }

    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }

  return new DateTime({ ts, zone, loc, o });
}

function diffRelative(start, end, opts) {
  const round = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(opts.round) ? true : opts.round,
    format = (c, unit) => {
      c = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.roundTo)(c, round || opts.calendary ? 0 : 2, true);
      const formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    },
    differ = (unit) => {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}

function lastOpts(argList) {
  let opts = {},
    args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */
class DateTime {
  /**
   * @access private
   */
  constructor(config) {
    const zone = config.zone || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone;

    let invalid =
      config.invalid ||
      (Number.isNaN(config.ts) ? new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("invalid input") : null) ||
      (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */
    this.ts = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(config.ts) ? _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now() : config.ts;

    let c = null,
      o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }

    /**
     * @access private
     */
    this._zone = zone;
    /**
     * @access private
     */
    this.loc = config.loc || _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].create();
    /**
     * @access private
     */
    this.invalid = invalid;
    /**
     * @access private
     */
    this.weekData = null;
    /**
     * @access private
     */
    this.c = c;
    /**
     * @access private
     */
    this.o = o;
    /**
     * @access private
     */
    this.isLuxonDateTime = true;
  }

  // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new DateTime({});
  }

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;

    opts.zone = _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(date, options = {}) {
    const ts = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isDate)(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    const zoneToUse = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
    });
  }

  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(milliseconds, options = {}) {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(milliseconds)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError(
        `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
        loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(seconds, options = {}) {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(seconds)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
        loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(opts.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    const tsNow = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now(),
      offsetProvis = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(opts.specificOffset)
        ? opts.specificOffset
        : zoneToUse.offset(tsNow),
      normalized = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.normalizeObject)(obj, normalizeUnit),
      containsOrdinal = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal),
      containsGregorYear = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.year),
      containsGregorMD = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.month) || !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber,
      loc = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(opts);

    // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    const useWeekData = definiteWeekDef || (normalized.weekday && !containsGregor);

    // configure ourselves to deal with gregorian dates or week stuff
    let units,
      defaultValues,
      objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }

    // set default values for missing stuff
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }

    // make sure the values we have are in range
    const higherOrderInvalid = useWeekData
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidWeekData)(normalized)
        : containsOrdinal
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidOrdinalData)(normalized)
        : (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidGregorianData)(normalized),
      invalid = higherOrderInvalid || (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidTimeData)(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    // compute the actual time
    const gregorian = useWeekData
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.weekToGregorian)(normalized)
        : containsOrdinal
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.ordinalToGregorian)(normalized)
        : normalized,
      [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse),
      inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc,
      });

    // gregorian data + weekday serves only to validate
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid(
        "mismatched weekday",
        `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
      );
    }

    return inst;
  }

  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseISODate)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }

  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseRFC2822Date)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }

  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseHTTPDate)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }

  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(text, fmt, opts = {}) {
    if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(text) || (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(fmt)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("fromFormat requires an input string and a format");
    }

    const { locale = null, numberingSystem = null } = opts,
      localeToUse = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      }),
      [vals, parsedZone, specificOffset, invalid] = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.parseFromTokens)(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }

  /**
   * @deprecated use fromFormat instead
   */
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }

  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseSQL)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }

  /**
   * Create an invalid DateTime.
   * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }

  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(o) {
    return (o && o.isLuxonDateTime) || false;
  }

  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(formatOpts, localeOpts = {}) {
    const tokenList = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.formatOptsToTokens)(formatOpts, _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(localeOpts));
    return !tokenList ? null : tokenList.map((t) => (t ? t.val : null)).join("");
  }

  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(fmt, localeOpts = {}) {
    const expanded = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.expandMacroTokens)(_impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].parseFormat(fmt), _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(localeOpts));
    return expanded.map((t) => t.val).join("");
  }

  // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(unit) {
    return this[unit];
  }

  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }

  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }

  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }

  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }

  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }

  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }

  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }

  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }

  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }

  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }

  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }

  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }

  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }

  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }

  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(this.c).ordinal : NaN;
  }

  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].months("short", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].months("long", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }

  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }

  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return (
        this.offset > this.set({ month: 1, day: 1 }).offset ||
        this.offset > this.set({ month: 5 }).offset
      );
    }
  }

  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isLeapYear)(this.year);
  }

  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(this.year, this.month);
  }

  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInYear)(this.year) : NaN;
  }

  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.weeksInWeekYear)(this.weekYear) : NaN;
  }

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(
      this.loc.clone(opts),
      opts
    ).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }

  // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(offset = 0, opts = {}) {
    return this.setZone(_zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance(offset), opts);
  }

  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
  }

  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }

  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }

  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(locale) {
    return this.reconfigure({ locale });
  }

  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(values) {
    if (!this.isValid) return this;

    const normalized = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.normalizeObject)(values, normalizeUnit),
      settingWeekStuff =
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekYear) ||
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekNumber) ||
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekday),
      containsOrdinal = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal),
      containsGregorYear = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.year),
      containsGregorMD = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.month) || !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    let mixed;
    if (settingWeekStuff) {
      mixed = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.weekToGregorian)({ ...(0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(this.c), ...normalized });
    } else if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal)) {
      mixed = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.ordinalToGregorian)({ ...(0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };

      // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day)) {
        mixed.day = Math.min((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(mixed.year, mixed.month), mixed.day);
      }
    }

    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }

  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }

  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }

  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(unit) {
    if (!this.isValid) return this;
    const o = {},
      normalizedUnit = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through
      case "quarters":
      case "months":
        o.day = 1;
      // falls through
      case "weeks":
      case "days":
        o.hour = 0;
      // falls through
      case "hours":
        o.minute = 0;
      // falls through
      case "minutes":
        o.second = 0;
      // falls through
      case "seconds":
        o.millisecond = 0;
        break;
      case "milliseconds":
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }

  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(unit) {
    return this.isValid
      ? this.plus({ [unit]: 1 })
          .startOf(unit)
          .minus(1)
      : this;
  }

  // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt)
      : INVALID;
  }

  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(formatOpts = _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_SHORT, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.clone(opts), formatOpts).formatDateTime(this)
      : INVALID;
  }

  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.clone(opts), opts).formatDateTimeParts(this)
      : [];
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
    extendedZone = false,
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    const ext = format === "extended";

    let c = toISODate(this, ext);
    c += "T";
    c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    return c;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format = "extended" } = {}) {
    if (!this.isValid) {
      return null;
    }

    return toISODate(this, format === "extended");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    extendedZone = false,
    format = "extended",
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    let c = includePrefix ? "T" : "";
    return (
      c +
      toISOTime(
        this,
        format === "extended",
        suppressSeconds,
        suppressMilliseconds,
        includeOffset,
        extendedZone
      )
    );
  }

  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = "HH:mm:ss.SSS";

    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }

    return toTechFormat(this, fmt, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }

    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }

  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }

  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }

  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }

  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1000) : NaN;
  }

  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }

  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(opts = {}) {
    if (!this.isValid) return {};

    const base = { ...this.c };

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }

  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }

  // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].invalid("created by diffing an invalid DateTime");
    }

    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };

    const units = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.maybeArray)(unit).map(_duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeUnit),
      otherIsLater = otherDateTime.valueOf() > this.valueOf(),
      earlier = otherIsLater ? this : otherDateTime,
      later = otherIsLater ? otherDateTime : this,
      diffed = (0,_impl_diff_js__WEBPACK_IMPORTED_MODULE_9__["default"])(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }

  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }

  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(otherDateTime) {
    return this.isValid ? _interval_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDateTimes(this, otherDateTime) : this;
  }

  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }

  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(other) {
    return (
      this.isValid &&
      other.isValid &&
      this.valueOf() === other.valueOf() &&
      this.zone.equals(other.zone) &&
      this.loc.equals(other.loc)
    );
  }

  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(options = {}) {
    if (!this.isValid) return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }),
      padding = options.padding ? (this < base ? -options.padding : options.padding) : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: "always",
      units,
      unit,
    });
  }

  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(options = {}) {
    if (!this.isValid) return null;

    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true,
    });
  }

  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.bestBy)(dateTimes, (i) => i.valueOf(), Math.min);
  }

  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.bestBy)(dateTimes, (i) => i.valueOf(), Math.max);
  }

  // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options,
      localeToUse = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      });
    return (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.explainFromTokens)(localeToUse, text, fmt);
  }

  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }

  // FORMAT PRESETS

  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_SHORT_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_FULL_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_HUGE_WITH_SECONDS;
  }
}

/**
 * @private
 */
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError(
      `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
    );
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/duration.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/duration.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accurateMatrix": () => (/* binding */ accurateMatrix),
/* harmony export */   "casualMatrix": () => (/* binding */ casualMatrix),
/* harmony export */   "daysInMonthAccurate": () => (/* binding */ daysInMonthAccurate),
/* harmony export */   "daysInYearAccurate": () => (/* binding */ daysInYearAccurate),
/* harmony export */   "default": () => (/* binding */ Duration),
/* harmony export */   "lowOrderMatrix": () => (/* binding */ lowOrderMatrix)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/regexParser.js */ "./node_modules/luxon/src/impl/regexParser.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");








const INVALID = "Invalid Duration";

// unit conversion constants
const lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1000,
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1000,
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
    minutes: { seconds: 60, milliseconds: 60 * 1000 },
    seconds: { milliseconds: 1000 },
  },
  casualMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1000,
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1000,
    },

    ...lowOrderMatrix,
  },
  daysInYearAccurate = 146097.0 / 400,
  daysInMonthAccurate = 146097.0 / 4800,
  accurateMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: (daysInYearAccurate * 24) / 4,
      minutes: (daysInYearAccurate * 24 * 60) / 4,
      seconds: (daysInYearAccurate * 24 * 60 * 60) / 4,
      milliseconds: (daysInYearAccurate * 24 * 60 * 60 * 1000) / 4,
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000,
    },
    ...lowOrderMatrix,
  };

// units ordered by size
const orderedUnits = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
];

const reverseUnits = orderedUnits.slice(0).reverse();

// clone really means "create another instance just like this one, but with these changes"
function clone(dur, alts, clear = false) {
  // deep merge for vals
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...(alts.values || {}) },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
    matrix: alts.matrix || dur.matrix,
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}

// NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit],
    raw = fromMap[fromUnit] / conv,
    sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
    // ok, so this is wild, but see the matrix in the tests
    added =
      !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}

// NB: mutates parameters
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}

// Remove all properties with a value of 0 from an object
function removeZeroes(vals) {
  const newVals = {};
  for (const [key, value] of Object.entries(vals)) {
    if (value !== 0) {
      newVals[key] = value;
    }
  }
  return newVals;
}

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */
class Duration {
  /**
   * @private
   */
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    let matrix = accurate ? accurateMatrix : casualMatrix;

    if (config.matrix) {
      matrix = config.matrix;
    }

    /**
     * @access private
     */
    this.values = config.values;
    /**
     * @access private
     */
    this.loc = config.loc || _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__["default"].create();
    /**
     * @access private
     */
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.matrix = matrix;
    /**
     * @access private
     */
    this.isLuxonDuration = true;
  }

  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }

  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(
        `Duration.fromObject: argument expected to be an object, got ${
          obj === null ? "null" : typeof obj
        }`
      );
    }

    return new Duration({
      values: (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.normalizeObject)(obj, Duration.normalizeUnit),
      loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
      matrix: opts.matrix,
    });
  }

  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(durationLike) {
    if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(
        `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
      );
    }
  }

  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(text, opts) {
    const [parsed] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__.parseISODuration)(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(text, opts) {
    const [parsed] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__.parseISOTimeOnly)(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_6__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }

  /**
   * @private
   */
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[unit ? unit.toLowerCase() : unit];

    if (!normalized) throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidUnitError(unit);

    return normalized;
  }

  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(o) {
    return (o && o.isLuxonDuration) || false;
  }

  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false,
    };
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.loc, fmtOpts).formatDurationFromString(this, fmt)
      : INVALID;
  }

  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(opts = {}) {
    const l = orderedUnits
      .map((unit) => {
        const val = this.values[unit];
        if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(val)) {
          return null;
        }
        return this.loc
          .numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) })
          .format(val);
      })
      .filter((n) => n);

    return this.loc
      .listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts })
      .format(l);
  }

  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    if (!this.isValid) return {};
    return { ...this.values };
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;

    let s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.roundTo)(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(opts = {}) {
    if (!this.isValid) return null;

    const millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;

    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended",
      ...opts,
    };

    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");

    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }

    let str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = "T" + str;
    }

    return str;
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }

  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }

  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration),
      result = {};

    for (const k of orderedUnits) {
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasOwnProperty)(dur.values, k) || (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasOwnProperty)(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, { values: result }, true);
  }

  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }

  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(fn) {
    if (!this.isValid) return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.asNumber)(fn(this.values[k], k));
    }
    return clone(this, { values: result }, true);
  }

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }

  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(values) {
    if (!this.isValid) return this;

    const mixed = { ...this.values, ...(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.normalizeObject)(values, Duration.normalizeUnit) };
    return clone(this, { values: mixed });
  }

  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem });
    const opts = { loc, matrix, conversionAccuracy };
    return clone(this, opts);
  }

  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }

  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, { values: vals }, true);
  }

  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const vals = removeZeroes(this.normalize().shiftToAll().toObject());
    return clone(this, { values: vals }, true);
  }

  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...units) {
    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map((u) => Duration.normalizeUnit(u));

    const built = {},
      accumulated = {},
      vals = this.toObject();
    let lastUnit;

    for (const k of orderedUnits) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;

        let own = 0;

        // anything we haven't boiled down yet should get boiled to this unit
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }

        // plus anything that's already in this unit
        if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(vals[k])) {
          own += vals[k];
        }

        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1000 - i * 1000) / 1000;

        // plus anything further down the chain that should be rolled up in to this
        for (const down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
        // otherwise, keep it in the wings to boil it later
      } else if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(vals[k])) {
        accumulated[k] = vals[k];
      }
    }

    // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] +=
          key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, { values: built }, true).normalize();
  }

  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    if (!this.isValid) return this;
    return this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    );
  }

  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone(this, { values: negated }, true);
  }

  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }

  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }

  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }

  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }

  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }

  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }

  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }

  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }

  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }

  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (const u of orderedUnits) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/errors.js":
/*!******************************************!*\
  !*** ./node_modules/luxon/src/errors.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConflictingSpecificationError": () => (/* binding */ ConflictingSpecificationError),
/* harmony export */   "InvalidArgumentError": () => (/* binding */ InvalidArgumentError),
/* harmony export */   "InvalidDateTimeError": () => (/* binding */ InvalidDateTimeError),
/* harmony export */   "InvalidDurationError": () => (/* binding */ InvalidDurationError),
/* harmony export */   "InvalidIntervalError": () => (/* binding */ InvalidIntervalError),
/* harmony export */   "InvalidUnitError": () => (/* binding */ InvalidUnitError),
/* harmony export */   "ZoneIsAbstractError": () => (/* binding */ ZoneIsAbstractError)
/* harmony export */ });
// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
class LuxonError extends Error {}

/**
 * @private
 */
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class ConflictingSpecificationError extends LuxonError {}

/**
 * @private
 */
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}

/**
 * @private
 */
class InvalidArgumentError extends LuxonError {}

/**
 * @private
 */
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/conversions.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/conversions.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gregorianToOrdinal": () => (/* binding */ gregorianToOrdinal),
/* harmony export */   "gregorianToWeek": () => (/* binding */ gregorianToWeek),
/* harmony export */   "hasInvalidGregorianData": () => (/* binding */ hasInvalidGregorianData),
/* harmony export */   "hasInvalidOrdinalData": () => (/* binding */ hasInvalidOrdinalData),
/* harmony export */   "hasInvalidTimeData": () => (/* binding */ hasInvalidTimeData),
/* harmony export */   "hasInvalidWeekData": () => (/* binding */ hasInvalidWeekData),
/* harmony export */   "ordinalToGregorian": () => (/* binding */ ordinalToGregorian),
/* harmony export */   "weekToGregorian": () => (/* binding */ weekToGregorian)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _invalid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalid.js */ "./node_modules/luxon/src/impl/invalid.js");



const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new _invalid_js__WEBPACK_IMPORTED_MODULE_1__["default"](
    "unit out of range",
    `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
  );
}

function dayOfWeek(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));

  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  const js = d.getUTCDay();

  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  const table = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)(year) ? leapLadder : nonLeapLadder,
    month0 = table.findIndex((i) => i < ordinal),
    day = ordinal - table[month0];
  return { month: month0 + 1, day };
}

/**
 * @private
 */

function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj,
    ordinal = computeOrdinal(year, month, day),
    weekday = dayOfWeek(year, month, day);

  let weekNumber = Math.floor((ordinal - weekday + 10) / 7),
    weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(weekYear);
  } else if (weekNumber > (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return { weekYear, weekNumber, weekday, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(gregObj) };
}

function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData,
    weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
    yearInDays = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(weekYear);

  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
    year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(weekYear);
  } else {
    year = weekYear;
  }

  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(weekData) };
}

function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(gregData) };
}

function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(ordinalData) };
}

function hasInvalidWeekData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.weekYear),
    validWeek = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.weekNumber, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(obj.weekYear)),
    validWeekday = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}

function hasInvalidOrdinalData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.year),
    validOrdinal = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.ordinal, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}

function hasInvalidGregorianData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.year),
    validMonth = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.month, 1, 12),
    validDay = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.day, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInMonth)(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}

function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour =
      (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(hour, 0, 23) ||
      (hour === 24 && minute === 0 && second === 0 && millisecond === 0),
    validMinute = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(minute, 0, 59),
    validSecond = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(second, 0, 59),
    validMillisecond = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/diff.js":
/*!*********************************************!*\
  !*** ./node_modules/luxon/src/impl/diff.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration.js */ "./node_modules/luxon/src/duration.js");


function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(),
    ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(_duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a, b) => b.year - a.year],
    ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
    ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      "weeks",
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - (days % 7)) / 7;
      },
    ],
    ["days", dayDiff],
  ];

  const results = {};
  let lowestOrder, highWater;

  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;

      let delta = differ(cursor, later);
      highWater = cursor.plus({ [unit]: delta });

      if (highWater > later) {
        cursor = cursor.plus({ [unit]: delta - 1 });
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);

  const remainingMillis = later - cursor;

  const lowerOrderUnits = units.filter(
    (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
  );

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  const duration = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromObject(results, opts);

  if (lowerOrderUnits.length > 0) {
    return _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromMillis(remainingMillis, opts)
      .shiftTo(...lowerOrderUnits)
      .plus(duration);
  } else {
    return duration;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/digits.js":
/*!***********************************************!*\
  !*** ./node_modules/luxon/src/impl/digits.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "digitRegex": () => (/* binding */ digitRegex),
/* harmony export */   "parseDigits": () => (/* binding */ parseDigits)
/* harmony export */ });
const numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d",
};

const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881],
};

const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");

function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}

function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/english.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/english.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eraForDateTime": () => (/* binding */ eraForDateTime),
/* harmony export */   "eras": () => (/* binding */ eras),
/* harmony export */   "erasLong": () => (/* binding */ erasLong),
/* harmony export */   "erasNarrow": () => (/* binding */ erasNarrow),
/* harmony export */   "erasShort": () => (/* binding */ erasShort),
/* harmony export */   "formatRelativeTime": () => (/* binding */ formatRelativeTime),
/* harmony export */   "formatString": () => (/* binding */ formatString),
/* harmony export */   "meridiemForDateTime": () => (/* binding */ meridiemForDateTime),
/* harmony export */   "meridiems": () => (/* binding */ meridiems),
/* harmony export */   "monthForDateTime": () => (/* binding */ monthForDateTime),
/* harmony export */   "months": () => (/* binding */ months),
/* harmony export */   "monthsLong": () => (/* binding */ monthsLong),
/* harmony export */   "monthsNarrow": () => (/* binding */ monthsNarrow),
/* harmony export */   "monthsShort": () => (/* binding */ monthsShort),
/* harmony export */   "weekdayForDateTime": () => (/* binding */ weekdayForDateTime),
/* harmony export */   "weekdays": () => (/* binding */ weekdays),
/* harmony export */   "weekdaysLong": () => (/* binding */ weekdaysLong),
/* harmony export */   "weekdaysNarrow": () => (/* binding */ weekdaysNarrow),
/* harmony export */   "weekdaysShort": () => (/* binding */ weekdaysShort)
/* harmony export */ });
/* harmony import */ var _formats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");



function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}

/**
 * @private
 */

const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}

const weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];

function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}

const meridiems = ["AM", "PM"];

const erasLong = ["Before Christ", "Anno Domini"];

const erasShort = ["BC", "AD"];

const erasNarrow = ["B", "A"];

function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}

function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}

function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}

function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}

function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}

function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."],
  };

  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
      default: // fall through
    }
  }

  const isInPast = Object.is(count, -0) || count < 0,
    fmtValue = Math.abs(count),
    singular = fmtValue === 1,
    lilUnits = units[unit],
    fmtUnit = narrow
      ? singular
        ? lilUnits[1]
        : lilUnits[2] || lilUnits[1]
      : singular
      ? units[unit][0]
      : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}

function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  const filtered = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.pick)(knownFormat, [
      "weekday",
      "era",
      "year",
      "month",
      "day",
      "hour",
      "minute",
      "second",
      "timeZoneName",
      "hourCycle",
    ]),
    key = stringify(filtered),
    dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";
  switch (key) {
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_SHORT):
      return "M/d/yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MED):
      return "LLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MED_WITH_WEEKDAY):
      return "EEE, LLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_FULL):
      return "LLLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_HUGE):
      return "EEEE, LLLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_SIMPLE):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_SECONDS):
      return "h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_SHORT_OFFSET):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_LONG_OFFSET):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_SIMPLE):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_SECONDS):
      return "HH:mm:ss";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED):
      return "LLL d, yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_HUGE):
      return dateTimeHuge;
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return dateTimeHuge;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/formats.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/formats.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATETIME_FULL": () => (/* binding */ DATETIME_FULL),
/* harmony export */   "DATETIME_FULL_WITH_SECONDS": () => (/* binding */ DATETIME_FULL_WITH_SECONDS),
/* harmony export */   "DATETIME_HUGE": () => (/* binding */ DATETIME_HUGE),
/* harmony export */   "DATETIME_HUGE_WITH_SECONDS": () => (/* binding */ DATETIME_HUGE_WITH_SECONDS),
/* harmony export */   "DATETIME_MED": () => (/* binding */ DATETIME_MED),
/* harmony export */   "DATETIME_MED_WITH_SECONDS": () => (/* binding */ DATETIME_MED_WITH_SECONDS),
/* harmony export */   "DATETIME_MED_WITH_WEEKDAY": () => (/* binding */ DATETIME_MED_WITH_WEEKDAY),
/* harmony export */   "DATETIME_SHORT": () => (/* binding */ DATETIME_SHORT),
/* harmony export */   "DATETIME_SHORT_WITH_SECONDS": () => (/* binding */ DATETIME_SHORT_WITH_SECONDS),
/* harmony export */   "DATE_FULL": () => (/* binding */ DATE_FULL),
/* harmony export */   "DATE_HUGE": () => (/* binding */ DATE_HUGE),
/* harmony export */   "DATE_MED": () => (/* binding */ DATE_MED),
/* harmony export */   "DATE_MED_WITH_WEEKDAY": () => (/* binding */ DATE_MED_WITH_WEEKDAY),
/* harmony export */   "DATE_SHORT": () => (/* binding */ DATE_SHORT),
/* harmony export */   "TIME_24_SIMPLE": () => (/* binding */ TIME_24_SIMPLE),
/* harmony export */   "TIME_24_WITH_LONG_OFFSET": () => (/* binding */ TIME_24_WITH_LONG_OFFSET),
/* harmony export */   "TIME_24_WITH_SECONDS": () => (/* binding */ TIME_24_WITH_SECONDS),
/* harmony export */   "TIME_24_WITH_SHORT_OFFSET": () => (/* binding */ TIME_24_WITH_SHORT_OFFSET),
/* harmony export */   "TIME_SIMPLE": () => (/* binding */ TIME_SIMPLE),
/* harmony export */   "TIME_WITH_LONG_OFFSET": () => (/* binding */ TIME_WITH_LONG_OFFSET),
/* harmony export */   "TIME_WITH_SECONDS": () => (/* binding */ TIME_WITH_SECONDS),
/* harmony export */   "TIME_WITH_SHORT_OFFSET": () => (/* binding */ TIME_WITH_SHORT_OFFSET)
/* harmony export */ });
/**
 * @private
 */

const n = "numeric",
  s = "short",
  l = "long";

const DATE_SHORT = {
  year: n,
  month: n,
  day: n,
};

const DATE_MED = {
  year: n,
  month: s,
  day: n,
};

const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
};

const DATE_FULL = {
  year: n,
  month: l,
  day: n,
};

const DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
};

const TIME_SIMPLE = {
  hour: n,
  minute: n,
};

const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
};

const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};

const TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23",
};

const TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
};

const TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s,
};

const TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l,
};

const DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n,
};

const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s,
};

const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l,
};

const DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};


/***/ }),

/***/ "./node_modules/luxon/src/impl/formatter.js":
/*!**************************************************!*\
  !*** ./node_modules/luxon/src/impl/formatter.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Formatter)
/* harmony export */ });
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _formats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");




function stringifyTokens(splits, tokenToString) {
  let s = "";
  for (const token of splits) {
    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }
  return s;
}

const macroTokenToFormatOpts = {
  D: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_SHORT,
  DD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_MED,
  DDD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_FULL,
  DDDD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_HUGE,
  t: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_SIMPLE,
  tt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_SECONDS,
  ttt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_SHORT_OFFSET,
  tttt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_LONG_OFFSET,
  T: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_SIMPLE,
  TT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_SECONDS,
  TTT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_SHORT_OFFSET,
  TTTT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_LONG_OFFSET,
  f: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_SHORT,
  ff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_MED,
  fff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_FULL,
  ffff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_HUGE,
  F: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_SHORT_WITH_SECONDS,
  FF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_MED_WITH_SECONDS,
  FFF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_FULL_WITH_SECONDS,
  FFFF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_HUGE_WITH_SECONDS,
};

/**
 * @private
 */

class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }

  static parseFormat(fmt) {
    let current = null,
      currentFull = "",
      bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }

    return splits;
  }

  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }

  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.formatToParts();
  }

  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.resolvedOptions();
  }

  num(n, p = 0) {
    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(n, p);
    }

    const opts = { ...this.opts };

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  }

  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en",
      useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
      string = (opts, extract) => this.loc.extract(dt, opts, extract),
      formatOffset = (opts) => {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }

        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      },
      meridiem = () =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.meridiemForDateTime(dt)
          : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
      month = (length, standalone) =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.monthForDateTime(dt, length)
          : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"),
      weekday = (length, standalone) =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.weekdayForDateTime(dt, length)
          : string(
              standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
              "weekday"
            ),
      maybeMacro = (token) => {
        const formatOpts = Formatter.macroTokenToFormatOpts(token);
        if (formatOpts) {
          return this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      },
      era = (length) =>
        knownEnglish ? _english_js__WEBPACK_IMPORTED_MODULE_0__.eraForDateTime(dt, length) : string({ era: length }, "era"),
      tokenToString = (token) => {
        // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
        switch (token) {
          // ms
          case "S":
            return this.num(dt.millisecond);
          case "u":
          // falls through
          case "SSS":
            return this.num(dt.millisecond, 3);
          // seconds
          case "s":
            return this.num(dt.second);
          case "ss":
            return this.num(dt.second, 2);
          // fractional seconds
          case "uu":
            return this.num(Math.floor(dt.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(dt.millisecond / 100));
          // minutes
          case "m":
            return this.num(dt.minute);
          case "mm":
            return this.num(dt.minute, 2);
          // hours
          case "h":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
          case "hh":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
          case "H":
            return this.num(dt.hour);
          case "HH":
            return this.num(dt.hour, 2);
          // offset
          case "Z":
            // like +6
            return formatOffset({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            // like +06:00
            return formatOffset({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            // like +0600
            return formatOffset({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            // like EST
            return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
          case "ZZZZZ":
            // like Eastern Standard Time
            return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
          // zone
          case "z":
            // like America/New_York
            return dt.zoneName;
          // meridiems
          case "a":
            return meridiem();
          // dates
          case "d":
            return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
          case "dd":
            return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
          // weekdays - standalone
          case "c":
            // like 1
            return this.num(dt.weekday);
          case "ccc":
            // like 'Tues'
            return weekday("short", true);
          case "cccc":
            // like 'Tuesday'
            return weekday("long", true);
          case "ccccc":
            // like 'T'
            return weekday("narrow", true);
          // weekdays - format
          case "E":
            // like 1
            return this.num(dt.weekday);
          case "EEE":
            // like 'Tues'
            return weekday("short", false);
          case "EEEE":
            // like 'Tuesday'
            return weekday("long", false);
          case "EEEEE":
            // like 'T'
            return weekday("narrow", false);
          // months - standalone
          case "L":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric", day: "numeric" }, "month")
              : this.num(dt.month);
          case "LL":
            // like 01, doesn't seem to work
            return useDateTimeFormatter
              ? string({ month: "2-digit", day: "numeric" }, "month")
              : this.num(dt.month, 2);
          case "LLL":
            // like Jan
            return month("short", true);
          case "LLLL":
            // like January
            return month("long", true);
          case "LLLLL":
            // like J
            return month("narrow", true);
          // months - format
          case "M":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric" }, "month")
              : this.num(dt.month);
          case "MM":
            // like 01
            return useDateTimeFormatter
              ? string({ month: "2-digit" }, "month")
              : this.num(dt.month, 2);
          case "MMM":
            // like Jan
            return month("short", false);
          case "MMMM":
            // like January
            return month("long", false);
          case "MMMMM":
            // like J
            return month("narrow", false);
          // years
          case "y":
            // like 2014
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
          case "yy":
            // like 14
            return useDateTimeFormatter
              ? string({ year: "2-digit" }, "year")
              : this.num(dt.year.toString().slice(-2), 2);
          case "yyyy":
            // like 0012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 4);
          case "yyyyyy":
            // like 000012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 6);
          // eras
          case "G":
            // like AD
            return era("short");
          case "GG":
            // like Anno Domini
            return era("long");
          case "GGGGG":
            return era("narrow");
          case "kk":
            return this.num(dt.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(dt.weekYear, 4);
          case "W":
            return this.num(dt.weekNumber);
          case "WW":
            return this.num(dt.weekNumber, 2);
          case "o":
            return this.num(dt.ordinal);
          case "ooo":
            return this.num(dt.ordinal, 3);
          case "q":
            // like 1
            return this.num(dt.quarter);
          case "qq":
            // like 01
            return this.num(dt.quarter, 2);
          case "X":
            return this.num(Math.floor(dt.ts / 1000));
          case "x":
            return this.num(dt.ts);
          default:
            return maybeMacro(token);
        }
      };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }

  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
        switch (token[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "w":
            return "week";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      tokenToString = (lildur) => (token) => {
        const mapped = tokenToField(token);
        if (mapped) {
          return this.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      },
      tokens = Formatter.parseFormat(fmt),
      realTokens = tokens.reduce(
        (found, { literal, val }) => (literal ? found : found.concat(val)),
        []
      ),
      collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/invalid.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/invalid.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Invalid)
/* harmony export */ });
class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/luxon/src/impl/locale.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Locale)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");






// todo - remap caching

let intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}

let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}

let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}

let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts; // exclude `base` from the options
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}

let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:

  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u

  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    const smaller = localeStr.substring(0, uIndex);
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    const { numberingSystem, calendar } = options;
    // return the smaller one so that we can append the calendar and numbering overrides to it
    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";

    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }

    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}

function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}

function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return (
      loc.numberingSystem === "latn" ||
      !loc.locale ||
      loc.locale.startsWith("en") ||
      new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn"
    );
  }
}

/**
 * @private
 */

class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    const { padTo, floor, ...otherOpts } = opts;

    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = { useGrouping: false, ...opts };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      const fixed = this.floor ? Math.floor(i) : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.roundTo)(i, 3);
      return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.padStart)(fixed, this.padTo);
    }
  }
}

/**
 * @private
 */

class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;

    let z;
    if (dt.zone.isUniversal) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = "UTC";
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    const intlOpts = { ...this.opts };
    if (z) {
      intlOpts.timeZone = z;
    }
    this.dtf = getCachedDTF(intl, intlOpts);
  }

  format() {
    return this.dtf.format(this.dt.toJSDate());
  }

  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }

  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}

/**
 * @private
 */
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: "long", ...opts };
    if (!isEnglish && (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasRelative)()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return _english_js__WEBPACK_IMPORTED_MODULE_1__.formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }

  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
}

/**
 * @private
 */

class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }

  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultLocale;
    // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultNumberingSystem;
    const outputCalendarR = outputCalendar || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }

  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }

  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }

  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);

    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};

    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }

    return this.fastNumbersCached;
  }

  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness =
      (this.numberingSystem === null || this.numberingSystem === "latn") &&
      (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }

  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(
        alts.locale || this.specifiedLocale,
        alts.numberingSystem || this.numberingSystem,
        alts.outputCalendar || this.outputCalendar,
        alts.defaultToEN || false
      );
    }
  }

  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }

  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }

  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_1__.months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length },
        formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }

  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdays, () => {
      const intl = format
          ? { weekday: length, year: "numeric", month: "long", day: "numeric" }
          : { weekday: length },
        formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) =>
          this.extract(dt, intl, "weekday")
        );
      }
      return this.weekdaysCache[formatStr][length];
    });
  }

  meridiems(defaultOK = true) {
    return listStuff(
      this,
      undefined,
      defaultOK,
      () => _english_js__WEBPACK_IMPORTED_MODULE_1__.meridiems,
      () => {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!this.meridiemCache) {
          const intl = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [_datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13, 9), _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13, 19)].map(
            (dt) => this.extract(dt, intl, "dayperiod")
          );
        }

        return this.meridiemCache;
      }
    );
  }

  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_1__.eras, () => {
      const intl = { era: length };

      // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.
      if (!this.eraCache[length]) {
        this.eraCache[length] = [_datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(-40, 1, 1), _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2017, 1, 1)].map((dt) =>
          this.extract(dt, intl, "era")
        );
      }

      return this.eraCache[length];
    });
  }

  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts),
      results = df.formatToParts(),
      matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }

  numberFormatter(opts = {}) {
    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }

  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }

  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }

  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }

  isEnglish() {
    return (
      this.locale === "en" ||
      this.locale.toLowerCase() === "en-us" ||
      new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
    );
  }

  equals(other) {
    return (
      this.locale === other.locale &&
      this.numberingSystem === other.numberingSystem &&
      this.outputCalendar === other.outputCalendar
    );
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/regexParser.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/regexParser.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseHTTPDate": () => (/* binding */ parseHTTPDate),
/* harmony export */   "parseISODate": () => (/* binding */ parseISODate),
/* harmony export */   "parseISODuration": () => (/* binding */ parseISODuration),
/* harmony export */   "parseISOTimeOnly": () => (/* binding */ parseISOTimeOnly),
/* harmony export */   "parseRFC2822Date": () => (/* binding */ parseRFC2822Date),
/* harmony export */   "parseSQL": () => (/* binding */ parseSQL)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");





/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}

function combineExtractors(...extractors) {
  return (m) =>
    extractors
      .reduce(
        ([mergedVals, mergedZone, cursor], ex) => {
          const [val, zone, next] = ex(m, cursor);
          return [{ ...mergedVals, ...val }, zone || mergedZone, next];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
}

function parse(s, ...patterns) {
  if (s == null) {
    return [null, null];
  }

  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}

function simpleParse(...keys) {
  return (match, cursor) => {
    const ret = {};
    let i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
const isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${_util_js__WEBPACK_IMPORTED_MODULE_0__.ianaRegex.source})\\])?)?`;
const isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
const isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
const isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
const isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
const isoOrdinalRegex = /(\d{4})-?(\d{3})/;
const extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
const extractISOOrdinalData = simpleParse("year", "ordinal");
const sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
const sqlTimeRegex = RegExp(
  `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${_util_js__WEBPACK_IMPORTED_MODULE_0__.ianaRegex.source}))?`
);
const sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);

function int(match, pos, fallback) {
  const m = match[pos];
  return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(m) ? fallback : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(m);
}

function extractISOYmd(match, cursor) {
  const item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1),
  };

  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  const item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(match[cursor + 3]),
  };

  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  const local = !match[cursor] && !match[cursor + 1],
    fullOffset = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(match[cursor + 1], match[cursor + 2]),
    zone = local ? null : _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  const zone = match[cursor] ? _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO time parsing

const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);

// ISO duration parsing

const isoDuration =
  /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

function extractISODuration(match) {
  const [s, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] =
    match;

  const hasNegativePrefix = s[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";

  const maybeNegate = (num, force = false) =>
    num !== undefined && (force || (num && hasNegativePrefix)) ? -num : num;

  return [
    {
      years: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(yearStr)),
      months: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(monthStr)),
      weeks: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(weekStr)),
      days: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(dayStr)),
      hours: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(hourStr)),
      minutes: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(minuteStr)),
      seconds: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(millisecondsStr), negativeSeconds),
    },
  ];
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(yearStr)) : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(yearStr),
    month: _english_js__WEBPACK_IMPORTED_MODULE_1__.monthsShort.indexOf(monthStr) + 1,
    day: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(dayStr),
    hour: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(hourStr),
    minute: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(minuteStr),
  };

  if (secondStr) result.second = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(secondStr);
  if (weekdayStr) {
    result.weekday =
      weekdayStr.length > 3
        ? _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdaysLong.indexOf(weekdayStr) + 1
        : _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
}

// RFC 2822/5322
const rfc2822 =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  const [
      ,
      weekdayStr,
      dayStr,
      monthStr,
      yearStr,
      hourStr,
      minuteStr,
      secondStr,
      obsOffset,
      milOffset,
      offHourStr,
      offMinuteStr,
    ] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  let offset;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(offHourStr, offMinuteStr);
  }

  return [result, new _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"](offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s
    .replace(/\([^)]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .trim();
}

// http date

const rfc1123 =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  rfc850 =
    /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  ascii =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance];
}

function extractASCII(match) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance];
}

const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);

const extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOTimeAndOffset = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);

/*
 * @private
 */

function parseISODate(s) {
  return parse(
    s,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset]
  );
}

function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}

function parseHTTPDate(s) {
  return parse(
    s,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII]
  );
}

function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}

const extractISOTimeOnly = combineExtractors(extractISOTime);

function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}

const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);

const extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);

function parseSQL(s) {
  return parse(
    s,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
  );
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/tokenParser.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/tokenParser.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expandMacroTokens": () => (/* binding */ expandMacroTokens),
/* harmony export */   "explainFromTokens": () => (/* binding */ explainFromTokens),
/* harmony export */   "formatOptsToTokens": () => (/* binding */ formatOptsToTokens),
/* harmony export */   "parseFromTokens": () => (/* binding */ parseFromTokens)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _digits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./digits.js */ "./node_modules/luxon/src/impl/digits.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errors.js */ "./node_modules/luxon/src/errors.js");








const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s]) => post((0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.parseDigits)(s)) };
}

const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `[ ${NBSP}]`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s
    .replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s]) =>
        strings.findIndex((i) => stripInsensitivities(s) === stripInsensitivities(i)) + startIndex,
    };
  }
}

function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(h, m), groups };
}

function simple(regex) {
  return { regex, deser: ([s]) => s };
}

function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  const one = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc),
    two = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{2}"),
    three = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{3}"),
    four = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{4}"),
    six = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{6}"),
    oneOrTwo = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,2}"),
    oneToThree = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,3}"),
    oneToSix = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,6}"),
    oneToNine = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,9}"),
    twoToFour = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{2,4}"),
    fourToSix = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{4,6}"),
    literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s]) => s, literal: true }),
    unitate = (t) => {
      if (token.literal) {
        return literal(t);
      }
      switch (t.val) {
        // era
        case "G":
          return oneOf(loc.eras("short", false), 0);
        case "GG":
          return oneOf(loc.eras("long", false), 0);
        // years
        case "y":
          return intUnit(oneToSix);
        case "yy":
          return intUnit(twoToFour, _util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear);
        case "yyyy":
          return intUnit(four);
        case "yyyyy":
          return intUnit(fourToSix);
        case "yyyyyy":
          return intUnit(six);
        // months
        case "M":
          return intUnit(oneOrTwo);
        case "MM":
          return intUnit(two);
        case "MMM":
          return oneOf(loc.months("short", true, false), 1);
        case "MMMM":
          return oneOf(loc.months("long", true, false), 1);
        case "L":
          return intUnit(oneOrTwo);
        case "LL":
          return intUnit(two);
        case "LLL":
          return oneOf(loc.months("short", false, false), 1);
        case "LLLL":
          return oneOf(loc.months("long", false, false), 1);
        // dates
        case "d":
          return intUnit(oneOrTwo);
        case "dd":
          return intUnit(two);
        // ordinals
        case "o":
          return intUnit(oneToThree);
        case "ooo":
          return intUnit(three);
        // time
        case "HH":
          return intUnit(two);
        case "H":
          return intUnit(oneOrTwo);
        case "hh":
          return intUnit(two);
        case "h":
          return intUnit(oneOrTwo);
        case "mm":
          return intUnit(two);
        case "m":
          return intUnit(oneOrTwo);
        case "q":
          return intUnit(oneOrTwo);
        case "qq":
          return intUnit(two);
        case "s":
          return intUnit(oneOrTwo);
        case "ss":
          return intUnit(two);
        case "S":
          return intUnit(oneToThree);
        case "SSS":
          return intUnit(three);
        case "u":
          return simple(oneToNine);
        case "uu":
          return simple(oneOrTwo);
        case "uuu":
          return intUnit(one);
        // meridiem
        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return intUnit(four);
        case "kk":
          return intUnit(twoToFour, _util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear);
        // weekNumber (W)
        case "W":
          return intUnit(oneOrTwo);
        case "WW":
          return intUnit(two);
        // weekdays
        case "E":
        case "c":
          return intUnit(one);
        case "EEE":
          return oneOf(loc.weekdays("short", false, false), 1);
        case "EEEE":
          return oneOf(loc.weekdays("long", false, false), 1);
        case "ccc":
          return oneOf(loc.weekdays("short", true, false), 1);
        case "cccc":
          return oneOf(loc.weekdays("long", true, false), 1);
        // offset/zone
        case "Z":
        case "ZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
        case "ZZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        default:
          return literal(t);
      }
    };

  const unit = unitate(token) || {
    invalidReason: MISSING_FTP,
  };

  unit.token = token;

  return unit;
}

const partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy",
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM",
  },
  day: {
    numeric: "d",
    "2-digit": "dd",
  },
  weekday: {
    short: "EEE",
    long: "EEEE",
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh",
  },
  minute: {
    numeric: "m",
    "2-digit": "mm",
  },
  second: {
    numeric: "s",
    "2-digit": "ss",
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ",
  },
};

function tokenForPart(part, locale, formatOpts) {
  const { type, value } = part;

  if (type === "literal") {
    return {
      literal: true,
      val: value,
    };
  }

  const style = formatOpts[type];

  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val,
    };
  }

  return undefined;
}

function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}

function match(input, regex, handlers) {
  const matches = input.match(regex);

  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(handlers, i)) {
        const h = handlers[i],
          groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };

  let zone = null;
  let specificOffset;
  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.z)) {
    zone = _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(matches.z);
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.Z)) {
    if (!zone) {
      zone = new _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"](matches.Z);
    }
    specificOffset = matches.Z;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.u)) {
    matches.S = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(matches.u);
  }

  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});

  return [vals, zone, specificOffset];
}

let dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = _datetime_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  const formatOpts = _formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].macroTokenToFormatOpts(token.val);
  const tokens = formatOptsToTokens(formatOpts, locale);

  if (tokens == null || tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}

/**
 * @private
 */

function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(_formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseFormat(format), locale),
    units = tokens.map((t) => unitForToken(t, locale)),
    disqualifyingUnit = units.find((t) => t.invalidReason);

  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units),
      regex = RegExp(regexString, "i"),
      [rawMatches, matches] = match(input, regex, handlers),
      [result, zone, specificOffset] = matches
        ? dateTimeFromMatches(matches)
        : [null, null, undefined];
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(matches, "a") && (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(matches, "H")) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.ConflictingSpecificationError(
        "Can't include meridiem when specifying 24-hour format"
      );
    }
    return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
  }
}

function parseFromTokens(locale, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}

function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }

  const formatter = _formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  return parts.map((p) => tokenForPart(p, locale, formatOpts));
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/util.js":
/*!*********************************************!*\
  !*** ./node_modules/luxon/src/impl/util.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asNumber": () => (/* binding */ asNumber),
/* harmony export */   "bestBy": () => (/* binding */ bestBy),
/* harmony export */   "daysInMonth": () => (/* binding */ daysInMonth),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "floorMod": () => (/* binding */ floorMod),
/* harmony export */   "formatOffset": () => (/* binding */ formatOffset),
/* harmony export */   "hasOwnProperty": () => (/* binding */ hasOwnProperty),
/* harmony export */   "hasRelative": () => (/* binding */ hasRelative),
/* harmony export */   "ianaRegex": () => (/* binding */ ianaRegex),
/* harmony export */   "integerBetween": () => (/* binding */ integerBetween),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isInteger": () => (/* binding */ isInteger),
/* harmony export */   "isLeapYear": () => (/* binding */ isLeapYear),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "maybeArray": () => (/* binding */ maybeArray),
/* harmony export */   "normalizeObject": () => (/* binding */ normalizeObject),
/* harmony export */   "objToLocalTS": () => (/* binding */ objToLocalTS),
/* harmony export */   "padStart": () => (/* binding */ padStart),
/* harmony export */   "parseFloating": () => (/* binding */ parseFloating),
/* harmony export */   "parseInteger": () => (/* binding */ parseInteger),
/* harmony export */   "parseMillis": () => (/* binding */ parseMillis),
/* harmony export */   "parseZoneInfo": () => (/* binding */ parseZoneInfo),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "roundTo": () => (/* binding */ roundTo),
/* harmony export */   "signedOffset": () => (/* binding */ signedOffset),
/* harmony export */   "timeObject": () => (/* binding */ timeObject),
/* harmony export */   "untruncateYear": () => (/* binding */ untruncateYear),
/* harmony export */   "weeksInWeekYear": () => (/* binding */ weeksInWeekYear)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors.js */ "./node_modules/luxon/src/errors.js");
/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/



/**
 * @private
 */

// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}

function isNumber(o) {
  return typeof o === "number";
}

function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}

function isString(o) {
  return typeof o === "string";
}

function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}

// CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}

// OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}

function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}

// x % n but takes the sign of n instead of x
function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}

function padStart(input, n = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n, "0");
  } else {
    padded = ("" + input).padStart(n, "0");
  }
  return padded;
}

function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}

function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseFloat(string);
  }
}

function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    const f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}

function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits,
    rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}

// DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1,
    modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}

// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  let d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond
  );

  // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  return +d;
}

function weeksInWeekYear(weekYear) {
  const p1 =
      (weekYear +
        Math.floor(weekYear / 4) -
        Math.floor(weekYear / 100) +
        Math.floor(weekYear / 400)) %
      7,
    last = weekYear - 1,
    p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
}

// PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts),
    intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  const modified = { timeZoneName: offsetFormat, ...intlOpts };

  const parsed = new Intl.DateTimeFormat(locale, modified)
    .formatToParts(date)
    .find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}

// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);

  // don't || this because we want to preserve -0
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  const offMin = parseInt(offMinuteStr, 10) || 0,
    offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}

// COERCION

function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}

function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}

function formatOffset(offset, format) {
  const hours = Math.trunc(Math.abs(offset / 60)),
    minutes = Math.trunc(Math.abs(offset % 60)),
    sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}

function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}

const ianaRegex =
  /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;


/***/ }),

/***/ "./node_modules/luxon/src/impl/zoneUtil.js":
/*!*************************************************!*\
  !*** ./node_modules/luxon/src/impl/zoneUtil.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeZone": () => (/* binding */ normalizeZone)
/* harmony export */ });
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/invalidZone.js */ "./node_modules/luxon/src/zones/invalidZone.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/**
 * @private
 */









function normalizeZone(input, defaultZone) {
  let offset;
  if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(input) || input === null) {
    return defaultZone;
  } else if (input instanceof _zone_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    return input;
  } else if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isString)(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "default") return defaultZone;
    else if (lowered === "local" || lowered === "system") return _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance;
    else if (lowered === "utc" || lowered === "gmt") return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance;
    else return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].parseSpecifier(lowered) || _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(input);
  } else if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isNumber)(input)) {
    return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_3__["default"](input);
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/info.js":
/*!****************************************!*\
  !*** ./node_modules/luxon/src/info.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");








/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */
class Info {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(zone = _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultZone) {
    const proto = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].now().setZone(zone).set({ month: 12 });

    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }

  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(zone) {
    return _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].isValidZone(zone);
  }

  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(input) {
    return (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_4__.normalizeZone)(input, _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultZone);
  }

  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, outputCalendar)).months(length);
  }

  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, outputCalendar)).months(length, true);
  }

  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, null)).weekdays(length);
  }

  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, null)).weekdays(length, true);
  }

  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale = null } = {}) {
    return _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale).meridiems();
  }

  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(length = "short", { locale = null } = {}) {
    return _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, null, "gregory").eras(length);
  }

  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return { relative: (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasRelative)() };
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/interval.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/interval.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Interval)
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");






const INVALID = "Invalid Interval";

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid(
      "end before start",
      `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
    );
  } else {
    return null;
  }
}

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */
class Interval {
  /**
   * @private
   */
  constructor(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */
    this.e = config.end;
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.isLuxonInterval = true;
  }

  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__.InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__.InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }

  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(start, end) {
    const builtStart = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(start),
      builtEnd = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(end);

    const validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd,
      });
    } else {
      return validateError;
    }
  }

  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(start, duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration),
      dt = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }

  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(end, duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration),
      dt = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }

  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(text, opts) {
    const [s, e] = (text || "").split("/", 2);
    if (s && e) {
      let start, startIsValid;
      try {
        start = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      let end, endIsValid;
      try {
        end = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromISO(s, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(o) {
    return (o && o.isLuxonInterval) || false;
  }

  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }

  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }

  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }

  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }

  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(unit = "milliseconds") {
    if (!this.isValid) return NaN;
    const start = this.start.startOf(unit),
      end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }

  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }

  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }

  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }

  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }

  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }

  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start, end } = {}) {
    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }

  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...dateTimes) {
    if (!this.isValid) return [];
    const sorted = dateTimes
        .map(_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)
        .filter((d) => this.contains(d))
        .sort(),
      results = [];
    let { s } = this,
      i = 0;

    while (s < this.e) {
      const added = sorted[i] || this.e,
        next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }

  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    let { s } = this,
      idx = 1,
      next;

    const results = [];
    while (s < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  }

  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }

  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }

  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }

  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }

  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }

  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }

  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(other) {
    if (!this.isValid) return this;
    const s = this.s > other.s ? this.s : other.s,
      e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }

  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(other) {
    if (!this.isValid) return this;
    const s = this.s < other.s ? this.s : other.s,
      e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }

  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(intervals) {
    const [found, final] = intervals
      .sort((a, b) => a.s - b.s)
      .reduce(
        ([sofar, current], item) => {
          if (!current) {
            return [sofar, item];
          } else if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          } else {
            return [sofar.concat([current]), item];
          }
        },
        [[], null]
      );
    if (final) {
      found.push(final);
    }
    return found;
  }

  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(intervals) {
    let start = null,
      currentCount = 0;
    const results = [],
      ends = intervals.map((i) => [
        { time: i.s, type: "s" },
        { time: i.e, type: "e" },
      ]),
      flattened = Array.prototype.concat(...ends),
      arr = flattened.sort((a, b) => a.time - b.time);

    for (const i of arr) {
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }

  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...intervals) {
    return Interval.xor([this].concat(intervals))
      .map((i) => this.intersection(i))
      .filter((i) => i && !i.isEmpty());
  }

  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    if (!this.isValid) return INVALID;
    return `[${this.s.toISO()} – ${this.e.toISO()})`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(opts) {
    if (!this.isValid) return INVALID;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    if (!this.isValid) return INVALID;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(opts) {
    if (!this.isValid) return INVALID;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }

  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  toFormat(dateFormat, { separator = " – " } = {}) {
    if (!this.isValid) return INVALID;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }

  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(unit, opts) {
    if (!this.isValid) {
      return _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }

  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/luxon.js":
/*!*****************************************!*\
  !*** ./node_modules/luxon/src/luxon.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTime": () => (/* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Duration": () => (/* reexport safe */ _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "FixedOffsetZone": () => (/* reexport safe */ _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "IANAZone": () => (/* reexport safe */ _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Info": () => (/* reexport safe */ _info_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Interval": () => (/* reexport safe */ _interval_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "InvalidZone": () => (/* reexport safe */ _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "Settings": () => (/* reexport safe */ _settings_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "SystemZone": () => (/* reexport safe */ _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "Zone": () => (/* reexport safe */ _zone_js__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval.js */ "./node_modules/luxon/src/interval.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.js */ "./node_modules/luxon/src/info.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zone.js */ "./node_modules/luxon/src/zone.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zones/invalidZone.js */ "./node_modules/luxon/src/zones/invalidZone.js");
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");











const VERSION = "3.1.0";




/***/ }),

/***/ "./node_modules/luxon/src/settings.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/settings.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");






let now = () => Date.now(),
  defaultZone = "system",
  defaultLocale = null,
  defaultNumberingSystem = null,
  defaultOutputCalendar = null,
  throwOnInvalid;

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */
class Settings {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return now;
  }

  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(n) {
    now = n;
  }

  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(zone) {
    defaultZone = zone;
  }

  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_3__.normalizeZone)(defaultZone, _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_0__["default"].instance);
  }

  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return defaultLocale;
  }

  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }

  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }

  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }

  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }

  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }

  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }

  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].resetCache();
    _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].resetCache();
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zone.js":
/*!****************************************!*\
  !*** ./node_modules/luxon/src/zone.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zone)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");


/**
 * @interface
 */
class Zone {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  get ianaName() {
    return this.name;
  }

  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(ts, opts) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(ts) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/IANAZone.js":
/*!**************************************************!*\
  !*** ./node_modules/luxon/src/zones/IANAZone.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IANAZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short",
    });
  }
  return dtfCache[zone];
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6,
};

function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""),
    parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted),
    [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i];
    const pos = typeToPos[type];

    if (type === "era") {
      filled[pos] = value;
    } else if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

let ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */
class IANAZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }

  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }

  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(s) {
    return this.isValidZone(s);
  }

  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor(name) {
    super();
    /** @private **/
    this.zoneName = name;
    /** @private **/
    this.valid = IANAZone.isValidZone(name);
  }

  /** @override **/
  get type() {
    return "iana";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.parseZoneInfo)(ts, format, locale, this.name);
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    const date = new Date(ts);

    if (isNaN(date)) return NaN;

    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts
      ? partsOffset(dtf, date)
      : hackyOffset(dtf, date);

    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    }

    // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
    const adjustedHour = hour === 24 ? 0 : hour;

    const asUTC = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.objToLocalTS)({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0,
    });

    let asTS = +date;
    const over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }

  /** @override **/
  get isValid() {
    return this.valid;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/fixedOffsetZone.js":
/*!*********************************************************!*\
  !*** ./node_modules/luxon/src/zones/fixedOffsetZone.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FixedOffsetZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let singleton = null;

/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */
class FixedOffsetZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }

  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(s) {
    if (s) {
      const r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(r[1], r[2]));
      }
    }
    return null;
  }

  constructor(offset) {
    super();
    /** @private **/
    this.fixed = offset;
  }

  /** @override **/
  get type() {
    return "fixed";
  }

  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.fixed, "narrow")}`;
  }

  get ianaName() {
    if (this.fixed === 0) {
      return "Etc/UTC";
    } else {
      return `Etc/GMT${(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(-this.fixed, "narrow")}`;
    }
  }

  /** @override **/
  offsetName() {
    return this.name;
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.fixed, format);
  }

  /** @override **/
  get isUniversal() {
    return true;
  }

  /** @override **/
  offset() {
    return this.fixed;
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }

  /** @override **/
  get isValid() {
    return true;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/invalidZone.js":
/*!*****************************************************!*\
  !*** ./node_modules/luxon/src/zones/invalidZone.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvalidZone)
/* harmony export */ });
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");


/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */
class InvalidZone extends _zone_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(zoneName) {
    super();
    /**  @private */
    this.zoneName = zoneName;
  }

  /** @override **/
  get type() {
    return "invalid";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName() {
    return null;
  }

  /** @override **/
  formatOffset() {
    return "";
  }

  /** @override **/
  offset() {
    return NaN;
  }

  /** @override **/
  equals() {
    return false;
  }

  /** @override **/
  get isValid() {
    return false;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/systemZone.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/zones/systemZone.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SystemZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let singleton = null;

/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */
class SystemZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    if (singleton === null) {
      singleton = new SystemZone();
    }
    return singleton;
  }

  /** @override **/
  get type() {
    return "system";
  }

  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.parseZoneInfo)(ts, format, locale);
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "system";
  }

  /** @override **/
  get isValid() {
    return true;
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FB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QUNlLHlCQUF5QixnREFBSTtBQUM1QztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQyxXQUFXLDREQUFhO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDJEQUFZO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vZ2FtZUlkQ29uZmlnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL3NyYy9Nb2R1bGVzL2RhdGVNb2R1bC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vc3JjL01vZHVsZXMvZ2V0RGF0YUZyb21DcmVhdGVkR2FtZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vc3JjL01vZHVsZXMvcG9zdERhdGFUb0NyZWF0ZWRHYW1lLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9zcmMvTW9kdWxlcy9yYW5rQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL3NyYy9Nb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvZGF0ZXRpbWUuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvZXJyb3JzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9kaWZmLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvZGlnaXRzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvZW5nbGlzaC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9mb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9pbnZhbGlkLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvbG9jYWxlLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvcmVnZXhQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC90b2tlblBhcnNlci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC96b25lVXRpbC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbmZvLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ludGVydmFsLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2x1eG9uLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3NldHRpbmdzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3pvbmUuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvem9uZXMvSUFOQVpvbmUuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvem9uZXMvZml4ZWRPZmZzZXRab25lLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3pvbmVzL2ludmFsaWRab25lLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLXByb2plY3QvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3pvbmVzL3N5c3RlbVpvbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdhbWVJRE9iamVjdCA9IHsgZ2FtZUlEOiAnZ1RYS0pvQUlxV0VRcnVDUWZ0cVYnIH07XG5leHBvcnQgY29uc3QgYmFzZVVSTE9iamVjdCA9IHtcbiAgYmFzZVVybDogJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpLycsXG59O1xuZXhwb3J0IGRlZmF1bHQgeyBnYW1lSURPYmplY3QsIGJhc2VVUkxPYmplY3QgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IGNhbGMoNjAlICsgMzAwcHgpO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHBhZGRpbmc6IDAuNSUgMCAwIDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDIwJSAtIDE2MHB4KTtcXHJcXG4gIGdhcDogY2FsYygxNiUgLSA2MHB4KTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiBzcGFuIGltZyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiBidXR0b24ge1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDAgOHB4IDA7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XFxyXFxufVxcclxcblxcclxcbi5sYW5ndWFnZSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5sYW5ndWFnZS1mbGFnIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGhlaWdodDogMjNweDtcXHJcXG4gIHdpZHRoOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxhZ3Mge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIHVsIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIHVsIGxpIGEge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdW5jZW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5maWVsZC1ob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdW5jZW1lbnQtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uZXcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXc6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy1ub3cge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBwYWRkaW5nOiAyJSA4JSAwIDglO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1zZWN0aW9uIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtYm94ZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBwYWRkaW5nOiA4JSA2JSAwIDYlO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS0xIHtcXHJcXG4gIGZsZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLTIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VidGl0bGUtYW5kLXJlZnJlc2gge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNSU7XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZS1hbmQtcmVmcmVzaCBidXR0b24ge1xcclxcbiAgcGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxyXFxuICBib3JkZXItY29sb3I6IGJsdWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yYW5raW5nLXRhYmxlIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBtYXJnaW4tdG9wOiAzNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFua2luZy10YWJsZSB1bCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmtpbmctdGFibGUgdWwgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFua2luZy10YWJsZSB1bCBsaTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFua2luZy10YWJsZSB1bCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1zdWJtaXQge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxyXFxuICBib3JkZXItY29sb3I6IGJsdWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXRpbWUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDE0LjUlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHRzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogY2FsYyg2MCUgKyAzMDBweCk7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogMC41JSAwIDAgMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMjAlIC0gMTYwcHgpO1xcclxcbiAgZ2FwOiBjYWxjKDE2JSAtIDYwcHgpO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHNwYW4gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGJ1dHRvbiB7XFxyXFxuICBib3JkZXItY29sb3I6IGJsdWU7XFxyXFxuICB3aWR0aDogMTgwcHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMCA4cHggMDtcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwc2t5Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmd1YWdlIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmd1YWdlLWZsYWcge1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgaGVpZ2h0OiAyM3B4O1xcclxcbiAgd2lkdGg6IDIzcHg7XFxyXFxufVxcclxcblxcclxcbi5mbGFncyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNSU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24gdWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24gdWwgbGkgYSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm91bmNlbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkLWhvbGRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm91bmNlbWVudC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwc2t5Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2g6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XFxyXFxufVxcclxcblxcclxcbi52aWV3LW5vdyB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDIlIDglIDAgOCU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXNlY3Rpb24gaDEge1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1ib3hlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHBhZGRpbmc6IDglIDYlIDAgNiU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLTEge1xcclxcbiAgZmxleDogMztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tMiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDI2cHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZS1hbmQtcmVmcmVzaCB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YnRpdGxlLWFuZC1yZWZyZXNoIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA4cHggMTVweCA4cHggMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmtpbmctdGFibGUge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XFxyXFxufVxcclxcblxcclxcbi5yYW5raW5nLXRhYmxlIHVsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFua2luZy10YWJsZSB1bCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yYW5raW5nLXRhYmxlIHVsIGxpOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5yYW5raW5nLXRhYmxlIHVsIGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXN1Ym1pdCB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMTVweCA4cHggMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtdGltZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTAlO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTQuNSU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodHMge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IGdob3N0d2hpdGU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2x1eG9uLmpzJztcblxuY29uc3Qgc2hvd0N1cnJlbnRUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGltZScpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0RhdGVUaW1lID0gKCkgPT4ge1xuICBjb25zdCBkdCA9IERhdGVUaW1lLm5vdygpO1xuICBzaG93Q3VycmVudFRpbWUudGV4dENvbnRlbnQgPSBkdFxuICAgIC50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUylcbiAgICAuc2xpY2UoMCwgLTUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93RGF0ZVRpbWUsXG59O1xuIiwiaW1wb3J0IHsgZ2FtZUlET2JqZWN0LCBiYXNlVVJMT2JqZWN0IH0gZnJvbSAnLi4vLi4vZ2FtZUlkQ29uZmlnLmpzJztcblxuY29uc3QgQkFTRV9VUkwgPSBiYXNlVVJMT2JqZWN0LmJhc2VVcmw7XG5jb25zdCBBUElfUEFUSCA9IGAke0JBU0VfVVJMfWdhbWVzLyR7Z2FtZUlET2JqZWN0LmdhbWVJRH0vc2NvcmVzL2A7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGZldGNoZWREYXRhID0gZmV0Y2goQVBJX1BBVEgsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLnJlc3VsdClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvcik7XG5cbiAgcmV0dXJuIGZldGNoZWREYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmZXRjaERhdGEsXG59O1xuIiwiaW1wb3J0IHsgZ2FtZUlET2JqZWN0LCBiYXNlVVJMT2JqZWN0IH0gZnJvbSAnLi4vLi4vZ2FtZUlkQ29uZmlnLmpzJztcblxuY29uc3QgQkFTRV9VUkwgPSBiYXNlVVJMT2JqZWN0LmJhc2VVcmw7XG5jb25zdCBBUElfUEFUSCA9IGAke0JBU0VfVVJMfWdhbWVzLyR7Z2FtZUlET2JqZWN0LmdhbWVJRH0vc2NvcmVzL2A7XG5cbmV4cG9ydCBjb25zdCBlbnRlclNjb3JlRGF0YSA9IChzY29yZSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGZldGNoKEFQSV9QQVRILCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2NvcmUpLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yKTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGVudGVyU2NvcmVEYXRhIH07XG4iLCJleHBvcnQgY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3Rvcih1c2VyLCBzY29yZSkge1xuICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgU2NvcmUsXG59O1xuIiwiaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9nZXREYXRhRnJvbUNyZWF0ZWRHYW1lLmpzJztcbmltcG9ydCB7IFNjb3JlIH0gZnJvbSAnLi9yYW5rQ2xhc3MuanMnO1xuaW1wb3J0IHsgZW50ZXJTY29yZURhdGEgfSBmcm9tICcuL3Bvc3REYXRhVG9DcmVhdGVkR2FtZS5qcyc7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFdmVudE1lc3NhZ2UgPSAoZm9ybVRhZywgbWVzc2FnZVRhZywgcmVzKSA9PiB7XG4gIG1lc3NhZ2VUYWcuaW5uZXJUZXh0ID0gcmVzO1xuICBmb3JtVGFnLmFwcGVuZENoaWxkKG1lc3NhZ2VUYWcpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBmb3JtVGFnLnJlbW92ZUNoaWxkKGZvcm1UYWcubGFzdENoaWxkKTtcbiAgfSwgMzAwMCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydFRoZW5BZGQgPSAoXG4gIHRhYmxlQ29udGVudCxcbiAgcmFua2luZ0NvbnRlbnQsXG4gIHJhbmtpbmdMaXN0LFxuICByYW5raW5nSXRlbXMsXG4pID0+IHtcbiAgdGFibGVDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICByYW5raW5nQ29udGVudCA9ICcnO1xuICByYW5raW5nTGlzdC5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XG5cbiAgcmFua2luZ0xpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgIHJhbmtpbmdDb250ZW50ICs9IGBcbiAgICAgICAgICA8bGk+JHtkYXRhLnVzZXJ9OiAke2RhdGEuc2NvcmV9PC9saT5cbiAgICAgICAgICBgO1xuICB9KTtcblxuICByYW5raW5nSXRlbXMuaW5uZXJIVE1MID0gcmFua2luZ0NvbnRlbnQ7XG4gIHRhYmxlQ29udGVudC5hcHBlbmRDaGlsZChyYW5raW5nSXRlbXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJldHVyblNjb3JlRGF0YSA9IGFzeW5jICh0YWJsZUNvbnRlbnQsIHJhbmtpbmdDb250ZW50LCByYW5raW5nTGlzdCwgcmFua2luZ0l0ZW1zKSA9PiB7XG4gIHJhbmtpbmdMaXN0ID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG4gIHNvcnRUaGVuQWRkKHRhYmxlQ29udGVudCwgcmFua2luZ0NvbnRlbnQsIHJhbmtpbmdMaXN0LCByYW5raW5nSXRlbXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1pdERhdGFUb0FQSSA9IChmb3JtVGFnLCBzY29yZSwgaW5wdXROYW1lLCBpbnB1dFNjb3JlLCByZXMsIG1lc3NhZ2VUYWcpID0+IHtcbiAgZm9ybVRhZy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNjb3JlID0gbmV3IFNjb3JlKGlucHV0TmFtZS52YWx1ZSwgcGFyc2VGbG9hdChpbnB1dFNjb3JlLnZhbHVlKSk7XG4gICAgcmVzID0gYXdhaXQgZW50ZXJTY29yZURhdGEoc2NvcmUpO1xuICAgIGlmIChyZXMucmVzdWx0ID09PSAnTGVhZGVyYm9hcmQgc2NvcmUgY3JlYXRlZCBjb3JyZWN0bHkuJykge1xuICAgICAgbWVzc2FnZVRhZy5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuOyBjb2xvcjp3aGl0ZTsnO1xuICAgICAgdXBkYXRlRXZlbnRNZXNzYWdlKGZvcm1UYWcsIG1lc3NhZ2VUYWcsIHJlcy5yZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlVGFnLmlubmVyVGV4dCA9ICdGaXggeW91ciBpbnB1dCBwbGVhc2UhJztcbiAgICAgIG1lc3NhZ2VUYWcuc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjpyZWQ7IGNvbG9yOndoaXRlOyc7XG4gICAgICBmb3JtVGFnLmFwcGVuZENoaWxkKG1lc3NhZ2VUYWcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvcm1UYWcucmVtb3ZlQ2hpbGQoZm9ybVRhZy5sYXN0Q2hpbGQpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICAgIGlucHV0TmFtZS52YWx1ZSA9ICcnO1xuICAgIGlucHV0U2NvcmUudmFsdWUgPSAnJztcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xpY2tSZWZyZXNoID0gKHRhYmxlQ29udGVudCwgcmFua2luZ0NvbnRlbnQsIHJhbmtpbmdMaXN0LFxuICByYW5raW5nSXRlbXMsIHJlZnJlc2hCdXR0b24sIG1lc3NhZ2VUYWcsIHJlZnJlc2hDb250YWluZXIpID0+IHtcbiAgcmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbWVzc2FnZVRhZy5pbm5lclRleHQgPSAnUmVmcmVzaGVkIHN1Y2Nlc3NmdWxseSEnO1xuICAgIG1lc3NhZ2VUYWcuc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjpncmVlbjsgY29sb3I6d2hpdGU7JztcbiAgICByZWZyZXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VUYWcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVmcmVzaENvbnRhaW5lci5yZW1vdmVDaGlsZChyZWZyZXNoQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuU2NvcmVEYXRhKHRhYmxlQ29udGVudCwgcmFua2luZ0NvbnRlbnQsIHJhbmtpbmdMaXN0LCByYW5raW5nSXRlbXMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdXBkYXRlRXZlbnRNZXNzYWdlLFxuICBzb3J0VGhlbkFkZCxcbiAgcmV0dXJuU2NvcmVEYXRhLFxuICBzdWJtaXREYXRhVG9BUEksXG4gIGNsaWNrUmVmcmVzaCxcbn07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJldHVyblNjb3JlRGF0YSwgc3VibWl0RGF0YVRvQVBJLCBjbGlja1JlZnJlc2ggfSBmcm9tICcuL01vZHVsZXMvdXRpbHMuanMnO1xuaW1wb3J0IHsgc2hvd0RhdGVUaW1lIH0gZnJvbSAnLi9Nb2R1bGVzL2RhdGVNb2R1bC5qcyc7XG5cbmNvbnN0IHRhYmxlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5raW5nLXRhYmxlJyk7XG5jb25zdCBmb3JtVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1yYW5raW5nJyk7XG5jb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtbmFtZScpO1xuY29uc3QgaW5wdXRTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1zY29yZScpO1xuY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoJyk7XG5jb25zdCByZWZyZXNoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YnRpdGxlLWFuZC1yZWZyZXNoJyk7XG5cbmNvbnN0IHJhbmtpbmdMaXN0ID0gW107XG5jb25zdCByYW5raW5nQ29udGVudCA9ICcnO1xuY29uc3Qgc2NvcmUgPSB7fTtcblxuY29uc3QgcmFua2luZ0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbnJhbmtpbmdJdGVtcy5jbGFzc05hbWUgPSAnaXRlbS1saXN0LXVsJztcblxucmV0dXJuU2NvcmVEYXRhKHRhYmxlQ29udGVudCwgcmFua2luZ0NvbnRlbnQsIHJhbmtpbmdMaXN0LCByYW5raW5nSXRlbXMpO1xuXG5sZXQgcmVzO1xuY29uc3QgbWVzc2FnZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuc3VibWl0RGF0YVRvQVBJKGZvcm1UYWcsIHNjb3JlLCBpbnB1dE5hbWUsIGlucHV0U2NvcmUsIHJlcywgbWVzc2FnZVRhZyk7XG5cbmNsaWNrUmVmcmVzaCh0YWJsZUNvbnRlbnQsIHJhbmtpbmdDb250ZW50LCByYW5raW5nTGlzdCxcbiAgcmFua2luZ0l0ZW1zLCByZWZyZXNoQnV0dG9uLCBtZXNzYWdlVGFnLCByZWZyZXNoQ29udGFpbmVyKTtcblxuc2V0SW50ZXJ2YWwoc2hvd0RhdGVUaW1lLCAxMDAwKTtcbiIsImltcG9ydCBEdXJhdGlvbiBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuaW1wb3J0IEludGVydmFsIGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCBJbmZvIGZyb20gXCIuL2luZm8uanNcIjtcbmltcG9ydCBGb3JtYXR0ZXIgZnJvbSBcIi4vaW1wbC9mb3JtYXR0ZXIuanNcIjtcbmltcG9ydCBGaXhlZE9mZnNldFpvbmUgZnJvbSBcIi4vem9uZXMvZml4ZWRPZmZzZXRab25lLmpzXCI7XG5pbXBvcnQgTG9jYWxlIGZyb20gXCIuL2ltcGwvbG9jYWxlLmpzXCI7XG5pbXBvcnQge1xuICBpc1VuZGVmaW5lZCxcbiAgbWF5YmVBcnJheSxcbiAgaXNEYXRlLFxuICBpc051bWJlcixcbiAgYmVzdEJ5LFxuICBkYXlzSW5Nb250aCxcbiAgZGF5c0luWWVhcixcbiAgaXNMZWFwWWVhcixcbiAgd2Vla3NJbldlZWtZZWFyLFxuICBub3JtYWxpemVPYmplY3QsXG4gIHJvdW5kVG8sXG4gIG9ialRvTG9jYWxUUyxcbiAgcGFkU3RhcnQsXG59IGZyb20gXCIuL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplWm9uZSB9IGZyb20gXCIuL2ltcGwvem9uZVV0aWwuanNcIjtcbmltcG9ydCBkaWZmIGZyb20gXCIuL2ltcGwvZGlmZi5qc1wiO1xuaW1wb3J0IHsgcGFyc2VSRkMyODIyRGF0ZSwgcGFyc2VJU09EYXRlLCBwYXJzZUhUVFBEYXRlLCBwYXJzZVNRTCB9IGZyb20gXCIuL2ltcGwvcmVnZXhQYXJzZXIuanNcIjtcbmltcG9ydCB7XG4gIHBhcnNlRnJvbVRva2VucyxcbiAgZXhwbGFpbkZyb21Ub2tlbnMsXG4gIGZvcm1hdE9wdHNUb1Rva2VucyxcbiAgZXhwYW5kTWFjcm9Ub2tlbnMsXG59IGZyb20gXCIuL2ltcGwvdG9rZW5QYXJzZXIuanNcIjtcbmltcG9ydCB7XG4gIGdyZWdvcmlhblRvV2VlayxcbiAgd2Vla1RvR3JlZ29yaWFuLFxuICBncmVnb3JpYW5Ub09yZGluYWwsXG4gIG9yZGluYWxUb0dyZWdvcmlhbixcbiAgaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEsXG4gIGhhc0ludmFsaWRXZWVrRGF0YSxcbiAgaGFzSW52YWxpZE9yZGluYWxEYXRhLFxuICBoYXNJbnZhbGlkVGltZURhdGEsXG59IGZyb20gXCIuL2ltcGwvY29udmVyc2lvbnMuanNcIjtcbmltcG9ydCAqIGFzIEZvcm1hdHMgZnJvbSBcIi4vaW1wbC9mb3JtYXRzLmpzXCI7XG5pbXBvcnQge1xuICBJbnZhbGlkQXJndW1lbnRFcnJvcixcbiAgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IsXG4gIEludmFsaWRVbml0RXJyb3IsXG4gIEludmFsaWREYXRlVGltZUVycm9yLFxufSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcbmltcG9ydCBJbnZhbGlkIGZyb20gXCIuL2ltcGwvaW52YWxpZC5qc1wiO1xuXG5jb25zdCBJTlZBTElEID0gXCJJbnZhbGlkIERhdGVUaW1lXCI7XG5jb25zdCBNQVhfREFURSA9IDguNjRlMTU7XG5cbmZ1bmN0aW9uIHVuc3VwcG9ydGVkWm9uZSh6b25lKSB7XG4gIHJldHVybiBuZXcgSW52YWxpZChcInVuc3VwcG9ydGVkIHpvbmVcIiwgYHRoZSB6b25lIFwiJHt6b25lLm5hbWV9XCIgaXMgbm90IHN1cHBvcnRlZGApO1xufVxuXG4vLyB3ZSBjYWNoZSB3ZWVrIGRhdGEgb24gdGhlIERUIG9iamVjdCBhbmQgdGhpcyBpbnRlcm1lZGlhdGVzIHRoZSBjYWNoZVxuZnVuY3Rpb24gcG9zc2libHlDYWNoZWRXZWVrRGF0YShkdCkge1xuICBpZiAoZHQud2Vla0RhdGEgPT09IG51bGwpIHtcbiAgICBkdC53ZWVrRGF0YSA9IGdyZWdvcmlhblRvV2VlayhkdC5jKTtcbiAgfVxuICByZXR1cm4gZHQud2Vla0RhdGE7XG59XG5cbi8vIGNsb25lIHJlYWxseSBtZWFucywgXCJtYWtlIGEgbmV3IG9iamVjdCB3aXRoIHRoZXNlIG1vZGlmaWNhdGlvbnNcIi4gYWxsIFwic2V0dGVyc1wiIHJlYWxseSB1c2UgdGhpc1xuLy8gdG8gY3JlYXRlIGEgbmV3IG9iamVjdCB3aGlsZSBvbmx5IGNoYW5naW5nIHNvbWUgb2YgdGhlIHByb3BlcnRpZXNcbmZ1bmN0aW9uIGNsb25lKGluc3QsIGFsdHMpIHtcbiAgY29uc3QgY3VycmVudCA9IHtcbiAgICB0czogaW5zdC50cyxcbiAgICB6b25lOiBpbnN0LnpvbmUsXG4gICAgYzogaW5zdC5jLFxuICAgIG86IGluc3QubyxcbiAgICBsb2M6IGluc3QubG9jLFxuICAgIGludmFsaWQ6IGluc3QuaW52YWxpZCxcbiAgfTtcbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IC4uLmN1cnJlbnQsIC4uLmFsdHMsIG9sZDogY3VycmVudCB9KTtcbn1cblxuLy8gZmluZCB0aGUgcmlnaHQgb2Zmc2V0IGEgZ2l2ZW4gbG9jYWwgdGltZS4gVGhlIG8gaW5wdXQgaXMgb3VyIGd1ZXNzLCB3aGljaCBkZXRlcm1pbmVzIHdoaWNoXG4vLyBvZmZzZXQgd2UnbGwgcGljayBpbiBhbWJpZ3VvdXMgY2FzZXMgKGUuZy4gdGhlcmUgYXJlIHR3byAzIEFNcyBiL2MgRmFsbGJhY2sgRFNUKVxuZnVuY3Rpb24gZml4T2Zmc2V0KGxvY2FsVFMsIG8sIHR6KSB7XG4gIC8vIE91ciBVVEMgdGltZSBpcyBqdXN0IGEgZ3Vlc3MgYmVjYXVzZSBvdXIgb2Zmc2V0IGlzIGp1c3QgYSBndWVzc1xuICBsZXQgdXRjR3Vlc3MgPSBsb2NhbFRTIC0gbyAqIDYwICogMTAwMDtcblxuICAvLyBUZXN0IHdoZXRoZXIgdGhlIHpvbmUgbWF0Y2hlcyB0aGUgb2Zmc2V0IGZvciB0aGlzIHRzXG4gIGNvbnN0IG8yID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTtcblxuICAvLyBJZiBzbywgb2Zmc2V0IGRpZG4ndCBjaGFuZ2UgYW5kIHdlJ3JlIGRvbmVcbiAgaWYgKG8gPT09IG8yKSB7XG4gICAgcmV0dXJuIFt1dGNHdWVzcywgb107XG4gIH1cblxuICAvLyBJZiBub3QsIGNoYW5nZSB0aGUgdHMgYnkgdGhlIGRpZmZlcmVuY2UgaW4gdGhlIG9mZnNldFxuICB1dGNHdWVzcyAtPSAobzIgLSBvKSAqIDYwICogMTAwMDtcblxuICAvLyBJZiB0aGF0IGdpdmVzIHVzIHRoZSBsb2NhbCB0aW1lIHdlIHdhbnQsIHdlJ3JlIGRvbmVcbiAgY29uc3QgbzMgPSB0ei5vZmZzZXQodXRjR3Vlc3MpO1xuICBpZiAobzIgPT09IG8zKSB7XG4gICAgcmV0dXJuIFt1dGNHdWVzcywgbzJdO1xuICB9XG5cbiAgLy8gSWYgaXQncyBkaWZmZXJlbnQsIHdlJ3JlIGluIGEgaG9sZSB0aW1lLiBUaGUgb2Zmc2V0IGhhcyBjaGFuZ2VkLCBidXQgdGhlIHdlIGRvbid0IGFkanVzdCB0aGUgdGltZVxuICByZXR1cm4gW2xvY2FsVFMgLSBNYXRoLm1pbihvMiwgbzMpICogNjAgKiAxMDAwLCBNYXRoLm1heChvMiwgbzMpXTtcbn1cblxuLy8gY29udmVydCBhbiBlcG9jaCB0aW1lc3RhbXAgaW50byBhIGNhbGVuZGFyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBvZmZzZXRcbmZ1bmN0aW9uIHRzVG9PYmoodHMsIG9mZnNldCkge1xuICB0cyArPSBvZmZzZXQgKiA2MCAqIDEwMDA7XG5cbiAgY29uc3QgZCA9IG5ldyBEYXRlKHRzKTtcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGQuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICBtb250aDogZC5nZXRVVENNb250aCgpICsgMSxcbiAgICBkYXk6IGQuZ2V0VVRDRGF0ZSgpLFxuICAgIGhvdXI6IGQuZ2V0VVRDSG91cnMoKSxcbiAgICBtaW51dGU6IGQuZ2V0VVRDTWludXRlcygpLFxuICAgIHNlY29uZDogZC5nZXRVVENTZWNvbmRzKCksXG4gICAgbWlsbGlzZWNvbmQ6IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCksXG4gIH07XG59XG5cbi8vIGNvbnZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBlcG9jaCB0aW1lc3RhbXBcbmZ1bmN0aW9uIG9ialRvVFMob2JqLCBvZmZzZXQsIHpvbmUpIHtcbiAgcmV0dXJuIGZpeE9mZnNldChvYmpUb0xvY2FsVFMob2JqKSwgb2Zmc2V0LCB6b25lKTtcbn1cblxuLy8gY3JlYXRlIGEgbmV3IERUIGluc3RhbmNlIGJ5IGFkZGluZyBhIGR1cmF0aW9uLCBhZGp1c3RpbmcgZm9yIERTVHNcbmZ1bmN0aW9uIGFkanVzdFRpbWUoaW5zdCwgZHVyKSB7XG4gIGNvbnN0IG9QcmUgPSBpbnN0Lm8sXG4gICAgeWVhciA9IGluc3QuYy55ZWFyICsgTWF0aC50cnVuYyhkdXIueWVhcnMpLFxuICAgIG1vbnRoID0gaW5zdC5jLm1vbnRoICsgTWF0aC50cnVuYyhkdXIubW9udGhzKSArIE1hdGgudHJ1bmMoZHVyLnF1YXJ0ZXJzKSAqIDMsXG4gICAgYyA9IHtcbiAgICAgIC4uLmluc3QuYyxcbiAgICAgIHllYXIsXG4gICAgICBtb250aCxcbiAgICAgIGRheTpcbiAgICAgICAgTWF0aC5taW4oaW5zdC5jLmRheSwgZGF5c0luTW9udGgoeWVhciwgbW9udGgpKSArXG4gICAgICAgIE1hdGgudHJ1bmMoZHVyLmRheXMpICtcbiAgICAgICAgTWF0aC50cnVuYyhkdXIud2Vla3MpICogNyxcbiAgICB9LFxuICAgIG1pbGxpc1RvQWRkID0gRHVyYXRpb24uZnJvbU9iamVjdCh7XG4gICAgICB5ZWFyczogZHVyLnllYXJzIC0gTWF0aC50cnVuYyhkdXIueWVhcnMpLFxuICAgICAgcXVhcnRlcnM6IGR1ci5xdWFydGVycyAtIE1hdGgudHJ1bmMoZHVyLnF1YXJ0ZXJzKSxcbiAgICAgIG1vbnRoczogZHVyLm1vbnRocyAtIE1hdGgudHJ1bmMoZHVyLm1vbnRocyksXG4gICAgICB3ZWVrczogZHVyLndlZWtzIC0gTWF0aC50cnVuYyhkdXIud2Vla3MpLFxuICAgICAgZGF5czogZHVyLmRheXMgLSBNYXRoLnRydW5jKGR1ci5kYXlzKSxcbiAgICAgIGhvdXJzOiBkdXIuaG91cnMsXG4gICAgICBtaW51dGVzOiBkdXIubWludXRlcyxcbiAgICAgIHNlY29uZHM6IGR1ci5zZWNvbmRzLFxuICAgICAgbWlsbGlzZWNvbmRzOiBkdXIubWlsbGlzZWNvbmRzLFxuICAgIH0pLmFzKFwibWlsbGlzZWNvbmRzXCIpLFxuICAgIGxvY2FsVFMgPSBvYmpUb0xvY2FsVFMoYyk7XG5cbiAgbGV0IFt0cywgb10gPSBmaXhPZmZzZXQobG9jYWxUUywgb1ByZSwgaW5zdC56b25lKTtcblxuICBpZiAobWlsbGlzVG9BZGQgIT09IDApIHtcbiAgICB0cyArPSBtaWxsaXNUb0FkZDtcbiAgICAvLyB0aGF0IGNvdWxkIGhhdmUgY2hhbmdlZCB0aGUgb2Zmc2V0IGJ5IGdvaW5nIG92ZXIgYSBEU1QsIGJ1dCB3ZSB3YW50IHRvIGtlZXAgdGhlIHRzIHRoZSBzYW1lXG4gICAgbyA9IGluc3Quem9uZS5vZmZzZXQodHMpO1xuICB9XG5cbiAgcmV0dXJuIHsgdHMsIG8gfTtcbn1cblxuLy8gaGVscGVyIHVzZWZ1bCBpbiB0dXJuaW5nIHRoZSByZXN1bHRzIG9mIHBhcnNpbmcgaW50byByZWFsIGRhdGVzXG4vLyBieSBoYW5kbGluZyB0aGUgem9uZSBvcHRpb25zXG5mdW5jdGlvbiBwYXJzZURhdGFUb0RhdGVUaW1lKHBhcnNlZCwgcGFyc2VkWm9uZSwgb3B0cywgZm9ybWF0LCB0ZXh0LCBzcGVjaWZpY09mZnNldCkge1xuICBjb25zdCB7IHNldFpvbmUsIHpvbmUgfSA9IG9wdHM7XG4gIGlmIChwYXJzZWQgJiYgT2JqZWN0LmtleXMocGFyc2VkKS5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCBpbnRlcnByZXRhdGlvblpvbmUgPSBwYXJzZWRab25lIHx8IHpvbmUsXG4gICAgICBpbnN0ID0gRGF0ZVRpbWUuZnJvbU9iamVjdChwYXJzZWQsIHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgem9uZTogaW50ZXJwcmV0YXRpb25ab25lLFxuICAgICAgICBzcGVjaWZpY09mZnNldCxcbiAgICAgIH0pO1xuICAgIHJldHVybiBzZXRab25lID8gaW5zdCA6IGluc3Quc2V0Wm9uZSh6b25lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcbiAgICAgIG5ldyBJbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyAke2Zvcm1hdH1gKVxuICAgICk7XG4gIH1cbn1cblxuLy8gaWYgeW91IHdhbnQgdG8gb3V0cHV0IGEgdGVjaG5pY2FsIGZvcm1hdCAoZS5nLiBSRkMgMjgyMiksIHRoaXMgaGVscGVyXG4vLyBoZWxwcyBoYW5kbGUgdGhlIGRldGFpbHNcbmZ1bmN0aW9uIHRvVGVjaEZvcm1hdChkdCwgZm9ybWF0LCBhbGxvd1ogPSB0cnVlKSB7XG4gIHJldHVybiBkdC5pc1ZhbGlkXG4gICAgPyBGb3JtYXR0ZXIuY3JlYXRlKExvY2FsZS5jcmVhdGUoXCJlbi1VU1wiKSwge1xuICAgICAgICBhbGxvd1osXG4gICAgICAgIGZvcmNlU2ltcGxlOiB0cnVlLFxuICAgICAgfSkuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmb3JtYXQpXG4gICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiB0b0lTT0RhdGUobywgZXh0ZW5kZWQpIHtcbiAgY29uc3QgbG9uZ0Zvcm1hdCA9IG8uYy55ZWFyID4gOTk5OSB8fCBvLmMueWVhciA8IDA7XG4gIGxldCBjID0gXCJcIjtcbiAgaWYgKGxvbmdGb3JtYXQgJiYgby5jLnllYXIgPj0gMCkgYyArPSBcIitcIjtcbiAgYyArPSBwYWRTdGFydChvLmMueWVhciwgbG9uZ0Zvcm1hdCA/IDYgOiA0KTtcblxuICBpZiAoZXh0ZW5kZWQpIHtcbiAgICBjICs9IFwiLVwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1vbnRoKTtcbiAgICBjICs9IFwiLVwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLmRheSk7XG4gIH0gZWxzZSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMubW9udGgpO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLmRheSk7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIHRvSVNPVGltZShcbiAgbyxcbiAgZXh0ZW5kZWQsXG4gIHN1cHByZXNzU2Vjb25kcyxcbiAgc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gIGluY2x1ZGVPZmZzZXQsXG4gIGV4dGVuZGVkWm9uZVxuKSB7XG4gIGxldCBjID0gcGFkU3RhcnQoby5jLmhvdXIpO1xuICBpZiAoZXh0ZW5kZWQpIHtcbiAgICBjICs9IFwiOlwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbnV0ZSk7XG4gICAgaWYgKG8uYy5zZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzU2Vjb25kcykge1xuICAgICAgYyArPSBcIjpcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMubWludXRlKTtcbiAgfVxuXG4gIGlmIChvLmMuc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc1NlY29uZHMpIHtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5zZWNvbmQpO1xuXG4gICAgaWYgKG8uYy5taWxsaXNlY29uZCAhPT0gMCB8fCAhc3VwcHJlc3NNaWxsaXNlY29uZHMpIHtcbiAgICAgIGMgKz0gXCIuXCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KG8uYy5taWxsaXNlY29uZCwgMyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGluY2x1ZGVPZmZzZXQpIHtcbiAgICBpZiAoby5pc09mZnNldEZpeGVkICYmIG8ub2Zmc2V0ID09PSAwICYmICFleHRlbmRlZFpvbmUpIHtcbiAgICAgIGMgKz0gXCJaXCI7XG4gICAgfSBlbHNlIGlmIChvLm8gPCAwKSB7XG4gICAgICBjICs9IFwiLVwiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKC1vLm8gLyA2MCkpO1xuICAgICAgYyArPSBcIjpcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYygtby5vICUgNjApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYyArPSBcIitcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYyhvLm8gLyA2MCkpO1xuICAgICAgYyArPSBcIjpcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYyhvLm8gJSA2MCkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChleHRlbmRlZFpvbmUpIHtcbiAgICBjICs9IFwiW1wiICsgby56b25lLmlhbmFOYW1lICsgXCJdXCI7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbi8vIGRlZmF1bHRzIGZvciB1bnNwZWNpZmllZCB1bml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFyc1xuY29uc3QgZGVmYXVsdFVuaXRWYWx1ZXMgPSB7XG4gICAgbW9udGg6IDEsXG4gICAgZGF5OiAxLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMCxcbiAgfSxcbiAgZGVmYXVsdFdlZWtVbml0VmFsdWVzID0ge1xuICAgIHdlZWtOdW1iZXI6IDEsXG4gICAgd2Vla2RheTogMSxcbiAgICBob3VyOiAwLFxuICAgIG1pbnV0ZTogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgbWlsbGlzZWNvbmQ6IDAsXG4gIH0sXG4gIGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcyA9IHtcbiAgICBvcmRpbmFsOiAxLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMCxcbiAgfTtcblxuLy8gVW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnMsIHNvcnRlZCBieSBiaWduZXNzXG5jb25zdCBvcmRlcmVkVW5pdHMgPSBbXCJ5ZWFyXCIsIFwibW9udGhcIiwgXCJkYXlcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl0sXG4gIG9yZGVyZWRXZWVrVW5pdHMgPSBbXG4gICAgXCJ3ZWVrWWVhclwiLFxuICAgIFwid2Vla051bWJlclwiLFxuICAgIFwid2Vla2RheVwiLFxuICAgIFwiaG91clwiLFxuICAgIFwibWludXRlXCIsXG4gICAgXCJzZWNvbmRcIixcbiAgICBcIm1pbGxpc2Vjb25kXCIsXG4gIF0sXG4gIG9yZGVyZWRPcmRpbmFsVW5pdHMgPSBbXCJ5ZWFyXCIsIFwib3JkaW5hbFwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXTtcblxuLy8gc3RhbmRhcmRpemUgY2FzZSBhbmQgcGx1cmFsaXR5IGluIHVuaXRzXG5mdW5jdGlvbiBub3JtYWxpemVVbml0KHVuaXQpIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHtcbiAgICB5ZWFyOiBcInllYXJcIixcbiAgICB5ZWFyczogXCJ5ZWFyXCIsXG4gICAgbW9udGg6IFwibW9udGhcIixcbiAgICBtb250aHM6IFwibW9udGhcIixcbiAgICBkYXk6IFwiZGF5XCIsXG4gICAgZGF5czogXCJkYXlcIixcbiAgICBob3VyOiBcImhvdXJcIixcbiAgICBob3VyczogXCJob3VyXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgcXVhcnRlcjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcnM6IFwicXVhcnRlclwiLFxuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG1pbGxpc2Vjb25kOiBcIm1pbGxpc2Vjb25kXCIsXG4gICAgbWlsbGlzZWNvbmRzOiBcIm1pbGxpc2Vjb25kXCIsXG4gICAgd2Vla2RheTogXCJ3ZWVrZGF5XCIsXG4gICAgd2Vla2RheXM6IFwid2Vla2RheVwiLFxuICAgIHdlZWtudW1iZXI6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWtzbnVtYmVyOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVrbnVtYmVyczogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla3llYXI6IFwid2Vla1llYXJcIixcbiAgICB3ZWVreWVhcnM6IFwid2Vla1llYXJcIixcbiAgICBvcmRpbmFsOiBcIm9yZGluYWxcIixcbiAgfVt1bml0LnRvTG93ZXJDYXNlKCldO1xuXG4gIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XG5cbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59XG5cbi8vIHRoaXMgaXMgYSBkdW1iZWQgZG93biB2ZXJzaW9uIG9mIGZyb21PYmplY3QoKSB0aGF0IHJ1bnMgYWJvdXQgNjAlIGZhc3RlclxuLy8gYnV0IGRvZXNuJ3QgZG8gYW55IHZhbGlkYXRpb24sIG1ha2VzIGEgYnVuY2ggb2YgYXNzdW1wdGlvbnMgYWJvdXQgd2hhdCB1bml0c1xuLy8gYXJlIHByZXNlbnQsIGFuZCBzbyBvbi5cbmZ1bmN0aW9uIHF1aWNrRFQob2JqLCBvcHRzKSB7XG4gIGNvbnN0IHpvbmUgPSBub3JtYWxpemVab25lKG9wdHMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgIGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpLFxuICAgIHRzTm93ID0gU2V0dGluZ3Mubm93KCk7XG5cbiAgbGV0IHRzLCBvO1xuXG4gIC8vIGFzc3VtZSB3ZSBoYXZlIHRoZSBoaWdoZXItb3JkZXIgdW5pdHNcbiAgaWYgKCFpc1VuZGVmaW5lZChvYmoueWVhcikpIHtcbiAgICBmb3IgKGNvbnN0IHUgb2Ygb3JkZXJlZFVuaXRzKSB7XG4gICAgICBpZiAoaXNVbmRlZmluZWQob2JqW3VdKSkge1xuICAgICAgICBvYmpbdV0gPSBkZWZhdWx0VW5pdFZhbHVlc1t1XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEob2JqKSB8fCBoYXNJbnZhbGlkVGltZURhdGEob2JqKTtcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0UHJvdmlzID0gem9uZS5vZmZzZXQodHNOb3cpO1xuICAgIFt0cywgb10gPSBvYmpUb1RTKG9iaiwgb2Zmc2V0UHJvdmlzLCB6b25lKTtcbiAgfSBlbHNlIHtcbiAgICB0cyA9IHRzTm93O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IHRzLCB6b25lLCBsb2MsIG8gfSk7XG59XG5cbmZ1bmN0aW9uIGRpZmZSZWxhdGl2ZShzdGFydCwgZW5kLCBvcHRzKSB7XG4gIGNvbnN0IHJvdW5kID0gaXNVbmRlZmluZWQob3B0cy5yb3VuZCkgPyB0cnVlIDogb3B0cy5yb3VuZCxcbiAgICBmb3JtYXQgPSAoYywgdW5pdCkgPT4ge1xuICAgICAgYyA9IHJvdW5kVG8oYywgcm91bmQgfHwgb3B0cy5jYWxlbmRhcnkgPyAwIDogMiwgdHJ1ZSk7XG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBlbmQubG9jLmNsb25lKG9wdHMpLnJlbEZvcm1hdHRlcihvcHRzKTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGMsIHVuaXQpO1xuICAgIH0sXG4gICAgZGlmZmVyID0gKHVuaXQpID0+IHtcbiAgICAgIGlmIChvcHRzLmNhbGVuZGFyeSkge1xuICAgICAgICBpZiAoIWVuZC5oYXNTYW1lKHN0YXJ0LCB1bml0KSkge1xuICAgICAgICAgIHJldHVybiBlbmQuc3RhcnRPZih1bml0KS5kaWZmKHN0YXJ0LnN0YXJ0T2YodW5pdCksIHVuaXQpLmdldCh1bml0KTtcbiAgICAgICAgfSBlbHNlIHJldHVybiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCk7XG4gICAgICB9XG4gICAgfTtcblxuICBpZiAob3B0cy51bml0KSB7XG4gICAgcmV0dXJuIGZvcm1hdChkaWZmZXIob3B0cy51bml0KSwgb3B0cy51bml0KTtcbiAgfVxuXG4gIGZvciAoY29uc3QgdW5pdCBvZiBvcHRzLnVuaXRzKSB7XG4gICAgY29uc3QgY291bnQgPSBkaWZmZXIodW5pdCk7XG4gICAgaWYgKE1hdGguYWJzKGNvdW50KSA+PSAxKSB7XG4gICAgICByZXR1cm4gZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvcm1hdChzdGFydCA+IGVuZCA/IC0wIDogMCwgb3B0cy51bml0c1tvcHRzLnVuaXRzLmxlbmd0aCAtIDFdKTtcbn1cblxuZnVuY3Rpb24gbGFzdE9wdHMoYXJnTGlzdCkge1xuICBsZXQgb3B0cyA9IHt9LFxuICAgIGFyZ3M7XG4gIGlmIChhcmdMaXN0Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ0xpc3RbYXJnTGlzdC5sZW5ndGggLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgIG9wdHMgPSBhcmdMaXN0W2FyZ0xpc3QubGVuZ3RoIC0gMV07XG4gICAgYXJncyA9IEFycmF5LmZyb20oYXJnTGlzdCkuc2xpY2UoMCwgYXJnTGlzdC5sZW5ndGggLSAxKTtcbiAgfSBlbHNlIHtcbiAgICBhcmdzID0gQXJyYXkuZnJvbShhcmdMaXN0KTtcbiAgfVxuICByZXR1cm4gW29wdHMsIGFyZ3NdO1xufVxuXG4vKipcbiAqIEEgRGF0ZVRpbWUgaXMgYW4gaW1tdXRhYmxlIGRhdGEgc3RydWN0dXJlIHJlcHJlc2VudGluZyBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgYW5kIGFjY29tcGFueWluZyBtZXRob2RzLiBJdCBjb250YWlucyBjbGFzcyBhbmQgaW5zdGFuY2UgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cbiAqXG4gKiBBIERhdGVUaW1lIGNvbXByaXNlcyBvZjpcbiAqICogQSB0aW1lc3RhbXAuIEVhY2ggRGF0ZVRpbWUgaW5zdGFuY2UgcmVmZXJzIHRvIGEgc3BlY2lmaWMgbWlsbGlzZWNvbmQgb2YgdGhlIFVuaXggZXBvY2guXG4gKiAqIEEgdGltZSB6b25lLiBFYWNoIGluc3RhbmNlIGlzIGNvbnNpZGVyZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBzcGVjaWZpYyB6b25lIChieSBkZWZhdWx0IHRoZSBsb2NhbCBzeXN0ZW0ncyB6b25lKS5cbiAqICogQ29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIHRoYXQgZWZmZWN0IGhvdyBvdXRwdXQgc3RyaW5ncyBhcmUgZm9ybWF0dGVkLCBzdWNoIGFzIGBsb2NhbGVgLCBgbnVtYmVyaW5nU3lzdGVtYCwgYW5kIGBvdXRwdXRDYWxlbmRhcmAuXG4gKlxuICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgZnVuY3Rpb25hbGl0eSBpdCBwcm92aWRlczpcbiAqXG4gKiAqICoqQ3JlYXRpb24qKjogVG8gY3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBpdHMgY29tcG9uZW50cywgdXNlIG9uZSBvZiBpdHMgZmFjdG9yeSBjbGFzcyBtZXRob2RzOiB7QGxpbmsgRGF0ZVRpbWUubG9jYWx9LCB7QGxpbmsgRGF0ZVRpbWUudXRjfSwgYW5kIChtb3N0IGZsZXhpYmx5KSB7QGxpbmsgRGF0ZVRpbWUuZnJvbU9iamVjdH0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIHN0YW5kYXJkIHN0cmluZyBmb3JtYXQsIHVzZSB7QGxpbmsgRGF0ZVRpbWUuZnJvbUlTT30sIHtAbGluayBEYXRlVGltZS5mcm9tSFRUUH0sIGFuZCB7QGxpbmsgRGF0ZVRpbWUuZnJvbVJGQzI4MjJ9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBjdXN0b20gc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBEYXRlVGltZS5mcm9tRm9ybWF0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgbmF0aXZlIEpTIGRhdGUsIHVzZSB7QGxpbmsgRGF0ZVRpbWUuZnJvbUpTRGF0ZX0uXG4gKiAqICoqR3JlZ29yaWFuIGNhbGVuZGFyIGFuZCB0aW1lKio6IFRvIGV4YW1pbmUgdGhlIEdyZWdvcmlhbiBwcm9wZXJ0aWVzIG9mIGEgRGF0ZVRpbWUgaW5kaXZpZHVhbGx5IChpLmUgYXMgb3Bwb3NlZCB0byBjb2xsZWN0aXZlbHkgdGhyb3VnaCB7QGxpbmsgRGF0ZVRpbWUjdG9PYmplY3R9KSwgdXNlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjeWVhcn0sIHtAbGluayBEYXRlVGltZSNtb250aH0sXG4gKiB7QGxpbmsgRGF0ZVRpbWUjZGF5fSwge0BsaW5rIERhdGVUaW1lI2hvdXJ9LCB7QGxpbmsgRGF0ZVRpbWUjbWludXRlfSwge0BsaW5rIERhdGVUaW1lI3NlY29uZH0sIHtAbGluayBEYXRlVGltZSNtaWxsaXNlY29uZH0gYWNjZXNzb3JzLlxuICogKiAqKldlZWsgY2FsZW5kYXIqKjogRm9yIElTTyB3ZWVrIGNhbGVuZGFyIGF0dHJpYnV0ZXMsIHNlZSB0aGUge0BsaW5rIERhdGVUaW1lI3dlZWtZZWFyfSwge0BsaW5rIERhdGVUaW1lI3dlZWtOdW1iZXJ9LCBhbmQge0BsaW5rIERhdGVUaW1lI3dlZWtkYXl9IGFjY2Vzc29ycy5cbiAqICogKipDb25maWd1cmF0aW9uKiogU2VlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjbG9jYWxlfSBhbmQge0BsaW5rIERhdGVUaW1lI251bWJlcmluZ1N5c3RlbX0gYWNjZXNzb3JzLlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKio6IFRvIHRyYW5zZm9ybSB0aGUgRGF0ZVRpbWUgaW50byBvdGhlciBEYXRlVGltZXMsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjc2V0fSwge0BsaW5rIERhdGVUaW1lI3JlY29uZmlndXJlfSwge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9LCB7QGxpbmsgRGF0ZVRpbWUjc2V0TG9jYWxlfSwge0BsaW5rIERhdGVUaW1lLnBsdXN9LCB7QGxpbmsgRGF0ZVRpbWUjbWludXN9LCB7QGxpbmsgRGF0ZVRpbWUjZW5kT2Z9LCB7QGxpbmsgRGF0ZVRpbWUjc3RhcnRPZn0sIHtAbGluayBEYXRlVGltZSN0b1VUQ30sIGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbH0uXG4gKiAqICoqT3V0cHV0Kio6IFRvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgdXNlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjdG9SZWxhdGl2ZX0sIHtAbGluayBEYXRlVGltZSN0b1JlbGF0aXZlQ2FsZW5kYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjdG9KU09OfSwge0BsaW5rIERhdGVUaW1lI3RvSVNPfSwge0BsaW5rIERhdGVUaW1lI3RvSFRUUH0sIHtAbGluayBEYXRlVGltZSN0b09iamVjdH0sIHtAbGluayBEYXRlVGltZSN0b1JGQzI4MjJ9LCB7QGxpbmsgRGF0ZVRpbWUjdG9TdHJpbmd9LCB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9LCB7QGxpbmsgRGF0ZVRpbWUjdG9Gb3JtYXR9LCB7QGxpbmsgRGF0ZVRpbWUjdG9NaWxsaXN9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9KU0RhdGV9LlxuICpcbiAqIFRoZXJlJ3MgcGxlbnR5IG90aGVycyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiwgdGltZSB6b25lcywgYWx0ZXJuYXRpdmUgY2FsZW5kYXJzLCB2YWxpZGl0eSwgYW5kIHNvIG9uLCBzZWUgdGhlIGV4dGVybmFsIGRvY3VtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVUaW1lIHtcbiAgLyoqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uc3Qgem9uZSA9IGNvbmZpZy56b25lIHx8IFNldHRpbmdzLmRlZmF1bHRab25lO1xuXG4gICAgbGV0IGludmFsaWQgPVxuICAgICAgY29uZmlnLmludmFsaWQgfHxcbiAgICAgIChOdW1iZXIuaXNOYU4oY29uZmlnLnRzKSA/IG5ldyBJbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKSA6IG51bGwpIHx8XG4gICAgICAoIXpvbmUuaXNWYWxpZCA/IHVuc3VwcG9ydGVkWm9uZSh6b25lKSA6IG51bGwpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudHMgPSBpc1VuZGVmaW5lZChjb25maWcudHMpID8gU2V0dGluZ3Mubm93KCkgOiBjb25maWcudHM7XG5cbiAgICBsZXQgYyA9IG51bGwsXG4gICAgICBvID0gbnVsbDtcbiAgICBpZiAoIWludmFsaWQpIHtcbiAgICAgIGNvbnN0IHVuY2hhbmdlZCA9IGNvbmZpZy5vbGQgJiYgY29uZmlnLm9sZC50cyA9PT0gdGhpcy50cyAmJiBjb25maWcub2xkLnpvbmUuZXF1YWxzKHpvbmUpO1xuXG4gICAgICBpZiAodW5jaGFuZ2VkKSB7XG4gICAgICAgIFtjLCBvXSA9IFtjb25maWcub2xkLmMsIGNvbmZpZy5vbGQub107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvdCA9IHpvbmUub2Zmc2V0KHRoaXMudHMpO1xuICAgICAgICBjID0gdHNUb09iaih0aGlzLnRzLCBvdCk7XG4gICAgICAgIGludmFsaWQgPSBOdW1iZXIuaXNOYU4oYy55ZWFyKSA/IG5ldyBJbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKSA6IG51bGw7XG4gICAgICAgIGMgPSBpbnZhbGlkID8gbnVsbCA6IGM7XG4gICAgICAgIG8gPSBpbnZhbGlkID8gbnVsbCA6IG90O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3pvbmUgPSB6b25lO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gaW52YWxpZDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLndlZWtEYXRhID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmMgPSBjO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubyA9IG87XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0x1eG9uRGF0ZVRpbWUgPSB0cnVlO1xuICB9XG5cbiAgLy8gQ09OU1RSVUNUXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZvciB0aGUgY3VycmVudCBpbnN0YW50LCBpbiB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgKlxuICAgKiBVc2UgU2V0dGluZ3MgdG8gb3ZlcnJpZGUgdGhlc2UgZGVmYXVsdCB2YWx1ZXMgaWYgbmVlZGVkLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vfj4gbm93IGluIHRoZSBJU08gZm9ybWF0XG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIG5vdygpIHtcbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsb2NhbCBEYXRlVGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGBsb2NhbCgpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoeyB6b25lOiBcIkFtZXJpY2EvTmV3X1lvcmtcIiB9KSAgICAgIC8vfj4gbm93LCBpbiBVUyBlYXN0IGNvYXN0IHRpbWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMCwgd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIHsgem9uZTogXCJ1dGNcIiB9KSAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMCwgaW4gVVRDXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSkgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSkgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBsb2NhbCgpIHtcbiAgICBjb25zdCBbb3B0cywgYXJnc10gPSBsYXN0T3B0cyhhcmd1bWVudHMpLFxuICAgICAgW3llYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF0gPSBhcmdzO1xuICAgIHJldHVybiBxdWlja0RUKHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kIH0sIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGluIFVUQ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGB1dGMoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5vdXRwdXRDYWxlbmRhcl0gLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW1dIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwWiB3aXRoIGEgRnJlbmNoIGxvY2FsZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCkgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUsIHsgbG9jYWxlOiBcImZyXCIgfSkgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVogd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgdXRjKCkge1xuICAgIGNvbnN0IFtvcHRzLCBhcmdzXSA9IGxhc3RPcHRzKGFyZ3VtZW50cyksXG4gICAgICBbeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXSA9IGFyZ3M7XG5cbiAgICBvcHRzLnpvbmUgPSBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2U7XG4gICAgcmV0dXJuIHF1aWNrRFQoeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQgfSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtEYXRlfSBkYXRlIC0gYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21KU0RhdGUoZGF0ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgdHMgPSBpc0RhdGUoZGF0ZSkgPyBkYXRlLnZhbHVlT2YoKSA6IE5hTjtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHRzKSkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXCJpbnZhbGlkIGlucHV0XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHpvbmVUb1VzZSA9IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gICAgaWYgKCF6b25lVG9Vc2UuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmVUb1VzZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgdHM6IHRzLFxuICAgICAgem9uZTogem9uZVRvVXNlLFxuICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggKG1lYW5pbmcgc2luY2UgMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIC0gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDE5NzAgVVRDXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21NaWxsaXMobWlsbGlzZWNvbmRzLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIWlzTnVtYmVyKG1pbGxpc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgICAgYGZyb21NaWxsaXMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXQsIGJ1dCByZWNlaXZlZCBhICR7dHlwZW9mIG1pbGxpc2Vjb25kc30gd2l0aCB2YWx1ZSAke21pbGxpc2Vjb25kc31gXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAobWlsbGlzZWNvbmRzIDwgLU1BWF9EQVRFIHx8IG1pbGxpc2Vjb25kcyA+IE1BWF9EQVRFKSB7XG4gICAgICAvLyB0aGlzIGlzbid0IHBlcmZlY3QgYmVjYXVzZSBiZWNhdXNlIHdlIGNhbiBzdGlsbCBlbmQgdXAgb3V0IG9mIHJhbmdlIGJlY2F1c2Ugb2YgYWRkaXRpb25hbCBzaGlmdGluZywgYnV0IGl0J3MgYSBzdGFydFxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXCJUaW1lc3RhbXAgb3V0IG9mIHJhbmdlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IG1pbGxpc2Vjb25kcyxcbiAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgdGhlIGVwb2NoIChtZWFuaW5nIHNpbmNlIDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgLSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIDE5NzAgVVRDXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21TZWNvbmRzKHNlY29uZHMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghaXNOdW1iZXIoc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21TZWNvbmRzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IHNlY29uZHMgKiAxMDAwLFxuICAgICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcicgYW5kICdob3VyJyB3aXRoIHJlYXNvbmFibGUgZGVmYXVsdHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXIgLSBhIHllYXIsIHN1Y2ggYXMgMTk4N1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoIC0gYSBtb250aCwgMS0xMlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheSAtIGEgZGF5IG9mIHRoZSBtb250aCwgMS0zMSwgZGVwZW5kaW5nIG9uIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm9yZGluYWwgLSBkYXkgb2YgdGhlIHllYXIsIDEtMzY1IG9yIDM2NlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtZZWFyIC0gYW4gSVNPIHdlZWsgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtOdW1iZXIgLSBhbiBJU08gd2VlayBudW1iZXIsIGJldHdlZW4gMSBhbmQgNTIgb3IgNTMsIGRlcGVuZGluZyBvbiB0aGUgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtkYXkgLSBhbiBJU08gd2Vla2RheSwgMS03LCB3aGVyZSAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5ob3VyIC0gaG91ciBvZiB0aGUgZGF5LCAwLTIzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlIC0gbWludXRlIG9mIHRoZSBob3VyLCAwLTU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kIC0gc2Vjb25kIG9mIHRoZSBtaW51dGUsIDAtNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZCAtIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIDAtOTk5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgY3JlYXRpbmcgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gaW50ZXJwcmV0IHRoZSBudW1iZXJzIGluIHRoZSBjb250ZXh0IG9mIGEgcGFydGljdWxhciB6b25lLiBDYW4gdGFrZSBhbnkgdmFsdWUgdGFrZW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHNldFpvbmUoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiwgbW9udGg6IDUsIGRheTogMjV9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiB9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9KSAvL34+IHRvZGF5IGF0IDEwOjI2OjA2XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ3V0YycgfSksXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ2xvY2FsJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICdBbWVyaWNhL05ld19Zb3JrJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgd2Vla1llYXI6IDIwMTYsIHdlZWtOdW1iZXI6IDIsIHdlZWtkYXk6IDMgfSkudG9JU09EYXRlKCkgLy89PiAnMjAxNi0wMS0xMydcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbU9iamVjdChvYmosIG9wdHMgPSB7fSkge1xuICAgIG9iaiA9IG9iaiB8fCB7fTtcbiAgICBjb25zdCB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9wdHMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcbiAgICB9XG5cbiAgICBjb25zdCB0c05vdyA9IFNldHRpbmdzLm5vdygpLFxuICAgICAgb2Zmc2V0UHJvdmlzID0gIWlzVW5kZWZpbmVkKG9wdHMuc3BlY2lmaWNPZmZzZXQpXG4gICAgICAgID8gb3B0cy5zcGVjaWZpY09mZnNldFxuICAgICAgICA6IHpvbmVUb1VzZS5vZmZzZXQodHNOb3cpLFxuICAgICAgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZVVuaXQpLFxuICAgICAgY29udGFpbnNPcmRpbmFsID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCksXG4gICAgICBjb250YWluc0dyZWdvclllYXIgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC55ZWFyKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yTUQgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5tb250aCkgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yID0gY29udGFpbnNHcmVnb3JZZWFyIHx8IGNvbnRhaW5zR3JlZ29yTUQsXG4gICAgICBkZWZpbml0ZVdlZWtEZWYgPSBub3JtYWxpemVkLndlZWtZZWFyIHx8IG5vcm1hbGl6ZWQud2Vla051bWJlcixcbiAgICAgIGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpO1xuXG4gICAgLy8gY2FzZXM6XG4gICAgLy8ganVzdCBhIHdlZWtkYXkgLT4gdGhpcyB3ZWVrJ3MgaW5zdGFuY2Ugb2YgdGhhdCB3ZWVrZGF5LCBubyB3b3JyaWVzXG4gICAgLy8gKGdyZWdvcmlhbiBkYXRhIG9yIG9yZGluYWwpICsgKHdlZWtZZWFyIG9yIHdlZWtOdW1iZXIpIC0+IGVycm9yXG4gICAgLy8gKGdyZWdvcmlhbiBtb250aCBvciBkYXkpICsgb3JkaW5hbCAtPiBlcnJvclxuICAgIC8vIG90aGVyd2lzZSBqdXN0IHVzZSB3ZWVrcyBvciBvcmRpbmFscyBvciBncmVnb3JpYW4sIGRlcGVuZGluZyBvbiB3aGF0J3Mgc3BlY2lmaWVkXG5cbiAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IG9yZGluYWwgZGF0ZXMgd2l0aCBtb250aC9kYXlcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlV2Vla0RhdGEgPSBkZWZpbml0ZVdlZWtEZWYgfHwgKG5vcm1hbGl6ZWQud2Vla2RheSAmJiAhY29udGFpbnNHcmVnb3IpO1xuXG4gICAgLy8gY29uZmlndXJlIG91cnNlbHZlcyB0byBkZWFsIHdpdGggZ3JlZ29yaWFuIGRhdGVzIG9yIHdlZWsgc3R1ZmZcbiAgICBsZXQgdW5pdHMsXG4gICAgICBkZWZhdWx0VmFsdWVzLFxuICAgICAgb2JqTm93ID0gdHNUb09iaih0c05vdywgb2Zmc2V0UHJvdmlzKTtcbiAgICBpZiAodXNlV2Vla0RhdGEpIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZFdlZWtVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0V2Vla1VuaXRWYWx1ZXM7XG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub1dlZWsob2JqTm93KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkT3JkaW5hbFVuaXRzO1xuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcztcbiAgICAgIG9iak5vdyA9IGdyZWdvcmlhblRvT3JkaW5hbChvYmpOb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0VW5pdFZhbHVlcztcbiAgICB9XG5cbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIG1pc3Npbmcgc3R1ZmZcbiAgICBsZXQgZm91bmRGaXJzdCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgdSBvZiB1bml0cykge1xuICAgICAgY29uc3QgdiA9IG5vcm1hbGl6ZWRbdV07XG4gICAgICBpZiAoIWlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIGZvdW5kRmlyc3QgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmb3VuZEZpcnN0KSB7XG4gICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBkZWZhdWx0VmFsdWVzW3VdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IG9iak5vd1t1XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhlIHZhbHVlcyB3ZSBoYXZlIGFyZSBpbiByYW5nZVxuICAgIGNvbnN0IGhpZ2hlck9yZGVySW52YWxpZCA9IHVzZVdlZWtEYXRhXG4gICAgICAgID8gaGFzSW52YWxpZFdlZWtEYXRhKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogY29udGFpbnNPcmRpbmFsXG4gICAgICAgID8gaGFzSW52YWxpZE9yZGluYWxEYXRhKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEobm9ybWFsaXplZCksXG4gICAgICBpbnZhbGlkID0gaGlnaGVyT3JkZXJJbnZhbGlkIHx8IGhhc0ludmFsaWRUaW1lRGF0YShub3JtYWxpemVkKTtcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgICB9XG5cbiAgICAvLyBjb21wdXRlIHRoZSBhY3R1YWwgdGltZVxuICAgIGNvbnN0IGdyZWdvcmlhbiA9IHVzZVdlZWtEYXRhXG4gICAgICAgID8gd2Vla1RvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogY29udGFpbnNPcmRpbmFsXG4gICAgICAgID8gb3JkaW5hbFRvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogbm9ybWFsaXplZCxcbiAgICAgIFt0c0ZpbmFsLCBvZmZzZXRGaW5hbF0gPSBvYmpUb1RTKGdyZWdvcmlhbiwgb2Zmc2V0UHJvdmlzLCB6b25lVG9Vc2UpLFxuICAgICAgaW5zdCA9IG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiB0c0ZpbmFsLFxuICAgICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICAgIG86IG9mZnNldEZpbmFsLFxuICAgICAgICBsb2MsXG4gICAgICB9KTtcblxuICAgIC8vIGdyZWdvcmlhbiBkYXRhICsgd2Vla2RheSBzZXJ2ZXMgb25seSB0byB2YWxpZGF0ZVxuICAgIGlmIChub3JtYWxpemVkLndlZWtkYXkgJiYgY29udGFpbnNHcmVnb3IgJiYgb2JqLndlZWtkYXkgIT09IGluc3Qud2Vla2RheSkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXG4gICAgICAgIFwibWlzbWF0Y2hlZCB3ZWVrZGF5XCIsXG4gICAgICAgIGB5b3UgY2FuJ3Qgc3BlY2lmeSBib3RoIGEgd2Vla2RheSBvZiAke25vcm1hbGl6ZWQud2Vla2RheX0gYW5kIGEgZGF0ZSBvZiAke2luc3QudG9JU08oKX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIElTTyBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyXSAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbV0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnLCB7c2V0Wm9uZTogdHJ1ZX0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJywge3pvbmU6ICd1dGMnfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi1XMDUtNCcpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VJU09EYXRlKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiSVNPIDg2MDFcIiwgdGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBSRkMgMjgyMiBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgUkZDIDI4MjIgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgdGhlIG9mZnNldCBpcyBhbHdheXMgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjM6MTIgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJ0ZyaSwgMjUgTm92IDIwMTYgMTM6MjM6MTIgKzA2MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjMgWicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21SRkMyODIyKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlUkZDMjgyMkRhdGUodGV4dCk7XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJSRkMgMjgyMlwiLCB0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIEhUVFAgaGVhZGVyIGRhdGVcbiAgICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMzLmh0bWwjc2VjMy4zLjFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSFRUUCBoZWFkZXIgZGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIEhUVFAgZGF0ZXMgYXJlIGFsd2F5cyBpbiBVVEMsIHRoaXMgaGFzIG5vIGVmZmVjdCBvbiB0aGUgaW50ZXJwcmV0YXRpb24gb2Ygc3RyaW5nLCBtZXJlbHkgdGhlIHpvbmUgdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpcyBleHByZXNzZWQgaW4uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIHRoZSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZy4gRm9yIEhUVFAgZGF0ZXMsIHRoaXMgaXMgYWx3YXlzIFVUQywgc28gdGhpcyBvcHRpb24gaXMgZXF1aXZhbGVudCB0byBzZXR0aW5nIHRoZSBgem9uZWAgb3B0aW9uIHRvICd1dGMnLCBidXQgdGhpcyBvcHRpb24gaXMgaW5jbHVkZWQgZm9yIGNvbnNpc3RlbmN5IHdpdGggc2ltaWxhciBtZXRob2RzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuLCAwNiBOb3YgMTk5NCAwODo0OTozNyBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuZGF5LCAwNi1Ob3YtOTQgMDg6NDk6MzcgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biBOb3YgIDYgMDg6NDk6MzcgMTk5NCcpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21IVFRQKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlSFRUUERhdGUodGV4dCk7XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJIVFRQXCIsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gaW5wdXQgc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuIEZvciBhIHRhYmxlIG9mIHRva2VucyBhbmQgdGhlaXIgaW50ZXJwcmV0YXRpb25zLCBzZWUgW2hlcmVdKGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi8jL3BhcnNpbmc/aWQ9dGFibGUtb2YtdG9rZW5zKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHRoZSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gYmUgaW4gKHNlZSB0aGUgbGluayBiZWxvdyBmb3IgdGhlIGZvcm1hdHMpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzID0ge30pIHtcbiAgICBpZiAoaXNVbmRlZmluZWQodGV4dCkgfHwgaXNVbmRlZmluZWQoZm10KSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiZnJvbUZvcm1hdCByZXF1aXJlcyBhbiBpbnB1dCBzdHJpbmcgYW5kIGEgZm9ybWF0XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCB9ID0gb3B0cyxcbiAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGRlZmF1bHRUb0VOOiB0cnVlLFxuICAgICAgfSksXG4gICAgICBbdmFscywgcGFyc2VkWm9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRdID0gcGFyc2VGcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgYGZvcm1hdCAke2ZtdH1gLCB0ZXh0LCBzcGVjaWZpY09mZnNldCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0IGluc3RlYWRcbiAgICovXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHRleHQsIGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgU1FMIGRhdGUsIHRpbWUsIG9yIGRhdGV0aW1lXG4gICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIHRoaXMgem9uZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSBhIGxvY2FsZSBzdHJpbmcgdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIHRvIHRoaXMgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNScpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MicpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyKzA2OjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIgQW1lcmljYS9Mb3NfQW5nZWxlcycpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnLCB7IHNldFpvbmU6IHRydWUgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInLCB7IHpvbmU6ICdBbWVyaWNhL0xvc19BbmdlbGVzJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcwOToxMjozNC4zNDInKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tU1FMKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlU1FMKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiU1FMXCIsIHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIERhdGVUaW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRGF0ZVRpbWUgaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZERhdGVUaW1lRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoeyBpbnZhbGlkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZVRpbWUuIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0RhdGVUaW1lKG8pIHtcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uRGF0ZVRpbWUpIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2R1Y2UgdGhlIGZvcm1hdCBzdHJpbmcgZm9yIGEgc2V0IG9mIG9wdGlvbnNcbiAgICogQHBhcmFtIGZvcm1hdE9wdHNcbiAgICogQHBhcmFtIGxvY2FsZU9wdHNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBwYXJzZUZvcm1hdEZvck9wdHMoZm9ybWF0T3B0cywgbG9jYWxlT3B0cyA9IHt9KSB7XG4gICAgY29uc3QgdG9rZW5MaXN0ID0gZm9ybWF0T3B0c1RvVG9rZW5zKGZvcm1hdE9wdHMsIExvY2FsZS5mcm9tT2JqZWN0KGxvY2FsZU9wdHMpKTtcbiAgICByZXR1cm4gIXRva2VuTGlzdCA/IG51bGwgOiB0b2tlbkxpc3QubWFwKCh0KSA9PiAodCA/IHQudmFsIDogbnVsbCkpLmpvaW4oXCJcIik7XG4gIH1cblxuICAvKipcbiAgICogUHJvZHVjZSB0aGUgdGhlIGZ1bGx5IGV4cGFuZGVkIGZvcm1hdCB0b2tlbiBmb3IgdGhlIGxvY2FsZVxuICAgKiBEb2VzIE5PVCBxdW90ZSBjaGFyYWN0ZXJzLCBzbyBxdW90ZWQgdG9rZW5zIHdpbGwgbm90IHJvdW5kIHRyaXAgY29ycmVjdGx5XG4gICAqIEBwYXJhbSBmbXRcbiAgICogQHBhcmFtIGxvY2FsZU9wdHNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBleHBhbmRGb3JtYXQoZm10LCBsb2NhbGVPcHRzID0ge30pIHtcbiAgICBjb25zdCBleHBhbmRlZCA9IGV4cGFuZE1hY3JvVG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLCBMb2NhbGUuZnJvbU9iamVjdChsb2NhbGVPcHRzKSk7XG4gICAgcmV0dXJuIGV4cGFuZGVkLm1hcCgodCkgPT4gdC52YWwpLmpvaW4oXCJcIik7XG4gIH1cblxuICAvLyBJTkZPXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ21vbnRoJyk7IC8vPT4gN1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ2RheScpOyAvLz0+IDRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1t1bml0XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIHZhbGlkLiBJbnZhbGlkIERhdGVUaW1lcyBvY2N1ciB3aGVuOlxuICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBmcm9tIGludmFsaWQgY2FsZW5kYXIgaW5mb3JtYXRpb24sIHN1Y2ggYXMgdGhlIDEzdGggbW9udGggb3IgRmVicnVhcnkgMzBcbiAgICogKiBUaGUgRGF0ZVRpbWUgd2FzIGNyZWF0ZWQgYnkgYW4gb3BlcmF0aW9uIG9uIGFub3RoZXIgaW52YWxpZCBkYXRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRSZWFzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRGF0ZVRpbWUgYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIERhdGVUaW1lIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZEV4cGxhbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbG9jYWxlIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2VuLUdCJy4gVGhlIGxvY2FsZSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLmxvY2FsZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBudW1iZXJpbmcgc3lzdGVtIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2JlbmcnLiBUaGUgbnVtYmVyaW5nIHN5c3RlbSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBudW1iZXJpbmdTeXN0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvdXRwdXQgY2FsZW5kYXIgb2YgYSBEYXRlVGltZSwgc3VjaCAnaXNsYW1pYycuIFRoZSBvdXRwdXQgY2FsZW5kYXIgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgb3V0cHV0Q2FsZW5kYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm91dHB1dENhbGVuZGFyIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRpbWUgem9uZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBEYXRlVGltZS5cbiAgICogQHR5cGUge1pvbmV9XG4gICAqL1xuICBnZXQgem9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIHRpbWUgem9uZS5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB6b25lTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLm5hbWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgeWVhclxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkueWVhciAvLz0+IDIwMTdcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB5ZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMueWVhciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHF1YXJ0ZXJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnF1YXJ0ZXIgLy89PiAyXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgcXVhcnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gTWF0aC5jZWlsKHRoaXMuYy5tb250aCAvIDMpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbW9udGggKDEtMTIpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkubW9udGggLy89PiA1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbW9udGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5tb250aCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggKDEtMzBpc2gpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuZGF5IC8vPT4gMjVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBkYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5kYXkgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBob3VyIG9mIHRoZSBkYXkgKDAtMjMpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSkuaG91ciAvLz0+IDlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBob3VyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuaG91ciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbnV0ZSBvZiB0aGUgaG91ciAoMC01OSkuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCkubWludXRlIC8vPT4gMzBcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtaW51dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taW51dGUgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSAoMC01OSkuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCwgNTIpLnNlY29uZCAvLz0+IDUyXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgc2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuc2Vjb25kIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCAoMC05OTkpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzAsIDUyLCA2NTQpLm1pbGxpc2Vjb25kIC8vPT4gNjU0XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbWlsbGlzZWNvbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taWxsaXNlY29uZCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlZWsgeWVhclxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTIsIDMxKS53ZWVrWWVhciAvLz0+IDIwMTVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrWWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrWWVhciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlZWsgbnVtYmVyIG9mIHRoZSB3ZWVrIHllYXIgKDEtNTJpc2gpLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLndlZWtOdW1iZXIgLy89PiAyMVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla051bWJlciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgd2Vlay5cbiAgICogMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5XG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMSwgMzEpLndlZWtkYXkgLy89PiA0XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla2RheSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrZGF5IDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3JkaW5hbCAobWVhbmluZyB0aGUgZGF5IG9mIHRoZSB5ZWFyKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkub3JkaW5hbCAvLz0+IDE0NVxuICAgKiBAdHlwZSB7bnVtYmVyfERhdGVUaW1lfVxuICAgKi9cbiAgZ2V0IG9yZGluYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IGdyZWdvcmlhblRvT3JkaW5hbCh0aGlzLmMpLm9yZGluYWwgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCBtb250aCBuYW1lLCBzdWNoIGFzICdPY3QnLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aFNob3J0IC8vPT4gT2N0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbW9udGhTaG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoXCJzaG9ydFwiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgbW9udGggbmFtZSwgc3VjaCBhcyAnT2N0b2JlcicuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLm1vbnRoTG9uZyAvLz0+IE9jdG9iZXJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBtb250aExvbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ubW9udGhzKFwibG9uZ1wiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IHdlZWtkYXksIHN1Y2ggYXMgJ01vbicuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlTaG9ydCAvLz0+IE1vblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHdlZWtkYXlTaG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cyhcInNob3J0XCIsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLndlZWtkYXkgLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIHdlZWtkYXksIHN1Y2ggYXMgJ01vbmRheScuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlMb25nIC8vPT4gTW9uZGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgd2Vla2RheUxvbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJsb25nXCIsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLndlZWtkYXkgLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBVVEMgb2Zmc2V0IG9mIHRoaXMgRGF0ZVRpbWUgaW4gbWludXRlc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5vZmZzZXQgLy89PiAtMjQwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLm9mZnNldCAvLz0+IDBcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/ICt0aGlzLm8gOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzaG9ydCBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSBcIkVTVFwiIG9yIFwiRURUXCIuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG9mZnNldE5hbWVTaG9ydCgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy56b25lLm9mZnNldE5hbWUodGhpcy50cywge1xuICAgICAgICBmb3JtYXQ6IFwic2hvcnRcIixcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsb25nIGh1bWFuIG5hbWUgZm9yIHRoZSB6b25lJ3MgY3VycmVudCBvZmZzZXQsIGZvciBleGFtcGxlIFwiRWFzdGVybiBTdGFuZGFyZCBUaW1lXCIgb3IgXCJFYXN0ZXJuIERheWxpZ2h0IFRpbWVcIi5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgb2Zmc2V0TmFtZUxvbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgZm9ybWF0OiBcImxvbmdcIixcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhpcyB6b25lJ3Mgb2Zmc2V0IGV2ZXIgY2hhbmdlcywgYXMgaW4gYSBEU1QuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzT2Zmc2V0Rml4ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuem9uZS5pc1VuaXZlcnNhbCA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIGluIGEgRFNULlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc0luRFNUKCkge1xuICAgIGlmICh0aGlzLmlzT2Zmc2V0Rml4ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5vZmZzZXQgPiB0aGlzLnNldCh7IG1vbnRoOiAxLCBkYXk6IDEgfSkub2Zmc2V0IHx8XG4gICAgICAgIHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoeyBtb250aDogNSB9KS5vZmZzZXRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIERhdGVUaW1lIGlzIGluIGEgbGVhcCB5ZWFyLCBmYWxzZSBvdGhlcndpc2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuaXNJbkxlYXBZZWFyIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5pc0luTGVhcFllYXIgLy89PiBmYWxzZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc0luTGVhcFllYXIoKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgbW9udGhcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMikuZGF5c0luTW9udGggLy89PiAyOVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAzKS5kYXlzSW5Nb250aCAvLz0+IDMxXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5c0luTW9udGgoKSB7XG4gICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuZGF5c0luWWVhciAvLz0+IDM2NlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5kYXlzSW5ZZWFyIC8vPT4gMzY1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5c0luWWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZGF5c0luWWVhcih0aGlzLnllYXIpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB3ZWVrcyBpbiB0aGlzIERhdGVUaW1lJ3MgeWVhclxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAwNCkud2Vla3NJbldlZWtZZWFyIC8vPT4gNTNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykud2Vla3NJbldlZWtZZWFyIC8vPT4gNTJcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrc0luV2Vla1llYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHdlZWtzSW5XZWVrWWVhcih0aGlzLndlZWtZZWFyKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZXNvbHZlZCBJbnRsIG9wdGlvbnMgZm9yIHRoaXMgRGF0ZVRpbWUuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGluIHVuZGVyc3RhbmRpbmcgdGhlIGJlaGF2aW9yIG9mIGZvcm1hdHRpbmcgbWV0aG9kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIHRoZSBzYW1lIG9wdGlvbnMgYXMgdG9Mb2NhbGVTdHJpbmdcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgcmVzb2x2ZWRMb2NhbGVPcHRpb25zKG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyIH0gPSBGb3JtYXR0ZXIuY3JlYXRlKFxuICAgICAgdGhpcy5sb2MuY2xvbmUob3B0cyksXG4gICAgICBvcHRzXG4gICAgKS5yZXNvbHZlZE9wdGlvbnModGhpcyk7XG4gICAgcmV0dXJuIHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyOiBjYWxlbmRhciB9O1xuICB9XG5cbiAgLy8gVFJBTlNGT1JNXG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byBVVEMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogRXF1aXZhbGVudCB0byB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0oJ3V0YycpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0PTBdIC0gb3B0aW9uYWxseSwgYW4gb2Zmc2V0IGZyb20gVVRDIGluIG1pbnV0ZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XSAtIG9wdGlvbnMgdG8gcGFzcyB0byBgc2V0Wm9uZSgpYFxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHRvVVRDKG9mZnNldCA9IDAsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnNldFpvbmUoRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKG9mZnNldCksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byB0aGUgaG9zdCdzIGxvY2FsIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogRXF1aXZhbGVudCB0byBgc2V0Wm9uZSgnbG9jYWwnKWBcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICB0b0xvY2FsKCkge1xuICAgIHJldHVybiB0aGlzLnNldFpvbmUoU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byBzcGVjaWZpZWQgem9uZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgc2V0dGVyIGtlZXBzIHRoZSB1bmRlcmx5aW5nIHRpbWUgdGhlIHNhbWUgKGFzIGluLCB0aGUgc2FtZSB0aW1lc3RhbXApLCBidXQgdGhlIG5ldyBpbnN0YW5jZSB3aWxsIHJlcG9ydCBkaWZmZXJlbnQgbG9jYWwgdGltZXMgYW5kIGNvbnNpZGVyIERTVHMgd2hlbiBtYWtpbmcgY29tcHV0YXRpb25zLCBhcyB3aXRoIHtAbGluayBEYXRlVGltZSNwbHVzfS4gWW91IG1heSB3aXNoIHRvIHVzZSB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbH0gYW5kIHtAbGluayBEYXRlVGltZSN0b1VUQ30gd2hpY2ggcHJvdmlkZSBzaW1wbGUgY29udmVuaWVuY2Ugd3JhcHBlcnMgZm9yIGNvbW1vbmx5IHVzZWQgem9uZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gYSB6b25lIGlkZW50aWZpZXIuIEFzIGEgc3RyaW5nLCB0aGF0IGNhbiBiZSBhbnkgSUFOQSB6b25lIHN1cHBvcnRlZCBieSB0aGUgaG9zdCBlbnZpcm9ubWVudCwgb3IgYSBmaXhlZC1vZmZzZXQgbmFtZSBvZiB0aGUgZm9ybSAnVVRDKzMnLCBvciB0aGUgc3RyaW5ncyAnbG9jYWwnIG9yICd1dGMnLiBZb3UgbWF5IGFsc28gc3VwcGx5IGFuIGluc3RhbmNlIG9mIGEge0BsaW5rIERhdGVUaW1lI1pvbmV9IGNsYXNzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5rZWVwTG9jYWxUaW1lPWZhbHNlXSAtIElmIHRydWUsIGFkanVzdCB0aGUgdW5kZXJseWluZyB0aW1lIHNvIHRoYXQgdGhlIGxvY2FsIHRpbWUgc3RheXMgdGhlIHNhbWUsIGJ1dCBpbiB0aGUgdGFyZ2V0IHpvbmUuIFlvdSBzaG91bGQgcmFyZWx5IG5lZWQgdGhpcy5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzZXRab25lKHpvbmUsIHsga2VlcExvY2FsVGltZSA9IGZhbHNlLCBrZWVwQ2FsZW5kYXJUaW1lID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgem9uZSA9IG5vcm1hbGl6ZVpvbmUoem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICh6b25lLmVxdWFscyh0aGlzLnpvbmUpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2UgaWYgKCF6b25lLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUUyA9IHRoaXMudHM7XG4gICAgICBpZiAoa2VlcExvY2FsVGltZSB8fCBrZWVwQ2FsZW5kYXJUaW1lKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldEd1ZXNzID0gem9uZS5vZmZzZXQodGhpcy50cyk7XG4gICAgICAgIGNvbnN0IGFzT2JqID0gdGhpcy50b09iamVjdCgpO1xuICAgICAgICBbbmV3VFNdID0gb2JqVG9UUyhhc09iaiwgb2Zmc2V0R3Vlc3MsIHpvbmUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdHM6IG5ld1RTLCB6b25lIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3Igb3V0cHV0Q2FsZW5kYXIuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSB0aGUgcHJvcGVydGllcyB0byBzZXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgcmVjb25maWd1cmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIgfSA9IHt9KSB7XG4gICAgY29uc3QgbG9jID0gdGhpcy5sb2MuY2xvbmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIgfSk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgbG9jIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBKdXN0IGEgY29udmVuaWVudCBhbGlhcyBmb3IgcmVjb25maWd1cmUoeyBsb2NhbGUgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnNldExvY2FsZSgnZW4tR0InKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHNldExvY2FsZShsb2NhbGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvbmZpZ3VyZSh7IGxvY2FsZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIFlvdSBjYW4gb25seSBzZXQgdW5pdHMgd2l0aCB0aGlzIG1ldGhvZDsgZm9yIFwic2V0dGluZ1wiIG1ldGFkYXRhLCBzZWUge0BsaW5rIERhdGVUaW1lI3JlY29uZmlndXJlfSBhbmQge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9LlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gYSBtYXBwaW5nIG9mIHVuaXRzIHRvIG51bWJlcnNcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgeWVhcjogMjAxNyB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyBob3VyOiA4LCBtaW51dGU6IDMwIH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHdlZWtkYXk6IDUgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgeWVhcjogMjAwNSwgb3JkaW5hbDogMjM0IH0pXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3QodmFsdWVzLCBub3JtYWxpemVVbml0KSxcbiAgICAgIHNldHRpbmdXZWVrU3R1ZmYgPVxuICAgICAgICAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrWWVhcikgfHxcbiAgICAgICAgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla051bWJlcikgfHxcbiAgICAgICAgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla2RheSksXG4gICAgICBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpLFxuICAgICAgY29udGFpbnNHcmVnb3JNRCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm1vbnRoKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpLFxuICAgICAgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRCxcbiAgICAgIGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyO1xuXG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxuICAgICAgICBcIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHNcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbnNHcmVnb3JNRCAmJiBjb250YWluc09yZGluYWwpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCBvcmRpbmFsIGRhdGVzIHdpdGggbW9udGgvZGF5XCIpO1xuICAgIH1cblxuICAgIGxldCBtaXhlZDtcbiAgICBpZiAoc2V0dGluZ1dlZWtTdHVmZikge1xuICAgICAgbWl4ZWQgPSB3ZWVrVG9HcmVnb3JpYW4oeyAuLi5ncmVnb3JpYW5Ub1dlZWsodGhpcy5jKSwgLi4ubm9ybWFsaXplZCB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpKSB7XG4gICAgICBtaXhlZCA9IG9yZGluYWxUb0dyZWdvcmlhbih7IC4uLmdyZWdvcmlhblRvT3JkaW5hbCh0aGlzLmMpLCAuLi5ub3JtYWxpemVkIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaXhlZCA9IHsgLi4udGhpcy50b09iamVjdCgpLCAuLi5ub3JtYWxpemVkIH07XG5cbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBzZXQgdGhlIGRheSBidXQgd2UgZW5kZWQgdXAgb24gYW4gb3ZlcmZsb3cgZGF0ZSxcbiAgICAgIC8vIHVzZSB0aGUgbGFzdCBkYXkgb2YgdGhlIHJpZ2h0IG1vbnRoXG4gICAgICBpZiAoaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpKSB7XG4gICAgICAgIG1peGVkLmRheSA9IE1hdGgubWluKGRheXNJbk1vbnRoKG1peGVkLnllYXIsIG1peGVkLm1vbnRoKSwgbWl4ZWQuZGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBbdHMsIG9dID0gb2JqVG9UUyhtaXhlZCwgdGhpcy5vLCB0aGlzLnpvbmUpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHRzLCBvIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lXG4gICAqXG4gICAqIEFkZGluZyBob3VycywgbWludXRlcywgc2Vjb25kcywgb3IgbWlsbGlzZWNvbmRzIGluY3JlYXNlcyB0aGUgdGltZXN0YW1wIGJ5IHRoZSByaWdodCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLiBBZGRpbmcgZGF5cywgbW9udGhzLCBvciB5ZWFycyBzaGlmdHMgdGhlIGNhbGVuZGFyLCBhY2NvdW50aW5nIGZvciBEU1RzIGFuZCBsZWFwIHllYXJzIGFsb25nIHRoZSB3YXkuIFRodXMsIGBkdC5wbHVzKHsgaG91cnM6IDI0IH0pYCBtYXkgcmVzdWx0IGluIGEgZGlmZmVyZW50IHRpbWUgdGhhbiBgZHQucGx1cyh7IGRheXM6IDEgfSlgIGlmIHRoZXJlJ3MgYSBEU1Qgc2hpZnQgaW4gYmV0d2Vlbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKDEyMykgLy9+PiBpbiAxMjMgbWlsbGlzZWNvbmRzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBtaW51dGVzOiAxNSB9KSAvL34+IGluIDE1IG1pbnV0ZXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkgLy9+PiB0aGlzIHRpbWUgdG9tb3Jyb3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IC0xIH0pIC8vfj4gdGhpcyB0aW1lIHllc3RlcmRheVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pIC8vfj4gaW4gMyBociwgMTMgbWluXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCBhZGp1c3RUaW1lKHRoaXMsIGR1cikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnRyYWN0IGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICogU2VlIHtAbGluayBEYXRlVGltZSNwbHVzfVxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbikubmVnYXRlKCk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGlzIERhdGVUaW1lIHRvIHRoZSBiZWdpbm5pbmcgb2YgYSB1bml0IG9mIHRpbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGhlIHVuaXQgdG8gZ28gdG8gdGhlIGJlZ2lubmluZyBvZi4gQ2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZignbW9udGgnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZigneWVhcicpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd3ZWVrJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDMtMDMnLCB3ZWVrcyBhbHdheXMgc3RhcnQgb24gTW9uZGF5c1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignZGF5JykudG9JU09UaW1lKCk7IC8vPT4gJzAwOjAwLjAwMC0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2hvdXInKS50b0lTT1RpbWUoKTsgLy89PiAnMDU6MDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXJ0T2YodW5pdCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBvID0ge30sXG4gICAgICBub3JtYWxpemVkVW5pdCA9IER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodW5pdCk7XG4gICAgc3dpdGNoIChub3JtYWxpemVkVW5pdCkge1xuICAgICAgY2FzZSBcInllYXJzXCI6XG4gICAgICAgIG8ubW9udGggPSAxO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcInF1YXJ0ZXJzXCI6XG4gICAgICBjYXNlIFwibW9udGhzXCI6XG4gICAgICAgIG8uZGF5ID0gMTtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJ3ZWVrc1wiOlxuICAgICAgY2FzZSBcImRheXNcIjpcbiAgICAgICAgby5ob3VyID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJob3Vyc1wiOlxuICAgICAgICBvLm1pbnV0ZSA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwibWludXRlc1wiOlxuICAgICAgICBvLnNlY29uZCA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwic2Vjb25kc1wiOlxuICAgICAgICBvLm1pbGxpc2Vjb25kID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWlsbGlzZWNvbmRzXCI6XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gbm8gZGVmYXVsdCwgaW52YWxpZCB1bml0cyB0aHJvdyBpbiBub3JtYWxpemVVbml0KClcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwid2Vla3NcIikge1xuICAgICAgby53ZWVrZGF5ID0gMTtcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwicXVhcnRlcnNcIikge1xuICAgICAgY29uc3QgcSA9IE1hdGguY2VpbCh0aGlzLm1vbnRoIC8gMyk7XG4gICAgICBvLm1vbnRoID0gKHEgLSAxKSAqIDMgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldChvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGVuZCAobWVhbmluZyB0aGUgbGFzdCBtaWxsaXNlY29uZCkgb2YgYSB1bml0IG9mIHRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgZW5kIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZignbW9udGgnKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3llYXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTEyLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3dlZWsnKS50b0lTTygpOyAvLyA9PiAnMjAxNC0wMy0wOVQyMzo1OTo1OS45OTktMDU6MDAnLCB3ZWVrcyBzdGFydCBvbiBNb25kYXlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignZGF5JykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignaG91cicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMDU6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIGVuZE9mKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IHRoaXMucGx1cyh7IFt1bml0XTogMSB9KVxuICAgICAgICAgIC5zdGFydE9mKHVuaXQpXG4gICAgICAgICAgLm1pbnVzKDEpXG4gICAgICA6IHRoaXM7XG4gIH1cblxuICAvLyBPVVRQVVRcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLlxuICAgKiAqKllvdSBtYXkgbm90IHdhbnQgdGhpcy4qKiBTZWUge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3IgYSBtb3JlIGZsZXhpYmxlIGZvcm1hdHRpbmcgdG9vbC4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uLyMvZm9ybWF0dGluZz9pZD10YWJsZS1vZi10b2tlbnMpLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgQXByIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoJ2ZyJykudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJykgLy89PiAnMjAxNyBhdnIuIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnLCB7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoXCJISCAnaG91cnMgYW5kJyBtbSAnbWludXRlcydcIikgLy89PiAnMjAgaG91cnMgYW5kIDU1IG1pbnV0ZXMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvRm9ybWF0KGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLnJlZGVmYXVsdFRvRU4ob3B0cykpLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyh0aGlzLCBmbXQpXG4gICAgICA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgZGF0ZS4gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHRoZSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGFuZCBhbnkgcHJlc2V0cyBkZWZpbmVkIGJ5IEx1eG9uLCBzdWNoIGFzIGBEYXRlVGltZS5EQVRFX0ZVTExgIG9yIGBEYXRlVGltZS5USU1FX1NJTVBMRWAuXG4gICAqIFRoZSBleGFjdCBiZWhhdmlvciBvZiB0aGlzIG1ldGhvZCBpcyBicm93c2VyLXNwZWNpZmljLCBidXQgaW4gZ2VuZXJhbCBpdCB3aWxsIHJldHVybiBhbiBhcHByb3ByaWF0ZSByZXByZXNlbnRhdGlvblxuICAgKiBvZiB0aGUgRGF0ZVRpbWUgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIGZvcm1hdE9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMgYW5kIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gNC8yMC8yMDE3XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZSgnZW4tZ2InKS50b0xvY2FsZVN0cmluZygpOyAvLz0+ICcyMC8wNC8yMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwpOyAvLz0+ICdBcHJpbCAyMCwgMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMLCB7IGxvY2FsZTogJ2ZyJyB9KTsgLy89PiAnMjggYW/Du3QgMjAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuVElNRV9TSU1QTEUpOyAvLz0+ICcxMTozMiBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURVRJTUVfU0hPUlQpOyAvLz0+ICc0LzIwLzIwMTcsIDExOjMyIEFNJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdsb25nJywgbW9udGg6ICdsb25nJywgZGF5OiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodXJzZGF5LCBBcHJpbCAyMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnc2hvcnQnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodSwgQXByIDIwLCAxMToyNyBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnLCBob3VyQ3ljbGU6ICdoMjMnIH0pOyAvLz0+ICcxMTozMidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9Mb2NhbGVTdHJpbmcoZm9ybWF0T3B0cyA9IEZvcm1hdHMuREFURV9TSE9SVCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBmb3JtYXRPcHRzKS5mb3JtYXREYXRlVGltZSh0aGlzKVxuICAgICAgOiBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZm9ybWF0IFwicGFydHNcIiwgbWVhbmluZyBpbmRpdmlkdWFsIHRva2VucyBhbG9uZyB3aXRoIG1ldGFkYXRhLiBUaGlzIGlzIGFsbG93cyBjYWxsZXJzIHRvIHBvc3QtcHJvY2VzcyBpbmRpdmlkdWFsIHNlY3Rpb25zIG9mIHRoZSBmb3JtYXR0ZWQgb3V0cHV0LlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdC9mb3JtYXRUb1BhcnRzXG4gICAqIEBwYXJhbSBvcHRzIHtPYmplY3R9IC0gSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zLCBzYW1lIGFzIGB0b0xvY2FsZVN0cmluZ2AuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlUGFydHMoKTsgLy89PiBbXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnZGF5JywgdmFsdWU6ICcyNScgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ21vbnRoJywgdmFsdWU6ICcwNScgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ3llYXInLCB2YWx1ZTogJzE5ODInIH1cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gXVxuICAgKi9cbiAgdG9Mb2NhbGVQYXJ0cyhvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLmZvcm1hdERhdGVUaW1lUGFydHModGhpcylcbiAgICAgIDogW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZXh0ZW5kZWRab25lPWZhbHNlXSAtIGFkZCB0aGUgdGltZSB6b25lIGZvcm1hdCBleHRlbnNpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgzLCA1LCAyNSkudG9JU08oKSAvLz0+ICcxOTgyLTA1LTI1VDAwOjAwOjAwLjAwMFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKCkgLy89PiAnMjAxNy0wNC0yMlQyMDo0NzowNS4zMzUtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMjAxNy0wNC0yMlQyMDo0NzowNS4zMzUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzIwMTcwNDIyVDIwNDcwNS4zMzUtMDQwMCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU08oe1xuICAgIGZvcm1hdCA9IFwiZXh0ZW5kZWRcIixcbiAgICBzdXBwcmVzc1NlY29uZHMgPSBmYWxzZSxcbiAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IGZhbHNlLFxuICAgIGluY2x1ZGVPZmZzZXQgPSB0cnVlLFxuICAgIGV4dGVuZGVkWm9uZSA9IGZhbHNlLFxuICB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ID0gZm9ybWF0ID09PSBcImV4dGVuZGVkXCI7XG5cbiAgICBsZXQgYyA9IHRvSVNPRGF0ZSh0aGlzLCBleHQpO1xuICAgIGMgKz0gXCJUXCI7XG4gICAgYyArPSB0b0lTT1RpbWUodGhpcywgZXh0LCBzdXBwcmVzc1NlY29uZHMsIHN1cHByZXNzTWlsbGlzZWNvbmRzLCBpbmNsdWRlT2Zmc2V0LCBleHRlbmRlZFpvbmUpO1xuICAgIHJldHVybiBjO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgZGF0ZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzE5ODIwNTI1J1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT0RhdGUoeyBmb3JtYXQgPSBcImV4dGVuZGVkXCIgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0b0lTT0RhdGUodGhpcywgZm9ybWF0ID09PSBcImV4dGVuZGVkXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3Mgd2VlayBkYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09XZWVrRGF0ZSgpIC8vPT4gJzE5ODItVzIxLTInXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPV2Vla0RhdGUoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcImtra2stJ1cnV1ctY1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHRpbWUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmV4dGVuZGVkWm9uZT10cnVlXSAtIGFkZCB0aGUgdGltZSB6b25lIGZvcm1hdCBleHRlbnNpb25cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlUHJlZml4PWZhbHNlXSAtIGluY2x1ZGUgdGhlIGBUYCBwcmVmaXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQgfSkudG9JU09UaW1lKCkgLy89PiAnMDc6MzQ6MTkuMzYxWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCwgc2Vjb25kczogMCwgbWlsbGlzZWNvbmRzOiAwIH0pLnRvSVNPVGltZSh7IHN1cHByZXNzU2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcwNzozNFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQgfSkudG9JU09UaW1lKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzA3MzQxOS4zNjFaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGluY2x1ZGVQcmVmaXg6IHRydWUgfSkgLy89PiAnVDA3OjM0OjE5LjM2MVonXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPVGltZSh7XG4gICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBmYWxzZSxcbiAgICBzdXBwcmVzc1NlY29uZHMgPSBmYWxzZSxcbiAgICBpbmNsdWRlT2Zmc2V0ID0gdHJ1ZSxcbiAgICBpbmNsdWRlUHJlZml4ID0gZmFsc2UsXG4gICAgZXh0ZW5kZWRab25lID0gZmFsc2UsXG4gICAgZm9ybWF0ID0gXCJleHRlbmRlZFwiLFxuICB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGMgPSBpbmNsdWRlUHJlZml4ID8gXCJUXCIgOiBcIlwiO1xuICAgIHJldHVybiAoXG4gICAgICBjICtcbiAgICAgIHRvSVNPVGltZShcbiAgICAgICAgdGhpcyxcbiAgICAgICAgZm9ybWF0ID09PSBcImV4dGVuZGVkXCIsXG4gICAgICAgIHN1cHByZXNzU2Vjb25kcyxcbiAgICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gICAgICAgIGluY2x1ZGVPZmZzZXQsXG4gICAgICAgIGV4dGVuZGVkWm9uZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBSRkMgMjgyMi1jb21wYXRpYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCArMDAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgLTA0MDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvUkZDMjgyMigpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyBaWlpcIiwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEhUVFAgaGVhZGVycy4gVGhlIG91dHB1dCBpcyBhbHdheXMgZXhwcmVzc2VkIGluIEdNVC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgc3RyaW5nIGNvbmZvcm1zIHRvIFJGQyAxMTIzLlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgR01UJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMsIDE5KS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDE5OjAwOjAwIEdNVCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9IVFRQKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcy50b1VUQygpLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgJ0dNVCdcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTERhdGUoKSAvLz0+ICcyMDE0LTA3LTEzJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1NRTERhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdG9JU09EYXRlKHRoaXMsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXRTcGFjZT10cnVlXSAtIGluY2x1ZGUgdGhlIHNwYWNlIGJldHdlZW4gdGhlIHRpbWUgYW5kIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCh7IGluY2x1ZGVab25lOiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TUUxUaW1lKHsgaW5jbHVkZU9mZnNldCA9IHRydWUsIGluY2x1ZGVab25lID0gZmFsc2UsIGluY2x1ZGVPZmZzZXRTcGFjZSA9IHRydWUgfSA9IHt9KSB7XG4gICAgbGV0IGZtdCA9IFwiSEg6bW06c3MuU1NTXCI7XG5cbiAgICBpZiAoaW5jbHVkZVpvbmUgfHwgaW5jbHVkZU9mZnNldCkge1xuICAgICAgaWYgKGluY2x1ZGVPZmZzZXRTcGFjZSkge1xuICAgICAgICBmbXQgKz0gXCIgXCI7XG4gICAgICB9XG4gICAgICBpZiAoaW5jbHVkZVpvbmUpIHtcbiAgICAgICAgZm10ICs9IFwielwiO1xuICAgICAgfSBlbHNlIGlmIChpbmNsdWRlT2Zmc2V0KSB7XG4gICAgICAgIGZtdCArPSBcIlpaXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBmbXQsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBEYXRlVGltZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlWm9uZT1mYWxzZV0gLSBpbmNsdWRlIHRoZSB6b25lLCBzdWNoIGFzICdBbWVyaWNhL05ld19Zb3JrJy4gT3ZlcnJpZGVzIGluY2x1ZGVPZmZzZXQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0U3BhY2U9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSB0aW1lIGFuZCB0aGUgb2Zmc2V0LCBzdWNoIGFzICcwNToxNToxNi4zNDUgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZVpvbmU6IHRydWUgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TUUwob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt0aGlzLnRvU1FMRGF0ZSgpfSAke3RoaXMudG9TUUxUaW1lKG9wdHMpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudG9JU08oKSA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuIEFsaWFzIG9mIHtAbGluayBEYXRlVGltZSN0b01pbGxpc31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy50b01pbGxpcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b01pbGxpcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyAvIDEwMDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggc2Vjb25kcyAoYXMgYSB3aG9sZSBudW1iZXIpIG9mIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvVW5peEludGVnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguZmxvb3IodGhpcy50cyAvIDEwMDApIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBCU09OIHNlcmlhbGl6YWJsZSBlcXVpdmFsZW50IHRvIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge0RhdGV9XG4gICAqL1xuICB0b0JTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9KU0RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCB0aGlzIERhdGVUaW1lJ3MgeWVhciwgbW9udGgsIGRheSwgYW5kIHNvIG9uLlxuICAgKiBAcGFyYW0gb3B0cyAtIG9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVDb25maWc9ZmFsc2VdIC0gaW5jbHVkZSBjb25maWd1cmF0aW9uIGF0dHJpYnV0ZXMgaW4gdGhlIG91dHB1dFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b09iamVjdCgpIC8vPT4geyB5ZWFyOiAyMDE3LCBtb250aDogNCwgZGF5OiAyMiwgaG91cjogMjAsIG1pbnV0ZTogNDksIHNlY29uZDogNDIsIG1pbGxpc2Vjb25kOiAyNjggfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICB0b09iamVjdChvcHRzID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9O1xuXG4gICAgY29uc3QgYmFzZSA9IHsgLi4udGhpcy5jIH07XG5cbiAgICBpZiAob3B0cy5pbmNsdWRlQ29uZmlnKSB7XG4gICAgICBiYXNlLm91dHB1dENhbGVuZGFyID0gdGhpcy5vdXRwdXRDYWxlbmRhcjtcbiAgICAgIGJhc2UubnVtYmVyaW5nU3lzdGVtID0gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtO1xuICAgICAgYmFzZS5sb2NhbGUgPSB0aGlzLmxvYy5sb2NhbGU7XG4gICAgfVxuICAgIHJldHVybiBiYXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IERhdGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKi9cbiAgdG9KU0RhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU4pO1xuICB9XG5cbiAgLy8gQ09NUEFSRVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gRGF0ZVRpbWVzIGFzIGEgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgRGF0ZVRpbWUgdG8gY29tcGFyZSB0aGlzIG9uZSB0b1xuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciBhcnJheSBvZiB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgaTEgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgyLTA1LTI1VDA5OjQ1JyksXG4gICAqICAgICBpMiA9IERhdGVUaW1lLmZyb21JU08oJzE5ODMtMTAtMTRUMTA6MzAnKTtcbiAgICogaTIuZGlmZihpMSkudG9PYmplY3QoKSAvLz0+IHsgbWlsbGlzZWNvbmRzOiA0MzgwNzUwMDAwMCB9XG4gICAqIGkyLmRpZmYoaTEsICdob3VycycpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMjE2OC43NSB9XG4gICAqIGkyLmRpZmYoaTEsIFsnbW9udGhzJywgJ2RheXMnXSkudG9PYmplY3QoKSAvLz0+IHsgbW9udGhzOiAxNiwgZGF5czogMTkuMDMxMjUgfVxuICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJywgJ2hvdXJzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LCBob3VyczogMC43NSB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgZGlmZihvdGhlckRhdGVUaW1lLCB1bml0ID0gXCJtaWxsaXNlY29uZHNcIiwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyRGF0ZVRpbWUuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoXCJjcmVhdGVkIGJ5IGRpZmZpbmcgYW4gaW52YWxpZCBEYXRlVGltZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBkdXJPcHRzID0geyBsb2NhbGU6IHRoaXMubG9jYWxlLCBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLCAuLi5vcHRzIH07XG5cbiAgICBjb25zdCB1bml0cyA9IG1heWJlQXJyYXkodW5pdCkubWFwKER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQpLFxuICAgICAgb3RoZXJJc0xhdGVyID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCkgPiB0aGlzLnZhbHVlT2YoKSxcbiAgICAgIGVhcmxpZXIgPSBvdGhlcklzTGF0ZXIgPyB0aGlzIDogb3RoZXJEYXRlVGltZSxcbiAgICAgIGxhdGVyID0gb3RoZXJJc0xhdGVyID8gb3RoZXJEYXRlVGltZSA6IHRoaXMsXG4gICAgICBkaWZmZWQgPSBkaWZmKGVhcmxpZXIsIGxhdGVyLCB1bml0cywgZHVyT3B0cyk7XG5cbiAgICByZXR1cm4gb3RoZXJJc0xhdGVyID8gZGlmZmVkLm5lZ2F0ZSgpIDogZGlmZmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIHJpZ2h0IG5vdy5cbiAgICogU2VlIHtAbGluayBEYXRlVGltZSNkaWZmfVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciB1bml0cyB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgZGlmZk5vdyh1bml0ID0gXCJtaWxsaXNlY29uZHNcIiwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlmZihEYXRlVGltZS5ub3coKSwgdW5pdCwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHNwYW5uaW5nIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgYW5vdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIGVuZCBwb2ludCBvZiB0aGUgSW50ZXJ2YWxcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICB1bnRpbChvdGhlckRhdGVUaW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEludGVydmFsLmZyb21EYXRlVGltZXModGhpcywgb3RoZXJEYXRlVGltZSkgOiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgRGF0ZVRpbWUgaXMgaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lIGFzIGFub3RoZXIgRGF0ZVRpbWUuXG4gICAqIEhpZ2hlci1vcmRlciB1bml0cyBtdXN0IGFsc28gYmUgaWRlbnRpY2FsIGZvciB0aGlzIGZ1bmN0aW9uIHRvIHJldHVybiBgdHJ1ZWAuXG4gICAqIE5vdGUgdGhhdCB0aW1lIHpvbmVzIGFyZSAqKmlnbm9yZWQqKiBpbiB0aGlzIGNvbXBhcmlzb24sIHdoaWNoIGNvbXBhcmVzIHRoZSAqKmxvY2FsKiogY2FsZW5kYXIgdGltZS4gVXNlIHtAbGluayBEYXRlVGltZSNzZXRab25lfSB0byBjb252ZXJ0IG9uZSBvZiB0aGUgZGF0ZXMgaWYgbmVlZGVkLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5oYXNTYW1lKG90aGVyRFQsICdkYXknKTsgLy9+PiB0cnVlIGlmIG90aGVyRFQgaXMgaW4gdGhlIHNhbWUgY3VycmVudCBjYWxlbmRhciBkYXlcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc1NhbWUob3RoZXJEYXRlVGltZSwgdW5pdCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBpbnB1dE1zID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCk7XG4gICAgY29uc3QgYWRqdXN0ZWRUb1pvbmUgPSB0aGlzLnNldFpvbmUob3RoZXJEYXRlVGltZS56b25lLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSk7XG4gICAgcmV0dXJuIGFkanVzdGVkVG9ab25lLnN0YXJ0T2YodW5pdCkgPD0gaW5wdXRNcyAmJiBpbnB1dE1zIDw9IGFkanVzdGVkVG9ab25lLmVuZE9mKHVuaXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVxdWFsaXR5IGNoZWNrXG4gICAqIFR3byBEYXRlVGltZXMgYXJlIGVxdWFsIGlmZiB0aGV5IHJlcHJlc2VudCB0aGUgc2FtZSBtaWxsaXNlY29uZCwgaGF2ZSB0aGUgc2FtZSB6b25lIGFuZCBsb2NhdGlvbiwgYW5kIGFyZSBib3RoIHZhbGlkLlxuICAgKiBUbyBjb21wYXJlIGp1c3QgdGhlIG1pbGxpc2Vjb25kIHZhbHVlcywgdXNlIGArZHQxID09PSArZHQyYC5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXIgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzVmFsaWQgJiZcbiAgICAgIG90aGVyLmlzVmFsaWQgJiZcbiAgICAgIHRoaXMudmFsdWVPZigpID09PSBvdGhlci52YWx1ZU9mKCkgJiZcbiAgICAgIHRoaXMuem9uZS5lcXVhbHMob3RoZXIuem9uZSkgJiZcbiAgICAgIHRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdGhpcyB0aW1lIHJlbGF0aXZlIHRvIG5vdywgc3VjaCBhcyBcImluIHR3byBkYXlzXCIuIENhbiBvbmx5IGludGVybmF0aW9uYWxpemUgaWYgeW91clxuICAgKiBwbGF0Zm9ybSBzdXBwb3J0cyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC4gUm91bmRzIGRvd24gYnkgZGVmYXVsdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5ub3coKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnN0eWxlPVwibG9uZ1wiXSAtIHRoZSBzdHlsZSBvZiB1bml0cywgbXVzdCBiZSBcImxvbmdcIiwgXCJzaG9ydFwiLCBvciBcIm5hcnJvd1wiXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBvcHRpb25zLnVuaXQgLSB1c2UgYSBzcGVjaWZpYyB1bml0IG9yIGFycmF5IG9mIHVuaXRzOyBpZiBvbWl0dGVkLCBvciBhbiBhcnJheSwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIGJlc3QgdW5pdC4gVXNlIGFuIGFycmF5IG9yIG9uZSBvZiBcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgb3IgXCJzZWNvbmRzXCJcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yb3VuZD10cnVlXSAtIHdoZXRoZXIgdG8gcm91bmQgdGhlIG51bWJlcnMgaW4gdGhlIG91dHB1dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnBhZGRpbmc9MF0gLSBwYWRkaW5nIGluIG1pbGxpc2Vjb25kcy4gVGhpcyBhbGxvd3MgeW91IHRvIHJvdW5kIHVwIHRoZSByZXN1bHQgaWYgaXQgZml0cyBpbnNpZGUgdGhlIHRocmVzaG9sZC4gRG9uJ3QgdXNlIGluIGNvbWJpbmF0aW9uIHdpdGgge3JvdW5kOiBmYWxzZX0gYmVjYXVzZSB0aGUgZGVjaW1hbCBvdXRwdXQgd2lsbCBpbmNsdWRlIHRoZSBwYWRkaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcImluIDEgZGF5XCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKFwiZXNcIikudG9SZWxhdGl2ZSh7IGRheXM6IDEgfSkgLy89PiBcImRlbnRybyBkZSAxIGTDrWFcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiBcImRhbnMgMjMgaGV1cmVzXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiMiBkYXlzIGFnb1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKHsgdW5pdDogXCJob3Vyc1wiIH0pIC8vPT4gXCI0OCBob3VycyBhZ29cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGhvdXJzOiAzNiB9KS50b1JlbGF0aXZlKHsgcm91bmQ6IGZhbHNlIH0pIC8vPT4gXCIxLjUgZGF5cyBhZ29cIlxuICAgKi9cbiAgdG9SZWxhdGl2ZShvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgYmFzZSA9IG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IHRoaXMuem9uZSB9KSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgPyAodGhpcyA8IGJhc2UgPyAtb3B0aW9ucy5wYWRkaW5nIDogb3B0aW9ucy5wYWRkaW5nKSA6IDA7XG4gICAgbGV0IHVuaXRzID0gW1wieWVhcnNcIiwgXCJtb250aHNcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXTtcbiAgICBsZXQgdW5pdCA9IG9wdGlvbnMudW5pdDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnVuaXQpKSB7XG4gICAgICB1bml0cyA9IG9wdGlvbnMudW5pdDtcbiAgICAgIHVuaXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBkaWZmUmVsYXRpdmUoYmFzZSwgdGhpcy5wbHVzKHBhZGRpbmcpLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbnVtZXJpYzogXCJhbHdheXNcIixcbiAgICAgIHVuaXRzLFxuICAgICAgdW5pdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgZGF0ZSByZWxhdGl2ZSB0byB0b2RheSwgc3VjaCBhcyBcInllc3RlcmRheVwiIG9yIFwibmV4dCBtb250aFwiLlxuICAgKiBPbmx5IGludGVybmF0aW9uYWxpemVzIG9uIHBsYXRmb3JtcyB0aGF0IHN1cHBvcnRzIEludGwuUmVsYXRpdmVUaW1lRm9ybWF0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIG91dHB1dFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBbb3B0aW9ucy5iYXNlPURhdGVUaW1lLm5vdygpXSAtIHRoZSBEYXRlVGltZSB0byB1c2UgYXMgdGhlIGJhc2lzIHRvIHdoaWNoIHRoaXMgdGltZSBpcyBjb21wYXJlZC4gRGVmYXVsdHMgdG8gbm93LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudW5pdCAtIHVzZSBhIHNwZWNpZmljIHVuaXQ7IGlmIG9taXR0ZWQsIHRoZSBtZXRob2Qgd2lsbCBwaWNrIHRoZSB1bml0LiBVc2Ugb25lIG9mIFwieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIG9yIFwiZGF5c1wiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIG92ZXJyaWRlIHRoZSBudW1iZXJpbmdTeXN0ZW0gb2YgdGhpcyBEYXRlVGltZS4gVGhlIEludGwgc3lzdGVtIG1heSBjaG9vc2Ugbm90IHRvIGhvbm9yIHRoaXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcInRvbW9ycm93XCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKFwiZXNcIikucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCJcIm1hw7FhbmFcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+IFwiZGVtYWluXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmVDYWxlbmRhcigpIC8vPT4gXCIyIGRheXMgYWdvXCJcbiAgICovXG4gIHRvUmVsYXRpdmVDYWxlbmRhcihvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gZGlmZlJlbGF0aXZlKG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IHRoaXMuem9uZSB9KSwgdGhpcywge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIG51bWVyaWM6IFwiYXV0b1wiLFxuICAgICAgdW5pdHM6IFtcInllYXJzXCIsIFwibW9udGhzXCIsIFwiZGF5c1wiXSxcbiAgICAgIGNhbGVuZGFyeTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1pbiBvZiBzZXZlcmFsIGRhdGUgdGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWluaW11bVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1pbiBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XG4gICAqL1xuICBzdGF0aWMgbWluKC4uLmRhdGVUaW1lcykge1xuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJtaW4gcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCAoaSkgPT4gaS52YWx1ZU9mKCksIE1hdGgubWluKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1heCBvZiBzZXZlcmFsIGRhdGUgdGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWF4aW11bVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1heCBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XG4gICAqL1xuICBzdGF0aWMgbWF4KC4uLmRhdGVUaW1lcykge1xuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJtYXggcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCAoaSkgPT4gaS52YWx1ZU9mKCksIE1hdGgubWF4KTtcbiAgfVxuXG4gIC8vIE1JU0NcblxuICAvKipcbiAgICogRXhwbGFpbiBob3cgYSBzdHJpbmcgd291bGQgYmUgcGFyc2VkIGJ5IGZyb21Gb3JtYXQoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlIGRlc2NyaXB0aW9uKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGFrZW4gYnkgZnJvbUZvcm1hdCgpXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCB9ID0gb3B0aW9ucyxcbiAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGRlZmF1bHRUb0VOOiB0cnVlLFxuICAgICAgfSk7XG4gICAgcmV0dXJuIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0RXhwbGFpbiBpbnN0ZWFkXG4gICAqL1xuICBzdGF0aWMgZnJvbVN0cmluZ0V4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKTtcbiAgfVxuXG4gIC8vIEZPUk1BVCBQUkVTRVRTXG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgMTAvMTQvMTk4M1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX1NIT1JUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfU0hPUlQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX01FRCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFX01FRDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmksIE9jdCAxNCwgMTk4MydcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9NRURfV0lUSF9XRUVLREFZKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfTUVEX1dJVEhfV0VFS0RBWTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX0ZVTEwoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURV9GVUxMO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ1R1ZXNkYXksIE9jdG9iZXIgMTQsIDE5ODMnXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVfSFVHRSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFX0hVR0U7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9TSU1QTEUoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV9TSU1QTEU7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV9XSVRIX1NIT1JUX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX0xPTkdfT0ZGU0VUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfV0lUSF9MT05HX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCcsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1NJTVBMRSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FXzI0X1NJTVBMRTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMycsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FXzI0X1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFRFQnLCBhbHdheXMgMjQtaG91ci5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfU0hPUlQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfU0hPUlQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRUQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfTUVEO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCAxNCBPY3QgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVk7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfRlVMTCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9GVUxMO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfSFVHRSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9IVUdFO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMDozMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFM7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJpZW5kbHlEYXRlVGltZShkYXRlVGltZWlzaCkge1xuICBpZiAoRGF0ZVRpbWUuaXNEYXRlVGltZShkYXRlVGltZWlzaCkpIHtcbiAgICByZXR1cm4gZGF0ZVRpbWVpc2g7XG4gIH0gZWxzZSBpZiAoZGF0ZVRpbWVpc2ggJiYgZGF0ZVRpbWVpc2gudmFsdWVPZiAmJiBpc051bWJlcihkYXRlVGltZWlzaC52YWx1ZU9mKCkpKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21KU0RhdGUoZGF0ZVRpbWVpc2gpO1xuICB9IGVsc2UgaWYgKGRhdGVUaW1laXNoICYmIHR5cGVvZiBkYXRlVGltZWlzaCA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tT2JqZWN0KGRhdGVUaW1laXNoKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICBgVW5rbm93biBkYXRldGltZSBhcmd1bWVudDogJHtkYXRlVGltZWlzaH0sIG9mIHR5cGUgJHt0eXBlb2YgZGF0ZVRpbWVpc2h9YFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yLCBJbnZhbGlkRHVyYXRpb25FcnJvciwgSW52YWxpZFVuaXRFcnJvciB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9pbXBsL2Zvcm1hdHRlci5qc1wiO1xuaW1wb3J0IEludmFsaWQgZnJvbSBcIi4vaW1wbC9pbnZhbGlkLmpzXCI7XG5pbXBvcnQgTG9jYWxlIGZyb20gXCIuL2ltcGwvbG9jYWxlLmpzXCI7XG5pbXBvcnQgeyBwYXJzZUlTT0R1cmF0aW9uLCBwYXJzZUlTT1RpbWVPbmx5IH0gZnJvbSBcIi4vaW1wbC9yZWdleFBhcnNlci5qc1wiO1xuaW1wb3J0IHtcbiAgYXNOdW1iZXIsXG4gIGhhc093blByb3BlcnR5LFxuICBpc051bWJlcixcbiAgaXNVbmRlZmluZWQsXG4gIG5vcm1hbGl6ZU9iamVjdCxcbiAgcm91bmRUbyxcbn0gZnJvbSBcIi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcblxuY29uc3QgSU5WQUxJRCA9IFwiSW52YWxpZCBEdXJhdGlvblwiO1xuXG4vLyB1bml0IGNvbnZlcnNpb24gY29uc3RhbnRzXG5leHBvcnQgY29uc3QgbG93T3JkZXJNYXRyaXggPSB7XG4gICAgd2Vla3M6IHtcbiAgICAgIGRheXM6IDcsXG4gICAgICBob3VyczogNyAqIDI0LFxuICAgICAgbWludXRlczogNyAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIGRheXM6IHtcbiAgICAgIGhvdXJzOiAyNCxcbiAgICAgIG1pbnV0ZXM6IDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBob3VyczogeyBtaW51dGVzOiA2MCwgc2Vjb25kczogNjAgKiA2MCwgbWlsbGlzZWNvbmRzOiA2MCAqIDYwICogMTAwMCB9LFxuICAgIG1pbnV0ZXM6IHsgc2Vjb25kczogNjAsIG1pbGxpc2Vjb25kczogNjAgKiAxMDAwIH0sXG4gICAgc2Vjb25kczogeyBtaWxsaXNlY29uZHM6IDEwMDAgfSxcbiAgfSxcbiAgY2FzdWFsTWF0cml4ID0ge1xuICAgIHllYXJzOiB7XG4gICAgICBxdWFydGVyczogNCxcbiAgICAgIG1vbnRoczogMTIsXG4gICAgICB3ZWVrczogNTIsXG4gICAgICBkYXlzOiAzNjUsXG4gICAgICBob3VyczogMzY1ICogMjQsXG4gICAgICBtaW51dGVzOiAzNjUgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcXVhcnRlcnM6IHtcbiAgICAgIG1vbnRoczogMyxcbiAgICAgIHdlZWtzOiAxMyxcbiAgICAgIGRheXM6IDkxLFxuICAgICAgaG91cnM6IDkxICogMjQsXG4gICAgICBtaW51dGVzOiA5MSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgbW9udGhzOiB7XG4gICAgICB3ZWVrczogNCxcbiAgICAgIGRheXM6IDMwLFxuICAgICAgaG91cnM6IDMwICogMjQsXG4gICAgICBtaW51dGVzOiAzMCAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG5cbiAgICAuLi5sb3dPcmRlck1hdHJpeCxcbiAgfSxcbiAgZGF5c0luWWVhckFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0MDAsXG4gIGRheXNJbk1vbnRoQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQ4MDAsXG4gIGFjY3VyYXRlTWF0cml4ID0ge1xuICAgIHllYXJzOiB7XG4gICAgICBxdWFydGVyczogNCxcbiAgICAgIG1vbnRoczogMTIsXG4gICAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gNyxcbiAgICAgIGRheXM6IGRheXNJblllYXJBY2N1cmF0ZSxcbiAgICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBxdWFydGVyczoge1xuICAgICAgbW9udGhzOiAzLFxuICAgICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDI4LFxuICAgICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlIC8gNCxcbiAgICAgIGhvdXJzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQpIC8gNCxcbiAgICAgIG1pbnV0ZXM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwKSAvIDQsXG4gICAgICBzZWNvbmRzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwKSAvIDQsXG4gICAgICBtaWxsaXNlY29uZHM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwKSAvIDQsXG4gICAgfSxcbiAgICBtb250aHM6IHtcbiAgICAgIHdlZWtzOiBkYXlzSW5Nb250aEFjY3VyYXRlIC8gNyxcbiAgICAgIGRheXM6IGRheXNJbk1vbnRoQWNjdXJhdGUsXG4gICAgICBob3VyczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0LFxuICAgICAgbWludXRlczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIC4uLmxvd09yZGVyTWF0cml4LFxuICB9O1xuXG4vLyB1bml0cyBvcmRlcmVkIGJ5IHNpemVcbmNvbnN0IG9yZGVyZWRVbml0cyA9IFtcbiAgXCJ5ZWFyc1wiLFxuICBcInF1YXJ0ZXJzXCIsXG4gIFwibW9udGhzXCIsXG4gIFwid2Vla3NcIixcbiAgXCJkYXlzXCIsXG4gIFwiaG91cnNcIixcbiAgXCJtaW51dGVzXCIsXG4gIFwic2Vjb25kc1wiLFxuICBcIm1pbGxpc2Vjb25kc1wiLFxuXTtcblxuY29uc3QgcmV2ZXJzZVVuaXRzID0gb3JkZXJlZFVuaXRzLnNsaWNlKDApLnJldmVyc2UoKTtcblxuLy8gY2xvbmUgcmVhbGx5IG1lYW5zIFwiY3JlYXRlIGFub3RoZXIgaW5zdGFuY2UganVzdCBsaWtlIHRoaXMgb25lLCBidXQgd2l0aCB0aGVzZSBjaGFuZ2VzXCJcbmZ1bmN0aW9uIGNsb25lKGR1ciwgYWx0cywgY2xlYXIgPSBmYWxzZSkge1xuICAvLyBkZWVwIG1lcmdlIGZvciB2YWxzXG4gIGNvbnN0IGNvbmYgPSB7XG4gICAgdmFsdWVzOiBjbGVhciA/IGFsdHMudmFsdWVzIDogeyAuLi5kdXIudmFsdWVzLCAuLi4oYWx0cy52YWx1ZXMgfHwge30pIH0sXG4gICAgbG9jOiBkdXIubG9jLmNsb25lKGFsdHMubG9jKSxcbiAgICBjb252ZXJzaW9uQWNjdXJhY3k6IGFsdHMuY29udmVyc2lvbkFjY3VyYWN5IHx8IGR1ci5jb252ZXJzaW9uQWNjdXJhY3ksXG4gICAgbWF0cml4OiBhbHRzLm1hdHJpeCB8fCBkdXIubWF0cml4LFxuICB9O1xuICByZXR1cm4gbmV3IER1cmF0aW9uKGNvbmYpO1xufVxuXG5mdW5jdGlvbiBhbnRpVHJ1bmMobikge1xuICByZXR1cm4gbiA8IDAgPyBNYXRoLmZsb29yKG4pIDogTWF0aC5jZWlsKG4pO1xufVxuXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBjb252ZXJ0KG1hdHJpeCwgZnJvbU1hcCwgZnJvbVVuaXQsIHRvTWFwLCB0b1VuaXQpIHtcbiAgY29uc3QgY29udiA9IG1hdHJpeFt0b1VuaXRdW2Zyb21Vbml0XSxcbiAgICByYXcgPSBmcm9tTWFwW2Zyb21Vbml0XSAvIGNvbnYsXG4gICAgc2FtZVNpZ24gPSBNYXRoLnNpZ24ocmF3KSA9PT0gTWF0aC5zaWduKHRvTWFwW3RvVW5pdF0pLFxuICAgIC8vIG9rLCBzbyB0aGlzIGlzIHdpbGQsIGJ1dCBzZWUgdGhlIG1hdHJpeCBpbiB0aGUgdGVzdHNcbiAgICBhZGRlZCA9XG4gICAgICAhc2FtZVNpZ24gJiYgdG9NYXBbdG9Vbml0XSAhPT0gMCAmJiBNYXRoLmFicyhyYXcpIDw9IDEgPyBhbnRpVHJ1bmMocmF3KSA6IE1hdGgudHJ1bmMocmF3KTtcbiAgdG9NYXBbdG9Vbml0XSArPSBhZGRlZDtcbiAgZnJvbU1hcFtmcm9tVW5pdF0gLT0gYWRkZWQgKiBjb252O1xufVxuXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZXMobWF0cml4LCB2YWxzKSB7XG4gIHJldmVyc2VVbml0cy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh2YWxzW2N1cnJlbnRdKSkge1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIGNvbnZlcnQobWF0cml4LCB2YWxzLCBwcmV2aW91cywgdmFscywgY3VycmVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgIH1cbiAgfSwgbnVsbCk7XG59XG5cbi8vIFJlbW92ZSBhbGwgcHJvcGVydGllcyB3aXRoIGEgdmFsdWUgb2YgMCBmcm9tIGFuIG9iamVjdFxuZnVuY3Rpb24gcmVtb3ZlWmVyb2VzKHZhbHMpIHtcbiAgY29uc3QgbmV3VmFscyA9IHt9O1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2YWxzKSkge1xuICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgbmV3VmFsc1trZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdWYWxzO1xufVxuXG4vKipcbiAqIEEgRHVyYXRpb24gb2JqZWN0IHJlcHJlc2VudHMgYSBwZXJpb2Qgb2YgdGltZSwgbGlrZSBcIjIgbW9udGhzXCIgb3IgXCIxIGRheSwgMSBob3VyXCIuIENvbmNlcHR1YWxseSwgaXQncyBqdXN0IGEgbWFwIG9mIHVuaXRzIHRvIHRoZWlyIHF1YW50aXRpZXMsIGFjY29tcGFuaWVkIGJ5IHNvbWUgYWRkaXRpb25hbCBjb25maWd1cmF0aW9uIGFuZCBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLiBUaGV5IGNhbiBiZSB1c2VkIG9uIHRoZWlyIG93biBvciBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIEx1eG9uIHR5cGVzOyBmb3IgZXhhbXBsZSwgeW91IGNhbiB1c2Uge0BsaW5rIERhdGVUaW1lI3BsdXN9IHRvIGFkZCBhIER1cmF0aW9uIG9iamVjdCB0byBhIERhdGVUaW1lLCBwcm9kdWNpbmcgYW5vdGhlciBEYXRlVGltZS5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIER1cmF0aW9uOlxuICpcbiAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhIER1cmF0aW9uLCB1c2Uge0BsaW5rIER1cmF0aW9uLmZyb21NaWxsaXN9LCB7QGxpbmsgRHVyYXRpb24uZnJvbU9iamVjdH0sIG9yIHtAbGluayBEdXJhdGlvbi5mcm9tSVNPfS5cbiAqICogKipVbml0IHZhbHVlcyoqIFNlZSB0aGUge0BsaW5rIER1cmF0aW9uI3llYXJzfSwge0BsaW5rIER1cmF0aW9uI21vbnRoc30sIHtAbGluayBEdXJhdGlvbiN3ZWVrc30sIHtAbGluayBEdXJhdGlvbiNkYXlzfSwge0BsaW5rIER1cmF0aW9uI2hvdXJzfSwge0BsaW5rIER1cmF0aW9uI21pbnV0ZXN9LCB7QGxpbmsgRHVyYXRpb24jc2Vjb25kc30sIHtAbGluayBEdXJhdGlvbiNtaWxsaXNlY29uZHN9IGFjY2Vzc29ycy5cbiAqICogKipDb25maWd1cmF0aW9uKiogU2VlICB7QGxpbmsgRHVyYXRpb24jbG9jYWxlfSBhbmQge0BsaW5rIER1cmF0aW9uI251bWJlcmluZ1N5c3RlbX0gYWNjZXNzb3JzLlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG5ldyBEdXJhdGlvbnMgb3V0IG9mIG9sZCBvbmVzIHVzZSB7QGxpbmsgRHVyYXRpb24jcGx1c30sIHtAbGluayBEdXJhdGlvbiNtaW51c30sIHtAbGluayBEdXJhdGlvbiNub3JtYWxpemV9LCB7QGxpbmsgRHVyYXRpb24jc2V0fSwge0BsaW5rIER1cmF0aW9uI3JlY29uZmlndXJlfSwge0BsaW5rIER1cmF0aW9uI3NoaWZ0VG99LCBhbmQge0BsaW5rIER1cmF0aW9uI25lZ2F0ZX0uXG4gKiAqICoqT3V0cHV0KiogVG8gY29udmVydCB0aGUgRHVyYXRpb24gaW50byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHNlZSB7QGxpbmsgRHVyYXRpb24jYXN9LCB7QGxpbmsgRHVyYXRpb24jdG9JU099LCB7QGxpbmsgRHVyYXRpb24jdG9Gb3JtYXR9LCBhbmQge0BsaW5rIER1cmF0aW9uI3RvSlNPTn1cbiAqXG4gKiBUaGVyZSdzIGFyZSBtb3JlIG1ldGhvZHMgZG9jdW1lbnRlZCBiZWxvdy4gSW4gYWRkaXRpb24sIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHN1YnRsZXIgdG9waWNzIGxpa2UgaW50ZXJuYXRpb25hbGl6YXRpb24gYW5kIHZhbGlkaXR5LCBzZWUgdGhlIGV4dGVybmFsIGRvY3VtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1cmF0aW9uIHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25zdCBhY2N1cmF0ZSA9IGNvbmZpZy5jb252ZXJzaW9uQWNjdXJhY3kgPT09IFwibG9uZ3Rlcm1cIiB8fCBmYWxzZTtcbiAgICBsZXQgbWF0cml4ID0gYWNjdXJhdGUgPyBhY2N1cmF0ZU1hdHJpeCA6IGNhc3VhbE1hdHJpeDtcblxuICAgIGlmIChjb25maWcubWF0cml4KSB7XG4gICAgICBtYXRyaXggPSBjb25maWcubWF0cml4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsdWVzID0gY29uZmlnLnZhbHVlcztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY29udmVyc2lvbkFjY3VyYWN5ID0gYWNjdXJhdGUgPyBcImxvbmd0ZXJtXCIgOiBcImNhc3VhbFwiO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0x1eG9uRHVyYXRpb24gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBEdXJhdGlvbiBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IG9mIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbU1pbGxpcyhjb3VudCwgb3B0cykge1xuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWlsbGlzZWNvbmRzOiBjb3VudCB9LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXJzJyBhbmQgJ2hvdXJzJy5cbiAgICogSWYgdGhpcyBvYmplY3QgaXMgZW1wdHkgdGhlbiBhIHplcm8gbWlsbGlzZWNvbmRzIGR1cmF0aW9uIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnF1YXJ0ZXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGhzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla3NcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXlzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91cnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGVzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9W11dIC0gb3B0aW9ucyBmb3IgY3JlYXRpbmcgdGhpcyBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIHByZXNldCBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm1hdHJpeD1PYmplY3RdIC0gdGhlIGN1c3RvbSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbU9iamVjdChvYmosIG9wdHMgPSB7fSkge1xuICAgIGlmIChvYmogPT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICAgIGBEdXJhdGlvbi5mcm9tT2JqZWN0OiBhcmd1bWVudCBleHBlY3RlZCB0byBiZSBhbiBvYmplY3QsIGdvdCAke1xuICAgICAgICAgIG9iaiA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIG9ialxuICAgICAgICB9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IER1cmF0aW9uKHtcbiAgICAgIHZhbHVlczogbm9ybWFsaXplT2JqZWN0KG9iaiwgRHVyYXRpb24ubm9ybWFsaXplVW5pdCksXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpLFxuICAgICAgY29udmVyc2lvbkFjY3VyYWN5OiBvcHRzLmNvbnZlcnNpb25BY2N1cmFjeSxcbiAgICAgIG1hdHJpeDogb3B0cy5tYXRyaXgsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBEdXJhdGlvbkxpa2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0IHwgbnVtYmVyIHwgRHVyYXRpb259IGR1cmF0aW9uTGlrZVxuICAgKiBPbmUgb2Y6XG4gICAqIC0gb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFycycgYW5kICdob3VycycuXG4gICAqIC0gbnVtYmVyIHJlcHJlc2VudGluZyBtaWxsaXNlY29uZHNcbiAgICogLSBEdXJhdGlvbiBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uTGlrZSkge1xuICAgIGlmIChpc051bWJlcihkdXJhdGlvbkxpa2UpKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU1pbGxpcyhkdXJhdGlvbkxpa2UpO1xuICAgIH0gZWxzZSBpZiAoRHVyYXRpb24uaXNEdXJhdGlvbihkdXJhdGlvbkxpa2UpKSB7XG4gICAgICByZXR1cm4gZHVyYXRpb25MaWtlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uTGlrZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QoZHVyYXRpb25MaWtlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxuICAgICAgICBgVW5rbm93biBkdXJhdGlvbiBhcmd1bWVudCAke2R1cmF0aW9uTGlrZX0gb2YgdHlwZSAke3R5cGVvZiBkdXJhdGlvbkxpa2V9YFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSBkdXJhdGlvbiBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBwcmVzZXQgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5tYXRyaXg9T2JqZWN0XSAtIHRoZSBwcmVzZXQgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1AzWTZNMVc0RFQxMkgzME01UycpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAzLCBtb250aHM6IDYsIHdlZWtzOiAxLCBkYXlzOiA0LCBob3VyczogMTIsIG1pbnV0ZXM6IDMwLCBzZWNvbmRzOiA1IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUFQyM0gnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjMgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQNVkzTScpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiA1LCBtb250aHM6IDMgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMpIHtcbiAgICBjb25zdCBbcGFyc2VkXSA9IHBhcnNlSVNPRHVyYXRpb24odGV4dCk7XG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QocGFyc2VkLCBvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoXCJ1bnBhcnNhYmxlXCIsIGB0aGUgaW5wdXQgXCIke3RleHR9XCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYW4gSVNPIDg2MDEgdGltZSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBwcmVzZXQgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5tYXRyaXg9T2JqZWN0XSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTE6MjI6MzMuNDQ0JykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAyMiwgc2Vjb25kczogMzMsIG1pbGxpc2Vjb25kczogNDQ0IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExOjAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTowMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbUlTT1RpbWUodGV4dCwgb3B0cykge1xuICAgIGNvbnN0IFtwYXJzZWRdID0gcGFyc2VJU09UaW1lT25seSh0ZXh0KTtcbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChwYXJzZWQsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIGRhdGV0aW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRHVyYXRpb24gaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZER1cmF0aW9uRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRHVyYXRpb24oeyBpbnZhbGlkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XG4gICAgICB5ZWFyOiBcInllYXJzXCIsXG4gICAgICB5ZWFyczogXCJ5ZWFyc1wiLFxuICAgICAgcXVhcnRlcjogXCJxdWFydGVyc1wiLFxuICAgICAgcXVhcnRlcnM6IFwicXVhcnRlcnNcIixcbiAgICAgIG1vbnRoOiBcIm1vbnRoc1wiLFxuICAgICAgbW9udGhzOiBcIm1vbnRoc1wiLFxuICAgICAgd2VlazogXCJ3ZWVrc1wiLFxuICAgICAgd2Vla3M6IFwid2Vla3NcIixcbiAgICAgIGRheTogXCJkYXlzXCIsXG4gICAgICBkYXlzOiBcImRheXNcIixcbiAgICAgIGhvdXI6IFwiaG91cnNcIixcbiAgICAgIGhvdXJzOiBcImhvdXJzXCIsXG4gICAgICBtaW51dGU6IFwibWludXRlc1wiLFxuICAgICAgbWludXRlczogXCJtaW51dGVzXCIsXG4gICAgICBzZWNvbmQ6IFwic2Vjb25kc1wiLFxuICAgICAgc2Vjb25kczogXCJzZWNvbmRzXCIsXG4gICAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZHNcIixcbiAgICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZHNcIixcbiAgICB9W3VuaXQgPyB1bml0LnRvTG93ZXJDYXNlKCkgOiB1bml0XTtcblxuICAgIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYSBEdXJhdGlvbi4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge29iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRHVyYXRpb24obykge1xuICAgIHJldHVybiAobyAmJiBvLmlzTHV4b25EdXJhdGlvbikgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0ICB0aGUgbG9jYWxlIG9mIGEgRHVyYXRpb24sIHN1Y2ggJ2VuLUdCJ1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGxvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEdXJhdGlvbiwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEdXJhdGlvblxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG51bWJlcmluZ1N5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuIFlvdSBtYXkgdXNlIHRoZXNlIHRva2VuczpcbiAgICogKiBgU2AgZm9yIG1pbGxpc2Vjb25kc1xuICAgKiAqIGBzYCBmb3Igc2Vjb25kc1xuICAgKiAqIGBtYCBmb3IgbWludXRlc1xuICAgKiAqIGBoYCBmb3IgaG91cnNcbiAgICogKiBgZGAgZm9yIGRheXNcbiAgICogKiBgd2AgZm9yIHdlZWtzXG4gICAqICogYE1gIGZvciBtb250aHNcbiAgICogKiBgeWAgZm9yIHllYXJzXG4gICAqIE5vdGVzOlxuICAgKiAqIEFkZCBwYWRkaW5nIGJ5IHJlcGVhdGluZyB0aGUgdG9rZW4sIGUuZy4gXCJ5eVwiIHBhZHMgdGhlIHllYXJzIHRvIHR3byBkaWdpdHMsIFwiaGhoaFwiIHBhZHMgdGhlIGhvdXJzIG91dCB0byBmb3VyIGRpZ2l0c1xuICAgKiAqIFRva2VucyBjYW4gYmUgZXNjYXBlZCBieSB3cmFwcGluZyB3aXRoIHNpbmdsZSBxdW90ZXMuXG4gICAqICogVGhlIGR1cmF0aW9uIHdpbGwgYmUgY29udmVydGVkIHRvIHRoZSBzZXQgb2YgdW5pdHMgaW4gdGhlIGZvcm1hdCBzdHJpbmcgdXNpbmcge0BsaW5rIER1cmF0aW9uI3NoaWZ0VG99IGFuZCB0aGUgRHVyYXRpb25zJ3MgY29udmVyc2lvbiBhY2N1cmFjeSBzZXR0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZmxvb3I9dHJ1ZV0gLSBmbG9vciBudW1lcmljYWwgdmFsdWVzXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInkgZCBzXCIpIC8vPT4gXCIxIDYgMlwiXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInl5IGRkIHNzc1wiKSAvLz0+IFwiMDEgMDYgMDAyXCJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwiTSBTXCIpIC8vPT4gXCIxMiA1MTg0MDIwMDBcIlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0Zvcm1hdChmbXQsIG9wdHMgPSB7fSkge1xuICAgIC8vIHJldmVyc2UtY29tcGF0IHNpbmNlIDEuMjsgd2UgYWx3YXlzIHJvdW5kIGRvd24gbm93LCBuZXZlciB1cCwgYW5kIHdlIGRvIGl0IGJ5IGRlZmF1bHRcbiAgICBjb25zdCBmbXRPcHRzID0ge1xuICAgICAgLi4ub3B0cyxcbiAgICAgIGZsb29yOiBvcHRzLnJvdW5kICE9PSBmYWxzZSAmJiBvcHRzLmZsb29yICE9PSBmYWxzZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYywgZm10T3B0cykuZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nKHRoaXMsIGZtdClcbiAgICAgIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgRHVyYXRpb24gd2l0aCBhbGwgdW5pdHMgaW5jbHVkZWQuXG4gICAqIFRvIG1vZGlmeSBpdHMgYmVoYXZpb3IgdXNlIHRoZSBgbGlzdFN0eWxlYCBhbmQgYW55IEludGwuTnVtYmVyRm9ybWF0IG9wdGlvbiwgdGhvdWdoIGB1bml0RGlzcGxheWAgaXMgZXNwZWNpYWxseSByZWxldmFudC5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsL051bWJlckZvcm1hdFxuICAgKiBAcGFyYW0gb3B0cyAtIE9uIG9wdGlvbiBvYmplY3QgdG8gb3ZlcnJpZGUgdGhlIGZvcm1hdHRpbmcuIEFjY2VwdHMgdGhlIHNhbWUga2V5cyBhcyB0aGUgb3B0aW9ucyBwYXJhbWV0ZXIgb2YgdGhlIG5hdGl2ZSBgSW50Lk51bWJlckZvcm1hdGAgY29uc3RydWN0b3IsIGFzIHdlbGwgYXMgYGxpc3RTdHlsZWAuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgZGF5czogMSwgaG91cnM6IDUsIG1pbnV0ZXM6IDYgfSlcbiAgICogZHVyLnRvSHVtYW4oKSAvLz0+ICcxIGRheSwgNSBob3VycywgNiBtaW51dGVzJ1xuICAgKiBkdXIudG9IdW1hbih7IGxpc3RTdHlsZTogXCJsb25nXCIgfSkgLy89PiAnMSBkYXksIDUgaG91cnMsIGFuZCA2IG1pbnV0ZXMnXG4gICAqIGR1ci50b0h1bWFuKHsgdW5pdERpc3BsYXk6IFwic2hvcnRcIiB9KSAvLz0+ICcxIGRheSwgNSBociwgNiBtaW4nXG4gICAqIGBgYFxuICAgKi9cbiAgdG9IdW1hbihvcHRzID0ge30pIHtcbiAgICBjb25zdCBsID0gb3JkZXJlZFVuaXRzXG4gICAgICAubWFwKCh1bml0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMudmFsdWVzW3VuaXRdO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQodmFsKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxvY1xuICAgICAgICAgIC5udW1iZXJGb3JtYXR0ZXIoeyBzdHlsZTogXCJ1bml0XCIsIHVuaXREaXNwbGF5OiBcImxvbmdcIiwgLi4ub3B0cywgdW5pdDogdW5pdC5zbGljZSgwLCAtMSkgfSlcbiAgICAgICAgICAuZm9ybWF0KHZhbCk7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigobikgPT4gbik7XG5cbiAgICByZXR1cm4gdGhpcy5sb2NcbiAgICAgIC5saXN0Rm9ybWF0dGVyKHsgdHlwZTogXCJjb25qdW5jdGlvblwiLCBzdHlsZTogb3B0cy5saXN0U3R5bGUgfHwgXCJuYXJyb3dcIiwgLi4ub3B0cyB9KVxuICAgICAgLmZvcm1hdChsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCB0aGlzIER1cmF0aW9uJ3MgdmFsdWVzLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICB0b09iamVjdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9O1xuICAgIHJldHVybiB7IC4uLnRoaXMudmFsdWVzIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMywgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQM1lUNDVTJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA0LCBzZWNvbmRzOiA0NSB9KS50b0lTTygpIC8vPT4gJ1A0TVQ0NVMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDUgfSkudG9JU08oKSAvLz0+ICdQNU0nXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaW51dGVzOiA1IH0pLnRvSVNPKCkgLy89PiAnUFQ1TSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogNiB9KS50b0lTTygpIC8vPT4gJ1BUMC4wMDZTJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTTygpIHtcbiAgICAvLyB3ZSBjb3VsZCB1c2UgdGhlIGZvcm1hdHRlciwgYnV0IHRoaXMgaXMgYW4gZWFzaWVyIHdheSB0byBnZXQgdGhlIG1pbmltdW0gc3RyaW5nXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IHMgPSBcIlBcIjtcbiAgICBpZiAodGhpcy55ZWFycyAhPT0gMCkgcyArPSB0aGlzLnllYXJzICsgXCJZXCI7XG4gICAgaWYgKHRoaXMubW9udGhzICE9PSAwIHx8IHRoaXMucXVhcnRlcnMgIT09IDApIHMgKz0gdGhpcy5tb250aHMgKyB0aGlzLnF1YXJ0ZXJzICogMyArIFwiTVwiO1xuICAgIGlmICh0aGlzLndlZWtzICE9PSAwKSBzICs9IHRoaXMud2Vla3MgKyBcIldcIjtcbiAgICBpZiAodGhpcy5kYXlzICE9PSAwKSBzICs9IHRoaXMuZGF5cyArIFwiRFwiO1xuICAgIGlmICh0aGlzLmhvdXJzICE9PSAwIHx8IHRoaXMubWludXRlcyAhPT0gMCB8fCB0aGlzLnNlY29uZHMgIT09IDAgfHwgdGhpcy5taWxsaXNlY29uZHMgIT09IDApXG4gICAgICBzICs9IFwiVFwiO1xuICAgIGlmICh0aGlzLmhvdXJzICE9PSAwKSBzICs9IHRoaXMuaG91cnMgKyBcIkhcIjtcbiAgICBpZiAodGhpcy5taW51dGVzICE9PSAwKSBzICs9IHRoaXMubWludXRlcyArIFwiTVwiO1xuICAgIGlmICh0aGlzLnNlY29uZHMgIT09IDAgfHwgdGhpcy5taWxsaXNlY29uZHMgIT09IDApXG4gICAgICAvLyB0aGlzIHdpbGwgaGFuZGxlIFwiZmxvYXRpbmcgcG9pbnQgbWFkbmVzc1wiIGJ5IHJlbW92aW5nIGV4dHJhIGRlY2ltYWwgcGxhY2VzXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODgwMDQvaXMtZmxvYXRpbmctcG9pbnQtbWF0aC1icm9rZW5cbiAgICAgIHMgKz0gcm91bmRUbyh0aGlzLnNlY29uZHMgKyB0aGlzLm1pbGxpc2Vjb25kcyAvIDEwMDAsIDMpICsgXCJTXCI7XG4gICAgaWYgKHMgPT09IFwiUFwiKSBzICs9IFwiVDBTXCI7XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24sIGZvcm1hdHRlZCBhcyBhIHRpbWUgb2YgZGF5LlxuICAgKiBOb3RlIHRoYXQgdGhpcyB3aWxsIHJldHVybiBudWxsIGlmIHRoZSBkdXJhdGlvbiBpcyBpbnZhbGlkLCBuZWdhdGl2ZSwgb3IgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIDI0IGhvdXJzLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlUHJlZml4PWZhbHNlXSAtIGluY2x1ZGUgdGhlIGBUYCBwcmVmaXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKCkgLy89PiAnMTE6MDA6MDAuMDAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IHN1cHByZXNzTWlsbGlzZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzExOjAwOjAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IHN1cHByZXNzU2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcxMTowMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBpbmNsdWRlUHJlZml4OiB0cnVlIH0pIC8vPT4gJ1QxMTowMDowMC4wMDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzExMDAwMC4wMDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPVGltZShvcHRzID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBtaWxsaXMgPSB0aGlzLnRvTWlsbGlzKCk7XG4gICAgaWYgKG1pbGxpcyA8IDAgfHwgbWlsbGlzID49IDg2NDAwMDAwKSByZXR1cm4gbnVsbDtcblxuICAgIG9wdHMgPSB7XG4gICAgICBzdXBwcmVzc01pbGxpc2Vjb25kczogZmFsc2UsXG4gICAgICBzdXBwcmVzc1NlY29uZHM6IGZhbHNlLFxuICAgICAgaW5jbHVkZVByZWZpeDogZmFsc2UsXG4gICAgICBmb3JtYXQ6IFwiZXh0ZW5kZWRcIixcbiAgICAgIC4uLm9wdHMsXG4gICAgfTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zaGlmdFRvKFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiLCBcIm1pbGxpc2Vjb25kc1wiKTtcblxuICAgIGxldCBmbXQgPSBvcHRzLmZvcm1hdCA9PT0gXCJiYXNpY1wiID8gXCJoaG1tXCIgOiBcImhoOm1tXCI7XG5cbiAgICBpZiAoIW9wdHMuc3VwcHJlc3NTZWNvbmRzIHx8IHZhbHVlLnNlY29uZHMgIT09IDAgfHwgdmFsdWUubWlsbGlzZWNvbmRzICE9PSAwKSB7XG4gICAgICBmbXQgKz0gb3B0cy5mb3JtYXQgPT09IFwiYmFzaWNcIiA/IFwic3NcIiA6IFwiOnNzXCI7XG4gICAgICBpZiAoIW9wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHMgfHwgdmFsdWUubWlsbGlzZWNvbmRzICE9PSAwKSB7XG4gICAgICAgIGZtdCArPSBcIi5TU1NcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc3RyID0gdmFsdWUudG9Gb3JtYXQoZm10KTtcblxuICAgIGlmIChvcHRzLmluY2x1ZGVQcmVmaXgpIHtcbiAgICAgIHN0ciA9IFwiVFwiICsgc3RyO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSlNPTi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gbWlsbGlzZWNvbmRzIHZhbHVlIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvTWlsbGlzKCkge1xuICAgIHJldHVybiB0aGlzLmFzKFwibWlsbGlzZWNvbmRzXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gbWlsbGlzZWNvbmRzIHZhbHVlIG9mIHRoaXMgRHVyYXRpb24uIEFsaWFzIG9mIHtAbGluayB0b01pbGxpc31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy50b01pbGxpcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBsb25nZXIgYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBhZGQuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgcGx1cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGsgb2Ygb3JkZXJlZFVuaXRzKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoZHVyLnZhbHVlcywgaykgfHwgaGFzT3duUHJvcGVydHkodGhpcy52YWx1ZXMsIGspKSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IGR1ci5nZXQoaykgKyB0aGlzLmdldChrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IHJlc3VsdCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHRoaXMgRHVyYXRpb24gc2hvcnRlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIHN1YnRyYWN0LiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIG1pbnVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMucGx1cyhkdXIubmVnYXRlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjYWxlIHRoaXMgRHVyYXRpb24gYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIHVuaXQuIEFyaXR5IGlzIDEgb3IgMjogdGhlIHZhbHVlIG9mIHRoZSB1bml0IGFuZCwgb3B0aW9uYWxseSwgdGhlIHVuaXQgbmFtZS4gTXVzdCByZXR1cm4gYSBudW1iZXIuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgbWludXRlczogMzAgfSkubWFwVW5pdHMoeCA9PiB4ICogMikgLy89PiB7IGhvdXJzOiAyLCBtaW51dGVzOiA2MCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgbWludXRlczogMzAgfSkubWFwVW5pdHMoKHgsIHUpID0+IHUgPT09IFwiaG91cnNcIiA/IHggKiAyIDogeCkgLy89PiB7IGhvdXJzOiAyLCBtaW51dGVzOiAzMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbWFwVW5pdHMoZm4pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKSkge1xuICAgICAgcmVzdWx0W2tdID0gYXNOdW1iZXIoZm4odGhpcy52YWx1ZXNba10sIGspKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiByZXN1bHQgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGUnIG9yICdkYXknXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCd5ZWFycycpIC8vPT4gMlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgnbW9udGhzJykgLy89PiAwXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCdkYXlzJykgLy89PiAzXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1bml0KV07XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSBhIG1hcHBpbmcgb2YgdW5pdHMgdG8gbnVtYmVyc1xuICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgeWVhcnM6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHVyLnNldCh7IGhvdXJzOiA4LCBtaW51dGVzOiAzMCB9KVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHNldCh2YWx1ZXMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBtaXhlZCA9IHsgLi4udGhpcy52YWx1ZXMsIC4uLm5vcm1hbGl6ZU9iamVjdCh2YWx1ZXMsIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQpIH07XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiBtaXhlZCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUgYW5kL29yIG51bWJlcmluZ1N5c3RlbS4gIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgZHVyLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgcmVjb25maWd1cmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgY29udmVyc2lvbkFjY3VyYWN5LCBtYXRyaXggfSA9IHt9KSB7XG4gICAgY29uc3QgbG9jID0gdGhpcy5sb2MuY2xvbmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSB9KTtcbiAgICBjb25zdCBvcHRzID0geyBsb2MsIG1hdHJpeCwgY29udmVyc2lvbkFjY3VyYWN5IH07XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBkdXJhdGlvbiBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZXMnIG9yICdkYXlzJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdkYXlzJykgLy89PiAzNjVcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDF9KS5hcygnbW9udGhzJykgLy89PiAxMlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHtob3VyczogNjB9KS5hcygnZGF5cycpIC8vPT4gMi41XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGFzKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zaGlmdFRvKHVuaXQpLmdldCh1bml0KSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWR1Y2UgdGhpcyBEdXJhdGlvbiB0byBpdHMgY2Fub25pY2FsIHJlcHJlc2VudGF0aW9uIGluIGl0cyBjdXJyZW50IHVuaXRzLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDIsIGRheXM6IDUwMDAgfSkubm9ybWFsaXplKCkudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDE1LCBkYXlzOiAyNTUgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEyLCBtaW51dGVzOiAtNDUgfSkubm9ybWFsaXplKCkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAxNSB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbm9ybWFsaXplKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCB2YWxzID0gdGhpcy50b09iamVjdCgpO1xuICAgIG5vcm1hbGl6ZVZhbHVlcyh0aGlzLm1hdHJpeCwgdmFscyk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiB2YWxzIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2NhbGUgdW5pdHMgdG8gaXRzIGxhcmdlc3QgcmVwcmVzZW50YXRpb25cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogOTAwMDAgfSkucmVzY2FsZSgpLnRvT2JqZWN0KCkgLy89PiB7IG1pbnV0ZXM6IDEsIHNlY29uZHM6IDMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICByZXNjYWxlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCB2YWxzID0gcmVtb3ZlWmVyb2VzKHRoaXMubm9ybWFsaXplKCkuc2hpZnRUb0FsbCgpLnRvT2JqZWN0KCkpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogdmFscyB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoaXMgRHVyYXRpb24gaW50byBpdHMgcmVwcmVzZW50YXRpb24gaW4gYSBkaWZmZXJlbnQgc2V0IG9mIHVuaXRzLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLnNoaWZ0VG8oJ21pbnV0ZXMnLCAnbWlsbGlzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgbWludXRlczogNjAsIG1pbGxpc2Vjb25kczogMzAwMDAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHNoaWZ0VG8oLi4udW5pdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAodW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1bml0cyA9IHVuaXRzLm1hcCgodSkgPT4gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1KSk7XG5cbiAgICBjb25zdCBidWlsdCA9IHt9LFxuICAgICAgYWNjdW11bGF0ZWQgPSB7fSxcbiAgICAgIHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgbGV0IGxhc3RVbml0O1xuXG4gICAgZm9yIChjb25zdCBrIG9mIG9yZGVyZWRVbml0cykge1xuICAgICAgaWYgKHVuaXRzLmluZGV4T2YoaykgPj0gMCkge1xuICAgICAgICBsYXN0VW5pdCA9IGs7XG5cbiAgICAgICAgbGV0IG93biA9IDA7XG5cbiAgICAgICAgLy8gYW55dGhpbmcgd2UgaGF2ZW4ndCBib2lsZWQgZG93biB5ZXQgc2hvdWxkIGdldCBib2lsZWQgdG8gdGhpcyB1bml0XG4gICAgICAgIGZvciAoY29uc3QgYWsgaW4gYWNjdW11bGF0ZWQpIHtcbiAgICAgICAgICBvd24gKz0gdGhpcy5tYXRyaXhbYWtdW2tdICogYWNjdW11bGF0ZWRbYWtdO1xuICAgICAgICAgIGFjY3VtdWxhdGVkW2FrXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwbHVzIGFueXRoaW5nIHRoYXQncyBhbHJlYWR5IGluIHRoaXMgdW5pdFxuICAgICAgICBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcbiAgICAgICAgICBvd24gKz0gdmFsc1trXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGkgPSBNYXRoLnRydW5jKG93bik7XG4gICAgICAgIGJ1aWx0W2tdID0gaTtcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSAob3duICogMTAwMCAtIGkgKiAxMDAwKSAvIDEwMDA7XG5cbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyBmdXJ0aGVyIGRvd24gdGhlIGNoYWluIHRoYXQgc2hvdWxkIGJlIHJvbGxlZCB1cCBpbiB0byB0aGlzXG4gICAgICAgIGZvciAoY29uc3QgZG93biBpbiB2YWxzKSB7XG4gICAgICAgICAgaWYgKG9yZGVyZWRVbml0cy5pbmRleE9mKGRvd24pID4gb3JkZXJlZFVuaXRzLmluZGV4T2YoaykpIHtcbiAgICAgICAgICAgIGNvbnZlcnQodGhpcy5tYXRyaXgsIHZhbHMsIGRvd24sIGJ1aWx0LCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBrZWVwIGl0IGluIHRoZSB3aW5ncyB0byBib2lsIGl0IGxhdGVyXG4gICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XG4gICAgICAgIGFjY3VtdWxhdGVkW2tdID0gdmFsc1trXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhbnl0aGluZyBsZWZ0b3ZlciBiZWNvbWVzIHRoZSBkZWNpbWFsIGZvciB0aGUgbGFzdCB1bml0XG4gICAgLy8gbGFzdFVuaXQgbXVzdCBiZSBkZWZpbmVkIHNpbmNlIHVuaXRzIGlzIG5vdCBlbXB0eVxuICAgIGZvciAoY29uc3Qga2V5IGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICBpZiAoYWNjdW11bGF0ZWRba2V5XSAhPT0gMCkge1xuICAgICAgICBidWlsdFtsYXN0VW5pdF0gKz1cbiAgICAgICAgICBrZXkgPT09IGxhc3RVbml0ID8gYWNjdW11bGF0ZWRba2V5XSA6IGFjY3VtdWxhdGVkW2tleV0gLyB0aGlzLm1hdHJpeFtsYXN0VW5pdF1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IGJ1aWx0IH0sIHRydWUpLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoaWZ0IHRoaXMgRHVyYXRpb24gdG8gYWxsIGF2YWlsYWJsZSB1bml0cy5cbiAgICogU2FtZSBhcyBzaGlmdFRvKFwieWVhcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCIpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc2hpZnRUb0FsbCgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRUbyhcbiAgICAgIFwieWVhcnNcIixcbiAgICAgIFwibW9udGhzXCIsXG4gICAgICBcIndlZWtzXCIsXG4gICAgICBcImRheXNcIixcbiAgICAgIFwiaG91cnNcIixcbiAgICAgIFwibWludXRlc1wiLFxuICAgICAgXCJzZWNvbmRzXCIsXG4gICAgICBcIm1pbGxpc2Vjb25kc1wiXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG5lZ2F0aXZlIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkubmVnYXRlKCkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IC0xLCBzZWNvbmRzOiAtMzAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIG5lZ2F0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgbmVnYXRlZCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcykpIHtcbiAgICAgIG5lZ2F0ZWRba10gPSB0aGlzLnZhbHVlc1trXSA9PT0gMCA/IDAgOiAtdGhpcy52YWx1ZXNba107XG4gICAgfVxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogbmVnYXRlZCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHllYXJzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHllYXJzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy55ZWFycyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcXVhcnRlcnMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgcXVhcnRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnF1YXJ0ZXJzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtb250aHMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbW9udGhzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5tb250aHMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlZWtzXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLndlZWtzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXlzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGRheXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmRheXMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhvdXJzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGhvdXJzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5ob3VycyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWludXRlcy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtaW51dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taW51dGVzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzZWNvbmRzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgc2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuc2Vjb25kcyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWlsbGlzZWNvbmRzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbWlsbGlzZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taWxsaXNlY29uZHMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIER1cmF0aW9uIGlzIGludmFsaWQuIEludmFsaWQgZHVyYXRpb25zIGFyZSByZXR1cm5lZCBieSBkaWZmIG9wZXJhdGlvbnNcbiAgICogb24gaW52YWxpZCBEYXRlVGltZXMgb3IgSW50ZXJ2YWxzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRSZWFzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRHVyYXRpb24gYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIER1cmF0aW9uIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZEV4cGxhbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEVxdWFsaXR5IGNoZWNrXG4gICAqIFR3byBEdXJhdGlvbnMgYXJlIGVxdWFsIGlmZiB0aGV5IGhhdmUgdGhlIHNhbWUgdW5pdHMgYW5kIHRoZSBzYW1lIHZhbHVlcyBmb3IgZWFjaCB1bml0LlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXEodjEsIHYyKSB7XG4gICAgICAvLyBDb25zaWRlciAwIGFuZCB1bmRlZmluZWQgYXMgZXF1YWxcbiAgICAgIGlmICh2MSA9PT0gdW5kZWZpbmVkIHx8IHYxID09PSAwKSByZXR1cm4gdjIgPT09IHVuZGVmaW5lZCB8fCB2MiA9PT0gMDtcbiAgICAgIHJldHVybiB2MSA9PT0gdjI7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB1IG9mIG9yZGVyZWRVbml0cykge1xuICAgICAgaWYgKCFlcSh0aGlzLnZhbHVlc1t1XSwgb3RoZXIudmFsdWVzW3VdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvLyB0aGVzZSBhcmVuJ3QgcmVhbGx5IHByaXZhdGUsIGJ1dCBub3IgYXJlIHRoZXkgcmVhbGx5IHVzZWZ1bCB0byBkb2N1bWVudFxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIEx1eG9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkRGF0ZVRpbWVFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyZWFzb24pIHtcbiAgICBzdXBlcihgSW52YWxpZCBEYXRlVGltZTogJHtyZWFzb24udG9NZXNzYWdlKCl9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZEludGVydmFsRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgSW50ZXJ2YWw6ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEludmFsaWREdXJhdGlvbkVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKHJlYXNvbikge1xuICAgIHN1cGVyKGBJbnZhbGlkIER1cmF0aW9uOiAke3JlYXNvbi50b01lc3NhZ2UoKX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige31cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZFVuaXRFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih1bml0KSB7XG4gICAgc3VwZXIoYEludmFsaWQgdW5pdCAke3VuaXR9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHt9XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIFpvbmVJc0Fic3RyYWN0RXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJab25lIGlzIGFuIGFic3RyYWN0IGNsYXNzXCIpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBpbnRlZ2VyQmV0d2VlbixcbiAgaXNMZWFwWWVhcixcbiAgdGltZU9iamVjdCxcbiAgZGF5c0luWWVhcixcbiAgZGF5c0luTW9udGgsXG4gIHdlZWtzSW5XZWVrWWVhcixcbiAgaXNJbnRlZ2VyLFxufSBmcm9tIFwiLi91dGlsLmpzXCI7XG5pbXBvcnQgSW52YWxpZCBmcm9tIFwiLi9pbnZhbGlkLmpzXCI7XG5cbmNvbnN0IG5vbkxlYXBMYWRkZXIgPSBbMCwgMzEsIDU5LCA5MCwgMTIwLCAxNTEsIDE4MSwgMjEyLCAyNDMsIDI3MywgMzA0LCAzMzRdLFxuICBsZWFwTGFkZGVyID0gWzAsIDMxLCA2MCwgOTEsIDEyMSwgMTUyLCAxODIsIDIxMywgMjQ0LCAyNzQsIDMwNSwgMzM1XTtcblxuZnVuY3Rpb24gdW5pdE91dE9mUmFuZ2UodW5pdCwgdmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBJbnZhbGlkKFxuICAgIFwidW5pdCBvdXQgb2YgcmFuZ2VcIixcbiAgICBgeW91IHNwZWNpZmllZCAke3ZhbHVlfSAob2YgdHlwZSAke3R5cGVvZiB2YWx1ZX0pIGFzIGEgJHt1bml0fSwgd2hpY2ggaXMgaW52YWxpZGBcbiAgKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZXZWVrKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoIC0gMSwgZGF5KSk7XG5cbiAgaWYgKHllYXIgPCAxMDAgJiYgeWVhciA+PSAwKSB7XG4gICAgZC5zZXRVVENGdWxsWWVhcihkLmdldFVUQ0Z1bGxZZWFyKCkgLSAxOTAwKTtcbiAgfVxuXG4gIGNvbnN0IGpzID0gZC5nZXRVVENEYXkoKTtcblxuICByZXR1cm4ganMgPT09IDAgPyA3IDoganM7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgcmV0dXJuIGRheSArIChpc0xlYXBZZWFyKHllYXIpID8gbGVhcExhZGRlciA6IG5vbkxlYXBMYWRkZXIpW21vbnRoIC0gMV07XG59XG5cbmZ1bmN0aW9uIHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCkge1xuICBjb25zdCB0YWJsZSA9IGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcixcbiAgICBtb250aDAgPSB0YWJsZS5maW5kSW5kZXgoKGkpID0+IGkgPCBvcmRpbmFsKSxcbiAgICBkYXkgPSBvcmRpbmFsIC0gdGFibGVbbW9udGgwXTtcbiAgcmV0dXJuIHsgbW9udGg6IG1vbnRoMCArIDEsIGRheSB9O1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWdvcmlhblRvV2VlayhncmVnT2JqKSB7XG4gIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gZ3JlZ09iaixcbiAgICBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSksXG4gICAgd2Vla2RheSA9IGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KTtcblxuICBsZXQgd2Vla051bWJlciA9IE1hdGguZmxvb3IoKG9yZGluYWwgLSB3ZWVrZGF5ICsgMTApIC8gNyksXG4gICAgd2Vla1llYXI7XG5cbiAgaWYgKHdlZWtOdW1iZXIgPCAxKSB7XG4gICAgd2Vla1llYXIgPSB5ZWFyIC0gMTtcbiAgICB3ZWVrTnVtYmVyID0gd2Vla3NJbldlZWtZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIGlmICh3ZWVrTnVtYmVyID4gd2Vla3NJbldlZWtZZWFyKHllYXIpKSB7XG4gICAgd2Vla1llYXIgPSB5ZWFyICsgMTtcbiAgICB3ZWVrTnVtYmVyID0gMTtcbiAgfSBlbHNlIHtcbiAgICB3ZWVrWWVhciA9IHllYXI7XG4gIH1cblxuICByZXR1cm4geyB3ZWVrWWVhciwgd2Vla051bWJlciwgd2Vla2RheSwgLi4udGltZU9iamVjdChncmVnT2JqKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla1RvR3JlZ29yaWFuKHdlZWtEYXRhKSB7XG4gIGNvbnN0IHsgd2Vla1llYXIsIHdlZWtOdW1iZXIsIHdlZWtkYXkgfSA9IHdlZWtEYXRhLFxuICAgIHdlZWtkYXlPZkphbjQgPSBkYXlPZldlZWsod2Vla1llYXIsIDEsIDQpLFxuICAgIHllYXJJbkRheXMgPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcblxuICBsZXQgb3JkaW5hbCA9IHdlZWtOdW1iZXIgKiA3ICsgd2Vla2RheSAtIHdlZWtkYXlPZkphbjQgLSAzLFxuICAgIHllYXI7XG5cbiAgaWYgKG9yZGluYWwgPCAxKSB7XG4gICAgeWVhciA9IHdlZWtZZWFyIC0gMTtcbiAgICBvcmRpbmFsICs9IGRheXNJblllYXIoeWVhcik7XG4gIH0gZWxzZSBpZiAob3JkaW5hbCA+IHllYXJJbkRheXMpIHtcbiAgICB5ZWFyID0gd2Vla1llYXIgKyAxO1xuICAgIG9yZGluYWwgLT0gZGF5c0luWWVhcih3ZWVrWWVhcik7XG4gIH0gZWxzZSB7XG4gICAgeWVhciA9IHdlZWtZZWFyO1xuICB9XG5cbiAgY29uc3QgeyBtb250aCwgZGF5IH0gPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpO1xuICByZXR1cm4geyB5ZWFyLCBtb250aCwgZGF5LCAuLi50aW1lT2JqZWN0KHdlZWtEYXRhKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZ29yaWFuVG9PcmRpbmFsKGdyZWdEYXRhKSB7XG4gIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gZ3JlZ0RhdGE7XG4gIGNvbnN0IG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KTtcbiAgcmV0dXJuIHsgeWVhciwgb3JkaW5hbCwgLi4udGltZU9iamVjdChncmVnRGF0YSkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGluYWxUb0dyZWdvcmlhbihvcmRpbmFsRGF0YSkge1xuICBjb25zdCB7IHllYXIsIG9yZGluYWwgfSA9IG9yZGluYWxEYXRhO1xuICBjb25zdCB7IG1vbnRoLCBkYXkgfSA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCk7XG4gIHJldHVybiB7IHllYXIsIG1vbnRoLCBkYXksIC4uLnRpbWVPYmplY3Qob3JkaW5hbERhdGEpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnZhbGlkV2Vla0RhdGEob2JqKSB7XG4gIGNvbnN0IHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoud2Vla1llYXIpLFxuICAgIHZhbGlkV2VlayA9IGludGVnZXJCZXR3ZWVuKG9iai53ZWVrTnVtYmVyLCAxLCB3ZWVrc0luV2Vla1llYXIob2JqLndlZWtZZWFyKSksXG4gICAgdmFsaWRXZWVrZGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLndlZWtkYXksIDEsIDcpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla1llYXJcIiwgb2JqLndlZWtZZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRXZWVrKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla1wiLCBvYmoud2Vlayk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkV2Vla2RheSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIndlZWtkYXlcIiwgb2JqLndlZWtkYXkpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW52YWxpZE9yZGluYWxEYXRhKG9iaikge1xuICBjb25zdCB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLnllYXIpLFxuICAgIHZhbGlkT3JkaW5hbCA9IGludGVnZXJCZXR3ZWVuKG9iai5vcmRpbmFsLCAxLCBkYXlzSW5ZZWFyKG9iai55ZWFyKSk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ5ZWFyXCIsIG9iai55ZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRPcmRpbmFsKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwib3JkaW5hbFwiLCBvYmoub3JkaW5hbCk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHtcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICB2YWxpZE1vbnRoID0gaW50ZWdlckJldHdlZW4ob2JqLm1vbnRoLCAxLCAxMiksXG4gICAgdmFsaWREYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmouZGF5LCAxLCBkYXlzSW5Nb250aChvYmoueWVhciwgb2JqLm1vbnRoKSk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ5ZWFyXCIsIG9iai55ZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNb250aCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1vbnRoXCIsIG9iai5tb250aCk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkRGF5KSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwiZGF5XCIsIG9iai5kYXkpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW52YWxpZFRpbWVEYXRhKG9iaikge1xuICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCB9ID0gb2JqO1xuICBjb25zdCB2YWxpZEhvdXIgPVxuICAgICAgaW50ZWdlckJldHdlZW4oaG91ciwgMCwgMjMpIHx8XG4gICAgICAoaG91ciA9PT0gMjQgJiYgbWludXRlID09PSAwICYmIHNlY29uZCA9PT0gMCAmJiBtaWxsaXNlY29uZCA9PT0gMCksXG4gICAgdmFsaWRNaW51dGUgPSBpbnRlZ2VyQmV0d2VlbihtaW51dGUsIDAsIDU5KSxcbiAgICB2YWxpZFNlY29uZCA9IGludGVnZXJCZXR3ZWVuKHNlY29uZCwgMCwgNTkpLFxuICAgIHZhbGlkTWlsbGlzZWNvbmQgPSBpbnRlZ2VyQmV0d2VlbihtaWxsaXNlY29uZCwgMCwgOTk5KTtcblxuICBpZiAoIXZhbGlkSG91cikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcImhvdXJcIiwgaG91cik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTWludXRlKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibWludXRlXCIsIG1pbnV0ZSk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkU2Vjb25kKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTWlsbGlzZWNvbmQpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtaWxsaXNlY29uZFwiLCBtaWxsaXNlY29uZCk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgRHVyYXRpb24gZnJvbSBcIi4uL2R1cmF0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIGRheURpZmYoZWFybGllciwgbGF0ZXIpIHtcbiAgY29uc3QgdXRjRGF5U3RhcnQgPSAoZHQpID0+IGR0LnRvVVRDKDAsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KS5zdGFydE9mKFwiZGF5XCIpLnZhbHVlT2YoKSxcbiAgICBtcyA9IHV0Y0RheVN0YXJ0KGxhdGVyKSAtIHV0Y0RheVN0YXJ0KGVhcmxpZXIpO1xuICByZXR1cm4gTWF0aC5mbG9vcihEdXJhdGlvbi5mcm9tTWlsbGlzKG1zKS5hcyhcImRheXNcIikpO1xufVxuXG5mdW5jdGlvbiBoaWdoT3JkZXJEaWZmcyhjdXJzb3IsIGxhdGVyLCB1bml0cykge1xuICBjb25zdCBkaWZmZXJzID0gW1xuICAgIFtcInllYXJzXCIsIChhLCBiKSA9PiBiLnllYXIgLSBhLnllYXJdLFxuICAgIFtcInF1YXJ0ZXJzXCIsIChhLCBiKSA9PiBiLnF1YXJ0ZXIgLSBhLnF1YXJ0ZXIgKyAoYi55ZWFyIC0gYS55ZWFyKSAqIDRdLFxuICAgIFtcIm1vbnRoc1wiLCAoYSwgYikgPT4gYi5tb250aCAtIGEubW9udGggKyAoYi55ZWFyIC0gYS55ZWFyKSAqIDEyXSxcbiAgICBbXG4gICAgICBcIndlZWtzXCIsXG4gICAgICAoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBkYXlzID0gZGF5RGlmZihhLCBiKTtcbiAgICAgICAgcmV0dXJuIChkYXlzIC0gKGRheXMgJSA3KSkgLyA3O1xuICAgICAgfSxcbiAgICBdLFxuICAgIFtcImRheXNcIiwgZGF5RGlmZl0sXG4gIF07XG5cbiAgY29uc3QgcmVzdWx0cyA9IHt9O1xuICBsZXQgbG93ZXN0T3JkZXIsIGhpZ2hXYXRlcjtcblxuICBmb3IgKGNvbnN0IFt1bml0LCBkaWZmZXJdIG9mIGRpZmZlcnMpIHtcbiAgICBpZiAodW5pdHMuaW5kZXhPZih1bml0KSA+PSAwKSB7XG4gICAgICBsb3dlc3RPcmRlciA9IHVuaXQ7XG5cbiAgICAgIGxldCBkZWx0YSA9IGRpZmZlcihjdXJzb3IsIGxhdGVyKTtcbiAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKHsgW3VuaXRdOiBkZWx0YSB9KTtcblxuICAgICAgaWYgKGhpZ2hXYXRlciA+IGxhdGVyKSB7XG4gICAgICAgIGN1cnNvciA9IGN1cnNvci5wbHVzKHsgW3VuaXRdOiBkZWx0YSAtIDEgfSk7XG4gICAgICAgIGRlbHRhIC09IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJzb3IgPSBoaWdoV2F0ZXI7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdHNbdW5pdF0gPSBkZWx0YTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW2N1cnNvciwgcmVzdWx0cywgaGlnaFdhdGVyLCBsb3dlc3RPcmRlcl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlYXJsaWVyLCBsYXRlciwgdW5pdHMsIG9wdHMpIHtcbiAgbGV0IFtjdXJzb3IsIHJlc3VsdHMsIGhpZ2hXYXRlciwgbG93ZXN0T3JkZXJdID0gaGlnaE9yZGVyRGlmZnMoZWFybGllciwgbGF0ZXIsIHVuaXRzKTtcblxuICBjb25zdCByZW1haW5pbmdNaWxsaXMgPSBsYXRlciAtIGN1cnNvcjtcblxuICBjb25zdCBsb3dlck9yZGVyVW5pdHMgPSB1bml0cy5maWx0ZXIoXG4gICAgKHUpID0+IFtcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIl0uaW5kZXhPZih1KSA+PSAwXG4gICk7XG5cbiAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaGlnaFdhdGVyIDwgbGF0ZXIpIHtcbiAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKHsgW2xvd2VzdE9yZGVyXTogMSB9KTtcbiAgICB9XG5cbiAgICBpZiAoaGlnaFdhdGVyICE9PSBjdXJzb3IpIHtcbiAgICAgIHJlc3VsdHNbbG93ZXN0T3JkZXJdID0gKHJlc3VsdHNbbG93ZXN0T3JkZXJdIHx8IDApICsgcmVtYWluaW5nTWlsbGlzIC8gKGhpZ2hXYXRlciAtIGN1cnNvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZHVyYXRpb24gPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHJlc3VsdHMsIG9wdHMpO1xuXG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKHJlbWFpbmluZ01pbGxpcywgb3B0cylcbiAgICAgIC5zaGlmdFRvKC4uLmxvd2VyT3JkZXJVbml0cylcbiAgICAgIC5wbHVzKGR1cmF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZHVyYXRpb247XG4gIH1cbn1cbiIsImNvbnN0IG51bWJlcmluZ1N5c3RlbXMgPSB7XG4gIGFyYWI6IFwiW1xcdTA2NjAtXFx1MDY2OV1cIixcbiAgYXJhYmV4dDogXCJbXFx1MDZGMC1cXHUwNkY5XVwiLFxuICBiYWxpOiBcIltcXHUxQjUwLVxcdTFCNTldXCIsXG4gIGJlbmc6IFwiW1xcdTA5RTYtXFx1MDlFRl1cIixcbiAgZGV2YTogXCJbXFx1MDk2Ni1cXHUwOTZGXVwiLFxuICBmdWxsd2lkZTogXCJbXFx1RkYxMC1cXHVGRjE5XVwiLFxuICBndWpyOiBcIltcXHUwQUU2LVxcdTBBRUZdXCIsXG4gIGhhbmlkZWM6IFwiW+OAh3zkuIB85LqMfOS4iXzlm5t85LqUfOWFrXzkuIN85YWrfOS5nV1cIixcbiAga2htcjogXCJbXFx1MTdFMC1cXHUxN0U5XVwiLFxuICBrbmRhOiBcIltcXHUwQ0U2LVxcdTBDRUZdXCIsXG4gIGxhb286IFwiW1xcdTBFRDAtXFx1MEVEOV1cIixcbiAgbGltYjogXCJbXFx1MTk0Ni1cXHUxOTRGXVwiLFxuICBtbHltOiBcIltcXHUwRDY2LVxcdTBENkZdXCIsXG4gIG1vbmc6IFwiW1xcdTE4MTAtXFx1MTgxOV1cIixcbiAgbXltcjogXCJbXFx1MTA0MC1cXHUxMDQ5XVwiLFxuICBvcnlhOiBcIltcXHUwQjY2LVxcdTBCNkZdXCIsXG4gIHRhbWxkZWM6IFwiW1xcdTBCRTYtXFx1MEJFRl1cIixcbiAgdGVsdTogXCJbXFx1MEM2Ni1cXHUwQzZGXVwiLFxuICB0aGFpOiBcIltcXHUwRTUwLVxcdTBFNTldXCIsXG4gIHRpYnQ6IFwiW1xcdTBGMjAtXFx1MEYyOV1cIixcbiAgbGF0bjogXCJcXFxcZFwiLFxufTtcblxuY29uc3QgbnVtYmVyaW5nU3lzdGVtc1VURjE2ID0ge1xuICBhcmFiOiBbMTYzMiwgMTY0MV0sXG4gIGFyYWJleHQ6IFsxNzc2LCAxNzg1XSxcbiAgYmFsaTogWzY5OTIsIDcwMDFdLFxuICBiZW5nOiBbMjUzNCwgMjU0M10sXG4gIGRldmE6IFsyNDA2LCAyNDE1XSxcbiAgZnVsbHdpZGU6IFs2NTI5NiwgNjUzMDNdLFxuICBndWpyOiBbMjc5MCwgMjc5OV0sXG4gIGtobXI6IFs2MTEyLCA2MTIxXSxcbiAga25kYTogWzMzMDIsIDMzMTFdLFxuICBsYW9vOiBbMzc5MiwgMzgwMV0sXG4gIGxpbWI6IFs2NDcwLCA2NDc5XSxcbiAgbWx5bTogWzM0MzAsIDM0MzldLFxuICBtb25nOiBbNjE2MCwgNjE2OV0sXG4gIG15bXI6IFs0MTYwLCA0MTY5XSxcbiAgb3J5YTogWzI5MTgsIDI5MjddLFxuICB0YW1sZGVjOiBbMzA0NiwgMzA1NV0sXG4gIHRlbHU6IFszMTc0LCAzMTgzXSxcbiAgdGhhaTogWzM2NjQsIDM2NzNdLFxuICB0aWJ0OiBbMzg3MiwgMzg4MV0sXG59O1xuXG5jb25zdCBoYW5pZGVjQ2hhcnMgPSBudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMucmVwbGFjZSgvW1xcW3xcXF1dL2csIFwiXCIpLnNwbGl0KFwiXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEaWdpdHMoc3RyKSB7XG4gIGxldCB2YWx1ZSA9IHBhcnNlSW50KHN0ciwgMTApO1xuICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgdmFsdWUgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgIGlmIChzdHJbaV0uc2VhcmNoKG51bWJlcmluZ1N5c3RlbXMuaGFuaWRlYykgIT09IC0xKSB7XG4gICAgICAgIHZhbHVlICs9IGhhbmlkZWNDaGFycy5pbmRleE9mKHN0cltpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBudW1iZXJpbmdTeXN0ZW1zVVRGMTYpIHtcbiAgICAgICAgICBjb25zdCBbbWluLCBtYXhdID0gbnVtYmVyaW5nU3lzdGVtc1VURjE2W2tleV07XG4gICAgICAgICAgaWYgKGNvZGUgPj0gbWluICYmIGNvZGUgPD0gbWF4KSB7XG4gICAgICAgICAgICB2YWx1ZSArPSBjb2RlIC0gbWluO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZ2l0UmVnZXgoeyBudW1iZXJpbmdTeXN0ZW0gfSwgYXBwZW5kID0gXCJcIikge1xuICByZXR1cm4gbmV3IFJlZ0V4cChgJHtudW1iZXJpbmdTeXN0ZW1zW251bWJlcmluZ1N5c3RlbSB8fCBcImxhdG5cIl19JHthcHBlbmR9YCk7XG59XG4iLCJpbXBvcnQgKiBhcyBGb3JtYXRzIGZyb20gXCIuL2Zvcm1hdHMuanNcIjtcbmltcG9ydCB7IHBpY2sgfSBmcm9tIFwiLi91dGlsLmpzXCI7XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShvYmopIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgT2JqZWN0LmtleXMob2JqKS5zb3J0KCkpO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGNvbnN0IG1vbnRoc0xvbmcgPSBbXG4gIFwiSmFudWFyeVwiLFxuICBcIkZlYnJ1YXJ5XCIsXG4gIFwiTWFyY2hcIixcbiAgXCJBcHJpbFwiLFxuICBcIk1heVwiLFxuICBcIkp1bmVcIixcbiAgXCJKdWx5XCIsXG4gIFwiQXVndXN0XCIsXG4gIFwiU2VwdGVtYmVyXCIsXG4gIFwiT2N0b2JlclwiLFxuICBcIk5vdmVtYmVyXCIsXG4gIFwiRGVjZW1iZXJcIixcbl07XG5cbmV4cG9ydCBjb25zdCBtb250aHNTaG9ydCA9IFtcbiAgXCJKYW5cIixcbiAgXCJGZWJcIixcbiAgXCJNYXJcIixcbiAgXCJBcHJcIixcbiAgXCJNYXlcIixcbiAgXCJKdW5cIixcbiAgXCJKdWxcIixcbiAgXCJBdWdcIixcbiAgXCJTZXBcIixcbiAgXCJPY3RcIixcbiAgXCJOb3ZcIixcbiAgXCJEZWNcIixcbl07XG5cbmV4cG9ydCBjb25zdCBtb250aHNOYXJyb3cgPSBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aHMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFsuLi5tb250aHNOYXJyb3ddO1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFsuLi5tb250aHNTaG9ydF07XG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBbLi4ubW9udGhzTG9uZ107XG4gICAgY2FzZSBcIm51bWVyaWNcIjpcbiAgICAgIHJldHVybiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiLCBcIjExXCIsIFwiMTJcIl07XG4gICAgY2FzZSBcIjItZGlnaXRcIjpcbiAgICAgIHJldHVybiBbXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLCBcIjA1XCIsIFwiMDZcIiwgXCIwN1wiLCBcIjA4XCIsIFwiMDlcIiwgXCIxMFwiLCBcIjExXCIsIFwiMTJcIl07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB3ZWVrZGF5c0xvbmcgPSBbXG4gIFwiTW9uZGF5XCIsXG4gIFwiVHVlc2RheVwiLFxuICBcIldlZG5lc2RheVwiLFxuICBcIlRodXJzZGF5XCIsXG4gIFwiRnJpZGF5XCIsXG4gIFwiU2F0dXJkYXlcIixcbiAgXCJTdW5kYXlcIixcbl07XG5cbmV4cG9ydCBjb25zdCB3ZWVrZGF5c1Nob3J0ID0gW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdO1xuXG5leHBvcnQgY29uc3Qgd2Vla2RheXNOYXJyb3cgPSBbXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIiwgXCJTXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gd2Vla2RheXMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFsuLi53ZWVrZGF5c05hcnJvd107XG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gWy4uLndlZWtkYXlzU2hvcnRdO1xuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gWy4uLndlZWtkYXlzTG9uZ107XG4gICAgY2FzZSBcIm51bWVyaWNcIjpcbiAgICAgIHJldHVybiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCJdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWVyaWRpZW1zID0gW1wiQU1cIiwgXCJQTVwiXTtcblxuZXhwb3J0IGNvbnN0IGVyYXNMb25nID0gW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdO1xuXG5leHBvcnQgY29uc3QgZXJhc1Nob3J0ID0gW1wiQkNcIiwgXCJBRFwiXTtcblxuZXhwb3J0IGNvbnN0IGVyYXNOYXJyb3cgPSBbXCJCXCIsIFwiQVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVyYXMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFsuLi5lcmFzTmFycm93XTtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBbLi4uZXJhc1Nob3J0XTtcbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIFsuLi5lcmFzTG9uZ107XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJpZGllbUZvckRhdGVUaW1lKGR0KSB7XG4gIHJldHVybiBtZXJpZGllbXNbZHQuaG91ciA8IDEyID8gMCA6IDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla2RheUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHdlZWtkYXlzKGxlbmd0aClbZHQud2Vla2RheSAtIDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBtb250aHMobGVuZ3RoKVtkdC5tb250aCAtIDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gZXJhcyhsZW5ndGgpW2R0LnllYXIgPCAwID8gMCA6IDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmVUaW1lKHVuaXQsIGNvdW50LCBudW1lcmljID0gXCJhbHdheXNcIiwgbmFycm93ID0gZmFsc2UpIHtcbiAgY29uc3QgdW5pdHMgPSB7XG4gICAgeWVhcnM6IFtcInllYXJcIiwgXCJ5ci5cIl0sXG4gICAgcXVhcnRlcnM6IFtcInF1YXJ0ZXJcIiwgXCJxdHIuXCJdLFxuICAgIG1vbnRoczogW1wibW9udGhcIiwgXCJtby5cIl0sXG4gICAgd2Vla3M6IFtcIndlZWtcIiwgXCJ3ay5cIl0sXG4gICAgZGF5czogW1wiZGF5XCIsIFwiZGF5XCIsIFwiZGF5c1wiXSxcbiAgICBob3VyczogW1wiaG91clwiLCBcImhyLlwiXSxcbiAgICBtaW51dGVzOiBbXCJtaW51dGVcIiwgXCJtaW4uXCJdLFxuICAgIHNlY29uZHM6IFtcInNlY29uZFwiLCBcInNlYy5cIl0sXG4gIH07XG5cbiAgY29uc3QgbGFzdGFibGUgPSBbXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCJdLmluZGV4T2YodW5pdCkgPT09IC0xO1xuXG4gIGlmIChudW1lcmljID09PSBcImF1dG9cIiAmJiBsYXN0YWJsZSkge1xuICAgIGNvbnN0IGlzRGF5ID0gdW5pdCA9PT0gXCJkYXlzXCI7XG4gICAgc3dpdGNoIChjb3VudCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInRvbW9ycm93XCIgOiBgbmV4dCAke3VuaXRzW3VuaXRdWzBdfWA7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInllc3RlcmRheVwiIDogYGxhc3QgJHt1bml0c1t1bml0XVswXX1gO1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInRvZGF5XCIgOiBgdGhpcyAke3VuaXRzW3VuaXRdWzBdfWA7XG4gICAgICBkZWZhdWx0OiAvLyBmYWxsIHRocm91Z2hcbiAgICB9XG4gIH1cblxuICBjb25zdCBpc0luUGFzdCA9IE9iamVjdC5pcyhjb3VudCwgLTApIHx8IGNvdW50IDwgMCxcbiAgICBmbXRWYWx1ZSA9IE1hdGguYWJzKGNvdW50KSxcbiAgICBzaW5ndWxhciA9IGZtdFZhbHVlID09PSAxLFxuICAgIGxpbFVuaXRzID0gdW5pdHNbdW5pdF0sXG4gICAgZm10VW5pdCA9IG5hcnJvd1xuICAgICAgPyBzaW5ndWxhclxuICAgICAgICA/IGxpbFVuaXRzWzFdXG4gICAgICAgIDogbGlsVW5pdHNbMl0gfHwgbGlsVW5pdHNbMV1cbiAgICAgIDogc2luZ3VsYXJcbiAgICAgID8gdW5pdHNbdW5pdF1bMF1cbiAgICAgIDogdW5pdDtcbiAgcmV0dXJuIGlzSW5QYXN0ID8gYCR7Zm10VmFsdWV9ICR7Zm10VW5pdH0gYWdvYCA6IGBpbiAke2ZtdFZhbHVlfSAke2ZtdFVuaXR9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFN0cmluZyhrbm93bkZvcm1hdCkge1xuICAvLyB0aGVzZSBhbGwgaGF2ZSB0aGUgb2Zmc2V0cyByZW1vdmVkIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhlbVxuICAvLyB3aXRob3V0IGFsbCB0aGUgaW50bCBzdHVmZiB0aGlzIGlzIGJhY2tmaWxsaW5nXG4gIGNvbnN0IGZpbHRlcmVkID0gcGljayhrbm93bkZvcm1hdCwgW1xuICAgICAgXCJ3ZWVrZGF5XCIsXG4gICAgICBcImVyYVwiLFxuICAgICAgXCJ5ZWFyXCIsXG4gICAgICBcIm1vbnRoXCIsXG4gICAgICBcImRheVwiLFxuICAgICAgXCJob3VyXCIsXG4gICAgICBcIm1pbnV0ZVwiLFxuICAgICAgXCJzZWNvbmRcIixcbiAgICAgIFwidGltZVpvbmVOYW1lXCIsXG4gICAgICBcImhvdXJDeWNsZVwiLFxuICAgIF0pLFxuICAgIGtleSA9IHN0cmluZ2lmeShmaWx0ZXJlZCksXG4gICAgZGF0ZVRpbWVIdWdlID0gXCJFRUVFLCBMTExMIGQsIHl5eXksIGg6bW0gYVwiO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9TSE9SVCk6XG4gICAgICByZXR1cm4gXCJNL2QveXl5eVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9NRUQpOlxuICAgICAgcmV0dXJuIFwiTExMIGQsIHl5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfTUVEX1dJVEhfV0VFS0RBWSk6XG4gICAgICByZXR1cm4gXCJFRUUsIExMTCBkLCB5eXl5XCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFX0ZVTEwpOlxuICAgICAgcmV0dXJuIFwiTExMTCBkLCB5eXl5XCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFX0hVR0UpOlxuICAgICAgcmV0dXJuIFwiRUVFRSwgTExMTCBkLCB5eXl5XCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FX1NJTVBMRSk6XG4gICAgICByZXR1cm4gXCJoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcImg6bW06c3MgYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV9XSVRIX1NIT1JUX09GRlNFVCk6XG4gICAgICByZXR1cm4gXCJoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfV0lUSF9MT05HX09GRlNFVCk6XG4gICAgICByZXR1cm4gXCJoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfMjRfU0lNUExFKTpcbiAgICAgIHJldHVybiBcIkhIOm1tXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FXzI0X1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJISDptbTpzc1wiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCk6XG4gICAgICByZXR1cm4gXCJISDptbVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUKTpcbiAgICAgIHJldHVybiBcIkhIOm1tXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9TSE9SVCk6XG4gICAgICByZXR1cm4gXCJNL2QveXl5eSwgaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9NRUQpOlxuICAgICAgcmV0dXJuIFwiTExMIGQsIHl5eXksIGg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfRlVMTCk6XG4gICAgICByZXR1cm4gXCJMTExMIGQsIHl5eXksIGg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfSFVHRSk6XG4gICAgICByZXR1cm4gZGF0ZVRpbWVIdWdlO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIk0vZC95eXl5LCBoOm1tOnNzIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiTExMIGQsIHl5eXksIGg6bW06c3MgYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSk6XG4gICAgICByZXR1cm4gXCJFRUUsIGQgTExMIHl5eXksIGg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiTExMTCBkLCB5eXl5LCBoOm1tOnNzIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkVFRUUsIExMTEwgZCwgeXl5eSwgaDptbTpzcyBhXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkYXRlVGltZUh1Z2U7XG4gIH1cbn1cbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBuID0gXCJudW1lcmljXCIsXG4gIHMgPSBcInNob3J0XCIsXG4gIGwgPSBcImxvbmdcIjtcblxuZXhwb3J0IGNvbnN0IERBVEVfU0hPUlQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURV9NRUQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURV9NRURfV0lUSF9XRUVLREFZID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBzLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVfRlVMTCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFX0hVR0UgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IGwsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9TSU1QTEUgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1dJVEhfU0VDT05EUyA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9XSVRIX1NIT1JUX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogcyxcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1dJVEhfTE9OR19PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IGwsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV8yNF9TSU1QTEUgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfMjRfV0lUSF9TRUNPTkRTID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gIHRpbWVab25lTmFtZTogcyxcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gIHRpbWVab25lTmFtZTogbCxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9TSE9SVCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfTUVEID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgd2Vla2RheTogcyxcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX0ZVTEwgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgdGltZVpvbmVOYW1lOiBzLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBzLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX0hVR0UgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IGwsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgdGltZVpvbmVOYW1lOiBsLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBsLFxufTtcbiIsImltcG9ydCAqIGFzIEVuZ2xpc2ggZnJvbSBcIi4vZW5nbGlzaC5qc1wiO1xuaW1wb3J0ICogYXMgRm9ybWF0cyBmcm9tIFwiLi9mb3JtYXRzLmpzXCI7XG5pbXBvcnQgeyBwYWRTdGFydCB9IGZyb20gXCIuL3V0aWwuanNcIjtcblxuZnVuY3Rpb24gc3RyaW5naWZ5VG9rZW5zKHNwbGl0cywgdG9rZW5Ub1N0cmluZykge1xuICBsZXQgcyA9IFwiXCI7XG4gIGZvciAoY29uc3QgdG9rZW4gb2Ygc3BsaXRzKSB7XG4gICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICAgIHMgKz0gdG9rZW4udmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzICs9IHRva2VuVG9TdHJpbmcodG9rZW4udmFsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHM7XG59XG5cbmNvbnN0IG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHMgPSB7XG4gIEQ6IEZvcm1hdHMuREFURV9TSE9SVCxcbiAgREQ6IEZvcm1hdHMuREFURV9NRUQsXG4gIERERDogRm9ybWF0cy5EQVRFX0ZVTEwsXG4gIEREREQ6IEZvcm1hdHMuREFURV9IVUdFLFxuICB0OiBGb3JtYXRzLlRJTUVfU0lNUExFLFxuICB0dDogRm9ybWF0cy5USU1FX1dJVEhfU0VDT05EUyxcbiAgdHR0OiBGb3JtYXRzLlRJTUVfV0lUSF9TSE9SVF9PRkZTRVQsXG4gIHR0dHQ6IEZvcm1hdHMuVElNRV9XSVRIX0xPTkdfT0ZGU0VULFxuICBUOiBGb3JtYXRzLlRJTUVfMjRfU0lNUExFLFxuICBUVDogRm9ybWF0cy5USU1FXzI0X1dJVEhfU0VDT05EUyxcbiAgVFRUOiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQsXG4gIFRUVFQ6IEZvcm1hdHMuVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VULFxuICBmOiBGb3JtYXRzLkRBVEVUSU1FX1NIT1JULFxuICBmZjogRm9ybWF0cy5EQVRFVElNRV9NRUQsXG4gIGZmZjogRm9ybWF0cy5EQVRFVElNRV9GVUxMLFxuICBmZmZmOiBGb3JtYXRzLkRBVEVUSU1FX0hVR0UsXG4gIEY6IEZvcm1hdHMuREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTLFxuICBGRjogRm9ybWF0cy5EQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTLFxuICBGRkY6IEZvcm1hdHMuREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMsXG4gIEZGRkY6IEZvcm1hdHMuREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMsXG59O1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybWF0dGVyIHtcbiAgc3RhdGljIGNyZWF0ZShsb2NhbGUsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgRm9ybWF0dGVyKGxvY2FsZSwgb3B0cyk7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VGb3JtYXQoZm10KSB7XG4gICAgbGV0IGN1cnJlbnQgPSBudWxsLFxuICAgICAgY3VycmVudEZ1bGwgPSBcIlwiLFxuICAgICAgYnJhY2tldGVkID0gZmFsc2U7XG4gICAgY29uc3Qgc3BsaXRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGMgPSBmbXQuY2hhckF0KGkpO1xuICAgICAgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBicmFja2V0ZWQsIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IG51bGw7XG4gICAgICAgIGN1cnJlbnRGdWxsID0gXCJcIjtcbiAgICAgICAgYnJhY2tldGVkID0gIWJyYWNrZXRlZDtcbiAgICAgIH0gZWxzZSBpZiAoYnJhY2tldGVkKSB7XG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XG4gICAgICB9IGVsc2UgaWYgKGMgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgY3VycmVudEZ1bGwgKz0gYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBmYWxzZSwgdmFsOiBjdXJyZW50RnVsbCB9KTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50RnVsbCA9IGM7XG4gICAgICAgIGN1cnJlbnQgPSBjO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICBzcGxpdHMucHVzaCh7IGxpdGVyYWw6IGJyYWNrZXRlZCwgdmFsOiBjdXJyZW50RnVsbCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRzO1xuICB9XG5cbiAgc3RhdGljIG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pIHtcbiAgICByZXR1cm4gbWFjcm9Ub2tlblRvRm9ybWF0T3B0c1t0b2tlbl07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihsb2NhbGUsIGZvcm1hdE9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSBmb3JtYXRPcHRzO1xuICAgIHRoaXMubG9jID0gbG9jYWxlO1xuICAgIHRoaXMuc3lzdGVtTG9jID0gbnVsbDtcbiAgfVxuXG4gIGZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBvcHRzKSB7XG4gICAgaWYgKHRoaXMuc3lzdGVtTG9jID09PSBudWxsKSB7XG4gICAgICB0aGlzLnN5c3RlbUxvYyA9IHRoaXMubG9jLnJlZGVmYXVsdFRvU3lzdGVtKCk7XG4gICAgfVxuICAgIGNvbnN0IGRmID0gdGhpcy5zeXN0ZW1Mb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcbiAgfVxuXG4gIGZvcm1hdERhdGVUaW1lKGR0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBkZiA9IHRoaXMubG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XG4gIH1cblxuICBmb3JtYXREYXRlVGltZVBhcnRzKGR0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBkZiA9IHRoaXMubG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcbiAgICByZXR1cm4gZGYuZm9ybWF0VG9QYXJ0cygpO1xuICB9XG5cbiAgcmVzb2x2ZWRPcHRpb25zKGR0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBkZiA9IHRoaXMubG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcbiAgICByZXR1cm4gZGYucmVzb2x2ZWRPcHRpb25zKCk7XG4gIH1cblxuICBudW0obiwgcCA9IDApIHtcbiAgICAvLyB3ZSBnZXQgc29tZSBwZXJmIG91dCBvZiBkb2luZyB0aGlzIGhlcmUsIGFubm95aW5nbHlcbiAgICBpZiAodGhpcy5vcHRzLmZvcmNlU2ltcGxlKSB7XG4gICAgICByZXR1cm4gcGFkU3RhcnQobiwgcCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0cyA9IHsgLi4udGhpcy5vcHRzIH07XG5cbiAgICBpZiAocCA+IDApIHtcbiAgICAgIG9wdHMucGFkVG8gPSBwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxvYy5udW1iZXJGb3JtYXR0ZXIob3B0cykuZm9ybWF0KG4pO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmbXQpIHtcbiAgICBjb25zdCBrbm93bkVuZ2xpc2ggPSB0aGlzLmxvYy5saXN0aW5nTW9kZSgpID09PSBcImVuXCIsXG4gICAgICB1c2VEYXRlVGltZUZvcm1hdHRlciA9IHRoaXMubG9jLm91dHB1dENhbGVuZGFyICYmIHRoaXMubG9jLm91dHB1dENhbGVuZGFyICE9PSBcImdyZWdvcnlcIixcbiAgICAgIHN0cmluZyA9IChvcHRzLCBleHRyYWN0KSA9PiB0aGlzLmxvYy5leHRyYWN0KGR0LCBvcHRzLCBleHRyYWN0KSxcbiAgICAgIGZvcm1hdE9mZnNldCA9IChvcHRzKSA9PiB7XG4gICAgICAgIGlmIChkdC5pc09mZnNldEZpeGVkICYmIGR0Lm9mZnNldCA9PT0gMCAmJiBvcHRzLmFsbG93Wikge1xuICAgICAgICAgIHJldHVybiBcIlpcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkdC5pc1ZhbGlkID8gZHQuem9uZS5mb3JtYXRPZmZzZXQoZHQudHMsIG9wdHMuZm9ybWF0KSA6IFwiXCI7XG4gICAgICB9LFxuICAgICAgbWVyaWRpZW0gPSAoKSA9PlxuICAgICAgICBrbm93bkVuZ2xpc2hcbiAgICAgICAgICA/IEVuZ2xpc2gubWVyaWRpZW1Gb3JEYXRlVGltZShkdClcbiAgICAgICAgICA6IHN0cmluZyh7IGhvdXI6IFwibnVtZXJpY1wiLCBob3VyQ3ljbGU6IFwiaDEyXCIgfSwgXCJkYXlwZXJpb2RcIiksXG4gICAgICBtb250aCA9IChsZW5ndGgsIHN0YW5kYWxvbmUpID0+XG4gICAgICAgIGtub3duRW5nbGlzaFxuICAgICAgICAgID8gRW5nbGlzaC5tb250aEZvckRhdGVUaW1lKGR0LCBsZW5ndGgpXG4gICAgICAgICAgOiBzdHJpbmcoc3RhbmRhbG9uZSA/IHsgbW9udGg6IGxlbmd0aCB9IDogeyBtb250aDogbGVuZ3RoLCBkYXk6IFwibnVtZXJpY1wiIH0sIFwibW9udGhcIiksXG4gICAgICB3ZWVrZGF5ID0gKGxlbmd0aCwgc3RhbmRhbG9uZSkgPT5cbiAgICAgICAga25vd25FbmdsaXNoXG4gICAgICAgICAgPyBFbmdsaXNoLndlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKVxuICAgICAgICAgIDogc3RyaW5nKFxuICAgICAgICAgICAgICBzdGFuZGFsb25lID8geyB3ZWVrZGF5OiBsZW5ndGggfSA6IHsgd2Vla2RheTogbGVuZ3RoLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfSxcbiAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCJcbiAgICAgICAgICAgICksXG4gICAgICBtYXliZU1hY3JvID0gKHRva2VuKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdE9wdHMgPSBGb3JtYXR0ZXIubWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbik7XG4gICAgICAgIGlmIChmb3JtYXRPcHRzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQoZHQsIGZvcm1hdE9wdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVyYSA9IChsZW5ndGgpID0+XG4gICAgICAgIGtub3duRW5nbGlzaCA/IEVuZ2xpc2guZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgOiBzdHJpbmcoeyBlcmE6IGxlbmd0aCB9LCBcImVyYVwiKSxcbiAgICAgIHRva2VuVG9TdHJpbmcgPSAodG9rZW4pID0+IHtcbiAgICAgICAgLy8gV2hlcmUgcG9zc2libGU6IGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL2RhdGUtdGltZS0xL2RhdGUtdGltZSNUT0MtU3RhbmRhbG9uZS12cy4tRm9ybWF0LVN0eWxlc1xuICAgICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgICAgLy8gbXNcbiAgICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbGxpc2Vjb25kKTtcbiAgICAgICAgICBjYXNlIFwidVwiOlxuICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICBjYXNlIFwiU1NTXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWlsbGlzZWNvbmQsIDMpO1xuICAgICAgICAgIC8vIHNlY29uZHNcbiAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnNlY29uZCk7XG4gICAgICAgICAgY2FzZSBcInNzXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuc2Vjb25kLCAyKTtcbiAgICAgICAgICAvLyBmcmFjdGlvbmFsIHNlY29uZHNcbiAgICAgICAgICBjYXNlIFwidXVcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0Lm1pbGxpc2Vjb25kIC8gMTApLCAyKTtcbiAgICAgICAgICBjYXNlIFwidXV1XCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oTWF0aC5mbG9vcihkdC5taWxsaXNlY29uZCAvIDEwMCkpO1xuICAgICAgICAgIC8vIG1pbnV0ZXNcbiAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbnV0ZSk7XG4gICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWludXRlLCAyKTtcbiAgICAgICAgICAvLyBob3Vyc1xuICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIpO1xuICAgICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIgJSAxMiA9PT0gMCA/IDEyIDogZHQuaG91ciAlIDEyLCAyKTtcbiAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIpO1xuICAgICAgICAgIGNhc2UgXCJISFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIsIDIpO1xuICAgICAgICAgIC8vIG9mZnNldFxuICAgICAgICAgIGNhc2UgXCJaXCI6XG4gICAgICAgICAgICAvLyBsaWtlICs2XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiBcIm5hcnJvd1wiLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XG4gICAgICAgICAgY2FzZSBcIlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlICswNjowMFxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7IGZvcm1hdDogXCJzaG9ydFwiLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlwiOlxuICAgICAgICAgICAgLy8gbGlrZSArMDYwMFxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7IGZvcm1hdDogXCJ0ZWNoaWVcIiwgYWxsb3daOiB0aGlzLm9wdHMuYWxsb3daIH0pO1xuICAgICAgICAgIGNhc2UgXCJaWlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEVTVFxuICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywgeyBmb3JtYXQ6IFwic2hvcnRcIiwgbG9jYWxlOiB0aGlzLmxvYy5sb2NhbGUgfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEVhc3Rlcm4gU3RhbmRhcmQgVGltZVxuICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywgeyBmb3JtYXQ6IFwibG9uZ1wiLCBsb2NhbGU6IHRoaXMubG9jLmxvY2FsZSB9KTtcbiAgICAgICAgICAvLyB6b25lXG4gICAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgQW1lcmljYS9OZXdfWW9ya1xuICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmVOYW1lO1xuICAgICAgICAgIC8vIG1lcmlkaWVtc1xuICAgICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICByZXR1cm4gbWVyaWRpZW0oKTtcbiAgICAgICAgICAvLyBkYXRlc1xuICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoeyBkYXk6IFwibnVtZXJpY1wiIH0sIFwiZGF5XCIpIDogdGhpcy5udW0oZHQuZGF5KTtcbiAgICAgICAgICBjYXNlIFwiZGRcIjpcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IGRheTogXCIyLWRpZ2l0XCIgfSwgXCJkYXlcIikgOiB0aGlzLm51bShkdC5kYXksIDIpO1xuICAgICAgICAgIC8vIHdlZWtkYXlzIC0gc3RhbmRhbG9uZVxuICAgICAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrZGF5KTtcbiAgICAgICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJzaG9ydFwiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVHVlc2RheSdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibG9uZ1wiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1QnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcIm5hcnJvd1wiLCB0cnVlKTtcbiAgICAgICAgICAvLyB3ZWVrZGF5cyAtIGZvcm1hdFxuICAgICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrZGF5KTtcbiAgICAgICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJzaG9ydFwiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcImxvbmdcIiwgZmFsc2UpO1xuICAgICAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVCdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIGZhbHNlKTtcbiAgICAgICAgICAvLyBtb250aHMgLSBzdGFuZGFsb25lXG4gICAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6IFwibnVtZXJpY1wiLCBkYXk6IFwibnVtZXJpY1wiIH0sIFwibW9udGhcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCk7XG4gICAgICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAxLCBkb2Vzbid0IHNlZW0gdG8gd29ya1xuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6IFwiMi1kaWdpdFwiLCBkYXk6IFwibnVtZXJpY1wiIH0sIFwibW9udGhcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCwgMik7XG4gICAgICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICAgIHJldHVybiBtb250aChcInNob3J0XCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEphbnVhcnlcbiAgICAgICAgICAgIHJldHVybiBtb250aChcImxvbmdcIiwgdHJ1ZSk7XG4gICAgICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEpcbiAgICAgICAgICAgIHJldHVybiBtb250aChcIm5hcnJvd1wiLCB0cnVlKTtcbiAgICAgICAgICAvLyBtb250aHMgLSBmb3JtYXRcbiAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoKTtcbiAgICAgICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDFcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiBcIjItZGlnaXRcIiB9LCBcIm1vbnRoXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgsIDIpO1xuICAgICAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFuXG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJzaG9ydFwiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibG9uZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEpcbiAgICAgICAgICAgIHJldHVybiBtb250aChcIm5hcnJvd1wiLCBmYWxzZSk7XG4gICAgICAgICAgLy8geWVhcnNcbiAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAyMDE0XG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoeyB5ZWFyOiBcIm51bWVyaWNcIiB9LCBcInllYXJcIikgOiB0aGlzLm51bShkdC55ZWFyKTtcbiAgICAgICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMTRcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6IFwiMi1kaWdpdFwiIH0sIFwieWVhclwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIudG9TdHJpbmcoKS5zbGljZSgtMiksIDIpO1xuICAgICAgICAgIGNhc2UgXCJ5eXl5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAwMTJcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6IFwibnVtZXJpY1wiIH0sIFwieWVhclwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIsIDQpO1xuICAgICAgICAgIGNhc2UgXCJ5eXl5eXlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDAwMDEyXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyB5ZWFyOiBcIm51bWVyaWNcIiB9LCBcInllYXJcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC55ZWFyLCA2KTtcbiAgICAgICAgICAvLyBlcmFzXG4gICAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgQURcbiAgICAgICAgICAgIHJldHVybiBlcmEoXCJzaG9ydFwiKTtcbiAgICAgICAgICBjYXNlIFwiR0dcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgQW5ubyBEb21pbmlcbiAgICAgICAgICAgIHJldHVybiBlcmEoXCJsb25nXCIpO1xuICAgICAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICAgICAgcmV0dXJuIGVyYShcIm5hcnJvd1wiKTtcbiAgICAgICAgICBjYXNlIFwia2tcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrWWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG4gICAgICAgICAgY2FzZSBcImtra2tcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrWWVhciwgNCk7XG4gICAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrTnVtYmVyKTtcbiAgICAgICAgICBjYXNlIFwiV1dcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrTnVtYmVyLCAyKTtcbiAgICAgICAgICBjYXNlIFwib1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm9yZGluYWwpO1xuICAgICAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5vcmRpbmFsLCAzKTtcbiAgICAgICAgICBjYXNlIFwicVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQucXVhcnRlcik7XG4gICAgICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAxXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQucXVhcnRlciwgMik7XG4gICAgICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0LnRzIC8gMTAwMCkpO1xuICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQudHMpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbWF5YmVNYWNybyh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLCB0b2tlblRvU3RyaW5nKTtcbiAgfVxuXG4gIGZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyhkdXIsIGZtdCkge1xuICAgIGNvbnN0IHRva2VuVG9GaWVsZCA9ICh0b2tlbikgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XG4gICAgICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgICAgIHJldHVybiBcIm1pbGxpc2Vjb25kXCI7XG4gICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgIHJldHVybiBcInNlY29uZFwiO1xuICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJtaW51dGVcIjtcbiAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiaG91clwiO1xuICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJkYXlcIjtcbiAgICAgICAgICBjYXNlIFwid1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwid2Vla1wiO1xuICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJtb250aFwiO1xuICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICByZXR1cm4gXCJ5ZWFyXCI7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5Ub1N0cmluZyA9IChsaWxkdXIpID0+ICh0b2tlbikgPT4ge1xuICAgICAgICBjb25zdCBtYXBwZWQgPSB0b2tlblRvRmllbGQodG9rZW4pO1xuICAgICAgICBpZiAobWFwcGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGxpbGR1ci5nZXQobWFwcGVkKSwgdG9rZW4ubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2tlbnMgPSBGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSxcbiAgICAgIHJlYWxUb2tlbnMgPSB0b2tlbnMucmVkdWNlKFxuICAgICAgICAoZm91bmQsIHsgbGl0ZXJhbCwgdmFsIH0pID0+IChsaXRlcmFsID8gZm91bmQgOiBmb3VuZC5jb25jYXQodmFsKSksXG4gICAgICAgIFtdXG4gICAgICApLFxuICAgICAgY29sbGFwc2VkID0gZHVyLnNoaWZ0VG8oLi4ucmVhbFRva2Vucy5tYXAodG9rZW5Ub0ZpZWxkKS5maWx0ZXIoKHQpID0+IHQpKTtcbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKHRva2VucywgdG9rZW5Ub1N0cmluZyhjb2xsYXBzZWQpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52YWxpZCB7XG4gIGNvbnN0cnVjdG9yKHJlYXNvbiwgZXhwbGFuYXRpb24pIHtcbiAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgICB0aGlzLmV4cGxhbmF0aW9uID0gZXhwbGFuYXRpb247XG4gIH1cblxuICB0b01lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZXhwbGFuYXRpb24pIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnJlYXNvbn06ICR7dGhpcy5leHBsYW5hdGlvbn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFzb247XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBwYWRTdGFydCwgcm91bmRUbywgaGFzUmVsYXRpdmUgfSBmcm9tIFwiLi91dGlsLmpzXCI7XG5pbXBvcnQgKiBhcyBFbmdsaXNoIGZyb20gXCIuL2VuZ2xpc2guanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi4vZGF0ZXRpbWUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcblxuLy8gdG9kbyAtIHJlbWFwIGNhY2hpbmdcblxubGV0IGludGxMRkNhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWRMRihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XG4gIGxldCBkdGYgPSBpbnRsTEZDYWNoZVtrZXldO1xuICBpZiAoIWR0Zikge1xuICAgIGR0ZiA9IG5ldyBJbnRsLkxpc3RGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsTEZDYWNoZVtrZXldID0gZHRmO1xuICB9XG4gIHJldHVybiBkdGY7XG59XG5cbmxldCBpbnRsRFRDYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0Q2FjaGVkRFRGKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgbGV0IGR0ZiA9IGludGxEVENhY2hlW2tleV07XG4gIGlmICghZHRmKSB7XG4gICAgZHRmID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsRFRDYWNoZVtrZXldID0gZHRmO1xuICB9XG4gIHJldHVybiBkdGY7XG59XG5cbmxldCBpbnRsTnVtQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZElORihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XG4gIGxldCBpbmYgPSBpbnRsTnVtQ2FjaGVba2V5XTtcbiAgaWYgKCFpbmYpIHtcbiAgICBpbmYgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsTnVtQ2FjaGVba2V5XSA9IGluZjtcbiAgfVxuICByZXR1cm4gaW5mO1xufVxuXG5sZXQgaW50bFJlbENhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWRSVEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcbiAgY29uc3QgeyBiYXNlLCAuLi5jYWNoZUtleU9wdHMgfSA9IG9wdHM7IC8vIGV4Y2x1ZGUgYGJhc2VgIGZyb20gdGhlIG9wdGlvbnNcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgY2FjaGVLZXlPcHRzXSk7XG4gIGxldCBpbmYgPSBpbnRsUmVsQ2FjaGVba2V5XTtcbiAgaWYgKCFpbmYpIHtcbiAgICBpbmYgPSBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsUmVsQ2FjaGVba2V5XSA9IGluZjtcbiAgfVxuICByZXR1cm4gaW5mO1xufVxuXG5sZXQgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuZnVuY3Rpb24gc3lzdGVtTG9jYWxlKCkge1xuICBpZiAoc3lzTG9jYWxlQ2FjaGUpIHtcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH0gZWxzZSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZTtcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlU3RyKSB7XG4gIC8vIEkgcmVhbGx5IHdhbnQgdG8gYXZvaWQgd3JpdGluZyBhIEJDUCA0NyBwYXJzZXJcbiAgLy8gc2VlLCBlLmcuIGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vYmNwLTQ3XG4gIC8vIEluc3RlYWQsIHdlJ2xsIGRvIHRoaXM6XG5cbiAgLy8gYSkgaWYgdGhlIHN0cmluZyBoYXMgbm8gLXUgZXh0ZW5zaW9ucywganVzdCBsZWF2ZSBpdCBhbG9uZVxuICAvLyBiKSBpZiBpdCBkb2VzLCB1c2UgSW50bCB0byByZXNvbHZlIGV2ZXJ5dGhpbmdcbiAgLy8gYykgaWYgSW50bCBmYWlscywgdHJ5IGFnYWluIHdpdGhvdXQgdGhlIC11XG5cbiAgY29uc3QgdUluZGV4ID0gbG9jYWxlU3RyLmluZGV4T2YoXCItdS1cIik7XG4gIGlmICh1SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIFtsb2NhbGVTdHJdO1xuICB9IGVsc2Uge1xuICAgIGxldCBvcHRpb25zO1xuICAgIGNvbnN0IHNtYWxsZXIgPSBsb2NhbGVTdHIuc3Vic3RyaW5nKDAsIHVJbmRleCk7XG4gICAgdHJ5IHtcbiAgICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYobG9jYWxlU3RyKS5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKHNtYWxsZXIpLnJlc29sdmVkT3B0aW9ucygpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbnVtYmVyaW5nU3lzdGVtLCBjYWxlbmRhciB9ID0gb3B0aW9ucztcbiAgICAvLyByZXR1cm4gdGhlIHNtYWxsZXIgb25lIHNvIHRoYXQgd2UgY2FuIGFwcGVuZCB0aGUgY2FsZW5kYXIgYW5kIG51bWJlcmluZyBvdmVycmlkZXMgdG8gaXRcbiAgICByZXR1cm4gW3NtYWxsZXIsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXJdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGxDb25maWdTdHJpbmcobG9jYWxlU3RyLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSB7XG4gIGlmIChvdXRwdXRDYWxlbmRhciB8fCBudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICBsb2NhbGVTdHIgKz0gXCItdVwiO1xuXG4gICAgaWYgKG91dHB1dENhbGVuZGFyKSB7XG4gICAgICBsb2NhbGVTdHIgKz0gYC1jYS0ke291dHB1dENhbGVuZGFyfWA7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlcmluZ1N5c3RlbSkge1xuICAgICAgbG9jYWxlU3RyICs9IGAtbnUtJHtudW1iZXJpbmdTeXN0ZW19YDtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZVN0cjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbG9jYWxlU3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcE1vbnRocyhmKSB7XG4gIGNvbnN0IG1zID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICBjb25zdCBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCBpLCAxKTtcbiAgICBtcy5wdXNoKGYoZHQpKTtcbiAgfVxuICByZXR1cm4gbXM7XG59XG5cbmZ1bmN0aW9uIG1hcFdlZWtkYXlzKGYpIHtcbiAgY29uc3QgbXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgY29uc3QgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzICsgaSk7XG4gICAgbXMucHVzaChmKGR0KSk7XG4gIH1cbiAgcmV0dXJuIG1zO1xufVxuXG5mdW5jdGlvbiBsaXN0U3R1ZmYobG9jLCBsZW5ndGgsIGRlZmF1bHRPSywgZW5nbGlzaEZuLCBpbnRsRm4pIHtcbiAgY29uc3QgbW9kZSA9IGxvYy5saXN0aW5nTW9kZShkZWZhdWx0T0spO1xuXG4gIGlmIChtb2RlID09PSBcImVycm9yXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmIChtb2RlID09PSBcImVuXCIpIHtcbiAgICByZXR1cm4gZW5nbGlzaEZuKGxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGludGxGbihsZW5ndGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzRmFzdE51bWJlcnMobG9jKSB7XG4gIGlmIChsb2MubnVtYmVyaW5nU3lzdGVtICYmIGxvYy5udW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICBsb2MubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIiB8fFxuICAgICAgIWxvYy5sb2NhbGUgfHxcbiAgICAgIGxvYy5sb2NhbGUuc3RhcnRzV2l0aChcImVuXCIpIHx8XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2MuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIlxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNsYXNzIFBvbHlOdW1iZXJGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihpbnRsLCBmb3JjZVNpbXBsZSwgb3B0cykge1xuICAgIHRoaXMucGFkVG8gPSBvcHRzLnBhZFRvIHx8IDA7XG4gICAgdGhpcy5mbG9vciA9IG9wdHMuZmxvb3IgfHwgZmFsc2U7XG5cbiAgICBjb25zdCB7IHBhZFRvLCBmbG9vciwgLi4ub3RoZXJPcHRzIH0gPSBvcHRzO1xuXG4gICAgaWYgKCFmb3JjZVNpbXBsZSB8fCBPYmplY3Qua2V5cyhvdGhlck9wdHMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGludGxPcHRzID0geyB1c2VHcm91cGluZzogZmFsc2UsIC4uLm9wdHMgfTtcbiAgICAgIGlmIChvcHRzLnBhZFRvID4gMCkgaW50bE9wdHMubWluaW11bUludGVnZXJEaWdpdHMgPSBvcHRzLnBhZFRvO1xuICAgICAgdGhpcy5pbmYgPSBnZXRDYWNoZWRJTkYoaW50bCwgaW50bE9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdChpKSB7XG4gICAgaWYgKHRoaXMuaW5mKSB7XG4gICAgICBjb25zdCBmaXhlZCA9IHRoaXMuZmxvb3IgPyBNYXRoLmZsb29yKGkpIDogaTtcbiAgICAgIHJldHVybiB0aGlzLmluZi5mb3JtYXQoZml4ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0byBtYXRjaCB0aGUgYnJvd3NlcidzIG51bWJlcmZvcm1hdHRlciBkZWZhdWx0c1xuICAgICAgY29uc3QgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IHJvdW5kVG8oaSwgMyk7XG4gICAgICByZXR1cm4gcGFkU3RhcnQoZml4ZWQsIHRoaXMucGFkVG8pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY2xhc3MgUG9seURhdGVGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkdCwgaW50bCwgb3B0cykge1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG5cbiAgICBsZXQgejtcbiAgICBpZiAoZHQuem9uZS5pc1VuaXZlcnNhbCkge1xuICAgICAgLy8gVVRDLTggb3IgRXRjL1VUQy04IGFyZSBub3QgcGFydCBvZiB0emRhdGEsIG9ubHkgRXRjL0dNVCs4IGFuZCB0aGUgbGlrZS5cbiAgICAgIC8vIFRoYXQgaXMgd2h5IGZpeGVkLW9mZnNldCBUWiBpcyBzZXQgdG8gdGhhdCB1bmxlc3MgaXQgaXM6XG4gICAgICAvLyAxLiBSZXByZXNlbnRpbmcgb2Zmc2V0IDAgd2hlbiBVVEMgaXMgdXNlZCB0byBtYWludGFpbiBwcmV2aW91cyBiZWhhdmlvciBhbmQgZG9lcyBub3QgYmVjb21lIEdNVC5cbiAgICAgIC8vIDIuIFVuc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyOlxuICAgICAgLy8gICAgLSBzb21lIGRvIG5vdCBzdXBwb3J0IEV0Yy9cbiAgICAgIC8vICAgIC0gPCBFdGMvR01ULTE0LCA+IEV0Yy9HTVQrMTIsIGFuZCAzMC1taW51dGUgb3IgNDUtbWludXRlIG9mZnNldHMgYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YVxuICAgICAgY29uc3QgZ210T2Zmc2V0ID0gLTEgKiAoZHQub2Zmc2V0IC8gNjApO1xuICAgICAgY29uc3Qgb2Zmc2V0WiA9IGdtdE9mZnNldCA+PSAwID8gYEV0Yy9HTVQrJHtnbXRPZmZzZXR9YCA6IGBFdGMvR01UJHtnbXRPZmZzZXR9YDtcbiAgICAgIGlmIChkdC5vZmZzZXQgIT09IDAgJiYgSUFOQVpvbmUuY3JlYXRlKG9mZnNldFopLnZhbGlkKSB7XG4gICAgICAgIHogPSBvZmZzZXRaO1xuICAgICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3QgYWxsIGZpeGVkLW9mZnNldCB6b25lcyBsaWtlIEV0Yy8rNDozMCBhcmUgcHJlc2VudCBpbiB0emRhdGEuXG4gICAgICAgIC8vIFNvIHdlIGhhdmUgdG8gbWFrZSBkby4gVHdvIGNhc2VzOlxuICAgICAgICAvLyAxLiBUaGUgZm9ybWF0IG9wdGlvbnMgdGVsbCB1cyB0byBzaG93IHRoZSB6b25lLiBXZSBjYW4ndCBkbyB0aGF0LCBzbyB0aGUgYmVzdFxuICAgICAgICAvLyB3ZSBjYW4gZG8gaXMgZm9ybWF0IHRoZSBkYXRlIGluIFVUQy5cbiAgICAgICAgLy8gMi4gVGhlIGZvcm1hdCBvcHRpb25zIGRvbid0IHRlbGwgdXMgdG8gc2hvdyB0aGUgem9uZS4gVGhlbiB3ZSBjYW4gYWRqdXN0IHRoZW1cbiAgICAgICAgLy8gdGhlIHRpbWUgYW5kIHRlbGwgdGhlIGZvcm1hdHRlciB0byBzaG93IGl0IHRvIHVzIGluIFVUQywgc28gdGhhdCB0aGUgdGltZSBpcyByaWdodFxuICAgICAgICAvLyBhbmQgdGhlIGJhZCB6b25lIGRvZXNuJ3Qgc2hvdyB1cC5cbiAgICAgICAgeiA9IFwiVVRDXCI7XG4gICAgICAgIGlmIChvcHRzLnRpbWVab25lTmFtZSkge1xuICAgICAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmR0ID0gZHQub2Zmc2V0ID09PSAwID8gZHQgOiBEYXRlVGltZS5mcm9tTWlsbGlzKGR0LnRzICsgZHQub2Zmc2V0ICogNjAgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZHQuem9uZS50eXBlID09PSBcInN5c3RlbVwiKSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICAgIHogPSBkdC56b25lLm5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgaW50bE9wdHMgPSB7IC4uLnRoaXMub3B0cyB9O1xuICAgIGlmICh6KSB7XG4gICAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHo7XG4gICAgfVxuICAgIHRoaXMuZHRmID0gZ2V0Q2FjaGVkRFRGKGludGwsIGludGxPcHRzKTtcbiAgfVxuXG4gIGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0KHRoaXMuZHQudG9KU0RhdGUoKSk7XG4gIH1cblxuICBmb3JtYXRUb1BhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLmR0Zi5mb3JtYXRUb1BhcnRzKHRoaXMuZHQudG9KU0RhdGUoKSk7XG4gIH1cblxuICByZXNvbHZlZE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHRmLnJlc29sdmVkT3B0aW9ucygpO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUG9seVJlbEZvcm1hdHRlciB7XG4gIGNvbnN0cnVjdG9yKGludGwsIGlzRW5nbGlzaCwgb3B0cykge1xuICAgIHRoaXMub3B0cyA9IHsgc3R5bGU6IFwibG9uZ1wiLCAuLi5vcHRzIH07XG4gICAgaWYgKCFpc0VuZ2xpc2ggJiYgaGFzUmVsYXRpdmUoKSkge1xuICAgICAgdGhpcy5ydGYgPSBnZXRDYWNoZWRSVEYoaW50bCwgb3B0cyk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0KGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEVuZ2xpc2guZm9ybWF0UmVsYXRpdmVUaW1lKHVuaXQsIGNvdW50LCB0aGlzLm9wdHMubnVtZXJpYywgdGhpcy5vcHRzLnN0eWxlICE9PSBcImxvbmdcIik7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0VG9QYXJ0cyhjb3VudCwgdW5pdCkge1xuICAgIGlmICh0aGlzLnJ0Zikge1xuICAgICAgcmV0dXJuIHRoaXMucnRmLmZvcm1hdFRvUGFydHMoY291bnQsIHVuaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbGUge1xuICBzdGF0aWMgZnJvbU9wdHMob3B0cykge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKG9wdHMubG9jYWxlLCBvcHRzLm51bWJlcmluZ1N5c3RlbSwgb3B0cy5vdXRwdXRDYWxlbmRhciwgb3B0cy5kZWZhdWx0VG9FTik7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciwgZGVmYXVsdFRvRU4gPSBmYWxzZSkge1xuICAgIGNvbnN0IHNwZWNpZmllZExvY2FsZSA9IGxvY2FsZSB8fCBTZXR0aW5ncy5kZWZhdWx0TG9jYWxlO1xuICAgIC8vIHRoZSBzeXN0ZW0gbG9jYWxlIGlzIHVzZWZ1bCBmb3IgaHVtYW4gcmVhZGFibGUgc3RyaW5ncyBidXQgYW5ub3lpbmcgZm9yIHBhcnNpbmcvZm9ybWF0dGluZyBrbm93biBmb3JtYXRzXG4gICAgY29uc3QgbG9jYWxlUiA9IHNwZWNpZmllZExvY2FsZSB8fCAoZGVmYXVsdFRvRU4gPyBcImVuLVVTXCIgOiBzeXN0ZW1Mb2NhbGUoKSk7XG4gICAgY29uc3QgbnVtYmVyaW5nU3lzdGVtUiA9IG51bWJlcmluZ1N5c3RlbSB8fCBTZXR0aW5ncy5kZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xuICAgIGNvbnN0IG91dHB1dENhbGVuZGFyUiA9IG91dHB1dENhbGVuZGFyIHx8IFNldHRpbmdzLmRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgICByZXR1cm4gbmV3IExvY2FsZShsb2NhbGVSLCBudW1iZXJpbmdTeXN0ZW1SLCBvdXRwdXRDYWxlbmRhclIsIHNwZWNpZmllZExvY2FsZSk7XG4gIH1cblxuICBzdGF0aWMgcmVzZXRDYWNoZSgpIHtcbiAgICBzeXNMb2NhbGVDYWNoZSA9IG51bGw7XG4gICAgaW50bERUQ2FjaGUgPSB7fTtcbiAgICBpbnRsTnVtQ2FjaGUgPSB7fTtcbiAgICBpbnRsUmVsQ2FjaGUgPSB7fTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0KHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyIH0gPSB7fSkge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihsb2NhbGUsIG51bWJlcmluZywgb3V0cHV0Q2FsZW5kYXIsIHNwZWNpZmllZExvY2FsZSkge1xuICAgIGNvbnN0IFtwYXJzZWRMb2NhbGUsIHBhcnNlZE51bWJlcmluZ1N5c3RlbSwgcGFyc2VkT3V0cHV0Q2FsZW5kYXJdID0gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlKTtcblxuICAgIHRoaXMubG9jYWxlID0gcGFyc2VkTG9jYWxlO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nIHx8IHBhcnNlZE51bWJlcmluZ1N5c3RlbSB8fCBudWxsO1xuICAgIHRoaXMub3V0cHV0Q2FsZW5kYXIgPSBvdXRwdXRDYWxlbmRhciB8fCBwYXJzZWRPdXRwdXRDYWxlbmRhciB8fCBudWxsO1xuICAgIHRoaXMuaW50bCA9IGludGxDb25maWdTdHJpbmcodGhpcy5sb2NhbGUsIHRoaXMubnVtYmVyaW5nU3lzdGVtLCB0aGlzLm91dHB1dENhbGVuZGFyKTtcblxuICAgIHRoaXMud2Vla2RheXNDYWNoZSA9IHsgZm9ybWF0OiB7fSwgc3RhbmRhbG9uZToge30gfTtcbiAgICB0aGlzLm1vbnRoc0NhY2hlID0geyBmb3JtYXQ6IHt9LCBzdGFuZGFsb25lOiB7fSB9O1xuICAgIHRoaXMubWVyaWRpZW1DYWNoZSA9IG51bGw7XG4gICAgdGhpcy5lcmFDYWNoZSA9IHt9O1xuXG4gICAgdGhpcy5zcGVjaWZpZWRMb2NhbGUgPSBzcGVjaWZpZWRMb2NhbGU7XG4gICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IG51bGw7XG4gIH1cblxuICBnZXQgZmFzdE51bWJlcnMoKSB7XG4gICAgaWYgKHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IHN1cHBvcnRzRmFzdE51bWJlcnModGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQ7XG4gIH1cblxuICBsaXN0aW5nTW9kZSgpIHtcbiAgICBjb25zdCBpc0FjdHVhbGx5RW4gPSB0aGlzLmlzRW5nbGlzaCgpO1xuICAgIGNvbnN0IGhhc05vV2VpcmRuZXNzID1cbiAgICAgICh0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gbnVsbCB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCIpICYmXG4gICAgICAodGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gbnVsbCB8fCB0aGlzLm91dHB1dENhbGVuZGFyID09PSBcImdyZWdvcnlcIik7XG4gICAgcmV0dXJuIGlzQWN0dWFsbHlFbiAmJiBoYXNOb1dlaXJkbmVzcyA/IFwiZW5cIiA6IFwiaW50bFwiO1xuICB9XG5cbiAgY2xvbmUoYWx0cykge1xuICAgIGlmICghYWx0cyB8fCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhbHRzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShcbiAgICAgICAgYWx0cy5sb2NhbGUgfHwgdGhpcy5zcGVjaWZpZWRMb2NhbGUsXG4gICAgICAgIGFsdHMubnVtYmVyaW5nU3lzdGVtIHx8IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBhbHRzLm91dHB1dENhbGVuZGFyIHx8IHRoaXMub3V0cHV0Q2FsZW5kYXIsXG4gICAgICAgIGFsdHMuZGVmYXVsdFRvRU4gfHwgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVkZWZhdWx0VG9FTihhbHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSh7IC4uLmFsdHMsIGRlZmF1bHRUb0VOOiB0cnVlIH0pO1xuICB9XG5cbiAgcmVkZWZhdWx0VG9TeXN0ZW0oYWx0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoeyAuLi5hbHRzLCBkZWZhdWx0VG9FTjogZmFsc2UgfSk7XG4gIH1cblxuICBtb250aHMobGVuZ3RoLCBmb3JtYXQgPSBmYWxzZSwgZGVmYXVsdE9LID0gdHJ1ZSkge1xuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIEVuZ2xpc2gubW9udGhzLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnRsID0gZm9ybWF0ID8geyBtb250aDogbGVuZ3RoLCBkYXk6IFwibnVtZXJpY1wiIH0gOiB7IG1vbnRoOiBsZW5ndGggfSxcbiAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuICAgICAgaWYgKCF0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICB0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSA9IG1hcE1vbnRocygoZHQpID0+IHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJtb250aFwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF07XG4gICAgfSk7XG4gIH1cblxuICB3ZWVrZGF5cyhsZW5ndGgsIGZvcm1hdCA9IGZhbHNlLCBkZWZhdWx0T0sgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIGRlZmF1bHRPSywgRW5nbGlzaC53ZWVrZGF5cywgKCkgPT4ge1xuICAgICAgY29uc3QgaW50bCA9IGZvcm1hdFxuICAgICAgICAgID8geyB3ZWVrZGF5OiBsZW5ndGgsIHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfVxuICAgICAgICAgIDogeyB3ZWVrZGF5OiBsZW5ndGggfSxcbiAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuICAgICAgaWYgKCF0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBXZWVrZGF5cygoZHQpID0+XG4gICAgICAgICAgdGhpcy5leHRyYWN0KGR0LCBpbnRsLCBcIndlZWtkYXlcIilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9XG5cbiAgbWVyaWRpZW1zKGRlZmF1bHRPSyA9IHRydWUpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKFxuICAgICAgdGhpcyxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIGRlZmF1bHRPSyxcbiAgICAgICgpID0+IEVuZ2xpc2gubWVyaWRpZW1zLFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBJbiB0aGVvcnkgdGhlcmUgY291bGQgYmUgYXJpYml0cmFyeSBkYXkgcGVyaW9kcy4gV2UncmUgZ29ubmEgYXNzdW1lIHRoZXJlIGFyZSBleGFjdGx5IHR3b1xuICAgICAgICAvLyBmb3IgQU0gYW5kIFBNLiBUaGlzIGlzIHByb2JhYmx5IHdyb25nLCBidXQgaXQncyBtYWtlcyBwYXJzaW5nIHdheSBlYXNpZXIuXG4gICAgICAgIGlmICghdGhpcy5tZXJpZGllbUNhY2hlKSB7XG4gICAgICAgICAgY29uc3QgaW50bCA9IHsgaG91cjogXCJudW1lcmljXCIsIGhvdXJDeWNsZTogXCJoMTJcIiB9O1xuICAgICAgICAgIHRoaXMubWVyaWRpZW1DYWNoZSA9IFtEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCA5KSwgRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgMTkpXS5tYXAoXG4gICAgICAgICAgICAoZHQpID0+IHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJkYXlwZXJpb2RcIilcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWVyaWRpZW1DYWNoZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZXJhcyhsZW5ndGgsIGRlZmF1bHRPSyA9IHRydWUpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBFbmdsaXNoLmVyYXMsICgpID0+IHtcbiAgICAgIGNvbnN0IGludGwgPSB7IGVyYTogbGVuZ3RoIH07XG5cbiAgICAgIC8vIFRoaXMgaXMgcHJvYmxlbWF0aWMuIERpZmZlcmVudCBjYWxlbmRhcnMgYXJlIGdvaW5nIHRvIGRlZmluZSBlcmFzIHRvdGFsbHkgZGlmZmVyZW50bHkuIFdoYXQgSSBuZWVkIGlzIHRoZSBtaW5pbXVtIHNldCBvZiBkYXRlc1xuICAgICAgLy8gdG8gZGVmaW5pdGVseSBlbnVtZXJhdGUgdGhlbS5cbiAgICAgIGlmICghdGhpcy5lcmFDYWNoZVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMuZXJhQ2FjaGVbbGVuZ3RoXSA9IFtEYXRlVGltZS51dGMoLTQwLCAxLCAxKSwgRGF0ZVRpbWUudXRjKDIwMTcsIDEsIDEpXS5tYXAoKGR0KSA9PlxuICAgICAgICAgIHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJlcmFcIilcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZXJhQ2FjaGVbbGVuZ3RoXTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4dHJhY3QoZHQsIGludGxPcHRzLCBmaWVsZCkge1xuICAgIGNvbnN0IGRmID0gdGhpcy5kdEZvcm1hdHRlcihkdCwgaW50bE9wdHMpLFxuICAgICAgcmVzdWx0cyA9IGRmLmZvcm1hdFRvUGFydHMoKSxcbiAgICAgIG1hdGNoaW5nID0gcmVzdWx0cy5maW5kKChtKSA9PiBtLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gZmllbGQpO1xuICAgIHJldHVybiBtYXRjaGluZyA/IG1hdGNoaW5nLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIG51bWJlckZvcm1hdHRlcihvcHRzID0ge30pIHtcbiAgICAvLyB0aGlzIGZvcmNlc2ltcGxlIG9wdGlvbiBpcyBuZXZlciB1c2VkICh0aGUgb25seSBjYWxsZXIgc2hvcnQtY2lyY3VpdHMgb24gaXQsIGJ1dCBpdCBzZWVtcyBzYWZlciB0byBsZWF2ZSlcbiAgICAvLyAoaW4gY29udHJhc3QsIHRoZSByZXN0IG9mIHRoZSBjb25kaXRpb24gaXMgdXNlZCBoZWF2aWx5KVxuICAgIHJldHVybiBuZXcgUG9seU51bWJlckZvcm1hdHRlcih0aGlzLmludGwsIG9wdHMuZm9yY2VTaW1wbGUgfHwgdGhpcy5mYXN0TnVtYmVycywgb3B0cyk7XG4gIH1cblxuICBkdEZvcm1hdHRlcihkdCwgaW50bE9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgUG9seURhdGVGb3JtYXR0ZXIoZHQsIHRoaXMuaW50bCwgaW50bE9wdHMpO1xuICB9XG5cbiAgcmVsRm9ybWF0dGVyKG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgUG9seVJlbEZvcm1hdHRlcih0aGlzLmludGwsIHRoaXMuaXNFbmdsaXNoKCksIG9wdHMpO1xuICB9XG5cbiAgbGlzdEZvcm1hdHRlcihvcHRzID0ge30pIHtcbiAgICByZXR1cm4gZ2V0Q2FjaGVkTEYodGhpcy5pbnRsLCBvcHRzKTtcbiAgfVxuXG4gIGlzRW5nbGlzaCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5sb2NhbGUgPT09IFwiZW5cIiB8fFxuICAgICAgdGhpcy5sb2NhbGUudG9Mb3dlckNhc2UoKSA9PT0gXCJlbi11c1wiIHx8XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmludGwpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZS5zdGFydHNXaXRoKFwiZW4tdXNcIilcbiAgICApO1xuICB9XG5cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubG9jYWxlID09PSBvdGhlci5sb2NhbGUgJiZcbiAgICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBvdGhlci5udW1iZXJpbmdTeXN0ZW0gJiZcbiAgICAgIHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG90aGVyLm91dHB1dENhbGVuZGFyXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgdW50cnVuY2F0ZVllYXIsXG4gIHNpZ25lZE9mZnNldCxcbiAgcGFyc2VJbnRlZ2VyLFxuICBwYXJzZU1pbGxpcyxcbiAgaWFuYVJlZ2V4LFxuICBpc1VuZGVmaW5lZCxcbiAgcGFyc2VGbG9hdGluZyxcbn0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0ICogYXMgRW5nbGlzaCBmcm9tIFwiLi9lbmdsaXNoLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcblxuLypcbiAqIFRoaXMgZmlsZSBoYW5kbGVzIHBhcnNpbmcgZm9yIHdlbGwtc3BlY2lmaWVkIGZvcm1hdHMuIEhlcmUncyBob3cgaXQgd29ya3M6XG4gKiBUd28gdGhpbmdzIGdvIGludG8gcGFyc2luZzogYSByZWdleCB0byBtYXRjaCB3aXRoIGFuZCBhbiBleHRyYWN0b3IgdG8gdGFrZSBhcGFydCB0aGUgZ3JvdXBzIGluIHRoZSBtYXRjaC5cbiAqIEFuIGV4dHJhY3RvciBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHJlZ2V4IG1hdGNoIGFycmF5IGFuZCByZXR1cm5zIGEgeyB5ZWFyOiAuLi4sIG1vbnRoOiAuLi4gfSBvYmplY3RcbiAqIHBhcnNlKCkgZG9lcyB0aGUgd29yayBvZiBleGVjdXRpbmcgdGhlIHJlZ2V4IGFuZCBhcHBseWluZyB0aGUgZXh0cmFjdG9yLiBJdCB0YWtlcyBtdWx0aXBsZSByZWdleC9leHRyYWN0b3IgcGFpcnMgdG8gdHJ5IGluIHNlcXVlbmNlLlxuICogRXh0cmFjdG9ycyBjYW4gdGFrZSBhIFwiY3Vyc29yXCIgcmVwcmVzZW50aW5nIHRoZSBvZmZzZXQgaW4gdGhlIG1hdGNoIHRvIGxvb2sgYXQuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBjb21iaW5lIGV4dHJhY3RvcnMuXG4gKiBjb21iaW5lRXh0cmFjdG9ycygpIGRvZXMgdGhlIHdvcmsgb2YgY29tYmluaW5nIHRoZW0sIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnNvciB0aHJvdWdoIG11bHRpcGxlIGV4dHJhY3Rpb25zLlxuICogU29tZSBleHRyYWN0aW9ucyBhcmUgc3VwZXIgZHVtYiBhbmQgc2ltcGxlUGFyc2UgYW5kIGZyb21TdHJpbmdzIGhlbHAgRFJZIHRoZW0uXG4gKi9cblxuZnVuY3Rpb24gY29tYmluZVJlZ2V4ZXMoLi4ucmVnZXhlcykge1xuICBjb25zdCBmdWxsID0gcmVnZXhlcy5yZWR1Y2UoKGYsIHIpID0+IGYgKyByLnNvdXJjZSwgXCJcIik7XG4gIHJldHVybiBSZWdFeHAoYF4ke2Z1bGx9JGApO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lRXh0cmFjdG9ycyguLi5leHRyYWN0b3JzKSB7XG4gIHJldHVybiAobSkgPT5cbiAgICBleHRyYWN0b3JzXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoW21lcmdlZFZhbHMsIG1lcmdlZFpvbmUsIGN1cnNvcl0sIGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgW3ZhbCwgem9uZSwgbmV4dF0gPSBleChtLCBjdXJzb3IpO1xuICAgICAgICAgIHJldHVybiBbeyAuLi5tZXJnZWRWYWxzLCAuLi52YWwgfSwgem9uZSB8fCBtZXJnZWRab25lLCBuZXh0XTtcbiAgICAgICAgfSxcbiAgICAgICAgW3t9LCBudWxsLCAxXVxuICAgICAgKVxuICAgICAgLnNsaWNlKDAsIDIpO1xufVxuXG5mdW5jdGlvbiBwYXJzZShzLCAuLi5wYXR0ZXJucykge1xuICBpZiAocyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgfVxuXG4gIGZvciAoY29uc3QgW3JlZ2V4LCBleHRyYWN0b3JdIG9mIHBhdHRlcm5zKSB7XG4gICAgY29uc3QgbSA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgaWYgKG0pIHtcbiAgICAgIHJldHVybiBleHRyYWN0b3IobSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBbbnVsbCwgbnVsbF07XG59XG5cbmZ1bmN0aW9uIHNpbXBsZVBhcnNlKC4uLmtleXMpIHtcbiAgcmV0dXJuIChtYXRjaCwgY3Vyc29yKSA9PiB7XG4gICAgY29uc3QgcmV0ID0ge307XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgcmV0W2tleXNbaV1dID0gcGFyc2VJbnRlZ2VyKG1hdGNoW2N1cnNvciArIGldKTtcbiAgICB9XG4gICAgcmV0dXJuIFtyZXQsIG51bGwsIGN1cnNvciArIGldO1xuICB9O1xufVxuXG4vLyBJU08gYW5kIFNRTCBwYXJzaW5nXG5jb25zdCBvZmZzZXRSZWdleCA9IC8oPzooWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/KS87XG5jb25zdCBpc29FeHRlbmRlZFpvbmUgPSBgKD86JHtvZmZzZXRSZWdleC5zb3VyY2V9Pyg/OlxcXFxbKCR7aWFuYVJlZ2V4LnNvdXJjZX0pXFxcXF0pPyk/YDtcbmNvbnN0IGlzb1RpbWVCYXNlUmVnZXggPSAvKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlsuLF0oXFxkezEsMzB9KSk/KT8pPy87XG5jb25zdCBpc29UaW1lUmVnZXggPSBSZWdFeHAoYCR7aXNvVGltZUJhc2VSZWdleC5zb3VyY2V9JHtpc29FeHRlbmRlZFpvbmV9YCk7XG5jb25zdCBpc29UaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoYCg/OlQke2lzb1RpbWVSZWdleC5zb3VyY2V9KT9gKTtcbmNvbnN0IGlzb1ltZFJlZ2V4ID0gLyhbKy1dXFxkezZ9fFxcZHs0fSkoPzotPyhcXGRcXGQpKD86LT8oXFxkXFxkKSk/KT8vO1xuY29uc3QgaXNvV2Vla1JlZ2V4ID0gLyhcXGR7NH0pLT9XKFxcZFxcZCkoPzotPyhcXGQpKT8vO1xuY29uc3QgaXNvT3JkaW5hbFJlZ2V4ID0gLyhcXGR7NH0pLT8oXFxkezN9KS87XG5jb25zdCBleHRyYWN0SVNPV2Vla0RhdGEgPSBzaW1wbGVQYXJzZShcIndlZWtZZWFyXCIsIFwid2Vla051bWJlclwiLCBcIndlZWtEYXlcIik7XG5jb25zdCBleHRyYWN0SVNPT3JkaW5hbERhdGEgPSBzaW1wbGVQYXJzZShcInllYXJcIiwgXCJvcmRpbmFsXCIpO1xuY29uc3Qgc3FsWW1kUmVnZXggPSAvKFxcZHs0fSktKFxcZFxcZCktKFxcZFxcZCkvOyAvLyBkdW1iZWQtZG93biB2ZXJzaW9uIG9mIHRoZSBJU08gb25lXG5jb25zdCBzcWxUaW1lUmVnZXggPSBSZWdFeHAoXG4gIGAke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSA/KD86JHtvZmZzZXRSZWdleC5zb3VyY2V9fCgke2lhbmFSZWdleC5zb3VyY2V9KSk/YFxuKTtcbmNvbnN0IHNxbFRpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cChgKD86ICR7c3FsVGltZVJlZ2V4LnNvdXJjZX0pP2ApO1xuXG5mdW5jdGlvbiBpbnQobWF0Y2gsIHBvcywgZmFsbGJhY2spIHtcbiAgY29uc3QgbSA9IG1hdGNoW3Bvc107XG4gIHJldHVybiBpc1VuZGVmaW5lZChtKSA/IGZhbGxiYWNrIDogcGFyc2VJbnRlZ2VyKG0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPWW1kKG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3QgaXRlbSA9IHtcbiAgICB5ZWFyOiBpbnQobWF0Y2gsIGN1cnNvciksXG4gICAgbW9udGg6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMSksXG4gICAgZGF5OiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDEpLFxuICB9O1xuXG4gIHJldHVybiBbaXRlbSwgbnVsbCwgY3Vyc29yICsgM107XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJU09UaW1lKG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3QgaXRlbSA9IHtcbiAgICBob3VyczogaW50KG1hdGNoLCBjdXJzb3IsIDApLFxuICAgIG1pbnV0ZXM6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMCksXG4gICAgc2Vjb25kczogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAwKSxcbiAgICBtaWxsaXNlY29uZHM6IHBhcnNlTWlsbGlzKG1hdGNoW2N1cnNvciArIDNdKSxcbiAgfTtcblxuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDRdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPT2Zmc2V0KG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3QgbG9jYWwgPSAhbWF0Y2hbY3Vyc29yXSAmJiAhbWF0Y2hbY3Vyc29yICsgMV0sXG4gICAgZnVsbE9mZnNldCA9IHNpZ25lZE9mZnNldChtYXRjaFtjdXJzb3IgKyAxXSwgbWF0Y2hbY3Vyc29yICsgMl0pLFxuICAgIHpvbmUgPSBsb2NhbCA/IG51bGwgOiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoZnVsbE9mZnNldCk7XG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDNdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SUFOQVpvbmUobWF0Y2gsIGN1cnNvcikge1xuICBjb25zdCB6b25lID0gbWF0Y2hbY3Vyc29yXSA/IElBTkFab25lLmNyZWF0ZShtYXRjaFtjdXJzb3JdKSA6IG51bGw7XG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDFdO1xufVxuXG4vLyBJU08gdGltZSBwYXJzaW5nXG5cbmNvbnN0IGlzb1RpbWVPbmx5ID0gUmVnRXhwKGBeVD8ke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSRgKTtcblxuLy8gSVNPIGR1cmF0aW9uIHBhcnNpbmdcblxuY29uc3QgaXNvRHVyYXRpb24gPVxuICAvXi0/UCg/Oig/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KVkpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KU0pPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KVcpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KUQpPyg/OlQoPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylIKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylNKT8oPzooLT9cXGR7MSwyMH0pKD86Wy4sXSgtP1xcZHsxLDIwfSkpP1MpPyk/KSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0SVNPRHVyYXRpb24obWF0Y2gpIHtcbiAgY29uc3QgW3MsIHllYXJTdHIsIG1vbnRoU3RyLCB3ZWVrU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyLCBtaWxsaXNlY29uZHNTdHJdID1cbiAgICBtYXRjaDtcblxuICBjb25zdCBoYXNOZWdhdGl2ZVByZWZpeCA9IHNbMF0gPT09IFwiLVwiO1xuICBjb25zdCBuZWdhdGl2ZVNlY29uZHMgPSBzZWNvbmRTdHIgJiYgc2Vjb25kU3RyWzBdID09PSBcIi1cIjtcblxuICBjb25zdCBtYXliZU5lZ2F0ZSA9IChudW0sIGZvcmNlID0gZmFsc2UpID0+XG4gICAgbnVtICE9PSB1bmRlZmluZWQgJiYgKGZvcmNlIHx8IChudW0gJiYgaGFzTmVnYXRpdmVQcmVmaXgpKSA/IC1udW0gOiBudW07XG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB5ZWFyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyh5ZWFyU3RyKSksXG4gICAgICBtb250aHM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcobW9udGhTdHIpKSxcbiAgICAgIHdlZWtzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHdlZWtTdHIpKSxcbiAgICAgIGRheXM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoZGF5U3RyKSksXG4gICAgICBob3VyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhob3VyU3RyKSksXG4gICAgICBtaW51dGVzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKG1pbnV0ZVN0cikpLFxuICAgICAgc2Vjb25kczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhzZWNvbmRTdHIpLCBzZWNvbmRTdHIgPT09IFwiLTBcIiksXG4gICAgICBtaWxsaXNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlTWlsbGlzKG1pbGxpc2Vjb25kc1N0ciksIG5lZ2F0aXZlU2Vjb25kcyksXG4gICAgfSxcbiAgXTtcbn1cblxuLy8gVGhlc2UgYXJlIGEgbGl0dGxlIGJyYWluZGVhZC4gRURUICpzaG91bGQqIHRlbGwgdXMgdGhhdCB3ZSdyZSBpbiwgc2F5LCBBbWVyaWNhL05ld19Zb3JrXG4vLyBhbmQgbm90IGp1c3QgdGhhdCB3ZSdyZSBpbiAtMjQwICpyaWdodCBub3cqLiBCdXQgc2luY2UgSSBkb24ndCB0aGluayB0aGVzZSBhcmUgdXNlZCB0aGF0IG9mdGVuXG4vLyBJJ20ganVzdCBnb2luZyB0byBpZ25vcmUgdGhhdFxuY29uc3Qgb2JzT2Zmc2V0cyA9IHtcbiAgR01UOiAwLFxuICBFRFQ6IC00ICogNjAsXG4gIEVTVDogLTUgKiA2MCxcbiAgQ0RUOiAtNSAqIDYwLFxuICBDU1Q6IC02ICogNjAsXG4gIE1EVDogLTYgKiA2MCxcbiAgTVNUOiAtNyAqIDYwLFxuICBQRFQ6IC03ICogNjAsXG4gIFBTVDogLTggKiA2MCxcbn07XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB5ZWFyOiB5ZWFyU3RyLmxlbmd0aCA9PT0gMiA/IHVudHJ1bmNhdGVZZWFyKHBhcnNlSW50ZWdlcih5ZWFyU3RyKSkgOiBwYXJzZUludGVnZXIoeWVhclN0ciksXG4gICAgbW9udGg6IEVuZ2xpc2gubW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0cikgKyAxLFxuICAgIGRheTogcGFyc2VJbnRlZ2VyKGRheVN0ciksXG4gICAgaG91cjogcGFyc2VJbnRlZ2VyKGhvdXJTdHIpLFxuICAgIG1pbnV0ZTogcGFyc2VJbnRlZ2VyKG1pbnV0ZVN0ciksXG4gIH07XG5cbiAgaWYgKHNlY29uZFN0cikgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50ZWdlcihzZWNvbmRTdHIpO1xuICBpZiAod2Vla2RheVN0cikge1xuICAgIHJlc3VsdC53ZWVrZGF5ID1cbiAgICAgIHdlZWtkYXlTdHIubGVuZ3RoID4gM1xuICAgICAgICA/IEVuZ2xpc2gud2Vla2RheXNMb25nLmluZGV4T2Yod2Vla2RheVN0cikgKyAxXG4gICAgICAgIDogRW5nbGlzaC53ZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0cikgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gUkZDIDI4MjIvNTMyMlxuY29uc3QgcmZjMjgyMiA9XG4gIC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksXFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfCg/OihbKy1dXFxkXFxkKShcXGRcXGQpKSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdFJGQzI4MjIobWF0Y2gpIHtcbiAgY29uc3QgW1xuICAgICAgLFxuICAgICAgd2Vla2RheVN0cixcbiAgICAgIGRheVN0cixcbiAgICAgIG1vbnRoU3RyLFxuICAgICAgeWVhclN0cixcbiAgICAgIGhvdXJTdHIsXG4gICAgICBtaW51dGVTdHIsXG4gICAgICBzZWNvbmRTdHIsXG4gICAgICBvYnNPZmZzZXQsXG4gICAgICBtaWxPZmZzZXQsXG4gICAgICBvZmZIb3VyU3RyLFxuICAgICAgb2ZmTWludXRlU3RyLFxuICAgIF0gPSBtYXRjaCxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG5cbiAgbGV0IG9mZnNldDtcbiAgaWYgKG9ic09mZnNldCkge1xuICAgIG9mZnNldCA9IG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcbiAgfSBlbHNlIGlmIChtaWxPZmZzZXQpIHtcbiAgICBvZmZzZXQgPSAwO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldCA9IHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpO1xuICB9XG5cbiAgcmV0dXJuIFtyZXN1bHQsIG5ldyBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KV07XG59XG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHMpIHtcbiAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgcmV0dXJuIHNcbiAgICAucmVwbGFjZSgvXFwoW14pXSpcXCl8W1xcblxcdF0vZywgXCIgXCIpXG4gICAgLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCBcIiBcIilcbiAgICAudHJpbSgpO1xufVxuXG4vLyBodHRwIGRhdGVcblxuY29uc3QgcmZjMTEyMyA9XG4gICAgL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSwgKFxcZFxcZCkgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoXFxkezR9KSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLyxcbiAgcmZjODUwID1cbiAgICAvXihNb25kYXl8VHVlc2RheXxXZWRuZXNkYXl8VGh1cnNkYXl8RnJpZGF5fFNhdHVyZGF5fFN1bmRheSksIChcXGRcXGQpLShKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYyktKFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgR01UJC8sXG4gIGFzY2lpID1cbiAgICAvXihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKCBcXGR8XFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSAoXFxkezR9KSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0UkZDMTEyM09yODUwKG1hdGNoKSB7XG4gIGNvbnN0IFssIHdlZWtkYXlTdHIsIGRheVN0ciwgbW9udGhTdHIsIHllYXJTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyXSA9IG1hdGNoLFxuICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcbiAgcmV0dXJuIFtyZXN1bHQsIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZV07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RBU0NJSShtYXRjaCkge1xuICBjb25zdCBbLCB3ZWVrZGF5U3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0ciwgeWVhclN0cl0gPSBtYXRjaCxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xufVxuXG5jb25zdCBpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvWW1kUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1dlZWtSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbmNvbnN0IGlzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvT3JkaW5hbFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xuY29uc3QgaXNvVGltZUNvbWJpbmVkUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29UaW1lUmVnZXgpO1xuXG5jb25zdCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKFxuICBleHRyYWN0SVNPWW1kLFxuICBleHRyYWN0SVNPVGltZSxcbiAgZXh0cmFjdElTT09mZnNldCxcbiAgZXh0cmFjdElBTkFab25lXG4pO1xuY29uc3QgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09XZWVrRGF0YSxcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcbmNvbnN0IGV4dHJhY3RJU09PcmRpbmFsRGF0ZUFuZFRpbWUgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT09yZGluYWxEYXRhLFxuICBleHRyYWN0SVNPVGltZSxcbiAgZXh0cmFjdElTT09mZnNldCxcbiAgZXh0cmFjdElBTkFab25lXG4pO1xuY29uc3QgZXh0cmFjdElTT1RpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcblxuLypcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSVNPRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShcbiAgICBzLFxuICAgIFtpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sXG4gICAgW2lzb1dlZWtXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPV2Vla1RpbWVBbmRPZmZzZXRdLFxuICAgIFtpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT09yZGluYWxEYXRlQW5kVGltZV0sXG4gICAgW2lzb1RpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZUFuZE9mZnNldF1cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUkZDMjgyMkRhdGUocykge1xuICByZXR1cm4gcGFyc2UocHJlcHJvY2Vzc1JGQzI4MjIocyksIFtyZmMyODIyLCBleHRyYWN0UkZDMjgyMl0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIVFRQRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShcbiAgICBzLFxuICAgIFtyZmMxMTIzLCBleHRyYWN0UkZDMTEyM09yODUwXSxcbiAgICBbcmZjODUwLCBleHRyYWN0UkZDMTEyM09yODUwXSxcbiAgICBbYXNjaWksIGV4dHJhY3RBU0NJSV1cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSVNPRHVyYXRpb24ocykge1xuICByZXR1cm4gcGFyc2UocywgW2lzb0R1cmF0aW9uLCBleHRyYWN0SVNPRHVyYXRpb25dKTtcbn1cblxuY29uc3QgZXh0cmFjdElTT1RpbWVPbmx5ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1RpbWUpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJU09UaW1lT25seShzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbaXNvVGltZU9ubHksIGV4dHJhY3RJU09UaW1lT25seV0pO1xufVxuXG5jb25zdCBzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoc3FsWW1kUmVnZXgsIHNxbFRpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBzcWxUaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFRpbWVSZWdleCk7XG5cbmNvbnN0IGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmUgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU1FMKHMpIHtcbiAgcmV0dXJuIHBhcnNlKFxuICAgIHMsXG4gICAgW3NxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0XSxcbiAgICBbc3FsVGltZUNvbWJpbmVkUmVnZXgsIGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmVdXG4gICk7XG59XG4iLCJpbXBvcnQgeyBwYXJzZU1pbGxpcywgaXNVbmRlZmluZWQsIHVudHJ1bmNhdGVZZWFyLCBzaWduZWRPZmZzZXQsIGhhc093blByb3BlcnR5IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9mb3JtYXR0ZXIuanNcIjtcbmltcG9ydCBGaXhlZE9mZnNldFpvbmUgZnJvbSBcIi4uL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IHsgZGlnaXRSZWdleCwgcGFyc2VEaWdpdHMgfSBmcm9tIFwiLi9kaWdpdHMuanNcIjtcbmltcG9ydCB7IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9ycy5qc1wiO1xuXG5jb25zdCBNSVNTSU5HX0ZUUCA9IFwibWlzc2luZyBJbnRsLkRhdGVUaW1lRm9ybWF0LmZvcm1hdFRvUGFydHMgc3VwcG9ydFwiO1xuXG5mdW5jdGlvbiBpbnRVbml0KHJlZ2V4LCBwb3N0ID0gKGkpID0+IGkpIHtcbiAgcmV0dXJuIHsgcmVnZXgsIGRlc2VyOiAoW3NdKSA9PiBwb3N0KHBhcnNlRGlnaXRzKHMpKSB9O1xufVxuXG5jb25zdCBOQlNQID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxNjApO1xuY29uc3Qgc3BhY2VPck5CU1AgPSBgWyAke05CU1B9XWA7XG5jb25zdCBzcGFjZU9yTkJTUFJlZ0V4cCA9IG5ldyBSZWdFeHAoc3BhY2VPck5CU1AsIFwiZ1wiKTtcblxuZnVuY3Rpb24gZml4TGlzdFJlZ2V4KHMpIHtcbiAgLy8gbWFrZSBkb3RzIG9wdGlvbmFsIGFuZCBhbHNvIG1ha2UgdGhlbSBsaXRlcmFsXG4gIC8vIG1ha2Ugc3BhY2UgYW5kIG5vbiBicmVha2FibGUgc3BhY2UgY2hhcmFjdGVycyBpbnRlcmNoYW5nZWFibGVcbiAgcmV0dXJuIHMucmVwbGFjZSgvXFwuL2csIFwiXFxcXC4/XCIpLnJlcGxhY2Uoc3BhY2VPck5CU1BSZWdFeHAsIHNwYWNlT3JOQlNQKTtcbn1cblxuZnVuY3Rpb24gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykge1xuICByZXR1cm4gc1xuICAgIC5yZXBsYWNlKC9cXC4vZywgXCJcIikgLy8gaWdub3JlIGRvdHMgdGhhdCB3ZXJlIG1hZGUgb3B0aW9uYWxcbiAgICAucmVwbGFjZShzcGFjZU9yTkJTUFJlZ0V4cCwgXCIgXCIpIC8vIGludGVyY2hhbmdlIHNwYWNlIGFuZCBuYnNwXG4gICAgLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG9uZU9mKHN0cmluZ3MsIHN0YXJ0SW5kZXgpIHtcbiAgaWYgKHN0cmluZ3MgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnZXg6IFJlZ0V4cChzdHJpbmdzLm1hcChmaXhMaXN0UmVnZXgpLmpvaW4oXCJ8XCIpKSxcbiAgICAgIGRlc2VyOiAoW3NdKSA9PlxuICAgICAgICBzdHJpbmdzLmZpbmRJbmRleCgoaSkgPT4gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykgPT09IHN0cmlwSW5zZW5zaXRpdml0aWVzKGkpKSArIHN0YXJ0SW5kZXgsXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZzZXQocmVnZXgsIGdyb3Vwcykge1xuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbLCBoLCBtXSkgPT4gc2lnbmVkT2Zmc2V0KGgsIG0pLCBncm91cHMgfTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlKHJlZ2V4KSB7XG4gIHJldHVybiB7IHJlZ2V4LCBkZXNlcjogKFtzXSkgPT4gcyB9O1xufVxuXG5mdW5jdGlvbiBlc2NhcGVUb2tlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csIFwiXFxcXCQmXCIpO1xufVxuXG5mdW5jdGlvbiB1bml0Rm9yVG9rZW4odG9rZW4sIGxvYykge1xuICBjb25zdCBvbmUgPSBkaWdpdFJlZ2V4KGxvYyksXG4gICAgdHdvID0gZGlnaXRSZWdleChsb2MsIFwiezJ9XCIpLFxuICAgIHRocmVlID0gZGlnaXRSZWdleChsb2MsIFwiezN9XCIpLFxuICAgIGZvdXIgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7NH1cIiksXG4gICAgc2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezZ9XCIpLFxuICAgIG9uZU9yVHdvID0gZGlnaXRSZWdleChsb2MsIFwiezEsMn1cIiksXG4gICAgb25lVG9UaHJlZSA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDN9XCIpLFxuICAgIG9uZVRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezEsNn1cIiksXG4gICAgb25lVG9OaW5lID0gZGlnaXRSZWdleChsb2MsIFwiezEsOX1cIiksXG4gICAgdHdvVG9Gb3VyID0gZGlnaXRSZWdleChsb2MsIFwiezIsNH1cIiksXG4gICAgZm91clRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezQsNn1cIiksXG4gICAgbGl0ZXJhbCA9ICh0KSA9PiAoeyByZWdleDogUmVnRXhwKGVzY2FwZVRva2VuKHQudmFsKSksIGRlc2VyOiAoW3NdKSA9PiBzLCBsaXRlcmFsOiB0cnVlIH0pLFxuICAgIHVuaXRhdGUgPSAodCkgPT4ge1xuICAgICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHQudmFsKSB7XG4gICAgICAgIC8vIGVyYVxuICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcyhcInNob3J0XCIsIGZhbHNlKSwgMCk7XG4gICAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcyhcImxvbmdcIiwgZmFsc2UpLCAwKTtcbiAgICAgICAgLy8geWVhcnNcbiAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1NpeCk7XG4gICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3b1RvRm91ciwgdW50cnVuY2F0ZVllYXIpO1xuICAgICAgICBjYXNlIFwieXl5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xuICAgICAgICBjYXNlIFwieXl5eXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyVG9TaXgpO1xuICAgICAgICBjYXNlIFwieXl5eXl5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoc2l4KTtcbiAgICAgICAgLy8gbW9udGhzXG4gICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJzaG9ydFwiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwibG9uZ1wiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwic2hvcnRcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJsb25nXCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgICAvLyBkYXRlc1xuICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcImRkXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgLy8gb3JkaW5hbHNcbiAgICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1RocmVlKTtcbiAgICAgICAgY2FzZSBcIm9vb1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHRocmVlKTtcbiAgICAgICAgLy8gdGltZVxuICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwicVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG4gICAgICAgIGNhc2UgXCJTU1NcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG4gICAgICAgIGNhc2UgXCJ1XCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZShvbmVUb05pbmUpO1xuICAgICAgICBjYXNlIFwidXVcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInV1dVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XG4gICAgICAgIC8vIG1lcmlkaWVtXG4gICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tZXJpZGllbXMoKSwgMCk7XG4gICAgICAgIC8vIHdlZWtZZWFyIChrKVxuICAgICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xuICAgICAgICBjYXNlIFwia2tcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcbiAgICAgICAgLy8gd2Vla051bWJlciAoVylcbiAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIC8vIHdlZWtkYXlzXG4gICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lKTtcbiAgICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJzaG9ydFwiLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwibG9uZ1wiLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJzaG9ydFwiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJsb25nXCIsIHRydWUsIGZhbHNlKSwgMSk7XG4gICAgICAgIC8vIG9mZnNldC96b25lXG4gICAgICAgIGNhc2UgXCJaXCI6XG4gICAgICAgIGNhc2UgXCJaWlwiOlxuICAgICAgICAgIHJldHVybiBvZmZzZXQobmV3IFJlZ0V4cChgKFsrLV0ke29uZU9yVHdvLnNvdXJjZX0pKD86Oigke3R3by5zb3VyY2V9KSk/YCksIDIpO1xuICAgICAgICBjYXNlIFwiWlpaXCI6XG4gICAgICAgICAgcmV0dXJuIG9mZnNldChuZXcgUmVnRXhwKGAoWystXSR7b25lT3JUd28uc291cmNlfSkoJHt0d28uc291cmNlfSk/YCksIDIpO1xuICAgICAgICAvLyB3ZSBkb24ndCBzdXBwb3J0IFpaWlogKFBTVCkgb3IgWlpaWlogKFBhY2lmaWMgU3RhbmRhcmQgVGltZSkgaW4gcGFyc2luZ1xuICAgICAgICAvLyBiZWNhdXNlIHdlIGRvbid0IGhhdmUgYW55IHdheSB0byBmaWd1cmUgb3V0IHdoYXQgdGhleSBhcmVcbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKC9bYS16XystL117MSwyNTZ9Py9pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbGl0ZXJhbCh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGNvbnN0IHVuaXQgPSB1bml0YXRlKHRva2VuKSB8fCB7XG4gICAgaW52YWxpZFJlYXNvbjogTUlTU0lOR19GVFAsXG4gIH07XG5cbiAgdW5pdC50b2tlbiA9IHRva2VuO1xuXG4gIHJldHVybiB1bml0O1xufVxuXG5jb25zdCBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbCA9IHtcbiAgeWVhcjoge1xuICAgIFwiMi1kaWdpdFwiOiBcInl5XCIsXG4gICAgbnVtZXJpYzogXCJ5eXl5eVwiLFxuICB9LFxuICBtb250aDoge1xuICAgIG51bWVyaWM6IFwiTVwiLFxuICAgIFwiMi1kaWdpdFwiOiBcIk1NXCIsXG4gICAgc2hvcnQ6IFwiTU1NXCIsXG4gICAgbG9uZzogXCJNTU1NXCIsXG4gIH0sXG4gIGRheToge1xuICAgIG51bWVyaWM6IFwiZFwiLFxuICAgIFwiMi1kaWdpdFwiOiBcImRkXCIsXG4gIH0sXG4gIHdlZWtkYXk6IHtcbiAgICBzaG9ydDogXCJFRUVcIixcbiAgICBsb25nOiBcIkVFRUVcIixcbiAgfSxcbiAgZGF5cGVyaW9kOiBcImFcIixcbiAgZGF5UGVyaW9kOiBcImFcIixcbiAgaG91cjoge1xuICAgIG51bWVyaWM6IFwiaFwiLFxuICAgIFwiMi1kaWdpdFwiOiBcImhoXCIsXG4gIH0sXG4gIG1pbnV0ZToge1xuICAgIG51bWVyaWM6IFwibVwiLFxuICAgIFwiMi1kaWdpdFwiOiBcIm1tXCIsXG4gIH0sXG4gIHNlY29uZDoge1xuICAgIG51bWVyaWM6IFwic1wiLFxuICAgIFwiMi1kaWdpdFwiOiBcInNzXCIsXG4gIH0sXG4gIHRpbWVab25lTmFtZToge1xuICAgIGxvbmc6IFwiWlpaWlpcIixcbiAgICBzaG9ydDogXCJaWlpcIixcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIHRva2VuRm9yUGFydChwYXJ0LCBsb2NhbGUsIGZvcm1hdE9wdHMpIHtcbiAgY29uc3QgeyB0eXBlLCB2YWx1ZSB9ID0gcGFydDtcblxuICBpZiAodHlwZSA9PT0gXCJsaXRlcmFsXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGl0ZXJhbDogdHJ1ZSxcbiAgICAgIHZhbDogdmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHN0eWxlID0gZm9ybWF0T3B0c1t0eXBlXTtcblxuICBsZXQgdmFsID0gcGFydFR5cGVTdHlsZVRvVG9rZW5WYWxbdHlwZV07XG4gIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKSB7XG4gICAgdmFsID0gdmFsW3N0eWxlXTtcbiAgfVxuXG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGl0ZXJhbDogZmFsc2UsXG4gICAgICB2YWwsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUmVnZXgodW5pdHMpIHtcbiAgY29uc3QgcmUgPSB1bml0cy5tYXAoKHUpID0+IHUucmVnZXgpLnJlZHVjZSgoZiwgcikgPT4gYCR7Zn0oJHtyLnNvdXJjZX0pYCwgXCJcIik7XG4gIHJldHVybiBbYF4ke3JlfSRgLCB1bml0c107XG59XG5cbmZ1bmN0aW9uIG1hdGNoKGlucHV0LCByZWdleCwgaGFuZGxlcnMpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IGlucHV0Lm1hdGNoKHJlZ2V4KTtcblxuICBpZiAobWF0Y2hlcykge1xuICAgIGNvbnN0IGFsbCA9IHt9O1xuICAgIGxldCBtYXRjaEluZGV4ID0gMTtcbiAgICBmb3IgKGNvbnN0IGkgaW4gaGFuZGxlcnMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShoYW5kbGVycywgaSkpIHtcbiAgICAgICAgY29uc3QgaCA9IGhhbmRsZXJzW2ldLFxuICAgICAgICAgIGdyb3VwcyA9IGguZ3JvdXBzID8gaC5ncm91cHMgKyAxIDogMTtcbiAgICAgICAgaWYgKCFoLmxpdGVyYWwgJiYgaC50b2tlbikge1xuICAgICAgICAgIGFsbFtoLnRva2VuLnZhbFswXV0gPSBoLmRlc2VyKG1hdGNoZXMuc2xpY2UobWF0Y2hJbmRleCwgbWF0Y2hJbmRleCArIGdyb3VwcykpO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoSW5kZXggKz0gZ3JvdXBzO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW21hdGNoZXMsIGFsbF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFttYXRjaGVzLCB7fV07XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVGcm9tTWF0Y2hlcyhtYXRjaGVzKSB7XG4gIGNvbnN0IHRvRmllbGQgPSAodG9rZW4pID0+IHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiU1wiOlxuICAgICAgICByZXR1cm4gXCJtaWxsaXNlY29uZFwiO1xuICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgcmV0dXJuIFwic2Vjb25kXCI7XG4gICAgICBjYXNlIFwibVwiOlxuICAgICAgICByZXR1cm4gXCJtaW51dGVcIjtcbiAgICAgIGNhc2UgXCJoXCI6XG4gICAgICBjYXNlIFwiSFwiOlxuICAgICAgICByZXR1cm4gXCJob3VyXCI7XG4gICAgICBjYXNlIFwiZFwiOlxuICAgICAgICByZXR1cm4gXCJkYXlcIjtcbiAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgIHJldHVybiBcIm9yZGluYWxcIjtcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgICByZXR1cm4gXCJtb250aFwiO1xuICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgcmV0dXJuIFwieWVhclwiO1xuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBcIndlZWtkYXlcIjtcbiAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgIHJldHVybiBcIndlZWtOdW1iZXJcIjtcbiAgICAgIGNhc2UgXCJrXCI6XG4gICAgICAgIHJldHVybiBcIndlZWtZZWFyXCI7XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gXCJxdWFydGVyXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHpvbmUgPSBudWxsO1xuICBsZXQgc3BlY2lmaWNPZmZzZXQ7XG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy56KSkge1xuICAgIHpvbmUgPSBJQU5BWm9uZS5jcmVhdGUobWF0Y2hlcy56KTtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5aKSkge1xuICAgIGlmICghem9uZSkge1xuICAgICAgem9uZSA9IG5ldyBGaXhlZE9mZnNldFpvbmUobWF0Y2hlcy5aKTtcbiAgICB9XG4gICAgc3BlY2lmaWNPZmZzZXQgPSBtYXRjaGVzLlo7XG4gIH1cblxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMucSkpIHtcbiAgICBtYXRjaGVzLk0gPSAobWF0Y2hlcy5xIC0gMSkgKiAzICsgMTtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5oKSkge1xuICAgIGlmIChtYXRjaGVzLmggPCAxMiAmJiBtYXRjaGVzLmEgPT09IDEpIHtcbiAgICAgIG1hdGNoZXMuaCArPSAxMjtcbiAgICB9IGVsc2UgaWYgKG1hdGNoZXMuaCA9PT0gMTIgJiYgbWF0Y2hlcy5hID09PSAwKSB7XG4gICAgICBtYXRjaGVzLmggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtYXRjaGVzLkcgPT09IDAgJiYgbWF0Y2hlcy55KSB7XG4gICAgbWF0Y2hlcy55ID0gLW1hdGNoZXMueTtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy51KSkge1xuICAgIG1hdGNoZXMuUyA9IHBhcnNlTWlsbGlzKG1hdGNoZXMudSk7XG4gIH1cblxuICBjb25zdCB2YWxzID0gT2JqZWN0LmtleXMobWF0Y2hlcykucmVkdWNlKChyLCBrKSA9PiB7XG4gICAgY29uc3QgZiA9IHRvRmllbGQoayk7XG4gICAgaWYgKGYpIHtcbiAgICAgIHJbZl0gPSBtYXRjaGVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiByO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIFt2YWxzLCB6b25lLCBzcGVjaWZpY09mZnNldF07XG59XG5cbmxldCBkdW1teURhdGVUaW1lQ2FjaGUgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXREdW1teURhdGVUaW1lKCkge1xuICBpZiAoIWR1bW15RGF0ZVRpbWVDYWNoZSkge1xuICAgIGR1bW15RGF0ZVRpbWVDYWNoZSA9IERhdGVUaW1lLmZyb21NaWxsaXMoMTU1NTU1NTU1NTU1NSk7XG4gIH1cblxuICByZXR1cm4gZHVtbXlEYXRlVGltZUNhY2hlO1xufVxuXG5mdW5jdGlvbiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odG9rZW4sIGxvY2FsZSkge1xuICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdE9wdHMgPSBGb3JtYXR0ZXIubWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbi52YWwpO1xuICBjb25zdCB0b2tlbnMgPSBmb3JtYXRPcHRzVG9Ub2tlbnMoZm9ybWF0T3B0cywgbG9jYWxlKTtcblxuICBpZiAodG9rZW5zID09IG51bGwgfHwgdG9rZW5zLmluY2x1ZGVzKHVuZGVmaW5lZCkpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kTWFjcm9Ub2tlbnModG9rZW5zLCBsb2NhbGUpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQoLi4udG9rZW5zLm1hcCgodCkgPT4gbWF5YmVFeHBhbmRNYWNyb1Rva2VuKHQsIGxvY2FsZSkpKTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcbiAgY29uc3QgdG9rZW5zID0gZXhwYW5kTWFjcm9Ub2tlbnMoRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZvcm1hdCksIGxvY2FsZSksXG4gICAgdW5pdHMgPSB0b2tlbnMubWFwKCh0KSA9PiB1bml0Rm9yVG9rZW4odCwgbG9jYWxlKSksXG4gICAgZGlzcXVhbGlmeWluZ1VuaXQgPSB1bml0cy5maW5kKCh0KSA9PiB0LmludmFsaWRSZWFzb24pO1xuXG4gIGlmIChkaXNxdWFsaWZ5aW5nVW5pdCkge1xuICAgIHJldHVybiB7IGlucHV0LCB0b2tlbnMsIGludmFsaWRSZWFzb246IGRpc3F1YWxpZnlpbmdVbml0LmludmFsaWRSZWFzb24gfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBbcmVnZXhTdHJpbmcsIGhhbmRsZXJzXSA9IGJ1aWxkUmVnZXgodW5pdHMpLFxuICAgICAgcmVnZXggPSBSZWdFeHAocmVnZXhTdHJpbmcsIFwiaVwiKSxcbiAgICAgIFtyYXdNYXRjaGVzLCBtYXRjaGVzXSA9IG1hdGNoKGlucHV0LCByZWdleCwgaGFuZGxlcnMpLFxuICAgICAgW3Jlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXRdID0gbWF0Y2hlc1xuICAgICAgICA/IGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcylcbiAgICAgICAgOiBbbnVsbCwgbnVsbCwgdW5kZWZpbmVkXTtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkobWF0Y2hlcywgXCJhXCIpICYmIGhhc093blByb3BlcnR5KG1hdGNoZXMsIFwiSFwiKSkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxuICAgICAgICBcIkNhbid0IGluY2x1ZGUgbWVyaWRpZW0gd2hlbiBzcGVjaWZ5aW5nIDI0LWhvdXIgZm9ybWF0XCJcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB7IGlucHV0LCB0b2tlbnMsIHJlZ2V4LCByYXdNYXRjaGVzLCBtYXRjaGVzLCByZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0IH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcbiAgY29uc3QgeyByZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkUmVhc29uIH0gPSBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpO1xuICByZXR1cm4gW3Jlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRSZWFzb25dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0T3B0c1RvVG9rZW5zKGZvcm1hdE9wdHMsIGxvY2FsZSkge1xuICBpZiAoIWZvcm1hdE9wdHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlciA9IEZvcm1hdHRlci5jcmVhdGUobG9jYWxlLCBmb3JtYXRPcHRzKTtcbiAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0RGF0ZVRpbWVQYXJ0cyhnZXREdW1teURhdGVUaW1lKCkpO1xuICByZXR1cm4gcGFydHMubWFwKChwKSA9PiB0b2tlbkZvclBhcnQocCwgbG9jYWxlLCBmb3JtYXRPcHRzKSk7XG59XG4iLCIvKlxuICBUaGlzIGlzIGp1c3QgYSBqdW5rIGRyYXdlciwgY29udGFpbmluZyBhbnl0aGluZyB1c2VkIGFjcm9zcyBtdWx0aXBsZSBjbGFzc2VzLlxuICBCZWNhdXNlIEx1eG9uIGlzIHNtYWxsKGlzaCksIHRoaXMgc2hvdWxkIHN0YXkgc21hbGwgYW5kIHdlIHdvbid0IHdvcnJ5IGFib3V0IHNwbGl0dGluZ1xuICBpdCB1cCBpbnRvLCBzYXksIHBhcnNpbmdVdGlsLmpzIGFuZCBiYXNpY1V0aWwuanMgYW5kIHNvIG9uLiBCdXQgdGhleSBhcmUgZGl2aWRlZCB1cCBieSBmZWF0dXJlIGFyZWEuXG4qL1xuXG5pbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciB9IGZyb20gXCIuLi9lcnJvcnMuanNcIjtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8vIFRZUEVTXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJ1bmRlZmluZWRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm51bWJlclwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlZ2VyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm51bWJlclwiICYmIG8gJSAxID09PSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwic3RyaW5nXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgRGF0ZV1cIjtcbn1cblxuLy8gQ0FQQUJJTElUSUVTXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNSZWxhdGl2ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHlwZW9mIEludGwgIT09IFwidW5kZWZpbmVkXCIgJiYgISFJbnRsLlJlbGF0aXZlVGltZUZvcm1hdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBPQkpFQ1RTIEFORCBBUlJBWVNcblxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlQXJyYXkodGhpbmcpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpbmcpID8gdGhpbmcgOiBbdGhpbmddO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmVzdEJ5KGFyciwgYnksIGNvbXBhcmUpIHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcnIucmVkdWNlKChiZXN0LCBuZXh0KSA9PiB7XG4gICAgY29uc3QgcGFpciA9IFtieShuZXh0KSwgbmV4dF07XG4gICAgaWYgKCFiZXN0KSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmUoYmVzdFswXSwgcGFpclswXSkgPT09IGJlc3RbMF0pIHtcbiAgICAgIHJldHVybiBiZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9XG4gIH0sIG51bGwpWzFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGljayhvYmosIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChhLCBrKSA9PiB7XG4gICAgYVtrXSA9IG9ialtrXTtcbiAgICByZXR1cm4gYTtcbiAgfSwge30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxuLy8gTlVNQkVSUyBBTkQgU1RSSU5HU1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZWdlckJldHdlZW4odGhpbmcsIGJvdHRvbSwgdG9wKSB7XG4gIHJldHVybiBpc0ludGVnZXIodGhpbmcpICYmIHRoaW5nID49IGJvdHRvbSAmJiB0aGluZyA8PSB0b3A7XG59XG5cbi8vIHggJSBuIGJ1dCB0YWtlcyB0aGUgc2lnbiBvZiBuIGluc3RlYWQgb2YgeFxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yTW9kKHgsIG4pIHtcbiAgcmV0dXJuIHggLSBuICogTWF0aC5mbG9vcih4IC8gbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRTdGFydChpbnB1dCwgbiA9IDIpIHtcbiAgY29uc3QgaXNOZWcgPSBpbnB1dCA8IDA7XG4gIGxldCBwYWRkZWQ7XG4gIGlmIChpc05lZykge1xuICAgIHBhZGRlZCA9IFwiLVwiICsgKFwiXCIgKyAtaW5wdXQpLnBhZFN0YXJ0KG4sIFwiMFwiKTtcbiAgfSBlbHNlIHtcbiAgICBwYWRkZWQgPSAoXCJcIiArIGlucHV0KS5wYWRTdGFydChuLCBcIjBcIik7XG4gIH1cbiAgcmV0dXJuIHBhZGRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW50ZWdlcihzdHJpbmcpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHN0cmluZykgfHwgc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHN0cmluZywgMTApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZsb2F0aW5nKHN0cmluZykge1xuICBpZiAoaXNVbmRlZmluZWQoc3RyaW5nKSB8fCBzdHJpbmcgPT09IG51bGwgfHwgc3RyaW5nID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHJpbmcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1pbGxpcyhmcmFjdGlvbikge1xuICAvLyBSZXR1cm4gdW5kZWZpbmVkIChpbnN0ZWFkIG9mIDApIGluIHRoZXNlIGNhc2VzLCB3aGVyZSBmcmFjdGlvbiBpcyBub3Qgc2V0XG4gIGlmIChpc1VuZGVmaW5lZChmcmFjdGlvbikgfHwgZnJhY3Rpb24gPT09IG51bGwgfHwgZnJhY3Rpb24gPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGYgPSBwYXJzZUZsb2F0KFwiMC5cIiArIGZyYWN0aW9uKSAqIDEwMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVG8obnVtYmVyLCBkaWdpdHMsIHRvd2FyZFplcm8gPSBmYWxzZSkge1xuICBjb25zdCBmYWN0b3IgPSAxMCAqKiBkaWdpdHMsXG4gICAgcm91bmRlciA9IHRvd2FyZFplcm8gPyBNYXRoLnRydW5jIDogTWF0aC5yb3VuZDtcbiAgcmV0dXJuIHJvdW5kZXIobnVtYmVyICogZmFjdG9yKSAvIGZhY3Rvcjtcbn1cblxuLy8gREFURSBCQVNJQ1NcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgKHllYXIgJSAxMDAgIT09IDAgfHwgeWVhciAlIDQwMCA9PT0gMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICBjb25zdCBtb2RNb250aCA9IGZsb29yTW9kKG1vbnRoIC0gMSwgMTIpICsgMSxcbiAgICBtb2RZZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuXG4gIGlmIChtb2RNb250aCA9PT0gMikge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKG1vZFllYXIpID8gMjkgOiAyODtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9kTW9udGggLSAxXTtcbiAgfVxufVxuXG4vLyBjb3ZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBsb2NhbCB0aW1lc3RhbXAgKGVwb2NoLCBidXQgd2l0aCB0aGUgb2Zmc2V0IGJha2VkIGluKVxuZXhwb3J0IGZ1bmN0aW9uIG9ialRvTG9jYWxUUyhvYmopIHtcbiAgbGV0IGQgPSBEYXRlLlVUQyhcbiAgICBvYmoueWVhcixcbiAgICBvYmoubW9udGggLSAxLFxuICAgIG9iai5kYXksXG4gICAgb2JqLmhvdXIsXG4gICAgb2JqLm1pbnV0ZSxcbiAgICBvYmouc2Vjb25kLFxuICAgIG9iai5taWxsaXNlY29uZFxuICApO1xuXG4gIC8vIGZvciBsZWdhY3kgcmVhc29ucywgeWVhcnMgYmV0d2VlbiAwIGFuZCA5OSBhcmUgaW50ZXJwcmV0ZWQgYXMgMTlYWDsgcmV2ZXJ0IHRoYXRcbiAgaWYgKG9iai55ZWFyIDwgMTAwICYmIG9iai55ZWFyID49IDApIHtcbiAgICBkID0gbmV3IERhdGUoZCk7XG4gICAgZC5zZXRVVENGdWxsWWVhcihkLmdldFVUQ0Z1bGxZZWFyKCkgLSAxOTAwKTtcbiAgfVxuICByZXR1cm4gK2Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIpIHtcbiAgY29uc3QgcDEgPVxuICAgICAgKHdlZWtZZWFyICtcbiAgICAgICAgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDQpIC1cbiAgICAgICAgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDEwMCkgK1xuICAgICAgICBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNDAwKSkgJVxuICAgICAgNyxcbiAgICBsYXN0ID0gd2Vla1llYXIgLSAxLFxuICAgIHAyID0gKGxhc3QgKyBNYXRoLmZsb29yKGxhc3QgLyA0KSAtIE1hdGguZmxvb3IobGFzdCAvIDEwMCkgKyBNYXRoLmZsb29yKGxhc3QgLyA0MDApKSAlIDc7XG4gIHJldHVybiBwMSA9PT0gNCB8fCBwMiA9PT0gMyA/IDUzIDogNTI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyKSB7XG4gIGlmICh5ZWFyID4gOTkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHJldHVybiB5ZWFyID4gNjAgPyAxOTAwICsgeWVhciA6IDIwMDAgKyB5ZWFyO1xufVxuXG4vLyBQQVJTSU5HXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVpvbmVJbmZvKHRzLCBvZmZzZXRGb3JtYXQsIGxvY2FsZSwgdGltZVpvbmUgPSBudWxsKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0cyksXG4gICAgaW50bE9wdHMgPSB7XG4gICAgICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfTtcblxuICBpZiAodGltZVpvbmUpIHtcbiAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHRpbWVab25lO1xuICB9XG5cbiAgY29uc3QgbW9kaWZpZWQgPSB7IHRpbWVab25lTmFtZTogb2Zmc2V0Rm9ybWF0LCAuLi5pbnRsT3B0cyB9O1xuXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgbW9kaWZpZWQpXG4gICAgLmZvcm1hdFRvUGFydHMoZGF0ZSlcbiAgICAuZmluZCgobSkgPT4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwidGltZXpvbmVuYW1lXCIpO1xuICByZXR1cm4gcGFyc2VkID8gcGFyc2VkLnZhbHVlIDogbnVsbDtcbn1cblxuLy8gc2lnbmVkT2Zmc2V0KCctNScsICczMCcpIC0+IC0zMzBcbmV4cG9ydCBmdW5jdGlvbiBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKSB7XG4gIGxldCBvZmZIb3VyID0gcGFyc2VJbnQob2ZmSG91clN0ciwgMTApO1xuXG4gIC8vIGRvbid0IHx8IHRoaXMgYmVjYXVzZSB3ZSB3YW50IHRvIHByZXNlcnZlIC0wXG4gIGlmIChOdW1iZXIuaXNOYU4ob2ZmSG91cikpIHtcbiAgICBvZmZIb3VyID0gMDtcbiAgfVxuXG4gIGNvbnN0IG9mZk1pbiA9IHBhcnNlSW50KG9mZk1pbnV0ZVN0ciwgMTApIHx8IDAsXG4gICAgb2ZmTWluU2lnbmVkID0gb2ZmSG91ciA8IDAgfHwgT2JqZWN0LmlzKG9mZkhvdXIsIC0wKSA/IC1vZmZNaW4gOiBvZmZNaW47XG4gIHJldHVybiBvZmZIb3VyICogNjAgKyBvZmZNaW5TaWduZWQ7XG59XG5cbi8vIENPRVJDSU9OXG5cbmV4cG9ydCBmdW5jdGlvbiBhc051bWJlcih2YWx1ZSkge1xuICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiB8fCB2YWx1ZSA9PT0gXCJcIiB8fCBOdW1iZXIuaXNOYU4obnVtZXJpY1ZhbHVlKSlcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoYEludmFsaWQgdW5pdCB2YWx1ZSAke3ZhbHVlfWApO1xuICByZXR1cm4gbnVtZXJpY1ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplcikge1xuICBjb25zdCBub3JtYWxpemVkID0ge307XG4gIGZvciAoY29uc3QgdSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkob2JqLCB1KSkge1xuICAgICAgY29uc3QgdiA9IG9ialt1XTtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICBub3JtYWxpemVkW25vcm1hbGl6ZXIodSldID0gYXNOdW1iZXIodik7XG4gICAgfVxuICB9XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KG9mZnNldCwgZm9ybWF0KSB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC50cnVuYyhNYXRoLmFicyhvZmZzZXQgLyA2MCkpLFxuICAgIG1pbnV0ZXMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAlIDYwKSksXG4gICAgc2lnbiA9IG9mZnNldCA+PSAwID8gXCIrXCIgOiBcIi1cIjtcblxuICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIGAke3NpZ259JHtwYWRTdGFydChob3VycywgMil9OiR7cGFkU3RhcnQobWludXRlcywgMil9YDtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gYCR7c2lnbn0ke2hvdXJzfSR7bWludXRlcyA+IDAgPyBgOiR7bWludXRlc31gIDogXCJcIn1gO1xuICAgIGNhc2UgXCJ0ZWNoaWVcIjpcbiAgICAgIHJldHVybiBgJHtzaWdufSR7cGFkU3RhcnQoaG91cnMsIDIpfSR7cGFkU3RhcnQobWludXRlcywgMil9YDtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFZhbHVlIGZvcm1hdCAke2Zvcm1hdH0gaXMgb3V0IG9mIHJhbmdlIGZvciBwcm9wZXJ0eSBmb3JtYXRgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZU9iamVjdChvYmopIHtcbiAgcmV0dXJuIHBpY2sob2JqLCBbXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl0pO1xufVxuXG5leHBvcnQgY29uc3QgaWFuYVJlZ2V4ID1cbiAgL1tBLVphLXpfKy1dezEsMjU2fSg/Ojo/XFwvW0EtWmEtejAtOV8rLV17MSwyNTZ9KD86XFwvW0EtWmEtejAtOV8rLV17MSwyNTZ9KT8pPy87XG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcbmltcG9ydCBGaXhlZE9mZnNldFpvbmUgZnJvbSBcIi4uL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IEludmFsaWRab25lIGZyb20gXCIuLi96b25lcy9pbnZhbGlkWm9uZS5qc1wiO1xuXG5pbXBvcnQgeyBpc1VuZGVmaW5lZCwgaXNTdHJpbmcsIGlzTnVtYmVyIH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IFN5c3RlbVpvbmUgZnJvbSBcIi4uL3pvbmVzL3N5c3RlbVpvbmUuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIGRlZmF1bHRab25lKSB7XG4gIGxldCBvZmZzZXQ7XG4gIGlmIChpc1VuZGVmaW5lZChpbnB1dCkgfHwgaW5wdXQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZGVmYXVsdFpvbmU7XG4gIH0gZWxzZSBpZiAoaW5wdXQgaW5zdGFuY2VvZiBab25lKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIGNvbnN0IGxvd2VyZWQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChsb3dlcmVkID09PSBcImRlZmF1bHRcIikgcmV0dXJuIGRlZmF1bHRab25lO1xuICAgIGVsc2UgaWYgKGxvd2VyZWQgPT09IFwibG9jYWxcIiB8fCBsb3dlcmVkID09PSBcInN5c3RlbVwiKSByZXR1cm4gU3lzdGVtWm9uZS5pbnN0YW5jZTtcbiAgICBlbHNlIGlmIChsb3dlcmVkID09PSBcInV0Y1wiIHx8IGxvd2VyZWQgPT09IFwiZ210XCIpIHJldHVybiBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2U7XG4gICAgZWxzZSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKGxvd2VyZWQpIHx8IElBTkFab25lLmNyZWF0ZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSBcIm9iamVjdFwiICYmIGlucHV0Lm9mZnNldCAmJiB0eXBlb2YgaW5wdXQub2Zmc2V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgLy8gVGhpcyBpcyBkdW1iLCBidXQgdGhlIGluc3RhbmNlb2YgY2hlY2sgYWJvdmUgZG9lc24ndCBzZWVtIHRvIHJlYWxseSB3b3JrXG4gICAgLy8gc28gd2UncmUgZHVjayBjaGVja2luZyBpdFxuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEludmFsaWRab25lKGlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuL2RhdGV0aW1lLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplWm9uZSB9IGZyb20gXCIuL2ltcGwvem9uZVV0aWwuanNcIjtcblxuaW1wb3J0IHsgaGFzUmVsYXRpdmUgfSBmcm9tIFwiLi9pbXBsL3V0aWwuanNcIjtcblxuLyoqXG4gKiBUaGUgSW5mbyBjbGFzcyBjb250YWlucyBzdGF0aWMgbWV0aG9kcyBmb3IgcmV0cmlldmluZyBnZW5lcmFsIHRpbWUgYW5kIGRhdGUgcmVsYXRlZCBkYXRhLiBGb3IgZXhhbXBsZSwgaXQgaGFzIG1ldGhvZHMgZm9yIGZpbmRpbmcgb3V0IGlmIGEgdGltZSB6b25lIGhhcyBhIERTVCwgZm9yIGxpc3RpbmcgdGhlIG1vbnRocyBpbiBhbnkgc3VwcG9ydGVkIGxvY2FsZSwgYW5kIGZvciBkaXNjb3ZlcmluZyB3aGljaCBvZiBMdXhvbiBmZWF0dXJlcyBhcmUgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIHtcbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgem9uZSBjb250YWlucyBhIERTVC5cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW3pvbmU9J2xvY2FsJ10gLSBab25lIHRvIGNoZWNrLiBEZWZhdWx0cyB0byB0aGUgZW52aXJvbm1lbnQncyBsb2NhbCB6b25lLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGhhc0RTVCh6b25lID0gU2V0dGluZ3MuZGVmYXVsdFpvbmUpIHtcbiAgICBjb25zdCBwcm90byA9IERhdGVUaW1lLm5vdygpLnNldFpvbmUoem9uZSkuc2V0KHsgbW9udGg6IDEyIH0pO1xuXG4gICAgcmV0dXJuICF6b25lLmlzVW5pdmVyc2FsICYmIHByb3RvLm9mZnNldCAhPT0gcHJvdG8uc2V0KHsgbW9udGg6IDYgfSkub2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgem9uZSBpcyBhIHZhbGlkIElBTkEgc3BlY2lmaWVyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gem9uZSAtIFpvbmUgdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc1ZhbGlkSUFOQVpvbmUoem9uZSkge1xuICAgIHJldHVybiBJQU5BWm9uZS5pc1ZhbGlkWm9uZSh6b25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgaW5wdXQgaW50byBhIHtAbGluayBab25lfSBpbnN0YW5jZS5cbiAgICpcbiAgICogKiBJZiBgaW5wdXRgIGlzIGFscmVhZHkgYSBab25lIGluc3RhbmNlLCBpdCBpcyByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyBjb250YWluaW5nIGEgdmFsaWQgdGltZSB6b25lIG5hbWUsIGEgWm9uZSBpbnN0YW5jZVxuICAgKiAgIHdpdGggdGhhdCBuYW1lIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgdGhhdCBkb2Vzbid0IHJlZmVyIHRvIGEga25vd24gdGltZSB6b25lLCBhIFpvbmVcbiAgICogICBpbnN0YW5jZSB3aXRoIHtAbGluayBab25lI2lzVmFsaWR9ID09IGZhbHNlIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dCBpcyBhIG51bWJlciwgYSBab25lIGluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCBmaXhlZCBvZmZzZXRcbiAgICogICBpbiBtaW51dGVzIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCB0aGUgZGVmYXVsdCB6b25lIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfG51bWJlcn0gW2lucHV0XSAtIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBub3JtYWxpemVab25lKGlucHV0KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSBtb250aCBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcj0nZ3JlZ29yeSddIC0gdGhlIGNhbGVuZGFyXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKClbMF0gLy89PiAnSmFudWFyeSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JylbMF0gLy89PiAnSmFuJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycpWzBdIC8vPT4gJzEnXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0gKVswXSAvLz0+ICdqYW52LidcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ251bWVyaWMnLCB7IGxvY2FsZTogJ2FyJyB9KVswXSAvLz0+ICfZoSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ2xvbmcnLCB7IG91dHB1dENhbGVuZGFyOiAnaXNsYW1pYycgfSlbMF0gLy89PiAnUmFiacq7IEknXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1vbnRocyhcbiAgICBsZW5ndGggPSBcImxvbmdcIixcbiAgICB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwsIG91dHB1dENhbGVuZGFyID0gXCJncmVnb3J5XCIgfSA9IHt9XG4gICkge1xuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSkubW9udGhzKGxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCBtb250aCBuYW1lcy5cbiAgICogRm9ybWF0IG1vbnRocyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIG1vbnRocyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gdGhlIGRheSBvZiB0aGUgbW9udGguIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XG4gICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cbiAgICogU2VlIHtAbGluayBJbmZvI21vbnRoc31cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibnVtZXJpY1wiLCBcIjItZGlnaXRcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhclxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBtb250aHNGb3JtYXQoXG4gICAgbGVuZ3RoID0gXCJsb25nXCIsXG4gICAgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsLCBvdXRwdXRDYWxlbmRhciA9IFwiZ3JlZ29yeVwiIH0gPSB7fVxuICApIHtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikpLm1vbnRocyhsZW5ndGgsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBzdGFuZGFsb25lIHdlZWsgbmFtZXMuXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIHdlZWtkYXkgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygpWzBdIC8vPT4gJ01vbmRheSdcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnKVswXSAvLz0+ICdNb24nXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSlbMF0gLy89PiAnbHVuLidcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY2FsZTogJ2FyJyB9KVswXSAvLz0+ICfYp9mE2KfYq9mG2YrZhidcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgd2Vla2RheXMobGVuZ3RoID0gXCJsb25nXCIsIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCB9ID0ge30pIHtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKSkud2Vla2RheXMobGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZm9ybWF0IHdlZWsgbmFtZXMuXG4gICAqIEZvcm1hdCB3ZWVrZGF5cyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIHdlZWtkYXlzIGluIHRoYXQgdGhleSdyZSBtZWFudCB0byBhcHBlYXIgbmV4dCB0byBtb3JlIGRhdGUgaW5mb3JtYXRpb24uIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XG4gICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cbiAgICogU2VlIHtAbGluayBJbmZvI3dlZWtkYXlzfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9bnVsbF0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyB3ZWVrZGF5c0Zvcm1hdChcbiAgICBsZW5ndGggPSBcImxvbmdcIixcbiAgICB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwgfSA9IHt9XG4gICkge1xuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpKS53ZWVrZGF5cyhsZW5ndGgsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBtZXJpZGllbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcygpIC8vPT4gWyAnQU0nLCAnUE0nIF1cbiAgICogQGV4YW1wbGUgSW5mby5tZXJpZGllbXMoeyBsb2NhbGU6ICdteScgfSkgLy89PiBbICfhgJThgLbhgJThgIDhgLonLCAn4YCK4YCU4YCxJyBdXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1lcmlkaWVtcyh7IGxvY2FsZSA9IG51bGwgfSA9IHt9KSB7XG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlKS5tZXJpZGllbXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZXJhcywgc3VjaCBhcyBbJ0JDJywgJ0FEJ10uIFRoZSBsb2NhbGUgY2FuIGJlIHNwZWNpZmllZCwgYnV0IHRoZSBjYWxlbmRhciBzeXN0ZW0gaXMgYWx3YXlzIEdyZWdvcmlhbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J3Nob3J0J10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBlcmEgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJzaG9ydFwiIG9yIFwibG9uZ1wiLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCkgLy89PiBbICdCQycsICdBRCcgXVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnKSAvLz0+IFsgJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknIF1cbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJywgeyBsb2NhbGU6ICdmcicgfSkgLy89PiBbICdhdmFudCBKw6lzdXMtQ2hyaXN0JywgJ2FwcsOocyBKw6lzdXMtQ2hyaXN0JyBdXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIGVyYXMobGVuZ3RoID0gXCJzaG9ydFwiLCB7IGxvY2FsZSA9IG51bGwgfSA9IHt9KSB7XG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudWxsLCBcImdyZWdvcnlcIikuZXJhcyhsZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc2V0IG9mIGF2YWlsYWJsZSBmZWF0dXJlcyBpbiB0aGlzIGVudmlyb25tZW50LlxuICAgKiBTb21lIGZlYXR1cmVzIG9mIEx1eG9uIGFyZSBub3QgYXZhaWxhYmxlIGluIGFsbCBlbnZpcm9ubWVudHMuIEZvciBleGFtcGxlLCBvbiBvbGRlciBicm93c2VycywgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nIHN1cHBvcnQgaXMgbm90IGF2YWlsYWJsZS4gVXNlIHRoaXMgZnVuY3Rpb24gdG8gZmlndXJlIG91dCBpZiB0aGF0J3MgdGhlIGNhc2UuXG4gICAqIEtleXM6XG4gICAqICogYHJlbGF0aXZlYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIHJlbGF0aXZlIHRpbWUgZm9ybWF0dGluZ1xuICAgKiBAZXhhbXBsZSBJbmZvLmZlYXR1cmVzKCkgLy89PiB7IHJlbGF0aXZlOiBmYWxzZSB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBmZWF0dXJlcygpIHtcbiAgICByZXR1cm4geyByZWxhdGl2ZTogaGFzUmVsYXRpdmUoKSB9O1xuICB9XG59XG4iLCJpbXBvcnQgRGF0ZVRpbWUsIHsgZnJpZW5kbHlEYXRlVGltZSB9IGZyb20gXCIuL2RhdGV0aW1lLmpzXCI7XG5pbXBvcnQgRHVyYXRpb24gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IHsgSW52YWxpZEFyZ3VtZW50RXJyb3IsIEludmFsaWRJbnRlcnZhbEVycm9yIH0gZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgSW52YWxpZCBmcm9tIFwiLi9pbXBsL2ludmFsaWQuanNcIjtcblxuY29uc3QgSU5WQUxJRCA9IFwiSW52YWxpZCBJbnRlcnZhbFwiO1xuXG4vLyBjaGVja3MgaWYgdGhlIHN0YXJ0IGlzIGVxdWFsIHRvIG9yIGJlZm9yZSB0aGUgZW5kXG5mdW5jdGlvbiB2YWxpZGF0ZVN0YXJ0RW5kKHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCB8fCAhc3RhcnQuaXNWYWxpZCkge1xuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwibWlzc2luZyBvciBpbnZhbGlkIHN0YXJ0XCIpO1xuICB9IGVsc2UgaWYgKCFlbmQgfHwgIWVuZC5pc1ZhbGlkKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJtaXNzaW5nIG9yIGludmFsaWQgZW5kXCIpO1xuICB9IGVsc2UgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXG4gICAgICBcImVuZCBiZWZvcmUgc3RhcnRcIixcbiAgICAgIGBUaGUgZW5kIG9mIGFuIGludGVydmFsIG11c3QgYmUgYWZ0ZXIgaXRzIHN0YXJ0LCBidXQgeW91IGhhZCBzdGFydD0ke3N0YXJ0LnRvSVNPKCl9IGFuZCBlbmQ9JHtlbmQudG9JU08oKX1gXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIEludGVydmFsIG9iamVjdCByZXByZXNlbnRzIGEgaGFsZi1vcGVuIGludGVydmFsIG9mIHRpbWUsIHdoZXJlIGVhY2ggZW5kcG9pbnQgaXMgYSB7QGxpbmsgRGF0ZVRpbWV9LiBDb25jZXB0dWFsbHksIGl0J3MgYSBjb250YWluZXIgZm9yIHRob3NlIHR3byBlbmRwb2ludHMsIGFjY29tcGFuaWVkIGJ5IG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCBjb21wYXJpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIEludGVydmFsOlxuICpcbiAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhbiBJbnRlcnZhbCwgdXNlIHtAbGluayBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzfSwge0BsaW5rIEludGVydmFsLmFmdGVyfSwge0BsaW5rIEludGVydmFsLmJlZm9yZX0sIG9yIHtAbGluayBJbnRlcnZhbC5mcm9tSVNPfS5cbiAqICogKipBY2Nlc3NvcnMqKiBVc2Uge0BsaW5rIEludGVydmFsI3N0YXJ0fSBhbmQge0BsaW5rIEludGVydmFsI2VuZH0gdG8gZ2V0IHRoZSBzdGFydCBhbmQgZW5kLlxuICogKiAqKkludGVycm9nYXRpb24qKiBUbyBhbmFseXplIHRoZSBJbnRlcnZhbCwgdXNlIHtAbGluayBJbnRlcnZhbCNjb3VudH0sIHtAbGluayBJbnRlcnZhbCNsZW5ndGh9LCB7QGxpbmsgSW50ZXJ2YWwjaGFzU2FtZX0sIHtAbGluayBJbnRlcnZhbCNjb250YWluc30sIHtAbGluayBJbnRlcnZhbCNpc0FmdGVyfSwgb3Ige0BsaW5rIEludGVydmFsI2lzQmVmb3JlfS5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBvdGhlciBJbnRlcnZhbHMgb3V0IG9mIHRoaXMgb25lLCB1c2Uge0BsaW5rIEludGVydmFsI3NldH0sIHtAbGluayBJbnRlcnZhbCNzcGxpdEF0fSwge0BsaW5rIEludGVydmFsI3NwbGl0Qnl9LCB7QGxpbmsgSW50ZXJ2YWwjZGl2aWRlRXF1YWxseX0sIHtAbGluayBJbnRlcnZhbC5tZXJnZX0sIHtAbGluayBJbnRlcnZhbC54b3J9LCB7QGxpbmsgSW50ZXJ2YWwjdW5pb259LCB7QGxpbmsgSW50ZXJ2YWwjaW50ZXJzZWN0aW9ufSwgb3Ige0BsaW5rIEludGVydmFsI2RpZmZlcmVuY2V9LlxuICogKiAqKkNvbXBhcmlzb24qKiBUbyBjb21wYXJlIHRoaXMgSW50ZXJ2YWwgdG8gYW5vdGhlciBvbmUsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjZXF1YWxzfSwge0BsaW5rIEludGVydmFsI292ZXJsYXBzfSwge0BsaW5rIEludGVydmFsI2FidXRzU3RhcnR9LCB7QGxpbmsgSW50ZXJ2YWwjYWJ1dHNFbmR9LCB7QGxpbmsgSW50ZXJ2YWwjZW5ndWxmc31cbiAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBJbnRlcnZhbCBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBJbnRlcnZhbCN0b1N0cmluZ30sIHtAbGluayBJbnRlcnZhbCN0b0lTT30sIHtAbGluayBJbnRlcnZhbCN0b0lTT0RhdGV9LCB7QGxpbmsgSW50ZXJ2YWwjdG9JU09UaW1lfSwge0BsaW5rIEludGVydmFsI3RvRm9ybWF0fSwgYW5kIHtAbGluayBJbnRlcnZhbCN0b0R1cmF0aW9ufS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJ2YWwge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucyA9IGNvbmZpZy5zdGFydDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmUgPSBjb25maWcuZW5kO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0x1eG9uSW50ZXJ2YWwgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBJbnRlcnZhbCBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIEludGVydmFsIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRJbnRlcnZhbEVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHsgaW52YWxpZCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYW4gZW5kIERhdGVUaW1lLiBJbmNsdXNpdmUgb2YgdGhlIHN0YXJ0IGJ1dCBub3QgdGhlIGVuZC5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGZyb21EYXRlVGltZXMoc3RhcnQsIGVuZCkge1xuICAgIGNvbnN0IGJ1aWx0U3RhcnQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KSxcbiAgICAgIGJ1aWx0RW5kID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xuXG4gICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IHZhbGlkYXRlU3RhcnRFbmQoYnVpbHRTdGFydCwgYnVpbHRFbmQpO1xuXG4gICAgaWYgKHZhbGlkYXRlRXJyb3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBJbnRlcnZhbCh7XG4gICAgICAgIHN0YXJ0OiBidWlsdFN0YXJ0LFxuICAgICAgICBlbmQ6IGJ1aWx0RW5kLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZUVycm9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCB0by5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLlxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBhZnRlcihzdGFydCwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKSxcbiAgICAgIGR0ID0gZnJpZW5kbHlEYXRlVGltZShzdGFydCk7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQsIGR0LnBsdXMoZHVyKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gZW5kIERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCBiYWNrd2FyZHMgdG8uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IGVuZFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGJlZm9yZShlbmQsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoZW5kKTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdC5taW51cyhkdXIpLCBkdCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nLlxuICAgKiBBY2NlcHRzIGA8c3RhcnQ+LzxlbmQ+YCwgYDxzdGFydD4vPGR1cmF0aW9uPmAsIGFuZCBgPGR1cmF0aW9uPi88ZW5kPmAgZm9ybWF0cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdIC0gb3B0aW9ucyB0byBwYXNzIHtAbGluayBEYXRlVGltZSNmcm9tSVNPfSBhbmQgb3B0aW9uYWxseSB7QGxpbmsgRHVyYXRpb24jZnJvbUlTT31cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMpIHtcbiAgICBjb25zdCBbcywgZV0gPSAodGV4dCB8fCBcIlwiKS5zcGxpdChcIi9cIiwgMik7XG4gICAgaWYgKHMgJiYgZSkge1xuICAgICAgbGV0IHN0YXJ0LCBzdGFydElzVmFsaWQ7XG4gICAgICB0cnkge1xuICAgICAgICBzdGFydCA9IERhdGVUaW1lLmZyb21JU08ocywgb3B0cyk7XG4gICAgICAgIHN0YXJ0SXNWYWxpZCA9IHN0YXJ0LmlzVmFsaWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHN0YXJ0SXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW5kLCBlbmRJc1ZhbGlkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZW5kID0gRGF0ZVRpbWUuZnJvbUlTTyhlLCBvcHRzKTtcbiAgICAgICAgZW5kSXNWYWxpZCA9IGVuZC5pc1ZhbGlkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlbmRJc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydElzVmFsaWQgJiYgZW5kSXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0SXNWYWxpZCkge1xuICAgICAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tSVNPKGUsIG9wdHMpO1xuICAgICAgICBpZiAoZHVyLmlzVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuYWZ0ZXIoc3RhcnQsIGR1cik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kSXNWYWxpZCkge1xuICAgICAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tSVNPKHMsIG9wdHMpO1xuICAgICAgICBpZiAoZHVyLmlzVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuYmVmb3JlKGVuZCwgZHVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYW4gSW50ZXJ2YWwuIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0ludGVydmFsKG8pIHtcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uSW50ZXJ2YWwpIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXJ0IG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgc3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMucyA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZW5kIG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgZW5kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGF0IGxlYXN0IGl0cyBzdGFydCwgbWVhbmluZyB0aGF0IHRoZSBJbnRlcnZhbCBpc24ndCAnYmFja3dhcmRzJy5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkUmVhc29uID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIEludGVydmFsIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIEludGVydmFsIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBJbnRlcnZhbCBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbCBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIHJldHVybiB0aGUgbGVuZ3RoIGluLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBsZW5ndGgodW5pdCA9IFwibWlsbGlzZWNvbmRzXCIpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0R1cmF0aW9uKC4uLlt1bml0XSkuZ2V0KHVuaXQpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvdW50IG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCBtb250aHMsIG9yIHllYXJzIGluY2x1ZGVkIGluIHRoZSBJbnRlcnZhbCwgZXZlbiBpbiBwYXJ0LlxuICAgKiBVbmxpa2Uge0BsaW5rIEludGVydmFsI2xlbmd0aH0gdGhpcyBjb3VudHMgc2VjdGlvbnMgb2YgdGhlIGNhbGVuZGFyLCBub3QgcGVyaW9kcyBvZiB0aW1lLCBlLmcuIHNwZWNpZnlpbmcgJ2RheSdcbiAgICogYXNrcyAnd2hhdCBkYXRlcyBhcmUgaW5jbHVkZWQgaW4gdGhpcyBpbnRlcnZhbD8nLCBub3QgJ2hvdyBtYW55IGRheXMgbG9uZyBpcyB0aGlzIGludGVydmFsPydcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt1bml0PSdtaWxsaXNlY29uZHMnXSAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGNvdW50KHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBOYU47XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLnN0YXJ0LnN0YXJ0T2YodW5pdCksXG4gICAgICBlbmQgPSB0aGlzLmVuZC5zdGFydE9mKHVuaXQpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCkpICsgMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGFuZCBlbmQgYXJlIGJvdGggaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzU2FtZSh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuaXNFbXB0eSgpIHx8IHRoaXMuZS5taW51cygxKS5oYXNTYW1lKHRoaXMucywgdW5pdCkgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGhhcyB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIERhdGVUaW1lcy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucy52YWx1ZU9mKCkgPT09IHRoaXMuZS52YWx1ZU9mKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFmdGVyIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0FmdGVyKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zID4gZGF0ZVRpbWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBiZWZvcmUgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQmVmb3JlKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5lIDw9IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgY29udGFpbnMgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnRhaW5zKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IGRhdGVUaW1lICYmIHRoaXMuZSA+IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0c1wiIHRoZSBzdGFydCBhbmQvb3IgZW5kIGRhdGVzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgdmFsdWVzIHRvIHNldFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuc3RhcnQgLSB0aGUgc3RhcnRpbmcgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLmVuZCAtIHRoZSBlbmRpbmcgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzZXQoeyBzdGFydCwgZW5kIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCB8fCB0aGlzLnMsIGVuZCB8fCB0aGlzLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgYXQgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIERhdGVUaW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNvdW50LlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHNwbGl0QXQoLi4uZGF0ZVRpbWVzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcbiAgICBjb25zdCBzb3J0ZWQgPSBkYXRlVGltZXNcbiAgICAgICAgLm1hcChmcmllbmRseURhdGVUaW1lKVxuICAgICAgICAuZmlsdGVyKChkKSA9PiB0aGlzLmNvbnRhaW5zKGQpKVxuICAgICAgICAuc29ydCgpLFxuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpID0gMDtcblxuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XG4gICAgICBjb25zdCBhZGRlZCA9IHNvcnRlZFtpXSB8fCB0aGlzLmUsXG4gICAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XG4gICAgICBzID0gbmV4dDtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gc21hbGxlciBJbnRlcnZhbHMsIGVhY2ggb2YgdGhlIHNwZWNpZmllZCBsZW5ndGguXG4gICAqIExlZnQgb3ZlciB0aW1lIGlzIGdyb3VwZWQgaW50byBhIHNtYWxsZXIgaW50ZXJ2YWxcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBsZW5ndGggb2YgZWFjaCByZXN1bHRpbmcgaW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3BsaXRCeShkdXJhdGlvbikge1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIWR1ci5pc1ZhbGlkIHx8IGR1ci5hcyhcIm1pbGxpc2Vjb25kc1wiKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpZHggPSAxLFxuICAgICAgbmV4dDtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgY29uc3QgYWRkZWQgPSB0aGlzLnN0YXJ0LnBsdXMoZHVyLm1hcFVuaXRzKCh4KSA9PiB4ICogaWR4KSk7XG4gICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xuICAgICAgcyA9IG5leHQ7XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc21hbGxlciBpbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlBhcnRzIC0gVGhlIG51bWJlciBvZiBJbnRlcnZhbHMgdG8gZGl2aWRlIHRoZSBJbnRlcnZhbCBpbnRvLlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIGRpdmlkZUVxdWFsbHkobnVtYmVyT2ZQYXJ0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XG4gICAgcmV0dXJuIHRoaXMuc3BsaXRCeSh0aGlzLmxlbmd0aCgpIC8gbnVtYmVyT2ZQYXJ0cykuc2xpY2UoMCwgbnVtYmVyT2ZQYXJ0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBvdmVybGFwcyB3aXRoIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxcbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIG92ZXJsYXBzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZSA+IG90aGVyLnMgJiYgdGhpcy5zIDwgb3RoZXIuZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBzdGFydC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzU3RhcnQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIGVuZC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzRW5kKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gK290aGVyLmUgPT09ICt0aGlzLnM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBlbmd1bGZzIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlbmd1bGZzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IG90aGVyLnMgJiYgdGhpcy5lID49IG90aGVyLmU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBhcyB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIGludGVyc2VjdGlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtYXhpbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtaW5pbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLlxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGludGVyc2VjdGlvbiBpcyBlbXB0eSwgbWVhbmluZywgdGhlIGludGVydmFscyBkb24ndCBpbnRlcnNlY3QuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgaW50ZXJzZWN0aW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHMgPSB0aGlzLnMgPiBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucyxcbiAgICAgIGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcblxuICAgIGlmIChzID49IGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgdW5pb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWluaW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWF4aW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICB1bmlvbihvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBzID0gdGhpcy5zIDwgb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICBlID0gdGhpcy5lID4gb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMocywgZSk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIGludG8gYSBlcXVpdmFsZW50IG1pbmltYWwgc2V0IG9mIEludGVydmFscy5cbiAgICogQ29tYmluZXMgb3ZlcmxhcHBpbmcgYW5kIGFkamFjZW50IEludGVydmFscy5cbiAgICogQHBhcmFtIHtBcnJheX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1lcmdlKGludGVydmFscykge1xuICAgIGNvbnN0IFtmb3VuZCwgZmluYWxdID0gaW50ZXJ2YWxzXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zIC0gYi5zKVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKFtzb2ZhciwgY3VycmVudF0sIGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5vdmVybGFwcyhpdGVtKSB8fCBjdXJyZW50LmFidXRzU3RhcnQoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGN1cnJlbnQudW5pb24oaXRlbSldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3NvZmFyLmNvbmNhdChbY3VycmVudF0pLCBpdGVtXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtbXSwgbnVsbF1cbiAgICAgICk7XG4gICAgaWYgKGZpbmFsKSB7XG4gICAgICBmb3VuZC5wdXNoKGZpbmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBJbnRlcnZhbHMgcmVwcmVzZW50aW5nIHRoZSBzcGFucyBvZiB0aW1lIHRoYXQgb25seSBhcHBlYXIgaW4gb25lIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbnRlcnZhbHNcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgeG9yKGludGVydmFscykge1xuICAgIGxldCBzdGFydCA9IG51bGwsXG4gICAgICBjdXJyZW50Q291bnQgPSAwO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXSxcbiAgICAgIGVuZHMgPSBpbnRlcnZhbHMubWFwKChpKSA9PiBbXG4gICAgICAgIHsgdGltZTogaS5zLCB0eXBlOiBcInNcIiB9LFxuICAgICAgICB7IHRpbWU6IGkuZSwgdHlwZTogXCJlXCIgfSxcbiAgICAgIF0pLFxuICAgICAgZmxhdHRlbmVkID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5lbmRzKSxcbiAgICAgIGFyciA9IGZsYXR0ZW5lZC5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpO1xuXG4gICAgZm9yIChjb25zdCBpIG9mIGFycikge1xuICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gXCJzXCIgPyAxIDogLTE7XG5cbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHtcbiAgICAgICAgc3RhcnQgPSBpLnRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC5tZXJnZShyZXN1bHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBzcGFuIG9mIHRpbWUgaW4gdGhpcyBJbnRlcnZhbCB0aGF0IGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy5cbiAgICogQHBhcmFtIHsuLi5JbnRlcnZhbH0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZGlmZmVyZW5jZSguLi5pbnRlcnZhbHMpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwueG9yKFt0aGlzXS5jb25jYXQoaW50ZXJ2YWxzKSlcbiAgICAgIC5tYXAoKGkpID0+IHRoaXMuaW50ZXJzZWN0aW9uKGkpKVxuICAgICAgLmZpbHRlcigoaSkgPT4gaSAmJiAhaS5pc0VtcHR5KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGBbJHt0aGlzLnMudG9JU08oKX0g4oCTICR7dGhpcy5lLnRvSVNPKCl9KWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU08ob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPKG9wdHMpfS8ke3RoaXMuZS50b0lTTyhvcHRzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBkYXRlIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSB0aW1lIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09EYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPRGF0ZSgpfS8ke3RoaXMuZS50b0lTT0RhdGUoKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSBkYXRlIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09UaW1lKG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGAke3RoaXMucy50b0lTT1RpbWUob3B0cyl9LyR7dGhpcy5lLnRvSVNPVGltZShvcHRzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGVGb3JtYXQgLSB0aGUgZm9ybWF0IHN0cmluZy4gVGhpcyBzdHJpbmcgZm9ybWF0cyB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lLiBTZWUge0BsaW5rIERhdGVUaW1lI3RvRm9ybWF0fSBmb3IgZGV0YWlscy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5zZXBhcmF0b3IgPSAgJyDigJMgJ10gLSBhIHNlcGFyYXRvciB0byBwbGFjZSBiZXR3ZWVuIHRoZSBzdGFydCBhbmQgZW5kIHJlcHJlc2VudGF0aW9uc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0Zvcm1hdChkYXRlRm9ybWF0LCB7IHNlcGFyYXRvciA9IFwiIOKAkyBcIiB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGAke3RoaXMucy50b0Zvcm1hdChkYXRlRm9ybWF0KX0ke3NlcGFyYXRvcn0ke3RoaXMuZS50b0Zvcm1hdChkYXRlRm9ybWF0KX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIER1cmF0aW9uIHJlcHJlc2VudGluZyB0aGUgdGltZSBzcGFubmVkIGJ5IHRoaXMgaW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oKS50b09iamVjdCgpIC8vPT4geyBtaWxsaXNlY29uZHM6IDg4NDg5MjU3IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignZGF5cycpLnRvT2JqZWN0KCkgLy89PiB7IGRheXM6IDEuMDI0MTgxMjE1Mjc3Nzc3OCB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJ10pLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyNCwgbWludXRlczogMzQuODIwOTUgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKFsnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJ10pLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyNCwgbWludXRlczogMzQsIHNlY29uZHM6IDQ5LjI1NyB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oJ3NlY29uZHMnKS50b09iamVjdCgpIC8vPT4geyBzZWNvbmRzOiA4ODQ4OS4yNTcgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHRvRHVyYXRpb24odW5pdCwgb3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCh0aGlzLmludmFsaWRSZWFzb24pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lLmRpZmYodGhpcy5zLCB1bml0LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gbWFwRm4gb24gdGhlIGludGVydmFsIHN0YXJ0IGFuZCBlbmQsIHJldHVybmluZyBhIG5ldyBJbnRlcnZhbCBmcm9tIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcEZuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQudG9VVEMoKSlcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikubWFwRW5kcG9pbnRzKGVuZHBvaW50ID0+IGVuZHBvaW50LnBsdXMoeyBob3VyczogMiB9KSlcbiAgICovXG4gIG1hcEVuZHBvaW50cyhtYXBGbikge1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKG1hcEZuKHRoaXMucyksIG1hcEZuKHRoaXMuZSkpO1xuICB9XG59XG4iLCJpbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWUuanNcIjtcbmltcG9ydCBEdXJhdGlvbiBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuaW1wb3J0IEludGVydmFsIGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQgSW5mbyBmcm9tIFwiLi9pbmZvLmpzXCI7XG5pbXBvcnQgWm9uZSBmcm9tIFwiLi96b25lLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuL3pvbmVzL0lBTkFab25lLmpzXCI7XG5pbXBvcnQgSW52YWxpZFpvbmUgZnJvbSBcIi4vem9uZXMvaW52YWxpZFpvbmUuanNcIjtcbmltcG9ydCBTeXN0ZW1ab25lIGZyb20gXCIuL3pvbmVzL3N5c3RlbVpvbmUuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuXG5jb25zdCBWRVJTSU9OID0gXCIzLjEuMFwiO1xuXG5leHBvcnQge1xuICBWRVJTSU9OLFxuICBEYXRlVGltZSxcbiAgRHVyYXRpb24sXG4gIEludGVydmFsLFxuICBJbmZvLFxuICBab25lLFxuICBGaXhlZE9mZnNldFpvbmUsXG4gIElBTkFab25lLFxuICBJbnZhbGlkWm9uZSxcbiAgU3lzdGVtWm9uZSxcbiAgU2V0dGluZ3MsXG59O1xuIiwiaW1wb3J0IFN5c3RlbVpvbmUgZnJvbSBcIi4vem9uZXMvc3lzdGVtWm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuL3pvbmVzL0lBTkFab25lLmpzXCI7XG5pbXBvcnQgTG9jYWxlIGZyb20gXCIuL2ltcGwvbG9jYWxlLmpzXCI7XG5cbmltcG9ydCB7IG5vcm1hbGl6ZVpvbmUgfSBmcm9tIFwiLi9pbXBsL3pvbmVVdGlsLmpzXCI7XG5cbmxldCBub3cgPSAoKSA9PiBEYXRlLm5vdygpLFxuICBkZWZhdWx0Wm9uZSA9IFwic3lzdGVtXCIsXG4gIGRlZmF1bHRMb2NhbGUgPSBudWxsLFxuICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVsbCxcbiAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gbnVsbCxcbiAgdGhyb3dPbkludmFsaWQ7XG5cbi8qKlxuICogU2V0dGluZ3MgY29udGFpbnMgc3RhdGljIGdldHRlcnMgYW5kIHNldHRlcnMgdGhhdCBjb250cm9sIEx1eG9uJ3Mgb3ZlcmFsbCBiZWhhdmlvci4gTHV4b24gaXMgYSBzaW1wbGUgbGlicmFyeSB3aXRoIGZldyBvcHRpb25zLCBidXQgdGhlIG9uZXMgaXQgZG9lcyBoYXZlIGxpdmUgaGVyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3Mge1xuICAvKipcbiAgICogR2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgKi9cbiAgc3RhdGljIGdldCBub3coKSB7XG4gICAgcmV0dXJuIG5vdztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNhbGxiYWNrIGZvciByZXR1cm5pbmcgdGhlIGN1cnJlbnQgdGltZXN0YW1wLlxuICAgKiBUaGUgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIG51bWJlciwgd2hpY2ggd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBhbiBFcG9jaCBtaWxsaXNlY29uZCBjb3VudFxuICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IERhdGUubm93KCkgKyAzMDAwIC8vIHByZXRlbmQgaXQgaXMgMyBzZWNvbmRzIGluIHRoZSBmdXR1cmVcbiAgICogQGV4YW1wbGUgU2V0dGluZ3Mubm93ID0gKCkgPT4gMCAvLyBhbHdheXMgcHJldGVuZCBpdCdzIEphbiAxLCAxOTcwIGF0IG1pZG5pZ2h0IGluIFVUQyB0aW1lXG4gICAqL1xuICBzdGF0aWMgc2V0IG5vdyhuKSB7XG4gICAgbm93ID0gbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgdGltZSB6b25lIHRvIGNyZWF0ZSBEYXRlVGltZXMgaW4uIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIFVzZSB0aGUgdmFsdWUgXCJzeXN0ZW1cIiB0byByZXNldCB0aGlzIHZhbHVlIHRvIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgc2V0IGRlZmF1bHRab25lKHpvbmUpIHtcbiAgICBkZWZhdWx0Wm9uZSA9IHpvbmU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSBvYmplY3QgY3VycmVudGx5IHVzZWQgdG8gY3JlYXRlIERhdGVUaW1lcy4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgdGhlIHN5c3RlbSdzIHRpbWUgem9uZSAodGhlIG9uZSBzZXQgb24gdGhlIG1hY2hpbmUgdGhhdCBydW5zIHRoaXMgY29kZSkuXG4gICAqIEB0eXBlIHtab25lfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0Wm9uZSgpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWm9uZShkZWZhdWx0Wm9uZSwgU3lzdGVtWm9uZS5pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IGxvY2FsZSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRMb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IGxvY2FsZSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgc2V0IGRlZmF1bHRMb2NhbGUobG9jYWxlKSB7XG4gICAgZGVmYXVsdExvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlZmF1bHQgbnVtYmVyaW5nIHN5c3RlbSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW07XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtKG51bWJlcmluZ1N5c3RlbSkge1xuICAgIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJpbmdTeXN0ZW07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IG91dHB1dCBjYWxlbmRhciB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPdXRwdXRDYWxlbmRhcigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE91dHB1dENhbGVuZGFyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIob3V0cHV0Q2FsZW5kYXIpIHtcbiAgICBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBvdXRwdXRDYWxlbmRhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciBMdXhvbiB3aWxsIHRocm93IHdoZW4gaXQgZW5jb3VudGVycyBpbnZhbGlkIERhdGVUaW1lcywgRHVyYXRpb25zLCBvciBJbnRlcnZhbHNcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgZ2V0IHRocm93T25JbnZhbGlkKCkge1xuICAgIHJldHVybiB0aHJvd09uSW52YWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciBMdXhvbiB3aWxsIHRocm93IHdoZW4gaXQgZW5jb3VudGVycyBpbnZhbGlkIERhdGVUaW1lcywgRHVyYXRpb25zLCBvciBJbnRlcnZhbHNcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgc2V0IHRocm93T25JbnZhbGlkKHQpIHtcbiAgICB0aHJvd09uSW52YWxpZCA9IHQ7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgTHV4b24ncyBnbG9iYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzdGF0aWMgcmVzZXRDYWNoZXMoKSB7XG4gICAgTG9jYWxlLnJlc2V0Q2FjaGUoKTtcbiAgICBJQU5BWm9uZS5yZXNldENhY2hlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFpvbmVJc0Fic3RyYWN0RXJyb3IgfSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbmUge1xuICAvKipcbiAgICogVGhlIHR5cGUgb2Ygem9uZVxuICAgKiBAYWJzdHJhY3RcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB0eXBlKCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhpcyB6b25lLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICBnZXQgaWFuYU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9mZnNldCBpcyBrbm93biB0byBiZSBmaXhlZCBmb3IgdGhlIHdob2xlIHllYXIuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCdzIGNvbW1vbiBuYW1lIChzdWNoIGFzIEVTVCkgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXBcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBuYW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gT3B0aW9ucyB0byBhZmZlY3QgdGhlIGZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5mb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uIEFjY2VwdHMgJ2xvbmcnIG9yICdzaG9ydCcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmxvY2FsZSAtIFdoYXQgbG9jYWxlIHRvIHJldHVybiB0aGUgb2Zmc2V0IG5hbWUgaW4uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIG9mZnNldE5hbWUodHMsIG9wdHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCdzIHZhbHVlIGFzIGEgc3RyaW5nXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgb2Zmc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHRzICduYXJyb3cnLCAnc2hvcnQnLCBvciAndGVjaGllJy4gUmV0dXJuaW5nICcrNicsICcrMDY6MDAnLCBvciAnKzA2MDAnIHJlc3BlY3RpdmVseVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBvZmZzZXQgaW4gbWludXRlcyBmb3IgdGhpcyB6b25lIGF0IHRoZSBzcGVjaWZpZWQgdGltZXN0YW1wLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBjb21wdXRlIHRoZSBvZmZzZXRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgb2Zmc2V0KHRzKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIFpvbmUgaXMgZXF1YWwgdG8gYW5vdGhlciB6b25lXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge1pvbmV9IG90aGVyWm9uZSAtIHRoZSB6b25lIHRvIGNvbXBhcmVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyB2YWxpZC5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9ybWF0T2Zmc2V0LCBwYXJzZVpvbmVJbmZvLCBpc1VuZGVmaW5lZCwgb2JqVG9Mb2NhbFRTIH0gZnJvbSBcIi4uL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxubGV0IGR0ZkNhY2hlID0ge307XG5mdW5jdGlvbiBtYWtlRFRGKHpvbmUpIHtcbiAgaWYgKCFkdGZDYWNoZVt6b25lXSkge1xuICAgIGR0ZkNhY2hlW3pvbmVdID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICBob3VyMTI6IGZhbHNlLFxuICAgICAgdGltZVpvbmU6IHpvbmUsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICBzZWNvbmQ6IFwiMi1kaWdpdFwiLFxuICAgICAgZXJhOiBcInNob3J0XCIsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGR0ZkNhY2hlW3pvbmVdO1xufVxuXG5jb25zdCB0eXBlVG9Qb3MgPSB7XG4gIHllYXI6IDAsXG4gIG1vbnRoOiAxLFxuICBkYXk6IDIsXG4gIGVyYTogMyxcbiAgaG91cjogNCxcbiAgbWludXRlOiA1LFxuICBzZWNvbmQ6IDYsXG59O1xuXG5mdW5jdGlvbiBoYWNreU9mZnNldChkdGYsIGRhdGUpIHtcbiAgY29uc3QgZm9ybWF0dGVkID0gZHRmLmZvcm1hdChkYXRlKS5yZXBsYWNlKC9cXHUyMDBFL2csIFwiXCIpLFxuICAgIHBhcnNlZCA9IC8oXFxkKylcXC8oXFxkKylcXC8oXFxkKykgKEFEfEJDKSw/IChcXGQrKTooXFxkKyk6KFxcZCspLy5leGVjKGZvcm1hdHRlZCksXG4gICAgWywgZk1vbnRoLCBmRGF5LCBmWWVhciwgZmFkT3JCYywgZkhvdXIsIGZNaW51dGUsIGZTZWNvbmRdID0gcGFyc2VkO1xuICByZXR1cm4gW2ZZZWFyLCBmTW9udGgsIGZEYXksIGZhZE9yQmMsIGZIb3VyLCBmTWludXRlLCBmU2Vjb25kXTtcbn1cblxuZnVuY3Rpb24gcGFydHNPZmZzZXQoZHRmLCBkYXRlKSB7XG4gIGNvbnN0IGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXRUb1BhcnRzKGRhdGUpO1xuICBjb25zdCBmaWxsZWQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXR0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBmb3JtYXR0ZWRbaV07XG4gICAgY29uc3QgcG9zID0gdHlwZVRvUG9zW3R5cGVdO1xuXG4gICAgaWYgKHR5cGUgPT09IFwiZXJhXCIpIHtcbiAgICAgIGZpbGxlZFtwb3NdID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICghaXNVbmRlZmluZWQocG9zKSkge1xuICAgICAgZmlsbGVkW3Bvc10gPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmlsbGVkO1xufVxuXG5sZXQgaWFuYVpvbmVDYWNoZSA9IHt9O1xuLyoqXG4gKiBBIHpvbmUgaWRlbnRpZmllZCBieSBhbiBJQU5BIGlkZW50aWZpZXIsIGxpa2UgQW1lcmljYS9OZXdfWW9ya1xuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElBTkFab25lIGV4dGVuZHMgWm9uZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFpvbmUgbmFtZVxuICAgKiBAcmV0dXJuIHtJQU5BWm9uZX1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUobmFtZSkge1xuICAgIGlmICghaWFuYVpvbmVDYWNoZVtuYW1lXSkge1xuICAgICAgaWFuYVpvbmVDYWNoZVtuYW1lXSA9IG5ldyBJQU5BWm9uZShuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGlhbmFab25lQ2FjaGVbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgbG9jYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzdGF0aWMgcmVzZXRDYWNoZSgpIHtcbiAgICBpYW5hWm9uZUNhY2hlID0ge307XG4gICAgZHRmQ2FjaGUgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN0cmluZyBpcyBhIHZhbGlkIHNwZWNpZmllci4gVGhpcyBvbmx5IGNoZWNrcyB0aGUgc3RyaW5nJ3MgZm9ybWF0LCBub3QgdGhhdCB0aGUgc3BlY2lmaWVyIGlkZW50aWZpZXMgYSBrbm93biB6b25lOyBzZWUgaXNWYWxpZFpvbmUgZm9yIHRoYXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzIC0gVGhlIHN0cmluZyB0byBjaGVjayB2YWxpZGl0eSBvblxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiQW1lcmljYS9OZXdfWW9ya1wiKSAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihcIlNwb3J0fn5ibG9ycFwiKSAvLz0+IGZhbHNlXG4gICAqIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIHJldHVybnMgZmFsc2UgZm9yIHNvbWUgdmFsaWQgSUFOQSBuYW1lcy4gVXNlIGlzVmFsaWRab25lIGluc3RlYWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNWYWxpZFNwZWNpZmllcihzKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFpvbmUocyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaWRlbnRpZmllcyBhIHJlYWwgem9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gem9uZSAtIFRoZSBzdHJpbmcgdG8gY2hlY2tcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJBbWVyaWNhL05ld19Zb3JrXCIpIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIkZhbnRhc2lhL0Nhc3RsZVwiKSAvLz0+IGZhbHNlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiU3BvcnR+fmJsb3JwXCIpIC8vPT4gZmFsc2VcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc1ZhbGlkWm9uZSh6b25lKSB7XG4gICAgaWYgKCF6b25lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIsIHsgdGltZVpvbmU6IHpvbmUgfSkuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKCk7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIHRoaXMuem9uZU5hbWUgPSBuYW1lO1xuICAgIC8qKiBAcHJpdmF0ZSAqKi9cbiAgICB0aGlzLnZhbGlkID0gSUFOQVpvbmUuaXNWYWxpZFpvbmUobmFtZSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gXCJpYW5hXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy56b25lTmFtZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXROYW1lKHRzLCB7IGZvcm1hdCwgbG9jYWxlIH0pIHtcbiAgICByZXR1cm4gcGFyc2Vab25lSW5mbyh0cywgZm9ybWF0LCBsb2NhbGUsIHRoaXMubmFtZSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5vZmZzZXQodHMpLCBmb3JtYXQpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0KHRzKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRzKTtcblxuICAgIGlmIChpc05hTihkYXRlKSkgcmV0dXJuIE5hTjtcblxuICAgIGNvbnN0IGR0ZiA9IG1ha2VEVEYodGhpcy5uYW1lKTtcbiAgICBsZXQgW3llYXIsIG1vbnRoLCBkYXksIGFkT3JCYywgaG91ciwgbWludXRlLCBzZWNvbmRdID0gZHRmLmZvcm1hdFRvUGFydHNcbiAgICAgID8gcGFydHNPZmZzZXQoZHRmLCBkYXRlKVxuICAgICAgOiBoYWNreU9mZnNldChkdGYsIGRhdGUpO1xuXG4gICAgaWYgKGFkT3JCYyA9PT0gXCJCQ1wiKSB7XG4gICAgICB5ZWFyID0gLU1hdGguYWJzKHllYXIpICsgMTtcbiAgICB9XG5cbiAgICAvLyBiZWNhdXNlIHdlJ3JlIHVzaW5nIGhvdXIxMiBhbmQgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTAyNTU2NCZjYW49MiZxPSUyMjI0JTNBMDAlMjIlMjBkYXRldGltZWZvcm1hdFxuICAgIGNvbnN0IGFkanVzdGVkSG91ciA9IGhvdXIgPT09IDI0ID8gMCA6IGhvdXI7XG5cbiAgICBjb25zdCBhc1VUQyA9IG9ialRvTG9jYWxUUyh7XG4gICAgICB5ZWFyLFxuICAgICAgbW9udGgsXG4gICAgICBkYXksXG4gICAgICBob3VyOiBhZGp1c3RlZEhvdXIsXG4gICAgICBtaW51dGUsXG4gICAgICBzZWNvbmQsXG4gICAgICBtaWxsaXNlY29uZDogMCxcbiAgICB9KTtcblxuICAgIGxldCBhc1RTID0gK2RhdGU7XG4gICAgY29uc3Qgb3ZlciA9IGFzVFMgJSAxMDAwO1xuICAgIGFzVFMgLT0gb3ZlciA+PSAwID8gb3ZlciA6IDEwMDAgKyBvdmVyO1xuICAgIHJldHVybiAoYXNVVEMgLSBhc1RTKSAvICg2MCAqIDEwMDApO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gXCJpYW5hXCIgJiYgb3RoZXJab25lLm5hbWUgPT09IHRoaXMubmFtZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLnZhbGlkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmb3JtYXRPZmZzZXQsIHNpZ25lZE9mZnNldCB9IGZyb20gXCIuLi9pbXBsL3V0aWwuanNcIjtcbmltcG9ydCBab25lIGZyb20gXCIuLi96b25lLmpzXCI7XG5cbmxldCBzaW5nbGV0b24gPSBudWxsO1xuXG4vKipcbiAqIEEgem9uZSB3aXRoIGEgZml4ZWQgb2Zmc2V0IChtZWFuaW5nIG5vIERTVClcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXhlZE9mZnNldFpvbmUgZXh0ZW5kcyBab25lIHtcbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBVVENcbiAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgKi9cbiAgc3RhdGljIGdldCB1dGNJbnN0YW5jZSgpIHtcbiAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7XG4gICAgICBzaW5nbGV0b24gPSBuZXcgRml4ZWRPZmZzZXRab25lKDApO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBpbnN0YW5jZSB3aXRoIGEgc3BlY2lmaWVkIG9mZnNldFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gVGhlIG9mZnNldCBpbiBtaW51dGVzXG4gICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBpbnN0YW5jZShvZmZzZXQpIHtcbiAgICByZXR1cm4gb2Zmc2V0ID09PSAwID8gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlIDogbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBpbnN0YW5jZSBvZiBGaXhlZE9mZnNldFpvbmUgZnJvbSBhIFVUQyBvZmZzZXQgc3RyaW5nLCBsaWtlIFwiVVRDKzZcIlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcyAtIFRoZSBvZmZzZXQgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQys2XCIpXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQyswNlwiKVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMtNjowMFwiKVxuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBzdGF0aWMgcGFyc2VTcGVjaWZpZXIocykge1xuICAgIGlmIChzKSB7XG4gICAgICBjb25zdCByID0gcy5tYXRjaCgvXnV0Yyg/OihbKy1dXFxkezEsMn0pKD86OihcXGR7Mn0pKT8pPyQvaSk7XG4gICAgICBpZiAocikge1xuICAgICAgICByZXR1cm4gbmV3IEZpeGVkT2Zmc2V0Wm9uZShzaWduZWRPZmZzZXQoclsxXSwgclsyXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9mZnNldCkge1xuICAgIHN1cGVyKCk7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIHRoaXMuZml4ZWQgPSBvZmZzZXQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gXCJmaXhlZFwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQgPT09IDAgPyBcIlVUQ1wiIDogYFVUQyR7Zm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIFwibmFycm93XCIpfWA7XG4gIH1cblxuICBnZXQgaWFuYU5hbWUoKSB7XG4gICAgaWYgKHRoaXMuZml4ZWQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIkV0Yy9VVENcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBFdGMvR01UJHtmb3JtYXRPZmZzZXQoLXRoaXMuZml4ZWQsIFwibmFycm93XCIpfWA7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIGZvcm1hdCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImZpeGVkXCIgJiYgb3RoZXJab25lLmZpeGVkID09PSB0aGlzLmZpeGVkO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCBab25lIGZyb20gXCIuLi96b25lLmpzXCI7XG5cbi8qKlxuICogQSB6b25lIHRoYXQgZmFpbGVkIHRvIHBhcnNlLiBZb3Ugc2hvdWxkIG5ldmVyIG5lZWQgdG8gaW5zdGFudGlhdGUgdGhpcy5cbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZhbGlkWm9uZSBleHRlbmRzIFpvbmUge1xuICBjb25zdHJ1Y3Rvcih6b25lTmFtZSkge1xuICAgIHN1cGVyKCk7XG4gICAgLyoqICBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuem9uZU5hbWUgPSB6b25lTmFtZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcImludmFsaWRcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBmb3JtYXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGVxdWFscygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZvcm1hdE9mZnNldCwgcGFyc2Vab25lSW5mbyB9IGZyb20gXCIuLi9pbXBsL3V0aWwuanNcIjtcbmltcG9ydCBab25lIGZyb20gXCIuLi96b25lLmpzXCI7XG5cbmxldCBzaW5nbGV0b24gPSBudWxsO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGxvY2FsIHpvbmUgZm9yIHRoaXMgSmF2YVNjcmlwdCBlbnZpcm9ubWVudC5cbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeXN0ZW1ab25lIGV4dGVuZHMgWm9uZSB7XG4gIC8qKlxuICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIGxvY2FsIHpvbmVcbiAgICogQHJldHVybiB7U3lzdGVtWm9uZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgaWYgKHNpbmdsZXRvbiA9PT0gbnVsbCkge1xuICAgICAgc2luZ2xldG9uID0gbmV3IFN5c3RlbVpvbmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcInN5c3RlbVwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSh0cywgeyBmb3JtYXQsIGxvY2FsZSB9KSB7XG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLm9mZnNldCh0cyksIGZvcm1hdCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQodHMpIHtcbiAgICByZXR1cm4gLW5ldyBEYXRlKHRzKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gXCJzeXN0ZW1cIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=