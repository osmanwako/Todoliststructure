"use strict";
(self["webpackChunktodoliststructure"] = self["webpackChunktodoliststructure"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.main {\r\n  max-width: 768px;\r\n  padding: 3rem;\r\n  width: 100%;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  color: #545862;\r\n  width: 100%;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n  padding: 10px;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  border-bottom: #ebebeb 2px solid;\r\n  padding: 5px 10px 0 12px;\r\n}\r\n\r\n.row:has(p:focus) {\r\n  background-color: rgba(255, 255, 0, 0.321);\r\n  color: #545862;\r\n}\r\n\r\n.show-checked > p {\r\n  text-decoration: line-through;\r\n  text-decoration-thickness: 3px;\r\n  font-size: 16px;\r\n  color: #bababa;\r\n}\r\n\r\n.row-par {\r\n  flex-grow: 1;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.row-par:focus {\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 17px;\r\n  letter-spacing: 1px;\r\n  background-color: transparent;\r\n  text-decoration: none;\r\n}\r\n\r\n.row-input {\r\n  padding: 0;\r\n}\r\n\r\n.row-button {\r\n  display: block;\r\n  flex-grow: 0;\r\n  padding: 8px;\r\n  background-color: transparent;\r\n  max-width: 30px;\r\n  border: none;\r\n  text-align: left;\r\n  color: #bababa;\r\n}\r\n\r\n.button-reload > span {\r\n  font-size: 16px;\r\n  display: block;\r\n}\r\n\r\n.btn-checkbox {\r\n  display: block;\r\n  font-size: 20px;\r\n}\r\n\r\n.button-checked {\r\n  color: #00f;\r\n  font-style: italic;\r\n}\r\n\r\n.show-unchecked > .button-checked {\r\n  display: none;\r\n}\r\n\r\n.show-checked > .button-unchecked {\r\n  display: none;\r\n}\r\n\r\n.button-drag:hover {\r\n  color: #545862;\r\n  cursor: move;\r\n}\r\n\r\n.row:has(p:focus) > .button-drag {\r\n  display: none;\r\n}\r\n\r\n.row > .button-trash {\r\n  display: none;\r\n}\r\n\r\n.button-trash:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n.row:has(p:focus) > .button-trash {\r\n  display: block;\r\n}\r\n\r\ninput[type='text'] {\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 17px;\r\n  letter-spacing: 1px;\r\n  width: 100%;\r\n  cursor: auto;\r\n  padding: 10px;\r\n}\r\n\r\n.clear-completed {\r\n  background-color: #f6f6f6;\r\n  padding: 1rem;\r\n  color: #bababa;\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.clear-completed:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,wCAAwC;EACxC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,gCAAgC;EAChC,wBAAwB;AAC1B;;AAEA;EACE,0CAA0C;EAC1C,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.main {\r\n  max-width: 768px;\r\n  padding: 3rem;\r\n  width: 100%;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  color: #545862;\r\n  width: 100%;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n  padding: 10px;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  border-bottom: #ebebeb 2px solid;\r\n  padding: 5px 10px 0 12px;\r\n}\r\n\r\n.row:has(p:focus) {\r\n  background-color: rgba(255, 255, 0, 0.321);\r\n  color: #545862;\r\n}\r\n\r\n.show-checked > p {\r\n  text-decoration: line-through;\r\n  text-decoration-thickness: 3px;\r\n  font-size: 16px;\r\n  color: #bababa;\r\n}\r\n\r\n.row-par {\r\n  flex-grow: 1;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.row-par:focus {\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 17px;\r\n  letter-spacing: 1px;\r\n  background-color: transparent;\r\n  text-decoration: none;\r\n}\r\n\r\n.row-input {\r\n  padding: 0;\r\n}\r\n\r\n.row-button {\r\n  display: block;\r\n  flex-grow: 0;\r\n  padding: 8px;\r\n  background-color: transparent;\r\n  max-width: 30px;\r\n  border: none;\r\n  text-align: left;\r\n  color: #bababa;\r\n}\r\n\r\n.button-reload > span {\r\n  font-size: 16px;\r\n  display: block;\r\n}\r\n\r\n.btn-checkbox {\r\n  display: block;\r\n  font-size: 20px;\r\n}\r\n\r\n.button-checked {\r\n  color: #00f;\r\n  font-style: italic;\r\n}\r\n\r\n.show-unchecked > .button-checked {\r\n  display: none;\r\n}\r\n\r\n.show-checked > .button-unchecked {\r\n  display: none;\r\n}\r\n\r\n.button-drag:hover {\r\n  color: #545862;\r\n  cursor: move;\r\n}\r\n\r\n.row:has(p:focus) > .button-drag {\r\n  display: none;\r\n}\r\n\r\n.row > .button-trash {\r\n  display: none;\r\n}\r\n\r\n.button-trash:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n.row:has(p:focus) > .button-trash {\r\n  display: block;\r\n}\r\n\r\ninput[type='text'] {\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 17px;\r\n  letter-spacing: 1px;\r\n  width: 100%;\r\n  cursor: auto;\r\n  padding: 10px;\r\n}\r\n\r\n.clear-completed {\r\n  background-color: #f6f6f6;\r\n  padding: 1rem;\r\n  color: #bababa;\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.clear-completed:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/title.png":
/*!*************************************!*\
  !*** ./src/assets/images/title.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resource/images/title.png");

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/assets/js/dom-elements.js":
/*!***************************************!*\
  !*** ./src/assets/js/dom-elements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btnchecked": () => (/* binding */ btnchecked),
/* harmony export */   "btnclear": () => (/* binding */ btnclear),
/* harmony export */   "btndarg": () => (/* binding */ btndarg),
/* harmony export */   "btntrash": () => (/* binding */ btntrash),
/* harmony export */   "btnunchecked": () => (/* binding */ btnunchecked),
/* harmony export */   "divchecked": () => (/* binding */ divchecked),
/* harmony export */   "divunchecked": () => (/* binding */ divunchecked),
/* harmony export */   "entericon": () => (/* binding */ entericon),
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "ptodo": () => (/* binding */ ptodo),
/* harmony export */   "stack": () => (/* binding */ stack)
/* harmony export */ });
const btnclear = document.getElementById('cleartodolist');
const stack = document.getElementById('todolistid');
const input = document.getElementById('todo-input');
const entericon = document.getElementById('enterkey-icon');

