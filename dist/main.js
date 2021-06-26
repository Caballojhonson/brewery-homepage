/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_Randoms_1_JPG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Randoms-1.JPG */ "./src/images/Randoms-1.JPG");
/* harmony import */ var _images_Randoms_1_3_JPG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Randoms-1-3.JPG */ "./src/images/Randoms-1-3.JPG");
/* harmony import */ var _fonts_Oswald_VariableFont_wght_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonts/Oswald-VariableFont_wght.ttf */ "./src/fonts/Oswald-VariableFont_wght.ttf");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_Randoms_1_JPG__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_Randoms_1_3_JPG__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Oswald_VariableFont_wght_ttf__WEBPACK_IMPORTED_MODULE_5__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --bottleBackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    --mainBackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n    font-family: 'Oswald';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") \n    format('truetype-variations');\n}\n@keyframes fadeIn {\n    from {color: transparent;\n        opacity: 0%;\n    }\n    to {color: black;\n        opacity: 100%;\n    }\n}\nhtml, body {\n    margin: 0px;\n    min-height: 100%;\n}\ndiv {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\nnav {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\np {\n    font-family: 'Oswald';\n    font-size: 1rem;\n    font-variation-settings: 'wght' 50;\n}\nh2 {\n    font-family: 'Oswald';\n}\nh6 {\n    font-family: 'Oswald';\n    font-size: 1.1rem;\n    margin: 1rem 0rem 1rem 0rem; \n}\n#content {\n    flex-direction: column;\n    justify-content: center;\n    background-repeat: no-repeat;\n    background-size:cover;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    transition: background-image 0.6s ease-in-out;\n}\n#scrollable {\n    width: 60%;\n    height: 60vh;\n    margin: 19vh 0px 15vh 20rem;\n    padding: 1vh 0rem 5vh 0rem;\n    border-radius: 1rem;\n    justify-content: flex-start;\n    flex-direction: column;\n    background: radial-gradient(circle,\n     rgba(255, 255, 255, 0.959) 65%,\n      rgba(255, 255, 255, 0.76) 92%,\n       rgba(255, 255, 255, 0.589) 98%);\n    overflow-x: hidden;\n    overflow-y: scroll;\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n}\n#scrollable::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n}\n#scrollSection {\nposition: sticky;\nmargin: -25vh 0px 15vh 20rem;\nborder-bottom-left-radius: 1rem;\nborder-bottom-right-radius: 1rem;;\nwidth: 60%;\nheight: 10vh;\nbackground: rgb(255,255,255);\nbackground: linear-gradient(180deg,\n rgba(255,255,255,0) 0%,\n rgba(255, 255, 255, 0.815) 50%,\n  rgba(255,255,255,1) 100%);\n}\n#scrollIcon {\n    width: 2.4rem;\n}\n\n/* SIDEBAR */\n\n#sideBar {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    flex-direction: column;\n    justify-content: space-between;\n    background-image: linear-gradient(to right,\n     rgba(255, 255, 255, 0.932) 75%,\n      rgba(255, 255, 255, 0.795));\n    width: 20rem;\n    height: 100vh;\n}\n.logo{\n    margin-top: 3rem;\n    width: 8rem;\n}\n#linkContainer {\n    flex-grow: 0.2;\n}\n.navbar {\n    font-family: 'Oswald';\n    font-size: 1.7rem;\n    font-variation-settings: 'wght' 250;\n    cursor: pointer;\n}\n.navbar:hover {\n    font-weight: 900;\n    transition: font-weight 0.1s;\n}\n#homeBtn {\n    text-decoration: underline;\n}\n\n#copyContainer {\n    justify-content: space-between;\n    width: 100%;\n}\n#copyright {\n    font-family: 'Oswald';\n    font-size: 0.6rem;\n    font-variation-settings: 'wght' 50;\n    margin-right: 20%;\n}\n#linkToGit {\n   margin-left: 15%;\n    cursor: pointer;\n}\n#gitLogo {\n    width: 2rem;\n}\n\n/* HOME */\n\n.titles {\n    font-family: 'Oswald';\n    animation-name: fadeIn;\n    animation-duration: 2.5s;\n}\n.subTitles {\n    font-size: 1rem;\n    font-variation-settings: 'wght' 50;\n    animation-name: fadeIn;\n    animation-duration: 5s;\n}\n#homeLogo {\n    margin-bottom: 2vh;\n    animation-name: fadeIn;\n    animation-duration: 4s;\n}\n\n/* PRODUCTS */\n\n.beerContainer {\n    flex-direction: column;\n    min-width: 100%;\n    margin: 0vh 0vh 8.5vh 0vh;\n}\n\n .imgContainer {\n    margin-left: 5rem;\n }\n\n.beerImg {\n    height: 50vh;\n}\n\n .descContainer {\n     width: 80%;\n}\n.desc {\n    width: 50%;\n    font-size: 1.2rem;\n    font-variation-settings: 'wght' 300;\n}\n .statsContainer {\n     margin-right: 5rem;\n flex-direction: column;\n width: fit-content;\n font-size: 1.2rem;\n }\n.seal {\n    margin-top: -2rem;\n    margin-bottom: 2rem;\n    width: 7rem;\n}\n#finalImage {\n    height: 25vw;\n}\n\n/* ABOUT */\n\n#aboutText {\n    padding: 10rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2DAAiD;IACjD,yDAAiD;AACrD;AACA;IACI,qBAAqB;IACrB;iCAC6B;AACjC;AACA;IACI,MAAM,kBAAkB;QACpB,WAAW;IACf;IACA,IAAI,YAAY;QACZ,aAAa;IACjB;AACJ;AACA;IACI,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,qBAAqB;IACrB,eAAe;IACf,kCAAkC;AACtC;AACA;IACI,qBAAqB;AACzB;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,2BAA2B;AAC/B;AACA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,4BAA4B;IAC5B,qBAAqB;IACrB,yDAAiD;IACjD,6CAA6C;AACjD;AACA;IACI,UAAU;IACV,YAAY;IACZ,2BAA2B;IAC3B,0BAA0B;IAC1B,mBAAmB;IACnB,2BAA2B;IAC3B,sBAAsB;IACtB;;;sCAGkC;IAClC,kBAAkB;IAClB,kBAAkB;IAClB,wBAAwB,EAAE,gCAAgC;IAC1D,qBAAqB,EAAE,gBAAgB;AAC3C;AACA;IACI,aAAa,EAAE,kCAAkC;AACrD;AACA;AACA,gBAAgB;AAChB,4BAA4B;AAC5B,+BAA+B;AAC/B,gCAAgC;AAChC,UAAU;AACV,YAAY;AACZ,4BAA4B;AAC5B;;;2BAG2B;AAC3B;AACA;IACI,aAAa;AACjB;;AAEA,YAAY;;AAEZ;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,sBAAsB;IACtB,8BAA8B;IAC9B;;iCAE6B;IAC7B,YAAY;IACZ,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,WAAW;AACf;AACA;IACI,cAAc;AAClB;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,mCAAmC;IACnC,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,4BAA4B;AAChC;AACA;IACI,0BAA0B;AAC9B;;AAEA;IACI,8BAA8B;IAC9B,WAAW;AACf;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,kCAAkC;IAClC,iBAAiB;AACrB;AACA;GACG,gBAAgB;IACf,eAAe;AACnB;AACA;IACI,WAAW;AACf;;AAEA,SAAS;;AAET;IACI,qBAAqB;IACrB,sBAAsB;IACtB,wBAAwB;AAC5B;AACA;IACI,eAAe;IACf,kCAAkC;IAClC,sBAAsB;IACtB,sBAAsB;AAC1B;AACA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA,aAAa;;AAEb;IACI,sBAAsB;IACtB,eAAe;IACf,yBAAyB;AAC7B;;CAEC;IACG,iBAAiB;CACpB;;AAED;IACI,YAAY;AAChB;;CAEC;KACI,UAAU;AACf;AACA;IACI,UAAU;IACV,iBAAiB;IACjB,mCAAmC;AACvC;CACC;KACI,kBAAkB;CACtB,sBAAsB;CACtB,kBAAkB;CAClB,iBAAiB;CACjB;AACD;IACI,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,YAAY;AAChB;;AAEA,UAAU;;AAEV;IACI,cAAc;AAClB","sourcesContent":[":root{\n    --bottleBackground: url('./images/Randoms-1.JPG');\n    --mainBackground: url('./images/Randoms-1-3.JPG');\n}\n@font-face {\n    font-family: 'Oswald';\n    src: url('./fonts/Oswald-VariableFont_wght.ttf') \n    format('truetype-variations');\n}\n@keyframes fadeIn {\n    from {color: transparent;\n        opacity: 0%;\n    }\n    to {color: black;\n        opacity: 100%;\n    }\n}\nhtml, body {\n    margin: 0px;\n    min-height: 100%;\n}\ndiv {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\nnav {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\np {\n    font-family: 'Oswald';\n    font-size: 1rem;\n    font-variation-settings: 'wght' 50;\n}\nh2 {\n    font-family: 'Oswald';\n}\nh6 {\n    font-family: 'Oswald';\n    font-size: 1.1rem;\n    margin: 1rem 0rem 1rem 0rem; \n}\n#content {\n    flex-direction: column;\n    justify-content: center;\n    background-repeat: no-repeat;\n    background-size:cover;\n    background-image: url('./images/Randoms-1-3.JPG');\n    transition: background-image 0.6s ease-in-out;\n}\n#scrollable {\n    width: 60%;\n    height: 60vh;\n    margin: 19vh 0px 15vh 20rem;\n    padding: 1vh 0rem 5vh 0rem;\n    border-radius: 1rem;\n    justify-content: flex-start;\n    flex-direction: column;\n    background: radial-gradient(circle,\n     rgba(255, 255, 255, 0.959) 65%,\n      rgba(255, 255, 255, 0.76) 92%,\n       rgba(255, 255, 255, 0.589) 98%);\n    overflow-x: hidden;\n    overflow-y: scroll;\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n}\n#scrollable::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n}\n#scrollSection {\nposition: sticky;\nmargin: -25vh 0px 15vh 20rem;\nborder-bottom-left-radius: 1rem;\nborder-bottom-right-radius: 1rem;;\nwidth: 60%;\nheight: 10vh;\nbackground: rgb(255,255,255);\nbackground: linear-gradient(180deg,\n rgba(255,255,255,0) 0%,\n rgba(255, 255, 255, 0.815) 50%,\n  rgba(255,255,255,1) 100%);\n}\n#scrollIcon {\n    width: 2.4rem;\n}\n\n/* SIDEBAR */\n\n#sideBar {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    flex-direction: column;\n    justify-content: space-between;\n    background-image: linear-gradient(to right,\n     rgba(255, 255, 255, 0.932) 75%,\n      rgba(255, 255, 255, 0.795));\n    width: 20rem;\n    height: 100vh;\n}\n.logo{\n    margin-top: 3rem;\n    width: 8rem;\n}\n#linkContainer {\n    flex-grow: 0.2;\n}\n.navbar {\n    font-family: 'Oswald';\n    font-size: 1.7rem;\n    font-variation-settings: 'wght' 250;\n    cursor: pointer;\n}\n.navbar:hover {\n    font-weight: 900;\n    transition: font-weight 0.1s;\n}\n#homeBtn {\n    text-decoration: underline;\n}\n\n#copyContainer {\n    justify-content: space-between;\n    width: 100%;\n}\n#copyright {\n    font-family: 'Oswald';\n    font-size: 0.6rem;\n    font-variation-settings: 'wght' 50;\n    margin-right: 20%;\n}\n#linkToGit {\n   margin-left: 15%;\n    cursor: pointer;\n}\n#gitLogo {\n    width: 2rem;\n}\n\n/* HOME */\n\n.titles {\n    font-family: 'Oswald';\n    animation-name: fadeIn;\n    animation-duration: 2.5s;\n}\n.subTitles {\n    font-size: 1rem;\n    font-variation-settings: 'wght' 50;\n    animation-name: fadeIn;\n    animation-duration: 5s;\n}\n#homeLogo {\n    margin-bottom: 2vh;\n    animation-name: fadeIn;\n    animation-duration: 4s;\n}\n\n/* PRODUCTS */\n\n.beerContainer {\n    flex-direction: column;\n    min-width: 100%;\n    margin: 0vh 0vh 8.5vh 0vh;\n}\n\n .imgContainer {\n    margin-left: 5rem;\n }\n\n.beerImg {\n    height: 50vh;\n}\n\n .descContainer {\n     width: 80%;\n}\n.desc {\n    width: 50%;\n    font-size: 1.2rem;\n    font-variation-settings: 'wght' 300;\n}\n .statsContainer {\n     margin-right: 5rem;\n flex-direction: column;\n width: fit-content;\n font-size: 1.2rem;\n }\n.seal {\n    margin-top: -2rem;\n    margin-bottom: 2rem;\n    width: 7rem;\n}\n#finalImage {\n    height: 25vw;\n}\n\n/* ABOUT */\n\n#aboutText {\n    padding: 10rem;\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/fonts/Oswald-VariableFont_wght.ttf":
/*!************************************************!*\
  !*** ./src/fonts/Oswald-VariableFont_wght.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88fc6c5b10cd8b2781cb.ttf";

/***/ }),

