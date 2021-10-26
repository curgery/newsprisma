(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_apolloClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/apolloClient */ "./utils/apolloClient.ts");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function App({
  Component,
  pageProps
}) {
  const apolloClient = (0,_utils_apolloClient__WEBPACK_IMPORTED_MODULE_2__.useApollo)(pageProps.initialApolloState);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
    client: apolloClient,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./utils/apolloClient.ts":
/*!*******************************!*\
  !*** ./utils/apolloClient.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeApollo": function() { return /* binding */ initializeApollo; },
/* harmony export */   "useApollo": function() { return /* binding */ useApollo; }
/* harmony export */ });
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
let apolloClient; // const customFetch = (uri, options) => {
//   return fetch(uri, options)
//   .then(response => {
//     if (response.status >= 500) {  // or handle 400 errors
//       return Promise.reject(response.status);
//     }
//     return response;
//   });
// };

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
    ssrMode: true,
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({
      uri: "http://localhost:3000/api/graphql",
      // Server URL (must be absolute)
      // fetch: customFetch,
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({})
  });
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); // Restore the cache with the merged data


    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeApollo(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/config");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcG9sbG9DbGllbnQudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXBvbGxvQ2xpZW50IiwidXNlQXBvbGxvIiwiaW5pdGlhbEFwb2xsb1N0YXRlIiwicHVibGljUnVudGltZUNvbmZpZyIsImdldENvbmZpZyIsIkJBQ0tFTkRfVVJMIiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsInJlc3RvcmUiLCJzdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFHZSxTQUFTQSxHQUFULENBQWE7QUFBQ0MsV0FBRDtBQUFZQztBQUFaLENBQWIsRUFBcUM7QUFDaEQsUUFBTUMsWUFBWSxHQUFHQyw4REFBUyxDQUFDRixTQUFTLENBQUNHLGtCQUFYLENBQTlCO0FBRUEsc0JBQ0ksOERBQUMsMERBQUQ7QUFBZ0IsVUFBTSxFQUFFRixZQUF4QjtBQUFBLDJCQUNJLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUFDSTtBQUFELElBQXdCQyxrREFBUyxFQUF2QztBQUNBLE1BQU07QUFBQ0M7QUFBRCxJQUFnQkYsbUJBQXRCO0FBRUEsSUFBSUgsWUFBSixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNNLGtCQUFULEdBQThCO0FBQzVCLFNBQU8sSUFBSUMsd0RBQUosQ0FBaUI7QUFDdEJDLFdBQU8sTUFEZTtBQUV0QkMsUUFBSSxFQUFFLElBQUlDLG9EQUFKLENBQWE7QUFDakJDLFNBQUcsRUFBRSxtQ0FEWTtBQUN5QjtBQUMxQztBQUNBQyxpQkFBVyxFQUFFLGFBSEksQ0FHVzs7QUFIWCxLQUFiLENBRmdCO0FBT3RCQyxTQUFLLEVBQUUsSUFBSUMseURBQUosQ0FBa0IsRUFBbEI7QUFQZSxHQUFqQixDQUFQO0FBU0Q7O0FBRU0sU0FBU0MsZ0JBQVQsQ0FBMEJDLFlBQVksR0FBRyxJQUF6QyxFQUErQztBQUFBOztBQUNwRCxRQUFNQyxhQUFhLHFCQUFHakIsWUFBSCwyREFBbUJNLGtCQUFrQixFQUF4RCxDQURvRCxDQUdwRDtBQUNBOzs7QUFDQSxNQUFJVSxZQUFKLEVBQWtCO0FBQ2hCO0FBQ0EsVUFBTUUsYUFBYSxHQUFHRCxhQUFhLENBQUNFLE9BQWQsRUFBdEIsQ0FGZ0IsQ0FLaEI7OztBQUNBRixpQkFBYSxDQUFDSixLQUFkLENBQW9CTyxPQUFwQixpQ0FBZ0NGLGFBQWhDLEdBQWtERixZQUFsRDtBQUNELEdBWm1ELENBYXBEOzs7QUFDQSxZQUFtQyxPQUFPQyxhQUFQLENBZGlCLENBZXBEOztBQUNBLE1BQUksQ0FBQ2pCLFlBQUwsRUFBbUJBLFlBQVksR0FBR2lCLGFBQWY7QUFFbkIsU0FBT0EsYUFBUDtBQUNEO0FBR00sU0FBU2hCLFNBQVQsQ0FBbUJlLFlBQW5CLEVBQWlDO0FBQ3RDLFFBQU1LLEtBQUssR0FBR0MsOENBQU8sQ0FBQyxNQUFNUCxnQkFBZ0IsQ0FBQ0MsWUFBRCxDQUF2QixFQUF1QyxDQUFDQSxZQUFELENBQXZDLENBQXJCO0FBQ0EsU0FBT0ssS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REQsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcclxuaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIlxyXG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tIFwiLi4vdXRpbHMvYXBvbGxvQ2xpZW50XCJcclxuXHJcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSB7XHJcbiAgICBjb25zdCBhcG9sbG9DbGllbnQgPSB1c2VBcG9sbG8ocGFnZVByb3BzLmluaXRpYWxBcG9sbG9TdGF0ZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXHJcbmNvbnN0IHtwdWJsaWNSdW50aW1lQ29uZmlnfSA9IGdldENvbmZpZygpXHJcbmNvbnN0IHtCQUNLRU5EX1VSTH0gPSBwdWJsaWNSdW50aW1lQ29uZmlnXHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50XHJcblxyXG4vLyBjb25zdCBjdXN0b21GZXRjaCA9ICh1cmksIG9wdGlvbnMpID0+IHtcclxuLy8gICByZXR1cm4gZmV0Y2godXJpLCBvcHRpb25zKVxyXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuLy8gICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNTAwKSB7ICAvLyBvciBoYW5kbGUgNDAwIGVycm9yc1xyXG4vLyAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2Uuc3RhdHVzKTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiByZXNwb25zZTtcclxuLy8gICB9KTtcclxuLy8gfTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoKSB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsXHJcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xyXG4gICAgICB1cmk6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsXCIsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXHJcbiAgICAgIC8vIGZldGNoOiBjdXN0b21GZXRjaCxcclxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYCBvciBgaGVhZGVyc2BcclxuICAgIH0pLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHt9KSxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XHJcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKVxyXG5cclxuICAvLyBJZiB5b3VyIHBhZ2UgaGFzIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIHRoYXQgdXNlIEFwb2xsbyBDbGllbnQsIHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgLy8gZ2V0cyBoeWRyYXRlZCBoZXJlXHJcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgLy8gR2V0IGV4aXN0aW5nIGNhY2hlLCBsb2FkZWQgZHVyaW5nIGNsaWVudCBzaWRlIGRhdGEgZmV0Y2hpbmdcclxuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKVxyXG5cclxuXHJcbiAgICAvLyBSZXN0b3JlIHRoZSBjYWNoZSB3aXRoIHRoZSBtZXJnZWQgZGF0YVxyXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKHsuLi5leGlzdGluZ0NhY2hlLCAuLi5pbml0aWFsU3RhdGV9KVxyXG4gIH1cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudFxyXG4gIC8vIENyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcclxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudFxyXG5cclxuICByZXR1cm4gX2Fwb2xsb0NsaWVudFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUpIHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuICByZXR1cm4gc3RvcmVcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==