const divunchecked = () => {
  const div = document.createElement('div');
  div.className = 'row show-unchecked';
  return div;
};

const divchecked = () => {
  const div = document.createElement('div');
  div.className = 'row show-checked';
  return div;
};

const btnchecked = () => {
  const btn = document.createElement('button');
  btn.className = 'row-button button-checked btn-checkbox';
  btn.innerHTML = '&#10004;';
  btn.name = 'checked';
  return btn;
};

const btnunchecked = () => {
  const btn = document.createElement('button');
  btn.className = 'row-button button-unchecked btn-checkbox';
  btn.innerHTML = '&#9744;';
  btn.name = 'unchecked';
  return btn;
};

const ptodo = () => {
  const par = document.createElement('p');
  par.className = 'row-par par-todo';
  par.setAttribute('contenteditable', 'true');
  return par;
};

const btntrash = () => {
  const btn = document.createElement('button');
  btn.className = 'row-button button-trash material-icons';
  btn.innerHTML = '&#xe872;';
  btn.name = 'buttontrash';
  return btn;
};

const btndarg = () => {
  const btn = document.createElement('button');
  btn.className = 'row-button button-drag material-icons';
  btn.innerHTML = '&#8942;';
  btn.name = 'buttondrag';
  return btn;
};


/***/ }),

/***/ "./src/assets/js/storedata.js":
/*!************************************!*\
  !*** ./src/assets/js/storedata.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getlists": () => (/* binding */ getlists),
/* harmony export */   "listeninput": () => (/* binding */ listeninput)
/* harmony export */ });
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements.js */ "./src/assets/js/dom-elements.js");
/* harmony import */ var _update_status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-status.js */ "./src/assets/js/update-status.js");



