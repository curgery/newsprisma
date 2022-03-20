exports.id = "components_itemList_tsx-components_layout_tsx-components_newEditItem_tsx";
exports.ids = ["components_itemList_tsx-components_layout_tsx-components_newEditItem_tsx"];
exports.modules = {

/***/ "./components/badgeList.tsx":
/*!**********************************!*\
  !*** ./components/badgeList.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeList": function() { return /* binding */ BadgeList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _oneBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oneBadge */ "./components/oneBadge.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\badgeList.tsx";

const BadgeList = ({
  fieldName,
  action,
  item,
  setItem,
  setSearch
}) => {
  return item[fieldName] && item[fieldName].length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: item[fieldName].map(oneBadge => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_oneBadge__WEBPACK_IMPORTED_MODULE_1__.OneBadge, {
      fieldName: fieldName,
      item: oneBadge,
      action: action,
      setItem: setItem,
      currentItem: item
    }, `${item['id']}-${oneBadge.name}}`, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined))
  }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: "text-gray-400",
    children: "None found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

/***/ }),

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

/***/ "./components/itemList.tsx":
/*!*********************************!*\
  !*** ./components/itemList.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemList": function() { return /* binding */ ItemList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _notifyLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyLoading */ "./components/notifyLoading.tsx");
/* harmony import */ var _notifyError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifyError */ "./components/notifyError.tsx");
/* harmony import */ var _oneListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oneListItem */ "./components/oneListItem.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\itemList.tsx";







const ItemList = ({
  type,
  selected,
  setSelected,
  useSelected = false,
  allowEdits
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_3__.ItemType.FeedType;
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.FEEDS_QUERY : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.BUNDLES_QUERY);
  console.log(loading, error, data);
  const {
    feeds,
    bundles
  } = data || {};
  const itemList = isFeed ? feeds : bundles;
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    (async () => {
      if (useSelected && itemList && itemList.length > 0 && selected.id === null) {
        const firstItem = itemList[0];
        await setSelected({
          id: firstItem.id,
          feeds: isFeed ? [firstItem] : firstItem['feeds'],
          editMode: false,
          newMode: false
        });
      }
    })();
  });

  if (loading) {
    /*#__PURE__*/
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_notifyLoading__WEBPACK_IMPORTED_MODULE_4__.NotifyLoading, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, undefined);
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_notifyError__WEBPACK_IMPORTED_MODULE_5__.NotifyError, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 14
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid lg:grid-cols-3 md:grid-cols-2 gap-4",
      children: itemList && itemList.length > 0 ? itemList.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_oneListItem__WEBPACK_IMPORTED_MODULE_6__.OneListItem, {
        type: type,
        item: item,
        useSelected: useSelected,
        allowEdits: allowEdits,
        selected: selected,
        setSelected: setSelected
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "None are present. Why not add one?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 14
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./components/nav.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\layout.tsx";

const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "p-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav__WEBPACK_IMPORTED_MODULE_1__.Nav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/nav.tsx":
/*!****************************!*\
  !*** ./components/nav.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nav": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/user */ "./utils/user.ts");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\nav.tsx";


