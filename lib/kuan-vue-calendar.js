(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime/helpers/toConsumableArray"), require("@babel/runtime/helpers/slicedToArray"));
	else if(typeof define === 'function' && define.amd)
		define("kuan-vue-calendar", ["@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray"], factory);
	else if(typeof exports === 'object')
		exports["kuan-vue-calendar"] = factory(require("@babel/runtime/helpers/toConsumableArray"), require("@babel/runtime/helpers/slicedToArray"));
	else
		root["kuan-vue-calendar"] = factory(root["@babel/runtime/helpers/toConsumableArray"], root["@babel/runtime/helpers/slicedToArray"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("1bcf97f2", content, true, {});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("760f01d6", content, true, {});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("3f22f66f", content, true, {});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarItem_vue_vue_type_style_index_0_id_44173a9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarItem_vue_vue_type_style_index_0_id_44173a9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarItem_vue_vue_type_style_index_0_id_44173a9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarItem_vue_vue_type_style_index_0_id_44173a9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, ".calendar-item[data-v-44173a9f] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  padding: 5px;\n}\n.day[data-v-44173a9f] {\n  width: 22px;\n  height: 24px;\n  line-height: 24px;\n  border-radius: 2px;\n  box-sizing: border-box;\n}\n.day-item[data-v-44173a9f] {\n  width: 14.2857%;\n  text-align: center;\n  font-size: 14px;\n  height: 28px;\n  color: #555;\n  line-height: 1;\n  padding: 2px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.day-item:hover .day[data-v-44173a9f] {\n    background: #eef4fc;\n}\n.day-item.prev[data-v-44173a9f], .day-item.next[data-v-44173a9f] {\n    color: #ccc;\n    font-weight: normal;\n    cursor: default;\n}\n.day-item.today .day[data-v-44173a9f] {\n    border: 1px solid #3f8de2;\n    color: #3f8de2;\n}\n.day-item.active .day[data-v-44173a9f] {\n    color: white;\n    background: #3f8de2;\n}\n", ""]);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_6e643b6f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_6e643b6f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_6e643b6f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_6e643b6f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: 'iconfont';\n  src: url(\"//at.alicdn.com/t/font_1230434_v968elyade.eot?t=1563689031913\");\n  /* IE9 */\n  src: url(\"//at.alicdn.com/t/font_1230434_v968elyade.eot?t=1563689031913#iefix\") format(\"embedded-opentype\"), url(\"data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMsAAsAAAAAB/AAAALfAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDGgqDHIJcATYCJAMUCwwABCAFhG0HURvZBsiemjwhxPKAx4KFSqBA+Cwevt+Pde6Tj0qDJBrpXs2nk0iEBFE8FhKheUiyG/LO/t9a++fz9jBLvMHsLGHiO7J757NzQtTQNBQymUqGRLYmmohwAdgAAX+TD46ZLoWib21zygqq0NF0YNP6qKYn+xd6Qf5h7CbKg3icQLtRjUyrg+PzgBTguECc6nwHUCqkKFq2VWhKLi3iAWxa06X5Frjnvx9/+UIkNQOnbp4MEOj+/nj5tqStUwSIx3saVGTMAYU4LnXtsoSpORbtTspqCqxrv+D7O53m+4OKVvsPj5BkhWiAyk6wKKYL3x+YR/D9ySPx/WWUT1QsSl7GUypoR4Mz4EnCjrWEkKQBsI/Bzk4AzgspYbucFvPz/WT7ZwVJQZ719Nxkuihico4KzhTlqmDZXWHl1Om8Pi9aM4zGqqI8GUdo6YvXxCmqu+vfxc2W77BOoHleAvPm0YTt0Gdlr0vh/jIav64thJyh2YrmdN7A/4BWpBHFQIfFzRXVs0VeKHg0jmpnqEVlbkgBh+T29A/SK8fldfMzcu0vTAhefl5etrLbf5GzgK/VsiHBVPRLt0q0Fv8eccuR4kqBuRa7HYtsTzUxwrEJ7drxH/D1exxHM9S6ktBqKIakxQhkrcaQBTsHVYd5aLRagHazhq7uMECwiNKGGccChF5XkHR7hqzXHbJgH6Aa9gWN3izQbj/yb9lhIl3pE3RHUoJ397CuRsIMWaUSVM9SHg/uiKSUkxepMPQo9ro82ewQDVMxxhlGgvukZJiJSAgPCk+jwWAER0XET1Xp0qSMtrrdrOybXGokBIoVArVDoghs1x5Mp4oIY3S+pOR+fhbFxQXtEDUdHf5FlGDQl8e8XDwtkEOqcKuOa/mKIYHzkSQGY4SIEGxQOIgKCorAouUH+VEqyUXrkYhq5YaTWFuVa35N6AEKtR7AO2ukyFGiRqOe6VyT1iBlUiGR+G6QRhinqNwIAAA=\") format(\"woff2\"), url(\"//at.alicdn.com/t/font_1230434_v968elyade.woff?t=1563689031913\") format(\"woff\"), url(\"//at.alicdn.com/t/font_1230434_v968elyade.ttf?t=1563689031913\") format(\"truetype\"), url(\"//at.alicdn.com/t/font_1230434_v968elyade.svg?t=1563689031913#iconfont\") format(\"svg\");\n  /* iOS 4.1- */\n}\n.iconfont[data-v-6e643b6f] {\n  font-family: 'iconfont' !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-right[data-v-6e643b6f]:before {\n  content: '\\e7eb';\n}\n.icon-left[data-v-6e643b6f]:before {\n  content: '\\e7ec';\n}\n.icon-doubleleft[data-v-6e643b6f]:before {\n  content: '\\e7ed';\n}\n.icon-doubleright[data-v-6e643b6f]:before {\n  content: '\\e7ee';\n}\n.kuan-calendar[data-v-6e643b6f] {\n  width: 230px;\n  max-width: 100%;\n  border-radius: 4px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.18);\n  background: white;\n}\n.calendar-header[data-v-6e643b6f] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n  padding: 0 10px;\n  border-bottom: 1px solid #eee;\n}\n.calendar-header .current-date[data-v-6e643b6f] {\n    flex: 1;\n    text-align: center;\n}\n.calendar-header .iconfont[data-v-6e643b6f] {\n    font-size: 12px;\n    color: #666;\n    cursor: pointer;\n    padding: 10px 5px 8px;\n}\n.weeks[data-v-6e643b6f] {\n  display: flex;\n  border-bottom: 1px solid #eee;\n  font-size: 12px;\n  color: #666;\n  padding: 5px 0;\n}\n.weeks .week[data-v-6e643b6f] {\n    flex: 1;\n    text-align: center;\n}\n.footer[data-v-6e643b6f] {\n  height: 36px;\n  line-height: 36px;\n  font-size: 14px;\n  text-align: center;\n  border-top: 1px solid #eee;\n  color: #3f8de2;\n  cursor: pointer;\n}\n", ""]);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, ".kuan-calendar-outer {\n  height: 35px;\n  width: 230px;\n  position: relative;\n}\n.kuan-calendar-outer .close-bg {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n.kuan-calendar-outer.active {\n    z-index: 1000;\n}\n.kuan-calendar-outer .kuan-calendar-picker {\n    width: 100%;\n    display: inline-block;\n    position: relative;\n    border: 1px solid #d9d9d9;\n    border: 4px;\n    transition: box-shadow 0.3s;\n}\n.kuan-calendar-outer .kuan-calendar-picker.active {\n      box-shadow: 0 0 5px rgba(0, 0, 0, 0.18);\n      position: absolute;\n      left: 0;\n      top: 0;\n}\n.kuan-calendar-outer .kuan-calendar-picker.active .input {\n        border: none;\n        border-radius: 0;\n}\n.kuan-calendar-outer .kuan-calendar-picker .kuan-calendar {\n      border-radius: 0 0 4px 4px;\n      box-shadow: none;\n      border-top: 1px solid #eee;\n      transform-origin: left top;\n}\n.kuan-calendar-outer .kuan-calendar-picker .input {\n      padding: 8px 12px;\n      border: none;\n      width: 100%;\n      -webkit-appearance: none;\n         -moz-appearance: none;\n              appearance: none;\n      outline: none;\n      box-sizing: border-box;\n      font-size: 14px;\n      width: 100%;\n      border: 1px solid #dbdbdb;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.kuan-calendar-outer .kuan-calendar-picker .calendar-enter-active,\n    .kuan-calendar-outer .kuan-calendar-picker .calendar-leave-active {\n      transition: opacity 0.1s, transform 0.1s;\n      transform: scaleY(1);\n}\n.kuan-calendar-outer .kuan-calendar-picker .calendar-enter,\n    .kuan-calendar-outer .kuan-calendar-picker .calendar-leave-to {\n      opacity: 0;\n      transform: scaleY(0);\n}\n", ""]);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/common/Calendar.vue?vue&type=template&id=6e643b6f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kuan-calendar"},[_c('div',{staticClass:"calendar-header"},[_c('i',{staticClass:"iconfont icon-doubleleft",on:{"click":_vm.renderPreYear}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-left",on:{"click":_vm.renderPreMonth}}),_vm._v(" "),_c('div',{staticClass:"current-date"},[_vm._v(_vm._s(_vm.y)+"-"+_vm._s(_vm.m))]),_vm._v(" "),_c('i',{staticClass:"iconfont icon-right",on:{"click":_vm.renderNextMonth}}),_vm._v(" "),_c('i',{staticClass:"iconfont icon-doubleright",on:{"click":_vm.renderNextYear}})]),_vm._v(" "),_c('div',{staticClass:"weeks"},_vm._l((_vm.weeks),function(week){return _c('div',{key:week,staticClass:"week"},[_vm._v(_vm._s(week))])}),0),_vm._v(" "),_c('calendar-item',{attrs:{"mode":_vm.mode,"value":_vm.valueArr,"year":_vm.y,"month":_vm.m},on:{"click":_vm.select}}),_vm._v(" "),_c('div',{staticClass:"footer",on:{"click":_vm.renderToday}},[_vm._v("今天")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/common/Calendar.vue?vue&type=template&id=6e643b6f&scoped=true&

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(0);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/common/CalendarItem.vue?vue&type=template&id=44173a9f&scoped=true&
var CalendarItemvue_type_template_id_44173a9f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-item"},_vm._l((_vm.days),function(item){return _c('div',{key:("" + (item.month) + (item.day)),staticClass:"day-item",class:{prev: item.isPre, next: item.isNext, today: item.isNow, active: _vm.isActive(item)},on:{"click":function($event){return _vm.itemClick(item)}}},[_c('div',{staticClass:"day"},[_vm._v(_vm._s(item.day))])])}),0)}
var CalendarItemvue_type_template_id_44173a9f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/common/CalendarItem.vue?vue&type=template&id=44173a9f&scoped=true&

// CONCATENATED MODULE: ./src/utils/calendar.js


/*
 * @Description: 当月显示部分上月和部分下月的天数
 */

/**
 * 当前时间
 */
var now = new Date();
var nowYear = now.getFullYear();
var nowMonth = now.getMonth() + 1;
var nowDay = now.getDate();
/**
 * @description: 获取当前时间 Date
 * @return: Date
 */

function toDate() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return new Date(str.replace(/-/g, '/'));
}
/**
 * 处理当前时间
 */

function getItemDay(options) {
  var year = options.year,
      month = options.month,
      day = options.day;
  var isNow = nowMonth === month && nowYear === year && nowDay === day;
  if (isNow) options.isNow = true;
  return options;
}
/**
 * @description: 获取当月天数
 */


function getCurrentDays(_ref) {
  var year = _ref.year,
      month = _ref.month;
  var lastDay = new Date(year, month, 0).getDate();
  var currentDays = [];

  for (var i = 1; i <= lastDay; i++) {
    currentDays.push(getItemDay({
      year: year,
      month: month,
      day: i
    }));
  }

  return currentDays;
}
/**
 * @description: 获取当月显示的上月天数
 */


function getPreDays(_ref2) {
  var year = _ref2.year,
      month = _ref2.month;
  var preDays = []; // 当月第一天是星期几

  var firstDay = new Date(year, month - 1, 1).getDay();
  var preLastDay = new Date(year, month - 1, 0).getDate();
  if (firstDay === 7) return [];
  var m = month > 2 ? month - 1 : 12;
  var y = month > 2 ? year : year - 1;

  for (var i = 0; i < firstDay; i++) {
    var day = preLastDay - i;
    preDays.unshift(getItemDay({
      year: y,
      month: m,
      day: day,
      isPre: true
    }));
  }

  return preDays;
}
/**
 * @description: 获取当月显示的下月天数(一共显示6行即42天)
 */


function getNextDays(_ref3, daysLength) {
  var year = _ref3.year,
      month = _ref3.month;
  var nextDays = [];
  var fillLength = 42 - daysLength;
  var m = month === 12 ? 1 : month + 1;
  var y = month === 12 ? year + 1 : year;

  for (var i = 1; i <= fillLength; i++) {
    nextDays.push(getItemDay({
      year: y,
      month: m,
      day: i,
      isNext: true
    }));
  }

  return nextDays;
}
/**
 * @description: 获取一月所有的日期
 */


function getMonthDays(opt) {
  var options = opt;

  if (!options) {
    var _now = new Date();

    options = {
      year: _now.getFullYear(),
      month: _now.getMonth() + 1
    };
  } // 当月月天数


  var currentDays = getCurrentDays(options); // 上月显示天数

  var preDays = getPreDays(options); // 下月显示天数

  var nextDays = getNextDays(options, currentDays.length + preDays.length);
  return [].concat(toConsumableArray_default()(preDays), toConsumableArray_default()(currentDays), toConsumableArray_default()(nextDays));
}
// CONCATENATED MODULE: ./src/utils/index.js
// 防抖函数
var timer;
function debounce(fn) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

  if (typeof fn !== 'function') {
    throw new Error('必须传入一个函数作为参数');
  }

  timer && clearTimeout(timer);
  timer = setTimeout(function () {
    fn();
  }, time);
} // 补0

