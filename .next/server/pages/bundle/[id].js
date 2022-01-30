(function() {
var exports = {};
exports.id = "pages/bundle/[id]";
exports.ids = ["pages/bundle/[id]"];
exports.modules = {

/***/ "./pages/bundle/[id].tsx":
/*!*******************************!*\
  !*** ./pages/bundle/[id].tsx ***!
  \*******************************/
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

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\bundle\\[id].tsx";









const Bundle = ({
  id
}) => {
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_7__.BUNDLE_QUERY, {
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
    bundle
  } = data || {};
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "text-lg font-medium pt-4",
      children: bundle.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "pb-4 ",
      children: bundle.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "pb-4 font-medium",
      children: "Feeds"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-3 gap-4",
      children: bundle.feeds.length > 0 ? bundle.feeds.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_oneListItem__WEBPACK_IMPORTED_MODULE_6__.OneListItem, {
        item: item,
        type: _utils_types__WEBPACK_IMPORTED_MODULE_8__.ItemType.FeedType,
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

Bundle.getInitialProps = ({
  query
}) => {
  const {
    id
  } = query;
  return {
    id
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Bundle);

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layout_tsx-components_notifyError_tsx-components_notifyLoading_tsx-components_oneL-b210c4"], function() { return __webpack_exec__("./pages/bundle/[id].tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9idW5kbGUvW2lkXS50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCdW5kbGUiLCJpZCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsIkJVTkRMRV9RVUVSWSIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciLCJidW5kbGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmZWVkcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJJdGVtVHlwZSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBVTtBQUNyQixRQUFNO0FBQUNDLFdBQUQ7QUFBVUMsU0FBVjtBQUFpQkM7QUFBakIsTUFBeUJDLHdEQUFRLENBQUNDLG9FQUFELEVBQWU7QUFBRUMsYUFBUyxFQUFFO0FBQUNILFVBQUksRUFBRTtBQUFDSDtBQUFEO0FBQVA7QUFBYixHQUFmLENBQXZDO0FBR0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxPQUFaLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUI7O0FBRUEsTUFBR0YsT0FBSCxFQUFZO0FBQ1Isd0JBQ0ksOERBQUMsc0RBQUQ7QUFBQSw2QkFDSSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQU1IOztBQUVELE1BQUdDLEtBQUgsRUFBVTtBQUNOLHdCQUNJLDhEQUFDLHNEQUFEO0FBQUEsNkJBQ0ksOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFNSDs7QUFFRCxRQUFNO0FBQUVPO0FBQUYsTUFBYU4sSUFBSSxJQUFJLEVBQTNCO0FBRUEsc0JBQ0ksOERBQUMsc0RBQUQ7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQywwQkFBZDtBQUFBLGdCQUEwQ00sTUFBTSxDQUFDQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBR0k7QUFBRyxlQUFTLEVBQUMsT0FBYjtBQUFBLGdCQUFzQkQsTUFBTSxDQUFDRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUk7QUFBSSxlQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFLSTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUFBLGdCQUVPRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsTUFBYixHQUFzQixDQUF0QixHQUNDSixNQUFNLENBQUNHLEtBQVAsQ0FBYUUsR0FBYixDQUFrQkMsSUFBRCxpQkFBd0IsOERBQUMsZ0VBQUQ7QUFBYSxZQUFJLEVBQUVBLElBQW5CO0FBQXlCLFlBQUksRUFBRUMsMkRBQS9CO0FBQWdFLG1CQUFXLEVBQUUsS0FBN0U7QUFBb0Ysa0JBQVUsRUFBRTtBQUFoRyxTQUF1REQsSUFBSSxDQUFDZixFQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF6QyxDQURELGdCQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWtCSCxDQTVDRDs7QUE4Q0FELE1BQU0sQ0FBQ2tCLGVBQVAsR0FBMEIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUNyQyxRQUFNO0FBQUVsQjtBQUFGLE1BQVNrQixLQUFmO0FBRUEsU0FBTztBQUFFbEI7QUFBRixHQUFQO0FBQ0gsQ0FKRDs7QUFNQSwrREFBZUQsTUFBZixFOzs7Ozs7Ozs7OztBQzdEQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9idW5kbGUvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IE5vdGlmeUVycm9yIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbm90aWZ5RXJyb3JcIjtcclxuaW1wb3J0IHsgTm90aWZ5TG9hZGluZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25vdGlmeUxvYWRpbmdcIjtcclxuaW1wb3J0IHsgT25lTGlzdEl0ZW0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vbmVMaXN0SXRlbVwiO1xyXG5pbXBvcnQgeyBCVU5ETEVfUVVFUlkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpL2dyYXBocWwvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyBGZWVkT2JqZWN0LCBJdGVtVHlwZSB9IGZyb20gXCIuLi8uLi91dGlscy90eXBlc1wiO1xyXG5cclxuY29uc3QgQnVuZGxlID0gKHtpZH0pID0+IHtcclxuICAgIGNvbnN0IHtsb2FkaW5nLCBlcnJvciwgZGF0YX0gPSB1c2VRdWVyeShCVU5ETEVfUVVFUlksIHsgdmFyaWFibGVzOiB7ZGF0YToge2lkfX0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhsb2FkaW5nLCBlcnJvciwgZGF0YSk7XHJcblxyXG4gICAgaWYobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Tm90aWZ5TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPE5vdGlmeUVycm9yIC8+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBidW5kbGUgfSA9IGRhdGEgfHwge307XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBwdC00XCI+e2J1bmRsZS5uYW1lfVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYi00IFwiPntidW5kbGUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGItNCBmb250LW1lZGl1bVwiPkZlZWRzPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCIgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgYnVuZGxlLmZlZWRzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmZlZWRzLm1hcCgoaXRlbTogRmVlZE9iamVjdCkgPT4gKCA8T25lTGlzdEl0ZW0gaXRlbT17aXRlbX0gdHlwZT17SXRlbVR5cGUuRmVlZFR5cGV9IGtleT17aXRlbS5pZH0gdXNlU2VsZWN0ZWQ9e2ZhbHNlfSBhbGxvd0VkaXRzPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgKSA6IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Tm9uZSBhcmUgcHJlc2VudC4gV2h5IG5vdCBhZGQgb25lPzwvcD5cclxuICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5CdW5kbGUuZ2V0SW5pdGlhbFByb3BzID0gKCh7IHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5O1xyXG5cclxuICAgIHJldHVybiB7IGlkIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVuZGxlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==