self["webpackHotUpdate_N_E"]("pages/feeds",{

/***/ "./components/newEditItem.tsx":
/*!************************************!*\
  !*** ./components/newEditItem.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewEditItem": function() { return /* binding */ NewEditItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api/graphql/mutations */ "./utils/api/graphql/mutations.ts");
/* harmony import */ var _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var _utils_prepareUpdateObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/prepareUpdateObject */ "./utils/prepareUpdateObject.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _generateInputField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./generateInputField */ "./components/generateInputField.tsx");
/* harmony import */ var _searchItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./searchItems */ "./components/searchItems.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\newEditItem.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var NewEditItem = function NewEditItem(_ref) {
  _s();

  var type = _ref.type,
      selected = _ref.selected,
      setSelected = _ref.setSelected;
  var isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_7__.ItemType.FeedType;
  var initialFeed = {
    name: "",
    url: "",
    tags: []
  };
  var initialBundle = {
    name: "",
    description: "",
    tags: [],
    feeds: []
  };
  var initialState = isFeed ? initialFeed : initialBundle;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialState),
      currentItem = _useState[0],
      setItem = _useState[1];

  var inputFields = isFeed ? ['name', 'url'] : ['name', 'description'];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useMutation)(isFeed ? _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_4__.CREATE_FEED_MUTATION : _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_4__.CREATE_BUNDLE_MUTATION),
      _useMutation2 = (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation, 2),
      createItemMutation = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      createLoading = _useMutation2$.loading,
      createError = _useMutation2$.error;

  var variables = {
    data: {
      id: selected.id ? selected.id : ''
    }
  };

  if (createLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_11__.WaitingClock, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 14
    }, _this);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_11__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 14
    }, _this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        var data = (0,_utils_prepareUpdateObject__WEBPACK_IMPORTED_MODULE_6__.prepareNewUpdateObject)(currentItem);
        console.log(data);
        createItemMutation({
          variables: {
            data: data
          }
        });
        setItem(initialState);
        setSelected(function (currState) {
          return _objectSpread(_objectSpread({}, currState), {}, {
            editMode: false,
            newMode: false
          });
        });
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-12 gap-4 rounded-md border-4 my-4 py-2 px-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "col-span-12 text-lg font-medium py-2",
          children: isFeed ? 'New Feed' : 'New Bundle'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: [inputFields.map(function (name) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_generateInputField__WEBPACK_IMPORTED_MODULE_9__.GenerateInputField, {
              currentItem: currentItem,
              name: name,
              changeHandler: setItem
            }, "".concat(type, "-").concat(name), false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 14
            }, _this);
          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "py-4 ".concat(isFeed ? null : 'pt-28'),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: "py-4 ".concat("bg-".concat(isFeed ? 'green' : 'purple', "-400"), " hover:bg-", isFeed ? 'green' : 'purple', "-700 text-white font-bold px-12 rounded"),
              type: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 14
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6 ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "py-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "block py-2",
              children: "Tags:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 16
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "grid grid-cols-3 gap-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_8__.BadgeList, {
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.tags,
                action: _utils_types__WEBPACK_IMPORTED_MODULE_7__.ActionType.CREATE,
                setItem: setItem,
                item: currentItem
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 16
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "py-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "block py-2",
              children: "Add New Tag:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 16
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_10__.SearchItems, {
              queryName: isFeed ? _utils_types__WEBPACK_IMPORTED_MODULE_7__.SearchQueryName.findFeedTags : _utils_types__WEBPACK_IMPORTED_MODULE_7__.SearchQueryName.findBundleTags,
              query: isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.FIND_FEED_TAGS_QUERY : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.FIND_BUNDLE_TAGS_QUERY,
              setItem: setItem,
              currentItem: currentItem,
              fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.tags
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 16
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this), isFeed ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "block py-2",
                children: "Feeds:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 16
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "grid grid-cols-3 gap-2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_8__.BadgeList, {
                  fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.feeds,
                  action: _utils_types__WEBPACK_IMPORTED_MODULE_7__.ActionType.CREATE,
                  setItem: setItem,
                  item: currentItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 16
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "block py-2",
                children: "Add New Feed:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 16
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_10__.SearchItems, {
                queryName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.SearchQueryName.findFeeds,
                query: _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.FIND_FEEDS_QUERY,
                setItem: setItem,
                currentItem: currentItem,
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.feeds
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 16
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 13
            }, _this)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(NewEditItem, "d4JgydN2We5n+n5AAyECT9Ke4mU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useMutation];
});

_c = NewEditItem;

var _c;

