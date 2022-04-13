module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/bundles.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/badgeList.tsx":
/*!**********************************!*\
  !*** ./components/badgeList.tsx ***!
  \**********************************/
/*! exports provided: BadgeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeList", function() { return BadgeList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _oneBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oneBadge */ "./components/oneBadge.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\badgeList.tsx";

const BadgeList = ({
  fieldName,
  action,
  item,
  setItem,
  setSearch
}) => {
  return item[fieldName] && item[fieldName].length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: item[fieldName].map(oneBadge => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_oneBadge__WEBPACK_IMPORTED_MODULE_1__["OneBadge"], {
      fieldName: fieldName,
      item: oneBadge,
      action: action,
      setItem: setItem,
      currentItem: item
    }, `${item['id']}-${oneBadge.name}}`, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined))
  }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    className: "text-gray-400",
    children: "None found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/generateInputField.tsx":
/*!*******************************************!*\
  !*** ./components/generateInputField.tsx ***!
  \*******************************************/
/*! exports provided: GenerateInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateInputField", function() { return GenerateInputField; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\generateInputField.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const GenerateInputField = ({
  currentItem,
  name,
  changeHandler
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "py-2",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
    className: "block py-2",
    children: name.charAt(0).toUpperCase() + name.slice(1)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
    className: "border-4 rounded w-full py-2 px-3",
    value: currentItem[name],
    onChange: e => {
      e.persist();
      changeHandler(curr => _objectSpread(_objectSpread({}, curr), {}, {
        [name]: e.target.value
      }));
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 5
}, undefined);

/***/ }),

/***/ "./components/itemEdit.tsx":
/*!*********************************!*\
  !*** ./components/itemEdit.tsx ***!
  \*********************************/
/*! exports provided: ItemEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEdit", function() { return ItemEdit; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\itemEdit.tsx";


const ItemEdit = ({
  item,
  type,
  selected,
  setSelected
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_1__["ItemType"].FeedType;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onClick: e => {
      e.stopPropagation();
      setSelected(currState => ({
        id: item.id,
        feeds: isFeed ? [item] : item['feeds'],
        editMode: !selected.editMode || currState.id !== item.id ? true : false,
        newMode: false
      }));
    },
    className: "flex py-2 mx-1 z-10",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_2__["EditPencil"], {
      className: `
            h-6 w-6 ${item.id === selected.id && selected.editMode ? `text-${isFeed ? 'green' : 'purple'}-400` : 'text-gray-500'} inline-block align-middle
           `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/itemList.tsx":
/*!*********************************!*\
  !*** ./components/itemList.tsx ***!
  \*********************************/
/*! exports provided: ItemList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemList", function() { return ItemList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _notifyLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyLoading */ "./components/notifyLoading.tsx");
/* harmony import */ var _notifyError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifyError */ "./components/notifyError.tsx");
/* harmony import */ var _oneListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oneListItem */ "./components/oneListItem.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\itemList.tsx";







const ItemList = ({
  type,
  selected,
  setSelected,
  useSelected = false,
  allowEdits = false
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_3__["ItemType"].FeedType;
  const {
    loading,
    error,
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["FEEDS_QUERY"] : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["BUNDLES_QUERY"]);
  console.log(loading, error, data);
  const {
    feeds,
    bundles
  } = data || {};
  const itemList = isFeed ? feeds : bundles;
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    (async () => {
      if (useSelected && itemList && itemList.length > 0 && selected.id === null) {
        const firstItem = itemList[0];
        await setSelected({
          id: firstItem.id,
          feeds: isFeed ? [firstItem] : firstItem['feeds'],
          editMode: false,
          newMode: false
        });
      }
    })();
  });

  if (loading) {
    /*#__PURE__*/
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_notifyLoading__WEBPACK_IMPORTED_MODULE_4__["NotifyLoading"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }, undefined);
  }

  if (error || !itemList) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_notifyError__WEBPACK_IMPORTED_MODULE_5__["NotifyError"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid lg:grid-cols-3 md:grid-cols-2 gap-4",
      children: itemList && itemList.length > 0 ? itemList.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_oneListItem__WEBPACK_IMPORTED_MODULE_6__["OneListItem"], {
        type: type,
        item: item,
        useSelected: useSelected,
        allowEdits: allowEdits,
        selected: selected,
        setSelected: setSelected
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, undefined)) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "None are present. Why not add one?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./components/nav.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\layout.tsx";

const Layout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "p-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_nav__WEBPACK_IMPORTED_MODULE_1__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/nav.tsx":
/*!****************************!*\
  !*** ./components/nav.tsx ***!
  \****************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/user */ "./utils/user.ts");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\nav.tsx";


