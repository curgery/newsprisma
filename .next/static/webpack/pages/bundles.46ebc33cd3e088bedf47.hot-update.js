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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2hJdGVtcy50c3giXSwibmFtZXMiOlsiU2VhcmNoSXRlbXMiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJxdWVyeU5hbWUiLCJxdWVyeSIsImZpZWxkTmFtZSIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbXNRdWVyeSIsImxvYWRpbmciLCJkYXRhIiwiY2FsbGVkIiwiY29uc29sZSIsImxvZyIsImZldGNoZWRJdGVtcyIsIl8iLCJmaWx0RmluZEl0ZW1zIiwiZmlsdGVyIiwib25lSXRlbSIsIm1hcCIsIm8iLCJuYW1lIiwiaW5jbHVkZXMiLCJtYXRjaEN1cnJlbnQiLCJtYXRjaExpc3QiLCJmaWx0RmluZEl0ZW1zV2l0aEFkZCIsImxlbmd0aCIsImR1bW15TmV3SXRlbSIsImUiLCJwZXJzaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJ2YXJpYWJsZXMiLCJBY3Rpb25UeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FPckI7QUFBQTs7QUFBQSxNQVB1QkMsV0FPdkIsUUFQdUJBLFdBT3ZCO0FBQUEsTUFQb0NDLE9BT3BDLFFBUG9DQSxPQU9wQztBQUFBLE1BUDZDQyxTQU83QyxRQVA2Q0EsU0FPN0M7QUFBQSxNQVB3REMsS0FPeEQsUUFQd0RBLEtBT3hEO0FBQUEsTUFQK0RDLFNBTy9ELFFBUCtEQSxTQU8vRDs7QUFBQSxrQkFDMEJDLCtDQUFRLENBQUMsRUFBRCxDQURsQztBQUFBLE1BQ0tDLE1BREw7QUFBQSxNQUNhQyxTQURiOztBQUFBLHNCQUVrREMsNERBQVksQ0FBQ0wsS0FBRCxFQUFRO0FBQUVNLGVBQVcsRUFBRTtBQUFmLEdBQVIsQ0FGOUQ7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Q047QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETSxHQUVQO0FBWFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1DSCxDQXBFTTs7R0FBTWQsVztVQVMyQ1Msd0Q7OztLQVQzQ1QsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idW5kbGVzLjQ2ZWJjMzNjZDNlMDg4YmVkZjQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSBcImdyYXBocWxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSwgQmFkZ2VGaWVsZE5hbWUsIEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCwgU2VhcmNoUXVlcnlOYW1lIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCI7XHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gXCIuL2JhZGdlTGlzdFwiO1xyXG5pbXBvcnQgeyBTZWFyY2gsIFNwaW4gfSBmcm9tIFwiLi9zdmdcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaEl0ZW1zID0gKHtjdXJyZW50SXRlbSwgc2V0SXRlbSwgcXVlcnlOYW1lLCBxdWVyeSwgZmllbGROYW1lfSA6IHtcclxuXHJcbiAgICBjdXJyZW50SXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDtcclxuICAgIHNldEl0ZW06IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxuICAgIHF1ZXJ5TmFtZTogU2VhcmNoUXVlcnlOYW1lO1xyXG4gICAgcXVlcnk6IERvY3VtZW50Tm9kZTtcclxuICAgIGZpZWxkTmFtZTogQmFkZ2VGaWVsZE5hbWU7XHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZmluZEl0ZW1zUXVlcnksIHsgbG9hZGluZywgZGF0YSwgY2FsbGVkIH1dID0gdXNlTGF6eVF1ZXJ5KHF1ZXJ5LCB7IGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcclxufSlcclxuXHJcbmNvbnNvbGUubG9nKGxvYWRpbmcsIGRhdGEsIGNhbGxlZClcclxuXHJcbmNvbnN0IGZldGNoZWRJdGVtcyA9IF8uZ2V0KGRhdGEsIHF1ZXJ5TmFtZSk7XHJcbmNvbnN0IGZpbHRGaW5kSXRlbXMgPSBmZXRjaGVkSXRlbXMgPyBmZXRjaGVkSXRlbXMuZmlsdGVyKChvbmVJdGVtKSA9PiAhY3VycmVudEl0ZW1bZmllbGROYW1lXS5tYXAoKG8pID0+IG8ubmFtZSkuaW5jbHVkZXMob25lSXRlbS5uYW1lKSwpIDogW107XHJcblxyXG5jb25zdCBtYXRjaEN1cnJlbnQgPSBmaWx0RmluZEl0ZW1zLmZpbHRlcihvID0+IG8ubmFtZSA9PT0gc2VhcmNoKTtcclxuY29uc3QgbWF0Y2hMaXN0ID0gY3VycmVudEl0ZW1bZmllbGROYW1lXS5maWx0ZXIoKG8pID0+IG8ubmFtZSA9PT0gc2VhcmNoKVxyXG5cclxuY29uc3QgZmlsdEZpbmRJdGVtc1dpdGhBZGQgPVxyXG5tYXRjaEN1cnJlbnQubGVuZ3RoID09PSAwICYmXHJcbm1hdGNoTGlzdC5sZW5ndGggPT09IDAgJiZcclxucXVlcnlOYW1lICE9PSAnZmluZEZlZWRzJ1xyXG4gID8gWy4uLmZpbHRGaW5kSXRlbXMsIHsgbmFtZTogc2VhcmNoIH1dXHJcbiAgOiBmaWx0RmluZEl0ZW1zO1xyXG5cclxuXHJcbmNvbnN0IGR1bW15TmV3SXRlbSA9IHtcclxuICAgIC4uLmN1cnJlbnRJdGVtLFxyXG4gICAgW2ZpZWxkTmFtZV06IGZpbHRGaW5kSXRlbXNXaXRoQWRkLFxyXG59O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxTcGluIGNsYXNzTmFtZT1cImgtNiB0ZXh0LWdyYXktNTAwIGFuaW1hdGUtc3BpblwiLz4pIDooXHJcbiAgICAgICAgICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJtdC0zIG1yLTIgdy02IGgtNiB0ZXh0LWdyYXktNTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXItNCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTNcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09IHNlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKCgpID0+IGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRJdGVtc1F1ZXJ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGE6IHtzZWFyY2g6IGUudGFyZ2V0LnZhbHVlIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBmbGV4IG0tMlwiPlxyXG4gICAgICAgICAgICAgICAge3NlYXJjaCAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLkFERH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17ZHVtbXlOZXdJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2g9e3NldFNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiBjYWxsZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPk5vIG1hdGNoZXM8L3A+XHJcbiAgICAgICAgICAgICAgICApIDpudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=