$RefreshReg$(_c, "NewEditItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giXSwibmFtZXMiOlsiTmV3RWRpdEl0ZW0iLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImlzRmVlZCIsIkl0ZW1UeXBlIiwiaW5pdGlhbEZlZWQiLCJuYW1lIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImZlZWRzIiwiaW5pdGlhbFN0YXRlIiwidXNlU3RhdGUiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJpbnB1dEZpZWxkcyIsInVzZU11dGF0aW9uIiwiQ1JFQVRFX0ZFRURfTVVUQVRJT04iLCJDUkVBVEVfQlVORExFX01VVEFUSU9OIiwiY3JlYXRlSXRlbU11dGF0aW9uIiwiY3JlYXRlTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFcnJvciIsImVycm9yIiwidmFyaWFibGVzIiwiZGF0YSIsImlkIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJlcGFyZU5ld1VwZGF0ZU9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyU3RhdGUiLCJlZGl0TW9kZSIsIm5ld01vZGUiLCJtYXAiLCJCYWRnZUZpZWxkTmFtZSIsIkFjdGlvblR5cGUiLCJTZWFyY2hRdWVyeU5hbWUiLCJGSU5EX0ZFRURfVEFHU19RVUVSWSIsIkZJTkRfQlVORExFX1RBR1NfUVVFUlkiLCJGSU5EX0ZFRURTX1FVRVJZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BU3JCO0FBQUE7O0FBQUEsTUFSSEMsSUFRRyxRQVJIQSxJQVFHO0FBQUEsTUFQSEMsUUFPRyxRQVBIQSxRQU9HO0FBQUEsTUFOSEMsV0FNRyxRQU5IQSxXQU1HO0FBQ0YsTUFBTUMsTUFBTSxH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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUVDO0FBQUsseUJBQVMsRUFBQyx3QkFBZjtBQUFBLHVDQUNHLDhEQUFDLGlEQUFEO0FBQ0MsMkJBQVMsRUFBRWtDLDhEQURaO0FBRUMsd0JBQU0sRUFBRUMsMkRBRlQ7QUFHQyx5QkFBTyxFQUFFdkIsT0FIVjtBQUlDLHNCQUFJLEVBQUVEO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBWUE7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxzQ0FDRztBQUFPLHlCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREgsZUFFRyw4REFBQyxzREFBRDtBQUNHLHlCQUFTLEVBQUV5QixtRUFEZDtBQUVHLHFCQUFLLEVBQUVHLHdFQUZWO0FBR0csdUJBQU8sRUFBRTNCLE9BSFo7QUFJRywyQkFBVyxFQUFFRCxXQUpoQjtBQUtHLHlCQUFTLEVBQUV1Qiw4REFBb0IxQjtBQUxsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaQTtBQUFBLDBCQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREY7QUFtR0YsQ0FoSU07O0dBQU1aLFc7VUFpQnNFa0Isd0Q7OztLQWpCdEVsQixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlZWRzLjQ5Y2ZhN2QyMjIzMzRkOGYxMTI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENSRUFURV9CVU5ETEVfTVVUQVRJT04sIENSRUFURV9GRUVEX01VVEFUSU9OIH0gZnJvbSAnLi4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zJztcclxuaW1wb3J0IHsgRklORF9CVU5ETEVfVEFHU19RVUVSWSwgRklORF9GRUVEU19RVUVSWSwgRklORF9GRUVEX1RBR1NfUVVFUlkgfSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9xdWVyaWVzJztcclxuaW1wb3J0IHsgcHJlcGFyZU5ld1VwZGF0ZU9iamVjdCB9IGZyb20gJy4uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmplY3QnO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBCYWRnZUZpZWxkTmFtZSwgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0LCBJdGVtVHlwZSwgTmV3SXRlbVN0YXRlLCBTZWFyY2hRdWVyeU5hbWUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tICcuL2JhZGdlTGlzdCc7XHJcbmltcG9ydCB7IEdlbmVyYXRlSW5wdXRGaWVsZCB9IGZyb20gJy4vZ2VuZXJhdGVJbnB1dEZpZWxkJztcclxuaW1wb3J0IHsgU2VhcmNoSXRlbXMgfSBmcm9tICcuL3NlYXJjaEl0ZW1zJztcclxuaW1wb3J0IHsgRXJyb3JTaWduLCBXYWl0aW5nQ2xvY2sgfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3RWRpdEl0ZW0gPSAoe1xyXG4gICB0eXBlLFxyXG4gICBzZWxlY3RlZCxcclxuICAgc2V0U2VsZWN0ZWRcclxufToge1xyXG4gICBcclxuICAgdHlwZTogSXRlbVR5cGU7XHJcbiAgIHNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZTtcclxuICAgc2V0U2VsZWN0ZWQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj5cclxufSkgPT4ge1xyXG4gICAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGVcclxuICAgIGNvbnN0IGluaXRpYWxGZWVkOiBGZWVkT2JqZWN0ID0ge25hbWU6IFwiXCIsIHVybDogXCJcIiwgdGFnczogW10gfTtcclxuICAgIGNvbnN0IGluaXRpYWxCdW5kbGU6IEJ1bmRsZU9iamVjdCA9IHtuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgdGFnczogW10sIGZlZWRzOiBbXX07XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGU6IE5ld0l0ZW1TdGF0ZSA9IGlzRmVlZCA/IGluaXRpYWxGZWVkIDogaW5pdGlhbEJ1bmRsZTtcclxuICAgIGNvbnN0IFtjdXJyZW50SXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZTxOZXdJdGVtU3RhdGU+KGluaXRpYWxTdGF0ZSlcclxuICAgIGNvbnN0IGlucHV0RmllbGRzID0gaXNGZWVkID8gWyduYW1lJywgJ3VybCddIDogWyduYW1lJywgJ2Rlc2NyaXB0aW9uJ11cclxuXHJcbiAgIGNvbnN0IFsgY3JlYXRlSXRlbU11dGF0aW9uLCB7IGxvYWRpbmc6IGNyZWF0ZUxvYWRpbmcsIGVycm9yOiBjcmVhdGVFcnJvciB9IF0gID0gdXNlTXV0YXRpb24oaXNGZWVkID8gQ1JFQVRFX0ZFRURfTVVUQVRJT04gOiBDUkVBVEVfQlVORExFX01VVEFUSU9OKTtcclxuXHJcbiAgIGNvbnN0IHZhcmlhYmxlcyA9IHsgZGF0YTogeyBpZDogc2VsZWN0ZWQuaWQgPyBzZWxlY3RlZC5pZCA6ICcnIH0gfTtcclxuXHJcblxyXG4gICBpZihjcmVhdGVMb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8V2FpdGluZ0Nsb2NrIGNsYXNzTmFtZT1cIm15LTIwIGgtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0b1wiLz5cclxuICAgfSAgXHJcbiAgIGlmKGNyZWF0ZUVycm9yKSB7XHJcbiAgICAgIHJldHVybiA8RXJyb3JTaWduIGNsYXNzTmFtZT1cIm15LTIwIGgtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0b1wiLz5cclxuICAgfSBcclxuICAgXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPD5cclxuICAgICAgPGZvcm1cclxuICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGNvbnN0IGRhdGEgPSBwcmVwYXJlTmV3VXBkYXRlT2JqZWN0KGN1cnJlbnRJdGVtKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICBcclxuICAgICAgICAgY3JlYXRlSXRlbU11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGEgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRJdGVtKGluaXRpYWxTdGF0ZSlcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQoKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgIG5ld01vZGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICB9fVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC00IHJvdW5kZWQtbWQgYm9yZGVyLTQgbXktNCBweS0yIHB4LTRcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgdGV4dC1sZyBmb250LW1lZGl1bSBweS0yXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpc0ZlZWQgPyAnTmV3IEZlZWQnIDogJ05ldyBCdW5kbGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNic+XHJcbiAgICAgICAgICB7aW5wdXRGaWVsZHMubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICAgICA8R2VuZXJhdGVJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgIGtleT17YCR7dHlwZX0tJHtuYW1lfWB9XHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgY2hhbmdlSGFuZGxlcj17c2V0SXRlbX1cclxuICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHB5LTQgJHtpc0ZlZWQgPyBudWxsIDogJ3B0LTI4J31gfT5cclxuICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2BweS00ICR7YGJnLSR7XHJcbiAgICAgICAgICAgICAgICBpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSdcclxuICAgICAgICAgICAgIH0tNDAwYH0gaG92ZXI6YmctJHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgfS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHgtMTIgcm91bmRlZGB9XHJcbiAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNiAnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPlRhZ3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTInPlxyXG4gICAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQ1JFQVRFfVxyXG4gICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgIGl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+QWRkIE5ldyBUYWc6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPFNlYXJjaEl0ZW1zIFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeU5hbWU9e2lzRmVlZCA/IFNlYXJjaFF1ZXJ5TmFtZS5maW5kRmVlZFRhZ3MgOiBTZWFyY2hRdWVyeU5hbWUuZmluZEJ1bmRsZVRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtpc0ZlZWQgPyBGSU5EX0ZFRURfVEFHU19RVUVSWSA6IEZJTkRfQlVORExFX1RBR1NfUVVFUll9XHJcbiAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS50YWdzfVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2lzRmVlZCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBweS0yJz5GZWVkczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQ1JFQVRFfVxyXG4gICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgIGl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+QWRkIE5ldyBGZWVkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxTZWFyY2hJdGVtcyBcclxuICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lPXtTZWFyY2hRdWVyeU5hbWUuZmluZEZlZWRzfVxyXG4gICAgICAgICAgICAgICAgICBxdWVyeT17RklORF9GRUVEU19RVUVSWX1cclxuICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLmZlZWRzfVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgPC8+XHJcbiAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9