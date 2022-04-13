webpackHotUpdate_N_E("pages/bundles",{

/***/ "./components/newEditItem.tsx":
/*!************************************!*\
  !*** ./components/newEditItem.tsx ***!
  \************************************/
/*! exports provided: NewEditItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEditItem", function() { return NewEditItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/api/graphql/mutations */ "./utils/api/graphql/mutations.ts");
/* harmony import */ var _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var _utils_optimisticCache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/optimisticCache */ "./utils/optimisticCache.ts");
/* harmony import */ var _utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/prepareUpdateObj */ "./utils/prepareUpdateObj.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _utils_update__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/update */ "./utils/update.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _generateInputField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./generateInputField */ "./components/generateInputField.tsx");
/* harmony import */ var _searchItems__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./searchItems */ "./components/searchItems.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");








var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\newEditItem.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var NewEditItem = function NewEditItem(_ref) {
  _s();

  var type = _ref.type,
      selected = _ref.selected,
      setSelected = _ref.setSelected;
  var isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_12__["ItemType"].FeedType;
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initialState),
      currentItem = _useState[0],
      setItem = _useState[1];

  var inputFields = isFeed ? ['name', 'url'] : ['name', 'description'];

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(isFeed ? _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_8__["CREATE_FEED_MUTATION"] : _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_8__["CREATE_BUNDLE_MUTATION"]),
      _useMutation2 = Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useMutation, 2),
      createItemMutation = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      createLoading = _useMutation2$.loading,
      createError = _useMutation2$.error;

  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(isFeed ? _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_8__["UPDATE_FEED_MUTATION"] : _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_8__["UPDATE_BUNDLE_MUTATION"]),
      _useMutation4 = Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useMutation3, 2),
      updateItemMutation = _useMutation4[0],
      _useMutation4$ = _useMutation4[1],
      updateLoading = _useMutation4$.loading,
      updateError = _useMutation4$.error;

  var variables = {
    data: {
      id: selected.id ? selected.id : ''
    }
  };

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_9__["FEED_QUERY"] : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_9__["BUNDLE_QUERY"], {
    variables: variables
  }),
      itemQueryLoading = _useQuery.loading,
      itemQueryError = _useQuery.error,
      itemQueryData = _useQuery.data;

  var _useQuery2 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(_utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_9__["ME_QUERY"]),
      meData = _useQuery2.data,
      meLoading = _useQuery2.loading,
      meError = _useQuery2.error;

  var _ref2 = itemQueryData || {},
      bundle = _ref2.bundle,
      feed = _ref2.feed;

  var item = isFeed ? feed : bundle;
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var __typename, likes, author, cleanedItem;

      return C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (item && selected.editMode) {
                __typename = item.__typename, likes = item.likes, author = item.author, cleanedItem = Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(item, ["__typename", "likes", "author"]);
                setItem(_objectSpread({}, cleanedItem));
              } else {
                setItem(initialState);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [itemQueryData]);

  if (createLoading || updateLoading || itemQueryLoading || meLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_17__["WaitingClock"], {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 12
    }, _this);
  }

  if (createError || updateError || itemQueryError || meError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg__WEBPACK_IMPORTED_MODULE_17__["ErrorSign"], {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 12
    }, _this);
  }

  console.log(itemQueryData);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: /*#__PURE__*/function () {
        var _ref4 = Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
          var data;
          return C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  e.preventDefault();
                  data = Object(_utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_11__["prepareNewUpdateObj"])(item, currentItem, isFeed, selected.editMode);
                  console.log(data);
                  selected.editMode ? updateItemMutation({
                    variables: {
                      data: data
                    },
                    optimisticResponse: Object(_utils_optimisticCache__WEBPACK_IMPORTED_MODULE_10__["optimisticCache"])(isFeed, 'update', data, currentItem, meData)
                  }) : createItemMutation({
                    variables: {
                      data: data
                    },
                    update: Object(_utils_update__WEBPACK_IMPORTED_MODULE_13__["updateCache"])(isFeed, 'create'),
                    optimisticResponse: Object(_utils_optimisticCache__WEBPACK_IMPORTED_MODULE_10__["optimisticCache"])(isFeed, 'create', data, currentItem, meData)
                  });
                  _context2.next = 6;
                  return setItem(initialState);

                case 6:
                  setSelected(function (currState) {
                    return _objectSpread(_objectSpread({}, currState), {}, {
                      editMode: false,
                      newMode: false
                    });
                  });

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref4.apply(this, arguments);
        };
      }(),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-12 gap-4 rounded-md border-4 my-4 py-2 px-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "col-span-12 text-lg font-medium py-2",
          children: isFeed ? 'New Feed' : 'New Bundle'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-6",
          children: inputFields.map(function (name) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_generateInputField__WEBPACK_IMPORTED_MODULE_15__["GenerateInputField"], {
              currentItem: currentItem,
              name: name,
              changeHandler: setItem
            }, "".concat(type, "-").concat(name), false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "py-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "black py-2",
              children: "Tags:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "grid grid-cols-3 gap-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_badgeList__WEBPACK_IMPORTED_MODULE_14__["BadgeList"], {
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_12__["BadgeFieldName"].tags,
                action: _utils_types__WEBPACK_IMPORTED_MODULE_12__["ActionType"].CREATE,
                setItem: setItem,
                item: currentItem
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "py-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "block py-2",
                children: "Add New Tag:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_searchItems__WEBPACK_IMPORTED_MODULE_16__["SearchItems"], {
                queryName: isFeed ? _utils_types__WEBPACK_IMPORTED_MODULE_12__["SearchQueryName"].findFeedTags : _utils_types__WEBPACK_IMPORTED_MODULE_12__["SearchQueryName"].findBundleTags,
                query: isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_9__["FIND_FEED_TAGS_QUERY"] : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_9__["FIND_BUNDLE_TAGS_QUERY"],
                setItem: setItem,
                currentItem: currentItem,
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_12__["BadgeFieldName"].tags
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, _this), isFeed ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-2",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "black py-2",
                  children: "Feeds:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid grid-cols-3 gap-2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_badgeList__WEBPACK_IMPORTED_MODULE_14__["BadgeList"], {
                    fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_12__["BadgeFieldName"].feeds,
                    action: _utils_types__WEBPACK_IMPORTED_MODULE_12__["ActionType"].CREATE,
                    setItem: setItem,
                    item: currentItem
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-2",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "black py-2",
                  children: "Add New Feed:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_searchItems__WEBPACK_IMPORTED_MODULE_16__["SearchItems"], {
                  queryName: _utils_types__WEBPACK_IMPORTED_MODULE_12__["SearchQueryName"].findFeeds,
                  query: _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_9__["FIND_FEEDS_QUERY"],
                  setItem: setItem,
                  currentItem: currentItem,
                  fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_12__["BadgeFieldName"].feeds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 19
              }, _this)]
            }, void 0, true)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "py-4 ".concat(isFeed ? null : 'pt-1'),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "py-4 ".concat("bg-".concat(isFeed ? 'green' : 'purple', "-400 "), " hover:bg-", isFeed ? 'green' : 'purple', "-700 text-white font-bold px-12 rounded"),
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(NewEditItem, "7kxjXgccAjg2k5RxFloMVJAxtSE=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"], _apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"], _apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"]];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/optimisticCache.ts":
/*!**********************************!*\
  !*** ./utils/optimisticCache.ts ***!
  \**********************************/
