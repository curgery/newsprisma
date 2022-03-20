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
      lineNumber: 53,
      columnNumber: 12
    }, undefined);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_10__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
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
          lineNumber: 78,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: inputFields.map(name => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_generateInputField__WEBPACK_IMPORTED_MODULE_8__.GenerateInputField, {
            currentItem: currentItem,
            name: name,
            changeHandler: setItem
          }, `${type}-${name}`, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
              lineNumber: 94,
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
                lineNumber: 96,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "block py-2",
                children: "Add New Tag:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_9__.SearchItems, {
                queryName: isFeed ? _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findFeedTags : _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findBundleTags,
                query: isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_FEED_TAGS_QUERY : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_BUNDLE_TAGS_QUERY,
                setItem: setItem,
                currentItem: currentItem,
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.tags
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined), isFeed ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "py-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  className: "black py-2",
                  children: "Feeds:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
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
                    lineNumber: 122,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "py-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  className: "black py-2",
                  children: "Add New Feed:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_9__.SearchItems, {
                  queryName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findFeeds,
                  query: _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_FEEDS_QUERY,
                  setItem: setItem,
                  currentItem: currentItem,
                  fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.feeds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 19
              }, undefined)]
            }, void 0, true)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `py-4 ${isFeed ? null : 'pt-1'}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: `py-4 ${`bg-${isFeed ? 'green' : 'purple'}-400 `} hover:bg-${isFeed ? 'green' : 'purple'}-700 text-white font-bold px-12 rounded`,
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
        className: "w-8 h-8",
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
        className: "w-8 h-8",
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2dlbmVyYXRlSW5wdXRGaWVsZC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9zZWFyY2hJdGVtcy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmoudHMiXSwibmFtZXMiOlsiR2VuZXJhdGVJbnB1dEZpZWxkIiwiY3VycmVudEl0ZW0iLCJuYW1lIiwiY2hhbmdlSGFuZGxlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJlIiwicGVyc2lzdCIsImN1cnIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk5ld0VkaXRJdGVtIiwidHlwZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJpc0ZlZWQiLCJJdGVtVHlwZSIsImluaXRpYWxGZWVkIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImZlZWRzIiwiaW5pdGlhbFN0YXRlIiwic2V0SXRlbSIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHMiLCJjcmVhdGVJdGVtTXV0YXRpb24iLCJsb2FkaW5nIiwiY3JlYXRlTG9hZGluZyIsImVycm9yIiwiY3JlYXRlRXJyb3IiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9GRUVEX01VVEFUSU9OIiwiQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInByZXBhcmVOZXdVcGRhdGVPYmoiLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwiY3VyclN0YXRlIiwiZWRpdE1vZGUiLCJuZXdNb2RlIiwibWFwIiwiQmFkZ2VGaWVsZE5hbWUiLCJBY3Rpb25UeXBlIiwiU2VhcmNoUXVlcnlOYW1lIiwiRklORF9GRUVEX1RBR1NfUVVFUlkiLCJGSU5EX0JVTkRMRV9UQUdTX1FVRVJZIiwiRklORF9GRUVEU19RVUVSWSIsIlNlYXJjaEl0ZW1zIiwicXVlcnlOYW1lIiwicXVlcnkiLCJmaWVsZE5hbWUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaW5kSXRlbVF1ZXJ5IiwiY2FsbGVkIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmZXRjaGVkSXRlbXMiLCJfIiwiZmlsdEZpbmRJdGVtcyIsImZpbHRlciIsIm9uZUl0ZW0iLCJvIiwiaW5jbHVkZXMiLCJtYXRjaEN1cnJlbnQiLCJtYXRjaExpc3QiLCJmaWx0RmluZEl0ZW1zV2l0aEFkZCIsImxlbmd0aCIsImR1bW15TmV3SXRlbSIsImtleSIsIkxJS0VfQlVORExFX01VVEFUSU9OIiwiZ3FsIiwiQlVORExFX0ZSQUdNRU5UIiwiRkVFRF9GUkFHTUVOVCIsIkxJS0VfRkVFRF9NVVRBVElPTiIsIlVQREFURV9CVU5ETEVfTVVUQVRJT04iLCJVUERBVEVfRkVFRF9NVVRBVElPTiIsIkNSRUFURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OIiwiU0FWRURfQVJUSUNMRV9GUkFHTUVOVCIsIkRFTEVURV9CVU5ETEVfTVVUQVRJT04iLCJERUxFVEVfRkVFRF9NVVRBVElPTiIsIkRFTEVURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OIiwiZ2VuTmVzdGVkSXRlbXMiLCJjb25uZWN0IiwiaWQiLCJ1bmRlZmluZWQiLCJjcmVhdGUiLCJ1dWlkdjQiLCJfX3R5cGVuYW1lIiwibGlrZXMiLCJhdXRob3IiLCJidW5kbGVzIiwiY2xlYW5lZEl0ZW0iLCJjdXJyZW50RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTyxNQUFNQSxrQkFBa0IsR0FBRyxDQUFDO0FBQy9CQyxhQUQrQjtBQUUvQkMsTUFGK0I7QUFHL0JDO0FBSCtCLENBQUQsa0JBVTlCO0FBQUssV0FBUyxFQUFDLE1BQWY7QUFBQSwwQkFDSTtBQUFPLGFBQVMsRUFBQyxZ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QUFHckQsQ0E3QkQ7O0FBZ0NPLE1BQU1lLG1CQUFtQixHQUFJckMsV0FBRCxJQUFpQjtBQUNqRCxRQUFNaUcsV0FBVyxHQUFJWCxjQUFjLENBQUN0RixXQUFELENBQW5DO0FBRUEseUNBQVlpRyxXQUFaO0FBQTBCVCxNQUFFLEVBQUVHLHdDQUFNLEVBQXBDLENBQXVDOztBQUF2QztBQUVGLENBTE0sQyIsImZpbGUiOiJjb21wb25lbnRzX25ld0VkaXRJdGVtX3RzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiXHJcblxyXG5leHBvcnQgY29uc3QgR2VuZXJhdGVJbnB1dEZpZWxkID0gKHtcclxuICAgIGN1cnJlbnRJdGVtLFxyXG4gICAgbmFtZSxcclxuICAgIGNoYW5nZUhhbmRsZXJcclxuXHJcbn0gOiB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBjdXJyZW50SXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdFxyXG4gICAgY2hhbmdlSGFuZGxlcjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdD4+XHJcbn0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPlxyXG4gICAgICAgICAgICB7bmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSl9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTQgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zXCJcclxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRJdGVtW25hbWVdfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlSGFuZGxlcigoY3VycikgPT4gKHsgLi4uY3VyciwgW25hbWVdOiBlLnRhcmdldC52YWx1ZX0pKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbik7IiwiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENSRUFURV9CVU5ETEVfTVVUQVRJT04sXHJcbiAgQ1JFQVRFX0ZFRURfTVVUQVRJT04sXHJcbn0gZnJvbSAnLi4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zJztcclxuaW1wb3J0IHtcclxuICBGSU5EX0JVTkRMRV9UQUdTX1FVRVJZLFxyXG4gIEZJTkRfRkVFRFNfUVVFUlksXHJcbiAgRklORF9GRUVEX1RBR1NfUVVFUlksXHJcbn0gZnJvbSAnLi4vdXRpbHMvYXBpL2dyYXBocWwvcXVlcmllcyc7XHJcbmltcG9ydCB7IHByZXBhcmVOZXdVcGRhdGVPYmogfSBmcm9tICcuLi91dGlscy9wcmVwYXJlVXBkYXRlT2JqJztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEJhZGdlRmllbGROYW1lLFxyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG4gIEl0ZW1UeXBlLFxyXG4gIE5ld0l0ZW1TdGF0ZSxcclxuICBTZWFyY2hRdWVyeU5hbWUsXHJcbiAgU2VsZWN0ZWRGZWVkU3RhdGUsXHJcbn0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tICcuL2JhZGdlTGlzdCc7XHJcbmltcG9ydCB7IEdlbmVyYXRlSW5wdXRGaWVsZCB9IGZyb20gJy4vZ2VuZXJhdGVJbnB1dEZpZWxkJztcclxuaW1wb3J0IHsgU2VhcmNoSXRlbXMgfSBmcm9tICcuL3NlYXJjaEl0ZW1zJztcclxuaW1wb3J0IHsgRXJyb3JTaWduLCBXYWl0aW5nQ2xvY2sgfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3RWRpdEl0ZW0gPSAoe1xyXG4gIHR5cGUsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgc2V0U2VsZWN0ZWQsXHJcbn06IHtcclxuICB0eXBlOiBJdGVtVHlwZTtcclxuICBzZWxlY3RlZDogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgc2V0U2VsZWN0ZWQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj47XHJcbn0pID0+IHtcclxuICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZTtcclxuICBjb25zdCBpbml0aWFsRmVlZDogRmVlZE9iamVjdCA9IHsgbmFtZTogJycsIHVybDogJycsIHRhZ3M6IFtdIH07XHJcbiAgY29uc3QgaW5pdGlhbEJ1bmRsZTogQnVuZGxlT2JqZWN0ID0ge1xyXG4gICAgbmFtZTogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIGZlZWRzOiBbXSxcclxuICB9O1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZTogTmV3SXRlbVN0YXRlID0gaXNGZWVkID8gaW5pdGlhbEZlZWQgOiBpbml0aWFsQnVuZGxlO1xyXG4gIGNvbnN0IFtjdXJyZW50SXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZTxOZXdJdGVtU3RhdGU+KGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgaW5wdXRGaWVsZHMgPSBpc0ZlZWQgPyBbJ25hbWUnLCAndXJsJ10gOiBbJ25hbWUnLCAnZGVzY3JpcHRpb24nXTtcclxuXHJcbiAgY29uc3QgW2NyZWF0ZUl0ZW1NdXRhdGlvbiwgeyBsb2FkaW5nOiBjcmVhdGVMb2FkaW5nLCBlcnJvcjogY3JlYXRlRXJyb3IgfV0gPVxyXG4gICAgdXNlTXV0YXRpb24oaXNGZWVkID8gQ1JFQVRFX0ZFRURfTVVUQVRJT04gOiBDUkVBVEVfQlVORExFX01VVEFUSU9OKTtcclxuXHJcbiAgaWYgKGNyZWF0ZUxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8V2FpdGluZ0Nsb2NrIGNsYXNzTmFtZT0nbXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvJyAvPjtcclxuICB9XHJcbiAgaWYgKGNyZWF0ZUVycm9yKSB7XHJcbiAgICByZXR1cm4gPEVycm9yU2lnbiBjbGFzc05hbWU9J215LTIwIGgtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0bycgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBwcmVwYXJlTmV3VXBkYXRlT2JqKGN1cnJlbnRJdGVtKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgY3JlYXRlSXRlbU11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGEgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0SXRlbShpbml0aWFsU3RhdGUpO1xyXG4gICAgICAgICAgc2V0U2VsZWN0ZWQoKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5ld01vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgcm91bmRlZC1tZCBib3JkZXItNCBteS00IHB5LTIgcHgtNCc+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdjb2wtc3Bhbi0xMiB0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTInPlxyXG4gICAgICAgICAgICB7aXNGZWVkID8gJ05ldyBGZWVkJyA6ICdOZXcgQnVuZGxlJ31cclxuICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTYnPlxyXG4gICAgICAgICAgICB7aW5wdXRGaWVsZHMubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdlbmVyYXRlSW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHt0eXBlfS0ke25hbWV9YH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VIYW5kbGVyPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibGFjayBweS0yJz5UYWdzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTInPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5DUkVBVEV9XHJcbiAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBweS0yJz5BZGQgTmV3IFRhZzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFNlYXJjaFF1ZXJ5TmFtZS5maW5kRmVlZFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgIDogU2VhcmNoUXVlcnlOYW1lLmZpbmRCdW5kbGVUYWdzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcXVlcnk9e2lzRmVlZCA/IEZJTkRfRkVFRF9UQUdTX1FVRVJZIDogRklORF9CVU5ETEVfVEFHU19RVUVSWX1cclxuICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtpc0ZlZWQgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2JsYWNrIHB5LTInPkZlZWRzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLmZlZWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQ1JFQVRFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxhY2sgcHktMic+QWRkIE5ldyBGZWVkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWU9e1NlYXJjaFF1ZXJ5TmFtZS5maW5kRmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17RklORF9GRUVEU19RVUVSWX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLmZlZWRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHktNCAke2lzRmVlZCA/IG51bGwgOiAncHQtMSd9YH0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTQgJHtgYmctJHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgIH0tNDAwIGB9IGhvdmVyOmJnLSR7XHJcbiAgICAgICAgICAgICAgICBpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSdcclxuICAgICAgICAgICAgICB9LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweC0xMiByb3VuZGVkYH1cclxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEJhZGdlRmllbGROYW1lLFxyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG4gIFNlYXJjaFF1ZXJ5TmFtZSxcclxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gJy4vYmFkZ2VMaXN0JztcclxuaW1wb3J0IHsgU2VhcmNoLCBTcGluIH0gZnJvbSAnLi9zdmcnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSXRlbXMgPSAoe1xyXG4gIGN1cnJlbnRJdGVtLFxyXG4gIHNldEl0ZW0sXHJcbiAgcXVlcnlOYW1lLFxyXG4gIHF1ZXJ5LFxyXG4gIGZpZWxkTmFtZSxcclxufToge1xyXG4gIGN1cnJlbnRJdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG4gIHNldEl0ZW06IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxuICBxdWVyeU5hbWU6IFNlYXJjaFF1ZXJ5TmFtZTtcclxuICBxdWVyeTogRG9jdW1lbnROb2RlO1xyXG4gIGZpZWxkTmFtZTogQmFkZ2VGaWVsZE5hbWU7XHJcbn0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaW5kSXRlbVF1ZXJ5LCB7IGxvYWRpbmcsIGRhdGEsIGNhbGxlZCB9XSA9IHVzZUxhenlRdWVyeShxdWVyeSwge1xyXG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGxvYWRpbmcsIGRhdGEsIGNhbGxlZCk7XHJcblxyXG4gIGNvbnN0IGZldGNoZWRJdGVtcyA9IF8uZ2V0KGRhdGEsIHF1ZXJ5TmFtZSk7XHJcbiAgY29uc3QgZmlsdEZpbmRJdGVtcyA9IGZldGNoZWRJdGVtc1xyXG4gICAgPyBmZXRjaGVkSXRlbXMuZmlsdGVyKFxyXG4gICAgICAgIChvbmVJdGVtKSA9PlxyXG4gICAgICAgICAgIWN1cnJlbnRJdGVtW2ZpZWxkTmFtZV0ubWFwKChvKSA9PiBvLm5hbWUpLmluY2x1ZGVzKG9uZUl0ZW0ubmFtZSlcclxuICAgICAgKVxyXG4gICAgOiBbXTtcclxuXHJcbiAgY29uc3QgbWF0Y2hDdXJyZW50ID0gZmlsdEZpbmRJdGVtcy5maWx0ZXIoKG8pID0+IG8ubmFtZSA9PT0gc2VhcmNoKTtcclxuICBjb25zdCBtYXRjaExpc3QgPSBjdXJyZW50SXRlbVtmaWVsZE5hbWVdLmZpbHRlcigobykgPT4gby5uYW1lID09PSBzZWFyY2gpO1xyXG4gIGNvbnN0IGZpbHRGaW5kSXRlbXNXaXRoQWRkID1cclxuICAgIG1hdGNoQ3VycmVudC5sZW5ndGggPT09IDAgJiZcclxuICAgIG1hdGNoTGlzdC5sZW5ndGggPT09IDAgJiZcclxuICAgIHF1ZXJ5TmFtZSAhPT0gJ2ZpbmRGZWVkcydcclxuICAgICAgPyBbLi4uZmlsdEZpbmRJdGVtcywgeyBuYW1lOiBzZWFyY2ggfV1cclxuICAgICAgOiBmaWx0RmluZEl0ZW1zO1xyXG5cclxuICBjb25zb2xlLmxvZyhmZXRjaGVkSXRlbXMpO1xyXG4gIGNvbnNvbGUubG9nKGZpbHRGaW5kSXRlbXMpO1xyXG5cclxuICBjb25zdCBkdW1teU5ld0l0ZW0gPSB7XHJcbiAgICAuLi5jdXJyZW50SXRlbSxcclxuICAgIFtmaWVsZE5hbWVdOiBmaWx0RmluZEl0ZW1zV2l0aEFkZCxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctOCBoLTgnXHJcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgZD0nTTQgNHY1aC41ODJtMTUuMzU2IDJBOC4wMDEgOC4wMDEgMCAwMDQuNTgyIDltMCAwSDltMTEgMTF2LTVoLS41ODFtMCAwYTguMDAzIDguMDAzIDAgMDEtMTUuMzU3LTJtMTUuMzU3IDJIMTUnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctOCBoLTgnXHJcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgZD0nTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAweidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci00IHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMydcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRJdGVtKChjdXJyU3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogW1xyXG4gICAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGVbZmllbGROYW1lXSxcclxuICAgICAgICAgICAgICAgICAgeyAuLi5kdW1teU5ld0l0ZW1bZmllbGROYW1lXVswXSB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoKCgpID0+ICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBzZWFyY2gpIHtcclxuICAgICAgICAgICAgICBzZXRTZWFyY2goKCkgPT4gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGZpbmRJdGVtUXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGE6IHsgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSB9IH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBmbGV4IG0tMic+XHJcbiAgICAgICAgICB7c2VhcmNoICE9PSAnJyA/IChcclxuICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgIGZpZWxkTmFtZT17ZmllbGROYW1lfVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5BRER9XHJcbiAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICBpdGVtPXtkdW1teU5ld0l0ZW19XHJcbiAgICAgICAgICAgICAgc2V0U2VhcmNoPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogY2FsbGVkID8gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPk5vIG1hdGNoZXM8L3A+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC0yIGZsZXggbS0yJz5cclxuICAgICAgICB7c2VhcmNoICE9PSAnJyA/IChcclxuICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgZmllbGROYW1lPXtmaWVsZE5hbWV9XHJcbiAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5BRER9XHJcbiAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgIGl0ZW09e2R1bW15TmV3SXRlbX1cclxuICAgICAgICAgICAgc2V0U2VhcmNoPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiBjYWxsZWQgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPk5vIE1hdGNoZXM8L3A+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgQlVORExFX0ZSQUdNRU5ULCBGRUVEX0ZSQUdNRU5ULCBTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UIH0gZnJvbSAnLi9mcmFnbWVudHMnO1xuXG5leHBvcnQgY29uc3QgTElLRV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGxpa2VCdW5kbGVNdXRhdGlvbigkZGF0YTogTGlrZUJ1bmRsZUlucHV0KSB7XG4gICAgbGlrZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuICAke0ZFRURfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgTElLRV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBsaWtlRmVlZE11dGF0aW9uKCRkYXRhOiBMaWtlRmVlZElucHV0KSB7XG4gICAgbGlrZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuICAke0ZFRURfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlQnVuZGxlTXV0YXRpb24oJGRhdGE6IEJ1bmRsZUNyZWF0ZUlucHV0KSB7XG4gICAgY3JlYXRlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgYnVuZGxlcyB7XG4gICAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcbmV4cG9ydCBjb25zdCBVUERBVEVfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVCdW5kbGVNdXRhdGlvbigkZGF0YTogQnVuZGxlVXBkYXRlSW5wdXQpIHtcbiAgICB1cGRhdGVCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICBidW5kbGVzIHtcbiAgICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZENyZWF0ZUlucHV0KSB7XG4gICAgY3JlYXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgZmVlZHMge1xuICAgICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZFVwZGF0ZUlucHV0KSB7XG4gICAgdXBkYXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgZmVlZHMge1xuICAgICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZVNhdmVkQXJ0aWNsZU11dGF0aW9uKCRkYXRhOiBTYXZlZEFydGljbGVDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZVNhdmVkQXJ0aWNsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uU2F2ZWRBcnRpY2xlRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBCdW5kbGVJbnB1dCkge1xuICAgIGRlbGV0ZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgaWRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlRmVlZE11dGF0aW9uKCRkYXRhOiBGZWVkSW5wdXQpIHtcbiAgICBkZWxldGVGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVTYXZlZEFydGljbGVNdXRhdGlvbigkZGF0YTogRGVsZXRlU2F2ZWRBcnRpY2xlSW5wdXQpIHtcbiAgICBkZWxldGVTYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIGlkXG4gICAgICB1cmxcbiAgICB9XG4gIH1cbmA7XG4iLCJpbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcblxyXG5cclxuY29uc3QgZ2VuTmVzdGVkSXRlbXMgPSAoY3VycmVudEl0ZW0pID0+IHtcclxuICAgIGNvbnN0IHRhZ3MgPSBcclxuICAgIFwidGFnc1wiIGluIGN1cnJlbnRJdGVtID8ge1xyXG4gICAgICAgIHRhZ3M6IHtcclxuICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0udGFncy5tYXAoKHsgaWQgfSkgPT4oeyBpZCB9KSkuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB1bmRlZmluZWQpLFxyXG5cclxuICAgICAgICAgICAgY3JlYXRlOiBjdXJyZW50SXRlbS50YWdzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgLm1hcCgobykgPT4gKHsgLi4ubywgaWQ6IHV1aWR2NCgpIH0pKSxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG4gICAgIDoge307XHJcblxyXG4gICAgIGNvbnN0IGZlZWRzID1cclxuICAgICAnZmVlZHMnIGluIGN1cnJlbnRJdGVtXHJcbiAgICAgICA/IHtcclxuICAgICAgICAgICBmZWVkczoge1xyXG4gICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0uZmVlZHNcclxuICAgICAgICAgICAgICAgLm1hcCgoeyBpZCB9KSA9PiAoeyBpZCB9KSlcclxuICAgICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICB9XHJcbiAgICAgICA6IHt9O1xyXG5cclxuICAgICAgIGNvbnN0IHsgX190eXBlbmFtZSwgbGlrZXMsIGF1dGhvciwgYnVuZGxlcywgLi4uY2xlYW5lZEl0ZW0gfSA9IGN1cnJlbnRJdGVtOyAgLy9zdHJpcCB1bndhbnRlZCBmcm9tIGN1cnJlbnRJdGVtIGFuZCBjYWxsIGl0ICdjbGVhbmVkSXRlbScgJ0NsZWFuZWRJdGVtJyB3aWxsIGJlIGFsbCBvZiB0aGUgZmllbGRzIHRoYXQgYXJlIGxlZnRvdmVyLlxyXG5cclxuICAgICAgIHJldHVybiB7IC4uLmNsZWFuZWRJdGVtLCAuLi50YWdzLCAuLi5mZWVkcyB9OyAgLy9hZGQgYWxsIHRhZyBhbmQgZmVlZCBpbmZvIHRvIGNsZWFuZWRJdGVtLlxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJlcGFyZU5ld1VwZGF0ZU9iaiA9IChjdXJyZW50SXRlbSkgPT4ge1xyXG4gICBjb25zdCBjdXJyZW50RGF0YSA9ICBnZW5OZXN0ZWRJdGVtcyhjdXJyZW50SXRlbSlcclxuXHJcbiAgIHJldHVybiB7IC4uLmN1cnJlbnREYXRhLCAgaWQ6IHV1aWR2NCgpIC8vIGN1cnJlbnREYXRhIChmZWVkIG9yIHRhZykgaXMgcmV0dXJuZWQgV0lUSE9VVCBhbiBpZCBudW1iZXI7IHRodXMgb25lIGlzIHByb3ZpZGVkLlxyXG4gICB9IFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==