const istoredlist = () => localStorage.getItem('storedtodo');
const storelists = (lists) => {
  lists = lists.map((list, i) => ({ ...list, index: i }));
  localStorage.setItem('storedtodo', JSON.stringify(lists));
};

const addtostorage = (value) => {
  const id = `tdl${Date.now()}`;
  const list = {
    index: 0,
    desc: value,
    completed: false,
    id,
  };
  let lists = [];
  if (istoredlist()) {
    lists = JSON.parse(istoredlist());
    list.index = lists.length;
  }
  lists = [...lists, list];
  storelists(lists);
  return id;
};
const removelist = (id) => {
  if (istoredlist()) {
    let lists = JSON.parse(istoredlist());
    lists = lists.filter((list) => list.id !== id);
    storelists(lists);
  }
};

const listenremove = (event) => {
  const parent = event.srcElement.parentElement;
  parent.remove();
  removelist(parent.id);
};

const updatelist = (id, value) => {
  if (value === '') {
    removelist(id);
    document.getElementById(id).remove();
    return;
  }
  if (istoredlist()) {
    const lists = JSON.parse(istoredlist());
    lists.map((list) => {
      if (list.id === id) {
        list.desc = value;
      }
      return list;
    });
    storelists(lists);
  }
};

const parblur = (event) => {
  const value = event.target.textContent ?? '';
  const { id } = event.target.parentElement;
  updatelist(id, value);
};
const parkeyevent = (event) => {
  const value = event.target.textContent ?? '';
  const parent = event.target.parentElement;
  const { id } = parent;
  if (event.key === 'Enter') {
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.input.value = '';
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.input.focus();
    updatelist(id, value);
  }
  if (value === '' && event.key === 'Backspace') {
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.input.value = '';
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.input.focus();
    parent.remove();
    removelist(id);
  }
};
const updatestatus = (id) => {
  if (istoredlist()) {
    let lists = JSON.parse(istoredlist());
    lists = lists.map((list) => {
      if (list.id === id) {
        list.completed = (0,_update_status_js__WEBPACK_IMPORTED_MODULE_1__["default"])(list.completed);
      }
      return list;
    });
    storelists(lists);
  }
};
const showcheckbox = (event) => {
  const parent = event.target.parentElement;
  parent.classList.toggle('show-unchecked');
  parent.classList.toggle('show-checked');
  updatestatus(parent.id);
};

const addlist = () => {
  const value = _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.input.value ?? '';
  if (value) {
    const p = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.ptodo)();
    p.textContent = value;
    p.addEventListener('keydown', parkeyevent);
    p.addEventListener('blur', parkeyevent);
    const trash = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btntrash)();
    trash.addEventListener('click', listenremove);
    const unchecked = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btnunchecked)();
    const checked = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btnchecked)();
    checked.addEventListener('click', showcheckbox);
    unchecked.addEventListener('click', showcheckbox);
    const id = addtostorage(value);
    const div = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.divunchecked)();
    const drag = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btndarg)();
    div.id = id;
    div.append(checked, unchecked, p, trash, drag);
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.stack.insertBefore(div, _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btnclear);
  }
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.input.value = '';
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.input.focus();
};

const getenterkey = () => {
  addlist();
};

const getkeycode = (event) => {
  if (event.key === 'Enter') {
    addlist();
  }
};

const createlist = () => {
  const lists = JSON.parse(istoredlist());
  lists.forEach((list) => {
    const p = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.ptodo)();
    p.addEventListener('keydown', parkeyevent);
    p.addEventListener('blur', parblur);
    p.textContent = list.desc;
    const trash = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btntrash)();
    trash.addEventListener('mousedown', listenremove);
    const unchecked = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btnunchecked)();
    const checked = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btnchecked)();
    checked.addEventListener('click', showcheckbox);
    unchecked.addEventListener('click', showcheckbox);
    const drag = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btndarg)();
    if (list.completed) {
      const div = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.divchecked)();
      div.id = list.id;
      div.append(checked, unchecked, p, trash, drag);
      _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.stack.insertBefore(div, _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btnclear);
    } else {
      const div = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.divunchecked)();
      div.id = list.id;
      div.append(checked, unchecked, p, trash, drag);
      _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.stack.insertBefore(div, _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btnclear);
    }
  });
};

