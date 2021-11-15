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
  var color = fieldName === _utils_types__WEBPACK_IMPORTED_MODULE_4__.BadgeFieldName.tags ? 'blue' : fieldName === _utils_types__WEBPACK_IMPORTED_MODULE_4__.BadgeFieldName.feeds ? 'green' : 'purple';
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
          setSearch('');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_5__.Plus, {
          className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
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
          lineNumber: 58,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs text-".concat(color, "-600 text-center"),
        children: [" ", item.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vbmVCYWRnZS50c3giXSwibmFtZXMiOlsiT25lQmFkZ2UiLCJpdGVtIiwiYWN0aW9uIiwiY3VycmVudEl0ZW0iLCJmaWVsZE5hbWUiLCJzZXRJdGVtIiwic2V0U2VhcmNoIiwiY29sb3IiLCJCYWRnZUZpZWxkTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJBY3Rpb25UeXBlIiwiY3VyclN0YXRlIiwiZmlsdGVyIiwibyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BY2xCO0FBQUEsTUFiRkMsSUFhRSxRQWJGQSxJQWFFO0FBQUEsTUFaRkMsTUFZRSxRQVpGQSxNQVlFO0FBQUEsTUFYRkMsV0FXRSxRQVhGQSxXQVdFO0FBQUEsTUFWRkMsU0FVRSxRQVZGQSxTQVVFO0FBQUEsTUFURkMsT0FTRSxRQVRGQSxPQVNFO0FBQUEsTUFSRkMsU0FRRSxRQVJGQSxTQVFFO0FBQ0YsTUFBTUMsS0FBSyxHQUNWSCxTQUFTLEtBQUtJLDZEQUFkLEdBQ0ssTUFETCxHQUVLSixTQUFTLEtBQUtJLDhEQUFkLEdBQ0EsT0FEQSxHQUVBLFFBTE47QUFNQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLE1BQVo7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBLDJCQUNJO0FBQU0sZUFBUyxrRUFBMkRLLEtBQTNELFVBQWY7QUFBQSxpQkFFQ0wsTUFBTSxLQUFLUyx3REFBWCxnQkFDRztBQUFLLGVBQU8sRUFBRSxtQkFBTTtBQUNoQk4saUJBQU8sQ0FBQyxVQUFDTyxTQUFEO0FBQUEsbURBQ0RBLFNBREMsZ0tBRUhSLFNBRkcsb0tBRWFRLFNBQVMsQ0FBQ1IsU0FBRCxDQUZ0QixzQkFFd0NILElBRnhDO0FBQUEsV0FBRCxDQUFQO0FBSUFLLG1CQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0gsU0FORDtBQUFBLCtCQVFJLDhEQUFDLHNDQUFEO0FBQU0sbUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILEdBV0csSUFiSixFQWVJSixNQUFNLEtBQUtTLDJEQUFYLGdCQUNJO0FBQ0MsZUFBTyxFQUFFLG1CQUFNO0FBQ1pOLGlCQUFPLENBQUMsVUFBQ08sU0FBRDtBQUFBLG1EQUNEQSxTQURDLGdLQUVIUixTQUZHLEVBRVNRLFNBQVMsQ0FBQ1IsU0FBRCxDQUFULENBQXFCUyxNQUFyQixDQUE0QixVQUFDQyxDQUFEO0FBQUEscUJBQU9iLElBQUksQ0FBQ2MsSUFBTCxLQUFjRCxDQUFDLENBQUNDLElBQXZCO0FBQUEsYUFBNUIsQ0FGVDtBQUFBLFdBQUQsQ0FBUDtBQUtILFNBUEQ7QUFBQSwrQkFTQSw4REFBQyx1Q0FBRDtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixHQVlJLElBM0JSLGVBNkJBO0FBQUcsaUJBQVMseUJBQWtCUixLQUFsQixxQkFBWjtBQUFBLHdCQUF5RE4sSUFBSSxDQUFDYyxJQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0NILENBN0RNO0tBQU1mLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVuZGxlcy4wODkwYzliMzdjMThkNzUxYWVkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdW5kbGUsIEJ1bmRsZVRhZywgRmVlZFRhZyB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQge0FjdGlvblR5cGUsIEJhZGdlRmllbGROYW1lLCBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3R9IGZyb20gJy4uL3V0aWxzL3R5cGVzJ1xyXG5pbXBvcnQgeyBNaW51cywgUGx1cyB9IGZyb20gXCIuL3N2Z1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9uZUJhZGdlID0gKHtcclxuICAgIGl0ZW0sXHJcbiAgICBhY3Rpb24sXHJcbiAgICBjdXJyZW50SXRlbSxcclxuICAgIGZpZWxkTmFtZSxcclxuICAgIHNldEl0ZW0sXHJcbiAgICBzZXRTZWFyY2gsXHJcbiAgICAgfSA6IHtcclxuICAgaXRlbTogRmVlZFRhZyB8IEJ1bmRsZVRhZyB8RmVlZE9iamVjdFxyXG4gICBhY3Rpb246IEFjdGlvblR5cGU7XHJcbiAgIGN1cnJlbnRJdGVtID86IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3RcclxuICAgZmllbGROYW1lOiBCYWRnZUZpZWxkTmFtZTtcclxuICAgc2V0SXRlbT86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PlxyXG4gICBzZXRTZWFyY2g/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTdHJpbmc+PjtcclxufSkgPT4ge1xyXG4gICAgY29uc3QgY29sb3IgPVxyXG4gICAgIGZpZWxkTmFtZSA9PT0gQmFkZ2VGaWVsZE5hbWUudGFnc1xyXG4gICAgICAgID8gJ2JsdWUnXHJcbiAgICAgICAgOiBmaWVsZE5hbWUgPT09IEJhZGdlRmllbGROYW1lLmZlZWRzXHJcbiAgICAgICAgPyAnZ3JlZW4nXHJcbiAgICAgICAgOiAncHVycGxlJ1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1zbSAgIHB5LTIgcHgtMiByb3VuZGVkLWxnIGJnLSR7Y29sb3J9LTIwMCBgfT5cclxuXHJcbiAgICAgICAgICAgIHthY3Rpb24gPT09IEFjdGlvblR5cGUuQUREID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbSgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBbLi4uY3VyclN0YXRlW2ZpZWxkTmFtZV0sIHsgLi4uaXRlbSB9XSxcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKCcnKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWdyYXktNTAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID09PSBBY3Rpb25UeXBlLkNSRUFURSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbSgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkTmFtZV06IGN1cnJTdGF0ZVtmaWVsZE5hbWVdLmZpbHRlcigobykgPT4gaXRlbS5uYW1lICE9PSBvLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1pbnVzIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1ncmF5LTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQteHMgdGV4dC0ke2NvbG9yfS02MDAgdGV4dC1jZW50ZXJgfT4ge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9