/*! exports provided: optimisticCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimisticCache", function() { return optimisticCache; });
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var optimisticCache = function optimisticCache(isFeed, action, data, currentItem, meData) {
  var _objectSpread2;

  var __typename = isFeed ? 'Feed' : 'Bundle';

  var id = {
    data: data
  };
  var me = meData.me;

  var response = _objectSpread(_objectSpread(_objectSpread({
    id: id
  }, currentItem), {}, (_objectSpread2 = {}, Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, isFeed ? 'bundles' : 'feeds', []), Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "tags", [].concat(Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentItem.tags.filter(function (tag) {
    return lodash__WEBPACK_IMPORTED_MODULE_2__["has"](tag, 'id');
  })), Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(lodash__WEBPACK_IMPORTED_MODULE_2__["get"](data, 'tags.create', [].map(function (tag) {
    return _objectSpread({
      __typename: isFeed ? 'FeedTag' : 'BundleTag'
    }, tag);
  }))))), _objectSpread2), lodash__WEBPACK_IMPORTED_MODULE_2__(isFeed ? {} : {
    feeds: currentItem.feeds
  })), {}, {
    author: me
  });

  return Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
    __typename: 'Mutation'
  }, action + __typename, _objectSpread({
    __typename: __typename
  }, response));
};

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/update.ts":
/*!*************************!*\
  !*** ./utils/update.ts ***!
  \*************************/