const listeninput = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.input.addEventListener('keydown', getkeycode);
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.entericon.addEventListener('click', getenterkey);
};

const clearcompleted = () => {
  if (istoredlist()) {
    let lists = JSON.parse(istoredlist());
    lists = lists.filter((list) => {
      if (list.completed) {
        const element = document.getElementById(list.id);
        element.remove();
      }
      return (0,_update_status_js__WEBPACK_IMPORTED_MODULE_1__["default"])(list.completed);
    });
    storelists(lists);
  }
};

const getlists = () => {
  if (istoredlist()) {
    createlist();
  }
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.btnclear.addEventListener('click', clearcompleted);
};


/***/ }),

/***/ "./src/assets/js/update-status.js":
/*!****************************************!*\
  !*** ./src/assets/js/update-status.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const iscompleted = (status) => !status;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iscompleted);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_title_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/title.png */ "./src/assets/images/title.png");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_js_storedata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/storedata.js */ "./src/assets/js/storedata.js");




const start = () => {
  (0,_assets_js_storedata_js__WEBPACK_IMPORTED_MODULE_2__.listeninput)();
  (0,_assets_js_storedata_js__WEBPACK_IMPORTED_MODULE_2__.getlists)();
};
start();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxrQkFBa0IsNERBQVU7QUFDNUI7QUFDQTtBQUNBLE1BQU0sZ0VBQWtCLE1BQU0sc0RBQVE7QUFDdEMsTUFBTTtBQUNOLGtCQUFrQiw4REFBWTtBQUM5QjtBQUNBO0FBQ0EsTUFBTSxnRUFBa0IsTUFBTSxzREFBUTtBQUN0QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUCxFQUFFLG9FQUFzQjtBQUN4QixFQUFFLHdFQUEwQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkRBQVc7QUFDeEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVFQUF5QjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7O0FDcE1BO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNEUTtBQUNIO0FBQ2lDO0FBQ2pFO0FBQ0E7QUFDQSxFQUFFLG9FQUFXO0FBQ2IsRUFBRSxpRUFBUTtBQUNWO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdHN0cnVjdHVyZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdHN0cnVjdHVyZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RzdHJ1Y3R1cmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHN0cnVjdHVyZS8uL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlLnBuZyIsIndlYnBhY2s6Ly90b2RvbGlzdHN0cnVjdHVyZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcz9jZGQ2Iiwid2VicGFjazovL3RvZG9saXN0c3RydWN0dXJlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0c3RydWN0dXJlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHN0cnVjdHVyZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHN0cnVjdHVyZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHN0cnVjdHVyZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0c3RydWN0dXJlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RzdHJ1Y3R1cmUvLi9zcmMvYXNzZXRzL2pzL2RvbS1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdHN0cnVjdHVyZS8uL3NyYy9hc3NldHMvanMvc3RvcmVkYXRhLmpzIiwid2VicGFjazovL3RvZG9saXN0c3RydWN0dXJlLy4vc3JjL2Fzc2V0cy9qcy91cGRhdGUtc3RhdHVzLmpzIiwid2VicGFjazovL3RvZG9saXN0c3RydWN0dXJlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIG1heC13aWR0aDogNzY4cHg7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYigwLCAwLCAwLCAwLjMpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogI2ViZWJlYiAycHggc29saWQ7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweCAwIDEycHg7XFxyXFxufVxcclxcblxcclxcbi5yb3c6aGFzKHA6Zm9jdXMpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMzIxKTtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jaGVja2VkID4gcCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDNweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LXBhciB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdy1wYXI6Zm9jdXMge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5yb3ctYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZmxleC1ncm93OiAwO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBtYXgtd2lkdGg6IDMwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tcmVsb2FkID4gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jaGVja2JveCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jaGVja2VkIHtcXHJcXG4gIGNvbG9yOiAjMDBmO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy11bmNoZWNrZWQgPiAuYnV0dG9uLWNoZWNrZWQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY2hlY2tlZCA+IC5idXR0b24tdW5jaGVja2VkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZHJhZzpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdzpoYXMocDpmb2N1cykgPiAuYnV0dG9uLWRyYWcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyA+IC5idXR0b24tdHJhc2gge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi10cmFzaDpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdzpoYXMocDpmb2N1cykgPiAuYnV0dG9uLXRyYXNoIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWNvbXBsZXRlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItY29tcGxldGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIG1heC13aWR0aDogNzY4cHg7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYigwLCAwLCAwLCAwLjMpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogI2ViZWJlYiAycHggc29saWQ7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweCAwIDEycHg7XFxyXFxufVxcclxcblxcclxcbi5yb3c6aGFzKHA6Zm9jdXMpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMzIxKTtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jaGVja2VkID4gcCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDNweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LXBhciB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdy1wYXI6Zm9jdXMge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5yb3ctYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZmxleC1ncm93OiAwO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBtYXgtd2lkdGg6IDMwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tcmVsb2FkID4gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jaGVja2JveCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jaGVja2VkIHtcXHJcXG4gIGNvbG9yOiAjMDBmO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy11bmNoZWNrZWQgPiAuYnV0dG9uLWNoZWNrZWQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY2hlY2tlZCA+IC5idXR0b24tdW5jaGVja2VkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tZHJhZzpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdzpoYXMocDpmb2N1cykgPiAuYnV0dG9uLWRyYWcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyA+IC5idXR0b24tdHJhc2gge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi10cmFzaDpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdzpoYXMocDpmb2N1cykgPiAuYnV0dG9uLXRyYXNoIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWNvbXBsZXRlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItY29tcGxldGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInJlc291cmNlL2ltYWdlcy90aXRsZS5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBidG5jbGVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcnRvZG9saXN0Jyk7XHJcbmV4cG9ydCBjb25zdCBzdGFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvbGlzdGlkJyk7XHJcbmV4cG9ydCBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWlucHV0Jyk7XHJcbmV4cG9ydCBjb25zdCBlbnRlcmljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXJrZXktaWNvbicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpdnVuY2hlY2tlZCA9ICgpID0+IHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuY2xhc3NOYW1lID0gJ3JvdyBzaG93LXVuY2hlY2tlZCc7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXZjaGVja2VkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5jbGFzc05hbWUgPSAncm93IHNob3ctY2hlY2tlZCc7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBidG5jaGVja2VkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ0bi5jbGFzc05hbWUgPSAncm93LWJ1dHRvbiBidXR0b24tY2hlY2tlZCBidG4tY2hlY2tib3gnO1xyXG4gIGJ0bi5pbm5lckhUTUwgPSAnJiMxMDAwNDsnO1xyXG4gIGJ0bi5uYW1lID0gJ2NoZWNrZWQnO1xyXG4gIHJldHVybiBidG47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYnRudW5jaGVja2VkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ0bi5jbGFzc05hbWUgPSAncm93LWJ1dHRvbiBidXR0b24tdW5jaGVja2VkIGJ0bi1jaGVja2JveCc7XHJcbiAgYnRuLmlubmVySFRNTCA9ICcmIzk3NDQ7JztcclxuICBidG4ubmFtZSA9ICd1bmNoZWNrZWQnO1xyXG4gIHJldHVybiBidG47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHRvZG8gPSAoKSA9PiB7XHJcbiAgY29uc3QgcGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHBhci5jbGFzc05hbWUgPSAncm93LXBhciBwYXItdG9kbyc7XHJcbiAgcGFyLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcclxuICByZXR1cm4gcGFyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ0bnRyYXNoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ0bi5jbGFzc05hbWUgPSAncm93LWJ1dHRvbiBidXR0b24tdHJhc2ggbWF0ZXJpYWwtaWNvbnMnO1xyXG4gIGJ0bi5pbm5lckhUTUwgPSAnJiN4ZTg3MjsnO1xyXG4gIGJ0bi5uYW1lID0gJ2J1dHRvbnRyYXNoJztcclxuICByZXR1cm4gYnRuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ0bmRhcmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnRuLmNsYXNzTmFtZSA9ICdyb3ctYnV0dG9uIGJ1dHRvbi1kcmFnIG1hdGVyaWFsLWljb25zJztcclxuICBidG4uaW5uZXJIVE1MID0gJyYjODk0MjsnO1xyXG4gIGJ0bi5uYW1lID0gJ2J1dHRvbmRyYWcnO1xyXG4gIHJldHVybiBidG47XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgYnRuY2xlYXIsXHJcbiAgc3RhY2ssXHJcbiAgYnRuY2hlY2tlZCxcclxuICBidG51bmNoZWNrZWQsXHJcbiAgcHRvZG8sXHJcbiAgYnRuZGFyZyxcclxuICBidG50cmFzaCxcclxuICBkaXZ1bmNoZWNrZWQsXHJcbiAgZGl2Y2hlY2tlZCxcclxuICBpbnB1dCxcclxuICBlbnRlcmljb24sXHJcbn0gZnJvbSAnLi9kb20tZWxlbWVudHMuanMnO1xyXG5pbXBvcnQgaXNjb21wbGV0ZWQgZnJvbSAnLi91cGRhdGUtc3RhdHVzLmpzJztcclxuXHJcbmNvbnN0IGlzdG9yZWRsaXN0ID0gKCkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZHRvZG8nKTtcclxuY29uc3Qgc3RvcmVsaXN0cyA9IChsaXN0cykgPT4ge1xyXG4gIGxpc3RzID0gbGlzdHMubWFwKChsaXN0LCBpKSA9PiAoeyAuLi5saXN0LCBpbmRleDogaSB9KSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZHRvZG8nLCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkdG9zdG9yYWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgaWQgPSBgdGRsJHtEYXRlLm5vdygpfWA7XHJcbiAgY29uc3QgbGlzdCA9IHtcclxuICAgIGluZGV4OiAwLFxyXG4gICAgZGVzYzogdmFsdWUsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgaWQsXHJcbiAgfTtcclxuICBsZXQgbGlzdHMgPSBbXTtcclxuICBpZiAoaXN0b3JlZGxpc3QoKSkge1xyXG4gICAgbGlzdHMgPSBKU09OLnBhcnNlKGlzdG9yZWRsaXN0KCkpO1xyXG4gICAgbGlzdC5pbmRleCA9IGxpc3RzLmxlbmd0aDtcclxuICB9XHJcbiAgbGlzdHMgPSBbLi4ubGlzdHMsIGxpc3RdO1xyXG4gIHN0b3JlbGlzdHMobGlzdHMpO1xyXG4gIHJldHVybiBpZDtcclxufTtcclxuY29uc3QgcmVtb3ZlbGlzdCA9IChpZCkgPT4ge1xyXG4gIGlmIChpc3RvcmVkbGlzdCgpKSB7XHJcbiAgICBsZXQgbGlzdHMgPSBKU09OLnBhcnNlKGlzdG9yZWRsaXN0KCkpO1xyXG4gICAgbGlzdHMgPSBsaXN0cy5maWx0ZXIoKGxpc3QpID0+IGxpc3QuaWQgIT09IGlkKTtcclxuICAgIHN0b3JlbGlzdHMobGlzdHMpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbnJlbW92ZSA9IChldmVudCkgPT4ge1xyXG4gIGNvbnN0IHBhcmVudCA9IGV2ZW50LnNyY0VsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICBwYXJlbnQucmVtb3ZlKCk7XHJcbiAgcmVtb3ZlbGlzdChwYXJlbnQuaWQpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlbGlzdCA9IChpZCwgdmFsdWUpID0+IHtcclxuICBpZiAodmFsdWUgPT09ICcnKSB7XHJcbiAgICByZW1vdmVsaXN0KGlkKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5yZW1vdmUoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGlzdG9yZWRsaXN0KCkpIHtcclxuICAgIGNvbnN0IGxpc3RzID0gSlNPTi5wYXJzZShpc3RvcmVkbGlzdCgpKTtcclxuICAgIGxpc3RzLm1hcCgobGlzdCkgPT4ge1xyXG4gICAgICBpZiAobGlzdC5pZCA9PT0gaWQpIHtcclxuICAgICAgICBsaXN0LmRlc2MgPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGlzdDtcclxuICAgIH0pO1xyXG4gICAgc3RvcmVsaXN0cyhsaXN0cyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcGFyYmx1ciA9IChldmVudCkgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID8/ICcnO1xyXG4gIGNvbnN0IHsgaWQgfSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gIHVwZGF0ZWxpc3QoaWQsIHZhbHVlKTtcclxufTtcclxuY29uc3QgcGFya2V5ZXZlbnQgPSAoZXZlbnQpID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA/PyAnJztcclxuICBjb25zdCBwYXJlbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICBjb25zdCB7IGlkIH0gPSBwYXJlbnQ7XHJcbiAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICB1cGRhdGVsaXN0KGlkLCB2YWx1ZSk7XHJcbiAgfVxyXG4gIGlmICh2YWx1ZSA9PT0gJycgJiYgZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJykge1xyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICBwYXJlbnQucmVtb3ZlKCk7XHJcbiAgICByZW1vdmVsaXN0KGlkKTtcclxuICB9XHJcbn07XHJcbmNvbnN0IHVwZGF0ZXN0YXR1cyA9IChpZCkgPT4ge1xyXG4gIGlmIChpc3RvcmVkbGlzdCgpKSB7XHJcbiAgICBsZXQgbGlzdHMgPSBKU09OLnBhcnNlKGlzdG9yZWRsaXN0KCkpO1xyXG4gICAgbGlzdHMgPSBsaXN0cy5tYXAoKGxpc3QpID0+IHtcclxuICAgICAgaWYgKGxpc3QuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgbGlzdC5jb21wbGV0ZWQgPSBpc2NvbXBsZXRlZChsaXN0LmNvbXBsZXRlZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9KTtcclxuICAgIHN0b3JlbGlzdHMobGlzdHMpO1xyXG4gIH1cclxufTtcclxuY29uc3Qgc2hvd2NoZWNrYm94ID0gKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgcGFyZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgcGFyZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctdW5jaGVja2VkJyk7XHJcbiAgcGFyZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctY2hlY2tlZCcpO1xyXG4gIHVwZGF0ZXN0YXR1cyhwYXJlbnQuaWQpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkbGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlID8/ICcnO1xyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgY29uc3QgcCA9IHB0b2RvKCk7XHJcbiAgICBwLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBwYXJrZXlldmVudCk7XHJcbiAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBwYXJrZXlldmVudCk7XHJcbiAgICBjb25zdCB0cmFzaCA9IGJ0bnRyYXNoKCk7XHJcbiAgICB0cmFzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbnJlbW92ZSk7XHJcbiAgICBjb25zdCB1bmNoZWNrZWQgPSBidG51bmNoZWNrZWQoKTtcclxuICAgIGNvbnN0IGNoZWNrZWQgPSBidG5jaGVja2VkKCk7XHJcbiAgICBjaGVja2VkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd2NoZWNrYm94KTtcclxuICAgIHVuY2hlY2tlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3djaGVja2JveCk7XHJcbiAgICBjb25zdCBpZCA9IGFkZHRvc3RvcmFnZSh2YWx1ZSk7XHJcbiAgICBjb25zdCBkaXYgPSBkaXZ1bmNoZWNrZWQoKTtcclxuICAgIGNvbnN0IGRyYWcgPSBidG5kYXJnKCk7XHJcbiAgICBkaXYuaWQgPSBpZDtcclxuICAgIGRpdi5hcHBlbmQoY2hlY2tlZCwgdW5jaGVja2VkLCBwLCB0cmFzaCwgZHJhZyk7XHJcbiAgICBzdGFjay5pbnNlcnRCZWZvcmUoZGl2LCBidG5jbGVhcik7XHJcbiAgfVxyXG4gIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgaW5wdXQuZm9jdXMoKTtcclxufTtcclxuXHJcbmNvbnN0IGdldGVudGVya2V5ID0gKCkgPT4ge1xyXG4gIGFkZGxpc3QoKTtcclxufTtcclxuXHJcbmNvbnN0IGdldGtleWNvZGUgPSAoZXZlbnQpID0+IHtcclxuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICBhZGRsaXN0KCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlbGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBsaXN0cyA9IEpTT04ucGFyc2UoaXN0b3JlZGxpc3QoKSk7XHJcbiAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xyXG4gICAgY29uc3QgcCA9IHB0b2RvKCk7XHJcbiAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBwYXJrZXlldmVudCk7XHJcbiAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBwYXJibHVyKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBsaXN0LmRlc2M7XHJcbiAgICBjb25zdCB0cmFzaCA9IGJ0bnRyYXNoKCk7XHJcbiAgICB0cmFzaC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5yZW1vdmUpO1xyXG4gICAgY29uc3QgdW5jaGVja2VkID0gYnRudW5jaGVja2VkKCk7XHJcbiAgICBjb25zdCBjaGVja2VkID0gYnRuY2hlY2tlZCgpO1xyXG4gICAgY2hlY2tlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3djaGVja2JveCk7XHJcbiAgICB1bmNoZWNrZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Y2hlY2tib3gpO1xyXG4gICAgY29uc3QgZHJhZyA9IGJ0bmRhcmcoKTtcclxuICAgIGlmIChsaXN0LmNvbXBsZXRlZCkge1xyXG4gICAgICBjb25zdCBkaXYgPSBkaXZjaGVja2VkKCk7XHJcbiAgICAgIGRpdi5pZCA9IGxpc3QuaWQ7XHJcbiAgICAgIGRpdi5hcHBlbmQoY2hlY2tlZCwgdW5jaGVja2VkLCBwLCB0cmFzaCwgZHJhZyk7XHJcbiAgICAgIHN0YWNrLmluc2VydEJlZm9yZShkaXYsIGJ0bmNsZWFyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRpdnVuY2hlY2tlZCgpO1xyXG4gICAgICBkaXYuaWQgPSBsaXN0LmlkO1xyXG4gICAgICBkaXYuYXBwZW5kKGNoZWNrZWQsIHVuY2hlY2tlZCwgcCwgdHJhc2gsIGRyYWcpO1xyXG4gICAgICBzdGFjay5pbnNlcnRCZWZvcmUoZGl2LCBidG5jbGVhcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVuaW5wdXQgPSAoKSA9PiB7XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdldGtleWNvZGUpO1xyXG4gIGVudGVyaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldGVudGVya2V5KTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyY29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGlmIChpc3RvcmVkbGlzdCgpKSB7XHJcbiAgICBsZXQgbGlzdHMgPSBKU09OLnBhcnNlKGlzdG9yZWRsaXN0KCkpO1xyXG4gICAgbGlzdHMgPSBsaXN0cy5maWx0ZXIoKGxpc3QpID0+IHtcclxuICAgICAgaWYgKGxpc3QuY29tcGxldGVkKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3QuaWQpO1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGlzY29tcGxldGVkKGxpc3QuY29tcGxldGVkKTtcclxuICAgIH0pO1xyXG4gICAgc3RvcmVsaXN0cyhsaXN0cyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldGxpc3RzID0gKCkgPT4ge1xyXG4gIGlmIChpc3RvcmVkbGlzdCgpKSB7XHJcbiAgICBjcmVhdGVsaXN0KCk7XHJcbiAgfVxyXG4gIGJ0bmNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJjb21wbGV0ZWQpO1xyXG59O1xyXG4iLCJjb25zdCBpc2NvbXBsZXRlZCA9IChzdGF0dXMpID0+ICFzdGF0dXM7XHJcbmV4cG9ydCBkZWZhdWx0IGlzY29tcGxldGVkO1xyXG4iLCJpbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy90aXRsZS5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBnZXRsaXN0cywgbGlzdGVuaW5wdXQgfSBmcm9tICcuL2Fzc2V0cy9qcy9zdG9yZWRhdGEuanMnO1xyXG5cclxuY29uc3Qgc3RhcnQgPSAoKSA9PiB7XHJcbiAgbGlzdGVuaW5wdXQoKTtcclxuICBnZXRsaXN0cygpO1xyXG59O1xyXG5zdGFydCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=