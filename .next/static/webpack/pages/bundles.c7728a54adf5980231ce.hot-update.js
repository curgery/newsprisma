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
/* harmony import */ var _utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/prepareUpdateObj */ "./utils/prepareUpdateObj.ts");
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
    name: '',
    url: '',
    tags: []
  };
  var initialBundle = {
    name: '',
    description: '',
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

  if (createLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_11__.WaitingClock, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 12
    }, _this);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_11__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        var data = (0,_utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_6__.prepareNewUpdateObj)(currentItem);
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
          lineNumber: 78,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: inputFields.map(function (name) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_generateInputField__WEBPACK_IMPORTED_MODULE_9__.GenerateInputField, {
              currentItem: currentItem,
              name: name,
              changeHandler: setItem
            }, "".concat(type, "-").concat(name), false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "py-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "black py-2",
              children: "Tags:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "grid grid-cols-3 gap-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_8__.BadgeList, {
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.tags,
                action: _utils_types__WEBPACK_IMPORTED_MODULE_7__.ActionType.CREATE,
                setItem: setItem,
                item: currentItem
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "block py-2",
                children: "Add New Tag:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_10__.SearchItems, {
                queryName: isFeed ? _utils_types__WEBPACK_IMPORTED_MODULE_7__.SearchQueryName.findFeedTags : _utils_types__WEBPACK_IMPORTED_MODULE_7__.SearchQueryName.findBundleTags,
                query: isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.FIND_FEED_TAGS_QUERY : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.FIND_BUNDLE_TAGS_QUERY,
                setItem: setItem,
                currentItem: currentItem,
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.tags
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this), isFeed ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "py-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  className: "black py-2",
                  children: "Feeds:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "grid grid-cols-3 gap-2",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_8__.BadgeList, {
                    fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.feeds,
                    action: _utils_types__WEBPACK_IMPORTED_MODULE_7__.ActionType.CREATE,
                    setItem: setItem,
                    item: currentItem
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "py-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  className: "black py-2",
                  children: "Add New Feed:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_10__.SearchItems, {
                  queryName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.SearchQueryName.findFeeds,
                  query: _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_5__.FIND_FEEDS_QUERY,
                  setItem: setItem,
                  currentItem: currentItem,
                  fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.feeds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 19
              }, _this)]
            }, void 0, true)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "py-4 ".concat(isFeed ? null : 'pt-1'),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "py-4 ".concat("bg-".concat(isFeed ? 'green' : 'purple', "-400 "), " hover:bg-", isFeed ? 'green' : 'purple', "-700 text-white font-bold px-12 rounded"),
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(NewEditItem, "lcWXru5m/dJrO/fv4Ll4FSyG/n4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giXSwibmFtZXMiOlsiTmV3RWRpdEl0ZW0iLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImlzRmVlZCIsIkl0ZW1UeXBlIiwiaW5pdGlhbEZlZWQiLCJuYW1lIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImZlZWRzIiwiaW5pdGlhbFN0YXRlIiwidXNlU3RhdGUiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJpbnB1dEZpZWxkcyIsInVzZU11dGF0aW9uIiwiQ1JFQVRFX0ZFRURfTVVUQVRJT04iLCJDUkVBVEVfQlVORExFX01VVEFUSU9OIiwiY3JlYXRlSXRlbU11dGF0aW9uIiwiY3JlYXRlTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFcnJvciIsImVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInByZXBhcmVOZXdVcGRhdGVPYmoiLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwiY3VyclN0YXRlIiwiZWRpdE1vZGUiLCJuZXdNb2RlIiwibWFwIiwiQmFkZ2VGaWVsZE5hbWUiLCJBY3Rpb25UeXBlIiwiU2VhcmNoUXVlcnlOYW1lIiwiRklORF9GRUVEX1RBR1NfUVVFUlkiLCJGSU5EX0JVTkRMRV9UQUdTX1FVRVJZIiwiRklORF9GRUVEU19RVUVSWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQVFyQjtBQUFBOztBQUFBLE1BUEpDLElBT0ksUUFQSkEsSUFPSTtBQUFBLE1BTkpDLFFBTUksUUFOSkEsUUFNSTtBQUFBLE1BTEpDLFdBS0ksUUFMSkEsV0FLSTtBQUNKLE1BQU1DLE1BQU0sR0FBR0gsSUFBSSxLQUFLSSwyREFBeEI7QUFDQSxNQUFNQyxXQUF1QixHQUFHO0FBQUVDLFFBQUksRUFBRSxFQUFSO0FBQVlDLE9BQUcsRUFBRSxFQUFqQjtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBQWhDO0FBQ0EsTUFBTUMsYUFBMkIsR0FBRztBQUNsQ0gsUUFBSSxFQUFFLEVBRDRCO0FBRWxDSSxlQUFXLEVBQUUsRUFGcUI7QUFHbENGLFFBQUksRUFBRSxFQUg0QjtBQUlsQ0csU0FBSyxFQUFFO0FBSjJCLEdBQXBDO0FBTUEsTUFBTUMsWUFBMEIsR0FBR1QsTUFBTSxHQUFHRSxXQUFILEdBQWlCSSxhQUExRDs7QUFUSSxrQkFVMkJJLCtDQUFRLENBQWVELFlBQWYsQ0FWbkM7QUFBQSxNQVVHRSxXQVZIO0FBQUEsTUFVZ0JDLE9BVmhCOztBQVdKLE1BQU1DLFdBQVcsR0FBR2IsTUFBTSxHQUFHLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FBSCxHQUFxQixDQUFDLE1BQUQsRUFBUyxhQUFULENBQS9DOztBQVhJLHFCQWNGYyw0REFBVyxDQUFDZCxNQUFNLEdBQUdlLDhFQUFILEdBQTBCQyxnRkFBakMsQ0FkVDtBQUFBO0FBQUEsTUFhR0Msa0JBYkg7QUFBQTtBQUFBLE1BYWtDQyxhQWJsQyxrQkFheUJDLE9BYnpCO0FBQUEsTUFhd0RDLFdBYnhELGtCQWFpREMsS0FiakQ7O0FBZ0JKLE1BQUlILGFBQUosRUFBbUI7QUFDakIsd0JBQU8sOERBQUMsK0NBQUQ7QUFBYyxlQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0QsTUFBSUUsV0FBSixFQUFpQjtBQUNmLHdCQUFPLDhEQUFDLDRDQUFEO0FBQVcsZUFBUyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsMkJBQ0U7QUFDRSxjQUFRLEVBQUUsa0JBQUNFLENBQUQsRUFBTztBQUNmQSxTQUFDLENBQUNDLGNBQUY7QUFDQSxZQUFNQyxJQUFJLEdBQUdDLDRFQUFtQixDQUFDZCxXQUFELENBQWhDO0FBQ0FlLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0FQLDBCQUFrQixDQUFDO0FBQ2pCVyxtQkFBUyxFQUFFO0FBQUVKLGdCQUFJLEVBQUpBO0FBQUY7QUFETSxTQUFELENBQWxCO0FBR0FaLGVBQU8sQ0FBQ0gsWUFBRCxDQUFQO0FBQ0FWLG1CQUFXLENBQUMsVUFBQzhCLFNBQUQ7QUFBQSxpREFDUEEsU0FETztBQUVWQyxvQkFBUSxFQUFFLEtBRkE7QUFHVkMsbUJBQU8sRUFBRTtBQUhDO0FBQUEsU0FBRCxDQUFYO0FBS0QsT0FkSDtBQUFBLDZCQWdCRTtBQUFLLGlCQUFTLEVBQUMsNERBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsc0NBQWQ7QUFBQSxvQkFDRy9CLE1BQU0sR0FBRyxVQUFILEdBQWdCO0FBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLG9CQUNHYSxXQUFXLENBQUNtQixHQUFaLENBQWdCLFVBQUM3QixJQUFEO0FBQUEsZ0NBQ2YsOERBQUMsbUVBQUQ7QUFFRSx5QkFBVyxFQUFFUSxXQUZmO0FBR0Usa0JBQUksRUFBRVIsSUFIUjtBQUlFLDJCQUFhLEVBQUVTO0FBSmpCLHlCQUNVZixJQURWLGNBQ2tCTSxJQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURlO0FBQUEsV0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBZUU7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG9DQUNFO0FBQU8sdUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUssdUJBQVMsRUFBQyx3QkFBZjtBQUFBLHFDQUNFLDhEQUFDLGlEQUFEO0FBQ0UseUJBQVMsRUFBRThCLDZEQURiO0FBRUUsc0JBQU0sRUFBRUMsMkRBRlY7QUFHRSx1QkFBTyxFQUFFdEIsT0FIWDtBQUlFLG9CQUFJLEVBQUVEO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFVRTtBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBLHNDQUNFO0FBQU8seUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLDhEQUFDLHNEQUFEO0FBQ0UseUJBQVMsRUFDUFgsTUFBTSxHQUNGbUMsc0VBREUsR0FFRkEsd0VBSlI7QUFNRSxxQkFBSyxFQUFFbkMsTUFBTSxHQUFHb0MsNEVBQUgsR0FBMEJDLDhFQU56QztBQU9FLHVCQUFPLEVBQUV6QixPQVBYO0FBUUUsMkJBQVcsRUFBRUQsV0FSZjtBQVNFLHlCQUFTLEVBQUVzQiw2REFBbUI1QjtBQVRoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixFQXdCR0wsTUFBTSxHQUFHLElBQUgsZ0JBQ0w7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsTUFBZjtBQUFBLHdDQUNFO0FBQU8sMkJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUssMkJBQVMsRUFBQyx3QkFBZjtBQUFBLHlDQUNFLDhEQUFDLGlEQUFEO0FBQ0UsNkJBQVMsRUFBRWlDLDhEQURiO0FBRUUsMEJBQU0sRUFBRUMsMkRBRlY7QUFHRSwyQkFBTyxFQUFFdEIsT0FIWDtBQUlFLHdCQUFJLEVBQUVEO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBWUU7QUFBSyx5QkFBUyxFQUFDLE1BQWY7QUFBQSx3Q0FDRTtBQUFPLDJCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRSw4REFBQyxzREFBRDtBQUNFLDJCQUFTLEVBQUV3QixtRUFEYjtBQUVFLHVCQUFLLEVBQUVHLHdFQUZUO0FBR0UseUJBQU8sRUFBRTFCLE9BSFg7QUFJRSw2QkFBVyxFQUFFRCxXQUpmO0FBS0UsMkJBQVMsRUFBRXNCLDhEQUFvQnpCO0FBTGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVpGO0FBQUEsNEJBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFtRUU7QUFBSyxtQkFBUyxpQkFBVVIsTUFBTSxHQUFHLElBQUgsR0FBVSxNQUExQixDQUFkO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyw4QkFDUEEsTUFBTSxHQUFHLE9BQUgsR0FBYSxRQURaLDBCQUdQQSxNQUFNLEdBQUcsT0FBSCxHQUFhLFFBSFosNENBRFg7QUFNRSxnQkFBSSxFQUFDO0FBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFtR0QsQ0FsSU07O0dBQU1KLFc7VUFzQlRrQix3RDs7O0tBdEJTbEIsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idW5kbGVzLmM3NzI4YTU0YWRmNTk4MDIzMWNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ1JFQVRFX0JVTkRMRV9NVVRBVElPTixcclxuICBDUkVBVEVfRkVFRF9NVVRBVElPTixcclxufSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEZJTkRfQlVORExFX1RBR1NfUVVFUlksXHJcbiAgRklORF9GRUVEU19RVUVSWSxcclxuICBGSU5EX0ZFRURfVEFHU19RVUVSWSxcclxufSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9xdWVyaWVzJztcclxuaW1wb3J0IHsgcHJlcGFyZU5ld1VwZGF0ZU9iaiB9IGZyb20gJy4uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmonO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvblR5cGUsXHJcbiAgQmFkZ2VGaWVsZE5hbWUsXHJcbiAgQnVuZGxlT2JqZWN0LFxyXG4gIEZlZWRPYmplY3QsXHJcbiAgSXRlbVR5cGUsXHJcbiAgTmV3SXRlbVN0YXRlLFxyXG4gIFNlYXJjaFF1ZXJ5TmFtZSxcclxuICBTZWxlY3RlZEZlZWRTdGF0ZSxcclxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gJy4vYmFkZ2VMaXN0JztcclxuaW1wb3J0IHsgR2VuZXJhdGVJbnB1dEZpZWxkIH0gZnJvbSAnLi9nZW5lcmF0ZUlucHV0RmllbGQnO1xyXG5pbXBvcnQgeyBTZWFyY2hJdGVtcyB9IGZyb20gJy4vc2VhcmNoSXRlbXMnO1xyXG5pbXBvcnQgeyBFcnJvclNpZ24sIFdhaXRpbmdDbG9jayB9IGZyb20gJy4vc3ZnJztcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdFZGl0SXRlbSA9ICh7XHJcbiAgdHlwZSxcclxuICBzZWxlY3RlZCxcclxuICBzZXRTZWxlY3RlZCxcclxufToge1xyXG4gIHR5cGU6IEl0ZW1UeXBlO1xyXG4gIHNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZTtcclxuICBzZXRTZWxlY3RlZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U2VsZWN0ZWRGZWVkU3RhdGU+PjtcclxufSkgPT4ge1xyXG4gIGNvbnN0IGlzRmVlZCA9IHR5cGUgPT09IEl0ZW1UeXBlLkZlZWRUeXBlO1xyXG4gIGNvbnN0IGluaXRpYWxGZWVkOiBGZWVkT2JqZWN0ID0geyBuYW1lOiAnJywgdXJsOiAnJywgdGFnczogW10gfTtcclxuICBjb25zdCBpbml0aWFsQnVuZGxlOiBCdW5kbGVPYmplY3QgPSB7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZmVlZHM6IFtdLFxyXG4gIH07XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlOiBOZXdJdGVtU3RhdGUgPSBpc0ZlZWQgPyBpbml0aWFsRmVlZCA6IGluaXRpYWxCdW5kbGU7XHJcbiAgY29uc3QgW2N1cnJlbnRJdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlPE5ld0l0ZW1TdGF0ZT4oaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBpbnB1dEZpZWxkcyA9IGlzRmVlZCA/IFsnbmFtZScsICd1cmwnXSA6IFsnbmFtZScsICdkZXNjcmlwdGlvbiddO1xyXG5cclxuICBjb25zdCBbY3JlYXRlSXRlbU11dGF0aW9uLCB7IGxvYWRpbmc6IGNyZWF0ZUxvYWRpbmcsIGVycm9yOiBjcmVhdGVFcnJvciB9XSA9XHJcbiAgICB1c2VNdXRhdGlvbihpc0ZlZWQgPyBDUkVBVEVfRkVFRF9NVVRBVElPTiA6IENSRUFURV9CVU5ETEVfTVVUQVRJT04pO1xyXG5cclxuICBpZiAoY3JlYXRlTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxXYWl0aW5nQ2xvY2sgY2xhc3NOYW1lPSdteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG8nIC8+O1xyXG4gIH1cclxuICBpZiAoY3JlYXRlRXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3JTaWduIGNsYXNzTmFtZT0nbXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvJyAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHByZXBhcmVOZXdVcGRhdGVPYmooY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBjcmVhdGVJdGVtTXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgZGF0YSB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRJdGVtKGluaXRpYWxTdGF0ZSk7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xMiBnYXAtNCByb3VuZGVkLW1kIGJvcmRlci00IG15LTQgcHktMiBweC00Jz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2NvbC1zcGFuLTEyIHRleHQtbGcgZm9udC1tZWRpdW0gcHktMic+XHJcbiAgICAgICAgICAgIHtpc0ZlZWQgPyAnTmV3IEZlZWQnIDogJ05ldyBCdW5kbGUnfVxyXG4gICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNic+XHJcbiAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgICA8R2VuZXJhdGVJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake3R5cGV9LSR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZUhhbmRsZXI9e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2JsYWNrIHB5LTInPlRhZ3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLkNSRUFURX1cclxuICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgaXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPkFkZCBOZXcgVGFnOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSXRlbXNcclxuICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZlZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gU2VhcmNoUXVlcnlOYW1lLmZpbmRGZWVkVGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiBTZWFyY2hRdWVyeU5hbWUuZmluZEJ1bmRsZVRhZ3NcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBxdWVyeT17aXNGZWVkID8gRklORF9GRUVEX1RBR1NfUVVFUlkgOiBGSU5EX0JVTkRMRV9UQUdTX1FVRVJZfVxyXG4gICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2lzRmVlZCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxhY2sgcHktMic+RmVlZHM6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5DUkVBVEV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibGFjayBweS0yJz5BZGQgTmV3IEZlZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZT17U2VhcmNoUXVlcnlOYW1lLmZpbmRGZWVkc31cclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtGSU5EX0ZFRURTX1FVRVJZfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BweS00ICR7aXNGZWVkID8gbnVsbCA6ICdwdC0xJ31gfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktNCAke2BiZy0ke1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgfS00MDAgYH0gaG92ZXI6YmctJHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgIH0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB4LTEyIHJvdW5kZWRgfVxyXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9