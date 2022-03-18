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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
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

  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useLazyQuery)(query, {
    fetchPolicy: 'network-only'
  }),
      _useLazyQuery2 = (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useLazyQuery, 2),
      findItemQuery = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      loading = _useLazyQuery2$.loading,
      data = _useLazyQuery2$.data,
      called = _useLazyQuery2$.called;

  console.log(loading, data, called);

  var fetchedItems = lodash__WEBPACK_IMPORTED_MODULE_7__.get(data, queryName);

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
      className: "",
      children: [loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        className: "w-8 h-8",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        className: "w-8 h-8 mb-10",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "border-2 rounded w-full py-2 px-3",
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
            findItemQuery({
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
        lineNumber: 90,
        columnNumber: 9
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
          lineNumber: 118,
          columnNumber: 13
        }, _this) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-gray-400",
          children: "No matches"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, _this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
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
        lineNumber: 132,
        columnNumber: 11
      }, _this) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-gray-400",
        children: "No Matches"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, _this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(SearchItems, "/PWEcq+eZ6vqYJR7jkdBZcJ4JRY=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useLazyQuery];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2hJdGVtcy50c3giXSwibmFtZXMiOlsiU2VhcmNoSXRlbXMiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJxdWVyeU5hbWUiLCJxdWVyeSIsImZpZWxkTmFtZSIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbVF1ZXJ5IiwibG9hZGluZyIsImRhdGEiLCJjYWxsZWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hlZEl0ZW1zIiwiXyIsImZpbHRGaW5kSXRlbXMiLCJmaWx0ZXIiLCJvbmVJdGVtIiwibWFwIiwibyIsIm5hbWUiLCJpbmNsdWRlcyIsIm1hdGNoQ3VycmVudCIsIm1hdGNoTGlzdCIsImZpbHRGaW5kSXRlbXNXaXRoQWRkIiwibGVuZ3RoIiwiZHVtbXlOZXdJdGVtIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiY3VyclN0YXRlIiwicGVyc2lzdCIsInRhcmdldCIsInZhbHVlIiwidmFyaWFibGVzIiwiQWN0aW9uVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBT0E7QUFFQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BWXJCO0FBQUE7O0FBQUEsTUFYSkMsV0FXSSxRQVhKQSxXQVdJO0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsTUFUSkMsU0FTSSxRQVRKQSxTQVNJO0FBQUEsTUFSSkMsS0FRSSxRQVJKQSxLQVFJO0FBQUEsTUFQSkMsU0FPSSxRQVBKQSxTQU9JOztBQUFBLGtCQUN3QkMsK0NBQVEsQ0FBQyxFQUFELENBRGhDO0FBQUEsTUFDR0MsTUFESDtBQUFBLE1BQ1dDLFNBRFg7O0FBQUEsc0JBRStDQyw0REFBWSxDQUFDTCxLQUFELEVBQVE7QUFDckVNLGVBQVcsRUFBRTtBQUR3RCxH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RGI7QUFFRSxjQUFNLEVBQUVrQyx3REFGVjtBQUdFLGVBQU8sRUFBRXJDLE9BSFg7QUFJRSxZQUFJLEVBQUU0QixZQUpSO0FBS0UsaUJBQVMsRUFBRXRCO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEdBUUdNLE1BQU0sZ0JBQ1I7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUSxHQUVOO0FBWE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlGRCxDQWxJTTs7R0FBTWQsVztVQWN3Q1Msd0Q7OztLQWR4Q1QsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idW5kbGVzLmU5MmI3MDI2ZTA3YmY2NzVjOWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvblR5cGUsXHJcbiAgQmFkZ2VGaWVsZE5hbWUsXHJcbiAgQnVuZGxlT2JqZWN0LFxyXG4gIEZlZWRPYmplY3QsXHJcbiAgU2VhcmNoUXVlcnlOYW1lLFxyXG59IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgQmFkZ2VMaXN0IH0gZnJvbSAnLi9iYWRnZUxpc3QnO1xyXG5pbXBvcnQgeyBTZWFyY2gsIFNwaW4gfSBmcm9tICcuL3N2Zyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJdGVtcyA9ICh7XHJcbiAgY3VycmVudEl0ZW0sXHJcbiAgc2V0SXRlbSxcclxuICBxdWVyeU5hbWUsXHJcbiAgcXVlcnksXHJcbiAgZmllbGROYW1lLFxyXG59OiB7XHJcbiAgY3VycmVudEl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7XHJcbiAgc2V0SXRlbTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdD4+O1xyXG4gIHF1ZXJ5TmFtZTogU2VhcmNoUXVlcnlOYW1lO1xyXG4gIHF1ZXJ5OiBEb2N1bWVudE5vZGU7XHJcbiAgZmllbGROYW1lOiBCYWRnZUZpZWxkTmFtZTtcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpbmRJdGVtUXVlcnksIHsgbG9hZGluZywgZGF0YSwgY2FsbGVkIH1dID0gdXNlTGF6eVF1ZXJ5KHF1ZXJ5LCB7XHJcbiAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2cobG9hZGluZywgZGF0YSwgY2FsbGVkKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hlZEl0ZW1zID0gXy5nZXQoZGF0YSwgcXVlcnlOYW1lKTtcclxuICBjb25zdCBmaWx0RmluZEl0ZW1zID0gZmV0Y2hlZEl0ZW1zXHJcbiAgICA/IGZldGNoZWRJdGVtcy5maWx0ZXIoXHJcbiAgICAgICAgKG9uZUl0ZW0pID0+XHJcbiAgICAgICAgICAhY3VycmVudEl0ZW1bZmllbGROYW1lXS5tYXAoKG8pID0+IG8ubmFtZSkuaW5jbHVkZXMob25lSXRlbS5uYW1lKVxyXG4gICAgICApXHJcbiAgICA6IFtdO1xyXG5cclxuICBjb25zdCBtYXRjaEN1cnJlbnQgPSBmaWx0RmluZEl0ZW1zLmZpbHRlcigobykgPT4gby5uYW1lID09PSBzZWFyY2gpO1xyXG4gIGNvbnN0IG1hdGNoTGlzdCA9IGN1cnJlbnRJdGVtW2ZpZWxkTmFtZV0uZmlsdGVyKChvKSA9PiBvLm5hbWUgPT09IHNlYXJjaCk7XHJcbiAgY29uc3QgZmlsdEZpbmRJdGVtc1dpdGhBZGQgPVxyXG4gICAgbWF0Y2hDdXJyZW50Lmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgbWF0Y2hMaXN0Lmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgcXVlcnlOYW1lICE9PSAnZmluZEZlZWRzJ1xyXG4gICAgICA/IFsuLi5maWx0RmluZEl0ZW1zLCB7IG5hbWU6IHNlYXJjaCB9XVxyXG4gICAgICA6IGZpbHRGaW5kSXRlbXM7XHJcblxyXG4gIGNvbnN0IGR1bW15TmV3SXRlbSA9IHtcclxuICAgIC4uLmN1cnJlbnRJdGVtLFxyXG4gICAgW2ZpZWxkTmFtZV06IGZpbHRGaW5kSXRlbXNXaXRoQWRkLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTggaC04J1xyXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgIGQ9J000IDR2NWguNTgybTE1LjM1NiAyQTguMDAxIDguMDAxIDAgMDA0LjU4MiA5bTAgMEg5bTExIDExdi01aC0uNTgxbTAgMGE4LjAwMyA4LjAwMyAwIDAxLTE1LjM1Ny0ybTE1LjM1NyAySDE1J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTggaC04IG1iLTEwJ1xyXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgIGQ9J00yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHonXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItMiByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMnXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SXRlbSgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgW2ZpZWxkTmFtZV06IFtcclxuICAgICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlW2ZpZWxkTmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgIHsgLi4uZHVtbXlOZXdJdGVtW2ZpZWxkTmFtZV1bMF0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgIHNldFNlYXJjaCgoKSA9PiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gc2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoKCgpID0+IGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBmaW5kSXRlbVF1ZXJ5KHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBkYXRhOiB7IHNlYXJjaDogZS50YXJnZXQudmFsdWUgfSB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgZmxleCBtLTInPlxyXG4gICAgICAgICAge3NlYXJjaCAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICBmaWVsZE5hbWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQUREfVxyXG4gICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgaXRlbT17ZHVtbXlOZXdJdGVtfVxyXG4gICAgICAgICAgICAgIHNldFNlYXJjaD17c2V0U2VhcmNofVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IGNhbGxlZCA/IChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwJz5ObyBtYXRjaGVzPC9wPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBmbGV4IG0tMic+XHJcbiAgICAgICAge3NlYXJjaCAhPT0gJycgPyAoXHJcbiAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgIGZpZWxkTmFtZT17ZmllbGROYW1lfVxyXG4gICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQUREfVxyXG4gICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICBpdGVtPXtkdW1teU5ld0l0ZW19XHJcbiAgICAgICAgICAgIHNldFNlYXJjaD17c2V0U2VhcmNofVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogY2FsbGVkID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwJz5ObyBNYXRjaGVzPC9wPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=