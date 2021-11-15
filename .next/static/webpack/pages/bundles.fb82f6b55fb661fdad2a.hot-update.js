self["webpackHotUpdate_N_E"]("pages/bundles",{

/***/ "./components/oneBadge.tsx":
/*!*********************************!*\
  !*** ./components/oneBadge.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneBadge": function() { return /* binding */ OneBadge; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\oneBadge.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var OneBadge = function OneBadge(_ref) {
  var item = _ref.item,
      action = _ref.action,
      currentItem = _ref.currentItem,
      fieldName = _ref.fieldName,
      setItem = _ref.setItem,
      setSearch = _ref.setSearch;
  var color = fieldName === _utils_types__WEBPACK_IMPORTED_MODULE_4__.BadgeFieldName.tags ? 'blue' : _utils_types__WEBPACK_IMPORTED_MODULE_4__.BadgeFieldName.feeds ? 'green' : 'purple';
  console.log(action);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "inline-block align-middle",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "flex justify-center text-sm   py-2 px-2 rounded-lg bg-".concat(color, "-200 "),
      children: [action === _utils_types__WEBPACK_IMPORTED_MODULE_4__.ActionType.ADD ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: function onClick() {
          setItem(function (currState) {
            return _objectSpread(_objectSpread({}, currState), {}, (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, fieldName, [].concat((0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(currState[fieldName]), [_objectSpread({}, item)])));
          });
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_5__.Plus, {
          className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this) : null, action === _utils_types__WEBPACK_IMPORTED_MODULE_4__.ActionType.CREATE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: function onClick() {
          setItem(function (currState) {
            return _objectSpread(_objectSpread({}, currState), {}, (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, fieldName, currState[fieldName].filter(function (o) {
              return item.name !== o.name;
            })));
          });
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_5__.Minus, {
          className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs text-".concat(color, "-600 text-center"),
        children: [" ", item.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, _this);
};
_c = OneBadge;

var _c;

$RefreshReg$(_c, "OneBadge");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vbmVCYWRnZS50c3giXSwibmFtZXMiOlsiT25lQmFkZ2UiLCJpdGVtIiwiYWN0aW9uIiwiY3VycmVudEl0ZW0iLCJmaWVsZE5hbWUiLCJzZXRJdGVtIiwic2V0U2VhcmNoIiwiY29sb3IiLCJCYWRnZUZpZWxkTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJBY3Rpb25UeXBlIiwiY3VyclN0YXRlIiwiZmlsdGVyIiwibyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BZWxCO0FBQUEsTUFkRkMsSUFjRSxRQWRGQSxJQWNFO0FBQUEsTUFiRkMsTUFhRSxRQWJGQSxNQWFFO0FBQUEsTUFaRkMsV0FZRSxRQVpGQSxXQVlFO0FBQUEsTUFYRkMsU0FXRSxRQVhGQSxTQVdFO0FBQUEsTUFWRkMsT0FVRSxRQVZGQSxPQVVFO0FBQUEsTUFURkMsU0FTRSxRQVRGQSxTQVNFO0FBQ0YsTUFBTUMsS0FBSyxHQUFHSCxTQUFTLEtBQUtJLDZEQUFkLEdBQW9DLE1BQXBDLEdBQTZDQSw4REFBQSxHQUF1QixPQUF2QixHQUFpQyxRQUE1RjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsTUFBWjtBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUEsMkJBQ0k7QUFBTSxlQUFTLGtFQUEyREssS0FBM0QsVUFBZjtBQUFBLGlCQUVDTCxNQUFNLEtBQUtTLHdEQUFYLGdCQUNHO0FBQUssZUFBTyxFQUFFLG1CQUFNO0FBQ2hCTixpQkFBTyxDQUFDLFVBQUNPLFNBQUQ7QUFBQSxtREFDREEsU0FEQyxnS0FFSFIsU0FGRyxvS0FFYVEsU0FBUyxDQUFDUixTQUFELENBRnRCLHNCQUV3Q0gsSUFGeEM7QUFBQSxXQUFELENBQVA7QUFJSCxTQUxEO0FBQUEsK0JBT0ksOERBQUMsc0NBQUQ7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREgsR0FVRyxJQVpKLEVBY0lDLE1BQU0sS0FBS1MsMkRBQVgsZ0JBQ0k7QUFDQyxlQUFPLEVBQUUsbUJBQU07QUFDWk4saUJBQU8sQ0FBQyxVQUFDTyxTQUFEO0FBQUEsbURBQ0RBLFNBREMsZ0tBRUhSLFNBRkcsRUFFU1EsU0FBUyxDQUFDUixTQUFELENBQVQsQ0FBcUJTLE1BQXJCLENBQTRCLFVBQUNDLENBQUQ7QUFBQSxxQkFBT2IsSUFBSSxDQUFDYyxJQUFMLEtBQWNELENBQUMsQ0FBQ0MsSUFBdkI7QUFBQSxhQUE1QixDQUZUO0FBQUEsV0FBRCxDQUFQO0FBS0gsU0FQRDtBQUFBLCtCQVNBLDhEQUFDLHVDQUFEO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEdBWUksSUExQlIsZUE0QkE7QUFBRyxpQkFBUyx5QkFBa0JSLEtBQWxCLHFCQUFaO0FBQUEsd0JBQXlETixJQUFJLENBQUNjLElBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtQ0gsQ0F4RE07S0FBTWYsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idW5kbGVzLmZiODJmNmI1NWZiNjYxZmRhZDJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1bmRsZSwgQnVuZGxlVGFnLCBGZWVkVGFnIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB7QWN0aW9uVHlwZSwgQmFkZ2VGaWVsZE5hbWUsIEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnXHJcbmltcG9ydCB7IE1pbnVzLCBQbHVzIH0gZnJvbSBcIi4vc3ZnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT25lQmFkZ2UgPSAoe1xyXG4gICAgaXRlbSxcclxuICAgIGFjdGlvbixcclxuICAgIGN1cnJlbnRJdGVtLFxyXG4gICAgZmllbGROYW1lLFxyXG4gICAgc2V0SXRlbSxcclxuICAgIHNldFNlYXJjaCxcclxuXHJcbiAgICAgfSA6IHtcclxuICAgaXRlbTogRmVlZFRhZyB8IEJ1bmRsZVRhZyB8RmVlZE9iamVjdFxyXG4gICBhY3Rpb246IEFjdGlvblR5cGU7XHJcbiAgIGN1cnJlbnRJdGVtID86IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3RcclxuICAgZmllbGROYW1lOiBCYWRnZUZpZWxkTmFtZTtcclxuICAgc2V0SXRlbT86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PlxyXG4gICBzZXRTZWFyY2g/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTdHJpbmc+PjtcclxufSkgPT4ge1xyXG4gICAgY29uc3QgY29sb3IgPSBmaWVsZE5hbWUgPT09IEJhZGdlRmllbGROYW1lLnRhZ3MgPyAnYmx1ZScgOiBCYWRnZUZpZWxkTmFtZS5mZWVkcyA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1zbSAgIHB5LTIgcHgtMiByb3VuZGVkLWxnIGJnLSR7Y29sb3J9LTIwMCBgfT5cclxuXHJcbiAgICAgICAgICAgIHthY3Rpb24gPT09IEFjdGlvblR5cGUuQUREID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbSgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBbLi4uY3VyclN0YXRlW2ZpZWxkTmFtZV0sIHsgLi4uaXRlbSB9XSxcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbHVzIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1ncmF5LTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gQWN0aW9uVHlwZS5DUkVBVEUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW0oKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBjdXJyU3RhdGVbZmllbGROYW1lXS5maWx0ZXIoKG8pID0+IGl0ZW0ubmFtZSAhPT0gby5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNaW51cyBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtZ3JheS01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXhzIHRleHQtJHtjb2xvcn0tNjAwIHRleHQtY2VudGVyYH0+IHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==