/***/ "./src/images/7.png":
/*!**************************!*\
  !*** ./src/images/7.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f64d53d6a4dc3a055db.png";

/***/ }),

/***/ "./src/images/8.png":
/*!**************************!*\
  !*** ./src/images/8.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80fd87db9aed3231a270.png";

/***/ }),

/***/ "./src/images/PV9.png":
/*!****************************!*\
  !*** ./src/images/PV9.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a06610635cb4a2d3e89e.png";

/***/ }),

/***/ "./src/images/Randoms-1-3.JPG":
/*!************************************!*\
  !*** ./src/images/Randoms-1-3.JPG ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b93b791685c0e0be7b42.JPG";

/***/ }),

/***/ "./src/images/Randoms-1.JPG":
/*!**********************************!*\
  !*** ./src/images/Randoms-1.JPG ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "197a35a0e51e111e245e.JPG";

/***/ }),

/***/ "./src/images/TrioPNG.png":
/*!********************************!*\
  !*** ./src/images/TrioPNG.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd4d88ed97a5a93b6efc.png";

/***/ }),

/***/ "./src/images/github-logo.png":
/*!************************************!*\
  !*** ./src/images/github-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7615be16eed41f806def.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "434adc5c437b9914b932.png";

/***/ }),

/***/ "./src/images/scroll.png":
/*!*******************************!*\
  !*** ./src/images/scroll.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32d760747da4f0c3c101.png";

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_github_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/github-logo.png */ "./src/images/github-logo.png");
/* harmony import */ var _images_scroll_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/scroll.png */ "./src/images/scroll.png");
/* harmony import */ var _images_7_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/7.png */ "./src/images/7.png");
/* harmony import */ var _images_8_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/8.png */ "./src/images/8.png");
/* harmony import */ var _images_PV9_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/PV9.png */ "./src/images/PV9.png");
/* harmony import */ var _images_TrioPNG_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/TrioPNG.png */ "./src/images/TrioPNG.png");










