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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_apolloClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/apolloClient */ "./utils/apolloClient.ts");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function App({
  Component,
  pageProps
}) {
  const apolloClient = Object(_utils_apolloClient__WEBPACK_IMPORTED_MODULE_3__["useApollo"])(pageProps.initialApolloState);
  const {
    user
  } = pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: apolloClient,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__["UserProvider"], {
      user: user,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/apolloClient.ts":
/*!*******************************!*\
  !*** ./utils/apolloClient.ts ***!
  \*******************************/
/*! exports provided: initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApollo", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApollo", function() { return useApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_2___default()();
const {
  BACKEND_URL
} = publicRuntimeConfig;
let apolloClient;

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    ssrMode: true,
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
      uri: "http://localhost:3000/api/graphql",
      // Server URL (must be absolute)
      // fetch: customFetch,
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]({}) // defaultOptions: {
    //   mutate: {errorPolicy: 'ignore'}
    // }

  });
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); // // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    // const data = merge(initialState, existingCache)
    // // Restore the cache with the merged data
    // _apolloClient.cache.restore(data)
    // Restore the cache with the merged data


    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeApollo(initialState), [initialState]);
  return store;
} // const customFetch = (uri, options) => {
//   return fetch(uri, options)
//   .then(response => {
//     if (response.status >= 500) {  // or handle 400 errors
//       return Promise.reject(response.status);
//     }
//     return response;
//   });
// };

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


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

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBvbGxvQ2xpZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG9DbGllbnQiLCJ1c2VBcG9sbG8iLCJpbml0aWFsQXBvbGxvU3RhdGUiLCJ1c2VyIiwicHVibGljUnVudGltZUNvbmZpZyIsImdldENvbmZpZyIsIkJBQ0tFTkRfVVJMIiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsInJlc3RvcmUiLCJzdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7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Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIlxyXG5pbXBvcnQgeyBVc2VyUHJvdmlkZXIgfSBmcm9tIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiXHJcbmltcG9ydCB7IHVzZUFwb2xsbyB9IGZyb20gXCIuLi91dGlscy9hcG9sbG9DbGllbnRcIlxyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkge1xyXG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUpXHJcbiAgICBjb25zdCB7IHVzZXIgfSA9IHBhZ2VQcm9wcztcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxyXG4gICAgICAgICAgICA8VXNlclByb3ZpZGVyIHVzZXI9e3VzZXJ9PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvVXNlclByb3ZpZGVyPlxyXG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSHR0cExpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcclxuXHJcblxyXG5jb25zdCB7cHVibGljUnVudGltZUNvbmZpZ30gPSBnZXRDb25maWcoKVxyXG5jb25zdCB7IEJBQ0tFTkRfVVJMIH0gPSBwdWJsaWNSdW50aW1lQ29uZmlnXHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyxcclxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7XHJcbiAgICAgIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyYXBocWxcIiwgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcclxuICAgICAgLy8gZmV0Y2g6IGN1c3RvbUZldGNoLFxyXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgIG9yIGBoZWFkZXJzYFxyXG4gICAgfSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe30pLFxyXG4gICAgLy8gZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgIC8vICAgbXV0YXRlOiB7ZXJyb3JQb2xpY3k6ICdpZ25vcmUnfVxyXG4gICAgLy8gfVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwpIHtcclxuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpXHJcblxyXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcclxuICAvLyBnZXRzIGh5ZHJhdGVkIGhlcmVcclxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xyXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpXHJcblxyXG5cclxuICAgIC8vIC8vIE1lcmdlIHRoZSBleGlzdGluZyBjYWNoZSBpbnRvIGRhdGEgcGFzc2VkIGZyb20gZ2V0U3RhdGljUHJvcHMvZ2V0U2VydmVyU2lkZVByb3BzXHJcbiAgICAvLyBjb25zdCBkYXRhID0gbWVyZ2UoaW5pdGlhbFN0YXRlLCBleGlzdGluZ0NhY2hlKVxyXG5cclxuICAgIC8vIC8vIFJlc3RvcmUgdGhlIGNhY2hlIHdpdGggdGhlIG1lcmdlZCBkYXRhXHJcbiAgICAvLyBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoZGF0YSlcclxuICAgIC8vIFJlc3RvcmUgdGhlIGNhY2hlIHdpdGggdGhlIG1lcmdlZCBkYXRhXHJcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoey4uLmV4aXN0aW5nQ2FjaGUsIC4uLmluaXRpYWxTdGF0ZX0pXHJcbiAgfVxyXG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50XHJcbiAgLy8gQ3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50XHJcblxyXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKGluaXRpYWxTdGF0ZSkge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4gIHJldHVybiBzdG9yZVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBjdXN0b21GZXRjaCA9ICh1cmksIG9wdGlvbnMpID0+IHtcclxuLy8gICByZXR1cm4gZmV0Y2godXJpLCBvcHRpb25zKVxyXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuLy8gICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNTAwKSB7ICAvLyBvciBoYW5kbGUgNDAwIGVycm9yc1xyXG4vLyAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2Uuc3RhdHVzKTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiByZXNwb25zZTtcclxuLy8gICB9KTtcclxuLy8gfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9