const Nav = () => {
  const {
    user,
    loading
  } = (0,_utils_user__WEBPACK_IMPORTED_MODULE_2__.useFetchUser)();
  console.log(user, loading);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "flex grid grid-cols-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-1 flex justify-start",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inline-flex cursor-pointer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "sm:h-10 h-8 pr-1",
              src: "/logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "p-2 text-center block hover:blue-700 sm:visible invisible",
              children: "Newsprism"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 24
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 20
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 20
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 16
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 flex justify-end",
      children: [user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/saved-articles",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Saved Articles"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/bundles",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Bundles"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/feeds",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Feeds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined), user && !loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/api/logout",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/api/login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

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

/***/ "./components/notifyError.tsx":
/*!************************************!*\
  !*** ./components/notifyError.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyError": function() { return /* binding */ NotifyError; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\notifyError.tsx";

const NotifyError = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "h-screen flex",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_1__.ErrorSign, {
      className: "h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./components/notifyLoading.tsx":
/*!**************************************!*\
  !*** ./components/notifyLoading.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyLoading": function() { return /* binding */ NotifyLoading; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\notifyLoading.tsx";

const NotifyLoading = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "h-screen flex",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_1__.WaitingClock, {
      className: "h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./components/oneBadge.tsx":
/*!*********************************!*\
  !*** ./components/oneBadge.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneBadge": function() { return /* binding */ OneBadge; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\oneBadge.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OneBadge = ({
  item,
  action,
  currentItem,
  fieldName,
  setItem
}) => {
  const color = fieldName === _utils_types__WEBPACK_IMPORTED_MODULE_2__.BadgeFieldName.tags ? 'blue' : _utils_types__WEBPACK_IMPORTED_MODULE_2__.BadgeFieldName.feeds ? 'green' : 'purple';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "inline-block align-middle justify-between",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: `flex justify-center text-sm py-2 px-2 rounded-lg bg-${color}-200 `,
      children: [action === _utils_types__WEBPACK_IMPORTED_MODULE_2__.ActionType.ADD ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => {
          setItem(currState => _objectSpread(_objectSpread({}, currState), {}, {
            [fieldName]: [...currState[fieldName], _objectSpread({}, item)]
          }));
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_3__.Plus, {
          className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, undefined) : null, action === _utils_types__WEBPACK_IMPORTED_MODULE_2__.ActionType.CREATE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => {
          setItem(currState => _objectSpread(_objectSpread({}, currState), {}, {
            [fieldName]: currState[fieldName].filter(o => item.name !== o.name)
          }));
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_3__.Minus, {
          className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: `text-xs text-${color}-600 text-center`,
        children: [" ", item.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/oneListItem.tsx":
/*!************************************!*\
  !*** ./components/oneListItem.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneListItem": function() { return /* binding */ OneListItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _profilePic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profilePic */ "./components/profilePic.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\oneListItem.tsx";






const OneListItem = ({
  item,
  type,
  selected,
  setSelected,
  useSelected = false,
  allowEdits
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_3__.ItemType.FeedType;
  const isSelected = useSelected && selected && selected.id === item.id;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: `/${isFeed ? 'feed' : 'bundle'}/${item.id}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `
                    cursor-pointer grid grid-cols-6 p-4 rounded-lg
                    ${useSelected ? 'rounded-b-none' : 'border-b-4'} 
                    border-t-4 border-l-4 border-r-4
                    ${isSelected ? `border-${isFeed ? 'green' : 'purple'}-400` : 'border-gray-300'}
                `,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "font-bold",
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, undefined), !isFeed ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: item['description']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 32
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-2 flex justify-end",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex span-col-6 py-0 space-x-2",
          children: item.author ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profilePic__WEBPACK_IMPORTED_MODULE_5__.ProfilePic, {
            author: item.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 36
          }, undefined) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6 py-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grids grids-cols-2 gap-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_4__.BadgeList, {
              fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_3__.BadgeFieldName.tags,
              action: _utils_types__WEBPACK_IMPORTED_MODULE_3__.ActionType.NONE,
              item: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6 py-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: isFeed ? 'Bundles' : 'Feeds'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grid grid-cols-3 gap-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "child items..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined), useSelected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isSelected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          onClick: e => {
            e.preventDefault();
          },
          className: `flex rounded-lg rounded-t-none align-middle ${isSelected ? `bg-${isFeed ? 'green' : 'purple'}-400` : `bg-gray-300`} p-4 z-10 text-white cursor-pointer`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_6__.DoubleArrowDown, {
            className: "h-5 w-5 text-white-500 mr-2 mt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined), `Hide ${isFeed ? 'Feed' : 'Bundle'} Articles`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          onClick: e => {
            e.preventDefault();
            setSelected({
              id: item.id,
              feeds: isFeed ? [item] : item['feeds'],
              editMode: false,
              newMode: false
            });
          },
          className: `flex rounded-lg rounded-t-none align-middle ${isSelected ? `bg-${isFeed ? 'green' : 'purple'}-400` : `bg-gray-300`} p-4 z-10 text-white cursor-pointer`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_6__.DoubleArrowRight, {
            className: "h-5 w-5 text-white-500 mr-2 mt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, undefined), ` Show ${isFeed ? `Feed` : `Bundle`} Articles`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, undefined)
      }, void 0, false) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/profilePic.tsx":
/*!***********************************!*\
  !*** ./components/profilePic.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePic": function() { return /* binding */ ProfilePic; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\profilePic.tsx";

const ProfilePic = ({
  author
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [author.picture ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "rounded-full p-0.5 w-8 h-8 border-2 border-gray-300",
      src: author.picture,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_1__.Question, {
    className: "w-6 h-6 text-gray-500"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: author.nickname
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined)]
}, void 0, true);

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

/***/ "./components/svg.tsx":
/*!****************************!*\
  !*** ./components/svg.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingClock": function() { return /* binding */ WaitingClock; },
/* harmony export */   "ErrorSign": function() { return /* binding */ ErrorSign; },
/* harmony export */   "DoubleArrowDown": function() { return /* binding */ DoubleArrowDown; },
/* harmony export */   "DoubleArrowRight": function() { return /* binding */ DoubleArrowRight; },
/* harmony export */   "Plus": function() { return /* binding */ Plus; },
/* harmony export */   "Minus": function() { return /* binding */ Minus; },
/* harmony export */   "Question": function() { return /* binding */ Question; },
/* harmony export */   "Spin": function() { return /* binding */ Spin; },
/* harmony export */   "Search": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\svg.tsx";
const WaitingClock = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 5
}, undefined);
const ErrorSign = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 20,
  columnNumber: 5
}, undefined);
const DoubleArrowDown = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 13l-7 7-7-7m14-8l-7 7-7-7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 39,
  columnNumber: 5
}, undefined);
const DoubleArrowRight = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 5l7 7-7 7M5 5l7 7-7 7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 55,
  columnNumber: 5
}, undefined);
const Plus = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 4v16m8-8H4"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 71,
  columnNumber: 3
}, undefined);
const Minus = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 12H4"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 87,
  columnNumber: 3
}, undefined);
const Question = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 104,
  columnNumber: 3
}, undefined);
const Spin = ({
  className
}) => {
  /*#__PURE__*/
  (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: className,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 3
  }, undefined);
};
const Search = ({
  className
}) => {
  /*#__PURE__*/
  (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: className,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 3
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./utils/api/graphql/fragments.ts":
/*!****************************************!*\
  !*** ./utils/api/graphql/fragments.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FEED_TAG_FRAGMENT": function() { return /* binding */ FEED_TAG_FRAGMENT; },
/* harmony export */   "BUNDLE_TAG_FRAGMENT": function() { return /* binding */ BUNDLE_TAG_FRAGMENT; },
/* harmony export */   "AUTHOR_FRAGMENT": function() { return /* binding */ AUTHOR_FRAGMENT; },
/* harmony export */   "LIKE_FRAGMENT": function() { return /* binding */ LIKE_FRAGMENT; },
/* harmony export */   "FEED_FRAGMENT": function() { return /* binding */ FEED_FRAGMENT; },
/* harmony export */   "BUNDLE_FRAGMENT": function() { return /* binding */ BUNDLE_FRAGMENT; },
/* harmony export */   "SAVED_ARTICLE_FRAGMENT": function() { return /* binding */ SAVED_ARTICLE_FRAGMENT; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FEED_TAG_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment FeedTagFragment on FeedTag {
    id
    name
  }
`;
const BUNDLE_TAG_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment BundleTagFragment on BundleTag {
    id
    name
  }
`;
const AUTHOR_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment AuthorFragment on User {
    id
    auth0
    picture
    nickname
  }
`;
const LIKE_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment LikeFragment on Like {
    id
    name
  }
`;
const FEED_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment FeedFragment on Feed {
    id
    name
    url
    likes {
      ...AuthorFragment
    }
    tags {
      ...FeedTagFragment
    }
    author {
      ...AuthorFragment
    }
  }
  ${FEED_TAG_FRAGMENT}
  ${AUTHOR_FRAGMENT}
`;
const BUNDLE_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment BundleFragment on Bundle {
    id
    name
    description
    tags {
      ...BundleTagFragment
    }
    author {
      ...AuthorFragment
    }
    likes {
      ...AuthorFragment
    }
  }
  ${BUNDLE_TAG_FRAGMENT}
  ${AUTHOR_FRAGMENT}
`;
const SAVED_ARTICLE_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment SavedArticleFragment on SavedArticle {
    id
    contents
    url
    author {
      ...AuthorFragment
    }
    feed {
      ...FeedFragment
    }
  }
  ${AUTHOR_FRAGMENT}
  ${FEED_FRAGMENT}
`;

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

/***/ "./utils/api/graphql/queries.ts":
/*!**************************************!*\
  !*** ./utils/api/graphql/queries.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BUNDLES_QUERY": function() { return /* binding */ BUNDLES_QUERY; },
/* harmony export */   "FEEDS_QUERY": function() { return /* binding */ FEEDS_QUERY; },
/* harmony export */   "FIND_FEEDS_QUERY": function() { return /* binding */ FIND_FEEDS_QUERY; },
/* harmony export */   "FEED_QUERY": function() { return /* binding */ FEED_QUERY; },
/* harmony export */   "BUNDLE_QUERY": function() { return /* binding */ BUNDLE_QUERY; },
/* harmony export */   "FIND_FEED_TAGS_QUERY": function() { return /* binding */ FIND_FEED_TAGS_QUERY; },
/* harmony export */   "FIND_BUNDLE_TAGS_QUERY": function() { return /* binding */ FIND_BUNDLE_TAGS_QUERY; },
/* harmony export */   "SAVED_ARTICLES_QUERY": function() { return /* binding */ SAVED_ARTICLES_QUERY; },
/* harmony export */   "SAVED_ARTICLE_QUERY": function() { return /* binding */ SAVED_ARTICLE_QUERY; },
/* harmony export */   "ME_QUERY": function() { return /* binding */ ME_QUERY; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragments */ "./utils/api/graphql/fragments.ts");


const BUNDLES_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    bundles {
      ...BundleFragment
      feeds {
        ...FeedFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
`;
const FEEDS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    feeds {
      ...FeedFragment
      bundles {
        ...BundleFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const FIND_FEEDS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query findFeedsQuery($data: FindFeedsInput) {
    findFeeds(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const FEED_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query feedQuery($data: FeedInput) {
    feed(data: $data) {
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
const BUNDLE_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query bundleQuery($data: BundleInput) {
    bundle(data: $data) {
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
const FIND_FEED_TAGS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query findFeedTagsQuery($data: FindFeedTagsInput) {
    findFeedTags(data: $data) {
      ...FeedTagFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_TAG_FRAGMENT}
`;
const FIND_BUNDLE_TAGS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query findBundleTagsQuery($data: FindBundleTagsInput) {
    findBundleTags(data: $data) {
      ...BundleTagFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_TAG_FRAGMENT}
`;
const SAVED_ARTICLES_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query savedArticlesQuery {
    savedArticles {
      ...SavedArticleFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.SAVED_ARTICLE_FRAGMENT}
`;
const SAVED_ARTICLE_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query savedArticleQuery($data: SavedArticleInput) {
    savedArticle(data: $data) {
      ...SavedArticleFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.SAVED_ARTICLE_FRAGMENT}
`;
const ME_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query meQuery {
    me {
      ...AuthorFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.AUTHOR_FRAGMENT}
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

/***/ "./utils/types.ts":
/*!************************!*\
  !*** ./utils/types.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemType": function() { return /* binding */ ItemType; },
/* harmony export */   "BadgeFieldName": function() { return /* binding */ BadgeFieldName; },
/* harmony export */   "ActionType": function() { return /* binding */ ActionType; },
/* harmony export */   "SearchQueryName": function() { return /* binding */ SearchQueryName; }
/* harmony export */ });
let ItemType;

(function (ItemType) {
  ItemType["BundleType"] = "BundleType";
  ItemType["FeedType"] = "FeedType";
})(ItemType || (ItemType = {}));

let BadgeFieldName;

(function (BadgeFieldName) {
  BadgeFieldName["tags"] = "tags";
  BadgeFieldName["feeds"] = "feeds";
  BadgeFieldName["bundles"] = "bundles";
})(BadgeFieldName || (BadgeFieldName = {}));

let ActionType;

(function (ActionType) {
  ActionType["ADD"] = "ADD";
  ActionType["CREATE"] = "CREATE";
  ActionType["NONE"] = "NONE";
})(ActionType || (ActionType = {}));

let SearchQueryName;

(function (SearchQueryName) {
  SearchQueryName["findFeedTags"] = "findFeedTags";
  SearchQueryName["findBundleTags"] = "findBundleTags";
  SearchQueryName["findFeeds"] = "findFeeds";
})(SearchQueryName || (SearchQueryName = {}));

/***/ }),

/***/ "./utils/user.ts":
/*!***********************!*\
  !*** ./utils/user.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUser": function() { return /* binding */ fetchUser; },
/* harmony export */   "useFetchUser": function() { return /* binding */ useFetchUser; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

async function fetchUser(cookie = '') {
  if (false) {}

  const res = await fetch('/api/me', cookie ? {
    headers: {
      cookie
    }
  } : {});

  if (!res.ok) {
    delete window.__user;
    return null;
  }

  const json = await res.json();

  if (false) {}

  return json;
} // @ts-ignore

function useFetchUser({
  required
} = {}) {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => !( false && 0));
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    if (true) {
      return null;
    }

    return window.__user || null;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loading && user) {
      return;
    }

    setLoading(true);
    let isMounted = true;
    fetchUser().then(user => {
      // Only set the user if the component is still mounted
      if (isMounted) {
        // When the user is not logged in but login is required
        if (required && !user) {
          window.location.href = '/api/login';
          return;
        }

        setUser(user);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return {
    user,
    loading
  };
}

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2JhZGdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9nZW5lcmF0ZUlucHV0RmllbGQudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvaXRlbUxpc3QudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25hdi50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9ub3RpZnlFcnJvci50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9ub3RpZnlMb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL29uZUJhZGdlLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL29uZUxpc3RJdGVtLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL3Byb2ZpbGVQaWMudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvc2VhcmNoSXRlbXMudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvc3ZnLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvZ3JhcGhxbC9mcmFnbWVudHMudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL2FwaS9ncmFwaHFsL3F1ZXJpZXMudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvcHJlcGFyZVVwZGF0ZU9iai50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy90eXBlcy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy91c2VyLnRzIiwid2VicGFjazovL25ld3NwcmlzbS9pZ25vcmVkfEM6XFxVZGVteVN0dWZmXFxQcmlzbWFTdHVmZlxcbmV3c3ByaXNtYVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkJhZGdlTGlzdCIsImZpZWxkTmFtZSIsImFjdGlvbiIsIml0ZW0iLCJzZXRJdGVtIiwic2V0U2VhcmNoIiwibGVuZ3RoIiwibWFwIiwib25lQmFkZ2UiLCJuYW1lIiwiR2VuZXJhdGVJbnB1dEZpZWxkIiwiY3VycmVudEl0ZW0iLCJjaGFuZ2VIYW5kbGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImUiLCJwZXJzaXN0IiwiY3VyciIsInRhcmdldCIsInZhbHVlIiwiSXRlbUxpc3QiLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVNlbGVjdGVkIiwiYWxsb3dFZGl0cyIsImlzRmVlZCIsIkl0ZW1UeXBlIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwiRkVFRFNfUVVFUlkiLCJCVU5ETEVTX1FVRVJZIiwiY29uc29sZSIsImxvZyIsImZlZWRzIiwiYnVuZGxlcyIsIml0ZW1MaXN0IiwidXNlRWZmZWN0IiwiaWQiLCJmaXJzdEl0ZW0iLCJlZGl0TW9kZSIsIm5ld01vZGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIk5hdiIsInVzZXIiLCJ1c2VGZXRjaFVzZXIiLCJOZXdFZGl0SXRlbSIsImluaXRpYWxGZWVkIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImluaXRpYWxTdGF0ZSIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHMiLCJjcmVhdGVJdGVtTXV0YXRpb24iLCJjcmVhdGVMb2FkaW5nIiwiY3JlYXRlRXJyb3IiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9GRUVEX01VVEFUSU9OIiwiQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiIsInByZXZlbnREZWZhdWx0IiwicHJlcGFyZU5ld1VwZGF0ZU9iaiIsInZhcmlhYmxlcyIsImN1cnJTdGF0ZSIsIkJhZGdlRmllbGROYW1lIiwiQWN0aW9uVHlwZSIsIlNlYXJjaFF1ZXJ5TmFtZSIsIkZJTkRfRkVFRF9UQUdTX1FVRVJZIiwiRklORF9CVU5ETEVfVEFHU19RVUVSWSIsIkZJTkRfRkVFRFNfUVVFUlkiLCJOb3RpZnlFcnJvciIsIk5vdGlmeUxvYWRpbmciLCJPbmVCYWRnZSIsImNvbG9yIiwiZmlsdGVyIiwibyIsIk9uZUxpc3RJdGVtIiwiaXNTZWxlY3RlZCIsImF1dGhvciIsIlByb2ZpbGVQaWMiLCJwaWN0dXJlIiwibmlja25hbWUiLCJTZWFyY2hJdGVtcyIsInF1ZXJ5TmFtZSIsInF1ZXJ5Iiwic2VhcmNoIiwiZmluZEl0ZW1RdWVyeSIsImNhbGxlZCIsInVzZUxhenlRdWVyeSIsImZldGNoUG9saWN5IiwiZmV0Y2hlZEl0ZW1zIiwiXyIsImZpbHRGaW5kSXRlbXMiLCJvbmVJdGVtIiwiaW5jbHVkZXMiLCJtYXRjaEN1cnJlbnQiLCJtYXRjaExpc3QiLCJmaWx0RmluZEl0ZW1zV2l0aEFkZCIsImR1bW15TmV3SXRlbSIsImtleSIsIldhaXRpbmdDbG9jayIsImNsYXNzTmFtZSIsIkVycm9yU2lnbiIsIkRvdWJsZUFycm93RG93biIsIkRvdWJsZUFycm93UmlnaHQiLCJQbHVzIiwiTWludXMiLCJRdWVzdGlvbiIsIlNwaW4iLCJTZWFyY2giLCJGRUVEX1RBR19GUkFHTUVOVCIsImdxbCIsIkJVTkRMRV9UQUdfRlJBR01FTlQiLCJBVVRIT1JfRlJBR01FTlQiLCJMSUtFX0ZSQUdNRU5UIiwiRkVFRF9GUkFHTUVOVCIsIkJVTkRMRV9GUkFHTUVOVCIsIlNBVkVEX0FSVElDTEVfRlJBR01FTlQiLCJMSUtFX0JVTkRMRV9NVVRBVElPTiIsIkxJS0VfRkVFRF9NVVRBVElPTiIsIlVQREFURV9CVU5ETEVfTVVUQVRJT04iLCJVUERBVEVfRkVFRF9NVVRBVElPTiIsIkNSRUFURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OIiwiREVMRVRFX0JVTkRMRV9NVVRBVElPTiIsIkRFTEVURV9GRUVEX01VVEFUSU9OIiwiREVMRVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04iLCJGRUVEX1FVRVJZIiwiQlVORExFX1FVRVJZIiwiU0FWRURfQVJUSUNMRVNfUVVFUlkiLCJTQVZFRF9BUlRJQ0xFX1FVRVJZIiwiTUVfUVVFUlkiLCJnZW5OZXN0ZWRJdGVtcyIsImNvbm5lY3QiLCJ1bmRlZmluZWQiLCJjcmVhdGUiLCJ1dWlkdjQiLCJfX3R5cGVuYW1lIiwibGlrZXMiLCJjbGVhbmVkSXRlbSIsImN1cnJlbnREYXRhIiwiZmV0Y2hVc2VyIiwiY29va2llIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwib2siLCJ3aW5kb3ciLCJfX3VzZXIiLCJqc29uIiwicmVxdWlyZWQiLCJzZXRMb2FkaW5nIiwic2V0VXNlciIsImlzTW91bnRlZCIsInRoZW4iLCJsb2NhdGlvbiIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRU8sTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFDdEJDLFdBRHNCO0FBRXRCQyxRQUZzQjtBQUd0QkMsTUFIc0I7QUFJdEJDLFNBSnNCO0FBS3RCQztBQUxzQixDQUFELEtBYW5CO0FBQ0YsU0FBT0YsSUFBSSxDQUFDRixTQUFELENBQUosSUFBbUJFLElBQUksQ0FBQ0YsU0FBRCxDQUFKLENBQWdCSyxNQUFoQixHQUF5QixDQUE1QyxnQkFDSDtBQUFBLGNBQ0NILElBQUksQ0FBQ0YsU0FBRCxDQUFKLENBQWdCTSxHQUFoQixDQUFxQkMsUUFBRCxpQkFDakIsOERBQUMsK0NBQUQ7QUFFSSxlQUFTLEVBQUVQLFNBRmY7QUFHSSxVQUFJLEVBQUVPLFFBSFY7QUFJSSxZQUFNLEVBQUVOLE1BSlo7QUFLSSxhQUFPLEVBQUVFLE9BTGI7QUFNSSxpQkFBVyxFQUFFRDtBQU5qQixP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aXRJdGVtX3RzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBCYWRnZUZpZWxkTmFtZSwgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0IH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCI7XHJcbmltcG9ydCB7IE9uZUJhZGdlIH0gZnJvbSAnLi9vbmVCYWRnZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQmFkZ2VMaXN0ID0gKHtcclxuICAgIGZpZWxkTmFtZSxcclxuICAgIGFjdGlvbixcclxuICAgIGl0ZW0sXHJcbiAgICBzZXRJdGVtLFxyXG4gICAgc2V0U2VhcmNoLFxyXG59IDoge1xyXG4gICAgZmllbGROYW1lOiBCYWRnZUZpZWxkTmFtZTtcclxuICAgIGFjdGlvbjogQWN0aW9uVHlwZTtcclxuICAgIGl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7XHJcbiAgICBzZXRJdGVtPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdD4+O1xyXG4gICAgc2V0U2VhcmNoPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U3RyaW5nPj47XHJcblxyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gaXRlbVtmaWVsZE5hbWVdICYmIGl0ZW1bZmllbGROYW1lXS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge2l0ZW1bZmllbGROYW1lXS5tYXAoKG9uZUJhZGdlKSA9PiAoXHJcbiAgICAgICAgICAgIDxPbmVCYWRnZVxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtWydpZCddfS0ke29uZUJhZGdlLm5hbWV9fWB9XHJcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgICAgICAgIGl0ZW09e29uZUJhZGdlfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb259XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgKSA6IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+Tm9uZSBmb3VuZDwvcD5cclxuICAgICApO1xyXG4gICAgIFxyXG59OyIsImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiXHJcblxyXG5leHBvcnQgY29uc3QgR2VuZXJhdGVJbnB1dEZpZWxkID0gKHtcclxuICAgIGN1cnJlbnRJdGVtLFxyXG4gICAgbmFtZSxcclxuICAgIGNoYW5nZUhhbmRsZXJcclxuXHJcbn0gOiB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBjdXJyZW50SXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdFxyXG4gICAgY2hhbmdlSGFuZGxlcjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdD4+XHJcbn0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPlxyXG4gICAgICAgICAgICB7bmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSl9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTQgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zXCJcclxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRJdGVtW25hbWVdfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlSGFuZGxlcigoY3VycikgPT4gKHsgLi4uY3VyciwgW25hbWVdOiBlLnRhcmdldC52YWx1ZX0pKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbik7IiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgQlVORExFU19RVUVSWSwgRkVFRFNfUVVFUlkgfSBmcm9tIFwiLi4vdXRpbHMvYXBpL2dyYXBocWwvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QsIEl0ZW1UeXBlLCBTZWxlY3RlZEZlZWRTdGF0ZSB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiXHJcbmltcG9ydCB7IE5vdGlmeUxvYWRpbmcgfSBmcm9tICcuL25vdGlmeUxvYWRpbmcnO1xyXG5pbXBvcnQgeyBOb3RpZnlFcnJvciB9IGZyb20gXCIuL25vdGlmeUVycm9yXCI7XHJcbmltcG9ydCB7IE9uZUxpc3RJdGVtIH0gZnJvbSBcIi4vb25lTGlzdEl0ZW1cIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1MaXN0ID0gKHtcclxuICB0eXBlLFxyXG4gIHNlbGVjdGVkLFxyXG4gIHNldFNlbGVjdGVkLFxyXG4gIHVzZVNlbGVjdGVkID0gZmFsc2UsXHJcbiAgYWxsb3dFZGl0c1xyXG59IDoge1xyXG4gICAgXHJcbiAgICB0eXBlOiBJdGVtVHlwZTtcclxuICAgIHNlbGVjdGVkPyA6IFNlbGVjdGVkRmVlZFN0YXRlO1xyXG4gICAgc2V0U2VsZWN0ZWQ/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTZWxlY3RlZEZlZWRTdGF0ZT4+O1xyXG4gICAgdXNlU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgYWxsb3dFZGl0cz86IGJvb2xlYW47XHJcbiAgXHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGU7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShcclxuICAgICAgaXNGZWVkID8gRkVFRFNfUVVFUlkgOiBCVU5ETEVTX1FVRVJZLFxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGxvYWRpbmcsIGVycm9yLCBkYXRhKVxyXG4gICAgXHJcbiAgICBjb25zdCB7IGZlZWRzLCBidW5kbGVzIH0gPSBkYXRhIHx8IHt9O1xyXG4gICAgY29uc3QgaXRlbUxpc3QgPSBpc0ZlZWQgPyBmZWVkcyA6IGJ1bmRsZXM7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZih1c2VTZWxlY3RlZCAmJiBpdGVtTGlzdCAmJiBpdGVtTGlzdC5sZW5ndGggPiAwICYmIHNlbGVjdGVkLmlkID09PSBudWxsKXtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IGl0ZW1MaXN0WzBdXHJcbiAgICAgICAgICBhd2FpdCBzZXRTZWxlY3RlZCh7XHJcbiAgICAgICAgICAgIGlkOiBmaXJzdEl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGZlZWRzOiBpc0ZlZWQgPyBbZmlyc3RJdGVtXSA6IGZpcnN0SXRlbVsnZmVlZHMnXSxcclxuICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBuZXdNb2RlOiBmYWxzZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkgKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgIFxyXG4gICBcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgPE5vdGlmeUxvYWRpbmcgLz5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiA8Tm90aWZ5RXJyb3IgLz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTMgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICB7aXRlbUxpc3QgJiYgaXRlbUxpc3QubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIGl0ZW1MaXN0Lm1hcCgoaXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdCkgPT4gKFxyXG4gICAgICAgICAgPE9uZUxpc3RJdGVtXHJcbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgdXNlU2VsZWN0ZWQ9e3VzZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICBhbGxvd0VkaXRzPXthbGxvd0VkaXRzfVxyXG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cclxuXHJcbiAgICAgICAgICAvPikpXHJcbiAgICAgICAgKSA6ICg8cD5Ob25lIGFyZSBwcmVzZW50LiBXaHkgbm90IGFkZCBvbmU/PC9wPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgICAgIClcclxuICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAgeyBOYXYgfSAgZnJvbSAnLi9uYXYnXHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlRmV0Y2hVc2VyIH0gZnJvbSAnLi4vdXRpbHMvdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gKCkgID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgbG9hZGluZyB9ID0gdXNlRmV0Y2hVc2VyKCk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHVzZXIsIGxvYWRpbmcpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZ3JpZCBncmlkLWNvbHMtNFwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nc206aC0xMCBoLTggcHItMScgc3JjPVwiL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgc206dmlzaWJsZSBpbnZpc2libGVcIj5OZXdzcHJpc208L2E+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NhdmVkLWFydGljbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHRleHQtYmx1ZS03MDBcIj5TYXZlZCBBcnRpY2xlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic206bXItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnVuZGxlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCB0ZXh0LWJsdWUtNzAwXCI+QnVuZGxlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZlZWRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHRleHQtYmx1ZS03MDBcIj5GZWVkczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7dXNlciAmJiAhbG9hZGluZyA/IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FwaS9sb2dvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbTptci02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcGkvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMFwiPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ1JFQVRFX0JVTkRMRV9NVVRBVElPTixcclxuICBDUkVBVEVfRkVFRF9NVVRBVElPTixcclxufSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEZJTkRfQlVORExFX1RBR1NfUVVFUlksXHJcbiAgRklORF9GRUVEU19RVUVSWSxcclxuICBGSU5EX0ZFRURfVEFHU19RVUVSWSxcclxufSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9xdWVyaWVzJztcclxuaW1wb3J0IHsgcHJlcGFyZU5ld1VwZGF0ZU9iaiB9IGZyb20gJy4uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmonO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvblR5cGUsXHJcbiAgQmFkZ2VGaWVsZE5hbWUsXHJcbiAgQnVuZGxlT2JqZWN0LFxyXG4gIEZlZWRPYmplY3QsXHJcbiAgSXRlbVR5cGUsXHJcbiAgTmV3SXRlbVN0YXRlLFxyXG4gIFNlYXJjaFF1ZXJ5TmFtZSxcclxuICBTZWxlY3RlZEZlZWRTdGF0ZSxcclxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gJy4vYmFkZ2VMaXN0JztcclxuaW1wb3J0IHsgR2VuZXJhdGVJbnB1dEZpZWxkIH0gZnJvbSAnLi9nZW5lcmF0ZUlucHV0RmllbGQnO1xyXG5pbXBvcnQgeyBTZWFyY2hJdGVtcyB9IGZyb20gJy4vc2VhcmNoSXRlbXMnO1xyXG5pbXBvcnQgeyBFcnJvclNpZ24sIFdhaXRpbmdDbG9jayB9IGZyb20gJy4vc3ZnJztcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdFZGl0SXRlbSA9ICh7XHJcbiAgdHlwZSxcclxuICBzZWxlY3RlZCxcclxuICBzZXRTZWxlY3RlZCxcclxufToge1xyXG4gIHR5cGU6IEl0ZW1UeXBlO1xyXG4gIHNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZTtcclxuICBzZXRTZWxlY3RlZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U2VsZWN0ZWRGZWVkU3RhdGU+PjtcclxufSkgPT4ge1xyXG4gIGNvbnN0IGlzRmVlZCA9IHR5cGUgPT09IEl0ZW1UeXBlLkZlZWRUeXBlO1xyXG4gIGNvbnN0IGluaXRpYWxGZWVkOiBGZWVkT2JqZWN0ID0geyBuYW1lOiAnJywgdXJsOiAnJywgdGFnczogW10gfTtcclxuICBjb25zdCBpbml0aWFsQnVuZGxlOiBCdW5kbGVPYmplY3QgPSB7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZmVlZHM6IFtdLFxyXG4gIH07XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlOiBOZXdJdGVtU3RhdGUgPSBpc0ZlZWQgPyBpbml0aWFsRmVlZCA6IGluaXRpYWxCdW5kbGU7XHJcbiAgY29uc3QgW2N1cnJlbnRJdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlPE5ld0l0ZW1TdGF0ZT4oaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBpbnB1dEZpZWxkcyA9IGlzRmVlZCA/IFsnbmFtZScsICd1cmwnXSA6IFsnbmFtZScsICdkZXNjcmlwdGlvbiddO1xyXG5cclxuICBjb25zdCBbY3JlYXRlSXRlbU11dGF0aW9uLCB7IGxvYWRpbmc6IGNyZWF0ZUxvYWRpbmcsIGVycm9yOiBjcmVhdGVFcnJvciB9XSA9XHJcbiAgICB1c2VNdXRhdGlvbihpc0ZlZWQgPyBDUkVBVEVfRkVFRF9NVVRBVElPTiA6IENSRUFURV9CVU5ETEVfTVVUQVRJT04pO1xyXG5cclxuICBpZiAoY3JlYXRlTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxXYWl0aW5nQ2xvY2sgY2xhc3NOYW1lPSdteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG8nIC8+O1xyXG4gIH1cclxuICBpZiAoY3JlYXRlRXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3JTaWduIGNsYXNzTmFtZT0nbXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvJyAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHByZXBhcmVOZXdVcGRhdGVPYmooY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBjcmVhdGVJdGVtTXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgZGF0YSB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRJdGVtKGluaXRpYWxTdGF0ZSk7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xMiBnYXAtNCByb3VuZGVkLW1kIGJvcmRlci00IG15LTQgcHktMiBweC00Jz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2NvbC1zcGFuLTEyIHRleHQtbGcgZm9udC1tZWRpdW0gcHktMic+XHJcbiAgICAgICAgICAgIHtpc0ZlZWQgPyAnTmV3IEZlZWQnIDogJ05ldyBCdW5kbGUnfVxyXG4gICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNic+XHJcbiAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgICA8R2VuZXJhdGVJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake3R5cGV9LSR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZUhhbmRsZXI9e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2JsYWNrIHB5LTInPlRhZ3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLkNSRUFURX1cclxuICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgaXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPkFkZCBOZXcgVGFnOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSXRlbXNcclxuICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZlZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gU2VhcmNoUXVlcnlOYW1lLmZpbmRGZWVkVGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiBTZWFyY2hRdWVyeU5hbWUuZmluZEJ1bmRsZVRhZ3NcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBxdWVyeT17aXNGZWVkID8gRklORF9GRUVEX1RBR1NfUVVFUlkgOiBGSU5EX0JVTkRMRV9UQUdTX1FVRVJZfVxyXG4gICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17Y3VycmVudEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2lzRmVlZCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxhY2sgcHktMic+RmVlZHM6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5DUkVBVEV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibGFjayBweS0yJz5BZGQgTmV3IEZlZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZT17U2VhcmNoUXVlcnlOYW1lLmZpbmRGZWVkc31cclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtGSU5EX0ZFRURTX1FVRVJZfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BweS00ICR7aXNGZWVkID8gbnVsbCA6ICdwdC0xJ31gfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHktNCAke2BiZy0ke1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgfS00MDAgYH0gaG92ZXI6YmctJHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgIH0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB4LTEyIHJvdW5kZWRgfVxyXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBFcnJvclNpZ24gfSBmcm9tIFwiLi9zdmdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmeUVycm9yID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgPEVycm9yU2lnbiBjbGFzc05hbWU9XCJoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBXYWl0aW5nQ2xvY2sgfSBmcm9tIFwiLi9zdmdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmeUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleFwiPlxyXG4gICAgICAgICA8V2FpdGluZ0Nsb2NrIGNsYXNzTmFtZT1cImgtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0b1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1bmRsZVRhZywgRmVlZFRhZyB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEJhZGdlRmllbGROYW1lLFxyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG59IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgTWludXMsIFBsdXMgfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5leHBvcnQgY29uc3QgT25lQmFkZ2UgPSAoe1xyXG4gIGl0ZW0sXHJcbiAgYWN0aW9uLFxyXG4gIGN1cnJlbnRJdGVtLFxyXG4gIGZpZWxkTmFtZSxcclxuICBzZXRJdGVtLFxyXG59OiB7XHJcbiAgaXRlbTogRmVlZFRhZyB8IEJ1bmRsZVRhZyB8IEZlZWRPYmplY3Q7XHJcbiAgYWN0aW9uOiBBY3Rpb25UeXBlO1xyXG4gIGN1cnJlbnRJdGVtPzogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDtcclxuICBmaWVsZE5hbWU6IEJhZGdlRmllbGROYW1lO1xyXG4gIHNldEl0ZW0/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj47XHJcbn0pID0+IHtcclxuICBjb25zdCBjb2xvciA9XHJcbiAgICBmaWVsZE5hbWUgPT09IEJhZGdlRmllbGROYW1lLnRhZ3NcclxuICAgICAgPyAnYmx1ZSdcclxuICAgICAgOiBCYWRnZUZpZWxkTmFtZS5mZWVkc1xyXG4gICAgICA/ICdncmVlbidcclxuICAgICAgOiAncHVycGxlJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIHB5LTIgcHgtMiByb3VuZGVkLWxnIGJnLSR7Y29sb3J9LTIwMCBgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2FjdGlvbiA9PT0gQWN0aW9uVHlwZS5BREQgPyAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRJdGVtKChjdXJyU3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogWy4uLmN1cnJTdGF0ZVtmaWVsZE5hbWVdLCB7IC4uLml0ZW0gfV0sXHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGx1cyBjbGFzc05hbWU9J2gtNCB3LTQgdGV4dC1ncmF5LTUwMCcgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHthY3Rpb24gPT09IEFjdGlvblR5cGUuQ1JFQVRFID8gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SXRlbSgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgW2ZpZWxkTmFtZV06IGN1cnJTdGF0ZVtmaWVsZE5hbWVdLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgKG8pID0+IGl0ZW0ubmFtZSAhPT0gby5uYW1lXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1pbnVzIGNsYXNzTmFtZT0naC00IHctNCB0ZXh0LWdyYXktNTAwJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC14cyB0ZXh0LSR7Y29sb3J9LTYwMCB0ZXh0LWNlbnRlcmB9PiB7aXRlbS5uYW1lfSA8L3A+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSwgQmFkZ2VGaWVsZE5hbWUsIEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCwgSXRlbVR5cGUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCJcclxuaW1wb3J0IHsgQmFkZ2VMaXN0IH0gZnJvbSAnLi9iYWRnZUxpc3QnO1xyXG5pbXBvcnQgeyBQcm9maWxlUGljIH0gZnJvbSAnLi9wcm9maWxlUGljJztcclxuaW1wb3J0IHsgRG91YmxlQXJyb3dEb3duLCBEb3VibGVBcnJvd1JpZ2h0IH0gZnJvbSBcIi4vc3ZnXCI7XHJcbmV4cG9ydCBjb25zdCBPbmVMaXN0SXRlbSA9ICh7XHJcbiAgICBpdGVtLFxyXG4gICAgdHlwZSxcclxuICAgIHNlbGVjdGVkLFxyXG4gICAgc2V0U2VsZWN0ZWQsXHJcbiAgICB1c2VTZWxlY3RlZCA9IGZhbHNlLFxyXG4gICAgYWxsb3dFZGl0c1xyXG4gIH0gOiB7XHJcbiAgICAgIGl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3RcclxuICAgICAgdHlwZTogSXRlbVR5cGU7XHJcbiAgICAgIHNlbGVjdGVkPyA6IFNlbGVjdGVkRmVlZFN0YXRlO1xyXG4gICAgICBzZXRTZWxlY3RlZD86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj47XHJcbiAgICAgIHVzZVNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgICAgYWxsb3dFZGl0cz86IGJvb2xlYW47XHJcbiAgICBcclxuICAgIH0pICA9PiB7XHJcbiAgICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZTtcclxuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB1c2VTZWxlY3RlZCAmJiBzZWxlY3RlZCAmJiBzZWxlY3RlZC5pZCA9PT0gaXRlbS5pZDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtpc0ZlZWQgPyAnZmVlZCcgOiAnYnVuZGxlJyB9LyR7aXRlbS5pZH1gfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3ItcG9pbnRlciBncmlkIGdyaWQtY29scy02IHAtNCByb3VuZGVkLWxnXHJcbiAgICAgICAgICAgICAgICAgICAgJHt1c2VTZWxlY3RlZCA/ICdyb3VuZGVkLWItbm9uZScgOiAnYm9yZGVyLWItNCd9IFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10LTQgYm9yZGVyLWwtNCBib3JkZXItci00XHJcbiAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPyBgYm9yZGVyLSR7aXNGZWVkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LTQwMGAgOiAnYm9yZGVyLWdyYXktMzAwJ31cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aXRlbS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFpc0ZlZWQgPyA8cD57aXRlbVsnZGVzY3JpcHRpb24nXX08L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5hY3Rpb25zPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3Bhbi1jb2wtNiBweS0wIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmF1dGhvciA/IDxQcm9maWxlUGljIGF1dGhvcj17aXRlbS5hdXRob3J9Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTYgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5UYWdzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRzIGdyaWRzLWNvbHMtMiBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuTk9ORX1cclxuICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2lzRmVlZCA/ICdCdW5kbGVzJyA6ICdGZWVkcyd9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Y2hpbGQgaXRlbXMuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt1c2VTZWxlY3RlZCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCByb3VuZGVkLWxnIHJvdW5kZWQtdC1ub25lIGFsaWduLW1pZGRsZSAke2lzU2VsZWN0ZWQgPyBgYmctJHtpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSd9LTQwMGAgOiBgYmctZ3JheS0zMDBgfSBwLTQgei0xMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RG91YmxlQXJyb3dEb3duIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC13aGl0ZS01MDAgbXItMiBtdC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BIaWRlICR7aXNGZWVkID8gJ0ZlZWQnIDogJ0J1bmRsZSd9IEFydGljbGVzYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZHM6IGlzRmVlZCA/IFtpdGVtXTogaXRlbVsnZmVlZHMnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld01vZGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCByb3VuZGVkLWxnIHJvdW5kZWQtdC1ub25lIGFsaWduLW1pZGRsZSAke2lzU2VsZWN0ZWQgPyBgYmctJHtpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSd9LTQwMGAgOiBgYmctZ3JheS0zMDBgfSBwLTQgei0xMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RG91YmxlQXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGUtNTAwIG1yLTIgbXQtMVwiPjwvRG91YmxlQXJyb3dSaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AgU2hvdyAke2lzRmVlZCA/IGBGZWVkYCA6IGBCdW5kbGVgfSBBcnRpY2xlc2B9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4vc3ZnJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZVBpYyA9ICh7IGF1dGhvciB9IDogeyBhdXRob3I6IFVzZXIgfSkgPT4gKFxyXG4gICAgPD5cclxuICAgICAgICB7YXV0aG9yLnBpY3R1cmUgPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBwLTAuNSB3LTggaC04IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2F1dGhvci5waWN0dXJlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8UXVlc3Rpb24gY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWdyYXktNTAwXCIgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxwPnthdXRob3Iubmlja25hbWV9PC9wPlxyXG4gICAgPC8+XHJcbikiLCJpbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvblR5cGUsXHJcbiAgQmFkZ2VGaWVsZE5hbWUsXHJcbiAgQnVuZGxlT2JqZWN0LFxyXG4gIEZlZWRPYmplY3QsXHJcbiAgU2VhcmNoUXVlcnlOYW1lLFxyXG59IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgQmFkZ2VMaXN0IH0gZnJvbSAnLi9iYWRnZUxpc3QnO1xyXG4vLyBpbXBvcnQgeyBTZWFyY2gsIFNwaW4gfSBmcm9tICcuL3N2Zyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJdGVtcyA9ICh7XHJcbiAgY3VycmVudEl0ZW0sXHJcbiAgc2V0SXRlbSxcclxuICBxdWVyeU5hbWUsXHJcbiAgcXVlcnksXHJcbiAgZmllbGROYW1lLFxyXG59OiB7XHJcbiAgY3VycmVudEl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7XHJcbiAgc2V0SXRlbTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdD4+O1xyXG4gIHF1ZXJ5TmFtZTogU2VhcmNoUXVlcnlOYW1lO1xyXG4gIHF1ZXJ5OiBEb2N1bWVudE5vZGU7XHJcbiAgZmllbGROYW1lOiBCYWRnZUZpZWxkTmFtZTtcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpbmRJdGVtUXVlcnksIHsgbG9hZGluZywgZGF0YSwgY2FsbGVkIH1dID0gdXNlTGF6eVF1ZXJ5KHF1ZXJ5LCB7XHJcbiAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2cobG9hZGluZywgZGF0YSwgY2FsbGVkKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hlZEl0ZW1zID0gXy5nZXQoZGF0YSwgcXVlcnlOYW1lKTtcclxuICBjb25zdCBmaWx0RmluZEl0ZW1zID0gZmV0Y2hlZEl0ZW1zXHJcbiAgICA/IGZldGNoZWRJdGVtcy5maWx0ZXIoXHJcbiAgICAgICAgKG9uZUl0ZW0pID0+XHJcbiAgICAgICAgICAhY3VycmVudEl0ZW1bZmllbGROYW1lXS5tYXAoKG8pID0+IG8ubmFtZSkuaW5jbHVkZXMob25lSXRlbS5uYW1lKVxyXG4gICAgICApXHJcbiAgICA6IFtdO1xyXG5cclxuICBjb25zdCBtYXRjaEN1cnJlbnQgPSBmaWx0RmluZEl0ZW1zLmZpbHRlcigobykgPT4gby5uYW1lID09PSBzZWFyY2gpO1xyXG4gIGNvbnN0IG1hdGNoTGlzdCA9IGN1cnJlbnRJdGVtW2ZpZWxkTmFtZV0uZmlsdGVyKChvKSA9PiBvLm5hbWUgPT09IHNlYXJjaCk7XHJcbiAgY29uc3QgZmlsdEZpbmRJdGVtc1dpdGhBZGQgPVxyXG4gICAgbWF0Y2hDdXJyZW50Lmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgbWF0Y2hMaXN0Lmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgcXVlcnlOYW1lICE9PSAnZmluZEZlZWRzJ1xyXG4gICAgICA/IFsuLi5maWx0RmluZEl0ZW1zLCB7IG5hbWU6IHNlYXJjaCB9XVxyXG4gICAgICA6IGZpbHRGaW5kSXRlbXM7XHJcblxyXG4gIGNvbnNvbGUubG9nKGZldGNoZWRJdGVtcyk7XHJcbiAgY29uc29sZS5sb2coZmlsdEZpbmRJdGVtcyk7XHJcblxyXG4gIGNvbnN0IGR1bW15TmV3SXRlbSA9IHtcclxuICAgIC4uLmN1cnJlbnRJdGVtLFxyXG4gICAgW2ZpZWxkTmFtZV06IGZpbHRGaW5kSXRlbXNXaXRoQWRkLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naC02IHctNiB0ZXh0LWdyYXktNTAwIGFuaW1hdGUtc3BpbidcclxuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICBkPSdNNCA0djVoLjU4Mm0xNS4zNTYgMkE4LjAwMSA4LjAwMSAwIDAwNC41ODIgOW0wIDBIOW0xMSAxMXYtNWgtLjU4MW0wIDBhOC4wMDMgOC4wMDMgMCAwMS0xNS4zNTctMm0xNS4zNTcgMkgxNSdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtMyBtci0yIHctNiBoLTYgdGV4dC1ncmF5LTUwMCdcclxuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICBkPSdNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLTQgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zJ1xyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHNldEl0ZW0oKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBbXHJcbiAgICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZVtmaWVsZE5hbWVdLFxyXG4gICAgICAgICAgICAgICAgICB7IC4uLmR1bW15TmV3SXRlbVtmaWVsZE5hbWVdWzBdIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICBzZXRTZWFyY2goKCkgPT4gJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09IHNlYXJjaCkge1xyXG4gICAgICAgICAgICAgIHNldFNlYXJjaCgoKSA9PiBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgZmluZEl0ZW1RdWVyeSh7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgZGF0YTogeyBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlIH0gfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC0yIGZsZXggbS0yJz5cclxuICAgICAgICAgIHtzZWFyY2ggIT09ICcnID8gKFxyXG4gICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgZmllbGROYW1lPXtmaWVsZE5hbWV9XHJcbiAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLkFERH1cclxuICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgIGl0ZW09e2R1bW15TmV3SXRlbX1cclxuICAgICAgICAgICAgICBzZXRTZWFyY2g9e3NldFNlYXJjaH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiBjYWxsZWQgPyAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCc+Tm8gbWF0Y2hlczwvcD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgZmxleCBtLTInPlxyXG4gICAgICAgIHtzZWFyY2ggIT09ICcnID8gKFxyXG4gICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICBmaWVsZE5hbWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLkFERH1cclxuICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgaXRlbT17ZHVtbXlOZXdJdGVtfVxyXG4gICAgICAgICAgICBzZXRTZWFyY2g9e3NldFNlYXJjaH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IGNhbGxlZCA/IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCc+Tm8gTWF0Y2hlczwvcD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgV2FpdGluZ0Nsb2NrID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgZD1cIk0xMiA4djRsMyAzbTYtM2E5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JTaWduID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgZD1cIk0xMiA5djJtMCA0aC4wMW0tNi45MzggNGgxMy44NTZjMS41NCAwIDIuNTAyLTEuNjY3IDEuNzMyLTNMMTMuNzMyIDRjLS43Ny0xLjMzMy0yLjY5NC0xLjMzMy0zLjQ2NCAwTDMuMzQgMTZjLS43NyAxLjMzMy4xOTIgMyAxLjczMiAzelwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRG91YmxlQXJyb3dEb3duID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgZD1cIk0xOSAxM2wtNyA3LTctN20xNC04bC03IDctNy03XCIgLz5cclxuPC9zdmc+XHJcbilcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRG91YmxlQXJyb3dSaWdodCA9ICh7Y2xhc3NOYW1lfSkgPT4gKFxyXG4gICAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgID5cclxuICAgIDxwYXRoXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgIGQ9XCJNMTMgNWw3IDctNyA3TTUgNWw3IDctNyA3XCJcclxuICAgIC8+XHJcbjwvc3ZnPlxyXG4pXHJcbmV4cG9ydCBjb25zdCBQbHVzID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgIGZpbGw9XCJub25lXCJcclxuICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgPlxyXG4gIDxwYXRoXHJcbiAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICBzdHJva2VXaWR0aD17Mn1cclxuICAgZD1cIk0xMiA0djE2bTgtOEg0XCJcclxuICAgLz5cclxuPC9zdmc+XHJcbik7XHJcbmV4cG9ydCBjb25zdCBNaW51cyA9ICh7Y2xhc3NOYW1lfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICBmaWxsPVwibm9uZVwiXHJcbiAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gID5cclxuICA8cGF0aFxyXG4gICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgIGQ9XCJNMjAgMTJINFwiXHJcbiAgIC8+XHJcbjwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgIGZpbGw9XCJub25lXCJcclxuICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gIDxwYXRoXHJcbiAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICBzdHJva2VXaWR0aD17Mn1cclxuICAgZD1cIk04LjIyOCA5Yy41NDktMS4xNjUgMi4wMy0yIDMuNzcyLTIgMi4yMSAwIDQgMS4zNDMgNCAzIDAgMS40LTEuMjc4IDIuNTc1LTMuMDA2IDIuOTA3LS41NDIuMTA0LS45OTQuNTQtLjk5NCAxLjA5M20wIDNoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiXHJcbiAgIC8+XHJcbjwvc3ZnPlxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgU3BpbiA9ICh7Y2xhc3NOYW1lfSkgPT4ge1xyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBkPVwiTTQgNHY1aC41ODJtMTUuMzU2IDJBOC4wMDEgOC4wMDEgMCAwMDQuNTgyIDltMCAwSDltMTEgMTF2LTVoLS41ODFtMCAwYTguMDAzIDguMDAzIDAgMDEtMTUuMzU3LTJtMTUuMzU3IDJIMTVcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2ggPSAoe2NsYXNzTmFtZX0pID0+IHtcclxuICA8c3ZnXHJcbiAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgZmlsbD1cIm5vbmVcIlxyXG4gIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbj5cclxuICA8cGF0aFxyXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiXHJcbiAgLz5cclxuPC9zdmc+XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgRkVFRF9UQUdfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEZlZWRUYWdGcmFnbWVudCBvbiBGZWVkVGFnIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJVTkRMRV9UQUdfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEJ1bmRsZVRhZ0ZyYWdtZW50IG9uIEJ1bmRsZVRhZyB7XG4gICAgaWRcbiAgICBuYW1lXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBVVRIT1JfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEF1dGhvckZyYWdtZW50IG9uIFVzZXIge1xuICAgIGlkXG4gICAgYXV0aDBcbiAgICBwaWN0dXJlXG4gICAgbmlja25hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExJS0VfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IExpa2VGcmFnbWVudCBvbiBMaWtlIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZFRURfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEZlZWRGcmFnbWVudCBvbiBGZWVkIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgICB1cmxcbiAgICBsaWtlcyB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgICB0YWdzIHtcbiAgICAgIC4uLkZlZWRUYWdGcmFnbWVudFxuICAgIH1cbiAgICBhdXRob3Ige1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtGRUVEX1RBR19GUkFHTUVOVH1cbiAgJHtBVVRIT1JfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQlVORExFX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBCdW5kbGVGcmFnbWVudCBvbiBCdW5kbGUge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIGRlc2NyaXB0aW9uXG4gICAgdGFncyB7XG4gICAgICAuLi5CdW5kbGVUYWdGcmFnbWVudFxuICAgIH1cbiAgICBhdXRob3Ige1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gICAgbGlrZXMge1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtCVU5ETEVfVEFHX0ZSQUdNRU5UfVxuICAke0FVVEhPUl9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBTYXZlZEFydGljbGVGcmFnbWVudCBvbiBTYXZlZEFydGljbGUge1xuICAgIGlkXG4gICAgY29udGVudHNcbiAgICB1cmxcbiAgICBhdXRob3Ige1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gICAgZmVlZCB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtBVVRIT1JfRlJBR01FTlR9XG4gICR7RkVFRF9GUkFHTUVOVH1cbmA7XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBCVU5ETEVfRlJBR01FTlQsIEZFRURfRlJBR01FTlQsIFNBVkVEX0FSVElDTEVfRlJBR01FTlQgfSBmcm9tICcuL2ZyYWdtZW50cyc7XG5cbmV4cG9ydCBjb25zdCBMSUtFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gbGlrZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBMaWtlQnVuZGxlSW5wdXQpIHtcbiAgICBsaWtlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG4gICR7RkVFRF9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMSUtFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGxpa2VGZWVkTXV0YXRpb24oJGRhdGE6IExpa2VGZWVkSW5wdXQpIHtcbiAgICBsaWtlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG4gICR7RkVFRF9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVCdW5kbGVNdXRhdGlvbigkZGF0YTogQnVuZGxlQ3JlYXRlSW5wdXQpIHtcbiAgICBjcmVhdGVCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICBidW5kbGVzIHtcbiAgICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuZXhwb3J0IGNvbnN0IFVQREFURV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBCdW5kbGVVcGRhdGVJbnB1dCkge1xuICAgIHVwZGF0ZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIGJ1bmRsZXMge1xuICAgICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlRmVlZE11dGF0aW9uKCRkYXRhOiBGZWVkQ3JlYXRlSW5wdXQpIHtcbiAgICBjcmVhdGVGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICBmZWVkcyB7XG4gICAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gdXBkYXRlRmVlZE11dGF0aW9uKCRkYXRhOiBGZWVkVXBkYXRlSW5wdXQpIHtcbiAgICB1cGRhdGVGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICBmZWVkcyB7XG4gICAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlU2F2ZWRBcnRpY2xlTXV0YXRpb24oJGRhdGE6IFNhdmVkQXJ0aWNsZUNyZWF0ZUlucHV0KSB7XG4gICAgY3JlYXRlU2F2ZWRBcnRpY2xlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5TYXZlZEFydGljbGVGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke1NBVkVEX0FSVElDTEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlQnVuZGxlTXV0YXRpb24oJGRhdGE6IEJ1bmRsZUlucHV0KSB7XG4gICAgZGVsZXRlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRJbnB1dCkge1xuICAgIGRlbGV0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZVNhdmVkQXJ0aWNsZU11dGF0aW9uKCRkYXRhOiBEZWxldGVTYXZlZEFydGljbGVJbnB1dCkge1xuICAgIGRlbGV0ZVNhdmVkQXJ0aWNsZShkYXRhOiAkZGF0YSkge1xuICAgICAgaWRcbiAgICAgIHVybFxuICAgIH1cbiAgfVxuYDtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7XG4gIEFVVEhPUl9GUkFHTUVOVCxcbiAgQlVORExFX0ZSQUdNRU5ULFxuICBCVU5ETEVfVEFHX0ZSQUdNRU5ULFxuICBGRUVEX0ZSQUdNRU5ULFxuICBGRUVEX1RBR19GUkFHTUVOVCxcbiAgU0FWRURfQVJUSUNMRV9GUkFHTUVOVCxcbn0gZnJvbSAnLi9mcmFnbWVudHMnO1xuXG5cbmV4cG9ydCBjb25zdCBCVU5ETEVTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgYnVuZGxlcyB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG4gICR7RkVFRF9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGRUVEU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIGZlZWRzIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgRklORF9GRUVEU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmluZEZlZWRzUXVlcnkoJGRhdGE6IEZpbmRGZWVkc0lucHV0KSB7XG4gICAgZmluZEZlZWRzKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZFRURfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGZlZWRRdWVyeSgkZGF0YTogRmVlZElucHV0KSB7XG4gICAgZmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgZmVlZHMge1xuICAgICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQlVORExFX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBidW5kbGVRdWVyeSgkZGF0YTogQnVuZGxlSW5wdXQpIHtcbiAgICBidW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICBidW5kbGVzIHtcbiAgICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgRklORF9GRUVEX1RBR1NfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGZpbmRGZWVkVGFnc1F1ZXJ5KCRkYXRhOiBGaW5kRmVlZFRhZ3NJbnB1dCkge1xuICAgIGZpbmRGZWVkVGFncyhkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZFRhZ0ZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7RkVFRF9UQUdfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgRklORF9CVU5ETEVfVEFHU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmluZEJ1bmRsZVRhZ3NRdWVyeSgkZGF0YTogRmluZEJ1bmRsZVRhZ3NJbnB1dCkge1xuICAgIGZpbmRCdW5kbGVUYWdzKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVUYWdGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9UQUdfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgU0FWRURfQVJUSUNMRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHNhdmVkQXJ0aWNsZXNRdWVyeSB7XG4gICAgc2F2ZWRBcnRpY2xlcyB7XG4gICAgICAuLi5TYXZlZEFydGljbGVGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke1NBVkVEX0FSVElDTEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgU0FWRURfQVJUSUNMRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgc2F2ZWRBcnRpY2xlUXVlcnkoJGRhdGE6IFNhdmVkQXJ0aWNsZUlucHV0KSB7XG4gICAgc2F2ZWRBcnRpY2xlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5TYXZlZEFydGljbGVGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke1NBVkVEX0FSVElDTEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgTUVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IG1lUXVlcnkge1xuICAgIG1lIHtcbiAgICAgIC4uLkF1dGhvckZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7QVVUSE9SX0ZSQUdNRU5UfVxuYDtcbiIsImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuXHJcblxyXG5jb25zdCBnZW5OZXN0ZWRJdGVtcyA9IChjdXJyZW50SXRlbSkgPT4ge1xyXG4gICAgY29uc3QgdGFncyA9IFxyXG4gICAgXCJ0YWdzXCIgaW4gY3VycmVudEl0ZW0gPyB7XHJcbiAgICAgICAgdGFnczoge1xyXG4gICAgICAgICAgICBjb25uZWN0OiBjdXJyZW50SXRlbS50YWdzLm1hcCgoeyBpZCB9KSA9Pih7IGlkIH0pKS5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgIT09IHVuZGVmaW5lZCksXHJcblxyXG4gICAgICAgICAgICBjcmVhdGU6IGN1cnJlbnRJdGVtLnRhZ3NcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBpZCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAubWFwKChvKSA9PiAoeyAuLi5vLCBpZDogdXVpZHY0KCkgfSkpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbiAgICAgOiB7fTtcclxuXHJcbiAgICAgY29uc3QgZmVlZHMgPVxyXG4gICAgICdmZWVkcycgaW4gY3VycmVudEl0ZW1cclxuICAgICAgID8ge1xyXG4gICAgICAgICAgIGZlZWRzOiB7XHJcbiAgICAgICAgICAgICBjb25uZWN0OiBjdXJyZW50SXRlbS5mZWVkc1xyXG4gICAgICAgICAgICAgICAubWFwKCh7IGlkIH0pID0+ICh7IGlkIH0pKVxyXG4gICAgICAgICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgIH1cclxuICAgICAgIDoge307XHJcblxyXG4gICAgICAgY29uc3QgeyBfX3R5cGVuYW1lLCBsaWtlcywgYXV0aG9yLCBidW5kbGVzLCAuLi5jbGVhbmVkSXRlbSB9ID0gY3VycmVudEl0ZW07ICAvL3N0cmlwIHVud2FudGVkIGZyb20gY3VycmVudEl0ZW0gYW5kIGNhbGwgaXQgJ2NsZWFuZWRJdGVtJyAnQ2xlYW5lZEl0ZW0nIHdpbGwgYmUgYWxsIG9mIHRoZSBmaWVsZHMgdGhhdCBhcmUgbGVmdG92ZXIuXHJcblxyXG4gICAgICAgcmV0dXJuIHsgLi4uY2xlYW5lZEl0ZW0sIC4uLnRhZ3MsIC4uLmZlZWRzIH07ICAvL2FkZCBhbGwgdGFnIGFuZCBmZWVkIGluZm8gdG8gY2xlYW5lZEl0ZW0uXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcmVwYXJlTmV3VXBkYXRlT2JqID0gKGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgIGNvbnN0IGN1cnJlbnREYXRhID0gIGdlbk5lc3RlZEl0ZW1zKGN1cnJlbnRJdGVtKVxyXG5cclxuICAgcmV0dXJuIHsgLi4uY3VycmVudERhdGEsICBpZDogdXVpZHY0KCkgLy8gY3VycmVudERhdGEgKGZlZWQgb3IgdGFnKSBpcyByZXR1cm5lZCBXSVRIT1VUIGFuIGlkIG51bWJlcjsgdGh1cyBvbmUgaXMgcHJvdmlkZWQuXHJcbiAgIH0gXHJcbn0iLCJpbXBvcnQgeyBCdW5kbGVUYWcsIEZlZWQsIEZlZWRUYWcsIFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcblxyXG5leHBvcnQgZW51bSBJdGVtVHlwZSB7XHJcbiAgICBCdW5kbGVUeXBlID0gJ0J1bmRsZVR5cGUnLFxyXG4gICAgRmVlZFR5cGUgPSAnRmVlZFR5cGUnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBGZWVkT2JqZWN0ID0ge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHRhZ3M6IEZlZWRUYWdbXTtcclxuICAgIGJ1bmRsZXM/OiBCdW5kbGVPYmplY3RbXVxyXG4gICAgYXV0aG9yPzogVXNlcjtcclxuICAgIGxpa2VzPzogIFVzZXJbXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEJ1bmRsZU9iamVjdCA9IHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHRhZ3M6IEJ1bmRsZVRhZ1tdO1xyXG4gICAgZmVlZHM/OiBGZWVkT2JqZWN0W11cclxuICAgIGF1dGhvcj86IFVzZXI7XHJcbiAgICBsaWtlcz86ICBVc2VyW107XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNlbGVjdGVkRmVlZFN0YXRlID0ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZlZWRzOiBGZWVkW11cclxuICAgIGVkaXRNb2RlOiBib29sZWFuO1xyXG4gICAgbmV3TW9kZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFkZ2VGaWVsZE5hbWUge1xyXG4gICB0YWdzID0gJ3RhZ3MnLFxyXG4gICBmZWVkcyA9ICdmZWVkcycsXHJcbiAgIGJ1bmRsZXMgPSAnYnVuZGxlcydcclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIEFjdGlvblR5cGUge1xyXG4gICBBREQgPSAnQUREJyxcclxuICAgQ1JFQVRFID0gJ0NSRUFURScsXHJcbiAgIE5PTkUgPSAnTk9ORSdcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTmV3SXRlbVN0YXRlID0gIEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gU2VhcmNoUXVlcnlOYW1lIHtcclxuICAgIGZpbmRGZWVkVGFncyA9ICdmaW5kRmVlZFRhZ3MnLFxyXG4gICAgZmluZEJ1bmRsZVRhZ3MgPSAnZmluZEJ1bmRsZVRhZ3MnLFxyXG4gICAgZmluZEZlZWRzID0gJ2ZpbmRGZWVkcycsXHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgICBfX3VzZXI6IGFueVxyXG59XHJcblxyXG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcihjb29raWUgPSAnJykge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX191c2VyKSB7XHJcbiAgICByZXR1cm4gd2luZG93Ll9fdXNlclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnL2FwaS9tZScsXHJcbiAgICBjb29raWVcclxuICAgICAgPyB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIGNvb2tpZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICA6IHt9XHJcbiAgKVxyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgZGVsZXRlIHdpbmRvdy5fX3VzZXJcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2luZG93Ll9fdXNlciA9IGpzb25cclxuICB9XHJcbiAgcmV0dXJuIGpzb25cclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRmV0Y2hVc2VyKHsgcmVxdWlyZWQgfSA9IHt9KSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoXHJcbiAgICAoKSA9PiAhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX3VzZXIpXHJcbiAgKVxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3aW5kb3cuX191c2VyIHx8IG51bGxcclxuICB9KVxyXG5cclxuICB1c2VFZmZlY3QoXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGlmICghbG9hZGluZyAmJiB1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZVxyXG5cclxuICAgICAgZmV0Y2hVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIC8vIE9ubHkgc2V0IHRoZSB1c2VyIGlmIHRoZSBjb21wb25lbnQgaXMgc3RpbGwgbW91bnRlZFxyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcclxuICAgICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiBidXQgbG9naW4gaXMgcmVxdWlyZWRcclxuICAgICAgICAgIGlmIChyZXF1aXJlZCAmJiAhdXNlcikge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2xvZ2luJ1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBpc01vdW50ZWQgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgW11cclxuICApXHJcblxyXG4gIHJldHVybiB7IHVzZXIsIGxvYWRpbmcgfVxyXG59IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==