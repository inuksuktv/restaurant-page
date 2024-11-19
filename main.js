/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-color: lightgoldenrodyellow;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0;\n}\n\nheader {\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n\nheader h1 {\n  color: rgb(2, 90, 78);\n  font-size: 42pt;\n}\n\nbutton {\n  background-color: rgb(2, 90, 78);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n  margin: 0 20px;\n}\n\n#content {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n#content img {\n  width: 100%;\n}\n\n#content .card {\n  top: 60px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: large;\n  padding: 100px 100px;\n  padding-bottom: 55px;\n  position: absolute;\n  width: 600px;\n}\n\n.card .action {\n  display: flex;\n  justify-content: space-between;\n  padding: 60px 30px;\n  padding-bottom: 0px;\n}\n\n#content .invite {\n  font-size: x-large;\n  margin: 0;\n  padding-top: 20px;\n  padding-left: 20px;\n}\n\n#content .attribution {\n  bottom: 5px;\n  margin: 0;\n  position: absolute;\n  text-align: center;\n  color: white;\n}\n\na:link {\n  color: white;\n}\n\na:visited {\n  color: white;\n}\n\n.menu {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  display: grid;\n  gap: 100px;\n  row-gap: 100px;\n  grid-template-columns: 1fr 1fr;\n  height: 1800px;\n  padding: 40px;\n  position: absolute;\n  top: 60px;\n  width: 900px;\n}\n\n.menu-card {\n  align-content: center;\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n}\n\nh4 {\n  font-size: large;\n}\n\n.about-card {\n  background-color: rgba(250, 250, 251, 0.7);\n  color: rgb(2, 90, 78);\n  padding: 100px 100px;\n  position: absolute;\n  top: 60px;\n  width: 600px;\n}\n\n.about-card h2 {\n  font-size: x-large;\n  padding: 50px 0px;\n}\n\n.about-card p {\n  font-size: large;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildAboutPage: () => (/* binding */ buildAboutPage)\n/* harmony export */ });\n/* harmony import */ var _images_aboutImage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/aboutImage.jpg */ \"./images/aboutImage.jpg\");\n\n\nfunction buildAboutPage() {\n  const contentDiv = document.getElementById('content');\n\n  // Create the background image.\n  const backgroundImage = document.createElement('img');\n  backgroundImage.src = _images_aboutImage_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  backgroundImage.alt = \"A cutesie tinyhouse.\";\n\n  // Create the about card\n  const aboutCard = document.createElement('div');\n  aboutCard.classList.add('about-card');\n\n  // Create the main heading\n  const mainHeading = document.createElement('h2');\n  mainHeading.textContent = \"The Green Plate: Your Harmony, Our Passion\";\n\n  // Create the introductory paragraph\n  const introParagraph = document.createElement('p');\n  introParagraph.textContent = \"At The Green Plate, we believe in the power of balance. We're more than just a restaurant; we're a sanctuary where you can nourish your body and soul. Our menu is a celebration of fresh, wholesome ingredients, crafted with care to tantalize your taste buds.\";\n\n  // Create the \"Our Story\" heading\n  const storyHeading = document.createElement('h2');\n  storyHeading.textContent = \"Our Story\";\n\n  // Create the Chef Rachel paragraph\n  const chefParagraph = document.createElement('p');\n  chefParagraph.textContent = \"Chef Rachel, the visionary behind The Green Plate, has always been passionate about food and its power to bring people together. With a deep commitment to sustainable practices and a love for bold flavors, Chef Rachel has created a menu that reflects their unique culinary perspective.\";\n\n  // Create the \"Why Choose Us?\" heading\n  const whyChooseHeading = document.createElement('h2');\n  whyChooseHeading.textContent = \"Why Choose Us?\";\n\n  // Create the benefits list\n  const benefitsList = document.createElement('ul');\n\n  const benefit1 = document.createElement('li');\n  benefit1.innerHTML = \"<strong>Fresh, Local Ingredients:</strong> We source our ingredients from local farmers and suppliers, ensuring the freshest and most flavorful dishes.\";\n  const benefit2 = document.createElement('li');\n  benefit2.innerHTML = \"<strong>Mindful Eating:</strong> Our menu is designed to nourish your body and mind, promoting a healthy and balanced lifestyle.\";\n  const benefit3 = document.createElement('li');\n  benefit3.innerHTML = \"<strong>Warm and Inviting Atmosphere:</strong> Our cozy and comfortable space is the perfect setting to relax and enjoy a delicious meal.\";\n\n  benefitsList.appendChild(benefit1);\n  benefitsList.appendChild(benefit2);\n  benefitsList.appendChild(benefit3);\n\n  // Create the concluding paragraph\n  const concludingParagraph = document.createElement('p');\n  concludingParagraph.textContent = \"Join us on a culinary journey that celebrates the simple pleasures of life. Let us help you find your harmony, one bite at a time.\";\n\n  const attribution = document.createElement('p');\n  attribution.classList.add('attribution');\n  attribution.innerHTML = 'Photo by <a href=\"https://www.pexels.com/@rachel-claire\">Rachel Claire</a>.';\n\n  aboutCard.appendChild(mainHeading);\n  aboutCard.appendChild(introParagraph);\n  aboutCard.appendChild(storyHeading);\n  aboutCard.appendChild(chefParagraph);\n  aboutCard.appendChild(whyChooseHeading);\n  aboutCard.appendChild(benefitsList);\n  aboutCard.appendChild(concludingParagraph);\n\n  contentDiv.appendChild(backgroundImage);\n  contentDiv.appendChild(aboutCard);\n  contentDiv.appendChild(attribution);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/aboutPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _landingPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingPage.js */ \"./src/landingPage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _aboutPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutPage.js */ \"./src/aboutPage.js\");\n\n\n\n\n\nfunction landingPageClick() {\n    contentDiv.innerHTML = \"\";\n    (0,_landingPage_js__WEBPACK_IMPORTED_MODULE_1__.buildLandingPage)();\n    const menuButton = document.getElementsByClassName('menu-button');\n    menuButton[0].addEventListener('click', menuPageClick);\n}\n\nfunction menuPageClick() {\n    contentDiv.innerHTML = \"\";\n    (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_2__.buildMenuPage)();\n}\n\nfunction aboutPageClick() {\n    contentDiv.innerHTML = \"\";\n    (0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_3__.buildAboutPage)();\n}\n\nconst contentDiv = document.getElementById(\"content\");\nconst homeButton = document.getElementById(\"home\");\nconst menuButton = document.getElementById(\"menu\");\nconst aboutButton = document.getElementById(\"about\");\n\nhomeButton.addEventListener('click', landingPageClick);\nmenuButton.addEventListener('click', menuPageClick);\naboutButton.addEventListener('click', aboutPageClick);\n\n(0,_landingPage_js__WEBPACK_IMPORTED_MODULE_1__.buildLandingPage)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/landingPage.js":
/*!****************************!*\
  !*** ./src/landingPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildLandingPage: () => (/* binding */ buildLandingPage)\n/* harmony export */ });\n/* harmony import */ var _images_content2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/content2.jpg */ \"./images/content2.jpg\");\n\nfunction buildLandingPage() {\n  const contentDiv = document.getElementById(\"content\");\n\n  // Create the image element.\n  const image = document.createElement('img');\n  image.src = _images_content2_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  image.alt = 'A woman holding fried chicken over a plate.';\n  image.width = '1920';\n\n  // Create the card element\n  const card = document.createElement('div');\n  card.classList.add('card');\n\n  // Create the first invite paragraph\n  const invite1 = document.createElement('p');\n  invite1.classList.add('invite');\n  invite1.textContent = 'At the Green Plate, we believe that food is more than just sustenance. It\\'s a shared experience, a way to connect with loved ones, and a source of comfort.';\n\n  // Create the second invite paragraph\n  const invite2 = document.createElement('p');\n  invite2.classList.add('invite');\n  invite2.textContent = 'Join us and indulge in our hearty, home-cooked meals, prepared with fresh, seasonal ingredients. From our cozy dining room to our inviting outdoor patio, we\\'ve created a space where you can relax, unwind, and savor every bite.';\n\n  // Create the action container\n  const action = document.createElement('div');\n  action.classList.add('action');\n\n  // Create the \"Book a table\" button\n  const bookButton = document.createElement('button');\n  bookButton.textContent = 'Book a table';\n\n  // Create the \"Browse menu\" button\n  const browseButton = document.createElement('button');\n  browseButton.classList.add('menu-button');\n  browseButton.textContent = 'Browse menu';\n\n  // Add buttons to the action container\n  action.appendChild(bookButton);\n  action.appendChild(browseButton);\n\n  // Create the attribution paragraph\n  const attribution = document.createElement('p');\n  attribution.classList.add('attribution');\n  attribution.innerHTML = 'Photo by <a href=\"https://www.pexels.com/@rachel-claire\">Rachel Claire</a>.';\n\n  // Add elements to the card\n  card.appendChild(invite1);\n  card.appendChild(invite2);\n  card.appendChild(action);\n\n  // Add elements to the content div\n  contentDiv.appendChild(image);\n  contentDiv.appendChild(card);\n  contentDiv.appendChild(attribution);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/landingPage.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMenuPage: () => (/* binding */ buildMenuPage)\n/* harmony export */ });\n/* harmony import */ var _images_menuImage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menuImage.jpg */ \"./images/menuImage.jpg\");\n/* harmony import */ var _images_cornbread_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/cornbread.jpg */ \"./images/cornbread.jpg\");\n/* harmony import */ var _images_wings_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/wings.jpg */ \"./images/wings.jpg\");\n/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/pizza.jpg */ \"./images/pizza.jpg\");\n/* harmony import */ var _images_potatoes_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/potatoes.jpg */ \"./images/potatoes.jpg\");\n/* harmony import */ var _images_fish_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/fish.jpg */ \"./images/fish.jpg\");\n\n\n\n\n\n\n\nclass MenuItem {\n  constructor(name, image, description) {\n    this.name = name;\n    this.image = image;\n    this.description = description;\n  }\n}\n\nfunction createMenuCard(menuItem) {\n  const cardDiv = document.createElement('div');\n  cardDiv.classList.add('menu-card');\n\n  const cardTitle = document.createElement('h4');\n  cardTitle.textContent = menuItem.name;\n\n  const cardImage = document.createElement('img');\n  cardImage.src = menuItem.image;\n  cardImage.alt = menuItem.name;\n  cardImage.height = 300;\n\n  const cardDescription = document.createElement('p');\n  cardDescription.textContent = menuItem.description;\n\n  cardDiv.appendChild(cardTitle);\n  cardDiv.appendChild(cardImage);\n  cardDiv.appendChild(cardDescription);\n\n  return cardDiv;\n}\n\nfunction buildMenuPage() {\n  const contentDiv = document.getElementById('content');\n\n  const backgroundImage = document.createElement('img');\n  backgroundImage.src = _images_menuImage_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  backgroundImage.alt = \"Vegetables growing in rows.\";\n\n  const menuDiv = document.createElement('div');\n  menuDiv.classList.add('menu');\n\n  const menu = [\n    new MenuItem(\"Classic cornbread\", _images_cornbread_jpg__WEBPACK_IMPORTED_MODULE_1__, \"Golden-brown, buttery cornbread, baked to perfection. A simple, comforting side dish.\"),\n    new MenuItem(\"Duck wings\", _images_wings_jpg__WEBPACK_IMPORTED_MODULE_2__, \"Delectable duck wings drizzled with honey. Served with homemade potato chips.\"),\n    new MenuItem(\"Pizza\", _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__, \"A fiery feast with jalapeños, roasted red peppers, and a spicy tomato sauce, topped with melted mozzarella and fresh cilantro.\"),\n    new MenuItem(\"Garlic potatoes\", _images_potatoes_jpg__WEBPACK_IMPORTED_MODULE_4__, \"Warm, rustic potato medallions, roasted with herbs and spices, served on a rich, garlicky aioli.\"),\n    new MenuItem(\"Fish and veg\", _images_fish_jpg__WEBPACK_IMPORTED_MODULE_5__, \"Sustainable cod, pan-fried golden brown, served with a vibrant mix of roasted vegetables.\")\n  ]\n  menu.forEach((item) => {\n    const card = createMenuCard(item);\n    menuDiv.appendChild(card);\n  })\n\n  const attribution = document.createElement('p');\n  attribution.classList.add('attribution');\n  attribution.innerHTML = 'Photos by <a href=\"https://www.pexels.com/@rachel-claire\">Rachel Claire</a>.';\n\n  contentDiv.appendChild(backgroundImage);\n  contentDiv.appendChild(menuDiv);\n  contentDiv.appendChild(attribution);\n\n  console.log(\"Menu page built!\");\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ }),

