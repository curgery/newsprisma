self["webpackHotUpdate_N_E"]("pages/bundles",{

/***/ "./components/searchItems.tsx":
/*!************************************!*\
  !*** ./components/searchItems.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchItems": function() { return /* binding */ SearchItems; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\searchItems.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var SearchItems = function SearchItems(_ref) {
  _s();

  var currentItem = _ref.currentItem,
      setItem = _ref.setItem,
      queryName = _ref.queryName,
      query = _ref.query,
      fieldName = _ref.fieldName;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      search = _useState[0],
      setSearch = _useState[1];

  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useLazyQuery)(query, {
    fetchPolicy: 'network-only'
  }),
      _useLazyQuery2 = (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useLazyQuery, 2),
      findItemsQuery = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      loading = _useLazyQuery2$.loading,
      data = _useLazyQuery2$.data,
      called = _useLazyQuery2$.called;

  console.log(loading, data, called);

  var fetchedItems = lodash__WEBPACK_IMPORTED_MODULE_8__.get(data, queryName);

  var filtFindItems = fetchedItems ? fetchedItems.filter(function (oneItem) {
    return !currentItem[fieldName].map(function (o) {
      return o.name;
    }).includes(oneItem.name);
  }) : [];
  var matchCurrent = filtFindItems.filter(function (o) {
    return o.name === search;
  });
  var matchList = currentItem[fieldName].filter(function (o) {
    return o.name === search;
  });
  var filtFindItemsWithAdd = matchCurrent.length === 0 && matchList.length === 0 && queryName !== 'findFeeds' ? [].concat((0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(filtFindItems), [{
    name: search
  }]) : filtFindItems;

  var dummyNewItem = _objectSpread(_objectSpread({}, currentItem), {}, (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, fieldName, filtFindItemsWithAdd));

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: [loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_7__.Spin, {
        className: "h-6 text-gray-500 animate-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_7__.Search, {
        className: "mt-3 mr-2 w-6 h-6 text-gray-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 18
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "border-4 rounded w-full py-2 px-3",
        value: search,
        onKeyDown: function onKeyDown(e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            setItem(function (currState) {
              return _objectSpread(_objectSpread({}, currState), {}, (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, fieldName, [].concat((0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(currState[fieldName]), [_objectSpread({}, dummyNewItem[fieldName][0])])));
            });
            setSearch(function () {
              return '';
            });
          }
        },
        onChange: function onChange(e) {
          e.persist();

          if (e.target.value !== search) {
            setSearch(function () {
              return e.target.value;
            });
            findItemsQuery({
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
        lineNumber: 49,
        columnNumber: 18
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-3 gap-2 flex m-2",
      children: search !== '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_6__.BadgeList, {
        fieldName: fieldName,
        action: _utils_types__WEBPACK_IMPORTED_MODULE_5__.ActionType.ADD,
        setItem: setItem,
        item: dummyNewItem,
        setSearch: setSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }, _this) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-gray-400",
        children: "No matches"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }, _this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, _this);
};

_s(SearchItems, "pjFfCce/aFpyrsw/5lYxpzJkhSs=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useLazyQuery];
});

_c = SearchItems;

var _c;

$RefreshReg$(_c, "SearchItems");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2hJdGVtcy50c3giXSwibmFtZXMiOlsiU2VhcmNoSXRlbXMiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJxdWVyeU5hbWUiLCJxdWVyeSIsImZpZWxkTmFtZSIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbXNRdWVyeSIsImxvYWRpbmciLCJkYXRhIiwiY2FsbGVkIiwiY29uc29sZSIsImxvZyIsImZldGNoZWRJdGVtcyIsIl8iLCJmaWx0RmluZEl0ZW1zIiwiZmlsdGVyIiwib25lSXRlbSIsIm1hcCIsIm8iLCJuYW1lIiwiaW5jbHVkZXMiLCJtYXRjaEN1cnJlbnQiLCJtYXRjaExpc3QiLCJmaWx0RmluZEl0ZW1zV2l0aEFkZCIsImxlbmd0aCIsImR1bW15TmV3SXRlbSIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJTdGF0ZSIsInBlcnNpc3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZhcmlhYmxlcyIsIkFjdGlvblR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQU9yQjtBQUFBOztBQUFBLE1BUHVCQyxXQU92QixRQVB1QkEsV0FPdkI7QUFBQSxNQVBvQ0MsT0FPcEMsUUFQb0NBLE9BT3BDO0FBQUEsTUFQNkNDLFNBTzdDLFFBUDZDQSxTQU83QztBQUFBLE1BUHdEQyxLQU94RCxRQVB3REEsS0FPeEQ7QUFBQSxNQVArREMsU0FPL0QsUUFQK0RBLFNBTy9EOztBQUFBLGtCQUMwQkMsK0NBQVEsQ0FBQyxFQUFELENBRGxDO0FBQUEsTUFDS0MsTUFETDtBQUFBLE1BQ2FDLFNBRGI7O0FBQUEsc0JBRWtEQyw0REFBWSxDQUFDTCxLQUFELEVB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TSxFQUFFd0IsQ0FBQyxDQUFDSyxNQUFGLENBQVNDO0FBQWxCO0FBQVI7QUFERCxhQUFELENBQWQ7QUFHSDtBQUNKO0FBdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQWdDSTtBQUFLLGVBQVMsRUFBQyxpQ0FBZjtBQUFBLGdCQUNLOUIsTUFBTSxLQUFLLEVBQVgsZ0JBQ0csOERBQUMsaURBQUQ7QUFDSSxpQkFBUyxFQUFFRixTQURmO0FBRUksY0FBTSxFQUFFa0Msd0RBRlo7QUFHSSxlQUFPLEVBQUVyQyxPQUhiO0FBSUksWUFBSSxFQUFFNEIsWUFKVjtBQUtJLGlCQUFTLEVBQUV0QjtBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESCxHQVFHTSxNQUFNLGdCQUNOO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE0sR0FFUDtBQVhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFnREgsQ0FqRk07O0dBQU1kLFc7VUFTMkNTLHdEOzs7S0FUM0NULFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVuZGxlcy5lYjhmYTcwYjU1Yjg1M2NlMmFjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gXCJncmFwaHFsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFjdGlvblR5cGUsIEJhZGdlRmllbGROYW1lLCBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QsIFNlYXJjaFF1ZXJ5TmFtZSB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiO1xyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tIFwiLi9iYWRnZUxpc3RcIjtcclxuaW1wb3J0IHsgU2VhcmNoLCBTcGluIH0gZnJvbSBcIi4vc3ZnXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJdGVtcyA9ICh7Y3VycmVudEl0ZW0sIHNldEl0ZW0sIHF1ZXJ5TmFtZSwgcXVlcnksIGZpZWxkTmFtZX0gOiB7XHJcblxyXG4gICAgY3VycmVudEl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7XHJcbiAgICBzZXRJdGVtOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj47XHJcbiAgICBxdWVyeU5hbWU6IFNlYXJjaFF1ZXJ5TmFtZTtcclxuICAgIHF1ZXJ5OiBEb2N1bWVudE5vZGU7XHJcbiAgICBmaWVsZE5hbWU6IEJhZGdlRmllbGROYW1lO1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ZpbmRJdGVtc1F1ZXJ5LCB7IGxvYWRpbmcsIGRhdGEsIGNhbGxlZCB9XSA9IHVzZUxhenlRdWVyeShxdWVyeSwgeyBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXHJcbn0pXHJcblxyXG5jb25zb2xlLmxvZyhsb2FkaW5nLCBkYXRhLCBjYWxsZWQpXHJcblxyXG5jb25zdCBmZXRjaGVkSXRlbXMgPSBfLmdldChkYXRhLCBxdWVyeU5hbWUpO1xyXG5jb25zdCBmaWx0RmluZEl0ZW1zID0gZmV0Y2hlZEl0ZW1zID8gZmV0Y2hlZEl0ZW1zLmZpbHRlcigob25lSXRlbSkgPT4gIWN1cnJlbnRJdGVtW2ZpZWxkTmFtZV0ubWFwKChvKSA9PiBvLm5hbWUpLmluY2x1ZGVzKG9uZUl0ZW0ubmFtZSksKSA6IFtdO1xyXG5cclxuY29uc3QgbWF0Y2hDdXJyZW50ID0gZmlsdEZpbmRJdGVtcy5maWx0ZXIobyA9PiBvLm5hbWUgPT09IHNlYXJjaCk7XHJcbmNvbnN0IG1hdGNoTGlzdCA9IGN1cnJlbnRJdGVtW2ZpZWxkTmFtZV0uZmlsdGVyKChvKSA9PiBvLm5hbWUgPT09IHNlYXJjaClcclxuXHJcbmNvbnN0IGZpbHRGaW5kSXRlbXNXaXRoQWRkID1cclxubWF0Y2hDdXJyZW50Lmxlbmd0aCA9PT0gMCAmJlxyXG5tYXRjaExpc3QubGVuZ3RoID09PSAwICYmXHJcbnF1ZXJ5TmFtZSAhPT0gJ2ZpbmRGZWVkcydcclxuICA/IFsuLi5maWx0RmluZEl0ZW1zLCB7IG5hbWU6IHNlYXJjaCB9XVxyXG4gIDogZmlsdEZpbmRJdGVtcztcclxuXHJcblxyXG5jb25zdCBkdW1teU5ld0l0ZW0gPSB7XHJcbiAgICAuLi5jdXJyZW50SXRlbSxcclxuICAgIFtmaWVsZE5hbWVdOiBmaWx0RmluZEl0ZW1zV2l0aEFkZCxcclxufTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8U3BpbiBjbGFzc05hbWU9XCJoLTYgdGV4dC1ncmF5LTUwMCBhbmltYXRlLXNwaW5cIi8+KSA6KFxyXG4gICAgICAgICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwibXQtMyBtci0yIHctNiBoLTYgdGV4dC1ncmF5LTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYm9yZGVyLTQgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbSgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlW2ZpZWxkTmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5kdW1teU5ld0l0ZW1bZmllbGROYW1lXVswXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKCgpID0+ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gc2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2goKCkgPT4gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmluZEl0ZW1zUXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgZGF0YToge3NlYXJjaDogZS50YXJnZXQudmFsdWUgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC0yIGZsZXggbS0yXCI+XHJcbiAgICAgICAgICAgICAgICB7c2VhcmNoICE9PSAnJyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17ZmllbGROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQUREfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtkdW1teU5ld0l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaD17c2V0U2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IGNhbGxlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+Tm8gbWF0Y2hlczwvcD5cclxuICAgICAgICAgICAgICAgICkgOm51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==