const Nav = () => {
  const {
    user,
    loading
  } = Object(_utils_user__WEBPACK_IMPORTED_MODULE_2__["useFetchUser"])();
  console.log(user, loading);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "flex grid grid-cols-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-span-1 flex justify-start",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "inline-flex cursor-pointer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "sm:h-10 h-8 pr-1",
              src: "/logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "p-2 text-center block hover:blue-700 sm:visible invisible font-medium",
              children: "SWL, LLC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-span-3 flex justify-end",
      children: [user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/saved-articles",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700 text-bold",
            children: "Saved Articles"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/bundles",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Bundles"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/feeds",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Feeds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), user && !loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/api/logout",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/api/login",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/newEditItem.tsx":
/*!************************************!*\
  !*** ./components/newEditItem.tsx ***!
  \************************************/
/*! exports provided: NewEditItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEditItem", function() { return NewEditItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api/graphql/mutations */ "./utils/api/graphql/mutations.ts");
/* harmony import */ var _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var _utils_optimisticCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/optimisticCache */ "./utils/optimisticCache.ts");
/* harmony import */ var _utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/prepareUpdateObj */ "./utils/prepareUpdateObj.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _utils_update__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/update */ "./utils/update.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _generateInputField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./generateInputField */ "./components/generateInputField.tsx");
/* harmony import */ var _searchItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./searchItems */ "./components/searchItems.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\newEditItem.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const NewEditItem = ({
  type,
  selected,
  setSelected
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_7__["ItemType"].FeedType;
  const initialFeed = {
    name: '',
    url: '',
    tags: []
  };
  const initialBundle = {
    name: '',
    description: '',
    tags: [],
    feeds: []
  };
  const initialState = isFeed ? initialFeed : initialBundle;
  const {
    0: currentItem,
    1: setItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState);
  const inputFields = isFeed ? ['name', 'url'] : ['name', 'description'];
  const [createItemMutation, {
    loading: createLoading,
    error: createError
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(isFeed ? _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["CREATE_FEED_MUTATION"] : _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["CREATE_BUNDLE_MUTATION"]);
  const [updateItemMutation, {
    loading: updateLoading,
    error: updateError
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(isFeed ? _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["UPDATE_FEED_MUTATION"] : _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["UPDATE_BUNDLE_MUTATION"]);
  const variables = {
    data: {
      id: selected.id ? selected.id : ''
    }
  };
  const {
    loading: itemQueryLoading,
    error: itemQueryError,
    data: itemQueryData
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__["FEED_QUERY"] : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__["BUNDLE_QUERY"], {
    variables
  });
  const {
    data: meData,
    loading: meLoading,
    error: meError
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__["ME_QUERY"]);
  const {
    bundle,
    feed
  } = itemQueryData || {};
  const item = isFeed ? feed : bundle;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    (async () => {
      if (item && selected.editMode) {
        const {
          __typename,
          likes,
          author
        } = item,
              cleanedItem = _objectWithoutProperties(item, ["__typename", "likes", "author"]);

        setItem(_objectSpread({}, cleanedItem));
      } else {
        setItem(initialState);
      }
    })();
  }, [itemQueryData]);

  if (createLoading || updateLoading || itemQueryLoading || meLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_12__["WaitingClock"], {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 12
    }, undefined);
  }

  if (createError || updateError || itemQueryError || meError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_12__["ErrorSign"], {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 12
    }, undefined);
  }

  console.log(itemQueryData);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: async e => {
        e.preventDefault();
        const data = Object(_utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_6__["prepareNewUpdateObj"])(item, currentItem, isFeed, selected.editMode);
        console.log(data);
        selected.editMode ? updateItemMutation({
          variables: {
            data
          },
          optimisticResponse: Object(_utils_optimisticCache__WEBPACK_IMPORTED_MODULE_5__["optimisticCache"])(isFeed, 'update', data, currentItem, meData)
        }) : createItemMutation({
          variables: {
            data
          },
          update: Object(_utils_update__WEBPACK_IMPORTED_MODULE_8__["updateCache"])(isFeed, 'create'),
          optimisticResponse: Object(_utils_optimisticCache__WEBPACK_IMPORTED_MODULE_5__["optimisticCache"])(isFeed, 'create', data, currentItem, meData)
        });
        await setItem(initialState);
        setSelected(currState => _objectSpread(_objectSpread({}, currState), {}, {
          editMode: false,
          newMode: false
        }));
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-12 gap-4 rounded-md border-4 my-4 py-2 px-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "col-span-12 text-lg font-medium py-2",
          children: isFeed ? 'New Feed' : 'New Bundle'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-6",
          children: inputFields.map(name => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_generateInputField__WEBPACK_IMPORTED_MODULE_10__["GenerateInputField"], {
            currentItem: currentItem,
            name: name,
            changeHandler: setItem
          }, `${type}-${name}`, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "py-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "black py-2",
              children: "Tags:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "grid grid-cols-3 gap-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_badgeList__WEBPACK_IMPORTED_MODULE_9__["BadgeList"], {
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__["BadgeFieldName"].tags,
                action: _utils_types__WEBPACK_IMPORTED_MODULE_7__["ActionType"].CREATE,
                setItem: setItem,
                item: currentItem
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "py-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "block py-2",
                children: "Add New Tag:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_searchItems__WEBPACK_IMPORTED_MODULE_11__["SearchItems"], {
                queryName: isFeed ? _utils_types__WEBPACK_IMPORTED_MODULE_7__["SearchQueryName"].findFeedTags : _utils_types__WEBPACK_IMPORTED_MODULE_7__["SearchQueryName"].findBundleTags,
                query: isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__["FIND_FEED_TAGS_QUERY"] : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__["FIND_BUNDLE_TAGS_QUERY"],
                setItem: setItem,
                currentItem: currentItem,
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__["BadgeFieldName"].tags
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, undefined), isFeed ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-2",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "black py-2",
                  children: "Feeds:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid grid-cols-3 gap-2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_badgeList__WEBPACK_IMPORTED_MODULE_9__["BadgeList"], {
                    fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__["BadgeFieldName"].feeds,
                    action: _utils_types__WEBPACK_IMPORTED_MODULE_7__["ActionType"].CREATE,
                    setItem: setItem,
                    item: currentItem
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-2",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "black py-2",
                  children: "Add New Feed:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_searchItems__WEBPACK_IMPORTED_MODULE_11__["SearchItems"], {
                  queryName: _utils_types__WEBPACK_IMPORTED_MODULE_7__["SearchQueryName"].findFeeds,
                  query: _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__["FIND_FEEDS_QUERY"],
                  setItem: setItem,
                  currentItem: currentItem,
                  fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__["BadgeFieldName"].feeds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 19
              }, undefined)]
            }, void 0, true)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `py-4 ${isFeed ? null : 'pt-1'}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: `py-4 ${`bg-${isFeed ? 'green' : 'purple'}-400 `} hover:bg-${isFeed ? 'green' : 'purple'}-700 text-white font-bold px-12 rounded`,
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./components/notifyError.tsx":
/*!************************************!*\
  !*** ./components/notifyError.tsx ***!
  \************************************/
/*! exports provided: NotifyError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyError", function() { return NotifyError; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\notifyError.tsx";

const NotifyError = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "h-screen flex",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_1__["ErrorSign"], {
      className: "h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./components/notifyLoading.tsx":
/*!**************************************!*\
  !*** ./components/notifyLoading.tsx ***!
  \**************************************/
/*! exports provided: NotifyLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyLoading", function() { return NotifyLoading; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\notifyLoading.tsx";

const NotifyLoading = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "h-screen flex",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_1__["WaitingClock"], {
      className: "h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./components/oneBadge.tsx":
/*!*********************************!*\
  !*** ./components/oneBadge.tsx ***!
  \*********************************/
/*! exports provided: OneBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneBadge", function() { return OneBadge; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\oneBadge.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OneBadge = ({
  item,
  action,
  currentItem,
  fieldName,
  setItem
}) => {
  const color = fieldName === _utils_types__WEBPACK_IMPORTED_MODULE_2__["BadgeFieldName"].tags ? 'blue' : _utils_types__WEBPACK_IMPORTED_MODULE_2__["BadgeFieldName"].feeds ? 'green' : 'purple';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "inline-block align-middle justify-between",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: `flex justify-center text-sm py-2 px-2 rounded-lg bg-${color}-200 `,
      children: [action === _utils_types__WEBPACK_IMPORTED_MODULE_2__["ActionType"].ADD ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: () => {
          setItem(currState => _objectSpread(_objectSpread({}, currState), {}, {
            [fieldName]: [...currState[fieldName], _objectSpread({}, item)]
          }));
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_3__["Plus"], {
          className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, undefined) : null, action === _utils_types__WEBPACK_IMPORTED_MODULE_2__["ActionType"].CREATE ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: () => {
          setItem(currState => _objectSpread(_objectSpread({}, currState), {}, {
            [fieldName]: currState[fieldName].filter(o => item.name !== o.name)
          }));
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_3__["Minus"], {
          className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: `text-xs text-${color}-600 text-center`,
        children: [" ", item.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/oneListItem.tsx":
/*!************************************!*\
  !*** ./components/oneListItem.tsx ***!
  \************************************/
/*! exports provided: OneListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneListItem", function() { return OneListItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _itemEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./itemEdit */ "./components/itemEdit.tsx");
/* harmony import */ var _profilePic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profilePic */ "./components/profilePic.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\oneListItem.tsx";









const OneListItem = ({
  item,
  type,
  selected,
  setSelected,
  useSelected = false,
  allowEdits = false
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_4__["ItemType"].FeedType;
  const isSelected = useSelected && selected && selected.id === item.id;
  const {
    user,
    error,
    isLoading
  } = Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__["useUser"])();

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_9__["WaitingClock"], {
      className: "h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 12
    }, undefined);
  }

  const canManipulate = !isLoading && user && lodash__WEBPACK_IMPORTED_MODULE_3__["get"](item, 'author.autho0') === user.sub && allowEdits && useSelected;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/${isFeed ? 'feed' : 'bundle'}/${item.id}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `
                    cursor-pointer grid grid-cols-6 p-4 rounded-lg
                    ${useSelected ? 'rounded-b-none' : 'border-b-4'} 
                    border-t-4 border-l-4 border-r-4
                    ${isSelected ? `border-${isFeed ? 'green' : 'purple'}-400` : 'border-gray-300'}
                `,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            className: "font-bold",
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined), !isFeed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: item['description']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 24
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 flex justify-end",
          children: canManipulate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_itemEdit__WEBPACK_IMPORTED_MODULE_7__["ItemEdit"], {
            item: item,
            type: type,
            selected: selected,
            setSelected: setSelected
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, undefined) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex span-col-6 py-0 space-x-2",
          children: item.author ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_profilePic__WEBPACK_IMPORTED_MODULE_8__["ProfilePic"], {
            author: item.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 28
          }, undefined) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-6 py-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "grids grids-cols-2 gap-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_badgeList__WEBPACK_IMPORTED_MODULE_6__["BadgeList"], {
              fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_4__["BadgeFieldName"].tags,
              action: _utils_types__WEBPACK_IMPORTED_MODULE_4__["ActionType"].NONE,
              item: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-6 py-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: isFeed ? 'Bundles' : 'Feeds'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_badgeList__WEBPACK_IMPORTED_MODULE_6__["BadgeList"], {
              fieldName: isFeed ? _utils_types__WEBPACK_IMPORTED_MODULE_4__["BadgeFieldName"].bundles : _utils_types__WEBPACK_IMPORTED_MODULE_4__["BadgeFieldName"].feeds,
              action: _utils_types__WEBPACK_IMPORTED_MODULE_4__["ActionType"].NONE,
              item: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), useSelected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: isSelected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          onClick: e => {
            e.preventDefault();
          },
          className: `flex rounded-lg rounded-t-none align-middle ${isSelected ? `bg-${isFeed ? 'green' : 'purple'}-400` : `bg-gray-300`} p-4 z-10 text-white cursor-pointer`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_9__["DoubleArrowDown"], {
            className: "h-5 w-5 text-white-500 mr-2 mt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 17
          }, undefined), `Hide ${isFeed ? 'Feed' : 'Bundle'} Articles`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          onClick: e => {
            e.preventDefault();
            setSelected({
              id: item.id,
              feeds: isFeed ? [item] : item['feeds'],
              editMode: false,
              newMode: false
            });
          },
          className: `flex rounded-lg rounded-t-none align-middle ${isSelected ? `bg-${isFeed ? 'green' : 'purple'}-400` : `bg-gray-300`} p-4 z-10 text-white cursor-pointer`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_9__["DoubleArrowRight"], {
            className: "h-5 w-5 text-white-500 mr-2 mt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 17
          }, undefined), ` Show ${isFeed ? `Feed` : `Bundle`} Articles`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 15
        }, undefined)
      }, void 0, false) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/profilePic.tsx":
/*!***********************************!*\
  !*** ./components/profilePic.tsx ***!
  \***********************************/
/*! exports provided: ProfilePic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePic", function() { return ProfilePic; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\profilePic.tsx";

const ProfilePic = ({
  author
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: [author.picture ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "rounded-full p-0.5 w-8 h-8 border-2 border-gray-300",
      src: author.picture,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_1__["Question"], {
    className: "w-6 h-6 text-gray-500"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: author.nickname
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined)]
}, void 0, true);

/***/ }),

/***/ "./components/searchItems.tsx":
/*!************************************!*\
  !*** ./components/searchItems.tsx ***!
  \************************************/
/*! exports provided: SearchItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItems", function() { return SearchItems; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\searchItems.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { Search, Spin } from './svg';


const SearchItems = ({
  currentItem,
  setItem,
  queryName,
  query,
  fieldName
}) => {
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [findItemQuery, {
    loading,
    data,
    called
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"])(query, {
    fetchPolicy: 'network-only'
  });
  console.log(loading, data, called);

  const fetchedItems = lodash__WEBPACK_IMPORTED_MODULE_5__["get"](data, queryName);

  const filtFindItems = fetchedItems ? fetchedItems.filter(oneItem => !currentItem[fieldName].map(o => o.name).includes(oneItem.name)) : [];
  const matchCurrent = filtFindItems.filter(o => o.name === search);
  const matchList = currentItem[fieldName].filter(o => o.name === search);
  const filtFindItemsWithAdd = matchCurrent.length === 0 && matchList.length === 0 && queryName !== 'findFeeds' ? [...filtFindItems, {
    name: search
  }] : filtFindItems;
  console.log(fetchedItems);
  console.log(filtFindItems);

  const dummyNewItem = _objectSpread(_objectSpread({}, currentItem), {}, {
    [fieldName]: filtFindItemsWithAdd
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex",
      children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        className: "h-6 w-6 text-gray-500 animate-spin",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        className: "mt-3 mr-2 w-6 h-6 text-gray-500",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: "border-4 rounded w-full py-2 px-3",
        value: search,
        onKeyDown: e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setItem(currState => _objectSpread(_objectSpread({}, currState), {}, {
              [fieldName]: [...currState[fieldName], _objectSpread({}, dummyNewItem[fieldName][0])]
            }));
            setSearch(() => '');
          }
        },
        onChange: e => {
          e.persist();

          if (e.target.value !== search) {
            setSearch(() => e.target.value);
            findItemQuery({
              variables: {
                data: {
                  search: e.target.value
                }
              }
            });
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-3 gap-2 flex m-2",
        children: search !== '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_badgeList__WEBPACK_IMPORTED_MODULE_4__["BadgeList"], {
          fieldName: fieldName,
          action: _utils_types__WEBPACK_IMPORTED_MODULE_3__["ActionType"].ADD,
          setItem: setItem,
          item: dummyNewItem,
          setSearch: setSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, undefined) : called ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-gray-400",
          children: "No matches"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, undefined) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-3 gap-2 flex m-2",
      children: search !== '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_badgeList__WEBPACK_IMPORTED_MODULE_4__["BadgeList"], {
        fieldName: fieldName,
        action: _utils_types__WEBPACK_IMPORTED_MODULE_3__["ActionType"].ADD,
        setItem: setItem,
        item: dummyNewItem,
        setSearch: setSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }, undefined) : called ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray-400",
        children: "No Matches"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, undefined) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/svg.tsx":
/*!****************************!*\
  !*** ./components/svg.tsx ***!
  \****************************/
/*! exports provided: WaitingClock, ErrorSign, DoubleArrowDown, DoubleArrowRight, Plus, Minus, Question, Spin, Search, EditPencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingClock", function() { return WaitingClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorSign", function() { return ErrorSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleArrowDown", function() { return DoubleArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleArrowRight", function() { return DoubleArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return Plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minus", function() { return Minus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spin", function() { return Spin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPencil", function() { return EditPencil; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\svg.tsx";
const WaitingClock = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 3
}, undefined);
const ErrorSign = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 19,
  columnNumber: 3
}, undefined);
const DoubleArrowDown = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 13l-7 7-7-7m14-8l-7 7-7-7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 36,
  columnNumber: 3
}, undefined);
const DoubleArrowRight = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 5l7 7-7 7M5 5l7 7-7 7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 53,
  columnNumber: 3
}, undefined);
const Plus = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 4v16m8-8H4"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 69,
  columnNumber: 3
}, undefined);
const Minus = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 12H4"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 85,
  columnNumber: 3
}, undefined);
const Question = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 102,
  columnNumber: 3
}, undefined);
const Spin = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 119,
  columnNumber: 3
}, undefined);
const Search = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 136,
  columnNumber: 3
}, undefined);
const EditPencil = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 153,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/bundles.tsx":
/*!***************************!*\
  !*** ./pages/bundles.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_itemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/itemList */ "./components/itemList.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/svg */ "./components/svg.tsx");
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/user */ "./utils/user.ts");
/* harmony import */ var _components_newEditItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/newEditItem */ "./components/newEditItem.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\bundles.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const BundlesPage = () => {
  const {
    user
  } = Object(_utils_user__WEBPACK_IMPORTED_MODULE_6__["useFetchUser"])();
  const initialSelected = {
    id: null,
    feeds: [],
    editMode: false,
    newMode: false
  };
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialSelected);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "grid-cols-1 justify-start flex text-lr font-medium py-4",
        children: "Bundles Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: e => {
          e.persist();
          setSelected(currState => _objectSpread(_objectSpread({}, currState), {}, {
            newMode: !currState.newMode,
            editMode: false
          }));
        },
        className: "flex grid-cols-1 justify-end cursor-pointer",
        children: [selected.newMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_svg__WEBPACK_IMPORTED_MODULE_5__["Minus"], {
          className: `h-6 w-6 text-${selected.newMode ? 'gray' : 'blue'}-500 mt-4`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_svg__WEBPACK_IMPORTED_MODULE_5__["Plus"], {
          className: `h-6 w-6 text-${selected.newMode ? 'gray' : 'blue'}-500 mt-4`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: `grid-cols-1 justify-start flex              text-lg font-medium py-4 text-${selected.newMode ? `gray` : `blue`}`,
          children: "New Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), (selected.editMode || selected.newMode) && user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_newEditItem__WEBPACK_IMPORTED_MODULE_7__["NewEditItem"], {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_4__["ItemType"].BundleType,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_itemList__WEBPACK_IMPORTED_MODULE_2__["ItemList"], {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_4__["ItemType"].BundleType,
      useSelected: true,
      allowEdits: true,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BundlesPage);

/***/ }),

/***/ "./utils/api/graphql/fragments.ts":
/*!****************************************!*\
  !*** ./utils/api/graphql/fragments.ts ***!
  \****************************************/
/*! exports provided: FEED_TAG_FRAGMENT, BUNDLE_TAG_FRAGMENT, AUTHOR_FRAGMENT, LIKE_FRAGMENT, FEED_FRAGMENT, BUNDLE_FRAGMENT, SAVED_ARTICLE_FRAGMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEED_TAG_FRAGMENT", function() { return FEED_TAG_FRAGMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUNDLE_TAG_FRAGMENT", function() { return BUNDLE_TAG_FRAGMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHOR_FRAGMENT", function() { return AUTHOR_FRAGMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_FRAGMENT", function() { return LIKE_FRAGMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEED_FRAGMENT", function() { return FEED_FRAGMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUNDLE_FRAGMENT", function() { return BUNDLE_FRAGMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVED_ARTICLE_FRAGMENT", function() { return SAVED_ARTICLE_FRAGMENT; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FEED_TAG_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  fragment FeedTagFragment on FeedTag {
    id
    name
  }
`;
const BUNDLE_TAG_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  fragment BundleTagFragment on BundleTag {
    id
    name
  }
`;
const AUTHOR_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  fragment AuthorFragment on User {
    id
    auth0
    picture
    nickname
  }
`;
const LIKE_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  fragment LikeFragment on Like {
    id
    name
  }
`;
const FEED_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  fragment FeedFragment on Feed {
    id
    name
    url
    likes {
      ...AuthorFragment
    }
    tags {
      ...FeedTagFragment
    }
    author {
      ...AuthorFragment
    }
  }
  ${FEED_TAG_FRAGMENT}
  ${AUTHOR_FRAGMENT}
`;
const BUNDLE_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  fragment BundleFragment on Bundle {
    id
    name
    description
    tags {
      ...BundleTagFragment
    }
    author {
      ...AuthorFragment
    }
    likes {
      ...AuthorFragment
    }
  }
  ${BUNDLE_TAG_FRAGMENT}
  ${AUTHOR_FRAGMENT}
`;
const SAVED_ARTICLE_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  fragment SavedArticleFragment on SavedArticle {
    id
    contents
    url
    author {
      ...AuthorFragment
    }
    feed {
      ...FeedFragment
    }
  }
  ${AUTHOR_FRAGMENT}
  ${FEED_FRAGMENT}
`;

/***/ }),

/***/ "./utils/api/graphql/mutations.ts":
/*!****************************************!*\
  !*** ./utils/api/graphql/mutations.ts ***!
  \****************************************/
/*! exports provided: LIKE_BUNDLE_MUTATION, LIKE_FEED_MUTATION, CREATE_BUNDLE_MUTATION, UPDATE_BUNDLE_MUTATION, CREATE_FEED_MUTATION, UPDATE_FEED_MUTATION, CREATE_SAVED_ARTICLE_MUTATION, DELETE_BUNDLE_MUTATION, DELETE_FEED_MUTATION, DELETE_SAVED_ARTICLE_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_BUNDLE_MUTATION", function() { return LIKE_BUNDLE_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_FEED_MUTATION", function() { return LIKE_FEED_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BUNDLE_MUTATION", function() { return CREATE_BUNDLE_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BUNDLE_MUTATION", function() { return UPDATE_BUNDLE_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_FEED_MUTATION", function() { return CREATE_FEED_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FEED_MUTATION", function() { return UPDATE_FEED_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_SAVED_ARTICLE_MUTATION", function() { return CREATE_SAVED_ARTICLE_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BUNDLE_MUTATION", function() { return DELETE_BUNDLE_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FEED_MUTATION", function() { return DELETE_FEED_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SAVED_ARTICLE_MUTATION", function() { return DELETE_SAVED_ARTICLE_MUTATION; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragments */ "./utils/api/graphql/fragments.ts");


