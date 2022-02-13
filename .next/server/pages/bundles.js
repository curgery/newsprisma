(function() {
var exports = {};
exports.id = "pages/bundles";
exports.ids = ["pages/bundles"];
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
  type
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
    tags: []
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
      lineNumber: 19,
      columnNumber: 14
    }, undefined);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_6__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
          lineNumber: 34,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: inputFields.map(name => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: name
          }, name, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 19
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `py-4 ${isFeed ? null : 'pt-28'}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: `py-4 ${`bg-${isFeed ? 'green' : 'purple'}-400 `} hover:bg-${isFeed ? 'green' : 'purple'}-700 text-white font-bold px-12 rounded`,
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 16
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 10
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./pages/bundles.tsx":
/*!***************************!*\
  !*** ./pages/bundles.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_itemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/itemList */ "./components/itemList.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/svg */ "./components/svg.tsx");
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/user */ "./utils/user.ts");
/* harmony import */ var _components_newEditItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/newEditItem */ "./components/newEditItem.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\bundles.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const BundlesPage = () => {
  const {
    user,
    loading
  } = (0,_utils_user__WEBPACK_IMPORTED_MODULE_6__.useFetchUser)();
  const initialSelected = {
    id: null,
    feeds: [],
    editMode: false,
    newMode: false
  };
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSelected);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "grid-cols-1 justify-start flex text-lr font-medium py-4",
        children: "Bundles Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: e => {
          e.persist();
          setSelected(currState => _objectSpread(_objectSpread({}, currState), {}, {
            newMode: !currState.newMode,
            editMode: false
          }));
        },
        className: "flex grid-cols-1 justify-end cursor-pointer",
        children: [selected.newMode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_5__.Minus, {
          className: `h-6 w-6 text-${selected.newMode ? 'gray' : 'blue'}-500 mt-4`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_5__.Plus, {
          className: `h-6 w-6 text-${selected.newMode ? 'gray' : 'blue'}-500 mt-4`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 31
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: `grid-cols-1 justify-start flex              text-lg font-medium py-4 text-${selected.newMode ? `gray` : `blue`}`,
          children: "New Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 26
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (selected.editMode || selected.newMode) && user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_newEditItem__WEBPACK_IMPORTED_MODULE_7__.NewEditItem, {
        type: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.BundleType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 22
      }, undefined) : null
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_itemList__WEBPACK_IMPORTED_MODULE_2__.ItemList, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.BundleType,
      useSelected: true,
      allowEdits: true,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BundlesPage);

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

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_itemList_tsx-components_layout_tsx"], function() { return __webpack_exec__("./pages/bundles.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25ld0VkaXRJdGVtLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9idW5kbGVzLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvcHJlcGFyZVVwZGF0ZU9iai50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJOZXdFZGl0SXRlbSIsInR5cGUiLCJpc0ZlZWQiLCJJdGVtVHlwZSIsImluaXRpYWxGZWVkIiwibmFtZSIsInVybCIsInRhZ3MiLCJpbml0aWFsQnVuZGxlIiwiZGVzY3JpcHRpb24iLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJ1c2VTdGF0ZSIsImlucHV0RmllbGRzIiwiY3JlYXRlSXRlbU11dGF0aW9uIiwibG9hZGluZyIsImNyZWF0ZUxvYWRpbmciLCJlcnJvciIsImNyZWF0ZUVycm9yIiwidXNlTXV0YXRpb24iLCJDUkVBVEVfRkVFRF9NVVRBVElPTiIsIkNSRUFURV9CVU5ETEVfTVVUQVRJT04iLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicHJlcGFyZU5ld1VwZGF0ZU9iaiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJCdW5kbGVzUGFnZSIsInVzZXIiLCJ1c2VGZXRjaFVzZXIiLCJpbml0aWFsU2VsZWN0ZWQiLCJpZCIsImZlZWRzIiwiZWRpdE1vZGUiLCJuZXdNb2RlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInBlcnNpc3QiLCJjdXJyU3RhdGUiLCJCdW5kbGVUeXBlIiwiTElLRV9CVU5ETEVfTVVUQVRJT04iLCJncWwiLCJCVU5ETEVfRlJBR01FTlQiLCJGRUVEX0ZSQUdNRU5UIiwiTElLRV9GRUVEX01VVEFUSU9OIiwiVVBEQVRFX0JVTkRMRV9NVVRBVElPTiIsIlVQREFURV9GRUVEX01VVEFUSU9OIiwiQ1JFQVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04iLCJTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UIiwiREVMRVRFX0JVTkRMRV9NVVRBVElPTiIsIkRFTEVURV9GRUVEX01VVEFUSU9OIiwiREVMRVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04iLCJnZW5OZXN0ZWRJdGVtcyIsImNvbm5lY3QiLCJmaWx0ZXIiLCJ1bmRlZmluZWQiLCJjcmVhdGUiLCJvIiwidXVpZHY0IiwiX190eXBlbmFtZSIsImxpa2VzIiwiYXV0aG9yIiwiYnVuZGxlcyIsImNsZWFuZWRJdGVtIiwiY3VycmVudERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFdBQVcsR0FBSyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUE4QjtBQUN2RCxRQUFNQyxNQUFNLEdBQUdELElBQUksS0FBS0UsMkRBQXhCO0FBQ0EsUUFBTUMsV0FBdUIsR0FBRztBQUFDQyxRQUFJLEVBQUUsRUFBUDtBQUFXQyxPQUFHLEVBQUUsRUFBaEI7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TjtBQURjLEdBQXhCLEdBU0csRUFWSDtBQVlDLFFBQU0xQixLQUFLLEdBQ1gsV0FBV3hCLFdBQVgsR0FDSTtBQUNFd0IsU0FBSyxFQUFFO0FBQ0xxQixhQUFPLEVBQUU3QyxXQUFXLENBQUN3QixLQUFaLENBQ05OLEdBRE0sQ0FDRixDQUFDO0FBQUVLO0FBQUYsT0FBRCxNQUFhO0FBQUVBO0FBQUYsT0FBYixDQURFLEVBRU51QixNQUZNLENBRUMsQ0FBQztBQUFFdkI7QUFBRixPQUFELEtBQVlBLEVBQUUsS0FBS3dCLFNBRnBCO0FBREo7QUFEVCxHQURKLEdBUUksRUFUSjs7QUFXRSxRQUFNO0FBQUVJLGNBQUY7QUFBY0MsU0FBZDtBQUFxQkMsVUFBckI7QUFBNkJDO0FBQTdCLE1BQXlEdEQsV0FBL0Q7QUFBQSxRQUErQ3VELFdBQS9DLDRCQUErRHZELFdBQS9EOztBQUVBLHVEQUFZdUQsV0FBWixHQUE0QjNELElBQTVCLEdBQXFDNEIsS0FBckM7QUFHTixDQTdCRDs7QUFnQ08sTUFBTVQsbUJBQW1CLEdBQUlmLFdBQUQsSUFBaUI7QUFDakQsUUFBTXdELFdBQVcsR0FBSVosY0FBYyxDQUFDNUMsV0FBRCxDQUFuQztBQUVBLHlDQUFZd0QsV0FBWjtBQUEwQmpDLE1BQUUsRUFBRTJCLHdDQUFNO0FBQXBDO0FBQ0YsQ0FKTSxDOzs7Ozs7Ozs7OztBQ25DUCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9idW5kbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiwgQ1JFQVRFX0ZFRURfTVVUQVRJT04gfSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMnO1xyXG5pbXBvcnQgeyBwcmVwYXJlTmV3VXBkYXRlT2JqIH0gZnJvbSAnLi4vdXRpbHMvcHJlcGFyZVVwZGF0ZU9iaic7XHJcbmltcG9ydCB7IEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCwgSXRlbVR5cGUsIE5ld0l0ZW1TdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgRXJyb3JTaWduLCBXYWl0aW5nQ2xvY2sgfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3RWRpdEl0ZW0gPSAgICh7dHlwZX06IHt0eXBlOiBJdGVtVHlwZX0pID0+IHtcclxuICAgIGNvbnN0IGlzRmVlZCA9IHR5cGUgPT09IEl0ZW1UeXBlLkZlZWRUeXBlXHJcbiAgICBjb25zdCBpbml0aWFsRmVlZDogRmVlZE9iamVjdCA9IHtuYW1lOiBcIlwiLCB1cmw6IFwiXCIsIHRhZ3M6IFtdfTtcclxuICAgIGNvbnN0IGluaXRpYWxCdW5kbGU6IEJ1bmRsZU9iamVjdCA9IHtuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgdGFnczogW119O1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlOiBOZXdJdGVtU3RhdGUgPSBpc0ZlZWQgPyBpbml0aWFsRmVlZCA6IGluaXRpYWxCdW5kbGU7XHJcbiAgICBjb25zdCBbY3VycmVudEl0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGU8TmV3SXRlbVN0YXRlPihpbml0aWFsU3RhdGUpXHJcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGlzRmVlZCA/IFsnbmFtZScsICd1cmwnXSA6IFsnbmFtZScsICdkZXNjcmlwdGlvbiddO1xyXG5cclxuICAgY29uc3QgWyBjcmVhdGVJdGVtTXV0YXRpb24sIHsgbG9hZGluZzogY3JlYXRlTG9hZGluZywgZXJyb3I6IGNyZWF0ZUVycm9yIH0gXSAgPSB1c2VNdXRhdGlvbihpc0ZlZWQgPyBDUkVBVEVfRkVFRF9NVVRBVElPTiA6IENSRUFURV9CVU5ETEVfTVVUQVRJT04pO1xyXG5cclxuICAgaWYoY3JlYXRlTG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFdhaXRpbmdDbG9jayBjbGFzc05hbWU9XCJteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIi8+XHJcbiAgIH0gIFxyXG4gICBpZihjcmVhdGVFcnJvcikge1xyXG4gICAgICByZXR1cm4gPEVycm9yU2lnbiBjbGFzc05hbWU9XCJteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIi8+XHJcbiAgIH0gXHJcbiAgIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGNvbnN0IGRhdGEgPSBwcmVwYXJlTmV3VXBkYXRlT2JqKGN1cnJlbnRJdGVtKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICB9fSA+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgcm91bmRlZC1tZCBib3JkZXItNCBteS00IHB5LTIgcHgtNFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgdGV4dC1sZyBmb250LW1lZGl1bSBweS0yXCI+XHJcbiAgICAgICAgICAgICAgIHtpc0ZlZWQgPyBcIk5ldyBGZWVkXCIgOiBcIk5ldyBCdW5kbGVcIn1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02XCI+XHJcbiAgICAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHAga2V5PXtuYW1lfT57bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BweS00ICR7aXNGZWVkID8gbnVsbCA6ICdwdC0yOCd9YH0+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2BweS00ICR7YGJnLSR7aXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnfS00MDAgYH0gaG92ZXI6YmctJHtcclxuICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgIH0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB4LTEyIHJvdW5kZWRgfSB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgPC9mb3JtPlxyXG4gICAgIDwvPlxyXG4gICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEl0ZW1MaXN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaXRlbUxpc3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcclxuaW1wb3J0IHsgSXRlbVR5cGUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcclxuaW1wb3J0IHsgTWludXMsIFBsdXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdmdcIlxyXG5pbXBvcnQgeyB1c2VGZXRjaFVzZXIgfSBmcm9tICcuLi91dGlscy91c2VyJztcclxuaW1wb3J0IHsgTmV3RWRpdEl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL25ld0VkaXRJdGVtJztcclxuXHJcblxyXG5cclxuY29uc3QgQnVuZGxlc1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIGxvYWRpbmcgfSA9IHVzZUZldGNoVXNlcigpO1xyXG4gICAgY29uc3QgaW5pdGlhbFNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZSA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBmZWVkczogW10sXHJcbiAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgIG5ld01vZGU6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IFsgc2VsZWN0ZWQsIHNldFNlbGVjdGVkIF0gPSB1c2VTdGF0ZShpbml0aWFsU2VsZWN0ZWQpO1xyXG4gICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3JpZC1jb2xzLTEganVzdGlmeS1zdGFydCBmbGV4IHRleHQtbHIgZm9udC1tZWRpdW0gcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgQnVuZGxlcyBQYWdlXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld01vZGU6ICFjdXJyU3RhdGUubmV3TW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ3JpZC1jb2xzLTEganVzdGlmeS1lbmQgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkLm5ld01vZGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWludXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC02IHctNiB0ZXh0LSR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLm5ld01vZGUgPyAnZ3JheScgOiAnYmx1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0tNTAwIG10LTRgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTYgdy02IHRleHQtJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5uZXdNb2RlID8gJ2dyYXknIDogJ2JsdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0tNTAwIG10LTRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyaWQtY29scy0xIGp1c3RpZnktc3RhcnQgZmxleCAgICAgICAgICAgICAgdGV4dC1sZyBmb250LW1lZGl1bSBweS00IHRleHQtJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLm5ld01vZGUgPyBgZ3JheWAgOiBgYmx1ZWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBCdW5kbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHsoIHNlbGVjdGVkLmVkaXRNb2RlIHx8IHNlbGVjdGVkLm5ld01vZGUpICYmIHVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgIDxOZXdFZGl0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT17SXRlbVR5cGUuQnVuZGxlVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+ICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxJdGVtTGlzdFxyXG4gICAgICAgICAgICAgdHlwZT17SXRlbVR5cGUuQnVuZGxlVHlwZX1cclxuICAgICAgICAgICAgIHVzZVNlbGVjdGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgYWxsb3dFZGl0cz17dHJ1ZX1cclxuICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVuZGxlc1BhZ2U7IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgQlVORExFX0ZSQUdNRU5ULCBGRUVEX0ZSQUdNRU5ULCBTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UIH0gZnJvbSAnLi9mcmFnbWVudHMnO1xuXG5leHBvcnQgY29uc3QgTElLRV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGxpa2VCdW5kbGVNdXRhdGlvbigkZGF0YTogTGlrZUJ1bmRsZUlucHV0KSB7XG4gICAgbGlrZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuICAke0ZFRURfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgTElLRV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBsaWtlRmVlZE11dGF0aW9uKCRkYXRhOiBMaWtlRmVlZElucHV0KSB7XG4gICAgbGlrZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuICAke0ZFRURfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlQnVuZGxlTXV0YXRpb24oJGRhdGE6IEJ1bmRsZUNyZWF0ZUlucHV0KSB7XG4gICAgY3JlYXRlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgYnVuZGxlcyB7XG4gICAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcbmV4cG9ydCBjb25zdCBVUERBVEVfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVCdW5kbGVNdXRhdGlvbigkZGF0YTogQnVuZGxlVXBkYXRlSW5wdXQpIHtcbiAgICB1cGRhdGVCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICBidW5kbGVzIHtcbiAgICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZENyZWF0ZUlucHV0KSB7XG4gICAgY3JlYXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgZmVlZHMge1xuICAgICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZFVwZGF0ZUlucHV0KSB7XG4gICAgdXBkYXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgZmVlZHMge1xuICAgICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZVNhdmVkQXJ0aWNsZU11dGF0aW9uKCRkYXRhOiBTYXZlZEFydGljbGVDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZVNhdmVkQXJ0aWNsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uU2F2ZWRBcnRpY2xlRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBCdW5kbGVJbnB1dCkge1xuICAgIGRlbGV0ZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgaWRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlRmVlZE11dGF0aW9uKCRkYXRhOiBGZWVkSW5wdXQpIHtcbiAgICBkZWxldGVGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVTYXZlZEFydGljbGVNdXRhdGlvbigkZGF0YTogRGVsZXRlU2F2ZWRBcnRpY2xlSW5wdXQpIHtcbiAgICBkZWxldGVTYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIGlkXG4gICAgICB1cmxcbiAgICB9XG4gIH1cbmA7XG4iLCJpbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcblxyXG5cclxuY29uc3QgZ2VuTmVzdGVkSXRlbXMgPSAoY3VycmVudEl0ZW0pID0+IHtcclxuICAgIGNvbnN0IHRhZ3MgPSBcclxuICAgIFwidGFnc1wiIGluIGN1cnJlbnRJdGVtID8ge1xyXG4gICAgICAgIHRhZ3M6IHtcclxuICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0udGFncy5tYXAoKHsgaWQgfSkgPT4oeyBpZCB9KSkuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB1bmRlZmluZWQpLFxyXG5cclxuICAgICAgICAgICAgY3JlYXRlOiBjdXJyZW50SXRlbS50YWdzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgLm1hcCgobykgPT4gKHsgLi4ubywgaWQ6IHV1aWR2NCgpIH0pKSxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG4gICAgIDoge307XHJcblxyXG4gICAgIGNvbnN0IGZlZWRzID1cclxuICAgICAnZmVlZHMnIGluIGN1cnJlbnRJdGVtXHJcbiAgICAgICA/IHtcclxuICAgICAgICAgICBmZWVkczoge1xyXG4gICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0uZmVlZHNcclxuICAgICAgICAgICAgICAgLm1hcCgoeyBpZCB9KSA9PiAoeyBpZCB9KSlcclxuICAgICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICB9XHJcbiAgICAgICA6IHt9O1xyXG5cclxuICAgICAgIGNvbnN0IHsgX190eXBlbmFtZSwgbGlrZXMsIGF1dGhvciwgYnVuZGxlcywgLi4uY2xlYW5lZEl0ZW0gfSA9IGN1cnJlbnRJdGVtO1xyXG5cclxuICAgICAgIHJldHVybiB7IC4uLmNsZWFuZWRJdGVtLCAuLi50YWdzLCAuLi5mZWVkcyB9O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJlcGFyZU5ld1VwZGF0ZU9iaiA9IChjdXJyZW50SXRlbSkgPT4ge1xyXG4gICBjb25zdCBjdXJyZW50RGF0YSA9ICBnZW5OZXN0ZWRJdGVtcyhjdXJyZW50SXRlbSlcclxuXHJcbiAgIHJldHVybiB7IC4uLmN1cnJlbnREYXRhLCAgaWQ6IHV1aWR2NCgpIH0gXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=