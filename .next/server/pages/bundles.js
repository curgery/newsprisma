(function() {
var exports = {};
exports.id = "pages/bundles";
exports.ids = ["pages/bundles"];
exports.modules = {

/***/ "./components/generateInputField.tsx":
/*!*******************************************!*\
  !*** ./components/generateInputField.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateInputField": function() { return /* binding */ GenerateInputField; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\generateInputField.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const GenerateInputField = ({
  currentItem,
  name,
  changeHandler
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "py-2",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
    className: "block py-2",
    children: name.charAt(0).toUpperCase() + name.slice(1)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    className: "border-4 rounded w-full py-2 px-3",
    value: currentItem[name],
    onChange: e => {
      e.persist();
      changeHandler(curr => _objectSpread(_objectSpread({}, curr), {}, {
        [name]: e.target.value
      }));
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 5
}, undefined);

/***/ }),

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
/* harmony import */ var _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var _utils_optimisticCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/optimisticCache */ "./utils/optimisticCache.ts");
/* harmony import */ var _utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/prepareUpdateObj */ "./utils/prepareUpdateObj.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _utils_update__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/update */ "./utils/update.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _generateInputField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./generateInputField */ "./components/generateInputField.tsx");
/* harmony import */ var _searchItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./searchItems */ "./components/searchItems.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\newEditItem.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const NewEditItem = ({
  type,
  selected,
  setSelected
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_7__.ItemType.FeedType;
  const initialFeed = {
    name: '',
    url: '',
    tags: []
  };
  const initialBundle = {
    name: '',
    description: '',
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
  const [updateItemMutation, {
    loading: updateLoading,
    error: updateError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(isFeed ? _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.UPDATE_FEED_MUTATION : _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.UPDATE_BUNDLE_MUTATION);
  const variables = {
    data: {
      id: selected.id ? selected.id : ''
    }
  };
  const {
    loading: itemQueryLoading,
    error: itemQueryError,
    data: itemQueryData
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FEED_QUERY : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.BUNDLE_QUERY, {
    variables
  });
  const {
    data: meData,
    loading: meLoading,
    error: meError
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.ME_QUERY);
  const {
    bundle,
    feed
  } = itemQueryData || {};
  const item = isFeed ? feed : bundle;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (async () => {
      if (item && selected.editMode) {
        const {
          __typename,
          likes,
          author
        } = item,
              cleanedItem = _objectWithoutProperties(item, ["__typename", "likes", "author"]);

        setItem(_objectSpread({}, cleanedItem));
      } else {
        setItem(initialState);
      }
    })();
  }, [itemQueryData]);

  if (createLoading || updateLoading || itemQueryLoading || meLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_12__.WaitingClock, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 12
    }, undefined);
  }

  if (createError || updateError || itemQueryError || meError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_12__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 12
    }, undefined);
  }

  console.log(itemQueryData);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: async e => {
        e.preventDefault();
        const data = (0,_utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_6__.prepareNewUpdateObj)(item, currentItem, isFeed, selected.editMode);
        console.log(data);
        selected.editMode ? updateItemMutation({
          variables: {
            data
          },
          optimisticResponse: (0,_utils_optimisticCache__WEBPACK_IMPORTED_MODULE_5__.optimisticCache)(isFeed, 'update', data, currentItem, meData)
        }) : createItemMutation({
          variables: {
            data
          },
          update: (0,_utils_update__WEBPACK_IMPORTED_MODULE_8__.updateCache)(isFeed, 'create'),
          optimisticResponse: (0,_utils_optimisticCache__WEBPACK_IMPORTED_MODULE_5__.optimisticCache)(isFeed, 'create', data, currentItem, meData)
        });
        await setItem(initialState);
        setSelected(currState => _objectSpread(_objectSpread({}, currState), {}, {
          editMode: false,
          newMode: false
        }));
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-12 gap-4 rounded-md border-4 my-4 py-2 px-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "col-span-12 text-lg font-medium py-2",
          children: isFeed ? 'New Feed' : 'New Bundle'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: inputFields.map(name => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_generateInputField__WEBPACK_IMPORTED_MODULE_10__.GenerateInputField, {
            currentItem: currentItem,
            name: name,
            changeHandler: setItem
          }, `${type}-${name}`, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "py-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "black py-2",
              children: "Tags:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "grid grid-cols-3 gap-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_9__.BadgeList, {
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.tags,
                action: _utils_types__WEBPACK_IMPORTED_MODULE_7__.ActionType.CREATE,
                setItem: setItem,
                item: currentItem
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "block py-2",
                children: "Add New Tag:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_11__.SearchItems, {
                queryName: isFeed ? _utils_types__WEBPACK_IMPORTED_MODULE_7__.SearchQueryName.findFeedTags : _utils_types__WEBPACK_IMPORTED_MODULE_7__.SearchQueryName.findBundleTags,
                query: isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_FEED_TAGS_QUERY : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_BUNDLE_TAGS_QUERY,
                setItem: setItem,
                currentItem: currentItem,
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.tags
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, undefined), isFeed ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "py-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  className: "black py-2",
                  children: "Feeds:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "grid grid-cols-3 gap-2",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_9__.BadgeList, {
                    fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.feeds,
                    action: _utils_types__WEBPACK_IMPORTED_MODULE_7__.ActionType.CREATE,
                    setItem: setItem,
                    item: currentItem
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "py-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  className: "black py-2",
                  children: "Add New Feed:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_11__.SearchItems, {
                  queryName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.SearchQueryName.findFeeds,
                  query: _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_FEEDS_QUERY,
                  setItem: setItem,
                  currentItem: currentItem,
                  fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_7__.BadgeFieldName.feeds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 19
              }, undefined)]
            }, void 0, true)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `py-4 ${isFeed ? null : 'pt-1'}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: `py-4 ${`bg-${isFeed ? 'green' : 'purple'}-400 `} hover:bg-${isFeed ? 'green' : 'purple'}-700 text-white font-bold px-12 rounded`,
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./components/searchItems.tsx":
/*!************************************!*\
  !*** ./components/searchItems.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchItems": function() { return /* binding */ SearchItems; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\searchItems.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { Search, Spin } from './svg';


const SearchItems = ({
  currentItem,
  setItem,
  queryName,
  query,
  fieldName
}) => {
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [findItemQuery, {
    loading,
    data,
    called
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useLazyQuery)(query, {
    fetchPolicy: 'network-only'
  });
  console.log(loading, data, called);

  const fetchedItems = lodash__WEBPACK_IMPORTED_MODULE_5__.get(data, queryName);

  const filtFindItems = fetchedItems ? fetchedItems.filter(oneItem => !currentItem[fieldName].map(o => o.name).includes(oneItem.name)) : [];
  const matchCurrent = filtFindItems.filter(o => o.name === search);
  const matchList = currentItem[fieldName].filter(o => o.name === search);
  const filtFindItemsWithAdd = matchCurrent.length === 0 && matchList.length === 0 && queryName !== 'findFeeds' ? [...filtFindItems, {
    name: search
  }] : filtFindItems;
  console.log(fetchedItems);
  console.log(filtFindItems);

  const dummyNewItem = _objectSpread(_objectSpread({}, currentItem), {}, {
    [fieldName]: filtFindItemsWithAdd
  });

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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "border-4 rounded w-full py-2 px-3",
        value: search,
        onKeyDown: e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setItem(currState => _objectSpread(_objectSpread({}, currState), {}, {
              [fieldName]: [...currState[fieldName], _objectSpread({}, dummyNewItem[fieldName][0])]
            }));
            setSearch(() => '');
          }
        },
        onChange: e => {
          e.persist();

          if (e.target.value !== search) {
            setSearch(() => e.target.value);
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-3 gap-2 flex m-2",
        children: search !== '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_4__.BadgeList, {
          fieldName: fieldName,
          action: _utils_types__WEBPACK_IMPORTED_MODULE_3__.ActionType.ADD,
          setItem: setItem,
          item: dummyNewItem,
          setSearch: setSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, undefined) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-gray-400",
          children: "No matches"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, undefined) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-3 gap-2 flex m-2",
      children: search !== '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_4__.BadgeList, {
        fieldName: fieldName,
        action: _utils_types__WEBPACK_IMPORTED_MODULE_3__.ActionType.ADD,
        setItem: setItem,
        item: dummyNewItem,
        setSearch: setSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }, undefined) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-gray-400",
        children: "No Matches"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, undefined) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
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
    user
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
        lineNumber: 24,
        columnNumber: 9
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
          lineNumber: 40,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_5__.Plus, {
          className: `h-6 w-6 text-${selected.newMode ? 'gray' : 'blue'}-500 mt-4`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: `grid-cols-1 justify-start flex              text-lg font-medium py-4 text-${selected.newMode ? `gray` : `blue`}`,
          children: "New Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), (selected.editMode || selected.newMode) && user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_newEditItem__WEBPACK_IMPORTED_MODULE_7__.NewEditItem, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.BundleType,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_itemList__WEBPACK_IMPORTED_MODULE_2__.ItemList, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.BundleType,
      useSelected: true,
      allowEdits: true,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
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

/***/ "./utils/optimisticCache.ts":
/*!**********************************!*\
  !*** ./utils/optimisticCache.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optimisticCache": function() { return /* binding */ optimisticCache; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const optimisticCache = (isFeed, action, data, currentItem, meData) => {
  const __typename = isFeed ? 'Feed' : 'Bundle';

  const id = {
    data
  };
  const {
    me
  } = meData;

  const response = _objectSpread(_objectSpread(_objectSpread({
    id
  }, currentItem), {}, {
    [isFeed ? 'bundles' : 'feeds']: [],
    tags: [...currentItem.tags.filter(tag => lodash__WEBPACK_IMPORTED_MODULE_0__.has(tag, 'id')), ...lodash__WEBPACK_IMPORTED_MODULE_0__.get(data, 'tags.create', [].map(tag => _objectSpread({
      __typename: isFeed ? 'FeedTag' : 'BundleTag'
    }, tag)))]
  }, lodash__WEBPACK_IMPORTED_MODULE_0__(isFeed ? {} : {
    feeds: currentItem.feeds
  })), {}, {
    author: me
  });

  return {
    __typename: 'Mutation',
    [action + __typename]: _objectSpread({
      __typename
    }, response)
  };
};

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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
        cleanedItem = _objectWithoutProperties(currentItem, ["__typename", "likes", "author", "bundles"]); //strip unwanted from currentItem and call it 'cleanedItem' 'cleanedItem' will be all of the fields that are leftover.


  return _objectSpread(_objectSpread(_objectSpread({}, cleanedItem), tags), feeds); //add all tag and feed info to cleanedItem.
};

const cleanOps = (currentData, items) => {
  items.map(oneItem => {
    ['connect', 'disconnect', 'create'].map(operation => {
      if (operation in currentData[oneItem]) {
        currentData[oneItem][operation].length === 0 ? delete currentData[oneItem][operation] : null;
      }
    });

    if (lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty(currentData[oneItem])) {
      delete currentData[oneItem];
    }
  });
  return currentData;
};

const prepareNewUpdateObj = (queriedItem, currentItem, isFeed, isEditing) => {
  const currentData = genNestedItems(currentItem);

  if (!isEditing) {
    return _objectSpread(_objectSpread({}, currentData), {}, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)() // currentData (feed or tag) is returned WITHOUT an id number; thus one is added/provided.

    });
    const queriedData = genNestedItems(queriedItem);

    const disconnectedTags = lodash__WEBPACK_IMPORTED_MODULE_1__.differenceWith(queriedData.tags.connect, currentData.tags.connect, lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual);

    const connectedTags = lodash__WEBPACK_IMPORTED_MODULE_1__.differenceWith(queriedData.tags.connect, currentData.tags.connect, lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual);

    if (!isFeed) {
      const disconnectedFeeds = lodash__WEBPACK_IMPORTED_MODULE_1__.differenceWith(queriedData.feeds.connect, currentData.feeds.connect, lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual);

      const connectedFeeds = lodash__WEBPACK_IMPORTED_MODULE_1__.differenceWith(queriedData.feeds.connect, currentData.feeds.connect, lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual);

      return cleanOps(_objectSpread(_objectSpread({}, currentData), {}, {
        tags: {
          connect: connectedTags,
          disconnect: disconnectedTags,
          create: lodash__WEBPACK_IMPORTED_MODULE_1__.get(currentData, 'tags.create', [])
        },
        feeds: {
          connect: connectedFeeds,
          disconnect: disconnectedFeeds
        }
      }), ['tags', 'feeds']);
    } else {
      return cleanOps(_objectSpread(_objectSpread({}, currentData), {}, {
        tags: {
          connect: connectedTags,
          disconnect: disconnectedTags,
          create: lodash__WEBPACK_IMPORTED_MODULE_1__.get(currentData, 'tags.create', [])
        }
      }), ['tags']);
    }
  }
};

/***/ }),

/***/ "./utils/update.ts":
/*!*************************!*\
  !*** ./utils/update.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateCache": function() { return /* binding */ updateCache; }
/* harmony export */ });
/* harmony import */ var _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const updateCache = (isFeed, action) => (store, {
  data
}) => {
  const item = data[`${action}${isFeed} ? 'Feed' : 'Bundle'}`];

  try {
    store.writeQuery({
      query: isFeed ? _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__.FEED_QUERY : _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__.BUNDLE_QUERY,
      variables: {
        data: {
          id: lodash__WEBPACK_IMPORTED_MODULE_1__.get(item, 'id')
        }
      },
      data: {
        [isFeed ? 'feed' : 'bundle']: item
      }
    });
  } catch (e) {}

  try {
    const {
      feeds,
      bundles
    } = store.readQuery({
      query: isFeed ? _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__.FEEDS_QUERY : _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__.BUNDLES_QUERY
    });
    const currentItems = isFeed ? feeds : bundles;
    store.writeQuery({
      query: isFeed ? _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__.FEEDS_QUERY : _api_graphql_queries__WEBPACK_IMPORTED_MODULE_0__.BUNDLES_QUERY,
      data: {
        [isFeed ? 'feeds' : 'bundles']: [...currentItems.filter(o => o.id !== item.id), item]
      }
    });
  } catch (e) {}
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

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2dlbmVyYXRlSW5wdXRGaWVsZC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9zZWFyY2hJdGVtcy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vcGFnZXMvYnVuZGxlcy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL29wdGltaXN0aWNDYWNoZS50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9wcmVwYXJlVXBkYXRlT2JqLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3VwZGF0ZS50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiR2VuZXJhdGVJbnB1dEZpZWxkIiwiY3VycmVudEl0ZW0iLCJuYW1lIiwiY2hhbmdlSGFuZGxlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJlIiwicGVyc2lzdCIsImN1cnIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk5ld0VkaXRJdGVtIiwidHlwZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJpc0ZlZWQiLCJJdGVtVHlwZSIsImluaXRpYWxGZWVkIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImZlZWRzIiwiaW5pdGlhbFN0YXRlIiwic2V0SXRlbSIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHMiLCJjcmVhdGVJdGVtTXV0YXRpb24iLCJsb2FkaW5nIiwiY3JlYXRlTG9hZGluZyIsImVycm9yIiwiY3JlYXRlRXJyb3IiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9GRUVEX01VVEFUSU9OIiwiQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiIsInVwZGF0ZUl0ZW1NdXRhdGlvbiIsInVwZGF0ZUxvYWRpbmciLCJ1cGRhdGVFcnJvciIsIlVQREFURV9GRUVEX01VVEFUSU9OIiwiVVBEQVRFX0JVTkRMRV9NVVRBVElPTiIsInZhcmlhYmxlcyIsImRhdGEiLCJpZCIsIml0ZW1RdWVyeUxvYWRpbmciLCJpdGVtUXVlcnlFcnJvciIsIml0ZW1RdWVyeURhdGEiLCJ1c2VRdWVyeSIsIkZFRURfUVVFUlkiLCJCVU5ETEVfUVVFUlkiLCJtZURhdGEiLCJtZUxvYWRpbmciLCJtZUVycm9yIiwiTUVfUVVFUlkiLCJidW5kbGUiLCJmZWVkIiwiaXRlbSIsInVzZUVmZmVjdCIsImVkaXRNb2RlIiwiX190eXBlbmFtZSIsImxpa2VzIiwiYXV0aG9yIiwiY2xlYW5lZEl0ZW0iLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJwcmVwYXJlTmV3VXBkYXRlT2JqIiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwib3B0aW1pc3RpY0NhY2hlIiwidXBkYXRlIiwidXBkYXRlQ2FjaGUiLCJjdXJyU3RhdGUiLCJuZXdNb2RlIiwibWFwIiwiQmFkZ2VGaWVsZE5hbWUiLCJBY3Rpb25UeXBlIiwiU2VhcmNoUXVlcnlOYW1lIiwiRklORF9GRUVEX1RBR1NfUVVFUlkiLCJGSU5EX0JVTkRMRV9UQUdTX1FVRVJZIiwiRklORF9GRUVEU19RVUVSWSIsIlNlYXJjaEl0ZW1zIiwicXVlcnlOYW1lIiwicXVlcnkiLCJmaWVsZE5hbWUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaW5kSXRlbVF1ZXJ5IiwiY2FsbGVkIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmZXRjaGVkSXRlbXMiLCJfIiwiZmlsdEZpbmRJdGVtcyIsImZpbHRlciIsIm9uZUl0ZW0iLCJvIiwiaW5jbHVkZXMiLCJtYXRjaEN1cnJlbnQiLCJtYXRjaExpc3QiLCJmaWx0RmluZEl0ZW1zV2l0aEFkZCIsImxlbmd0aCIsImR1bW15TmV3SXRlbSIsImtleSIsIkJ1bmRsZXNQYWdlIiwidXNlciIsInVzZUZldGNoVXNlciIsImluaXRpYWxTZWxlY3RlZCIsIkxJS0VfQlVORExFX01VVEFUSU9OIiwiZ3FsIiwiQlVORExFX0ZSQUdNRU5UIiwiRkVFRF9GUkFHTUVOVCIsIkxJS0VfRkVFRF9NVVRBVElPTiIsIkNSRUFURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OIiwiU0FWRURfQVJUSUNMRV9GUkFHTUVOVCIsIkRFTEVURV9CVU5ETEVfTVVUQVRJT04iLCJERUxFVEVfRkVFRF9NVVRBVElPTiIsIkRFTEVURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OIiwiYWN0aW9uIiwibWUiLCJyZXNwb25zZSIsInRhZyIsImdlbk5lc3RlZEl0ZW1zIiwiY29ubmVjdCIsInVuZGVmaW5lZCIsImNyZWF0ZSIsInV1aWR2NCIsImJ1bmRsZXMiLCJjbGVhbk9wcyIsImN1cnJlbnREYXRhIiwiaXRlbXMiLCJvcGVyYXRpb24iLCJxdWVyaWVkSXRlbSIsImlzRWRpdGluZyIsInF1ZXJpZWREYXRhIiwiZGlzY29ubmVjdGVkVGFncyIsImNvbm5lY3RlZFRhZ3MiLCJkaXNjb25uZWN0ZWRGZWVkcyIsImNvbm5lY3RlZEZlZWRzIiwiZGlzY29ubmVjdCIsInN0b3JlIiwid3JpdGVRdWVyeSIsInJlYWRRdWVyeSIsIkZFRURTX1FVRVJZIiwiQlVORExFU19RVUVSWSIsImN1cnJlbnRJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLE1BQU1BLGtCQUFrQixHQUFHLENBQUM7QUFDL0JDLGFBRCtCO0FBRS9CQyxNQUYrQjtBQUcvQkM7QUFIK0IsQ0FBRCxrQkFVOUI7QUFBSyxXQUFTLEVBQUMsTUFBZjtBQUFBLDBCQUNJO0FBQU8sYUFBUyxFQUFDLFlBQWpCO0FBQUEsY0FDS0QsSUFBSSxDQUFDRSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEtBQStCSCxJQUFJLENBQUNJLEtBQUwsQ0FBVyxDQUFYO0FBRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQ0ksYUFBUyxFQUFDLG1DQURkO0FBRUksU0FBSyxFQUFFTCxXQUFXLENBQUNDLElBQUQsQ0FGdEI7QUFHSSxZQUFRLEVBQUdLLENBQUQsSUFBTztBQUNiQSxPQUFDLENBQUNDLE9BQUY7QUFDQUwsbUJBQWEsQ0FBRU0sSUFBRCxvQ0FBZ0JBLElBQWhCO0FBQXNCLFNBQUNQLElBQUQsR0FBUUssQ0FBQyxDQUFDRyxNQUFGLENBQVNDO0FBQXZDLFFBQUQsQ0FBYjtBQUNIO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQU1BO0FBUUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1DLFdBQVcsR0FBRyxDQUFDO0FBQzFCQyxNQUQwQjtBQUUxQkMsVUFGMEI7QUFHMUJD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aW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0IH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBHZW5lcmF0ZUlucHV0RmllbGQgPSAoe1xyXG4gICAgY3VycmVudEl0ZW0sXHJcbiAgICBuYW1lLFxyXG4gICAgY2hhbmdlSGFuZGxlclxyXG5cclxufSA6IHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGN1cnJlbnRJdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0XHJcbiAgICBjaGFuZ2VIYW5kbGVyOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj5cclxufSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+XHJcbiAgICAgICAgICAgIHtuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItNCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTNcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y3VycmVudEl0ZW1bbmFtZV19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VIYW5kbGVyKChjdXJyKSA9PiAoeyAuLi5jdXJyLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSkpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuKTsiLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ1JFQVRFX0JVTkRMRV9NVVRBVElPTixcclxuICBDUkVBVEVfRkVFRF9NVVRBVElPTixcclxuICBVUERBVEVfQlVORExFX01VVEFUSU9OLFxyXG4gIFVQREFURV9GRUVEX01VVEFUSU9OLFxyXG59IGZyb20gJy4uL3V0aWxzL2FwaS9ncmFwaHFsL211dGF0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgQlVORExFX1FVRVJZLFxyXG4gIEZFRURfUVVFUlksXHJcbiAgRklORF9CVU5ETEVfVEFHU19RVUVSWSxcclxuICBGSU5EX0ZFRURTX1FVRVJZLFxyXG4gIEZJTkRfRkVFRF9UQUdTX1FVRVJZLFxyXG4gIE1FX1FVRVJZLFxyXG59IGZyb20gJy4uL3V0aWxzL2FwaS9ncmFwaHFsL3F1ZXJpZXMnO1xyXG5pbXBvcnQgeyBvcHRpbWlzdGljQ2FjaGUgfSBmcm9tICcuLi91dGlscy9vcHRpbWlzdGljQ2FjaGUnO1xyXG5pbXBvcnQgeyBwcmVwYXJlTmV3VXBkYXRlT2JqIH0gZnJvbSAnLi4vdXRpbHMvcHJlcGFyZVVwZGF0ZU9iaic7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uVHlwZSxcclxuICBCYWRnZUZpZWxkTmFtZSxcclxuICBCdW5kbGVPYmplY3QsXHJcbiAgRmVlZE9iamVjdCxcclxuICBJdGVtVHlwZSxcclxuICBOZXdJdGVtU3RhdGUsXHJcbiAgU2VhcmNoUXVlcnlOYW1lLFxyXG4gIFNlbGVjdGVkRmVlZFN0YXRlLFxyXG59IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgdXBkYXRlQ2FjaGUgfSBmcm9tICcuLi91dGlscy91cGRhdGUnO1xyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tICcuL2JhZGdlTGlzdCc7XHJcbmltcG9ydCB7IEdlbmVyYXRlSW5wdXRGaWVsZCB9IGZyb20gJy4vZ2VuZXJhdGVJbnB1dEZpZWxkJztcclxuaW1wb3J0IHsgU2VhcmNoSXRlbXMgfSBmcm9tICcuL3NlYXJjaEl0ZW1zJztcclxuaW1wb3J0IHsgRXJyb3JTaWduLCBXYWl0aW5nQ2xvY2sgfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3RWRpdEl0ZW0gPSAoe1xyXG4gIHR5cGUsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgc2V0U2VsZWN0ZWQsXHJcbn06IHtcclxuICB0eXBlOiBJdGVtVHlwZTtcclxuICBzZWxlY3RlZDogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgc2V0U2VsZWN0ZWQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj47XHJcbn0pID0+IHtcclxuICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZTtcclxuICBjb25zdCBpbml0aWFsRmVlZDogRmVlZE9iamVjdCA9IHsgbmFtZTogJycsIHVybDogJycsIHRhZ3M6IFtdIH07XHJcbiAgY29uc3QgaW5pdGlhbEJ1bmRsZTogQnVuZGxlT2JqZWN0ID0ge1xyXG4gICAgbmFtZTogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIGZlZWRzOiBbXSxcclxuICB9O1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZTogTmV3SXRlbVN0YXRlID0gaXNGZWVkID8gaW5pdGlhbEZlZWQgOiBpbml0aWFsQnVuZGxlO1xyXG4gIGNvbnN0IFtjdXJyZW50SXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZTxOZXdJdGVtU3RhdGU+KGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgaW5wdXRGaWVsZHMgPSBpc0ZlZWQgPyBbJ25hbWUnLCAndXJsJ10gOiBbJ25hbWUnLCAnZGVzY3JpcHRpb24nXTtcclxuXHJcbiAgY29uc3QgW2NyZWF0ZUl0ZW1NdXRhdGlvbiwgeyBsb2FkaW5nOiBjcmVhdGVMb2FkaW5nLCBlcnJvcjogY3JlYXRlRXJyb3IgfV0gPVxyXG4gICAgdXNlTXV0YXRpb24oaXNGZWVkID8gQ1JFQVRFX0ZFRURfTVVUQVRJT04gOiBDUkVBVEVfQlVORExFX01VVEFUSU9OKTtcclxuXHJcbiAgY29uc3QgW3VwZGF0ZUl0ZW1NdXRhdGlvbiwgeyBsb2FkaW5nOiB1cGRhdGVMb2FkaW5nLCBlcnJvcjogdXBkYXRlRXJyb3IgfV0gPVxyXG4gICAgdXNlTXV0YXRpb24oaXNGZWVkID8gVVBEQVRFX0ZFRURfTVVUQVRJT04gOiBVUERBVEVfQlVORExFX01VVEFUSU9OKTtcclxuXHJcbiAgY29uc3QgdmFyaWFibGVzID0geyBkYXRhOiB7IGlkOiBzZWxlY3RlZC5pZCA/IHNlbGVjdGVkLmlkIDogJycgfSB9O1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBsb2FkaW5nOiBpdGVtUXVlcnlMb2FkaW5nLFxyXG4gICAgZXJyb3I6IGl0ZW1RdWVyeUVycm9yLFxyXG4gICAgZGF0YTogaXRlbVF1ZXJ5RGF0YSxcclxuICB9ID0gdXNlUXVlcnkoaXNGZWVkID8gRkVFRF9RVUVSWSA6IEJVTkRMRV9RVUVSWSwgeyB2YXJpYWJsZXMgfSk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGRhdGE6IG1lRGF0YSxcclxuICAgIGxvYWRpbmc6IG1lTG9hZGluZyxcclxuICAgIGVycm9yOiBtZUVycm9yLFxyXG4gIH0gPSB1c2VRdWVyeShNRV9RVUVSWSk7XHJcblxyXG4gIGNvbnN0IHsgYnVuZGxlLCBmZWVkIH0gPSBpdGVtUXVlcnlEYXRhIHx8IHt9O1xyXG4gIGNvbnN0IGl0ZW0gPSBpc0ZlZWQgPyBmZWVkIDogYnVuZGxlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKGl0ZW0gJiYgc2VsZWN0ZWQuZWRpdE1vZGUpIHtcclxuICAgICAgICBjb25zdCB7IF9fdHlwZW5hbWUsIGxpa2VzLCBhdXRob3IsIC4uLmNsZWFuZWRJdGVtIH0gPSBpdGVtO1xyXG4gICAgICAgIHNldEl0ZW0oeyAuLi5jbGVhbmVkSXRlbSB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJdGVtKGluaXRpYWxTdGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgfSwgW2l0ZW1RdWVyeURhdGFdKTtcclxuXHJcbiAgaWYgKGNyZWF0ZUxvYWRpbmcgfHwgdXBkYXRlTG9hZGluZyB8fCBpdGVtUXVlcnlMb2FkaW5nIHx8IG1lTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxXYWl0aW5nQ2xvY2sgY2xhc3NOYW1lPSdteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG8nIC8+O1xyXG4gIH1cclxuICBpZiAoY3JlYXRlRXJyb3IgfHwgdXBkYXRlRXJyb3IgfHwgaXRlbVF1ZXJ5RXJyb3IgfHwgbWVFcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvclNpZ24gY2xhc3NOYW1lPSdteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG8nIC8+O1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coaXRlbVF1ZXJ5RGF0YSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHByZXBhcmVOZXdVcGRhdGVPYmooXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtLFxyXG4gICAgICAgICAgICBpc0ZlZWQsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmVkaXRNb2RlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBzZWxlY3RlZC5lZGl0TW9kZVxyXG4gICAgICAgICAgICA/IHVwZGF0ZUl0ZW1NdXRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgZGF0YSB9LFxyXG4gICAgICAgICAgICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiBvcHRpbWlzdGljQ2FjaGUoXHJcbiAgICAgICAgICAgICAgICAgIGlzRmVlZCxcclxuICAgICAgICAgICAgICAgICAgJ3VwZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLFxyXG4gICAgICAgICAgICAgICAgICBtZURhdGFcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiBjcmVhdGVJdGVtTXV0YXRpb24oe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGEgfSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlQ2FjaGUoaXNGZWVkLCAnY3JlYXRlJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IG9wdGltaXN0aWNDYWNoZShcclxuICAgICAgICAgICAgICAgICAgaXNGZWVkLFxyXG4gICAgICAgICAgICAgICAgICAnY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgIG1lRGF0YVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIGF3YWl0IHNldEl0ZW0oaW5pdGlhbFN0YXRlKTtcclxuICAgICAgICAgIHNldFNlbGVjdGVkKChjdXJyU3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBuZXdNb2RlOiBmYWxzZSxcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEyIGdhcC00IHJvdW5kZWQtbWQgYm9yZGVyLTQgbXktNCBweS0yIHB4LTQnPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT0nY29sLXNwYW4tMTIgdGV4dC1sZyBmb250LW1lZGl1bSBweS0yJz5cclxuICAgICAgICAgICAge2lzRmVlZCA/ICdOZXcgRmVlZCcgOiAnTmV3IEJ1bmRsZSd9XHJcbiAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02Jz5cclxuICAgICAgICAgICAge2lucHV0RmllbGRzLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxHZW5lcmF0ZUlucHV0RmllbGRcclxuICAgICAgICAgICAgICAgIGtleT17YCR7dHlwZX0tJHtuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlSGFuZGxlcj17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTYnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxhY2sgcHktMic+VGFnczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC0yJz5cclxuICAgICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQ1JFQVRFfVxyXG4gICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBpdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+QWRkIE5ldyBUYWc6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJdGVtc1xyXG4gICAgICAgICAgICAgICAgICBxdWVyeU5hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRmVlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBTZWFyY2hRdWVyeU5hbWUuZmluZEZlZWRUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFNlYXJjaFF1ZXJ5TmFtZS5maW5kQnVuZGxlVGFnc1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtpc0ZlZWQgPyBGSU5EX0ZFRURfVEFHU19RVUVSWSA6IEZJTkRfQlVORExFX1RBR1NfUVVFUll9XHJcbiAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7aXNGZWVkID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibGFjayBweS0yJz5GZWVkczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS5mZWVkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLkNSRUFURX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2JsYWNrIHB5LTInPkFkZCBOZXcgRmVlZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lPXtTZWFyY2hRdWVyeU5hbWUuZmluZEZlZWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnk9e0ZJTkRfRkVFRFNfUVVFUll9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS5mZWVkc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHB5LTQgJHtpc0ZlZWQgPyBudWxsIDogJ3B0LTEnfWB9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweS00ICR7YGJnLSR7XHJcbiAgICAgICAgICAgICAgICBpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSdcclxuICAgICAgICAgICAgICB9LTQwMCBgfSBob3ZlcjpiZy0ke1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgfS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHgtMTIgcm91bmRlZGB9XHJcbiAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uVHlwZSxcclxuICBCYWRnZUZpZWxkTmFtZSxcclxuICBCdW5kbGVPYmplY3QsXHJcbiAgRmVlZE9iamVjdCxcclxuICBTZWFyY2hRdWVyeU5hbWUsXHJcbn0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tICcuL2JhZGdlTGlzdCc7XHJcbi8vIGltcG9ydCB7IFNlYXJjaCwgU3BpbiB9IGZyb20gJy4vc3ZnJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaEl0ZW1zID0gKHtcclxuICBjdXJyZW50SXRlbSxcclxuICBzZXRJdGVtLFxyXG4gIHF1ZXJ5TmFtZSxcclxuICBxdWVyeSxcclxuICBmaWVsZE5hbWUsXHJcbn06IHtcclxuICBjdXJyZW50SXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDtcclxuICBzZXRJdGVtOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj47XHJcbiAgcXVlcnlOYW1lOiBTZWFyY2hRdWVyeU5hbWU7XHJcbiAgcXVlcnk6IERvY3VtZW50Tm9kZTtcclxuICBmaWVsZE5hbWU6IEJhZGdlRmllbGROYW1lO1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmluZEl0ZW1RdWVyeSwgeyBsb2FkaW5nLCBkYXRhLCBjYWxsZWQgfV0gPSB1c2VMYXp5UXVlcnkocXVlcnksIHtcclxuICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhsb2FkaW5nLCBkYXRhLCBjYWxsZWQpO1xyXG5cclxuICBjb25zdCBmZXRjaGVkSXRlbXMgPSBfLmdldChkYXRhLCBxdWVyeU5hbWUpO1xyXG4gIGNvbnN0IGZpbHRGaW5kSXRlbXMgPSBmZXRjaGVkSXRlbXNcclxuICAgID8gZmV0Y2hlZEl0ZW1zLmZpbHRlcihcclxuICAgICAgICAob25lSXRlbSkgPT5cclxuICAgICAgICAgICFjdXJyZW50SXRlbVtmaWVsZE5hbWVdLm1hcCgobykgPT4gby5uYW1lKS5pbmNsdWRlcyhvbmVJdGVtLm5hbWUpXHJcbiAgICAgIClcclxuICAgIDogW107XHJcblxyXG4gIGNvbnN0IG1hdGNoQ3VycmVudCA9IGZpbHRGaW5kSXRlbXMuZmlsdGVyKChvKSA9PiBvLm5hbWUgPT09IHNlYXJjaCk7XHJcbiAgY29uc3QgbWF0Y2hMaXN0ID0gY3VycmVudEl0ZW1bZmllbGROYW1lXS5maWx0ZXIoKG8pID0+IG8ubmFtZSA9PT0gc2VhcmNoKTtcclxuICBjb25zdCBmaWx0RmluZEl0ZW1zV2l0aEFkZCA9XHJcbiAgICBtYXRjaEN1cnJlbnQubGVuZ3RoID09PSAwICYmXHJcbiAgICBtYXRjaExpc3QubGVuZ3RoID09PSAwICYmXHJcbiAgICBxdWVyeU5hbWUgIT09ICdmaW5kRmVlZHMnXHJcbiAgICAgID8gWy4uLmZpbHRGaW5kSXRlbXMsIHsgbmFtZTogc2VhcmNoIH1dXHJcbiAgICAgIDogZmlsdEZpbmRJdGVtcztcclxuXHJcbiAgY29uc29sZS5sb2coZmV0Y2hlZEl0ZW1zKTtcclxuICBjb25zb2xlLmxvZyhmaWx0RmluZEl0ZW1zKTtcclxuXHJcbiAgY29uc3QgZHVtbXlOZXdJdGVtID0ge1xyXG4gICAgLi4uY3VycmVudEl0ZW0sXHJcbiAgICBbZmllbGROYW1lXTogZmlsdEZpbmRJdGVtc1dpdGhBZGQsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdoLTYgdy02IHRleHQtZ3JheS01MDAgYW5pbWF0ZS1zcGluJ1xyXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgIGQ9J000IDR2NWguNTgybTE1LjM1NiAyQTguMDAxIDguMDAxIDAgMDA0LjU4MiA5bTAgMEg5bTExIDExdi01aC0uNTgxbTAgMGE4LjAwMyA4LjAwMyAwIDAxLTE1LjM1Ny0ybTE1LjM1NyAySDE1J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdtdC0zIG1yLTIgdy02IGgtNiB0ZXh0LWdyYXktNTAwJ1xyXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgIGQ9J00yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHonXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItNCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMnXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SXRlbSgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgW2ZpZWxkTmFtZV06IFtcclxuICAgICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlW2ZpZWxkTmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgIHsgLi4uZHVtbXlOZXdJdGVtW2ZpZWxkTmFtZV1bMF0gfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgIHNldFNlYXJjaCgoKSA9PiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gc2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoKCgpID0+IGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBmaW5kSXRlbVF1ZXJ5KHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBkYXRhOiB7IHNlYXJjaDogZS50YXJnZXQudmFsdWUgfSB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgZmxleCBtLTInPlxyXG4gICAgICAgICAge3NlYXJjaCAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICBmaWVsZE5hbWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQUREfVxyXG4gICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgaXRlbT17ZHVtbXlOZXdJdGVtfVxyXG4gICAgICAgICAgICAgIHNldFNlYXJjaD17c2V0U2VhcmNofVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IGNhbGxlZCA/IChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwJz5ObyBtYXRjaGVzPC9wPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBmbGV4IG0tMic+XHJcbiAgICAgICAge3NlYXJjaCAhPT0gJycgPyAoXHJcbiAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgIGZpZWxkTmFtZT17ZmllbGROYW1lfVxyXG4gICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQUREfVxyXG4gICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICBpdGVtPXtkdW1teU5ld0l0ZW19XHJcbiAgICAgICAgICAgIHNldFNlYXJjaD17c2V0U2VhcmNofVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogY2FsbGVkID8gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwJz5ObyBNYXRjaGVzPC9wPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJdGVtTGlzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvaXRlbUxpc3QnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlLCBTZWxlY3RlZEZlZWRTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5pbXBvcnQgeyBNaW51cywgUGx1cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3ZnJztcclxuaW1wb3J0IHsgdXNlRmV0Y2hVc2VyIH0gZnJvbSAnLi4vdXRpbHMvdXNlcic7XHJcbmltcG9ydCB7IE5ld0VkaXRJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9uZXdFZGl0SXRlbSc7XHJcblxyXG5jb25zdCBCdW5kbGVzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUZldGNoVXNlcigpO1xyXG4gIGNvbnN0IGluaXRpYWxTZWxlY3RlZDogU2VsZWN0ZWRGZWVkU3RhdGUgPSB7XHJcbiAgICBpZDogbnVsbCxcclxuICAgIGZlZWRzOiBbXSxcclxuICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgIG5ld01vZGU6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoaW5pdGlhbFNlbGVjdGVkKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yJz5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPSdncmlkLWNvbHMtMSBqdXN0aWZ5LXN0YXJ0IGZsZXggdGV4dC1sciBmb250LW1lZGl1bSBweS00Jz5cclxuICAgICAgICAgIEJ1bmRsZXMgUGFnZVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgICAgIG5ld01vZGU6ICFjdXJyU3RhdGUubmV3TW9kZSxcclxuICAgICAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBncmlkLWNvbHMtMSBqdXN0aWZ5LWVuZCBjdXJzb3ItcG9pbnRlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3NlbGVjdGVkLm5ld01vZGUgPyAoXHJcbiAgICAgICAgICAgICAgPE1pbnVzXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTYgdy02IHRleHQtJHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/ICdncmF5JyA6ICdibHVlJ1xyXG4gICAgICAgICAgICAgICAgfS01MDAgbXQtNGB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8UGx1c1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC02IHctNiB0ZXh0LSR7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLm5ld01vZGUgPyAnZ3JheScgOiAnYmx1ZSdcclxuICAgICAgICAgICAgICAgIH0tNTAwIG10LTRgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyaWQtY29scy0xIGp1c3RpZnktc3RhcnQgZmxleCAgICAgICAgICAgICAgdGV4dC1sZyBmb250LW1lZGl1bSBweS00IHRleHQtJHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLm5ld01vZGUgPyBgZ3JheWAgOiBgYmx1ZWBcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE5ldyBCdW5kbGVcclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsoc2VsZWN0ZWQuZWRpdE1vZGUgfHwgc2VsZWN0ZWQubmV3TW9kZSkgJiYgdXNlciA/IChcclxuICAgICAgICA8TmV3RWRpdEl0ZW1cclxuICAgICAgICAgIHR5cGU9e0l0ZW1UeXBlLkJ1bmRsZVR5cGV9XHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICA8SXRlbUxpc3RcclxuICAgICAgICB0eXBlPXtJdGVtVHlwZS5CdW5kbGVUeXBlfVxyXG4gICAgICAgIHVzZVNlbGVjdGVkPXt0cnVlfVxyXG4gICAgICAgIGFsbG93RWRpdHM9e3RydWV9XHJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cclxuICAgICAgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdW5kbGVzUGFnZTtcclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgQlVORExFX0ZSQUdNRU5ULCBGRUVEX0ZSQUdNRU5ULCBTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UIH0gZnJvbSAnLi9mcmFnbWVudHMnO1xuXG5leHBvcnQgY29uc3QgTElLRV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGxpa2VCdW5kbGVNdXRhdGlvbigkZGF0YTogTGlrZUJ1bmRsZUlucHV0KSB7XG4gICAgbGlrZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuICAke0ZFRURfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgTElLRV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBsaWtlRmVlZE11dGF0aW9uKCRkYXRhOiBMaWtlRmVlZElucHV0KSB7XG4gICAgbGlrZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuICAke0ZFRURfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlQnVuZGxlTXV0YXRpb24oJGRhdGE6IEJ1bmRsZUNyZWF0ZUlucHV0KSB7XG4gICAgY3JlYXRlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgYnVuZGxlcyB7XG4gICAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcbmV4cG9ydCBjb25zdCBVUERBVEVfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVCdW5kbGVNdXRhdGlvbigkZGF0YTogQnVuZGxlVXBkYXRlSW5wdXQpIHtcbiAgICB1cGRhdGVCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICBidW5kbGVzIHtcbiAgICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZENyZWF0ZUlucHV0KSB7XG4gICAgY3JlYXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgZmVlZHMge1xuICAgICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZFVwZGF0ZUlucHV0KSB7XG4gICAgdXBkYXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgZmVlZHMge1xuICAgICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZVNhdmVkQXJ0aWNsZU11dGF0aW9uKCRkYXRhOiBTYXZlZEFydGljbGVDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZVNhdmVkQXJ0aWNsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uU2F2ZWRBcnRpY2xlRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBCdW5kbGVJbnB1dCkge1xuICAgIGRlbGV0ZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgaWRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlRmVlZE11dGF0aW9uKCRkYXRhOiBGZWVkSW5wdXQpIHtcbiAgICBkZWxldGVGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVTYXZlZEFydGljbGVNdXRhdGlvbigkZGF0YTogRGVsZXRlU2F2ZWRBcnRpY2xlSW5wdXQpIHtcbiAgICBkZWxldGVTYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIGlkXG4gICAgICB1cmxcbiAgICB9XG4gIH1cbmA7XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBtZSBmcm9tICcuLi9wYWdlcy9hcGkvbWUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBvcHRpbWlzdGljQ2FjaGUgPSAoIGlzRmVlZCwgYWN0aW9uLCBkYXRhLCBjdXJyZW50SXRlbSwgbWVEYXRhICkgPT4ge1xyXG4gICAgY29uc3QgX190eXBlbmFtZSA9ICBpc0ZlZWQgPyAnRmVlZCc6ICdCdW5kbGUnO1xyXG4gICAgY29uc3QgaWQgPSB7ZGF0YX07XHJcbiAgICBjb25zdCB7IG1lIH0gPSBtZURhdGE7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgLi4uY3VycmVudEl0ZW0sXHJcbiAgICAgICAgW2lzRmVlZCA/ICdidW5kbGVzJyA6ICdmZWVkcyddIDogW10sXHJcbiAgICAgICAgdGFnczogW1xyXG4gICAgICAgICAgICAuLi5jdXJyZW50SXRlbS50YWdzLmZpbHRlcigodGFnKSA9PiBfLmhhcyh0YWcsICdpZCcpKSxcclxuICAgICAgICAgICAgLi4uXy5nZXQoZGF0YSwgJ3RhZ3MuY3JlYXRlJywgW10ubWFwKCh0YWcpID0+ICh7XHJcblxyXG4gICAgICAgICAgICAgICAgX190eXBlbmFtZTogaXNGZWVkID8gJ0ZlZWRUYWcnIDogJ0J1bmRsZVRhZycsXHJcbiAgICAgICAgICAgICAgICAuLi50YWcsXHJcbiAgICAgICAgICAgIH0pKSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIC4uLl8oaXNGZWVkID8ge30gOiB7XHJcbiAgICAgICAgICAgIGZlZWRzOiBjdXJyZW50SXRlbS5mZWVkcyxcclxuICAgICAgICB9KSxcclxuICAgICAgICBhdXRob3I6IG1lLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBfX3R5cGVuYW1lOiAnTXV0YXRpb24nLFxyXG4gICAgICAgIFthY3Rpb24gKyBfX3R5cGVuYW1lXToge1xyXG4gICAgICAgICAgICBfX3R5cGVuYW1lLFxyXG4gICAgICAgICAgLi4ucmVzcG9uc2UsICBcclxuICAgIH0sXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcclxuXHJcblxyXG5jb25zdCBnZW5OZXN0ZWRJdGVtcyA9IChjdXJyZW50SXRlbSkgPT4ge1xyXG4gICAgY29uc3QgdGFncyA9IFxyXG4gICAgXCJ0YWdzXCIgaW4gY3VycmVudEl0ZW0gPyB7XHJcbiAgICAgICAgdGFnczoge1xyXG4gICAgICAgICAgICBjb25uZWN0OiBjdXJyZW50SXRlbS50YWdzLm1hcCgoeyBpZCB9KSA9Pih7IGlkIH0pKS5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgIT09IHVuZGVmaW5lZCksXHJcblxyXG4gICAgICAgICAgICBjcmVhdGU6IGN1cnJlbnRJdGVtLnRhZ3NcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBpZCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAubWFwKChvKSA9PiAoeyAuLi5vLCBpZDogdXVpZHY0KCkgfSkpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbiAgICAgOiB7fTtcclxuXHJcbiAgICAgY29uc3QgZmVlZHMgPVxyXG4gICAgICdmZWVkcycgaW4gY3VycmVudEl0ZW1cclxuICAgICAgID8ge1xyXG4gICAgICAgICAgIGZlZWRzOiB7XHJcbiAgICAgICAgICAgICBjb25uZWN0OiBjdXJyZW50SXRlbS5mZWVkc1xyXG4gICAgICAgICAgICAgICAubWFwKCh7IGlkIH0pID0+ICh7IGlkIH0pKVxyXG4gICAgICAgICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgIH1cclxuICAgICAgIDoge307XHJcblxyXG4gICAgICAgY29uc3QgeyBfX3R5cGVuYW1lLCBsaWtlcywgYXV0aG9yLCBidW5kbGVzLCAuLi5jbGVhbmVkSXRlbSB9ID0gY3VycmVudEl0ZW07ICAvL3N0cmlwIHVud2FudGVkIGZyb20gY3VycmVudEl0ZW0gYW5kIGNhbGwgaXQgJ2NsZWFuZWRJdGVtJyAnY2xlYW5lZEl0ZW0nIHdpbGwgYmUgYWxsIG9mIHRoZSBmaWVsZHMgdGhhdCBhcmUgbGVmdG92ZXIuXHJcblxyXG4gICAgICAgcmV0dXJuIHsgLi4uY2xlYW5lZEl0ZW0sIC4uLnRhZ3MsIC4uLmZlZWRzIH07ICAvL2FkZCBhbGwgdGFnIGFuZCBmZWVkIGluZm8gdG8gY2xlYW5lZEl0ZW0uXHJcbn1cclxuXHJcbmNvbnN0IGNsZWFuT3BzID0gKGN1cnJlbnREYXRhLCBpdGVtcykgPT4ge1xyXG4gIGl0ZW1zLm1hcCgob25lSXRlbSkgPT4ge1xyXG4gICAgWydjb25uZWN0JywgJ2Rpc2Nvbm5lY3QnLCAnY3JlYXRlJ10ubWFwKChvcGVyYXRpb24pID0+IHtcclxuICAgICAgaWYgKG9wZXJhdGlvbiBpbiBjdXJyZW50RGF0YVtvbmVJdGVtXSkge1xyXG4gICAgICAgIGN1cnJlbnREYXRhW29uZUl0ZW1dW29wZXJhdGlvbl0ubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICA/IGRlbGV0ZSBjdXJyZW50RGF0YVtvbmVJdGVtXVtvcGVyYXRpb25dXHJcbiAgICAgICAgICA6IG51bGw7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoXy5pc0VtcHR5KGN1cnJlbnREYXRhW29uZUl0ZW1dKSkge1xyXG4gICAgICBkZWxldGUgY3VycmVudERhdGFbb25lSXRlbV07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjdXJyZW50RGF0YTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJlcGFyZU5ld1VwZGF0ZU9iaiA9IChxdWVyaWVkSXRlbSwgY3VycmVudEl0ZW0sIGlzRmVlZCwgaXNFZGl0aW5nKSA9PiB7XHJcbiAgIGNvbnN0IGN1cnJlbnREYXRhID0gIGdlbk5lc3RlZEl0ZW1zKGN1cnJlbnRJdGVtKVxyXG5cclxuICAgaWYgKCFpc0VkaXRpbmcpIHtcclxuICAgIHJldHVybiB7IC4uLmN1cnJlbnREYXRhLCAgaWQ6IHV1aWR2NCgpXHJcbiAgICAvLyBjdXJyZW50RGF0YSAoZmVlZCBvciB0YWcpIGlzIHJldHVybmVkIFdJVEhPVVQgYW4gaWQgbnVtYmVyOyB0aHVzIG9uZSBpcyBhZGRlZC9wcm92aWRlZC5cclxuICAgfVxyXG4gICBcclxuICAgY29uc3QgcXVlcmllZERhdGEgPSBnZW5OZXN0ZWRJdGVtcyhxdWVyaWVkSXRlbSlcclxuICAgXHJcblxyXG4gICBjb25zdCBkaXNjb25uZWN0ZWRUYWdzID0gXy5kaWZmZXJlbmNlV2l0aChcclxuICAgICBxdWVyaWVkRGF0YS50YWdzLmNvbm5lY3QsXHJcbiAgICAgY3VycmVudERhdGEudGFncy5jb25uZWN0LFxyXG4gICAgIF8uaXNFcXVhbCxcclxuICAgICkgXHJcblxyXG4gICBjb25zdCBjb25uZWN0ZWRUYWdzID0gXy5kaWZmZXJlbmNlV2l0aChcclxuICAgICBxdWVyaWVkRGF0YS50YWdzLmNvbm5lY3QsXHJcbiAgICAgY3VycmVudERhdGEudGFncy5jb25uZWN0LFxyXG4gICAgIF8uaXNFcXVhbCxcclxuICAgICkgXHJcblxyXG4gICAgaWYgKCFpc0ZlZWQpIHtcclxuICAgICAgY29uc3QgZGlzY29ubmVjdGVkRmVlZHMgPSBfLmRpZmZlcmVuY2VXaXRoKFxyXG4gICAgICAgIHF1ZXJpZWREYXRhLmZlZWRzLmNvbm5lY3QsXHJcbiAgICAgICAgY3VycmVudERhdGEuZmVlZHMuY29ubmVjdCxcclxuICAgICAgICBfLmlzRXF1YWwsXHJcbiAgICAgICApIFxyXG4gICBcclxuICAgICAgY29uc3QgY29ubmVjdGVkRmVlZHMgPSBfLmRpZmZlcmVuY2VXaXRoKFxyXG4gICAgICAgIHF1ZXJpZWREYXRhLmZlZWRzLmNvbm5lY3QsXHJcbiAgICAgICAgY3VycmVudERhdGEuZmVlZHMuY29ubmVjdCxcclxuICAgICAgICBfLmlzRXF1YWwsXHJcbiAgICAgICApXHJcbiAgICAgXHJcbiAgICAgIHJldHVybiBjbGVhbk9wcyhcclxuICAgICAgICB7XHJcbiAgICAgICAgLi4uY3VycmVudERhdGEsXHJcbiAgICAgICAgdGFnczoge1xyXG4gICAgICAgICAgY29ubmVjdDogY29ubmVjdGVkVGFncyxcclxuICAgICAgICAgIGRpc2Nvbm5lY3Q6IGRpc2Nvbm5lY3RlZFRhZ3MsXHJcbiAgICAgICAgICBjcmVhdGU6IF8uZ2V0KGN1cnJlbnREYXRhLCAndGFncy5jcmVhdGUnLCBbXSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmZWVkczoge1xyXG4gICAgICAgICAgY29ubmVjdDogY29ubmVjdGVkRmVlZHMsXHJcbiAgICAgICAgICBkaXNjb25uZWN0OiBkaXNjb25uZWN0ZWRGZWVkcyxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFsndGFncycsICdmZWVkcyddXHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gY2xlYW5PcHMoXHJcbiAgICAgICAge1xyXG4gICAgICAgIC4uLmN1cnJlbnREYXRhLFxyXG4gICAgICAgIHRhZ3M6IHtcclxuICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3RlZFRhZ3MsXHJcbiAgICAgICAgICBkaXNjb25uZWN0OiBkaXNjb25uZWN0ZWRUYWdzLFxyXG4gICAgICAgICAgY3JlYXRlOiBfLmdldChjdXJyZW50RGF0YSwgJ3RhZ3MuY3JlYXRlJywgW10pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIFsndGFncyddXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgfSBcclxufSIsImltcG9ydCB7IEJVTkRMRVNfUVVFUlksIEJVTkRMRV9RVUVSWSwgRkVFRFNfUVVFUlksIEZFRURfUVVFUlkgfSBmcm9tIFwiLi9hcGkvZ3JhcGhxbC9xdWVyaWVzXCI7XHJcbmltcG9ydCAqICBhcyBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVDYWNoZSA9IChpc0ZlZWQsIGFjdGlvbikgPT4gKCBzdG9yZSwgeyBkYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSBkYXRhW2Ake2FjdGlvbn0ke2lzRmVlZH0gPyAnRmVlZCcgOiAnQnVuZGxlJ31gXTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdG9yZS53cml0ZVF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IGlzRmVlZCA/IEZFRURfUVVFUlkgOiBCVU5ETEVfUVVFUlksXHJcbiAgICAgICAgICAgIHZhcmlhYmxlczogeyBkYXRhOiB7IGlkOiBfLmdldChpdGVtLCAnaWQnKX19LFxyXG4gICAgICAgICAgICBkYXRhOiB7IFtpc0ZlZWQgPyAnZmVlZCcgOiAnYnVuZGxlJ106IGl0ZW19LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZmVlZHMsIGJ1bmRsZXMgfSA9IHN0b3JlLnJlYWRRdWVyeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBpc0ZlZWQgPyBGRUVEU19RVUVSWSA6IEJVTkRMRVNfUVVFUlksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW1zID0gaXNGZWVkID8gZmVlZHMgOiBidW5kbGVzO1xyXG5cclxuICAgICAgICBzdG9yZS53cml0ZVF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IGlzRmVlZCA/IEZFRURTX1FVRVJZIDogQlVORExFU19RVUVSWSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgW2lzRmVlZCA/ICdmZWVkcycgOiAnYnVuZGxlcyddOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudEl0ZW1zLmZpbHRlcigobykgPT4gby5pZCAhPT0gaXRlbS5pZCksIGl0ZW0sXHJcbiAgICAgICAgICAgICAgICBdLCAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgIH0gY2F0Y2ggKGUpIHt9XHJcbn07XHJcblxyXG5cclxuICAgICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9