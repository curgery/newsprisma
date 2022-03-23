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
/* harmony import */ var _utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/prepareUpdateObj */ "./utils/prepareUpdateObj.ts");
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

  if (createLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_10__.WaitingClock, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 12
    }, undefined);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_10__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: e => {
        e.preventDefault();
        const data = (0,_utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_5__.prepareNewUpdateObj)(currentItem);
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
          lineNumber: 80,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: inputFields.map(name => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_generateInputField__WEBPACK_IMPORTED_MODULE_8__.GenerateInputField, {
            currentItem: currentItem,
            name: name,
            changeHandler: setItem
          }, `${type}-${name}`, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
              lineNumber: 96,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "grid grid-cols-3 gap-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_7__.BadgeList, {
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.tags,
                action: _utils_types__WEBPACK_IMPORTED_MODULE_6__.ActionType.CREATE,
                setItem: setItem,
                item: currentItem
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "block py-2",
                children: "Add New Tag:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_9__.SearchItems, {
                queryName: isFeed ? _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findFeedTags : _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findBundleTags,
                query: isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_FEED_TAGS_QUERY : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_BUNDLE_TAGS_QUERY,
                setItem: setItem,
                currentItem: currentItem,
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.tags
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, undefined), isFeed ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "py-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  className: "black py-2",
                  children: "Feeds:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "grid grid-cols-3 gap-2",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_7__.BadgeList, {
                    fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.feeds,
                    action: _utils_types__WEBPACK_IMPORTED_MODULE_6__.ActionType.CREATE,
                    setItem: setItem,
                    item: currentItem
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "py-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  className: "black py-2",
                  children: "Add New Feed:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_9__.SearchItems, {
                  queryName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findFeeds,
                  query: _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_FEEDS_QUERY,
                  setItem: setItem,
                  currentItem: currentItem,
                  fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.feeds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 19
              }, undefined)]
            }, void 0, true)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `py-4 ${isFeed ? null : 'pt-1'}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: `py-4 ${`bg-${isFeed ? 'green' : 'purple'}-400 `} hover:bg-${isFeed ? 'green' : 'purple'}-700 text-white font-bold px-12 rounded`,
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 63,
      columnNumber: 9
    }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_itemList__WEBPACK_IMPORTED_MODULE_2__.ItemList, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.BundleType,
      useSelected: true,
      allowEdits: true,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
        cleanedItem = _objectWithoutProperties(currentItem, ["__typename", "likes", "author", "bundles"]); //strip unwanted from currentItem and call it 'cleanedItem' 'CleanedItem' will be all of the fields that are leftover.


  return _objectSpread(_objectSpread(_objectSpread({}, cleanedItem), tags), feeds); //add all tag and feed info to cleanedItem.
};

const prepareNewUpdateObj = currentItem => {
  const currentData = genNestedItems(currentItem);
  return _objectSpread(_objectSpread({}, currentData), {}, {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)() // currentData (feed or tag) is returned WITHOUT an id number; thus one is provided.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2dlbmVyYXRlSW5wdXRGaWVsZC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9zZWFyY2hJdGVtcy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vcGFnZXMvYnVuZGxlcy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmoudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiR2VuZXJhdGVJbnB1dEZpZWxkIiwiY3VycmVudEl0ZW0iLCJuYW1lIiwiY2hhbmdlSGFuZGxlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJlIiwicGVyc2lzdCIsImN1cnIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk5ld0VkaXRJdGVtIiwidHlwZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJpc0ZlZWQiLCJJdGVtVHlwZSIsImluaXRpYWxGZWVkIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImZlZWRzIiwiaW5pdGlhbFN0YXRlIiwic2V0SXRlbSIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHMiLCJjcmVhdGVJdGVtTXV0YXRpb24iLCJsb2FkaW5nIiwiY3JlYXRlTG9hZGluZyIsImVycm9yIiwiY3JlYXRlRXJyb3IiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9GRUVEX01VVEFUSU9OIiwiQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInByZXBhcmVOZXdVcGRhdGVPYmoiLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwiY3VyclN0YXRlIiwiZWRpdE1vZGUiLCJuZXdNb2RlIiwibWFwIiwiQmFkZ2VGaWVsZE5hbWUiLCJBY3Rpb25UeXBlIiwiU2VhcmNoUXVlcnlOYW1lIiwiRklORF9GRUVEX1RBR1NfUVVFUlkiLCJGSU5EX0JVTkRMRV9UQUdTX1FVRVJZIiwiRklORF9GRUVEU19RVUVSWSIsIlNlYXJjaEl0ZW1zIiwicXVlcnlOYW1lIiwicXVlcnkiLCJmaWVsZE5hbWUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaW5kSXRlbVF1ZXJ5IiwiY2FsbGVkIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmZXRjaGVkSXRlbXMiLCJfIiwiZmlsdEZpbmRJdGVtcyIsImZpbHRlciIsIm9uZUl0ZW0iLCJvIiwiaW5jbHVkZXMiLCJtYXRjaEN1cnJlbnQiLCJtYXRjaExpc3QiLCJmaWx0RmluZEl0ZW1zV2l0aEFkZCIsImxlbmd0aCIsImR1bW15TmV3SXRlbSIsImtleSIsIkJ1bmRsZXNQYWdlIiwidXNlciIsInVzZUZldGNoVXNlciIsImluaXRpYWxTZWxlY3RlZCIsImlkIiwiTElLRV9CVU5ETEVfTVVUQVRJT04iLCJncWwiLCJCVU5ETEVfRlJBR01FTlQiLCJGRUVEX0ZSQUdNRU5UIiwiTElLRV9GRUVEX01VVEFUSU9OIiwiVVBEQVRFX0JVTkRMRV9NVVRBVElPTiIsIlVQREFURV9GRUVEX01VVEFUSU9OIiwiQ1JFQVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04iLCJTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UIiwiREVMRVRFX0JVTkRMRV9NVVRBVElPTiIsIkRFTEVURV9GRUVEX01VVEFUSU9OIiwiREVMRVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04iLCJnZW5OZXN0ZWRJdGVtcyIsImNvbm5lY3QiLCJ1bmRlZmluZWQiLCJjcmVhdGUiLCJ1dWlkdjQiLCJfX3R5cGVuYW1lIiwibGlrZXMiLCJhdXRob3IiLCJidW5kbGVzIiwiY2xlYW5lZEl0ZW0iLCJjdXJyZW50RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLE1BQU1BLGtCQUFrQixHQUFHLENBQUM7QUFDL0JDLGFBRCtCO0FBRS9CQyxNQUYrQjtBQUcvQkM7QUFIK0IsQ0FBRCxrQkFVOUI7QUFBSyxXQUFTLEVBQUMsTUFBZjtBQUFBLDBCQUNJO0FBQU8sYUFBUyxFQUFDLFlBQWpCO0FBQUEsY0FDS0QsSUFBSSxDQUFDRSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEtBQStCSCxJQUFJLENBQUNJLEtBQUwsQ0FBVyxDQUFYO0FBRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQ0ksYUFBUyxFQUFDLG1DQURkO0FBRUksU0FBSyxFQUFFTCxXQUFXLENBQUNDLElBQUQsQ0FGdEI7QUFHSSxZQUFRLEVBQUdLLENBQUQsSUFBTztBQUNiQSxPQUFDLENBQUNDLE9BQUY7QUFDQUwsbUJBQWEsQ0FBRU0sSUFBRCxvQ0FBZ0JBLElBQWhCO0FBQXNCLFNBQUNQLElBQUQsR0FBUUssQ0FBQyxDQUFDRyxNQUFGLENBQVNDO0FBQXZDLFFBQUQsQ0FBYjtBQUNIO0FBTkw7QUFBQTtBQUFB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LE1BRk0sQ0FFQyxDQUFDO0FBQUVjO0FBQUYsT0FBRCxLQUFZQSxFQUFFLEtBQUtlLFNBRnBCO0FBREo7QUFEVCxHQURKLEdBUUksRUFUSjs7QUFXRSxRQUFNO0FBQUVHLGNBQUY7QUFBY0MsU0FBZDtBQUFxQkMsVUFBckI7QUFBNkJDO0FBQTdCLE1BQXlEbkcsV0FBL0Q7QUFBQSxRQUErQ29HLFdBQS9DLDRCQUErRHBHLFdBQS9ELGdEQXhCaUMsQ0F3QjRDOzs7QUFFN0UsdURBQVlvRyxXQUFaLEdBQTRCakYsSUFBNUIsR0FBcUNHLEtBQXJDLEVBMUJpQyxDQTBCYztBQUdyRCxDQTdCRDs7QUFnQ08sTUFBTWUsbUJBQW1CLEdBQUlyQyxXQUFELElBQWlCO0FBQ2pELFFBQU1xRyxXQUFXLEdBQUlWLGNBQWMsQ0FBQzNGLFdBQUQsQ0FBbkM7QUFFQSx5Q0FBWXFHLFdBQVo7QUFBMEJ2QixNQUFFLEVBQUVpQix3Q0FBTSxFQUFwQyxDQUF1Qzs7QUFBdkM7QUFFRixDQUxNLEM7Ozs7Ozs7Ozs7O0FDbkNQLDRDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2J1bmRsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEdlbmVyYXRlSW5wdXRGaWVsZCA9ICh7XHJcbiAgICBjdXJyZW50SXRlbSxcclxuICAgIG5hbWUsXHJcbiAgICBjaGFuZ2VIYW5kbGVyXHJcblxyXG59IDoge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgY3VycmVudEl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3RcclxuICAgIGNoYW5nZUhhbmRsZXI6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PlxyXG59KSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBweS0yJz5cclxuICAgICAgICAgICAge25hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpfVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci00IHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtM1wiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50SXRlbVtuYW1lXX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZUhhbmRsZXIoKGN1cnIpID0+ICh7IC4uLmN1cnIsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4pOyIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDUkVBVEVfQlVORExFX01VVEFUSU9OLFxyXG4gIENSRUFURV9GRUVEX01VVEFUSU9OLFxyXG4gIFVQREFURV9CVU5ETEVfTVVUQVRJT04sXHJcbiAgVVBEQVRFX0ZFRURfTVVUQVRJT04sXHJcbn0gZnJvbSAnLi4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zJztcclxuaW1wb3J0IHtcclxuICBGSU5EX0JVTkRMRV9UQUdTX1FVRVJZLFxyXG4gIEZJTkRfRkVFRFNfUVVFUlksXHJcbiAgRklORF9GRUVEX1RBR1NfUVVFUlksXHJcbn0gZnJvbSAnLi4vdXRpbHMvYXBpL2dyYXBocWwvcXVlcmllcyc7XHJcbmltcG9ydCB7IHByZXBhcmVOZXdVcGRhdGVPYmogfSBmcm9tICcuLi91dGlscy9wcmVwYXJlVXBkYXRlT2JqJztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEJhZGdlRmllbGROYW1lLFxyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG4gIEl0ZW1UeXBlLFxyXG4gIE5ld0l0ZW1TdGF0ZSxcclxuICBTZWFyY2hRdWVyeU5hbWUsXHJcbiAgU2VsZWN0ZWRGZWVkU3RhdGUsXHJcbn0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tICcuL2JhZGdlTGlzdCc7XHJcbmltcG9ydCB7IEdlbmVyYXRlSW5wdXRGaWVsZCB9IGZyb20gJy4vZ2VuZXJhdGVJbnB1dEZpZWxkJztcclxuaW1wb3J0IHsgU2VhcmNoSXRlbXMgfSBmcm9tICcuL3NlYXJjaEl0ZW1zJztcclxuaW1wb3J0IHsgRXJyb3JTaWduLCBXYWl0aW5nQ2xvY2sgfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3RWRpdEl0ZW0gPSAoe1xyXG4gIHR5cGUsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgc2V0U2VsZWN0ZWQsXHJcbn06IHtcclxuICB0eXBlOiBJdGVtVHlwZTtcclxuICBzZWxlY3RlZDogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgc2V0U2VsZWN0ZWQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj47XHJcbn0pID0+IHtcclxuICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZTtcclxuICBjb25zdCBpbml0aWFsRmVlZDogRmVlZE9iamVjdCA9IHsgbmFtZTogJycsIHVybDogJycsIHRhZ3M6IFtdIH07XHJcbiAgY29uc3QgaW5pdGlhbEJ1bmRsZTogQnVuZGxlT2JqZWN0ID0ge1xyXG4gICAgbmFtZTogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIGZlZWRzOiBbXSxcclxuICB9O1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZTogTmV3SXRlbVN0YXRlID0gaXNGZWVkID8gaW5pdGlhbEZlZWQgOiBpbml0aWFsQnVuZGxlO1xyXG4gIGNvbnN0IFtjdXJyZW50SXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZTxOZXdJdGVtU3RhdGU+KGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgaW5wdXRGaWVsZHMgPSBpc0ZlZWQgPyBbJ25hbWUnLCAndXJsJ10gOiBbJ25hbWUnLCAnZGVzY3JpcHRpb24nXTtcclxuXHJcbiAgY29uc3QgW2NyZWF0ZUl0ZW1NdXRhdGlvbiwgeyBsb2FkaW5nOiBjcmVhdGVMb2FkaW5nLCBlcnJvcjogY3JlYXRlRXJyb3IgfV0gPVxyXG4gICAgdXNlTXV0YXRpb24oaXNGZWVkID8gQ1JFQVRFX0ZFRURfTVVUQVRJT04gOiBDUkVBVEVfQlVORExFX01VVEFUSU9OKTtcclxuXHJcbiAgaWYgKGNyZWF0ZUxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8V2FpdGluZ0Nsb2NrIGNsYXNzTmFtZT0nbXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvJyAvPjtcclxuICB9XHJcbiAgaWYgKGNyZWF0ZUVycm9yKSB7XHJcbiAgICByZXR1cm4gPEVycm9yU2lnbiBjbGFzc05hbWU9J215LTIwIGgtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0bycgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBwcmVwYXJlTmV3VXBkYXRlT2JqKGN1cnJlbnRJdGVtKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgY3JlYXRlSXRlbU11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGEgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0SXRlbShpbml0aWFsU3RhdGUpO1xyXG4gICAgICAgICAgc2V0U2VsZWN0ZWQoKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5ld01vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgcm91bmRlZC1tZCBib3JkZXItNCBteS00IHB5LTIgcHgtNCc+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdjb2wtc3Bhbi0xMiB0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTInPlxyXG4gICAgICAgICAgICB7aXNGZWVkID8gJ05ldyBGZWVkJyA6ICdOZXcgQnVuZGxlJ31cclxuICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTYnPlxyXG4gICAgICAgICAgICB7aW5wdXRGaWVsZHMubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdlbmVyYXRlSW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHt0eXBlfS0ke25hbWV9YH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VIYW5kbGVyPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibGFjayBweS0yJz5UYWdzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTInPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5DUkVBVEV9XHJcbiAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBweS0yJz5BZGQgTmV3IFRhZzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFNlYXJjaFF1ZXJ5TmFtZS5maW5kRmVlZFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgIDogU2VhcmNoUXVlcnlOYW1lLmZpbmRCdW5kbGVUYWdzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcXVlcnk9e2lzRmVlZCA/IEZJTkRfRkVFRF9UQUdTX1FVRVJZIDogRklORF9CVU5ETEVfVEFHU19RVUVSWX1cclxuICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtpc0ZlZWQgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2JsYWNrIHB5LTInPkZlZWRzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLmZlZWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQ1JFQVRFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxhY2sgcHktMic+QWRkIE5ldyBGZWVkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWU9e1NlYXJjaFF1ZXJ5TmFtZS5maW5kRmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17RklORF9GRUVEU19RVUVSWX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLmZlZWRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHktNCAke2lzRmVlZCA/IG51bGwgOiAncHQtMSd9YH0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTQgJHtgYmctJHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgIH0tNDAwIGB9IGhvdmVyOmJnLSR7XHJcbiAgICAgICAgICAgICAgICBpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSdcclxuICAgICAgICAgICAgICB9LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweC0xMiByb3VuZGVkYH1cclxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEJhZGdlRmllbGROYW1lLFxyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG4gIFNlYXJjaFF1ZXJ5TmFtZSxcclxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gJy4vYmFkZ2VMaXN0JztcclxuLy8gaW1wb3J0IHsgU2VhcmNoLCBTcGluIH0gZnJvbSAnLi9zdmcnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSXRlbXMgPSAoe1xyXG4gIGN1cnJlbnRJdGVtLFxyXG4gIHNldEl0ZW0sXHJcbiAgcXVlcnlOYW1lLFxyXG4gIHF1ZXJ5LFxyXG4gIGZpZWxkTmFtZSxcclxufToge1xyXG4gIGN1cnJlbnRJdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG4gIHNldEl0ZW06IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxuICBxdWVyeU5hbWU6IFNlYXJjaFF1ZXJ5TmFtZTtcclxuICBxdWVyeTogRG9jdW1lbnROb2RlO1xyXG4gIGZpZWxkTmFtZTogQmFkZ2VGaWVsZE5hbWU7XHJcbn0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaW5kSXRlbVF1ZXJ5LCB7IGxvYWRpbmcsIGRhdGEsIGNhbGxlZCB9XSA9IHVzZUxhenlRdWVyeShxdWVyeSwge1xyXG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGxvYWRpbmcsIGRhdGEsIGNhbGxlZCk7XHJcblxyXG4gIGNvbnN0IGZldGNoZWRJdGVtcyA9IF8uZ2V0KGRhdGEsIHF1ZXJ5TmFtZSk7XHJcbiAgY29uc3QgZmlsdEZpbmRJdGVtcyA9IGZldGNoZWRJdGVtc1xyXG4gICAgPyBmZXRjaGVkSXRlbXMuZmlsdGVyKFxyXG4gICAgICAgIChvbmVJdGVtKSA9PlxyXG4gICAgICAgICAgIWN1cnJlbnRJdGVtW2ZpZWxkTmFtZV0ubWFwKChvKSA9PiBvLm5hbWUpLmluY2x1ZGVzKG9uZUl0ZW0ubmFtZSlcclxuICAgICAgKVxyXG4gICAgOiBbXTtcclxuXHJcbiAgY29uc3QgbWF0Y2hDdXJyZW50ID0gZmlsdEZpbmRJdGVtcy5maWx0ZXIoKG8pID0+IG8ubmFtZSA9PT0gc2VhcmNoKTtcclxuICBjb25zdCBtYXRjaExpc3QgPSBjdXJyZW50SXRlbVtmaWVsZE5hbWVdLmZpbHRlcigobykgPT4gby5uYW1lID09PSBzZWFyY2gpO1xyXG4gIGNvbnN0IGZpbHRGaW5kSXRlbXNXaXRoQWRkID1cclxuICAgIG1hdGNoQ3VycmVudC5sZW5ndGggPT09IDAgJiZcclxuICAgIG1hdGNoTGlzdC5sZW5ndGggPT09IDAgJiZcclxuICAgIHF1ZXJ5TmFtZSAhPT0gJ2ZpbmRGZWVkcydcclxuICAgICAgPyBbLi4uZmlsdEZpbmRJdGVtcywgeyBuYW1lOiBzZWFyY2ggfV1cclxuICAgICAgOiBmaWx0RmluZEl0ZW1zO1xyXG5cclxuICBjb25zb2xlLmxvZyhmZXRjaGVkSXRlbXMpO1xyXG4gIGNvbnNvbGUubG9nKGZpbHRGaW5kSXRlbXMpO1xyXG5cclxuICBjb25zdCBkdW1teU5ld0l0ZW0gPSB7XHJcbiAgICAuLi5jdXJyZW50SXRlbSxcclxuICAgIFtmaWVsZE5hbWVdOiBmaWx0RmluZEl0ZW1zV2l0aEFkZCxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2gtNiB3LTYgdGV4dC1ncmF5LTUwMCBhbmltYXRlLXNwaW4nXHJcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgZD0nTTQgNHY1aC41ODJtMTUuMzU2IDJBOC4wMDEgOC4wMDEgMCAwMDQuNTgyIDltMCAwSDltMTEgMTF2LTVoLS41ODFtMCAwYTguMDAzIDguMDAzIDAgMDEtMTUuMzU3LTJtMTUuMzU3IDJIMTUnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J210LTMgbXItMiB3LTYgaC02IHRleHQtZ3JheS01MDAnXHJcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgZD0nTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAweidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci00IHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMydcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRJdGVtKChjdXJyU3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogW1xyXG4gICAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGVbZmllbGROYW1lXSxcclxuICAgICAgICAgICAgICAgICAgeyAuLi5kdW1teU5ld0l0ZW1bZmllbGROYW1lXVswXSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoKCgpID0+ICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBzZWFyY2gpIHtcclxuICAgICAgICAgICAgICBzZXRTZWFyY2goKCkgPT4gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGZpbmRJdGVtUXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGE6IHsgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSB9IH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBmbGV4IG0tMic+XHJcbiAgICAgICAgICB7c2VhcmNoICE9PSAnJyA/IChcclxuICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgIGZpZWxkTmFtZT17ZmllbGROYW1lfVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5BRER9XHJcbiAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICBpdGVtPXtkdW1teU5ld0l0ZW19XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogY2FsbGVkID8gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPk5vIG1hdGNoZXM8L3A+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC0yIGZsZXggbS0yJz5cclxuICAgICAgICB7c2VhcmNoICE9PSAnJyA/IChcclxuICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgZmllbGROYW1lPXtmaWVsZE5hbWV9XHJcbiAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5BRER9XHJcbiAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgIGl0ZW09e2R1bW15TmV3SXRlbX1cclxuICAgICAgICAgICAgc2V0U2VhcmNoPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiBjYWxsZWQgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPk5vIE1hdGNoZXM8L3A+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEl0ZW1MaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9pdGVtTGlzdCc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHsgSXRlbVR5cGUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XHJcbmltcG9ydCB7IE1pbnVzLCBQbHVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdmcnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFVzZXIgfSBmcm9tICcuLi91dGlscy91c2VyJztcclxuaW1wb3J0IHsgTmV3RWRpdEl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL25ld0VkaXRJdGVtJztcclxuXHJcbmNvbnN0IEJ1bmRsZXNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlRmV0Y2hVc2VyKCk7XHJcbiAgY29uc3QgaW5pdGlhbFNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZSA9IHtcclxuICAgIGlkOiBudWxsLFxyXG4gICAgZmVlZHM6IFtdLFxyXG4gICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShpbml0aWFsU2VsZWN0ZWQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTInPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9J2dyaWQtY29scy0xIGp1c3RpZnktc3RhcnQgZmxleCB0ZXh0LWxyIGZvbnQtbWVkaXVtIHB5LTQnPlxyXG4gICAgICAgICAgQnVuZGxlcyBQYWdlXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbmV3TW9kZTogIWN1cnJTdGF0ZS5uZXdNb2RlLFxyXG4gICAgICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGdyaWQtY29scy0xIGp1c3RpZnktZW5kIGN1cnNvci1wb2ludGVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWQubmV3TW9kZSA/IChcclxuICAgICAgICAgICAgICA8TWludXNcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNiB3LTYgdGV4dC0ke1xyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZC5uZXdNb2RlID8gJ2dyYXknIDogJ2JsdWUnXHJcbiAgICAgICAgICAgICAgICB9LTUwMCBtdC00YH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxQbHVzXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTYgdy02IHRleHQtJHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/ICdncmF5JyA6ICdibHVlJ1xyXG4gICAgICAgICAgICAgICAgfS01MDAgbXQtNGB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZC1jb2xzLTEganVzdGlmeS1zdGFydCBmbGV4ICAgICAgICAgICAgICB0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTQgdGV4dC0ke1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/IGBncmF5YCA6IGBibHVlYFxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTmV3IEJ1bmRsZVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7KHNlbGVjdGVkLmVkaXRNb2RlIHx8IHNlbGVjdGVkLm5ld01vZGUpICYmIHVzZXIgPyAoXHJcbiAgICAgICAgPE5ld0VkaXRJdGVtXHJcbiAgICAgICAgICB0eXBlPXtJdGVtVHlwZS5CdW5kbGVUeXBlfVxyXG4gICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgPEl0ZW1MaXN0XHJcbiAgICAgICAgdHlwZT17SXRlbVR5cGUuQnVuZGxlVHlwZX1cclxuICAgICAgICB1c2VTZWxlY3RlZD17dHJ1ZX1cclxuICAgICAgICBhbGxvd0VkaXRzPXt0cnVlfVxyXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVuZGxlc1BhZ2U7XHJcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IEJVTkRMRV9GUkFHTUVOVCwgRkVFRF9GUkFHTUVOVCwgU0FWRURfQVJUSUNMRV9GUkFHTUVOVCB9IGZyb20gJy4vZnJhZ21lbnRzJztcblxuZXhwb3J0IGNvbnN0IExJS0VfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBsaWtlQnVuZGxlTXV0YXRpb24oJGRhdGE6IExpa2VCdW5kbGVJbnB1dCkge1xuICAgIGxpa2VCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IExJS0VfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gbGlrZUZlZWRNdXRhdGlvbigkZGF0YTogTGlrZUZlZWRJbnB1dCkge1xuICAgIGxpa2VGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBCdW5kbGVDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIGJ1bmRsZXMge1xuICAgICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5leHBvcnQgY29uc3QgVVBEQVRFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gdXBkYXRlQnVuZGxlTXV0YXRpb24oJGRhdGE6IEJ1bmRsZVVwZGF0ZUlucHV0KSB7XG4gICAgdXBkYXRlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgYnVuZGxlcyB7XG4gICAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIGZlZWRzIHtcbiAgICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRVcGRhdGVJbnB1dCkge1xuICAgIHVwZGF0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIGZlZWRzIHtcbiAgICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVTYXZlZEFydGljbGVNdXRhdGlvbigkZGF0YTogU2F2ZWRBcnRpY2xlQ3JlYXRlSW5wdXQpIHtcbiAgICBjcmVhdGVTYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVCdW5kbGVNdXRhdGlvbigkZGF0YTogQnVuZGxlSW5wdXQpIHtcbiAgICBkZWxldGVCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZElucHV0KSB7XG4gICAgZGVsZXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgaWRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlU2F2ZWRBcnRpY2xlTXV0YXRpb24oJGRhdGE6IERlbGV0ZVNhdmVkQXJ0aWNsZUlucHV0KSB7XG4gICAgZGVsZXRlU2F2ZWRBcnRpY2xlKGRhdGE6ICRkYXRhKSB7XG4gICAgICBpZFxuICAgICAgdXJsXG4gICAgfVxuICB9XG5gO1xuIiwiaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5cclxuXHJcbmNvbnN0IGdlbk5lc3RlZEl0ZW1zID0gKGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICBjb25zdCB0YWdzID0gXHJcbiAgICBcInRhZ3NcIiBpbiBjdXJyZW50SXRlbSA/IHtcclxuICAgICAgICB0YWdzOiB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Q6IGN1cnJlbnRJdGVtLnRhZ3MubWFwKCh7IGlkIH0pID0+KHsgaWQgfSkpLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gdW5kZWZpbmVkKSxcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZTogY3VycmVudEl0ZW0udGFnc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IGlkID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIC5tYXAoKG8pID0+ICh7IC4uLm8sIGlkOiB1dWlkdjQoKSB9KSksXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuICAgICA6IHt9O1xyXG5cclxuICAgICBjb25zdCBmZWVkcyA9XHJcbiAgICAgJ2ZlZWRzJyBpbiBjdXJyZW50SXRlbVxyXG4gICAgICAgPyB7XHJcbiAgICAgICAgICAgZmVlZHM6IHtcclxuICAgICAgICAgICAgIGNvbm5lY3Q6IGN1cnJlbnRJdGVtLmZlZWRzXHJcbiAgICAgICAgICAgICAgIC5tYXAoKHsgaWQgfSkgPT4gKHsgaWQgfSkpXHJcbiAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgIT09IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgfVxyXG4gICAgICAgOiB7fTtcclxuXHJcbiAgICAgICBjb25zdCB7IF9fdHlwZW5hbWUsIGxpa2VzLCBhdXRob3IsIGJ1bmRsZXMsIC4uLmNsZWFuZWRJdGVtIH0gPSBjdXJyZW50SXRlbTsgIC8vc3RyaXAgdW53YW50ZWQgZnJvbSBjdXJyZW50SXRlbSBhbmQgY2FsbCBpdCAnY2xlYW5lZEl0ZW0nICdDbGVhbmVkSXRlbScgd2lsbCBiZSBhbGwgb2YgdGhlIGZpZWxkcyB0aGF0IGFyZSBsZWZ0b3Zlci5cclxuXHJcbiAgICAgICByZXR1cm4geyAuLi5jbGVhbmVkSXRlbSwgLi4udGFncywgLi4uZmVlZHMgfTsgIC8vYWRkIGFsbCB0YWcgYW5kIGZlZWQgaW5mbyB0byBjbGVhbmVkSXRlbS5cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByZXBhcmVOZXdVcGRhdGVPYmogPSAoY3VycmVudEl0ZW0pID0+IHtcclxuICAgY29uc3QgY3VycmVudERhdGEgPSAgZ2VuTmVzdGVkSXRlbXMoY3VycmVudEl0ZW0pXHJcblxyXG4gICByZXR1cm4geyAuLi5jdXJyZW50RGF0YSwgIGlkOiB1dWlkdjQoKSAvLyBjdXJyZW50RGF0YSAoZmVlZCBvciB0YWcpIGlzIHJldHVybmVkIFdJVEhPVVQgYW4gaWQgbnVtYmVyOyB0aHVzIG9uZSBpcyBwcm92aWRlZC5cclxuICAgfSBcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9