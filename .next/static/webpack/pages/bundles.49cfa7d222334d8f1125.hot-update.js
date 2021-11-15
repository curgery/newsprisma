self["webpackHotUpdate_N_E"]("pages/bundles",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giXSwibmFtZXMiOlsiTmV3RWRpdEl0ZW0iLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImlzRmVlZCIsIkl0ZW1UeXBlIiwiaW5pdGlhbEZlZWQiLCJuYW1lIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImZlZWRzIiwiaW5pdGlhbFN0YXRlIiwidXNlU3RhdGUiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJpbnB1dEZpZWxkcyIsInVzZU11dGF0aW9uIiwiQ1JFQVRFX0ZFRURfTVVUQVRJT04iLCJDUkVBVEVfQlVORExFX01VVEFUSU9OIiwiY3JlYXRlSXRlbU11dGF0aW9uIiwiY3JlYXRlTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFcnJvciIsImVycm9yIiwidmFyaWFibGVzIiwiZGF0YSIsImlkIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJlcGFyZU5ld1VwZGF0ZU9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyU3RhdGUiLCJlZGl0TW9kZSIsIm5ld01vZGUiLCJtYXAiLCJCYWRnZUZpZWxkTmFtZSIsIkFjdGlvblR5cGUiLCJTZWFyY2hRdWVyeU5hbWUiLCJGSU5EX0ZFRURfVEFHU19RVUVSWSIsIkZJTkRfQlVORExFX1RBR1NfUVVFUlkiLCJGSU5EX0ZFRURTX1FVRVJZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BU3JCO0FBQUE7O0FBQUEsTUFSSEMsSUFRRyxRQVJIQSxJQVFHO0FBQUEsTUFQSEMsUUFPRyxRQVBIQSxRQU9HO0FBQUEsTUFOSEMsV0FNRyxRQU5IQSxXQU1HO0FBQ0YsTUFBTUMsTUFBTSxHQUFHSCxJQUFJLEtBQUtJLDJEQUF4QjtBQUNBLE1BQU1DLFdBQXVCLEdBQUc7QUFBQ0MsUUFBSSxFQUFFLEVBQVA7QUFBV0MsT0FBRyxFQUFFLEVBQWhCO0FBQW9CQyxRQUFJLEVBQUU7QUFBMUIsR0FBaEM7QUFDQSxNQUFNQyxhQUEyQixHQUFHO0FBQUNILFFBQUksRUFBRSxFQUFQO0FBQVdJLGVBQVcsRUFBRSxFQUF4QjtBQUE0QkYsUUFBSSxFQUFFLEVBQWxDO0FBQXNDRyxTQUFLLEVBQUU7QUFBN0MsR0FBcEM7QUFDQSxNQUFNQyxZQUEwQixHQUFHVCxNQUFNLEdBQUdFLFdBQUgsR0FBaUJJLGFBQTFEOztBQUpFLGtCQUs2QkksK0NBQVEsQ0FBZUQsWUFBZixDQUxyQztBQUFBLE1BS0tFLFdBTEw7QUFBQSxNQUtrQkMsT0FMbEI7O0FBTUYsTUFBTUMsV0FBVyxHQUFHYixNQUFNLEdBQUcsQ0FBQyxNQUFELEVBQVMsS0FBVCxDQUFILEdBQXFCLENBQUMsTUFBRCxFQUFTLGFBQVQsQ0FBL0M7O0FBTkUscUJBUTZFYyw0REFBVyxDQUFDZCxNQUFNLEdBQUdlLDhFQUFILEdBQTBCQyxnRkFBakMsQ0FSeEY7QUFBQTtBQUFBLE1BUUtDLGtCQVJMO0FBQUE7QUFBQSxNQVFvQ0MsYUFScEMsa0JBUTJCQyxPQVIzQjtBQUFBLE1BUTBEQyxXQVIxRCxrQkFRbURDLEtBUm5EOztBQVVILE1BQU1DLFNBQVMsR0FBRztBQUFFQyxRQUFJLEVBQUU7QUFBRUMsUUFBRSxFQUFFMUIsUUFBUSxDQUFDMEIsRUFBVCxHQUFjMUIsUUFBUSxDQUFDMEIsRUFBdkIsR0FBNEI7QUFBbEM7QUFBUixHQUFsQjs7QUFHQSxNQUFHTixhQUFILEVBQWtCO0FBQ2Ysd0JBQU8sOERBQUMsK0NBQUQ7QUFBYyxlQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Y7O0FBQ0QsTUFBR0UsV0FBSCxFQUFnQjtBQUNiLHdCQUFPLDhEQUFDLDRDQUFEO0FBQVcsZUFBUyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNGOztBQUVELHNCQUNFO0FBQUEsMkJBQ0M7QUFDQyxjQUFRLEVBQUUsa0JBQUNLLENBQUQsRUFBTztBQUNmQSxTQUFDLENBQUNDLGNBQUY7QUFDQSxZQUFNSCxJQUFJLEdBQUdJLGtGQUFzQixDQUFDaEIsV0FBRCxDQUFuQztBQUNBaUIsZUFBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7QUFFQU4sMEJBQWtCLENBQUM7QUFDaEJLLG1CQUFTLEVBQUU7QUFBRUMsZ0JBQUksRUFBSkE7QUFBRjtBQURLLFNBQUQsQ0FBbEI7QUFHR1gsZUFBTyxDQUFDSCxZQUFELENBQVA7QUFDQVYsbUJBQVcsQ0FBQyxVQUFDK0IsU0FBRDtBQUFBLGlEQUNOQSxTQURNO0FBRVRDLG9CQUFRLEVBQUUsS0FGRDtBQUdUQyxtQkFBTyxFQUFFO0FBSEE7QUFBQSxTQUFELENBQVg7QUFLRixPQWZKO0FBQUEsNkJBbUJFO0FBQUssaUJBQVMsRUFBQyw0REFBZjtBQUFBLGdDQUNBO0FBQUksbUJBQVMsRUFBQyxzQ0FBZDtBQUFBLG9CQUVNaEMsTUFBTSxHQUFHLFVBQUgsR0FBZ0I7QUFGNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQU1FO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEscUJBQ0NhLFdBQVcsQ0FBQ29CLEdBQVosQ0FBZ0IsVUFBQzlCLElBQUQ7QUFBQSxnQ0FDZCw4REFBQyxtRUFBRDtBQUVFLHlCQUFXLEVBQUVRLFdBRmY7QUFHRSxrQkFBSSxFQUFFUixJQUhSO0FBSUUsMkJBQWEsRUFBRVM7QUFKakIseUJBQ1VmLElBRFYsY0FDa0JNLElBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGM7QUFBQSxXQUFoQixDQURELGVBVUE7QUFBSyxxQkFBUyxpQkFBVUgsTUFBTSxHQUFHLElBQUgsR0FBVSxPQUExQixDQUFkO0FBQUEsbUNBQ0c7QUFBTyx1QkFBUyw4QkFDYkEsTUFBTSxHQUFHLE9BQUgsR0FBYSxRQUROLHlCQUdiQSxNQUFNLEdBQUcsT0FBSCxHQUFhLFFBSE4sNENBQWhCO0FBS0Usa0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQTBCRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsb0NBQ0c7QUFBTyx1QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILGVBRUc7QUFBSyx1QkFBUyxFQUFDLHdCQUFmO0FBQUEscUNBQ0csOERBQUMsaURBQUQ7QUFDQyx5QkFBUyxFQUFFa0MsNkRBRFo7QUFFQyxzQkFBTSxFQUFFQywyREFGVDtBQUdDLHVCQUFPLEVBQUV2QixPQUhWO0FBSUMsb0JBQUksRUFBRUQ7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFZRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG9DQUNHO0FBQU8sdUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESCxlQUVHLDhEQUFDLHNEQUFEO0FBQ0csdUJBQVMsRUFBRVgsTUFBTSxHQUFHb0Msc0VBQUgsR0FBa0NBLHdFQUR0RDtBQUVHLG1CQUFLLEVBQUVwQyxNQUFNLEdBQUdxQyw0RUFBSCxHQUEwQkMsOEVBRjFDO0FBR0cscUJBQU8sRUFBRTFCLE9BSFo7QUFJRyx5QkFBVyxFQUFFRCxXQUpoQjtBQUtHLHVCQUFTLEVBQUV1Qiw2REFBbUI3QjtBQUxqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixFQXNCR0wsTUFBTSxHQUFHLElBQUgsZ0JBQ1A7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBLHNDQUNDO0FBQU8seUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUVDO0FBQUsseUJBQVMsRUFBQyx3QkFBZjtBQUFBLHVDQUNHLDhEQUFDLGlEQUFEO0FBQ0MsMkJBQVMsRUFBRWtDLDhEQURaO0FBRUMsd0JBQU0sRUFBRUMsMkRBRlQ7QUFHQyx5QkFBTyxFQUFFdkIsT0FIVjtBQUlDLHNCQUFJLEVBQUVEO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBWUE7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxzQ0FDRztBQUFPLHlCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREgsZUFFRyw4REFBQyxzREFBRDtBQUNHLHlCQUFTLEVBQUV5QixtRUFEZDtBQUVHLHFCQUFLLEVBQUVHLHdFQUZWO0FBR0csdUJBQU8sRUFBRTNCLE9BSFo7QUFJRywyQkFBVyxFQUFFRCxXQUpoQjtBQUtHLHlCQUFTLEVBQUV1Qiw4REFBb0IxQjtBQUxsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaQTtBQUFBLDBCQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREY7QUFtR0YsQ0FoSU07O0dBQU1aLFc7VUFpQnNFa0Isd0Q7OztLQWpCdEVsQixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1bmRsZXMuNDljZmE3ZDIyMjMzNGQ4ZjExMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiwgQ1JFQVRFX0ZFRURfTVVUQVRJT04gfSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMnO1xyXG5pbXBvcnQgeyBGSU5EX0JVTkRMRV9UQUdTX1FVRVJZLCBGSU5EX0ZFRURTX1FVRVJZLCBGSU5EX0ZFRURfVEFHU19RVUVSWSB9IGZyb20gJy4uL3V0aWxzL2FwaS9ncmFwaHFsL3F1ZXJpZXMnO1xyXG5pbXBvcnQgeyBwcmVwYXJlTmV3VXBkYXRlT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMvcHJlcGFyZVVwZGF0ZU9iamVjdCc7XHJcbmltcG9ydCB7IEFjdGlvblR5cGUsIEJhZGdlRmllbGROYW1lLCBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QsIEl0ZW1UeXBlLCBOZXdJdGVtU3RhdGUsIFNlYXJjaFF1ZXJ5TmFtZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gJy4vYmFkZ2VMaXN0JztcclxuaW1wb3J0IHsgR2VuZXJhdGVJbnB1dEZpZWxkIH0gZnJvbSAnLi9nZW5lcmF0ZUlucHV0RmllbGQnO1xyXG5pbXBvcnQgeyBTZWFyY2hJdGVtcyB9IGZyb20gJy4vc2VhcmNoSXRlbXMnO1xyXG5pbXBvcnQgeyBFcnJvclNpZ24sIFdhaXRpbmdDbG9jayB9IGZyb20gJy4vc3ZnJztcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdFZGl0SXRlbSA9ICh7XHJcbiAgIHR5cGUsXHJcbiAgIHNlbGVjdGVkLFxyXG4gICBzZXRTZWxlY3RlZFxyXG59OiB7XHJcbiAgIFxyXG4gICB0eXBlOiBJdGVtVHlwZTtcclxuICAgc2VsZWN0ZWQ6IFNlbGVjdGVkRmVlZFN0YXRlO1xyXG4gICBzZXRTZWxlY3RlZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U2VsZWN0ZWRGZWVkU3RhdGU+PlxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZVxyXG4gICAgY29uc3QgaW5pdGlhbEZlZWQ6IEZlZWRPYmplY3QgPSB7bmFtZTogXCJcIiwgdXJsOiBcIlwiLCB0YWdzOiBbXSB9O1xyXG4gICAgY29uc3QgaW5pdGlhbEJ1bmRsZTogQnVuZGxlT2JqZWN0ID0ge25hbWU6IFwiXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCB0YWdzOiBbXSwgZmVlZHM6IFtdfTtcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZTogTmV3SXRlbVN0YXRlID0gaXNGZWVkID8gaW5pdGlhbEZlZWQgOiBpbml0aWFsQnVuZGxlO1xyXG4gICAgY29uc3QgW2N1cnJlbnRJdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlPE5ld0l0ZW1TdGF0ZT4oaW5pdGlhbFN0YXRlKVxyXG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBpc0ZlZWQgPyBbJ25hbWUnLCAndXJsJ10gOiBbJ25hbWUnLCAnZGVzY3JpcHRpb24nXVxyXG5cclxuICAgY29uc3QgWyBjcmVhdGVJdGVtTXV0YXRpb24sIHsgbG9hZGluZzogY3JlYXRlTG9hZGluZywgZXJyb3I6IGNyZWF0ZUVycm9yIH0gXSAgPSB1c2VNdXRhdGlvbihpc0ZlZWQgPyBDUkVBVEVfRkVFRF9NVVRBVElPTiA6IENSRUFURV9CVU5ETEVfTVVUQVRJT04pO1xyXG5cclxuICAgY29uc3QgdmFyaWFibGVzID0geyBkYXRhOiB7IGlkOiBzZWxlY3RlZC5pZCA/IHNlbGVjdGVkLmlkIDogJycgfSB9O1xyXG5cclxuXHJcbiAgIGlmKGNyZWF0ZUxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxXYWl0aW5nQ2xvY2sgY2xhc3NOYW1lPVwibXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvXCIvPlxyXG4gICB9ICBcclxuICAgaWYoY3JlYXRlRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIDxFcnJvclNpZ24gY2xhc3NOYW1lPVwibXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvXCIvPlxyXG4gICB9IFxyXG4gICBcclxuICAgcmV0dXJuIChcclxuICAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgY29uc3QgZGF0YSA9IHByZXBhcmVOZXdVcGRhdGVPYmplY3QoY3VycmVudEl0ZW0pXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgIFxyXG4gICAgICAgICBjcmVhdGVJdGVtTXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgZGF0YSB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldEl0ZW0oaW5pdGlhbFN0YXRlKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgbmV3TW9kZTogZmFsc2VcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgIH19XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgcm91bmRlZC1tZCBib3JkZXItNCBteS00IHB5LTIgcHgtNFwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiB0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTJcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlzRmVlZCA/ICdOZXcgRmVlZCcgOiAnTmV3IEJ1bmRsZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02Jz5cclxuICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgIDxHZW5lcmF0ZUlucHV0RmllbGRcclxuICAgICAgICAgICAgICAga2V5PXtgJHt0eXBlfS0ke25hbWV9YH1cclxuICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICBjaGFuZ2VIYW5kbGVyPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHktNCAke2lzRmVlZCA/IG51bGwgOiAncHQtMjgnfWB9PlxyXG4gICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17YHB5LTQgJHtgYmctJHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgfS00MDBgfSBob3ZlcjpiZy0ke1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICB9LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweC0xMiByb3VuZGVkYH1cclxuICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02ICc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+VGFnczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5DUkVBVEV9XHJcbiAgICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgaXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBweS0yJz5BZGQgTmV3IFRhZzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8U2VhcmNoSXRlbXMgXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZT17aXNGZWVkID8gU2VhcmNoUXVlcnlOYW1lLmZpbmRGZWVkVGFncyA6IFNlYXJjaFF1ZXJ5TmFtZS5maW5kQnVuZGxlVGFnc31cclxuICAgICAgICAgICAgICAgICAgcXVlcnk9e2lzRmVlZCA/IEZJTkRfRkVFRF9UQUdTX1FVRVJZIDogRklORF9CVU5ETEVfVEFHU19RVUVSWX1cclxuICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLnRhZ3N9XHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7aXNGZWVkID8gbnVsbCA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPkZlZWRzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC0yJz5cclxuICAgICAgICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS5mZWVkc31cclxuICAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5DUkVBVEV9XHJcbiAgICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgaXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBweS0yJz5BZGQgTmV3IEZlZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPFNlYXJjaEl0ZW1zIFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeU5hbWU9e1NlYXJjaFF1ZXJ5TmFtZS5maW5kRmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtGSU5EX0ZFRURTX1FVRVJZfVxyXG4gICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICA8Lz5cclxuICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=