const LIKE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation likeBundleMutation($data: LikeBundleInput) {
    likeBundle(data: $data) {
      ...BundleFragment
      feeds {
        ...FeedFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_FRAGMENT"]}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_FRAGMENT"]}
`;
const LIKE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation likeFeedMutation($data: LikeFeedInput) {
    likeFeed(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_FRAGMENT"]}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_FRAGMENT"]}
`;
const CREATE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation createBundleMutation($data: BundleCreateInput) {
    createBundle(data: $data) {
      ...BundleFragment
      feeds {
        ...FeedFragment
        bundles {
          ...BundleFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_FRAGMENT"]}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_FRAGMENT"]}
`;
const UPDATE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation updateBundleMutation($data: BundleUpdateInput) {
    updateBundle(data: $data) {
      ...BundleFragment
      feeds {
        ...FeedFragment
        bundles {
          ...BundleFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_FRAGMENT"]}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_FRAGMENT"]}
`;
const CREATE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation createFeedMutation($data: FeedCreateInput) {
    createFeed(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
        feeds {
          ...FeedFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_FRAGMENT"]}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_FRAGMENT"]}
`;
const UPDATE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation updateFeedMutation($data: FeedUpdateInput) {
    updateFeed(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
        feeds {
          ...FeedFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_FRAGMENT"]}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_FRAGMENT"]}
`;
const CREATE_SAVED_ARTICLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation createSavedArticleMutation($data: SavedArticleCreateInput) {
    createSavedArticle(data: $data) {
      ...SavedArticleFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["SAVED_ARTICLE_FRAGMENT"]}
`;
const DELETE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation deleteBundleMutation($data: BundleInput) {
    deleteBundle(data: $data) {
      id
    }
  }
`;
const DELETE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation deleteFeedMutation($data: FeedInput) {
    deleteFeed(data: $data) {
      id
    }
  }
`;
const DELETE_SAVED_ARTICLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation deleteSavedArticleMutation($data: DeleteSavedArticleInput) {
    deleteSavedArticle(data: $data) {
      id
      url
    }
  }
`;

/***/ }),

/***/ "./utils/api/graphql/queries.ts":
/*!**************************************!*\
  !*** ./utils/api/graphql/queries.ts ***!
  \**************************************/
/*! exports provided: BUNDLES_QUERY, FEEDS_QUERY, FIND_FEEDS_QUERY, FEED_QUERY, BUNDLE_QUERY, FIND_FEED_TAGS_QUERY, FIND_BUNDLE_TAGS_QUERY, SAVED_ARTICLES_QUERY, SAVED_ARTICLE_QUERY, ME_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUNDLES_QUERY", function() { return BUNDLES_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDS_QUERY", function() { return FEEDS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_FEEDS_QUERY", function() { return FIND_FEEDS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEED_QUERY", function() { return FEED_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUNDLE_QUERY", function() { return BUNDLE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_FEED_TAGS_QUERY", function() { return FIND_FEED_TAGS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_BUNDLE_TAGS_QUERY", function() { return FIND_BUNDLE_TAGS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVED_ARTICLES_QUERY", function() { return SAVED_ARTICLES_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVED_ARTICLE_QUERY", function() { return SAVED_ARTICLE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ME_QUERY", function() { return ME_QUERY; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragments */ "./utils/api/graphql/fragments.ts");


const BUNDLES_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query {
    bundles {
      ...BundleFragment
      feeds {
        ...FeedFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_FRAGMENT"]}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_FRAGMENT"]}
`;
const FEEDS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query {
    feeds {
      ...FeedFragment
      bundles {
        ...BundleFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_FRAGMENT"]}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_FRAGMENT"]}
`;
const FIND_FEEDS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query findFeedsQuery($data: FindFeedsInput) {
    findFeeds(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_FRAGMENT"]}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_FRAGMENT"]}
`;
const FEED_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query feedQuery($data: FeedInput) {
    feed(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
        feeds {
          ...FeedFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_FRAGMENT"]}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_FRAGMENT"]}
`;
const BUNDLE_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query bundleQuery($data: BundleInput) {
    bundle(data: $data) {
      ...BundleFragment
      feeds {
        ...FeedFragment
        bundles {
          ...BundleFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_FRAGMENT"]}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_FRAGMENT"]}
`;
const FIND_FEED_TAGS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query findFeedTagsQuery($data: FindFeedTagsInput) {
    findFeedTags(data: $data) {
      ...FeedTagFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["FEED_TAG_FRAGMENT"]}
`;
const FIND_BUNDLE_TAGS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query findBundleTagsQuery($data: FindBundleTagsInput) {
    findBundleTags(data: $data) {
      ...BundleTagFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["BUNDLE_TAG_FRAGMENT"]}
`;
const SAVED_ARTICLES_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query savedArticlesQuery {
    savedArticles {
      ...SavedArticleFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["SAVED_ARTICLE_FRAGMENT"]}
`;
const SAVED_ARTICLE_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query savedArticleQuery($data: SavedArticleInput) {
    savedArticle(data: $data) {
      ...SavedArticleFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["SAVED_ARTICLE_FRAGMENT"]}
`;
const ME_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query meQuery {
    me {
      ...AuthorFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__["AUTHOR_FRAGMENT"]}
`;

/***/ }),

/***/ "./utils/optimisticCache.ts":
/*!**********************************!*\
  !*** ./utils/optimisticCache.ts ***!
  \**********************************/
/*! exports provided: optimisticCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimisticCache", function() { return optimisticCache; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const optimisticCache = (isFeed, action, data, currentItem, meData) => {
  const __typename = isFeed ? 'Feed' : 'Bundle';

  const id = {
    data
  };
  const {
    me
  } = meData;

  const response = _objectSpread(_objectSpread(_objectSpread({
    id
  }, currentItem), {}, {
    [isFeed ? 'bundles' : 'feeds']: [],
    tags: [...currentItem.tags.filter(tag => lodash__WEBPACK_IMPORTED_MODULE_0__["has"](tag, 'id')), ...lodash__WEBPACK_IMPORTED_MODULE_0__["get"](data, 'tags.create', [].map(tag => _objectSpread({
      __typename: isFeed ? 'FeedTag' : 'BundleTag'
    }, tag)))]
  }, lodash__WEBPACK_IMPORTED_MODULE_0__(isFeed ? {} : {
    feeds: currentItem.feeds
  })), {}, {
    author: me
  });

  return {
    __typename: 'Mutation',
    [action + __typename]: _objectSpread({
      __typename
    }, response)
  };
};

/***/ }),

/***/ "./utils/prepareUpdateObj.ts":
/*!***********************************!*\
  !*** ./utils/prepareUpdateObj.ts ***!
  \***********************************/
/*! exports provided: prepareNewUpdateObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareNewUpdateObj", function() { return prepareNewUpdateObj; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const genNestedItems = currentItem => {
  const tags = "tags" in currentItem ? {
    tags: {
      connect: currentItem.tags.map(({
        id
      }) => ({
        id
      })).filter(({
        id
      }) => id !== undefined),
      create: currentItem.tags.filter(({
        id
      }) => id === undefined).map(o => _objectSpread(_objectSpread({}, o), {}, {
        id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
      }))
    }
  } : {};
  const feeds = 'feeds' in currentItem ? {
    feeds: {
      connect: currentItem.feeds.map(({
        id
      }) => ({
        id
      })).filter(({
        id
      }) => id !== undefined)
    }
  } : {};

  const {
    __typename,
    likes,
    author,
    bundles
  } = currentItem,
        cleanedItem = _objectWithoutProperties(currentItem, ["__typename", "likes", "author", "bundles"]); //strip unwanted from currentItem and call it 'cleanedItem' 'cleanedItem' will be all of the fields that are leftover.


  return _objectSpread(_objectSpread(_objectSpread({}, cleanedItem), tags), feeds); //add all tag and feed info to cleanedItem.
};

const cleanOps = (currentData, items) => {
  items.map(oneItem => {
    ['connect', 'disconnect', 'create'].map(operation => {
      if (operation in currentData[oneItem]) {
        currentData[oneItem][operation].length === 0 ? delete currentData[oneItem][operation] : null;
      }
    });

    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](currentData[oneItem])) {
      delete currentData[oneItem];
    }
  });
  return currentData;
};

const prepareNewUpdateObj = (queriedItem, currentItem, isFeed, isEditing) => {
  const currentData = genNestedItems(currentItem);

  if (!isEditing) {
    return _objectSpread(_objectSpread({}, currentData), {}, {
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])() // currentData (feed or tag) is returned WITHOUT an id number; thus one is added/provided.

    });
    const queriedData = genNestedItems(queriedItem);

    const disconnectedTags = lodash__WEBPACK_IMPORTED_MODULE_1__["differenceWith"](queriedData.tags.connect, currentData.tags.connect, lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"]);

    const connectedTags = lodash__WEBPACK_IMPORTED_MODULE_1__["differenceWith"](queriedData.tags.connect, currentData.tags.connect, lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"]);

    if (!isFeed) {
      const disconnectedFeeds = lodash__WEBPACK_IMPORTED_MODULE_1__["differenceWith"](queriedData.feeds.connect, currentData.feeds.connect, lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"]);

      const connectedFeeds = lodash__WEBPACK_IMPORTED_MODULE_1__["differenceWith"](queriedData.feeds.connect, currentData.feeds.connect, lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"]);

      return cleanOps(_objectSpread(_objectSpread({}, currentData), {}, {
        tags: {
          connect: connectedTags,
          disconnect: disconnectedTags,
          create: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](currentData, 'tags.create', [])
        },
        feeds: {
          connect: connectedFeeds,
          disconnect: disconnectedFeeds
        }
      }), ['tags', 'feeds']);
    } else {
      return cleanOps(_objectSpread(_objectSpread({}, currentData), {}, {
        tags: {
          connect: connectedTags,
          disconnect: disconnectedTags,
          create: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](currentData, 'tags.create', [])
        }
      }), ['tags']);
    }
  }
};

/***/ }),

/***/ "./utils/types.ts":
/*!************************!*\
  !*** ./utils/types.ts ***!
  \************************/
/*! exports provided: ItemType, BadgeFieldName, ActionType, SearchQueryName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemType", function() { return ItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeFieldName", function() { return BadgeFieldName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchQueryName", function() { return SearchQueryName; });
let ItemType;

(function (ItemType) {
  ItemType["BundleType"] = "BundleType";
  ItemType["FeedType"] = "FeedType";
})(ItemType || (ItemType = {}));

let BadgeFieldName;

(function (BadgeFieldName) {
  BadgeFieldName["tags"] = "tags";
  BadgeFieldName["feeds"] = "feeds";
  BadgeFieldName["bundles"] = "bundles";
})(BadgeFieldName || (BadgeFieldName = {}));

let ActionType;

(function (ActionType) {
  ActionType["ADD"] = "ADD";
  ActionType["CREATE"] = "CREATE";
  ActionType["NONE"] = "NONE";
})(ActionType || (ActionType = {}));

let SearchQueryName;

(function (SearchQueryName) {
  SearchQueryName["findFeedTags"] = "findFeedTags";
  SearchQueryName["findBundleTags"] = "findBundleTags";
  SearchQueryName["findFeeds"] = "findFeeds";
})(SearchQueryName || (SearchQueryName = {}));

/***/ }),

/***/ "./utils/update.ts":
/*!*************************!*\
  !*** ./utils/update.ts ***!
  \*************************/
/*! exports provided: updateCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCache", function() { return updateCache; });
/* harmony import */ var _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const updateCache = (isFeed, action) => (store, {
  data
}) => {
  const item = data[`${action}${isFeed} ? 'Feed' : 'Bundle'}`];

  try {
    store.writeQuery({
      query: isFeed ? _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__["FEED_QUERY"] : _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__["BUNDLE_QUERY"],
      variables: {
        data: {
          id: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](item, 'id')
        }
      },
      data: {
        [isFeed ? 'feed' : 'bundle']: item
      }
    });
  } catch (e) {}

  try {
    const {
      feeds,
      bundles
    } = store.readQuery({
      query: isFeed ? _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__["FEEDS_QUERY"] : _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__["BUNDLES_QUERY"]
    });
    const currentItems = isFeed ? feeds : bundles;
    store.writeQuery({
      query: isFeed ? _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__["FEEDS_QUERY"] : _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__["BUNDLES_QUERY"],
      data: {
        [isFeed ? 'feeds' : 'bundles']: [...currentItems.filter(o => o.id !== item.id), item]
      }
    });
  } catch (e) {}
};

/***/ }),

/***/ "./utils/user.ts":
/*!***********************!*\
  !*** ./utils/user.ts ***!
  \***********************/
