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

  var dummyNewItem = _objectSpread(_objectSpread({}, currentItem), {}, (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, fieldName, filtFindItemsWithAdd));

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: [loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        className: "h-6 w-6 text-gray-500 animate-spin",
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
          lineNumber: 70,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        className: "mt-3 mr-2 w-6 h-6 text-gray-500",
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
          lineNumber: 85,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
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
        lineNumber: 93,
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
          lineNumber: 121,
          columnNumber: 13
        }, _this) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-gray-400",
          children: "No matches"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, _this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
        lineNumber: 135,
        columnNumber: 11
      }, _this) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-gray-400",
        children: "No Matches"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, _this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2hJdGVtcy50c3giXSwibmFtZXMiOlsiU2VhcmNoSXRlbXMiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJxdWVyeU5hbWUiLCJxdWVyeSIsImZpZWxkTmFtZSIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbVF1ZXJ5IiwibG9hZGluZyIsImRhdGEiLCJjYWxsZWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hlZEl0ZW1zIiwiXyIsImZpbHRGaW5kSXRlbXMiLCJmaWx0ZXIiLCJvbmVJdGVtIiwibWFwIiwibyIsIm5hbWUiLCJpbmNsdWRlcyIsIm1hdGNoQ3VycmVudCIsIm1hdGNoTGlzdCIsImZpbHRGaW5kSXRlbXNXaXRoQWRkIiwibGVuZ3RoIiwiZHVtbXlOZXdJdGVtIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiY3VyclN0YXRlIiwicGVyc2lzdCIsInRhcmdldCIsInZhbHVlIiwidmFyaWFibGVzIiwiQWN0aW9uVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBT0E7QUFFQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BWXJCO0FBQUE7O0FBQUEsTUFYSkMsV0FXSSxRQVhKQSxXQVdJO0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsTUFUSkMsU0FTSSxRQVRKQSxTQVNJO0FBQUEsTUFSSkMsS0FRSSxRQVJKQSxLQVFJO0FBQUEsTUFQSkMsU0FPSSxRQVBKQSxTQU9JOztBQUFBLGtCQUN3QkMsK0NBQVEsQ0FBQyxFQUFELENBRGhDO0FBQUEsTUFDR0MsTUFESDtBQUFBLE1BQ1dDLFNBRFg7O0FBQUEsc0JBRStDQyw0REFBWSxDQUFDTCxLQUFELEVBQVE7QUFDckVNLGVBQVcsRUFBRTtBQUR3RCxH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QUFmO0FBQUEsZ0JBQ0dQLE1BQU0sS0FBSyxFQUFYLGdCQUNDLDhEQUFDLGlEQUFEO0FBQ0UsaUJBQVMsRUFBRUYsU0FEYjtBQUVFLGNBQU0sRUFBRWtDLHdEQUZWO0FBR0UsZUFBTyxFQUFFckMsT0FIWDtBQUlFLFlBQUksRUFBRTRCLFlBSlI7QUFLRSxpQkFBUyxFQUFFdEI7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsR0FRR00sTUFBTSxnQkFDUjtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRLEdBRU47QUFYTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUZELENBcklNOztHQUFNZCxXO1VBY3dDUyx3RDs7O0tBZHhDVCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1bmRsZXMuZGZiNDhkZjlkOWU0MWVkNTc5MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uVHlwZSxcclxuICBCYWRnZUZpZWxkTmFtZSxcclxuICBCdW5kbGVPYmplY3QsXHJcbiAgRmVlZE9iamVjdCxcclxuICBTZWFyY2hRdWVyeU5hbWUsXHJcbn0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tICcuL2JhZGdlTGlzdCc7XHJcbmltcG9ydCB7IFNlYXJjaCwgU3BpbiB9IGZyb20gJy4vc3ZnJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaEl0ZW1zID0gKHtcclxuICBjdXJyZW50SXRlbSxcclxuICBzZXRJdGVtLFxyXG4gIHF1ZXJ5TmFtZSxcclxuICBxdWVyeSxcclxuICBmaWVsZE5hbWUsXHJcbn06IHtcclxuICBjdXJyZW50SXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDtcclxuICBzZXRJdGVtOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj47XHJcbiAgcXVlcnlOYW1lOiBTZWFyY2hRdWVyeU5hbWU7XHJcbiAgcXVlcnk6IERvY3VtZW50Tm9kZTtcclxuICBmaWVsZE5hbWU6IEJhZGdlRmllbGROYW1lO1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmluZEl0ZW1RdWVyeSwgeyBsb2FkaW5nLCBkYXRhLCBjYWxsZWQgfV0gPSB1c2VMYXp5UXVlcnkocXVlcnksIHtcclxuICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhsb2FkaW5nLCBkYXRhLCBjYWxsZWQpO1xyXG5cclxuICBjb25zdCBmZXRjaGVkSXRlbXMgPSBfLmdldChkYXRhLCBxdWVyeU5hbWUpO1xyXG4gIGNvbnN0IGZpbHRGaW5kSXRlbXMgPSBmZXRjaGVkSXRlbXNcclxuICAgID8gZmV0Y2hlZEl0ZW1zLmZpbHRlcihcclxuICAgICAgICAob25lSXRlbSkgPT5cclxuICAgICAgICAgICFjdXJyZW50SXRlbVtmaWVsZE5hbWVdLm1hcCgobykgPT4gby5uYW1lKS5pbmNsdWRlcyhvbmVJdGVtLm5hbWUpXHJcbiAgICAgIClcclxuICAgIDogW107XHJcblxyXG4gIGNvbnN0IG1hdGNoQ3VycmVudCA9IGZpbHRGaW5kSXRlbXMuZmlsdGVyKChvKSA9PiBvLm5hbWUgPT09IHNlYXJjaCk7XHJcbiAgY29uc3QgbWF0Y2hMaXN0ID0gY3VycmVudEl0ZW1bZmllbGROYW1lXS5maWx0ZXIoKG8pID0+IG8ubmFtZSA9PT0gc2VhcmNoKTtcclxuICBjb25zdCBmaWx0RmluZEl0ZW1zV2l0aEFkZCA9XHJcbiAgICBtYXRjaEN1cnJlbnQubGVuZ3RoID09PSAwICYmXHJcbiAgICBtYXRjaExpc3QubGVuZ3RoID09PSAwICYmXHJcbiAgICBxdWVyeU5hbWUgIT09ICdmaW5kRmVlZHMnXHJcbiAgICAgID8gWy4uLmZpbHRGaW5kSXRlbXMsIHsgbmFtZTogc2VhcmNoIH1dXHJcbiAgICAgIDogZmlsdEZpbmRJdGVtcztcclxuXHJcbiAgY29uc29sZS5sb2coZmV0Y2hlZEl0ZW1zKTtcclxuICBjb25zb2xlLmxvZyhmaWx0RmluZEl0ZW1zKTtcclxuXHJcbiAgY29uc3QgZHVtbXlOZXdJdGVtID0ge1xyXG4gICAgLi4uY3VycmVudEl0ZW0sXHJcbiAgICBbZmllbGROYW1lXTogZmlsdEZpbmRJdGVtc1dpdGhBZGQsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdoLTYgdy02IHRleHQtZ3JheS01MDAgYW5pbWF0ZS1zcGluJ1xyXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgIGQ9J000IDR2NWguNTgybTE1LjM1NiAyQTguMDAxIDguMDAxIDAgMDA0LjU4MiA5bTAgMEg5bTExIDExdi01aC0uNTgxbTAgMGE4LjAwMyA4LjAwMyAwIDAxLTE1LjM1Ny0ybTE1LjM1NyAySDE1J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdtdC0zIG1yLTIgdy02IGgtNiB0ZXh0LWdyYXktNTAwJ1xyXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgIGQ9J00yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHonXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItNCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMnXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SXRlbSgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgW2ZpZWxkTmFtZV06IFtcclxuICAgICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlW2ZpZWxkTmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgIHsgLi4uZHVtbXlOZXdJdGVtW2ZpZWxkTmFtZV1bMF0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgIHNldFNlYXJjaCgoKSA9PiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gc2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoKCgpID0+IGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBmaW5kSXRlbVF1ZXJ5KHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBkYXRhOiB7IHNlYXJjaDogZS50YXJnZXQudmFsdWUgfSB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgZmxleCBtLTInPlxyXG4gICAgICAgICAge3NlYXJjaCAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICBmaWVsZE5hbWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQUREfVxyXG4gICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgaXRlbT17ZHVtbXlOZXdJdGVtfVxyXG4gICAgICAgICAgICAgIHNldFNlYXJjaD17c2V0U2VhcmNofVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IGNhbGxlZCA/IChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwJz5ObyBtYXRjaGVzPC9wPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBmbGV4IG0tMic+XHJcbiAgICAgICAge3NlYXJjaCAhPT0gJycgPyAoXHJcbiAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgIGZpZWxkTmFtZT17ZmllbGROYW1lfVxyXG4gICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQUREfVxyXG4gICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICBpdGVtPXtkdW1teU5ld0l0ZW19XHJcbiAgICAgICAgICAgIHNldFNlYXJjaD17c2V0U2VhcmNofVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogY2FsbGVkID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwJz5ObyBNYXRjaGVzPC9wPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=