function fixZero() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return num > 9 ? num : "0".concat(num);
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/common/CalendarItem.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CalendarItemvue_type_script_lang_js_ = ({
  props: {
    mode: {
      validator: function validator(value) {
        return ['single', 'multiple', 'range'].includes(value);
      },
      "default": 'single'
    },
    year: {
      type: Number,
      "default": nowYear
    },
    month: {
      type: Number,
      "default": nowMonth
    },
    value: {
      type: [Array, String],
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      days: getMonthDays({
        year: this.year,
        month: this.month
      })
    };
  },
  computed: {},
  watch: {
    year: function year() {
      this.init();
    },
    month: function month() {
      this.init();
    }
  },
  methods: {
    fixZero: fixZero,
    init: function init() {
      var _this = this;

      debounce(function () {
        _this.days = getMonthDays({
          year: _this.year,
          month: _this.month
        });
      });
    },
    itemClick: function itemClick(item) {
      if (item.isPre || item.isNext) return;
      this.$emit('click', "".concat(item.year, "-").concat(fixZero(item.month), "-").concat(fixZero(item.day)));
    },
    isActive: function isActive(item) {
      var value = this.value;

      if (['single', 'multiple'].includes(this.mode)) {
        return value.includes("".concat(item.year, "-").concat(fixZero(item.month), "-").concat(fixZero(item.day)));
      }

      if (this.mode === 'range') {
        if (!value.length) return false;

        var _value = slicedToArray_default()(value, 2),
            preSelect = _value[0],
            nextSelect = _value[1];

        if (!nextSelect) nextSelect = preSelect;
        var itemDate = new Date(item.year, item.month - 1, item.day);
        return itemDate >= toDate(preSelect) && itemDate <= toDate(nextSelect);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/common/CalendarItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_CalendarItemvue_type_script_lang_js_ = (CalendarItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/common/CalendarItem.vue?vue&type=style&index=0&id=44173a9f&lang=scss&scoped=true&
var CalendarItemvue_type_style_index_0_id_44173a9f_lang_scss_scoped_true_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/common/CalendarItem.vue






/* normalize component */

var component = normalizeComponent(
  common_CalendarItemvue_type_script_lang_js_,
  CalendarItemvue_type_template_id_44173a9f_scoped_true_render,
  CalendarItemvue_type_template_id_44173a9f_scoped_true_staticRenderFns,
  false,
  null,
  "44173a9f",
  null
  
)

/* harmony default export */ var CalendarItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/common/Calendar.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Calendarvue_type_script_lang_js_ = ({
  components: {
    CalendarItem: CalendarItem
  },
  props: {
    mode: {
      validator: function validator(value) {
        return ['single', 'multiple', 'range'].includes(value);
      },
      "default": 'single'
    },
    value: {
      type: [Array, String],
      "default": ''
    },
    year: {
      type: Number,
      "default": nowYear
    },
    month: {
      type: Number,
      "default": nowMonth
    }
  },
  data: function data() {
    return {
      y: this.year,
      m: this.month,
      weeks: ['日', '一', '二', '三', '四', '五', '六']
    };
  },
  computed: {
    valueArr: function valueArr() {
      return this.mode === 'single' ? [this.value] : this.value;
    }
  },
  methods: {
    select: function select(e) {
      var value = toConsumableArray_default()(this.value);

      switch (this.mode) {
        case 'single':
          this.$emit('input', e);
          break;

        case 'multiple':
          if (value.includes(e)) {
            this.$emit('input', value.filter(function (item) {
              return item !== e;
            }));
          } else {
            value.push(e);
            this.$emit('input', value);
          }

          break;

        case 'range':
          if (value.length === 1) {
            var _value = value,
                _value2 = slicedToArray_default()(_value, 1),
                select = _value2[0];

            if (toDate(select) > toDate(e)) {
              value.unshift(e);
            } else {
              value.push(e);
            }
          } else {
            value = [e];
          }

          this.$emit('input', value);
          break;

        default:
          console.error('mode类型错误');
      }
    },
    renderPreYear: function renderPreYear() {
      this.y -= 1;
    },
    renderNextYear: function renderNextYear() {
      this.y += 1;
    },
    renderPreMonth: function renderPreMonth() {
      if (this.m === 1) {
        this.y = this.y - 1;
        this.m = 12;
      } else {
        this.m -= 1;
      }
    },
    renderNextMonth: function renderNextMonth() {
      if (this.m === 12) {
        this.y = this.y + 1;
        this.m = 1;
      } else {
        this.m += 1;
      }
    },
    renderToday: function renderToday() {
      this.y = nowYear;
      this.m = nowMonth;
    }
  }
});
// CONCATENATED MODULE: ./src/common/Calendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Calendarvue_type_script_lang_js_ = (Calendarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/common/Calendar.vue?vue&type=style&index=0&id=6e643b6f&lang=scss&scoped=true&
var Calendarvue_type_style_index_0_id_6e643b6f_lang_scss_scoped_true_ = __webpack_require__(9);

// CONCATENATED MODULE: ./src/common/Calendar.vue






/* normalize component */

var Calendar_component = normalizeComponent(
  common_Calendarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6e643b6f",
  null
  
)

/* harmony default export */ var Calendar = (Calendar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/common/CalendarPicker.vue?vue&type=template&id=7b925c24&
var CalendarPickervue_type_template_id_7b925c24_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kuan-calendar-outer",class:{active: _vm.visible}},[(_vm.visible)?_c('div',{staticClass:"close-bg",on:{"click":function($event){_vm.visible = false}}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"kuan-calendar-picker",class:{active: _vm.visible}},[_c('input',{staticClass:"input",attrs:{"readonly":"","placeholder":"请选择时间"},domProps:{"value":_vm.computedValue},on:{"focus":function($event){_vm.visible = true}}}),_vm._v(" "),_c('transition',{attrs:{"name":"calendar"}},[(_vm.visible)?_c('calendar',{attrs:{"mode":_vm.mode,"value":_vm.value,"year":_vm.year,"month":_vm.month},on:{"input":_vm.change}}):_vm._e()],1)],1)])}
var CalendarPickervue_type_template_id_7b925c24_staticRenderFns = []


// CONCATENATED MODULE: ./src/common/CalendarPicker.vue?vue&type=template&id=7b925c24&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/common/CalendarPicker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CalendarPickervue_type_script_lang_js_ = ({
  components: {
    Calendar: Calendar
  },
  props: {
    mode: {
      validator: function validator(value) {
        return ['single', 'multiple', 'range'].includes(value);
      },
      "default": 'single'
    },
    value: {
      type: [Array, String],
      "default": ''
    },
    year: {
      type: Number,
      "default": nowYear
    },
    month: {
      type: Number,
      "default": nowMonth
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  computed: {
    computedValue: function computedValue() {
      if (this.mode === 'single') {
        return this.value;
      }

      if (this.mode === 'multiple') {
        return this.value.join('/');
      }

      if (this.mode === 'range') {
        return this.value.join('至');
      }
    }
  },
  methods: {
    change: function change(e) {
      var _this = this;

      this.$emit('input', e);

      if (['single', 'multiple'].includes(this.mode)) {
        return this.visible = false;
      }

      if (this.mode === 'range' && e.length === 2) {
        return this.$nextTick(function () {
          _this.visible = false;
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/common/CalendarPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_CalendarPickervue_type_script_lang_js_ = (CalendarPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/common/CalendarPicker.vue?vue&type=style&index=0&lang=scss&
var CalendarPickervue_type_style_index_0_lang_scss_ = __webpack_require__(11);

// CONCATENATED MODULE: ./src/common/CalendarPicker.vue






/* normalize component */

var CalendarPicker_component = normalizeComponent(
  common_CalendarPickervue_type_script_lang_js_,
  CalendarPickervue_type_template_id_7b925c24_render,
  CalendarPickervue_type_template_id_7b925c24_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CalendarPicker = (CalendarPicker_component.exports);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Calendar */__webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* concated harmony reexport CalendarPicker */__webpack_require__.d(__webpack_exports__, "CalendarPicker", function() { return CalendarPicker; });



var src_install = function install(Vue) {
  Vue.component('calendar', Calendar);
  Vue.component('calendar-picker', CalendarPicker);
};

if (typeof window !== 'undefined' && window.Vue) {
  src_install(window.Vue);
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  install: src_install
});


/***/ })
/******/ ]);
});