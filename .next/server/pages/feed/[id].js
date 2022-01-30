(function() {
var exports = {};
exports.id = "pages/feed/[id]";
exports.ids = ["pages/feed/[id]"];
exports.modules = {

/***/ "./pages/feed/[id].tsx":
/*!*****************************!*\
  !*** ./pages/feed/[id].tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_notifyError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/notifyError */ "./components/notifyError.tsx");
/* harmony import */ var _components_notifyLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/notifyLoading */ "./components/notifyLoading.tsx");
/* harmony import */ var _components_oneListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/oneListItem */ "./components/oneListItem.tsx");
/* harmony import */ var _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/types */ "./utils/types.ts");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\feed\\[id].tsx";









const Feed = ({
  id
}) => {
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_7__.FEED_QUERY, {
    variables: {
      data: {
        id
      }
    }
  });
  console.log(loading, error, data);

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_notifyLoading__WEBPACK_IMPORTED_MODULE_5__.NotifyLoading, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined);
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_notifyError__WEBPACK_IMPORTED_MODULE_4__.NotifyError, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined);
  }

  const {
    feed
  } = data || {};
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "text-lg font-medium pt-4",
      children: feed.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "pb-4 ",
      children: feed.url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "pb-4 font-medium",
      children: "Bundles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-3 gap-4",
      children: feed.bundles.length > 0 ? feed.bundles.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_oneListItem__WEBPACK_IMPORTED_MODULE_6__.OneListItem, {
        item: item,
        type: _utils_types__WEBPACK_IMPORTED_MODULE_8__.ItemType.BundleType,
        useSelected: false,
        allowEdits: false
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 62
      }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "None are present. Why not add one?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, undefined);
};

Feed.getInitialProps = ({
  query
}) => {
  const {
    id
  } = query;
  return {
    id
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Feed);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layout_tsx-components_notifyError_tsx-components_notifyLoading_tsx-components_oneL-b210c4"], function() { return __webpack_exec__("./pages/feed/[id].tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9mZWVkL1tpZF0udHN4Iiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRmVlZCIsImlkIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwiRkVFRF9RVUVSWSIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciLCJmZWVkIiwibmFtZSIsInVybCIsImJ1bmRsZXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiSXRlbVR5cGUiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVU7QUFDbkIsUUFBTTtBQUFDQyxXQUFEO0FBQVVDLFNBQVY7QUFBaUJDO0FBQWpCLE1BQXlCQyx3REFBUSxDQUFDQyxrRUFBRCxFQUFhO0FBQUVDLGFBQVMsRUFBRTtBQUFDSCxVQUFJLEVBQUU7QUFBQ0g7QUFBRDtBQUFQO0FBQWIsR0FBYixDQUF2QztBQUdBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsT0FBWixFQUFxQkMsS0FBckIsRUFBNEJDLElBQTVCOztBQUVBLE1BQUdGLE9BQUgsRUFBWTtBQUNSLHdCQUNJLDhEQUFDLHNEQUFEO0FBQUEsNkJBQ0ksOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFNSDs7QUFFRCxNQUFHQyxLQUFILEVBQVU7QUFDTix3QkFDSSw4REFBQyxzREFBRDtBQUFBLDZCQUNJLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBTUg7O0FBRUQsUUFBTTtBQUFFTztBQUFGLE1BQVdOLElBQUksSUFBSSxFQUF6QjtBQUVBLHNCQUNJLDhEQUFDLHNEQUFEO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsMEJBQWQ7QUFBQSxnQkFBMENNLElBQUksQ0FBQ0M7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUdJO0FBQUcsZUFBUyxFQUFDLE9BQWI7QUFBQSxnQkFBc0JELElBQUksQ0FBQ0U7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJO0FBQUksZUFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0k7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQSxnQkFFT0YsSUFBSSxDQUFDRyxPQUFMLENBQWFDLE1BQWIsR0FBc0IsQ0FBdEIsR0FDQ0osSUFBSSxDQUFDRyxPQUFMLENBQWFFLEdBQWIsQ0FBa0JDLElBQUQsaUJBQXdCLDhEQUFDLGdFQUFEO0FBQWEsWUFBSSxFQUFFQSxJQUFuQjtBQUF5QixZQUFJLEVBQUVDLDZEQUEvQjtBQUFrRSxtQkFBVyxFQUFFLEtBQS9FO0FBQXNGLGtCQUFVLEVBQUU7QUFBbEcsU0FBeURELElBQUksQ0FBQ2YsRUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBekMsQ0FERCxnQkFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFrQkgsQ0E1Q0Q7O0FBOENBRCxJQUFJLENBQUNrQixlQUFMLEdBQXdCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDbkMsUUFBTTtBQUFFbEI7QUFBRixNQUFTa0IsS0FBZjtBQUVBLFNBQU87QUFBRWxCO0FBQUYsR0FBUDtBQUNILENBSkQ7O0FBTUEsK0RBQWVELElBQWYsRTs7Ozs7Ozs7Ozs7QUM3REEsNEM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvZmVlZC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgTm90aWZ5RXJyb3IgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ub3RpZnlFcnJvclwiO1xyXG5pbXBvcnQgeyBOb3RpZnlMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbm90aWZ5TG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBPbmVMaXN0SXRlbSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29uZUxpc3RJdGVtXCI7XHJcbmltcG9ydCB7IEZFRURfUVVFUlkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpL2dyYXBocWwvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyBGZWVkT2JqZWN0LCBJdGVtVHlwZSB9IGZyb20gXCIuLi8uLi91dGlscy90eXBlc1wiO1xyXG5cclxuY29uc3QgRmVlZCA9ICh7aWR9KSA9PiB7XHJcbiAgICBjb25zdCB7bG9hZGluZywgZXJyb3IsIGRhdGF9ID0gdXNlUXVlcnkoRkVFRF9RVUVSWSwgeyB2YXJpYWJsZXM6IHtkYXRhOiB7aWR9fSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGxvYWRpbmcsIGVycm9yLCBkYXRhKTtcclxuXHJcbiAgICBpZihsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxOb3RpZnlMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZihlcnJvcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Tm90aWZ5RXJyb3IgLz5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGZlZWQgfSA9IGRhdGEgfHwge307XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBwdC00XCI+e2ZlZWQubmFtZX1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGItNCBcIj57ZmVlZC51cmx9PC9wPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGItNCBmb250LW1lZGl1bVwiPkJ1bmRsZXM8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIiA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBmZWVkLmJ1bmRsZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICBmZWVkLmJ1bmRsZXMubWFwKChpdGVtOiBGZWVkT2JqZWN0KSA9PiAoIDxPbmVMaXN0SXRlbSBpdGVtPXtpdGVtfSB0eXBlPXtJdGVtVHlwZS5CdW5kbGVUeXBlfSBrZXk9e2l0ZW0uaWR9IHVzZVNlbGVjdGVkPXtmYWxzZX0gYWxsb3dFZGl0cz17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICkgOiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk5vbmUgYXJlIHByZXNlbnQuIFdoeSBub3QgYWRkIG9uZT88L3A+XHJcbiAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuRmVlZC5nZXRJbml0aWFsUHJvcHMgPSAoKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcXVlcnk7XHJcblxyXG4gICAgcmV0dXJuIHsgaWQgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==