/***/ "./images/aboutImage.jpg":
/*!*******************************!*\
  !*** ./images/aboutImage.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"18fd2ce7840ee03cfa0e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./images/aboutImage.jpg?");

/***/ }),

/***/ "./images/content2.jpg":
/*!*****************************!*\
  !*** ./images/content2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6446fbd38b478aa9e36.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./images/content2.jpg?");

/***/ }),

/***/ "./images/cornbread.jpg":
/*!******************************!*\
  !*** ./images/cornbread.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"78e451c4d731bbe35cc3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./images/cornbread.jpg?");

/***/ }),

/***/ "./images/fish.jpg":
/*!*************************!*\
  !*** ./images/fish.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73e8ba244eca9d27c65a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./images/fish.jpg?");

/***/ }),

/***/ "./images/menuImage.jpg":
/*!******************************!*\
  !*** ./images/menuImage.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1f5c287db6354483ba27.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./images/menuImage.jpg?");

/***/ }),

/***/ "./images/pizza.jpg":
/*!**************************!*\
  !*** ./images/pizza.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1544373bc8f8d84b4b8a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./images/pizza.jpg?");

/***/ }),

/***/ "./images/potatoes.jpg":
/*!*****************************!*\
  !*** ./images/potatoes.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cea9487345681a4fb618.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./images/potatoes.jpg?");

/***/ }),

/***/ "./images/wings.jpg":
/*!**************************!*\
  !*** ./images/wings.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"32f010edff49a259f21b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./images/wings.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;