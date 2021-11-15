exports.id = "components_newEditItem_tsx";
exports.ids = ["components_newEditItem_tsx"];
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
    lineNumber: 14,
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
    lineNumber: 17,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 13,
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
/* harmony import */ var _utils_prepareUpdateObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/prepareUpdateObject */ "./utils/prepareUpdateObject.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _generateInputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generateInputField */ "./components/generateInputField.tsx");
/* harmony import */ var _searchItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchItems */ "./components/searchItems.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\newEditItem.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const NewEditItem = ({
  type,
  selected,
  setSelected
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_6__.ItemType.FeedType;
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_10__.WaitingClock, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 14
    }, undefined);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_10__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 14
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: e => {
        e.preventDefault();
        const data = (0,_utils_prepareUpdateObject__WEBPACK_IMPORTED_MODULE_5__.prepareNewUpdateObject)(currentItem);
        console.log(data);
        createItemMutation({
          variables: {
            data
          }
        });
        setItem(initialState);
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
          lineNumber: 60,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: [inputFields.map(name => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_generateInputField__WEBPACK_IMPORTED_MODULE_8__.GenerateInputField, {
            currentItem: currentItem,
            name: name,
            changeHandler: setItem
          }, `${type}-${name}`, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 14
          }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: `py-4 ${isFeed ? null : 'pt-28'}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: `py-4 ${`bg-${isFeed ? 'green' : 'purple'}-400`} hover:bg-${isFeed ? 'green' : 'purple'}-700 text-white font-bold px-12 rounded`,
              type: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 14
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6 ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "py-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "block py-2",
              children: "Tags:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "grid grid-cols-3 gap-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_7__.BadgeList, {
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.tags,
                action: _utils_types__WEBPACK_IMPORTED_MODULE_6__.ActionType.CREATE,
                setItem: setItem,
                item: currentItem
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 16
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "py-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "block py-2",
              children: "Add New Tag:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_9__.SearchItems, {
              queryName: isFeed ? _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findFeedTags : _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findBundleTags,
              query: isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_FEED_TAGS_QUERY : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_BUNDLE_TAGS_QUERY,
              setItem: setItem,
              currentItem: currentItem,
              fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.tags
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 16
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, undefined), isFeed ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "block py-2",
                children: "Feeds:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 16
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "grid grid-cols-3 gap-2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_7__.BadgeList, {
                  fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.feeds,
                  action: _utils_types__WEBPACK_IMPORTED_MODULE_6__.ActionType.CREATE,
                  setItem: setItem,
                  item: currentItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 16
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "block py-2",
                children: "Add New Feed:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 16
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_9__.SearchItems, {
                queryName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findFeeds,
                query: _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_FEEDS_QUERY,
                setItem: setItem,
                currentItem: currentItem,
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.feeds
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 16
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 13
            }, undefined)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\searchItems.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







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
  const [findItemsQuery, {
    loading,
    data,
    called
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useLazyQuery)(query, {
    fetchPolicy: 'network-only'
  });
  console.log(loading, data, called);

  const fetchedItems = lodash__WEBPACK_IMPORTED_MODULE_6__.get(data, queryName);

  const filtFindItems = fetchedItems ? fetchedItems.filter(oneItem => !currentItem[fieldName].map(o => o.name).includes(oneItem.name)) : [];
  const matchCurrent = filtFindItems.filter(o => o.name === search);
  const matchList = currentItem[fieldName].filter(o => o.name === search);
  const filtFindItemsWithAdd = matchCurrent.length === 0 && matchList.length === 0 && queryName !== 'findFeeds' ? [...filtFindItems, {
    name: search
  }] : filtFindItems;

  const dummyNewItem = _objectSpread(_objectSpread({}, currentItem), {}, {
    [fieldName]: filtFindItemsWithAdd
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: [loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_5__.Spin, {
        className: "h-6 text-gray-500 animate-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_5__.Search, {
        className: "mt-3 mr-2 w-6 h-6 text-gray-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 18
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "border-4 rounded w-full py-2 px-3",
        value: search,
        onChange: e => {
          e.persist();

          if (e.target.value !== search) {
            setSearch(() => e.target.value);
            findItemsQuery({
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
        lineNumber: 49,
        columnNumber: 18
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
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
        lineNumber: 62,
        columnNumber: 21
      }, undefined) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-gray-400",
        children: "No matches"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }, undefined) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, undefined);
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

/***/ "./utils/prepareUpdateObject.ts":
/*!**************************************!*\
  !*** ./utils/prepareUpdateObject.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareNewUpdateObject": function() { return /* binding */ prepareNewUpdateObject; }
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const genNestedItems = currentItem => {
  const tags = 'tags' in currentItem ? {
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

const prepareNewUpdateObject = currentItem => {
  const currentData = genNestedItems(currentItem);
  return {
    currentData,
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)()
  };
};

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2dlbmVyYXRlSW5wdXRGaWVsZC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9zZWFyY2hJdGVtcy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmplY3QudHMiXSwibmFtZXMiOlsiR2VuZXJhdGVJbnB1dEZpZWxkIiwiY3VycmVudEl0ZW0iLCJuYW1lIiwiY2hhbmdlSGFuZGxlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJlIiwicGVyc2lzdCIsImN1cnIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk5ld0VkaXRJdGVtIiwidHlwZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJpc0ZlZWQiLCJJdGVtVHlwZSIsImluaXRpYWxGZWVkIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImZlZWRzIiwiaW5pdGlhbFN0YXRlIiwic2V0SXRlbSIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHMiLCJjcmVhdGVJdGVtTXV0YXRpb24iLCJsb2FkaW5nIiwiY3JlYXRlTG9hZGluZyIsImVycm9yIiwiY3JlYXRlRXJyb3IiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9GRUVEX01VVEFUSU9OIiwiQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInByZXBhcmVOZXdVcGRhdGVPYmplY3QiLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwiY3VyclN0YXRlIiwiZWRpdE1vZGUiLCJuZXdNb2RlIiwibWFwIiwiQmFkZ2VGaWVsZE5hbWUiLCJBY3Rpb25UeXBlIiwiU2VhcmNoUXVlcnlOYW1lIiwiRklORF9GRUVEX1RBR1NfUVVFUlkiLCJGSU5EX0JVTkRMRV9UQUdTX1FVRVJZIiwiRklORF9GRUVEU19RVUVSWSIsIlNlYXJjaEl0ZW1zIiwicXVlcnlOYW1lIiwicXVlcnkiLCJmaWVsZE5hbWUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaW5kSXRlbXNRdWVyeSIsImNhbGxlZCIsInVzZUxhenlRdWVyeSIsImZldGNoUG9saWN5IiwiZmV0Y2hlZEl0ZW1zIiwiXyIsImZpbHRGaW5kSXRlbXMiLCJmaWx0ZXIiLCJvbmVJdGVtIiwibyIsImluY2x1ZGVzIiwibWF0Y2hDdXJyZW50IiwibWF0Y2hMaXN0IiwiZmlsdEZpbmRJdGVtc1dpdGhBZGQiLCJsZW5ndGgiLCJkdW1teU5ld0l0ZW0iLCJMSUtFX0JVTkRMRV9NVVRBVElPTiIsImdxbCIsIkJVTkRMRV9GUkFHTUVOVCIsIkZFRURfRlJBR01FTlQiLCJMSUtFX0ZFRURfTVVUQVRJT04iLCJVUERBVEVfQlVORExFX01VVEFUSU9OIiwiVVBEQVRFX0ZFRURfTVVUQVRJT04iLCJDUkVBVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiIsIlNBVkVEX0FSVElDTEVfRlJBR01FTlQiLCJERUxFVEVfQlVORExFX01VVEFUSU9OIiwiREVMRVRFX0ZFRURfTVVUQVRJT04iLCJERUxFVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiIsImdlbk5lc3RlZEl0ZW1zIiwiY29ubmVjdCIsImlkIiwidW5kZWZpbmVkIiwiY3JlYXRlIiwidXVpZDR2IiwiX190eXBlbmFtZSIsImxpa2VzIiwiYXV0aG9yIiwiYnVuZGxlcyIsImNsZWFuZWRJdGVtIiwiY3VycmVudERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR08sTUFBTUEsa0JBQWtCLEdBQUcsQ0FBQztBQUMvQkMsYUFEK0I7QUFFL0JDLE1BRitCO0FBRy9CQztBQUgrQixDQUFELGtCQVM5QjtBQUFLLFdBQVMsRUFBQyxNQUFmO0FBQUEsMEJBQ0k7QUFBTyxhQUFTLEVBQUUs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IjoiY29tcG9uZW50c19uZXdFZGl0SXRlbV90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0IH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR2VuZXJhdGVJbnB1dEZpZWxkID0gKHtcclxuICAgIGN1cnJlbnRJdGVtLFxyXG4gICAgbmFtZSxcclxuICAgIGNoYW5nZUhhbmRsZXIsXHJcbn0gOiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjdXJyZW50SXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDtcclxuICAgIGNoYW5nZUhhbmRsZXI6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxufSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCIgPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9IFwiYmxvY2sgcHktMlwiID5cclxuICAgICAgICAgICAge25hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpfVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci00IHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtM1wiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50SXRlbVtuYW1lXX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgICAgICBjaGFuZ2VIYW5kbGVyKChjdXJyKSA9PiAoey4uLmN1cnIsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbikiLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENSRUFURV9CVU5ETEVfTVVUQVRJT04sIENSRUFURV9GRUVEX01VVEFUSU9OIH0gZnJvbSAnLi4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zJztcclxuaW1wb3J0IHsgRklORF9CVU5ETEVfVEFHU19RVUVSWSwgRklORF9GRUVEU19RVUVSWSwgRklORF9GRUVEX1RBR1NfUVVFUlkgfSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9xdWVyaWVzJztcclxuaW1wb3J0IHsgcHJlcGFyZU5ld1VwZGF0ZU9iamVjdCB9IGZyb20gJy4uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmplY3QnO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBCYWRnZUZpZWxkTmFtZSwgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0LCBJdGVtVHlwZSwgTmV3SXRlbVN0YXRlLCBTZWFyY2hRdWVyeU5hbWUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tICcuL2JhZGdlTGlzdCc7XHJcbmltcG9ydCB7IEdlbmVyYXRlSW5wdXRGaWVsZCB9IGZyb20gJy4vZ2VuZXJhdGVJbnB1dEZpZWxkJztcclxuaW1wb3J0IHsgU2VhcmNoSXRlbXMgfSBmcm9tICcuL3NlYXJjaEl0ZW1zJztcclxuaW1wb3J0IHsgRXJyb3JTaWduLCBXYWl0aW5nQ2xvY2sgfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3RWRpdEl0ZW0gPSAoe1xyXG4gICB0eXBlLFxyXG4gICBzZWxlY3RlZCxcclxuICAgc2V0U2VsZWN0ZWRcclxufToge1xyXG4gICBcclxuICAgdHlwZTogSXRlbVR5cGU7XHJcbiAgIHNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZTtcclxuICAgc2V0U2VsZWN0ZWQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj5cclxufSkgPT4ge1xyXG4gICAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGVcclxuICAgIGNvbnN0IGluaXRpYWxGZWVkOiBGZWVkT2JqZWN0ID0ge25hbWU6IFwiXCIsIHVybDogXCJcIiwgdGFnczogW10gfTtcclxuICAgIGNvbnN0IGluaXRpYWxCdW5kbGU6IEJ1bmRsZU9iamVjdCA9IHtuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgdGFnczogW10sIGZlZWRzOiBbXX07XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGU6IE5ld0l0ZW1TdGF0ZSA9IGlzRmVlZCA/IGluaXRpYWxGZWVkIDogaW5pdGlhbEJ1bmRsZTtcclxuICAgIGNvbnN0IFtjdXJyZW50SXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZTxOZXdJdGVtU3RhdGU+KGluaXRpYWxTdGF0ZSlcclxuICAgIGNvbnN0IGlucHV0RmllbGRzID0gaXNGZWVkID8gWyduYW1lJywgJ3VybCddIDogWyduYW1lJywgJ2Rlc2NyaXB0aW9uJ11cclxuXHJcbiAgIGNvbnN0IFsgY3JlYXRlSXRlbU11dGF0aW9uLCB7IGxvYWRpbmc6IGNyZWF0ZUxvYWRpbmcsIGVycm9yOiBjcmVhdGVFcnJvciB9IF0gID0gdXNlTXV0YXRpb24oaXNGZWVkID8gQ1JFQVRFX0ZFRURfTVVUQVRJT04gOiBDUkVBVEVfQlVORExFX01VVEFUSU9OKTtcclxuXHJcbiAgIGlmKGNyZWF0ZUxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxXYWl0aW5nQ2xvY2sgY2xhc3NOYW1lPVwibXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvXCIvPlxyXG4gICB9ICBcclxuICAgaWYoY3JlYXRlRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIDxFcnJvclNpZ24gY2xhc3NOYW1lPVwibXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvXCIvPlxyXG4gICB9IFxyXG4gICBcclxuICAgcmV0dXJuIChcclxuICAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgY29uc3QgZGF0YSA9IHByZXBhcmVOZXdVcGRhdGVPYmplY3QoY3VycmVudEl0ZW0pXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgIFxyXG4gICAgICAgICBjcmVhdGVJdGVtTXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgZGF0YSB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldEl0ZW0oaW5pdGlhbFN0YXRlKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgbmV3TW9kZTogZmFsc2VcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgIH19XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgcm91bmRlZC1tZCBib3JkZXItNCBteS00IHB5LTIgcHgtNFwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiB0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTJcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlzRmVlZCA/ICdOZXcgRmVlZCcgOiAnTmV3IEJ1bmRsZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02Jz5cclxuICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgIDxHZW5lcmF0ZUlucHV0RmllbGRcclxuICAgICAgICAgICAgICAga2V5PXtgJHt0eXBlfS0ke25hbWV9YH1cclxuICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICBjaGFuZ2VIYW5kbGVyPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHktNCAke2lzRmVlZCA/IG51bGwgOiAncHQtMjgnfWB9PlxyXG4gICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17YHB5LTQgJHtgYmctJHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgfS00MDBgfSBob3ZlcjpiZy0ke1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICB9LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweC0xMiByb3VuZGVkYH1cclxuICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02ICc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+VGFnczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5DUkVBVEV9XHJcbiAgICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgaXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBweS0yJz5BZGQgTmV3IFRhZzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8U2VhcmNoSXRlbXMgXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZT17aXNGZWVkID8gU2VhcmNoUXVlcnlOYW1lLmZpbmRGZWVkVGFncyA6IFNlYXJjaFF1ZXJ5TmFtZS5maW5kQnVuZGxlVGFnc31cclxuICAgICAgICAgICAgICAgICAgcXVlcnk9e2lzRmVlZCA/IEZJTkRfRkVFRF9UQUdTX1FVRVJZIDogRklORF9CVU5ETEVfVEFHU19RVUVSWX1cclxuICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLnRhZ3N9XHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7aXNGZWVkID8gbnVsbCA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPkZlZWRzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC0yJz5cclxuICAgICAgICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS5mZWVkc31cclxuICAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5DUkVBVEV9XHJcbiAgICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgaXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBweS0yJz5BZGQgTmV3IEZlZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPFNlYXJjaEl0ZW1zIFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeU5hbWU9e1NlYXJjaFF1ZXJ5TmFtZS5maW5kRmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtGSU5EX0ZFRURTX1FVRVJZfVxyXG4gICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICA8Lz5cclxuICAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tIFwiZ3JhcGhxbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBCYWRnZUZpZWxkTmFtZSwgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0LCBTZWFyY2hRdWVyeU5hbWUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgQmFkZ2VMaXN0IH0gZnJvbSBcIi4vYmFkZ2VMaXN0XCI7XHJcbmltcG9ydCB7IFNlYXJjaCwgU3BpbiB9IGZyb20gXCIuL3N2Z1wiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSXRlbXMgPSAoe2N1cnJlbnRJdGVtLCBzZXRJdGVtLCBxdWVyeU5hbWUsIHF1ZXJ5LCBmaWVsZE5hbWV9IDoge1xyXG5cclxuICAgIGN1cnJlbnRJdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG4gICAgc2V0SXRlbTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdD4+O1xyXG4gICAgcXVlcnlOYW1lOiBTZWFyY2hRdWVyeU5hbWU7XHJcbiAgICBxdWVyeTogRG9jdW1lbnROb2RlO1xyXG4gICAgZmllbGROYW1lOiBCYWRnZUZpZWxkTmFtZTtcclxufSkgPT4ge1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtmaW5kSXRlbXNRdWVyeSwgeyBsb2FkaW5nLCBkYXRhLCBjYWxsZWQgfV0gPSB1c2VMYXp5UXVlcnkocXVlcnksIHsgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxyXG59KVxyXG5cclxuY29uc29sZS5sb2cobG9hZGluZywgZGF0YSwgY2FsbGVkKVxyXG5cclxuY29uc3QgZmV0Y2hlZEl0ZW1zID0gXy5nZXQoZGF0YSwgcXVlcnlOYW1lKTtcclxuY29uc3QgZmlsdEZpbmRJdGVtcyA9IGZldGNoZWRJdGVtcyA/IGZldGNoZWRJdGVtcy5maWx0ZXIoKG9uZUl0ZW0pID0+ICFjdXJyZW50SXRlbVtmaWVsZE5hbWVdLm1hcCgobykgPT4gby5uYW1lKS5pbmNsdWRlcyhvbmVJdGVtLm5hbWUpLCkgOiBbXTtcclxuXHJcbmNvbnN0IG1hdGNoQ3VycmVudCA9IGZpbHRGaW5kSXRlbXMuZmlsdGVyKG8gPT4gby5uYW1lID09PSBzZWFyY2gpO1xyXG5jb25zdCBtYXRjaExpc3QgPSBjdXJyZW50SXRlbVtmaWVsZE5hbWVdLmZpbHRlcigobykgPT4gby5uYW1lID09PSBzZWFyY2gpXHJcblxyXG5jb25zdCBmaWx0RmluZEl0ZW1zV2l0aEFkZCA9XHJcbm1hdGNoQ3VycmVudC5sZW5ndGggPT09IDAgJiZcclxubWF0Y2hMaXN0Lmxlbmd0aCA9PT0gMCAmJlxyXG5xdWVyeU5hbWUgIT09ICdmaW5kRmVlZHMnXHJcbiAgPyBbLi4uZmlsdEZpbmRJdGVtcywgeyBuYW1lOiBzZWFyY2ggfV1cclxuICA6IGZpbHRGaW5kSXRlbXM7XHJcblxyXG5cclxuY29uc3QgZHVtbXlOZXdJdGVtID0ge1xyXG4gICAgLi4uY3VycmVudEl0ZW0sXHJcbiAgICBbZmllbGROYW1lXTogZmlsdEZpbmRJdGVtc1dpdGhBZGQsXHJcbn07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPFNwaW4gY2xhc3NOYW1lPVwiaC02IHRleHQtZ3JheS01MDAgYW5pbWF0ZS1zcGluXCIvPikgOihcclxuICAgICAgICAgICAgICAgICA8U2VhcmNoIGNsYXNzTmFtZT1cIm10LTMgbXItMiB3LTYgaC02IHRleHQtZ3JheS01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJvcmRlci00IHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtM1wiIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQudmFsdWUgIT09IHNlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKCgpID0+IGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRJdGVtc1F1ZXJ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGE6IHtzZWFyY2g6IGUudGFyZ2V0LnZhbHVlIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBmbGV4IG0tMlwiPlxyXG4gICAgICAgICAgICAgICAge3NlYXJjaCAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLkFERH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17ZHVtbXlOZXdJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2g9e3NldFNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiBjYWxsZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPk5vIG1hdGNoZXM8L3A+XHJcbiAgICAgICAgICAgICAgICApIDpudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IEJVTkRMRV9GUkFHTUVOVCwgRkVFRF9GUkFHTUVOVCwgU0FWRURfQVJUSUNMRV9GUkFHTUVOVCB9IGZyb20gJy4vZnJhZ21lbnRzJztcblxuZXhwb3J0IGNvbnN0IExJS0VfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBsaWtlQnVuZGxlTXV0YXRpb24oJGRhdGE6IExpa2VCdW5kbGVJbnB1dCkge1xuICAgIGxpa2VCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IExJS0VfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gbGlrZUZlZWRNdXRhdGlvbigkZGF0YTogTGlrZUZlZWRJbnB1dCkge1xuICAgIGxpa2VGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBCdW5kbGVDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIGJ1bmRsZXMge1xuICAgICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5leHBvcnQgY29uc3QgVVBEQVRFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gdXBkYXRlQnVuZGxlTXV0YXRpb24oJGRhdGE6IEJ1bmRsZVVwZGF0ZUlucHV0KSB7XG4gICAgdXBkYXRlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgYnVuZGxlcyB7XG4gICAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIGZlZWRzIHtcbiAgICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRVcGRhdGVJbnB1dCkge1xuICAgIHVwZGF0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIGZlZWRzIHtcbiAgICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVTYXZlZEFydGljbGVNdXRhdGlvbigkZGF0YTogU2F2ZWRBcnRpY2xlQ3JlYXRlSW5wdXQpIHtcbiAgICBjcmVhdGVTYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVCdW5kbGVNdXRhdGlvbigkZGF0YTogQnVuZGxlSW5wdXQpIHtcbiAgICBkZWxldGVCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZElucHV0KSB7XG4gICAgZGVsZXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgaWRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlU2F2ZWRBcnRpY2xlTXV0YXRpb24oJGRhdGE6IERlbGV0ZVNhdmVkQXJ0aWNsZUlucHV0KSB7XG4gICAgZGVsZXRlU2F2ZWRBcnRpY2xlKGRhdGE6ICRkYXRhKSB7XG4gICAgICBpZFxuICAgICAgdXJsXG4gICAgfVxuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3Y0IGFzIHV1aWQ0diB9IGZyb20gJ3V1aWQnXHJcblxyXG5cclxuY29uc3QgZ2VuTmVzdGVkSXRlbXMgPSAoIGN1cnJlbnRJdGVtICkgPT4ge1xyXG4gICAgY29uc3QgdGFncyA9IFxyXG4gICAgJ3RhZ3MnIGluIGN1cnJlbnRJdGVtID8ge1xyXG4gICAgICAgIHRhZ3M6IHtcclxuICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0udGFncy5tYXAoKHsgaWQgfSkgPT4gKHsgaWQgfSkpLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gdW5kZWZpbmVkKSxcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZTogY3VycmVudEl0ZW0udGFncy5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgPT09IHVuZGVmaW5lZCkubWFwKChvKSA9PiAoeyAuLi5vLCBpZDogdXVpZDR2KCkgfSkpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9IDoge307XHJcblxyXG4gICAgY29uc3QgZmVlZHMgPSBcclxuICAgICdmZWVkcycgaW4gY3VycmVudEl0ZW0gPyB7XHJcbiAgICAgICAgZmVlZHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGN1cnJlbnRJdGVtLmZlZWRzLm1hcCgoeyBpZCB9KSA9PiAoeyBpZCB9KSkuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB1bmRlZmluZWQpLFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICAgOiB7fTtcclxuICAgIGNvbnN0IHsgX190eXBlbmFtZSwgbGlrZXMsIGF1dGhvciwgYnVuZGxlcywgLi4uY2xlYW5lZEl0ZW0gIH0gPSBjdXJyZW50SXRlbTtcclxuXHJcbiAgICByZXR1cm4geyAuLi5jbGVhbmVkSXRlbSwgLi4udGFncywgLi4uZmVlZHMgfTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcmVwYXJlTmV3VXBkYXRlT2JqZWN0ID0gKGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IGdlbk5lc3RlZEl0ZW1zKGN1cnJlbnRJdGVtKTtcclxuXHJcbiAgICByZXR1cm4ge2N1cnJlbnREYXRhLCBpZDogdXVpZDR2KCl9O1xyXG59O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==