// SIDEBAR AND CONTENT SECTION

const sideBar = (() => {
    const main = document.getElementById('content');

    const scrollable = document.createElement('div');
    scrollable.id = 'scrollable';
    const scrollSection = document.createElement('div');
    scrollSection.id = 'scrollSection';
    const scrollIcon = new Image();
    scrollIcon.id = 'scrollIcon';
    scrollIcon.src = _images_scroll_png__WEBPACK_IMPORTED_MODULE_3__;


    const sideContainer = document.createElement('div');
    sideContainer.id = 'sideBar';

    const logoContainer = document.createElement('div');
    logoContainer.id = 'logoContainer';
    const logo = new Image();
    logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;
    logo.classList.add('logo')

    const linkContainer = document.createElement('nav');
    linkContainer.id = 'linkContainer';
    const homeBtn = document.createElement('h3');
    homeBtn.classList.add('navbar');
    homeBtn.id = 'homeBtn';
    homeBtn.textContent = 'Home'
    const productBtn = document.createElement('h3');
    productBtn.classList.add('navbar');
    productBtn.id = 'productBtn';
    productBtn.textContent = 'Products';
    const aboutBtn = document.createElement('h3');
    aboutBtn.classList.add('navbar');
    aboutBtn.id = 'aboutBtn';
    aboutBtn.textContent = 'About us';
    const contactBtn = document.createElement('h3');
    contactBtn.classList.add('navbar');
    contactBtn.id = 'contactBtn';
    contactBtn.textContent = 'Contact';

    const copyContainer = document.createElement('div');
    copyContainer.id = 'copyContainer';
    const linkToGit = document.createElement('a');
    linkToGit.id = 'linkToGit';
    linkToGit.setAttribute('href', 'https://github.com/Caballojhonson')
    linkToGit.setAttribute('target', '_blank')
    const gitLogo = new Image();
    gitLogo.src = _images_github_logo_png__WEBPACK_IMPORTED_MODULE_2__;
    gitLogo.id = 'gitLogo';

    const copyright = document.createElement('h6');
    copyright.id = 'copyright';
    copyright.textContent = '\u00A9 2021, CaballoJhonson. All rights reserved.'


    const render = () => {
        main.appendChild(sideContainer);
        main.appendChild(scrollable);
        main.appendChild(scrollSection);
        scrollSection.appendChild(scrollIcon);

        sideContainer.appendChild(logoContainer);
        sideContainer.appendChild(linkContainer);
        sideContainer.appendChild(copyContainer);

        logoContainer.appendChild(logo);

        linkContainer.appendChild(homeBtn);
        linkContainer.appendChild(productBtn);
        linkContainer.appendChild(aboutBtn);
        linkContainer.appendChild(contactBtn);

        copyContainer.appendChild(linkToGit)
        linkToGit.appendChild(gitLogo);
        copyContainer.appendChild(copyright);
    };

    return { scrollable, render }
})();

// HOME SECTION

const home = (() => {
    const main = sideBar.scrollable;

    const titles = [
        'The last brewery to be created in Barcelona before the 2020 pandemic',
        'First ever "company" to avoid selling its own products',
        'First modern brewery to never brew an IPA',
        'The first brewery to create its website after bankrupcy',
        '"Short Brewing"',
    ];

    const subTitles = [
        `Launched on January 2020, one of the best moments in modern history to start a craft brewery.
         We broke the record for number of events created and cancelled per time in buisness`,
        `We stopped selling in February 2020 to avoid stock breaking before a big festival we were part of.
        It was of course also cancelled.`,
        `We'll never brew an IPA! We said... So we never did`,
        `June 2021: We're proud to be the first company to launch its official website when it's no longer necessary.
         Just do everything wrong, totally worth it.`,
        `Ourselves`,
    ];

    const render = () => {
        const logo = new Image();
        logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;
        logo.classList.add('logo');
        logo.id = 'homeLogo'
        main.appendChild(logo)

        const renderTitles = () => {

            for (let i = 0; i < titles.length; i++) {
                setTimeout(() => {
                    const title = document.createElement('h2');
                    const para = document.createElement('p');
                    para.classList.add('subTitles');
                    para.textContent = subTitles[i];
                    title.classList.add('titles');
                    title.textContent = titles[i];
                    main.appendChild(title);
                    title.appendChild(para);
                }, i * 200)
            };
        }
        renderTitles();
    };

    return { render }
})();

// PRODUCT SECTION

