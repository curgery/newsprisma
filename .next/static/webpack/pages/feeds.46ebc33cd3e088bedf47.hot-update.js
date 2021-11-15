self["webpackHotUpdate_N_E"]("pages/feeds",{

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
        lineNumber: 64,
        columnNumber: 21
      }, _this) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-gray-400",
        children: "No matches"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }, _this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2hJdGVtcy50c3giXSwibmFtZXMiOlsiU2VhcmNoSXRlbXMiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJxdWVyeU5hbWUiLCJxdWVyeSIsImZpZWxkTmFtZSIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbXNRdWVyeSIsImxvYWRpbmciLCJkYXRhIiwiY2FsbGVkIiwiY29uc29sZSIsImxvZyIsImZldGNoZWRJdGVtcyIsIl8iLCJmaWx0RmluZEl0ZW1zIiwiZmlsdGVyIiwib25lSXRlbSIsIm1hcCIsIm8iLCJuYW1lIiwiaW5jbHVkZXMiLCJtYXRjaEN1cnJlbnQiLCJtYXRjaExpc3QiLCJmaWx0RmluZEl0ZW1zV2l0aEFkZCIsImxlbmd0aCIsImR1bW15TmV3SXRlbSIsImUiLCJwZXJzaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJ2YXJpYWJsZXMiLCJBY3Rpb25UeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FPckI7QUFBQTs7QUFBQSxNQVB1QkMsV0FPdkIsUUFQdUJBLFdBT3ZCO0FBQUEsTUFQb0NDLE9BT3BDLFFBUG9DQSxPQU9wQztBQUFBLE1BUDZDQyxTQU83QyxRQVA2Q0EsU0FPN0M7QUFBQSxNQVB3REMsS0FPeEQsUUFQd0RBLEtBT3hEO0FBQUEsTUFQK0RDLFNBTy9ELFFBUCtEQSxTQU8vRDs7QUFBQSxrQkFDMEJDLCtDQUFRLENBQUMsRUFBRCxDQURsQztBQUFBLE1BQ0tDLE1BREw7QUFBQSxNQUNhQyxTQURiOztBQUFBLHNCQUVrREMsNERBQVksQ0FBQ0wsS0FBRCxFQUFRO0FBQUVNLGVBQVcsRUFBRTtBQUFmLEdBQVIsQ0FGOUQ7QUFBQTtBQUFBLE1BRUtDLGNBRkw7QUFBQTtBQUFBLE1BRXVCQyxPQUZ2QixtQkFFdUJBLE9BRnZCO0FBQUEsTUFFZ0NDLElBRmhDLG1CQUVnQ0EsSUFGaEM7QUFBQSxNQUVzQ0MsTUFGdEMsbUJBRXNDQSxNQUZ0Qzs7QUFLTkMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxNQUEzQjs7QUFFQSxNQUFNRyxZQUFZLEdBQUdDLHVDQUFBLENBQU1MLElBQU4sRUFBWVYsU0FBWixDQUFyQjs7QUFDQSxNQUFNZ0IsYUFBYSxHQUFHRixZQUFZLEdBQUdBLFlBQVksQ0FBQ0csTUFBYixDQUFvQixVQUFDQyxPQUFEO0FBQUEsV0FBYSxDQUFDcEIsV0FBVyxDQUFDSSxTQUFELENBQVgsQ0FBdUJpQixHQUF2QixDQUEyQixVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxJQUFUO0FBQUEsS0FBM0IsRUFBMENDLFFBQTFDLENBQW1ESixPQUFPLENBQUNHLElBQTNELENBQWQ7QUFBQSxHQUFwQixDQUFILEdBQTBHLEVBQTVJO0FBRUEsTUFBTUUsWUFBWSxHQUFHUCxhQUFhLENBQUNDLE1BQWQsQ0FBcUIsVUFBQUcsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXakIsTUFBZjtBQUFBLEdBQXRCLENBQXJCO0FBQ0EsTUFBTW9CLFNBQVMsR0FBRzFCLFdBQVcsQ0FBQ0ksU0FBRCxDQUFYLENBQXVCZSxNQUF2QixDQUE4QixVQUFDRyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxJQUFGLEtBQVdqQixNQUFsQjtBQUFBLEdBQTlCLENBQWxCO0FBRUEsTUFBTXFCLG9CQUFvQixHQUMxQkYsWUFBWSxDQUFDRyxNQUFiLEtBQXdCLENBQXhCLElBQ0FGLFNBQVMsQ0FBQ0UsTUFBVixLQUFxQixDQURyQixJQUVBMUIsU0FBUyxLQUFLLFdBRmQscUtBR1FnQixhQUhSLElBR3VCO0FBQUVLLFFBQUksRUFBRWpCO0FBQVIsR0FIdkIsS0FJSVksYUFMSjs7QUFRQSxNQUFNVyxZQUFZLG1DQUNYN0IsV0FEVyxnS0FFYkksU0FGYSxFQUVEdUIsb0JBRkMsRUFBbEI7O0FBS0ksc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsaUJBQ0toQixPQUFPLGdCQUNSLDhEQUFDLHNDQUFEO0FBQU0saUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFEsZ0JBRVAsOERBQUMsd0NBQUQ7QUFBUSxpQkFBUyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFITCxlQUtLO0FBQU8saUJBQVMsRUFBQyxtQ0FBakI7QUFDQyxhQUFLLEVBQUVMLE1BRFI7QUFFRSxnQkFBUSxFQUFFLGtCQUFDd0IsQ0FBRCxFQUFPO0FBQ2ZBLFdBQUMsQ0FBQ0MsT0FBRjs7QUFDQSxjQUFJRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxLQUFtQjNCLE1BQXZCLEVBQStCO0FBQzNCQyxxQkFBUyxDQUFDO0FBQUEscUJBQU11QixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBZjtBQUFBLGFBQUQsQ0FBVDtBQUNBdkIsMEJBQWMsQ0FBQztBQUNWd0IsdUJBQVMsRUFBRTtBQUFFdEIsb0JBQUksRUFBRTtBQUFDTix3QkFBTSxFQUFFd0IsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQWxCO0FBQVI7QUFERCxhQUFELENBQWQ7QUFHSDtBQUNKO0FBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBbUJJO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsZ0JBQ0szQixNQUFNLEtBQUssRUFBWCxnQkFDRyw4REFBQyxpREFBRDtBQUNJLGlCQUFTLEVBQUVGLFNBRGY7QUFFSSxjQUFNLEVBQUUrQix3REFGWjtBQUdJLGVBQU8sRUFBRWxDLE9BSGI7QUFJSSxZQUFJLEVBQUU0QixZQUpWO0FBS0ksaUJBQVMsRUFBRXRCO0FBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILEdBUUdNLE1BQU0sZ0JBQ047QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETSxHQUVQO0FBWFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1DSCxDQXBFTTs7R0FBTWQsVztVQVMyQ1Msd0Q7OztLQVQzQ1QsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkcy40NmViYzMzY2QzZTA4OGJlZGY0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gXCJncmFwaHFsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFjdGlvblR5cGUsIEJhZGdlRmllbGROYW1lLCBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QsIFNlYXJjaFF1ZXJ5TmFtZSB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiO1xyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tIFwiLi9iYWRnZUxpc3RcIjtcclxuaW1wb3J0IHsgU2VhcmNoLCBTcGluIH0gZnJvbSBcIi4vc3ZnXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJdGVtcyA9ICh7Y3VycmVudEl0ZW0sIHNldEl0ZW0sIHF1ZXJ5TmFtZSwgcXVlcnksIGZpZWxkTmFtZX0gOiB7XHJcblxyXG4gICAgY3VycmVudEl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7XHJcbiAgICBzZXRJdGVtOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj47XHJcbiAgICBxdWVyeU5hbWU6IFNlYXJjaFF1ZXJ5TmFtZTtcclxuICAgIHF1ZXJ5OiBEb2N1bWVudE5vZGU7XHJcbiAgICBmaWVsZE5hbWU6IEJhZGdlRmllbGROYW1lO1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ZpbmRJdGVtc1F1ZXJ5LCB7IGxvYWRpbmcsIGRhdGEsIGNhbGxlZCB9XSA9IHVzZUxhenlRdWVyeShxdWVyeSwgeyBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXHJcbn0pXHJcblxyXG5jb25zb2xlLmxvZyhsb2FkaW5nLCBkYXRhLCBjYWxsZWQpXHJcblxyXG5jb25zdCBmZXRjaGVkSXRlbXMgPSBfLmdldChkYXRhLCBxdWVyeU5hbWUpO1xyXG5jb25zdCBmaWx0RmluZEl0ZW1zID0gZmV0Y2hlZEl0ZW1zID8gZmV0Y2hlZEl0ZW1zLmZpbHRlcigob25lSXRlbSkgPT4gIWN1cnJlbnRJdGVtW2ZpZWxkTmFtZV0ubWFwKChvKSA9PiBvLm5hbWUpLmluY2x1ZGVzKG9uZUl0ZW0ubmFtZSksKSA6IFtdO1xyXG5cclxuY29uc3QgbWF0Y2hDdXJyZW50ID0gZmlsdEZpbmRJdGVtcy5maWx0ZXIobyA9PiBvLm5hbWUgPT09IHNlYXJjaCk7XHJcbmNvbnN0IG1hdGNoTGlzdCA9IGN1cnJlbnRJdGVtW2ZpZWxkTmFtZV0uZmlsdGVyKChvKSA9PiBvLm5hbWUgPT09IHNlYXJjaClcclxuXHJcbmNvbnN0IGZpbHRGaW5kSXRlbXNXaXRoQWRkID1cclxubWF0Y2hDdXJyZW50Lmxlbmd0aCA9PT0gMCAmJlxyXG5tYXRjaExpc3QubGVuZ3RoID09PSAwICYmXHJcbnF1ZXJ5TmFtZSAhPT0gJ2ZpbmRGZWVkcydcclxuICA/IFsuLi5maWx0RmluZEl0ZW1zLCB7IG5hbWU6IHNlYXJjaCB9XVxyXG4gIDogZmlsdEZpbmRJdGVtcztcclxuXHJcblxyXG5jb25zdCBkdW1teU5ld0l0ZW0gPSB7XHJcbiAgICAuLi5jdXJyZW50SXRlbSxcclxuICAgIFtmaWVsZE5hbWVdOiBmaWx0RmluZEl0ZW1zV2l0aEFkZCxcclxufTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8U3BpbiBjbGFzc05hbWU9XCJoLTYgdGV4dC1ncmF5LTUwMCBhbmltYXRlLXNwaW5cIi8+KSA6KFxyXG4gICAgICAgICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwibXQtMyBtci0yIHctNiBoLTYgdGV4dC1ncmF5LTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYm9yZGVyLTQgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBzZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaCgoKSA9PiBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kSXRlbXNRdWVyeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBkYXRhOiB7c2VhcmNoOiBlLnRhcmdldC52YWx1ZSB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgZmxleCBtLTJcIj5cclxuICAgICAgICAgICAgICAgIHtzZWFyY2ggIT09ICcnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtmaWVsZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5BRER9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2R1bW15TmV3SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogY2FsbGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj5ObyBtYXRjaGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6bnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9