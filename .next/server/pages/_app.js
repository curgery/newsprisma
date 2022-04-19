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
  const apolloClient = (0,_utils_apolloClient__WEBPACK_IMPORTED_MODULE_3__.useApollo)(pageProps.initialApolloState);
  const {
    user
  } = pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
    client: apolloClient,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.UserProvider, {
      user: user,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
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
let apolloClient;

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
    ssrMode: true,
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({
      uri: "http://localhost:3000/api/graphql",
      // Server URL (must be absolute)
      // fetch: customFetch,
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({}) // defaultOptions: {
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
  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeApollo(initialState), [initialState]);
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

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcG9sbG9DbGllbnQudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsb0NsaWVudCIsInVzZUFwb2xsbyIsImluaXRpYWxBcG9sbG9TdGF0ZSIsInVzZXIiLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZ2V0Q29uZmlnIiwiQkFDS0VORF9VUkwiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsIkh0dHBMaW5rIiwidXJpIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJpbml0aWFsaXplQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsImV4aXN0aW5nQ2FjaGUiLCJleHRyYWN0IiwicmVzdG9yZSIsInN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxHQUFULENBQWE7QUFBQ0MsV0FBRDtBQUFZQztBQUFaLENBQWIsRUFBcUM7QUFDaEQsUUFBTUMsWUFBWSxHQUFHQyw4REFBUyxDQUFDRixTQUFTLENBQUNHLGtCQUFYLENBQTlCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdKLFNBQWpCO0FBR0Esc0JBQ0ksOERBQUMsMERBQUQ7QUFBZ0IsVUFBTSxFQUFFQyxZQUF4QjtBQUFBLDJCQUNJLDhEQUFDLDZEQUFEO0FBQWMsVUFBSSxFQUFFRyxJQUFwQjtBQUFBLDZCQUNBLDhEQUFDLFNBQUQsb0JBQWVKLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQ0E7QUFDQTtBQUlBLE1BQU07QUFBQ0s7QUFBRCxJQUF3QkMsa0RBQVMsRUFBdkM7QUFDQSxNQUFNO0FBQUVDO0FBQUYsSUFBa0JGLG1CQUF4QjtBQUVBLElBQUlKLFlBQUo7O0FBR0EsU0FBU08sa0JBQVQsR0FBOEI7QUFDNUIsU0FBTyxJQUFJQyx3REFBSixDQUFpQjtBQUN0QkMsV0FBTyxNQURlO0FBRXRCQyxRQUFJLEVBQUUsSUFBSUMsb0RBQUosQ0FBYTtBQUNqQkMsU0FBRyxFQUFFLG1DQURZO0FBQ3lCO0FBQzFDO0FBQ0FDLGlCQUFXLEVBQUUsYUFISSxDQUdXOztBQUhYLEtBQWIsQ0FGZ0I7QUFPdEJDLFNBQUssRUFBRSxJQUFJQyx5REFBSixDQUFrQixFQUFsQixDQVBlLENBUXRCO0FBQ0E7QUFDQTs7QUFWc0IsR0FBakIsQ0FBUDtBQVlEOztBQUVNLFNBQVNDLGdCQUFULENBQTBCQyxZQUFZLEdBQUcsSUFBekMsRUFBK0M7QUFBQTs7QUFDcEQsUUFBTUMsYUFBYSxxQkFBR2xCLFlBQUgsMkRBQW1CTyxrQkFBa0IsRUFBeEQsQ0FEb0QsQ0FHcEQ7QUFDQTs7O0FBQ0EsTUFBSVUsWUFBSixFQUFrQjtBQUNoQjtBQUNBLFVBQU1FLGFBQWEsR0FBR0QsYUFBYSxDQUFDRSxPQUFkLEVBQXRCLENBRmdCLENBS2hCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNBRixpQkFBYSxDQUFDSixLQUFkLENBQW9CTyxPQUFwQixpQ0FBZ0NGLGFBQWhDLEdBQWtERixZQUFsRDtBQUNELEdBakJtRCxDQWtCcEQ7OztBQUNBLFlBQW1DLE9BQU9DLGFBQVAsQ0FuQmlCLENBb0JwRDs7QUFDQSxNQUFJLENBQUNsQixZQUFMLEVBQW1CQSxZQUFZLEdBQUdrQixhQUFmO0FBRW5CLFNBQU9BLGFBQVA7QUFDRDtBQUdNLFNBQVNqQixTQUFULENBQW1CZ0IsWUFBbkIsRUFBaUM7QUFDdEMsUUFBTUssS0FBSyxHQUFHQyw4Q0FBTyxDQUFDLE1BQU1QLGdCQUFnQixDQUFDQyxZQUFELENBQXZCLEVBQXVDLENBQUNBLFlBQUQsQ0FBdkMsQ0FBckI7QUFDQSxTQUFPSyxLQUFQO0FBQ0QsQyxDQVFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBLDRDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXHJcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCJcclxuaW1wb3J0IHsgdXNlQXBvbGxvIH0gZnJvbSBcIi4uL3V0aWxzL2Fwb2xsb0NsaWVudFwiXHJcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSB7XHJcbiAgICBjb25zdCBhcG9sbG9DbGllbnQgPSB1c2VBcG9sbG8ocGFnZVByb3BzLmluaXRpYWxBcG9sbG9TdGF0ZSlcclxuICAgIGNvbnN0IHsgdXNlciB9ID0gcGFnZVByb3BzO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XHJcbiAgICAgICAgICAgIDxVc2VyUHJvdmlkZXIgdXNlcj17dXNlcn0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Vc2VyUHJvdmlkZXI+XHJcbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgIClcclxufSIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xyXG5pbXBvcnQgbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJ1xyXG5cclxuXHJcbmNvbnN0IHtwdWJsaWNSdW50aW1lQ29uZmlnfSA9IGdldENvbmZpZygpXHJcbmNvbnN0IHsgQkFDS0VORF9VUkwgfSA9IHB1YmxpY1J1bnRpbWVDb25maWdcclxuXHJcbmxldCBhcG9sbG9DbGllbnQ7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnLFxyXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHtcclxuICAgICAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbFwiLCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxyXG4gICAgICAvLyBmZXRjaDogY3VzdG9tRmV0Y2gsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXHJcbiAgICB9KSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7fSksXHJcbiAgICAvLyBkZWZhdWx0T3B0aW9uczoge1xyXG4gICAgLy8gICBtdXRhdGU6IHtlcnJvclBvbGljeTogJ2lnbm9yZSd9XHJcbiAgICAvLyB9XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlID0gbnVsbCkge1xyXG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KClcclxuXHJcbiAgLy8gSWYgeW91ciBwYWdlIGhhcyBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyB0aGF0IHVzZSBBcG9sbG8gQ2xpZW50LCB0aGUgaW5pdGlhbCBzdGF0ZVxyXG4gIC8vIGdldHMgaHlkcmF0ZWQgaGVyZVxyXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcclxuICAgIC8vIEdldCBleGlzdGluZyBjYWNoZSwgbG9hZGVkIGR1cmluZyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXHJcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KClcclxuXHJcblxyXG4gICAgLy8gLy8gTWVyZ2UgdGhlIGV4aXN0aW5nIGNhY2hlIGludG8gZGF0YSBwYXNzZWQgZnJvbSBnZXRTdGF0aWNQcm9wcy9nZXRTZXJ2ZXJTaWRlUHJvcHNcclxuICAgIC8vIGNvbnN0IGRhdGEgPSBtZXJnZShpbml0aWFsU3RhdGUsIGV4aXN0aW5nQ2FjaGUpXHJcblxyXG4gICAgLy8gLy8gUmVzdG9yZSB0aGUgY2FjaGUgd2l0aCB0aGUgbWVyZ2VkIGRhdGFcclxuICAgIC8vIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShkYXRhKVxyXG4gICAgLy8gUmVzdG9yZSB0aGUgY2FjaGUgd2l0aCB0aGUgbWVyZ2VkIGRhdGFcclxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZSh7Li4uZXhpc3RpbmdDYWNoZSwgLi4uaW5pdGlhbFN0YXRlfSlcclxuICB9XHJcbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgQXBvbGxvIENsaWVudFxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnRcclxuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnRcclxuXHJcbiAgcmV0dXJuIF9hcG9sbG9DbGllbnRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IGN1c3RvbUZldGNoID0gKHVyaSwgb3B0aW9ucykgPT4ge1xyXG4vLyAgIHJldHVybiBmZXRjaCh1cmksIG9wdGlvbnMpXHJcbi8vICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4vLyAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA1MDApIHsgIC8vIG9yIGhhbmRsZSA0MDAgZXJyb3JzXHJcbi8vICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZS5zdGF0dXMpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4vLyAgIH0pO1xyXG4vLyB9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==