const products = (() => {
    const main = sideBar.scrollable;

    const beerTitles = [
        `Petite Vertue #7`,
        `Petite Vertue #8`,
        `Petite Vertue #9`
    ];

    const descriptions = [
        `Our first commercial release. Brewed with love and way too much sediment in an
        atmospheric conic fermenter. Bottle refermented without new yeast addition`,
        `Our second release. Brewed without expectations in an isobaric conic fermenter. Dry hopped
        with Celeia hops and nepal pepper at 0ºC for 3 days. Way too overcarbonated`,
        `Third and final release. It's exactly the same beer as before. Overcarbonation included.
        We didn't even bother making a new logo for the cap...`
    ]

    const Beer = (beerName, beerDescription, seal) => {
        const name = beerName;
        const description = beerDescription;
        const image = new Image();
        image.src = _images_PV9_png__WEBPACK_IMPORTED_MODULE_6__;
        image.classList.add('beerImg');
        const sealImage = new Image();
        sealImage.src = seal;
        sealImage.classList.add('seal');
        const style = 'Belgian Pale Ale'
        const ABV = 'ABV: 6.2% Vol.';
        const IBU = '20 IBU';
        const format = '33cl Glass bottle'

        return { name, description, image, sealImage, style, ABV, IBU, format }
    }

    const pv7 = Beer(
        beerTitles[0],
        descriptions[0],
        _images_7_png__WEBPACK_IMPORTED_MODULE_4__
    );
    const pv8 = Beer(
        beerTitles[1],
        descriptions[1],
        _images_8_png__WEBPACK_IMPORTED_MODULE_5__
    );
    const pv9 = Beer(
        beerTitles[2],
        descriptions[2],
        _images_8_png__WEBPACK_IMPORTED_MODULE_5__
    );

    const beers = [pv7, pv8, pv9];

    const render = () => {
        for (let i = 0; i < beers.length; i++) {

            const beerContainer = document.createElement('div');
            beerContainer.classList.add('beerContainer');
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('imgContainer');
            const descContainer = document.createElement('div');
            descContainer.classList.add('descContainer');
            const statsContainer = document.createElement('div')
            statsContainer.classList.add('statsContainer');
            const beerName = document.createElement('h2');
            const beerDesc = document.createElement('p');
            beerDesc.classList.add('desc')
            const beerStyle = document.createElement('h6');
            const beerABV = document.createElement('h6');
            const beerIBU = document.createElement('h6');
            const beerFormat = document.createElement('h6');

            beerName.textContent = beers[i].name;
            beerDesc.textContent = beers[i].description;
            beerStyle.textContent = beers[i].style;
            beerABV.textContent = beers[i].ABV;
            beerIBU.textContent = beers[i].IBU;
            beerFormat.textContent = beers[i].format;

            main.appendChild(beerContainer);
            beerContainer.appendChild(beerName);
            descContainer.appendChild(imgContainer);
            beerContainer.appendChild(descContainer);
            descContainer.appendChild(statsContainer);
            imgContainer.appendChild(beers[i].image);
            statsContainer.appendChild(beers[i].sealImage);
            descContainer.appendChild(beerDesc);
            statsContainer.appendChild(beerStyle);
            statsContainer.appendChild(beerABV);
            statsContainer.appendChild(beerIBU);
            statsContainer.appendChild(beerFormat);
        }

        const finalContainer = document.createElement('div');
        finalContainer.classList.add('beerContainer')
        const finalTitle = document.createElement('h2');
        finalTitle.textContent = 'Yes. We only have one beer'
        const finalImage = new Image();
        finalImage.src = _images_TrioPNG_png__WEBPACK_IMPORTED_MODULE_7__;
        finalImage.id = 'finalImage'

        main.appendChild(finalContainer)
        finalContainer.appendChild(finalTitle)
        finalContainer.appendChild(finalImage)
    };

    return { render }
})();

     const about = (() => {
    const main = sideBar.scrollable;

    const text = [
        `Short Brewing is a non-existant (but legal) very-micro brewery.
        All our products are painstakingly handmade. We bottle and cap manually. We label by hand, bottle per bottle. One by one.
        Each cap is then hand stamped with lot info and production number with a manual wooden stamp, inked by hand, of course.
        We like to be called gipsy brewers, although truth is we don't have the resources to own our own brewery. 
        Being gipsys is one of the reasons for the downfall of our great company. Taxes, sales, infrastructure and lack of
        interest didn't help either. We are proud to have endured so long anyway. We have become experts in non-functional 
        projects that come to a halt before even being a thing. Praise the lord and GG Allin. Thanks for your overwhelming support.
        (The logo on the center of the bottle are my balls painted in aquarella)`
    ];
    const render = () => {
    const mainText = document.createElement('h6');
    mainText.textContent = text[0];
    mainText.id = 'aboutText'
    main.appendChild(mainText);
    }

    return { render }
})();


sideBar.render();
home.render();

const handle = (() => {
    const background = document.getElementById('content');
    const homeBtn = document.getElementById('homeBtn');
    const productBtn = document.getElementById('productBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');

    const underline = (elem) => {
        const buttons = document.querySelectorAll('.navbar');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.textDecoration = 'none';
        }
        elem.style.textDecoration = 'underline';
    }

    const listners = () => {
        homeBtn.addEventListener('click', () => {
            sideBar.scrollable.innerHTML = '';
            background.style.backgroundImage = "var(--mainBackground)";
            underline(homeBtn);
            home.render();
        })
        productBtn.addEventListener('click', () => {
            sideBar.scrollable.innerHTML = '';
            background.style.backgroundImage = "var(--bottleBackground)";
            underline(productBtn);
            products.render();
        })
        aboutBtn.addEventListener('click', () => {
            sideBar.scrollable.innerHTML = '';
            underline(aboutBtn);
            about.render();
        })
        contactBtn.addEventListener('click', () => {
            sideBar.scrollable.innerHTML = '';
            underline(contactBtn);

        })
    }
    return { listners }
})();

