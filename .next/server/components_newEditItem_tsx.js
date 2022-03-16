exports.id = "components_newEditItem_tsx";
exports.ids = ["components_newEditItem_tsx"];
exports.modules = {

/***/ "./components/newEditItem.tsx":
/*!************************************!*\
  !*** ./components/newEditItem.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewEditItem": function() { return /* binding */ NewEditItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api/graphql/mutations */ "./utils/api/graphql/mutations.ts");
/* harmony import */ var _utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/prepareUpdateObj */ "./utils/prepareUpdateObj.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\newEditItem.tsx";






const NewEditItem = ({
  type,
  selected,
  setSelected
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_5__.ItemType.FeedType;
  const initialFeed = {
    name: "",
    url: "",
    tags: []
  };
  const initialBundle = {
    name: "",
    description: "",
    tags: [],
    feeds: []
  };
  const initialState = isFeed ? initialFeed : initialBundle;
  const {
    0: currentItem,
    1: setItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState);
  const inputFields = isFeed ? ['name', 'url'] : ['name', 'description'];
  const [createItemMutation, {
    loading: createLoading,
    error: createError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(isFeed ? _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.CREATE_FEED_MUTATION : _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.CREATE_BUNDLE_MUTATION);

  if (createLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_6__.WaitingClock, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 14
    }, undefined);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_6__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 14
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: e => {
        e.preventDefault();
        const data = (0,_utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_4__.prepareNewUpdateObj)(currentItem);
        console.log(data);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-12 gap-4 rounded-md border-4 my-4 py-2 px-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "col-span-12 text-lg font-medium py-2",
          children: isFeed ? "New Feed" : "New Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: inputFields.map(name => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: name
          }, name, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 19
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `py-4 ${isFeed ? null : 'pt-28'}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: `py-4 ${`bg-${isFeed ? 'green' : 'purple'}-400 `} hover:bg-${isFeed ? 'green' : 'purple'}-700 text-white font-bold px-12 rounded`,
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 16
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 10
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./utils/api/graphql/mutations.ts":
/*!****************************************!*\
  !*** ./utils/api/graphql/mutations.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LIKE_BUNDLE_MUTATION": function() { return /* binding */ LIKE_BUNDLE_MUTATION; },
/* harmony export */   "LIKE_FEED_MUTATION": function() { return /* binding */ LIKE_FEED_MUTATION; },
/* harmony export */   "CREATE_BUNDLE_MUTATION": function() { return /* binding */ CREATE_BUNDLE_MUTATION; },
/* harmony export */   "UPDATE_BUNDLE_MUTATION": function() { return /* binding */ UPDATE_BUNDLE_MUTATION; },
/* harmony export */   "CREATE_FEED_MUTATION": function() { return /* binding */ CREATE_FEED_MUTATION; },
/* harmony export */   "UPDATE_FEED_MUTATION": function() { return /* binding */ UPDATE_FEED_MUTATION; },
/* harmony export */   "CREATE_SAVED_ARTICLE_MUTATION": function() { return /* binding */ CREATE_SAVED_ARTICLE_MUTATION; },
/* harmony export */   "DELETE_BUNDLE_MUTATION": function() { return /* binding */ DELETE_BUNDLE_MUTATION; },
/* harmony export */   "DELETE_FEED_MUTATION": function() { return /* binding */ DELETE_FEED_MUTATION; },
/* harmony export */   "DELETE_SAVED_ARTICLE_MUTATION": function() { return /* binding */ DELETE_SAVED_ARTICLE_MUTATION; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragments */ "./utils/api/graphql/fragments.ts");


const LIKE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation likeBundleMutation($data: LikeBundleInput) {
    likeBundle(data: $data) {
      ...BundleFragment
      feeds {
        ...FeedFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
`;
const LIKE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation likeFeedMutation($data: LikeFeedInput) {
    likeFeed(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
`;
const CREATE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation createBundleMutation($data: BundleCreateInput) {
    createBundle(data: $data) {
      ...BundleFragment
      feeds {
        ...FeedFragment
        bundles {
          ...BundleFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const UPDATE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation updateBundleMutation($data: BundleUpdateInput) {
    updateBundle(data: $data) {
      ...BundleFragment
      feeds {
        ...FeedFragment
        bundles {
          ...BundleFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const CREATE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation createFeedMutation($data: FeedCreateInput) {
    createFeed(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
        feeds {
          ...FeedFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const UPDATE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation updateFeedMutation($data: FeedUpdateInput) {
    updateFeed(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
        feeds {
          ...FeedFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const CREATE_SAVED_ARTICLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation createSavedArticleMutation($data: SavedArticleCreateInput) {
    createSavedArticle(data: $data) {
      ...SavedArticleFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.SAVED_ARTICLE_FRAGMENT}
`;
const DELETE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation deleteBundleMutation($data: BundleInput) {
    deleteBundle(data: $data) {
      id
    }
  }
`;
const DELETE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation deleteFeedMutation($data: FeedInput) {
    deleteFeed(data: $data) {
      id
    }
  }
`;
const DELETE_SAVED_ARTICLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation deleteSavedArticleMutation($data: DeleteSavedArticleInput) {
    deleteSavedArticle(data: $data) {
      id
      url
    }
  }
`;

/***/ }),

/***/ "./utils/prepareUpdateObj.ts":
/*!***********************************!*\
  !*** ./utils/prepareUpdateObj.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareNewUpdateObj": function() { return /* binding */ prepareNewUpdateObj; }
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const genNestedItems = currentItem => {
  const tags = "tags" in currentItem ? {
    tags: {
      connect: currentItem.tags.map(({
        id
      }) => ({
        id
      })).filter(({
        id
      }) => id !== undefined),
      create: currentItem.tags.filter(({
        id
      }) => id === undefined).map(o => _objectSpread(_objectSpread({}, o), {}, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)()
      }))
    }
  } : {};
  const feeds = 'feeds' in currentItem ? {
    feeds: {
      connect: currentItem.feeds.map(({
        id
      }) => ({
        id
      })).filter(({
        id
      }) => id !== undefined)
    }
  } : {};

  const {
    __typename,
    likes,
    author,
    bundles
  } = currentItem,
        cleanedItem = _objectWithoutProperties(currentItem, ["__typename", "likes", "author", "bundles"]);

  return _objectSpread(_objectSpread(_objectSpread({}, cleanedItem), tags), feeds);
};

const prepareNewUpdateObj = currentItem => {
  const currentData = genNestedItems(currentItem);
  return _objectSpread(_objectSpread({}, currentData), {}, {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)()
  });
};

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25ld0VkaXRJdGVtLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvcHJlcGFyZVVwZGF0ZU9iai50cyJdLCJuYW1lcyI6WyJOZXdFZGl0SXRlbSIsInR5cGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaXNGZWVkIiwiSXRlbVR5cGUiLCJpbml0aWFsRmVlZCIsIm5hbWUiLCJ1cmwiLCJ0YWdzIiwiaW5pdGlhbEJ1bmRsZSIsImRlc2NyaXB0aW9uIiwiZmVlZHMiLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJ1c2VTdGF0ZSIsImlucHV0RmllbGRzIiwiY3JlYXRlSXRlbU11dGF0aW9uIiwibG9hZGluZyIsImNyZWF0ZUxvYWRpbmciLCJlcnJvciIsImNyZWF0ZUVycm9yIiwidXNlTXV0YXRpb24iLCJDUkVBVEVfRkVFRF9NVVRBVElPTiIsIkNSRUFURV9CVU5ETEVfTVVUQVRJT04iLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicHJlcGFyZU5ld1VwZGF0ZU9iaiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJMSUtFX0JVTkRMRV9NVVRBVElPTiIsImdxbCIsIkJVTkRMRV9GUkFHTUVOVCIsIkZFRURfRlJBR01FTlQiLCJMSUtFX0ZFRURfTVVUQVRJT04iLCJVUERBVEVfQlVORExFX01VVEFUSU9OIiwiVVBEQVRFX0ZFRURfTVVUQVRJT04iLCJDUkVBVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiIsIlNBVkVEX0FSVElDTEVfRlJBR01FTlQiLCJERUxFVEVfQlVORExFX01VVEFUSU9OIiwiREVMRVRFX0ZFRURfTVVUQVRJT04iLCJERUxFVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiIsImdlbk5lc3RlZEl0ZW1zIiwiY29ubmVjdCIsImlkIiwiZmlsdGVyIiwidW5kZWZpbmVkIiwiY3JlYXRlIiwibyIsInV1aWR2NCIsIl9fdHlwZW5hbWUiLCJsaWtlcyIsImF1dGhvciIsImJ1bmRsZXMiLCJjbGVhbmVkSXRlbSIsImN1cnJlbnREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFDekJDLE1BRHlCO0FBRXpCQyxVQUZ5QjtBQUd6QkM7QUFIeUIsQ0FBRCxLQVNyQjtBQUNGLFFBQU1DLE1BQU0sR0FBR0gsSUFBSSxLQUFLSSwyREFBeEI7QUFDQSxRQUFNQyxXQUF1QixHQUFHO0FBQUNDLFFBQUksRUFBRSxFQUFQO0FBQVdDLE9BQUcsRUFBRSxFQUFoQjtBQUFvQkMsUUFBSSxFQUFFO0FBQTFCLEdBQWhDO0FBQ0EsUUFBTUMsYUFBMkIsR0FBRztBQUFDSCxRQUFJLEVBQUUsRUFBUDtBQUFXSSxlQUFXLEVBQUUsRUFBeEI7QUFBNEJGLFFBQUksRUFBRSxFQUFsQztBQUFzQ0csU0FBSyxFQUFFO0FBQTdDLEdBQXBDO0FBQ0EsUUFBTUMsWUFBMEIsR0FBR1QsTUFBTSxHQUFHRSxXQUFILEdBQWlCSSxhQUExRDtBQUNBLFFBQU07QUFBQSxPQUFDSSxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUF5QkMsK0NBQVEsQ0FBZUgsWUFBZixDQUF2QztBQUNBLFFBQU1JLFdBQVcsR0FBR2IsTUFBTSxHQUFHLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FBSCxHQUFxQixDQUFDLE1BQUQsRUFBUyxhQUFULENBQS9DO0FBRUQsUUFBTSxDQUFFYyxrQkFBRixFQUFzQjtBQUFFQyxXQUFPLEVBQUVDLGFBQVg7QUFBMEJDLFNBQUssRUFBRUM7QUFBakMsR0FBdEIsSUFBMEVDLDJEQUFXLENBQUNuQixNQUFNLEdBQUdvQiw4RUFBSCxHQUEwQkMsZ0ZBQWpDLENBQTNGOztBQUVBLE1BQUdMLGFBQUgsRUFBa0I7QUFDZix3QkFBTyw4REFBQyw4Q0FB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RSxLQUFLRSxTQUZwQjtBQURKO0FBRFQsR0FESixHQVFJLEVBVEo7O0FBV0UsUUFBTTtBQUFFSSxjQUFGO0FBQWNDLFNBQWQ7QUFBcUJDLFVBQXJCO0FBQTZCQztBQUE3QixNQUF5RDFDLFdBQS9EO0FBQUEsUUFBK0MyQyxXQUEvQyw0QkFBK0QzQyxXQUEvRDs7QUFFQSx1REFBWTJDLFdBQVosR0FBNEJoRCxJQUE1QixHQUFxQ0csS0FBckM7QUFHTixDQTdCRDs7QUFnQ08sTUFBTWlCLG1CQUFtQixHQUFJZixXQUFELElBQWlCO0FBQ2pELFFBQU00QyxXQUFXLEdBQUliLGNBQWMsQ0FBQy9CLFdBQUQsQ0FBbkM7QUFFQSx5Q0FBWTRDLFdBQVo7QUFBMEJYLE1BQUUsRUFBRUssd0NBQU07QUFBcEM7QUFDRixDQUpNLEMiLCJmaWxlIjoiY29tcG9uZW50c19uZXdFZGl0SXRlbV90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENSRUFURV9CVU5ETEVfTVVUQVRJT04sIENSRUFURV9GRUVEX01VVEFUSU9OIH0gZnJvbSAnLi4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zJztcclxuaW1wb3J0IHsgcHJlcGFyZU5ld1VwZGF0ZU9iaiB9IGZyb20gJy4uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmonO1xyXG5pbXBvcnQgeyBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QsIEl0ZW1UeXBlLCBOZXdJdGVtU3RhdGUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBFcnJvclNpZ24sIFdhaXRpbmdDbG9jayB9IGZyb20gJy4vc3ZnJztcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdFZGl0SXRlbSA9ICh7XHJcbiAgIHR5cGUsXHJcbiAgIHNlbGVjdGVkLFxyXG4gICBzZXRTZWxlY3RlZCxcclxufToge1xyXG4gICB0eXBlOkl0ZW1UeXBlO1xyXG4gICBzZWxlY3RlZDogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgIHNldFNlbGVjdGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTZWxlY3RlZEZlZWRTdGF0ZT4+XHJcblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZVxyXG4gICAgY29uc3QgaW5pdGlhbEZlZWQ6IEZlZWRPYmplY3QgPSB7bmFtZTogXCJcIiwgdXJsOiBcIlwiLCB0YWdzOiBbXX07XHJcbiAgICBjb25zdCBpbml0aWFsQnVuZGxlOiBCdW5kbGVPYmplY3QgPSB7bmFtZTogXCJcIiwgZGVzY3JpcHRpb246IFwiXCIsIHRhZ3M6IFtdLCBmZWVkczogW119O1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlOiBOZXdJdGVtU3RhdGUgPSBpc0ZlZWQgPyBpbml0aWFsRmVlZCA6IGluaXRpYWxCdW5kbGU7XHJcbiAgICBjb25zdCBbY3VycmVudEl0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGU8TmV3SXRlbVN0YXRlPihpbml0aWFsU3RhdGUpXHJcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGlzRmVlZCA/IFsnbmFtZScsICd1cmwnXSA6IFsnbmFtZScsICdkZXNjcmlwdGlvbiddO1xyXG5cclxuICAgY29uc3QgWyBjcmVhdGVJdGVtTXV0YXRpb24sIHsgbG9hZGluZzogY3JlYXRlTG9hZGluZywgZXJyb3I6IGNyZWF0ZUVycm9yIH0gXSAgPSB1c2VNdXRhdGlvbihpc0ZlZWQgPyBDUkVBVEVfRkVFRF9NVVRBVElPTiA6IENSRUFURV9CVU5ETEVfTVVUQVRJT04pO1xyXG5cclxuICAgaWYoY3JlYXRlTG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFdhaXRpbmdDbG9jayBjbGFzc05hbWU9XCJteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIi8+XHJcbiAgIH0gIFxyXG4gICBpZihjcmVhdGVFcnJvcikge1xyXG4gICAgICByZXR1cm4gPEVycm9yU2lnbiBjbGFzc05hbWU9XCJteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIi8+XHJcbiAgIH0gXHJcbiAgIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGNvbnN0IGRhdGEgPSBwcmVwYXJlTmV3VXBkYXRlT2JqKGN1cnJlbnRJdGVtKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICB9fSA+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgcm91bmRlZC1tZCBib3JkZXItNCBteS00IHB5LTIgcHgtNFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgdGV4dC1sZyBmb250LW1lZGl1bSBweS0yXCI+XHJcbiAgICAgICAgICAgICAgIHtpc0ZlZWQgPyBcIk5ldyBGZWVkXCIgOiBcIk5ldyBCdW5kbGVcIn1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02XCI+XHJcbiAgICAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHAga2V5PXtuYW1lfT57bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BweS00ICR7aXNGZWVkID8gbnVsbCA6ICdwdC0yOCd9YH0+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2BweS00ICR7YGJnLSR7aXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnfS00MDAgYH0gaG92ZXI6YmctJHtcclxuICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgIH0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB4LTEyIHJvdW5kZWRgfSB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgPC9mb3JtPlxyXG4gICAgIDwvPlxyXG4gICApXHJcbn1cclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgQlVORExFX0ZSQUdNRU5ULCBGRUVEX0ZSQUdNRU5ULCBTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UIH0gZnJvbSAnLi9mcmFnbWVudHMnO1xuXG5leHBvcnQgY29uc3QgTElLRV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGxpa2VCdW5kbGVNdXRhdGlvbigkZGF0YTogTGlrZUJ1bmRsZUlucHV0KSB7XG4gICAgbGlrZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuICAke0ZFRURfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgTElLRV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBsaWtlRmVlZE11dGF0aW9uKCRkYXRhOiBMaWtlRmVlZElucHV0KSB7XG4gICAgbGlrZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuICAke0ZFRURfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlQnVuZGxlTXV0YXRpb24oJGRhdGE6IEJ1bmRsZUNyZWF0ZUlucHV0KSB7XG4gICAgY3JlYXRlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgYnVuZGxlcyB7XG4gICAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcbmV4cG9ydCBjb25zdCBVUERBVEVfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVCdW5kbGVNdXRhdGlvbigkZGF0YTogQnVuZGxlVXBkYXRlSW5wdXQpIHtcbiAgICB1cGRhdGVCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICBidW5kbGVzIHtcbiAgICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZENyZWF0ZUlucHV0KSB7XG4gICAgY3JlYXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgZmVlZHMge1xuICAgICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZFVwZGF0ZUlucHV0KSB7XG4gICAgdXBkYXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgZmVlZHMge1xuICAgICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZVNhdmVkQXJ0aWNsZU11dGF0aW9uKCRkYXRhOiBTYXZlZEFydGljbGVDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZVNhdmVkQXJ0aWNsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uU2F2ZWRBcnRpY2xlRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBCdW5kbGVJbnB1dCkge1xuICAgIGRlbGV0ZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgaWRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlRmVlZE11dGF0aW9uKCRkYXRhOiBGZWVkSW5wdXQpIHtcbiAgICBkZWxldGVGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVTYXZlZEFydGljbGVNdXRhdGlvbigkZGF0YTogRGVsZXRlU2F2ZWRBcnRpY2xlSW5wdXQpIHtcbiAgICBkZWxldGVTYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIGlkXG4gICAgICB1cmxcbiAgICB9XG4gIH1cbmA7XG4iLCJpbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcblxyXG5cclxuY29uc3QgZ2VuTmVzdGVkSXRlbXMgPSAoY3VycmVudEl0ZW0pID0+IHtcclxuICAgIGNvbnN0IHRhZ3MgPSBcclxuICAgIFwidGFnc1wiIGluIGN1cnJlbnRJdGVtID8ge1xyXG4gICAgICAgIHRhZ3M6IHtcclxuICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0udGFncy5tYXAoKHsgaWQgfSkgPT4oeyBpZCB9KSkuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB1bmRlZmluZWQpLFxyXG5cclxuICAgICAgICAgICAgY3JlYXRlOiBjdXJyZW50SXRlbS50YWdzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgLm1hcCgobykgPT4gKHsgLi4ubywgaWQ6IHV1aWR2NCgpIH0pKSxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG4gICAgIDoge307XHJcblxyXG4gICAgIGNvbnN0IGZlZWRzID1cclxuICAgICAnZmVlZHMnIGluIGN1cnJlbnRJdGVtXHJcbiAgICAgICA/IHtcclxuICAgICAgICAgICBmZWVkczoge1xyXG4gICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0uZmVlZHNcclxuICAgICAgICAgICAgICAgLm1hcCgoeyBpZCB9KSA9PiAoeyBpZCB9KSlcclxuICAgICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICB9XHJcbiAgICAgICA6IHt9O1xyXG5cclxuICAgICAgIGNvbnN0IHsgX190eXBlbmFtZSwgbGlrZXMsIGF1dGhvciwgYnVuZGxlcywgLi4uY2xlYW5lZEl0ZW0gfSA9IGN1cnJlbnRJdGVtO1xyXG5cclxuICAgICAgIHJldHVybiB7IC4uLmNsZWFuZWRJdGVtLCAuLi50YWdzLCAuLi5mZWVkcyB9O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJlcGFyZU5ld1VwZGF0ZU9iaiA9IChjdXJyZW50SXRlbSkgPT4ge1xyXG4gICBjb25zdCBjdXJyZW50RGF0YSA9ICBnZW5OZXN0ZWRJdGVtcyhjdXJyZW50SXRlbSlcclxuXHJcbiAgIHJldHVybiB7IC4uLmN1cnJlbnREYXRhLCAgaWQ6IHV1aWR2NCgpIH0gXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9