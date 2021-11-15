self["webpackHotUpdate_N_E"]("pages/feeds",{

/***/ "./components/badgeList.tsx":
/*!**********************************!*\
  !*** ./components/badgeList.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeList": function() { return /* binding */ BadgeList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _oneBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oneBadge */ "./components/oneBadge.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\badgeList.tsx",
    _this = undefined;


var BadgeList = function BadgeList(_ref) {
  var fieldName = _ref.fieldName,
      action = _ref.action,
      item = _ref.item,
      setItem = _ref.setItem,
      setSearch = _ref.setSearch;
  return item[fieldName] && item[fieldName].length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: item[fieldName].map(function (oneBadge) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_oneBadge__WEBPACK_IMPORTED_MODULE_1__.OneBadge, {
        fieldName: fieldName,
        item: oneBadge,
        action: action,
        setItem: setItem,
        currentItem: item,
        setSearch: setSearch
      }, "".concat(item['id'], "-").concat(oneBadge.name, "}"), false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: "text-gray-400",
    children: "None found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, _this);
};
_c = BadgeList;

var _c;

$RefreshReg$(_c, "BadgeList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYWRnZUxpc3QudHN4Il0sIm5hbWVzIjpbIkJhZGdlTGlzdCIsImZpZWxkTmFtZSIsImFjdGlvbiIsIml0ZW0iLCJzZXRJdGVtIiwic2V0U2VhcmNoIiwibGVuZ3RoIiwibWFwIiwib25lQmFkZ2UiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FjbkI7QUFBQSxNQWJGQyxTQWFFLFFBYkZBLFNBYUU7QUFBQSxNQVpGQyxNQVlFLFFBWkZBLE1BWUU7QUFBQSxNQVhGQyxJQVdFLFFBWEZBLElBV0U7QUFBQSxNQVZGQyxPQVVFLFFBVkZBLE9BVUU7QUFBQSxNQVRGQyxTQVNFLFFBVEZBLFNBU0U7QUFDRixTQUFPRixJQUFJLENBQUNGLFNBQUQsQ0FBSixJQUFtQkUsSUFBSSxDQUFDRixTQUFELENBQUosQ0FBZ0JLLE1BQWhCLEdBQXlCLENBQTVDLGdCQUNIO0FBQUEsY0FDQ0gsSUFBSSxDQUFDRixTQUFELENBQUosQ0FBZ0JNLEdBQWhCLENBQW9CLFVBQUNDLFFBQUQ7QUFBQSwwQkFDakIsOERBQUMsK0NBQUQ7QUFFSSxpQkFBUyxFQUFFUCxTQUZmO0FBR0ksWUFBSSxFQUFFTyxRQUhWO0FBSUksY0FBTSxFQUFFTixNQUpaO0FBS0ksZUFBTyxFQUFFRSxPQUxiO0FBTUksbUJBQVcsRUFBRUQsSUFOakI7QUFPSSxpQkFBUyxFQUFFRTtBQVBmLG1CQUNZRixJQUFJLENBQUMsSUFBRCxDQURoQixjQUMwQkssUUFBUSxDQUFDQyxJQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGlCO0FBQUEsS0FBcEI7QUFERCxtQkFERyxnQkFlSDtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBZko7QUFrQkgsQ0FqQ007S0FBTVQsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkcy5jNmQ4YTQ3ZTBiYjViMzVkNmEwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFjdGlvblR5cGUsIEJhZGdlRmllbGROYW1lLCBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgT25lQmFkZ2UgfSBmcm9tICcuL29uZUJhZGdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBCYWRnZUxpc3QgPSAoe1xyXG4gICAgZmllbGROYW1lLFxyXG4gICAgYWN0aW9uLFxyXG4gICAgaXRlbSxcclxuICAgIHNldEl0ZW0sXHJcbiAgICBzZXRTZWFyY2gsXHJcblxyXG59IDoge1xyXG4gICAgZmllbGROYW1lOiBCYWRnZUZpZWxkTmFtZTtcclxuICAgIGFjdGlvbjogQWN0aW9uVHlwZTtcclxuICAgIGl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7XHJcbiAgICBzZXRJdGVtID86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxuICAgIHNldFNlYXJjaD86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFN0cmluZz4+O1xyXG5cclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIGl0ZW1bZmllbGROYW1lXSAmJiBpdGVtW2ZpZWxkTmFtZV0ubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtpdGVtW2ZpZWxkTmFtZV0ubWFwKChvbmVCYWRnZSkgPT4gKFxyXG4gICAgICAgICAgICA8T25lQmFkZ2VcclxuICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbVsnaWQnXX0tJHtvbmVCYWRnZS5uYW1lfX1gfVxyXG4gICAgICAgICAgICAgICAgZmllbGROYW1lPXtmaWVsZE5hbWV9XHJcbiAgICAgICAgICAgICAgICBpdGVtPXtvbmVCYWRnZX1cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgKSA6IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+Tm9uZSBmb3VuZDwvcD5cclxuICAgICApO1xyXG4gICAgIFxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=