handle.listners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmV3ZXJ5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9icmV3ZXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9icmV3ZXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYnJld2VyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYnJld2VyeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9icmV3ZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JyZXdlcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJld2VyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9icmV3ZXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9icmV3ZXJ5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYnJld2VyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JyZXdlcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9icmV3ZXJ5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JyZXdlcnkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQzdCO0FBQ0U7QUFDWTtB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QUNBLFlBQVk7QUFDWixDQUFDOztBQUVEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vaW1hZ2VzL1JhbmRvbXMtMS5KUEdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9pbWFnZXMvUmFuZG9tcy0xLTMuSlBHXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4vZm9udHMvT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tYm90dGxlQmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgLS1tYWluQmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIFxcbiAgICBmb3JtYXQoJ3RydWV0eXBlLXZhcmlhdGlvbnMnKTtcXG59XFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgfVxcbiAgICB0byB7Y29sb3I6IGJsYWNrO1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbn1cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcbmRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5wIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnd2dodCcgNTA7XFxufVxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcbn1cXG5oNiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIG1hcmdpbjogMXJlbSAwcmVtIDFyZW0gMHJlbTsgXFxufVxcbiNjb250ZW50IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjZzIGVhc2UtaW4tb3V0O1xcbn1cXG4jc2Nyb2xsYWJsZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgbWFyZ2luOiAxOXZoIDBweCAxNXZoIDIwcmVtO1xcbiAgICBwYWRkaW5nOiAxdmggMHJlbSA1dmggMHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLFxcbiAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1OSkgNjUlLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NikgOTIlLFxcbiAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KSA5OCUpO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBmb3IgSW50ZXJuZXQgRXhwbG9yZXIsIEVkZ2UgKi9cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBmb3IgRmlyZWZveCAqL1xcbn1cXG4jc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xcbn1cXG4jc2Nyb2xsU2VjdGlvbiB7XFxucG9zaXRpb246IHN0aWNreTtcXG5tYXJnaW46IC0yNXZoIDBweCAxNXZoIDIwcmVtO1xcbmJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XFxuYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFyZW07O1xcbndpZHRoOiA2MCU7XFxuaGVpZ2h0OiAxMHZoO1xcbmJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcXG4gcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSxcXG4gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgxNSkgNTAlLFxcbiAgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcXG59XFxuI3Njcm9sbEljb24ge1xcbiAgICB3aWR0aDogMi40cmVtO1xcbn1cXG5cXG4vKiBTSURFQkFSICovXFxuXFxuI3NpZGVCYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxcXG4gICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MzIpIDc1JSxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzk1KSk7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmxvZ297XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbn1cXG4jbGlua0NvbnRhaW5lciB7XFxuICAgIGZsZXgtZ3JvdzogMC4yO1xcbn1cXG4ubmF2YmFyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICd3Z2h0JyAyNTA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdmJhcjpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRyYW5zaXRpb246IGZvbnQtd2VpZ2h0IDAuMXM7XFxufVxcbiNob21lQnRuIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNjb3B5Q29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI2NvcHlyaWdodCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnd2dodCcgNTA7XFxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xcbn1cXG4jbGlua1RvR2l0IHtcXG4gICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNnaXRMb2dvIHtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi8qIEhPTUUgKi9cXG5cXG4udGl0bGVzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XFxufVxcbi5zdWJUaXRsZXMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnd2dodCcgNTA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxufVxcbiNob21lTG9nbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXG59XFxuXFxuLyogUFJPRFVDVFMgKi9cXG5cXG4uYmVlckNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwdmggMHZoIDguNXZoIDB2aDtcXG59XFxuXFxuIC5pbWdDb250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gfVxcblxcbi5iZWVySW1nIHtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbn1cXG5cXG4gLmRlc2NDb250YWluZXIge1xcbiAgICAgd2lkdGg6IDgwJTtcXG59XFxuLmRlc2Mge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICd3Z2h0JyAzMDA7XFxufVxcbiAuc3RhdHNDb250YWluZXIge1xcbiAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiB3aWR0aDogZml0LWNvbnRlbnQ7XFxuIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiB9XFxuLnNlYWwge1xcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgd2lkdGg6IDdyZW07XFxufVxcbiNmaW5hbEltYWdlIHtcXG4gICAgaGVpZ2h0OiAyNXZ3O1xcbn1cXG5cXG4vKiBBQk9VVCAqL1xcblxcbiNhYm91dFRleHQge1xcbiAgICBwYWRkaW5nOiAxMHJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJEQUFpRDtJQUNqRCx5REFBaUQ7QUFDckQ7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQjtpQ0FDNkI7QUFDakM7QUFDQTtJQUNJLE1BQU0sa0JBQWtCO1FBQ3BCLFdBQVc7SUFDZjtJQUNBLElBQUksWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQix5REFBaUQ7SUFDakQsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEI7OztzQ0FHa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix3QkFBd0IsRUFBRSxnQ0FBZ0M7SUFDMUQscUJBQXFCLEVBQUUsZ0JBQWdCO0FBQzNDO0FBQ0E7SUFDSSxhQUFhLEVBQUUsa0NBQWtDO0FBQ3JEO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFDaEMsVUFBVTtBQUNWLFlBQVk7QUFDWiw0QkFBNEI7QUFDNUI7OzsyQkFHMkI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCOztpQ0FFNkI7SUFDN0IsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQjtBQUNBO0dBQ0csZ0JBQWdCO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBLFNBQVM7O0FBRVQ7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQSxhQUFhOztBQUViO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0NBRUM7SUFDRyxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0FBQ2hCOztDQUVDO0tBQ0ksVUFBVTtBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1DQUFtQztBQUN2QztDQUNDO0tBQ0ksa0JBQWtCO0NBQ3RCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxVQUFVOztBQUVWO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1ib3R0bGVCYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2VzL1JhbmRvbXMtMS5KUEcnKTtcXG4gICAgLS1tYWluQmFja2dyb3VuZDogdXJsKCcuL2ltYWdlcy9SYW5kb21zLTEtMy5KUEcnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIFxcbiAgICBmb3JtYXQoJ3RydWV0eXBlLXZhcmlhdGlvbnMnKTtcXG59XFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgfVxcbiAgICB0byB7Y29sb3I6IGJsYWNrO1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbn1cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcbmRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5wIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnd2dodCcgNTA7XFxufVxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcbn1cXG5oNiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIG1hcmdpbjogMXJlbSAwcmVtIDFyZW0gMHJlbTsgXFxufVxcbiNjb250ZW50IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9SYW5kb21zLTEtMy5KUEcnKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjZzIGVhc2UtaW4tb3V0O1xcbn1cXG4jc2Nyb2xsYWJsZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgbWFyZ2luOiAxOXZoIDBweCAxNXZoIDIwcmVtO1xcbiAgICBwYWRkaW5nOiAxdmggMHJlbSA1dmggMHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLFxcbiAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1OSkgNjUlLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NikgOTIlLFxcbiAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KSA5OCUpO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBmb3IgSW50ZXJuZXQgRXhwbG9yZXIsIEVkZ2UgKi9cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBmb3IgRmlyZWZveCAqL1xcbn1cXG4jc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xcbn1cXG4jc2Nyb2xsU2VjdGlvbiB7XFxucG9zaXRpb246IHN0aWNreTtcXG5tYXJnaW46IC0yNXZoIDBweCAxNXZoIDIwcmVtO1xcbmJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XFxuYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFyZW07O1xcbndpZHRoOiA2MCU7XFxuaGVpZ2h0OiAxMHZoO1xcbmJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcXG4gcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSxcXG4gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgxNSkgNTAlLFxcbiAgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcXG59XFxuI3Njcm9sbEljb24ge1xcbiAgICB3aWR0aDogMi40cmVtO1xcbn1cXG5cXG4vKiBTSURFQkFSICovXFxuXFxuI3NpZGVCYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxcXG4gICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MzIpIDc1JSxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzk1KSk7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmxvZ297XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbn1cXG4jbGlua0NvbnRhaW5lciB7XFxuICAgIGZsZXgtZ3JvdzogMC4yO1xcbn1cXG4ubmF2YmFyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICd3Z2h0JyAyNTA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdmJhcjpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRyYW5zaXRpb246IGZvbnQtd2VpZ2h0IDAuMXM7XFxufVxcbiNob21lQnRuIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNjb3B5Q29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI2NvcHlyaWdodCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnd2dodCcgNTA7XFxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xcbn1cXG4jbGlua1RvR2l0IHtcXG4gICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNnaXRMb2dvIHtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi8qIEhPTUUgKi9cXG5cXG4udGl0bGVzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XFxufVxcbi5zdWJUaXRsZXMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnd2dodCcgNTA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxufVxcbiNob21lTG9nbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXG59XFxuXFxuLyogUFJPRFVDVFMgKi9cXG5cXG4uYmVlckNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwdmggMHZoIDguNXZoIDB2aDtcXG59XFxuXFxuIC5pbWdDb250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gfVxcblxcbi5iZWVySW1nIHtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbn1cXG5cXG4gLmRlc2NDb250YWluZXIge1xcbiAgICAgd2lkdGg6IDgwJTtcXG59XFxuLmRlc2Mge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICd3Z2h0JyAzMDA7XFxufVxcbiAuc3RhdHNDb250YWluZXIge1xcbiAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiB3aWR0aDogZml0LWNvbnRlbnQ7XFxuIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiB9XFxuLnNlYWwge1xcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgd2lkdGg6IDdyZW07XFxufVxcbiNmaW5hbEltYWdlIHtcXG4gICAgaGVpZ2h0OiAyNXZ3O1xcbn1cXG5cXG4vKiBBQk9VVCAqL1xcblxcbiNhYm91dFRleHQge1xcbiAgICBwYWRkaW5nOiAxMHJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvZ29TQiBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgZ2l0aHViUE5HIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi1sb2dvLnBuZyc7XG5pbXBvcnQgc2Nyb2xsUE5HIGZyb20gJy4vaW1hZ2VzL3Njcm9sbC5wbmcnO1xuaW1wb3J0IHNlYWw3IGZyb20gJy4vaW1hZ2VzLzcucG5nJztcbmltcG9ydCBzZWFsOCBmcm9tICcuL2ltYWdlcy84LnBuZyc7XG5pbXBvcnQgUFY5IGZyb20gJy4vaW1hZ2VzL1BWOS5wbmcnO1xuaW1wb3J0IHRyaW8gZnJvbSAnLi9pbWFnZXMvVHJpb1BORy5wbmcnO1xuXG5cbi8vIFNJREVCQVIgQU5EIENPTlRFTlQgU0VDVElPTlxuXG5jb25zdCBzaWRlQmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHNjcm9sbGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxhYmxlLmlkID0gJ3Njcm9sbGFibGUnO1xuICAgIGNvbnN0IHNjcm9sbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxTZWN0aW9uLmlkID0gJ3Njcm9sbFNlY3Rpb24nO1xuICAgIGNvbnN0IHNjcm9sbEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBzY3JvbGxJY29uLmlkID0gJ3Njcm9sbEljb24nO1xuICAgIHNjcm9sbEljb24uc3JjID0gc2Nyb2xsUE5HO1xuXG5cbiAgICBjb25zdCBzaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUNvbnRhaW5lci5pZCA9ICdzaWRlQmFyJztcblxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvQ29udGFpbmVyLmlkID0gJ2xvZ29Db250YWluZXInO1xuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29TQjtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuXG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGxpbmtDb250YWluZXIuaWQgPSAnbGlua0NvbnRhaW5lcic7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgICBob21lQnRuLmlkID0gJ2hvbWVCdG4nO1xuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSdcbiAgICBjb25zdCBwcm9kdWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcm9kdWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuICAgIHByb2R1Y3RCdG4uaWQgPSAncHJvZHVjdEJ0bic7XG4gICAgcHJvZHVjdEJ0bi50ZXh0Q29udGVudCA9ICdQcm9kdWN0cyc7XG4gICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGFib3V0QnRuLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuICAgIGFib3V0QnRuLmlkID0gJ2Fib3V0QnRuJztcbiAgICBhYm91dEJ0bi50ZXh0Q29udGVudCA9ICdBYm91dCB1cyc7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgICBjb250YWN0QnRuLmlkID0gJ2NvbnRhY3RCdG4nO1xuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBjb25zdCBjb3B5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29weUNvbnRhaW5lci5pZCA9ICdjb3B5Q29udGFpbmVyJztcbiAgICBjb25zdCBsaW5rVG9HaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGlua1RvR2l0LmlkID0gJ2xpbmtUb0dpdCc7XG4gICAgbGlua1RvR2l0LnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vQ2FiYWxsb2pob25zb24nKVxuICAgIGxpbmtUb0dpdC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKVxuICAgIGNvbnN0IGdpdExvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBnaXRMb2dvLnNyYyA9IGdpdGh1YlBORztcbiAgICBnaXRMb2dvLmlkID0gJ2dpdExvZ28nO1xuXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKTtcbiAgICBjb3B5cmlnaHQuaWQgPSAnY29weXJpZ2h0JztcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSAnXFx1MDBBOSAyMDIxLCBDYWJhbGxvSmhvbnNvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC4nXG5cblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzaWRlQ29udGFpbmVyKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzY3JvbGxhYmxlKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzY3JvbGxTZWN0aW9uKTtcbiAgICAgICAgc2Nyb2xsU2VjdGlvbi5hcHBlbmRDaGlsZChzY3JvbGxJY29uKTtcblxuICAgICAgICBzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuICAgICAgICBzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xuICAgICAgICBzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHlDb250YWluZXIpO1xuXG4gICAgICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0QnRuKTtcbiAgICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEJ0bik7XG4gICAgICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICAgICAgY29weUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rVG9HaXQpXG4gICAgICAgIGxpbmtUb0dpdC5hcHBlbmRDaGlsZChnaXRMb2dvKTtcbiAgICAgICAgY29weUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBzY3JvbGxhYmxlLCByZW5kZXIgfVxufSkoKTtcblxuLy8gSE9NRSBTRUNUSU9OXG5cbmNvbnN0IGhvbWUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBzaWRlQmFyLnNjcm9sbGFibGU7XG5cbiAgICBjb25zdCB0aXRsZXMgPSBbXG4gICAgICAgICdUaGUgbGFzdCBicmV3ZXJ5IHRvIGJlIGNyZWF0ZWQgaW4gQmFyY2Vsb25hIGJlZm9yZSB0aGUgMjAyMCBwYW5kZW1pYycsXG4gICAgICAgICdGaXJzdCBldmVyIFwiY29tcGFueVwiIHRvIGF2b2lkIHNlbGxpbmcgaXRzIG93biBwcm9kdWN0cycsXG4gICAgICAgICdGaXJzdCBtb2Rlcm4gYnJld2VyeSB0byBuZXZlciBicmV3IGFuIElQQScsXG4gICAgICAgICdUaGUgZmlyc3QgYnJld2VyeSB0byBjcmVhdGUgaXRzIHdlYnNpdGUgYWZ0ZXIgYmFua3J1cGN5JyxcbiAgICAgICAgJ1wiU2hvcnQgQnJld2luZ1wiJyxcbiAgICBdO1xuXG4gICAgY29uc3Qgc3ViVGl0bGVzID0gW1xuICAgICAgICBgTGF1bmNoZWQgb24gSmFudWFyeSAyMDIwLCBvbmUgb2YgdGhlIGJlc3QgbW9tZW50cyBpbiBtb2Rlcm4gaGlzdG9yeSB0byBzdGFydCBhIGNyYWZ0IGJyZXdlcnkuXG4gICAgICAgICBXZSBicm9rZSB0aGUgcmVjb3JkIGZvciBudW1iZXIgb2YgZXZlbnRzIGNyZWF0ZWQgYW5kIGNhbmNlbGxlZCBwZXIgdGltZSBpbiBidWlzbmVzc2AsXG4gICAgICAgIGBXZSBzdG9wcGVkIHNlbGxpbmcgaW4gRmVicnVhcnkgMjAyMCB0byBhdm9pZCBzdG9jayBicmVha2luZyBiZWZvcmUgYSBiaWcgZmVzdGl2YWwgd2Ugd2VyZSBwYXJ0IG9mLlxuICAgICAgICBJdCB3YXMgb2YgY291cnNlIGFsc28gY2FuY2VsbGVkLmAsXG4gICAgICAgIGBXZSdsbCBuZXZlciBicmV3IGFuIElQQSEgV2Ugc2FpZC4uLiBTbyB3ZSBuZXZlciBkaWRgLFxuICAgICAgICBgSnVuZSAyMDIxOiBXZSdyZSBwcm91ZCB0byBiZSB0aGUgZmlyc3QgY29tcGFueSB0byBsYXVuY2ggaXRzIG9mZmljaWFsIHdlYnNpdGUgd2hlbiBpdCdzIG5vIGxvbmdlciBuZWNlc3NhcnkuXG4gICAgICAgICBKdXN0IGRvIGV2ZXJ5dGhpbmcgd3JvbmcsIHRvdGFsbHkgd29ydGggaXQuYCxcbiAgICAgICAgYE91cnNlbHZlc2AsXG4gICAgXTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsb2dvLnNyYyA9IGxvZ29TQjtcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgICAgIGxvZ28uaWQgPSAnaG9tZUxvZ28nXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobG9nbylcblxuICAgICAgICBjb25zdCByZW5kZXJUaXRsZXMgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyYS5jbGFzc0xpc3QuYWRkKCdzdWJUaXRsZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHN1YlRpdGxlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGVzJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgICAgICAgICAgfSwgaSAqIDIwMClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyVGl0bGVzKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHJlbmRlciB9XG59KSgpO1xuXG4vLyBQUk9EVUNUIFNFQ1RJT05cblxuY29uc3QgcHJvZHVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBzaWRlQmFyLnNjcm9sbGFibGU7XG5cbiAgICBjb25zdCBiZWVyVGl0bGVzID0gW1xuICAgICAgICBgUGV0aXRlIFZlcnR1ZSAjN2AsXG4gICAgICAgIGBQZXRpdGUgVmVydHVlICM4YCxcbiAgICAgICAgYFBldGl0ZSBWZXJ0dWUgIzlgXG4gICAgXTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9ucyA9IFtcbiAgICAgICAgYE91ciBmaXJzdCBjb21tZXJjaWFsIHJlbGVhc2UuIEJyZXdlZCB3aXRoIGxvdmUgYW5kIHdheSB0b28gbXVjaCBzZWRpbWVudCBpbiBhblxuICAgICAgICBhdG1vc3BoZXJpYyBjb25pYyBmZXJtZW50ZXIuIEJvdHRsZSByZWZlcm1lbnRlZCB3aXRob3V0IG5ldyB5ZWFzdCBhZGRpdGlvbmAsXG4gICAgICAgIGBPdXIgc2Vjb25kIHJlbGVhc2UuIEJyZXdlZCB3aXRob3V0IGV4cGVjdGF0aW9ucyBpbiBhbiBpc29iYXJpYyBjb25pYyBmZXJtZW50ZXIuIERyeSBob3BwZWRcbiAgICAgICAgd2l0aCBDZWxlaWEgaG9wcyBhbmQgbmVwYWwgcGVwcGVyIGF0IDDCukMgZm9yIDMgZGF5cy4gV2F5IHRvbyBvdmVyY2FyYm9uYXRlZGAsXG4gICAgICAgIGBUaGlyZCBhbmQgZmluYWwgcmVsZWFzZS4gSXQncyBleGFjdGx5IHRoZSBzYW1lIGJlZXIgYXMgYmVmb3JlLiBPdmVyY2FyYm9uYXRpb24gaW5jbHVkZWQuXG4gICAgICAgIFdlIGRpZG4ndCBldmVuIGJvdGhlciBtYWtpbmcgYSBuZXcgbG9nbyBmb3IgdGhlIGNhcC4uLmBcbiAgICBdXG5cbiAgICBjb25zdCBCZWVyID0gKGJlZXJOYW1lLCBiZWVyRGVzY3JpcHRpb24sIHNlYWwpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGJlZXJOYW1lO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGJlZXJEZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gUFY5O1xuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdiZWVySW1nJyk7XG4gICAgICAgIGNvbnN0IHNlYWxJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzZWFsSW1hZ2Uuc3JjID0gc2VhbDtcbiAgICAgICAgc2VhbEltYWdlLmNsYXNzTGlzdC5hZGQoJ3NlYWwnKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSAnQmVsZ2lhbiBQYWxlIEFsZSdcbiAgICAgICAgY29uc3QgQUJWID0gJ0FCVjogNi4yJSBWb2wuJztcbiAgICAgICAgY29uc3QgSUJVID0gJzIwIElCVSc7XG4gICAgICAgIGNvbnN0IGZvcm1hdCA9ICczM2NsIEdsYXNzIGJvdHRsZSdcblxuICAgICAgICByZXR1cm4geyBuYW1lLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIHNlYWxJbWFnZSwgc3R5bGUsIEFCViwgSUJVLCBmb3JtYXQgfVxuICAgIH1cblxuICAgIGNvbnN0IHB2NyA9IEJlZXIoXG4gICAgICAgIGJlZXJUaXRsZXNbMF0sXG4gICAgICAgIGRlc2NyaXB0aW9uc1swXSxcbiAgICAgICAgc2VhbDdcbiAgICApO1xuICAgIGNvbnN0IHB2OCA9IEJlZXIoXG4gICAgICAgIGJlZXJUaXRsZXNbMV0sXG4gICAgICAgIGRlc2NyaXB0aW9uc1sxXSxcbiAgICAgICAgc2VhbDhcbiAgICApO1xuICAgIGNvbnN0IHB2OSA9IEJlZXIoXG4gICAgICAgIGJlZXJUaXRsZXNbMl0sXG4gICAgICAgIGRlc2NyaXB0aW9uc1syXSxcbiAgICAgICAgc2VhbDhcbiAgICApO1xuXG4gICAgY29uc3QgYmVlcnMgPSBbcHY3LCBwdjgsIHB2OV07XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmVlcnMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgY29uc3QgYmVlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmVlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiZWVyQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWdDb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlc2NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVzY0NvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgc3RhdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RhdHNDb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGJlZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIGNvbnN0IGJlZXJEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgYmVlckRlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpXG4gICAgICAgICAgICBjb25zdCBiZWVyU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuICAgICAgICAgICAgY29uc3QgYmVlckFCViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgICAgICAgICBjb25zdCBiZWVySUJVID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJlZXJGb3JtYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuXG4gICAgICAgICAgICBiZWVyTmFtZS50ZXh0Q29udGVudCA9IGJlZXJzW2ldLm5hbWU7XG4gICAgICAgICAgICBiZWVyRGVzYy50ZXh0Q29udGVudCA9IGJlZXJzW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgYmVlclN0eWxlLnRleHRDb250ZW50ID0gYmVlcnNbaV0uc3R5bGU7XG4gICAgICAgICAgICBiZWVyQUJWLnRleHRDb250ZW50ID0gYmVlcnNbaV0uQUJWO1xuICAgICAgICAgICAgYmVlcklCVS50ZXh0Q29udGVudCA9IGJlZXJzW2ldLklCVTtcbiAgICAgICAgICAgIGJlZXJGb3JtYXQudGV4dENvbnRlbnQgPSBiZWVyc1tpXS5mb3JtYXQ7XG5cbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYmVlckNvbnRhaW5lcik7XG4gICAgICAgICAgICBiZWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJlZXJOYW1lKTtcbiAgICAgICAgICAgIGRlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGJlZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY0NvbnRhaW5lcik7XG4gICAgICAgICAgICBkZXNjQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXRzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChiZWVyc1tpXS5pbWFnZSk7XG4gICAgICAgICAgICBzdGF0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChiZWVyc1tpXS5zZWFsSW1hZ2UpO1xuICAgICAgICAgICAgZGVzY0NvbnRhaW5lci5hcHBlbmRDaGlsZChiZWVyRGVzYyk7XG4gICAgICAgICAgICBzdGF0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChiZWVyU3R5bGUpO1xuICAgICAgICAgICAgc3RhdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYmVlckFCVik7XG4gICAgICAgICAgICBzdGF0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChiZWVySUJVKTtcbiAgICAgICAgICAgIHN0YXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJlZXJGb3JtYXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmluYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmluYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmVlckNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGZpbmFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBmaW5hbFRpdGxlLnRleHRDb250ZW50ID0gJ1llcy4gV2Ugb25seSBoYXZlIG9uZSBiZWVyJ1xuICAgICAgICBjb25zdCBmaW5hbEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGZpbmFsSW1hZ2Uuc3JjID0gdHJpbztcbiAgICAgICAgZmluYWxJbWFnZS5pZCA9ICdmaW5hbEltYWdlJ1xuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZmluYWxDb250YWluZXIpXG4gICAgICAgIGZpbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpbmFsVGl0bGUpXG4gICAgICAgIGZpbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpbmFsSW1hZ2UpXG4gICAgfTtcblxuICAgIHJldHVybiB7IHJlbmRlciB9XG59KSgpO1xuXG4gICAgIGNvbnN0IGFib3V0ID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluID0gc2lkZUJhci5zY3JvbGxhYmxlO1xuXG4gICAgY29uc3QgdGV4dCA9IFtcbiAgICAgICAgYFNob3J0IEJyZXdpbmcgaXMgYSBub24tZXhpc3RhbnQgKGJ1dCBsZWdhbCkgdmVyeS1taWNybyBicmV3ZXJ5LlxuICAgICAgICBBbGwgb3VyIHByb2R1Y3RzIGFyZSBwYWluc3Rha2luZ2x5IGhhbmRtYWRlLiBXZSBib3R0bGUgYW5kIGNhcCBtYW51YWxseS4gV2UgbGFiZWwgYnkgaGFuZCwgYm90dGxlIHBlciBib3R0bGUuIE9uZSBieSBvbmUuXG4gICAgICAgIEVhY2ggY2FwIGlzIHRoZW4gaGFuZCBzdGFtcGVkIHdpdGggbG90IGluZm8gYW5kIHByb2R1Y3Rpb24gbnVtYmVyIHdpdGggYSBtYW51YWwgd29vZGVuIHN0YW1wLCBpbmtlZCBieSBoYW5kLCBvZiBjb3Vyc2UuXG4gICAgICAgIFdlIGxpa2UgdG8gYmUgY2FsbGVkIGdpcHN5IGJyZXdlcnMsIGFsdGhvdWdoIHRydXRoIGlzIHdlIGRvbid0IGhhdmUgdGhlIHJlc291cmNlcyB0byBvd24gb3VyIG93biBicmV3ZXJ5LiBcbiAgICAgICAgQmVpbmcgZ2lwc3lzIGlzIG9uZSBvZiB0aGUgcmVhc29ucyBmb3IgdGhlIGRvd25mYWxsIG9mIG91ciBncmVhdCBjb21wYW55LiBUYXhlcywgc2FsZXMsIGluZnJhc3RydWN0dXJlIGFuZCBsYWNrIG9mXG4gICAgICAgIGludGVyZXN0IGRpZG4ndCBoZWxwIGVpdGhlci4gV2UgYXJlIHByb3VkIHRvIGhhdmUgZW5kdXJlZCBzbyBsb25nIGFueXdheS4gV2UgaGF2ZSBiZWNvbWUgZXhwZXJ0cyBpbiBub24tZnVuY3Rpb25hbCBcbiAgICAgICAgcHJvamVjdHMgdGhhdCBjb21lIHRvIGEgaGFsdCBiZWZvcmUgZXZlbiBiZWluZyBhIHRoaW5nLiBQcmFpc2UgdGhlIGxvcmQgYW5kIEdHIEFsbGluLiBUaGFua3MgZm9yIHlvdXIgb3ZlcndoZWxtaW5nIHN1cHBvcnQuXG4gICAgICAgIChUaGUgbG9nbyBvbiB0aGUgY2VudGVyIG9mIHRoZSBib3R0bGUgYXJlIG15IGJhbGxzIHBhaW50ZWQgaW4gYXF1YXJlbGxhKWBcbiAgICBdO1xuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgbWFpblRleHQudGV4dENvbnRlbnQgPSB0ZXh0WzBdO1xuICAgIG1haW5UZXh0LmlkID0gJ2Fib3V0VGV4dCdcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5UZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXIgfVxufSkoKTtcblxuXG5zaWRlQmFyLnJlbmRlcigpO1xuaG9tZS5yZW5kZXIoKTtcblxuY29uc3QgaGFuZGxlID0gKCgpID0+IHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdG4nKTtcbiAgICBjb25zdCBwcm9kdWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RCdG4nKTtcbiAgICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dEJ0bicpO1xuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEJ0bicpO1xuXG4gICAgY29uc3QgdW5kZXJsaW5lID0gKGVsZW0pID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXInKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBidXR0b25zW2ldLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsZW0uc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJztcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0bmVycyA9ICgpID0+IHtcbiAgICAgICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNpZGVCYXIuc2Nyb2xsYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ2YXIoLS1tYWluQmFja2dyb3VuZClcIjtcbiAgICAgICAgICAgIHVuZGVybGluZShob21lQnRuKTtcbiAgICAgICAgICAgIGhvbWUucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHByb2R1Y3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzaWRlQmFyLnNjcm9sbGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidmFyKC0tYm90dGxlQmFja2dyb3VuZClcIjtcbiAgICAgICAgICAgIHVuZGVybGluZShwcm9kdWN0QnRuKTtcbiAgICAgICAgICAgIHByb2R1Y3RzLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNpZGVCYXIuc2Nyb2xsYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHVuZGVybGluZShhYm91dEJ0bik7XG4gICAgICAgICAgICBhYm91dC5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNpZGVCYXIuc2Nyb2xsYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHVuZGVybGluZShjb250YWN0QnRuKTtcblxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4geyBsaXN0bmVycyB9XG59KSgpO1xuXG5oYW5kbGUubGlzdG5lcnMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=