/*! exports provided: fetchUser, useFetchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchUser", function() { return useFetchUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

async function fetchUser(cookie = '') {
  if (false) {}

  const res = await fetch('/api/me', cookie ? {
    headers: {
      cookie
    }
  } : {});

  if (!res.ok) {
    delete window.__user;
    return null;
  }

  const json = await res.json();

  if (false) {}

  return json;
} // @ts-ignore

function useFetchUser({
  required
} = {}) {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => !( false && false));
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => {
    if (true) {
      return null;
    }

    return window.__user || null;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!loading && user) {
      return;
    }

    setLoading(true);
    let isMounted = true;
    fetchUser().then(user => {
      // Only set the user if the component is still mounted
      if (isMounted) {
        // When the user is not logged in but login is required
        if (required && !user) {
          window.location.href = '/api/login';
          return;
        }

        setUser(user);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return {
    user,
    loading
  };
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhZGdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nZW5lcmF0ZUlucHV0RmllbGQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaXRlbUVkaXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaXRlbUxpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnlFcnJvci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnlMb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29uZUJhZGdlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29uZUxpc3RJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGVQaWMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoSXRlbXMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3ZnLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYnVuZGxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpL2dyYXBocWwvZnJhZ21lbnRzLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2FwaS9ncmFwaHFsL211dGF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9hcGkvZ3JhcGhxbC9xdWVyaWVzLnRzIiwid2VicGFjazovLy8uL3V0aWxzL29wdGltaXN0aWNDYWNoZS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9wcmVwYXJlVXBkYXRlT2JqLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3VwZGF0ZS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy91c2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiQmFkZ2VMaXN0IiwiZmllbGROYW1lIiwiYWN0aW9uIiwiaXRlbSIsInNldEl0ZW0iLCJzZXRTZWFyY2giLCJsZW5ndGgiLCJtYXAiLCJvbmVCYWRnZSIsIm5hbWUiLCJHZW5lcmF0ZUlucHV0RmllbGQiLCJjdXJyZW50SXRlbSIsImNoYW5nZUhhbmRsZXIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZSIsInBlcnNpc3QiLCJjdXJyIiwidGFyZ2V0IiwidmFsdWUiLCJJdGVtRWRpdCIsInR5cGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaXNGZWVkIiwiSXRlbVR5cGUiLCJGZWVkVHlwZSIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJTdGF0ZSIsImlkIiwiZmVlZHMiLCJlZGl0TW9kZSIsIm5ld01vZGUiLCJJdGVtTGlzdCIsInVzZVNlbGVjdGVkIiwiYWxsb3dFZGl0cyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsIkZFRURTX1FVRVJZIiwiQlVORExFU19RVUVSWSIsImNvbnNvbGUiLCJsb2ciLCJidW5kbGVzIiwiaXRlbUxpc3QiLCJ1c2VFZmZlY3QiLCJmaXJzdEl0ZW0iLCJMYXlvdXQiLCJjaGlsZHJlbiIsIk5hdiIsInVzZXIiLCJ1c2VGZXRjaFVzZXIiLCJOZXdFZGl0SXRlbSIsImluaXRpYWxGZWVkIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImluaXRpYWxTdGF0ZSIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHMiLCJjcmVhdGVJdGVtTXV0YXRpb24iLCJjcmVhdGVMb2FkaW5nIiwiY3JlYXRlRXJyb3IiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9GRUVEX01VVEFUSU9OIiwiQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiIsInVwZGF0ZUl0ZW1NdXRhdGlvbiIsInVwZGF0ZUxvYWRpbmciLCJ1cGRhdGVFcnJvciIsIlVQREFURV9GRUVEX01VVEFUSU9OIiwiVVBEQVRFX0JVTkRMRV9NVVRBVElPTiIsInZhcmlhYmxlcyIsIml0ZW1RdWVyeUxvYWRpbmciLCJpdGVtUXVlcnlFcnJvciIsIml0ZW1RdWVyeURhdGEiLCJGRUVEX1FVRVJZIiwiQlVORExFX1FVRVJZIiwibWVEYXRhIiwibWVMb2FkaW5nIiwibWVFcnJvciIsIk1FX1FVRVJZIiwiYnVuZGxlIiwiZmVlZCIsIl9fdHlwZW5hbWUiLCJsaWtlcyIsImF1dGhvciIsImNsZWFuZWRJdGVtIiwicHJldmVudERlZmF1bHQiLCJwcmVwYXJlTmV3VXBkYXRlT2JqIiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwib3B0aW1pc3RpY0NhY2hlIiwidXBkYXRlIiwidXBkYXRlQ2FjaGUiLCJCYWRnZUZpZWxkTmFtZSIsIkFjdGlvblR5cGUiLCJDUkVBVEUiLCJTZWFyY2hRdWVyeU5hbWUiLCJmaW5kRmVlZFRhZ3MiLCJmaW5kQnVuZGxlVGFncyIsIkZJTkRfRkVFRF9UQUdTX1FVRVJZIiwiRklORF9CVU5ETEVfVEFHU19RVUVSWSIsImZpbmRGZWVkcyIsIkZJTkRfRkVFRFNfUVVFUlkiLCJOb3RpZnlFcnJvciIsIk5vdGlmeUxvYWRpbmciLCJPbmVCYWRnZSIsImNvbG9yIiwiQUREIiwiZmlsdGVyIiwibyIsIk9uZUxpc3RJdGVtIiwiaXNTZWxlY3RlZCIsImlzTG9hZGluZyIsInVzZVVzZXIiLCJjYW5NYW5pcHVsYXRlIiwiXyIsInN1YiIsIk5PTkUiLCJQcm9maWxlUGljIiwicGljdHVyZSIsIm5pY2tuYW1lIiwiU2VhcmNoSXRlbXMiLCJxdWVyeU5hbWUiLCJxdWVyeSIsInNlYXJjaCIsImZpbmRJdGVtUXVlcnkiLCJjYWxsZWQiLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZldGNoZWRJdGVtcyIsImZpbHRGaW5kSXRlbXMiLCJvbmVJdGVtIiwiaW5jbHVkZXMiLCJtYXRjaEN1cnJlbnQiLCJtYXRjaExpc3QiLCJmaWx0RmluZEl0ZW1zV2l0aEFkZCIsImR1bW15TmV3SXRlbSIsImtleSIsIldhaXRpbmdDbG9jayIsImNsYXNzTmFtZSIsIkVycm9yU2lnbiIsIkRvdWJsZUFycm93RG93biIsIkRvdWJsZUFycm93UmlnaHQiLCJQbHVzIiwiTWludXMiLCJRdWVzdGlvbiIsIlNwaW4iLCJTZWFyY2giLCJFZGl0UGVuY2lsIiwicHJlZmV0Y2hlZCIsInJvdXRlciIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJzaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQnVuZGxlc1BhZ2UiLCJpbml0aWFsU2VsZWN0ZWQiLCJCdW5kbGVUeXBlIiwiRkVFRF9UQUdfRlJBR01FTlQiLCJncWwiLCJCVU5ETEVfVEFHX0ZSQUdNRU5UIiwiQVVUSE9SX0ZSQUdNRU5UIiwiTElLRV9GUkFHTUVOVCIsIkZFRURfRlJBR01FTlQiLCJCVU5ETEVfRlJBR01FTlQiLCJTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UIiwiTElLRV9CVU5ETEVfTVVUQVRJT04iLCJMSUtFX0ZFRURfTVVUQVRJT04iLCJDUkVBVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiIsIkRFTEVURV9CVU5ETEVfTVVUQVRJT04iLCJERUxFVEVfRkVFRF9NVVRBVElPTiIsIkRFTEVURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OIiwiU0FWRURfQVJUSUNMRVNfUVVFUlkiLCJTQVZFRF9BUlRJQ0xFX1FVRVJZIiwibWUiLCJyZXNwb25zZSIsInRhZyIsImdlbk5lc3RlZEl0ZW1zIiwiY29ubmVjdCIsInVuZGVmaW5lZCIsImNyZWF0ZSIsInV1aWR2NCIsImNsZWFuT3BzIiwiY3VycmVudERhdGEiLCJpdGVtcyIsIm9wZXJhdGlvbiIsInF1ZXJpZWRJdGVtIiwiaXNFZGl0aW5nIiwicXVlcmllZERhdGEiLCJkaXNjb25uZWN0ZWRUYWdzIiwiY29ubmVjdGVkVGFncyIsImRpc2Nvbm5lY3RlZEZlZWRzIiwiY29ubmVjdGVkRmVlZHMiLCJkaXNjb25uZWN0Iiwic3RvcmUiLCJ3cml0ZVF1ZXJ5IiwicmVhZFF1ZXJ5IiwiY3VycmVudEl0ZW1zIiwiZmV0Y2hVc2VyIiwiY29va2llIiwiaGVhZGVycyIsIm9rIiwiX191c2VyIiwianNvbiIsInJlcXVpcmVkIiwic2V0TG9hZGluZyIsInNldFVzZXIiLCJpc01vdW50ZWQiLCJ0aGVuIiwi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Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvYnVuZGxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYnVuZGxlcy50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFjdGlvblR5cGUsIEJhZGdlRmllbGROYW1lLCBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgT25lQmFkZ2UgfSBmcm9tICcuL29uZUJhZGdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBCYWRnZUxpc3QgPSAoe1xyXG4gICAgZmllbGROYW1lLFxyXG4gICAgYWN0aW9uLFxyXG4gICAgaXRlbSxcclxuICAgIHNldEl0ZW0sXHJcbiAgICBzZXRTZWFyY2gsXHJcbn0gOiB7XHJcbiAgICBmaWVsZE5hbWU6IEJhZGdlRmllbGROYW1lO1xyXG4gICAgYWN0aW9uOiBBY3Rpb25UeXBlO1xyXG4gICAgaXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDtcclxuICAgIHNldEl0ZW0/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj47XHJcbiAgICBzZXRTZWFyY2g/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTdHJpbmc+PjtcclxuXHJcbn0pID0+IHtcclxuICAgIHJldHVybiBpdGVtW2ZpZWxkTmFtZV0gJiYgaXRlbVtmaWVsZE5hbWVdLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7aXRlbVtmaWVsZE5hbWVdLm1hcCgob25lQmFkZ2UpID0+IChcclxuICAgICAgICAgICAgPE9uZUJhZGdlXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW1bJ2lkJ119LSR7b25lQmFkZ2UubmFtZX19YH1cclxuICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17ZmllbGROYW1lfVxyXG4gICAgICAgICAgICAgICAgaXRlbT17b25lQmFkZ2V9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cclxuICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17aXRlbX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICApIDogKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj5Ob25lIGZvdW5kPC9wPlxyXG4gICAgICk7XHJcbiAgICAgXHJcbn07IiwiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0IH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBHZW5lcmF0ZUlucHV0RmllbGQgPSAoe1xyXG4gICAgY3VycmVudEl0ZW0sXHJcbiAgICBuYW1lLFxyXG4gICAgY2hhbmdlSGFuZGxlclxyXG5cclxufSA6IHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGN1cnJlbnRJdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0XHJcbiAgICBjaGFuZ2VIYW5kbGVyOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj5cclxufSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+XHJcbiAgICAgICAgICAgIHtuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItNCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTNcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y3VycmVudEl0ZW1bbmFtZV19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VIYW5kbGVyKChjdXJyKSA9PiAoeyAuLi5jdXJyLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSkpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuKTsiLCJpbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQnVuZGxlT2JqZWN0LFxyXG4gIEZlZWRPYmplY3QsXHJcbiAgSXRlbVR5cGUsXHJcbiAgU2VsZWN0ZWRGZWVkU3RhdGUsXHJcbn0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBFZGl0UGVuY2lsIH0gZnJvbSAnLi9zdmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1FZGl0ID0gKHtcclxuICBpdGVtLFxyXG4gIHR5cGUsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgc2V0U2VsZWN0ZWQsXHJcbn06IHtcclxuICBpdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG4gIHR5cGU6IEl0ZW1UeXBlO1xyXG4gIHNlbGVjdGVkPzogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgc2V0U2VsZWN0ZWQ/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTZWxlY3RlZEZlZWRTdGF0ZT4+O1xyXG59KSA9PiB7XHJcbiAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICBmZWVkczogaXNGZWVkID8gW2l0ZW1dIDogaXRlbVsnZmVlZHMnXSxcclxuICAgICAgICAgIGVkaXRNb2RlOlxyXG4gICAgICAgICAgICAhc2VsZWN0ZWQuZWRpdE1vZGUgfHwgY3VyclN0YXRlLmlkICE9PSBpdGVtLmlkID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9J2ZsZXggcHktMiBteC0xIHotMTAnXHJcbiAgICA+XHJcbiAgICAgIDxFZGl0UGVuY2lsXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgIGgtNiB3LTYgJHtcclxuICAgICAgICAgICAgICBpdGVtLmlkID09PSBzZWxlY3RlZC5pZCAmJiBzZWxlY3RlZC5lZGl0TW9kZVxyXG4gICAgICAgICAgICAgICAgPyBgdGV4dC0ke2lzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ30tNDAwYFxyXG4gICAgICAgICAgICAgICAgOiAndGV4dC1ncmF5LTUwMCdcclxuICAgICAgICAgICAgfSBpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlXHJcbiAgICAgICAgICAgYH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBCVU5ETEVTX1FVRVJZLCBGRUVEU19RVUVSWSB9IGZyb20gJy4uL3V0aWxzL2FwaS9ncmFwaHFsL3F1ZXJpZXMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG4gIEl0ZW1UeXBlLFxyXG4gIFNlbGVjdGVkRmVlZFN0YXRlLFxyXG59IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgTm90aWZ5TG9hZGluZyB9IGZyb20gJy4vbm90aWZ5TG9hZGluZyc7XHJcbmltcG9ydCB7IE5vdGlmeUVycm9yIH0gZnJvbSAnLi9ub3RpZnlFcnJvcic7XHJcbmltcG9ydCB7IE9uZUxpc3RJdGVtIH0gZnJvbSAnLi9vbmVMaXN0SXRlbSc7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1MaXN0ID0gKHtcclxuICB0eXBlLFxyXG4gIHNlbGVjdGVkLFxyXG4gIHNldFNlbGVjdGVkLFxyXG4gIHVzZVNlbGVjdGVkID0gZmFsc2UsXHJcbiAgYWxsb3dFZGl0cyA9IGZhbHNlLFxyXG59OiB7XHJcbiAgdHlwZTogSXRlbVR5cGU7XHJcbiAgc2VsZWN0ZWQ/OiBTZWxlY3RlZEZlZWRTdGF0ZTtcclxuICBzZXRTZWxlY3RlZD86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj47XHJcbiAgdXNlU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gIGFsbG93RWRpdHM/OiBib29sZWFuO1xyXG59KSA9PiB7XHJcbiAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGU7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoXHJcbiAgICBpc0ZlZWQgPyBGRUVEU19RVUVSWSA6IEJVTkRMRVNfUVVFUllcclxuICApO1xyXG5cclxuICBjb25zb2xlLmxvZyhsb2FkaW5nLCBlcnJvciwgZGF0YSk7XHJcblxyXG4gIGNvbnN0IHsgZmVlZHMsIGJ1bmRsZXMgfSA9IGRhdGEgfHwge307XHJcbiAgY29uc3QgaXRlbUxpc3QgPSBpc0ZlZWQgPyBmZWVkcyA6IGJ1bmRsZXM7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdXNlU2VsZWN0ZWQgJiZcclxuICAgICAgICBpdGVtTGlzdCAmJlxyXG4gICAgICAgIGl0ZW1MaXN0Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgICBzZWxlY3RlZC5pZCA9PT0gbnVsbFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSBpdGVtTGlzdFswXTtcclxuICAgICAgICBhd2FpdCBzZXRTZWxlY3RlZCh7XHJcbiAgICAgICAgICBpZDogZmlyc3RJdGVtLmlkLFxyXG4gICAgICAgICAgZmVlZHM6IGlzRmVlZCA/IFtmaXJzdEl0ZW1dIDogZmlyc3RJdGVtWydmZWVkcyddLFxyXG4gICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICA8Tm90aWZ5TG9hZGluZyAvPjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvciB8fCAhaXRlbUxpc3QpIHtcclxuICAgIHJldHVybiA8Tm90aWZ5RXJyb3IgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgbGc6Z3JpZC1jb2xzLTMgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTQnPlxyXG4gICAgICAgIHtpdGVtTGlzdCAmJiBpdGVtTGlzdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgaXRlbUxpc3QubWFwKChpdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0KSA9PiAoXHJcbiAgICAgICAgICAgIDxPbmVMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdXNlU2VsZWN0ZWQ9e3VzZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIGFsbG93RWRpdHM9e2FsbG93RWRpdHN9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwPk5vbmUgYXJlIHByZXNlbnQuIFdoeSBub3QgYWRkIG9uZT88L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgIHsgTmF2IH0gIGZyb20gJy4vbmF2J1xyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFVzZXIgfSBmcm9tICcuLi91dGlscy91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyLCBsb2FkaW5nIH0gPSB1c2VGZXRjaFVzZXIoKTtcclxuXHJcbiAgY29uc29sZS5sb2codXNlciwgbG9hZGluZyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGdyaWQgZ3JpZC1jb2xzLTQnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktc3RhcnQnPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5saW5lLWZsZXggY3Vyc29yLXBvaW50ZXInPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdzbTpoLTEwIGgtOCBwci0xJyBzcmM9Jy9sb2dvLnBuZycgLz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3AtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCBzbTp2aXNpYmxlIGludmlzaWJsZSBmb250LW1lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICBTV0wsIExMQ1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zIGZsZXgganVzdGlmeS1lbmQnPlxyXG4gICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nc206bXItNic+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9zYXZlZC1hcnRpY2xlcyc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMCB0ZXh0LWJvbGQnPlxyXG4gICAgICAgICAgICAgICAgU2F2ZWQgQXJ0aWNsZXNcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J3NtOm1yLTYnPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nL2J1bmRsZXMnPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3AtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCB0ZXh0LWJsdWUtNzAwJz5cclxuICAgICAgICAgICAgICBCdW5kbGVzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J3NtOm1yLTYnPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nL2ZlZWRzJz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMCc+XHJcbiAgICAgICAgICAgICAgRmVlZHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3VzZXIgJiYgIWxvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzbTptci02Jz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FwaS9sb2dvdXQnPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHRleHQtYmx1ZS03MDAnPlxyXG4gICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzbTptci02Jz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FwaS9sb2dpbic+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMCc+XHJcbiAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENSRUFURV9CVU5ETEVfTVVUQVRJT04sXHJcbiAgQ1JFQVRFX0ZFRURfTVVUQVRJT04sXHJcbiAgVVBEQVRFX0JVTkRMRV9NVVRBVElPTixcclxuICBVUERBVEVfRkVFRF9NVVRBVElPTixcclxufSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEJVTkRMRV9RVUVSWSxcclxuICBGRUVEX1FVRVJZLFxyXG4gIEZJTkRfQlVORExFX1RBR1NfUVVFUlksXHJcbiAgRklORF9GRUVEU19RVUVSWSxcclxuICBGSU5EX0ZFRURfVEFHU19RVUVSWSxcclxuICBNRV9RVUVSWSxcclxufSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9xdWVyaWVzJztcclxuaW1wb3J0IHsgb3B0aW1pc3RpY0NhY2hlIH0gZnJvbSAnLi4vdXRpbHMvb3B0aW1pc3RpY0NhY2hlJztcclxuaW1wb3J0IHsgcHJlcGFyZU5ld1VwZGF0ZU9iaiB9IGZyb20gJy4uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmonO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvblR5cGUsXHJcbiAgQmFkZ2VGaWVsZE5hbWUsXHJcbiAgQnVuZGxlT2JqZWN0LFxyXG4gIEZlZWRPYmplY3QsXHJcbiAgSXRlbVR5cGUsXHJcbiAgTmV3SXRlbVN0YXRlLFxyXG4gIFNlYXJjaFF1ZXJ5TmFtZSxcclxuICBTZWxlY3RlZEZlZWRTdGF0ZSxcclxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IHVwZGF0ZUNhY2hlIH0gZnJvbSAnLi4vdXRpbHMvdXBkYXRlJztcclxuaW1wb3J0IHsgQmFkZ2VMaXN0IH0gZnJvbSAnLi9iYWRnZUxpc3QnO1xyXG5pbXBvcnQgeyBHZW5lcmF0ZUlucHV0RmllbGQgfSBmcm9tICcuL2dlbmVyYXRlSW5wdXRGaWVsZCc7XHJcbmltcG9ydCB7IFNlYXJjaEl0ZW1zIH0gZnJvbSAnLi9zZWFyY2hJdGVtcyc7XHJcbmltcG9ydCB7IEVycm9yU2lnbiwgV2FpdGluZ0Nsb2NrIH0gZnJvbSAnLi9zdmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5ld0VkaXRJdGVtID0gKHtcclxuICB0eXBlLFxyXG4gIHNlbGVjdGVkLFxyXG4gIHNldFNlbGVjdGVkLFxyXG59OiB7XHJcbiAgdHlwZTogSXRlbVR5cGU7XHJcbiAgc2VsZWN0ZWQ6IFNlbGVjdGVkRmVlZFN0YXRlO1xyXG4gIHNldFNlbGVjdGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTZWxlY3RlZEZlZWRTdGF0ZT4+O1xyXG59KSA9PiB7XHJcbiAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGU7XHJcbiAgY29uc3QgaW5pdGlhbEZlZWQ6IEZlZWRPYmplY3QgPSB7IG5hbWU6ICcnLCB1cmw6ICcnLCB0YWdzOiBbXSB9O1xyXG4gIGNvbnN0IGluaXRpYWxCdW5kbGU6IEJ1bmRsZU9iamVjdCA9IHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBmZWVkczogW10sXHJcbiAgfTtcclxuICBjb25zdCBpbml0aWFsU3RhdGU6IE5ld0l0ZW1TdGF0ZSA9IGlzRmVlZCA/IGluaXRpYWxGZWVkIDogaW5pdGlhbEJ1bmRsZTtcclxuICBjb25zdCBbY3VycmVudEl0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGU8TmV3SXRlbVN0YXRlPihpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IGlucHV0RmllbGRzID0gaXNGZWVkID8gWyduYW1lJywgJ3VybCddIDogWyduYW1lJywgJ2Rlc2NyaXB0aW9uJ107XHJcblxyXG4gIGNvbnN0IFtjcmVhdGVJdGVtTXV0YXRpb24sIHsgbG9hZGluZzogY3JlYXRlTG9hZGluZywgZXJyb3I6IGNyZWF0ZUVycm9yIH1dID1cclxuICAgIHVzZU11dGF0aW9uKGlzRmVlZCA/IENSRUFURV9GRUVEX01VVEFUSU9OIDogQ1JFQVRFX0JVTkRMRV9NVVRBVElPTik7XHJcblxyXG4gIGNvbnN0IFt1cGRhdGVJdGVtTXV0YXRpb24sIHsgbG9hZGluZzogdXBkYXRlTG9hZGluZywgZXJyb3I6IHVwZGF0ZUVycm9yIH1dID1cclxuICAgIHVzZU11dGF0aW9uKGlzRmVlZCA/IFVQREFURV9GRUVEX01VVEFUSU9OIDogVVBEQVRFX0JVTkRMRV9NVVRBVElPTik7XHJcblxyXG4gIGNvbnN0IHZhcmlhYmxlcyA9IHsgZGF0YTogeyBpZDogc2VsZWN0ZWQuaWQgPyBzZWxlY3RlZC5pZCA6ICcnIH0gfTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgbG9hZGluZzogaXRlbVF1ZXJ5TG9hZGluZyxcclxuICAgIGVycm9yOiBpdGVtUXVlcnlFcnJvcixcclxuICAgIGRhdGE6IGl0ZW1RdWVyeURhdGEsXHJcbiAgfSA9IHVzZVF1ZXJ5KGlzRmVlZCA/IEZFRURfUVVFUlkgOiBCVU5ETEVfUVVFUlksIHsgdmFyaWFibGVzIH0pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBtZURhdGEsXHJcbiAgICBsb2FkaW5nOiBtZUxvYWRpbmcsXHJcbiAgICBlcnJvcjogbWVFcnJvcixcclxuICB9ID0gdXNlUXVlcnkoTUVfUVVFUlkpO1xyXG5cclxuICBjb25zdCB7IGJ1bmRsZSwgZmVlZCB9ID0gaXRlbVF1ZXJ5RGF0YSB8fCB7fTtcclxuICBjb25zdCBpdGVtID0gaXNGZWVkID8gZmVlZCA6IGJ1bmRsZTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtICYmIHNlbGVjdGVkLmVkaXRNb2RlKSB7XHJcbiAgICAgICAgY29uc3QgeyBfX3R5cGVuYW1lLCBsaWtlcywgYXV0aG9yLCAuLi5jbGVhbmVkSXRlbSB9ID0gaXRlbTtcclxuICAgICAgICBzZXRJdGVtKHsgLi4uY2xlYW5lZEl0ZW0gfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXRlbShpbml0aWFsU3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG4gIH0sIFtpdGVtUXVlcnlEYXRhXSk7XHJcblxyXG4gIGlmIChjcmVhdGVMb2FkaW5nIHx8IHVwZGF0ZUxvYWRpbmcgfHwgaXRlbVF1ZXJ5TG9hZGluZyB8fCBtZUxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8V2FpdGluZ0Nsb2NrIGNsYXNzTmFtZT0nbXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvJyAvPjtcclxuICB9XHJcbiAgaWYgKGNyZWF0ZUVycm9yIHx8IHVwZGF0ZUVycm9yIHx8IGl0ZW1RdWVyeUVycm9yIHx8IG1lRXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3JTaWduIGNsYXNzTmFtZT0nbXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvJyAvPjtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGl0ZW1RdWVyeURhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBwcmVwYXJlTmV3VXBkYXRlT2JqKFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICBjdXJyZW50SXRlbSxcclxuICAgICAgICAgICAgaXNGZWVkLFxyXG4gICAgICAgICAgICBzZWxlY3RlZC5lZGl0TW9kZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZWRpdE1vZGVcclxuICAgICAgICAgICAgPyB1cGRhdGVJdGVtTXV0YXRpb24oe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGEgfSxcclxuICAgICAgICAgICAgICAgIG9wdGltaXN0aWNSZXNwb25zZTogb3B0aW1pc3RpY0NhY2hlKFxyXG4gICAgICAgICAgICAgICAgICBpc0ZlZWQsXHJcbiAgICAgICAgICAgICAgICAgICd1cGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbSxcclxuICAgICAgICAgICAgICAgICAgbWVEYXRhXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogY3JlYXRlSXRlbU11dGF0aW9uKHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBkYXRhIH0sXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZUNhY2hlKGlzRmVlZCwgJ2NyZWF0ZScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiBvcHRpbWlzdGljQ2FjaGUoXHJcbiAgICAgICAgICAgICAgICAgIGlzRmVlZCxcclxuICAgICAgICAgICAgICAgICAgJ2NyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLFxyXG4gICAgICAgICAgICAgICAgICBtZURhdGFcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhd2FpdCBzZXRJdGVtKGluaXRpYWxTdGF0ZSk7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xMiBnYXAtNCByb3VuZGVkLW1kIGJvcmRlci00IG15LTQgcHktMiBweC00Jz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2NvbC1zcGFuLTEyIHRleHQtbGcgZm9udC1tZWRpdW0gcHktMic+XHJcbiAgICAgICAgICAgIHtpc0ZlZWQgPyAnTmV3IEZlZWQnIDogJ05ldyBCdW5kbGUnfVxyXG4gICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNic+XHJcbiAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgICA8R2VuZXJhdGVJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake3R5cGV9LSR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZUhhbmRsZXI9e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2JsYWNrIHB5LTInPlRhZ3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLkNSRUFURX1cclxuICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgaXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPkFkZCBOZXcgVGFnOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSXRlbXNcclxuICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZlZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gU2VhcmNoUXVlcnlOYW1lLmZpbmRGZWVkVGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiBTZWFyY2hRdWVyeU5hbWUuZmluZEJ1bmRsZVRhZ3NcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBxdWVyeT17aXNGZWVkID8gRklORF9GRUVEX1RBR1NfUVVFUlkgOiBGSU5EX0JVTkRMRV9UQUdTX1FVRVJZfVxyXG4gICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2lzRmVlZCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxhY2sgcHktMic+RmVlZHM6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5DUkVBVEV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibGFjayBweS0yJz5BZGQgTmV3IEZlZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZT17U2VhcmNoUXVlcnlOYW1lLmZpbmRGZWVkc31cclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtGSU5EX0ZFRURTX1FVRVJZfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BweS00ICR7aXNGZWVkID8gbnVsbCA6ICdwdC0xJ31gfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktNCAke2BiZy0ke1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgfS00MDAgYH0gaG92ZXI6YmctJHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgIH0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB4LTEyIHJvdW5kZWRgfVxyXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBFcnJvclNpZ24gfSBmcm9tIFwiLi9zdmdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmeUVycm9yID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgPEVycm9yU2lnbiBjbGFzc05hbWU9XCJoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBXYWl0aW5nQ2xvY2sgfSBmcm9tIFwiLi9zdmdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmeUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleFwiPlxyXG4gICAgICAgICA8V2FpdGluZ0Nsb2NrIGNsYXNzTmFtZT1cImgtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0b1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1bmRsZVRhZywgRmVlZFRhZyB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEJhZGdlRmllbGROYW1lLFxyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG59IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgTWludXMsIFBsdXMgfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5leHBvcnQgY29uc3QgT25lQmFkZ2UgPSAoe1xyXG4gIGl0ZW0sXHJcbiAgYWN0aW9uLFxyXG4gIGN1cnJlbnRJdGVtLFxyXG4gIGZpZWxkTmFtZSxcclxuICBzZXRJdGVtLFxyXG59OiB7XHJcbiAgaXRlbTogRmVlZFRhZyB8IEJ1bmRsZVRhZyB8IEZlZWRPYmplY3Q7XHJcbiAgYWN0aW9uOiBBY3Rpb25UeXBlO1xyXG4gIGN1cnJlbnRJdGVtPzogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDtcclxuICBmaWVsZE5hbWU6IEJhZGdlRmllbGROYW1lO1xyXG4gIHNldEl0ZW0/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj47XHJcbn0pID0+IHtcclxuICBjb25zdCBjb2xvciA9XHJcbiAgICBmaWVsZE5hbWUgPT09IEJhZGdlRmllbGROYW1lLnRhZ3NcclxuICAgICAgPyAnYmx1ZSdcclxuICAgICAgOiBCYWRnZUZpZWxkTmFtZS5mZWVkc1xyXG4gICAgICA/ICdncmVlbidcclxuICAgICAgOiAncHVycGxlJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIHB5LTIgcHgtMiByb3VuZGVkLWxnIGJnLSR7Y29sb3J9LTIwMCBgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2FjdGlvbiA9PT0gQWN0aW9uVHlwZS5BREQgPyAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRJdGVtKChjdXJyU3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogWy4uLmN1cnJTdGF0ZVtmaWVsZE5hbWVdLCB7IC4uLml0ZW0gfV0sXHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGx1cyBjbGFzc05hbWU9J2gtNCB3LTQgdGV4dC1ncmF5LTUwMCcgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHthY3Rpb24gPT09IEFjdGlvblR5cGUuQ1JFQVRFID8gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SXRlbSgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgW2ZpZWxkTmFtZV06IGN1cnJTdGF0ZVtmaWVsZE5hbWVdLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgKG8pID0+IGl0ZW0ubmFtZSAhPT0gby5uYW1lXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1pbnVzIGNsYXNzTmFtZT0naC00IHctNCB0ZXh0LWdyYXktNTAwJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC14cyB0ZXh0LSR7Y29sb3J9LTYwMCB0ZXh0LWNlbnRlcmB9PiB7aXRlbS5uYW1lfSA8L3A+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEJhZGdlRmllbGROYW1lLFxyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG4gIEl0ZW1UeXBlLFxyXG4gIFNlbGVjdGVkRmVlZFN0YXRlLFxyXG59IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tICcuL2JhZGdlTGlzdCc7XHJcbmltcG9ydCB7IEl0ZW1FZGl0IH0gZnJvbSAnLi9pdGVtRWRpdCc7XHJcbmltcG9ydCB7IFByb2ZpbGVQaWMgfSBmcm9tICcuL3Byb2ZpbGVQaWMnO1xyXG5pbXBvcnQgeyBEb3VibGVBcnJvd0Rvd24sIERvdWJsZUFycm93UmlnaHQsIFdhaXRpbmdDbG9jayB9IGZyb20gJy4vc3ZnJztcclxuZXhwb3J0IGNvbnN0IE9uZUxpc3RJdGVtID0gKHtcclxuICBpdGVtLFxyXG4gIHR5cGUsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgc2V0U2VsZWN0ZWQsXHJcbiAgdXNlU2VsZWN0ZWQgPSBmYWxzZSxcclxuICBhbGxvd0VkaXRzID0gZmFsc2UsXHJcbn06IHtcclxuICBpdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG4gIHR5cGU6IEl0ZW1UeXBlO1xyXG4gIHNlbGVjdGVkPzogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgc2V0U2VsZWN0ZWQ/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTZWxlY3RlZEZlZWRTdGF0ZT4+O1xyXG4gIHVzZVNlbGVjdGVkPzogYm9vbGVhbjtcclxuICBhbGxvd0VkaXRzPzogYm9vbGVhbjtcclxufSkgPT4ge1xyXG4gIGNvbnN0IGlzRmVlZCA9IHR5cGUgPT09IEl0ZW1UeXBlLkZlZWRUeXBlO1xyXG4gIGNvbnN0IGlzU2VsZWN0ZWQgPSB1c2VTZWxlY3RlZCAmJiBzZWxlY3RlZCAmJiBzZWxlY3RlZC5pZCA9PT0gaXRlbS5pZDtcclxuXHJcbiAgY29uc3QgeyB1c2VyLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VVc2VyKCk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8V2FpdGluZ0Nsb2NrIGNsYXNzTmFtZT0naC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvJyAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhbk1hbmlwdWxhdGUgPVxyXG4gICAgIWlzTG9hZGluZyAmJlxyXG4gICAgdXNlciAmJlxyXG4gICAgXy5nZXQoaXRlbSwgJ2F1dGhvci5hdXRobzAnKSA9PT0gdXNlci5zdWIgJiZcclxuICAgIGFsbG93RWRpdHMgJiZcclxuICAgIHVzZVNlbGVjdGVkO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC8ke2lzRmVlZCA/ICdmZWVkJyA6ICdidW5kbGUnfS8ke2l0ZW0uaWR9YH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIgZ3JpZCBncmlkLWNvbHMtNiBwLTQgcm91bmRlZC1sZ1xyXG4gICAgICAgICAgICAgICAgICAgICR7dXNlU2VsZWN0ZWQgPyAncm91bmRlZC1iLW5vbmUnIDogJ2JvcmRlci1iLTQnfSBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdC00IGJvcmRlci1sLTQgYm9yZGVyLXItNFxyXG4gICAgICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGJvcmRlci0ke2lzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ30tNDAwYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItZ3JheS0zMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNCc+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e2l0ZW0ubmFtZX08L2g0PlxyXG4gICAgICAgICAgICB7IWlzRmVlZCA/IDxwPntpdGVtWydkZXNjcmlwdGlvbiddfTwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMiBmbGV4IGp1c3RpZnktZW5kJz5cclxuICAgICAgICAgICAge2Nhbk1hbmlwdWxhdGUgPyAoXHJcbiAgICAgICAgICAgICAgPEl0ZW1FZGl0XHJcbiAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggc3Bhbi1jb2wtNiBweS0wIHNwYWNlLXgtMic+XHJcbiAgICAgICAgICAgIHtpdGVtLmF1dGhvciA/IDxQcm9maWxlUGljIGF1dGhvcj17aXRlbS5hdXRob3J9IC8+IDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTYgcHktMic+XHJcbiAgICAgICAgICAgIDxoMz5UYWdzPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWRzIGdyaWRzLWNvbHMtMiBnYXAtMic+XHJcbiAgICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLk5PTkV9XHJcbiAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNiBweS0yJz5cclxuICAgICAgICAgICAgPGgzPntpc0ZlZWQgPyAnQnVuZGxlcycgOiAnRmVlZHMnfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC0yJz5cclxuICAgICAgICAgICAgICB7LyogPHA+Y2hpbGQgaXRlbXM8L3A+ICovfVxyXG4gICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIGlzRmVlZCA/IEJhZGdlRmllbGROYW1lLmJ1bmRsZXMgOiBCYWRnZUZpZWxkTmFtZS5mZWVkc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLk5PTkV9XHJcbiAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3VzZVNlbGVjdGVkID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge2lzU2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHJvdW5kZWQtbGcgcm91bmRlZC10LW5vbmUgYWxpZ24tbWlkZGxlICR7XHJcbiAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICA/IGBiZy0ke2lzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ30tNDAwYFxyXG4gICAgICAgICAgICAgICAgICAgIDogYGJnLWdyYXktMzAwYFxyXG4gICAgICAgICAgICAgICAgfSBwLTQgei0xMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RG91YmxlQXJyb3dEb3duIGNsYXNzTmFtZT0naC01IHctNSB0ZXh0LXdoaXRlLTUwMCBtci0yIG10LTEnIC8+XHJcbiAgICAgICAgICAgICAgICB7YEhpZGUgJHtpc0ZlZWQgPyAnRmVlZCcgOiAnQnVuZGxlJ30gQXJ0aWNsZXNgfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVlZHM6IGlzRmVlZCA/IFtpdGVtXSA6IGl0ZW1bJ2ZlZWRzJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld01vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHJvdW5kZWQtbGcgcm91bmRlZC10LW5vbmUgYWxpZ24tbWlkZGxlICR7XHJcbiAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICA/IGBiZy0ke2lzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ30tNDAwYFxyXG4gICAgICAgICAgICAgICAgICAgIDogYGJnLWdyYXktMzAwYFxyXG4gICAgICAgICAgICAgICAgfSBwLTQgei0xMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RG91YmxlQXJyb3dSaWdodCBjbGFzc05hbWU9J2gtNSB3LTUgdGV4dC13aGl0ZS01MDAgbXItMiBtdC0xJz48L0RvdWJsZUFycm93UmlnaHQ+XHJcbiAgICAgICAgICAgICAgICB7YCBTaG93ICR7aXNGZWVkID8gYEZlZWRgIDogYEJ1bmRsZWB9IEFydGljbGVzYH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQaWMgPSAoeyBhdXRob3IgfSA6IHsgYXV0aG9yOiBVc2VyIH0pID0+IChcclxuICAgIDw+XHJcbiAgICAgICAge2F1dGhvci5waWN0dXJlID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcC0wLjUgdy04IGgtOCBib3JkZXItMiBib3JkZXItZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXthdXRob3IucGljdHVyZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFF1ZXN0aW9uIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1ncmF5LTUwMFwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8cD57YXV0aG9yLm5pY2tuYW1lfTwvcD5cclxuICAgIDwvPlxyXG4pIiwiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEJhZGdlRmllbGROYW1lLFxyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG4gIFNlYXJjaFF1ZXJ5TmFtZSxcclxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gJy4vYmFkZ2VMaXN0JztcclxuLy8gaW1wb3J0IHsgU2VhcmNoLCBTcGluIH0gZnJvbSAnLi9zdmcnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSXRlbXMgPSAoe1xyXG4gIGN1cnJlbnRJdGVtLFxyXG4gIHNldEl0ZW0sXHJcbiAgcXVlcnlOYW1lLFxyXG4gIHF1ZXJ5LFxyXG4gIGZpZWxkTmFtZSxcclxufToge1xyXG4gIGN1cnJlbnRJdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG4gIHNldEl0ZW06IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxuICBxdWVyeU5hbWU6IFNlYXJjaFF1ZXJ5TmFtZTtcclxuICBxdWVyeTogRG9jdW1lbnROb2RlO1xyXG4gIGZpZWxkTmFtZTogQmFkZ2VGaWVsZE5hbWU7XHJcbn0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaW5kSXRlbVF1ZXJ5LCB7IGxvYWRpbmcsIGRhdGEsIGNhbGxlZCB9XSA9IHVzZUxhenlRdWVyeShxdWVyeSwge1xyXG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGxvYWRpbmcsIGRhdGEsIGNhbGxlZCk7XHJcblxyXG4gIGNvbnN0IGZldGNoZWRJdGVtcyA9IF8uZ2V0KGRhdGEsIHF1ZXJ5TmFtZSk7XHJcbiAgY29uc3QgZmlsdEZpbmRJdGVtcyA9IGZldGNoZWRJdGVtc1xyXG4gICAgPyBmZXRjaGVkSXRlbXMuZmlsdGVyKFxyXG4gICAgICAgIChvbmVJdGVtKSA9PlxyXG4gICAgICAgICAgIWN1cnJlbnRJdGVtW2ZpZWxkTmFtZV0ubWFwKChvKSA9PiBvLm5hbWUpLmluY2x1ZGVzKG9uZUl0ZW0ubmFtZSlcclxuICAgICAgKVxyXG4gICAgOiBbXTtcclxuXHJcbiAgY29uc3QgbWF0Y2hDdXJyZW50ID0gZmlsdEZpbmRJdGVtcy5maWx0ZXIoKG8pID0+IG8ubmFtZSA9PT0gc2VhcmNoKTtcclxuICBjb25zdCBtYXRjaExpc3QgPSBjdXJyZW50SXRlbVtmaWVsZE5hbWVdLmZpbHRlcigobykgPT4gby5uYW1lID09PSBzZWFyY2gpO1xyXG4gIGNvbnN0IGZpbHRGaW5kSXRlbXNXaXRoQWRkID1cclxuICAgIG1hdGNoQ3VycmVudC5sZW5ndGggPT09IDAgJiZcclxuICAgIG1hdGNoTGlzdC5sZW5ndGggPT09IDAgJiZcclxuICAgIHF1ZXJ5TmFtZSAhPT0gJ2ZpbmRGZWVkcydcclxuICAgICAgPyBbLi4uZmlsdEZpbmRJdGVtcywgeyBuYW1lOiBzZWFyY2ggfV1cclxuICAgICAgOiBmaWx0RmluZEl0ZW1zO1xyXG5cclxuICBjb25zb2xlLmxvZyhmZXRjaGVkSXRlbXMpO1xyXG4gIGNvbnNvbGUubG9nKGZpbHRGaW5kSXRlbXMpO1xyXG5cclxuICBjb25zdCBkdW1teU5ld0l0ZW0gPSB7XHJcbiAgICAuLi5jdXJyZW50SXRlbSxcclxuICAgIFtmaWVsZE5hbWVdOiBmaWx0RmluZEl0ZW1zV2l0aEFkZCxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2gtNiB3LTYgdGV4dC1ncmF5LTUwMCBhbmltYXRlLXNwaW4nXHJcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgZD0nTTQgNHY1aC41ODJtMTUuMzU2IDJBOC4wMDEgOC4wMDEgMCAwMDQuNTgyIDltMCAwSDltMTEgMTF2LTVoLS41ODFtMCAwYTguMDAzIDguMDAzIDAgMDEtMTUuMzU3LTJtMTUuMzU3IDJIMTUnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J210LTMgbXItMiB3LTYgaC02IHRleHQtZ3JheS01MDAnXHJcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgZD0nTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAweidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci00IHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMydcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRJdGVtKChjdXJyU3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogW1xyXG4gICAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGVbZmllbGROYW1lXSxcclxuICAgICAgICAgICAgICAgICAgeyAuLi5kdW1teU5ld0l0ZW1bZmllbGROYW1lXVswXSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoKCgpID0+ICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBzZWFyY2gpIHtcclxuICAgICAgICAgICAgICBzZXRTZWFyY2goKCkgPT4gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGZpbmRJdGVtUXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGE6IHsgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSB9IH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBmbGV4IG0tMic+XHJcbiAgICAgICAgICB7c2VhcmNoICE9PSAnJyA/IChcclxuICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgIGZpZWxkTmFtZT17ZmllbGROYW1lfVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5BRER9XHJcbiAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICBpdGVtPXtkdW1teU5ld0l0ZW19XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogY2FsbGVkID8gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPk5vIG1hdGNoZXM8L3A+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC0yIGZsZXggbS0yJz5cclxuICAgICAgICB7c2VhcmNoICE9PSAnJyA/IChcclxuICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgZmllbGROYW1lPXtmaWVsZE5hbWV9XHJcbiAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5BRER9XHJcbiAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgIGl0ZW09e2R1bW15TmV3SXRlbX1cclxuICAgICAgICAgICAgc2V0U2VhcmNoPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiBjYWxsZWQgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPk5vIE1hdGNoZXM8L3A+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IFdhaXRpbmdDbG9jayA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgZmlsbD0nbm9uZSdcclxuICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgIGQ9J00xMiA4djRsMyAzbTYtM2E5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHonXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yU2lnbiA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgZmlsbD0nbm9uZSdcclxuICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgIGQ9J00xMiA5djJtMCA0aC4wMW0tNi45MzggNGgxMy44NTZjMS41NCAwIDIuNTAyLTEuNjY3IDEuNzMyLTNMMTMuNzMyIDRjLS43Ny0xLjMzMy0yLjY5NC0xLjMzMy0zLjQ2NCAwTDMuMzQgMTZjLS43NyAxLjMzMy4xOTIgMyAxLjczMiAzeidcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgRG91YmxlQXJyb3dEb3duID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICBmaWxsPSdub25lJ1xyXG4gICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8cGF0aFxyXG4gICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgZD0nTTE5IDEzbC03IDctNy03bTE0LThsLTcgNy03LTcnXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERvdWJsZUFycm93UmlnaHQgPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgIGZpbGw9J25vbmUnXHJcbiAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBkPSdNMTMgNWw3IDctNyA3TTUgNWw3IDctNyA3J1xyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuZXhwb3J0IGNvbnN0IFBsdXMgPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgZmlsbD0nbm9uZSdcclxuICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBkPSdNMTIgNHYxNm04LThINCdcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcbmV4cG9ydCBjb25zdCBNaW51cyA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICBmaWxsPSdub25lJ1xyXG4gICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgIGQ9J00yMCAxMkg0J1xyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBRdWVzdGlvbiA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICBmaWxsPSdub25lJ1xyXG4gICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgIGQ9J004LjIyOCA5Yy41NDktMS4xNjUgMi4wMy0yIDMuNzcyLTIgMi4yMSAwIDQgMS4zNDMgNCAzIDAgMS40LTEuMjc4IDIuNTc1LTMuMDA2IDIuOTA3LS41NDIuMTA0LS45OTQuNTQtLjk5NCAxLjA5M20wIDNoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweidcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgU3BpbiA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgZmlsbD0nbm9uZSdcclxuICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgIGQ9J000IDR2NWguNTgybTE1LjM1NiAyQTguMDAxIDguMDAxIDAgMDA0LjU4MiA5bTAgMEg5bTExIDExdi01aC0uNTgxbTAgMGE4LjAwMyA4LjAwMyAwIDAxLTE1LjM1Ny0ybTE1LjM1NyAySDE1J1xyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2ggPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgIGZpbGw9J25vbmUnXHJcbiAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBkPSdNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6J1xyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0UGVuY2lsID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICBmaWxsPSdub25lJ1xyXG4gICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8cGF0aFxyXG4gICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgZD0nTTE1LjIzMiA1LjIzMmwzLjUzNiAzLjUzNm0tMi4wMzYtNS4wMzZhMi41IDIuNSAwIDExMy41MzYgMy41MzZMNi41IDIxLjAzNkgzdi0zLjU3MkwxNi43MzIgMy43MzJ6J1xyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLmFzUGF0aCkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbik6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgICAudGhlbigoeyBzY3JpcHRzLCBjc3MgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgICAgXSBhcyBjb25zdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KSA9PiAoe1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBlbnRyeXBvaW50LCBzdHlsZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgICAgPih7IHN0eWxlczogc3R5bGVzISB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiZcbiAgICAgIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXJcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHxcbiAgICAgICAgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcilcbiAgICAgID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgK1xuICAgICAgICAgIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgbGV0IGJhc2U6IFVSTFxuXG4gIHRyeSB7XG4gICAgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJylcbiAgfVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKFdyYXBBcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmXG4gICAgICAgICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJlxuICAgICAgICAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUylcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgKG9wdGlvbnMgYXMgYW55KS5faFxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IFByZXZpZXdEYXRhIH0gZnJvbSAnbmV4dC90eXBlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IChzdHJpbmcgfCBudW1iZXIpW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBsb2NhbGVcbiAgICovXG4gIGxvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogQWxsIGNvbmZpZ3VyZWQgbG9jYWxlc1xuICAgKi9cbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIC8qKlxuICAgKiBUaGUgY29uZmlndXJlZCBkZWZhdWx0IGxvY2FsZVxuICAgKi9cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgYWZ0ZXJJbnRlcmFjdGl2ZT86IHN0cmluZ1tdOyBiZWZvcmVJbnRlcmFjdGl2ZT86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nPzogYm9vbGVhblxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEl0ZW1MaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9pdGVtTGlzdCc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHsgSXRlbVR5cGUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XHJcbmltcG9ydCB7IE1pbnVzLCBQbHVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdmcnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFVzZXIgfSBmcm9tICcuLi91dGlscy91c2VyJztcclxuaW1wb3J0IHsgTmV3RWRpdEl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL25ld0VkaXRJdGVtJztcclxuXHJcbmNvbnN0IEJ1bmRsZXNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlRmV0Y2hVc2VyKCk7XHJcbiAgY29uc3QgaW5pdGlhbFNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZSA9IHtcclxuICAgIGlkOiBudWxsLFxyXG4gICAgZmVlZHM6IFtdLFxyXG4gICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShpbml0aWFsU2VsZWN0ZWQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTInPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9J2dyaWQtY29scy0xIGp1c3RpZnktc3RhcnQgZmxleCB0ZXh0LWxyIGZvbnQtbWVkaXVtIHB5LTQnPlxyXG4gICAgICAgICAgQnVuZGxlcyBQYWdlXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbmV3TW9kZTogIWN1cnJTdGF0ZS5uZXdNb2RlLFxyXG4gICAgICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGdyaWQtY29scy0xIGp1c3RpZnktZW5kIGN1cnNvci1wb2ludGVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWQubmV3TW9kZSA/IChcclxuICAgICAgICAgICAgICA8TWludXNcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNiB3LTYgdGV4dC0ke1xyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZC5uZXdNb2RlID8gJ2dyYXknIDogJ2JsdWUnXHJcbiAgICAgICAgICAgICAgICB9LTUwMCBtdC00YH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxQbHVzXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTYgdy02IHRleHQtJHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/ICdncmF5JyA6ICdibHVlJ1xyXG4gICAgICAgICAgICAgICAgfS01MDAgbXQtNGB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZC1jb2xzLTEganVzdGlmeS1zdGFydCBmbGV4ICAgICAgICAgICAgICB0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTQgdGV4dC0ke1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/IGBncmF5YCA6IGBibHVlYFxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTmV3IEJ1bmRsZVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgeyhzZWxlY3RlZC5lZGl0TW9kZSB8fCBzZWxlY3RlZC5uZXdNb2RlKSAmJiB1c2VyID8gKFxyXG4gICAgICAgIDxOZXdFZGl0SXRlbVxyXG4gICAgICAgICAgdHlwZT17SXRlbVR5cGUuQnVuZGxlVHlwZX1cclxuICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgIDxJdGVtTGlzdFxyXG4gICAgICAgIHR5cGU9e0l0ZW1UeXBlLkJ1bmRsZVR5cGV9XHJcbiAgICAgICAgdXNlU2VsZWN0ZWQ9e3RydWV9XHJcbiAgICAgICAgYWxsb3dFZGl0cz17dHJ1ZX1cclxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxyXG4gICAgICAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bmRsZXNQYWdlO1xyXG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmV4cG9ydCBjb25zdCBGRUVEX1RBR19GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgRmVlZFRhZ0ZyYWdtZW50IG9uIEZlZWRUYWcge1xuICAgIGlkXG4gICAgbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQlVORExFX1RBR19GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgQnVuZGxlVGFnRnJhZ21lbnQgb24gQnVuZGxlVGFnIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFVVEhPUl9GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgQXV0aG9yRnJhZ21lbnQgb24gVXNlciB7XG4gICAgaWRcbiAgICBhdXRoMFxuICAgIHBpY3R1cmVcbiAgICBuaWNrbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTElLRV9GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgTGlrZUZyYWdtZW50IG9uIExpa2Uge1xuICAgIGlkXG4gICAgbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRkVFRF9GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgRmVlZEZyYWdtZW50IG9uIEZlZWQge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIHVybFxuICAgIGxpa2VzIHtcbiAgICAgIC4uLkF1dGhvckZyYWdtZW50XG4gICAgfVxuICAgIHRhZ3Mge1xuICAgICAgLi4uRmVlZFRhZ0ZyYWdtZW50XG4gICAgfVxuICAgIGF1dGhvciB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0ZFRURfVEFHX0ZSQUdNRU5UfVxuICAke0FVVEhPUl9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCVU5ETEVfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEJ1bmRsZUZyYWdtZW50IG9uIEJ1bmRsZSB7XG4gICAgaWRcbiAgICBuYW1lXG4gICAgZGVzY3JpcHRpb25cbiAgICB0YWdzIHtcbiAgICAgIC4uLkJ1bmRsZVRhZ0ZyYWdtZW50XG4gICAgfVxuICAgIGF1dGhvciB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgICBsaWtlcyB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9UQUdfRlJBR01FTlR9XG4gICR7QVVUSE9SX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNBVkVEX0FSVElDTEVfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IFNhdmVkQXJ0aWNsZUZyYWdtZW50IG9uIFNhdmVkQXJ0aWNsZSB7XG4gICAgaWRcbiAgICBjb250ZW50c1xuICAgIHVybFxuICAgIGF1dGhvciB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgICBmZWVkIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0FVVEhPUl9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IEJVTkRMRV9GUkFHTUVOVCwgRkVFRF9GUkFHTUVOVCwgU0FWRURfQVJUSUNMRV9GUkFHTUVOVCB9IGZyb20gJy4vZnJhZ21lbnRzJztcblxuZXhwb3J0IGNvbnN0IExJS0VfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBsaWtlQnVuZGxlTXV0YXRpb24oJGRhdGE6IExpa2VCdW5kbGVJbnB1dCkge1xuICAgIGxpa2VCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IExJS0VfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gbGlrZUZlZWRNdXRhdGlvbigkZGF0YTogTGlrZUZlZWRJbnB1dCkge1xuICAgIGxpa2VGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBCdW5kbGVDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIGJ1bmRsZXMge1xuICAgICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5leHBvcnQgY29uc3QgVVBEQVRFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gdXBkYXRlQnVuZGxlTXV0YXRpb24oJGRhdGE6IEJ1bmRsZVVwZGF0ZUlucHV0KSB7XG4gICAgdXBkYXRlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgYnVuZGxlcyB7XG4gICAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIGZlZWRzIHtcbiAgICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRVcGRhdGVJbnB1dCkge1xuICAgIHVwZGF0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIGZlZWRzIHtcbiAgICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVTYXZlZEFydGljbGVNdXRhdGlvbigkZGF0YTogU2F2ZWRBcnRpY2xlQ3JlYXRlSW5wdXQpIHtcbiAgICBjcmVhdGVTYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVCdW5kbGVNdXRhdGlvbigkZGF0YTogQnVuZGxlSW5wdXQpIHtcbiAgICBkZWxldGVCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZElucHV0KSB7XG4gICAgZGVsZXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgaWRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlU2F2ZWRBcnRpY2xlTXV0YXRpb24oJGRhdGE6IERlbGV0ZVNhdmVkQXJ0aWNsZUlucHV0KSB7XG4gICAgZGVsZXRlU2F2ZWRBcnRpY2xlKGRhdGE6ICRkYXRhKSB7XG4gICAgICBpZFxuICAgICAgdXJsXG4gICAgfVxuICB9XG5gO1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHtcbiAgQVVUSE9SX0ZSQUdNRU5ULFxuICBCVU5ETEVfRlJBR01FTlQsXG4gIEJVTkRMRV9UQUdfRlJBR01FTlQsXG4gIEZFRURfRlJBR01FTlQsXG4gIEZFRURfVEFHX0ZSQUdNRU5ULFxuICBTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5ULFxufSBmcm9tICcuL2ZyYWdtZW50cyc7XG5cblxuZXhwb3J0IGNvbnN0IEJVTkRMRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBidW5kbGVzIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZFRURTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgZmVlZHMge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0ZFRURTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBmaW5kRmVlZHNRdWVyeSgkZGF0YTogRmluZEZlZWRzSW5wdXQpIHtcbiAgICBmaW5kRmVlZHMoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgRkVFRF9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmVlZFF1ZXJ5KCRkYXRhOiBGZWVkSW5wdXQpIHtcbiAgICBmZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICBmZWVkcyB7XG4gICAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCVU5ETEVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGJ1bmRsZVF1ZXJ5KCRkYXRhOiBCdW5kbGVJbnB1dCkge1xuICAgIGJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIGJ1bmRsZXMge1xuICAgICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0ZFRURfVEFHU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmluZEZlZWRUYWdzUXVlcnkoJGRhdGE6IEZpbmRGZWVkVGFnc0lucHV0KSB7XG4gICAgZmluZEZlZWRUYWdzKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkVGFnRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtGRUVEX1RBR19GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0JVTkRMRV9UQUdTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBmaW5kQnVuZGxlVGFnc1F1ZXJ5KCRkYXRhOiBGaW5kQnVuZGxlVGFnc0lucHV0KSB7XG4gICAgZmluZEJ1bmRsZVRhZ3MoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZVRhZ0ZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7QlVORExFX1RBR19GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTQVZFRF9BUlRJQ0xFU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgc2F2ZWRBcnRpY2xlc1F1ZXJ5IHtcbiAgICBzYXZlZEFydGljbGVzIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTQVZFRF9BUlRJQ0xFX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBzYXZlZEFydGljbGVRdWVyeSgkZGF0YTogU2F2ZWRBcnRpY2xlSW5wdXQpIHtcbiAgICBzYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgbWVRdWVyeSB7XG4gICAgbWUge1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtBVVRIT1JfRlJBR01FTlR9XG5gO1xuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgbWUgZnJvbSAnLi4vcGFnZXMvYXBpL21lJztcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgb3B0aW1pc3RpY0NhY2hlID0gKCBpc0ZlZWQsIGFjdGlvbiwgZGF0YSwgY3VycmVudEl0ZW0sIG1lRGF0YSApID0+IHtcclxuICAgIGNvbnN0IF9fdHlwZW5hbWUgPSAgaXNGZWVkID8gJ0ZlZWQnOiAnQnVuZGxlJztcclxuICAgIGNvbnN0IGlkID0ge2RhdGF9O1xyXG4gICAgY29uc3QgeyBtZSB9ID0gbWVEYXRhO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0ge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIC4uLmN1cnJlbnRJdGVtLFxyXG4gICAgICAgIFtpc0ZlZWQgPyAnYnVuZGxlcycgOiAnZmVlZHMnXSA6IFtdLFxyXG4gICAgICAgIHRhZ3M6IFtcclxuICAgICAgICAgICAgLi4uY3VycmVudEl0ZW0udGFncy5maWx0ZXIoKHRhZykgPT4gXy5oYXModGFnLCAnaWQnKSksXHJcbiAgICAgICAgICAgIC4uLl8uZ2V0KGRhdGEsICd0YWdzLmNyZWF0ZScsIFtdLm1hcCgodGFnKSA9PiAoe1xyXG5cclxuICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6IGlzRmVlZCA/ICdGZWVkVGFnJyA6ICdCdW5kbGVUYWcnLFxyXG4gICAgICAgICAgICAgICAgLi4udGFnLFxyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgXSxcclxuICAgICAgICAuLi5fKGlzRmVlZCA/IHt9IDoge1xyXG4gICAgICAgICAgICBmZWVkczogY3VycmVudEl0ZW0uZmVlZHMsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYXV0aG9yOiBtZSxcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgX190eXBlbmFtZTogJ011dGF0aW9uJyxcclxuICAgICAgICBbYWN0aW9uICsgX190eXBlbmFtZV06IHtcclxuICAgICAgICAgICAgX190eXBlbmFtZSxcclxuICAgICAgICAgIC4uLnJlc3BvbnNlLCAgXHJcbiAgICB9LFxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5cclxuY29uc3QgZ2VuTmVzdGVkSXRlbXMgPSAoY3VycmVudEl0ZW0pID0+IHtcclxuICAgIGNvbnN0IHRhZ3MgPSBcclxuICAgIFwidGFnc1wiIGluIGN1cnJlbnRJdGVtID8ge1xyXG4gICAgICAgIHRhZ3M6IHtcclxuICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0udGFncy5tYXAoKHsgaWQgfSkgPT4oeyBpZCB9KSkuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB1bmRlZmluZWQpLFxyXG5cclxuICAgICAgICAgICAgY3JlYXRlOiBjdXJyZW50SXRlbS50YWdzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgLm1hcCgobykgPT4gKHsgLi4ubywgaWQ6IHV1aWR2NCgpIH0pKSxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG4gICAgIDoge307XHJcblxyXG4gICAgIGNvbnN0IGZlZWRzID1cclxuICAgICAnZmVlZHMnIGluIGN1cnJlbnRJdGVtXHJcbiAgICAgICA/IHtcclxuICAgICAgICAgICBmZWVkczoge1xyXG4gICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0uZmVlZHNcclxuICAgICAgICAgICAgICAgLm1hcCgoeyBpZCB9KSA9PiAoeyBpZCB9KSlcclxuICAgICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICB9XHJcbiAgICAgICA6IHt9O1xyXG5cclxuICAgICAgIGNvbnN0IHsgX190eXBlbmFtZSwgbGlrZXMsIGF1dGhvciwgYnVuZGxlcywgLi4uY2xlYW5lZEl0ZW0gfSA9IGN1cnJlbnRJdGVtOyAgLy9zdHJpcCB1bndhbnRlZCBmcm9tIGN1cnJlbnRJdGVtIGFuZCBjYWxsIGl0ICdjbGVhbmVkSXRlbScgJ2NsZWFuZWRJdGVtJyB3aWxsIGJlIGFsbCBvZiB0aGUgZmllbGRzIHRoYXQgYXJlIGxlZnRvdmVyLlxyXG5cclxuICAgICAgIHJldHVybiB7IC4uLmNsZWFuZWRJdGVtLCAuLi50YWdzLCAuLi5mZWVkcyB9OyAgLy9hZGQgYWxsIHRhZyBhbmQgZmVlZCBpbmZvIHRvIGNsZWFuZWRJdGVtLlxyXG59XHJcblxyXG5jb25zdCBjbGVhbk9wcyA9IChjdXJyZW50RGF0YSwgaXRlbXMpID0+IHtcclxuICBpdGVtcy5tYXAoKG9uZUl0ZW0pID0+IHtcclxuICAgIFsnY29ubmVjdCcsICdkaXNjb25uZWN0JywgJ2NyZWF0ZSddLm1hcCgob3BlcmF0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChvcGVyYXRpb24gaW4gY3VycmVudERhdGFbb25lSXRlbV0pIHtcclxuICAgICAgICBjdXJyZW50RGF0YVtvbmVJdGVtXVtvcGVyYXRpb25dLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgPyBkZWxldGUgY3VycmVudERhdGFbb25lSXRlbV1bb3BlcmF0aW9uXVxyXG4gICAgICAgICAgOiBudWxsO1xyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKF8uaXNFbXB0eShjdXJyZW50RGF0YVtvbmVJdGVtXSkpIHtcclxuICAgICAgZGVsZXRlIGN1cnJlbnREYXRhW29uZUl0ZW1dO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY3VycmVudERhdGE7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByZXBhcmVOZXdVcGRhdGVPYmogPSAocXVlcmllZEl0ZW0sIGN1cnJlbnRJdGVtLCBpc0ZlZWQsIGlzRWRpdGluZykgPT4ge1xyXG4gICBjb25zdCBjdXJyZW50RGF0YSA9ICBnZW5OZXN0ZWRJdGVtcyhjdXJyZW50SXRlbSlcclxuXHJcbiAgIGlmICghaXNFZGl0aW5nKSB7XHJcbiAgICByZXR1cm4geyAuLi5jdXJyZW50RGF0YSwgIGlkOiB1dWlkdjQoKVxyXG4gICAgLy8gY3VycmVudERhdGEgKGZlZWQgb3IgdGFnKSBpcyByZXR1cm5lZCBXSVRIT1VUIGFuIGlkIG51bWJlcjsgdGh1cyBvbmUgaXMgYWRkZWQvcHJvdmlkZWQuXHJcbiAgIH1cclxuICAgXHJcbiAgIGNvbnN0IHF1ZXJpZWREYXRhID0gZ2VuTmVzdGVkSXRlbXMocXVlcmllZEl0ZW0pXHJcbiAgIFxyXG5cclxuICAgY29uc3QgZGlzY29ubmVjdGVkVGFncyA9IF8uZGlmZmVyZW5jZVdpdGgoXHJcbiAgICAgcXVlcmllZERhdGEudGFncy5jb25uZWN0LFxyXG4gICAgIGN1cnJlbnREYXRhLnRhZ3MuY29ubmVjdCxcclxuICAgICBfLmlzRXF1YWwsXHJcbiAgICApIFxyXG5cclxuICAgY29uc3QgY29ubmVjdGVkVGFncyA9IF8uZGlmZmVyZW5jZVdpdGgoXHJcbiAgICAgcXVlcmllZERhdGEudGFncy5jb25uZWN0LFxyXG4gICAgIGN1cnJlbnREYXRhLnRhZ3MuY29ubmVjdCxcclxuICAgICBfLmlzRXF1YWwsXHJcbiAgICApIFxyXG5cclxuICAgIGlmICghaXNGZWVkKSB7XHJcbiAgICAgIGNvbnN0IGRpc2Nvbm5lY3RlZEZlZWRzID0gXy5kaWZmZXJlbmNlV2l0aChcclxuICAgICAgICBxdWVyaWVkRGF0YS5mZWVkcy5jb25uZWN0LFxyXG4gICAgICAgIGN1cnJlbnREYXRhLmZlZWRzLmNvbm5lY3QsXHJcbiAgICAgICAgXy5pc0VxdWFsLFxyXG4gICAgICAgKSBcclxuICAgXHJcbiAgICAgIGNvbnN0IGNvbm5lY3RlZEZlZWRzID0gXy5kaWZmZXJlbmNlV2l0aChcclxuICAgICAgICBxdWVyaWVkRGF0YS5mZWVkcy5jb25uZWN0LFxyXG4gICAgICAgIGN1cnJlbnREYXRhLmZlZWRzLmNvbm5lY3QsXHJcbiAgICAgICAgXy5pc0VxdWFsLFxyXG4gICAgICAgKVxyXG4gICAgIFxyXG4gICAgICByZXR1cm4gY2xlYW5PcHMoXHJcbiAgICAgICAge1xyXG4gICAgICAgIC4uLmN1cnJlbnREYXRhLFxyXG4gICAgICAgIHRhZ3M6IHtcclxuICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3RlZFRhZ3MsXHJcbiAgICAgICAgICBkaXNjb25uZWN0OiBkaXNjb25uZWN0ZWRUYWdzLFxyXG4gICAgICAgICAgY3JlYXRlOiBfLmdldChjdXJyZW50RGF0YSwgJ3RhZ3MuY3JlYXRlJywgW10pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmVlZHM6IHtcclxuICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3RlZEZlZWRzLFxyXG4gICAgICAgICAgZGlzY29ubmVjdDogZGlzY29ubmVjdGVkRmVlZHMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbJ3RhZ3MnLCAnZmVlZHMnXVxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGNsZWFuT3BzKFxyXG4gICAgICAgIHtcclxuICAgICAgICAuLi5jdXJyZW50RGF0YSxcclxuICAgICAgICB0YWdzOiB7XHJcbiAgICAgICAgICBjb25uZWN0OiBjb25uZWN0ZWRUYWdzLFxyXG4gICAgICAgICAgZGlzY29ubmVjdDogZGlzY29ubmVjdGVkVGFncyxcclxuICAgICAgICAgIGNyZWF0ZTogXy5nZXQoY3VycmVudERhdGEsICd0YWdzLmNyZWF0ZScsIFtdKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBbJ3RhZ3MnXVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgIH0gXHJcbn0iLCJpbXBvcnQgeyBCdW5kbGVUYWcsIEZlZWQsIEZlZWRUYWcsIFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcblxyXG5leHBvcnQgZW51bSBJdGVtVHlwZSB7XHJcbiAgICBCdW5kbGVUeXBlID0gJ0J1bmRsZVR5cGUnLFxyXG4gICAgRmVlZFR5cGUgPSAnRmVlZFR5cGUnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBGZWVkT2JqZWN0ID0ge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHRhZ3M6IEZlZWRUYWdbXTtcclxuICAgIGJ1bmRsZXM/OiBCdW5kbGVPYmplY3RbXVxyXG4gICAgYXV0aG9yPzogVXNlcjtcclxuICAgIGxpa2VzPzogIFVzZXJbXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEJ1bmRsZU9iamVjdCA9IHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHRhZ3M6IEJ1bmRsZVRhZ1tdO1xyXG4gICAgZmVlZHM/OiBGZWVkT2JqZWN0W11cclxuICAgIGF1dGhvcj86IFVzZXI7XHJcbiAgICBsaWtlcz86ICBVc2VyW107XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNlbGVjdGVkRmVlZFN0YXRlID0ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZlZWRzOiBGZWVkW11cclxuICAgIGVkaXRNb2RlOiBib29sZWFuO1xyXG4gICAgbmV3TW9kZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFkZ2VGaWVsZE5hbWUge1xyXG4gICB0YWdzID0gJ3RhZ3MnLFxyXG4gICBmZWVkcyA9ICdmZWVkcycsXHJcbiAgIGJ1bmRsZXMgPSAnYnVuZGxlcydcclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIEFjdGlvblR5cGUge1xyXG4gICBBREQgPSAnQUREJyxcclxuICAgQ1JFQVRFID0gJ0NSRUFURScsXHJcbiAgIE5PTkUgPSAnTk9ORSdcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTmV3SXRlbVN0YXRlID0gIEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gU2VhcmNoUXVlcnlOYW1lIHtcclxuICAgIGZpbmRGZWVkVGFncyA9ICdmaW5kRmVlZFRhZ3MnLFxyXG4gICAgZmluZEJ1bmRsZVRhZ3MgPSAnZmluZEJ1bmRsZVRhZ3MnLFxyXG4gICAgZmluZEZlZWRzID0gJ2ZpbmRGZWVkcycsXHJcbn0iLCJpbXBvcnQgeyBCVU5ETEVTX1FVRVJZLCBCVU5ETEVfUVVFUlksIEZFRURTX1FVRVJZLCBGRUVEX1FVRVJZIH0gZnJvbSBcIi4vYXBpL2dyYXBocWwvcXVlcmllc1wiO1xyXG5pbXBvcnQgKiAgYXMgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FjaGUgPSAoaXNGZWVkLCBhY3Rpb24pID0+ICggc3RvcmUsIHsgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gZGF0YVtgJHthY3Rpb259JHtpc0ZlZWR9ID8gJ0ZlZWQnIDogJ0J1bmRsZSd9YF07XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RvcmUud3JpdGVRdWVyeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBpc0ZlZWQgPyBGRUVEX1FVRVJZIDogQlVORExFX1FVRVJZLFxyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgZGF0YTogeyBpZDogXy5nZXQoaXRlbSwgJ2lkJyl9fSxcclxuICAgICAgICAgICAgZGF0YTogeyBbaXNGZWVkID8gJ2ZlZWQnIDogJ2J1bmRsZSddOiBpdGVtfSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGZlZWRzLCBidW5kbGVzIH0gPSBzdG9yZS5yZWFkUXVlcnkoe1xyXG4gICAgICAgICAgICBxdWVyeTogaXNGZWVkID8gRkVFRFNfUVVFUlkgOiBCVU5ETEVTX1FVRVJZLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtcyA9IGlzRmVlZCA/IGZlZWRzIDogYnVuZGxlcztcclxuXHJcbiAgICAgICAgc3RvcmUud3JpdGVRdWVyeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBpc0ZlZWQgPyBGRUVEU19RVUVSWSA6IEJVTkRMRVNfUVVFUlksXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFtpc0ZlZWQgPyAnZmVlZHMnIDogJ2J1bmRsZXMnXTogW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRJdGVtcy5maWx0ZXIoKG8pID0+IG8uaWQgIT09IGl0ZW0uaWQpLCBpdGVtLFxyXG4gICAgICAgICAgICAgICAgXSwgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICB9IGNhdGNoIChlKSB7fVxyXG59O1xyXG5cclxuXHJcbiAgICAiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgICBfX3VzZXI6IGFueVxyXG59XHJcblxyXG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcihjb29raWUgPSAnJykge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX191c2VyKSB7XHJcbiAgICByZXR1cm4gd2luZG93Ll9fdXNlclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnL2FwaS9tZScsXHJcbiAgICBjb29raWVcclxuICAgICAgPyB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIGNvb2tpZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICA6IHt9XHJcbiAgKVxyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgZGVsZXRlIHdpbmRvdy5fX3VzZXJcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2luZG93Ll9fdXNlciA9IGpzb25cclxuICB9XHJcbiAgcmV0dXJuIGpzb25cclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRmV0Y2hVc2VyKHsgcmVxdWlyZWQgfSA9IHt9KSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoXHJcbiAgICAoKSA9PiAhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX3VzZXIpXHJcbiAgKVxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3aW5kb3cuX191c2VyIHx8IG51bGxcclxuICB9KVxyXG5cclxuICB1c2VFZmZlY3QoXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGlmICghbG9hZGluZyAmJiB1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZVxyXG5cclxuICAgICAgZmV0Y2hVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIC8vIE9ubHkgc2V0IHRoZSB1c2VyIGlmIHRoZSBjb21wb25lbnQgaXMgc3RpbGwgbW91bnRlZFxyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcclxuICAgICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiBidXQgbG9naW4gaXMgcmVxdWlyZWRcclxuICAgICAgICAgIGlmIChyZXF1aXJlZCAmJiAhdXNlcikge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2xvZ2luJ1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBpc01vdW50ZWQgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgW11cclxuICApXHJcblxyXG4gIHJldHVybiB7IHVzZXIsIGxvYWRpbmcgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==