/*! exports provided: updateCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCache", function() { return updateCache; });
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var updateCache = function updateCache(isFeed, action) {
  return function (store, _ref) {
    var data = _ref.data;
    var item = data["".concat(action).concat(isFeed, " ? 'Feed' : 'Bundle'}")];

    try {
      store.writeQuery({
        query: isFeed ? _api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["FEED_QUERY"] : _api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["BUNDLE_QUERY"],
        variables: {
          data: {
            id: lodash__WEBPACK_IMPORTED_MODULE_3__["get"](item, 'id')
          }
        },
        data: Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, isFeed ? 'feed' : 'bundle', item)
      });
    } catch (e) {}

    try {
      var _store$readQuery = store.readQuery({
        query: isFeed ? _api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["FEEDS_QUERY"] : _api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["BUNDLES_QUERY"]
      }),
          feeds = _store$readQuery.feeds,
          bundles = _store$readQuery.bundles;

      var currentItems = isFeed ? feeds : bundles;
      store.writeQuery({
        query: isFeed ? _api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["FEEDS_QUERY"] : _api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["BUNDLES_QUERY"],
        data: Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, isFeed ? 'feeds' : 'bundles', [].concat(Object(C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentItems.filter(function (o) {
          return o.id !== item.id;
        })), [item]))
      });
    } catch (e) {}
  };
};

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL29wdGltaXN0aWNDYWNoZS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXBkYXRlLnRzIl0sIm5hbWVzIjpbIk5ld0VkaXRJdGVtIiwidHlwZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJpc0ZlZWQiLCJJdGVtVHlwZSIsIkZlZWRUeXBlIiwiaW5pdGlhbEZlZWQiLCJuYW1lIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImZlZWRzIiwiaW5pdGlhbFN0YXRlIiwidXNlU3RhdGUiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJpbnB1dEZpZWxkcyIsInVzZU11dGF0aW9uIiwiQ1JFQVRFX0ZFRURfTVVUQVRJT04iLCJDUkVBVEVfQlVORExFX01VVEFUSU9OIiwiY3JlYXRlSXRlbU11dGF0aW9uIiwiY3JlYXRlTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFcnJvciIsImVycm9yIiwiVVBEQVRFX0ZFRURfTVVUQVRJT04iLCJVUERBVEVfQlVORExFX01VVEFUSU9OIiwidXBkYXRlSXRlbU11dGF0aW9uIiwidXBkYXRlTG9hZGluZyIsInVwZGF0ZUVycm9yIiwidmFyaWFibGVzIiwiZGF0YSIsImlkIiwidXNlUXVlcnkiLCJGRUVEX1FVRVJZIiwiQlVORExFX1FVRVJZIiwiaXRlbVF1ZXJ5TG9hZGluZyIsIml0ZW1RdWVyeUVycm9yIiwiaXRlbVF1ZXJ5RGF0YSIsIk1FX1FVRVJZIiwibWVEYXRhIiwibWVMb2FkaW5nIiwibWVFcnJvciIsImJ1bmRsZSIsImZlZWQiLCJpdGVtIiwidXNlRWZmZWN0IiwiZWRpdE1vZGUiLCJfX3R5cGVuYW1lIiwibGlrZXMiLCJhdXRob3IiLCJjbGVhbmVkSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmVwYXJlTmV3VXBkYXRlT2JqIiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwib3B0aW1pc3RpY0NhY2hlIiwidXBkYXRlIiwidXBkYXRlQ2FjaGUiLCJjdXJyU3RhdGUiLCJuZXdNb2RlIiwibWFwIiwiQmFkZ2VGaWVsZE5hbWUiLCJBY3Rpb25UeXBlIiwiQ1JFQVRFIiwiU2VhcmNoUXVlcnlOYW1lIiwiZmluZEZlZWRUYWdzIiwiZmluZEJ1bmRsZVRhZ3MiLCJGSU5EX0ZFRURfVEFHU19RVUVSWSIsIkZJTkRfQlVORExFX1RBR1NfUVVFUlkiLCJmaW5kRmVlZHMiLCJGSU5EX0ZFRURTX1FVRVJZIiwiYWN0aW9uIiwibWUiLCJyZXNwb25zZSIsImZpbHRlciIsInRhZyIsIl8iLCJzdG9yZSIsIndyaXRlUXVlcnkiLCJxdWVyeSIsInJlYWRRdWVyeSIsIkZFRURTX1FVRVJZIiwiQlVORExFU19RVUVSWSIsImJ1bmRsZXMiLCJjdXJyZW50SXRlbXMiLCJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFRQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FRckI7QUFBQTs7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxRQU1JLFFBTkpBLFFBTUk7QUFBQSxNQUxKQyxXQUtJLFFBTEpBLFdBS0k7QUFDSixNQUFNQyxNQUFNLEdBQUdILElBQUksS0FBS0ksc0RBQVEsQ0FBQ0MsUUFBakM7QUFDQSxNQUFNQyxXQUF1QixHQUFHO0FBQUVDLFFBQUksRUFBRSxFQUFSO0FBQVlDLE9BQUcsRUFBRSxFQUFqQjtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBQWhDO0FBQ0EsTUFBTUMsYUFBMkIsR0FBRztBQUNsQ0gsUUFBSSxFQUFFLEVBRDRCO0FBRWxDSSxlQUFXLEVBQUUsRUFGcUI7QUFHbENGLFFBQUksRUFBRSxFQUg0QjtBQUlsQ0cs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MENBQUEsQ0FBTWxDLElBQU4sRUFBWSxJQUFaO0FBQU47QUFBUixTQUZFO0FBR2JkLFlBQUksRUFBRSxnS0FBRzdCLE1BQU0sR0FBRyxNQUFILEdBQVksUUFBdkIsRUFBa0MyQyxJQUFsQztBQUhTLE9BQWpCO0FBS0gsS0FORCxDQU1FLE9BQU9TLENBQVAsRUFBVSxDQUFFOztBQUVkLFFBQUk7QUFBQSw2QkFDMkIwQixLQUFLLENBQUNHLFNBQU4sQ0FBZ0I7QUFDdkNELGFBQUssRUFBRWhGLE1BQU0sR0FBR2tGLGdFQUFILEdBQWlCQyxrRUFBYUE7QUFESixPQUFoQixDQUQzQjtBQUFBLFVBQ1ExRSxLQURSLG9CQUNRQSxLQURSO0FBQUEsVUFDZTJFLE9BRGYsb0JBQ2VBLE9BRGY7O0FBSUEsVUFBTUMsWUFBWSxHQUFHckYsTUFBTSxHQUFHUyxLQUFILEdBQVcyRSxPQUF0QztBQUVBTixXQUFLLENBQUNDLFVBQU4sQ0FBaUI7QUFDYkMsYUFBSyxFQUFFaEYsTUFBTSxHQUFHa0YsZ0VBQUgsR0FBaUJDLGtFQURqQjtBQUVidEQsWUFBSSxFQUFFLGdLQUNEN0IsTUFBTSxHQUFHLE9BQUgsR0FBYSxTQURwQiwyS0FFT3FGLFlBQVksQ0FBQ1YsTUFBYixDQUFvQixVQUFDVyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ3hELEVBQUYsS0FBU2EsSUFBSSxDQUFDYixFQUFyQjtBQUFBLFNBQXBCLENBRlAsSUFFcURhLElBRnJEO0FBRlMsT0FBakI7QUFRRixLQWRGLENBY0csT0FBT1MsQ0FBUCxFQUFVLENBQUU7QUFDbEIsR0ExQjBCO0FBQUEsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVuZGxlcy4zNWNhM2M0MDBlYjdhNmIwOThjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENSRUFURV9CVU5ETEVfTVVUQVRJT04sXHJcbiAgQ1JFQVRFX0ZFRURfTVVUQVRJT04sXHJcbiAgVVBEQVRFX0JVTkRMRV9NVVRBVElPTixcclxuICBVUERBVEVfRkVFRF9NVVRBVElPTixcclxufSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEJVTkRMRV9RVUVSWSxcclxuICBGRUVEX1FVRVJZLFxyXG4gIEZJTkRfQlVORExFX1RBR1NfUVVFUlksXHJcbiAgRklORF9GRUVEU19RVUVSWSxcclxuICBGSU5EX0ZFRURfVEFHU19RVUVSWSxcclxuICBNRV9RVUVSWSxcclxufSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9xdWVyaWVzJztcclxuaW1wb3J0IHsgb3B0aW1pc3RpY0NhY2hlIH0gZnJvbSAnLi4vdXRpbHMvb3B0aW1pc3RpY0NhY2hlJztcclxuaW1wb3J0IHsgcHJlcGFyZU5ld1VwZGF0ZU9iaiB9IGZyb20gJy4uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmonO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvblR5cGUsXHJcbiAgQmFkZ2VGaWVsZE5hbWUsXHJcbiAgQnVuZGxlT2JqZWN0LFxyXG4gIEZlZWRPYmplY3QsXHJcbiAgSXRlbVR5cGUsXHJcbiAgTmV3SXRlbVN0YXRlLFxyXG4gIFNlYXJjaFF1ZXJ5TmFtZSxcclxuICBTZWxlY3RlZEZlZWRTdGF0ZSxcclxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IHVwZGF0ZUNhY2hlIH0gZnJvbSAnLi4vdXRpbHMvdXBkYXRlJztcclxuaW1wb3J0IHsgQmFkZ2VMaXN0IH0gZnJvbSAnLi9iYWRnZUxpc3QnO1xyXG5pbXBvcnQgeyBHZW5lcmF0ZUlucHV0RmllbGQgfSBmcm9tICcuL2dlbmVyYXRlSW5wdXRGaWVsZCc7XHJcbmltcG9ydCB7IFNlYXJjaEl0ZW1zIH0gZnJvbSAnLi9zZWFyY2hJdGVtcyc7XHJcbmltcG9ydCB7IEVycm9yU2lnbiwgV2FpdGluZ0Nsb2NrIH0gZnJvbSAnLi9zdmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5ld0VkaXRJdGVtID0gKHtcclxuICB0eXBlLFxyXG4gIHNlbGVjdGVkLFxyXG4gIHNldFNlbGVjdGVkLFxyXG59OiB7XHJcbiAgdHlwZTogSXRlbVR5cGU7XHJcbiAgc2VsZWN0ZWQ6IFNlbGVjdGVkRmVlZFN0YXRlO1xyXG4gIHNldFNlbGVjdGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTZWxlY3RlZEZlZWRTdGF0ZT4+O1xyXG59KSA9PiB7XHJcbiAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGU7XHJcbiAgY29uc3QgaW5pdGlhbEZlZWQ6IEZlZWRPYmplY3QgPSB7IG5hbWU6ICcnLCB1cmw6ICcnLCB0YWdzOiBbXSB9O1xyXG4gIGNvbnN0IGluaXRpYWxCdW5kbGU6IEJ1bmRsZU9iamVjdCA9IHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBmZWVkczogW10sXHJcbiAgfTtcclxuICBjb25zdCBpbml0aWFsU3RhdGU6IE5ld0l0ZW1TdGF0ZSA9IGlzRmVlZCA/IGluaXRpYWxGZWVkIDogaW5pdGlhbEJ1bmRsZTtcclxuICBjb25zdCBbY3VycmVudEl0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGU8TmV3SXRlbVN0YXRlPihpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IGlucHV0RmllbGRzID0gaXNGZWVkID8gWyduYW1lJywgJ3VybCddIDogWyduYW1lJywgJ2Rlc2NyaXB0aW9uJ107XHJcblxyXG4gIGNvbnN0IFtjcmVhdGVJdGVtTXV0YXRpb24sIHsgbG9hZGluZzogY3JlYXRlTG9hZGluZywgZXJyb3I6IGNyZWF0ZUVycm9yIH1dID1cclxuICAgIHVzZU11dGF0aW9uKGlzRmVlZCA/IENSRUFURV9GRUVEX01VVEFUSU9OIDogQ1JFQVRFX0JVTkRMRV9NVVRBVElPTik7XHJcblxyXG4gIGNvbnN0IFt1cGRhdGVJdGVtTXV0YXRpb24sIHsgbG9hZGluZzogdXBkYXRlTG9hZGluZywgZXJyb3I6IHVwZGF0ZUVycm9yIH1dID1cclxuICAgIHVzZU11dGF0aW9uKGlzRmVlZCA/IFVQREFURV9GRUVEX01VVEFUSU9OIDogVVBEQVRFX0JVTkRMRV9NVVRBVElPTik7XHJcblxyXG4gIGNvbnN0IHZhcmlhYmxlcyA9IHsgZGF0YTogeyBpZDogc2VsZWN0ZWQuaWQgPyBzZWxlY3RlZC5pZCA6ICcnIH0gfTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgbG9hZGluZzogaXRlbVF1ZXJ5TG9hZGluZyxcclxuICAgIGVycm9yOiBpdGVtUXVlcnlFcnJvcixcclxuICAgIGRhdGE6IGl0ZW1RdWVyeURhdGEsXHJcbiAgfSA9IHVzZVF1ZXJ5KGlzRmVlZCA/IEZFRURfUVVFUlkgOiBCVU5ETEVfUVVFUlksIHsgdmFyaWFibGVzIH0pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBtZURhdGEsXHJcbiAgICBsb2FkaW5nOiBtZUxvYWRpbmcsXHJcbiAgICBlcnJvcjogbWVFcnJvcixcclxuICB9ID0gdXNlUXVlcnkoTUVfUVVFUlkpO1xyXG5cclxuICBjb25zdCB7IGJ1bmRsZSwgZmVlZCB9ID0gaXRlbVF1ZXJ5RGF0YSB8fCB7fTtcclxuICBjb25zdCBpdGVtID0gaXNGZWVkID8gZmVlZCA6IGJ1bmRsZTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtICYmIHNlbGVjdGVkLmVkaXRNb2RlKSB7XHJcbiAgICAgICAgY29uc3QgeyBfX3R5cGVuYW1lLCBsaWtlcywgYXV0aG9yLCAuLi5jbGVhbmVkSXRlbSB9ID0gaXRlbTtcclxuICAgICAgICBzZXRJdGVtKHsgLi4uY2xlYW5lZEl0ZW0gfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXRlbShpbml0aWFsU3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG4gIH0sIFtpdGVtUXVlcnlEYXRhXSk7XHJcblxyXG4gIGlmIChjcmVhdGVMb2FkaW5nIHx8IHVwZGF0ZUxvYWRpbmcgfHwgaXRlbVF1ZXJ5TG9hZGluZyB8fCBtZUxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8V2FpdGluZ0Nsb2NrIGNsYXNzTmFtZT0nbXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvJyAvPjtcclxuICB9XHJcbiAgaWYgKGNyZWF0ZUVycm9yIHx8IHVwZGF0ZUVycm9yIHx8IGl0ZW1RdWVyeUVycm9yIHx8IG1lRXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3JTaWduIGNsYXNzTmFtZT0nbXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvJyAvPjtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGl0ZW1RdWVyeURhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBwcmVwYXJlTmV3VXBkYXRlT2JqKFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICBjdXJyZW50SXRlbSxcclxuICAgICAgICAgICAgaXNGZWVkLFxyXG4gICAgICAgICAgICBzZWxlY3RlZC5lZGl0TW9kZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZWRpdE1vZGVcclxuICAgICAgICAgICAgPyB1cGRhdGVJdGVtTXV0YXRpb24oe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGEgfSxcclxuICAgICAgICAgICAgICAgIG9wdGltaXN0aWNSZXNwb25zZTogb3B0aW1pc3RpY0NhY2hlKFxyXG4gICAgICAgICAgICAgICAgICBpc0ZlZWQsXHJcbiAgICAgICAgICAgICAgICAgICd1cGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbSxcclxuICAgICAgICAgICAgICAgICAgbWVEYXRhXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogY3JlYXRlSXRlbU11dGF0aW9uKHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBkYXRhIH0sXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZUNhY2hlKGlzRmVlZCwgJ2NyZWF0ZScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiBvcHRpbWlzdGljQ2FjaGUoXHJcbiAgICAgICAgICAgICAgICAgIGlzRmVlZCxcclxuICAgICAgICAgICAgICAgICAgJ2NyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLFxyXG4gICAgICAgICAgICAgICAgICBtZURhdGFcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhd2FpdCBzZXRJdGVtKGluaXRpYWxTdGF0ZSk7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xMiBnYXAtNCByb3VuZGVkLW1kIGJvcmRlci00IG15LTQgcHktMiBweC00Jz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2NvbC1zcGFuLTEyIHRleHQtbGcgZm9udC1tZWRpdW0gcHktMic+XHJcbiAgICAgICAgICAgIHtpc0ZlZWQgPyAnTmV3IEZlZWQnIDogJ05ldyBCdW5kbGUnfVxyXG4gICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNic+XHJcbiAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgICA8R2VuZXJhdGVJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake3R5cGV9LSR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZUhhbmRsZXI9e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2JsYWNrIHB5LTInPlRhZ3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLkNSRUFURX1cclxuICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgaXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPkFkZCBOZXcgVGFnOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSXRlbXNcclxuICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZlZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gU2VhcmNoUXVlcnlOYW1lLmZpbmRGZWVkVGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiBTZWFyY2hRdWVyeU5hbWUuZmluZEJ1bmRsZVRhZ3NcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBxdWVyeT17aXNGZWVkID8gRklORF9GRUVEX1RBR1NfUVVFUlkgOiBGSU5EX0JVTkRMRV9UQUdTX1FVRVJZfVxyXG4gICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2lzRmVlZCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxhY2sgcHktMic+RmVlZHM6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5DUkVBVEV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibGFjayBweS0yJz5BZGQgTmV3IEZlZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZT17U2VhcmNoUXVlcnlOYW1lLmZpbmRGZWVkc31cclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtGSU5EX0ZFRURTX1FVRVJZfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BweS00ICR7aXNGZWVkID8gbnVsbCA6ICdwdC0xJ31gfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktNCAke2BiZy0ke1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgfS00MDAgYH0gaG92ZXI6YmctJHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgIH0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB4LTEyIHJvdW5kZWRgfVxyXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBtZSBmcm9tICcuLi9wYWdlcy9hcGkvbWUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBvcHRpbWlzdGljQ2FjaGUgPSAoIGlzRmVlZCwgYWN0aW9uLCBkYXRhLCBjdXJyZW50SXRlbSwgbWVEYXRhICkgPT4ge1xyXG4gICAgY29uc3QgX190eXBlbmFtZSA9ICBpc0ZlZWQgPyAnRmVlZCc6ICdCdW5kbGUnO1xyXG4gICAgY29uc3QgaWQgPSB7ZGF0YX07XHJcbiAgICBjb25zdCB7IG1lIH0gPSBtZURhdGE7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgLi4uY3VycmVudEl0ZW0sXHJcbiAgICAgICAgW2lzRmVlZCA/ICdidW5kbGVzJyA6ICdmZWVkcyddIDogW10sXHJcbiAgICAgICAgdGFnczogW1xyXG4gICAgICAgICAgICAuLi5jdXJyZW50SXRlbS50YWdzLmZpbHRlcigodGFnKSA9PiBfLmhhcyh0YWcsICdpZCcpKSxcclxuICAgICAgICAgICAgLi4uXy5nZXQoZGF0YSwgJ3RhZ3MuY3JlYXRlJywgW10ubWFwKCh0YWcpID0+ICh7XHJcblxyXG4gICAgICAgICAgICAgICAgX190eXBlbmFtZTogaXNGZWVkID8gJ0ZlZWRUYWcnIDogJ0J1bmRsZVRhZycsXHJcbiAgICAgICAgICAgICAgICAuLi50YWcsXHJcbiAgICAgICAgICAgIH0pKSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIC4uLl8oaXNGZWVkID8ge30gOiB7XHJcbiAgICAgICAgICAgIGZlZWRzOiBjdXJyZW50SXRlbS5mZWVkcyxcclxuICAgICAgICB9KSxcclxuICAgICAgICBhdXRob3I6IG1lLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBfX3R5cGVuYW1lOiAnTXV0YXRpb24nLFxyXG4gICAgICAgIFthY3Rpb24gKyBfX3R5cGVuYW1lXToge1xyXG4gICAgICAgICAgICBfX3R5cGVuYW1lLFxyXG4gICAgICAgICAgLi4ucmVzcG9uc2UsICBcclxuICAgIH0sXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQlVORExFU19RVUVSWSwgQlVORExFX1FVRVJZLCBGRUVEU19RVUVSWSwgRkVFRF9RVUVSWSB9IGZyb20gXCIuL2FwaS9ncmFwaHFsL3F1ZXJpZXNcIjtcclxuaW1wb3J0ICogIGFzIF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhY2hlID0gKGlzRmVlZCwgYWN0aW9uKSA9PiAoIHN0b3JlLCB7IGRhdGEgfSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IGRhdGFbYCR7YWN0aW9ufSR7aXNGZWVkfSA/ICdGZWVkJyA6ICdCdW5kbGUnfWBdO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0b3JlLndyaXRlUXVlcnkoe1xyXG4gICAgICAgICAgICBxdWVyeTogaXNGZWVkID8gRkVFRF9RVUVSWSA6IEJVTkRMRV9RVUVSWSxcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGE6IHsgaWQ6IF8uZ2V0KGl0ZW0sICdpZCcpfX0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgW2lzRmVlZCA/ICdmZWVkJyA6ICdidW5kbGUnXTogaXRlbX0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBmZWVkcywgYnVuZGxlcyB9ID0gc3RvcmUucmVhZFF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IGlzRmVlZCA/IEZFRURTX1FVRVJZIDogQlVORExFU19RVUVSWSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjdXJyZW50SXRlbXMgPSBpc0ZlZWQgPyBmZWVkcyA6IGJ1bmRsZXM7XHJcblxyXG4gICAgICAgIHN0b3JlLndyaXRlUXVlcnkoe1xyXG4gICAgICAgICAgICBxdWVyeTogaXNGZWVkID8gRkVFRFNfUVVFUlkgOiBCVU5ETEVTX1FVRVJZLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBbaXNGZWVkID8gJ2ZlZWRzJyA6ICdidW5kbGVzJ106IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50SXRlbXMuZmlsdGVyKChvKSA9PiBvLmlkICE9PSBpdGVtLmlkKSwgaXRlbSxcclxuICAgICAgICAgICAgICAgIF0sICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgfSBjYXRjaCAoZSkge31cclxufTtcclxuXHJcblxyXG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ==