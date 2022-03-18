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
  console.log(fetchedItems);
  console.log(filtFindItems);

  var dummyNewItem = _objectSpread({}, currentItem);

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
          lineNumber: 69,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
          lineNumber: 84,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
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
        lineNumber: 92,
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
          lineNumber: 120,
          columnNumber: 13
        }, _this) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-gray-400",
          children: "No matches"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, _this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
        lineNumber: 134,
        columnNumber: 11
      }, _this) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-gray-400",
        children: "No Matches"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }, _this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2hJdGVtcy50c3giXSwibmFtZXMiOlsiU2VhcmNoSXRlbXMiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJxdWVyeU5hbWUiLCJxdWVyeSIsImZpZWxkTmFtZSIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbVF1ZXJ5IiwibG9hZGluZyIsImRhdGEiLCJjYWxsZWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hlZEl0ZW1zIiwiXyIsImZpbHRGaW5kSXRlbXMiLCJmaWx0ZXIiLCJvbmVJdGVtIiwibWFwIiwibyIsIm5hbWUiLCJpbmNsdWRlcyIsIm1hdGNoQ3VycmVudCIsIm1hdGNoTGlzdCIsImZpbHRGaW5kSXRlbXNXaXRoQWRkIiwibGVuZ3RoIiwiZHVtbXlOZXdJdGVtIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiY3VyclN0YXRlIiwicGVyc2lzdCIsInRhcmdldCIsInZhbHVlIiwidmFyaWFibGVzIiwiQWN0aW9uVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBT0E7QUFFQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BWXJCO0FBQUE7O0FBQUEsTUFYSkMsV0FXSSxRQVhKQSxXQVdJO0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsTUFUSkMsU0FTSSxRQVRKQSxTQVNJO0FBQUEsTUFSSkMsS0FRSSxRQVJKQSxLQVFJO0FBQUEsTUFQSkMsU0FPSSxRQVBKQSxTQU9JOztBQUFBLGtCQUN3QkMsK0NBQVEsQ0FBQyxFQUFELENBRGhDO0FBQUEsTUFDR0MsTUFESDtBQUFBLE1BQ1dDLFNBRFg7O0FBQUEsc0JBRStDQyw0REFBWSxDQUFDTCxLQUFELEVBQVE7QUFDckVNLGVBQVcsRUFBRTtBQUR3RCxH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QVgsZ0JBQ0MsOERBQUMsaURBQUQ7QUFDRSxpQkFBUyxFQUFFRixTQURiO0FBRUUsY0FBTSxFQUFFa0Msd0RBRlY7QUFHRSxlQUFPLEVBQUVyQyxPQUhYO0FBSUUsWUFBSSxFQUFFNEIsWUFKUjtBQUtFLGlCQUFTLEVBQUV0QjtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxHQVFHTSxNQUFNLGdCQUNSO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFEsR0FFTjtBQVhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5RkQsQ0FwSU07O0dBQU1kLFc7VUFjd0NTLHdEOzs7S0FkeENULFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVuZGxlcy42Mjg0OWZiNjYyNzI1NDJlMzFjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEJhZGdlRmllbGROYW1lLFxyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG4gIFNlYXJjaFF1ZXJ5TmFtZSxcclxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gJy4vYmFkZ2VMaXN0JztcclxuaW1wb3J0IHsgU2VhcmNoLCBTcGluIH0gZnJvbSAnLi9zdmcnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSXRlbXMgPSAoe1xyXG4gIGN1cnJlbnRJdGVtLFxyXG4gIHNldEl0ZW0sXHJcbiAgcXVlcnlOYW1lLFxyXG4gIHF1ZXJ5LFxyXG4gIGZpZWxkTmFtZSxcclxufToge1xyXG4gIGN1cnJlbnRJdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG4gIHNldEl0ZW06IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxuICBxdWVyeU5hbWU6IFNlYXJjaFF1ZXJ5TmFtZTtcclxuICBxdWVyeTogRG9jdW1lbnROb2RlO1xyXG4gIGZpZWxkTmFtZTogQmFkZ2VGaWVsZE5hbWU7XHJcbn0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaW5kSXRlbVF1ZXJ5LCB7IGxvYWRpbmcsIGRhdGEsIGNhbGxlZCB9XSA9IHVzZUxhenlRdWVyeShxdWVyeSwge1xyXG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGxvYWRpbmcsIGRhdGEsIGNhbGxlZCk7XHJcblxyXG4gIGNvbnN0IGZldGNoZWRJdGVtcyA9IF8uZ2V0KGRhdGEsIHF1ZXJ5TmFtZSk7XHJcbiAgY29uc3QgZmlsdEZpbmRJdGVtcyA9IGZldGNoZWRJdGVtc1xyXG4gICAgPyBmZXRjaGVkSXRlbXMuZmlsdGVyKFxyXG4gICAgICAgIChvbmVJdGVtKSA9PlxyXG4gICAgICAgICAgIWN1cnJlbnRJdGVtW2ZpZWxkTmFtZV0ubWFwKChvKSA9PiBvLm5hbWUpLmluY2x1ZGVzKG9uZUl0ZW0ubmFtZSlcclxuICAgICAgKVxyXG4gICAgOiBbXTtcclxuXHJcbiAgY29uc3QgbWF0Y2hDdXJyZW50ID0gZmlsdEZpbmRJdGVtcy5maWx0ZXIoKG8pID0+IG8ubmFtZSA9PT0gc2VhcmNoKTtcclxuICBjb25zdCBtYXRjaExpc3QgPSBjdXJyZW50SXRlbVtmaWVsZE5hbWVdLmZpbHRlcigobykgPT4gby5uYW1lID09PSBzZWFyY2gpO1xyXG4gIGNvbnN0IGZpbHRGaW5kSXRlbXNXaXRoQWRkID1cclxuICAgIG1hdGNoQ3VycmVudC5sZW5ndGggPT09IDAgJiZcclxuICAgIG1hdGNoTGlzdC5sZW5ndGggPT09IDAgJiZcclxuICAgIHF1ZXJ5TmFtZSAhPT0gJ2ZpbmRGZWVkcydcclxuICAgICAgPyBbLi4uZmlsdEZpbmRJdGVtcywgeyBuYW1lOiBzZWFyY2ggfV1cclxuICAgICAgOiBmaWx0RmluZEl0ZW1zO1xyXG5cclxuICBjb25zb2xlLmxvZyhmZXRjaGVkSXRlbXMpO1xyXG4gIGNvbnNvbGUubG9nKGZpbHRGaW5kSXRlbXMpO1xyXG5cclxuICBjb25zdCBkdW1teU5ld0l0ZW0gPSB7XHJcbiAgICAuLi5jdXJyZW50SXRlbSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy04IGgtOCdcclxuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICBkPSdNNCA0djVoLjU4Mm0xNS4zNTYgMkE4LjAwMSA4LjAwMSAwIDAwNC41ODIgOW0wIDBIOW0xMSAxMXYtNWgtLjU4MW0wIDBhOC4wMDMgOC4wMDMgMCAwMS0xNS4zNTctMm0xNS4zNTcgMkgxNSdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy04IGgtOCBtYi0xMCdcclxuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICBkPSdNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLTQgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zJ1xyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHNldEl0ZW0oKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBbXHJcbiAgICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZVtmaWVsZE5hbWVdLFxyXG4gICAgICAgICAgICAgICAgICB7IC4uLmR1bW15TmV3SXRlbVtmaWVsZE5hbWVdWzBdIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICBzZXRTZWFyY2goKCkgPT4gJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09IHNlYXJjaCkge1xyXG4gICAgICAgICAgICAgIHNldFNlYXJjaCgoKSA9PiBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgZmluZEl0ZW1RdWVyeSh7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgZGF0YTogeyBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlIH0gfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC0yIGZsZXggbS0yJz5cclxuICAgICAgICAgIHtzZWFyY2ggIT09ICcnID8gKFxyXG4gICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgZmllbGROYW1lPXtmaWVsZE5hbWV9XHJcbiAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLkFERH1cclxuICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgIGl0ZW09e2R1bW15TmV3SXRlbX1cclxuICAgICAgICAgICAgICBzZXRTZWFyY2g9e3NldFNlYXJjaH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiBjYWxsZWQgPyAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCc+Tm8gbWF0Y2hlczwvcD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgZmxleCBtLTInPlxyXG4gICAgICAgIHtzZWFyY2ggIT09ICcnID8gKFxyXG4gICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICBmaWVsZE5hbWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLkFERH1cclxuICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgaXRlbT17ZHVtbXlOZXdJdGVtfVxyXG4gICAgICAgICAgICBzZXRTZWFyY2g9e3NldFNlYXJjaH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IGNhbGxlZCA/IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCc+Tm8gTWF0Y2hlczwvcD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9