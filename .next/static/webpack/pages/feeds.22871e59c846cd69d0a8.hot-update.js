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




 // import { Search, Spin } from './svg';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2hJdGVtcy50c3giXSwibmFtZXMiOlsiU2VhcmNoSXRlbXMiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJxdWVyeU5hbWUiLCJxdWVyeSIsImZpZWxkTmFtZSIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbVF1ZXJ5IiwibG9hZGluZyIsImRhdGEiLCJjYWxsZWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hlZEl0ZW1zIiwiXyIsImZpbHRGaW5kSXRlbXMiLCJmaWx0ZXIiLCJvbmVJdGVtIiwibWFwIiwibyIsIm5hbWUiLCJpbmNsdWRlcyIsIm1hdGNoQ3VycmVudCIsIm1hdGNoTGlzdCIsImZpbHRGaW5kSXRlbXNXaXRoQWRkIiwibGVuZ3RoIiwiZHVtbXlOZXdJdGVtIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiY3VyclN0YXRlIiwicGVyc2lzdCIsInRhcmdldCIsInZhbHVlIiwidmFyaWFibGVzIiwiQWN0aW9uVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0NBUUE7O0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQVlyQjtBQUFBOztBQUFBLE1BWEpDLFdBV0ksUUFYSkEsV0FXSTtBQUFBLE1BVkpDLE9BVUksUUFWSkEsT0FVSTtBQUFBLE1BVEpDLFNBU0ksUUFUSkEsU0FTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLFNBT0ksUUFQSkEsU0FPSTs7QUFBQSxrQkFDd0JDLCtDQUFRLENBQUMsRUFBRCxDQURoQztBQUFBLE1BQ0dDLE1BREg7QUFBQSxNQUNXQyxTQURYOztBQUFBLHNCQUUrQ0MsNERBQVksQ0FBQ0wsS0FBRCxFQUFRO0FBQ3JFTSxlQUFXLEVBQUU7QUFEd0Qs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Q0FBZjtBQUFBLGdCQUNHUCxNQUFNLEtBQUssRUFBWCxnQkFDQyw4REFBQyxpREFBRDtBQUNFLGlCQUFTLEVBQUVGLFNBRGI7QUFFRSxjQUFNLEVBQUVrQyx3REFGVjtBQUdFLGVBQU8sRUFBRXJDLE9BSFg7QUFJRSxZQUFJLEVBQUU0QixZQUpSO0FBS0UsaUJBQVMsRUFBRXRCO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEdBUUdNLE1BQU0sZ0JBQ1I7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUSxHQUVOO0FBWE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlGRCxDQXJJTTs7R0FBTWQsVztVQWN3Q1Msd0Q7OztLQWR4Q1QsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkcy4yMjg3MWU1OWM4NDZjZDY5ZDBhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEJhZGdlRmllbGROYW1lLFxyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG4gIFNlYXJjaFF1ZXJ5TmFtZSxcclxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gJy4vYmFkZ2VMaXN0JztcclxuLy8gaW1wb3J0IHsgU2VhcmNoLCBTcGluIH0gZnJvbSAnLi9zdmcnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSXRlbXMgPSAoe1xyXG4gIGN1cnJlbnRJdGVtLFxyXG4gIHNldEl0ZW0sXHJcbiAgcXVlcnlOYW1lLFxyXG4gIHF1ZXJ5LFxyXG4gIGZpZWxkTmFtZSxcclxufToge1xyXG4gIGN1cnJlbnRJdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG4gIHNldEl0ZW06IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxuICBxdWVyeU5hbWU6IFNlYXJjaFF1ZXJ5TmFtZTtcclxuICBxdWVyeTogRG9jdW1lbnROb2RlO1xyXG4gIGZpZWxkTmFtZTogQmFkZ2VGaWVsZE5hbWU7XHJcbn0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaW5kSXRlbVF1ZXJ5LCB7IGxvYWRpbmcsIGRhdGEsIGNhbGxlZCB9XSA9IHVzZUxhenlRdWVyeShxdWVyeSwge1xyXG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGxvYWRpbmcsIGRhdGEsIGNhbGxlZCk7XHJcblxyXG4gIGNvbnN0IGZldGNoZWRJdGVtcyA9IF8uZ2V0KGRhdGEsIHF1ZXJ5TmFtZSk7XHJcbiAgY29uc3QgZmlsdEZpbmRJdGVtcyA9IGZldGNoZWRJdGVtc1xyXG4gICAgPyBmZXRjaGVkSXRlbXMuZmlsdGVyKFxyXG4gICAgICAgIChvbmVJdGVtKSA9PlxyXG4gICAgICAgICAgIWN1cnJlbnRJdGVtW2ZpZWxkTmFtZV0ubWFwKChvKSA9PiBvLm5hbWUpLmluY2x1ZGVzKG9uZUl0ZW0ubmFtZSlcclxuICAgICAgKVxyXG4gICAgOiBbXTtcclxuXHJcbiAgY29uc3QgbWF0Y2hDdXJyZW50ID0gZmlsdEZpbmRJdGVtcy5maWx0ZXIoKG8pID0+IG8ubmFtZSA9PT0gc2VhcmNoKTtcclxuICBjb25zdCBtYXRjaExpc3QgPSBjdXJyZW50SXRlbVtmaWVsZE5hbWVdLmZpbHRlcigobykgPT4gby5uYW1lID09PSBzZWFyY2gpO1xyXG4gIGNvbnN0IGZpbHRGaW5kSXRlbXNXaXRoQWRkID1cclxuICAgIG1hdGNoQ3VycmVudC5sZW5ndGggPT09IDAgJiZcclxuICAgIG1hdGNoTGlzdC5sZW5ndGggPT09IDAgJiZcclxuICAgIHF1ZXJ5TmFtZSAhPT0gJ2ZpbmRGZWVkcydcclxuICAgICAgPyBbLi4uZmlsdEZpbmRJdGVtcywgeyBuYW1lOiBzZWFyY2ggfV1cclxuICAgICAgOiBmaWx0RmluZEl0ZW1zO1xyXG5cclxuICBjb25zb2xlLmxvZyhmZXRjaGVkSXRlbXMpO1xyXG4gIGNvbnNvbGUubG9nKGZpbHRGaW5kSXRlbXMpO1xyXG5cclxuICBjb25zdCBkdW1teU5ld0l0ZW0gPSB7XHJcbiAgICAuLi5jdXJyZW50SXRlbSxcclxuICAgIFtmaWVsZE5hbWVdOiBmaWx0RmluZEl0ZW1zV2l0aEFkZCxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2gtNiB3LTYgdGV4dC1ncmF5LTUwMCBhbmltYXRlLXNwaW4nXHJcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgZD0nTTQgNHY1aC41ODJtMTUuMzU2IDJBOC4wMDEgOC4wMDEgMCAwMDQuNTgyIDltMCAwSDltMTEgMTF2LTVoLS41ODFtMCAwYTguMDAzIDguMDAzIDAgMDEtMTUuMzU3LTJtMTUuMzU3IDJIMTUnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J210LTMgbXItMiB3LTYgaC02IHRleHQtZ3JheS01MDAnXHJcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgZD0nTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAweidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci00IHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMydcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRJdGVtKChjdXJyU3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogW1xyXG4gICAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGVbZmllbGROYW1lXSxcclxuICAgICAgICAgICAgICAgICAgeyAuLi5kdW1teU5ld0l0ZW1bZmllbGROYW1lXVswXSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoKCgpID0+ICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBzZWFyY2gpIHtcclxuICAgICAgICAgICAgICBzZXRTZWFyY2goKCkgPT4gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGZpbmRJdGVtUXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGE6IHsgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSB9IH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBmbGV4IG0tMic+XHJcbiAgICAgICAgICB7c2VhcmNoICE9PSAnJyA/IChcclxuICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgIGZpZWxkTmFtZT17ZmllbGROYW1lfVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5BRER9XHJcbiAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICBpdGVtPXtkdW1teU5ld0l0ZW19XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogY2FsbGVkID8gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPk5vIG1hdGNoZXM8L3A+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC0yIGZsZXggbS0yJz5cclxuICAgICAgICB7c2VhcmNoICE9PSAnJyA/IChcclxuICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgZmllbGROYW1lPXtmaWVsZE5hbWV9XHJcbiAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5BRER9XHJcbiAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgIGl0ZW09e2R1bW15TmV3SXRlbX1cclxuICAgICAgICAgICAgc2V0U2VhcmNoPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiBjYWxsZWQgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPk5vIE1hdGNoZXM8L3A+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==